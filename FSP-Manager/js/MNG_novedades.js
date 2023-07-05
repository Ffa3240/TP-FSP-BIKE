var novedadGeneral;

const { createApp } = Vue;
    
// Crea una instancia de la aplicación Vue
createApp({
  data() {
    /* El código define una instancia de la aplicación Vue. Aquí se especifican los datos utilizados por la aplicación, incluyendo la lista de productos, la URL del backend, indicadores de error y carga, así como los atributos para almacenar los valores del formulario de producto.
     */
    return {
      novedades: [], // Almacena los productos obtenidos del backend
      // url:'http://localhost:5000/productos', // URL local
      url: "https://ffa3240.pythonanywhere.com/novedades", // URL del backend donde se encuentran los productos
      error: false,
      cargando: true,
      // Atributos para el almacenar los valores del formulario
      id: 0,
      codProducto: 0,
      imagenNovedad: "/img/novedades/webp/nov000.webp",
      texto01: "",
      texto02: "",
      texto03: "",
      texto04: "",
      texto05: ""
    };
  },
  methods: {
    fetchData(url) {
      /**El método fetchData realiza una solicitud HTTP utilizando la función fetch a la URL especificada. Luego, los datos de respuesta se convierten en formato JSON y se asignan al arreglo productos. Además, se actualiza la variable cargando para indicar que la carga de productos ha finalizado. En caso de producirse un error, se muestra en la consola y se establece la variable error en true.
       *
       */
      
      fetch(url)
        .then((response) => response.json()) // Convierte la respuesta en formato JSON
        .then((data) => {
          // Asigna los datos de los productos obtenidos al arreglo 'productos'
          this.novedades = data;
          this.cargando = false;
        })
        .catch((err) => {
          console.error(err);
          this.error = true;
        });
    },
    grabar() {
      /* El método grabar se encarga de guardar los datos de un nuevo producto en el servidor. Primero, se crea un objeto producto con los datos ingresados en el formulario. Luego, se configuran las opciones para la solicitud fetch, incluyendo el cuerpo de la solicitud como una cadena JSON, el método HTTP como POST y el encabezado Content-Type como application/json. Después, se realiza la solicitud fetch a la URL especificada utilizando las opciones establecidas. Si la operación se realiza con éxito, se muestra un mensaje de éxito y se redirige al usuario a la página de productos. Si ocurre algún error, se muestra un mensaje de error.
       */
      // Crear un objeto 'producto' con los datos del formulario
      let novedad = {
        codProducto: this.codProducto,
        imagenNovedad: this.imagenNovedad,
        texto01: this.texto01,
        texto02: this.texto02,
        texto03: this.texto03,
        texto04: this.texto04,
        texto05: this.texto05
      };
      
      validarGrabar(novedad)
    
      
/*     novedadGeneral=novedad; 
       if (validar(novedad)) {

          alert("es TRUE")
       
            // Configurar las opciones para la solicitud fetch
            var options = {
              body: JSON.stringify(novedad), // Convertir el objeto a una cadena JSON
              method: "POST", // Establecer el método HTTP como POST
              headers: { "Content-Type": "application/json" },
              redirect: "follow",
            };

            // Realizar una solicitud fetch para guardar el producto en el servidor
            fetch(this.url, options)
              .then(function () {
                novedad={}
                altaConfirmada();
              })  
              .catch((err) => {
                console.error(err);
                alert("Error al Grabar.");
              });
      }
  */   
    },
    buscar() {
      const campoBuscar = document.getElementById("campoBuscar")
      window.location.href = "./MNG_novedades.html/"+ campoBuscar
      alert(campoBuscar.value);
    },
    salir() {
      window.location.href = "./MNG_novedades.html"; // Redirigir a la página de novedades 
    },
  },
  created() {
    this.fetchData(this.url);
  },
}).mount("#app");

function altaConfirmada() {
          MostrarVentanaModalGeneral("Se ha registrado correctamente la novedad.", "80%", "30%", true, "#","rgb(81 113 75)")
          formulario = document.getElementById('frmNuevo');
          formulario.reset();
}

