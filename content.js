var likeall = []; 
var like;
var count = 0;
chrome.runtime.onMessage.addListener(function(msg, sender, response)
{
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

            like = document.getElementsByTagName('a'); 
            var likes = [];
            likeall = []; 
            count = 0; 
            for (var i = 0; i < like.length; i++)
            {
                if (like[i] && like[i].title == 'Like this comment')
                {    
                    likeall[count] = like[i];
                    likes[count] = like[i]; 
                    count++; 
                }
                else if (like[i] && like[i].getAttribute("aria-label") == 'Like this')
                {
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
        like = document.getElementsByTagName('a'); 
        var likecomments = []; 
        likeall = []; 
        count = 0; 
        for (var i = 0; i < like.length; i++)
        {
            if (like[i] && like[i].title == 'Like this comment')
            {
                likecomments[count] = like[i];
                likeall[count] = like[i]; 
                count++; 
            }
        }
        cliking(likecomments);
        response(count);  
        return true; 
    }
    else if ((msg.from === 'popup') && (msg.subject === 'Like Posts'))
    {
        like = document.getElementsByTagName('a'); 
        var likeposts = []; 
        likeall = []; 
        count = 0; 
        for (var i = 0; i < like.length; i++)
        {
            if (like[i] && like[i].getAttribute("aria-label") == 'Like this')
            {
                likeall[count] = like[i]; 
                likeposts[count] = like[i]; 
                count++; 
            }
        }
        cliking(likeposts); 
        response(count); 
        return true; 
    }
    else if ((msg.from === 'popup') && (msg.subject === 'Go To Photos'))
    {
        document.getElementsByClassName('_6-6')[3].click();
 
    }
    else if ((msg.from === 'popup') && (msg.subject === 'Like Photos'))
    {
        like = document.getElementsByTagName('a'); 
        var likeposts = []; 
        likeall = []; 
        count = 0; 
        for (var i = 0; i < like.length; i++)
        {

            if (like[i] && like[i].getAttribute('class') == "_5glz _53o _53b")
            { 
                likeposts[count] = like[i];
                likeall[count] = like[i]; 
                likeposts[count] = like[i]; 
                count++; 
            }
        }
        cliking(likeposts); 
        response(count); 
        return true; 
    }
    else if ((msg.from === 'popup') && (msg.subject === 'Unlike'))
    {
        cliking(likeall);
        response();        
        return true; 
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
}