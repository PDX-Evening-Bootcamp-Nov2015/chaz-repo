window.onload = function() {
  document.getElementById('subRedditList').addEventListener('click', whichSubreddit);
  initialPost();
};

function initialPost() {
  var response = $.ajax({
    type: 'GET',
    url: '/projects/redditapp/get_posts/' + 1,
    contentType: "application/json",
    success: function(result) {
      container = document.getElementById("postContainer");
      xpost = result['key'];
      console.log(xpost);
      container.innerHTML = "";
      for (i = 0; i < xpost.length; i++) {
        var blankDiv = document.createElement('div');
        blankDiv.innerHTML = '<div class="panel panel-default">' + '<div class="panel-heading">' + "<a href=" + xpost[i][1] + ">" + xpost[i][0] + "</a>" + '</div>' + '<div class="panel-body">' + "Thread Score = " + '<span class="badge">' + xpost[i][3] + '</span>' + " " + "<a href=" + xpost[i][2] + ">" + "view comments" + " (" + xpost[i][4] + ")" + "</a>" + '</div>' + '</div>';
        container.appendChild(blankDiv);

      }

    },
    error: function(result) {
      console.log("error");
    }
  });
};

function whichSubreddit(event) {
  var subReddit = event.target.id;
  var response = $.ajax({
    type: 'GET',
    url: '/projects/redditapp/get_posts/' + subReddit,
    contentType: "application/json",
    success: function(result) {
      container = document.getElementById("postContainer");
      xpost = result['key'];
      console.log(xpost);
      container.innerHTML = "";
      for (i = 0; i < xpost.length; i++) {
        var blankDiv = document.createElement('div');
        blankDiv.innerHTML = '<div class="panel panel-default">' + '<div class="panel-heading">' + "<a href=" + xpost[i][1] + ">" + xpost[i][0] + "</a>" + '</div>' + '<div class="panel-body">' + "Thread Score = " + '<span class="badge">' + xpost[i][3] + '</span>' + " " + "<a href=" + xpost[i][2] + ">" + "view comments" + " (" + xpost[i][4] + ")" + "</a>" + '</div>' + '</div>';
        container.appendChild(blankDiv);

      }

    },
    error: function(result) {
      console.log("error");
    }
  });
};
