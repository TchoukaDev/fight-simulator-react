import Personnage from "./Personnage.js";

export default class Monstre extends Personnage {
  constructor(image, classe, sante, santeMax, attaque, difficulte) {
    super(image, classe, sante, santeMax, attaque);
    this.difficulte = difficulte;
  }
}
