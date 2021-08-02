var viewportHeight = null;
var viewportWidth = null;
var lastScrollTop = 0;
var lastScrolledTime = 0;
var baseDomain = '';
var requestedHash = '';
var isMobile = false;
var backUrl = '/';
var changeLangUrl = '/';
var stockItem = [];
var headerHeight = 0;
var t = {
    prevText: 'Previous',
    nextText: 'Next'
};

/*! jQuery v1.10.2 | (c) 2005, 2013 jQuery Foundation, Inc. | jquery.org/license*/
(function(e,t){var n,r,i=typeof t,o=e.location,a=e.document,s=a.documentElement,l=e.jQuery,u=e.$,c={},p=[],f="1.10.2",d=p.concat,h=p.push,g=p.slice,m=p.indexOf,y=c.toString,v=c.hasOwnProperty,b=f.trim,x=function(e,t){return new x.fn.init(e,t,r)},w=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=/\S+/g,C=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,N=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,k=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,E=/^[\],:{}\s]*$/,S=/(?:^|:|,)(?:\s*\[)+/g,A=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,j=/"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,D=/^-ms-/,L=/-([\da-z])/gi,H=function(e,t){return t.toUpperCase()},q=function(e){(a.addEventListener||"load"===e.type||"complete"===a.readyState)&&(_(),x.ready())},_=function(){a.addEventListener?(a.removeEventListener("DOMContentLoaded",q,!1),e.removeEventListener("load",q,!1)):(a.detachEvent("onreadystatechange",q),e.detachEvent("onload",q))};x.fn=x.prototype={jquery:f,constructor:x,init:function(e,n,r){var i,o;if(!e)return this;if("string"==typeof e){if(i="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:N.exec(e),!i||!i[1]&&n)return!n||n.jquery?(n||r).find(e):this.constructor(n).find(e);if(i[1]){if(n=n instanceof x?n[0]:n,x.merge(this,x.parseHTML(i[1],n&&n.nodeType?n.ownerDocument||n:a,!0)),k.test(i[1])&&x.isPlainObject(n))for(i in n)x.isFunction(this[i])?this[i](n[i]):this.attr(i,n[i]);return this}if(o=a.getElementById(i[2]),o&&o.parentNode){if(o.id!==i[2])return r.find(e);this.length=1,this[0]=o}return this.context=a,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):x.isFunction(e)?r.ready(e):(e.selector!==t&&(this.selector=e.selector,this.context=e.context),x.makeArray(e,this))},selector:"",length:0,toArray:function(){return g.call(this)},get:function(e){return null==e?this.toArray():0>e?this[this.length+e]:this[e]},pushStack:function(e){var t=x.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e,t){return x.each(this,e,t)},ready:function(e){return x.ready.promise().done(e),this},slice:function(){return this.pushStack(g.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(0>e?t:0);return this.pushStack(n>=0&&t>n?[this[n]]:[])},map:function(e){return this.pushStack(x.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:h,sort:[].sort,splice:[].splice},x.fn.init.prototype=x.fn,x.extend=x.fn.extend=function(){var e,n,r,i,o,a,s=arguments[0]||{},l=1,u=arguments.length,c=!1;for("boolean"==typeof s&&(c=s,s=arguments[1]||{},l=2),"object"==typeof s||x.isFunction(s)||(s={}),u===l&&(s=this,--l);u>l;l++)if(null!=(o=arguments[l]))for(i in o)e=s[i],r=o[i],s!==r&&(c&&r&&(x.isPlainObject(r)||(n=x.isArray(r)))?(n?(n=!1,a=e&&x.isArray(e)?e:[]):a=e&&x.isPlainObject(e)?e:{},s[i]=x.extend(c,a,r)):r!==t&&(s[i]=r));return s},x.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),noConflict:function(t){return e.$===x&&(e.$=u),t&&e.jQuery===x&&(e.jQuery=l),x},isReady:!1,readyWait:1,holdReady:function(e){e?x.readyWait++:x.ready(!0)},ready:function(e){if(e===!0?!--x.readyWait:!x.isReady){if(!a.body)return setTimeout(x.ready);x.isReady=!0,e!==!0&&--x.readyWait>0||(n.resolveWith(a,[x]),x.fn.trigger&&x(a).trigger("ready").off("ready"))}},isFunction:function(e){return"function"===x.type(e)},isArray:Array.isArray||function(e){return"array"===x.type(e)},isWindow:function(e){return null!=e&&e==e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?c[y.call(e)]||"object":typeof e},isPlainObject:function(e){var n;if(!e||"object"!==x.type(e)||e.nodeType||x.isWindow(e))return!1;try{if(e.constructor&&!v.call(e,"constructor")&&!v.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(r){return!1}if(x.support.ownLast)for(n in e)return v.call(e,n);for(n in e);return n===t||v.call(e,n)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},error:function(e){throw Error(e)},parseHTML:function(e,t,n){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(n=t,t=!1),t=t||a;var r=k.exec(e),i=!n&&[];return r?[t.createElement(r[1])]:(r=x.buildFragment([e],t,i),i&&x(i).remove(),x.merge([],r.childNodes))},parseJSON:function(n){return e.JSON&&e.JSON.parse?e.JSON.parse(n):null===n?n:"string"==typeof n&&(n=x.trim(n),n&&E.test(n.replace(A,"@").replace(j,"]").replace(S,"")))?Function("return "+n)():(x.error("Invalid JSON: "+n),t)},parseXML:function(n){var r,i;if(!n||"string"!=typeof n)return null;try{e.DOMParser?(i=new DOMParser,r=i.parseFromString(n,"text/xml")):(r=new ActiveXObject("Microsoft.XMLDOM"),r.async="false",r.loadXML(n))}catch(o){r=t}return r&&r.documentElement&&!r.getElementsByTagName("parsererror").length||x.error("Invalid XML: "+n),r},noop:function(){},globalEval:function(t){t&&x.trim(t)&&(e.execScript||function(t){e.eval.call(e,t)})(t)},camelCase:function(e){return e.replace(D,"ms-").replace(L,H)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,n){var r,i=0,o=e.length,a=M(e);if(n){if(a){for(;o>i;i++)if(r=t.apply(e[i],n),r===!1)break}else for(i in e)if(r=t.apply(e[i],n),r===!1)break}else if(a){for(;o>i;i++)if(r=t.call(e[i],i,e[i]),r===!1)break}else for(i in e)if(r=t.call(e[i],i,e[i]),r===!1)break;return e},trim:b&&!b.call("\ufeff\u00a0")?function(e){return null==e?"":b.call(e)}:function(e){return null==e?"":(e+"").replace(C,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(M(Object(e))?x.merge(n,"string"==typeof e?[e]:e):h.call(n,e)),n},inArray:function(e,t,n){var r;if(t){if(m)return m.call(t,e,n);for(r=t.length,n=n?0>n?Math.max(0,r+n):n:0;r>n;n++)if(n in t&&t[n]===e)return n}return-1},merge:function(e,n){var r=n.length,i=e.length,o=0;if("number"==typeof r)for(;r>o;o++)e[i++]=n[o];else while(n[o]!==t)e[i++]=n[o++];return e.length=i,e},grep:function(e,t,n){var r,i=[],o=0,a=e.length;for(n=!!n;a>o;o++)r=!!t(e[o],o),n!==r&&i.push(e[o]);return i},map:function(e,t,n){var r,i=0,o=e.length,a=M(e),s=[];if(a)for(;o>i;i++)r=t(e[i],i,n),null!=r&&(s[s.length]=r);else for(i in e)r=t(e[i],i,n),null!=r&&(s[s.length]=r);return d.apply([],s)},guid:1,proxy:function(e,n){var r,i,o;return"string"==typeof n&&(o=e[n],n=e,e=o),x.isFunction(e)?(r=g.call(arguments,2),i=function(){return e.apply(n||this,r.concat(g.call(arguments)))},i.guid=e.guid=e.guid||x.guid++,i):t},access:function(e,n,r,i,o,a,s){var l=0,u=e.length,c=null==r;if("object"===x.type(r)){o=!0;for(l in r)x.access(e,n,l,r[l],!0,a,s)}else if(i!==t&&(o=!0,x.isFunction(i)||(s=!0),c&&(s?(n.call(e,i),n=null):(c=n,n=function(e,t,n){return c.call(x(e),n)})),n))for(;u>l;l++)n(e[l],r,s?i:i.call(e[l],l,n(e[l],r)));return o?e:c?n.call(e):u?n(e[0],r):a},now:function(){return(new Date).getTime()},swap:function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=a[o];return i}}),x.ready.promise=function(t){if(!n)if(n=x.Deferred(),"complete"===a.readyState)setTimeout(x.ready);else if(a.addEventListener)a.addEventListener("DOMContentLoaded",q,!1),e.addEventListener("load",q,!1);else{a.attachEvent("onreadystatechange",q),e.attachEvent("onload",q);var r=!1;try{r=null==e.frameElement&&a.documentElement}catch(i){}r&&r.doScroll&&function o(){if(!x.isReady){try{r.doScroll("left")}catch(e){return setTimeout(o,50)}_(),x.ready()}}()}return n.promise(t)},x.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){c["[object "+t+"]"]=t.toLowerCase()});function M(e){var t=e.length,n=x.type(e);return x.isWindow(e)?!1:1===e.nodeType&&t?!0:"array"===n||"function"!==n&&(0===t||"number"==typeof t&&t>0&&t-1 in e)}r=x(a),function(e,t){var n,r,i,o,a,s,l,u,c,p,f,d,h,g,m,y,v,b="sizzle"+-new Date,w=e.document,T=0,C=0,N=st(),k=st(),E=st(),S=!1,A=function(e,t){return e===t?(S=!0,0):0},j=typeof t,D=1<<31,L={}.hasOwnProperty,H=[],q=H.pop,_=H.push,M=H.push,O=H.slice,F=H.indexOf||function(e){var t=0,n=this.length;for(;n>t;t++)if(this[t]===e)return t;return-1},B="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",P="[\\x20\\t\\r\\n\\f]",R="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",W=R.replace("w","w#"),$="\\["+P+"*("+R+")"+P+"*(?:([*^$|!~]?=)"+P+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+W+")|)|)"+P+"*\\]",I=":("+R+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+$.replace(3,8)+")*)|.*)\\)|)",z=RegExp("^"+P+"+|((?:^|[^\\\\])(?:\\\\.)*)"+P+"+$","g"),X=RegExp("^"+P+"*,"+P+"*"),U=RegExp("^"+P+"*([>+~]|"+P+")"+P+"*"),V=RegExp(P+"*[+~]"),Y=RegExp("="+P+"*([^\\]'\"]*)"+P+"*\\]","g"),J=RegExp(I),G=RegExp("^"+W+"$"),Q={ID:RegExp("^#("+R+")"),CLASS:RegExp("^\\.("+R+")"),TAG:RegExp("^("+R.replace("w","w*")+")"),ATTR:RegExp("^"+$),PSEUDO:RegExp("^"+I),CHILD:RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+P+"*(even|odd|(([+-]|)(\\d*)n|)"+P+"*(?:([+-]|)"+P+"*(\\d+)|))"+P+"*\\)|)","i"),bool:RegExp("^(?:"+B+")$","i"),needsContext:RegExp("^"+P+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+P+"*((?:-\\d)?\\d*)"+P+"*\\)|)(?=[^-]|$)","i")},K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,et=/^(?:input|select|textarea|button)$/i,tt=/^h\d$/i,nt=/'|\\/g,rt=RegExp("\\\\([\\da-f]{1,6}"+P+"?|("+P+")|.)","ig"),it=function(e,t,n){var r="0x"+t-65536;return r!==r||n?t:0>r?String.fromCharCode(r+65536):String.fromCharCode(55296|r>>10,56320|1023&r)};try{M.apply(H=O.call(w.childNodes),w.childNodes),H[w.childNodes.length].nodeType}catch(ot){M={apply:H.length?function(e,t){_.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function at(e,t,n,i){var o,a,s,l,u,c,d,m,y,x;if((t?t.ownerDocument||t:w)!==f&&p(t),t=t||f,n=n||[],!e||"string"!=typeof e)return n;if(1!==(l=t.nodeType)&&9!==l)return[];if(h&&!i){if(o=Z.exec(e))if(s=o[1]){if(9===l){if(a=t.getElementById(s),!a||!a.parentNode)return n;if(a.id===s)return n.push(a),n}else if(t.ownerDocument&&(a=t.ownerDocument.getElementById(s))&&v(t,a)&&a.id===s)return n.push(a),n}else{if(o[2])return M.apply(n,t.getElementsByTagName(e)),n;if((s=o[3])&&r.getElementsByClassName&&t.getElementsByClassName)return M.apply(n,t.getElementsByClassName(s)),n}if(r.qsa&&(!g||!g.test(e))){if(m=d=b,y=t,x=9===l&&e,1===l&&"object"!==t.nodeName.toLowerCase()){c=mt(e),(d=t.getAttribute("id"))?m=d.replace(nt,"\\$&"):t.setAttribute("id",m),m="[id='"+m+"'] ",u=c.length;while(u--)c[u]=m+yt(c[u]);y=V.test(e)&&t.parentNode||t,x=c.join(",")}if(x)try{return M.apply(n,y.querySelectorAll(x)),n}catch(T){}finally{d||t.removeAttribute("id")}}}return kt(e.replace(z,"$1"),t,n,i)}function st(){var e=[];function t(n,r){return e.push(n+=" ")>o.cacheLength&&delete t[e.shift()],t[n]=r}return t}function lt(e){return e[b]=!0,e}function ut(e){var t=f.createElement("div");try{return!!e(t)}catch(n){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function ct(e,t){var n=e.split("|"),r=e.length;while(r--)o.attrHandle[n[r]]=t}function pt(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&(~t.sourceIndex||D)-(~e.sourceIndex||D);if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function ft(e){return function(t){var n=t.nodeName.toLowerCase();return"input"===n&&t.type===e}}function dt(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function ht(e){return lt(function(t){return t=+t,lt(function(n,r){var i,o=e([],n.length,t),a=o.length;while(a--)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}s=at.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?"HTML"!==t.nodeName:!1},r=at.support={},p=at.setDocument=function(e){var n=e?e.ownerDocument||e:w,i=n.defaultView;return n!==f&&9===n.nodeType&&n.documentElement?(f=n,d=n.documentElement,h=!s(n),i&&i.attachEvent&&i!==i.top&&i.attachEvent("onbeforeunload",function(){p()}),r.attributes=ut(function(e){return e.className="i",!e.getAttribute("className")}),r.getElementsByTagName=ut(function(e){return e.appendChild(n.createComment("")),!e.getElementsByTagName("*").length}),r.getElementsByClassName=ut(function(e){return e.innerHTML="<div class='a'></div><div class='a i'></div>",e.firstChild.className="i",2===e.getElementsByClassName("i").length}),r.getById=ut(function(e){return d.appendChild(e).id=b,!n.getElementsByName||!n.getElementsByName(b).length}),r.getById?(o.find.ID=function(e,t){if(typeof t.getElementById!==j&&h){var n=t.getElementById(e);return n&&n.parentNode?[n]:[]}},o.filter.ID=function(e){var t=e.replace(rt,it);return function(e){return e.getAttribute("id")===t}}):(delete o.find.ID,o.filter.ID=function(e){var t=e.replace(rt,it);return function(e){var n=typeof e.getAttributeNode!==j&&e.getAttributeNode("id");return n&&n.value===t}}),o.find.TAG=r.getElementsByTagName?function(e,n){return typeof n.getElementsByTagName!==j?n.getElementsByTagName(e):t}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},o.find.CLASS=r.getElementsByClassName&&function(e,n){return typeof n.getElementsByClassName!==j&&h?n.getElementsByClassName(e):t},m=[],g=[],(r.qsa=K.test(n.querySelectorAll))&&(ut(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||g.push("\\["+P+"*(?:value|"+B+")"),e.querySelectorAll(":checked").length||g.push(":checked")}),ut(function(e){var t=n.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("t",""),e.querySelectorAll("[t^='']").length&&g.push("[*^$]="+P+"*(?:''|\"\")"),e.querySelectorAll(":enabled").length||g.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),g.push(",.*:")})),(r.matchesSelector=K.test(y=d.webkitMatchesSelector||d.mozMatchesSelector||d.oMatchesSelector||d.msMatchesSelector))&&ut(function(e){r.disconnectedMatch=y.call(e,"div"),y.call(e,"[s!='']:x"),m.push("!=",I)}),g=g.length&&RegExp(g.join("|")),m=m.length&&RegExp(m.join("|")),v=K.test(d.contains)||d.compareDocumentPosition?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},A=d.compareDocumentPosition?function(e,t){if(e===t)return S=!0,0;var i=t.compareDocumentPosition&&e.compareDocumentPosition&&e.compareDocumentPosition(t);return i?1&i||!r.sortDetached&&t.compareDocumentPosition(e)===i?e===n||v(w,e)?-1:t===n||v(w,t)?1:c?F.call(c,e)-F.call(c,t):0:4&i?-1:1:e.compareDocumentPosition?-1:1}:function(e,t){var r,i=0,o=e.parentNode,a=t.parentNode,s=[e],l=[t];if(e===t)return S=!0,0;if(!o||!a)return e===n?-1:t===n?1:o?-1:a?1:c?F.call(c,e)-F.call(c,t):0;if(o===a)return pt(e,t);r=e;while(r=r.parentNode)s.unshift(r);r=t;while(r=r.parentNode)l.unshift(r);while(s[i]===l[i])i++;return i?pt(s[i],l[i]):s[i]===w?-1:l[i]===w?1:0},n):f},at.matches=function(e,t){return at(e,null,null,t)},at.matchesSelector=function(e,t){if((e.ownerDocument||e)!==f&&p(e),t=t.replace(Y,"='$1']"),!(!r.matchesSelector||!h||m&&m.test(t)||g&&g.test(t)))try{var n=y.call(e,t);if(n||r.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(i){}return at(t,f,null,[e]).length>0},at.contains=function(e,t){return(e.ownerDocument||e)!==f&&p(e),v(e,t)},at.attr=function(e,n){(e.ownerDocument||e)!==f&&p(e);var i=o.attrHandle[n.toLowerCase()],a=i&&L.call(o.attrHandle,n.toLowerCase())?i(e,n,!h):t;return a===t?r.attributes||!h?e.getAttribute(n):(a=e.getAttributeNode(n))&&a.specified?a.value:null:a},at.error=function(e){throw Error("Syntax error, unrecognized expression: "+e)},at.uniqueSort=function(e){var t,n=[],i=0,o=0;if(S=!r.detectDuplicates,c=!r.sortStable&&e.slice(0),e.sort(A),S){while(t=e[o++])t===e[o]&&(i=n.push(o));while(i--)e.splice(n[i],1)}return e},a=at.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=a(e)}else if(3===i||4===i)return e.nodeValue}else for(;t=e[r];r++)n+=a(t);return n},o=at.selectors={cacheLength:50,createPseudo:lt,match:Q,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(rt,it),e[3]=(e[4]||e[5]||"").replace(rt,it),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||at.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&at.error(e[0]),e},PSEUDO:function(e){var n,r=!e[5]&&e[2];return Q.CHILD.test(e[0])?null:(e[3]&&e[4]!==t?e[2]=e[4]:r&&J.test(r)&&(n=mt(r,!0))&&(n=r.indexOf(")",r.length-n)-r.length)&&(e[0]=e[0].slice(0,n),e[2]=r.slice(0,n)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(rt,it).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=N[e+" "];return t||(t=RegExp("(^|"+P+")"+e+"("+P+"|$)"))&&N(e,function(e){return t.test("string"==typeof e.className&&e.className||typeof e.getAttribute!==j&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=at.attr(r,e);return null==i?"!="===t:t?(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i+" ").indexOf(n)>-1:"|="===t?i===n||i.slice(0,n.length+1)===n+"-":!1):!0}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,l){var u,c,p,f,d,h,g=o!==a?"nextSibling":"previousSibling",m=t.parentNode,y=s&&t.nodeName.toLowerCase(),v=!l&&!s;if(m){if(o){while(g){p=t;while(p=p[g])if(s?p.nodeName.toLowerCase()===y:1===p.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?m.firstChild:m.lastChild],a&&v){c=m[b]||(m[b]={}),u=c[e]||[],d=u[0]===T&&u[1],f=u[0]===T&&u[2],p=d&&m.childNodes[d];while(p=++d&&p&&p[g]||(f=d=0)||h.pop())if(1===p.nodeType&&++f&&p===t){c[e]=[T,d,f];break}}else if(v&&(u=(t[b]||(t[b]={}))[e])&&u[0]===T)f=u[1];else while(p=++d&&p&&p[g]||(f=d=0)||h.pop())if((s?p.nodeName.toLowerCase()===y:1===p.nodeType)&&++f&&(v&&((p[b]||(p[b]={}))[e]=[T,f]),p===t))break;return f-=i,f===r||0===f%r&&f/r>=0}}},PSEUDO:function(e,t){var n,r=o.pseudos[e]||o.setFilters[e.toLowerCase()]||at.error("unsupported pseudo: "+e);return r[b]?r(t):r.length>1?(n=[e,e,"",t],o.setFilters.hasOwnProperty(e.toLowerCase())?lt(function(e,n){var i,o=r(e,t),a=o.length;while(a--)i=F.call(e,o[a]),e[i]=!(n[i]=o[a])}):function(e){return r(e,0,n)}):r}},pseudos:{not:lt(function(e){var t=[],n=[],r=l(e.replace(z,"$1"));return r[b]?lt(function(e,t,n,i){var o,a=r(e,null,i,[]),s=e.length;while(s--)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),!n.pop()}}),has:lt(function(e){return function(t){return at(e,t).length>0}}),contains:lt(function(e){return function(t){return(t.textContent||t.innerText||a(t)).indexOf(e)>-1}}),lang:lt(function(e){return G.test(e||"")||at.error("unsupported lang: "+e),e=e.replace(rt,it).toLowerCase(),function(t){var n;do if(n=h?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===d},focus:function(e){return e===f.activeElement&&(!f.hasFocus||f.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeName>"@"||3===e.nodeType||4===e.nodeType)return!1;return!0},parent:function(e){return!o.pseudos.empty(e)},header:function(e){return tt.test(e.nodeName)},input:function(e){return et.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||t.toLowerCase()===e.type)},first:ht(function(){return[0]}),last:ht(function(e,t){return[t-1]}),eq:ht(function(e,t,n){return[0>n?n+t:n]}),even:ht(function(e,t){var n=0;for(;t>n;n+=2)e.push(n);return e}),odd:ht(function(e,t){var n=1;for(;t>n;n+=2)e.push(n);return e}),lt:ht(function(e,t,n){var r=0>n?n+t:n;for(;--r>=0;)e.push(r);return e}),gt:ht(function(e,t,n){var r=0>n?n+t:n;for(;t>++r;)e.push(r);return e})}},o.pseudos.nth=o.pseudos.eq;for(n in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})o.pseudos[n]=ft(n);for(n in{submit:!0,reset:!0})o.pseudos[n]=dt(n);function gt(){}gt.prototype=o.filters=o.pseudos,o.setFilters=new gt;function mt(e,t){var n,r,i,a,s,l,u,c=k[e+" "];if(c)return t?0:c.slice(0);s=e,l=[],u=o.preFilter;while(s){(!n||(r=X.exec(s)))&&(r&&(s=s.slice(r[0].length)||s),l.push(i=[])),n=!1,(r=U.exec(s))&&(n=r.shift(),i.push({value:n,type:r[0].replace(z," ")}),s=s.slice(n.length));for(a in o.filter)!(r=Q[a].exec(s))||u[a]&&!(r=u[a](r))||(n=r.shift(),i.push({value:n,type:a,matches:r}),s=s.slice(n.length));if(!n)break}return t?s.length:s?at.error(e):k(e,l).slice(0)}function yt(e){var t=0,n=e.length,r="";for(;n>t;t++)r+=e[t].value;return r}function vt(e,t,n){var r=t.dir,o=n&&"parentNode"===r,a=C++;return t.first?function(t,n,i){while(t=t[r])if(1===t.nodeType||o)return e(t,n,i)}:function(t,n,s){var l,u,c,p=T+" "+a;if(s){while(t=t[r])if((1===t.nodeType||o)&&e(t,n,s))return!0}else while(t=t[r])if(1===t.nodeType||o)if(c=t[b]||(t[b]={}),(u=c[r])&&u[0]===p){if((l=u[1])===!0||l===i)return l===!0}else if(u=c[r]=[p],u[1]=e(t,n,s)||i,u[1]===!0)return!0}}function bt(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function xt(e,t,n,r,i){var o,a=[],s=0,l=e.length,u=null!=t;for(;l>s;s++)(o=e[s])&&(!n||n(o,r,i))&&(a.push(o),u&&t.push(s));return a}function wt(e,t,n,r,i,o){return r&&!r[b]&&(r=wt(r)),i&&!i[b]&&(i=wt(i,o)),lt(function(o,a,s,l){var u,c,p,f=[],d=[],h=a.length,g=o||Nt(t||"*",s.nodeType?[s]:s,[]),m=!e||!o&&t?g:xt(g,f,e,s,l),y=n?i||(o?e:h||r)?[]:a:m;if(n&&n(m,y,s,l),r){u=xt(y,d),r(u,[],s,l),c=u.length;while(c--)(p=u[c])&&(y[d[c]]=!(m[d[c]]=p))}if(o){if(i||e){if(i){u=[],c=y.length;while(c--)(p=y[c])&&u.push(m[c]=p);i(null,y=[],u,l)}c=y.length;while(c--)(p=y[c])&&(u=i?F.call(o,p):f[c])>-1&&(o[u]=!(a[u]=p))}}else y=xt(y===a?y.splice(h,y.length):y),i?i(null,a,y,l):M.apply(a,y)})}function Tt(e){var t,n,r,i=e.length,a=o.relative[e[0].type],s=a||o.relative[" "],l=a?1:0,c=vt(function(e){return e===t},s,!0),p=vt(function(e){return F.call(t,e)>-1},s,!0),f=[function(e,n,r){return!a&&(r||n!==u)||((t=n).nodeType?c(e,n,r):p(e,n,r))}];for(;i>l;l++)if(n=o.relative[e[l].type])f=[vt(bt(f),n)];else{if(n=o.filter[e[l].type].apply(null,e[l].matches),n[b]){for(r=++l;i>r;r++)if(o.relative[e[r].type])break;return wt(l>1&&bt(f),l>1&&yt(e.slice(0,l-1).concat({value:" "===e[l-2].type?"*":""})).replace(z,"$1"),n,r>l&&Tt(e.slice(l,r)),i>r&&Tt(e=e.slice(r)),i>r&&yt(e))}f.push(n)}return bt(f)}function Ct(e,t){var n=0,r=t.length>0,a=e.length>0,s=function(s,l,c,p,d){var h,g,m,y=[],v=0,b="0",x=s&&[],w=null!=d,C=u,N=s||a&&o.find.TAG("*",d&&l.parentNode||l),k=T+=null==C?1:Math.random()||.1;for(w&&(u=l!==f&&l,i=n);null!=(h=N[b]);b++){if(a&&h){g=0;while(m=e[g++])if(m(h,l,c)){p.push(h);break}w&&(T=k,i=++n)}r&&((h=!m&&h)&&v--,s&&x.push(h))}if(v+=b,r&&b!==v){g=0;while(m=t[g++])m(x,y,l,c);if(s){if(v>0)while(b--)x[b]||y[b]||(y[b]=q.call(p));y=xt(y)}M.apply(p,y),w&&!s&&y.length>0&&v+t.length>1&&at.uniqueSort(p)}return w&&(T=k,u=C),x};return r?lt(s):s}l=at.compile=function(e,t){var n,r=[],i=[],o=E[e+" "];if(!o){t||(t=mt(e)),n=t.length;while(n--)o=Tt(t[n]),o[b]?r.push(o):i.push(o);o=E(e,Ct(i,r))}return o};function Nt(e,t,n){var r=0,i=t.length;for(;i>r;r++)at(e,t[r],n);return n}function kt(e,t,n,i){var a,s,u,c,p,f=mt(e);if(!i&&1===f.length){if(s=f[0]=f[0].slice(0),s.length>2&&"ID"===(u=s[0]).type&&r.getById&&9===t.nodeType&&h&&o.relative[s[1].type]){if(t=(o.find.ID(u.matches[0].replace(rt,it),t)||[])[0],!t)return n;e=e.slice(s.shift().value.length)}a=Q.needsContext.test(e)?0:s.length;while(a--){if(u=s[a],o.relative[c=u.type])break;if((p=o.find[c])&&(i=p(u.matches[0].replace(rt,it),V.test(s[0].type)&&t.parentNode||t))){if(s.splice(a,1),e=i.length&&yt(s),!e)return M.apply(n,i),n;break}}}return l(e,f)(i,t,!h,n,V.test(e)),n}r.sortStable=b.split("").sort(A).join("")===b,r.detectDuplicates=S,p(),r.sortDetached=ut(function(e){return 1&e.compareDocumentPosition(f.createElement("div"))}),ut(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||ct("type|href|height|width",function(e,n,r){return r?t:e.getAttribute(n,"type"===n.toLowerCase()?1:2)}),r.attributes&&ut(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||ct("value",function(e,n,r){return r||"input"!==e.nodeName.toLowerCase()?t:e.defaultValue}),ut(function(e){return null==e.getAttribute("disabled")})||ct(B,function(e,n,r){var i;return r?t:(i=e.getAttributeNode(n))&&i.specified?i.value:e[n]===!0?n.toLowerCase():null}),x.find=at,x.expr=at.selectors,x.expr[":"]=x.expr.pseudos,x.unique=at.uniqueSort,x.text=at.getText,x.isXMLDoc=at.isXML,x.contains=at.contains}(e);var O={};function F(e){var t=O[e]={};return x.each(e.match(T)||[],function(e,n){t[n]=!0}),t}x.Callbacks=function(e){e="string"==typeof e?O[e]||F(e):x.extend({},e);var n,r,i,o,a,s,l=[],u=!e.once&&[],c=function(t){for(r=e.memory&&t,i=!0,a=s||0,s=0,o=l.length,n=!0;l&&o>a;a++)if(l[a].apply(t[0],t[1])===!1&&e.stopOnFalse){r=!1;break}n=!1,l&&(u?u.length&&c(u.shift()):r?l=[]:p.disable())},p={add:function(){if(l){var t=l.length;(function i(t){x.each(t,function(t,n){var r=x.type(n);"function"===r?e.unique&&p.has(n)||l.push(n):n&&n.length&&"string"!==r&&i(n)})})(arguments),n?o=l.length:r&&(s=t,c(r))}return this},remove:function(){return l&&x.each(arguments,function(e,t){var r;while((r=x.inArray(t,l,r))>-1)l.splice(r,1),n&&(o>=r&&o--,a>=r&&a--)}),this},has:function(e){return e?x.inArray(e,l)>-1:!(!l||!l.length)},empty:function(){return l=[],o=0,this},disable:function(){return l=u=r=t,this},disabled:function(){return!l},lock:function(){return u=t,r||p.disable(),this},locked:function(){return!u},fireWith:function(e,t){return!l||i&&!u||(t=t||[],t=[e,t.slice?t.slice():t],n?u.push(t):c(t)),this},fire:function(){return p.fireWith(this,arguments),this},fired:function(){return!!i}};return p},x.extend({Deferred:function(e){var t=[["resolve","done",x.Callbacks("once memory"),"resolved"],["reject","fail",x.Callbacks("once memory"),"rejected"],["notify","progress",x.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return x.Deferred(function(n){x.each(t,function(t,o){var a=o[0],s=x.isFunction(e[t])&&e[t];i[o[1]](function(){var e=s&&s.apply(this,arguments);e&&x.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[a+"With"](this===r?n.promise():this,s?[e]:arguments)})}),e=null}).promise()},promise:function(e){return null!=e?x.extend(e,r):r}},i={};return r.pipe=r.then,x.each(t,function(e,o){var a=o[2],s=o[3];r[o[1]]=a.add,s&&a.add(function(){n=s},t[1^e][2].disable,t[2][2].lock),i[o[0]]=function(){return i[o[0]+"With"](this===i?r:this,arguments),this},i[o[0]+"With"]=a.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t=0,n=g.call(arguments),r=n.length,i=1!==r||e&&x.isFunction(e.promise)?r:0,o=1===i?e:x.Deferred(),a=function(e,t,n){return function(r){t[e]=this,n[e]=arguments.length>1?g.call(arguments):r,n===s?o.notifyWith(t,n):--i||o.resolveWith(t,n)}},s,l,u;if(r>1)for(s=Array(r),l=Array(r),u=Array(r);r>t;t++)n[t]&&x.isFunction(n[t].promise)?n[t].promise().done(a(t,u,n)).fail(o.reject).progress(a(t,l,s)):--i;return i||o.resolveWith(u,n),o.promise()}}),x.support=function(t){var n,r,o,s,l,u,c,p,f,d=a.createElement("div");if(d.setAttribute("className","t"),d.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",n=d.getElementsByTagName("*")||[],r=d.getElementsByTagName("a")[0],!r||!r.style||!n.length)return t;s=a.createElement("select"),u=s.appendChild(a.createElement("option")),o=d.getElementsByTagName("input")[0],r.style.cssText="top:1px;float:left;opacity:.5",t.getSetAttribute="t"!==d.className,t.leadingWhitespace=3===d.firstChild.nodeType,t.tbody=!d.getElementsByTagName("tbody").length,t.htmlSerialize=!!d.getElementsByTagName("link").length,t.style=/top/.test(r.getAttribute("style")),t.hrefNormalized="/a"===r.getAttribute("href"),t.opacity=/^0.5/.test(r.style.opacity),t.cssFloat=!!r.style.cssFloat,t.checkOn=!!o.value,t.optSelected=u.selected,t.enctype=!!a.createElement("form").enctype,t.html5Clone="<:nav></:nav>"!==a.createElement("nav").cloneNode(!0).outerHTML,t.inlineBlockNeedsLayout=!1,t.shrinkWrapBlocks=!1,t.pixelPosition=!1,t.deleteExpando=!0,t.noCloneEvent=!0,t.reliableMarginRight=!0,t.boxSizingReliable=!0,o.checked=!0,t.noCloneChecked=o.cloneNode(!0).checked,s.disabled=!0,t.optDisabled=!u.disabled;try{delete d.test}catch(h){t.deleteExpando=!1}o=a.createElement("input"),o.setAttribute("value",""),t.input=""===o.getAttribute("value"),o.value="t",o.setAttribute("type","radio"),t.radioValue="t"===o.value,o.setAttribute("checked","t"),o.setAttribute("name","t"),l=a.createDocumentFragment(),l.appendChild(o),t.appendChecked=o.checked,t.checkClone=l.cloneNode(!0).cloneNode(!0).lastChild.checked,d.attachEvent&&(d.attachEvent("onclick",function(){t.noCloneEvent=!1}),d.cloneNode(!0).click());for(f in{submit:!0,change:!0,focusin:!0})d.setAttribute(c="on"+f,"t"),t[f+"Bubbles"]=c in e||d.attributes[c].expando===!1;d.style.backgroundClip="content-box",d.cloneNode(!0).style.backgroundClip="",t.clearCloneStyle="content-box"===d.style.backgroundClip;for(f in x(t))break;return t.ownLast="0"!==f,x(function(){var n,r,o,s="padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",l=a.getElementsByTagName("body")[0];l&&(n=a.createElement("div"),n.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",l.appendChild(n).appendChild(d),d.innerHTML="<table><tr><td></td><td>t</td></tr></table>",o=d.getElementsByTagName("td"),o[0].style.cssText="padding:0;margin:0;border:0;display:none",p=0===o[0].offsetHeight,o[0].style.display="",o[1].style.display="none",t.reliableHiddenOffsets=p&&0===o[0].offsetHeight,d.innerHTML="",d.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",x.swap(l,null!=l.style.zoom?{zoom:1}:{},function(){t.boxSizing=4===d.offsetWidth}),e.getComputedStyle&&(t.pixelPosition="1%"!==(e.getComputedStyle(d,null)||{}).top,t.boxSizingReliable="4px"===(e.getComputedStyle(d,null)||{width:"4px"}).width,r=d.appendChild(a.createElement("div")),r.style.cssText=d.style.cssText=s,r.style.marginRight=r.style.width="0",d.style.width="1px",t.reliableMarginRight=!parseFloat((e.getComputedStyle(r,null)||{}).marginRight)),typeof d.style.zoom!==i&&(d.innerHTML="",d.style.cssText=s+"width:1px;padding:1px;display:inline;zoom:1",t.inlineBlockNeedsLayout=3===d.offsetWidth,d.style.display="block",d.innerHTML="<div></div>",d.firstChild.style.width="5px",t.shrinkWrapBlocks=3!==d.offsetWidth,t.inlineBlockNeedsLayout&&(l.style.zoom=1)),l.removeChild(n),n=d=o=r=null)}),n=s=l=u=r=o=null,t
}({});var B=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,P=/([A-Z])/g;function R(e,n,r,i){if(x.acceptData(e)){var o,a,s=x.expando,l=e.nodeType,u=l?x.cache:e,c=l?e[s]:e[s]&&s;if(c&&u[c]&&(i||u[c].data)||r!==t||"string"!=typeof n)return c||(c=l?e[s]=p.pop()||x.guid++:s),u[c]||(u[c]=l?{}:{toJSON:x.noop}),("object"==typeof n||"function"==typeof n)&&(i?u[c]=x.extend(u[c],n):u[c].data=x.extend(u[c].data,n)),a=u[c],i||(a.data||(a.data={}),a=a.data),r!==t&&(a[x.camelCase(n)]=r),"string"==typeof n?(o=a[n],null==o&&(o=a[x.camelCase(n)])):o=a,o}}function W(e,t,n){if(x.acceptData(e)){var r,i,o=e.nodeType,a=o?x.cache:e,s=o?e[x.expando]:x.expando;if(a[s]){if(t&&(r=n?a[s]:a[s].data)){x.isArray(t)?t=t.concat(x.map(t,x.camelCase)):t in r?t=[t]:(t=x.camelCase(t),t=t in r?[t]:t.split(" ")),i=t.length;while(i--)delete r[t[i]];if(n?!I(r):!x.isEmptyObject(r))return}(n||(delete a[s].data,I(a[s])))&&(o?x.cleanData([e],!0):x.support.deleteExpando||a!=a.window?delete a[s]:a[s]=null)}}}x.extend({cache:{},noData:{applet:!0,embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(e){return e=e.nodeType?x.cache[e[x.expando]]:e[x.expando],!!e&&!I(e)},data:function(e,t,n){return R(e,t,n)},removeData:function(e,t){return W(e,t)},_data:function(e,t,n){return R(e,t,n,!0)},_removeData:function(e,t){return W(e,t,!0)},acceptData:function(e){if(e.nodeType&&1!==e.nodeType&&9!==e.nodeType)return!1;var t=e.nodeName&&x.noData[e.nodeName.toLowerCase()];return!t||t!==!0&&e.getAttribute("classid")===t}}),x.fn.extend({data:function(e,n){var r,i,o=null,a=0,s=this[0];if(e===t){if(this.length&&(o=x.data(s),1===s.nodeType&&!x._data(s,"parsedAttrs"))){for(r=s.attributes;r.length>a;a++)i=r[a].name,0===i.indexOf("data-")&&(i=x.camelCase(i.slice(5)),$(s,i,o[i]));x._data(s,"parsedAttrs",!0)}return o}return"object"==typeof e?this.each(function(){x.data(this,e)}):arguments.length>1?this.each(function(){x.data(this,e,n)}):s?$(s,e,x.data(s,e)):null},removeData:function(e){return this.each(function(){x.removeData(this,e)})}});function $(e,n,r){if(r===t&&1===e.nodeType){var i="data-"+n.replace(P,"-$1").toLowerCase();if(r=e.getAttribute(i),"string"==typeof r){try{r="true"===r?!0:"false"===r?!1:"null"===r?null:+r+""===r?+r:B.test(r)?x.parseJSON(r):r}catch(o){}x.data(e,n,r)}else r=t}return r}function I(e){var t;for(t in e)if(("data"!==t||!x.isEmptyObject(e[t]))&&"toJSON"!==t)return!1;return!0}x.extend({queue:function(e,n,r){var i;return e?(n=(n||"fx")+"queue",i=x._data(e,n),r&&(!i||x.isArray(r)?i=x._data(e,n,x.makeArray(r)):i.push(r)),i||[]):t},dequeue:function(e,t){t=t||"fx";var n=x.queue(e,t),r=n.length,i=n.shift(),o=x._queueHooks(e,t),a=function(){x.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return x._data(e,n)||x._data(e,n,{empty:x.Callbacks("once memory").add(function(){x._removeData(e,t+"queue"),x._removeData(e,n)})})}}),x.fn.extend({queue:function(e,n){var r=2;return"string"!=typeof e&&(n=e,e="fx",r--),r>arguments.length?x.queue(this[0],e):n===t?this:this.each(function(){var t=x.queue(this,e,n);x._queueHooks(this,e),"fx"===e&&"inprogress"!==t[0]&&x.dequeue(this,e)})},dequeue:function(e){return this.each(function(){x.dequeue(this,e)})},delay:function(e,t){return e=x.fx?x.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,n){var r,i=1,o=x.Deferred(),a=this,s=this.length,l=function(){--i||o.resolveWith(a,[a])};"string"!=typeof e&&(n=e,e=t),e=e||"fx";while(s--)r=x._data(a[s],e+"queueHooks"),r&&r.empty&&(i++,r.empty.add(l));return l(),o.promise(n)}});var z,X,U=/[\t\r\n\f]/g,V=/\r/g,Y=/^(?:input|select|textarea|button|object)$/i,J=/^(?:a|area)$/i,G=/^(?:checked|selected)$/i,Q=x.support.getSetAttribute,K=x.support.input;x.fn.extend({attr:function(e,t){return x.access(this,x.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){x.removeAttr(this,e)})},prop:function(e,t){return x.access(this,x.prop,e,t,arguments.length>1)},removeProp:function(e){return e=x.propFix[e]||e,this.each(function(){try{this[e]=t,delete this[e]}catch(n){}})},addClass:function(e){var t,n,r,i,o,a=0,s=this.length,l="string"==typeof e&&e;if(x.isFunction(e))return this.each(function(t){x(this).addClass(e.call(this,t,this.className))});if(l)for(t=(e||"").match(T)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(U," "):" ")){o=0;while(i=t[o++])0>r.indexOf(" "+i+" ")&&(r+=i+" ");n.className=x.trim(r)}return this},removeClass:function(e){var t,n,r,i,o,a=0,s=this.length,l=0===arguments.length||"string"==typeof e&&e;if(x.isFunction(e))return this.each(function(t){x(this).removeClass(e.call(this,t,this.className))});if(l)for(t=(e||"").match(T)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(U," "):"")){o=0;while(i=t[o++])while(r.indexOf(" "+i+" ")>=0)r=r.replace(" "+i+" "," ");n.className=e?x.trim(r):""}return this},toggleClass:function(e,t){var n=typeof e;return"boolean"==typeof t&&"string"===n?t?this.addClass(e):this.removeClass(e):x.isFunction(e)?this.each(function(n){x(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if("string"===n){var t,r=0,o=x(this),a=e.match(T)||[];while(t=a[r++])o.hasClass(t)?o.removeClass(t):o.addClass(t)}else(n===i||"boolean"===n)&&(this.className&&x._data(this,"__className__",this.className),this.className=this.className||e===!1?"":x._data(this,"__className__")||"")})},hasClass:function(e){var t=" "+e+" ",n=0,r=this.length;for(;r>n;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(U," ").indexOf(t)>=0)return!0;return!1},val:function(e){var n,r,i,o=this[0];{if(arguments.length)return i=x.isFunction(e),this.each(function(n){var o;1===this.nodeType&&(o=i?e.call(this,n,x(this).val()):e,null==o?o="":"number"==typeof o?o+="":x.isArray(o)&&(o=x.map(o,function(e){return null==e?"":e+""})),r=x.valHooks[this.type]||x.valHooks[this.nodeName.toLowerCase()],r&&"set"in r&&r.set(this,o,"value")!==t||(this.value=o))});if(o)return r=x.valHooks[o.type]||x.valHooks[o.nodeName.toLowerCase()],r&&"get"in r&&(n=r.get(o,"value"))!==t?n:(n=o.value,"string"==typeof n?n.replace(V,""):null==n?"":n)}}}),x.extend({valHooks:{option:{get:function(e){var t=x.find.attr(e,"value");return null!=t?t:e.text}},select:{get:function(e){var t,n,r=e.options,i=e.selectedIndex,o="select-one"===e.type||0>i,a=o?null:[],s=o?i+1:r.length,l=0>i?s:o?i:0;for(;s>l;l++)if(n=r[l],!(!n.selected&&l!==i||(x.support.optDisabled?n.disabled:null!==n.getAttribute("disabled"))||n.parentNode.disabled&&x.nodeName(n.parentNode,"optgroup"))){if(t=x(n).val(),o)return t;a.push(t)}return a},set:function(e,t){var n,r,i=e.options,o=x.makeArray(t),a=i.length;while(a--)r=i[a],(r.selected=x.inArray(x(r).val(),o)>=0)&&(n=!0);return n||(e.selectedIndex=-1),o}}},attr:function(e,n,r){var o,a,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return typeof e.getAttribute===i?x.prop(e,n,r):(1===s&&x.isXMLDoc(e)||(n=n.toLowerCase(),o=x.attrHooks[n]||(x.expr.match.bool.test(n)?X:z)),r===t?o&&"get"in o&&null!==(a=o.get(e,n))?a:(a=x.find.attr(e,n),null==a?t:a):null!==r?o&&"set"in o&&(a=o.set(e,r,n))!==t?a:(e.setAttribute(n,r+""),r):(x.removeAttr(e,n),t))},removeAttr:function(e,t){var n,r,i=0,o=t&&t.match(T);if(o&&1===e.nodeType)while(n=o[i++])r=x.propFix[n]||n,x.expr.match.bool.test(n)?K&&Q||!G.test(n)?e[r]=!1:e[x.camelCase("default-"+n)]=e[r]=!1:x.attr(e,n,""),e.removeAttribute(Q?n:r)},attrHooks:{type:{set:function(e,t){if(!x.support.radioValue&&"radio"===t&&x.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},propFix:{"for":"htmlFor","class":"className"},prop:function(e,n,r){var i,o,a,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return a=1!==s||!x.isXMLDoc(e),a&&(n=x.propFix[n]||n,o=x.propHooks[n]),r!==t?o&&"set"in o&&(i=o.set(e,r,n))!==t?i:e[n]=r:o&&"get"in o&&null!==(i=o.get(e,n))?i:e[n]},propHooks:{tabIndex:{get:function(e){var t=x.find.attr(e,"tabindex");return t?parseInt(t,10):Y.test(e.nodeName)||J.test(e.nodeName)&&e.href?0:-1}}}}),X={set:function(e,t,n){return t===!1?x.removeAttr(e,n):K&&Q||!G.test(n)?e.setAttribute(!Q&&x.propFix[n]||n,n):e[x.camelCase("default-"+n)]=e[n]=!0,n}},x.each(x.expr.match.bool.source.match(/\w+/g),function(e,n){var r=x.expr.attrHandle[n]||x.find.attr;x.expr.attrHandle[n]=K&&Q||!G.test(n)?function(e,n,i){var o=x.expr.attrHandle[n],a=i?t:(x.expr.attrHandle[n]=t)!=r(e,n,i)?n.toLowerCase():null;return x.expr.attrHandle[n]=o,a}:function(e,n,r){return r?t:e[x.camelCase("default-"+n)]?n.toLowerCase():null}}),K&&Q||(x.attrHooks.value={set:function(e,n,r){return x.nodeName(e,"input")?(e.defaultValue=n,t):z&&z.set(e,n,r)}}),Q||(z={set:function(e,n,r){var i=e.getAttributeNode(r);return i||e.setAttributeNode(i=e.ownerDocument.createAttribute(r)),i.value=n+="","value"===r||n===e.getAttribute(r)?n:t}},x.expr.attrHandle.id=x.expr.attrHandle.name=x.expr.attrHandle.coords=function(e,n,r){var i;return r?t:(i=e.getAttributeNode(n))&&""!==i.value?i.value:null},x.valHooks.button={get:function(e,n){var r=e.getAttributeNode(n);return r&&r.specified?r.value:t},set:z.set},x.attrHooks.contenteditable={set:function(e,t,n){z.set(e,""===t?!1:t,n)}},x.each(["width","height"],function(e,n){x.attrHooks[n]={set:function(e,r){return""===r?(e.setAttribute(n,"auto"),r):t}}})),x.support.hrefNormalized||x.each(["href","src"],function(e,t){x.propHooks[t]={get:function(e){return e.getAttribute(t,4)}}}),x.support.style||(x.attrHooks.style={get:function(e){return e.style.cssText||t},set:function(e,t){return e.style.cssText=t+""}}),x.support.optSelected||(x.propHooks.selected={get:function(e){var t=e.parentNode;return t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex),null}}),x.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){x.propFix[this.toLowerCase()]=this}),x.support.enctype||(x.propFix.enctype="encoding"),x.each(["radio","checkbox"],function(){x.valHooks[this]={set:function(e,n){return x.isArray(n)?e.checked=x.inArray(x(e).val(),n)>=0:t}},x.support.checkOn||(x.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})});var Z=/^(?:input|select|textarea)$/i,et=/^key/,tt=/^(?:mouse|contextmenu)|click/,nt=/^(?:focusinfocus|focusoutblur)$/,rt=/^([^.]*)(?:\.(.+)|)$/;function it(){return!0}function ot(){return!1}function at(){try{return a.activeElement}catch(e){}}x.event={global:{},add:function(e,n,r,o,a){var s,l,u,c,p,f,d,h,g,m,y,v=x._data(e);if(v){r.handler&&(c=r,r=c.handler,a=c.selector),r.guid||(r.guid=x.guid++),(l=v.events)||(l=v.events={}),(f=v.handle)||(f=v.handle=function(e){return typeof x===i||e&&x.event.triggered===e.type?t:x.event.dispatch.apply(f.elem,arguments)},f.elem=e),n=(n||"").match(T)||[""],u=n.length;while(u--)s=rt.exec(n[u])||[],g=y=s[1],m=(s[2]||"").split(".").sort(),g&&(p=x.event.special[g]||{},g=(a?p.delegateType:p.bindType)||g,p=x.event.special[g]||{},d=x.extend({type:g,origType:y,data:o,handler:r,guid:r.guid,selector:a,needsContext:a&&x.expr.match.needsContext.test(a),namespace:m.join(".")},c),(h=l[g])||(h=l[g]=[],h.delegateCount=0,p.setup&&p.setup.call(e,o,m,f)!==!1||(e.addEventListener?e.addEventListener(g,f,!1):e.attachEvent&&e.attachEvent("on"+g,f))),p.add&&(p.add.call(e,d),d.handler.guid||(d.handler.guid=r.guid)),a?h.splice(h.delegateCount++,0,d):h.push(d),x.event.global[g]=!0);e=null}},remove:function(e,t,n,r,i){var o,a,s,l,u,c,p,f,d,h,g,m=x.hasData(e)&&x._data(e);if(m&&(c=m.events)){t=(t||"").match(T)||[""],u=t.length;while(u--)if(s=rt.exec(t[u])||[],d=g=s[1],h=(s[2]||"").split(".").sort(),d){p=x.event.special[d]||{},d=(r?p.delegateType:p.bindType)||d,f=c[d]||[],s=s[2]&&RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),l=o=f.length;while(o--)a=f[o],!i&&g!==a.origType||n&&n.guid!==a.guid||s&&!s.test(a.namespace)||r&&r!==a.selector&&("**"!==r||!a.selector)||(f.splice(o,1),a.selector&&f.delegateCount--,p.remove&&p.remove.call(e,a));l&&!f.length&&(p.teardown&&p.teardown.call(e,h,m.handle)!==!1||x.removeEvent(e,d,m.handle),delete c[d])}else for(d in c)x.event.remove(e,d+t[u],n,r,!0);x.isEmptyObject(c)&&(delete m.handle,x._removeData(e,"events"))}},trigger:function(n,r,i,o){var s,l,u,c,p,f,d,h=[i||a],g=v.call(n,"type")?n.type:n,m=v.call(n,"namespace")?n.namespace.split("."):[];if(u=f=i=i||a,3!==i.nodeType&&8!==i.nodeType&&!nt.test(g+x.event.triggered)&&(g.indexOf(".")>=0&&(m=g.split("."),g=m.shift(),m.sort()),l=0>g.indexOf(":")&&"on"+g,n=n[x.expando]?n:new x.Event(g,"object"==typeof n&&n),n.isTrigger=o?2:3,n.namespace=m.join("."),n.namespace_re=n.namespace?RegExp("(^|\\.)"+m.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,n.result=t,n.target||(n.target=i),r=null==r?[n]:x.makeArray(r,[n]),p=x.event.special[g]||{},o||!p.trigger||p.trigger.apply(i,r)!==!1)){if(!o&&!p.noBubble&&!x.isWindow(i)){for(c=p.delegateType||g,nt.test(c+g)||(u=u.parentNode);u;u=u.parentNode)h.push(u),f=u;f===(i.ownerDocument||a)&&h.push(f.defaultView||f.parentWindow||e)}d=0;while((u=h[d++])&&!n.isPropagationStopped())n.type=d>1?c:p.bindType||g,s=(x._data(u,"events")||{})[n.type]&&x._data(u,"handle"),s&&s.apply(u,r),s=l&&u[l],s&&x.acceptData(u)&&s.apply&&s.apply(u,r)===!1&&n.preventDefault();if(n.type=g,!o&&!n.isDefaultPrevented()&&(!p._default||p._default.apply(h.pop(),r)===!1)&&x.acceptData(i)&&l&&i[g]&&!x.isWindow(i)){f=i[l],f&&(i[l]=null),x.event.triggered=g;try{i[g]()}catch(y){}x.event.triggered=t,f&&(i[l]=f)}return n.result}},dispatch:function(e){e=x.event.fix(e);var n,r,i,o,a,s=[],l=g.call(arguments),u=(x._data(this,"events")||{})[e.type]||[],c=x.event.special[e.type]||{};if(l[0]=e,e.delegateTarget=this,!c.preDispatch||c.preDispatch.call(this,e)!==!1){s=x.event.handlers.call(this,e,u),n=0;while((o=s[n++])&&!e.isPropagationStopped()){e.currentTarget=o.elem,a=0;while((i=o.handlers[a++])&&!e.isImmediatePropagationStopped())(!e.namespace_re||e.namespace_re.test(i.namespace))&&(e.handleObj=i,e.data=i.data,r=((x.event.special[i.origType]||{}).handle||i.handler).apply(o.elem,l),r!==t&&(e.result=r)===!1&&(e.preventDefault(),e.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,e),e.result}},handlers:function(e,n){var r,i,o,a,s=[],l=n.delegateCount,u=e.target;if(l&&u.nodeType&&(!e.button||"click"!==e.type))for(;u!=this;u=u.parentNode||this)if(1===u.nodeType&&(u.disabled!==!0||"click"!==e.type)){for(o=[],a=0;l>a;a++)i=n[a],r=i.selector+" ",o[r]===t&&(o[r]=i.needsContext?x(r,this).index(u)>=0:x.find(r,this,null,[u]).length),o[r]&&o.push(i);o.length&&s.push({elem:u,handlers:o})}return n.length>l&&s.push({elem:this,handlers:n.slice(l)}),s},fix:function(e){if(e[x.expando])return e;var t,n,r,i=e.type,o=e,s=this.fixHooks[i];s||(this.fixHooks[i]=s=tt.test(i)?this.mouseHooks:et.test(i)?this.keyHooks:{}),r=s.props?this.props.concat(s.props):this.props,e=new x.Event(o),t=r.length;while(t--)n=r[t],e[n]=o[n];return e.target||(e.target=o.srcElement||a),3===e.target.nodeType&&(e.target=e.target.parentNode),e.metaKey=!!e.metaKey,s.filter?s.filter(e,o):e},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,n){var r,i,o,s=n.button,l=n.fromElement;return null==e.pageX&&null!=n.clientX&&(i=e.target.ownerDocument||a,o=i.documentElement,r=i.body,e.pageX=n.clientX+(o&&o.scrollLeft||r&&r.scrollLeft||0)-(o&&o.clientLeft||r&&r.clientLeft||0),e.pageY=n.clientY+(o&&o.scrollTop||r&&r.scrollTop||0)-(o&&o.clientTop||r&&r.clientTop||0)),!e.relatedTarget&&l&&(e.relatedTarget=l===e.target?n.toElement:l),e.which||s===t||(e.which=1&s?1:2&s?3:4&s?2:0),e}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==at()&&this.focus)try{return this.focus(),!1}catch(e){}},delegateType:"focusin"},blur:{trigger:function(){return this===at()&&this.blur?(this.blur(),!1):t},delegateType:"focusout"},click:{trigger:function(){return x.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):t},_default:function(e){return x.nodeName(e.target,"a")}},beforeunload:{postDispatch:function(e){e.result!==t&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,n,r){var i=x.extend(new x.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?x.event.trigger(i,null,t):x.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},x.removeEvent=a.removeEventListener?function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)}:function(e,t,n){var r="on"+t;e.detachEvent&&(typeof e[r]===i&&(e[r]=null),e.detachEvent(r,n))},x.Event=function(e,n){return this instanceof x.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.returnValue===!1||e.getPreventDefault&&e.getPreventDefault()?it:ot):this.type=e,n&&x.extend(this,n),this.timeStamp=e&&e.timeStamp||x.now(),this[x.expando]=!0,t):new x.Event(e,n)},x.Event.prototype={isDefaultPrevented:ot,isPropagationStopped:ot,isImmediatePropagationStopped:ot,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=it,e&&(e.preventDefault?e.preventDefault():e.returnValue=!1)},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=it,e&&(e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=it,this.stopPropagation()}},x.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){x.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;return(!i||i!==r&&!x.contains(r,i))&&(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),x.support.submitBubbles||(x.event.special.submit={setup:function(){return x.nodeName(this,"form")?!1:(x.event.add(this,"click._submit keypress._submit",function(e){var n=e.target,r=x.nodeName(n,"input")||x.nodeName(n,"button")?n.form:t;r&&!x._data(r,"submitBubbles")&&(x.event.add(r,"submit._submit",function(e){e._submit_bubble=!0}),x._data(r,"submitBubbles",!0))}),t)},postDispatch:function(e){e._submit_bubble&&(delete e._submit_bubble,this.parentNode&&!e.isTrigger&&x.event.simulate("submit",this.parentNode,e,!0))},teardown:function(){return x.nodeName(this,"form")?!1:(x.event.remove(this,"._submit"),t)}}),x.support.changeBubbles||(x.event.special.change={setup:function(){return Z.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(x.event.add(this,"propertychange._change",function(e){"checked"===e.originalEvent.propertyName&&(this._just_changed=!0)}),x.event.add(this,"click._change",function(e){this._just_changed&&!e.isTrigger&&(this._just_changed=!1),x.event.simulate("change",this,e,!0)})),!1):(x.event.add(this,"beforeactivate._change",function(e){var t=e.target;Z.test(t.nodeName)&&!x._data(t,"changeBubbles")&&(x.event.add(t,"change._change",function(e){!this.parentNode||e.isSimulated||e.isTrigger||x.event.simulate("change",this.parentNode,e,!0)}),x._data(t,"changeBubbles",!0))}),t)},handle:function(e){var n=e.target;return this!==n||e.isSimulated||e.isTrigger||"radio"!==n.type&&"checkbox"!==n.type?e.handleObj.handler.apply(this,arguments):t},teardown:function(){return x.event.remove(this,"._change"),!Z.test(this.nodeName)}}),x.support.focusinBubbles||x.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,r=function(e){x.event.simulate(t,e.target,x.event.fix(e),!0)};x.event.special[t]={setup:function(){0===n++&&a.addEventListener(e,r,!0)},teardown:function(){0===--n&&a.removeEventListener(e,r,!0)}}}),x.fn.extend({on:function(e,n,r,i,o){var a,s;if("object"==typeof e){"string"!=typeof n&&(r=r||n,n=t);for(a in e)this.on(a,n,r,e[a],o);return this}if(null==r&&null==i?(i=n,r=n=t):null==i&&("string"==typeof n?(i=r,r=t):(i=r,r=n,n=t)),i===!1)i=ot;else if(!i)return this;return 1===o&&(s=i,i=function(e){return x().off(e),s.apply(this,arguments)},i.guid=s.guid||(s.guid=x.guid++)),this.each(function(){x.event.add(this,e,i,r,n)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,n,r){var i,o;if(e&&e.preventDefault&&e.handleObj)return i=e.handleObj,x(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if("object"==typeof e){for(o in e)this.off(o,n,e[o]);return this}return(n===!1||"function"==typeof n)&&(r=n,n=t),r===!1&&(r=ot),this.each(function(){x.event.remove(this,e,r,n)})},trigger:function(e,t){return this.each(function(){x.event.trigger(e,t,this)})},triggerHandler:function(e,n){var r=this[0];return r?x.event.trigger(e,n,r,!0):t}});var st=/^.[^:#\[\.,]*$/,lt=/^(?:parents|prev(?:Until|All))/,ut=x.expr.match.needsContext,ct={children:!0,contents:!0,next:!0,prev:!0};x.fn.extend({find:function(e){var t,n=[],r=this,i=r.length;if("string"!=typeof e)return this.pushStack(x(e).filter(function(){for(t=0;i>t;t++)if(x.contains(r[t],this))return!0}));for(t=0;i>t;t++)x.find(e,r[t],n);return n=this.pushStack(i>1?x.unique(n):n),n.selector=this.selector?this.selector+" "+e:e,n},has:function(e){var t,n=x(e,this),r=n.length;return this.filter(function(){for(t=0;r>t;t++)if(x.contains(this,n[t]))return!0})},not:function(e){return this.pushStack(ft(this,e||[],!0))},filter:function(e){return this.pushStack(ft(this,e||[],!1))},is:function(e){return!!ft(this,"string"==typeof e&&ut.test(e)?x(e):e||[],!1).length},closest:function(e,t){var n,r=0,i=this.length,o=[],a=ut.test(e)||"string"!=typeof e?x(e,t||this.context):0;for(;i>r;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(11>n.nodeType&&(a?a.index(n)>-1:1===n.nodeType&&x.find.matchesSelector(n,e))){n=o.push(n);break}return this.pushStack(o.length>1?x.unique(o):o)},index:function(e){return e?"string"==typeof e?x.inArray(this[0],x(e)):x.inArray(e.jquery?e[0]:e,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){var n="string"==typeof e?x(e,t):x.makeArray(e&&e.nodeType?[e]:e),r=x.merge(this.get(),n);return this.pushStack(x.unique(r))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}});function pt(e,t){do e=e[t];while(e&&1!==e.nodeType);return e}x.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return x.dir(e,"parentNode")},parentsUntil:function(e,t,n){return x.dir(e,"parentNode",n)},next:function(e){return pt(e,"nextSibling")},prev:function(e){return pt(e,"previousSibling")},nextAll:function(e){return x.dir(e,"nextSibling")},prevAll:function(e){return x.dir(e,"previousSibling")},nextUntil:function(e,t,n){return x.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return x.dir(e,"previousSibling",n)},siblings:function(e){return x.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return x.sibling(e.firstChild)},contents:function(e){return x.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:x.merge([],e.childNodes)}},function(e,t){x.fn[e]=function(n,r){var i=x.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=x.filter(r,i)),this.length>1&&(ct[e]||(i=x.unique(i)),lt.test(e)&&(i=i.reverse())),this.pushStack(i)}}),x.extend({filter:function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?x.find.matchesSelector(r,e)?[r]:[]:x.find.matches(e,x.grep(t,function(e){return 1===e.nodeType}))},dir:function(e,n,r){var i=[],o=e[n];while(o&&9!==o.nodeType&&(r===t||1!==o.nodeType||!x(o).is(r)))1===o.nodeType&&i.push(o),o=o[n];return i},sibling:function(e,t){var n=[];for(;e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}});function ft(e,t,n){if(x.isFunction(t))return x.grep(e,function(e,r){return!!t.call(e,r,e)!==n});if(t.nodeType)return x.grep(e,function(e){return e===t!==n});if("string"==typeof t){if(st.test(t))return x.filter(t,e,n);t=x.filter(t,e)}return x.grep(e,function(e){return x.inArray(e,t)>=0!==n})}function dt(e){var t=ht.split("|"),n=e.createDocumentFragment();if(n.createElement)while(t.length)n.createElement(t.pop());return n}var ht="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",gt=/ jQuery\d+="(?:null|\d+)"/g,mt=RegExp("<(?:"+ht+")[\\s/>]","i"),yt=/^\s+/,vt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bt=/<([\w:]+)/,xt=/<tbody/i,wt=/<|&#?\w+;/,Tt=/<(?:script|style|link)/i,Ct=/^(?:checkbox|radio)$/i,Nt=/checked\s*(?:[^=]|=\s*.checked.)/i,kt=/^$|\/(?:java|ecma)script/i,Et=/^true\/(.*)/,St=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,At={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:x.support.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},jt=dt(a),Dt=jt.appendChild(a.createElement("div"));At.optgroup=At.option,At.tbody=At.tfoot=At.colgroup=At.caption=At.thead,At.th=At.td,x.fn.extend({text:function(e){return x.access(this,function(e){return e===t?x.text(this):this.empty().append((this[0]&&this[0].ownerDocument||a).createTextNode(e))},null,e,arguments.length)},append:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Lt(this,e);t.appendChild(e)}})},prepend:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Lt(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},remove:function(e,t){var n,r=e?x.filter(e,this):this,i=0;for(;null!=(n=r[i]);i++)t||1!==n.nodeType||x.cleanData(Ft(n)),n.parentNode&&(t&&x.contains(n.ownerDocument,n)&&_t(Ft(n,"script")),n.parentNode.removeChild(n));return this},empty:function(){var e,t=0;for(;null!=(e=this[t]);t++){1===e.nodeType&&x.cleanData(Ft(e,!1));while(e.firstChild)e.removeChild(e.firstChild);e.options&&x.nodeName(e,"select")&&(e.options.length=0)}return this},clone:function(e,t){return e=null==e?!1:e,t=null==t?e:t,this.map(function(){return x.clone(this,e,t)})},html:function(e){return x.access(this,function(e){var n=this[0]||{},r=0,i=this.length;if(e===t)return 1===n.nodeType?n.innerHTML.replace(gt,""):t;if(!("string"!=typeof e||Tt.test(e)||!x.support.htmlSerialize&&mt.test(e)||!x.support.leadingWhitespace&&yt.test(e)||At[(bt.exec(e)||["",""])[1].toLowerCase()])){e=e.replace(vt,"<$1></$2>");try{for(;i>r;r++)n=this[r]||{},1===n.nodeType&&(x.cleanData(Ft(n,!1)),n.innerHTML=e);n=0}catch(o){}}n&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=x.map(this,function(e){return[e.nextSibling,e.parentNode]}),t=0;return this.domManip(arguments,function(n){var r=e[t++],i=e[t++];i&&(r&&r.parentNode!==i&&(r=this.nextSibling),x(this).remove(),i.insertBefore(n,r))},!0),t?this:this.remove()},detach:function(e){return this.remove(e,!0)},domManip:function(e,t,n){e=d.apply([],e);var r,i,o,a,s,l,u=0,c=this.length,p=this,f=c-1,h=e[0],g=x.isFunction(h);if(g||!(1>=c||"string"!=typeof h||x.support.checkClone)&&Nt.test(h))return this.each(function(r){var i=p.eq(r);g&&(e[0]=h.call(this,r,i.html())),i.domManip(e,t,n)});if(c&&(l=x.buildFragment(e,this[0].ownerDocument,!1,!n&&this),r=l.firstChild,1===l.childNodes.length&&(l=r),r)){for(a=x.map(Ft(l,"script"),Ht),o=a.length;c>u;u++)i=l,u!==f&&(i=x.clone(i,!0,!0),o&&x.merge(a,Ft(i,"script"))),t.call(this[u],i,u);if(o)for(s=a[a.length-1].ownerDocument,x.map(a,qt),u=0;o>u;u++)i=a[u],kt.test(i.type||"")&&!x._data(i,"globalEval")&&x.contains(s,i)&&(i.src?x._evalUrl(i.src):x.globalEval((i.text||i.textContent||i.innerHTML||"").replace(St,"")));l=r=null}return this}});function Lt(e,t){return x.nodeName(e,"table")&&x.nodeName(1===t.nodeType?t:t.firstChild,"tr")?e.getElementsByTagName("tbody")[0]||e.appendChild(e.ownerDocument.createElement("tbody")):e}function Ht(e){return e.type=(null!==x.find.attr(e,"type"))+"/"+e.type,e}function qt(e){var t=Et.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function _t(e,t){var n,r=0;for(;null!=(n=e[r]);r++)x._data(n,"globalEval",!t||x._data(t[r],"globalEval"))}function Mt(e,t){if(1===t.nodeType&&x.hasData(e)){var n,r,i,o=x._data(e),a=x._data(t,o),s=o.events;if(s){delete a.handle,a.events={};for(n in s)for(r=0,i=s[n].length;i>r;r++)x.event.add(t,n,s[n][r])}a.data&&(a.data=x.extend({},a.data))}}function Ot(e,t){var n,r,i;if(1===t.nodeType){if(n=t.nodeName.toLowerCase(),!x.support.noCloneEvent&&t[x.expando]){i=x._data(t);for(r in i.events)x.removeEvent(t,r,i.handle);t.removeAttribute(x.expando)}"script"===n&&t.text!==e.text?(Ht(t).text=e.text,qt(t)):"object"===n?(t.parentNode&&(t.outerHTML=e.outerHTML),x.support.html5Clone&&e.innerHTML&&!x.trim(t.innerHTML)&&(t.innerHTML=e.innerHTML)):"input"===n&&Ct.test(e.type)?(t.defaultChecked=t.checked=e.checked,t.value!==e.value&&(t.value=e.value)):"option"===n?t.defaultSelected=t.selected=e.defaultSelected:("input"===n||"textarea"===n)&&(t.defaultValue=e.defaultValue)}}x.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){x.fn[e]=function(e){var n,r=0,i=[],o=x(e),a=o.length-1;for(;a>=r;r++)n=r===a?this:this.clone(!0),x(o[r])[t](n),h.apply(i,n.get());return this.pushStack(i)}});function Ft(e,n){var r,o,a=0,s=typeof e.getElementsByTagName!==i?e.getElementsByTagName(n||"*"):typeof e.querySelectorAll!==i?e.querySelectorAll(n||"*"):t;if(!s)for(s=[],r=e.childNodes||e;null!=(o=r[a]);a++)!n||x.nodeName(o,n)?s.push(o):x.merge(s,Ft(o,n));return n===t||n&&x.nodeName(e,n)?x.merge([e],s):s}function Bt(e){Ct.test(e.type)&&(e.defaultChecked=e.checked)}x.extend({clone:function(e,t,n){var r,i,o,a,s,l=x.contains(e.ownerDocument,e);if(x.support.html5Clone||x.isXMLDoc(e)||!mt.test("<"+e.nodeName+">")?o=e.cloneNode(!0):(Dt.innerHTML=e.outerHTML,Dt.removeChild(o=Dt.firstChild)),!(x.support.noCloneEvent&&x.support.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||x.isXMLDoc(e)))for(r=Ft(o),s=Ft(e),a=0;null!=(i=s[a]);++a)r[a]&&Ot(i,r[a]);if(t)if(n)for(s=s||Ft(e),r=r||Ft(o),a=0;null!=(i=s[a]);a++)Mt(i,r[a]);else Mt(e,o);return r=Ft(o,"script"),r.length>0&&_t(r,!l&&Ft(e,"script")),r=s=i=null,o},buildFragment:function(e,t,n,r){var i,o,a,s,l,u,c,p=e.length,f=dt(t),d=[],h=0;for(;p>h;h++)if(o=e[h],o||0===o)if("object"===x.type(o))x.merge(d,o.nodeType?[o]:o);else if(wt.test(o)){s=s||f.appendChild(t.createElement("div")),l=(bt.exec(o)||["",""])[1].toLowerCase(),c=At[l]||At._default,s.innerHTML=c[1]+o.replace(vt,"<$1></$2>")+c[2],i=c[0];while(i--)s=s.lastChild;if(!x.support.leadingWhitespace&&yt.test(o)&&d.push(t.createTextNode(yt.exec(o)[0])),!x.support.tbody){o="table"!==l||xt.test(o)?"<table>"!==c[1]||xt.test(o)?0:s:s.firstChild,i=o&&o.childNodes.length;while(i--)x.nodeName(u=o.childNodes[i],"tbody")&&!u.childNodes.length&&o.removeChild(u)}x.merge(d,s.childNodes),s.textContent="";while(s.firstChild)s.removeChild(s.firstChild);s=f.lastChild}else d.push(t.createTextNode(o));s&&f.removeChild(s),x.support.appendChecked||x.grep(Ft(d,"input"),Bt),h=0;while(o=d[h++])if((!r||-1===x.inArray(o,r))&&(a=x.contains(o.ownerDocument,o),s=Ft(f.appendChild(o),"script"),a&&_t(s),n)){i=0;while(o=s[i++])kt.test(o.type||"")&&n.push(o)}return s=null,f},cleanData:function(e,t){var n,r,o,a,s=0,l=x.expando,u=x.cache,c=x.support.deleteExpando,f=x.event.special;for(;null!=(n=e[s]);s++)if((t||x.acceptData(n))&&(o=n[l],a=o&&u[o])){if(a.events)for(r in a.events)f[r]?x.event.remove(n,r):x.removeEvent(n,r,a.handle);
u[o]&&(delete u[o],c?delete n[l]:typeof n.removeAttribute!==i?n.removeAttribute(l):n[l]=null,p.push(o))}},_evalUrl:function(e){return x.ajax({url:e,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})}}),x.fn.extend({wrapAll:function(e){if(x.isFunction(e))return this.each(function(t){x(this).wrapAll(e.call(this,t))});if(this[0]){var t=x(e,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstChild&&1===e.firstChild.nodeType)e=e.firstChild;return e}).append(this)}return this},wrapInner:function(e){return x.isFunction(e)?this.each(function(t){x(this).wrapInner(e.call(this,t))}):this.each(function(){var t=x(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=x.isFunction(e);return this.each(function(n){x(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){x.nodeName(this,"body")||x(this).replaceWith(this.childNodes)}).end()}});var Pt,Rt,Wt,$t=/alpha\([^)]*\)/i,It=/opacity\s*=\s*([^)]*)/,zt=/^(top|right|bottom|left)$/,Xt=/^(none|table(?!-c[ea]).+)/,Ut=/^margin/,Vt=RegExp("^("+w+")(.*)$","i"),Yt=RegExp("^("+w+")(?!px)[a-z%]+$","i"),Jt=RegExp("^([+-])=("+w+")","i"),Gt={BODY:"block"},Qt={position:"absolute",visibility:"hidden",display:"block"},Kt={letterSpacing:0,fontWeight:400},Zt=["Top","Right","Bottom","Left"],en=["Webkit","O","Moz","ms"];function tn(e,t){if(t in e)return t;var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=en.length;while(i--)if(t=en[i]+n,t in e)return t;return r}function nn(e,t){return e=t||e,"none"===x.css(e,"display")||!x.contains(e.ownerDocument,e)}function rn(e,t){var n,r,i,o=[],a=0,s=e.length;for(;s>a;a++)r=e[a],r.style&&(o[a]=x._data(r,"olddisplay"),n=r.style.display,t?(o[a]||"none"!==n||(r.style.display=""),""===r.style.display&&nn(r)&&(o[a]=x._data(r,"olddisplay",ln(r.nodeName)))):o[a]||(i=nn(r),(n&&"none"!==n||!i)&&x._data(r,"olddisplay",i?n:x.css(r,"display"))));for(a=0;s>a;a++)r=e[a],r.style&&(t&&"none"!==r.style.display&&""!==r.style.display||(r.style.display=t?o[a]||"":"none"));return e}x.fn.extend({css:function(e,n){return x.access(this,function(e,n,r){var i,o,a={},s=0;if(x.isArray(n)){for(o=Rt(e),i=n.length;i>s;s++)a[n[s]]=x.css(e,n[s],!1,o);return a}return r!==t?x.style(e,n,r):x.css(e,n)},e,n,arguments.length>1)},show:function(){return rn(this,!0)},hide:function(){return rn(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){nn(this)?x(this).show():x(this).hide()})}}),x.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Wt(e,"opacity");return""===n?"1":n}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":x.support.cssFloat?"cssFloat":"styleFloat"},style:function(e,n,r,i){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var o,a,s,l=x.camelCase(n),u=e.style;if(n=x.cssProps[l]||(x.cssProps[l]=tn(u,l)),s=x.cssHooks[n]||x.cssHooks[l],r===t)return s&&"get"in s&&(o=s.get(e,!1,i))!==t?o:u[n];if(a=typeof r,"string"===a&&(o=Jt.exec(r))&&(r=(o[1]+1)*o[2]+parseFloat(x.css(e,n)),a="number"),!(null==r||"number"===a&&isNaN(r)||("number"!==a||x.cssNumber[l]||(r+="px"),x.support.clearCloneStyle||""!==r||0!==n.indexOf("background")||(u[n]="inherit"),s&&"set"in s&&(r=s.set(e,r,i))===t)))try{u[n]=r}catch(c){}}},css:function(e,n,r,i){var o,a,s,l=x.camelCase(n);return n=x.cssProps[l]||(x.cssProps[l]=tn(e.style,l)),s=x.cssHooks[n]||x.cssHooks[l],s&&"get"in s&&(a=s.get(e,!0,r)),a===t&&(a=Wt(e,n,i)),"normal"===a&&n in Kt&&(a=Kt[n]),""===r||r?(o=parseFloat(a),r===!0||x.isNumeric(o)?o||0:a):a}}),e.getComputedStyle?(Rt=function(t){return e.getComputedStyle(t,null)},Wt=function(e,n,r){var i,o,a,s=r||Rt(e),l=s?s.getPropertyValue(n)||s[n]:t,u=e.style;return s&&(""!==l||x.contains(e.ownerDocument,e)||(l=x.style(e,n)),Yt.test(l)&&Ut.test(n)&&(i=u.width,o=u.minWidth,a=u.maxWidth,u.minWidth=u.maxWidth=u.width=l,l=s.width,u.width=i,u.minWidth=o,u.maxWidth=a)),l}):a.documentElement.currentStyle&&(Rt=function(e){return e.currentStyle},Wt=function(e,n,r){var i,o,a,s=r||Rt(e),l=s?s[n]:t,u=e.style;return null==l&&u&&u[n]&&(l=u[n]),Yt.test(l)&&!zt.test(n)&&(i=u.left,o=e.runtimeStyle,a=o&&o.left,a&&(o.left=e.currentStyle.left),u.left="fontSize"===n?"1em":l,l=u.pixelLeft+"px",u.left=i,a&&(o.left=a)),""===l?"auto":l});function on(e,t,n){var r=Vt.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function an(e,t,n,r,i){var o=n===(r?"border":"content")?4:"width"===t?1:0,a=0;for(;4>o;o+=2)"margin"===n&&(a+=x.css(e,n+Zt[o],!0,i)),r?("content"===n&&(a-=x.css(e,"padding"+Zt[o],!0,i)),"margin"!==n&&(a-=x.css(e,"border"+Zt[o]+"Width",!0,i))):(a+=x.css(e,"padding"+Zt[o],!0,i),"padding"!==n&&(a+=x.css(e,"border"+Zt[o]+"Width",!0,i)));return a}function sn(e,t,n){var r=!0,i="width"===t?e.offsetWidth:e.offsetHeight,o=Rt(e),a=x.support.boxSizing&&"border-box"===x.css(e,"boxSizing",!1,o);if(0>=i||null==i){if(i=Wt(e,t,o),(0>i||null==i)&&(i=e.style[t]),Yt.test(i))return i;r=a&&(x.support.boxSizingReliable||i===e.style[t]),i=parseFloat(i)||0}return i+an(e,t,n||(a?"border":"content"),r,o)+"px"}function ln(e){var t=a,n=Gt[e];return n||(n=un(e,t),"none"!==n&&n||(Pt=(Pt||x("<iframe frameborder='0' width='0' height='0'/>").css("cssText","display:block !important")).appendTo(t.documentElement),t=(Pt[0].contentWindow||Pt[0].contentDocument).document,t.write("<!doctype html><html><body>"),t.close(),n=un(e,t),Pt.detach()),Gt[e]=n),n}function un(e,t){var n=x(t.createElement(e)).appendTo(t.body),r=x.css(n[0],"display");return n.remove(),r}x.each(["height","width"],function(e,n){x.cssHooks[n]={get:function(e,r,i){return r?0===e.offsetWidth&&Xt.test(x.css(e,"display"))?x.swap(e,Qt,function(){return sn(e,n,i)}):sn(e,n,i):t},set:function(e,t,r){var i=r&&Rt(e);return on(e,t,r?an(e,n,r,x.support.boxSizing&&"border-box"===x.css(e,"boxSizing",!1,i),i):0)}}}),x.support.opacity||(x.cssHooks.opacity={get:function(e,t){return It.test((t&&e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":t?"1":""},set:function(e,t){var n=e.style,r=e.currentStyle,i=x.isNumeric(t)?"alpha(opacity="+100*t+")":"",o=r&&r.filter||n.filter||"";n.zoom=1,(t>=1||""===t)&&""===x.trim(o.replace($t,""))&&n.removeAttribute&&(n.removeAttribute("filter"),""===t||r&&!r.filter)||(n.filter=$t.test(o)?o.replace($t,i):o+" "+i)}}),x(function(){x.support.reliableMarginRight||(x.cssHooks.marginRight={get:function(e,n){return n?x.swap(e,{display:"inline-block"},Wt,[e,"marginRight"]):t}}),!x.support.pixelPosition&&x.fn.position&&x.each(["top","left"],function(e,n){x.cssHooks[n]={get:function(e,r){return r?(r=Wt(e,n),Yt.test(r)?x(e).position()[n]+"px":r):t}}})}),x.expr&&x.expr.filters&&(x.expr.filters.hidden=function(e){return 0>=e.offsetWidth&&0>=e.offsetHeight||!x.support.reliableHiddenOffsets&&"none"===(e.style&&e.style.display||x.css(e,"display"))},x.expr.filters.visible=function(e){return!x.expr.filters.hidden(e)}),x.each({margin:"",padding:"",border:"Width"},function(e,t){x.cssHooks[e+t]={expand:function(n){var r=0,i={},o="string"==typeof n?n.split(" "):[n];for(;4>r;r++)i[e+Zt[r]+t]=o[r]||o[r-2]||o[0];return i}},Ut.test(e)||(x.cssHooks[e+t].set=on)});var cn=/%20/g,pn=/\[\]$/,fn=/\r?\n/g,dn=/^(?:submit|button|image|reset|file)$/i,hn=/^(?:input|select|textarea|keygen)/i;x.fn.extend({serialize:function(){return x.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=x.prop(this,"elements");return e?x.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!x(this).is(":disabled")&&hn.test(this.nodeName)&&!dn.test(e)&&(this.checked||!Ct.test(e))}).map(function(e,t){var n=x(this).val();return null==n?null:x.isArray(n)?x.map(n,function(e){return{name:t.name,value:e.replace(fn,"\r\n")}}):{name:t.name,value:n.replace(fn,"\r\n")}}).get()}}),x.param=function(e,n){var r,i=[],o=function(e,t){t=x.isFunction(t)?t():null==t?"":t,i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(n===t&&(n=x.ajaxSettings&&x.ajaxSettings.traditional),x.isArray(e)||e.jquery&&!x.isPlainObject(e))x.each(e,function(){o(this.name,this.value)});else for(r in e)gn(r,e[r],n,o);return i.join("&").replace(cn,"+")};function gn(e,t,n,r){var i;if(x.isArray(t))x.each(t,function(t,i){n||pn.test(e)?r(e,i):gn(e+"["+("object"==typeof i?t:"")+"]",i,n,r)});else if(n||"object"!==x.type(t))r(e,t);else for(i in t)gn(e+"["+i+"]",t[i],n,r)}x.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){x.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),x.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}});var mn,yn,vn=x.now(),bn=/\?/,xn=/#.*$/,wn=/([?&])_=[^&]*/,Tn=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Cn=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Nn=/^(?:GET|HEAD)$/,kn=/^\/\//,En=/^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,Sn=x.fn.load,An={},jn={},Dn="*/".concat("*");try{yn=o.href}catch(Ln){yn=a.createElement("a"),yn.href="",yn=yn.href}mn=En.exec(yn.toLowerCase())||[];function Hn(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(T)||[];if(x.isFunction(n))while(r=o[i++])"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function qn(e,n,r,i){var o={},a=e===jn;function s(l){var u;return o[l]=!0,x.each(e[l]||[],function(e,l){var c=l(n,r,i);return"string"!=typeof c||a||o[c]?a?!(u=c):t:(n.dataTypes.unshift(c),s(c),!1)}),u}return s(n.dataTypes[0])||!o["*"]&&s("*")}function _n(e,n){var r,i,o=x.ajaxSettings.flatOptions||{};for(i in n)n[i]!==t&&((o[i]?e:r||(r={}))[i]=n[i]);return r&&x.extend(!0,e,r),e}x.fn.load=function(e,n,r){if("string"!=typeof e&&Sn)return Sn.apply(this,arguments);var i,o,a,s=this,l=e.indexOf(" ");return l>=0&&(i=e.slice(l,e.length),e=e.slice(0,l)),x.isFunction(n)?(r=n,n=t):n&&"object"==typeof n&&(a="POST"),s.length>0&&x.ajax({url:e,type:a,dataType:"html",data:n}).done(function(e){o=arguments,s.html(i?x("<div>").append(x.parseHTML(e)).find(i):e)}).complete(r&&function(e,t){s.each(r,o||[e.responseText,t,e])}),this},x.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){x.fn[t]=function(e){return this.on(t,e)}}),x.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:yn,type:"GET",isLocal:Cn.test(mn[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Dn,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":x.parseJSON,"text xml":x.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?_n(_n(e,x.ajaxSettings),t):_n(x.ajaxSettings,e)},ajaxPrefilter:Hn(An),ajaxTransport:Hn(jn),ajax:function(e,n){"object"==typeof e&&(n=e,e=t),n=n||{};var r,i,o,a,s,l,u,c,p=x.ajaxSetup({},n),f=p.context||p,d=p.context&&(f.nodeType||f.jquery)?x(f):x.event,h=x.Deferred(),g=x.Callbacks("once memory"),m=p.statusCode||{},y={},v={},b=0,w="canceled",C={readyState:0,getResponseHeader:function(e){var t;if(2===b){if(!c){c={};while(t=Tn.exec(a))c[t[1].toLowerCase()]=t[2]}t=c[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===b?a:null},setRequestHeader:function(e,t){var n=e.toLowerCase();return b||(e=v[n]=v[n]||e,y[e]=t),this},overrideMimeType:function(e){return b||(p.mimeType=e),this},statusCode:function(e){var t;if(e)if(2>b)for(t in e)m[t]=[m[t],e[t]];else C.always(e[C.status]);return this},abort:function(e){var t=e||w;return u&&u.abort(t),k(0,t),this}};if(h.promise(C).complete=g.add,C.success=C.done,C.error=C.fail,p.url=((e||p.url||yn)+"").replace(xn,"").replace(kn,mn[1]+"//"),p.type=n.method||n.type||p.method||p.type,p.dataTypes=x.trim(p.dataType||"*").toLowerCase().match(T)||[""],null==p.crossDomain&&(r=En.exec(p.url.toLowerCase()),p.crossDomain=!(!r||r[1]===mn[1]&&r[2]===mn[2]&&(r[3]||("http:"===r[1]?"80":"443"))===(mn[3]||("http:"===mn[1]?"80":"443")))),p.data&&p.processData&&"string"!=typeof p.data&&(p.data=x.param(p.data,p.traditional)),qn(An,p,n,C),2===b)return C;l=p.global,l&&0===x.active++&&x.event.trigger("ajaxStart"),p.type=p.type.toUpperCase(),p.hasContent=!Nn.test(p.type),o=p.url,p.hasContent||(p.data&&(o=p.url+=(bn.test(o)?"&":"?")+p.data,delete p.data),p.cache===!1&&(p.url=wn.test(o)?o.replace(wn,"$1_="+vn++):o+(bn.test(o)?"&":"?")+"_="+vn++)),p.ifModified&&(x.lastModified[o]&&C.setRequestHeader("If-Modified-Since",x.lastModified[o]),x.etag[o]&&C.setRequestHeader("If-None-Match",x.etag[o])),(p.data&&p.hasContent&&p.contentType!==!1||n.contentType)&&C.setRequestHeader("Content-Type",p.contentType),C.setRequestHeader("Accept",p.dataTypes[0]&&p.accepts[p.dataTypes[0]]?p.accepts[p.dataTypes[0]]+("*"!==p.dataTypes[0]?", "+Dn+"; q=0.01":""):p.accepts["*"]);for(i in p.headers)C.setRequestHeader(i,p.headers[i]);if(p.beforeSend&&(p.beforeSend.call(f,C,p)===!1||2===b))return C.abort();w="abort";for(i in{success:1,error:1,complete:1})C[i](p[i]);if(u=qn(jn,p,n,C)){C.readyState=1,l&&d.trigger("ajaxSend",[C,p]),p.async&&p.timeout>0&&(s=setTimeout(function(){C.abort("timeout")},p.timeout));try{b=1,u.send(y,k)}catch(N){if(!(2>b))throw N;k(-1,N)}}else k(-1,"No Transport");function k(e,n,r,i){var c,y,v,w,T,N=n;2!==b&&(b=2,s&&clearTimeout(s),u=t,a=i||"",C.readyState=e>0?4:0,c=e>=200&&300>e||304===e,r&&(w=Mn(p,C,r)),w=On(p,w,C,c),c?(p.ifModified&&(T=C.getResponseHeader("Last-Modified"),T&&(x.lastModified[o]=T),T=C.getResponseHeader("etag"),T&&(x.etag[o]=T)),204===e||"HEAD"===p.type?N="nocontent":304===e?N="notmodified":(N=w.state,y=w.data,v=w.error,c=!v)):(v=N,(e||!N)&&(N="error",0>e&&(e=0))),C.status=e,C.statusText=(n||N)+"",c?h.resolveWith(f,[y,N,C]):h.rejectWith(f,[C,N,v]),C.statusCode(m),m=t,l&&d.trigger(c?"ajaxSuccess":"ajaxError",[C,p,c?y:v]),g.fireWith(f,[C,N]),l&&(d.trigger("ajaxComplete",[C,p]),--x.active||x.event.trigger("ajaxStop")))}return C},getJSON:function(e,t,n){return x.get(e,t,n,"json")},getScript:function(e,n){return x.get(e,t,n,"script")}}),x.each(["get","post"],function(e,n){x[n]=function(e,r,i,o){return x.isFunction(r)&&(o=o||i,i=r,r=t),x.ajax({url:e,type:n,dataType:o,data:r,success:i})}});function Mn(e,n,r){var i,o,a,s,l=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),o===t&&(o=e.mimeType||n.getResponseHeader("Content-Type"));if(o)for(s in l)if(l[s]&&l[s].test(o)){u.unshift(s);break}if(u[0]in r)a=u[0];else{for(s in r){if(!u[0]||e.converters[s+" "+u[0]]){a=s;break}i||(i=s)}a=a||i}return a?(a!==u[0]&&u.unshift(a),r[a]):t}function On(e,t,n,r){var i,o,a,s,l,u={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)u[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!l&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),l=o,o=c.shift())if("*"===o)o=l;else if("*"!==l&&l!==o){if(a=u[l+" "+o]||u["* "+o],!a)for(i in u)if(s=i.split(" "),s[1]===o&&(a=u[l+" "+s[0]]||u["* "+s[0]])){a===!0?a=u[i]:u[i]!==!0&&(o=s[0],c.unshift(s[1]));break}if(a!==!0)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(p){return{state:"parsererror",error:a?p:"No conversion from "+l+" to "+o}}}return{state:"success",data:t}}x.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){return x.globalEval(e),e}}}),x.ajaxPrefilter("script",function(e){e.cache===t&&(e.cache=!1),e.crossDomain&&(e.type="GET",e.global=!1)}),x.ajaxTransport("script",function(e){if(e.crossDomain){var n,r=a.head||x("head")[0]||a.documentElement;return{send:function(t,i){n=a.createElement("script"),n.async=!0,e.scriptCharset&&(n.charset=e.scriptCharset),n.src=e.url,n.onload=n.onreadystatechange=function(e,t){(t||!n.readyState||/loaded|complete/.test(n.readyState))&&(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),n=null,t||i(200,"success"))},r.insertBefore(n,r.firstChild)},abort:function(){n&&n.onload(t,!0)}}}});var Fn=[],Bn=/(=)\?(?=&|$)|\?\?/;x.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Fn.pop()||x.expando+"_"+vn++;return this[e]=!0,e}}),x.ajaxPrefilter("json jsonp",function(n,r,i){var o,a,s,l=n.jsonp!==!1&&(Bn.test(n.url)?"url":"string"==typeof n.data&&!(n.contentType||"").indexOf("application/x-www-form-urlencoded")&&Bn.test(n.data)&&"data");return l||"jsonp"===n.dataTypes[0]?(o=n.jsonpCallback=x.isFunction(n.jsonpCallback)?n.jsonpCallback():n.jsonpCallback,l?n[l]=n[l].replace(Bn,"$1"+o):n.jsonp!==!1&&(n.url+=(bn.test(n.url)?"&":"?")+n.jsonp+"="+o),n.converters["script json"]=function(){return s||x.error(o+" was not called"),s[0]},n.dataTypes[0]="json",a=e[o],e[o]=function(){s=arguments},i.always(function(){e[o]=a,n[o]&&(n.jsonpCallback=r.jsonpCallback,Fn.push(o)),s&&x.isFunction(a)&&a(s[0]),s=a=t}),"script"):t});var Pn,Rn,Wn=0,$n=e.ActiveXObject&&function(){var e;for(e in Pn)Pn[e](t,!0)};function In(){try{return new e.XMLHttpRequest}catch(t){}}function zn(){try{return new e.ActiveXObject("Microsoft.XMLHTTP")}catch(t){}}x.ajaxSettings.xhr=e.ActiveXObject?function(){return!this.isLocal&&In()||zn()}:In,Rn=x.ajaxSettings.xhr(),x.support.cors=!!Rn&&"withCredentials"in Rn,Rn=x.support.ajax=!!Rn,Rn&&x.ajaxTransport(function(n){if(!n.crossDomain||x.support.cors){var r;return{send:function(i,o){var a,s,l=n.xhr();if(n.username?l.open(n.type,n.url,n.async,n.username,n.password):l.open(n.type,n.url,n.async),n.xhrFields)for(s in n.xhrFields)l[s]=n.xhrFields[s];n.mimeType&&l.overrideMimeType&&l.overrideMimeType(n.mimeType),n.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest");try{for(s in i)l.setRequestHeader(s,i[s])}catch(u){}l.send(n.hasContent&&n.data||null),r=function(e,i){var s,u,c,p;try{if(r&&(i||4===l.readyState))if(r=t,a&&(l.onreadystatechange=x.noop,$n&&delete Pn[a]),i)4!==l.readyState&&l.abort();else{p={},s=l.status,u=l.getAllResponseHeaders(),"string"==typeof l.responseText&&(p.text=l.responseText);try{c=l.statusText}catch(f){c=""}s||!n.isLocal||n.crossDomain?1223===s&&(s=204):s=p.text?200:404}}catch(d){i||o(-1,d)}p&&o(s,c,p,u)},n.async?4===l.readyState?setTimeout(r):(a=++Wn,$n&&(Pn||(Pn={},x(e).unload($n)),Pn[a]=r),l.onreadystatechange=r):r()},abort:function(){r&&r(t,!0)}}}});var Xn,Un,Vn=/^(?:toggle|show|hide)$/,Yn=RegExp("^(?:([+-])=|)("+w+")([a-z%]*)$","i"),Jn=/queueHooks$/,Gn=[nr],Qn={"*":[function(e,t){var n=this.createTween(e,t),r=n.cur(),i=Yn.exec(t),o=i&&i[3]||(x.cssNumber[e]?"":"px"),a=(x.cssNumber[e]||"px"!==o&&+r)&&Yn.exec(x.css(n.elem,e)),s=1,l=20;if(a&&a[3]!==o){o=o||a[3],i=i||[],a=+r||1;do s=s||".5",a/=s,x.style(n.elem,e,a+o);while(s!==(s=n.cur()/r)&&1!==s&&--l)}return i&&(a=n.start=+a||+r||0,n.unit=o,n.end=i[1]?a+(i[1]+1)*i[2]:+i[2]),n}]};function Kn(){return setTimeout(function(){Xn=t}),Xn=x.now()}function Zn(e,t,n){var r,i=(Qn[t]||[]).concat(Qn["*"]),o=0,a=i.length;for(;a>o;o++)if(r=i[o].call(n,t,e))return r}function er(e,t,n){var r,i,o=0,a=Gn.length,s=x.Deferred().always(function(){delete l.elem}),l=function(){if(i)return!1;var t=Xn||Kn(),n=Math.max(0,u.startTime+u.duration-t),r=n/u.duration||0,o=1-r,a=0,l=u.tweens.length;for(;l>a;a++)u.tweens[a].run(o);return s.notifyWith(e,[u,o,n]),1>o&&l?n:(s.resolveWith(e,[u]),!1)},u=s.promise({elem:e,props:x.extend({},t),opts:x.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:Xn||Kn(),duration:n.duration,tweens:[],createTween:function(t,n){var r=x.Tween(e,u.opts,t,n,u.opts.specialEasing[t]||u.opts.easing);return u.tweens.push(r),r},stop:function(t){var n=0,r=t?u.tweens.length:0;if(i)return this;for(i=!0;r>n;n++)u.tweens[n].run(1);return t?s.resolveWith(e,[u,t]):s.rejectWith(e,[u,t]),this}}),c=u.props;for(tr(c,u.opts.specialEasing);a>o;o++)if(r=Gn[o].call(u,e,c,u.opts))return r;return x.map(c,Zn,u),x.isFunction(u.opts.start)&&u.opts.start.call(e,u),x.fx.timer(x.extend(l,{elem:e,anim:u,queue:u.opts.queue})),u.progress(u.opts.progress).done(u.opts.done,u.opts.complete).fail(u.opts.fail).always(u.opts.always)}function tr(e,t){var n,r,i,o,a;for(n in e)if(r=x.camelCase(n),i=t[r],o=e[n],x.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),a=x.cssHooks[r],a&&"expand"in a){o=a.expand(o),delete e[r];for(n in o)n in e||(e[n]=o[n],t[n]=i)}else t[r]=i}x.Animation=x.extend(er,{tweener:function(e,t){x.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");var n,r=0,i=e.length;for(;i>r;r++)n=e[r],Qn[n]=Qn[n]||[],Qn[n].unshift(t)},prefilter:function(e,t){t?Gn.unshift(e):Gn.push(e)}});function nr(e,t,n){var r,i,o,a,s,l,u=this,c={},p=e.style,f=e.nodeType&&nn(e),d=x._data(e,"fxshow");n.queue||(s=x._queueHooks(e,"fx"),null==s.unqueued&&(s.unqueued=0,l=s.empty.fire,s.empty.fire=function(){s.unqueued||l()}),s.unqueued++,u.always(function(){u.always(function(){s.unqueued--,x.queue(e,"fx").length||s.empty.fire()})})),1===e.nodeType&&("height"in t||"width"in t)&&(n.overflow=[p.overflow,p.overflowX,p.overflowY],"inline"===x.css(e,"display")&&"none"===x.css(e,"float")&&(x.support.inlineBlockNeedsLayout&&"inline"!==ln(e.nodeName)?p.zoom=1:p.display="inline-block")),n.overflow&&(p.overflow="hidden",x.support.shrinkWrapBlocks||u.always(function(){p.overflow=n.overflow[0],p.overflowX=n.overflow[1],p.overflowY=n.overflow[2]}));for(r in t)if(i=t[r],Vn.exec(i)){if(delete t[r],o=o||"toggle"===i,i===(f?"hide":"show"))continue;c[r]=d&&d[r]||x.style(e,r)}if(!x.isEmptyObject(c)){d?"hidden"in d&&(f=d.hidden):d=x._data(e,"fxshow",{}),o&&(d.hidden=!f),f?x(e).show():u.done(function(){x(e).hide()}),u.done(function(){var t;x._removeData(e,"fxshow");for(t in c)x.style(e,t,c[t])});for(r in c)a=Zn(f?d[r]:0,r,u),r in d||(d[r]=a.start,f&&(a.end=a.start,a.start="width"===r||"height"===r?1:0))}}function rr(e,t,n,r,i){return new rr.prototype.init(e,t,n,r,i)}x.Tween=rr,rr.prototype={constructor:rr,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(x.cssNumber[n]?"":"px")},cur:function(){var e=rr.propHooks[this.prop];return e&&e.get?e.get(this):rr.propHooks._default.get(this)},run:function(e){var t,n=rr.propHooks[this.prop];return this.pos=t=this.options.duration?x.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):rr.propHooks._default.set(this),this}},rr.prototype.init.prototype=rr.prototype,rr.propHooks={_default:{get:function(e){var t;return null==e.elem[e.prop]||e.elem.style&&null!=e.elem.style[e.prop]?(t=x.css(e.elem,e.prop,""),t&&"auto"!==t?t:0):e.elem[e.prop]},set:function(e){x.fx.step[e.prop]?x.fx.step[e.prop](e):e.elem.style&&(null!=e.elem.style[x.cssProps[e.prop]]||x.cssHooks[e.prop])?x.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},rr.propHooks.scrollTop=rr.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},x.each(["toggle","show","hide"],function(e,t){var n=x.fn[t];x.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(ir(t,!0),e,r,i)}}),x.fn.extend({fadeTo:function(e,t,n,r){return this.filter(nn).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=x.isEmptyObject(e),o=x.speed(t,n,r),a=function(){var t=er(this,x.extend({},e),o);(i||x._data(this,"finish"))&&t.stop(!0)};return a.finish=a,i||o.queue===!1?this.each(a):this.queue(o.queue,a)},stop:function(e,n,r){var i=function(e){var t=e.stop;delete e.stop,t(r)};return"string"!=typeof e&&(r=n,n=e,e=t),n&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,n=null!=e&&e+"queueHooks",o=x.timers,a=x._data(this);if(n)a[n]&&a[n].stop&&i(a[n]);else for(n in a)a[n]&&a[n].stop&&Jn.test(n)&&i(a[n]);for(n=o.length;n--;)o[n].elem!==this||null!=e&&o[n].queue!==e||(o[n].anim.stop(r),t=!1,o.splice(n,1));(t||!r)&&x.dequeue(this,e)})},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var t,n=x._data(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=x.timers,a=r?r.length:0;for(n.finish=!0,x.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;a>t;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}});function ir(e,t){var n,r={height:e},i=0;for(t=t?1:0;4>i;i+=2-t)n=Zt[i],r["margin"+n]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}x.each({slideDown:ir("show"),slideUp:ir("hide"),slideToggle:ir("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){x.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),x.speed=function(e,t,n){var r=e&&"object"==typeof e?x.extend({},e):{complete:n||!n&&t||x.isFunction(e)&&e,duration:e,easing:n&&t||t&&!x.isFunction(t)&&t};return r.duration=x.fx.off?0:"number"==typeof r.duration?r.duration:r.duration in x.fx.speeds?x.fx.speeds[r.duration]:x.fx.speeds._default,(null==r.queue||r.queue===!0)&&(r.queue="fx"),r.old=r.complete,r.complete=function(){x.isFunction(r.old)&&r.old.call(this),r.queue&&x.dequeue(this,r.queue)},r},x.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},x.timers=[],x.fx=rr.prototype.init,x.fx.tick=function(){var e,n=x.timers,r=0;for(Xn=x.now();n.length>r;r++)e=n[r],e()||n[r]!==e||n.splice(r--,1);n.length||x.fx.stop(),Xn=t},x.fx.timer=function(e){e()&&x.timers.push(e)&&x.fx.start()},x.fx.interval=13,x.fx.start=function(){Un||(Un=setInterval(x.fx.tick,x.fx.interval))},x.fx.stop=function(){clearInterval(Un),Un=null},x.fx.speeds={slow:600,fast:200,_default:400},x.fx.step={},x.expr&&x.expr.filters&&(x.expr.filters.animated=function(e){return x.grep(x.timers,function(t){return e===t.elem}).length}),x.fn.offset=function(e){if(arguments.length)return e===t?this:this.each(function(t){x.offset.setOffset(this,e,t)});var n,r,o={top:0,left:0},a=this[0],s=a&&a.ownerDocument;if(s)return n=s.documentElement,x.contains(n,a)?(typeof a.getBoundingClientRect!==i&&(o=a.getBoundingClientRect()),r=or(s),{top:o.top+(r.pageYOffset||n.scrollTop)-(n.clientTop||0),left:o.left+(r.pageXOffset||n.scrollLeft)-(n.clientLeft||0)}):o},x.offset={setOffset:function(e,t,n){var r=x.css(e,"position");"static"===r&&(e.style.position="relative");var i=x(e),o=i.offset(),a=x.css(e,"top"),s=x.css(e,"left"),l=("absolute"===r||"fixed"===r)&&x.inArray("auto",[a,s])>-1,u={},c={},p,f;l?(c=i.position(),p=c.top,f=c.left):(p=parseFloat(a)||0,f=parseFloat(s)||0),x.isFunction(t)&&(t=t.call(e,n,o)),null!=t.top&&(u.top=t.top-o.top+p),null!=t.left&&(u.left=t.left-o.left+f),"using"in t?t.using.call(e,u):i.css(u)}},x.fn.extend({position:function(){if(this[0]){var e,t,n={top:0,left:0},r=this[0];return"fixed"===x.css(r,"position")?t=r.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),x.nodeName(e[0],"html")||(n=e.offset()),n.top+=x.css(e[0],"borderTopWidth",!0),n.left+=x.css(e[0],"borderLeftWidth",!0)),{top:t.top-n.top-x.css(r,"marginTop",!0),left:t.left-n.left-x.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||s;while(e&&!x.nodeName(e,"html")&&"static"===x.css(e,"position"))e=e.offsetParent;return e||s})}}),x.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,n){var r=/Y/.test(n);x.fn[e]=function(i){return x.access(this,function(e,i,o){var a=or(e);return o===t?a?n in a?a[n]:a.document.documentElement[i]:e[i]:(a?a.scrollTo(r?x(a).scrollLeft():o,r?o:x(a).scrollTop()):e[i]=o,t)},e,i,arguments.length,null)}});function or(e){return x.isWindow(e)?e:9===e.nodeType?e.defaultView||e.parentWindow:!1}x.each({Height:"height",Width:"width"},function(e,n){x.each({padding:"inner"+e,content:n,"":"outer"+e},function(r,i){x.fn[i]=function(i,o){var a=arguments.length&&(r||"boolean"!=typeof i),s=r||(i===!0||o===!0?"margin":"border");return x.access(this,function(n,r,i){var o;return x.isWindow(n)?n.document.documentElement["client"+e]:9===n.nodeType?(o=n.documentElement,Math.max(n.body["scroll"+e],o["scroll"+e],n.body["offset"+e],o["offset"+e],o["client"+e])):i===t?x.css(n,r,s):x.style(n,r,i,s)},n,a?i:t,a,null)}})}),x.fn.size=function(){return this.length},x.fn.andSelf=x.fn.addBack,"object"==typeof module&&module&&"object"==typeof module.exports?module.exports=x:(e.jQuery=e.$=x,"function"==typeof define&&define.amd&&define("jquery",[],function(){return x}))})(window);
/**
 * Featherlight - ultra slim jQuery lightbox
 * Version 1.7.14 - http://noelboss.github.io/featherlight/
 *
 * Copyright 2019, Noël Raoul Bossart (http://www.noelboss.com)
 * MIT Licensed.
**/
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof module&&module.exports?module.exports=function(b,c){return void 0===c&&(c="undefined"!=typeof window?require("jquery"):require("jquery")(b)),a(c),c}:a(jQuery)}(function(a){"use strict";function b(a,c){if(!(this instanceof b)){var d=new b(a,c);return d.open(),d}this.id=b.id++,this.setup(a,c),this.chainCallbacks(b._callbackChain)}function c(a,b){var c={};for(var d in a)d in b&&(c[d]=a[d],delete a[d]);return c}function d(a,b){var c={},d=new RegExp("^"+b+"([A-Z])(.*)");for(var e in a){var f=e.match(d);if(f){var g=(f[1]+f[2].replace(/([A-Z])/g,"-$1")).toLowerCase();c[g]=a[e]}}return c}if("undefined"==typeof a)return void("console"in window&&window.console.info("Too much lightness, Featherlight needs jQuery."));if(a.fn.jquery.match(/-ajax/))return void("console"in window&&window.console.info("Featherlight needs regular jQuery, not the slim version."));var e=[],f=function(b){return e=a.grep(e,function(a){return a!==b&&a.$instance.closest("body").length>0})},g={allow:1,allowfullscreen:1,frameborder:1,height:1,longdesc:1,marginheight:1,marginwidth:1,mozallowfullscreen:1,name:1,referrerpolicy:1,sandbox:1,scrolling:1,src:1,srcdoc:1,style:1,webkitallowfullscreen:1,width:1},h={keyup:"onKeyUp",resize:"onResize"},i=function(c){a.each(b.opened().reverse(),function(){return c.isDefaultPrevented()||!1!==this[h[c.type]](c)?void 0:(c.preventDefault(),c.stopPropagation(),!1)})},j=function(c){if(c!==b._globalHandlerInstalled){b._globalHandlerInstalled=c;var d=a.map(h,function(a,c){return c+"."+b.prototype.namespace}).join(" ");a(window)[c?"on":"off"](d,i)}};b.prototype={constructor:b,namespace:"featherlight",targetAttr:"data-featherlight",variant:null,resetCss:!1,background:null,openTrigger:"click",closeTrigger:"click",filter:null,root:"body",openSpeed:250,closeSpeed:250,closeOnClick:"background",closeOnEsc:!0,closeIcon:"&#10005;",loading:"",persist:!1,otherClose:null,beforeOpen:a.noop,beforeContent:a.noop,beforeClose:a.noop,afterOpen:a.noop,afterContent:a.noop,afterClose:a.noop,onKeyUp:a.noop,onResize:a.noop,type:null,contentFilters:["jquery","image","html","ajax","iframe","text"],setup:function(b,c){"object"!=typeof b||b instanceof a!=!1||c||(c=b,b=void 0);var d=a.extend(this,c,{target:b}),e=d.resetCss?d.namespace+"-reset":d.namespace,f=a(d.background||['<div class="'+e+"-loading "+e+'">','<div class="'+e+'-content">','<button class="'+e+"-close-icon "+d.namespace+'-close" aria-label="Close">',d.closeIcon,"</button>",'<div class="'+d.namespace+'-inner">'+d.loading+"</div>","</div>","</div>"].join("")),g="."+d.namespace+"-close"+(d.otherClose?","+d.otherClose:"");return d.$instance=f.clone().addClass(d.variant),d.$instance.on(d.closeTrigger+"."+d.namespace,function(b){if(!b.isDefaultPrevented()){var c=a(b.target);("background"===d.closeOnClick&&c.is("."+d.namespace)||"anywhere"===d.closeOnClick||c.closest(g).length)&&(d.close(b),b.preventDefault())}}),this},getContent:function(){if(this.persist!==!1&&this.$content)return this.$content;var b=this,c=this.constructor.contentFilters,d=function(a){return b.$currentTarget&&b.$currentTarget.attr(a)},e=d(b.targetAttr),f=b.target||e||"",g=c[b.type];if(!g&&f in c&&(g=c[f],f=b.target&&e),f=f||d("href")||"",!g)for(var h in c)b[h]&&(g=c[h],f=b[h]);if(!g){var i=f;if(f=null,a.each(b.contentFilters,function(){return g=c[this],g.test&&(f=g.test(i)),!f&&g.regex&&i.match&&i.match(g.regex)&&(f=i),!f}),!f)return"console"in window&&window.console.error("Featherlight: no content filter found "+(i?' for "'+i+'"':" (no target specified)")),!1}return g.process.call(b,f)},setContent:function(b){return this.$instance.removeClass(this.namespace+"-loading"),this.$instance.toggleClass(this.namespace+"-iframe",b.is("iframe")),this.$instance.find("."+this.namespace+"-inner").not(b).slice(1).remove().end().replaceWith(a.contains(this.$instance[0],b[0])?"":b),this.$content=b.addClass(this.namespace+"-inner"),this},open:function(b){var c=this;if(c.$instance.hide().appendTo(c.root),!(b&&b.isDefaultPrevented()||c.beforeOpen(b)===!1)){b&&b.preventDefault();var d=c.getContent();if(d)return e.push(c),j(!0),c.$instance.fadeIn(c.openSpeed),c.beforeContent(b),a.when(d).always(function(a){a&&(c.setContent(a),c.afterContent(b))}).then(c.$instance.promise()).done(function(){c.afterOpen(b)})}return c.$instance.detach(),a.Deferred().reject().promise()},close:function(b){var c=this,d=a.Deferred();return c.beforeClose(b)===!1?d.reject():(0===f(c).length&&j(!1),c.$instance.fadeOut(c.closeSpeed,function(){c.$instance.detach(),c.afterClose(b),d.resolve()})),d.promise()},resize:function(a,b){if(a&&b){this.$content.css("width","").css("height","");var c=Math.max(a/(this.$content.parent().width()-1),b/(this.$content.parent().height()-1));c>1&&(c=b/Math.floor(b/c),this.$content.css("width",""+a/c+"px").css("height",""+b/c+"px"))}},chainCallbacks:function(b){for(var c in b)this[c]=a.proxy(b[c],this,a.proxy(this[c],this))}},a.extend(b,{id:0,autoBind:"[data-featherlight]",defaults:b.prototype,contentFilters:{jquery:{regex:/^[#.]\w/,test:function(b){return b instanceof a&&b},process:function(b){return this.persist!==!1?a(b):a(b).clone(!0)}},image:{regex:/\.(png|jpg|jpeg|gif|tiff?|bmp|svg)(\?\S*)?$/i,process:function(b){var c=this,d=a.Deferred(),e=new Image,f=a('<img src="'+b+'" alt="" class="'+c.namespace+'-image" />');return e.onload=function(){f.naturalWidth=e.width,f.naturalHeight=e.height,d.resolve(f)},e.onerror=function(){d.reject(f)},e.src=b,d.promise()}},html:{regex:/^\s*<[\w!][^<]*>/,process:function(b){return a(b)}},ajax:{regex:/./,process:function(b){var c=a.Deferred(),d=a("<div></div>").load(b,function(a,b){"error"!==b&&c.resolve(d.contents()),c.reject()});return c.promise()}},iframe:{process:function(b){var e=new a.Deferred,f=a("<iframe/>"),h=d(this,"iframe"),i=c(h,g);return f.hide().attr("src",b).attr(i).css(h).on("load",function(){e.resolve(f.show())}).appendTo(this.$instance.find("."+this.namespace+"-content")),e.promise()}},text:{process:function(b){return a("<div>",{text:b})}}},functionAttributes:["beforeOpen","afterOpen","beforeContent","afterContent","beforeClose","afterClose"],readElementConfig:function(b,c){var d=this,e=new RegExp("^data-"+c+"-(.*)"),f={};return b&&b.attributes&&a.each(b.attributes,function(){var b=this.name.match(e);if(b){var c=this.value,g=a.camelCase(b[1]);if(a.inArray(g,d.functionAttributes)>=0)c=new Function(c);else try{c=JSON.parse(c)}catch(h){}f[g]=c}}),f},extend:function(b,c){var d=function(){this.constructor=b};return d.prototype=this.prototype,b.prototype=new d,b.__super__=this.prototype,a.extend(b,this,c),b.defaults=b.prototype,b},attach:function(b,c,d){var e=this;"object"!=typeof c||c instanceof a!=!1||d||(d=c,c=void 0),d=a.extend({},d);var f,g=d.namespace||e.defaults.namespace,h=a.extend({},e.defaults,e.readElementConfig(b[0],g),d),i=function(g){var i=a(g.currentTarget),j=a.extend({$source:b,$currentTarget:i},e.readElementConfig(b[0],h.namespace),e.readElementConfig(g.currentTarget,h.namespace),d),k=f||i.data("featherlight-persisted")||new e(c,j);"shared"===k.persist?f=k:k.persist!==!1&&i.data("featherlight-persisted",k),j.$currentTarget.blur&&j.$currentTarget.blur(),k.open(g)};return b.on(h.openTrigger+"."+h.namespace,h.filter,i),{filter:h.filter,handler:i}},current:function(){var a=this.opened();return a[a.length-1]||null},opened:function(){var b=this;return f(),a.grep(e,function(a){return a instanceof b})},close:function(a){var b=this.current();return b?b.close(a):void 0},_onReady:function(){var b=this;if(b.autoBind){var c=a(b.autoBind);c.each(function(){b.attach(a(this))}),a(document).on("click",b.autoBind,function(d){if(!d.isDefaultPrevented()){var e=a(d.currentTarget),f=c.length;if(c=c.add(e),f!==c.length){var g=b.attach(e);(!g.filter||a(d.target).parentsUntil(e,g.filter).length>0)&&g.handler(d)}}})}},_callbackChain:{onKeyUp:function(b,c){return 27===c.keyCode?(this.closeOnEsc&&a.featherlight.close(c),!1):b(c)},beforeOpen:function(b,c){return a(document.documentElement).addClass("with-featherlight"),this._previouslyActive=document.activeElement,this._$previouslyTabbable=a("a, input, select, textarea, iframe, button, iframe, [contentEditable=true]").not("[tabindex]").not(this.$instance.find("button")),this._$previouslyWithTabIndex=a("[tabindex]").not('[tabindex="-1"]'),this._previousWithTabIndices=this._$previouslyWithTabIndex.map(function(b,c){return a(c).attr("tabindex")}),this._$previouslyWithTabIndex.add(this._$previouslyTabbable).attr("tabindex",-1),document.activeElement.blur&&document.activeElement.blur(),b(c)},afterClose:function(c,d){var e=c(d),f=this;return this._$previouslyTabbable.removeAttr("tabindex"),this._$previouslyWithTabIndex.each(function(b,c){a(c).attr("tabindex",f._previousWithTabIndices[b])}),this._previouslyActive.focus(),0===b.opened().length&&a(document.documentElement).removeClass("with-featherlight"),e},onResize:function(a,b){return this.resize(this.$content.naturalWidth,this.$content.naturalHeight),a(b)},afterContent:function(a,b){var c=a(b);return this.$instance.find("[autofocus]:not([disabled])").focus(),this.onResize(b),c}}}),a.featherlight=b,a.fn.featherlight=function(a,c){return b.attach(this,a,c),this},a(document).ready(function(){b._onReady()})});
/*
 * Horizon Swiper
 * Version 1.1.0
 * Domain ( http://horizon-swiper.sebsauer.de/ )
 * Copyright 2015 Sebastian Sauer ( http://www.sebsauer.de/ )
 * Licensed under MIT ( https://github.com/sebsauer90/horizon-swiper/blob/master/LICENSE )
 */
"use strict";!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a("object"==typeof exports?require("jquery"):jQuery)}(function(a){var b="horizonSwiper",c={item:".horizon-item",showItems:"auto",dots:!1,numberedDots:!1,arrows:!0,arrowPrevText:"",arrowNextText:"",animationSpeed:500,mouseDrag:!0,onStart:function(){},onEnd:function(){},onSlideStart:function(){},onSlideEnd:function(){},onDragStart:function(){},onDragEnd:function(){}},d={$window:a(window),$document:a(document),innerClass:"horizon-inner",outerClass:"horizon-outer",dotContainer:'<nav class="horizon-dots"></nav>',arrowPrev:['<button class="horizon-prev">',"</button>"],arrowNext:['<button class="horizon-next">',"</button>"],showArrowsClass:"arrows",showDotsClass:"dots",initializedClass:"initialized",mouseDragClass:"mouse-drag",firstItemClass:"first-item",lastItemClass:"last-item"},e=function(){function b(b,e){var f=this;f.settings=a.extend({},c,e),f.$element=a(b),f.$items=f.$element.find(this.settings.item),f.$inner=null,f.$outer=null,f.$dots=null,f.$arrowPrev=null,f.$arrowNext=null,f.initialized=!1,f.maxHeight=0,f.innerContainerWidth=0,f.viewportSize=0,f.isAnimate=!1;var g=function h(){f.initialized?f.setSizes():setTimeout(function(){h()},1e3)};d.$document.ready(function(){f.init()}),d.$window.load(function(){g()})}return b.prototype.init=function(){var a=this;a._setWrapper(),a._addArrows(),a._addDots(),a._mouseDrag(),a.setSizes(),a._resize(),a._checkPosition(),a.initialized=!0},b.prototype.setSizes=function(){var b=this;b.maxHeight=0,b.innerContainerWidth=0;for(var c=0;c<b.$items.length;++c){var e=a(b.$items[c]),f=e.outerHeight(!0),g=e.outerWidth(!0);f>b.maxHeight&&(b.maxHeight=f),b.innerContainerWidth+=g}b.viewportSize=b.$inner.width(),b.$outer.css({"max-height":b.maxHeight+"px"}),b.viewportSize<b.innerContainerWidth?(b.$element.addClass(d.initializedClass),b.settings.arrows&&b.$element.addClass(d.showArrowsClass),b.settings.dots&&b.$element.addClass(d.showDotsClass)):(b.$element.removeClass(d.initializedClass),b.$element.addClass(d.showArrowsClass))},b.prototype._resize=function(){var a=this,b=null,c=function(){a.setSizes(),a._checkPosition()};d.$window.resize(function(){clearTimeout(b),setTimeout(function(){c()},250)})},b.prototype._setWrapper=function(){var b=this,c=0;b.$items.wrapAll('<div class="'+d.outerClass+'">'),b.$items.wrapAll('<div class="'+d.innerClass+'">'),b.$inner=b.$element.find("."+d.innerClass),b.$outer=b.$element.find("."+d.outerClass),"auto"!==b.settings.showItems&&b.settings.showItems===parseInt(b.settings.showItems,10)&&(c=100/b.settings.showItems,b.$items.css({width:c+"%"}));for(var e=0;e<b.$items.length;++e)a(b.$items[e]).attr("data-horizon-index",e)},b.prototype._addDots=function(){var b=this;if(b.settings.dots){b.$dots=a(d.dotContainer);for(var c=0;c<b.$items.length;++c){var e=b.settings.numberedDots?c:"",f=a('<button class="horizon-dot" data-horizon-target="'+c+'">'+e+"</button>");b.$dots.append(f)}b.$element.append(b.$dots),b.$dots.find("button").on("click",function(c){c.preventDefault();var d=a(this).attr("data-horizon-target");b._dotScroll(d)})}},b.prototype._dotScroll=function(b){var c=this,d=c.$dots.find('[data-horizon-index="'+b+'"]'),e=d.outerWidth(!0),f=0,g=0,h=c.viewportSize/2-e/2;c.isAnimate=!0,c.settings.onSlideStart();for(var i=0;i<c.$items.length;++i)b>i&&(f+=a(c.$items[i]).outerWidth(!0));g=f-h,0>g?g=0:g>c.innerContainerWidth-c.viewportSize&&(g=c.innerContainerWidth-c.viewportSize),c.$inner.animate({scrollLeft:g},c.settings.animationSpeed,function(){c._checkPosition(),c.settings.onSlideEnd(),b===c.$items.length?c.settings.onEnd():0===b&&c.settings.onStart(),c.isAnimate=!1})},b.prototype._addArrows=function(){var b=this;b.settings.arrows===!0&&(b.$arrowPrev=a(d.arrowPrev[0]+b.settings.arrowPrevText+d.arrowPrev[1]),b.$arrowNext=a(d.arrowNext[0]+b.settings.arrowNextText+d.arrowNext[1]),b.$arrowNext.insertAfter(b.$outer),b.$arrowPrev.insertAfter(b.$outer),b.$element.addClass(d.firstItemClass),b.$arrowPrev.attr("disabled","disabled"),b.$arrowPrev.on("click",function(a){a.preventDefault(),b.isAnimate||b._scrollTo("previous")}),b.$arrowNext.on("click",function(a){a.preventDefault(),b.isAnimate||b._scrollTo("next")}))},b.prototype._scrollTo=function(a){var b=this,c=b._getOffset(a);return b.isAnimate=!0,"end"===c||"start"===c?void(b.isAnimate=!1):(b.settings.onSlideStart(),void b.$inner.animate({scrollLeft:c[0]},b.settings.animationSpeed,function(){"end"===c[1]?b.settings.onEnd():"start"===c[1]&&b.settings.onStart(),b._checkPosition(),b.settings.onSlideEnd(),b.isAnimate=!1}))},b.prototype._getOffset=function(b){var c=this,d=c.$inner.scrollLeft(),e=0,f=d+c.viewportSize;if("next"===b&&d+c.viewportSize===c.innerContainerWidth)return"end";if("previous"===b&&0===d)return"start";for(var g=0;g<c.$items.length;++g){var h=a(c.$items[g]).outerWidth(!0),i="";if(e+=h,"next"===b&&e>f)return g+1===c.$items.length&&(i="end"),[e-c.viewportSize,i];if("previous"===b&&e>=d)return 0>=e-h&&(i="start"),[e-h,i]}},b.prototype._mouseDrag=function(){var a=this,b=!1,c=!1,e=0,f=0,g=(a.$inner.offset().left,0),h=!1,i=!1,j=null,k=function(c){b||(g=f+(e-c.pageX),a.$inner.scrollLeft(g))};a.$element.on({touchstart:function(c){b=!0,h=!0,i=!0,a.settings.onDragStart()}}),d.$document.on({touchend:function(b){h&&(a._checkPosition(),a.settings.onDragEnd(),h=!1)}}),a.$inner.scroll(function(){clearTimeout(j),j=setTimeout(function(){i&&(a._checkPosition(),a.settings.onDragEnd(),i=!1)},250)}),a.settings.mouseDrag&&!b&&(a.$element.addClass(d.mouseDragClass),a.$element.on({mousedown:function(b){c=!0,e=b.pageX,f=a.$inner.scrollLeft(),"button"!==b.target.tagName.toLowerCase()&&a.settings.onDragStart()}}),d.$document.on({mousemove:function(a){c&&k(a)},mouseup:function(b){c&&"button"!==b.target.tagName.toLowerCase()&&(a._checkPosition(),a.settings.onDragEnd()),c=!1}}))},b.prototype._checkPosition=function(){var a=this,b=a.$inner.scrollLeft();a.settings.arrows&&a._checkArrowState(b),a.settings.dots&&a._checkActiveDots(b)},b.prototype._checkActiveDots=function(b){for(var c=this,d=0,e=0,f=[b,b+c.viewportSize],g=0;g<c.$items.length;++g){var h=a(c.$items[g]),i=h.outerWidth(!0);e+=i,d+i/2>=f[0]&&e-i/2<=f[1]?c.$dots.find('[data-horizon-target="'+g+'"]').addClass("active"):c.$dots.find('[data-horizon-target="'+g+'"]').removeClass("active"),d+=i}},b.prototype._checkArrowState=function(a){var b=this;a+b.viewportSize>=b.innerContainerWidth-1?(b.$element.addClass(d.lastItemClass),b.$arrowNext.attr("disabled","disabled"),b.$element.removeClass(d.firstItemClass),b.$arrowPrev.removeAttr("disabled")):0>=a?(b.$element.addClass(d.firstItemClass),b.$arrowPrev.attr("disabled","disabled"),b.$element.removeClass(d.lastItemClass),b.$arrowNext.removeAttr("disabled")):(b.$element.removeClass(d.lastItemClass).removeClass(d.firstItemClass),b.$arrowPrev.removeAttr("disabled"),b.$arrowNext.removeAttr("disabled"))},b}();a.fn[b]=function(c){return this.each(function(){a.data(this,b)||a.data(this,b,new e(this,c))}),this}});


/*!
 * imagesLoaded PACKAGED v4.0.0
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */

(function(){"use strict";function e(){}function t(e,t){for(var n=e.length;n--;)if(e[n].listener===t)return n;return-1}function n(e){return function(){return this[e].apply(this,arguments)}}var i=e.prototype,r=this,s=r.EventEmitter;i.getListeners=function(e){var t,n,i=this._getEvents();if(e instanceof RegExp){t={};for(n in i)i.hasOwnProperty(n)&&e.test(n)&&(t[n]=i[n])}else t=i[e]||(i[e]=[]);return t},i.flattenListeners=function(e){var t,n=[];for(t=0;t<e.length;t+=1)n.push(e[t].listener);return n},i.getListenersAsObject=function(e){var t,n=this.getListeners(e);return n instanceof Array&&(t={},t[e]=n),t||n},i.addListener=function(e,n){var i,r=this.getListenersAsObject(e),s="object"==typeof n;for(i in r)r.hasOwnProperty(i)&&-1===t(r[i],n)&&r[i].push(s?n:{listener:n,once:!1});return this},i.on=n("addListener"),i.addOnceListener=function(e,t){return this.addListener(e,{listener:t,once:!0})},i.once=n("addOnceListener"),i.defineEvent=function(e){return this.getListeners(e),this},i.defineEvents=function(e){for(var t=0;t<e.length;t+=1)this.defineEvent(e[t]);return this},i.removeListener=function(e,n){var i,r,s=this.getListenersAsObject(e);for(r in s)s.hasOwnProperty(r)&&(i=t(s[r],n),-1!==i&&s[r].splice(i,1));return this},i.off=n("removeListener"),i.addListeners=function(e,t){return this.manipulateListeners(!1,e,t)},i.removeListeners=function(e,t){return this.manipulateListeners(!0,e,t)},i.manipulateListeners=function(e,t,n){var i,r,s=e?this.removeListener:this.addListener,o=e?this.removeListeners:this.addListeners;if("object"!=typeof t||t instanceof RegExp)for(i=n.length;i--;)s.call(this,t,n[i]);else for(i in t)t.hasOwnProperty(i)&&(r=t[i])&&("function"==typeof r?s.call(this,i,r):o.call(this,i,r));return this},i.removeEvent=function(e){var t,n=typeof e,i=this._getEvents();if("string"===n)delete i[e];else if(e instanceof RegExp)for(t in i)i.hasOwnProperty(t)&&e.test(t)&&delete i[t];else delete this._events;return this},i.removeAllListeners=n("removeEvent"),i.emitEvent=function(e,t){var n,i,r,s,o,h=this.getListenersAsObject(e);for(s in h)if(h.hasOwnProperty(s))for(n=h[s].slice(0),r=n.length;r--;)i=n[r],i.once===!0&&this.removeListener(e,i.listener),o=i.listener.apply(this,t||[]),o===this._getOnceReturnValue()&&this.removeListener(e,i.listener);return this},i.trigger=n("emitEvent"),i.emit=function(e){var t=Array.prototype.slice.call(arguments,1);return this.emitEvent(e,t)},i.setOnceReturnValue=function(e){return this._onceReturnValue=e,this},i._getOnceReturnValue=function(){return this.hasOwnProperty("_onceReturnValue")?this._onceReturnValue:!0},i._getEvents=function(){return this._events||(this._events={})},e.noConflict=function(){return r.EventEmitter=s,e},"function"==typeof define&&define.amd?define("eventEmitter/EventEmitter",[],function(){return e}):"object"==typeof module&&module.exports?module.exports=e:r.EventEmitter=e}).call(this),function(e,t){"use strict";"function"==typeof define&&define.amd?define(["eventEmitter/EventEmitter"],function(n){return t(e,n)}):"object"==typeof module&&module.exports?module.exports=t(e,require("wolfy87-eventemitter")):e.imagesLoaded=t(e,e.EventEmitter)}(window,function(e,t){function n(e,t){for(var n in t)e[n]=t[n];return e}function i(e){var t=[];if(Array.isArray(e))t=e;else if("number"==typeof e.length)for(var n=0;n<e.length;n++)t.push(e[n]);else t.push(e);return t}function r(e,t,s){return this instanceof r?("string"==typeof e&&(e=document.querySelectorAll(e)),this.elements=i(e),this.options=n({},this.options),"function"==typeof t?s=t:n(this.options,t),s&&this.on("always",s),this.getImages(),h&&(this.jqDeferred=new h.Deferred),void setTimeout(function(){this.check()}.bind(this))):new r(e,t,s)}function s(e){this.img=e}function o(e,t){this.url=e,this.element=t,this.img=new Image}var h=e.jQuery,a=e.console;r.prototype=Object.create(t.prototype),r.prototype.options={},r.prototype.getImages=function(){this.images=[],this.elements.forEach(this.addElementImages,this)},r.prototype.addElementImages=function(e){"IMG"==e.nodeName&&this.addImage(e),this.options.background===!0&&this.addElementBackgroundImages(e);var t=e.nodeType;if(t&&u[t]){for(var n=e.querySelectorAll("img"),i=0;i<n.length;i++){var r=n[i];this.addImage(r)}if("string"==typeof this.options.background){var s=e.querySelectorAll(this.options.background);for(i=0;i<s.length;i++){var o=s[i];this.addElementBackgroundImages(o)}}}};var u={1:!0,9:!0,11:!0};return r.prototype.addElementBackgroundImages=function(e){var t=getComputedStyle(e);if(t)for(var n=/url\((['"])?(.*?)\1\)/gi,i=n.exec(t.backgroundImage);null!==i;){var r=i&&i[2];r&&this.addBackground(r,e),i=n.exec(t.backgroundImage)}},r.prototype.addImage=function(e){var t=new s(e);this.images.push(t)},r.prototype.addBackground=function(e,t){var n=new o(e,t);this.images.push(n)},r.prototype.check=function(){function e(e,n,i){setTimeout(function(){t.progress(e,n,i)})}var t=this;return this.progressedCount=0,this.hasAnyBroken=!1,this.images.length?void this.images.forEach(function(t){t.once("progress",e),t.check()}):void this.complete()},r.prototype.progress=function(e,t,n){this.progressedCount++,this.hasAnyBroken=this.hasAnyBroken||!e.isLoaded,this.emit("progress",this,e,t),this.jqDeferred&&this.jqDeferred.notify&&this.jqDeferred.notify(this,e),this.progressedCount==this.images.length&&this.complete(),this.options.debug&&a&&a.log("progress: "+n,e,t)},r.prototype.complete=function(){var e=this.hasAnyBroken?"fail":"done";if(this.isComplete=!0,this.emit(e,this),this.emit("always",this),this.jqDeferred){var t=this.hasAnyBroken?"reject":"resolve";this.jqDeferred[t](this)}},s.prototype=Object.create(t.prototype),s.prototype.check=function(){var e=this.getIsImageComplete();return e?void this.confirm(0!==this.img.naturalWidth,"naturalWidth"):(this.proxyImage=new Image,this.proxyImage.addEventListener("load",this),this.proxyImage.addEventListener("error",this),this.img.addEventListener("load",this),this.img.addEventListener("error",this),void(this.proxyImage.src=this.img.src))},s.prototype.getIsImageComplete=function(){return this.img.complete&&void 0!==this.img.naturalWidth},s.prototype.confirm=function(e,t){this.isLoaded=e,this.emit("progress",this,this.img,t)},s.prototype.handleEvent=function(e){var t="on"+e.type;this[t]&&this[t](e)},s.prototype.onload=function(){this.confirm(!0,"onload"),this.unbindEvents()},s.prototype.onerror=function(){this.confirm(!1,"onerror"),this.unbindEvents()},s.prototype.unbindEvents=function(){this.proxyImage.removeEventListener("load",this),this.proxyImage.removeEventListener("error",this),this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},o.prototype=Object.create(s.prototype),o.prototype.check=function(){this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.img.src=this.url;var e=this.getIsImageComplete();e&&(this.confirm(0!==this.img.naturalWidth,"naturalWidth"),this.unbindEvents())},o.prototype.unbindEvents=function(){this.img.addEventListener("load",this),this.img.addEventListener("error",this)},o.prototype.confirm=function(e,t){this.isLoaded=e,this.emit("progress",this,this.element,t)},r.makeJQueryPlugin=function(t){t=t||e.jQuery,t&&(h=t,h.fn.imagesLoaded=function(e,t){var n=new r(this,e,t);return n.jqDeferred.promise(h(this))})},r.makeJQueryPlugin(),r});
/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 * 
 * Open source under the BSD License. 
 * 
 * Copyright Â© 2008 George McGinley Smith
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
*/

// t: current time, b: begInnIng value, c: change In value, d: duration
jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend( jQuery.easing,
{
	def: 'easeOutQuad',
	swing: function (x, t, b, c, d) {
		//alert(jQuery.easing.default);
		return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
	},
	easeInQuad: function (x, t, b, c, d) {
		return c*(t/=d)*t + b;
	},
	easeOutQuad: function (x, t, b, c, d) {
		return -c *(t/=d)*(t-2) + b;
	},
	easeInOutQuad: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t + b;
		return -c/2 * ((--t)*(t-2) - 1) + b;
	},
	easeInCubic: function (x, t, b, c, d) {
		return c*(t/=d)*t*t + b;
	},
	easeOutCubic: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t + 1) + b;
	},
	easeInOutCubic: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t + b;
		return c/2*((t-=2)*t*t + 2) + b;
	},
	easeInQuart: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t + b;
	},
	easeOutQuart: function (x, t, b, c, d) {
		return -c * ((t=t/d-1)*t*t*t - 1) + b;
	},
	easeInOutQuart: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
		return -c/2 * ((t-=2)*t*t*t - 2) + b;
	},
	easeInQuint: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t*t + b;
	},
	easeOutQuint: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t*t*t + 1) + b;
	},
	easeInOutQuint: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
		return c/2*((t-=2)*t*t*t*t + 2) + b;
	},
	easeInSine: function (x, t, b, c, d) {
		return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
	},
	easeOutSine: function (x, t, b, c, d) {
		return c * Math.sin(t/d * (Math.PI/2)) + b;
	},
	easeInOutSine: function (x, t, b, c, d) {
		return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
	},
	easeInExpo: function (x, t, b, c, d) {
		return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
	},
	easeOutExpo: function (x, t, b, c, d) {
		return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
	},
	easeInOutExpo: function (x, t, b, c, d) {
		if (t==0) return b;
		if (t==d) return b+c;
		if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
		return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
	},
	easeInCirc: function (x, t, b, c, d) {
		return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
	},
	easeOutCirc: function (x, t, b, c, d) {
		return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
	},
	easeInOutCirc: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
		return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
	},
	easeInElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
	},
	easeOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
	},
	easeInOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
		return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
	},
	easeInBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*(t/=d)*t*((s+1)*t - s) + b;
	},
	easeOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
	},
	easeInOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158; 
		if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
		return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
	},
	easeInBounce: function (x, t, b, c, d) {
		return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d) + b;
	},
	easeOutBounce: function (x, t, b, c, d) {
		if ((t/=d) < (1/2.75)) {
			return c*(7.5625*t*t) + b;
		} else if (t < (2/2.75)) {
			return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
		} else if (t < (2.5/2.75)) {
			return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
		} else {
			return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
		}
	},
	easeInOutBounce: function (x, t, b, c, d) {
		if (t < d/2) return jQuery.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
		return jQuery.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
	}
});

/*
 *
 * TERMS OF USE - EASING EQUATIONS
 * 
 * Open source under the BSD License. 
 * 
 * Copyright Â© 2001 Robert Penner
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
 */
/*!
 * Lazy Load - jQuery plugin for lazy loading images
 *
 * Copyright (c) 2007-2015 Mika Tuupola
 *
 * Licensed under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 *
 * Project home:
 *   http://www.appelsiini.net/projects/lazyload
 *
 * Version:  1.9.5
 *
 */

(function($, window, document, undefined) {
    var $window = $(window);

    $.fn.lazyload = function(options) {
        var elements = this;
        var $container;
        var settings = {
            threshold       : 0,
            failure_limit   : 0,
            event           : "scroll",
            effect          : "show",
            container       : window,
            data_attribute  : "original",
            skip_invisible  : false,
            appear          : null,
            load            : null,
            placeholder     : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"
        };

        function update() {
            var counter = 0;

            elements.each(function() {
                var $this = $(this);
                if (settings.skip_invisible && !$this.is(":visible")) {
                    return;
                }
                if ($.abovethetop(this, settings) ||
                    $.leftofbegin(this, settings)) {
                        /* Nothing. */
                } else if (!$.belowthefold(this, settings) &&
                    !$.rightoffold(this, settings)) {
                        $this.trigger("appear");
                        /* if we found an image we'll load, reset the counter */
                        counter = 0;
                } else {
                    if (++counter > settings.failure_limit) {
                        return false;
                    }
                }
            });

        }

        if(options) {
            /* Maintain BC for a couple of versions. */
            if (undefined !== options.failurelimit) {
                options.failure_limit = options.failurelimit;
                delete options.failurelimit;
            }
            if (undefined !== options.effectspeed) {
                options.effect_speed = options.effectspeed;
                delete options.effectspeed;
            }

            $.extend(settings, options);
        }

        /* Cache container as jQuery as object. */
        $container = (settings.container === undefined ||
                      settings.container === window) ? $window : $(settings.container);

        /* Fire one scroll event per scroll. Not one scroll event per image. */
        if (0 === settings.event.indexOf("scroll")) {
            $container.bind(settings.event, function() {
                return update();
            });
        }

        this.each(function() {
            var self = this;
            var $self = $(self);

            self.loaded = false;

            /* If no src attribute given use data:uri. */
            if ($self.attr("src") === undefined || $self.attr("src") === false) {
                if ($self.is("img")) {
                    $self.attr("src", settings.placeholder);
                }
            }

            /* When appear is triggered load original image. */
            $self.one("appear", function() {
                if (!this.loaded) {
                    if (settings.appear) {
                        var elements_left = elements.length;
                        settings.appear.call(self, elements_left, settings);
                    }
                    $("<img />")
                        .bind("load", function() {

                            var original = $self.attr("data-" + settings.data_attribute);
                            $self.hide();
                            if ($self.is("img")) {
                                $self.attr("src", original);
                            } else {
                                $self.css("background-image", "url('" + original + "')");
                            }
                            $self.addClass('loaded');
                            $self[settings.effect](settings.effect_speed);

                            self.loaded = true;
                            
                            /* Remove image from array so it is not looped next time. */
                            var temp = $.grep(elements, function(element) {
                                return !element.loaded;
                            });
                            elements = $(temp);

                            if (settings.load) {
                                var elements_left = elements.length;
                                settings.load.call(self, elements_left, settings);
                            }
                        })
                        .attr("src", $self.attr("data-" + settings.data_attribute));
                }
            });

            /* When wanted event is triggered load original image */
            /* by triggering appear.                              */
            if (0 !== settings.event.indexOf("scroll")) {
                $self.bind(settings.event, function() {
                    if (!self.loaded) {
                        $self.trigger("appear");
                    }
                });
            }
        });

        /* Check if something appears when window is resized. */
        $window.bind("resize", function() {
            update();
        });

        /* With IOS5 force loading images when navigating with back button. */
        /* Non optimal workaround. */
        if ((/(?:iphone|ipod|ipad).*os 5/gi).test(navigator.appVersion)) {
            $window.bind("pageshow", function(event) {
                if (event.originalEvent && event.originalEvent.persisted) {
                    elements.each(function() {
                        $(this).trigger("appear");
                    });
                }
            });
        }

        /* Force initial check if images should appear. */
        $(document).ready(function() {
            update();
        });

        return this;
    };

    /* Convenience methods in jQuery namespace.           */
    /* Use as  $.belowthefold(element, {threshold : 100, container : window}) */

    $.belowthefold = function(element, settings) {
        var fold;

        if (settings.container === undefined || settings.container === window) {
            fold = (window.innerHeight ? window.innerHeight : $window.height()) + $window.scrollTop();
        } else {
            fold = $(settings.container).offset().top + $(settings.container).height();
        }

        return fold <= $(element).offset().top - settings.threshold;
    };

    $.rightoffold = function(element, settings) {
        var fold;

        if (settings.container === undefined || settings.container === window) {
            fold = $window.width() + $window.scrollLeft();
        } else {
            fold = $(settings.container).offset().left + $(settings.container).width();
        }

        return fold <= $(element).offset().left - settings.threshold;
    };

    $.abovethetop = function(element, settings) {
        var fold;

        if (settings.container === undefined || settings.container === window) {
            fold = $window.scrollTop();
        } else {
            fold = $(settings.container).offset().top;
        }

        return fold >= $(element).offset().top + settings.threshold  + $(element).height();
    };

    $.leftofbegin = function(element, settings) {
        var fold;

        if (settings.container === undefined || settings.container === window) {
            fold = $window.scrollLeft();
        } else {
            fold = $(settings.container).offset().left;
        }

        return fold >= $(element).offset().left + settings.threshold + $(element).width();
    };

    $.inviewport = function(element, settings) {
         return !$.rightoffold(element, settings) && !$.leftofbegin(element, settings) &&
                !$.belowthefold(element, settings) && !$.abovethetop(element, settings);
     };

    /* Custom selectors for your convenience.   */
    /* Use as $("img:below-the-fold").something() or */
    /* $("img").filter(":below-the-fold").something() which is faster */

    $.extend($.expr[":"], {
        "below-the-fold" : function(a) { return $.belowthefold(a, {threshold : 0}); },
        "above-the-top"  : function(a) { return !$.belowthefold(a, {threshold : 0}); },
        "right-of-screen": function(a) { return $.rightoffold(a, {threshold : 0}); },
        "left-of-screen" : function(a) { return !$.rightoffold(a, {threshold : 0}); },
        "in-viewport"    : function(a) { return $.inviewport(a, {threshold : 0}); },
        /* Maintain BC for couple of versions. */
        "above-the-fold" : function(a) { return !$.belowthefold(a, {threshold : 0}); },
        "right-of-fold"  : function(a) { return $.rightoffold(a, {threshold : 0}); },
        "left-of-fold"   : function(a) { return !$.rightoffold(a, {threshold : 0}); }
    });

})(jQuery, window, document);
/*!
 * jQuery.scrollTo
 * Copyright (c) 2007-2015 Ariel Flesler - aflesler<a>gmail<d>com | http://flesler.blogspot.com
 * Licensed under MIT
 * http://flesler.blogspot.com/2007/10/jqueryscrollto.html
 * @projectDescription Lightweight, cross-browser and highly customizable animated scrolling with jQuery
 * @author Ariel Flesler
 * @version 2.1.0
 */
;(function(define) {
	'use strict';

	define(['jquery'], function($) {
		var $scrollTo = $.scrollTo = function(target, duration, settings) {
			return $(window).scrollTo(target, duration, settings);
		};

		$scrollTo.defaults = {
			axis:'xy',
			duration: 0,
			limit:true
		};

		function isWin(elem) {
			return !elem.nodeName ||
				$.inArray(elem.nodeName.toLowerCase(), ['iframe','#document','html','body']) !== -1;
		}		

		$.fn.scrollTo = function(target, duration, settings) {
			if (typeof duration === 'object') {
				settings = duration;
				duration = 0;
			}
			if (typeof settings === 'function') {
				settings = { onAfter:settings };
			}
			if (target === 'max') {
				target = 9e9;
			}

			settings = $.extend({}, $scrollTo.defaults, settings);
			// Speed is still recognized for backwards compatibility
			duration = duration || settings.duration;
			// Make sure the settings are given right
			var queue = settings.queue && settings.axis.length > 1;
			if (queue) {
				// Let's keep the overall duration
				duration /= 2;
			}
			settings.offset = both(settings.offset);
			settings.over = both(settings.over);

			return this.each(function() {
				// Null target yields nothing, just like jQuery does
				if (target === null) return;

				var win = isWin(this),
					elem = win ? this.contentWindow || window : this,
					$elem = $(elem),
					targ = target, 
					attr = {},
					toff;

				switch (typeof targ) {
					// A number will pass the regex
					case 'number':
					case 'string':
						if (/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(targ)) {
							targ = both(targ);
							// We are done
							break;
						}
						// Relative/Absolute selector
						targ = win ? $(targ) : $(targ, elem);
						if (!targ.length) return;
						/* falls through */
					case 'object':
						// DOMElement / jQuery
						if (targ.is || targ.style) {
							// Get the real position of the target
							toff = (targ = $(targ)).offset();
						}
				}

				var offset = $.isFunction(settings.offset) && settings.offset(elem, targ) || settings.offset;

				$.each(settings.axis.split(''), function(i, axis) {
					var Pos	= axis === 'x' ? 'Left' : 'Top',
						pos = Pos.toLowerCase(),
						key = 'scroll' + Pos,
						prev = $elem[key](),
						max = $scrollTo.max(elem, axis);

					if (toff) {// jQuery / DOMElement
						attr[key] = toff[pos] + (win ? 0 : prev - $elem.offset()[pos]);

						// If it's a dom element, reduce the margin
						if (settings.margin) {
							attr[key] -= parseInt(targ.css('margin'+Pos), 10) || 0;
							attr[key] -= parseInt(targ.css('border'+Pos+'Width'), 10) || 0;
						}

						attr[key] += offset[pos] || 0;

						if (settings.over[pos]) {
							// Scroll to a fraction of its width/height
							attr[key] += targ[axis === 'x'?'width':'height']() * settings.over[pos];
						}
					} else {
						var val = targ[pos];
						// Handle percentage values
						attr[key] = val.slice && val.slice(-1) === '%' ?
							parseFloat(val) / 100 * max
							: val;
					}

					// Number or 'number'
					if (settings.limit && /^\d+$/.test(attr[key])) {
						// Check the limits
						attr[key] = attr[key] <= 0 ? 0 : Math.min(attr[key], max);
					}

					// Don't waste time animating, if there's no need.
					if (!i && settings.axis.length > 1) {
						if (prev === attr[key]) {
							// No animation needed
							attr = {};
						} else if (queue) {
							// Intermediate animation
							animate(settings.onAfterFirst);
							// Don't animate this axis again in the next iteration.
							attr = {};
						}
					}
				});

				animate(settings.onAfter);

				function animate(callback) {
					var opts = $.extend({}, settings, {
						// The queue setting conflicts with animate()
						// Force it to always be true
						queue: true,
						duration: duration,
						complete: callback && function() {
							callback.call(elem, targ, settings);
						}
					});
					$elem.animate(attr, opts);
				}
			});
		};

		// Max scrolling position, works on quirks mode
		// It only fails (not too badly) on IE, quirks mode.
		$scrollTo.max = function(elem, axis) {
			var Dim = axis === 'x' ? 'Width' : 'Height',
				scroll = 'scroll'+Dim;

			if (!isWin(elem))
				return elem[scroll] - $(elem)[Dim.toLowerCase()]();

			var size = 'client' + Dim,
				doc = elem.ownerDocument || elem.document,
				html = doc.documentElement,
				body = doc.body;

			return Math.max(html[scroll], body[scroll]) - Math.min(html[size], body[size]);
		};

		function both(val) {
			return $.isFunction(val) || $.isPlainObject(val) ? val : { top:val, left:val };
		}

		// Add special hooks so that window scroll properties can be animated
		$.Tween.propHooks.scrollLeft = 
		$.Tween.propHooks.scrollTop = {
			get: function(t) {
				return $(t.elem)[t.prop]();
			},
			set: function(t) {
				var curr = this.get(t);
				// If interrupt is true and user scrolled, stop animating
				if (t.options.interrupt && t._last && t._last !== curr) {
					return $(t.elem).stop();
				}
				var next = Math.round(t.now);
				// Don't waste CPU
				// Browsers don't render floating point scroll
				if (curr !== next) {
					$(t.elem)[t.prop](next);
					t._last = this.get(t);
				}
			}
		};

		// AMD requirement
		return $scrollTo;
	});
}(typeof define === 'function' && define.amd ? define : function(deps, factory) {
	'use strict';
	if (typeof module !== 'undefined' && module.exports) {
		// Node
		module.exports = factory(require('jquery'));
	} else {
		factory(jQuery);
	}
}));
/*! Superslides - v0.6.3-wip - 2013-12-17
* https://github.com/nicinabox/superslides
* Copyright (c) 2013 Nic Aitch; Licensed MIT */
(function(window, $) {

var Superslides, plugin = 'superslides';

Superslides = function(el, options) {
  this.options = $.extend({
    play: false,
    animation_speed: 600,
    animation_easing: 'swing',
    animation: 'slide',
    inherit_width_from: window,
    inherit_height_from: window,
    pagination: true,
    hashchange: false,
    scrollable: true,
    elements: {
      preserve: '.preserve',
      nav: '.slides-navigation',
      container: '.slides-container',
      pagination: '.slides-pagination'
    }
  }, options);

  var that       = this,
      $control   = $('<div>', { "class": 'slides-control' }),
      multiplier = 1;

  this.$el        = $(el);
  this.$container = this.$el.find(this.options.elements.container);

  // Private Methods
  var initialize = function() {
    multiplier = that._findMultiplier();

    that.$el.on('click', that.options.elements.nav + " a", function(e) {
      e.preventDefault();

      that.stop();
      if ($(this).hasClass('next')) {
        that.animate('next', function() {
          that.start();
        });
      } else {
        that.animate('prev', function() {
          that.start();
        });
      }
    });

    $(document).on('keyup', function(e) {
      if (e.keyCode === 37) {
        that.animate('prev');
      }
      if (e.keyCode === 39) {
        that.animate('next');
      }
    });

    $(window).on('resize', function() {
      setTimeout(function() {
        that.resized();
      }, 10);
    });

    if (that.options.hashchange) {
      $(window).on('hashchange', function() {
        var hash = that._parseHash(), index;

        index = that._upcomingSlide(hash);

        if (index >= 0 && index !== that.current) {
          that.animate(index);
        }
      });
    }

    that.pagination._events();

    that.start();
    return that;
  };

var css = {
  containers: function() {
    if (that.init) {
      that.$el.css({
        height: that.height
      });

      that.$control.css({
        width: that.width * multiplier,
        left: -that.width
      });

      that.$container.css({

      });
    } else {
      $('body').css({
        margin: 0
      });

      that.$el.css({
        position: 'relative',
        overflow: 'hidden',
        width: '100%',
        height: that.height
      });

      that.$control.css({
        position: 'relative',
        transform: 'translate3d(0)',
        height: '100%',
        width: that.width * multiplier,
        left: -that.width
      });

      that.$container.css({
        display: 'none',
        margin: '0',
        padding: '0',
        listStyle: 'none',
        position: 'relative',
        height: '100%'
      });
    }

    if (that.size() === 1) {
      that.$el.find(that.options.elements.nav).hide();
    }
  },
  images: function() {
    var $images = that.$container.find('img')
                                 .not(that.options.elements.preserve)

    $images.removeAttr('width').removeAttr('height')
      .css({
        "-webkit-backface-visibility": 'hidden',
        "-ms-interpolation-mode": 'bicubic',
        "position": 'absolute',
        "left": '0',
        "top": '0',
        "z-index": '-1',
        "max-width": 'none'
      });

    $images.each(function() {
      var image_aspect_ratio = that.image._aspectRatio(this),
          image = this;

      if (!$.data(this, 'processed')) {
        var img = new Image();
        img.onload = function() {
          that.image._scale(image, image_aspect_ratio);
          that.image._center(image, image_aspect_ratio);
          $.data(image, 'processed', true);
        };
        img.src = this.src;

      } else {
        that.image._scale(image, image_aspect_ratio);
        that.image._center(image, image_aspect_ratio);
      }
    });
  },
  children: function() {
    var $children = that.$container.children();

    if ($children.is('img')) {
      $children.each(function() {
        if ($(this).is('img')) {
          $(this).wrap('<div>');

          // move id attribute
          var id = $(this).attr('id');
          $(this).removeAttr('id');
          $(this).parent().attr('id', id);
        }
      });

      $children = that.$container.children();
    }

    if (!that.init) {
      $children.css({
        display: 'none',
        left: that.width * 2
      });
    }

    $children.css({
      position: 'absolute',
      overflow: 'hidden',
      height: '100%',
      width: that.width,
      top: 0,
      zIndex: 0
    });

  }
}

var fx = {
  slide: function(orientation, complete) {
    var $children = that.$container.children(),
        $target   = $children.eq(orientation.upcoming_slide);

    $target.css({
      left: orientation.upcoming_position,
      display: 'block'
    });

    that.$control.animate({
      left: orientation.offset
    },
    that.options.animation_speed,
    that.options.animation_easing,
    function() {
      if (that.size() > 1) {
        that.$control.css({
          left: -that.width
        });

        $children.eq(orientation.upcoming_slide).css({
          left: that.width,
          zIndex: 2
        });

        if (orientation.outgoing_slide >= 0) {
          $children.eq(orientation.outgoing_slide).css({
            left: that.width,
            display: 'none',
            zIndex: 0
          });
        }
      }

      complete();
    });
  },
  reverseSlide: function(orientation, complete) {
    var $children = that.$container.children(),
        $target   = $children.eq(orientation.upcoming_slide);

    $target.css({
      left: -orientation.upcoming_position,
      display: 'block'
    });

    that.$control.animate({
      left: -orientation.offset
    },
    that.options.animation_speed,
    that.options.animation_easing,
    function() {
      if (that.size() > 1) {
        that.$control.css({
          left: that.width
        });

        $children.eq(orientation.upcoming_slide).css({
          left: -that.width,
          zIndex: 2
        });

        if (orientation.outgoing_slide >= 0) {
          $children.eq(orientation.outgoing_slide).css({
            left: -that.width,
            display: 'none',
            zIndex: 0
          });
        }
      }

      complete();
    });
  },
  fade: function(orientation, complete) {
    var that = this,
        $children = that.$container.children(),
        $outgoing = $children.eq(orientation.outgoing_slide),
        $target = $children.eq(orientation.upcoming_slide);

    $target.css({
      left: this.width,
      opacity: 0,
      display: 'block'
    }).animate({
          opacity: 1
        },
        that.options.animation_speed,
        that.options.animation_easing
    );

    if (orientation.outgoing_slide >= 0) {
      $outgoing.animate({
        opacity: 0
      },
      that.options.animation_speed,
      that.options.animation_easing,
      function() {
        if (that.size() > 1) {
          $children.eq(orientation.upcoming_slide).css({
            zIndex: 2
          });

          if (orientation.outgoing_slide >= 0) {
            $children.eq(orientation.outgoing_slide).css({
              opacity: 1,
              display: 'none',
              zIndex: 0
            });
          }
        }

        complete();
      });
    } else {
      $target.css({
        zIndex: 2
      });
      complete();
    }
  }
};

fx = $.extend(fx, $.fn.superslides.fx);

var image = {
  _centerY: function(image) {
    var $img = $(image);

    $img.css({
      top: (that.height - $img.height()) / 2
    });
  },
  _centerX: function(image) {
    var $img = $(image);

    $img.css({
      left: (that.width - $img.width()) / 2
    });
  },
  _center: function(image) {
    that.image._centerX(image);
    that.image._centerY(image);
  },
  _aspectRatio: function(image) {
    if (!image.naturalHeight && !image.naturalWidth) {
      var img = new Image();
      img.src = image.src;
      image.naturalHeight = img.height;
      image.naturalWidth = img.width;
    }

    return image.naturalHeight / image.naturalWidth;
  },
  _scale: function(image, image_aspect_ratio) {
    image_aspect_ratio = image_aspect_ratio || that.image._aspectRatio(image);

    var container_aspect_ratio = that.height / that.width,
        $img = $(image);

    if (container_aspect_ratio > image_aspect_ratio) {
      $img.css({
        height: that.height,
        width: that.height / image_aspect_ratio
      });

    } else {
      $img.css({
        height: that.width * image_aspect_ratio,
        width: that.width
      });
    }
  }
};

var pagination = {
  _setCurrent: function(i) {
    if (!that.$pagination) { return; }

    var $pagination_children = that.$pagination.children();

    $pagination_children.removeClass('current');
    $pagination_children.eq(i)
      .addClass('current');
  },
  _addItem: function(i) {
    var slide_number = i + 1,
        href = slide_number,
        $slide = that.$container.children().eq(i),
        slide_id = $slide.attr('id');

    if (slide_id) {
      href = slide_id;
    }

    var $item = $("<a>", {
      'href': "#" + href,
      'text': href
    });

    $item.appendTo(that.$pagination);
  },
  _setup: function() {
    if (!that.options.pagination || that.size() === 1) { return; }

    var $pagination = $("<nav>", {
      'class': that.options.elements.pagination.replace(/^\./, '')
    });

    that.$pagination = $pagination.appendTo(that.$el);

    for (var i = 0; i < that.size(); i++) {
      that.pagination._addItem(i);
    }
  },
  _events: function() {
    that.$el.on('click', that.options.elements.pagination + ' a', function(e) {
      e.preventDefault();

      var hash  = that._parseHash(this.hash), index;
      index = that._upcomingSlide(hash, true);

      if (index !== that.current) {
        that.animate(index, function() {
          that.start();
        });
      }
    });
  }
};

  this.css = css;
  this.image = image;
  this.pagination = pagination;
  this.fx = fx;
  this.animation = this.fx[this.options.animation];

  this.$control = this.$container.wrap($control).parent('.slides-control');

  that._findPositions();
  that.width  = that._findWidth();
  that.height = that._findHeight();

  this.css.children();
  this.css.containers();
  this.css.images();
  this.pagination._setup();

  return initialize();
};

Superslides.prototype = {
  _findWidth: function() {
    return $(this.options.inherit_width_from).width();
  },
  _findHeight: function() {
    return $(this.options.inherit_height_from).height();
  },

  _findMultiplier: function() {
    return this.size() === 1 ? 1 : 3;
  },

  _upcomingSlide: function(direction, from_hash_change) {
    if (from_hash_change && !isNaN(direction)) {
      direction = direction - 1;
    }

    if ((/next/).test(direction)) {
      return this._nextInDom();

    } else if ((/prev/).test(direction)) {
      return this._prevInDom();

    } else if ((/\d/).test(direction)) {
      return +direction;

    } else if (direction && (/\w/).test(direction)) {
      var index = this._findSlideById(direction);
      if (index >= 0) {
        return index;
      } else {
        return 0;
      }

    } else {
      return 0;
    }
  },

  _findSlideById: function(id) {
    return this.$container.find('#' + id).index();
  },

  _findPositions: function(current, thisRef) {
    thisRef = thisRef || this;

    if (current === undefined) {
      current = -1;
    }

    thisRef.current = current;
    thisRef.next    = thisRef._nextInDom();
    thisRef.prev    = thisRef._prevInDom();
  },

  _nextInDom: function() {
    var index = this.current + 1;

    if (index === this.size()) {
      index = 0;
    }

    return index;
  },

  _prevInDom: function() {
    var index = this.current - 1;

    if (index < 0) {
      index = this.size() - 1;
    }

    return index;
  },

  _parseHash: function(hash) {
    hash = hash || window.location.hash;
    hash = hash.replace(/^#/, '');

    if (hash && !isNaN(+hash)) {
      hash = +hash;
    }

    return hash;
  },

  size: function() {
    return this.$container.children().length;
  },

  destroy: function() {
    return this.$el.removeData();
  },

  update: function() {
    this.css.children();
    this.css.containers();
    this.css.images();

    this.pagination._addItem(this.size())

    this._findPositions(this.current);
    this.$el.trigger('updated.slides');
  },

  stop: function() {
    clearInterval(this.play_id);
    delete this.play_id;

    this.$el.trigger('stopped.slides');
  },
  
  resized: function() {
    var that = this;
    var $children = that.$container.children();

    that.width  = that._findWidth();
    that.height = that._findHeight();

    $children.css({
      width: that.width,
      left: that.width
    });

    that.css.containers();
    that.css.images();
  },
  
  start: function() {
    var that = this;

    if (that.options.hashchange) {
      $(window).trigger('hashchange');
    } else {
      this.animate();
    }

    if (this.options.play) {
      if (this.play_id) {
        this.stop();
      }

      this.play_id = setInterval(function() {
        that.animate();
      }, this.options.play);
    }

    this.$el.trigger('started.slides');
  },

  animate: function(direction, userCallback) {
    var that = this,
        orientation = {};

    if (this.animating) {
      return;
    }

    this.animating = true;

    if (direction === undefined) {
      direction = 'next';
    }

    orientation.upcoming_slide = this._upcomingSlide(direction);

    if (orientation.upcoming_slide >= this.size()) {
      return;
    }

    orientation.outgoing_slide    = this.current;
    orientation.upcoming_position = this.width * 2;
    orientation.offset            = -orientation.upcoming_position;

    if (direction === 'prev' || direction < orientation.outgoing_slide) {
      orientation.upcoming_position = 0;
      orientation.offset            = 0;
    }

    if (that.size() > 1) {
      that.pagination._setCurrent(orientation.upcoming_slide);
    }

    if (that.options.hashchange) {
      var hash = orientation.upcoming_slide + 1,
          id = that.$container.children(':eq(' + orientation.upcoming_slide + ')').attr('id');

      if (id) {
        window.location.hash = id;
      } else {
        window.location.hash = hash;
      }
    }
    if (that.size() === 1) {
      that.stop();
      that.options.play = 0;
      that.options.animation_speed = 0;
      orientation.upcoming_slide    = 0;
      orientation.outgoing_slide    = -1;
    }
    that.$el.trigger('animating.slides', [orientation]);

    that.animation(orientation, function() {
      that._findPositions(orientation.upcoming_slide, that);

      if (typeof userCallback === 'function') {
        userCallback();
      }

      that.animating = false;
      that.$el.trigger('animated.slides');

      if (!that.init) {
        that.$el.trigger('init.slides');
        that.init = true;
        that.$container.fadeIn('fast');
      }
    });
  }
};

// jQuery plugin definition

$.fn[plugin] = function(option, args) {
  var result = [];

  this.each(function() {
    var $this, data, options;

    $this = $(this);
    data = $this.data(plugin);
    options = typeof option === 'object' && option;

    if (!data) {
      result = $this.data(plugin, (data = new Superslides(this, options)));
    }

    if (typeof option === "string") {
      result = data[option];
      if (typeof result === 'function') {
        return result = result.call(data, args);
      }
    }
  });

  return result;
};

$.fn[plugin].fx = {};

})(this, jQuery);
(function(a){if(typeof define==="function"&&define.amd&&define.amd.jQuery){define(["jquery"],a)}else{if(typeof module!=="undefined"&&module.exports){a(require("jquery"))}else{a(jQuery)}}}(function(f){var y="1.6.15",p="left",o="right",e="up",x="down",c="in",A="out",m="none",s="auto",l="swipe",t="pinch",B="tap",j="doubletap",b="longtap",z="hold",E="horizontal",u="vertical",i="all",r=10,g="start",k="move",h="end",q="cancel",a="ontouchstart" in window,v=window.navigator.msPointerEnabled&&!window.navigator.pointerEnabled&&!a,d=(window.navigator.pointerEnabled||window.navigator.msPointerEnabled)&&!a,C="TouchSwipe";var n={fingers:1,threshold:75,cancelThreshold:null,pinchThreshold:20,maxTimeThreshold:null,fingerReleaseThreshold:250,longTapThreshold:500,doubleTapThreshold:200,swipe:null,swipeLeft:null,swipeRight:null,swipeUp:null,swipeDown:null,swipeStatus:null,pinchIn:null,pinchOut:null,pinchStatus:null,click:null,tap:null,doubleTap:null,longTap:null,hold:null,triggerOnTouchEnd:true,triggerOnTouchLeave:false,allowPageScroll:"auto",fallbackToMouseEvents:true,excludedElements:"label, button, input, select, textarea, a, .noSwipe",preventDefaultEvents:true};f.fn.swipe=function(H){var G=f(this),F=G.data(C);if(F&&typeof H==="string"){if(F[H]){return F[H].apply(this,Array.prototype.slice.call(arguments,1))}else{f.error("Method "+H+" does not exist on jQuery.swipe")}}else{if(F&&typeof H==="object"){F.option.apply(this,arguments)}else{if(!F&&(typeof H==="object"||!H)){return w.apply(this,arguments)}}}return G};f.fn.swipe.version=y;f.fn.swipe.defaults=n;f.fn.swipe.phases={PHASE_START:g,PHASE_MOVE:k,PHASE_END:h,PHASE_CANCEL:q};f.fn.swipe.directions={LEFT:p,RIGHT:o,UP:e,DOWN:x,IN:c,OUT:A};f.fn.swipe.pageScroll={NONE:m,HORIZONTAL:E,VERTICAL:u,AUTO:s};f.fn.swipe.fingers={ONE:1,TWO:2,THREE:3,FOUR:4,FIVE:5,ALL:i};function w(F){if(F&&(F.allowPageScroll===undefined&&(F.swipe!==undefined||F.swipeStatus!==undefined))){F.allowPageScroll=m}if(F.click!==undefined&&F.tap===undefined){F.tap=F.click}if(!F){F={}}F=f.extend({},f.fn.swipe.defaults,F);return this.each(function(){var H=f(this);var G=H.data(C);if(!G){G=new D(this,F);H.data(C,G)}})}function D(a5,au){var au=f.extend({},au);var az=(a||d||!au.fallbackToMouseEvents),K=az?(d?(v?"MSPointerDown":"pointerdown"):"touchstart"):"mousedown",ax=az?(d?(v?"MSPointerMove":"pointermove"):"touchmove"):"mousemove",V=az?(d?(v?"MSPointerUp":"pointerup"):"touchend"):"mouseup",T=az?(d?"mouseleave":null):"mouseleave",aD=(d?(v?"MSPointerCancel":"pointercancel"):"touchcancel");var ag=0,aP=null,a2=null,ac=0,a1=0,aZ=0,H=1,ap=0,aJ=0,N=null;var aR=f(a5);var aa="start";var X=0;var aQ={};var U=0,a3=0,a6=0,ay=0,O=0;var aW=null,af=null;try{aR.bind(K,aN);aR.bind(aD,ba)}catch(aj){f.error("events not supported "+K+","+aD+" on jQuery.swipe")}this.enable=function(){aR.bind(K,aN);aR.bind(aD,ba);return aR};this.disable=function(){aK();return aR};this.destroy=function(){aK();aR.data(C,null);aR=null};this.option=function(bd,bc){if(typeof bd==="object"){au=f.extend(au,bd)}else{if(au[bd]!==undefined){if(bc===undefined){return au[bd]}else{au[bd]=bc}}else{if(!bd){return au}else{f.error("Option "+bd+" does not exist on jQuery.swipe.options")}}}return null};function aN(be){if(aB()){return}if(f(be.target).closest(au.excludedElements,aR).length>0){return}var bf=be.originalEvent?be.originalEvent:be;var bd,bg=bf.touches,bc=bg?bg[0]:bf;aa=g;if(bg){X=bg.length}else{if(au.preventDefaultEvents!==false){be.preventDefault()}}ag=0;aP=null;a2=null;aJ=null;ac=0;a1=0;aZ=0;H=1;ap=0;N=ab();S();ai(0,bc);if(!bg||(X===au.fingers||au.fingers===i)||aX()){U=ar();if(X==2){ai(1,bg[1]);a1=aZ=at(aQ[0].start,aQ[1].start)}if(au.swipeStatus||au.pinchStatus){bd=P(bf,aa)}}else{bd=false}if(bd===false){aa=q;P(bf,aa);return bd}else{if(au.hold){af=setTimeout(f.proxy(function(){aR.trigger("hold",[bf.target]);if(au.hold){bd=au.hold.call(aR,bf,bf.target)}},this),au.longTapThreshold)}an(true)}return null}function a4(bf){var bi=bf.originalEvent?bf.originalEvent:bf;if(aa===h||aa===q||al()){return}var be,bj=bi.touches,bd=bj?bj[0]:bi;var bg=aH(bd);a3=ar();if(bj){X=bj.length}if(au.hold){clearTimeout(af)}aa=k;if(X==2){if(a1==0){ai(1,bj[1]);a1=aZ=at(aQ[0].start,aQ[1].start)}else{aH(bj[1]);aZ=at(aQ[0].end,aQ[1].end);aJ=aq(aQ[0].end,aQ[1].end)}H=a8(a1,aZ);ap=Math.abs(a1-aZ)}if((X===au.fingers||au.fingers===i)||!bj||aX()){aP=aL(bg.start,bg.end);a2=aL(bg.last,bg.end);ak(bf,a2);ag=aS(bg.start,bg.end);ac=aM();aI(aP,ag);be=P(bi,aa);if(!au.triggerOnTouchEnd||au.triggerOnTouchLeave){var bc=true;if(au.triggerOnTouchLeave){var bh=aY(this);bc=F(bg.end,bh)}if(!au.triggerOnTouchEnd&&bc){aa=aC(k)}else{if(au.triggerOnTouchLeave&&!bc){aa=aC(h)}}if(aa==q||aa==h){P(bi,aa)}}}else{aa=q;P(bi,aa)}if(be===false){aa=q;P(bi,aa)}}function M(bc){var bd=bc.originalEvent?bc.originalEvent:bc,be=bd.touches;if(be){if(be.length&&!al()){G(bd);return true}else{if(be.length&&al()){return true}}}if(al()){X=ay}a3=ar();ac=aM();if(bb()||!am()){aa=q;P(bd,aa)}else{if(au.triggerOnTouchEnd||(au.triggerOnTouchEnd==false&&aa===k)){if(au.preventDefaultEvents!==false){bc.preventDefault()}aa=h;P(bd,aa)}else{if(!au.triggerOnTouchEnd&&a7()){aa=h;aF(bd,aa,B)}else{if(aa===k){aa=q;P(bd,aa)}}}}an(false);return null}function ba(){X=0;a3=0;U=0;a1=0;aZ=0;H=1;S();an(false)}function L(bc){var bd=bc.originalEvent?bc.originalEvent:bc;if(au.triggerOnTouchLeave){aa=aC(h);P(bd,aa)}}function aK(){aR.unbind(K,aN);aR.unbind(aD,ba);aR.unbind(ax,a4);aR.unbind(V,M);if(T){aR.unbind(T,L)}an(false)}function aC(bg){var bf=bg;var be=aA();var bd=am();var bc=bb();if(!be||bc){bf=q}else{if(bd&&bg==k&&(!au.triggerOnTouchEnd||au.triggerOnTouchLeave)){bf=h}else{if(!bd&&bg==h&&au.triggerOnTouchLeave){bf=q}}}return bf}function P(be,bc){var bd,bf=be.touches;if(J()||W()){bd=aF(be,bc,l)}if((Q()||aX())&&bd!==false){bd=aF(be,bc,t)}if(aG()&&bd!==false){bd=aF(be,bc,j)}else{if(ao()&&bd!==false){bd=aF(be,bc,b)}else{if(ah()&&bd!==false){bd=aF(be,bc,B)}}}if(bc===q){if(W()){bd=aF(be,bc,l)}if(aX()){bd=aF(be,bc,t)}ba(be)}if(bc===h){if(bf){if(!bf.length){ba(be)}}else{ba(be)}}return bd}function aF(bf,bc,be){var bd;if(be==l){aR.trigger("swipeStatus",[bc,aP||null,ag||0,ac||0,X,aQ,a2]);if(au.swipeStatus){bd=au.swipeStatus.call(aR,bf,bc,aP||null,ag||0,ac||0,X,aQ,a2);if(bd===false){return false}}if(bc==h&&aV()){clearTimeout(aW);clearTimeout(af);aR.trigger("swipe",[aP,ag,ac,X,aQ,a2]);if(au.swipe){bd=au.swipe.call(aR,bf,aP,ag,ac,X,aQ,a2);if(bd===false){return false}}switch(aP){case p:aR.trigger("swipeLeft",[aP,ag,ac,X,aQ,a2]);if(au.swipeLeft){bd=au.swipeLeft.call(aR,bf,aP,ag,ac,X,aQ,a2)}break;case o:aR.trigger("swipeRight",[aP,ag,ac,X,aQ,a2]);if(au.swipeRight){bd=au.swipeRight.call(aR,bf,aP,ag,ac,X,aQ,a2)}break;case e:aR.trigger("swipeUp",[aP,ag,ac,X,aQ,a2]);if(au.swipeUp){bd=au.swipeUp.call(aR,bf,aP,ag,ac,X,aQ,a2)}break;case x:aR.trigger("swipeDown",[aP,ag,ac,X,aQ,a2]);if(au.swipeDown){bd=au.swipeDown.call(aR,bf,aP,ag,ac,X,aQ,a2)}break}}}if(be==t){aR.trigger("pinchStatus",[bc,aJ||null,ap||0,ac||0,X,H,aQ]);if(au.pinchStatus){bd=au.pinchStatus.call(aR,bf,bc,aJ||null,ap||0,ac||0,X,H,aQ);if(bd===false){return false}}if(bc==h&&a9()){switch(aJ){case c:aR.trigger("pinchIn",[aJ||null,ap||0,ac||0,X,H,aQ]);if(au.pinchIn){bd=au.pinchIn.call(aR,bf,aJ||null,ap||0,ac||0,X,H,aQ)}break;case A:aR.trigger("pinchOut",[aJ||null,ap||0,ac||0,X,H,aQ]);if(au.pinchOut){bd=au.pinchOut.call(aR,bf,aJ||null,ap||0,ac||0,X,H,aQ)}break}}}if(be==B){if(bc===q||bc===h){clearTimeout(aW);clearTimeout(af);if(Z()&&!I()){O=ar();aW=setTimeout(f.proxy(function(){O=null;aR.trigger("tap",[bf.target]);if(au.tap){bd=au.tap.call(aR,bf,bf.target)}},this),au.doubleTapThreshold)}else{O=null;aR.trigger("tap",[bf.target]);if(au.tap){bd=au.tap.call(aR,bf,bf.target)}}}}else{if(be==j){if(bc===q||bc===h){clearTimeout(aW);clearTimeout(af);O=null;aR.trigger("doubletap",[bf.target]);if(au.doubleTap){bd=au.doubleTap.call(aR,bf,bf.target)}}}else{if(be==b){if(bc===q||bc===h){clearTimeout(aW);O=null;aR.trigger("longtap",[bf.target]);if(au.longTap){bd=au.longTap.call(aR,bf,bf.target)}}}}}return bd}function am(){var bc=true;if(au.threshold!==null){bc=ag>=au.threshold}return bc}function bb(){var bc=false;if(au.cancelThreshold!==null&&aP!==null){bc=(aT(aP)-ag)>=au.cancelThreshold}return bc}function ae(){if(au.pinchThreshold!==null){return ap>=au.pinchThreshold}return true}function aA(){var bc;if(au.maxTimeThreshold){if(ac>=au.maxTimeThreshold){bc=false}else{bc=true}}else{bc=true}return bc}function ak(bc,bd){if(au.preventDefaultEvents===false){return}if(au.allowPageScroll===m){bc.preventDefault()}else{var be=au.allowPageScroll===s;switch(bd){case p:if((au.swipeLeft&&be)||(!be&&au.allowPageScroll!=E)){bc.preventDefault()}break;case o:if((au.swipeRight&&be)||(!be&&au.allowPageScroll!=E)){bc.preventDefault()}break;case e:if((au.swipeUp&&be)||(!be&&au.allowPageScroll!=u)){bc.preventDefault()}break;case x:if((au.swipeDown&&be)||(!be&&au.allowPageScroll!=u)){bc.preventDefault()}break}}}function a9(){var bd=aO();var bc=Y();var be=ae();return bd&&bc&&be}function aX(){return !!(au.pinchStatus||au.pinchIn||au.pinchOut)}function Q(){return !!(a9()&&aX())}function aV(){var bf=aA();var bh=am();var be=aO();var bc=Y();var bd=bb();var bg=!bd&&bc&&be&&bh&&bf;return bg}function W(){return !!(au.swipe||au.swipeStatus||au.swipeLeft||au.swipeRight||au.swipeUp||au.swipeDown)}function J(){return !!(aV()&&W())}function aO(){return((X===au.fingers||au.fingers===i)||!a)}function Y(){return aQ[0].end.x!==0}function a7(){return !!(au.tap)}function Z(){return !!(au.doubleTap)}function aU(){return !!(au.longTap)}function R(){if(O==null){return false}var bc=ar();return(Z()&&((bc-O)<=au.doubleTapThreshold))}function I(){return R()}function aw(){return((X===1||!a)&&(isNaN(ag)||ag<au.threshold))}function a0(){return((ac>au.longTapThreshold)&&(ag<r))}function ah(){return !!(aw()&&a7())}function aG(){return !!(R()&&Z())}function ao(){return !!(a0()&&aU())}function G(bc){a6=ar();ay=bc.touches.length+1}function S(){a6=0;ay=0}function al(){var bc=false;if(a6){var bd=ar()-a6;if(bd<=au.fingerReleaseThreshold){bc=true}}return bc}function aB(){return !!(aR.data(C+"_intouch")===true)}function an(bc){if(!aR){return}if(bc===true){aR.bind(ax,a4);aR.bind(V,M);if(T){aR.bind(T,L)}}else{aR.unbind(ax,a4,false);aR.unbind(V,M,false);if(T){aR.unbind(T,L,false)}}aR.data(C+"_intouch",bc===true)}function ai(be,bc){var bd={start:{x:0,y:0},last:{x:0,y:0},end:{x:0,y:0}};bd.start.x=bd.last.x=bd.end.x=bc.pageX||bc.clientX;bd.start.y=bd.last.y=bd.end.y=bc.pageY||bc.clientY;aQ[be]=bd;return bd}function aH(bc){var be=bc.identifier!==undefined?bc.identifier:0;var bd=ad(be);if(bd===null){bd=ai(be,bc)}bd.last.x=bd.end.x;bd.last.y=bd.end.y;bd.end.x=bc.pageX||bc.clientX;bd.end.y=bc.pageY||bc.clientY;return bd}function ad(bc){return aQ[bc]||null}function aI(bc,bd){bd=Math.max(bd,aT(bc));N[bc].distance=bd}function aT(bc){if(N[bc]){return N[bc].distance}return undefined}function ab(){var bc={};bc[p]=av(p);bc[o]=av(o);bc[e]=av(e);bc[x]=av(x);return bc}function av(bc){return{direction:bc,distance:0}}function aM(){return a3-U}function at(bf,be){var bd=Math.abs(bf.x-be.x);var bc=Math.abs(bf.y-be.y);return Math.round(Math.sqrt(bd*bd+bc*bc))}function a8(bc,bd){var be=(bd/bc)*1;return be.toFixed(2)}function aq(){if(H<1){return A}else{return c}}function aS(bd,bc){return Math.round(Math.sqrt(Math.pow(bc.x-bd.x,2)+Math.pow(bc.y-bd.y,2)))}function aE(bf,bd){var bc=bf.x-bd.x;var bh=bd.y-bf.y;var be=Math.atan2(bh,bc);var bg=Math.round(be*180/Math.PI);if(bg<0){bg=360-Math.abs(bg)}return bg}function aL(bd,bc){var be=aE(bd,bc);if((be<=45)&&(be>=0)){return p}else{if((be<=360)&&(be>=315)){return p}else{if((be>=135)&&(be<=225)){return o}else{if((be>45)&&(be<135)){return x}else{return e}}}}}function ar(){var bc=new Date();return bc.getTime()}function aY(bc){bc=f(bc);var be=bc.offset();var bd={left:be.left,right:be.left+bc.outerWidth(),top:be.top,bottom:be.top+bc.outerHeight()};return bd}function F(bc,bd){return(bc.x>bd.left&&bc.x<bd.right&&bc.y>bd.top&&bc.y<bd.bottom)}}}));
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).Konva=e()}(this,(function(){"use strict";
/*
   * Konva JavaScript Framework v8.0.2
   * http://konvajs.org/
   * Licensed under the MIT
   * Date: Thu May 27 2021
   *
   * Original work Copyright (C) 2011 - 2013 by Eric Rowell (KineticJS)
   * Modified work Copyright (C) 2014 - present by Anton Lavrenov (Konva)
   *
   * @license
   */var t=Math.PI/180;const e="undefined"!=typeof global?global:"undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope?self:{},i={_global:e,version:"8.0.2",isBrowser:"undefined"!=typeof window&&("[object Window]"==={}.toString.call(window)||"[object global]"==={}.toString.call(window)),isUnminified:/param/.test(function(t){}.toString()),dblClickWindow:400,getAngle:e=>i.angleDeg?e*t:e,enableTrace:!1,pointerEventsEnabled:!0,autoDrawEnabled:!0,hitOnDragEnabled:!1,capturePointerEventsEnabled:!1,_mouseListenClick:!1,_touchListenClick:!1,_pointerListenClick:!1,_mouseInDblClickWindow:!1,_touchInDblClickWindow:!1,_pointerInDblClickWindow:!1,pixelRatio:"undefined"!=typeof window&&window.devicePixelRatio||1,dragDistance:3,angleDeg:!0,showWarnings:!0,dragButtons:[0,1],isDragging:()=>i.DD.isDragging,isDragReady:()=>!!i.DD.node,document:e.document,_injectGlobal(t){e.Konva=t}},r=t=>{i[t.prototype.getClassName()]=t};i._injectGlobal(i);class a{constructor(t=[1,0,0,1,0,0]){this.dirty=!1,this.m=t&&t.slice()||[1,0,0,1,0,0]}reset(){this.m[0]=1,this.m[1]=0,this.m[2]=0,this.m[3]=1,this.m[4]=0,this.m[5]=0}copy(){return new a(this.m)}copyInto(t){t.m[0]=this.m[0],t.m[1]=this.m[1],t.m[2]=this.m[2],t.m[3]=this.m[3],t.m[4]=this.m[4],t.m[5]=this.m[5]}point(t){var e=this.m;return{x:e[0]*t.x+e[2]*t.y+e[4],y:e[1]*t.x+e[3]*t.y+e[5]}}translate(t,e){return this.m[4]+=this.m[0]*t+this.m[2]*e,this.m[5]+=this.m[1]*t+this.m[3]*e,this}scale(t,e){return this.m[0]*=t,this.m[1]*=t,this.m[2]*=e,this.m[3]*=e,this}rotate(t){var e=Math.cos(t),i=Math.sin(t),r=this.m[0]*e+this.m[2]*i,a=this.m[1]*e+this.m[3]*i,n=this.m[0]*-i+this.m[2]*e,s=this.m[1]*-i+this.m[3]*e;return this.m[0]=r,this.m[1]=a,this.m[2]=n,this.m[3]=s,this}getTranslation(){return{x:this.m[4],y:this.m[5]}}skew(t,e){var i=this.m[0]+this.m[2]*e,r=this.m[1]+this.m[3]*e,a=this.m[2]+this.m[0]*t,n=this.m[3]+this.m[1]*t;return this.m[0]=i,this.m[1]=r,this.m[2]=a,this.m[3]=n,this}multiply(t){var e=this.m[0]*t.m[0]+this.m[2]*t.m[1],i=this.m[1]*t.m[0]+this.m[3]*t.m[1],r=this.m[0]*t.m[2]+this.m[2]*t.m[3],a=this.m[1]*t.m[2]+this.m[3]*t.m[3],n=this.m[0]*t.m[4]+this.m[2]*t.m[5]+this.m[4],s=this.m[1]*t.m[4]+this.m[3]*t.m[5]+this.m[5];return this.m[0]=e,this.m[1]=i,this.m[2]=r,this.m[3]=a,this.m[4]=n,this.m[5]=s,this}invert(){var t=1/(this.m[0]*this.m[3]-this.m[1]*this.m[2]),e=this.m[3]*t,i=-this.m[1]*t,r=-this.m[2]*t,a=this.m[0]*t,n=t*(this.m[2]*this.m[5]-this.m[3]*this.m[4]),s=t*(this.m[1]*this.m[4]-this.m[0]*this.m[5]);return this.m[0]=e,this.m[1]=i,this.m[2]=r,this.m[3]=a,this.m[4]=n,this.m[5]=s,this}getMatrix(){return this.m}setAbsolutePosition(t,e){var i=this.m[0],r=this.m[1],a=this.m[2],n=this.m[3],s=this.m[4],o=(i*(e-this.m[5])-r*(t-s))/(i*n-r*a),h=(t-s-a*o)/i;return this.translate(h,o)}decompose(){var t=this.m[0],e=this.m[1],i=this.m[2],r=this.m[3],a=t*r-e*i;let n={x:this.m[4],y:this.m[5],rotation:0,scaleX:0,scaleY:0,skewX:0,skewY:0};if(0!=t||0!=e){var s=Math.sqrt(t*t+e*e);n.rotation=e>0?Math.acos(t/s):-Math.acos(t/s),n.scaleX=s,n.scaleY=a/s,n.skewX=(t*i+e*r)/a,n.skewY=0}else if(0!=i||0!=r){var o=Math.sqrt(i*i+r*r);n.rotation=Math.PI/2-(r>0?Math.acos(-i/o):-Math.acos(i/o)),n.scaleX=a/o,n.scaleY=o,n.skewX=0,n.skewY=(t*i+e*r)/a}return n.rotation=c._getRotation(n.rotation),n}}var n=Math.PI/180,s=180/Math.PI,o={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,132,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,255,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,203],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[119,128,144],slategrey:[119,128,144],snow:[255,255,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],transparent:[255,255,255,0],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,5]},h=/rgb\((\d{1,3}),(\d{1,3}),(\d{1,3})\)/,l=[];const d="undefined"!=typeof requestAnimationFrame&&requestAnimationFrame||function(t){setTimeout(t,60)},c={_isElement:t=>!(!t||1!=t.nodeType),_isFunction:t=>!!(t&&t.constructor&&t.call&&t.apply),_isPlainObject:t=>!!t&&t.constructor===Object,_isArray:t=>"[object Array]"===Object.prototype.toString.call(t),_isNumber:t=>"[object Number]"===Object.prototype.toString.call(t)&&!isNaN(t)&&isFinite(t),_isString:t=>"[object String]"===Object.prototype.toString.call(t),_isBoolean:t=>"[object Boolean]"===Object.prototype.toString.call(t),isObject:t=>t instanceof Object,isValidSelector(t){if("string"!=typeof t)return!1;var e=t[0];return"#"===e||"."===e||e===e.toUpperCase()},_sign:t=>0===t||t>0?1:-1,requestAnimFrame(t){l.push(t),1===l.length&&d((function(){const t=l;l=[],t.forEach((function(t){t()}))}))},createCanvasElement(){var t=document.createElement("canvas");try{t.style=t.style||{}}catch(t){}return t},createImageElement:()=>document.createElement("img"),_isInDocument(t){for(;t=t.parentNode;)if(t==document)return!0;return!1},_urlToImage(t,e){var i=c.createImageElement();i.onload=function(){e(i)},i.src=t},_rgbToHex:(t,e,i)=>((1<<24)+(t<<16)+(e<<8)+i).toString(16).slice(1),_hexToRgb(t){t=t.replace("#","");var e=parseInt(t,16);return{r:e>>16&255,g:e>>8&255,b:255&e}},getRandomColor(){for(var t=(16777215*Math.random()<<0).toString(16);t.length<6;)t="0"+t;return"#"+t},getRGB(t){var e;return t in o?{r:(e=o[t])[0],g:e[1],b:e[2]}:"#"===t[0]?this._hexToRgb(t.substring(1)):"rgb("===t.substr(0,4)?(e=h.exec(t.replace(/ /g,"")),{r:parseInt(e[1],10),g:parseInt(e[2],10),b:parseInt(e[3],10)}):{r:0,g:0,b:0}},colorToRGBA:t=>(t=t||"black",c._namedColorToRBA(t)||c._hex3ColorToRGBA(t)||c._hex6ColorToRGBA(t)||c._rgbColorToRGBA(t)||c._rgbaColorToRGBA(t)||c._hslColorToRGBA(t)),_namedColorToRBA(t){var e=o[t.toLowerCase()];return e?{r:e[0],g:e[1],b:e[2],a:1}:null},_rgbColorToRGBA(t){if(0===t.indexOf("rgb(")){var e=(t=t.match(/rgb\(([^)]+)\)/)[1]).split(/ *, */).map(Number);return{r:e[0],g:e[1],b:e[2],a:1}}},_rgbaColorToRGBA(t){if(0===t.indexOf("rgba(")){var e=(t=t.match(/rgba\(([^)]+)\)/)[1]).split(/ *, */).map(Number);return{r:e[0],g:e[1],b:e[2],a:e[3]}}},_hex6ColorToRGBA(t){if("#"===t[0]&&7===t.length)return{r:parseInt(t.slice(1,3),16),g:parseInt(t.slice(3,5),16),b:parseInt(t.slice(5,7),16),a:1}},_hex3ColorToRGBA(t){if("#"===t[0]&&4===t.length)return{r:parseInt(t[1]+t[1],16),g:parseInt(t[2]+t[2],16),b:parseInt(t[3]+t[3],16),a:1}},_hslColorToRGBA(t){if(/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.test(t)){const[e,...i]=/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(t),r=Number(i[0])/360,a=Number(i[1])/100,n=Number(i[2])/100;let s,o,h;if(0===a)return h=255*n,{r:Math.round(h),g:Math.round(h),b:Math.round(h),a:1};s=n<.5?n*(1+a):n+a-n*a;const l=2*n-s,d=[0,0,0];for(let t=0;t<3;t++)o=r+1/3*-(t-1),o<0&&o++,o>1&&o--,h=6*o<1?l+6*(s-l)*o:2*o<1?s:3*o<2?l+(s-l)*(2/3-o)*6:l,d[t]=255*h;return{r:Math.round(d[0]),g:Math.round(d[1]),b:Math.round(d[2]),a:1}}},haveIntersection:(t,e)=>!(e.x>t.x+t.width||e.x+e.width<t.x||e.y>t.y+t.height||e.y+e.height<t.y),cloneObject(t){var e={};for(var i in t)this._isPlainObject(t[i])?e[i]=this.cloneObject(t[i]):this._isArray(t[i])?e[i]=this.cloneArray(t[i]):e[i]=t[i];return e},cloneArray:t=>t.slice(0),degToRad:t=>t*n,radToDeg:t=>t*s,_degToRad:t=>(c.warn("Util._degToRad is removed. Please use public Util.degToRad instead."),c.degToRad(t)),_radToDeg:t=>(c.warn("Util._radToDeg is removed. Please use public Util.radToDeg instead."),c.radToDeg(t)),_getRotation:t=>i.angleDeg?c.radToDeg(t):t,_capitalize:t=>t.charAt(0).toUpperCase()+t.slice(1),throw(t){throw new Error("Konva error: "+t)},error(t){console.error("Konva error: "+t)},warn(t){i.showWarnings&&console.warn("Konva warning: "+t)},each(t,e){for(var i in t)e(i,t[i])},_inRange:(t,e,i)=>e<=t&&t<i,_getProjectionToSegment(t,e,i,r,a,n){var s,o,h,l=(t-i)*(t-i)+(e-r)*(e-r);if(0==l)s=t,o=e,h=(a-i)*(a-i)+(n-r)*(n-r);else{var d=((a-t)*(i-t)+(n-e)*(r-e))/l;d<0?(s=t,o=e,h=(t-a)*(t-a)+(e-n)*(e-n)):d>1?(s=i,o=r,h=(i-a)*(i-a)+(r-n)*(r-n)):h=((s=t+d*(i-t))-a)*(s-a)+((o=e+d*(r-e))-n)*(o-n)}return[s,o,h]},_getProjectionToLine(t,e,i){var r=c.cloneObject(t),a=Number.MAX_VALUE;return e.forEach((function(n,s){if(i||s!==e.length-1){var o=e[(s+1)%e.length],h=c._getProjectionToSegment(n.x,n.y,o.x,o.y,t.x,t.y),l=h[0],d=h[1],g=h[2];g<a&&(r.x=l,r.y=d,a=g)}})),r},_prepareArrayForTween(t,e,i){var r,a=[],n=[];if(t.length>e.length){var s=e;e=t,t=s}for(r=0;r<t.length;r+=2)a.push({x:t[r],y:t[r+1]});for(r=0;r<e.length;r+=2)n.push({x:e[r],y:e[r+1]});var o=[];return n.forEach((function(t){var e=c._getProjectionToLine(t,a,i);o.push(e.x),o.push(e.y)})),o},_prepareToStringify(t){var e;for(var i in t.visitedByCircularReferenceRemoval=!0,t)if(t.hasOwnProperty(i)&&t[i]&&"object"==typeof t[i])if(e=Object.getOwnPropertyDescriptor(t,i),t[i].visitedByCircularReferenceRemoval||c._isElement(t[i])){if(!e.configurable)return null;delete t[i]}else if(null===c._prepareToStringify(t[i])){if(!e.configurable)return null;delete t[i]}return delete t.visitedByCircularReferenceRemoval,t},_assign(t,e){for(var i in e)t[i]=e[i];return t},_getFirstPointerId:t=>t.touches?t.changedTouches[0].identifier:999};function g(t){return c._isString(t)?'"'+t+'"':"[object Number]"===Object.prototype.toString.call(t)||c._isBoolean(t)?t:Object.prototype.toString.call(t)}function u(t){return t>255?255:t<0?0:Math.round(t)}function f(){if(i.isUnminified)return function(t,e){return c._isNumber(t)||c.warn(g(t)+' is a not valid value for "'+e+'" attribute. The value should be a number.'),t}}function p(t){if(i.isUnminified)return function(e,i){let r=c._isNumber(e),a=c._isArray(e)&&e.length==t;return r||a||c.warn(g(e)+' is a not valid value for "'+i+'" attribute. The value should be a number or Array<number>('+t+")"),e}}function v(){if(i.isUnminified)return function(t,e){return c._isNumber(t)||"auto"===t||c.warn(g(t)+' is a not valid value for "'+e+'" attribute. The value should be a number or "auto".'),t}}function m(){if(i.isUnminified)return function(t,e){return c._isString(t)||c.warn(g(t)+' is a not valid value for "'+e+'" attribute. The value should be a string.'),t}}function _(){if(i.isUnminified)return function(t,e){const i=c._isString(t),r="[object CanvasGradient]"===Object.prototype.toString.call(t)||t&&t.addColorStop;return i||r||c.warn(g(t)+' is a not valid value for "'+e+'" attribute. The value should be a string or a native gradient.'),t}}function y(){if(i.isUnminified)return function(t,e){return!0===t||!1===t||c.warn(g(t)+' is a not valid value for "'+e+'" attribute. The value should be a boolean.'),t}}const x={addGetterSetter(t,e,i,r,a){x.addGetter(t,e,i),x.addSetter(t,e,r,a),x.addOverloadedGetterSetter(t,e)},addGetter(t,e,i){var r="get"+c._capitalize(e);t.prototype[r]=t.prototype[r]||function(){var t=this.attrs[e];return void 0===t?i:t}},addSetter(t,e,i,r){var a="set"+c._capitalize(e);t.prototype[a]||x.overWriteSetter(t,e,i,r)},overWriteSetter(t,e,i,r){var a="set"+c._capitalize(e);t.prototype[a]=function(t){return i&&null!=t&&(t=i.call(this,t,e)),this._setAttr(e,t),r&&r.call(this),this}},addComponentsGetterSetter(t,e,r,a,n){var s,o,h=r.length,l=c._capitalize,d="get"+l(e),u="set"+l(e);t.prototype[d]=function(){var t={};for(s=0;s<h;s++)t[o=r[s]]=this.getAttr(e+l(o));return t};var f=function(t){if(i.isUnminified)return function(e,i){return c.isObject(e)||c.warn(g(e)+' is a not valid value for "'+i+'" attribute. The value should be an object with properties '+t),e}}(r);t.prototype[u]=function(t){var i,r=this.attrs[e];for(i in a&&(t=a.call(this,t)),f&&f.call(this,t,e),t)t.hasOwnProperty(i)&&this._setAttr(e+l(i),t[i]);return this._fireChangeEvent(e,r,t),n&&n.call(this),this},x.addOverloadedGetterSetter(t,e)},addOverloadedGetterSetter(t,e){var i=c._capitalize(e),r="set"+i,a="get"+i;t.prototype[e]=function(){return arguments.length?(this[r](arguments[0]),this):this[a]()}},addDeprecatedGetterSetter(t,e,i,r){c.error("Adding deprecated "+e);var a="get"+c._capitalize(e),n=e+" property is deprecated and will be removed soon. Look at Konva change log for more information.";t.prototype[a]=function(){c.error(n);var t=this.attrs[e];return void 0===t?i:t},x.addSetter(t,e,r,(function(){c.error(n)})),x.addOverloadedGetterSetter(t,e)},backCompat(t,e){c.each(e,(function(e,i){var r=t.prototype[i],a="get"+c._capitalize(e),n="set"+c._capitalize(e);function s(){r.apply(this,arguments),c.error('"'+e+'" method is deprecated and will be removed soon. Use ""'+i+'" instead.')}t.prototype[e]=s,t.prototype[a]=s,t.prototype[n]=s}))},afterSetFilter(){this._filterUpToDate=!1}};function b(t){var e,i,r=[],a=t.length,n=c;for(e=0;e<a;e++)i=t[e],n._isNumber(i)?i=Math.round(1e3*i)/1e3:n._isString(i)||(i+=""),r.push(i);return r}var S=["arc","arcTo","beginPath","bezierCurveTo","clearRect","clip","closePath","createLinearGradient","createPattern","createRadialGradient","drawImage","ellipse","fill","fillText","getImageData","createImageData","lineTo","moveTo","putImageData","quadraticCurveTo","rect","restore","rotate","save","scale","setLineDash","setTransform","stroke","strokeText","transform","translate"];class w{constructor(t){this.canvas=t,this._context=t._canvas.getContext("2d"),i.enableTrace&&(this.traceArr=[],this._enableTrace())}fillShape(t){t.fillEnabled()&&this._fill(t)}_fill(t){}strokeShape(t){t.hasStroke()&&this._stroke(t)}_stroke(t){}fillStrokeShape(t){t.attrs.fillAfterStrokeEnabled?(this.strokeShape(t),this.fillShape(t)):(this.fillShape(t),this.strokeShape(t))}getTrace(t,e){var i,r,a,n,s=this.traceArr,o=s.length,h="";for(i=0;i<o;i++)(a=(r=s[i]).method)?(n=r.args,h+=a,t?h+="()":c._isArray(n[0])?h+="(["+n.join(",")+"])":(e&&(n=n.map(t=>"number"==typeof t?Math.floor(t):t)),h+="("+n.join(",")+")")):(h+=r.property,t||(h+="="+r.val)),h+=";";return h}clearTrace(){this.traceArr=[]}_trace(t){var e=this.traceArr;e.push(t),e.length>=100&&e.shift()}reset(){var t=this.getCanvas().getPixelRatio();this.setTransform(1*t,0,0,1*t,0,0)}getCanvas(){return this.canvas}clear(t){var e=this.getCanvas();t?this.clearRect(t.x||0,t.y||0,t.width||0,t.height||0):this.clearRect(0,0,e.getWidth()/e.pixelRatio,e.getHeight()/e.pixelRatio)}_applyLineCap(t){var e=t.getLineCap();e&&this.setAttr("lineCap",e)}_applyOpacity(t){var e=t.getAbsoluteOpacity();1!==e&&this.setAttr("globalAlpha",e)}_applyLineJoin(t){var e=t.attrs.lineJoin;e&&this.setAttr("lineJoin",e)}setAttr(t,e){this._context[t]=e}arc(t,e,i,r,a,n){this._context.arc(t,e,i,r,a,n)}arcTo(t,e,i,r,a){this._context.arcTo(t,e,i,r,a)}beginPath(){this._context.beginPath()}bezierCurveTo(t,e,i,r,a,n){this._context.bezierCurveTo(t,e,i,r,a,n)}clearRect(t,e,i,r){this._context.clearRect(t,e,i,r)}clip(){this._context.clip()}closePath(){this._context.closePath()}createImageData(t,e){var i=arguments;return 2===i.length?this._context.createImageData(t,e):1===i.length?this._context.createImageData(t):void 0}createLinearGradient(t,e,i,r){return this._context.createLinearGradient(t,e,i,r)}createPattern(t,e){return this._context.createPattern(t,e)}createRadialGradient(t,e,i,r,a,n){return this._context.createRadialGradient(t,e,i,r,a,n)}drawImage(t,e,i,r,a,n,s,o,h){var l=arguments,d=this._context;3===l.length?d.drawImage(t,e,i):5===l.length?d.drawImage(t,e,i,r,a):9===l.length&&d.drawImage(t,e,i,r,a,n,s,o,h)}ellipse(t,e,i,r,a,n,s,o){this._context.ellipse(t,e,i,r,a,n,s,o)}isPointInPath(t,e){return this._context.isPointInPath(t,e)}fill(t){t?this._context.fill(t):this._context.fill()}fillRect(t,e,i,r){this._context.fillRect(t,e,i,r)}strokeRect(t,e,i,r){this._context.strokeRect(t,e,i,r)}fillText(t,e,i,r){r?this._context.fillText(t,e,i,r):this._context.fillText(t,e,i)}measureText(t){return this._context.measureText(t)}getImageData(t,e,i,r){return this._context.getImageData(t,e,i,r)}lineTo(t,e){this._context.lineTo(t,e)}moveTo(t,e){this._context.moveTo(t,e)}rect(t,e,i,r){this._context.rect(t,e,i,r)}putImageData(t,e,i){this._context.putImageData(t,e,i)}quadraticCurveTo(t,e,i,r){this._context.quadraticCurveTo(t,e,i,r)}restore(){this._context.restore()}rotate(t){this._context.rotate(t)}save(){this._context.save()}scale(t,e){this._context.scale(t,e)}setLineDash(t){this._context.setLineDash?this._context.setLineDash(t):"mozDash"in this._context?this._context.mozDash=t:"webkitLineDash"in this._context&&(this._context.webkitLineDash=t)}getLineDash(){return this._context.getLineDash()}setTransform(t,e,i,r,a,n){this._context.setTransform(t,e,i,r,a,n)}stroke(t){t?this._context.stroke(t):this._context.stroke()}strokeText(t,e,i,r){this._context.strokeText(t,e,i,r)}transform(t,e,i,r,a,n){this._context.transform(t,e,i,r,a,n)}translate(t,e){this._context.translate(t,e)}_enableTrace(){var t,e,i=this,r=S.length,a=this.setAttr,n=function(t){var r,a=i[t];i[t]=function(){return e=b(Array.prototype.slice.call(arguments,0)),r=a.apply(i,arguments),i._trace({method:t,args:e}),r}};for(t=0;t<r;t++)n(S[t]);i.setAttr=function(){a.apply(i,arguments);var t=arguments[0],e=arguments[1];"shadowOffsetX"!==t&&"shadowOffsetY"!==t&&"shadowBlur"!==t||(e/=this.canvas.getPixelRatio()),i._trace({property:t,val:e})}}_applyGlobalCompositeOperation(t){const e=t.attrs.globalCompositeOperation;!e||"source-over"===e||this.setAttr("globalCompositeOperation",e)}}["fillStyle","strokeStyle","shadowColor","shadowBlur","shadowOffsetX","shadowOffsetY","lineCap","lineDashOffset","lineJoin","lineWidth","miterLimit","font","textAlign","textBaseline","globalAlpha","globalCompositeOperation","imageSmoothingEnabled"].forEach((function(t){Object.defineProperty(w.prototype,t,{get(){return this._context[t]},set(e){this._context[t]=e}})}));class C extends w{_fillColor(t){var e=t.fill();this.setAttr("fillStyle",e),t._fillFunc(this)}_fillPattern(t){this.setAttr("fillStyle",t._getFillPattern()),t._fillFunc(this)}_fillLinearGradient(t){var e=t._getLinearGradient();e&&(this.setAttr("fillStyle",e),t._fillFunc(this))}_fillRadialGradient(t){var e=t._getRadialGradient();e&&(this.setAttr("fillStyle",e),t._fillFunc(this))}_fill(t){var e=t.fill(),i=t.getFillPriority();if(e&&"color"===i)this._fillColor(t);else{var r=t.getFillPatternImage();if(r&&"pattern"===i)this._fillPattern(t);else{var a=t.getFillLinearGradientColorStops();if(a&&"linear-gradient"===i)this._fillLinearGradient(t);else{var n=t.getFillRadialGradientColorStops();n&&"radial-gradient"===i?this._fillRadialGradient(t):e?this._fillColor(t):r?this._fillPattern(t):a?this._fillLinearGradient(t):n&&this._fillRadialGradient(t)}}}}_strokeLinearGradient(t){var e=t.getStrokeLinearGradientStartPoint(),i=t.getStrokeLinearGradientEndPoint(),r=t.getStrokeLinearGradientColorStops(),a=this.createLinearGradient(e.x,e.y,i.x,i.y);if(r){for(var n=0;n<r.length;n+=2)a.addColorStop(r[n],r[n+1]);this.setAttr("strokeStyle",a)}}_stroke(t){var e=t.dash(),i=t.getStrokeScaleEnabled();if(t.hasStroke()){if(!i){this.save();var r=this.getCanvas().getPixelRatio();this.setTransform(r,0,0,r,0,0)}this._applyLineCap(t),e&&t.dashEnabled()&&(this.setLineDash(e),this.setAttr("lineDashOffset",t.dashOffset())),this.setAttr("lineWidth",t.strokeWidth()),t.getShadowForStrokeEnabled()||this.setAttr("shadowColor","rgba(0,0,0,0)"),t.getStrokeLinearGradientColorStops()?this._strokeLinearGradient(t):this.setAttr("strokeStyle",t.stroke()),t._strokeFunc(this),i||this.restore()}}_applyShadow(t){var e,i,r,a=null!==(e=t.getShadowRGBA())&&void 0!==e?e:"black",n=null!==(i=t.getShadowBlur())&&void 0!==i?i:5,s=null!==(r=t.getShadowOffset())&&void 0!==r?r:{x:0,y:0},o=t.getAbsoluteScale(),h=this.canvas.getPixelRatio(),l=o.x*h,d=o.y*h;this.setAttr("shadowColor",a),this.setAttr("shadowBlur",n*Math.min(Math.abs(l),Math.abs(d))),this.setAttr("shadowOffsetX",s.x*l),this.setAttr("shadowOffsetY",s.y*d)}}class k extends w{_fill(t){this.save(),this.setAttr("fillStyle",t.colorKey),t._fillFuncHit(this),this.restore()}strokeShape(t){t.hasHitStroke()&&this._stroke(t)}_stroke(t){if(t.hasHitStroke()){var e=t.getStrokeScaleEnabled();if(!e){this.save();var i=this.getCanvas().getPixelRatio();this.setTransform(i,0,0,i,0,0)}this._applyLineCap(t);var r=t.hitStrokeWidth(),a="auto"===r?t.strokeWidth():r;this.setAttr("lineWidth",a),this.setAttr("strokeStyle",t.colorKey),t._strokeFuncHit(this),e||this.restore()}}}var P;class T{constructor(t){this.pixelRatio=1,this.width=0,this.height=0,this.isCache=!1;var e=(t||{}).pixelRatio||i.pixelRatio||function(){if(P)return P;var t=c.createCanvasElement().getContext("2d");return P=(i._global.devicePixelRatio||1)/(t.webkitBackingStorePixelRatio||t.mozBackingStorePixelRatio||t.msBackingStorePixelRatio||t.oBackingStorePixelRatio||t.backingStorePixelRatio||1)}();this.pixelRatio=e,this._canvas=c.createCanvasElement(),this._canvas.style.padding="0",this._canvas.style.margin="0",this._canvas.style.border="0",this._canvas.style.background="transparent",this._canvas.style.position="absolute",this._canvas.style.top="0",this._canvas.style.left="0"}getContext(){return this.context}getPixelRatio(){return this.pixelRatio}setPixelRatio(t){var e=this.pixelRatio;this.pixelRatio=t,this.setSize(this.getWidth()/e,this.getHeight()/e)}setWidth(t){this.width=this._canvas.width=t*this.pixelRatio,this._canvas.style.width=t+"px";var e=this.pixelRatio;this.getContext()._context.scale(e,e)}setHeight(t){this.height=this._canvas.height=t*this.pixelRatio,this._canvas.style.height=t+"px";var e=this.pixelRatio;this.getContext()._context.scale(e,e)}getWidth(){return this.width}getHeight(){return this.height}setSize(t,e){this.setWidth(t||0),this.setHeight(e||0)}toDataURL(t,e){try{return this._canvas.toDataURL(t,e)}catch(t){try{return this._canvas.toDataURL()}catch(t){return c.error("Unable to get data URL. "+t.message+" For more info read https://konvajs.org/docs/posts/Tainted_Canvas.html."),""}}}}x.addGetterSetter(T,"pixelRatio",void 0,f());class A extends T{constructor(t={width:0,height:0}){super(t),this.context=new C(this),this.setSize(t.width,t.height)}}class M extends T{constructor(t={width:0,height:0}){super(t),this.hitCanvas=!0,this.context=new k(this),this.setSize(t.width,t.height)}}const G={get isDragging(){var t=!1;return G._dragElements.forEach(e=>{"dragging"===e.dragStatus&&(t=!0)}),t},justDragged:!1,get node(){var t;return G._dragElements.forEach(e=>{t=e.node}),t},_dragElements:new Map,_drag(t){const e=[];G._dragElements.forEach((i,r)=>{const{node:a}=i,n=a.getStage();n.setPointersPositions(t),void 0===i.pointerId&&(i.pointerId=c._getFirstPointerId(t));const s=n._changedPointerPositions.find(t=>t.id===i.pointerId);if(s){if("dragging"!==i.dragStatus){var o=a.dragDistance();if(Math.max(Math.abs(s.x-i.startPointerPos.x),Math.abs(s.y-i.startPointerPos.y))<o)return;if(a.startDrag({evt:t}),!a.isDragging())return}a._setDragPosition(t,i),e.push(a)}}),e.forEach(e=>{e.fire("dragmove",{type:"dragmove",target:e,evt:t},!0)})},_endDragBefore(t){G._dragElements.forEach(e=>{const{node:r}=e,a=r.getStage();t&&a.setPointersPositions(t);if(!a._changedPointerPositions.find(t=>t.id===e.pointerId))return;"dragging"!==e.dragStatus&&"stopped"!==e.dragStatus||(G.justDragged=!0,i._mouseListenClick=!1,i._touchListenClick=!1,i._pointerListenClick=!1,e.dragStatus="stopped");const n=e.node.getLayer()||e.node instanceof i.Stage&&e.node;n&&n.batchDraw()})},_endDragAfter(t){G._dragElements.forEach((e,i)=>{"stopped"===e.dragStatus&&e.node.fire("dragend",{type:"dragend",target:e.node,evt:t},!0),"dragging"!==e.dragStatus&&G._dragElements.delete(i)})}};i.isBrowser&&(window.addEventListener("mouseup",G._endDragBefore,!0),window.addEventListener("touchend",G._endDragBefore,!0),window.addEventListener("mousemove",G._drag),window.addEventListener("touchmove",G._drag),window.addEventListener("mouseup",G._endDragAfter,!1),window.addEventListener("touchend",G._endDragAfter,!1));var E=["xChange.konva","yChange.konva","scaleXChange.konva","scaleYChange.konva","skewXChange.konva","skewYChange.konva","rotationChange.konva","offsetXChange.konva","offsetYChange.konva","transformsEnabledChange.konva"].join(" ");let R=1;class L{constructor(t){this._id=R++,this.eventListeners={},this.attrs={},this.index=0,this._allEventListeners=null,this.parent=null,this._cache=new Map,this._attachedDepsListeners=new Map,this._lastPos=null,this._batchingTransformChange=!1,this._needClearTransformCache=!1,this._filterUpToDate=!1,this._isUnderCache=!1,this._dragEventId=null,this._shouldFireChangeEvents=!1,this.setAttrs(t),this._shouldFireChangeEvents=!0}hasChildren(){return!1}_clearCache(t){"transform"!==t&&"absoluteTransform"!==t||!this._cache.get(t)?t?this._cache.delete(t):this._cache.clear():this._cache.get(t).dirty=!0}_getCache(t,e){var i=this._cache.get(t);return(void 0===i||("transform"===t||"absoluteTransform"===t)&&!0===i.dirty)&&(i=e.call(this),this._cache.set(t,i)),i}_calculate(t,e,i){if(!this._attachedDepsListeners.get(t)){const i=e.map(t=>t+"Change.konva").join(" ");this.on(i,()=>{this._clearCache(t)}),this._attachedDepsListeners.set(t,!0)}return this._getCache(t,i)}_getCanvasCache(){return this._cache.get("canvas")}_clearSelfAndDescendantCache(t){this._clearCache(t),"absoluteTransform"===t&&this.fire("absoluteTransformChange")}clearCache(){return this._cache.delete("canvas"),this._clearSelfAndDescendantCache(),this._requestDraw(),this}cache(t){var e=t||{},i={};void 0!==e.x&&void 0!==e.y&&void 0!==e.width&&void 0!==e.height||(i=this.getClientRect({skipTransform:!0,relativeTo:this.getParent()}));var r=Math.ceil(e.width||i.width),a=Math.ceil(e.height||i.height),n=e.pixelRatio,s=void 0===e.x?i.x:e.x,o=void 0===e.y?i.y:e.y,h=e.offset||0,l=e.drawBorder||!1,d=e.hitCanvasPixelRatio||1;if(r&&a){s-=h,o-=h;var g=new A({pixelRatio:n,width:r+=2*h,height:a+=2*h}),u=new A({pixelRatio:n,width:0,height:0}),f=new M({pixelRatio:d,width:r,height:a}),p=g.getContext(),v=f.getContext();return f.isCache=!0,g.isCache=!0,this._cache.delete("canvas"),this._filterUpToDate=!1,!1===e.imageSmoothingEnabled&&(g.getContext()._context.imageSmoothingEnabled=!1,u.getContext()._context.imageSmoothingEnabled=!1),p.save(),v.save(),p.translate(-s,-o),v.translate(-s,-o),this._isUnderCache=!0,this._clearSelfAndDescendantCache("absoluteOpacity"),this._clearSelfAndDescendantCache("absoluteScale"),this.drawScene(g,this),this.drawHit(f,this),this._isUnderCache=!1,p.restore(),v.restore(),l&&(p.save(),p.beginPath(),p.rect(0,0,r,a),p.closePath(),p.setAttr("strokeStyle","red"),p.setAttr("lineWidth",5),p.stroke(),p.restore()),this._cache.set("canvas",{scene:g,filter:u,hit:f,x:s,y:o}),this._requestDraw(),this}c.error("Can not cache the node. Width or height of the node equals 0. Caching is skipped.")}isCached(){return this._cache.has("canvas")}getClientRect(t){throw new Error('abstract "getClientRect" method call')}_transformedRect(t,e){var i,r,a,n,s=[{x:t.x,y:t.y},{x:t.x+t.width,y:t.y},{x:t.x+t.width,y:t.y+t.height},{x:t.x,y:t.y+t.height}],o=this.getAbsoluteTransform(e);return s.forEach((function(t){var e=o.point(t);void 0===i&&(i=a=e.x,r=n=e.y),i=Math.min(i,e.x),r=Math.min(r,e.y),a=Math.max(a,e.x),n=Math.max(n,e.y)})),{x:i,y:r,width:a-i,height:n-r}}_drawCachedSceneCanvas(t){t.save(),t._applyOpacity(this),t._applyGlobalCompositeOperation(this);const e=this._getCanvasCache();t.translate(e.x,e.y);var i=this._getCachedSceneCanvas(),r=i.pixelRatio;t.drawImage(i._canvas,0,0,i.width/r,i.height/r),t.restore()}_drawCachedHitCanvas(t){var e=this._getCanvasCache(),i=e.hit;t.save(),t.translate(e.x,e.y),t.drawImage(i._canvas,0,0,i.width/i.pixelRatio,i.height/i.pixelRatio),t.restore()}_getCachedSceneCanvas(){var t,e,i,r,a=this.filters(),n=this._getCanvasCache(),s=n.scene,o=n.filter,h=o.getContext();if(a){if(!this._filterUpToDate){var l=s.pixelRatio;o.setSize(s.width/s.pixelRatio,s.height/s.pixelRatio);try{for(t=a.length,h.clear(),h.drawImage(s._canvas,0,0,s.getWidth()/l,s.getHeight()/l),e=h.getImageData(0,0,o.getWidth(),o.getHeight()),i=0;i<t;i++)"function"==typeof(r=a[i])?(r.call(this,e),h.putImageData(e,0,0)):c.error("Filter should be type of function, but got "+typeof r+" instead. Please check correct filters")}catch(t){c.error("Unable to apply filter. "+t.message+" This post my help you https://konvajs.org/docs/posts/Tainted_Canvas.html.")}this._filterUpToDate=!0}return o}return s}on(t,e){if(this._cache&&this._cache.delete("allEventListeners"),3===arguments.length)return this._delegate.apply(this,arguments);var i,r,a,n,s=t.split(" "),o=s.length;for(i=0;i<o;i++)a=(r=s[i].split("."))[0],n=r[1]||"",this.eventListeners[a]||(this.eventListeners[a]=[]),this.eventListeners[a].push({name:n,handler:e});return this}off(t,e){var i,r,a,n,s,o=(t||"").split(" "),h=o.length;if(this._cache&&this._cache.delete("allEventListeners"),!t)for(r in this.eventListeners)this._off(r);for(i=0;i<h;i++)if(n=(a=o[i].split("."))[0],s=a[1],n)this.eventListeners[n]&&this._off(n,s,e);else for(r in this.eventListeners)this._off(r,s,e);return this}dispatchEvent(t){var e={target:this,type:t.type,evt:t};return this.fire(t.type,e),this}addEventListener(t,e){return this.on(t,(function(t){e.call(this,t.evt)})),this}removeEventListener(t){return this.off(t),this}_delegate(t,e,i){var r=this;this.on(t,(function(t){for(var a=t.target.findAncestors(e,!0,r),n=0;n<a.length;n++)(t=c.cloneObject(t)).currentTarget=a[n],i.call(a[n],t)}))}remove(){return this.isDragging()&&this.stopDrag(),G._dragElements.delete(this._id),this._remove(),this}_clearCaches(){this._clearSelfAndDescendantCache("absoluteTransform"),this._clearSelfAndDescendantCache("absoluteOpacity"),this._clearSelfAndDescendantCache("absoluteScale"),this._clearSelfAndDescendantCache("stage"),this._clearSelfAndDescendantCache("visible"),this._clearSelfAndDescendantCache("listening")}_remove(){this._clearCaches();var t=this.getParent();t&&t.children&&(t.children.splice(this.index,1),t._setChildrenIndices(),this.parent=null)}destroy(){return this.remove(),this}getAttr(t){var e="get"+c._capitalize(t);return c._isFunction(this[e])?this[e]():this.attrs[t]}getAncestors(){for(var t=this.getParent(),e=[];t;)e.push(t),t=t.getParent();return e}getAttrs(){return this.attrs||{}}setAttrs(t){return this._batchTransformChanges(()=>{var e,i;if(!t)return this;for(e in t)"children"!==e&&(i="set"+c._capitalize(e),c._isFunction(this[i])?this[i](t[e]):this._setAttr(e,t[e]))}),this}isListening(){return this._getCache("listening",this._isListening)}_isListening(t){if(!this.listening())return!1;const e=this.getParent();return!e||e===t||this===t||e._isListening(t)}isVisible(){return this._getCache("visible",this._isVisible)}_isVisible(t){if(!this.visible())return!1;const e=this.getParent();return!e||e===t||this===t||e._isVisible(t)}shouldDrawHit(t,e=!1){if(t)return this._isVisible(t)&&this._isListening(t);var r=this.getLayer(),a=!1;G._dragElements.forEach(t=>{"dragging"===t.dragStatus&&("Stage"===t.node.nodeType||t.node.getLayer()===r)&&(a=!0)});var n=!e&&!i.hitOnDragEnabled&&a;return this.isListening()&&this.isVisible()&&!n}show(){return this.visible(!0),this}hide(){return this.visible(!1),this}getZIndex(){return this.index||0}getAbsoluteZIndex(){var t,e,i,r,a=this.getDepth(),n=this,s=0;return"Stage"!==n.nodeType&&function o(h){for(t=[],e=h.length,i=0;i<e;i++)r=h[i],s++,"Shape"!==r.nodeType&&(t=t.concat(r.getChildren().slice())),r._id===n._id&&(i=e);t.length>0&&t[0].getDepth()<=a&&o(t)}(n.getStage().getChildren()),s}getDepth(){for(var t=0,e=this.parent;e;)t++,e=e.parent;return t}_batchTransformChanges(t){this._batchingTransformChange=!0,t(),this._batchingTransformChange=!1,this._needClearTransformCache&&(this._clearCache("transform"),this._clearSelfAndDescendantCache("absoluteTransform")),this._needClearTransformCache=!1}setPosition(t){return this._batchTransformChanges(()=>{this.x(t.x),this.y(t.y)}),this}getPosition(){return{x:this.x(),y:this.y()}}getRelativePointerPosition(){if(!this.getStage())return null;var t=this.getStage().getPointerPosition();if(!t)return null;var e=this.getAbsoluteTransform().copy();return e.invert(),e.point(t)}getAbsolutePosition(t){let e=!1,i=this.parent;for(;i;){if(i.isCached()){e=!0;break}i=i.parent}e&&!t&&(t=!0);var r=this.getAbsoluteTransform(t).getMatrix(),n=new a,s=this.offset();return n.m=r.slice(),n.translate(s.x,s.y),n.getTranslation()}setAbsolutePosition(t){var e=this._clearTransform();this.attrs.x=e.x,this.attrs.y=e.y,delete e.x,delete e.y,this._clearCache("transform");var i=this._getAbsoluteTransform().copy();return i.invert(),i.translate(t.x,t.y),t={x:this.attrs.x+i.getTranslation().x,y:this.attrs.y+i.getTranslation().y},this._setTransform(e),this.setPosition({x:t.x,y:t.y}),this._clearCache("transform"),this._clearSelfAndDescendantCache("absoluteTransform"),this}_setTransform(t){var e;for(e in t)this.attrs[e]=t[e]}_clearTransform(){var t={x:this.x(),y:this.y(),rotation:this.rotation(),scaleX:this.scaleX(),scaleY:this.scaleY(),offsetX:this.offsetX(),offsetY:this.offsetY(),skewX:this.skewX(),skewY:this.skewY()};return this.attrs.x=0,this.attrs.y=0,this.attrs.rotation=0,this.attrs.scaleX=1,this.attrs.scaleY=1,this.attrs.offsetX=0,this.attrs.offsetY=0,this.attrs.skewX=0,this.attrs.skewY=0,t}move(t){var e=t.x,i=t.y,r=this.x(),a=this.y();return void 0!==e&&(r+=e),void 0!==i&&(a+=i),this.setPosition({x:r,y:a}),this}_eachAncestorReverse(t,e){var i,r,a=[],n=this.getParent();if(!e||e._id!==this._id){for(a.unshift(this);n&&(!e||n._id!==e._id);)a.unshift(n),n=n.parent;for(i=a.length,r=0;r<i;r++)t(a[r])}}rotate(t){return this.rotation(this.rotation()+t),this}moveToTop(){if(!this.parent)return c.warn("Node has no parent. moveToTop function is ignored."),!1;var t=this.index;return this.parent.children.splice(t,1),this.parent.children.push(this),this.parent._setChildrenIndices(),!0}moveUp(){if(!this.parent)return c.warn("Node has no parent. moveUp function is ignored."),!1;var t=this.index;return t<this.parent.getChildren().length-1&&(this.parent.children.splice(t,1),this.parent.children.splice(t+1,0,this),this.parent._setChildrenIndices(),!0)}moveDown(){if(!this.parent)return c.warn("Node has no parent. moveDown function is ignored."),!1;var t=this.index;return t>0&&(this.parent.children.splice(t,1),this.parent.children.splice(t-1,0,this),this.parent._setChildrenIndices(),!0)}moveToBottom(){if(!this.parent)return c.warn("Node has no parent. moveToBottom function is ignored."),!1;var t=this.index;return t>0&&(this.parent.children.splice(t,1),this.parent.children.unshift(this),this.parent._setChildrenIndices(),!0)}setZIndex(t){if(!this.parent)return c.warn("Node has no parent. zIndex parameter is ignored."),this;(t<0||t>=this.parent.children.length)&&c.warn("Unexpected value "+t+" for zIndex property. zIndex is just index of a node in children of its parent. Expected value is from 0 to "+(this.parent.children.length-1)+".");var e=this.index;return this.parent.children.splice(e,1),this.parent.children.splice(t,0,this),this.parent._setChildrenIndices(),this}getAbsoluteOpacity(){return this._getCache("absoluteOpacity",this._getAbsoluteOpacity)}_getAbsoluteOpacity(){var t=this.opacity(),e=this.getParent();return e&&!e._isUnderCache&&(t*=e.getAbsoluteOpacity()),t}moveTo(t){return this.getParent()!==t&&(this._remove(),t.add(this)),this}toObject(){var t,e,i,r,a={},n=this.getAttrs();for(t in a.attrs={},n)e=n[t],c.isObject(e)&&!c._isPlainObject(e)&&!c._isArray(e)||(i="function"==typeof this[t]&&this[t],delete n[t],r=i?i.call(this):null,n[t]=e,r!==e&&(a.attrs[t]=e));return a.className=this.getClassName(),c._prepareToStringify(a)}toJSON(){return JSON.stringify(this.toObject())}getParent(){return this.parent}findAncestors(t,e,i){var r=[];e&&this._isMatch(t)&&r.push(this);for(var a=this.parent;a;){if(a===i)return r;a._isMatch(t)&&r.push(a),a=a.parent}return r}isAncestorOf(t){return!1}findAncestor(t,e,i){return this.findAncestors(t,e,i)[0]}_isMatch(t){if(!t)return!1;if("function"==typeof t)return t(this);var e,i,r=t.replace(/ /g,"").split(","),a=r.length;for(e=0;e<a;e++)if(i=r[e],c.isValidSelector(i)||(c.warn('Selector "'+i+'" is invalid. Allowed selectors examples are "#foo", ".bar" or "Group".'),c.warn('If you have a custom shape with such className, please change it to start with upper letter like "Triangle".'),c.warn("Konva is awesome, right?")),"#"===i.charAt(0)){if(this.id()===i.slice(1))return!0}else if("."===i.charAt(0)){if(this.hasName(i.slice(1)))return!0}else if(this.className===i||this.nodeType===i)return!0;return!1}getLayer(){var t=this.getParent();return t?t.getLayer():null}getStage(){return this._getCache("stage",this._getStage)}_getStage(){var t=this.getParent();return t?t.getStage():void 0}fire(t,e={},i){return e.target=e.target||this,i?this._fireAndBubble(t,e):this._fire(t,e),this}getAbsoluteTransform(t){return t?this._getAbsoluteTransform(t):this._getCache("absoluteTransform",this._getAbsoluteTransform)}_getAbsoluteTransform(t){var e;if(t)return e=new a,this._eachAncestorReverse((function(t){var i=t.transformsEnabled();"all"===i?e.multiply(t.getTransform()):"position"===i&&e.translate(t.x()-t.offsetX(),t.y()-t.offsetY())}),t),e;e=this._cache.get("absoluteTransform")||new a,this.parent?this.parent.getAbsoluteTransform().copyInto(e):e.reset();var i=this.transformsEnabled();if("all"===i)e.multiply(this.getTransform());else if("position"===i){const t=this.attrs.x||0,i=this.attrs.y||0,r=this.attrs.offsetX||0,a=this.attrs.offsetY||0;e.translate(t-r,i-a)}return e.dirty=!1,e}getAbsoluteScale(t){for(var e=this;e;)e._isUnderCache&&(t=e),e=e.getParent();const i=this.getAbsoluteTransform(t).decompose();return{x:i.scaleX,y:i.scaleY}}getAbsoluteRotation(){return this.getAbsoluteTransform().decompose().rotation}getTransform(){return this._getCache("transform",this._getTransform)}_getTransform(){var t,e,r=this._cache.get("transform")||new a;r.reset();var n=this.x(),s=this.y(),o=i.getAngle(this.rotation()),h=null!==(t=this.attrs.scaleX)&&void 0!==t?t:1,l=null!==(e=this.attrs.scaleY)&&void 0!==e?e:1,d=this.attrs.skewX||0,c=this.attrs.skewY||0,g=this.attrs.offsetX||0,u=this.attrs.offsetY||0;return 0===n&&0===s||r.translate(n,s),0!==o&&r.rotate(o),0===d&&0===c||r.skew(d,c),1===h&&1===l||r.scale(h,l),0===g&&0===u||r.translate(-1*g,-1*u),r.dirty=!1,r}clone(t){var e,i,r,a,n,s=c.cloneObject(this.attrs);for(e in t)s[e]=t[e];var o=new this.constructor(s);for(e in this.eventListeners)for(r=(i=this.eventListeners[e]).length,a=0;a<r;a++)(n=i[a]).name.indexOf("konva")<0&&(o.eventListeners[e]||(o.eventListeners[e]=[]),o.eventListeners[e].push(n));return o}_toKonvaCanvas(t){t=t||{};var e=this.getClientRect(),i=this.getStage(),r=void 0!==t.x?t.x:e.x,a=void 0!==t.y?t.y:e.y,n=t.pixelRatio||1,s=new A({width:t.width||e.width||(i?i.width():0),height:t.height||e.height||(i?i.height():0),pixelRatio:n}),o=s.getContext();return o.save(),(r||a)&&o.translate(-1*r,-1*a),this.drawScene(s),o.restore(),s}toCanvas(t){return this._toKonvaCanvas(t)._canvas}toDataURL(t){var e=(t=t||{}).mimeType||null,i=t.quality||null,r=this._toKonvaCanvas(t).toDataURL(e,i);return t.callback&&t.callback(r),r}toImage(t){if(!t||!t.callback)throw"callback required for toImage method config argument";var e=t.callback;delete t.callback,c._urlToImage(this.toDataURL(t),(function(t){e(t)}))}setSize(t){return this.width(t.width),this.height(t.height),this}getSize(){return{width:this.width(),height:this.height()}}getClassName(){return this.className||this.nodeType}getType(){return this.nodeType}getDragDistance(){return void 0!==this.attrs.dragDistance?this.attrs.dragDistance:this.parent?this.parent.getDragDistance():i.dragDistance}_off(t,e,i){var r,a,n,s=this.eventListeners[t];for(r=0;r<s.length;r++)if(a=s[r].name,n=s[r].handler,!("konva"===a&&"konva"!==e||e&&a!==e||i&&i!==n)){if(s.splice(r,1),0===s.length){delete this.eventListeners[t];break}r--}}_fireChangeEvent(t,e,i){this._fire(t+"Change",{oldVal:e,newVal:i})}addName(t){if(!this.hasName(t)){var e=this.name(),i=e?e+" "+t:t;this.name(i)}return this}hasName(t){if(!t)return!1;const e=this.name();return!!e&&-1!==(e||"").split(/\s/g).indexOf(t)}removeName(t){var e=(this.name()||"").split(/\s/g),i=e.indexOf(t);return-1!==i&&(e.splice(i,1),this.name(e.join(" "))),this}setAttr(t,e){var i=this["set"+c._capitalize(t)];return c._isFunction(i)?i.call(this,e):this._setAttr(t,e),this}_requestDraw(){if(i.autoDrawEnabled){const t=this.getLayer()||this.getStage();null==t||t.batchDraw()}}_setAttr(t,e){var i=this.attrs[t];(i!==e||c.isObject(e))&&(null==e?delete this.attrs[t]:this.attrs[t]=e,this._shouldFireChangeEvents&&this._fireChangeEvent(t,i,e),this._requestDraw())}_setComponentAttr(t,e,i){var r;void 0!==i&&((r=this.attrs[t])||(this.attrs[t]=this.getAttr(t)),this.attrs[t][e]=i,this._fireChangeEvent(t,r,i))}_fireAndBubble(t,e,i){if(e&&"Shape"===this.nodeType&&(e.target=this),!(("mouseenter"===t||"mouseleave"===t)&&(i&&(this===i||this.isAncestorOf&&this.isAncestorOf(i))||"Stage"===this.nodeType&&!i))){this._fire(t,e);var r=("mouseenter"===t||"mouseleave"===t)&&i&&i.isAncestorOf&&i.isAncestorOf(this)&&!i.isAncestorOf(this.parent);(e&&!e.cancelBubble||!e)&&this.parent&&this.parent.isListening()&&!r&&(i&&i.parent?this._fireAndBubble.call(this.parent,t,e,i):this._fireAndBubble.call(this.parent,t,e))}}_getProtoListeners(t){let e=this._cache.get("allEventListeners");if(!e){e={};let t=Object.getPrototypeOf(this);for(;t;)if(t.eventListeners){for(var i in t.eventListeners){const r=t.eventListeners[i],a=e[i]||[];e[i]=r.concat(a)}t=Object.getPrototypeOf(t)}else t=Object.getPrototypeOf(t);this._cache.set("allEventListeners",e)}return e[t]}_fire(t,e){(e=e||{}).currentTarget=this,e.type=t;const i=this._getProtoListeners(t);if(i)for(var r=0;r<i.length;r++)i[r].handler.call(this,e);const a=this.eventListeners[t];if(a)for(r=0;r<a.length;r++)a[r].handler.call(this,e)}draw(){return this.drawScene(),this.drawHit(),this}_createDragElement(t){var e=t?t.pointerId:void 0,i=this.getStage(),r=this.getAbsolutePosition(),a=i._getPointerById(e)||i._changedPointerPositions[0]||r;G._dragElements.set(this._id,{node:this,startPointerPos:a,offset:{x:a.x-r.x,y:a.y-r.y},dragStatus:"ready",pointerId:e})}startDrag(t,e=!0){G._dragElements.has(this._id)||this._createDragElement(t);G._dragElements.get(this._id).dragStatus="dragging",this.fire("dragstart",{type:"dragstart",target:this,evt:t&&t.evt},e)}_setDragPosition(t,e){const i=this.getStage()._getPointerById(e.pointerId);if(i){var r={x:i.x-e.offset.x,y:i.y-e.offset.y},a=this.dragBoundFunc();if(void 0!==a){const e=a.call(this,r,t);e?r=e:c.warn("dragBoundFunc did not return any value. That is unexpected behavior. You must return new absolute position from dragBoundFunc.")}this._lastPos&&this._lastPos.x===r.x&&this._lastPos.y===r.y||(this.setAbsolutePosition(r),this._requestDraw()),this._lastPos=r}}stopDrag(t){const e=G._dragElements.get(this._id);e&&(e.dragStatus="stopped"),G._endDragBefore(t),G._endDragAfter(t)}setDraggable(t){this._setAttr("draggable",t),this._dragChange()}isDragging(){const t=G._dragElements.get(this._id);return!!t&&"dragging"===t.dragStatus}_listenDrag(){this._dragCleanup(),this.on("mousedown.konva touchstart.konva",(function(t){if((!(void 0!==t.evt.button)||i.dragButtons.indexOf(t.evt.button)>=0)&&!this.isDragging()){var e=!1;G._dragElements.forEach(t=>{this.isAncestorOf(t.node)&&(e=!0)}),e||this._createDragElement(t)}}))}_dragChange(){if(this.attrs.draggable)this._listenDrag();else{if(this._dragCleanup(),!this.getStage())return;const t=G._dragElements.get(this._id),e=t&&"dragging"===t.dragStatus,i=t&&"ready"===t.dragStatus;e?this.stopDrag():i&&G._dragElements.delete(this._id)}}_dragCleanup(){this.off("mousedown.konva"),this.off("touchstart.konva")}isClientRectOnScreen(t={x:0,y:0}){const e=this.getStage();if(!e)return!1;const i={x:-t.x,y:-t.y,width:e.width()+t.x,height:e.height()+t.y};return c.haveIntersection(i,this.getClientRect())}static create(t,e){return c._isString(t)&&(t=JSON.parse(t)),this._createNode(t,e)}static _createNode(t,e){var r,a,n,s=L.prototype.getClassName.call(t),o=t.children;e&&(t.attrs.container=e),i[s]||(c.warn('Can not find a node with class name "'+s+'". Fallback to "Shape".'),s="Shape");if(r=new(0,i[s])(t.attrs),o)for(a=o.length,n=0;n<a;n++)r.add(L._createNode(o[n]));return r}}L.prototype.nodeType="Node",L.prototype._attrsAffectingSize=[],L.prototype.eventListeners={},L.prototype.on.call(L.prototype,E,(function(){this._batchingTransformChange?this._needClearTransformCache=!0:(this._clearCache("transform"),this._clearSelfAndDescendantCache("absoluteTransform"))})),L.prototype.on.call(L.prototype,"visibleChange.konva",(function(){this._clearSelfAndDescendantCache("visible")})),L.prototype.on.call(L.prototype,"listeningChange.konva",(function(){this._clearSelfAndDescendantCache("listening")})),L.prototype.on.call(L.prototype,"opacityChange.konva",(function(){this._clearSelfAndDescendantCache("absoluteOpacity")}));const D=x.addGetterSetter;D(L,"zIndex"),D(L,"absolutePosition"),D(L,"position"),D(L,"x",0,f()),D(L,"y",0,f()),D(L,"globalCompositeOperation","source-over",m()),D(L,"opacity",1,f()),D(L,"name","",m()),D(L,"id","",m()),D(L,"rotation",0,f()),x.addComponentsGetterSetter(L,"scale",["x","y"]),D(L,"scaleX",1,f()),D(L,"scaleY",1,f()),x.addComponentsGetterSetter(L,"skew",["x","y"]),D(L,"skewX",0,f()),D(L,"skewY",0,f()),x.addComponentsGetterSetter(L,"offset",["x","y"]),D(L,"offsetX",0,f()),D(L,"offsetY",0,f()),D(L,"dragDistance",null,f()),D(L,"width",0,f()),D(L,"height",0,f()),D(L,"listening",!0,y()),D(L,"preventDefault",!0,y()),D(L,"filters",null,(function(t){return this._filterUpToDate=!1,t})),D(L,"visible",!0,y()),D(L,"transformsEnabled","all",m()),D(L,"size"),D(L,"dragBoundFunc"),D(L,"draggable",!1,y()),x.backCompat(L,{rotateDeg:"rotate",setRotationDeg:"setRotation",getRotationDeg:"getRotation"});class O extends L{constructor(){super(...arguments),this.children=[]}getChildren(t){if(!t)return this.children||[];const e=this.children||[];var i=[];return e.forEach((function(e){t(e)&&i.push(e)})),i}hasChildren(){return this.getChildren().length>0}removeChildren(){return this.getChildren().forEach(t=>{t.parent=null,t.index=0,t.remove()}),this.children=[],this}destroyChildren(){return this.getChildren().forEach(t=>{t.parent=null,t.index=0,t.destroy()}),this.children=[],this}add(...t){if(arguments.length>1){for(var e=0;e<arguments.length;e++)this.add(arguments[e]);return this}var i=t[0];return i.getParent()?(i.moveTo(this),this):(this._validateAdd(i),i.index=this.getChildren().length,i.parent=this,i._clearCaches(),this.getChildren().push(i),this._fire("add",{child:i}),this._requestDraw(),this)}destroy(){return this.hasChildren()&&this.destroyChildren(),super.destroy(),this}find(t){return this._generalFind(t,!1)}findOne(t){var e=this._generalFind(t,!0);return e.length>0?e[0]:void 0}_generalFind(t,e){var i=[];return this._descendants(r=>{const a=r._isMatch(t);return a&&i.push(r),!(!a||!e)}),i}_descendants(t){let e=!1;const i=this.getChildren();for(const r of i){if(e=t(r),e)return!0;if(r.hasChildren()&&(e=r._descendants(t),e))return!0}return!1}toObject(){var t=L.prototype.toObject.call(this);return t.children=[],this.getChildren().forEach(e=>{t.children.push(e.toObject())}),t}isAncestorOf(t){for(var e=t.getParent();e;){if(e._id===this._id)return!0;e=e.getParent()}return!1}clone(t){var e=L.prototype.clone.call(this,t);return this.getChildren().forEach((function(t){e.add(t.clone())})),e}getAllIntersections(t){var e=[];return this.find("Shape").forEach((function(i){i.isVisible()&&i.intersects(t)&&e.push(i)})),e}_clearSelfAndDescendantCache(t){var e;super._clearSelfAndDescendantCache(t),this.isCached()||null===(e=this.children)||void 0===e||e.forEach((function(e){e._clearSelfAndDescendantCache(t)}))}_setChildrenIndices(){var t;null===(t=this.children)||void 0===t||t.forEach((function(t,e){t.index=e})),this._requestDraw()}drawScene(t,e){var i=this.getLayer(),r=t||i&&i.getCanvas(),a=r&&r.getContext(),n=this._getCanvasCache(),s=n&&n.scene,o=r&&r.isCache;if(!this.isVisible()&&!o)return this;if(s){a.save();var h=this.getAbsoluteTransform(e).getMatrix();a.transform(h[0],h[1],h[2],h[3],h[4],h[5]),this._drawCachedSceneCanvas(a),a.restore()}else this._drawChildren("drawScene",r,e);return this}drawHit(t,e){if(!this.shouldDrawHit(e))return this;var i=this.getLayer(),r=t||i&&i.hitCanvas,a=r&&r.getContext(),n=this._getCanvasCache();if(n&&n.hit){a.save();var s=this.getAbsoluteTransform(e).getMatrix();a.transform(s[0],s[1],s[2],s[3],s[4],s[5]),this._drawCachedHitCanvas(a),a.restore()}else this._drawChildren("drawHit",r,e);return this}_drawChildren(t,e,i){var r,a=e&&e.getContext(),n=this.clipWidth(),s=this.clipHeight(),o=this.clipFunc(),h=n&&s||o;const l=i===this;if(h){a.save();var d=this.getAbsoluteTransform(i),c=d.getMatrix();if(a.transform(c[0],c[1],c[2],c[3],c[4],c[5]),a.beginPath(),o)o.call(this,a,this);else{var g=this.clipX(),u=this.clipY();a.rect(g,u,n,s)}a.clip(),c=d.copy().invert().getMatrix(),a.transform(c[0],c[1],c[2],c[3],c[4],c[5])}var f=!l&&"source-over"!==this.globalCompositeOperation()&&"drawScene"===t;f&&(a.save(),a._applyGlobalCompositeOperation(this)),null===(r=this.children)||void 0===r||r.forEach((function(r){r[t](e,i)})),f&&a.restore(),h&&a.restore()}getClientRect(t){var e,i,r,a,n,s=(t=t||{}).skipTransform,o=t.relativeTo,h={x:1/0,y:1/0,width:0,height:0},l=this;null===(e=this.children)||void 0===e||e.forEach((function(e){if(e.visible()){var s=e.getClientRect({relativeTo:l,skipShadow:t.skipShadow,skipStroke:t.skipStroke});0===s.width&&0===s.height||(void 0===i?(i=s.x,r=s.y,a=s.x+s.width,n=s.y+s.height):(i=Math.min(i,s.x),r=Math.min(r,s.y),a=Math.max(a,s.x+s.width),n=Math.max(n,s.y+s.height)))}}));for(var d=this.find("Shape"),c=!1,g=0;g<d.length;g++){if(d[g]._isVisible(this)){c=!0;break}}return h=c&&void 0!==i?{x:i,y:r,width:a-i,height:n-r}:{x:0,y:0,width:0,height:0},s?h:this._transformedRect(h,o)}}x.addComponentsGetterSetter(O,"clip",["x","y","width","height"]),x.addGetterSetter(O,"clipX",void 0,f()),x.addGetterSetter(O,"clipY",void 0,f()),x.addGetterSetter(O,"clipWidth",void 0,f()),x.addGetterSetter(O,"clipHeight",void 0,f()),x.addGetterSetter(O,"clipFunc");const I=new Map,F=void 0!==i._global.PointerEvent;function N(t){return I.get(t)}function B(t){return{evt:t,pointerId:t.pointerId}}function z(t,e){return I.get(t)===e}function W(t,e){H(t);e.getStage()&&(I.set(t,e),F&&e._fire("gotpointercapture",B(new PointerEvent("gotpointercapture"))))}function H(t,e){const i=I.get(t);if(!i)return;const r=i.getStage();r&&r.content,I.delete(t),F&&i._fire("lostpointercapture",B(new PointerEvent("lostpointercapture")))}var Y=[["mouseenter","_pointerenter"],["mousedown","_pointerdown"],["mousemove","_pointermove"],["mouseup","_pointerup"],["mouseleave","_pointerleave"],["touchstart","_pointerdown"],["touchmove","_pointermove"],["touchend","_pointerup"],["touchcancel","_pointercancel"],["mouseover","_pointerover"],["wheel","_wheel"],["contextmenu","_contextmenu"],["pointerdown","_pointerdown"],["pointermove","_pointermove"],["pointerup","_pointerup"],["pointercancel","_pointercancel"],["lostpointercapture","_lostpointercapture"]];const X={mouse:{pointerout:"mouseout",pointerleave:"mouseleave",pointerover:"mouseover",pointerenter:"mouseenter",pointermove:"mousemove",pointerdown:"mousedown",pointerup:"mouseup",pointercancel:"mousecancel",pointerclick:"click",pointerdblclick:"dblclick"},touch:{pointerout:"touchout",pointerleave:"touchleave",pointerover:"touchover",pointerenter:"touchenter",pointermove:"touchmove",pointerdown:"touchstart",pointerup:"touchend",pointercancel:"touchcancel",pointerclick:"tap",pointerdblclick:"dbltap"},pointer:{pointerout:"pointerout",pointerleave:"pointerleave",pointerover:"pointerover",pointerenter:"pointerenter",pointermove:"pointermove",pointerdown:"pointerdown",pointerup:"pointerup",pointercancel:"pointercancel",pointerclick:"pointerclick",pointerdblclick:"pointerdblclick"}},j=t=>t.indexOf("pointer")>=0?"pointer":t.indexOf("touch")>=0?"touch":"mouse",U=t=>{const e=j(t);return"pointer"===e?i.pointerEventsEnabled&&X.pointer:"touch"===e?X.touch:"mouse"===e?X.mouse:void 0};function q(t={}){return(t.clipFunc||t.clipWidth||t.clipHeight)&&c.warn("Stage does not support clipping. Please use clip for Layers or Groups."),t}const V=[];class K extends O{constructor(t){super(q(t)),this._pointerPositions=[],this._changedPointerPositions=[],this._buildDOM(),this._bindContentEvents(),V.push(this),this.on("widthChange.konva heightChange.konva",this._resizeDOM),this.on("visibleChange.konva",this._checkVisibility),this.on("clipWidthChange.konva clipHeightChange.konva clipFuncChange.konva",()=>{q(this.attrs)}),this._checkVisibility()}_validateAdd(t){const e="Layer"===t.getType(),i="FastLayer"===t.getType();e||i||c.throw("You may only add layers to the stage.")}_checkVisibility(){if(!this.content)return;const t=this.visible()?"":"none";this.content.style.display=t}setContainer(t){if("string"==typeof t){if("."===t.charAt(0)){var e=t.slice(1);t=document.getElementsByClassName(e)[0]}else{var i;i="#"!==t.charAt(0)?t:t.slice(1),t=document.getElementById(i)}if(!t)throw"Can not find container in document with id "+i}return this._setAttr("container",t),this.content&&(this.content.parentElement&&this.content.parentElement.removeChild(this.content),t.appendChild(this.content)),this}shouldDrawHit(){return!0}clear(){var t,e=this.children,i=e.length;for(t=0;t<i;t++)e[t].clear();return this}clone(t){return t||(t={}),t.container="undefined"!=typeof document&&document.createElement("div"),O.prototype.clone.call(this,t)}destroy(){super.destroy();var t=this.content;t&&c._isInDocument(t)&&this.container().removeChild(t);var e=V.indexOf(this);return e>-1&&V.splice(e,1),this}getPointerPosition(){const t=this._pointerPositions[0]||this._changedPointerPositions[0];return t?{x:t.x,y:t.y}:(c.warn("Pointer position is missing and not registered by the stage. Looks like it is outside of the stage container. You can set it manually from event: stage.setPointersPositions(event);"),null)}_getPointerById(t){return this._pointerPositions.find(e=>e.id===t)}getPointersPositions(){return this._pointerPositions}getStage(){return this}getContent(){return this.content}_toKonvaCanvas(t){(t=t||{}).x=t.x||0,t.y=t.y||0,t.width=t.width||this.width(),t.height=t.height||this.height();var e=new A({width:t.width,height:t.height,pixelRatio:t.pixelRatio||1}),i=e.getContext()._context,r=this.children;return(t.x||t.y)&&i.translate(-1*t.x,-1*t.y),r.forEach((function(e){if(e.isVisible()){var r=e._toKonvaCanvas(t);i.drawImage(r._canvas,t.x,t.y,r.getWidth()/r.getPixelRatio(),r.getHeight()/r.getPixelRatio())}})),e}getIntersection(t){if(!t)return null;var e,i=this.children;for(e=i.length-1;e>=0;e--){const r=i[e].getIntersection(t);if(r)return r}return null}_resizeDOM(){var t=this.width(),e=this.height();this.content&&(this.content.style.width=t+"px",this.content.style.height=e+"px"),this.bufferCanvas.setSize(t,e),this.bufferHitCanvas.setSize(t,e),this.children.forEach(i=>{i.setSize({width:t,height:e}),i.draw()})}add(t,...e){if(arguments.length>1){for(var r=0;r<arguments.length;r++)this.add(arguments[r]);return this}super.add(t);var a=this.children.length;return a>5&&c.warn("The stage has "+a+" layers. Recommended maximum number of layers is 3-5. Adding more layers into the stage may drop the performance. Rethink your tree structure, you can use Konva.Group."),t.setSize({width:this.width(),height:this.height()}),t.draw(),i.isBrowser&&this.content.appendChild(t.canvas._canvas),this}getParent(){return null}getLayer(){return null}hasPointerCapture(t){return z(t,this)}setPointerCapture(t){W(t,this)}releaseCapture(t){H(t)}getLayers(){return this.children}_bindContentEvents(){i.isBrowser&&Y.forEach(([t,e])=>{this.content.addEventListener(t,t=>{this[e](t)})})}_pointerenter(t){this.setPointersPositions(t);const e=U(t.type);this._fire(e.pointerenter,{evt:t,target:this,currentTarget:this})}_pointerover(t){this.setPointersPositions(t);const e=U(t.type);this._fire(e.pointerover,{evt:t,target:this,currentTarget:this})}_getTargetShape(t){let e=this[t+"targetShape"];return e&&!e.getStage()&&(e=null),e}_pointerleave(t){const e=U(t.type),r=j(t.type);if(e){this.setPointersPositions(t);var a=this._getTargetShape(r),n=!G.isDragging||i.hitOnDragEnabled;a&&n?(a._fireAndBubble(e.pointerout,{evt:t}),a._fireAndBubble(e.pointerleave,{evt:t}),this._fire(e.pointerleave,{evt:t,target:this,currentTarget:this}),this[r+"targetShape"]=null):n&&(this._fire(e.pointerleave,{evt:t,target:this,currentTarget:this}),this._fire(e.pointerout,{evt:t,target:this,currentTarget:this})),this.pointerPos=void 0,this._pointerPositions=[]}}_pointerdown(t){const e=U(t.type),r=j(t.type);if(e){this.setPointersPositions(t);var a=!1;this._changedPointerPositions.forEach(n=>{var s=this.getIntersection(n);G.justDragged=!1,i["_"+r+"ListenClick"]=!0;if(!(s&&s.isListening()))return;i.capturePointerEventsEnabled&&s.setPointerCapture(n.id),this[r+"ClickStartShape"]=s,s._fireAndBubble(e.pointerdown,{evt:t,pointerId:n.id}),a=!0;const o=t.type.indexOf("touch")>=0;s.preventDefault()&&t.cancelable&&o&&t.preventDefault()}),a||this._fire(e.pointerdown,{evt:t,target:this,currentTarget:this,pointerId:this._pointerPositions[0].id})}}_pointermove(t){const e=U(t.type),r=j(t.type);if(!e)return;if(G.isDragging&&G.node.preventDefault()&&t.cancelable&&t.preventDefault(),this.setPointersPositions(t),!(!G.isDragging||i.hitOnDragEnabled))return;var a={};let n=!1;var s=this._getTargetShape(r);this._changedPointerPositions.forEach(i=>{const o=N(i.id)||this.getIntersection(i),h=i.id,l={evt:t,pointerId:h};var d=s!==o;if(d&&s&&(s._fireAndBubble(e.pointerout,l,o),s._fireAndBubble(e.pointerleave,l,o)),o){if(a[o._id])return;a[o._id]=!0}o&&o.isListening()?(n=!0,d&&(o._fireAndBubble(e.pointerover,l,s),o._fireAndBubble(e.pointerenter,l,s),this[r+"targetShape"]=o),o._fireAndBubble(e.pointermove,l)):s&&(this._fire(e.pointerover,{evt:t,target:this,currentTarget:this,pointerId:h}),this[r+"targetShape"]=null)}),n||this._fire(e.pointermove,{evt:t,target:this,currentTarget:this,pointerId:this._changedPointerPositions[0].id})}_pointerup(t){const e=U(t.type),r=j(t.type);if(!e)return;this.setPointersPositions(t);const a=this[r+"ClickStartShape"],n=this[r+"ClickEndShape"];var s={};let o=!1;this._changedPointerPositions.forEach(h=>{const l=N(h.id)||this.getIntersection(h);if(l){if(l.releaseCapture(h.id),s[l._id])return;s[l._id]=!0}const d=h.id,c={evt:t,pointerId:d};let g=!1;i["_"+r+"InDblClickWindow"]?(g=!0,clearTimeout(this[r+"DblTimeout"])):G.justDragged||(i["_"+r+"InDblClickWindow"]=!0,clearTimeout(this[r+"DblTimeout"])),this[r+"DblTimeout"]=setTimeout((function(){i["_"+r+"InDblClickWindow"]=!1}),i.dblClickWindow),l&&l.isListening()?(o=!0,this[r+"ClickEndShape"]=l,l._fireAndBubble(e.pointerup,c),i["_"+r+"ListenClick"]&&a&&a===l&&(l._fireAndBubble(e.pointerclick,c),g&&n&&n===l&&l._fireAndBubble(e.pointerdblclick,c))):(this[r+"ClickEndShape"]=null,i["_"+r+"ListenClick"]&&this._fire(e.pointerclick,{evt:t,target:this,currentTarget:this,pointerId:d}),g&&this._fire(e.pointerdblclick,{evt:t,target:this,currentTarget:this,pointerId:d}))}),o||this._fire(e.pointerup,{evt:t,target:this,currentTarget:this,pointerId:this._changedPointerPositions[0].id}),i["_"+r+"ListenClick"]=!1,t.cancelable&&t.preventDefault()}_contextmenu(t){this.setPointersPositions(t);var e=this.getIntersection(this.getPointerPosition());e&&e.isListening()?e._fireAndBubble("contextmenu",{evt:t}):this._fire("contextmenu",{evt:t,target:this,currentTarget:this})}_wheel(t){this.setPointersPositions(t);var e=this.getIntersection(this.getPointerPosition());e&&e.isListening()?e._fireAndBubble("wheel",{evt:t}):this._fire("wheel",{evt:t,target:this,currentTarget:this})}_pointercancel(t){this.setPointersPositions(t);const e=N(t.pointerId)||this.getIntersection(this.getPointerPosition());e&&e._fireAndBubble("pointerup",B(t)),H(t.pointerId)}_lostpointercapture(t){H(t.pointerId)}setPointersPositions(t){var e=this._getContentPosition(),i=null,r=null;void 0!==(t=t||window.event).touches?(this._pointerPositions=[],this._changedPointerPositions=[],Array.prototype.forEach.call(t.touches,t=>{this._pointerPositions.push({id:t.identifier,x:(t.clientX-e.left)/e.scaleX,y:(t.clientY-e.top)/e.scaleY})}),Array.prototype.forEach.call(t.changedTouches||t.touches,t=>{this._changedPointerPositions.push({id:t.identifier,x:(t.clientX-e.left)/e.scaleX,y:(t.clientY-e.top)/e.scaleY})})):(i=(t.clientX-e.left)/e.scaleX,r=(t.clientY-e.top)/e.scaleY,this.pointerPos={x:i,y:r},this._pointerPositions=[{x:i,y:r,id:c._getFirstPointerId(t)}],this._changedPointerPositions=[{x:i,y:r,id:c._getFirstPointerId(t)}])}_setPointerPosition(t){c.warn('Method _setPointerPosition is deprecated. Use "stage.setPointersPositions(event)" instead.'),this.setPointersPositions(t)}_getContentPosition(){if(!this.content||!this.content.getBoundingClientRect)return{top:0,left:0,scaleX:1,scaleY:1};var t=this.content.getBoundingClientRect();return{top:t.top,left:t.left,scaleX:t.width/this.content.clientWidth||1,scaleY:t.height/this.content.clientHeight||1}}_buildDOM(){if(this.bufferCanvas=new A({width:this.width(),height:this.height()}),this.bufferHitCanvas=new M({pixelRatio:1,width:this.width(),height:this.height()}),i.isBrowser){var t=this.container();if(!t)throw"Stage has no container. A container is required.";t.innerHTML="",this.content=document.createElement("div"),this.content.style.position="relative",this.content.style.userSelect="none",this.content.className="konvajs-content",this.content.setAttribute("role","presentation"),t.appendChild(this.content),this._resizeDOM()}}cache(){return c.warn("Cache function is not allowed for stage. You may use cache only for layers, groups and shapes."),this}clearCache(){return this}batchDraw(){return this.getChildren().forEach((function(t){t.batchDraw()})),this}}K.prototype.nodeType="Stage",r(K),x.addGetterSetter(K,"container");let Q;function J(){return Q||(Q=c.createCanvasElement().getContext("2d"),Q)}const Z={};class $ extends L{constructor(t){let e;for(super(t);e=c.getRandomColor(),!e||e in Z;);this.colorKey=e,Z[e]=this}getContext(){return c.warn("shape.getContext() method is deprecated. Please don not use it."),this.getLayer().getContext()}getCanvas(){return c.warn("shape.getCanvas() method is deprecated. Please don not use it."),this.getLayer().getCanvas()}getSceneFunc(){return this.attrs.sceneFunc||this._sceneFunc}getHitFunc(){return this.attrs.hitFunc||this._hitFunc}hasShadow(){return this._getCache("hasShadow",this._hasShadow)}_hasShadow(){return this.shadowEnabled()&&0!==this.shadowOpacity()&&!!(this.shadowColor()||this.shadowBlur()||this.shadowOffsetX()||this.shadowOffsetY())}_getFillPattern(){return this._getCache("patternImage",this.__getFillPattern)}__getFillPattern(){if(this.fillPatternImage()){const t=J().createPattern(this.fillPatternImage(),this.fillPatternRepeat()||"repeat");if(t&&t.setTransform){const e=new a;e.translate(this.fillPatternX(),this.fillPatternX()),e.rotate(i.getAngle(this.fillPatternRotation())),e.scale(this.fillPatternScaleX(),this.fillPatternScaleY()),e.translate(-1*this.fillPatternOffsetX(),-1*this.fillPatternOffsetY());const r=e.getMatrix();t.setTransform({a:r[0],b:r[1],c:r[2],d:r[3],e:r[4],f:r[5]})}return t}}_getLinearGradient(){return this._getCache("linearGradient",this.__getLinearGradient)}__getLinearGradient(){var t=this.fillLinearGradientColorStops();if(t){for(var e=J(),i=this.fillLinearGradientStartPoint(),r=this.fillLinearGradientEndPoint(),a=e.createLinearGradient(i.x,i.y,r.x,r.y),n=0;n<t.length;n+=2)a.addColorStop(t[n],t[n+1]);return a}}_getRadialGradient(){return this._getCache("radialGradient",this.__getRadialGradient)}__getRadialGradient(){var t=this.fillRadialGradientColorStops();if(t){for(var e=J(),i=this.fillRadialGradientStartPoint(),r=this.fillRadialGradientEndPoint(),a=e.createRadialGradient(i.x,i.y,this.fillRadialGradientStartRadius(),r.x,r.y,this.fillRadialGradientEndRadius()),n=0;n<t.length;n+=2)a.addColorStop(t[n],t[n+1]);return a}}getShadowRGBA(){return this._getCache("shadowRGBA",this._getShadowRGBA)}_getShadowRGBA(){if(this.hasShadow()){var t=c.colorToRGBA(this.shadowColor());return"rgba("+t.r+","+t.g+","+t.b+","+t.a*(this.shadowOpacity()||1)+")"}}hasFill(){return this._calculate("hasFill",["fillEnabled","fill","fillPatternImage","fillLinearGradientColorStops","fillRadialGradientColorStops"],()=>this.fillEnabled()&&!!(this.fill()||this.fillPatternImage()||this.fillLinearGradientColorStops()||this.fillRadialGradientColorStops()))}hasStroke(){return this._calculate("hasStroke",["strokeEnabled","strokeWidth","stroke","strokeLinearGradientColorStops"],()=>this.strokeEnabled()&&this.strokeWidth()&&!(!this.stroke()&&!this.strokeLinearGradientColorStops()))}hasHitStroke(){const t=this.hitStrokeWidth();return"auto"===t?this.hasStroke():this.strokeEnabled()&&!!t}intersects(t){var e=this.getStage().bufferHitCanvas;return e.getContext().clear(),this.drawHit(e,null,!0),e.context.getImageData(Math.round(t.x),Math.round(t.y),1,1).data[3]>0}destroy(){return L.prototype.destroy.call(this),delete Z[this.colorKey],delete this.colorKey,this}_useBufferCanvas(t){var e;if(!this.getStage())return!1;if(!(null===(e=this.attrs.perfectDrawEnabled)||void 0===e||e))return!1;const i=t||this.hasFill(),r=this.hasStroke(),a=1!==this.getAbsoluteOpacity();if(i&&r&&a)return!0;const n=this.hasShadow(),s=this.shadowForStrokeEnabled();return!!(i&&r&&n&&s)}setStrokeHitEnabled(t){c.warn("strokeHitEnabled property is deprecated. Please use hitStrokeWidth instead."),t?this.hitStrokeWidth("auto"):this.hitStrokeWidth(0)}getStrokeHitEnabled(){return 0!==this.hitStrokeWidth()}getSelfRect(){var t=this.size();return{x:this._centroid?-t.width/2:0,y:this._centroid?-t.height/2:0,width:t.width,height:t.height}}getClientRect(t={}){const e=t.skipTransform,i=t.relativeTo,r=this.getSelfRect(),a=!t.skipStroke&&this.hasStroke()&&this.strokeWidth()||0,n=r.width+a,s=r.height+a,o=!t.skipShadow&&this.hasShadow(),h=o?this.shadowOffsetX():0,l=o?this.shadowOffsetY():0,d=n+Math.abs(h),c=s+Math.abs(l),g=o&&this.shadowBlur()||0,u=d+2*g,f=c+2*g;let p=0;Math.round(a/2)!==a/2&&(p=1);const v={width:u+p,height:f+p,x:-Math.round(a/2+g)+Math.min(h,0)+r.x,y:-Math.round(a/2+g)+Math.min(l,0)+r.y};return e?v:this._transformedRect(v,i)}drawScene(t,e){var i,r,a=this.getLayer(),n=t||a.getCanvas(),s=n.getContext(),o=this._getCanvasCache(),h=this.getSceneFunc(),l=this.hasShadow(),d=n.isCache,c=e===this;if(!this.isVisible()&&!c)return this;if(o){s.save();var g=this.getAbsoluteTransform(e).getMatrix();return s.transform(g[0],g[1],g[2],g[3],g[4],g[5]),this._drawCachedSceneCanvas(s),s.restore(),this}if(!h)return this;if(s.save(),this._useBufferCanvas()&&!d){(r=(i=this.getStage().bufferCanvas).getContext()).clear(),r.save(),r._applyLineJoin(this);var u=this.getAbsoluteTransform(e).getMatrix();r.transform(u[0],u[1],u[2],u[3],u[4],u[5]),h.call(this,r,this),r.restore();var f=i.pixelRatio;l&&s._applyShadow(this),s._applyOpacity(this),s._applyGlobalCompositeOperation(this),s.drawImage(i._canvas,0,0,i.width/f,i.height/f)}else{if(s._applyLineJoin(this),!c){u=this.getAbsoluteTransform(e).getMatrix();s.transform(u[0],u[1],u[2],u[3],u[4],u[5]),s._applyOpacity(this),s._applyGlobalCompositeOperation(this)}l&&s._applyShadow(this),h.call(this,s,this)}return s.restore(),this}drawHit(t,e,i=!1){if(!this.shouldDrawHit(e,i))return this;var r=this.getLayer(),a=t||r.hitCanvas,n=a&&a.getContext(),s=this.hitFunc()||this.sceneFunc(),o=this._getCanvasCache(),h=o&&o.hit;if(this.colorKey||c.warn("Looks like your canvas has a destroyed shape in it. Do not reuse shape after you destroyed it. If you want to reuse shape you should call remove() instead of destroy()"),h){n.save();var l=this.getAbsoluteTransform(e).getMatrix();return n.transform(l[0],l[1],l[2],l[3],l[4],l[5]),this._drawCachedHitCanvas(n),n.restore(),this}if(!s)return this;n.save(),n._applyLineJoin(this);if(!(this===e)){var d=this.getAbsoluteTransform(e).getMatrix();n.transform(d[0],d[1],d[2],d[3],d[4],d[5])}return s.call(this,n,this),n.restore(),this}drawHitFromCache(t=0){var e,i,r,a,n,s=this._getCanvasCache(),o=this._getCachedSceneCanvas(),h=s.hit,l=h.getContext(),d=h.getWidth(),g=h.getHeight();l.clear(),l.drawImage(o._canvas,0,0,d,g);try{for(r=(i=(e=l.getImageData(0,0,d,g)).data).length,a=c._hexToRgb(this.colorKey),n=0;n<r;n+=4)i[n+3]>t?(i[n]=a.r,i[n+1]=a.g,i[n+2]=a.b,i[n+3]=255):i[n+3]=0;l.putImageData(e,0,0)}catch(t){c.error("Unable to draw hit graph from cached scene canvas. "+t.message)}return this}hasPointerCapture(t){return z(t,this)}setPointerCapture(t){W(t,this)}releaseCapture(t){H(t)}}$.prototype._fillFunc=function(t){t.fill()},$.prototype._strokeFunc=function(t){t.stroke()},$.prototype._fillFuncHit=function(t){t.fill()},$.prototype._strokeFuncHit=function(t){t.stroke()},$.prototype._centroid=!1,$.prototype.nodeType="Shape",r($),$.prototype.eventListeners={},$.prototype.on.call($.prototype,"shadowColorChange.konva shadowBlurChange.konva shadowOffsetChange.konva shadowOpacityChange.konva shadowEnabledChange.konva",(function(){this._clearCache("hasShadow")})),$.prototype.on.call($.prototype,"shadowColorChange.konva shadowOpacityChange.konva shadowEnabledChange.konva",(function(){this._clearCache("shadowRGBA")})),$.prototype.on.call($.prototype,"fillPriorityChange.konva fillPatternImageChange.konva fillPatternRepeatChange.konva fillPatternScaleXChange.konva fillPatternScaleYChange.konva fillPatternOffsetX.konva fillPatternOffsetY.konva fillPatternRotation.konva",(function(){this._clearCache("patternImage")})),$.prototype.on.call($.prototype,"fillPriorityChange.konva fillLinearGradientColorStopsChange.konva fillLinearGradientStartPointXChange.konva fillLinearGradientStartPointYChange.konva fillLinearGradientEndPointXChange.konva fillLinearGradientEndPointYChange.konva",(function(){this._clearCache("linearGradient")})),$.prototype.on.call($.prototype,"fillPriorityChange.konva fillRadialGradientColorStopsChange.konva fillRadialGradientStartPointXChange.konva fillRadialGradientStartPointYChange.konva fillRadialGradientEndPointXChange.konva fillRadialGradientEndPointYChange.konva fillRadialGradientStartRadiusChange.konva fillRadialGradientEndRadiusChange.konva",(function(){this._clearCache("radialGradient")})),x.addGetterSetter($,"stroke",void 0,_()),x.addGetterSetter($,"strokeWidth",2,f()),x.addGetterSetter($,"fillAfterStrokeEnabled",!1),x.addGetterSetter($,"hitStrokeWidth","auto",v()),x.addGetterSetter($,"strokeHitEnabled",!0,y()),x.addGetterSetter($,"perfectDrawEnabled",!0,y()),x.addGetterSetter($,"shadowForStrokeEnabled",!0,y()),x.addGetterSetter($,"lineJoin"),x.addGetterSetter($,"lineCap"),x.addGetterSetter($,"sceneFunc"),x.addGetterSetter($,"hitFunc"),x.addGetterSetter($,"dash"),x.addGetterSetter($,"dashOffset",0,f()),x.addGetterSetter($,"shadowColor",void 0,m()),x.addGetterSetter($,"shadowBlur",0,f()),x.addGetterSetter($,"shadowOpacity",1,f()),x.addComponentsGetterSetter($,"shadowOffset",["x","y"]),x.addGetterSetter($,"shadowOffsetX",0,f()),x.addGetterSetter($,"shadowOffsetY",0,f()),x.addGetterSetter($,"fillPatternImage"),x.addGetterSetter($,"fill",void 0,_()),x.addGetterSetter($,"fillPatternX",0,f()),x.addGetterSetter($,"fillPatternY",0,f()),x.addGetterSetter($,"fillLinearGradientColorStops"),x.addGetterSetter($,"strokeLinearGradientColorStops"),x.addGetterSetter($,"fillRadialGradientStartRadius",0),x.addGetterSetter($,"fillRadialGradientEndRadius",0),x.addGetterSetter($,"fillRadialGradientColorStops"),x.addGetterSetter($,"fillPatternRepeat","repeat"),x.addGetterSetter($,"fillEnabled",!0),x.addGetterSetter($,"strokeEnabled",!0),x.addGetterSetter($,"shadowEnabled",!0),x.addGetterSetter($,"dashEnabled",!0),x.addGetterSetter($,"strokeScaleEnabled",!0),x.addGetterSetter($,"fillPriority","color"),x.addComponentsGetterSetter($,"fillPatternOffset",["x","y"]),x.addGetterSetter($,"fillPatternOffsetX",0,f()),x.addGetterSetter($,"fillPatternOffsetY",0,f()),x.addComponentsGetterSetter($,"fillPatternScale",["x","y"]),x.addGetterSetter($,"fillPatternScaleX",1,f()),x.addGetterSetter($,"fillPatternScaleY",1,f()),x.addComponentsGetterSetter($,"fillLinearGradientStartPoint",["x","y"]),x.addComponentsGetterSetter($,"strokeLinearGradientStartPoint",["x","y"]),x.addGetterSetter($,"fillLinearGradientStartPointX",0),x.addGetterSetter($,"strokeLinearGradientStartPointX",0),x.addGetterSetter($,"fillLinearGradientStartPointY",0),x.addGetterSetter($,"strokeLinearGradientStartPointY",0),x.addComponentsGetterSetter($,"fillLinearGradientEndPoint",["x","y"]),x.addComponentsGetterSetter($,"strokeLinearGradientEndPoint",["x","y"]),x.addGetterSetter($,"fillLinearGradientEndPointX",0),x.addGetterSetter($,"strokeLinearGradientEndPointX",0),x.addGetterSetter($,"fillLinearGradientEndPointY",0),x.addGetterSetter($,"strokeLinearGradientEndPointY",0),x.addComponentsGetterSetter($,"fillRadialGradientStartPoint",["x","y"]),x.addGetterSetter($,"fillRadialGradientStartPointX",0),x.addGetterSetter($,"fillRadialGradientStartPointY",0),x.addComponentsGetterSetter($,"fillRadialGradientEndPoint",["x","y"]),x.addGetterSetter($,"fillRadialGradientEndPointX",0),x.addGetterSetter($,"fillRadialGradientEndPointY",0),x.addGetterSetter($,"fillPatternRotation",0),x.backCompat($,{dashArray:"dash",getDashArray:"getDash",setDashArray:"getDash",drawFunc:"sceneFunc",getDrawFunc:"getSceneFunc",setDrawFunc:"setSceneFunc",drawHitFunc:"hitFunc",getDrawHitFunc:"getHitFunc",setDrawHitFunc:"setHitFunc"});var tt=[{x:0,y:0},{x:-1,y:-1},{x:1,y:-1},{x:1,y:1},{x:-1,y:1}],et=tt.length;class it extends O{constructor(t){super(t),this.canvas=new A,this.hitCanvas=new M({pixelRatio:1}),this._waitingForDraw=!1,this.on("visibleChange.konva",this._checkVisibility),this._checkVisibility(),this.on("imageSmoothingEnabledChange.konva",this._setSmoothEnabled),this._setSmoothEnabled()}createPNGStream(){return this.canvas._canvas.createPNGStream()}getCanvas(){return this.canvas}getNativeCanvasElement(){return this.canvas._canvas}getHitCanvas(){return this.hitCanvas}getContext(){return this.getCanvas().getContext()}clear(t){return this.getContext().clear(t),this.getHitCanvas().getContext().clear(t),this}setZIndex(t){super.setZIndex(t);var e=this.getStage();return e&&e.content&&(e.content.removeChild(this.getNativeCanvasElement()),t<e.children.length-1?e.content.insertBefore(this.getNativeCanvasElement(),e.children[t+1].getCanvas()._canvas):e.content.appendChild(this.getNativeCanvasElement())),this}moveToTop(){L.prototype.moveToTop.call(this);var t=this.getStage();return t&&t.content&&(t.content.removeChild(this.getNativeCanvasElement()),t.content.appendChild(this.getNativeCanvasElement())),!0}moveUp(){if(!L.prototype.moveUp.call(this))return!1;var t=this.getStage();return!(!t||!t.content)&&(t.content.removeChild(this.getNativeCanvasElement()),this.index<t.children.length-1?t.content.insertBefore(this.getNativeCanvasElement(),t.children[this.index+1].getCanvas()._canvas):t.content.appendChild(this.getNativeCanvasElement()),!0)}moveDown(){if(L.prototype.moveDown.call(this)){var t=this.getStage();if(t){var e=t.children;t.content&&(t.content.removeChild(this.getNativeCanvasElement()),t.content.insertBefore(this.getNativeCanvasElement(),e[this.index+1].getCanvas()._canvas))}return!0}return!1}moveToBottom(){if(L.prototype.moveToBottom.call(this)){var t=this.getStage();if(t){var e=t.children;t.content&&(t.content.removeChild(this.getNativeCanvasElement()),t.content.insertBefore(this.getNativeCanvasElement(),e[1].getCanvas()._canvas))}return!0}return!1}getLayer(){return this}remove(){var t=this.getNativeCanvasElement();return L.prototype.remove.call(this),t&&t.parentNode&&c._isInDocument(t)&&t.parentNode.removeChild(t),this}getStage(){return this.parent}setSize({width:t,height:e}){return this.canvas.setSize(t,e),this.hitCanvas.setSize(t,e),this._setSmoothEnabled(),this}_validateAdd(t){var e=t.getType();"Group"!==e&&"Shape"!==e&&c.throw("You may only add groups and shapes to a layer.")}_toKonvaCanvas(t){return(t=t||{}).width=t.width||this.getWidth(),t.height=t.height||this.getHeight(),t.x=void 0!==t.x?t.x:this.x(),t.y=void 0!==t.y?t.y:this.y(),L.prototype._toKonvaCanvas.call(this,t)}_checkVisibility(){const t=this.visible();this.canvas._canvas.style.display=t?"block":"none"}_setSmoothEnabled(){this.getContext()._context.imageSmoothingEnabled=this.imageSmoothingEnabled()}getWidth(){if(this.parent)return this.parent.width()}setWidth(){c.warn('Can not change width of layer. Use "stage.width(value)" function instead.')}getHeight(){if(this.parent)return this.parent.height()}setHeight(){c.warn('Can not change height of layer. Use "stage.height(value)" function instead.')}batchDraw(){return this._waitingForDraw||(this._waitingForDraw=!0,c.requestAnimFrame(()=>{this.draw(),this._waitingForDraw=!1})),this}getIntersection(t){if(!this.isListening()||!this.isVisible())return null;for(var e=1,i=!1;;){for(let r=0;r<et;r++){const a=tt[r],n=this._getIntersection({x:t.x+a.x*e,y:t.y+a.y*e}),s=n.shape;if(s)return s;if(i=!!n.antialiased,!n.antialiased)break}if(!i)return null;e+=1}}_getIntersection(t){const e=this.hitCanvas.pixelRatio,i=this.hitCanvas.context.getImageData(Math.round(t.x*e),Math.round(t.y*e),1,1).data,r=i[3];if(255===r){const t=c._rgbToHex(i[0],i[1],i[2]),e=Z["#"+t];return e?{shape:e}:{antialiased:!0}}return r>0?{antialiased:!0}:{}}drawScene(t,e){var i=this.getLayer(),r=t||i&&i.getCanvas();return this._fire("beforeDraw",{node:this}),this.clearBeforeDraw()&&r.getContext().clear(),O.prototype.drawScene.call(this,r,e),this._fire("draw",{node:this}),this}drawHit(t,e){var i=this.getLayer(),r=t||i&&i.hitCanvas;return i&&i.clearBeforeDraw()&&i.getHitCanvas().getContext().clear(),O.prototype.drawHit.call(this,r,e),this}enableHitGraph(){return this.hitGraphEnabled(!0),this}disableHitGraph(){return this.hitGraphEnabled(!1),this}setHitGraphEnabled(t){c.warn("hitGraphEnabled method is deprecated. Please use layer.listening() instead."),this.listening(t)}getHitGraphEnabled(t){return c.warn("hitGraphEnabled method is deprecated. Please use layer.listening() instead."),this.listening()}toggleHitCanvas(){if(this.parent&&this.parent.content){var t=this.parent;!!this.hitCanvas._canvas.parentNode?t.content.removeChild(this.hitCanvas._canvas):t.content.appendChild(this.hitCanvas._canvas)}}}it.prototype.nodeType="Layer",r(it),x.addGetterSetter(it,"imageSmoothingEnabled",!0),x.addGetterSetter(it,"clearBeforeDraw",!0),x.addGetterSetter(it,"hitGraphEnabled",!0,y());class rt extends it{constructor(t){super(t),this.listening(!1),c.warn('Konva.Fast layer is deprecated. Please use "new Konva.Layer({ listening: false })" instead.')}}rt.prototype.nodeType="FastLayer",r(rt);class at extends O{_validateAdd(t){var e=t.getType();"Group"!==e&&"Shape"!==e&&c.throw("You may only add groups and shapes to groups.")}}at.prototype.nodeType="Group",r(at);var nt=e.performance&&e.performance.now?function(){return e.performance.now()}:function(){return(new Date).getTime()};class st{constructor(t,e){this.id=st.animIdCounter++,this.frame={time:0,timeDiff:0,lastTime:nt(),frameRate:0},this.func=t,this.setLayers(e)}setLayers(t){var e=[];return e=t?t.length>0?t:[t]:[],this.layers=e,this}getLayers(){return this.layers}addLayer(t){var e,i=this.layers,r=i.length;for(e=0;e<r;e++)if(i[e]._id===t._id)return!1;return this.layers.push(t),!0}isRunning(){var t,e=st.animations,i=e.length;for(t=0;t<i;t++)if(e[t].id===this.id)return!0;return!1}start(){return this.stop(),this.frame.timeDiff=0,this.frame.lastTime=nt(),st._addAnimation(this),this}stop(){return st._removeAnimation(this),this}_updateFrameObject(t){this.frame.timeDiff=t-this.frame.lastTime,this.frame.lastTime=t,this.frame.time+=this.frame.timeDiff,this.frame.frameRate=1e3/this.frame.timeDiff}static _addAnimation(t){this.animations.push(t),this._handleAnimation()}static _removeAnimation(t){var e,i=t.id,r=this.animations,a=r.length;for(e=0;e<a;e++)if(r[e].id===i){this.animations.splice(e,1);break}}static _runFrames(){var t,e,i,r,a,n,s,o,h={},l=this.animations;for(r=0;r<l.length;r++)if(e=(t=l[r]).layers,i=t.func,t._updateFrameObject(nt()),n=e.length,!i||!1!==i.call(t,t.frame))for(a=0;a<n;a++)void 0!==(s=e[a])._id&&(h[s._id]=s);for(o in h)h.hasOwnProperty(o)&&h[o].batchDraw()}static _animationLoop(){var t=st;t.animations.length?(t._runFrames(),c.requestAnimFrame(t._animationLoop)):t.animRunning=!1}static _handleAnimation(){this.animRunning||(this.animRunning=!0,c.requestAnimFrame(this._animationLoop))}}st.animations=[],st.animIdCounter=0,st.animRunning=!1;var ot={node:1,duration:1,easing:1,onFinish:1,yoyo:1},ht=0,lt=["fill","stroke","shadowColor"];class dt{constructor(t,e,i,r,a,n,s){this.prop=t,this.propFunc=e,this.begin=r,this._pos=r,this.duration=n,this._change=0,this.prevPos=0,this.yoyo=s,this._time=0,this._position=0,this._startTime=0,this._finish=0,this.func=i,this._change=a-this.begin,this.pause()}fire(t){var e=this[t];e&&e()}setTime(t){t>this.duration?this.yoyo?(this._time=this.duration,this.reverse()):this.finish():t<0?this.yoyo?(this._time=0,this.play()):this.reset():(this._time=t,this.update())}getTime(){return this._time}setPosition(t){this.prevPos=this._pos,this.propFunc(t),this._pos=t}getPosition(t){return void 0===t&&(t=this._time),this.func(t,this.begin,this._change,this.duration)}play(){this.state=2,this._startTime=this.getTimer()-this._time,this.onEnterFrame(),this.fire("onPlay")}reverse(){this.state=3,this._time=this.duration-this._time,this._startTime=this.getTimer()-this._time,this.onEnterFrame(),this.fire("onReverse")}seek(t){this.pause(),this._time=t,this.update(),this.fire("onSeek")}reset(){this.pause(),this._time=0,this.update(),this.fire("onReset")}finish(){this.pause(),this._time=this.duration,this.update(),this.fire("onFinish")}update(){this.setPosition(this.getPosition(this._time)),this.fire("onUpdate")}onEnterFrame(){var t=this.getTimer()-this._startTime;2===this.state?this.setTime(t):3===this.state&&this.setTime(this.duration-t)}pause(){this.state=1,this.fire("onPause")}getTimer(){return(new Date).getTime()}}class ct{constructor(t){var e,r,a=this,n=t.node,s=n._id,o=t.easing||gt.Linear,h=!!t.yoyo;e=void 0===t.duration?.3:0===t.duration?.001:t.duration,this.node=n,this._id=ht++;var l=n.getLayer()||(n instanceof i.Stage?n.getLayers():null);for(r in l||c.error("Tween constructor have `node` that is not in a layer. Please add node into layer first."),this.anim=new st((function(){a.tween.onEnterFrame()}),l),this.tween=new dt(r,(function(t){a._tweenFunc(t)}),o,0,1,1e3*e,h),this._addListeners(),ct.attrs[s]||(ct.attrs[s]={}),ct.attrs[s][this._id]||(ct.attrs[s][this._id]={}),ct.tweens[s]||(ct.tweens[s]={}),t)void 0===ot[r]&&this._addAttr(r,t[r]);this.reset(),this.onFinish=t.onFinish,this.onReset=t.onReset,this.onUpdate=t.onUpdate}_addAttr(t,e){var i,r,a,n,s,o,h,l,d=this.node,g=d._id;if((a=ct.tweens[g][t])&&delete ct.attrs[g][a][t],i=d.getAttr(t),c._isArray(e))if(r=[],s=Math.max(e.length,i.length),"points"===t&&e.length!==i.length&&(e.length>i.length?(h=i,i=c._prepareArrayForTween(i,e,d.closed())):(o=e,e=c._prepareArrayForTween(e,i,d.closed()))),0===t.indexOf("fill"))for(n=0;n<s;n++)if(n%2==0)r.push(e[n]-i[n]);else{var u=c.colorToRGBA(i[n]);l=c.colorToRGBA(e[n]),i[n]=u,r.push({r:l.r-u.r,g:l.g-u.g,b:l.b-u.b,a:l.a-u.a})}else for(n=0;n<s;n++)r.push(e[n]-i[n]);else-1!==lt.indexOf(t)?(i=c.colorToRGBA(i),r={r:(l=c.colorToRGBA(e)).r-i.r,g:l.g-i.g,b:l.b-i.b,a:l.a-i.a}):r=e-i;ct.attrs[g][this._id][t]={start:i,diff:r,end:e,trueEnd:o,trueStart:h},ct.tweens[g][t]=this._id}_tweenFunc(t){var e,i,r,a,n,s,o,h,l=this.node,d=ct.attrs[l._id][this._id];for(e in d){if(r=(i=d[e]).start,a=i.diff,h=i.end,c._isArray(r))if(n=[],o=Math.max(r.length,h.length),0===e.indexOf("fill"))for(s=0;s<o;s++)s%2==0?n.push((r[s]||0)+a[s]*t):n.push("rgba("+Math.round(r[s].r+a[s].r*t)+","+Math.round(r[s].g+a[s].g*t)+","+Math.round(r[s].b+a[s].b*t)+","+(r[s].a+a[s].a*t)+")");else for(s=0;s<o;s++)n.push((r[s]||0)+a[s]*t);else n=-1!==lt.indexOf(e)?"rgba("+Math.round(r.r+a.r*t)+","+Math.round(r.g+a.g*t)+","+Math.round(r.b+a.b*t)+","+(r.a+a.a*t)+")":r+a*t;l.setAttr(e,n)}}_addListeners(){this.tween.onPlay=()=>{this.anim.start()},this.tween.onReverse=()=>{this.anim.start()},this.tween.onPause=()=>{this.anim.stop()},this.tween.onFinish=()=>{var t=this.node,e=ct.attrs[t._id][this._id];e.points&&e.points.trueEnd&&t.setAttr("points",e.points.trueEnd),this.onFinish&&this.onFinish.call(this)},this.tween.onReset=()=>{var t=this.node,e=ct.attrs[t._id][this._id];e.points&&e.points.trueStart&&t.points(e.points.trueStart),this.onReset&&this.onReset()},this.tween.onUpdate=()=>{this.onUpdate&&this.onUpdate.call(this)}}play(){return this.tween.play(),this}reverse(){return this.tween.reverse(),this}reset(){return this.tween.reset(),this}seek(t){return this.tween.seek(1e3*t),this}pause(){return this.tween.pause(),this}finish(){return this.tween.finish(),this}destroy(){var t,e=this.node._id,i=this._id,r=ct.tweens[e];for(t in this.pause(),r)delete ct.tweens[e][t];delete ct.attrs[e][i]}}ct.attrs={},ct.tweens={},L.prototype.to=function(t){var e=t.onFinish;t.node=this,t.onFinish=function(){this.destroy(),e&&e()},new ct(t).play()};const gt={BackEaseIn(t,e,i,r){var a=1.70158;return i*(t/=r)*t*((a+1)*t-a)+e},BackEaseOut(t,e,i,r){var a=1.70158;return i*((t=t/r-1)*t*((a+1)*t+a)+1)+e},BackEaseInOut(t,e,i,r){var a=1.70158;return(t/=r/2)<1?i/2*(t*t*((1+(a*=1.525))*t-a))+e:i/2*((t-=2)*t*((1+(a*=1.525))*t+a)+2)+e},ElasticEaseIn(t,e,i,r,a,n){var s=0;return 0===t?e:1==(t/=r)?e+i:(n||(n=.3*r),!a||a<Math.abs(i)?(a=i,s=n/4):s=n/(2*Math.PI)*Math.asin(i/a),-a*Math.pow(2,10*(t-=1))*Math.sin((t*r-s)*(2*Math.PI)/n)+e)},ElasticEaseOut(t,e,i,r,a,n){var s=0;return 0===t?e:1==(t/=r)?e+i:(n||(n=.3*r),!a||a<Math.abs(i)?(a=i,s=n/4):s=n/(2*Math.PI)*Math.asin(i/a),a*Math.pow(2,-10*t)*Math.sin((t*r-s)*(2*Math.PI)/n)+i+e)},ElasticEaseInOut(t,e,i,r,a,n){var s=0;return 0===t?e:2==(t/=r/2)?e+i:(n||(n=r*(.3*1.5)),!a||a<Math.abs(i)?(a=i,s=n/4):s=n/(2*Math.PI)*Math.asin(i/a),t<1?a*Math.pow(2,10*(t-=1))*Math.sin((t*r-s)*(2*Math.PI)/n)*-.5+e:a*Math.pow(2,-10*(t-=1))*Math.sin((t*r-s)*(2*Math.PI)/n)*.5+i+e)},BounceEaseOut:(t,e,i,r)=>(t/=r)<1/2.75?i*(7.5625*t*t)+e:t<2/2.75?i*(7.5625*(t-=1.5/2.75)*t+.75)+e:t<2.5/2.75?i*(7.5625*(t-=2.25/2.75)*t+.9375)+e:i*(7.5625*(t-=2.625/2.75)*t+.984375)+e,BounceEaseIn:(t,e,i,r)=>i-gt.BounceEaseOut(r-t,0,i,r)+e,BounceEaseInOut:(t,e,i,r)=>t<r/2?.5*gt.BounceEaseIn(2*t,0,i,r)+e:.5*gt.BounceEaseOut(2*t-r,0,i,r)+.5*i+e,EaseIn:(t,e,i,r)=>i*(t/=r)*t+e,EaseOut:(t,e,i,r)=>-i*(t/=r)*(t-2)+e,EaseInOut:(t,e,i,r)=>(t/=r/2)<1?i/2*t*t+e:-i/2*(--t*(t-2)-1)+e,StrongEaseIn:(t,e,i,r)=>i*(t/=r)*t*t*t*t+e,StrongEaseOut:(t,e,i,r)=>i*((t=t/r-1)*t*t*t*t+1)+e,StrongEaseInOut:(t,e,i,r)=>(t/=r/2)<1?i/2*t*t*t*t*t+e:i/2*((t-=2)*t*t*t*t+2)+e,Linear:(t,e,i,r)=>i*t/r+e},ut=c._assign(i,{Util:c,Transform:a,Node:L,Container:O,Stage:K,stages:V,Layer:it,FastLayer:rt,Group:at,DD:G,Shape:$,shapes:Z,Animation:st,Tween:ct,Easings:gt,Context:w,Canvas:T});class ft extends ${_sceneFunc(t){var e=i.getAngle(this.angle()),r=this.clockwise();t.beginPath(),t.arc(0,0,this.outerRadius(),0,e,r),t.arc(0,0,this.innerRadius(),e,0,!r),t.closePath(),t.fillStrokeShape(this)}getWidth(){return 2*this.outerRadius()}getHeight(){return 2*this.outerRadius()}setWidth(t){this.outerRadius(t/2)}setHeight(t){this.outerRadius(t/2)}}function pt(t,e,i,r,a,n,s){var o=Math.sqrt(Math.pow(i-t,2)+Math.pow(r-e,2)),h=Math.sqrt(Math.pow(a-i,2)+Math.pow(n-r,2)),l=s*o/(o+h),d=s*h/(o+h);return[i-l*(a-t),r-l*(n-e),i+d*(a-t),r+d*(n-e)]}function vt(t,e){var i,r,a=t.length,n=[];for(i=2;i<a-2;i+=2)r=pt(t[i-2],t[i-1],t[i],t[i+1],t[i+2],t[i+3],e),isNaN(r[0])||(n.push(r[0]),n.push(r[1]),n.push(t[i]),n.push(t[i+1]),n.push(r[2]),n.push(r[3]));return n}ft.prototype._centroid=!0,ft.prototype.className="Arc",ft.prototype._attrsAffectingSize=["innerRadius","outerRadius"],r(ft),x.addGetterSetter(ft,"innerRadius",0,f()),x.addGetterSetter(ft,"outerRadius",0,f()),x.addGetterSetter(ft,"angle",0,f()),x.addGetterSetter(ft,"clockwise",!1,y());class mt extends ${constructor(t){super(t),this.on("pointsChange.konva tensionChange.konva closedChange.konva bezierChange.konva",(function(){this._clearCache("tensionPoints")}))}_sceneFunc(t){var e,i,r,a=this.points(),n=a.length,s=this.tension(),o=this.closed(),h=this.bezier();if(n){if(t.beginPath(),t.moveTo(a[0],a[1]),0!==s&&n>4){for(i=(e=this.getTensionPoints()).length,r=o?0:4,o||t.quadraticCurveTo(e[0],e[1],e[2],e[3]);r<i-2;)t.bezierCurveTo(e[r++],e[r++],e[r++],e[r++],e[r++],e[r++]);o||t.quadraticCurveTo(e[i-2],e[i-1],a[n-2],a[n-1])}else if(h)for(r=2;r<n;)t.bezierCurveTo(a[r++],a[r++],a[r++],a[r++],a[r++],a[r++]);else for(r=2;r<n;r+=2)t.lineTo(a[r],a[r+1]);o?(t.closePath(),t.fillStrokeShape(this)):t.strokeShape(this)}}getTensionPoints(){return this._getCache("tensionPoints",this._getTensionPoints)}_getTensionPoints(){return this.closed()?this._getTensionPointsClosed():vt(this.points(),this.tension())}_getTensionPointsClosed(){var t=this.points(),e=t.length,i=this.tension(),r=pt(t[e-2],t[e-1],t[0],t[1],t[2],t[3],i),a=pt(t[e-4],t[e-3],t[e-2],t[e-1],t[0],t[1],i),n=vt(t,i);return[r[2],r[3]].concat(n).concat([a[0],a[1],t[e-2],t[e-1],a[2],a[3],r[0],r[1],t[0],t[1]])}getWidth(){return this.getSelfRect().width}getHeight(){return this.getSelfRect().height}getSelfRect(){var t=this.points();if(t.length<4)return{x:t[0]||0,y:t[1]||0,width:0,height:0};for(var e,i,r=(t=0!==this.tension()?[t[0],t[1],...this._getTensionPoints(),t[t.length-2],t[t.length-1]]:this.points())[0],a=t[0],n=t[1],s=t[1],o=0;o<t.length/2;o++)e=t[2*o],i=t[2*o+1],r=Math.min(r,e),a=Math.max(a,e),n=Math.min(n,i),s=Math.max(s,i);return{x:r,y:n,width:a-r,height:s-n}}}mt.prototype.className="Line",mt.prototype._attrsAffectingSize=["points","bezier","tension"],r(mt),x.addGetterSetter(mt,"closed",!1),x.addGetterSetter(mt,"bezier",!1),x.addGetterSetter(mt,"tension",0,f()),x.addGetterSetter(mt,"points",[],function(){if(i.isUnminified)return function(t,e){return c._isArray(t)?t.forEach((function(t){c._isNumber(t)||c.warn('"'+e+'" attribute has non numeric element '+t+". Make sure that all elements are numbers.")})):c.warn(g(t)+' is a not valid value for "'+e+'" attribute. The value should be a array of numbers.'),t}}());class _t extends ${constructor(t){super(t),this.dataArray=[],this.pathLength=0,this.dataArray=_t.parsePathData(this.data()),this.pathLength=0;for(var e=0;e<this.dataArray.length;++e)this.pathLength+=this.dataArray[e].pathLength;this.on("dataChange.konva",(function(){this.dataArray=_t.parsePathData(this.data()),this.pathLength=0;for(var t=0;t<this.dataArray.length;++t)this.pathLength+=this.dataArray[t].pathLength}))}_sceneFunc(t){var e=this.dataArray;t.beginPath();for(var i=!1,r=0;r<e.length;r++){var a=e[r].command,n=e[r].points;switch(a){case"L":t.lineTo(n[0],n[1]);break;case"M":t.moveTo(n[0],n[1]);break;case"C":t.bezierCurveTo(n[0],n[1],n[2],n[3],n[4],n[5]);break;case"Q":t.quadraticCurveTo(n[0],n[1],n[2],n[3]);break;case"A":var s=n[0],o=n[1],h=n[2],l=n[3],d=n[4],c=n[5],g=n[6],u=n[7],f=h>l?h:l,p=h>l?1:h/l,v=h>l?l/h:1;t.translate(s,o),t.rotate(g),t.scale(p,v),t.arc(0,0,f,d,d+c,1-u),t.scale(1/p,1/v),t.rotate(-g),t.translate(-s,-o);break;case"z":i=!0,t.closePath()}}i||this.hasFill()?t.fillStrokeShape(this):t.strokeShape(this)}getSelfRect(){var t=[];this.dataArray.forEach((function(e){if("A"===e.command){var i=e.points[4],r=e.points[5],a=e.points[4]+r,n=Math.PI/180;if(Math.abs(i-a)<n&&(n=Math.abs(i-a)),r<0)for(let r=i-n;r>a;r-=n){const i=_t.getPointOnEllipticalArc(e.points[0],e.points[1],e.points[2],e.points[3],r,0);t.push(i.x,i.y)}else for(let r=i+n;r<a;r+=n){const i=_t.getPointOnEllipticalArc(e.points[0],e.points[1],e.points[2],e.points[3],r,0);t.push(i.x,i.y)}}else if("C"===e.command)for(let i=0;i<=1;i+=.01){const r=_t.getPointOnCubicBezier(i,e.start.x,e.start.y,e.points[0],e.points[1],e.points[2],e.points[3],e.points[4],e.points[5]);t.push(r.x,r.y)}else t=t.concat(e.points)}));for(var e,i,r=t[0],a=t[0],n=t[1],s=t[1],o=0;o<t.length/2;o++)e=t[2*o],i=t[2*o+1],isNaN(e)||(r=Math.min(r,e),a=Math.max(a,e)),isNaN(i)||(n=Math.min(n,i),s=Math.max(s,i));return{x:Math.round(r),y:Math.round(n),width:Math.round(a-r),height:Math.round(s-n)}}getLength(){return this.pathLength}getPointAtLength(t){var e,i=0,r=this.dataArray.length;if(!r)return null;for(;i<r&&t>this.dataArray[i].pathLength;)t-=this.dataArray[i].pathLength,++i;if(i===r)return{x:(e=this.dataArray[i-1].points.slice(-2))[0],y:e[1]};if(t<.01)return{x:(e=this.dataArray[i].points.slice(0,2))[0],y:e[1]};var a=this.dataArray[i],n=a.points;switch(a.command){case"L":return _t.getPointOnLine(t,a.start.x,a.start.y,n[0],n[1]);case"C":return _t.getPointOnCubicBezier(t/a.pathLength,a.start.x,a.start.y,n[0],n[1],n[2],n[3],n[4],n[5]);case"Q":return _t.getPointOnQuadraticBezier(t/a.pathLength,a.start.x,a.start.y,n[0],n[1],n[2],n[3]);case"A":var s=n[0],o=n[1],h=n[2],l=n[3],d=n[4],c=n[5],g=n[6];return d+=c*t/a.pathLength,_t.getPointOnEllipticalArc(s,o,h,l,d,g)}return null}static getLineLength(t,e,i,r){return Math.sqrt((i-t)*(i-t)+(r-e)*(r-e))}static getPointOnLine(t,e,i,r,a,n,s){void 0===n&&(n=e),void 0===s&&(s=i);var o=(a-i)/(r-e+1e-8),h=Math.sqrt(t*t/(1+o*o));r<e&&(h*=-1);var l,d=o*h;if(r===e)l={x:n,y:s+d};else if((s-i)/(n-e+1e-8)===o)l={x:n+h,y:s+d};else{var c,g,u=this.getLineLength(e,i,r,a),f=(n-e)*(r-e)+(s-i)*(a-i);c=e+(f/=u*u)*(r-e),g=i+f*(a-i);var p=this.getLineLength(n,s,c,g),v=Math.sqrt(t*t-p*p);h=Math.sqrt(v*v/(1+o*o)),r<e&&(h*=-1),l={x:c+h,y:g+(d=o*h)}}return l}static getPointOnCubicBezier(t,e,i,r,a,n,s,o,h){function l(t){return t*t*t}function d(t){return 3*t*t*(1-t)}function c(t){return 3*t*(1-t)*(1-t)}function g(t){return(1-t)*(1-t)*(1-t)}return{x:o*l(t)+n*d(t)+r*c(t)+e*g(t),y:h*l(t)+s*d(t)+a*c(t)+i*g(t)}}static getPointOnQuadraticBezier(t,e,i,r,a,n,s){function o(t){return t*t}function h(t){return 2*t*(1-t)}function l(t){return(1-t)*(1-t)}return{x:n*o(t)+r*h(t)+e*l(t),y:s*o(t)+a*h(t)+i*l(t)}}static getPointOnEllipticalArc(t,e,i,r,a,n){var s=Math.cos(n),o=Math.sin(n),h=i*Math.cos(a),l=r*Math.sin(a);return{x:t+(h*s-l*o),y:e+(h*o+l*s)}}static parsePathData(t){if(!t)return[];var e=t,i=["m","M","l","L","v","V","h","H","z","Z","c","C","q","Q","t","T","s","S","a","A"];e=e.replace(new RegExp(" ","g"),",");for(var r=0;r<i.length;r++)e=e.replace(new RegExp(i[r],"g"),"|"+i[r]);var a,n=e.split("|"),s=[],o=[],h=0,l=0,d=/([-+]?((\d+\.\d+)|((\d+)|(\.\d+)))(?:e[-+]?\d+)?)/gi;for(r=1;r<n.length;r++){var c=n[r],g=c.charAt(0);for(c=c.slice(1),o.length=0;a=d.exec(c);)o.push(a[0]);for(var u=[],f=0,p=o.length;f<p;f++)if("00"!==o[f]){var v=parseFloat(o[f]);isNaN(v)?u.push(0):u.push(v)}else u.push(0,0);for(;u.length>0&&!isNaN(u[0]);){var m,_,y,x,b,S,w,C,k,P,T=null,A=[],M=h,G=l;switch(g){case"l":h+=u.shift(),l+=u.shift(),T="L",A.push(h,l);break;case"L":h=u.shift(),l=u.shift(),A.push(h,l);break;case"m":var E=u.shift(),R=u.shift();if(h+=E,l+=R,T="M",s.length>2&&"z"===s[s.length-1].command)for(var L=s.length-2;L>=0;L--)if("M"===s[L].command){h=s[L].points[0]+E,l=s[L].points[1]+R;break}A.push(h,l),g="l";break;case"M":h=u.shift(),l=u.shift(),T="M",A.push(h,l),g="L";break;case"h":h+=u.shift(),T="L",A.push(h,l);break;case"H":h=u.shift(),T="L",A.push(h,l);break;case"v":l+=u.shift(),T="L",A.push(h,l);break;case"V":l=u.shift(),T="L",A.push(h,l);break;case"C":A.push(u.shift(),u.shift(),u.shift(),u.shift()),h=u.shift(),l=u.shift(),A.push(h,l);break;case"c":A.push(h+u.shift(),l+u.shift(),h+u.shift(),l+u.shift()),h+=u.shift(),l+=u.shift(),T="C",A.push(h,l);break;case"S":_=h,y=l,"C"===(m=s[s.length-1]).command&&(_=h+(h-m.points[2]),y=l+(l-m.points[3])),A.push(_,y,u.shift(),u.shift()),h=u.shift(),l=u.shift(),T="C",A.push(h,l);break;case"s":_=h,y=l,"C"===(m=s[s.length-1]).command&&(_=h+(h-m.points[2]),y=l+(l-m.points[3])),A.push(_,y,h+u.shift(),l+u.shift()),h+=u.shift(),l+=u.shift(),T="C",A.push(h,l);break;case"Q":A.push(u.shift(),u.shift()),h=u.shift(),l=u.shift(),A.push(h,l);break;case"q":A.push(h+u.shift(),l+u.shift()),h+=u.shift(),l+=u.shift(),T="Q",A.push(h,l);break;case"T":_=h,y=l,"Q"===(m=s[s.length-1]).command&&(_=h+(h-m.points[0]),y=l+(l-m.points[1])),h=u.shift(),l=u.shift(),T="Q",A.push(_,y,h,l);break;case"t":_=h,y=l,"Q"===(m=s[s.length-1]).command&&(_=h+(h-m.points[0]),y=l+(l-m.points[1])),h+=u.shift(),l+=u.shift(),T="Q",A.push(_,y,h,l);break;case"A":x=u.shift(),b=u.shift(),S=u.shift(),w=u.shift(),C=u.shift(),k=h,P=l,h=u.shift(),l=u.shift(),T="A",A=this.convertEndpointToCenterParameterization(k,P,h,l,w,C,x,b,S);break;case"a":x=u.shift(),b=u.shift(),S=u.shift(),w=u.shift(),C=u.shift(),k=h,P=l,h+=u.shift(),l+=u.shift(),T="A",A=this.convertEndpointToCenterParameterization(k,P,h,l,w,C,x,b,S)}s.push({command:T||g,points:A,start:{x:M,y:G},pathLength:this.calcLength(M,G,T||g,A)})}"z"!==g&&"Z"!==g||s.push({command:"z",points:[],start:void 0,pathLength:0})}return s}static calcLength(t,e,i,r){var a,n,s,o,h=_t;switch(i){case"L":return h.getLineLength(t,e,r[0],r[1]);case"C":for(a=0,n=h.getPointOnCubicBezier(0,t,e,r[0],r[1],r[2],r[3],r[4],r[5]),o=.01;o<=1;o+=.01)s=h.getPointOnCubicBezier(o,t,e,r[0],r[1],r[2],r[3],r[4],r[5]),a+=h.getLineLength(n.x,n.y,s.x,s.y),n=s;return a;case"Q":for(a=0,n=h.getPointOnQuadraticBezier(0,t,e,r[0],r[1],r[2],r[3]),o=.01;o<=1;o+=.01)s=h.getPointOnQuadraticBezier(o,t,e,r[0],r[1],r[2],r[3]),a+=h.getLineLength(n.x,n.y,s.x,s.y),n=s;return a;case"A":a=0;var l=r[4],d=r[5],c=r[4]+d,g=Math.PI/180;if(Math.abs(l-c)<g&&(g=Math.abs(l-c)),n=h.getPointOnEllipticalArc(r[0],r[1],r[2],r[3],l,0),d<0)for(o=l-g;o>c;o-=g)s=h.getPointOnEllipticalArc(r[0],r[1],r[2],r[3],o,0),a+=h.getLineLength(n.x,n.y,s.x,s.y),n=s;else for(o=l+g;o<c;o+=g)s=h.getPointOnEllipticalArc(r[0],r[1],r[2],r[3],o,0),a+=h.getLineLength(n.x,n.y,s.x,s.y),n=s;return s=h.getPointOnEllipticalArc(r[0],r[1],r[2],r[3],c,0),a+=h.getLineLength(n.x,n.y,s.x,s.y)}return 0}static convertEndpointToCenterParameterization(t,e,i,r,a,n,s,o,h){var l=h*(Math.PI/180),d=Math.cos(l)*(t-i)/2+Math.sin(l)*(e-r)/2,c=-1*Math.sin(l)*(t-i)/2+Math.cos(l)*(e-r)/2,g=d*d/(s*s)+c*c/(o*o);g>1&&(s*=Math.sqrt(g),o*=Math.sqrt(g));var u=Math.sqrt((s*s*(o*o)-s*s*(c*c)-o*o*(d*d))/(s*s*(c*c)+o*o*(d*d)));a===n&&(u*=-1),isNaN(u)&&(u=0);var f=u*s*c/o,p=u*-o*d/s,v=(t+i)/2+Math.cos(l)*f-Math.sin(l)*p,m=(e+r)/2+Math.sin(l)*f+Math.cos(l)*p,_=function(t){return Math.sqrt(t[0]*t[0]+t[1]*t[1])},y=function(t,e){return(t[0]*e[0]+t[1]*e[1])/(_(t)*_(e))},x=function(t,e){return(t[0]*e[1]<t[1]*e[0]?-1:1)*Math.acos(y(t,e))},b=x([1,0],[(d-f)/s,(c-p)/o]),S=[(d-f)/s,(c-p)/o],w=[(-1*d-f)/s,(-1*c-p)/o],C=x(S,w);return y(S,w)<=-1&&(C=Math.PI),y(S,w)>=1&&(C=0),0===n&&C>0&&(C-=2*Math.PI),1===n&&C<0&&(C+=2*Math.PI),[v,m,s,o,b,C,l,n]}}_t.prototype.className="Path",_t.prototype._attrsAffectingSize=["data"],r(_t),x.addGetterSetter(_t,"data");class yt extends mt{_sceneFunc(t){super._sceneFunc(t);var e=2*Math.PI,i=this.points(),r=i,a=0!==this.tension()&&i.length>4;a&&(r=this.getTensionPoints());var n,s,o=this.pointerLength(),h=i.length;if(a){const t=[r[r.length-4],r[r.length-3],r[r.length-2],r[r.length-1],i[h-2],i[h-1]],e=_t.calcLength(r[r.length-4],r[r.length-3],"C",t),a=_t.getPointOnQuadraticBezier(Math.min(1,1-o/e),t[0],t[1],t[2],t[3],t[4],t[5]);n=i[h-2]-a.x,s=i[h-1]-a.y}else n=i[h-2]-i[h-4],s=i[h-1]-i[h-3];var l=(Math.atan2(s,n)+e)%e,d=this.pointerWidth();this.pointerAtEnding()&&(t.save(),t.beginPath(),t.translate(i[h-2],i[h-1]),t.rotate(l),t.moveTo(0,0),t.lineTo(-o,d/2),t.lineTo(-o,-d/2),t.closePath(),t.restore()),this.pointerAtBeginning()&&(t.save(),t.translate(i[0],i[1]),a?(n=(r[0]+r[2])/2-i[0],s=(r[1]+r[3])/2-i[1]):(n=i[2]-i[0],s=i[3]-i[1]),t.rotate((Math.atan2(-s,-n)+e)%e),t.moveTo(0,0),t.lineTo(-o,d/2),t.lineTo(-o,-d/2),t.closePath(),t.restore());var c=this.dashEnabled();c&&(this.attrs.dashEnabled=!1,t.setLineDash([])),t.fillStrokeShape(this),c&&(this.attrs.dashEnabled=!0)}getSelfRect(){const t=super.getSelfRect(),e=this.pointerWidth()/2;return{x:t.x-e,y:t.y-e,width:t.width+2*e,height:t.height+2*e}}}yt.prototype.className="Arrow",r(yt),x.addGetterSetter(yt,"pointerLength",10,f()),x.addGetterSetter(yt,"pointerWidth",10,f()),x.addGetterSetter(yt,"pointerAtBeginning",!1),x.addGetterSetter(yt,"pointerAtEnding",!0);class xt extends ${_sceneFunc(t){t.beginPath(),t.arc(0,0,this.attrs.radius||0,0,2*Math.PI,!1),t.closePath(),t.fillStrokeShape(this)}getWidth(){return 2*this.radius()}getHeight(){return 2*this.radius()}setWidth(t){this.radius()!==t/2&&this.radius(t/2)}setHeight(t){this.radius()!==t/2&&this.radius(t/2)}}xt.prototype._centroid=!0,xt.prototype.className="Circle",xt.prototype._attrsAffectingSize=["radius"],r(xt),x.addGetterSetter(xt,"radius",0,f());class bt extends ${_sceneFunc(t){var e=this.radiusX(),i=this.radiusY();t.beginPath(),t.save(),e!==i&&t.scale(1,i/e),t.arc(0,0,e,0,2*Math.PI,!1),t.restore(),t.closePath(),t.fillStrokeShape(this)}getWidth(){return 2*this.radiusX()}getHeight(){return 2*this.radiusY()}setWidth(t){this.radiusX(t/2)}setHeight(t){this.radiusY(t/2)}}bt.prototype.className="Ellipse",bt.prototype._centroid=!0,bt.prototype._attrsAffectingSize=["radiusX","radiusY"],r(bt),x.addComponentsGetterSetter(bt,"radius",["x","y"]),x.addGetterSetter(bt,"radiusX",0,f()),x.addGetterSetter(bt,"radiusY",0,f());class St extends ${constructor(t){super(t),this.on("imageChange.konva",()=>{this._setImageLoad()}),this._setImageLoad()}_setImageLoad(){const t=this.image();t&&t.addEventListener&&t.addEventListener("load",()=>{this._requestDraw()})}_useBufferCanvas(){return super._useBufferCanvas(!0)}_sceneFunc(t){const e=this.getWidth(),i=this.getHeight(),r=this.attrs.image;let a;if(r){const t=this.attrs.cropWidth,n=this.attrs.cropHeight;a=t&&n?[r,this.cropX(),this.cropY(),t,n,0,0,e,i]:[r,0,0,e,i]}(this.hasFill()||this.hasStroke())&&(t.beginPath(),t.rect(0,0,e,i),t.closePath(),t.fillStrokeShape(this)),r&&t.drawImage.apply(t,a)}_hitFunc(t){var e=this.width(),i=this.height();t.beginPath(),t.rect(0,0,e,i),t.closePath(),t.fillStrokeShape(this)}getWidth(){var t,e;return null!==(t=this.attrs.width)&&void 0!==t?t:null===(e=this.image())||void 0===e?void 0:e.width}getHeight(){var t,e;return null!==(t=this.attrs.height)&&void 0!==t?t:null===(e=this.image())||void 0===e?void 0:e.height}static fromURL(t,e){var i=c.createImageElement();i.onload=function(){var t=new St({image:i});e(t)},i.crossOrigin="Anonymous",i.src=t}}St.prototype.className="Image",r(St),x.addGetterSetter(St,"image"),x.addComponentsGetterSetter(St,"crop",["x","y","width","height"]),x.addGetterSetter(St,"cropX",0,f()),x.addGetterSetter(St,"cropY",0,f()),x.addGetterSetter(St,"cropWidth",0,f()),x.addGetterSetter(St,"cropHeight",0,f());var wt=["fontFamily","fontSize","fontStyle","padding","lineHeight","text","width","height"],Ct=wt.length;class kt extends at{constructor(t){super(t),this.on("add.konva",(function(t){this._addListeners(t.child),this._sync()}))}getText(){return this.find("Text")[0]}getTag(){return this.find("Tag")[0]}_addListeners(t){var e,i=this,r=function(){i._sync()};for(e=0;e<Ct;e++)t.on(wt[e]+"Change.konva",r)}getWidth(){return this.getText().width()}getHeight(){return this.getText().height()}_sync(){var t,e,i,r,a,n,s,o=this.getText(),h=this.getTag();if(o&&h){switch(t=o.width(),e=o.height(),i=h.pointerDirection(),r=h.pointerWidth(),s=h.pointerHeight(),a=0,n=0,i){case"up":a=t/2,n=-1*s;break;case"right":a=t+r,n=e/2;break;case"down":a=t/2,n=e+s;break;case"left":a=-1*r,n=e/2}h.setAttrs({x:-1*a,y:-1*n,width:t,height:e}),o.setAttrs({x:-1*a,y:-1*n})}}}kt.prototype.className="Label",r(kt);class Pt extends ${_sceneFunc(t){var e=this.width(),i=this.height(),r=this.pointerDirection(),a=this.pointerWidth(),n=this.pointerHeight(),s=this.cornerRadius();let o=0,h=0,l=0,d=0;"number"==typeof s?o=h=l=d=Math.min(s,e/2,i/2):(o=Math.min(s[0]||0,e/2,i/2),h=Math.min(s[1]||0,e/2,i/2),d=Math.min(s[2]||0,e/2,i/2),l=Math.min(s[3]||0,e/2,i/2)),t.beginPath(),t.moveTo(o,0),"up"===r&&(t.lineTo((e-a)/2,0),t.lineTo(e/2,-1*n),t.lineTo((e+a)/2,0)),t.lineTo(e-h,0),t.arc(e-h,h,h,3*Math.PI/2,0,!1),"right"===r&&(t.lineTo(e,(i-n)/2),t.lineTo(e+a,i/2),t.lineTo(e,(i+n)/2)),t.lineTo(e,i-d),t.arc(e-d,i-d,d,0,Math.PI/2,!1),"down"===r&&(t.lineTo((e+a)/2,i),t.lineTo(e/2,i+n),t.lineTo((e-a)/2,i)),t.lineTo(l,i),t.arc(l,i-l,l,Math.PI/2,Math.PI,!1),"left"===r&&(t.lineTo(0,(i+n)/2),t.lineTo(-1*a,i/2),t.lineTo(0,(i-n)/2)),t.lineTo(0,o),t.arc(o,o,o,Math.PI,3*Math.PI/2,!1),t.closePath(),t.fillStrokeShape(this)}getSelfRect(){var t=0,e=0,i=this.pointerWidth(),r=this.pointerHeight(),a=this.pointerDirection(),n=this.width(),s=this.height();return"up"===a?(e-=r,s+=r):"down"===a?s+=r:"left"===a?(t-=1.5*i,n+=i):"right"===a&&(n+=1.5*i),{x:t,y:e,width:n,height:s}}}Pt.prototype.className="Tag",r(Pt),x.addGetterSetter(Pt,"pointerDirection","none"),x.addGetterSetter(Pt,"pointerWidth",0,f()),x.addGetterSetter(Pt,"pointerHeight",0,f()),x.addGetterSetter(Pt,"cornerRadius",0,p(4));class Tt extends ${_sceneFunc(t){var e=this.cornerRadius(),i=this.width(),r=this.height();if(t.beginPath(),e){let a=0,n=0,s=0,o=0;"number"==typeof e?a=n=s=o=Math.min(e,i/2,r/2):(a=Math.min(e[0]||0,i/2,r/2),n=Math.min(e[1]||0,i/2,r/2),o=Math.min(e[2]||0,i/2,r/2),s=Math.min(e[3]||0,i/2,r/2)),t.moveTo(a,0),t.lineTo(i-n,0),t.arc(i-n,n,n,3*Math.PI/2,0,!1),t.lineTo(i,r-o),t.arc(i-o,r-o,o,0,Math.PI/2,!1),t.lineTo(s,r),t.arc(s,r-s,s,Math.PI/2,Math.PI,!1),t.lineTo(0,a),t.arc(a,a,a,Math.PI,3*Math.PI/2,!1)}else t.rect(0,0,i,r);t.closePath(),t.fillStrokeShape(this)}}Tt.prototype.className="Rect",r(Tt),x.addGetterSetter(Tt,"cornerRadius",0,p(4));class At extends ${_sceneFunc(t){const e=this._getPoints();t.beginPath(),t.moveTo(e[0].x,e[0].y);for(var i=1;i<e.length;i++)t.lineTo(e[i].x,e[i].y);t.closePath(),t.fillStrokeShape(this)}_getPoints(){const t=this.attrs.sides,e=this.attrs.radius||0,i=[];for(var r=0;r<t;r++)i.push({x:e*Math.sin(2*r*Math.PI/t),y:-1*e*Math.cos(2*r*Math.PI/t)});return i}getSelfRect(){const t=this._getPoints();var e=t[0].x,i=t[0].y,r=t[0].x,a=t[0].y;return t.forEach(t=>{e=Math.min(e,t.x),i=Math.max(i,t.x),r=Math.min(r,t.y),a=Math.max(a,t.y)}),{x:e,y:r,width:i-e,height:a-r}}getWidth(){return 2*this.radius()}getHeight(){return 2*this.radius()}setWidth(t){this.radius(t/2)}setHeight(t){this.radius(t/2)}}At.prototype.className="RegularPolygon",At.prototype._centroid=!0,At.prototype._attrsAffectingSize=["radius"],r(At),x.addGetterSetter(At,"radius",0,f()),x.addGetterSetter(At,"sides",0,f());var Mt=2*Math.PI;class Gt extends ${_sceneFunc(t){t.beginPath(),t.arc(0,0,this.innerRadius(),0,Mt,!1),t.moveTo(this.outerRadius(),0),t.arc(0,0,this.outerRadius(),Mt,0,!0),t.closePath(),t.fillStrokeShape(this)}getWidth(){return 2*this.outerRadius()}getHeight(){return 2*this.outerRadius()}setWidth(t){this.outerRadius(t/2)}setHeight(t){this.outerRadius(t/2)}}Gt.prototype.className="Ring",Gt.prototype._centroid=!0,Gt.prototype._attrsAffectingSize=["innerRadius","outerRadius"],r(Gt),x.addGetterSetter(Gt,"innerRadius",0,f()),x.addGetterSetter(Gt,"outerRadius",0,f());class Et extends ${constructor(t){super(t),this._updated=!0,this.anim=new st(()=>{var t=this._updated;return this._updated=!1,t}),this.on("animationChange.konva",(function(){this.frameIndex(0)})),this.on("frameIndexChange.konva",(function(){this._updated=!0})),this.on("frameRateChange.konva",(function(){this.anim.isRunning()&&(clearInterval(this.interval),this._setInterval())}))}_sceneFunc(t){var e=this.animation(),i=this.frameIndex(),r=4*i,a=this.animations()[e],n=this.frameOffsets(),s=a[r+0],o=a[r+1],h=a[r+2],l=a[r+3],d=this.image();if((this.hasFill()||this.hasStroke())&&(t.beginPath(),t.rect(0,0,h,l),t.closePath(),t.fillStrokeShape(this)),d)if(n){var c=n[e],g=2*i;t.drawImage(d,s,o,h,l,c[g+0],c[g+1],h,l)}else t.drawImage(d,s,o,h,l,0,0,h,l)}_hitFunc(t){var e=this.animation(),i=this.frameIndex(),r=4*i,a=this.animations()[e],n=this.frameOffsets(),s=a[r+2],o=a[r+3];if(t.beginPath(),n){var h=n[e],l=2*i;t.rect(h[l+0],h[l+1],s,o)}else t.rect(0,0,s,o);t.closePath(),t.fillShape(this)}_useBufferCanvas(){return super._useBufferCanvas(!0)}_setInterval(){var t=this;this.interval=setInterval((function(){t._updateIndex()}),1e3/this.frameRate())}start(){if(!this.isRunning()){var t=this.getLayer();this.anim.setLayers(t),this._setInterval(),this.anim.start()}}stop(){this.anim.stop(),clearInterval(this.interval)}isRunning(){return this.anim.isRunning()}_updateIndex(){var t=this.frameIndex(),e=this.animation();t<this.animations()[e].length/4-1?this.frameIndex(t+1):this.frameIndex(0)}}Et.prototype.className="Sprite",r(Et),x.addGetterSetter(Et,"animation"),x.addGetterSetter(Et,"animations"),x.addGetterSetter(Et,"frameOffsets"),x.addGetterSetter(Et,"image"),x.addGetterSetter(Et,"frameIndex",0,f()),x.addGetterSetter(Et,"frameRate",17,f()),x.backCompat(Et,{index:"frameIndex",getIndex:"getFrameIndex",setIndex:"setFrameIndex"});class Rt extends ${_sceneFunc(t){var e=this.innerRadius(),i=this.outerRadius(),r=this.numPoints();t.beginPath(),t.moveTo(0,0-i);for(var a=1;a<2*r;a++){var n=a%2==0?i:e,s=n*Math.sin(a*Math.PI/r),o=-1*n*Math.cos(a*Math.PI/r);t.lineTo(s,o)}t.closePath(),t.fillStrokeShape(this)}getWidth(){return 2*this.outerRadius()}getHeight(){return 2*this.outerRadius()}setWidth(t){this.outerRadius(t/2)}setHeight(t){this.outerRadius(t/2)}}function Lt(t){return Array.from(t)}Rt.prototype.className="Star",Rt.prototype._centroid=!0,Rt.prototype._attrsAffectingSize=["innerRadius","outerRadius"],r(Rt),x.addGetterSetter(Rt,"numPoints",5,f()),x.addGetterSetter(Rt,"innerRadius",0,f()),x.addGetterSetter(Rt,"outerRadius",0,f());var Dt,Ot=["fontFamily","fontSize","fontStyle","fontVariant","padding","align","verticalAlign","lineHeight","text","width","height","wrap","ellipsis","letterSpacing"],It=Ot.length;function Ft(){return Dt||(Dt=c.createCanvasElement().getContext("2d"))}class Nt extends ${constructor(t){super(function(t){return(t=t||{}).fillLinearGradientColorStops||t.fillRadialGradientColorStops||t.fillPatternImage||(t.fill=t.fill||"black"),t}(t)),this._partialTextX=0,this._partialTextY=0;for(var e=0;e<It;e++)this.on(Ot[e]+"Change.konva",this._setTextData);this._setTextData()}_sceneFunc(t){var e=this.textArr,i=e.length;if(this.text()){var r,a=this.padding(),n=this.fontSize(),s=this.lineHeight()*n,o=this.verticalAlign(),h=0,l=this.align(),d=this.getWidth(),c=this.letterSpacing(),g=this.fill(),u=this.textDecoration(),f=-1!==u.indexOf("underline"),p=-1!==u.indexOf("line-through"),v=0,m=(v=s/2,0),_=0;for(t.setAttr("font",this._getContextFont()),t.setAttr("textBaseline","middle"),t.setAttr("textAlign","left"),"middle"===o?h=(this.getHeight()-i*s-2*a)/2:"bottom"===o&&(h=this.getHeight()-i*s-2*a),t.translate(a,h+a),r=0;r<i;r++){m=0,_=0;var y,x,b,S=e[r],w=S.text,C=S.width,k=r!==i-1;if(t.save(),"right"===l?m+=d-C-2*a:"center"===l&&(m+=(d-C-2*a)/2),f&&(t.save(),t.beginPath(),t.moveTo(m,v+_+Math.round(n/2)),x=0===(y=w.split(" ").length-1),b="justify"===l&&k&&!x?d-2*a:C,t.lineTo(m+Math.round(b),v+_+Math.round(n/2)),t.lineWidth=n/15,t.strokeStyle=g,t.stroke(),t.restore()),p&&(t.save(),t.beginPath(),t.moveTo(m,v+_),x=0===(y=w.split(" ").length-1),b="justify"===l&&k&&!x?d-2*a:C,t.lineTo(m+Math.round(b),v+_),t.lineWidth=n/15,t.strokeStyle=g,t.stroke(),t.restore()),0!==c||"justify"===l){y=w.split(" ").length-1;for(var P=Lt(w),T=0;T<P.length;T++){var A=P[T];" "===A&&r!==i-1&&"justify"===l&&(m+=(d-2*a-C)/y),this._partialTextX=m,this._partialTextY=v+_,this._partialText=A,t.fillStrokeShape(this),m+=this.measureSize(A).width+c}}else this._partialTextX=m,this._partialTextY=v+_,this._partialText=w,t.fillStrokeShape(this);t.restore(),i>1&&(v+=s)}}}_hitFunc(t){var e=this.getWidth(),i=this.getHeight();t.beginPath(),t.rect(0,0,e,i),t.closePath(),t.fillStrokeShape(this)}setText(t){var e=c._isString(t)?t:null==t?"":t+"";return this._setAttr("text",e),this}getWidth(){return"auto"===this.attrs.width||void 0===this.attrs.width?this.getTextWidth()+2*this.padding():this.attrs.width}getHeight(){return"auto"===this.attrs.height||void 0===this.attrs.height?this.fontSize()*this.textArr.length*this.lineHeight()+2*this.padding():this.attrs.height}getTextWidth(){return this.textWidth}getTextHeight(){return c.warn("text.getTextHeight() method is deprecated. Use text.height() - for full height and text.fontSize() - for one line height."),this.textHeight}measureSize(t){var e,i=Ft(),r=this.fontSize();return i.save(),i.font=this._getContextFont(),e=i.measureText(t),i.restore(),{width:e.width,height:r}}_getContextFont(){return this.fontStyle()+" "+this.fontVariant()+" "+this.fontSize()+"px "+this.fontFamily().split(",").map(t=>{const e=(t=t.trim()).indexOf(" ")>=0,i=t.indexOf('"')>=0||t.indexOf("'")>=0;return e&&!i&&(t=`"${t}"`),t}).join(", ")}_addTextLine(t){"justify"===this.align()&&(t=t.trim());var e=this._getTextWidth(t);return this.textArr.push({text:t,width:e})}_getTextWidth(t){var e=this.letterSpacing(),i=t.length;return Ft().measureText(t).width+(i?e*(i-1):0)}_setTextData(){var t=this.text().split("\n"),e=+this.fontSize(),i=0,r=this.lineHeight()*e,a=this.attrs.width,n=this.attrs.height,s="auto"!==a&&void 0!==a,o="auto"!==n&&void 0!==n,h=this.padding(),l=a-2*h,d=n-2*h,c=0,g=this.wrap(),u="none"!==g,f="char"!==g&&u,p=this.ellipsis();this.textArr=[],Ft().font=this._getContextFont();for(var v=p?this._getTextWidth("…"):0,m=0,_=t.length;m<_;++m){var y=t[m],x=this._getTextWidth(y);if(s&&x>l)for(;y.length>0;){for(var b=0,S=y.length,w="",C=0;b<S;){var k=b+S>>>1,P=y.slice(0,k+1),T=this._getTextWidth(P)+v;T<=l?(b=k+1,w=P,C=T):S=k}if(!w)break;if(f){var A,M=y[w.length];(A=(" "===M||"-"===M)&&C<=l?w.length:Math.max(w.lastIndexOf(" "),w.lastIndexOf("-"))+1)>0&&(b=A,w=w.slice(0,b),C=this._getTextWidth(w))}if(w=w.trimRight(),this._addTextLine(w),i=Math.max(i,C),c+=r,!u||o&&c+r>d){var G=this.textArr[this.textArr.length-1];if(G)if(p)this._getTextWidth(G.text+"…")<l||(G.text=G.text.slice(0,G.text.length-3)),this.textArr.splice(this.textArr.length-1,1),this._addTextLine(G.text+"…");break}if((y=(y=y.slice(b)).trimLeft()).length>0&&(x=this._getTextWidth(y))<=l){this._addTextLine(y),c+=r,i=Math.max(i,x);break}}else this._addTextLine(y),c+=r,i=Math.max(i,x);if(o&&c+r>d)break}this.textHeight=e,this.textWidth=i}getStrokeScaleEnabled(){return!0}}Nt.prototype._fillFunc=function(t){t.fillText(this._partialText,this._partialTextX,this._partialTextY)},Nt.prototype._strokeFunc=function(t){t.strokeText(this._partialText,this._partialTextX,this._partialTextY)},Nt.prototype.className="Text",Nt.prototype._attrsAffectingSize=["text","fontSize","padding","wrap","lineHeight","letterSpacing"],r(Nt),x.overWriteSetter(Nt,"width",v()),x.overWriteSetter(Nt,"height",v()),x.addGetterSetter(Nt,"fontFamily","Arial"),x.addGetterSetter(Nt,"fontSize",12,f()),x.addGetterSetter(Nt,"fontStyle","normal"),x.addGetterSetter(Nt,"fontVariant","normal"),x.addGetterSetter(Nt,"padding",0,f()),x.addGetterSetter(Nt,"align","left"),x.addGetterSetter(Nt,"verticalAlign","top"),x.addGetterSetter(Nt,"lineHeight",1,f()),x.addGetterSetter(Nt,"wrap","word"),x.addGetterSetter(Nt,"ellipsis",!1,y()),x.addGetterSetter(Nt,"letterSpacing",0,f()),x.addGetterSetter(Nt,"text","",m()),x.addGetterSetter(Nt,"textDecoration","");function Bt(t){t.fillText(this.partialText,0,0)}function zt(t){t.strokeText(this.partialText,0,0)}class Wt extends ${constructor(t){super(t),this.dummyCanvas=c.createCanvasElement(),this.dataArray=[],this.dataArray=_t.parsePathData(this.attrs.data),this.on("dataChange.konva",(function(){this.dataArray=_t.parsePathData(this.attrs.data),this._setTextData()})),this.on("textChange.konva alignChange.konva letterSpacingChange.konva kerningFuncChange.konva fontSizeChange.konva",this._setTextData),this._setTextData()}_sceneFunc(t){t.setAttr("font",this._getContextFont()),t.setAttr("textBaseline",this.textBaseline()),t.setAttr("textAlign","left"),t.save();var e=this.textDecoration(),i=this.fill(),r=this.fontSize(),a=this.glyphInfo;"underline"===e&&t.beginPath();for(var n=0;n<a.length;n++){t.save();var s=a[n].p0;t.translate(s.x,s.y),t.rotate(a[n].rotation),this.partialText=a[n].text,t.fillStrokeShape(this),"underline"===e&&(0===n&&t.moveTo(0,r/2+1),t.lineTo(r,r/2+1)),t.restore()}"underline"===e&&(t.strokeStyle=i,t.lineWidth=r/20,t.stroke()),t.restore()}_hitFunc(t){t.beginPath();var e=this.glyphInfo;if(e.length>=1){var i=e[0].p0;t.moveTo(i.x,i.y)}for(var r=0;r<e.length;r++){var a=e[r].p1;t.lineTo(a.x,a.y)}t.setAttr("lineWidth",this.fontSize()),t.setAttr("strokeStyle",this.colorKey),t.stroke()}getTextWidth(){return this.textWidth}getTextHeight(){return c.warn("text.getTextHeight() method is deprecated. Use text.height() - for full height and text.fontSize() - for one line height."),this.textHeight}setText(t){return Nt.prototype.setText.call(this,t)}_getContextFont(){return Nt.prototype._getContextFont.call(this)}_getTextSize(t){var e=this.dummyCanvas.getContext("2d");e.save(),e.font=this._getContextFont();var i=e.measureText(t);return e.restore(),{width:i.width,height:parseInt(this.attrs.fontSize,10)}}_setTextData(){var t=this,e=this._getTextSize(this.attrs.text),i=this.letterSpacing(),r=this.align(),a=this.kerningFunc();this.textWidth=e.width,this.textHeight=e.height;var n=Math.max(this.textWidth+((this.attrs.text||"").length-1)*i,0);this.glyphInfo=[];for(var s=0,o=0;o<t.dataArray.length;o++)t.dataArray[o].pathLength>0&&(s+=t.dataArray[o].pathLength);var h=0;"center"===r&&(h=Math.max(0,s/2-n/2)),"right"===r&&(h=Math.max(0,s-n));for(var l,d,c,g=Lt(this.text()),u=this.text().split(" ").length-1,f=-1,p=0,v=function(){p=0;for(var e=t.dataArray,i=f+1;i<e.length;i++){if(e[i].pathLength>0)return f=i,e[i];"M"===e[i].command&&(l={x:e[i].points[0],y:e[i].points[1]})}return{}},m=function(e){var a=t._getTextSize(e).width+i;" "===e&&"justify"===r&&(a+=(s-n)/u);var o=0,h=0;for(d=void 0;Math.abs(a-o)/a>.01&&h<20;){h++;for(var g=o;void 0===c;)(c=v())&&g+c.pathLength<a&&(g+=c.pathLength,c=void 0);if(c==={}||void 0===l)return;var f=!1;switch(c.command){case"L":_t.getLineLength(l.x,l.y,c.points[0],c.points[1])>a?d=_t.getPointOnLine(a,l.x,l.y,c.points[0],c.points[1],l.x,l.y):c=void 0;break;case"A":var m=c.points[4],_=c.points[5],y=c.points[4]+_;0===p?p=m+1e-8:a>o?p+=Math.PI/180*_/Math.abs(_):p-=Math.PI/360*_/Math.abs(_),(_<0&&p<y||_>=0&&p>y)&&(p=y,f=!0),d=_t.getPointOnEllipticalArc(c.points[0],c.points[1],c.points[2],c.points[3],p,c.points[6]);break;case"C":0===p?p=a>c.pathLength?1e-8:a/c.pathLength:a>o?p+=(a-o)/c.pathLength/2:p=Math.max(p-(o-a)/c.pathLength/2,0),p>1&&(p=1,f=!0),d=_t.getPointOnCubicBezier(p,c.start.x,c.start.y,c.points[0],c.points[1],c.points[2],c.points[3],c.points[4],c.points[5]);break;case"Q":0===p?p=a/c.pathLength:a>o?p+=(a-o)/c.pathLength:p-=(o-a)/c.pathLength,p>1&&(p=1,f=!0),d=_t.getPointOnQuadraticBezier(p,c.start.x,c.start.y,c.points[0],c.points[1],c.points[2],c.points[3])}void 0!==d&&(o=_t.getLineLength(l.x,l.y,d.x,d.y)),f&&(f=!1,c=void 0)}},_=h/(t._getTextSize("C").width+i)-1,y=0;y<_&&(m("C"),void 0!==l&&void 0!==d);y++)l=d;for(var x=0;x<g.length&&(m(g[x]),void 0!==l&&void 0!==d);x++){var b=_t.getLineLength(l.x,l.y,d.x,d.y),S=0;if(a)try{S=a(g[x-1],g[x])*this.fontSize()}catch(t){S=0}l.x+=S,d.x+=S,this.textWidth+=S;var w=_t.getPointOnLine(S+b/2,l.x,l.y,d.x,d.y),C=Math.atan2(d.y-l.y,d.x-l.x);this.glyphInfo.push({transposeX:w.x,transposeY:w.y,text:g[x],rotation:C,p0:l,p1:d}),l=d}}getSelfRect(){if(!this.glyphInfo.length)return{x:0,y:0,width:0,height:0};var t=[];this.glyphInfo.forEach((function(e){t.push(e.p0.x),t.push(e.p0.y),t.push(e.p1.x),t.push(e.p1.y)}));for(var e,i,r=t[0]||0,a=t[0]||0,n=t[1]||0,s=t[1]||0,o=0;o<t.length/2;o++)e=t[2*o],i=t[2*o+1],r=Math.min(r,e),a=Math.max(a,e),n=Math.min(n,i),s=Math.max(s,i);var h=this.fontSize();return{x:r-h/2,y:n-h/2,width:a-r+h,height:s-n+h}}}Wt.prototype._fillFunc=Bt,Wt.prototype._strokeFunc=zt,Wt.prototype._fillFuncHit=Bt,Wt.prototype._strokeFuncHit=zt,Wt.prototype.className="TextPath",Wt.prototype._attrsAffectingSize=["text","fontSize","data"],r(Wt),x.addGetterSetter(Wt,"data"),x.addGetterSetter(Wt,"fontFamily","Arial"),x.addGetterSetter(Wt,"fontSize",12,f()),x.addGetterSetter(Wt,"fontStyle","normal"),x.addGetterSetter(Wt,"align","left"),x.addGetterSetter(Wt,"letterSpacing",0,f()),x.addGetterSetter(Wt,"textBaseline","middle"),x.addGetterSetter(Wt,"fontVariant","normal"),x.addGetterSetter(Wt,"text",""),x.addGetterSetter(Wt,"textDecoration",null),x.addGetterSetter(Wt,"kerningFunc",null);var Ht=["resizeEnabledChange","rotateAnchorOffsetChange","rotateEnabledChange","enabledAnchorsChange","anchorSizeChange","borderEnabledChange","borderStrokeChange","borderStrokeWidthChange","borderDashChange","anchorStrokeChange","anchorStrokeWidthChange","anchorFillChange","anchorCornerRadiusChange","ignoreStrokeChange"].map(t=>t+".tr-konva").join(" "),Yt=["widthChange","heightChange","scaleXChange","scaleYChange","skewXChange","skewYChange","rotationChange","offsetXChange","offsetYChange","transformsEnabledChange","strokeWidthChange"].map(t=>t+".tr-konva").join(" "),Xt={"top-left":-45,"top-center":0,"top-right":45,"middle-right":-90,"middle-left":90,"bottom-left":-135,"bottom-center":180,"bottom-right":135};const jt="ontouchstart"in i._global;var Ut=["top-left","top-center","top-right","middle-right","middle-left","bottom-left","bottom-center","bottom-right"];function qt(t,e,i){const r=i.x+(t.x-i.x)*Math.cos(e)-(t.y-i.y)*Math.sin(e),a=i.y+(t.x-i.x)*Math.sin(e)+(t.y-i.y)*Math.cos(e);return Object.assign(Object.assign({},t),{rotation:t.rotation+e,x:r,y:a})}function Vt(t,e){return qt(t,e,function(t){return{x:t.x+t.width/2*Math.cos(t.rotation)+t.height/2*Math.sin(-t.rotation),y:t.y+t.height/2*Math.cos(t.rotation)+t.width/2*Math.sin(t.rotation)}}(t))}class Kt extends at{constructor(t){super(t),this._transforming=!1,this._createElements(),this._handleMouseMove=this._handleMouseMove.bind(this),this._handleMouseUp=this._handleMouseUp.bind(this),this.update=this.update.bind(this),this.on(Ht,this.update),this.getNode()&&this.update()}attachTo(t){return this.setNode(t),this}setNode(t){return c.warn("tr.setNode(shape), tr.node(shape) and tr.attachTo(shape) methods are deprecated. Please use tr.nodes(nodesArray) instead."),this.setNodes([t])}getNode(){return this._nodes&&this._nodes[0]}setNodes(t=[]){return this._nodes&&this._nodes.length&&this.detach(),this._nodes=t,1===t.length?this.rotation(t[0].getAbsoluteRotation()):this.rotation(0),this._nodes.forEach(t=>{const e=t._attrsAffectingSize.map(t=>t+"Change.tr-konva").join(" "),i=()=>{1===this.nodes().length&&this.rotation(this.nodes()[0].getAbsoluteRotation()),this._resetTransformCache(),this._transforming||this.isDragging()||this.update()};t.on(e,i),t.on(Yt,i),t.on("absoluteTransformChange.tr-konva",i),t.on("xChange.tr-konva yChange.tr-konva",i),this._proxyDrag(t)}),this._resetTransformCache(),!!this.findOne(".top-left")&&this.update(),this}_proxyDrag(t){let e;t.on("dragstart.tr-konva",i=>{e=t.getAbsolutePosition(),this.isDragging()||t===this.findOne(".back")||this.startDrag(i,!1)}),t.on("dragmove.tr-konva",i=>{if(!e)return;const r=t.getAbsolutePosition(),a=r.x-e.x,n=r.y-e.y;this.nodes().forEach(e=>{if(e===t)return;if(e.isDragging())return;const r=e.getAbsolutePosition();e.setAbsolutePosition({x:r.x+a,y:r.y+n}),e.startDrag(i)}),e=null})}getNodes(){return this._nodes||[]}getActiveAnchor(){return this._movingAnchorName}detach(){this._nodes&&this._nodes.forEach(t=>{t.off(".tr-konva")}),this._nodes=[],this._resetTransformCache()}_resetTransformCache(){this._clearCache("nodesRect"),this._clearCache("transform"),this._clearSelfAndDescendantCache("absoluteTransform")}_getNodeRect(){return this._getCache("nodesRect",this.__getNodeRect)}__getNodeShape(t,e=this.rotation(),r){var a=t.getClientRect({skipTransform:!0,skipShadow:!0,skipStroke:this.ignoreStroke()}),n=t.getAbsoluteScale(r),s=t.getAbsolutePosition(r),o=a.x*n.x-t.offsetX()*n.x,h=a.y*n.y-t.offsetY()*n.y;const l=(i.getAngle(t.getAbsoluteRotation())+2*Math.PI)%(2*Math.PI);return qt({x:s.x+o*Math.cos(l)+h*Math.sin(-l),y:s.y+h*Math.cos(l)+o*Math.sin(l),width:a.width*n.x,height:a.height*n.y,rotation:l},-i.getAngle(e),{x:0,y:0})}__getNodeRect(){if(!this.getNode())return{x:-1e8,y:-1e8,width:0,height:0,rotation:0};const t=[];this.nodes().map(e=>{const i=e.getClientRect({skipTransform:!0,skipShadow:!0,skipStroke:this.ignoreStroke()});var r=[{x:i.x,y:i.y},{x:i.x+i.width,y:i.y},{x:i.x+i.width,y:i.y+i.height},{x:i.x,y:i.y+i.height}],a=e.getAbsoluteTransform();r.forEach((function(e){var i=a.point(e);t.push(i)}))});const e=new a;var r,n,s,o;e.rotate(-i.getAngle(this.rotation())),t.forEach((function(t){var i=e.point(t);void 0===r&&(r=s=i.x,n=o=i.y),r=Math.min(r,i.x),n=Math.min(n,i.y),s=Math.max(s,i.x),o=Math.max(o,i.y)})),e.invert();const h=e.point({x:r,y:n});return{x:h.x,y:h.y,width:s-r,height:o-n,rotation:i.getAngle(this.rotation())}}getX(){return this._getNodeRect().x}getY(){return this._getNodeRect().y}getWidth(){return this._getNodeRect().width}getHeight(){return this._getNodeRect().height}_createElements(){this._createBack(),Ut.forEach(function(t){this._createAnchor(t)}.bind(this)),this._createAnchor("rotater")}_createAnchor(t){var e=new Tt({stroke:"rgb(0, 161, 255)",fill:"white",strokeWidth:1,name:t+" _anchor",dragDistance:0,draggable:!0,hitStrokeWidth:jt?10:"auto"}),r=this;e.on("mousedown touchstart",(function(t){r._handleMouseDown(t)})),e.on("dragstart",t=>{e.stopDrag(),t.cancelBubble=!0}),e.on("dragend",t=>{t.cancelBubble=!0}),e.on("mouseenter",()=>{var r=i.getAngle(this.rotation()),a=function(t,e){if("rotater"===t)return"crosshair";e+=c.degToRad(Xt[t]||0);var i=(c.radToDeg(e)%360+360)%360;return c._inRange(i,337.5,360)||c._inRange(i,0,22.5)?"ns-resize":c._inRange(i,22.5,67.5)?"nesw-resize":c._inRange(i,67.5,112.5)?"ew-resize":c._inRange(i,112.5,157.5)?"nwse-resize":c._inRange(i,157.5,202.5)?"ns-resize":c._inRange(i,202.5,247.5)?"nesw-resize":c._inRange(i,247.5,292.5)?"ew-resize":c._inRange(i,292.5,337.5)?"nwse-resize":(c.error("Transformer has unknown angle for cursor detection: "+i),"pointer")}(t,r);e.getStage().content&&(e.getStage().content.style.cursor=a),this._cursorChange=!0}),e.on("mouseout",()=>{e.getStage().content&&(e.getStage().content.style.cursor=""),this._cursorChange=!1}),this.add(e)}_createBack(){var t=new $({name:"back",width:0,height:0,draggable:!0,sceneFunc(t){var e=this.getParent(),i=e.padding();t.beginPath(),t.rect(-i,-i,this.width()+2*i,this.height()+2*i),t.moveTo(this.width()/2,-i),e.rotateEnabled()&&t.lineTo(this.width()/2,-e.rotateAnchorOffset()*c._sign(this.height())-i),t.fillStrokeShape(this)},hitFunc:(t,e)=>{if(this.shouldOverdrawWholeArea()){var i=this.padding();t.beginPath(),t.rect(-i,-i,e.width()+2*i,e.height()+2*i),t.fillStrokeShape(e)}}});this.add(t),this._proxyDrag(t),t.on("dragstart",t=>{t.cancelBubble=!0}),t.on("dragmove",t=>{t.cancelBubble=!0}),t.on("dragend",t=>{t.cancelBubble=!0})}_handleMouseDown(t){this._movingAnchorName=t.target.name().split(" ")[0];var e=this._getNodeRect(),i=e.width,r=e.height,a=Math.sqrt(Math.pow(i,2)+Math.pow(r,2));this.sin=Math.abs(r/a),this.cos=Math.abs(i/a),"undefined"!=typeof window&&(window.addEventListener("mousemove",this._handleMouseMove),window.addEventListener("touchmove",this._handleMouseMove),window.addEventListener("mouseup",this._handleMouseUp,!0),window.addEventListener("touchend",this._handleMouseUp,!0)),this._transforming=!0;var n=t.target.getAbsolutePosition(),s=t.target.getStage().getPointerPosition();this._anchorDragOffset={x:s.x-n.x,y:s.y-n.y},this._fire("transformstart",{evt:t,target:this.getNode()}),this._nodes.forEach(e=>{e._fire("transformstart",{evt:t,target:e})})}_handleMouseMove(t){var e,r,a,n=this.findOne("."+this._movingAnchorName),s=n.getStage();s.setPointersPositions(t);const o=s.getPointerPosition();var h={x:o.x-this._anchorDragOffset.x,y:o.y-this._anchorDragOffset.y};const l=n.getAbsolutePosition();n.setAbsolutePosition(h);const d=n.getAbsolutePosition();if(l.x!==d.x||l.y!==d.y)if("rotater"!==this._movingAnchorName){var c=this.keepRatio()||t.shiftKey,g=this.centeredScaling()||t.altKey;if("top-left"===this._movingAnchorName){if(c){var u=g?{x:this.width()/2,y:this.height()/2}:{x:this.findOne(".bottom-right").x(),y:this.findOne(".bottom-right").y()};a=Math.sqrt(Math.pow(u.x-n.x(),2)+Math.pow(u.y-n.y(),2));var f=this.findOne(".top-left").x()>u.x?-1:1,p=this.findOne(".top-left").y()>u.y?-1:1;e=a*this.cos*f,r=a*this.sin*p,this.findOne(".top-left").x(u.x-e),this.findOne(".top-left").y(u.y-r)}}else if("top-center"===this._movingAnchorName)this.findOne(".top-left").y(n.y());else if("top-right"===this._movingAnchorName){if(c){u=g?{x:this.width()/2,y:this.height()/2}:{x:this.findOne(".bottom-left").x(),y:this.findOne(".bottom-left").y()};a=Math.sqrt(Math.pow(n.x()-u.x,2)+Math.pow(u.y-n.y(),2));f=this.findOne(".top-right").x()<u.x?-1:1,p=this.findOne(".top-right").y()>u.y?-1:1;e=a*this.cos*f,r=a*this.sin*p,this.findOne(".top-right").x(u.x+e),this.findOne(".top-right").y(u.y-r)}var v=n.position();this.findOne(".top-left").y(v.y),this.findOne(".bottom-right").x(v.x)}else if("middle-left"===this._movingAnchorName)this.findOne(".top-left").x(n.x());else if("middle-right"===this._movingAnchorName)this.findOne(".bottom-right").x(n.x());else if("bottom-left"===this._movingAnchorName){if(c){u=g?{x:this.width()/2,y:this.height()/2}:{x:this.findOne(".top-right").x(),y:this.findOne(".top-right").y()};a=Math.sqrt(Math.pow(u.x-n.x(),2)+Math.pow(n.y()-u.y,2));f=u.x<n.x()?-1:1,p=n.y()<u.y?-1:1;e=a*this.cos*f,r=a*this.sin*p,n.x(u.x-e),n.y(u.y+r)}v=n.position(),this.findOne(".top-left").x(v.x),this.findOne(".bottom-right").y(v.y)}else if("bottom-center"===this._movingAnchorName)this.findOne(".bottom-right").y(n.y());else if("bottom-right"===this._movingAnchorName){if(c){u=g?{x:this.width()/2,y:this.height()/2}:{x:this.findOne(".top-left").x(),y:this.findOne(".top-left").y()};a=Math.sqrt(Math.pow(n.x()-u.x,2)+Math.pow(n.y()-u.y,2));f=this.findOne(".bottom-right").x()<u.x?-1:1,p=this.findOne(".bottom-right").y()<u.y?-1:1;e=a*this.cos*f,r=a*this.sin*p,this.findOne(".bottom-right").x(u.x+e),this.findOne(".bottom-right").y(u.y+r)}}else console.error(new Error("Wrong position argument of selection resizer: "+this._movingAnchorName));if(g=this.centeredScaling()||t.altKey){var m=this.findOne(".top-left"),_=this.findOne(".bottom-right"),y=m.x(),x=m.y(),b=this.getWidth()-_.x(),S=this.getHeight()-_.y();_.move({x:-y,y:-x}),m.move({x:b,y:S})}var w=this.findOne(".top-left").getAbsolutePosition();e=w.x,r=w.y;var C=this.findOne(".bottom-right").x()-this.findOne(".top-left").x(),k=this.findOne(".bottom-right").y()-this.findOne(".top-left").y();this._fitNodesInto({x:e,y:r,width:C,height:k,rotation:i.getAngle(this.rotation())},t)}else{var P=this._getNodeRect();e=n.x()-P.width/2,r=-n.y()+P.height/2;let a=Math.atan2(-r,e)+Math.PI/2;P.height<0&&(a-=Math.PI);const s=i.getAngle(this.rotation())+a,o=i.getAngle(this.rotationSnapTolerance()),h=Vt(P,function(t,e,r){let a=e;for(let n=0;n<t.length;n++){const s=i.getAngle(t[n]),o=Math.abs(s-e)%(2*Math.PI);Math.min(o,2*Math.PI-o)<r&&(a=s)}return a}(this.rotationSnaps(),s,o)-P.rotation);this._fitNodesInto(h,t)}}_handleMouseUp(t){this._removeEvents(t)}getAbsoluteTransform(){return this.getTransform()}_removeEvents(t){if(this._transforming){this._transforming=!1,"undefined"!=typeof window&&(window.removeEventListener("mousemove",this._handleMouseMove),window.removeEventListener("touchmove",this._handleMouseMove),window.removeEventListener("mouseup",this._handleMouseUp,!0),window.removeEventListener("touchend",this._handleMouseUp,!0));var e=this.getNode();this._fire("transformend",{evt:t,target:e}),e&&this._nodes.forEach(e=>{e._fire("transformend",{evt:t,target:e})}),this._movingAnchorName=null}}_fitNodesInto(t,e){var r=this._getNodeRect();if(c._inRange(t.width,2*-this.padding()-1,1))return void this.update();if(c._inRange(t.height,2*-this.padding()-1,1))return void this.update();const n=this.flipEnabled();var s=new a;if(s.rotate(i.getAngle(this.rotation())),this._movingAnchorName&&t.width<0&&this._movingAnchorName.indexOf("left")>=0){const e=s.point({x:2*-this.padding(),y:0});if(t.x+=e.x,t.y+=e.y,t.width+=2*this.padding(),this._movingAnchorName=this._movingAnchorName.replace("left","right"),this._anchorDragOffset.x-=e.x,this._anchorDragOffset.y-=e.y,!n)return void this.update()}else if(this._movingAnchorName&&t.width<0&&this._movingAnchorName.indexOf("right")>=0){const e=s.point({x:2*this.padding(),y:0});if(this._movingAnchorName=this._movingAnchorName.replace("right","left"),this._anchorDragOffset.x-=e.x,this._anchorDragOffset.y-=e.y,t.width+=2*this.padding(),!n)return void this.update()}if(this._movingAnchorName&&t.height<0&&this._movingAnchorName.indexOf("top")>=0){const e=s.point({x:0,y:2*-this.padding()});if(t.x+=e.x,t.y+=e.y,this._movingAnchorName=this._movingAnchorName.replace("top","bottom"),this._anchorDragOffset.x-=e.x,this._anchorDragOffset.y-=e.y,t.height+=2*this.padding(),!n)return void this.update()}else if(this._movingAnchorName&&t.height<0&&this._movingAnchorName.indexOf("bottom")>=0){const e=s.point({x:0,y:2*this.padding()});if(this._movingAnchorName=this._movingAnchorName.replace("bottom","top"),this._anchorDragOffset.x-=e.x,this._anchorDragOffset.y-=e.y,t.height+=2*this.padding(),!n)return void this.update()}if(this.boundBoxFunc()){const e=this.boundBoxFunc()(r,t);e?t=e:c.warn("boundBoxFunc returned falsy. You should return new bound rect from it!")}const o=new a;o.translate(r.x,r.y),o.rotate(r.rotation),o.scale(r.width/1e7,r.height/1e7);const h=new a;h.translate(t.x,t.y),h.rotate(t.rotation),h.scale(t.width/1e7,t.height/1e7);const l=h.multiply(o.invert());this._nodes.forEach(t=>{var i;const r=t.getParent().getAbsoluteTransform(),n=t.getTransform().copy();n.translate(t.offsetX(),t.offsetY());const s=new a;s.multiply(r.copy().invert()).multiply(l).multiply(r).multiply(n);const o=s.decompose();t.setAttrs(o),this._fire("transform",{evt:e,target:t}),t._fire("transform",{evt:e,target:t}),null===(i=t.getLayer())||void 0===i||i.batchDraw()}),this.rotation(c._getRotation(t.rotation)),this._resetTransformCache(),this.update(),this.getLayer().batchDraw()}forceUpdate(){this._resetTransformCache(),this.update()}_batchChangeChild(t,e){this.findOne(t).setAttrs(e)}update(){var t,e=this._getNodeRect();this.rotation(c._getRotation(e.rotation));var i=e.width,r=e.height,a=this.enabledAnchors(),n=this.resizeEnabled(),s=this.padding(),o=this.anchorSize();this.find("._anchor").forEach(t=>{t.setAttrs({width:o,height:o,offsetX:o/2,offsetY:o/2,stroke:this.anchorStroke(),strokeWidth:this.anchorStrokeWidth(),fill:this.anchorFill(),cornerRadius:this.anchorCornerRadius()})}),this._batchChangeChild(".top-left",{x:0,y:0,offsetX:o/2+s,offsetY:o/2+s,visible:n&&a.indexOf("top-left")>=0}),this._batchChangeChild(".top-center",{x:i/2,y:0,offsetY:o/2+s,visible:n&&a.indexOf("top-center")>=0}),this._batchChangeChild(".top-right",{x:i,y:0,offsetX:o/2-s,offsetY:o/2+s,visible:n&&a.indexOf("top-right")>=0}),this._batchChangeChild(".middle-left",{x:0,y:r/2,offsetX:o/2+s,visible:n&&a.indexOf("middle-left")>=0}),this._batchChangeChild(".middle-right",{x:i,y:r/2,offsetX:o/2-s,visible:n&&a.indexOf("middle-right")>=0}),this._batchChangeChild(".bottom-left",{x:0,y:r,offsetX:o/2+s,offsetY:o/2-s,visible:n&&a.indexOf("bottom-left")>=0}),this._batchChangeChild(".bottom-center",{x:i/2,y:r,offsetY:o/2-s,visible:n&&a.indexOf("bottom-center")>=0}),this._batchChangeChild(".bottom-right",{x:i,y:r,offsetX:o/2-s,offsetY:o/2-s,visible:n&&a.indexOf("bottom-right")>=0}),this._batchChangeChild(".rotater",{x:i/2,y:-this.rotateAnchorOffset()*c._sign(r)-s,visible:this.rotateEnabled()}),this._batchChangeChild(".back",{width:i,height:r,visible:this.borderEnabled(),stroke:this.borderStroke(),strokeWidth:this.borderStrokeWidth(),dash:this.borderDash(),x:0,y:0}),null===(t=this.getLayer())||void 0===t||t.batchDraw()}isTransforming(){return this._transforming}stopTransform(){if(this._transforming){this._removeEvents();var t=this.findOne("."+this._movingAnchorName);t&&t.stopDrag()}}destroy(){return this.getStage()&&this._cursorChange&&this.getStage().content&&(this.getStage().content.style.cursor=""),at.prototype.destroy.call(this),this.detach(),this._removeEvents(),this}toObject(){return L.prototype.toObject.call(this)}}Kt.prototype.className="Transformer",r(Kt),x.addGetterSetter(Kt,"enabledAnchors",Ut,(function(t){return t instanceof Array||c.warn("enabledAnchors value should be an array"),t instanceof Array&&t.forEach((function(t){-1===Ut.indexOf(t)&&c.warn("Unknown anchor name: "+t+". Available names are: "+Ut.join(", "))})),t||[]})),x.addGetterSetter(Kt,"flipEnabled",!0,y()),x.addGetterSetter(Kt,"resizeEnabled",!0),x.addGetterSetter(Kt,"anchorSize",10,f()),x.addGetterSetter(Kt,"rotateEnabled",!0),x.addGetterSetter(Kt,"rotationSnaps",[]),x.addGetterSetter(Kt,"rotateAnchorOffset",50,f()),x.addGetterSetter(Kt,"rotationSnapTolerance",5,f()),x.addGetterSetter(Kt,"borderEnabled",!0),x.addGetterSetter(Kt,"anchorStroke","rgb(0, 161, 255)"),x.addGetterSetter(Kt,"anchorStrokeWidth",1,f()),x.addGetterSetter(Kt,"anchorFill","white"),x.addGetterSetter(Kt,"anchorCornerRadius",0,f()),x.addGetterSetter(Kt,"borderStroke","rgb(0, 161, 255)"),x.addGetterSetter(Kt,"borderStrokeWidth",1,f()),x.addGetterSetter(Kt,"borderDash"),x.addGetterSetter(Kt,"keepRatio",!0),x.addGetterSetter(Kt,"centeredScaling",!1),x.addGetterSetter(Kt,"ignoreStroke",!1),x.addGetterSetter(Kt,"padding",0,f()),x.addGetterSetter(Kt,"node"),x.addGetterSetter(Kt,"nodes"),x.addGetterSetter(Kt,"boundBoxFunc"),x.addGetterSetter(Kt,"shouldOverdrawWholeArea",!1),x.backCompat(Kt,{lineEnabled:"borderEnabled",rotateHandlerOffset:"rotateAnchorOffset",enabledHandlers:"enabledAnchors"});class Qt extends ${_sceneFunc(t){t.beginPath(),t.arc(0,0,this.radius(),0,i.getAngle(this.angle()),this.clockwise()),t.lineTo(0,0),t.closePath(),t.fillStrokeShape(this)}getWidth(){return 2*this.radius()}getHeight(){return 2*this.radius()}setWidth(t){this.radius(t/2)}setHeight(t){this.radius(t/2)}}function Jt(){this.r=0,this.g=0,this.b=0,this.a=0,this.next=null}Qt.prototype.className="Wedge",Qt.prototype._centroid=!0,Qt.prototype._attrsAffectingSize=["radius"],r(Qt),x.addGetterSetter(Qt,"radius",0,f()),x.addGetterSetter(Qt,"angle",0,f()),x.addGetterSetter(Qt,"clockwise",!1),x.backCompat(Qt,{angleDeg:"angle",getAngleDeg:"getAngle",setAngleDeg:"setAngle"});var Zt=[512,512,456,512,328,456,335,512,405,328,271,456,388,335,292,512,454,405,364,328,298,271,496,456,420,388,360,335,312,292,273,512,482,454,428,405,383,364,345,328,312,298,284,271,259,496,475,456,437,420,404,388,374,360,347,335,323,312,302,292,282,273,265,512,497,482,468,454,441,428,417,405,394,383,373,364,354,345,337,328,320,312,305,298,291,284,278,271,265,259,507,496,485,475,465,456,446,437,428,420,412,404,396,388,381,374,367,360,354,347,341,335,329,323,318,312,307,302,297,292,287,282,278,273,269,265,261,512,505,497,489,482,475,468,461,454,447,441,435,428,422,417,411,405,399,394,389,383,378,373,368,364,359,354,350,345,341,337,332,328,324,320,316,312,309,305,301,298,294,291,287,284,281,278,274,271,268,265,262,259,257,507,501,496,491,485,480,475,470,465,460,456,451,446,442,437,433,428,424,420,416,412,408,404,400,396,392,388,385,381,377,374,370,367,363,360,357,354,350,347,344,341,338,335,332,329,326,323,320,318,315,312,310,307,304,302,299,297,294,292,289,287,285,282,280,278,275,273,271,269,267,265,263,261,259],$t=[9,11,12,13,13,14,14,15,15,15,15,16,16,16,16,17,17,17,17,17,17,17,18,18,18,18,18,18,18,18,18,19,19,19,19,19,19,19,19,19,19,19,19,19,19,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24];x.addGetterSetter(L,"blurRadius",0,f(),x.afterSetFilter);x.addGetterSetter(L,"brightness",0,f(),x.afterSetFilter);x.addGetterSetter(L,"contrast",0,f(),x.afterSetFilter);function te(t,e,i,r,a){var n=i-e,s=a-r;return 0===n?r+s/2:0===s?r:s*((t-e)/n)+r}x.addGetterSetter(L,"embossStrength",.5,f(),x.afterSetFilter),x.addGetterSetter(L,"embossWhiteLevel",.5,f(),x.afterSetFilter),x.addGetterSetter(L,"embossDirection","top-left",null,x.afterSetFilter),x.addGetterSetter(L,"embossBlend",!1,null,x.afterSetFilter);x.addGetterSetter(L,"enhance",0,f(),x.afterSetFilter);x.addGetterSetter(L,"hue",0,f(),x.afterSetFilter),x.addGetterSetter(L,"saturation",0,f(),x.afterSetFilter),x.addGetterSetter(L,"luminance",0,f(),x.afterSetFilter);x.addGetterSetter(L,"hue",0,f(),x.afterSetFilter),x.addGetterSetter(L,"saturation",0,f(),x.afterSetFilter),x.addGetterSetter(L,"value",0,f(),x.afterSetFilter);function ee(t,e,i){var r=4*(i*t.width+e),a=[];return a.push(t.data[r++],t.data[r++],t.data[r++],t.data[r++]),a}function ie(t,e){return Math.sqrt(Math.pow(t[0]-e[0],2)+Math.pow(t[1]-e[1],2)+Math.pow(t[2]-e[2],2))}x.addGetterSetter(L,"kaleidoscopePower",2,f(),x.afterSetFilter),x.addGetterSetter(L,"kaleidoscopeAngle",0,f(),x.afterSetFilter);x.addGetterSetter(L,"threshold",0,f(),x.afterSetFilter);x.addGetterSetter(L,"noise",.2,f(),x.afterSetFilter);x.addGetterSetter(L,"pixelSize",8,f(),x.afterSetFilter);x.addGetterSetter(L,"levels",.5,f(),x.afterSetFilter);x.addGetterSetter(L,"red",0,(function(t){return this._filterUpToDate=!1,t>255?255:t<0?0:Math.round(t)})),x.addGetterSetter(L,"green",0,(function(t){return this._filterUpToDate=!1,t>255?255:t<0?0:Math.round(t)})),x.addGetterSetter(L,"blue",0,u,x.afterSetFilter);x.addGetterSetter(L,"red",0,(function(t){return this._filterUpToDate=!1,t>255?255:t<0?0:Math.round(t)})),x.addGetterSetter(L,"green",0,(function(t){return this._filterUpToDate=!1,t>255?255:t<0?0:Math.round(t)})),x.addGetterSetter(L,"blue",0,u,x.afterSetFilter),x.addGetterSetter(L,"alpha",1,(function(t){return this._filterUpToDate=!1,t>1?1:t<0?0:t}));x.addGetterSetter(L,"threshold",.5,f(),x.afterSetFilter);return ut.Util._assign(ut,{Arc:ft,Arrow:yt,Circle:xt,Ellipse:bt,Image:St,Label:kt,Tag:Pt,Line:mt,Path:_t,Rect:Tt,RegularPolygon:At,Ring:Gt,Sprite:Et,Star:Rt,Text:Nt,TextPath:Wt,Transformer:Kt,Wedge:Qt,Filters:{Blur:function(t){var e=Math.round(this.blurRadius());e>0&&function(t,e){var i,r,a,n,s,o,h,l,d,c,g,u,f,p,v,m,_,y,x,b,S,w,C,k,P=t.data,T=t.width,A=t.height,M=e+e+1,G=T-1,E=A-1,R=e+1,L=R*(R+1)/2,D=new Jt,O=null,I=D,F=null,N=null,B=Zt[e],z=$t[e];for(a=1;a<M;a++)I=I.next=new Jt,a===R&&(O=I);for(I.next=D,h=o=0,r=0;r<A;r++){for(m=_=y=x=l=d=c=g=0,u=R*(b=P[o]),f=R*(S=P[o+1]),p=R*(w=P[o+2]),v=R*(C=P[o+3]),l+=L*b,d+=L*S,c+=L*w,g+=L*C,I=D,a=0;a<R;a++)I.r=b,I.g=S,I.b=w,I.a=C,I=I.next;for(a=1;a<R;a++)n=o+((G<a?G:a)<<2),l+=(I.r=b=P[n])*(k=R-a),d+=(I.g=S=P[n+1])*k,c+=(I.b=w=P[n+2])*k,g+=(I.a=C=P[n+3])*k,m+=b,_+=S,y+=w,x+=C,I=I.next;for(F=D,N=O,i=0;i<T;i++)P[o+3]=C=g*B>>z,0!==C?(C=255/C,P[o]=(l*B>>z)*C,P[o+1]=(d*B>>z)*C,P[o+2]=(c*B>>z)*C):P[o]=P[o+1]=P[o+2]=0,l-=u,d-=f,c-=p,g-=v,u-=F.r,f-=F.g,p-=F.b,v-=F.a,n=h+((n=i+e+1)<G?n:G)<<2,l+=m+=F.r=P[n],d+=_+=F.g=P[n+1],c+=y+=F.b=P[n+2],g+=x+=F.a=P[n+3],F=F.next,u+=b=N.r,f+=S=N.g,p+=w=N.b,v+=C=N.a,m-=b,_-=S,y-=w,x-=C,N=N.next,o+=4;h+=T}for(i=0;i<T;i++){for(_=y=x=m=d=c=g=l=0,u=R*(b=P[o=i<<2]),f=R*(S=P[o+1]),p=R*(w=P[o+2]),v=R*(C=P[o+3]),l+=L*b,d+=L*S,c+=L*w,g+=L*C,I=D,a=0;a<R;a++)I.r=b,I.g=S,I.b=w,I.a=C,I=I.next;for(s=T,a=1;a<=e;a++)o=s+i<<2,l+=(I.r=b=P[o])*(k=R-a),d+=(I.g=S=P[o+1])*k,c+=(I.b=w=P[o+2])*k,g+=(I.a=C=P[o+3])*k,m+=b,_+=S,y+=w,x+=C,I=I.next,a<E&&(s+=T);for(o=i,F=D,N=O,r=0;r<A;r++)P[(n=o<<2)+3]=C=g*B>>z,C>0?(C=255/C,P[n]=(l*B>>z)*C,P[n+1]=(d*B>>z)*C,P[n+2]=(c*B>>z)*C):P[n]=P[n+1]=P[n+2]=0,l-=u,d-=f,c-=p,g-=v,u-=F.r,f-=F.g,p-=F.b,v-=F.a,n=i+((n=r+R)<E?n:E)*T<<2,l+=m+=F.r=P[n],d+=_+=F.g=P[n+1],c+=y+=F.b=P[n+2],g+=x+=F.a=P[n+3],F=F.next,u+=b=N.r,f+=S=N.g,p+=w=N.b,v+=C=N.a,m-=b,_-=S,y-=w,x-=C,N=N.next,o+=T}}(t,e)},Brighten:function(t){var e,i=255*this.brightness(),r=t.data,a=r.length;for(e=0;e<a;e+=4)r[e]+=i,r[e+1]+=i,r[e+2]+=i},Contrast:function(t){var e,i=Math.pow((this.contrast()+100)/100,2),r=t.data,a=r.length,n=150,s=150,o=150;for(e=0;e<a;e+=4)n=r[e],s=r[e+1],o=r[e+2],n/=255,n-=.5,n*=i,n+=.5,s/=255,s-=.5,s*=i,s+=.5,o/=255,o-=.5,o*=i,o+=.5,n=(n*=255)<0?0:n>255?255:n,s=(s*=255)<0?0:s>255?255:s,o=(o*=255)<0?0:o>255?255:o,r[e]=n,r[e+1]=s,r[e+2]=o},Emboss:function(t){var e=10*this.embossStrength(),i=255*this.embossWhiteLevel(),r=this.embossDirection(),a=this.embossBlend(),n=0,s=0,o=t.data,h=t.width,l=t.height,d=4*h,g=l;switch(r){case"top-left":n=-1,s=-1;break;case"top":n=-1,s=0;break;case"top-right":n=-1,s=1;break;case"right":n=0,s=1;break;case"bottom-right":n=1,s=1;break;case"bottom":n=1,s=0;break;case"bottom-left":n=1,s=-1;break;case"left":n=0,s=-1;break;default:c.error("Unknown emboss direction: "+r)}do{var u=(g-1)*d,f=n;g+f<1&&(f=0),g+f>l&&(f=0);var p=(g-1+f)*h*4,v=h;do{var m=u+4*(v-1),_=s;v+_<1&&(_=0),v+_>h&&(_=0);var y=p+4*(v-1+_),x=o[m]-o[y],b=o[m+1]-o[y+1],S=o[m+2]-o[y+2],w=x,C=w>0?w:-w;if((b>0?b:-b)>C&&(w=b),(S>0?S:-S)>C&&(w=S),w*=e,a){var k=o[m]+w,P=o[m+1]+w,T=o[m+2]+w;o[m]=k>255?255:k<0?0:k,o[m+1]=P>255?255:P<0?0:P,o[m+2]=T>255?255:T<0?0:T}else{var A=i-w;A<0?A=0:A>255&&(A=255),o[m]=o[m+1]=o[m+2]=A}}while(--v)}while(--g)},Enhance:function(t){var e,i,r,a,n=t.data,s=n.length,o=n[0],h=o,l=n[1],d=l,c=n[2],g=c,u=this.enhance();if(0!==u){for(a=0;a<s;a+=4)(e=n[a+0])<o?o=e:e>h&&(h=e),(i=n[a+1])<l?l=i:i>d&&(d=i),(r=n[a+2])<c?c=r:r>g&&(g=r);var f,p,v,m,_,y,x,b,S;for(h===o&&(h=255,o=0),d===l&&(d=255,l=0),g===c&&(g=255,c=0),u>0?(p=h+u*(255-h),v=o-u*(o-0),_=d+u*(255-d),y=l-u*(l-0),b=g+u*(255-g),S=c-u*(c-0)):(p=h+u*(h-(f=.5*(h+o))),v=o+u*(o-f),_=d+u*(d-(m=.5*(d+l))),y=l+u*(l-m),b=g+u*(g-(x=.5*(g+c))),S=c+u*(c-x)),a=0;a<s;a+=4)n[a+0]=te(n[a+0],o,h,v,p),n[a+1]=te(n[a+1],l,d,y,_),n[a+2]=te(n[a+2],c,g,S,b)}},Grayscale:function(t){var e,i,r=t.data,a=r.length;for(e=0;e<a;e+=4)i=.34*r[e]+.5*r[e+1]+.16*r[e+2],r[e]=i,r[e+1]=i,r[e+2]=i},HSL:function(t){var e,i,r,a,n,s=t.data,o=s.length,h=Math.pow(2,this.saturation()),l=Math.abs(this.hue()+360)%360,d=127*this.luminance(),c=1*h*Math.cos(l*Math.PI/180),g=1*h*Math.sin(l*Math.PI/180),u=.299+.701*c+.167*g,f=.587-.587*c+.33*g,p=.114-.114*c-.497*g,v=.299-.299*c-.328*g,m=.587+.413*c+.035*g,_=.114-.114*c+.293*g,y=.299-.3*c+1.25*g,x=.587-.586*c-1.05*g,b=.114+.886*c-.2*g;for(e=0;e<o;e+=4)i=s[e+0],r=s[e+1],a=s[e+2],n=s[e+3],s[e+0]=u*i+f*r+p*a+d,s[e+1]=v*i+m*r+_*a+d,s[e+2]=y*i+x*r+b*a+d,s[e+3]=n},HSV:function(t){var e,i,r,a,n,s=t.data,o=s.length,h=Math.pow(2,this.value()),l=Math.pow(2,this.saturation()),d=Math.abs(this.hue()+360)%360,c=h*l*Math.cos(d*Math.PI/180),g=h*l*Math.sin(d*Math.PI/180),u=.299*h+.701*c+.167*g,f=.587*h-.587*c+.33*g,p=.114*h-.114*c-.497*g,v=.299*h-.299*c-.328*g,m=.587*h+.413*c+.035*g,_=.114*h-.114*c+.293*g,y=.299*h-.3*c+1.25*g,x=.587*h-.586*c-1.05*g,b=.114*h+.886*c-.2*g;for(e=0;e<o;e+=4)i=s[e+0],r=s[e+1],a=s[e+2],n=s[e+3],s[e+0]=u*i+f*r+p*a,s[e+1]=v*i+m*r+_*a,s[e+2]=y*i+x*r+b*a,s[e+3]=n},Invert:function(t){var e,i=t.data,r=i.length;for(e=0;e<r;e+=4)i[e]=255-i[e],i[e+1]=255-i[e+1],i[e+2]=255-i[e+2]},Kaleidoscope:function(t){var e,i,r,a,n,s,o,h,l,d=t.width,g=t.height,u=Math.round(this.kaleidoscopePower()),f=Math.round(this.kaleidoscopeAngle()),p=Math.floor(d*(f%360)/360);if(!(u<1)){var v=c.createCanvasElement();v.width=d,v.height=g;var m=v.getContext("2d").getImageData(0,0,d,g);!function(t,e,i){var r,a,n,s,o=t.data,h=e.data,l=t.width,d=t.height,c=i.polarCenterX||l/2,g=i.polarCenterY||d/2,u=0,f=0,p=0,v=0,m=Math.sqrt(c*c+g*g);a=l-c,n=d-g,m=(s=Math.sqrt(a*a+n*n))>m?s:m;var _,y,x,b,S=d,w=l,C=360/w*Math.PI/180;for(y=0;y<w;y+=1)for(x=Math.sin(y*C),b=Math.cos(y*C),_=0;_<S;_+=1)a=Math.floor(c+m*_/S*b),u=o[(r=4*((n=Math.floor(g+m*_/S*x))*l+a))+0],f=o[r+1],p=o[r+2],v=o[r+3],h[(r=4*(y+_*l))+0]=u,h[r+1]=f,h[r+2]=p,h[r+3]=v}(t,m,{polarCenterX:d/2,polarCenterY:g/2});for(var _=d/Math.pow(2,u);_<=8;)_*=2,u-=1;var y=_=Math.ceil(_),x=0,b=y,S=1;for(p+_>d&&(x=y,b=0,S=-1),i=0;i<g;i+=1)for(e=x;e!==b;e+=S)h=4*(d*i+Math.round(e+p)%d),a=m.data[h+0],n=m.data[h+1],s=m.data[h+2],o=m.data[h+3],l=4*(d*i+e),m.data[l+0]=a,m.data[l+1]=n,m.data[l+2]=s,m.data[l+3]=o;for(i=0;i<g;i+=1)for(y=Math.floor(_),r=0;r<u;r+=1){for(e=0;e<y+1;e+=1)h=4*(d*i+e),a=m.data[h+0],n=m.data[h+1],s=m.data[h+2],o=m.data[h+3],l=4*(d*i+2*y-e-1),m.data[l+0]=a,m.data[l+1]=n,m.data[l+2]=s,m.data[l+3]=o;y*=2}!function(t,e,i){var r,a,n,s,o,h,l=t.data,d=e.data,c=t.width,g=t.height,u=i.polarCenterX||c/2,f=i.polarCenterY||g/2,p=0,v=0,m=0,_=0,y=Math.sqrt(u*u+f*f);a=c-u,n=g-f,y=(h=Math.sqrt(a*a+n*n))>y?h:y;var x,b,S,w=g,C=c,k=i.polarRotation||0;for(a=0;a<c;a+=1)for(n=0;n<g;n+=1)s=a-u,o=n-f,x=Math.sqrt(s*s+o*o)*w/y,b=(b=(180*Math.atan2(o,s)/Math.PI+360+k)%360)*C/360,S=Math.floor(b),p=l[(r=4*(Math.floor(x)*c+S))+0],v=l[r+1],m=l[r+2],_=l[r+3],d[(r=4*(n*c+a))+0]=p,d[r+1]=v,d[r+2]=m,d[r+3]=_}(m,t,{polarRotation:0})}},Mask:function(t){var e=function(t,e){var i=ee(t,0,0),r=ee(t,t.width-1,0),a=ee(t,0,t.height-1),n=ee(t,t.width-1,t.height-1),s=e||10;if(ie(i,r)<s&&ie(r,n)<s&&ie(n,a)<s&&ie(a,i)<s){for(var o=function(t){for(var e=[0,0,0],i=0;i<t.length;i++)e[0]+=t[i][0],e[1]+=t[i][1],e[2]+=t[i][2];return e[0]/=t.length,e[1]/=t.length,e[2]/=t.length,e}([r,i,n,a]),h=[],l=0;l<t.width*t.height;l++){var d=ie(o,[t.data[4*l],t.data[4*l+1],t.data[4*l+2]]);h[l]=d<s?0:255}return h}}(t,this.threshold());return e&&function(t,e){for(var i=0;i<t.width*t.height;i++)t.data[4*i+3]=e[i]}(t,e=function(t,e,i){for(var r=[1/9,1/9,1/9,1/9,1/9,1/9,1/9,1/9,1/9],a=Math.round(Math.sqrt(r.length)),n=Math.floor(a/2),s=[],o=0;o<i;o++)for(var h=0;h<e;h++){for(var l=o*e+h,d=0,c=0;c<a;c++)for(var g=0;g<a;g++){var u=o+c-n,f=h+g-n;if(u>=0&&u<i&&f>=0&&f<e){var p=r[c*a+g];d+=t[u*e+f]*p}}s[l]=d}return s}(e=function(t,e,i){for(var r=[1,1,1,1,1,1,1,1,1],a=Math.round(Math.sqrt(r.length)),n=Math.floor(a/2),s=[],o=0;o<i;o++)for(var h=0;h<e;h++){for(var l=o*e+h,d=0,c=0;c<a;c++)for(var g=0;g<a;g++){var u=o+c-n,f=h+g-n;if(u>=0&&u<i&&f>=0&&f<e){var p=r[c*a+g];d+=t[u*e+f]*p}}s[l]=d>=1020?255:0}return s}(e=function(t,e,i){for(var r=[1,1,1,1,0,1,1,1,1],a=Math.round(Math.sqrt(r.length)),n=Math.floor(a/2),s=[],o=0;o<i;o++)for(var h=0;h<e;h++){for(var l=o*e+h,d=0,c=0;c<a;c++)for(var g=0;g<a;g++){var u=o+c-n,f=h+g-n;if(u>=0&&u<i&&f>=0&&f<e){var p=r[c*a+g];d+=t[u*e+f]*p}}s[l]=2040===d?255:0}return s}(e,t.width,t.height),t.width,t.height),t.width,t.height)),t},Noise:function(t){var e,i=255*this.noise(),r=t.data,a=r.length,n=i/2;for(e=0;e<a;e+=4)r[e+0]+=n-2*n*Math.random(),r[e+1]+=n-2*n*Math.random(),r[e+2]+=n-2*n*Math.random()},Pixelate:function(t){var e,i,r,a,n,s,o,h,l,d,g,u,f,p,v=Math.ceil(this.pixelSize()),m=t.width,_=t.height,y=Math.ceil(m/v),x=Math.ceil(_/v),b=t.data;if(v<=0)c.error("pixelSize value can not be <= 0");else for(u=0;u<y;u+=1)for(f=0;f<x;f+=1){for(a=0,n=0,s=0,o=0,l=(h=u*v)+v,g=(d=f*v)+v,p=0,e=h;e<l;e+=1)if(!(e>=m))for(i=d;i<g;i+=1)i>=_||(a+=b[(r=4*(m*i+e))+0],n+=b[r+1],s+=b[r+2],o+=b[r+3],p+=1);for(a/=p,n/=p,s/=p,o/=p,e=h;e<l;e+=1)if(!(e>=m))for(i=d;i<g;i+=1)i>=_||(b[(r=4*(m*i+e))+0]=a,b[r+1]=n,b[r+2]=s,b[r+3]=o)}},Posterize:function(t){var e,i=Math.round(254*this.levels())+1,r=t.data,a=r.length,n=255/i;for(e=0;e<a;e+=1)r[e]=Math.floor(r[e]/n)*n},RGB:function(t){var e,i,r=t.data,a=r.length,n=this.red(),s=this.green(),o=this.blue();for(e=0;e<a;e+=4)i=(.34*r[e]+.5*r[e+1]+.16*r[e+2])/255,r[e]=i*n,r[e+1]=i*s,r[e+2]=i*o,r[e+3]=r[e+3]},RGBA:function(t){var e,i,r=t.data,a=r.length,n=this.red(),s=this.green(),o=this.blue(),h=this.alpha();for(e=0;e<a;e+=4)i=1-h,r[e]=n*h+r[e]*i,r[e+1]=s*h+r[e+1]*i,r[e+2]=o*h+r[e+2]*i},Sepia:function(t){var e,i,r,a,n=t.data,s=n.length;for(e=0;e<s;e+=4)i=n[e+0],r=n[e+1],a=n[e+2],n[e+0]=Math.min(255,.393*i+.769*r+.189*a),n[e+1]=Math.min(255,.349*i+.686*r+.168*a),n[e+2]=Math.min(255,.272*i+.534*r+.131*a)},Solarize:function(t){var e=t.data,i=t.width,r=4*i,a=t.height;do{var n=(a-1)*r,s=i;do{var o=n+4*(s-1),h=e[o],l=e[o+1],d=e[o+2];h>127&&(h=255-h),l>127&&(l=255-l),d>127&&(d=255-d),e[o]=h,e[o+1]=l,e[o+2]=d}while(--s)}while(--a)},Threshold:function(t){var e,i=255*this.threshold(),r=t.data,a=r.length;for(e=0;e<a;e+=1)r[e]=r[e]<i?0:255}}})}));
// ==ClosureCompiler==
// @compilation_level ADVANCED_OPTIMIZATIONS
// @externs_url http://closure-compiler.googlecode.com/svn/trunk/contrib/externs/maps/google_maps_api_v3_3.js
// ==/ClosureCompiler==

/**
 * @name MarkerClusterer for Google Maps v3
 * @version version 1.0
 * @author Luke Mahe
 * @fileoverview
 * The library creates and manages per-zoom-level clusters for large amounts of
 * markers.
 * <br/>
 * This is a v3 implementation of the
 * <a href="http://gmaps-utility-library-dev.googlecode.com/svn/tags/markerclusterer/"
 * >v2 MarkerClusterer</a>.
 */

/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


/**
 * A Marker Clusterer that clusters markers.
 *
 * @param {google.maps.Map} map The Google map to attach to.
 * @param {Array.<google.maps.Marker>=} opt_markers Optional markers to add to
 *   the cluster.
 * @param {Object=} opt_options support the following options:
 *     'gridSize': (number) The grid size of a cluster in pixels.
 *     'maxZoom': (number) The maximum zoom level that a marker can be part of a
 *                cluster.
 *     'zoomOnClick': (boolean) Whether the default behaviour of clicking on a
 *                    cluster is to zoom into it.
 *     'averageCenter': (boolean) Wether the center of each cluster should be
 *                      the average of all markers in the cluster.
 *     'minimumClusterSize': (number) The minimum number of markers to be in a
 *                           cluster before the markers are hidden and a count
 *                           is shown.
 *     'styles': (object) An object that has style properties:
 *       'url': (string) The image url.
 *       'height': (number) The image height.
 *       'width': (number) The image width.
 *       'anchor': (Array) The anchor position of the label text.
 *       'textColor': (string) The text color.
 *       'textSize': (number) The text size.
 *       'backgroundPosition': (string) The position of the backgound x, y.
 *       'iconAnchor': (Array) The anchor position of the icon x, y.
 * @constructor
 * @extends google.maps.OverlayView
 */
function MarkerClusterer(map, opt_markers, opt_options) {
  // MarkerClusterer implements google.maps.OverlayView interface. We use the
  // extend function to extend MarkerClusterer with google.maps.OverlayView
  // because it might not always be available when the code is defined so we
  // look for it at the last possible moment. If it doesn't exist now then
  // there is no point going ahead :)
  this.extend(MarkerClusterer, google.maps.OverlayView);
  this.map_ = map;

  /**
   * @type {Array.<google.maps.Marker>}
   * @private
   */
  this.markers_ = [];

  /**
   *  @type {Array.<Cluster>}
   */
  this.clusters_ = [];

  this.sizes = [53, 56, 66, 78, 90];

  /**
   * @private
   */
  this.styles_ = [];

  /**
   * @type {boolean}
   * @private
   */
  this.ready_ = false;

  var options = opt_options || {};

  /**
   * @type {number}
   * @private
   */
  this.gridSize_ = options['gridSize'] || 60;

  /**
   * @private
   */
  this.minClusterSize_ = options['minimumClusterSize'] || 2;


  /**
   * @type {?number}
   * @private
   */
  this.maxZoom_ = options['maxZoom'] || null;

  this.styles_ = options['styles'] || [];

  /**
   * @type {string}
   * @private
   */
  this.imagePath_ = options['imagePath'] ||
      this.MARKER_CLUSTER_IMAGE_PATH_;

  /**
   * @type {string}
   * @private
   */
  this.imageExtension_ = options['imageExtension'] ||
      this.MARKER_CLUSTER_IMAGE_EXTENSION_;

  /**
   * @type {boolean}
   * @private
   */
  this.zoomOnClick_ = true;

  if (options['zoomOnClick'] != undefined) {
    this.zoomOnClick_ = options['zoomOnClick'];
  }

  /**
   * @type {boolean}
   * @private
   */
  this.averageCenter_ = false;

  if (options['averageCenter'] != undefined) {
    this.averageCenter_ = options['averageCenter'];
  }

  this.setupStyles_();

  this.setMap(map);

  /**
   * @type {number}
   * @private
   */
  this.prevZoom_ = this.map_.getZoom();

  // Add the map event listeners
  var that = this;
  google.maps.event.addListener(this.map_, 'zoom_changed', function() {
    var zoom = that.map_.getZoom();

    if (that.prevZoom_ != zoom) {
      that.prevZoom_ = zoom;
      that.resetViewport();
    }
  });

  google.maps.event.addListener(this.map_, 'idle', function() {
    that.redraw();
  });

  // Finally, add the markers
  if (opt_markers && opt_markers.length) {
    this.addMarkers(opt_markers, false);
  }
}


/**
 * The marker cluster image path.
 *
 * @type {string}
 * @private
 */
MarkerClusterer.prototype.MARKER_CLUSTER_IMAGE_PATH_ =
    'https://google-maps-utility-library-v3.googlecode.com/svn/trunk/markerclusterer/' +
    'images/m';


/**
 * The marker cluster image path.
 *
 * @type {string}
 * @private
 */
MarkerClusterer.prototype.MARKER_CLUSTER_IMAGE_EXTENSION_ = 'png';


/**
 * Extends a objects prototype by anothers.
 *
 * @param {Object} obj1 The object to be extended.
 * @param {Object} obj2 The object to extend with.
 * @return {Object} The new extended object.
 * @ignore
 */
MarkerClusterer.prototype.extend = function(obj1, obj2) {
  return (function(object) {
    for (var property in object.prototype) {
      this.prototype[property] = object.prototype[property];
    }
    return this;
  }).apply(obj1, [obj2]);
};


/**
 * Implementaion of the interface method.
 * @ignore
 */
MarkerClusterer.prototype.onAdd = function() {
  this.setReady_(true);
};

/**
 * Implementaion of the interface method.
 * @ignore
 */
MarkerClusterer.prototype.draw = function() {};

/**
 * Sets up the styles object.
 *
 * @private
 */
MarkerClusterer.prototype.setupStyles_ = function() {
  if (this.styles_.length) {
    return;
  }

  for (var i = 0, size; size = this.sizes[i]; i++) {
    this.styles_.push({
      url: this.imagePath_ + (i + 1) + '.' + this.imageExtension_,
      height: size,
      width: size
    });
  }
};

/**
 *  Fit the map to the bounds of the markers in the clusterer.
 */
MarkerClusterer.prototype.fitMapToMarkers = function() {
  var markers = this.getMarkers();
  var bounds = new google.maps.LatLngBounds();
  for (var i = 0, marker; marker = markers[i]; i++) {
    bounds.extend(marker.getPosition());
  }

  this.map_.fitBounds(bounds);
};


/**
 *  Sets the styles.
 *
 *  @param {Object} styles The style to set.
 */
MarkerClusterer.prototype.setStyles = function(styles) {
  this.styles_ = styles;
};


/**
 *  Gets the styles.
 *
 *  @return {Object} The styles object.
 */
MarkerClusterer.prototype.getStyles = function() {
  return this.styles_;
};


/**
 * Whether zoom on click is set.
 *
 * @return {boolean} True if zoomOnClick_ is set.
 */
MarkerClusterer.prototype.isZoomOnClick = function() {
  return this.zoomOnClick_;
};

/**
 * Whether average center is set.
 *
 * @return {boolean} True if averageCenter_ is set.
 */
MarkerClusterer.prototype.isAverageCenter = function() {
  return this.averageCenter_;
};


/**
 *  Returns the array of markers in the clusterer.
 *
 *  @return {Array.<google.maps.Marker>} The markers.
 */
MarkerClusterer.prototype.getMarkers = function() {
  return this.markers_;
};


/**
 *  Returns the number of markers in the clusterer
 *
 *  @return {Number} The number of markers.
 */
MarkerClusterer.prototype.getTotalMarkers = function() {
  return this.markers_.length;
};


/**
 *  Sets the max zoom for the clusterer.
 *
 *  @param {number} maxZoom The max zoom level.
 */
MarkerClusterer.prototype.setMaxZoom = function(maxZoom) {
  this.maxZoom_ = maxZoom;
};


/**
 *  Gets the max zoom for the clusterer.
 *
 *  @return {number} The max zoom level.
 */
MarkerClusterer.prototype.getMaxZoom = function() {
  return this.maxZoom_;
};


/**
 *  The function for calculating the cluster icon image.
 *
 *  @param {Array.<google.maps.Marker>} markers The markers in the clusterer.
 *  @param {number} numStyles The number of styles available.
 *  @return {Object} A object properties: 'text' (string) and 'index' (number).
 *  @private
 */
MarkerClusterer.prototype.calculator_ = function(markers, numStyles) {
  var index = 0;
  var count = markers.length;
  var dv = count;
  while (dv !== 0) {
    dv = parseInt(dv / 10, 10);
    index++;
  }

  index = Math.min(index, numStyles);
  return {
    text: count,
    index: index
  };
};


/**
 * Set the calculator function.
 *
 * @param {function(Array, number)} calculator The function to set as the
 *     calculator. The function should return a object properties:
 *     'text' (string) and 'index' (number).
 *
 */
MarkerClusterer.prototype.setCalculator = function(calculator) {
  this.calculator_ = calculator;
};


/**
 * Get the calculator function.
 *
 * @return {function(Array, number)} the calculator function.
 */
MarkerClusterer.prototype.getCalculator = function() {
  return this.calculator_;
};


/**
 * Add an array of markers to the clusterer.
 *
 * @param {Array.<google.maps.Marker>} markers The markers to add.
 * @param {boolean=} opt_nodraw Whether to redraw the clusters.
 */
MarkerClusterer.prototype.addMarkers = function(markers, opt_nodraw) {
  for (var i = 0, marker; marker = markers[i]; i++) {
    this.pushMarkerTo_(marker);
  }
  if (!opt_nodraw) {
    this.redraw();
  }
};


/**
 * Pushes a marker to the clusterer.
 *
 * @param {google.maps.Marker} marker The marker to add.
 * @private
 */
MarkerClusterer.prototype.pushMarkerTo_ = function(marker) {
  marker.isAdded = false;
  if (marker['draggable']) {
    // If the marker is draggable add a listener so we update the clusters on
    // the drag end.
    var that = this;
    google.maps.event.addListener(marker, 'dragend', function() {
      marker.isAdded = false;
      that.repaint();
    });
  }
  this.markers_.push(marker);
};


/**
 * Adds a marker to the clusterer and redraws if needed.
 *
 * @param {google.maps.Marker} marker The marker to add.
 * @param {boolean=} opt_nodraw Whether to redraw the clusters.
 */
MarkerClusterer.prototype.addMarker = function(marker, opt_nodraw) {
  this.pushMarkerTo_(marker);
  if (!opt_nodraw) {
    this.redraw();
  }
};


/**
 * Removes a marker and returns true if removed, false if not
 *
 * @param {google.maps.Marker} marker The marker to remove
 * @return {boolean} Whether the marker was removed or not
 * @private
 */
MarkerClusterer.prototype.removeMarker_ = function(marker) {
  var index = -1;
  if (this.markers_.indexOf) {
    index = this.markers_.indexOf(marker);
  } else {
    for (var i = 0, m; m = this.markers_[i]; i++) {
      if (m == marker) {
        index = i;
        break;
      }
    }
  }

  if (index == -1) {
    // Marker is not in our list of markers.
    return false;
  }

  marker.setMap(null);

  this.markers_.splice(index, 1);

  return true;
};


/**
 * Remove a marker from the cluster.
 *
 * @param {google.maps.Marker} marker The marker to remove.
 * @param {boolean=} opt_nodraw Optional boolean to force no redraw.
 * @return {boolean} True if the marker was removed.
 */
MarkerClusterer.prototype.removeMarker = function(marker, opt_nodraw) {
  var removed = this.removeMarker_(marker);

  if (!opt_nodraw && removed) {
    this.resetViewport();
    this.redraw();
    return true;
  } else {
   return false;
  }
};


/**
 * Removes an array of markers from the cluster.
 *
 * @param {Array.<google.maps.Marker>} markers The markers to remove.
 * @param {boolean=} opt_nodraw Optional boolean to force no redraw.
 */
MarkerClusterer.prototype.removeMarkers = function(markers, opt_nodraw) {
  var removed = false;

  for (var i = 0, marker; marker = markers[i]; i++) {
    var r = this.removeMarker_(marker);
    removed = removed || r;
  }

  if (!opt_nodraw && removed) {
    this.resetViewport();
    this.redraw();
    return true;
  }
};


/**
 * Sets the clusterer's ready state.
 *
 * @param {boolean} ready The state.
 * @private
 */
MarkerClusterer.prototype.setReady_ = function(ready) {
  if (!this.ready_) {
    this.ready_ = ready;
    this.createClusters_();
  }
};


/**
 * Returns the number of clusters in the clusterer.
 *
 * @return {number} The number of clusters.
 */
MarkerClusterer.prototype.getTotalClusters = function() {
  return this.clusters_.length;
};


/**
 * Returns the google map that the clusterer is associated with.
 *
 * @return {google.maps.Map} The map.
 */
MarkerClusterer.prototype.getMap = function() {
  return this.map_;
};


/**
 * Sets the google map that the clusterer is associated with.
 *
 * @param {google.maps.Map} map The map.
 */
MarkerClusterer.prototype.setMap = function(map) {
  this.map_ = map;
};


/**
 * Returns the size of the grid.
 *
 * @return {number} The grid size.
 */
MarkerClusterer.prototype.getGridSize = function() {
  return this.gridSize_;
};


/**
 * Sets the size of the grid.
 *
 * @param {number} size The grid size.
 */
MarkerClusterer.prototype.setGridSize = function(size) {
  this.gridSize_ = size;
};


/**
 * Returns the min cluster size.
 *
 * @return {number} The grid size.
 */
MarkerClusterer.prototype.getMinClusterSize = function() {
  return this.minClusterSize_;
};

/**
 * Sets the min cluster size.
 *
 * @param {number} size The grid size.
 */
MarkerClusterer.prototype.setMinClusterSize = function(size) {
  this.minClusterSize_ = size;
};


/**
 * Extends a bounds object by the grid size.
 *
 * @param {google.maps.LatLngBounds} bounds The bounds to extend.
 * @return {google.maps.LatLngBounds} The extended bounds.
 */
MarkerClusterer.prototype.getExtendedBounds = function(bounds) {
  var projection = this.getProjection();

  // Turn the bounds into latlng.
  var tr = new google.maps.LatLng(bounds.getNorthEast().lat(),
      bounds.getNorthEast().lng());
  var bl = new google.maps.LatLng(bounds.getSouthWest().lat(),
      bounds.getSouthWest().lng());

  // Convert the points to pixels and the extend out by the grid size.
  var trPix = projection.fromLatLngToDivPixel(tr);
  trPix.x += this.gridSize_;
  trPix.y -= this.gridSize_;

  var blPix = projection.fromLatLngToDivPixel(bl);
  blPix.x -= this.gridSize_;
  blPix.y += this.gridSize_;

  // Convert the pixel points back to LatLng
  var ne = projection.fromDivPixelToLatLng(trPix);
  var sw = projection.fromDivPixelToLatLng(blPix);

  // Extend the bounds to contain the new bounds.
  bounds.extend(ne);
  bounds.extend(sw);

  return bounds;
};


/**
 * Determins if a marker is contained in a bounds.
 *
 * @param {google.maps.Marker} marker The marker to check.
 * @param {google.maps.LatLngBounds} bounds The bounds to check against.
 * @return {boolean} True if the marker is in the bounds.
 * @private
 */
MarkerClusterer.prototype.isMarkerInBounds_ = function(marker, bounds) {
  return bounds.contains(marker.getPosition());
};


/**
 * Clears all clusters and markers from the clusterer.
 */
MarkerClusterer.prototype.clearMarkers = function() {
  this.resetViewport(true);

  // Set the markers a empty array.
  this.markers_ = [];
};


/**
 * Clears all existing clusters and recreates them.
 * @param {boolean} opt_hide To also hide the marker.
 */
MarkerClusterer.prototype.resetViewport = function(opt_hide) {
  // Remove all the clusters
  for (var i = 0, cluster; cluster = this.clusters_[i]; i++) {
    cluster.remove();
  }

  // Reset the markers to not be added and to be invisible.
  for (var i = 0, marker; marker = this.markers_[i]; i++) {
    marker.isAdded = false;
    if (opt_hide) {
      marker.setMap(null);
    }
  }

  this.clusters_ = [];
};

/**
 *
 */
MarkerClusterer.prototype.repaint = function() {
  var oldClusters = this.clusters_.slice();
  this.clusters_.length = 0;
  this.resetViewport();
  this.redraw();

  // Remove the old clusters.
  // Do it in a timeout so the other clusters have been drawn first.
  window.setTimeout(function() {
    for (var i = 0, cluster; cluster = oldClusters[i]; i++) {
      cluster.remove();
    }
  }, 0);
};


/**
 * Redraws the clusters.
 */
MarkerClusterer.prototype.redraw = function() {
  this.createClusters_();
};


/**
 * Calculates the distance between two latlng locations in km.
 * @see http://www.movable-type.co.uk/scripts/latlong.html
 *
 * @param {google.maps.LatLng} p1 The first lat lng point.
 * @param {google.maps.LatLng} p2 The second lat lng point.
 * @return {number} The distance between the two points in km.
 * @private
*/
MarkerClusterer.prototype.distanceBetweenPoints_ = function(p1, p2) {
  if (!p1 || !p2) {
    return 0;
  }

  var R = 6371; // Radius of the Earth in km
  var dLat = (p2.lat() - p1.lat()) * Math.PI / 180;
  var dLon = (p2.lng() - p1.lng()) * Math.PI / 180;
  var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(p1.lat() * Math.PI / 180) * Math.cos(p2.lat() * Math.PI / 180) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var d = R * c;
  return d;
};


/**
 * Add a marker to a cluster, or creates a new cluster.
 *
 * @param {google.maps.Marker} marker The marker to add.
 * @private
 */
MarkerClusterer.prototype.addToClosestCluster_ = function(marker) {
  var distance = 40000; // Some large number
  var clusterToAddTo = null;
  var pos = marker.getPosition();
  for (var i = 0, cluster; cluster = this.clusters_[i]; i++) {
    var center = cluster.getCenter();
    if (center) {
      var d = this.distanceBetweenPoints_(center, marker.getPosition());
      if (d < distance) {
        distance = d;
        clusterToAddTo = cluster;
      }
    }
  }

  if (clusterToAddTo && clusterToAddTo.isMarkerInClusterBounds(marker)) {
    clusterToAddTo.addMarker(marker);
  } else {
    var cluster = new Cluster(this);
    cluster.addMarker(marker);
    this.clusters_.push(cluster);
  }
};


/**
 * Creates the clusters.
 *
 * @private
 */
MarkerClusterer.prototype.createClusters_ = function() {
  if (!this.ready_) {
    return;
  }

  // Get our current map view bounds.
  // Create a new bounds object so we don't affect the map.
  var mapBounds = new google.maps.LatLngBounds(this.map_.getBounds().getSouthWest(),
      this.map_.getBounds().getNorthEast());
  var bounds = this.getExtendedBounds(mapBounds);

  for (var i = 0, marker; marker = this.markers_[i]; i++) {
    if (!marker.isAdded && this.isMarkerInBounds_(marker, bounds)) {
      this.addToClosestCluster_(marker);
    }
  }
};


/**
 * A cluster that contains markers.
 *
 * @param {MarkerClusterer} markerClusterer The markerclusterer that this
 *     cluster is associated with.
 * @constructor
 * @ignore
 */
function Cluster(markerClusterer) {
  this.markerClusterer_ = markerClusterer;
  this.map_ = markerClusterer.getMap();
  this.gridSize_ = markerClusterer.getGridSize();
  this.minClusterSize_ = markerClusterer.getMinClusterSize();
  this.averageCenter_ = markerClusterer.isAverageCenter();
  this.center_ = null;
  this.markers_ = [];
  this.bounds_ = null;
  this.clusterIcon_ = new ClusterIcon(this, markerClusterer.getStyles(),
      markerClusterer.getGridSize());
}

/**
 * Determins if a marker is already added to the cluster.
 *
 * @param {google.maps.Marker} marker The marker to check.
 * @return {boolean} True if the marker is already added.
 */
Cluster.prototype.isMarkerAlreadyAdded = function(marker) {
  if (this.markers_.indexOf) {
    return this.markers_.indexOf(marker) != -1;
  } else {
    for (var i = 0, m; m = this.markers_[i]; i++) {
      if (m == marker) {
        return true;
      }
    }
  }
  return false;
};


/**
 * Add a marker the cluster.
 *
 * @param {google.maps.Marker} marker The marker to add.
 * @return {boolean} True if the marker was added.
 */
Cluster.prototype.addMarker = function(marker) {
  if (this.isMarkerAlreadyAdded(marker)) {
    return false;
  }

  if (!this.center_) {
    this.center_ = marker.getPosition();
    this.calculateBounds_();
  } else {
    if (this.averageCenter_) {
      var l = this.markers_.length + 1;
      var lat = (this.center_.lat() * (l-1) + marker.getPosition().lat()) / l;
      var lng = (this.center_.lng() * (l-1) + marker.getPosition().lng()) / l;
      this.center_ = new google.maps.LatLng(lat, lng);
      this.calculateBounds_();
    }
  }

  marker.isAdded = true;
  this.markers_.push(marker);

  var len = this.markers_.length;
  if (len < this.minClusterSize_ && marker.getMap() != this.map_) {
    // Min cluster size not reached so show the marker.
    marker.setMap(this.map_);
  }

  if (len == this.minClusterSize_) {
    // Hide the markers that were showing.
    for (var i = 0; i < len; i++) {
      this.markers_[i].setMap(null);
    }
  }

  if (len >= this.minClusterSize_) {
    marker.setMap(null);
  }

  this.updateIcon();
  return true;
};


/**
 * Returns the marker clusterer that the cluster is associated with.
 *
 * @return {MarkerClusterer} The associated marker clusterer.
 */
Cluster.prototype.getMarkerClusterer = function() {
  return this.markerClusterer_;
};


/**
 * Returns the bounds of the cluster.
 *
 * @return {google.maps.LatLngBounds} the cluster bounds.
 */
Cluster.prototype.getBounds = function() {
  var bounds = new google.maps.LatLngBounds(this.center_, this.center_);
  var markers = this.getMarkers();
  for (var i = 0, marker; marker = markers[i]; i++) {
    bounds.extend(marker.getPosition());
  }
  return bounds;
};


/**
 * Removes the cluster
 */
Cluster.prototype.remove = function() {
  this.clusterIcon_.remove();
  this.markers_.length = 0;
  delete this.markers_;
};


/**
 * Returns the center of the cluster.
 *
 * @return {number} The cluster center.
 */
Cluster.prototype.getSize = function() {
  return this.markers_.length;
};


/**
 * Returns the center of the cluster.
 *
 * @return {Array.<google.maps.Marker>} The cluster center.
 */
Cluster.prototype.getMarkers = function() {
  return this.markers_;
};


/**
 * Returns the center of the cluster.
 *
 * @return {google.maps.LatLng} The cluster center.
 */
Cluster.prototype.getCenter = function() {
  return this.center_;
};


/**
 * Calculated the extended bounds of the cluster with the grid.
 *
 * @private
 */
Cluster.prototype.calculateBounds_ = function() {
  var bounds = new google.maps.LatLngBounds(this.center_, this.center_);
  this.bounds_ = this.markerClusterer_.getExtendedBounds(bounds);
};


/**
 * Determines if a marker lies in the clusters bounds.
 *
 * @param {google.maps.Marker} marker The marker to check.
 * @return {boolean} True if the marker lies in the bounds.
 */
Cluster.prototype.isMarkerInClusterBounds = function(marker) {
  return this.bounds_.contains(marker.getPosition());
};


/**
 * Returns the map that the cluster is associated with.
 *
 * @return {google.maps.Map} The map.
 */
Cluster.prototype.getMap = function() {
  return this.map_;
};


/**
 * Updates the cluster icon
 */
Cluster.prototype.updateIcon = function() {
  var zoom = this.map_.getZoom();
  var mz = this.markerClusterer_.getMaxZoom();

  if (mz && zoom > mz) {
    // The zoom is greater than our max zoom so show all the markers in cluster.
    for (var i = 0, marker; marker = this.markers_[i]; i++) {
      marker.setMap(this.map_);
    }
    return;
  }

  if (this.markers_.length < this.minClusterSize_) {
    // Min cluster size not yet reached.
    this.clusterIcon_.hide();
    return;
  }

  var numStyles = this.markerClusterer_.getStyles().length;
  var sums = this.markerClusterer_.getCalculator()(this.markers_, numStyles);
  this.clusterIcon_.setCenter(this.center_);
  this.clusterIcon_.setSums(sums);
  this.clusterIcon_.show();
};


/**
 * A cluster icon
 *
 * @param {Cluster} cluster The cluster to be associated with.
 * @param {Object} styles An object that has style properties:
 *     'url': (string) The image url.
 *     'height': (number) The image height.
 *     'width': (number) The image width.
 *     'anchor': (Array) The anchor position of the label text.
 *     'textColor': (string) The text color.
 *     'textSize': (number) The text size.
 *     'backgroundPosition: (string) The background postition x, y.
 * @param {number=} opt_padding Optional padding to apply to the cluster icon.
 * @constructor
 * @extends google.maps.OverlayView
 * @ignore
 */
function ClusterIcon(cluster, styles, opt_padding) {
  cluster.getMarkerClusterer().extend(ClusterIcon, google.maps.OverlayView);

  this.styles_ = styles;
  this.padding_ = opt_padding || 0;
  this.cluster_ = cluster;
  this.center_ = null;
  this.map_ = cluster.getMap();
  this.div_ = null;
  this.sums_ = null;
  this.visible_ = false;

  this.setMap(this.map_);
}


/**
 * Triggers the clusterclick event and zoom's if the option is set.
 *
 * @param {google.maps.MouseEvent} event The event to propagate
 */
ClusterIcon.prototype.triggerClusterClick = function(event) {
  var markerClusterer = this.cluster_.getMarkerClusterer();

  // Trigger the clusterclick event.
  google.maps.event.trigger(markerClusterer, 'clusterclick', this.cluster_, event);

  if (markerClusterer.isZoomOnClick()) {
    // Zoom into the cluster.
    this.map_.fitBounds(this.cluster_.getBounds());
  }
};


/**
 * Adding the cluster icon to the dom.
 * @ignore
 */
ClusterIcon.prototype.onAdd = function() {
  this.div_ = document.createElement('DIV');
  if (this.visible_) {
    var pos = this.getPosFromLatLng_(this.center_);
    this.div_.style.cssText = this.createCss(pos);
    this.div_.innerHTML = this.sums_.text;
  }

  var panes = this.getPanes();
  panes.overlayMouseTarget.appendChild(this.div_);

  var that = this;
  google.maps.event.addDomListener(this.div_, 'click', function(event) {
    that.triggerClusterClick(event);
  });
};


/**
 * Returns the position to place the div dending on the latlng.
 *
 * @param {google.maps.LatLng} latlng The position in latlng.
 * @return {google.maps.Point} The position in pixels.
 * @private
 */
ClusterIcon.prototype.getPosFromLatLng_ = function(latlng) {
  var pos = this.getProjection().fromLatLngToDivPixel(latlng);

  if (typeof this.iconAnchor_ === 'object' && this.iconAnchor_.length === 2) {
    pos.x -= this.iconAnchor_[0];
    pos.y -= this.iconAnchor_[1];
  } else {
    pos.x -= parseInt(this.width_ / 2, 10);
    pos.y -= parseInt(this.height_ / 2, 10);
  }
  return pos;
};


/**
 * Draw the icon.
 * @ignore
 */
ClusterIcon.prototype.draw = function() {
  if (this.visible_) {
    var pos = this.getPosFromLatLng_(this.center_);
    this.div_.style.top = pos.y + 'px';
    this.div_.style.left = pos.x + 'px';
  }
};


/**
 * Hide the icon.
 */
ClusterIcon.prototype.hide = function() {
  if (this.div_) {
    this.div_.style.display = 'none';
  }
  this.visible_ = false;
};


/**
 * Position and show the icon.
 */
ClusterIcon.prototype.show = function() {
  if (this.div_) {
    var pos = this.getPosFromLatLng_(this.center_);
    this.div_.style.cssText = this.createCss(pos);
    this.div_.style.display = '';
  }
  this.visible_ = true;
};


/**
 * Remove the icon from the map
 */
ClusterIcon.prototype.remove = function() {
  this.setMap(null);
};


/**
 * Implementation of the onRemove interface.
 * @ignore
 */
ClusterIcon.prototype.onRemove = function() {
  if (this.div_ && this.div_.parentNode) {
    this.hide();
    this.div_.parentNode.removeChild(this.div_);
    this.div_ = null;
  }
};


/**
 * Set the sums of the icon.
 *
 * @param {Object} sums The sums containing:
 *   'text': (string) The text to display in the icon.
 *   'index': (number) The style index of the icon.
 */
ClusterIcon.prototype.setSums = function(sums) {
  this.sums_ = sums;
  this.text_ = sums.text;
  this.index_ = sums.index;
  if (this.div_) {
    this.div_.innerHTML = sums.text;
  }

  this.useStyle();
};


/**
 * Sets the icon to the the styles.
 */
ClusterIcon.prototype.useStyle = function() {
  var index = Math.max(0, this.sums_.index - 1);
  index = Math.min(this.styles_.length - 1, index);
  var style = this.styles_[index];
  this.url_ = style['url'];
  this.height_ = style['height'];
  this.width_ = style['width'];
  this.textColor_ = style['textColor'];
  this.anchor_ = style['anchor'];
  this.textSize_ = style['textSize'];
  this.backgroundPosition_ = style['backgroundPosition'];
  this.iconAnchor_ = style['iconAnchor'];
};


/**
 * Sets the center of the icon.
 *
 * @param {google.maps.LatLng} center The latlng to set as the center.
 */
ClusterIcon.prototype.setCenter = function(center) {
  this.center_ = center;
};


/**
 * Create the css text based on the position of the icon.
 *
 * @param {google.maps.Point} pos The position.
 * @return {string} The css style text.
 */
ClusterIcon.prototype.createCss = function(pos) {
  var style = [];
  style.push('background-image:url(' + this.url_ + ');');
  var backgroundPosition = this.backgroundPosition_ ? this.backgroundPosition_ : '0 0';
  style.push('background-position:' + backgroundPosition + ';');

  if (typeof this.anchor_ === 'object') {
    if (typeof this.anchor_[0] === 'number' && this.anchor_[0] > 0 &&
        this.anchor_[0] < this.height_) {
      style.push('height:' + (this.height_ - this.anchor_[0]) +
          'px; padding-top:' + this.anchor_[0] + 'px;');
    } else if (typeof this.anchor_[0] === 'number' && this.anchor_[0] < 0 &&
        -this.anchor_[0] < this.height_) {
      style.push('height:' + this.height_ + 'px; line-height:' + (this.height_ + this.anchor_[0]) +
          'px;');
    } else {
      style.push('height:' + this.height_ + 'px; line-height:' + this.height_ +
          'px;');
    }
    if (typeof this.anchor_[1] === 'number' && this.anchor_[1] > 0 &&
        this.anchor_[1] < this.width_) {
      style.push('width:' + (this.width_ - this.anchor_[1]) +
          'px; padding-left:' + this.anchor_[1] + 'px;');
    } else {
      style.push('width:' + this.width_ + 'px; text-align:center;');
    }
  } else {
    style.push('height:' + this.height_ + 'px; line-height:' +
        this.height_ + 'px; width:' + this.width_ + 'px; text-align:center;');
  }

  var txtColor = this.textColor_ ? this.textColor_ : 'black';
  var txtSize = this.textSize_ ? this.textSize_ : 11;

  style.push('cursor:pointer; top:' + pos.y + 'px; left:' +
      pos.x + 'px; color:' + txtColor + '; position:absolute; font-size:' +
      txtSize + 'px;');
  return style.join('');
};


// Export Symbols for Closure
// If you are not going to compile with closure then you can remove the
// code below.
window['MarkerClusterer'] = MarkerClusterer;
MarkerClusterer.prototype['addMarker'] = MarkerClusterer.prototype.addMarker;
MarkerClusterer.prototype['addMarkers'] = MarkerClusterer.prototype.addMarkers;
MarkerClusterer.prototype['clearMarkers'] =
    MarkerClusterer.prototype.clearMarkers;
MarkerClusterer.prototype['fitMapToMarkers'] =
    MarkerClusterer.prototype.fitMapToMarkers;
MarkerClusterer.prototype['getCalculator'] =
    MarkerClusterer.prototype.getCalculator;
MarkerClusterer.prototype['getGridSize'] =
    MarkerClusterer.prototype.getGridSize;
MarkerClusterer.prototype['getExtendedBounds'] =
    MarkerClusterer.prototype.getExtendedBounds;
MarkerClusterer.prototype['getMap'] = MarkerClusterer.prototype.getMap;
MarkerClusterer.prototype['getMarkers'] = MarkerClusterer.prototype.getMarkers;
MarkerClusterer.prototype['getMaxZoom'] = MarkerClusterer.prototype.getMaxZoom;
MarkerClusterer.prototype['getStyles'] = MarkerClusterer.prototype.getStyles;
MarkerClusterer.prototype['getTotalClusters'] =
    MarkerClusterer.prototype.getTotalClusters;
MarkerClusterer.prototype['getTotalMarkers'] =
    MarkerClusterer.prototype.getTotalMarkers;
MarkerClusterer.prototype['redraw'] = MarkerClusterer.prototype.redraw;
MarkerClusterer.prototype['removeMarker'] =
    MarkerClusterer.prototype.removeMarker;
MarkerClusterer.prototype['removeMarkers'] =
    MarkerClusterer.prototype.removeMarkers;
MarkerClusterer.prototype['resetViewport'] =
    MarkerClusterer.prototype.resetViewport;
MarkerClusterer.prototype['repaint'] =
    MarkerClusterer.prototype.repaint;
MarkerClusterer.prototype['setCalculator'] =
    MarkerClusterer.prototype.setCalculator;
MarkerClusterer.prototype['setGridSize'] =
    MarkerClusterer.prototype.setGridSize;
MarkerClusterer.prototype['setMaxZoom'] =
    MarkerClusterer.prototype.setMaxZoom;
MarkerClusterer.prototype['onAdd'] = MarkerClusterer.prototype.onAdd;
MarkerClusterer.prototype['draw'] = MarkerClusterer.prototype.draw;

Cluster.prototype['getCenter'] = Cluster.prototype.getCenter;
Cluster.prototype['getSize'] = Cluster.prototype.getSize;
Cluster.prototype['getMarkers'] = Cluster.prototype.getMarkers;

ClusterIcon.prototype['onAdd'] = ClusterIcon.prototype.onAdd;
ClusterIcon.prototype['draw'] = ClusterIcon.prototype.draw;
ClusterIcon.prototype['onRemove'] = ClusterIcon.prototype.onRemove;
function addEvents(){
    commonEvents();
    if(isMobile){
        mobileEvents();
    }else{
        desktopEvents();
    }
}

function commonEvents(){
    $('.newsLink').on('click',function(){
        scrollToElementVertically($('#newsreelsWrapper'),-headerHeight,500);
    });
    $('.dropdownWrapper select').on('change',function(){
        var _value = this.value;
        var $this = $(this);
        if(_value.length){
            var downloadName = $this.find("option:selected").text()
                    .replace(/\s+/g, '-')+
                    '.'+
                    (_value.split('.').pop());

                    if(_value.indexOf('todus.cz') !== -1){
                        $this.parents('.dropdownOuterWrapper')
                        .find('a.borderButton')
                        .attr('href',decodeURIComponent(_value))
                        .attr('download',downloadName)
                        .removeClass('hidden');
                    }else{
                            $this.parents('.dropdownOuterWrapper')
                            .find('a.borderButton')
                            .attr('href',decodeURIComponent(_value))
                            .removeAttr( "download" )
                            .removeClass('hidden');
                    }
            
        }else{
            $(this).parents('.dropdownOuterWrapper').find('a.borderButton').addClass('hidden');
        }
    });
    
    
    $(document).on('click','.showMoreWrapper .borderButton',function(){
        var thisButton = $(this);
        if(thisButton.hasClass('ajax')){
            $.get( thisButton.attr('href'), function( data ) {
                $('#newsreelsWrapper').append(data);
                if($('#newsreelsWrapper .newsreel.hidden').length < 1){
                    thisButton.remove();
                }else{
                    thisButton.removeClass('ajax').removeAttr('href');
                }
                resizeEvent();
            });
            return false;
        }else{
            if($('#newsreelsWrapper .newsreel.hidden').length > 0){
                $('#newsreelsWrapper .newsreel.hidden').removeClass('hidden');
                resizeEvent();
                if($('#newsreelsWrapper .newsreel.hidden').length < 1){
                    $('.showMoreWrapper .borderButton').remove();
                }
                return false;
            }
            if($('.designer .relatedProducts .column-1-3.hidden').length > 0){
                $('.designer .relatedProducts .column-1-3.hidden').removeClass('hidden');
                resizeEvent();
                if($('.designer .relatedProducts .column-1-3.hidden').length < 1){
                    $('.showMoreWrapper').remove();
                }
                return false;
            }
            if($('.blogList .post.hidden').length > 0){
                $('.blogList .post.hidden').removeClass('hidden');
                resizeEvent();
                if($('.blogList .post.hidden').length < 1){
                    $('.showMoreWrapper').remove();
                }
                return false;
            }
            
        }
        
    });
    
    $('.mainNewsreelHeader .close').on('click',function(){
            $('.mainNewsreelWrapper').removeClass('shown');
            setTimeout(function(){
                $('.mainNewsreelWrapper').remove();
            },1000);
            return false;
    });
    
    $('#country').on('change',function(){
       var countryCode = this.value;
       var countryUrl = "";
       if(countryCode.length > 0){
           countryUrl = "?country="+countryCode;
       }
       window.location.href = '//' + location.host + location.pathname + countryUrl;
       return false;
    });
    
    $('.detailViewWrapper .mainImage').on('click',function(){
        if($('.detailViewWrapper .columns.images').first().length){
            scrollToElementVertically($('.detailViewWrapper .columns.images').first(),-(headerHeight+20),500);
        }
    });
    
    $('.locationsWrapper .location').on('click',function(){
       var locationId = parseInt($(this).attr('data-id'));
       scrollToElementVertically($('#map-canvas'),-(headerHeight),500);
       setTimeout(function(){
        if(map.zoom != mapCurrentZoom){
            map.setZoom(mapCurrentZoom);
        }
        setPointCurrent(locationId);
       },501);
    });
    
    
    $('.menuWrapper .current span').on('click',function(){
        if($('.menuWrapper').hasClass('horizon-swiper')){
            $('.menuWrapper.horizon-swiper .horizon-inner').scrollTo($('.menuWrapper .langs').last(),{duration: 300});
        }
    });
    $('.materialInfoLink[data-material-id]').on('click',function(){
        //$('.materialInfoLink[data-material-id]').removeClass('current');
        //$('.partWrapper > .columns > .materialDetail').addClass('hidden');
        var materialId = $(this).attr('data-material-id');
        if($(this).hasClass('current')){
            $(this).removeClass('current');
            $('.materialDetail[data-material-id="'+materialId+'"]').slideUp(1000);
            //addClass('hidden');
            resizeEvent();
        }else{
            $(this).parents('.partWrapper').find('.materialDetail').hide(0);
            $(this).parents('.partWrapper').find('.materialInfoLink').removeClass('current');
            $(this).addClass('current');
            
            $(this).parents('.partWrapper').find('.materialDetail[data-material-id="'+materialId+'"]')
                    .slideDown(1000);
                    //.removeClass('hidden');
            resizeEvent();
        }
    });
    
    $('.materialInfoLink[data-color-id]').on('click',function(){
//        $('.materialInfoLink[data-color-id]').removeClass('current');
//        var colorId = $(this).addClass('current').attr('data-color-id');
//        $(this).parents('.materialSubTypesWrapper').find('.colorDetail').addClass('hidden');
//        $(this).parents('.materialSubTypesWrapper').find('.colorDetail[data-color-id="'+colorId+'"]').removeClass('hidden');
//        resizeEvent();
    });
    
    $('.materialInfoLink[data-type-id]').on('click',function(){
        $('.materialInfoLink[data-type-id]').removeClass('current');
        $(this).addClass('current');
        var typeId = $(this).attr('data-type-id');
        $(this).parents('.materialSubTypesWrapper').find('.typeDetail').addClass('hidden');
        $(this).parents('.materialSubTypesWrapper').find('.typeDetail[data-type-id="'+typeId+'"]').removeClass('hidden');
        resizeEvent();
    });
    
    if($('#HPVideo').length){
        $('#HPVideoControl').on('click',function(){
            if($('#HPVideoControl').hasClass('playing')){
              Player.pause();
              $('#HPVideoControl').removeClass('playing');
            }else{
              Player.play();
              $('#HPVideoControl').addClass('playing');
            }
          });
    }
    
}



function desktopEvents(){
    
}

function mobileEvents(){
    if($('#slides').length > 0){
        $("#slides").swipe( {
            //Generic swipe handler for all directions
            swipe:function(event, direction, distance, duration, fingerCount, fingerData) {
                console.log('swipe '+direction);
                if(direction == 'right'){
                    $('#slides').superslides('stop');
                    $('#slides').superslides('animate','next');
                }else{
                    $('#slides').superslides('stop');
                    $('#slides').superslides('animate','prev');
                }
            }
        });
    }
}




//geolocation autocomplete

var autocomplete;

function initAutocomplete() {
  // Create the autocomplete object, restricting the search to geographical
  // location types.
  var options = {
    types: ['(cities)']
  };
  var selectedCountry = getUrlParameter('country');
  if(selectedCountry){
      options.componentRestrictions = {country: selectedCountry};
  }
  
  autocomplete = new google.maps.places.Autocomplete(
      /** @type {!HTMLInputElement} */(document.getElementById('autocomplete')),
      options);

  autocomplete.addListener('place_changed', panToAddress);
}

// [START region_fillform]
function panToAddress() {
  // Get the place details from the autocomplete object.
  var place = autocomplete.getPlace();
  if (!place.geometry) {
      window.alert("Sorry we cannot find your address");
      return;
  }
  if (place.geometry.viewport) {
      if(findClosestMarker(place.geometry.viewport.getCenter())){}else{
          map.fitBounds(place.geometry.viewport);
      }
  } else {
      if(findClosestMarker(place.geometry.location)){}else{
          map.setCenter(place.geometry.location);
      }
  }

  
}

function rad(x) {return x*Math.PI/180;}
function findClosestMarker( location ) {
    console.log(location);
    var lat = location.lat();
    var lng = location.lng();
    var R = 6371; // radius of earth in km
    var distances = [];
    var closest = -1;
    for( i=0;i<allMarkers.length; i++ ) {
        var mlat = allMarkers[i].position.lat();
        var mlng = allMarkers[i].position.lng();
        var dLat  = rad(mlat - lat);
        var dLong = rad(mlng - lng);
        var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
            Math.cos(rad(lat)) * Math.cos(rad(lat)) * Math.sin(dLong/2) * Math.sin(dLong/2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
        var d = R * c;
        distances[i] = d;
        if ( closest == -1 || d < distances[closest] ) {
            closest = i;
        }
    }
    if(closest > -1){
        setTimeout(function(){
        if(map.zoom != mapCurrentZoom){
            map.setZoom(mapCurrentZoom);
        }
        bindInfoWindow(allMarkers[closest], map);
       },501);
        
        return true;
    }
    return false;
}
var allMarkers = [];
var points = [];
var mapZoom = 5;
var map;
var mapCurrentZoom = 9;
var mapInfoWindow = null;
var currentPointId = 0;

function renderMap() {
        
    
        var selectedCountry = getUrlParameter('country');
        if(!selectedCountry){
            mapZoom = 2;
        }
        var mapStyle =[
            {
              "stylers": [
                { "saturation": -100 }
              ]
            }
          ];
	// var
//	var $markers = $el.find('.marker');

	// vars
        var draggableOption = (isMobile) ? false : true; 
        
	var args = {
		zoom		: mapZoom,
		center		: new google.maps.LatLng(0, 0),
		mapTypeId	: google.maps.MapTypeId.ROADMAP,
                mapTypeControl  : false,
                scrollwheel     : false,
                draggable       : draggableOption,
                disableDoubleClickZoom: false
	};

	// create map	        	
	map = new google.maps.Map( $('#map-canvas').get(0), args);
        map.setOptions({styles: mapStyle});
        
    
        
        mapInfoWindow =  new google.maps.InfoWindow({
		content: ''
	});

        initAutocomplete();

}

function mountPoints(){
    
    setMapOnAll(null);
    allMarkers = [];
    points = [];
            var isCurrent = false;
            var lowestLat = 10000;
            var highestLat = -10000;
            var lowestLong = 10000;
            var highestLong = -10000;
       $('.locationsWrapper .location').each(function(){
       var point = {};
       
       point.name = $(this).attr('data-title');
       point.id = $(this).attr('data-id');
       point.latitude = $(this).attr('data-lat');
       point.longitude = $(this).attr('data-lng');
       point.wysiwygContent = $(this).find('.locationInfo').html();
       point.current = (point.id == currentPointId) ? true : false;
       point.type = $(this).attr('data-type');
       
       
       
       if(!point.current){
           if(parseFloat(point.latitude) > highestLat){
                highestLat = point.latitude;
            }
            if(parseFloat(point.latitude) < lowestLat){
                lowestLat = point.latitude;
            }
            if(parseFloat(point.longitude) > highestLong){
                highestLong = point.longitude;
            }
            if(parseFloat(point.longitude) < lowestLong){
                lowestLong = point.longitude;
            }
       }else{
            isCurrent = true;
       }
       placeLocation(point);
       points.push(point);
    });
    if(!isCurrent){
        var averageLat = (parseFloat(highestLat)+parseFloat(lowestLat))/2;
        var averageLong = (parseFloat(highestLong)+parseFloat(lowestLong))/2;
        var loc = new google.maps.LatLng(averageLat, averageLong);
        map.setCenter(loc);
        map.setZoom(mapZoom);
    }
    
    var clusterImageUrl = 'http://'+document.location.hostname+'/themes/wok/css/frontend/img/' + 'map_point_1@2x.png';
            
    var markerCluster = new MarkerClusterer(map, allMarkers, {
          //maxZoom: zoom,
          //gridSize: size,
                styles: [{
              url: clusterImageUrl,
              height: 58,
              width: 36,
              anchor: [10, 0],
              textColor: '#ffffff',
              textSize: 16
            }]
        });           
                    
}



function returnMarkerIco(point) {
    var domain = 'http://'+document.location.hostname+'/themes/wok/css/frontend/img/';
    var url = domain + 'map_point';
    var size = new google.maps.Size(18, 29);
    
    url = url+'_'+point.type;
    if(point.current){
        url = url+'_current';
    }
    

    if(window.devicePixelRatio > 1.5){
        url = url + '@2x';
        size = new google.maps.Size(36, 58);
    }
    var image = {
        url: url+'.png',
        size: size,
        scaledSize: new google.maps.Size(18, 29),
        origin: new google.maps.Point(0,0),
        anchor: new google.maps.Point(9, 29)
    };
    return image;
}

function placeLocation(point) {
  if(parseFloat(point.latitude) !== 0 && parseFloat(point.longitude) !== 0){
    var loc = new google.maps.LatLng(point.latitude, point.longitude);
    
    var pointMarker = new google.maps.Marker({
      position: loc,
      map: map,
      title: point.name,
      //clickable: true,
      icon: returnMarkerIco(point),
      point: point,
//      info: new google.maps.InfoWindow({
//        content: getInfo(point)
//      })
    });
    
    
    google.maps.event.addListener(pointMarker, 'click', function() {
        //window.location.href = point.link;
        //pointMarker.info.open(map, pointMarker);
          
        setPointCurrent(pointMarker.point.id);
        
    });
    
    
    if(point.current){
        map.setCenter(loc);
        map.setZoom(mapCurrentZoom);
        bindInfoWindow(pointMarker);
    }
    allMarkers.push(pointMarker);
    
  }
  
}

function setMapOnAll(map) {
  for (var i = 0; i < allMarkers.length; i++) {
    allMarkers[i].setMap(map);
  }
}

function setPointCurrent(id){
    for (var i = 0; i < allMarkers.length; i++) {
        if(allMarkers[i].point.id == id){
            //allMarkers[i].info.open(map, allMarkers[i]);
            bindInfoWindow(allMarkers[i], map);
        }
    }
    
//    currentPointId = id;
//    mountPoints();
//    $('.locationsWrapper .location').removeClass('current');
//    $('.locationsWrapper .location[data-id="'+currentPointId+'"]').addClass('current');
}





function bindInfoWindow(marker) { 
                map.setCenter(marker.position);
                mapInfoWindow.close();
//                var contentText = (getInfo(marker.point));
//		mapInfoWindow.setContent(contentText); 
//                mapInfoWindow.setPosition(marker.position);
//		mapInfoWindow.open(map); 
                
                var content = getInfo(marker.point);
                mapInfoWindow = new google.maps.InfoWindow({
                content: content, 
                position: marker.position,
                pixelOffset: new google.maps.Size(0, -29),
                 });
                mapInfoWindow.open(map);
                
} 

function getInfo(point){
    return '<div class="mapInfoWindowWrapper lightFont"><h3 class="mediumFont">'+
            point.name+
            '</h3><div>'+
            point.wysiwygContent+
            '</div></div>';
}

function addPlugins(){
    if($('#slides').length > 0){
        $('#slides').superslides({
                play: 5000,
                inherit_width_from: '#slides',
                animation: 'fade'
//                pagination: false
            });
            //$('#slides').superslides('stop');
            $("#slides .one-slide-wprapper").swipe( {
                swipeStatus: horizontalSwipe,
                allowPageScroll: "vertical",
                excludedElements: 'button, input, select, textarea, .noSwipe',
                threshold:100,
                fingers:'all'
              });
        $('#slides .slides-container .one-slide-wprapper').first().imagesLoaded( { background: true }, function() {
            console.log("play slideshow");
            $('#slides').superslides('play');
            
            $('#slidesWrapper .slides-navigation .next').on('click',function(){
                nextSlide();
                return false;
            });
            $('#slidesWrapper .slides-pagination a').on('click',function(){
                setTimeout(function(){
                    $('#slides').superslides('stop');
                },1000);
            });
            $('#slidesWrapper .slides-navigation .prev').on('click',function(){
                prevSlide();
                return false;
            });
        });
            
        }
        if($('*[data-lightbox]').length){
//            lightbox.option({
//                'positionFromTop': 80,
//                'showImageNumberLabel': false
//            });
        }
        if($('#map-canvas').length > 0){
            renderMap();
            mountPoints();
        }
        setTimeout(function(){
         resizeEvent();
        },500);
}

function playSlideshow(){
    if($('#slides').length > 0){
            $('#slides').superslides('play');
        }
}


function nextSlide(){
    $('#slides').superslides('stop');
                $('#slides').superslides('animate','next');
}

function prevSlide(){
           $('#slides').superslides('stop');
                $('#slides').superslides('animate','prev');
}

function horizontalSwipe(event, phase, direction, distance){
                  if(direction == 'left'){
                      nextSlide();
                      return false;
                  }else if(direction == 'right'){
                      prevSlide();
                      return false;
                  }
}
function checkWindowSize(){
    var w=window,
            d=document,
            e=d.documentElement,
            g=d.getElementsByTagName('body')[0];
            viewportWidth=
                    //w.innerWidth||e.clientWidth||
            g.clientWidth,
            viewportHeight=w.innerHeight||e.clientHeight||g.clientHeight;
    if(viewportWidth < 1000){
        headerHeight = 0;
    }else{
        headerHeight = $('#header').outerHeight();
    }
    
   
}

function resizeEvent(){
    checkWindowSize();
    basicResize();
    
    if(isMobile){
        resizeMobile();
    }else{
        resizeDesktop();
    }
    
    dependencyResize();
}





function basicResize(){
    if(viewportWidth < 1000){//swipe menus
        if($('.submenuWrapper .secondLevel li').length && $('.submenuWrapper .secondLevel .horizon-outer').length < 1){//init if not
            $('.submenuWrapper .secondLevel').addClass('horizon-swiper');
            $('.submenuWrapper .secondLevel').horizonSwiper({
                item : "li",
                arrows : false 
            });
        }
        if($('.submenuWrapper .thirdLevel li').length && $('.submenuWrapper .thirdLevel .horizon-outer').length < 1){
            $('.submenuWrapper .thirdLevel').addClass('horizon-swiper');
            $('.submenuWrapper .thirdLevel').horizonSwiper({
                item : "li",
                arrows : false 
            });
        }
        if($('.menuWrapper li').length && $('.menuWrapper .horizon-outer').length < 1){
            $('.menuWrapper').addClass('horizon-swiper');
            $('.menuWrapper').horizonSwiper({
                item : "li",
                arrows : false 
            });
        }
        
        
        if($('.menuWrapper li').length){
            $('.menuWrapper').addClass('horizon-swiper');
//            if($('.menuWrapper .current').length){
//                $('.secondLevel.horizon-swiper .horizon-inner').scrollTo($('.submenuWrapper .secondLevel .current'),{duration: 0});
//            }
        }
        if($('.submenuWrapper .secondLevel li').length){
            $('.submenuWrapper .secondLevel').addClass('horizon-swiper');
            if($('.submenuWrapper .secondLevel .current').length){
                $('.secondLevel.horizon-swiper .horizon-inner').scrollTo($('.submenuWrapper .secondLevel .current'),{duration: 300});
            }
        }
        if($('.submenuWrapper .thirdLevel li').length){
            $('.submenuWrapper .thirdLevel').addClass('horizon-swiper');
            if($('.submenuWrapper .thirdLevel .current').length){
                $('.thirdLevel.horizon-swiper .horizon-inner').scrollTo($('.submenuWrapper .thirdLevel .current'),{duration: 300});
            }
        }
        if($('.mainImage .titleWrapper').length && $('.mobile.titleWrapper h1').length < 1){
            $('.mobile.titleWrapper').html($('.mainImage .titleWrapper').html());
        }
        
    }else{
        
        if($('.menuWrapper li').length){
            $('.menuWrapper').removeClass('horizon-swiper');
        }
        if($('.submenuWrapper .secondLevel li').length){
            $('.submenuWrapper .secondLevel').removeClass('horizon-swiper');
        }
        if($('.submenuWrapper .thirdLevel li').length){
            $('.submenuWrapper .thirdLevel').removeClass('horizon-swiper');
        }
    }
    
    if($('.pageId8').length){
            $('.pageDetailWrapper').css('min-height',$('.pagePerex').height());
        }
    
    
    if($('#slides').length > 0){
        var slideshowHeight = (viewportHeight > (viewportWidth/1.75)) ? (viewportWidth/1.75) : viewportHeight;
        var sliderHeight = Math.ceil(slideshowHeight-(2*headerHeight));
        if(viewportWidth/viewportHeight > 1.2){
            slideshowHeight = viewportHeight;
            sliderHeight = Math.ceil(slideshowHeight-(2*headerHeight));
        }
        $('#slides').css('max-height',sliderHeight+'px');
        $('#slidesWrapper .slides-navigation a.fontello').css('line-height',sliderHeight+'px');
    }
    if($('.singleImageLink').length > 0){
        var sliderHeight = (viewportHeight-(2*headerHeight));
        $('.singleImageLink').css('height',sliderHeight+'px');
    }
    
    if($('.mainImageInnerWrapper img').length){
        $('.itemDetail .mainImageInnerWrapper .imageLoader').remove();
        $('.mainImageInnerWrapper img').css('max-height',viewportHeight - headerHeight);
    }
    
    //$('#content').css('min-height',viewportHeight - headerHeight);
    
    $('.resizeRatio23').each(function(){
        var imgHeight = Math.ceil(($(this).width()/3)*2);
        $(this).css('height',imgHeight);
    });
    $('.resizeRatio12').each(function(){
        var imgHeight = Math.ceil($(this).width()/2);
        $(this).css('height',imgHeight);
    });
    $('.resizeRatio14').each(function(){
        var imgHeight = Math.ceil($(this).width()/4);
        $(this).css('height',imgHeight);
    });
    
    $('.diningLink.leasureLikeLink').css('right',-$('.diningLink.leasureLikeLink').outerWidth());
    var emptySpace = 0;
    if(viewportWidth > 1120){
        emptySpace = viewportWidth - 160 - (6 * $('.bottomMenuItemsWrapper').width());
    }
    $('.textFooterColumn.emptyColumn').css('width', emptySpace+'px');
    var headerPaddingBottom = 60;
    $('#footer').css('padding-bottom', headerPaddingBottom);
    if($('body').height() < viewportHeight){
        var footerHeight = viewportHeight - $('body').height();
        $('#footer').css('padding-bottom',  headerPaddingBottom + footerHeight);
    }
}

function dependencyResize(){
    if($('#slides').length > 0){
        $('#slides').superslides('resized');
    }
    if($('.mainNewsreelWrapper').length > 0){
        $('.mainNewsreelContent').css('min-height',viewportHeight - (2*headerHeight));
        if(viewportWidth < 1000){
            $('.mainNewsreelContent').css('min-height',0);
        }
    }
    
    
    
    
}

function resizeDesktop(){
    
}

function resizeMobile(){
    
}

function scrolled(){
    var currentTime = new Date().getTime();
    var st = $(this).scrollTop();
    if(
            (Math.abs(lastScrolledTime - currentTime) > 10)){
            var viewportHeightWoutMenu = viewportHeight-80;
            var scrollDiff = ((viewportHeightWoutMenu-st) > 0) ? ((viewportHeightWoutMenu-st)/viewportHeight) :0;
            $('.diningLink.top,.leisureLink.top').css('opacity',scrollDiff);
            if(scrollDiff == 0 && $(window).scrollTop() > 10){
                $('.diningLink.top,.leisureLink.top').css('display','none');
            }else{
                $('.diningLink.top,.leisureLink.top').css('display','block');
            }
            if($('.pageId4').length || $('.pageId5').length){
                var color = $('body').css('background');
                if(($('#slidesWrapper').outerHeight() + $('.collectionPageContentWrapper').outerHeight()) < st){
                    if(!$('#header').hasClass('white')){
                        $('#header').addClass('white');
                    }
                }else{
                    $('#header').removeClass('white');
                }
            }
            
    }
    
    lastScrollTop = st;
    lastScrolledTime = new Date().getTime();
}

function scrollToTop(){
    $(window).scrollTop(0);
}

function scrollToInt(fromTop){
    $(window).scrollTop(parseInt(fromTop));
}



function isScrolledIntoView(elem)
{
    if(elem.length > 0){
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();

        var elemTop = elem.offset().top;
        
        var elemBottom = elemTop + elem.height();

        return (((elemBottom) <= docViewBottom) && ((elemTop) >= (docViewTop)));
    }
}

function scrollToElementVertically(el,offset,duration){
    var completeCalled = false;
    if(el.length){
        var elTopPos = el.offset().top;
        elTopPos = elTopPos + (offset);
        $("html, body").animate(
            { scrollTop: elTopPos },
            duration,
            //{
                //complete : 
                function(){
                    if(!completeCalled){
                        completeCalled = true;
                    }
                }
            //}
        );
    }
}

//window events

$(document).ready(function() {
    init();
});

$(window).resize(function() {
    resizeEvent();
});

$(window).load(function() {
  resizeEvent();
  startLoadHoverImages();
  resizeEvent();
  scrolled();
  
  
});

$(window).scroll(function() {
  scrolled();
});

//window events


function init(){
    checkWindowSize();
    addEvents();
    addPlugins();
    adjustDetails(true);
    resizeEvent();
}

function adjustDetails(init){
    if(init){
        //remove leisure and dining
        
        
        $('#content .catalogList:last').addClass('last');
        $('#footer').removeClass('hidden');
        if($('.catalogItemDetail').length){
            $('li[data-object-id="47"]').addClass('current');
        }
        if($('.newsDetailWrapper').length){
            $('li[data-object-id="69"]').addClass('current');
        }
        if($('.materialDetail.hidden').length){
            $('.materialDetail.hidden').removeClass('hidden').hide(1);
        }
        if($(".lazy").length){
            if(viewportWidth > 700){
                $(".lazy").lazyload({
                    //effect : "fadeIn",
                    threshold : 200
                });
            }else{
                
                $(".lazy").each(function(){
                    var lazyThis = $(this);
                    if(lazyThis.is( "img" )){
                        if(lazyThis.attr('src') != undefined){
                            lazyThis.addClass('loaded');
                        }else{
                            lazyThis.attr('src',lazyThis.attr('data-original'));
                            lazyThis.addClass('loaded');
                        }
                    }else{
                        if(lazyThis.css('background-image') != 'none'){
                            lazyThis.addClass('loaded');
                        }else{
                            lazyThis.css('background-image','url('+lazyThis.attr('data-original')+')');
                            lazyThis.addClass('loaded');
                        }
                    }
                    
                });
            }
            var currentScrollTop = $(window).scrollTop();
            $(window).scrollTop(currentScrollTop+5).scrollTop(currentScrollTop);
        }
        
        if($('.materialInfoContent').length){
            $('.materialInfoContent').hide(1);
        }
        
        if($('[data-vimeo-id]').length){
            $('[data-vimeo-id]').each(function(){
                vimeoLoadThumb(this);
            });
            
            $('[data-vimeo-id]').on('click',function(){
                
               popupVimeo(this);
            });
        }
        
    }
    if($('.modal.oninit').length > 0){
            var $modal = $('.modal.oninit').first();
            $modal.removeClass('hidden');
            $modal.modal();
            $modal.css('max-height',(viewportHeight - 200));
            $.modal.resize();
            if($modal.find('div').first().outerHeight() > $modal.outerHeight()){
                $('.modal').css('margin-top','-'+Math.floor((viewportHeight - 200)/2));
            }
            
        }
    $('#slidesWrapper nav.slides-navigation,.leasureLikeLink,.leisureLink').animate({
    opacity: 1
  }, 500, function() {
    if($('.mainNewsreelWrapper').length){
        $('.mainNewsreelWrapper').addClass('shown');
    }
  });
    
    
}


function vimeoLoadThumb(e){    
    console.log('vimeoLoadingThumb',e);
    var id = $(e).attr('data-vimeo-id');
    
    $.getJSON( "http://vimeo.com/api/v2/video/" + id + ".json", function( data ) {
        console.log('showVimeoThumb',data);
        $('[data-vimeo-id="'+data[0].id+'"]').css('background-image','url('+data[0].thumbnail_large+')');
    });
}


function popupVimeo(e){
    console.log(e);
}

function loadMore(){
    if(!$('#loadMore').hasClass('loading')){
        $('#loadMore').addClass('loading');
        $('#loadMore.loading').text('');
        var url = $('#loadMore').attr('href');
        mountMore(url);
    }
}

function mountMore(url){
  $.ajax({
        url: url
  })
  .done(function(data) {
    $(data).insertAfter('#loadMore.loading');
    $('#loadMore.loading').remove();
    resizeEvent();
  });
}


function getTime() {
    var d = new Date();
    var h = addZero(d.getHours());
    var m = addZero(d.getMinutes());
    var s = addZero(d.getSeconds());
    return (h + ":" + m + ":" + s);
}

function addZero(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

function searchFor(){
    var q = $('#searchInput').val();
    if(q.length > 2){
        $.ajax({
                url: '/?q='+q
          })
          .done(function(data) {
            console.log(data);
          });
    }
}


function addMap(){
    
        var latlng = new google.maps.LatLng(latLngs[siteID]["lat"],latLngs[siteID]["lng"]);

	// Creating an object literal containing the properties we want to pass to the map
	var options = {
		zoom: 15, // This number can be set to define the initial zoom level of the map
		center: latlng,
		mapTypeId: google.maps.MapTypeId.ROADMAP // This value can be set to define the map type ROADMAP/SATELLITE/HYBRID/TERRAIN
	};
	// Calling the constructor, thereby initializing the map
	map = new google.maps.Map(document.getElementById('map_div'), options);
        map.setOptions({styles: mapStyle});
	// Define Marker properties
	var image = new google.maps.MarkerImage(imgPath+'marker_'+siteID+'.png');

	// Add Marker
	var marker1 = new google.maps.Marker({
		position: latlng,
		map: map,
		icon: image // This path is the custom pin to be shown. Remove this line and the proceeding comma to use default pin
	});

	// Add listener for a click on the pin
	google.maps.event.addListener(marker1, 'click', function() {
            window.location.href = addressLinks[siteID];
	});

}


function startLoadHoverImages(){
    $('.productList a').each(function(){
        var attr = $(this).find('.image').first().attr('data-hover-img');
        if(typeof attr !== typeof undefined && attr !== false){
            $('body').append('<img src="'+attr+'" style="position: fixed;top: -10px; left: -10px; width: 1px; height: 1px;" />');
        }
    });
}

var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
};


const plannerAssetsFolder = "";
const plannerImagesFolder = plannerAssetsFolder + "images/";
const plannerIconsFolder = plannerAssetsFolder + "icons/";

const plannerConfig = {
    pixelsPerMeter: 80,
    artboardSize: [10, 6],
    gridStep: 0.2,
    placeStep: 0.2,
    images: [
        { file: "BS1.png",          size: [0.8,  0.8],  type: "seat",         code: "BS1-A",        price: 799,  priceCZK: 20500,  name: "(0.8x0.8m)", parts: [0]},
        { file: "BS2.png",          size: [1.6,  0.8],  type: "seat",         code: "BS2-A",        price: 1329, priceCZK: 33900,  name: "(1.6x0.8m)", parts: [1]},
        { file: "BS3.png",          size: [2.4,  0.8],  type: "seat",         code: "BS3-A",        price: 1869, priceCZK: 47700,  name: "(2.4x0.8m)", parts: [2]},
        { file: "BA1.png",          size: [0.93, 0.93], type: "corner-left",  code: "BA1-A",        price: 899,  priceCZK: 22900,  name: "(0.8x0.8m)", parts: [3]},
        { file: "BA2-L.png",        size: [1.76, 0.93], type: "corner-left",  code: "BA2L-A",       price: 1269, priceCZK: 32400,  name: "(1.6x0.8m)", parts: [4]},
        { file: "BA2-R.png",        size: [1.76, 0.93], type: "corner-right", code: "BA2R-A",       price: 1269, priceCZK: 32400,  name: "(1.6x0.8m)", parts: [5]},
        { file: "BS1+BA1.png",      size: [0.93, 0.93], type: "complex",      code: "BS1+BA1",      price: 1698, priceCZK: 43400,  name: "(0.8x0.8m)", offset:[-0.10, -0.11,     0,     0], parts: [0, 3],    partsPos:[{dx:0,   dy:0, r: 0}, {dx:-0.12, dy:-0.12, r: 0}]},
        { file: "BS2+BA1.png",      size: [1.7,  0.93], type: "complex",      code: "BS2+BA1",      price: 2228, priceCZK: 56800,  name: "(1.6x0.8m)", offset:[    0, -0.13, -0.10,     0], parts: [1, 3],    partsPos:[{dx:0,   dy:0, r: 0}, {dx: 1.72, dy:-0.12, r:90}]},
        { file: "BS2+BA2L.png",     size: [1.76, 0.93], type: "complex",      code: "BS2+BA2L",     price: 2598, priceCZK: 66300,  name: "(1.6x0.8m)", offset:[-0.05, -0.13, -0.11,     0], parts: [1, 5],    partsPos:[{dx:0,   dy:0, r: 0}, {dx:-0.05, dy:-0.12, r: 0}]},
        { file: "BS2+BA2R.png",     size: [1.76, 0.93], type: "complex",      code: "BS2+BA2R",     price: 2598, priceCZK: 66300,  name: "(1.6x0.8m)", offset:[-0.10, -0.13, -0.06,     0], parts: [1, 4],    partsPos:[{dx:0,   dy:0, r: 0}, {dx:-0.12, dy:-0.12, r: 0}]},
        { file: "BS2+BA1+BA1.png",  size: [1.86, 0.93], type: "complex",      code: "BS2+BA1+BA1",  price: 3127, priceCZK: 79700,  name: "(1.6x0.8m)", offset:[-0.12, -0.11, -0.14, -0.02], parts: [1, 3, 3], partsPos:[{dx:0,   dy:0, r: 0}, {dx:-0.12, dy:-0.12, r: 0}, {dx: 1.72, dy:-0.12, r: 90}]},
        { file: "BS2+BS2+BA2L.png", size: [2.55, 1.76], type: "complex",      code: "BS2+BS2+BA2L", price: 3927, priceCZK: 100200, name: "(2.4x1.6m)", offset:[ 0.01, -0.14, -0.16, -0.02], parts: [1, 1, 5], partsPos:[{dx:0,   dy:0, r: 0}, {dx: 2.4,  dy:0,     r:90}, {dx: 0.75, dy:-0.12, r:  0}]},
        { file: "BS2+BS2+BA2R.png", size: [2.55, 1.76], type: "complex",      code: "BS2+BS2+BA2R", price: 3927, priceCZK: 100200, name: "(2.4x1.6m)", offset:[-0.16, -0.15,     0,     0], parts: [1, 1, 4], partsPos:[{dx:0.8, dy:0, r:90}, {dx: 0.8,  dy:0,     r: 0}, {dx:-0.12, dy:-0.12, r:  0}]},
        { file: "BS3+BA1.png",      size: [2.55, 0.93], type: "complex",      code: "BS3+BA1",      price: 2768, priceCZK: 70600,  name: "(2.4x0.8m)", offset:[-0.14, -0.12,     0,     0], parts: [2, 3],    partsPos:[{dx:0,   dy:0, r: 0}, {dx:-0.12, dy:-0.12, r: 0}]},
        { file: "BS3+BA1+BA2R.png", size: [2.68, 0.93], type: "complex",      code: "BS3+BA1+BA2R", price: 4037, priceCZK: 103000, name: "(2.4x0.8m)", offset:[-0.14, -0.12, -0.14,     0], parts: [2, 3, 5], partsPos:[{dx:0,   dy:0, r: 0}, {dx:-0.12, dy:-0.12, r: 0}, {dx: 0.75, dy:-0.12, r:  0}]},
        { file: "BS3+BA1_flip.png", size: [2.55, 0.93], type: "complex",      code: "BS3+BA1",      price: 2768, priceCZK: 70600,  name: "(2.4x0.8m)", offset:[    0, -0.12, -0.15,     0], parts: [2, 3],    partsPos:[{dx:0,   dy:0, r: 0}, {dx: 2.52, dy:-0.12, r:90}]},
        { file: "BS3+BA2L.png",     size: [2.55, 0.93], type: "complex",      code: "BS3+BA2L",     price: 3138, priceCZK: 80100,  name: "(2.4x0.8m)", offset:[    0, -0.12, -0.15,     0], parts: [2, 5],    partsPos:[{dx:0,   dy:0, r: 0}, {dx: 0.75, dy:-0.12, r: 0}]},
        { file: "BS3+BA2R.png",     size: [2.55, 0.93], type: "complex",      code: "BS3+BA2R",     price: 3138, priceCZK: 80100,  name: "(2.4x0.8m)", offset:[-0.14, -0.12,     0,     0], parts: [2, 4],    partsPos:[{dx:0,   dy:0, r: 0}, {dx:-0.12, dy:-0.12, r: 0}]},
    ],
};

class Artboard {
    constructor(config, planner, data = {}) {
        this.planner = planner;
        this.init(config, data);
        this.loadImages();
        this.initStage();
        this.magnets = [];
        this.corners = [];
        this.grid = new GridLayer(this);
        this.rulerMode = false;
        this.ruler = new Ruler(this);
        this.menu = new Menu(this);
        this.selectionRect = new SelectionRect(this);
        if (data.images) {
            this.import(data.images);
        } else {
            this.updateTotal();
        }
        this.updateProductList();
    }

    clear() {
        const { layers, selectionRect } = this;
        selectionRect.selected = [];
        selectionRect.showSelection();
        layers.images.destroyChildren();
        layers.images.draw();
        this.updateTotal();
        this.updateProductList();
    }

    delete(images) {
        images.forEach((i) => i.destroy());
        this.updateTotal();
        this.updateProductList();
    }

    updateTotal() {
        const { imageConfig, totalElement, layers, ppm } = this;
        let total = 0;
        for (const image of layers.images.children) {
            const id = image.attrs.id;
            total += imageConfig[id].price;
        }
        if (total > 1000) {
            total = total.toString().replace(/(...)$/, " $1");
        }
        totalElement.innerHTML = total;
        this.planner.updateButtons(total, ppm);
    }

    init({ pixelsPerMeter: ppm, artboardSize, gridStep, placeStep, images }, data) {
        this.size = data.artboardSize ? data.artboardSize : artboardSize;
        this.ppm = data.ppm ? data.ppm : ppm;
        this.width = this.size[0] * this.ppm;
        this.height = this.size[1] * this.ppm;
        this.step = gridStep * this.ppm;
        this.placeStep = placeStep * this.ppm;
        this.padding = this.placeStep;
        this.imageConfig = images;
        this.rulerMode = false;
        this.container = document.getElementById("planner-artboard");
        this.totalElement = document.getElementsByClassName("info-total")[0];
        this.totalElement.innerHTML = 0;
    }

    loadImages() {
        const { ppm } = this;
        this.images = this.imageConfig.map(({ file, size, type, offset }) => {
            const [width, height] = size;
            const image = new Image();
            image.src = plannerImagesFolder + file;
            image.width = width * ppm;
            image.height = height * ppm;
            image.type = type;
            image.offset = offset ? offset.map((x) => x * ppm) : [0, 0, 0, 0];
            return image;
        });
    }

    initStage() {
        const width = this.width + this.padding * 2;
        const height = this.height + this.padding * 2;
        const grid = new Konva.Layer();
        const images = new Konva.Layer();
        const magnets = new Konva.Layer();
        const top = new Konva.Layer();
        this.stage = new Konva.Stage({ container: "planner-artboard", width, height });
        this.layers = { grid, images, magnets, top };
        this.stage.add(grid, images, magnets, top);
        const konvaContent = this.stage.container().children[0];
        konvaContent.style.margin = `2px`;
    }

    addImage(x, y, imageId, rotation = 0) {
        const { layers, images, imageConfig } = this;
        const element = images[imageId];
        const image = new Konva.Image({
            x,
            y,
            width: element.width,
            height: element.height,
            rotation,
            draggable: false,
            image: element,
            id: imageId,
        });
        image.type = imageConfig[imageId].type;
        layers.images.add(image);
        this.initImageEvents(image);
        this.updateTotal();
        this.updateProductList();
        return image;
    }

    addComplex(x, y, imageId) {
        const { imageConfig, ppm } = this;
        const { parts, partsPos } = imageConfig[imageId];
        let roundDX = 0;
        let roundDY = 0;
        parts.forEach((partId, i) => {
            const { dx, dy, r } = partsPos[i];
            const { type } = this.images[partId];
            if (type === "seat") {
                const image = this.addImage(x + dx * ppm, y + dy * ppm, partId, r);
                const roundD = this.grid.roundPlace(image, 0, 0);
                roundDX = roundD[0];
                roundDY = roundD[1];
            } else {
                const corner = this.addImage(x + dx * ppm + roundDX, y + dy * ppm + roundDY, partId, r);
                corner.type = "corner";
                this.corners.push(corner);
            }
        });
    }

    initImageEvents(image) {
        const { selectionRect } = this;
        image.on("mouseover", () => {
            if (
                selectionRect.drag ||
                selectionRect.selected.includes(image) ||
                selectionRect.rect.visible() ||
                this.rulerMode
            ) {
                return;
            }
            selectionRect.selected = [image];
            selectionRect.addAttached();
            selectionRect.showSelection();
        });
    }

    getImageSize(id) {
        const { width, height } = this.images[id];
        return [width, height];
    }

    setRulerMode(mode) {
        this.rulerMode = mode;
        this.ruler.active = mode;
        if (mode) this.selectionRect.hide();
        else this.ruler.hide();
        this.selectionRect.active = !mode;
        this.menu.hide();
    }

    export() {
        const { layers, ppm } = this;
        const images = layers.images.children.map((image) => {
            const { id, x, y, rotation } = image.attrs;
            const { type } = image;
            return { x: x / ppm, y: y / ppm, rotation, id, type };
        });
        return JSON.stringify({ artboardSize: this.size, ppm, images });
    }

    import(images) {
        const { ppm } = this;
        images.forEach((i) => {
            const { x, y, id, rotation, type } = i;
            const image = this.addImage(x * ppm, y * ppm, id, rotation);
            image.type = type;
            if (type === "corner") this.corners.push(image);
        });
    }

    showMagnets(imageId) {
        if (this.cornerDrop) this.cornerDrop.destroy();
        this.cornerDrop = new Konva.Image({
            image: this.images[imageId],
            visible: false,
        });
        this.layers.top.add(this.cornerDrop);
        const images = this.layers.images.children;
        const seats = images.filter((i) => i.type === "seat");
        seats.forEach((s) => this.addMagnets(s, imageId));
    }

    hideMagnets() {
        if (this.cornerDrop) this.cornerDrop.destroy();
        this.magnets.forEach((m) => m.destroy());
        this.magnets = [];
    }

    addCorner(imageId) {
        if (this.activeMagnet) {
            const corner = this.addImage(0, 0, imageId);
            corner.setAttrs(this.cornerDrop.attrs);
            corner.type = "corner";
            this.corners.push(corner);
        }
        this.hideMagnets();
    }

    threshold() {
        return this.ppm / 40;
    }

    out(image, threshold) {
        if (typeof threshold === "undefined") threshold = this.threshold();
        const { padding } = this;
        const { x, y, width, height } = image.getClientRect();
        const min = padding - threshold;
        const xMax = padding + this.width + threshold - width;
        const yMax = padding + this.height + threshold - height;
        return x < min || y < min || x > xMax || y > yMax;
    }

    dropConflict(drop, ignore = [], threshold) {
        if (typeof threshold === "undefined") threshold = this.threshold();
        let images = this.layers.images.children.filter((i) => !ignore.includes(i));
        if (drop.type === "seat") {
            const corners = images.filter((i) => i.type === "corner");
            images = images.filter((i) => i.type !== "corner");
            if (corners.some((c) => this.conflictSeatCorner(drop, c))) {
                return true;
            }
        }
        const out = drop.type !== "corner" && this.out(drop, threshold);
        return out || images.some((i) => this.conflict(i, drop));
    }

    cornerConflictZone(corner) {
        const l = 0.09 * this.ppm;
        const { x, y, rotation: r } = corner.attrs;
        const cornerLeft = corner.attrs.id < 5;
        if (cornerLeft) {
            const signX = r === 90 || r === 180 ? -1 : 1;
            const signY = r === 180 || r === 270 ? -1 : 1;
            return { x: x + l * signX, y: y + l * signY, signX, signY };
        }
        const rect = corner.getClientRect();
        const signX = r === 0 || r === 90 ? -1 : 1;
        const signY = r === 90 || r === 180 ? -1 : 1;
        if (r === 0) {
            return { x: x + rect.width + l * signX, y: y + l * signY, signX, signY };
        } else if (r === 90) {
            return { x: x + l * signX, y: y + rect.height + l * signY, signX, signY };
        } else if (r === 180) {
            return { x: x - rect.width + l * signX, y: y + l * signY, signX, signY };
        } else {
            return { x: x + l * signX, y: y - rect.height + l * signY, signX, signY };
        }
    }

    conflictSeatCorner(seat, corner) {
        if (!this.conflict(seat, corner)) return false;
        const { x, y, width, height } = seat.getClientRect();
        const { x: cornerX, y: cornerY, signX, signY } = this.cornerConflictZone(corner);
        const d1 = x - cornerX;
        const d2 = x + width - cornerX;
        const d3 = y - cornerY;
        const d4 = y + height - cornerY;
        return d1 * signX < 0 || d2 * signX < 0 || d3 * signY < 0 || d4 * signY < 0;
    }

    conflict(image1, image2, threshold) {
        if (typeof threshold === "undefined") threshold = this.threshold();
        const box1 = image1.getClientRect();
        const box2 = image2.getClientRect();
        box1.x += threshold;
        box1.y += threshold;
        box1.width -= 2 * threshold;
        box1.height -= 2 * threshold;
        box2.x += threshold;
        box2.y += threshold;
        box2.width -= 2 * threshold;
        box2.height -= 2 * threshold;
        return Konva.Util.haveIntersection(box1, box2);
    }

    magnetConflict(magnet, id) {
        const { cornerDrop, ppm } = this;
        this.placeCornerDrop(magnet, id > 4);
        return this.corners.some((c) => this.conflict(c, cornerDrop, ppm / 12));
    }

    addMagnets(seat, id) {
        const { x, y, width, height } = seat.getClientRect();
        const l = this.ppm / 3;
        const magnets = [
            this.magnet(x, y, l, l, 0),
            this.magnet(x + width, y, -l, l, 90),
            this.magnet(x + width, y + height, -l, -l, 180),
            this.magnet(x, y + height, l, -l, 270),
        ].filter((m) => !this.magnetConflict(m, id));
        if (magnets.length > 0) {
            this.magnets.push(...magnets);
            this.layers.magnets.add(...magnets);
        }
    }

    magnet(x, y, dx, dy, rotation) {
        return new Konva.Line({
            points: [x, y, x + dx, y, x + dx, y + dy / 2, x + dx * 0.5, y + dy / 2, x + dx * 0.5, y + dy, x, y + dy],
            fill: "#00FF00",
            opacity: 0.5,
            strokeWidth: 0,
            closed: true,
            cornerDropAttrs: {
                x: x - 0.36 * dx,
                y: y - 0.36 * dy,
                rotation,
            },
        });
    }

    dragCorner(x, y, right) {
        const { cornerDrop } = this;
        const [active, close] = this.nearestMagnet(x, y);
        cornerDrop.visible(close);
        this.activeMagnet = close ? active : null;
        if (!close) return;
        this.placeCornerDrop(active, right);
    }

    placeCornerDrop(magnet, right) {
        const { cornerDrop } = this;
        const attrs = magnet.attrs.cornerDropAttrs;
        if (right) {
            const { rotation } = attrs;
            cornerDrop.setAttrs({
                ...attrs,
                rotation: rotation > 0 ? rotation - 90 : 270,
            });
            const { x, y, width, height } = cornerDrop.getClientRect();
            if (rotation === 0) {
                cornerDrop.setAttr("y", y + height * 2);
            } else if (rotation === 90) {
                cornerDrop.setAttr("x", x - width);
            } else if (rotation === 180) {
                cornerDrop.setAttr("y", y - height);
            } else if (rotation === 270) {
                cornerDrop.setAttr("x", x + width * 2);
            }
        } else {
            cornerDrop.setAttrs(attrs);
        }
    }

    nearestMagnet(x, y) {
        const { magnets } = this;
        const distances = magnets.map((magnet) => {
            const rect = magnet.getClientRect();
            const mx = rect.x + rect.width / 2;
            const my = rect.y + rect.height / 2;
            const dx = mx - x;
            const dy = my - y;
            return Math.sqrt(dx * dx + dy * dy);
        });
        let min = 0;
        distances.forEach((d, i) => {
            if (d < distances[min]) min = i;
        });
        return [magnets[min], distances[min] < this.ppm];
    }

    updateProductList() {
        const images = this.layers.images.children;
        this.planner.updateProductList(images.map((i) => i.attrs.id));
    }
}

class GridLayer {
    constructor(artboard) {
        const { width, height, step, placeStep, layers, padding } = artboard;
        this.padding = padding;
        this.width = width;
        this.height = height;
        this.step = step;
        this.placeStep = placeStep;
        this.layer = layers.grid;
        this.shadowAttrs = {
            fill: "#FF7B17",
            opacity: 0.6,
            stroke: "#CF6412",
        };
        this.lines = [];
        this.shadows = [];
        this.placeLines();
    }

    showShadows(attrsList) {
        this.clearShadows();
        attrsList.forEach((attrs) => {
            const { x, y, width, height, rotation, type } = attrs;
            const rect = new Konva.Rect({
                ...this.shadowAttrs,
                x: this.round(x),
                y: this.round(y),
                width: this.round(width),
                height: this.round(height),
                rotation,
            });
            rect.type = type;
            this.shadows.push(rect);
            this.layer.add(rect);
        });
    }

    setShadows(attrsList) {
        this.shadows.forEach((s, i) => {
            s.setAttrs(attrsList[i]);
            this.roundPlace(s);
        });
    }

    setSize([width, height]) {
        this.width = width;
        this.height = height;
        this.clearLines();
        this.placeLines();
    }

    clearLines() {
        this.lines.forEach((line) => line.destroy());
        this.lines = [];
    }

    clearShadows() {
        this.shadows.forEach((shadow) => shadow.destroy());
        this.shadows = [];
    }

    placeLines() {
        const dark = "#999999";
        const light = "#cccccc";
        const { width, height, step } = this;
        for (let x = 0; x <= width; x += step) {
            this.placeLine(light, x, -1, x, height + 1);
        }
        for (let y = 0; y <= height; y += step) {
            this.placeLine(light, -1, y, width + 1, y);
        }
        for (let x = 0; x <= width; x += step * 5) {
            this.placeLine(dark, x, -1, x, height + 1);
        }
        for (let y = 0; y <= height; y += step * 5) {
            this.placeLine(dark, -1, y, width + 1, y);
        }
        this.placeLine(dark, width, -1, width, height + 1);
        this.placeLine(dark, -1, height, width + 1, height);
    }

    placeLine(stroke, ...points) {
        const { padding } = this;
        const line = new Konva.Line({
            stroke,
            points: points.map((x) => x + padding),
        });
        this.lines.push(line);
        this.layer.add(line);
    }

    round(x) {
        const { placeStep } = this;
        return Math.round(x / placeStep) * placeStep;
    }

    roundPlace(object, offsetX = 0, offsetY = 0) {
        const { x: x0, y: y0 } = object.attrs;
        const rx = this.round(x0);
        const ry = this.round(y0);
        const x = rx + offsetX;
        const y = ry + offsetY;
        object.setAttrs({ x, y });
        return [x - x0, y - y0];
    }
}

class Menu {
    constructor(artboard) {
        this.artboard = artboard;
        this.planner = artboard.planner;
        this.size = 10 + artboard.ppm / 6;
        this.bgRect = new Konva.Rect({ width: this.norm(50), height: this.norm(110), visible: false });
        this.circle1 = this.circle();
        this.circle2 = this.circle();
        this.circle3 = this.circle();
        this.rotate = this.button("rotate.svg", this.norm(20), this.norm(21));
        this.duplicate = this.button("copy.svg", this.norm(15), this.norm(22));
        this.delete = this.button("delete.svg", this.norm(26 * 0.75), this.norm(30 * 0.75));
        this.shapes = [this.bgRect, this.circle1, this.circle2, this.circle3, this.rotate, this.duplicate, this.delete];
        this.artboard.layers.top.add(this.bgRect, ...this.shapes);
        this.initEvents();
    }

    norm(x) {
        return (this.size / 30) * x;
    }

    initEvents() {
        this.circle1.on("click", () => this.rotateHandler());
        this.rotate.on("click", () => this.rotateHandler());
        this.circle2.on("click", () => this.duplicateHandler());
        this.duplicate.on("click", () => this.duplicateHandler());
        this.circle3.on("click", () => this.deleteHandler());
        this.delete.on("click", () => this.deleteHandler());
        [
            [this.circle1, this.rotate],
            [this.circle2, this.duplicate],
            [this.circle3, this.delete],
        ].forEach(([circle, button]) => {
            const canvas = this.artboard.container.firstChild;
            const enter = () => {
                if (button.attrs.opacity === 1.0) {
                    canvas.style.cursor = "pointer";
                    circle.setAttrs({ fill: "#f5f5f5", stroke: "#f5f5f5" });
                } else {
                    canvas.style.cursor = "not-allowed";
                }
            };
            const leave = () => {
                if (button.attrs.opacity === 1.0) {
                    circle.setAttrs({ fill: "white", stroke: "black" });
                } else {
                    canvas.style.cursor = "default";
                }
            };
            circle.on("mouseenter", enter);
            button.on("mouseenter", enter);
            circle.on("mouseleave", leave);
            button.on("mouseleave", leave);
        });
    }

    rotationPossible() {
        return this.rotateHandler(true);
    }

    rotateHandler(checkOnly = false) {
        if (this.rotate.attrs.opacity < 1 && !checkOnly) return;
        const { target, artboard } = this;
        this.saveUndo();
        this.avoidCorner();
        if (artboard.selectionRect.dropConflict()) {
            this.loadUndo();
        }
        target.showSelectionWithoutMenu();
        const possible = this.rotateHandlerHelper(0, checkOnly);
        if (checkOnly) {
            this.loadUndo();
        } else {
            this.planner.checkPoint();
        }
        target.showSelectionWithoutMenu();
        return possible;
    }

    rotateHandlerHelper(i = 0, checkOnly = false) {
        const { target, artboard } = this;
        let { x: sx, y: sy, height: sh } = target.selection.attrs;
        if (i === 4) {
            return false;
        }
        for (const image of target.selected) {
            let { x, y, height } = image.getClientRect();
            const dx = sx + sy + sh - x - y - height;
            const dy = -sx + sy + x - y;
            this.rotateShape(image);
            image.setAttrs({ x: image.attrs.x + dx, y: image.attrs.y + dy });
        }
        target.showSelectionWithoutMenu();
        if (artboard.selectionRect.dropConflict()) {
            return this.rotateHandlerHelper(i + 1, checkOnly);
        } else {
            return i < 3;
        }
    }

    avoidCorner() {
        const { target, artboard } = this;
        const { padding } = artboard;
        const { x, y, width, height } = target.selectedBox();
        const maxWH = Math.max(width, height);
        const overRight = x + maxWH - (padding + artboard.width);
        const overBottom = y + maxWH - (padding + artboard.height);
        if (overRight > 0) {
            for (const image of this.allNodes()) {
                image.setAttrs({ x: image.attrs.x - overRight });
            }
            this.shapes.forEach((s) => s.fire("mouseleave"));
        }
        if (overBottom > 0) {
            for (const image of this.allNodes()) {
                image.setAttrs({ y: image.attrs.y - overBottom });
            }
            this.shapes.forEach((s) => s.fire("mouseleave"));
        }
    }

    allNodes() {
        return [...this.target.selected, ...this.shapes];
    }

    saveUndo() {
        this.undoNodes = this.allNodes();
        this.undo = this.undoNodes.map((image) => ({
            x: image.attrs.x,
            y: image.attrs.y,
            rotation: image.attrs.rotation,
        }));
    }

    loadUndo() {
        this.undo.forEach((attrs, i) => this.undoNodes[i].setAttrs(attrs));
    }

    rotateShape(shape) {
        const { x, y, width, height, rotation } = shape.attrs;
        let attrs;
        if (rotation === 0) {
            attrs = { x: x + height, y, rotation: 90 };
        } else if (rotation === 90) {
            attrs = { x: x - height + width, y: y + height, rotation: 180 };
        } else if (rotation === 180) {
            attrs = { x: x - width, y: y - height + width, rotation: 270 };
        } else if (rotation === 270) {
            attrs = { x: x, y: y - width, rotation: 0 };
        }
        shape.setAttrs(attrs);
    }

    duplicationPossible() {
        return this.duplicateHandler(true);
    }

    duplicateHandler(checkOnly = false) {
        if (this.duplicate.attrs.opacity < 1 && !checkOnly) return;
        const { target, artboard } = this;
        const { selected, selection } = target;
        const clones = selected.map((proto) => {
            const { x, y, id, rotation } = proto.attrs;
            const image = artboard.addImage(x, y, id, rotation);
            image.visible(false);
            image.type = proto.type;
            return image;
        });
        const placeStep = artboard.placeStep;
        const conflict = () => clones.some((c) => artboard.dropConflict(c, clones));
        const moveOne = (c, dx, dy) => c.setAttrs({ x: c.attrs.x + dx * placeStep, y: c.attrs.y + dy * placeStep });
        const move = (dx, dy) => clones.forEach((c) => moveOne(c, dx, dy));
        const { x, y, width, height } = selection.getClientRect();
        const maxStep = 2 + (2 * Math.max(x, y, artboard.width - x - width, artboard.height - y - height)) / placeStep;
        let step = 2;
        outer: while (true) {
            move(1, 1);
            if (!conflict()) break outer;
            for (let i = 0; i < step; i += 1) {
                move(-1, 0);
                if (!conflict()) break outer;
            }
            for (let i = 0; i < step; i += 1) {
                move(0, -1);
                if (!conflict()) break outer;
            }
            for (let i = 0; i < step; i += 1) {
                move(1, 0);
                if (!conflict()) break outer;
            }
            for (let i = 0; i < step; i += 1) {
                move(0, 1);
                if (!conflict()) break outer;
            }
            step += 2;
            if (step > maxStep) {
                clones.forEach((c) => c.destroy());
                artboard.updateTotal();
                artboard.updateProductList();
                return false;
            }
        }
        if (checkOnly) {
            clones.forEach((clone) => clone.destroy());
            artboard.updateTotal();
            artboard.updateProductList();
        } else {
            clones.forEach((clone) => {
                if (clone.type === "corner") artboard.corners.push(clone);
                clone.visible(true);
            });
            this.target.showSelection();
            this.planner.checkPoint();
        }
        return true;
    }

    deleteHandler() {
        const { artboard } = this;
        const { selectionRect } = artboard;
        artboard.delete(selectionRect.selected);
        selectionRect.hide();
        artboard.corners = artboard.layers.images.children.filter((i) => i.type === "corner");
        this.hide();
        this.planner.checkPoint();
    }

    circle() {
        return new Konva.Circle({
            radius: this.size * 0.5,
            fill: "white",
            stroke: "black",
            strokeWidth: 1,
            visible: false,
        });
    }

    button(filename, width, height) {
        const image = new Image();
        image.src = plannerIconsFolder + filename;
        return new Konva.Image({
            width,
            height,
            image,
            visible: false,
            opacity: 1.0,
        });
    }

    show(selectionRect) {
        this.target = selectionRect;
        const { size, artboard } = this;
        const { height, ppm, placeStep } = artboard;
        const { x, y, width } = selectionRect.selection.attrs;
        const xShift = x <= placeStep ? width + size * 1.4 : 0;
        const yShift = y > height - ppm && ppm <= 60 ? -size : 0;
        const x0 = x + xShift - size * 0.7;
        const y0 = y + yShift + size * 0.37;
        const y1 = y0 + size * 1.13;
        const y2 = y1 + size * 1.13;
        const { rotate, duplicate, delete: del, circle1, circle2, circle3 } = this;

        this.bgRect.setAttrs({ x: x0 - size / 1.5, y: y0 - size / 1.5 });
        const rotActive = this.rotationPossible();
        circle1.setAttrs({ x: x0, y: y0, stroke: rotActive ? "black" : "grey" });
        rotate.setAttrs({
            x: x0 - rotate.width() / 2,
            y: y0 - rotate.height() / 2,
            opacity: rotActive ? 1.0 : 0.5,
            visible: true,
        });

        const dupActive = this.duplicationPossible();
        circle2.setAttrs({ x: x0, y: y1, stroke: dupActive ? "black" : "grey" });
        duplicate.setAttrs({
            x: x0 - duplicate.width() / 2,
            y: y1 - duplicate.height() / 2,
            opacity: dupActive ? 1.0 : 0.5,
        });

        circle3.setAttrs({ x: x0, y: y2, visible: true });
        del.setAttrs({ x: x0 - del.width() / 2, y: y2 - del.height() / 2, visible: true });
        this.shapes.forEach((s) => s.visible(true));
    }

    hide() {
        this.shapes.forEach((s) => s.visible(false));
    }
}

class Planner {
    constructor() {
        this.ppmMin = 40;
        this.ppmMax = 200;
        this.rulerMode = false;
        this.YII_CSRF_TOKEN = document.getElementsByName("YII_CSRF_TOKEN")[0].value;
        this.lang = document.getElementsByTagName("html")[0].getAttribute("lang");
        if (this.lang === "cs") {
            plannerConfig.images.forEach((image) => {
                image.price = image.priceCZK;
            });
            this.currency = "CZK";
        } else {
            this.currency = "EUR";
        }
        this.initSizeDialog();
        this.initInfo();
        // this.initHelp();
        this.initPlan();
        this.initQuote();
        this.initMainButtons();
        this.plannerWrap = document.getElementById("planner-wrap");
        this.plannerMain = document.getElementById("planner-main");
        this.modal = document.getElementById("modal");
        this.saves = [];
    }

    run() {
        const hash = this.getHash();
        const save = localStorage.getItem("todus.artboard");
        if (hash) {
            this.load(hash);
        } else if (save === null) {
            this.updateProductList([]);
            this.showMain();
        } else {
            this.showMain(JSON.parse(save));
        }
    }

    initSizeDialog() {
        this.sizeDialog = document.getElementById("size-dialog");
        this.sizeBtn = document.getElementById("size-btn");
        this.size = [document.getElementById("size0"), document.getElementById("size1")];
        this.size[0].value = plannerConfig.artboardSize[0];
        this.size[1].value = plannerConfig.artboardSize[1];
        this.label = [document.getElementById("label0"), document.getElementById("label1")];
        this.validation = document.getElementById("validation");
        this.sizeBtn.addEventListener("click", () => this.closeSizeDialog());
        this.size.forEach((size) => {
            size.addEventListener("input", () => this.validateSize());
            size.addEventListener("click", function () {
                this.select();
            });
        });
    }

    initInfo() {
        this.info = document.createElement("div");
        this.info.className = "info";
        document.getElementsByClassName("logo")[0].after(this.info);
    }

    // initHelp() {
    //     this.help = document.getElementById("help");
    //     this.helpBtn = document.getElementById("help-btn");
    //     if (this.helpBtn) {
    //         this.helpBtn.addEventListener("click", () => {
    //             this.help.removeAttribute("hidden");
    //         });
    //     }
    //     if (this.help) {
    //         document.getElementById("close-help").addEventListener("click", () => {
    //             this.help.setAttribute("hidden", "");
    //         });
    //     }
    // }

    initPlan() {
        this.plan = document.getElementById("plan");
        this.planContent = document.getElementById("plan-content");
        this.listBtn = document.getElementById("list-btn");
        this.listBtn.addEventListener("click", () => {
            this.plan.removeAttribute("hidden");
        });
        document.getElementById("close-plan").addEventListener("click", () => this.closePlan());
    }

    closePlan() {
        this.plan.setAttribute("hidden", "");
    }

    initQuote() {
        document.getElementById("close-quote").addEventListener("click", () => this.closeQuote());
        this.quote = document.getElementById("quote");
        this.optionalInputs = document.getElementById("optional-inputs");
        this.quoteSubmit = document.getElementById("quote-submit");
        const quoteForm = document.getElementById("quote-form");
        this.quoteForm = quoteForm;
        quoteForm.addEventListener("submit", (e) => {
            e.preventDefault();
            this.quoteHandler();
        });
        [...quoteForm.elements].forEach((element) => {
            element.addEventListener("input", () => {
                this.handleFormInput();
            });
        });
    }

    handleFormInput() {
        const { quoteSubmit, quoteForm, optionalInputs } = this;
        const { quoteType, email, country, zipcode, addressLine1, addressLine2 } = quoteForm;
        if (quoteType.checked) {
            optionalInputs.removeAttribute("hidden");
        } else {
            optionalInputs.setAttribute("hidden", "");
        }
        const valid =
            email.value &&
            country.value &&
            zipcode.value &&
            (!quoteType.checked || (addressLine1.value && addressLine2.value));
        if (valid) {
            quoteSubmit.classList.remove("invalid");
            quoteSubmit.removeAttribute("disabled");
        } else {
            quoteSubmit.classList.add("invalid");
            quoteSubmit.setAttribute("disabled", "");
        }
    }

    showQuote() {
        this.quote.removeAttribute("hidden");
    }

    closeQuote() {
        this.quote.setAttribute("hidden", "");
    }

    initMainButtons() {
        this.rulerBtn = document.getElementById("ruler-btn");
        this.rulerBtn.addEventListener("click", () => this.setRulerMode(!this.rulerMode));
        this.zoomInBtn = document.getElementById("zoom-in-btn");
        this.zoomInBtn.addEventListener("click", () => this.ppmChange(20));
        this.zoomOutBtn = document.getElementById("zoom-out-btn");
        this.zoomOutBtn.addEventListener("click", () => this.ppmChange(-20));
        this.exportBtn = document.getElementById("export-btn");
        this.exportBtn.addEventListener("click", () => this.exportHandler());
        this.exportBtn2 = document.getElementById("export-btn2");
        this.exportBtn2.addEventListener("click", () => {
            this.closePlan();
            this.exportHandler();
        });
        this.clearBtn = document.getElementById("clear-btn");
        this.clearBtn.addEventListener("click", () => {
            this.showModal("Are you sure you want to<br> clear the artboard?", "Confirm", () => {
                this.updateButtons(0, this.artboard.ppm);
                this.artboard.clear();
                this.checkPoint();
            });
        });
        this.resetBtn = document.getElementById("reset-btn");
        this.resetBtn.addEventListener("click", () => {
            this.showModal("Are you sure you want to<br> resize area and reset your planner?", "Confirm", () => {
                this.sizeDialog.removeAttribute("hidden");
                this.plannerMain.setAttribute("hidden", "");
                document.body.classList.remove("hide-menu");
                this.info.classList.add("hide");
            });
        });
        this.quoteBtn = document.getElementById("quote-btn");
        this.quoteBtn.addEventListener("click", () => {
            this.showQuote();
        });
        this.quoteBtn2 = document.getElementById("quote-btn2");
        this.quoteBtn2.addEventListener("click", () => {
            this.closePlan();
            this.showQuote();
        });
        this.undo = document.getElementById("undo-btn");
        this.undo.addEventListener("click", () => {
            const { saves } = this;
            saves.pop();
            this.showMain(JSON.parse(saves[saves.length - 1]));
            if (saves.length === 1) this.disableUndo();
        });
    }

    disableUndo() {
        this.undo.classList.add("disabled");
        this.undo.setAttribute("disabled", "");
    }

    ppmChange(delta) {
        const ppm = this.artboard.ppm + delta;
        if (ppm < this.ppmMin || ppm > this.ppmMax) return;
        const data = JSON.parse(this.artboard.export());
        data.ppm = ppm;
        plannerConfig.pixelsPerMeter = ppm;
        this.showMain(data, true);
        this.setRulerMode(this.rulerMode);
        this.updateButtons(this.total, ppm);
    }

    validateSize() {
        const validate = (s) => {
            const n = +s.replace(",", ".");
            return !isNaN(n) && n >= 2 && n <= 30;
        };
        const { size, validation, sizeBtn } = this;
        const valid = size.map((input) => validate(input.value));
        this.setInputClass(valid);
        if (valid[0] && valid[1]) {
            validation.classList.remove("invalid");
            sizeBtn.classList.remove("invalid");
            sizeBtn.removeAttribute("disabled");
        } else {
            validation.classList.add("invalid");
            sizeBtn.classList.add("invalid");
            sizeBtn.setAttribute("disabled", "");
        }
    }

    setInputClass(valid) {
        const { size, label } = this;
        for (let i = 0; i < 2; i += 1) {
            if (valid[i]) {
                size[i].classList.remove("invalid");
                label[i].classList.remove("invalid");
            } else {
                size[i].classList.add("invalid");
                label[i].classList.add("invalid");
            }
        }
    }

    showMain(data, checkPoint = false) {
        document.body.classList.add("hide-menu");
        this.setInfo(...plannerConfig.artboardSize.map((x) => x * 100));
        this.artboard = new Artboard(plannerConfig, this, data);
        this.selector = new Selector(plannerConfig.images, this.artboard, this);
        this.updateMeasures(this.artboard.ppm);
        this.plannerMain.removeAttribute("hidden");
        if (checkPoint) {
            this.checkPoint();
        }
        if (this.saves.length === 0) {
            const save = this.artboard.export();
            this.saves = [save];
            localStorage.setItem("todus.artboard", save);
            this.disableUndo();
        }
    }

    updateButtons(total, ppm) {
        this.total = total;
        const disable = (button) => {
            button.classList.add("disabled");
            button.setAttribute("disabled", "");
        };
        const enable = (button) => {
            button.classList.remove("disabled");
            button.removeAttribute("disabled");
        };
        const { zoomInBtn, zoomOutBtn, ppmMin, ppmMax } = this;
        if (ppm === ppmMin) {
            disable(zoomOutBtn);
        } else {
            enable(zoomOutBtn);
        }
        if (ppm === ppmMax) {
            disable(zoomInBtn);
        } else {
            enable(zoomInBtn);
        }
        const totalDepend = [this.clearBtn, this.exportBtn, this.listBtn, this.quoteBtn];
        if (total === 0) {
            totalDepend.forEach(disable);
        } else {
            totalDepend.forEach(enable);
        }
    }

    getHash() {
        const params = new URLSearchParams(document.location.search.substring(1));
        return params.get("hash");
    }

    getLoadType() {
        const params = new URLSearchParams(document.location.search.substring(2));
        return params.get("type") ? params.get("type") : "draft";
    }

    load(hash) {
        const { plannerWrap, YII_CSRF_TOKEN, lang } = this;
        const formData = new FormData();
        formData.append("action", "load");
        formData.append("type", this.getLoadType());
        formData.append("artboardHash", hash);
        formData.append("YII_CSRF_TOKEN", YII_CSRF_TOKEN);
        formData.append("lang", lang);
        plannerWrap.classList.add("processing");
        fetch("/planner/api", { method: "POST", body: formData })
            .then((res) => res.json())
            .then((data) => {
                plannerWrap.classList.remove("processing");
                this.showMain(JSON.parse(data.artboard));
            })
            .catch((e) => {
                console.log("import failed:", e);
                plannerWrap.classList.remove("processing");
                this.showMain();
            });
    }

    exportHandler() {
        const { artboard, YII_CSRF_TOKEN, plannerWrap, lang } = this;
        plannerWrap.classList.add("processing");
        const formData = new FormData();
        formData.append("action", "save");
        formData.append("artboard", artboard.export());
        formData.append("YII_CSRF_TOKEN", YII_CSRF_TOKEN);
        formData.append("lang", lang);
        fetch("/planner/api", { method: "POST", body: formData })
            .then((res) => res.json())
            .then((data) => {
                plannerWrap.classList.remove("processing");
                const text = "We saved your work and you can find your plan here:";
                const yesText = "Close and copy link";
                const action = () => {
                    this.copyURL();
                };
                const { origin, pathname } = document.location;
                const hash = data.artboardHash;
                const hashUrl = `${origin}${pathname}?hash=${hash}`;
                this.showModal(text, yesText, action, hashUrl);
            })
            .catch((e) => {
                console.log("export failed:", e);
                plannerWrap.classList.remove("processing");
            });
    }

    quoteHandler() {
        const { YII_CSRF_TOKEN, plannerWrap, lang, artboard } = this;
        plannerWrap.classList.add("processing");
        const formData = new FormData(this.quoteForm);
        formData.set("quoteType", +this.quoteForm.quoteType.checked);
        formData.append("action", "quote");
        formData.append("productList", JSON.stringify(this.productList));
        formData.append("artboard", artboard.export());
        formData.append("YII_CSRF_TOKEN", YII_CSRF_TOKEN);
        formData.append("lang", lang);
        fetch("/planner/api", { method: "POST", body: formData })
            .then((res) => res.json())
            .then((data) => {
                plannerWrap.classList.remove("processing");
                this.closeQuote();
                if (data.status === "success") {
                    this.showModal("Your quote was successfully sent. Thank you.", "Close", false, "", true);
                } else {
                    this.showModal(data.message, "Close", false, "", true);
                }
            })
            .catch((e) => {
                plannerWrap.classList.remove("processing");
                this.closeQuote();
                console.log("send quote failed:", e);
            });
    }

    copyURL() {
        const urlInput = document.getElementById("url-input");
        urlInput.select();
        urlInput.setSelectionRange(0, 99999);
        document.execCommand("copy");
        urlInput.setSelectionRange(0, 0);
    }

    setRulerMode(mode) {
        const { rulerBtn, artboard } = this;
        const canvas = this.artboard.container.firstChild;
        this.rulerMode = mode;
        if (mode) {
            rulerBtn.classList.add("selected");
            canvas.style.cursor = "crosshair";
        } else {
            rulerBtn.classList.remove("selected");
            canvas.style.cursor = "default";
        }
        artboard.setRulerMode(mode);
    }

    closeSizeDialog() {
        plannerConfig.artboardSize = this.size.map((s) => +s.value.replace(",", "."));
        this.sizeDialog.setAttribute("hidden", "");
        this.updateProductList([]);
        this.showMain(undefined, true);
    }

    setInfo(width, height) {
        this.info.classList.remove("hide");
        this.info.innerHTML = `Your area size is 
            <strong class="mediumFont">${width}</strong> cm x 
            <strong class="mediumFont">${height}</strong> cm and total price is 
            <strong class="regularFont info-total"></strong> ${this.currency}`;
    }

    showModal(text, yesText, yesAction = false, hashUrl = "", hideClose = false) {
        const { modal } = this;
        const input = hashUrl ? `<input type="text" value="${hashUrl}" id="url-input" size="100" readonly>` : "";
        modal.innerHTML = `
            <div class="modal-content">
                <img id="modal-x" class="close" src="css/frontend/planner/icons/x.svg" alt="close">
                <p class="thinFont">${text}</p>
                ${input}<br>
                <div class="btn-wrap">
                    <button id="modal-close" ${hideClose ? "hidden" : ""}>Close</button>
                    <button id="modal-yes" class="confirm button">${yesText}</button>
                </div>
            </div>`;
        const close = () => modal.setAttribute("hidden", "");
        document.getElementById("modal-x").addEventListener("click", close);
        document.getElementById("modal-close").addEventListener("click", close);
        document.getElementById("modal-yes").addEventListener("click", () => {
            if (yesAction !== false) yesAction();
            close();
        });
        modal.removeAttribute("hidden");
    }

    updateProductList(ids) {
        const counts = {};
        const { planContent } = this;
        ids.forEach((x) => (counts[x] = (counts[x] || 0) + 1));
        const items = Object.entries(counts).map(([id, count]) => this.productListItem(id, count));
        planContent.innerHTML = "";
        planContent.append(this.info.cloneNode(true), ...items);
        this.productList = Object.entries(counts).map(([id, count]) => {
            const { price, code } = plannerConfig.images[id];
            return { code, count, price };
        });
    }

    productListItem(id, count) {
        const item = document.createElement("li");
        const { file, name, size, code, price } = plannerConfig.images[id];
        const src = plannerImagesFolder + file;
        const width = size[0] * 42.44;
        let subTotal = count * price;
        if (subTotal > 1000) {
            subTotal = subTotal.toString().replace(/(...)$/, " $1");
        }
        item.innerHTML = `
        <figure>
            <img src=${src} width="${width}">
        </figure>
        <div class="plan-details">
            <div>
                <strong class="mediumFont">${count}</strong>
                <span>x   =   </span>
                <strong class="mediumFont">${subTotal}</strong> ${this.currency}
            </div>
            <div>${name}</div>
            <div>${code}</div>
            <div>${price} ${this.currency}</div>
        </div>`;
        return item;
    }

    updateMeasures(ppm) {
        const measures = document.getElementById("measures");
        measures.setAttribute("width", ppm * 1.5);
        measures.setAttribute("height", ppm * 1.5);
        measures.innerHTML = `
            <line x1="17" y1="10" x2="97" y2="10" stroke="black" stroke-width="2" />
            <rect x="45" y="5" width="25" height="10" fill="white"/>
            <text x="49" y="13">1m</text>
            <line x1="10" y1="17" x2="10" y2="97" stroke="black" stroke-width="2" />
            <rect x="5" y="45" width="10" height="25" fill="white"/>
            <text x="13" y="66" transform="rotate(-90,13,66)">1m</text>
        `;
    }

    checkPoint() {
        const save = this.artboard.export();
        this.saves.push(save);
        localStorage.setItem("todus.artboard", save);
        this.undo.classList.remove("disabled");
        this.undo.removeAttribute("disabled");
    }
}

class Ruler {
    constructor(artboard) {
        this.artboard = artboard;
        this.canvas = artboard.container.firstChild;
        this.stage = artboard.stage;
        this.ppm = artboard.ppm;
        this.draft = [];
        this.ruler = new Konva.Line({
            points: [],
            stroke: "rgba(0,0,255,0.5)",
            strokeWidth: 4,
            lineCap: "round",
            visible: false,
        });
        this.distance = new Konva.TextPath({
            fill: "#333",
            fontSize: 20,
            fontFamily: "Arial",
            visible: false,
        });
        this.keepRect = new Konva.Rect({
            width: 60,
            height: 24,
            offsetX: 30,
            offsetY: 12,
            fill: "white",
            stroke: "black",
            strokeWidth: 1,
            visible: false,
        });
        this.keep = new Konva.TextPath({
            fill: "#333",
            fontSize: 15,
            fontFamily: "Arial",
            visible: false,
            text: "Keep",
        });
        artboard.layers.top.add(this.ruler, this.distance, this.keepRect, this.keep);
        this.visible = false;
        this.active = false;
        this.enter = () => (this.canvas.style.cursor = "pointer");
        this.leave = () => (this.canvas.style.cursor = artboard.rulerMode ? "crosshair" : "default");
        this.initEvents();
    }

    initEvents() {
        let norm;
        const { stage } = this;
        stage.on("mousedown touchstart", (e) => {
            if (!this.active || e.target === this.keep || e.target === this.keepRect) {
                return;
            }
            this.keep.visible(false);
            this.keepRect.visible(false);
            this.draft.forEach((shape) => shape.destroy());
            const { x, y } = stage.getPointerPosition();
            this.x1 = x;
            this.y1 = y;
            norm = this.update(x, y);
            this.show();
        });
        stage.on("mousemove touchmove", () => {
            if (!this.visible || !this.active) return;
            const { x, y } = stage.getPointerPosition();
            norm = this.update(x, y);
        });
        stage.on("mouseup touchend", () => {
            if (!this.visible || !this.active) return;
            if (norm) {
                this.keep.visible(true);
                this.keepRect.visible(true);
                this.draft = [this.ruler.clone(), this.distance.clone()];
                this.initDraftEvents();
                this.artboard.layers.top.add(...this.draft);
            }
            this.hide(false);
        });

        const { keep, keepRect } = this;
        const click = () => {
            this.draft = [];
            this.keep.visible(false);
            this.keepRect.visible(false);
        };
        keep.on("mouseenter", this.enter);
        keepRect.on("mouseenter", this.enter);
        keep.on("mouseleave", this.leave);
        keepRect.on("mouseleave", this.leave);
        keep.on("click", click);
        keepRect.on("click", click);
    }

    initDraftEvents() {
        const [ruler, distance] = this.draft;
        const click = () => {
            ruler.destroy();
            distance.destroy();
        };
        ruler.on("mouseenter", this.enter);
        distance.on("mouseenter", this.enter);
        ruler.on("mouseleave", this.leave);
        distance.on("mouseleave", this.leave);
        ruler.on("click", click);
        distance.on("click", click);
    }

    update(x2, y2) {
        const { x1, y1, ppm, ruler, distance, keepRect, keep } = this;
        const dx = x2 - x1;
        const dy = y2 - y1;
        const norm = Math.sqrt(dx * dx + dy * dy);
        const text = (norm / ppm).toFixed(1) + "m";
        const sign = x2 > x1 ? 1 : -1;
        const deltax = (dx / norm) * 20 * sign;
        const deltay = (dy / norm) * 20 * sign;
        const cx = (x1 + x2) / 2 + (dy / norm) * 10 * sign;
        const cy = (y1 + y2) / 2 - (dx / norm) * 10 * sign;
        const cx1 = cx - deltax;
        const cy1 = cy - deltay;
        const cx2 = cx + 2 * deltax;
        const cy2 = cy + 2 * deltay;
        const data = `M ${cx1},${cy1} L${cx2},${cy2}`;
        ruler.points([x1, y1, x2, y2]);
        distance.setAttrs({ text, data });
        const kx = (x1 + x2) / 2 - (dy / norm) * 20 * sign;
        const ky = (y1 + y2) / 2 + (dx / norm) * 20 * sign;
        const kx1 = kx - 0.95 * deltax;
        const ky1 = ky - 0.95 * deltay;
        const kx2 = kx + 0.95 * deltax;
        const ky2 = ky + 0.95 * deltay;
        const rotation = -(Math.atan2(dx, dy) / Math.PI) * 180 - 90;
        keepRect.setAttrs({ x: kx, y: ky, rotation });
        keep.setAttrs({ data: `M ${kx1},${ky1} L${kx2},${ky2}` });
        return norm;
    }

    show() {
        this.visible = true;
        this.ruler.visible(true);
        this.distance.visible(true);
    }

    hide(all = true) {
        this.visible = false;
        this.ruler.visible(false);
        this.distance.visible(false);
        if (all) {
            this.keep.visible(false);
            this.keepRect.visible(false);
            this.draft.forEach((shape) => shape.visible(false));
        }
    }
}

class SelectionRect {
    constructor(artboard) {
        this.artboard = artboard;
        this.planner = artboard.planner;
        this.canvas = artboard.container.firstChild;
        this.menu = artboard.menu;
        this.grid = artboard.grid;
        this.stage = artboard.stage;
        this.rect = new Konva.Rect({
            fill: "rgba(0,0,255,0.5)",
            visible: false,
        });
        this.selection = new Konva.Rect({
            fill: "rgba(255,255,255,0.0)",
            visible: false,
            stroke: "black",
            strokeWidth: 2,
            draggable: true,
            dragBoundFunc: ({ x, y }) => {
                const { padding } = artboard;
                const { width, height } = this.selection.attrs;
                const xMax = padding + artboard.width - width;
                const yMax = padding + artboard.height - height;
                if (x < padding) x = padding;
                if (y < padding) y = padding;
                if (x > xMax) x = xMax;
                if (y > yMax) y = yMax;
                return { x, y };
            },
        });
        this.selected = [];
        artboard.layers.top.add(this.rect, this.selection);
        this.visible = false;
        this.active = true;
        this.selectEvents();
        this.dragEvents();
    }

    selectEvents() {
        const { stage, artboard, rect } = this;
        stage.on("mousedown touchstart", (e) => {
            const { target } = e;
            if (!this.active || target !== stage) return;
            const { x, y } = stage.getPointerPosition();
            this.x1 = x;
            this.y1 = y;
            this.rect.setAttrs({ x, y });
            this.update(x, y);
            this.show();
            this.selected = [];
            this.menu.hide();
            this.selection.setAttrs({ visible: false });
        });
        stage.on("mousemove touchmove", () => {
            if (!this.visible || !this.active) return;
            const { x, y } = stage.getPointerPosition();
            this.update(x, y);
        });
        document.addEventListener("mouseup", () => {
            if (!this.visible || !this.active) {
                return;
            }
            this.hide();
            const box = rect.getClientRect();
            const images = artboard.layers.images.children;
            this.selected = images.filter((i) => Konva.Util.haveIntersection(box, i.getClientRect()));
            this.addAttached();
            this.showSelection();
        });
    }

    selectAttached(image) {
        const images = this.artboard.layers.images.children;
        const { type } = image;
        const seatsAttached = (corner) => images.filter((i) => i.type === "seat" && this.artboard.conflict(corner, i));
        const cornersAttached = (seat) => images.filter((i) => i.type === "corner" && this.artboard.conflict(seat, i));
        if (type === "corner") {
            const seats = seatsAttached(image);
            const corners = seats.flatMap(cornersAttached);
            return [...seats, ...corners, image];
        } else if (type === "seat") {
            const corners = cornersAttached(image);
            const seats = corners.flatMap(seatsAttached);
            return [...seats, ...corners, image];
        } else {
            return [image];
        }
    }

    addAttached() {
        while (true) {
            let n = this.selected.length;
            this.selected = this.selected.flatMap((i) => this.selectAttached(i));
            this.selected = [...new Set(this.selected)];
            if (n === this.selected.length) break;
        }
    }

    showSelectionWithoutMenu() {
        if (this.selected.length === 0) {
            this.hide();
            this.menu.hide();
            return;
        }
        const box = this.selectedBox();
        this.selection.setAttrs({ ...box, visible: true, rotation: 0 });
        this.selected.forEach((image) => image.moveToTop());
    }

    showSelection() {
        this.showSelectionWithoutMenu();
        if (this.selected.length > 0) this.menu.show(this);
    }

    moveSelected(dx, dy) {
        this.selected.forEach((image) =>
            image.setAttrs({
                x: image.attrs.x + dx,
                y: image.attrs.y + dy,
            })
        );
    }

    dropConflict() {
        const { selected, artboard } = this;
        return selected.some((s) => artboard.dropConflict(s, selected, artboard.padding));
    }

    dragEvents() {
        const { selection, canvas } = this;
        let x0, y0, prevX, prevY;
        selection.on("mouseover", () => {
            canvas.style.cursor = "pointer";
        });
        selection.on("mouseout", () => {
            canvas.style.cursor = "default";
        });
        selection.on("dragstart", () => {
            canvas.style.cursor = "move";
            x0 = selection.attrs.x;
            y0 = selection.attrs.y;
            prevX = x0;
            prevY = y0;
            this.menu.hide();
        });
        selection.on("dragmove", () => {
            this.drag = true;
            const { x, y } = selection.attrs;
            const dx = x - prevX;
            const dy = y - prevY;
            prevX = x;
            prevY = y;
            this.selection.setAttr("stroke", this.dropConflict() ? "red" : "black");
            this.moveSelected(dx, dy);
        });
        selection.on("dragend", () => {
            canvas.style.cursor = "pointer";
            const [dx, dy] = this.grid.roundPlace(selection);
            this.moveSelected(dx, dy);
            if (this.dropConflict()) {
                const { x, y } = selection.attrs;
                selection.setAttrs({ x: x0, y: y0 });
                this.moveSelected(x0 - x, y0 - y);
            }
            this.menu.show(this);
            this.drag = false;
            this.selection.setAttr("stroke", "black");
            this.selected.filter((i) => i.type === "seat").forEach((i) => i.moveToBottom());
            this.addAttached();
            this.showSelection();
            this.planner.checkPoint();
        });
    }

    selectedBox() {
        const { selected, artboard, grid } = this;
        const { imageConfig, ppm } = artboard;
        let xMin = artboard.width;
        let yMin = artboard.height;
        let xMax = 0;
        let yMax = 0;
        for (const image of selected) {
            if (image.type === "corner") continue;
            let { x, y, width, height } = image.getClientRect();
            if (image.type === "complex") {
                let offset = imageConfig[image.attrs.id].offset.map((o) => o * ppm);
                const shift = Math.round(image.attrs.rotation / 90);
                for (let i = 0; i < shift; i += 1) {
                    offset.unshift(offset[3]);
                    offset.pop();
                }
                x += -offset[0];
                y += -offset[1];
                width += offset[0] + offset[2];
                height += offset[1] + offset[3];
            }
            const x2 = x + width;
            const y2 = y + height;
            if (x < xMin) xMin = x;
            if (y < yMin) yMin = y;
            if (x2 > xMax) xMax = x2;
            if (y2 > yMax) yMax = y2;
        }
        const x = grid.round(xMin);
        const y = grid.round(yMin);
        return {
            x,
            y,
            width: grid.round(xMax) - x,
            height: grid.round(yMax) - y,
        };
    }

    update(x2, y2) {
        this.rect.setAttrs({ width: x2 - this.x1, height: y2 - this.y1 });
    }

    show() {
        this.visible = true;
        this.rect.visible(true);
    }

    hide() {
        this.visible = false;
        this.selected = [];
        this.rect.visible(false);
        this.selection.visible(false);
    }
}

class Selector {
    constructor(images, artboard, planner) {
        this.images = images;
        this.artboard = artboard;
        this.planner = planner;
        this.grid = artboard.grid;
        this.initCarousel();
    }

    initCarousel() {
        const imagesWrap = document.getElementsByClassName("images-wrap")[0];
        const size = 143;
        const figures = this.imageFigures();
        const length = figures.length;
        const container = document.getElementById("planner-images");
        container.innerHTML = "";
        container.style.width = `${size * length}px`;
        container.append(...figures);
        let offset = 0;
        const update = (sign) => {
            const wrapWidth = imagesWrap.getBoundingClientRect().width;
            const displayed = Math.floor(wrapWidth / size);
            const offsetMin = -length * size + displayed * size;
            offset += displayed * size * sign;
            if (offset >= 0) offset = 0;
            if (offset <= offsetMin) offset = offsetMin;
            this.updateChevrons([offset !== 0, offset !== offsetMin]);
            container.style.transform = `translateX(${offset}px)`;
        };
        this.chevrons = [document.getElementById("carousel-prev"), document.getElementById("carousel-next")];
        this.chevrons[0].addEventListener("click", () => update(1));
        this.chevrons[1].addEventListener("click", () => update(-1));
        this.updateChevrons([false, true]);
    }

    updateChevrons(visible) {
        this.chevrons.forEach((chevron, i) => {
            chevron.style.opacity = visible[i] ? 1 : 0;
        });
    }

    getDropXY(e) {
        const { offsetX, offsetY } = this.dragOptions;
        const container = this.artboard.container;
        const { left, top } = container.getBoundingClientRect();
        return [e.x - offsetX - left, e.y - offsetY - top];
    }

    imageFigures() {
        const { imageConfig } = this.artboard;
        return this.images.map(({ file, name, code, price }, i) => {
            if (price > 1000) {
                price = price.toString().replace(/(...)$/, " $1");
            }
            const figure = document.createElement("figure");
            figure.setAttribute("draggable", "true");
            const image = new Image();
            image.width = imageConfig[i].size[0] * 40;
            image.src = plannerImagesFolder + file;
            image.alt = name;
            this.initImageEvents(figure, i);
            figure.append(image);
            const figcaption = document.createElement("figcaption");
            figcaption.innerHTML = `${name}<br>${code}<br>${price} ${this.planner.currency}`;
            figure.append(figcaption);
            return figure;
        });
    }

    initImageEvents(image, imageId) {
        const { artboard, grid } = this;
        const { type, offset } = artboard.images[imageId];
        const ox = offset ? offset[0] : 0;
        const oy = offset ? offset[1] : 0;
        const ox2 = offset ? offset[2] : 0;
        const oy2 = offset ? offset[3] : 0;

        let [width, height] = artboard.getImageSize(imageId);
        width += ox + ox2;
        height += oy + oy2;
        const xMax = artboard.width - width + artboard.padding * 1.2;
        const yMax = artboard.height - height + artboard.padding;
        let dropConflict;
        const corner = type === "corner-left" || type === "corner-right";
        const complex = type === "complex";
        image.addEventListener("dragstart", (e) => {
            let offsetX = e.offsetX;
            let offsetY = e.offsetY;
            if (e.target.tagName === "FIGURE") {
                e.dataTransfer.setDragImage(e.target.childNodes[0], 0, 0);
                offsetX = 0;
                offsetY = 0;
            }
            this.planner.setRulerMode(false);
            this.artboard.selectionRect.hide();
            if (corner) {
                artboard.showMagnets(imageId);
            } else {
                grid.showShadows([
                    {
                        width,
                        height,
                        x: -width,
                        y: -height,
                        rotation: 0,
                        type,
                    },
                ]);
            }
            this.dragOptions = { offsetX, offsetY, imageId, x: -1, y: -1 };
        });
        image.addEventListener("drag", (e) => {
            const { offsetX, offsetY } = this.dragOptions;
            let [x, y] = this.getDropXY(e);
            if (x < 0 || y < 0) return;
            if (corner) {
                artboard.dragCorner(x + offsetX, y + offsetY, type === "corner-right");
            } else {
                if (x < artboard.padding) x = artboard.padding;
                if (y < artboard.padding) y = artboard.padding;
                if (x > xMax) x = xMax;
                if (y > yMax) y = yMax;
                grid.setShadows([{ x, y }]);
                dropConflict = grid.shadows.some((s) => artboard.dropConflict(s));
                grid.setShadows([{ fill: dropConflict ? "red" : "#FF7B17" }]);
            }
            this.dragOptions.x = x;
            this.dragOptions.y = y;
        });
        image.addEventListener("dragend", () => {
            const { x, y } = this.dragOptions;
            artboard.hideMagnets();
            grid.clearShadows();
            if (x === -1 || dropConflict) return;
            if (corner) {
                artboard.addCorner(imageId);
            } else if (complex) {
                artboard.addComplex(x, y, imageId);
            } else {
                const image = artboard.addImage(x, y, imageId);
                image.moveToBottom();
                this.grid.roundPlace(image, ox, oy);
            }
            this.planner.checkPoint();
        });
        image.addEventListener("mouseenter", () => {
            document.body.style.cursor = "pointer";
        });
        image.addEventListener("mouseout", () => {
            document.body.style.cursor = "default";
        });
    }
}

$(document).ready(function () {
    if (!document.getElementById("planner-wrap")) return;
    new Planner().run();
});
