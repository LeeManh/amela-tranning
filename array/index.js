const validateArr = (arr) => {
  if (Array.isArray(arr)) return true;

  throw new Error("Invalid array");
};

// Bai 1 : Viết hàm tìm ra số nhỏ nhất trong mảng các số. Ví dụ:
// minNumbers([2, 1, 3]) => Kết quả trả về là 1
const findMinNumber = (arrNums) => {
  validateArr(arrNums);

  let min = arrNums[0];

  for (let index = 0; index < arrNums.length; index++) {
    //so sanh xem co so nào bé hơn min thì gán min lại 🍕
    if (arrNums[index] < min) {
      min = arrNums[index];
    }
  }

  return min;
};

// Bài 2. Viết hàm tìm ra số lớn thứ nhì trong mảng các số. Ví dụ:
// max2Numbers([2, 1, 3, 4]) => Kết quả trả về là 3
// fix later 🍳
const findSecondMaxNumber = (arrNums) => {
  validateArr(arrNums);

  if (arrNums.length < 2) throw new Error("Min length arr = 2");

  const secondMax = [...new Set(arrNums)].sort((a, b) => b - a)[1];

  return secondMax;
};

console.log(findSecondMaxNumber([4, 4, 4, 5, 2, 1, 3, 4]));

// Bài 3. Viết hàm truyền vào 1 mảng tên học viên, sắp xếp lại mảng này theo chiều ngược của bảng chữ cái. Ví dụ:
// sortStudents(['Nam', 'Hoa', 'Tuấn']) => Kết quả trả về là ['Tuấn', 'Nam', 'Hoa']
const sortStudents = (arr) => arr.sort().reverse();

// Bài 4. Tính tổng các số chia hết cho 5 từ 0 -> 100
const sumDivisor = () => {
  let sum = 0;

  for (let index = 0; index <= 10; index++) {
    if (index % 5 === 0) sum += 5;
  }

  return sum;
};

// Bài 5. Viết hàm cho phép truyền vào 1 mảng các số, kết quả trả về là 1 mảng mới với các số là số dư tương ứng khi chia mảng cũ cho 2
const calcRemainderArr = (arrNums) => {
  validateArr(arrNums);

  return arrNums.map((num) => num % 2);
};

// Bài 6. Cho 1 mảng các chuỗi. Viết hàm lọc ra các phần tử có độ dài lớn nhất. Ví dụ với tham số
// ['aba', 'aa', 'ad', 'c', 'vcd'] thì kết quả trả về ['aba', 'vcd'].
const elementLongest = (arr) => {
  validateArr(arr);

  const maxLength = arr.reduce(
    (maxLength, item) => (item.length > maxLength ? item.length : maxLength),
    1
  );

  return arr.filter((item) => item.length === maxLength);
};

// Bài 7: Viết chương trình JavaScript để lấy một phần tử ngẫu nhiên từ một mảng
// sample([3, 7, 9, 11]) => 3
// sample([3, 7, 9, 11]) => 9

const getRandomNumber = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const getRandomElement = (arr) => {
  validateArr(arr);

  const randomIndex = getRandomNumber(0, arr.length - 1);
  return arr[randomIndex];
};

// Bài 8: Viết chương trình đổi chỗ ngẫu nhiên vị trí của các phần tử trong mảng
const swapRandomPlaceElement = (arr) => {
  validateArr(arr);

  const randomIndex1 = getRandomNumber(0, arr.length - 1);
  let randomIndex2 = getRandomNumber(0, arr.length - 1);

  do {
    randomIndex2 = getRandomNumber(0, arr.length - 1);
  } while (randomIndex1 === randomIndex2);

  [arr[randomIndex1], arr[randomIndex2]] = [
    arr[randomIndex2],
    arr[randomIndex1],
  ];

  return arr;
};

// Bài 9: Viết chương trình JavaScript để lấy một mảng các phần tử xuất hiện trong cả hai mảng
// similarity([1, 2, 3], [1, 2, 4]) => [1,2]

const getArrayElementSimilar = (arr1, arr2) => {
  validateArr(arr1);
  validateArr(arr2);

  if (arr1.length === 0 || arr2.length === 0) return [];

  return arr1.filter((item) => arr2.includes(item));
};

// Bài 10: Viết một chương trình JavaScript để lấy sự phần tử không xuất hiện ở cả 2 mảng
// symmetricDifference([1, 2, 3], [1, 2, 4]) => [3,4]

const getArrayElementNoSimilar = (arr1, arr2) => {
  validateArr(arr1);
  validateArr(arr2);

  if (arr1.length === 0 || arr2.length === 0) return [];

  const arrSimilar = getArrayElementSimilar(arr1, arr2);
  const arr1Diff = arr1.filter((item) => !arrSimilar.includes(item));
  const arr2Diff = arr2.filter((item) => !arrSimilar.includes(item));

  return [...arr1Diff, ...arr2Diff];
};

// Bài 11: Viết một chương trình JavaScript trả về một tập hợp con của một chuỗi.
// sub_String("dog") => ["d","do","dog","o","og","g"]

const possibleCombinations = (str) => {
  if (typeof srt === "string") throw new Error("Input must string !");

  let combinations = [];
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length + 1; j++) {
      combinations.push(str.slice(i, j));
    }
  }
  return combinations;
};
console.log(possibleCombinations("dog"));

// console.log("dog".slice(0, 1));
// console.log("dog".slice(0, 2));
// console.log("dog".slice(0, 3));
// console.log("dog".slice(1, 2));
// console.log("dog".slice(1, 3));
// console.log("dog".slice(2, 3));

// Bài 12: Kiểm tra mảng xem có phải mảng tăng dần hay không
const checkAscendingArray = (arr) => {
  validateArr(arr);

  let isAscendingArray = true;
  if (arr.length === 0) isAscendingArray = false;

  for (let index = 0; index < arr.length; index++) {
    if (arr[index] > arr[index + 1]) {
      isAscendingArray = false;
      break;
    }
  }

  return isAscendingArray;
};

// Bài 13: Kiểm tra mảng xem có phải mảng sô lẻ giảm dần hay không
const checkDescendingOddArray = (arr) => {
  validateArr(arr);

  let isDescendingOddArray = true;
  if (arr.length === 0) isDescendingOddArray = false;

  for (let index = 0; index < arr.length; index++) {
    if (arr[(index = 1)] > arr[index] || arr[index] % 2 === 0) {
      isDescendingOddArray = false;
      break;
    }
  }

  return isDescendingOddArray;
};
