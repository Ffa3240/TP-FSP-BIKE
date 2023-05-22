

// Agrega el Header a la pagina
let wProductoNavInner ="";
if (window.location.href.includes("index.html")) {
    wProductoNavInner = `
                    <li><a class="dropdown-item" href="index.html#idProductos" onclick="selCategoriaMenu('B')">Bicicletas</a></li>
                    <li><a class="dropdown-item" href="index.html#idProductos" onclick="selCategoriaMenu('R')">Repuestos</a></li>
                    <li><a class="dropdown-item" href="index.html#idProductos" onclick="selCategoriaMenu('A')">Accesorios</a></li>
                    <li><a class="dropdown-item" href="index.html#idProductos" onclick="selCategoriaMenu('T')">Todos</a></li>
                    `
} else {
     wProductoNavInner = `
                    <li><a class="dropdown-item" href="index.html#idProductos">Productos</a></li>
                    `
        };

var wHeader = document.getElementById("idHeader")
wHeader.innerHTML = `
<nav class="miHeader_nav">
                 
<div class="nav_logo">
    <img src="./img/Logos/Logo05Transparente2.png" alt="Cerrar" class="nav_img_logo">
    <h2 class="nav_titulo">FSP Bike's</h2>
</div>

<div class="nav_central">
    <p>AHORA PODÉS PAGAR EN HASTA 3 CUOTAS SIN INTERÉS</p>
</div>

<div class="nav_usuario">
    <div id="id_nav_usuario_in">
        <a href="./registracion.html" class="nav_usuario_crear">
        <i class="fa-regular fa-user"></i>  Registrate</a>
        <a href="./login.html" class="nav_usuario_login">
        <i class="fa fa-right-to-bracket"></i>  Iniciar</a>
    </div>
    <div id="id_nav_usuario_out">
        <div id="id_nav_usuario_logueado">
        </div>
        <a href="" class="nav_usuario_logout">
        <i class="fa fa-sign-out"></i>  Cerrar</a>
    </div>
</div>

</div>

<div class="nav_menu">
    <div class="nav_img" onclick="nav_menu_mostrar_ocultar()">
        <img src="ico/menu-hamburguesa.svg" alt="Menu">
    </div>
    <ul id="nav_id" class="nav nav_ocultar">
        <li class="nav_item"> 
            <a href="index.html" class="nav-link">Inicio</a>
        </li>
        <li class="nav_item">
            <a href="#idAcercaDe" class="nav-link">Acerca de</a>
        </li>
        <li class="nav_item">
            <a href="contactos.html" class="nav-link">Contacto</a>
        </li>
        <li class="nav_item">
            <a href="index.html#idNovedades-section" class="nav-link">Novedades</a>
        </li>
        <li class="dropdown nav_item">
            <a class="dropdown-toggle nav-link" data-bs-toggle="dropdown" href="#" role="button"
                aria-expanded="false">Productos</a>
            <ul onclick="subMenuOcultar(this)" class="dropdown-menu">
                ${wProductoNavInner}
                <li>
                    <hr class="dropdown-divider">
                </li>
                <li><a class="dropdown-item" href="index.html#idMarcas">Marcas</a></li>
            </ul>
        </li>
        <li class="nav_item">
            <a href="index.html#idServicios" class="nav-link">Servicios</a>
        </li>
        <li class="nav_item">
            <a href="sucursales.html" class="nav-link">Sucursales</a>
        </li>
        <img src="./ico/cerrar.svg" alt="Cerrar" class="nav_close">

    </ul>
</div>



</nav>
`;

// Agrega el Footer a la pagina

