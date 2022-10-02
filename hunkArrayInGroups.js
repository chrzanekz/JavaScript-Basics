function chunkArrayInGroups(arr, size) {
  let newArray=[];
  for (let i=0; i<arr.length; i+=size){
        newArray.push(arr.slice(i,i+size));
        
  }
  
  return newArray;
}

chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2)
