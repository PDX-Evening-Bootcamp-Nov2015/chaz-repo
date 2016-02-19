$(document).ready(function(){
document.getElementById("submitPost").onclick = ("click", submitPost);
pullPosts();

function pullPosts() {
  var url = 'https://spreadsheets.google.com/feeds/list/1_fhQCe0wAmLs0FCOUDn4HZ8eyDq6QHcvQngF7n4e96I/default/public/values?alt=json-in-script';
  var response = $.ajax({
      type: 'GET',
      url: url,
      contentType: "application/json",
      dataType: 'jsonp',
      success: function(result){postdata(result);},
      error: function(result){postdata(result);}
    });
};

function postdata(data){
  var posts = data.feed.entry;
  for (i = 0;i < posts.length; i++){
  $("#post").append( "<TR> <TD>Title</TD> <TD>" + posts[i].gsx$title.$t + "</TD> </TR>" );
  $("#post").append( "<TR> <TD>Body</TD> <TD>" + posts[i].gsx$bodytext.$t + "</TD> </TR>" );
  }
}

function submitPost(event){
event.preventDefault();
var xtitle = document.getElementById('1').value;
var xcontent = document.getElementById('2').value;
var url = 'https://docs.google.com/forms/d/13VwG7osI2qVSGPTw8Dl2LICxUzAi3DwACfkTW5I1ocM/formResponse';
$.ajax({
  type: "POST",
  url: url,
  dataType: 'xml',
  data: {"entry_1358166143": xtitle, "entry_1289920291": xcontent},
  success: function (){pullPosts(); console.log("test")},
  error: pullPosts
});
}

});
