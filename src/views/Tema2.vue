<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Métodos de recolección

    .col-12.mb-5
      figure(data-aos="fade-right")
        img(src='@/assets/curso/temas/tema2/1.png', alt='Texto que describa la imagen')

    .row.justify-content-center.align-items-center
      .col-lg-10
        .tarjeta.tarjeta.p-4.mb-5(style="background-color:#DBF9BD")(data-aos="flip-up")
          .row.justify-content-center.align-items-center
            .col-lg-10
              p(data-aos="fade-left") A la hora de llevar a cabo un estudio de cualquier naturaleza, es necesario preguntarse qué información será requerida y a través de cuál herramienta será recolectada. Para ello, es recomendable un análisis asociado a las necesidades que se esperan satisfacer y la naturaleza de los datos; una vez se tiene claridad sobre lo anterior, se proponen las metodologías y se elige aquella que resulte más efectiva dada la disponibilidad de recursos.

    separador 
    .titulo-segundo.color-secundario
      h2#t_2_1 2.1 Criterios de selección

    p.mb-5(data-aos="fade-left") Elegir una metodología de recolección de información es uno de los pasos cruciales a la hora de efectuar cualquier tipo de investigación. Una decisión errónea en este aspecto puede conllevar el uso desmedido de recursos con resultados inútiles, o a un esfuerzo desproporcionado e innecesario. Debido a lo anterior, es importante contar con personal capacitado en la herramienta a utilizar, de tal forma que se reduzca el margen de error. A continuación, se presentan una serie de elementos a tener presente a la hora de elegir un método de recolección de información:

    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")(data-aos="flip-up")
      .row.justify-content-center.align-items-center(titulo="Naturaleza del estudio")
        .col-md-5.mb-4.mb-md-0
          p La información a recolectar puede ser cuantitativa, cualitativa, o contar con una mixtura de las dos. Según su naturaleza, ciertas herramientas pueden ser más prácticas. Por ejemplo, una entrevista suele ser más efectiva para recolectar información cualitativa, mientras que un cuestionario puede facilitar la obtención de datos cuantitativos.
        .col-md-4.offset-1
          figure
            img(src='@/assets/curso/temas/tema2/2.svg', alt='Texto que describa la imagen')
      
      .row.justify-content-center.align-items-center(titulo="Objeto o hipótesis de investigación")
        .col-md-5.mb-4.mb-md-0
          p Definir la problemática a abordar o la hipótesis que se espera poner a prueba brinda nociones respecto a los instrumentos de recolección de información más útiles. Se espera que los datos recogidos aporten a la comprobación o cuestionamiento de la problemática abordada, por lo que toda información debe cumplir un propósito.
        .col-md-4.offset-1
          figure
            img(src='@/assets/curso/temas/tema2/3.svg', alt='Texto que describa la imagen')
      
      .row.justify-content-center.align-items-center(titulo="Recursos disponibles")
        .col-md-5.mb-4.mb-md-0
          p Llevar a cabo un trabajo investigativo involucra capital, tiempo y personal. Según la metodología utilizada, los recursos pueden variar ampliamente. Usualmente, durante la elección, debe primar la idoneidad del método para obtener resultados; sin embargo, cuando los recursos son limitados, puede ser necesario decantarse por la opción que refleje la mejor relación costo-beneficio.
        .col-md-4.offset-1
          figure
            img(src='@/assets/curso/temas/tema2/4.svg', alt='Texto que describa la imagen')
      
      .row.justify-content-center.align-items-center(titulo="Trabajo en equipo")
        .col-md-5.mb-4.mb-md-0
          p Delegar funciones y estructurar el trabajo de forma organizada contribuye a la eficiencia en el proceso de recolección de información. Coordinar el trabajo puede reducir costos y optimizar los resultados, es por ello que la planeación toma relevancia durante el proceso de elección de metodología
        .col-md-4.offset-1
          figure
            img(src='@/assets/curso/temas/tema2/5.svg', alt='Texto que describa la imagen')

    separador 
    .titulo-segundo.color-secundario
      h2#t_2_2 2.2 Observación

    p.mb-5(data-aos="fade-left") A través de la acción de la observación, el ser humano percibe su entorno; gracias a ello, es capaz de registrar situaciones y fenómenos ocurridos en un lugar y momento determinados. En cierto sentido, funciona como un sistema de recolección de información, puesto que lleva a identificar eventos asociados a algún estímulo en particular, como se muestra a continuación:

    .row
      .tarjeta.p-4.mb-5(data-aos="flip-up")(style="background-color:#FFFAD0")
        SlyderA(tipo="b")
          .row.justify-content-center.align-items-center 
            .col-md-5.mb-4.mb-md-0.p-4
              h4(data-aos="fade-left") La observación y sus ventajas
              p(data-aos="fade-left") Es una metodología amplia, que puede ser aplicada de manera individual, lo que puede significar un ahorro significativo en los costos asociados a una investigación. Por ejemplo, si para llevar a cabo el estudio se hace necesario el transporte a zonas alejadas, la disminución en gastos de viaje al llevar un solo investigador puede implicar la viabilidad o no de todo un proyecto
            .col-md-4.p-4
              figure(data-aos="fade-right")
                img(src='@/assets/curso/temas/tema2/6.svg', alt='Texto que describa la imagen')
                
          .row.justify-content-center.align-items-center 
            .col-md-5.mb-4.mb-md-0.p-4
              p(data-aos="fade-left") Esta particularidad también puede homogeneizar los resultados obtenidos, ya que el hecho de que una sola persona se encuentre involucrada en el proceso evitará distorsiones producto de la pluralidad de opiniones; en contrasentido, es factible que los resultados obtenidos contengan una mayor dosis de subjetividad, al abordar los eventos desde un mismo punto de vista.
            .col-md-4.p-4
              figure(data-aos="fade-right")
                img(src='@/assets/curso/temas/tema2/7.svg', alt='Texto que describa la imagen')

          .row.justify-content-center.align-items-center 
            .col-md-5.mb-4.mb-md-0.p-4
              h4(data-aos="fade-left") Se puede realizar en cualquier momento de los procesos
              p(data-aos="fade-left") La observación puede ser aplicada en casi cualquier etapa de la investigación, desde la concepción de la problemática a estudiar hasta para la corroboración de las hipótesis evaluadas. Por ejemplo, si un operario identifica comportamientos extraños en algunas de las reses, puede esto motivar a preguntarse si proceden de problemas de salud.
            .col-md-4.p-4
              figure(data-aos="fade-right")
                img(src='@/assets/curso/temas/tema2/8.svg', alt='Texto que describa la imagen')
          
          .row.justify-content-center.align-items-center 
            .col-md-5.mb-4.mb-md-0.p-4
              h4(data-aos="fade-left") Pronóstico y aproximación al problema
              p(data-aos="fade-left") En un escenario posterior, la observación aplicaría como herramienta de aproximación a la problemática, para generar un diagnóstico. Dando continuidad al ejemplo anterior, en este apartado se consultaría con un experto en la materia, donde, a partir de un análisis detallado a un número determinado de animales afectados, se determine si hay patologías comunes o solo casos aislados, que no representan un problema real.
            .col-md-4.p-4
              figure(data-aos="fade-right")
                img(src='@/assets/curso/temas/tema2/9.svg', alt='Texto que describa la imagen')

          .row.justify-content-center.align-items-center 
            .col-md-5.mb-4.mb-md-0.p-4
              h4(data-aos="fade-left") Diagnóstico
              p(data-aos="fade-left") Una última etapa consiste en la recolección de los datos, donde, a partir de criterios de validez y fiabilidad, se registren aquellos que cumplan con las condiciones exigidas, de tal forma que se puedan presentar conclusiones o afirmaciones a la muestra. Para el caso del ejemplo, en esta etapa se presenta un diagnóstico de la muestra seleccionada y, a partir de lo allí descrito, se evalúan las medidas a tomar.
            .col-md-4.p-4
              figure(data-aos="fade-right")
                img(src='@/assets/curso/temas/tema2/10.svg', alt='Texto que describa la imagen')

    h3.titulo-tercero 2.2.1	#[em Recomendaciones para el observador]
    
    p.mb-5(data-aos="fade-left") Con miras a obtener la mayor cantidad y calidad de información, se presentan las siguientes recomendaciones para el observador:

    .row.justify-content-center
      .col-lg-5(data-aos="flip-up")
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema2/11.svg' alt='AvatarTop')
          .tarjeta.tarjeta(style="background-color:#DBF9BD; height:100%")
            .p-3.mb-1
              h2.text-small Definir el objeto de la observación
              p.text-small En muchas ocasiones, la falta de un objetivo definido nubla el juicio de los investigadores y lleva a que su atención se disperse en aspectos de menor relevancia. Es importante definir el sujeto o fenómeno, los comportamientos o las características que se quiere observar, de la manera más específica posible, para centrarse solo en ello.
      .col-lg-5(data-aos="flip-up")
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema2/12.svg' alt='AvatarTop')
          .tarjeta.tarjeta(style="background-color:#DBF9BD; height:100%")
            .p-4.mb-5
              h2.text-small Diseñar herramientas idóneas
              p.text-small Para que la observación siga un esquema concreto, donde los datos obtenidos puedan ser registrados de forma precisa y oportuna.
              

    .row.justify-content-center
      .col-lg-5(data-aos="flip-up")
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema2/13.svg' alt='AvatarTop')
          .tarjeta.tarjeta(style="background-color:#DBF9BD; height:100%")
            .p-4.mb-4
              h2.text-small Diseñar una planeación
              p.text-small Para ser aplicada de manera estricta, donde se definan las actividades previas y aquellas que pondrán a prueba las afirmaciones estudiadas, de tal forma que se den todas las condiciones necesarias para que el trabajo brinde resultados.
      .col-lg-5(data-aos="flip-up")
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema2/14.svg' alt='AvatarTop')
          .tarjeta.tarjeta(style="background-color:#DBF9BD; height:100%")
            .p-4.mb-4
              h2.text-small Asignar labores y distribuir el trabajo
              p.text-small De tal forma que el equipo involucrado realice las tareas de forma organizada y eficiente. Esto solo aplica para los trabajos investigativos que requieran de más de un investigador o colaborador
              
    h3.titulo-tercero 2.2.2	#[em Modalidades de observación]

    p.mb-5(data-aos="fade-left") La observación puede clasificarse según diversos criterios, a continuación, se presentan los sistemas que gozan de mayor aceptación: 

    .titulo-sexto.color-acento-contenido.offset-2
      h5 Figura 4
      span #[em Modalidades de observación]
    
    .row.mt-5
      ImagenInfografica.color-primario.mb-5
        template(v-slot:imagen)
          figure(data-aos="flip-up")
            img(src='@/assets/curso/temas/tema2/15.svg', alt='Texto que describa la imagen')
        
        .tarjeta.color-acento-botones.p-3(x="2.5%" y="44.3%" numero="")
          .h5.mb-2 Según medios utilizados
          p Este sistema se rige según el grado de estructuración usado por el observador, tanto para la recolección de los datos como para su registro.
        .tarjeta.color-acento-botones.p-3(x="27.2%" y="44.3%" numero="")
          .h5.mb-2 Según participación del observador
          p Según la naturaleza de la investigación, en algunas ocasiones, el observador puede hacerse partícipe del hecho estudiado.
        .tarjeta.color-acento-botones.p-3(x="51.7%" y="44.3%" numero="")
          .h5.mb-2 Según aproximación al objeto
          p Este criterio contempla como elemento diferenciador la cercanía del observador con el fenómeno estudiado. Se diferencia un escenario en el que ejecuta las pruebas y analiza los eventos, o por el contrario, el material analizado proviene de terceros.
        .tarjeta.color-acento-botones.p-3(x="76.2%" y="44.3%" numero="")
          .h5.mb-2 Según el lugar
          p Contempla las condiciones del lugar donde se desarrollan los hechos observables y a partir de ellas presenta la siguiente clasificación:
        .tarjeta.color-acento-botones.p-3(x="22.4%" y="75%" numero="")
          .h5.mb-2 Estructurada
          p Goza de un trabajo de planeación previo a la ejecución de la metodología, de tal forma que se haga uso de procedimientos estructurados de recopilación de datos. Suele delimitar el campo de observación, puesto que desde un inicio se define el alcance del estudio.
        .tarjeta.color-acento-botones.p-3(x="48%" y="75%" numero="")
          .h5.mb-2 Participante
          p Cuando el observador tiene injerencia sobre el objeto de estudio, ejecutando acciones que afecten el fenómeno. Suele requerir de preparación previa para hacer la interacción más orgánica o menos forzada.
        .tarjeta.color-acento-botones.p-3(x="72.9%" y="75%" numero="")
          .h5.mb-2 Directa
          p El observador contempla la situación de primera mano, evalúa los acontecimientos y presenta unas conclusiones a partir de ello. La información puede ser de mayor o menor calidad según la experticia del investigador y de lo estructurado del proceso.
        .tarjeta.color-acento-botones.p-3(x="97.5%" y="75%" numero="")
          .h5.mb-2 En la vida real
          p Estudia situaciones en las que el observador no tiene ningún tipo de participación, los hechos suceden en un ambiente completamente real, sin ninguna preparación o puesta en escena que los aleje de la realidad.
        .tarjeta.color-acento-botones.p-3(x="22.4%" y="93.5%" numero="")
          .h5.mb-2 No estructurada
          p No sigue ningún esquema previo para el registro de los datos, presenta amplias limitaciones en su ejecución, por lo que suele utilizarse en etapas tempranas de reconocimiento de los objetos a estudiar.
        .tarjeta.color-acento-botones.p-3(x="48%" y="93.5%" numero="")
          .h5.mb-2 No participante
          p Los hechos ocurren de manera ajena al observador, tiene una postura como espectador y se limita a registrar las situaciones.
        .tarjeta.color-acento-botones.p-3(x="72.8%" y="93.5%" numero="")
          .h5.mb-2 Indirecta
          p Los datos provienen de fuentes de investigación y, por lo tanto, el observador realiza un trabajo de análisis a partir de fenómenos que no está presenciando directamente. En este sentido, existe un apoyo proveniente de otros investigadores, que suele presentarse en diversas formas, como encuestas o cuestionarios.
        .tarjeta.color-acento-botones.p-3(x="97.5%" y="93.5%" numero="")
          .h5.mb-2 Experimental
          p Suelen ser llevados a cabo en ambientes controlados y manipulados por el equipo investigador. Aquí se busca provocar situaciones específicas, que se aproximen a los fenómenos que se quiere estudiar, velando por no modificar su estructura natural.

    h3.titulo-tercero 2.2.3	#[em Instrumentos para la recolección de información]

    p.mb-5(data-aos="fade-left") La observación puede considerarse una de las metodologías de recolección de datos más sencillas y de fácil aplicación, sin embargo, como cualquier otra, requiere de herramientas que permitan llevar un seguimiento de los avances conseguidos. Con esto, no solo se busca recolectar más información, sino contar con un registro organizado y controlado de todos los aspectos relevantes, que facilite el análisis y la interpretación. Los siguientes son algunos de los medios más utilizados:

    .titulo-sexto.color-acento-contenido.offset-2
      h5 Figura 5
      span #[em Instrumentos para la recolección de información en la observación]

    .row.mt-5.justify-content-center.align-items-center
      .col-lg-8
        ImagenInfografica.color-primario.mb-5
          template(v-slot:imagen)
            figure(data-aos="flip-up")
              img(src='@/assets/curso/temas/tema2/16.svg', alt='Texto que describa la imagen')
          
          .tarjeta.color-acento-contenido.p-3(x="50.1%" y="3.9%" numero="")
            .h5.mb-2 El diario
            p En él se registran todos los hechos desde el inicio del trabajo de observación. Es una herramienta flexible, por lo que pueden anotarse todo tipo de sugerencias, ideas o comentarios, ya sean de naturaleza práctica o teórica. El nivel de detalle dependerá del juicio del observador, por lo que puede ser utilizado una vez se desarrolle una actividad determinada, una situación relevante o al final de la jornada.
            p Su extensión dependerá de la complejidad del fenómeno estudiado y el nivel de detalle que busque el observador; se recomienda el uso de una escritura precisa, ordenada y clara para ser consultada por los colaboradores.
          .tarjeta.color-acento-contenido.p-3(x="91.9%" y="42.8%" numero="")
            .h5.mb-2 Cuaderno de notas
            p Opera de forma semejante al diario, pero con la particularidad de ser portado por el investigador en todo momento. Lo anterior permite registrar los hechos de forma inmediata después de su ocurrencia, lo que dota de precisión su registro, pero, como contrapartida, su estructura será menos ordenada.
            p Puede funcionar en manera conjunta con el diario, haciendo uso del cuaderno de notas para registrar rápidamente cada situación que lo amerite, y del diario, al finalizar la jornada de trabajo, donde se registren los eventos con mayor calma y con una estructura mucho más robusta.
          .tarjeta.color-acento-contenido.p-3(x="65.5%" y="95.3%" numero="")
            .h5.mb-2 Mapas
            p Son una herramienta que aporta un contexto a la investigación, dotándola de una dimensión física determinada. En esta categoría, se encuentran también los planos y cualquier otro tipo de representación gráfica que otorgue una noción respecto a ubicación o límites de la zona estudiada.
            p Pueden ser tan detallados como el investigador considere; es recomendable que incluyan datos relevantes para el fenómeno. Por ejemplo, los estudios de mercado suelen estar delimitados a zonas geográficas específicas, por lo que un mapa de la ciudad, donde se resalte la localidad donde se realiza la investigación, puede también presentar otros datos, como género, edad o estrato económico, que pueden aportar para relacionar las variables a la hora de interpretar los resultados.
          .tarjeta.color-acento-contenido.p-3(x="33.8%" y="95.3%" numero="")
            .h5.mb-2 Dispositivos mecánicos
            p En la actualidad, existen diversos mecanismos que pueden facilitar el proceso de registro en una investigación. Dispositivos como las cámaras fotográficas o las grabadoras de voz pueden recopilar información objetiva y ser reproducida de manera asíncrona para elevar el nivel de detalle.
            p Se recomienda especial cuidado a la hora de compartir  la información registrada por estos medios, puesto que la privacidad de los participantes puede ser vulnerada, más aún si no se cuenta con un consentimiento previo al estudio.
          .tarjeta.color-acento-contenido.p-3(x="8.2%" y="42.8%" numero="")
            .h5.mb-2 Cuadros de trabajo
            p Suele ser una herramienta de uso posterior a las anteriores. Con ella, se busca la tabulación y ordenamiento de la información recopilada, a través del uso de tablas en las que las filas listen los participantes y las columnas las variables, o viceversa. Existe un sinnúmero de posibilidades a la hora de diseñar cuadros de trabajo, su flexibilidad depende enteramente de los recursos del investigador y su creatividad.
            p Se recomienda su uso para investigaciones con un alto componente cuantitativo, o con muchos sujetos a estudiar, puesto que la información puede consolidarse y presentarse de forma resumida, sin obviar detalles de relevancia.

    p.mt-5.mb-5(data-aos="fade-left") El siguiente ejemplo presenta una lista de vehículos que un concesionario ofrece y con la que se busca determinar cuáles son las preferencias del público objetivo. Así, se listan los colores de los modelos que ingresaron a revisión periódica en una semana:

    .titulo-sexto.color-acento-contenido.offset-1
      h5 Tabla 1
      span #[em Formato cuadro de trabajo]

    
    .row.justify-content-center.align-items-center
      .col-10
        .tabla-a.color-acento-botones.mb-5 
          table(data-aos="flip-up")
            thead
              tr
                th Color
                th Modelo 1
                th Modelo 2
                th Modelo 3
                th Total
            tbody.text-center
              tr
                td.text-bold Blanco
                td 8
                td 9
                td 9
                td 26
              tr
                td.text-bold Negro
                td 10
                td 7
                td 8
                td 25
              tr
                td.text-bold Rojo
                td 6
                td 8
                td 9
                td 23
              tr
                td.text-bold Gris
                td 5
                td 6
                td 7
                td 18
              tr
                td.text-bold Total
                td 29
                td 30
                td 33
                td 92


    p.mt-3(data-aos="fade-left") Gracias a la elaboración del cuadro de trabajo, se pueden alcanzar conclusiones que de otra forma pasarían desapercibidas. Una tabla como esta puede aportar información de interés, por ejemplo, que el modelo 3 goza de una mayor aceptación comercial, que el color más popular es el blanco, o que la combinación más habitual es la del modelo 1 de color negro.

    separador 
    .titulo-segundo.color-secundario
      h2#t_2_3 2.3 Entrevista

    p.mt-3.mb-5(data-aos="fade-left") La entrevista es una herramienta valiosa para la recolección de información, porque se obtiene los conceptos subjetivos de las personas consultadas, a continuación, se puede observar las principales características:

    .row
      .tarjeta.p-4.mb-5(data-aos="flip-up")(style="background-color:#FFFAD0")
        SlyderA(tipo="b")
          .row.justify-content-center.align-items-center 
            .col-md-5.mb-4.mb-md-0.p-4
              h4(data-aos="fade-left") La entrevista
              p(data-aos="fade-left") Funciona como herramienta de recolección de información, particularmente útil cuando se espera tratar con datos mayoritariamente cualitativos. Una de sus mayores ventajas radica en la posibilidad de obtener información de corte subjetivo de las personas consultadas, puesto que no se enfoca en la cantidad de opiniones recolectadas, sino en la justificación de estas.
            .col-md-6.p-4
              figure(data-aos="fade-right")
                img(src='@/assets/curso/temas/tema2/17.svg', alt='Texto que describa la imagen')
                
          .row.justify-content-center.align-items-center 
            .col-md-5.mb-4.mb-md-0.p-4
              h4(data-aos="fade-left") Modo personal
              p(data-aos="fade-left") Su principal diferencia, en relación con la observación, es que en esta última los hechos se describen a modo impersonal, presentando el escenario y las situaciones que ocurren en el momento, mientras que la entrevista puede ahondar en sucesos pasados o actuales, profundizando en factores internos que difícilmente podrían ser percibidos por la metodología de la observación.
            .col-md-6.p-4
              figure(data-aos="fade-right")
                img(src='@/assets/curso/temas/tema2/18.svg', alt='Texto que describa la imagen')

          .row.justify-content-center.align-items-center 
            .col-md-5.mb-4.mb-md-0.p-4
              p(data-aos="fade-left") También dista de la encuesta, ya que en ella prima la recolección de información de tipo cuantitativo, a través de listados estandarizados aplicados a una gran cantidad de sujetos investigados. La entrevista suele apuntar a grupos reducidos de personas, con preguntas abiertas que permitan profundizar y aportar información cualitativa. 
            .col-md-6.p-4
              figure(data-aos="fade-right")
                img(src='@/assets/curso/temas/tema2/19.svg', alt='Texto que describa la imagen')

    h3.titulo-tercero 2.3.1	#[em Clasificación]

    p.mb-5(data-aos="fade-left") La entrevista se compone mayoritariamente de un factor social, donde interactúan, en principio, un encuestador, haciendo las preguntas y dirigiendo la conversación, y un entrevistado, quien responde y aporta la información a su alcance. La forma de clasificación más común de esta metodología parte de la forma en la que se desarrolla esta interacción, presentando las siguientes tres categorías:

    .titulo-sexto.color-acento-contenido.offset-2
      h5 Figura 6
      span #[em Tipos de entrevista]

    .row.justify-content-center.align-items-center 
      .col-lg-8.mb-5
        figure.desktop(data-aos="flip-up")
          img(src='@/assets/curso/temas/tema2/20.svg', alt='Texto que describa la imagen')          
        figure.movil(data-aos="flip-up")
          img(src='@/assets/curso/temas/tema2/21.svg', alt='Texto que describa la imagen')          

    .row.justify-content-center.align-items-center
      .col-lg-8 
        .tarjeta.tarjeta.p-4.mb-3(style="background-color:#632059")(data-aos="flip-up")
          p.text-white.text-small #[b Estructuradas:] previo al acercamiento con el entrevistado, el investigador diseña un listado de preguntas establecido e inmodificable. Ofrecen especial utilidad para pruebas con un gran número de sujetos, dado que facilitan la comparación de respuestas y limitan las posibilidades de que los encuestados divaguen o pierdan el hilo conductor.
        .tarjeta.tarjeta.p-4.mb-3(style="background-color:#632059")(data-aos="flip-up")
          p.text-white.text-small #[b Semiestructuradas:] enlistan una serie de tópicos que cumplen el papel de guía, las preguntas son abiertas y se diseñan para ofrecer un punto de referencia. Las temáticas son claras, pero el encuestador tendrá libertad de modificar el libreto según la situación lo requiera. Esta flexibilidad permite encaminar la entrevista a aquellos aspectos que se consideren más relevantes, adicionando preguntas o cambiando su orden para maximizar la obtención de información.
        .tarjeta.tarjeta.p-4.mb-3(style="background-color:#632059")(data-aos="flip-up")
          p.text-white.text-small #[b No estructuradas:] este tipo de entrevistas no poseen ningún libreto ni guía inicial, de esta forma, se le cede toda la responsabilidad al entrevistador para indagar y obtener información. De esta categoría se desprenden dos tipos:
      .col-lg-4
        figure(data-aos="flip-up")
          img(src='@/assets/curso/temas/tema2/22.svg', alt='Texto que describa la imagen')

    .row.justify-content-center.align-items-center
      .col-lg-5
        figure(data-aos="flip-up")
          img(src='@/assets/curso/temas/tema2/23.svg', alt='Texto que describa la imagen')
      .col-lg-7 
        .tarjeta.tarjeta.p-4.mb-3(style="background-color:#FFFAD0")(data-aos="flip-up")
          p.text-small #[b Focalizadas:] aunque no tienen un guion, sí se fija una temática en específico, se esperan respuestas abiertas y espontáneas, mientras que el entrevistador deberá usar su pericia para encaminar la conversación a aquellos tópicos que aporten información de la temática elegida previamente.
        .tarjeta.tarjeta.p-4.mb-3(style="background-color:#FFFAD0")(data-aos="flip-up")
          p.text-small #[b No dirigida o en profundidad:] son entrevistas que buscan tocar diversos temas de interés sin profundizar en ningún área en concreto. Ejemplo de ellas son las que se encuentran en revistas o programas de farándula, donde el entrevistado responde todo tipo de preguntas profesionales y personales. Demandan una gran confianza y un ambiente de familiaridad para que el entrevistado sea más honesto y espontáneo, y para que los cambios de rumbo dictados por el entrevistador no se tomen a la defensiva.

    h3.mt-5.titulo-tercero 2.3.2	#[em Posibilidades y limitaciones]

    .row.justify-content-center.align-items-center
      .col-10.mt-3
        .bloque-texto-a.color-acento-contenido.p-4.p-md-5.mb-5(data-aos="flip-up") 
          .row.m-0.align-items-center.justify-content-between
            .col-lg-4.mb-4.mb-lg-0
              h2(data-aos="fade-left").text-center.mb-3 Posibilidades
              .tarjeta-avatar-b.mb-5.justify-content-center.align-items-center
                .tarjeta-avatar-b__img
                  img(src='@/assets/curso/temas/tema2/24.svg' alt='AvatarTop')
            .col-lg-8
              .bloque-texto-a__texto.p-4
                p.text-small(data-aos="fade-left") Con este sistema, se puede profundizar ampliamente en cualquiera de los temas abordados, esto surge de la naturaleza de la información que se espera recolectar. Si las preguntas son abiertas, la gama de respuestas puede ser tan amplia como la diversidad misma de los entrevistados, incluso, el lenguaje no verbal o la emotividad tras una respuesta puede brindar más elementos de juicio a la hora de registrar la información.
                p.text-small(data-aos="fade-left") Gracias a la dinámica que surge entre el entrevistador y el entrevistado, es posible efectuar cambios durante la marcha, de tal forma que la conversación se torne más cómoda para ambas partes. Esta flexibilidad permite ahondar en los aspectos más relevantes de la investigación y puede aportar una confianza mayor, que lleve a respuestas profundas y sinceras.
                p.text-small(data-aos="fade-left") Debido a que las preguntas suelen ser abiertas, es posible obtener información más allá de lo esperado. Esto permite reinterpretar la investigación en caso de ser necesario un replanteamiento según la evidencia indique.
                p.text-small(data-aos="fade-left") El entendimiento de la información obtenida se facilita gracias a la interacción con el investigador, quien puede preguntar o solicitar aclaraciones adicionales cuando lo considere necesario, evitando confusiones o malas interpretaciones.

    .row.justify-content-center.align-items-center
      .col-10.mt-5
        .bloque-texto-a.color-acento-contenido.p-4.p-md-5.mb-5(data-aos="flip-up") 
          .row.m-0.align-items-center.justify-content-between
            .col-lg-4.mb-4.mb-lg-0
              h2(data-aos="fade-left").text-center.mb-3 Limitaciones
              .tarjeta-avatar-b.mb-5.justify-content-center.align-items-center
                .tarjeta-avatar-b__img
                  img(src='@/assets/curso/temas/tema2/25.svg' alt='AvatarTop')
            .col-lg-8
              .bloque-texto-a__texto.p-4
                p.text-small(data-aos="fade-left") El formato de la entrevista se encuentra limitado por el factor tiempo. A más información que se quiera obtener de cada sujeto, más tiempo será demandado. La presencia permanente del investigador es obligatoria durante toda la entrevista si se busca un ambiente de cercanía. Dado que las personas suelen responder preguntas abiertas, tampoco se puede esperar que se respondan varios cuestionamientos al mismo tiempo.
                p.text-small(data-aos="fade-left") El margen de error es más amplio que con otras metodologías, puesto que las preguntas abiertas y espontáneas se pueden prestar para diversas interpretaciones. Esta situación es aún más compleja si el juicio del investigador se ve afectado por su exceso o falta de empatía con el entrevistado, lo que puede generar sesgos en la información.
                p.text-small(data-aos="fade-left") La práctica ha demostrado que, usualmente, hay una gran brecha entre lo que un entrevistado hace y lo que dice que haría. Usualmente, los hechos son recordados con leves variaciones inconscientes; de la misma forma, preocupado por su imagen, puede responder que tomaría una posición o ejecutaría una acción de modo hipotético, mientras que en la realidad nunca lo haría. Es por ello que la calidad de las conclusiones alcanzadas está estrechamente relacionada con la honestidad que tengan los entrevistados, situación difícilmente medible con esta metodología.

    h3.titulo-tercero 2.3.3	#[em Pasos para su aplicación.]  

    p.mb-5(data-aos="fade-left") La correcta ejecución de una entrevista demanda el seguimiento de una serie de pasos que permitan abordar la actividad con el direccionamiento correcto. Para ello, resulta relevante centrarse en la función de la información que espera obtenerse. A continuación, se ofrece un listado de actividades que pueden tenerse presente para que la entrevista cumpla sus objetivos:              

    .titulo-sexto.color-acento-contenido.offset-2
      h5 Figura 7
      span #[em Pasos para aplicar una entrevista]

    .row.justify-content-center.align-items-center
      .col-10
        PasosA.color-primario.mb-5(tipo="n")(data-aos="flip-up")
          .row.justify-content-center.align-items-center
            .col-sm-6.mb-4.mb-md-0
              h3 Definir la problemática a estudiar
              p Siempre debe partirse de la formulación de la problemática que se espera abordar. Esto funciona como justificación de la aplicación de la metodología. Se recomienda presentarla de forma precisa, dentro de un alcance de tiempo y espacio determinados.
            .col-sm-3.offset-2
              figure
                img(src='@/assets/curso/temas/tema2/26.svg', alt='Texto que describa la imagen')

          .row.justify-content-center.align-items-center
            .col-sm-3
              figure
                img(src='@/assets/curso/temas/tema2/27.svg', alt='Texto que describa la imagen')
            .col-sm-6.mb-4.mb-md-0.offset-2
              h3 Identificar la población
              p Dadas las limitaciones de tiempo y presupuesto que suele haber en este tipo de investigaciones, es prudente efectuar una delimitación de la población objeto de estudio. Los criterios a aplicar dependen del juicio del investigador, en función de la problemática y las metas de recolección de información que se planteen. La muestra elegida deberá corresponder con estos parámetros, para alcanzar los resultados más efectivos.

          .row.justify-content-center.align-items-center
            .col-sm-6.mb-4.mb-md-0
              h3 Planificar la entrevista
              p para maximizar la obtención de resultados, es recomendable un trabajo de planeación previo a la aplicación de la entrevista. En este boceto inicial, se deben plantear las preguntas principales, la ruta que se espera seguir, e incluso la elección del entrevistador. Para profundizar en esto, la entrevista puede dividirse en tres momentos fundamentales:
            .col-sm-3.offset-2
              figure
                img(src='@/assets/curso/temas/tema2/28.svg', alt='Texto que describa la imagen')

          .row.justify-content-center.align-items-center
            .col-sm-3
              figure
                img(src='@/assets/curso/temas/tema2/29.svg', alt='Texto que describa la imagen')
            .col-sm-6.mb-4.mb-md-0.offset-2
              h3 Comienzo
              p El principal objetivo de esta fase es crear un ambiente ameno y de confianza entre las partes. Las preguntas a formular aquí deben ser sencillas y llevar a respuestas que no demanden profundización ni tema específico; lo que se busca es delimitar el contexto de forma amplia y garantizar tranquilidad y voluntad para responder

          .row.justify-content-center.align-items-center
            .col-sm-6.mb-4.mb-md-0
              h3 Desarrollo
              p En esta fase se debe brindar el espacio necesario para que el entrevistado responda tomando todo el tiempo que necesite, de tal forma que no se sienta presionado o que se busca evaluar sus conocimientos en la materia. El entrevistador debe intentar mantener una posición independiente de las respuestas, sin hacer juicios de valor aprobando o desaprobando la posición del entrevistado. Según su habilidad, podrá replantear una misma pregunta con diferente vocabulario para corroborar una posición y minimizar el sesgo a la hora de registrar la información obtenida.
            .col-sm-3.offset-2
              figure
                img(src='@/assets/curso/temas/tema2/30.svg', alt='Texto que describa la imagen')

          .row.justify-content-center.align-items-center
            .col-sm-3
              figure
                img(src='@/assets/curso/temas/tema2/31.svg', alt='Texto que describa la imagen')
            .col-sm-6.mb-4.mb-md-0.offset-2
              h3 Cierre
              p Para finalizar, se recomienda una ligera revisión de los temas que se esperaban abordar y, si la situación lo amerita, retomar temáticas que no se profundizaron lo suficiente. La despedida y el agradecimiento al invitado deben ofrecerse en un ambiente cálido y que siga generando la confianza de principio a fin de la entrevista, puesto que es posible obtener algún dato adicional en esta etapa. 

          .row.justify-content-center.align-items-center
            .col-sm-6.mb-4.mb-md-0
              h3 Obtención y análisis de información
              p Las respuestas abiertas y la modificación sobre la marcha de las entrevistas limitan sus posibilidades de estandarización. Es por ello que el registro demanda una revisión de las etapas descritas previamente. Para esto, se recomienda el uso de dispositivos mecánicos de registro, como las videocámaras o las grabadoras. De esta forma, se podrán revisar las respuestas que tengan mayor utilidad o generen más confusión. 
            .col-sm-3.offset-2
              figure
                img(src='@/assets/curso/temas/tema2/32.svg', alt='Texto que describa la imagen')

    p(data-aos="fade-left") Para el análisis de la información recolectada, se requerirá aún de más tiempo, puesto que las respuestas suelen estar abiertas a interpretación. El investigador debe ser conocedor de los temas estudiados para poder prestar un criterio válido y apropiado. Se recomienda listar las conclusiones más importantes y relacionar aspectos relevantes de la conversación que van más allá de las respuestas, como el ya mencionado lenguaje corporal o la disposición para abordar temas específicos por parte del entrevistado.
    
    separador 
    .titulo-segundo.color-secundario
      h2#t_2_4 2.4 Encuesta

    p.mb-5(data-aos="fade-left") La encuesta permite cuestionar a las personas que participaron en un hecho o suceso particular. Se le considera un método descriptivo debido a que favorece la identificación de hábitos, preferencias o ideas, entre otros.

    .row.justify-content-center.align-items-center
      .col-lg-5
        figure(data-aos="fade-right")
          img(src='@/assets/curso/temas/tema2/33.svg', alt='Texto que describa la imagen')
      .col-lg-7
        p.mb-3(data-aos="fade-left") Como en la mayoría de las investigaciones, hacer partícipes a todos los individuos de una población resultaría innecesariamente costoso y trabajoso, es por ello que este modelo apunta a selecciones aleatorias o controladas de los sujetos a estudiar. El grupo seleccionado se conoce como muestra, y los resultados alcanzados tras su estudio, así como las respectivas conclusiones, son extrapolados a la totalidad de la población que se pretende estudiar.
        p.mb-3(data-aos="fade-left") La facilidad de aplicación de la encuesta la ha convertido en una estrategia de amplia aceptación; esto se debe, en primera medida, al avance de las herramientas tecnológicas que permiten alcanzar poblaciones mucho mayores, de forma efectiva y casi inmediata. Es común observar encuestas enviadas y diligenciadas con el teléfono celular o un ordenador con acceso a Internet; si son lo suficientemente breves, pueden responderse en unos cuantos minutos, lo que facilita aún más el reclutamiento de sujetos para ser objeto de estudio.
        
    h3.mt-5.titulo-tercero 2.4.1	#[em Posibilidades y limitaciones.] 

    p(data-aos="fade-left") La metodología de la encuesta resulta muy práctica y de fácil aplicación para la recolección de datos, sin embargo, al igual que cualquier otro sistema, tiene desventajas que podrían no hacerla ideal en ciertas situaciones. Las cualidades y limitaciones de la encuesta son las siguientes:

    .row.justify-content-center.align-items-center
      .col-10.mt-3
        .bloque-texto-a.color-acento-contenido.p-4.p-md-5.mb-5(data-aos="flip-up") 
          .row.m-0.align-items-center.justify-content-center
            .col-lg-3.mb-4.mb-lg-0
              h2(data-aos="fade-left").mb-3 Posibilidades
              figure
                img(src='@/assets/curso/temas/tema2/24.svg' alt='AvatarTop')
            .col-lg-8.p-4
              .bloque-texto-a__texto.p-4
                ul.lista-ul.mb-3
                  li 
                    i.lista-ul__vineta
                    | Su aplicación resulta más económica que la entrevista y la información recolectada puede abordar una gran variedad de temas.
                  li
                    i.lista-ul__vineta
                    | Puede ser aplicada a muestras mucho más grandes, por lo que las investigaciones que busquen predecir tendencias de poblaciones de grandes dimensiones, como regiones o países, suelen hacer uso de esta metodología.
                  li
                    i.lista-ul__vineta
                    | Las respuestas suelen ser anónimas, los encuestados no suelen dar detalles de su identidad, lo que otorga un confort que lleva a respuestas más honestas, donde no existirán represalias morales por una opinión controvertida.
                  li
                    i.lista-ul__vineta
                    | Los análisis comparativos son mucho más accesibles, gracias a su sistema de recolección y organización de datos.

    .row.justify-content-center.align-items-center
      .col-10.mt-3
        .bloque-texto-a.color-acento-contenido.p-4.p-md-5.mb-5(data-aos="flip-up") 
          .row.m-0.align-items-center.justify-content-center
            .col-lg-3.mb-4.mb-lg-0
              h2(data-aos="fade-left").mb-3 Limitaciones
              figure
                img(src='@/assets/curso/temas/tema2/25.svg' alt='AvatarTop')
            .col-lg-8.p-4
              .bloque-texto-a__texto.p-4
                ul.lista-ul.mb-3
                  li 
                    i.lista-ul__vineta
                    | La información proviene de una fuente indirecta, ya que la realidad se percibe a través del juicio de terceros.
                  li
                    i.lista-ul__vineta
                    | La veracidad de los datos puede verse comprometida debido al uso de ayudas electrónicas, donde personas pueden efectuar la encuesta en repetidas ocasiones; además, la dependencia de la estabilidad de la red lleva a que situaciones ajenas a los investigadores puedan retrasar o comprometer la integridad de los datos.
                  li
                    i.lista-ul__vineta
                    | Debido a que la información se recolecta de manera impersonal, es decir, no hay un contacto directo con los encuestados, pueden surgir dudas o inquietudes que no sean resueltas con las instrucciones brindadas, lo que lleva a comprometer la veracidad de algunas respuestas que provengan de preguntas mal formuladas.

    h3.mt-5.titulo-tercero 2.4.2	#[em Instrumentos para la recolección de información]

    p.mb-5(data-aos="fade-left") Esta metodología suele hacer uso, principalmente, de dos instrumentos de recolección de datos: el cuestionario y la cédula de entrevista. A continuación, se describe la información más importante de cada uno de ellos:

    h4.mb-3 Cuestionario

    .row.justify-content-center.align-items-center 
      .col-7
        p Enlista una serie de preguntas diseñadas por el investigador y otorga un espacio para diligenciar la respuesta por parte de los encuestados. A la hora de su elaboración, es recomendable una codificación que posibilite la tabulación y consolidación de respuestas a través de hojas de trabajo. Se debe propender por consultas que se satisfagan con respuestas cerradas (opción múltiple, si/no, falso o verdadero), para reducir el número de variables a estudiar.
        p El fuerte de los cuestionarios radica en buscar información cuantitativa y descriptiva; a la hora de su elaboración, el investigador debe comprender la problemática sobre la que espera indagar, de tal manera que las preguntas se enfoquen en trabajar cada aspecto de relevancia para la investigación. Así pues, cada variable puede ser puesta a prueba por una o múltiples preguntas, en función del nivel de detalle que se busque.
      .col-5
        figure(data-aos="fade-right")
          img(src='@/assets/curso/temas/tema2/34.svg', alt='Texto que describa la imagen')

    .tarjeta.tarjeta.p-4.mb-3.mt-5(style="background-color:#FFFAD0")(data-aos="flip-up")
      .col.mb-3.offset-1
        p(data-aos="fade-left") Para el diseño de preguntas se recomienda:
      .row.justify-content-center.align-items-center 
        .col-lg-5
          figure(data-aos="fade-right")
            img(src='@/assets/curso/temas/tema2/35.png', alt='Texto que describa la imagen')
        .col-lg-5
          ul.lista-ul.mb-3
            li 
              i.lista-ul__vineta
              | Las preguntas deben ser fácilmente comprensibles, se debe evitar que los encuestados tengan dudas o confusiones.
            li
              i.lista-ul__vineta
              | Se recomiendan preguntas cerradas o concretas, premisas muy extensas pueden agotar al encuestado rápidamente y afectar su concentración.
            li
              i.lista-ul__vineta
              | Las preguntas no deben inducir a las respuestas, deben ser neutrales, para que quien responde no se sienta inclinado a una posición u otra.
            li
              i.lista-ul__vineta
              | Las preguntas cumplen el propósito de cubrir una problemática o hipótesis, es por ello que deben formularse de tal forma que se relacionen con el objeto de estudio y aporten para la consecución de información relacionada.

      .row.justify-content-center.align-items-center.mt-5
        .col-lg-5
          ul.lista-ul.mb-3
            li 
              i.lista-ul__vineta
              | Se debe evitar respaldar las premisas de las preguntas con instituciones u organizaciones de prestigio, puesto que pueden influir en el juicio de las personas consultadas.
            li
              i.lista-ul__vineta
              | Los temas sensibles, como política, religión o ideología, deben ser abordados con mucho tacto, para evitar herir susceptibilidades.
            li
              i.lista-ul__vineta
              | La complejidad del vocabulario utilizado debe ser acorde con el público encuestado. El uso de lenguaje técnico debe limitarse a expertos en el área consultada.
            li
              i.lista-ul__vineta
              | Las preguntas deben ser sencillas de responder, si demandan mucho trabajo, el encuestado puede perder el interés o no responder honestamente.
            li
              i.lista-ul__vineta
              | No existe un rango de preguntas a formular, pero debe primar la comodidad del encuestado. Listados de pocas preguntas pueden fallar en la recolección de información, y si son demasiado largos, pueden llevar al agotamiento del encuestado.
        .col-lg-5
          figure(data-aos="fade-right")
            img(src='@/assets/curso/temas/tema2/36.png', alt='Texto que describa la imagen')

    p.mt-5.mb-3(data-aos="fade-left") La calidad de las preguntas contenidas en la encuesta dicta la parada respecto a su efectividad; si no se cubren los temas esenciales, los resultados no serán los esperados. Asimismo, una muestra apropiada juega otro papel protagónico, el enfoque en un público objetivo debe cumplir con los criterios de selección del investigador.
    p.mb-5(data-aos="fade-left") Las preguntas a consignar en un cuestionario pueden ser de dos clases, a continuación, se presenta cada una de ellas:

    TabsA.color-acento-botones.mb-5(data-aos="flip-up")
      .tarjeta.color-acento-botones--borde.p-4(titulo="Abiertas")
        .row.justify-content-center.align-items-center
          .col-lg-2.mb-4
            figure
              img(src='@/assets/curso/temas/tema2/37.svg', alt='Texto que describa la imagen')
          .col-xl-8.offset-1
            p.text-small La respuesta dada por el encuestado será tan extensa como él considere; la podrá abordar de forma espontánea, haciendo uso de la terminología que conozca y con la que se sienta cómodo. La mayor ventaja de este tipo de preguntas es que se puede obtener información más profunda y detallada, sin embargo, la consolidación de los datos resulta mucho más compleja, al no poder estandarizar la respuesta dentro de un grupo de posibilidades. 
      
      .tarjeta.color-acento-botones--borde.p-4(titulo="Cerradas")
        .row.justify-content-center.align-items-center
          .col-lg-2.mb-4
            figure
              img(src='@/assets/curso/temas/tema2/38.svg', alt='Texto que describa la imagen')
          .col-xl-8.offset-1
            p.text-small Las personas consultadas se ven limitadas a una serie de opciones de respuesta preconcebidas. Lo anterior limita las posibilidades de obtención de información, pero facilita su estandarización, tabulación o análisis. Las opciones de respuesta deben ser concretas y excluyentes, para evitar que un mismo encuestado considere dos o más opciones como respuestas correctas. Este modelo suele ser particularmente útil para identificar tendencias o conductas comunes.
            p.text-small Dentro de las preguntas cerradas, se puede hablar de dos tipos, las preguntas dicotómicas, cuyas opciones de respuesta se reducen a dos: si/no, falso/verdadero; por otra parte, las preguntas de elección múltiple incrementan el número de opciones a elegir, no existe un límite fijo, por lo que dependerá de la amplitud de la pregunta y de la experticia del encuestador. Ejemplo de estas últimas son las preguntas de satisfacción, donde las opciones pueden ir del 1 al 10. 
    
    p.mt-5.mb-3(data-aos="fade-left") A la hora de diseñar el cuestionario, se pueden incluir tanto preguntas abiertas como cerradas. En este sentido, se aconseja que se intercalen, para evitar que el encuestado se agote. También se recomienda la formulación de preguntas de control, en las que se plantee una misma pregunta haciendo uso de otros términos, para corroborar la coherencia entre respuestas.
    p.mb-5(data-aos="fade-left") En lo que respecta a su presentación, se recomienda incluir una nota de presentación donde se aclaren los aspectos más relevantes de la investigación, como los encargados de la misma, su propósito y la forma en la que se hará uso de los datos recolectados. Adicionalmente, aclarar si los encuestados gozarán de anonimato o no, así como un instructivo que aclare la forma de responder las preguntas.

    h4 Cédula de entrevista

    .row.justify-content-center.align-items-center  
      .col-lg-8 
        p.mb-3(data-aos="fade-left") Funciona de manera muy similar al cuestionario, pero con una diferencia fundamental: la participación del encuestador de forma directa. En el cuestionario, la prueba puede realizarse de manera simultánea a un amplio grupo de individuos, debido a que las instrucciones y las preguntas se encuentran contenidas en un documento al que estos acceden. En la cédula de entrevista, el investigador es quien posee el documento y, por lo tanto, es quien lee las preguntas y anota las respuestas.
        p(data-aos="fade-left") La interacción entre encuestador y encuestado favorece la resolución de dudas, por lo que las respuestas obtenidas son más fidedignas a la realidad. Al igual que en el cuestionario, la entrevista puede ser anónima, pero, debido al contacto entre las partes, debe propenderse por un ambiente de confianza y confidencialidad, que permita respuestas honestas y espontáneas.
      .col-lg-4
        figure(data-aos="fade-right")
          img(src='@/assets/curso/temas/tema2/39.svg', alt='Texto que describa la imagen')

    separador 
    .titulo-segundo.color-secundario
      h2#t_2_5 2.5 Análisis de contenido
    
    p(data-aos="fade-left") El eje central de esta metodología consiste en recolectar y analizar los datos al mismo tiempo; para ello, hace uso principalmente de fuentes de información secundarias, es decir, documentos elaborados previamente por otros expertos, en un ámbito social específico. Ofrece una sinergia con la metodología de la observación, puesto que no siempre es posible evidenciar todos los fenómenos posibles en una situación específica, así que la información recolectada de otros expertos que han indagado en la misma materia puede aportar material de análisis adicional.
      
    .row.justify-content-center.align-items-center 
      .col-10
        .tarjeta.tarjeta.p-4.mb-5(style="background-color:#DBF9BD")(data-aos="flip-up")
          .row.justify-content-center.align-items-center 
            .col-lg-1
              figure(data-aos="fade-right")
                img(src='@/assets/curso/temas/tema2/40.svg', alt='Texto que describa la imagen')
            .col-lg-11.px-4
              p(data-aos="fade-left") La mecánica base consiste en la recolección de datos a partir de diversas fuentes que tengan alguna relación con la problemática que se busca cubrir, desvelando su contenido y significado, y a partir de esto, crear nuevo conocimiento.

    h3.mt-5.titulo-tercero 2.5.1	#[em Aplicaciones]
    
    .row.justify-content-center.align-items-center 
      .col-12
        .tarjeta.tarjeta.p-4.mb-5(style="background-color:#FFFAD0")(data-aos="flip-up")
          .row.justify-content-center.align-items-center 
            .col-10.mb-3
              p(data-aos="fade-left") Esta metodología resulta la de mayor uso, debido a sus costos reducidos y a la facilidad del acceso a la información en la actualidad. Algunos de los usos que se le pueden dar son los siguientes: 
          .row.justify-content-center.align-items-center 
            .col-lg-6
              ul.lista-ul.mb-3
                li 
                  i.lista-ul__vineta
                  | Profundizar en los estudios realizados por otros. Con un camino ya recorrido, es más viable ahondar en problemáticas que otros ya han trabajado en el pasado.
                li
                  i.lista-ul__vineta
                  |	Comparar estudios que abordan las mismas temáticas desde enfoques similares permite determinar diferencias que surjan de contextos sociales o condiciones culturales.
                li
                  i.lista-ul__vineta
                  | Analizar trabajos de terceros puede llevar a validar o no las conclusiones alcanzadas, la comprobación de resultados o su compatibilidad.
                li
                  i.lista-ul__vineta
                  | Posibilita la recolección de información jurídica, normativa o legal asociada a una región determinada, a través de la recopilación de documentos oficiales.
                li
                  i.lista-ul__vineta
                  | Debido a que se puede recolectar información de cualquier lugar del mundo, ofrece un acercamiento a entornos culturales que por otros medios no serían alcanzables, permitiendo estudiar grupos de población determinados.
            .col-lg-4
              figure(data-aos="fade-right")
                img(src='@/assets/curso/temas/tema2/41.svg', alt='Texto que describa la imagen')
    
    h3.titulo-tercero 2.5.2	#[em Características]
    p.mb-5(data-aos="fade-left") Existen diversas vertientes que analizan esta metodología de recolección de datos, las siguientes características suelen ser comunes en la mayoría de las posiciones:

    .row.justify-content-center
      .col-lg-5(data-aos="flip-up")
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema2/42.svg' alt='AvatarTop')
          .tarjeta.tarjeta(style="background-color:#DBF9BD; height:100%")
            .p-3.mb-1
              h2.text-small Objetividad
              p.text-small Si se replica cualquier experimento o situación que ha sido previamente documentada por otro experto, las conclusiones que se alcancen con él deben ser, en esencia, las mismas. Las opiniones o ideas preconcebidas de los autores no deberían tener un efecto sobre los resultados, pero, para que ello se dé, las reglas y parámetros de medición deben ser lo suficientemente claros y explícitos para que no haya confusiones en la aplicación.
      .col-lg-5(data-aos="flip-up")
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema2/43.svg' alt='AvatarTop')
          .tarjeta.tarjeta(style="background-color:#DBF9BD; height:100%")
            .p-4.mb-4
              h2.text-small Sistematicidad
              p.text-small Todo procedimiento asociado al análisis de contenido debe seguir un proceso sistemático para la recopilación y análisis de los datos; de la misma forma, con las secuencias para interpretar los fenómenos indagados y los parámetros utilizados para codificar y replicar tanto pruebas como criterios de evaluación.
    .row.justify-content-center
      .col-lg-5(data-aos="flip-up")
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema2/44.svg' alt='AvatarTop')
          .tarjeta.tarjeta(style="background-color:#DBF9BD; height:100%")
            .p-4.mb-4
              h2.text-small Cuantitativo
              p.text-small Su naturaleza apunta a la recolección de información cuantitativa. Esto se debe al método aplicado, donde se consultan múltiples fuentes en la búsqueda de patrones o similitudes que puedan hacerse generales. En este sentido, el resultado a obtener apunta a indicadores o predicciones de conductas.
      .col-lg-5(data-aos="flip-up")
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema2/45.svg' alt='AvatarTop')
          .tarjeta.tarjeta(style="background-color:#DBF9BD; height:100%")
            .p-4.mb-5
              h2.text-small Inferencial
              p.text-small Aunque el análisis de contenido se nutre del trabajo realizado por otros investigadores, el resultado a obtener debe ser la generación de nuevos datos; se considera que es inferencial, dado que, a partir de unos juicios preexistentes y su replicación, se alcanzan nuevas conclusiones.

    h3.titulo-tercero 2.5.3	#[em Tipos de análisis] 
    p.mb-5(data-aos="fade-left") La clasificación de los análisis de contenido puede obedecer a criterios variados. Emanuelli et al. (2012) recopilan una serie de ellos en su obra, como se expone a continuación:

    .titulo-sexto.color-acento-contenido.offset-2
      h5 Figura 8
      span #[em Pasos para aplicar una entrevista]

    .row.mt-5
      ImagenInfografica.color-primario.mb-5.desktop
        template(v-slot:imagen)
          figure(data-aos="flip-up")
            img(src='@/assets/curso/temas/tema2/46.svg', alt='Texto que describa la imagen')
            figcaption Nota. Elaboración a partir de Emanuelli et al. (2012).
        
        .tarjeta.color-acento-botones.p-3(x="23.4%" y="51.9%" numero="")
          .h5.mb-2 Exploratorio
          p Suelen hacerse uso de estos cuando se busca probar un material de estudio por primera vez. Especialmente útiles en proyectos de formación, donde pueden aportar información relevante respecto a indicadores de medida o delimitaciones de la muestra.
        .tarjeta.color-acento-botones.p-3(x="23.4%" y="64.1%" numero="")
          .h5.mb-2 Descriptivo
          p Presentan un detalle de la realidad empírica de los documentos. Describen los aspectos más relevantes de la situación estudiada y, a través de ellos, proponen modificaciones o adiciones.
        .tarjeta.color-acento-botones.p-3(x="23.4%" y="77.1%" numero="")
          .h5.mb-2 Verificativo
          p Ponen a prueba los trabajos de investigación de otros autores, comparándolos entre sí. Para lograrlo, cuestionan desde la fuente de la información hasta las conclusiones alcanzadas, corroborando cada una de las afirmaciones relevantes.
        .tarjeta.color-acento-botones.p-3(x="48.6%" y="51.9%" numero="")
          .h5.mb-2 Primarios
          p El contenido estudiado es el original, es decir, fue creado de manera directa por el autor, haciendo uso de otras metodologías como la observación.
        .tarjeta.color-acento-botones.p-3(x="48.6%" y="64.1%" numero="")
          .h5.mb-2 Secundarios
          p La fuente de información utilizada en este tipo de análisis de contenido proviene de fuentes secundarias, lo que implica que se compone de resúmenes, traducciones o transcripciones derivadas de un contenido primario.
        .tarjeta.color-acento-botones.p-3(x="73.4%" y="51.7%" numero="")
          .h5.mb-2 Horizontales
          p El contenido a estudiar proviene de múltiples autores y obras. Se suele aplicar este tipo de análisis cuando se busca cuestionar estudios que afectan grandes poblaciones, como ideologías o movimientos políticos de amplio espectro.
        .tarjeta.color-acento-botones.p-3(x="73.4%" y="64.1%" numero="")
          .h5.mb-2 Verticales
          p Son análisis intensivos, asociados a una materia o tópico específico y bien delimitado. Es común que los contenidos fuente toquen muchos más temas y el análisis se centre solo en ciertas secciones. 
        .tarjeta.color-acento-botones.p-3(x="73.5%" y="76.1%" numero="")
          .h5.mb-2 Transversales
          p Para este tipo de análisis se suelen confrontar posturas distintas relacionadas con un mismo tema. La intención detrás es identificar las causas de las diferencias entre ellas, si se deben a posturas de los investigadores originales o a causas específicas que trascienden sus alcances.
        .tarjeta.color-acento-botones.p-3(x="73.5%" y="88.3%" numero="")
          .h5.mb-2 Longitudinales
          p Las fuentes de información provienen de diferentes momentos en el tiempo. Se espera evidenciar la evolución respecto a una temática específica. Claros ejemplos de ellos son las publicaciones periódicas de algún medio.
        .tarjeta.color-acento-botones.p-3(x="97.6%" y="51.8%" numero="")
          .h5.mb-2 Cuantitativos
          p Los datos a estudiar pueden medirse aplicando escalas de cantidades. Es posible la tabulación de las posturas y el cálculo de medidas estadísticas que complementen la información recolectada.
        .tarjeta.color-acento-botones.p-3(x="97.6%" y="63.9%" numero="")
          .h5.mb-2 Cualitativos
          p Predomina el factor descriptivo, tanto en la información fuente como en la generada a través del análisis. Su estudio se centra en posturas, conductas o cualquier otra característica no medible, donde se busca constatar su consistencia. 

    .row.mt-5
      ImagenInfografica.color-primario.mb-5.movil
        template(v-slot:imagen)
          figure(data-aos="flip-up")
            img(src='@/assets/curso/temas/tema2/47.svg', alt='Texto que describa la imagen')
            figcaption Nota. Elaboración a partir de Emanuelli et al. (2012).
        
        .tarjeta.color-acento-botones.p-3(x="77.4%" y="77%" numero="")
          .h5.mb-2 Exploratorio
          p Suelen hacerse uso de estos cuando se busca probar un material de estudio por primera vez. Especialmente útiles en proyectos de formación, donde pueden aportar información relevante respecto a indicadores de medida o delimitaciones de la muestra.
        .tarjeta.color-acento-botones.p-3(x="77.4%" y="83.5%" numero="")
          .h5.mb-2 Descriptivo
          p Presentan un detalle de la realidad empírica de los documentos. Describen los aspectos más relevantes de la situación estudiada y, a través de ellos, proponen modificaciones o adiciones.
        .tarjeta.color-acento-botones.p-3(x="77.4%" y="90%" numero="")
          .h5.mb-2 Verificativo
          p Ponen a prueba los trabajos de investigación de otros autores, comparándolos entre sí. Para lograrlo, cuestionan desde la fuente de la información hasta las conclusiones alcanzadas, corroborando cada una de las afirmaciones relevantes.
        .tarjeta.color-acento-botones.p-3(x="77.4%" y="55.5%" numero="")
          .h5.mb-2 Primarios
          p El contenido estudiado es el original, es decir, fue creado de manera directa por el autor, haciendo uso de otras metodologías como la observación.
        .tarjeta.color-acento-botones.p-3(x="77.4%" y="62.2%" numero="")
          .h5.mb-2 Secundarios
          p La fuente de información utilizada en este tipo de análisis de contenido proviene de fuentes secundarias, lo que implica que se compone de resúmenes, traducciones o transcripciones derivadas de un contenido primario.
        .tarjeta.color-acento-botones.p-3(x="77.4%" y="20.1%" numero="")
          .h5.mb-2 Horizontales
          p El contenido a estudiar proviene de múltiples autores y obras. Se suele aplicar este tipo de análisis cuando se busca cuestionar estudios que afectan grandes poblaciones, como ideologías o movimientos políticos de amplio espectro.
        .tarjeta.color-acento-botones.p-3(x="77.4%" y="26.9%" numero="")
          .h5.mb-2 Verticales
          p Son análisis intensivos, asociados a una materia o tópico específico y bien delimitado. Es común que los contenidos fuente toquen muchos más temas y el análisis se centre solo en ciertas secciones. 
        .tarjeta.color-acento-botones.p-3(x="77.4%" y="33.5%" numero="")
          .h5.mb-2 Transversales
          p Para este tipo de análisis se suelen confrontar posturas distintas relacionadas con un mismo tema. La intención detrás es identificar las causas de las diferencias entre ellas, si se deben a posturas de los investigadores originales o a causas específicas que trascienden sus alcances.
        .tarjeta.color-acento-botones.p-3(x="77.4%" y="40.1%" numero="")
          .h5.mb-2 Longitudinales
          p Las fuentes de información provienen de diferentes momentos en el tiempo. Se espera evidenciar la evolución respecto a una temática específica. Claros ejemplos de ellos son las publicaciones periódicas de algún medio.
        .tarjeta.color-acento-botones.p-3(x="77.4%" y="2.8%" numero="")
          .h5.mb-2 Cuantitativos
          p Los datos a estudiar pueden medirse aplicando escalas de cantidades. Es posible la tabulación de las posturas y el cálculo de medidas estadísticas que complementen la información recolectada.
        .tarjeta.color-acento-botones.p-3(x="77.4%" y="9.9%" numero="")
          .h5.mb-2 Cualitativos
          p Predomina el factor descriptivo, tanto en la información fuente como en la generada a través del análisis. Su estudio se centra en posturas, conductas o cualquier otra característica no medible, donde se busca constatar su consistencia. 

    h3.titulo-tercero 2.5.4	#[em Etapas] 

    p.mb-5(data-aos="fade-left") La aplicación de la metodología de análisis de contenidos puede dividirse en tres fases fundamentales:

    .row.mb-5(data-aos="flip-up")
      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-primario.p-5(style="height:100%")
          .tarjeta-numerada__numero
            .h2 1
          h4.text-center.text-small Organización
          p.text-center.text-small Es la etapa previa a la ejecución del trabajo de investigación. En ella se define el propósito del estudio, las herramientas a utilizar, las personas que llevarán a cabo cada una de las tareas programadas. A mayor detalle en la planeación de las actividades, más fidedigna será la replicación del estudio para medir su precisión.

      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-secundario.p-5(style="height:100%")
          .tarjeta-numerada__numero
            .h2 2
          h4.text-center.text-small Explotación de material
          p.text-center.text-small Una vez definidas las tareas, el personal a cargo y la muestra sobre la cual se efectuarán los análisis correspondientes, se inicia el trabajo de interpretación de la información. Simultáneamente, se debe llevar un registro de todos los datos que puedan ser considerados relevantes para el objeto del estudio.
          p.text-center.text-small Durante esta fase, también se diseña la hoja de instrucciones, un documento en el que se describe la metodología aplicable y la investigación. Aquí también deben incluirse otros elementos relevantes, como las escalas de medición o los criterios para definir los temas clave, así como un vocabulario con los términos indispensables para efectuar el análisis.

      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-acento-contenido.p-5(style="height:100%")
          .tarjeta-numerada__numero
            .h2 3
          h4.text-center.text-small Tratamiento estadístico de la información
          p.text-center.text-small Una vez se hace el registro de la información y el análisis del contenido fuente está completado, se deben poner a prueba las afirmaciones surgidas de este trabajo. Las validaciones deben cumplir con una serie de criterios expuestos y coherentes con los estudios iniciales, especificando escalas y criterios de medición.


</template>

<script>
export default {
  name: 'Tema2',
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
