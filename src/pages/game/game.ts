import { state } from "../../state";

export function initGamePage(params) {
  const div = document.createElement("div");
  div.classList.add("game-page");
  const style = document.createElement("style");

 
  let counter = 3;
  const countdown = setInterval(() => {
    counter--;
    const counterEl = div.querySelector(".counter-el") as any;
    counterEl.textContent = String(counter);

    if (counter < 0) {
      clearInterval(countdown);
      params.goTo("/stone-paper-scissors/rulesgame");
    }
  }, 1000);

 
  div.innerHTML = `
    <div class="counter-el">${counter}</div>
    <div class="hands-machine">
    <stone-component class="stone-hand-pc hand-display-disabled"></stone-component>
    <paper-component class="paper-hand-pc hand-display-disabled"></paper-component>
    <scissor-component class="scissor-hand-pc hand-display-disabled"></scissor-component>
    </div>
    <div class="my-hands">
    <stone-component class="stone-hand"></stone-component>
    <paper-component class="paper-hand"></paper-component>
    <scissor-component class="scissor-hand"></scissor-component>
    </div>
    `;

  
  style.innerHTML = `
	  .game-page {
      width: 100%;
      height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
    }
    .my-hands {
      width: 100%;
      display: flex;
      justify-content: space-evenly;
    }
    .active-hands{
      height: 157px;
    }
    .counter-el {
      margin-top:150px;
      text-align:center;
      font-weight: bold;
      font-size: 200px;
      font-family: var(--font-button);
    }
    .actived {
      display: inherit;
      transform: translateY(-30px);
      transition: all 0.5s;
    }
    .disabled {
      opacity: 80%;
      transform: translateY(30px);
      transition: 0.5s;
    }
    .hands-machine {
      display: none;
    }
    .actived-hands-machine {
      width: 100%;
      height: 157px;
      display: flex;
      justify-content: center;
      transform: rotate(180deg);
    }
    .hand-display-disabled{
        display: none;
    }
    .enabled-hand-machine {
      display: flex;
      transform: translateY(-30px);
      transition: all 0.5s;
    }`;

  const countdownEl = div.querySelector(".counter-el") as Element;
  const myHandsCont = div.querySelector<any>(".my-hands").children;
  const myHandsDiv = div.querySelector(".my-hands") as Element;
  const handScissor = div.querySelector(".scissor-hand") as Element;
  const handStone = div.querySelector(".stone-hand") as Element;
  const handPaper = div.querySelector(".paper-hand") as Element;
  const handsMachine = div.querySelector(".hands-machine") as Element;
  const handMachineStone = div.querySelector(".stone-hand-pc") as Element;
  const handMachinePaper = div.querySelector(".paper-hand-pc") as Element;
  const handMachineScissor = div.querySelector(".scissor-hand-pc") as Element;

  for (const hands of myHandsCont) {
    hands.addEventListener("click", () => {
      const type = hands.getAttribute("class");
      clearInterval(countdown);

      if (type == "stone-hand") {
        state.setMove("Piedra");
        activeHands("Piedra");
      } else if (type == "paper-hand") {
        state.setMove("Papel");
        activeHands("Papel");
      } else if (type == "scissor-hand") {
        state.setMove("Tijera");
        activeHands("Tijera");
      }
   
    });
  }

  function activeHands(param) {
    for (const hand of myHandsCont) {
      hand.classList.add("disabled");
    }

    if (param == "Piedra") {
        handStone.classList.remove("disabled");
        handStone.classList.add("actived");
        setTimeout(() => {
            handScissor.classList.add("hand-display-disabled");
            handPaper.classList.add("hand-display-disabled");
        }, 1500);
    }
    if (param == "Papel") {
        handPaper.classList.remove("disabled");
        handPaper.classList.add("actived");
        setTimeout(() => {
            handScissor.classList.add("hand-display-disabled");
            handStone.classList.add("hand-display-disabled");
        }, 1500);
    }
    if (param == "Tijera") {
        handScissor.classList.remove("disabled");
        handScissor.classList.add("actived");
        setTimeout(() => {
        handStone.classList.add("hand-display-disabled");
        handPaper.classList.add("hand-display-disabled");
       }, 1500);
    }
    
    setTimeout(() => {
      const stateMachine = state.getState().currentGame.computerPlay;
      countdownEl.remove();
      myHandsDiv.classList.add("active-hands");
      handsMachine.classList.add("actived-hands-machine");

      if (stateMachine == "Piedra") {
          handMachineStone.classList.add("enabled-hand-machine");
        }
        if (stateMachine == "Papel") {
            handMachinePaper.classList.add("enabled-hand-machine");
        }
        if (stateMachine == "Tijera") {
          handMachineScissor.classList.add("enabled-hand-machine");
        }

      setTimeout(() => {
        params.goTo("/stone-paper-scissors/scoregame");
      }, 1500);
    }, 1500);
  }

  div.appendChild(style);
  return div;
}
// import { state } from "../../state";

// export function initGamePage(params) {
//     const div = document.createElement("div");
//     div.classList.add("game-page");
//     const style = document.createElement("style");
    
//     let counter = 3;
//     const intervalGame = setInterval(() => {
//         counter--;
//         const counterEl = div.querySelector(".counter-el")as Element;
//         counterEl.textContent = String(counter);
        
