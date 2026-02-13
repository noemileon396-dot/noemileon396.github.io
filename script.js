window.addEventListener('scroll', reveal);

function reveal() {
    var reveals = document.querySelectorAll('.reveal');
    
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var revealTop = reveals[i].getBoundingClientRect().top;
        var revealPoint = 150;
        
        if (revealTop < windowHeight - revealPoint) {
            reveals[i].classList.add('active');
        }
    }
}
function openModal(id) {
    document.getElementById(id).style.display = "block";
}

function closeModal(id) {
    document.getElementById(id).style.display = "none";
}

// Cerrar si hace clic fuera de la ventanita
window.onclick = function(event) {
    if (event.target.className === 'modal') {
        event.target.style.display = "none";
    }
}   
let clickTimer;

// Función para mostrar el mensaje con 1 clic
function showInfo(card) {
    const info = card.querySelector('.porque-es-importante');
    // Cerramos otros mensajes abiertos primero (opcional)
    document.querySelectorAll('.porque-es-importante').forEach(el => {
        if(el !== info) el.style.display = 'none';
    });
    
    // Cambiamos entre mostrar y ocultar
    if (info.style.display === 'block') {
        info.style.display = 'none';
    } else {
        info.style.display = 'block';
    }
}

// Función para abrir el enlace con 2 clics
function goToSpotify(url) {
    window.open(url, '_blank');
}
const suenos = {
    1: {
        titulo: "Viajar",
        texto: "Quiero conocer el mundo de tu mano...",
        foto: "img/metas (2).jpg"
    },
    2: {
        titulo: "Nuestro propio espacio",
        texto: "Despertar cada mañana a tu lado en nuestro hogar...",
        foto: "img/metas (3).jpg"
    },
    3: {
        titulo: "Metas profesionales",
        texto: "Verte triunfar en lo que amas y estar ahí para celebrar...",
        foto: "img/metas (1).jpg"
    },
    4: {
        titulo: "Viejitos pero juntos",
        texto: "Llegar a una edad avanzada y seguir riendo como hoy...",
        foto: "img/metas (4).jpg"
    }
};

function showFuture(id) {
    const display = document.getElementById('future-display');
    const data = suenos[id];

    // Marcamos el botón como activo
    document.querySelectorAll('.dot').forEach(d => d.classList.remove('active'));
    event.currentTarget.classList.add('active');

    // Cambiamos el contenido con una pequeña animación
    display.innerHTML = `
        <div class="future-card">
            <img src="${data.foto}" alt="${data.titulo}">
            <h2>${data.titulo}</h2>
            <p>${data.texto}</p>
        </div>
    `;
}
function enableControls(video) {
    // Si no tiene controles, los ponemos y activamos sonido
    if (!video.controls) {
        video.controls = true;
        video.muted = false;
    } else {
        // Si ya tiene controles, los quitamos y silenciamos (opcional)
        video.controls = false;
        video.muted = true;
    }
}
const recuerdos = [
    {
        foto: "img/Foto (1).JPG",
        info: "Como olvidar este dia. La primera vez que tube mi beso en el callejon del beso."
    },
    {
        foto: "img/Foto (18).JPEG",
        info: "Mi foto favorita. Hasta el momento (espero tengamos mas asi)"
    },
    {
        foto: "img/Foto (25).JPG",
        info: "Incluso en los momentos más simples, tu mirada me dice todo."
    },
    {
        foto: "img/Foto (25).JPEG",
        info: "Simplemente Gracias por esta foto"
    },
    {
        foto: "img/Foto (32).jpeg",
        info: "Esta foto. Solo porque es tu favorita jsjsjs"
    },
    {
        foto: "img/Foto (186).JPG",
        info: "Año Nuevo con mi amorcito."
    },
    {
        foto: "img/Foto (184).JPG",
        info: "Novia feliz, vida feliz."
    },
    {
        foto: "img/Foto (158).JPG",
        info: "Besitos."
    },
    {
        foto: "img/Foto (149).JPG",
        info: "Escondidos en el parke."
    },
    {
        foto: "img/Foto (138).JPG",
        info: "Graduacion del amor de tu vida."
    },
    {
        foto: "img/Foto (77).JPG",
        info: "Dia de pinturas."
    },
    {
        foto: "img/Foto (33).JPG",
        info: "Family."
    },
    {
        foto: "img/Foto (30).JPEG",
        info: "Actualizacion de nosotros."
    }

    // Añade más recuerdos aquí
];

let currentIndex = -1; // Para llevar la cuenta de qué recuerdo estamos mostrando
const collageContainer = document.getElementById('collage-container');

function showRandomMemory() {
    // Si es la primera vez, borra el mensaje inicial
    if (currentIndex === -1) {
        collageContainer.innerHTML = '';
        document.querySelector('.recuerdos-header').style.display = 'block'; // Asegura que el header esté visible
    }

    // Oculta el recuerdo actual si existe
    const activeMemory = document.querySelector('.memory-item.active');
    if (activeMemory) {
        activeMemory.classList.remove('active');
        // Espera a que la transición termine antes de eliminarlo
        setTimeout(() => activeMemory.remove(), 800);
    }

    // Selecciona un nuevo recuerdo aleatorio que no sea el mismo que el anterior (si es posible)
    let newIndex;
    do {
        newIndex = Math.floor(Math.random() * recuerdos.length);
    } while (newIndex === currentIndex && recuerdos.length > 1);
    currentIndex = newIndex;

    const memory = recuerdos[currentIndex];

    const memoryItem = document.createElement('div');
    memoryItem.classList.add('memory-item');
    memoryItem.style.backgroundImage = `url('${memory.foto}')`;

    const memoryInfo = document.createElement('div');
    memoryInfo.classList.add('memory-info');
    memoryInfo.textContent = memory.info;

    memoryItem.appendChild(memoryInfo);
    collageContainer.appendChild(memoryItem);

    // Activa la nueva imagen después de un breve retraso para la transición
    setTimeout(() => {
        memoryItem.classList.add('active');
    }, 10);
}

// Para mostrar el primer recuerdo al cargar la página si se desea
document.addEventListener('DOMContentLoaded', () => {
    // Se muestra el mensaje inicial, y el primer recuerdo al hacer clic.
    // Si quieres que el primer recuerdo aparezca solo, quita la línea del initial-message del HTML y descomenta la siguiente:
    // showRandomMemory();
});
// Ejecutar reveal al cargar para las fotos que ya se ven
window.addEventListener('load', reveal);