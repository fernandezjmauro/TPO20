
 
let header = document.querySelector('.header');
let hoverActive = false;    


function cambiarImagenYColor() {
    let imagenlogo = document.getElementById('logo-home');
    let opciones = document.querySelectorAll('.texto-boton');
    imagenlogo.src = 'img/logo_no_bg.png';

    opciones.forEach(function(opcion) {
        opcion.classList.add('texto-boton-negro');
    });

    header.style.backgroundColor = 'antiquewhite';
}

function restaurarImagenYColor() {
    let imagenlogo = document.getElementById('logo-home');
    let opciones = document.querySelectorAll('.texto-boton');
    let imagenmenu = document.getElementById('imgmenu');

    imagenlogo.src = 'img/logo_no_bg_c6e5b1.png';
    imagenmenu.src = 'img/Menu_icon_icon-icons.com_71858 verde.png';

    opciones.forEach(function(opcion) {
        opcion.classList.remove('texto-boton-negro');
        
    });
    
    if (window.scrollY === 0 || !hoverActive) {
        header.style.backgroundColor = 'transparent';
      
    }
}

function cambiarEstiloHeader() {
    let opciones = document.querySelectorAll('.texto-boton');
    let imagenlogo = document.getElementById('logo-home');
    let imagenmenu = document.getElementById('imgmenu');
    
    if (!hoverActive) {
        if (window.scrollY > 0) {
            header.style.backgroundColor = 'antiquewhite';
            opciones.forEach(function(opcion) {
                opcion.classList.add('texto-boton-negro');
            });
            imagenlogo.src = 'img/logo_no_bg.png';
            imagenmenu.src = 'img/Menu_icon_icon-icons.com_71858.png';
        } else {
            header.style.backgroundColor = 'transparent';
            imagenlogo.src = 'img/logo_no_bg_c6e5b1.png';
            imagenmenu.src = 'img/Menu_icon_icon-icons.com_71858 verde.png';
            opciones.forEach(function(opcion) {
                opcion.classList.remove('texto-boton-negro');
            });
        }
    }
}

window.addEventListener('scroll', cambiarEstiloHeader);

header.addEventListener('mouseenter', function() {
    hoverActive = true;
    header.style.backgroundColor = 'antiquewhite';
});

header.addEventListener('mouseleave', function() {
    hoverActive = false;
    if (window.scrollY === 0) {
        header.style.backgroundColor = 'transparent';
    }
});




// Menu hamburguesa
let nav = document.querySelector('#nav')
let abrir = document.querySelector('#abrir')
let cerrar = document.querySelector('#cerrar') 

abrir.addEventListener('click', () => {
    nav.classList.add('visible')
})

cerrar.addEventListener('click', () => {
    nav.classList.remove('visible')
})
