!function(e,t){"function"==typeof define&&define.amd?define(["jquery"],t):"object"==typeof exports?t(require("jquery")):t(e.jQuery)}(this,(function(e){"use strict";var t="vide",o={volume:1,playbackRate:1,muted:!0,loop:!0,autoplay:!0,position:"50% 50%",posterType:"detect",resizing:!0,bgColor:"transparent",className:""},i="Not implemented";function r(e){var t,o,i,r,s,n,a,p={};for(a=0,n=(s=e.replace(/\s*:\s*/g,":").replace(/\s*,\s*/g,",").split(",")).length;a<n&&(-1===(o=s[a]).search(/^(http|https|ftp):\/\//)&&-1!==o.search(":"));a++)t=o.indexOf(":"),i=o.substring(0,t),(r=o.substring(t+1))||(r=void 0),"string"==typeof r&&(r="true"===r||"false"!==r&&r),"string"==typeof r&&(r=isNaN(r)?r:+r),p[i]=r;return null==i&&null==r?e:p}function s(t,s,n){if(this.$element=e(t),"string"==typeof s&&(s=r(s)),n?"string"==typeof n&&(n=r(n)):n={},"string"==typeof s)s=s.replace(/\.\w*$/,"");else if("object"==typeof s)for(var a in s)s.hasOwnProperty(a)&&(s[a]=s[a].replace(/\.\w*$/,""));this.settings=e.extend({},o,n),this.path=s;try{this.init()}catch(e){if(e.message!==i)throw e}}s.prototype.init=function(){var t,o,r=this,s=r.path,n=s,a="",p=r.$element,c=r.settings,d=function(e){var t,o,i,r=(e=""+e).split(/\s+/),s="50%",n="50%";for(i=0,t=r.length;i<t;i++)"left"===(o=r[i])?s="0%":"right"===o?s="100%":"top"===o?n="0%":"bottom"===o?n="100%":"center"===o?0===i?s="50%":n="50%":0===i?s=o:n=o;return{x:s,y:n}}(c.position),u=c.posterType;o=r.$wrapper=e("<div>").addClass(c.className).css({position:"absolute","z-index":-1,top:0,left:0,bottom:0,right:0,overflow:"hidden","-webkit-background-size":"cover","-moz-background-size":"cover","-o-background-size":"cover","background-size":"cover","background-color":c.bgColor,"background-repeat":"no-repeat","background-position":d.x+" "+d.y}),"object"==typeof s&&(s.poster?n=s.poster:s.mp4?n=s.mp4:s.webm?n=s.webm:s.ogv&&(n=s.ogv)),"detect"===u?function(t,o){var i=function(){o(this.src)};e('<img src="'+t+'.gif">').load(i),e('<img src="'+t+'.jpg">').load(i),e('<img src="'+t+'.jpeg">').load(i),e('<img src="'+t+'.png">').load(i)}(n,(function(e){o.css("background-image","url("+e+")")})):"none"!==u&&o.css("background-image","url("+n+"."+u+")"),"static"===p.css("position")&&p.css("position","relative"),p.prepend(o),"object"==typeof s?(s.mp4&&(a+='<source src="'+s.mp4+'.mp4" type="video/mp4">'),s.webm&&(a+='<source src="'+s.webm+'.webm" type="video/webm">'),s.ogv&&(a+='<source src="'+s.ogv+'.ogv" type="video/ogg">'),t=r.$video=e("<video>"+a+"</video>")):t=r.$video=e('<video><source src="'+s+'.mp4" type="video/mp4"><source src="'+s+'.webm" type="video/webm"><source src="'+s+'.ogv" type="video/ogg"></video>');try{t.prop({autoplay:c.autoplay,loop:c.loop,volume:c.volume,muted:c.muted,defaultMuted:c.muted,playbackRate:c.playbackRate,defaultPlaybackRate:c.playbackRate})}catch(e){throw new Error(i)}t.css({margin:"auto",position:"absolute","z-index":-1,top:d.y,left:d.x,"-webkit-transform":"translate(-"+d.x+", -"+d.y+")","-ms-transform":"translate(-"+d.x+", -"+d.y+")","-moz-transform":"translate(-"+d.x+", -"+d.y+")",transform:"translate(-"+d.x+", -"+d.y+")",visibility:"hidden",opacity:0}).one("canplaythrough.vide",(function(){r.resize()})).one("playing.vide",(function(){t.css({visibility:"visible",opacity:1}),o.css("background-image","none")})),p.on("resize.vide",(function(){c.resizing&&r.resize()})),o.append(t)},s.prototype.getVideoObject=function(){return this.$video[0]},s.prototype.resize=function(){if(this.$video){var e=this.$wrapper,t=this.$video,o=t[0],i=o.videoHeight,r=o.videoWidth,s=e.height(),n=e.width();n/r>s/i?t.css({width:n+2,height:"auto"}):t.css({width:"auto",height:s+2})}},s.prototype.destroy=function(){delete e.vide.lookup[this.index],this.$video&&this.$video.off(t),this.$element.off(t).removeData(t),this.$wrapper.remove()},e.vide={lookup:[]},e.fn.vide=function(o,i){var r;return this.each((function(){(r=e.data(this,t))&&r.destroy(),(r=new s(this,o,i)).index=e.vide.lookup.push(r)-1,e.data(this,t,r)})),this},e(document).ready((function(){var t=e(window);t.on("resize.vide",(function(){for(var t,o=e.vide.lookup.length,i=0;i<o;i++)(t=e.vide.lookup[i])&&t.settings.resizing&&t.resize()})),t.on("unload.vide",(function(){return!1})),e(document).find("[data-vide-bg]").each((function(t,o){var i=e(o),r=i.data("vide-options"),s=i.data("vide-bg");i.vide(s,r)}))}))}));