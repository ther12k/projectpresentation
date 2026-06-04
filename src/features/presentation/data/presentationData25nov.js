export const projects = {
  projectStatus: [
    {
      name: "JICT OCR",
      status: "In Progress",
      progress: 98,
      tasks: [
        { task: "Flexi Tank/EqSp History bug", pic: "Rizky", progress: 100 },
        { task: "Hico/P2 check out", pic: "Rizky/Isra", progress: 100 },
        { task: "Change Autogate DB password", pic: "Isra", progress: 100 },
        { task: "CMS print update", pic: "Rizky/Isra", progress: 90 },
        { task: "Damage Update/Scheduler", pic: "Rizky/Isra", progress: 95 },
        { task: "OCR Image on CM", pic: "Rizky/Isra", progress: 100 },
        { task: "Manual Insert migration", pic: "Rizky/Isra", progress: 100 },
      ],
      timeline: {
        start: "2025-11-21",
        end: "2025-11-30",
        schedule: {
          "2025-11-21": "red",
          "2025-11-22": "red",
          "2025-11-23": "red",
          "2025-11-24": "white",
          "2025-11-25": "white",
          "2025-11-26": "white",
          "2025-11-27": "white",
          "2025-11-28": "yellow",
          "2025-11-29": "red",
          "2025-11-30": "red",
        },
      },
      comments: [
        {
          date: "2025-04-16",
          author: "Rizky Zulkarnaen",
          message: "UNDG code blm ada, OH definisi dari mana"
        }
      ],
    },
    {
      name: "KOJA OCR",
      status: "Completed",
      progress: 100,
      tasks: [
        { task: "DG validation", pic: "Rizky", progress: 100 },
        { task: "Change Autogate DB password", pic: "Isra", progress: 100 },
        { task: "Booking Message", pic: "Rizky/Isra", progress: 100 },
        { task: "Min max weight validation", pic: "Rizky/Isra", progress: 100 },
      ],
      timeline: {
        start: "2025-11-21",
        end: "2025-11-30",
        schedule: {
          "2025-11-21": "red",
          "2025-11-22": "red",
          "2025-11-23": "red",
          "2025-11-24": "red",
          "2025-11-25": "red",
          "2025-11-26": "red",
          "2025-11-27": "red",
          "2025-11-28": "red",
          "2025-11-29": "red",
          "2025-11-30": "red",
        },
      },
    },
    {
      name: "TSJ Autogate",
      status: "In Progress",
      progress: 95,
      tasks: [
        { task: "Autogate", pic: "Deja", progress: 100 },
        { task: "UAT", pic: "Deja/David", progress: 90 },
      ],
      timeline: {
        start: "2025-11-21",
        end: "2025-11-30",
        schedule: {
          "2025-11-21": "red",
          "2025-11-22": "red",
          "2025-11-23": "red",
          "2025-11-24": "white",
          "2025-11-25": "white",
          "2025-11-26": "white",
          "2025-11-27": "white",
          "2025-11-28": "white",
          "2025-11-29": "red",
          "2025-11-30": "red",
        },
      },
      challenges: ["Jadwal UAT masih menunggu"],
      comments: [
        {
          date: "2025-05-02",
          author: "Rizky Zulkarnaen",
          message: "tunggu tanggal UAT"
        }
      ],
    },
    {
      name: "Kalibaru CA Autogate",
      status: "In Progress",
      progress: 69,
      tasks: [
        { task: "AMS IN on terminal", pic: "Rizky", progress: 100 },
        { task: "Behandle new Integration", pic: "Rizky", progress: 0 },
        { task: "Container Info for BKI", pic: "Rizky", progress: 90 },
        { task: "Open portal manual time record", pic: "Rizky", progress: 90 },
        { task: "Using domain for url integration to NPCT", pic: "Rizky", progress: 100 },
        { task: "Booking Message", pic: "Rizky", progress: 100 },
        { task: "Manual Input Enhance", pic: "Rizky", progress: 95 },
        { task: "Cloud Migration", pic: "David", progress: 50 },
        { task: "CP emergency plan", pic: "Rizky", progress: 95 },
        { task: "Manual Input emergency plan", pic: "Rizky/Iqbal", progress: 0 },
        { task: "Monitoring scheduler", pic: "Rizky", progress: 50 },
        { task: "REKON settlement", pic: "Rizky", progress: 100 },
      ],
      timeline: {
        start: "2025-11-21",
        end: "2025-11-30",
        schedule: {
          "2025-11-21": "red",
          "2025-11-22": "red",
          "2025-11-23": "red",
          "2025-11-24": "white",
          "2025-11-25": "white",
          "2025-11-26": "white",
          "2025-11-27": "white",
          "2025-11-28": "yellow",
          "2025-11-29": "red",
          "2025-11-30": "red",
        },
      },
      challenges: ["Multiple new integration requirements added", "Manual Input Enhancement in progress", "Cloud Migration initiated", "Emergency plan development ongoing"],
      comments: [
        {
          date: "2025-04-13",
          author: "Rizky Zulkarnaen",
          message: "belum ada meeting lanjutan"
        },
        {
          date: "2025-08-12",
          author: "Rizky Zulkarnaen",
          message: "untuk sementara kalau manual input beda tar, cm lama hapus dlu"
        }
      ],
    },
    {
      name: "Kemenag SIPPRO",
      status: "In Progress",
      progress: 84,
      tasks: [
        { task: "Validator : Portal for validate", pic: "Rizky/Iqbal", progress: 80 },
        { task: "Biro hukum : Portal for biro hukum", pic: "Rizky/Iqbal", progress: 70 },
        { task: "Lembaga Baru Integration", pic: "Rizky/Iqbal/David", progress: 40 },
        { task: "Migrasi Server", pic: "Rizky/David", progress: 95 },
        { task: "Test Server baru", pic: "David", progress: 100 },
        { task: "Bug SSO", pic: "Rizky/David", progress: 100 },
        { task: "Perapian data", pic: "David", progress: 90 },
        { task: "RFC", pic: "Iqbal", progress: 90 },
        { task: "DoubleDegree, New Lembaga, Akreditasi", pic: "Rizky/David/Iqbal", progress: 0 },
      ],
      timeline: {
        start: "2025-11-21",
        end: "2025-11-30",
        schedule: {
          "2025-11-21": "red",
          "2025-11-22": "red",
          "2025-11-23": "red",
          "2025-11-24": "white",
          "2025-11-25": "white",
          "2025-11-26": "white",
          "2025-11-27": "white",
          "2025-11-28": "yellow",
          "2025-11-29": "red",
          "2025-11-30": "red",
        },
      },
      challenges: ["Awaiting feedback for further development"],
      comments: [
        {
          date: "2025-02-12",
          author: "Rizky Zulkarnaen",
          message: "tambahan monitoring unit"
        }
      ],
    },
    {
      name: "TO3 Xray",
      status: "In Progress",
      progress: 97,
      tasks: [
        { task: "API Integration", pic: "Rizky", progress: 100 },
        { task: "API Test", pic: "David", progress: 100 },
        { task: "AMS Web - Xray Implementation", pic: "Rizky/Iqbal/Deja", progress: 100 },
        { task: "Check Xray in Gateway", pic: "Deja", progress: 100 },
        { task: "Doc no data, search", pic: "David/Deja", progress: 100 },
        { task: "Doc", pic: "David", progress: 80 },
      ],
      timeline: {
        start: "2025-11-21",
        end: "2025-11-30",
        schedule: {
          "2025-11-21": "red",
          "2025-11-22": "red",
          "2025-11-23": "red",
          "2025-11-24": "white",
          "2025-11-25": "white",
          "2025-11-26": "white",
          "2025-11-27": "white",
          "2025-11-28": "white",
          "2025-11-29": "red",
          "2025-11-30": "red",
        },
      },
      challenges: ["Documentation task still pending"],
      comments: [
        {
          date: "2025-07-29",
          author: "Rizky Zulkarnaen",
          message: "bc11 gada data"
        },
        {
          date: "2025-08-14",
          author: "Rizky Zulkarnaen",
          message: "Ditandai selesai"
        }
      ],
    },
    {
      name: "TO3/MAL Joingate",
      status: "In Progress",
      progress: 86,
      tasks: [
        { task: "API", pic: "Deja", progress: 100 },
        { task: "CP Gate IN", pic: "Deja", progress: 100 },
        { task: "MAL CP Gate IN/Reader", pic: "Deja", progress: 100 },
        { task: "Test & Bugsfixing", pic: "Deja", progress: 100 },
        { task: "Doc", pic: "David/Rizky", progress: 80 },
        { task: "MAL Booking", pic: "Deja", progress: 95 },
        { task: "TSJ/T3/MAL flow or logic", pic: "Deja", progress: 100 },
        { task: "T3 Book", pic: "Deja", progress: 0 },
        { task: "Tosnus", pic: "Deja", progress: 95 },
      ],
      timeline: {
        start: "2025-11-21",
        end: "2025-11-30",
        schedule: {
          "2025-11-21": "yellow",
          "2025-11-22": "red",
          "2025-11-23": "red",
          "2025-11-24": "white",
          "2025-11-25": "white",
          "2025-11-26": "white",
          "2025-11-27": "white",
          "2025-11-28": "yellow",
          "2025-11-29": "red",
          "2025-11-30": "red",
        },
      },
      challenges: ["Final testing and documentation completion"],
      comments: [
        {
          date: "2025-08-13",
          author: "Rizky Zulkarnaen",
          message: "menunggu service mal"
        }
      ],
    },
    {
      name: "IKT",
      status: "Completed",
      progress: 95,
      tasks: [
        { task: "Timeout API", pic: "Deja", progress: 100 },
        { task: "Update AMS", pic: "Iqbal", progress: 90 },
      ],
      timeline: {
        start: "2025-11-21",
        end: "2025-11-30",
        schedule: {
          "2025-11-21": "red",
          "2025-11-22": "red",
          "2025-11-23": "red",
          "2025-11-24": "red",
          "2025-11-25": "blue",
          "2025-11-26": "white",
          "2025-11-27": "white",
          "2025-11-28": "white",
          "2025-11-29": "red",
          "2025-11-30": "red",
        },
      },
      comments: [
        {
          date: "2025-04-16",
          author: "Rizky Zulkarnaen",
          message: "belum deploy"
        }
      ],
    },
    {
      name: "Indocement : Truckscale",
      status: "In Progress",
      progress: 97,
      tasks: [
        { task: "API", pic: "Deja", progress: 95 },
        { task: "Monitoring", pic: "Iqbal", progress: 95 },
        { task: "Gate App", pic: "Deja", progress: 100 },
      ],
      timeline: {
        start: "2025-11-21",
        end: "2025-11-30",
        schedule: {
          "2025-11-21": "red",
          "2025-11-22": "red",
          "2025-11-23": "red",
          "2025-11-24": "red",
          "2025-11-25": "red",
          "2025-11-26": "red",
          "2025-11-27": "red",
          "2025-11-28": "red",
          "2025-11-29": "red",
          "2025-11-30": "red",
        },
      },
      challenges: ["Final optimization and testing"],
    },
    {
      name: "Indocement : Autogate grobogan",
      status: "In Progress",
      progress: 30,
      tasks: [
        { task: "IOT", pic: "David", progress: 30 },
      ],
      timeline: {
        start: "2025-11-21",
        end: "2025-11-30",
        schedule: {
          "2025-11-21": "yellow",
          "2025-11-22": "red",
          "2025-11-23": "red",
          "2025-11-24": "yellow",
          "2025-11-25": "yellow",
          "2025-11-26": "yellow",
          "2025-11-27": "green",
          "2025-11-28": "yellow",
          "2025-11-29": "red",
          "2025-11-30": "red",
        },
      },
      challenges: ["IOT integration in early stages"],
    },
    {
      name: "Patimban : Autogate",
      status: "In Progress",
      progress: 10,
      tasks: [
        { task: "Gateway API", pic: "Deja", progress: 0 },
        { task: "Monitoring", pic: "Iqbal/Rizky", progress: 30 },
        { task: "AMS", pic: "Iqbal/Rizky", progress: 10 },
        { task: "IOT", pic: "David/Rizky", progress: 10 },
        { task: "Display Kiosk", pic: "David/Rizky", progress: 30 },
        { task: "Logging System", pic: "Rizky", progress: 50 },
        { task: "Docs", pic: "David", progress: 0 },
      ],
      timeline: {
        start: "2025-11-21",
        end: "2025-11-30",
        schedule: {
          "2025-11-21": "yellow",
          "2025-11-22": "red",
          "2025-11-23": "red",
          "2025-11-24": "yellow",
          "2025-11-25": "yellow",
          "2025-11-26": "white",
          "2025-11-27": "green",
          "2025-11-28": "yellow",
          "2025-11-29": "red",
          "2025-11-30": "red",
        },
      },
      challenges: ["New project in early development phase"],
    },
  ],
  unfinishedProjects: [
    {
      name: "JICT OCR",
      status: "In Progress",
      owner: "Rizky/Isra",
      progress: 98,
      summary: "Final validations waiting on external Jetson testing before closeout.",
      lastUpdated: "2025-11-25",
      tasks: [
        {
          title: "Damage Picture on CM",
          assignee: "Rizky/Isra",
          progressNote: "Development complete, awaiting mas Isra finishing testing.",
          blocker: "Task.Factory.StartNew causing session login missing on CM.",
          status: "Testing"
        },
        {
          title: "Damage Update/Scheduler",
          assignee: "Rizky/Isra",
          progressNote: "Waiting damage final test from Jetson.",
          blocker: "Waiting test data from Ali.",
          status: "Waiting QA"
        },
        {
          title: "Manual Insert migration",
          assignee: "Rizky/Isra",
          progressNote: "Migration process completed.",
          blocker: "None",
          status: "Completed"
        },
      ],
    },
    {
      name: "Kalibaru CA Autogate",
      status: "In Progress",
      owner: "Rizky",
      progress: 69,
      summary: "Key integrations tracked while infrastructure migrations continue.",
      lastUpdated: "2025-11-25",
      tasks: [
        {
          title: "Cloud Migration",
          assignee: "David",
          progressNote: "Waiting for cloud app server.",
          blocker: "Cloud app server deployment pending from infrastructure team.",
          status: "Blocked"
        },
        {
          title: "Behandle new Integration",
          assignee: "Rizky",
          progressNote: "Waiting the technical discussion.",
          blocker: "Need technical workshop with stakeholder teams.",
          status: "Pending Discussion"
        },
        {
          title: "Manual Input emergency plan",
          assignee: "Rizky/Iqbal",
          progressNote: "Not yet started.",
          blocker: "Waiting for requirements clarification.",
          status: "Not Started"
        },
      ],
    },
    {
      name: "Kemenag SIPPRO",
      status: "In Progress",
      owner: "Rizky/Iqbal",
      progress: 84,
      summary: "Portal rollout needs alignment with stakeholder units.",
      lastUpdated: "2025-11-25",
      tasks: [
        {
          title: "Lembaga Baru Integration",
          assignee: "Rizky/Iqbal/David",
          progressNote: "Planning to meet for discussion (today or tomorrow).",
          blocker: "Awaiting confirmation on meeting schedule.",
          status: "Scheduling"
        },
        {
          title: "DoubleDegree, New Lembaga, Akreditasi",
          assignee: "Rizky/David/Iqbal",
          progressNote: "New requirement, not yet started.",
          blocker: "Waiting for requirements documentation.",
          status: "Not Started"
        },
      ],
    },
    {
      name: "TO3/MAL Joingate",
      status: "In Progress",
      owner: "Deja",
      progress: 86,
      summary: "Final components and documentation pending completion.",
      lastUpdated: "2025-11-25",
      tasks: [
        {
          title: "T3 Book",
          assignee: "Deja",
          progressNote: "Not yet started.",
          blocker: "Waiting for service availability.",
          status: "Not Started"
        },
      ],
    },
    {
      name: "Patimban : Autogate",
      status: "In Progress",
      owner: "Deja/Rizky",
      progress: 10,
      summary: "New project in early development phase with multiple components.",
      lastUpdated: "2025-11-25",
      tasks: [
        {
          title: "Gateway API",
          assignee: "Deja",
          progressNote: "Not yet started.",
          blocker: "Waiting for other project to finished.",
          status: "Not Started"
        },
        {
          title: "Display Kiosk",
          assignee: "David/Rizky",
          progressNote: "In progress.",
          blocker: "None",
          status: "In Progress"
        },
        {
          title: "Logging System",
          assignee: "Rizky",
          progressNote: "In progress.",
          blocker: "None",
          status: "In Progress"
        },
        {
          title: "Docs",
          assignee: "David",
          progressNote: "Not yet started.",
          blocker: "Waiting for implementation completion.",
          status: "Not Started"
        },
      ],
    },
  ],
  monthlyPlan: [
    {
      title: "November 2025 Targets - Updated",
      description: "Focus on completing remaining tasks and addressing new requirements during current sprint.",
      items: [
        "Complete JICT OCR final tasks including Manual Insert migration, CMS print update, and Damage Update/Scheduler.",
        "Maintain KOJA OCR completion status and monitor production deployment.",
        "Finalize TSJ Autogate UAT process and deployment preparation.",
        "Address remaining integration requirements for Kalibaru CA Autogate including Cloud Migration, Manual Input emergency plan, and Monitoring scheduler.",
        "Complete Kemenag SIPPRO Lembaga Baru integration and begin DoubleDegree, New Lembaga, Akreditasi requirements.",
        "Complete final testing for TO3/MAL Joingate including T3 Book component and finalize documentation.",
        "Complete TO3 Xray documentation and ensure system stability.",
        "Monitor IKT production deployment.",
        "Finalize Indocement Truckscale project with completion of API optimization and monitoring system.",
        "Progress Indocement Autogate grobogan IOT integration.",
        "Begin development on Patimban Autogate project components.",
      ],
    },
  ],
  weeklyPlan: [
    {
      week: "Week 1 (Nov 4-10)",
      status: "Completed",
      tasks: [
        "JICT OCR: Continue Manual Insert migration, CMS print update, and Damage Update tasks.",
        "KOJA OCR: Monitor production and provide support.",
        "TSJ Autogate: Continue UAT preparation and execution.",
        "Kalibaru CA: Work on Cloud Migration and emergency plan components.",
        "Kemenag SIPPRO: Focus on Lembaga Baru integration and continue RFC process.",
        "TO3/MAL: Continue Tosnus component development and documentation finalization.",
        "TO3 Xray: Continue documentation tasks.",
        "IKT: Monitor production deployment.",
        "Indocement Truckscale: Continue API development and monitoring implementation.",
        "Indocement Grobogan: Begin IOT integration work.",
      ],
    },
    {
      week: "Week 2 (Nov 11-17)",
      status: "Completed",
      tasks: [
        "JICT OCR: Progress on Manual Insert migration and Damage Update/Scheduler tasks.",
        "KOJA OCR: Production optimization and maintenance.",
        "TSJ Autogate: Execute UAT and resolve identified issues.",
        "Kalibaru CA: Continue Cloud Migration and emergency plan development.",
        "Kemenag SIPPRO: Continue Lembaga Baru integration testing.",
        "TO3/MAL: Work on Tosnus component development.",
        "TO3 Xray: Complete documentation tasks.",
        "IKT: Production monitoring and optimization.",
        "Indocement: Continue development phase for all components.",
        "Patimban: Project planning and initial setup.",
      ],
    },
    {
      week: "Week 3 (Nov 18-24)",
      status: "Completed",
      tasks: [
        "JICT OCR: Complete Manual Insert migration, CMS print update, and Damage Update/Scheduler.",
        "KOJA OCR: Maintain production stability.",
        "TSJ Autogate: Continue UAT and prepare for deployment.",
        "Kalibaru CA: Progress Cloud Migration, Monitoring scheduler, and emergency plans.",
        "Kemenag SIPPRO: Continue Lembaga Baru integration and assess DoubleDegree requirements.",
        "TO3/MAL: Complete Tosnus component development and finalize documentation.",
        "TO3 Xray: Complete remaining documentation.",
        "IKT: Production support.",
        "Indocement Truckscale: Finalize API optimization and monitoring system.",
        "Indocement Grobogan: Continue IOT integration.",
        "Patimban: Begin Gateway API and Monitoring development.",
      ],
    },
    {
      week: "Week 4 (Nov 25-Dec 1)",
      status: "Current",
      tasks: [
        "JICT OCR: Final project closure and validation.",
        "KOJA OCR: Maintain production stability.",
        "TSJ Autogate: Complete UAT and deployment.",
        "Kalibaru CA: Continue Cloud Migration and finalize emergency plans.",
        "Kemenag SIPPRO: Complete Lembaga Baru integration and plan DoubleDegree implementation.",
        "TO3/MAL: Complete T3 Book component and final testing.",
        "TO3 Xray: System handover and production support.",
        "IKT: Production monitoring.",
        "Indocement Truckscale: Project completion and handover.",
        "Indocement Grobogan: Continue IOT development.",
        "Patimban: Progress on multiple components (Monitoring, AMS, IOT, Display Kiosk, Logging System).",
      ],
    },
  ],
};