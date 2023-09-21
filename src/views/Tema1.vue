<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Información
    p.mb-5(data-aos="fade-left") La información es la disposición de datos de forma ordenada y estructurada, bajo reglas de un contexto específico, que generan utilidad. Los datos son en principio abstractos, por ejemplo, una serie de caracteres o dígitos numéricos presentados a modo de listado o de forma desorganizada, no aportan información de utilidad, sin embargo, si se les dota de contexto y se justifica su ordenamiento, pueden llevar al entendimiento de una situación específica.

    .row
      .tarjeta.tarjeta.p-4.mb-5(style="background-color:#DBF9BD")
        .row.justify-content-center.align-items-center
          .col-lg-3.mb-3
            figure
              img(src='@/assets/curso/temas/tema1/1.svg', alt='Texto que describa la imagen')
          .col-lg-7
            p(data-aos="fade-left") Por ejemplo, una lista de números de dos cifras presentadas en forma vertical podría significar miles de cosas, no obstante, si la columna se titula “Edad de los participantes”, puede deducirse que cada valor listado representa los años de edad de personas que pertenecen a un grupo estudiado; cada dato adicional que se incluya brindará un mayor contexto, por lo tanto, los datos se tornarán en información relevante.

    separador 
    .titulo-segundo.color-secundario
      h2#t_1_1 1.1  Uso
    
    p.mb-5(data-aos="fade-left") El uso de la información es casi interminable y, para cualquier empresa, será la forma de avanzar si le encuentran la forma ideal, tal como se observa a continuación:

    .row
      .tarjeta.p-4.mb-5(style="background-color:#FFFAD0")
        SlyderA(tipo="b")
          .row.justify-content-center.align-items-center 
            .col-md-4.mb-4.mb-md-0.p-4
              h4 La información es base del conocimiento
              p La información tiene como propósito principal enriquecer el conocimiento sobre algún aspecto, esto conlleva a reducir los niveles de incertidumbre asociados a la temática, bien sea para prevenir eventos inesperados o para comprender todos los sucesos asociados. En cuanto a los aspectos administrativos, la información puede aportar elementos de juicio para apoyar la toma de decisiones en cualquier nivel de la organización.
            .col-md-7.p-4
              figure
                img(src='@/assets/curso/temas/tema1/2.svg', alt='Texto que describa la imagen')
                
          .row.justify-content-center.align-items-center 
            .col-md-4.mb-4.mb-md-0.p-4
              h4 Análisis de la información
              p La información recolectada debe ser sometida a estudio o análisis. Su interpretación permite la transformación en acciones o toma de medidas, o incluso, en la generación de nuevas ideas. En este aspecto, cabe mencionar que, a mayor calidad de la información recolectada, la precisión de las estrategias basadas en ella, su efectividad y la precisión de la nueva información generada, también será mayor.
            .col-md-5.p-4
              figure
                img(src='@/assets/curso/temas/tema1/3.svg', alt='Texto que describa la imagen')

          .row.justify-content-center.align-items-center 
            .col-md-4.mb-4.mb-md-0.p-4
              h4 Curaduría de la información
              p La apropiación de los datos dispuestos requiere de un mínimo criterio en la materia objeto de estudio, las personas que efectúe los análisis deben contar con mentalidad abierta al aprendizaje, como también al cuestionamiento; la veracidad de la información debe ser comprobada, porque existen fuentes de información poco fiables y pueden tener sesgos en los datos, igualmente porque las estrategias utilizadas para su recolección no son las más recomendables.
            .col-md-5.p-4
              figure
                img(src='@/assets/curso/temas/tema1/4.svg', alt='Texto que describa la imagen')
          
          .row.justify-content-center.align-items-center 
            .col-md-4.mb-4.mb-md-0.p-4
              h4 Valide los datos y las fuentes de información
              p La toma de decisiones fundamentada en información imprecisa conlleva a toma incorrecta de decisiones, además en la actualidad con el uso de las redes sociales y de Internet existen muchas fuentes de información de fácil acceso, las publicaciones, los estudios académicos, las noticias, entre otras, que es necesario verificar y contrastar la información entre ellas, para determinar si son correctas.
            .col-md-5.p-4
              figure
                img(src='@/assets/curso/temas/tema1/5.svg', alt='Texto que describa la imagen')

          .row.justify-content-center.align-items-center 
            .col-md-4.mb-4.mb-md-0.p-4
              h4 Mercados y tendencias
              p La oportunidad es otra cualidad imprescindible en la información, puesto que conocer los aspectos relevantes de un escenario específico de forma oportuna permite la toma de decisiones e implementación de medidas a tiempo.
            .col-md-5.p-4
              figure
                img(src='@/assets/curso/temas/tema1/6.svg', alt='Texto que describa la imagen')
          
          .row.justify-content-center.align-items-center 
            .col-md-4.mb-4.mb-md-0.p-4
              p Por ejemplo un suceso como la entrada al mercado de un nuevo producto de la competencia, conocer de ello a tiempo permite implementar estrategias, como campañas publicitarias, para robustecer las ventas de los bienes ofrecidos por la empresa, o incluso la reducción de los precios de venta si con ello se ajustan a las nuevas condiciones de la oferta
            .col-md-5.p-4
              figure
                img(src='@/assets/curso/temas/tema1/7.svg', alt='Texto que describa la imagen')

    separador 
    .titulo-segundo.color-secundario
      h2#t_1_2 1.2  Ciclo de vida

    p.mb-5(data-aos="fade-left") La información atraviesa un proceso que contiene cuatro etapas principales y que comprenden aquellas actividades derivadas de su recolección, análisis y conservación. Cada etapa detalla una serie de parámetros centrados en la mejora de la productividad, bien sea enfocada en la precisión de la información recolectada, o en la consecución de objetivos a partir de la interpretación de los datos dispuestos. El siguiente diagrama presenta las cuatro etapas del ciclo de vida de la información:

  
    .row.justify-content-center.align-items-center
      span.text-center #[b Ciclo de vida de la información]

    .row.mt-5
      ImagenInfografica.color-primario.mb-5.desktop
        template(v-slot:imagen)
          figure
            img(src='@/assets/curso/temas/tema1/8.svg', alt='Texto que describa la imagen')
        
        .tarjeta.color-acento-botones.p-3(x="18%" y="32.5%" numero="")
          .h5.mb-2 Creación y captura
          p Corresponde a la primera etapa del ciclo de vida de la información. Los datos pueden surgir a partir de diversas fuentes, siempre y cuando, las mismas se encuentren destinadas a suplir las necesidades de la organización. Algunas de las fuentes de información más utilizadas son las siguientes:
        .tarjeta.color-acento-botones.p-3(x="18%" y="49.9%" numero="")
          .h5.mb-2 Datos preexistentes
          p Pueden ser de otras organizaciones, empresas que pueden dedicarse al mismo sector o a la misma actividad, puesto que, de esta forma, se posibilita la homologación de los datos entre compañías, sin esfuerzos desproporcionados.
        .tarjeta.color-acento-botones.p-3(x="18%" y="67.8%" numero="")
          .h5.mb-2 Generación de la información
          p A través de las actividades desarrolladas por los funcionarios encargados.
        .tarjeta.color-acento-botones.p-3(x="18%" y="86.8%" numero="")
          .h5.mb-2 Información disponible
          p En medios de acceso público, como libros, noticiarios, páginas web o redes sociales; la selección de estas fuentes estará supeditada a la naturaleza de la investigación y sus objetivos.
        .tarjeta.color-acento-botones.p-3(x="43%" y="32.5%" numero="")
          .h5.mb-2 Transmisión, almacenamiento y seguridad
          p Una vez la información ha sido recolectada, se continúa con la transmisión a los usuarios interesados. Para garantizar el acceso a los datos en periodos posteriores, es necesario su almacenaje en condiciones seguras que garanticen su integridad.
        .tarjeta.color-acento-botones.p-3(x="43%" y="50.1%" numero="")
          .h5.mb-2 Transmisión
          p La información puede ser relevante para diferentes actores en una misma organización. Los datos de venta son importantes para el área comercial, pero también lo son para el área de recaudo o de producción. Debido a esto, deben existir medios de transmisión de la información que permitan que esta llegue a todos los interesados. 
          p Las posibilidades van desde las soluciones integrales asociadas a softwares administrativos, hasta los programas de mensajería instantánea.
        .tarjeta.color-acento-botones.p-3(x="43%" y="67.9%" numero="")
          .h5.mb-2 Almacenamiento
          p Tanto la información física como digital demandan espacios para su almacenamiento. Las bases de datos abordan esta tarea conservando la información según los criterios técnicos aplicados, de la misma forma que lo hace una estantería que archiva los documentos físicos.
        .tarjeta.color-acento-botones.p-3(x="43%" y="86.7%" numero="")
          .h5.mb-2 Seguridad
          p Cuando se trabaja con datos sensibles, deben existir sistemas encargados de facilitar la información a aquellos destinatarios cuando la requieran, pero de esta misma forma, deben implementarse medidas para que el acceso sea lo suficientemente controlado para evitar que personas no autorizadas accedan a ella. 
          p La información es un activo intangible de vital importancia para cualquier organización, puesto que compila datos variados y claves de la empresa, como clientes, fórmulas de producción o estrategias mercantiles; su publicación puede conllevar consecuencias graves, donde se pierden ventajas competitivas.
        .tarjeta.color-acento-botones.p-3(x="64.9%" y="32.5%" numero="")
          .h5.mb-2 Gestión y trabajo colaborativo
          p Debido a las diversas perspectivas desde donde se puede abordar la información, suele ser recomendable el trabajo colaborativo. Cuando existe multiplicidad de colaboradores, la productividad incrementa; es por ello que, usualmente, se designan funcionarios de cada área para sustraer los datos más relevantes para ellos, otorgando los permisos necesarios en una ventana de tiempo determinada.
        .tarjeta.color-acento-botones.p-3(x="83.9%" y="32.5%" numero="")
          .h5.mb-2 Análisis y explotación de datos
          p La interpretación de la información se erige como la última fase de su ciclo de vida, y es en este proceso donde se genera nuevo conocimiento a partir de los datos recolectados. 
          p El análisis busca llegar a conclusiones o juicios de valor fundamentados, por lo que la toma de decisiones debe darse una vez se aborda este apartado.

    .row.mt-5
      figure.movil
        img(src='@/assets/curso/temas/tema1/16.svg', alt='Texto que describa la imagen')
          
    separador 
    .titulo-segundo.color-secundario
      h2#t_1_3 1.3  Lenguaje técnico
      
    .row
      .tarjeta.p-4.mb-3
        .row.justify-content-center.align-items-center 
          .col-md-4.p-4
            figure(data-aos="fade-right")
              img(src='@/assets/curso/temas/tema1/9.png', alt='Texto que describa la imagen')
          .col-md-6.p-4
            p(data-aos="fade-left") La información debe presentarse de tal manera que sea entendible para su público objetivo; así, cuando es de interés general, el lenguaje debe usar terminología común para cualquier individuo, sin importar su profesión u oficio. Por otro lado, cuando se busca abordar temáticas técnicas propias de una disciplina muy concreta, es viable el uso de un lenguaje más preciso y de alto contenido técnico.
            p(data-aos="fade-left") El ser humano ha ampliado su intelecto en todas las direcciones, desde las ciencias de la salud, hasta las económicas, desde el aspecto deportivo, hasta el musical; y este crecimiento exponencial y multidireccional lo ha llevado a utilizar jergas muy específicas para cada campo del conocimiento. El lenguaje técnico se caracteriza por ser accesible únicamente para los estudiados en cierta materia, pero su uso es cada vez más popular, debido a la constante profundización en las temáticas objeto de estudio.

    p.mb-5(data-aos="fade-left") Conforme pasa el tiempo, el enriquecimiento de nuestro idioma se ve liderado por la utilización de lenguajes técnicos para todas las disciplinas abordadas. Castillo (2018) sugiere las siguientes características para este lenguaje:            

    .row.mt-5.justify-content-center.align-items-center
      .col-lg-8
        ImagenInfografica.color-secundario.mb-5.desktop
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema1/10.svg', alt='Texto que describa la imagen')
          
          .tarjeta.color-acento-botones.p-3(x="8.2%" y="27.9%" numero="")
            p Conforme más tiempo pasa, más acelerado es su crecimiento, es una situación natural en la sociedad actual, donde el acceso a la educación es cada vez más popular, y las nuevas tecnologías permiten la publicación a nivel global de toda clase de artículos que promueven el avance cultural
          .tarjeta.color-acento-botones.p-3(x="8.2%" y="72.4%" numero="")
            p Se considera coherente debido a su enfoque en un tema particular, mientras que su cohesión proviene del interés en generar afirmaciones a partir de diversos juicios e ideas que convergen en algo más concreto. Por último, se habla de adecuación debido a la forma en la que se perfila para ser dirigido a un público específico.
          .tarjeta.color-acento-botones.p-3(x="91.9%" y="27.8%" numero="")
            p Debido a que la terminología solo puede ser plenamente entendida por los expertos en la materia estudiada, su uso se encuentra limitado a públicos específicos: un gremio, una profesión o incluso una temática particular.
          .tarjeta.color-acento-botones.p-3(x="91.9%" y="72.4%" numero="")
            p El lenguaje técnico es tan cerrado a un tema particular que es muy poco probable encontrar más de un significado para sus términos. Esto quiere decir que no es para nada habitual evidenciar términos equivalentes, por lo que cada palabra siempre suele significar lo mismo.

    .row.mt-5
      figure.movil
        img(src='@/assets/curso/temas/tema1/17.svg', alt='Texto que describa la imagen')
    
    separador 
    .titulo-segundo.color-secundario
      h2#t_1_4 1.4  Confidencialidad

    .row.row.justify-content-center.align-items-center
      .col-12.mb-5
        .row.justify-content-center.align-items-center
          .col-lg-4
            figure(data-aos="fade-right")
              img(src='@/assets/curso/temas/tema1/11.svg', alt='Texto que describa la imagen')
          .col-lg-7
            p(data-aos="fade-left") La información es un bien preciado para cualquier individuo, natural o jurídico, puesto que a través de ello se puede acceder a eventos pasados para prever situaciones futuras. Este material histórico puede ser considerado sensible según las particularidades del mismo; por ejemplo, la dirección de residencia de una persona, su teléfono personal o los datos de sus cuentas bancarias son datos que no pueden ser publicados a un amplio grupo de terceros, debido a las consecuencias que ello puede traer.
            p(data-aos="fade-left") La Constitución Política de 1991 ya consideró este tipo de eventos, por lo que en su Artículo 15 reguló el derecho a la intimidad de las personas, así:

    .row.justify-content-center.align-items-center
      .col-10.mb-3
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/18.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 #[b Artìculo 15. Constitución Política.]
              br
              br
              | Todas las personas tienen derecho a su intimidad personal y familiar y a su buen nombre, y el Estado debe respetarlos y hacerlos respetar. De igual modo, tienen derecho a conocer, actualizar y rectificar las informaciones que se hayan recogido sobre ellas en bancos de datos y en archivos de entidades públicas y privadas.
    
    //- .row.justify-content-center.align-items-center
    //-   .col-10.mb-3
    //-     .bloque-texto-a.color-acento-contenido.p-4.p-md-5.mb-5(data-aos="flip-up") 
    //-       .row.m-0.align-items-center.justify-content-between
    //-         .col-lg-4.mb-4.mb-lg-0
    //-           h2(data-aos="fade-left").mb-0 Artìculo 15. 
    //-           h2(data-aos="fade-left") Constitución Política. 
    //-         .col-lg-8
    //-           .bloque-texto-a__texto.p-4
    //-             p(data-aos="fade-left") Todas las personas tienen derecho a su intimidad personal y familiar y a su buen nombre, y el Estado debe respetarlos y hacerlos respetar. De igual modo, tienen derecho a conocer, actualizar y rectificar las informaciones que se hayan recogido sobre ellas en bancos de datos y en archivos de entidades públicas y privadas.
            
    .row
      .tarjeta.tarjeta.p-4.mb-5(style="background-color:#FFFAD0")
        .row.justify-content-center.align-items-center
          .col-lg-3
            figure(data-aos="fade-right")
              img(src='@/assets/curso/temas/tema1/12.svg', alt='Texto que describa la imagen')
          .col-lg-7
            p(data-aos="fade-left") En la recolección, tratamiento y circulación de datos, se respetarán la libertad y demás garantías consagradas en la Constitución.
            p(data-aos="fade-left") La correspondencia y demás formas de comunicación privada son inviolables. Solo pueden ser interceptadas o registradas mediante orden judicial, en los casos y con las formalidades que establezca la ley.
            p(data-aos="fade-left") Para efectos tributarios o judiciales y para los casos de inspección, vigilancia e intervención del Estado, podrá exigirse la presentación de libros de contabilidad y demás documentos privados, en los términos que señale la ley.
            p(data-aos="fade-left") La información tiene muchas presentaciones y la carta magna aborda algunas de las más comunes y personales, como la correspondencia o medios de comunicación privada, pero también incluye otras de uso más comercial, como los bancos de datos, que suelen ser administrados por entidades públicas o empresas de carácter privado. 

    p.mb-5(data-aos="fade-left") La reglamentación a este derecho constitucional se encuentra en la Ley estatutaria 1266 de 2008, donde se establece el tratamiento de la información contenida en las bases de datos. El Artículo 1 de la ley en mención limita su alcance, así: 

    .row.justify-content-center.align-items-center
      .col-10.mb-3
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/19.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 #[b Artìculo 1.]
              br
              br
              | Objeto. La presente ley tiene por objeto desarrollar el derecho constitucional que tienen todas las personas a conocer, actualizar y rectificar las informaciones que se hayan recogido sobre ellas en bancos de datos, y los demás derechos, libertades y garantías constitucionales relacionadas con la recolección, tratamiento y circulación de datos personales a que se refiere el Artículo 15 de la Constitución Política, así como el derecho a la información establecido en el Artículo 20 de la Constitución Política, particularmente en relación con la información financiera y crediticia, comercial, de servicios y la proveniente de terceros países.
    
    
    //- .row.justify-content-center.align-items-center
    //-   .col-10
    //-     .bloque-texto-a.color-acento-contenido.p-4.p-md-5.mb-5(data-aos="flip-up") 
    //-       .row.m-0.align-items-center.justify-content-between
    //-         .col-lg-4.mb-4.mb-lg-0
    //-           h2(data-aos="fade-left").text-center.mb-0 Artículo 1. 
    //-         .col-lg-8
    //-           .bloque-texto-a__texto.p-4
    //-             p(data-aos="fade-left") Objeto. La presente ley tiene por objeto desarrollar el derecho constitucional que tienen todas las personas a conocer, actualizar y rectificar las informaciones que se hayan recogido sobre ellas en bancos de datos, y los demás derechos, libertades y garantías constitucionales relacionadas con la recolección, tratamiento y circulación de datos personales a que se refiere el Artículo 15 de la Constitución Política, así como el derecho a la información establecido en el Artículo 20 de la Constitución Política, particularmente en relación con la información financiera y crediticia, comercial, de servicios y la proveniente de terceros países.

    .row.row.justify-content-center.align-items-center
      .col-12.mb-5.mt-5
        .row.justify-content-center.align-items-center
          .col-lg-5.mb-3
            figure(data-aos="fade-right")
              img(src='@/assets/curso/temas/tema1/13.svg', alt='Texto que describa la imagen')
          .col-lg-7
            p(data-aos="fade-left") Posteriormente, en su Artículo 6, se enlistan los derechos con los que cuentan los titulares de la información contenida en las bases de datos y sus fuentes de información; asimismo, el artículo siguiente presenta los deberes de los operadores, las fuentes y los usuarios a la hora del registro, mantenimiento y comunicación de la información recolectada.
            p(data-aos="fade-left") Finalmente, la Ley 1581 de 2012, junto a su decreto reglamentario emitido el año posterior (Decreto 1377 de 2013), complementan la regulación de la información de las bases de datos, incluyendo aspectos clave como las autorizaciones del uso de la información consignada y la debida gestión que deben dar los operadores. Actualmente, es la Superintendencia de Industria y Comercio la encargada de ejercer la supervisión de estas prácticas por parte de los diferentes actores de la economía en Colombia. 

    p.mb-4(data-aos="fade-left") Si el aprendiz desea profundizar en estas políticas, se recomienda la lectura de la normativa relacionada previamente, a través de las siguientes fuentes:

    .row.justify-content-center.align-items-center
      .col-3
        .tarjeta.color.p-3.mb-5(style="background-color:#DBF9BD")
          .row.justify-content-around.align-items-center
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0.offset-2
                  h3.mb-1.text-small(data-aos="fade-left") Ley 1266 de 2008
                .col-sm-auto
                  a.boton.color-acento-botones(:href="link_1_1" target="_blank")
                    span.text-small(data-aos="fade-left") Link 
                    i.fas.fa-link

      .col-3
        .tarjeta.color.p-3.mb-5(style="background-color:#DBF9BD")
          .row.justify-content-around.align-items-center
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0.offset-2
                  h3.mb-1.text-small(data-aos="fade-left") Ley 1581 de 2012
                .col-sm-auto
                  a.boton.color-acento-botones(:href="link_1_2" target="_blank")
                    span.text-small(data-aos="fade-left") Link 
                    i.fas.fa-link

      .col-3
        .tarjeta.color.p-3.mb-5(style="background-color:#DBF9BD")
          .row.justify-content-around.align-items-center
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0.offset-2
                  h3.mb-1.text-small(data-aos="fade-left") Decreto 1377 de 2013
                .col-sm-auto
                  a.boton.color-acento-botones(:href="link_1_3" target="_blank")
                    span.text-small(data-aos="fade-left") Link 
                    i.fas.fa-link

    separador 
    .titulo-segundo.color-secundario
      h2#t_1_5 1.5 Fuentes

    p(data-aos="fade-left") Una fuente es el origen de los datos, de donde proviene la información. Según su procedencia, pueden clasificarse así:

    .row.mt-5.justify-content-center.align-items-center
      .col-lg-10
        ImagenInfografica.color-secundario.mb-5.desktop
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema1/14.svg', alt='Texto que describa la imagen')
          
          .tarjeta.color-acento-botones.p-3(x="6.5%" y="44.8%" numero="")
            p Provienen de un trabajo intelectual original, donde su autor observó los hechos y los registró, sin soportarse en el trabajo de otros. 
            p Son considerados los datos más confiables, puesto que no sufren ningún tipo de transformación o adaptación y, por lo tanto, transmiten las ideas de la forma más fidedigna a la voluntad del autor. Ejemplos de estas fuentes son las encuestas, cuestionarios, libros o fotografías.
          .tarjeta.color-acento-botones.p-3(x="93.6%" y="44.8%" numero="")
            p Surgen de las fuentes primarias, es decir, se nutren de contenido ya registrado y recopilado, sometiéndolo a transformaciones o adaptaciones, para facilitar el proceso de transmisión o para complementar el trabajo realizado por el autor original. 
            p Ejemplos de este tipo de fuentes son los resúmenes, traducciones, reseñas o adaptaciones de contenido original. Usualmente, no son utilizadas en investigaciones, puesto que en el proceso de transformación pueden omitirse datos relevantes.

    .row.mt-5.justify-content-center.align-items-center
      .col-lg-10
        ImagenInfografica.color-secundario.mb-5.movil
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema1/15.svg', alt='Texto que describa la imagen')
          
          .tarjeta.color-acento-botones.p-3(x="2%" y="37.1%" numero="")
            p Provienen de un trabajo intelectual original, donde su autor observó los hechos y los registró, sin soportarse en el trabajo de otros. Son considerados los datos más confiables, puesto que no sufren ningún tipo de transformación o adaptación y, por lo tanto, transmiten las ideas de la forma más fidedigna a la voluntad del autor. Ejemplos de estas fuentes son las encuestas, cuestionarios, libros o fotografías.
          .tarjeta.color-acento-botones.p-3(x="97.8%" y="37.1%" numero="")
            p Surgen de las fuentes primarias, es decir, se nutren de contenido ya registrado y recopilado, sometiéndolo a transformaciones o adaptaciones, para facilitar el proceso de transmisión o para complementar el trabajo realizado por el autor original. Ejemplos de este tipo de fuentes son los resúmenes, traducciones, reseñas o adaptaciones de contenido original. Usualmente, no son utilizadas en investigaciones, puesto que en el proceso de transformación pueden omitirse datos relevantes.
          

</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
    link_1_1:
      'https://www.alcaldiabogota.gov.co/sisjur/normas/Norma1.jsp?i=34488',
    link_1_2:
      'http://www.secretariasenado.gov.co/senado/basedoc/ley_1581_2012.html',
    link_1_3:
      'http://www.suin-juriscol.gov.co/viewDocument.asp?ruta=Decretos/1276081',
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
