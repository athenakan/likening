window.addEventListener('DOMContentLoaded', function()
{
    document.getElementById('instructions').onclick = function()
    {
        chrome.windows.create({'url': 'instructions.html'}); 
    }
});

//a function to search 
function openSearchResult()
{
    window.location.href = "page2.html"; 
    chrome.tabs.executeScript({code: "document.getElementsByClassName('_gll')[0].firstChild.click();", runAt: "document_idle"});
}
window.addEventListener('DOMContentLoaded', function()
{
//allow "Enter" on the keyboard to be pressed instead of clicking "Search"
    document.getElementById('submit').addEventListener('keypress', function(event) 
    {
        if (event.keyCode == 13) 
        {
            event.preventDefault();
            document.getElementById('submit').click();
        }

    });

    document.getElementById('submit').addEventListener('click',function()
    {
        var input1= document.getElementById('input1').value;
        chrome.tabs.update({url: "https://facebook.com/search/top/?q="+input1});
    });

    chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) 
    {
        if(changeInfo.status == "complete" && tab.url.indexOf("https://www.facebook.com/search/top/?") == 0)
        {
            openSearchResult();
        }
    });
});



