import React from 'react';

const StatusMessage = ({ winner, currentGameState }) => {
  const noMovesLeft = currentGameState.board.every(el => el !== null);

  return (
    <h2>
      {winner && `Winner is ${winner}`}
      {!winner &&
        !noMovesLeft &&
        `Next Player is ${currentGameState.isXNext ? 'X' : 'O'}`}
      {!winner && noMovesLeft && 'X and O tied'}
    </h2>
  );
};

export default StatusMessage;
