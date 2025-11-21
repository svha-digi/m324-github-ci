// index.js
export const sum = (a, b) => {
  return a + b
}
console.log(sum(1, 2))

// eqeqeq-Verstoß:
if (sum(2, '2') === 4) {
  console.log('loose equality')
}
