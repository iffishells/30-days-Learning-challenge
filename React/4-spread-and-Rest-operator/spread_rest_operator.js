console.log("connedted........");



const number = [1 , 2,4];

console.log(number);
const newnumber = [...number ,4];
console.log(newnumber);

//if i do this
// ... this is spread operator
const num1 = [1,2,3,4,5];
const num2 = [num1 , "end"];
console.log(num2);

//also example of spread operator
//these are the javascript operator
const person = {
  name : "Max" ,
  name1 : "iftikhar"
};

const newperson = {
  ...person,
  age:25
};
console.log(newperson);

//let one more example
const filter = (...args) =>
{
  return args.filter(el => el ==1);
  /// filte is a function on the array inside
  // tha paramter i make the inline function
  // which return if any element equal to 2
}
console.log(filter(1,2,3));
