function randomizeLoading() {
  baseString = "";
  //set a random background color to base the design off
  rgb = determineColorSchema();
  body = document.getElementById("body");
  body.style.backgroundColor= baseString.concat("rgb(",rgb[0],",",rgb[1],",",rgb[2],")");
  
  //customizing the sliders
  firstSlider = document.getElementById("firstSlider");
  randomizeSliderTyp1(firstSlider);

  secondSlider = document.getElementById("secondSlider");
  randomizeSliderTyp2(secondSlider);

  thirdSlider = document.getElementById("thirdSlider");
  randomizeSliderTyp3(thirdSlider);

  fourthSlider = document.getElementById("fourthSlider");
  randomizeSliderTyp4(fourthSlider);

  mySlider = document.getElementById("anotherSlider");
  randomizeSliderTyp4(mySlider);


  
}
function randomizeSliderTyp1(element){
  width = getRandomNumber(10, 50);
  trackHeight = getRandomNumber(3, 5);
  brightness = getRandomNumber(0, 255);
  borderRadius = getRandomNumber(0, 10);
  performStandardSliderRandomization(element, width, trackHeight, getRandomBorderStyle(), borderRadius)

  //designing the thumb
  size = element.getBoundingClientRect();
  trackWidth = size.right-size.left;

  thumbWidth = getRandomNumber(1, (trackWidth/3));
  console.log(thumbWidth);
  thumbHeight = getRandomNumber(trackHeight, 20); 
  borderRadius = getRandomNumber(0, 20);
  color = getRandomColor(75)
  borderColor = getRandomColor(brightness)
  boxShadow = getRandomBoxShadow(element, null, brightness)
  borderStyle = "none"

  setThumbProperties(element, thumbWidth, thumbHeight, borderRadius, color,  borderColor, boxShadow, "none")
}


function randomizeSliderTyp2(element){
  width = getRandomNumber(10, 50);
  trackHeight = getRandomNumber(3, 30);
  brightness = getRandomNumber(0, 255);
  borderRadius = getRandomNumber(0, 10);
  performStandardSliderRandomization(element, width, trackHeight, getRandomBorderStyle(), borderRadius)

  //designing the thumb
  size = element.getBoundingClientRect();
  trackWidth = size.right-size.left;

  thumbWidth = getRandomNumber(1, (trackWidth/3));
  console.log(thumbWidth);
  thumbHeight = getRandomNumber(trackHeight, 30); 
  borderRadius = getRandomNumber(0, 5);
  color = getRandomColor(75)
  borderColor = getRandomColor(brightness)
  boxShadow = getRandomBoxShadow(element, null, brightness)
  borderStyle = getRandomBorderStyle()

  setThumbProperties(element, thumbWidth, thumbHeight, borderRadius, color,  borderColor, boxShadow, "none")
  
}


function randomizeSliderTyp3(element){
  width = getRandomNumber(3, 50);
  trackHeight = getRandomNumber(3, 30);
  brightness = getRandomNumber(0, 255);
  borderRadius = getRandomNumber(0,10)
  performStandardSliderRandomization(element, width, trackHeight, "solid", borderRadius)
  element.style.width = baseString.concat(width, "px");
  color = getRandomColor(75)
  randomizer = Math.round(getRandomNumber(0,1))
  if(randomizer == 0){
    element.style.borderLeft = getRandomBorderTrackVariation(color, brightness);
  }
  else{
    element.style.borderLeft = getRandomBorderTrackVariation(getRandomColor(75), brightness);
  }
  
  element.style.borderRight = getRandomBorderTrackVariation(element.style.background, brightness);
  element.style.borderTop = "none";
  element.style.borderBottom = "none";
  thumbHeight = getRandomNumber(trackHeight, 40); 
  borderRadius = getRandomNumber(0, 5);
  
  borderColor = getRandomColor(brightness)
  borderStyle = getRandomBorderStyle()

  setThumbProperties(element, width, thumbHeight, borderRadius, color,  color, null, borderStyle)
  element.value = 0;
  
}

