/**
 * Created by agraj on 9/26/2016.
 */

var back = document.querySelector("html");

function quote(author, quote) {
    this.author = author;
    this.quote = quote;
};
var quote1 = new quote("Douglas Adams", "All opinions are not equal. Some are a very great deal more robust, sophisticated and well supported in logic and argument than others.");
var quote2 = new quote("Douglas Adams", "Solutions nearly always come from the direction you least expect, which means there’s no point trying to look in that direction because it won’t be coming from there.");
var quote3 = new quote("Douglas Adams", "A common mistake that people make when trying to design something completely foolproof is to underestimate the ingenuity of complete fools.");
var quote4 = new quote("George Carlin", "The planet is fine. The people are fucked.");
var quote5 = new quote("George Carlin", "May the forces of evil become confused on the way to your house.");
var quote6 = new quote("George Carlin", "If you try to fail and succeed, what have you done?");
var quote7 = new quote("Penn Jillette", "“If there's something you really want to believe, that's what you should question the most.”");
var quote8 = new quote("Penn Jillette", "Luck is statistics taken personally.");
var quote9 = new quote("Penn Jillette", "I love nuts. I'm for nuts. I am nuts.");

// add all quote objects to array
var allQuotes = [quote1,quote2,quote3,quote4,quote5,quote6,quote7,quote8,quote9];
function randomQuote(){
    //random number floored 1-9
    var choice = allQuotes[Math.floor(Math.random()*allQuotes.length)];
    author = choice.author;
    quote = choice.quote;
    tweetQuote = choice.quote;
    backgroundChanger(author);
    return "<h2>" + quote + "</h2>" + "<h3>" + author + "</h3>" ;
}
function backgroundChanger(auth) {
    if (auth == "Douglas Adams"){
        imgUrl = "http://douglasadams.s3-website-eu-west-1.amazonaws.com/press/dna1b.jpg";
    }else if(auth == "Penn Jillette"){
        imgUrl = "http://cache1.asset-cache.net/gc/478641824-penn-jillette-and-teller-during-their-meet-gettyimages.jpg?v=1&c=IWSAsset&k=2&d=X7WJLa88Cweo9HktRLaNXrdo25i1Q6jIa0bpkG%2F2pZWqi3pf9B2PAsEaHfdfvUNzTfSH71jiW111wS5zBs88Rw%3D%3D";
    }else if(auth == "George Carlin"){
        imgUrl = "http://media2.s-nbcnews.com/j/newscms/2015_43/1272811/151022-george-carlin-jsw-550p_07ccd6e97bd63e0d80d3c0e269026739.nbcnews-ux-2880-1000.jpg";
    }else{
        imgUrl = "https://i.ytimg.com/vi/efei6R5oKOQ/maxresdefault.jpg";
    }
    back.style.backgroundImage = 'url('+imgUrl+')';
}
function shareOnTwitter(auth, quote){
    var twAuthor = auth;
    var twQuote = quote;
    return href="https://twitter.com/intent/tweet?text="+tweetQuote+"%20-%20"+author;
}