export default function CharacterCard({ character, onSelect }) {
  return (
    <div className="flex flex-col justify-start items-center  w-1/1">
      <div
        style={{
          backgroundImage: `url(${character.image})`,
        }}
        className="w-1/1  rounded h-[200px] md:h-[400px]  justify-center cursor-pointer bg-contain md:bg-cover bg-center bg-no-repeat sm:w-[100%] sm:h-[300px]"
        onClick={() => onSelect(character)}
      ></div>
      <div
        onClick={() => onSelect(character)}
        className="bg-black text-gray-100 p-3 w-3/4 text-xs md:text-base text-center rounded -mt-8 flex flex-col cursor-pointer"
      >
        <p className="underline mb-3">{character.classe}</p>
        <p>PV: {character.sante}</p>
        <p>Attaque: {character.attaque}</p>
        {character.critique && <p>Critique: {character.critique}%</p>}
        {character.difficulte && <p>Difficulté: {character.difficulte}</p>}
        {character.esquive && <p>Esquive: {character.esquive}%</p>}
      </div>
    </div>
  );
}
