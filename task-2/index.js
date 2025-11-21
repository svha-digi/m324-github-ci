// index.js
export const sum = (a, b) => {
  return a + b
}
console.log(sum(1, 2))
console.log(myUndefinedVariable)
const unusedVariable = 42

// eqeqeq-Verstoß:
if (sum(2, '2') == 4) {
  console.log('loose equality')
}

// no-var-Verstoß:
var shouldBeLetOrConst = 1
