function increaseFontSize() {
  // Set value of the parameter as fontSize
  var cont = document.getElementById("body");
  var style = window.getComputedStyle(cont, null).getPropertyValue('font-size');
  var fontSize = parseFloat(style); 
  cont.style.fontSize = (fontSize + 2) + 'px';
}
function decreaseFontSize() {
  // Set value of the parameter as fontSize
  var cont = document.getElementById("body");
  var style = window.getComputedStyle(cont, null).getPropertyValue('font-size');
  var fontSize = parseFloat(style); 
  cont.style.fontSize = (fontSize - 2) + 'px';
}
document.addEventListener('keyup', event => {
  if (event.code === 'Space') {
    console.log('Space pressed'); 
    document.getElementById('uname').focus();
  }
})