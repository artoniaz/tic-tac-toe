import React from 'react';
import "./Score.css"

const Score = props => {
        return (
            <section id="score">
                <p>{props.playerName ? props.playerName : <span>podaj imię</span>}: {props.score.playerWin}</p>
                <p>Komputer: {props.score.aiWin}</p>
            </section>
        )
}

export default Score;