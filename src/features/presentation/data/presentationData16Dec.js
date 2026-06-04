export const projects = {
  projectStatus: [
    {
      name: "JICT OCR",
      status: "Completed",
      progress: 100,
      tasks: [
        { task: "Flexi Tank/EqSp History bug", pic: "Rizky", progress: 100 },
        { task: "Hico/P2 check out", pic: "Rizky/Isra", progress: 100 },
        { task: "Change Autogate DB password", pic: "Isra", progress: 100 },
        { task: "CMS print update", pic: "Rizky/Isra", progress: 90 },
        { task: "Damage Update/Scheduler", pic: "Rizky/Isra", progress: 100 },
        { task: "OCR Image on CM", pic: "Rizky/Isra", progress: 100 },
        { task: "Manual Insert migration", pic: "Rizky/Isra", progress: 100 },
      ],
      timeline: {
        start: "2025-12-12",
        end: "2025-12-23",
        schedule: {
          "2025-12-12": "red",
          "2025-12-13": "red",
          "2025-12-14": "red",
          "2025-12-15": "red",
          "2025-12-16": "red",
          "2025-12-17": "red",
          "2025-12-18": "red",
          "2025-12-19": "red",
          "2025-12-20": "red",
          "2025-12-21": "red",
          "2025-12-22": "red",
          "2025-12-23": "red",
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
        start: "2025-12-12",
        end: "2025-12-23",
        schedule: {
          "2025-12-12": "red",
          "2025-12-13": "red",
          "2025-12-14": "red",
          "2025-12-15": "red",
          "2025-12-16": "red",
          "2025-12-17": "red",
          "2025-12-18": "red",
          "2025-12-19": "red",
          "2025-12-20": "red",
          "2025-12-21": "red",
          "2025-12-22": "red",
          "2025-12-23": "red",
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
        start: "2025-12-12",
        end: "2025-12-23",
        schedule: {
          "2025-12-12": "red",
          "2025-12-13": "red",
          "2025-12-14": "red",
          "2025-12-15": "red",
          "2025-12-16": "red",
          "2025-12-17": "red",
          "2025-12-18": "red",
          "2025-12-19": "red",
          "2025-12-20": "red",
          "2025-12-21": "red",
          "2025-12-22": "red",
          "2025-12-23": "red",
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
      progress: 74,
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
        { task: "Update message logol release", pic: "Deja/David", progress: 95 },
        { task: "Hold/Release xray service", pic: "Deja/David", progress: 90 },
      ],
      timeline: {
        start: "2025-12-12",
        end: "2025-12-23",
        schedule: {
          "2025-12-12": "red",
          "2025-12-13": "red",
          "2025-12-14": "red",
          "2025-12-15": "red",
          "2025-12-16": "yellow",
          "2025-12-17": "yellow",
          "2025-12-18": "yellow",
          "2025-12-19": "red",
          "2025-12-20": "red",
          "2025-12-21": "red",
          "2025-12-22": "yellow",
          "2025-12-23": "yellow",
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
      progress: 74,
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
        start: "2025-12-12",
        end: "2025-12-23",
        schedule: {
          "2025-12-12": "red",
          "2025-12-13": "red",
          "2025-12-14": "red",
          "2025-12-15": "red",
          "2025-12-16": "red",
          "2025-12-17": "red",
          "2025-12-18": "red",
          "2025-12-19": "red",
          "2025-12-20": "red",
          "2025-12-21": "red",
          "2025-12-22": "red",
          "2025-12-23": "red",
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
      progress: 93,
      tasks: [
        { task: "API Integration", pic: "Rizky", progress: 100 },
        { task: "API Test", pic: "David", progress: 100 },
        { task: "AMS Web - Xray Implementation", pic: "Rizky/Iqbal/Deja", progress: 100 },
        { task: "Check Xray in Gateway", pic: "Deja", progress: 100 },
        { task: "Doc no data, search", pic: "David/Deja", progress: 100 },
        { task: "Doc", pic: "David", progress: 80 },
      ],
      timeline: {
        start: "2025-12-12",
        end: "2025-12-23",
        schedule: {
          "2025-12-12": "red",
          "2025-12-13": "red",
          "2025-12-14": "red",
          "2025-12-15": "red",
          "2025-12-16": "red",
          "2025-12-17": "red",
          "2025-12-18": "red",
          "2025-12-19": "red",
          "2025-12-20": "red",
          "2025-12-21": "red",
          "2025-12-22": "red",
          "2025-12-23": "red",
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
        start: "2025-12-12",
        end: "2025-12-23",
        schedule: {
          "2025-12-12": "red",
          "2025-12-13": "red",
          "2025-12-14": "red",
          "2025-12-15": "red",
          "2025-12-16": "red",
          "2025-12-17": "red",
          "2025-12-18": "red",
          "2025-12-19": "red",
          "2025-12-20": "red",
          "2025-12-21": "red",
          "2025-12-22": "red",
          "2025-12-23": "red",
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
      status: "In Progress",
      progress: 98,
      tasks: [
        { task: "Timeout API", pic: "Deja", progress: 100 },
        { task: "Update AMS", pic: "Iqbal", progress: 95 },
      ],
      timeline: {
        start: "2025-12-12",
        end: "2025-12-23",
        schedule: {
          "2025-12-12": "red",
          "2025-12-13": "red",
          "2025-12-14": "red",
          "2025-12-15": "red",
          "2025-12-16": "red",
          "2025-12-17": "red",
          "2025-12-18": "red",
          "2025-12-19": "red",
          "2025-12-20": "red",
          "2025-12-21": "red",
          "2025-12-22": "red",
          "2025-12-23": "red",
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
        start: "2025-12-12",
        end: "2025-12-23",
        schedule: {
          "2025-12-12": "red",
          "2025-12-13": "red",
          "2025-12-14": "red",
          "2025-12-15": "red",
          "2025-12-16": "red",
          "2025-12-17": "red",
          "2025-12-18": "red",
          "2025-12-19": "red",
          "2025-12-20": "red",
          "2025-12-21": "red",
          "2025-12-22": "red",
          "2025-12-23": "red",
        },
      },
      challenges: ["Final optimization and testing"],
    },
    {
      name: "Indocement : Autogate grobogan",
      status: "In Progress",
      progress: 90,
      tasks: [
        { task: "IOT", pic: "David", progress: 90 },
      ],
      timeline: {
        start: "2025-12-12",
        end: "2025-12-23",
        schedule: {
          "2025-12-12": "red",
          "2025-12-13": "red",
          "2025-12-14": "red",
          "2025-12-15": "green",
          "2025-12-16": "red",
          "2025-12-17": "red",
          "2025-12-18": "red",
          "2025-12-19": "red",
          "2025-12-20": "red",
          "2025-12-21": "red",
          "2025-12-22": "red",
          "2025-12-23": "red",
        },
      },
      challenges: ["IOT integration nearing completion"],
    },
    {
      name: "Patimban : Autogate",
      status: "In Progress",
      progress: 46,
      tasks: [
        { task: "Gateway API", pic: "Rizky/Deja", progress: 100 },
        { task: "Monitoring", pic: "Iqbal/Rizky", progress: 100 },
        { task: "AMS", pic: "Iqbal/Rizky", progress: 50 },
        { task: "IOT", pic: "David/Rizky", progress: 60 },
        { task: "Display Kiosk", pic: "David/Rizky", progress: 90 },
        { task: "Logging System", pic: "Rizky", progress: 80 },
        { task: "Docs", pic: "Rizky/David", progress: 50 },
        { task: "SIT", pic: "Rizky/Deja", progress: 80 },
      ],
      timeline: {
        start: "2025-12-12",
        end: "2025-12-23",
        schedule: {
          "2025-12-12": "red",
          "2025-12-13": "red",
          "2025-12-14": "red",
          "2025-12-15": "green",
          "2025-12-16": "yellow",
          "2025-12-17": "yellow",
          "2025-12-18": "yellow",
          "2025-12-19": "yellow",
          "2025-12-20": "yellow",
          "2025-12-21": "yellow",
          "2025-12-22": "red",
          "2025-12-23": "red",
        },
      },
      challenges: ["Multiple components in active development"],
    },
    {
      name: "Highscope",
      status: "Planning",
      progress: 0,
      tasks: [
        { task: "Documentation Analysis", pic: "Rizky", progress: 0 },
        { task: "Redis Optimization", pic: "Rizky", progress: 0 },
        { task: "Service Query Refactoring", pic: "Rizky", progress: 0 },
      ],
      timeline: {
        start: "2025-12-16",
        end: "2025-12-23",
        schedule: {
          "2025-12-16": "red",
          "2025-12-17": "red",
          "2025-12-18": "red",
          "2025-12-19": "red",
          "2025-12-20": "red",
          "2025-12-21": "red",
          "2025-12-22": "red",
          "2025-12-23": "red",
        },
      },
      challenges: ["Need to analyze current codebase structure", "Identify optimization opportunities"],
    },
  ],
  unfinishedProjects: [
    {
      name: "Kalibaru CA Autogate",
      status: "In Progress",
      owner: "Rizky",
      progress: 74,
      summary: "Key integrations tracked while infrastructure migrations continue.",
      lastUpdated: "2025-12-09",
      tasks: [
        {
          title: "Cloud Migration",
          assignee: "David",
          progressNote: "50% complete, ongoing deployment.",
          blocker: "Cloud app server deployment in progress.",
          status: "In Progress"
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
        {
          title: "Monitoring scheduler",
          assignee: "Rizky",
          progressNote: "50% complete, ongoing development.",
          blocker: "None",
          status: "In Progress"
        },
      ],
    },
    {
      name: "Kemenag SIPPRO",
      status: "In Progress",
      owner: "Rizky/Iqbal",
      progress: 74,
      summary: "Portal rollout needs alignment with stakeholder units.",
      lastUpdated: "2025-12-09",
      tasks: [
        {
          title: "Lembaga Baru Integration",
          assignee: "Rizky/Iqbal/David",
          progressNote: "40% complete, ongoing integration work.",
          blocker: "None",
          status: "In Progress"
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
      lastUpdated: "2025-12-09",
      tasks: [
        {
          title: "T3 Book",
          assignee: "Deja",
          progressNote: "Not yet started.",
          blocker: "Waiting for service availability.",
          status: "Not Started"
        },
        {
          title: "Doc",
          assignee: "David/Rizky",
          progressNote: "80% complete.",
          blocker: "None",
          status: "In Progress"
        },
      ],
    },
    {
      name: "Patimban : Autogate",
      status: "In Progress",
      owner: "Rizky/Deja",
      progress: 46,
      summary: "Project accelerating with multiple components in active development.",
      lastUpdated: "2025-12-09",
      tasks: [
        {
          title: "Gateway API",
          assignee: "Rizky/Deja",
          progressNote: "90% complete, nearing completion.",
          blocker: "None",
          status: "In Progress"
        },
        {
          title: "Monitoring",
          assignee: "Iqbal/Rizky",
          progressNote: "90% complete.",
          blocker: "None",
          status: "In Progress"
        },
        {
          title: "AMS",
          assignee: "Iqbal/Rizky",
          progressNote: "50% complete.",
          blocker: "None",
          status: "In Progress"
        },
        {
          title: "IOT",
          assignee: "David/Rizky",
          progressNote: "50% complete.",
          blocker: "None",
          status: "In Progress"
        },
        {
          title: "Display Kiosk",
          assignee: "David/Rizky",
          progressNote: "90% complete.",
          blocker: "None",
          status: "In Progress"
        },
        {
          title: "Logging System",
          assignee: "Rizky",
          progressNote: "80% complete.",
          blocker: "None",
          status: "In Progress"
        },
        {
          title: "SIT",
          assignee: "Rizky/Deja",
          progressNote: "30% complete.",
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
    {
      name: "TO3 Xray",
      status: "In Progress",
      owner: "David",
      progress: 93,
      summary: "Nearly complete, final documentation pending.",
      lastUpdated: "2025-12-09",
      tasks: [
        {
          title: "Doc",
          assignee: "David",
          progressNote: "80% complete.",
          blocker: "None",
          status: "In Progress"
        },
      ],
    },
    {
      name: "Highscope",
      status: "Planning",
      owner: "Rizky",
      progress: 0,
      summary: "Refactoring project focusing on documentation, Redis optimization, and service architecture improvements.",
      lastUpdated: "2025-12-16",
      tasks: [
        {
          title: "Documentation Analysis & Improvement",
          assignee: "Rizky",
          progressNote: "Planning phase - identify all undocumented components.",
          blocker: "Awaiting project kickoff approval.",
          status: "Not Started"
        },
        {
          title: "Redis Optimization",
          assignee: "Rizky",
          progressNote: "Planning phase - analyze current Redis usage patterns.",
          blocker: "Need to complete documentation analysis first.",
          status: "Not Started"
        },
        {
          title: "Service Query Refactoring",
          assignee: "Rizky",
          progressNote: "Planning phase - identify external service calls that can be internalized.",
          blocker: "Dependent on Redis optimization completion.",
          status: "Not Started"
        },
      ],
    },
  ],
  monthlyPlan: [
    {
      title: "December 2025 Targets",
      description: "Focus on completing remaining projects and preparing for year-end closeout.",
      items: [
        "Complete JICT OCR final validations and project closeout.",
        "Maintain KOJA OCR production stability.",
        "Complete TSJ Autogate UAT and deployment.",
        "Progress Kalibaru CA Autogate cloud migration and monitoring scheduler to 80%+.",
        "Complete Kemenag SIPPRO Lembaga Baru integration and begin DoubleDegree requirements.",
        "Complete TO3 Xray documentation.",
        "Complete TO3/MAL Joingate documentation and T3 Book component.",
        "Finalize IKT project.",
        "Complete Indocement Truckscale project.",
        "Complete Indocement Autogate grobogan IOT integration.",
        "Progress Patimban Autogate components to 70%+ completion.",
        "Begin Highscope refactoring project analysis and planning.",
      ],
    },
    {
      title: "Highscope Refactoring Initiative",
      description: "Strategic refactoring to improve code maintainability, performance, and architecture.",
      items: [
        "Documentation Enhancement",
        "Redis Performance Optimization",
        "Service Architecture Internalization",
      ],
    },
  ],
  weeklyPlan: [
    {
      week: "Week 1 (Dec 2-8)",
      status: "Completed",
      tasks: [
        "JICT OCR: Complete final tasks and prepare for closeout.",
        "KOJA OCR: Production monitoring and support.",
        "TSJ Autogate: Execute UAT.",
        "Kalibaru CA: Progress Cloud Migration and Monitoring scheduler.",
        "Kemenag SIPPRO: Work on Lembaga Baru integration.",
        "TO3/MAL: Continue development and documentation.",
        "TO3 Xray: Complete documentation.",
        "IKT: Finalize remaining tasks.",
        "Indocement: Complete Truckscale and progress Grobogan IOT.",
        "Patimban: Accelerate development on all components.",
      ],
    },
    {
      week: "Week 2 (Dec 9-15)",
      status: "Completed",
      tasks: [
        "JICT OCR: Final validation and project closure.",
        "KOJA OCR: Maintain production stability.",
        "TSJ Autogate: Complete UAT and deployment.",
        "Kalibaru CA: Continue Cloud Migration and complete Monitoring scheduler.",
        "Kemenag SIPPRO: Complete Lembaga Baru integration.",
        "TO3/MAL: Complete T3 Book and finalize documentation.",
        "TO3 Xray: Complete documentation and handover.",
        "IKT: Production support and monitoring.",
        "Indocement: Project completion and handover.",
        "Patimban: Progress Gateway API, Monitoring, Display Kiosk, and Logging System to completion.",
      ],
    },
    {
      week: "Week 3 (Dec 16-22)",
      status: "Current",
      tasks: [
        "Complete all pending documentation tasks.",
        "Conduct final testing for all in-progress projects.",
        "Prepare year-end project reports.",
        "Plan for January 2026 projects and requirements.",
        "Highscope: Begin codebase analysis and documentation assessment.",
      ],
    },
  ],
  highscopeRefactor: [
    {
      title: "Documentation Enhancement",
      description: "Comprehensive documentation overhaul to improve maintainability and onboarding efficiency",
      items: [
        "Analyze existing codebase for undocumented modules and components",
        "Create API documentation for all service endpoints",
        "Document business logic flows and data transformations",
        "Establish code comment standards and update legacy code",
        "Create architectural decision records (ADRs)",
        "Generate up-to-date sequence and component diagrams",
      ],
    },
    {
      title: "Redis Optimization Strategy",
      description: "Performance enhancement through intelligent caching and data structure optimization",
      items: [
        "Audit current Redis usage patterns and identify bottlenecks",
        "Implement proper Redis key expiration policies",
        "Optimize Redis data structures for faster access",
        "Introduce Redis clustering for high availability",
        "Cache frequently accessed database queries",
        "Monitor Redis memory usage and implement cleanup strategies",
        "Create Redis connection pooling for better resource management",
      ],
    },
    {
      title: "Service Architecture Refactoring",
      description: "Internalize external dependencies and improve service communication patterns",
      items: [
        "Identify queries making external service calls unnecessarily",
        "Move data retrieval logic inside services that need it",
        "Implement repository pattern for data access abstraction",
        "Create service-to-service communication protocols",
        "Eliminate circular dependencies between services",
        "Implement proper error handling and retry mechanisms",
        "Add service health checks and monitoring endpoints",
      ],
    },
    {
      title: "Implementation Roadmap",
      description: "Phased approach to minimize disruption while maximizing improvements",
      items: [
        "Phase 1: Documentation audit and baseline establishment",
        "Phase 2: Redis optimization implementation",
        "Phase 3: Service refactoring with proper testing",
        "Phase 4: Performance testing and validation",
        "Phase 5: Deployment with rollback strategy",
      ],
    },
  ],
};