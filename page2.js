// call back function that sets page2.html
function setLikesInfo()
{
    // display undo button
    document.getElementById('button').style.display = 'block'; 

    // display text "Liking!"
    document.getElementById('words').textContent = "Liking!"; 

    // send message when undo button is clicked
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

// When undo is clicked show "unliking all likes" and then hide undo button 
function setTest()
{
    document.getElementById('words').textContent = "Unliking all likes"; 
    document.getElementById('button').style.display = 'none';  
}

window.addEventListener('DOMContentLoaded', function()
{

    // hide undo button
    document.getElementById('button').style.display = 'none';

    // send message when like comments and posts button is clicked
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
                {from: 'popup', subject: 'Like Posts and Comments'},
                setLikesInfo
                );
        }); 
    }

    // send message when "Like Comments" is clicked
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
    // send message when "Like Posts" is clicked
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
    // send message when "Go To Photos" is clicked
    document.getElementById('go_to_photo').onclick = function () 
    {
        chrome.tabs.query({
        active: true,
        currentWindow: true
    },
        function(tabs)
        {
            chrome.tabs.sendMessage(
                tabs[0].id,
                {from: 'popup', subject: 'Go To Photos'}
                );
        }); 
    }
    // send message when "Like Photos" is clicked
    document.getElementById('like_photo').onclick = function () 
    {
        chrome.tabs.query(
        {
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
});
