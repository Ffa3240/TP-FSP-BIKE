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

    /*breakpoints: {
        320: {
        },
    }, */

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

/*
  var wNovedadesSection = document.getElementById("idNovedades-section");
  let wDiv1 = document.createElement("div")
  wDiv1.classList.add("swiper");
  wDiv1.classList.add("novedades-slider");
  wDiv1.setAttribute("id", "idNovedades-slider");
  wNovedadesSection.appendChild(wDiv1);

  var wNovedadesSlider = document.getElementById("idNovedades-slider");
  let wDiv2 = document.createElement("div")
  wDiv2.classList.add("swiper-wrapper");
  wDiv2.setAttribute("id", "idNovedades");
  wNovedadesSlider.appendChild(wDiv2);
*/

  /*Agrega las imagenes - Slides*/
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

  };

  /*Agrega los Controles */
    /*
    wNovedadesSlider.innerHTML = wNovedades.innerHTML + 
        `<div class="novedades-slider-control">          
             <div class="swiper-button-prev slider-arrow"></div> 
             <div class="swiper-pagination"></div>
             <div class="swiper-button-next slider-arrow"></div>
         </div>`;
    */
    
   /* inicializarSlide("coverflow"); */
   
};


/*fetch('../datos/datos.json')*/
/*fetch('http://127.0.0.1:5500/TP-FSP-BIKE/datos/datos.json')
.then(res => res.json()) 
.then(data => cargarNovedades(data));*/

