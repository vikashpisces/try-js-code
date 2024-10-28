let user = {
  name: 'Vikash',
  city: 'Bangalore'
}

function displayName (state) {
  console.log(`${this.name} from ${this.city}, ${state}, ${arguments[2]}`)
}

console.log("bind result")
let displayNameCopy = displayName.bind(user, 'karnataka')
displayNameCopy()

Function.prototype.myBind = function (...args) {
  let context = this
  return function () {
    context.apply([...args[0], ...args[1]])
  }
}


console.log('myBind result')
let displayNameUsingMyBind = displayName.myBind(user)
displayNameUsingMyBind()