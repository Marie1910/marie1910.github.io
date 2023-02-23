function randomizeRadioButton(element){
    baseString = "";
    contraryRed = 255 - rgb[0];
    contraryGreen = 255 - rgb[1];
    contraryBlue = 255 - rgb[2];

    size = getRandomNumber(15, 40);
    middleSize = getRandomNumber(size/2, size/1.1);
    middleBorder = (size-middleSize)/2
    element.style.height = baseString.concat(size, "px");
    element.style.width = baseString.concat(size, "px");
    element.style.backgroundColor = baseString.concat("rgb(",contraryRed,",",contraryGreen,",",contraryBlue,")");
    element.style.setProperty("--checked-color", getRandomColor(75));
    element.style.setProperty("--middle-size", (baseString.concat(middleSize, "px")));
    element.style.setProperty("--middle-border", baseString.concat(middleBorder,"px"));
    element.style.setProperty("--middle-color", getRandomColor(75));


    brightness = getRandomNumber(0, 255);
    borderRadius = getRandomNumber(0, 5);
    borderStyle = getRandomBorderStyle();
   
  }