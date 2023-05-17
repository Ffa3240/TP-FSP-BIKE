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
  cargarProductos(dataProductos);
  nav_menu_mostrar_ocultar();
}


/* Seleccion por precio */
var wSelPrecioDesdeInput = document.getElementById("idSelPrecioDesde")
wSelPrecioDesdeInput.addEventListener("input", function() {
    if (Number(wSelPrecioDesdeInput.value) > Number(wSelPrecioHastaInput.value)) {
      wSelPrecioDesdeInput.value = wSelPrecioHastaInput.value;
    }
    var wSelPrecioDesdeValor = document.getElementById("idSelPrecioDesdeValor")
      wSelPrecioDesdeValor.innerHTML = "$" + wSelPrecioDesdeInput.value + "m";
      cargarProductos(dataProductos);
    }, false)
var wSelPrecioHastaInput = document.getElementById("idSelPrecioHasta")
wSelPrecioHastaInput.addEventListener("input", function() {
    if (Number(wSelPrecioHastaInput.value) < Number(wSelPrecioDesdeInput.value)) {
      wSelPrecioHastaInput.value = wSelPrecioDesdeInput.value;
    }
    var wSelPrecioHastaValor = document.getElementById("idSelPrecioHastaValor")
      wSelPrecioHastaValor.innerHTML = "$" + wSelPrecioHastaInput.value + "m";
      cargarProductos(dataProductos);
    }, false)

function cargarMarcas(dataProductos) {
 /* var wMarcas1 = dataProductos.map(function (obj, index, array) {
    return dataProductos[obj].marca; 
  }); */

    /*var wMarcas2 = [];
    dataProductos.forEach(function (obj) {
        wMarcas2.push(dataProductos[obj].name); 
    }); */

    /*const array1 = []
    array1 = dataProductos.entries();
    const array2 = []
    array2 = dataProductos.key();*/
    
    /*var arr1 = dataProductos.map(function(o) {
      return Object.keys(o).reduce(function(dataProductos,key) {
        return dataProductos.concat([key, o[key]]);
      },[]);
    });
    */

    /*const arr = dataProductos.map(elemento => Object.entries(elemento));
    var wMarcas3 = [];
    for (obj in dataProductos) { 
       wMarcas3.push(dataProductos[obj].marca);
    }*/

}
cargarMarcas(dataProductos);

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

            wPrecio=0;
            try {
              wPrecio = Number(objProducto.precio)
            }
            catch {}

            if (wPrecio >= Number(wSelPrecioDesdeInput.value)*1000 && 
                wPrecio <= Number(wSelPrecioHastaInput.value)*1000 ) {

               
              /* agregar contenedor de novedad */
              let wItem = document.createElement("div")
              let wHtml = /*html*/ `  
                <div class="item" onclick="abrirVentanaDetalleModal('${objProducto.imagen}')">
                  <img src="${objProducto.imagen}" alt="img">
                  <div class="itemNombre">${objProducto.nombre}</div>
                  <div class="itemPrecio">$ ${objProducto.precio}</div>
                  `
              if (objProducto.categoria == 'bicicleta') {
                  wHtml = wHtml + /*html*/ `
                    <div class="itemRodadoMarca">
                      <span class="itemRodado">Rodado: ${objProducto.rodado}</span>
                      <span class="itemMarca">Marca: ${objProducto.marca}</span>
                    </div> `
              } 
              wHtml = wHtml + /*html*/ `
                  <div class="itemCategoriaVer">
                    <div class="itemCategoria">Categoria: ${objProducto.categoria}</div> 
                  </div>
                  <div class="itemVer">
                      <i class="fa fa-eye "></i>
                  </div>
                </div>
              `
              wItem.innerHTML=wHtml;
              wProductos.appendChild(wItem);
            }
      }
    };
  
 /* $('.item').addClass("show"); */

  };

  cargarProductos(dataProductos);