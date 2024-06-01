// bài 1
for (let prop in ['a', 'b', 'c']) 
  console.log(prop);  
// bài 2
let maxValue = -Infinity; // Khoi tao giá trị lon nhất ban dau la am vô cùng
let minvalue = Infinity; // Khới tao gia trị nhó nhất ban đau la dương vo cung
for (const key in array) {
const value = array[key];
maxValue = Math.max(maxValue, value);
minvalue = Math.min(minvalue, value);
}
console. log("Giá tri lớn nhất:", maxValue);
console.log("Giá tri nhỏ nhất:", minValue);
// bài 3
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const newArray = [];
for (const key in array1) f
newArray.push(array1[key]);
for (const key in array2) f
newArray.push(array2[key]);
console.log(newArray);
// In ra: [1, 2, 3, 4, 5, 6]
