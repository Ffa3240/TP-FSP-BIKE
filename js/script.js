
$('#idImgSeparadorAbrirCerrar').click(function () {
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

$('#idImgSeparadorAbrirCerrarProducto').click(function () {
  $('#idSeleccionYdatos').toggleClass('separadorAbrirCerrar');
  if (document.getElementById('idImgAbrirCerrarProducto').classList.contains('fa-angle-up')) {
    document.getElementById('idImgAbrirCerrarProducto').classList.remove('fa-angle-up');
    document.getElementById('idImgAbrirCerrarProducto').classList.add('fa-angle-down');
    $("#idFiltroProductos").addClass("filtroProductoOcultar")
  }
  else {
    document.getElementById('idImgAbrirCerrarProducto').classList.remove('fa-angle-down');
    document.getElementById('idImgAbrirCerrarProducto').classList.add('fa-angle-up');
    $("#idFiltroProductos").removeClass("filtroProductoOcultar")
  }
});


$('#idImgSeparadorAbrirCerrarNovedad').click(function () {
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


$('#idImgSeparadorAbrirCerrarServicio').click(function () {
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

function btnCotizarAbrir() {
  $("#idTituloCotizaAqui").addClass("active");
  $("#idPieCotizaAqui").addClass("active");
  $("#idFrameSeguro").attr("src","https://form.jotform.com/201877665436062");
}

function btnCotizarCerrar() {
  $("#idTituloCotizaAqui").removeClass("active");
  $("#idPieCotizaAqui").removeClass("active");
  $("#idFrameSeguro").attr("src","https://www.youtube.com/embed/Kvx-j7p0spo");
}


function abrirVentanaDetalleModalConObjeto(obj) {
  let objProducto = dataProductos[obj];

  let ventanaContainer = document.getElementById("idVentanaModalContainer");
  let ventanaModal = document.getElementById("ventanaDetalleModal");
  let imagen = document.getElementById("imagenDetalleModal")
  imagen.src = objProducto.imagen;

  let texto = document.getElementById("informacionDetalleModal");
  texto.innerHTML =
    `<div class="detModalTexto detModalTexto1">${objProducto.nombre}</div>
   <div class="detModalTexto detModalTexto2">$ ${objProducto.precio}</div>
   <img id="detModalImgOferta1" src="./img/Ofertas/ahora12.png">
   <img id="detModalImgOferta1" src="./img/Ofertas/3-6-12.png">`
  if (objProducto.categoria == "bicicleta") {
    texto.innerHTML +=
      `<div class="detModalTexto detModalTexto3">Rodado: ${objProducto.rodado}</div>`
  }
  texto.innerHTML +=
    `<div class="detModalTexto detModalTexto4">Marca: ${objProducto.marca}</div>
    <div class="detModalTexto detModalTexto5">Categoria: ${objProducto.categoria}</div>`
  ventanaModal.classList.remove("noTexto");
  ventanaContainer.classList.toggle("ventanaModalMostrar")
 /* ventanaModal.focus(); */
}


function abrirVentanaDetalleModal(srcImagen) {
  let ventanaContainer = document.getElementById("idVentanaModalContainer");
  let ventanaModal = document.getElementById("ventanaDetalleModal");
  let imagen = document.getElementById("imagenDetalleModal")
  imagen.src = srcImagen;
  let texto = document.getElementById("informacionDetalleModal");
  texto.innerHTML ="";
  ventanaContainer.classList.toggle("ventanaModalMostrar")
  ventanaModal.classList.add("noTexto");
/*  ventanaModal.focus(); */
}

function cerrarVentanaModal() {
  let ventana = document.getElementById("idVentanaModalContainer");
  let imagen = document.getElementById("imagenDetalleModal")
  imagen.src = "";
  ventana.classList.toggle("ventanaModalMostrar")
}

/* Para detectar ESC de ventanaModal */
var wVentanaDetalleModal = document.getElementById("ventanaDetalleModal");
wVentanaDetalleModal.addEventListener('keydown', (event) => {
    console.log(event.key)
    console.log(event.code)
    if (event.key == "Escape") {
        cerrarVentanaModal();
    }
  }, false);



/* Limpiar Filtros de seleccion */
function limpiarFiltros() {
  let chkBicicleta = document.getElementById("idChkBicicletas");
  let chkRepuesto = document.getElementById("idChkRepuestos");
  let chkAccesorio = document.getElementById("idChkAccesorios");
  let wSelPrecioDesdeInput = document.getElementById("idSelPrecioDesde");
  let wSelPrecioDesdeValor = document.getElementById("idSelPrecioDesdeValor")
  let wSelPrecioHastaInput = document.getElementById("idSelPrecioHasta");
  let wSelPrecioHastaValor = document.getElementById("idSelPrecioHastaValor")
  let wListaMarcas = document.getElementById("idListaMarcas");

  chkBicicleta.checked=true;
  chkAccesorio.checked=true;
  chkRepuesto.checked=true;
  wSelPrecioDesdeInput.value=0;
  wSelPrecioDesdeValor.innerHTML = "$" + wSelPrecioDesdeInput.value + "m";
  wSelPrecioHastaInput.value=500;
  wSelPrecioHastaValor.innerHTML = "$" + wSelPrecioHastaInput.value + "m";
  wListaMarcas.value="*all";

  cargarProductos(dataProductos);

}

/* Seleccion de Productos */
$('#idFiltroProductos').click(function () {
  $('#idSeleccionProducto').toggleClass('active');
  $('.misProductos').toggleClass('selNoActive');

  $(".filtroAbrirCerrar").each(function (i) {
    this.classList.toggle("active");
  });
});

/* Seleccion por categoria desde filtro de productos */
function selCategoria(e) {
  cargarProductos(dataProductos)
}
/* Seleccion por categoria desde menu */
function selCategoriaMenu(parCat) {

  $("#idSeleccionYdatos").removeClass("separadorAbrirCerrar");
  $("#idFiltroProductos").removeClass("filtroProductoOcultar");

  let chkBicicleta = document.getElementById("idChkBicicletas");
  let chkRepuesto = document.getElementById("idChkRepuestos");
  let chkAccesorio = document.getElementById("idChkAccesorios");
  chkBicicleta.checked = false;
  chkRepuesto.checked = false;
  chkAccesorio.checked = false;
  if (parCat == "B" || parCat == "T") { chkBicicleta.checked = true };
  if (parCat == "R" || parCat == "T") { chkRepuesto.checked = true };
  if (parCat == "A" || parCat == "T") { chkAccesorio.checked = true };
  cargarProductos(dataProductos);
  nav_menu_mostrar_ocultar();
}

/* Seleccion por precio desde filtro de productos */
var wSelPrecioDesdeInput = document.getElementById("idSelPrecioDesde")
wSelPrecioDesdeInput.addEventListener("input", function () {
  if (Number(wSelPrecioDesdeInput.value) > Number(wSelPrecioHastaInput.value)) {
    wSelPrecioDesdeInput.value = wSelPrecioHastaInput.value;
  }
  var wSelPrecioDesdeValor = document.getElementById("idSelPrecioDesdeValor")
  wSelPrecioDesdeValor.innerHTML = "$" + wSelPrecioDesdeInput.value + "m";
  cargarProductos(dataProductos);
}, false)
var wSelPrecioHastaInput = document.getElementById("idSelPrecioHasta")
wSelPrecioHastaInput.addEventListener("input", function () {
  if (Number(wSelPrecioHastaInput.value) < Number(wSelPrecioDesdeInput.value)) {
    wSelPrecioHastaInput.value = wSelPrecioDesdeInput.value;
  }
  var wSelPrecioHastaValor = document.getElementById("idSelPrecioHastaValor")
  wSelPrecioHastaValor.innerHTML = "$" + wSelPrecioHastaInput.value + "m";
  cargarProductos(dataProductos);
}, false)

/* seleccion por marca desde combobox de filtro de productos */
function selMarca(e) {
      cargarProductos(dataProductos) 
}

var wListaMarcas;
function inicializarFiltros() {

    /* Pasa a un array de objetos */
    var objProductos = Object.entries(dataProductos);

    /* --------------------------------------------------------------------------------------------------*/
    /* --- CARGA DE COMBOBOX de Marcas ----*/
    wListaMarcas = document.getElementById("idListaMarcas");

    /* agrupar objetos por marca */
    let wMarcas = objProductos.reduce(function (groups, item) {
      var val = item[1]['marca'];
      groups[val] = groups[val] || { marca: val, cant: 0 };
      groups[val].cant += 1;
      return groups;
    }, {})

      /* agregar las marcas al html de seleccion */
      let wMarcasArray = Object.entries(wMarcas);
      let wInner = "";
      wMarcasArray.forEach(element => {
        wInner = wInner +
          `<option value="${element[1].marca}">
                  <div class="selItemMarca">${element[1].marca}</div>
                  <div class="selItemMarcaCant">(${element[1].cant})</div>
              </option>`
      });
      wListaMarcas.innerHTML += wInner;

      /* --------------------------------------------------------------------------------------------------*/
      /* --- Total por Categoria ----*/

      /* agrupar objetos por marca */
      let wTotCategoria = objProductos.reduce(function (groups, item) {
        var val = item[1]['categoria'];
        groups[val] = groups[val] || { categoria: val, cant: 0 };
        groups[val].cant += 1;
        return groups;
      }, {})
      /* agregar los totales a los chkBox de categoria  */
      $('#spanBicicleta').html('Bicicletas (' + wTotCategoria['bicicleta'].cant + ')');
      $('#spanAccesorio').html('Accesorios (' + wTotCategoria['accesorio'].cant + ')');
      $("#spanRepuesto").html('Repuestos (' + wTotCategoria['repuesto'].cant + ')');

}



/* --------------------------------------------------------------------------------------------------*/
/* CARGA DE PRODUCTOS */

function cargarProductos(data) {

  var wProductos = document.getElementsByClassName("misProductos")[0];
  wProductos.classList.remove("noHayItems");

  /* eliminar del DOM todos los items */
  while (wProductos.firstChild) {
    wProductos.removeChild(wProductos.firstChild);
  };

  /* chk de categorias */
  let chkBicicleta = document.getElementById("idChkBicicletas");
  let chkRepuesto = document.getElementById("idChkRepuestos");
  let chkAccesorio = document.getElementById("idChkAccesorios");

  let marcaSeleccionada = wListaMarcas.value;

  var hayProductosSeleccionados = false;

  for (obj in data) {

    let objProducto = data[obj];

    /* Seleccion de categoria */
    /* ---------------------- */
    if (objProducto.categoria == 'bicicleta' && chkBicicleta.checked ||
      objProducto.categoria == 'repuesto' && chkRepuesto.checked ||
      objProducto.categoria == 'accesorio' && chkAccesorio.checked) {

      wPrecio = 0;
      try {wPrecio = Number(objProducto.precio)}
      catch { }

      /* Seleccion de precio */
      /*-------------------- */
      if (wPrecio >= Number(wSelPrecioDesdeInput.value) * 1000 &&
        wPrecio <= Number(wSelPrecioHastaInput.value) * 1000) {

        /* Seleccion de marca */
        /*------------------- */
        if (wListaMarcas.value == "*all" || objProducto.marca == wListaMarcas.value) {    
          hayProductosSeleccionados=true;
 
          let wClaveProducto = String(obj);

          let wItem = document.createElement("div")
          let wHtml = /*html*/ `  
                <div class="item" onclick="abrirVentanaDetalleModalConObjeto('${wClaveProducto}')">
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
          wItem.innerHTML = wHtml;
          wProductos.appendChild(wItem);
        }
      }
    }
  };

  /* Si no hay productos seleccionados muestra dicha informacion */
  if (!(hayProductosSeleccionados)) {
    let wItem = document.createElement("div");
    wItem.classList.add("noHayItems");
    wItem.innerHTML = /*html*/ `
    <div class="itemNoHaySeleccionado">
        No hay productos para los filtros seleccionados
    </div>`;
    wProductos.appendChild(wItem);
    wProductos.classList.add("noHayItems");
  }


};  

var dataProductos;

function cargaInicialProductos(data) {
    dataProductos=data;
    inicializarFiltros();
    cargarProductos(data)
}

/* PARA PRUEBA: CARGAR INFORMACION DESDE ARCHIVO JSON EN RUTA DE LA APLICACION */
/*try {
  fetch('../datos/datosProductos.json')
    .then(res => res.json())
    .then(data => cargaInicialProductos(data));
}
catch {
  alert("Error al cargar json de Productos ")
}*/

/* CARGAR INFORMACION DESDE API FALSA */
/* https://mocki.io/fake-json-api */
/*
try {
  fetch('https://mocki.io/v1/4eb9e49e-c9c6-489a-9198-1b445eeba798')
    .then(res => res.json())
    .then(data => cargaInicialProductos(data));
}
catch {
  alert("Error al cargar json de Productos ")
}
*/
/* CARGAR INFORMACION ASINCRONICA DESDE API FALSA */
(async () => {
  let response = await fetch('https://mocki.io/v1/4eb9e49e-c9c6-489a-9198-1b445eeba798');   
  cargaInicialProductos(await response.json());
})();



