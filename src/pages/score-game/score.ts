import { state } from "../../state";

const resultImages = {
  defeatedGame: require("url:../../../src/assets/images/defeat-game.svg"),
  tieGame: require("url:../../../src/assets/images/tie-game.svg"),
  victoryGame: require("url:../../../src/assets/images/victory-game.svg"),
};

export function initScoreGamePage(params) {
  const div = document.createElement("div");
  div.className = "result-cont";
  div.classList.add("score-page");

  const resultsGame = state.whoisWinner();

  const styleBackground = document.createElement("style");
  let imgOfResults;

  if (resultsGame == "Ganaste") {
    imgOfResults = resultImages.victoryGame;
    styleBackground.innerHTML = `
		.result-cont {
			background:var(--background-victory);  
		}`;
  } else if (resultsGame == "Perdiste") {
    imgOfResults = resultImages.defeatedGame;
    styleBackground.innerHTML = `
		.result-cont {
			background:var(--background-defeated);  
		}`;
  }
  if (resultsGame == "Empate") {
    imgOfResults = resultImages.tieGame;
    styleBackground.innerHTML = `
		.result-cont {
			background:var(--background-tie);   
		}`;
  }
  const currentState = state.getState();
  div.innerHTML = `
	  <img src="${imgOfResults}" class="result-game-img" >
	  <div class="container-score">
      <h2>Score</h2>
      <p class="you-score">Vos: ${currentState.history.myScore}</p>
      <p class="machine-score">Máquina: ${currentState.history.computerScore}</p>
    </div>
	  <button-component class="button-back">Volver a jugar</button-component>
	  <button-component class="button-reset">Reiniciar puntajes</button-component>
    `;

  const buttonBack = div.querySelector(".button-back") as Element;
  buttonBack.addEventListener("click", () => {
    params.goTo("/stone-paper-scissors/startgame");
  });
  
  const buttonReset = div.querySelector(".button-reset") as Element;
  buttonReset.addEventListener("click", () => {
    state.cleanData();
    state.getLocalStorage();
    params.goTo("/stone-paper-scissors/rulesgame");
  });

  const style = document.createElement("style");
  style.innerHTML = `
  .score-page {
    width: 100%;
    height: 100%;
    padding: 50px 0 50px 0;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    gap:20px;
  }
  .result-game-img {
    width: 250px;
    height:220px;
  }
  .container-score {
    background: #ffffff;
    width: 259px;
    border: 10px solid #000000;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    font-family: var(--font-button);
  }
  .container-score > h2 {
    margin: 0 auto;
    font-size: 55px;
  }
  .container-score > p {
    margin: 0 10px 5px 0;
    font-size: 45px;
    text-align: end;
  }
  `;

  div.appendChild(styleBackground);
  div.appendChild(style);
  return div;
}
