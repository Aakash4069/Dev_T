


let tony = {
    name: "Tony",
    lastName: "Stark",
    friends: ['steve', 'Bruce', 'Peter'],
    age: 45,
    isAvenger: true,
    abc: undefined,
    address: {
        state: "New York",
        city: "Long Island"
    },
    sayHi: function fn() {
        console.log('I am iron man');
        return "part of journy is the end"
    },


}
// console.log(tony);

// console.log(tony.name);
// console.log(tony.age);
// console.log(tony.address);
// console.log(tony.address.city);

// second methon to access object value 

// console.log(tony['name']);
// console.log(tony['friends']);
// console.log(tony['friends'][0]);
// console.log(tony['age']);
// console.log(tony['address']);
// console.log(tony['address']['city']);
// console.log(tony['sayHi']());


// method to access to key only

// method first 

// let karr = Object.keys(tony);
// console.log(karr);
// method second
// for(let k in tony){
//     // console.log(tony.k);         this will not display keys value becouse k is not any key in the tony object

//     // console.log(tony[k]);
//     console.log(tony[k]);
// }

// third method

let karr = Object.keys(tony);

for (let i = 0; i < karr.length; i++) {
    let key = karr[i];
    console.log(tony[key]);
}


