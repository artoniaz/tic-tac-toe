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
    } else {
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
    if (this.state.gameEnd) {
      this.setState({
        winner: "",
        gameEnd: !this.state.gameEnd,
      })
    } else {
      this.setState({
        gameEnd: !this.state.gameEnd,
      })
    }
  }



  render() {
    return (
      <div id="game">
        {this.state.playerName ? null : <OpeningBoard getPlayerName={this.getPlayerName} />}
        <Score score={this.state} playerName={this.state.playerName} />
        <Board getScore={this.getScore} end={this.state.gameEnd} clear={this.clearGame} playerName={this.state.playerName}/>
        {this.state.winner ? <EndBoard data={this.state} clear={this.clearGame} /> : null}
      </div>
    );
  }
}

export default App;
