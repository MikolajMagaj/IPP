function loadContent() {
    let main = document.getElementById("main");
    let filter = sessionStorage.getItem("filter");
    let sortBy = sessionStorage.getItem("sortBy");
    let category = sessionStorage.getItem("category");
    main.innerHTML = "";
    $.getJSON('scripts/database.json', function (data) {
        if (filter == null && sortBy == null && category == null) {
            for (let i = 0; i < data.length; i++) {
                main.innerHTML += "<div class='content'><img src='img/" + data[i].img_url + "'><p class='content_name'>" + data[i].name + "</p><p class='content_prize'>" + data[i].price + "zł</p></div>"
            }
        }
        else {
            if (category != null) {
                let range;
                if (filter != null) range = filter.trim().split(/\s+/);
                let content = _.filter(data, function (data) { return data.category == category; });
                if (sortBy == "priceup") {
                    content = _.sortBy(content, "price");
                }
                else if (sortBy == "pricedown") {
                    content = _.sortBy(content, "price").reverse();
                }
                else if (sortBy == "nameup") {
                    content = _.sortBy(content, "name");
                }
                else if (sortBy == "namedown") {
                    content = _.sortBy(content, "name").reverse();
                }
                for (let i = 0; i < content.length; i++) {
                    if (range != null) {
                        if (content[i].price >= range[0] && content[i].price <= range[1]) {
                            main.innerHTML += "<div class='content'><img src='img/" + content[i].img_url + "'><p class='content_name'>" + content[i].name + "</p><p class='content_prize'>" + content[i].price + "zł</p></div>";
                        }
                    }
                    else {
                        main.innerHTML += "<div class='content'><img src='img/" + content[i].img_url + "'><p class='content_name'>" + content[i].name + "</p><p class='content_prize'>" + content[i].price + "zł</p></div>"
                    }

                }
            }
            else if (filter != null) {
                let content;
                let range = filter.trim().split(/\s+/);

                if (sortBy == null) {
                    for (let i = 0; i < data.length; i++) {
                        if (data[i].price >= range[0] && data[i].price <= range[1]) {
                            main.innerHTML += "<div class='content'><img src='img/" + data[i].img_url + "'><p class='content_name'>" + data[i].name + "</p><p class='content_prize'>" + data[i].price + "zł</p></div>";
                        }
                    }
                }
                else {
                    if (sortBy == "priceup") {
                        content = _.sortBy(data, "price");
                    }
                    else if (sortBy == "pricedown") {
                        content = _.sortBy(data, "price").reverse();
                    }
                    else if (sortBy == "nameup") {
                        content = _.sortBy(data, "name");
                    }
                    else if (sortBy == "namedown") {
                        content = _.sortBy(data, "name").reverse();
                    }
                    for (let i = 0; i < content.length; i++) {
                        if (content[i].price >= range[0] && content[i].price <= range[1]) {
                            main.innerHTML += "<div class='content'><img src='img/" + content[i].img_url + "'><p class='content_name'>" + content[i].name + "</p><p class='content_prize'>" + content[i].price + "zł</p></div>";
                        }
                    }
                }
            }
            else {
                let content;
                if (sortBy == "priceup") {
                    content = _.sortBy(data, "price");
                }
                else if (sortBy == "pricedown") {
                    content = _.sortBy(data, "price").reverse();
                }
                else if (sortBy == "nameup") {
                    content = _.sortBy(data, "name");
                }
                else if (sortBy == "namedown") {
                    content = _.sortBy(data, "name").reverse();
                }
                for (let i = 0; i < content.length; i++) {
                    main.innerHTML += "<div class='content'><img src='img/" + content[i].img_url + "'><p class='content_name'>" + content[i].name + "</p><p class='content_prize'>" + content[i].price + "zł</p></div>";
                }
            }
        }
    });
}
