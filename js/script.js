
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



function abrirVentanaDetalleModalConObjeto(obj) {
  let objProducto = dataProductos[obj];

  let ventana = document.getElementById("idVentanaModalContainer");

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

  ventana.classList.toggle("ventanaModalMostrar")
}


function abrirVentanaDetalleModal(srcImagen) {
  let objProducto = dataProductos["producto1"];
  let ventana = document.getElementById("idVentanaModalContainer");
  let imagen = document.getElementById("imagenDetalleModal")
  imagen.src = srcImagen;
  ventana.classList.toggle("ventanaModalMostrar")
}

function cerrarVentanaModal() {
  let ventana = document.getElementById("idVentanaModalContainer");
  let imagen = document.getElementById("imagenDetalleModal")
  imagen.src = "";
  ventana.classList.toggle("ventanaModalMostrar")
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


/* --------------------------------------------------------------------------------------------------*/
/* --- CARGA DE COMBOBOX de Marcas ----*/
var wListaMarcas = document.getElementById("idListaMarcas");

function cargarMarcas(dataProductos) {

  let x = Object.entries(dataProductos);

  /* agrupar objetos por marca */
  let wMarcas = x.reduce(function (groups, item) {
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
}
cargarMarcas(dataProductos);


/* --------------------------------------------------------------------------------------------------*/
/* CARGA DE PRODUCTOS */

function cargarProductos(data) {

  var wProductos = document.getElementsByClassName("misProductos")[0];

  /* eliminar del DOM todos los items */
  while (wProductos.firstChild) {
    wProductos.removeChild(wProductos.firstChild);
  };

  /* chk de categorias */
  let chkBicicleta = document.getElementById("idChkBicicletas");
  let chkRepuesto = document.getElementById("idChkRepuestos");
  let chkAccesorio = document.getElementById("idChkAccesorios");

  let marcaSeleccionada = wListaMarcas.value;

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


};


/* CARGAR INFORMACION DESDE ARCHIVO JSON EN RUTA DE LA APLICACION */
/*../datos/datosProductos.json*/

/* CARGAR INFORMACION DESDE API FALSA */
/* https://mocki.io/fake-json-api */
try {
  fetch('https://mocki.io/v1/dcd2a0d1-f28b-43c3-8ad6-27fd75cfed12')
    .then(res => res.json())
    .then(data => cargarProductos(data));
}
catch {
  alert("Error al cargar json de Productos ")
}





