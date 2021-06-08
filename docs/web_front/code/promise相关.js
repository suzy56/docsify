/* function sleep (duration) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      resolve()
    }, duration);
  })
}

sleep(1000).then(() => console.log('醒了')) */


/* var r = new Promise(function (resolve, reject) {
  console.log('a')
  resolve()
})
setTimeout(() => {
  console.log('b')
}, 20);

r.then(() => {
  console.log('c')
  setTimeout(() => {
    console.log('d')
  }, 0);
})
console.log('e')
 */

/* setTimeout(() => {
  console.log('d')
}, 0);

var r = new Promise(function (resolve, reject) {
  resolve()
})

r.then(() => {
  var begin = Date.now()
  while (Date.now() - begin < 1000);
  console.log('c1')
  new Promise(function (resolve, reject) {
    resolve()
  }).then(() => {
    console.log('c2')
  })
}) */

/* function sleep (duration) {
  return new Promise(function (resolve, reject) {
    console.log('b')
    setTimeout(resolve, duration);
  })
}
console.log('a')
sleep(2000).then(() => {
  console.log('c')
}) */

// function trafficLight (color, duration) {
//   return new Promise(function (resolve, reject) {
//     console.log(color)
//     setTimeout(resolve, duration);
//   })
// }
// // trafficLight('green light on !', 3000)
// async function start () {
//   await trafficLight('green light on !', 3000)
//   await trafficLight('yellow light on !', 1000)
//   await trafficLight('red light on !', 2000)
//   start()
// }

// start()

function sleep (duration) {
  return new Promise(function (resolve, reject) {
    setTimeout(resolve, duration);
  })
}

async function changeLight () {
  while (1) {
    console.log('green')
    await sleep(3000)
    console.log('yellow')
    await sleep(1000)
    console.log('red')
    await sleep(2000)
  }
}

changeLight()