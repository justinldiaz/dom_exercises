window.addEventListener("load", function (){

var but = document.querySelector("#clicker");
but.addEventListener("click", function( event ){
    alert("Hello World")
});

var box = document.querySelector("#mouser");
box.onmouseover = function(event){
	box.style.backgroundColor = "yellow";
}
box.onmouseout = function(event){
	box.style.backgroundColor = "green";
}

});