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

export const slides = [
  {
    navTitle: 'Overview',
    showLogo: false,
    render: () => (
      <div className="flex flex-col items-center justify-center h-full text-center space-y-6">
        <div className="text-slate-500 text-xl tracking-widest uppercase">
          2025 strategy reset
        </div>
        <h1 className="text-6xl md:text-7xl font-extrabold text-white">
          HALOTEC INDONESIA
        </h1>
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
          SWOT ANALYSIS
        </h2>
        <div className="w-40 h-1.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
        <p className="text-xl md:text-2xl text-slate-300">
          Refocusing on industrial autogate and IoT-driven automation
        </p>
        <p className="text-sm md:text-base text-slate-400 max-w-2xl">
          Prepared for internal alignment and stakeholder briefings as Halotec transitions from bespoke ERP projects to scaled automation platforms.
        </p>
      </div>
    )
  },
  {
    navTitle: 'SWOT Snapshot',
    showLogo: true,
    header: {
      title: 'SWOT Snapshot 2025',
      subtitle: 'Halotec at-a-glance after the strategic reset'
    },
    render: () => (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full">
        <SWOTBox
          type="strengths"
          title="Strengths"
          items={[
            'Flagship autogate references at JICT, KOJA, and Pelindo terminals',
            'Deep sensor fusion and M2M integration capabilities',
            'End-to-end delivery spanning hardware, firmware, and cloud',
            'Retained ERP customization know-how for complementary work',
            'Credibility built in high-stakes industrial environments'
          ]}
        />
        <SWOTBox
          type="weaknesses"
          title="Weaknesses"
          items={[
            'Market focus narrows to industrial autogate and logistics niches',
            'Revenue concentrated in a small set of large industrial clients',
            'Lean engineering teams stretch across delivery, R&D, and support',
            'Transition from bespoke ERP reduces short-term revenue buffers',
            'Brand visibility remains limited outside core industrial circles'
          ]}
        />
        <SWOTBox
          type="opportunities"
          title="Opportunities"
          items={[
            'Productize autogate stack into repeatable, subscription-backed offerings',
            'Ride Pelindo’s nationwide automation rollout across 59 ports',
            'Adapt industrial expertise for smart residential and commercial gates',
            'Forge OEM partnerships to bundle best-in-class hardware',
            'Monetize ERP skills through complementary partnerships',
            'Extend IoT play into broader Industry 4.0 initiatives'
          ]}
        />
        <SWOTBox
          type="threats"
          title="Threats"
          items={[
            'Larger integrators and global automation firms entering the space',
            'Policy and procurement shifts favoring state-owned or global vendors',
            'Overextension risk if focus drifts back to bespoke projects',
            'Rapid tech evolution (AI vision, biometrics, next-gen IoT platforms)',
            'Economic swings delaying capital-intensive automation projects'
          ]}
        />
      </div>
    )
  },
  {
    navTitle: 'Strengths',
    showLogo: true,
    header: {
      title: 'Core Strengths',
      subtitle: 'Capabilities that anchor Halotec’s competitive edge'
    },
    render: () => (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <HighlightBox title="Proven autogate & industrial automation expertise" color="green">
          <p>
            Full-stack deployments at Indonesia&apos;s busiest ports (JICT, KOJA, IPC) demonstrate mastery across software, hardware integration, implementation, and lifecycle support for mission-critical operations.
          </p>
          <p>
            Real-world performance in high-volume, zero-downtime environments reinforces stakeholder confidence.
          </p>
        </HighlightBox>
        <HighlightBox title="Advanced sensor integration & M2M capability" color="green">
          <p>
            RFID, OCR, weighbridge, and CCTV feeds are fused into cohesive gate control systems, enabling real-time decisioning and seamless data exchange between edge devices and enterprise platforms.
          </p>
          <p>
            The team excels at ruggedizing IoT solutions for industrial conditions while preserving data fidelity.
          </p>
        </HighlightBox>
        <HighlightBox title="Full-stack delivery & technical versatility" color="green">
          <p>
            Halotec owns the entire solution stack—from embedded controllers and networking through databases, cloud services, and user applications—reducing dependency on third parties and accelerating customisation.
          </p>
          <p>
            Cross-disciplinary engineering squads shorten issue resolution cycles and drive continuous innovation.
          </p>
        </HighlightBox>
        <HighlightBox title="ERP development know-how (non-core strength)" color="green">
          <p>
            Years of delivering school, government, and enterprise systems provide battle-tested ERP knowledge that can be activated for complementary modules or partnership-based implementations.
          </p>
          <p>
            This heritage differentiates Halotec when automation projects require tight integration with management systems.
          </p>
        </HighlightBox>
        <HighlightBox title="Established industry credibility" color="green">
          <p>
            Two decades of experience with high-profile industrial clients, including maintenance contracts and long-lived deployments, translate into trusted relationships and strong reference accounts.
          </p>
          <p>
            The track record signals reliability to new customers and partners entering Indonesia&apos;s automation wave.
          </p>
        </HighlightBox>
      </div>
    )
  },
  {
    navTitle: 'Weaknesses',
    showLogo: true,
    header: {
      title: 'Key Weaknesses',
      subtitle: 'Constraints to manage during the transition'
    },
    render: () => (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <HighlightBox title="Narrowing market focus" color="orange">
          <p>
            Concentration on industrial autogate and heavy-industry automation limits diversification and ties growth to capital spending cycles in ports, logistics, and manufacturing.
          </p>
          <p>
            A thinner opportunity set increases exposure to sector-specific slowdowns.
          </p>
        </HighlightBox>
        <HighlightBox title="Dependence on large industrial clients" color="orange">
          <p>
            A few anchor customers contribute a substantial share of revenue; strategic or budget shifts at any client can materially affect performance.
          </p>
          <p>
            Sales pipelines must broaden to reduce concentration risk.
          </p>
        </HighlightBox>
        <HighlightBox title="Resource constraints and scaling challenges" color="orange">
          <p>
            Approximately 50 engineers stretch across legacy support, new product development, and 24/7 operations—slowing parallel project execution and innovation throughput.
          </p>
          <p>
            Scaling without adding headcount or new delivery models remains difficult.
          </p>
        </HighlightBox>
        <HighlightBox title="Transition away from custom projects" color="orange">
          <p>
            Winding down bespoke ERP engagements creates a revenue dip and requires careful management of existing obligations (schools, SIPPRO Kemenag, and other systems).
          </p>
          <p>
            Teams must adopt product go-to-market, pricing, and lifecycle management mindsets.
          </p>
        </HighlightBox>
        <HighlightBox title="Limited market visibility outside core niche" color="orange">
          <p>
            Branding and awareness remain largely confined to port automation circles, making recruitment, partnership outreach, and entry into adjacent markets more challenging.
          </p>
          <p>
            Marketing investment and storytelling must expand beyond existing references.
          </p>
        </HighlightBox>
      </div>
    )
  },
  {
    navTitle: 'Opportunities',
    showLogo: true,
    header: {
      title: 'Opportunity Landscape',
      subtitle: 'Growth vectors unlocked by the new focus'
    },
    render: () => (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <HighlightBox title="Productization & recurring revenue models" color="blue">
          <p>
            Modularizing autogate components—hardware kits, software modules, managed services—enables repeat sales, subscription revenue, and margin expansion across multiple sites.
          </p>
          <p>
            A product-first approach sharpens differentiation and simplifies scaling.
          </p>
        </HighlightBox>
        <HighlightBox title="National port automation initiatives" color="blue">
          <p>
            Pelindo is rolling autogate systems to dozens of ports (13 in 2023, 59 target by 2024), creating a pipeline where Halotec can replicate proven playbooks as prime or specialist integrator.
          </p>
          <p>
            Success at one port sets the stage for template-based deployments nationwide.
          </p>
        </HighlightBox>
        <HighlightBox title="Expansion into smart residential autogate" color="blue">
          <p>
            Gated communities, mixed-use developments, and commercial estates are exploring IoT-based access control—an adjacent mass market where Halotec can adapt industrial expertise into lighter-weight offerings once initial traction appears.
          </p>
        </HighlightBox>
        <HighlightBox title="OEM hardware partnerships" color="blue">
          <p>
            Collaborating with barrier, sensor, camera, and weighbridge manufacturers unlocks co-innovation, cost advantages, and packaged solutions that integrate seamlessly with Halotec software.
          </p>
          <p>
            Joint go-to-market campaigns can extend reach while stabilizing the supply chain.
          </p>
        </HighlightBox>
        <HighlightBox title="Strategic use of ERP expertise" color="blue">
          <p>
            Retained ERP skills can be monetized via partnerships or targeted modules that complement automation projects, allowing Halotec to stay involved in process digitization without assuming full project risk.
          </p>
        </HighlightBox>
        <HighlightBox title="Adjacent IoT & automation markets" color="blue">
          <p>
            Industry 4.0 programs, smart manufacturing, intelligent logistics, and infrastructure modernization open opportunities to repurpose the autogate stack for factories, warehouses, toll roads, rail, and mining operations.
          </p>
          <p>
            Extending into these areas diversifies revenue while staying within sensor-driven automation.
          </p>
        </HighlightBox>
      </div>
    )
  },
  {
    navTitle: 'Threats',
    showLogo: true,
    header: {
      title: 'Threat Landscape',
      subtitle: 'External pressures to monitor closely'
    },
    render: () => (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <HighlightBox title="Increasing competition in the niche" color="purple">
          <p>
            National automation efforts attract global integrators and well-capitalized local players who can compete on price, bundled offerings, or brand recognition.
          </p>
          <p>
            Halotec must sustain differentiation through local insight, speed, and integration depth.
          </p>
        </HighlightBox>
        <HighlightBox title="Policy and procurement risks" color="purple">
          <p>
            Government procurement changes, standardization mandates, or preferences for state-linked vendors could reshape access to strategic projects.
          </p>
          <p>
            Compliance requirements around security and data residency continue to intensify.
          </p>
        </HighlightBox>
        <HighlightBox title="Focus dilution & overextension" color="purple">
          <p>
            Pursuing too many adjacent initiatives while servicing existing clients risks thinly spreading teams and eroding delivery quality.
          </p>
          <p>
            Disciplined prioritization is essential to avoid slipping back into project-generalist mode.
          </p>
        </HighlightBox>
        <HighlightBox title="Technological disruption" color="purple">
          <p>
            Rapid advances in AI-based recognition, biometric access, and global IoT platforms could redefine gate automation standards and commoditize current differentiators.
          </p>
          <p>
            Continuous R&D and technology scouting are required to stay ahead of adoption curves.
          </p>
        </HighlightBox>
        <HighlightBox title="Economic & sectoral fluctuations" color="purple">
          <p>
            Ports, logistics, and heavy industry investments are sensitive to macroeconomic cycles; downturns can delay modernization projects and extend sales cycles.
          </p>
          <p>
            Building financial buffers and a diversified customer base mitigates volatility.
          </p>
        </HighlightBox>
      </div>
    )
  },
  {
    navTitle: 'Strategy Reset',
    showLogo: true,
    header: {
      title: '2025 Strategy Reset',
      subtitle: 'Halotec pivots away from bespoke ERP to reinforce automation leadership'
    },
    render: () => (
      <div className="space-y-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <StatCard number="2003" label="Year founded" />
          <StatCard number="50+" label="Engineers & specialists" />
          <StatCard number="3+" label="Flagship port deployments" />
          <StatCard number="24/7" label="Mission-critical support" />
        </div>

        <Section title="Why change now">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <HighlightBox title="Refocusing on high-value domains" color="green">
              <p>
                Custom ERP work delivered limited margins, frequent scope creep, and distracted teams from Halotec&apos;s competitive core: industrial autogate, M2M integration, and automation stacks.
              </p>
              <p>
                Resources are being reallocated to proven port automation products, recurring services, and modular offerings that scale across sites.
              </p>
            </HighlightBox>
            <HighlightBox title="Strengthening product discipline" color="green">
              <p>
                The shift from one-off projects to standardized solutions enables faster replication, predictable delivery, and clearer value propositions for ports, logistics hubs, and industrial campuses.
              </p>
              <p>
                Legacy ERP knowledge remains available for complementary work without diluting the primary growth agenda.
              </p>
            </HighlightBox>
          </div>
        </Section>

        <Section title="Core solution stack 2025">
          <div className="flex flex-wrap gap-3">
            {[
              'Industrial autogate platforms',
              'IoT device orchestration',
              'Sensor & M2M integration',
              'AI-ready data pipelines',
              'Operations dashboards',
              'Cloud & edge coordination',
              'Lifecycle support services'
            ].map((item) => (
              <Badge key={item}>{item}</Badge>
            ))}
          </div>
        </Section>
      </div>
    )
  },
  {
    navTitle: 'Priorities',
    showLogo: true,
    header: {
      title: 'Strategic Priorities 2025-2028',
      subtitle: 'Turning the SWOT into an execution agenda'
    },
    render: () => (
      <div className="space-y-6">
        <Section title="Execution imperatives">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <HighlightBox title="Leverage core strengths" color="green">
              <ul className="list-disc list-inside space-y-1 text-slate-300">
                <li>Scale proven autogate playbooks across Pelindo&apos;s nationwide rollout.</li>
                <li>Keep integrating edge hardware, cloud services, and analytics for a unified platform.</li>
                <li>Maintain 24/7 reliability while expanding feature depth.</li>
              </ul>
            </HighlightBox>
            <HighlightBox title="Diversify responsibly" color="blue">
              <ul className="list-disc list-inside space-y-1 text-slate-300">
                <li>Launch modular products and recurring service tiers targeting new customer segments.</li>
                <li>Pilot residential/security offerings when committed anchor clients emerge.</li>
                <li>Partner on ERP components instead of owning end-to-end custom builds.</li>
              </ul>
            </HighlightBox>
            <HighlightBox title="Invest in capacity" color="amber">
              <ul className="list-disc list-inside space-y-1 text-slate-300">
                <li>Grow teams in data, product, and cybersecurity to reduce key-person risk.</li>
                <li>Modernize legacy stacks while safeguarding uptime and client commitments.</li>
                <li>Systematize knowledge management across distributed offices.</li>
              </ul>
            </HighlightBox>
            <HighlightBox title="Elevate analytics & AI" color="purple">
              <ul className="list-disc list-inside space-y-1 text-slate-300">
                <li>Advance from reactive maintenance to predictive insights and optimization.</li>
                <li>Differentiate with AI-enabled monitoring, anomaly detection, and decision support.</li>
                <li>Align data strategy with security, governance, and client readiness.</li>
              </ul>
            </HighlightBox>
          </div>
        </Section>

        <Section title="Critical success factors">
          <ul className="space-y-2 text-slate-300">
            <BulletPoint>Build recurring revenue to cushion project volatility and fund R&D.</BulletPoint>
            <BulletPoint>Strengthen partnerships (hardware, system integrators, government stakeholders) to extend reach.</BulletPoint>
            <BulletPoint>Maintain disciplined prioritisation to avoid drifting back into unfocused project work.</BulletPoint>
            <BulletPoint>Embed measurable KPIs and review cadences to steer the transformation.</BulletPoint>
          </ul>
        </Section>

        <HighlightBox title="The path forward" color="green">
          <p>
            By leaning into its autogate and IoT strengths, addressing resource constraints, and activating new revenue models, Halotec can evolve from a bespoke project specialist into Indonesia&apos;s go-to industrial automation platform provider.
          </p>
          <p>
            Success hinges on disciplined execution of the 2025 reset—balancing innovation with reliability while expanding the ecosystem of clients and partners.
          </p>
        </HighlightBox>
      </div>
    )
  }
]
