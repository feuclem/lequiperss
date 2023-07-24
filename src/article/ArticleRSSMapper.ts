import {Article} from "@/article/Article";
import Parser from "rss-parser";
import {Writable} from "stream";

export function toArticle(item: Parser.Item): Article {
  return new Article(item.title!!, item.link!!)
}