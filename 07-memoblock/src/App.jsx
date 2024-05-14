import { EMOJI_LIST } from "./components/constants";
import "./App.css";
import { useEffect, useState } from "react";
import { Board } from "./components/Board/Board";
import { barajarBoard } from "./Logic/board";
import { saveGameToStorage, resetGameStorage } from "./Storage";
import confetti from "canvas-confetti"

function App() {
    const [board, setBoard] = useState(() => {
        const boardFromStorage = localStorage.getItem("board");
        return boardFromStorage ? JSON.parse(boardFromStorage) : [];
    });
    const [animation, setAnimation] = useState(false);
    const [selectedSquare, setSelectedSquare] = useState(() => {
        const squareFromStorage = localStorage.getItem("selectedSquare");
        return squareFromStorage ? JSON.parse(squareFromStorage) : null;
    });

    useEffect(() => {
        if (board.length) return;
        const listBoard = barajarBoard([...EMOJI_LIST, ...EMOJI_LIST]);
        setBoard(listBoard);
    }, []);

    const handleMemoClick = (square) => {
        if (square.flipped) return;

        const invertedSquare = { ...square, flipped: true };
        const boardCopy = [...board];

        boardCopy.splice(square.index, 1, invertedSquare);

        setBoard(boardCopy);

        if (!selectedSquare) {
            setSelectedSquare(square);
        } else if (selectedSquare.emoji === invertedSquare.emoji) {
            setSelectedSquare(null);
        } else {
            setAnimation(true);

            setTimeout(() => {
                boardCopy.splice(selectedSquare.index, 1, selectedSquare);
                boardCopy.splice(square.index, 1, square);

                setBoard(boardCopy);
                setAnimation(false);
                setSelectedSquare(null);
            }, 1000);
        }
    };

    useEffect(() => {
        saveGameToStorage({ board, selectedSquare });
       if( board.every((item)=> item.flipped === true)){
        confetti()
        handleClickRemoveStorage();
       }
    }, [selectedSquare]);

    const handleClickRemoveStorage = () => {
        const listBoard = barajarBoard([...EMOJI_LIST, ...EMOJI_LIST]);
        setBoard(listBoard);
        setSelectedSquare(null);
        resetGameStorage();
    };

    return (
        <>
            <h1 className="title">Memorama</h1>
            <button className="btn-reset" onClick={handleClickRemoveStorage}>Reset Game</button>
            <Board
                animation={animation}
                handleMemoClick={handleMemoClick}
                board={board}></Board>
        </>
    );
}

export default App;
