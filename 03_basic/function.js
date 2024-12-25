// function isloggedin(username) {
//     if(!username){
//         return`enter a valid username`;
//     }
//     return `${username} ust login`;
// }
// const result = isloggedin("mohit");
// console.log(result);

function isloggedin(username = "toretto") {
    if(!username){
        return`enter a valid username`;
    }
    return `${username} just login`;
}
const result = isloggedin();
console.log(result);
