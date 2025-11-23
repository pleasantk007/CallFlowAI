const twilio = require("twilio");

const client = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

function createVoiceResponse(message) {
  const twiml = new twilio.twiml.VoiceResponse();
  twiml.say({ voice: "alice" }, message);
  return twiml.toString();
}

module.exports = {
  client,
  createVoiceResponse
};