//         if (counter < 0) {
//             clearInterval(intervalGame);
//             params.goTo("/stone-paper-scissors/rulesgame");
//         }
//     }, 1000);

//     div.innerHTML =
//         `
// <div class="counter-el">${counter}</div>
//  <div class="played-machine-cont">
//  <play-stone class="stone-hand-machine hand-disabled"></play-stone>
//  <play-paper class="paper-hand-machine hand-disabled"></play-paper>
//  <play-scissor class="scissor-hand-machine hand-disabled"></play-scissor>
//  </div>
//  <div class="my-hand">
//  <play-stone class="stone-hand"></play-stone>
//  <play-paper class="paper-hand"></play-paper>
//  <play-scissor class="scissor-hand"></play-scissor>
//  </div>
//  `
//  style.innerHTML =
//  `
//     .game-Page{
//         width:100%;
//         height: 100vh;
//         display: flex;
//         flex-direction: column;
//         justify-content: space-between;
//         align-items: center;
//         gap:20px
//     }
//     .my-play {
//         width: 100%;
//         display: flex;
//         justify-content: space-evenly;
        
//     }
//     .active-hands{
//         height: 157px;
//     }
//     .counter-el {
//         text-align:center;
//         font-family: var(--font-button);
//         font-weight: bold;
//         font-size: 100px;
//         color: #292728;
//     }
//     .actived {
//         display: inherit;
//         transform: translateY(-30px);
//         transition: all 0.5s;
//     }
//     .disabled {
//         opacity: 60%;
//         transform: translateY(30px);
//         transition: 0.5s;
//     }

//     .played-machine-cont {
//         display: none;
//     }
//     .actived-hands-machine {
//         width: 100%;
//         height: 157px;
//         display: flex;
//         justify-content: center;
//         transform: rotate(180deg);
//     }
//     .hand-disabled{
//         display: none;
//     }
//     .actived-hand-machine {
//         display: flex;
//         transform: translateY(-30px);
//         transition: all 0.5s;
//     }
    
//     `
    
    
//     const countdownGame = div.querySelector(".counter-el") as Element;
//     const myPlayCont = div.querySelector<any>(".my-play").children;
//     const myPlayDiv = div.querySelector(".my-play") as Element;
//     const yourMoveStone = div.querySelector(".stone-hand") as Element;
//     const yourMovePaper = div.querySelector(".paper-hand") as Element;
//     const yourMoveScissor = div.querySelector(".scissor-hand") as Element;
//     const machineMoveCont = div.querySelector(".played-machine-cont") as Element;
//     const machineStone = div.querySelector(".stone-hand-machine") as Element;
//     const machinePaper = div.querySelector(".paper-hand-machine") as Element;
//     const machineScissor = div.querySelector(".scissor-hand-machine") as Element;
    
//     for (const hands of myPlayCont) {
//         hands.addEventListener("click", () => {
//             const type = hands.getAttribute("class");
//             clearInterval(intervalGame);
            
//             if (type == "stone-hand") {
//                 state.setMove("Piedra");
//                 activeHands("Piedra");
//             } else if (type == "paper-hand") {
//                 state.setMove("Papel");
//                 activeHands("Papel");
//             } else if (type == "scissor-hand") {
//                 state.setMove("Tijera");
//                 activeHands("Tijera");
//             }
//         });
//     }
    
//     function activeHands(param) {
//         for (const hand of myPlayCont) {
//             hand.classList.add("disabled");
//         }

//         if (param == "Piedra") {
//             yourMoveStone.classList.remove("disabled");
//             yourMoveStone.classList.add("actived");
//             setTimeout(() => {
//                 yourMovePaper.classList.add("hand-disabled");
//                 yourMoveScissor.classList.add("hand-disabled");
//             }, 1500);
//         }
//         if (param == "Papel") {
//             yourMovePaper.classList.remove("disabled");
//             yourMovePaper.classList.add("actived");
//             setTimeout(() => {
//                 yourMoveStone.classList.add("hand-disabled");
//                 yourMoveScissor.classList.add("hand-disabled");
//             }, 1500);
//         }
//         if (param == "Tijera") {
//             yourMoveScissor.classList.remove("disabled");
//             yourMoveScissor.classList.add("actived");
//             setTimeout(() => {
//                 yourMoveStone.classList.add("hand-disabled");
//                 yourMovePaper.classList.add("hand-disabled");
//             }, 1500);
//         }
        
//     }
    
//     setTimeout(() => {
//         const statePlayedMachine = state.getState().currentGame.computerPlay;
//         countdownGame.remove();
//         myPlayDiv.classList.add("active-hands");
//         machineMoveCont.classList.add("actived-hands-machine");
        
//         if (statePlayedMachine == "Piedra") {
//             machineStone.classList.add("actived-hand-machine");
//         }
//         if (statePlayedMachine == "Papel") {
//             machinePaper.classList.add("actived-hand-machine");
//         }
//         if (statePlayedMachine == "Tijera") {
//             machineScissor.classList.add("actived-hand-machine");
//         }

//         setTimeout(() => {
//             params.goTo("/stone-paper-scissors/scoregame");
//         }, 1500);
//     }, 1500);

//     div.appendChild(style);
//     return div;




// }

