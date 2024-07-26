const numbersOne = [1, 2, 3];
const numbersTwo = [4, 5, 6];
const trArr =[...numbersOne,...numbersTwo]
const foArr =[...numbersTwo,...numbersOne]

// let MyArray= ['n', 'm', 'h']
// MyArray.push('am')
// MyArray=['am',...MyArray]


// console.log(trArr, foArr, MyArray)


test = {name:'a' ,address:"asdas"};

console.log({...test});

// const myVehicle = {
//     brand: 'Ford',
//     model: 'Mustang',
//     color: 'red'
//    }
//    const updateMyVehicle = {
//     type: 'car',
//     year: 2021,
//     color: 'yellow'
//    }
//    const update = {...myVehicle, ...updateMyVehicle}

//    console.log(update)


///update

const myVehicle = {
    brand: 'Ford',
    model: 'Mustang',
    color: 'red'
   }

   const result3 ={...myVehicle, color: 'pink'}
   console.log(result3)

   function sum(x, y, z) {
    return x + y + z;
   }
   const numbers = [1, 2, 3];
   console.log(sum(...numbers ));


console.log( dev ) //bugs