chrome.runtime.onMessage.addListener(function(msg, sender, response){
    if ((msg.from === 'popup') && (msg.subject === 'Like All'))
    {
        //var like = document.getElementsByTagName('a').getElementsByClassName("_48-k UFILikeLink")[0];
        var like = document.getElementsByTagName('a'); 
        var likes = []; 
        var likeall = []; 
        var count = 0; 
        for (var i = 0; i < like.length; i++)
        {
            /*if (like[i] && (like[i].title == 'Like this comment' || like[i].title == 'Like this item' || like[i].title == 'Like this')) 
            {
                likes[i] = i;
            }*/
            if (like[i] && like[i].title == 'Like this comment')
            {
                //like[i].click(); 
                likeall[count] = like[i];
                likes[count] = like[i].title; 
                count++; 
            }
            else if (like[i] && like[i].getAttribute("aria-label") == 'Like this')
            {
                //like[i].click(); 
                likeall[count] = like[i]; 
                likes[count] = "Like this"; 
                count ++; 
            }
        }
        cliking(likeall);
        response(likes);
        return true;
    }
    else if ((msg.from === 'popup') && (msg.subject === 'Unlike'))
    {
        var unlike = document.getElementsByTagName('a'); 
        var unlikes = []; 
        var c = 0; 
        for (var i = 0; i < unlike.length; i++)
        {
            if (unlike[i] && unlike[i].title == 'Unlike this comment')
            {
                //like[i].click(); 
                unlikes[c] = unlike[i];
                c++; 
            }
            else if (unlike[i] && unlike[i].getAttribute("aria-label") == 'Unlike this')
            {
                //like[i].click(); 
                unlikes[c] = unlike[i]; 
                c++; 
            }
        }
        cliking(unlikes);
        response();        
        return true; 
    }
    else if ((msg.from === 'popup') && (msg.subject === 'Scroll down'))
    {
       /* var t = 0; 
        while (t == 0)
        {
            if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight)
            {
                t = 1;
            }
            else
            {
                window.scrollTo(0, document.body.scrollHeight); 
            }
        }*/
        window.scrollTo(0, document.body.scrollHeight); 
    }

});

function cliking (likeall)
{
    if (likeall.length == 0)
    {
        return;
    }

    likeall[0].click(); 
    cliking(likeall.splice(1));
   /* window.setTimeout(function()
    {
        liking(likeall.splice(1));
    }, 1500); */
}

/*var likes = []; lklkh
// Select only the Like buttons.
for (var i = 0; i < like.length; i++) {
    if (like[i] && (like[i].title == 'Like this comment' || like[i].title == 'Like this item' || like[i].title == 'Like this')) {
        likes.push(like[i]);
    }
}

//console.log(likes); 
function likeAll(likes) {
    if (likes.length <= 0) {
        return;
    }
 
    likes[0].click();
    // Wait for each Like to be processed before trying the next.
    // Facebook enforces this requirement.
    window.setTimeout(function() {
        likeAll(likes.splice(1));
    }, 1500);
}
*/
