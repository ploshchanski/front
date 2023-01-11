let array = ['a','b','c','d','f'];
let newArray = [];
let result;
array.forEach((item,index,array)=>{
    newArray.push(item.charCodeAt())
})
//for(let i =0; i< array.length; i++){
//  newArray.push(array.join('').charCodeAt([i]));
//}
console.log(newArray)
