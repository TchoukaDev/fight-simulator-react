export default class Personnage {
  constructor(image, classe, sante, santeMax, attaque) {
    this.image = image;
    this.classe = classe;
    this.santeMax = santeMax;
    this.sante = sante;
    this.attaque = attaque;
    this.magie = 0;
  }

  attaquer(personnage, nombreAleatoire) {
    personnage.sante -= this.attaque;
    this.magie++;
    return `${this.getNomPersonnage()} attaque ${personnage.getNomPersonnage()} et lui inflige ${
      this.attaque
    } dégats. Il gagne 1 point de magie.`;
  }

  attaqueSpeciale(personnage) {
    if (this.magie >= 5) {
      personnage.sante -= this.attaque * 4;
      this.magie -= 5;
      return {
        message: `${this.getNomPersonnage()} lance une attaque puissante sur ${personnage.getNomPersonnage()} et lui inflige ${
          this.attaque * 4
        } dégats.`,
        SpecialError: false,
      };
    } else {
      return {
        message:
          "Vous avez besoin de 5 points de magie pour lancer une attaque spéciale",
        SpecialError: true,
      };
    }
  }

  attendre() {
    this.magie = this.magie + 3;
    return `${this.getNomPersonnage()} attend et se prépare pour le prochain tour. Il gagne 3 points de magie.`;
  }

  seSoigner() {
    this.sante += 0.25 * this.santeMax;
    if (this.sante >= this.santeMax) {
      this.sante = this.santeMax;
    }
    return `${this.getNomPersonnage()} se soigne et récupère ${
      0.25 * this.santeMax
    } points de vie`;
  }

  getNomPersonnage() {
    return this.pseudo ?? this.classe;
  }
}
