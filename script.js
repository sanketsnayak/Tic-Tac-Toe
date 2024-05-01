let music=new Audio("ting.wav")
let boo=new Audio("booyah.mp3")
let turn="X";
let gameOver=false;
const changeTurn=()=>{
    return turn==="X"?"O":"X";
}
const checkWin=()=>{
    let boxText=document.getElementsByClassName("boxtext")
    let wins=[
        [0,1,2,0,5,0],
        [3,4,5,0,15,0],
        [6,7,8,0,25,0],
        [0,3,6,-10,15,90],
        [1,4,7,0,15,90],
        [2,5,8,10,15,90],
        [0,4,8,0,15,45],
        [2,4,6,0,15,135]
    ]
    wins.forEach(e=>{
        if((boxText[e[0]].innerText === boxText[e[1]].innerText) && (boxText[e[0]].innerText === boxText[e[2]].innerText) && boxText[e[0]].innerText !=="")
        {
            
            document.getElementById("info").innerText=turn+ " Wins";
            gameOver=true;
            document.querySelector(".gif").getElementsByTagName("img")[0].style.width="25vw";
            var clientWidth = document.querySelector(".container").clientWidth;
            if(clientWidth==127) {        
            document.querySelector(".line").style.width="30vw"
            document.querySelector(".line").style.transform=`translate(${e[3]}vw,${e[4]}vw) rotate(${e[5]}deg)`
            boo.play();
            }
        }
    })

}
let boxes=document.getElementsByClassName("container");

Array.from(boxes).forEach(element=>{
    let boxtext=element.querySelector('.boxtext');
    element.addEventListener('click',()=>{  
        if(boxtext.innerText===""){
        boxtext.innerText=turn;
        
        music.play();
        checkWin();
        turn=changeTurn();
        if(!gameOver){
            document.getElementById("info").innerText="Turn of "+ turn;
            
            }
        
        
        
        }
    })
})

document.getElementById("reset").addEventListener("click",()=>{
    let boxtexts=document.getElementsByClassName("boxtext");
    Array.from(boxtexts).forEach(element=>{
        element.innerText="";
    })
    turn="X";
    document.getElementById("info").innerText="Turn of "+ turn;
    document.querySelector(".gif").getElementsByTagName("img")[0].style.width="0";
    document.querySelector(".line").style.width="0vw"
    gameOver=false;
})
