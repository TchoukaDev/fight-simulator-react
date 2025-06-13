import CharacterCard from "../components/Cards/CharacterCard";
import Button from "../components/Button";

export default function EcranChoix({
  title,
  returnFunction,
  returnBtnText,
  charactersArray,
  handlerSetCharacter,
}) {
  return (
    <>
      <div className="containerChoix">{title}</div>
      <div className="w-3/4 xl:w-3/4   flex just flex-col">
        <p className=" self-center md:self-end">
          <Button
            onClickEvent={returnFunction}
            classNameColors="btn-black"
            value={returnBtnText}
          />
        </p>
        <div className="flex gap-3 mt-5 flex-col md:flex-row justify-evenly items-start">
          {charactersArray.map((character) => (
            <CharacterCard
              key={character.image}
              character={character}
              onSelect={handlerSetCharacter}
            />
          ))}
        </div>
      </div>
    </>
  );
}
