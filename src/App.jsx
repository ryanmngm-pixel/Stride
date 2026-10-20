import { useEffect, useState } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  ArrowRight,
  Plus,
  X,
} from "lucide-react";
import "./App.css";

function CendraLogo({ light = false }) {
  return (
    <a href="#top" className={`logo ${light ? "logo-light" : ""}`}>
      <span className="logo-symbol" aria-hidden="true">
        <span className="logo-ring" />
        <span className="logo-core" />
        <span className="logo-spark" />
      </span>
      <span className="logo-word">cendra<span>.</span></span>
    </a>
  );
}

function Reveal({ children, className = "" }) {
  return (
    <div className={`reveal ${className}`}>
      {children}
    </div>
  );
}

const thoughts = [
  {
    number: "01",
    title: "Less noise.",
    description: "A clearer way to understand your financial world.",
  },
  {
    number: "02",
    title: "More control.",
    description: "Your money, your decisions, your next move.",
  },
  {
    number: "03",
    title: "Better days.",
    description: "Built around the life you're creating.",
  },
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeThought, setActiveThought] = useState(0);
  const [surprise, setSurprise] = useState(false);
  const [mouse, setMouse] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    document.querySelectorAll(".reveal").forEach((element) => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveThought((current) => (current + 1) % thoughts.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  function handleMouseMove(event) {
    const bounds = event.currentTarget.getBoundingClientRect();

    setMouse({
      x: ((event.clientX - bounds.left) / bounds.width) * 100,
      y: ((event.clientY - bounds.top) / bounds.height) * 100,
    });
  }

  return (
    <div className="cendra-site" id="top">
      <header className="header">
        <CendraLogo />

        <div className="header-right">
          <span className="header-status">
            <span className="status-light" />
            CURRENTLY IN THE MAKING
          </span>

          <button
            className="menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={19} /> : <Plus size={19} />}
          </button>
        </div>

        {menuOpen && (
          <div className="menu-panel">
            <a href="#about" onClick={() => setMenuOpen(false)}>
              The idea <ArrowUpRight size={16} />
            </a>
            <a href="#vision" onClick={() => setMenuOpen(false)}>
              Our vision <ArrowUpRight size={16} />
            </a>
            <a href="#coming" onClick={() => setMenuOpen(false)}>
              Coming soon <ArrowUpRight size={16} />
            </a>
          </div>
        )}
      </header>

      <main>
        <section
          className="hero"
          onMouseMove={handleMouseMove}
          style={{
            "--mouse-x": `${mouse.x}%`,
            "--mouse-y": `${mouse.y}%`,
          }}
        >
          <div className="hero-background" aria-hidden="true" />

          <div className="hero-meta">
            <span>AN IDEA WHOSE TIME IS COMING</span>
            <span>EST. 2026 — THE BEGINNING</span>
          </div>

          <div className="hero-main">
            <div className="hero-copy">
              <div className="eyebrow">
                <span className="eyebrow-line" />
                REIMAGINING YOUR FINANCIAL WORLD
              </div>

              <h1>
                MAKE
                <br />
                ROOM
                <br />
                <span className="hero-italic">FOR</span>
                <br />
                MORE<span className="hero-dot">.</span>
              </h1>

              <div className="hero-bottom-copy">
                <p>
                  Money is part of life.
                  <br />
                  It shouldn't get in the way of living it.
                </p>

                <a href="#about" className="round-link" aria-label="Explore Cendra">
                  <ArrowDownRight size={26} />
                </a>
              </div>
            </div>

            <div className="hero-visual" aria-hidden="true">
              <div className="visual-frame">
                <div className="visual-ring visual-ring-one" />
                <div className="visual-ring visual-ring-two" />
                <div className="visual-ring visual-ring-three" />

                <div className="visual-object">
                  <div className="object-cutout" />
                  <div className="object-highlight" />
                </div>

                <div className="visual-cross cross-one">+</div>
                <div className="visual-cross cross-two">+</div>

                <div className="visual-label label-top">
                  FORM FOLLOWS FEELING
                </div>

                <div className="visual-label label-bottom">
                  CENDRA / 001
                </div>
              </div>
            </div>
          </div>

          <div className="hero-footer">
            <span>GOOD THINGS ARE TAKING SHAPE</span>
            <span>SCROLL TO EXPLORE ↓</span>
          </div>
        </section>

        <section className="ticker" aria-label="Cendra coming soon">
          <div className="ticker-track">
            {Array.from({ length: 4 }, (_, i) => (
              <span className="ticker-item" key={i}>
                A NEW WAY FORWARD <span>✳</span>
                COMING SOON <span>✳︎</span>
              </span>
            ))}
          </div>
        </section>

        <section className="manifesto" id="about">
          <div className="section-index">
            <span>01 / THE IDEA</span>
            <span>CENDRA, EXPLAINED</span>
          </div>

          <Reveal className="manifesto-content">
            <p className="section-eyebrow">IT DOESN'T HAVE TO BE COMPLICATED.</p>

            <h2>
              LIFE IS
              <br />
              COMPLEX.
              <br />
              <span>MONEY</span>
              <br />
              SHOULDN'T
              <br />
              BE.
            </h2>

            <div className="manifesto-bottom">
              <div className="manifesto-line" />
              <p>
                We're imagining a financial experience that feels
                a little more natural. A little more personal.
                And a whole lot more human.
              </p>
            </div>
          </Reveal>

          <div className="manifesto-decoration" aria-hidden="true">
            <span>✳︎</span>
          </div>
        </section>

        <section className="vision" id="vision">
          <div className="section-index vision-index">
            <span>02 / WHAT WE BELIEVE</span>
            <span>THREE SIMPLE THINGS</span>
          </div>

          <div className="vision-layout">
            <Reveal className="vision-left">
              <span className="section-eyebrow">THE WAY WE SEE IT</span>
              <h2>
                BUILT
                <br />
                <em>DIFFERENT.</em>
              </h2>
              <p>
                The future of finance doesn't need to feel like
                the past. We're starting with a different perspective.
              </p>
            </Reveal>

            <Reveal className="vision-right">
              <div className="thought-card">
                <div className="thought-top">
                  <span>PRINCIPLE / {thoughts[activeThought].number}</span>
                  <span className="thought-star">✳︎</span>
                </div>

                <div className="thought-center" key={activeThought}>
                  <span className="thought-number">
                    {thoughts[activeThought].number}
                  </span>
                  <h3>{thoughts[activeThought].title}</h3>
                  <p>{thoughts[activeThought].description}</p>
                </div>

                <div className="thought-controls">
                  <div className="thought-dots">
                    {thoughts.map((_, index) => (
                      <button
                        key={index}
                        className={index === activeThought ? "active" : ""}
                        onClick={() => setActiveThought(index)}
                        aria-label={`Show principle ${index + 1}`}
                        aria-pressed={index === activeThought}
                      />
                    ))}
                  </div>

                  <button
                    className="thought-next"
                    onClick={() =>
                      setActiveThought((activeThought + 1) % thoughts.length)
                    }
                    aria-label="Next principle"
                  >
                    <ArrowRight size={23} />
                  </button>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="interlude">
          <Reveal>
            <span>THIS IS ONLY THE BEGINNING</span>
            <h2>
              THE FUTURE
              <br />
              ISN'T FOUND.
              <br />
              <em>IT'S MADE.</em>
            </h2>
            <div className="interlude-symbol" aria-hidden="true">✳</div>
          </Reveal>
        </section>

        <section className="finale" id="coming">
          <div className="finale-top">
            <span>03 / WHAT'S NEXT</span>
            <span>STILL IN THE WORKS</span>
          </div>

          <div className="finale-content">
            <Reveal>
              <span className="finale-eyebrow">
                PATIENCE LOOKS GOOD ON YOU.
              </span>

              <h2>
                NOT
                <br />
                <em>JUST</em>
                <br />
                YET.
              </h2>

              <p>
                We're working on something worth getting right.
                When the time comes, you'll know.
              </p>

              <div className="coming-label">
                <span className="coming-pulse" />
                COMING SOON
                <ArrowUpRight size={19} />
              </div>
            </Reveal>

            <button
              className="finale-stamp"
              onClick={() => setSurprise(!surprise)}
              aria-label="Reveal a message"
              aria-expanded={surprise}
            >
              <span className="stamp-text">GOOD THINGS TAKE TIME</span>
              <span className="stamp-center">{surprise ? "♥" : "✳︎"}</span>
              <span className="stamp-bottom">
                {surprise ? "THANKS FOR BEING EARLY" : "TAP ME"}
              </span>
            </button>
          </div>

          <div className="finale-bottom">
            <span>THE BEST IS STILL AHEAD.</span>
            <span>03 / 03</span>
          </div>
        </section>
      </main>

      <footer className="footer">
        <CendraLogo light />

        <span>© {new Date().getFullYear()} CENDRA</span>

        <a href="#top">
          BACK TO TOP <ArrowUpRight size={16} />
        </a>
      </footer>
    </div>
  );
}