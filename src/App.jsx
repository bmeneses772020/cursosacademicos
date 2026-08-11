import React from "react";
import {
  BookOpen,
  Clock,
  Layers,
  ArrowRight,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

/* ============================================================ */
/* CURSOS — agrega aquí cada curso nuevo cuando esté listo        */
/* ============================================================ */
const COURSES = [
  {
    id: "ficha-apa",
    title: "Ficha APA",
    description:
      "Aprende a citar y referenciar con normas APA 7.ª edición: fundamentos, formato, encabezados, citas, referencias, y tablas y figuras.",
    price: "$5 USD",
    duration: "2–3 horas",
    modules: "6 módulos",
    href: "https://aprendecursoapa.vercel.app/",
    status: "disponible",
  },
];

const UPCOMING = [
  {
    id: "metodologia",
    title: "Metodología de la Investigación Científica",
    description: "Los fundamentos para plantear y desarrollar un trabajo de investigación, paso a paso.",
  },
  {
    id: "estadistica",
    title: "Estadística Descriptiva Aplicada",
    description: "Herramientas estadísticas esenciales para analizar y presentar datos con claridad.",
  },
  {
    id: "competencias",
    title: "Evaluación por Competencias",
    description: "Diseña instrumentos de evaluación bajo el enfoque socioformativo.",
  },
];

const INK = "#0B3D42";
const INK_SOFT = "#1B4C52";
const PAPER = "#F6F1E7";
const PAPER_CARD = "#FCFAF4";
const GOLD = "#C98A2E";
const WINE = "#7A2E3B";
const SAGE = "#4F7A5D";
const LINE = "#DDD3BE";
const TEXT = "#29291F";
const TEXT_SOFT = "#6b6b5f";

export default function App() {
  return (
    <div className="fc-root">
      <Styles />

      <header className="fc-header">
        <div className="fc-brand">
          <BookOpen size={22} strokeWidth={2} />
          <div>
            <div className="fc-brand-name">Ficha Cursos</div>
            <div className="fc-brand-tag">Tus NOOC de autogestión académica</div>
          </div>
        </div>
      </header>

      <section className="fc-hero">
        <span className="fc-kicker">Cursos cortos, a tu propio ritmo</span>
        <h1>Aprende una habilidad concreta, en un par de horas</h1>
        <p className="fc-hero-sub">
          Cada curso es autogestionado: avanzas cuando quieres, practicas con actividades reales, y aplicas lo
          aprendido en tus propios trabajos desde el primer día.
        </p>
      </section>

      <section className="fc-section">
        <h2>Cursos disponibles</h2>
        <div className="fc-grid">
          {COURSES.map((c) => (
            <a className="fc-card" href={c.href} target="_blank" rel="noreferrer" key={c.id}>
              <div className="fc-card-badge">
                <CheckCircle2 size={13} strokeWidth={2} />
                Disponible ahora
              </div>
              <h3>{c.title}</h3>
              <p className="fc-card-desc">{c.description}</p>
              <div className="fc-card-meta">
                <span>
                  <Clock size={14} strokeWidth={2} /> {c.duration}
                </span>
                <span>
                  <Layers size={14} strokeWidth={2} /> {c.modules}
                </span>
              </div>
              <div className="fc-card-footer">
                <span className="fc-card-price">{c.price}</span>
                <span className="fc-card-cta">
                  Ver curso <ArrowRight size={15} strokeWidth={2.2} />
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="fc-section fc-section-alt">
        <h2>Próximamente</h2>
        <p className="fc-section-sub">Estos cursos están en preparación — vuelve pronto.</p>
        <div className="fc-grid">
          {UPCOMING.map((c) => (
            <div className="fc-card fc-card-disabled" key={c.id}>
              <div className="fc-card-badge fc-card-badge-soon">
                <Sparkles size={13} strokeWidth={2} />
                Próximamente
              </div>
              <h3>{c.title}</h3>
              <p className="fc-card-desc">{c.description}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="fc-footer">
        <CheckCircle2 size={14} strokeWidth={2} />
        <span>Msc. Betty Meneses Ayllón</span>
      </footer>
    </div>
  );
}

function Styles() {
  return (
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Source+Serif+4:opsz,wght@8..60,400;8..60,600;8..60,700&family=Inter:wght@400;500;600;700&display=swap');

      .fc-root {
        font-family: 'Inter', sans-serif;
        color: ${TEXT};
        background: ${PAPER};
        min-height: 100%;
        width: 100%;
      }
      .fc-root * { box-sizing: border-box; }

      .fc-header {
        padding: 20px 8%;
        background: ${INK};
        color: ${PAPER};
      }
      .fc-brand { display: flex; align-items: center; gap: 10px; max-width: 1100px; margin: 0 auto; }
      .fc-brand-name { font-family: 'Source Serif 4', serif; font-weight: 700; font-size: 18px; }
      .fc-brand-tag { font-size: 11.5px; color: #CFE0DD; margin-top: 1px; }

      .fc-hero {
        padding: 56px 8% 44px 8%;
        text-align: center;
        max-width: 760px;
        margin: 0 auto;
      }
      .fc-kicker {
        display: inline-block; font-size: 12px; font-weight: 700; letter-spacing: 1.5px;
        color: ${GOLD}; text-transform: uppercase; margin-bottom: 14px;
      }
      .fc-hero h1 {
        font-family: 'Source Serif 4', serif; font-weight: 700; font-size: 32px;
        color: ${INK}; line-height: 1.25; margin: 0 0 16px 0;
      }
      .fc-hero-sub { font-size: 16px; color: ${TEXT_SOFT}; line-height: 1.6; margin: 0; }

      .fc-section { padding: 20px 8% 48px 8%; max-width: 1180px; margin: 0 auto; }
      .fc-section h2 {
        font-family: 'Source Serif 4', serif; font-size: 24px; color: ${INK};
        margin: 0 0 6px 0;
      }
      .fc-section-sub { color: ${TEXT_SOFT}; margin: 0 0 26px 0; font-size: 14px; }
      .fc-section:first-of-type h2 { margin-bottom: 22px; }

      .fc-section-alt { background: ${PAPER_CARD}; border-top: 1px solid ${LINE}; max-width: none; padding-top: 44px; }
      .fc-section-alt > * { max-width: 1180px; margin-left: auto; margin-right: auto; }

      .fc-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
        gap: 20px;
      }

      .fc-card {
        display: flex; flex-direction: column;
        background: ${PAPER_CARD}; border: 1px solid ${LINE}; border-radius: 12px;
        padding: 22px; text-decoration: none; color: inherit;
        transition: border-color 0.15s ease, transform 0.15s ease;
      }
      a.fc-card:hover { border-color: ${GOLD}; transform: translateY(-2px); }

      .fc-card-badge {
        display: inline-flex; align-items: center; gap: 5px; width: fit-content;
        background: rgba(79,122,93,0.12); color: ${SAGE};
        font-size: 10.5px; font-weight: 700; letter-spacing: 0.4px; text-transform: uppercase;
        border-radius: 999px; padding: 4px 10px; margin-bottom: 14px;
      }
      .fc-card-badge-soon { background: rgba(201,138,46,0.14); color: ${GOLD}; }

      .fc-card h3 {
        font-family: 'Source Serif 4', serif; font-size: 19px; color: ${INK};
        margin: 0 0 8px 0;
      }
      .fc-card-desc { font-size: 13.5px; color: ${TEXT_SOFT}; line-height: 1.5; margin: 0 0 16px 0; flex: 1; }

      .fc-card-meta { display: flex; gap: 14px; margin-bottom: 16px; }
      .fc-card-meta span {
        display: inline-flex; align-items: center; gap: 5px;
        font-size: 12px; color: ${TEXT_SOFT};
      }
      .fc-card-meta svg { color: ${GOLD}; }

      .fc-card-footer {
        display: flex; align-items: center; justify-content: space-between;
        border-top: 1px solid ${LINE}; padding-top: 14px; margin-top: auto;
      }
      .fc-card-price { font-family: 'Source Serif 4', serif; font-weight: 700; font-size: 17px; color: ${INK}; }
      .fc-card-cta {
        display: inline-flex; align-items: center; gap: 5px;
        font-size: 13px; font-weight: 600; color: ${WINE};
      }

      .fc-card-disabled { opacity: 0.75; }
      .fc-card-disabled h3 { color: ${TEXT_SOFT}; }

      .fc-footer {
        display: flex; align-items: center; justify-content: center; gap: 8px;
        padding: 24px 8% 36px 8%; color: ${TEXT_SOFT}; font-size: 12.5px;
      }
      .fc-footer svg { color: ${SAGE}; }

      @media (max-width: 640px) {
        .fc-hero h1 { font-size: 25px; }
        .fc-grid { grid-template-columns: 1fr; }
      }
    `}</style>
  );
}
