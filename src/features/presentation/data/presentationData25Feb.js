export const projects = {
  projectStatus: [
    {
      name: 'JICT OCR',
      status: 'On Track',
      progress: 80,
      tasks: [
        { task: 'Update validation min max size on dashboard', pic: 'Rizky', progress: 100 },
        { task: 'Upload/View image using webserver', pic: 'Isra', progress: 100 },
        { task: 'Remediasi JAGS Server', pic: 'Isra', progress: 100 },
        { task: 'Update CP for payment slip', pic: 'Rizky', progress: 100 },
        { task: 'New virtual dir for gateapi', pic: 'Isra', progress: 0 }
      ],
      timeline: {
        start: '2025-01-15',
        end: '2025-01-17',
        schedule: {
          '2025-01-15': 'yellow',
          '2025-01-16': 'green',
          '2025-01-17': 'green',
          '2025-02-14': 'green'
        }
      },
      challenges: []
    },
    {
      name: "KOJA OCR",
      status: "In Progress",
      progress: 190/3,
      tasks: [
        { task: "OCR UAT", pic: "Isra", progress: 100 },
        { task: "Installation Doc", pic: "Isra", progress: 90 },
        { task: "Dashboard JICT -> KOJA", pic: "Isra/Iqbal", progress: 0 }
      ],
      timeline: {
        schedule: {
          "2025-02-21": "yellow",
          "2025-02-22": "red",
          "2025-02-23": "red",
          "2025-02-24": "yellow",
          "2025-02-25": "green",
          "2025-02-26": "green",
          "2025-02-27": "yellow",
          "2025-02-28": "yellow",
          "2025-03-01": "green",
          "2025-03-02": "red"
        }
      }
    },
    {
      name: "TSJ Autogate",
      status: "In Progress",
      progress: 80,
      tasks: [
        { task: "Autogate", pic: "Deja", progress: 100 },
        { task: "AMS", pic: "Deja", progress: 100 },
        { task: "Mock service", pic: "Deja", progress: 100 },
        { task: "SIT", pic: "Deja/David", progress: 100 },
        { task: "UAT", pic: "Deja/David", progress: 0 }
      ],
      timeline: {
        schedule: {
          "2025-02-21": "yellow",
          "2025-02-22": "red",
          "2025-02-23": "red",
          "2025-03-01": "yellow",
          "2025-03-02": "red"
        }
      },
      challenges: ["UAT Schedule"]
    },
    {
      name: "Kalibaru CA Autogate",
      status: "In Progress",
      progress: 67.1,
      tasks: [
        { task: "Mobile Web App (Autogate)", pic: "Rizky/Iqbal", progress: 10 },
        { task: "Payment/Emoney", pic: "Rizky", progress: 100 },
        { task: "Settlement (Automatic)", pic: "Rizky", progress: 100 },
        { task: "Monitoring Transaction", pic: "Rizky", progress: 90 },
        { task: "Service for payment in 1hrs", pic: "Rizky", progress: 50 },
        { task: "Service/cp for enhance truckin process", pic: "Rizky", progress: 20 },
        { task: "Self Pregate System : Mockup", pic: "Rizky", progress: 70 }
      ],
      timeline: {
        schedule: {
          "2025-02-21": "yellow",
          "2025-02-22": "red",
          "2025-02-27": "green",
          "2025-03-01": "yellow",
          "2025-03-02": "red",
          "2025-03-07": "yellow"
        }
      }
    },
    {
      name: "Indocement Autogate",
      status: "Completed",
      progress: 100,
      tasks: [
        { task: "Autogate New UAT", pic: "Rizky/David", progress: 100 },
        { task: "Autogate New : Bug fix rfid double", pic: "Rizky", progress: 100 },
        { task: "Autogate New : Bug fix retry Transaction", pic: "Rizky", progress: 100 }
      ],
      timeline: {
        schedule: {
          "2025-02-21": "yellow",
          "2025-02-22": "red",
          "2025-02-26": "green",
          "2025-03-01": "yellow",
          "2025-03-02": "red"
        }
      }
    },
    {
      name: "Palembang Autogate",
      status: "Planned",
      progress: 0,
      tasks: [
        { task: "Kolom Full/Empty di container", pic: "Deja", progress: 0 },
        { task: "Add user CM", pic: "Deja/David", progress: 0 }
      ],
      timeline: {
        schedule: {
          "2025-02-22": "red",
          "2025-03-02": "red"
        }
      },
      challenges: ["Pending"]
    },
    {
      name: "Pontianak Autogate",
      status: "Completed",
      progress: 100,
      tasks: [
        { task: "Autogate New UAT", pic: "David/Deja", progress: 100 },
        { task: "Flow Autohold/P2 Check", pic: "Deja", progress: 100 },
        { task: "Video Tutorial AMS", pic: "David", progress: 100 }
      ],
      timeline: {
        schedule: {
          "2025-02-22": "red",
          "2025-03-02": "red"
        }
      }
    },
    {
      name: "Kemenag SIPPRO",
      status: "In Progress",
      progress: 63.3,
      tasks: [
        { task: "Validator : Portal for validate", pic: "Rizky/Iqbal", progress: 80 },
        { task: "Biro hukum : Portal for biro hukum", pic: "Rizky/Iqbal", progress: 70 },
        { task: "Lembaga Baru Integration", pic: "Rizky/Iqbal/David", progress: 40 }
      ],
      timeline: {
        schedule: {
          "2025-02-21": "yellow",
          "2025-02-22": "red",
          "2025-02-25": "yellow",
          "2025-02-27": "yellow",
          "2025-02-28": "yellow",
          "2025-03-01": "yellow",
          "2025-03-02": "red"
        }
      },
      challenges: ["Resources", "Lembaga Integration API Needed"]
    },
    {
      name: "IKT International",
      status: "In Progress",
      progress: 96.7,
      tasks: [
        { task: "Autogate API Gateway", pic: "Rizky/Deja", progress: 100 },
        { task: "Dashboard API", pic: "Rizky", progress: 100 },
        { task: "Dashboard Web", pic: "Iqbal", progress: 90 }
      ],
      timeline: {
        schedule: {
          "2025-02-21": "yellow",
          "2025-02-22": "red",
          "2025-02-24": "yellow",
          "2025-02-25": "yellow",
          "2025-02-26": "yellow",
          "2025-02-27": "yellow",
          "2025-02-28": "yellow",
          "2025-03-01": "yellow",
          "2025-03-02": "red"
        }
      },
      challenges: ["More features added"]
    },
    {
      name: "IKT Domestic",
      status: "In Progress",
      progress: 90,
      tasks: [
        { task: "CMS Add", pic: "Deja", progress: 90 }
      ],
      timeline: {
        schedule: {
          "2025-02-22": "red",
          "2025-02-25": "yellow",
          "2025-02-26": "yellow",
          "2025-03-02": "red"
        }
      },
      challenges: ["Pending"]
    },
    {
      name: "TO3 : Xray",
      status: "In Progress",
      progress: 62.5,
      tasks: [
        { task: "API Integration", pic: "Rizky", progress: 100 },
        { task: "API Test", pic: "David", progress: 100 },
        { task: "AMS Web : Xray Implementation", pic: "Rizky/Iqbal/Deja", progress: 50 },
        { task: "Check Xray in Gateway", pic: "Deja", progress: 0 }
      ],
      timeline: {
        schedule: {
          "2025-02-21": "yellow",
          "2025-02-22": "red",
          "2025-02-24": "yellow",
          "2025-03-02": "red"
        }
      },
      challenges: ["Pending"]
    }
  ],

  monthlyPlan: [
    {
      title: "February-March 2025 Targets",
      description: "Complete ongoing implementations and system integrations",
      items: [
        "Complete TSJ Autogate UAT",
        "Complete Kalibaru CA Payment/Monitoring System",
        "Implement Kalibaru CA Autogate enhancements",
        "Launch Kemenag SIPPRO portal updates",
        "Complete TO3 Xray integration",
        "Finalize KOJA OCR implementation"
      ]
    }
  ],
  weeklyPlan: [
    {
      week: "Week 4 (Feb 22-28)",
      status: "In Progress",
      tasks: [
        "TSJ Autogate UAT execution",
        "Complete Kalibaru CA payment service implementation",
        "Kemenag SIPPRO integration testing",
        "TO3 Xray system implementation",
        "KOJA OCR dashboard development"
      ]
    },
    {
      week: "Week 1 (Mar 1-7)",
      status: "Planned",
      tasks: [
        "Complete pending implementations",
        "System testing and optimization",
        "Documentation updates",
        "Kalibaru CA truckin process enhancement"
      ]
    }
  ]
};