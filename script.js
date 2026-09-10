function game(){
    player1 = player("player1", "x");
    player2 = player("player2", "o");


}

function player(name, symbol){
    let wins = 0;

    const getWins = () => wins;
    const incrementWins = () => {wins += 1;};
    return { name, symbol, getWins, incrementWins }
}



const gameBoard = (() => {
    let board = [];

    const reset = () => {
        for(let i = 0; i < 9; i++){board[i] = "n";}
    }

    const setSymbol = (num, symbol) => {
        board[num] = symbol;
    }

    const getSymbol = (num) =>{
        return board[num]
    }
    
    const checkWin = () => {
        //column win
        for(let i = 0; i < 3; i++){
            
        }
        for(let i = 0; i < 7; i +=3){

        }
        if(board[0] == board[4] && board[0] == board[8] || board[2] == board[4] && board[2] == board[6])[

        ]
    }

    return { reset, setSymbol, getSymbol, checkWin};
})();

