console.log(location.search); // Imprime en la consola los argumentos pasados a este formulario
var id = location.search.substr(4); // Obtiene el valor del argumento 'id' de la URL
console.log(id);
const { createApp } = Vue;
createApp({
  data() {
    return {
      // Inicializa las variables
      id: 0,
      codProducto: 0,
      imagenNovedad: "",
      texto01: "",
      texto02: "",
      texto03: "",
      texto04: "",
      texto05: "",
    
      url: "https://ffa3240.pythonanywhere.com/novedades/" + id,
    };
  },
  methods: {
    fetchData(url) {
      /* Este código define un método llamado fetchData(url) que realiza una solicitud a través de fetch a una URL especificada y procesa la respuesta.
      Este código utiliza la función fetch para realizar una solicitud HTTP a una URL específica. Luego, encadena una serie de promesas utilizando los métodos then y catch.
      En el primer then, se convierte la respuesta en formato JSON mediante response.json(). Luego, en el segundo then, se accede a los datos obtenidos y se asignan a las propiedades de la instancia de Vue, como id, nombre, imagen, stock y precio.
      Si se produce algún error durante el proceso, el código captura la excepción en el bloque catch y registra el error en la consola, además de establecer la propiedad error en true.
      En resumen, este código realiza una solicitud a una URL, espera la respuesta en formato JSON y actualiza los datos de la instancia de Vue con los valores obtenidos de la respuesta.
      */
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          this.id = data.id;
          this.codProducto = data.codProducto;
          this.imagenNovedad = data.imagenNovedad;
          this.texto01 = data.texto01;
          this.texto02 = data.texto02;
          this.texto03 = data.texto03;
          this.texto04 = data.texto04;
          this.texto05 = data.texto05;
         })
        .catch((err) => {
          console.error(err);
          this.error = true;
        });
    },
    eliminar() {
       const url = this.url;
       var options = {
       method: "DELETE", // Establece el método HTTP como DELETE
      };
      fetch(url, options)
        .then((res) => res.text()) // Convierte la respuesta en texto (or res.json())
        .then((res) => {
          eliminacionConfirmada();
        });
    },
    salir() {
      window.location.href = "./MNG_novedades.html"; // Redirigir a la página de productos 
    },
  },
  created() {
    /* Este código define el bloque created() en el cual se llama a la función fetchData(this.url) al crear la instancia de Vue. La función fetchData() se encarga de realizar una solicitud HTTP a la URL especificada en this.url y obtener los datos necesarios para la aplicación.
     */
    this.fetchData(this.url);
  },
  /* Posteriormente, se utiliza el método mount("#app") para montar la instancia de Vue en el elemento HTML con el id "app". Esto permite que la instancia de Vue controle y renderice el contenido dentro de ese elemento HTML.
  */
}).mount("#app");

function eliminacionConfirmada() {
  MostrarVentanaModalGeneral("Se ha eliminado correctamente la novedad.", "80%", "30%", true, "./MNG_novedades.html","rgb(81 113 75)")
}


