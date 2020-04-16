/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function (s) {
  const len = s.length;
  if (len === 0) return true;
  if (len === 1) return s === "*";

  let stateLeft = 0,
    stateRight = 0;
  // state < 0: invalid
  // state >= 0: valid
  for (let i = 0; i < len; ++i) {
    const charLeft = s[i];
    if (charLeft === "(" || charLeft === "*") {
      // Treating all "*" as "(" to cancel remaining ")"
      ++stateLeft;
    } else if (charLeft === ")") {
      --stateLeft;
      if (stateLeft < 0) return false;
    }

    const charRight = s[len - 1 - i];
    if (charRight === ")" || charRight === "*") {
      // Treating all "*" as ")" to cancel remaining "("
      ++stateRight;
    } else if (charRight === "(") {
      --stateRight;
      if (stateRight < 0) return false;
    }
  }
  return true;
};

const assert = (str, bool) =>
  console.assert(
    checkValidString(str) === bool,
    `checkValidString("${str}") is not ${bool}`
  );
assert("(*()", true);
assert("(***)", true);
assert(")(", false);
assert("*)(", false);
assert("*)(*", true);
