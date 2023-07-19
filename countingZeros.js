function countZerosToN(num) {
  if (num < 1)
    return 0;

  let count = 0;
  for (let i = 1; i <= num; i++) {
    let currentNum = i;

    while (currentNum > 0) {
      if (currentNum % 10 === 0) {
        count++;
      }
      currentNum = Math.floor(currentNum / 10);
    }
  }

  return count;
}

const n = 20;
const totalZeros = countZerosUpToN(n);
console.log(`Total number of zeros from 1 to ${n}: ${totalZeros}`);

