(function () {
  console.log(1)
})();

; (function () {
  console.log(2)
})()

void function () {
  console.log(3)
}()


/* var iframe = document.createElement('iframe')
document.documentElement.appendChild(iframe)
iframe.src = "javascript:var b = {};"
var b1 = iframe.contentWindow.b;
var b2 = {};
console.log(typeof b1, typeof b2);
console.log(b1 instanceof window.Object, b2 instanceof window.Object); */

