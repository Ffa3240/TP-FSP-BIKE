console.log(location.search); // Imprime en la consola los argumentos pasados a este formulario

var urlPagina = location.href
const urlParams = new URLSearchParams(location.search);

correoElectronico = urlParams.get('correoElectronico');
correoElectronico = correoElectronico==null ? "" : correoElectronico;
console.log(correoElectronico);

const { createApp } = Vue;
createApp({
  data() {
    return {
      // Inicializa las variables
      correoElectronico: "",
      nombre: "",
      apellido: "",
      password: "",
      perfil: "",
      url: "https://ffa3240.pythonanywhere.com/usuarios/" + correoElectronico,
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
          this.correoElectronico = data.correoElectronico;
          this.nombre = data.nombre;
          this.apellido = data.apellido;
          this.password = data.password;
          this.perfil = data.perfil;
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
      window.location.href = "./MNG_usuarios.html"; // Redirigir a la página de productos 
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
  MostrarVentanaModalGeneral("Se ha eliminado correctamente el usuario.", "80%", "30%", true, "./MNG_usuarios.html","rgb(94 13 13)")
}


