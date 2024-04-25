(function(e){function t(t){for(var r,o,i=t[0],u=t[1],l=t[2],d=0,f=[];d<i.length;d++)o=i[d],Object.prototype.hasOwnProperty.call(c,o)&&c[o]&&f.push(c[o][0]),c[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);a&&a(t);while(f.length)f.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],r=!0,i=1;i<n.length;i++){var u=n[i];0!==c[u]&&(r=!1)}r&&(s.splice(t--,1),e=o(o.s=n[0]))}return e}var r={},c={app:0},s=[];function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var a=u;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},2163:function(e,t,n){"use strict";n("5222")},"4f5f":function(e,t,n){"use strict";n("dfd8")},5222:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),c={key:2,class:"grid grid-cols-1 gap-4 p-4 bg-gray-200"};function s(e,t,n,s,o,i){var u,l=Object(r["j"])("Error"),a=Object(r["j"])("Loading"),d=Object(r["j"])("Header"),f=Object(r["j"])("QuestionBox");return Object(r["f"])(),Object(r["c"])(r["a"],null,[i.errorBoundary?Object(r["e"])(l,{key:0,callback:i.restart},null,8,["callback"]):Object(r["d"])("",!0),o.loading?Object(r["e"])(a,{key:1}):Object(r["d"])("",!0),Object(r["e"])(d,{counter:o.index+1,totalQuestions:i.numberOfQuestions,incorrectAnswers:o.numTotal,correctAnswersTotal:o.numCorrect},null,8,["counter","totalQuestions","incorrectAnswers","correctAnswersTotal"]),(null===(u=o.questions)||void 0===u?void 0:u.length)?(Object(r["f"])(),Object(r["c"])("div",c,[Object(r["e"])(f,{question:o.questions[o.index],next:i.next,lastQuestion:i.lastQuestion,increment:i.increment,restartFn:i.restart},null,8,["question","next","lastQuestion","increment","restartFn"])])):Object(r["d"])("",!0)],64)}n("96cf");var o=n("1da1"),i={class:"topnav flex items-center justify-center flex-wrap bg-blue-500 p-6"},u=Object(r["e"])("div",{class:"flex items-center flex-grow text-white mr-6"},[Object(r["e"])("span",{class:"font-semibold text-xl tracking-tight"},"TriviApp")],-1),l={class:"w-1/2 flex justify-center items-center lg:w-auto"},a={class:"text-sm lg:flex-grow"},d={class:"inline-block lg:mt-0 text-blue-200 hover:text-white mr-4"};function f(e,t,n,c,s,o){return Object(r["f"])(),Object(r["c"])("nav",i,[u,Object(r["e"])("div",l,[Object(r["e"])("div",a,[Object(r["e"])("div",d,"Counter: "+Object(r["k"])(n.counter)+"/"+Object(r["k"])(n.totalQuestions),1),Object(r["m"])(Object(r["e"])("div",{class:"inline-block lg:mt-0 text-green-300 hover:text-white mr-4"},"Correct Answers "+Object(r["k"])(n.correctAnswersTotal),513),[[r["l"],n.correctAnswersTotal]]),Object(r["m"])(Object(r["e"])("div",{class:"inline-block lg:mt-0 text-red-600 hover:text-white mr-4"},"Incorrect Answers "+Object(r["k"])(n.incorrectAnswers),513),[[r["l"],n.incorrectAnswers>0]])])])])}n("a9e3");var b={props:{counter:Number,totalQuestions:Number,correctAnswersTotal:Number,incorrectAnswers:Number}};b.render=f;var p=b,w={class:"questions flex flex-wrap flex-column"},h={class:"w-full bg-gray-500"},j={class:"flex flex-wrap flex-column justify-center p-2"},O={class:"w-full text-lg"},v=Object(r["e"])("b",null,"Difficulty",-1),m={class:"ml-1"},x={class:"w-full mt-3"},g={class:"w-full m-3"},y={class:"list-none"},A={class:"w-full mb-4 bg-gray-400"};function k(e,t,n,c,s,o){return Object(r["f"])(),Object(r["c"])("div",w,[Object(r["e"])("div",h,[Object(r["e"])("div",j,[Object(r["e"])("div",O,[Object(r["e"])("span",null,"Topic: "+Object(r["k"])(n.question.category),1)]),Object(r["e"])("div",{class:o.difficultyClass(n.question.difficulty)},[v,Object(r["e"])("span",m,Object(r["k"])(n.question.difficulty),1)],2),Object(r["e"])("div",x,[Object(r["e"])("b",null,"Question: "+Object(r["k"])(n.question.question),1)]),Object(r["e"])("div",g,[Object(r["e"])("ul",y,[(Object(r["f"])(!0),Object(r["c"])(r["a"],null,Object(r["i"])(s.shuffledAnswers,(function(e,t){return Object(r["f"])(),Object(r["c"])("li",{class:o.answerClass(t),key:t,onClick:Object(r["n"])((function(e){return o.selectAnswer(t)}),["prevent"])},Object(r["k"])(e),11,["onClick"])})),128))])])])]),Object(r["e"])("div",A,[n.lastQuestion?(Object(r["f"])(),Object(r["c"])("button",{key:0,onClick:t[1]||(t[1]=function(){return n.restartFn.apply(n,arguments)}),class:"bg-yellow-500 hover:bg-yellow-700 text-white font-bold my-2 py-2 px-4 rounded"},"Restart")):Object(r["d"])("",!0),Object(r["m"])(Object(r["e"])("button",{onClick:t[2]||(t[2]=function(){return o.submitAnswer.apply(o,arguments)}),class:"bg-green-500 hover:bg-green-700 text-white font-bold m-2 py-2 px-4 rounded",disabled:s.answered},"Submit",8,["disabled"]),[[r["l"],null!==s.selectedAnswerIndex&&!s.answered]]),Object(r["m"])(Object(r["e"])("button",{onClick:t[3]||(t[3]=function(){return o.nextQuestion.apply(o,arguments)}),class:"bg-blue-500 hover:bg-blue-700 text-white font-bold my-2 py-2 px-4 rounded"},"Next",512),[[r["l"],!n.lastQuestion]])])])}n("99af"),n("c975");var q=n("2909"),C=n("2ef0"),Q=n.n(C),_={props:{question:Object,next:Function,increment:Function,lastQuestion:Boolean,restartFn:Function},data:function(){return{shuffledAnswers:[],selectedAnswerIndex:null,correctIndexAnswer:null,answered:!1}},mounted:function(){this.shuffleAnswers([].concat(Object(q["a"])(this.question.incorrect_answers),[this.question.correct_answer]))},watch:{question:{immediate:!0,handler:function(){this.selectedAnswerIndex=null,this.answered=!1,this.shuffleAnswers()}}},methods:{difficultyClass:function(e){var t=e.toLowerCase()[0],n="p-2 my-2 text-white ";switch(t){case"e":n+="bg-green-500";break;case"m":n+="bg-yellow-500";break;default:n+="bg-red-500"}return n},answerClass:function(e){var t="";return this.answered||e!==this.selectedAnswerIndex?this.answered&&e===this.correctIndexAnswer?t="correct":this.answered&&e===this.selectedAnswerIndex&&e!==this.correctIndexAnswer&&(t="incorrect"):t="selected",t+=" w-full mt-1 py-2 bg-gray-200 hover:bg-blue-300 cursor-pointer",t},selectAnswer:function(e){this.selectedAnswerIndex=e},nextQuestion:function(){this.answered||this.submitAnswer(),this.next()},submitAnswer:function(){var e=!1;this.selectedAnswerIndex===this.correctIndexAnswer&&(e=!0),this.answered=!0,this.increment(e)},shuffleAnswers:function(){var e=[].concat(Object(q["a"])(this.question.incorrect_answers),[this.question.correct_answer]);this.shuffledAnswers=Q.a.shuffle(e),this.correctIndexAnswer=this.shuffledAnswers.indexOf(this.question.correct_answer)}}};n("2163");_.render=k;var I=_,T=Object(r["o"])("data-v-4dab674d");Object(r["h"])("data-v-4dab674d");var F={class:"loading-container w-screen h-screen fixed top-0 left-0 z-10 flex justify-center items-center"},P=Object(r["e"])("span",{class:"text-lg font-bold text-blue-700"},"Loading",-1);Object(r["g"])();var S=T((function(e,t,n,c,s,o){return Object(r["f"])(),Object(r["c"])("div",F,[P])}));n("4f5f");const B={};B.render=S,B.__scopeId="data-v-4dab674d";var M=B,N={class:"error-boundary-container w-screen h-screen fixed top-0 left-0 z-10 flex flex-col justify-center items-center"},R=Object(r["e"])("h2",{class:"font-bold mb-2"},"Error occurred",-1);function L(e,t,n,c,s,o){return Object(r["f"])(),Object(r["c"])("div",N,[R,Object(r["e"])("button",{onClick:t[1]||(t[1]=function(){return n.callback.apply(n,arguments)}),class:"bg-yellow-500 hover:bg-yellow-700 text-white font-bold my-2 py-2 px-4 rounded"}," Try Again! ")])}var E={props:{callback:Function}};E.render=L;var z=E,D=(n("927c"),10),H=(n("d81d"),n("d3b7"),function(e){var t=new DOMParser;return t.parseFromString(e,"text/html").body.textContent}),J=function(e){return e.results.map((function(e){var t=e.category,n=e.difficulty,r=e.correct_answer,c=e.incorrect_answers,s=e.question;return{category:H(t),difficulty:H(n),correct_answer:H(r),incorrect_answers:c.map((function(e){return H(e)})),question:H(s)}}))},G=function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(){var t,n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://opentdb.com/api.php?amount=".concat(D,"&category=17&type=multiple"));case 3:return t=e.sent,e.next=6,t.json();case 6:return n=e.sent,r=J(n),e.abrupt("return",r);case 11:e.prev=11,e.t0=e["catch"](0),console.error(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}(),K={name:"App",components:{Header:p,QuestionBox:I,Loading:M,Error:z},data:function(){return{questions:[],index:0,numCorrect:0,numTotal:0,loading:!1}},computed:{numberOfQuestions:function(){var e;return null===(e=this.questions)||void 0===e?void 0:e.length},lastQuestion:function(){var e;return(null===(e=this.questions)||void 0===e?void 0:e.length)<=this.index+1},errorBoundary:function(){var e=void 0===this.questions;return e}},methods:{next:function(){D>this.index+1&&this.index++},increment:function(e){e?this.numCorrect++:this.numTotal++},restart:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.questions=[],e.loading=!0,t.prev=2,t.next=5,G();case 5:e.questions=t.sent,e.index=0,e.numCorrect=0,e.numTotal=0,t.next=14;break;case 11:t.prev=11,t.t0=t["catch"](2),e.questions=void 0;case 14:return t.prev=14,e.loading=!1,t.finish(14);case 17:case"end":return t.stop()}}),t,null,[[2,11,14,17]])})))()}},mounted:function(){this.restart()}};n("64be");K.render=s;var U=K;Object(r["b"])(U).mount("#app")},"64be":function(e,t,n){"use strict";n("c894")},"927c":function(e,t,n){},c894:function(e,t,n){},dfd8:function(e,t,n){}});
//# sourceMappingURL=app.2102d9e3.js.map