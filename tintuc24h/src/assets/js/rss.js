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
function LoadRssThoiTrangHitech() {
    const url = "https://cdn.24h.com.vn/upload/rss/thoitranghitech.rss";
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
function LoadRssTaiChinh () {
    const url = "https://cdn.24h.com.vn/upload/rss/taichinhbatdongsan.rss";
    fetch(url)
        .then(response => response.text())
        .then(data => {
            let parser = new DOMParser();
            let rss = parser.parseFromString(data, "application/xml")
            displayTrafficList(rss);
        });
}
function LoadRssAmThuc () {
    const url = "https://cdn.24h.com.vn/upload/rss/amthuc.rss";
    fetch(url)
        .then(response => response.text())
        .then(data => {
            let parser = new DOMParser();
            let rss = parser.parseFromString(data, "application/xml")
            displayTrafficList(rss);
        });
}
function LoadRssLamDep () {
    const url = "https://cdn.24h.com.vn/upload/rss/lamdep.rss";
    fetch(url)
        .then(response => response.text())
        .then(data => {
            let parser = new DOMParser();
            let rss = parser.parseFromString(data, "application/xml")
            displayTrafficList(rss);
        });
}
function LoadRssGiaoDuc () {
    const url = "https://cdn.24h.com.vn/upload/rss/giaoducduhoc.rss";
    fetch(url)
        .then(response => response.text())
        .then(data => {
            let parser = new DOMParser();
            let rss = parser.parseFromString(data, "application/xml")
            displayTrafficList(rss);
        });
}
function LoadRssCuocSong () {
    const url = "https://cdn.24h.com.vn/upload/rss/bantrecuocsong.rss";
    fetch(url)
        .then(response => response.text())
        .then(data => {
            let parser = new DOMParser();
            let rss = parser.parseFromString(data, "application/xml")
            displayTrafficList(rss);
        });
}
function LoadRssCaNhac () {
    const url = "https://cdn.24h.com.vn/upload/rss/canhacmtv.rss";
    fetch(url)
        .then(response => response.text())
        .then(data => {
            let parser = new DOMParser();
            let rss = parser.parseFromString(data, "application/xml")
            displayTrafficList(rss);
        });
}
function LoadRssPhiThuong () {
    const url = "https://cdn.24h.com.vn/upload/rss/phithuongkyquac.rss";
    fetch(url)
        .then(response => response.text())
        .then(data => {
            let parser = new DOMParser();
            let rss = parser.parseFromString(data, "application/xml")
            displayTrafficList(rss);
        });
}
function LoadRssCongNghe () {
    const url = "https://cdn.24h.com.vn/upload/rss/congnghethongtin.rss";
    fetch(url)
        .then(response => response.text())
        .then(data => {
            let parser = new DOMParser();
            let rss = parser.parseFromString(data, "application/xml")
            displayTrafficList(rss);
        });
}
function LoadRssOto () {
    const url = "https://cdn.24h.com.vn/upload/rss/oto.rss";
    fetch(url)
        .then(response => response.text())
        .then(data => {
            let parser = new DOMParser();
            let rss = parser.parseFromString(data, "application/xml")
            displayTrafficList(rss);
        });
}
function LoadRssTieuDung () {
    const url = "https://cdn.24h.com.vn/upload/rss/thitruongtieudung.rss";
    fetch(url)
        .then(response => response.text())
        .then(data => {
            let parser = new DOMParser();
            let rss = parser.parseFromString(data, "application/xml")
            displayTrafficList(rss);
        });
}
function LoadRssDuLich () {
    const url = "https://cdn.24h.com.vn/upload/rss/dulich.rss";
    fetch(url)
        .then(response => response.text())
        .then(data => {
            let parser = new DOMParser();
            let rss = parser.parseFromString(data, "application/xml")
            displayTrafficList(rss);
        });
}
function LoadRssSucKhoe () {
    const url = "https://cdn.24h.com.vn/upload/rss/suckhoedoisong.rss";
    fetch(url)
        .then(response => response.text())
        .then(data => {
            let parser = new DOMParser();
            let rss = parser.parseFromString(data, "application/xml")
            displayTrafficList(rss);
        });
}
function LoadRssCuoi () {
    const url = "https://cdn.24h.com.vn/upload/rss/cuoi24h.rss";
    fetch(url)
        .then(response => response.text())
        .then(data => {
            let parser = new DOMParser();
            let rss = parser.parseFromString(data, "application/xml")
            displayTrafficList(rss);
        });
}
function LoadRssBongDa() {
    const url = "https://cdn.24h.com.vn/upload/rss/bongda.rss";
    fetch(url)
        .then(response => response.text())
        .then(data => {
            let parser = new DOMParser();
            let rss = parser.parseFromString(data, "application/xml")
            displayTrafficList(rss);
        });
}
function LoadRssAsianCup() {
    const url = "https://cdn.24h.com.vn/upload/rss/asiancup2019.rss";
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
    let popular = document.getElementById('popular');
    let contain_first = document.getElementById('contain_first');
    let top = document.getElementById('top');
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
            LoadRssTaiChinh();
            LoadRssAmThuc();
            LoadRssLamDep();
            LoadRssGiaoDuc();
            LoadRssCuocSong();
            LoadRssCaNhac();
            LoadRssPhiThuong();
            LoadRssCongNghe();
            LoadRssOto();
            LoadRssTieuDung();
            LoadRssDuLich();
            LoadRssSucKhoe();
            LoadRssCuoi();
            LoadRssBongDa();
            LoadRssAsianCup();
            LoadRssThoiTrangHitech();
            console.log("No new date...")
        }, 7000);

    } else {
        for (let i = 0; i < 21; i++) {
            let li = document.createElement('li');
            li.className = "listItem"
            li.innerHTML =
                `
                <a href='${item[i].getElementsByTagName('link')[0].innerHTML}'>
              <h3 class="truncate">${item[i].getElementsByTagName('title')[0].innerHTML}</h3>
              <p>${item[i].getElementsByTagName('description')[0].innerHTML}</p>
              </a>
                `;

            list.appendChild(li);
        }
        //popular
        for(let r = 0;r < 6 ;r++){
            const li = document.createElement('li');
            li.className = "listPopuler"
            li.innerHTML =
                `
                <a href='${item[r].getElementsByTagName('link')[0].innerHTML}'>
                <p id="select">${item[r].getElementsByTagName('description')[0].innerHTML}</p>
                </a>
                `;

            popular.appendChild(li);
        }
        
        //top
        for (let i = 0; i < 10; i++) {
            let li = document.createElement('li');
            li.className = "listItem"
            li.innerHTML =
                `
                <a href='${item[i].getElementsByTagName('link')[0].innerHTML}'>
                <h3 class="truncate">${item[i].getElementsByTagName('title')[0].innerHTML}</h3>
                <p>${item[i].getElementsByTagName('description')[0].innerHTML}</p>
                </a>
                `;

            top.appendChild(li);
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

function search() {
    alert("error")
}
