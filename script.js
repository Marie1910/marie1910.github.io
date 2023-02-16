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
  randomizeSliderTyp2(thirdSlider);

  brightness = getRandomNumber(0, 255);
  
  
}
function randomizeSliderTyp1(element){
  width = getRandomNumber(10, 100);
  height = getRandomNumber(2, 5);
  brightness = getRandomNumber(0, 255);
  borderRadius = getRandomNumber(0, 10);
  performStandardSliderRandomization(element, width, height, getRandomBorderStyle(), borderRadius)

  //designing the thumb
  size = element.getBoundingClientRect();
  trackHeight = size.bottom-size.top;
  trackWidth = size.right-size.left;
  thumbWidth = getRandomNumber(1, (trackWidth/3));
  thumbHeight = getRandomNumber(trackHeight, 20); 
  borderRadius = getRandomNumber(0, 20);
  setThumbProperties(thumbWidth, thumbHeight, borderRadius, getRandomColor(75), getRandomColor(brightness), getRandomBoxShadow(element, null, brightness), borderStyle)
}

function randomizeSliderTyp2(element){
  width = getRandomNumber(10, 100);
  trackHeight = getRandomNumber(10, 50);
  brightness = getRandomNumber(0, 255);
  borderRadius = getRandomNumber(0, 20);
  performStandardSliderRandomization(element, width, trackHeight, getRandomBorderStyle(), borderRadius)
 
  //designing the thumb
  size = element.getBoundingClientRect();
  trackWidth = size.right-size.left;
  thumbWidth = getRandomNumber(1, (trackWidth/10));
  thumbHeight = getRandomNumber(trackHeight, trackHeight+10); 
  borderRadius = getRandomNumber(0, 20);
  setThumbProperties(thumbWidth, thumbHeight, borderRadius, getRandomColor(75), getRandomColor(brightness), getRandomBoxShadow(element, brightness), borderStyle)
  element.value = String(getRandomNumber(0, 100));
}


function randomizeSliderTyp3(element){
  baseString = "";

  width = getRandomNumber(10, 100);
  height = getRandomNumber(5, 30);
  contraryRed = 255 - rgb[0];
  contraryGreen = 255 - rgb[1];
  contraryBlue = 255 - rgb[2];
  brightness = getRandomNumber(0, 255);
  borderRadius = getRandomNumber(0, 10);

  //desiging the track
  element.style.height = baseString.concat(height, "px");
  element.style.width = baseString.concat(width, "%");
  element.style.borderStyle = getRandomBorderStyle();
  element.style.borderRadius = baseString.concat(borderRadius, "px");
  element.style.background = baseString.concat("rgb(",contraryRed,",",contraryGreen,",",contraryBlue,")");

  //designing the thumb
  size = element.getBoundingClientRect();
  trackHeight = size.bottom-size.top;
  trackWidth = size.right-size.left;
  width = getRandomNumber(1, (trackWidth/3));
  height = getRandomNumber(5, trackHeight); 
  borderRadius = getRandomNumber(0, 20);
  setThumbProperties(width, height, borderRadius, getRandomColor(75), getRandomColor(brightness), null, getRandomBorderStyle())
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
  element.style.borderRadius = baseString.concat(borderRadius, "px");
  element.style.background = baseString.concat("rgb(",contraryRed,",",contraryGreen,",",contraryBlue,")");
}

function setThumbProperties(width, height, borderRadius, color, borderColor, boxShadow, borderStyle){
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
