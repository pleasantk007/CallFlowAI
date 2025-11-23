CallFlowAI-Core/
├─ README.md
├─ package.json           # if using Node/TypeScript
├─ .env.example          # example of environment variables (no real keys)
├─ /api
│  ├─ voiceInbound.js    # handles inbound calls (Twilio → AI)
│  ├─ voiceOutbound.js   # handles outbound calls (follow-ups)
│  ├─ webhookTest.js     # simple health/test endpoint
├─ /flows
│  ├─ legalIntake.json   # flow config for law offices
│  ├─ generalIntake.json # flow config for general businesses
│  ├─ escalation.json    # logic for urgent calls
├─ /config
│  ├─ appConfig.json     # global settings (timeouts, logging, etc.)
│  ├─ routingRules.json  # when to transfer, when to log, etc.
│  ├─ crmMapping.json    # how AI fields map to CRM fields
├─ /integrations
│  ├─ twilioClient.js    # outbound calls, SMS, call control
│  ├─ elevenLabsClient.js# text→speech voice calls
│  ├─ openaiClient.js    # the LLM logic / prompts
│  ├─ crmClient.js       # HubSpot / Airtable / Sheets integration
├─ /reports
│  ├─ dailySummary.js    # generates daily email report
│  ├─ dashboardData.js   # prepares stats for your dashboard
├─ /scripts
│  ├─ seedDemoData.js    # optional – creates some test data
│  ├─ testCallFlow.js    # script to simulate a sample call
└─ /docs
   ├─ callFlows.md       # describes each flow
   ├─ onboarding.md      # technical onboarding steps
   ├─ envSetup.md        # what ENV variables you need
