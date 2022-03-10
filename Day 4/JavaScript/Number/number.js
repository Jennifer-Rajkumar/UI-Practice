function myFunction() {
    var number = parseInt(document.getElementById("number").value);
    let result = 0;
    while(number > 0) {
        let factorial = 1;
        let digit = number%10;
        for(let i=2; i<=digit; i++) {
            factorial *= i;
        }
        result += factorial;
        number /= 10;
    }
    document.getElementById("result").innerHTML = result%9;
}