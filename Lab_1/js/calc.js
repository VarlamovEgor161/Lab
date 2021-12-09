avar calc_button = document.getElementById("calc_button");
var a = document.getElementById("a");
var b = document.getElementById("b");
var c = document.getElementById("c");
var reh_gl = document.getElementById("reh_gl");
var pr_1 = document.getElementById("pr_1");
var pr_2 = document.getElementById("pr_2");
var pr_3 = document.getElementById("pr_3");
var pr_1_1 = document.getElementById("pr_1_1");
var pr_2_1 = document.getElementById("pr_2_1");
var pr_3_1 = document.getElementById("pr_3_1");
var desc = document.getElementById("desc");
var otr = document.getElementById("otr");
var reh_x = document.getElementById("reh_x");
var x_1 = document.getElementById("x_1");
var x_2 = document.getElementById("x_2");
var t = 0;
var u = 0;
var i = 0;
function validate() {
  if (a.value == "0") {
    alert("Пожалуйста введите не нулевое значение для X^2!");
  } else {
    count();
  }
}
function count() {
  reh_gl.style.display = "block";
  pr_1.innerHTML = a.value;
  pr_2.innerHTML = b.value;
  pr_3.innerHTML = c.value;
  pr_1_1.innerHTML = a.value;
  pr_2_1.innerHTML = b.value;
  pr_3_1.innerHTML = c.value;
  t = b.value * b.value - 4 * a.value * c.value;
  desc.innerHTML = t;
  if (t < 0) {
    otr.style.display = "block";
    reh_x.style.display = "none";
  } else {
    otr.style.display = "none";
    reh_x.style.display = "block";
    u = (-b.value + Math.sqrt(t)) / (2 * a.value);
    i = (-b.value - Math.sqrt(t)) / (2 * a.value);
    x_1.innerHTML = u;
    x_2.innerHTML = i;
  }
}
