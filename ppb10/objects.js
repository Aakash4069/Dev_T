


let tony={
    name:"Tony",
    lastName:"Stark",
    friends:['steve','Bruce','Peter'],
    age:45,
    isAvenger:true,
    abc:undefined,
    address:{
        state:"New York",
        city:"Long Island"
    },
    sayHi:function fn(){
        console.log('I am iron man');
        return "part of journy is the end"
    },


}
// console.log(tony);

// console.log(tony.name);
// console.log(tony.age);
// console.log(tony.address);
// console.log(tony.address.city);

// sscond methon

console.log(tony['name']);
console.log(tony['friend']);
console.log(tony['age']);
console.log(tony['address']);
console.log(tony['address']['city']);
console.log(tony['sayHi']());
