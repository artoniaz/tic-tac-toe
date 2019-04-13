import React from "react";
import "./notification.css";

class OpeningBoard extends React.Component {

    state = {
        playerName: "",
    }

    submitName = e => {
        e.preventDefault();
        this.props.getPlayerName(this.state.playerName);
    }

    handleInput = e => {
        const playerName = e.target.value;
        this.setState({
            playerName,
        })
    }

    render () {

        const {playerName} = this.state;

        return (
            <div className="notification">
            <h1>Witaj w grze <i style={{ color: "green" }}>kółko i krzyżyk</i></h1>
            <form noValidate onSubmit={this.submitName}>
                <label htmlFor="playerName">Podaj swoje imię</label>
                <input type="text" id="playerName" placeholder="Twoje imię" value={playerName} onChange={this.handleInput}/>
                {playerName && <p>Cześć {playerName.charAt(0).toUpperCase() + playerName.slice(1)}</p>}
                <button>zacznij grę</button>
            </form>
        </div>
        )
    }
}


export default OpeningBoard;