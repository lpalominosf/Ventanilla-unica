
$(document).ready(function() {
  $("#saludBtn").click(function() {
    $('#main').hide();
    $('#solicitudes').hide();
    $('#social').hide();

    $('#salud').show();
    $('#salud').empty();
    $('#salud').append(`
  <section class="rgba-gradient" id="salud">
    <div class="container">
      <div class="row">
        <div class="col-12 col-xs-12 col-sm-12 col-md-6 col-lg-6  text-center">
          <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample"><i class="fas fa-info"></i><p href="">Información</p></button>
          <!-- Collapsible element -->
<div class="collapse" id="collapseExample">
    <div class="mt-3 card card-body">
        <p>El plan de salud de la comuna de Renca se basa en la política nacional de fortalecimiento de la Atención Primaria de Salud orientada a mejorar resultados sanitarios, eficiencia, satisfacción usuaria y minimizar el efecto de los determinantes sociales de la salud.</p>

<p>Esta política define al modelo de atención integral, familiar y comunitario, basado en un enfoque de derechos, como la forma más efectiva de dar respuesta a las necesidades y expectativas en salud de la población.</p>

<p>Centrado en la persona y su familia, basado en el trabajo en equipos multidisciplinarios a cargo de poblaciones pequeñas, reconoce el valor del vínculo y de sistemas de cuidados a través del tiempo, y entiende el proceso salud enfermedad como un continuo, lo que permite implementar acciones para la promoción de la salud, reforzando la educación en factores protectores y prevención de factores de riesgo, desde un enfoque poblacional, y de esta forma se anticipa al daño.</p>

<p>Cuenta con una red de establecimientos de Atención Primaria de Salud (4 Centros de Salud Familiar –Cesfam-, 1 SAR, 2 SAPU, 6 Centros de rehabilitación musculoesqueléticas) y 2 COSAM, para brindar atención al 78.8% de la población inscrita validada por FONASA.</p>

<p>Sus 4 Centros de Salud se encuentran certificados por el Servicio de Salud Metropolitano Occidente –SSMOC- como Centros de Salud Familiar.</p>
    </div>
</div>
<!-- / Collapsible element -->
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-xs-12 col-sm-12 col-md-6 col-lg-6 text-center">
          <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#darkModalForm"><i class="far fa-calendar-alt"></i><p href="">Agenda tu hora</p></button>
          
        </div>
      </div>
    </div>
  </section>


<!-- Modal -->
<div class="modal fade" id="darkModalForm" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog form-dark" role="document">
        <!--Content-->
        <div class="modal-content card card-image" style="background-image: url('https://mdbootstrap.com/img/Photos/Others/pricing-table%20(7).jpg');">
            <div class="text-white rgba-stylish-strong py-5 px-5 z-depth-4">
                <!--Header-->
                <div class="modal-header text-center pb-4">
                    <h3 class="modal-title w-100 white-text font-weight-bold" id="myModalLabel"><strong>SIGN</strong> <a class="green-text font-weight-bold"><strong> UP</strong></a></h3>
                    <button type="button" class="close white-text" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <!--Body-->
                <div class="modal-body">
                    <!--Body-->
                   
                   <div class="md-form">
    <input placeholder="Selected date" type="text" id="date-picker-example" class="form-control datepicker">
    <label for="date-picker-example">Try me...</label>
</div>
                        <!--Grid column-->

                    </div>
                    <!--Grid row-->

                </div>
            </div>
        </div>
        <!--/.Content-->
    </div>
</div>
<!-- Modal -->`)
})
})