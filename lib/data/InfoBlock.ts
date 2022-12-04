export default class InfoBlock {
  #title: string;

  #lines: string[];

  constructor(title: string) {
    this.#title = title.replace('#', '').trim();
    this.#lines = [];
  }

  get title() {
    return this.#title;
  }

  get lines() {
    return this.#lines;
  }

  append(line: string) {
    this.#lines.push(line);
  }
}
