// The old way:

// const person = { name: "Eric", age: 26, eyeColor: "black", like: "girl" };
// const name = person.name;
// const age = person.age;
// console.log(name); //Eric
// console.log(age); //26

// With destructuring:

const person = { name: "Eric ", age: 26, eyeColor: "black", like: "girl" };
const { age, name } = person;
console.log(name); //Eric
console.log(age); //26


   // old way
//    const hanoi = city [0];
//    const danang = city [1];
//    const hcm = city [2];
   
//    //With destructuring:
   
   const city= [ 'hanoi', 'danang', 'camau', 'hcm1'];
   // When destructuring arrays, the order that variables are declared is important.
   const [x, y,  ,z] = city;
   console.log(x,y,z);
   
   // 4.ex
   
   const react = ["facebook", 'all-in-one', 'javascript'];
   const [, ,tech] = react;
    
   console.log(tech);
   
   //complete this block code to print "bugs’
   const dev = { salary: 2000, tool : "laptop", like: "bugs" };
   const{like:Eric} = dev;
   console.log(Eric)
   