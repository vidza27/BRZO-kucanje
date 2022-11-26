word = document.getElementById('word')
text = document.getElementById('text')
scoreEL = document.getElementById('score')
timeEL = document.getElementById('time')
endgameEL = document.getElementById('end-game-container')

words = ['burek','cevapi','sto', 'stolica','racunar','laptop','kobasica','jovan','dusko','wc solja','ekran','knjiga']

randomWord = ''
score = 0
time = 10
timeInterval = setInterval(upadateTime,1000)

function getRandomWord(){
    randomNum = Math.floor(Math.random()*words.length)
    return words[randomNum]
}

function placeRandomWord(){
    randomWord = getRandomWord()
    word.innerText = randomWord
}

function upadateScore(){
    score++
    scoreEL.innerText = score
}

function upadateTime(){
    time--
    timeEL.innerText = time +'s'

    if(time == 0){
        clearInterval(timeInterval)
        gameOver()
    }
}

function gameOver(){
    endgameEL.innerHtml = `
    <h1>Vreme je isteklo! </h1>
    <p> Vas finalni rezultat je ${score}</p>
    <button oneclick = "location.reload()"> Probaj ponovo </button>
    `
    endgameEL.styel.display = 'flex'
}

placeRandomWord()

text.addEventListener('input', e =>{
    insertedText = e.target.value
    if(insertedText == randomWord){
        placeRandomWord()
        upadateScore()
        text.value = ''
        time += 2
        upadateTime()
    }
})