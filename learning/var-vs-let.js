'use strict';
(() => {
  var funcsVar = [];
  console.log('declaring i in a for loop with var');
  for (var i = 0; i < 3; ++i) funcsVar.push(() => i);
  funcsVar.forEach(func => console.log(func()));
  console.log('i is still here: ' + i);

  let funcsLet = [];
  console.log('declaring j in a for loop with let');
  for (let j = 0; j < 3; ++j) funcsLet.push(() => j);
  funcsLet.forEach(func => console.log(func()));
  try {
    j;
  } catch (e) {
    console.log('j is not here: ' + e);
  }
})();
