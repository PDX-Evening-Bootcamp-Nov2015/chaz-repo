$(document).ready(function() {
    document.getElementById('error').style.display = 'none';
    document.getElementById("submitPost").onclick = ("click", submitPost);
    pullPosts();

    function pullPosts() {
        var response = $.ajax({
            type: 'GET',
            url: '/projects/forums/forums_posts_get/',
            contentType: "application/json",
            success: function(result) {
                postdata(result);
            },
            error: function(result) {
                postdata(result);
            }
        });
    };

    function postdata(data) {
        var posts = data['key'].reverse();
        for (i = 0; i < posts.length; i++) {
            document.getElementById('error').style.display = 'none';
            $("#post").append("<li class=" + '"list-group-item">' + "<b>" + posts[i][0] + "</b>" + "<br>" + posts[i][1] + "</li>");

        }
    }

    function submitPost(event) {
        event.preventDefault();
        var xtitle = document.getElementById('1').value;
        var xcontent = document.getElementById('2').value;
        var revisedString = xtitle + "99999" + xcontent
        $.ajax({
            type: 'GET',
            url: "/projects/forums/forums_posts/" + revisedString,
            contentType: "application/json",
            success: function(result) {
                $("#post").empty();
                postdata(result)
            },
            error: function() {
                pullPosts;
                console.log("error");
                document.getElementById('error').style.display = 'block';
            }
        });
    }

});