function randomizeSliderTyp4(element){
  greyScales =["#a9a9a9", "#989898", "#878787", "#767676", "#656565", "#555555", "#444444", "#333333", "#222222", "#111111"]
  randomNumber = Math.round(getRandomNumber(0,greyScales.length-1))
  trackColor = greyScales[randomNumber]
  thumbColor = greyScales[greyScales.length-1 - randomNumber]

  width = getRandomNumber(10, 50);
  trackHeight = getRandomNumber(3, 30);
  brightness = getRandomNumber(0, 255);
  borderRadius = getRandomNumber(0, 30);
  performStandardSliderRandomization(element, width, trackHeight, "none", borderRadius)
  element.style.backgroundColor = trackColor;
  //designing the thumb
  size = element.getBoundingClientRect();
  trackWidth = size.right-size.left;

  thumbWidth = getRandomNumber(1, (trackWidth/2));
  thumbHeight = getRandomNumber(5, 30); 
  borderRadius = getRandomNumber(0, 5);

  setThumbProperties(element, thumbWidth, thumbHeight, borderRadius, thumbColor,  "none", "none", "none")
 
}

function performStandardSliderRandomization(element, width, height, borderStyle, borderRadius){
  baseString = "";
  contraryRed = 255 - rgb[0];
  contraryGreen = 255 - rgb[1];
  contraryBlue = 255 - rgb[2];
  element.value = String(getRandomNumber(0, 100));

   //desiging the track
  element.style.height = baseString.concat(height, "px");
  element.style.width = baseString.concat(width, "%");
  element.style.borderStyle = borderStyle;
  element.style.borderRadius = baseString.concat(borderRadius, "px");
  element.style.background = baseString.concat("rgb(",contraryRed,",",contraryGreen,",",contraryBlue,")");
}

function setThumbProperties(element, width, height, borderRadius, color, borderColor, boxShadow, borderStyle){
  baseString = "";
  height = baseString.concat(height, "px");
  width = baseString.concat(width, "px");
  borderRadius = baseString.concat(borderRadius, "px");

  element.style.setProperty("--thumbWidth", width);
  element.style.setProperty("--thumbHeight", height);
  element.style.setProperty("--thumbBorderRadius", borderRadius);
  element.style.setProperty("--thumbBackground", color);
  element.style.setProperty("--thumbBorderColor", borderColor);
  element.style.setProperty("--thumbBoxShadow", boxShadow);
  element.style.setProperty("--thumbBorderStyle", borderStyle);
}
function getRandomBorderStyle(){
  number = Math.round(getRandomNumber(1,100))
  switch (number){
    case 1:
      return "solid"
    case 2:
      return "dotted"
    case 3:
      return "dashed"
    case 4:
      return "inset"
    case 5:
      return "outset"
    case 6:
      return "ridge"
    case 7:
      return "double"
    case 8:
      return "none"
    default:
      return "none"
  }
}

function getRandomBorderTrackVariation(color, brightness){
  //100px solid blue;
  width = getRandomNumber(10, 120);
  color = color = null? getRandomColor(brightness): color
  return "" + width + "px solid " + color  
}
function getRandomBoxShadow(element, color, brightness){
  size = element.getBoundingClientRect();
  width = size.right-size.left;
  baseString = "";
  
  //this might turn into a shit show in case smths bigger than 255 or smaller than zero
  if(color != null){
    return baseString.concat("-", width, "px ", "0 0 ", width, "px ", color);
  }
  else{
    return baseString.concat("-", width, "px ", "0 0 ", width, "px ", getRandomColor(brightness));
  }
  
}
function determineColorSchema(){
  mode = Math.round(getRandomNumber(0, 1));
  let red;
  let green;
  let blue;
  switch (mode) {
    //light
    case 0:
      red = getRandomNumber(200, 235);
      green = getRandomNumber(200, 235);
      blue = getRandomNumber(200, 235);
      break;
    //dark
    case 1:
      red = getRandomNumber(10, 55);
      green = getRandomNumber(10, 55);
      blue = getRandomNumber(10, 55);
      break;
    default:
      red = getRandomNumber(200, 255);
      green = getRandomNumber(200, 255);
      blue = getRandomNumber(200, 255);
      console.log("default")

  }
  return [red, green, blue];
}



function getRandomColor(brightness) {
  function randomChannel(brightness) {
    var r = 255 - brightness;
    var n = 0 | (Math.random() * r + brightness);
    var s = n.toString(16);
    return s.length == 1 ? "0" + s : s;
  }
  return (
    "#" +
    randomChannel(brightness) +
    randomChannel(brightness) +
    randomChannel(brightness)
  );
}

// Function to generate random number
function getRandomNumber(min, max) {
  return Math.random() * (max - min) + min;
}
