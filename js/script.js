let audioOne = new Audio(`https://dkihjuum4jcjr.cloudfront.net/ES_ITUNES/Cafe%20Ambience%20With%20English%20Voices/ES_Cafe%20Ambience%20With%20English%20Voices.mp3`)
//document.querySelector(`#audioOne`) Not sure how I would keep both options here in the event that the URL source was removed so it could still play?

let audioTwo = new Audio(`https://dkihjuum4jcjr.cloudfront.net/ES_ITUNES/Carnival%20Games/ES_Carnival%20Games.mp3`) 
//document.querySelector(`#audioTwo`)

let audioThree = new Audio(`https://dm0qx8t0i9gc9.cloudfront.net/previews/audio/BsTwCwBHBjzwub4i4/large-concert-applause_zkGeZH4__NWM.mp3`) 
//document.querySelector(`#audioThree`)

let playOne = document.querySelector (`#playOne`)
let playTwo = document.querySelector (`#playTwo`)
let playThree = document.querySelector (`#playThree`)


let playA1 = function () {
    return audioOne.paused ? audioOne.play() : audioOne.pause();
}
playOne.addEventListener(`click`, playA1)

let playA2 = function () {
    return audioTwo.paused ? audioTwo.play() : audioTwo.pause();
}
playTwo.addEventListener(`click`, playA2)

let playA3 = function () {
    return audioThree.paused ? audioThree.play() : audioThree.pause();
}
playThree.addEventListener(`click`, playA3)