let stars = 0;
let selectedCharacter = "👧 مريم";

function showScreen(id) {
  document.querySelectorAll(".screen").forEach(screen => {
    screen.classList.remove("active");
  });

  document.getElementById(id).classList.add("active");
}

function startGame() {
  showScreen("characters");
}

function selectCharacter(name) {
  selectedCharacter = name;

  document.getElementById("selectedCharacter").textContent =
    "شخصيتك: " + name;

  showScreen("worlds");
}

function selectWorld(world) {
  document.getElementById("selectedWorld").textContent =
    world;

  showScreen("levels");
}

function openLevel(level) {

  document.getElementById("selectedLevel").textContent =
    "المرحلة " + level;

  showScreen("coloring");

}

function completeColoring() {

  stars += 10;

  document.getElementById("stars").textContent =
    "⭐ " + stars;

  document.getElementById("rewardStars").textContent =
    "+10 نجوم";

  showScreen("reward");

}

function listenDua() {

  alert(
    "🤲 دعاء جميل للأطفال\\n\\nبسم الله"
  );

}
let selectedColor = "#ff6b6b";

function selectColor(color) {
  selectedColor = color;
}

document.addEventListener("DOMContentLoaded", function () {

  const parts = document.querySelectorAll(".paint-part");

  parts.forEach(function (part) {

    part.addEventListener("click", function () {

      part.setAttribute("fill", selectedColor);

    });

    part.addEventListener("touchstart", function (event) {

      event.preventDefault();

      part.setAttribute("fill", selectedColor);

    }, { passive: false });

  });

});
