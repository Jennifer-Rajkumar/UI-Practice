function myFunction() {
    let number = parseInt(document.getElementById("number").value);
    let result = 0;
    while(number > 0) {
        let factorial = 1;
        let digit = number%10;
        for(let i=2; i<=digit; i++) {
            factorial *= i;
        }
        console.log(digit+" "+factorial+" "+number);
        result += factorial;
        number = Math.floor(number/10);
    }
    document.getElementById("result").innerHTML = result%9;
}
