const boxes = document.querySelectorAll(".code");

boxes[0].focus();

boxes.forEach((box, i) => {
  box.addEventListener("keydown", (e) => {
    if (e.key >= 0 && e.key <= 9) {
      box.value = "";
      setTimeout(() => {
        boxes[i + 1].focus();
      });
    }

    if (e.key == "Backspace") {
      setTimeout(() => {
        boxes[i - 1].focus();
      });
    }
  });
});
