import { concatenator } from "./concatenator";

export function customChecker(firstWord: string, secondWord: string, result: string) {
  if (concatenator(firstWord, secondWord) === result) {
    console.log('Test passed!');
  } else {
    console.log('Test failed!');
  }
}