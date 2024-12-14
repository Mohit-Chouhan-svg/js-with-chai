const mydate = new Date()
console.log(mydate.toString());
console.log(mydate.toJSON());
console.log(mydate.toDateString());
console.log(mydate.toLocaleString());

const gettime = new Date(2024, 0, 14)
console.log(gettime);
console.log(gettime.toLocaleString());

const newdates = new Date()
console.log(newdates.getDay());
console.log(newdates.getMonth() + 1);