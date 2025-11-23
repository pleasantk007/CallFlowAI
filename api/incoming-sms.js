
import { NextResponse } from 'next/server';

export async function POST(req) {
  const data = await req.formData();
  const messageBody = data.get('Body');
  const fromNumber = data.get('From');

  const reply = `Hi there! Thanks for messaging Call Flow AI. One of our agents will be with you shortly.`;

  const twiml = `<?xml version="1.0" encoding="UTF-8"?>
  <Response>
    <Message>${reply}</Message>
  </Response>`;

  return new Response(twiml, {
    status: 200,
    headers: {
      'Content-Type': 'text/xml',
    },
  });
}
