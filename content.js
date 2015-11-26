chrome.runtime.onMessage.addListener(function(msg, sender, response){
    if ((msg.from === 'popup') && (msg.subject === 'Likes'))
    {
        //var button = document.getElementsByTagName('button')
      //  var like = button.getElementsByTagName
        response();
    }
});


var like = document.getElementsByTagName('a');
console.log(like);
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
