import "./demo4.css";
import $ from "jquery";

$("#circle").on("mouseover", () => {
  $("#circle").addClass("active");
});
$("#circle").on("mouseout", () => {
  $("#circle").removeClass("active");
});
