const StatusMessage = ({ winner, gamingBoard }) => {
  const { squares, isXNext } = gamingBoard;

  const noMovesLeft = squares.every(squareValue => squareValue !== null);
  const nextPlayer = isXNext ? '1' : '2';

  const renderStatusMessage = () => {
    if (winner) {
      return (
        <>
          Winner is{' '}
          <span className={isXNext ? 'text-green' : 'text-orange'}>
            {winner}
          </span>
        </>
      );
    }
    if (!winner && noMovesLeft) {
      return (
        <>
          {' '}
          Player <span className="text-green">1</span> and Player{' '}
          <span className="text-orange">2</span> ! Tied
        </>
      );
    }

    if (!winner && !noMovesLeft) {
      return (
        <>
          {' '}
          Player{' '}
          <span className={isXNext ? 'text-green' : 'text-orange'}>
            {nextPlayer}
          </span>
          `s turn
        </>
      );
    }

    return null;
  };
  return <h2 className="status-message">{renderStatusMessage()}</h2>;
};

export default StatusMessage;
