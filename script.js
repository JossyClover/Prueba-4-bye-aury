document.addEventListener('DOMContentLoaded', () => {
  // Generar estrellas aleatorias
  const numStars = 200;

  for (let i = 0; i < numStars; i++) {
    const star = document.createElement('div');
    star.classList.add('stars');
    star.style.top = Math.random() * 100 + 'vh';
    star.style.left = Math.random() * 100 + 'vw';
    star.style.animationDuration = (1 + Math.random() * 3) + 's';
    document.body.appendChild(star);
  }

  // Frases inspiradoras
  const frases = [
    'Te quiero mucho aury.',
    'Ten un buen viaje.',
    'Dios te bendiga grandemente.',
    'Esfuerzate para lograr tus objetivos.',
    'Nunca dejes de soñar.',
    'Si te lo propones, lo lograras!.',
    'No te alejes de Dios.',
    'Eres increible!.',
    'Tu puedes hacerloo.',
    'Cuidate mucho.',
    'Te amo aurysitaaaa.',
    'Brilla como si todo el universo te mirara.'
  ];

  const fraseEl = document.getElementById('frase');
  let index = 0;

  function cambiarFrase() {
    fraseEl.textContent = frases[index];
    index = (index + 1) % frases.length;
  }

  cambiarFrase();
  setInterval(cambiarFrase, 8000);
});
