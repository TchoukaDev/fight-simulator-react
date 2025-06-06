import { useEffect, useRef, useState } from "react";
import Button from "../components/Button.jsx";

export default function EcranPseudo({ getPseudo, pseudoValidation }) {
  const pseudoRef = useRef();
  const [error, setError] = useState(false);

  const savePseudo = () => {
    const pseudoValue = pseudoRef.current.value.trim();
    if (pseudoValue === "") {
      setError(true);
    } else {
      setError(false);
      getPseudo(pseudoValue);
    }
  };

  useEffect(() => {
    pseudoRef.current.focus();
  }, []);

  return (
    <div className="containerChoix w-9/10 sm:w-2/3 md:w-1/2">
      <p className="text-blue-700 text-2xl mb-8">
        Bienvenue dans ce simulateur de combat!
      </p>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          pseudoValidation();
          savePseudo();
        }}
      >
        <p className="mb-2 ">
          <label htmlFor="pseudo">
            Choisissez un pseudo pour votre personnage:
          </label>
        </p>
        <p className="mb-5">
          <input
            className="w-[200px] xs:w-[250px] sm:w-[300px]"
            type="text"
            ref={pseudoRef}
            id="pseudo"
            required
          />
        </p>
        <p>
          <Button classNameColors="btn-gray" value="Valider" />
        </p>
        {error && (
          <p className="text-center text-red-700">Veuillez saisir un pseudo.</p>
        )}
      </form>
    </div>
  );
}
