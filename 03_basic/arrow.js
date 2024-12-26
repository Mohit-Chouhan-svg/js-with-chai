const user = {
    username: "Mohit",
    price: 999,

    welcomemessage: function(){
        console.log(`${this.username}, welcome`);
    }
}
user.welcomemessage();
user.username = "sam";
user.welcomemessage();

console.log(this);

function set(){
    console.log(this);
}
set();
const addone = (num1, num2) =>{
    return num1 + num2;
}
console.log(addone(3, 4));

const two = () =>{
    console.log(this);
}
two();