var wFooter = document.getElementById("idFooter")
wFooter.innerHTML = `
<div class="whatsapp">
        <a href="https://api.whatsapp.com/send/?phone=5491176403394" target="_blank">
            <i id="idImgWhatsapp" class="fa-brands fa-whatsapp" alt="whatsapp" style="color:rgb(215, 215, 215)"></i>
        </a>  
</div>

<dialog class="ventanaModalGeneral" id="idVentanaModalGeneral">
    <div class="ventanaModalDetalle" id="idVentanaModalDetalle">
        <div class="ventanaModalDetalleTexto" id="idVentanaModalDetalleTexto"></div>
        <div onclick="cerrarVentanaModalGeneral()" class="botonCerrarVentanaModalGeneral">Cerrar</div>
    </div>

</dialog>

<div id="idAcercaDe" class="separador">
<h6>Acerca de ...</h6>
</div>
<div class="container">
<div class="min-footer">

    <div class="col-left">
        Seguinos
        <div class="redes">    
            <span class="grid-item">
                <a href="https://www.facebook.com" target="_blank">
                    <i class="fab fa-facebook" alt="facebook" style="color:rgb(215, 215, 215)"></i>
                </a>
            </span>
            <span class="grid-item">
                <a href="https://www.instagram.com" target="_blank">
                    <i class="fab fa-instagram" alt="instagram" style="color:rgb(215, 215, 215)"></i>
                </a>
            </span>
        </div>
    </div>

    <div class="col-center">
        Contactanos
        <div class="footerContactanos">
            <div class="emailContato">
                <i class="fa fa-envelope" alt="mail" style="color:rgb(215, 215, 215)"></i>
                Email:
                <a  href="mailto:consultas@fsp.bike.com" target="_blank" rel="noopener noreferrer">consultas@fsp.bike.com</a>
            </div>
            <div class="telefonoContacto">
                <i class="fa fa-phone" alt="telefono" style="color:rgb(215, 215, 215)"></i>
                Teléfono: 
                <a href="tel:+54-011-4444-4444">(011)4444-4444</a>
            </div>
            <div class="wspContacto">
                <i class="fa-brands fa-whatsapp" alt="whatsapp" style="color:rgb(215, 215, 215)"></i>
                Whatsapp:
                <a href="https://api.whatsapp.com/send/?phone=5491176403394" target="_blank">
                +54 9 15 6666-6666</a>
            </div>
            <div class="direccionContacto">
                <i class="fa-solid fa-location-pin" alt="ubicacion" style="color:rgb(215, 215, 215)"></i>
                Direccion:
                <a href="./sucursales.html" target="_blank">
                sucursales</a>
            </div>
            
        </div>      
    </div>
    
    <div class="col-right">
        Navegación
        <div class="footerNavegacion">
            <div id="idFormaDeEnvios" class="enviosNavegacion">
                <i class="fa fa-truck-fast" alt="envios" style="color:rgb(215, 215, 215)"></i>
                <a href="#idVentanaModalGeneral">Envíos</a>
            </div>
            <div id="idMediosDePago" class="medioPagoNavegacion">
                <i class="fa-solid fa-money-check-dollar" alt="medios de pago" style="color:rgb(215, 215, 215)"></i>
                <a href="#idVentanaModalGeneral">Medios de Pago</a>
            </div>
            <div class="productosNavegacion">
                <i class="fa fa-bicycle" alt="productos" style="color:rgb(215, 215, 215)"></i>
                <a href="index.html#idNovedades-section" target="_blank">Productos</a>
            </div>
            <div class="serviciosNavegacion">
                <i class="fa fa-handshake" alt="servicios" style="color:rgb(215, 215, 215)"></i>
                <a href="index.html#idServicios" target="_blank">Servicios</a>
            </div>
        </div>
    </div>

</div>
<div class="miFooterDerechos">
    Copyright ®Rodados FSP BiKE - Todos los derechos reservados by Grupo10
</div>
</div>
`

function nav_menu_mostrar_ocultar() {
    let menu = document.getElementById("nav_id");
    menu.classList.toggle("nav_ocultar");
}

function subMenuOcultar(o) {
  o.classList.toggle("nav_ocultar");
}
/* -------------------------------------------------------------------------------------------------*/
/* MANEJO DE VENTANA MODAL - PARA ENVIOS Y MEDIOS DE PAGO */

function cerrarVentanaModalGeneral() {
    let wVentanaGeneral = document.getElementById("idVentanaModalGeneral");
    wVentanaGeneral.classList.remove("ventanaModalGeneralMostrar");
}

