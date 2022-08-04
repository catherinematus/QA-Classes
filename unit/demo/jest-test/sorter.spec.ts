import { Sorter } from "../src/sorter";

let sorter: any = null;

describe("Number sorter tests", () => {
  beforeAll(() => {
    sorter = new Sorter;
  });

  test("Should correctly sort positive numbers", () => {
    expect(sorter.numbersHandler([5, 12, 3, 1])).toStrictEqual([1, 3, 5, 12]);
  });

  afterAll(() => {
    sorter = null;
  });
})
