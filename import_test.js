
export const EPIC_NUMBER = 1; 
// export - allows item to be imported into another file
// const - An immutable value. EPIC_NUMBER cannot be changed from 1

export function add(num1, num2) {
// function declaration syntax. 'export' is optional, as explained above, but the format is:
  // function [function_name]([arguments]) {}
  return num1 + num2;
}
