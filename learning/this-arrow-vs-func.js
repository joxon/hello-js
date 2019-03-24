;(function fun() {
  console.log('===fun starts===')

  function funcThis1() {
    console.log(this)
  }

  const funcThis2 = function() {
    console.log(this)
  }

  const funcThis3 = function logThis3() {
    console.log(this)
  }

  const arrowThis1 = () => {
    console.log(this)
  }

  funcThis1()
  funcThis2()
  funcThis3()
  ;(function funcThis4() {
    console.log(this)
  })()

  arrowThis1()
  ;(() => {
    console.log(this)
  })()

  console.log('===fun ends===')
})()
;(function() {
  console.log('===obj starts===')

  const obj = {
    thisInPropertyNamedFunction: function f() {
      console.log(this)
    },
    thisInPropertyAnonymousFunction: function() {
      console.log(this)
    },
    thisInMethodFunction() {
      console.log(this)
    },
    thisInArrowFunction: () => {
      console.log(this)
    }
  }
  obj.thisInPropertyNamedFunction() // obj
  obj.thisInPropertyAnonymousFunction() // obj
  obj.thisInMethodFunction() // obj
  obj.thisInArrowFunction() // window

  console.log('===obj ends===')
})()
;(function() {
  console.log('===class starts===')

  class Person {
    constructor() {
      this.thisInPropertyNamedFunction = function f() {
        console.log(this)
      }
      this.thisInPropertyAnonymousFunction = function() {
        console.log(this)
      }
      this.thisInArrowFunction = () => {
        console.log(this)
      }
    }
    thisInMethodFunction() {
      console.log(this)
    }
  }

  const somebody = new Person()
  somebody.thisInPropertyNamedFunction() // somebody
  somebody.thisInPropertyAnonymousFunction() // somebody
  somebody.thisInMethodFunction() // somebody
  somebody.thisInArrowFunction() // somebody

  console.log('===class ends===')
})()
