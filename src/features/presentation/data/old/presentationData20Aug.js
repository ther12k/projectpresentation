export const projects = {
  projectStatus: [
    {
      name: "JICT OCR",
      status: "In Progress",
      progress: 87,
      tasks: [
        { task: "Flexi Tank/EqSp History bug", pic: "Rizky", progress: 100 },
        { task: "Hico/P2 check out", pic: "Rizky/Isra", progress: 100 },
        { task: "Change Autogate DB password", pic: "Isra", progress: 100 },
        { task: "CMS print update", pic: "Rizky/Isra", progress: 50 },
      ],
      timeline: {
        start: "2025-08-16",
        end: "2025-08-23",
        schedule: {
          "2025-08-16": "red",
          "2025-08-17": "red",
          "2025-08-18": "red",
          "2025-08-19": "yellow",
          "2025-08-20": "yellow",
          "2025-08-21": "green",
          "2025-08-22": "green",
          "2025-08-23": "green",
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
      status: "In Progress",
      progress: 56,
      tasks: [
        { task: "Check Xray di OUT/Import", pic: "Rizky", progress: 0 },
        { task: "DG validation", pic: "Rizky", progress: 80 },
        { task: "Exit Error Info using OCR Dashboard", pic: "Rizky", progress: 0 },
        { task: "Change Autogate DB password", pic: "Isra", progress: 100 },
        { task: "Booking Message", pic: "Rizky/Isra", progress: 100 },
      ],
      timeline: {
        start: "2025-08-16",
        end: "2025-08-23",
        schedule: {
          "2025-08-16": "red",
          "2025-08-17": "red",
          "2025-08-18": "red",
          "2025-08-19": "red",
          "2025-08-20": "red",
          "2025-08-21": "red",
          "2025-08-22": "red",
          "2025-08-23": "red",
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
        start: "2025-08-16",
        end: "2025-08-23",
        schedule: {
          "2025-08-16": "red",
          "2025-08-17": "red",
          "2025-08-18": "red",
          "2025-08-19": "red",
          "2025-08-20": "red",
          "2025-08-21": "red",
          "2025-08-22": "red",
          "2025-08-23": "red",
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
      progress: 63,
      tasks: [
        { task: "AMS IN on terminal", pic: "Rizky", progress: 100 },
        { task: "Behandle new Integration", pic: "Rizky", progress: 0 },
        { task: "Container Info for BKI", pic: "Rizky", progress: 50 },
        { task: "Open portal manual time record", pic: "Rizky", progress: 90 },
        { task: "Using domain for url integration to NPCT", pic: "Rizky", progress: 100 },
        { task: "Booking Message", pic: "Rizky", progress: 100 },
        { task: "Manual Input Enhance", pic: "Rizky", progress: 40 },
      ],
      timeline: {
        start: "2025-08-16",
        end: "2025-08-23",
        schedule: {
          "2025-08-16": "red",
          "2025-08-17": "red",
          "2025-08-18": "red",
          "2025-08-19": "yellow",
          "2025-08-20": "yellow",
          "2025-08-21": "yellow",
          "2025-08-22": "green",
          "2025-08-23": "green",
        },
      },
      challenges: ["Multiple new integration requirements added", "Manual Input Enhancement in progress"],
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
      progress: 81,
      tasks: [
        { task: "Validator : Portal for validate", pic: "Rizky/Iqbal", progress: 80 },
        { task: "Biro hukum : Portal for biro hukum", pic: "Rizky/Iqbal", progress: 70 },
        { task: "Lembaga Baru Integration", pic: "Rizky/Iqbal/David", progress: 40 },
        { task: "Migrasi Server", pic: "Rizky/David", progress: 95 },
        { task: "Test Server baru", pic: "David", progress: 100 },
        { task: "Bug SSO", pic: "Rizky/David", progress: 100 },
        { task: "Perapian data", pic: "David", progress: 100 },
      ],
      timeline: {
        start: "2025-08-16",
        end: "2025-08-23",
        schedule: {
          "2025-08-16": "red",
          "2025-08-17": "red",
          "2025-08-18": "red",
          "2025-08-19": "yellow",
          "2025-08-20": "yellow",
          "2025-08-21": "yellow",
          "2025-08-22": "green",
          "2025-08-23": "green",
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
      status: "Completed",
      progress: 100,
      tasks: [
        { task: "API Integration", pic: "Rizky", progress: 100 },
        { task: "API Test", pic: "David", progress: 100 },
        { task: "AMS Web - Xray Implementation", pic: "Rizky/Iqbal/Deja", progress: 100 },
        { task: "Check Xray in Gateway", pic: "Deja", progress: 100 },
        { task: "Doc no data, search", pic: "David/Deja", progress: 0 },
      ],
      timeline: {
        start: "2025-08-16",
        end: "2025-08-23",
        schedule: {
          "2025-08-16": "red",
          "2025-08-17": "red",
          "2025-08-18": "red",
          "2025-08-19": "red",
          "2025-08-20": "red",
          "2025-08-21": "red",
          "2025-08-22": "red",
          "2025-08-23": "red",
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
      progress: 89,
      tasks: [
        { task: "API", pic: "Deja", progress: 100 },
        { task: "CP Gate IN", pic: "Deja", progress: 100 },
        { task: "MAL CP Gate IN/Reader", pic: "Deja", progress: 100 },
        { task: "Test & Bugsfixing", pic: "Deja", progress: 95 },
        { task: "Doc", pic: "David/Rizky", progress: 90 },
        { task: "MAL Booking", pic: "Deja", progress: 95 },
        { task: "TSJ/T3/MAL flow or logic", pic: "Deja", progress: 80 },
      ],
      timeline: {
        start: "2025-08-16",
        end: "2025-08-23",
        schedule: {
          "2025-08-16": "red",
          "2025-08-17": "red",
          "2025-08-18": "red",
          "2025-08-19": "red",
          "2025-08-20": "red",
          "2025-08-21": "red",
          "2025-08-22": "red",
          "2025-08-23": "red",
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
      progress: 80,
      tasks: [
        { task: "Timeout API", pic: "Deja", progress: 80 },
      ],
      timeline: {
        start: "2025-08-16",
        end: "2025-08-23",
        schedule: {
          "2025-08-16": "yellow",
          "2025-08-17": "yellow",
          "2025-08-18": "yellow",
          "2025-08-19": "yellow",
          "2025-08-20": "yellow",
          "2025-08-21": "green",
          "2025-08-22": "green",
          "2025-08-23": "green",
        },
      },
      challenges: ["API optimization and performance testing required"],
      comments: [
        {
          date: "2025-04-16",
          author: "Rizky Zulkarnaen",
          message: "belum deploy"
        }
      ],
    },
  ],
  monthlyPlan: [
    {
      title: "August 2025 Targets - Updated",
      description: "Focus on completing remaining tasks and addressing new requirements during post-Eid period.",
      items: [
        "Complete JICT OCR final monitoring and documentation.",
        "Implement remaining Xray integration for KOJA OCR and resolve exit error handling.",
        "Finalize TSJ Autogate UAT process and deployment preparation.",
        "Address new integration requirements for Kalibaru CA Autogate including Manual Input Enhancement.",
        "Complete Kemenag SIPPRO server migration testing and Lembaga Baru integration.",
        "Complete final testing for TO3/MAL Joingate and finalize all documentation.",
        "Maintain TO3 Xray system stability and complete pending documentation.",
        "Begin IKT Timeout API development and initial implementation.",
      ],
    },
  ],
  weeklyPlan: [
    {
      week: "Week 1 (Aug 6-12)",
      status: "Current",
      tasks: [
        "JICT OCR: Complete final system validation and prepare for closure.",
        "KOJA OCR: Focus on Xray integration and DG validation completion.",
        "TSJ Autogate: Prepare comprehensive UAT execution plan.",
        "Kalibaru CA: Work on Container Info completion and Manual Input Enhancement planning.",
        "Kemenag SIPPRO: Complete server migration and begin intensive testing.",
        "TO3/MAL: Continue testing and bug resolution, focus on green status achievements.",
        "TO3 Xray: Ensure continued system stability and address documentation gaps.",
        "IKT: Begin initial analysis and design for Timeout API implementation.",
      ],
    },
    {
      week: "Week 2 (Aug 13-19)",
      status: "Planned",
      tasks: [
        "JICT OCR: Final closure and handover documentation.",
        "KOJA OCR: Complete remaining Xray tasks and exit error implementation.",
        "TSJ Autogate: Execute UAT and resolve any identified issues.",
        "Kalibaru CA: Complete all pending integrations and enhancements.",
        "Kemenag SIPPRO: Finalize Lembaga Baru integration and complete testing.",
        "TO3/MAL: Push for production readiness and complete documentation.",
        "TO3 Xray: Complete all pending documentation tasks.",
        "IKT: Develop and test Timeout API functionality.",
      ],
    },
    {
      week: "Week 3 (Aug 20-26)",
      status: "Future",
      tasks: [
        "Project closure activities for completed projects.",
        "Production deployment for ready projects.",
        "Performance monitoring and optimization.",
        "Knowledge transfer and documentation finalization.",
        "Planning for September project roadmap.",
        "Team retrospective and process improvement discussions.",
      ],
    },
  ],
};