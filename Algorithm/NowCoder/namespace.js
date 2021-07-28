/**
 * https://www.nowcoder.com/practice/a82e035501504cedbe881d08c824a381
 * 根据包名，在指定空间中创建对象
 * @param {Object} oNamespace
 * @param {String} sPackage
 */
function namespace(oNamespace, sPackage) {
  let currentScope = oNamespace;
  let scopes = sPackage.split('.');
  for (let scope of scopes) {
    if (
      !currentScope.hasOwnProperty(scope) ||
      typeof currentScope[scope] !== 'object'
    ) {
      currentScope[scope] = {};
    }
    currentScope = currentScope[scope];
  }

  return oNamespace;
}
