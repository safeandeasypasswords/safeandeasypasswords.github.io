
var key = "";
var challenge = "";
var count = 0;
var isEntered = false;
var cResponse = "";
var vowels = "aeiou";
var siteNames = ['google' ,'facebook' ,'youtube' ,'baidu' ,'yahoo' ,'amazon' ,'wikipedia' ,'qq' ,'twitter' ,'google' ,'taobao' ,'live' ,'sina' ,'linkedin' ,'yahoo' ,'weibo' ,'ebay' ,'google' ,'yandex' ,'hao123' ,'bing' ,'google' ,'msn' ,'instagram' ,'amazon' ,'aliexpress' ,'google' ,'apple' ,'blogspot' ,'pinterest' ,'ask' ,'wordpress' ,'tmall' ,'google' ,'reddit' ,'google' ,'mail' ,'paypal' ,'onclickads' ,'tumblr' ,'sohu' ,'google' ,'imgur' ,'microsoft' ,'google' ,'imdb' ,'gmw' ,'netflix' ,'fc2' ,'amazon' ,'360' ,'googleadservices' ,'alibaba' ,'stackoverflow' ,'google' ,'google' ,'craigslist' ,'google' ,'tianya' ,'rakuten' ,'amazon' ,'blogger' ,'naver' ,'espn' ,'google' ,'soso' ,'cnn' ,'outbrain' ,'nicovideo' ,'google' ,'dropbox' ,'bbc' ,'flipkart' ,'github' ,'diply' ,'googleusercontent' ,'adcash' ,'xinhuanet' ,'amazon' ,'google' ,'google' ,'ebay' ,'google' ,'popads' ,'dailymotion' ,'pixnet' ,'nytimes' ,'ebay' ,'sogou' ,'booking' ,'bbc' ,'jdsports' ,'163' ,'dailymail' ,'livedoor' ,'adobe' ,'wikia' ,'adnetworkperformance' ,'chase' ,'china' ,'indiatimes' ,'uol' ,'china' ,'coccoc' ,'huffingtonpost' ,'google' ,'alipay' ,'directrev' ,'buzzfeed' ,'dmm' ,'youku' ,'google' ,'amazon' ,'cntv' ,'blogspot' ,'google' ,'google' ,'ameblo' ,'google' ,'amazon' ,'microsoftonline' ,'theguardian' ,'amazonaws' ,'bankofamerica' ,'google' ,'chinadaily' ,'walmart' ,'slideshare' ,'cnet' ,'etsy' ,'daum' ,'yelp' ,'ettoday' ,'globo' ,'twitch' ,'tudou' ,'stackexchange' ,'aol' ,'quora' ,'whatsapp' ,'indeed' ,'flickr' ,'weather' ,'google' ,'tradeadexchange' ,'office' ,'amazon' ,'naver' ,'soundcloud' ,'snapdeal' ,'bp' ,'forbes' ,'wellsfargo' ,'douban' ,'zillow' ,'office365' ,'google' ,'vice' ,'gmail' ,'leboncoin' ,'google' ,'godaddy' ,'ikea' ,'salesforce' ,'vimeo' ,'google' ,'kakaku' ,'detail' ,'target' ,'goo' ,'about' ,'tripadvisor' ,'livejournal' ,'avito' ,'bestbuy' ,'allegro' ,'foxnews' ,'wordpress' ,'feedly' ,'theladbible' ,'themeforest' ,'deviantart' ,'9gag' ,'w3schools' ,'nfl' ,'washingtonpost' ,'nih' ,'wikihow' ,'files' ,'businessinsider' ,'google' ,'skype' ,'gfycat' ,'taboola' ,'telegraph' ,'softonic' ,'google' ,'avg' ,'mozilla' ,'nametests' ,'mediafire' ,'onet' ,'americanexpress' ,'pixiv' ,'mystart' ,'zol' ,'ups' ,'google' ,'people' ,'wix' ,'amazon' ,'homedepot' ,'archive' ,'doorblog' ,'huanqiu' ,'weebly' ,'google' ,'secureserver' ,'usps' ,'google' ,'comcast' ,'akamaihd' ,'force' ,'steamcommunity' ,'wikimedia' ,'bitauto' ,'zhihu' ,'addthis' ,'ndtv' ,'google' ,'google' ,'ebay-kleinanzeigen' ,'mercadolivre' ,'shutterstock' ,'pcgamer' ,'loading-delivery2' ,'terrapops' ,'xywy' ,'detik' ,'ifeng' ,'web' ,'bilibili' ,'tlbb8' ,'google' ,'popcash' ,'github' ,'bild' ,'usatoday' ,'mailchimp' ,'steampowered' ,'sourceforge' ,'orange' ,'answers' ,'hdfcbank' ,'uptodown' ,'fbcdn' ,'gmx' ,'hp' ,'xfinity' ,'speedtest' ,'dmm' ,'varzesh3' ,'google' ,'webmd' ,'wordreference' ,'pconline' ,'google' ,'att' ,'hootsuite' ,'rambler' ,'groupon' ,'stumbleupon' ,'goodreads' ,'life' ,'spiegel' ,'bloomberg' ,'washingtonpost' ,'capitalone' ,'icicibank' ,'blog' ,'youm7' ,'google' ,'caijing' ,'t-online' ,'fedex' ,'google' ,'engadget' ,'haiwainet' ,'amazon' ,'mashable' ,'thesaurus' ,'adidas' ,'spotify' ,'blogfa' ,'nownews' ,'2channel' ,'samsung' ,'wsj' ,'accuweather' ,'watsons' ,'pandora' ,'ign' ,'udn' ,'gsmarena' ,'mama' ,'google' ,'bet365' ,'seznam' ,'paytm' ,'chaoshi' ,'badoo' ,'media' ,'verizonwireless' ,'styletv' ,'mlb' ,'hulu' ,'youth' ,'ebay' ,'abs-cbnnews' ,'google' ,'reuters' ,'dell' ,'livedoor' ,'zendesk' ,'google' ,'rediff' ,'bleacherreport' ,'1688' ,'ijreview' ,'trello' ,'putlocker' ,'twimg' ,'likes' ,'oeeee' ,'onlinesbi' ,'tistory' ,'reference' ,'jabong' ,'rt' ,'google' ,'sahibinden' ,'smzdm' ,'google' ,'quikr' ,'iqiyi' ,'icloud' ,'milliyet' ,'impress' ,'mega' ,'yaolan' ,'ask' ,'macys' ,'google' ,'evernote' ,'infusionsoft' ,'enet' ,'google' ,'haosou' ,'theverge' ,'baike' ,'kickstarter' ,'cbssports' ,'slickdeals' ,'google' ,'kouclo' ,'webce' ,'lady8844' ,'thefreedictionary' ,'kohls' ,'eksisozluk' ,'ebay' ,'liveinternet' ,'oracle' ,'google' ,'babytree' ,'gameforge' ,'google' ,'ebay' ,'hurriyet' ,'4shared' ,'ppomppu' ,'elpais' ,'meetup' ,'repubblica' ,'chinatimes' ,'blogimg' ,'ewt' ,'taleo' ,'teepr' ,'goal' ,'scribd' ,'libero' ,'newegg' ,'photobucket' ,'gizmodo' ,'eastday' ,'lifehacker' ,'marca' ,'olx' ,'yandex' ,'sberbank' ,'neobux' ,'buzzfil' ,'qunar' ,'google' ,'ltn' ,'livedoor' ,'slack' ,'citi' ,'uploaded' ,'ameba' ,'stockstar' ,'vid' ,'time' ,'fiverr' ,'naukri' ,'cloudfront' ,'espncricinfo' ,'lowes' ,'kompas' ,'gap' ,'aparat' ,'cnzz' ,'xe' ,'disqus' ,'techcrunch' ,'independent' ,'xda-developers' ,'retailmenot' ,'pinimg' ,'savefrom' ,'liputan6' ,'hotels' ,'hm' ,'battle' ,'justdial' ,'nbcnews' ,'bhaskar' ,'nordstrom' ,'shopclues' ,'mobile' ,'gmarket' ,'timeanddate' ,'surveymonkey' ,'gamefaqs' ,'autohome' ,'lenovo' ,'corriere' ,'wunderground' ,'rbc' ,'expedia' ,'albawabhnews' ,'tabelog' ,'google'];
var lmap = new Array(22);
letters2 = ['b','c','d','f','g','h','j', 'k','l','m','n','p','q','r','s','t', 'v', 'w','x', 'y','z'];
var words = new Array(40);

