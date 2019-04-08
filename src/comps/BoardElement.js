import React from "react";
import "./BoardElement.css";

const BoardElement = props => {
    const { id, choice } = props.data;
    
    if (choice === "player") {
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