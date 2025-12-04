export default function ProjectsPage() {
  const projects = [
    {
      id: "design-system",
      title: "Design System",
      summary: "Composable React component library with tokens and theming.",
      stack: ["React", "TypeScript", "Storybook"],
      highlights: ["A11y-first primitives", "Dark mode", "Theming support"]
    },
    {
      id: "admin-dashboard",
      title: "Admin Dashboard",
      summary: "Angular dashboard with RxJS data streams and charts.",
      stack: ["Angular", "RxJS", "NgCharts"],
      highlights: ["Lazy routes", "Guards & interceptors", "Real-time charts"]
    },
    {
      id: "ecommerce",
      title: "E?commerce UI",
      summary: "Next.js storefront with payments and SSR.",
      stack: ["Next.js", "Stripe", "SSR"],
      highlights: ["Optimized LCP", "SEO-ready", "Edge runtime"]
    }
  ];

  return (
    <main>
      <section className="card">
        <h1 style={{marginTop:0}}>Projects</h1>
        {projects.map(p => (
          <article id={p.id} key={p.id} className="card" style={{marginBottom:12}}>
            <div style={{display:"flex",justifyContent:"space-between",gap:12,flexWrap:"wrap"}}>
              <div>
                <h3 style={{margin:"4px 0"}}>{p.title}</h3>
                <p style={{color:"var(--muted)", marginTop:0}}>{p.summary}</p>
              </div>
              <div>
                {p.stack.map(s => <span key={s} className="tag">{s}</span>)}
              </div>
            </div>
            <ul>
              {p.highlights.map(h => <li key={h}>{h}</li>)}
            </ul>
          </article>
        ))}
      </section>
    </main>
  );
}
