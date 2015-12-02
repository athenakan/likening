function setLikesInfo(info)
{
    document.getElementById('button').style.visibility = 'visible'; 
    document.getElementById('words').textContent = "This is the number of likes: "; 
    document.getElementById('total').textContent = info; 
    console.log(info); 
    console.log("there");
   
    document.getElementById('button').onclick = function()
    {
       chrome.tabs.query({
        active: true,
        currentWindow: true
    },
        function(tabs)
        {
            chrome.tabs.sendMessage(
                tabs[0].id,
                {from: 'popup', subject: 'Unlike'},
                setTest
                );
        }); 
    }
}

function setTest()
{
    document.getElementById('words').textContent = "Unliking all likes"; 
    document.getElementById('button').style.visibility = 'hidden';  
}

function jumpScroll() 
{
    window.scroll(0,150);
}

window.addEventListener('DOMContentLoaded', function(){
    // send message to contentscript in selected tab
    document.getElementById('total').textContent = ""; 
    document.getElementById('button').style.visibility = 'hidden';

    document.getElementById('like_button').onclick = function()
    {
       chrome.tabs.query({
        active: true,
        currentWindow: true
    },
        function(tabs)
        {
            chrome.tabs.sendMessage(
                tabs[0].id,
                {from: 'popup', subject: 'Like All'},
                setLikesInfo
                );
        }); 
    }
    document.getElementById('scroll').onclick = function()
    {
        chrome.tabs.query({
        active: true,
        currentWindow: true
    },
        function(tabs)
        {
            chrome.tabs.sendMessage(
                tabs[0].id,
                {from: 'popup', subject: 'Scroll down'}
                );
        }); 

    }
    document.getElementById('like_comment').onclick = function () 
    {
        chrome.tabs.query({
        active: true,
        currentWindow: true
    },
        function(tabs)
        {
            chrome.tabs.sendMessage(
                tabs[0].id,
                {from: 'popup', subject: 'Like Comments'},
                setLikesInfo
                );
        }); 
    }
    document.getElementById('like_post').onclick = function () 
    {
        chrome.tabs.query({
        active: true,
        currentWindow: true
    },
        function(tabs)
        {
            chrome.tabs.sendMessage(
                tabs[0].id,
                {from: 'popup', subject: 'Like Posts'},
                setLikesInfo
                );
        }); 
    }
    document.getElementById('instructions').onclick = function()
    {
        chrome.windows.create({'url': 'instructions.html'});
    }

    /*chrome.tabs.query({
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
        });*/
});

function openSearchResult()
{
    chrome.tabs.executeScript({code: "document.getElementsByClassName('_gll')[0].firstChild.click();", runAt: "document_idle"});
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
