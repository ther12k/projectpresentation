export const projects = {
  projectStatus: [
    {
      name: "TSJ Autogate",
      status: "In Progress",
      progress: 72.5,
      tasks: [
        { task: "Autogate", pic: "Deja", progress: 100 },
        { task: "AMS", pic: "Deja", progress: 100 },
        { task: "SIT", pic: "Deja/David", progress: 90 },
        { task: "UAT", pic: "Deja/David", progress: 0 }
      ],
      timeline: {
        start: "2025-02-09",
        end: "2025-02-23",
        schedule: {
          "2025-02-15": "red",
          "2025-02-17": "green"
        }
      },
      challenges: []
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
        start: "2025-02-09",
        end: "2025-02-23",
        schedule: {
          "2025-02-09": "yellow",
          "2025-02-15": "yellow",
          "2025-02-16": "green",
          "2025-02-17": "yellow",
          "2025-02-18": "yellow"
        }
      },
      challenges: []
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
        start: "2025-02-09",
        end: "2025-02-23",
        schedule: {
          "2025-02-15": "red"
        }
      },
      challenges: []
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
        start: "2025-02-09",
        end: "2025-02-23",
        schedule: {}
      },
      challenges: []
    },
    {
      name: "Pontianak Autogate",
      status: "In Progress",
      progress: 100,
      tasks: [
        { task: "Autogate New UAT", pic: "David/Deja", progress: 100 },
        { task: "Flow Autohold/P2 Check", pic: "", progress: 0 }
      ],
      timeline: {
        start: "2025-02-09",
        end: "2025-02-23",
        schedule: {
          "2025-02-15": "red"
        }
      },
      challenges: []
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
        start: "2025-02-09",
        end: "2025-02-23",
        schedule: {
          "2025-02-17": "green"
        }
      },
      challenges: []
    },
    {
      name: "IKT International",
      status: "In Progress",
      progress: 90,
      tasks: [
        { task: "Autogate API Gateway", pic: "Rizky/Deja", progress: 100 },
        { task: "Dashboard API", pic: "Rizky", progress: 100 },
        { task: "Dashboard Web", pic: "Iqbal", progress: 70 }
      ],
      timeline: {
        start: "2025-02-09",
        end: "2025-02-23",
        schedule: {
          "2025-02-17": "green"
        }
      },
      challenges: []
    },
    {
      name: "TO3 : Xray",
      status: "In Progress",
      progress: 40,
      tasks: [
        { task: "API Integration", pic: "Rizky", progress: 50 },
        { task: "AMS Web : Xray Implementation", pic: "Rizky/Iqbal/David", progress: 30 }
      ],
      timeline: {
        start: "2025-02-09",
        end: "2025-02-23",
        schedule: {
          "2025-02-17": "green"
        }
      },
      challenges: []
    }
  ],
  monthlyPlan: [
    {
      title: "February 2025 Targets",
      description: "Complete ongoing implementations and system integrations",
      items: [
        "Complete TSJ Autogate UAT",
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
        "Kalibaru CA payment service implementation",
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