export function genererNombreAleatoire() {
  return Math.floor(Math.random() * 100 + 1);
}

export function attaqueManquee(personnage, monstre) {
  return `${personnage.pseudo} esquive l'attaque! ${monstre.classe} n'inflige aucun dégat mais il gagne 1 point de magie.`;
}

export function attaquePuissanteManquee(personnage, monstre) {
  monstre.magie -= 5;
  return `Incroyable! ${personnage.pseudo} esquive l'attaque puissante de ${monstre.classe} qui n'inflige aucun dégat. Il gagne quand même 1 point de magie.`;
}

export function lancerConfettis() {
  const duration = 2 * 1000; // Durée de 2 secondes
  const end = Date.now() + duration;

  // Fonction récursive pour produire un flux continu de confettis
  (function frame() {
    // Lancer les confettis depuis un point aléatoire
    confetti({
      particleCount: 5, // Nombre de particules par "salve"
      angle: 60, // Angle de départ
      spread: 55, // Éparpillement
      origin: { x: Math.random(), y: Math.random() - 0.2 }, // Position aléatoire
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  })();
}
