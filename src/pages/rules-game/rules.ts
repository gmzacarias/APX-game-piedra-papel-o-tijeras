import { state } from "../../state";
const imageRules = require("url:../../../src/assets/images/rules-game.svg");

state.getLocalStorage();
export function initRulesGamePage(params) {

  //Div
  const div = document.createElement("div");
  div.classList.add("div-container");
  div.innerHTML = `
          <img src="${imageRules}" class="img-rules">
          <button-component class="button-component">¡jugar!</button-component>
        `;
  // Style
  const style = document.createElement("style");
  style.innerHTML = `
    .div-container{
      width: 100%;
      height: 100%;
      padding: 100px;
      gap:50px;
      display: flex;
      flex-direction: column;
      justify-content:center;
      align-items:center;
      }
     
      .img-rules {
        width:320px;  
        height: 240px;
      }`;

  // Button component
  const buttonComp = div.querySelector(".button-component");
  buttonComp?.addEventListener("click", () => {
    params.goTo("/stone-paper-scissors/startgame");
  });
  div.appendChild(style);
  return div;
}
