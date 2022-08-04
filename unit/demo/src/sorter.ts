export class Sorter {
  constructor() {};

  public numbersHandler (array: Array<number>) {
    if (array.length) {
      array.sort((a, b) => {
        return a - b;
      })
  
      return array.filter((elem, index) => {
        return array.indexOf(elem) === index;
      });
    } else throw Error("Please provide an array of length > 0");
  }

  public stringsHandler (array: Array<string>) {
    if (array.length) {
      array.sort((a, b) => {
        return a.localeCompare(b);
      })
  
      return array.filter((elem, index) => {
        return array.indexOf(elem) === index;
      });
    } else throw Error("Please provide an array of length > 0");
  }
}
