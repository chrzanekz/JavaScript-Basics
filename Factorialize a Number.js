function factorialize(num) {
  let suma=1;
  if(num>=0){
    if (num==0 || num == 1) return 1;
    else if (num>2){
      for (let i=1;i<=num;i++){
        suma=suma*i;
      } console.log(suma); return suma;
    }
  }
  else return "cannot do this";
  
}

factorialize(5);