var data = {
  "novedad1": {
      "id": 1,
      "imagen": "./img/novedades/00001.webp",
      "texto01": {
          "texto": "RALLY BUG 21.1",
          "atributos": [
              "color=black",
              "font-size=1rem",
              "width=100%",
              "text-align=center"
          ]
      },
      "texto02": {
          "texto": "texto02",
          "atributos": [
              "color=black",
              "font-size=1rem",
              "width=100%",
              "text-align=center"
          ]
      },
      "texto03": {
          "texto": "texto03",
          "atributos": [
              "color=black",
              "font-size=1rem",
              "width=100%",
              "text-align=center"
          ]
      },
      "texto04": {
          "texto": "texto04",
          "atributos": [
              "color=black",
              "font-size=1rem",
              "width=100%",
              "text-align=center"
          ]
      },
      "texto05": {
          "texto": "texto05",
          "atributos": [
              "color=black",
              "font-size=1rem",
              "width=100%",
              "text-align=center"
          ]
      }
  },
  "novedad2": {
      "id": 2,
      "imagen": "./img/novedades/00002.webp",
      "texto01": {
          "texto": "MOUNTAIN BUG 24.1",
          "atributos": [
              "color=black",
              "font-size=1rem",
              "width=100%",
              "text-align=center"
          ]
      },
      "texto02": {
          "texto": "texto02",
          "atributos": [
              "color=black",
              "font-size=1rem",
              "width=100%",
              "text-align=center"
          ]
      },
      "texto03": {
          "texto": "texto03",
          "atributos": [
              "color=black",
              "font-size=1rem",
              "width=100%",
              "text-align=center"
          ]
      },
      "texto04": {
          "texto": "texto04",
          "atributos": [
              "color=black",
              "font-size=1rem",
              "width=100%",
              "text-align=center"
          ]
      },
      "texto05": {
          "texto": "texto05",
          "atributos": [
              "color=black",
              "font-size=1rem",
              "width=100%",
              "text-align=center"
          ]
      }
  },
  "novedad3": {
      "id": 3,
      "imagen": "./img/novedades/00003.webp",
      "texto01": {
          "texto": "LADY BUG 21.2 NEGRA",
          "atributos": [
              "color=black",
              "font-size=1rem",
              "width=100%",
              "text-align=center"
          ]
      },
      "texto02": {
          "texto": "texto02",
          "atributos": [
              "color=black",
              "font-size=1rem",
              "width=100%",
              "text-align=center"
          ]
      },
      "texto03": {
          "texto": "texto03",
          "atributos": [
              "color=black",
              "font-size=1rem",
              "width=100%",
              "text-align=center"
          ]
      },
      "texto04": {
          "texto": "texto04",
          "atributos": [
              "color=black",
              "font-size=1rem",
              "width=100%",
              "text-align=center"
          ]
      },
      "texto05": {
          "texto": "texto05",
          "atributos": [
              "color=black",
              "font-size=1rem",
              "width=100%",
              "text-align=center"
          ]
      }
  },
  "novedad4": {
      "id": 4,
      "imagen": "./img/novedades/00004.webp",
      "texto01": {
          "texto": "MOUNTAIN BUG 24.2",
          "atributos": [
              "color=black",
              "font-size=1rem",
              "width=100%",
              "text-align=center"
          ]
      },
      "texto02": {
          "texto": "texto02",
          "atributos": [
              "color=black",
              "font-size=1rem",
              "width=100%",
              "text-align=center"
          ]
      },
      "texto03": {
          "texto": "texto03",
          "atributos": [
              "color=black",
              "font-size=1rem",
              "width=100%",
              "text-align=center"
          ]
      },
      "texto04": {
          "texto": "texto04",
          "atributos": [
              "color=black",
              "font-size=1rem",
              "width=100%",
              "text-align=center"
          ]
      },
      "texto05": {
          "texto": "texto05",
          "atributos": [
              "color=black",
              "font-size=1rem",
              "width=100%",
              "text-align=center"
          ]
      }
  },
  "novedad5": {
      "id": 5,
      "imagen": "./img/novedades/00005.webp",
      "texto01": {
          "texto": "LADY BUG 21.1",
          "atributos": [
              "color=black",
              "font-size=1rem",
              "width=100%",
              "text-align=center"
          ]
      },
      "texto02": {
          "texto": "texto02",
          "atributos": [
              "color=black",
              "font-size=1rem",
              "width=100%",
              "text-align=center"
          ]
      },
      "texto03": {
          "texto": "texto03",
          "atributos": [
              "color=black",
              "font-size=1rem",
              "width=100%",
              "text-align=center"
          ]
      },
      "texto04": {
          "texto": "texto04",
          "atributos": [
              "color=black",
              "font-size=1rem",
              "width=100%",
              "text-align=center"
          ]
      },
      "texto05": {
          "texto": "texto05",
          "atributos": [
              "color=black",
              "font-size=1rem",
              "width=100%",
              "text-align=center"
          ]
      }
  },
  "novedad6": {
      "id": 6,
      "imagen": "./img/novedades/00006.webp",
      "texto01": {
          "texto": "MOUNTAIN BUG 27.2",
          "atributos": [
              "color=black",
              "font-size=1rem",
              "width=100%",
              "text-align=center"
          ]
      },
      "texto02": {
          "texto": "texto02",
          "atributos": [
              "color=black",
              "font-size=1rem",
              "width=100%",
              "text-align=center"
          ]
      },
      "texto03": {
          "texto": "texto03",
          "atributos": [
              "color=black",
              "font-size=1rem",
              "width=100%",
              "text-align=center"
          ]
      },
      "texto04": {
          "texto": "texto04",
          "atributos": [
              "color=black",
              "font-size=1rem",
              "width=100%",
              "text-align=center"
          ]
      },
      "texto05": {
          "texto": "texto05",
          "atributos": [
              "color=black",
              "font-size=1rem",
              "width=100%",
              "text-align=center"
          ]
      }
  },
  "novedad7": {
      "id": 7,
      "imagen": "./img/novedades/00006.webp",
      "texto01": {
          "texto": "MOUNTAIN BUG 27.2",
          "atributos": [
              "color=black",
              "font-size=1rem",
              "width=100%",
              "text-align=center"
          ]
      },
      "texto02": {
          "texto": "texto02",
          "atributos": [
              "color=black",
              "font-size=1rem",
              "width=100%",
              "text-align=center"
          ]
      },
      "texto03": {
          "texto": "texto03",
          "atributos": [
              "color=black",
              "font-size=1rem",
              "width=100%",
              "text-align=center"
          ]
      },
      "texto04": {
          "texto": "texto04",
          "atributos": [
              "color=black",
              "font-size=1rem",
              "width=100%",
              "text-align=center"
          ]
      },
      "texto05": {
          "texto": "texto05",
          "atributos": [
              "color=black",
              "font-size=1rem",
              "width=100%",
              "text-align=center"
          ]
      }
  }
  
} ;
cargarNovedades(data);

$(window).on("load", function() {
  if (this.matchMedia("(max-width: 550px)").matches) {
    inicializarSlide("fade");   
  } 
  else {
    inicializarSlide("coverflow");
  }
});


function inicializarSlideMarcas(efecto) {

    var marcasSlider = new Swiper('.marcas-slider', {
     /*   slidesPerView: 1,
        spaceBetween: 2,  
        breakpoints: {
            320: {
                slidesPerView: 2,
                spaceBetween: 3,            
            },
            480: {
                slidesPerView: 3,
                spaceBetween: 5,            
            },
            640: {
                slidesPerView: 8,
                spaceBetween: 15,
             },
        },  */
        loop: true,
        grabCursor: true,
        slidesPerView: 'auto',
        direction: 'horizontal',              
        autoplay: {
            delay: 500,
            disableOnInteraction: true,
           /* pauseOnMouseEnter: true,*/
        },
      /*  pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },*/
       



    });
   
}



inicializarSlideMarcas("fade");   