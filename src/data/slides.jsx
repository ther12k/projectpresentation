// Halotec SWOT Presentation - Slide Data and Components

// Helper Components
function StatCard({ number, label }) {
  return (
    <div className="bg-slate-800/60 p-6 rounded-xl border-2 border-blue-500/30 text-center hover:scale-105 transition-transform">
      <div className="text-5xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
        {number}
      </div>
      <div className="text-slate-400 text-sm mt-2 uppercase tracking-wide">
        {label}
      </div>
    </div>
  )
}

function Section({ title, children }) {
  return (
    <div>
      <h3 className="text-3xl font-semibold text-blue-500 mb-4">{title}</h3>
      {children}
    </div>
  )
}

function ProjectCard({ name, desc }) {
  return (
    <div className="bg-slate-800/60 p-5 rounded-xl border-l-4 border-blue-500 mb-3 hover:translate-x-2 transition-transform">
      <div className="font-bold text-blue-400 text-lg mb-2">{name}</div>
      <div className="text-slate-400 text-sm">{desc}</div>
    </div>
  )
}

function Badge({ children }) {
  return (
    <span className="px-4 py-2 bg-blue-500/20 text-blue-400 rounded-full text-sm font-semibold border border-blue-500/30">
      {children}
    </span>
  )
}

