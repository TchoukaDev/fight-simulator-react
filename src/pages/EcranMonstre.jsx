import EcranChoix from "./EcranChoix";

export default function EcranMonstre({
  returnToCharacter,
  monstresArray,
  monstreChosen,
  pseudo,
}) {
  return (
    <EcranChoix
      title={`Choisis ton adversaire ${pseudo}:`}
      returnFunction={returnToCharacter}
      returnBtnText="Retour au choix du personnage"
      charactersArray={monstresArray}
      onCharacterChosen={monstreChosen}
    />
  );
}
