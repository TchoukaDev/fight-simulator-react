import { useEffect, useState } from "react";
import Button from "../components/Button";
import { playerTurn, monsterTurn } from "../Js/Functions/fight.js";
import Modale from "../components/Modal.jsx";
import { lancerConfettis } from "../Js/Functions/utilities.js";

export default function EcranCombat({
  fightingCharacter,
  fightingMonster,
  returnToMonster,
  onRestart,
}) {
  // States
  const [Character, setCharacter] = useState(fightingCharacter);
  const [Monster, setMonster] = useState(fightingMonster);
  const [fightingState, setFightingState] = useState([]);
  const [disabled, setDisabled] = useState(false);
  const [counter, setCounter] = useState(1);
  const [showModale, setShowModale] = useState(false);

  // Functions
  const disableButtons = () => {
    setDisabled(true);
    setTimeout(() => setDisabled(false), 500);
  };

  const fight = async (action) => {
    const tourNumber = counter; // on capture la valeur actuelle du tour

    const { result, newCharacter, newMonster, SpecialError } = playerTurn(
      Character,
      Monster,
      action
    );

    if (SpecialError) {
      setFightingState((prev) => [
        { message: result, tour: tourNumber, type: "Character" },
        ...prev,
      ]);
      return;
    }
    setCharacter(newCharacter);
    setMonster(newMonster);
    setFightingState((prev) => [
      { message: result, tour: tourNumber, type: "Character" },
      ...prev,
    ]);

    if (newMonster.sante <= 0) {
      endGame("win"), lancerConfettis();
    }

    const {
      result: monsterResult,
      newCharacter: updatedCharacter,
      newMonster: updatedMonster,
    } = await monsterTurn(newCharacter, newMonster);

    setCharacter(updatedCharacter);
    setMonster(updatedMonster);
    setFightingState((prev) => [
      { message: monsterResult, tour: tourNumber, type: "Monster" },
      ...prev,
    ]);
    setCounter((prev) => prev + 1);

    if (updatedCharacter.sante <= 0) {
      endGame("loose");
    }
  };

  const endGame = (end) => {
    if (end === "win") {
      setShowModale("win");
    } else setShowModale("loose");
  };

  useEffect(() => {
    setShowModale(false);
  }, []);

  // Variables

  const actions = [
    "Attaquer",
    "Lancer une attaque spéciale",
    "Attendre",
    "Se soigner",
  ];
  return (
    <>
      <div className="min-h-screen flex-col items-center my-7">
        <div className="flex justify-center">
          <Button
            classNameColors="btn-black"
            value="Choisir un autre adversaire"
            onClickEvent={returnToMonster}
          />
        </div>
        <div className="flex justify-evenly lg:gap-15">
          <div className="hidden max-w-[200px] md:flex flex-col flex-center justify-start gap-2 items-center">
            <div className="w-[150px] md:w-[300px] text-center font-semibold ">
              {Character.pseudo}
            </div>
            <img src={Character.image} className="h-[200px]"></img>
            <div className="rounded-full border w-3/4 h-2">
              <div
                className={`bg-red-500 rounded-full h-1/1 transition-all duration-300 `}
                style={{
                  width: `${(Character.sante / Character.santeMax) * 100}%`,
                }}
              ></div>
            </div>
            <div className="font-semibold">
              PV: {Character.sante}/{Character.santeMax}
            </div>
            <div className="rounded-full border w-3/4 h-2 overflow-hidden">
              <div
                className={`bg-blue-500 rounded-full h-1/1 transition-all duration-300 `}
                style={{ width: `${(Character.magie * 100) / 5}%` }}
              ></div>
            </div>
            <div className="font-semibold">Magie: {Character.magie}</div>
          </div>
          <div className=" flex flex-col gap-3 max-w-2/3">
            <div className="flex flex-col">
              <div className="flex flex-col items-center">
                <div className="containerChoix mx-auto w-[100%] text-xs ">
                  Que voulez vous faire?
                </div>

                <div className="flex justify-evenly w-[100%] md:hidden">
                  <div className=" bg-green-200 ronded shadow-lg p-3 rounded shadow-black/20 flex flex-col  items-center font-semibold">
                    <div>{Character.pseudo}</div>
                    <div>
                      PV: {Character.sante}/{Character.santeMax}
                    </div>
                    <div>Magie :{Character.magie}</div>
                  </div>
                  <div className=" bg-red-200 ronded shadow-lg p-3 rounded shadow-black/20 flex flex-col  items-center font-semibold">
                    <div>{Monster.classe}</div>
                    <div>
                      PV: {Monster.sante}/{Monster.santeMax}
                    </div>
                    <div>Magie :{Monster.magie}</div>
                  </div>
                </div>

                <div className="flex flex-col"></div>
                <div className="grid grid-cols-2  xs:flex justify-center">
                  {actions.map((action) => (
                    <Button
                      key={action}
                      onClickEvent={() => {
                        disableButtons();
                        fight(action);
                      }}
                      classNameColors={disabled ? "opacity-25" : "btn-black"}
                      value={action}
                      disabled={disabled}
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className="text-center max-h-[50vh] overflow-y-auto">
              {fightingState.map((entry, i) => (
                <div
                  className={
                    entry.type == "Character"
                      ? "text-center my-1 p-4 bg-green-300"
                      : "text-center my-1 p-4 bg-red-300"
                  }
                  key={i}
                >
                  <span className="underline">Tour {entry.tour}</span>:{" "}
                  {entry.message}
                </div>
              ))}
            </div>
          </div>
          <div className="hidden  max-w-[200px] md:flex flex-col justify-start flex-center gap-2 items-center">
            <div className="w-[300px] text-center font-semibold">
              {Monster.classe}
            </div>
            <img src={Monster.image} className="h-[200px]"></img>
            <div className="rounded-full border w-3/4 h-2">
              <div
                className={`bg-red-500 rounded-full h-1/1 transition-all duration-300 `}
                style={{
                  width: `${(Monster.sante / Monster.santeMax) * 100}%`,
                }}
              ></div>
            </div>
            <div className="font-semibold">
              PV: {Monster.sante}/{Monster.santeMax}
            </div>
            <div className="rounded-full border w-3/4 h-2 overflow-hidden">
              <div
                className={`bg-blue-500 rounded-full h-1/1 transition-all duration-300 `}
                style={{ width: `${(Monster.magie * 100) / 5}%` }}
              ></div>
            </div>
            <div className="font-semibold">Magie: {Monster.magie}</div>
          </div>
        </div>
      </div>
      {showModale === "win" && (
        <Modale
          children={
            <>
              <img src={Character.image} className="h-[200px] rounded"></img>
              <p className="mt-5">Félicitations, vous avez gagné!</p>
            </>
          }
          onRestart={onRestart}
        />
      )}
      {showModale === "loose" && (
        <Modale
          children={
            <>
              <img src={Monster.image} className="h-[200px] rounded"></img>
              <p className="mt-5">Dommage, vous avez perdu.</p>
            </>
          }
          onRestart={onRestart}
        />
      )}
    </>
  );
}
