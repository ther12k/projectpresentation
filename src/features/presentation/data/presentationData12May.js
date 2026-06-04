export const projects = {
  projectStatus: [
    {
      name: 'JICT OCR',
      status: 'In Progress',
      progress: (100 + 100 + 100 + 90 + 100 + 95 + 100 + 100 + 0) / 9,
      tasks: [
        { task: 'Flexi Tank/EqSp History bug', pic: 'Rizky', progress: 100 },
        { task: 'Hico/P2 check out', pic: 'Rizky/Isra', progress: 100 },
        { task: 'Change Autogate DB password', pic: 'Isra', progress: 100 },
        { task: 'CMS print update', pic: 'Rizky/Isra', progress: 90 },
        { task: 'Damage Update/Scheduler', pic: 'Rizky/Isra', progress: 100 },
        { task: 'OCR Image on CM', pic: 'Rizky/Isra', progress: 95 },
        { task: 'Manual Insert migration', pic: 'Rizky/Isra', progress: 100 },
        { task: 'Hico message', pic: 'Rizky/Isra', progress: 100 },
        { task: 'DG validation', pic: 'Rizky/Isra', progress: 0 },
      ],
      timeline: {
        start: '2026-05-04',
        end: '2026-05-13',
        schedule: {
          "2026-05-09": "red",
          "2026-05-10": "red",
          "2026-05-13": "red",
        }
      },
      challenges: []
    },
    {
      name: 'KOJA OCR',
      status: 'In Progress',
      progress: (100 + 100 + 100 + 100) / 4,
      tasks: [
        { task: 'DG validation', pic: 'Rizky', progress: 100 },
        { task: 'Change Autogate DB password', pic: 'Isra', progress: 100 },
        { task: 'Booking Message', pic: 'Rizky/Isra', progress: 100 },
        { task: 'Min max weight validation', pic: 'Rizky/Isra', progress: 100 },
      ],
      timeline: {
        start: '2026-05-04',
        end: '2026-05-13',
        schedule: {
          "2026-05-09": "red",
          "2026-05-10": "red",
          "2026-05-13": "red",
        }
      },
      challenges: []
    },
    {
      name: 'TSJ Autogate',
      status: 'In Progress',
      progress: (100 + 90) / 2,
      tasks: [
        { task: 'Autogate', pic: 'Deja', progress: 100 },
        { task: 'UAT', pic: 'Deja/David', progress: 90 },
      ],
      timeline: {
        start: '2026-05-04',
        end: '2026-05-13',
        schedule: {
          "2026-05-09": "red",
          "2026-05-10": "red",
          "2026-05-13": "red",
        }
      },
      challenges: []
    },
    {
      name: 'Kalibaru CA Autogate',
      status: 'In Progress',
      progress: (100 + 0 + 100 + 90 + 100 + 100 + 95 + 80 + 100 + 100 + 100 + 100 + 100 + 100 + 80 + 0 + 0) / 17,
      tasks: [
        { task: 'AMS IN on terminal', pic: 'Rizky', progress: 100 },
        { task: 'Behandle new Integration', pic: 'Rizky', progress: 0 },
        { task: 'Container Info for BKI', pic: 'Rizky', progress: 100 },
        { task: 'Open portal manual time record', pic: 'Rizky', progress: 90 },
        { task: 'Using domain for url integration to NPCT', pic: 'Rizky', progress: 100 },
        { task: 'Booking Message', pic: 'Rizky', progress: 100 },
        { task: 'Manual Input Enhance', pic: 'Rizky', progress: 95 },
        { task: 'Cloud Migration', pic: 'David', progress: 80 },
        { task: 'CP emergency plan', pic: 'Rizky', progress: 100 },
        { task: 'Manual Input emergency plan', pic: 'Rizky/Iqbal', progress: 100 },
        { task: 'Monitoring scheduler', pic: 'Rizky', progress: 100 },
        { task: 'REKON settlement', pic: 'Rizky', progress: 100 },
        { task: 'Update message logol release', pic: 'Deja/David', progress: 100 },
        { task: 'Hold/Release xray service', pic: 'Deja/David', progress: 100 },
        { task: 'Update time qr', pic: 'Rizky', progress: 80 },
        { task: 'Truck weight stats, using history data for V', pic: 'Rizky', progress: 0 },
        { task: 'Service for reconsile gatepass data', pic: 'Rizky', progress: 0 },
      ],
      timeline: {
        start: '2026-05-04',
        end: '2026-05-13',
        schedule: {
          "2026-05-09": "red",
          "2026-05-10": "red",
          "2026-05-11": "yellow",
          "2026-05-12": "yellow",
          "2026-05-13": "red",
        }
      },
      challenges: []
    },
    {
      name: 'Kemenag SIPPRO',
      status: 'In Progress',
      progress: (80 + 95 + 100 + 100 + 90 + 90 + 100 + 50) / 8,
      tasks: [
        { task: 'Validator : Portal for validate', pic: 'Rizky/Iqbal', progress: 80 },
        { task: 'Migrasi Server', pic: 'Rizky/David', progress: 95 },
        { task: 'Test Server baru', pic: 'David', progress: 100 },
        { task: 'Bug SSO', pic: 'Rizky/David', progress: 100 },
        { task: 'Perapian data', pic: 'David', progress: 90 },
        { task: 'RFC', pic: 'Iqbal', progress: 90 },
        { task: 'DoubleDegree, New Lembaga, Akreditasi', pic: 'Rizky/David/Iqbal', progress: 100 },
        { task: 'Lembaga Integrasi', pic: 'Rizky/David/Iqbal', progress: 50 },
      ],
      timeline: {
        start: '2026-05-04',
        end: '2026-05-13',
        schedule: {
          "2026-05-09": "red",
          "2026-05-10": "red",
          "2026-05-11": "yellow",
          "2026-05-12": "yellow",
          "2026-05-13": "red",
        }
      },
      challenges: ['Lembaga Integration API Needed']
    },
    {
      name: 'TO3 : Xray',
      status: 'In Progress',
      progress: (100 + 100 + 100 + 100 + 100 + 80) / 6,
      tasks: [
        { task: 'API Integration', pic: 'Rizky', progress: 100 },
        { task: 'API Test', pic: 'David', progress: 100 },
        { task: 'AMS Web : Xray Implementation', pic: 'Rizky/Iqbal/Deja', progress: 100 },
        { task: 'Check Xray in Gateway', pic: 'Deja', progress: 100 },
        { task: 'Doc no data, search', pic: 'David/Deja', progress: 100 },
        { task: 'Doc', pic: 'David', progress: 80 },
      ],
      timeline: {
        start: '2026-05-04',
        end: '2026-05-13',
        schedule: {
          "2026-05-09": "red",
          "2026-05-10": "red",
          "2026-05-13": "red",
        }
      },
      challenges: []
    },
    {
      name: 'TO3/MAL Joingate',
      status: 'In Progress',
      progress: (100 + 100 + 100 + 100 + 80 + 95 + 100 + 0 + 95 + 50) / 10,
      tasks: [
        { task: 'API', pic: 'Deja', progress: 100 },
        { task: 'CP Gate IN', pic: 'Deja', progress: 100 },
        { task: 'MAL CP Gate IN/Reader', pic: 'Deja', progress: 100 },
        { task: 'Test & Bugsfixing', pic: 'Deja', progress: 100 },
        { task: 'Doc', pic: 'David/Rizky', progress: 80 },
        { task: 'MAL Booking', pic: 'Deja', progress: 95 },
        { task: 'TSJ/T3/MAL flow qr logic', pic: 'Deja', progress: 100 },
        { task: 'T3 Book', pic: 'Deja', progress: 0 },
        { task: 'Tosnus', pic: 'Deja', progress: 95 },
        { task: 'Manual Input', pic: 'Rizky/Deja', progress: 50 },
      ],
      timeline: {
        start: '2026-05-04',
        end: '2026-05-13',
        schedule: {
          "2026-05-09": "red",
          "2026-05-10": "red",
          "2026-05-13": "red",
        }
      },
      challenges: []
    },
    {
      name: 'Indocement : Truckscale',
      status: 'In Progress',
      progress: (95 + 95 + 100) / 3,
      tasks: [
        { task: 'API', pic: 'Deja', progress: 95 },
        { task: 'Monitoring', pic: 'Iqbal', progress: 95 },
        { task: 'Gate App', pic: 'Deja', progress: 100 },
      ],
      timeline: {
        start: '2026-05-04',
        end: '2026-05-13',
        schedule: {
          "2026-05-09": "red",
          "2026-05-10": "red",
          "2026-05-13": "red",
        }
      },
      challenges: []
    },
    {
      name: 'Indocement : Autogate grobogan',
      status: 'Completed',
      progress: 100,
      tasks: [
        { task: 'IOT', pic: 'David', progress: 100 },
      ],
      timeline: {
        start: '2026-05-04',
        end: '2026-05-13',
        schedule: {
          "2026-05-09": "red",
          "2026-05-10": "red",
          "2026-05-13": "red",
        }
      },
      challenges: []
    },
    {
      name: 'Indocement Autogate ERP enhancement',
      status: 'In Progress',
      progress: (100 + 100 + 90) / 3,
      tasks: [
        { task: 'Dashboard', pic: 'Deja/Iqbal', progress: 100 },
        { task: 'CP', pic: 'Deja', progress: 100 },
        { task: 'Deployment/Test', pic: 'Deja/David', progress: 90 },
      ],
      timeline: {
        start: '2026-05-04',
        end: '2026-05-13',
        schedule: {
          "2026-05-04": "yellow",
          "2026-05-05": "yellow",
          "2026-05-06": "yellow",
          "2026-05-07": "yellow",
          "2026-05-08": "yellow",
          "2026-05-09": "red",
          "2026-05-10": "red",
        }
      },
      challenges: []
    },
    {
      name: 'Unigate : Dashboard Monitoring',
      status: 'In Progress',
      progress: (30 + 100) / 2,
      tasks: [
        { task: 'Client app', pic: 'Deja', progress: 30 },
        { task: 'Dashboard api', pic: 'Iqbal/Rizky', progress: 100 },
      ],
      timeline: {
        start: '2026-05-04',
        end: '2026-05-13',
        schedule: {
          "2026-05-09": "red",
          "2026-05-10": "red",
        }
      },
      challenges: []
    },
    {
      name: 'Patimban : Autogate',
      status: 'In Progress',
      progress: (100 + 100 + 90 + 95 + 95 + 95 + 90 + 100 + 100 + 90) / 10,
      tasks: [
        { task: 'Gateway API', pic: 'Rizky/Deja', progress: 100 },
        { task: 'Monitoring', pic: 'Iqbal/Rizky', progress: 100 },
        { task: 'AMS', pic: 'Iqbal/Rizky', progress: 90 },
        { task: 'IOT', pic: 'David/Rizky', progress: 95 },
        { task: 'Display Kiosk', pic: 'David/Rizky', progress: 95 },
        { task: 'Logging System', pic: 'Rizky', progress: 95 },
        { task: 'Docs', pic: 'Rizky/David', progress: 90 },
        { task: 'SIT/UAT', pic: 'Rizky', progress: 100 },
        { task: 'Deploy server app/db', pic: 'Rizky/Isra', progress: 100 },
        { task: 'User guide', pic: 'Rizky/David', progress: 90 },
      ],
      timeline: {
        start: '2026-05-04',
        end: '2026-05-13',
        schedule: {
          "2026-05-09": "red",
          "2026-05-10": "red",
          "2026-05-11": "yellow",
          "2026-05-12": "yellow",
          "2026-05-13": "green",
        }
      },
      challenges: []
    },
  ],

  monthlyPlan: [
    {
      title: 'May 2026 Targets',
      description: 'Complete ongoing implementations and system integrations',
      items: [
        'Complete JICT OCR DG validation',
        'Complete TSJ Autogate UAT',
        'Complete Kalibaru CA new integrations and pending tasks',
        'Finalize Kemenag SIPPRO Lembaga Integrasi',
        'Complete TO3 Xray documentation',
        'Finalize TO3/MAL Joingate T3 Book & Manual Input',
        'Complete Indocement ERP enhancement deployment',
        'Launch Unigate Dashboard Monitoring client app',
        'Complete Patimban Autogate remaining tasks',
      ]
    }
  ],

  weeklyPlan: [
    {
      week: 'Week 2 (May 9-13)',
      status: 'In Progress',
      tasks: [
        'JICT OCR DG validation',
        'TSJ Autogate UAT completion',
        'Kalibaru CA truck weight stats & gatepass reconciliation',
        'Kemenag SIPPRO Lembaga Integrasi',
        'TO3/MAL Joingate T3 Book & Manual Input',
        'Indocement ERP Deployment/Test',
        'Unigate Dashboard client app development',
        'Patimban Autogate user guide finalization',
      ]
    }
  ]
};