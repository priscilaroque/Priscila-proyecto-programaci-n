export type SectionId =
  | 'introduccion'
  | 'antecedentes'
  | 'planteamiento'
  | 'hipotesis'
  | 'objetivos'
  | 'metodologia'
  | 'recursos'
  | 'demon2k';

export interface SectionMeta {
  id: SectionId;
  buttonLabel: string;
  shortNavLabel: string;
  heading: string;
  indexLabel: string;
}

export const SECTIONS: SectionMeta[] = [
  {
    id: 'introduccion',
    buttonLabel: 'Introducción',
    shortNavLabel: 'Introducción',
    heading: 'Introducción',
    indexLabel: '01',
  },
  {
    id: 'antecedentes',
    buttonLabel: 'Antecedentes',
    shortNavLabel: 'Antecedentes',
    heading: 'Antecedentes',
    indexLabel: '02',
  },
  {
    id: 'planteamiento',
    buttonLabel: 'Planteamiento del problema/justificación',
    shortNavLabel: 'Planteamiento',
    heading: 'Planteamiento del problema y justificación',
    indexLabel: '03',
  },
  {
    id: 'hipotesis',
    buttonLabel: 'Hipótesis',
    shortNavLabel: 'Hipótesis',
    heading: 'Hipótesis',
    indexLabel: '04',
  },
  {
    id: 'objetivos',
    buttonLabel: 'Objetivos: General y específicos',
    shortNavLabel: 'Objetivos',
    heading: 'Objetivos: General y específicos',
    indexLabel: '05',
  },
  {
    id: 'metodologia',
    buttonLabel: 'Metodología',
    shortNavLabel: 'Metodología',
    heading: 'Metodología',
    indexLabel: '06',
  },
  {
    id: 'recursos',
    buttonLabel: 'Recursos',
    shortNavLabel: 'Recursos',
    heading: 'Recursos',
    indexLabel: '07',
  },
  {
    id: 'demon2k',
    buttonLabel: 'Descripción del programa deMon2K',
    shortNavLabel: 'deMon2k',
    heading: 'Descripción del programa deMon2K',
    indexLabel: '08',
  },
];

export const INTRODUCCION_PARAGRAPHS: string[] = [
  'La resonancia paramagnética electrónica es una espectroscopia muy útil para estudiar la estructura electrónica y molecular de sistemas de capa abierta, aquellos que tienen electrones desapareados, tales como: radicales libres y compuestos organometálicos. Una mejor manera de estudiar un espectro de RPE es utilizando, además de los datos experimentales, también usar datos que arrojen métodos mecano-cuánticos, ya que en el fenómeno en sí, participan partículas microscópicas o subatómicas que sólo obedecen al marco teórico de la física cuántica.',
  'Existen diversos métodos mecano-cuánticos capaces de calcular los parámetros de RPE, como lo son el tensor-g y la constante de acoplamiento hiperfino, al cual este trabajo está dedicado. Hay métodos que están diseñados para dar una alta precisión en el cálculo de propiedades moleculares como los parámetros de RPE, pero tienen un alto costo computacional que los vuelven imprácticos de usar, por otro lado existen otros métodos que son computacionalmente baratos, pero arrojan resultados que tienen un acuerdo muy pobre con los datos experimentales, siendo por lo tanto de poca ayuda para mejorar la interpretación del espectro. Recientemente un método llamado Teoría de los Funcionales de la Densidad Auxiliar (ADFT por sus siglas en inglés) ha sido utilizado para el cálculo de propiedades moleculares entre ellas los parámetros de RPE, el cálculo está basado en la Teoría de Perturbaciones de la Densidad Auxiliar (ADPT por sus siglas en inglés) que se trabaja en el grupo de química teórica del Departamento de Química del CUCEI.',
  'El módulo para cálculos de RPE dentro del software de estructura electrónica deMon2k ya está programado, pero requiere hacerse una extensa validación para saber qué tan preciso es para predecir las constantes de acoplamiento hiperfino con respecto a datos experimentales, es necesario conocer estos datos para poder promover el software entre químicos experimentales que usan la técnica de RPE. También necesitamos solventar el problema del costo computacional mediante la paralelización del módulo para que los cálculos sean más rápidos que los que se efectúan con otros métodos y al mismo tiempo tratar de romper la barrera de cuán grande es la molécula que podemos calcular si tenemos una precisión aceptable y si mejoramos el costo computacional tendremos una contribución significativa en el campo del cálculo de propiedades magnéticas moleculares en particular para RPE que es a donde nos queremos enfocar.',
];

