/*
function nav_menu_mostrar_ocultar() {
    let menu = document.getElementById("nav_id");
    menu.classList.toggle("nav_ocultar");
}
*/
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
  $('#idSeleccionYdatos').toggleClass('separadorAbrirCerrar');
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


$('#idImgSeparadorAbrirCerrarServicio').click(function() {
  $('.misServicios').toggleClass('separadorAbrirCerrar');
    if (document.getElementById('idImgAbrirCerrarServicio').classList.contains('fa-angle-up')) {
      document.getElementById('idImgAbrirCerrarServicio').classList.remove('fa-angle-up');
      document.getElementById('idImgAbrirCerrarServicio').classList.add('fa-angle-down');
    }
    else {
      document.getElementById('idImgAbrirCerrarServicio').classList.remove('fa-angle-down');
      document.getElementById('idImgAbrirCerrarServicio').classList.add('fa-angle-up');
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



/* Seleccion de Productos */
$('#idFiltroProductos').click(function() {
  $('#idSeleccionProducto').toggleClass('active');
  $('.misProductos').toggleClass('selNoActive');
  
  $(".filtroAbrirCerrar").each(function(i) {
      this.classList.toggle("active");
      });
});


/* Carga dinamica de Productos */

var dataProductos = {
  "producto1": {
      "id": 1,
      "imagen": "./img/novedades/00001.webp",
      "categoria": "bicicleta",
      "precio": "1000",
      "marca": "BUG",
      "nombre": "RALLY BUG 21.1",
      "rodado": "21"
  },
  "producto2": {
      "id": 1,
      "imagen": "./img/novedades/00002.webp",
      "categoria": "bicicleta",
      "precio": "1000",
      "marca": "BUG",
      "nombre": "MOUNTAIN BUG 24.1",
      "rodado": "24"
  },
  "producto3": {
    "id": 1,
    "imagen": "./img/novedades/00003.webp",
    "categoria": "bicicleta",
    "precio": "1000",
    "marca": "BUG",
    "nombre": "LADY BUG 21.2 NEGRA",
    "rodado": "21"
},
"producto4": {
  "id": 1,
  "imagen": "./img/novedades/00004.webp",
  "categoria": "repuesto",
  "precio": "1000",
  "marca": "BUG",
  "nombre": "MOUNTAIN BUG 24.2",
  "rodado": "24"
},
"producto5": {
  "id": 1,
  "imagen": "./img/novedades/00005.webp",
  "categoria": "repuesto",
  "precio": "1000",
  "marca": "BUG",
  "nombre": "LADY BUG 21.1",
  "rodado": "21"
},
"producto6": {
  "id": 1,
  "imagen": "./img/novedades/00006.webp",
  "categoria": "repuesto",
  "precio": "1000",
  "marca": "BUG",
  "nombre": "MOUNTAIN BUG 27.2",
  "rodado": "27"
},
"producto7": {
  "id": 1,
  "imagen": "./img/novedades/00001.webp",
  "categoria": "repuesto",
  "precio": "1000",
  "marca": "BUG",
  "nombre": "RALLY BUG 21.1",
  "rodado": "21"
},
"producto8": {
  "id": 1,
  "imagen": "./img/novedades/00002.webp",
  "categoria": "accesorio",
  "precio": "1000",
  "marca": "BUG",
  "nombre": "MOUNTAIN BUG 24.1",
  "rodado": "24"
},
"producto9": {
  "id": 1,
  "imagen": "./img/novedades/00003.webp",
  "categoria": "accesorio",
  "precio": "1000",
  "marca": "BUG",
  "nombre": "LADY BUG 21.2 NEGRA",
  "rodado": "21"
},
"producto10": {
  "id": 1,
  "imagen": "./img/novedades/00004.webp",
  "categoria": "accesorio",
  "precio": "1000",
  "marca": "BUG",
  "nombre": "MOUNTAIN BUG 24.2",
  "rodado": "24"
}

}

function selCategoria(e) {
  cargarProductos(dataProductos)
}

function selCategoriaMenu(parCat) {
  let chkBicicleta = document.getElementById("idChkBicicletas");
  let chkRepuesto = document.getElementById("idChkRepuestos");
  let chkAccesorio = document.getElementById("idChkAccesorios");
  chkBicicleta.checked=false;
  chkRepuesto.checked=false;
  chkAccesorio.checked=false;
  if (parCat=="B" || parCat=="T") {chkBicicleta.checked=true};
  if (parCat=="R" || parCat=="T") {chkRepuesto.checked=true};
  if (parCat=="A" || parCat=="T") {chkAccesorio.checked=true};
  cargarProductos(dataProductos)
}



function cargarProductos(data) {

    var wProductos = document.getElementsByClassName("misProductos")[0];

   /* $('.item').addClass("hide"); */

    /* eliminar del DOM todos los items */
    while (wProductos.firstChild){
      wProductos.removeChild(wProductos.firstChild);
    };
    
    let chkBicicleta = document.getElementById("idChkBicicletas");
    let chkRepuesto = document.getElementById("idChkRepuestos");
    let chkAccesorio = document.getElementById("idChkAccesorios");
    

    for (obj in data) {
  
      let objProducto = data[obj];
      if (objProducto.categoria == 'bicicleta' && chkBicicleta.checked || 
          objProducto.categoria == 'repuesto' && chkRepuesto.checked || 
          objProducto.categoria == 'accesorio' && chkAccesorio.checked) {

              /* agregar contenedor de novedad */
              let wItem = document.createElement("div")
              wItem.innerHTML=`  
                <div class="item" onclick="abrirVentanaDetalleModal('${objProducto.imagen}')">
                  <img src="${objProducto.imagen}" alt="img">
                  <div class="itemNombre">${objProducto.nombre}</div>
                  <div class="itemPrecio">$ ${objProducto.precio}</div>
                  <div>
                    <span class="itemRodado">Rodado: ${objProducto.rodado}</span>
                    <span class="itemMarca">Marca: ${objProducto.marca}</span>
                  </div>
                  <div>
                    <span class="itemCategoria">Categoria: ${objProducto.categoria}</span>
                    <i class="fa fa-eye itemVer"></i>
                  </div>
                </div>
              `
              wProductos.appendChild(wItem);
      }
    };
  
 /* $('.item').addClass("show"); */

  };

  cargarProductos(dataProductos);