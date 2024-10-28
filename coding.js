// console.log("1")
// setTimeout(() => {
// 	console.log("2")
// }, 2);
// setTimeout(() => {
// 	console.log("3")
// }, 0);
// console.log("4")

// console.log("1")
// setTimeout(() => {
// 	console.log("3")
// }, 0);
// console.log("4")


// for(let i = 0; i<10; i++){
//   setTimeout(()=>{console.log(i)}, 0)
// }

// currying multiply(2)(3)(4)(5)


let multiply1 = a => b => b ? multiply1(a*b) : a

console.log(multiply1(1)(2)(3)(4)(10)(12)())

//Currying implementation another example
let multiply = function(a,b,c) {
  return a*b*c
}

function curry (fn) {
  return function currify(...args) {
    return args.length >= fn.length ?
      fn.bind(this, ...args) :
       (...args1) => currify.apply(this, args.concat(args1))
  }
}

function curry1(func) {
  return function curried(...args) {
    console.log(args);
    if (args.length >= func.length) {
      return func.apply(this, args);
    } else {
      console.log('calling else');
      return function(...args2) {
        return curried.apply(this, args.concat(args2));
      }
    }
  };
}


let curryMultiply = curry(multiply)
console.log(curryMultiply(2)(3)(4)(10))


