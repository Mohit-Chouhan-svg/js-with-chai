const myArr = [0, 1, 2, 3, 4, 5]

//const myarr = new Array(1, 2, 3)
myArr.push(6)
console.log(myArr);
myArr.pop()
console.log(myArr);

myArr.unshift(9)
console.log(myArr);
myArr.shift()
console.log(myArr);

console.log("A ",myArr);
const myA1 = myArr.slice(1, 3)
console.log(myA1);
console.log("B", myArr);

const myA2 = myArr.splice(1, 3)
console.log("C ",myArr);
console.log(myA2);



