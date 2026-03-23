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
  timer.innerHTML =  d + "&nbsp; " + h + ":" + m + ":" + s;
  setTimeout(updateTime, 30);
}

function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}

  updateTime()
}

