$(document).ready(function(){
  $('#moreBtn').click(function(){
    $('#estado').hide();

    $('#main').hide();
    $('#social').hide();
    $('#salud').hide();
    $('#solicitudes').hide();
    $('#docs').hide();
    $('#moreInfo').show();
    $('#moreInfo').empty();
    $('#moreInfo').append(`


  <section>
    <!-- Full Page Intro -->
    <div class="view" style="background-image: url('http://cdn.plataformaurbana.cl/wp-content/uploads/2014/12/cerro-renca-1000x668.png'); background-repeat: no-repeat; background-size: cover; background-position: center center; height=auto;" >
      <!-- Mask & flexbox options-->
      <div class="mask rgba-gradient d-flex justify-content-center align-items-center">

      <!-- Content -->
      <div class="container">
        <div class="row">
          <div class="col-xs-6 col-sm-6 col-md-6">
            <ul id="listInfo">
              <li style="font-size: 18px;">Cultura</li>
              <p class="text-justify">Un viejo anhelo de la comunidad de Renca ha sido contar con un espacio acondicionado y significativo para el desarrollo de las artes y la cultura comunitaria. Es así que durante 2017 desde el Departamento de Cultura se elaboró un ante proyecto de diseño y habilitación de la Casona Municipal como futura Casa de la Cultura de Renca....</p>
              <p style="margin-left: 75%; margin-top: -5%;"><a href="http://www.renca.cl/cultura/" target="_blank">Ver más!</a></p>
              <li style="font-size: 18px; margin-top: -5%;">Deportes</li>
              <p class="text-justify">Implementación  de Talleres de Capoeira, baile entretenido, acondicionador físico, fútbol, rugby, tenis de mesa, tenis, vóley, básquet, karate, entre otras disciplinas. Programación, implementación y ejecución de actividades en la piscina Lo Velásquez. Programación y realización de jornadas de capacitación para dirigentes de organizaciones deportivas de la comuna....</p>
              <p style="margin-left: 75%; margin-top: -5%;"><a href="http://www.renca.cl/deporte/" target="_blank">Ver más!</a></p>
              <li style="font-size: 18px; margin-top: -5%;">Educación</li>
              <p class="text-justify">Con 11 escuelas básicas, 3 liceos y 10 salas cunas y jardines infantiles, la propuesta educativa comunal de Renca se inscribe en el proyecto nacional de Educación Pública, reconociendo la educación como un bien social y derecho humano fundamental que debe ser garantizado por el Estado.....</p>
              <p style="margin-left: 75%; margin-top: -5%;"><a href="http://www.renca.cl/educacion/" target="_blank">Ver más!</a></p>
            </ul>
          </div>
        </div>
      </div>
    
  </section>
    `)
  })
});