import React from 'react';
import "./notification.css";


const EndBoard = props => {
    const { winner, playerName, playerWin, aiWin } = props.data;

    if (winner === "player") {
        return (
            <div className="notification">
                <h1 style={{ color: "green" }}>{playerName}, udało się!</h1>
                <p>aktualne wyniki</p>
                <p>{playerName}: {playerWin}</p>
                <p>Komputer: {aiWin}</p>
                <button onClick={props.clear}>graj dalej</button>
            </div>
        )
    } else if (winner === "ai") {
        return (
            <div className="notification">
                <h1 style={{ color: "red" }}>Komputer wygrał :(</h1>
                <p>aktualne wyniki</p>
                <p>{playerName}: {playerWin}</p>
                <p>Komputer: {aiWin}</p>
                <button onClick={props.clear}>graj dalej</button>
            </div>
        )
    } else {
        return (
            <div className="notification">
                <h1>Remis</h1>
                <p>aktualne wyniki</p>
                <p>{playerName}: {playerWin}</p>
                <p>Komputer: {aiWin}</p>
                <button onClick={props.clear}>graj dalej</button>
            </div>
        )
    }
}
export default EndBoard;