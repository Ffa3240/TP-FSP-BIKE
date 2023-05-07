
// Agregar el Head a la pagina
/*
var wHead = document.getElementById("idHead")
wHead.innerHTML =  `
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>FSP Bike's</title>

<link rel="shortcut icon" href="./img/Logos/Logo05.png" type="image/x-icon">

<link rel="stylesheet" href="./css/normalize.css">

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
    integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
    crossorigin="anonymous" referrerpolicy="no-referrer" />

<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous">


<script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/js/all.min.js"
integrity="sha512-fD9DI5bZwQxOi7MhYWnnNPlvXdp/2Pj3XSTRrFs5FQa4mizyGLnJcN6tuvUS6LbmgN1ut+XGSABKvjN0H6Aoow=="
crossorigin="anonymous" referrerpolicy="no-referrer"></script>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js"
integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe"
crossorigin="anonymous"></script>
` + wHead.innerHTML 
*/


// Agrega el Header a la pagina

var wHeader = document.getElementById("idHeader")
wHeader.innerHTML = `
<nav class="miHeader_nav">
                 
<div class="nav_logo">
    <img src="./img/Logos/Logo05Transparente2.png" alt="Cerrar" class="nav_img_logo">
    <h2 class="nav_titulo">FSP Bike's</h2>
</div>

<div class="nav_central">
    <p>Titulo o texto alusivo</p>
</div>

<div class="nav_usuario">
    <a href="./registracion.html" class="nav_usuario_crear">Registrate</a>
    <a href="./login.html" class="nav_usuario_login">Iniciar sesión</a>
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
            <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Bicicletas</a></li>
                <li><a class="dropdown-item" href="#">Repuestos</a></li>
                <li><a class="dropdown-item" href="#">Accesorios</a></li>
                <li>
                    <hr class="dropdown-divider">
                </li>
                <li><a class="dropdown-item" href="index.html#idMarcas">Marcas</a></li>
            </ul>
        </li>
        <li class="nav_item">
            <a href="#" class="nav-link">Servicios</a>
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
<div id="idAcercaDe" class="separador">
<h6>Acerca de ...</h6>
</div>
<div class="container">
<div class="min-footer">

    <div class="col-left">
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
    <div class="col-right">

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