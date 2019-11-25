let alphabet = 'АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ';
let letterContainer = document.querySelector('div.letters');


// Прокрутка
window.onload = function () {
    // window.scrollTo(x,y)

    document.getElementById('top').onclick = function () {
        // console.log(window.pageYOffset);
        window.scrollTo(0, 0);
    }

    renderLetters();

}

function renderLetters() {

    for (let i = 0; i < alphabet.length; i++) {

        // КОСТЫЛЬ
        if (i == 30) {
            let p = document.createElement('p');
            letterContainer.appendChild(p);
        }

        // ДОБ ТЕГ А
        let letter = document.createElement('a'); // созд вирт элемент А
        letter.className = "letter"; // даем ему класс
        letter.innerHTML = alphabet[i]; // вставляем в него ХТМЛ
        letter.id = 'letter' + i; // даем ему ID
        letterContainer.appendChild(letter); // добавляем его в страницу

        // АЛЬТ ВАРИАНТ МЕДЛЕННЫЙ
        // let letter = '<a href="#" class="letter" id="letter + ' + i + '">' + alphabet[i] + '</a>';
        // letterContainer.innerHTML += letter;

        // ДОБ ТЕГ АУДИО
        let audio = document.createElement('audio');
        audio.id = 'sound' + i;
        audio.innerHTML = '<source src="audio/' + alphabet[i] + '.mp3" type="audio/mpeg">';
        letterContainer.appendChild(audio);

        // КЛИК ПО БУКВЕ
        letter.addEventListener('click', function () {
            let sound = document.querySelector('#sound' + i);
            sound.play();
            this.classList.add('visited');
        });


    }
}