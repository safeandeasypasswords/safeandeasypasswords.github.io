var key = "";
var challenge = "";
var isEntered = false;
var vowels = "AEIOU";
var ansRight = "";
var siteNames = ['google', 'facebook', 'youtube', 'baidu', 'yahoo', 'amazon', 'wikipedia', 'twitter', 'google',
                 'taobao', 'live', 'sina', 'linkedin', 'yahoo', 'weibo', 'ebay', 'google', 'yandex', 'vk', 'bing',
                 'google', 'msn', 'instagram', 'amazon', 'aliexpress', 'apple', 'blogspot', 'pinterest', 'ask', 'wordpress',
                 'tmall', 'reddit', 'mail', 'paypal', 'onclickads', 'tumblr', 'sohu', 'imgur', 'microsoft', 'imdb', 'gmw',
                 'netflix', 'amazon', 'googleadservices', 'go', 'alibaba', 'stackoverflow', 'craigslist', 'ok', 'tianya',
                 'rakuten', 'amazon', 'blogger', 'naver', 'espn', 'soso', 'cnn', 'outbrain', 'nicovideo', 'kat', 'dropbox',
                 'bbc', 'flipkart', 'github', 'diply', 'googleusercontent', 'adcash', 'xinhuanet',  'popads', 'dailymotion',
                 'pixnet', 'nytimes', 'ebay', 'sogou', 'booking', 'bbc', 'jd', 'dailymail', 'livedoor', 'adobe', 'wikia',
                 'adnetworkperformance', 'chase', 'china', 'indiatimes', 'uol', 'china', 'coccoc', 'huffingtonpost', 'alipay',
                 'directrev', 'buzzfeed', 'dmm', 'youku', 'amazon', 'cntv', 'blogspot', 'google', 'google', 'ameblo', 'google',
                 'amazon', 'microsoftonline', 'theguardian', 'amazonaws', 'bankofamerica', 'google', 'chinadaily', 'walmart',
                 'slideshare', 'cnet', 'etsy', 'daum', 'yelp', 'ettoday', 'globo', 'twitch', 'tudou', 'stackexchange', 'aol',
                 'quora', 'whatsapp', 'indeed', 'flickr', 'weather', 'google', 'tradeadexchange', 'office', 'amazon', 'naver',
                 'redtube', 'soundcloud', 'adf', 'ilividnewtab', 'snapdeal', 'reimageplus', 'bp', 'tubecup', 'forbes', 'wellsfargo',
                 'douban', 'zillow', 'office365', 'google', 'vice', 'gmail', 'leboncoin', 'google', 'godaddy', 'ikea', 'salesforce',
                 'vimeo', 'google', 'kakaku', 'detail', 'target', 'goo', 'about', 'tripadvisor', 'livejournal', 'avito', 'bestbuy',
                 'allegro', 'foxnews', 'wordpress', 'feedly', 'theladbible', 'themeforest', 'adplxmd', 'deviantart', '9gag',
                 'w3schools', 'nfl', 'washingtonpost', 'nih', 'wikihow', 'doublepimp', 'files', 'businessinsider', 'google',
                 'skype', 'gfycat', 'trackingclick', 'taboola', 'telegraph', 'softonic', 'google', 'avg', 'mozilla', 'nametests',
                 'mediafire', 'onet', 'americanexpress', 'pixiv', 'mystart', 'zol', 'ups', 'google', 'people', 'wix', 'amazon',
                 'hclips', 'homedepot', 'archive', 'doorblog', 'huanqiu', 'weebly', 'google', 'secureserver', 'usps', 'google',
                 'comcast', 'akamaihd', 'force', 'steamcommunity', 'wikimedia', 'bitauto', 'zhihu', 'addthis', 'ndtv', 'google',
                 'google', 'ebay-kleinanzeigen', 'mercadolivre', 'shutterstock', 'gamer', 'loading-delivery2', 'terrapops', 'xywy', 
                 'detik', 'ifeng', 'web', 'bilibili', 'google', 'popcash', 'github', 'bild', 'usatoday', 'mailchimp', 'steampowered',
                 'sourceforge', 'orange', 'answers', 'hdfcbank', 'uptodown', 'fbcdn', 'gmx', 'xfinity', 'speedtest', 'dmm', 'varzesh3',
                 'google', 'webmd', 'wordreference', 'pconline', 'google', 'att', 'hootsuite', 'rambler', 'groupon', 'stumbleupon',
                 'terraclicks', 'goodreads', 'life', 'spiegel', 'bloomberg', 'wp', 'livejasmin', 'capitalone', 'icicibank', 'blog',
                 'youm7', 'google', 'caijing', 't-online', 'fedex', 'google', 'engadget', 'haiwainet', 'amazon', 'mashable',
                 'thesaurus', 'adidas', 'spotify', 'blogfa', 'nownews', '2ch', 'samsung', 'wsj', 'xuite', 'accuweather', 'watsons',
                 'pandora', 'ign', 'udn', 'gsmarena', 'mama', 'google', 'spaceshipads', 'bet365', 'seznam', 'paytm', 'chaoshi',
                 'badoo', 'media', 'verizonwireless', 'styletv', 'mlb', 'extratorrent', 'hulu', 'youth', 'ebay', 'abs-cbnnews',
                 'google', 'reuters', '1905', 'dell', 'chaturbate', 'livedoor', 'blogimg', 'ewt', 'taleo', 'teepr', 'goal', 'scribd',
                 'libero', 'newegg', 'photobucket', 'gizmodo', 'list-manage', 'eastday', 'lifehacker', 'marca', 'olx', 'yandex',
                 'sberbank', 'neobux', 'buzzfil', 'qunar', 'google', 'ltn', 'livedoor', 'onedio', 'slack', 'citi', 'uploaded',
                 'ameba', 'stockstar', 'vid', 'time', 'torrentz', 'fiverr', 'naukri', 'cloudfront', 'espncricinfo', 'lowes', 'kompas',
                 'gap', 'aparat', 'free', 'cnzz', 'xe', 'disqus', 'techcrunch', 'lenovo', 'corriere', 'wunderground', 'rbc', 'expedia',
                 'albawabhnews', 'tabelog', 'freegameszonetab', 'google'];

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


function findAnswer(challenge, key, wildcard) {
  var answer = "";
  var sum = 0;
  for (i = 0; i < challenge.length; i++) {
    var a = key.indexOf(challenge.charAt(i));
    if (a == -1) {
      sum = sum + wildcard;
    } else {
      a = a + 1;
      a = a % 10;
      sum = sum + a;
    }
    sum = sum % 10;
    answer = answer + sum;
  }
  return answer;
}
function respond() {
  var key = "DIESTARYOU";
  var wildcard = 6;
  ansRight = findAnswer(challenge, key, wildcard);
  ansRight = ansRight + "aB7!";
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
