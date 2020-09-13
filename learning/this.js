let obj = {
  key: "value",
  func: function (key) {
    console.log(this);
    this.key = key;
  },
};

obj.func("funced");
console.log(obj.key); // funced

obj.func.apply(this, ["applied"]); // this === globalThis
console.log(this.key); // applied

obj.func.call(this, "called"); // this === globalThis
console.log(this.key); // called

let another = new obj.func("another");
console.log(another.key);
