
urlInicial = "https://ffa3240.pythonanywhere.com/usuarios"

const { createApp } = Vue;

function cargar() {

// Crea una instancia de la aplicación Vue
createApp({
  data() {
    /* El código define una instancia de la aplicación Vue. Aquí se especifican los datos utilizados por la aplicación, incluyendo la lista de productos, la URL del backend, indicadores de error y carga, así como los atributos para almacenar los valores del formulario de producto.
     */
    return {
      usuarios: [], // Almacena los productos obtenidos del backend
      // url:'http://localhost:5000/productos', // URL local
      //url: "https://ffa3240.pythonanywhere.com/productos", // URL del backend donde se encuentran los productos
      error: false,
      cargando: true,
      // Atributos para el almacenar los valores del formulario
      nombre: "",
      apellido: "",
      correoElectronico: "",
      password: "",
      perfil: "",
      };
  },
  methods: {
    grabar() {
      /* El método grabar se encarga de guardar los datos de un nuevo producto en el servidor. Primero, se crea un objeto producto con los datos ingresados en el formulario. Luego, se configuran las opciones para la solicitud fetch, incluyendo el cuerpo de la solicitud como una cadena JSON, el método HTTP como POST y el encabezado Content-Type como application/json. Después, se realiza la solicitud fetch a la URL especificada utilizando las opciones establecidas. Si la operación se realiza con éxito, se muestra un mensaje de éxito y se redirige al usuario a la página de productos. Si ocurre algún error, se muestra un mensaje de error.
       */
      // Crear un objeto 'producto' con los datos del formulario
      let usuario = {
        nombre: this.nombre,
        apellido: this.apellido,
        correoElectronico: this.correoElectronico,
        password: this.password,
        perfil: this.perfil,
       };
       grabarUsuario(usuario)
    },
    salir() {
      window.location.href = "./MNG_usuarios.html"; // Redirigir a la página de productos 
      //window.location.href = urlPagina; // Redirigir a la página de productos 

    },
  },
}).mount("#app");
}

function altaConfirmada() {
          MostrarVentanaModalGeneral("Se ha registrado correctamente el usuario.", "80%", "30%", true, "#","rgb(81 113 75)")
          formulario = document.getElementById('frmNuevo');
          formulario.reset();
}

const validar = async(objUsuario) => {
  let resultado = true;

  let strError = `<h6>Errores en la carga de datos:</h6><br>`;

  if (objUsuario.nombre.trim() == "") {
    strError = strError + `<p> - Falta indicar nombre</p>`;
    resultado=false;
  }
  if (objUsuario.apellido.trim() == "") {
    strError = strError + `<p> - Falta indicar apellido</p>`;
    resultado=false;
  }
  if (objUsuario.correoElectronico.trim() == "") {
    strError = strError + `<p> - Falta indicar Mail</p>`;
    resultado=false;
  }
  if (objUsuario.password.trim() == "") {
    strError = strError + `<p> - Falta indicar Password</p>`;
    resultado=false;
  }
  if (objUsuario.perfil.trim() == "") {
    strError = strError + `<p> - Falta indicar Perfil</p>`;
    resultado=false;
  }
  if (! ["admin", "user"].includes(objUsuario.perfil)) {
    strError = strError + `<p> - Perfiles válidos: admin o user</p>`;
    resultado=false;
  }
  
  if (resultado) {
      if (await validarExisteUsuario(objUsuario.correoElectronico)) {
        strError = strError + `<p> - Usuario ya existe en la base de datos.</p>`;
        resultado=false;
      }
  }

  if (!resultado) {
    MostrarVentanaModalGeneral(strError, "40%", "50%", false, "#","rgb(177 22 22)")
  }

  return resultado;
}

const validarExisteUsuario = async(correo) => {

      resultado=false;
      alert("Ingresa validar usuario")
      let usuario = {
          correoElectronico: correo,
          password: "*****"
      };
      var options = {
          body: JSON.stringify(usuario), // Convertir el objeto a una cadena JSON
          method: "POST", // Establecer el método HTTP como POST
          headers: { "Content-Type": "application/json" },
          redirect: "follow",
      };

      try {
            const urlValidarUsuario="https://ffa3240.pythonanywhere.com/usuarios/validarPassword"
            const response = await fetch(urlValidarUsuario, options)
            const data = await response.json()
            if (data.usuario == "True") {
              resultado=true;
            }
      }
      catch (err) {
        console.log(err)
        alert("Error al chequear existencia de usuario.");
        resultado=true
      }

      return resultado

}

const grabarUsuario = async(usuario) => {
  
  if (await validar(usuario)) {
     
           // Configurar las opciones para la solicitud fetch
           var options = {
            body: JSON.stringify(usuario), // Convertir el objeto a una cadena JSON
            method: "POST", // Establecer el método HTTP como POST
            headers: { "Content-Type": "application/json" },
            redirect: "follow",
          };

          // Realizar una solicitud fetch para guardar el producto en el servidor
          fetch(urlInicial, options)
            .then(function () {
              usuario={}
              altaConfirmada();
            })  
            .catch((err) => {
              console.error(err);
              alert("Error al Grabar.");
            });

  }

}

cargar() 