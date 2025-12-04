import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frontend Developer ? 3 Years Experience",
  description: "Portfolio showcasing projects in React and Angular.",
  metadataBase: new URL("https://agentic-15fd0b3f.vercel.app"),
  openGraph: {
    title: "Frontend Developer ? React & Angular",
    description: "A crisp portfolio highlighting React and Angular work.",
    url: "https://agentic-15fd0b3f.vercel.app",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Frontend Developer ? React & Angular",
    description: "A crisp portfolio highlighting React and Angular work."
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="container">
          <nav className="nav">
            <div style={{display:"flex",gap:12,alignItems:"center"}}>
              <span style={{fontWeight:700, letterSpacing:0.3}}>FE Dev</span>
              <span className="tag">3+ Years</span>
            </div>
            <div style={{display:"flex",gap:16}}>
              <a href="/" className="active">Home</a>
              <a href="/experience">Experience</a>
              <a href="/projects">Projects</a>
              <a href="/angular">Angular Demo</a>
            </div>
          </nav>
          {children}
          <footer className="footer">
            <hr className="divider" />
            <div>? {new Date().getFullYear()} Frontend Developer ? React & Angular</div>
          </footer>
        </div>
      </body>
    </html>
  );
}
