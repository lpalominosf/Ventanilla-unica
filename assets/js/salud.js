$(document).ready(function() {




    $("#saludBtn").click(function() {

        $('#main').hide();
        $('#solicitudes').hide();
        $('#social').hide();

        $('#salud').show();
        $('#salud').empty();
        $('#salud').append(`
            <div class="view" id="saludContainer" style="background-image: url('http://cdn.plataformaurbana.cl/wp-content/uploads/2014/12/cerro-renca-1000x668.png'); background-repeat: no-repeat; background-size: cover; background-position: center center;">
      <div class="mask rgba-gradient d-flex justify-content-center align-items-center">
    <div class="container">
      <div class="row">
        <div class="col-12 col-xs-12 col-sm-12 col-md-6 col-lg-6 text-center mb-4 mt-3">
          <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample" id="infoBtn">
          <i class="fas fa-info"></i><span>Información</span>
          </button>
          <!-- Collapsible element -->
        <div class="collapse" id="collapseExample">
            <div class="mt-3 card card-body">
            <p>El plan de salud de la comuna de Renca se basa en la política nacional de fortalecimiento de la Atención Primaria de Salud orientada a mejorar resultados sanitarios, eficiencia, satisfacción usuaria y minimizar el efecto de los determinantes sociales de la salud.</p>

            <p>Esta política define al modelo de atención integral, familiar y comunitario, basado en un enfoque de derechos, como la forma más efectiva de dar respuesta a las necesidades y expectativas en salud de la población.</p>

            <p>Centrado en la persona y su familia, basado en el trabajo en equipos multidisciplinarios a cargo de poblaciones pequeñas, reconoce el valor del vínculo y de sistemas de cuidados a través del tiempo, y entiende el proceso salud enfermedad como un continuo, lo que permite implementar acciones para la promoción de la salud, reforzando la educación en factores protectores y prevención de factores de riesgo, desde un enfoque poblacional, y de esta forma se anticipa al daño.</p>
            </div>
        </div>
        <div class="col-12 col-xs-12 col-sm-12 col-md-6 col-lg-6 text-center">
          <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#darkModalForm">
            <i class="far fa-calendar-alt"></i><br>
            <span>Agendar <br>Hora</span>
        </button>
        </div>
    </div>
</div>

<!-- Modal -->
<div class="modal fade" id="darkModalForm" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog form-dark" role="document">
        <!--Content-->
        <div class="modal-content card card-image" style="background-image: url('assets/img/Cerro-Renca.jpg');">
            <div class="text-white rgba-stylish-strong py-5 px-5 z-depth-4">
                <!--Header-->
                <div class="modal-header text-center pb-4">
                    <h3 class="modal-title w-100 white-text font-weight-bold" id="myModalLabel"><strong>Agenda tu hora</strong></h3>
                    <button type="button" class="close white-text" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <!--Body-->
                <div class="modal-body">
                    <!--Body-->
                    <div class="md-form">
                        <i class="fa fa-user prefix grey-text"></i>
                        <input type="text" id="materialFormContactNameEx" class="form-control">
                        <label for="materialFormContactNameEx">Nombre</label>
                    </div>
                    <!-- Material input email -->
                    <div class="md-form">
                        <i class="fas fa-id-card-alt prefix grey-text"></i>
                        <input type="email" id="materialFormContactEmailEx" class="form-control">
                        <label for="materialFormContactEmailEx">RUT</label>
                    </div>
                     <div class="md-form">
                        <i class="fas fa-phone prefix grey-text"></i>
                        <input type="text" id="materialFormContactNameEx" class="form-control">
                        <label for="materialFormContactNameEx">Teléfono</label>
                    </div>
                    <!-- Material input email -->
                    <div class="md-form">
                        <i class="fas fa-map-marker prefix grey-text"></i>
                        <input type="email" id="materialFormContactEmailEx" class="form-control">
                        <label for="materialFormContactEmailEx">Dirección</label>
                    </div>
                    <label id="selecFecha" class="align-left">Selecciona fecha</label>
                    <div class="md-form">
                <input id="calendar" type="date">
                </div>
                                        <!--Grid column-->
                    <div class="text-center mt-4">
                        <button class="btn btn-outline-secondary" type="submit">Enviar<i class="far fa-paper-plane ml-2"></i></button>
                    </div>
                                    </div>
                                    <!--Grid row-->
                                </div>
                            </div>
                        </div>
                        <!--/.Content-->
                    </div>
</div>`)

    $('#infoBtn').click(function(){
    $('#saludContainer').css('height', "160vh");
    })

    })



})