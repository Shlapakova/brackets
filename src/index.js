module.exports = function check(str, bracketsConfig) {
  const bracketPairs = new Map(bracketsConfig);
  const bracketStack = [];
  for (const i of str) {
    if (bracketPairs.has(i)) {
      if (bracketPairs.get(i) === i) {
        if (bracketStack.length > 0 && bracketStack[bracketStack.length - 1] === i) {
          bracketStack.pop();
        } else {
          bracketStack.push(i);
        }
      } else {
    bracketStack.push(i);
      }
    } else {
      const last = bracketStack.pop();
      if (bracketPairs.get(last) !== i) {
        return false;
}
 }
 }
  return bracketStack.length === 0;
}