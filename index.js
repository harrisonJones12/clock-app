const moreLessButton = document.getElementById("more-less-button");

const buttonText = document.getElementById("button-text");

const arrowIcon = document.getElementById("arrow-icon");

const handleInfoButtonClick = () => {
  if(buttonText.innerHTML === "more") {
    buttonText.innerHTML = "less";
    arrowIcon.className = 'fas fa-chevron-up'
} else {  
  buttonText.innerHTML = "more";
  arrowIcon.className = 'fas fa-chevron-down'
}
};

moreLessButton.addEventListener("click", handleInfoButtonClick);


