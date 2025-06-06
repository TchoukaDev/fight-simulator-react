import {
  genererNombreAleatoire,
  attaqueManquee,
  attaquePuissanteManquee,
  lancerConfettis,
} from "./utilities.js";

let message = "";
let nombreAleatoire;
let SpecialError = false;

//Tour du joueur
export function playerTurn(personnagePrincipal, monstreChoisi, action) {
  nombreAleatoire = genererNombreAleatoire();

  switch (action) {
    case "Attaquer":
      message = personnagePrincipal.attaquer(monstreChoisi, nombreAleatoire);
      break;
    case "Lancer une attaque spéciale":
      ({ message, SpecialError } =
        personnagePrincipal.attaqueSpeciale(monstreChoisi));
      break;
    case "Attendre":
      message = personnagePrincipal.attendre();
      break;
    case "Se soigner":
      message = personnagePrincipal.seSoigner();
      break;
  }

  if (monstreChoisi.sante < 0) {
    monstreChoisi.sante = 0;
    lancerConfettis();
  }

  if (personnagePrincipal.sante < 0) {
    personnagePrincipal.sante = 0;
  }

  return {
    result: message,
    newCharacter: personnagePrincipal,
    newMonster: monstreChoisi,
    SpecialError,
  };
}

//Tour du monstre
export function monsterTurn(personnagePrincipal, monstreChoisi) {
  return new Promise((resolve) => {
    // if (monstreChoisi.sante <= 0) {
    //   //Victoire du joueur
    //   getImageMonstreChoisi().remove();
    //   document.querySelector("#monstreChoisi").style.display = "none";
    //   finDuCombat(
    //     `${monstreChoisi.pseudo} est vaincu! Félicitations, vous avez gagné!`
    //   );
    //   lancerConfettis();
    //   return;
    // }

    nombreAleatoire = genererNombreAleatoire();

    setTimeout(() => {
      if (monstreChoisi.magie < 5) {
        if (
          nombreAleatoire < 33 &&
          monstreChoisi.sante != monstreChoisi.santeMax
        ) {
          message = monstreChoisi.seSoigner();
        } else if (
          (nombreAleatoire < 33 &&
            monstreChoisi.sante == monstreChoisi.santeMax) ||
          nombreAleatoire >= 66
        )
          if (nombreAleatoire > (personnagePrincipal.esquive ?? 0)) {
            message = monstreChoisi.attaquer(
              personnagePrincipal,
              nombreAleatoire
            );
          } else {
            message = attaqueManquee(personnagePrincipal, monstreChoisi);
          }
        else {
          message = monstreChoisi.attendre();
        }
      } else {
        if (nombreAleatoire > (personnagePrincipal.esquive ?? 0)) {
          ({ message, SpecialError } =
            monstreChoisi.attaqueSpeciale(personnagePrincipal));
        } else {
          message = attaquePuissanteManquee(personnagePrincipal, monstreChoisi);
        }
      }

      // compteurTour();
      //Fin du tour ,passage au tour suivant.

      // if (personnagePrincipal.sante <= 0) {
      //   //Défaite du joueur
      //   getImagePersonnagePrincipal().remove();
      //   document.querySelector("#personnagePrincipal").style.display = "none";
      //   finDuCombat(
      //     `${personnagePrincipal.pseudo} est vaincu! Dommage, vous avez perdu!`
      //   );
      // }
      if (monstreChoisi.sante < 0) {
        monstreChoisi.sante = 0;
      }
      if (personnagePrincipal.sante < 0) {
        personnagePrincipal.sante = 0;
      }
      resolve({
        result: message,
        newCharacter: personnagePrincipal,
        newMonster: monstreChoisi,
      });
    }, 500);
  });
}

// function finDuCombat(message) {
//   document.querySelector(".retourChoixMonstre").remove();
//   let containerCombat = document.querySelector("#containerChoixAction");
//   if (containerCombat) containerCombat.innerHTML = "";

//   let containerMessageFin = document.querySelector("#containerMessageFin");
//   let messageDeFin = document.createElement("div");
//   messageDeFin.textContent = message;
//   messageDeFin.style.color = message.includes("gagné") ? "green" : "red";
//   messageDeFin.style.fontSize = "24px";
//   messageDeFin.style.fontWeight = "bold";
//   messageDeFin.style.margin = "20px 0";

//   containerMessageFin.appendChild(messageDeFin);
//   document.querySelector("#containerAll").style.gap = "50px";
//   containerChoix.classList.add("hidden");
//   containerButtons.style.display = "none";

//   let recommencer = document.createElement("button");
//   recommencer.textContent = "Recommencer un combat";
//   recommencer.classList.add("button");
//   recommencer.style.fontSize = "16px";

//   recommencer.addEventListener("click", () => {
//     location.reload(); // Recharge la page
//   });

//   containerMessageFin.appendChild(recommencer);
// }
