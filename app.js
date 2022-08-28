console.log("hello");
let resetMusic = new Audio('src/reset.wav');
let over = new Audio('src/gameOver.mp3');
let audioTurn = new Audio('src/turn.wav');
let turn = "X";
let gameOver = false;

//Function to change the turn
const changeTurn = () => {
    return turn === "X" ? "0" : "X";
}

//Function to check for a win
const checkWin = () => {
    let boxTexts = document.getElementsByClassName('boxText');
    let wins = [
        [0, 1, 2, 5, 5, 0], [3, 4, 5, 5, 15, 0],
        [6, 7, 8, 5, 25, 0], [0, 3, 6 - 5, 115, 90],
        [1, 4, 7, 5, 15, 90], [2, 5, 8, 15, 15, 90],
        [0, 4, 8, 5, 15, 45], [2, 4, 6, 5, 15, 135]
    ];
    wins.forEach(e => {
        if ((boxTexts[e[0]].innerText === boxTexts[e[1]].innerText) && (boxTexts[e[1]].innerText === boxTexts[e[2]].innerText) && (boxTexts[e[0]].innerText !== '')) {
            document.querySelector('.Info').innerText = boxTexts[e[0]].innerText + " Won !";
            gameOver = true;
            document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width = '326px';
            over.play();
            document.querySelector('.line').style.transform = `translate(${e[3]}vw ,${e[4]}vw) rotate(${e[5]}deg) `;
            document.querySelector('.line').style.width = '20vw';
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
            if (!gameOver) {
                document.getElementsByClassName('Info')[0].innerText = 'Turn for ' + turn;
            }
        }
    })
})

//Add onclick listener to reset button
reset.addEventListener('click', () => {
    let boxTexts = document.querySelectorAll('.boxText');
    Array.from(boxTexts).forEach(item => {
        item.innerText = '';
        over.pause();
        resetMusic.play();
    });
    turn = "X";
    gameOver = false;
    document.getElementsByClassName('Info')[0].innerText = 'Turn for ' + turn;
    document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width = '0px';
    document.querySelector('.line').style.width = '0vw';
}) 