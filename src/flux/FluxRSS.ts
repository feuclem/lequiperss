import {Article} from "@/article/Article";
import Parser from "rss-parser";
import {toArticle} from "@/article/ArticleRSSMapper";

export class FluxRSS {
  private readonly articles: Promise<Article[]>;
  private rssParser = new Parser();

  constructor(url: string) {
    this.articles = this.getArticlesFromUrl(url);
  }

  public getArticles(): Promise<Article[]> {
    return this.articles;
  }

  private async getArticlesFromUrl(url: string): Promise<Article[]> {
    const feed = await this.rssParser.parseURL(url);
    return feed.items.map((item) => toArticle(item));
  };
}