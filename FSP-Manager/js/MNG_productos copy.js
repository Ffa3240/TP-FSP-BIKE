
var urlPagina = location.href
const urlParams = new URLSearchParams(location.search);
var parNombre = urlParams.get('parNombre');
var wNombre = document.getElementById("campoBuscar")
wNombre.value=parNombre

var categoria = urlParams.get('categoria');

urlInicial = "https://ffa3240.pythonanywhere.com/productos"
url = urlInicial + location.search

const { createApp } = Vue;

function cargar() {

// Crea una instancia de la aplicación Vue
createApp({
  data() {
    /* El código define una instancia de la aplicación Vue. Aquí se especifican los datos utilizados por la aplicación, incluyendo la lista de productos, la URL del backend, indicadores de error y carga, así como los atributos para almacenar los valores del formulario de producto.
     */
    return {
      productos: [], // Almacena los productos obtenidos del backend
      // url:'http://localhost:5000/productos', // URL local
      //url: "https://ffa3240.pythonanywhere.com/productos", // URL del backend donde se encuentran los productos
      error: false,
      cargando: true,
      // Atributos para el almacenar los valores del formulario
      id: 0,
      nombre: wNombre.value,
      imagen: "/img/productos/bicicletas/bic000.webp",
      stock: 0,
      precio: 0,
      categoria: "",
      marca: "",
      rodado: "",
    };
  },
  methods: {
    //fetchData(url) {
    fetchData() {
        /**El método fetchData realiza una solicitud HTTP utilizando la función fetch a la URL especificada. Luego, los datos de respuesta se convierten en formato JSON y se asignan al arreglo productos. Además, se actualiza la variable cargando para indicar que la carga de productos ha finalizado. En caso de producirse un error, se muestra en la consola y se establece la variable error en true.
       *
       */
      
      fetch(url)
        .then((response) => response.json()) // Convierte la respuesta en formato JSON
        .then((data) => {
          // Asigna los datos de los productos obtenidos al arreglo 'productos'
          this.productos = data;
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
      let producto = {
        nombre: this.nombre,
        precio: this.precio,
        stock: this.stock,
        imagen: this.imagen,
        categoria: this.categoria,
        marca: this.marca,
        rodado: this.rodado
      };

      if (validar(producto)) {
       
            // Configurar las opciones para la solicitud fetch
            var options = {
              body: JSON.stringify(producto), // Convertir el objeto a una cadena JSON
              method: "POST", // Establecer el método HTTP como POST
              headers: { "Content-Type": "application/json" },
              redirect: "follow",
            };

            // Realizar una solicitud fetch para guardar el producto en el servidor
            fetch(this.urlInicial, options)
              .then(function () {
                producto={}
                altaConfirmada();
              })  
              .catch((err) => {
                console.error(err);
                alert("Error al Grabar.");
              });
      }
     
    },
    salir() {
      window.location.href = "./MNG_productos.html"; // Redirigir a la página de productos 
      //window.location.href = urlPagina; // Redirigir a la página de productos 

    },
  },
  created() {
    this.fetchData(this.url);
  },
}).mount("#app");
}

function altaConfirmada() {
          MostrarVentanaModalGeneral("Se ha registrado correctamente el producto.", "80%", "30%", true, "#","rgb(81 113 75)")
          formulario = document.getElementById('frmNuevo');
          formulario.reset();
}

function validar(objProducto) {
  let resultado = true;

  let strError = `<h6>Errores en la carga de datos:</h6><br>`;

  if (objProducto.nombre.trim() == "") {
    strError = strError + `<p> - Falta indicar nombre</p>`;
    resultado=false;
  }
  if (objProducto.precio == 0) {
    strError = strError + `<p> - Falta indicar precio</p>`;
    resultado=false;
  }
  if (objProducto.imagen.trim() == "") {
    strError = strError + `<p> - Falta indicar ruta de imagen</p>`;
    resultado=false;
  }
  if (! ["bicicleta", "accesorio", "repuesto"].includes(objProducto.categoria)) {
    strError = strError + `<p> - Categoria de producto, no válida</p>`;
    resultado=false;
  }
  if (objProducto.marca.trim() == "") {
    strError = strError + `<p> - Falta indicar marca</p>`;
    resultado=false;
  }
  if (objProducto.categoria == "bicicleta" && objProducto.rodado.trim()=="") {
    strError = strError + `<p> - Falta indicar rodado</p>`;
    resultado=false;
  }
  if (objProducto.categoria != "bicicleta" && objProducto.rodado.trim()!="") {
    strError = strError + `<p> - No debe indicar rodado, para categoria distinta de bicicleta.</p>`;
    resultado=false;
  }

  if (!resultado) {
    MostrarVentanaModalGeneral(strError, "40%", "40%", false, "#","rgb(177 22 22)")
  }

  return resultado;
}

/*function buscar() {
  alert('BUSCAR')
}*/

function buscar() {
  const wNombre = document.getElementById("campoBuscar")
  urlPagina = location.pathname + "?parNombre=" + wNombre.value
  alert("ir a: " + urlPagina);
  window.location.href = urlPagina
}

function campoBuscarChange() {
  $(".btnBuscar").removeClass("btn-succes")
  $(".btnBuscar").addClass("btn-danger")
}

cargar()