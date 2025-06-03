export const projects = {
  projectStatus : [
    {
      name: 'JICT OCR',
      status: 'On Track',
      progress: 80,
      tasks: [
        { task: 'Validation min max size on dashboard', pic: 'Rizky', progress: 100 },
        { task: 'New Message OCR', pic: 'Rizky/Isra', progress: 70 },
        { task: 'OV message check', pic: 'Rizky', progress: 0 }
      ],
      timeline: {
        start: '2025-01-15',
        end: '2025-01-17',
        schedule: {
          '2025-01-15': 'yellow',
          '2025-01-16': 'green',
          '2025-01-17': 'green',
          '2025-02-14': 'green',
          '2025-04-18': 'red',
          '2025-04-19': 'red',
          '2025-04-20': 'red',
          '2025-04-21': 'red',
          '2025-04-22': 'yellow',
          '2025-04-23': 'yellow',
          '2025-04-24': 'green',
          '2025-04-25': 'green',
          '2025-04-26': 'red',
          '2025-04-27': 'red',
          '2025-04-28': 'green',
          '2025-05-01': 'red'
        }
      },
      challenges: ["Sp codes and Eq codes required"]
    },
    {
      name: 'KOJA OCR',
      status: 'In Progress',
      progress: 70,
      tasks: [
        { task: 'OCR UAT', pic: 'Isra', progress: 100 },
        { task: 'New Message OCR', pic: 'Rizky/Isra', progress: 70 },
        { task: 'Check Xray di OUT/Import', pic: 'Rizky', progress: 0 }
      ],
      timeline: {
        schedule: {
          '2025-04-18': 'red',
          '2025-04-19': 'red',
          '2025-04-20': 'red',
          '2025-04-21': 'red',
          '2025-04-22': 'yellow',
          '2025-04-23': 'yellow',
          '2025-04-24': 'yellow',
          '2025-04-25': 'yellow',
          '2025-04-26': 'red',
          '2025-04-27': 'green',
          '2025-04-28': 'green'
        }
      }
    },
    {
      name: "TSJ Autogate",
      status: "In Progress",
      progress: 80,
      tasks: [
        { task: "Autogate", pic: "Deja", progress: 100 },
        { task: "UAT", pic: "Deja/David", progress: 0 }
      ],
      timeline: {
        schedule: {
          '2025-04-18': 'red',
          '2025-04-19': 'red',
          '2025-04-20': 'red',
          '2025-04-21': 'red',
          '2025-04-22': 'red',
          '2025-04-23': 'red',
          '2025-04-24': 'red',
          '2025-04-25': 'red',
          '2025-04-26': 'red',
          '2025-04-27': 'red',
          '2025-04-28': 'red',
          '2025-05-01': 'red'
        }
      },
      challenges: ["Jadwal UAT masih menunggu"]
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
        { task: "Service for payment in 1hrs", pic: "Rizky", progress: 80 },
        { task: "Service/cp for enhance truckin process", pic: "Rizky", progress: 20 },
        { task: "Self Pregate System : Mockup", pic: "Rizky", progress: 70 },
        { task: "Bug Payment", pic: "Rizky", progress: 80 },
        { task: "AMS IN on terminal", pic: "Rizky", progress: 50 }
      ],
      timeline: {
        schedule: {
          '2025-04-17': 'yellow',
          '2025-04-18': 'red',
          '2025-04-19': 'red',
          '2025-04-20': 'red',
          '2025-04-21': 'red',
          '2025-04-22': 'red',
          '2025-04-23': 'red',
          '2025-04-24': 'red',
          '2025-04-25': 'red',
          '2025-04-26': 'red',
          '2025-04-27': 'red',
          '2025-04-28': 'red',
          '2025-05-01': 'red'
        }
      },
      challenges: ["Menunggu tarikan raw data reader dari STI"]
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
          '2025-04-18': 'red',
          '2025-04-19': 'red',
          '2025-04-20': 'red',
          '2025-04-21': 'red',
          '2025-04-22': 'red',
          '2025-04-23': 'red',
          '2025-04-24': 'red',
          '2025-04-25': 'red',
          '2025-04-26': 'red',
          '2025-04-27': 'red',
          '2025-04-28': 'red',
          '2025-05-01': 'red'
        }
      }
    },
    {
      name: "Palembang Autogate",
      status: "Completed",
      progress: 100,
      tasks: [
        { task: "Kolom Full/Empty di container", pic: "Deja", progress: 100 },
        { task: "Add user CM", pic: "Deja/David", progress: 100 }
      ],
      timeline: {
        schedule: {
          '2025-04-18': 'red',
          '2025-04-19': 'red',
          '2025-04-20': 'red',
          '2025-04-21': 'red',
          '2025-04-22': 'red',
          '2025-04-23': 'red',
          '2025-04-24': 'red',
          '2025-04-25': 'red',
          '2025-04-26': 'red',
          '2025-04-27': 'red',
          '2025-04-28': 'red',
          '2025-05-01': 'red'
        }
      }
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
          '2025-04-18': 'red',
          '2025-04-19': 'red',
          '2025-04-20': 'red',
          '2025-04-21': 'red',
          '2025-04-22': 'red',
          '2025-04-23': 'red',
          '2025-04-24': 'red',
          '2025-04-25': 'red',
          '2025-04-26': 'red',
          '2025-04-27': 'red',
          '2025-04-28': 'red',
          '2025-05-01': 'red'
        }
      }
    },
    {
      name: "Kemenag SIPPRO",
      status: "In Progress",
      progress: 67.5,
      tasks: [
        { task: "Validator : Portal for validate", pic: "Rizky/Iqbal", progress: 80 },
        { task: "Biro hukum : Portal for biro hukum", pic: "Rizky/Iqbal", progress: 70 },
        { task: "Lembaga Baru Integration", pic: "Rizky/Iqbal/David", progress: 40 },
        { task: "Migrasi Server", pic: "Rizky/David", progress: 80 }
      ],
      timeline: {
        schedule: {
          '2025-04-15': 'yellow',
          '2025-04-16': 'yellow',
          '2025-04-17': 'yellow',
          '2025-04-18': 'red',
          '2025-04-19': 'red',
          '2025-04-20': 'red',
          '2025-04-21': 'red',
          '2025-04-22': 'red',
          '2025-04-23': 'red',
          '2025-04-24': 'red',
          '2025-04-25': 'green',
          '2025-04-26': 'green',
          '2025-04-27': 'red',
          '2025-04-28': 'red',
          '2025-05-01': 'red'
        }
      }
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
          '2025-04-18': 'red',
          '2025-04-19': 'red',
          '2025-04-20': 'red',
          '2025-04-21': 'red',
          '2025-04-22': 'red',
          '2025-04-23': 'red',
          '2025-04-24': 'red',
          '2025-04-25': 'red',
          '2025-04-26': 'red',
          '2025-04-27': 'red',
          '2025-04-28': 'red',
          '2025-05-01': 'red'
        }
      }
    },
    {
      name: "IKT Domestic",
      status: "In Progress",
      progress: 100,
      tasks: [
        { task: "CMS Add", pic: "Deja", progress: 100 }
      ],
      timeline: {
        schedule: {
          '2025-04-18': 'red',
          '2025-04-19': 'red',
          '2025-04-20': 'red',
          '2025-04-21': 'red',
          '2025-04-22': 'red',
          '2025-04-23': 'red',
          '2025-04-24': 'red',
          '2025-04-25': 'red',
          '2025-04-26': 'red',
          '2025-04-27': 'red',
          '2025-04-28': 'red',
          '2025-05-01': 'red'
        }
      }
    },
    {
      name: "TO3 : Xray",
      status: "Completed",
      progress: 100,
      tasks: [
        { task: "API Integration", pic: "Rizky", progress: 100 },
        { task: "API Test", pic: "David", progress: 100 },
        { task: "AMS Web : Xray Implementation", pic: "Rizky/Iqbal/Deja", progress: 100 },
        { task: "Check Xray in Gateway", pic: "Deja", progress: 100 }
      ],
      timeline: {
        schedule: {
          '2025-04-18': 'red',
          '2025-04-19': 'red',
          '2025-04-20': 'red',
          '2025-04-21': 'red',
          '2025-04-22': 'red',
          '2025-04-23': 'red',
          '2025-04-24': 'red',
          '2025-04-25': 'red',
          '2025-04-26': 'red',
          '2025-04-27': 'red',
          '2025-04-28': 'red',
          '2025-05-01': 'red'
        }
      }
    },
    {
      name: "TO3/MAL Joingate",
      status: "In Progress",
      progress: 50,
      tasks: [
        { task: "API", pic: "Deja", progress: 50 },
        { task: "CP Gate IN", pic: "Deja", progress: 50 },
        { task: "MAL CP Gate IN/Reader", pic: "Deja", progress: 70 }
      ],
      timeline: {
        schedule: {
          '2025-04-15': 'yellow',
          '2025-04-16': 'yellow',
          '2025-04-17': 'yellow',
          '2025-04-18': 'red',
          '2025-04-19': 'red',
          '2025-04-20': 'red',
          '2025-04-21': 'red',
          '2025-04-22': 'red',
          '2025-04-23': 'yellow',
          '2025-04-24': 'yellow',
          '2025-04-25': 'yellow',
          '2025-04-26': 'yellow',
          '2025-04-27': 'green',
          '2025-04-28': 'green',
          '2025-05-01': 'red'
        }
      },
      challenges: ["Administrasi Kelanjutan project"]
    }
  ],monthlyPlan : [
    {
      title: "April 2025 Targets",
      description: "Complete ongoing implementations and system integrations",
      items: [
        "Complete KOJA OCR implementation",
        "Complete TSJ Autogate UAT",
        "Implement Kalibaru CA Autogate enhancements",
        "Complete Kemenag SIPPRO portal updates",
        "Progress TO3 Joingate implementation"
      ]
    }
  ],weeklyPlan : [
    {
      week: "Week 3 (Apr 15-21)",
      status: "In Progress",
      tasks: [
        "Kalibaru CA bug fixes and payment service",
        "Kemenag SIPPRO server migration",
        "TO3 Joingate API development",
        "KOJA OCR message system implementation"
      ]
    },
    {
      week: "Week 4 (Apr 22-28)",
      status: "Planned",
      tasks: [
        "TSJ Autogate UAT execution",
        "Complete TO3 Joingate implementation",
        "KOJA OCR Xray integration",
        "System testing and optimization",
        "Documentation updates"
      ]
    }
  ]
};