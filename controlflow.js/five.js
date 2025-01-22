//forEach loop

const coding = ["js", "py", "java", "cpp"];
// coding.forEach(function (item){
//      console.log(item);
// })

coding.forEach((item, index, arr)=>{
     console.log(item, index, arr);
})
// coding.forEach(print);

// function print(item){
//     console.log(item);
// }

const arr = [
    {
        languege: "js",
        languegefile: "jsfile"
    },
    {
        languege: "cpp",
        languegefile: "cppfile"
    },
    {
        languege: "py",
        languegefile: "pyfile"
    }
];
arr.forEach((item)=>{
     console.log(item.languegefile);
});
