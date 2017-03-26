var key = "";
var challenge = "";
var isEntered = false;
var vowels = "AEIOU";
var ansRight = "";
var siteNames = ['google' ,'facebook' ,'youtube' ,'baidu' ,'yahoo' ,'amazon' ,'wikipedia' ,'qq' ,'twitter' ,'google' ,'taobao' ,'live' ,'sina' ,'linkedin' ,'yahoo' ,'weibo' ,'ebay' ,'google' ,'yandex' ,'hao123' ,'bing' ,'google' ,'msn' ,'instagram' ,'amazon' ,'aliexpress' ,'google' ,'apple' ,'blogspot' ,'pinterest' ,'ask' ,'wordpress' ,'tmall' ,'google' ,'reddit' ,'google' ,'mail' ,'paypal' ,'onclickads' ,'tumblr' ,'sohu' ,'google' ,'imgur' ,'microsoft' ,'google' ,'imdb' ,'gmw' ,'netflix' ,'fc2' ,'amazon' ,'360' ,'googleadservices' ,'alibaba' ,'stackoverflow' ,'google' ,'google' ,'craigslist' ,'google' ,'tianya' ,'rakuten' ,'amazon' ,'blogger' ,'naver' ,'espn' ,'google' ,'soso' ,'cnn' ,'outbrain' ,'nicovideo' ,'google' ,'dropbox' ,'bbc' ,'flipkart' ,'github' ,'diply' ,'googleusercontent' ,'adcash' ,'xinhuanet' ,'amazon' ,'google' ,'google' ,'ebay' ,'google' ,'popads' ,'dailymotion' ,'pixnet' ,'nytimes' ,'ebay' ,'sogou' ,'booking' ,'bbc' ,'jdsports' ,'163' ,'dailymail' ,'livedoor' ,'adobe' ,'wikia' ,'adnetworkperformance' ,'chase' ,'china' ,'indiatimes' ,'uol' ,'china' ,'coccoc' ,'huffingtonpost' ,'google' ,'alipay' ,'directrev' ,'buzzfeed' ,'dmm' ,'youku' ,'google' ,'amazon' ,'cntv' ,'blogspot' ,'google' ,'google' ,'ameblo' ,'google' ,'amazon' ,'microsoftonline' ,'theguardian' ,'amazonaws' ,'bankofamerica' ,'google' ,'chinadaily' ,'walmart' ,'slideshare' ,'cnet' ,'etsy' ,'daum' ,'yelp' ,'ettoday' ,'globo' ,'twitch' ,'tudou' ,'stackexchange' ,'aol' ,'quora' ,'whatsapp' ,'indeed' ,'flickr' ,'weather' ,'google' ,'tradeadexchange' ,'office' ,'amazon' ,'naver' ,'soundcloud' ,'snapdeal' ,'bp' ,'forbes' ,'wellsfargo' ,'douban' ,'zillow' ,'office365' ,'google' ,'vice' ,'gmail' ,'leboncoin' ,'google' ,'godaddy' ,'ikea' ,'salesforce' ,'vimeo' ,'google' ,'kakaku' ,'detail' ,'target' ,'goo' ,'about' ,'tripadvisor' ,'livejournal' ,'avito' ,'bestbuy' ,'allegro' ,'foxnews' ,'wordpress' ,'feedly' ,'theladbible' ,'themeforest' ,'deviantart' ,'9gag' ,'w3schools' ,'nfl' ,'washingtonpost' ,'nih' ,'wikihow' ,'files' ,'businessinsider' ,'google' ,'skype' ,'gfycat' ,'taboola' ,'telegraph' ,'softonic' ,'google' ,'avg' ,'mozilla' ,'nametests' ,'mediafire' ,'onet' ,'americanexpress' ,'pixiv' ,'mystart' ,'zol' ,'ups' ,'google' ,'people' ,'wix' ,'amazon' ,'homedepot' ,'archive' ,'doorblog' ,'huanqiu' ,'weebly' ,'google' ,'secureserver' ,'usps' ,'google' ,'comcast' ,'akamaihd' ,'force' ,'steamcommunity' ,'wikimedia' ,'bitauto' ,'zhihu' ,'addthis' ,'ndtv' ,'google' ,'google' ,'ebay-kleinanzeigen' ,'mercadolivre' ,'shutterstock' ,'pcgamer' ,'loading-delivery2' ,'terrapops' ,'xywy' ,'detik' ,'ifeng' ,'web' ,'bilibili' ,'tlbb8' ,'google' ,'popcash' ,'github' ,'bild' ,'usatoday' ,'mailchimp' ,'steampowered' ,'sourceforge' ,'orange' ,'answers' ,'hdfcbank' ,'uptodown' ,'fbcdn' ,'gmx' ,'hp' ,'xfinity' ,'speedtest' ,'dmm' ,'varzesh3' ,'google' ,'webmd' ,'wordreference' ,'pconline' ,'google' ,'att' ,'hootsuite' ,'rambler' ,'groupon' ,'stumbleupon' ,'goodreads' ,'life' ,'spiegel' ,'bloomberg' ,'washingtonpost' ,'capitalone' ,'icicibank' ,'blog' ,'youm7' ,'google' ,'caijing' ,'t-online' ,'fedex' ,'google' ,'engadget' ,'haiwainet' ,'amazon' ,'mashable' ,'thesaurus' ,'adidas' ,'spotify' ,'blogfa' ,'nownews' ,'2channel' ,'samsung' ,'wsj' ,'accuweather' ,'watsons' ,'pandora' ,'ign' ,'udn' ,'gsmarena' ,'mama' ,'google' ,'bet365' ,'seznam' ,'paytm' ,'chaoshi' ,'badoo' ,'media' ,'verizonwireless' ,'styletv' ,'mlb' ,'hulu' ,'youth' ,'ebay' ,'abs-cbnnews' ,'google' ,'reuters' ,'dell' ,'livedoor' ,'zendesk' ,'google' ,'rediff' ,'bleacherreport' ,'1688' ,'ijreview' ,'trello' ,'putlocker' ,'twimg' ,'likes' ,'oeeee' ,'onlinesbi' ,'tistory' ,'reference' ,'jabong' ,'rt' ,'google' ,'sahibinden' ,'smzdm' ,'google' ,'quikr' ,'iqiyi' ,'icloud' ,'milliyet' ,'impress' ,'mega' ,'yaolan' ,'ask' ,'macys' ,'google' ,'evernote' ,'infusionsoft' ,'enet' ,'google' ,'haosou' ,'theverge' ,'baike' ,'kickstarter' ,'cbssports' ,'slickdeals' ,'google' ,'kouclo' ,'webce' ,'lady8844' ,'thefreedictionary' ,'kohls' ,'eksisozluk' ,'ebay' ,'liveinternet' ,'oracle' ,'google' ,'babytree' ,'gameforge' ,'google' ,'ebay' ,'hurriyet' ,'4shared' ,'ppomppu' ,'elpais' ,'meetup' ,'repubblica' ,'chinatimes' ,'blogimg' ,'ewt' ,'taleo' ,'teepr' ,'goal' ,'scribd' ,'libero' ,'newegg' ,'photobucket' ,'gizmodo' ,'eastday' ,'lifehacker' ,'marca' ,'olx' ,'yandex' ,'sberbank' ,'neobux' ,'buzzfil' ,'qunar' ,'google' ,'ltn' ,'livedoor' ,'slack' ,'citi' ,'uploaded' ,'ameba' ,'stockstar' ,'vid' ,'time' ,'fiverr' ,'naukri' ,'cloudfront' ,'espncricinfo' ,'lowes' ,'kompas' ,'gap' ,'aparat' ,'cnzz' ,'xe' ,'disqus' ,'techcrunch' ,'independent' ,'xda-developers' ,'retailmenot' ,'pinimg' ,'savefrom' ,'liputan6' ,'hotels' ,'hm' ,'battle' ,'justdial' ,'nbcnews' ,'bhaskar' ,'nordstrom' ,'shopclues' ,'mobile' ,'gmarket' ,'timeanddate' ,'surveymonkey' ,'gamefaqs' ,'autohome' ,'lenovo' ,'corriere' ,'wunderground' ,'rbc' ,'expedia' ,'albawabhnews' ,'tabelog' ,'google'];

