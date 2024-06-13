const x=0;
let y = '';


y = x > 5 ? ">5" : "<5" 
console.log(y);


let userAdmin = {
    admin() {
    alert("I am Eric");
    }
   };
   let userGuest = { };
//    userAdmin.admin();
   userGuest.admin?.();

// obj?.a?.b?.c ///
// obj?.a?.b?.c ?? 'not found' ///


let obj = {
    name: 'minh',
    chanel: 'hdit',
    address:{
        st: 'abc',
        province:'ht',
        no: '2b'
    }
}

console.log(obj?.address?.xtdsf)

test?.map.(item=>item)