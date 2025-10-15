// Halotec SWOT Presentation v2 - Slide Data and Supporting Components

function StatCard({ number, label }) {
  return (
    <div className="bg-slate-800/60 p-6 rounded-xl border-2 border-blue-500/30 text-center hover:scale-105 transition-transform">
      <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
        {number}
      </div>
      <div className="text-slate-400 text-xs md:text-sm mt-2 uppercase tracking-wide">
        {label}
      </div>
    </div>
  )
}

function Section({ title, children }) {
  return (
    <div>
      <h3 className="text-2xl md:text-3xl font-semibold text-blue-500 mb-4">{title}</h3>
      {children}
    </div>
  )
}

function HighlightBox({ title, children, color = 'blue' }) {
  const palette = {
    blue: { bg: 'bg-blue-500/10', border: 'border-blue-500', text: 'text-blue-400' },
    green: { bg: 'bg-emerald-500/10', border: 'border-emerald-500', text: 'text-emerald-400' },
    orange: { bg: 'bg-orange-500/10', border: 'border-orange-500', text: 'text-orange-400' },
    purple: { bg: 'bg-purple-500/10', border: 'border-purple-500', text: 'text-purple-400' },
    amber: { bg: 'bg-amber-500/10', border: 'border-amber-500', text: 'text-amber-400' }
  }

  const tone = palette[color] ?? palette.blue

  return (
    <div className={`${tone.bg} border-l-4 ${tone.border} p-5 rounded-xl mb-4 hover:translate-x-1 transition-transform`}>
      <div className={`font-bold ${tone.text} text-lg mb-2`}>{title}</div>
      <div className="text-slate-300 text-sm leading-relaxed space-y-2">{children}</div>
    </div>
  )
}

function Badge({ children }) {
  return (
    <span className="px-4 py-1.5 bg-blue-500/15 text-blue-400 rounded-full text-xs md:text-sm font-semibold border border-blue-500/30">
      {children}
    </span>
  )
}

function BulletPoint({ children }) {
  return (
    <li className="relative pl-6">
      <span className="absolute left-0 text-blue-500">▸</span>
      {children}
    </li>
  )
}