export const ANTECEDENTES_PARAGRAPHS: string[] = [
  'Como se mencionó anteriormente existen varios métodos para calcular las constantes de acoplamiento hiperfinas, cuya precisión es proporcional al costo computacional. Entre ella tenemos el método de Hartree-Fock que es ejemplo de bajo costo computacional, pero ofrece malos resultados, esto debido a que no toma en cuenta la interacción cuántica conocida como correlación. En el otro extremo está un método altamente correlacionado que describe bien la interacciones cuánticas de los electrones, pero tiene un costo computacional muy alto y su porcentaje promedio de error es aproximadamente del 11% con respecto a datos experimentales de un conjunto de moléculas con valores de acoplamiento bien medidos.',
  'En un punto intermedio tenemos el método post Hartree-Fock llamado MBPT(2) que ofrece un promedio de porcentaje de error aproximado de 48%, por lo tanto esperamos en este proyecto tanto mejorar el promedio del porcentaje de error, así como el costo computacional comparado contra los demás métodos. Presentaremos una metodología que será confiable para el cálculo de constantes hiperfinas y que nos permitirá calcular moléculas con cientos de átomos que es el límite actual de los métodos anteriores, usando recursos computacionales moderados.',
];

export const PLANTEAMIENTO_PARAGRAPHS: string[] = [
  'En el campo de la química teórica y computacional, la precisión en el cálculo de propiedades moleculares es fundamental para predecir con exactitud el comportamiento de sistemas químicos complejos. Una propiedad de interés es la constante de acoplamiento hiperfino, un parámetro medido experimentalmente mediante Resonancia Paramagnética Electrónica (EPR) que brinda información crucial sobre la distribución electrónica y las interacciones espín-núcleo en moléculas y materiales. Esta técnica espectroscópica es utilizada principalmente en química, física, biología y medicina, para detectar y cuantificar electrones desapareados, radicales libres, iones de metales de transición y defectos en materiales. Lo que permite el análisis estructural para determinar el entorno local de iones metálicos y defectos en redes cristalinas; estudios de oxidación para evaluar la capacidad antioxidante en alimentos (aceites, tés) y muestras biológicas; en medicina permite el diagnóstico de hipoxia (falta de oxígeno) y estudios de tejidos, y en geología, determinar la edad de muestras geológicas o arqueológicas.',
  'Sin embargo, calcular esta propiedad con precisión requiere métodos sofisticados y altamente correlacionados, como el Método de Coupled-Cluster que, aunque es extremadamente preciso, conlleva un elevado costo computacional. Dada esta problemática, el presente proyecto tiene como propósito implementar un módulo dentro del software deMon2k para el cálculo de las constantes hiperfinas mediante la Teoría de los Funcionales de la Densidad Auxiliar. Esta implementación busca encontrar un equilibrio entre precisión, eficiencia y costo computacional, haciendo posible el estudio de sistemas más grandes y complejos, como fulerenos con átomos de nitrógeno encapsulados, que no serían fácilmente abordables con métodos como Coupled-Cluster debido a sus limitaciones de escalabilidad.',
  'El enfoque de este trabajo no sólo se centra en la programación y la validación en el nuevo módulo programado con las cuatro contribuciones conocidas en la teoría de las constantes hiperfinas en el software deMon2k, sino también en evaluar la calidad de los resultados mediante la comparación con valores experimentales y cálculos obtenidos por métodos de alta correlación. Además, se analizará la influencia de diferentes combinaciones de funcionales de intercambio corrección, funciones de base y funciones auxiliares para identificar las configuraciones óptimas que maximicen la precisión sin sacrificar la eficiencia.',
  'La incorporación de este módulo en deMon2k aportará una herramienta de gran utilidad para la comunidad científica, permitiendo cálculos precisos, más rápidos y eficaces para propiedades hiperfinas en sistemas más complejos, lo cual hasta ahora ha sido una limitación práctica. En particular, el estudio de sistemas de fulerenos dopados con nitrógeno servirá como un caso de prueba crítico para demostrar tanto la eficiencia computacional del módulo como su capacidad para predecir cambios en la constante hiperfina en función del tamaño del sistema.',
];

