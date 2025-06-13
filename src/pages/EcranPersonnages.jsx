import EcranChoix from "./EcranChoix";
import { useAppContext } from "../context/app-context";

export default function EcranPersonnage() {
  const { pseudo, personnages, returnToScreen, setMainCharacter, setEcran } =
    useAppContext();
  const setCharacter = (character) => {
    setMainCharacter(character);
    setEcran("monstres");
  };
  return (
    <EcranChoix
      charactersArray={personnages}
      returnFunction={() => returnToScreen("pseudo")}
      title={`Choisis ta classe ${pseudo}:`}
      returnBtnText="Retour au choix du pseudo"
      handlerSetCharacter={setCharacter}
    />
  );
}
