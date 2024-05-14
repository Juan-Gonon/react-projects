
import "./MemoBlock.css"

export const MemoBlock = ({ square, handleMemoClick, animation }) => {
    return (
        <section className="memo-block" onClick={()=> !square.flipped && !animation && handleMemoClick(square)} >
            <div
                className={`memo-block-inner ${
                    square.flipped && "memo-block-flipped"
                }`}>
                <div className="memo-block-front"></div>
                <div className="memo-block-back">{square.emoji}</div>
            </div>
        </section>
    );
};
