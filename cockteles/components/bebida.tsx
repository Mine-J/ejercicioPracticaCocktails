import { FunctionalComponent } from "preact/src/index.d.ts";
import { cocktail } from "../types.ts";
type data = {
    drinks:cocktail;
}


export const Bebida: FunctionalComponent<data> = (data) => {
    
    return (
        <div class = "bebidaContenedor">
            <img src={data.drinks.strDrinkThumb} alt="fotoBebida" />
            <p><strong>Nombre:</strong> {data.drinks.strDrink}</p>
            <p><strong>Categoria:</strong> {data.drinks.strCategory}</p>
            
        </div>

    );
}