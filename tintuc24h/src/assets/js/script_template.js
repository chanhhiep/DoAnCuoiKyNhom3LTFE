window.addEventListener('scroll',function(){
    var header = document.querySelector("header");
    header.classList.toggle('sticky1',window.scrollY > 0);
})

function truncateText(selector, maxLength) {
    
    var element = document.querySelector(selector),
        truncated = element.innerHTML;

    if (truncated.length > maxLength) {
        truncated = truncated.substr(0,maxLength) + '...';
    }
    return truncated;
}

document.querySelectorAll('.truncate').innerHTML = truncateText('.truncate', 20);