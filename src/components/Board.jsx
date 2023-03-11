import { useState } from 'react';
import Square from './Square';

const Board = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);

  console.log(squares);

  const handleSquareClick = clickedPosition => {
    if (squares[clickedPosition]) {
      return;
    }
    setSquares(currentSquares => {
      return currentSquares.map((squareValue, position) => {
        if (clickedPosition === position) {
          return isXNext ? 'X' : 'O';
        }

        return squareValue;
      });
    });

    setIsXNext(currentIsXNext => !currentIsXNext);
  };

  const renderedSquare = position => {
    return (
      <Square
        value={squares[position]}
        onClick={() => handleSquareClick(position)}
      />
    );
  };

  return (
    <div className="board">
      <div className="board-row">
        {renderedSquare(0)}
        {renderedSquare(1)}
        {renderedSquare(2)}
      </div>
      <div className="board-row">
        {renderedSquare(3)}
        {renderedSquare(4)}
        {renderedSquare(5)}
      </div>
      <div className="board-row">
        {renderedSquare(6)}
        {renderedSquare(7)}
        {renderedSquare(8)}
      </div>
    </div>
  );
};

export default Board;
