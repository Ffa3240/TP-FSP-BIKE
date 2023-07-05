
var urlPagina = location.href
const urlParams = new URLSearchParams(location.search);

var parNombre = urlParams.get('parNombre');
parNombre = parNombre==null ? "" : parNombre;

var wNombre = document.getElementById("campoBuscar")
wNombre.value=parNombre

var parCategoria = urlParams.get('parCategoria');
parCategoria = parCategoria==null ? "" : parCategoria;

var wCategoria = document.getElementById("idCategoria")
wCategoria.value=parCategoria

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
  },
  created() {
    this.fetchData(this.url);
  },
}).mount("#app");
}

function buscar() {
  const wCategoria= document.getElementById("idCategoria")
  const wNombre = document.getElementById("campoBuscar")
  urlPagina = location.pathname + "?parNombre=" + wNombre.value +"&parCategoria="+wCategoria
  window.location.href = urlPagina
}

function campoBuscarChange() {
  $(".btnBuscar").removeClass("btn-succes")
  $(".btnBuscar").addClass("btn-danger")
}

function buscarCategoria(selCategoria) {
  //alert("selecciono categoria: " + selCategoria)
  const wNombre = document.getElementById("campoBuscar")
  urlPagina = location.pathname + "?parNombre=" + wNombre.value +"&parCategoria="+selCategoria
  window.location.href = urlPagina
}


cargar()