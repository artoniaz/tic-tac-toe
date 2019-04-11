import React from 'react';
import "./Board.css"
import BoardElement from "./BoardElement";

class Board extends React.Component {

    state = {
        turn: "",
        winner: "",
        winningElementsIDs: [],

        elements: [
            {
                id: 0,
                choice: "",
                taken: false,
            },
            {
                id: 1,
                choice: "",
                taken: false,
            },
            {
                id: 2,
                choice: "",
                taken: false,
            },
            {
                id: 3,
                choice: "",
                taken: false,
            },
            {
                id: 4,
                choice: "",
                taken: false,
            },
            {
                id: 5,
                choice: "",
                taken: false,
            },
            {
                id: 6,
                choice: "",
                taken: false,
            },
            {
                id: 7,
                choice: "",
                taken: false,
            },
            {
                id: 8,
                choice: "",
                taken: false,
            },
        ]
    }

    whoStart = () => {
        const randomNumber = Math.floor(Math.random() * 2);

        if (randomNumber === 0) {
            this.setState({
                turn: "player",
            })
        } else {
            this.setState({
                turn: "ai",
            })
        }
    }

    playerMove = e => {
        if (this.state.turn !== "player" || this.state.winner !== "") {
            return;
        }

        const elements = [...this.state.elements];
        const newValue = {
            id: Number(e.target.id),
            choice: "player",
            taken: true,
        }
        elements[e.target.id] = newValue;

        this.setState({
            elements,
            turn: "ai",
        })
    };

    aiMove = () => {
        const elements = [...this.state.elements];
        const freeElements = elements.filter(el => el.taken === false);
        const randomNumber = Math.floor(Math.random() * freeElements.length);
        const randomElement = freeElements[randomNumber];

        if (freeElements.length === 0) {
            return alert("koniec gry, wszystkie pola zajęte")
        }

        const newValue = {
            id: randomElement.id,
            choice: "ai",
            taken: true,
        }

        elements[randomElement.id] = newValue;

        const aiMove = {
            elements: elements,
            turn: "player",
        };
        return aiMove;
    }

    endGame = () => {
        const elements = this.state.elements;
        let winner = "";
        let winningElementsIDs = [];

        if (elements[0].choice === elements[1].choice && elements[0].choice === elements[2].choice && elements[0].choice !== "") {
            winner = elements[0].choice;
            winningElementsIDs.push(elements[0].id, elements[1].id, elements[2].id);

        } else if (elements[3].choice === elements[4].choice && elements[4].choice === elements[5].choice && elements[3].choice !== "") {
            winner = elements[3].choice;
            winningElementsIDs.push(elements[3].id, elements[4].id, elements[5].id);

        } else if (elements[6].choice === elements[7].choice && elements[7].choice === elements[8].choice && elements[6].choice !== "") {
            winner = elements[6].choice;
            winningElementsIDs.push(elements[6].id, elements[7].id, elements[8].id);

        } else if (elements[0].choice === elements[3].choice && elements[3].choice === elements[6].choice && elements[0].choice !== "") {
            winner = elements[0].choice;
            winningElementsIDs.push(elements[0].id, elements[3].id, elements[6].id);

        } else if (elements[1].choice === elements[4].choice && elements[4].choice === elements[7].choice && elements[1].choice !== "") {
            winner = elements[1].choice;
            winningElementsIDs.push(elements[1].id, elements[4].id, elements[7].id);

        } else if (elements[2].choice === elements[5].choice && elements[5].choice === elements[8].choice && elements[2].choice !== "") {
            winner = elements[2].choice;
            winningElementsIDs.push(elements[2].id, elements[5].id, elements[8].id);

        } else if (elements[0].choice === elements[4].choice && elements[4].choice === elements[8].choice && elements[0].choice !== "") {
            winner = elements[0].choice;
            winningElementsIDs.push(elements[0].id, elements[4].id, elements[8].id);

        } else if (elements[2].choice === elements[4].choice && elements[4].choice === elements[6].choice && elements[2].choice !== "") {
            winner = elements[2].choice;
            winningElementsIDs.push(elements[2].id, elements[4].id, elements[6].id);
        }

        if (winner !== "") {
            return {winner, winningElementsIDs};
        } else {
            return "";
        }
    }

    render() {

        const elements = this.state.elements.map(el => (
            <BoardElement key={el.id} data={this.state.elements[el.id]} playerMove={this.playerMove} winningElementsIDs={this.state.winningElementsIDs}/>
        ))


        return (
            <section id="board">
                {elements}
            </section>
        )
    }

    componentDidMount() {
        this.whoStart();
    }

    componentDidUpdate() {
        
        if (this.state.winner === "") {
            const endGame = this.endGame();

            if (endGame === "") {
                if (this.state.turn === "ai") {
                    const elements = this.aiMove().elements;
                    const turn = this.aiMove().turn;

                    this.setState({
                        elements,
                        turn,
                    })
                }
            }

            if (endGame !== "") {
                this.props.getScore(endGame.winner);

                this.setState({
                    winner: endGame.winner,
                    turn: "",
                    winningElementsIDs: endGame.winningElementsIDs,
                })
            }
        }
      
    }
}

export default Board;