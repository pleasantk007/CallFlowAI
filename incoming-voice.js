export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  const twiml = `<?xml version="1.0" encoding="UTF-8"?>
<Response>
  <Say voice="Polly.Joanna">
    Thank you for calling Call Flow AI. Please hold while we connect you to the next available representative.
  </Say>
</Response>`;

  res.setHeader('Content-Type', 'text/xml');
  res.status(200).send(twiml);
}
