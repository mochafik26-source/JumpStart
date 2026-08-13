module.exports=[88947,(a,b,c)=>{b.exports=a.x("stream",()=>require("stream"))},10445,a=>{"use strict";var b,c=a.i(21596),d=a.i(51716);function e({guide:a}){return 0===a.length?(0,c.jsx)("p",{children:"Loading..."}):(0,c.jsx)("div",{className:"space-y-6 p-8",children:a.map(a=>(0,c.jsxs)("div",{className:"rounded-lg border-[#252B36] p-[16px] shadow bg-[#151922]",children:[(0,c.jsx)("h2",{className:"text-2xl font-bold text-[#F3F4F6]",children:a.name}),a.install.arch&&(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("h3",{className:"mt-4 mb-2 font-semibold text-[#9CA3AF]",children:"Arch Linux"}),a.install.arch.map((a,b)=>(0,c.jsx)("pre",{className:"bg-gray-900 text-green-400 p-3 rounded mb-2 overflow-x-auto bg-[#0B0F16] border-[#1E293B] text-[#4ADE80] py-[10px] px-[12px]",children:(0,c.jsx)("code",{children:a})},b))]})]},a.id))})}function f({techs:a}){let[b,f]=(0,d.useState)([]),[g,h]=(0,d.useState)(!0),[i,j]=(0,d.useState)("");return((0,d.useEffect)(()=>{!async function(){try{let b=await Promise.all(a.map(async a=>{let b=await fetch(`https://jumpstartapi-ngijizjj.b4a.run/${a}`);if(!b.ok)throw Error(`Failed to fetch ${a} (${b.status})`);return b.json()}));f(b)}catch(a){console.error(a),j("Failed to load guides.")}finally{h(!1)}}()},[a]),g)?(0,c.jsx)("p",{children:"Loading..."}):i?(0,c.jsx)("p",{className:"text-red-500",children:i}):(0,c.jsx)(e,{guide:b})}var g=function(){return(g=Object.assign||function(a){for(var b,c=1,d=arguments.length;c<d;c++)for(var e in b=arguments[c])Object.prototype.hasOwnProperty.call(b,e)&&(a[e]=b[e]);return a}).apply(this,arguments)};function h(a,b,c){if(c||2==arguments.length)for(var d,e=0,f=b.length;e<f;e++)!d&&e in b||(d||(d=Array.prototype.slice.call(b,0,e)),d[e]=b[e]);return a.concat(d||Array.prototype.slice.call(b))}"function"==typeof SuppressedError&&SuppressedError;Object.create(null);var i={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},j="-ms-",k="-moz-",l="-webkit-",m="comm",n="rule",o="decl",p="@keyframes",q=Math.abs,r=String.fromCharCode,s=Object.assign;function t(a,b){return(a=b.exec(a))?a[0]:a}function u(a,b,c){return a.replace(b,c)}function v(a,b,c){return a.indexOf(b,c)}function w(a,b){return 0|a.charCodeAt(b)}function x(a,b,c){return a.slice(b,c)}function y(a){return a.length}function z(a,b){return b.push(a),a}function A(a,b){return a.filter(function(a){return!t(a,b)})}var B=1,C=1,D=0,E=0,F=0,G="";function H(a,b,c,d,e,f,g,h){return{value:a,root:b,parent:c,type:d,props:e,children:f,line:B,column:C,length:g,return:"",siblings:h}}function I(a,b){return s(H("",null,null,"",null,null,0,a.siblings),a,{length:-a.length},b)}function J(a){for(;a.root;)a=I(a.root,{children:[a]});z(a,a.siblings)}function K(){return F=E<D?w(G,E++):0,C++,10===F&&(C=1,B++),F}function L(){return w(G,E)}function M(a){switch(a){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function N(a){var b,c;return(b=E-1,c=function a(b){for(;K();)switch(F){case b:return E;case 34:case 39:34!==b&&39!==b&&a(F);break;case 40:41===b&&a(b);break;case 92:K()}return E}(91===a?a+2:40===a?a+1:a),x(G,b,c)).trim()}function O(a,b){for(var c="",d=0;d<a.length;d++)c+=b(a[d],d,a,b)||"";return c}function P(a,b,c,d){switch(a.type){case"@layer":if(a.children.length)break;case"@import":case"@namespace":case o:return a.return=a.return||a.value;case m:return"";case p:return a.return=a.value+"{"+O(a.children,d)+"}";case n:if(!y(a.value=a.props.join(",")))return""}return y(c=O(a.children,d))?a.return=a.value+"{"+c+"}":""}function Q(a,b,c,d){if(a.length>-1&&!a.return)switch(a.type){case o:a.return=function a(b,c,d){var e;switch(e=c,45^w(b,0)?(((e<<2^w(b,0))<<2^w(b,1))<<2^w(b,2))<<2^w(b,3):0){case 5103:return l+"print-"+b+b;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return l+b+b;case 4855:return l+b.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+b;case 4789:return k+b+b;case 5349:case 4246:case 4810:case 6968:case 2756:return l+b+k+b+j+b+b;case 5936:switch(w(b,c+11)){case 114:return l+b+j+u(b,/[svh]\w+-[tblr]{2}/,"tb")+b;case 108:return l+b+j+u(b,/[svh]\w+-[tblr]{2}/,"tb-rl")+b;case 45:return l+b+j+u(b,/[svh]\w+-[tblr]{2}/,"lr")+b}case 6828:case 4268:case 2903:return l+b+j+b+b;case 6165:return l+b+j+"flex-"+b+b;case 5187:return l+b+u(b,/(\w+).+(:[^]+)/,l+"box-$1$2"+j+"flex-$1$2")+b;case 5443:return l+b+j+"flex-item-"+u(b,/flex-|-self/g,"")+(t(b,/flex-|baseline/)?"":j+"grid-row-"+u(b,/flex-|-self/g,""))+b;case 4675:return l+b+j+"flex-line-pack"+u(b,/align-content|flex-|-self/g,"")+b;case 5548:return l+b+j+u(b,"shrink","negative")+b;case 5292:return l+b+j+u(b,"basis","preferred-size")+b;case 6060:return l+"box-"+u(b,"-grow","")+l+b+j+u(b,"grow","positive")+b;case 4554:return l+u(b,/([^-])(transform)/g,"$1"+l+"$2")+b;case 6187:return u(u(u(b,/(zoom-|grab)/,l+"$1"),/(image-set)/,l+"$1"),b,"")+b;case 5495:case 3959:return u(b,/(image-set\([^]*)/,l+"$1$`$1");case 4968:return u(u(b,/(.+:)(flex-)?(.*)/,l+"box-pack:$3"+j+"flex-pack:$3"),/space-between/,"justify")+l+b+b;case 4200:if(!t(b,/flex-|baseline/))return j+"grid-column-align"+x(b,c)+b;break;case 2592:case 3360:return j+u(b,"template-","")+b;case 4384:case 3616:if(d&&d.some(function(a,b){return c=b,t(a.props,/grid-\w+-end/)}))return~v(b+(d=d[c].value),"span",0)?b:j+u(b,"-start","")+b+j+"grid-row-span:"+(~v(d,"span",0)?t(d,/\d+/):t(d,/\d+/)-t(b,/\d+/))+";";return j+u(b,"-start","")+b;case 4896:case 4128:return d&&d.some(function(a){return t(a.props,/grid-\w+-start/)})?b:j+u(u(b,"-end","-span"),"span ","")+b;case 4095:case 3583:case 4068:case 2532:return u(b,/(.+)-inline(.+)/,l+"$1$2")+b;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(y(b)-1-c>6)switch(w(b,c+1)){case 109:if(45!==w(b,c+4))break;case 102:return u(b,/(.+:)(.+)-([^]+)/,"$1"+l+"$2-$3$1"+k+(108==w(b,c+3)?"$3":"$2-$3"))+b;case 115:return~v(b,"stretch",0)?a(u(b,"stretch","fill-available"),c,d)+b:b}break;case 5152:case 5920:return u(b,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(a,c,d,e,f,g,h){return j+c+":"+d+h+(e?j+c+"-span:"+(f?g:g-d)+h:"")+b});case 4949:if(121===w(b,c+6))return u(b,":",":"+l)+b;break;case 6444:switch(w(b,45===w(b,14)?18:11)){case 120:return u(b,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+l+(45===w(b,14)?"inline-":"")+"box$3$1"+l+"$2$3$1"+j+"$2box$3")+b;case 100:return u(b,":",":"+j)+b}break;case 5719:case 2647:case 2135:case 3927:case 2391:return u(b,"scroll-","scroll-snap-")+b}return b}(a.value,a.length,c);return;case p:return O([I(a,{value:u(a.value,"@","@"+l)})],d);case n:if(a.length){var e,f;return e=c=a.props,f=function(b){switch(t(b,d=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":J(I(a,{props:[u(b,/:(read-\w+)/,":"+k+"$1")]})),J(I(a,{props:[b]})),s(a,{props:A(c,d)});break;case"::placeholder":J(I(a,{props:[u(b,/:(plac\w+)/,":"+l+"input-$1")]})),J(I(a,{props:[u(b,/:(plac\w+)/,":"+k+"$1")]})),J(I(a,{props:[u(b,/:(plac\w+)/,j+"input-$1")]})),J(I(a,{props:[b]})),s(a,{props:A(c,d)})}return""},e.map(f).join("")}}}function R(a,b,c,d,e,f,g,h,i,j,k,l){for(var m=e-1,o=0===e?f:[""],p=o.length,r=0,s=0,t=0;r<d;++r)for(var v=0,w=x(a,m+1,m=q(s=g[r])),y=a;v<p;++v)(y=(s>0?o[v]+" "+w:u(w,/&\f/g,o[v])).trim())&&(i[t++]=y);return H(a,b,c,0===e?n:h,i,j,k,l)}function S(a,b,c,d,e){return H(a,b,c,o,x(a,0,d),x(a,d+1,-1),d,e)}var T="u">typeof process&&void 0!==process.env&&(process.env.REACT_APP_SC_ATTR||process.env.SC_ATTR)||"data-styled",U="active",V="data-styled-version",W="6.3.12",X="/*!sc*/\n",Y=void 0===d.default.createContext,Z=!!("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:"u">typeof process&&void 0!==process.env&&void 0!==process.env.REACT_APP_SC_DISABLE_SPEEDY&&""!==process.env.REACT_APP_SC_DISABLE_SPEEDY?"false"!==process.env.REACT_APP_SC_DISABLE_SPEEDY&&process.env.REACT_APP_SC_DISABLE_SPEEDY:"u">typeof process&&void 0!==process.env&&void 0!==process.env.SC_DISABLE_SPEEDY&&""!==process.env.SC_DISABLE_SPEEDY&&"false"!==process.env.SC_DISABLE_SPEEDY&&process.env.SC_DISABLE_SPEEDY);function $(a){for(var b=[],c=1;c<arguments.length;c++)b[c-1]=arguments[c];return Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(a," for more information.").concat(b.length>0?" Args: ".concat(b.join(", ")):""))}var _=new Map,aa=new Map,ab=1,ac=function(a){if(_.has(a))return _.get(a);for(;aa.has(ab);)ab++;var b=ab++;return _.set(a,b),aa.set(b,a),b},ad=Object.freeze([]),ae=Object.freeze({}),af=new Set(["a","abbr","address","area","article","aside","audio","b","bdi","bdo","blockquote","body","button","br","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","slot","small","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tspan","use"]),ag=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,ah=/(^-|-$)/g;function ai(a){return a.replace(ag,"-").replace(ah,"")}var aj=/(a)(d)/gi,ak=function(a){return String.fromCharCode(a+(a>25?39:97))};function al(a){var b,c="";for(b=Math.abs(a);b>52;b=b/52|0)c=ak(b%52)+c;return(ak(b%52)+c).replace(aj,"$1-$2")}var am,an=function(a,b){for(var c=b.length;c;)a=33*a^b.charCodeAt(--c);return a},ao=function(a){return an(5381,a)};function ap(a){return"string"==typeof a}var aq="function"==typeof Symbol&&Symbol.for,ar=aq?Symbol.for("react.memo"):60115,as=aq?Symbol.for("react.forward_ref"):60112,at={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},au={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},av={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},aw=((am={})[as]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},am[ar]=av,am);function ax(a){return("type"in a&&a.type.$$typeof)===ar?av:"$$typeof"in a?aw[a.$$typeof]:at}var ay=Object.defineProperty,az=Object.getOwnPropertyNames,aA=Object.getOwnPropertySymbols,aB=Object.getOwnPropertyDescriptor,aC=Object.getPrototypeOf,aD=Object.prototype;function aE(a){return"function"==typeof a}function aF(a){return"object"==typeof a&&"styledComponentId"in a}function aG(a,b){return a&&b?"".concat(a," ").concat(b):a||b||""}function aH(a,b){return a.join(b||"")}function aI(a){return null!==a&&"object"==typeof a&&a.constructor.name===Object.name&&!("props"in a&&a.$$typeof)}function aJ(a,b){Object.defineProperty(a,"toString",{value:b})}var aK=function(){function a(a){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=a,this._cGroup=0,this._cIndex=0}return a.prototype.indexOfGroup=function(a){if(a===this._cGroup)return this._cIndex;var b=this._cIndex;if(a>this._cGroup)for(var c=this._cGroup;c<a;c++)b+=this.groupSizes[c];else for(c=this._cGroup-1;c>=a;c--)b-=this.groupSizes[c];return this._cGroup=a,this._cIndex=b,b},a.prototype.insertRules=function(a,b){if(a>=this.groupSizes.length){for(var c=this.groupSizes,d=c.length,e=d;a>=e;)if((e<<=1)<0)throw $(16,"".concat(a));this.groupSizes=new Uint32Array(e),this.groupSizes.set(c),this.length=e;for(var f=d;f<e;f++)this.groupSizes[f]=0}for(var g=this.indexOfGroup(a+1),h=0,i=(f=0,b.length);f<i;f++)this.tag.insertRule(g,b[f])&&(this.groupSizes[a]++,g++,h++);h>0&&this._cGroup>a&&(this._cIndex+=h)},a.prototype.clearGroup=function(a){if(a<this.length){var b=this.groupSizes[a],c=this.indexOfGroup(a),d=c+b;this.groupSizes[a]=0;for(var e=c;e<d;e++)this.tag.deleteRule(c);b>0&&this._cGroup>a&&(this._cIndex-=b)}},a.prototype.getGroup=function(a){var b="";if(a>=this.length||0===this.groupSizes[a])return b;for(var c=this.groupSizes[a],d=this.indexOfGroup(a),e=d+c,f=d;f<e;f++)b+=this.tag.getRule(f)+X;return b},a}(),aL="style[".concat(T,"][").concat(V,'="').concat(W,'"]'),aM=new RegExp("^".concat(T,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'));function aN(){return"u">typeof __webpack_nonce__?__webpack_nonce__:null}var aO=function(a){var b,c=document.head,d=a||c,e=document.createElement("style"),f=(b=Array.from(d.querySelectorAll("style[".concat(T,"]"))))[b.length-1],g=void 0!==f?f.nextSibling:null;e.setAttribute(T,U),e.setAttribute(V,W);var h=aN();return h&&e.setAttribute("nonce",h),d.insertBefore(e,g),e},aP=function(){function a(a){this.element=aO(a),this.element.appendChild(document.createTextNode("")),this.sheet=function(a){var b;if(a.sheet)return a.sheet;for(var c=null!=(b=a.getRootNode().styleSheets)?b:document.styleSheets,d=0,e=c.length;d<e;d++){var f=c[d];if(f.ownerNode===a)return f}throw $(17)}(this.element),this.length=0}return a.prototype.insertRule=function(a,b){try{return this.sheet.insertRule(b,a),this.length++,!0}catch(a){return!1}},a.prototype.deleteRule=function(a){this.sheet.deleteRule(a),this.length--},a.prototype.getRule=function(a){var b=this.sheet.cssRules[a];return b&&b.cssText?b.cssText:""},a}(),aQ=function(){function a(a){this.element=aO(a),this.nodes=this.element.childNodes,this.length=0}return a.prototype.insertRule=function(a,b){if(a<=this.length&&a>=0){var c=document.createTextNode(b);return this.element.insertBefore(c,this.nodes[a]||null),this.length++,!0}return!1},a.prototype.deleteRule=function(a){this.element.removeChild(this.nodes[a]),this.length--},a.prototype.getRule=function(a){return a<this.length?this.nodes[a].textContent:""},a}(),aR=function(){function a(a){this.rules=[],this.length=0}return a.prototype.insertRule=function(a,b){return a<=this.length&&(a===this.length?this.rules.push(b):this.rules.splice(a,0,b),this.length++,!0)},a.prototype.deleteRule=function(a){this.rules.splice(a,1),this.length--},a.prototype.getRule=function(a){return a<this.length?this.rules[a]:""},a}(),aS={isServer:!0,useCSSOMInjection:!Z},aT=function(){function a(a,b,c){void 0===a&&(a=ae),void 0===b&&(b={});var d=this;this.options=g(g({},aS),a),this.gs=b,this.names=new Map(c),this.server=!!a.isServer,this.server,aJ(this,function(){for(var a=d.getTag(),b=a.length,c="",e=0;e<b;e++)!function(b){var e=aa.get(b);if(void 0===e)return;var f=d.names.get(e);if(void 0===f||!f.size)return;var g=a.getGroup(b);if(0!==g.length){var h=T+".g"+b+'[id="'+e+'"]',i="";f.forEach(function(a){a.length>0&&(i+=a+",")}),c+=g+h+'{content:"'+i+'"}'+X}}(e);return c})}return a.registerId=function(a){return ac(a)},a.prototype.rehydrate=function(){this.server},a.prototype.reconstructWithOptions=function(b,c){void 0===c&&(c=!0);var d=new a(g(g({},this.options),b),this.gs,c&&this.names||void 0);return!this.server,d},a.prototype.allocateGSInstance=function(a){return this.gs[a]=(this.gs[a]||0)+1},a.prototype.getTag=function(){var a,b,c;return this.tag||(this.tag=(b=(a=this.options).useCSSOMInjection,c=a.target,new aK(a.isServer?new aR(c):b?new aP(c):new aQ(c))))},a.prototype.hasNameForId=function(a,b){var c,d;return null!=(d=null==(c=this.names.get(a))?void 0:c.has(b))&&d},a.prototype.registerName=function(a,b){ac(a);var c=this.names.get(a);c?c.add(b):this.names.set(a,new Set([b]))},a.prototype.insertRules=function(a,b,c){this.registerName(a,b),this.getTag().insertRules(ac(a),c)},a.prototype.clearNames=function(a){this.names.has(a)&&this.names.get(a).clear()},a.prototype.clearRules=function(a){this.getTag().clearGroup(ac(a)),this.clearNames(a)},a.prototype.clearTag=function(){this.tag=void 0},a}();function aU(a){for(var b="",c=0;c<a.length;c++){var d=a[c];if(1===c&&"-"===d&&"-"===a[0])return a;d>="A"&&d<="Z"?b+="-"+d.toLowerCase():b+=d}return b.startsWith("ms-")?"-"+b:b}var aV=Symbol.for("sc-keyframes"),aW=function(a){return null==a||!1===a||""===a},aX=function(a){var b=[];for(var c in a){var d=a[c];a.hasOwnProperty(c)&&!aW(d)&&(Array.isArray(d)&&d.isCss||aE(d)?b.push("".concat(aU(c),":"),d,";"):aI(d)?b.push.apply(b,h(h(["".concat(c," {")],aX(d),!1),["}"],!1)):b.push("".concat(aU(c),": ").concat(null==d||"boolean"==typeof d||""===d?"":"number"!=typeof d||0===d||c in i||c.startsWith("--")?String(d).trim():"".concat(d,"px"),";")))}return b};function aY(a,b,c,d,e){if(void 0===e&&(e=[]),"string"==typeof a)return a&&e.push(a),e;if(aW(a))return e;if(aF(a))return e.push(".".concat(a.styledComponentId)),e;if(aE(a))return!aE(a)||a.prototype&&a.prototype.isReactComponent||!b?(e.push(a),e):aY(a(b),b,c,d,e);if("object"==typeof a&&null!==a&&aV in a)return c?(a.inject(c,d),e.push(a.getName(d))):e.push(a),e;if(aI(a)){for(var f=aX(a),g=0;g<f.length;g++)e.push(f[g]);return e}if(!Array.isArray(a))return e.push(a.toString()),e;for(g=0;g<a.length;g++)aY(a[g],b,c,d,e);return e}function aZ(a){for(var b=0;b<a.length;b+=1){var c=a[b];if(aE(c)&&!aF(c))return!1}return!0}var a$=ao(W),a_=function(){function a(a,b,c){this.rules=a,this.staticRulesId="",this.isStatic=(void 0===c||c.isStatic)&&aZ(a),this.componentId=b,this.baseHash=an(a$,b),this.baseStyle=c,aT.registerId(b)}return a.prototype.generateAndInjectStyles=function(a,b,c){var d=this.baseStyle?this.baseStyle.generateAndInjectStyles(a,b,c).className:"";if(this.isStatic&&!c.hash)if(this.staticRulesId&&b.hasNameForId(this.componentId,this.staticRulesId))d=aG(d,this.staticRulesId);else{var e=aH(aY(this.rules,a,b,c)),f=al(an(this.baseHash,e)>>>0);if(!b.hasNameForId(this.componentId,f)){var g=c(e,".".concat(f),void 0,this.componentId);b.insertRules(this.componentId,f,g)}d=aG(d,f),this.staticRulesId=f}else{for(var h=an(this.baseHash,c.hash),i="",j=0;j<this.rules.length;j++){var k=this.rules[j];if("string"==typeof k)i+=k;else if(k){var l=aH(aY(k,a,b,c));h=an(an(h,String(j)),l),i+=l}}if(i){var m=al(h>>>0);if(!b.hasNameForId(this.componentId,m)){var n=c(i,".".concat(m),void 0,this.componentId);b.insertRules(this.componentId,m,n)}d=aG(d,m)}}return{className:d,css:b.getTag().getGroup(ac(this.componentId))}},a}(),a0=/&/g;function a1(a){if(-1===a.indexOf("}"))return!1;for(var b=a.length,c=0,d=0,e=!1,f=0;f<b;f++){var g=a.charCodeAt(f);if(0!==d||e||47!==g||42!==a.charCodeAt(f+1))if(e)42===g&&47===a.charCodeAt(f+1)&&(e=!1,f++);else if(34!==g&&39!==g||0!==f&&92===a.charCodeAt(f-1)){if(0===d){if(123===g)c++;else if(125===g&&--c<0)return!0}}else 0===d?d=g:d===g&&(d=0);else e=!0,f++}return 0!==c||0!==d}function a2(a){var b,c,d,e,f,g,h=void 0===a?ae:a,i=h.options,j=void 0===i?ae:i,k=h.plugins,l=void 0===k?ad:k,o=function(a,b,c){return c.startsWith(f)&&c.endsWith(f)&&c.replaceAll(f,"").length>0?".".concat(e):a},p=l.slice();p.push(function(a){a.type===n&&a.value.includes("&")&&(g||(g=RegExp("\\".concat(f,"\\b"),"g")),a.props[0]=a.props[0].replace(a0,f).replace(g,o))}),j.prefix&&p.push(Q),p.push(P);var s=[],t=(c=(b=p.concat((d=function(a){return s.push(a)},function(a){!a.root&&(a=a.return)&&d(a)}))).length,function(a,d,e,f){for(var g="",h=0;h<c;h++)g+=b[h](a,d,e,f)||"";return g}),A=function(a,b,c,d){void 0===b&&(b=""),void 0===c&&(c=""),void 0===d&&(d="&"),e=d,f=b,g=void 0;var h,i,k,l=function(a){if(!a1(a))return a;for(var b=a.length,c="",d=0,e=0,f=0,g=!1,h=0;h<b;h++){var i=a.charCodeAt(h);if(0!==f||g||47!==i||42!==a.charCodeAt(h+1))if(g)42===i&&47===a.charCodeAt(h+1)&&(g=!1,h++);else if(34!==i&&39!==i||0!==h&&92===a.charCodeAt(h-1)){if(0===f)if(123===i)e++;else if(125===i){if(--e<0){for(var j=h+1;j<b;){var k=a.charCodeAt(j);if(59===k||10===k)break;j++}j<b&&59===a.charCodeAt(j)&&j++,e=0,h=j-1,d=j;continue}0===e&&(c+=a.substring(d,h+1),d=h+1)}else 59===i&&0===e&&(c+=a.substring(d,h+1),d=h+1)}else 0===f?f=i:f===i&&(f=0);else g=!0,h++}if(d<b){var l=a.substring(d);a1(l)||(c+=l)}return c}(function(a){if(-1===a.indexOf("//"))return a;for(var b=a.length,c=[],d=0,e=0,f=0,g=0;e<b;){var h=a.charCodeAt(e);if(34!==h&&39!==h||0!==e&&92===a.charCodeAt(e-1))if(0===f)if(47===h&&e+1<b&&42===a.charCodeAt(e+1)){for(e+=2;e+1<b&&(42!==a.charCodeAt(e)||47!==a.charCodeAt(e+1));)e++;e+=2}else if(40===h&&e>=3&&108==(32|a.charCodeAt(e-1))&&114==(32|a.charCodeAt(e-2))&&117==(32|a.charCodeAt(e-3)))g=1,e++;else if(g>0)41===h?g--:40===h&&g++,e++;else if(42===h&&e+1<b&&47===a.charCodeAt(e+1))e>d&&c.push(a.substring(d,e)),d=e+=2;else if(47===h&&e+1<b&&47===a.charCodeAt(e+1)){for(e>d&&c.push(a.substring(d,e));e<b&&10!==a.charCodeAt(e);)e++;d=e}else e++;else e++;else 0===f?f=h:f===h&&(f=0),e++}return 0===d?a:(d<b&&c.push(a.substring(d)),c.join(""))}(a)),n=(k=function a(b,c,d,e,f,g,h,i,j){for(var k,l,n,o,p=0,s=0,t=h,A=0,D=0,I=0,J=1,O=1,P=1,Q=0,T="",U=f,V=g,W=e,X=T;O;)switch(I=Q,Q=K()){case 40:if(108!=I&&58==w(X,t-1)){-1!=v(X+=u(N(Q),"&","&\f"),"&\f",q(p?i[p-1]:0))&&(P=-1);break}case 34:case 39:case 91:X+=N(Q);break;case 9:case 10:case 13:case 32:X+=function(a){for(;F=L();)if(F<33)K();else break;return M(a)>2||M(F)>3?"":" "}(I);break;case 92:X+=function(a,b){for(var c;--b&&K()&&!(F<48)&&!(F>102)&&(!(F>57)||!(F<65))&&(!(F>70)||!(F<97)););return c=E+(b<6&&32==L()&&32==K()),x(G,a,c)}(E-1,7);continue;case 47:switch(L()){case 42:case 47:z((k=function(a,b){for(;K();)if(a+F===57)break;else if(a+F===84&&47===L())break;return"/*"+x(G,b,E-1)+"*"+r(47===a?a:K())}(K(),E),l=c,n=d,o=j,H(k,l,n,m,r(F),x(k,2,-2),0,o)),j),(5==M(I||1)||5==M(L()||1))&&y(X)&&" "!==x(X,-1,void 0)&&(X+=" ");break;default:X+="/"}break;case 123*J:i[p++]=y(X)*P;case 125*J:case 59:case 0:switch(Q){case 0:case 125:O=0;case 59+s:-1==P&&(X=u(X,/\f/g,"")),D>0&&(y(X)-t||0===J&&47===I)&&z(D>32?S(X+";",e,d,t-1,j):S(u(X," ","")+";",e,d,t-2,j),j);break;case 59:X+=";";default:if(z(W=R(X,c,d,p,s,f,i,T,U=[],V=[],t,g),g),123===Q)if(0===s)a(X,c,W,W,U,g,t,i,V);else{switch(A){case 99:if(110===w(X,3))break;case 108:if(97===w(X,2))break;default:s=0;case 100:case 109:case 115:}s?a(b,W,W,e&&z(R(b,W,W,0,0,f,i,T,f,U=[],t,V),V),f,V,t,i,e?U:V):a(X,W,W,W,[""],V,0,i,V)}}p=s=D=0,J=P=1,T=X="",t=h;break;case 58:t=1+y(X),D=I;default:if(J<1){if(123==Q)--J;else if(125==Q&&0==J++&&125==(F=E>0?w(G,--E):0,C--,10===F&&(C=1,B--),F))continue}switch(X+=r(Q),Q*J){case 38:P=s>0?1:(X+="\f",-1);break;case 44:i[p++]=(y(X)-1)*P,P=1;break;case 64:45===L()&&(X+=N(K())),A=L(),s=t=y(T=X+=function(a){for(;!M(L());)K();return x(G,a,E)}(E)),Q++;break;case 45:45===I&&2==y(X)&&(J=0)}}return g}("",null,null,null,[""],(i=h=c||b?"".concat(c," ").concat(b," { ").concat(l," }"):l,B=C=1,D=y(G=i),E=0,h=[]),0,[0],h),G="",k);return j.namespace&&(n=function a(b,c){return b.map(function(b){return"rule"===b.type&&(b.value="".concat(c," ").concat(b.value),b.value=b.value.replaceAll(",",",".concat(c," ")),b.props=b.props.map(function(a){return"".concat(c," ").concat(a)})),Array.isArray(b.children)&&"@keyframes"!==b.type&&(b.children=a(b.children,c)),b})}(n,j.namespace)),s=[],O(n,t),s};return A.hash=l.length?l.reduce(function(a,b){return b.name||$(15),an(a,b.name)},5381).toString():"",A}var a3=new aT,a4=a2(),a5={shouldForwardProp:void 0,styleSheet:a3,stylis:a4},a6=Y?{Provider:function(a){return a.children},Consumer:function(a){return(0,a.children)(a5)}}:d.default.createContext(a5),a7=(a6.Consumer,Y?{Provider:function(a){return a.children},Consumer:function(a){return(0,a.children)(void 0)}}:d.default.createContext(void 0));function a8(){return Y?a5:d.default.useContext(a6)}function a9(a){if(Y||!d.default.useMemo)return a.children;var b=a8().styleSheet,c=d.default.useMemo(function(){var c=b;return a.sheet?c=a.sheet:a.target&&(c=c.reconstructWithOptions({target:a.target},!1)),a.disableCSSOMInjection&&(c=c.reconstructWithOptions({useCSSOMInjection:!1})),c},[a.disableCSSOMInjection,a.sheet,a.target,b]),e=d.default.useMemo(function(){return a2({options:{namespace:a.namespace,prefix:a.enableVendorPrefixes},plugins:a.stylisPlugins})},[a.enableVendorPrefixes,a.namespace,a.stylisPlugins]),f=d.default.useMemo(function(){return{shouldForwardProp:a.shouldForwardProp,styleSheet:c,stylis:e}},[a.shouldForwardProp,c,e]);return d.default.createElement(a6.Provider,{value:f},d.default.createElement(a7.Provider,{value:e},a.children))}var ba=Y?{Provider:function(a){return a.children},Consumer:function(a){return(0,a.children)(void 0)}}:d.default.createContext(void 0);ba.Consumer;var bb={};function bc(a,b,c){var e,f,i,j,k=aF(a),l=!ap(a),m=b.attrs,n=void 0===m?ad:m,o=b.componentId,p=void 0===o?(e=b.displayName,f=b.parentComponentId,bb[i="string"!=typeof e?"sc":ai(e)]=(bb[i]||0)+1,j="".concat(i,"-").concat(al(ao(W+i+bb[i])>>>0)),f?"".concat(f,"-").concat(j):j):o,q=b.displayName,r=void 0===q?ap(a)?"styled.".concat(a):"Styled(".concat(a.displayName||a.name||"Component",")"):q,s=b.displayName&&b.componentId?"".concat(ai(b.displayName),"-").concat(b.componentId):b.componentId||p,t=k&&a.attrs?a.attrs.concat(n).filter(Boolean):n,u=b.shouldForwardProp;if(k&&a.shouldForwardProp){var v=a.shouldForwardProp;if(b.shouldForwardProp){var w=b.shouldForwardProp;u=function(a,b){return v(a,b)&&w(a,b)}}else u=v}var x=new a_(c,s,k?a.componentStyle:void 0);function y(a,b){return function(a,b,c){var e,f,i=a.attrs,j=a.componentStyle,k=a.defaultProps,l=a.foldedComponentIds,m=a.styledComponentId,n=a.target,o=Y?void 0:d.default.useContext(ba),p=a8(),q=a.shouldForwardProp||p.shouldForwardProp,r=(void 0===(e=k)&&(e=ae),b.theme!==e.theme&&b.theme||o||e.theme||(Y?void 0:ae)),s=function(a,b,c){for(var d,e=g(g({},b),{className:void 0,theme:c}),f=0;f<a.length;f+=1){var h=aE(d=a[f])?d(e):d;for(var i in h)"className"===i?e.className=aG(e.className,h[i]):"style"===i?e.style=g(g({},e.style),h[i]):i in b&&void 0===b[i]||(e[i]=h[i])}return"className"in b&&"string"==typeof b.className&&(e.className=aG(e.className,b.className)),e}(i,b,r),t=s.as||n,u={};for(var v in s)void 0===s[v]||"$"===v[0]||"as"===v||"theme"===v&&s.theme===r||("forwardedAs"===v?u.as=s.forwardedAs:q&&!q(v,t)||(u[v]=s[v]));var w=(f=a8(),j.generateAndInjectStyles(s,f.styleSheet,f.stylis)).className,x=aG(l,m);w&&(x+=" "+w),s.className&&(x+=" "+s.className),u[ap(t)&&!af.has(t)?"class":"className"]=x,c&&(u.ref=c);var y=(0,d.createElement)(t,u);if(Y){for(var z=[],A=j;A;)!function(){var a=p.styleSheet.getTag().getGroup(ac(A.componentId));if(a){var b="",c=p.styleSheet.names.get(A.componentId);c&&c.forEach(function(a){b&&(b+="_"),b+=a}),z.push(d.default.createElement("style",{key:"sc-".concat(A.componentId),precedence:"styled-components",href:"sc-".concat(A.componentId,"-").concat(b),children:a}))}A=A.baseStyle}();if(z.length)return z.reverse(),d.default.createElement.apply(d.default,h(h([d.default.Fragment,null],z,!1),[y],!1))}return y}(z,a,b)}y.displayName=r;var z=d.default.forwardRef(y);return z.attrs=t,z.componentStyle=x,z.displayName=r,z.shouldForwardProp=u,z.foldedComponentIds=k?aG(a.foldedComponentIds,a.styledComponentId):"",z.styledComponentId=s,z.target=k?a.target:a,Object.defineProperty(z,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(b){this._foldedDefaultProps=k?function(a){for(var b=[],c=1;c<arguments.length;c++)b[c-1]=arguments[c];for(var d=0;d<b.length;d++)!function a(b,c,d){if(void 0===d&&(d=!1),!d&&!aI(b)&&!Array.isArray(b))return c;if(Array.isArray(c))for(var e=0;e<c.length;e++)b[e]=a(b[e],c[e]);else if(aI(c))for(var e in c)b[e]=a(b[e],c[e]);return b}(a,b[d],!0);return a}({},a.defaultProps,b):b}}),aJ(z,function(){return".".concat(z.styledComponentId)}),l&&function a(b,c,d){if("string"!=typeof c){if(aD){var e=aC(c);e&&e!==aD&&a(b,e,d)}var f=az(c);aA&&(f=f.concat(aA(c)));for(var g=ax(b),h=ax(c),i=0;i<f.length;++i){var j=f[i];if(!(j in au||d&&d[j]||h&&j in h||g&&j in g)){var k=aB(c,j);try{ay(b,j,k)}catch(a){}}}}return b}(z,a,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),z}function bd(a,b){for(var c=[a[0]],d=0,e=b.length;d<e;d+=1)c.push(b[d],a[d+1]);return c}var be=function(a){return Object.assign(a,{isCss:!0})};function bf(a){for(var b=[],c=1;c<arguments.length;c++)b[c-1]=arguments[c];return aE(a)||aI(a)?be(aY(bd(ad,h([a],b,!0)))):0===b.length&&1===a.length&&"string"==typeof a[0]?aY(a):be(aY(bd(a,b)))}var bg=function(a){return function a(b,c,d){if(void 0===d&&(d=ae),!c)throw $(1,c);var e=function(a){for(var e=[],f=1;f<arguments.length;f++)e[f-1]=arguments[f];return b(c,d,bf.apply(void 0,h([a],e,!1)))};return e.attrs=function(e){return a(b,c,g(g({},d),{attrs:Array.prototype.concat(d.attrs,e).filter(Boolean)}))},e.withConfig=function(e){return a(b,c,g(g({},d),e))},e}(bc,a)};af.forEach(function(a){bg[a]=bg(a)}),function(){function a(a,b){this.rules=a,this.componentId=b,this.isStatic=aZ(a),aT.registerId(this.componentId+1)}a.prototype.createStyles=function(a,b,c,d){var e=d(aH(aY(this.rules,b,c,d)),""),f=this.componentId+a;c.insertRules(f,f,e)},a.prototype.removeStyles=function(a,b){b.clearRules(this.componentId+a)},a.prototype.renderStyles=function(a,b,c,d){a>2&&aT.registerId(this.componentId+a);var e=this.componentId+a;this.isStatic?c.hasNameForId(e,e)||this.createStyles(a,b,c,d):(this.removeStyles(a,c),this.createStyles(a,b,c,d))}}(),(function(a,c){var d=this;this[b]=!0,this.inject=function(a,b){void 0===b&&(b=a4);var c=d.name+b.hash;a.hasNameForId(d.id,c)||a.insertRules(d.id,c,b(d.rules,c,"@keyframes"))},this.name=a,this.id="sc-keyframes-".concat(a),this.rules=c,aJ(this,function(){throw $(12,String(d.name))})}).prototype.getName=function(a){return void 0===a&&(a=a4),this.name+a.hash},b=aV;var bh=/^\s*<\/[a-z]/i;function bi(){var a=this;this._emitSheetCSS=function(){var b=a.instance.toString();if(!b)return"";var c=aN(),d=aH([c&&'nonce="'.concat(c,'"'),"".concat(T,'="true"'),"".concat(V,'="').concat(W,'"')].filter(Boolean)," ");return"<style ".concat(d,">").concat(b,"</style>")},this.getStyleTags=function(){if(a.sealed)throw $(2);return a._emitSheetCSS()},this.getStyleElement=function(){if(a.sealed)throw $(2);var b,c=a.instance.toString();if(!c)return[];var e=((b={})[T]="",b[V]=W,b.dangerouslySetInnerHTML={__html:c},b),f=aN();return f&&(e.nonce=f),[d.default.createElement("style",g({},e,{key:"sc-0-0"}))]},this.seal=function(){a.sealed=!0},this.instance=new aT({isServer:!0}),this.sealed=!1}function bj({lang:a,icon:b,onClick:e}){let[f,g]=(0,d.useState)(!1);return(0,c.jsx)(bk,{children:(0,c.jsx)("div",{className:"button-container",children:(0,c.jsxs)("a",{href:"#",onClick:b=>{b.preventDefault(),e(a),g(!f)},className:`brutalist-button button-2 ${f?"active":""}`,children:[(0,c.jsx)("div",{className:"openai-logo",children:(0,c.jsx)("img",{src:`https://icon.icepanel.io/Technology/svg/${b}.svg`,alt:"Next.js",className:"openai-icon"})}),(0,c.jsx)("div",{className:"button-text",children:(0,c.jsx)("span",{children:a})})]})})})}bi.prototype.collectStyles=function(a){if(this.sealed)throw $(2);return d.default.createElement(a9,{sheet:this.instance},a)},bi.prototype.interleaveWithNodeStream=function(b){if(this.sealed)throw $(2);this.seal();var c=a.r(88947).Transform,d=this.instance,e=this._emitSheetCSS,f=new c({transform:function(a,b,c){var f=a.toString(),g=e();if(d.clearTag(),bh.test(f)){var h=f.indexOf(">")+1,i=f.slice(0,h),j=f.slice(h);this.push(i+g+j)}else this.push(g+f);c()}});if("on"in b&&"function"==typeof b.on&&"pipe"in b)return b.on("error",function(a){f.emit("error",a)}),b.pipe(f);if("pipe"in b&&"function"==typeof b.pipe)return b.pipe(f);throw Error("Unsupported stream type")};let bk=bg.div`
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
`,bl=[{name:"JavaScript",category:"Language",icon:"JavaScript"},{name:"TypeScript",category:"Language",icon:"TypeScript"},{name:"Python",category:"Language",icon:"Python"},{name:"C",category:"Language",icon:"C"},{name:"C++",category:"Language",icon:"C%2B%2B-(CPlusPlus)"},{name:"C#",category:"Language",icon:"C%23-(CSharp)"},{name:"Java",category:"Language",icon:"Java"},{name:"Go",category:"Language",icon:"Go"},{name:"Rust",category:"Language",icon:"Rust"},{name:"PHP",category:"Language",icon:"PHP"},{name:"Ruby",category:"Language",icon:"Ruby"},{name:"Kotlin",category:"Language",icon:"Kotlin"},{name:"Swift",category:"Language",icon:"Swift"},{name:"Dart",category:"Language",icon:"Dart"},{name:"SQL",category:"Language",icon:"SQL-Developer"},{name:"React",category:"Frontend",icon:"React"},{name:"Next.js",category:"Frontend",icon:"Next.js"},{name:"Vue",category:"Frontend",icon:"Vue.js"},{name:"Angular",category:"Frontend",icon:"Angular"},{name:"Svelte",category:"Frontend",icon:"Svelte"},{name:"Tailwind CSS",category:"Frontend",icon:"Tailwind-CSS"},{name:"Bootstrap",category:"Frontend",icon:"Bootstrap"},{name:"Redux",category:"Frontend",icon:"Redux"},{name:"Vite",category:"Frontend",icon:"Vite"},{name:"Node.js",category:"Backend",icon:"Node.js"},{name:"Express",category:"Backend",icon:"Express"},{name:"NestJS",category:"Backend",icon:"Nest.js"},{name:"Django",category:"Backend",icon:"Django"},{name:"Flask",category:"Backend",icon:"Flask"},{name:"FastAPI",category:"Backend",icon:"FastAPI"},{name:"Spring Boot",category:"Backend",icon:"Spring"},{name:"Laravel",category:"Backend",icon:"Laravel"},{name:"ASP.NET",category:"Backend",icon:".NET"},{name:"PostgreSQL",category:"Database",icon:"PostgresSQL"},{name:"MySQL",category:"Database",icon:"MySQL"},{name:"SQLite",category:"Database",icon:"SQLite"},{name:"MongoDB",category:"Database",icon:"MongoDB"},{name:"Redis",category:"Database",icon:"Redis"},{name:"Flutter",category:"Mobile",icon:"Flutter"},{name:"PyTorch",category:"AI/ML",icon:"PyTorch"},{name:"TensorFlow",category:"AI/ML",icon:"TensorFlow"},{name:"NumPy",category:"AI/ML",icon:"NumPy"},{name:"Pandas",category:"AI/ML",icon:"Pandas"},{name:"OpenCV",category:"AI/ML",icon:"OpenCV"},{name:"Scikit-learn",category:"AI/ML",icon:"scikit-learn"},{name:"Jest",category:"Testing",icon:"Jest"},{name:"Vitest",category:"Testing",icon:"Vite.js"},{name:"Cypress",category:"Testing",icon:"Cypress"},{name:"Git",category:"DevOps",icon:"Git"},{name:"Docker",category:"DevOps",icon:"Docker"},{name:"Kubernetes",category:"DevOps",icon:"Kubernetes"},{name:"Terraform",category:"DevOps",icon:"HashiCorp-Terraform"},{name:"GraphQL",category:"API",icon:"GraphQL"},{name:"Socket.IO",category:"API",icon:"Socket.IO"},{name:"npm",category:"Tools",icon:"NPM"},{name:"Yarn",category:"Tools",icon:"Yarn"},{name:"Bun",category:"Tools",icon:"Bun"},{name:"CMake",category:"Tools",icon:"CMake"},{name:"Gradle",category:"Tools",icon:"Gradle"},{name:"Maven",category:"Tools",icon:"Apache-Maven"}];function bm(){let[a,b]=(0,d.useState)([]),[e,g]=(0,d.useState)([]),[h,i]=(0,d.useState)(!1);return(0,d.useEffect)(()=>{console.log(a)},[a]),(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)("div",{className:"logo text-2xl font-bold tracking-[-1px] flex justify-center",children:[(0,c.jsx)("span",{className:"text-[#F3F4F6]",children:"Jump"}),(0,c.jsx)("span",{className:"text-[#6366F1]",children:"Start"})]}),(0,c.jsx)("ul",{className:"flex justify-center items-center gap-4 m-8 flex-wrap h-fit",children:bl.map(a=>(0,c.jsx)(bj,{lang:a.name,icon:a.icon,onClick:()=>{var c;return c=a.name,void b(a=>a.includes(c)?a.filter(a=>a!==c):[...a,c])}},a.name))}),(0,c.jsx)("div",{className:"flex justify-center",children:(0,c.jsx)("button",{className:"bg-[#6366F1] color-[#FFFFFF] hover:bg-[#818CF8] rounded-lg font-semibold h-[47px] cursor-pointer text-base py-[12px] px-[24px] duration-200 hover:translate-y-[-1px] text-white",onClick:()=>{i(!0),g(a)},children:"Get Guide"})}),h&&(0,c.jsx)(f,{techs:e})]})}a.s(["default",()=>bm],10445)}];

//# sourceMappingURL=%5Broot-of-the-server%5D__5fd97b90._.js.map