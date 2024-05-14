export function barajarBoard(listBoard) {
    for (let i = listBoard.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [listBoard[i], listBoard[j]] = [listBoard[j], listBoard[i]];
    }

    return listBoard.map((item, i) => ({
        index: i,
        emoji: item,
        flipped: false,
    }))
}
