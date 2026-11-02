// ALFA | History of Islam: track.js v1.0.0
// Mencatat statistik kunjungan anonim: halaman, negara (kode 2 huruf), perangkat, sumber kunjungan. IP tidak disimpan.
window.alfaTrack=function(){};
(function(){try{
var C=window.ALFA_CFG||{};if(!C.url||C.url.indexOf("YOUR-")>-1)return;
if(/[?&]preview=1/.test(location.search)||navigator.webdriver||navigator.doNotTrack=="1")return;
var ls=window.localStorage;if(ls.getItem("alfa_no_track"))return;
for(var i=0;i<ls.length;i++){if(/^sb-.*-auth-token$/.test(ls.key(i)))return}
var vid=ls.getItem("alfa_vid");if(!vid){vid=(window.crypto&&crypto.randomUUID?crypto.randomUUID():String(Math.random()).slice(2)+Date.now()).slice(0,36);ls.setItem("alfa_vid",vid)}
var gp=null;function country(){if(!gp)gp=fetch("https://api.country.is/").then(function(r){return r.json()}).then(function(j){return /^[A-Z]{2}$/.test(j.country)?j.country:null}).catch(function(){return null});return gp}
var ref="";try{var h=new URL(document.referrer).hostname.replace(/^www\./,"");if(h&&h!==location.hostname)ref=h}catch(e){}
var ua=navigator.userAgent,dev=/iPad|Tablet/i.test(ua)?"tablet":/Mobi|Android|iPhone/i.test(ua)?"mobile":"desktop";
window.alfaTrack=function(o){country().then(function(c){fetch(C.url+"/rest/v1/visits",{method:"POST",headers:{apikey:C.key,"Content-Type":"application/json",Prefer:"return=minimal"},body:JSON.stringify({page:o.page,pid:o.pid||null,title:(o.title||"").slice(0,120)||null,country:c,ref:ref.slice(0,100)||null,device:dev,vid:vid}),keepalive:true}).catch(function(){})})};
}catch(e){}})();
