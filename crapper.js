var {pupperteer} = require('puppeteer');
var title = document.getElementById("title");
var image_content = document.getElementById("image_content");
var content_string = document.querySelectorAll(".contentString")
var url ="https://www.24h.com.vn/tin-tuc-trong-ngay/tong-cuc-dan-so-noi-gi-ve-de-xuat-sinh-con-thu-2-duoc-ho-tro-mua-nha-o-tphcm-c46a1104169.html";
async function scrapperSite(url){
    const browser = await pupperteer.launch();
    const page = await browser.newPage();
    await page.goto(url);


    const [el] = await page.$x('/html/body/div[2]/div[3]/div/div[1]/main/div/section[1]/article/p[4]/img');
    const src = await el.getProperty('src');
    const srcTxt = await src.jsonValue();

    const [el1] = await page.$x('/html/body/div[2]/div[3]/div/div[1]/main/div/section[1]/article/header/h1');
    const srchead = await el1.getProperty('textContent');
    const txthead = await srchead.jsonValue();

    
    title.innerHTML = txthead;
    console.log(srcTxt);
    console.log(txthead);
    await browser.close();
}
scrapperSite("https://www.24h.com.vn/tin-tuc-trong-ngay/tong-cuc-dan-so-noi-gi-ve-de-xuat-sinh-con-thu-2-duoc-ho-tro-mua-nha-o-tphcm-c46a1104169.html")