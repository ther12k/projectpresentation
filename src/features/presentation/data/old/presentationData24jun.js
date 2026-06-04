export const projects = {
  projectStatus: [
    {
      name: "JICT OCR",
      status: "In Progress",
      progress: 83.6,
      tasks: [
        {
          task: "Validation min max size on dashboard",
          pic: "Rizky",
          progress: 100,
        },
        { task: "New Message OCR", pic: "Rizky/Isra", progress: 100 },
        { task: "OV message check", pic: "Rizky", progress: 50 },
        {
          task: "Integrity db constraint error",
          pic: "Rizky/Izra",
          progress: 100,
        },
        { task: "OCR Dashboard Update", pic: "Iqbal", progress: 100 },
        { task: "OCR Damage Service", pic: "Rizky", progress: 100 },
        { task: "OCR DG Validation billing", pic: "Rizky", progress: 100 },
        { task: "Flexi Tank/EqSp History bug", pic: "Rizky", progress: 30 },
      ],
      timeline: {
        start: "2025-06-22",
        end: "2025-06-26",
        schedule: {
          "2025-06-22": "red",
          "2025-06-23": "yellow",
          "2025-06-24": "green",
          "2025-06-25": "green",
          "2025-06-26": "red",
        },
      }
    },
    {
      name: "KOJA OCR",
      status: "In Progress",
      progress: 65,
      tasks: [
        { task: "OCR UAT", pic: "Isra", progress: 100 },
        { task: "New Message OCR", pic: "Rizky/Isra", progress: 100 },
        { task: "Check Xray di OUT/Import", pic: "Rizky", progress: 0 },
        { task: "DG validation", pic: "Rizky", progress: 30 },
      ],
      timeline: {
        start: "2025-06-22",
        end: "2025-06-26",
        schedule: {
          "2025-06-22": "red",
          "2025-06-23": "yellow",
          "2025-06-24": "green",
          "2025-06-25": "green",
          "2025-06-26": "red",
        },
      },
    },
    {
      name: "TSJ Autogate",
      status: "In Progress",
      progress: 50,
      tasks: [
        { task: "Autogate", pic: "Deja", progress: 100 },
        { task: "UAT", pic: "Deja/David", progress: 0 },
      ],
      timeline: {
        start: "2025-06-22",
        end: "2025-06-26",
        schedule: {
          "2025-06-22": "red",
          "2025-06-23": "red",
          "2025-06-24": "red",
          "2025-06-25": "red",
          "2025-06-26": "red",
        },
      },
      challenges: ["Jadwal UAT masih menunggu"],
    },
    {
      name: "Kalibaru CA Autogate",
      status: "In Progress",
      progress: 82.8,
      tasks: [
        { task: "Mobile Web App (Autogate)", pic: "Rizky/Iqbal", progress: 10 },
        { task: "Payment/Emoney", pic: "Rizky", progress: 100 },
        { task: "Settlement (Automatic)", pic: "Rizky", progress: 100 },
        { task: "Monitoring Transaction", pic: "Rizky", progress: 95 },
        { task: "Service for payment in 1hrs", pic: "Rizky", progress: 100 },
        {
          task: "Service/cp for enhance truckin process",
          pic: "Rizky",
          progress: 100,
        },
        { task: "Bug Payment", pic: "Rizky", progress: 100 },
        { task: "AMS IN on terminal", pic: "Rizky", progress: 95 },
      ],
      timeline: {
        start: "2025-06-22",
        end: "2025-06-26",
        schedule: {
          "2025-06-22": "red",
          "2025-06-23": "red",
          "2025-06-24": "red",
          "2025-06-25": "red",
          "2025-06-26": "red",
        },
      }
    },
    {
      name: "Indocement Autogate",
      status: "Completed",
      progress: 100,
      tasks: [
        { task: "Autogate New UAT", pic: "Rizky/David", progress: 100 },
        {
          task: "Autogate New : Bug fix rfid double",
          pic: "Rizky",
          progress: 100,
        },
        {
          task: "Autogate New : Bug fix retry Transaction",
          pic: "Rizky",
          progress: 100,
        },
      ],
      timeline: {
        start: "2025-05-07",
        end: "2025-05-10",
        schedule: {
          "2025-06-22": "red",
          "2025-06-23": "red",
          "2025-06-24": "red",
          "2025-06-25": "red",
          "2025-06-26": "red",
        },
      },
    },
    {
      name: "Palembang Autogate",
      status: "Completed",
      progress: 100,
      tasks: [
        { task: "Kolom Full/Empty di container", pic: "Deja", progress: 100 },
        { task: "Add user CM", pic: "Deja/David", progress: 100 },
        { task: "Flow Autohold/P2 Check", pic: "Deja", progress: 100 },
        { task: "Video Tutorial AMS", pic: "David", progress: 100 },
      ],
      timeline: {
        start: "2025-05-07",
        end: "2025-05-10",
        schedule: {
          "2025-06-22": "red",
          "2025-06-23": "red",
          "2025-06-24": "red",
          "2025-06-25": "red",
          "2025-06-26": "red",
        },
      },
    },
    {
      name: "Pontianak Autogate",
      status: "Completed",
      progress: 100,
      tasks: [
        { task: "Autogate New UAT", pic: "David/Deja", progress: 100 },
        { task: "Flow Autohold/P2 Check", pic: "Deja", progress: 100 },
        { task: "Video Tutorial AMS", pic: "David", progress: 100 },
      ],
      timeline: {
        start: "2025-05-07",
        end: "2025-05-10",
        schedule: {
          "2025-06-22": "red",
          "2025-06-23": "red",
          "2025-06-24": "red",
          "2025-06-25": "red",
          "2025-06-26": "red",
        },
      },
    },
    {
      name: "Kemenag SIPPRO",
      status: "In Progress",
      progress: 64,
      tasks: [
        {
          task: "Validator : Portal for validate",
          pic: "Rizky/Iqbal",
          progress: 80,
        },
        {
          task: "Biro hukum : Portal for biro hukum",
          pic: "Rizky/Iqbal",
          progress: 70,
        },
        {
          task: "Lembaga Baru Integration",
          pic: "Rizky/Iqbal/David",
          progress: 40,
        },
        { task: "Migrasi Server", pic: "Rizky/David", progress: 90 },
        { task: "Test Server baru", pic: "David", progress: 20 },
      ],
      timeline: {
        start: "2025-06-22",
        end: "2025-06-26",
        schedule: {
          "2025-06-22": "red",
          "2025-06-23": "red",
          "2025-06-24": "red",
          "2025-06-25": "red",
          "2025-06-26": "red",
        },
      },
    },
    {
      name: "IKT International",
      status: "Completed",
      progress: 100,
      tasks: [
        { task: "Autogate API Gateway", pic: "Rizky/Deja", progress: 100 },
        { task: "Dashboard API", pic: "Rizky", progress: 100 },
        { task: "Dashboard Web", pic: "Iqbal", progress: 100 },
      ],
      timeline: {
        start: "2025-05-07",
        end: "2025-05-10",
        schedule: {
          "2025-06-22": "red",
          "2025-06-23": "red",
          "2025-06-24": "red",
          "2025-06-25": "red",
          "2025-06-26": "red",
        },
      },
    },
    {
      name: "IKT Domestic",
      status: "Completed",
      progress: 100,
      tasks: [{ task: "CMS Add", pic: "Deja", progress: 100 }],
      timeline: {
        start: "2025-05-07",
        end: "2025-05-10",
        schedule: {
          "2025-06-22": "red",
          "2025-06-23": "red",
          "2025-06-24": "red",
          "2025-06-25": "red",
          "2025-06-26": "red",
        },
      },
    },
    {
      name: "TO3 : Xray",
      status: "Completed",
      progress: 100,
      tasks: [
        { task: "API Integration", pic: "Rizky", progress: 100 },
        { task: "API Test", pic: "David", progress: 100 },
        {
          task: "AMS Web : Xray Implementation",
          pic: "Rizky/Iqbal/Deja",
          progress: 100,
        },
        { task: "Check Xray in Gateway", pic: "Deja", progress: 100 },
      ],
      timeline: {
        start: "2025-05-07",
        end: "2025-05-10",
        schedule: {
          "2025-06-22": "red",
          "2025-06-23": "red",
          "2025-06-24": "red",
          "2025-06-25": "red",
          "2025-06-26": "red",
        },
      },
    },
    {
      name: "TO3/MAL Joingate",
      status: "In Progress",
      progress: 90,
      tasks: [
        { task: "API", pic: "Deja", progress: 100 },
        { task: "CP Gate IN", pic: "Deja", progress: 100 },
        { task: "MAL CP Gate IN/Reader", pic: "Deja", progress: 100 },
        { task: "Test & Bugsfixing", pic: "Deja", progress: 95 },
        { task: "Doc", pic: "David/Rizky", progress: 50 },
      ],
      timeline: {
        start: "2025-06-22",
        end: "2025-06-26",
        schedule: {
          "2025-06-22": "red",
          "2025-06-23": "yellow",
          "2025-06-24": "green",
          "2025-06-25": "green",
          "2025-06-26": "red",
        },
      },
      challenges: ["Gate blm ready"],
    },
    {
      name: "Indocement : PMMS Autogate",
      status: "In Progress",
      progress: 93.3,
      tasks: [
        { task: "API", pic: "Deja/Rizky", progress: 100 },
        { task: "Dashboard Web", pic: "Iqbal", progress: 95 },
        { task: "CP", pic: "Deja", progress: 85 },
      ],
      timeline: {
        start: "2025-06-22",
        end: "2025-06-26",
        schedule: {
          "2025-06-22": "red",
          "2025-06-23": "yellow",
          "2025-06-24": "green",
          "2025-06-25": "green",
          "2025-06-26": "red",
        },
      },
    },
  ],
  monthlyPlan: [
    {
      title: "June 2025 Targets",
      description:
        "Complete ongoing implementations and prepare for new projects",
      items: [
        "Complete JICT OCR implementation and fix constraint errors",
        "Complete KOJA OCR implementation and Xray integration",
        "Schedule and complete TSJ Autogate UAT",
        "Finalize Kalibaru CA Autogate mobile web app",
        "Complete Kemenag SIPPRO server migration and integration",
        "Complete Indocement PMMS Autogate development",
        "Finalize TO3/MAL Joingate testing and documentation",
      ],
    },
  ],
  weeklyPlan: [
    {
      week: "Week 1 (June 2-8)",
      status: "Completed",
      tasks: [
        "JICT OCR dashboard validation and message implementation",
        "Kalibaru CA AMS IN terminal finalization",
        "Kemenag SIPPRO portal validation completion",
        "TO3/MAL Joingate testing and documentation",
        "Indocement PMMS initial development phase",
      ],
    },
    {
      week: "Week 2 (June 9-15)",
      status: "Completed",
      tasks: [
        "JICT OCR integrity database fixes and DG validation",
        "KOJA OCR Xray integration implementation",
        "TSJ Autogate UAT scheduling and execution",
        "Kalibaru CA mobile web app development",
        "Kemenag SIPPRO server testing completion",
      ],
    },
    {
      week: "Week 3 (June 16-22)",
      status: "Completed",
      tasks: [
        "JICT OCR final testing and validation",
        "Complete KOJA OCR implementation",
        "Kalibaru CA monitoring system enhancement",
        "Indocement PMMS API and dashboard development",
        "Documentation updates for all projects",
      ],
    },
    {
      week: "Week 4 (June 23-29)",
      status: "In Progress",
      tasks: [
        "Project status review and reporting",
        "Preparation for July initiatives",
        "Final testing and bug fixes",
        "Team planning and resource allocation",
        "User acceptance testing coordination",
      ],
    },
  ],
};