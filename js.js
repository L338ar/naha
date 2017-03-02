//if you are reading this code - I'm really sorry for you - It's a mess and could have been much better if I had more than 20 minutes to work on it from scratch including POCs :-P


var audioSprite = document.getElementById('audio');
var spriteData = {
naha1: {
start: 0.000000,
length: 0.336122
},
naha2: {
start: 0.806893,
length: 0.510992
},
naha3: {
start: 1.502065,
length: 0.518345
},
naha4: {
start: 2.323280,
length: 0.599455
},
naha5: {
start: 3.235,
length: 0.482
},
naha6: {
start: 4.104616,
length: 0.759964
},
naha7: {
start: 5.233197,
length: 1.335148
},
naha8: {
start: 6.716861,
length: 0.374353
},
naha9: {
start: 7.459410,
length: 0.600285
},
naha10: {
start: 8.350476,
length: 0.481555
},
naha11: {
start: 9.070058,
length: 0.527505
},
naha12: {
start: 9.824943,
length: 0.655964
},
naha13: {
start: 10.811791,
length: 0.644729
},
naha14: {
start: 11.654003,
length: 0.527529
},
naha15: {
start: 12.413968,
length: 0.806894
},
naha16: {
start: 13.467574,
length: 0.635646
},
naha17: {
start: 14.341224,
length: 0.769161
},
naha18: {
start: 15.441270,
length: 0.682086
},
naha19: {
start: 16.419410,
length: 0.629842
},
naha20: {
start: 17.316281,
length: 0.640103
},
naha21: {
start: 18.239763,
length: 2.263175
},
naha22: {
start: 20.741713,
length: 0.714694
},
naha23: {
start: 21.873197,
length: 0.922993
},
naha24: {
start: 23.283810,
length: 1.355464
},
naha25: {
start: 25.002086,
length: 0.505034
},
remark1: {
start: 25.884444,
length: 1.178413
},
remark2: {
start: 27.304253,
length: 0.833479
},
remark3: {
start: 28.508299,
length: 1.227768
},
remark4: {
start: 30.023401,
length: 1.153913
},
remark5: {
start: 31.465941,
length: 2.113016
},
remark6: {
start: 33.904525,
length: 1.787448
},
remark7: {
start: 35.929977,
length: 1.102948
},
remark8: {
start: 37.363810,
length: 1.175782
},
remark9: {
start: 39.128526,
length: 1.06357
},
hello: {
start: 40.535,
length: 0.747
}

};



var inter=Math.floor((Math.random() * (7)) + 11);
var interc=1;
var currentSprite = {};


var phonestat=false;
var running = true;
var firstrun=true;
// time update handler to ensure we stop when a sprite is complete
var onTimeUpdate = function() {
    if (this.currentTime >= currentSprite.start + currentSprite.length) {
        this.pause();
    }
};

audioSprite.addEventListener('timeupdate', onTimeUpdate, false);

// in mobile Safari, the first time this is called will load the audio. Ideally, we'd load the audio file completely before doing this.
var playSprite = function(id) {
    if (spriteData[id] && spriteData[id].length) {
        currentSprite = spriteData[id];
        audioSprite.currentTime = currentSprite.start;
        audioSprite.play();
    }
};

var helpme = function(){
alert('this is an anlert');
}

var start = function(){
if (firstrun) {
playSprite('hello');
firstrun=false;
}

//setTimeout(function(){playSprite('naha1')},3000);
if (running) {
if (interc < inter){
pause=Math.floor((Math.random() * (6)) + 3)*400;
setTimeout(playNext,pause);
}
else {
pause=Math.floor((Math.random() * (6)) + 3)*400;
setTimeout(playRemark,pause);
}

}
};

var playNext = function(){
sprite=Math.floor((Math.random() * (25)) + 1);
if (audioSprite.paused){
playSprite("naha"+sprite);
interc=interc+1;
}
start();
}

var cycle=function(){
running= !running;
}

var isplaying=function(){
alert(!audioSprite.paused);
}

var playRemark = function(){
sprite=Math.floor((Math.random() * (9)) + 1);
if (audioSprite.paused){
playSprite("remark"+sprite);
interc=0;
inter=Math.floor((Math.random() * (7)) + 11);
}
start();
}

var showme=function(){
if (phonestat) {
phonestat=false;
document.getElementById("on").style.display="none";
cycle();
}
else{
phonestat=true;
document.getElementById("on").style.display="inline";
if (firstrun){ 
start();
}
else
{
cycle();
firstrun=true;
start();
}

}

}
