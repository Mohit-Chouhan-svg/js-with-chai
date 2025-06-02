const promiseOne = new Promise(function(resolve, reject){
setTimeout(function(){
    console.log("promise is generated");
    
    resolve({username: "Mohit", city: "Indore"});
} , 1000);
})
promiseOne.then(function(user){
    console.log(user);
})
const promiseTwo = new Promise(function(resolve, reject){
setTimeout(function(){
    console.log("promise is generated");
    const error = false
    if(!error){
    resolve({username: "Mohit", city: "Indore"});
    }
    else{
        reject("Something went wrong");
    }
} , 1000);
})
promiseTwo
.then(function(user){
    console.log(user);
    return user.username;
})
.then((username) => console.log(username)
)
.catch((err) => console.log(err))
.finally(() => console.log("rej or res done")
)
const promiseThree = new Promise(function(resolve, reject){
setTimeout(function(){
    console.log("promise is generated");
    const error = true
    if(!error){
    resolve({username: "Mohit", city: "Indore"});
    }
    else{
        reject("Something went wrong");
    }
} , 1000);
})
async function promisethree(){
    try {
        const prom = await promiseThree;
        console.log(prom);
    } catch (error) {
        console.log(error);
    }
}
promisethree();
fetch("https://api.github.com/users/hiteshchoudhary")
.then((data) =>{
    return data.json();
})
.then((data) => {
    console.log(data);
    
})
.catch((error) => {
    console.log(error);
})