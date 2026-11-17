import { useRef, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ArrowLeft, ArrowRight, ExternalLink } from 'lucide-react';
import { SECTIONS, type SectionId } from './data/researchContent';
import { SectionContent } from './components/SectionContent';

const PSYCHEDELIC_BG = '/src/assets/images/psychedelic_quantum_bg_1794945979427.jpg';

const TOP_NAV_SECTIONS: SectionId[] = [
  'introduccion',
  'objetivos',
  'metodologia',
  'recursos',
];

export default function App() {
  const [activeSection, setActiveSection] = useState<SectionId>('introduccion');
  const [bgFailed, setBgFailed] = useState(false);
  const contentStageRef = useRef<HTMLElement | null>(null);

  const currentIndex = SECTIONS.findIndex((s) => s.id === activeSection);
  const currentMeta = SECTIONS[currentIndex] ?? SECTIONS[0];
  const prevSection = currentIndex > 0 ? SECTIONS[currentIndex - 1] : null;
  const nextSection =
    currentIndex < SECTIONS.length - 1 ? SECTIONS[currentIndex + 1] : null;

  const handleSelectSection = (id: SectionId, shouldScroll = false) => {
    setActiveSection(id);
    if (shouldScroll && contentStageRef.current) {
      contentStageRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="relative min-h-screen overflow-x-clip bg-[#090712] text-[#F5F2FA]">
      {/* Fixed Elegant Psychedelic Fluid-Silk Backdrop */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-[radial-gradient(ellipse_at_top_left,_#3b1254_0%,_#111c3a_38%,_#0b0716_72%,_#240b2c_100%)]"
      >
        {!bgFailed && (
          <img
            src={PSYCHEDELIC_BG}
            alt=""
            referrerPolicy="no-referrer"
            onError={() => setBgFailed(true)}
            className="psychedelic-drift h-full w-full object-cover opacity-85"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-[#090712]/62 via-[#090712]/48 to-[#090712]/84" />
      </div>

      {/* Top Bar Contract: 3 zones separated by gap-8 */}
      <header className="sticky top-0 z-30 border-b border-white/10 bg-[#090712]/72 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-8 px-6 py-4">
          {/* Zone 1: Brand Wordmark */}
          <button
            type="button"
            onClick={() => handleSelectSection('introduccion', false)}
            className="shrink-0 whitespace-nowrap font-serif text-2xl font-semibold tracking-tight text-white transition-opacity hover:opacity-85 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E6C78A]"
          >
            Priscila Roque
          </button>

          {/* Zone 2: 4 concise single-line nav links */}
          <nav
            aria-label="Navegación principal"
            className="hidden items-center gap-7 md:flex"
          >
            {TOP_NAV_SECTIONS.map((navId) => {
              const meta = SECTIONS.find((s) => s.id === navId);
              if (!meta) return null;
              const isActive = activeSection === navId;
              return (
                <button
                  key={navId}
                  type="button"
                  onClick={() => handleSelectSection(navId, true)}
                  className={`shrink-0 whitespace-nowrap text-sm font-medium transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E6C78A] ${
                    isActive
                      ? 'text-[#F5E0B3] underline decoration-[#E6C78A]/80 underline-offset-8'
                      : 'text-[#DDD6E8] hover:text-white'
                  }`}
                >
                  {meta.shortNavLabel}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: 1 Primary Action */}
          <div className="shrink-0">
            <button
              type="button"
              onClick={() => handleSelectSection('demon2k', true)}
              className="shrink-0 whitespace-nowrap rounded-lg bg-[#F5E0B3] px-4 py-2 text-xs font-semibold text-[#110C1E] transition-colors duration-150 hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E6C78A]"
            >
              Explorar deMon2k
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 mx-auto max-w-6xl px-6 pt-14 pb-24 sm:pt-20">
        {/* Hero Header */}
        <section className="mx-auto max-w-4xl text-center">
          <p className="flex flex-wrap items-center justify-center gap-x-2.5 gap-y-1 text-xs font-medium tracking-wide text-[#E6C78A]">
            <span>Página personal de Priscila Roque</span>
            <span aria-hidden="true">·</span>
            <span>Aprendizaje del software deMon2k</span>
            <span aria-hidden="true">·</span>
            <span>Química Teórica · CUCEI</span>
          </p>

          <h1 className="mt-5 font-serif text-[clamp(2.35rem,4.8vw,4.15rem)] leading-[1.08] font-semibold tracking-tight text-white">
            Validación del cálculo de constantes hiperfinas usando la ADFT
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-[15.5px] leading-relaxed text-[#E3DCF0]">
            Espacio dedicado al estudio de la Resonancia Paramagnética Electrónica, la
            Teoría de los Funcionales de la Densidad Auxiliar y el uso del paquete de
            estructura electrónica <span className="font-mono text-[#F5E0B3]">deMon2k</span>.
          </p>
        </section>

        {/* Interactive Section Buttons */}
        <section
          aria-label="Secciones del proyecto de investigación"
          className="mt-12"
        >
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
            {SECTIONS.map((section) => {
              const isActive = activeSection === section.id;
              return (
                <button
                  key={section.id}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => handleSelectSection(section.id, false)}
                  className={`min-h-[42px] rounded-xl px-4 py-2.5 text-sm font-medium transition-all duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E6C78A] ${
                    isActive
                      ? 'bg-[#F5E0B3] text-[#110C1E] shadow-[0_8px_30px_rgba(230,199,138,0.22)]'
                      : 'border border-white/15 bg-[#0D0A19]/75 text-[#ECE7F4] backdrop-blur-md hover:border-white/35 hover:bg-[#19132E]/85 hover:text-white'
                  }`}
                >
                  {section.buttonLabel}
                </button>
              );
            })}
          </div>
        </section>

        {/* Editorial Reading Stage */}
        <section
          ref={contentStageRef}
          aria-live="polite"
          className="mt-8 scroll-mt-24 rounded-2xl border border-white/12 bg-[#0B0915]/84 p-7 backdrop-blur-2xl sm:p-11 lg:p-14"
        >
          <AnimatePresence mode="wait">
            <motion.article
              key={currentMeta.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
            >
              <header className="border-b border-white/12 pb-6">
                <div className="flex flex-wrap items-center gap-2.5 text-xs text-[#C9B6E4]">
                  <span className="font-mono tabular-nums text-[#E6C78A]">
                    Sección {currentMeta.indexLabel} / 08
                  </span>
                  <span aria-hidden="true">·</span>
                  <span>Priscila Roque</span>
                  <span aria-hidden="true">·</span>
                  <span>deMon2k &amp; ADFT</span>
                </div>
                <h2 className="mt-2.5 font-serif text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  {currentMeta.heading}
                </h2>
              </header>

              <div className="mt-8">
                <SectionContent sectionId={currentMeta.id} />
              </div>

              {/* Section Pagination */}
              <nav
                aria-label="Navegación entre secciones"
                className="mt-12 flex flex-col justify-between gap-4 border-t border-white/12 pt-7 sm:flex-row sm:items-center"
              >
                {prevSection ? (
                  <button
                    type="button"
                    onClick={() => handleSelectSection(prevSection.id, true)}
                    className="group inline-flex items-center gap-3 text-left text-sm text-[#DDD6E8] transition-colors hover:text-white"
                  >
                    <ArrowLeft className="h-4 w-4 shrink-0 text-[#E6C78A] transition-transform duration-150 group-hover:-translate-x-1" />
                    <span>
                      <span className="block text-xs text-white/55">Anterior</span>
                      <span className="font-medium">{prevSection.buttonLabel}</span>
                    </span>
                  </button>
                ) : (
                  <div />
                )}

                {nextSection && (
                  <button
                    type="button"
                    onClick={() => handleSelectSection(nextSection.id, true)}
                    className="group inline-flex items-center justify-end gap-3 text-right text-sm text-[#DDD6E8] transition-colors hover:text-white"
                  >
                    <span>
                      <span className="block text-xs text-white/55">Siguiente</span>
                      <span className="font-medium">{nextSection.buttonLabel}</span>
                    </span>
                    <ArrowRight className="h-4 w-4 shrink-0 text-[#E6C78A] transition-transform duration-150 group-hover:translate-x-1" />
                  </button>
                )}
              </nav>
            </motion.article>
          </AnimatePresence>
        </section>
      </main>

      {/* Quiet Editorial Footer */}
      <footer className="relative z-10 border-t border-white/10 bg-[#090712]/78 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-7 text-xs text-[#CFC6DC] sm:flex-row">
          <p>
            Priscila Roque · Validación del cálculo de constantes hiperfinas usando la ADFT
          </p>
          <a
            href="https://github.com/priscilaroque/Pagina_de_prueba.git"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-[#E6C78A] transition-colors hover:text-white"
          >
            <span>Repositorio en GitHub</span>
            <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
          </a>
        </div>
      </footer>
    </div>
  );
}
