(this.webpackJsonptombola=this.webpackJsonptombola||[]).push([[0],[,,,,,,function(e,t,n){e.exports=n.p+"static/media/GxP.f404f204.png"},,,function(e,t,n){e.exports=n(16)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(0),l=n.n(r),a=n(2),c=n.n(a),o=n(3),i=n(4),u=n(7),s=n(5),m=n(8);n(14),n(15);var d=function(e){var t=e.numbers,n=e.selectedCell,r={backgroundColor:e.color,color:"white",padding:"10px"},a={backgroundColor:"white",color:"black",padding:"10px"};return l.a.createElement("table",null,l.a.createElement("tbody",null,t.map((function(e,t){return l.a.createElement("tr",{key:t},e.map((function(e){return l.a.createElement("td",{key:e.val,style:e.isSelected?r:a,className:"cell",onClick:function(){return n(e)}},e.val)})))}))))},f=n(6),h=n.n(f),b=[Array.from({length:10},(function(e,t){return{val:t+1,isSelected:!1}})),Array.from({length:10},(function(e,t){return{val:t+10+1,isSelected:!1}})),Array.from({length:10},(function(e,t){return{val:t+20+1,isSelected:!1}})),Array.from({length:10},(function(e,t){return{val:t+30+1,isSelected:!1}})),Array.from({length:10},(function(e,t){return{val:t+40+1,isSelected:!1}})),Array.from({length:10},(function(e,t){return{val:t+50+1,isSelected:!1}})),Array.from({length:10},(function(e,t){return{val:t+60+1,isSelected:!1}})),Array.from({length:10},(function(e,t){return{val:t+70+1,isSelected:!1}})),Array.from({length:10},(function(e,t){return{val:t+80+1,isSelected:!1}}))],v=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(u.a)(this,Object(s.a)(t).call(this))).selectedCell=function(t){t.isSelected=!t.isSelected,e.setState({numbers:b})},e.extractNumber=function(){var t=b.flat().filter((function(e){return!e.isSelected}));if(0!==t.length){var n=t[Math.floor(Math.random()*t.length)];e.selectedCell(n),e.setState({extracted:n.val})}},e.colorChanged=function(t){e.setState({color:t.target.value})},e.state={numbers:b,extracted:"00",color:"#FF0000"},e}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement("div",{className:"content-center"},l.a.createElement("h1",null,"Tombola GxP"),l.a.createElement(d,{numbers:this.state.numbers,selectedCell:this.selectedCell,color:this.state.color}),l.a.createElement("div",null,l.a.createElement("button",{onClick:this.extractNumber},"Estrai"),l.a.createElement("input",{type:"color",onChange:this.colorChanged}))),l.a.createElement("div",null,l.a.createElement("h2",null,"Numero estratto:"),l.a.createElement("br",null),l.a.createElement("h1",{className:"extracted"},this.state.extracted),l.a.createElement("img",{alt:"logo",src:h.a})))}}]),t}(l.a.Component);c.a.render(l.a.createElement(v,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.35111814.chunk.js.map