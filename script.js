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

  brightness = getRandomNumber(0, 255);
  
  element = document.getElementById("basic");
  randomizeSilder(element, brightness);
  randomizeThumb(element, brightness);
  element = document.getElementById("basic1");
  randomizeSilder(element, brightness);
  randomizeThumb(element, brightness);
  element = document.getElementById("basic2");
  randomizeSilder(element, brightness);
  randomizeThumb(element, brightness);
}
function randomizeSliderTyp1(element){
  baseString = "";

  width = getRandomNumber(10, 100);
  height = getRandomNumber(2, 5);
  contraryRed = 255 - rgb[0];
  contraryGreen = 255 - rgb[1];
  contraryBlue = 255 - rgb[2];
  brightness = getRandomNumber(0, 255);
  borderRadius = getRandomNumber(0, 10);

  //desiging the track
  element.style.height = baseString.concat(height, "px");
  element.style.width = baseString.concat(width, "%");
  element.style.borderStyle = "none";
  element.style.borderRadius = baseString.concat(borderRadius, "px");
  element.style.background = baseString.concat("rgb(",contraryRed,",",contraryGreen,",",contraryBlue,")");

  //designing the thumb
  size = element.getBoundingClientRect();
  trackHeight = size.bottom-size.top;
  trackWidth = size.right-size.left;
  width = getRandomNumber(1, (trackWidth/3));
  height = getRandomNumber(trackHeight, 20); 
  borderRadius = getRandomNumber(0, 20);

  element.style.setProperty("--thumbWidth", baseString.concat(width, "px"));
  element.style.setProperty("--thumbHeight", baseString.concat(height, "px"));
  element.style.setProperty("--thumbBorderRadius", baseString.concat(borderRadius, "px"));
  element.style.setProperty("--thumbBackground", getRandomColor(brightness));
  element.style.setProperty("--thumbBorderColor", getRandomColor(brightness));
  element.style.setProperty("--thumbBorderStyle", getRandomBorderStyle());
  element.value = String(getRandomNumber(0, 100));
}

function randomizeSliderTyp2(element){
  baseString = "";

  width = getRandomNumber(10, 100);
  height = getRandomNumber(10, 50);
  contraryRed = 255 - rgb[0];
  contraryGreen = 255 - rgb[1];
  contraryBlue = 255 - rgb[2];
  brightness = getRandomNumber(0, 255);
  borderRadius = getRandomNumber(0, 20);
  borderStyle = getRandomBorderStyle();

  //desiging the track
  element.style.height = baseString.concat(height, "px");
  element.style.width = baseString.concat(width, "%");
  element.style.borderStyle = borderStyle;
  element.style.borderRadius = baseString.concat(borderRadius, "px");
  element.style.background = baseString.concat("rgb(",contraryRed,",",contraryGreen,",",contraryBlue,")");

  //designing the thumb
  size = element.getBoundingClientRect();
  trackHeight = size.bottom-size.top;
  trackWidth = size.right-size.left;
  width = getRandomNumber(1, (trackWidth/10));
  height = getRandomNumber(0, trackHeight+10); 
  borderRadius = getRandomNumber(0, 20);

  element.style.setProperty("--thumbWidth", baseString.concat(width, "px"));
  element.style.setProperty("--thumbHeight", baseString.concat(height, "px"));
  element.style.setProperty("--thumbBorderRadius", baseString.concat(borderRadius, "px"));
  element.style.setProperty("--thumbBackground", getRandomColor(brightness));
  element.style.setProperty("--thumbBorderColor", getRandomColor(brightness));
  element.style.setProperty("--thumbBoxShadow", getRandomBoxShadow(element, contraryRed, contraryGreen, contraryBlue));
  element.style.setProperty("--thumbBorderStyle", borderStyle);
  element.value = String(getRandomNumber(0, 100));
}


function randomizeSilder(element, brightness) {
  baseString = "";

  width = getRandomNumber(10, 100);
  height = getRandomNumber(5, 30);
  //brightness = getRandomNumber(0, 255);
  borderRadius = getRandomNumber(0, 20);

  element.style.height = baseString.concat(height, "px");
  element.style.width = baseString.concat(width, "%");
  element.style.background = getRandomColor(brightness);
  element.style.borderStyle = getRandomBorderStyle();
  element.style.borderRadius = baseString.concat(borderRadius, "px");
}
function randomizeThumb(element, brightness) {
  baseString = "";
  size = element.getBoundingClientRect();
  elemHeight = size.bottom-size.top;
  elemWidth = size.right-size.left;
  width = getRandomNumber(5, (elemWidth/2));
  height = getRandomNumber(elemHeight, 35); 
  //brightness = getRandomNumber(0, 255);
  borderRadius = getRandomNumber(0, 100);

  element.style.setProperty("--thumbWidth", baseString.concat(width, "px"));
  element.style.setProperty("--thumbHeight", baseString.concat(height, "px"));
  element.style.setProperty("--thumbBorderRadius", baseString.concat(borderRadius, "px"));
  element.style.setProperty("--thumbBackground", getRandomColor(brightness));
  element.style.setProperty("--thumbBorderColor", getRandomColor(brightness));
  element.style.setProperty("--thumbBorderStyle", getRandomBorderStyle());
  
  element.value = getRandomNumber(0, 100);
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
function getRandomBoxShadow(element, contraryRed, contraryGreen, contraryBlue){
  size = element.getBoundingClientRect();
  width = size.right-size.left;
  baseString = "";
  randomifier = getRandomNumber(0,10);
  console.log(randomifier)
  console.log(contraryRed)
  //this might turn into a shit show in case smths bigger than 255 or smaller than zero
  if(randomifier%2==0){
    let red = Math.round(contraryRed+randomifier > 255? contraryRed-randomifier : contraryRed+randomifier);

    let green = Math.round(contraryBlue+randomifier > 255? contraryBlue-randomifier : contraryBlue+randomifier);
    let blue = Math.round(contraryGreen+randomifier > 255? contraryGreen-randomifier : contraryGreen+randomifier);
    color = baseString.concat("rgb(",red,",",green,",",blue,")");
    console.log(color)
  }
  else{
    let red = Math.round(contraryRed-randomifier < 0? contraryRed+randomifier : contraryRed-randomifier);
    let green = Math.round(contraryBlue-randomifier < 0? contraryBlue+randomifier : contraryBlue-randomifier);
    let blue = Math.round(contraryGreen-randomifier < 0? contraryGreen+randomifier : contraryGreen-randomifier);
    color = baseString.concat("rgb(",red,",",green,",",blue,")");
    console.log(color)
  }
  
  return baseString.concat("-", width, "px ", "0 0 ", width, "px ", color);
}
function determineColorSchema(){
  mode = Math.round(getRandomNumber(0, 3));
  let red;
  let green;
  let blue;
  switch (mode) {
    //light
    case 0:
      red = getRandomNumber(230, 255);
      green = getRandomNumber(230, 255);
      blue = getRandomNumber(230, 255);
      break;
    //dark
    case 1:
      red = getRandomNumber(0, 30);
      green = getRandomNumber(0, 30);
      blue = getRandomNumber(0, 30);
      break;
    //colorful
    case 2:
      red = getRandomNumber(0, 30);
      green = getRandomNumber(0, 30);
      blue = getRandomNumber(0, 30);
      break;
    default:
      red = getRandomNumber(230, 255);
      green = getRandomNumber(230, 255);
      blue = getRandomNumber(230, 255);
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
