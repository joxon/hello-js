(function () {
  console.log("===function () fun starts===");

  function funcThis1() {
    console.assert(this === globalThis);
  }
  funcThis1();

  const funcThis2 = function () {
    console.assert(this === globalThis);
  };
  funcThis2();

  const funcThis3 = function logThis3() {
    console.assert(this === globalThis);
  };
  funcThis3();

  (function funcThis4() {
    console.assert(this === globalThis);
  })();

  const arrowThis1 = () => {
    console.assert(this === globalThis);
  };
  arrowThis1();

  (() => {
    console.assert(this === globalThis);
  })();

  console.log("===function () fun ends===");
})();
(function () {
  console.log("===function () obj starts===");

  const obj = {
    thisInPropertyNamedFunction: function f() {
      console.assert(this !== globalThis);
    },
    thisInPropertyAnonymousFunction: function () {
      console.assert(this !== globalThis);
    },
    thisInMethodFunction() {
      console.assert(this !== globalThis);
    },
    thisInArrowFunction: () => {
      console.assert(this === globalThis);
    },
  };
  obj.thisInPropertyNamedFunction(); // obj
  obj.thisInPropertyAnonymousFunction(); // obj
  obj.thisInMethodFunction(); // obj
  obj.thisInArrowFunction(); // window

  console.log("===function () obj ends===");
})();
(function () {
  console.log("===function () class starts===");

  class Person {
    constructor() {
      this.thisInPropertyNamedFunction = function f() {
        console.assert(this !== globalThis);
      };
      this.thisInPropertyAnonymousFunction = function () {
        console.assert(this !== globalThis);
      };
      this.thisInArrowFunction = () => {
        console.assert(this !== globalThis);
      };
    }
    thisInMethodFunction() {
      console.assert(this !== globalThis);
    }
  }

  const somebody = new Person();
  somebody.thisInPropertyNamedFunction(); // somebody
  somebody.thisInPropertyAnonymousFunction(); // somebody
  somebody.thisInMethodFunction(); // somebody
  somebody.thisInArrowFunction(); // somebody

  console.log("===function () class ends===");
})();
(() => {
  console.log("===() => fun starts===");

  function funcThis1() {
    console.assert(this === globalThis);
  }
  funcThis1();

  const funcThis2 = function () {
    console.assert(this === globalThis);
  };
  funcThis2();

  const funcThis3 = function logThis3() {
    console.assert(this === globalThis);
  };
  funcThis3();

  (function funcThis4() {
    console.assert(this === globalThis);
  })();

  const arrowThis1 = () => {
    console.assert(this !== globalThis); // {}
    console.assert(this.console === undefined); // {}
  };
  arrowThis1();

  (() => {
    console.assert(this !== globalThis);
  })();

  console.log("===() => fun ends===");
})();
(() => {
  console.log("===() => obj starts===");

  const obj = {
    thisInPropertyNamedFunction: function f() {
      console.assert(this !== globalThis);
      console.assert(this === obj);
    },
    thisInPropertyAnonymousFunction: function () {
      console.assert(this !== globalThis);
      console.assert(this === obj);
    },
    thisInMethodFunction() {
      console.assert(this !== globalThis);
      console.assert(this === obj);
    },
    thisInArrowFunction: () => {
      console.assert(this !== globalThis); // {}
    },
  };
  obj.thisInPropertyNamedFunction(); // obj
  obj.thisInPropertyAnonymousFunction(); // obj
  obj.thisInMethodFunction(); // obj
  obj.thisInArrowFunction(); // {}

  console.log("===() => obj ends===");
})();
(() => {
  console.log("===() => class starts===");

  class Person {
    constructor() {
      this.thisInPropertyNamedFunction = function f() {
        console.assert(this !== globalThis);
      };
      this.thisInPropertyAnonymousFunction = function () {
        console.assert(this !== globalThis);
      };
      this.thisInArrowFunction = () => {
        console.assert(this !== globalThis);
      };
    }
    thisInMethodFunction() {
      console.assert(this !== globalThis);
    }
  }

  const somebody = new Person();
  somebody.thisInPropertyNamedFunction(); // somebody
  somebody.thisInPropertyAnonymousFunction(); // somebody
  somebody.thisInMethodFunction(); // somebody
  somebody.thisInArrowFunction(); // somebody

  console.log("===() => class ends===");
})();
