/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function (S, T) {
  const getResult = (str) => {
    let result = "";
    for (let backspace = 0, i = str.length - 1; i >= 0; --i) {
      if (str[i] === "#") ++backspace;
      else {
        if (backspace > 0) --backspace;
        else result = str[i] + result;
      }
    }
    return result;
  };
  return getResult(S) === getResult(T);
};

console.log(backspaceCompare("ab#c", "ad#c"));
console.log(backspaceCompare("ab##", "c#d#"));
console.log(backspaceCompare("a##c", "#a#c"));
console.log(backspaceCompare("a#c", "b"));
