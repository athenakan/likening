function setLikesInfo()
{
    console.log("working!"); 
}

window.addEventListener('DOMContentLoaded', function(){
    // send message to contentscript in selected tab
    chrome.tabs.query({
        active: true,
        currentWindow: true
    },
        function(tabs)
        {
            chrome.tabs.sendMessage(
                tabs[0].id,
                {from: 'popup', subject: 'Likes'},
                setLikesInfo
                );
        });
});

document.getElementById('submit').addEventListener('click',function(){
    var input1= document.getElementById('input1').value;
    chrome.tabs.update({url: "https://facebook.com/"+input1});
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
