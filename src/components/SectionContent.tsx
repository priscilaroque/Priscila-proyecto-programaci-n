import { useMemo, useState } from 'react';
import { ExternalLink, Maximize2, Search, X } from 'lucide-react';
import {
  ANTECEDENTES_PARAGRAPHS,
  DEMON2K_INTRO,
  DEMON2K_PRIVATE_FEATURES,
  DEMON2K_PUBLIC_FEATURES,
  HIPOTESIS_TEXT,
  INTRODUCCION_PARAGRAPHS,
  METODOLOGIA_STEPS,
  OBJETIVO_GENERAL,
  OBJETIVOS_ESPECIFICOS,
  PLANTEAMIENTO_PARAGRAPHS,
  RECURSOS_TEXT,
  type SectionId,
} from '../data/researchContent';

const FULLERENE_IMG = '/src/assets/images/fullerene_nitrogen_art_1794945981400.jpg';
const METODOLOGIA_IMG = '/assets/aistudio/metodologia_terminada_822be92e.png';

interface SectionContentProps {
  sectionId: SectionId;
}

function FullereneFigure({ caption }: { caption: string }) {
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <figure className="overflow-hidden rounded-xl border border-white/12 bg-[#07050F]/90">
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-gradient-to-br from-[#1b1033] via-[#0e1e2b] to-[#1a0d26]">
        {!imgFailed ? (
          <img
            src={FULLERENE_IMG}
            alt="Representación artística de un fulereno de carbono con un átomo de nitrógeno encapsulado y ondas cuánticas de densidad de espín"
            referrerPolicy="no-referrer"
            onError={() => setImgFailed(true)}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center p-6 text-center">
            <span className="font-serif text-2xl text-[#E9D5FF]">N@C₆₀</span>
            <span className="mt-2 text-xs text-white/65">
              Fulereno con átomo de nitrógeno encapsulado
            </span>
          </div>
        )}
      </div>
      <figcaption className="border-t border-white/10 px-5 py-3.5 text-xs leading-relaxed text-[#CFC6DC]">
        {caption}
      </figcaption>
    </figure>
  );
}

