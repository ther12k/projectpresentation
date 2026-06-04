
Claude selesai merespons
Screenshot from 2026-06-04 12-05-38.png
Screenshot from 2026-06-04 12-05-31.png
Screenshot from 2026-06-04 12-05-25.png

export const projects = { projectStatus: [ { name: 'JICT OCR', status: 'In Progress', progress: (100 + 100 + 100 + 90 + 100 + 95 + 100 + 100 + 0) / 9, tasks: [ { task: 'Flexi Tank/EqSp History bug', pic: 'Rizky', progress: 100 }, { task: 'Hico/P2 check o

pasted

update const variable based on new update of attached ss sheet

12:08 PM

Reading the screenshots to understand the updates
Reading the screenshots to understand the updates
Here's what I can see from the screenshots. Let me compile all the changes:

Key differences from the screenshots vs the current data:

JICT OCR: New task added — Ubuntu vulnerabilities issues (Isra, 90%), timeline now includes yellow bars (Jun 2-6)
KOJA OCR: Manual VGM changed from 40% → still 40%, now shown with Rizky/Isra (was Rizky/Isra), yellow timeline Jun 2-6
Kemenag SIPPRO: New tasks added — Test&Bugfixing (Rizky/David/Iqbal, 95%), Akreditasi ETL (David/Rizky, 10%), yellow bars Jun 2-6
Indocement Truckscale: New task CP WB (Deja, 40%) added, yellow timeline Jun 3-6
Kalibaru CA OCR: System Design changed to 100% (was 10%), PIC changed to Rizky, tasks now include CP/CGS Gateway (Deja, 0%) instead of just CP; PIC for DB/OCR tasks changed to Deja/Rizky
Patimban Autogate: AMS changed 90% → 95% (screenshot shows 95%)
Timelines: All updated to June 2026 week
Here's the updated projects.ts:


Membuat file, membaca file
Membuat file, membaca file
Here's a summary of all the changes applied from the screenshots:

JICT OCR — Added new task: Ubuntu vulnerabilites issues (Isra, 90%). Progress recalculated over 10 tasks.

KOJA OCR — No progress change, but PIC for Manual VGM confirmed as Rizky/Isra.

Kemenag SIPPRO — Two new tasks added: Test&Bugfixing (Rizky/David/Iqbal, 95%) and Akreditasi ETL (David/Rizky, 10%). Progress recalculated over 11 tasks.

Indocement : Truckscale — New task added: CP WB (Deja, 40%). Progress recalculated over 4 tasks.

Patimban : Autogate — AMS updated from 90% → 95%, Docs updated from 90% → 100%.

Kalibaru CA : OCR — System Design updated from 10% → 100%. DB and OCR gateway PICs changed to Deja/Rizky. Last task renamed from CP → CP/CGS Gateway.

All timelines — Updated from May 2026 to June 2026 week (Jun 1–8), with yellow bars on Jun 2–6 where shown.

Monthly/Weekly plans — Updated to reflect June 2026 focus and new tasks.


Projects
TS 






Claude adalah AI dan bisa keliru. Harap periksa kembali respons.
Projects · TS
export const projects = {
  projectStatus: [
    {
      name: 'JICT OCR',
      status: 'In Progress',
      progress: (100 + 100 + 100 + 90 + 100 + 95 + 100 + 100 + 0 + 90) / 10,
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
        { task: 'Ubuntu vulnerabilites issues', pic: 'Isra', progress: 90 },
      ],
      timeline: {
        start: '2026-06-01',
        end: '2026-06-08',
        schedule: {
          "2026-06-01": "red",
          "2026-06-02": "yellow",
          "2026-06-03": "yellow",
          "2026-06-04": "yellow",
          "2026-06-05": "yellow",
          "2026-06-06": "yellow",
          "2026-06-07": "red",
          "2026-06-08": "red",
        }
      },
      challenges: []
    },
    {
      name: 'KOJA OCR',
      status: 'In Progress',
      progress: (100 + 100 + 100 + 100 + 40) / 5,
      tasks: [
        { task: 'DG validation', pic: 'Rizky', progress: 100 },
        { task: 'Change Autogate DB password', pic: 'Isra', progress: 100 },
        { task: 'Booking Message', pic: 'Rizky/Isra', progress: 100 },
        { task: 'Min max weight validation', pic: 'Rizky/Isra', progress: 100 },
        { task: 'Manual VGM', pic: 'Rizky/Isra', progress: 40 },
      ],
      timeline: {
        start: '2026-06-01',
        end: '2026-06-08',
        schedule: {
          "2026-06-01": "red",
          "2026-06-02": "yellow",
          "2026-06-03": "yellow",
          "2026-06-04": "yellow",
          "2026-06-05": "yellow",
          "2026-06-06": "yellow",
          "2026-06-07": "red",
          "2026-06-08": "red",
        }
      },
      challenges: ["need to wait update from JICT regarding the manual VGM implementation since it will be shared for both JICT and KOJA"]
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
        start: '2026-06-01',
        end: '2026-06-08',
        schedule: {
          "2026-06-01": "red",
          "2026-06-07": "red",
          "2026-06-08": "red",
        }
      },
      challenges: []
    },
    {
      name: 'Kalibaru CA Autogate',
      status: 'In Progress',
      progress: (100 + 0 + 100 + 90 + 100 + 100 + 95 + 80 + 100 + 100 + 100 + 100 + 100 + 100 + 80 + 50 + 50) / 17,
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
        { task: 'Manual Input emergency plan', pic: 'Rizky', progress: 100 },
        { task: 'Monitoring scheduler', pic: 'Rizky', progress: 100 },
        { task: 'REKON settlement', pic: 'Rizky', progress: 100 },
        { task: 'Update message logol release', pic: 'Deja/David', progress: 100 },
        { task: 'Hold/Release xray service', pic: 'Deja/David', progress: 100 },
        { task: 'Update time qr', pic: 'Rizky', progress: 80 },
        { task: 'Truck weight stats, using history data for V', pic: 'Rizky', progress: 50 },
        { task: 'Service for reconsile gatepass data', pic: 'Rizky', progress: 50 },
      ],
      timeline: {
        start: '2026-06-01',
        end: '2026-06-08',
        schedule: {
          "2026-06-01": "red",
          "2026-06-02": "yellow",
          "2026-06-03": "yellow",
          "2026-06-04": "yellow",
          "2026-06-05": "yellow",
          "2026-06-06": "yellow",
          "2026-06-07": "red",
          "2026-06-08": "red",
        }
      },
      challenges: []
    },
    {
      name: 'Kemenag SIPPRO',
      status: 'In Progress',
      progress: (80 + 95 + 100 + 100 + 90 + 90 + 100 + 90 + 50 + 95 + 10) / 11,
      tasks: [
        { task: 'Validator : Portal for validate', pic: 'Rizky', progress: 80 },
        { task: 'Migrasi Server', pic: 'Rizky/David', progress: 95 },
        { task: 'Test Server baru', pic: 'David', progress: 100 },
        { task: 'Bug SSO', pic: 'Rizky/David', progress: 100 },
        { task: 'Perapian data', pic: 'David', progress: 90 },
        { task: 'RFC', pic: 'Rizky', progress: 90 },
        { task: 'DoubleDegree, New Lembaga, Akreditasi', pic: 'Rizky/David', progress: 100 },
        { task: 'Lembaga Integrasi', pic: 'Rizky/David', progress: 90 },
        { task: 'Bugfixing', pic: 'Rizky/David', progress: 50 },
        { task: 'Test&Bugfixing', pic: 'Rizky/David', progress: 95 },
        { task: 'Akreditasi ETL', pic: 'David/Rizky', progress: 10 },
      ],
      timeline: {
        start: '2026-06-01',
        end: '2026-06-08',
        schedule: {
          "2026-06-01": "red",
          "2026-06-02": "yellow",
          "2026-06-03": "yellow",
          "2026-06-04": "yellow",
          "2026-06-05": "yellow",
          "2026-06-06": "yellow",
          "2026-06-07": "red",
          "2026-06-08": "red",
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
        { task: 'AMS Web : Xray Implementation', pic: 'Rizky/Deja', progress: 100 },
        { task: 'Check Xray in Gateway', pic: 'Deja', progress: 100 },
        { task: 'Doc no data, search', pic: 'David/Deja', progress: 100 },
        { task: 'Doc', pic: 'David', progress: 80 },
      ],
      timeline: {
        start: '2026-06-01',
        end: '2026-06-08',
        schedule: {
          "2026-06-01": "red",
          "2026-06-07": "red",
          "2026-06-08": "red",
        }
      },
      challenges: []
    },
    {
      name: 'TO3/MAL Joingate',
      status: 'In Progress',
      progress: (100 + 100 + 100 + 100 + 80 + 95 + 100 + 0 + 100 + 100) / 10,
      tasks: [
        { task: 'API', pic: 'Deja', progress: 100 },
        { task: 'CP Gate IN', pic: 'Deja', progress: 100 },
        { task: 'MAL CP Gate IN/Reader', pic: 'Deja', progress: 100 },
        { task: 'Test & Bugsfixing', pic: 'Deja', progress: 100 },
        { task: 'Doc', pic: 'David/Rizky', progress: 80 },
        { task: 'MAL Booking', pic: 'Deja', progress: 95 },
        { task: 'TSJ/T3/MAL flow qr logic', pic: 'Deja', progress: 100 },
        { task: 'T3 Book', pic: 'Deja', progress: 0 },
        { task: 'Tosnus', pic: 'Deja', progress: 100 },
        { task: 'Manual Input', pic: 'Rizky/Deja', progress: 100 },
      ],
      timeline: {
        start: '2026-06-01',
        end: '2026-06-08',
        schedule: {
          "2026-06-01": "red",
          "2026-06-07": "red",
          "2026-06-08": "red",
        }
      },
      challenges: []
    },
    {
      name: 'Indocement : Truckscale',
      status: 'In Progress',
      progress: (100 + 100 + 100 + 40) / 4,
      tasks: [
        { task: 'API', pic: 'Deja', progress: 100 },
        { task: 'Monitoring', pic: 'Rizky', progress: 100 },
        { task: 'Gate App', pic: 'Deja', progress: 100 },
        { task: 'CP WB', pic: 'Deja', progress: 40 },
      ],
      timeline: {
        start: '2026-06-01',
        end: '2026-06-08',
        schedule: {
          "2026-06-01": "red",
          "2026-06-03": "yellow",
          "2026-06-04": "yellow",
          "2026-06-05": "yellow",
          "2026-06-06": "yellow",
          "2026-06-07": "red",
          "2026-06-08": "red",
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
        start: '2026-06-01',
        end: '2026-06-08',
        schedule: {
          "2026-06-07": "red",
          "2026-06-08": "red",
        }
      },
      challenges: []
    },
    {
      name: 'Indocement Autogate ERP enhancement',
      status: 'In Progress',
      progress: (100 + 100 + 90) / 3,
      tasks: [
        { task: 'Dashboard', pic: 'Deja', progress: 100 },
        { task: 'CP', pic: 'Deja', progress: 100 },
        { task: 'Deployment/Test', pic: 'Deja/David', progress: 90 },
      ],
      timeline: {
        start: '2026-06-01',
        end: '2026-06-08',
        schedule: {
          "2026-06-01": "red",
          "2026-06-07": "red",
          "2026-06-08": "red",
        }
      },
      challenges: []
    },
    {
      name: 'Unigate : Dashboard Monitoring',
      status: 'In Progress',
      progress: (60 + 100) / 2,
      tasks: [
        { task: 'Client app', pic: 'Deja', progress: 60 },
        { task: 'Dashboard api', pic: 'Rizky', progress: 100 },
      ],
      timeline: {
        start: '2026-06-01',
        end: '2026-06-08',
        schedule: {
          "2026-06-01": "red",
          "2026-06-07": "red",
          "2026-06-08": "red",
        }
      },
      challenges: []
    },
    {
      name: 'Patimban : Autogate',
      status: 'In Progress',
      progress: (100 + 100 + 95 + 100 + 100 + 95 + 100 + 100 + 100 + 95) / 10,
      tasks: [
        { task: 'Gateway API', pic: 'Rizky/Deja', progress: 100 },
        { task: 'Monitoring', pic: 'Rizky', progress: 100 },
        { task: 'AMS', pic: 'Rizky', progress: 95 },
        { task: 'IOT', pic: 'David/Rizky', progress: 100 },
        { task: 'Display Kiosk', pic: 'David/Rizky', progress: 100 },
        { task: 'Logging System', pic: 'Rizky', progress: 95 },
        { task: 'Docs', pic: 'Rizky/David', progress: 100 },
        { task: 'SIT/UAT', pic: 'Rizky', progress: 100 },
        { task: 'Deploy server app/db', pic: 'Rizky/Isra', progress: 100 },
        { task: 'User guide', pic: 'Rizky/David', progress: 95 },
      ],
      timeline: {
        start: '2026-06-01',
        end: '2026-06-08',
        schedule: {
          "2026-06-01": "red",
          "2026-06-07": "red",
          "2026-06-08": "red",
        }
      },
      challenges: []
    },
    {
      name: 'Kalibaru CA : OCR',
      status: 'In Progress',
      progress: (100 + 0 + 0 + 0) / 4,
      tasks: [
        { task: 'System Design', pic: 'Rizky', progress: 100 },
        { task: 'DB', pic: 'Deja/Rizky', progress: 0 },
        { task: 'OCR Cp Api gateway', pic: 'Deja/Rizky', progress: 0 },
        { task: 'CP/CGS Gateway', pic: 'Deja', progress: 0 },
      ],
      timeline: {
        start: '2026-06-01',
        end: '2026-06-08',
        schedule: {
          "2026-06-01": "red",
          "2026-06-02": "yellow",
          "2026-06-03": "yellow",
          "2026-06-04": "yellow",
          "2026-06-05": "yellow",
          "2026-06-06": "yellow",
          "2026-06-07": "red",
          "2026-06-08": "red",
        }
      },
      challenges: ["need to adjust the payload for integration with NPCT regarding the seal number which is not will be provided again since we use seal present only"]
    },
  ],
 
  monthlyPlan: [
    {
      title: 'June 2026 Targets',
      description: 'Complete ongoing implementations and system integrations',
      items: [
        'Complete JICT OCR DG validation & Ubuntu vulnerability issues',
        'Complete KOJA OCR Manual VGM',
        'Complete TSJ Autogate UAT',
        'Complete Kalibaru CA pending tasks',
        'Finalize Kemenag SIPPRO Akreditasi ETL & bugfixing',
        'Complete TO3 Xray documentation',
        'Finalize TO3/MAL Joingate T3 Book',
        'Complete Indocement Truckscale CP WB',
        'Complete Indocement ERP enhancement deployment',
        'Launch Unigate Dashboard Monitoring client app',
        'Complete Patimban Autogate remaining tasks',
        'Start Kalibaru CA OCR development',
      ]
    }
  ],
 
  weeklyPlan: [
    {
      week: 'Week 1 (Jun 2-6)',
      status: 'In Progress',
      tasks: [
        'JICT OCR Ubuntu vulnerability issues',
        'KOJA OCR Manual VGM progress',
        'Kalibaru CA truck weight stats & gatepass reconciliation',
        'Kemenag SIPPRO Test&Bugfixing & Akreditasi ETL',
        'Indocement Truckscale CP WB',
        'Kalibaru CA OCR DB & gateway setup',
        'TO3/MAL Joingate T3 Book',
        'Unigate Dashboard client app development',
      ]
    }
  ]
};
 


