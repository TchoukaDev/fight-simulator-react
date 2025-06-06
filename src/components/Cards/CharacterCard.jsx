export default function CharacterCard({ personnageStats, characterClicked }) {
  const handleClick = () => {
    characterClicked(personnageStats);
  };
  return (
    <div className="flex flex-col justify-start items-center  w-1/1">
      <div
        style={{
          backgroundImage: `url(${personnageStats.image})`,
        }}
        className="w-1/1  rounded h-[200px] md:h-[400px]  justify-center cursor-pointer bg-contain md:bg-cover bg-center bg-no-repeat sm:w-[100%] sm:h-[300px]"
        onClick={handleClick}
      >
        {" "}
      </div>
      <div
        onClick={handleClick}
        className="bg-black text-gray-100 p-3 w-3/4 text-xs md:text-base text-center rounded -mt-8 flex flex-col cursor-pointer"
      >
        <p className="underline mb-3">{personnageStats.classe}</p>
        <p>PV: {personnageStats.sante}</p>
        <p>Attaque: {personnageStats.attaque}</p>
        {personnageStats.critique && (
          <p>Critique: {personnageStats.critique}%</p>
        )}
        {personnageStats.difficulte && (
          <p>Difficulté: {personnageStats.difficulte}</p>
        )}
        {personnageStats.esquive && <p>Esquive: {personnageStats.esquive}%</p>}
      </div>
    </div>
  );
}
