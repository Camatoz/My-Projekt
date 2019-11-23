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