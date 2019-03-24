const promiseToGetOnePositive = new Promise((resolve, reject) => {
  let rand = Math.floor(-100 + Math.random() * 200)
  if (rand > 0) {
    resolve(`successfully generated a positive number: ${rand}`)
  } else {
    reject(`failed to generate a positive number: ${rand}`)
  }
})

const promiseToResolve = new Promise((resolve, reject) => {
  resolve('because I promised to resolve')
})

const promiseToReject = new Promise((resolve, reject) => {
  reject('because I promised to reject')
})

promiseToGetOnePositive
  .then(
    messageReturnedIfResolved => {
      console.log(messageReturnedIfResolved)
      return promiseToReject
    },
    messageReturnedIfRejected => {
      console.log(messageReturnedIfRejected)
      return promiseToReject
    }
  )
  .then(messageReturnedIfResolved => {
    // will never be executed
    console.log('skip me')
  })
  .then(messageReturnedIfResolved => {
    // will never be executed
    console.log('skip me again')
  })
  .catch(reason => {
    console.log(reason)
    return promiseToResolve
  })
  .finally(() => {
    console.log('finished')
  })
  .then(
    messageReturnedIfResolved => {
      console.log(messageReturnedIfResolved)
      console.log('this is always executed')
    },
    messageReturnedIfRejected => {
      // will never be executed
      console.log(messageReturnedIfRejected)
      console.log('skip me again and again')
    }
  )
  .finally(() => {
    console.log('finished again')
  })
