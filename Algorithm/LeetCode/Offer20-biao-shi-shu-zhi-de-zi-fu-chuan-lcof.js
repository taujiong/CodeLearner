/**
 * https://leetcode-cn.com/problems/biao-shi-shu-zhi-de-zi-fu-chuan-lcof/
 * 中等，确定有限状态自动机
 * TODO: 储备知识
 * TODO: 复习
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function (s) {
  // 状态枚举
  const STATE_INITIAL = 1           //1. 起始的空格
  const STATE_INT_SIGN = 2          //2. 符号位
  const STATE_INTEGER = 3           //3. 整数部分
  const STATE_POINT = 4             //4. 左侧有整数的小数点
  const STATE_POINT_WITHOUT_INT = 5 //5. 左侧无整数的小数点
  const STATE_FRACTION = 6          //6. 小数部分
  const STATE_EXP = 7               //7. 字符 E e
  const STATE_EXP_SIGN = 8          //8. 指数部分的符号位
  const STATE_EXP_NUMBER = 9        //9. 指数部分的整数部分
  const STATE_END = 10              //10. 末尾的空格

  // 字符枚举
  const CHAR_NUMBER = 1         // 0-9
  const CHAR_EXP = 2            // E e
  const CHAR_POINT = 3          // .
  const CHAR_SIGN = 4           // + -
  const CHAR_SPACE = 5          // ' '
  const CHAR_ILLEGAL = 6        // 除上面字符外都是非法字符


  const toCharType = char => {
    switch (char) {
      case '0': case '1': case '2': case '3': case '4': case '5': case '6': case '7': case '8': case '9': return CHAR_NUMBER
      case 'E': case 'e': return CHAR_EXP
      case '.': return CHAR_POINT
      case '+': case '-': return CHAR_SIGN
      case ' ': return CHAR_SPACE
      default: return CHAR_ILLEGAL
    }
  }

  // 状态转移表
  const tranfer = {
    [STATE_INITIAL]: {
      [CHAR_NUMBER]: STATE_INTEGER,
      [CHAR_POINT]: STATE_POINT_WITHOUT_INT,
      [CHAR_SIGN]: STATE_INT_SIGN,
      [CHAR_SPACE]: STATE_INITIAL,
    },
    [STATE_INT_SIGN]: {
      [CHAR_NUMBER]: STATE_INTEGER,
      [CHAR_POINT]: STATE_POINT_WITHOUT_INT,
    },
    [STATE_INTEGER]: {
      [CHAR_NUMBER]: STATE_INTEGER,
      [CHAR_EXP]: STATE_EXP,
      [CHAR_POINT]: STATE_POINT,
      [CHAR_SPACE]: STATE_END,
    },
    [STATE_POINT]: {
      [CHAR_NUMBER]: STATE_FRACTION,
      [CHAR_EXP]: STATE_EXP,
      [CHAR_SPACE]: STATE_END,
    },
    [STATE_POINT_WITHOUT_INT]: {
      [CHAR_NUMBER]: STATE_FRACTION
    },
    [STATE_FRACTION]: {
      [CHAR_NUMBER]: STATE_FRACTION,
      [CHAR_EXP]: STATE_EXP,
      [CHAR_SPACE]: STATE_END,
    },
    [STATE_EXP]: {
      [CHAR_NUMBER]: STATE_EXP_NUMBER,
      [CHAR_SIGN]: STATE_EXP_SIGN,
    },
    [STATE_EXP_SIGN]: {
      [CHAR_NUMBER]: STATE_EXP_NUMBER,
    },
    [STATE_EXP_NUMBER]: {
      [CHAR_NUMBER]: STATE_EXP_NUMBER,
      [CHAR_SPACE]: STATE_END,
    },
    [STATE_END]: {
      [CHAR_SPACE]: STATE_END,
    }
  }

  const len = s.length
  let state = STATE_INITIAL // 初始状态

  for (let i = 0; i < len; i++) {
    let ch = s[i]
    let chType = toCharType(ch)
    let nextState = tranfer[state][chType]
    if (nextState) {
      state = nextState
    } else {
      return false
    }
  }

  // 注意遍历完字符串后最后可能的状态 
  return state === STATE_INTEGER
    || state === STATE_POINT
    || state === STATE_FRACTION
    || state === STATE_EXP_NUMBER
    || state === STATE_END
};
