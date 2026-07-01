import Deck from './deck/Deck'
import Slide from './deck/Slide'
import Build from './deck/Build'
import Reveal from './deck/Reveal'
import Bento from './components/Bento'
import Split from './components/Split'
import CountUp from './components/CountUp'
import TiltCard from './components/TiltCard'
import Marquee from './components/Marquee'
import StatGrid from './components/StatGrid'
import Accordion from './components/Accordion'
import Comparison from './components/Comparison'
import Tabs from './components/Tabs'
import Timeline from './components/Timeline'
import CodeWindow from './components/CodeWindow'
import BrowserFrame from './components/BrowserFrame'
import SpotlightCard from './components/SpotlightCard'
import { BarChart, LineChart, DonutChart } from './components/Charts'

/* ══════════════════════════════════════════════════════════════════════
   LINEAR — All-hands deck.
   The product development system for teams and agents.
   Theme: Linear's near-black canvas + signature indigo→violet accent.
   Fonts: Inter (head + body), JetBrains Mono (code) — Linear's own stack.
   ══════════════════════════════════════════════════════════════════════ */

const card: React.CSSProperties = {
  padding: 22, borderRadius: 'var(--radius)', background: 'var(--surface)',
  border: '1px solid var(--hair)',
}

const panel = (extra = 0.18): React.CSSProperties => ({
  position: 'absolute', inset: 0,
  background: `radial-gradient(120% 100% at 30% 20%, color-mix(in srgb, var(--primary) ${extra * 100}%, transparent), transparent 60%), var(--surface-2)`,
})

/* A Linear-style issue row mock — used inside the product slide */
function IssueRow({ id, label, status, statusColor, active }: {
  id: string; label: string; status: string; statusColor: string; active?: boolean
}) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: 12, padding: '11px 14px',
      borderRadius: 10, background: active ? 'var(--surface-2)' : 'transparent',
      border: active ? '1px solid color-mix(in srgb, var(--primary) 40%, transparent)' : '1px solid transparent',
    }}>
      <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--fg-faint)', width: 64 }}>{id}</span>
      <span style={{ flex: 1, fontSize: 14, color: 'var(--fg)', fontWeight: active ? 500 : 400 }}>{label}</span>
      <span style={{
        fontSize: 11, fontWeight: 600, padding: '4px 10px', borderRadius: 999,
        color: statusColor, background: `color-mix(in srgb, ${statusColor} 14%, transparent)`,
        border: `1px solid color-mix(in srgb, ${statusColor} 30%, transparent)`,
      }}>{status}</span>
    </div>
  )
}

