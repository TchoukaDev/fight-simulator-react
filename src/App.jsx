import { useState } from "react";
import EcranPseudo from "./pages/EcranPseudo";
import EcranPersonnage from "./pages/EcranPersonnages";
import Guerrier from "./Js/Classes/Guerrier";
import Mage from "./Js/Classes/Mage";
import Archer from "./Js/Classes/Archer";
import EcranMonstre from "./pages/EcranMonstre";
import Monstre from "./Js/Classes/Monstre";
import slimeImage from "./assets/images/slime.png";
import loupGarouImage from "./assets/images/loupGarou.png";
import dragonImage from "./assets/images/dragon.png";
import EcranCombat from "./pages/EcranCombat";

export default function App() {
  // States//
  const [pseudo, setPseudo] = useState();
  const [ecran, setEcran] = useState("pseudo");
  const [mainCharacter, setMainCharacter] = useState("");
  const [monstreChosen, setMonsterChosen] = useState("");

  const resetCharacter = () => {
    const newCharacter = Object.create(Object.getPrototypeOf(mainCharacter)); //Copier objet vide avec la même classe
    Object.assign(newCharacter, mainCharacter, {
      //Copie les propriété dans le nouvel objet
      sante: mainCharacter.santeMax,
      magie: 0,
    });
    setMainCharacter(newCharacter);
  };
  //Handlers//
  const getPseudoHandler = (pseudo) => {
    setPseudo(pseudo);
  };
  const pseudoValidationHandler = () => {
    setEcran("personnages");
  };

  const getMainCharacterHandler = (characterChosen) => {
    setMainCharacter(characterChosen);
    setEcran("monstres");
  };

  const getMonsterChosenHandler = (monstreChosen) => {
    setMonsterChosen(monstreChosen);
    setEcran("combat");
  };

  const returnToPseudoHandler = () => {
    setEcran("pseudo");
    setPseudo("");
  };

  const returnToCharacterHandler = () => {
    setEcran("personnages");
    setMainCharacter("");
  };

  const returnToMonsterHandler = () => {
    setEcran("monstres");
    setMonsterChosen("");
    resetCharacter();
  };

  //Personnages
  const personnages = [
    new Guerrier(pseudo),
    new Mage(pseudo),
    new Archer(pseudo),
  ];

  //Monstres
  const monstres = [
    new Monstre(slimeImage, "Slime", 400, 400, 20, "facile"),
    new Monstre(loupGarouImage, "Loup-Garou", 500, 500, 30, "intermédiaire"),
    new Monstre(dragonImage, "Dragon", 700, 700, 50, "difficile"),
  ];

  //Ecran à afficher
  const ecranActuel = () => {
    switch (ecran) {
      case "pseudo":
        return (
          <EcranPseudo
            getPseudo={getPseudoHandler}
            pseudoValidation={pseudoValidationHandler}
          />
        );
      case "personnages":
        return (
          <EcranPersonnage
            returnToPseudo={returnToPseudoHandler}
            personnagesArray={personnages}
            characterChosen={getMainCharacterHandler}
            pseudo={pseudo}
          />
        );
      case "monstres":
        return (
          <EcranMonstre
            returnToCharacter={returnToCharacterHandler}
            monstresArray={monstres}
            monstreChosen={getMonsterChosenHandler}
            pseudo={pseudo}
          />
        );
      case "combat":
        return (
          <EcranCombat
            returnToMonster={returnToMonsterHandler}
            fightingCharacter={mainCharacter}
            fightingMonster={monstreChosen}
            onRestart={() => {
              setEcran("pseudo"),
                setMainCharacter(null),
                setMonsterChosen(null);
            }}
          />
        );
    }
  };

  return <>{ecranActuel()}</>;
}
