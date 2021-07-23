/**
 * https://www.nowcoder.com/practice/48e53feaabe94506a61300edadb5496d
 * 模块
 * @param {any} str1
 * @param {any} str2
 */
function createModule(str1, str2) {
  return {
    greeting: str1,
    name: str2,
    sayIt() {
      return `${this.greeting}, ${this.name}`;
    },
  };
}
