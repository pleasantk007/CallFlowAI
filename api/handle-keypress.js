
import { NextResponse } from 'next/server';

export async function POST(req) {
  const data = await req.formData();
  const digits = data.get('Digits');

  let twiml = '<?xml version="1.0" encoding="UTF-8"?><Response>';

  if (digits === '1') {
    twiml += '<Dial action="/api/final-step" method="POST">+1234567890</Dial>'; // Replace with actual fallback number
  } else if (digits === '2') {
    twiml += '<Say voice="Polly.Joanna">Please leave a message after the tone.</Say><Record maxLength="30" action="/api/store-voicemail" method="POST" />';
  } else {
    twiml += '<Say voice="Polly.Joanna">Sorry, I didn’t understand that choice.</Say>';
  }

  twiml += '</Response>';

  return new Response(twiml, {
    status: 200,
    headers: {
      'Content-Type': 'text/xml',
    },
  });
}
