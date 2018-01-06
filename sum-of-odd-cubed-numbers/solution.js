function cubeOdd(arr) {
return arr.every(x => typeof x == 'number') ? 
arr.map(i => i * i * i)
.filter(num => num % 2)
.reduce((acc, cur) => acc + cur, 0)
: undefined;
}