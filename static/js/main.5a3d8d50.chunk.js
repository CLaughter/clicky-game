(this["webpackJsonpclicky-game"]=this["webpackJsonpclicky-game"]||[]).push([[0],[,,,,,,function(e){e.exports=JSON.parse('[{"id":1,"imgURL":"./hd1.png","isClicked":false},{"id":2,"imgURL":"./hd2.png","isClicked":false},{"id":3,"imgURL":"./hd3.png","isClicked":false},{"id":4,"imgURL":"./hd4.png","isClicked":false},{"id":5,"imgURL":"./hd5.png","isClicked":false},{"id":6,"imgURL":"./hd6.png","isClicked":false},{"id":7,"imgURL":"./hd7.png","isClicked":false},{"id":8,"imgURL":"./hd8.png","isClicked":false},{"id":9,"imgURL":"./hd9.png","isClicked":false}]')},,,function(e,t,a){e.exports=a(18)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),s=a(2),i=a.n(s),r=(a(14),a(3)),l=a(4),o=a(7),m=a(5),d=a(8);a(15);var u=function(e){return n.a.createElement("header",null,n.a.createElement("div",{className:"title"},"Hog Memory Game"),n.a.createElement("div",{className:"scoreboard"},"Hog Score: ",e.score," | Total Score: ",e.totalScore))};a(16);var g=function(e){return null===e.correct?n.a.createElement("div",{className:"result"},n.a.createElement("div",{className:"spans"},n.a.createElement("span",{className:"guessGame"},"Try not to select the same image twice."))):"win"===e.correct?n.a.createElement("div",{className:"result"},n.a.createElement("div",{className:"spans"},n.a.createElement("span",{className:"win"},"YWinner!"),n.a.createElement("span",null,"Click an image to play again!"))):n.a.createElement("div",{className:"result"},e.correct?n.a.createElement("div",{className:"spans"},n.a.createElement("span",{className:"correct"},"Awesome!")):n.a.createElement("div",{className:"spans"},n.a.createElement("span",{className:"wrong"},"Play again")))};a(17);var f=function(e){return n.a.createElement("div",{className:"img-container"},n.a.createElement("img",{src:"img/".concat(e.image.imgURL),alt:"HDMotorcycles",onClick:function(){return e.clicked(e.image.id)}}))},p=a(6),h=function(e){function t(){var e,a;Object(r.a)(this,t);for(var c=arguments.length,n=new Array(c),s=0;s<c;s++)n[s]=arguments[s];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(n)))).state={images:p,score:0,totalScore:0,correct:null},a.clicked=function(e){if(a.shuffleImages(a.state.images),a.state.images.find((function(t){return t.id===e})).isClicked)return a.setState({correct:!1}),a.resetGame(!1);a.state.score>10?(a.setState({totalScore:a.state.score+1}),a.resetGame(!0)):a.setState((function(t){var a=t.images.map((function(t){return t.id===e&&(t.isClicked=!0),t})),c=t.score+1,n=t.totalScore;return c>t.totalScore&&(n=c),{images:a,score:c,totalScore:n,correct:"true"}}))},a.shuffleImages=function(e){for(var t,c,n=e.length;0!==n;)c=Math.floor(Math.random()*n),t=e[n-=1],e[n]=e[c],e[c]=t;a.setState({images:e})},a.resetGame=function(e){a.setState((function(t){return{images:t.images.map((function(e){return e.isClicked&&(e.isClicked=!1),e})),score:0,correct:!!e&&"win"}}))},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement("div",null,n.a.createElement(u,{score:this.state.score,totalScore:this.state.totalScore}),n.a.createElement(g,{key:this.state.score,correct:this.state.correct}),n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"images"},this.state.images.map((function(t){return n.a.createElement(f,{key:t.id,clicked:e.clicked,image:t})})))))}}]),t}(c.Component);i.a.render(n.a.createElement(h,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.5a3d8d50.chunk.js.map