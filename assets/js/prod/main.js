!function(i){"use strict";function t(i,t){var n=!0;return function(e){n&&(n=!1,setTimeout(function(){n=!0},t),i(e))}}function n(i){for(var t=i.nextSibling;t&&1!=t.nodeType;)t=t.nextSibling;return t}function e(i,t){for(var n in t)t.hasOwnProperty(n)&&(i[n]=t[n]);return i}function s(i,t){this.gridEl=i,this.options=e({},this.options),e(this.options,t),this.items=[].slice.call(this.gridEl.querySelectorAll(".grid__item")),this.previewEl=n(this.gridEl),this.isExpanded=!1,this.isAnimating=!1,this.closeCtrl=this.previewEl.querySelector("button.action--close"),this.previewDescriptionEl=this.previewEl.querySelector(".description--preview"),this._init()}var o={transitions:Modernizr.csstransitions},r={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd",msTransition:"MSTransitionEnd",transition:"transitionend"},a=r[Modernizr.prefixed("transition")],l=function(i,t){var n=function(i){if(o.transitions){if(i.target!=this)return;this.removeEventListener(a,n)}t&&"function"==typeof t&&t.call(this)};o.transitions?i.addEventListener(a,n):n()};s.prototype.options={pagemargin:0,imgPosition:{x:1,y:1},onInit:function(i){return!1},onResize:function(i){return!1},onOpenItem:function(i,t){return!1},onCloseItem:function(i,t){return!1},onExpand:function(){return!1}},s.prototype._init=function(){this.options.onInit(this);var i=this;imagesLoaded(this.gridEl,function(){new Masonry(i.gridEl,{itemSelector:".grid__item",isFitWidth:!0}),classie.add(i.gridEl,"grid--loaded"),i._initEvents(),i._setOriginal(),i._setClone()})},s.prototype._initEvents=function(){var n=this,e=null!==document.ontouchstart?"click":"touchstart";this.items.forEach(function(i){var t=function(e){e.preventDefault(),n._openItem(e,i),i.removeEventListener("touchend",t)},s=function(n){i.removeEventListener("touchend",t)},o=function(){i.addEventListener("touchend",t),i.addEventListener("touchmove",s)};i.addEventListener(e,function(t){"click"===e?(t.preventDefault(),n._openItem(t,i)):o()})}),this.closeCtrl.addEventListener("click",function(){n._closeItem()}),$(document).on("keydown",function(i){27===i.keyCode&&n._closeItem()}),i.addEventListener("resize",t(function(i){n.options.onResize(n)},10))},s.prototype._openItem=function(i,t){if(!this.isAnimating&&!this.isExpanded){this.isAnimating=!0,this.isExpanded=!0;var n=t.querySelector("img"),e=n.getBoundingClientRect();this.current=this.items.indexOf(t),this._setOriginal(t.querySelector("a").getAttribute("href")),this.options.onOpenItem(this,t),this._setClone(n.src,{width:n.offsetWidth,height:n.offsetHeight,left:e.left,top:e.top}),classie.add(t,"grid__item--current");var s=this._getWinSize(),o=t.getAttribute("data-size").split("x"),r={width:o[0],height:o[1]},a=(this.options.imgPosition.x>0?1-Math.abs(this.options.imgPosition.x):Math.abs(this.options.imgPosition.x))*s.width+this.options.imgPosition.x*s.width/2-e.left-.5*n.offsetWidth,h=(this.options.imgPosition.y>0?1-Math.abs(this.options.imgPosition.y):Math.abs(this.options.imgPosition.y))*s.height+this.options.imgPosition.y*s.height/2-e.top-.5*n.offsetHeight,c=Math.min(Math.min(s.width*Math.abs(this.options.imgPosition.x)-this.options.pagemargin,r.width-this.options.pagemargin)/n.offsetWidth,Math.min(s.height*Math.abs(this.options.imgPosition.y)-this.options.pagemargin,r.height-this.options.pagemargin)/n.offsetHeight);this.cloneImg.style.WebkitTransform="translate3d("+a+"px, "+h+"px, 0) scale3d("+c+", "+c+", 1)",this.cloneImg.style.transform="translate3d("+a+"px, "+h+"px, 0) scale3d("+c+", "+c+", 1)";var m=t.querySelector(".description");m&&(this.previewDescriptionEl.innerHTML=m.innerHTML);var g=this;setTimeout(function(){classie.add(g.previewEl,"preview--open"),g.options.onExpand()},0),l(this.cloneImg,function(){imagesLoaded(g.originalImg,function(){classie.add(g.previewEl,"preview--image-loaded"),g.originalImg.style.opacity=1,l(g.originalImg,function(){g.cloneImg.style.opacity=0,g.cloneImg.style.WebkitTransform="translate3d(0,0,0) scale3d(1,1,1)",g.cloneImg.style.transform="translate3d(0,0,0) scale3d(1,1,1)",g.isAnimating=!1})})})}},s.prototype._setOriginal=function(i){i||(this.originalImg=document.createElement("img"),this.originalImg.className="original",this.originalImg.style.opacity=0,this.originalImg.style.maxWidth="calc("+parseInt(100*Math.abs(this.options.imgPosition.x))+"vw - "+this.options.pagemargin+"px)",this.originalImg.style.maxHeight="calc("+parseInt(100*Math.abs(this.options.imgPosition.y))+"vh - "+this.options.pagemargin+"px)",this.originalImg.style.WebkitTransform="translate3d(0,0,0) scale3d(1,1,1)",this.originalImg.style.transform="translate3d(0,0,0) scale3d(1,1,1)",i="",this.previewEl.appendChild(this.originalImg)),this.originalImg.setAttribute("src",i)},s.prototype._setClone=function(i,t){i?(this.cloneImg.style.opacity=1,this.cloneImg.style.width=t.width+"px",this.cloneImg.style.height=t.height+"px",this.cloneImg.style.top=t.top+"px",this.cloneImg.style.left=t.left+"px"):(this.cloneImg=document.createElement("img"),this.cloneImg.className="clone",i="",this.cloneImg.style.opacity=0,this.previewEl.appendChild(this.cloneImg)),this.cloneImg.setAttribute("src",i)},s.prototype._closeItem=function(){if(this.isExpanded&&!this.isAnimating){this.isExpanded=!1,this.isAnimating=!0;var i=this.items[this.current],t=i.querySelector("img"),n=t.getBoundingClientRect(),e=this;classie.remove(this.previewEl,"preview--open"),classie.remove(this.previewEl,"preview--image-loaded"),this.options.onCloseItem(this,i),classie.add(this.originalImg,"animate");var s=this._getWinSize(),o=n.left+t.offsetWidth/2-((this.options.imgPosition.x>0?1-Math.abs(this.options.imgPosition.x):Math.abs(this.options.imgPosition.x))*s.width+this.options.imgPosition.x*s.width/2),r=n.top+t.offsetHeight/2-((this.options.imgPosition.y>0?1-Math.abs(this.options.imgPosition.y):Math.abs(this.options.imgPosition.y))*s.height+this.options.imgPosition.y*s.height/2),a=t.offsetWidth/this.originalImg.offsetWidth;this.originalImg.style.WebkitTransform="translate3d("+o+"px, "+r+"px, 0) scale3d("+a+", "+a+", 1)",this.originalImg.style.transform="translate3d("+o+"px, "+r+"px, 0) scale3d("+a+", "+a+", 1)",l(this.originalImg,function(){e.previewDescriptionEl.innerHTML="",classie.remove(i,"grid__item--current"),setTimeout(function(){e.originalImg.style.opacity=0},60),l(e.originalImg,function(){classie.remove(e.originalImg,"animate"),e.originalImg.style.WebkitTransform="translate3d(0,0,0) scale3d(1,1,1)",e.originalImg.style.transform="translate3d(0,0,0) scale3d(1,1,1)",e.isAnimating=!1})})}},s.prototype._getWinSize=function(){return{width:document.documentElement.clientWidth,height:i.innerHeight}},i.GridFx=s}(window),function(){var i={transitions:Modernizr.csstransitions},t={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd",msTransition:"MSTransitionEnd",transition:"transitionend"},n=t[Modernizr.prefixed("transition")],e=function(t,e){var s=function(t){if(i.transitions){if(t.target!=this)return;this.removeEventListener(n,s)}e&&"function"==typeof e&&e.call(this)};i.transitions?t.addEventListener(n,s):s()};new GridFx(document.querySelector(".grid"),{imgPosition:{x:-.5,y:1},onOpenItem:function(i,t){i.items.forEach(function(i){if(t!=i){var n=Math.floor(50*Math.random());i.style.WebkitTransition="opacity .5s "+n+"ms cubic-bezier(.7,0,.3,1), -webkit-transform .5s "+n+"ms cubic-bezier(.7,0,.3,1)",i.style.transition="opacity .5s "+n+"ms cubic-bezier(.7,0,.3,1), transform .5s "+n+"ms cubic-bezier(.7,0,.3,1)",i.style.WebkitTransform="scale3d(0.1,0.1,1)",i.style.transform="scale3d(0.1,0.1,1)",i.style.opacity=0}})},onCloseItem:function(i,t){i.items.forEach(function(i){t!=i&&(i.style.WebkitTransition="opacity .4s, -webkit-transform .4s",i.style.transition="opacity .4s, transform .4s",i.style.WebkitTransform="scale3d(1,1,1)",i.style.transform="scale3d(1,1,1)",i.style.opacity=1,e(i,function(){i.style.transition="none",i.style.WebkitTransform="none"}))})}})}();