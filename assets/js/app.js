var myData = data.Tramites;
console.log(myData)


var nombre = $("#nombre").val();
var rut = $("#rut").val();
var direccion = $("#direccion").val();
var correo = $("#correo").val();
var tramites = [$("tramites"), $("tramites2")]
var database = firebase.database();
var users = database.ref().child('users');
var eachUser = users.child(rut);

var data = {
  nombre: nombre,
  rut: rut,
  correo: correo,
  direccion: direccion,
  tramites : tramites
}
    eachUser.push(data);
    
 $('#myModal').modal(options)

