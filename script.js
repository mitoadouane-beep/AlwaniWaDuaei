let selectedColor = "#ff6b6b";
let currentTool = "paint";

let colorHistory = [];

function selectColor(color) {

  selectedColor = color;
  currentTool = "paint";

}

function setTool(tool) {

  currentTool = tool;

}

function saveState() {

  const parts = document.querySelectorAll(".paint-part");

  const state = [];

  parts.forEach(function(part) {

    state.push(part.getAttribute("fill"));

  });

  colorHistory.push(state);

}

function restoreState(state) {

  const parts = document.querySelectorAll(".paint-part");

  parts.forEach(function(part, index) {

    part.setAttribute("fill", state[index]);

  });

  updateProgress();

}

function undoColor() {

  if (colorHistory.length === 0) return;

  const previous = colorHistory.pop();

  restoreState(previous);

}

function resetDrawing() {

  const parts = document.querySelectorAll(".paint-part");

  parts.forEach(function(part) {

    part.setAttribute("fill", "#ffffff");

  });

  colorHistory = [];

  updateProgress();

}

function paintPart(part) {

  saveState();

  if (currentTool === "eraser") {

    part.setAttribute("fill", "#ffffff");

  } else {

    part.setAttribute("fill", selectedColor);

  }

  updateProgress();

}

function updateProgress() {

  const parts = document.querySelectorAll(".paint-part");

  if (parts.length === 0) return;

  let completed = 0;

  parts.forEach(function(part) {

    if (part.getAttribute("fill") !== "#ffffff") {

      completed++;

    }

  });

  const percent =
    Math.round((completed / parts.length) * 100);

  document.getElementById("progressText").textContent =
    percent + "%";

  document.getElementById("progressFill").style.width =
    percent + "%";

}

document.addEventListener("DOMContentLoaded", function() {

  const parts = document.querySelectorAll(".paint-part");

  parts.forEach(function(part) {

    part.addEventListener("click", function() {

      paintPart(part);

    });

    part.addEventListener("touchstart", function(event) {

      event.preventDefault();

      paintPart(part);

    }, { passive: false });

  });

});
