const MySym = Symbol("key1")

const JsUser = {
    name: "Mohit",
    Location: "Indore",
    email: "mohit@mail.com",
    isLogged: false,
    "Full name":"Mohit Chouhan",
    [MySym]: "mykey2"
}

console.log(JsUser.email);
//console.log(JsUser.Full nmae); giving error
console.log(JsUser["Full name"]);
console.log(JsUser["Location"]);
//Object.freeze to freeze changes.

console.log(JsUser[MySym]);

JsUser.greeting = function(){
    console.log("hello JsUsser");
}
JsUser.greetingTwo = function(){
    console.log(`hello ${this.name}`);
    
}
console.log(JsUser);

console.log(JsUser.greeting());

console.log(JsUser.greetingTwo());