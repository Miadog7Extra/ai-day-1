import React, { useState } from 'react';
import Board from './components/Board';
import './styles/App.css';

const App: React.FC = () => {
  const [winner, setWinner] = useState<string | null>(null);
  const [gameKey, setGameKey] = useState(0); // Key to force re-render

  const handleWin = (winner: string) => {
    setWinner(winner);
  };

  const resetGame = () => {
    setWinner(null);
    setGameKey(prevKey => prevKey + 1); // Change key to force re-render
  };

  return (
    <div className="App">
      <h1>Tic Tac Toe</h1>
      <Board key={gameKey} onWin={handleWin} />
      {winner && <div className={`rocket ${winner}`}>{winner}</div>}
      <button className="restart-button" onClick={resetGame}>Restart Game</button>
    </div>
  );
};

export default App;
