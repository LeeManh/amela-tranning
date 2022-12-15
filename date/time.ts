// floating point
// get decimal - getnumber -> 1.01 [1,0.01]

// yarn add ts-node-dev

// Bài 1: Viết một hàm JavaScript để lấy ngày hiện tại
// Lưu ý: Truyền dấu phân tách làm đối số.
// getCurrentDate("/") => 17/08/2020

function getCurrentDate(option?: string): string {
  const dateNow = new Date().toLocaleDateString("en-GB");

  const [day, month, year] = dateNow.split("/");

  return [day, month, year].join(option ? option : "/");
}

// console.log(getCurrentDate());

// Bài 2: Viết một hàm JavaScript để lấy số ngày trong tháng
// getDaysInMonth(8, 2020) => 31

const getDaysInMonth = (month: number, year?: number): number => {
  if (!year) {
    year = new Date().getFullYear();
  }

  return new Date(year, month, 0).getDate();
};

console.log(getDaysInMonth(2, 2022));

// 2022, 11, 15 --> 2022/12/15
// 2022, 11, 0 --> 2022/11/30
// 2022, 10, 0 --> 2022/10/31
// 2022, 1, 0 --> 2022/1/31

// 2022, 1, 0 --> 2021/12/31

// date = 0 ->  ngay cuoi cung cua thang truoc

// Bài 3: Viết một hàm JavaScript để kiểm tra xem một ngày có phải là ngày cuối tuần hay không.
// [0,1,2,3,4,5,6] -> CN,T2, ...,T7

interface ITimeCheck {
  year?: number;
  month: number;
  date: number;
}

const checkIsWeekend = (timeCheck: ITimeCheck): boolean => {
  let { year, month, date } = timeCheck;

  if (!year) {
    year = new Date().getFullYear();
  }

  const indexDate = new Date(year, month - 1, date).getDay();

  return [0, 6].includes(indexDate);
};

// console.log(checkIsWeekend({ year: 2022, month: 12, date: 19 }));

// Bài 4: Viết một hàm JavaScript sẽ trả về số phút theo giờ và phút

const getMinutes = (hour: number, minute: number) => {
  return hour * 60 + minute;
};

console.log(getMinutes(2, 30));

// Bài 5: Viết một hàm JavaScript để đếm số ngày đã trôi qua kể từ đầu năm.
const countNumberDaysPass = () => {
  const today = new Date();
  const start = new Date(today.getFullYear(), 0, 1);

  const numberDays = Math.ceil((today.valueOf() - start.valueOf()) / 8.64e7);

  return numberDays;
};

// console.log(countNumberDaysPass());

// Bài 6: Viết chương trình JavaScript để tính tuổi.

const calculate_age = (dateInput: Date) => {
  const today = new Date();
  const monthToday = today.getMonth();
  const dateToday = today.getDate();

  const birthday = new Date(dateInput);
  const monthBirthday = birthday.getMonth();
  const dateBirthday = birthday.getDate();

  let age = today.getFullYear() - birthday.getFullYear();

  if (
    (monthToday === monthBirthday && dateToday >= dateBirthday) ||
    monthToday > monthBirthday
  ) {
    age++;
  }

  return age;
};

console.log(calculate_age(new Date(1997, 5, 28)));

// 15/12/2022 - 28/06/1997
// 2022 - 1997 = 25 -> neu thoi gian hien tai >= ngay/thang sinh nhat -> + 1 tuoi = 26 tuoi

// Neu < thang thi return age
// Neu = thang thi xet ngay xem co >= ngay sinh nhat return a + 1
// Neu > thang thi return age + 1

// Bài 7: Viết một hàm JavaScript để lấy ngày bắt đầu của tuần.
// let dt = new Date();
// startOfWeek(dt)
const startOfWeek = (dt: Date) => {
  const d = new Date(dt);
  const day = d.getDay();

  if (day === 0) {
    return d.getDate();
  }

  return d.getDate() - day + 1;
};

// console.log(startOfWeek(new Date(2022, 11, 12)));

// Bài 8: Viết một hàm JavaScript để lấy ngày kết thúc tháng
// dt = new Date();
// endOfMonth(dt);

const endOfMonth = (dt: Date) => {
  return new Date(dt.getFullYear(), dt.getMonth() + 1, 0).getDate();
};

// console.log(endOfMonth(new Date()));

// Bài 9: Viết hàm đếm ngược thời gian đến tết dương lịch

const countDownNewYear = () => {
  const countDownDate = new Date("Jan 1, 2023 00:00:00").getTime();

  const now = new Date().getTime();
  const distance = countDownDate - now;
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  return { days, hours, minutes, seconds };
};

// setInterval(() => {
//   console.log(countDownNewYear());
// }, 1000);

// Bài 10: Viết hàm có 2 tham số, tham số đầu tiên là 1 chuỗi thời gian t dạng ''giờ:phút:giây'', tham số thứ 2 là 1 số x <= 1000. Kết quả trả về là 1 chuỗi biểu thị thời gian sau x giây kể từ thời điểm t. Ví dụ với t = ''9:20:56'' và x = 7 thì kết quả là ''9:21:3''

const plusSecond = (t: string, x: number) => {
  if (x > 1000) {
    throw new Error("x bé hơn 1000");
  } else if (x < 0) {
    throw new Error("x phải lớn hơn hoặc bằng 0");
  }

  const [hours = 0, minutes = 0, seconds = 0] = t.split(":");

  const d = new Date();
  d.setHours(+hours);
  d.setMinutes(+minutes);
  d.setSeconds(+seconds);
  console.log(d);

  d.setSeconds(d.getSeconds() + x);

  const hoursPlus = d.getHours();
  const minutesPlus = d.getMinutes();
  const secondsPlus = d.getSeconds();

  return `${hoursPlus}:${minutesPlus}:${secondsPlus}`;
};

console.log(plusSecond("9:20:56", 232));

// Bài 11. Viết hàm reset data. Input là object. Output là object sau khi được reset

const obj = {
  name: "quan",
  age: 25,
  hobby: ["code", "play", "game"],
  family: {
    name: "tuna",
    age: 12,
    parent: {
      name: "Hoa",
    },
  },
};

const isObject = (value: unknown): boolean => {
  return typeof value === "object" && !Array.isArray(value) && value !== null;
};

const resetData = <T extends {}>(input: T) => {
  if (!isObject(input)) {
    throw new Error("Input không phải là object");
  }

  for (const [key, value] of Object.entries(input)) {
    if (typeof value === "string") {
      input[key] = "";
    } else if (typeof value === "number") {
      input[key] = 0;
    } else if (Array.isArray(value)) {
      input[key] = [];
    } else if (isObject(value)) {
      resetData(value as {});
    }
  }

  return input;
};

console.log(resetData(obj));

//dung de quy de xu ly obj sau
// nếu value là string -> ''
// nếu value là number -> 0
// nếu value là array -> []

// ---> obj = {
//   name : "",
//   age : 0,
//   hobby : [],
//   family : {
//     name : "",
//     age : 0,
//     parent : {
//       name : ""
//     }
//   }
// }