function TeamMember({ name, role }) {
  return (
    <div className="bg-slate-800/60 p-5 rounded-xl border-2 border-blue-500/30 mb-3 hover:border-blue-500 transition-colors">
      <div className="font-bold text-white text-lg mb-2">{name}</div>
      <div className="text-slate-400 text-sm">{role}</div>
    </div>
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

const highlightColors = {
  blue: {
    bg: "bg-blue-500/10",
    border: "border-blue-500",
    text: "text-blue-400"
  },
  green: {
    bg: "bg-green-500/10",
    border: "border-green-500",
    text: "text-green-400"
  },
  purple: {
    bg: "bg-purple-500/10",
    border: "border-purple-500",
    text: "text-purple-400"
  },
  orange: {
    bg: "bg-orange-500/10",
    border: "border-orange-500",
    text: "text-orange-400"
  },
  indigo: {
    bg: "bg-indigo-500/10",
    border: "border-indigo-500",
    text: "text-indigo-400"
  },
  emerald: {
    bg: "bg-emerald-500/10",
    border: "border-emerald-500",
    text: "text-emerald-400"
  },
  amber: {
    bg: "bg-amber-500/10",
    border: "border-amber-500",
    text: "text-amber-400"
  }
}

function HighlightBox({ title, children, color = "blue" }) {
  const colorClasses = highlightColors[color] ?? highlightColors.blue

  return (
    <div className={`${colorClasses.bg} border-l-4 ${colorClasses.border} p-5 rounded-xl mb-4 hover:translate-x-1 transition-transform`}>
      <div className={`font-bold ${colorClasses.text} text-lg mb-2`}>{title}</div>
      <div className="text-slate-300 text-sm leading-relaxed space-y-2">{children}</div>
    </div>
  )
}

function SWOTBox({ type, title, items }) {
  const colors = {
    strengths: { border: 'border-green-500', bg: 'bg-green-500/10', text: 'text-green-500' },
    weaknesses: { border: 'border-red-500', bg: 'bg-red-500/10', text: 'text-red-500' },
    opportunities: { border: 'border-blue-500', bg: 'bg-blue-500/10', text: 'text-blue-500' },
    threats: { border: 'border-orange-500', bg: 'bg-orange-500/10', text: 'text-orange-500' }
  }

  const color = colors[type]

  return (
    <div className={`${color.bg} ${color.border} border-2 rounded-xl p-6 overflow-y-auto custom-scrollbar`}>
      <h3 className={`text-2xl font-bold ${color.text} mb-4 pb-3 border-b-2 ${color.border}`}>
        {title}
      </h3>
      <ul className="space-y-2 text-sm text-slate-300">
        {items.map((item, i) => (
          <li key={i} className="relative pl-4">
            <span className={`absolute left-0 ${color.text}`}>●</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

function MarketCard({ title, value, growth, children }) {
  return (
    <div className="bg-slate-800/60 p-6 rounded-xl border-2 border-blue-500/30 hover:border-blue-500 transition-colors">
      <div className="text-blue-400 font-semibold text-lg mb-2">{title}</div>
      <div className="text-4xl font-bold text-white">{value}</div>
      <div className="text-emerald-400 font-semibold mt-2">{growth}</div>
      <p className="text-slate-400 text-sm mt-4 leading-relaxed">{children}</p>
    </div>
  )
}

function PhaseBox({ title, children }) {
  return (
    <div className="bg-slate-800/60 p-6 rounded-xl border-l-4 border-blue-500 space-y-3">
      <div className="text-xl font-semibold text-white">{title}</div>
      <div className="space-y-3 text-slate-300 text-sm leading-relaxed">{children}</div>
    </div>
  )
}

// Slide Data
export const slides = [
  // Slide 1: Title
  {
    showLogo: false,
    render: () => (
      <div className="flex flex-col items-center justify-center h-full text-center">
        <div className="text-slate-500 text-xl tracking-widest uppercase mb-6">
          2025 Strategic Analysis
        </div>
        <h1 className="text-7xl font-extrabold text-white mb-4">
          HALOTEC INDONESIA
        </h1>
        <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent mb-8">
          SWOT Analysis
        </h2>
        <div className="w-40 h-1.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-8"></div>
        <p className="text-2xl text-slate-300 mb-4">
          Autogate & Industrial IoT Solutions
        </p>
        <p className="text-lg text-slate-500">
          Port Automation • Smart Industry • M2M Integration
        </p>
      </div>
    )
  },

  // Slide 2: Company Overview
  {
    showLogo: true,
    header: {
      title: "Company Overview",
      subtitle: "Leading Indonesian port automation & industrial IoT provider"
    },
    render: () => (
      <div className="space-y-8">
        <div className="grid grid-cols-4 gap-6">
          <StatCard number="~50" label="Employees" />
          <StatCard number="3+" label="Major Ports" />
          <StatCard number="59" label="Target Ports (Pelindo)" />
          <StatCard number="100%" label="Turnkey Solutions" />
        </div>

        <Section title="🏆 Major Projects & Clients">
          <ProjectCard
            name="Jakarta International Container Terminal (JICT)"
            desc="Full autogate system deployment with RFID, OCR, CCTV integration and TOS connectivity"
          />
          <ProjectCard
            name="TPK Koja Terminal"
            desc="Automated gate control system for container terminal operations"
          />
          <ProjectCard
            name="IPC (Pelindo) Terminals"
            desc="Multi-site port automation and checkpoint control systems"
          />
          <ProjectCard
            name="Indocement Citereup Plant"
            desc="Industrial M2M truck scale reader solution integrating weighbridge sensors"
          />
        </Section>

        <Section title="💼 Core Capabilities">
          <div className="flex flex-wrap gap-3">
            {[
              "Multi-Technology Integration", "RFID Systems", "OCR & Computer Vision",
              "CCTV & Security", "TOS Integration", "Sensor Fusion",
              "M2M Communication", "Industrial IoT", "Custom Software", "24/7 Support"
            ].map(skill => (
              <Badge key={skill}>{skill}</Badge>
            ))}
          </div>
        </Section>
      </div>
    )
  },

  // Slide 3: M2M Team
  {
    showLogo: true,
    header: {
      title: "M2M Team Structure",
      subtitle: "Focused division driving autogate innovation"
    },
    render: () => (
      <div className="grid grid-cols-2 gap-8 h-full">
        <div>
          <Section title="👥 Team Composition (5 Members)">
            <TeamMember name="👨‍💼 M2M Manager" role="Leadership, development strategy, 24/7 coordination, R&D integration" />
            <TeamMember name="👨‍💻 David" role="Database architect, IoT troubleshooting, backup support" />
            <TeamMember name="⚙️ Deja" role="Backend/core system engineer (jQuery/HTML legacy)" />
            <TeamMember name="🎨 Iqbal" role="Modern frontend engineer (React specialist)" />
            <TeamMember name="🔧 Isra" role="On-site field support at JICT/Koja (Joingate)" />
          </Section>
        </div>
        <div>
          <Section title="🎯 Key Responsibilities">
            <ul className="space-y-3 text-slate-300">
              <BulletPoint>Autogate system software architecture</BulletPoint>
              <BulletPoint>R&D OCR/IoT integration into production</BulletPoint>
              <BulletPoint>Real-time dashboards with TOS connectivity</BulletPoint>
              <BulletPoint>24/7 maintenance coordination</BulletPoint>
              <BulletPoint>Technical consulting & client relations</BulletPoint>
              <BulletPoint>Multi-sensor data fusion (RFID, OCR, CCTV)</BulletPoint>
            </ul>
          </Section>
        </div>
      </div>
    )
  },

  // Slide 4: SWOT Overview
  {
    showLogo: true,
    header: {
      title: "SWOT Overview",
      subtitle: "Strategic position in 2025"
    },
    render: () => (
      <div className="grid grid-cols-2 grid-rows-2 gap-6 h-full">
        <SWOTBox
          type="strengths"
          title="💪 Strengths"
          items={[
            "Proven track record at JICT, TPK Koja, IPC",
            "Industrial M2M integration expertise",
            "Multi-technology sensor fusion (RFID, OCR, CCTV)",
            "End-to-end turnkey solutions",
            "TOS and customs system integration",
            "Mission-critical 24/7 operations"
          ]}
        />
        <SWOTBox
          type="weaknesses"
          title="⚠️ Weaknesses"
          items={[
            "Limited market diversification",
            "Scale constraints (~50 employees)",
            "Project-based revenue dependency",
            "Low brand visibility outside niche",
            "M2M team overextended (5 people)",
            "Legacy technology debt",
            "Limited AI/ML capabilities"
          ]}
        />
        <SWOTBox
          type="opportunities"
          title="🚀 Opportunities"
          items={[
            "Smart home: $1.3B → $6.89B by 2030",
            "Pelindo's 59-port expansion",
            "Industry 4.0 initiatives",
            "100 Smart Cities program",
            "AI-powered predictive maintenance",
            "Residential autogate market",
            "SaaS platform development"
          ]}
        />
        <SWOTBox
          type="threats"
          title="⚡ Threats"
          items={[
            "Global automation firm competition",
            "Rapid technology evolution",
            "Economic downturns",
            "Client concentration risk",
            "Cybersecurity vulnerabilities",
            "Team burnout risk",
            "Key person dependency"
          ]}
        />
      </div>
    )
  },

  // Slide 5: Strengths Detail
  {
    showLogo: true,
    header: {
      title: "💪 Core Strengths",
      subtitle: "Competitive advantages in port automation"
    },
    render: () => (
      <div className="space-y-6">
        <HighlightBox title="🏆 Proven Track Record in Commercial Autogate Systems">
          <p>
            Successfully implemented integrated automatic gate solutions at Indonesia&apos;s busiest ports including JICT,
            TPK Koja, and IPC terminals. Delivered complete turnkey solutions encompassing software, hardware,
            installation, and ongoing maintenance.
          </p>
          <p>Demonstrated reliability in high-volume, mission-critical environments where downtime is not an option.</p>
        </HighlightBox>
        <HighlightBox title="🏭 Industrial-Grade M2M Integration Expertise">
          <p>
            Proven capability to connect and automate heavy industrial equipment through M2M systems. The Indocement truck
            scale reader deployment showcases rugged IoT solutions in demanding industrial settings.
          </p>
          <p>
            Integrates weighbridge sensors with enterprise systems while meeting strict accuracy and durability
            requirements in cement plant operations.
          </p>
        </HighlightBox>
        <HighlightBox title="🔗 Multi-Technology Control and Sensor Fusion">
          <p>
            Unique ability to combine multiple identification and sensing technologies (RFID, OCR, CCTV, sensors) for
            real-time gate automation.
          </p>
          <p>
            Sensor fusion ensures higher accuracy and efficiency by simultaneously validating RFID, OCR, imagery, and
            sensor inputs.
          </p>
        </HighlightBox>
        <HighlightBox title="🛠️ End-to-End System Integration Capability">
          <p>
            Full-stack solution provider from custom software development and hardware integration to system interfacing
            and 24/7 support.
          </p>
          <p>
            Successfully interfaces with Terminal Operating Systems (TOS) and customs databases, acting as a single
            accountable vendor that reduces coordination overhead and integration risks.
          </p>
        </HighlightBox>
      </div>
    )
  },

  // Slide 6: Weaknesses & Challenges
  {
    showLogo: true,
    header: {
      title: "⚠️ Key Weaknesses",
      subtitle: "Areas requiring strategic attention"
    },
    render: () => (
      <div className="space-y-6">
        <HighlightBox title="🎯 Limited Market Diversification" color="orange">
          <p>
            Business heavily concentrated in port logistics and industrial automation. Dependency on infrastructure
            project cycles increases vulnerability to slowdowns in core sectors.
          </p>
          <p>Few alternative revenue streams to cushion against industry-specific downturns.</p>
        </HighlightBox>
        <HighlightBox title="📊 Scale and Resource Constraints" color="orange">
          <p>
            As a ~50-employee company, Halotec faces capacity limitations versus larger competitors. The five-person M2M
            team manages development, support, R&D integration, and client relations.
          </p>
          <p>Executing multiple large projects or expansion initiatives stretches resources thin.</p>
        </HighlightBox>
        <HighlightBox title="💰 Project-Based Revenue Dependence" color="orange">
          <p>
            Revenues primarily come from one-off project contracts plus limited maintenance services, leading to uneven
            cash flow and planning challenges.
          </p>
          <p>Delays in new projects significantly impact financial performance without recurring revenue buffers.</p>
        </HighlightBox>
        <HighlightBox title="📢 Low Brand Visibility Outside Core Niche" color="orange">
          <p>
            Despite strong port references, global recognition and presence in adjacent tech domains remain limited. This
            can hamper talent attraction and expansion into new industries.
          </p>
        </HighlightBox>
        <HighlightBox title="⏳ Legacy Technology Debt & Limited AI Capabilities" color="orange">
          <p>
            M2M team maintains jQuery/HTML-based systems that slow modern dashboard development. Advanced analytics and ML
            expertise are limited.
          </p>
          <p>Operations remain reactive, missing opportunities to leverage rich operational data for predictive insights.</p>
        </HighlightBox>
      </div>
    )
  },

  // Slide 7: Market Opportunities
  {
    showLogo: true,
    header: {
      title: "🚀 Major Opportunities",
      subtitle: "Growth vectors for 2025-2030"
    },
    render: () => (
      <div className="space-y-6">
        <MarketCard
          title="📱 Smart Home & Residential Autogate Market"
          value="$1.3B → $6.89B"
          growth="26.8% CAGR through 2030"
        >
          Untapped potential to adapt port automation technology for residential estates, gated communities, and smart
          home security. Growing demand for IoT-based convenience presents significant new revenue streams.
        </MarketCard>

        <HighlightBox title="🚢 Nationwide Port Automation Expansion">
          <p>
            Pelindo is accelerating modernization with plans for 59 ports operating automatic gates. Leverage JICT/Koja
            success to win contracts at secondary and tertiary ports nationwide.
          </p>
          <p>
            Additional revenue from analytics, traffic management, and maintenance services as autogate infrastructure
            expands.
          </p>
        </HighlightBox>

        <HighlightBox title="🏭 Industry 4.0 & IoT Adoption in Enterprises">
          <p>
            Government initiatives such as Making Indonesia 4.0 and 100 Smart Cities drive automation investment.
            Opportunities span smart factories, warehouses, and asset tracking.
          </p>
          <p>Halotec can position as the local Industrial IoT champion delivering integrated solutions.</p>
        </HighlightBox>

        <HighlightBox title="🤝 Strategic Partnerships & Product Development">
          <p>
            Form alliances with global equipment manufacturers and IT integrators to access larger bids and new markets.
          </p>
          <p>
            Standardize autogate solutions into products or SaaS offerings, creating scalable recurring revenue streams.
          </p>
        </HighlightBox>

        <HighlightBox title="🤖 AI-Powered Predictive Maintenance & Analytics">
          <p>
            Transition from reactive to predictive operations with ML models for anomaly detection and optimization.
            Analyze historical data to prevent downtime and offer premium analytics tiers.
          </p>
        </HighlightBox>
      </div>
    )
  },

  // Slide 8: Threats & Risks
  {
    showLogo: true,
    header: {
      title: "⚡ Critical Threats",
      subtitle: "Risks requiring mitigation strategies"
    },
    render: () => (
      <div className="space-y-6">
        <HighlightBox title="🏆 Intensifying Competition from Global Players" color="purple">
          <p>
            International automation firms and state-owned enterprises possess greater resources and established
            reputations. Standardization on global vendors could limit Halotec in major tenders.
          </p>
          <p>Local competitors are also emerging, increasing pricing pressure and innovation demands.</p>
        </HighlightBox>
        <HighlightBox title="⚡ Technological Evolution and Obsolescence Risk" color="purple">
          <p>
            Rapid advances in AI computer vision, RFID, and blockchain may redefine industry standards. Falling behind on
            R&D risks product relevance.
          </p>
        </HighlightBox>
        <HighlightBox title="📉 Economic and Policy Uncertainties" color="purple">
          <p>
            Capital-intensive port projects are sensitive to economic cycles and policy changes. Procurement regulation
            shifts or funding cuts could stall opportunities.
          </p>
        </HighlightBox>
        <HighlightBox title="👤 Client Dependency and Execution Risks" color="purple">
          <p>
            A handful of large clients account for significant revenue. Project delays or failures at high-profile sites
            could damage reputation and financial stability.
          </p>
        </HighlightBox>
        <HighlightBox title="🔒 Cybersecurity Vulnerabilities" color="purple">
          <p>
            Integrated IoT sensors, OCR cameras, and TOS connections expand the attack surface. Ports are high-value
            targets for cyber threats, demanding dedicated security capabilities.
          </p>
        </HighlightBox>
        <HighlightBox title="😓 Team Burnout and Key Person Dependency" color="purple">
          <p>
            Persistent 24/7 demands strain the small M2M team. Loss of key personnel would disrupt operations due to deep
            domain expertise requirements.
          </p>
        </HighlightBox>
      </div>
    )
  },

  // Slide 9: Strategic Recommendations
  {
    showLogo: true,
    header: {
      title: "🗺️ Strategic Roadmap",
      subtitle: "Phased transformation strategy 2025-2028"
    },
    render: () => (
      <div className="space-y-6">
        <PhaseBox title="⚡ Phase 1: Immediate Actions (0-6 months)">
          <div>
            <div className="text-blue-300 font-semibold uppercase tracking-wide text-xs">M2M Team Enhancements</div>
            <ul className="space-y-2">
              <BulletPoint>Deploy basic AI anomaly detection on critical autogate metrics.</BulletPoint>
              <BulletPoint>Implement MCP-powered automated reporting to reduce manual workload.</BulletPoint>
              <BulletPoint>Adopt AI pair-programming tools to boost productivity and documentation.</BulletPoint>
              <BulletPoint>Create automated alert classification to reduce false alarms.</BulletPoint>
            </ul>
          </div>
          <div>
            <div className="text-blue-300 font-semibold uppercase tracking-wide text-xs">Business Development</div>
            <ul className="space-y-2">
              <BulletPoint>Launch market research for residential autogate opportunities.</BulletPoint>
              <BulletPoint>Develop case studies from JICT, Koja, and IPC success stories.</BulletPoint>
              <BulletPoint>Identify 3-5 target ports in the Pelindo expansion pipeline.</BulletPoint>
              <BulletPoint>Explore partnership discussions with equipment vendors.</BulletPoint>
            </ul>
          </div>
        </PhaseBox>

        <PhaseBox title="🎯 Phase 2: Foundation Building (6-18 months)">
          <div>
            <div className="text-blue-300 font-semibold uppercase tracking-wide text-xs">Technical Transformation</div>
            <ul className="space-y-2">
              <BulletPoint>Complete React migration of legacy front-end systems.</BulletPoint>
              <BulletPoint>Launch predictive maintenance for autogate hardware.</BulletPoint>
              <BulletPoint>Build AI-powered client self-service and monitoring portals.</BulletPoint>
              <BulletPoint>Implement automated TOS integration health monitoring.</BulletPoint>
              <BulletPoint>Establish cybersecurity protocols and regular assessments.</BulletPoint>
            </ul>
          </div>
          <div>
            <div className="text-blue-300 font-semibold uppercase tracking-wide text-xs">Team & Capacity</div>
            <ul className="space-y-2">
              <BulletPoint>Expand the M2M team with data engineering and ML specialists.</BulletPoint>
              <BulletPoint>Hire a dedicated cybersecurity specialist shared across the company.</BulletPoint>
              <BulletPoint>Develop comprehensive training and knowledge transfer programs.</BulletPoint>
            </ul>
          </div>
          <div>
            <div className="text-blue-300 font-semibold uppercase tracking-wide text-xs">Market Expansion</div>
            <ul className="space-y-2">
              <BulletPoint>Pilot residential autogate solutions in 1-2 housing complexes.</BulletPoint>
              <BulletPoint>Win 2-3 new port contracts leveraging Pelindo expansion.</BulletPoint>
              <BulletPoint>Standardize autogate offerings into productized packages.</BulletPoint>
              <BulletPoint>Secure 1-2 strategic partnerships with global vendors.</BulletPoint>
            </ul>
          </div>
        </PhaseBox>

        <PhaseBox title="🌟 Phase 3: Scale & Differentiation (18-36 months)">
          <div>
            <div className="text-blue-300 font-semibold uppercase tracking-wide text-xs">Product Innovation</div>
            <ul className="space-y-2">
              <BulletPoint>Launch premium AI analytics service tiers for ports.</BulletPoint>
              <BulletPoint>Release a SaaS autogate platform for smaller terminals.</BulletPoint>
              <BulletPoint>Develop residential autogate product lines.</BulletPoint>
              <BulletPoint>Create smart factory and warehouse automation offerings.</BulletPoint>
            </ul>
          </div>
          <div>
            <div className="text-blue-300 font-semibold uppercase tracking-wide text-xs">Market Position</div>
            <ul className="space-y-2">
              <BulletPoint>Establish Halotec as Indonesia&apos;s leading IIoT provider.</BulletPoint>
              <BulletPoint>Win 10+ new port contracts across major and secondary ports.</BulletPoint>
              <BulletPoint>Grow non-port revenue to 30%+ of total revenue.</BulletPoint>
              <BulletPoint>Increase recurring revenue share to 25%+.</BulletPoint>
              <BulletPoint>Position the M2M division as an AI competency center.</BulletPoint>
            </ul>
          </div>
          <div>
            <div className="text-blue-300 font-semibold uppercase tracking-wide text-xs">Expansion</div>
            <ul className="space-y-2">
              <BulletPoint>Explore regional expansion across Southeast Asia.</BulletPoint>
              <BulletPoint>Develop reseller and partner networks for residential products.</BulletPoint>
            </ul>
          </div>
        </PhaseBox>
      </div>
    )
  },

  // Slide 10: Success Metrics
  {
    showLogo: true,
    header: {
      title: "📈 Success Metrics & KPIs",
      subtitle: "Measuring transformation progress"
    },
    render: () => (
      <div className="space-y-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          <StatCard number="40%" label="Time Saved (Reporting)" />
          <StatCard number="50%" label="Reduced After-Hours Calls" />
          <StatCard number="200%" label="MTBF Increase Target" />
          <StatCard number="85%" label="AI Prediction Accuracy" />
          <StatCard number="99.9%" label="System Uptime Goal" />
          <StatCard number="25%" label="Client Satisfaction ↑" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Section title="🎯 Operational KPIs">
            <ul className="space-y-2 text-slate-300">
              <BulletPoint>Mean Time Between Failures (MTBF): +200%.</BulletPoint>
              <BulletPoint>Emergency support calls reduced by 50%.</BulletPoint>
              <BulletPoint>Issue prediction accuracy reaching 85% within 6 months.</BulletPoint>
              <BulletPoint>Technical debt reduction: 80% code migrated in 12 months.</BulletPoint>
              <BulletPoint>Team productivity: +40% features per sprint.</BulletPoint>
              <BulletPoint>Documentation coverage: 90% of critical systems.</BulletPoint>
              <BulletPoint>Client NPS score improvement of +25 points.</BulletPoint>
            </ul>
          </Section>
          <Section title="💰 Business KPIs">
            <ul className="space-y-2 text-slate-300">
              <BulletPoint>Secure 10+ new port contracts within 24 months.</BulletPoint>
              <BulletPoint>Achieve 30% revenue from non-port sources by Year 3.</BulletPoint>
              <BulletPoint>Reach 25% recurring revenue share by Year 3.</BulletPoint>
              <BulletPoint>Deploy residential autogate pilots in 5 complexes by Year 1.</BulletPoint>
              <BulletPoint>Establish 2-3 strategic partnerships by Year 2.</BulletPoint>
              <BulletPoint>Expand team headcount by 5-7 roles by Year 2.</BulletPoint>
              <BulletPoint>Reach 40% market share across Indonesian ports.</BulletPoint>
            </ul>
          </Section>
        </div>

        <Section title="🎁 Value Creation Impact">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <HighlightBox title="For Clients" color="green">
              <ul className="list-disc list-inside space-y-1 text-slate-300">
                <li>Proactive issue prevention and reduced downtime.</li>
                <li>Data-driven operational insights and planning.</li>
                <li>Higher throughput with predictive maintenance.</li>
                <li>Enhanced security and compliance confidence.</li>
              </ul>
            </HighlightBox>
            <HighlightBox title="For Halotec" color="emerald">
              <ul className="list-disc list-inside space-y-1 text-slate-300">
                <li>Competitive differentiation with AI capabilities.</li>
                <li>Premium service tiers and recurring revenue.</li>
                <li>Stronger client retention and loyalty.</li>
                <li>Reduced operational costs through automation.</li>
              </ul>
            </HighlightBox>
          </div>
        </Section>
      </div>
    )
  },

  // Slide 11: Key Takeaways
  {
    showLogo: true,
    header: {
      title: "💡 Key Takeaways",
      subtitle: "Strategic imperatives for 2025-2028"
    },
    render: () => (
      <div className="space-y-6">
        <Section title="📍 Current Position: Solid Foundation">
          <ul className="space-y-2 text-slate-300">
            <BulletPoint>
              <span className="font-semibold">Market leader</span> in Indonesian port automation with proven deployments.
            </BulletPoint>
            <BulletPoint>
              <span className="font-semibold">Technical excellence</span> in multi-technology integration and M2M systems.
            </BulletPoint>
            <BulletPoint>
              <span className="font-semibold">Strong client relationships</span> with major port operators and industrial firms.
            </BulletPoint>
            <BulletPoint>
              <span className="font-semibold">Challenge:</span> Resource constraints and reactive operations limit growth potential.
            </BulletPoint>
          </ul>
        </Section>

        <Section title="🎯 Strategic Imperatives">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-4">
              <HighlightBox title="1. Leverage Core Strengths" color="green">
                <ul className="list-disc list-inside space-y-1 text-slate-300">
                  <li>Capitalize on port automation expertise and success stories.</li>
                  <li>Pursue Pelindo&apos;s 59-port expansion agenda.</li>
                  <li>Maintain technical excellence with continuous innovation.</li>
                </ul>
              </HighlightBox>
              <HighlightBox title="2. Diversify Markets" color="blue">
                <ul className="list-disc list-inside space-y-1 text-slate-300">
                  <li>Enter residential autogate market worth $6.89B by 2030.</li>
                  <li>Expand into smart factories and warehouses.</li>
                  <li>Develop standardized products and recurring revenue streams.</li>
                </ul>
              </HighlightBox>
            </div>
            <div className="space-y-4">
              <HighlightBox title="3. Transform with AI" color="purple">
                <ul className="list-disc list-inside space-y-1 text-slate-300">
                  <li>Shift from reactive to predictive operations with ML.</li>
                  <li>Launch premium analytics services for high-value clients.</li>
                  <li>Differentiated positioning against traditional competitors.</li>
                </ul>
              </HighlightBox>
              <HighlightBox title="4. Build Capacity" color="amber">
                <ul className="list-disc list-inside space-y-1 text-slate-300">
                  <li>Expand the M2M team and reduce key person dependencies.</li>
                  <li>Migrate legacy systems and modernize tech stack.</li>
                  <li>Strengthen cybersecurity posture across offerings.</li>
                </ul>
              </HighlightBox>
            </div>
          </div>
        </Section>

        <HighlightBox
          title="🚀 The Opportunity"
          color="green"
        >
          <p>
            Halotec stands at an inflection point. With proven port automation expertise, Indonesia&apos;s accelerating
            digital transformation, and explosive smart home market growth, the company can transform from a project-based
            specialist into a diversified IIoT platform provider.
          </p>
          <p>
            The next 36 months will determine whether Halotec becomes Indonesia&apos;s Industrial IoT champion or remains a
            capable but constrained niche player.
          </p>
        </HighlightBox>

        <Section title="✅ Critical Success Factors">
          <ul className="space-y-2 text-slate-300">
            <BulletPoint>
              <span className="font-semibold">Start smart:</span> Prioritize high-impact AI implementations with immediate ROI.
            </BulletPoint>
            <BulletPoint>
              <span className="font-semibold">Expand strategically:</span> Add 5-7 headcount over 24 months focusing on data, ML, and security.
            </BulletPoint>
            <BulletPoint>
              <span className="font-semibold">Balance innovation with reliability:</span> Maintain 99.9% uptime while modernizing systems.
            </BulletPoint>
            <BulletPoint>
              <span className="font-semibold">Diversify revenue:</span> Target 30% non-port revenue by Year 3 to reduce concentration risk.
            </BulletPoint>
            <BulletPoint>
              <span className="font-semibold">Build partnerships:</span> Leverage global vendor relationships for scale and reach.
            </BulletPoint>
            <BulletPoint>
              <span className="font-semibold">Measure relentlessly:</span> Track KPIs monthly and adapt strategy based on data.</BulletPoint>
          </ul>
        </Section>
      </div>
    )
  }
]
