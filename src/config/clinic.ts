export const clinic = {
  name: "Clinica del Pie - Sonia González",
  logo: "/images/logo.png",
  tagline: "Fisioterapia y Podología especializada en Córdoba",
  description: "Clínica del Pie - Sonia González es tu centro de fisioterapia y podología de confianza en Córdoba, Álava. Ofrecemos fisioterapia manual avanzada, punción seca, estudios biomecánicos de la pisada y plantillas personalizadas a medida. Con 5 estrellas en Google y más de 106 reseñas, nuestro equipo de profesionales combina técnicas manuales especializadas con un trato cercano y personalizado para tu completa recuperación.",
  colors: {
    primary: "#44aa7d",
    secondary: "#1b171e",
    accent: "#1b171e",
    neutral: "#f0f8f5"
  },
  phone: "610 14 52 60",
  whatsapp: "+34610145260",
  whatsappMessage: "Hola, me gustaría solicitar información sobre vuestros tratamientos de fisioterapia.",
  email: "",
  address: {
    street: "Calle Olimpo, 1 (Avd. Libia S/N) Junto gasolinera Carrefour Zahira, Sureste, 14014 Córdoba, España",
    city: "Córdoba",
    province: "Álava",
    postalCode: "14014",
    country: "España"
  },
  googleMapsUrl: "https://maps.google.com/?cid=6010036947059891316&g_mp=Cilnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaE5lYXJieRACGAQgAA",
  googleMapsEmbed: "https://maps.google.com/maps?q=Clinica%20del%20Pie%20-%20Sonia%20Gonz%C3%A1lez%20%4037.8937%2C-4.75033&z=16&output=embed",
  coordinates: {
    lat: 37.8937,
    lng: -4.75033
  },
  schedule: [
    {
      days: "lunes - jueves",
      hours: "9:00–20:00"
    },
    {
      days: "viernes",
      hours: "9:00–14:00"
    },
    {
      days: "sábado - domingo",
      hours: "Cerrado"
    }
  ],
  social: {
    instagram: null,
    facebook: null,
    linkedin: null,
    tiktok: null
  },
  reviews: {
    rating: 5,
    count: 106,
    url: "https://maps.google.com/?cid=6010036947059891316&g_mp=Cilnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaE5lYXJieRACGAQgAA",
    featured: [
      {
        author: "Enrique Lozano Bermudo",
        rating: 5,
        text: "Adrián, fisioterapeuta de esta clínica,es un gran profesional.Siempre muy atento,su técnica es manual (nada de aparatología). Al terminar cada sesión te da la valoración del estado en que se encuentra la zona tratada y te recomienda ejercicios de movilidad para que mejores desde casa.Se nota que le apasiona su trabajo, y como paciente lo notas.Si buscas fisioterapeuta, no lo pienses más, seguro acabarás recomendándolo como yo =)",
        date: "Hace 3 meses"
      },
      {
        author: "Juan Pineda",
        rating: 5,
        text: "Acudí a la clínica para una valoración podológica y la experiencia fue muy satisfactoria. El trato fue profesional y cercano, me explicaron en todo momento el diagnóstico y el tratamiento a realizar, y consiguieron aliviar completamente el malestar que presentaba. Angie, la profesional que me atendió, realizó un trabajo excelente. Muy satisfecho con la atención recibida. Clínica totalmente recomendable",
        date: "Hace 2 meses"
      },
      {
        author: "Veronica Moraño",
        rating: 5,
        text: "He venido en varias ocasiones con mis hijos porque me recomendaron Adrián y no puedo estar más contenta, súper profesional y siempre te aconseja lo mejor, si necesitas pocas sesiones o solo una te lo dice y no te saca el dinero!!! Además  si en cualquier momento necesitas punción seca lo tiene disponible que en muchas clínicas no hay!!! Recomendado 100%",
        date: "Hace 5 meses"
      },
      {
        author: "Cris Sanca",
        rating: 5,
        text: "Inmejorable, se notan los años de experiencia y el gusto por su profesión. Fui para un estudio de la pisada y las plantillas a medida son muy cómodas y el resultado muy satisfactorio.",
        date: "Hace 2 semanas"
      },
      {
        author: "Rocio Avila Pedraza",
        rating: 5,
        text: "Buena clínica. En especial destacar el trabajo de Adrián que es muy profesional. Buen trabajo manual y con la punción seca. Recomendable 100%",
        date: "Hace 5 meses"
      }
    ]
  },
  services: [
    {
      id: "fisioterapia-manual",
      name: "Fisioterapia Manual",
      description: "Técnicas manuales especializadas sin aparatología para tratar lesiones musculares y articulares. Nuestros fisioterapeutas aplican métodos avanzados adaptados a cada paciente, garantizando resultados efectivos. Al finalizar cada sesión recibirás valoración del estado de tu lesión y recomendaciones personalizadas de ejercicios para continuar tu recuperación en casa.",
      benefits: [
        "Tratamiento 100% manual y personalizado",
        "Valoración detallada en cada sesión",
        "Ejercicios específicos para casa"
      ],
      icon: "Hand"
    },
    {
      id: "puncion-seca",
      name: "Punción Seca",
      description: "Técnica avanzada para el tratamiento de puntos gatillo miofasciales y contracturas musculares profundas. Eliminamos el dolor crónico y las tensiones musculares con precisión. Disponible de forma inmediata cuando tu tratamiento lo requiere, sin esperas ni derivaciones a otros centros.",
      benefits: [
        "Alivio inmediato del dolor muscular",
        "Tratamiento de contracturas profundas",
        "Disponibilidad inmediata en clínica"
      ],
      icon: "Target"
    },
    {
      id: "estudio-pisada",
      name: "Estudio Biomecánico de la Pisada",
      description: "Análisis completo y personalizado de tu forma de caminar y pisar para detectar alteraciones biomecánicas. Realizamos una valoración podológica exhaustiva con diagnóstico detallado. Te explicamos en todo momento los hallazgos y el tratamiento más adecuado para corregir problemas posturales y prevenir lesiones.",
      benefits: [
        "Diagnóstico preciso y detallado",
        "Prevención de lesiones futuras",
        "Explicación clara del tratamiento"
      ],
      icon: "Activity"
    },
    {
      id: "plantillas-medida",
      name: "Plantillas Personalizadas a Medida",
      description: "Diseño y fabricación de plantillas ortopédicas totalmente personalizadas según tu estudio biomecánico. Elaboradas con materiales de alta calidad para garantizar máxima comodidad y durabilidad. Resultados muy satisfactorios respaldados por años de experiencia en podología especializada.",
      benefits: [
        "Diseño 100% personalizado",
        "Máxima comodidad y adaptación",
        "Resultados comprobados y duraderos"
      ],
      icon: "Heart"
    },
    {
      id: "fisioterapia-deportiva",
      name: "Fisioterapia Deportiva",
      description: "Tratamiento especializado para deportistas y personas activas que buscan recuperarse de lesiones o mejorar su rendimiento. Combinamos fisioterapia manual con técnicas avanzadas para una recuperación óptima. Programas adaptados a tu nivel de actividad y objetivos deportivos específicos.",
      benefits: [
        "Recuperación acelerada de lesiones",
        "Prevención de futuras lesiones",
        "Mejora del rendimiento deportivo"
      ],
      icon: "Dumbbell"
    },
    {
      id: "tratamiento-infantil",
      name: "Fisioterapia y Podología Infantil",
      description: "Atención especializada para niños con problemas de pisada, postura o lesiones musculares. Tratamos a los más pequeños con profesionalidad y cercanía, creando un ambiente de confianza. Valoramos cada caso de forma individual y recomendamos solo los tratamientos realmente necesarios, sin alargar sesiones innecesarias.",
      benefits: [
        "Trato especializado para niños",
        "Ambiente cercano y de confianza",
        "Honestidad en el número de sesiones"
      ],
      icon: "Heart"
    },
    {
      id: "rehabilitacion",
      name: "Rehabilitación Personalizada",
      description: "Programas de rehabilitación diseñados específicamente para tu lesión o cirugía. Seguimiento continuo de tu evolución con ajustes constantes del tratamiento según tu progreso. Te acompañamos desde la primera sesión hasta tu recuperación completa con ejercicios progresivos y adaptados.",
      benefits: [
        "Plan de tratamiento individualizado",
        "Seguimiento continuo de tu evolución",
        "Ejercicios progresivos adaptados"
      ],
      icon: "Activity"
    },
    {
      id: "tratamiento-dolor",
      name: "Tratamiento del Dolor Crónico",
      description: "Abordaje integral del dolor persistente mediante técnicas manuales avanzadas y punción seca. Identificamos la causa real de tu dolor para tratarlo de raíz, no solo los síntomas. Conseguimos aliviar completamente el malestar con tratamientos efectivos y duraderos.",
      benefits: [
        "Eliminación de la causa del dolor",
        "Técnicas avanzadas y efectivas",
        "Alivio completo y duradero"
      ],
      icon: "Zap"
    }
  ],
  process: [
    {
      step: 1,
      title: "Contacta con nosotros",
      description: "Llama al 610 14 52 60 o envíanos un WhatsApp para solicitar tu cita. Te atenderemos de forma cercana y profesional, ajustándonos a tus horarios y necesidades."
    },
    {
      step: 2,
      title: "Valoración profesional completa",
      description: "Realizamos una evaluación exhaustiva de tu lesión o problema podológico. Te explicamos en todo momento el diagnóstico detallado, las causas y el tratamiento más adecuado para tu caso específico."
    },
    {
      step: 3,
      title: "Tratamiento manual personalizado",
      description: "Aplicamos técnicas manuales especializadas, punción seca si es necesaria, o diseñamos tus plantillas personalizadas. Sin aparatología innecesaria, solo el tratamiento que realmente necesitas. Te indicamos honestamente cuántas sesiones requieres."
    },
    {
      step: 4,
      title: "Seguimiento y recuperación completa",
      description: "Al finalizar cada sesión valoramos tu evolución y te damos ejercicios específicos para mejorar desde casa. Seguimiento continuo hasta tu completa recuperación con recomendaciones personalizadas de movilidad."
    }
  ],
  whyUs: [
    {
      title: "5 Estrellas con más de 106 Reseñas Reales",
      description: "Nuestros pacientes nos avalan con una valoración perfecta de 5 estrellas en Google y más de 106 opiniones positivas. Destacan nuestra profesionalidad, el trato cercano, la honestidad en los tratamientos y los resultados efectivos que conseguimos. Una prueba real de nuestro compromiso con tu recuperación.",
      icon: "Heart"
    },
    {
      title: "Fisioterapia 100% Manual y Personalizada",
      description: "Trabajamos exclusivamente con técnicas manuales especializadas, sin depender de aparatología. Cada tratamiento es completamente personalizado según tu lesión específica. Al finalizar cada sesión recibes valoración detallada de tu evolución y ejercicios específicos para continuar tu recuperación en casa.",
      icon: "Hand"
    },
    {
      title: "Honestidad y Transparencia Total",
      description: "Te indicamos desde el principio cuántas sesiones necesitas realmente, sin alargar tratamientos innecesarios para sacar más dinero. Si tu lesión requiere solo una o pocas sesiones, te lo decimos claramente. Nuestra prioridad es tu recuperación, no el número de citas.",
      icon: "Target"
    },
    {
      title: "Equipo con Años de Experiencia",
      description: "Nuestros profesionales cuentan con años de experiencia en fisioterapia y podología especializada. Se nota la pasión por nuestro trabajo en cada tratamiento. Disponemos de técnicas avanzadas como punción seca de forma inmediata, sin derivaciones a otros centros, y realizamos estudios biomecánicos con plantillas personalizadas de máxima calidad.",
      icon: "Activity"
    }
  ],
  team: [
    {
      name: "Adrián",
      role: "Fisioterapeuta Especializado",
      image: "/images/team/placeholder.jpg",
      bio: "Profesionales apasionados por la fisioterapia y la rehabilitación. En Clinica del Pie - Sonia González nos dedicamos a devolver la calidad de vida a nuestros pacientes con tratamientos personalizados y tecnología avanzada."
    },
    {
      name: "Angie",
      role: "Podóloga Especializada",
      image: "/images/team/placeholder.jpg",
      bio: "Profesionales apasionados por la fisioterapia y la rehabilitación. En Clinica del Pie - Sonia González nos dedicamos a devolver la calidad de vida a nuestros pacientes con tratamientos personalizados y tecnología avanzada."
    }
  ],
  gallery: [
    {
      src: "/images/hero.webp",
      alt: "Clinica del Pie - Sonia González - Imagen 1"
    },
    {
      src: "/images/gallery/2.webp",
      alt: "Clinica del Pie - Sonia González - Imagen 2"
    },
    {
      src: "/images/gallery/3.webp",
      alt: "Clinica del Pie - Sonia González - Imagen 3"
    }
  ],
  faq: [
    {
      question: "¿Qué tipo de tratamientos ofrece Clínica del Pie - Sonia González?",
      answer: "En Clínica del Pie - Sonia González ofrecemos fisioterapia manual especializada, punción seca, estudios biomecánicos de la pisada, plantillas personalizadas a medida, fisioterapia deportiva y tratamientos podológicos para adultos y niños. Todos nuestros tratamientos son 100% manuales y personalizados, sin aparatología innecesaria, enfocados en tu recuperación completa."
    },
    {
      question: "¿Cuántas sesiones necesitaré para recuperarme?",
      answer: "En nuestra clínica trabajamos con total transparencia y honestidad. Te indicamos desde el principio cuántas sesiones necesitas realmente, sin alargar tratamientos innecesarios. Si tu lesión requiere solo una o pocas sesiones, te lo decimos claramente. Al finalizar cada sesión valoramos tu evolución y ajustamos el plan de tratamiento según tu progreso real."
    },
    {
      question: "¿Utilizan aparatos o solo técnicas manuales?",
      answer: "Nuestro enfoque es principalmente manual, sin depender de aparatología. Nuestros fisioterapeutas aplican técnicas manuales especializadas que han demostrado ser más efectivas para la mayoría de lesiones. Además, disponemos de punción seca cuando el tratamiento lo requiere, una técnica avanzada que no todos los centros ofrecen de forma inmediata."
    },
    {
      question: "¿Cómo funciona el estudio de la pisada y las plantillas?",
      answer: "Realizamos un estudio biomecánico completo de tu pisada con una valoración podológica exhaustiva. Te explicamos detalladamente el diagnóstico y el tratamiento recomendado. Si necesitas plantillas, las diseñamos completamente personalizadas y a medida según tu estudio, garantizando máxima comodidad y resultados muy satisfactorios respaldados por años de experiencia."
    },
    {
      question: "¿Atienden a niños en la clínica?",
      answer: "Sí, atendemos a niños con total profesionalidad y cercanía. Tratamos problemas de pisada, postura y lesiones musculares infantiles con un enfoque especializado. Muchas familias nos recomiendan precisamente por nuestro trato cercano con los más pequeños y por nuestra honestidad al indicar solo los tratamientos realmente necesarios, sin alargar sesiones innecesarias."
    },
    {
      question: "¿Qué es la punción seca y cuándo se aplica?",
      answer: "La punción seca es una técnica avanzada para tratar puntos gatillo miofasciales, contracturas profundas y dolor crónico muscular. En Clínica del Pie - Sonia González disponemos de esta técnica de forma inmediata cuando tu tratamiento lo requiere, sin necesidad de derivarte a otros centros. Muchos pacientes destacan su efectividad para eliminar contracturas y dolor persistente."
    },
    {
      question: "¿Por qué tiene Clínica del Pie - Sonia González tan buenas valoraciones?",
      answer: "Contamos con 5 estrellas en Google y más de 106 reseñas positivas de pacientes reales. Nuestros clientes valoran especialmente la profesionalidad de nuestro equipo, el trato cercano y personalizado, la honestidad al indicar solo los tratamientos necesarios, y los resultados efectivos que conseguimos. Se nota la pasión por nuestro trabajo y el compromiso real con la recuperación de cada paciente."
    },
    {
      question: "¿Cómo puedo solicitar cita en Clínica del Pie - Sonia González?",
      answer: "Puedes solicitar tu cita llamando directamente al 610 14 52 60 o enviándonos un mensaje por WhatsApp al mismo número. Te atenderemos de forma cercana y profesional, ajustándonos a tus horarios y necesidades. Estamos ubicados en Córdoba, Álava, y estaremos encantados de ayudarte en tu recuperación."
    }
  ],
  seo: {
    titleTemplate: "%s | Clinica del Pie - Sonia González",
    defaultTitle: "Fisioterapia y Podología en Córdoba | Clínica del Pie",
    defaultDescription: "Clínica del Pie - Sonia González en Córdoba, Álava. Fisioterapia manual, punción seca, estudios de pisada y plantillas personalizadas. 5★ en Google. Llama al 610 14 52 60",
    keywords: [
      "fisioterapia Córdoba",
      "podología Córdoba",
      "fisioterapeuta Córdoba Álava",
      "Clinica del Pie Sonia González",
      "punción seca Córdoba",
      "estudio pisada Córdoba",
      "plantillas personalizadas Córdoba",
      "fisioterapia manual Córdoba",
      "podólogo Córdoba",
      "fisioterapia deportiva Córdoba",
      "rehabilitación Córdoba",
      "tratamiento dolor Córdoba"
    ],
    ogImage: "/og-image.jpg"
  },
  legal: {
    companyName: "Clinica del Pie - Sonia González",
    cif: "",
    registeredAddress: "Calle Olimpo, 1 (Avd. Libia S/N) Junto gasolinera Carrefour Zahira, Sureste, 14014 Córdoba, España, Córdoba, Álava"
  },
  heroHeadline: [
    "Tu Centro de",
    "Fisioterapia",
    "en Córdoba"
  ],
  heroDescription: "En Clínica del Pie - Sonia González te ofrecemos fisioterapia manual especializada y tratamientos podológicos avanzados en Córdoba. Nuestro equipo de profesionales expertos utiliza técnicas manuales, punción seca y estudios biomecánicos personalizados para garantizar tu recuperación completa. Con valoración de 5 estrellas y más de 106 opiniones positivas, te acompañamos en cada paso hacia tu bienestar.",
  specialty: "Fisioterapia y Podología",
  ctaLabel: "Tu Recuperación",
  ctaHeadline: "¿Listo para recuperar tu bienestar y movilidad?",
  ctaDescription: "Solicita tu cita de valoración en Clínica del Pie - Sonia González. Te ofrecemos un diagnóstico profesional y un plan de tratamiento personalizado para tu recuperación completa.",
  statsLabel: "Pacientes",
  schemaType: "PhysicalTherapy",
  sectionCopy: {
    servicesLabel: "Nuestros Servicios",
    servicesTitle: "Tratamientos especializados",
    servicesDescription: "Soluciones profesionales adaptadas a tus necesidades de salud.",
    processLabel: "Cómo Trabajamos",
    processTitle: "Tu camino hacia la recuperación en 4 pasos",
    processDescription: "Un proceso simple y transparente diseñado para tu comodidad.",
    whyUsLabel: "Por Qué Elegirnos",
    whyUsTitle: "Tu salud, nuestra prioridad",
    whyUsDescription: "Combinamos experiencia, las mejores técnicas y un trato personalizado para cuidar de tu salud.",
    reviewsLabel: "Opiniones",
    reviewsTitle: "Lo que dicen nuestros pacientes",
    galleryLabel: "Instalaciones",
    galleryTitle: "Conoce nuestra clínica",
    galleryDescription: "Un espacio diseñado para tu bienestar y recuperación",
    faqLabel: "FAQ",
    faqTitle: "Preguntas frecuentes",
    faqDescription: "Resolvemos las dudas más comunes de nuestros pacientes.",
    locationLabel: "Ubicación",
    locationTitle: "Cómo llegar",
    teamLabel: "Nuestro Equipo",
    teamTitle: "Profesionales especializados",
    teamDescription: "Experiencia y dedicación al servicio de tu salud"
  }
}

export type Clinic = typeof clinic
