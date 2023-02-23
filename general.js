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
  
    fifthSlider = document.getElementById("fifthSlider");
    randomizeSliderTyp4(fifthSlider);
  
   sixthSlider = document.getElementById("sixthSlider");
    randomizeSliderTyp4(sixthSlider);
  
    seventhSlider = document.getElementById("seventhSlider");
    randomizeSliderTyp4(seventhSlider); 

    randomizeRadioButton(document.getElementById("radiobuttonChecked1")); 
    randomizeRadioButton(document.getElementById("radiobuttonUnchecked1")); 
    randomizeRadioButton(document.getElementById("radiobuttonChecked2")); 
    randomizeRadioButton(document.getElementById("radiobuttonUnchecked2")); 
    randomizeCheckboxTyp1(document.getElementById("checkboxChecked1")); 
    randomizeCheckboxTyp1(document.getElementById("checkboxChecked2")); 

    randomizeCheckboxTyp2(document.getElementById("checkboxUnchecked1")); 
    randomizeCheckboxTyp2(document.getElementById("checkboxUnchecked2")); 

    firstToggle = document.getElementById("checkedToggle");
    randomizeToggle(firstToggle); 

    
    scndToggle = document.getElementById("uncheckedToggle");
    randomizeToggle(scndToggle); 

    randomizeToggle( document.getElementById("checkedToggle2")); 
    randomizeToggle(document.getElementById("uncheckedToggle2")) 
  }

  function getRandomBorderStyle(nonePossible = true){
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
        return nonePossible? "none" : "solid"
      default:
        return nonePossible? "none" : "solid"
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