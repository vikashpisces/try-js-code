console.log('Index JS');



function handleInput(e) {
  fetch(`https://dummyjson.com/users/search?q=${e.target.value}`)
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error('Error Details: ', err))
}

function debounced(cb, delay = 500) {
  let timerId
  return function (...args) {
    clearTimeout(timerId)
    timerId = setTimeout(() => {
      cb(...args)
    }, delay)
  } 
}
function throttler(cb, delay = 500) {
  let waiting = false;
  return function (...args) {
    if (waiting) return
    
    cb(...args)
    waiting = true
    setTimeout(() => {waiting = false}, delay)
  }
}
var debouncedInputChange = debounced(handleInput)
var throttledFunction = throttler(handleInput, 1000)
// document.querySelector('.search').addEventListener('keyup', debouncedInputChange)
document.querySelector('.search').addEventListener('keyup', throttledFunction)