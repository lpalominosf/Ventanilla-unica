$(document).ready(function(){
  $('#socialBtn').click(function(){
    $('#main').empty();
    $('#main').append(`
      <section>
    <div class="container">
      <div class="row">
        <div class="col-12 col-xs-12 col-sm-12">
          <h1 class="text-center">Social</h1>
        </div>
      </div>
      <div class="row">
        <div class="col-6 col-xs-2 col-sm-2 col-md-6 col-lg-6  text-center">
          <button type="button" class="btn btn-primary"><i class="fas fa-wheelchair"></i></button>
          <p href="">Discapacidad</p>
        </div>
        <div class="col-6 col-xs-2 col-sm-2 col-md-6 col-lg-6 text-center">
          <button type="button" class="btn btn-primary"><i class="fas fa-graduation-cap"></i></button>
          <p href="">Becas</p>
        </div>
      </div>
      <div class="row">
        <div class="col-6 col-xs-2 col-sm-2 col-md-6 col-lg-6 text-center">
          <button type="button" class="btn btn-primary"><i class="fas fa-home"></i></button>
          <p href="">Subsidios Habitacionales</p>
        </div>
        <div class="col-6 col-xs-2 col-sm-2 col-md-6 col-lg-6 text-center">
          <button type="button" class="btn btn-primary"><i class="fas fa-users"></i></button>
          <p href="">Estratificación Social</p>
        </div>
      </div>
      <div class="row">
        <div class="col-6 col-xs-2 col-sm-2 col-md-6 col-lg-6 text-center">
          <button type="button" class="btn btn-primary"><i class="fas fa-hand-holding-heart"></i></button>
          <p href="">Subsidios Monetarios y Ayudas Sociales</p>
        </div>
        <div class="col-6 col-xs-2 col-sm-2 col-md-6 col-lg-6 text-center">
          <button type="button" class="btn btn-primary"><i class="fas fa-hands-helping"></i></button>
          <p href="">Ayudas Sociales en Especies o Servicios</p>
        </div>
      </div>
    </div>
  </section>
    `)
  })
});