// Define the array of verses
var verses = [
  "Smooth like butter, Like a criminal undercover, Gon' pop like trouble, Breakin' into your heart like that \nSong: Butter",
  "Go on your path,  Even if you live for a day,  Do something,  Put away your weakness \nSong: No More Dream",
  "I feel alive although it's hard and tough,  I can handle it cause you're supporting me,  I can stand the pain cause I can hear you shouting my name \nSong: Born Singer",
  "You're just like a butterfly,  From afar, I steal glances; if we touch hands, will I lose you?, You shine in this pitch darkness that is the butterfly effect,  Your light touches, I forget the reality at once \nSong: Butterfly",
  "Let's run run run again! It's ok to fall down, Let's run run run again! It's ok to be injured, I am happy enough even though I can't get you, Curse me, this foolish destiny!\nSong: Run",
  "Yeah I hate you, Although you left, There hasn't been a day that I have forgotten you, Honestly, I miss you, But now I'll erase you, Because that will hurt less than resenting you \nSong: Spring Day",
  "Forever we are young, Under the flower petals raining down, I run, so lost in this maze, Forever we are young, Even when I fall and hurt myself, I keep running toward my dream \nSong: Young Forever",
  "Trust me, who is next to you, Together we won't die, I trust you, who is next to me, Together we won't die, We believe in the word, together, We believe that we're Bangtan, Point, aim, shoot! \nSong: Not Today",
  "Peaches and cream, Sweeter than sweet, Chocolate cheeks, And chocolate wings, But your wings are wings of the devil, In front of your sweet is bitter bitter \nSong: Blood Sweat and Tears",
  "The universe has moved for us, Without missing a single thing, Because our happiness has been planned, Cause you love me, And I love you \nSong: Intro: Serendipity",
  "The evidence of fate given to me, You are the origin of my dreams, Take it take it, My hand held out to you is destiny \nSong: DNA",
  "I was too shy to become your sun, so I became a cold moon \nSong: Blanket Kick",
  "I believe in myself;, My back hurts in order to let my wings sprout \nSong: Wings",
  "If you can’t fly, then run., Today we will survive., If you can’t run, then walk., Today we will survive., If you can’t walk, then crawl \nSong: Not Today",
  "The morning will come again., No darkness, no season is eternal \nSong: Spring Day",
  "I do believe your galaxy. I want to listen to your melody.The stars in your Milky Way,How will they appear in your sky? Don’t forget that I found you anyways. At the end of my despair. You’re the last \nSong: Magic Shop",
  "Whatever other people say, Whatever this world tells you, You’re the best to me just the way you are \nSong: 21st Century Girl",
  "Even if I fall, I come right up, scream.  That’s how we’ve always been.  Even if my knees drop to the ground.  As long as they don’t get buried.  It won’t matter \nSong: On",
  "You know it all.  You’re my best friend.  The morning will come again.  No darkness, no season is eternal \nSong:  Spring Day",
  "I knew these small feathers would become wings.  I knew the wings would make me fly.  I had that faith.  Along with laughter \nSong: Outro: Wings"
];


window.onload = function() {
  var button = document.getElementById("get-verse");
  var popup = document.getElementById("popup");
  var verse = document.getElementById("verse");

  button.addEventListener("click", function() {
    var randomVerse = verses[Math.floor(Math.random() * verses.length)];
    randomVerse = randomVerse.replace(/\n/g, "<br><br>"); // Add line breaks
    randomVerse = randomVerse.replace(/(Song:.+)/g, "<strong>$1</strong>"); // Bold the portion within the verse
    verse.innerHTML = randomVerse;
    popup.style.display = "flex";
  });
};
