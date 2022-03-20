
function clock() {
  const date = new Date();
 
  document.getElementById('clock').innerHTML = date.toLocaleTimeString('de-DE');
  setInterval(clock, 1000);
}

