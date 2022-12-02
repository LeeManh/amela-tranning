// Bài 1: Viết hàm tính thể tích hình cầu, với tham số truyền vào là bán kính của hình cầu.

const calculateVolume = (r) => {
  if (typeof r !== "number" || r < 0) return 0;

  return (4 * Math.PI * Math.pow(r, 3)) / 3;
};

// Bài 2: Viết hàm truyền vào 2 số nguyên, tính tổng tất cả các số nguyên nằm giữa chúng. Ví dụ với
// tham số 3 và 8 ta có kết quả là 22 (bằng 4 + 5 + 6 + 7).

const range = (start, end) =>
  Array(end - start - 1)
    .fill()
    .map((_, idx) => start + idx + 1);

const sumNumberBetween = (number1, number2) => {
  if (
    typeof number1 !== "number" ||
    typeof number2 !== "number" ||
    number2 - number1 === 1 ||
    number2 < number1
  )
    return 0;

  const arrNumberBetween = range(number1, number2);
  return arrNumberBetween.reduce((sum, number) => sum + number, 0);
};

// Bài 3: Cho 1 số, kiểm tra xem số đó có phải là số nguyên tố hay không, kết quả trả về true hoặc false.
const checkPrimeNumber = (number) => {
  if (typeof number !== "number") {
    return false;
  } else if (number < 2) {
    return false;
  } else if (number === 2) {
    return true;
  } else if (number % 2 === 0) {
    return false;
  }

  for (let i = 3; i <= Math.sqrt(number); i += 2) {
    if (number % i == 0) {
      return false;
    }
  }
  return true;
};

// Bài 4: Cho 1 số nguyên dương bất kỳ. Tính tổng tất cả các số nguyên tố mà nhỏ hơn hoặc bằng tham
// số truyền vào.

const sumPrimeNumber = (number) => {
  if (typeof number !== "number" || number < 1) {
    return 0;
  } else if (number === 1) {
    return 1;
  } else if (number === 2) {
    return 3;
  }

  let result = 0;

  for (let index = 3; index <= number; index += 2) {
    if (checkPrimeNumber(index)) result += index;
  }

  return result;
};

// Bài 5: Cho 1 số nguyên dương, viết hàm tính tổng tất cả các ước số của số đó.
const sumDivisor = (number) => {
  if (typeof number !== "number") return 0;

  let sum = 0;
  for (let i = 1; i <= number; i++) {
    if (number % i == 0) {
      sum += i;
    }
  }
  return sum;
};

// Bài 6: Cho 1 số nguyên, hãy viết hàm sắp xếp lại các chữ số trong số nguyên đó sao cho ra 1 số nhỏ nhất có thể (không tính số 0 đầu tiên). Ví dụ với tham số 53751 thì kết quả là 13557.

function smallestNumber(number) {
  let freq = Array(10).fill(0);

  let is_pos = Boolean(number > 0);

  let num = Math.abs(number);

  while (num) {
    let d = num % 10;
    freq[d]++;
    num = parseInt(num / 10);
  }

  let result = 0;

  if (is_pos) {
    for (let i = 1; i <= 9; i++) {
      if (freq[i]) {
        result = i;
        freq[i]--;
        break;
      }
    }

    for (let i = 0; i <= 9; i++) while (freq[i]--) result = result * 10 + i;
  } else {
    for (let i = 9; i >= 1; i--) {
      if (freq[i]) {
        result = i;
        freq[i]--;
        break;
      }
    }

    for (let i = 9; i >= 0; i--) while (freq[i]--) result = result * 10 + i;

    result = -result;
  }

  return result;
}

console.log(smallestNumber(570107));
