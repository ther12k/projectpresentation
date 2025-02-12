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
      progress: 100,
      tasks: [
        { task: "OCR UAT", pic: "Isra", progress: 100 }
      ],
      timeline: {
        schedule: {
          "2025-02-15": "red",
          "2025-02-16": "red"
        }
      }
    },
    {
      name: "TSJ Autogate",
      status: "In Progress",
      progress: 68,
      tasks: [
        { task: "Autogate", pic: "Deja", progress: 100 },
        { task: "AMS", pic: "Deja", progress: 100 },
        { task: "Mock service", pic: "Deja", progress: 50 },
        { task: "SIT", pic: "Deja/David", progress: 90 },
        { task: "UAT", pic: "Deja/David", progress: 0 }
      ],
      timeline: {
        schedule: {
          "2025-02-08": "yellow",
          "2025-02-14": "green",
          "2025-02-15": "red",
          "2025-02-17": "green"
        }
      },
      challenges: ["Mockup service need to be created, since no OPUS Dev"]
    },
    {
      name: "Kalibaru CA Autogate",
      status: "In Progress",
      progress: 58.3,
      tasks: [
        { task: "Mobile Web App (Autogate)", pic: "Rizky/Iqbal", progress: 10 },
        { task: "Payment/Emoney", pic: "Rizky", progress: 100 },
        { task: "Settlement (Automatic)", pic: "Rizky", progress: 100 },
        { task: "Monitoring Transaction", pic: "Rizky", progress: 90 },
        { task: "Service for payment in 1hrs", pic: "Rizky", progress: 30 },
        { task: "Service/cp for enhance truckin process", pic: "Rizky", progress: 20 }
      ],
      timeline: {
        schedule: {
          "2025-02-09": "yellow",
          "2025-02-14": "yellow",
          "2025-02-15": "red",
          "2025-02-18": "yellow",
          "2025-02-22": "yellow"
        }
      }
    },
    {
      name: "Indocement Autogate",
      status: "Completed",
      progress: 100,
      tasks: [
        { task: "Autogate New UAT", pic: "Rizky/David", progress: 100 },
        { task: "Autogate New : Bug fix rfid double", pic: "Rizky", progress: 100 }
      ],
      timeline: {
        schedule: {
          "2025-02-15": "red",
          "2025-02-16": "red"
        }
      }
    },
    {
      name: "Palembang Autogate",
      status: "Planned",
      progress: 0,
      tasks: [
        { task: "Full/Empty Column at Container table", pic: "Deja", progress: 0 },
        { task: "Add CM User", pic: "Deja/David", progress: 0 }
      ],
      timeline: {
        schedule: {
          "2025-02-13": "yellow",
          "2025-02-14": "green"
        }
      },
      challenges: ["Resources"]
    },
    {
      name: "Pontianak Autogate",
      status: "In Progress",
      progress: 83.3,
      tasks: [
        { task: "Autogate New UAT", pic: "David/Deja", progress: 100 },
        { task: "Flow Autohold/P2 Check", pic: "Deja", progress: 100 },
        { task: "AMS Video Tutorial", pic: "David", progress: 50 }
      ],
      timeline: {
        schedule: {
          "2025-02-08": "yellow",
          "2025-02-14": "green"
        }
      },
      challenges: ["More testing on hold/p2 SOP"]
    },
    {
      name: "Kemenag SIPPRO",
      status: "In Progress",
      progress: 63.3,
      tasks: [
        { task: "Validator : Validator Portal for validate", pic: "Rizky/Iqbal", progress: 80 },
        { task: "Biro hukum : Portal for biro hukum", pic: "Rizky/Iqbal", progress: 70 },
        { task: "Lembaga Baru Integration", pic: "Rizky/Iqbal/David", progress: 40 }
      ],
      timeline: {
        schedule: {
          "2025-02-15": "red",
          "2025-02-17": "green"
        }
      },
      challenges: ["Resources","Lembaga Integration API Needed"]
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
          "2025-02-15": "red",
          "2025-02-17": "green"
        }
      },
      challenges: ["More features added"]
    },
    {
      name: "TO3 : Xray",
      status: "In Progress",
      progress: 43.3,
      tasks: [
        { task: "API Integration", pic: "Rizky", progress: 50 },
        { task: "API Test", pic: "David", progress: 50 },
        { task: "AMS Web : Xray Implementation", pic: "Rizky/Iqbal/David", progress: 30 }
      ],
      timeline: {
        schedule: {
          "2025-02-09": "yellow",
          "2025-02-14": "green",
          "2025-02-15": "red",
          "2025-02-17": "green"
        }
      },
      challenges: ["Resources","Tight schedule"]
    }
  ],

  monthlyPlan: [
    {
      title: "February 2025 Targets",
      description: "Complete ongoing implementations and system integrations",
      items: [
        "Complete TSJ Autogate UAT",
        "Complete Kalibaru CA Payment/Monitoring System",
        "Implement Kalibaru CA Autogate enhancements",
        "Launch Kemenag SIPPRO portal updates",
        "Complete TO3 Xray integration"
      ]
    }
  ],
  weeklyPlan: [
    {
      week: "Week 3 (Feb 15-19)",
      status: "In Progress",
      tasks: [
        "TSJ Autogate UAT execution",
        "Complete Kalibaru CA payment service implementation",
        "Kemenag SIPPRO integration testing",
        "TO3 Xray system implementation"
      ]
    },
    {
      week: "Week 4 (Feb 20-23)",
      status: "Planned",
      tasks: [
        "Complete pending implementations",
        "System testing and optimization",
        "Documentation updates"
      ]
    }
  ]
};