export default function App() {
  return (
    <Deck>
      {/* ── Cover ─────────────────────────────────────────────────────── */}
      <Slide center nav="Cover" notes="Welcome everyone. This is our all-hands — a look at where Linear is, what we've shipped, and where we're going. Hold on this slide for a beat.">
        <Reveal>
          <div className="kicker" style={{ marginBottom: 18 }}>Linear · All-hands · Q3 2026</div>
          <h1 className="display"><span className="accent-text">Linear</span></h1>
          <p className="subhead" style={{ marginTop: 20, marginInline: 'auto' }}>
            The product development system for teams and agents.
          </p>
        </Reveal>
      </Slide>

      {/* ── Thesis / the shift ────────────────────────────────────────── */}
      <Slide center nav="The shift" notes="The core thesis. Pause before each line. The whole pitch hangs on this contrast — software is changing shape, and our tools need to change with it.">
        <h2 className="headline" style={{ fontSize: 'clamp(34px,5.5vw,68px)', marginInline: 'auto' }}>
          Software is being rebuilt <span className="accent-text">by teams and agents.</span>
        </h2>
        <Build at={1}>
          <p className="subhead" style={{ marginTop: 22, marginInline: 'auto' }}>
            The tools haven't caught up. Spreadsheets, ticket queues, and status meetings still run the show.
          </p>
        </Build>
        <Build at={2}>
          <p className="subhead" style={{ marginTop: 16, marginInline: 'auto' }}>
            Linear is built for this era — purpose-built for planning and building products, with AI workflows at its core.
          </p>
        </Build>
      </Slide>

      {/* ── What we shipped — Bento ───────────────────────────────────── */}
      <Bento
        nav="What we shipped"
        notes="Don't read every tile — let them scan. Land on the agent count and the realtime sync. These are the headlines."
        kicker="This quarter"
        title="What we shipped."
        tiles={[
          { k: 'Agent workflows', fig: <CountUp to={4} />, body: 'native agents shipped — Codex, Cursor, Copilot, and our own.', c: 5, r: 2, variant: 'glow' },
          { k: 'Realtime sync', fig: <CountUp to={50} suffix="ms" />, body: 'p95 sync latency — down from 340ms.', c: 4 },
          { k: 'Integrations', fig: <CountUp to={120} suffix="+" />, c: 3, variant: 'accent' },
          { k: 'Structural diffs', title: 'Review agent output', body: 'Understand code changes from humans and agents at a glance.', c: 4 },
          { k: 'Self-driving ops', title: 'Auto-routing', body: 'Conversations → issues, labeled and prioritized automatically.', c: 3 },
        ]}
      />

      {/* ── Product: the system — Split with product UI ───────────────── */}
      <Split
        nav="The system"
        notes="This is the product. Walk left to right — intake, planning, building, review. Everything in one place, no context switching."
        kicker="One system"
        title={<>From idea to <span className="accent-text">ship.</span></>}
        body="Plan, build, and review in a single workspace. Intake turns feedback into routed issues. Roadmaps keep everyone aligned. Agents work alongside your team — not in a separate tab."
        media={
          <>
            <div style={panel(0.16)} />
            <div style={{ position: 'relative', padding: '40px 36px', width: '100%' }}>
              <TiltCard>
                <BrowserFrame url="linear.app">
                  <div style={{ display: 'grid', gridTemplateColumns: '172px 1fr', minHeight: 360 }}>
                    <div style={{ borderRight: '1px solid var(--hair-2)', background: 'var(--surface)', padding: '16px 12px', display: 'flex', flexDirection: 'column', gap: 2 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14, padding: '0 6px' }}>
                        <span style={{ width: 18, height: 18, borderRadius: 5, background: 'var(--accent)' }} />
                        <span style={{ fontSize: 14, fontWeight: 600 }}>Linear</span>
                      </div>
                      {['Inbox', 'My issues', 'Projects', 'Views', 'Roadmaps'].map((n, i) => (
                        <div key={n} style={{ padding: '7px 10px', borderRadius: 7, fontSize: 13, fontWeight: i === 2 ? 600 : 400, color: i === 2 ? 'var(--fg)' : 'var(--fg-muted)', background: i === 2 ? 'var(--surface-2)' : 'transparent' }}>{n}</div>
                      ))}
                    </div>
                    <div style={{ padding: '18px 20px' }}>
                      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 14 }}>
                        <h3 style={{ fontSize: 16, fontWeight: 600, margin: 0 }}>Mobile app launch</h3>
                        <span className="foot">12 issues · 3 in progress</span>
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                        <IssueRow id="MOB-241" label="Render UI before vehicle_state sync" status="In progress" statusColor="#5e6ad2" active />
                        <IssueRow id="MOB-238" label="Dashboard syncStatus prop" status="In review" statusColor="#8568dc" />
                        <IssueRow id="MOB-235" label="Android localization pass" status="Done" statusColor="#3ecf8e" />
                        <IssueRow id="MOB-231" label="Crash on cold start — Samsung" status="Backlog" statusColor="#9aa0a6" />
                      </div>
                    </div>
                  </div>
                </BrowserFrame>
              </TiltCard>
            </div>
          </>
        }
      />

      {/* ── Agent workflows — Split flipped with agents image ─────────── */}
      <Split
        nav="Agents"
        notes="This is the differentiator. Agents don't just sit in a sidebar — they pick up issues, open PRs, and you review the output in the same place you review human work."
        kicker="Human + agent"
        title={<>Agents that <span className="accent-text">do the work.</span></>}
        body="Delegate entire issues end-to-end or work on complex tasks together. Agents draft PRDs, write code, and push PRs. You review structural diffs — human or agent — in one place."
        flip
        media={
          <>
            <div style={panel(0.14)} />
            <img src="/agents.webp" alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.92 }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, var(--bg) 0%, transparent 40%, transparent 100%)' }} />
          </>
        }
      />

      {/* ── Traction — StatGrid ───────────────────────────────────────── */}
      <StatGrid
        nav="Traction"
        notes="These are the numbers. 33,000 teams is the headline — say it out loud. Net retention at 118% means the product sells itself."
        kicker="Traction"
        title="The numbers compound."
        stats={[
          { value: <CountUp to={33000} suffix="+" />, label: 'Product teams', caption: 'from ambitious startups to major enterprises' },
          { value: <CountUp to={118} suffix="%" />, label: 'Net retention', caption: 'best-in-class for the category' },
          { value: <CountUp to={4.2} decimals={1} prefix="$" suffix="B" />, label: 'Valuation', caption: 'Series C, June 2025' },
        ]}
      />

      {/* ── Growth charts ──────────────────────────────────────────────── */}
      <Slide nav="Growth" notes="Weekly active is the one to watch — it's accelerating, not flattening. Revenue follows engagement.">
        <Reveal>
          <div className="kicker" style={{ marginBottom: 12, textAlign: 'center' }}>The trajectory</div>
          <h2 className="headline" style={{ textAlign: 'center', marginInline: 'auto', marginBottom: 'clamp(22px,4vh,38px)' }}>Growth you can see.</h2>
        </Reveal>
        <Reveal>
          <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1.1fr 0.8fr', gap: 20, alignItems: 'stretch' }}>
            <div style={card}>
              <div className="kicker" style={{ marginBottom: 14 }}>Weekly active teams</div>
              <div style={{ height: 150 }}>
                <BarChart data={[{ label: 'Q1', value: 30 }, { label: 'Q2', value: 44 }, { label: 'Q3', value: 39 }, { label: 'Q4', value: 61 }, { label: 'Q5', value: 78 }, { label: 'Q6', value: 96 }]} height={150} />
              </div>
            </div>
            <div style={card}>
              <div className="kicker" style={{ marginBottom: 14 }}>ARR</div>
              <LineChart points={[12, 16, 14, 22, 26, 34, 30, 44]} height={150} />
            </div>
            <div style={{ ...card, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
              <DonutChart value={118} label="Net retention" size={150} />
            </div>
          </div>
        </Reveal>
      </Slide>

      {/* ── Comparison: Linear vs legacy ───────────────────────────────── */}
      <Slide nav="Why teams switch" notes="Lead with realtime. If they push on price, point at the highlighted column. The honest comparison — we don't hide from it.">
        <Reveal>
          <div className="kicker" style={{ marginBottom: 12, textAlign: 'center' }}>Why teams switch</div>
          <h2 className="headline" style={{ textAlign: 'center', marginInline: 'auto', marginBottom: 'clamp(22px,4vh,38px)' }}>The honest comparison.</h2>
        </Reveal>
        <Reveal>
          <div style={{ maxWidth: 820, marginInline: 'auto' }}>
            <Comparison
              cols={['', 'Linear', 'Legacy tools']}
              highlight={0}
              rows={[
                { label: 'Built for AI agents', values: [true, false] },
                { label: 'Realtime sync (sub-100ms)', values: [true, false] },
                { label: 'Structural code diffs', values: [true, false] },
                { label: 'Time to first issue', values: ['2 min', '2 days'] },
                { label: 'Native roadmap + PRD', values: [true, false] },
              ]}
            />
          </div>
        </Reveal>
      </Slide>

      {/* ── Use cases — Tabs ───────────────────────────────────────────── */}
      <Slide nav="Who uses it" notes="Click through the tabs as you speak to each team. Stop on the one that fits the room.">
        <Reveal>
          <div className="kicker" style={{ marginBottom: 12, textAlign: 'center' }}>One platform, every team</div>
          <h2 className="headline" style={{ textAlign: 'center', marginInline: 'auto', marginBottom: 'clamp(20px,3vh,30px)' }}>Built for every team.</h2>
        </Reveal>
        <Reveal style={{ textAlign: 'center', maxWidth: 780, marginInline: 'auto' }}>
          <Tabs tabs={[
            { label: 'Engineering', content: <p className="lead" style={{ margin: 0 }}>Track issues, review PRs, and ship — with agents that open branches and push code.</p> },
            { label: 'Product', content: <p className="lead" style={{ margin: 0 }}>Roadmaps, PRDs, and initiatives that stay in sync with what's actually being built.</p> },
            { label: 'Design', content: <p className="lead" style={{ margin: 0 }}>Specs and feedback in one place — no more Figma comments lost in Slack.</p> },
          ]} />
        </Reveal>
      </Slide>

      {/* ── Developer-first — Split with code ─────────────────────────── */}
      <Split
        nav="Developer-first"
        notes="Three lines, no schema. If there's an engineer in the room, this is the slide for them. The API is the product."
        kicker="Developer-first"
        title={<>Drop-in <span className="accent-text">simple.</span></>}
        body="A typed API, webhooks for everything, and a CLI that feels native. No SDK to learn, no schema to define — just issues and updates."
        media={
          <>
            <div style={panel(0.14)} />
            <div style={{ position: 'relative', padding: 36, width: '100%' }}>
              <CodeWindow title="create-issue.ts" highlight={[5, 6, 7]} code={`import { Linear } from '@linear/sdk'

const linear = new Linear(process.env.LINEAR_KEY)

const issue = await linear.createIssue({
  title: 'Ship mobile launch',
  teamId: 'MOB',
  assigneeId: 'me',
})`} />
            </div>
          </>
        }
      />

      {/* ── Principles — Spotlight cards ──────────────────────────────── */}
      <Slide nav="Principles" notes="Hover the cards for the glow if presenting on a screen. Keep this one short — these are our beliefs, not features.">
        <Reveal>
          <div className="kicker" style={{ marginBottom: 12, textAlign: 'center' }}>What we believe</div>
          <h2 className="headline" style={{ textAlign: 'center', marginInline: 'auto', marginBottom: 'clamp(22px,4vh,38px)' }}>Three principles.</h2>
        </Reveal>
        <Reveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }}>
            {[
              { k: '01', t: 'Craft is the product', d: "Speed and design aren't features — they're the thing. Every interaction matters." },
              { k: '02', t: 'Built for the AI era', d: 'Agents are first-class users, not a bolt-on. Workflows are shared by humans and agents.' },
              { k: '03', t: 'Momentum over noise', d: 'We reduce friction and restore focus. Teams ship with velocity, not meetings.' },
            ].map((p) => (
              <SpotlightCard key={p.k}>
                <div className="kicker accent-text" style={{ marginBottom: 12 }}>{p.k}</div>
                <h3 style={{ fontSize: 'clamp(20px,2.2vw,26px)', fontWeight: 600, margin: '0 0 8px' }}>{p.t}</h3>
                <p style={{ color: 'var(--fg-muted)', fontSize: 15, margin: 0, lineHeight: 1.5 }}>{p.d}</p>
              </SpotlightCard>
            ))}
          </div>
        </Reveal>
      </Slide>

      {/* ── Roadmap — Timeline ────────────────────────────────────────── */}
      <Slide nav="Roadmap" notes="Anchor on 'Now'. The agent delegation line is what gets people excited — dwell there. Enterprise is table stakes, don't oversell it.">
        <Reveal>
          <div className="kicker" style={{ marginBottom: 12, textAlign: 'center' }}>Where we're going</div>
          <h2 className="headline" style={{ textAlign: 'center', marginInline: 'auto', marginBottom: 'clamp(20px,3vh,32px)' }}>The roadmap.</h2>
        </Reveal>
        <div style={{ maxWidth: 560, marginInline: 'auto' }}>
          <Timeline items={[
            { time: 'Shipped', title: 'Agent workflows', body: 'Codex, Cursor, and Copilot — native, in the issue.' },
            { time: 'Now', title: 'Agent delegation', body: 'Hand off entire issues end-to-end. Review the PR in Linear.' },
            { time: 'Next', title: 'Self-driving ops', body: 'Intake → routing → prioritization, fully automated.' },
            { time: 'Later', title: 'Enterprise scale', body: 'SSO, audit logs, and on-prem for the largest teams.' },
          ]} />
        </div>
      </Slide>

      {/* ── Customers — Marquee ────────────────────────────────────────── */}
      <Slide center nav="Customers" notes="Name-drop the two logos most relevant to this audience. 33,000 teams — from one-person startups to public companies.">
        <Reveal><div className="kicker" style={{ marginBottom: 28 }}>Trusted by 33,000+ product teams</div></Reveal>
        <Marquee items={['Vercel', 'Ramp', 'Cash App', 'Retool', 'Mercury', 'Arc', 'Replicate', 'Cursor']} />
      </Slide>

      {/* ── Quote ──────────────────────────────────────────────────────── */}
      <Slide center nav="Quote" notes="Read it slowly, then stay silent for a second. Let it land. This is from a real customer — the craft line is the one people remember.">
        <Reveal>
          <p className="headline" style={{ fontSize: 'clamp(28px,4vw,50px)', fontWeight: 500, marginInline: 'auto', maxWidth: '22ch' }}>
            "You'll probably build a better product, just because of the craft that using Linear infuses on your brain."
          </p>
          <div className="foot" style={{ marginTop: 22 }}>— from a Linear customer</div>
        </Reveal>
      </Slide>

      {/* ── FAQ — Accordion ───────────────────────────────────────────── */}
      <Slide nav="FAQ" notes="Only open the questions they actually ask. Skip the rest to keep momentum.">
        <Reveal>
          <div className="kicker" style={{ marginBottom: 12, textAlign: 'center' }}>Common questions</div>
          <h2 className="headline" style={{ textAlign: 'center', marginInline: 'auto', marginBottom: 'clamp(20px,3vh,30px)' }}>Frequently asked.</h2>
        </Reveal>
        <Reveal>
          <div style={{ maxWidth: 720, marginInline: 'auto' }}>
            <Accordion items={[
              { title: 'How do agents actually work in Linear?', body: 'Agents pick up issues assigned to them, work in a branch, and open a PR. You review the structural diff — same as a human PR — and merge or request changes.' },
              { title: 'Is my data used to train models?', body: 'No. Your data is never used to train any model. Agents run in your context, with your permissions, and nothing leaves your workspace.' },
              { title: 'Can we self-host?', body: 'Enterprise plans include on-prem deployment. SSO, audit logs, and data residency are all available today.' },
              { title: 'How is it priced?', body: 'Per active user, with agents included. No per-agent tax — you scale humans and agents together without surprises.' },
            ]} />
          </div>
        </Reveal>
      </Slide>

      {/* ── Close / CTA ───────────────────────────────────────────────── */}
      <Slide center nav="Close" notes="Make the ask explicitly. Leave the URL on screen while you take questions.">
        <Reveal>
          <h2 className="display" style={{ fontSize: 'clamp(40px,7vw,96px)' }}><span className="accent-text">Let's build.</span></h2>
          <p className="subhead" style={{ marginTop: 18, marginInline: 'auto' }}>
            linear.app · the product development system for teams and agents.
          </p>
        </Reveal>
      </Slide>
    </Deck>
  )
}
