// Define the array of verses
var verses = [
  "Smooth like butter\nLike a criminal undercover\nGon' pop like trouble\nBreakin' into your heart like that",
  "Go on your path,\nEven if you live for a day,\nDo something,\nPut away your weakness.",
  "I feel alive although it's hard and tough,\nI can handle it cause you're supporting me,\nI can stand the pain cause I can hear you shouting my name",
  "You're just like a butterfly,\nFrom afar, I steal glances; if we touch hands, will I lose you?\nYou shine in this pitch darkness that is the butterfly effect,\nYour light touches, I forget the reality at once.",
  "Let's run run run again! It's ok to fall down\nLet's run run run again! It's ok to be injured\nI am happy enough even though I can't get you\nCurse me, this foolish destiny!",
  "Thank you for letting me be me\nFor helping me fly\nFor giving me wings\nFor straightening me out\nFor waking me from being suffocated\nFor waking me from a dream which was all I was living in\nWhen I think of you the sun comes out\nSo I gave my sadness to the dog\n(Thank you. For being 'us')",
  "Yeah I hate you\nAlthough you left\nThere hasn't been a day that I have forgotten you\nHonestly, I miss you\nBut now I'll erase you\nBecause that will hurt less than resenting you",
  "Forever we are young\nUnder the flower petals raining down\nI run, so lost in this maze\nForever we are young\nEven when I fall and hurt myself\nI keep running toward my dream",
  "Trust me, who is next to you\nTogether we won't die\nI trust you, who is next to me\nTogether we won't die\nWe believe in the word, together\nWe believe that we're Bangtan\nPoint, aim, shoot!",
  "Peaches and cream\nSweeter than sweet\nChocolate cheeks\nAnd chocolate wings\nBut your wings are wings of the devil\nIn front of your sweet is bitter bitter",
  "The universe has moved for us\nWithout missing a single thing\nBecause our happiness has been planned\nCause you love me\nAnd I love you",
  "The evidence of fate given to me\nYou are the origin of my dreams\nTake it take it\nMy hand held out to you is destiny",
  "I was too shy to become your sun\nso I became a cold moon",
  "I believe in myself;\nMy back hurts in order to let my wings sprout.",
  "If you can’t fly, then run.\nToday we will survive.\nIf you can’t run, then walk.\nToday we will survive.\nIf you can’t walk, then crawl.",
  "The morning will come again.\nNo darkness, no season is eternal.",
  "I do believe your galaxy. I want to listen to your melody.The stars in your Milky Way,How will they appear in your sky? Don’t forget that I found you anyways. At the end of my despair. You’re the last reason. For me who was standing at the edge of the cliff."
];

window.onload = function() {
  var button = document.getElementById("get-verse");
  var popup = document.getElementById("popup");
  var verse = document.getElementById("verse");

  button.addEventListener("click", function() {
    var randomVerse = verses[Math.floor(Math.random() * verses.length)];
    verse.textContent = randomVerse;
    popup.style.display = "flex";
  });
};
