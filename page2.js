function setLikesInfo(info)
{
    document.getElementById('button').style.display = 'block'; 
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
    document.getElementById('button').style.display = 'none';  
}


window.addEventListener('DOMContentLoaded', function(){
    // send message to contentscript in selected tab
    document.getElementById('total').textContent = ""; 
    document.getElementById('button').style.display = 'none';

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
   /* document.getElementById('scroll').onclick = function()
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

    }*/
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
   /* document.getElementById('photo').onclick = function () 
    {
        chrome.tabs.query({
        active: true,
        currentWindow: true
    },
        function(tabs)
        {
            chrome.tabs.sendMessage(
                tabs[0].id,
                {from: 'popup', subject: 'Photos'},
                setLikesInfo
                );
        }); 
    }*/
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
/*$(document).ready(function() {
    $('.parent').click(function() {
        $('.sub-nav').toggleClass('visible');
        document.getElementById("popup").style.marginLeft = "150px"; 
    });
    document.getElementById("popup").style.marginLeft = "6px"; 
    
});*/

window.onload = function()
{
document.getElementById("photo").addEventListener("mouseover", function()
{
    document.getElementById("popup").style.marginLeft = "150px"; 
}); 

/*document.getElementById("photo").addEventListener("mouseout", function()
{
    document.getElementById("popup").style.marginLeft = "6px"; 
});*/


}