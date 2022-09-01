import { initRouter } from "./router";
import "../src/components/button";
import "../src/components/stone";
import "../src/components/paper";
import "../src/components/scissor";

(function () {
  const root = document.querySelector(".root");
  initRouter(root as Element);

})();