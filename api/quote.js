// Vercel serverless function — receives quote-form submissions and emails them
// via the Resend API, authenticating with the `rsrenovationskey` env var.

const TO_EMAIL = 'jsrenovations1@hotmail.com';
// Resend requires the "from" to be on a verified domain. `onboarding@resend.dev`
// works out of the box; swap to an address on your verified domain when ready.
const FROM_EMAIL = 'J&S Renovations <onboarding@resend.dev>';
const SUBJECT = 'New Quote Request';

// Escape user-supplied values so they can't inject markup into the email.
function escapeHtml(value) {
  return String(value == null ? '' : value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

// Read the request body robustly whether Vercel pre-parses it or not.
function readBody(req) {
  if (req.body && typeof req.body === 'object') return Promise.resolve(req.body);
  if (typeof req.body === 'string' && req.body.length) {
    try { return Promise.resolve(JSON.parse(req.body)); } catch (e) { return Promise.resolve({}); }
  }
  return new Promise(function (resolve) {
    let raw = '';
    req.on('data', function (chunk) { raw += chunk; });
    req.on('end', function () {
      try { resolve(raw ? JSON.parse(raw) : {}); } catch (e) { resolve({}); }
    });
    req.on('error', function () { resolve({}); });
  });
}

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const apiKey = process.env.rsrenovationskey;
  if (!apiKey) {
    console.error('Missing rsrenovationskey environment variable.');
    return res.status(500).json({ error: 'Email service is not configured.' });
  }

  try {
    const body = (await readBody(req)) || {};

    const services = Array.isArray(body.services) ? body.services.join(', ') : (body.services || '');
    const details = body.details || '';
    const name = body.name || '';
    const phone = body.phone || '';
    const email = body.email || '';

    const submissionTime = new Date().toLocaleString('en-US', {
      timeZone: 'America/Phoenix',
      dateStyle: 'full',
      timeStyle: 'long'
    });

    const html =
      '<p><strong>Submission Time:</strong> ' + escapeHtml(submissionTime) + '</p>' +
      '<p><strong>Services Picked:</strong> ' + escapeHtml(services) + '</p>' +
      '<p><strong>Service Details:</strong><br>' + escapeHtml(details).replace(/\n/g, '<br>') + '</p>' +
      '<p><strong>Full Name:</strong> ' + escapeHtml(name) + '</p>' +
      '<p><strong>Phone Number:</strong> ' + escapeHtml(phone) + '</p>' +
      '<p><strong>Email Address:</strong> ' + escapeHtml(email) + '</p>';

    const payload = {
      from: FROM_EMAIL,
      to: [TO_EMAIL],
      subject: SUBJECT,
      html: html
    };
    if (email) payload.reply_to = email;

    const resendRes = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer ' + apiKey,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    if (!resendRes.ok) {
      const errText = await resendRes.text();
      console.error('Resend API error:', resendRes.status, errText);
      return res.status(502).json({ error: 'Failed to send email.' });
    }

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('Quote handler error:', err);
    return res.status(500).json({ error: 'Unexpected error.' });
  }
};
