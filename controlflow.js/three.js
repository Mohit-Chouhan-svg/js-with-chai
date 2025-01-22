//for of loop

const arr = [1, 2, 3, 4, 5];
for (const nums of arr) {
    console.log(nums);
}

const greeting = "Hello World";
for (const greet of greeting) {
    console.log(`each greet word is ${greet}`);
}

const map = new Map();
map.set('IN', 'India');
map.set('USA', 'United Staate of America');

for (const [key, values] of map) {
    console.log(key, ":-", values);
}
//for of not used for objects