import _, { divide } from "lodash";
import "../scss/main.scss";
import "bootstrap";

function test() {
  const divEl = document.createElement("div");

  divEl.classList.add("hello");
  divEl.innerHTML = _.join(["hello", "webpack"], " ");

  document.body.appendChild(divEl);
}
test();
console.log("hello webpack");
