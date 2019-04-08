import React, { Component } from 'react';
import './App.css';
import Score from './Score';
import Board from './Board';

class App extends Component {

  state = {
    playerWin: 0,
    aiWin: 0,
  }

  getScore = (winner) => {
    if (winner === "player") {
      this.setState({
        playerWin: this.state.playerWin + 1,
      })
    } else if (winner === "ai") {
      this.setState({
        aiWin: this.state.aiWin + 1,
      })
    }
  }

  render() {
    return (
      <div>
        <Score score={this.state}/>
        <Board getScore={this.getScore} />
      </div>
    );
  }
}

export default App;
