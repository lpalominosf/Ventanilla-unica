<<<<<<< HEAD
var myData = data.Tramites;
console.log(myData)
var dataa = data.Subsidios;
console.log(dataa)

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
=======

>>>>>>> 74a87fc750e300c1918e8a83a9ff269f2386837d
