document.addEventListener('DOMContentLoaded', () => {
    const loveTextElement = document.getElementById('love-text');

    const messages = [
        "Te amo, hija",        // Español
        "I love you, daughter",// Inglés
        "Eu te amo, filha",    // Portugués
        "Ti amo, figlia",      // Italiano
        "Я тебя люблю, дочь",  // Ruso (Ya tebya lyublyu, doch')
        "我爱你，女儿",         // Chino Mandarín (Wǒ ài nǐ, nǚ'ér)
        "사랑해, 딸",          // Coreano (Saranghae, ttal)
        "我愛你，女兒"          // Taiwanés (Mandarín con caracteres tradicionales)
    ];

    let currentIndex = 0;

    function changeText() {
        // Actualiza el texto con el siguiente mensaje en la lista
        loveTextElement.textContent = messages[currentIndex];
        
        // Prepara el índice para el siguiente mensaje
        currentIndex = (currentIndex + 1) % messages.length;
    }

    // Cambia el texto inicial inmediatamente
    changeText();

    // Configura el intervalo para que coincida con la animación CSS (4 segundos)
    setInterval(changeText, 4000);
});
