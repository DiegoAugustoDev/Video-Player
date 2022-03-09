let video = document.getElementById("video1")
let control = document.getElementById("control")
let player = document.getElementById("containerPlayer")
let progressBar = document.getElementById("progressBar")
let inputProgressBar = document.getElementById("inputProgressBar")
let currentTime = document.getElementById("currentTime")
let totalTime = document.getElementById("totalTime")

video.addEventListener("timeupdate", progressBarWidth)

function videoTime(){
    timeCurrent = video.duration * (inputProgressBar.value / 1000)
    video.currentTime = timeCurrent
}

function progressBarWidth(){
    time = video.currentTime * (1000 / video.duration)
    width = time / 10
    progressBar.style.width = `${width}%`
}

function retroceder(){
    video.currentTime -= 15
}

function avancar(){
    video.currentTime += 15
}

function play(){
video.play()
}

function pause(){
    video.pause()
}

function stop(){
    video.pause()
    video.currentTime = 0
}

function aumentar(){
    video.playbackRate += 0.1
}

function diminuir(){
    video.playbackRate -= 0.1
}

function fullscreen(){
    video.requestFullscreen()
}

player.addEventListener("mouseover", function(){
    control.style.visibility = "visible"
})

player.addEventListener("mouseout", function(){
    control.style.visibility = "hidden"
})

