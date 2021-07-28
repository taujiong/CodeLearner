/**
 * https://www.nowcoder.com/practice/74d74be449af4c66907fe2d6961c255c
 * dom 节点查找
 * @param {HTMLElement} oNode1
 * @param {HtmlElement} oNode2
 */
function commonParentNode(oNode1, oNode2) {
  while (oNode1 != null) {
    if (oNode1.contains(oNode2)) return oNode1;

    oNode1 = oNode1.parentNode;
  }

  return null;
}
