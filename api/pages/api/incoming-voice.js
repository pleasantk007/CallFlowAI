export default async function handler(req, res) {
  const twiml = `<?xml version="1.0" encoding="UTF-8"?>
  <Response>
    <Say voice="Polly.Matthew">Please leave a message after the tone.</Say>
    <Record maxLength="60" action="/api/voicemail-save" method="POST"/>
    <Say voice="Polly.Matthew">We didn't receive a recording. Goodbye.</Say>
  </Response>`;

  res.status(200).setHeader('Content-Type', 'text/xml').send(twiml);
}

