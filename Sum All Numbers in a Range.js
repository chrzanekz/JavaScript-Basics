function sumRanges(arr) {
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  let sum = 0;
  for (let i = min; i <= max; i++) {
    sum = sum + i;
  }
  console.log(sum);
  return sum;
}

sumAll([1, 4]);
