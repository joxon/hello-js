// https://www.codewars.com/kata/take-a-ten-minute-walk/train/javascript

function isValidWalk(walk) {
  if (walk.length !== 10) return false;

  let x = 0;
  let y = 0;
  walk.forEach(direction => {
    switch (direction) {
      case 'n':
        y += 1;
        break;

      case 's':
        y -= 1;
        break;

      case 'e':
        x += 1;
        break;

      case 'w':
        x -= 1;
        break;

      default:
        break;
    }
  });

  return x === 0 && y === 0;
}

function isValidWalk2(walk) {
  let count = char => walk.filter(el => el === char).length;
  return (
    walk.length == 10 && count('n') == count('s') && count('w') == count('e')
  );
}

console.log(
  isValidWalk(['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's'])
  //'should return true')
);
console.log(
  !isValidWalk(['w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e'])
  //'should return false')
);
console.log(
  !isValidWalk(['w'])
  //'should return false')
);
console.log(
  !isValidWalk(['n', 'n', 'n', 's', 'n', 's', 'n', 's', 'n', 's'])
  //'should return false')
);
