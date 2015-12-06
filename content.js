var likeall = []; 
var count = [];
chrome.runtime.onMessage.addListener(function(msg, sender, response){
    if ((msg.from === 'popup') && (msg.subject === 'Like Posts and Comments'))
    {
        // if there are more comments to be viewed
        var comment = document.getElementsByTagName('a');
        var comments = [];
        var cnt = 0;
        for (var i = 0; i < comment.length; i++)
        {
            if (comment[i] && comment[i].getAttribute("class") == 'UFIPagerLink')
            {
                comments[cnt] = comment[i];
                cnt++;
            }

        }
        cliking(comments);
        var reply = document.getElementsByTagName('span');
        var replies = [];
        var cnt_reply = 0;
        for (var i = 0; i < reply.length; i++)
        {
            if (reply[i] && reply[i].getAttribute("class") == 'UFIReplySocialSentenceLinkText')
            {
                replies[cnt_reply] = reply[i];
                cnt_reply++;
            }
        }
        cliking(replies);

        // begin liking
        window.setTimeout(function()
        {

            //var like = document.getElementsByTagName('a').getElementsByClassName("_48-k UFILikeLink")[0];
            var like = document.getElementsByTagName('a'); 
            var likes = []; 
           // var likeall = []; 
            likeall = []; 
            count = 0; 
            for (var i = 0; i < like.length; i++)
            {
                if (like[i] && like[i].title == 'Like this comment')
                {
                    //like[i].click(); 
                    likeall[count] = like[i];
                    likes[count] = like[i]; 
                    count++; 
                }
                else if (like[i] && like[i].getAttribute("aria-label") == 'Like this')
                {
                    //like[i].click(); 
                    likeall[count] = like[i]; 
                    likes[count] = like[i]; 
                    count ++; 
                }
            }
            cliking(likes);
           // response(count);
        }, 500);
    response(count);
    return true;
    
    }
    else if ((msg.from === 'popup') && (msg.subject === 'Like Comments'))
    {
        var like = document.getElementsByTagName('a'); 
        var likecomments = []; 
        likeall = []; 
        count = 0; 
        for (var i = 0; i < like.length; i++)
        {
            if (like[i] && like[i].title == 'Like this comment')
            {
                //like[i].click(); 
                likecomments[count] = like[i];
                likeall[count] = like[i]; 
                count++; 
            }
        }
        cliking(likecomments);
        //cliking(likeall);
        response(count);  
        return true; 
    }
    else if ((msg.from === 'popup') && (msg.subject === 'Like Posts'))
    {
        var like = document.getElementsByTagName('a'); 
        var likeposts = []; 
        likeall = []; 
        count = 0; 
        for (var i = 0; i < like.length; i++)
        {
            if (like[i] && like[i].getAttribute("aria-label") == 'Like this')
            {
                //like[i].click(); 
                //likeposts[count] = like[i];
                likeall[count] = like[i]; 
                likeposts[count] = like[i]; 
                count++; 
            }
        }
        cliking(likeposts); 
        //cliking(likeall);
        response(count); 
        return true; 
    }
    else if ((msg.from === 'popup') && (msg.subject === 'Photos'))
    {
       // DROP DOWN MENU FOR "GO TO PHOTOS" AND "LIKE PHOTOS"
    }
    else if ((msg.from === 'popup') && (msg.subject === 'Go To Photos'))
    {
        document.getElementsByClassName('_6-6')[3].click();
 
    }
    else if ((msg.from === 'popup') && (msg.subject === 'Like Photos'))
    {
        var like = document.getElementsByTagName('a'); 
        var likeposts = []; 
        likeall = []; 
        count = 0; 
        
        for (var i = 0; i < like.length; i++)
        {

            if (like[i] && like[i].getAttribute('class') == "_5glz _53o _53b")
            {
                //like[i].click(); 
                //likeposts[count] = like[i];
                likeall[count] = like[i]; 
                likeposts[count] = like[i]; 
                count++; 
            }
        }
         cliking(likeposts); 
        //cliking(likeall);
        response(count); 
        return true; 
   
            
      
    }
    else if ((msg.from === 'popup') && (msg.subject === 'Unlike'))
    {
       /* var unlike = document.getElementsByTagName('a'); 
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
        */
        cliking(likeall);
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
