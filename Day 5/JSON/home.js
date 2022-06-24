fetch('home.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        appendData(data);
    })
    .catch(function (err) {
        console.log('error: ' + err);
    });
function appendData(data) {
    var element = ''; 
    for (var i = 0; i < data.length; i++) {
        var className = data[i].category.split(" ").join("");
        element += '<div class="card '+className+'">';
        element += '<div class="category">'+data[i].category+'</div>';
        element += '<div class="description">'+data[i].description+'</div>';
        element += '<div class="footer">';
        element += '<div class="left"><i class="fa fa-envelope icon" aria-hidden="true"></i><i class="fa fa-paperclip icon" aria-hidden="true"></i></div>';
        element += '<div class="right"><i class="fa fa-user icon" aria-hidden="true"></i></div></div></div>';
    }
    document.getElementById("myData").innerHTML = element;
}
