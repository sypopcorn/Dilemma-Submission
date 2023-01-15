
let TTTBoard = [];
const humaninput="O";
const aiinput="X";
const wincases=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
let score;
// class Move
// {
//     constructor()
//     {
//         let row,col;
//     }
// }
let boxes = document.querySelectorAll("td"); //every td ki class is box

function minimax(board,player){
    // console.log("minimax");
    let emptyspots = emptysquares();

    if (checkwin(board,humaninput)){
        return {evaluatedscore: -1};
    }
    else if (checkwin(board,aiinput)){
        return {evaluatedscore: 1};
    }
    // else if(checktie()){
    //     return {evaluatedscore: 0};
    // }
    else if(emptyspots.length==0){
        return {evaluatedscore: 0};
    }
    let goodmoves =[];
    for(let i=0; i<emptyspots.length; i++){
        let trymove = {};
        trymove.index = board[emptyspots[i]];
        board[emptyspots[i]]=player;
        
        if(player==humaninput){
            let result = minimax(board, aiinput);
            trymove.evaluatedscore = result.evaluatedscore;
        } else {
            let result = minimax(board,humaninput);
            trymove.evaluatedscore = result.evaluatedscore;
        }
        board[emptyspots[i]]=trymove.index;
        // console.log(board[emptyspots[i]]);
        goodmoves.push(trymove);
    }

    let bestmoveindex;
    if(player === humaninput){
        let bestevaluatedscore = Number.MAX_SAFE_INTEGER;
        for(let i=0; i< goodmoves.length; i++){
            if(goodmoves[i].evaluatedscore < bestevaluatedscore){
                bestevaluatedscore = goodmoves[i].evaluatedscore;
                bestmoveindex = i;
            }
        }
    }
    else{
        let bestevaluatedscore = Number.MIN_SAFE_INTEGER;
        for(let i=0; i< goodmoves.length; i++){
            if(goodmoves[i].evaluatedscore > bestevaluatedscore){
                bestevaluatedscore = goodmoves[i].evaluatedscore;
                bestmoveindex = i;
            }
        }
    }
    // console.log(goodmoves);
    return goodmoves[bestmoveindex];
}

startGame();

function startGame(){
    TTTBoard = [];
    document.querySelector(".winner").style.display = "none";
    for(let i = 0; i<9; i++){
        TTTBoard.push(i);
    }
    for(let i=0;i<boxes.length;i++){
        boxes[i].innerText ="";
        boxes[i].style.removeProperty("background-color");
        boxes[i].addEventListener("click",hin);
    }
}

function hin(box) {
    // console.log("hin");
    if (typeof TTTBoard[box.target.id] == "number") {
        putmark(box.target.id, humaninput);
        if ((!checkwin(TTTBoard, humaninput)) && (!checktie())) putmark(aimove(), aiinput);
    }
}

function putmark(inputid,player){
    // console.log("putmark");
    TTTBoard[inputid]=player;
    document.getElementById(inputid).innerText=player;
    let winner = checkwin(TTTBoard,player);
    if(winner) endgame(winner);
}

function checkwin(board,player){
    let playermoves = [];
    for(let i=0; i<board.length; i++){
        if(board[i] === player){
            playermoves.push(i);
        }
    }
    // console.log(playermoves);
    let winner = null;
    for(let [index,wincase] of wincases.entries()){
        if (wincase.every((elem) => playermoves.indexOf(elem)>=0)){
            winner = {wherewon: index,
                winningplayer: player};
            break;
        }
    }
    // console.log("checkwin");
    return winner;
}

function endgame(winner){
    for(let index of wincases[winner.wherewon]){
        document.getElementById(index).style.backgroundColor= (winner.winningplayer==humaninput? "plum" : "pink") ;
    }
    for(let i=0;i<boxes.length;i++){
        boxes[i].removeEventListener("click",hin);
    }
    var textt;
    var shadowcolor;
    if(winner.player==humaninput){
        score = 20;
        textt="YAAYY!! You win .";
        shadowcolor="#32fed2";
    }
    else{
        score=-20;
        textt="OOPS! You lose.";
        shadowcolor="#ff0622";
    }
    showresult(textt,shadowcolor)
    // showresult((winner.player == humaninput) ? "YAAYY!! You win." : "OOPS! You lose.")
    // console.log("endgame");
}

// function showresult(gameresult){
//     document.querySelector(".winner").style.display="block";
//     document.querySelector(".text").innerText= gameresult;
//     // console.log("result");
// }
function showresult(text,scolour){
    document.querySelector(".winner").style.display="block";
    document.querySelector(".winner").style.boxShadow="0 0 15px "+ scolour;
    document.querySelector(".text").innerText= text;
}

function emptysquares(){
    let temparr = [];
    for(let i=0; i<TTTBoard.length; i++){
        if(typeof TTTBoard[i] == "number"){
            temparr.push(TTTBoard[i]);
        }
    }
    return temparr;
}

function aimove(){
    // console.log("aimove");
    // return emptysquares()[0];
    let aibestmove = minimax(TTTBoard, aiinput);
    return aibestmove.index;
}

function checktie(){
    // console.log("checktie");
    if (emptysquares().length == 0){
        for(let i=0; i<boxes.length; i++){
            boxes[i].style.backgroundColor="#98FB98";
            boxes[i].removeEventListener("click",hin);
        }
        showresult("Tie Game!");
        return true;
    }
    return false;
}

