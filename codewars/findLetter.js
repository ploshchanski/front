let array = ['a','b','c','d','f'];
let newArray = [];
let result;
array.forEach((item)=>{
    newArray.push(item.charCodeAt())
})
for(let i = 0; i< newArray.length; i++){
    if(newArray[i]+1 != newArray[i+1]){
        console.log(newArray[i]+1)
        result = String.fromCharCode(newArray[i]+1);
        break;
    }
}
console.log(newArray)
console.log(result)
