import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Button from "./Button";

export default function Modale({ children, onRestart }) {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    // Le DOM est prêt
    setIsBrowser(true);
  }, []);

  const modalContent = (
    <div className=" bg-black/20 fixed inset-0 flex justify-center items-center z-50 text-black">
      <div className="bg-gray-400 font-semibold p-8 rounded-lg shadow-xl w-2/3  relative">
        {/* Contenu */}
        <div className="flex flex-col justify-evenly items-center">
          {children}
        </div>
        <div className="mt-6 flex justify-center">
          <Button
            classNameColors="btn-gray"
            onClickEvent={onRestart}
            value="Recommencer une partie"
            disabled={false}
          />
        </div>
      </div>
    </div>
  );

  return isBrowser ? createPortal(modalContent, document.body) : null;
}
