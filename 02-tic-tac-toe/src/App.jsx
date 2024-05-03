import { useState } from "react";
import "./App.css";
import confetti from "canvas-confetti"
import { Square } from "./Components/Square";
import { TURNS, WINNER_COMBOS } from "./Components/constants";
import { checkWinner, checkEndGame } from "./Logic/board";
import { WinnerModal } from "./Components/WinnerModal";
import { saveGameToStorage, resetGameStorage } from "./Logic/storage";


function App() {
    const [board, setBoard] = useState(()=>{
        const boardFromStorage = localStorage.getItem('board');
        return boardFromStorage ? JSON.parse(boardFromStorage): Array(9).fill(null)
    });
    const [turn, setTurn] = useState(()=>{
        const turnFormStorage = localStorage.getItem('turn');
        return turnFormStorage ?? TURNS.X
    });
    const [winner, setWinner] = useState(null);


    const resetGame = ()=>{
        setBoard(Array(9).fill(null));
        setTurn(TURNS.X);
        setWinner(null)
        resetGameStorage()
 
    }

   
    const updateBoard = (index) => {
        if (board[index] || winner) return; // evita sobresEscribir

        //actualiza el tablero
        const newBoard = [...board];
        newBoard[index] = turn;
        setBoard(newBoard);

        //cambiar el turno
        const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
        setTurn(newTurn);
        saveGameToStorage({
            board : newBoard,
            turn: newTurn
        })

        const newWinner = checkWinner(newBoard);
        if (newWinner) {
            confetti()
            setWinner(newWinner);

        }else if(checkEndGame(newBoard)){
            setWinner(false)
        }
    };

    return (
        <>
            <main className="board">
                <h1>Tic Tac Toe</h1>
                <button onClick={resetGame}>Reset del juego</button>
                <section className="game">
                    {board.map((_, index) => (
                        <Square
                            key={index}
                            index={index}
                            updateBoard={updateBoard}>
                            {board[index]}
                        </Square>
                    ))}
                </section>

                <section className="turn">
                    <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
                    <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
                </section>

                <WinnerModal winner={winner} resetGame={resetGame} />
               
            </main>
        </>
    );
}

export default App;
