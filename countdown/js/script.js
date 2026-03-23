window.onload = () => {

let comp = new Date("2026-04-26")
let timer = document.getElementById("timer");
console.log(timer)

function updateTime() {
  const date = new Date();
  let ms_diff = (comp - date) + 14*1000*3600;
  let d = Math.floor(ms_diff/(1000*3600*24));
  let h = Math.floor((ms_diff/(1000*3600) - d*24));
  let m = Math.floor((ms_diff/(1000*60) - d*24*60 - h*60));
  let s = (ms_diff/(1000) - d*24*3600 - h*3600 - m*60);
  // let s = Math.floor((ms_diff/(1000) - d*24*3600 - h*3600 - m*60));
  let ds = Math.round(date.getMilliseconds()/10);
  h = checkTime(h);
  m = checkTime(m);
  s = checkTime(s.toFixed(2));
  ds = checkTime(ds);
  timer.innerHTML =  d + " days " + h + ":" + m + ":" + s;
  setTimeout(updateTime, 43);
}

function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}

let x = 2,
  y = 2,
  dirX = 1,
  dirY = 1;
const speed = 2;
let dvd = document.getElementById("dvd");
let prevColorChoiceIndex = 0;
let black = document.getElementById("black");
const dvdWidth = dvd.clientWidth + 2;
const dvdHeight = dvd.clientHeight + 2;
const screenHeight = document.body.clientHeight;
const screenWidth = document.body.clientWidth;

window.onresize = () => {
  screenHeight = document.body.clientHeight;
  screenWidth = document.body.clientWidth;
}

function getNewRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;}

function animate() {
  if (y + dvdHeight >= screenHeight || y < 2) {
    dirY *= -1;
    dvd.style.color = getNewRandomColor();
  }
  if (x + dvdWidth >= screenWidth || x < 2) {
    dirX *= -1;

    dvd.style.color = getNewRandomColor();
  }
  x += dirX * speed;
  y += dirY * speed;
  dvd.style.left = x + "px";
  dvd.style.top = y + "px";
  window.requestAnimationFrame(animate);
}

window.requestAnimationFrame(animate);

updateTime()
}