/* Mostrar Ventana Modal General */
function MostrarVentanaModalGeneral(textoHtml) {
    let wVentanaDetalle = document.getElementById("idVentanaModalDetalleTexto");
    wVentanaDetalle.innerHTML=textoHtml;
    let wVentanaGeneral = document.getElementById("idVentanaModalGeneral");
    wVentanaGeneral.classList.add("ventanaModalGeneralMostrar");
};

/* Para detectar ESC de ventanaModal */
var wVentanaModalGeneral = document.getElementById("idVentanaModalGeneral");
wVentanaModalGeneral.addEventListener('keydown', (event) => {
    console.log(event.key)
    console.log(event.code)
    if (event.key == "Escape") {
        cerrarVentanaModalGeneral();
    }
  }, false);


/* Formas de Envios */
var wFormasDeEnvios = document.getElementById("idFormaDeEnvios");
wFormasDeEnvios.addEventListener("click", function() {

    var texto = ` <p></p>
    
    <b>ENVÍOS CON ANDREANI<img src="ico/andreani.svg" style="scale: 3.5; margin-left: 3rem" alt="andreani"></b>

    <p>Una vez acreditado el pago, se procederá a preparar la orden para su despacho dentro del plazo de 48 hs hábiles.</p>
    <p>El paquete será enviado al domicilio ingresado al momento de comprar.</p>
    <p>En el momento en que despachemos tu compra, recibirás un mail con un link para seguir el envio.</p>
    <br>
    <p>Los tiempos de entrega corren por cuenta del correo.</p>
    <p><b>Actualmente los envios en CABA y GBA se encuentran <u>bonificados</u>.</b></p>
    <p>Los envíos pueden presentar algunas demoras en fechas especiales de descuentos o promociones.</p>
    <br>    
    
    <b>IMPORTANTE:</b>
    <br>
    <p>Es responsabilidad del comprador que los datos brindados de contacto y envío sean correctos.</p>
    <p>Te recomendamos revisar la información ingresada antes de confirmar la compra.</p>
    <p>De esta forma, tu envío no presentará demoras, vas a estar al corriente de su estado y podras obtener una excelente experiencia.</p>
    <br>
    <p>Ante cualquier duda o consulta, podes contactarnos vía mail a 
    <strong><a href="mailto:consultas@fsp.bike.com" style="color:blue;cursor:pointer"</a>consultas@fsp.bike.com</strong>
    </p>`

    MostrarVentanaModalGeneral(texto)
    }
);

