(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,function(e){e.exports=[{id:1,image:"http://content.sportslogos.net/logos/1/8/full/66.png",clicked:!1},{id:2,image:"http://content.sportslogos.net/logos/1/8/full/64.png",clicked:!1},{id:3,image:"http://content.sportslogos.net/logos/54/58/full/ej4v6a8q5w5gegtf7ilqbhoz7.png",clicked:!1},{id:4,image:"http://content.sportslogos.net/logos/54/58/full/6871_colorado_rockies-primary-2017.png",clicked:!1},{id:5,image:"http://content.sportslogos.net/logos/9/328/full/exwxk96s5gfeu1iki34blm6ga.gif",clicked:!1},{id:6,image:"http://content.sportslogos.net/logos/9/328/full/rkjf0o1eifa47lh6uhy4oj5qy.gif",clicked:!1},{id:7,image:"http://content.sportslogos.net/logos/7/161/full/5y0vjvdu1bxh0dh52nr1tefrq.gif",clicked:!1},{id:8,image:"http://content.sportslogos.net/logos/7/161/full/9ebzja2zfeigaziee8y605aqp.png",clicked:!1},{id:9,image:"http://content.sportslogos.net/logos/6/229/full/8926_denver_nuggets-primary-2019.png",clicked:!1},{id:10,image:"http://content.sportslogos.net/logos/18/275/full/5990.gif",clicked:!1},{id:11,image:"http://content.sportslogos.net/logos/25/1704/full/6721.gif",clicked:!1},{id:12,image:"http://content.sportslogos.net/logos/26/2520/full/09j2cmxer81n043zxyfa.png",clicked:!1}]},,,,,,,,function(e,t,n){e.exports=n(21)},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),c=n(3),l=n.n(c),r=n(4),i=n(5),s=n(7),d=n(6),u=n(8),g=(n(15),function(e){return a.a.createElement("div",{className:"card",value:e.id,onClick:function(){return e.handleClick(e.id)}},a.a.createElement("div",{className:"img-container"},a.a.createElement("img",{alt:e.name,src:e.image})))}),m=(n(16),function(e){return a.a.createElement("nav",null,a.a.createElement("ul",null,a.a.createElement("li",{className:"brand animated lightSpeedIn"},a.a.createElement("a",{href:"/clicky-game/"},e.title)),a.a.createElement("li",{id:"rw"},e.rightWrong),a.a.createElement("li",{id:"cur-sco"},"Current Score: ",e.score),a.a.createElement("li",{id:"top-sco"},"Top Score: ",e.topScore)))}),h=(n(17),function(e){return a.a.createElement("div",{className:"wrapper"},e.children)}),f=(n(18),function(e){return a.a.createElement("h1",{className:"title"},e.children)}),p=function(e){return a.a.createElement("div",{className:"container".concat(e.fluid?"-fluid":"")},e.children)},k=function(e){return a.a.createElement("div",{className:"row".concat(e.fluid?"-fluid":"")},e.children)},S=function(e){var t=e.size.split(" ").map(function(e){return"col-"+e}).join(" ");return a.a.createElement("div",{className:t},e.children)},E=n(1);n(19);var v=function(e){function t(){var e,n;Object(r.a)(this,t);for(var o=arguments.length,a=new Array(o),c=0;c<o;c++)a[c]=arguments[c];return(n=Object(s.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(a)))).state={teams:E,currentScore:0,topScore:0,rightWrong:"",clicked:[]},n.handleClick=function(e){-1===n.state.clicked.indexOf(e)?(n.handleIncrement(),n.setState({clicked:n.state.clicked.concat(e)})):n.handleReset()},n.handleIncrement=function(){var e=n.state.currentScore+1;n.setState({currentScore:e,rightWrong:""}),e>=n.state.topScore?n.setState({topScore:e}):12===e&&n.setState({rightWrong:"You win!"}),n.handleShuffle()},n.handleReset=function(){n.setState({currentScore:0,topScore:n.state.topScore,rightWrong:"BALLS!",clicked:[]}),n.handleShuffle()},n.handleShuffle=function(){var e=function(e){for(var t=e.length-1;t>0;t--){var n=Math.floor(Math.random()*(t+1)),o=[e[n],e[t]];e[t]=o[0],e[n]=o[1]}return e}(E);n.setState({teams:e})},n}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return a.a.createElement(h,null,a.a.createElement(m,{title:"CO Team Clicky Game",score:this.state.currentScore,topScore:this.state.topScore,rightWrong:this.state.rightWrong}),a.a.createElement(f,null,"Click on each Colorado team logo, but don't hit the same team twice otherwise, it's back to the drawing board."),a.a.createElement(p,null,a.a.createElement(k,null,this.state.teams.map(function(t){return a.a.createElement(S,{size:"md-3 sm-6"},a.a.createElement(g,{key:t.id,handleClick:e.handleClick,handleIncrement:e.handleIncrement,handleReset:e.handleReset,handleShuffle:e.handleShuffle,id:t.id,image:t.image}))}))))}}]),t}(o.Component);n(20);l.a.render(a.a.createElement(v,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.eee0397b.chunk.js.map