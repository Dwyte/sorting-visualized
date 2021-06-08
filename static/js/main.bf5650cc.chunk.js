(this["webpackJsonpsorting-visualized"]=this["webpackJsonpsorting-visualized"]||[]).push([[0],{21:function(e,n,r){},28:function(e,n,r){"use strict";r.r(n);var t,a,i,o,c,l,u,s,f,d,b,p,h,v,g,j,m,O,x,S,y,C,z,k=r(1),M=r.n(k),w=r(13),I=r.n(w),A=(r(21),r(6)),N=r(4),D=M.a.createContext(!1),E=r(2),P=r(3),R=P.b.button(t||(t=Object(E.a)(["\n  font-size: 0.8rem;\n  cursor: pointer;\n  margin: 0;\n  border: 0;\n\n  :hover:not(:disabled) {\n    background-color: #333;\n    color: white;\n  }\n\n  :disabled {\n    cursor: initial;\n    color: #777;\n  }\n\n  background-color: ",";\n  color: ",";\n  padding: ",";\n\n  ","\n"])),(function(e){var n=e.isActive;return void 0===n||n?"#222":"#111"}),(function(e){var n=e.isActive;return void 0===n||n?"#fff":"#ccc"}),(function(e){var n=e.padding;return"regular"===(void 0===n?"regular":n)?"0.5rem":"0.75rem"}),(function(e){var n=e.isIconLarge;return void 0!==n&&n&&Object(P.a)(a||(a=Object(E.a)(["\n      i {\n        display: block;\n        font-size: 1.25rem;\n        margin-bottom: 0.25rem;\n      }\n    "])))})),G=P.b.div(i||(i=Object(E.a)(["\n  display: flex;\n  gap: 0.25rem;\n  button {\n    flex: 1;\n  }\n"]))),L=P.b.div(o||(o=Object(E.a)(["\n  display: flex;\n  gap: 0.25rem;\n"]))),V=Object(P.b)(R)(c||(c=Object(E.a)(["\n  padding: 0.5rem 1.5rem;\n"]))),q=P.b.input(l||(l=Object(E.a)(["\n  background-color: #222;\n  appearance: none;\n  cursor: pointer;\n  padding: 0;\n  margin: 0;\n  flex: 1;\n\n  // for firefox\n  ::-moz-range-thumb {\n    -moz-appearance: none;\n    border-radius: 0;\n    border: none;\n    height: 100%;\n    width: 20px;\n\n    :hover {\n      background: orange;\n    }\n  }\n\n  // for chrome and safari\n  ::-webkit-slider-runnable-track {\n    height: 100%;\n  }\n\n  ::-webkit-slider-thumb {\n    -webkit-appearance: none;\n    background: white;\n    height: 100%;\n    width: 20px;\n\n    :hover {\n      background: orange;\n    }\n  }\n"]))),B=r(0),F=function(e){var n=e.currentStep,r=e.totalSteps,t=e.onPrevious,a=e.onPlay,i=e.onPause,o=e.onNext,c=e.onChangeSlider,l=Object(k.useContext)(D);return Object(B.jsxs)(L,{children:[Object(B.jsx)(V,{onClick:t,disabled:l,children:Object(B.jsx)("i",{className:"fas fa-step-backward"})}),l&&Object(B.jsx)(V,{onClick:i,children:Object(B.jsx)("i",{className:"fas fa-pause"})}),!l&&Object(B.jsx)(V,{onClick:a,children:Object(B.jsx)("i",{className:"fas fa-play"})}),Object(B.jsx)(V,{onClick:o,disabled:l,children:Object(B.jsx)("i",{className:"fas fa-step-forward"})}),Object(B.jsx)(q,{type:"range",min:0,max:r-1,value:n,onChange:c})]})},T=["Quick","Merge","Bubble","Insertion","Selection"],Q=[{playSpeed:1,playStepSize:1,playStepIntervalMS:500},{playSpeed:2,playStepSize:1,playStepIntervalMS:200},{playSpeed:3,playStepSize:1,playStepIntervalMS:50},{playSpeed:4,playStepSize:2,playStepIntervalMS:25},{playSpeed:5,playStepSize:3,playStepIntervalMS:10}],U=[{label:"Single",value:1},{label:"Double",value:2},{label:"Quadruple",value:4}],J=[{arraySize:"Small",actualSize:10},{arraySize:"Medium",actualSize:25},{arraySize:"Large",actualSize:50}],H=(T.map((function(e){return{label:e,value:e}})),J.map((function(e){return{label:e.arraySize,value:e.arraySize}}))),W=["Unique","Random","Reversed","Nearly"].map((function(e){return{label:e,value:e}})),Y=Q.map((function(e){return{label:"".concat(e.playSpeed,"x"),value:e.playSpeed}})),_=P.b.div(u||(u=Object(E.a)(["\n  border: 2px solid #222;\n  display: flex;\n  height: 100%;\n  gap: 0.25rem;\n  position: relative;\n  flex-direction: column;\n"]))),K=P.b.div(s||(s=Object(E.a)(["\n  padding: 0.25rem;\n  flex: 1;\n"]))),X=P.b.div(f||(f=Object(E.a)(["\n  padding-bottom: 2rem;\n  padding-right: 2rem;\n  position: absolute;\n  flex-direction: column;\n  display: flex;\n"]))),Z=Object(P.b)(R)(d||(d=Object(E.a)(["\n  width: ",";\n"])),(function(e){return e.isActive?"6.75rem":"initial"})),$=function(e){var n=e.activeAlgorithm,r=e.disabled,t=e.onChange,a=Object(k.useState)(!1),i=Object(N.a)(a,2),o=i[0],c=i[1],l=T.filter((function(e){return e!==n})),u=function(e){t(e.target.value),c(!1)};return Object(B.jsxs)(X,{onMouseLeave:function(){return c(!1)},children:[Object(B.jsxs)(Z,{onClick:r?void 0:function(){return c(!o)},isActive:!0,children:[n," ",!r&&Object(B.jsx)("i",{className:"fas fa-caret-down"})]}),!r&&o&&l.map((function(e){return Object(B.jsx)(Z,{onClick:u,value:e,isActive:!1,children:e},e)}))]})},ee=P.b.div(b||(b=Object(E.a)(["\n  height: 100%;\n  display: flex;\n  align-items: flex-end;\n  gap: 2px;\n"]))),ne=P.b.div(p||(p=Object(E.a)(["\n  background-color: ",";\n  height: ","%;\n  flex: 1;\n\n  cursor: pointer;\n  :hover {\n    background-color: orange;\n  }\n"])),(function(e){return e.color||"white"}),(function(e){return e.value})),re=function(e){var n=e.data;return Object(B.jsx)(ee,{children:n.map((function(e,n){return Object(B.jsx)(ne,{value:e.value,color:e.color},n)}))})},te=function(e){var n=e.sortingSteps,r=e.currentStep,t=e.sortingAlgorithm,a=e.onSelectAlgorithm,i=Object(k.useContext)(D);return Object(B.jsxs)(_,{children:[Object(B.jsx)($,{activeAlgorithm:t,onChange:a,disabled:i}),Object(B.jsx)(K,{children:Object(B.jsx)(re,{data:n[Math.min(r,n.length-1)]})})]})},ae=r(8),ie=function(e){return e.map((function(e){return Object(ae.a)({},e)}))},oe=function(e){for(var n=ie(e),r=[ie(e)],t=1;t<n.length;t++){for(var a=t-1,i=t;i>0;a--,i--){var o=ie(n);if(o[a].color="Crimson",o[i].color="Crimson",r.push(o),!(n[a].value>n[i].value))break;var c=n[a];n[a]=n[i],n[i]=c;var l=ie(n);l[a].color="DarkOrange",l[i].color="DarkOrange",r.push(l)}for(var u=0;u<t;u++)n[u].color="SpringGreen"}return n[e.length-1].color="SpringGreen",r.push(Object(A.a)(n)),r},ce=function(e){for(var n=ie(e),r=[ie(e)],t=n.length;t>0;t--){for(var a=0,i=1;i<t;a++,i++){var o=ie(n);if(o[a].color="Crimson",o[i].color="Crimson",r.push(o),n[a].value>n[i].value){var c=n[a];n[a]=n[i],n[i]=c;var l=ie(n);l[a].color="DarkOrange",l[i].color="DarkOrange",r.push(l)}}n[t-1].color="SpringGreen"}return r.push(Object(A.a)(n)),r},le=function(e){for(var n=ie(e),r=[ie(e)],t=0;t<n.length;t++){for(var a=1/0,i=t,o=t;o<n.length;o++){var c=ie(n);c[o].color="Crimson",r.push(c),a>n[o].value&&(n[i]=Object(ae.a)(Object(ae.a)({},n[i]),{},{color:"white"}),n[o].color="DarkOrange",r.push(ie(n)),i=o,a=n[o].value)}var l=n[t];n[t]=n[i],n[i]=l,n[t].color="SpringGreen",r.push(ie(n))}return r},ue=function(e){var n=ie(e),r=[ie(e)],t=function(e,n,t,a){for(var i=[],o=t,c=a,l=n,u=t;l<o&&u<c;){var s=ie(e);s[l].color="Crimson",s[u].color="Crimson",r.push(s);var f=e[l],d=e[u];f.value>d.value?(i.push(d),u++):(i.push(f),l++)}for(;l<o;)i.push(e[l]),l++;for(;u<c;)i.push(e[u]),u++;for(var b=n,p=0;b<a;b++,p++){e[b]=i[p];for(var h=ie(e),v=n;v<=b;v++)h[v].color="SpringGreen";r.push(h)}};return function e(n){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:n.length;if(!(a-r<=1)){var i=r,o=a,c=Math.floor((o+i)/2);e(n,i,c),e(n,c,o),t(n,i,c,o)}}(n),r},se=function(e){var n=ie(e),r=[ie(e)],t=function e(n,t,a){if(t>=a)return n;var i=function(e,n,t){var a=e[t],i=n,o=ie(e);o[t].color="DarkOrange",o[i].color="Aqua",r.push(o);for(var c=n;c<t;c++){var l=e[c],u=ie(e);if(u[i].color="Aqua",u[t].color="DarkOrange",u[c].color="Crimson",r.push(u),l.value<=a.value){if(i!==c){var s=e[i].value;e[i].value=l.value,l.value=s;var f=ie(e);f[t].color="DarkOrange",f[i].color="SpringGreen",f[c].color="SpringGreen",r.push(f)}i++}}var d=ie(e);d[i].color="Aqua",d[t].color="DarkOrange",r.push(d);var b=e[i].value;e[i].value=a.value,a.value=b;var p=ie(e);return p[t].color="SpringGreen",p[i].color="SpringGreen",r.push(p),i}(n,t,a);return e(n,t,i-1),e(n,i+1,a),n}(n,0,n.length-1);return t.forEach((function(e){e.color="SpringGreen"})),r.push(t),r},fe=function(e,n){var r=Array(e).fill(0),t=Math.round(100/e);switch(n){case"Random":return r.map((function(){return{value:Math.max(Math.round(Math.random()*e)*t,3)}}));case"Unique":return function(e){var n=e.map((function(){return null}));return e.forEach((function(r,t){for(var a=Math.round(Math.random()*(e.length-1));n[a];)a=Math.round(Math.random()*(e.length-1));n[a]=r})),n}(r.map((function(e,n){return{value:(n+1)*t}})));case"Reversed":return r.map((function(e,n){return{value:(n+1)*t}})).reverse();case"Nearly":var a=r.map((function(e,n){return{value:(n+1)*t}})),i=Math.min(3,Math.floor(.25*e)),o=2*i+1;return a.forEach((function(n,r){if(Math.random()<.5){var t=r+(Math.floor(Math.random()*o)-i);t>=e&&(t=e-1),t<0&&(t=0);var c=a[r];a[r]=a[t],a[t]=c}})),a;default:throw Error("Not Implemented.")}},de=P.b.div(h||(h=Object(E.a)(["\n  grid-template-columns: 3fr 8fr;\n  padding: 4rem 7rem;\n  display: grid;\n  gap: 0.25rem;\n  height: 100%;\n"]))),be=P.b.main(v||(v=Object(E.a)(["\n  flex-direction: column;\n  display: flex;\n  gap: 0.25rem;\n  height: 100%;\n"]))),pe=P.b.div(g||(g=Object(E.a)(["\n  grid-gap: 0.25rem;\n  display: grid;\n  height: 100%;\n\n  grid-template-columns: ",";\n\n  grid-template-rows: ",";\n"])),(function(e){return e.visualizerCount>=2?"1fr 1fr":"1fr"}),(function(e){return 4===e.visualizerCount?"1fr 1fr":"1fr"})),he=P.b.a(j||(j=Object(E.a)(["\n  ",";\n\n  color: white;\n  text-decoration: none;\n\n  :hover {\n    color: orange;\n  }\n"])),(function(e){return e.hasLabel&&Object(P.a)(m||(m=Object(E.a)(["\n      i {\n        margin-right: 0.25rem;\n      }\n      padding-bottom: 0.125rem;\n      border-bottom: 1px dashed orange;\n      white-space: pre;\n    "])))})),ve=function(e){var n=e.href,r=e.label,t=e.faClassName;return Object(B.jsxs)(he,{href:n,target:"_blank",hasLabel:Boolean(r),children:[Object(B.jsx)("i",{className:t||"fas fa-caret-right"}),r]})},ge=P.b.h2(O||(O=Object(E.a)(["\n  font-size: 0.8rem;\n  margin-top: 0px;\n  margin-bottom: 0.25rem;\n  font-weight: 400;\n  letter-spacing: 1px;\n  text-transform: uppercase;\n\n  i {\n    margin-right: 0.25rem;\n  }\n"]))),je=function(e){var n=e.title,r=e.faIcon,t=e.options,a=e.activeOption,i=e.disabled,o=void 0!==i&&i,c=e.onChange;return Object(B.jsxs)("div",{children:[Object(B.jsxs)(ge,{children:[r&&Object(B.jsx)("i",{className:r}),n]}),Object(B.jsx)(G,{children:t.map((function(e){return Object(B.jsx)(R,{onClick:function(){return c(e.value)},isActive:a===e.value,disabled:o,children:e.label},e.value)}))})]})},me=P.b.header(x||(x=Object(E.a)(["\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n"]))),Oe=P.b.h1(S||(S=Object(E.a)(['\n  font-family: "Raleway";\n  font-weight: 800;\n  font-size: 3.375rem;\n  font-style: italic;\n  margin: 0;\n\n  @media screen and (min-width: 1600px) {\n    font-size: 4rem;\n  }\n']))),xe=P.b.h2(y||(y=Object(E.a)(['\n  font-family: "Roboto Mono";\n  font-weight: 400;\n  font-size: 0.8rem;\n  letter-spacing: 0.125rem;\n  margin-top: -0.25rem;\n  margin-left: 0.25rem;\n  margin-bottom: 0;\n  line-height: 1.25rem;\n\n  @media screen and (min-width: 1600px) {\n    font-size: 1rem;\n  }\n']))),Se=P.b.div(C||(C=Object(E.a)(["\n  border-bottom: 2px solid #222;\n  padding: 0.25rem 0rem;\n  flex: 0 0 auto;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  gap: 0.5rem;\n"]))),ye=P.b.div(z||(z=Object(E.a)(["\n  flex: 1 0 auto;\n"]))),Ce=function(e){var n=e.visualizerCount,r=e.arraySizeConfig,t=e.arrayVariation,a=e.playSpeedConfig,i=e.onRandom,o=e.onReset,c=e.onChangeVisualizerCount,l=e.onChangeArraySize,u=e.onChangeArrayVariation,s=e.onChangePlaySpeed,f=Object(k.useContext)(D);return Object(B.jsxs)(me,{children:[Object(B.jsxs)("div",{children:[Object(B.jsx)(Oe,{children:"Sorting, Visualized."}),Object(B.jsxs)(xe,{children:[Object(B.jsx)(ve,{href:"https://www.github.com/dwyte/sorting-visualized",faClassName:"fas fa-code"})," ","DEVELOPED BY ",Object(B.jsx)(ve,{href:"https://dwyte.github.io",label:"DWIGHT"})]})]}),Object(B.jsx)(ye,{}),Object(B.jsxs)(Se,{children:[Object(B.jsx)(je,{title:"Visualizers",faIcon:"fas fa-square",options:U,activeOption:n,onChange:c,disabled:f}),Object(B.jsx)(je,{title:"Variation",faIcon:"fas fa-chart-bar",options:W,activeOption:t,onChange:u,disabled:f}),Object(B.jsx)(je,{title:"Length",faIcon:"fas fa-sort-amount-up",options:H,activeOption:r.arraySize,onChange:l,disabled:f}),Object(B.jsx)(je,{title:"Speed",faIcon:"fas fa-forward",options:Y,activeOption:a.playSpeed,onChange:s})]}),Object(B.jsxs)(G,{children:[Object(B.jsxs)(R,{padding:"large",onClick:i,disabled:f,isIconLarge:!0,isActive:!0,children:[Object(B.jsx)("i",{className:"fas fa-dice-six"}),"Randomize"]}),Object(B.jsxs)(R,{padding:"large",onClick:o,isIconLarge:!0,isActive:!0,children:[Object(B.jsx)("i",{className:"fas fa-undo"}),"Reset"]})]})]})},ze=function(){var e=Object(k.useState)([{value:100}]),n=Object(N.a)(e,2),r=n[0],t=n[1],a=Object(k.useState)(null),i=Object(N.a)(a,2),o=i[0],c=i[1],l=Object(k.useState)(0),u=Object(N.a)(l,2),s=u[0],f=u[1],d=Object(k.useState)(["Merge"]),b=Object(N.a)(d,2),p=b[0],h=b[1],v=Object(k.useState)(Q[0]),g=Object(N.a)(v,2),j=g[0],m=g[1],O=Object(k.useState)(null),x=Object(N.a)(O,2),S=x[0],y=x[1],C=Object(k.useState)(J[0]),z=Object(N.a)(C,2),M=z[0],w=z[1],I=Object(k.useState)("Unique"),E=Object(N.a)(I,2),P=E[0],R=E[1],G=Object(k.useMemo)((function(){var e=1;return o&&p.forEach((function(n){var r;e=Math.max((null===(r=o[n])||void 0===r?void 0:r.length)||1,e)})),e}),[o,p]);Object(k.useEffect)((function(){t(fe(M.actualSize,P))}),[M,P]),Object(k.useEffect)((function(){var e={};T.forEach((function(n){e[n]=function(e){switch(arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Merge"){case"Bubble":return ce(e);case"Selection":return le(e);case"Insertion":return oe(e);case"Merge":return ue(e);case"Quick":return se(e);default:throw Error("Algorithm not implemented.")}}(r,n)})),c(e),f(0)}),[r]),Object(k.useEffect)((function(){s===G-1&&y((function(e){return e?(clearTimeout(e),null):e}))}),[s,G]);var L=function(e){f((function(n){var r=n+e;return r<0&&(r=0),r>G-1&&(r=G-1),r}))},V=function(){S&&(clearInterval(S),y(null))};return Object(B.jsx)(D.Provider,{value:Boolean(S),children:Object(B.jsxs)(de,{children:[Object(B.jsx)(Ce,{arraySizeConfig:M,arrayVariation:P,visualizerCount:p.length,playSpeedConfig:j,onReset:function(){V(),f(0)},onRandom:function(){t(fe(M.actualSize,P))},onChangePlaySpeed:function(e){var n=Q.find((function(n){return n.playSpeed===e}));n&&(m(n),S&&(clearInterval(S),y(setInterval((function(){return L(n.playStepSize)}),n.playStepIntervalMS))))},onChangeVisualizerCount:function(e){!function(e){h((function(n){return 1===e?[n[0]]:2===e?[n[0],n[1]||"Merge"]:4===e?[n[0],n[1]||"Merge",n[2]||"Merge",n[4]||"Merge"]:n}))}(e)},onChangeArraySize:function(e){var n=J.find((function(n){return n.arraySize===e}));n&&w(n)},onChangeArrayVariation:function(e){R(e)}}),Object(B.jsxs)(be,{children:[Object(B.jsx)(pe,{visualizerCount:p.length,children:p.map((function(e,n){return Object(B.jsx)(te,{sortingAlgorithm:e,onSelectAlgorithm:(t=n,function(e){h((function(n){var r=Object(A.a)(n);return r[t]=e,r}))}),currentStep:s,sortingSteps:(null===o||void 0===o?void 0:o[e])||[r]},n);var t}))}),Object(B.jsx)(F,{currentStep:s,totalSteps:G,onPrevious:function(){L(-1)},onPause:V,onPlay:function(){!S&&s<G-1&&y(setInterval((function(){return L(j.playStepSize)}),j.playStepIntervalMS))},onNext:function(){L(1)},onChangeSlider:function(e){S&&(clearInterval(S),y(null)),f(parseInt(e.target.value))}})]})]})})},ke=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,29)).then((function(n){var r=n.getCLS,t=n.getFID,a=n.getFCP,i=n.getLCP,o=n.getTTFB;r(e),t(e),a(e),i(e),o(e)}))};r(27);I.a.render(Object(B.jsx)(M.a.StrictMode,{children:Object(B.jsx)(ze,{})}),document.getElementById("root")),ke()}},[[28,1,2]]]);
//# sourceMappingURL=main.bf5650cc.chunk.js.map