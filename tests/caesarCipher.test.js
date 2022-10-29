import { caesarCipher } from "../scripts/caesarCipher";

test("shift by 1", () => {
  const plaintext = "defend the east wall of the castle";
  const ciphertext = "efgfoe uif fbtu xbmm pg uif dbtumf";
  expect(caesarCipher(plaintext, 1)).toBe(ciphertext);
});

test("shift by -1", () => {
  const plaintext = "bcdefghijklmnopqrstuvwxyza";
  const ciphertext = "abcdefghijklmnopqrstuvwxyz";
  expect(caesarCipher(plaintext, -1)).toBe(ciphertext);
});

test("shift by 7 with punctuation", () => {
  const plaintext =
    "If he had anything confidential to say, he wrote it in cipher, that is, by so changing the order of the letters of the alphabet, that not a word could be made out.";
  const ciphertext =
    "Pm ol ohk hufaopun jvumpkluaphs av zhf, ol dyval pa pu jpwoly, aoha pz, if zv johunpun aol vykly vm aol slaalyz vm aol hswohila, aoha uva h dvyk jvbsk il thkl vba.";
  expect(caesarCipher(plaintext, 7)).toBe(ciphertext);
});