function getChallenge(isFirst){
    var index = Math.floor((Math.random() * siteNames.length - 1));
    var challenges = siteNames[index].toUpperCase();
    var text = document.createElement('P');
    text.innerHTML = "The challenge is <b>" + challenges +"</b>";
    if (isFirst == 1) {
        var prevResponse = document.createElement('P');
        prevResponse.innerHTML = "The response was <b>" + ansRight + "</b>";
        var prevChallenge = document.getElementById("challengeDiv").innerHTML;
        prevChallenge = prevChallenge.replace("is","was");
        document.getElementById("challengeDiv").innerHTML = prevChallenge;
        document.getElementById("challengeDiv").appendChild(prevResponse);
    }
    document.getElementById("challengeDiv").appendChild(text);

    challenge = challenges;

}


//function findAnswer(challenge, key, wildcard) {
 //var answer = "";
 //var sum = 0;
 //for (i = 0; i < challenge.length; i++) {
 // var a = key.indexOf(challenge.charAt(i));
 //if (a == -1) {
 // sum = sum + wildcard;
 //} else {
 // a = a + 1;
 //a = a % 10;
 //sum = sum + a;
 //}
 //sum = sum % 10
 //answer = answer + sum;
 //}
 //return answer;
//}

function findAnswer(challenge, key, wildcard) {
  var answer = "";
  var sum = 0;
  for (i = 0; i < challenge.length; i++) {
    var a = key.indexOf(challenge.charAt(i));
    if (a == -1) {
      sum = wildcard;
    } else {
      a = a + 1;
      a = a % 10;
      sum = a;
    }
    answer = answer + sum;
  }
  return answer;
}


