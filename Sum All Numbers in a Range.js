function sumAll(arr) {
  let bigger=0;
  let smaller=0;
  if (arr[0]>arr[1]) {bigger=arr[0], smaller=arr[1]}
  else bigger=arr[1], smaller=arr[0];
  let sum=0;
  for (let i=smaller;i<=bigger;i++){
    sum=sum+i;
    
  }
  console.log(sum);
  return sum;
}

sumAll([1, 4]);
