function greetUser(name) {
    $('#greeting').text("Hello, " + name);
}

function switchImage(adress) {
    $('#gallery-main').attr("src", adress);
}

function changeBackgroundColor() {
    var color = 'rgb(' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ')';
    $("body").css('background-color', color);
}
