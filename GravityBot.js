var gravity = JSON.parse(JSON.stringify(window.Quizlet.gravityData.terms));
function getDef(word) {
  var i = 0;
  while (i < gravity.length) {
    if (gravity[i].word == word) {
      return gravity[i].definition;
    }
    i++;
  }
}
function getActiveWord() {
  return document.getElementsByClassName("GravityTerm is-showing is-unmissed")[0].childNodes[0].childNodes[0].childNodes[0].childNodes[0].innerHTML.split(">")[1].split("<")[0];
}
function insert() {
  document.getElementsByClassName("GravityTypingPrompt-input js-keymaster-allow")[0].value = getDef(getActiveWord());
}
setInterval(insert, 100);
