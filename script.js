function game(){
    const playerArray = [player("player1", "x"), player("player2", "o")]; 
    let activePlayer = playerArray[0];
    const playerTurn = document.querySelector('p');
    playerTurn.textContent = `${activePlayer.getName()}'s turn`

    const getActivePlayer = () => activePlayer;

    const switchPlayerTurn = () => {
        if(activePlayer == playerArray[0]){
            activePlayer = playerArray[1];
        }
        else{
            activePlayer = playerArray[0];
        }
    }

    const printNewRound = () => {
        gameBoard.printBoard();
        console.log(`${getActivePlayer().getName()}'s turn.`);
    }

    const playRound = (num) => {
        
        if(gameBoard.getSymbol(num) == ''){
            playerTurn.textContent = `${start.getActivePlayer().getName()}'s turn`
            gameBoard.setSymbol(num, getActivePlayer().getSymbol());
            checkWinner();
            switchPlayerTurn();
            printNewRound()

        }
        else{
            console.log('position taken');
        }
    }

    const checkWinner = () => {
        let board = gameBoard.getBoard();
        //column win
        for(let i = 0; i < 3; i++){
            if(board[i] == board[i + 3] && board[i] == board[i + 6] && board[i] != ''){
                if(board[i] == 'o'){
                    console.log(playerArray[1].getName(), 'wins! col');
                    return true;
                }
                else{
                    console.log(playerArray[0].getName(), 'wins! col');
                    return true;
                }
            }
        }
        for(let i = 0; i < 7; i += 3){
            if(board[i] == board[i + 1] && board[i] == board[i + 2] && board[i] != ''){
                if(board[i] == 'o'){
                    console.log(playerArray[1].getName(), 'wins! row');
                    return true;
                }
                else{
                    console.log(playerArray[0].getName(), 'wins! row');
                    return true;
                }
            }  
        }
        if(board[0] == board[4] && board[0] == board[8] || board[2] == board[4] && board[2] == board[6] && board[4] != ''){
                if(board[4] == 'o'){
                    console.log(playerArray[1].getName(), 'wins! dia');
                    return true;
                }
                else{
                    console.log(playerArray[0].getName(), 'wins! dia');
                    return true;
                }
        }
        if(gameBoard.checkEndGame() == false){
            console.log('Tie!')
        }
        return false;
    }

    printNewRound();

    return{ playRound, getActivePlayer }    
}

function player(name, symbol){
    let wins = 0;

    const getName = () => name;
    const getSymbol = () => symbol;
    const getWins = () => wins;
    const incrementWins = () => {wins += 1;};

    return { getName, getSymbol, getWins, incrementWins }
}

const gameBoard = (() => {
    let board = [];
    for(let i = 0; i < 9; i++){board[i] = "";}

    const reset = () => {
        for(let i = 0; i < 9; i++){board[i] = "n";}
    }

    const getBoard = () => {return board;}

    const setSymbol = (num, symbol) => {
        board[num] = symbol;
    }

    const getSymbol = (num) =>{
        return board[num]
    }
    
    const printBoard = () => {
        console.log(board[0], board[1], board[2]);
        console.log(board[3], board[4], board[5]);
        console.log(board[6], board[7], board[8]);
    }

    const checkEndGame = () => {
        let openSpaces = 0;
        for(let i = 0; i < 9; i++){
            if(board[i] == ""){
                openSpaces++;
            }
            if(openSpaces > 0){
                return true;
            }
        }
        return false
    }

    return { reset, getBoard, setSymbol, getSymbol, printBoard, checkEndGame };
})();

const start = game();

const gridItemsArray = document.querySelectorAll('.grid-items');
for(let i = 0; i < 9; i++){
    console.log(gridItemsArray[i]);
    gridItemsArray[i].addEventListener('click', () => {
        gridItemsArray[i].textContent = start.getActivePlayer().getSymbol();
        start.playRound(i);
    })
}