export default {
  global: {
    componenteFormativo: 'Recolección y análisis de datos',
    descripcionCurso:
      'El tratamiento de la información constituye una actividad clave e indispensable en la administración de cualquier unidad productiva, gracias a ello, es posible aprender de hechos pasados y anticiparse a situaciones problemáticas. <br><br>Hacer uso de las metodologías y herramientas disponibles en la actualidad agilizará la gestión administrativa y otorgará más garantías en el manejo de los datos.</br></br>',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Información',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Uso',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Ciclo de vida',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Lenguaje técnico',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Confidencialidad',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Fuentes',
            hash: 't_1_5',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Métodos de recolección',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Criterios de selección',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Observación',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Entrevista',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Encuesta',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Análisis de contenido',
            hash: 't_2_5',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Titulo de primer nivel',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Usos',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Herramientas ofimáticas',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Softwares de recolección de datos',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Licencias',
            hash: 't_3_4',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Métodos de recolección',
      referencia:
        'UNICEF Innocenti. (2014). Métodos de recolección y análisis de datos en la evaluación de impacto [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://youtu.be/Ph1WX0cH5-4',
    },
    {
      tema: 'Ofimática',
      referencia:
        'Escobar, J. (2020). Qué es la Ofimática OFI: Oficina, MATICA: Informática! Fácil y resumido!! [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://youtu.be/N1Jwap5uOhY',
    },
    {
      tema: 'Softwares de recolección de datos',
      referencia:
        'Regalado, J. (2020) Crea CUESTIONARIOS autoevaluables con Google FORMULARIOS [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://youtu.be/4kp-csZQXqU',
    },
  ],
  glosario: [
    {
      termino: 'Código fuente',
      significado:
        'Listado de instrucciones que parametrizan el funcionamiento de un software. ',
    },
    {
      termino: 'Encriptación',
      significado:
        'Sistema de seguridad en el que se modifican los archivos digitales mediante algoritmos para hacerlos ilegibles en caso de ser sustraídos sin autorización. ',
    },
    {
      termino: 'Fenómeno',
      significado:
        'Cualquier situación o manifestación que se percibe con los sentidos.',
    },
    {
      termino: 'Inferencia',
      significado: 'Que deduce una afirmación a  partir de otras.',
    },
    {
      termino: 'Propiedad intelectual',
      significado:
        'Derecho que se posee sobre una idea, concepto o cualquier creación surgida del intelecto humano.',
    },
    {
      termino: '<em>Software</em>',
      significado: 'Conjunto de programas para computadora. ',
    },
    {
      termino: 'Unívoco',
      significado: 'Algo que siempre tiene el mismo significado.',
    },
  ],
  referencias: [
    {
      referencia:
        'ACNUR. (2001). Constitución política de Colombia [Documento PDF].',
      link: 'https://www.acnur.org/fileadmin/Documentos/BDL/2001/0219.pdf',
    },
    {
      referencia:
        'Castillo, A. (2018). Lenguaje técnico: características y ejemplos. Lifeder.',
      link: '',
    },
    {
      referencia:
        'Centro de Investigación en Comunicación. (2010). Manual de herramientas de metodología para investigar en comunicación: Técnicas de recolección y análisis [Documento PDF].',
      link:
        'https://filadd.com/doc/tomo2-1-manual-herramientas-de-metodol-para',
    },
    {
      referencia:
        'CEPAL. (2021, octubre 11). Tipos de datos - Gestión de datos de investigación - Biblioguías at CEPAL. Biblioguías CEPAL.',
      link:
        'https://biblioguias.cepal.org/gestion-de-datos-de-investigacion/tipos-datos',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (2008, diciembre 31). Ley 1266 de 2008 Congreso de la República de Colombia. Alcaldía Mayor de Bogotá.',
      link:
        'https://www.alcaldiabogota.gov.co/sisjur/normas/Norma1.jsp?i=34488',
    },
    {
      referencia:
        'Emanuelli, P., García Lucero, D., Ortuzar, I., Von Sprecher, R., Egidos, D., Dorado, C., & Ulla, C. (2012). Herramientas de Metodología para investigar en comunicación: Técnicas de recolección y análisis de la información [Documento PDF].',
      link: 'https://rdu.unc.edu.ar/handle/11086/29903',
    },
    {
      referencia:
        'Lifeder. (2021, agosto 31). Lenguaje técnico: qué es, características, importancia, ejemplos. Lifeder. 1',
      link: 'https://www.lifeder.com/lenguaje-tecnico/ ',
    },
    {
      referencia:
        'OBS Business School. (2020, diciembre 2). Las 4 fases del ciclo de vida de los datos. OBS Business School.',
      link:
        'https://www.obsbusiness.school/blog/las-4-fases-del-ciclo-de-vida-de-los-datos',
    },
    {
      referencia:
        'Presidencia de la República de Colombia. (2013, junio 27). Decreto 1377 de 2013. SUIN – JURISCOL.',
      link:
        'http://www.suin-juriscol.gov.co/viewDocument.asp?ruta=Decretos/1276081',
    },
    {
      referencia:
        'Secretaría General del Senado. (2012, octubre 17). Ley 1581 de 2012. Secretaría General del Senado.',
      link:
        'http://www.secretariasenado.gov.co/senado/basedoc/ley_1581_2012.html',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable de línea de producción',
          centro: 'Nombre centro de formación',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Nombre del rol',
          centro: 'Nombre centro de formación',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Diseñador web',
          centro: 'Nombre centro de formación',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Desarrollador Fullstack',
          centro: 'Nombre centro de formación',
        },
        {
          nombre: 'Nombre',
          cargo: 'Animador y Producción audiovisual',
          centro: 'Nombre centro de formación',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Nombre validador',
          cargo: 'Validación y vinculación en plataforma LMS',
          centro: 'Nombre centro formación',
        },
        {
          nombre: 'Nombre validador',
          cargo: 'Validación de contenidos accesibles',
          centro: 'Nombre centro formación',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
