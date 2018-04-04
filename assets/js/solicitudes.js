$(document).ready(function(){
  $('#solicitudesBtn').click(function(){
    $('#main').hide();
    $('#social').hide();
    $('#salud').hide();
    $('#estado').hide();
    $('#moreInfo').hide();
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
                    <i class="fa fa-user white-text"></i> Solicitud</h4>
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

                  <input id="autocomplete" class="formAdd" placeholder="Enter your address" type="text">
                  <label for="autocomplete">Dirección</label>
                </div>

                <div class="md-form">
<div class="dropdown">
        <div class="selected_list">
        </div>
        <input type="text" data-value="" value="" placeholder="Select" readonly />
        <div class="options_list">

          <div class="option" data-value="tag">TAG</div>
          <div class="option" data-value="circulacion">Permiso de circulación</div>
          <div class="option" data-value="aseo">Tarifa de aseo</div>
          <div class="option" data-value="patente">Patentes</div>
          <div class="option" data-value="multa">Multas</div>
          <div class="option" data-value="social">Atención Social</div>
          <div class="option" data-value="camion">Sigue a tu camión</div>
          <div class="option" data-value="dimao">Servicios DIMAO</div>
        </div>
      </div>

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


        $('#enviarForm').click(function() {

                   var nombre = $("#formName").val();
                   console.log(nombre)
        var rut = $("#formRut").val();
        var direccion = $(".formAdd").val();
        var correo = $("#formMail").val();
        var telefono = $("#formPhone");
        var tramites = $('.item span').html;

            var database = firebase.database();
            var users = database.ref().child('users');
            var eachUser = users.child(rut);

  })


 $('.dropdown').dropdown({multi_select:true});
});

$.fn.dropdown = function(options) {
  var $input = this.find('input'),
    $options_list = this.find('.options_list'),
    $seleted_list = $options_list.siblings('.selected_list'),
    settings = $.extend({}, {multi_select: false}, options);
    $input.on('click', function(){
    $options_list
      .slideDown("fast");
  });

    $options_list.on('click','.option', function() {
    var $selected_option = $(this),
      data_value = $(this).attr('data-value'),
      data_text = $(this).text().trim();
    $input
      .attr('data-value',data_value)
      .val(data_text);
    if(settings.multi_select) {
      var $item = $('<div class="item" data-value=""><span class="text"></span><span class="remove_item">x</span></div>');
      $item
        .attr('data-value',data_value)
        .find('.text')
        .text(data_text);
      $seleted_list.append($item);
      $selected_option.remove();
      $options_list
        .siblings('input')
        .attr("data-value","")
        .val("");
    }
    $options_list.slideUp("fast");
    });

    $seleted_list.off('click').on('click','.item .remove_item',function() {
      var $clicked_item = $(this).parents('.item'),
        item_text = $clicked_item
                .find('.text')
                .text()
                .trim(),
        item_data_value = $clicked_item.attr('data-value'),
        $item = $('<div class="option" data-value="'+item_data_value+'">'+item_text+'</div>');
      $clicked_item.addClass('removed_item');
      setTimeout(function() {
        $options_list.append($item);
          $clicked_item.remove();
      }, 500);
    });
    return this;
}

$.fn.selectedList = function() {
  var list = [];
  this.find('.selected_list .item').each(function(ind, option) {
    list.push({
      key: $(option).attr('data-value'),
      value: $(option).find('.text').text().trim()
    })
  });
  return list;
};



});

