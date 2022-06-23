function show(click, declick, declick2) {
    var x = document.getElementById(click);
    var y = document.getElementById(declick);
    var z = document.getElementById(declick2);
    if (x.style.display === "none") {
        if (click == "cat")
            x.style.display = "block";
        else
            x.style.display = "flex";

        y.style.display = "none";
        if (z != undefined) z.style.display = "none";
    } else {
        x.style.display = "none";
    }
    hide_perm();
}

function hide(x) {
    document.getElementById(x).style.display = "none";
    hide_perm();
}

function hide2() {
    document.getElementById("cat").style.display = "none";
}

function hide_perm() {
    if (window.innerWidth > 480)
        if (document.getElementById("sort_click").style.display === "none" && document.getElementById("filtr_click").style.display === "none")
            document.getElementById("cat").style.display = "block";
}
function addcheck(elem) {
    $(".sort_div").children().next().css("color", "transparent");
    $(elem).children().next().css("color", "inherit");
}