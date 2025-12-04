export default function ExperiencePage() {
  const roles = [
    {
      title: "Frontend Developer",
      company: "Product Co.",
      period: "2023 ? Present",
      items: [
        "Led migration to Next.js 14 App Router and partial SSR",
        "Built reusable component library, reducing UI defects by 30%",
        "Improved Web Vitals (LCP ?35%, CLS < 0.05)"
      ]
    },
    {
      title: "Frontend Engineer",
      company: "Fintech Inc.",
      period: "2022 ? 2023",
      items: [
        "Developed Angular 16 dashboards with RxJS streams",
        "Implemented role-based routing and lazy modules",
        "Integrated charting and real-time updates"
      ]
    },
    {
      title: "Junior Frontend Developer",
      company: "Startup Studio",
      period: "2021 ? 2022",
      items: [
        "Shipped React SPA with TypeScript and testing",
        "Collaborated with design to improve accessibility",
        "Built CI checks and preview deployments"
      ]
    }
  ];

  return (
    <main>
      <section className="card">
        <h1 style={{marginTop:0}}>Experience</h1>
        {roles.map((r) => (
          <div key={r.title} className="card" style={{marginBottom:12}}>
            <div style={{display:"flex",justifyContent:"space-between",gap:12,flexWrap:"wrap"}}>
              <div>
                <div style={{fontWeight:700}}>{r.title}</div>
                <div style={{color:"var(--muted)"}}>{r.company}</div>
              </div>
              <div style={{color:"var(--muted)"}}>{r.period}</div>
            </div>
            <ul>
              {r.items.map((i)=> <li key={i}>{i}</li>)}
            </ul>
          </div>
        ))}
      </section>
    </main>
  );
}
