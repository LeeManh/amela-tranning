// Bai 1
const checkStringExist = (string1, string2) => {
  if (typeof string1 !== "string" || typeof string2 !== "string") return false;

  return string1.split(" ").includes(string2);
};

//Bai2
const shortenString = (str) => {
  if (typeof str !== "string") return "";

  return str.slice(0, 8) + "...";
};

//Bai 3
const repeatString = (str) => {
  if (typeof str !== "string") return "";

  return str.repeat(10);
};

//Bai4
const repeatStringBai4 = (str) => {
  if (typeof str !== "string") return "";

  return Array(10).fill(str).join("-");
};

//Bai5
const repeatStringBai5 = (str, numberOfLoop) => {
  if (typeof str !== "string" || typeof numberOfLoop !== "number") return "";

  return Array(numberOfLoop).fill(str).join("-");
};

//Bai6
const reverseString = (str) => {
  if (typeof str !== "string") return "";

  return str.split("").reverse().join("");
};

//Bai7

const checkSymmetricString = (str) => {
  if (typeof str !== "string") return false;

  const _str = str.trim().toLowerCase().replace(" ", "");

  return _str === _str.split("").reverse().join("");
};

//Bai8
const checkCapitalization = (str) => {
  if (typeof str !== "string") return false;

  const strUpperCase = str.trim().toUpperCase();

  return str === strUpperCase;
};
