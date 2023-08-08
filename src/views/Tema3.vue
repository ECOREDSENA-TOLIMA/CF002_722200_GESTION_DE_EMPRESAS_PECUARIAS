<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Ofimática

    .row.justify-content-center.align-items-center 
      .col-lg-4
        figure(data-aos="flip-right")
          img(src='@/assets/curso/temas/tema3/1.svg', alt='Texto que describa la imagen')
      .col-lg-7
        p.mb-3(data-aos="fade-left") La ofimática es la respuesta a un mundo cambiante y a un ambiente organizacional cada vez más complejo, adicionando más procesos productivos que se ejecutan de manera simultánea. Las herramientas tecnológicas han permitido mantener el ritmo de los avances empresariales, brindando facilidades para el control, registro y conservación de la información.
        p.mb-3(data-aos="fade-left") Con la ofimática, es posible mantener el control de innumerables tareas ejecutadas al interior de la empresa. El término es un acrónimo compuesto por las palabras oficina e informático, por lo que se deduce que surge como una herramienta tecnológica que brinda apoyo a tareas administrativas.
        .tarjeta.tarjeta.p-4.mb-5(style="background-color:#DBF9BD")
          p(data-aos="fade-left") Pero esta no se reduce a las herramientas en sí mismas, también incluye los sistemas y métodos necesarios para operarlos, de tal forma que las labores operativas sean paulatinamente reemplazadas por programas automatizados. Al final, los resultados obtenidos deben dirigirse a un procesamiento de datos casi inmediato, una planeación asistida, una programación de tareas, la designación de personal responsable y el seguimiento de los compromisos. 

    separador 
    .titulo-segundo.color-secundario
      h2#t_3_1 3.1 Uso

    p.mb-5(data-aos="fade-left") Como se ha mencionado previamente, la ofimática busca facilitar el trabajo propio de una oficina, y para ello, ofrece herramientas que ofrecen apoyo para estas tareas. Las siguientes son algunas de las funciones que se desprenden de este concepto:

    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")(data-aos="flip-up")
      .row.justify-content-center.align-items-center(titulo="Elaboración y procesamiento de documentos")
        .col-md-5.mb-4.mb-md-0
          p Diseñar documentos y papeles de trabajo cumpliendo con los estándares propuestos por la empresa brinda uniformidad y otorga una identidad característica. Las herramientas más populares para esto son los procesadores de texto y las hojas de cálculo, puesto que cumplen con las tareas típicas de la labor administrativa de una empresa: el diligenciamiento de oficios, y la elaboración de tablas con operaciones aritméticas.
        .col-md-4.offset-1
          figure
            img(src='@/assets/curso/temas/tema3/2.svg', alt='Texto que describa la imagen')
      
      .row.justify-content-center.align-items-center(titulo="Registro documental")
        .col-md-5.mb-4.mb-md-0
          p Otra utilidad fundamental de la ofimática es la de gestionar los documentos y llevar un registro de su trazabilidad con el que sea posible consultar la fecha y hora de su creación y posteriores modificaciones. Esto garantiza el respaldo de los datos a través de diversos mecanismos y mejora la calidad de la supervisión.
        .col-md-4.offset-1
          figure
            img(src='@/assets/curso/temas/tema3/3.svg', alt='Texto que describa la imagen')
      
      .row.justify-content-center.align-items-center(titulo="Consulta automatizada")
        .col-md-5.mb-4.mb-md-0
          p La indización de los documentos permite que su consulta a través de medios electrónicos sea mucho más veloz. Existen softwares con utilidades que permiten consultar a partir de criterios de búsqueda específicos, ya sea por tipo de documento, palabras clave en su nombre o contenido, dimensiones, entre otros.
        .col-md-4.offset-1
          figure
            img(src='@/assets/curso/temas/tema3/4.svg', alt='Texto que describa la imagen')
      
      .row.justify-content-center.align-items-center(titulo="Comunicación instantánea")
        .col-md-5.mb-4.mb-md-0
          p La transmisión oportuna y efectiva de datos es uno de los objetivos de cualquier sistema administrativo. Las organizaciones funcionan como organismos en los que todas las áreas interactúan entre sí, por lo que el poder compartir toda clase de información de forma instantánea, sin importar las distancias o las dimensiones de lo que se desea enviar, aporta nuevas posibilidades para la administración de una empresa.
        .col-md-4.offset-1
          figure
            img(src='@/assets/curso/temas/tema3/5.svg', alt='Texto que describa la imagen')

      .row.justify-content-center.align-items-center(titulo="Teletrabajo")
        .col-md-5.mb-4.mb-md-0
          p En los últimos años, esta modalidad de trabajo ha venido tomando más fuerza. El teletrabajo consiste en la ejecución de las labores propias de la relación laboral desde la distancia, haciendo uso de herramientas tecnológicas que permitan acceder a la información de la compañía, de la misma forma en la que garantizan la recepción de los datos producidos por el trabajador. Esta modalidad ofrece grandes ventajas, como la reducción de costos de desplazamiento, o de alquiler de oficinas de gran capacidad, debido a que los trabajadores pueden laborar desde casa. Puede considerarse la evolución lógica del modelo de trabajo tradicional, donde los dispositivos electrónicos empiezan a tomar poco a poco más protagonismo.
        .col-md-4.offset-1
          figure
            img(src='@/assets/curso/temas/tema3/6.svg', alt='Texto que describa la imagen')

    separador 
    .titulo-segundo.color-secundario
      h2#t_3_2 3.2 Herramientas ofimáticas

    p(data-aos="fade-left") Se consideran herramientas ofimáticas los programas informáticos que cumplen con los objetivos descritos previamente. Funcionan a través de aplicativos que permiten desarrollar actividades varias y tan exigentes como el mundo organizacional demanda en la actualidad. A continuación, se relacionan algunas de las herramientas de mayor demanda en ofimática:

    .row
      .tarjeta.p-4.mb-5(data-aos="flip-up")(style="background-color:#FFFAD0")
        SlyderA(tipo="b")
          .row.justify-content-center.align-items-center 
            .col-md-5.mb-4.mb-md-0.p-4
              h4(data-aos="fade-left") Procesadores de texto
              p(data-aos="fade-left") En ellos se elaboran documentos de texto, como cartas, memorandos o comunicados. Su punto fuerte radica en la generación de documentos con contenido alfanumérico, habilitando su modificación casi permanente, en aspectos que van desde la ortografía, presentación o redacción. Con el pasar del tiempo, han adicionado más funcionalidades complementarias, como la evaluación de la redacción o sintaxis, la proposición de sinónimos, la inserción de formas o imágenes, entre otras. 
            .col-md-6.p-4
              figure(data-aos="fade-right")
                img(src='@/assets/curso/temas/tema3/7.png', alt='Texto que describa la imagen')
                
          .row.justify-content-center.align-items-center 
            .col-md-5.mb-4.mb-md-0.p-4
              h4(data-aos="fade-left") Hojas de cálculo
              p(data-aos="fade-left") Simulan una hoja de trabajo cuadriculada, puesto que su mecánica se centra en el diligenciamiento de casillas para realizar operaciones matemáticas y análisis estadísticos. Su principal enfoque es el del procesamiento de datos cuantitativos, permitiendo efectuar los cálculos de manera prácticamente instantánea. En la actualidad, incluyen utilidades adicionales, como la elaboración de gráficos o diagramas y el cálculo avanzado de estimaciones o proyecciones.
            .col-md-6.p-4
              figure(data-aos="fade-right")
                img(src='@/assets/curso/temas/tema3/8.png', alt='Texto que describa la imagen')

          .row.justify-content-center.align-items-center 
            .col-md-5.mb-4.mb-md-0.p-4
              h4(data-aos="fade-left") Presentación multimedia
              p(data-aos="fade-left") Los reproductores de contenido multimedia posibilitan la visualización y escucha de videos, audios, imágenes o fotografías. Son de especial utilidad en casos donde se espera conservar evidencias o generar copias rápidas de documentos físicos. Facilitan el registro de datos diferentes al texto, enriqueciendo el contenido del archivo de la empresa. 
            .col-md-6.p-4
              figure(data-aos="fade-right")
                img(src='@/assets/curso/temas/tema3/9.png', alt='Texto que describa la imagen')
          
          .row.justify-content-center.align-items-center 
            .col-md-5.mb-4.mb-md-0.p-4
              h4(data-aos="fade-left") Bases de datos
              p(data-aos="fade-left") Son herramientas destinadas a la conservación de la información según los criterios establecidos por el usuario. Su principal utilidad es la velocidad de búsqueda que ofrecen a documentos de cualquier naturaleza; en ellos se pueden almacenar cantidades significantes de información en ambientes de fácil acceso.
            .col-md-6.p-4
              figure(data-aos="fade-right")
                img(src='@/assets/curso/temas/tema3/10.png', alt='Texto que describa la imagen')

          .row.justify-content-center.align-items-center 
            .col-md-5.mb-4.mb-md-0.p-4
              h4(data-aos="fade-left") Programas de mensajería
              p(data-aos="fade-left") Los aplicativos pertenecientes a esta categoría permiten la comunicación de forma inmediata o en diferido, así como el envío y recepción de paquetes de información a través de la red. En el presente, es posible enviar casi cualquier tipo de información por alguno de estos sistemas en apenas unos cuantos minutos.
            .col-md-6.p-4
              figure(data-aos="fade-right")
                img(src='@/assets/curso/temas/tema3/11.png', alt='Texto que describa la imagen')

          .row.justify-content-center.align-items-center 
            .col-md-5.mb-4.mb-md-0.p-4
              h4(data-aos="fade-left") Utilidades
              p(data-aos="fade-left") Son aquellos programas que aportan facilidades para tareas más concretas que los anteriores. Suelen ser más ligeros, sencillos y focalizados. Ejemplos de estos son los gestores de notas de audio o texto, calculadoras, agendas, relojes y temporizadores, entre otros. Su objetivo se centra en abordar tareas sencillas de forma más rápida y eficiente que lo que implicaría el uso de los otros sistemas mencionados previamente. 
            .col-md-6.p-4
              figure(data-aos="fade-right")
                img(src='@/assets/curso/temas/tema3/12.png', alt='Texto que describa la imagen')

    separador 
    .titulo-segundo.color-secundario
      h2#t_3_3 3.3 Softwares de recolección de datos
    
    p.mb-5(data-aos="fade-left") La recolección de datos es una de las mejoras constantes que se ha hecho en la forma de la información y una de las mejoras notables son los programas software con los que se hace esta gestión desde las TIC, tal como se menciona a continuación:


    .tarjeta.tarjeta--gris.p-4
      PasosB.color-acento-contenido(data-aos="flip-up")
        .row.justify-content-center.align-items-center
          .col-md-5.mb-4.mb-md-0
            p(data-aos="fade-left") La gestión de la información es el eje central de cualquier herramienta ofimática, sin embargo, existen sistemas computarizados centrados en facilitar esta tarea, de acuerdo con los parámetros que establezca el usuario. Son la respuesta a problemáticas como la contaminación ambiental o la dificultad para conservar inmensas cantidades de documentación en físico, donde garantizar la integridad de los documentos y espacio para su almacenamiento se vuelve más difícil con el paso del tiempo.
          .col-md-5
            figure(data-aos="fade-right")
              img(src='@/assets/curso/temas/tema3/13.svg', alt='Texto que describa la imagen')
        .row.justify-content-center.align-items-center
          .col-md-5.mb-4.mb-md-0
            p(data-aos="fade-left") Este tipo de herramientas existe desde el siglo XX, pero en lo corrido del presente siglo, el avance supera cualquier antecedente. Su mayor popularidad ha atraído a expertos en la materia para invertir recursos en su optimización; esto, sumado a la popularización del Internet, los hace cada vez más accesibles y diversos, para cubrir las necesidades de todo tipo de poblaciones.
          .col-md-5
            figure(data-aos="fade-right")
              img(src='@/assets/curso/temas/tema3/14.svg', alt='Texto que describa la imagen')
        .row.justify-content-center.align-items-center
          .col-md-5.mb-4.mb-md-0
            p(data-aos="fade-left") Por otro lado, con la masificación de las tecnologías portables, como los dispositivos celulares, su demanda ha escalado a otro nivel, puesto que se puede hacer uso de estos sistemas en cualquier lugar donde se cuente con un teléfono inteligente. Esto ha supuesto un gran avance en el uso de las metodologías de recolección de información, puesto que facilita el trabajo de campo.
          .col-md-5
            figure(data-aos="fade-right")
              img(src='@/assets/curso/temas/tema3/15.svg', alt='Texto que describa la imagen')
              
    .row.justify-content-center.align-items-center.mt-5 
      .col-10
        .tarjeta.tarjeta.p-4.mb-5(style="background-color:#DBF9BD")
          .row.justify-content-center.align-items-center
            .col-lg-5.p-4
              figure(data-aos="fade-right")
                img(src='@/assets/curso/temas/tema3/16.png', alt='Texto que describa la imagen')
            .col-lg-6
              ul.lista-ul.mb-3.text-small
                li 
                  i.lista-ul__vineta
                  | #[b Grabadoras de audio y video:] prácticamente, la totalidad de los celulares ofrecidos en la actualidad cuenta con una cámara fotográfica integrada. Con el paso del tiempo, la calidad de los lentes utilizados ha ido mejorando, por lo que hoy día es posible obtener imágenes o videos muy fidedignos con solo un par de acciones. Con ello, la recolección de información en campo ya no demanda grandes inversiones ni una logística compleja, haciendo aún más viables metodologías de recolección de información como la observación y la encuesta.
                li
                  i.lista-ul__vineta
                  | #[b Encuestas electrónicas:] el sistema tradicional de las encuestas demandaba un trabajo significativo en cuanto a su diseño, impresión, consumo de recursos y el transporte de los documentos hasta la población objeto de estudio; el retorno de estos insumos tras la recolección de información también resultaba costoso, sin contar los riesgos asumidos, como la pérdida de contenido o su deterioro por las condiciones a las que se sometían. Además, una vez recopilados los datos, se hacía necesario transcribirlos en limpio para su posterior tabulación o consolidación, lo que implicaba una gran cantidad de esfuerzo solo organizando la información. 
              p.text-small(data-aos="fade-left") Las encuestas electrónicas solventan una buena porción de las limitantes recientemente descritas, pueden elaborarse y diligenciarse a través de computadoras o dispositivos móviles, ajustándose  a las necesidades de cada usuario, con tamaños y tipos de letra modificables para hacer más cómodo su diligenciamiento. Su conservación suele hacerse en la nube, por lo que los datos pueden ser accedidos desde cualquier ubicación de forma inmediata, y su exportación a hojas de cálculo u otros softwares se hace aún más accesible. Con ello, tanto los costos como el tiempo que se debe destinar se ven reducidos a una mínima porción, lo que abre la posibilidad a encuestas de mayores dimensiones y dirigidas a poblaciones mucho más grandes. 

          .row.justify-content-center.align-items-center
            .col-lg-6
              ul.lista-ul.mb-3.text-small
                li 
                  i.lista-ul__vineta
                  | #[b Sistemas modulares integrados:] comprenden las soluciones más complejas mencionadas hasta ahora, funcionan integrando diversas funcionalidades a través de módulos independientes. Bajo este sistema, se permite la generación de reportes cruzados provenientes de distintos módulos; normalmente, cada módulo satisface las necesidades de un área organizacional, así, el área comercial usa uno diferente al del área de tesorería o al de contabilidad. La magnitud y complejidad de cada sistema modular dependerá de la empresa que lo adquiera, puesto que, en principio, con un solo módulo, ya se pueden cubrir las tareas básicas; si las necesidades de la empresa así lo requieren, podrán implementarse módulos adicionales.
              p.text-small(data-aos="fade-left") En el pasado, el uso de estos sistemas estaba restringido a compañías de grandes dimensiones y presupuestos. Su alto costo estaba asociado a su complejidad y a lo poco masificados de los mismos. Actualmente, existen herramientas muy accesibles para toda clase de empresas, y siguen ofreciendo las bondades que las hicieron populares. Algunas de las ventajas de este sistema son la integración de procesos comerciales, productivos y administrativos, así como la idoneidad en la aplicación de todos los procesos, puesto que cada módulo ha sido desarrollado desde una perspectiva diferente.
            .col-lg-5.p-4
              figure(data-aos="fade-right")
                img(src='@/assets/curso/temas/tema3/17.png', alt='Texto que describa la imagen')

    separador 
    .titulo-segundo.color-secundario
      h2#t_3_4 3.4 Licencias

    p.mb-5(data-aos="fade-left") Los aplicativos informáticos mencionados suelen requerir de autorizaciones por parte del equipo de desarrollo y titular de la propiedad intelectual. Las modalidades disponibles van desde las opciones gratuitas hasta la suscripción de pago por tiempo limitado. Las siguientes son algunas de las alternativas que gozan de mayor popularidad en la actualidad:

    .row.mb-5(data-aos="flip-up")
      .col-sm-6.col-lg-3.mb-4.mb-lg-0
        .tarjeta--boton.p-4(style="height:100%; background-color:#DBF9BD")
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/temas/tema3/18.svg', alt='Texto que describa la imagen')
          h3.text-center Software libre
          p.text-small Los programas pueden ser usados para cualquier propósito, el acceso al mismo es tan amplio que se pueden hacer todas las modificaciones que el usuario necesite para adaptarlo a sus necesidades. Esto implica que su distribución al público no cuenta con limitaciones, por lo que su desarrollo suele provenir de trabajos colaborativos, donde una comunidad interactúa para mejorar las funcionalidades a partir de un punto base entregado por los desarrolladores.

      .col-sm-6.col-lg-3.mb-4.mb-lg-0
        .tarjeta--boton.p-4(style="height:100%; background-color:#DBF9BD")
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/temas/tema3/19.svg', alt='Texto que describa la imagen')
          h3.text-center Software semilibre
          p.text-small En principio, cuenta con prácticamente las mismas libertades que ofrece el software libre, las limitaciones que lo diferencian del anterior se asocian a aspectos comerciales (puesta a la venta de versiones modificadas) o su vinculación con sistemas operativos libres.

      .col-sm-6.col-lg-3.mb-4.mb-lg-0
        .tarjeta--boton.p-4(style="height:100%; background-color:#DBF9BD")
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/temas/tema3/20.svg', alt='Texto que describa la imagen')
          h3.text-center Software freeware
          p.text-small Los programas pertenecientes a esta categoría siguen siendo de uso gratuito, sin embargo, los usuarios tienen restringido su acceso al código fuente para modificarlo, dado que suele estar protegido con derechos de autor. El ejemplo más común de este tipo de software es la suite de Google, que incluye aplicaciones como Drive, Gmail, calendario u hojas de cálculo. En esta categoría, se pueden implantar ciertas limitaciones de funciones avanzadas o de almacenamiento, que pueden ser desbloqueadas con el pago de una membresía.  

      .col-sm-6.col-lg-3.mb-4.mb-lg-0
        .tarjeta--boton.p-4(style="height:100%; background-color:#DBF9BD")
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/temas/tema3/21.svg', alt='Texto que describa la imagen')
          h3.text-center Software propietario
          p.text-small Son aplicativos con limitaciones tanto de uso como de distribución o modificación del código fuente. Estos softwares pueden otorgar ciertos permisos de acceso para modificaciones solo a ciertos usuarios, sin embargo, sin expresa autorización, no podrán ser utilizados por ninguna otra persona.

    .row.mb-5.justify-content-center(data-aos="flip-up")
      .col-sm-6.col-lg-3.mb-4.mb-lg-0
        .tarjeta--boton.p-4(style="height:100%; background-color:#DBF9BD")
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/temas/tema3/22.svg', alt='Texto que describa la imagen')
          h3.text-center Software comercial
          p.text-small Cuentan con toda clase de limitaciones de forma similar al software propietario, pero con la posibilidad de levantar las limitaciones de uso a cambio de un pago. En el campo de la ofimática, el ejemplo más popular es el de la suite de Office, desarrollada por Microsoft. Su acceso está restringido a quien compre la licencia vitalicia de uno de sus programas o pague de forma periódica su suscripción anual, llamada Office 365. 

      .col-sm-6.col-lg-3.mb-4.mb-lg-0
        .tarjeta--boton.p-4(style="height:100%; background-color:#DBF9BD")
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/temas/tema3/23.svg', alt='Texto que describa la imagen')
          h3.text-center Demo
          p.text-small Son las versiones de prueba de programas que tienen una versión completa y, usualmente, de pago. Para acceder al contenido completo, se hace necesario un desembolso de dinero de forma periódica o a través de la adquisición de una licencia vitalicia. Su propósito es permitir un uso restringido del aplicativo, para otorgarle la oportunidad al usuario de probar si cumple con sus necesidades antes de efectuar el pago.

    
    

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
