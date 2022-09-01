
type GameOption = "Piedra" | "Papel" | "Tijera";

const state = {
    data: {
        currentGame: {
            myPlay: "",
            computerPlay: "",
        },

        history: {
            myScore: 0,
            computerScore: 0,
        }
    },

    getLocalStorage() {
        const localStorageData = JSON.parse(localStorage.getItem("data") as string);
        if (localStorage.getItem("data")) {
            this.data.history = localStorageData;
        }
    },
    getState() {
        return this.data;
    },

    setState(newState) {
        this.data = newState;
    },




    setMove(movement: GameOption) {
        const currentState = this.getState();
        currentState.currentGame.myPlay = movement;

        const machineMovement = () => {
            const move = ["Piedra", "Papel", "Tijera"];
            return move[Math.floor(Math.random() * 3)];
        };
        currentState.currentGame.computerPlay = machineMovement();
        this.setHistory();
    },

    whoisWinner() {
        const currentState = this.getState();
        const playedGame = currentState.currentGame;

        const equality = [
            playedGame.myPlay == "Piedra" && playedGame.computerPlay == "Piedra",
            playedGame.myPlay == "Papel" && playedGame.computerPlay == "Papel",
            playedGame.myPlay == "Tijera" && playedGame.computerPlay == "Tijera",
        ]
        if (equality.includes(true)) {
            return "Empate"
        }
        const winnerGame = [
            playedGame.myPlay == "Tijera" && playedGame.computerPlay == "Papel",
            playedGame.myPlay == "Piedra" && playedGame.computerPlay == "Tijera",
            playedGame.myPlay == "Papel" && playedGame.computerPlay == "Piedra",
        ];

        if (winnerGame.includes(true)) {
            return "Ganaste";
        } else {
            return "Perdiste";
        }

    },

    setHistory() {
        const currentState = this.getState();
        const currentWhoWins = this.whoisWinner();
        const myScore = currentState.history.myScore;
        const computerScore = currentState.history.computerScore;

        if (currentWhoWins == "Ganaste") {
            this.setState({
                ...currentState,
                history: {
                    myScore: myScore + 1,
                    computerScore: computerScore,
                },
            });
        }
        if (currentWhoWins == "Perdiste") {
            this.setState({
                ...currentState,
                history: {
                    myScore: myScore,
                    computerScore: computerScore + 1,
                },
            });
        }
        this.savedData();
    },

    savedData() {
        const currentState = this.getState().history;
        localStorage.setItem("data", JSON.stringify(currentState));
    },

    cleanData() {
        localStorage.setItem(
            "data",
            JSON.stringify({
                myScore: 0,
                computerScore: 0,
            })
        );
    },

};

export { state };

