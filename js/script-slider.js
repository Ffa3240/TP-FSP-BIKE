/* Ejemplo implementando el metodo POST:
async function postData(url = '', data = {}) {
  // Opciones por defecto estan marcadas con un *
  const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}
*/

/* ========================================================================================================*/
/* SLIDER DE NOVEDADES */
/* ========================================================================================================*/
var novedadesSlider;
var efectoSlider;

function inicializarSliderNovedades(efecto) {
     efectoSlider=efecto;
     novedadesSlider = new Swiper('.novedades-slider', {
    
      effect: efecto,
    /*effect: 'coverflow', */
    /*effect: 'cube', */
    /*effect: 'creative', */
    /*effect: 'cards',  */
    /*effect:'fade', */
    /*effect: 'flip', */

    grabCursor: true,
    centeredSlides: true,
    loop: true,
    direction: 'horizontal',
    autoplay: {
      delay: 3000,
      disableOnInteraction: true,
      /*pauseOnMouseEnter: true*/
    },
    slidesPerView: 'auto',
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 110,
        modifier: 2.5,
       },       
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      type: 'bullets',
     },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });

 
}

function cargarNovedades(dataNovedades) {

  /*Agrega las imagenes - Slides*/
  var wNovedades = document.getElementById("idNovedades");
          
  for (obj in dataNovedades) {
    let wClsSoloImg = "soloImg";
 
    let objNovedad = dataNovedades[obj];
    let wTexto1 ="";
    if ( objNovedad["texto01"] != "") {
      wTexto1 = `<div class="novedades-slide-content-texto1 novedades-slide-content-texto">
                    ${objNovedad["texto01"]}
                    </div>`;
      wClsSoloImg = "";
    }
    let wTexto2 ="";
    if ( objNovedad["texto02"] != "") {
      wTexto2 = `<div class="novedades-slide-content-texto2 novedades-slide-content-texto">
                    ${objNovedad["texto02"]}
                    </div>`;
      wClsSoloImg = "";
    }
    let wTexto3 ="";
    if ( objNovedad["texto03"] != "") {
      wTexto3 = `<div class="novedades-slide-content-texto3 novedades-slide-content-texto">
                    ${objNovedad["texto03"]}
                    </div>`;
      wClsSoloImg = "";
    }
    let wTexto4 ="";
    if ( objNovedad["texto04"] != "") {
      wTexto4 = `<div class="novedades-slide-content-texto4 novedades-slide-content-texto">
                    ${objNovedad["texto04"]}
                    </div>`;
      wClsSoloImg = "";
    }
    let wTexto5 ="";
    if ( objNovedad["texto05"] != "") {
      wTexto5 = `<div class="novedades-slide-content-texto5 novedades-slide-content-texto">
                    ${objNovedad["texto05"]}
                    </div>`;
      wClsSoloImg = "";
    }
  
    let wFuncionVentanaModal = (objNovedad.codProducto==0) 
                             ? `abrirVentanaDetalleModal('${objNovedad.imagenNovedad}')` 
                             : `abrirVentanaDetalleModalConObjeto('${objNovedad.codProducto}')`;
    
    let wBoton =  `<div class="novedades-slide-content-buttom"
                        onclick="${wFuncionVentanaModal}">
                        Detalle <i class="fa fa-eye "></i>
                    </div>`;
 
    let wInner = `<div class="swiper-slide novedades-slide">
                        <div class="novedades-slide-img">
                            <img src="${objNovedad.imagenNovedad}" alt="novedades">
                            <div class="novedades-slide-content   ${wClsSoloImg}">
                                ${wTexto1}
                                ${wTexto2}
                                ${wTexto3}
                                ${wTexto4}
                                ${wTexto5}
                                ${wBoton}
                            </div>
                        </div>
                    </div>`  

    wNovedades.innerHTML = wNovedades.innerHTML + wInner;
  };

 
  inicializarNovedades();

};

function inicializarNovedades() {
  
      /* Determina efecto segun ancho del dispositivo */
      let efecto = this.matchMedia("(max-width: 550px)").matches ? "fade" : "coverflow";
      inicializarSliderNovedades(efecto)

      /* ocultar spinner de cargando */
      $("#idNovedadesCargar").addClass("spinnerOcultar");
      
      /* mostrar slider de novedades */
      $("#idNovedades-slider").addClass("sliderMostrar");

}


/* CARGAR INFORMACION DESDE API FALSA */
/* https://mocki.io/fake-json-api */

/*
(async () => {
    let response = await fetch('https://mocki.io/v1/9b3323a6-b4a7-4246-9b0a-f6404dcff803');   
    cargarNovedades(await response.json());
})();
*/

/* CARGAR INFORMACION DESDE PYTHONANYWHERE */
/* https://ffa3240.pythonanywhere.com/novedades */

(async () => {
  let response = await fetch('https://ffa3240.pythonanywhere.com/novedades');   
  cargarNovedades(await response.json());
})();







/* PARA PRUEBA : Carga desde archivo json en carpeta Datos */

/* CON FETCH funsiona con LIVE server de VSC - sino da problema de CORS */
/*(async () => {
    let response = await fetch('../datos/datosNovedades.json');
    cargarNovedades(await response.json());
})();*/

/* OTRA Forma para probar - cargar fijo desde una variable en JS */
/* CARGAR INFORMACION DESDE ARCHIVO JSON EN RUTA DE LA APLICACION */
/*../datos/datosNovedades.json*/


/* ========================================================================================================*/
/* SLIDER DE MARCAS */
/* ========================================================================================================*/

function inicializarSliderMarcas(efecto) {

    var marcasSlider = new Swiper('.marcas-slider', {
         loop: true,
        grabCursor: true,
        slidesPerView: 'auto',
        direction: 'horizontal',              
        autoplay: {
            delay: 500,
            disableOnInteraction: true,
        },       
    });

    $("#idSliderMarcas").addClass("sliderMostrar");
    
}

inicializarSliderMarcas("fade");   


window.addEventListener('resize', cambiarSlider);

function cambiarSlider(){
  if ( this.matchMedia("(max-width: 550px)").matches) {
    if (efectoSlider != 'fade') {
      novedadesSlider.destroy(true,true)
      inicializarNovedades();
    };
  }
  else {
    if (efectoSlider != 'coverflow') {
      novedadesSlider.destroy(true,true)
      inicializarNovedades();
    };
  }
  if ( this.matchMedia("(max-width: 800px)").matches) {
    $("#nav_id").addClass("nav_ocultar");
  }
 
}