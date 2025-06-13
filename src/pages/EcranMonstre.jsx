import EcranChoix from "./EcranChoix";
import { useAppContext } from "../context/app-context";

export default function EcranMonstre() {
  const { pseudo, monstres, returnToScreen, setMonsterChosen, setEcran } =
    useAppContext();
  const setCharacter = (character) => {
    setMonsterChosen(character);
    setEcran("combat");
  };

  return (
    <EcranChoix
      title={`Choisis ton adversaire ${pseudo}:`}
      returnFunction={() => returnToScreen("personnages")}
      returnBtnText="Retour au choix du personnage"
      charactersArray={monstres}
      handlerSetCharacter={setCharacter}
    />
  );
}
