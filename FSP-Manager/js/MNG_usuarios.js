
var urlPagina = location.href
const urlParams = new URLSearchParams(location.search);

//var parNombre = urlParams.get('parNombre');
//parNombre = parNombre==null ? "" : parNombre;

//var wNombre = document.getElementById("campoBuscar")
//wNombre.value=parNombre


//urlInicial = "https://ffa3240.pythonanywhere.com/usuarios"
//url = urlInicial + location.search

url = "https://ffa3240.pythonanywhere.com/usuarios"

const { createApp } = Vue;

function cargar() {

// Crea una instancia de la aplicación Vue
createApp({
  data() {
    return {
      
      usuarios: [], 
     
      error: false,
      cargando: true,
      nombre: "",
      apellido: "",
      correoElectronico: "",
      perfil: "",

      filter: [],
      parNombre:"",
      parApellido:"",
      parMail:"",
      parPerfil:"",
      chkAdmin: 1,
      chkUser: 1,
    };
  },
  methods: {
    
    fetchData() {
    
      fetch(url)
        .then((response) => response.json()) // Convierte la respuesta en formato JSON
        .then((data) => {
          // Asigna los datos de los usuarios obtenidos al arreglo 'usuarios'
          this.usuarios = data;
          this.filter = data;
          this.cargando = false;
        })
        .catch((err) => {
          this.cargando=false;
          this.error = true;
          console.error(err);
        });
    },

    filtro() {

      let usrFiltro = [];
    
      this.usuarios.forEach(e => {
       
        if (e.nombre.toLocaleLowerCase().includes(this.parNombre.toLocaleLowerCase()) &&
        e.apellido.toLocaleLowerCase().includes(this.parApellido.toLocaleLowerCase()) &&
        e.correoElectronico.toLocaleLowerCase().includes(this.parMail.toLocaleLowerCase()) &&
        e.perfil.toLocaleLowerCase().includes(this.parPerfil.toLocaleLowerCase())) {

          if ((this.chkAdmin && e.perfil.toLocaleLowerCase()=="admin") || 
              (this.chkUser  && e.perfil.toLocaleLowerCase()=="user")) {
                  usrFiltro.push(e)
          }

        }
      
      });

      this.filter = usrFiltro;
    }
    
  },
  created() {
//    this.fetchData(this.url);
    this.fetchData();

  },
}).mount("#app");
}

function buscar() {
  const wNombre = document.getElementById("campoBuscar")
  urlPagina = location.pathname + "?parNombre=" + wNombre.value 
  window.location.href = urlPagina
}

function campoBuscarChange() {
  $(".btnBuscar").removeClass("btn-succes")
  $(".btnBuscar").addClass("btn-danger")
}

function recargar() {
  window.location.reload()
}

cargar()

