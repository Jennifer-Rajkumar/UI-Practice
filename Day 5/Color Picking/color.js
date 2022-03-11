function myFunction1() {
    var colors = [];
    var square = document.querySelectorAll(".square");
    for (var i = 0; i < 6; i++) {
        colors.push(randomColor());
        square[i].style.background = colors[i];
        square[i].style.display = "block";
    }
    var random = Math.floor(Math.random() * 6);
    var pickedColor = colors[random];
    document.getElementById("color").innerHTML = pickedColor;
    document.getElementById("msg").innerHTML = "";
}

function myFunction2(selected) {
    var answer = document.getElementById("color").innerText;
    var square = document.querySelectorAll(".square");
    if(answer == square[selected-1].style.background) {
        document.getElementById("msg").innerHTML = "Correct!"
        for (var i = 0; i < 6; i++) {
            square[i].style.display = "none";
        }
    }    
    else {
        document.getElementById("msg").innerHTML = "Try Again";
        square[selected-1].style.display = "none";
    }
}

function randomColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r +", " + g + ", " + b +")";
}