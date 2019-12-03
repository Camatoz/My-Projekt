let alphabet = "АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ";
let letterContainer = document.querySelector("div.letters");
let numbers = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20
];
let numberContainer = document.querySelector("div.container-num");

window.onload = function() {
  // Прокрутка
  document.getElementById("top").onclick = function() {
    window.scrollTo(0, 0);
  };
  renderLetters(alphabet, letterContainer, "audio");
  renderLetters(numbers, numberContainer, "audio/numbers");
};

function renderLetters(list, container, folder) {
  for (let i = 0; i < list.length; i++) {
    // КОСТЫЛЬ
    if (i == 30) {
      let p = document.createElement("p");
      container.appendChild(p);
    }

    // ДОБ ТЕГ А
    let letter = document.createElement("a"); // созд вирт элемент <a>
    letter.className = "letter"; // даем ему класс
    letter.innerHTML = list[i]; // вставляем в него HTML
    letter.id = "letter" + i; // даем ему ID
    container.appendChild(letter); // добавляем его в страницу

    // АЛЬТ ВАРИАНТ МЕДЛЕННЫЙ
    // let letter = '<a href="#" class="letter" id="letter' + i + '">' + alphabet[i] + '</a>';
    // letterContainer.innerHTML += letter;

    // ДОБ ТЕГ АУДИО
    let audio = document.createElement("audio");
    audio.id = "sound" + i;
    audio.innerHTML =
      '<source src="' + folder + "/" + list[i] + '.mp3" type="audio/mpeg">';
    container.appendChild(audio);

    // КЛИК ПО БУКВЕ
    letter.addEventListener("click", function() {
      audio.play();
      this.classList.add("visited");
    });
  }
}
