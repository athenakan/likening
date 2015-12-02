function openSearchResult()
{
    chrome.tabs.executeScript({code: "document.getElementsByClassName('_gll')[0].firstChild.click();", runAt: "document_idle"});
}

document.getElementById('page2').onclick = function()
{
    window.location.href = 'page2.html'; 
}

document.getElementById('submit').addEventListener('click',function(){
    var input1= document.getElementById('input1').value;
    chrome.tabs.update({url: "https://facebook.com/search/top/?q="+input1});

    chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
        if(changeInfo.status == "complete" && tab.url.indexOf("https://www.facebook.com/search/top/?") == 0)
        {
            openSearchResult();
        }
    });

});


/*function main() {
    // Initialization work goes here.
    chrome.tabs.executeScript(null, {
        file: "content.js"
    });
    chrome.tabs.executeScript(null, {
        code: "javascript:likeAll(likes)"
    });
    
 
    function likeItAll() {
        chrome.tabs.executeScript(null, {
            file: "content.js"
        });
        chrome.tabs.executeScript(null, {
            code: "javascript:likeAll(likes)"
        });
        onLoad = null;
    }
 
}
 
function linkToTwitter() {
    chrome.tabs.create({
        url: "http://twitter.com/danest"
    });
}
 
function linktoNineGraphs() {
    chrome.tabs.create({
        url: "http://www.9graphs.com/"
    });
}
 
function linktoTwiterFavorite() {
    chrome.tabs.create({
        url: "http://www.twitterfavorite.com/"
    });
}
 
// Add event listeners once the DOM has fully loaded by listening for the
// `DOMContentLoaded` event on the document, and adding your listeners to
// specific elements when it triggers.
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('likeAllDanestTwitter')
        .addEventListener('click', linkToTwitter);
    document.getElementById('twitterFavorite')
        .addEventListener('click', linktoTwiterFavorite)
    main();
});*/
