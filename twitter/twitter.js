window.onload = function() {
  document.getElementById('BernieSanders').addEventListener('click', whichCandidate);
  document.getElementById('HillaryClinton').addEventListener('click', whichCandidate);
  document.getElementById('realDonaldTrump').addEventListener('click', whichCandidate);
  document.getElementById('TedCruz').addEventListener('click', whichCandidate);
  var x = document.getElementById("tweetContainer");
  x.style.display = 'none';
};

function whichCandidate(event) {
  candidate = event.target.id;

  var response = $.ajax({
    type: 'GET',
    url: "/projects/twitter/candidates/" + candidate,
    contentType: "application/json",
    success: function(result) {
      var container = document.getElementById('displayTweetsInHTML');
      container.innerHTML = "";
      var x = document.getElementById("tweetContainer");
      x.style.display = 'block';
      document.getElementById('candidate_username').innerHTML = "<a href=http://twitter.com/" + candidate + ">" + "@" + candidate + "</a>";
      for (i = 0; i < result['key'].length; i++) {
        var tweet = result['key'][i];
        var tweetWithLinks = linkify(tweet[0]);
        var output,
          text = tweetWithLinks,
          regex = /(^|[^@\w])@(\w{1,15})\b/g,
          replace = '$1<a href="http://twitter.com/$2">@$2</a>';
        output = text.replace(regex, replace);
        var container = document.getElementById('displayTweetsInHTML');
        var blankDiv = document.createElement('div');
        blankDiv.innerHTML = "<b>" + tweet[1] + "</b>" + "<BR>" + "&#x25CF;" + output;
        container.appendChild(blankDiv);
      }
    },
    error: function(result) {
      console.log("error")
    }

  });
}



function linkify(inputText) {
  var replacedText, replacePattern1, replacePattern2, replacePattern3;
  replacePattern1 = /(\b(https?|ftp):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gim;
  replacedText = inputText.replace(replacePattern1, '<a href="$1" target="_blank">$1</a>');
  replacePattern2 = /(^|[^\/])(www\.[\S]+(\b|$))/gim;
  replacedText = replacedText.replace(replacePattern2, '$1<a href="http://$2" target="_blank">$2</a>');
  replacePattern3 = /(([a-zA-Z0-9\-\_\.])+@[a-zA-Z\_]+?(\.[a-zA-Z]{2,6})+)/gim;
  replacedText = replacedText.replace(replacePattern3, '<a href="mailto:$1">$1</a>');
  return replacedText;
}