function respond() {
  if (document.getElementById('userWords').style.display == 'block'){
    phrase = findLetter();
  }else{
    phrase = "DIESTARYOU";
  }
   
  var wildcard = 5;
  ansRight = findAnswer(challenge, phrase, wildcard);
  ansRight = ansRight + "aB!";
  var ansUser = document.getElementById("inputBoxLf").value;
  if(ansRight == ansUser) {
        alert("correct");
        //document.getElementById('bt').innerHTML = "Ready?";
        document.getElementById('inputBoxLf').value = "";
        count = 0;
        isEntered = false;
        getChallenge(1);
    } else {
      alert("Looking for " + ansRight + ", your response was " + ansUser);
      document.getElementById("inputBoxLf").value = ansRight;
    }
}

function findLetter(){
    var word1 = document.getElementById("firstWord").value;
    var word2 = document.getElementById("secondWord").value;
    var word3 = document.getElementById("thirdWord").value;
    
    var words = word1 + word2 + word3;
    var wordsString = words.trim();
    
    for (i = 1; i < 11; i++) {
        j = i % 10;
       document.getElementById("letter" + j).value = wordsString.charAt(i-1).toUpperCase();  
    }
    var output = wordsString.toUpperCase();
  return output;
  
}

function clearTable(){
    for (i = 1; i < 11; i++) {
         j = i % 10;
        document.getElementById("letter" + j).value = '';  
    }
}

function clearFields(){
    document.getElementById("consonants").value = "";
    document.getElementById("firstWord").value = "";
    document.getElementById("secondWord").value = "";
    document.getElementById("thirdWord").value = "";
}

function showFields() {
  btn = document.getElementById("phraseBtn");
  btn.disabled = true;
  btn.style.display = "none";
  txt = document.getElementById("enterPhrase");
  txt.style.display = "block";
}
