let letter = document.querySelector('a.letter');

letter.addEventListener('click', function () {
    letter.style.color = 'red';
});

function test() {
    var audio = document.createElement('audio');
    audio.setAttribute("autoplay", "true");
    audio.innerHTML = "<source src=\"audio/а.mp3\" type=\"audio/mpeg\">";
    document.body.appendChild(audio);
}

// Прокрутка
window.onload = function () {
    // window.scrollTo(x,y)

    document.getElementById('top').onclick = function () {
        // console.log(window.pageYOffset);
        window.scrollTo(0, 0);
    }


}