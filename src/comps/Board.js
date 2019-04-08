import React from 'react';
import "./Board.css"
import BoardElement from "./BoardElement";

class Board extends React.Component {

    state = {
        turn: "",
        winner: "",
    
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
        if (this.state.turn !== "player") {
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
        if (this.state.turn !== "ai") {
            return;
        }
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
        this.setState({
            elements,
            turn: "player",
        })
    }

    endGame = () => {
        const elements = this.state.elements;
        let winner = "";

        if (elements[0].choice === elements[1].choice && elements[0].choice === elements[2].choice && elements[0].choice !== "") {
            winner = elements[0].choice;

        } else if (elements[3].choice === elements[4].choice && elements[4].choice === elements[5].choice && elements[3].choice !== "") {
            winner = elements[3].choice;
        } else if (elements[6].choice === elements[7].choice && elements[7].choice === elements[8].choice && elements[6].choice !== "") {
            winner = elements[6].choice;
        } else if (elements[0].choice === elements[3].choice && elements[3].choice === elements[6].choice && elements[0].choice !== "") {
            winner = elements[0].choice;
        } else if (elements[1].choice === elements[4].choice && elements[4].choice === elements[7].choice && elements[1].choice !== "") {
            winner = elements[1].choice;
        } else if (elements[2].choice === elements[5].choice && elements[5].choice === elements[8].choice && elements[2].choice !== "") {
            winner = elements[2].choice;
        } else if (elements[0].choice === elements[4].choice && elements[4].choice === elements[8].choice && elements[0].choice !== "") {
            winner = elements[0].choice;
        } else if (elements[2].choice === elements[4].choice && elements[4].choice === elements[6].choice && elements[2].choice !== "") {
            winner = elements[2].choice;
        }

        if (winner !== "") {
            this.props.getScore(winner)
            this.setState({
                turn: "",
                winner,
            })
        }
    }

    render() {

        const elements = this.state.elements.map(el => (
            <BoardElement key={el.id} data={this.state.elements[el.id]} playerMove={this.playerMove} endLine={this.state.endLine}/>
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
            this.endGame();
        }
        if (this.state.turn === "ai") {
            this.aiMove();
        }
 
    }
}

export default Board;