import { EMPTY_ARRAY_ERROR_MESSAGE } from "./constants";

export class Sorter {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() { }

  public numbersHandler(array: Array<number>) {
    if (array.length) {
      array.sort((a, b) => {
        return a - b;
      })

      return array.filter((elem, index) => {
        return array.indexOf(elem) === index;
      });
    } else throw new Error(EMPTY_ARRAY_ERROR_MESSAGE);
  }

  public stringsHandler(array: Array<string>) {
    if (array.length) {
      array.sort((a, b) => {
        return a.localeCompare(b);
      })

      return array.filter((elem, index) => {
        return array.indexOf(elem) === index;
      });
    } else throw new Error(EMPTY_ARRAY_ERROR_MESSAGE);
  }
}
