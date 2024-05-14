import { MemoBlock } from "../MemoBlock/MemoBlock";
import "./Board.css"

export const Board = ({ board, handleMemoClick, animation }) => {

    return (
        <main className="board">
            {board &&
                board?.map((item, index) => {
                    return <MemoBlock key={`${item}-${index}`} animation={animation} square={item} handleMemoClick={handleMemoClick} />;
                })}
        </main>
    );
};
