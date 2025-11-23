const { createVoiceResponse } = require("../integrations/twilioClient");
const { saveLeadToCrm } = require("../integrations/crmClient");

module.exports = async function handler(req, res) {
  try {
    const from = req.body.From;
    const to = req.body.To;

    const message =
      "Thank you for calling. This is your CallFlow AI virtual receptionist. " +
      "Please leave your name and reason for calling after the tone.";

    const twiml = createVoiceResponse(message);

    await saveLeadToCrm({
      phone: from,
      calledNumber: to,
      source: "inbound_call"
    });

    res.set("Content-Type", "text/xml");
    res.status(200).send(twiml);
  } catch (err) {
    console.error("Error in voiceInbound:", err);
    const fallback = createVoiceResponse(
      "We are experiencing issues at the moment. Please try again later."
    );
    res.set("Content-Type", "text/xml");
    res.status(200).send(fallback);
  }
};
