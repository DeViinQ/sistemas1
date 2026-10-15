import { useState } from 'react'
import './App.css'

const studyTips = [
  {
    icon: 'check',
    title: 'Organizá tus apuntes',
    description:
      'Creá carpetas por materia y guardá tus trabajos con nombres claros para encontrarlos fácilmente.',
  },
  {
    icon: 'mail',
    title: 'Cuidá tus archivos',
    description:
      'Hacé copias de seguridad de tus apuntes y trabajos para no perder tus avances.',
  },
  {
    icon: 'calendar',
    title: 'Planificá tu semana',
    description:
      'Armá un calendario con tus clases, entregas y exámenes para organizar mejor el tiempo de estudio.',
  },
]

const usefulTips = [
  {
    icon: 'shield',
    text: 'Usá tu correo institucional o uno que revises con frecuencia para no perder actualizaciones.',
  },
  {
    icon: 'file',
    text: 'Tené a mano tu D.N.I. y la información académica para completar la solicitud de una vez.',
  },
  {
    icon: 'clock',
    text: 'Antes de enviar, revisá que tu nombre, fecha de nacimiento y D.N.I. estén escritos correctamente.',
  },
]

function Icon({ name, className = '' }) {
  const paths = {
    check: <path d="m5 12 4 4L19 6" />,
    mail: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </>
    ),
    calendar: (
      <>
        <rect x="3" y="5" width="18" height="16" rx="2" />
        <path d="M16 3v4M8 3v4M3 11h18" />
      </>
    ),
    shield: (
      <>
        <path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z" />
        <path d="m9 12 2 2 4-4" />
      </>
    ),
    file: (
      <>
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
        <path d="M14 2v6h6M8 13h8M8 17h8" />
      </>
    ),
    clock: (
      <>
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </>
    ),
  }

  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
      viewBox="0 0 24 24"
    >
      {paths[name]}
    </svg>
  )
}

function App() {
  const [submitted, setSubmitted] = useState(false)
  const [loginOpen, setLoginOpen] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <header className="site-header">
        <a className="brand" href="#inicio">
          Registro de préstamos de netbooks
        </a>
        <nav className="header-actions" aria-label="Navegación principal">
          <a className="button button-outline button-small" href="#requisitos">
            Dudas
          </a>
          <button
            className="button button-primary button-small"
            onClick={() => setLoginOpen(true)}
            type="button"
          >
            Iniciar sesión
          </button>
        </nav>
      </header>

      <main id="inicio">
        <section className="hero card">
          <div className="hero-copy">
            <span className="eyebrow">Instituto Técnico Renault</span>
            <h1>¿Necesitás una netbook para estudiar? I.T.R. te presta una para que no te quedes atrás</h1>
            <p>
              Revisá los requisitos, confirmá que estás dentro de las condiciones de
              elegibilidad y completá la solicitud para pedir tu equipo.
            </p>
            <a className="button button-primary" href="#solicitud">
              Pedir la mía
            </a>
          </div>
          <img
            className="hero-image"
            src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1000&q=85"
            alt="Estudiantes trabajando en una computadora en el aula"
          />
        </section>

        <section className="content-card card" id="requisitos">
          <div className="section-heading">
            <h2>Antes de pedir tu netbook</h2>
            <p>Revisá los requisitos y los componentes del programa antes de completar la solicitud.</p>
          </div>
          <article className="info-panel">
            <h3>¿Qué requisitos necesito?</h3>
            <p>
              Para poder acceder al plan de préstamos de netbooks deberás contar con
              D.N.I. vigente, ser estudiante regular de Instituto Técnico Renault,
              aparte de esto deberás contar sin materias previas, no contar con más
              de 5 amonestaciones durante el año y tener nota promedio anual mayor a 7.
            </p>
          </article>
          <article className="info-panel">
            <h3>¿Cuáles son los componentes de las netbooks?</h3>
            <p>
              El programa contempla el préstamo de una netbook para uso académico,
              con el objetivo de acompañar la cursada y garantizar la continuidad de
              los estudios.
            </p>
          </article>
        </section>

        <section className="content-card card" id="solicitud">
          <div className="section-heading">
            <h2>Completá tu solicitud</h2>
            <p>Ingresá tus datos para poder entrar al sistema.</p>
          </div>
          <form className="application-form" onSubmit={handleSubmit}>
            <label>
              Correo electrónico
              <input
                autoComplete="email"
                name="email"
                placeholder="nombre@ejemplo.com"
                required
                type="email"
              />
            </label>
            <label>
              Nombre completo
              <input
                autoComplete="name"
                name="name"
                placeholder="Ingresá tu nombre completo"
                required
                type="text"
              />
            </label>
            <label>
              Fecha de nacimiento
              <input autoComplete="bday" name="birthDate" required type="date" />
            </label>
            <label>
              Documento Nacional de Identidad (D.N.I.)
              <input
                inputMode="numeric"
                name="dni"
                placeholder="Ingresá tu D.N.I."
                required
                type="text"
              />
            </label>
            <button className="button button-primary submit-button" type="submit">
              Enviar solicitud
            </button>
            {submitted && (
              <p className="form-message" role="status">
                Formulario validado. Para registrar la solicitud, esta página debe
                conectarse al sistema de préstamos.
              </p>
            )}
          </form>
        </section>

        <section className="content-card card">
          <div className="section-heading">
            <h2>Prepará tu espacio de estudio</h2>
            <p>Ideas para aprovechar una netbook en tu cursada.</p>
          </div>
          <div className="tip-grid">
            {studyTips.map((tip) => (
              <article className="tip-card" key={tip.title}>
                <span className="icon-bubble">
                  <Icon name={tip.icon} />
                </span>
                <h3>{tip.title}</h3>
                <p>{tip.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="content-card card">
          <div className="section-heading">
            <h2>Consejos útiles</h2>
            <p>Recomendaciones para completar tus datos con claridad y cuidado.</p>
          </div>
          <ul className="useful-list">
            {usefulTips.map((tip) => (
              <li key={tip.text}>
                <span className="icon-bubble">
                  <Icon name={tip.icon} />
                </span>
                <span>{tip.text}</span>
              </li>
            ))}
          </ul>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-copy">
          <strong>Instituto Técnico Renault</strong>
          <p>Préstamos de netbooks para acompañar tu cursada y garantizar la continuidad de tus estudios.</p>
          <small>© Instituto Técnico Renault</small>
        </div>
        <div className="footer-actions">
          <a className="button button-outline button-small" href="#requisitos">
            Dudas
          </a>
          <button
            className="button button-primary button-small"
            onClick={() => setLoginOpen(true)}
            type="button"
          >
            Iniciar sesión
          </button>
          <small>Registro de préstamos de netbooks</small>
        </div>
      </footer>

      {loginOpen && (
        <div
          className="modal-backdrop"
          onClick={(event) => {
            if (event.target === event.currentTarget) setLoginOpen(false)
          }}
        >
          <section
            aria-labelledby="login-title"
            aria-modal="true"
            className="login-dialog card"
            role="dialog"
          >
            <button
              aria-label="Cerrar"
              className="dialog-close"
              onClick={() => setLoginOpen(false)}
              type="button"
            >
              ×
            </button>
            <h2 id="login-title">Iniciar sesión</h2>
            <p>El acceso al sistema estará disponible próximamente.</p>
            <button
              className="button button-primary"
              onClick={() => setLoginOpen(false)}
              type="button"
            >
              Entendido
            </button>
          </section>
        </div>
      )}
    </>
  )
}

export default App
