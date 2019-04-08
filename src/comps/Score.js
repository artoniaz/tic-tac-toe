import React, { Component } from 'react';
import "./Score.css"

const Score = props => {
        return (
            <section id="score">
                <p>Twoje wygrane: {props.score.playerWin}</p>
                <p>Wygrane komputera: {props.score.aiWin}</p>
            </section>
        )
}

export default Score;