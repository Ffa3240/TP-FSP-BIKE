/*
// Ejemplo implementando el metodo POST:
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

postData("../img/novedades/datos.json", { answer: 42 })
  .then(data => {
    console.log(data); // JSON data parsed by `data.json()` call
  });
*/


function inicializarSlide(efecto) {

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
      /*  slideShadows: true, */
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      /*type: 'fraction', */
      /*type: 'progressbar', */
      type: 'bullets',
      /* type: 'custom', */
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });

}


function cargarNovedades(data) {

  var wNovedades = document.getElementById("idNovedades");

  for (obj in data) {

    let objNovedad = data[obj];

    /* agregar contenedor de novedad */
    let wNovedad = document.createElement("div")
    wNovedad.classList.add("swiper-slide");
    wNovedad.classList.add("novedades-slide");

    /* crear contenedor de imagen */
    let wNovedadImagenDiv = document.createElement('div');
    wNovedadImagenDiv.classList.add("novedades-slide-img");

        let wNovedadImagen = document.createElement('img');
        wNovedadImagen.setAttribute("src", objNovedad.imagen);
        wNovedadImagen.setAttribute("alt", "novedades");

        wNovedadImagenDiv.appendChild(wNovedadImagen);

   /* crear contenedor de texto */
    let wNovedadTextos = document.createElement("div");
    wNovedadTextos.classList.add("novedades-slide-content");

      /* crear contenedor de texto 1 */
      try {
          let wNovedadTexto01 = document.createElement("div");
          wNovedadTexto01.classList.add("novedades-slide-content-texto1");
          wNovedadTexto01.innerHTML= objNovedad["texto01"]["texto"];
          wNovedadTextos.appendChild(wNovedadTexto01);
      }
      catch {}
    
      /* crear contenedor de texto 2 */
      try {
        let wNovedadTexto02 = document.createElement("div");
        wNovedadTexto02.classList.add("novedades-slide-content-texto2");
        wNovedadTexto02.innerHTML= objNovedad["texto02"]["texto"];
        wNovedadTextos.appendChild(wNovedadTexto02);
      }
      catch {}
    
      /* crear contenedor de texto 3 */
      try {
        let wNovedadTexto03 = document.createElement("div");
        wNovedadTexto03.classList.add("novedades-slide-content-texto3");
        wNovedadTexto03.innerHTML= objNovedad["texto03"]["texto"];
        wNovedadTextos.appendChild(wNovedadTexto03);
      }
      catch {}

      /* crear contenedor de texto 4 */
      try {
        let wNovedadTexto04 = document.createElement("div");
        wNovedadTexto04.classList.add("novedades-slide-content-texto4");
        wNovedadTexto04.innerHTML= objNovedad["texto04"]["texto"];
        wNovedadTextos.appendChild(wNovedadTexto04);
      }
      catch {}


      /* crear contenedor de texto 5 */
      try {
        let wNovedadTexto05 = document.createElement("div");
        wNovedadTexto05.classList.add("novedades-slide-content-texto5");
        wNovedadTexto05.innerHTML= objNovedad["texto05"]["texto"];
        wNovedadTextos.appendChild(wNovedadTexto04);
      }
      catch {}


      /* crear contenedor de boton ver detalle */
      let wNovedadVerDetalle = document.createElement("div");
     /* wNovedadVerDetalle.setAttribute("onclick",  "abrirVentanaDetalleModal("+objNovedad.imagen+")");*/
      wNovedadVerDetalle.setAttribute("onclick",  "abrirVentanaDetalleModal('"+objNovedad.imagen+"')"); 
     
      wNovedadVerDetalle.classList.add("novedades-slide-content-buttom");
      wNovedadVerDetalle.innerHTML= "Ver Detalle";
      wNovedadTextos.appendChild(wNovedadVerDetalle);

    wNovedad.appendChild(wNovedadImagenDiv);
    wNovedad.appendChild(wNovedadTextos);

    wNovedades.appendChild(wNovedad);

  }

 /* inicializarSlide("coverflow");*/
}


/*fetch('../datos/datos.json')*/
fetch('http://127.0.0.1:5500/TP-FSP-BIKE/datos/datos.json')
.then(res => res.json()) 
.then(data => cargarNovedades(data));


$(window).on("load", function() {
  if (this.matchMedia("(max-width: 550px)").matches) {
    inicializarSlide("fade");   
  } 
  else {
    inicializarSlide("coverflow");
  }
});
