// object
let employee: object;

employee = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25,
    jobTitle: 'Web Developer'
};

console.log(employee.hireDate);
console.log(employee.toString);

let result: object;
result = 10.123


// never
let loop = function forever() {
  while (true) {
    console.log('Hello')
  }
}

function fn(a: string | number): boolean {
  if (typeof a === "string") {
    return true;
  } else if (typeof a === "number") {
    return false;
  }   
}

function checkStatus(status: string) {
  switch (status) {
    case "success":
      console.log("Operation succeeded.");
      break;
    case "error":
      console.error("Operation failed.");
      break;
    default:
      const _exhaustiveCheck: never = status;
  }
}

/**
 * union
 */

function add1(a: any, b: any) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    if (typeof a === 'string' && typeof b === 'string') {
        return a.concat(b);
    }
    throw new Error('Parameters must be numbers or strings');
}

add1(true, false);