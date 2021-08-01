import React from 'react';

const StatusMessage = ({ winner, currentGameState }) => {
  const noMovesLeft = currentGameState.board.every(el => el !== null);

  return (
    <div className="status-message">
      {winner && (
        <>
          Winner is{' '}
          <span className={winner === 'X' ? 'text-green' : 'text-orange'}>
            {winner}
          </span>
        </>
      )}
      {!winner && !noMovesLeft && (
        <>
          Next Player is{' '}
          <span
            className={
              currentGameState.isXNext === 'X' ? 'text-green' : 'text-orange'
            }
          >
            {currentGameState.isXNext ? 'X' : 'O'}
          </span>
        </>
      )}
      {!winner && noMovesLeft && (
        <>
          <span className="text-green">X</span> and{' '}
          <span className="text-orange">O</span> have Tied
        </>
      )}
    </div>
  );
};

export default StatusMessage;
