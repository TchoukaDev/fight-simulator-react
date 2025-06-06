import Personnage from "./Personnage.js";
import guerrierImage from "../../assets/images/guerrier.jpg";

export default class Guerrier extends Personnage {
  constructor(pseudo) {
    super(guerrierImage, "Guerrier", 600, 600, 40, 0);
    this.pseudo = pseudo;
  }
}
