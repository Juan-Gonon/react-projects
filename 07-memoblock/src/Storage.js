export const saveGameToStorage = ({board, selectedSquare}) => {
    
    localStorage.setItem('board',JSON.stringify(board));
    localStorage.setItem('selectedSquare', JSON.stringify(selectedSquare))
}

export const resetGameStorage = ()=>{
    localStorage.removeItem('board');
    localStorage.removeItem('selectedSquare')
}