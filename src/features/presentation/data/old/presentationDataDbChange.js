export const dbChangeData = {
  title: "Downtime Rundown",
  subtitle: "Change DB OCR Username & Password for JICT",
  scope: {
    description: "Change DB OCR credentials for the following applications:",
    affects: [
      "Gate App (≈ 20 gates)",
      "PostGate App (5 gates)",
      "OCR Service",
      "Services on server",
    ],
  },
  plan: [
    {
      step: 1,
      title: "Preparation (before downtime)",
      description: [
        "List all configs/envs using old username/pass.",
        "Prepare new DB user & password.",
        "Notify stakeholders & prepare rollback plan.",
      ],
      time: "30 min",
    },
    {
      step: 2,
      title: "Start downtime",
      description: ["Inform team & confirm gates stop new OCR transactions."],
      time: "5 min",
    },
    {
      step: 3,
      title: "Stop services",
      description: ["Stop OCR Service, Gate Apps, PostGate Apps, other server services."],
      time: "5 min",
    },
    {
      step: 4,
      title: "Change DB credential",
      description: ["Change username/pass in DB OCR and grant privilege."],
      time: "5 min",
    },
    {
      step: 5,
      title: "Update config & restart",
      description: [
        "Update configs/envs in Gate Apps, PostGate Apps, OCR Service, other services.",
        "Restart all services after update.",
      ],
      time: "20 min",
    },
    {
      step: 6,
      title: "Testing",
      description: [
        "Check OCR connection to DB.",
        "Test gates and postgates (simulate scan).",
        "Monitor logs.",
      ],
      time: "10 min",
    },
    {
      step: 7,
      title: "Close downtime",
      description: ["Confirm normal operation & notify stakeholders."],
      time: "5 min",
    },
  ],
  totalDowntime: "≈ 45–50 minutes",
};