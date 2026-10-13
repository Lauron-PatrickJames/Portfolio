import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Education } from "./components/Education";
import { Experience } from "./components/Experience";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { useScrollY } from "./hooks/useScrollY";

export default function App() {
  const scrollY = useScrollY();

  return (
    <>
      <Header scrolled={scrollY > 40} />

      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>

      <footer>
        <div className="foot-line">
          <div>
            Designed by <strong>Patrick James Lauron</strong>
          </div>
          <div>© {new Date().getFullYear()}</div>
        </div>
      </footer>

      <button
        className={`to-top ${scrollY > 500 ? "show" : ""}`.trim()}
        type="button"
        aria-label="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        ↑
      </button>
    </>
  );
}
