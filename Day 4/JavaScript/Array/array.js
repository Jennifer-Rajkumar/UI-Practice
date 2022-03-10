function myFunction() {
    var size = parseInt(document.getElementById("size").value);
    var array = document.getElementById("array").value.split(" ");
    var sum = parseInt(document.getElementById("sum").value);
    for(let i=1; i<size; i++) {
        if(parseInt(array[i]) + parseInt(array[i-1]) == sum) {
            document.getElementById("index").innerHTML = i;
            return;
        }
    }
    document.getElementById("index").innerHTML = -1;
}