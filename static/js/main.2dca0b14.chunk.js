(window.webpackJsonppalindrome=window.webpackJsonppalindrome||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(2),i=n.n(r),c=(n(13),n(3)),l=n(4),s=n(6),u=n(5),h=n(7),m=(n(14),function(e){var t=e.textInputChange,n=e.border,a=e.greeting;return o.a.createElement("div",{className:"f2"},o.a.createElement("div",{className:"ma4 white"},o.a.createElement("h2",null,"Do you think it's "),o.a.createElement("h1",{className:"grow"},"palindrome?")),o.a.createElement("input",{className:"br4 bw3 ".concat(n," pa3"),type:"text",placeholder:"Type a word",onChange:t}),o.a.createElement("h2",{className:"white grow"},a))}),d=(n(15),["What a man!","You're sooo good","!!Unbelievable!!","I wasn't expecting that","That's unusual","TERRRRIFIC","**omg**","Awesome!","Did you invented that??"]),g=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).isPalindrome=function(e){if(e.length<1)return!1;for(var t=0,n=(e=e.replace(/ /g,"")).length-1;t<e.length;t++,n--)if(e[t]!==e[n])return!1;return!0},e.onInputChange=function(t){e.setState({textInput:t.target.value})},e.state={textInput:""},e}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e,t;return this.isPalindrome(this.state.textInput.toLowerCase())?(e="b--green",t=d[Math.floor(100*Math.random())%d.length],console.log(t)):e="b--red",o.a.createElement("div",{className:"tc ma4 pa3"},o.a.createElement(m,{textInputChange:this.onInputChange,border:e,greeting:t}))}}]),t}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},8:function(e,t,n){e.exports=n(16)}},[[8,1,2]]]);
//# sourceMappingURL=main.2dca0b14.chunk.js.map