console.log("hello");
let ting = new Audio('src/Ting.mp3');
let over = new Audio('src/gameOver.wav');
let audioTurn = new Audio('src/turn.wav');
let turn = "X";
let gameOver=false;

//Function to change the turn
const changeTurn = () => {
    return turn === "X" ? "0" : "X";
}

//Function to check for a win
const checkWin = () => {
    let boxTexts = document.getElementsByClassName('boxText');
    let wins = [
        [0, 1, 2], [3, 4, 5],
        [6, 7, 8], [0, 3, 6],
        [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];
    wins.forEach(e => {
        if ((boxTexts[e[0]].innerText === boxTexts[e[1]].innerText) && (boxTexts[e[1]].innerText === boxTexts[e[2]].innerText) && (boxTexts[e[0]].innerText !== '')){
            document.querySelector('.Info').innerText=boxTexts[e[0]].innerText+ " Won !";
            gameOver=true;
            document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width='326px';
            gameOver.play();
        }
    })
}

//Game logic
let boxes = document.getElementsByClassName('box');
Array.from(boxes).forEach((element) => {
    let boxText = element.querySelector('.boxText');
    element.addEventListener('click', () => {
        if (boxText.innerText === '') {
            boxText.innerText = turn;
            turn = changeTurn();
            audioTurn.play();
            checkWin();
            if(!gameOver){
                document.getElementsByClassName('Info')[0].innerText = 'Turn for ' + turn;
            }
        }
    })
})