function SWOTBox({ type, title, items }) {
  const colors = {
    strengths: { border: 'border-emerald-500', bg: 'bg-emerald-500/10', text: 'text-emerald-400' },
    weaknesses: { border: 'border-orange-500', bg: 'bg-orange-500/10', text: 'text-orange-400' },
    opportunities: { border: 'border-blue-500', bg: 'bg-blue-500/10', text: 'text-blue-400' },
    threats: { border: 'border-purple-500', bg: 'bg-purple-500/10', text: 'text-purple-400' }
  }

  const tone = colors[type]

  return (
    <div className={`${tone.bg} ${tone.border} border-2 rounded-xl p-6 overflow-y-auto custom-scrollbar`}>
      <h3 className={`text-2xl font-bold ${tone.text} mb-4 pb-3 border-b-2 ${tone.border}`}>{title}</h3>
      <ul className="space-y-2 text-sm text-slate-300">
        {items.map((item, i) => (
          <li key={i} className="relative pl-4">
            <span className={`absolute left-0 ${tone.text}`}>●</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

const translate = (lang, values) => values[lang] ?? values.en

export const languages = [
  { code: 'en', label: 'English' },
  { code: 'id', label: 'Bahasa Indonesia' }
]

export const defaultLanguage = 'en'

export function getSlides(language = defaultLanguage) {
  const activeLanguage = languages.some((option) => option.code === language) ? language : defaultLanguage
  const t = (values) => translate(activeLanguage, values)

  return [
    {
      navTitle: t({ en: 'Overview', id: 'Gambaran Umum' }),
      showLogo: false,
      render: () => (
        <div className="flex flex-col items-center justify-center h-full text-center space-y-6">
          <h1 className="text-6xl md:text-7xl font-extrabold text-white">HALOTEC INDONESIA</h1>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            {t({ en: 'SWOT ANALYSIS', id: 'ANALISIS SWOT' })}
          </h2>
          <div className="w-40 h-1.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
        </div>
      )
    },
    {
      navTitle: t({ en: 'SWOT Snapshot', id: 'Ringkasan SWOT' }),
      showLogo: true,
      header: {
        title: t({ en: 'SWOT Snapshot 2025', id: 'Ringkasan SWOT 2025' }),
        subtitle: t({
          en: 'Halotec at-a-glance after the strategic reset',
          id: 'Gambaran singkat Halotec setelah penataan ulang strategi'
        })
      },
      render: () => (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full">
          <SWOTBox
            type="strengths"
            title={t({ en: 'Strengths', id: 'Kekuatan' })}
            items={t({
              en: [
                'Flagship autogate references at JICT, KOJA, and Pelindo terminals',
                'Deep sensor fusion and M2M integration capabilities',
                'End-to-end delivery spanning hardware, firmware, and cloud',
                'Retained ERP customization know-how for complementary work',
                'Credibility built in high-stakes industrial environments'
              ],
              id: [
                'Referensi autogate andalan di terminal JICT, KOJA, dan Pelindo',
                'Kemampuan kuat dalam fusi sensor dan integrasi M2M',
                'Delivery end-to-end mencakup hardware, firmware, dan cloud',
                'Pengetahuan kustomisasi ERP tetap tersedia untuk pekerjaan pelengkap',
                'Kredibilitas terbangun di lingkungan industri berisiko tinggi'
              ]
            })}
          />
          <SWOTBox
            type="weaknesses"
            title={t({ en: 'Weaknesses', id: 'Kelemahan' })}
            items={t({
              en: [
                'Market focus narrows to industrial autogate and logistics niches',
                'Revenue concentrated in a small set of large industrial clients',
                'Lean engineering teams stretch across delivery, R&D, and support',
                'Transition from bespoke ERP reduces short-term revenue buffers',
                'Brand visibility remains limited outside core industrial circles'
              ],
              id: [
                'Fokus pasar menyempit pada autogate industri dan ceruk logistik',
                'Pendapatan terkonsentrasi pada segelintir klien industri besar',
                'Tim engineering ramping terbagi antara delivery, R&D, dan support',
                'Transisi dari ERP kustom mengurangi bantalan pendapatan jangka pendek',
                'Visibilitas brand masih terbatas di luar lingkaran industri inti'
              ]
            })}
          />
          <SWOTBox
            type="opportunities"
            title={t({ en: 'Opportunities', id: 'Peluang' })}
            items={t({
              en: [
                'Productize autogate stack into repeatable, subscription-backed offerings',
                "Ride Pelindo's nationwide automation rollout across 59 ports",
                'Adapt industrial expertise for smart residential and commercial gates',
                'Forge OEM partnerships to bundle best-in-class hardware',
                'Monetize ERP skills through complementary partnerships',
                'Extend IoT play into broader Industry 4.0 initiatives'
              ],
              id: [
                'Memprodukkan stack autogate menjadi penawaran repetitif berbasis langganan',
                'Memanfaatkan rollout otomatisasi nasional Pelindo di 59 pelabuhan',
                'Mengadaptasi keahlian industri untuk gerbang residensial dan komersial pintar',
                'Membangun kemitraan OEM untuk menggabungkan hardware terbaik',
                'Monetisasi kemampuan ERP melalui kemitraan pelengkap',
                'Memperluas permainan IoT ke inisiatif Industry 4.0 yang lebih luas'
              ]
            })}
          />
          <SWOTBox
            type="threats"
            title={t({ en: 'Threats', id: 'Ancaman' })}
            items={t({
              en: [
                'Larger integrators and global automation firms entering the space',
                'Policy and procurement shifts favoring state-owned or global vendors',
                'Overextension risk if focus drifts back to bespoke projects',
                'Rapid tech evolution (AI vision, biometrics, next-gen IoT platforms)',
                'Economic swings delaying capital-intensive automation projects'
              ],
              id: [
                'Integrator besar dan perusahaan otomatisasi global memasuki pasar',
                'Perubahan kebijakan dan pengadaan yang menguntungkan vendor BUMN atau global',
                'Risiko overextension jika fokus kembali ke proyek kustom',
                'Evolusi teknologi yang cepat (visi AI, biometrik, platform IoT generasi baru)',
                'Fluktuasi ekonomi menunda proyek otomatisasi padat modal'
              ]
            })}
          />
        </div>
      )
    },
    {
      navTitle: t({ en: 'Strengths', id: 'Kekuatan' }),
      showLogo: true,
      header: {
        title: t({ en: 'Core Strengths', id: 'Kekuatan Utama' }),
        subtitle: t({
          en: "Capabilities that anchor Halotec's competitive edge",
          id: 'Kapabilitas yang menjaga keunggulan kompetitif Halotec'
        })
      },
      render: () => (
        <div className="grid grid-cols-1 gap-4">
          <HighlightBox title={t({ en: 'Proven autogate & industrial automation expertise', id: 'Keahlian autogate & otomasi industri yang terbukti' })} color="green">
            <p>
              {t({
                en: "Full-stack deployments at Indonesia's busiest ports (JICT, KOJA, IPC) demonstrate mastery across software, hardware integration, implementation, and lifecycle support for mission-critical operations.",
                id: 'Implementasi full-stack di pelabuhan tersibuk Indonesia (JICT, KOJA, IPC) menunjukkan penguasaan atas software, integrasi hardware, implementasi, dan dukungan lifecycle untuk operasi mission-critical.'
              })}
            </p>
            <p>
              {t({
                en: 'Real-world performance in high-volume, zero-downtime environments reinforces stakeholder confidence.',
                id: 'Performa di dunia nyata pada lingkungan dengan volume tinggi dan tanpa downtime memperkuat kepercayaan para pemangku kepentingan.'
              })}
            </p>
          </HighlightBox>
          <HighlightBox title={t({ en: 'Advanced sensor integration & M2M capability', id: 'Integrasi sensor lanjutan & kapabilitas M2M' })} color="green">
            <p>
              {t({
                en: 'RFID, OCR, weighbridge, and CCTV feeds are fused into cohesive gate control systems, enabling real-time decisioning and seamless data exchange between edge devices and enterprise platforms.',
                id: 'Feed RFID, OCR, jembatan timbang, dan CCTV digabungkan menjadi sistem kontrol gerbang terpadu, memungkinkan pengambilan keputusan real-time dan pertukaran data mulus antara perangkat edge dan platform enterprise.'
              })}
            </p>
            <p>
              {t({
                en: 'The team excels at ruggedizing IoT solutions for industrial conditions while preserving data fidelity.',
                id: 'Tim mahir menguatkan solusi IoT untuk kondisi industri sekaligus menjaga integritas data.'
              })}
            </p>
          </HighlightBox>
          <HighlightBox title={t({ en: 'Full-stack delivery & technical versatility', id: 'Delivery full-stack & fleksibilitas teknis' })} color="green">
            <p>
              {t({
                en: 'Halotec owns the entire solution stack—from embedded controllers and networking through databases, cloud services, and user applications—reducing dependency on third parties and accelerating customisation.',
                id: 'Halotec menguasai seluruh stack solusi—dari embedded controller dan jaringan hingga database, layanan cloud, dan aplikasi pengguna—mengurangi ketergantungan pada pihak ketiga dan mempercepat kustomisasi.'
              })}
            </p>
            <p>
              {t({
                en: 'Cross-disciplinary engineering squads shorten issue resolution cycles and drive continuous innovation.',
                id: 'Skuad engineering lintas disiplin mempercepat siklus penyelesaian masalah dan mendorong inovasi berkelanjutan.'
              })}
            </p>
          </HighlightBox>
          <HighlightBox title={t({ en: 'ERP development know-how (non-core strength)', id: 'Pengetahuan pengembangan ERP (kekuatan non-inti)' })} color="green">
            <p>
              {t({
                en: 'Years of delivering school, government, and enterprise systems provide battle-tested ERP knowledge that can be activated for complementary modules or partnership-based implementations.',
                id: 'Pengalaman bertahun-tahun mengerjakan sistem sekolah, pemerintah, dan enterprise menghasilkan pengetahuan ERP yang matang untuk diaktifkan pada modul pelengkap atau implementasi berbasis kemitraan.'
              })}
            </p>
            <p>
              {t({
                en: 'This heritage differentiates Halotec when automation projects require tight integration with management systems.',
                id: 'Warisan ini membedakan Halotec saat proyek otomasi membutuhkan integrasi erat dengan sistem manajemen.'
              })}
            </p>
          </HighlightBox>
          <HighlightBox title={t({ en: 'Established industry credibility', id: 'Kredibilitas industri yang terbangun' })} color="green">
            <p>
              {t({
                en: 'Two decades of experience with high-profile industrial clients, including maintenance contracts and long-lived deployments, translate into trusted relationships and strong reference accounts.',
                id: 'Dua dekade pengalaman dengan klien industri profil tinggi, termasuk kontrak pemeliharaan dan deployment jangka panjang, menciptakan hubungan tepercaya dan referensi kuat.'
              })}
            </p>
            <p>
              {t({
                en: "The track record signals reliability to new customers and partners entering Indonesia's automation wave.",
                id: 'Rekam jejak tersebut menunjukkan keandalan bagi pelanggan dan mitra baru yang memasuki gelombang otomasi Indonesia.'
              })}
            </p>
          </HighlightBox>
        </div>
      )
    },
    {
      navTitle: t({ en: 'Weaknesses', id: 'Kelemahan' }),
      showLogo: true,
      header: {
        title: t({ en: 'Key Weaknesses', id: 'Kelemahan Utama' }),
        subtitle: t({
          en: 'Constraints to manage during the transition',
          id: 'Kendala yang harus dikelola selama transisi'
        })
      },
      render: () => (
        <div className="grid grid-cols-1 gap-4">
          <HighlightBox title={t({ en: 'Narrowing market focus', id: 'Fokus pasar yang menyempit' })} color="orange">
            <p>
              {t({
                en: 'Concentration on industrial autogate and heavy-industry automation limits diversification and ties growth to capital spending cycles in ports, logistics, and manufacturing.',
                id: 'Konsentrasi pada autogate industri dan otomasi heavy industry membatasi diversifikasi dan mengaitkan pertumbuhan pada siklus belanja modal di pelabuhan, logistik, dan manufaktur.'
              })}
            </p>
            <p>
              {t({
                en: 'A thinner opportunity set increases exposure to sector-specific slowdowns.',
                id: 'Peluang yang menipis meningkatkan eksposur terhadap perlambatan spesifik sektor.'
              })}
            </p>
          </HighlightBox>
          <HighlightBox title={t({ en: 'Dependence on large industrial clients', id: 'Ketergantungan pada klien industri besar' })} color="orange">
            <p>
              {t({
                en: 'A few anchor customers contribute a substantial share of revenue; strategic or budget shifts at any client can materially affect performance.',
                id: 'Beberapa pelanggan anchor menyumbang porsi besar pendapatan; perubahan strategi atau anggaran di satu klien dapat berdampak signifikan.'
              })}
            </p>
            <p>
              {t({
                en: 'Sales pipelines must broaden to reduce concentration risk.',
                id: 'Pipeline penjualan harus diperluas untuk mengurangi risiko konsentrasi.'
              })}
            </p>
          </HighlightBox>
          <HighlightBox title={t({ en: 'Resource constraints and scaling challenges', id: 'Keterbatasan sumber daya dan tantangan scaling' })} color="orange">
            <p>
              {t({
                en: 'Approximately 50 engineers stretch across legacy support, new product development, and 24/7 operations—slowing parallel project execution and innovation throughput.',
                id: 'Sekitar 50 engineer terbagi antara dukungan legacy, pengembangan produk baru, dan operasi 24/7—memperlambat eksekusi proyek paralel dan throughput inovasi.'
              })}
            </p>
            <p>
              {t({
                en: 'Scaling without adding headcount or new delivery models remains difficult.',
                id: 'Melakukan scaling tanpa menambah SDM atau model delivery baru tetap sulit.'
              })}
            </p>
          </HighlightBox>
          <HighlightBox title={t({ en: 'Transition away from custom projects', id: 'Transisi dari proyek kustom' })} color="orange">
            <p>
              {t({
                en: 'Winding down bespoke ERP engagements creates a revenue dip and requires careful management of existing obligations (schools, SIPPRO Kemenag, and other systems).',
                id: 'Penghentian keterlibatan ERP kustom menciptakan penurunan pendapatan dan membutuhkan pengelolaan cermat atas kewajiban yang ada (sekolah, SIPPRO Kemenag, dan sistem lainnya).'
              })}
            </p>
            <p>
              {t({
                en: 'Teams must adopt product go-to-market, pricing, and lifecycle management mindsets.',
                id: 'Tim harus mengadopsi pola pikir go-to-market produk, penetapan harga, dan manajemen lifecycle.'
              })}
            </p>
          </HighlightBox>
          <HighlightBox title={t({ en: 'Limited market visibility outside core niche', id: 'Visibilitas pasar terbatas di luar ceruk inti' })} color="orange">
            <p>
              {t({
                en: 'Branding and awareness remain largely confined to port automation circles, making recruitment, partnership outreach, and entry into adjacent markets more challenging.',
                id: 'Branding dan awareness masih terbatas pada lingkaran otomasi pelabuhan, sehingga perekrutan, pencarian mitra, dan masuk ke pasar terkait menjadi lebih menantang.'
              })}
            </p>
            <p>
              {t({
                en: 'Marketing investment and storytelling must expand beyond existing references.',
                id: 'Investasi marketing dan storytelling harus meluas melampaui referensi yang ada.'
              })}
            </p>
          </HighlightBox>
        </div>
      )
    },
    {
      navTitle: t({ en: 'Opportunities', id: 'Peluang' }),
      showLogo: true,
      header: {
        title: t({ en: 'Opportunity Landscape', id: 'Lanskap Peluang' }),
        subtitle: t({
          en: 'Growth vectors unlocked by the new focus',
          id: 'Vektor pertumbuhan yang terbuka lewat fokus baru'
        })
      },
      render: () => (
        <div className="grid grid-cols-1 gap-4">
          <HighlightBox title={t({ en: 'Productization & recurring revenue models', id: 'Produktisasi & model pendapatan berulang' })} color="blue">
            <p>
              {t({
                en: 'Modularizing autogate components—hardware kits, software modules, managed services—enables repeat sales, subscription revenue, and margin expansion across multiple sites.',
                id: 'Memodularisasi komponen autogate—paket hardware, modul software, layanan terkelola—memungkinkan penjualan berulang, pendapatan langganan, dan ekspansi margin di banyak lokasi.'
              })}
            </p>
            <p>
              {t({
                en: 'A product-first approach sharpens differentiation and simplifies scaling.',
                id: 'Pendekatan product-first menajamkan diferensiasi dan mempermudah scaling.'
              })}
            </p>
          </HighlightBox>
          <HighlightBox title={t({ en: 'National port automation initiatives', id: 'Inisiatif otomasi pelabuhan nasional' })} color="blue">
            <p>
              {t({
                en: 'Pelindo is rolling autogate systems to dozens of ports (13 in 2023, 59 target by 2024), creating a pipeline where Halotec can replicate proven playbooks as prime or specialist integrator.',
                id: 'Pelindo menggulirkan sistem autogate ke puluhan pelabuhan (13 pada 2023, target 59 pada 2024), menciptakan pipeline di mana Halotec dapat mereplikasi playbook terbukti sebagai integrator utama atau spesialis.'
              })}
            </p>
            <p>
              {t({
                en: 'Success at one port sets the stage for template-based deployments nationwide.',
                id: 'Keberhasilan di satu pelabuhan membuka jalan untuk deployment berbasis template di seluruh nusantara.'
              })}
            </p>
          </HighlightBox>
          <HighlightBox title={t({ en: 'Expansion into smart residential autogate', id: 'Ekspansi ke autogate residensial pintar' })} color="blue">
            <p>
              {t({
                en: 'Gated communities, mixed-use developments, and commercial estates are exploring IoT-based access control—an adjacent mass market where Halotec can adapt industrial expertise into lighter-weight offerings once initial traction appears.',
                id: 'Kawasan berpagar, pengembangan campuran, dan kawasan komersial mengeksplorasi kontrol akses berbasis IoT—pasar massal yang berdekatan di mana Halotec dapat mengadaptasi keahlian industri menjadi penawaran yang lebih ringan setelah muncul traksi awal.'
              })}
            </p>
          </HighlightBox>
          <HighlightBox title={t({ en: 'OEM hardware partnerships', id: 'Kemitraan hardware OEM' })} color="blue">
            <p>
              {t({
                en: 'Collaborating with barrier, sensor, camera, and weighbridge manufacturers unlocks co-innovation, cost advantages, and packaged solutions that integrate seamlessly with Halotec software.',
                id: 'Kolaborasi dengan produsen barrier, sensor, kamera, dan jembatan timbang membuka co-innovation, keunggulan biaya, dan solusi paket yang terintegrasi mulus dengan software Halotec.'
              })}
            </p>
            <p>
              {t({
                en: 'Joint go-to-market campaigns can extend reach while stabilizing the supply chain.',
                id: 'Kampanye go-to-market bersama dapat memperluas jangkauan sekaligus menstabilkan rantai pasok.'
              })}
            </p>
          </HighlightBox>
          <HighlightBox title={t({ en: 'Strategic use of ERP expertise', id: 'Pemanfaatan strategis keahlian ERP' })} color="blue">
            <p>
              {t({
                en: 'Retained ERP skills can be monetized via partnerships or targeted modules that complement automation projects, allowing Halotec to stay involved in process digitization without assuming full project risk.',
                id: 'Keahlian ERP yang tetap dimiliki dapat dimonetisasi melalui kemitraan atau modul terarah yang melengkapi proyek otomasi, memungkinkan Halotec tetap terlibat dalam digitalisasi proses tanpa menanggung risiko proyek penuh.'
              })}
            </p>
          </HighlightBox>
          <HighlightBox title={t({ en: 'Adjacent IoT & automation markets', id: 'Pasar IoT & otomasi yang berdekatan' })} color="blue">
            <p>
              {t({
                en: 'Industry 4.0 programs, smart manufacturing, intelligent logistics, and infrastructure modernization open opportunities to repurpose the autogate stack for factories, warehouses, toll roads, rail, and mining operations.',
                id: 'Program Industry 4.0, manufaktur pintar, logistik cerdas, dan modernisasi infrastruktur membuka peluang untuk memanfaatkan kembali stack autogate bagi pabrik, gudang, jalan tol, rel, dan operasi tambang.'
              })}
            </p>
            <p>
              {t({
                en: 'Extending into these areas diversifies revenue while staying within sensor-driven automation.',
                id: 'Ekspansi ke area tersebut mendiversifikasi pendapatan sambil tetap berada dalam ranah otomasi berbasis sensor.'
              })}
            </p>
          </HighlightBox>
        </div>
      )
    },
    {
      navTitle: t({ en: 'Threats', id: 'Ancaman' }),
      showLogo: true,
      header: {
        title: t({ en: 'Threat Landscape', id: 'Lanskap Ancaman' }),
        subtitle: t({
          en: 'External pressures to monitor closely',
          id: 'Tekanan eksternal yang harus dipantau'
        })
      },
      render: () => (
        <div className="grid grid-cols-1 gap-4">
          <HighlightBox title={t({ en: 'Increasing competition in the niche', id: 'Kompetisi yang meningkat di ceruk pasar' })} color="purple">
            <p>
              {t({
                en: 'National automation efforts attract global integrators and well-capitalized local players who can compete on price, bundled offerings, or brand recognition.',
                id: 'Upaya otomasi nasional menarik integrator global dan pemain lokal bermodal besar yang dapat bersaing lewat harga, paket bundling, atau pengakuan merek.'
              })}
            </p>
            <p>
              {t({
                en: 'Halotec must sustain differentiation through local insight, speed, and integration depth.',
                id: 'Halotec harus menjaga diferensiasi melalui wawasan lokal, kecepatan, dan kedalaman integrasi.'
              })}
            </p>
          </HighlightBox>
          <HighlightBox title={t({ en: 'Policy and procurement risks', id: 'Risiko kebijakan dan pengadaan' })} color="purple">
            <p>
              {t({
                en: 'Government procurement changes, standardization mandates, or preferences for state-linked vendors could reshape access to strategic projects.',
                id: 'Perubahan pengadaan pemerintah, mandat standarisasi, atau preferensi kepada vendor terafiliasi negara dapat mengubah akses ke proyek strategis.'
              })}
            </p>
            <p>
              {t({
                en: 'Compliance requirements around security and data residency continue to intensify.',
                id: 'Persyaratan kepatuhan terkait keamanan dan residensi data terus meningkat.'
              })}
            </p>
          </HighlightBox>
          <HighlightBox title={t({ en: 'Focus dilution & overextension', id: 'Fokus melebar & overextension' })} color="purple">
            <p>
              {t({
                en: 'Pursuing too many adjacent initiatives while servicing existing clients risks thinly spreading teams and eroding delivery quality.',
                id: 'Mengejar terlalu banyak inisiatif terkait sambil melayani klien yang ada berisiko membuat tim tersebar dan menurunkan kualitas delivery.'
              })}
            </p>
            <p>
              {t({
                en: 'Disciplined prioritization is essential to avoid slipping back into project-generalist mode.',
                id: 'Prioritisasi disiplin penting agar tidak kembali ke mode proyek generalis.'
              })}
            </p>
          </HighlightBox>
          <HighlightBox title={t({ en: 'Technological disruption', id: 'Disrupsi teknologi' })} color="purple">
            <p>
              {t({
                en: 'Rapid advances in AI-based recognition, biometric access, and global IoT platforms could redefine gate automation standards and commoditize current differentiators.',
                id: 'Kemajuan cepat dalam pengenalan berbasis AI, akses biometrik, dan platform IoT global dapat mendefinisikan ulang standar otomatisasi gerbang dan mengkomoditisasi diferensiasi saat ini.'
              })}
            </p>
            <p>
              {t({
                en: 'Continuous R&D and technology scouting are required to stay ahead of adoption curves.',
                id: 'R&D berkelanjutan dan penjajakan teknologi diperlukan untuk tetap berada di depan kurva adopsi.'
              })}
            </p>
          </HighlightBox>
          <HighlightBox title={t({ en: 'Economic & sectoral fluctuations', id: 'Fluktuasi ekonomi & sektoral' })} color="purple">
            <p>
              {t({
                en: 'Ports, logistics, and heavy industry investments are sensitive to macroeconomic cycles; downturns can delay modernization projects and extend sales cycles.',
                id: 'Investasi pelabuhan, logistik, dan industri berat sensitif terhadap siklus makroekonomi; perlambatan dapat menunda proyek modernisasi dan memperpanjang siklus penjualan.'
              })}
            </p>
            <p>
              {t({
                en: 'Building financial buffers and a diversified customer base mitigates volatility.',
                id: 'Membangun bantalan finansial dan basis pelanggan yang terdiversifikasi mengurangi volatilitas.'
              })}
            </p>
          </HighlightBox>
        </div>
      )
    },
    {
      navTitle: t({ en: 'Strategy Reset', id: 'Penataan Strategi' }),
      showLogo: true,
      header: {
        title: t({ en: '2025 Strategy Reset', id: 'Penataan Strategi 2025' }),
        subtitle: t({
          en: 'Halotec pivots away from bespoke ERP to reinforce automation leadership',
          id: 'Halotec beralih dari ERP kustom untuk menegaskan kepemimpinan otomasi'
        })
      },
      render: () => (
        <div className="space-y-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <StatCard number="2003" label={t({ en: 'Year founded', id: 'Tahun berdiri' })} />
            <StatCard number="50+" label={t({ en: 'Engineers & specialists', id: 'Engineer & spesialis' })} />
            <StatCard number="3+" label={t({ en: 'Flagship port deployments', id: 'Deploymen pelabuhan andalan' })} />
            <StatCard number="24/7" label={t({ en: 'Mission-critical support', id: 'Dukungan misi-kritis' })} />
          </div>

          <Section title={t({ en: 'Why change now', id: 'Mengapa berubah sekarang' })}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <HighlightBox title={t({ en: 'Refocusing on high-value domains', id: 'Refokus pada domain bernilai tinggi' })} color="green">
                <p>
                  {t({
                    en: "Custom ERP work delivered limited margins, frequent scope creep, and distracted teams from Halotec's competitive core: industrial autogate, M2M integration, and automation stacks.",
                    id: 'Pekerjaan ERP kustom memberi margin terbatas, scope creep yang sering, dan mengalihkan tim dari inti kompetitif Halotec: autogate industri, integrasi M2M, dan stack otomasi.'
                  })}
                </p>
                <p>
                  {t({
                    en: 'Resources are being reallocated to proven port automation products, recurring services, and modular offerings that scale across sites.',
                    id: 'Sumber daya dialihkan ke produk otomasi pelabuhan yang terbukti, layanan berulang, dan penawaran modular yang dapat discale ke banyak lokasi.'
                  })}
                </p>
              </HighlightBox>
              <HighlightBox title={t({ en: 'Strengthening product discipline', id: 'Memperkuat disiplin produk' })} color="green">
                <p>
                  {t({
                    en: 'The shift from one-off projects to standardized solutions enables faster replication, predictable delivery, and clearer value propositions for ports, logistics hubs, and industrial campuses.',
                    id: 'Peralihan dari proyek satuan ke solusi standar memungkinkan replikasi lebih cepat, delivery yang terprediksi, dan proposisi nilai yang lebih jelas bagi pelabuhan, hub logistik, dan kampus industri.'
                  })}
                </p>
                <p>
                  {t({
                    en: 'Legacy ERP knowledge remains available for complementary work without diluting the primary growth agenda.',
                    id: 'Pengetahuan ERP legacy tetap tersedia untuk pekerjaan pelengkap tanpa mengaburkan agenda pertumbuhan utama.'
                  })}
                </p>
              </HighlightBox>
            </div>
          </Section>

          <Section title={t({ en: 'Core solution stack 2025', id: 'Stack solusi inti 2025' })}>
            <div className="flex flex-wrap gap-3">
              {t({
                en: [
                  'Industrial autogate platforms',
                  'IoT device orchestration',
                  'Sensor & M2M integration',
                  'AI-ready data pipelines',
                  'Operations dashboards',
                  'Cloud & edge coordination',
                  'Lifecycle support services'
                ],
                id: [
                  'Platform autogate industri',
                  'Orkestrasi perangkat IoT',
                  'Integrasi sensor & M2M',
                  'Pipeline data siap AI',
                  'Dasbor operasional',
                  'Koordinasi cloud & edge',
                  'Layanan dukungan lifecycle'
                ]
              }).map((item) => (
                <Badge key={item}>{item}</Badge>
              ))}
            </div>
          </Section>
        </div>
      )
    },
    {
      navTitle: t({ en: 'Priorities', id: 'Prioritas' }),
      showLogo: true,
      header: {
        title: t({ en: 'Strategic Priorities 2025-2028', id: 'Prioritas Strategis 2025-2028' }),
        subtitle: t({
          en: 'Turning the SWOT into an execution agenda',
          id: 'Menerjemahkan SWOT menjadi agenda eksekusi'
        })
      },
      render: () => (
        <div className="space-y-6">
          <Section title={t({ en: 'Execution imperatives', id: 'Imperatif eksekusi' })}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <HighlightBox title={t({ en: 'Leverage core strengths', id: 'Manfaatkan kekuatan inti' })} color="green">
                <ul className="list-disc list-inside space-y-1 text-slate-300">
                  {t({
                    en: [
                      "Scale proven autogate playbooks across Pelindo's nationwide rollout.",
                      'Keep integrating edge hardware, cloud services, and analytics for a unified platform.',
                      'Maintain 24/7 reliability while expanding feature depth.'
                    ],
                    id: [
                      'Skalakan playbook autogate yang terbukti sepanjang rollout nasional Pelindo.',
                      'Terus integrasikan hardware edge, layanan cloud, dan analitik untuk platform terpadu.',
                      'Pertahankan keandalan 24/7 sambil menambah kedalaman fitur.'
                    ]
                  }).map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </HighlightBox>
              <HighlightBox title={t({ en: 'Diversify responsibly', id: 'Diversifikasi secara terukur' })} color="blue">
                <ul className="list-disc list-inside space-y-1 text-slate-300">
                  {t({
                    en: [
                      'Launch modular products and recurring service tiers targeting new customer segments.',
                      'Pilot residential/security offerings when committed anchor clients emerge.',
                      'Partner on ERP components instead of owning end-to-end custom builds.'
                    ],
                    id: [
                      'Luncurkan produk modular dan tier layanan berulang untuk segmen pelanggan baru.',
                      'Uji coba penawaran residensial/keamanan ketika klien anchor yang berkomitmen muncul.',
                      'Bermitra pada komponen ERP alih-alih memiliki build kustom end-to-end.'
                    ]
                  }).map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </HighlightBox>
              <HighlightBox title={t({ en: 'Invest in capacity', id: 'Investasi pada kapasitas' })} color="amber">
                <ul className="list-disc list-inside space-y-1 text-slate-300">
                  {t({
                    en: [
                      'Grow teams in data, product, and cybersecurity to reduce key-person risk.',
                      'Modernize legacy stacks while safeguarding uptime and client commitments.',
                      'Systematize knowledge management across distributed offices.'
                    ],
                    id: [
                      'Kembangkan tim data, produk, dan keamanan siber untuk mengurangi risiko ketergantungan individu.',
                      'Modernisasi stack legacy sambil menjaga uptime dan komitmen klien.',
                      'Sistematisasi manajemen pengetahuan di kantor-kantor yang tersebar.'
                    ]
                  }).map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </HighlightBox>
              <HighlightBox title={t({ en: 'Elevate analytics & AI', id: 'Tingkatkan analitik & AI' })} color="purple">
                <ul className="list-disc list-inside space-y-1 text-slate-300">
                  {t({
                    en: [
                      'Advance from reactive maintenance to predictive insights and optimization.',
                      'Differentiate with AI-enabled monitoring, anomaly detection, and decision support.',
                      'Align data strategy with security, governance, and client readiness.'
                    ],
                    id: [
                      'Beranjak dari maintenance reaktif menuju insight prediktif dan optimisasi.',
                      'Bedakan diri dengan monitoring berbasis AI, deteksi anomali, dan dukungan keputusan.',
                      'Selaraskan strategi data dengan keamanan, tata kelola, dan kesiapan klien.'
                    ]
                  }).map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </HighlightBox>
            </div>
          </Section>

          <Section title={t({ en: 'Critical success factors', id: 'Faktor keberhasilan kritis' })}>
            <ul className="space-y-2 text-slate-300">
              {t({
                en: [
                  'Build recurring revenue to cushion project volatility and fund R&D.',
                  'Strengthen partnerships (hardware, system integrators, government stakeholders) to extend reach.',
                  'Maintain disciplined prioritisation to avoid drifting back into unfocused project work.',
                  'Embed measurable KPIs and review cadences to steer the transformation.'
                ],
                id: [
                  'Bangun pendapatan berulang untuk meredam volatilitas proyek dan mendanai R&D.',
                  'Perkuat kemitraan (hardware, integrator sistem, pemangku kepentingan pemerintah) untuk memperluas jangkauan.',
                  'Pertahankan prioritisasi disiplin agar tidak kembali ke pekerjaan proyek yang tidak terfokus.',
                  'Tanamkan KPI terukur dan ritme review untuk mengarahkan transformasi.'
                ]
              }).map((item) => (
                <BulletPoint key={item}>{item}</BulletPoint>
              ))}
            </ul>
          </Section>

          <HighlightBox title={t({ en: 'The path forward', id: 'Jalur ke depan' })} color="green">
            <p>
              {t({
                en: "By leaning into its autogate and IoT strengths, addressing resource constraints, and activating new revenue models, Halotec can evolve from a bespoke project specialist into Indonesia's go-to industrial automation platform provider.",
                id: 'Dengan memaksimalkan kekuatan autogate dan IoT, mengatasi keterbatasan sumber daya, dan mengaktifkan model pendapatan baru, Halotec dapat berevolusi dari spesialis proyek kustom menjadi penyedia platform otomasi industri andalan Indonesia.'
              })}
            </p>
            <p>
              {t({
                en: 'Success hinges on disciplined execution of the 2025 reset—balancing innovation with reliability while expanding the ecosystem of clients and partners.',
                id: 'Keberhasilan bergantung pada eksekusi disiplin terhadap reset 2025—menyeimbangkan inovasi dengan keandalan sambil memperluas ekosistem pelanggan dan mitra.'
              })}
            </p>
          </HighlightBox>
        </div>
      )
    }
  ]
}

export const slides = getSlides(defaultLanguage)
