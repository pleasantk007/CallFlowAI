
import { NextResponse } from 'next/server';

export async function POST(req) {
  const twiml = `<?xml version="1.0" encoding="UTF-8"?>
  <Response>
    <Say voice="Polly.Matthew">Transferring you now. Please hold.</Say>
    <Dial timeout="20">+1234567890</Dial>
    <Say voice="Polly.Matthew">We’re sorry, nobody was available. Please try again later.</Say>
  </Response>`;

  return new Response(twiml, {
    status: 200,
    headers: {
      'Content-Type': 'text/xml',
    },
  });
}
