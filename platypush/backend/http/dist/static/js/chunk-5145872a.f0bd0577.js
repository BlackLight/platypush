(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5145872a"],{"0b91":function(e,t,s){},4369:function(e,t,s){"use strict";s("5f7c")},"5f7c":function(e,t,s){},b9a8:function(e,t,s){"use strict";s("0b91")},c845:function(e,t,s){"use strict";s.r(t);var a=s("7a23"),r=Object(a["K"])("data-v-7358a82d");Object(a["u"])("data-v-7358a82d");var o={class:"image-carousel"},i={ref:"background",class:"background"},n={key:1,class:"row info-container"},h={class:"col-6 weather-container"},c={key:0},u={class:"col-6 date-time-container"};Object(a["s"])();var m=r((function(e,t,s,r,m,d){var f=Object(a["z"])("Loading"),l=Object(a["z"])("Weather"),w=Object(a["z"])("DateTime");return Object(a["r"])(),Object(a["e"])("div",o,[m.images.length?Object(a["f"])("",!0):(Object(a["r"])(),Object(a["e"])(f,{key:0})),Object(a["h"])("div",i,null,512),Object(a["h"])("img",{ref:"img",src:d.imgURL,alt:"Your carousel images",style:{display:m.images.length?"block":"none"}},null,12,["src"]),d._showDate||d._showTime?(Object(a["r"])(),Object(a["e"])("div",n,[Object(a["h"])("div",h,[d._showWeather?(Object(a["r"])(),Object(a["e"])(l,{key:1,"show-icon":d._showWeatherIcon,"show-summary":d._showWeatherSummary,"show-temperature":d._showTemperature,"icon-color":s.weatherIconColor,"icon-size":s.weatherIconSize,animate:d._animateWeatherIcon},null,8,["show-icon","show-summary","show-temperature","icon-color","icon-size","animate"])):(Object(a["r"])(),Object(a["e"])("span",c," "))]),Object(a["h"])("div",u,[d._showTime||d._showDate?(Object(a["r"])(),Object(a["e"])(w,{key:0,"show-date":d._showDate,"show-time":d._showTime,"show-seconds":d._showSeconds},null,8,["show-date","show-time","show-seconds"])):Object(a["f"])("",!0)])])):Object(a["f"])("",!0)])})),d=(s("a9e3"),s("96cf"),s("1da1")),f=s("3e54"),l=s("3a5e"),w=s("365a"),g=s("5b43"),b={name:"ImageCarousel",components:{Weather:g["default"],DateTime:w["default"],Loading:l["a"]},mixins:[f["a"]],props:{imgDir:{type:String,required:!0},refreshSeconds:{type:Number,default:15},showDate:{default:!1},showTime:{default:!1},showSeconds:{default:!1},showWeather:{default:!1},showTemperature:{default:!0},showWeatherIcon:{default:!0},showWeatherSummary:{default:!0},weatherIconColor:{type:String,default:"white"},weatherIconSize:{type:Number,default:70},animateWeatherIcon:{default:!0}},data:function(){return{images:[],currentImage:void 0,loading:!1}},computed:{imgURL:function(){var e=8008;return"backend.http"in this.$root.config&&"port"in this.$root.config["backend.http"]&&(e=this.$root.config["backend.http"].port),"//"+window.location.hostname+":"+e+this.currentImage},_showDate:function(){return this.parseBoolean(this.showDate)},_showTime:function(){return this.parseBoolean(this.showTime)},_showSeconds:function(){return this.parseBoolean(this.showSeconds)},_showTemperature:function(){return this.parseBoolean(this.showTemperature)},_showWeather:function(){return this.parseBoolean(this.showWeather)},_showWeatherIcon:function(){return this.parseBoolean(this.showWeatherIcon)},_showWeatherSummary:function(){return this.parseBoolean(this.showWeatherSummary)},_animateWeatherIcon:function(){return this.parseBoolean(this.animateWeatherIcon)}},methods:{refresh:function(){var e=this;return Object(d["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.images.length){t.next=10;break}return e.loading=!0,t.prev=2,t.next=5,e.request("utils.search_web_directory",{directory:e.imgDir,extensions:[".jpg",".jpeg",".png"]});case 5:e.images=t.sent,e.shuffleImages();case 7:return t.prev=7,e.loading=!1,t.finish(7);case 10:e.images.length&&(e.currentImage=e.images.pop());case 11:case"end":return t.stop()}}),t,null,[[2,,7,10]])})))()},onNewImage:function(){if(this.$refs.img&&(this.$refs.background.style["background-image"]="url("+this.imgURL+")",this.$refs.img.style.width="auto",this.$refs.img.width>this.$refs.img.height)){var e=this.$refs.img.width/this.$refs.img.height;4/3<=e<=16/9&&(this.$refs.img.style.width="100%"),e<=4/3&&(this.$refs.img.style.height="100%")}},shuffleImages:function(){for(var e=this.images.length-1;e>0;e--){var t=Math.floor(Math.random()*(e+1)),s=this.images[e];this.images[e]=this.images[t],this.images[t]=s}}},mounted:function(){this.$refs.img.addEventListener("load",this.onNewImage),this.$refs.img.addEventListener("error",this.refresh),this.refresh(),setInterval(this.refresh,Math.round(1e3*this.refreshSeconds))}};s("b9a8"),s("4369");b.render=m,b.__scopeId="data-v-7358a82d";t["default"]=b}}]);
//# sourceMappingURL=chunk-5145872a.f0bd0577.js.map