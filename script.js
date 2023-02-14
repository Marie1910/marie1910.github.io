function randomizeLoading() {
  console.log(document.getElementById("basic"));
  console.log(getRandomColor());
  console.log(randomColor(220));
  document.getElementById("basic").style.background = getRandomColor();
}

function randomColor(brightness) {
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
function randomNumber(min, max) {
  return Math.random() * (max - min) + min;
}

function getRandomColor() {
  randomizer = Math.random();
  while (randomizer == 0.0 || randomizer == 0.5) {
    randomizer = Math.random();
  }
  return (
    "#" +
    (0x1000000 + randomizer * 0xffffff)
      .toString(16)
      .substring(1, 7)
      .toUpperCase()
  );
}
