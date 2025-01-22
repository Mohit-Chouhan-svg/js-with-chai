if(isLogged){
    console.log("you logged in");
}
//truthy values
//'0', "false", 1, [], {}, function(), " "

//false values
// "", 0, null, Nan, undefine

//2==2 ? true : false

const temp = 5??10;
const num2 = null ?? 10;
const num3 = undefine ?? 5 ?? 10;