


function genrateQuote(){
    var Quote = ["“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”" , "“So many books, so little time.”" , "“A room without books is like a body without a soul.”" , "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”" ];
    var author = ["-- Albert Einstein" , "-- Frank Zappa" , "-- Marcus Tullius Cicero" , "-- Bernard M. Baruch"];

    var num = Math.floor(Math.random() * Quote.length);

    document.getElementById('quote-text').textContent = Quote[num];
    document.getElementById('author').textContent = author[num];
}
genrateQuote();