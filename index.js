const moreLessButton = document.getElementById("more-less-button");

const buttonText = document.getElementById("button-text");

const arrowIcon = document.getElementById("arrow");

const timeZoneDrawer = document.getElementById("time-zone-drawer");

const quoteContainer = document.getElementById("quote-container");

const infoWrapper = document.getElementById("info-wrapper");

const handleInfoButtonClick = () => {
  if (buttonText.innerHTML === "more") {
    buttonText.innerHTML = "less";
    arrowIcon.classList.add("arrow-rotated");
    timeZoneDrawer.classList.add("expanded");
    quoteContainer.classList.add("hidden");
    infoWrapper.classList.remove("hidden");
    timeZoneDrawer.scrollIntoView();
  } else {
    buttonText.innerHTML = "more";
    arrowIcon.classList.remove("arrow-rotated");
    timeZoneDrawer.classList.remove("expanded");
    quoteContainer.classList.remove("hidden");
    infoWrapper.classList.add("hidden");
  }
};

moreLessButton.addEventListener("click", handleInfoButtonClick);
