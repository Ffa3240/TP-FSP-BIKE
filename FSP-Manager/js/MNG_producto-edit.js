console.log(location.search); // Imprime en la consola los argumentos pasados a este formulario
var id = location.search.substr(4); // Obtiene el valor del argumento 'id' de la URL
console.log(id);
const { createApp } = Vue;
createApp({
  data() {
    return {
      // Inicializa las variables
      id: 0,
      nombre: "",
      imagen: "",
      stock: 0,
      precio: 0,
      categoria: "",
      marca: "",
      rodado: "",
      url: "https://ffa3240.pythonanywhere.com/productos/" + id,
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
          this.nombre = data.nombre;
          this.imagen = data.imagen;
          this.stock = data.stock;
          this.precio = data.precio;
          this.categoria = data.categoria;
          this.marca = data.marca;
          this.rodado = data.rodado;
        })
        .catch((err) => {
          console.error(err);
          this.error = true;
        });
    },
    modificar() {
      /* Este código define la función modificar(). En esta función, se crea un objeto producto que contiene las propiedades nombre, precio, stock e imagen obtenidas de la instancia de Vue. Luego se define un objeto options que especifica las opciones para la solicitud HTTP.
      A continuación, se utiliza la función fetch para realizar una solicitud HTTP tipo PUT a la URL this.url utilizando las opciones definidas en options. Si la solicitud se realiza con éxito, se muestra una alerta indicando que el registro ha sido actualizado y se redirige al usuario a la página "./productos.html". Si ocurre algún error durante el proceso, se captura la excepción en el bloque catch, se registra el error en la consola y se muestra una alerta indicando que ha ocurrido un error al actualizar.
       */
      let producto = {
        nombre: this.nombre,
        precio: this.precio,
        stock: this.stock,
        imagen: this.imagen,
        categoria: this.categoria,
        marca: this.marca,
        rodado: this.rodado,
     };

     if (validar(producto)) {
            var options = {
              body: JSON.stringify(producto),
              method: "PUT",
              headers: { "Content-Type": "application/json" },
              redirect: "follow",
            };
            fetch(this.url, options)
              .then(function () {
                modificacionConfirmada();
              })
              .catch((err) => {
                console.error(err);
                alert("Error al actualizar.");
              });
      }
    },
    salir() {
      window.location.href = "./MNG_productos.html"; // Redirigir a la página de productos 
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

function modificacionConfirmada() {
  MostrarVentanaModalGeneral("Se ha modificado correctamente el producto.", "80%", "30%", true, "./MNG_productos.html","rgb(30 30 44)")
}


function validar(objProducto) {
  let resultado = true;

  let strError = `<h6>Errores en la modificacion de datos:<h6><div></div>`;

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
    MostrarVentanaModalGeneral(strError, "80%", "30%", true, "#","rgb(177 22 22)")
  }

  return resultado;
}