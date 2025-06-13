import { createContext, useState, useContext } from "react";
import Guerrier from "../Js/Classes/Guerrier";
import Mage from "../Js/Classes/Mage";
import Archer from "../Js/Classes/Archer";
import Monstre from "../Js/Classes/Monstre";
import slimeImage from "../assets/images/slime.png";
import loupGarouImage from "../assets/images/loupGarou.png";
import dragonImage from "../assets/images/dragon.png";

// Initialiser le contexte
const AppContext = createContext({
  pseudo: [],
  setPseudo: () => {},
  ecran: [],
  setEcran: () => {},
  mainCharacter: [],
  setMainCharacter: () => {},
  monstreChosen: [],
  setMonsterChosen: () => {},
  resetCharacter: () => {},
  returnToScreen: () => {},
  restartGame: () => {},
  personnages: [],
  monstres: [],
});

// Hook personnalisé pour raccourcir appel dans Composant
export const useAppContext = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
  // States
  const [pseudo, setPseudo] = useState();
  const [ecran, setEcran] = useState("pseudo");
  const [mainCharacter, setMainCharacter] = useState("");
  const [monstreChosen, setMonsterChosen] = useState("");

  const contextValue = {
    //   States
    pseudo,
    setPseudo,
    ecran,
    setEcran,
    mainCharacter,
    setMainCharacter,
    monstreChosen,
    setMonsterChosen,

    // Functions
    resetCharacter: () => {
      const newCharacter = Object.create(Object.getPrototypeOf(mainCharacter)); //Copier objet vide avec la même classe
      Object.assign(newCharacter, mainCharacter, {
        //Copie les propriété dans le nouvel objet
        sante: mainCharacter.santeMax,
        magie: 0,
      });
      setMainCharacter(newCharacter);
    },
    returnToScreen: (ecran) => {
      if (ecran === "pseudo") {
        setPseudo(null);
      }
      if (ecran === "personnages") {
        setMainCharacter(null);
      }
      if (ecran === "monstres") {
        setMonsterChosen(null);
      }
      setEcran(ecran);
    },
    restartGame: () => {
      setEcran("pseudo"), setMainCharacter(null), setMonsterChosen(null);
    },
    //Personnages
    personnages: [new Guerrier(pseudo), new Mage(pseudo), new Archer(pseudo)],

    //Monstres
    monstres: [
      new Monstre(slimeImage, "Slime", 400, 400, 20, "facile"),
      new Monstre(loupGarouImage, "Loup-Garou", 500, 500, 30, "intermédiaire"),
      new Monstre(dragonImage, "Dragon", 700, 700, 50, "difficile"),
    ],
  };
  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};
