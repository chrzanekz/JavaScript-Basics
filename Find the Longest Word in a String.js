function findLongestWordLength(str) {
  let string = str.split(' ');
  let maxLength = 0;
  for (let i=0; i<string.length; i++){
    if(maxLength<string[i].length){
      maxLength=string[i].length;
    }
  }
  console.log(maxLength);
  return maxLength;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
