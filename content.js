var likeall = []; 
var like;
var count = 0;

chrome.runtime.onMessage.addListener(function(msg, sender, response)
{
    // gets all of the <a> tags
    var like = document.getElementsByTagName('a');

    // if there are extra posts to be viewed
    if (msg.from === 'popup')
    {
        // check if there are more comments to be viewed
        for (var i = 0; i < like.length; i++)
        {
            // checks if any <a> tags have the class of a comment
            if (like[i] && like[i].getAttribute("class") == 'UFIPagerLink')
            {
                like[i].click();
            }
        }

        // waits for all of the comments to be viewed from above
        // checks if there are replies to comments
        window.setTimeout(function()
        {
            for (var i = 0; i < like.length; i++)
            {
                if (like[i] && like[i].getAttribute("class") == 'UFIPagerLink')
                {
                    like[i].click();
                }    
            }
    
            var reply = document.getElementsByTagName('span');
            for (var i = 0; i < reply.length; i++)
            {
                if (reply[i] && reply[i].getAttribute("class") == 'UFIReplySocialSentenceLinkText')
                {
                    reply[i].click();
                }
            }
        }, 500);
    }

    // if one of the like buttons is pressed
    if ((msg.from === 'popup') && (msg.subject === 'Like Posts and Comments' || msg.subject === 'Like Comments' || msg.subject === 'Like Posts'))
    {
        // waits for all of the replies to comments to be viewed from above
        // like comments
        window.setTimeout(function()
        {
            if (msg.subject === 'Like Posts and Comments' || msg.subject === 'Like Comments')
            {
                for (var i = 0; i < like.length; i++)
                {
                    if (like[i] && like[i].title == 'Like this comment')
                    {    
                        like[i].click();

                        // tracks all of the likes in an array so that the user can undo liking
                        likeall[count] = like[i];
                        count++;
                    }
                }
            }

            // likes posts
            if (msg.subject === 'Like Posts and Comments' || msg.subject === 'Like Posts')
            {
                for (var i = 0; i < like.length; i++)
                {
                    if (like[i] && like[i].getAttribute("data-testid") == 'fb-ufi-likelink')
                    {
                        like[i].click();
                        likeall[count] = like[i];
                        count++;
                    }
                }
            }
        }, 1000);

        // sends response to page2 to display undo button and text "Liking!"
        response();
        return true;
    }

    // if the "Go To Photos" button is pressed
    else if ((msg.from === 'popup') && (msg.subject === 'Go To Photos'))
    {
        document.getElementsByClassName('_6-6')[3].click();
    }

    // if the "Like Photos" button is pressed
    else if ((msg.from === 'popup') && (msg.subject === 'Like Photos'))
    {
        for (var i = 0; i < like.length; i++)
        {
            if (like[i] && like[i].getAttribute('class') == "_5glz _53o _53b")
            { 
                like[i].click();
                likeall[count] = like[i];
                count++; 
            }
        }
        response(); 
        return true; 
    }

    // if the "Unlike" button is pressed
    else if ((msg.from === 'popup') && (msg.subject === 'Unlike'))
    {
        for (var i = 0; i < likeall.length; i++)
        {
            likeall[i].click();
        }
        response();        
        return true; 
    }
});
