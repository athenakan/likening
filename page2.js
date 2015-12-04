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
    document.getElementById('like_photo').onclick = function () 
    {
        chrome.tabs.query({
        active: true,
        currentWindow: true
    },
        function(tabs)
        {
            chrome.tabs.sendMessage(
                tabs[0].id,
                {from: 'popup', subject: 'Like Photos'},
                setLikesInfo
                );
        }); 
    }
    document.getElementById('go_back').onclick = function () 
    {
        window.location.href = "popup.html";
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

