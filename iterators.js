const input = [1,2,3,4]

const squarer = (n) => {
  return n ** 2
}

const findEven = (n) => {
  if(n % 2 === 0) {
    return n
  }
}

console.log("Array.map => ", input.map(squarer))

// Map implementation

Array.prototype.myMap = function (func) {
  if(!this || !Array.isArray(this)) {
    throw new TypeError('Iterable is not an Array')
  }

  const output = []
  for(let i = 0; i < this.length; i++) {
    output.push(func(this[i]))
  }
  return output
}

Array.prototype.myFilter = function (func) {
  if(!this || !Array.isArray(this)) {
    throw new Error('Iterable is not an array')
  }

  const output = []

  for(let i = 0; i< this.length; i++) {
    if(func(this[i])) {
      output.push(this[i])
    }
  }

  return output
}

console.log("myMap => ", input.myMap(squarer))
console.log("myMap => ", input.myMap(findEven))
console.log("myMap => ", input.myFilter(findEven))
