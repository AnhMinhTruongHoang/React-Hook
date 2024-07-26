const MyArray = [1,2,3,4];
// // const myList = MyArray.map((item) => item*2);


const myList = MyArray.map((item)=>{
    // console.log(item, index)
    return item *2
});




const ages = [32, 33, 16, 40];

// const result = ages.filter(checkAdult);
// function checkAdult(age) {
//  return age >= 18;
// }
const result = ages.filter((item)=>{
    return item >= 18;
    
});

console.log(result)
/////

const base_url = "localhost:8080";
const api = 'get-user'; fetch_page = 2;

const result1 = `${base_url}/${api}?page=${fetch_page}`;
console.log(result1)