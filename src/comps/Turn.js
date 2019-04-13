import React from 'react';
import "./Turn.css";

const Turn = props => {

    const { turn } = props;

    if (turn === "player") {
        return (
            <p id="turn" style={{color: "green"}}>{props.playerName}, Twój ruch ;)</p>
        )
    } else if (turn === "ai"){
        return (
            <p id="turn" style={{color: "red"}}>Ruch komputera</p>
        )
    } else {
        return (
            <p id="turn">&nbsp;</p>
        )
    }
};

export default Turn;