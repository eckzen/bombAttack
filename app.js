 // Variables para la puntuación
 let puntuacionCartas = 0;
 const ponerPuntuacion = document.getElementById('puntuacion');

 // Función para actualizar la puntuación
 function actualizarPuntos(puntos) {
     puntuacionCartas += puntos;
     ponerPuntuacion.textContent = puntuacionCartas;
 }

 // Eventos de pasar el ratón por encima de las cartas
 const cards = document.querySelectorAll('.card');
 cards.forEach(card => {
     card.addEventListener('mouseenter', () => {
         const isExplosion = card.querySelector('.back img').getAttribute('src') === 'img/flame.jpg';
         const puntos = isExplosion ? -1 : 1;
         actualizarPuntos(puntos);
     });
 });