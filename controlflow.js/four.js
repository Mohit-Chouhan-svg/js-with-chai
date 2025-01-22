//for-in loop
//it is used in objects
//not used in maps
//give keys

const myObject = {
    js: "Javascript",
    py: "python",
    cpp: "c++"
}
for (const key in myObject) {
    console.log(`${key} shortcut for ${myObject[key]}`);
}

const arr = ["flash", "batman"];
for (const key in arr) {
    console.log(arr[key]);
}