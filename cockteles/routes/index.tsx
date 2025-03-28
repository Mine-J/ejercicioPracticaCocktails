import Axios from "npm:axios";
import {cocktail} from "../types.ts"
import { Bebida } from "../components/bebida.tsx";
type data = {
  drinks: cocktail[];
}
export default async function Home() {

  const resultado = await Axios.get<data>("https://www.thecocktaildb.com/api/json/v1/1/random.php");
  
  return (
    <div class = "pagina">
      {resultado.data.drinks?.map((elem: cocktail) => (
        
        <a href={`/cocktail/${elem.idDrink}`}><Bebida drinks={elem}></Bebida></a>
          
      ))}
    </div>
  );
}
