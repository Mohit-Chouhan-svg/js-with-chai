//immediatly invoke function
(function chai(){
    //named iife
    console.log(`DB connected`);
})();
( (name) =>{
    console.log(`DB connected ${name}`);
    
})('mohit');
