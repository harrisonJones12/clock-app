const moreLessButton = document.getElementById("more-less-button");

const buttonText = document.getElementById("button-text");

const arrowIcon = document.getElementById("arrow");

const handleInfoButtonClick = () => {
  if (buttonText.innerHTML === "more") {
    buttonText.innerHTML = "less";
    arrowIcon.classList.add("arrow-rotated");
  } else {
    buttonText.innerHTML = "more";
    arrowIcon.classList.remove("arrow-rotated");
  }
};

moreLessButton.addEventListener("click", handleInfoButtonClick);
