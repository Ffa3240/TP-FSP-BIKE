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
      productoValido: true,
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
    cambioProducto() {
      validarProducto(this)
    },
    modificar() {
      modificarNovedad(this)
      /* Este código define la función modificar(). En esta función, se crea un objeto producto que contiene las propiedades nombre, precio, stock e imagen obtenidas de la instancia de Vue. Luego se define un objeto options que especifica las opciones para la solicitud HTTP.
      A continuación, se utiliza la función fetch para realizar una solicitud HTTP tipo PUT a la URL this.url utilizando las opciones definidas en options. Si la solicitud se realiza con éxito, se muestra una alerta indicando que el registro ha sido actualizado y se redirige al usuario a la página "./productos.html". Si ocurre algún error durante el proceso, se captura la excepción en el bloque catch, se registra el error en la consola y se muestra una alerta indicando que ha ocurrido un error al actualizar.
       */
     /* if (validarProducto(this)) {

          let novedad = {
            codProducto: this.codProducto,
            imagenNovedad: this.imagenNovedad,
            texto01: this.texto01,
            texto02: this.texto02,
            texto03: this.texto03,
            texto04: this.texto04,
            texto05: this.texto05,
          };

        if (validar(novedad)) {
                var options = {
                  body: JSON.stringify(novedad),
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
        }*/
    }
    ,
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

function modificacionConfirmada() {
  MostrarVentanaModalGeneral("Se ha modificado correctamente la novedad.", "80%", "30%", true, "./MNG_novedades.html","rgb(30 30 44)")
}


function validar(objProducto) {
  let resultado = true;

  let strError = `<h6>Errores en la modificacion de datos:<h6><div></div>`;

  if (objProducto.imagenNovedad.trim() == "") {
    strError = strError + `<p> - Falta indicar ruta de imagen</p>`;
    resultado=false;
  }
  
  if (!resultado) {
    MostrarVentanaModalGeneral(strError, "40%", "40%", false, "#","rgb(177 22 22)")
  }

  return resultado;
}


const validarProducto = async (obj) => {
  let resultado = true;
  let strError = `<h6>Errores en la carga de datos:</h6><br>`; 
  obj.productoValido=true;
  try {
        if (! obj.codProducto == "") {
            const url= "https://ffa3240.pythonanywhere.com/productos/" + obj.codProducto
            const response = await fetch(url)
            const data = await response.json()
            if (data.nombre === undefined) {
              strError = strError + `<p> - Producto Inexistente </p>`; 
              resultado=false;
              obj.productoValido=false;
              obj.texto01="";
              obj.texto02="";
              obj.texto04="";
              obj.texto05="";
            }
            else {
              obj.imagenNovedad= data.imagen;
              obj.texto01=data.nombre;
              obj.texto02="$"+data.precio;
              obj.texto04="Rodado: "+data.rodado;
              obj.texto05="Marca: "+data.marca;
            }
      }
    }
    catch (err) {
      console.log(err)
    }

    if (!resultado) {
      MostrarVentanaModalGeneral(strError, "40%", "40%", false, "#","rgb(177 22 22)")
    } 

    return resultado
}


const validarProducto2 = async (obj) => {
  let resultado = true;
  obj.productoValido=true;
  try {
        if (! obj.codProducto == "") {
            const url= "https://ffa3240.pythonanywhere.com/productos/" + obj.codProducto
            const response = await fetch(url)
            const data = await response.json()
            if (data.nombre === undefined) {
              resultado=false;
              obj.productoValido=false;
            }
      }
    }
    catch (err) {
      console.log(err)
    }
    return resultado
}


const modificarNovedad = async(obj) => {

  if (await validarProducto2(obj)) {

    let novedad = {
      codProducto: obj.codProducto,
      imagenNovedad: obj.imagenNovedad,
      texto01: obj.texto01,
      texto02: obj.texto02,
      texto03: obj.texto03,
      texto04: obj.texto04,
      texto05: obj.texto05,
    };

    if (validar(novedad)) {
          var options = {
            body: JSON.stringify(novedad),
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            redirect: "follow",
          };
          fetch(obj.url, options)
            .then(function () {
              modificacionConfirmada();
            })
            .catch((err) => {
              console.error(err);
              alert("Error al actualizar.");
            });
    }
  }
  else {
    let strError = `<h6>Errores en la carga de datos:</h6><br>`; 
    strError = strError + `<p> - Producto Inexistente </p>`; 
    MostrarVentanaModalGeneral(strError, "40%", "40%", false, "#","rgb(177 22 22)")  
  }

}