function gid(id) {
         return document.getElementById(id);
}
        
function hint(el, text) {
         el.innerText = text;
}
        
function gname(name) {
         return document.getElementsByName(name)[0];
}


function checker() {
    if(key == "") {
        alert("Make sure to submit your key!");
        return;
    }
    animate();
}
function animate() {
  document.getElementById("inputBox").value = "";
  cTime = 0;
  boldChallengeChar(0);
  for(x = 0; x < challenge.length; x++) {
    index = key.indexOf(challenge.substring(x,x+1));

    if( index != -1) {

      resultIndex = findNextLetterIndex(index+1,key);
      (function(cTime,x) {
          setTimeout(
            function() { boldChallengeChar(x); },
            500 * (cTime)
         );
      })(cTime,x);

      animateKey(resultIndex,cTime);
      cTime += resultIndex + 1;
    }
  }
}
function animateKey(index,pause) {

  for (z = 0; z < index; z++) {
    (function(z,pause) {
        setTimeout(
           function() {italicsKeyChar(z)},
           500 * (z + pause)
       );
    })(z,pause);
  }

(function(index,pause) {
        setTimeout(
            function() { boldKeyChar(index); },
           500 * (index+ pause)
        );
    })(index,pause);
}
function findNextLetterIndex(index,key) {
  var isFound = false;
  while(!isFound) {
    if (index >= key.length) {
      index = 0;
      }
    if (vowels.indexOf(key.substring(index,index+1)) != -1) {
      index +=1;
      if (index >= key.length) {
      index = 0;
      }
    } else {
      isFound = true
    }
  }
  return index
}
function italicsKeyChar(i) {
  w4 = key.substring(0,i);
  w4 += key.substring(i,i+1).italics().fontsize(6).fontcolor("red");
  w4 += key.substring(i+1,key.length);
  document.getElementById("keyData").innerHTML = w4;
}
function boldKeyChar(i) {
  w3 = key.substring(0,i);
  w3 += key.substring(i,i+1).bold().fontsize(6).fontcolor("green");
  w3 += key.substring(i+1,key.length);
  document.getElementById("keyData").innerHTML = w3;
  prevAns = document.getElementById("inputBox").value;
  console.log(prevAns);
  document.getElementById("inputBox").value = prevAns + key.substring(i,i+1);
  if(document.getElementById("inputBox").value == cResponse) {
      document.getElementById("inputBox").value += "B7!";
  }
}
function boldChallengeChar(i) {
  w2 = challenge.substring(0,i);
    w2 += challenge.substring(i,i+1).big();
    w2 += challenge.substring(i+1,challenge.length);
    document.getElementById("challengeData").innerHTML = w2;
}
function emailUs() {
    window.open('mailto:ssamadi6@gatech.edu');
}
function findNextLetter(index,key) {
  var isFound = false;
  while(!isFound) {

    if (index >= key.length) {
      index = 0;
      }

    if (vowels.indexOf(key.substring(index,index+1)) != -1) {
      index +=1;
      if (index >= key.length) {
      index = 0;
      }
    } else {
      isFound = true
    }
  }
  return key.substring(index,index+1);
}
function findResponseLength(challenge,key) {
    cResponse = "";
  for (i = 0; i < challenge.length; i++) {
    var index = key.indexOf(challenge.substring(i,i+1));
    if( index != -1) {
      count +=1;
      cResponse += findNextLetter(index+1,key);
    }
  }
  return count;
}
function getChallenge(isFirst){
    var index = Math.floor((Math.random() * siteNames.length - 1));
    var challenges = siteNames[index];
    var text = document.createElement('P');
    text.innerHTML = "The challenge is <b>" + challenges +"</b>";
    if (isFirst == 1) {
        var prevResponse = document.createElement('P');
        prevResponse.innerHTML = "The response was <b>" + cResponse + "B7!</b>";
        var prevChallenge = document.getElementById("challengeDiv").innerHTML;
        prevChallenge = prevChallenge.replace("is","was");
        document.getElementById("challengeDiv").innerHTML = prevChallenge;
        document.getElementById("challengeDiv").appendChild(prevResponse);
    }
    document.getElementById("challengeDiv").appendChild(text);

    challenge = challenges;

}

