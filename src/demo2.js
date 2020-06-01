import "./demo2.css";
import $ from "jquery";

$("#tab-bar").on("click", "li", (e) => {
  $(e.currentTarget).addClass("active").siblings().removeClass("active");

  $("#tab-content li")
    .eq($(e.currentTarget).index())
    .addClass("active")
    .siblings()
    .removeClass("active");
});
$("#tab-bar li:eq(0)").trigger("click");
