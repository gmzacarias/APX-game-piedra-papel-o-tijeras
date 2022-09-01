const imageHome = require("url:../../../src/assets/images/welcome-game.svg");

export function initIndexGamePage(params) {

  // Div
  const div = document.createElement("div");
  div.classList.add("div-container");
  div.innerHTML = `
        <img src="${imageHome}" class="img-welcome">
            <button-component class="button-component">¡jugar!</button-component>
              `;

  // Style
  const style = document.createElement("style");
  style.innerHTML = `
        .div-container{
        width: 100%;
		    height: 100%;
		    padding: 100px;
		    display: flex;
		    flex-direction: column;
		    justify-content:center;
        align-items:center;
        gap:50px;
      }

        .img-welcome{
            width:284px;
            height:211px
        }

    `;

  // Button component
  const buttonComp = div.querySelector(".button-component");
  buttonComp?.addEventListener("click", () => {
    params.goTo("/stone-paper-scissors/rulesgame");
  });
  div.appendChild(style);
  return div;
}
