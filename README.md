# QuizletGravityBot
Bot for the Quizlet minigame, Gravity. Get all the highscores!
<hr></hr>
<h3>How to run:</h3>
<p>Go to the Quizlet set you wish to use the bot on, then click "Gravity". Press "Get Started", and make sure "Start With" is on Term.</p>
<p>Copy all of this code:</p>
<pre><code>var gravity = JSON.parse(JSON.stringify(window.Quizlet.gravityData.terms));
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
</code></pre>
<p>Go to inspect element(F12 or Ctrl+Shift+I on Google Chrome) then Console. 
Paste all the code into the console and press enter. 
You may get a errors(they will go away), ignore them and press "Let's Go".
The answer should automatically be filled in, all you have to do is press space then enter for every term.</p>

<h4>Other Bots: </h4>
<p>Match Bot: https://github.com/LightningJimmy/QuizletMatchBot</p>
