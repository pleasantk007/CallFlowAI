
export async function POST(req) {
  const formData = await req.formData();
  const recordingUrl = formData.get("RecordingUrl");

  console.log("Recording saved at:", recordingUrl);

  const twiml = `<?xml version="1.0" encoding="UTF-8"?>
<Response>
  <Say voice="Polly.Matthew">Thanks for your message. Goodbye.</Say>
</Response>`;

  return new Response(twiml, {
    status: 200,
    headers: {
      'Content-Type': 'text/xml',
    },
  });
}
