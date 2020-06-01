import $ from "jquery";
let n = 1;
$("#num").text(n);
$("#add1").on("click", () => {
  $("#num").text(++n);
});
$("#sub2").on("click", () => {
  $("#num").text((n -= 2));
});
$("#mul3").on("click", () => {
  $("#num").text((n *= 3));
});
$("#divide2").on("click", () => {
  $("#num").text((n /= 2));
});
