import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import Axios from "npm:axios";
import { cocktail } from "../types.ts";
import { Bebida } from "../components/bebida.tsx";

type data = {
    name?: string;
    drinks: cocktail[];
}

export const handler: Handlers = {
    async GET(req: Request, ctx: FreshContext<unknown, data>) {

        const url = new URL(req.url);
        const name = url.searchParams.get("name") || undefined


        const resultado = await Axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`)

        
        return ctx.render({ name, drinks: resultado.data.drinks });
    },
};

const PageBuscador = (props: PageProps<data>) => {
    
    return (
      <div class="pagina">
        {props.data.name ? (
          props.data.drinks.map((elem: cocktail) => (
            <a href={`/cocktail/${elem.idDrink}`}>
              <Bebida drinks={elem}></Bebida>
            </a>
          ))
        ) : (
          <form action="/buscar" method="GET">
            <input type="text" name="name" value="" />
            <button type="submit">Buscar</button>
          </form>
        )}
      </div>
    );
}
export default PageBuscador;