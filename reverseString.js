function reverseString(str) {
  let string=[];
  for (let i=0;i<str.length;i++){
    string[(str.length-1)-i]=str[i];
  }
  return string.join('');
  
}

reverseString("hello");
