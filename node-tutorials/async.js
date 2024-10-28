console.log("Hello Node JS")

process.nextTick(() => {
  console.log('cb1')
})

process.nextTick(() => {
  console.log('cb2')
  process.nextTick(() => {
    console.log('cb2-1')
  })
})

process.nextTick(() => {
  console.log('cb3')
})

Promise.resolve().then(() => {
  console.log("cb4");
})

Promise.resolve().then(() => {
  console.log("cb5");
  process.nextTick(() => {
    console.log('cb5-1')
  })
})

Promise.resolve().then(() => {
  console.log("cb6");
})


// cb1, cb2, cb3, cb4, cb5, cb6

// cb1, cb2, cb2-1, cb3, cb4, cb5, cb5-1, cb6

// 