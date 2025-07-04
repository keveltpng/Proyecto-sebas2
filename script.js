const messages = [
    "I love you daughter 💖", // Inglés
    "Te amo hija 💖",       // Español
    "Eu te amo filha 💖",   // Portugués
    "Ti amo figlia 💖",     // Italiano
    "Я люблю тебя, доченька 💖", // Ruso
    "我爱你女儿 💖",        // Chino
    "사랑해 딸 💖"         // Coreano
];

let currentIndex = 0;
const messageElement = document.getElementById('message');

function changeMessage() {
    messageElement.style.opacity = 0; // Oculta el texto
    setTimeout(() => {
        currentIndex = (currentIndex + 1) % messages.length;
        messageElement.textContent = messages[currentIndex];
        messageElement.style.opacity = 1; // Muestra el nuevo texto
    }, 800); // Duración de la transición de opacidad (ms)
}

// Inicializa el primer mensaje al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    messageElement.textContent = messages[currentIndex];
    // La opacidad inicial la maneja el CSS con animation-delay
});

// Cambia el mensaje cada 4 segundos (4000 ms) después de la aparición inicial
setTimeout(() => {
    setInterval(changeMessage, 4000);
}, 3500); // Retraso inicial para que las animaciones de entrada terminen