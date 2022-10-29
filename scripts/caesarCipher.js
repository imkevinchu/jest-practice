const uppercase = () =>
  [...Array(26)].map((n, i) => `${String.fromCharCode(i + "A".charCodeAt())}`);
const lowercase = () =>
  [...Array(26)].map((n, i) => `${String.fromCharCode(i + "a".charCodeAt())}`);

const mod = (a, b) => {
  const c = a % b;
  return c < 0 ? c + b : c;
};

const cipher = (array, shift) => {
  const cipher = {};
  array.forEach((value, index) => {
    cipher[value] = array[mod(index + shift, array.length)];
  });
  return cipher;
};

const runCipher = (shift) => {
  return {
    ...cipher(uppercase(), shift),
    ...cipher(lowercase(), shift),
  };
};

const processCharacter = (cipher, character) =>
  cipher.hasOwnProperty(character) ? cipher[character] : character;

export const caesarCipher = (text, shift) => {
  const caesar = runCipher(shift);
  return [...text].map((c) => processCharacter(caesar, c)).join("");
};
