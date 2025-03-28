import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";

import Axios from "npm:axios";
import { cocktail } from "../../types.ts";
import { Bebida } from "../../components/bebida.tsx";

type data = {
  drinks: cocktail[];
}
export const handler: Handlers = {
  async GET(_req: Request, ctx:FreshContext<unknown, data>) {
    const id = ctx.params.id;
    
    const resultado = await Axios.get<data>(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
    
        return ctx.render(resultado.data);
  },
};

const Pagina = (props: PageProps<data>) => {
    const cocktail = props.data;
    
    return (
        <div class = "pagina">
                {cocktail.drinks?.map((elem: cocktail) => (
            
            <Bebida drinks={elem}></Bebida>
        ))}
        </div>
      );
}

export default Pagina;