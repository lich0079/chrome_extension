
//get all the img tag src and send it to extension
var imgs = document.getElementsByTagName('img');
var links = [];

for (const img of imgs) {
    links.push(img.src);
    console.log(img.src);
}

chrome.runtime.sendMessage(null, links);
console.log('send links '+links.length);