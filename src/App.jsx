import { useAppContext } from "./context/app-context";
import EcranPseudo from "./pages/EcranPseudo";
import EcranPersonnage from "./pages/EcranPersonnages";
import EcranMonstre from "./pages/EcranMonstre";
import EcranCombat from "./pages/EcranCombat";

export default function App() {
  const { ecran } = useAppContext();
  //Ecran à afficher
  const ecranActuel = () => {
    switch (ecran) {
      case "pseudo":
        return <EcranPseudo />;
      case "personnages":
        return <EcranPersonnage />;
      case "monstres":
        return <EcranMonstre />;
      case "combat":
        return <EcranCombat />;
      default:
        return <EcranPseudo></EcranPseudo>;
    }
  };

  return <>{ecranActuel()}</>;
}