function respond() {
  if (document.getElementById("firstWord").value == "") {
      key = "computermoustachejellybox";
  } else {
    key = document.getElementById("firstWord").value +
        document.getElementById("secondWord").value +
        document.getElementById("thirdWord").value;
    key = key;
  }
  if(key == "") {
      alert("Please enter words");
      return;
  }
  document.getElementById("inputBox").removeAttribute("disabled");
  //if (!isEntered) {
    //count = findResponseLength(challenge,key);
    //isEntered = true;
    //document.getElementById('bt').innerHTML = "Click to verify";
  //} else {
    count = findResponseLength(challenge,key);
    var uResponse = "";

     uResponse +=  document.getElementById(("inputBox")).value;

    if(uResponse.toUpperCase() == cResponse.toUpperCase() + "B7!") {
        alert("correct");
        //document.getElementById('bt').innerHTML = "Ready?";
        document.getElementById('inputBox').value = "";
        count = 0;
        isEntered = false;
        getChallenge(1);
    } else {
      alert("looking for " + cResponse + "B7!" + " your response was " + uResponse);
      document.getElementById("inputBox").value = cResponse + "B7!";
    }

  //}

}

function I_eval_1(){
            
            var guess1 = gname("I100").value.trim();
            var guess2 = gname("I101").value.trim();
            
            
            if(guess1 == "qjqdrB7!" && guess2 == "lnltgclqB7!"){
                gid("I1_checkButton").style.display = 'none';
                gid("I1_nextButton").style.display = 'block';
                gname("I1_try").style.display = 'none';
                // gname("I1_correct").style.display = 'block';
                
                
                gid("I_hint100").style.display = 'block';
                gid("I_hint100").innerHTML = "Correct!";
                gid("I_hint100").style.color = "green";
                
                gid("I_hint101").style.display = 'block';
                gid("I_hint101").innerHTML = "Correct!";
                gid("I_hint101").style.color = "green";
                
                gid("ending").style.display = 'block';
                gid("amazonhint").style.display = 'none'
                
            }else{
                gid("I_hint100").style.display = 'block';
                gid("I_hint101").style.display = 'block';
                gname("I1_try").style.display = 'block';
                gid("amazonhint").style.display = 'block'
                
                if(guess1 != "qjqdrB7!" && guess2 == "lnltgclqB7!"){
                    gid("I_hint100").innerHTML = "Wrong!";
                    gid("I_hint100").style.color = "red";
                    
                    gid("I_hint101").innerHTML = "Correct!";
                    gid("I_hint101").style.color = "green";
                }
                if(guess1 == "qjqdrB7!" && guess2 != "lnltgclqB7!"){
                    gid("I_hint100").innerHTML = "Correct!";
                    gid("I_hint100").style.color = "green";
                    
                    gid("I_hint101").innerHTML = "Wrong!";
                    gid("I_hint101").style.color = "red";
                    
                }
                if (guess1 != "qjqdrB7!" && guess2 != "lnltgclqB7!") {
                    gid("I_hint100").innerHTML = "Wrong!";
                    gid("I_hint100").style.color = "red";
                    
                    gid("I_hint101").innerHTML = "Wrong!";
                    gid("I_hint101").style.color = "red";
                }
            }
        }