export const HIPOTESIS_TEXT =
  'La validación de las constantes hiperfinas mediante la novedosa implementación de éstas dentro del marco teórico de la Teoría de los Funcionales de la Densidad Auxiliar que predicen los errores o desviaciones de las constantes calculadas están dentro del error experimental, estadísticamente hablando y además nuestras predicciones son comparables a los métodos que tienen una alta correlación electrónica.';

export const OBJETIVO_GENERAL =
  'Crear un módulo dentro del software deMon2k para el cálculo del parámetro de resonancia paramagnética electrónica, conocido como Constante de Acoplamiento Hiperfino y validar los cálculos obtenidos con este método, tanto con valores experimentales como valores calculados con un método altamente correlacionado como lo es: el Método de Coupled-Cluster. Así como analizar la calidad de los resultados obtenidos, usando diferentes combinaciones de los funcionales de intercambio y correlación, funciones de base y funciones auxiliares. Además de comprobar la eficiencia computacional de la implementación usando sistemas relativamente grandes, como la constante hiperfina del átomo de nitrógeno encapsulado en fulerenos que crecen sistemáticamente.';

export const OBJETIVOS_ESPECIFICOS: string[] = [
  'Búsqueda bibliográfica de moléculas pequeñas, cuyas constantes hiperfinas estén medidas y que además estas constantes hayan sido calculadas con el Método de Couple-Cluster.',
  'Programar las cuatro contribuciones conocidas en el marco teórico de la Teoría de los Funcionales de la Densidad Auxiliar en conjunto con su respectiva Teoría de Perturbaciones en el software deMon2k usando el lenguaje de programación Fortran 90.',
  'Construir la geometría molecular de cada una de las moléculas colectadas en la búsqueda bibliográfica.',
  'Optimizar cada una de las moléculas usando el funcional de intercambio y correlación PBE y las funciones de base DZVP-GGA, la función auxiliar GEN-A2*.',
  'Calcular la constante hiperfina en cada una de las moléculas optimizadas, usando los funcionales de intercambio y correlación (VWN, PBE, PW91, OLYP, OPBE y BLYP), las funciones de base (aug-pcS-X, aug-pcJ-X, aug-ccpVXZ y DZVP) y finalmente las funciones auxiliares (A2, GEN-A2*, GEN-A3*).',
  'Analizar los datos obtenidos con el Método ADFT y compararlos estadísticamente, tanto con los valores experimentales y aquellos obtenidos con el Método Coupled-Cluster para determinar la combinación de funcional, función de base y funciones auxiliares más conveniente para realizar cálculos de esta propiedad.',
  'Concluir si las constantes hiperfinas calculadas con nuestro módulo de ADFT son confiables o no.',
  'Buscar en bases de datos de internet las estructuras de fulerenos de diferentes tamaños y agregar un átomo de nitrógeno en sus centros.',
  'Calcular los sistemas de fulerenos y analizar la eficiencia computacional en función del número de base.',
  'Analizar cómo cambia la constante de acoplamiento hiperfina del nitrógeno al aumentar el tamaño del fulereno.',
];

