var imglinks = [];

document.addEventListener('DOMContentLoaded', function () {

    // download all img from imglinks
    $('#download_all_imgs').on('click', function () {
        for (var imgsrc of imglinks) {
            console.log(imgsrc);
            chrome.downloads.download({ url: imgsrc });
        }
    });

    
});

// Set up event handlers and inject send_links.js into all frames in the active
// tab.
window.onload = function () {

    // insert js code into current web page
    chrome.tabs.executeScript(
        null, { file: 'inject/get_all_image_links.js', allFrames: true });

    // receive links data which send from js running in the web page
    // store links in extension memory's var imglinks, wait tobe use
    chrome.runtime.onMessage.addListener(function (links) {
        console.log('receive links ' + links.length);
        imglinks = links;
        
    });
};