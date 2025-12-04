import Link from "next/link";

export default function HomePage() {
  return (
    <main>
      <section className="hero">
        <div>
          <h1 style={{fontSize:48, margin:"12px 0 8px", lineHeight:1.1}}>Frontend Developer</h1>
          <p style={{color:"var(--muted)", fontSize:18}}>
            Building fast, accessible UIs with React and Angular. 3+ years crafting
            delightful product experiences and design systems.
          </p>
          <div style={{display:"flex", gap:12, marginTop:18}}>
            <Link className="button" href="/projects">View Projects</Link>
            <Link className="button secondary" href="/experience">Work Experience</Link>
          </div>
        </div>
        <div className="card">
          <h3 style={{marginTop:0}}>At a glance</h3>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12}}>
            <div className="card"><b>React</b><div style={{color:"var(--muted)"}}>Next.js, hooks, state mgmt</div></div>
            <div className="card"><b>Angular</b><div style={{color:"var(--muted)"}}>Standalone, RxJS, routing</div></div>
            <div className="card"><b>UI</b><div style={{color:"var(--muted)"}}>Tailwind, CSS Modules</div></div>
            <div className="card"><b>Quality</b><div style={{color:"var(--muted)"}}>TypeScript, testing</div></div>
          </div>
        </div>
      </section>

      <section className="card">
        <h2 style={{marginTop:0}}>Featured Projects</h2>
        <div className="grid cols-3">
          {[
            { title: "Design System", stack: ["React", "Storybook", "TypeScript"], href: "/projects#design-system" },
            { title: "Admin Dashboard", stack: ["Angular", "RxJS", "Charts"], href: "/projects#admin-dashboard" },
            { title: "E?commerce UI", stack: ["Next.js", "Stripe", "SSR"], href: "/projects#ecommerce" }
          ].map((p) => (
            <a key={p.title} className="card" href={p.href}>
              <div style={{fontWeight:600}}>{p.title}</div>
              <div style={{marginTop:6}}>
                {p.stack.map(s => <span key={s} className="tag">{s}</span>)}
              </div>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
