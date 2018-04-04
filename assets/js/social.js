$(document).ready(function(){
  $('#socialBtn').click(function(){
    $('#main').hide();
    $('#moreInfo').hide();
    $('#solicitudes').hide();
    $('#social').show();
    $('#social').empty();
    $('#social').append(`
    <div class="view" style="background-image: url('http://cdn.plataformaurbana.cl/wp-content/uploads/2014/12/cerro-renca-1000x668.png'); background-repeat: no-repeat; background-size: cover; background-position: center center;">
      <div class="mask rgba-gradient d-flex justify-content-center align-items-center">
        <section>
          <div class="container">
            <div class="row">
              <div class="col-12 col-xs-12 col-sm-12">
                <h2 class="text-center">Social</h2>
              </div>
            </div>
            <div class="row">
              <div class="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 text-center">
                <button type="button" class="btn capacidadesbtn"><i class="fas fa-wheelchair"></i><br>
                  <span>Capacidades <br>distintas</span>
                </button>          
              </div>
            <div class="col-6 col-xs-2 col-sm-2 col-md-6 col-lg-6 text-center">
              <button type="button" class="btn becasbtn"><i class="fas fa-graduation-cap"></i><br>
                <span>Acceso <br>Becas</span>
              </button>
            </div>
          </div>
          <div class="row">
            <div class="col-6 col-xs-2 col-sm-2 col-md-6 col-lg-6 text-center">
              <button type="button" class="btn subsidiobtn"><i class="fas fa-home"></i><br>
                <span>Subsidio <br>Habitacional</span>
              </button>
            </div>
            <div class="col-6 col-xs-2 col-sm-2 col-md-6 col-lg-6 text-center">
              <button type="button" class="btn socialbtn"><i class="fas fa-users"></i><br>
                <span>Estratif.<br>Social</span>
              </button>
            </div>
          </div>
          <div class="row">
            <div class="col-6 col-xs-2 col-sm-2 col-md-6 col-lg-6 text-center">
              <button type="button" class="btn moneybtn"><i class="fas fa-hand-holding-heart"></i><br>
                <span>Subsidios <br>Monetarios</span>
              </button>
            </div>
            <div class="col-6 col-xs-2 col-sm-2 col-md-6 col-lg-6 text-center">
              <button type="button" class="btn ayudabtn"><i class="fas fa-hands-helping"></i><br>
                <span>Ayudas <br>Sociales</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
    `)
  })
});