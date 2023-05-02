
function nav_menu_mostrar_ocultar() {
    let menu = document.getElementById("nav_id");
    menu.classList.toggle("nav_ocultar");
}

$('#idImgSeparadorAbrirCerrar').click(function() {
    $('.misMarcas').toggleClass('separadorAbrirCerrar');
      if (document.getElementById('idImgAbrirCerrar').classList.contains('fa-angle-up')) {
        document.getElementById('idImgAbrirCerrar').classList.remove('fa-angle-up');
        document.getElementById('idImgAbrirCerrar').classList.add('fa-angle-down');
      }
      else {
        document.getElementById('idImgAbrirCerrar').classList.remove('fa-angle-down');
        document.getElementById('idImgAbrirCerrar').classList.add('fa-angle-up');
      }
});

$('#idImgSeparadorAbrirCerrarProducto').click(function() {
  $('.misProductos').toggleClass('separadorAbrirCerrar');
    if (document.getElementById('idImgAbrirCerrarProducto').classList.contains('fa-angle-up')) {
      document.getElementById('idImgAbrirCerrarProducto').classList.remove('fa-angle-up');
      document.getElementById('idImgAbrirCerrarProducto').classList.add('fa-angle-down');
    }
    else {
      document.getElementById('idImgAbrirCerrarProducto').classList.remove('fa-angle-down');
      document.getElementById('idImgAbrirCerrarProducto').classList.add('fa-angle-up');
    }
});


$('#idImgSeparadorAbrirCerrarNovedad').click(function() {
  $('.novedades-slider').toggleClass('separadorAbrirCerrar');
    if (document.getElementById('idImgAbrirCerrarNovedad').classList.contains('fa-angle-up')) {
      document.getElementById('idImgAbrirCerrarNovedad').classList.remove('fa-angle-up');
      document.getElementById('idImgAbrirCerrarNovedad').classList.add('fa-angle-down');
    }
    else {
      document.getElementById('idImgAbrirCerrarNovedad').classList.remove('fa-angle-down');
      document.getElementById('idImgAbrirCerrarNovedad').classList.add('fa-angle-up');
    }
});

function abrirVentanaDetalleModal(srcImagen) {
  let ventana = document.getElementById("ventanaDetalleModal");
  let imagen = document.getElementById("imagenDetalleModal")
  imagen.src = srcImagen;
  ventana.classList.toggle("ventanaModalMostrar")
}

function cerrarVentanaModal() {
  let ventana = document.getElementById("ventanaDetalleModal");
  let imagen = document.getElementById("imagenDetalleModal")
  imagen.src = "";
  ventana.classList.toggle("ventanaModalMostrar")
}