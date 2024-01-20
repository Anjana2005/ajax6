// // // //"use strict"
// // // a=5;
// // // console.log(a);

// // var Fname="Anjana";
// // console.log(Fname.length);
// // console.log(typeof(Fname));

// // var data=" This is a txt message"
// // // console.log(data.length);
// // // console.log(data.indexOf('txt'));
// // // console.log(data.replace("txt","text"));
// // // console.log(data);
// // // console.log(data.split(' '));
// // console.log(data);
// // // console.log(data.trim());
// // console.log(data.trimStart());
// let fruits=["Apple","Mango","Orange","Grapes"];
// console.log(Array.isArray(fruits));
// fruits.forEach(function(item){
//     console.log(item)
// })
// let numb=[20,30,58,65];
// numb.forEach(function(item,ind){
//     numb[ind]=item<50
// })
// console.log(numb)


// var obj1=JSON.parse(`{"name":"Anjana","age":10}`);
// console.log(obj1);
// var obj2=JSON.stringify(obj1);
// console.log(obj2)
// function sum(a,b){
//     var s=a+b;
//     console.log(`The sum is ${s}`);
// }

// sum(10,24);
// var add=(c,d)=>{
//     console.log(`The sum is ${c+d}`);
// }
// sum(5,10);

// var sub=(e,d)=>{
//     console.log(`The sum is ${e-d}`);
// }
// sum(10,4);
// spread operator
// var a=[5,6,7];
// var b=[45,67,89];
// var c=[...a,...b];
// console.log(c);
// var d=[2,3,...b];
// console.log(d);
//array destructuring
var [q,r,s]=[2,3,4];
console.log(r);
var[p,,w]=[2,3,8];
console.log(w);
var [h,,j,...l]=[1,2,3,4,5,6,7]
console.log(l);