export function SectionContent({ sectionId }: SectionContentProps) {
  const [featureQuery, setFeatureQuery] = useState('');
  const [diagramFailed, setDiagramFailed] = useState(false);
  const [isDiagramOpen, setIsDiagramOpen] = useState(false);

  const filteredPublicFeatures = useMemo(() => {
    const q = featureQuery.trim().toLowerCase();
    if (!q) return DEMON2K_PUBLIC_FEATURES;
    return DEMON2K_PUBLIC_FEATURES.filter((item) => {
      const linkText = item.links?.map((l) => l.label).join(' ') ?? '';
      return `${item.text} ${linkText} ${item.suffix ?? ''}`.toLowerCase().includes(q);
    });
  }, [featureQuery]);

  const filteredPrivateFeatures = useMemo(() => {
    const q = featureQuery.trim().toLowerCase();
    if (!q) return DEMON2K_PRIVATE_FEATURES;
    return DEMON2K_PRIVATE_FEATURES.filter((item) => item.toLowerCase().includes(q));
  }, [featureQuery]);

  if (sectionId === 'introduccion') {
    return (
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-start">
        <div className="space-y-6 lg:col-span-7">
          {INTRODUCCION_PARAGRAPHS.map((paragraph, idx) => (
            <p
              key={idx}
              className="text-[15.5px] leading-[1.82] tracking-[0.008em] text-[#ECE7F4]"
            >
              {paragraph}
            </p>
          ))}
        </div>

        <div className="space-y-6 lg:col-span-5">
          <FullereneFigure caption="Estudio mecano-cuántico de sistemas de capa abierta mediante ADFT y ADPT en el software deMon2k (Departamento de Química, CUCEI)." />
          <div className="border-t border-white/10 pt-5">
            <p className="text-xs font-medium tracking-wide text-[#C9B6E4]">
              Referencias clave del marco teórico
            </p>
            <dl className="mt-3 space-y-2.5 text-sm text-[#DDD6E8]">
              <div className="flex items-baseline justify-between gap-4 border-b border-white/8 pb-2">
                <dt className="font-mono text-xs text-[#E6C78A]">RPE / EPR</dt>
                <dd className="text-right text-xs text-[#CFC6DC]">
                  Resonancia Paramagnética Electrónica
                </dd>
              </div>
              <div className="flex items-baseline justify-between gap-4 border-b border-white/8 pb-2">
                <dt className="font-mono text-xs text-[#E6C78A]">ADFT</dt>
                <dd className="text-right text-xs text-[#CFC6DC]">
                  Teoría de los Funcionales de la Densidad Auxiliar
                </dd>
              </div>
              <div className="flex items-baseline justify-between gap-4">
                <dt className="font-mono text-xs text-[#E6C78A]">ADPT</dt>
                <dd className="text-right text-xs text-[#CFC6DC]">
                  Teoría de Perturbaciones de la Densidad Auxiliar
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    );
  }

  if (sectionId === 'antecedentes') {
    return (
      <div className="space-y-10">
        <div className="max-w-[72ch] space-y-6">
          {ANTECEDENTES_PARAGRAPHS.map((paragraph, idx) => (
            <p
              key={idx}
              className="text-[15.5px] leading-[1.82] tracking-[0.008em] text-[#ECE7F4]"
            >
              {paragraph}
            </p>
          ))}
        </div>

        <div className="border-t border-white/12 pt-8">
          <h3 className="font-serif text-2xl font-semibold text-white">
            Comparativa de precisión y costo computacional
          </h3>
          <p className="mt-1.5 text-sm text-[#CFC6DC]">
            Valores de porcentaje promedio de error respecto a datos experimentales reportados en los antecedentes del proyecto.
          </p>

          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="border-t border-white/15 pt-4">
              <div className="text-xs text-[#CFC6DC]">Método post Hartree-Fock</div>
              <div className="mt-1 font-mono text-base font-medium text-white">MBPT(2)</div>
              <div className="mt-3 flex items-baseline gap-1.5">
                <span className="font-mono text-3xl font-semibold tabular-nums text-[#F0A6CA]">
                  ~48%
                </span>
                <span className="text-xs text-[#CFC6DC]">error promedio</span>
              </div>
              <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                <div className="h-full w-[48%] rounded-full bg-gradient-to-r from-[#D946EF] to-[#F0A6CA]" />
              </div>
              <p className="mt-3 text-xs leading-relaxed text-[#CFC6DC]">
                Costo computacional intermedio con alta desviación respecto a mediciones experimentales.
              </p>
            </div>

            <div className="border-t border-white/15 pt-4">
              <div className="text-xs text-[#CFC6DC]">Referencia de alta correlación</div>
              <div className="mt-1 font-mono text-base font-medium text-white">
                Alta correlación
              </div>
              <div className="mt-3 flex items-baseline gap-1.5">
                <span className="font-mono text-3xl font-semibold tabular-nums text-[#67E8F9]">
                  ~11%
                </span>
                <span className="text-xs text-[#CFC6DC]">error promedio</span>
              </div>
              <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                <div className="h-full w-[11%] rounded-full bg-gradient-to-r from-[#06B6D4] to-[#67E8F9]" />
              </div>
              <p className="mt-3 text-xs leading-relaxed text-[#CFC6DC]">
                Describe bien las interacciones cuánticas electrónicas, pero exige un costo computacional muy elevado.
              </p>
            </div>

            <div className="border-t border-[#E6C78A]/50 pt-4">
              <div className="text-xs text-[#E6C78A]">Propuesta del proyecto</div>
              <div className="mt-1 font-mono text-base font-medium text-white">
                ADFT en deMon2k
              </div>
              <div className="mt-3 flex items-baseline gap-1.5">
                <span className="font-serif text-3xl font-semibold text-[#F5E0B3]">
                  Cientos de átomos
                </span>
              </div>
              <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                <div className="h-full w-full rounded-full bg-gradient-to-r from-[#A855F7] via-[#2DD4BF] to-[#E6C78A]" />
              </div>
              <p className="mt-3 text-xs leading-relaxed text-[#CFC6DC]">
                Metodología confiable orientada a mejorar error y escalabilidad con recursos computacionales moderados.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (sectionId === 'planteamiento') {
    return (
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-start">
        <div className="space-y-6 lg:col-span-7">
          {PLANTEAMIENTO_PARAGRAPHS.map((paragraph, idx) => (
            <p
              key={idx}
              className="text-[15.5px] leading-[1.82] tracking-[0.008em] text-[#ECE7F4]"
            >
              {paragraph}
            </p>
          ))}
        </div>

        <div className="space-y-6 lg:col-span-5">
          <FullereneFigure caption="Caso de prueba crítico: átomo de nitrógeno encapsulado en fulerenos de tamaño creciente para evaluar escalabilidad y variación de la constante hiperfina." />
          <div className="border-t border-white/10 pt-5">
            <p className="text-xs font-medium tracking-wide text-[#C9B6E4]">
              Campos de aplicación de la espectroscopía EPR
            </p>
            <ul className="mt-3 space-y-2 text-sm text-[#DDD6E8]">
              <li className="border-b border-white/8 pb-2">
                Análisis estructural de iones metálicos y defectos en redes cristalinas
              </li>
              <li className="border-b border-white/8 pb-2">
                Estudios de oxidación y capacidad antioxidante en alimentos y muestras biológicas
              </li>
              <li className="border-b border-white/8 pb-2">
                Diagnóstico médico de hipoxia y estudio de tejidos
              </li>
              <li>
                Datación de muestras geológicas y arqueológicas
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }

  if (sectionId === 'hipotesis') {
    return (
      <div className="py-4">
        <div className="mx-auto max-w-3xl rounded-2xl border border-white/15 bg-white/[0.03] px-8 py-10 sm:px-12 sm:py-14">
          <p className="font-mono text-xs tracking-wider text-[#E6C78A]">
            Planteamiento de hipótesis
          </p>
          <blockquote className="mt-5 font-serif text-2xl leading-[1.55] font-medium text-white sm:text-3xl">
            “{HIPOTESIS_TEXT}”
          </blockquote>
          <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-1 border-t border-white/10 pt-5 text-xs text-[#CFC6DC]">
            <span>Marco teórico: ADFT</span>
            <span aria-hidden="true">·</span>
            <span>Validación estadística contra error experimental</span>
            <span aria-hidden="true">·</span>
            <span>Comparación con alta correlación electrónica</span>
          </div>
        </div>
      </div>
    );
  }

  if (sectionId === 'objetivos') {
    return (
      <div className="space-y-12">
        <section>
          <h3 className="font-serif text-2xl font-semibold text-[#F5E0B3]">
            Objetivo general
          </h3>
          <p className="mt-4 max-w-[74ch] text-[15.5px] leading-[1.82] tracking-[0.008em] text-[#ECE7F4]">
            {OBJETIVO_GENERAL}
          </p>
        </section>

        <section className="border-t border-white/12 pt-9">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <h3 className="font-serif text-2xl font-semibold text-[#F5E0B3]">
              Objetivos específicos
            </h3>
            <span className="font-mono text-xs tabular-nums text-[#CFC6DC]">
              10 etapas definidas
            </span>
          </div>

          <ol className="mt-6 divide-y divide-white/10">
            {OBJETIVOS_ESPECIFICOS.map((item, idx) => (
              <li
                key={idx}
                className="grid grid-cols-[2.75rem_1fr] gap-4 py-4 first:pt-2 last:pb-0"
              >
                <span className="font-mono text-sm font-medium tabular-nums text-[#E6C78A]">
                  {String(idx + 1).padStart(2, '0')}.
                </span>
                <p className="text-[15px] leading-[1.78] text-[#ECE7F4]">{item}</p>
              </li>
            ))}
          </ol>
        </section>
      </div>
    );
  }

  if (sectionId === 'metodologia') {
    return (
      <div className="space-y-10">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-[#CFC6DC]">
          <span>12 pasos experimentales y computacionales</span>
          <span aria-hidden="true">·</span>
          <span className="font-mono text-[#E6C78A]">Fortran-90 &amp; deMon2k</span>
          <span aria-hidden="true">·</span>
          <span>Validación inicial en radical metilo</span>
        </div>

        <figure className="overflow-hidden rounded-2xl border border-white/15 bg-[#080612]/90">
          <div className="relative bg-white p-3 sm:p-5">
            {!diagramFailed ? (
              <img
                src={METODOLOGIA_IMG}
                alt="Diagrama de metodología: 1. Creación del módulo HFC en deMon2k, 2. Validación y calidad experimental, 3. Comprobación de eficiencia computacional con CCSD y CCSD(T), 4. Eficiencia en fullerenos crecientes N@C60 a N@C120, y 5. Resultados"
                referrerPolicy="no-referrer"
                onError={() => setDiagramFailed(true)}
                className="mx-auto h-auto w-full rounded-lg object-contain"
              />
            ) : (
              <div className="flex min-h-[220px] flex-col items-center justify-center rounded-lg bg-[#141024] p-6 text-center">
                <span className="font-serif text-xl text-[#F5E0B3]">
                  Diagrama de metodología ADFT / deMon2k
                </span>
                <span className="mt-2 text-xs text-[#CFC6DC]">
                  No se pudo cargar la imagen del diagrama.
                </span>
              </div>
            )}
          </div>
          <figcaption className="flex flex-wrap items-center justify-between gap-4 border-t border-white/10 px-5 py-3.5 text-xs text-[#CFC6DC]">
            <span>
              Esquema general del flujo de trabajo: creación del módulo HFC, validación experimental, eficiencia en fullerenos crecientes y resultados.
            </span>
            {!diagramFailed && (
              <button
                type="button"
                onClick={() => setIsDiagramOpen(true)}
                className="inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap font-medium text-[#E6C78A] transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E6C78A]"
              >
                <Maximize2 className="h-3.5 w-3.5" aria-hidden="true" />
                <span>Ampliar diagrama</span>
              </button>
            )}
          </figcaption>
        </figure>

        <ol className="divide-y divide-white/10 border-t border-white/10">
          {METODOLOGIA_STEPS.map((step, idx) => (
            <li
              key={idx}
              className="grid grid-cols-[2.75rem_1fr] gap-4 py-4.5 last:pb-0"
            >
              <span className="font-mono text-sm font-medium tabular-nums text-[#67E8F9]">
                {String(idx + 1).padStart(2, '0')}.
              </span>
              <p className="text-[15.5px] leading-[1.78] text-[#ECE7F4]">{step}</p>
            </li>
          ))}
        </ol>

        {isDiagramOpen && (
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Vista ampliada del diagrama de metodología"
            onClick={() => setIsDiagramOpen(false)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-md sm:p-8"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[92vh] w-full max-w-6xl overflow-auto rounded-2xl border border-white/15 bg-[#0B0915] p-3 sm:p-5"
            >
              <div className="mb-3 flex items-center justify-between gap-4 px-1">
                <span className="font-serif text-lg font-semibold text-white">
                  Diagrama de metodología — Módulo HFC en deMon2k
                </span>
                <button
                  type="button"
                  onClick={() => setIsDiagramOpen(false)}
                  aria-label="Cerrar vista ampliada"
                  className="inline-flex items-center gap-1.5 rounded-lg border border-white/15 px-3 py-1.5 text-xs font-medium text-[#ECE7F4] transition-colors hover:bg-white/10 hover:text-white"
                >
                  <X className="h-4 w-4" aria-hidden="true" />
                  <span>Cerrar</span>
                </button>
              </div>
              <div className="rounded-xl bg-white p-2 sm:p-4">
                <img
                  src={METODOLOGIA_IMG}
                  alt="Diagrama completo de metodología para el módulo HFC en deMon2k"
                  referrerPolicy="no-referrer"
                  className="h-auto w-full object-contain"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  if (sectionId === 'recursos') {
    return (
      <div className="space-y-10">
        <p className="max-w-[72ch] text-[16px] leading-[1.85] tracking-[0.008em] text-[#ECE7F4]">
          {RECURSOS_TEXT}
        </p>

        <div className="grid grid-cols-1 gap-8 border-t border-white/12 pt-8 md:grid-cols-3">
          <div>
            <p className="text-xs text-[#E6C78A]">Colaboración científica</p>
            <h3 className="mt-1.5 font-serif text-2xl font-semibold text-white">
              Ingrid Aribeth Trujillo Avila
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-[#CFC6DC]">
              Integrante colaboradora en el desarrollo conjunto del proyecto de investigación.
            </p>
          </div>

          <div>
            <p className="text-xs text-[#E6C78A]">Colaboración científica</p>
            <h3 className="mt-1.5 font-serif text-2xl font-semibold text-white">
              Marlon Saul Ojeda Percastegui
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-[#CFC6DC]">
              Integrante colaborador en el desarrollo conjunto del proyecto de investigación.
            </p>
          </div>

          <div>
            <p className="text-xs text-[#67E8F9]">Respaldo institucional e infraestructura</p>
            <h3 className="mt-1.5 font-serif text-2xl font-semibold text-white">
              Cinvestav
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-[#CFC6DC]">
              Centro de Investigación y de Estudios Avanzados, junto con equipos de cómputo de alto rendimiento.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-10">
      <p className="max-w-[76ch] text-[15.5px] leading-[1.82] tracking-[0.008em] text-[#ECE7F4]">
        {DEMON2K_INTRO}
      </p>

      <div className="flex flex-col gap-3 border-y border-white/12 py-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="text-sm text-[#CFC6DC]">
          Mostrando{' '}
          <span className="font-mono font-medium tabular-nums text-white">
            {filteredPublicFeatures.length + filteredPrivateFeatures.length}
          </span>{' '}
          de{' '}
          <span className="font-mono tabular-nums text-white">
            {DEMON2K_PUBLIC_FEATURES.length + DEMON2K_PRIVATE_FEATURES.length}
          </span>{' '}
          características
        </div>

        <div className="relative w-full sm:max-w-xs">
          <Search
            className="pointer-events-none absolute top-1/2 left-3.5 h-4 w-4 -translate-y-1/2 text-white/50"
            aria-hidden="true"
          />
          <input
            type="text"
            value={featureQuery}
            onChange={(e) => setFeatureQuery(e.target.value)}
            placeholder="Filtrar capacidades (ej. ADPT, BOMD, Libxc)"
            aria-label="Filtrar características de deMon2k"
            className="w-full rounded-lg border border-white/15 bg-white/[0.04] py-2 pr-9 pl-10 text-sm text-white placeholder:text-white/45 focus:border-[#E6C78A]/70 focus:outline-none"
          />
          {featureQuery && (
            <button
              type="button"
              onClick={() => setFeatureQuery('')}
              aria-label="Limpiar filtro"
              className="absolute top-1/2 right-2.5 -translate-y-1/2 rounded p-1 text-white/60 transition-colors hover:text-white"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          )}
        </div>
      </div>

      {filteredPublicFeatures.length === 0 && filteredPrivateFeatures.length === 0 ? (
        <div className="py-10 text-center">
          <p className="text-sm text-[#CFC6DC]">
            No se encontraron características que coincidan con “{featureQuery}”.
          </p>
          <button
            type="button"
            onClick={() => setFeatureQuery('')}
            className="mt-3 text-sm font-medium text-[#E6C78A] underline underline-offset-4 hover:text-white"
          >
            Mostrar todas las características
          </button>
        </div>
      ) : (
        <div className="space-y-12">
          {filteredPublicFeatures.length > 0 && (
            <section>
              <h3 className="font-serif text-2xl font-semibold text-[#F5E0B3]">
                Capacidades principales de deMon2k
              </h3>
              <ul className="mt-5 grid grid-cols-1 gap-x-10 gap-y-3.5 md:grid-cols-2">
                {filteredPublicFeatures.map((item, idx) => (
                  <li
                    key={idx}
                    className="border-b border-white/8 pb-3.5 text-[14.5px] leading-[1.72] text-[#ECE7F4]"
                  >
                    <span>{item.text}</span>
                    {item.links &&
                      item.links.map((link, linkIdx) => (
                        <span key={link.label}>
                          {linkIdx > 0 && ', '}
                          <a
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 font-medium text-[#67E8F9] underline decoration-[#67E8F9]/45 underline-offset-4 transition-colors hover:text-white hover:decoration-white"
                          >
                            {link.label}
                            <ExternalLink className="h-3 w-3 shrink-0" aria-hidden="true" />
                          </a>
                        </span>
                      ))}
                    {item.suffix && <span>{item.suffix}</span>}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {filteredPrivateFeatures.length > 0 && (
            <section className="border-t border-white/12 pt-9">
              <h3 className="font-serif text-2xl font-semibold text-[#F5E0B3]">
                Características en versiones privadas de deMon2k
              </h3>
              <p className="mt-2 text-sm text-[#CFC6DC]">
                Además, en las versiones privadas de deMon2k se implementan varias otras características. Algunas de estas características son:
              </p>
              <ul className="mt-5 grid grid-cols-1 gap-x-10 gap-y-3.5 md:grid-cols-2">
                {filteredPrivateFeatures.map((feature, idx) => (
                  <li
                    key={idx}
                    className="border-b border-white/8 pb-3.5 text-[14.5px] leading-[1.72] text-[#ECE7F4]"
                  >
                    {feature}
                  </li>
                ))}
              </ul>
            </section>
          )}
        </div>
      )}


      <div className="flex flex-col items-start justify-between gap-4 border-t border-white/12 pt-8 sm:flex-row sm:items-center">
        <div>
          <p className="font-serif text-xl font-semibold text-white">
            Sitio oficial de deMon2k
          </p>
          <p className="mt-1 text-xs text-[#CFC6DC]">
            Documentación oficial, descargas y referencias del software.
          </p>
        </div>
        <a
          href="http://www.demon-software.com/public_html/index.html"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex shrink-0 items-center gap-2 whitespace-nowrap rounded-xl bg-[#F5E0B3] px-5 py-2.5 text-sm font-semibold text-[#110C1E] transition-colors duration-150 hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E6C78A]"
        >
          <span>Para conocer más sobre este Software entrar aquí</span>
          <ExternalLink className="h-4 w-4 shrink-0" aria-hidden="true" />
        </a>
      </div>
    </div>
  );
}
