const validateObj = (obj) => {
  if (typeof obj === "object" && !Array.isArray(obj) && obj !== null) {
    return true;
  }

  throw new Error("Invalid obj");
};
const validateArr = (arr) => {
  if (Array.isArray(arr)) return true;

  throw new Error("Invalid array");
};

// Bài 1. Viết hàm để lấy danh sách các key của object
const getKeysObj = (obj) => {
  validateObj(obj);

  return Ob;
  ject.keys(obj).join(",");
};

// Bài 2. Viết hàm để lấy danh sách các value của object
const getValuesObj = (obj) => {
  validateObj(obj);

  return Object.values(obj)
    .map((item) => (typeof item === "string" ? `'${item}'` : item))
    .join(",");
};

// bài 3. Viết hàm kiểm tra key có tồn tại trong Object không
const checkIsKeyInObj = (key, obj) => {
  validateObj(obj);
  if (typeof key !== "string") throw new Error("Key must string 🍌");

  return Object.hasOwnProperty(key);
};

// bài 4. Viết hàm kiểm tra Object có độ dài bao nhiêu
const getLengthObj = (obj) => {
  validateObj(obj);

  return Object.keys(obj).length;
};

// Bài 5. Cho mảng các user mỗi user có cấu trúc

const a = [
  {
    name: "manh",
    age: 26,
    isStatus: true,
  },
  {
    name: "huy",
    age: 25,
    isStatus: true,
  },
  {
    name: "long",
    age: 26,
    isStatus: false,
  },
];

const getUser = (arrUsers) => {
  validateArr(arrUsers);

  return arrUsers.filter((user) => user.age > 25 && user.isStatus);
};

console.log(getUser(a));
