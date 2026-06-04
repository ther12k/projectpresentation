export const projects = {
  projectStatus: [
    {
      name: "JICT OCR",
      status: "In Progress",
      progress: 93,
      tasks: [
        { task: "Flexi Tank/EqSp History bug", pic: "Rizky", progress: 100 },
        { task: "Hico/P2 check out", pic: "Rizky/Isra", progress: 100 },
        { task: "Change Autogate DB password", pic: "Isra", progress: 100 },
        { task: "CMS print update", pic: "Rizky/Isra", progress: 90 },
        { task: "Damage Update/Scheduler", pic: "Rizky/Isra", progress: 80 },
        { task: "OCR Image on CM", pic: "Rizky/Isra", progress: 95 },
      ],
      timeline: {
        start: "2025-09-27",
        end: "2025-10-05",
        schedule: {
          "2025-09-27": "red",
          "2025-09-28": "red",
          "2025-09-29": "yellow",
          "2025-09-30": "green",
          "2025-10-01": "white",
          "2025-10-02": "white",
          "2025-10-03": "white",
          "2025-10-04": "red",
          "2025-10-05": "red",
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
      ],
      timeline: {
        start: "2025-09-27",
        end: "2025-10-05",
        schedule: {
          "2025-09-27": "red",
          "2025-09-28": "red",
          "2025-09-29": "white",
          "2025-09-30": "white",
          "2025-10-01": "white",
          "2025-10-02": "white",
          "2025-10-03": "white",
          "2025-10-04": "red",
          "2025-10-05": "red",
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
        start: "2025-09-27",
        end: "2025-10-05",
        schedule: {
          "2025-09-27": "red",
          "2025-09-28": "red",
          "2025-09-29": "white",
          "2025-09-30": "white",
          "2025-10-01": "white",
          "2025-10-02": "white",
          "2025-10-03": "white",
          "2025-10-04": "red",
          "2025-10-05": "red",
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
      progress: 71,
      tasks: [
        { task: "AMS IN on terminal", pic: "Rizky", progress: 100 },
        { task: "Behandle new Integration", pic: "Rizky", progress: 0 },
        { task: "Container Info for BKI", pic: "Rizky", progress: 90 },
        { task: "Open portal manual time record", pic: "Rizky", progress: 90 },
        { task: "Using domain for url integration to NPCT", pic: "Rizky", progress: 100 },
        { task: "Booking Message", pic: "Rizky", progress: 100 },
        { task: "Manual Input Enhance", pic: "Rizky", progress: 95 },
        { task: "Cloud Migration", pic: "David", progress: 10 },
        { task: "CP emergency plan", pic: "Rizky", progress: 80 },
        { task: "Manual input emergency plan", pic: "Rizky/Iqbal", progress: 0 },
      ],
      timeline: {
        start: "2025-09-27",
        end: "2025-10-05",
        schedule: {
          "2025-09-27": "red",
          "2025-09-28": "red",
          "2025-09-29": "yellow",
          "2025-09-30": "yellow",
          "2025-10-01": "green",
          "2025-10-02": "yellow",
          "2025-10-03": "yellow",
          "2025-10-04": "red",
          "2025-10-05": "red",
        },
      },
      challenges: ["Multiple new integration requirements added", "Manual Input Enhancement in progress", "Cloud Migration initiated", "Emergency plan implementation"],
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
      progress: 79,
      tasks: [
        { task: "Validator : Portal for validate", pic: "Rizky/Iqbal", progress: 80 },
        { task: "Biro hukum : Portal for biro hukum", pic: "Rizky/Iqbal", progress: 70 },
        { task: "Lembaga Baru Integration", pic: "Rizky/Iqbal/David", progress: 40 },
        { task: "Migrasi Server", pic: "Rizky/David", progress: 95 },
        { task: "Test Server baru", pic: "David", progress: 100 },
        { task: "Bug SSO", pic: "Rizky/David", progress: 100 },
        { task: "Perapian data", pic: "David", progress: 90 },
        { task: "RFC", pic: "Iqbal", progress: 80 },
      ],
      timeline: {
        start: "2025-09-27",
        end: "2025-10-05",
        schedule: {
          "2025-09-27": "red",
          "2025-09-28": "red",
          "2025-09-29": "white",
          "2025-09-30": "white",
          "2025-10-01": "white",
          "2025-10-02": "white",
          "2025-10-03": "white",
          "2025-10-04": "red",
          "2025-10-05": "red",
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
      progress: 90,
      tasks: [
        { task: "API Integration", pic: "Rizky", progress: 100 },
        { task: "API Test", pic: "David", progress: 100 },
        { task: "AMS Web - Xray Implementation", pic: "Rizky/Iqbal/Deja", progress: 100 },
        { task: "Check Xray in Gateway", pic: "Deja", progress: 100 },
        { task: "Doc no data, search", pic: "David/Deja", progress: 100 },
        { task: "Doc", pic: "David", progress: 80 },
      ],
      timeline: {
        start: "2025-09-27",
        end: "2025-10-05",
        schedule: {
          "2025-09-27": "red",
          "2025-09-28": "red",
          "2025-09-29": "white",
          "2025-09-30": "white",
          "2025-10-01": "white",
          "2025-10-02": "white",
          "2025-10-03": "white",
          "2025-10-04": "red",
          "2025-10-05": "red",
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
        { task: "Tosnus", pic: "Deja", progress: 0 },
      ],
      timeline: {
        start: "2025-09-27",
        end: "2025-10-05",
        schedule: {
          "2025-09-27": "red",
          "2025-09-28": "red",
          "2025-09-29": "white",
          "2025-09-30": "white",
          "2025-10-01": "white",
          "2025-10-02": "white",
          "2025-10-03": "white",
          "2025-10-04": "red",
          "2025-10-05": "red",
        },
      },
      challenges: ["Final testing and documentation completion", "T3 Book and Tosnus components pending"],
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
      progress: 100,
      tasks: [
        { task: "Timeout API", pic: "Deja", progress: 100 },
      ],
      timeline: {
        start: "2025-09-27",
        end: "2025-10-05",
        schedule: {
          "2025-09-27": "red",
          "2025-09-28": "red",
          "2025-09-29": "white",
          "2025-09-30": "white",
          "2025-10-01": "white",
          "2025-10-02": "white",
          "2025-10-03": "white",
          "2025-10-04": "red",
          "2025-10-05": "red",
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
      progress: 62,
      tasks: [
        { task: "API", pic: "Deja", progress: 90 },
        { task: "Monitoring", pic: "Iqbal", progress: 95 },
        { task: "Gate App", pic: "Deja", progress: 100 },
      ],
      timeline: {
        start: "2025-09-27",
        end: "2025-10-05",
        schedule: {
          "2025-09-27": "red",
          "2025-09-28": "red",
          "2025-09-29": "yellow",
          "2025-09-30": "green",
          "2025-10-01": "white",
          "2025-10-02": "white",
          "2025-10-03": "white",
          "2025-10-04": "red",
          "2025-10-05": "red",
        },
      },
      challenges: ["Project nearing completion with final API and monitoring tasks"],
    },
  ],
  monthlyPlan: [
    {
      title: "September-October 2025 Targets - Updated",
      description: "Focus on completing remaining tasks and transitioning into October deliverables.",
      items: [
        "JICT OCR: Complete final CMS print update (90%) and Damage Update/Scheduler (80%) tasks.",
        "KOJA OCR: Address new Min max weight validation task (30% progress).",
        "TSJ Autogate: Finalize UAT process (90% complete) and prepare for deployment.",
        "Kalibaru CA: Complete emergency plan implementation and continue Manual Input Enhancement.",
        "Kemenag SIPPRO: Complete server migration and RFC process, advance Lembaga Baru integration.",
        "TO3/MAL Joingate: Address pending T3 Book and Tosnus components (0% progress).",
        "TO3 Xray: Complete documentation task (80% progress).",
        "IKT: Maintain production stability post-deployment.",
        "Indocement Truckscale: Complete remaining API tasks (90%) and finalize monitoring (95%).",
      ],
    },
  ],
  weeklyPlan: [
    {
      week: "Week 4 Sep (Sep 23-29)",
      status: "Completed",
      tasks: [
        "JICT OCR: Continue CMS and Damage Update development.",
        "KOJA OCR: Initiate Min max weight validation implementation.",
        "TSJ Autogate: Continue UAT execution.",
        "Kalibaru CA: Progress on emergency plans and Manual Input Enhancement.",
        "Kemenag SIPPRO: Server migration and RFC advancement.",
        "TO3/MAL: MAL Booking refinement and documentation.",
        "TO3 Xray: Documentation progress.",
        "IKT: Production monitoring.",
        "Indocement: Gate App completion and monitoring enhancement.",
      ],
    },
    {
      week: "Week 1 Oct (Sep 30 - Oct 6)",
      status: "Current",
      tasks: [
        "JICT OCR: Target completion of CMS print update and advance Damage Update/Scheduler.",
        "KOJA OCR: Progress Min max weight validation to 50%.",
        "TSJ Autogate: Complete UAT and prepare deployment documentation.",
        "Kalibaru CA: Complete CP emergency plan and advance Manual Input emergency plan.",
        "Kemenag SIPPRO: Finalize server migration and advance integration testing.",
        "TO3/MAL: Initiate T3 Book and Tosnus development.",
        "TO3 Xray: Complete all documentation.",
        "IKT: Production support and optimization.",
        "Indocement: Complete API development and finalize monitoring system.",
      ],
    },
    {
      week: "Week 2 Oct (Oct 7-13)",
      status: "Planned",
      tasks: [
        "Complete sprint retrospectives for all projects.",
        "Production deployments for ready components.",
        "Performance monitoring and optimization across all systems.",
        "Knowledge transfer sessions for completed projects.",
        "Planning for next sprint objectives.",
        "Address any critical bugs or issues from recent deployments.",
      ],
    },
  ],
};