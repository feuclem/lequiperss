import {Flux} from "@/flux/Flux";
import {Article} from "@/article/Article";

export class DisplayInApi {
  async displayFluxContent(flux: Flux): Promise<Article[]> {
    return await flux.getArticles()
  }

}