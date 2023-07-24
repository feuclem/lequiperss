export class Article {

  private readonly _title: string
  private readonly _link: string

  constructor(title: string, link: string) {
    this._title = title
    this._link = link
  }

  get title(): string {
    return this._title;
  }

  get link(): string {
    return this._link;
  }
}