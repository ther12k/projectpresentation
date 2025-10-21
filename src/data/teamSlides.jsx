import { defaultLanguage } from './slides'

function SlideContainer({ children }) {
  return (
    <div className="flex flex-col gap-8 h-full">
      {children}
    </div>
  )
}

function HighlightBox({ title, children }) {
  return (
    <div className="bg-slate-900/70 border border-blue-500/30 rounded-2xl p-6 shadow-lg hover:border-blue-400/60 transition-colors">
      <h3 className="text-xl font-semibold text-blue-300 mb-2">{title}</h3>
      <p className="text-slate-300 text-sm leading-relaxed">{children}</p>
    </div>
  )
}

function PriorityBox({ title, items }) {
  return (
    <div className="bg-slate-900/70 border-l-4 border-blue-500 rounded-2xl p-6">
      <h3 className="text-xl font-semibold text-blue-300 mb-3">{title}</h3>
      <ul className="text-sm text-slate-300 space-y-2">
        {items.map((item) => (
          <li key={item} className="relative pl-5">
            <span className="absolute left-0 text-blue-400">•</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

function BulletList({ items }) {
  return (
    <ul className="text-sm text-slate-300 space-y-2">
      {items.map((item) => (
        <li key={item} className="relative pl-6">
          <span className="absolute left-0 text-blue-400">▸</span>
          {item}
        </li>
      ))}
    </ul>
  )
}

function SWOTGrid({ data }) {
  const tone = {
    strengths: 'border-emerald-500 text-emerald-300',
    weaknesses: 'border-rose-500 text-rose-300',
    opportunities: 'border-blue-500 text-blue-300',
    threats: 'border-amber-500 text-amber-300'
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full">
      {data.map((item) => (
        <div
          key={item.title}
          className={`bg-slate-900/70 border-2 rounded-2xl p-5 space-y-3 ${tone[item.type]} shadow-lg`}
        >
          <h3 className="text-xl font-bold">{item.title}</h3>
          <ul className="text-sm text-slate-200 space-y-2">
            {item.items.map((value) => (
              <li key={value} className="relative pl-5">
                <span className="absolute left-0 text-current">•</span>
                {value}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

export function getSlides(language = defaultLanguage) {
  void language

  const teamMembers = [
    {
      name: 'M2M Manager (Leader)',
      role: 'Autogate development, 24/7 support coordination, R&D integration, client relations'
    },
    {
      name: 'David',
      role: 'Database management, IoT troubleshooting, client support backup'
    },
    {
      name: 'Deja',
      role: 'Backend/core system engineer (legacy jQuery/HTML front-end)'
    },
    {
      name: 'Iqbal',
      role: 'Modern front-end engineer (React)'
    },
    {
      name: 'Isra',
      role: 'On-site Autogate and OCR support at JICT/Koja (Joingate)'
    }
  ]

  return [
    {
      navTitle: 'Title',
      showLogo: false,
      render: () => (
        <div className="flex flex-col items-center justify-center h-full text-center space-y-6">
          <h1 className="text-6xl font-extrabold text-white">SWOT Analysis</h1>
          <h2 className="text-4xl font-bold text-blue-300">M2M</h2>
          <p className="text-lg text-slate-300">
            Halotec Indonesia · Autogate & IoT Solutions
          </p>
          <div className="w-32 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
        </div>
      )
    },
    {
      navTitle: 'Team',
      showLogo: true,
      header: {
        title: 'Team Composition',
        subtitle: 'Small but comprehensive coverage'
      },
      render: () => (
        <SlideContainer>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="bg-slate-900/80 border-l-4 border-blue-500 rounded-2xl p-5"
              >
                <div className="text-lg font-semibold text-white">{member.name}</div>
                <div className="text-sm text-slate-300 mt-2">{member.role}</div>
              </div>
            ))}
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-blue-300 mb-3">Core Responsibilities</h3>
            <BulletList
              items={[
                'Autogate system software development and architecture',
                'Integration of R&D OCR/IoT outputs into workflows',
                'Creating dashboards with TOS integration',
                '24/7 maintenance support coordination',
                'Client-facing relations and technical consulting'
              ]}
            />
          </div>
        </SlideContainer>
      )
    },
    {
      navTitle: 'SWOT Grid',
      showLogo: true,
      header: {
        title: 'SWOT Overview',
        subtitle: 'Strategic analysis at a glance'
      },
      render: () => (
        <SWOTGrid
          data={[
            {
              type: 'strengths',
              title: 'Strengths',
              items: [
                'Integration excellence between R&D innovation and operations',
                'Full-stack team covering complete Autogate ecosystem',
                'Proven operational reliability at major terminals',
                'Strong client trust and direct communication',
                'Dashboard and TOS integration expertise'
              ]
            },
            {
              type: 'weaknesses',
              title: 'Weaknesses',
              items: [
                'Extreme resource constraints for scope of responsibility',
                'Legacy technology debt slowing development',
                'Manager role overextension across too many domains',
                'Limited data analysis and AI capabilities',
                'Insufficient documentation and knowledge transfer',
                'Reactive support model without preventative systems'
              ]
            },
            {
              type: 'opportunities',
              title: 'Opportunities',
              items: [
                'AI-powered predictive maintenance for Autogate systems',
                'MCP for automated reporting and operations',
                'Intelligent dashboard analytics using existing data',
                'AI-assisted integration workflow for R&D outputs',
                'Automated support triage and client self-service',
                'Code modernization with AI tools'
              ]
            },
            {
              type: 'threats',
              title: 'Threats',
              items: [
                'Mission-critical system failure and reputation damage',
                'Competitive solutions with built-in AI capabilities',
                'Key person dependency and knowledge concentration',
                'Cybersecurity vulnerabilities in expanding system',
                'Burnout and attrition from unsustainable workload',
                'Inability to keep pace with technology evolution'
              ]
            }
          ]}
        />
      )
    },
    {
      navTitle: 'Strengths',
      showLogo: true,
      header: {
        title: 'Key Strengths',
        subtitle: 'What we excel at'
      },
      render: () => (
        <SlideContainer>
          <HighlightBox title="Integration Excellence Between R&D and Operations">
            Successfully bridging OCR/IoT innovations with operational Autogate systems so that new technologies
            land as functional, value-adding capabilities.
          </HighlightBox>
          <HighlightBox title="Full-Stack Team Coverage">
            Comprehensive coverage across database and IoT (David), backend systems (Deja), modern UI development (Iqbal),
            and on-site operations (Isra) ensures every layer of the Autogate ecosystem is owned.
          </HighlightBox>
          <HighlightBox title="Operational Reliability at Major Terminals">
            Proven ability to maintain 24/7 Autogate systems across JICT and Koja/Joingate with disciplined operations and
            rapid incident response.
          </HighlightBox>
          <HighlightBox title="Client Trust and Direct Communication">
            Strong client relationships built on direct engagement and deep understanding of operational realities.
          </HighlightBox>
          <HighlightBox title="Dashboard & TOS Integration Expertise">
            Established competency in building real-time monitoring dashboards that pull from TOS, OCR, IoT, and support systems.
          </HighlightBox>
        </SlideContainer>
      )
    },
    {
      navTitle: 'Weaknesses',
      showLogo: true,
      header: {
        title: 'Critical Weaknesses',
        subtitle: 'Areas requiring immediate attention'
      },
      render: () => (
        <SlideContainer>
          <HighlightBox title="Extreme Resource Constraints">
            A four-person team simultaneously handling development, 24/7 support, R&D integration, and client management
            drives unsustainable workloads and risk of failure.
          </HighlightBox>
          <HighlightBox title="Legacy Technology Debt">
            Reliance on jQuery/HTML front-end stacks slows dashboard modernization and complicates integration of new tooling.
          </HighlightBox>
          <HighlightBox title="Manager Role Overextension">
            The M2M manager spans architecture, development oversight, maintenance coordination, R&D integration, client meetings,
            and team management—leaving little bandwidth for strategic execution.
          </HighlightBox>
          <HighlightBox title="Limited Data & AI Capability">
            The team lacks deep experience in analytics, machine learning, automated monitoring, and predictive systems required for transformation.
          </HighlightBox>
          <HighlightBox title="Reactive Support Model">
            Support remains reactive with limited automated monitoring, predictive alerts, or systematic prevention, keeping the team on constant standby.
          </HighlightBox>
        </SlideContainer>
      )
    },
    {
      navTitle: 'AI Opportunities',
      showLogo: true,
      header: {
        title: 'Top AI-Powered Opportunities',
        subtitle: 'Transform from reactive to predictive'
      },
      render: () => (
        <SlideContainer>
          <HighlightBox title="AI-Powered Predictive Maintenance">
            Analyze historical logs and transaction patterns to forecast issues and eliminate downtime, shifting the team from firefighting to proactive management.
          </HighlightBox>
          <HighlightBox title="MCP for Automated Reporting">
            Deploy intelligent agents that auto-generate operational reports and answer client questions, freeing 30–40% of manager time.
          </HighlightBox>
          <HighlightBox title="Intelligent Dashboard Analytics">
            Surface actionable insights from operational data to uncover bottlenecks, efficiency gaps, and optimization opportunities.
          </HighlightBox>
          <HighlightBox title="AI-Assisted Integration Workflow">
            Use AI code generation to craft integration adapters for new R&D sensors quickly, reducing time-to-production.
          </HighlightBox>
          <HighlightBox title="Automated Support Triage">
            Build AI-powered first-tier support that reduces after-hours escalations by 40–50% and creates structured knowledge capture.
          </HighlightBox>
        </SlideContainer>
      )
    },
    {
      navTitle: 'Threats',
      showLogo: true,
      header: {
        title: 'Major Threats',
        subtitle: 'Risks to address'
      },
      render: () => (
        <SlideContainer>
          <HighlightBox title="Mission-Critical System Failure">
            Downtime at Autogate sites directly halts terminal operations, damages reputation, and introduces potential contract penalties.
          </HighlightBox>
          <HighlightBox title="Competitive AI-Enabled Solutions">
            Global and local competitors launch AI-native offerings with larger R&D budgets that can outpace innovation.
          </HighlightBox>
          <HighlightBox title="Key Person Dependency">
            Critical knowledge concentrated among specific individuals increases fragility and risk during transitions or incidents.
          </HighlightBox>
          <HighlightBox title="Cybersecurity Exposure">
            Expanding IoT sensors and TOS integrations broaden the attack surface without dedicated cybersecurity expertise.
          </HighlightBox>
          <HighlightBox title="Burnout and Attrition">
            Sustained 24/7 on-call pressure and overwhelming scope elevate the risk of burnout, attrition, and cascading knowledge loss.
          </HighlightBox>
        </SlideContainer>
      )
    },
    {
      navTitle: 'Roadmap',
      showLogo: true,
      header: {
        title: 'Strategic Recommendations',
        subtitle: 'Phased implementation roadmap'
      },
      render: () => (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-full">
          <PriorityBox
            title="Immediate Priorities (0-3 months)"
            items={[
              'Deploy basic AI anomaly detection on critical metrics',
              'Implement MCP-powered daily operational reports',
              'Adopt AI pair programming tools for the entire team',
              'Create automated alert classification workflows',
              'Document critical integration patterns'
            ]}
          />
          <PriorityBox
            title="Mid-term Goals (3-12 months)"
            items={[
              'Launch predictive maintenance system',
              'Complete React migration using AI-assisted refactoring',
              'Build AI-powered client self-service portal',
              'Implement automated TOS integration health monitoring',
              'Add 1–2 team members with data/ML expertise'
            ]}
          />
          <PriorityBox
            title="Long-term Vision (1-3 years)"
            items={[
              'Position Autogate as an AI-enhanced platform with predictive analytics',
              'Develop premium AI analytics service tiers for clients',
              'Establish M2M as Halotec’s AI competency center',
              'Win new contracts emphasizing AI-driven operational intelligence'
            ]}
          />
        </div>
      )
    },
    {
      navTitle: 'Takeaways',
      showLogo: true,
      header: {
        title: 'Key Takeaways',
        subtitle: 'Summary and next steps'
      },
      render: () => (
        <SlideContainer>
          <div>
            <h3 className="text-2xl font-semibold text-blue-300 mb-3">Current Position</h3>
            <BulletList
              items={[
                'Strong technical capabilities and client trust',
                'Unsustainable workload and resource constraints',
                'Reactive operational model limiting growth potential'
              ]}
            />
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-blue-300 mb-3">Strategic Direction</h3>
            <BulletList
              items={[
                'Transform operations from reactive to predictive using AI',
                'Leverage AI to multiply team productivity and throughput',
                'Position M2M as an AI-enhanced solution provider',
                'Reduce key-person dependency through automation and documentation'
              ]}
            />
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-blue-300 mb-3">Critical Success Factors</h3>
            <BulletList
              items={[
                'Start with focused high-impact AI implementations',
                'Secure team expansion to support AI initiatives',
                'Balance innovation initiatives with operational stability',
                'Maintain strong client relationships during transformation'
              ]}
            />
          </div>
        </SlideContainer>
      )
    }
  ]
}
