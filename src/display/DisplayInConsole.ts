import {Flux} from "@/flux/Flux";
import {Article} from "@/article/Article";

export class DisplayInConsole {

  async displayFluxContent(flux: Flux) {
    const articles: Article[] = await flux.getArticles()

    articles.forEach(article => {
      console.log("Titre : " + article.title)
      console.log("Lien vers l'article : " + article.link)
      console.log("\n")
    })
  }

}