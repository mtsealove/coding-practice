/*
MenOfPassion(A[], n) {
    sum <- 0;
    for i <- 1 to n - 2
        for j <- i + 1 to n - 1
            for k <- j + 1 to n
                sum <- sum + A[i] × A[j] × A[k]; # 코드1
    return sum;
}
 */

const fs = require('fs');

const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');
const n = BigInt(input[0]);
let sum = BigInt(0);

for(let i = 2n; i<=n-1n; i+=1n) {
    sum += ((n-i)*(n-i+1n))/2n;
}
console.log(`${sum}`);
console.log(3);
