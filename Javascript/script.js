var showbox = document.getElementById('show_box');
var imgbox = document.getElementById('img_box');

function show(image){
    showbox.style.display = "flex";
    imgbox.src = image;
}

function cancel(){
    showbox.style.display = "none";
}