function showFields() {
  btn = document.getElementById("phraseBtn");
  btn.disabled = true;
  btn.style.display = "none";
  txt = document.getElementById("enterPhrase");
  txt.style.display = "block";
}

function getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min)) + min;
        }

function assign_rand_letter(index){
            lmap[Number(index)]=letters2[getRandomInt(0,21)];
            
            gname("map"+index).value=lmap[index];
            return;
        }


function is_map_full(){
            t=1;
            for (i = 1; i < 21; i++) {
                if(lmap[i]==null){
                    t=0;
                }  
            }
            
            if(t==1){
                set_lmapping();
                gname("map_not_full").style.display='none';
                //saveLMapping();
            }else{
                gname("map_not_full").style.display='block';
            }
        }

function set_lmapping(){
            for(i=1;i<21;i++){
                gname("lmap"+i).value=lmap[i];
                gname("p_lmap"+i).value = lmap[i];
             }
}

function set_wmapping(){
         for(i=1;i<21;i++){
                  gname("p_word"+i).value = wmap[i];
         }
}

function is_words_full(){   
            t=1;
            for ( i=1;i<21;i++){
                if(gname("word"+i).value.trim()==""){
                    t=0;
                }else{
                    words[i]=gname("word"+i).value.trim();
                }
            }
            if(t==1){
                gname("words_not_full").style.display='none';
                set_wmapping();
            }else{
                gname("words_not_full").style.display='block';
            }
        }


