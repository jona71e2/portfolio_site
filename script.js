window.addEventListener("load", init);

function init() {
    console.log("init");
    document.querySelector(".icon").addEventListener("click", clickFunction);
}


function clickFunction() {
    console.log("clickFunction");
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

//Hvis "myLinks" har display "block" så skal display stylen være none: ellers skal den være block.
