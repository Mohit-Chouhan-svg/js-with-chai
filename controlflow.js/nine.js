const myNum = [1, 2, 3];
const newNum = myNum.reduce( (acc, curr) => acc+curr,0);
console.log(newNum);

const course = [
    {
        courseName: 'js',
        price: 2000
    },
    {
        courseName: 'py',
        price: 999
    },
    {
        courseName: 'java',
        price: 3000
    }
];

const Total  = course.reduce( (acc, item) => acc+item.price,0);
console.log(Total);
