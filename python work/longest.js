function longest_word_in(s) {
  // s is a string
  // find the longest word within s, words
  // consist of a string of alphabetical chracters = 'a..z' or dashes = '-'
  // alphabetical + dashes, no numbers
  // suppose s = "The quick brown fox jumped over the lazy dog"
  // then words = ["The","quick","brown","fox","jumped"
  //              ,"over","the","lazy","dog"]
  // words is an array of sub-strings, with spaces removed.
  // for every word in words, find the length, and
  // keep track of the longest word found so far
  // if the current word is longer than the longest,
  // it becomes the new  longest, and its length becomes the new longest_length

  var words = [],
  // /[a-z]/ means a,b,c,...,z
  // /[-az]/ means -,a,z
  // /[-a-z]/ means -,a,b,c,...,z
      // nonword_regex = /[-\W]+/,
      word_regex = /[-\w]+/,
      longest_word = "",
      current_word = "" ;
  // words = s.split(" ");
  words = s.split(word_regex);

  for (var i = 0; i < words.length; i += 1) {
      current_word = words[i];
      if (  (! current_word.match(/\d/))  /* toss out digit-only words */
         && (current_word.length > longest_word.length)) {
         longest_word = current_word;
      }
  }
  return (longest_word.length);
};

function testfunction (t)  {
  console.log("Finding the longest sub string in:"
    , t);
  console.log("Result from longest_word_in:"
        , longest_word_in(t));
}

// jumped, 6
testfunction("The quick brown fox jumped over the lazy dog");

// alphabetical, 12
testfunction("My favorite word is alphabetical. Second favorite is numerical.");

testfunction("Skip favorite word is 8763871644919669423. Second favorite is numerical.");

testfunction("Ed's fourth favorite word is i18n. Thrird favorite is alphanumerical.");

testfunction("Carolyn's sixth favorite word is alpha-betical. Fifth favorite is cat-wearing-a-hat.");
