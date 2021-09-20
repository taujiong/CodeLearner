/**
 * @param {string} S
 */
function solution(S) {
  // array to save the existence of letter
  // eg: [[false, true], ...] means that 'a' not in S, 'A' in S
  const charInfos = new Array(26).fill(0).map(() => [false, false]);

  // get char infos
  for (let i = 0; i < S.length; i++) {
    const num = S.charCodeAt(i); // get the ascii num for char
    if (!isTargetChar(num)) continue;

    const [charIndex, isUpperCase] = getCharInfo(num);
    const index = isUpperCase ? 1 : 0;
    charInfos[charIndex][index] = true;
  }

  // find first ans
  for (let i = 25; i >= 0; i--) {
    const [hasLower, hasUpper] = charInfos[i];
    if (hasLower && hasUpper) return String.fromCharCode(65 + i);
  }

  return 'NO';
}

/**
 * check char weather in 'a-z' or 'A-Z'
 * magic number is for ascii
 * @param {number} num
 */
function isTargetChar(num) {
  return (num >= 65 && num <= 90) || (num >= 97 && num <= 122);
}

/**
 * @param {number} num
 * @returns {[number, boolean]} [the index of letter, whether the letter is upper case]
 */
function getCharInfo(num) {
  if (num >= 65 && num <= 90) {
    return [num - 65, true];
  }

  if (num >= 97 && num <= 122) {
    return [num - 97, false];
  }
}
