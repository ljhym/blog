import{a5 as e,ak as t,i as a,al as n,am as o,an as s,ao as r,ap as l,a4 as u,s as i,m as c,p as d,n as p,v as f,ae as v,af as m,aa as y,aq as h,u as b,ag as g,ar as w,as as x,e as E,ah as O,t as S,w as I}from"./devibeans.5e029ef5.js";import{w as k,r as P,i as T,aa as C,e as F,f as L,ab as _,V as N,a2 as A,_ as R,ay as z,az as B,d as $,ae as j,S as M,$ as K,o as V,c as H,z as D,F as W,G as Q,u as U,K as q,a as G,q as X,l as Y,v as Z,ai as J,k as ee,s as te,X as ae,t as ne,n as oe,a9 as se,p as re}from"./index-9c9df3f1.js";function le(e){var a;const n=t(e);return null!=(a=null==n?void 0:n.$el)?a:n}const ue=a?window:void 0;function ie(...a){let s,r,l,u;if(n(a[0])||Array.isArray(a[0])?([r,l,u]=a,s=ue):[s,r,l,u]=a,!s)return o;Array.isArray(r)||(r=[r]),Array.isArray(l)||(l=[l]);const i=[],c=()=>{i.forEach((e=>e())),i.length=0},d=k((()=>[le(s),t(u)]),(([e,t])=>{c(),e&&i.push(...r.flatMap((a=>l.map((n=>((e,t,a,n)=>(e.addEventListener(t,a,n),()=>e.removeEventListener(t,a,n)))(e,a,n,t))))))}),{immediate:!0,flush:"post"}),p=()=>{d(),c()};return e(p),p}let ce=!1;function de(e,t,a={}){const{window:n=ue,ignore:s=[],capture:r=!0,detectIframe:u=!1}=a;if(!n)return;l&&!ce&&(ce=!0,Array.from(n.document.body.children).forEach((e=>e.addEventListener("click",o))));let i=!0;const c=e=>s.some((t=>{if("string"==typeof t)return Array.from(n.document.querySelectorAll(t)).some((t=>t===e.target||e.composedPath().includes(t)));{const a=le(t);return a&&(e.target===a||e.composedPath().includes(a))}})),d=[ie(n,"click",(a=>{const n=le(e);n&&n!==a.target&&!a.composedPath().includes(n)&&(0===a.detail&&(i=!c(a)),i?t(a):i=!0)}),{passive:!0,capture:r}),ie(n,"pointerdown",(t=>{const a=le(e);a&&(i=!t.composedPath().includes(a)&&!c(t))}),{passive:!0}),u&&ie(n,"blur",(a=>{var o;const s=le(e);"IFRAME"!==(null==(o=n.document.activeElement)?void 0:o.tagName)||(null==s?void 0:s.contains(n.document.activeElement))||t(a)}))].filter(Boolean);return()=>d.forEach((e=>e()))}function pe(e,t=!1){const a=P(),n=()=>a.value=Boolean(e());return n(),s(n,t),a}const fe="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};fe.__vueuse_ssr_handlers__=fe.__vueuse_ssr_handlers__||{};var ve=Object.getOwnPropertySymbols,me=Object.prototype.hasOwnProperty,ye=Object.prototype.propertyIsEnumerable;function he(t,a,n={}){const o=n,{window:s=ue}=o,r=((e,t)=>{var a={};for(var n in e)me.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&ve)for(var n of ve(e))t.indexOf(n)<0&&ye.call(e,n)&&(a[n]=e[n]);return a})(o,["window"]);let l;const u=pe((()=>s&&"ResizeObserver"in s)),i=()=>{l&&(l.disconnect(),l=void 0)},c=k((()=>le(t)),(e=>{i(),u.value&&s&&e&&(l=new ResizeObserver(a),l.observe(e,r))}),{immediate:!0,flush:"post"}),d=()=>{i(),c()};return e(d),{isSupported:u,stop:d}}var be,ge,we=Object.getOwnPropertySymbols,xe=Object.prototype.hasOwnProperty,Ee=Object.prototype.propertyIsEnumerable;function Oe(t,a,n={}){const o=n,{window:s=ue}=o,r=((e,t)=>{var a={};for(var n in e)xe.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&we)for(var n of we(e))t.indexOf(n)<0&&Ee.call(e,n)&&(a[n]=e[n]);return a})(o,["window"]);let l;const u=pe((()=>s&&"MutationObserver"in s)),i=()=>{l&&(l.disconnect(),l=void 0)},c=k((()=>le(t)),(e=>{i(),u.value&&s&&e&&(l=new MutationObserver(a),l.observe(e,r))}),{immediate:!0}),d=()=>{i(),c()};return e(d),{isSupported:u,stop:d}}(ge=be||(be={})).UP="UP",ge.RIGHT="RIGHT",ge.DOWN="DOWN",ge.LEFT="LEFT",ge.NONE="NONE";var Se=Object.defineProperty,Ie=Object.getOwnPropertySymbols,ke=Object.prototype.hasOwnProperty,Pe=Object.prototype.propertyIsEnumerable,Te=(e,t,a)=>t in e?Se(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;((e,t)=>{for(var a in t||(t={}))ke.call(t,a)&&Te(e,a,t[a]);if(Ie)for(var a of Ie(t))Pe.call(t,a)&&Te(e,a,t[a])})({linear:r},{easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]});function Ce(e){return null==e}class Fe extends Error{constructor(e){super(e),this.name="ElementPlusError"}}function Le(e,t){throw new Fe(`[${e}] ${t}`)}function _e(e,t){}let Ne;const Ae=e=>{var t;if(!a)return 0;if(void 0!==Ne)return Ne;const n=document.createElement("div");n.className=`${e}-scrollbar__wrap`,n.style.visibility="hidden",n.style.width="100px",n.style.position="absolute",n.style.top="-9999px",document.body.appendChild(n);const o=n.offsetWidth;n.style.overflow="scroll";const s=document.createElement("div");s.style.width="100%",n.appendChild(s);const r=s.offsetWidth;return null==(t=n.parentNode)||t.removeChild(n),Ne=o-r,Ne};function Re(e,t){if(!a)return;if(!t)return void(e.scrollTop=0);const n=[];let o=t.offsetParent;for(;null!==o&&e!==o&&e.contains(o);)n.push(o),o=o.offsetParent;const s=t.offsetTop+n.reduce(((e,t)=>e+t.offsetTop),0),r=s+t.offsetHeight,l=e.scrollTop,u=l+e.clientHeight;s<l?e.scrollTop=s:r>u&&(e.scrollTop=r-e.clientHeight)}const ze={tab:"Tab",enter:"Enter",space:"Space",left:"ArrowLeft",up:"ArrowUp",right:"ArrowRight",down:"ArrowDown",esc:"Escape",delete:"Delete",backspace:"Backspace",numpadEnter:"NumpadEnter",pageUp:"PageUp",pageDown:"PageDown",home:"Home",end:"End"},Be="update:modelValue",$e="change",je=e=>/([\uAC00-\uD7AF\u3130-\u318F])+/gi.test(e),Me=e=>e,Ke=["class","style"],Ve=/^on[A-Z]/;let He=[];const De=e=>{const t=e;t.key===ze.esc&&He.forEach((e=>e(t)))};function We(e,{afterFocus:t,beforeBlur:a,afterBlur:n}={}){const o=C(),{emit:s}=o,r=_(),l=P(!1);return k(r,(e=>{e&&e.setAttribute("tabindex","-1")})),ie(r,"click",(()=>{var t;null==(t=e.value)||t.focus()})),{wrapperRef:r,isFocused:l,handleFocus:e=>{l.value||(l.value=!0,s("focus",e),null==t||t())},handleBlur:e=>{var t;!!N(a)&&a(e)||e.relatedTarget&&(null==(t=r.value)?void 0:t.contains(e.relatedTarget))||(l.value=!1,s("blur",e),null==n||n())}}}let Qe;const Ue=`\n  height:0 !important;\n  visibility:hidden !important;\n  ${a&&/firefox/i.test(window.navigator.userAgent)?"":"overflow:hidden !important;"}\n  position:absolute !important;\n  z-index:-1000 !important;\n  top:0 !important;\n  right:0 !important;\n`,qe=["letter-spacing","line-height","padding-top","padding-bottom","font-family","font-weight","font-size","text-rendering","text-transform","width","text-indent","padding-left","padding-right","border-width","box-sizing"];function Ge(e,t=1,a){var n;Qe||(Qe=document.createElement("textarea"),document.body.appendChild(Qe));const{paddingSize:o,borderSize:s,boxSizing:r,contextStyle:l}=function(e){const t=window.getComputedStyle(e),a=t.getPropertyValue("box-sizing"),n=Number.parseFloat(t.getPropertyValue("padding-bottom"))+Number.parseFloat(t.getPropertyValue("padding-top")),o=Number.parseFloat(t.getPropertyValue("border-bottom-width"))+Number.parseFloat(t.getPropertyValue("border-top-width"));return{contextStyle:qe.map((e=>`${e}:${t.getPropertyValue(e)}`)).join(";"),paddingSize:n,borderSize:o,boxSizing:a}}(e);Qe.setAttribute("style",`${l};${Ue}`),Qe.value=e.value||e.placeholder||"";let u=Qe.scrollHeight;const c={};"border-box"===r?u+=s:"content-box"===r&&(u-=o),Qe.value="";const d=Qe.scrollHeight-o;if(i(t)){let e=d*t;"border-box"===r&&(e=e+o+s),u=Math.max(e,u),c.minHeight=`${e}px`}if(i(a)){let e=d*a;"border-box"===r&&(e=e+o+s),u=Math.min(e,u)}return c.height=`${u}px`,null==(n=Qe.parentNode)||n.removeChild(Qe),Qe=void 0,c}const Xe=c({id:{type:String,default:void 0},size:d,disabled:Boolean,modelValue:{type:p([String,Number,Object]),default:""},maxlength:{type:[String,Number]},minlength:{type:[String,Number]},type:{type:String,default:"text"},resize:{type:String,values:["none","both","horizontal","vertical"]},autosize:{type:p([Boolean,Object]),default:!1},autocomplete:{type:String,default:"off"},formatter:{type:Function},parser:{type:Function},placeholder:{type:String},form:{type:String},readonly:{type:Boolean,default:!1},clearable:{type:Boolean,default:!1},showPassword:{type:Boolean,default:!1},showWordLimit:{type:Boolean,default:!1},suffixIcon:{type:f},prefixIcon:{type:f},containerRole:{type:String,default:void 0},label:{type:String,default:void 0},tabindex:{type:[String,Number],default:0},validateEvent:{type:Boolean,default:!0},inputStyle:{type:p([Object,Array,String]),default:()=>({})},autofocus:{type:Boolean,default:!1}}),Ye={"update:modelValue":e=>A(e),input:e=>A(e),change:e=>A(e),focus:e=>e instanceof FocusEvent,blur:e=>e instanceof FocusEvent,clear:()=>!0,mouseleave:e=>e instanceof MouseEvent,mouseenter:e=>e instanceof MouseEvent,keydown:e=>e instanceof Event,compositionstart:e=>e instanceof CompositionEvent,compositionupdate:e=>e instanceof CompositionEvent,compositionend:e=>e instanceof CompositionEvent},Ze=["role"],Je=["id","minlength","maxlength","type","disabled","readonly","autocomplete","tabindex","aria-label","placeholder","form","autofocus"],et=["id","minlength","maxlength","tabindex","disabled","readonly","autocomplete","aria-label","placeholder","form","autofocus"],tt=R({name:"ElInput",inheritAttrs:!1});const at=I(S(R({...tt,props:Xe,emits:Ye,setup(e,{expose:t,emit:n}){const o=e,s=z(),r=B(),l=T((()=>{const e={};return"combobox"===o.containerRole&&(e["aria-haspopup"]=s["aria-haspopup"],e["aria-owns"]=s["aria-owns"],e["aria-expanded"]=s["aria-expanded"]),e})),i=T((()=>["textarea"===o.type?A.b():N.b(),N.m(I.value),N.is("disabled",L.value),N.is("exceed",Fe.value),{[N.b("group")]:r.prepend||r.append,[N.bm("group","append")]:r.append,[N.bm("group","prepend")]:r.prepend,[N.m("prefix")]:r.prefix||o.prefixIcon,[N.m("suffix")]:r.suffix||o.suffixIcon||o.clearable||o.showPassword,[N.bm("suffix","password-clear")]:Ie.value&&ke.value},s.class])),c=T((()=>[N.e("wrapper"),N.is("focus",ve.value)])),d=((e={})=>{const{excludeListeners:t=!1,excludeKeys:a}=e,n=T((()=>((null==a?void 0:a.value)||[]).concat(Ke))),o=C();return T(o?()=>{var e;return u(Object.entries(null==(e=o.proxy)?void 0:e.$attrs).filter((([e])=>!(n.value.includes(e)||t&&Ve.test(e)))))}:()=>({}))})({excludeKeys:T((()=>Object.keys(l.value)))}),{form:p,formItem:f}=v(),{inputId:S}=m(o,{formItemContext:f}),I=y(),L=h(),N=b("input"),A=b("textarea"),R=_(),re=_(),le=P(!1),ue=P(!1),ie=P(!1),ce=P(),de=_(o.inputStyle),pe=T((()=>R.value||re.value)),{wrapperRef:fe,isFocused:ve,handleFocus:me,handleBlur:ye}=We(pe,{afterBlur(){var e;o.validateEvent&&(null==(e=null==f?void 0:f.validate)||e.call(f,"blur").catch((e=>{})))}}),be=T((()=>{var e;return null!=(e=null==p?void 0:p.statusIcon)&&e})),ge=T((()=>(null==f?void 0:f.validateState)||"")),we=T((()=>ge.value&&g[ge.value])),xe=T((()=>ie.value?w:x)),Ee=T((()=>[s.style])),Oe=T((()=>[o.inputStyle,de.value,{resize:o.resize}])),Se=T((()=>Ce(o.modelValue)?"":String(o.modelValue))),Ie=T((()=>o.clearable&&!L.value&&!o.readonly&&!!Se.value&&(ve.value||le.value))),ke=T((()=>o.showPassword&&!L.value&&!o.readonly&&!!Se.value&&(!!Se.value||ve.value))),Pe=T((()=>o.showWordLimit&&!!o.maxlength&&("text"===o.type||"textarea"===o.type)&&!L.value&&!o.readonly&&!o.showPassword)),Te=T((()=>Se.value.length)),Fe=T((()=>!!Pe.value&&Te.value>Number(o.maxlength))),Le=T((()=>!!r.suffix||!!o.suffixIcon||Ie.value||o.showPassword||Pe.value||!!ge.value&&be.value)),[_e,Ne]=function(e){const t=P();return[function(){if(null==e.value)return;const{selectionStart:a,selectionEnd:n,value:o}=e.value;if(null==a||null==n)return;const s=o.slice(0,Math.max(0,a)),r=o.slice(Math.max(0,n));t.value={selectionStart:a,selectionEnd:n,value:o,beforeTxt:s,afterTxt:r}},function(){if(null==e.value||null==t.value)return;const{value:a}=e.value,{beforeTxt:n,afterTxt:o,selectionStart:s}=t.value;if(null==n||null==o||null==s)return;let r=a.length;if(a.endsWith(o))r=a.length-o.length;else if(a.startsWith(n))r=n.length;else{const e=n[s-1],t=a.indexOf(e,s-1);-1!==t&&(r=t+1)}e.value.setSelectionRange(r,r)}]}(R);he(re,(e=>{if(Re(),!Pe.value||"both"!==o.resize)return;const t=e[0],{width:a}=t.contentRect;ce.value={right:`calc(100% - ${a+15+6}px)`}}));const Ae=()=>{const{type:e,autosize:t}=o;if(a&&"textarea"===e&&re.value)if(t){const e=se(t)?t.minRows:void 0,a=se(t)?t.maxRows:void 0,n=Ge(re.value,e,a);de.value={overflowY:"hidden",...n},$((()=>{re.value.offsetHeight,de.value=n}))}else de.value={minHeight:Ge(re.value).minHeight}},Re=(e=>{let t=!1;return()=>{var a;if(t||!o.autosize)return;null===(null==(a=re.value)?void 0:a.offsetParent)||(e(),t=!0)}})(Ae),ze=()=>{const e=pe.value,t=o.formatter?o.formatter(Se.value):Se.value;e&&e.value!==t&&(e.value=t)},Be=async e=>{_e();let{value:t}=e.target;o.formatter&&(t=o.parser?o.parser(t):t),ue.value||(t!==Se.value?(n("update:modelValue",t),n("input",t),await $(),ze(),Ne()):ze())},$e=e=>{n("change",e.target.value)},Me=e=>{n("compositionstart",e),ue.value=!0},He=e=>{var t;n("compositionupdate",e);const a=null==(t=e.target)?void 0:t.value,o=a[a.length-1]||"";ue.value=!je(o)},De=e=>{n("compositionend",e),ue.value&&(ue.value=!1,Be(e))},Qe=()=>{ie.value=!ie.value,Ue()},Ue=async()=>{var e;await $(),null==(e=pe.value)||e.focus()},qe=e=>{le.value=!1,n("mouseleave",e)},Xe=e=>{le.value=!0,n("mouseenter",e)},Ye=e=>{n("keydown",e)},tt=()=>{n("update:modelValue",""),n("change",""),n("clear"),n("input","")};return k((()=>o.modelValue),(()=>{var e;$((()=>Ae())),o.validateEvent&&(null==(e=null==f?void 0:f.validate)||e.call(f,"change").catch((e=>{})))})),k(Se,(()=>ze())),k((()=>o.type),(async()=>{await $(),ze(),Ae()})),F((()=>{!o.formatter&&o.parser,ze(),$(Ae)})),t({input:R,textarea:re,ref:pe,textareaStyle:Oe,autosize:j(o,"autosize"),focus:Ue,blur:()=>{var e;return null==(e=pe.value)?void 0:e.blur()},select:()=>{var e;null==(e=pe.value)||e.select()},clear:tt,resizeTextarea:Ae}),(e,t)=>M((V(),H("div",J(U(l),{class:U(i),style:U(Ee),role:e.containerRole,onMouseenter:Xe,onMouseleave:qe}),[D(" input "),"textarea"!==e.type?(V(),H(W,{key:0},[D(" prepend slot "),e.$slots.prepend?(V(),H("div",{key:0,class:Q(U(N).be("group","prepend"))},[q(e.$slots,"prepend")],2)):D("v-if",!0),G("div",{ref_key:"wrapperRef",ref:fe,class:Q(U(c))},[D(" prefix slot "),e.$slots.prefix||e.prefixIcon?(V(),H("span",{key:0,class:Q(U(N).e("prefix"))},[G("span",{class:Q(U(N).e("prefix-inner"))},[q(e.$slots,"prefix"),e.prefixIcon?(V(),X(U(E),{key:0,class:Q(U(N).e("icon"))},{default:Y((()=>[(V(),X(Z(e.prefixIcon)))])),_:1},8,["class"])):D("v-if",!0)],2)],2)):D("v-if",!0),G("input",J({id:U(S),ref_key:"input",ref:R,class:U(N).e("inner")},U(d),{minlength:e.minlength,maxlength:e.maxlength,type:e.showPassword?ie.value?"text":"password":e.type,disabled:U(L),readonly:e.readonly,autocomplete:e.autocomplete,tabindex:e.tabindex,"aria-label":e.label,placeholder:e.placeholder,style:e.inputStyle,form:e.form,autofocus:e.autofocus,onCompositionstart:Me,onCompositionupdate:He,onCompositionend:De,onInput:Be,onFocus:t[0]||(t[0]=(...e)=>U(me)&&U(me)(...e)),onBlur:t[1]||(t[1]=(...e)=>U(ye)&&U(ye)(...e)),onChange:$e,onKeydown:Ye}),null,16,Je),D(" suffix slot "),U(Le)?(V(),H("span",{key:1,class:Q(U(N).e("suffix"))},[G("span",{class:Q(U(N).e("suffix-inner"))},[U(Ie)&&U(ke)&&U(Pe)?D("v-if",!0):(V(),H(W,{key:0},[q(e.$slots,"suffix"),e.suffixIcon?(V(),X(U(E),{key:0,class:Q(U(N).e("icon"))},{default:Y((()=>[(V(),X(Z(e.suffixIcon)))])),_:1},8,["class"])):D("v-if",!0)],64)),U(Ie)?(V(),X(U(E),{key:1,class:Q([U(N).e("icon"),U(N).e("clear")]),onMousedown:te(U(ae),["prevent"]),onClick:tt},{default:Y((()=>[ee(U(O))])),_:1},8,["class","onMousedown"])):D("v-if",!0),U(ke)?(V(),X(U(E),{key:2,class:Q([U(N).e("icon"),U(N).e("password")]),onClick:Qe},{default:Y((()=>[(V(),X(Z(U(xe))))])),_:1},8,["class"])):D("v-if",!0),U(Pe)?(V(),H("span",{key:3,class:Q(U(N).e("count"))},[G("span",{class:Q(U(N).e("count-inner"))},ne(U(Te))+" / "+ne(e.maxlength),3)],2)):D("v-if",!0),U(ge)&&U(we)&&U(be)?(V(),X(U(E),{key:4,class:Q([U(N).e("icon"),U(N).e("validateIcon"),U(N).is("loading","validating"===U(ge))])},{default:Y((()=>[(V(),X(Z(U(we))))])),_:1},8,["class"])):D("v-if",!0)],2)],2)):D("v-if",!0)],2),D(" append slot "),e.$slots.append?(V(),H("div",{key:1,class:Q(U(N).be("group","append"))},[q(e.$slots,"append")],2)):D("v-if",!0)],64)):(V(),H(W,{key:1},[D(" textarea "),G("textarea",J({id:U(S),ref_key:"textarea",ref:re,class:U(A).e("inner")},U(d),{minlength:e.minlength,maxlength:e.maxlength,tabindex:e.tabindex,disabled:U(L),readonly:e.readonly,autocomplete:e.autocomplete,style:U(Oe),"aria-label":e.label,placeholder:e.placeholder,form:e.form,autofocus:e.autofocus,onCompositionstart:Me,onCompositionupdate:He,onCompositionend:De,onInput:Be,onFocus:t[2]||(t[2]=(...e)=>U(me)&&U(me)(...e)),onBlur:t[3]||(t[3]=(...e)=>U(ye)&&U(ye)(...e)),onChange:$e,onKeydown:Ye}),null,16,et),U(Pe)?(V(),H("span",{key:0,style:oe(ce.value),class:Q(U(N).e("count"))},ne(U(Te))+" / "+ne(e.maxlength),7)):D("v-if",!0)],64))],16,Ze)),[[K,"hidden"!==e.type]])}}),[["__file","input.vue"]])),nt={cancelable:!0,bubbles:!1},ot={cancelable:!0,bubbles:!1},st=Symbol("elFocusTrap"),rt=P(),lt=P(0),ut=P(0);let it=0;const ct=e=>{const t=[],a=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:e=>{const t="INPUT"===e.tagName&&"hidden"===e.type;return e.disabled||e.hidden||t?NodeFilter.FILTER_SKIP:e.tabIndex>=0||e===document.activeElement?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;a.nextNode();)t.push(a.currentNode);return t},dt=(e,t)=>{for(const a of e)if(!pt(a,t))return a},pt=(e,t)=>{if("hidden"===getComputedStyle(e).visibility)return!0;for(;e;){if(t&&e===t)return!1;if("none"===getComputedStyle(e).display)return!0;e=e.parentElement}return!1},ft=(e,t)=>{if(e&&e.focus){const a=document.activeElement;e.focus({preventScroll:!0}),ut.value=window.performance.now(),e!==a&&(e=>e instanceof HTMLInputElement&&"select"in e)(e)&&t&&e.select()}};function vt(e,t){const a=[...e],n=e.indexOf(t);return-1!==n&&a.splice(n,1),a}const mt=(()=>{let e=[];return{push:t=>{const a=e[0];a&&t!==a&&a.pause(),e=vt(e,t),e.unshift(t)},remove:t=>{var a,n;e=vt(e,t),null==(n=null==(a=e[0])?void 0:a.resume)||n.call(a)}}})(),yt=()=>{rt.value="pointer",lt.value=window.performance.now()},ht=()=>{rt.value="keyboard",lt.value=window.performance.now()},bt=e=>new CustomEvent("focus-trap.focusout-prevented",{...ot,detail:e});var gt=S(R({name:"ElFocusTrap",inheritAttrs:!1,props:{loop:Boolean,trapped:Boolean,focusTrapEl:Object,focusStartEl:{type:[Object,String],default:"first"}},emits:["focusAfterTrapped","focusAfterReleased","focusin","focusout","focusout-prevented","release-requested"],setup(e,{emit:t}){const n=P();let o,s;const{focusReason:r}=(F((()=>{0===it&&(document.addEventListener("mousedown",yt),document.addEventListener("touchstart",yt),document.addEventListener("keydown",ht)),it++})),L((()=>{it--,it<=0&&(document.removeEventListener("mousedown",yt),document.removeEventListener("touchstart",yt),document.removeEventListener("keydown",ht))})),{focusReason:rt,lastUserFocusTimestamp:lt,lastAutomatedFocusTimestamp:ut});var l;l=a=>{e.trapped&&!u.paused&&t("release-requested",a)},F((()=>{0===He.length&&document.addEventListener("keydown",De),a&&He.push(l)})),L((()=>{He=He.filter((e=>e!==l)),0===He.length&&a&&document.removeEventListener("keydown",De)}));const u={paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}},i=a=>{if(!e.loop&&!e.trapped)return;if(u.paused)return;const{key:n,altKey:o,ctrlKey:s,metaKey:l,currentTarget:i,shiftKey:c}=a,{loop:d}=e,p=n===ze.tab&&!o&&!s&&!l,f=document.activeElement;if(p&&f){const e=i,[n,o]=(e=>{const t=ct(e);return[dt(t,e),dt(t.reverse(),e)]})(e);if(n&&o)if(c||f!==o){if(c&&[n,e].includes(f)){const e=bt({focusReason:r.value});t("focusout-prevented",e),e.defaultPrevented||(a.preventDefault(),d&&ft(o,!0))}}else{const e=bt({focusReason:r.value});t("focusout-prevented",e),e.defaultPrevented||(a.preventDefault(),d&&ft(n,!0))}else if(f===e){const e=bt({focusReason:r.value});t("focusout-prevented",e),e.defaultPrevented||a.preventDefault()}}};re(st,{focusTrapRef:n,onKeydown:i}),k((()=>e.focusTrapEl),(e=>{e&&(n.value=e)}),{immediate:!0}),k([n],(([e],[t])=>{e&&(e.addEventListener("keydown",i),e.addEventListener("focusin",p),e.addEventListener("focusout",f)),t&&(t.removeEventListener("keydown",i),t.removeEventListener("focusin",p),t.removeEventListener("focusout",f))}));const c=e=>{t("focusAfterTrapped",e)},d=e=>t("focusAfterReleased",e),p=a=>{const r=U(n);if(!r)return;const l=a.target,i=a.relatedTarget,c=l&&r.contains(l);if(!e.trapped){i&&r.contains(i)||(o=i)}c&&t("focusin",a),u.paused||e.trapped&&(c?s=l:ft(s,!0))},f=a=>{const o=U(n);if(!u.paused&&o)if(e.trapped){const n=a.relatedTarget;Ce(n)||o.contains(n)||setTimeout((()=>{if(!u.paused&&e.trapped){const e=bt({focusReason:r.value});t("focusout-prevented",e),e.defaultPrevented||ft(s,!0)}}),0)}else{const e=a.target;e&&o.contains(e)||t("focusout",a)}};async function v(){await $();const t=U(n);if(t){mt.push(u);const a=t.contains(document.activeElement)?o:document.activeElement;o=a;if(!t.contains(a)){const n=new Event("focus-trap.focus-after-trapped",nt);t.addEventListener("focus-trap.focus-after-trapped",c),t.dispatchEvent(n),n.defaultPrevented||$((()=>{let n=e.focusStartEl;A(n)||(ft(n),document.activeElement!==n&&(n="first")),"first"===n&&((e,t=!1)=>{const a=document.activeElement;for(const n of e)if(ft(n,t),document.activeElement!==a)return})(ct(t),!0),document.activeElement!==a&&"container"!==n||ft(t)}))}}}function m(){const e=U(n);if(e){e.removeEventListener("focus-trap.focus-after-trapped",c);const t=new CustomEvent("focus-trap.focus-after-released",{...nt,detail:{focusReason:r.value}});e.addEventListener("focus-trap.focus-after-released",d),e.dispatchEvent(t),t.defaultPrevented||"keyboard"!=r.value&&lt.value>ut.value&&!e.contains(document.activeElement)||ft(null!=o?o:document.body),e.removeEventListener("focus-trap.focus-after-released",d),mt.remove(u)}}return F((()=>{e.trapped&&v(),k((()=>e.trapped),(e=>{e?v():m()}))})),L((()=>{e.trapped&&m()})),{onKeydown:i}}}),[["render",function(e,t,a,n,o,s){return q(e.$slots,"default",{handleKeydown:e.onKeydown})}],["__file","focus-trap.vue"]]);export{$e as C,at as E,Be as U,ze as a,he as b,gt as c,le as d,je as e,We as f,Ae as g,_e as h,Ce as i,Oe as j,Me as m,de as o,Re as s,Le as t,ie as u};
