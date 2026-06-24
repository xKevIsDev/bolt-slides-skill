import Deck from './components/Deck'
import Section from './components/Section'
import Reveal from './components/Reveal'
import Bento from './components/Bento'
import Split from './components/Split'
import StatGrid from './components/StatGrid'
import CountUp from './components/CountUp'
import TiltCard from './components/TiltCard'
import Marquee from './components/Marquee'
import VisualDashboard from './components/VisualDashboard'

/* ══════════════════════════════════════════════════════════════════════
   ⚠️  THROWAWAY STARTER. Its only purpose is to prove the project renders.
   DELETE every section below and AUTHOR THE USER'S DECK FROM SCRATCH.
   Do NOT reskin this file — its order, copy, and placeholders are not a
   template. The whole look is set in src/styles/tokens.css (:root block).
   ══════════════════════════════════════════════════════════════════════ */
export default function App() {
  return (
    <Deck>
      {/* Hero */}
      <Section center nav="Cover">
        <Reveal>
          <div className="kicker" style={{ marginBottom: 14 }}>Replace · everything</div>
          <h1 className="display"><span className="accent-text">Title</span></h1>
          <p className="subhead" style={{ marginTop: 18 }}>This starter renders so you can verify the scroll deck + motion. Delete it and build the real one.</p>
        </Reveal>
      </Section>

      {/* Statement */}
      <Section center nav="Statement">
        <Reveal>
          <h2 className="headline" style={{ fontSize: 'clamp(34px,5.5vw,68px)', marginInline: 'auto' }}>
            One big idea, <span className="accent-text">stated simply.</span>
          </h2>
        </Reveal>
      </Section>

      {/* Split feature — text + edge-to-edge media */}
      <Split
        kicker="How it works"
        title={<>Edge-to-edge media. <span className="accent-text">No floating card.</span></>}
        body="Text on one side, media bleeding to the screen edge on the other — a real web section that reflows on any screen."
        media={
          <>
            <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(120% 100% at 30% 20%, color-mix(in srgb, var(--primary) 22%, transparent), transparent 60%), var(--surface-2)' }} />
            <div style={{ position: 'relative', padding: 40 }}><TiltCard><VisualDashboard /></TiltCard></div>
          </>
        }
      />

      {/* Bento */}
      <Bento
        kicker="Compose like the web"
        title="Bento beats a row of equal cards."
        tiles={[
          { k: 'Hero tile', fig: <CountUp to={9.4} decimals={1} suffix="M" />, body: 'One big tile anchors the grid; the rest support it.', c: 5, r: 2, variant: 'glow' },
          { k: 'Uptime', fig: <CountUp to={99.99} decimals={2} suffix="%" />, c: 4 },
          { k: 'Regions', fig: <CountUp to={28} />, c: 3, variant: 'accent' },
          { k: 'Connectors', title: '120+ native', body: 'Replace with real, on-topic content.', c: 4 },
          { k: 'Compliance', title: 'SOC 2 · HIPAA', c: 3 },
        ]}
      />

      {/* Proof */}
      <StatGrid
        kicker="By the numbers"
        title="Proof, counted up on scroll."
        stats={[
          { value: <CountUp to={92} suffix="%" />, label: 'Retention', caption: 'Replace with a real metric.' },
          { value: <CountUp to={3.4} decimals={1} prefix="$" suffix="B" />, label: 'Processed', caption: 'Replace.' },
          { value: <CountUp to={120} suffix="+" />, label: 'Integrations', caption: 'Replace.' },
        ]}
      />

      {/* Logo strip */}
      <Section center nav="Customers">
        <Reveal><div className="kicker" style={{ marginBottom: 28 }}>Trusted by teams everywhere</div></Reveal>
        <Marquee items={['Northwind', 'Globex', 'Initech', 'Umbra', 'Hooli', 'Vehement', 'Soylent']} />
      </Section>

      {/* Quote */}
      <Section center nav="Quote">
        <Reveal>
          <p className="headline" style={{ fontSize: 'clamp(28px,4vw,50px)', fontWeight: 500, marginInline: 'auto', maxWidth: '20ch' }}>
            “A single sharp sentence carries more weight than a slide full of bullets.”
          </p>
          <div className="foot" style={{ marginTop: 22 }}>— Name, Title</div>
        </Reveal>
      </Section>

      {/* CTA */}
      <Section center nav="Close">
        <Reveal>
          <h2 className="display" style={{ fontSize: 'clamp(40px,7vw,96px)' }}><span className="accent-text">Let’s talk.</span></h2>
          <p className="subhead" style={{ marginTop: 16 }}>Closing line and a call to action.</p>
        </Reveal>
      </Section>
    </Deck>
  )
}
