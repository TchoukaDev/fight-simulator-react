import Personnage from "./Personnage.js";
import imageMage from "../../assets/images/mage.jpg";

export default class Mage extends Personnage {
  constructor(pseudo) {
    super(imageMage, "Mage", 400, 400, 70, 0);
    this.pseudo = pseudo;
  }
}
