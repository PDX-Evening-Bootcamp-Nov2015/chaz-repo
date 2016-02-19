function most_used_word (s) {
  var words;
  var word_count = {};
  words = s.split();
  for (w in words) {
    if (word_count[w] > 0)
    word_count[w] += 1;}
  }
}





function testfunction (t, v)  {
var muw = 0;
  console.log("Finding the longest sub string in:"
    , t);

  console.log("Result from longest_word_in:"
        , longest_word_in(t));
}
