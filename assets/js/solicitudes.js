$(document).ready(function(){
  $('#solicitudesBtn').click(function(){
    $('#main').hide();
    $('#social').hide();
    $('#salud').hide();
    console.log('holi')
    $('#solicitudes').empty();
    $('#solicitudes').show();
    $('#solicitudes').append(`

<!-- Main navigation -->
<header>
  <!-- Full Page Intro -->
  <div class="view" style="background-image: url('http://cdn.plataformaurbana.cl/wp-content/uploads/2014/12/cerro-renca-1000x668.png'); background-repeat: no-repeat; background-size: cover; background-position: center center;">
    <!-- Mask & flexbox options-->
    <div class="mask rgba-gradient d-flex justify-content-center align-items-center">
      <!-- Content -->
      <div class="container">
        <!--Grid row-->
        <div class="row mt-5">
          <div class="col-md-6 col-xl-5 mb-4 mx-auto">
            <!--Form-->
            <div class="card wow fadeInRight" data-wow-delay="0.3s">
              <div class="card-body">
                <!--Header-->
                <div class="text-center">
                  <h4 class="white-text">
                    <i class="fa fa-user white-text"></i> Complete Campos</h4>
                  <hr class="hr-light">
                </div>
                <!--Body-->
                <div class="md-form">
                  <i class="fa fa-user prefix white-text active"></i>
                  <input type="text" id="formName" class="white-text form-control">
                  <label for="formName" class="active">Ingrese nombre</label>
                </div>
                <div class="md-form">
                  <i class="fas fa-id-card prefix white-text active"></i>
                  <input type="number" id="formRut" class="white-text form-control">
                  <label for="formRut" class="active"> Rut</label>
                </div>
                <div class="md-form">
                  <i class="fa fa-envelope prefix white-text active"></i>
                  <input type="email" id="formMail" class="white-text form-control">
                  <label for="formMail" class="active">Correo Electrónico</label>
                </div>
                <div class="md-form">
                  <i class="fas fa-phone prefix white-text active"></i>
                  <input type="number" id="formPhone" class="white-text form-control">
                  <label for="formPhone">Fono contacto</label>
                </div>
                <div class="md-form">
                  <i class="fas fa-map-marker prefix white-text active"></i>
                  <input id="autocomplete" placeholder="Enter your address" type="text">
                  <label for="autocomplete">Dirección</label>
                </div>
                <div class="text-center mt-4">
                  <button class="btn btn-indigo" id="enviarForm">Sign up</button>
                </div>
              </div>
            </div>
            <!--/.Form-->
          </div>
          <!--Grid column-->
        </div>
        <!--Grid row-->
      </div>
      <!-- Content -->
    </div>
    <!-- Mask & flexbox options-->
  </div>
  <!-- Full Page Intro -->
</header>
<!-- Main navigation -->
        
            `)
      $('#enviarForm').click(function(){
    console.log('aqui estoy, soy un boton :)')
  })

  })

  
});