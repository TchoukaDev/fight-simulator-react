import Personnage from "./Personnage.js";
import archerImage from "../../assets/images/archer.jpg";

export default class Archer extends Personnage {
  constructor(pseudo) {
    super(archerImage, "Archer", 350, 350, 50, 20);
    this.pseudo = pseudo;
    this.critique = 25;
    this.esquive = 20;
  }

  attaquer(personnage, nombreAleatoire) {
    personnage.sante -= this.attaque;
    this.magie++;
    if (nombreAleatoire <= (this.critique ?? 0)) {
      return `Coup critique! ${this.getNomPersonnage()} inflige ${
        this.attaque * 2
      } dégats à ${personnage.getNomPersonnage()}. Il gagne 1 point de magie.`;
    } else {
      return `${this.getNomPersonnage()} attaque ${personnage.getNomPersonnage()} et lui inflige ${
        this.attaque
      } dégats. Il gagne 1 point de magie.`;
    }
  }
}
