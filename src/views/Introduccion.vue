<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    p(data-aos="fade-left") La información es un insumo importante para cualquier actividad organizacional. La información ayuda a determinar la ruta de acción aplicable y engloba actividades tan variadas como el análisis de datos históricos, la planeación a corto y largo plazo, la toma de decisiones y la evaluación del desempeño. Para hacer un uso eficiente de la información, es necesario tener conocimiento sobre su procedencia, su tratamiento y las herramientas que posibilitan su recolección y conservación.
    p.mb-3(data-aos="fade-left") Se invita a ver el siguiente vídeo introductorio:

    figure(data-aos="fade-right")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/m2y-4sH8iuA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
