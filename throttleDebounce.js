let throttleClick = 0
let debounceClick = 0
let throttleInterval
let debounceInterval

document
  .querySelector('.btn-1')
  .addEventListener('click', handleThrottle)

document
  .querySelector('.btn-2')
  .addEventListener('click', handleDebounce)


function handleThrottle (e,delay = 3000) {
  throttleClick++
  if(throttleInterval) {
    return
  }

  setTimeout(function () {
    console.log("Throttling",throttleClick)
    clearTimeout(throttleInterval)
    throttleInterval = undefined
  }, delay)
}

function handleDebounce (e,delay = 3000) {
  debounceClick++
  clearTimeout(debounceInterval)
  debounceInterval = undefined
  debounceInterval = setTimeout(function () {
    console.log("Debouncing",debounceClick)
  }, delay)

  // let debounceInterval
  // return function() {
  //   clearTimeout(debounceInterval)
  //   debounceInterval = setTimeout(function () {
  //     console.log("Debouncing",debounceClick++)
  //   }, delay)
  // }
}