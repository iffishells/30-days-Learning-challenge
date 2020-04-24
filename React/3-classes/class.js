console.log("its working........");


class Human {
  constructor() {
    this.gender = "male";

  }
  printgender()
  {
    console.log(this.gender);
  }
}
//inheritance methood
class person extends Human {
  constructor() {
    super(); //need when inheritance
    this.name = "Max";
    this.gender = "Female";
  }
  printmyname()
  {
    console.log(this.name);
  }
}

const p1= new person("iftikhar");
p1.printmyname();
p1.printgender();



// using arrow function we dont need to
// constructor and this keyword


class Human {
  gender = "male";


  printgender = () =>
  {
    console.log(this.gender);
  }
}
//inheritance methood
class person extends Human {
    //super(); //dont need super in this scene
    name = "Max";
    gender = "Female";

  printmyname = () =>
  {
    console.log(this.name);
  }
}

const p1= new person("iftikhar");
p1.printmyname();
p1.printgender();
