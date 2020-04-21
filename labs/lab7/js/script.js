function init(){
//add your javascrip between these two lines of code

    var button = document.getElementById("entrybutton");
    var msg = document.getElementById("entryinput");
    var output = document.getElementById("textoutput");

    button.addEventListener("click", function(){
        output.innerHTML = msg.value;
        alert("Laura: " + msg.value);
    });

}
window.addEventListener('load', init);
