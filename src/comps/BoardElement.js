import React from "react";
import "./BoardElement.css";

const BoardElement = props => {
    const { id, choice } = props.data;
    const { winningElementsIDs } = props;
    let winningID = [-2];


    if (winningElementsIDs.length !== 0) {
        winningID = winningElementsIDs.filter(el => el == id);
    }

    if (winningID[0] === id && choice === "player"){
        return (
            <div className="playerChoice playerWinning">
            </div>
        )
    } else if ( winningID[0] === id && choice === "ai"){
        return (
            <div className="aiChoice aiWinning">
            </div>
        )
    } else if (choice === "player") {
        return (
            <div className="playerChoice">
            </div>
        )
    } else if (choice === "ai") {
        return (
            <div className="aiChoice">
            </div>
        )
    } else {
        return (
            <div onClick={props.playerMove} id={id}>
            </div>
        )
    }
}

    export default BoardElement;