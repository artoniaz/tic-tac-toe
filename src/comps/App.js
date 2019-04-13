import React, { Component } from 'react';
import './App.css';
import Score from './Score';
import Board from './Board';
import OpeningBoard from './OpeningBoard';
import EndBoard from './EndBoard';

class App extends Component {

  state = {
    playerWin: 0,
    aiWin: 0,
    playerName: "",
    winner: "",
    gameEnd: false,
  }

  getScore = (winner) => {
    if (winner === "player") {
      this.setState({
        playerWin: this.state.playerWin + 1,
      })
      setTimeout(() => {
        this.setState({
          winner,
        })
      }, 1000);
    } else if (winner === "ai") {
      this.setState({
        aiWin: this.state.aiWin + 1,
      })
      setTimeout(() => {
        this.setState({
          winner,
        })
      }, 1000);
    }
  }

  getPlayerName = (playerName) => {
    const name = playerName.charAt(0).toUpperCase() + playerName.slice(1);
    this.setState({
      playerName: name,
    })
  };

  clearGame = () => {
    this.setState({
      gameEnd: true,
    })
  };

  finishEndGame = () => {
    this.setState({
      gameEnd: false,
    })
  }

  render() {
    return (
      <div>
        {this.state.playerName ? null : <OpeningBoard getPlayerName={this.getPlayerName} />}
        <Score score={this.state} playerName={this.state.playerName} />
        <Board getScore={this.getScore} gameEnd={this.state.gameEnd} finish={this.finishEndGame}/>
        {this.state.winner ? <EndBoard data={this.state} clear={this.clearGame} /> : null}
      </div>
    );
  }
}

export default App;
