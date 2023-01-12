function inArray(array1,array2){
    let newArray = [];
    array1.forEach((item)=>{
        if(array2.join(',').includes(item)){
            newArray.push(item);
        }
    })
    console.log(newArray);
      return newArray.sort();
    }


