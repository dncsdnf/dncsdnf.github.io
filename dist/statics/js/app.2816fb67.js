(function(t){function e(e){for(var i,r,s=e[0],o=e[1],u=e[2],l=0,d=[];l<s.length;l++)r=s[l],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&d.push(a[r][0]),a[r]=0;for(i in o)Object.prototype.hasOwnProperty.call(o,i)&&(t[i]=o[i]);h&&h(e);while(d.length)d.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var t,e=0;e<c.length;e++){for(var n=c[e],i=!0,r=1;r<n.length;r++){var s=n[r];0!==a[s]&&(i=!1)}i&&(c.splice(e--,1),t=o(o.s=n[0]))}return t}var i={},r={app:0},a={app:0},c=[];function s(t){return o.p+"statics/js/"+({}[t]||t)+"."+{"chunk-0c8c79ab":"26388696","chunk-390e9ea0":"0f8841bb","chunk-6a488af2":"9ed57664","chunk-a05c2b8c":"0c80c99d","chunk-a4518ab6":"ea2d67e4","chunk-eb0f6c96":"8d10cd1d"}[t]+".js"}function o(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.e=function(t){var e=[],n={"chunk-0c8c79ab":1,"chunk-390e9ea0":1,"chunk-6a488af2":1,"chunk-a05c2b8c":1,"chunk-a4518ab6":1,"chunk-eb0f6c96":1};r[t]?e.push(r[t]):0!==r[t]&&n[t]&&e.push(r[t]=new Promise((function(e,n){for(var i="statics/css/"+({}[t]||t)+"."+{"chunk-0c8c79ab":"f0419aca","chunk-390e9ea0":"e782927b","chunk-6a488af2":"aad9d954","chunk-a05c2b8c":"d1cc34b0","chunk-a4518ab6":"c670c1c3","chunk-eb0f6c96":"5006df66"}[t]+".css",a=o.p+i,c=document.getElementsByTagName("link"),s=0;s<c.length;s++){var u=c[s],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===i||l===a))return e()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){u=d[s],l=u.getAttribute("data-href");if(l===i||l===a)return e()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=e,h.onerror=function(e){var i=e&&e.target&&e.target.src||a,c=new Error("Loading CSS chunk "+t+" failed.\n("+i+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=i,delete r[t],h.parentNode.removeChild(h),n(c)},h.href=a;var f=document.getElementsByTagName("head")[0];f.appendChild(h)})).then((function(){r[t]=0})));var i=a[t];if(0!==i)if(i)e.push(i[2]);else{var c=new Promise((function(e,n){i=a[t]=[e,n]}));e.push(i[2]=c);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,o.nc&&l.setAttribute("nonce",o.nc),l.src=s(t);var d=new Error;u=function(e){l.onerror=l.onload=null,clearTimeout(h);var n=a[t];if(0!==n){if(n){var i=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+i+": "+r+")",d.name="ChunkLoadError",d.type=i,d.request=r,n[1](d)}a[t]=void 0}};var h=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},o.m=t,o.c=i,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(n,i,function(e){return t[e]}.bind(null,i));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var d=0;d<u.length;d++)e(u[d]);var h=l;c.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0173":function(t,e,n){"use strict";n("9a90")},"0514":function(t,e,n){},"1c3c":function(t,e){function n(){var t=document.documentElement,e=window.innerWidth,n=e/320*20+"px";t.style.fontSize=e>=640?"40px":e<=320?"20px":n}window.onresize=n,n()},"56d7":function(t,e,n){"use strict";n.r(e);n("d3b7"),n("6062"),n("3ca3"),n("ddb0"),n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),r=n("bc3a"),a=n.n(r),c={baseURL:"http://music.kele8.cn/"},s=a.a.create(c);s.interceptors.request.use((function(t){return t}),(function(t){return Promise.reject(t)})),s.interceptors.response.use((function(t){return t}),(function(t){return Promise.reject(t)})),Plugin.install=function(t){t.axios=s,window.axios=s,Object.defineProperties(t.prototype,{axios:{get:function(){return s}},$axios:{get:function(){return s}}})},i["a"].use(Plugin);Plugin;var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("TopNav"),n("Play"),n("keep-alive",[n("router-view")],1),t.$root.musicStore.musicId?n("div",{staticStyle:{height:"60px"}}):t._e()],1)},u=[],l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._m(0),n("ul",{ref:"topNav",staticClass:"topNav",class:{fix:t.isFixed}},[n("li",[n("router-link",{attrs:{to:"/recommend"}},[t._v("推荐音乐")])],1),n("li",[n("router-link",{attrs:{to:"/boutique"}},[t._v("精品音乐")])],1),n("li",[n("router-link",{attrs:{to:"/rankList"}},[t._v("排行榜")])],1),n("li",[n("router-link",{attrs:{to:"/search"}},[t._v("搜索")])],1)])])},d=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"topfix"},[n("h3",[t._v("网酷音乐")])])}],h={data:function(){return{isFixed:!1}},mounted:function(){var t=this,e=this.$refs.topNav.offsetTop;window.addEventListener("scroll",(function(){var n=window.pageYOffset;t.isFixed=n>=e}))}},f=h,m=(n("bc0a"),n("2877")),p=Object(m["a"])(f,l,d,!1,null,"31d8f17a",null),v=p.exports,y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{"enter-active-class":"animate__animated animate__backInLeft"}},[t.$root.musicStore.musicId?n("div",{staticClass:"player"},[n("audio",{ref:"audio",attrs:{src:"https://music.163.com/song/media/outer/url?id="+t.$root.musicStore.musicId+".mp3",autoplay:""},on:{timeupdate:t.timeUpdate,ended:t.endPlay}}),n("transition",{attrs:{"enter-active-class":"animate__animated animate__fadeInUp","leave-active-class":"animate__animated animate__fadeOutDown"}},[t.isShow?n("List",{on:{changeIcon:t.changeIcon}}):t._e()],1),n("div",{staticClass:"playBar"},[n("i",{ref:"randImg",on:{click:function(e){t.isFullPage=!0}}},[n("img",{attrs:{src:t.$root.musicStore.currentMusic.picUrl||t.$root.musicStore.currentMusic.al.picUrl}})]),n("i",{on:{click:function(e){t.isFullPage=!0}}},[t._v(t._s(t.$root.musicStore.currentMusic.name))]),n("i",[n("ProgressCircle",{attrs:{radius:"35px",percent:t.percent}},[n("span",{staticClass:"iconfont icon-mini",on:{click:function(e){return t.changePlay()}}},[t._v(t._s(t.isPlay?"":""))])])],1),n("i",[n("span",{staticClass:"iconfont",on:{click:function(e){t.isShow=!t.isShow}}},[t._v("")])])]),n("transition",{attrs:{"enter-active-class":"animate__animated animate__fadeInUp","leave-active-class":"animate__animated animate__fadeOutDown"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.isFullPage,expression:"isFullPage"}],staticClass:"fullPage"},[n("div",{staticClass:"head"},[n("div",{staticClass:"back",on:{click:function(e){t.isFullPage=!1}}},[t._v("<")]),n("div",{staticClass:"name"},[n("p",[t._v(t._s(t.$root.musicStore.currentMusic.name))]),n("p",[t._v(t._s(t.$root.musicStore.currentMusic.song.artists[0].name||t.$root.musicStore.currentMusic.ar[0].name))])])]),n("div",{staticClass:"lyric",style:{height:t.lyricHeight}},[n("ul",{style:"transform:translateY(-"+t.moveLength+"px)"},t._l(t.lyric,(function(e,i){return n("li",{key:i,ref:"lis",refInFor:!0,style:{color:i==t.lyricIndex?"red":""}},[t._v(t._s(e.lyric))])})),0)]),n("div",{staticClass:"progress"},[n("input",{attrs:{type:"range",min:"0",max:t.duration},domProps:{value:t.currentTime},on:{change:t.changeTime}}),n("i",{style:"width:"+t.currentTime/t.duration*80+"vw"})]),n("div",{staticClass:"controls"},[n("div",{staticClass:"play"},[n("span",{staticClass:"iconfont prev",on:{click:t.prev}},[t._v("")]),n("span",{staticClass:"iconfont start",on:{click:function(e){return t.changePlay()}}},[t._v(t._s(t.isPlay?"":""))]),n("span",{staticClass:"iconfont next",on:{click:t.next}},[t._v("")])]),n("div",{staticClass:"musicList"},[n("span",{staticClass:"iconfont",on:{click:function(e){t.is=!t.is}}},[t._v("")])]),n("transition",{attrs:{"enter-active-class":"animate__animated animate__fadeInUp","leave-active-class":"animate__animated animate__fadeOutDown"}},[t.is?n("List",{on:{changeIcon:t.changeIcon}}):t._e()],1)],1)])])],1):t._e()])},g=[],_=(n("4de4"),n("4160"),n("d81d"),n("4d63"),n("ac1f"),n("25f0"),n("1276"),n("159b"),n("2909")),b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"list"},[n("div",{staticClass:"playStyle",domProps:{innerHTML:t._s(t.list1[t.clickCount])},on:{click:t.playStyle}}),n("ul",t._l(t.$root.musicStore.musicList,(function(e){return n("li",{key:e.id,style:{color:e.id==t.$root.musicStore.musicId?"red":null},on:{click:function(n){return t.changeMusic(e)}}},[t._v(t._s(e.name)+" - "+t._s(e.song.artists[0].name))])})),0)])},k=[],x={data:function(){return{clickCount:0,list1:['<span class="iconfont">&#xe690;</span> 顺序播放','<span class="iconfont">&#xe609;</span> 随机播放','<span class="iconfont">&#xe603;</span> 单曲循环']}},created:function(){this.clickCount=this.$root.musicStore.playStyle},methods:{changeMusic:function(t){this.$root.musicStore.musicId=t.id,this.$root.musicStore.currentMusic=t,this.$emit("changeIcon",!0)},playStyle:function(){this.clickCount++,this.clickCount>2?this.clickCount=0:this.clickCount,this.$root.musicStore.playStyle=this.clickCount}}},S=x,w=(n("689c"),Object(m["a"])(S,b,k,!1,null,"30bda068",null)),I=w.exports,P=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"progress-circle"},[n("svg",{attrs:{width:t.radius,height:t.radius,viewBox:"0 0 100 100",version:"1.1",xmlns:"http://www.w3.org/2000/svg"}},[n("circle",{staticClass:"progress-background",attrs:{r:"50",cx:"50",cy:"50",fill:"transparent"}}),n("circle",{staticClass:"progress-bar",attrs:{r:"50",cx:"50",cy:"50",fill:"transparent","stroke-dasharray":t.dashArray,"stroke-dashoffset":t.dashOffset}})]),t._t("default")],2)},$=[],C=(n("a9e3"),{data:function(){return{dashArray:100*Math.PI}},props:{radius:{type:String,default:"0.32rem"},percent:{type:Number,default:0}},computed:{dashOffset:function(){return(1-this.percent)*this.dashArray}}}),O=C,L=(n("81fd"),Object(m["a"])(O,P,$,!1,null,"240e4d44",null)),M=L.exports,T={name:"Play",data:function(){return{isPlay:!0,isFullPage:!1,duration:0,currentTime:0,isShow:!1,is:!1,currentIndex:0,lyric:null,lyricIndex:0,moveLength:0,mode:"",lyricHeight:80}},components:{List:I,ProgressCircle:M},mounted:function(){var t=this;window.onresize=function(){t.lyricHeight=window.innerHeight-160+"px"}},methods:{getIndex:function(){var t=this,e=this.$root.musicStore.musicList;Object(_["a"])(e).forEach((function(e,n){e.id==t.$root.musicStore.musicId&&(t.currentIndex=n)}))},endPlay:function(){this.next()},prev:function(){this.getIndex();var t=Object(_["a"])(this.$root.musicStore.musicList),e=this.$root.musicStore.playStyle;0!=e&&2!=e||(this.currentIndex--,this.currentIndex<0?this.currentIndex=t.length-1:this.currentIndex),1==e&&(this.currentIndex=Math.min(Math.random()*t.length)),this.$root.musicStore.musicId=t[this.currentIndex].id,this.$root.musicStore.currentMusic=t[this.currentIndex]},next:function(){this.getIndex();var t=Object(_["a"])(this.$root.musicStore.musicList),e=this.$root.musicStore.playStyle;0!=e&&2!=e||(this.currentIndex++,this.currentIndex>=t.length?this.currentIndex=0:this.currentIndex),1==e&&(this.currentIndex=Math.floor(Math.random()*t.length)),this.$root.musicStore.musicId=t[this.currentIndex].id,this.$root.musicStore.currentMusic=t[this.currentIndex]},changeTime:function(t){var e=t.target.value;this.currentTime=e,this.$refs.audio.currentTime=e},changePlay:function(){var t=this.$refs.audio,e=this.$refs.randImg;this.isPlay?(t.pause(),this.isPlay=!1,e.style.animationPlayState="paused"):(t.play(),this.isPlay=!0,e.style.animationPlayState="running")},timeUpdate:function(t){var e=t.target,n=e.currentTime,i=e.duration;this.duration=i,this.currentTime=n;for(var r=0;r<this.lyric.length;r++){if(r>=this.lyric.length-1){this.lyricIndex=r;break}if(n>this.lyric[r].time&&n<this.lyric[r+1].time){r>0&&(this.moveLength=this.$refs.lis[r-1].offsetTop),this.lyricIndex=r;break}}},changeIcon:function(t){this.isPlay=t}},computed:{musicIds:function(){var t=this.$root.musicStore.musicId;return t},percent:function(){return Math.min(1,this.currentTime/this.duration)}},watch:{musicIds:function(t){var e=this;this.$axios.get("/lyric?id="+t).then((function(t){var n=t.data.lrc.lyric.split("\n"),i=/\[(\d+):(\d+\.\d+)\](.+)/,r=n.filter((function(t){return i.test(t)}));e.lyric=r.map((function(t){if(i.test(t))return{time:parseInt(60*RegExp.$1)+parseFloat(RegExp.$2),lyric:RegExp.$3}}))}))}}},j=T,E=(n("0173"),Object(m["a"])(j,y,g,!1,null,"6beddc86",null)),F=E.exports,N={components:{TopNav:v,Play:F}},A=N,U=Object(m["a"])(A,o,u,!1,null,null,null),D=U.exports,H=n("8c4f");i["a"].use(H["a"]);var q=[{path:"/",redirect:"/recommend"},{path:"/recommend",component:function(){return n.e("chunk-a4518ab6").then(n.bind(null,"4802"))}},{path:"/boutique",component:function(){return n.e("chunk-0c8c79ab").then(n.bind(null,"14e9"))}},{path:"/rankList",component:function(){return n.e("chunk-a05c2b8c").then(n.bind(null,"232e"))}},{path:"/musicDetail/:id",component:function(){return n.e("chunk-390e9ea0").then(n.bind(null,"7533"))}},{path:"/search",component:function(){return n.e("chunk-6a488af2").then(n.bind(null,"2d3b"))}},{path:"/playlist/:id",component:function(){return n.e("chunk-eb0f6c96").then(n.bind(null,"cdcd"))}}],B=new H["a"]({mode:"hash",base:"",routes:q}),R=B,z=n("2f62");i["a"].use(z["a"]);var J=new z["a"].Store({state:{},mutations:{},actions:{},modules:{}});n("df4e"),n("1c3c");i["a"].config.productionTip=!1;var Y=new Set,K={musicId:null,musicList:Y,currentMusic:null,playStyle:0};new i["a"]({data:function(){return{musicStore:K}},watch:{},router:R,store:J,render:function(t){return t(D)}}).$mount("#app")},"689c":function(t,e,n){"use strict";n("df79")},"70b1":function(t,e,n){},"81fd":function(t,e,n){"use strict";n("0514")},"9a90":function(t,e,n){},bc0a:function(t,e,n){"use strict";n("70b1")},df4e:function(t,e,n){},df79:function(t,e,n){}});
//# sourceMappingURL=app.2816fb67.js.map