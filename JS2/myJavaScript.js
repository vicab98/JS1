var text = [{author: "-Bob Marley", quote: "\"Love the life you live. Live the life you love.\""},
{author: " -Confucius", quote: "\"Life is really simple, but we insist on making it complicated.\""},
{author: " -Winston S. Churchill", quote: "\"Success is not final; failure is not fatal: It is the courage to continue that counts.\""},
{author: "-Estee Lauder", quote: "\"I never dreamed about success, I worked for it.\""},
{author: "-Benjamin Franklin", quote: "\"I didn\'t fail the test. I just found 100 ways to do it wrong.\""}
];

var elem0 = document.getElementById("text1");
var elem1 = document.getElementById("text");


function change() {
  var randomNumber = Math.floor(Math.random() * (text.length));
  elem0.innerHTML = text[randomNumber].author;
  elem1.innerHTML = text[randomNumber].quote;


}
