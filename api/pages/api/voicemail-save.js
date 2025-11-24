export async function POST(req) {
  const twiml = `<?xml version="1.0" encoding="UTF-8"?>
  <Response>
    <Say voice="Polly.Matthew">Sorry we missed you. Please leave a message after the tone.</Say>
    <Record maxLength="60" action="/api/voicemail-save" method="POST" />
    <Say voice="Polly.Matthew">We didn’t receive a recording. Goodbye.</Say>
  </Response>`;

  return new Response(twiml, {
    status: 200,
    headers: {
      'Content-Type': 'text/xml',
    },
  });
}
