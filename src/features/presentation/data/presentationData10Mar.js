export const projects = {
  projectStatus: [
    {
      name: 'JICT OCR',
      status: 'On Track',
      progress: 98.2,
      tasks: [
        { task: 'Flexi Tank/EqSp History bug', pic: 'Rizky', progress: 100 },
        { task: 'Hico/P2 check out', pic: 'Rizky/Isra', progress: 100 },
        { task: 'Change Autogate DB password', pic: 'Isra', progress: 100 },
        { task: 'CMS print update', pic: 'Rizky/Isra', progress: 90 },
        { task: 'Damage Update/Scheduler', pic: 'Rizky/Isra', progress: 100 },
        { task: 'OCR Image on CM', pic: 'Rizky/Isra', progress: 95 },
        { task: 'Manual Insert migration', pic: 'Rizky/Isra', progress: 100 },
        { task: 'Hico message', pic: 'Rizky/Isra', progress: 100 }
      ],
      timeline: {
        start: '2026-03-09',
        end: '2026-03-16',
        schedule: {
          "2026-03-15": "red",
          "2026-03-16": "red"
        }
      },
      challenges: []
    },
    {
      name: "KOJA OCR",
      status: "In Progress",
      progress: 100,
      tasks: [
        { task: "DG validation", pic: "Rizky", progress: 100 },
        { task: "Change Autogate DB password", pic: "Isra", progress: 100 },
        { task: "Booking Message", pic: "Rizky/Isra", progress: 100 },
        { task: "Min max weight validation", pic: "Rizky/Isra", progress: 100 }
      ],
      timeline: {
        schedule: {
          "2026-03-15": "red",
          "2026-03-16": "red"
        }
      }
    },
    {
      name: "TSJ Autogate",
      status: "In Progress",
      progress: 95,
      tasks: [
        { task: "Autogate", pic: "Deja", progress: 100 },
        { task: "UAT", pic: "Deja/David", progress: 90 }
      ],
      timeline: {
        schedule: {
          "2026-03-15": "red",
          "2026-03-16": "red"
        }
      },
      challenges: ["UAT Schedule"]
    },
    {
      name: "Kalibaru CA Autogate",
      status: "In Progress",
      progress: 87.1,
      tasks: [
        { task: "AMS IN on terminal", pic: "Rizky", progress: 100 },
        { task: "Behandle new Integration", pic: "Rizky", progress: 0 },
        { task: "Container Info for BKI", pic: "Rizky", progress: 100 },
        { task: "Open portal manual time record", pic: "Rizky", progress: 90 },
        { task: "Using domain for url integration to NPCT", pic: "Rizky", progress: 100 },
        { task: "Booking Message", pic: "Rizky", progress: 100 },
        { task: "Manual Input Enhance", pic: "Rizky", progress: 95 },
        { task: "Cloud Migration", pic: "David", progress: 80 },
        { task: "CP emergency plan", pic: "Rizky", progress: 100 },
        { task: "Manual Input emergency plan", pic: "Rizky/Iqbal", progress: 100 },
        { task: "Monitoring scheduler", pic: "Rizky", progress: 100 },
        { task: "REKON settlement", pic: "Rizky", progress: 100 },
        { task: "Update message logol release", pic: "Deja/David", progress: 100 },
        { task: "Hold/Release xray service", pic: "Deja/David", progress: 100 },
        { task: "Update time qr", pic: "Rizky", progress: 80 }
      ],
      timeline: {
        schedule: {
          "2026-03-15": "red",
          "2026-03-16": "red"
        }
      }
    },
    {
      name: "Kemenag SIPPRO",
      status: "In Progress",
      progress: 86.4,
      tasks: [
        { task: "Validator : Portal for validate", pic: "Rizky/Iqbal", progress: 80 },
        { task: "Migrasi Server", pic: "Rizky/David", progress: 95 },
        { task: "Test Server baru", pic: "David", progress: 100 },
        { task: "Bug SSO", pic: "Rizky/David", progress: 100 },
        { task: "Perapian data", pic: "David", progress: 90 },
        { task: "RFC", pic: "Iqbal", progress: 90 },
        { task: "DoubleDegree, New Lembaga, Akreditasi", pic: "Rizky/David/Iqbal", progress: 100 },
        { task: "Lembaga Integrasi", pic: "Rizky/David/Iqbal", progress: 50 }
      ],
      timeline: {
        schedule: {
          "2026-03-15": "red",
          "2026-03-16": "red"
        }
      },
      challenges: ["Resources", "Lembaga Integration API Needed"]
    },
    {
      name: "TO3 : Xray",
      status: "In Progress",
      progress: 96.7,
      tasks: [
        { task: "API Integration", pic: "Rizky", progress: 100 },
        { task: "API Test", pic: "David", progress: 100 },
        { task: "AMS Web : Xray Implementation", pic: "Rizky/Iqbal/Deja", progress: 100 },
        { task: "Check Xray in Gateway", pic: "Deja", progress: 100 },
        { task: "Doc no data, search", pic: "David/Deja", progress: 100 },
        { task: "Doc", pic: "David", progress: 80 }
      ],
      timeline: {
        schedule: {
          "2026-03-15": "red",
          "2026-03-16": "red"
        }
      },
      challenges: []
    },
    {
      name: "TO3/MAL Joingate",
      status: "In Progress",
      progress: 81.25,
      tasks: [
        { task: "API", pic: "Deja", progress: 100 },
        { task: "CP Gate IN", pic: "Deja", progress: 100 },
        { task: "MAL CP Gate IN/Reader", pic: "Deja", progress: 100 },
        { task: "Test & Bugsfixing", pic: "Deja", progress: 100 },
        { task: "Doc", pic: "David/Rizky", progress: 80 },
        { task: "MAL Booking", pic: "Deja", progress: 95 },
        { task: "TSJ/T3/MAL flow qr logic", pic: "Deja", progress: 100 },
        { task: "T3 Book", pic: "Deja", progress: 0 },
        { task: "Tosnus", pic: "Deja", progress: 95 },
        { task: "Manual Input", pic: "Rizky/Deja", progress: 50 }
      ],
      timeline: {
        schedule: {
          "2026-03-10": "blue",
          "2026-03-15": "red",
          "2026-03-16": "red"
        }
      },
      challenges: ["T3 Book pending"]
    },
    {
      name: "Indocement : Truckscale",
      status: "In Progress",
      progress: 96.7,
      tasks: [
        { task: "API", pic: "Deja", progress: 95 },
        { task: "Monitoring", pic: "Iqbal", progress: 95 },
        { task: "Gate App", pic: "Deja", progress: 100 }
      ],
      timeline: {
        schedule: {
          "2026-03-15": "red",
          "2026-03-16": "red"
        }
      },
      challenges: []
    },
    {
      name: "Indocement : Autogate grobogan",
      status: "Completed",
      progress: 100,
      tasks: [
        { task: "IOT", pic: "David", progress: 100 }
      ],
      timeline: {
        schedule: {
          "2026-03-15": "red",
          "2026-03-16": "red"
        }
      }
    },
    {
      name: "Indocement Autogate ERP enhancement",
      status: "In Progress",
      progress: 45,
      tasks: [
        { task: "Dashboard", pic: "Deja/Iqbal", progress: 50 },
        { task: "CP", pic: "Deja", progress: 40 }
      ],
      timeline: {
        schedule: {
          "2026-03-09": "yellow",
          "2026-03-10": "yellow",
          "2026-03-11": "green",
          "2026-03-12": "green",
          "2026-03-15": "red",
          "2026-03-16": "red"
        }
      },
      challenges: []
    },
    {
      name: "Patimban : Autogate",
      status: "In Progress",
      progress: 95,
      tasks: [
        { task: "Gateway API", pic: "Rizky/Deja", progress: 100 },
        { task: "Monitoring", pic: "Iqbal/Rizky", progress: 100 },
        { task: "AMS", pic: "Iqbal/Rizky", progress: 90 },
        { task: "IOT", pic: "David/Rizky", progress: 95 },
        { task: "Display Kiosk", pic: "David/Rizky", progress: 95 },
        { task: "Logging System", pic: "Rizky", progress: 95 },
        { task: "Docs", pic: "David", progress: 90 },
        { task: "SIT/UAT", pic: "Rizky", progress: 90 },
        { task: "Deploy server app/db", pic: "Rizky/Isra", progress: 100 }
      ],
      timeline: {
        schedule: {
          "2026-03-09": "green",
          "2026-03-10": "green",
          "2026-03-11": "green",
          "2026-03-12": "green",
          "2026-03-13": "yellow",
          "2026-03-14": "yellow",
          "2026-03-15": "red",
          "2026-03-16": "red"
        }
      },
      challenges: []
    }
  ],

  monthlyPlan: [
    {
      title: "March 2026 Targets",
      description: "Complete ongoing implementations and system integrations",
      items: [
        "Complete TSJ Autogate UAT",
        "Complete Kalibaru CA Behandle Integration",
        "Finalize TO3/MAL Joingate T3 Book & Manual Input",
        "Complete Kemenag SIPPRO Lembaga Integrasi",
        "Complete TO3 Xray documentation",
        "Complete Indocement Autogate ERP Enhancement",
        "Complete Patimban Autogate SIT/UAT & deployment",
        "Complete Indocement Truckscale"
      ]
    }
  ],
  weeklyPlan: [
    {
      week: "Week 2 (Mar 10-14)",
      status: "In Progress",
      tasks: [
        "TO3/MAL Joingate Manual Input & T3 Book",
        "Indocement ERP Enhancement Dashboard & CP",
        "Patimban Autogate Logging System & Docs",
        "Kemenag SIPPRO Lembaga Integrasi",
        "Kalibaru CA Behandle Integration",
        "TSJ Autogate UAT completion"
      ]
    },
    {
      week: "Week 3 (Mar 15-21)",
      status: "Planned",
      tasks: [
        "Final testing and bug fixes",
        "Documentation updates",
        "Deployment preparations",
        "Client handover activities"
      ]
    }
  ]
};