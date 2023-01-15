let sum = 0;
let remaining = [4,4,4,4,4,4];
let cards = [1,2,3,4,5,6];
let aimove = false;
let winner;
let reqmovefind = [3,10,17,24,31];
let suits = ["S", "C", "H", "D"];
let whowon = "";
let moves = 0;
let clickcount=0;
function showrules(){
    clickcount+=1;
    if(clickcount%2 != 0){
        document.getElementById("MyRuleBook").style.display = "block";
        document.getElementById("rulesbutton").innerHTML = "Hide";
    }
    else{
        document.getElementById("MyRuleBook").style.display = "none";
        document.getElementById("rulesbutton").innerHTML = "Rules";
    }
}

function checkwin(){
    if(sum>31 && aimove == false){
        displaywinner("Lost");
        return true;
    }
    else if(sum>31 && aimove == true){
        displaywinner("Won");
        return true;
    }
    else{
        return false;
    }
}
function makemove(){
    let absdiff = [];
    let mindiff = 100000;
    for(let i = 0; i<5; i++){
        absdiff[i] = reqmovefind[i]-sum;
        if(absdiff[i]<0){
            absdiff[i]+=40;
        }
        mindiff = Math.min(mindiff, absdiff[i]);
    }
    if(mindiff == 0){
        let randomint = Math.floor(Math.random()*6);
        if(remaining[randomint]!=0){
            sum+=cards[randomint];
            console.log(sum);
            checkwin();
            aimove = false;
            moves++;
            changecard(cards[randomint]);
            changesum();
        }
        else{
            randomint = Math.floor(Math.random()*6);
            if(remaining[randomint]!=0){
                sum+=cards[randomint];
                checkwin();
                aimove = false;
                moves++;
                changecard(cards[randomint]);
                changesum();
            }
        }
    }
    else{
        if(remaining[mindiff-1] != 0){
            sum+=mindiff;
            checkwin();
            aimove = false;
            moves++;
            changecard(mindiff);
            changesum();
        }
        else{
            sum+=((mindiff == 1) ? (mindiff+1):(mindiff-1));
            checkwin();
            aimove = false;
            moves++;
            changecard((mindiff == 1) ? (mindiff+1):(mindiff-1));
            changesum();
        }
    }
}
function humaninput(hin){
    if(sum<=31 && !(checkwin()) && remaining[hin-1]){
        var a = hin;
        sum+=a;
        changesum();
        moves++;
        changecard(a);
        let winner = checkwin();
        if(winner == true){}
        else{
            aimove = true;
            setTimeout(makemove, 150);
        }
    }
}
function changecard(a){
    console.log("changecard");
    let changedcard = a;
    if(remaining[changedcard-1]>1){
        remaining[changedcard-1]--;
        document.getElementById(`cardno${changedcard}`).innerHTML = `<span class = "cardspan" id = "cardno${changedcard}span">Remaining:${remaining[changedcard-1]}</span><img src="./cardimages/${changedcard}${suits[4-remaining[changedcard-1]]}.png" alt="error" class = "cardimages" id="cardno${changedcard}image">`;
        document.getElementById(`card${moves}`).innerHTML = `<img src="./cardimages/${changedcard}${suits[3-remaining[changedcard-1]]}.png" alt="error" class = "cardendimages" id = "playedcardsno${moves}">`;
    }
    else{
        remaining[changedcard-1]--;
        document.getElementById(`card${moves}`).innerHTML = `<img src="./cardimages/${changedcard}${suits[3-remaining[changedcard-1]]}.png" alt="error" class = "cardendimages" id = "playedcardsno${moves}">`;
        document.getElementById(`cardno${changedcard}`).remove();
    }
}
function changesum(){
    document.getElementById("sumid").textContent = ` Total Sum is = ${sum}  `;
}
document.addEventListener("DOMContentLoaded", myscript)
function myscript(){
  document.getElementById("cardno1").addEventListener("click", function(){
    humaninput(1);
  })
  document.getElementById("cardno2").addEventListener("click", function(){
    humaninput(2);
  })
  document.getElementById("cardno3").addEventListener("click", function(){
    humaninput(3);
  })
  document.getElementById("cardno4").addEventListener("click", function(){
    humaninput(4);
  })
  document.getElementById("cardno5").addEventListener("click", function(){
    humaninput(5);
  })
  document.getElementById("cardno6").addEventListener("click", function(){
    humaninput(6);
  }) 
}
function displaywinner(z){
    document.getElementById("winnerid").style.display = "block";
    if(z=="Won"){
        
        document.getElementById("winnerid").innerHTML+='<img src="excited.gif" alt></img>';
    }
    else{
        document.getElementById("winnerid").innerHTML+='<img src="sad-worried.gif" alt></img>';
    }
    document.getElementById("winnerpara").textContent = `You ${z} `;
}