export const METODOLOGIA_STEPS: string[] = [
  'Optimización local de las moléculas encontradas usando el funcional de intercambio y correlación PBE y las funciones de base DZVPDZV-GGA junto con las funciones auxiliares GEN-A2* usando el software deMon2k.',
  'Revisión del módulo para cálculo de constantes de acoplamiento hiperfino para detectar posibles errores.',
  'Aprender Fortran-90 y corregir los errores detectados.',
  'Tomar la molécula del radical metilo y hacer cálculos sobre esta molécula y revisar que los resultados concuerdan con los datos experimentales, en caso de que no se repitan los pasos 2 y 3.',
  'Sabiendo que las constantes del radical metilo están bien predichas se procede a calcular todo el conjunto de moléculas encontradas.',
  'Se usarán los funcionales de intercambio y correlación: VWN, PBE, PW91, OLYP, OPBE.',
  'Se usarán los conjuntos de funciones de bases: aug-cc-pVXZ (X= D, T, Q, 5); aug-pcJ-X (X= 0, 1, 2, 3, 4, 5, 6).',
  'Se utilizan las funciones auxiliares: GEN-A2, GEN-A2*, GEN-A2**, GEN-A3, GEN-A3*, GEN-A3**.',
  'Calcular todo el conjunto de moléculas usando todas las combinaciones posibles de funcional, conjunto de bases y bases auxiliares.',
  'Realizar un script o programa que colecte todos los datos obtenidos y que los ponga en una tabla.',
  'Utilizar dicho script para calcular el error o desviación de nuestras constantes hiperfinas calculadas contra los datos experimentales y realizar estadísticas con estos errores (error medio, promedio de error, promedio de error absoluto, etc.)',
  'Calcular la constante hiperfina del átomo de nitrógeno encerrado en fulerenos de diversos tamaños y realizar una estadística de tiempo de cómputo contra número de átomos del sistema o número de procesadores usados.',
];

export const RECURSOS_TEXT =
  'Este proyecto es realizado en conjunto con varias personas encargadas de diferentes partes de un proyecto mayor, entre las personas que colaboran se encuentra: Ingrid Aribeth Trujillo Avila, Marlon Saul Ojeda Percastegui, además para realizarse, se utilizan computadoras capaces de realizar cálculos de alto costo computacional, así como contar con el apoyo del Cinvestav (Centro de Investigación y de Estudios Avanzados).';

export const DEMON2K_INTRO =
  'deMon (density of Montréal) es un paquete de software para cálculos de teoría funcional de la densidad (DFT). Utiliza el enfoque de combinación lineal de orbitales de tipo gaussiano (LCGTO) para la solución autoconsistente de las ecuaciones DFT de Kohn-Sham (KS). El cálculo de las integrales de repulsión electrónica de cuatro centros se evita introduciendo una base de funciones auxiliares para el ajuste variacional del potencial de Coulomb.';

export interface FeatureItem {
  text: string;
  links?: { label: string; url: string }[];
  suffix?: string;
}

