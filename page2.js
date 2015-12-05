//obtain number of likes when a "Like" button is clicked
function setLikesInfo(info)
{
    document.getElementById('button').style.display = 'block'; 
    document.getElementById('words').textContent = "This is the number of likes: "; 
    document.getElementById('total').textContent = info; 
    console.log(info); 
    console.log("there");
    //a function for when a "Like" button is clicked, displaying the number of likes
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
//a function for when "Undo" is clicked, displaying how many likes are being unliked.
function setTest()
{
    document.getElementById('words').textContent = "Unliking all likes: "; 
    document.getElementById('button').style.display = 'none';  
}
window.addEventListener('DOMContentLoaded', function()
{
    // send message to contentscript in selected tab
    document.getElementById('total').textContent = ""; 
    document.getElementById('button').style.display = 'none';

    //like posts and comments when "Like Posts and Comments" is clicked
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
    //like comments when "Like Comments" is clicked
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
    //like posts when "Like Posts" is clicked
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
    //go to page displaying friend's photos when "Go To Photos" is clicked
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
                {from: 'popup', subject: 'Go To Photos'},
                setLikesInfo
                );
        }); 
    }
    //like photos when "Like Photos" is clicked
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
window.onload = function()
{
    document.getElementById("photo").addEventListener("mouseover", function()
    {
        document.getElementById("popup").style.marginLeft = "150px"; 
    }); 
}