export const projects = {
  projectStatus: [
    {
      name: "JICT OCR",
      status: "In Progress",
      progress: (100 + 100 + 100 + 90 + 100 + 95 + 100 + 100 + 0 + 90) / 10,
      tasks: [
        { task: "Flexi Tank/EqSp History bug", pic: "Rizky", progress: 100 },
        { task: "Hico/P2 check out", pic: "Rizky/Isra", progress: 100 },
        { task: "Change Autogate DB password", pic: "Isra", progress: 100 },
        { task: "CMS print update", pic: "Rizky/Isra", progress: 90 },
        { task: "Damage Update/Scheduler", pic: "Rizky/Isra", progress: 100 },
        { task: "OCR Image on CM", pic: "Rizky/Isra", progress: 95 },
        { task: "Manual Insert migration", pic: "Rizky/Isra", progress: 100 },
        { task: "Hico message", pic: "Rizky/Isra", progress: 100 },
        { task: "DG validation", pic: "Rizky/Isra", progress: 0 },
        { task: "Ubuntu vulnerabilities issues", pic: "Isra", progress: 90 },
      ],
      timeline: {
        start: "2026-07-11",
        end: "2026-07-17",
        schedule: {
          "2026-07-11": "red",
          "2026-07-12": "red",
          "2026-07-13": "yellow",
          "2026-07-14": "yellow",
          "2026-07-15": "yellow",
          "2026-07-16": "yellow",
          "2026-07-17": "yellow",
        },
      },
      challenges: [],
    },
    {
      name: "KOJA OCR",
      status: "Completed",
      progress: (100 + 100 + 100 + 100 + 100) / 5,
      tasks: [
        { task: "DG validation", pic: "Rizky", progress: 100 },
        { task: "Change Autogate DB password", pic: "Isra", progress: 100 },
        { task: "Booking Message", pic: "Rizky/Isra", progress: 100 },
        { task: "Min max weight validation", pic: "Rizky/Isra", progress: 100 },
        { task: "Manual GateMovement", pic: "Rizky/Isra", progress: 100 },
      ],
      issues: [
        {
          title: "Manual Input create GateMovement",
          detail:
            "New task requested by client; manual input create gatemovement has already been done.",
        },
      ],
      timeline: {
        start: "2026-07-11",
        end: "2026-07-17",
        schedule: {
          "2026-07-11": "red",
          "2026-07-12": "red",
          "2026-07-13": "yellow",
          "2026-07-14": "yellow",
          "2026-07-15": "yellow",
          "2026-07-16": "yellow",
          "2026-07-17": "yellow",
        },
      },
      challenges: [],
    },
    {
      name: "TSJ Autogate",
      status: "In Progress",
      progress: (100 + 90) / 2,
      tasks: [
        { task: "Autogate", pic: "Deja", progress: 100 },
        { task: "UAT", pic: "Deja/David", progress: 90 },
      ],
      timeline: {
        start: "2026-07-11",
        end: "2026-07-17",
        schedule: {
          "2026-07-11": "red",
          "2026-07-12": "red",
          "2026-07-13": "yellow",
          "2026-07-14": "yellow",
          "2026-07-15": "yellow",
          "2026-07-16": "yellow",
          "2026-07-17": "yellow",
        },
      },
      challenges: [],
    },
    {
      name: "Kalibaru CA Autogate",
      status: "In Progress",
      progress:
        (100 +
          0 +
          100 +
          90 +
          100 +
          100 +
          95 +
          80 +
          100 +
          100 +
          100 +
          100 +
          100 +
          100 +
          80 +
          50 +
          100 +
          0 +
          0) /
        19,
      tasks: [
        { task: "AMS IN on terminal", pic: "Rizky", progress: 100 },
        { task: "Behandle new Integration", pic: "Rizky", progress: 0 },
        { task: "Container Info for BKI", pic: "Rizky", progress: 100 },
        { task: "Open portal manual time record", pic: "Rizky", progress: 90 },
        {
          task: "Using domain for url integration to NPCT",
          pic: "Rizky",
          progress: 100,
        },
        { task: "Booking Message", pic: "Rizky", progress: 100 },
        { task: "Manual Input Enhance", pic: "Rizky", progress: 95 },
        { task: "Cloud Migration", pic: "David", progress: 80 },
        { task: "CP emergency plan", pic: "Rizky", progress: 100 },
        {
          task: "Manual Input emergency plan",
          pic: "Rizky/Iqbal",
          progress: 100,
        },
        { task: "Monitoring scheduler", pic: "Rizky", progress: 100 },
        { task: "REKON settlement", pic: "Rizky", progress: 100 },
        {
          task: "Update message logol release",
          pic: "Deja/David",
          progress: 100,
        },
        { task: "Hold/Release xray service", pic: "Deja/David", progress: 100 },
        { task: "Update time qr", pic: "Rizky", progress: 80 },
        {
          task: "Truck weight stats, using history data for V",
          pic: "Rizky",
          progress: 50,
        },
        {
          task: "Service for reconsile gatepass data",
          pic: "Rizky",
          progress: 100,
        },
        { task: "Service Update TAR", pic: "Rizky", progress: 0 },
        { task: "Service Missing Gatepass", pic: "Rizky", progress: 0 },
      ],
      timeline: {
        start: "2026-07-11",
        end: "2026-07-17",
        schedule: {
          "2026-07-11": "red",
          "2026-07-12": "red",
          "2026-07-13": "yellow",
          "2026-07-14": "yellow",
          "2026-07-15": "yellow",
          "2026-07-16": "yellow",
          "2026-07-17": "yellow",
        },
      },
      challenges: [],
    },
    {
      name: "Kemenag SIPPRO",
      status: "In Progress",
      progress: (80 + 100 + 100 + 100 + 100 + 100 + 100 + 100 + 10) / 10,
      tasks: [
        {
          task: "Validator : Portal for validate",
          pic: "Rizky/Iqbal",
          progress: 80,
        },
        { task: "Migrasi Server", pic: "Rizky/David", progress: 100 },
        { task: "Test Server baru", pic: "David", progress: 100 },
        { task: "Bug SSO", pic: "Rizky/David", progress: 100 },
        { task: "Perapian data", pic: "David", progress: 100 },
        {
          task: "DoubleDegree, New Lembaga, Akreditasi",
          pic: "Rizky/David/Iqbal",
          progress: 100,
        },
        { task: "Lembaga Integrasi", pic: "Rizky/David/Iqbal", progress: 100 },
        { task: "Test&Bugfixing", pic: "Rizky/David/Iqbal", progress: 100 },
        { task: "Akreditasi ETL", pic: "David/Rizky", progress: 10 },
      ],
      timeline: {
        start: "2026-07-11",
        end: "2026-07-17",
        schedule: {
          "2026-07-11": "red",
          "2026-07-12": "red",
          "2026-07-13": "yellow",
          "2026-07-14": "yellow",
          "2026-07-15": "yellow",
          "2026-07-16": "yellow",
          "2026-07-17": "yellow",
        },
      },
      challenges: ["Lembaga Integration API Needed"],
    },
    {
      name: "TO3 : Xray",
      status: "In Progress",
      progress: (100 + 100 + 100 + 100 + 100 + 80) / 6,
      tasks: [
        { task: "API Integration", pic: "Rizky", progress: 100 },
        { task: "API Test", pic: "David", progress: 100 },
        {
          task: "AMS Web : Xray Implementation",
          pic: "Rizky/Iqbal/Deja",
          progress: 100,
        },
        { task: "Check Xray in Gateway", pic: "Deja", progress: 100 },
        { task: "Doc no data, search", pic: "David/Deja", progress: 100 },
        { task: "Doc", pic: "David", progress: 80 },
      ],
      timeline: {
        start: "2026-07-11",
        end: "2026-07-17",
        schedule: {
          "2026-07-11": "red",
          "2026-07-12": "red",
          "2026-07-13": "yellow",
          "2026-07-14": "yellow",
          "2026-07-15": "yellow",
          "2026-07-16": "yellow",
          "2026-07-17": "yellow",
        },
      },
      challenges: [],
    },
    {
      name: "TO3/MAL Joingate",
      status: "In Progress",
      progress: (100 + 100 + 100 + 100 + 80 + 95 + 100 + 0 + 100 + 100) / 10,
      tasks: [
        { task: "API", pic: "Deja", progress: 100 },
        { task: "CP Gate IN", pic: "Deja", progress: 100 },
        { task: "MAL CP Gate IN/Reader", pic: "Deja", progress: 100 },
        { task: "Test & Bugsfixing", pic: "Deja", progress: 100 },
        { task: "Doc", pic: "David/Rizky", progress: 80 },
        { task: "MAL Booking", pic: "Deja", progress: 95 },
        { task: "TSJ/T3/MAL flow qr logic", pic: "Deja", progress: 100 },
        { task: "T3 Book", pic: "Deja", progress: 0 },
        { task: "Tosnus", pic: "Deja", progress: 100 },
        { task: "Manual Input", pic: "Rizky/Deja", progress: 100 },
      ],
      timeline: {
        start: "2026-07-11",
        end: "2026-07-17",
        schedule: {
          "2026-07-11": "red",
          "2026-07-12": "red",
          "2026-07-13": "yellow",
          "2026-07-14": "yellow",
          "2026-07-15": "yellow",
          "2026-07-16": "yellow",
          "2026-07-17": "yellow",
        },
      },
      challenges: [],
    },
    {
      name: "Indocement : Truckscale",
      status: "Completed",
      progress: (100 + 100 + 100 + 100) / 4,
      tasks: [
        { task: "API", pic: "Deja", progress: 100 },
        { task: "Monitoring", pic: "Iqbal", progress: 100 },
        { task: "Gate App", pic: "Deja", progress: 100 },
        { task: "CP WB", pic: "Deja", progress: 100 },
      ],
      issues: [
        {
          title: "Timbangan IN/OUT area overlap",
          detail:
            "Gate-in and gate-out share the same timbangan (weighbridge). A truck entering at gate-in can be detected first by the OUT RFID reader and vice versa.",
        },
      ],
      timeline: {
        start: "2026-07-11",
        end: "2026-07-17",
        schedule: {
          "2026-07-11": "red",
          "2026-07-12": "red",
          "2026-07-13": "yellow",
          "2026-07-14": "yellow",
          "2026-07-15": "yellow",
          "2026-07-16": "yellow",
          "2026-07-17": "yellow",
        },
      },
      challenges: [],
    },
    {
      name: "Indocement : Autogate grobogan",
      status: "Completed",
      progress: 100,
      tasks: [{ task: "IOT", pic: "David", progress: 100 }],
      timeline: {
        start: "2026-07-11",
        end: "2026-07-17",
        schedule: {
          "2026-07-11": "red",
          "2026-07-12": "red",
          "2026-07-13": "yellow",
          "2026-07-14": "yellow",
          "2026-07-15": "yellow",
          "2026-07-16": "yellow",
          "2026-07-17": "yellow",
        },
      },
      challenges: [],
    },
    {
      name: "Indocement Autogate ERP enhancement",
      status: "Completed",
      progress: (100 + 100 + 100) / 3,
      tasks: [
        { task: "Dashboard", pic: "Deja/Iqbal", progress: 100 },
        { task: "CP", pic: "Deja", progress: 100 },
        { task: "Deployment/Test", pic: "Deja/David", progress: 100 },
      ],
      timeline: {
        start: "2026-07-11",
        end: "2026-07-17",
        schedule: {
          "2026-07-11": "red",
          "2026-07-12": "red",
          "2026-07-13": "yellow",
          "2026-07-14": "yellow",
          "2026-07-15": "yellow",
          "2026-07-16": "yellow",
          "2026-07-17": "yellow",
        },
      },
      challenges: [],
    },
    {
      name: "Unigate : Dashboard Monitoring",
      status: "In Progress",
      progress: (60 + 100) / 2,
      tasks: [
        { task: "Client app", pic: "Deja", progress: 60 },
        { task: "Dashboard api", pic: "Iqbal/Rizky", progress: 100 },
      ],
      timeline: {
        start: "2026-07-11",
        end: "2026-07-17",
        schedule: {
          "2026-07-11": "red",
          "2026-07-12": "red",
          "2026-07-13": "yellow",
          "2026-07-14": "yellow",
          "2026-07-15": "yellow",
          "2026-07-16": "yellow",
          "2026-07-17": "yellow",
        },
      },
      challenges: ["Client app development at 60%, pending completion"],
    },
    {
      name: "Patimban : Autogate",
      status: "In Progress",
      progress:
        (100 + 100 + 95 + 100 + 100 + 95 + 100 + 100 + 100 + 95 + 90) / 11,
      tasks: [
        { task: "Gateway API", pic: "Rizky/Deja", progress: 100 },
        { task: "Monitoring", pic: "Iqbal/Rizky", progress: 100 },
        { task: "AMS", pic: "Iqbal/Rizky", progress: 95 },
        { task: "IOT", pic: "David/Rizky", progress: 100 },
        { task: "Display Kiosk", pic: "David/Rizky", progress: 100 },
        { task: "Logging System", pic: "Rizky", progress: 95 },
        { task: "Docs", pic: "Rizky/David", progress: 100 },
        { task: "SIT/UAT", pic: "Rizky", progress: 100 },
        { task: "Deploy server app/db", pic: "Rizky/Isra", progress: 100 },
        { task: "User guide", pic: "Rizky/David", progress: 95 },
        { task: "Test & Bugsfixing", pic: "Rizky", progress: 90 },
      ],
      issues: [
        {
          title: "Domestic gate pass mismatch (ETOS request)",
          detail:
            "Different container for gate-in vs gate-out on domestic transactions. Idea: create a new service for changing gatepass info — ETOS sends a replacement-gatepass message and the Autogate system updates the gatepass for that transaction.",
        },
      ],
      timeline: {
        start: "2026-07-11",
        end: "2026-07-17",
        schedule: {
          "2026-07-11": "red",
          "2026-07-12": "red",
          "2026-07-13": "yellow",
          "2026-07-14": "yellow",
          "2026-07-15": "yellow",
          "2026-07-16": "yellow",
          "2026-07-17": "yellow",
        },
      },
      challenges: [],
    },
    {
      name: "Kalibaru CA : OCR",
      status: "In Progress",
      progress: (100 + 80 + 60 + 0 + 60) / 5,
      tasks: [
        { task: "System Design", pic: "Rizky", progress: 100 },
        { task: "DB", pic: "Deja/Rizky", progress: 80 },
        { task: "OCR Cp Api gateway", pic: "Deja/Rizky", progress: 60 },
        { task: "CP/CGS Gateway", pic: "Deja", progress: 0 },
        { task: "Monitoring", pic: "Rizky", progress: 60 },
      ],
      timeline: {
        start: "2026-07-11",
        end: "2026-07-17",
        schedule: {
          "2026-07-11": "red",
          "2026-07-12": "red",
          "2026-07-13": "yellow",
          "2026-07-14": "yellow",
          "2026-07-15": "yellow",
          "2026-07-16": "yellow",
          "2026-07-17": "yellow",
        },
      },
      challenges: [
        "CP/CGS Gateway at 0% — needs CP/CGS integration work",
        "OCR Cp Api gateway & Monitoring still in progress",
      ],
    },
  ],

  monthlyPlan: [
    {
      title: "July 2026 Targets",
      description: "Complete ongoing implementations and system integrations",
      items: [
        "JICT OCR DG validation & Ubuntu vulnerability issues",
        "Kalibaru CA Autogate remaining (Behandle, Service Update TAR, Service Missing Gatepass)",
        "Kemenag SIPPRO Akreditasi ETL & bugfixing",
        "TO3/MAL Joingate T3 Book",
        "Unigate Dashboard Monitoring client app completion",
        "Patimban Autogate Test & Bugsfixing finalization",
        "Kalibaru CA OCR DB, CP/CGS Gateway & Monitoring",
        "TO3 Xray documentation",
      ],
    },
  ],

  weeklyPlan: [
    {
      week: "Week of Jul 13 - Jul 17",
      status: "In Progress",
      tasks: [
        "JICT OCR DG validation & Ubuntu vulnerabilities issues",
        "Kalibaru CA Autogate Behandle / Service Update TAR / Missing Gatepass",
        "Kemenag SIPPRO Akreditasi ETL & Test&Bugfixing",
        "TO3/MAL Joingate T3 Book",
        "Unigate Dashboard client app development",
        "Patimban Autogate Test & Bugsfixing",
        "Kalibaru CA OCR DB, CP/CGS Gateway & Monitoring",
        "TO3 Xray documentation",
      ],
    },
  ],
};
