const name1 = {
  firstName: "Geetha",
  lastName: "Srivathsan",
  printName: function () {
    console.log(this.firstName + ", " + this.lastName);
  },
};

// call() - used to borrow a function

const name2 = {
  firstName: "Srisha",
  lastName: "Srivathsan",
};
name1.printName();
name1.printName.call(name2);

// call() with args

const nameWithArgs = {
  firstName: "Geetha",
  printName: function (lastName, city) {
    console.log(this.firstName + ", " + lastName + " city: " + city);
  },
};

const name3 = {
  firstName: "Srisha",
};
const lastName = "Srivathsan";
const city = "Kmu";
nameWithArgs.printName(lastName, city);
console.log("Call with Args");
nameWithArgs.printName.call(name3, lastName, city);

//apply()
console.log("Apply");
nameWithArgs.printName.apply(name3, [lastName, city]);

// bind() - same as call() binds and returns a new function

console.log("bind");
const bindfn = nameWithArgs.printName.bind(name3, lastName, city);
bindfn();
