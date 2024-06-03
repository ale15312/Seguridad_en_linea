// scripts.js



// Función para cambiar la imagen cuando se hace clic en ella
function changeImage() {
    var image = document.getElementById('mainImage');
    if (image.src.includes('general.png')) {
        image.src = 'images/secure.png'; // Cambia esto por la ruta de tu nueva imagen
    } else {
        image.src = 'images/general.png'; // Cambia esto por la ruta de la imagen original
    }
}

// Agregar un evento de clic a la imagen
document.addEventListener('DOMContentLoaded', (event) => {
    var image = document.getElementById('mainImage');
    image.addEventListener('click', changeImage);
});
