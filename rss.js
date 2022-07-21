function LoadRssTrangChu () {
    const url = "https://cdn.24h.com.vn/upload/rss/trangchu24h.rss";
    fetch(url)
        .then(response => response.text())
        .then(data => {
            let parser = new DOMParser();
            let rss = parser.parseFromString(data, "application/xml")
            displayTrafficList(rss);
        });
}

function LoadRssTheThao () {
    const url = "https://cdn.24h.com.vn/upload/rss/bongda.rss";
    fetch(url)
        .then(response => response.text())
        .then(data => {
            let parser = new DOMParser();
            let rss = parser.parseFromString(data, "application/xml")
            displayTrafficList(rss);
        });
}

function LoadRssTinTucTrongNgay () {
    const url = "https://cdn.24h.com.vn/upload/rss/tintuctrongngay.rss";
    fetch(url)
        .then(response => response.text())
        .then(data => {
            let parser = new DOMParser();
            let rss = parser.parseFromString(data, "application/xml")
            displayTrafficList(rss);
        });
}

function LoadRssPhim () {
    const url = "https://cdn.24h.com.vn/upload/rss/phim.rss";
    fetch(url)
        .then(response => response.text())
        .then(data => {
            let parser = new DOMParser();
            let rss = parser.parseFromString(data, "application/xml")
            displayTrafficList(rss);
        });
}

function LoadRssThoiTrang () {
    const url = "https://cdn.24h.com.vn/upload/rss/thoitrang.rss";
    fetch(url)
        .then(response => response.text())
        .then(data => {
            let parser = new DOMParser();
            let rss = parser.parseFromString(data, "application/xml")
            displayTrafficList(rss);
        });
}

function LoadRssAnNinhHinhSu () {
    const url = "https://cdn.24h.com.vn/upload/rss/anninhhinhsu.rss";
    fetch(url)
        .then(response => response.text())
        .then(data => {
            let parser = new DOMParser();
            let rss = parser.parseFromString(data, "application/xml")
            displayTrafficList(rss);
        });
}

function displayTrafficList(x) {
    console.log(x);
    let list = document.getElementById('item');
    let item = x.getElementsByTagName('item');
    let itemNum = x.getElementsByTagName('item').length;
    console.log(itemNum);

    if (itemNum == 0) {
        list.innerHTML = "<li><h3>No Planned</h3></li> "
        setTimeout(function () {
            LoadRssTrangChu();
            LoadRssTinTucTrongNgay();
            LoadRssAnNinhHinhSu();
            LoadRssTheThao();
            LoadRssThoiTrang();
            LoadRssPhim();
            console.log("No new date...")
        }, 7000);

    } else {
        for (let i = 0; i < itemNum; i++) {
            let li = document.createElement('li');
            li.className = "listItem"
            li.innerHTML =
                `
              <h3>${item[i].getElementsByTagName('title')[0].innerHTML}</h3>
              <p>${item[i].getElementsByTagName('description')[0].innerHTML}</p>
                `;

            list.appendChild(li);
        }
    }
    setTimeout(function () {
        startAnimation(item);
    }, 7000)
}

startAnimation = (x) => {
    console.log(x);

    let listItem = document.getElementsByTagName('listItem');
    console.log(x.length);
    for (let i = 0; i < x.length; i++) {
        setTimeout(function () {
            listItem[0].remove();
            if (i == x.length - 1) {
                LoadRssTrangChu();
                LoadRssTinTucTrongNgay();
                LoadRssAnNinhHinhSu();
                LoadRssTheThao();
                LoadRssThoiTrang();
                LoadRssPhim();
                console.log("loading new data...");
            }
        }, i * 3000);
    }
}
