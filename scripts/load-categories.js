function loadCats() {
    let cat = document.getElementById("cat");
    $.getJSON('scripts/database.json', function (data) {
        _.countBy(data, function (data) { return data.category; });
        var cats = _.keys(_.countBy(data, function (data) { return data.category; })).sort();
        for (let i = 0; i < cats.length; i++) {
            cat.innerHTML += "<p class='categories' onclick=createSession(\'category\','" + cats[i] + "');loadContent();>" + cats[i].replace('-', ' ') + "</p>";
        }
        cat.innerHTML += "<p class='categories' onclick=sessionStorage.clear();loadContent();>Resetuj opcje</p>";
        if (window.innerWidth >= 100 && window.innerWidth <= 480) {
            let temp = document.getElementsByClassName("categories");
            for (let i = 0; i < temp.length; i++) {
                temp[i].addEventListener('click', hide2)
            }
        }
    });
}