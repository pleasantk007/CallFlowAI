
import { NextResponse } from 'next/server';

export async function POST(req) {
  const twiml = `<?xml version="1.0" encoding="UTF-8"?>
  <Response>
    <Message>We're currently unavailable. Please try again later or call our office. Thank you!</Message>
  </Response>`;

  return new Response(twiml, {
    status: 200,
    headers: {
      'Content-Type': 'text/xml',
    },
  });
}
