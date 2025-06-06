import EcranChoix from "./EcranChoix";

export default function EcranPersonnage({
  returnToPseudo,
  personnagesArray,
  characterChosen,
  pseudo,
}) {
  return (
    <EcranChoix
      title={`Choisis ta classe ${pseudo}:`}
      returnFunction={returnToPseudo}
      returnBtnText="Retour au choix du pseudo"
      charactersArray={personnagesArray}
      onCharacterChosen={characterChosen}
    />
  );
}
