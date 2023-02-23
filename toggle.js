function randomizeToggle(element){
baseString = "";
contraryRed = 255 - rgb[0];
contraryGreen = 255 - rgb[1];
contraryBlue = 255 - rgb[2];
borderRadius = getRandomNumber(0, 20);
width = getRandomNumber(50, 80);
height = width/getRandomNumber(2,2.5)
toggleSize = getRandomNumber(height/1.5, 1.5*height)
toggleBorderHeight = (height - toggleSize)/2
borderRadius = getRandomNumber(0,20)
togglePosition = width - toggleBorderHeight - toggleBorderHeight - toggleSize
 //desiging the track
element.style.height = baseString.concat(height, "px");
element.style.width = baseString.concat(width, "px");

toggleColor = Math.round(getRandomColor(1,2))==1? getRandomColor(255-contraryRed) : getRandomColor(75);
element.style.setProperty("--checked-color", getRandomColor(75));
element.style.setProperty("--unchecked-color", baseString.concat("rgb(",contraryRed,",",contraryGreen,",",contraryBlue,")"));
element.style.setProperty("--overall-border", baseString.concat(borderRadius, "px"));
element.style.setProperty("--toggle-color", getRandomColor(75));
element.style.setProperty("--toggle-size", baseString.concat(toggleSize, "px"));
element.style.setProperty("--toggle-border-height", baseString.concat(toggleBorderHeight, "px"));
element.style.setProperty("--toggle-border-width", baseString.concat(toggleBorderHeight, "px"));
element.style.setProperty("--toggle-radius", baseString.concat(borderRadius, "px"));
element.style.setProperty("--toggle-checked-position", baseString.concat(togglePosition, "px"));

}
