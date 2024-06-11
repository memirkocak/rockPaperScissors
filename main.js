const header = document.querySelector('header')
const rock = document.querySelector('#rock')
const scissors = document.querySelector('#scissors')
const paper = document.querySelector('#paper')
const chooseSelect = document.querySelector('#chooseSelect')
const submit = document.querySelector('#submit')
const playerid = document.querySelector('#playerId')
const main = document.querySelector('main')

let player = false;
let player1 ;
let player2 ;
let playerCounter = 0;
let winner ;

function Winner(){
  if(playerCounter === 2){

    if(player1 === 'paper' && player2 === 'rock') winner = 'PLAYER 1 WIN !!!'
    if(player1 === 'rock' && player2 === 'scissors') winner = 'PLAYER 1 WIN !!!'
    if(player1 === 'scissors' && player2 === 'paper') winner = 'PLAYER 1 WIN !!!'
    if(player2 === 'paper' && player1 === 'rock') winner = 'PLAYER 2 WIN !!!'
    if(player2 === 'rock' && player1 === 'scissors') winner = 'PLAYER 2 WIN !!!'
    if(player2 === 'scissors' && player1 === 'paper') winner = 'PLAYER 2 WIN !!!' 
    if(player1 === player2) winner = 'NO WINNER'

    if(player1 === 'rock') player1 = rock.src
    if(player1 === 'scissors') player1 = scissors.src
    if(player1 === 'paper') player1 = paper.src
    if(player2 === 'rock') player2 = rock.src
    if(player2 === 'scissors') player2 = scissors.src
    if(player2 === 'paper') player2 = paper.src

  document.body.innerHTML = `
  <header class = 'newHeader'>
    <h1>${winner}</h1>
  </header>
    

    <div class='divContent'>
      <div>
        <h2>PLAYER 1</h2>
        <img src ='${player1}' alt='${player1}'>
      </div>

      <div>
        <h2>PLAYER 2</h2>
        <img src ='${player2}' alt='${player2}'>
      </div>
    </div>

    <button id='restart'>restart</button>

  `
  document.body.className = 'newBody'

    const restart = document.querySelector('#restart')
    restart.addEventListener('click',()=>{
      location.reload()
    })

}
}

function playerTrueFalse(choose){
  playerCounter++;
  if(player === false){
    player1 = choose
  }
  if(player === true){
    player2 = choose
  }

  player = !player

  if(player === true){
    header.style.backgroundColor = '#96df62'
    document.body.style.backgroundColor = '#c3deeb'
    playerid.textContent = 'PLAYER 2'
  }
}

rock.addEventListener('click',()=>{
  playerTrueFalse('rock')
  Winner()
})

scissors.addEventListener('click',()=>{
  playerTrueFalse('scissors')
  Winner()
})

paper.addEventListener('click',()=>{
  playerTrueFalse('paper')
  Winner()
})