export const DEMON2K_PUBLIC_FEATURES: FeatureItem[] = [
  { text: 'Modelos de energía cuántico-mecánicos (QM), moleculares (MM) e híbridos QM/MM en un solo paquete de software.' },
  { text: 'El ajuste de densidad variacional para el potencial de Coulomb y Fock evita el cálculo de las integrales de repulsión electrónica de cuatro centros (ERIS).' },
  { text: 'LCGTO Kohn-Sham y Teoría del Funcional de Densidad Auxiliar (ADFT), así como la teoría de Harthree-Fock disponibles' },
  { text: 'Amplia selección de funcionales LDA, GGA, mGGA e híbridos para Kohn-Sham y ADFT; correcciones de dispersión empíricas para todos los elementos.' },
  { text: 'Método de campo autoconsistente (SCF) restringido, no restringido, de capa abierta restringida y no restringido restringido para todos los enfoques ab initio.' },
  { text: 'Generación automática de conjuntos de funciones auxiliares para el ajuste de potenciales de Coulomb y Fock.' },
  { text: 'Relaciones de recurrencia ERI analíticas de tres centros sin limitación l y doble expansión asintótica' },
  { text: 'Relaciones de recurrencia integrales ECP y MCP seminuméricas sin limitación l' },
  { text: 'Mallas adaptativas (y fijas) centradas en átomos para la integración numérica de funcionales de intercambio-correlación.' },
  { text: 'Optimización de la estructura local y búsqueda del estado de transición con el algoritmo de pasos restringidos (cuasi) Newton.' },
  { text: 'Interpolación de silla de montar de doble extremo para la búsqueda automática de estados de transición no intuitivos.' },
  { text: 'Cálculos de la coordenada de reacción intrínseca' },
  { text: 'Dinámica molecular de Born-Oppenheimer (BOMD) y dinámica molecular QM/MM (NVE, NVT); cálculos de propiedades BOMD' },
  { text: 'ADFT dependiente del tiempo (TD-ADFT) para el cálculo de espectros UV/VIS' },
  { text: 'Teoría de perturbación de densidad auxiliar (ADPT) para el cálculo de polarizabilidades estáticas y dinámicas (α,β) y funciones de Fukui.' },
  { text: 'Enfoque no iterativo para el método de Kohn-Sham perturbado acoplado (NIA-CPKS) para polarizabilidades estáticas dipolo-dipolo y dipolo-cuadrupolo' },
  { text: 'Resonancia magnética nuclear (RMN), apantallamiento magnético y magnetizabilidad molecular a partir de ADFT-GIAO' },
  { text: 'Tensor g rotacional y constantes de rotación de espín nuclear de ADFT-GIAO' },
  { text: 'Cálculo del espectro de absorción y emisión de rayos X' },
  { text: 'Funciones termodinámicas a partir de la aproximación del gas ideal poliatómico y simulaciones BOMD.' },
  { text: 'Momentos eléctricos, DOS y análisis de población (Mulliken, Löwdin, NBO, Bader, Voroni, Becke, Hirshfeld, etc.)' },
  { text: 'Visualización de campos moleculares y análisis topológico de la densidad electrónica y el potencial electrostático.' },
  {
    text: 'Interfaz para software de visualización (',
    links: [
      { label: 'Molden', url: 'https://www.theochem.ru.nl/molden/' },
      { label: 'Molekel', url: 'http://ugovaretto.github.io/molekel/' },
      { label: 'Vu', url: 'http://www.invisu.ca/e/vuchem.php' },
      { label: 'XAIM', url: 'http://www.quimica.urv.es/XAIM/' },
    ],
    suffix: ') y CHARMM.',
  },
  { text: 'Código totalmente paralelo MPI, portable a diversas plataformas informáticas y sistemas operativos.' },
  { text: 'Conjuntos de bases optimizados para DFT y software de utilidad' },
  {
    text: 'Interfaz para ',
    links: [{ label: 'Libxc', url: 'https://libxc.gitlab.io/' }],
  },
];

export const DEMON2K_PRIVATE_FEATURES: string[] = [
  'ADFT restringido',
  'Interacciones de dispersión',
  'Propagador de electrones',
  'Cálculo de carga fraccionaria',
  'Modelo híbrido QM/MM con campo de fuerza polarizable y modelo de inducción de dipolo puntual de carga.',
  'Metadinámica combinada con ADFT y métodos de enlace fuerte de la teoría del funcional de la densidad.',
  'ADFT multicomponente',
  'Funcionales con separación de rango',
  'TD-ADFT en tiempo real para simulaciones de dinámica electrónica de attosegundos',
  'Definiciones revisadas de dureza local y núcleo de dureza',
  'Varias variantes de la función α introducidas por JP Perdew en mGGA',
  'Hiperpolarizabilidades de primer orden estáticas y dinámicas obtenidas mediante TD-ADPT',
];
