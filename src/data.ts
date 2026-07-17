import { Project, Testimonial } from './types';

export const PROJECTS_DATA: Project[] = [
  {
    id: 'proj-1',
    title: 'Aula Sin Fronteras: Red de Aprendizaje Inclusivo',
    category: 'inclusion',
    categoryLabel: 'Inclusión',
    description: 'Programa de diseño curricular adaptativo para integrar alumnos con capacidades diferentes, mediante material didáctico táctil y tecnologías asistidas.',
    impact: '98% de retención escolar y reconocimiento de la Secretaría de Educación.',
    year: '2024',
    details: [
      'Adaptación curricular personalizada para estilos de aprendizaje diversos.',
      'Capacitación continua para 25 docentes de educación primaria.',
      'Creación de un banco de recursos táctiles e interactivos compartidos.'
    ]
  },
  {
    id: 'proj-2',
    title: 'Edu-Gamificación: Matemáticas en Movimiento',
    category: 'innovacion',
    categoryLabel: 'Innovación Metodológica',
    description: 'Estrategia metodológica de gamificación y aprendizaje activo para el desarrollo de destrezas lógicas y resolución de problemas cotidianos.',
    impact: 'Incremento del 35% en el desempeño académico de pruebas estandarizadas.',
    year: '2023',
    details: [
      'Diseño de 12 juegos lúdicos y simulaciones matemáticas de la vida real.',
      'Uso balanceado y seguro de tabletas digitales en el aula.',
      'Implementación de portafolios digitales de progreso estudiantil.'
    ]
  },
  {
    id: 'proj-3',
    title: 'Bitácora del Corazón: Gestión Emocional Escolar',
    category: 'emocional',
    categoryLabel: 'Desarrollo Emocional',
    description: 'Implementación diaria de rutinas de mindfulness, termómetro de emociones y círculos de paz para la resolución de conflictos en el aula.',
    impact: 'Reducción del 60% en reportes de conducta e indisciplina escolar.',
    year: '2023',
    details: [
      'Espacio físico de autorregulación (Rincón de la Calma) en cada salón.',
      'Manual de inteligencia emocional adaptado a la infancia.',
      'Talleres mensuales de crianza positiva y empatía para tutores.'
    ]
  },
  {
    id: 'proj-4',
    title: 'Escuela de Puertas Abiertas: Alianzas Comunitarias',
    category: 'comunidad',
    categoryLabel: 'Vinculación Comunitaria',
    description: 'Iniciativa de integración de saberes locales mediante ferias de ciencias, talleres guiados por padres de familia y huertos escolares compartidos.',
    impact: 'Participación activa de más de 200 familias en actividades de aprendizaje.',
    year: '2025',
    details: [
      'Construcción y cuidado colaborativo del huerto escolar sustentable.',
      'Ciclo de charlas profesionales y de oficios con participación de padres.',
      'Creación del Consejo Solidario de Apoyo al Aprendizaje Infantil.'
    ]
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 'test-1',
    author: 'Dra. Leticia Trejo',
    role: 'Directora de Zona Escolar',
    institution: 'Secretaría de Educación Pública',
    text: 'La Mtra. Emili Montoya ha demostrado un liderazgo excepcional. Sus proyectos de innovación no solo elevan las calificaciones, sino que verdaderamente transforman el ambiente escolar en espacios donde todos los niños se sienten valorados.',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=120&h=120'
  },
  {
    id: 'test-2',
    author: 'Ricardo Lozano',
    role: 'Docente de Primaria',
    institution: 'Colegio Sierra Madre',
    text: 'Trabajar bajo la guía de Emili ha sido sumamente inspirador. Ella provee las herramientas y la confianza necesarias para que nos atrevamos a innovar en el aula, con una estructura metodológica sólida.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=120&h=120'
  },
  {
    id: 'test-3',
    author: 'Sofía Escalante',
    role: 'Representante de la Asociación de Padres',
    institution: 'Comunidad Escolar Alborada',
    text: 'Por primera vez, los padres de familia nos sentimos verdaderos socios en la educación de nuestros hijos. Su enfoque en la escucha activa y la inclusión comunitaria ha sanado la relación entre escuela y hogar.',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=120&h=120'
  }
];
