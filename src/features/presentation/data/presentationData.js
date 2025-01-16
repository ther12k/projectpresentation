export const projects = {
    projectStatus: [
      {
        name: 'JICT OCR',
        status: 'On Track',
        progress: 100,
        tasks: [
          { task: 'Update validation min max size on dashboard', pic: 'Rizky', progress: 100 },
          { task: 'Upload/View image using webserver', pic: 'Isra', progress: 100 },
          { task: 'Remediasi JAGS Server', pic: 'Isra', progress: 100 },
          { task: 'Update CP for payment slip', pic: 'Rizky', progress: 100 }
        ],
        challenges: []
      },
      {
        name: 'KOJA OCR',
        status: 'In Progress',
        progress: 80,
        tasks: [
          { task: 'OCR UAT', pic: 'Isra', progress: 80 }
        ],
        challenges: []
      },
      {
        name: 'TJS Autogate',
        status: 'In Progress',
        progress: 95,
        tasks: [
          { task: 'Autogate', pic: 'Deja', progress: 95 },
          { task: 'AMS', pic: 'Deja', progress: 100 },
          { task: 'SIT', pic: 'Deja/David', progress: 90 },
          { task: 'UAT', pic: 'Deja/David', progress: 0 }
        ],
        challenges: ['untuk QR transaksi berubah, hanya validasi out']
      },
      {
        name: 'Kalibaru CA Autogate',
        status: 'In Progress',
        progress: 40,
        tasks: [
          { task: 'Mobile Web App (Autogate)', pic: 'Rizky/Iqbal', progress: 10 },
          { task: 'Payment/Emoney', pic: 'Rizky', progress: 100 },
          { task: 'Settlement (Automatic)', pic: 'Rizky', progress: 50 },
          { task: 'Monitoring Transaction', pic: 'Rizky', progress: 0 }
        ],
        challenges: []
      },
      {
        name: 'Indocement Autogate',
        status: 'In Progress',
        progress: 65,
        tasks: [
          { task: 'Autogate New UAT', pic: 'Rizky/David', progress: 80 },
          { task: 'Autogate New - Bug fix rtid double', pic: 'Rizky', progress: 50 }
        ],
        challenges: []
      },
      {
        name: 'Palembang Autogate',
        status: 'Planned',
        progress: 0,
        tasks: [
          { task: 'Kolom Full/Empty di container', pic: 'Deja', progress: 0 }
        ],
        challenges: []
      },
      {
        name: 'Pontianak Autogate',
        status: 'In Progress',
        progress: 80,
        tasks: [
          { task: 'Autogate New UAT', pic: 'David/Deja', progress: 80 },
          { task: 'Flow Autohold/P2 Check', pic: '', progress: 0 }
        ],
        challenges: []
      },
      {
        name: 'Kemenag SIPPRO',
        status: 'In Progress',
        progress: 53,
        tasks: [
          { task: 'Validator - Validator Portal ke validate', pic: 'Rizky/Iqbal', progress: 80 },
          { task: 'Biro hukum - Portal ke biro hukum', pic: 'Rizky/Iqbal', progress: 70 },
          { task: 'LMIS Integration', pic: 'Rizky/Iqbal', progress: 10 }
        ],
        challenges: []
      },
      {
        name: 'IKT International',
        status: 'In Progress',
        progress: 87,
        tasks: [
          { task: 'Autogate API Gateway', pic: 'Rizky/Deja', progress: 100 },
          { task: 'Dashboard API', pic: 'Rizky', progress: 80 },
          { task: 'Dashboard Web', pic: 'Iqbal', progress: 80 }
        ],
        challenges: []
      },
      {
        name: 'TO3 : Xray',
        status: 'Resource Issue',
        progress: 0,
        tasks: [
          { task: 'API Integration', pic: '', progress: 0 },
          { task: 'AMS Web - Xray Implementation', pic: '', progress: 0 }
        ],
        challenges: ['Resource kurang']
      },
      {
        name: 'Recruit',
        status: 'In Progress',
        progress: 50,
        tasks: [
          { task: 'Interview awal', pic: 'Rizky/Deni', progress: 100 },
          { task: 'Soal', pic: '', progress: 0 }
        ],
        challenges: []
      }
    ],
    monthlyPlan: [
      {
        title: 'January 2025 Targets',
        description: 'Complete ongoing UATs and system optimizations',
        items: [
          'Complete KOJA OCR UAT',
          'Finalize TJS Autogate implementation',
          'Complete Kalibaru CA Autogate settlement system',
          'Deploy Kemenag SIPPRO validator updates',
          'Launch New IKT International dashboard'
        ]
      }
    ],
    weeklyPlan: [
      {
        week: 'Week 3 (Jan 15-19)',
        status: 'In Progress',
        tasks: [
          'KOJA OCR UAT execution',
          'TJS Autogate system optimization',
          'Kalibaru CA Autogate settlement testing',
          'Kemenag SIPPRO validation implementation',
          'IKT International dashboard development'
        ]
      },
      {
        week: 'Week 4 (Jan 22-26)',
        status: 'Planned',
        tasks: [
          'Complete pending UATs',
          'System optimization and bug fixes',
        ]
      }
    ]
  };