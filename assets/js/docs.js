$(document).ready(function(){
  $('#btnDocs').click(function(){
    $('#main').hide();
    $('#social').hide();
    $('#salud').hide();
        $('#solicitudes').hide();

    $('#docs').show();
    $('#docs').empty();
    $('#docs').append(`
<section>
<!-- Full Page Intro -->
  <div class="view" style="background-image: url('http://cdn.plataformaurbana.cl/wp-content/uploads/2014/12/cerro-renca-1000x668.png'); background-repeat: no-repeat; background-size: cover; background-position: center center;">
    <!-- Mask & flexbox options-->
    <div class="mask rgba-gradient d-flex justify-content-center align-items-center">
  <div class="container">
    <div class="row">
      <div class="col xs-12 s-12 md-12 lg-12 text-center">
      <!-- Button trigger modal -->
<button type="button" class="btn btn-tramite" id="pagos" data-toggle="modal" data-target="#exampleModal">
    Solicitud de devolución de pagos
</button>
<!-- Modal -->
      <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel"></h5>
            </div>
            <div class="modal-body">
            </div>
              <div class="modal-footer text-justify">
                <button type="button" class="btn" id="close" data-dismiss="modal">Close</button>

              </div>
            </div>
          </div>
        </div>
        <div class="row">
        <div class="col xs-12 s-12 md-12 lg-12 text-center">
<!-- Button trigger modal -->
<button type="button" class="btnbtn-tramite" id="tag" data-toggle="modal" data-target="#exampleModal">
    TAG
</button>
<!-- Modal -->
      <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">documentos patentes</h5>
            </div>
            <div class="modal-body text-justify" id="modalBody">
                ...
            </div>
              <div class="modal-footer">
                <button type="button" class="btn" id="close" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
        </div>
        </div>
        <div class="row text-center">
        <div class="col xs-12 s-12 md-12 lg-12 text-center">
        <!-- Button trigger modal -->
<button type="button" class="btn btn-tramite" id="patente" data-toggle="modal" data-target="#exampleModal">
    <span>documentacion patente</span>
</button>
<!-- Modal -->
      <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">documentos patentes</h5>
            </div>
            <div class="modal-body text-justify">
                ...
            </div>
              <div class="modal-footer">
                <button type="button" class="btn" id="close" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  </div>
</section>
    `)
$(".btn-tramite").click(function(){
  $('.modal-title').empty();
  $('.modal-body').empty();
  data.Tramites.forEach(el => {
console.log(el.nombre)
  if (el.id === $(this).attr("id")){
      console.log(el);
    $('.modal-title').append("<div>" + el.nombre + "</div>");

    if(el.id === "tag" || el.id === "circulacion"){
      $('.modal-body').append("<div id='nuevo'><p>Para vehículos nuevos:</p></div>")
      $('.modal-body').append("<div id='usado'><p>Para vehículos usados:</p></div>")

        el.documentos.nuevo.forEach(nuevo => {
       $('#nuevo').append("<li>" + nuevo + "</li>");
    })
        el.documentos.usado.forEach(usado => {
       $('#usado').append("<li>" + usado + "</li>");
    })
    }else{
      el.documentos.forEach(item => {
       $('.modal-body').append("<li>" + item + "</li>");
    })
    }
  }
})
})

$(".btn-subsidio").click(function(){
  $('.modal-title').empty();
  $('.modal-body').empty();
  data.Subsidios.forEach(el => {
console.log(el.nombre)
  if (el.id === $(this).attr("id")){
      console.log(el);
    $('.modal-title').append("<div>" + el.nombre + "</div>");

      el.documentos.forEach(item => {
       $('.modal-body').append("<li>" + item + "</li>");
    })
    

  }
})

})
  })
  $('#myModal').modal()

});