function validar(objNovedad) {
  let resultado = true;

  let strError = `<h6>Errores en la carga de datos:</h6><br>`;
    
    async() => {
      if (objNovedad.codProducto != 0) {
        let url= "https://ffa3240.pythonanywhere.com/productos/" + objNovedad.codProducto
        await fetch(url)
              .then((response) => response.json())
              .then((data) => {
                  if (data.nombre === undefined) {
                    strError = strError + `<p> - Producto Inexistente </p>`;
                    resultado=false;
                  }
                  else {
                    let o = document.getElementById("texto01");
                    o.value=data.nombre;
                  }
              })
              .catch((err) => {
                  resultado=false;
                  strError = strError + `<p> - No pudo recuperar Producto </p>`;
                  console.error(err);
              });
      }
      if (objNovedad.imagenNovedad.trim() == "") {
        strError = strError + `<p> - Falta indicar ruta de imagen</p>`;
        resultado=false;
      }
    }

  if (!resultado) {
    MostrarVentanaModalGeneral(strError, "40%", "40%", false, "#","rgb(177 22 22)")
    alert("es FALSE")
  }

  return resultado;
}


const validarGrabar = async (objNovedad) => {
  let resultado = true;
  let strError = `<h6>Errores en la carga de datos:</h6><br>`;

  if (objNovedad.codProducto != 0) {
    try {
        const url= "https://ffa3240.pythonanywhere.com/productos/" + objNovedad.codProducto
        const response = await fetch(url)
        const data = await response.json()
        if (data.nombre === undefined) {
          strError = strError + `<p> - Producto Inexistente </p>`;
          resultado=false;
        }
        else {
          let t1 = document.getElementById("texto01");
          t1.value=data.nombre;
          let t2 = document.getElementById("texto02");
          t2.value="$"+data.precio;
          let t4 = document.getElementById("texto04");
          t4.value="Rodado: "+data.rodado;
          let t5 = document.getElementById("texto05");
          t5.value="Marca: "+data.marca;
        }
    }
    catch (err) {
      console.log(err)
    }
  }
  if (objNovedad.imagenNovedad.trim() == "") {
    strError = strError + `<p> - Falta indicar ruta de imagen</p>`;
    resultado=false;
  }
  if (!resultado) {
    MostrarVentanaModalGeneral(strError, "40%", "40%", false, "#","rgb(177 22 22)")
  }
  else {
        // Configurar las opciones para la solicitud fetch
        var options = {
          body: JSON.stringify(objNovedad), // Convertir el objeto a una cadena JSON
          method: "POST", // Establecer el método HTTP como POST
          headers: { "Content-Type": "application/json" },
          redirect: "follow",
        };
        
        // Realizar una solicitud fetch para guardar el producto en el servidor
        const urlNov = "https://ffa3240.pythonanywhere.com/novedades"
        fetch(urlNov, options)
          .then(function () {
           altaConfirmada();
          })  
          .catch((err) => {
            console.error(err);
            alert("Error al Grabar.");
          });
  }
}


function recargar() {
  window.location.reload()
}


const validarProducto = async (idProducto) => {
  let resultado = true;
  let strError = `<h6>Errores en la carga de datos:</h6><br>`;

  try {
        const url= "https://ffa3240.pythonanywhere.com/productos/" + idProducto
        const response = await fetch(url)
        const data = await response.json()
        if (data.nombre === undefined) {
          strError = strError + `<p> - Producto Inexistente </p>`;
          resultado=false;
        }
        else {
          let t1 = document.getElementById("texto01");
          t1.value=data.nombre;
          let t2 = document.getElementById("texto02");
          t2.value="$"+data.precio;
          let t4 = document.getElementById("texto04");
          t4.value="Rodado: "+data.rodado;
          let t5 = document.getElementById("texto05");
          t5.value="Marca: "+data.marca;
        }
    }
    catch (err) {
      console.log(err)
    }

    if (!resultado) {
      MostrarVentanaModalGeneral(strError, "40%", "40%", false, "#","rgb(177 22 22)")
    }

}

