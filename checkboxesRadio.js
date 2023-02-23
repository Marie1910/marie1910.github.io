function randomizeCheckboxTyp1(element){
    baseString = "";
    contraryRed = 255 - rgb[0];
    contraryGreen = 255 - rgb[1];
    contraryBlue = 255 - rgb[2];

    size = getRandomNumber(15, 40);
    brightness = getRandomNumber(0, 255);
    borderRadius = getRandomNumber(0, 5);
    borderStyle = getRandomBorderStyle();

     //desiging the track
    element.style.height = baseString.concat(size, "px");
    element.style.width = baseString.concat(size, "px");
    element.style.borderStyle = borderStyle;
    element.style.borderRadius = baseString.concat(borderRadius, "px");
    element.style.backgroundColor = getRandomColor(75);
    
    markBorderSize = getRandomNumber(2,8)
    markHeight = size-getRandomNumber(0, 10)-markBorderSize;
    markWdith = markHeight/2

    positionX = (size - markWdith -markBorderSize)/2
    positionY = 0//(size - markHeight)/4
    element.style.setProperty("--mark-width", baseString.concat(markWdith, "px"));
    element.style.setProperty("--mark-height", baseString.concat(markHeight, "px"));
    element.style.setProperty("--mark-left", baseString.concat(positionX, "px"));
    element.style.setProperty("--mark-top", baseString.concat(positionY, "px"));
    element.style.setProperty("--mark-border-width", baseString.concat(markBorderSize, "px"));
    element.style.setProperty("--color-checked", getRandomColor(75));
    element.style.setProperty("--mark-style", getRandomBorderStyle(false));
    element.style.setProperty("--mark-color", baseString.concat("rgb(",contraryRed,",",contraryGreen,",",contraryBlue,")"));
    element.style.setProperty("--mark-border-radius", baseString.concat(getRandomNumber(0,14), "px"));
   
  }

  function randomizeCheckboxTyp2(element){
    baseString = "";
    contraryRed = 255 - rgb[0];
    contraryGreen = 255 - rgb[1];
    contraryBlue = 255 - rgb[2];

    size = getRandomNumber(10, 40);
    brightness = getRandomNumber(0, 255);
    borderRadius = getRandomNumber(0, 5);
    borderStyle = getRandomBorderStyle();

     //desiging the track
    element.style.height = baseString.concat(size, "px");
    element.style.width = baseString.concat(size, "px");
    element.style.borderStyle = borderStyle;
    element.style.borderRadius = baseString.concat(borderRadius, "px");
    element.style.backgroundColor = baseString.concat("rgb(",contraryRed,",",contraryGreen,",",contraryBlue,")");
    
   
  }