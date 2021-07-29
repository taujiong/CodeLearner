/**
 * https://www.nowcoder.com/practice/80b08802a833419f9c4ccc6e042c1cca
 * @param {string} sRGB
 */
function rgb2hex(sRGB) {
  var regexp = /rgb\((\d+),\s*(\d+),\s*(\d+)\)/;
  var ret = sRGB.match(regexp);
  if (!ret) {
    return sRGB;
  } else {
    var str = '#';
    for (var i = 1; i <= 3; i++) {
      var m = parseInt(ret[i]);
      if (m <= 255 && m >= 0) {
        str += m < 16 ? '0' + m.toString(16) : m.toString(16);
      } else {
        return sRGB;
      }
    }
    return str;
  }
}
