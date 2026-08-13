(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,71410,e=>{"use strict";var t,n=e.i(53296),r=e.i(5199);function o({guide:e}){return 0===e.length?(0,n.jsx)("p",{children:"Loading..."}):(0,n.jsx)("div",{className:"space-y-6 p-8",children:e.map(e=>(0,n.jsxs)("div",{className:"rounded-lg border-[#252B36] p-[16px] shadow bg-[#151922]",children:[(0,n.jsx)("h2",{className:"text-2xl font-bold text-[#F3F4F6]",children:e.name}),e.install.arch&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("h3",{className:"mt-4 mb-2 font-semibold text-[#9CA3AF]",children:"Arch Linux"}),e.install.arch.map((e,t)=>(0,n.jsx)("pre",{className:"bg-gray-900 text-green-400 p-3 rounded mb-2 overflow-x-auto bg-[#0B0F16] border-[#1E293B] text-[#4ADE80] py-[10px] px-[12px]",children:(0,n.jsx)("code",{children:e})},t))]})]},e.id))})}function a({techs:e}){let[t,a]=(0,r.useState)([]),[s,i]=(0,r.useState)(!0),[c,u]=(0,r.useState)("");return((0,r.useEffect)(()=>{!async function(){try{let t=await Promise.all(e.map(async e=>{let t=await fetch(`http://localhost:5000/${e}`);if(!t.ok)throw Error(`Failed to fetch ${e} (${t.status})`);return t.json()}));a(t)}catch(e){console.error(e),u("Failed to load guides.")}finally{i(!1)}}()},[e]),s)?(0,n.jsx)("p",{children:"Loading..."}):c?(0,n.jsx)("p",{className:"text-red-500",children:c}):(0,n.jsx)(o,{guide:t})}var s=e.i(79477),i=function(){return(i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function c(e,t,n){if(n||2==arguments.length)for(var r,o=0,a=t.length;o<a;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))}"function"==typeof SuppressedError&&SuppressedError;Object.create(null);var u={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},l="-ms-",f="-moz-",p="-webkit-",d="comm",h="rule",g="decl",m="@keyframes",y=Math.abs,v=String.fromCharCode,b=Object.assign;function x(e,t){return(e=t.exec(e))?e[0]:e}function S(e,t,n){return e.replace(t,n)}function w(e,t,n){return e.indexOf(t,n)}function C(e,t){return 0|e.charCodeAt(t)}function A(e,t,n){return e.slice(t,n)}function I(e){return e.length}function P(e,t){return t.push(e),e}function k(e,t){return e.filter(function(e){return!x(e,t)})}var j=1,N=1,F=0,R=0,_=0,E="";function T(e,t,n,r,o,a,s,i){return{value:e,root:t,parent:n,type:r,props:o,children:a,line:j,column:N,length:s,return:"",siblings:i}}function O(e,t){return b(T("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function L(e){for(;e.root;)e=O(e.root,{children:[e]});P(e,e.siblings)}function $(){return _=R<F?C(E,R++):0,N++,10===_&&(N=1,j++),_}function D(){return C(E,R)}function B(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function G(e){var t,n;return(t=R-1,n=function e(t){for(;$();)switch(_){case t:return R;case 34:case 39:34!==t&&39!==t&&e(_);break;case 40:41===t&&e(t);break;case 92:$()}return R}(91===e?e+2:40===e?e+1:e),A(E,t,n)).trim()}function M(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function z(e,t,n,r){switch(e.type){case"@layer":if(e.children.length)break;case"@import":case"@namespace":case g:return e.return=e.return||e.value;case d:return"";case m:return e.return=e.value+"{"+M(e.children,r)+"}";case h:if(!I(e.value=e.props.join(",")))return""}return I(n=M(e.children,r))?e.return=e.value+"{"+n+"}":""}function Y(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case g:e.return=function e(t,n,r){var o;switch(o=n,45^C(t,0)?(((o<<2^C(t,0))<<2^C(t,1))<<2^C(t,2))<<2^C(t,3):0){case 5103:return p+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return p+t+t;case 4855:return p+t.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+t;case 4789:return f+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return p+t+f+t+l+t+t;case 5936:switch(C(t,n+11)){case 114:return p+t+l+S(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return p+t+l+S(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return p+t+l+S(t,/[svh]\w+-[tblr]{2}/,"lr")+t}case 6828:case 4268:case 2903:return p+t+l+t+t;case 6165:return p+t+l+"flex-"+t+t;case 5187:return p+t+S(t,/(\w+).+(:[^]+)/,p+"box-$1$2"+l+"flex-$1$2")+t;case 5443:return p+t+l+"flex-item-"+S(t,/flex-|-self/g,"")+(x(t,/flex-|baseline/)?"":l+"grid-row-"+S(t,/flex-|-self/g,""))+t;case 4675:return p+t+l+"flex-line-pack"+S(t,/align-content|flex-|-self/g,"")+t;case 5548:return p+t+l+S(t,"shrink","negative")+t;case 5292:return p+t+l+S(t,"basis","preferred-size")+t;case 6060:return p+"box-"+S(t,"-grow","")+p+t+l+S(t,"grow","positive")+t;case 4554:return p+S(t,/([^-])(transform)/g,"$1"+p+"$2")+t;case 6187:return S(S(S(t,/(zoom-|grab)/,p+"$1"),/(image-set)/,p+"$1"),t,"")+t;case 5495:case 3959:return S(t,/(image-set\([^]*)/,p+"$1$`$1");case 4968:return S(S(t,/(.+:)(flex-)?(.*)/,p+"box-pack:$3"+l+"flex-pack:$3"),/space-between/,"justify")+p+t+t;case 4200:if(!x(t,/flex-|baseline/))return l+"grid-column-align"+A(t,n)+t;break;case 2592:case 3360:return l+S(t,"template-","")+t;case 4384:case 3616:if(r&&r.some(function(e,t){return n=t,x(e.props,/grid-\w+-end/)}))return~w(t+(r=r[n].value),"span",0)?t:l+S(t,"-start","")+t+l+"grid-row-span:"+(~w(r,"span",0)?x(r,/\d+/):x(r,/\d+/)-x(t,/\d+/))+";";return l+S(t,"-start","")+t;case 4896:case 4128:return r&&r.some(function(e){return x(e.props,/grid-\w+-start/)})?t:l+S(S(t,"-end","-span"),"span ","")+t;case 4095:case 3583:case 4068:case 2532:return S(t,/(.+)-inline(.+)/,p+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(I(t)-1-n>6)switch(C(t,n+1)){case 109:if(45!==C(t,n+4))break;case 102:return S(t,/(.+:)(.+)-([^]+)/,"$1"+p+"$2-$3$1"+f+(108==C(t,n+3)?"$3":"$2-$3"))+t;case 115:return~w(t,"stretch",0)?e(S(t,"stretch","fill-available"),n,r)+t:t}break;case 5152:case 5920:return S(t,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(e,n,r,o,a,s,i){return l+n+":"+r+i+(o?l+n+"-span:"+(a?s:s-r)+i:"")+t});case 4949:if(121===C(t,n+6))return S(t,":",":"+p)+t;break;case 6444:switch(C(t,45===C(t,14)?18:11)){case 120:return S(t,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+p+(45===C(t,14)?"inline-":"")+"box$3$1"+p+"$2$3$1"+l+"$2box$3")+t;case 100:return S(t,":",":"+l)+t}break;case 5719:case 2647:case 2135:case 3927:case 2391:return S(t,"scroll-","scroll-snap-")+t}return t}(e.value,e.length,n);return;case m:return M([O(e,{value:S(e.value,"@","@"+p)})],r);case h:if(e.length){var o,a;return o=n=e.props,a=function(t){switch(x(t,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":L(O(e,{props:[S(t,/:(read-\w+)/,":"+f+"$1")]})),L(O(e,{props:[t]})),b(e,{props:k(n,r)});break;case"::placeholder":L(O(e,{props:[S(t,/:(plac\w+)/,":"+p+"input-$1")]})),L(O(e,{props:[S(t,/:(plac\w+)/,":"+f+"$1")]})),L(O(e,{props:[S(t,/:(plac\w+)/,l+"input-$1")]})),L(O(e,{props:[t]})),b(e,{props:k(n,r)})}return""},o.map(a).join("")}}}function W(e,t,n,r,o,a,s,i,c,u,l,f){for(var p=o-1,d=0===o?a:[""],g=d.length,m=0,v=0,b=0;m<r;++m)for(var x=0,w=A(e,p+1,p=y(v=s[m])),C=e;x<g;++x)(C=(v>0?d[x]+" "+w:S(w,/&\f/g,d[x])).trim())&&(c[b++]=C);return T(e,t,n,0===o?h:i,c,u,l,f)}function H(e,t,n,r,o){return T(e,t,n,g,A(e,0,r),A(e,r+1,-1),r,o)}var Q=void 0!==s.default&&void 0!==s.default.env&&(s.default.env.REACT_APP_SC_ATTR||s.default.env.SC_ATTR)||"data-styled",V="active",J="data-styled-version",K="6.3.12",X="/*!sc*/\n",q="u">typeof window&&"u">typeof document,U=!!("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:void 0!==s.default&&void 0!==s.default.env&&void 0!==s.default.env.REACT_APP_SC_DISABLE_SPEEDY&&""!==s.default.env.REACT_APP_SC_DISABLE_SPEEDY?"false"!==s.default.env.REACT_APP_SC_DISABLE_SPEEDY&&s.default.env.REACT_APP_SC_DISABLE_SPEEDY:void 0!==s.default&&void 0!==s.default.env&&void 0!==s.default.env.SC_DISABLE_SPEEDY&&""!==s.default.env.SC_DISABLE_SPEEDY&&"false"!==s.default.env.SC_DISABLE_SPEEDY&&s.default.env.SC_DISABLE_SPEEDY);function Z(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var ee=new Map,et=new Map,en=1,er=function(e){if(ee.has(e))return ee.get(e);for(;et.has(en);)en++;var t=en++;return ee.set(e,t),et.set(t,e),t},eo=function(e,t){en=t+1,ee.set(e,t),et.set(t,e)},ea=Object.freeze([]),es=Object.freeze({}),ei=new Set(["a","abbr","address","area","article","aside","audio","b","bdi","bdo","blockquote","body","button","br","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","slot","small","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tspan","use"]),ec=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,eu=/(^-|-$)/g;function el(e){return e.replace(ec,"-").replace(eu,"")}var ef=/(a)(d)/gi,ep=function(e){return String.fromCharCode(e+(e>25?39:97))};function ed(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=ep(t%52)+n;return(ep(t%52)+n).replace(ef,"$1-$2")}var eh,eg=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},em=function(e){return eg(5381,e)};function ey(e){return"string"==typeof e}var ev="function"==typeof Symbol&&Symbol.for,eb=ev?Symbol.for("react.memo"):60115,ex=ev?Symbol.for("react.forward_ref"):60112,eS={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},ew={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},eC={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},eA=((eh={})[ex]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},eh[eb]=eC,eh);function eI(e){return("type"in e&&e.type.$$typeof)===eb?eC:"$$typeof"in e?eA[e.$$typeof]:eS}var eP=Object.defineProperty,ek=Object.getOwnPropertyNames,ej=Object.getOwnPropertySymbols,eN=Object.getOwnPropertyDescriptor,eF=Object.getPrototypeOf,eR=Object.prototype;function e_(e){return"function"==typeof e}function eE(e){return"object"==typeof e&&"styledComponentId"in e}function eT(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function eO(e,t){return e.join(t||"")}function eL(e){return null!==e&&"object"==typeof e&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function e$(e,t){Object.defineProperty(e,"toString",{value:t})}var eD=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e,this._cGroup=0,this._cIndex=0}return e.prototype.indexOfGroup=function(e){if(e===this._cGroup)return this._cIndex;var t=this._cIndex;if(e>this._cGroup)for(var n=this._cGroup;n<e;n++)t+=this.groupSizes[n];else for(n=this._cGroup-1;n>=e;n--)t-=this.groupSizes[n];return this._cGroup=e,this._cIndex=t,t},e.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var n=this.groupSizes,r=n.length,o=r;e>=o;)if((o<<=1)<0)throw Z(16,"".concat(e));this.groupSizes=new Uint32Array(o),this.groupSizes.set(n),this.length=o;for(var a=r;a<o;a++)this.groupSizes[a]=0}for(var s=this.indexOfGroup(e+1),i=0,c=(a=0,t.length);a<c;a++)this.tag.insertRule(s,t[a])&&(this.groupSizes[e]++,s++,i++);i>0&&this._cGroup>e&&(this._cIndex+=i)},e.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(var o=n;o<r;o++)this.tag.deleteRule(n);t>0&&this._cGroup>e&&(this._cIndex-=t)}},e.prototype.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var n=this.groupSizes[e],r=this.indexOfGroup(e),o=r+n,a=r;a<o;a++)t+=this.tag.getRule(a)+X;return t},e}(),eB="style[".concat(Q,"][").concat(J,'="').concat(K,'"]'),eG=new RegExp("^".concat(Q,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),eM=function(e){return"u">typeof ShadowRoot&&e instanceof ShadowRoot||"host"in e&&11===e.nodeType},ez=function(e){if(!e)return document;if(eM(e))return e;if("getRootNode"in e){var t=e.getRootNode();if(eM(t))return t}return document},eY=function(e,t,n){for(var r,o=n.split(","),a=0,s=o.length;a<s;a++)(r=o[a])&&e.registerName(t,r)},eW=function(e,t){for(var n,r=(null!=(n=t.textContent)?n:"").split(X),o=[],a=0,s=r.length;a<s;a++){var i=r[a].trim();if(i){var c=i.match(eG);if(c){var u=0|parseInt(c[1],10),l=c[2];0!==u&&(eo(l,u),eY(e,l,c[3]),e.getTag().insertRules(u,o)),o.length=0}else o.push(i)}}},eH=function(e){for(var t=ez(e.options.target).querySelectorAll(eB),n=0,r=t.length;n<r;n++){var o=t[n];o&&o.getAttribute(Q)!==V&&(eW(e,o),o.parentNode&&o.parentNode.removeChild(o))}};function eQ(){return"u">typeof __webpack_nonce__?__webpack_nonce__:null}var eV=function(e){var t,n=document.head,r=e||n,o=document.createElement("style"),a=(t=Array.from(r.querySelectorAll("style[".concat(Q,"]"))))[t.length-1],s=void 0!==a?a.nextSibling:null;o.setAttribute(Q,V),o.setAttribute(J,K);var i=eQ();return i&&o.setAttribute("nonce",i),r.insertBefore(o,s),o},eJ=function(){function e(e){this.element=eV(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(e){var t;if(e.sheet)return e.sheet;for(var n=null!=(t=e.getRootNode().styleSheets)?t:document.styleSheets,r=0,o=n.length;r<o;r++){var a=n[r];if(a.ownerNode===e)return a}throw Z(17)}(this.element),this.length=0}return e.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return!1}},e.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},e.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},e}(),eK=function(){function e(e){this.element=eV(e),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var n=document.createTextNode(t);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},e.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),eX=function(){function e(e){this.rules=[],this.length=0}return e.prototype.insertRule=function(e,t){return e<=this.length&&(e===this.length?this.rules.push(t):this.rules.splice(e,0,t),this.length++,!0)},e.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},e.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),eq=q,eU={isServer:!q,useCSSOMInjection:!U},eZ=function(){function e(e,t,n){void 0===e&&(e=es),void 0===t&&(t={});var r=this;this.options=i(i({},eU),e),this.gs=t,this.names=new Map(n),this.server=!!e.isServer,!this.server&&q&&eq&&(eq=!1,eH(this)),e$(this,function(){for(var e=r.getTag(),t=e.length,n="",o=0;o<t;o++)!function(t){var o=et.get(t);if(void 0===o)return;var a=r.names.get(o);if(void 0===a||!a.size)return;var s=e.getGroup(t);if(0!==s.length){var i=Q+".g"+t+'[id="'+o+'"]',c="";a.forEach(function(e){e.length>0&&(c+=e+",")}),n+=s+i+'{content:"'+c+'"}'+X}}(o);return n})}return e.registerId=function(e){return er(e)},e.prototype.rehydrate=function(){!this.server&&q&&eH(this)},e.prototype.reconstructWithOptions=function(t,n){void 0===n&&(n=!0);var r=new e(i(i({},this.options),t),this.gs,n&&this.names||void 0);return!this.server&&q&&t.target!==this.options.target&&ez(this.options.target)!==ez(t.target)&&eH(r),r},e.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},e.prototype.getTag=function(){var e,t,n;return this.tag||(this.tag=(t=(e=this.options).useCSSOMInjection,n=e.target,new eD(e.isServer?new eX(n):t?new eJ(n):new eK(n))))},e.prototype.hasNameForId=function(e,t){var n,r;return null!=(r=null==(n=this.names.get(e))?void 0:n.has(t))&&r},e.prototype.registerName=function(e,t){er(e);var n=this.names.get(e);n?n.add(t):this.names.set(e,new Set([t]))},e.prototype.insertRules=function(e,t,n){this.registerName(e,t),this.getTag().insertRules(er(e),n)},e.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},e.prototype.clearRules=function(e){this.getTag().clearGroup(er(e)),this.clearNames(e)},e.prototype.clearTag=function(){this.tag=void 0},e}();function e0(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(1===n&&"-"===r&&"-"===e[0])return e;r>="A"&&r<="Z"?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var e1=Symbol.for("sc-keyframes"),e2=function(e){return null==e||!1===e||""===e},e5=function(e){var t=[];for(var n in e){var r=e[n];e.hasOwnProperty(n)&&!e2(r)&&(Array.isArray(r)&&r.isCss||e_(r)?t.push("".concat(e0(n),":"),r,";"):eL(r)?t.push.apply(t,c(c(["".concat(n," {")],e5(r),!1),["}"],!1)):t.push("".concat(e0(n),": ").concat(null==r||"boolean"==typeof r||""===r?"":"number"!=typeof r||0===r||n in u||n.startsWith("--")?String(r).trim():"".concat(r,"px"),";")))}return t};function e4(e,t,n,r,o){if(void 0===o&&(o=[]),"string"==typeof e)return e&&o.push(e),o;if(e2(e))return o;if(eE(e))return o.push(".".concat(e.styledComponentId)),o;if(e_(e))return!e_(e)||e.prototype&&e.prototype.isReactComponent||!t?(o.push(e),o):e4(e(t),t,n,r,o);if("object"==typeof e&&null!==e&&e1 in e)return n?(e.inject(n,r),o.push(e.getName(r))):o.push(e),o;if(eL(e)){for(var a=e5(e),s=0;s<a.length;s++)o.push(a[s]);return o}if(!Array.isArray(e))return o.push(e.toString()),o;for(s=0;s<e.length;s++)e4(e[s],t,n,r,o);return o}function e3(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(e_(n)&&!eE(n))return!1}return!0}var e9=em(K),e6=function(){function e(e,t,n){this.rules=e,this.staticRulesId="",this.isStatic=(void 0===n||n.isStatic)&&e3(e),this.componentId=t,this.baseHash=eg(e9,t),this.baseStyle=n,eZ.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,n){var r=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,n).className:"";if(this.isStatic&&!n.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))r=eT(r,this.staticRulesId);else{var o=eO(e4(this.rules,e,t,n)),a=ed(eg(this.baseHash,o)>>>0);if(!t.hasNameForId(this.componentId,a)){var s=n(o,".".concat(a),void 0,this.componentId);t.insertRules(this.componentId,a,s)}r=eT(r,a),this.staticRulesId=a}else{for(var i=eg(this.baseHash,n.hash),c="",u=0;u<this.rules.length;u++){var l=this.rules[u];if("string"==typeof l)c+=l;else if(l){var f=eO(e4(l,e,t,n));i=eg(eg(i,String(u)),f),c+=f}}if(c){var p=ed(i>>>0);if(!t.hasNameForId(this.componentId,p)){var d=n(c,".".concat(p),void 0,this.componentId);t.insertRules(this.componentId,p,d)}r=eT(r,p)}}return{className:r,css:"u"<typeof window?t.getTag().getGroup(er(this.componentId)):""}},e}(),e7=/&/g;function e8(e){if(-1===e.indexOf("}"))return!1;for(var t=e.length,n=0,r=0,o=!1,a=0;a<t;a++){var s=e.charCodeAt(a);if(0!==r||o||47!==s||42!==e.charCodeAt(a+1))if(o)42===s&&47===e.charCodeAt(a+1)&&(o=!1,a++);else if(34!==s&&39!==s||0!==a&&92===e.charCodeAt(a-1)){if(0===r){if(123===s)n++;else if(125===s&&--n<0)return!0}}else 0===r?r=s:r===s&&(r=0);else o=!0,a++}return 0!==n||0!==r}function te(e){var t,n,r,o,a,s,i=void 0===e?es:e,c=i.options,u=void 0===c?es:c,l=i.plugins,f=void 0===l?ea:l,p=function(e,t,n){return n.startsWith(a)&&n.endsWith(a)&&n.replaceAll(a,"").length>0?".".concat(o):e},g=f.slice();g.push(function(e){e.type===h&&e.value.includes("&")&&(s||(s=RegExp("\\".concat(a,"\\b"),"g")),e.props[0]=e.props[0].replace(e7,a).replace(s,p))}),u.prefix&&g.push(Y),g.push(z);var m=[],b=(n=(t=g.concat((r=function(e){return m.push(e)},function(e){!e.root&&(e=e.return)&&r(e)}))).length,function(e,r,o,a){for(var s="",i=0;i<n;i++)s+=t[i](e,r,o,a)||"";return s}),x=function(e,t,n,r){void 0===t&&(t=""),void 0===n&&(n=""),void 0===r&&(r="&"),o=r,a=t,s=void 0;var i,c,l,f=function(e){if(!e8(e))return e;for(var t=e.length,n="",r=0,o=0,a=0,s=!1,i=0;i<t;i++){var c=e.charCodeAt(i);if(0!==a||s||47!==c||42!==e.charCodeAt(i+1))if(s)42===c&&47===e.charCodeAt(i+1)&&(s=!1,i++);else if(34!==c&&39!==c||0!==i&&92===e.charCodeAt(i-1)){if(0===a)if(123===c)o++;else if(125===c){if(--o<0){for(var u=i+1;u<t;){var l=e.charCodeAt(u);if(59===l||10===l)break;u++}u<t&&59===e.charCodeAt(u)&&u++,o=0,i=u-1,r=u;continue}0===o&&(n+=e.substring(r,i+1),r=i+1)}else 59===c&&0===o&&(n+=e.substring(r,i+1),r=i+1)}else 0===a?a=c:a===c&&(a=0);else s=!0,i++}if(r<t){var f=e.substring(r);e8(f)||(n+=f)}return n}(function(e){if(-1===e.indexOf("//"))return e;for(var t=e.length,n=[],r=0,o=0,a=0,s=0;o<t;){var i=e.charCodeAt(o);if(34!==i&&39!==i||0!==o&&92===e.charCodeAt(o-1))if(0===a)if(47===i&&o+1<t&&42===e.charCodeAt(o+1)){for(o+=2;o+1<t&&(42!==e.charCodeAt(o)||47!==e.charCodeAt(o+1));)o++;o+=2}else if(40===i&&o>=3&&108==(32|e.charCodeAt(o-1))&&114==(32|e.charCodeAt(o-2))&&117==(32|e.charCodeAt(o-3)))s=1,o++;else if(s>0)41===i?s--:40===i&&s++,o++;else if(42===i&&o+1<t&&47===e.charCodeAt(o+1))o>r&&n.push(e.substring(r,o)),r=o+=2;else if(47===i&&o+1<t&&47===e.charCodeAt(o+1)){for(o>r&&n.push(e.substring(r,o));o<t&&10!==e.charCodeAt(o);)o++;r=o}else o++;else o++;else 0===a?a=i:a===i&&(a=0),o++}return 0===r?e:(r<t&&n.push(e.substring(r)),n.join(""))}(e)),p=(l=function e(t,n,r,o,a,s,i,c,u){for(var l,f,p,h,g=0,m=0,b=i,x=0,k=0,F=0,O=1,L=1,M=1,z=0,Y="",Q=a,V=s,J=o,K=Y;L;)switch(F=z,z=$()){case 40:if(108!=F&&58==C(K,b-1)){-1!=w(K+=S(G(z),"&","&\f"),"&\f",y(g?c[g-1]:0))&&(M=-1);break}case 34:case 39:case 91:K+=G(z);break;case 9:case 10:case 13:case 32:K+=function(e){for(;_=D();)if(_<33)$();else break;return B(e)>2||B(_)>3?"":" "}(F);break;case 92:K+=function(e,t){for(var n;--t&&$()&&!(_<48)&&!(_>102)&&(!(_>57)||!(_<65))&&(!(_>70)||!(_<97)););return n=R+(t<6&&32==D()&&32==$()),A(E,e,n)}(R-1,7);continue;case 47:switch(D()){case 42:case 47:P((l=function(e,t){for(;$();)if(e+_===57)break;else if(e+_===84&&47===D())break;return"/*"+A(E,t,R-1)+"*"+v(47===e?e:$())}($(),R),f=n,p=r,h=u,T(l,f,p,d,v(_),A(l,2,-2),0,h)),u),(5==B(F||1)||5==B(D()||1))&&I(K)&&" "!==A(K,-1,void 0)&&(K+=" ");break;default:K+="/"}break;case 123*O:c[g++]=I(K)*M;case 125*O:case 59:case 0:switch(z){case 0:case 125:L=0;case 59+m:-1==M&&(K=S(K,/\f/g,"")),k>0&&(I(K)-b||0===O&&47===F)&&P(k>32?H(K+";",o,r,b-1,u):H(S(K," ","")+";",o,r,b-2,u),u);break;case 59:K+=";";default:if(P(J=W(K,n,r,g,m,a,c,Y,Q=[],V=[],b,s),s),123===z)if(0===m)e(K,n,J,J,Q,s,b,c,V);else{switch(x){case 99:if(110===C(K,3))break;case 108:if(97===C(K,2))break;default:m=0;case 100:case 109:case 115:}m?e(t,J,J,o&&P(W(t,J,J,0,0,a,c,Y,a,Q=[],b,V),V),a,V,b,c,o?Q:V):e(K,J,J,J,[""],V,0,c,V)}}g=m=k=0,O=M=1,Y=K="",b=i;break;case 58:b=1+I(K),k=F;default:if(O<1){if(123==z)--O;else if(125==z&&0==O++&&125==(_=R>0?C(E,--R):0,N--,10===_&&(N=1,j--),_))continue}switch(K+=v(z),z*O){case 38:M=m>0?1:(K+="\f",-1);break;case 44:c[g++]=(I(K)-1)*M,M=1;break;case 64:45===D()&&(K+=G($())),x=D(),m=b=I(Y=K+=function(e){for(;!B(D());)$();return A(E,e,R)}(R)),z++;break;case 45:45===F&&2==I(K)&&(O=0)}}return s}("",null,null,null,[""],(c=i=n||t?"".concat(n," ").concat(t," { ").concat(f," }"):f,j=N=1,F=I(E=c),R=0,i=[]),0,[0],i),E="",l);return u.namespace&&(p=function e(t,n){return t.map(function(t){return"rule"===t.type&&(t.value="".concat(n," ").concat(t.value),t.value=t.value.replaceAll(",",",".concat(n," ")),t.props=t.props.map(function(e){return"".concat(n," ").concat(e)})),Array.isArray(t.children)&&"@keyframes"!==t.type&&(t.children=e(t.children,n)),t})}(p,u.namespace)),m=[],M(p,b),m};return x.hash=f.length?f.reduce(function(e,t){return t.name||Z(15),eg(e,t.name)},5381).toString():"",x}var tt=new eZ,tn=te(),tr=r.default.createContext({shouldForwardProp:void 0,styleSheet:tt,stylis:tn}),to=(tr.Consumer,r.default.createContext(void 0));function ta(){return r.default.useContext(tr)}function ts(e){if(!r.default.useMemo)return e.children;var t=ta().styleSheet,n=r.default.useMemo(function(){var n=t;return e.sheet?n=e.sheet:e.target&&(n=n.reconstructWithOptions({target:e.target},!1)),e.disableCSSOMInjection&&(n=n.reconstructWithOptions({useCSSOMInjection:!1})),n},[e.disableCSSOMInjection,e.sheet,e.target,t]),o=r.default.useMemo(function(){return te({options:{namespace:e.namespace,prefix:e.enableVendorPrefixes},plugins:e.stylisPlugins})},[e.enableVendorPrefixes,e.namespace,e.stylisPlugins]),a=r.default.useMemo(function(){return{shouldForwardProp:e.shouldForwardProp,styleSheet:n,stylis:o}},[e.shouldForwardProp,n,o]);return r.default.createElement(tr.Provider,{value:a},r.default.createElement(to.Provider,{value:o},e.children))}var ti=r.default.createContext(void 0);ti.Consumer;var tc={};function tu(e,t,n){var o,a,s,c,u=eE(e),l=!ey(e),f=t.attrs,p=void 0===f?ea:f,d=t.componentId,h=void 0===d?(o=t.displayName,a=t.parentComponentId,tc[s="string"!=typeof o?"sc":el(o)]=(tc[s]||0)+1,c="".concat(s,"-").concat(ed(em(K+s+tc[s])>>>0)),a?"".concat(a,"-").concat(c):c):d,g=t.displayName,m=void 0===g?ey(e)?"styled.".concat(e):"Styled(".concat(e.displayName||e.name||"Component",")"):g,y=t.displayName&&t.componentId?"".concat(el(t.displayName),"-").concat(t.componentId):t.componentId||h,v=u&&e.attrs?e.attrs.concat(p).filter(Boolean):p,b=t.shouldForwardProp;if(u&&e.shouldForwardProp){var x=e.shouldForwardProp;if(t.shouldForwardProp){var S=t.shouldForwardProp;b=function(e,t){return x(e,t)&&S(e,t)}}else b=x}var w=new e6(n,y,u?e.componentStyle:void 0);function C(e,t){return function(e,t,n){var o,a,s=e.attrs,c=e.componentStyle,u=e.defaultProps,l=e.foldedComponentIds,f=e.styledComponentId,p=e.target,d=r.default.useContext(ti),h=ta(),g=e.shouldForwardProp||h.shouldForwardProp,m=(void 0===(o=u)&&(o=es),t.theme!==o.theme&&t.theme||d||o.theme||es),y=function(e,t,n){for(var r,o=i(i({},t),{className:void 0,theme:n}),a=0;a<e.length;a+=1){var s=e_(r=e[a])?r(o):r;for(var c in s)"className"===c?o.className=eT(o.className,s[c]):"style"===c?o.style=i(i({},o.style),s[c]):c in t&&void 0===t[c]||(o[c]=s[c])}return"className"in t&&"string"==typeof t.className&&(o.className=eT(o.className,t.className)),o}(s,t,m),v=y.as||p,b={};for(var x in y)void 0===y[x]||"$"===x[0]||"as"===x||"theme"===x&&y.theme===m||("forwardedAs"===x?b.as=y.forwardedAs:g&&!g(x,v)||(b[x]=y[x]));var S=(a=ta(),c.generateAndInjectStyles(y,a.styleSheet,a.stylis)).className,w=eT(l,f);return S&&(w+=" "+S),y.className&&(w+=" "+y.className),b[ey(v)&&!ei.has(v)?"class":"className"]=w,n&&(b.ref=n),(0,r.createElement)(v,b)}(A,e,t)}C.displayName=m;var A=r.default.forwardRef(C);return A.attrs=v,A.componentStyle=w,A.displayName=m,A.shouldForwardProp=b,A.foldedComponentIds=u?eT(e.foldedComponentIds,e.styledComponentId):"",A.styledComponentId=y,A.target=u?e.target:e,Object.defineProperty(A,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(t){this._foldedDefaultProps=u?function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];for(var r=0;r<t.length;r++)!function e(t,n,r){if(void 0===r&&(r=!1),!r&&!eL(t)&&!Array.isArray(t))return n;if(Array.isArray(n))for(var o=0;o<n.length;o++)t[o]=e(t[o],n[o]);else if(eL(n))for(var o in n)t[o]=e(t[o],n[o]);return t}(e,t[r],!0);return e}({},e.defaultProps,t):t}}),e$(A,function(){return".".concat(A.styledComponentId)}),l&&function e(t,n,r){if("string"!=typeof n){if(eR){var o=eF(n);o&&o!==eR&&e(t,o,r)}var a=ek(n);ej&&(a=a.concat(ej(n)));for(var s=eI(t),i=eI(n),c=0;c<a.length;++c){var u=a[c];if(!(u in ew||r&&r[u]||i&&u in i||s&&u in s)){var l=eN(n,u);try{eP(t,u,l)}catch(e){}}}}return t}(A,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),A}function tl(e,t){for(var n=[e[0]],r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n}var tf=function(e){return Object.assign(e,{isCss:!0})};function tp(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return e_(e)||eL(e)?tf(e4(tl(ea,c([e],t,!0)))):0===t.length&&1===e.length&&"string"==typeof e[0]?e4(e):tf(e4(tl(e,t)))}var td=function(e){return function e(t,n,r){if(void 0===r&&(r=es),!n)throw Z(1,n);var o=function(e){for(var o=[],a=1;a<arguments.length;a++)o[a-1]=arguments[a];return t(n,r,tp.apply(void 0,c([e],o,!1)))};return o.attrs=function(o){return e(t,n,i(i({},r),{attrs:Array.prototype.concat(r.attrs,o).filter(Boolean)}))},o.withConfig=function(o){return e(t,n,i(i({},r),o))},o}(tu,e)};function th(){var e=this;this._emitSheetCSS=function(){var t=e.instance.toString();if(!t)return"";var n=eQ(),r=eO([n&&'nonce="'.concat(n,'"'),"".concat(Q,'="true"'),"".concat(J,'="').concat(K,'"')].filter(Boolean)," ");return"<style ".concat(r,">").concat(t,"</style>")},this.getStyleTags=function(){if(e.sealed)throw Z(2);return e._emitSheetCSS()},this.getStyleElement=function(){if(e.sealed)throw Z(2);var t,n=e.instance.toString();if(!n)return[];var o=((t={})[Q]="",t[J]=K,t.dangerouslySetInnerHTML={__html:n},t),a=eQ();return a&&(o.nonce=a),[r.default.createElement("style",i({},o,{key:"sc-0-0"}))]},this.seal=function(){e.sealed=!0},this.instance=new eZ({isServer:!0}),this.sealed=!1}function tg({lang:e,icon:t,onClick:o}){let[a,s]=(0,r.useState)(!1);return(0,n.jsx)(tm,{children:(0,n.jsx)("div",{className:"button-container",children:(0,n.jsxs)("a",{href:"#",onClick:t=>{t.preventDefault(),o(e),s(!a)},className:`brutalist-button button-2 ${a?"active":""}`,children:[(0,n.jsx)("div",{className:"openai-logo",children:(0,n.jsx)("img",{src:`https://icon.icepanel.io/Technology/svg/${t}.svg`,alt:"Next.js",className:"openai-icon"})}),(0,n.jsx)("div",{className:"button-text",children:(0,n.jsx)("span",{children:e})})]})})})}ei.forEach(function(e){td[e]=td(e)}),function(){function e(e,t){this.rules=e,this.componentId=t,this.isStatic=e3(e),eZ.registerId(this.componentId+1)}e.prototype.createStyles=function(e,t,n,r){var o=r(eO(e4(this.rules,t,n,r)),""),a=this.componentId+e;n.insertRules(a,a,o)},e.prototype.removeStyles=function(e,t){t.clearRules(this.componentId+e)},e.prototype.renderStyles=function(e,t,n,r){e>2&&eZ.registerId(this.componentId+e);var o=this.componentId+e;this.isStatic?n.hasNameForId(o,o)||this.createStyles(e,t,n,r):(this.removeStyles(e,n),this.createStyles(e,t,n,r))}}(),(function(e,n){var r=this;this[t]=!0,this.inject=function(e,t){void 0===t&&(t=tn);var n=r.name+t.hash;e.hasNameForId(r.id,n)||e.insertRules(r.id,n,t(r.rules,n,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=n,e$(this,function(){throw Z(12,String(r.name))})}).prototype.getName=function(e){return void 0===e&&(e=tn),this.name+e.hash},t=e1,th.prototype.collectStyles=function(e){if(this.sealed)throw Z(2);return r.default.createElement(ts,{sheet:this.instance},e)},th.prototype.interleaveWithNodeStream=function(e){throw Z(3)};let tm=td.div`
  .button-container {
    display: flex;
    justify-content: center;
    gap: 20px;
  }

  /* Common styles */
  .brutalist-button {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 142px;
    height: 142px;
    color: #e5dede;
    font-weight: bold;
    text-decoration: none;
    position: relative;
    cursor: pointer;
    overflow: hidden;
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  }

  /* Button 2 */
  .button-2 {
    width: 142px;
    height: 142px;
    background-color: #171A21;
    border: 3px solid #292E38;
    border-radius: 8px;
    padding: 14px 14px;
    box-shadow: 4px 4px 0px #000000;
    overflow: hidden;
    transition: all 0.3s ease;
    position: relative;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  /* Black circle animation */
  .button-2::before {
    content: "";
    position: absolute;
    left: 50%;
    bottom: -150%;
    width: 300%;
    height: 300%;
    background-color: #20252D;
    border-radius: 50%;
    transform: translateX(-50%) scale(0);
    transition: transform 0.5s ease-out;
  }

  /* Hover + clicked */
  .button-2:hover::before,
  .button-2.active::before {
    transform: translateX(-50%) scale(1);
    background-color: #6366F1;
  }

  /* Glass animation */
  .button-2::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 150%;
    height: 150%;
    background: linear-gradient(
      45deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.1) 25%,
      rgba(255, 255, 255, 0.2) 50%,
      rgba(255, 255, 255, 0.1) 75%,
      rgba(255, 255, 255, 0) 100%
    );
    transform: translateX(-100%) translateY(-100%) rotate(45deg);
    pointer-events: none;
    opacity: 0;
  }

  .button-2:hover::after {
    animation: glassPass 0.8s ease-in-out 0.5s forwards;
  }

  @keyframes glassPass {
    0% {
      transform: translateX(-100%) translateY(-100%) rotate(45deg);
      opacity: 0.7;
    }

    100% {
      transform: translateX(100%) translateY(100%) rotate(45deg);
      opacity: 0;
    }
  }

  /* Hover + clicked button movement */
  .button-2:hover,
  .button-2.active {
    transform: translate(-2px, -2px);
    box-shadow: 6px 6px 0px #000000;
    
  }

  /* Actual click/press effect */
  .button-2:active {
    transform: translate(2px, 2px);
    box-shadow: 2px 2px 0px #000000;
  }

  /* Keep content above pseudo-elements */
  .button-2 .openai-logo,
  .button-2 .button-text {
    position: relative;
    z-index: 1;
    transition: all 0.3s ease;
  }

  /* Logo */
  .openai-logo {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    z-index: 3;
  }

  /* Logo hover + active */
  .brutalist-button:hover .openai-logo,
  .brutalist-button.active .openai-logo {
    transform: translateY(-10px);
  }

  /* Icon */
  .openai-icon {
    width: 64px;
    height: 64px;
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  }

  /* Icon hover + active */
  .brutalist-button:hover .openai-icon,
  .brutalist-button.active .openai-icon {
    width: 40px;
    height: 40px;
    animation: spin-and-zoom
      2s cubic-bezier(0.25, 0.8, 0.25, 1) infinite;
  }

  /* OpenAI text */
  .openai-text {
    font-size: 24px;
    letter-spacing: 0.5px;
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    opacity: 0;
    max-height: 0;
    overflow: hidden;
  }

  /* Text hover + active */
  .brutalist-button:hover .openai-text,
  .brutalist-button.active .openai-text {
    opacity: 1;
    max-height: 60px;
    margin-top: 8px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  }

  /* Button text */
  .button-text {
    display: flex;
    flex-direction: column;
    align-items: center;
    line-height: 1.2;
    text-align: center;
    opacity: 0;
    max-height: 0;
    overflow: hidden;
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    z-index: 3;
  }

  /* Button text hover + active */
  .brutalist-button:hover .button-text,
  .brutalist-button.active .button-text {
    opacity: 1;
    max-height: 60px;
    margin-top: 8px;
  }

  .button-text span:first-child {
    font-size: 12px;
    font-weight: normal;
  }

  .button-text span:last-child {
    font-size: 16px;
  }

  
  /* Clicked icon/text */
  .brutalist-button:active .openai-icon,
  .brutalist-button:active .openai-text,
  .brutalist-button:active .button-text {
    transform: scale(0.95);
  }
`,ty=[{name:"JavaScript",category:"Language",icon:"JavaScript"},{name:"TypeScript",category:"Language",icon:"TypeScript"},{name:"Python",category:"Language",icon:"Python"},{name:"C",category:"Language",icon:"C"},{name:"C++",category:"Language",icon:"C%2B%2B-(CPlusPlus)"},{name:"C#",category:"Language",icon:"C%23-(CSharp)"},{name:"Java",category:"Language",icon:"Java"},{name:"Go",category:"Language",icon:"Go"},{name:"Rust",category:"Language",icon:"Rust"},{name:"PHP",category:"Language",icon:"PHP"},{name:"Ruby",category:"Language",icon:"Ruby"},{name:"Kotlin",category:"Language",icon:"Kotlin"},{name:"Swift",category:"Language",icon:"Swift"},{name:"Dart",category:"Language",icon:"Dart"},{name:"SQL",category:"Language",icon:"SQL-Developer"},{name:"React",category:"Frontend",icon:"React"},{name:"Next.js",category:"Frontend",icon:"Next.js"},{name:"Vue",category:"Frontend",icon:"Vue.js"},{name:"Angular",category:"Frontend",icon:"Angular"},{name:"Svelte",category:"Frontend",icon:"Svelte"},{name:"Tailwind CSS",category:"Frontend",icon:"Tailwind-CSS"},{name:"Bootstrap",category:"Frontend",icon:"Bootstrap"},{name:"Redux",category:"Frontend",icon:"Redux"},{name:"Vite",category:"Frontend",icon:"Vite"},{name:"Node.js",category:"Backend",icon:"Node.js"},{name:"Express",category:"Backend",icon:"Express"},{name:"NestJS",category:"Backend",icon:"Nest.js"},{name:"Django",category:"Backend",icon:"Django"},{name:"Flask",category:"Backend",icon:"Flask"},{name:"FastAPI",category:"Backend",icon:"FastAPI"},{name:"Spring Boot",category:"Backend",icon:"Spring"},{name:"Laravel",category:"Backend",icon:"Laravel"},{name:"ASP.NET",category:"Backend",icon:".NET"},{name:"PostgreSQL",category:"Database",icon:"PostgresSQL"},{name:"MySQL",category:"Database",icon:"MySQL"},{name:"SQLite",category:"Database",icon:"SQLite"},{name:"MongoDB",category:"Database",icon:"MongoDB"},{name:"Redis",category:"Database",icon:"Redis"},{name:"Flutter",category:"Mobile",icon:"Flutter"},{name:"PyTorch",category:"AI/ML",icon:"PyTorch"},{name:"TensorFlow",category:"AI/ML",icon:"TensorFlow"},{name:"NumPy",category:"AI/ML",icon:"NumPy"},{name:"Pandas",category:"AI/ML",icon:"Pandas"},{name:"OpenCV",category:"AI/ML",icon:"OpenCV"},{name:"Scikit-learn",category:"AI/ML",icon:"scikit-learn"},{name:"Jest",category:"Testing",icon:"Jest"},{name:"Vitest",category:"Testing",icon:"Vite.js"},{name:"Cypress",category:"Testing",icon:"Cypress"},{name:"Git",category:"DevOps",icon:"Git"},{name:"Docker",category:"DevOps",icon:"Docker"},{name:"Kubernetes",category:"DevOps",icon:"Kubernetes"},{name:"Terraform",category:"DevOps",icon:"HashiCorp-Terraform"},{name:"GraphQL",category:"API",icon:"GraphQL"},{name:"Socket.IO",category:"API",icon:"Socket.IO"},{name:"npm",category:"Tools",icon:"NPM"},{name:"Yarn",category:"Tools",icon:"Yarn"},{name:"Bun",category:"Tools",icon:"Bun"},{name:"CMake",category:"Tools",icon:"CMake"},{name:"Gradle",category:"Tools",icon:"Gradle"},{name:"Maven",category:"Tools",icon:"Apache-Maven"}];function tv(){let[e,t]=(0,r.useState)([]),[o,s]=(0,r.useState)([]),[i,c]=(0,r.useState)(!1);return(0,r.useEffect)(()=>{console.log(e)},[e]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:"logo text-2xl font-bold tracking-[-1px] flex justify-center",children:[(0,n.jsx)("span",{className:"text-[#F3F4F6]",children:"Jump"}),(0,n.jsx)("span",{className:"text-[#6366F1]",children:"Start"})]}),(0,n.jsx)("ul",{className:"flex justify-center items-center gap-4 m-8 flex-wrap h-fit",children:ty.map(e=>(0,n.jsx)(tg,{lang:e.name,icon:e.icon,onClick:()=>{var n;return n=e.name,void t(e=>e.includes(n)?e.filter(e=>e!==n):[...e,n])}},e.name))}),(0,n.jsx)("div",{className:"flex justify-center",children:(0,n.jsx)("button",{className:"bg-[#6366F1] color-[#FFFFFF] hover:bg-[#818CF8] rounded-lg font-semibold h-[47px] cursor-pointer text-base py-[12px] px-[24px] duration-200 hover:translate-y-[-1px] text-white",onClick:()=>{c(!0),s(e)},children:"Get Guide"})}),i&&(0,n.jsx)(a,{techs:o})]})}e.s(["default",()=>tv],71410)}]);