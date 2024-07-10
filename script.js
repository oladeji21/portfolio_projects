const music = ["01 More Life (feat. Q Tip) - (SongsLover.com)",
"02 Dream in Color - (SongsLover.com)",
"03 Wassup (feat. Young Thug) - (SongsLover.com)",
"04 Thornton Street - (SongsLover.com)"
]

const audio = document.querySelector("audio")
const play = document.querySelector(".play-pause")
const next = document.querySelector(".next")
const prev = document.querySelector(".prev")
const progress = document.querySelector(".progress")
const currTime = document.querySelector(".curr_time")
const elapTime = document.querySelector(".elap_time")

let currentMusic = 0

const chooseMusic = (index) =>{
    audio.src= `./Cordae - Just Until.... - EP - (SongsLover.com)/${music[index]}.mp3`
}

chooseMusic(currentMusic)

play.addEventListener("click",()=>{
    if (audio.paused) {
        audio.play()
        play.textContent = "⏸"
    }else{
        audio.pause()
        play.textContent = "▶"
    }
})

next.addEventListener("click",()=>{
    if (currentMusic == music.length - 1) {
        currentMusic = 0
    }else {
        currentMusic++
    }
    chooseMusic(currentMusic)
    audio.play()
})

prev.addEventListener("click",()=>{
    if (currentMusic == 0) {
        currentMusic = music.length - 1
    }else {
        currentMusic--
    }
    chooseMusic(currentMusic)
    audio.play()
})
 
const updateTime = ()=>{
    progress.value = (audio.currentTime / audio.duration) * 100;

    // console.log(audio.currentTime / audio.duration);

    let currentMin = Math.trunc(audio.currentTime / 60)
    let currentSec = Math.trunc(audio.currentTime % 60)
    // console.log(currentMin);
    if(currentMin < 10){
        currentMin = `0${currentMin}`
    }
    if(currentSec < 10 ){
        currentSec = `0${currentSec}`
    }

    currTime.textContent = `${currentMin} : ${currentSec}`    
}

audio.addEventListener("timeupdate",updateTime)
// click , change , submit, animationend , input , timeupdate, mouseenter , mouseleave, mouseover, keypress