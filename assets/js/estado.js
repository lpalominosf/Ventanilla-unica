$(document).ready(function(){
  $('#btn-estado').click(function(){
    $('#main').hide();
    $('#solicitudes').hide();
    $('#social').hide();
    $('#salud').hide();
    $('#estado').show();
    $('#estado').empty();
    $('#estado').append(`
    <div class="view" style="background-image: url('http://cdn.plataformaurbana.cl/wp-content/uploads/2014/12/cerro-renca-1000x668.png'); background-repeat: no-repeat; background-size: cover; background-position: center center;">
      <div class="mask rgba-gradient d-flex justify-content-center align-items-center"> 
        <section class="text-center">
          <div class="container">
            <div class="row">
              <div class="col-12 col-md-12 col-sm-12 col-lg-12 col-xl-12">
                <h6>Seleccione Tipo de Solicitud</h6>
              </div>
              <div class="col-12 col-md-12 col-sm-12 col-lg-12 col-xl-12">
                <button type="button" class="btn patentebtn">PATENTE</button>
              </div>
              <div class="col-12 col-md-12 col-sm-12 col-lg-12 col-xl-12">
                <button type="button" class="btn tagbtn">TAG</button>
              </div>
              <div class="col-12 col-md-12 col-sm-12 col-lg-12 col-xl-12">
                <button type="button" class="btn subsidiosbtn">SUBSIDIOS</button>
              </div>
              <div class="col-12 col-md-12 col-sm-12 col-lg-12 col-xl-12">
                <button type="button" class="btn esterilizabtn"><span class="masc">ESTERILIZACION DE MASCOTAS</span></button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
    `)
  })
});