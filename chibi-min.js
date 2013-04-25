/*Chibi v1.0.7, (C)2013 Kyle Barrow, MIT licensed*/(function(){"use strict";function nt(){var e;G=t;for(e=0;e<K[n];e+=1)K[e]();K=[]}function rt(){var e;Y=t;G||nt();for(e=0;e<Q[n];e+=1)Q[e]();Q=[]}function it(e,t){var r;for(r=t[n]-1;r>=0;r-=1)e(t[r])}function st(e){return e[u](/-\w/g,function(e){return e.charAt(1)[a]()})}function ot(e,t){return e[f]?e[f][st(t)]:tt[l]?tt[l](e,c).getPropertyValue(t):c}function ut(e,t){return encodeURIComponent(e)[u](/%20/g,"+")+"="+encodeURIComponent(t)[u](/%20/g,"+")}function at(e,t,n){try{e[h][st(t)]=n}catch(r){}}function ft(e){e[h][p]="";ot(e,p)===d&&(e[h][p]="block")}function lt(e){e=e.reverse();e[n]===1&&(e=e[0]);return e}function ct(e){var t="",r,i,s;if(e[v]===Object){for(r in e)if(e.hasOwnProperty(r))if(e[r][v]===Array)for(i=0;i<e[r][n];i+=1)t+=m+ut(r,e[r][i]);else t+=m+ut(r,e[r])}else it(function(e){if(e[g]==="FORM")for(i=0;i<e.elements[n];i+=1){r=e.elements[i];if(!r.disabled)switch(r.type){case"button":case"image":case"file":case"submit":case"reset":break;case"select-one":r[n]>0&&(t+=m+ut(r[y],r[b]));break;case"select-multiple":for(s=0;s<r[n];s+=1)r[s][w]&&(t+=m+ut(r[y],r[s][b]));break;case E:case S:r[x]&&(t+=m+ut(r[y],r[b]));break;default:t+=m+ut(r[y],r[b])}}},e);return t[n]>0?t.substring(1):""}function ht(f){var l,v=[],nt=e,rt,ut;if(f)if(f.nodeType&&f.nodeType===1)v=[f];else if(typeof f=="object"){nt=typeof f[n]!="number";v=f}else if(typeof f===T){et[N]||(et[N]=function(e){var t,r=et[C](k)[0],i,s=[],o;t=et[L]("STYLE");t.type="text/css";if(t[A]){t[A][O]=e+" {a:b}";r[M](t);i=et[C]("*");for(o=0;o<i[n];o+=1)ot(i[o],"a")==="b"&&s[_](i[o]);r[D](t)}return s});rt=et[N](f);for(ut=0;ut<rt[n];ut+=1)v[ut]=rt[ut]}l=nt?{}:v;l.ready=function(e){e&&(G?e():K[_](e))};l.loaded=function(e){e&&(Y?e():Q[_](e))};l.loop=function(e){typeof e=="function"&&it(function(t){return e.apply(t,arguments)},v)};l.find=function(t){if(t){var r=[],i;switch(t){case"first":v[n]>0&&(v=[v.shift()]);break;case"last":v[n]>0&&(v=[v.pop()]);break;case"odd":case"even":for(i=t==="odd"?0:1;i<v[n];i+=2)r[_](v[i]);v=r}}return v[n]>0?v[n]===1?v[0]:v:e};l.hide=function(){it(function(e){e[h][p]=d},v)};l.show=function(){it(function(e){ft(e)},v)};l[P]=function(){it(function(e){ot(e,p)===d?ft(e):e[h][p]=d},v)};l.remove=function(){var e=v[n];it(function(e){try{e[H][D](e)}catch(t){}},v);v=[]};l.css=function(e,t){var r=[];it(function(n){t?at(n,e,t):n[h][st(e)]?r[_](n[h][st(e)]):ot(n,e)?r[_](ot(n,e)):r[_](c)},v);if(r[n]>0)return lt(r)};l.cls=function(r,i){var s=[],o,a,f,l,c;if(r){o=r.split(/\s+/);i=i||u}it(function(h){a=h[B];if(r){switch(i){case"add":h[B]=a+" "+r;break;case u:h[B]=r;break;case j:case P:case"remove":l=t;for(c=0;c<o[n];c+=1){f=new RegExp("\\b"+o[c]+"\\b","g");if(i===j){if(!a.match(f)){l=e;break}}else i===P?h[B]=h[B].match(f)?h[B][u](f,""):h[B]+" "+o[c]:h[B]=h[B][u](f,"")}i===j&&s[_](l)}h[B]=h[B][u](/^\s+|\s+$/g,"")}else s[_](a)},v);if(s[n]>0)return lt(s)};l.html=function(e,t){var r=[],i,s;it(function(n){if(t){i=et[L]("div");i[F]=e;while((s=i.lastChild)!==c)try{t==="before"?n[H][I](s,n):t==="after"&&n[H][I](s,n.nextSibling)}catch(o){break}}else e?n[F]=e:r[_](n[F])},v);if(r[n]>0)return lt(r)};l.attr=function(e,t){var r=[];it(function(n){if(e){e=e.toLowerCase();switch(e){case h:t?n[h][O]=t:n[h][O]?r[_](n[h][O]):r[_](c);break;case"class":t?n[B]=t:n[B]?r[_](n[B]):r[_](c);break;default:t?n.setAttribute(e,t):n[q](e)?r[_](n[q](e)):r[_](c)}}},v);if(r[n]>0)return lt(r)};l.val=function(r){var i=[],s=[],o,u,a,f;typeof r===T&&(r=[r]);it(function(l){if(r)switch(l[g]){case R:for(o=0;o<l[n];o+=1)for(u=0;u<r[n];u+=1){l[o][w]="";if(l[o][b]===r[u]){l[o][w]=w;break}}break;case U:switch(l.type){case E:case S:l[x]="";for(o=0;o<r[n];o+=1)if(l[b]===r[o]){l[x]=x;break}break;default:l[b]=r[0]}break;case z:case W:l[b]=r[0]}else switch(l[g]){case R:f=s[n];s[_]([]);for(o=0;o<l[n];o+=1)l[o][w]&&s[f][_](l[o][b]);switch(s[f][n]){case 0:s[f]=c;break;case 1:s[f]=s[f][0]}break;case U:switch(l.type){case E:l[x]?s[_](l[b]):s[_](c);break;case S:a=e;for(o=0;o<i[n];o+=1)if(i[o][0]===l[y]){l[x]&&(s[i[o][1]]=l[b]);a=t}if(!a){i[_]([l[y],s[n]]);l[x]?s[_](l[b]):s[_](c)}break;default:s[_](l[b])}break;case z:case W:s[_](l[b])}},v);if(s[n]>0)return lt(s)};l.on=function(t,n,s){if(f===tt||f===et)v=[f];it(function(o){if(et[r])s?o.removeEventListener(t,n,e):o[r](t,n,e);else if(et[i])if(s){o.detachEvent("on"+t,o[t+n]);o[t+n]=c}else{o[t+n]=function(){return n.apply(o,arguments)};o[i]("on"+t,o[t+n])}},v)};l.ajax=function(e,n,r,i,f){var l,h=ct(v),p=e.indexOf("?")===-1?"?":m,d=new RegExp("http[s]?://(.*?)/","gi"),g=d.exec(e),y="_ts="+ +(new Date),b=et[C](k)[0],w="chibi"+ +(new Date)+(Z+=1),E;if(!f&&g&&tt.location.host!==g[1]){e+=p+h;i&&(e+=m+y);e=e[u]("=%3F",X);if(r&&e.indexOf(X)!==-1){e=e[u](X,"="+w);tt[w]=function(e){try{r(e,200)}catch(t){}tt[w]=undefined}}E=document[L]("script");E.async=t;E.src=e;E[o]=function(){b[D](E)};b[M](E)}else{n=n||"GET";tt[V]?l=new XMLHttpRequest:tt.ActiveXObject&&(l=new ActiveXObject("Microsoft.XMLHTTP"));if(l){n=n[a]();if(n==="GET"){e+=p+h;h=c}i&&(e+=n===$?p+y:m+y);l.open(n,e,t);l[s]=function(){l.readyState===4&&r&&r(l.responseText,l.status)};n===$&&l[J]("Content-Type","application/x-www-form-urlencoded");f&&l[J]("X-Requested-With",V);l.send(h)}}};return l}var e=!1,t=!0,n="length",r="addEventListener",i="attachEvent",s="onreadystatechange",o="onload",u="replace",a="toUpperCase",f="currentStyle",l="getComputedStyle",c=null,h="style",p="display",d="none",v="constructor",m="&",g="nodeName",y="name",b="value",w="selected",E="checkbox",S="radio",x="checked",T="string",N="querySelectorAll",C="getElementsByTagName",k="head",L="createElement",A="styleSheet",O="cssText",M="appendChild",_="push",D="removeChild",P="toggle",H="parentNode",B="className",j="has",F="innerHTML",I="insertBefore",q="getAttribute",R="SELECT",U="INPUT",z="TEXTAREA",W="BUTTON",X="=?",V="XMLHttpRequest",$="POST",J="setRequestHeader",K=[],Q=[],G=e,Y=e,Z=0,et=document,tt=window;if(et[r]){et[r]("DOMContentLoaded",nt,e);tt[r]("load",rt,e)}else if(et[i]){et[i](s,nt);tt[i](o,rt)}else tt[o]=rt;tt.$=ht})();