/* Ver medios de pago */
var wMediosDePago= document.getElementById("idMediosDePago");
wMediosDePago.addEventListener("click", function() {

    var texto = ` 
    <H5>Medios de pago</H5>
    <div></div>    
    <h6> Transferencia y depósito bancario: </h6>

    <p>Precio de lista. Te enviamos las instrucciones por email. </p>
    <hr>
    <H6> </h6>
    
    <table>
    <tr>
        <td>
            <h6> MercadoPago <img src="ico/mercadoPago.svg" style="scale: 2.5; margin-left: 2rem" alt="mercadoPago"></h6>
            <p>Te enviamos a la página de MercadoPago para que completes el pago.</p>
            <p>Con recargo en hasta 18 cuotas con todas las tarjetas.</p>
            <p>CFT: 60%.</p>
            <p></p>
            <p><b>MercadoPago - Link de pago</b><p>  
            <p>Te enviamos un link de pago por whatsapp para que completes la compra.</p>
            <p>Podés pagar con todas las tarjetas en hasta 3 cuotas sin interés</p>
            <p>o con recargo en los planes Ahora 6-12-18.</p>
        </td>
        <td>                                               
            <p>Débito: Precio de lista sin interés. CFT: 0%.</p>  
            <p>- 1 Cuota: Precio de lista sin interés. CFT: 0%.</p> 
            <p>- 3 cuotas: Precio de lista sin interés. CFT 0%.</p>
            <p>- 6 cuotas: Plan Ahora 6 con recargo. CFT: 18%.</p> 
            <p>-12 cuotas: Plan Ahora 12 con recargo. CFT: 38%.</p>
            <p>-18 cuotas: Plan Ahora 18 con recargo. CFT: 60%.</p>
        </td>
    </tr>
    <tr>
        <td><hr></td><td><hr></td>
    </tr>
    
    <H6> </h6>
    
    <tr>
          <td>
            <h6> Tarjetas de crédito o débito: </h6>
            <p>Pagás de manera directa a través de nuestra página con tarjeta de crédito o débito en</p> <p>hasta 3 cuotas sin interés o con recargo en los planes Ahora 6-12-18.</p>
            <p></p>
            <p>-Débito: Precio de lista sin interés. CFT: 0%.</p>
            <p>- 1 Cuota: Precio de lista sin interés. CFT: 0%.</p>
            <p>- 3 cuotas: Precio de lista sin interés. CFT 0%.</p>
            <p>- 6 cuotas: Plan Ahora 6 con recargo. CFT: 18%.</p>
            <p>-12 cuotas: Plan Ahora 12 con recargo. CFT: 38%.</p>
            <p>-18 cuotas: Plan Ahora 18 con recargo. CFT: 60%.</p>
        </td>
        <td>
            <p>Ejemplo: una bicicleta publicada con un precio de lista de $100.000 se abonaría en</p>
            <p>- 1 cuota sin interés de $100.000 (CFT: 0%)</p>
            <p>- 3 cuotas sin interés de $33.333,33 (CFT: 0%)</p>
            <p>- 6 cuotas de $19.666,66 (precio final $118.000, CFT: 18%)</p>
            <p>-12 cuotas de $11.500 (precio final: $138.000, CFT: 38%).</p>
            <p>-18 cuotas de $8888,88 (precio final: $160.000, CFT: 60%.</p>
        </td>
    </tr>
    <tr><td><hr></td><td><hr></td></tr>
    </table>
    <H6></H6>
    <p>Tarjetas soportadas para planes: Tarjetas bancarias: 
    <P><table>
        <tr>
            <td><img src="ico/american-express-1.svg" alt="american-express"></td>
            <td><img src="ico/mastercard-6.svg" alt="mastercard"></td>
            <td><img src="ico/visa.svg" style="scale: 2.5" alt="visa"></td>
        </tr>
        <tr>
            <td style="text-align: center; width: 5rem">AMEX</td>
            <td style="text-align: center; width: 5rem">Mastercard</td> 
            <td style="text-align: center; width: 5rem">Visa</td>
        </tr>
        </table>
    </p>    
    `

    MostrarVentanaModalGeneral(texto)
    }
);

/* -------------------------------------------------------------------------------------------------*/
/* Funciones y manejo de usuario - login - logout */

var usuario = "";
function verUsuario() {
    usuario=sessionStorage.getItem("fsp-bike-usuario")
    if (usuario == null) {usuario=""};
    document.getElementById("id_nav_usuario_logueado").innerHTML=usuario
    if (usuario.trim() == "") {
        document.getElementById("id_nav_usuario_out").style.display="none";
        document.getElementById("id_nav_usuario_in").style.display= "block";
    }
    else {
        document.getElementById("id_nav_usuario_out").style.display= "block";
        document.getElementById("id_nav_usuario_in").style.display="none";
    }
}

var wLogOut = document.getElementById("id_nav_usuario_out");
wLogOut.addEventListener("click", function() {
    localStorage.setItem("fsp-bike-usuario", "");
    sessionStorage.setItem("fsp-bike-usuario", "")
    verUsuario();
})


window.addEventListener("load", verUsuario());

/*function onKeyDownHandler() {
    console.log("key pressed ",  String.fromCharCode(event.keyCode));
}*/

/*
function nav_cerrar(e) {
  $("#nav_id").addClass("nav_ocultar");
}*/

$(".nav_item").on("click", function() {
    if (!$(this).hasClass("dropdown")) {
    $("#nav_id").addClass("nav_ocultar");
    }
})
