function repeatStringNumTimes(str, num) {
    let string=[];
    if (num<=0) {return ''}
    else {
      for (let i=0; i<num; i++){
        string.push(str);
        }
      return console.log(string.join(''));
    }
 }

repeatStringNumTimes("*", 5);
