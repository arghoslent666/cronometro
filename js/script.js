//---------------------DOM Elements ----------------------//

const hours = document.querySelector('.hours');
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');
const miSeconds = document.querySelector('.m-seconds')
const button = document.querySelector('.btn-play');
const resetButton = document.querySelector('.btn-reset');
const pauseButton = document.querySelector('.btn-pause');

//--------------------------------------------------------//

//---------------------Control Variables------------------//

let h = 0
let m = 0
let s = 0
let ms = 0
let timer;

//--------------------------------------------------------//

//---------------------TimerFunction------------------//

function timerFunction(){
     timer = setInterval(() => {

        hours.textContent = `${h} :`
        minutes.textContent = `${m} :`
        seconds.textContent = `${s} :`
        miSeconds.textContent = `${ms}`

        if(ms < 10){
            miSeconds.textContent = `0${ms}`
        }

        if(s < 10){
            seconds.textContent = `0${s} :`
        }

        if(m < 10){
            minutes.textContent = `0${m} :`
        }

        if(h < 10){
            hours.textContent = `0${h} :`
        }

        ms++
        if(ms === 100){
            s++
            ms = 0
        }

        if(s === 60){
            m++
            s = 0
        }

        if(m === 60){
            h++
            m = 0
        }


    }, 10);

    return timer
}

//--------------------------------------------------------//

//-------------------resetFunction------------------------//

function resetTimer(){
    h = 0
    m = 0
    s = 0
    ms= 0

    hours.textContent = `00 :`
    minutes.textContent = `00 :`
    seconds.textContent = `00 :`
    miSeconds.textContent = `00`
    clearInterval(timer)
    timerFunction()
}

//----------------------------------------------------------//

//---------------------pauserFunction-----------------------//

function pauseTimer(){
    clearInterval(timer)
}

//----------------------------------------------------------//

//---------------------EventFunctions-----------------------//

button.addEventListener('click',()=>{
   timerFunction()
   button.disabled = true
});

resetButton.addEventListener('click',()=>{
    resetTimer()
    button.disabled = false
})

pauseButton.addEventListener('click',()=>{
    pauseTimer()
    button.disabled = false
});

//Ola,quando nos clicamos no butao de play novemente vc ja reparou que sempre ele acresenta mais um segundo no mili segundos, 
//ent para resolver isso quando clicamos no botao de play ele recebe disabled, e tiramos isso quando clicamos em pause ou reset,
//foi um jeito que eu pensei para que a funcao setInterval n chame ela novamente com ms++