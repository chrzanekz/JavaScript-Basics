function truncateString(str, num) {
  let string=[];
  for (let i=0; i<num; i++){
    string[i]=str[i];
  }
  if (num<str.length){string=string.concat('...');}
  string=string.join('')
  console.log(string)
  return string;
}

truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2)
