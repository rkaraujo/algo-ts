/*
Write a function that takes an integer as input, and returns the number of bits that are equal to
one in the binary representation of that number. You can guarantee that input is non-negative.

Example: The binary representation of 1234 is 10011010010, so the function
should return 5 in this case.
*/

const dec2bin = (n: number): string => n.toString(2);

export const countBits = (n: number): number => {
  const bin = dec2bin(n);
  return bin.split('').filter((c) => c === '1').length;
};
