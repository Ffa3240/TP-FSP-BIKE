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

function inicializarSliderNovedades(efecto) {

     var novedadesSlider = new Swiper('.novedades-slider', {
    
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

    let objNovedad = dataNovedades[obj];
  
    let wTexto1 = `<div class="novedades-slide-content-texto1">
                    ${objNovedad["texto01"]["texto"]}
                    </div>`;
    let wTexto2 = `<div class="novedades-slide-content-texto2">
                    ${objNovedad["texto02"]["texto"]}
                    </div>`;
    let wTexto3 = `<div class="novedades-slide-content-texto3">
                    ${objNovedad["texto03"]["texto"]}
                    </div>`;
    let wTexto4 = `<div class="novedades-slide-content-texto4">
                    ${objNovedad["texto04"]["texto"]}
                    </div>`;
    let wTexto5 = `<div class="novedades-slide-content-texto5">
                    ${objNovedad["texto05"]["texto"]}
                    </div>`;
            
    let wBoton =  `<div class="novedades-slide-content-buttom"
                        onclick="abrirVentanaDetalleModal('${objNovedad.imagen}')">
                        Detalle <i class="fa fa-eye "></i>
                    </div>`;
 
    let wInner = `<div class="swiper-slide novedades-slide">
                        <div class="novedades-slide-img">
                            <img src="${objNovedad.imagen}" alt="novedades">
                            <div class="novedades-slide-content">
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

/* CARGAR INFORMACION DESDE ARCHIVO JSON EN RUTA DE LA APLICACION */
/*../datos/datosNovedades.json*/

/* CARGAR INFORMACION DESDE API FALSA */
/* https://mocki.io/fake-json-api */
   
(async () => {
    let response = await fetch('https://mocki.io/v1/ba183bf7-2da1-4222-9d0e-c351f5be78d5');
    cargarNovedades(await response.json());
})();


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