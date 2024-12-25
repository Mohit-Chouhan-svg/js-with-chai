//singleton in case of constructor
//const myuser = Object(); //as constructor

const tinderuser = {}

tinderuser.id = "123abc"
tinderuser.name = "Mohit"
tinderuser.email = "gmail.com"

console.log(tinderuser);

const anotheruser = {
    id: "2233",
    fullname: {
        userfullname: {
            firstname: "Mohit",
            lastname: "Chouhan"
        }
    }
}
console.log(anotheruser.fullname);
console.log(anotheruser.fullname.userfullname);
console.log(anotheruser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {4: "a", 5: "b"}
const obj3 = {6: "a", 7: "b"}

const obj4 = Object.assign({}, obj1, obj2)
console.log(obj4);

const obj5 = {...obj1, ...obj2, ...obj3}
console.log(obj5);

const arr = [
    {id: "000",
        nmae: "toretto"
    },
    {id: "000",
        nmae: "toretto"
    },

]
arr[1].id

console.log(Object.keys(tinderuser));
console.log(Object.values(tinderuser));
console.log(Object.entries(tinderuser));

console.log(tinderuser.hasOwnProperty('user'));


const course = {
    coursename: "js-in-hindi",
    courseInstructor: "Hitesh",
    price: "999"
}

const {courseInstructor: Instructor} = course
console.log(Instructor);

//Json API
{
    "name": "mohit",
    "course": "js-in-hindi"
}
