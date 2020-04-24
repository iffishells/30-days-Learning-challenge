console.log("Conneted........");


const number = [1,2,3,3,3,3,3]
console.log(number);

//let do litter more

const [num1 , num2 , num3 ] = [1,2,3]
console.log(num1);
console.log(num2);
console.log(num3);


//further move on
//here two types of varibal instead generally
// have two types of the varibale one of his primitive and
// second copr variable for example
const num0 = "Num1"   //this is primitive varibal
console.log(num0);

const num4 = num0;    ///this is copy the varible
console.log(num4);
//now if we change the variable4 then although we changed the  num4 but num0 will
// also change

//in order to avoid this we will use operator

const  person =
{
  name : "Max"
};
//now secondperson still giving the max although we changed
// name in the person
// //

// const secondperson = person;

const secondperson = {
  ...person
};

person.name = "Menu";
console.log(secondperson);
