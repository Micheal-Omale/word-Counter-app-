function countWordsAndCharacters() {
  var input = document.getElementById("input").value;
  var words = input.split(" ");
  var numWords = words.length;
  var numCharacters = input.length;
  document.getElementById("num-words").innerHTML = numWords;
  document.getElementById("num-characters").innerHTML = numCharacters;
}