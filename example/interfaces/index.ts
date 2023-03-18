interface StringFormat {
  (str: string, isUpper: boolean): string
}

let lowerCase: StringFormat;

lowerCase = function (str:string) {
  return str.toLowerCase();
}

console.log(lowerCase('Hi', false))
