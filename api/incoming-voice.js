
import { NextResponse } from 'next/server';

export async function POST(req) {
  const twiml = `<?xml version="1.0" encoding="UTF-8"?>
  <Response>
    <Say voice="Polly.Joanna">Thank you for calling Call Flow AI. Please hold while we connect you to the next available representative.</Say>
  </Response>`;

  return new Response(twiml, {
    status: 200,
    headers: {
      'Content-Type': 'text/xml',
    },
  });
}
