import"https://code.jquery.com/jquery-3.6.0.min.js";var Bi="top",Ao="bottom",vo="right",Li="left",Tu="auto",Lc=[Bi,Ao,vo,Li],ja="start",Dc="end",mC="clippingParents",rp="viewport",yc="popper",kC="reference",Jf=Lc.reduce(function(E,h){return E.concat([h+"-"+ja,h+"-"+Dc])},[]),sp=[].concat(Lc,[Tu]).reduce(function(E,h){return E.concat([h,h+"-"+ja,h+"-"+Dc])},[]),bC="beforeRead",_C="read",wC="afterRead",AC="beforeMain",vC="main",CC="afterMain",yC="beforeWrite",EC="write",xC="afterWrite",TC=[bC,_C,wC,AC,vC,CC,yC,EC,xC];function Gr(E){return E?(E.nodeName||"").toLowerCase():null}function Co(E){if(E==null)return window;if(E.toString()!=="[object Window]"){var h=E.ownerDocument;return h&&h.defaultView||window}return E}function Fa(E){var h=Co(E).Element;return E instanceof h||E instanceof Element}function er(E){var h=Co(E).HTMLElement;return E instanceof h||E instanceof HTMLElement}function ap(E){if(typeof ShadowRoot>"u")return!1;var h=Co(E).ShadowRoot;return E instanceof h||E instanceof ShadowRoot}function uM(E){var h=E.state;Object.keys(h.elements).forEach(function(A){var R=h.styles[A]||{},V=h.attributes[A]||{},f=h.elements[A];!er(f)||!Gr(f)||(Object.assign(f.style,R),Object.keys(V).forEach(function(L){var B=V[L];B===!1?f.removeAttribute(L):f.setAttribute(L,B===!0?"":B)}))})}function hM(E){var h=E.state,A={popper:{position:h.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(h.elements.popper.style,A.popper),h.styles=A,h.elements.arrow&&Object.assign(h.elements.arrow.style,A.arrow),function(){Object.keys(h.elements).forEach(function(R){var V=h.elements[R],f=h.attributes[R]||{},L=Object.keys(h.styles.hasOwnProperty(R)?h.styles[R]:A[R]),B=L.reduce(function(_,q){return _[q]="",_},{});!er(V)||!Gr(V)||(Object.assign(V.style,B),Object.keys(f).forEach(function(_){V.removeAttribute(_)}))})}}const cp={name:"applyStyles",enabled:!0,phase:"write",fn:uM,effect:hM,requires:["computeStyles"]};function Wr(E){return E.split("-")[0]}var za=Math.max,vu=Math.min,Sc=Math.round;function Xf(){var E=navigator.userAgentData;return E!=null&&E.brands&&Array.isArray(E.brands)?E.brands.map(function(h){return h.brand+"/"+h.version}).join(" "):navigator.userAgent}function DC(){return!/^((?!chrome|android).)*safari/i.test(Xf())}function Ic(E,h,A){h===void 0&&(h=!1),A===void 0&&(A=!1);var R=E.getBoundingClientRect(),V=1,f=1;h&&er(E)&&(V=E.offsetWidth>0&&Sc(R.width)/E.offsetWidth||1,f=E.offsetHeight>0&&Sc(R.height)/E.offsetHeight||1);var L=Fa(E)?Co(E):window,B=L.visualViewport,_=!DC()&&A,q=(R.left+(_&&B?B.offsetLeft:0))/V,U=(R.top+(_&&B?B.offsetTop:0))/f,H=R.width/V,x=R.height/f;return{width:H,height:x,top:U,right:q+H,bottom:U+x,left:q,x:q,y:U}}function lp(E){var h=Ic(E),A=E.offsetWidth,R=E.offsetHeight;return Math.abs(h.width-A)<=1&&(A=h.width),Math.abs(h.height-R)<=1&&(R=h.height),{x:E.offsetLeft,y:E.offsetTop,width:A,height:R}}function SC(E,h){var A=h.getRootNode&&h.getRootNode();if(E.contains(h))return!0;if(A&&ap(A)){var R=h;do{if(R&&E.isSameNode(R))return!0;R=R.parentNode||R.host}while(R)}return!1}function ys(E){return Co(E).getComputedStyle(E)}function fM(E){return["table","td","th"].indexOf(Gr(E))>=0}function ia(E){return((Fa(E)?E.ownerDocument:E.document)||window.document).documentElement}function Du(E){return Gr(E)==="html"?E:E.assignedSlot||E.parentNode||(ap(E)?E.host:null)||ia(E)}function Nv(E){return!er(E)||ys(E).position==="fixed"?null:E.offsetParent}function pM(E){var h=/firefox/i.test(Xf()),A=/Trident/i.test(Xf());if(A&&er(E)){var R=ys(E);if(R.position==="fixed")return null}var V=Du(E);for(ap(V)&&(V=V.host);er(V)&&["html","body"].indexOf(Gr(V))<0;){var f=ys(V);if(f.transform!=="none"||f.perspective!=="none"||f.contain==="paint"||["transform","perspective"].indexOf(f.willChange)!==-1||h&&f.willChange==="filter"||h&&f.filter&&f.filter!=="none")return V;V=V.parentNode}return null}function jl(E){for(var h=Co(E),A=Nv(E);A&&fM(A)&&ys(A).position==="static";)A=Nv(A);return A&&(Gr(A)==="html"||Gr(A)==="body"&&ys(A).position==="static")?h:A||pM(E)||h}function dp(E){return["top","bottom"].indexOf(E)>=0?"x":"y"}function Pl(E,h,A){return za(E,vu(h,A))}function gM(E,h,A){var R=Pl(E,h,A);return R>A?A:R}function IC(){return{top:0,right:0,bottom:0,left:0}}function MC(E){return Object.assign({},IC(),E)}function NC(E,h){return h.reduce(function(A,R){return A[R]=E,A},{})}var mM=function(h,A){return h=typeof h=="function"?h(Object.assign({},A.rects,{placement:A.placement})):h,MC(typeof h!="number"?h:NC(h,Lc))};function kM(E){var h,A=E.state,R=E.name,V=E.options,f=A.elements.arrow,L=A.modifiersData.popperOffsets,B=Wr(A.placement),_=dp(B),q=[Li,vo].indexOf(B)>=0,U=q?"height":"width";if(!(!f||!L)){var H=mM(V.padding,A),x=lp(f),P=_==="y"?Bi:Li,Y=_==="y"?Ao:vo,Q=A.rects.reference[U]+A.rects.reference[_]-L[_]-A.rects.popper[U],it=L[_]-A.rects.reference[_],at=jl(f),rt=at?_==="y"?at.clientHeight||0:at.clientWidth||0:0,yt=Q/2-it/2,xt=H[P],Ht=rt-x[U]-H[Y],Kt=rt/2-x[U]/2+yt,m=Pl(xt,Kt,Ht),It=_;A.modifiersData[R]=(h={},h[It]=m,h.centerOffset=m-Kt,h)}}function bM(E){var h=E.state,A=E.options,R=A.element,V=R===void 0?"[data-popper-arrow]":R;V!=null&&(typeof V=="string"&&(V=h.elements.popper.querySelector(V),!V)||SC(h.elements.popper,V)&&(h.elements.arrow=V))}const OC={name:"arrow",enabled:!0,phase:"main",fn:kM,effect:bM,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function Mc(E){return E.split("-")[1]}var _M={top:"auto",right:"auto",bottom:"auto",left:"auto"};function wM(E,h){var A=E.x,R=E.y,V=h.devicePixelRatio||1;return{x:Sc(A*V)/V||0,y:Sc(R*V)/V||0}}function Ov(E){var h,A=E.popper,R=E.popperRect,V=E.placement,f=E.variation,L=E.offsets,B=E.position,_=E.gpuAcceleration,q=E.adaptive,U=E.roundOffsets,H=E.isFixed,x=L.x,P=x===void 0?0:x,Y=L.y,Q=Y===void 0?0:Y,it=typeof U=="function"?U({x:P,y:Q}):{x:P,y:Q};P=it.x,Q=it.y;var at=L.hasOwnProperty("x"),rt=L.hasOwnProperty("y"),yt=Li,xt=Bi,Ht=window;if(q){var Kt=jl(A),m="clientHeight",It="clientWidth";if(Kt===Co(A)&&(Kt=ia(A),ys(Kt).position!=="static"&&B==="absolute"&&(m="scrollHeight",It="scrollWidth")),Kt=Kt,V===Bi||(V===Li||V===vo)&&f===Dc){xt=Ao;var Bt=H&&Kt===Ht&&Ht.visualViewport?Ht.visualViewport.height:Kt[m];Q-=Bt-R.height,Q*=_?1:-1}if(V===Li||(V===Bi||V===Ao)&&f===Dc){yt=vo;var te=H&&Kt===Ht&&Ht.visualViewport?Ht.visualViewport.width:Kt[It];P-=te-R.width,P*=_?1:-1}}var ae=Object.assign({position:B},q&&_M),me=U===!0?wM({x:P,y:Q},Co(A)):{x:P,y:Q};if(P=me.x,Q=me.y,_){var Ut;return Object.assign({},ae,(Ut={},Ut[xt]=rt?"0":"",Ut[yt]=at?"0":"",Ut.transform=(Ht.devicePixelRatio||1)<=1?"translate("+P+"px, "+Q+"px)":"translate3d("+P+"px, "+Q+"px, 0)",Ut))}return Object.assign({},ae,(h={},h[xt]=rt?Q+"px":"",h[yt]=at?P+"px":"",h.transform="",h))}function AM(E){var h=E.state,A=E.options,R=A.gpuAcceleration,V=R===void 0?!0:R,f=A.adaptive,L=f===void 0?!0:f,B=A.roundOffsets,_=B===void 0?!0:B,q={placement:Wr(h.placement),variation:Mc(h.placement),popper:h.elements.popper,popperRect:h.rects.popper,gpuAcceleration:V,isFixed:h.options.strategy==="fixed"};h.modifiersData.popperOffsets!=null&&(h.styles.popper=Object.assign({},h.styles.popper,Ov(Object.assign({},q,{offsets:h.modifiersData.popperOffsets,position:h.options.strategy,adaptive:L,roundOffsets:_})))),h.modifiersData.arrow!=null&&(h.styles.arrow=Object.assign({},h.styles.arrow,Ov(Object.assign({},q,{offsets:h.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:_})))),h.attributes.popper=Object.assign({},h.attributes.popper,{"data-popper-placement":h.placement})}const up={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:AM,data:{}};var hu={passive:!0};function vM(E){var h=E.state,A=E.instance,R=E.options,V=R.scroll,f=V===void 0?!0:V,L=R.resize,B=L===void 0?!0:L,_=Co(h.elements.popper),q=[].concat(h.scrollParents.reference,h.scrollParents.popper);return f&&q.forEach(function(U){U.addEventListener("scroll",A.update,hu)}),B&&_.addEventListener("resize",A.update,hu),function(){f&&q.forEach(function(U){U.removeEventListener("scroll",A.update,hu)}),B&&_.removeEventListener("resize",A.update,hu)}}const hp={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:vM,data:{}};var CM={left:"right",right:"left",bottom:"top",top:"bottom"};function _u(E){return E.replace(/left|right|bottom|top/g,function(h){return CM[h]})}var yM={start:"end",end:"start"};function Bv(E){return E.replace(/start|end/g,function(h){return yM[h]})}function fp(E){var h=Co(E),A=h.pageXOffset,R=h.pageYOffset;return{scrollLeft:A,scrollTop:R}}function pp(E){return Ic(ia(E)).left+fp(E).scrollLeft}function EM(E,h){var A=Co(E),R=ia(E),V=A.visualViewport,f=R.clientWidth,L=R.clientHeight,B=0,_=0;if(V){f=V.width,L=V.height;var q=DC();(q||!q&&h==="fixed")&&(B=V.offsetLeft,_=V.offsetTop)}return{width:f,height:L,x:B+pp(E),y:_}}function xM(E){var h,A=ia(E),R=fp(E),V=(h=E.ownerDocument)==null?void 0:h.body,f=za(A.scrollWidth,A.clientWidth,V?V.scrollWidth:0,V?V.clientWidth:0),L=za(A.scrollHeight,A.clientHeight,V?V.scrollHeight:0,V?V.clientHeight:0),B=-R.scrollLeft+pp(E),_=-R.scrollTop;return ys(V||A).direction==="rtl"&&(B+=za(A.clientWidth,V?V.clientWidth:0)-f),{width:f,height:L,x:B,y:_}}function gp(E){var h=ys(E),A=h.overflow,R=h.overflowX,V=h.overflowY;return/auto|scroll|overlay|hidden/.test(A+V+R)}function BC(E){return["html","body","#document"].indexOf(Gr(E))>=0?E.ownerDocument.body:er(E)&&gp(E)?E:BC(Du(E))}function Rl(E,h){var A;h===void 0&&(h=[]);var R=BC(E),V=R===((A=E.ownerDocument)==null?void 0:A.body),f=Co(R),L=V?[f].concat(f.visualViewport||[],gp(R)?R:[]):R,B=h.concat(L);return V?B:B.concat(Rl(Du(L)))}function tp(E){return Object.assign({},E,{left:E.x,top:E.y,right:E.x+E.width,bottom:E.y+E.height})}function TM(E,h){var A=Ic(E,!1,h==="fixed");return A.top=A.top+E.clientTop,A.left=A.left+E.clientLeft,A.bottom=A.top+E.clientHeight,A.right=A.left+E.clientWidth,A.width=E.clientWidth,A.height=E.clientHeight,A.x=A.left,A.y=A.top,A}function Lv(E,h,A){return h===rp?tp(EM(E,A)):Fa(h)?TM(h,A):tp(xM(ia(E)))}function DM(E){var h=Rl(Du(E)),A=["absolute","fixed"].indexOf(ys(E).position)>=0,R=A&&er(E)?jl(E):E;return Fa(R)?h.filter(function(V){return Fa(V)&&SC(V,R)&&Gr(V)!=="body"}):[]}function SM(E,h,A,R){var V=h==="clippingParents"?DM(E):[].concat(h),f=[].concat(V,[A]),L=f[0],B=f.reduce(function(_,q){var U=Lv(E,q,R);return _.top=za(U.top,_.top),_.right=vu(U.right,_.right),_.bottom=vu(U.bottom,_.bottom),_.left=za(U.left,_.left),_},Lv(E,L,R));return B.width=B.right-B.left,B.height=B.bottom-B.top,B.x=B.left,B.y=B.top,B}function LC(E){var h=E.reference,A=E.element,R=E.placement,V=R?Wr(R):null,f=R?Mc(R):null,L=h.x+h.width/2-A.width/2,B=h.y+h.height/2-A.height/2,_;switch(V){case Bi:_={x:L,y:h.y-A.height};break;case Ao:_={x:L,y:h.y+h.height};break;case vo:_={x:h.x+h.width,y:B};break;case Li:_={x:h.x-A.width,y:B};break;default:_={x:h.x,y:h.y}}var q=V?dp(V):null;if(q!=null){var U=q==="y"?"height":"width";switch(f){case ja:_[q]=_[q]-(h[U]/2-A[U]/2);break;case Dc:_[q]=_[q]+(h[U]/2-A[U]/2);break}}return _}function Nc(E,h){h===void 0&&(h={});var A=h,R=A.placement,V=R===void 0?E.placement:R,f=A.strategy,L=f===void 0?E.strategy:f,B=A.boundary,_=B===void 0?mC:B,q=A.rootBoundary,U=q===void 0?rp:q,H=A.elementContext,x=H===void 0?yc:H,P=A.altBoundary,Y=P===void 0?!1:P,Q=A.padding,it=Q===void 0?0:Q,at=MC(typeof it!="number"?it:NC(it,Lc)),rt=x===yc?kC:yc,yt=E.rects.popper,xt=E.elements[Y?rt:x],Ht=SM(Fa(xt)?xt:xt.contextElement||ia(E.elements.popper),_,U,L),Kt=Ic(E.elements.reference),m=LC({reference:Kt,element:yt,strategy:"absolute",placement:V}),It=tp(Object.assign({},yt,m)),Bt=x===yc?It:Kt,te={top:Ht.top-Bt.top+at.top,bottom:Bt.bottom-Ht.bottom+at.bottom,left:Ht.left-Bt.left+at.left,right:Bt.right-Ht.right+at.right},ae=E.modifiersData.offset;if(x===yc&&ae){var me=ae[V];Object.keys(te).forEach(function(Ut){var Se=[vo,Ao].indexOf(Ut)>=0?1:-1,He=[Bi,Ao].indexOf(Ut)>=0?"y":"x";te[Ut]+=me[He]*Se})}return te}function IM(E,h){h===void 0&&(h={});var A=h,R=A.placement,V=A.boundary,f=A.rootBoundary,L=A.padding,B=A.flipVariations,_=A.allowedAutoPlacements,q=_===void 0?sp:_,U=Mc(R),H=U?B?Jf:Jf.filter(function(Y){return Mc(Y)===U}):Lc,x=H.filter(function(Y){return q.indexOf(Y)>=0});x.length===0&&(x=H);var P=x.reduce(function(Y,Q){return Y[Q]=Nc(E,{placement:Q,boundary:V,rootBoundary:f,padding:L})[Wr(Q)],Y},{});return Object.keys(P).sort(function(Y,Q){return P[Y]-P[Q]})}function MM(E){if(Wr(E)===Tu)return[];var h=_u(E);return[Bv(E),h,Bv(h)]}function NM(E){var h=E.state,A=E.options,R=E.name;if(!h.modifiersData[R]._skip){for(var V=A.mainAxis,f=V===void 0?!0:V,L=A.altAxis,B=L===void 0?!0:L,_=A.fallbackPlacements,q=A.padding,U=A.boundary,H=A.rootBoundary,x=A.altBoundary,P=A.flipVariations,Y=P===void 0?!0:P,Q=A.allowedAutoPlacements,it=h.options.placement,at=Wr(it),rt=at===it,yt=_||(rt||!Y?[_u(it)]:MM(it)),xt=[it].concat(yt).reduce(function(Jn,Ye){return Jn.concat(Wr(Ye)===Tu?IM(h,{placement:Ye,boundary:U,rootBoundary:H,padding:q,flipVariations:Y,allowedAutoPlacements:Q}):Ye)},[]),Ht=h.rects.reference,Kt=h.rects.popper,m=new Map,It=!0,Bt=xt[0],te=0;te<xt.length;te++){var ae=xt[te],me=Wr(ae),Ut=Mc(ae)===ja,Se=[Bi,Ao].indexOf(me)>=0,He=Se?"width":"height",ke=Nc(h,{placement:ae,boundary:U,rootBoundary:H,altBoundary:x,padding:q}),ve=Se?Ut?vo:Li:Ut?Ao:Bi;Ht[He]>Kt[He]&&(ve=_u(ve));var fe=_u(ve),qe=[];if(f&&qe.push(ke[me]<=0),B&&qe.push(ke[ve]<=0,ke[fe]<=0),qe.every(function(Jn){return Jn})){Bt=ae,It=!1;break}m.set(ae,qe)}if(It)for(var Fn=Y?3:1,Qn=function(Ye){var be=xt.find(function(Xn){var Sn=m.get(Xn);if(Sn)return Sn.slice(0,Ye).every(function(fi){return fi})});if(be)return Bt=be,"break"},Zn=Fn;Zn>0;Zn--){var Ke=Qn(Zn);if(Ke==="break")break}h.placement!==Bt&&(h.modifiersData[R]._skip=!0,h.placement=Bt,h.reset=!0)}}const PC={name:"flip",enabled:!0,phase:"main",fn:NM,requiresIfExists:["offset"],data:{_skip:!1}};function Pv(E,h,A){return A===void 0&&(A={x:0,y:0}),{top:E.top-h.height-A.y,right:E.right-h.width+A.x,bottom:E.bottom-h.height+A.y,left:E.left-h.width-A.x}}function Rv(E){return[Bi,vo,Ao,Li].some(function(h){return E[h]>=0})}function OM(E){var h=E.state,A=E.name,R=h.rects.reference,V=h.rects.popper,f=h.modifiersData.preventOverflow,L=Nc(h,{elementContext:"reference"}),B=Nc(h,{altBoundary:!0}),_=Pv(L,R),q=Pv(B,V,f),U=Rv(_),H=Rv(q);h.modifiersData[A]={referenceClippingOffsets:_,popperEscapeOffsets:q,isReferenceHidden:U,hasPopperEscaped:H},h.attributes.popper=Object.assign({},h.attributes.popper,{"data-popper-reference-hidden":U,"data-popper-escaped":H})}const RC={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:OM};function BM(E,h,A){var R=Wr(E),V=[Li,Bi].indexOf(R)>=0?-1:1,f=typeof A=="function"?A(Object.assign({},h,{placement:E})):A,L=f[0],B=f[1];return L=L||0,B=(B||0)*V,[Li,vo].indexOf(R)>=0?{x:B,y:L}:{x:L,y:B}}function LM(E){var h=E.state,A=E.options,R=E.name,V=A.offset,f=V===void 0?[0,0]:V,L=sp.reduce(function(U,H){return U[H]=BM(H,h.rects,f),U},{}),B=L[h.placement],_=B.x,q=B.y;h.modifiersData.popperOffsets!=null&&(h.modifiersData.popperOffsets.x+=_,h.modifiersData.popperOffsets.y+=q),h.modifiersData[R]=L}const zC={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:LM};function PM(E){var h=E.state,A=E.name;h.modifiersData[A]=LC({reference:h.rects.reference,element:h.rects.popper,strategy:"absolute",placement:h.placement})}const mp={name:"popperOffsets",enabled:!0,phase:"read",fn:PM,data:{}};function RM(E){return E==="x"?"y":"x"}function zM(E){var h=E.state,A=E.options,R=E.name,V=A.mainAxis,f=V===void 0?!0:V,L=A.altAxis,B=L===void 0?!1:L,_=A.boundary,q=A.rootBoundary,U=A.altBoundary,H=A.padding,x=A.tether,P=x===void 0?!0:x,Y=A.tetherOffset,Q=Y===void 0?0:Y,it=Nc(h,{boundary:_,rootBoundary:q,padding:H,altBoundary:U}),at=Wr(h.placement),rt=Mc(h.placement),yt=!rt,xt=dp(at),Ht=RM(xt),Kt=h.modifiersData.popperOffsets,m=h.rects.reference,It=h.rects.popper,Bt=typeof Q=="function"?Q(Object.assign({},h.rects,{placement:h.placement})):Q,te=typeof Bt=="number"?{mainAxis:Bt,altAxis:Bt}:Object.assign({mainAxis:0,altAxis:0},Bt),ae=h.modifiersData.offset?h.modifiersData.offset[h.placement]:null,me={x:0,y:0};if(Kt){if(f){var Ut,Se=xt==="y"?Bi:Li,He=xt==="y"?Ao:vo,ke=xt==="y"?"height":"width",ve=Kt[xt],fe=ve+it[Se],qe=ve-it[He],Fn=P?-It[ke]/2:0,Qn=rt===ja?m[ke]:It[ke],Zn=rt===ja?-It[ke]:-m[ke],Ke=h.elements.arrow,Jn=P&&Ke?lp(Ke):{width:0,height:0},Ye=h.modifiersData["arrow#persistent"]?h.modifiersData["arrow#persistent"].padding:IC(),be=Ye[Se],Xn=Ye[He],Sn=Pl(0,m[ke],Jn[ke]),fi=yt?m[ke]/2-Fn-Sn-be-te.mainAxis:Qn-Sn-be-te.mainAxis,en=yt?-m[ke]/2+Fn+Sn+Xn+te.mainAxis:Zn+Sn+Xn+te.mainAxis,yo=h.elements.arrow&&jl(h.elements.arrow),ti=yo?xt==="y"?yo.clientTop||0:yo.clientLeft||0:0,pe=(Ut=ae==null?void 0:ae[xt])!=null?Ut:0,no=ve+fi-pe-ti,Eo=ve+en-pe,In=Pl(P?vu(fe,no):fe,ve,P?za(qe,Eo):qe);Kt[xt]=In,me[xt]=In-ve}if(B){var rn,sn=xt==="x"?Bi:Li,ei=xt==="x"?Ao:vo,Me=Kt[Ht],Ue=Ht==="y"?"height":"width",Ne=Me+it[sn],yi=Me-it[ei],Ei=[Bi,Li].indexOf(at)!==-1,Vt=(rn=ae==null?void 0:ae[Ht])!=null?rn:0,Ie=Ei?Ne:Me-m[Ue]-It[Ue]-Vt+te.altAxis,rr=Ei?Me+m[Ue]+It[Ue]-Vt-te.altAxis:yi,pi=P&&Ei?gM(Ie,Me,rr):Pl(P?Ie:Ne,Me,P?rr:yi);Kt[Ht]=pi,me[Ht]=pi-Me}h.modifiersData[R]=me}}const jC={name:"preventOverflow",enabled:!0,phase:"main",fn:zM,requiresIfExists:["offset"]};function jM(E){return{scrollLeft:E.scrollLeft,scrollTop:E.scrollTop}}function FM(E){return E===Co(E)||!er(E)?fp(E):jM(E)}function VM(E){var h=E.getBoundingClientRect(),A=Sc(h.width)/E.offsetWidth||1,R=Sc(h.height)/E.offsetHeight||1;return A!==1||R!==1}function HM(E,h,A){A===void 0&&(A=!1);var R=er(h),V=er(h)&&VM(h),f=ia(h),L=Ic(E,V,A),B={scrollLeft:0,scrollTop:0},_={x:0,y:0};return(R||!R&&!A)&&((Gr(h)!=="body"||gp(f))&&(B=FM(h)),er(h)?(_=Ic(h,!0),_.x+=h.clientLeft,_.y+=h.clientTop):f&&(_.x=pp(f))),{x:L.left+B.scrollLeft-_.x,y:L.top+B.scrollTop-_.y,width:L.width,height:L.height}}function UM(E){var h=new Map,A=new Set,R=[];E.forEach(function(f){h.set(f.name,f)});function V(f){A.add(f.name);var L=[].concat(f.requires||[],f.requiresIfExists||[]);L.forEach(function(B){if(!A.has(B)){var _=h.get(B);_&&V(_)}}),R.push(f)}return E.forEach(function(f){A.has(f.name)||V(f)}),R}function $M(E){var h=UM(E);return TC.reduce(function(A,R){return A.concat(h.filter(function(V){return V.phase===R}))},[])}function WM(E){var h;return function(){return h||(h=new Promise(function(A){Promise.resolve().then(function(){h=void 0,A(E())})})),h}}function qM(E){var h=E.reduce(function(A,R){var V=A[R.name];return A[R.name]=V?Object.assign({},V,R,{options:Object.assign({},V.options,R.options),data:Object.assign({},V.data,R.data)}):R,A},{});return Object.keys(h).map(function(A){return h[A]})}var zv={placement:"bottom",modifiers:[],strategy:"absolute"};function jv(){for(var E=arguments.length,h=new Array(E),A=0;A<E;A++)h[A]=arguments[A];return!h.some(function(R){return!(R&&typeof R.getBoundingClientRect=="function")})}function Su(E){E===void 0&&(E={});var h=E,A=h.defaultModifiers,R=A===void 0?[]:A,V=h.defaultOptions,f=V===void 0?zv:V;return function(B,_,q){q===void 0&&(q=f);var U={placement:"bottom",orderedModifiers:[],options:Object.assign({},zv,f),modifiersData:{},elements:{reference:B,popper:_},attributes:{},styles:{}},H=[],x=!1,P={state:U,setOptions:function(at){var rt=typeof at=="function"?at(U.options):at;Q(),U.options=Object.assign({},f,U.options,rt),U.scrollParents={reference:Fa(B)?Rl(B):B.contextElement?Rl(B.contextElement):[],popper:Rl(_)};var yt=$M(qM([].concat(R,U.options.modifiers)));return U.orderedModifiers=yt.filter(function(xt){return xt.enabled}),Y(),P.update()},forceUpdate:function(){if(!x){var at=U.elements,rt=at.reference,yt=at.popper;if(jv(rt,yt)){U.rects={reference:HM(rt,jl(yt),U.options.strategy==="fixed"),popper:lp(yt)},U.reset=!1,U.placement=U.options.placement,U.orderedModifiers.forEach(function(te){return U.modifiersData[te.name]=Object.assign({},te.data)});for(var xt=0;xt<U.orderedModifiers.length;xt++){if(U.reset===!0){U.reset=!1,xt=-1;continue}var Ht=U.orderedModifiers[xt],Kt=Ht.fn,m=Ht.options,It=m===void 0?{}:m,Bt=Ht.name;typeof Kt=="function"&&(U=Kt({state:U,options:It,name:Bt,instance:P})||U)}}}},update:WM(function(){return new Promise(function(it){P.forceUpdate(),it(U)})}),destroy:function(){Q(),x=!0}};if(!jv(B,_))return P;P.setOptions(q).then(function(it){!x&&q.onFirstUpdate&&q.onFirstUpdate(it)});function Y(){U.orderedModifiers.forEach(function(it){var at=it.name,rt=it.options,yt=rt===void 0?{}:rt,xt=it.effect;if(typeof xt=="function"){var Ht=xt({state:U,name:at,instance:P,options:yt}),Kt=function(){};H.push(Ht||Kt)}})}function Q(){H.forEach(function(it){return it()}),H=[]}return P}}var GM=Su(),KM=[hp,mp,up,cp],YM=Su({defaultModifiers:KM}),QM=[hp,mp,up,cp,zC,PC,jC,OC,RC],kp=Su({defaultModifiers:QM});const FC=Object.freeze(Object.defineProperty({__proto__:null,afterMain:CC,afterRead:wC,afterWrite:xC,applyStyles:cp,arrow:OC,auto:Tu,basePlacements:Lc,beforeMain:AC,beforeRead:bC,beforeWrite:yC,bottom:Ao,clippingParents:mC,computeStyles:up,createPopper:kp,createPopperBase:GM,createPopperLite:YM,detectOverflow:Nc,end:Dc,eventListeners:hp,flip:PC,hide:RC,left:Li,main:vC,modifierPhases:TC,offset:zC,placements:sp,popper:yc,popperGenerator:Su,popperOffsets:mp,preventOverflow:jC,read:_C,reference:kC,right:vo,start:ja,top:Bi,variationPlacements:Jf,viewport:rp,write:EC},Symbol.toStringTag,{value:"Module"}));/*!
  * Bootstrap v5.3.3 (https://getbootstrap.com/)
  * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */const Js=new Map,Rf={set(E,h,A){Js.has(E)||Js.set(E,new Map);const R=Js.get(E);if(!R.has(h)&&R.size!==0){console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(R.keys())[0]}.`);return}R.set(h,A)},get(E,h){return Js.has(E)&&Js.get(E).get(h)||null},remove(E,h){if(!Js.has(E))return;const A=Js.get(E);A.delete(h),A.size===0&&Js.delete(E)}},ZM=1e6,JM=1e3,ep="transitionend",VC=E=>(E&&window.CSS&&window.CSS.escape&&(E=E.replace(/#([^\s"#']+)/g,(h,A)=>`#${CSS.escape(A)}`)),E),XM=E=>E==null?`${E}`:Object.prototype.toString.call(E).match(/\s([a-z]+)/i)[1].toLowerCase(),tN=E=>{do E+=Math.floor(Math.random()*ZM);while(document.getElementById(E));return E},eN=E=>{if(!E)return 0;let{transitionDuration:h,transitionDelay:A}=window.getComputedStyle(E);const R=Number.parseFloat(h),V=Number.parseFloat(A);return!R&&!V?0:(h=h.split(",")[0],A=A.split(",")[0],(Number.parseFloat(h)+Number.parseFloat(A))*JM)},HC=E=>{E.dispatchEvent(new Event(ep))},vs=E=>!E||typeof E!="object"?!1:(typeof E.jquery<"u"&&(E=E[0]),typeof E.nodeType<"u"),ta=E=>vs(E)?E.jquery?E[0]:E:typeof E=="string"&&E.length>0?document.querySelector(VC(E)):null,Pc=E=>{if(!vs(E)||E.getClientRects().length===0)return!1;const h=getComputedStyle(E).getPropertyValue("visibility")==="visible",A=E.closest("details:not([open])");if(!A)return h;if(A!==E){const R=E.closest("summary");if(R&&R.parentNode!==A||R===null)return!1}return h},ea=E=>!E||E.nodeType!==Node.ELEMENT_NODE||E.classList.contains("disabled")?!0:typeof E.disabled<"u"?E.disabled:E.hasAttribute("disabled")&&E.getAttribute("disabled")!=="false",UC=E=>{if(!document.documentElement.attachShadow)return null;if(typeof E.getRootNode=="function"){const h=E.getRootNode();return h instanceof ShadowRoot?h:null}return E instanceof ShadowRoot?E:E.parentNode?UC(E.parentNode):null},Cu=()=>{},Fl=E=>{E.offsetHeight},$C=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,zf=[],nN=E=>{document.readyState==="loading"?(zf.length||document.addEventListener("DOMContentLoaded",()=>{for(const h of zf)h()}),zf.push(E)):E()},nr=()=>document.documentElement.dir==="rtl",or=E=>{nN(()=>{const h=$C();if(h){const A=E.NAME,R=h.fn[A];h.fn[A]=E.jQueryInterface,h.fn[A].Constructor=E,h.fn[A].noConflict=()=>(h.fn[A]=R,E.jQueryInterface)}})},eo=(E,h=[],A=E)=>typeof E=="function"?E(...h):A,WC=(E,h,A=!0)=>{if(!A){eo(E);return}const R=5,V=eN(h)+R;let f=!1;const L=({target:B})=>{B===h&&(f=!0,h.removeEventListener(ep,L),eo(E))};h.addEventListener(ep,L),setTimeout(()=>{f||HC(h)},V)},bp=(E,h,A,R)=>{const V=E.length;let f=E.indexOf(h);return f===-1?!A&&R?E[V-1]:E[0]:(f+=A?1:-1,R&&(f=(f+V)%V),E[Math.max(0,Math.min(f,V-1))])},iN=/[^.]*(?=\..*)\.|.*/,oN=/\..*/,rN=/::\d+$/,jf={};let Fv=1;const qC={mouseenter:"mouseover",mouseleave:"mouseout"},sN=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function GC(E,h){return h&&`${h}::${Fv++}`||E.uidEvent||Fv++}function KC(E){const h=GC(E);return E.uidEvent=h,jf[h]=jf[h]||{},jf[h]}function aN(E,h){return function A(R){return _p(R,{delegateTarget:E}),A.oneOff&&Mt.off(E,R.type,h),h.apply(E,[R])}}function cN(E,h,A){return function R(V){const f=E.querySelectorAll(h);for(let{target:L}=V;L&&L!==this;L=L.parentNode)for(const B of f)if(B===L)return _p(V,{delegateTarget:L}),R.oneOff&&Mt.off(E,V.type,h,A),A.apply(L,[V])}}function YC(E,h,A=null){return Object.values(E).find(R=>R.callable===h&&R.delegationSelector===A)}function QC(E,h,A){const R=typeof h=="string",V=R?A:h||A;let f=ZC(E);return sN.has(f)||(f=E),[R,V,f]}function Vv(E,h,A,R,V){if(typeof h!="string"||!E)return;let[f,L,B]=QC(h,A,R);h in qC&&(L=(Y=>function(Q){if(!Q.relatedTarget||Q.relatedTarget!==Q.delegateTarget&&!Q.delegateTarget.contains(Q.relatedTarget))return Y.call(this,Q)})(L));const _=KC(E),q=_[B]||(_[B]={}),U=YC(q,L,f?A:null);if(U){U.oneOff=U.oneOff&&V;return}const H=GC(L,h.replace(iN,"")),x=f?cN(E,A,L):aN(E,L);x.delegationSelector=f?A:null,x.callable=L,x.oneOff=V,x.uidEvent=H,q[H]=x,E.addEventListener(B,x,f)}function np(E,h,A,R,V){const f=YC(h[A],R,V);f&&(E.removeEventListener(A,f,!!V),delete h[A][f.uidEvent])}function lN(E,h,A,R){const V=h[A]||{};for(const[f,L]of Object.entries(V))f.includes(R)&&np(E,h,A,L.callable,L.delegationSelector)}function ZC(E){return E=E.replace(oN,""),qC[E]||E}const Mt={on(E,h,A,R){Vv(E,h,A,R,!1)},one(E,h,A,R){Vv(E,h,A,R,!0)},off(E,h,A,R){if(typeof h!="string"||!E)return;const[V,f,L]=QC(h,A,R),B=L!==h,_=KC(E),q=_[L]||{},U=h.startsWith(".");if(typeof f<"u"){if(!Object.keys(q).length)return;np(E,_,L,f,V?A:null);return}if(U)for(const H of Object.keys(_))lN(E,_,H,h.slice(1));for(const[H,x]of Object.entries(q)){const P=H.replace(rN,"");(!B||h.includes(P))&&np(E,_,L,x.callable,x.delegationSelector)}},trigger(E,h,A){if(typeof h!="string"||!E)return null;const R=$C(),V=ZC(h),f=h!==V;let L=null,B=!0,_=!0,q=!1;f&&R&&(L=R.Event(h,A),R(E).trigger(L),B=!L.isPropagationStopped(),_=!L.isImmediatePropagationStopped(),q=L.isDefaultPrevented());const U=_p(new Event(h,{bubbles:B,cancelable:!0}),A);return q&&U.preventDefault(),_&&E.dispatchEvent(U),U.defaultPrevented&&L&&L.preventDefault(),U}};function _p(E,h={}){for(const[A,R]of Object.entries(h))try{E[A]=R}catch{Object.defineProperty(E,A,{configurable:!0,get(){return R}})}return E}function Hv(E){if(E==="true")return!0;if(E==="false")return!1;if(E===Number(E).toString())return Number(E);if(E===""||E==="null")return null;if(typeof E!="string")return E;try{return JSON.parse(decodeURIComponent(E))}catch{return E}}function Ff(E){return E.replace(/[A-Z]/g,h=>`-${h.toLowerCase()}`)}const Cs={setDataAttribute(E,h,A){E.setAttribute(`data-bs-${Ff(h)}`,A)},removeDataAttribute(E,h){E.removeAttribute(`data-bs-${Ff(h)}`)},getDataAttributes(E){if(!E)return{};const h={},A=Object.keys(E.dataset).filter(R=>R.startsWith("bs")&&!R.startsWith("bsConfig"));for(const R of A){let V=R.replace(/^bs/,"");V=V.charAt(0).toLowerCase()+V.slice(1,V.length),h[V]=Hv(E.dataset[R])}return h},getDataAttribute(E,h){return Hv(E.getAttribute(`data-bs-${Ff(h)}`))}};class Vl{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(h){return h=this._mergeConfigObj(h),h=this._configAfterMerge(h),this._typeCheckConfig(h),h}_configAfterMerge(h){return h}_mergeConfigObj(h,A){const R=vs(A)?Cs.getDataAttribute(A,"config"):{};return{...this.constructor.Default,...typeof R=="object"?R:{},...vs(A)?Cs.getDataAttributes(A):{},...typeof h=="object"?h:{}}}_typeCheckConfig(h,A=this.constructor.DefaultType){for(const[R,V]of Object.entries(A)){const f=h[R],L=vs(f)?"element":XM(f);if(!new RegExp(V).test(L))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${R}" provided type "${L}" but expected type "${V}".`)}}}const dN="5.3.3";class Ar extends Vl{constructor(h,A){super(),h=ta(h),h&&(this._element=h,this._config=this._getConfig(A),Rf.set(this._element,this.constructor.DATA_KEY,this))}dispose(){Rf.remove(this._element,this.constructor.DATA_KEY),Mt.off(this._element,this.constructor.EVENT_KEY);for(const h of Object.getOwnPropertyNames(this))this[h]=null}_queueCallback(h,A,R=!0){WC(h,A,R)}_getConfig(h){return h=this._mergeConfigObj(h,this._element),h=this._configAfterMerge(h),this._typeCheckConfig(h),h}static getInstance(h){return Rf.get(ta(h),this.DATA_KEY)}static getOrCreateInstance(h,A={}){return this.getInstance(h)||new this(h,typeof A=="object"?A:null)}static get VERSION(){return dN}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(h){return`${h}${this.EVENT_KEY}`}}const Vf=E=>{let h=E.getAttribute("data-bs-target");if(!h||h==="#"){let A=E.getAttribute("href");if(!A||!A.includes("#")&&!A.startsWith("."))return null;A.includes("#")&&!A.startsWith("#")&&(A=`#${A.split("#")[1]}`),h=A&&A!=="#"?A.trim():null}return h?h.split(",").map(A=>VC(A)).join(","):null},ie={find(E,h=document.documentElement){return[].concat(...Element.prototype.querySelectorAll.call(h,E))},findOne(E,h=document.documentElement){return Element.prototype.querySelector.call(h,E)},children(E,h){return[].concat(...E.children).filter(A=>A.matches(h))},parents(E,h){const A=[];let R=E.parentNode.closest(h);for(;R;)A.push(R),R=R.parentNode.closest(h);return A},prev(E,h){let A=E.previousElementSibling;for(;A;){if(A.matches(h))return[A];A=A.previousElementSibling}return[]},next(E,h){let A=E.nextElementSibling;for(;A;){if(A.matches(h))return[A];A=A.nextElementSibling}return[]},focusableChildren(E){const h=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map(A=>`${A}:not([tabindex^="-"])`).join(",");return this.find(h,E).filter(A=>!ea(A)&&Pc(A))},getSelectorFromElement(E){const h=Vf(E);return h&&ie.findOne(h)?h:null},getElementFromSelector(E){const h=Vf(E);return h?ie.findOne(h):null},getMultipleElementsFromSelector(E){const h=Vf(E);return h?ie.find(h):[]}},Iu=(E,h="hide")=>{const A=`click.dismiss${E.EVENT_KEY}`,R=E.NAME;Mt.on(document,A,`[data-bs-dismiss="${R}"]`,function(V){if(["A","AREA"].includes(this.tagName)&&V.preventDefault(),ea(this))return;const f=ie.getElementFromSelector(this)||this.closest(`.${R}`);E.getOrCreateInstance(f)[h]()})},uN="alert",hN="bs.alert",JC=`.${hN}`,fN=`close${JC}`,pN=`closed${JC}`,gN="fade",mN="show";class Mu extends Ar{static get NAME(){return uN}close(){if(Mt.trigger(this._element,fN).defaultPrevented)return;this._element.classList.remove(mN);const A=this._element.classList.contains(gN);this._queueCallback(()=>this._destroyElement(),this._element,A)}_destroyElement(){this._element.remove(),Mt.trigger(this._element,pN),this.dispose()}static jQueryInterface(h){return this.each(function(){const A=Mu.getOrCreateInstance(this);if(typeof h=="string"){if(A[h]===void 0||h.startsWith("_")||h==="constructor")throw new TypeError(`No method named "${h}"`);A[h](this)}})}}Iu(Mu,"close");or(Mu);const kN="button",bN="bs.button",_N=`.${bN}`,wN=".data-api",AN="active",Uv='[data-bs-toggle="button"]',vN=`click${_N}${wN}`;class Nu extends Ar{static get NAME(){return kN}toggle(){this._element.setAttribute("aria-pressed",this._element.classList.toggle(AN))}static jQueryInterface(h){return this.each(function(){const A=Nu.getOrCreateInstance(this);h==="toggle"&&A[h]()})}}Mt.on(document,vN,Uv,E=>{E.preventDefault();const h=E.target.closest(Uv);Nu.getOrCreateInstance(h).toggle()});or(Nu);const CN="swipe",Rc=".bs.swipe",yN=`touchstart${Rc}`,EN=`touchmove${Rc}`,xN=`touchend${Rc}`,TN=`pointerdown${Rc}`,DN=`pointerup${Rc}`,SN="touch",IN="pen",MN="pointer-event",NN=40,ON={endCallback:null,leftCallback:null,rightCallback:null},BN={endCallback:"(function|null)",leftCallback:"(function|null)",rightCallback:"(function|null)"};class yu extends Vl{constructor(h,A){super(),this._element=h,!(!h||!yu.isSupported())&&(this._config=this._getConfig(A),this._deltaX=0,this._supportPointerEvents=!!window.PointerEvent,this._initEvents())}static get Default(){return ON}static get DefaultType(){return BN}static get NAME(){return CN}dispose(){Mt.off(this._element,Rc)}_start(h){if(!this._supportPointerEvents){this._deltaX=h.touches[0].clientX;return}this._eventIsPointerPenTouch(h)&&(this._deltaX=h.clientX)}_end(h){this._eventIsPointerPenTouch(h)&&(this._deltaX=h.clientX-this._deltaX),this._handleSwipe(),eo(this._config.endCallback)}_move(h){this._deltaX=h.touches&&h.touches.length>1?0:h.touches[0].clientX-this._deltaX}_handleSwipe(){const h=Math.abs(this._deltaX);if(h<=NN)return;const A=h/this._deltaX;this._deltaX=0,A&&eo(A>0?this._config.rightCallback:this._config.leftCallback)}_initEvents(){this._supportPointerEvents?(Mt.on(this._element,TN,h=>this._start(h)),Mt.on(this._element,DN,h=>this._end(h)),this._element.classList.add(MN)):(Mt.on(this._element,yN,h=>this._start(h)),Mt.on(this._element,EN,h=>this._move(h)),Mt.on(this._element,xN,h=>this._end(h)))}_eventIsPointerPenTouch(h){return this._supportPointerEvents&&(h.pointerType===IN||h.pointerType===SN)}static isSupported(){return"ontouchstart"in document.documentElement||navigator.maxTouchPoints>0}}const LN="carousel",PN="bs.carousel",oa=`.${PN}`,XC=".data-api",RN="ArrowLeft",zN="ArrowRight",jN=500,Bl="next",vc="prev",Ec="left",wu="right",FN=`slide${oa}`,Hf=`slid${oa}`,VN=`keydown${oa}`,HN=`mouseenter${oa}`,UN=`mouseleave${oa}`,$N=`dragstart${oa}`,WN=`load${oa}${XC}`,qN=`click${oa}${XC}`,t0="carousel",fu="active",GN="slide",KN="carousel-item-end",YN="carousel-item-start",QN="carousel-item-next",ZN="carousel-item-prev",e0=".active",n0=".carousel-item",JN=e0+n0,XN=".carousel-item img",tO=".carousel-indicators",eO="[data-bs-slide], [data-bs-slide-to]",nO='[data-bs-ride="carousel"]',iO={[RN]:wu,[zN]:Ec},oO={interval:5e3,keyboard:!0,pause:"hover",ride:!1,touch:!0,wrap:!0},rO={interval:"(number|boolean)",keyboard:"boolean",pause:"(string|boolean)",ride:"(boolean|string)",touch:"boolean",wrap:"boolean"};class Hl extends Ar{constructor(h,A){super(h,A),this._interval=null,this._activeElement=null,this._isSliding=!1,this.touchTimeout=null,this._swipeHelper=null,this._indicatorsElement=ie.findOne(tO,this._element),this._addEventListeners(),this._config.ride===t0&&this.cycle()}static get Default(){return oO}static get DefaultType(){return rO}static get NAME(){return LN}next(){this._slide(Bl)}nextWhenVisible(){!document.hidden&&Pc(this._element)&&this.next()}prev(){this._slide(vc)}pause(){this._isSliding&&HC(this._element),this._clearInterval()}cycle(){this._clearInterval(),this._updateInterval(),this._interval=setInterval(()=>this.nextWhenVisible(),this._config.interval)}_maybeEnableCycle(){if(this._config.ride){if(this._isSliding){Mt.one(this._element,Hf,()=>this.cycle());return}this.cycle()}}to(h){const A=this._getItems();if(h>A.length-1||h<0)return;if(this._isSliding){Mt.one(this._element,Hf,()=>this.to(h));return}const R=this._getItemIndex(this._getActive());if(R===h)return;const V=h>R?Bl:vc;this._slide(V,A[h])}dispose(){this._swipeHelper&&this._swipeHelper.dispose(),super.dispose()}_configAfterMerge(h){return h.defaultInterval=h.interval,h}_addEventListeners(){this._config.keyboard&&Mt.on(this._element,VN,h=>this._keydown(h)),this._config.pause==="hover"&&(Mt.on(this._element,HN,()=>this.pause()),Mt.on(this._element,UN,()=>this._maybeEnableCycle())),this._config.touch&&yu.isSupported()&&this._addTouchEventListeners()}_addTouchEventListeners(){for(const R of ie.find(XN,this._element))Mt.on(R,$N,V=>V.preventDefault());const A={leftCallback:()=>this._slide(this._directionToOrder(Ec)),rightCallback:()=>this._slide(this._directionToOrder(wu)),endCallback:()=>{this._config.pause==="hover"&&(this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout(()=>this._maybeEnableCycle(),jN+this._config.interval))}};this._swipeHelper=new yu(this._element,A)}_keydown(h){if(/input|textarea/i.test(h.target.tagName))return;const A=iO[h.key];A&&(h.preventDefault(),this._slide(this._directionToOrder(A)))}_getItemIndex(h){return this._getItems().indexOf(h)}_setActiveIndicatorElement(h){if(!this._indicatorsElement)return;const A=ie.findOne(e0,this._indicatorsElement);A.classList.remove(fu),A.removeAttribute("aria-current");const R=ie.findOne(`[data-bs-slide-to="${h}"]`,this._indicatorsElement);R&&(R.classList.add(fu),R.setAttribute("aria-current","true"))}_updateInterval(){const h=this._activeElement||this._getActive();if(!h)return;const A=Number.parseInt(h.getAttribute("data-bs-interval"),10);this._config.interval=A||this._config.defaultInterval}_slide(h,A=null){if(this._isSliding)return;const R=this._getActive(),V=h===Bl,f=A||bp(this._getItems(),R,V,this._config.wrap);if(f===R)return;const L=this._getItemIndex(f),B=P=>Mt.trigger(this._element,P,{relatedTarget:f,direction:this._orderToDirection(h),from:this._getItemIndex(R),to:L});if(B(FN).defaultPrevented||!R||!f)return;const q=!!this._interval;this.pause(),this._isSliding=!0,this._setActiveIndicatorElement(L),this._activeElement=f;const U=V?YN:KN,H=V?QN:ZN;f.classList.add(H),Fl(f),R.classList.add(U),f.classList.add(U);const x=()=>{f.classList.remove(U,H),f.classList.add(fu),R.classList.remove(fu,H,U),this._isSliding=!1,B(Hf)};this._queueCallback(x,R,this._isAnimated()),q&&this.cycle()}_isAnimated(){return this._element.classList.contains(GN)}_getActive(){return ie.findOne(JN,this._element)}_getItems(){return ie.find(n0,this._element)}_clearInterval(){this._interval&&(clearInterval(this._interval),this._interval=null)}_directionToOrder(h){return nr()?h===Ec?vc:Bl:h===Ec?Bl:vc}_orderToDirection(h){return nr()?h===vc?Ec:wu:h===vc?wu:Ec}static jQueryInterface(h){return this.each(function(){const A=Hl.getOrCreateInstance(this,h);if(typeof h=="number"){A.to(h);return}if(typeof h=="string"){if(A[h]===void 0||h.startsWith("_")||h==="constructor")throw new TypeError(`No method named "${h}"`);A[h]()}})}}Mt.on(document,qN,eO,function(E){const h=ie.getElementFromSelector(this);if(!h||!h.classList.contains(t0))return;E.preventDefault();const A=Hl.getOrCreateInstance(h),R=this.getAttribute("data-bs-slide-to");if(R){A.to(R),A._maybeEnableCycle();return}if(Cs.getDataAttribute(this,"slide")==="next"){A.next(),A._maybeEnableCycle();return}A.prev(),A._maybeEnableCycle()});Mt.on(window,WN,()=>{const E=ie.find(nO);for(const h of E)Hl.getOrCreateInstance(h)});or(Hl);const sO="collapse",aO="bs.collapse",Ul=`.${aO}`,cO=".data-api",lO=`show${Ul}`,dO=`shown${Ul}`,uO=`hide${Ul}`,hO=`hidden${Ul}`,fO=`click${Ul}${cO}`,Uf="show",Tc="collapse",pu="collapsing",pO="collapsed",gO=`:scope .${Tc} .${Tc}`,mO="collapse-horizontal",kO="width",bO="height",_O=".collapse.show, .collapse.collapsing",ip='[data-bs-toggle="collapse"]',wO={parent:null,toggle:!0},AO={parent:"(null|element)",toggle:"boolean"};class zl extends Ar{constructor(h,A){super(h,A),this._isTransitioning=!1,this._triggerArray=[];const R=ie.find(ip);for(const V of R){const f=ie.getSelectorFromElement(V),L=ie.find(f).filter(B=>B===this._element);f!==null&&L.length&&this._triggerArray.push(V)}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return wO}static get DefaultType(){return AO}static get NAME(){return sO}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let h=[];if(this._config.parent&&(h=this._getFirstLevelChildren(_O).filter(B=>B!==this._element).map(B=>zl.getOrCreateInstance(B,{toggle:!1}))),h.length&&h[0]._isTransitioning||Mt.trigger(this._element,lO).defaultPrevented)return;for(const B of h)B.hide();const R=this._getDimension();this._element.classList.remove(Tc),this._element.classList.add(pu),this._element.style[R]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const V=()=>{this._isTransitioning=!1,this._element.classList.remove(pu),this._element.classList.add(Tc,Uf),this._element.style[R]="",Mt.trigger(this._element,dO)},L=`scroll${R[0].toUpperCase()+R.slice(1)}`;this._queueCallback(V,this._element,!0),this._element.style[R]=`${this._element[L]}px`}hide(){if(this._isTransitioning||!this._isShown()||Mt.trigger(this._element,uO).defaultPrevented)return;const A=this._getDimension();this._element.style[A]=`${this._element.getBoundingClientRect()[A]}px`,Fl(this._element),this._element.classList.add(pu),this._element.classList.remove(Tc,Uf);for(const V of this._triggerArray){const f=ie.getElementFromSelector(V);f&&!this._isShown(f)&&this._addAriaAndCollapsedClass([V],!1)}this._isTransitioning=!0;const R=()=>{this._isTransitioning=!1,this._element.classList.remove(pu),this._element.classList.add(Tc),Mt.trigger(this._element,hO)};this._element.style[A]="",this._queueCallback(R,this._element,!0)}_isShown(h=this._element){return h.classList.contains(Uf)}_configAfterMerge(h){return h.toggle=!!h.toggle,h.parent=ta(h.parent),h}_getDimension(){return this._element.classList.contains(mO)?kO:bO}_initializeChildren(){if(!this._config.parent)return;const h=this._getFirstLevelChildren(ip);for(const A of h){const R=ie.getElementFromSelector(A);R&&this._addAriaAndCollapsedClass([A],this._isShown(R))}}_getFirstLevelChildren(h){const A=ie.find(gO,this._config.parent);return ie.find(h,this._config.parent).filter(R=>!A.includes(R))}_addAriaAndCollapsedClass(h,A){if(h.length)for(const R of h)R.classList.toggle(pO,!A),R.setAttribute("aria-expanded",A)}static jQueryInterface(h){const A={};return typeof h=="string"&&/show|hide/.test(h)&&(A.toggle=!1),this.each(function(){const R=zl.getOrCreateInstance(this,A);if(typeof h=="string"){if(typeof R[h]>"u")throw new TypeError(`No method named "${h}"`);R[h]()}})}}Mt.on(document,fO,ip,function(E){(E.target.tagName==="A"||E.delegateTarget&&E.delegateTarget.tagName==="A")&&E.preventDefault();for(const h of ie.getMultipleElementsFromSelector(this))zl.getOrCreateInstance(h,{toggle:!1}).toggle()});or(zl);const $v="dropdown",vO="bs.dropdown",Va=`.${vO}`,wp=".data-api",CO="Escape",Wv="Tab",yO="ArrowUp",qv="ArrowDown",EO=2,xO=`hide${Va}`,TO=`hidden${Va}`,DO=`show${Va}`,SO=`shown${Va}`,i0=`click${Va}${wp}`,o0=`keydown${Va}${wp}`,IO=`keyup${Va}${wp}`,xc="show",MO="dropup",NO="dropend",OO="dropstart",BO="dropup-center",LO="dropdown-center",Pa='[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',PO=`${Pa}.${xc}`,Au=".dropdown-menu",RO=".navbar",zO=".navbar-nav",jO=".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",FO=nr()?"top-end":"top-start",VO=nr()?"top-start":"top-end",HO=nr()?"bottom-end":"bottom-start",UO=nr()?"bottom-start":"bottom-end",$O=nr()?"left-start":"right-start",WO=nr()?"right-start":"left-start",qO="top",GO="bottom",KO={autoClose:!0,boundary:"clippingParents",display:"dynamic",offset:[0,2],popperConfig:null,reference:"toggle"},YO={autoClose:"(boolean|string)",boundary:"(string|element)",display:"string",offset:"(array|string|function)",popperConfig:"(null|object|function)",reference:"(string|element|object)"};class qr extends Ar{constructor(h,A){super(h,A),this._popper=null,this._parent=this._element.parentNode,this._menu=ie.next(this._element,Au)[0]||ie.prev(this._element,Au)[0]||ie.findOne(Au,this._parent),this._inNavbar=this._detectNavbar()}static get Default(){return KO}static get DefaultType(){return YO}static get NAME(){return $v}toggle(){return this._isShown()?this.hide():this.show()}show(){if(ea(this._element)||this._isShown())return;const h={relatedTarget:this._element};if(!Mt.trigger(this._element,DO,h).defaultPrevented){if(this._createPopper(),"ontouchstart"in document.documentElement&&!this._parent.closest(zO))for(const R of[].concat(...document.body.children))Mt.on(R,"mouseover",Cu);this._element.focus(),this._element.setAttribute("aria-expanded",!0),this._menu.classList.add(xc),this._element.classList.add(xc),Mt.trigger(this._element,SO,h)}}hide(){if(ea(this._element)||!this._isShown())return;const h={relatedTarget:this._element};this._completeHide(h)}dispose(){this._popper&&this._popper.destroy(),super.dispose()}update(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update()}_completeHide(h){if(!Mt.trigger(this._element,xO,h).defaultPrevented){if("ontouchstart"in document.documentElement)for(const R of[].concat(...document.body.children))Mt.off(R,"mouseover",Cu);this._popper&&this._popper.destroy(),this._menu.classList.remove(xc),this._element.classList.remove(xc),this._element.setAttribute("aria-expanded","false"),Cs.removeDataAttribute(this._menu,"popper"),Mt.trigger(this._element,TO,h)}}_getConfig(h){if(h=super._getConfig(h),typeof h.reference=="object"&&!vs(h.reference)&&typeof h.reference.getBoundingClientRect!="function")throw new TypeError(`${$v.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);return h}_createPopper(){if(typeof FC>"u")throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");let h=this._element;this._config.reference==="parent"?h=this._parent:vs(this._config.reference)?h=ta(this._config.reference):typeof this._config.reference=="object"&&(h=this._config.reference);const A=this._getPopperConfig();this._popper=kp(h,this._menu,A)}_isShown(){return this._menu.classList.contains(xc)}_getPlacement(){const h=this._parent;if(h.classList.contains(NO))return $O;if(h.classList.contains(OO))return WO;if(h.classList.contains(BO))return qO;if(h.classList.contains(LO))return GO;const A=getComputedStyle(this._menu).getPropertyValue("--bs-position").trim()==="end";return h.classList.contains(MO)?A?VO:FO:A?UO:HO}_detectNavbar(){return this._element.closest(RO)!==null}_getOffset(){const{offset:h}=this._config;return typeof h=="string"?h.split(",").map(A=>Number.parseInt(A,10)):typeof h=="function"?A=>h(A,this._element):h}_getPopperConfig(){const h={placement:this._getPlacement(),modifiers:[{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"offset",options:{offset:this._getOffset()}}]};return(this._inNavbar||this._config.display==="static")&&(Cs.setDataAttribute(this._menu,"popper","static"),h.modifiers=[{name:"applyStyles",enabled:!1}]),{...h,...eo(this._config.popperConfig,[h])}}_selectMenuItem({key:h,target:A}){const R=ie.find(jO,this._menu).filter(V=>Pc(V));R.length&&bp(R,A,h===qv,!R.includes(A)).focus()}static jQueryInterface(h){return this.each(function(){const A=qr.getOrCreateInstance(this,h);if(typeof h=="string"){if(typeof A[h]>"u")throw new TypeError(`No method named "${h}"`);A[h]()}})}static clearMenus(h){if(h.button===EO||h.type==="keyup"&&h.key!==Wv)return;const A=ie.find(PO);for(const R of A){const V=qr.getInstance(R);if(!V||V._config.autoClose===!1)continue;const f=h.composedPath(),L=f.includes(V._menu);if(f.includes(V._element)||V._config.autoClose==="inside"&&!L||V._config.autoClose==="outside"&&L||V._menu.contains(h.target)&&(h.type==="keyup"&&h.key===Wv||/input|select|option|textarea|form/i.test(h.target.tagName)))continue;const B={relatedTarget:V._element};h.type==="click"&&(B.clickEvent=h),V._completeHide(B)}}static dataApiKeydownHandler(h){const A=/input|textarea/i.test(h.target.tagName),R=h.key===CO,V=[yO,qv].includes(h.key);if(!V&&!R||A&&!R)return;h.preventDefault();const f=this.matches(Pa)?this:ie.prev(this,Pa)[0]||ie.next(this,Pa)[0]||ie.findOne(Pa,h.delegateTarget.parentNode),L=qr.getOrCreateInstance(f);if(V){h.stopPropagation(),L.show(),L._selectMenuItem(h);return}L._isShown()&&(h.stopPropagation(),L.hide(),f.focus())}}Mt.on(document,o0,Pa,qr.dataApiKeydownHandler);Mt.on(document,o0,Au,qr.dataApiKeydownHandler);Mt.on(document,i0,qr.clearMenus);Mt.on(document,IO,qr.clearMenus);Mt.on(document,i0,Pa,function(E){E.preventDefault(),qr.getOrCreateInstance(this).toggle()});or(qr);const r0="backdrop",QO="fade",Gv="show",Kv=`mousedown.bs.${r0}`,ZO={className:"modal-backdrop",clickCallback:null,isAnimated:!1,isVisible:!0,rootElement:"body"},JO={className:"string",clickCallback:"(function|null)",isAnimated:"boolean",isVisible:"boolean",rootElement:"(element|string)"};class s0 extends Vl{constructor(h){super(),this._config=this._getConfig(h),this._isAppended=!1,this._element=null}static get Default(){return ZO}static get DefaultType(){return JO}static get NAME(){return r0}show(h){if(!this._config.isVisible){eo(h);return}this._append();const A=this._getElement();this._config.isAnimated&&Fl(A),A.classList.add(Gv),this._emulateAnimation(()=>{eo(h)})}hide(h){if(!this._config.isVisible){eo(h);return}this._getElement().classList.remove(Gv),this._emulateAnimation(()=>{this.dispose(),eo(h)})}dispose(){this._isAppended&&(Mt.off(this._element,Kv),this._element.remove(),this._isAppended=!1)}_getElement(){if(!this._element){const h=document.createElement("div");h.className=this._config.className,this._config.isAnimated&&h.classList.add(QO),this._element=h}return this._element}_configAfterMerge(h){return h.rootElement=ta(h.rootElement),h}_append(){if(this._isAppended)return;const h=this._getElement();this._config.rootElement.append(h),Mt.on(h,Kv,()=>{eo(this._config.clickCallback)}),this._isAppended=!0}_emulateAnimation(h){WC(h,this._getElement(),this._config.isAnimated)}}const XO="focustrap",tB="bs.focustrap",Eu=`.${tB}`,eB=`focusin${Eu}`,nB=`keydown.tab${Eu}`,iB="Tab",oB="forward",Yv="backward",rB={autofocus:!0,trapElement:null},sB={autofocus:"boolean",trapElement:"element"};class a0 extends Vl{constructor(h){super(),this._config=this._getConfig(h),this._isActive=!1,this._lastTabNavDirection=null}static get Default(){return rB}static get DefaultType(){return sB}static get NAME(){return XO}activate(){this._isActive||(this._config.autofocus&&this._config.trapElement.focus(),Mt.off(document,Eu),Mt.on(document,eB,h=>this._handleFocusin(h)),Mt.on(document,nB,h=>this._handleKeydown(h)),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,Mt.off(document,Eu))}_handleFocusin(h){const{trapElement:A}=this._config;if(h.target===document||h.target===A||A.contains(h.target))return;const R=ie.focusableChildren(A);R.length===0?A.focus():this._lastTabNavDirection===Yv?R[R.length-1].focus():R[0].focus()}_handleKeydown(h){h.key===iB&&(this._lastTabNavDirection=h.shiftKey?Yv:oB)}}const Qv=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",Zv=".sticky-top",gu="padding-right",Jv="margin-right";class op{constructor(){this._element=document.body}getWidth(){const h=document.documentElement.clientWidth;return Math.abs(window.innerWidth-h)}hide(){const h=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,gu,A=>A+h),this._setElementAttributes(Qv,gu,A=>A+h),this._setElementAttributes(Zv,Jv,A=>A-h)}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,gu),this._resetElementAttributes(Qv,gu),this._resetElementAttributes(Zv,Jv)}isOverflowing(){return this.getWidth()>0}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(h,A,R){const V=this.getWidth(),f=L=>{if(L!==this._element&&window.innerWidth>L.clientWidth+V)return;this._saveInitialAttribute(L,A);const B=window.getComputedStyle(L).getPropertyValue(A);L.style.setProperty(A,`${R(Number.parseFloat(B))}px`)};this._applyManipulationCallback(h,f)}_saveInitialAttribute(h,A){const R=h.style.getPropertyValue(A);R&&Cs.setDataAttribute(h,A,R)}_resetElementAttributes(h,A){const R=V=>{const f=Cs.getDataAttribute(V,A);if(f===null){V.style.removeProperty(A);return}Cs.removeDataAttribute(V,A),V.style.setProperty(A,f)};this._applyManipulationCallback(h,R)}_applyManipulationCallback(h,A){if(vs(h)){A(h);return}for(const R of ie.find(h,this._element))A(R)}}const aB="modal",cB="bs.modal",ir=`.${cB}`,lB=".data-api",dB="Escape",uB=`hide${ir}`,hB=`hidePrevented${ir}`,c0=`hidden${ir}`,l0=`show${ir}`,fB=`shown${ir}`,pB=`resize${ir}`,gB=`click.dismiss${ir}`,mB=`mousedown.dismiss${ir}`,kB=`keydown.dismiss${ir}`,bB=`click${ir}${lB}`,Xv="modal-open",_B="fade",tC="show",$f="modal-static",wB=".modal.show",AB=".modal-dialog",vB=".modal-body",CB='[data-bs-toggle="modal"]',yB={backdrop:!0,focus:!0,keyboard:!0},EB={backdrop:"(boolean|string)",focus:"boolean",keyboard:"boolean"};class Oc extends Ar{constructor(h,A){super(h,A),this._dialog=ie.findOne(AB,this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._isTransitioning=!1,this._scrollBar=new op,this._addEventListeners()}static get Default(){return yB}static get DefaultType(){return EB}static get NAME(){return aB}toggle(h){return this._isShown?this.hide():this.show(h)}show(h){this._isShown||this._isTransitioning||Mt.trigger(this._element,l0,{relatedTarget:h}).defaultPrevented||(this._isShown=!0,this._isTransitioning=!0,this._scrollBar.hide(),document.body.classList.add(Xv),this._adjustDialog(),this._backdrop.show(()=>this._showElement(h)))}hide(){!this._isShown||this._isTransitioning||Mt.trigger(this._element,uB).defaultPrevented||(this._isShown=!1,this._isTransitioning=!0,this._focustrap.deactivate(),this._element.classList.remove(tC),this._queueCallback(()=>this._hideModal(),this._element,this._isAnimated()))}dispose(){Mt.off(window,ir),Mt.off(this._dialog,ir),this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new s0({isVisible:!!this._config.backdrop,isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new a0({trapElement:this._element})}_showElement(h){document.body.contains(this._element)||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0;const A=ie.findOne(vB,this._dialog);A&&(A.scrollTop=0),Fl(this._element),this._element.classList.add(tC);const R=()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,Mt.trigger(this._element,fB,{relatedTarget:h})};this._queueCallback(R,this._dialog,this._isAnimated())}_addEventListeners(){Mt.on(this._element,kB,h=>{if(h.key===dB){if(this._config.keyboard){this.hide();return}this._triggerBackdropTransition()}}),Mt.on(window,pB,()=>{this._isShown&&!this._isTransitioning&&this._adjustDialog()}),Mt.on(this._element,mB,h=>{Mt.one(this._element,gB,A=>{if(!(this._element!==h.target||this._element!==A.target)){if(this._config.backdrop==="static"){this._triggerBackdropTransition();return}this._config.backdrop&&this.hide()}})})}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide(()=>{document.body.classList.remove(Xv),this._resetAdjustments(),this._scrollBar.reset(),Mt.trigger(this._element,c0)})}_isAnimated(){return this._element.classList.contains(_B)}_triggerBackdropTransition(){if(Mt.trigger(this._element,hB).defaultPrevented)return;const A=this._element.scrollHeight>document.documentElement.clientHeight,R=this._element.style.overflowY;R==="hidden"||this._element.classList.contains($f)||(A||(this._element.style.overflowY="hidden"),this._element.classList.add($f),this._queueCallback(()=>{this._element.classList.remove($f),this._queueCallback(()=>{this._element.style.overflowY=R},this._dialog)},this._dialog),this._element.focus())}_adjustDialog(){const h=this._element.scrollHeight>document.documentElement.clientHeight,A=this._scrollBar.getWidth(),R=A>0;if(R&&!h){const V=nr()?"paddingLeft":"paddingRight";this._element.style[V]=`${A}px`}if(!R&&h){const V=nr()?"paddingRight":"paddingLeft";this._element.style[V]=`${A}px`}}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(h,A){return this.each(function(){const R=Oc.getOrCreateInstance(this,h);if(typeof h=="string"){if(typeof R[h]>"u")throw new TypeError(`No method named "${h}"`);R[h](A)}})}}Mt.on(document,bB,CB,function(E){const h=ie.getElementFromSelector(this);["A","AREA"].includes(this.tagName)&&E.preventDefault(),Mt.one(h,l0,V=>{V.defaultPrevented||Mt.one(h,c0,()=>{Pc(this)&&this.focus()})});const A=ie.findOne(wB);A&&Oc.getInstance(A).hide(),Oc.getOrCreateInstance(h).toggle(this)});Iu(Oc);or(Oc);const xB="offcanvas",TB="bs.offcanvas",Es=`.${TB}`,d0=".data-api",DB=`load${Es}${d0}`,SB="Escape",eC="show",nC="showing",iC="hiding",IB="offcanvas-backdrop",u0=".offcanvas.show",MB=`show${Es}`,NB=`shown${Es}`,OB=`hide${Es}`,oC=`hidePrevented${Es}`,h0=`hidden${Es}`,BB=`resize${Es}`,LB=`click${Es}${d0}`,PB=`keydown.dismiss${Es}`,RB='[data-bs-toggle="offcanvas"]',zB={backdrop:!0,keyboard:!0,scroll:!1},jB={backdrop:"(boolean|string)",keyboard:"boolean",scroll:"boolean"};class na extends Ar{constructor(h,A){super(h,A),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._addEventListeners()}static get Default(){return zB}static get DefaultType(){return jB}static get NAME(){return xB}toggle(h){return this._isShown?this.hide():this.show(h)}show(h){if(this._isShown||Mt.trigger(this._element,MB,{relatedTarget:h}).defaultPrevented)return;this._isShown=!0,this._backdrop.show(),this._config.scroll||new op().hide(),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add(nC);const R=()=>{(!this._config.scroll||this._config.backdrop)&&this._focustrap.activate(),this._element.classList.add(eC),this._element.classList.remove(nC),Mt.trigger(this._element,NB,{relatedTarget:h})};this._queueCallback(R,this._element,!0)}hide(){if(!this._isShown||Mt.trigger(this._element,OB).defaultPrevented)return;this._focustrap.deactivate(),this._element.blur(),this._isShown=!1,this._element.classList.add(iC),this._backdrop.hide();const A=()=>{this._element.classList.remove(eC,iC),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._config.scroll||new op().reset(),Mt.trigger(this._element,h0)};this._queueCallback(A,this._element,!0)}dispose(){this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}_initializeBackDrop(){const h=()=>{if(this._config.backdrop==="static"){Mt.trigger(this._element,oC);return}this.hide()},A=!!this._config.backdrop;return new s0({className:IB,isVisible:A,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:A?h:null})}_initializeFocusTrap(){return new a0({trapElement:this._element})}_addEventListeners(){Mt.on(this._element,PB,h=>{if(h.key===SB){if(this._config.keyboard){this.hide();return}Mt.trigger(this._element,oC)}})}static jQueryInterface(h){return this.each(function(){const A=na.getOrCreateInstance(this,h);if(typeof h=="string"){if(A[h]===void 0||h.startsWith("_")||h==="constructor")throw new TypeError(`No method named "${h}"`);A[h](this)}})}}Mt.on(document,LB,RB,function(E){const h=ie.getElementFromSelector(this);if(["A","AREA"].includes(this.tagName)&&E.preventDefault(),ea(this))return;Mt.one(h,h0,()=>{Pc(this)&&this.focus()});const A=ie.findOne(u0);A&&A!==h&&na.getInstance(A).hide(),na.getOrCreateInstance(h).toggle(this)});Mt.on(window,DB,()=>{for(const E of ie.find(u0))na.getOrCreateInstance(E).show()});Mt.on(window,BB,()=>{for(const E of ie.find("[aria-modal][class*=show][class*=offcanvas-]"))getComputedStyle(E).position!=="fixed"&&na.getOrCreateInstance(E).hide()});Iu(na);or(na);const FB=/^aria-[\w-]*$/i,f0={"*":["class","dir","id","lang","role",FB],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],dd:[],div:[],dl:[],dt:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},VB=new Set(["background","cite","href","itemtype","longdesc","poster","src","xlink:href"]),HB=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i,UB=(E,h)=>{const A=E.nodeName.toLowerCase();return h.includes(A)?VB.has(A)?!!HB.test(E.nodeValue):!0:h.filter(R=>R instanceof RegExp).some(R=>R.test(A))};function $B(E,h,A){if(!E.length)return E;if(A&&typeof A=="function")return A(E);const V=new window.DOMParser().parseFromString(E,"text/html"),f=[].concat(...V.body.querySelectorAll("*"));for(const L of f){const B=L.nodeName.toLowerCase();if(!Object.keys(h).includes(B)){L.remove();continue}const _=[].concat(...L.attributes),q=[].concat(h["*"]||[],h[B]||[]);for(const U of _)UB(U,q)||L.removeAttribute(U.nodeName)}return V.body.innerHTML}const WB="TemplateFactory",qB={allowList:f0,content:{},extraClass:"",html:!1,sanitize:!0,sanitizeFn:null,template:"<div></div>"},GB={allowList:"object",content:"object",extraClass:"(string|function)",html:"boolean",sanitize:"boolean",sanitizeFn:"(null|function)",template:"string"},KB={entry:"(string|element|function|null)",selector:"(string|element)"};class YB extends Vl{constructor(h){super(),this._config=this._getConfig(h)}static get Default(){return qB}static get DefaultType(){return GB}static get NAME(){return WB}getContent(){return Object.values(this._config.content).map(h=>this._resolvePossibleFunction(h)).filter(Boolean)}hasContent(){return this.getContent().length>0}changeContent(h){return this._checkContent(h),this._config.content={...this._config.content,...h},this}toHtml(){const h=document.createElement("div");h.innerHTML=this._maybeSanitize(this._config.template);for(const[V,f]of Object.entries(this._config.content))this._setContent(h,f,V);const A=h.children[0],R=this._resolvePossibleFunction(this._config.extraClass);return R&&A.classList.add(...R.split(" ")),A}_typeCheckConfig(h){super._typeCheckConfig(h),this._checkContent(h.content)}_checkContent(h){for(const[A,R]of Object.entries(h))super._typeCheckConfig({selector:A,entry:R},KB)}_setContent(h,A,R){const V=ie.findOne(R,h);if(V){if(A=this._resolvePossibleFunction(A),!A){V.remove();return}if(vs(A)){this._putElementInTemplate(ta(A),V);return}if(this._config.html){V.innerHTML=this._maybeSanitize(A);return}V.textContent=A}}_maybeSanitize(h){return this._config.sanitize?$B(h,this._config.allowList,this._config.sanitizeFn):h}_resolvePossibleFunction(h){return eo(h,[this])}_putElementInTemplate(h,A){if(this._config.html){A.innerHTML="",A.append(h);return}A.textContent=h.textContent}}const QB="tooltip",ZB=new Set(["sanitize","allowList","sanitizeFn"]),Wf="fade",JB="modal",mu="show",XB=".tooltip-inner",rC=`.${JB}`,sC="hide.bs.modal",Ll="hover",qf="focus",t4="click",e4="manual",n4="hide",i4="hidden",o4="show",r4="shown",s4="inserted",a4="click",c4="focusin",l4="focusout",d4="mouseenter",u4="mouseleave",h4={AUTO:"auto",TOP:"top",RIGHT:nr()?"left":"right",BOTTOM:"bottom",LEFT:nr()?"right":"left"},f4={allowList:f0,animation:!0,boundary:"clippingParents",container:!1,customClass:"",delay:0,fallbackPlacements:["top","right","bottom","left"],html:!1,offset:[0,6],placement:"top",popperConfig:null,sanitize:!0,sanitizeFn:null,selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',title:"",trigger:"hover focus"},p4={allowList:"object",animation:"boolean",boundary:"(string|element)",container:"(string|element|boolean)",customClass:"(string|function)",delay:"(number|object)",fallbackPlacements:"array",html:"boolean",offset:"(array|string|function)",placement:"(string|function)",popperConfig:"(null|object|function)",sanitize:"boolean",sanitizeFn:"(null|function)",selector:"(string|boolean)",template:"string",title:"(string|element|function)",trigger:"string"};class zc extends Ar{constructor(h,A){if(typeof FC>"u")throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");super(h,A),this._isEnabled=!0,this._timeout=0,this._isHovered=null,this._activeTrigger={},this._popper=null,this._templateFactory=null,this._newContent=null,this.tip=null,this._setListeners(),this._config.selector||this._fixTitle()}static get Default(){return f4}static get DefaultType(){return p4}static get NAME(){return QB}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}toggleEnabled(){this._isEnabled=!this._isEnabled}toggle(){if(this._isEnabled){if(this._activeTrigger.click=!this._activeTrigger.click,this._isShown()){this._leave();return}this._enter()}}dispose(){clearTimeout(this._timeout),Mt.off(this._element.closest(rC),sC,this._hideModalHandler),this._element.getAttribute("data-bs-original-title")&&this._element.setAttribute("title",this._element.getAttribute("data-bs-original-title")),this._disposePopper(),super.dispose()}show(){if(this._element.style.display==="none")throw new Error("Please use show on visible elements");if(!(this._isWithContent()&&this._isEnabled))return;const h=Mt.trigger(this._element,this.constructor.eventName(o4)),R=(UC(this._element)||this._element.ownerDocument.documentElement).contains(this._element);if(h.defaultPrevented||!R)return;this._disposePopper();const V=this._getTipElement();this._element.setAttribute("aria-describedby",V.getAttribute("id"));const{container:f}=this._config;if(this._element.ownerDocument.documentElement.contains(this.tip)||(f.append(V),Mt.trigger(this._element,this.constructor.eventName(s4))),this._popper=this._createPopper(V),V.classList.add(mu),"ontouchstart"in document.documentElement)for(const B of[].concat(...document.body.children))Mt.on(B,"mouseover",Cu);const L=()=>{Mt.trigger(this._element,this.constructor.eventName(r4)),this._isHovered===!1&&this._leave(),this._isHovered=!1};this._queueCallback(L,this.tip,this._isAnimated())}hide(){if(!this._isShown()||Mt.trigger(this._element,this.constructor.eventName(n4)).defaultPrevented)return;if(this._getTipElement().classList.remove(mu),"ontouchstart"in document.documentElement)for(const V of[].concat(...document.body.children))Mt.off(V,"mouseover",Cu);this._activeTrigger[t4]=!1,this._activeTrigger[qf]=!1,this._activeTrigger[Ll]=!1,this._isHovered=null;const R=()=>{this._isWithActiveTrigger()||(this._isHovered||this._disposePopper(),this._element.removeAttribute("aria-describedby"),Mt.trigger(this._element,this.constructor.eventName(i4)))};this._queueCallback(R,this.tip,this._isAnimated())}update(){this._popper&&this._popper.update()}_isWithContent(){return!!this._getTitle()}_getTipElement(){return this.tip||(this.tip=this._createTipElement(this._newContent||this._getContentForTemplate())),this.tip}_createTipElement(h){const A=this._getTemplateFactory(h).toHtml();if(!A)return null;A.classList.remove(Wf,mu),A.classList.add(`bs-${this.constructor.NAME}-auto`);const R=tN(this.constructor.NAME).toString();return A.setAttribute("id",R),this._isAnimated()&&A.classList.add(Wf),A}setContent(h){this._newContent=h,this._isShown()&&(this._disposePopper(),this.show())}_getTemplateFactory(h){return this._templateFactory?this._templateFactory.changeContent(h):this._templateFactory=new YB({...this._config,content:h,extraClass:this._resolvePossibleFunction(this._config.customClass)}),this._templateFactory}_getContentForTemplate(){return{[XB]:this._getTitle()}}_getTitle(){return this._resolvePossibleFunction(this._config.title)||this._element.getAttribute("data-bs-original-title")}_initializeOnDelegatedTarget(h){return this.constructor.getOrCreateInstance(h.delegateTarget,this._getDelegateConfig())}_isAnimated(){return this._config.animation||this.tip&&this.tip.classList.contains(Wf)}_isShown(){return this.tip&&this.tip.classList.contains(mu)}_createPopper(h){const A=eo(this._config.placement,[this,h,this._element]),R=h4[A.toUpperCase()];return kp(this._element,h,this._getPopperConfig(R))}_getOffset(){const{offset:h}=this._config;return typeof h=="string"?h.split(",").map(A=>Number.parseInt(A,10)):typeof h=="function"?A=>h(A,this._element):h}_resolvePossibleFunction(h){return eo(h,[this._element])}_getPopperConfig(h){const A={placement:h,modifiers:[{name:"flip",options:{fallbackPlacements:this._config.fallbackPlacements}},{name:"offset",options:{offset:this._getOffset()}},{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"arrow",options:{element:`.${this.constructor.NAME}-arrow`}},{name:"preSetPlacement",enabled:!0,phase:"beforeMain",fn:R=>{this._getTipElement().setAttribute("data-popper-placement",R.state.placement)}}]};return{...A,...eo(this._config.popperConfig,[A])}}_setListeners(){const h=this._config.trigger.split(" ");for(const A of h)if(A==="click")Mt.on(this._element,this.constructor.eventName(a4),this._config.selector,R=>{this._initializeOnDelegatedTarget(R).toggle()});else if(A!==e4){const R=A===Ll?this.constructor.eventName(d4):this.constructor.eventName(c4),V=A===Ll?this.constructor.eventName(u4):this.constructor.eventName(l4);Mt.on(this._element,R,this._config.selector,f=>{const L=this._initializeOnDelegatedTarget(f);L._activeTrigger[f.type==="focusin"?qf:Ll]=!0,L._enter()}),Mt.on(this._element,V,this._config.selector,f=>{const L=this._initializeOnDelegatedTarget(f);L._activeTrigger[f.type==="focusout"?qf:Ll]=L._element.contains(f.relatedTarget),L._leave()})}this._hideModalHandler=()=>{this._element&&this.hide()},Mt.on(this._element.closest(rC),sC,this._hideModalHandler)}_fixTitle(){const h=this._element.getAttribute("title");h&&(!this._element.getAttribute("aria-label")&&!this._element.textContent.trim()&&this._element.setAttribute("aria-label",h),this._element.setAttribute("data-bs-original-title",h),this._element.removeAttribute("title"))}_enter(){if(this._isShown()||this._isHovered){this._isHovered=!0;return}this._isHovered=!0,this._setTimeout(()=>{this._isHovered&&this.show()},this._config.delay.show)}_leave(){this._isWithActiveTrigger()||(this._isHovered=!1,this._setTimeout(()=>{this._isHovered||this.hide()},this._config.delay.hide))}_setTimeout(h,A){clearTimeout(this._timeout),this._timeout=setTimeout(h,A)}_isWithActiveTrigger(){return Object.values(this._activeTrigger).includes(!0)}_getConfig(h){const A=Cs.getDataAttributes(this._element);for(const R of Object.keys(A))ZB.has(R)&&delete A[R];return h={...A,...typeof h=="object"&&h?h:{}},h=this._mergeConfigObj(h),h=this._configAfterMerge(h),this._typeCheckConfig(h),h}_configAfterMerge(h){return h.container=h.container===!1?document.body:ta(h.container),typeof h.delay=="number"&&(h.delay={show:h.delay,hide:h.delay}),typeof h.title=="number"&&(h.title=h.title.toString()),typeof h.content=="number"&&(h.content=h.content.toString()),h}_getDelegateConfig(){const h={};for(const[A,R]of Object.entries(this._config))this.constructor.Default[A]!==R&&(h[A]=R);return h.selector=!1,h.trigger="manual",h}_disposePopper(){this._popper&&(this._popper.destroy(),this._popper=null),this.tip&&(this.tip.remove(),this.tip=null)}static jQueryInterface(h){return this.each(function(){const A=zc.getOrCreateInstance(this,h);if(typeof h=="string"){if(typeof A[h]>"u")throw new TypeError(`No method named "${h}"`);A[h]()}})}}or(zc);const g4="popover",m4=".popover-header",k4=".popover-body",b4={...zc.Default,content:"",offset:[0,8],placement:"right",template:'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',trigger:"click"},_4={...zc.DefaultType,content:"(null|string|element|function)"};class Ap extends zc{static get Default(){return b4}static get DefaultType(){return _4}static get NAME(){return g4}_isWithContent(){return this._getTitle()||this._getContent()}_getContentForTemplate(){return{[m4]:this._getTitle(),[k4]:this._getContent()}}_getContent(){return this._resolvePossibleFunction(this._config.content)}static jQueryInterface(h){return this.each(function(){const A=Ap.getOrCreateInstance(this,h);if(typeof h=="string"){if(typeof A[h]>"u")throw new TypeError(`No method named "${h}"`);A[h]()}})}}or(Ap);const w4="scrollspy",A4="bs.scrollspy",vp=`.${A4}`,v4=".data-api",C4=`activate${vp}`,aC=`click${vp}`,y4=`load${vp}${v4}`,E4="dropdown-item",Cc="active",x4='[data-bs-spy="scroll"]',Gf="[href]",T4=".nav, .list-group",cC=".nav-link",D4=".nav-item",S4=".list-group-item",I4=`${cC}, ${D4} > ${cC}, ${S4}`,M4=".dropdown",N4=".dropdown-toggle",O4={offset:null,rootMargin:"0px 0px -25%",smoothScroll:!1,target:null,threshold:[.1,.5,1]},B4={offset:"(number|null)",rootMargin:"string",smoothScroll:"boolean",target:"element",threshold:"array"};class Ou extends Ar{constructor(h,A){super(h,A),this._targetLinks=new Map,this._observableSections=new Map,this._rootElement=getComputedStyle(this._element).overflowY==="visible"?null:this._element,this._activeTarget=null,this._observer=null,this._previousScrollData={visibleEntryTop:0,parentScrollTop:0},this.refresh()}static get Default(){return O4}static get DefaultType(){return B4}static get NAME(){return w4}refresh(){this._initializeTargetsAndObservables(),this._maybeEnableSmoothScroll(),this._observer?this._observer.disconnect():this._observer=this._getNewObserver();for(const h of this._observableSections.values())this._observer.observe(h)}dispose(){this._observer.disconnect(),super.dispose()}_configAfterMerge(h){return h.target=ta(h.target)||document.body,h.rootMargin=h.offset?`${h.offset}px 0px -30%`:h.rootMargin,typeof h.threshold=="string"&&(h.threshold=h.threshold.split(",").map(A=>Number.parseFloat(A))),h}_maybeEnableSmoothScroll(){this._config.smoothScroll&&(Mt.off(this._config.target,aC),Mt.on(this._config.target,aC,Gf,h=>{const A=this._observableSections.get(h.target.hash);if(A){h.preventDefault();const R=this._rootElement||window,V=A.offsetTop-this._element.offsetTop;if(R.scrollTo){R.scrollTo({top:V,behavior:"smooth"});return}R.scrollTop=V}}))}_getNewObserver(){const h={root:this._rootElement,threshold:this._config.threshold,rootMargin:this._config.rootMargin};return new IntersectionObserver(A=>this._observerCallback(A),h)}_observerCallback(h){const A=L=>this._targetLinks.get(`#${L.target.id}`),R=L=>{this._previousScrollData.visibleEntryTop=L.target.offsetTop,this._process(A(L))},V=(this._rootElement||document.documentElement).scrollTop,f=V>=this._previousScrollData.parentScrollTop;this._previousScrollData.parentScrollTop=V;for(const L of h){if(!L.isIntersecting){this._activeTarget=null,this._clearActiveClass(A(L));continue}const B=L.target.offsetTop>=this._previousScrollData.visibleEntryTop;if(f&&B){if(R(L),!V)return;continue}!f&&!B&&R(L)}}_initializeTargetsAndObservables(){this._targetLinks=new Map,this._observableSections=new Map;const h=ie.find(Gf,this._config.target);for(const A of h){if(!A.hash||ea(A))continue;const R=ie.findOne(decodeURI(A.hash),this._element);Pc(R)&&(this._targetLinks.set(decodeURI(A.hash),A),this._observableSections.set(A.hash,R))}}_process(h){this._activeTarget!==h&&(this._clearActiveClass(this._config.target),this._activeTarget=h,h.classList.add(Cc),this._activateParents(h),Mt.trigger(this._element,C4,{relatedTarget:h}))}_activateParents(h){if(h.classList.contains(E4)){ie.findOne(N4,h.closest(M4)).classList.add(Cc);return}for(const A of ie.parents(h,T4))for(const R of ie.prev(A,I4))R.classList.add(Cc)}_clearActiveClass(h){h.classList.remove(Cc);const A=ie.find(`${Gf}.${Cc}`,h);for(const R of A)R.classList.remove(Cc)}static jQueryInterface(h){return this.each(function(){const A=Ou.getOrCreateInstance(this,h);if(typeof h=="string"){if(A[h]===void 0||h.startsWith("_")||h==="constructor")throw new TypeError(`No method named "${h}"`);A[h]()}})}}Mt.on(window,y4,()=>{for(const E of ie.find(x4))Ou.getOrCreateInstance(E)});or(Ou);const L4="tab",P4="bs.tab",Ha=`.${P4}`,R4=`hide${Ha}`,z4=`hidden${Ha}`,j4=`show${Ha}`,F4=`shown${Ha}`,V4=`click${Ha}`,H4=`keydown${Ha}`,U4=`load${Ha}`,$4="ArrowLeft",lC="ArrowRight",W4="ArrowUp",dC="ArrowDown",Kf="Home",uC="End",Ra="active",hC="fade",Yf="show",q4="dropdown",p0=".dropdown-toggle",G4=".dropdown-menu",Qf=`:not(${p0})`,K4='.list-group, .nav, [role="tablist"]',Y4=".nav-item, .list-group-item",Q4=`.nav-link${Qf}, .list-group-item${Qf}, [role="tab"]${Qf}`,g0='[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',Zf=`${Q4}, ${g0}`,Z4=`.${Ra}[data-bs-toggle="tab"], .${Ra}[data-bs-toggle="pill"], .${Ra}[data-bs-toggle="list"]`;class Bc extends Ar{constructor(h){super(h),this._parent=this._element.closest(K4),this._parent&&(this._setInitialAttributes(this._parent,this._getChildren()),Mt.on(this._element,H4,A=>this._keydown(A)))}static get NAME(){return L4}show(){const h=this._element;if(this._elemIsActive(h))return;const A=this._getActiveElem(),R=A?Mt.trigger(A,R4,{relatedTarget:h}):null;Mt.trigger(h,j4,{relatedTarget:A}).defaultPrevented||R&&R.defaultPrevented||(this._deactivate(A,h),this._activate(h,A))}_activate(h,A){if(!h)return;h.classList.add(Ra),this._activate(ie.getElementFromSelector(h));const R=()=>{if(h.getAttribute("role")!=="tab"){h.classList.add(Yf);return}h.removeAttribute("tabindex"),h.setAttribute("aria-selected",!0),this._toggleDropDown(h,!0),Mt.trigger(h,F4,{relatedTarget:A})};this._queueCallback(R,h,h.classList.contains(hC))}_deactivate(h,A){if(!h)return;h.classList.remove(Ra),h.blur(),this._deactivate(ie.getElementFromSelector(h));const R=()=>{if(h.getAttribute("role")!=="tab"){h.classList.remove(Yf);return}h.setAttribute("aria-selected",!1),h.setAttribute("tabindex","-1"),this._toggleDropDown(h,!1),Mt.trigger(h,z4,{relatedTarget:A})};this._queueCallback(R,h,h.classList.contains(hC))}_keydown(h){if(![$4,lC,W4,dC,Kf,uC].includes(h.key))return;h.stopPropagation(),h.preventDefault();const A=this._getChildren().filter(V=>!ea(V));let R;if([Kf,uC].includes(h.key))R=A[h.key===Kf?0:A.length-1];else{const V=[lC,dC].includes(h.key);R=bp(A,h.target,V,!0)}R&&(R.focus({preventScroll:!0}),Bc.getOrCreateInstance(R).show())}_getChildren(){return ie.find(Zf,this._parent)}_getActiveElem(){return this._getChildren().find(h=>this._elemIsActive(h))||null}_setInitialAttributes(h,A){this._setAttributeIfNotExists(h,"role","tablist");for(const R of A)this._setInitialAttributesOnChild(R)}_setInitialAttributesOnChild(h){h=this._getInnerElement(h);const A=this._elemIsActive(h),R=this._getOuterElement(h);h.setAttribute("aria-selected",A),R!==h&&this._setAttributeIfNotExists(R,"role","presentation"),A||h.setAttribute("tabindex","-1"),this._setAttributeIfNotExists(h,"role","tab"),this._setInitialAttributesOnTargetPanel(h)}_setInitialAttributesOnTargetPanel(h){const A=ie.getElementFromSelector(h);A&&(this._setAttributeIfNotExists(A,"role","tabpanel"),h.id&&this._setAttributeIfNotExists(A,"aria-labelledby",`${h.id}`))}_toggleDropDown(h,A){const R=this._getOuterElement(h);if(!R.classList.contains(q4))return;const V=(f,L)=>{const B=ie.findOne(f,R);B&&B.classList.toggle(L,A)};V(p0,Ra),V(G4,Yf),R.setAttribute("aria-expanded",A)}_setAttributeIfNotExists(h,A,R){h.hasAttribute(A)||h.setAttribute(A,R)}_elemIsActive(h){return h.classList.contains(Ra)}_getInnerElement(h){return h.matches(Zf)?h:ie.findOne(Zf,h)}_getOuterElement(h){return h.closest(Y4)||h}static jQueryInterface(h){return this.each(function(){const A=Bc.getOrCreateInstance(this);if(typeof h=="string"){if(A[h]===void 0||h.startsWith("_")||h==="constructor")throw new TypeError(`No method named "${h}"`);A[h]()}})}}Mt.on(document,V4,g0,function(E){["A","AREA"].includes(this.tagName)&&E.preventDefault(),!ea(this)&&Bc.getOrCreateInstance(this).show()});Mt.on(window,U4,()=>{for(const E of ie.find(Z4))Bc.getOrCreateInstance(E)});or(Bc);const J4="toast",X4="bs.toast",ra=`.${X4}`,tL=`mouseover${ra}`,eL=`mouseout${ra}`,nL=`focusin${ra}`,iL=`focusout${ra}`,oL=`hide${ra}`,rL=`hidden${ra}`,sL=`show${ra}`,aL=`shown${ra}`,cL="fade",fC="hide",ku="show",bu="showing",lL={animation:"boolean",autohide:"boolean",delay:"number"},dL={animation:!0,autohide:!0,delay:5e3};class Bu extends Ar{constructor(h,A){super(h,A),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get Default(){return dL}static get DefaultType(){return lL}static get NAME(){return J4}show(){if(Mt.trigger(this._element,sL).defaultPrevented)return;this._clearTimeout(),this._config.animation&&this._element.classList.add(cL);const A=()=>{this._element.classList.remove(bu),Mt.trigger(this._element,aL),this._maybeScheduleHide()};this._element.classList.remove(fC),Fl(this._element),this._element.classList.add(ku,bu),this._queueCallback(A,this._element,this._config.animation)}hide(){if(!this.isShown()||Mt.trigger(this._element,oL).defaultPrevented)return;const A=()=>{this._element.classList.add(fC),this._element.classList.remove(bu,ku),Mt.trigger(this._element,rL)};this._element.classList.add(bu),this._queueCallback(A,this._element,this._config.animation)}dispose(){this._clearTimeout(),this.isShown()&&this._element.classList.remove(ku),super.dispose()}isShown(){return this._element.classList.contains(ku)}_maybeScheduleHide(){this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout(()=>{this.hide()},this._config.delay)))}_onInteraction(h,A){switch(h.type){case"mouseover":case"mouseout":{this._hasMouseInteraction=A;break}case"focusin":case"focusout":{this._hasKeyboardInteraction=A;break}}if(A){this._clearTimeout();return}const R=h.relatedTarget;this._element===R||this._element.contains(R)||this._maybeScheduleHide()}_setListeners(){Mt.on(this._element,tL,h=>this._onInteraction(h,!0)),Mt.on(this._element,eL,h=>this._onInteraction(h,!1)),Mt.on(this._element,nL,h=>this._onInteraction(h,!0)),Mt.on(this._element,iL,h=>this._onInteraction(h,!1))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(h){return this.each(function(){const A=Bu.getOrCreateInstance(this,h);if(typeof h=="string"){if(typeof A[h]>"u")throw new TypeError(`No method named "${h}"`);A[h](this)}})}}Iu(Bu);or(Bu);var Xs=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function uL(E){return E&&E.__esModule&&Object.prototype.hasOwnProperty.call(E,"default")?E.default:E}var m0={exports:{}};/*!
 * jQuery JavaScript Library v3.7.1
 * https://jquery.com/
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2023-08-28T13:37Z
 */(function(E){(function(h,A){E.exports=h.document?A(h,!0):function(R){if(!R.document)throw new Error("jQuery requires a window with a document");return A(R)}})(typeof window<"u"?window:Xs,function(h,A){var R=[],V=Object.getPrototypeOf,f=R.slice,L=R.flat?function(d){return R.flat.call(d)}:function(d){return R.concat.apply([],d)},B=R.push,_=R.indexOf,q={},U=q.toString,H=q.hasOwnProperty,x=H.toString,P=x.call(Object),Y={},Q=function(g){return typeof g=="function"&&typeof g.nodeType!="number"&&typeof g.item!="function"},it=function(g){return g!=null&&g===g.window},at=h.document,rt={type:!0,src:!0,nonce:!0,noModule:!0};function yt(d,g,w){w=w||at;var C,S,M=w.createElement("script");if(M.text=d,g)for(C in rt)S=g[C]||g.getAttribute&&g.getAttribute(C),S&&M.setAttribute(C,S);w.head.appendChild(M).parentNode.removeChild(M)}function xt(d){return d==null?d+"":typeof d=="object"||typeof d=="function"?q[U.call(d)]||"object":typeof d}var Ht="3.7.1",Kt=/HTML$/i,m=function(d,g){return new m.fn.init(d,g)};m.fn=m.prototype={jquery:Ht,constructor:m,length:0,toArray:function(){return f.call(this)},get:function(d){return d==null?f.call(this):d<0?this[d+this.length]:this[d]},pushStack:function(d){var g=m.merge(this.constructor(),d);return g.prevObject=this,g},each:function(d){return m.each(this,d)},map:function(d){return this.pushStack(m.map(this,function(g,w){return d.call(g,w,g)}))},slice:function(){return this.pushStack(f.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(m.grep(this,function(d,g){return(g+1)%2}))},odd:function(){return this.pushStack(m.grep(this,function(d,g){return g%2}))},eq:function(d){var g=this.length,w=+d+(d<0?g:0);return this.pushStack(w>=0&&w<g?[this[w]]:[])},end:function(){return this.prevObject||this.constructor()},push:B,sort:R.sort,splice:R.splice},m.extend=m.fn.extend=function(){var d,g,w,C,S,M,z=arguments[0]||{},X=1,Z=arguments.length,st=!1;for(typeof z=="boolean"&&(st=z,z=arguments[X]||{},X++),typeof z!="object"&&!Q(z)&&(z={}),X===Z&&(z=this,X--);X<Z;X++)if((d=arguments[X])!=null)for(g in d)C=d[g],!(g==="__proto__"||z===C)&&(st&&C&&(m.isPlainObject(C)||(S=Array.isArray(C)))?(w=z[g],S&&!Array.isArray(w)?M=[]:!S&&!m.isPlainObject(w)?M={}:M=w,S=!1,z[g]=m.extend(st,M,C)):C!==void 0&&(z[g]=C));return z},m.extend({expando:"jQuery"+(Ht+Math.random()).replace(/\D/g,""),isReady:!0,error:function(d){throw new Error(d)},noop:function(){},isPlainObject:function(d){var g,w;return!d||U.call(d)!=="[object Object]"?!1:(g=V(d),g?(w=H.call(g,"constructor")&&g.constructor,typeof w=="function"&&x.call(w)===P):!0)},isEmptyObject:function(d){var g;for(g in d)return!1;return!0},globalEval:function(d,g,w){yt(d,{nonce:g&&g.nonce},w)},each:function(d,g){var w,C=0;if(It(d))for(w=d.length;C<w&&g.call(d[C],C,d[C])!==!1;C++);else for(C in d)if(g.call(d[C],C,d[C])===!1)break;return d},text:function(d){var g,w="",C=0,S=d.nodeType;if(!S)for(;g=d[C++];)w+=m.text(g);return S===1||S===11?d.textContent:S===9?d.documentElement.textContent:S===3||S===4?d.nodeValue:w},makeArray:function(d,g){var w=g||[];return d!=null&&(It(Object(d))?m.merge(w,typeof d=="string"?[d]:d):B.call(w,d)),w},inArray:function(d,g,w){return g==null?-1:_.call(g,d,w)},isXMLDoc:function(d){var g=d&&d.namespaceURI,w=d&&(d.ownerDocument||d).documentElement;return!Kt.test(g||w&&w.nodeName||"HTML")},merge:function(d,g){for(var w=+g.length,C=0,S=d.length;C<w;C++)d[S++]=g[C];return d.length=S,d},grep:function(d,g,w){for(var C,S=[],M=0,z=d.length,X=!w;M<z;M++)C=!g(d[M],M),C!==X&&S.push(d[M]);return S},map:function(d,g,w){var C,S,M=0,z=[];if(It(d))for(C=d.length;M<C;M++)S=g(d[M],M,w),S!=null&&z.push(S);else for(M in d)S=g(d[M],M,w),S!=null&&z.push(S);return L(z)},guid:1,support:Y}),typeof Symbol=="function"&&(m.fn[Symbol.iterator]=R[Symbol.iterator]),m.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(d,g){q["[object "+g+"]"]=g.toLowerCase()});function It(d){var g=!!d&&"length"in d&&d.length,w=xt(d);return Q(d)||it(d)?!1:w==="array"||g===0||typeof g=="number"&&g>0&&g-1 in d}function Bt(d,g){return d.nodeName&&d.nodeName.toLowerCase()===g.toLowerCase()}var te=R.pop,ae=R.sort,me=R.splice,Ut="[\\x20\\t\\r\\n\\f]",Se=new RegExp("^"+Ut+"+|((?:^|[^\\\\])(?:\\\\.)*)"+Ut+"+$","g");m.contains=function(d,g){var w=g&&g.parentNode;return d===w||!!(w&&w.nodeType===1&&(d.contains?d.contains(w):d.compareDocumentPosition&&d.compareDocumentPosition(w)&16))};var He=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;function ke(d,g){return g?d==="\0"?"�":d.slice(0,-1)+"\\"+d.charCodeAt(d.length-1).toString(16)+" ":"\\"+d}m.escapeSelector=function(d){return(d+"").replace(He,ke)};var ve=at,fe=B;(function(){var d,g,w,C,S,M=fe,z,X,Z,st,bt,wt=m.expando,ft=0,St=0,ee=Gn(),le=Gn(),ne=Gn(),$e=Gn(),je=function(K,ot){return K===ot&&(S=!0),0},dn="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",wn="(?:\\\\[\\da-fA-F]{1,6}"+Ut+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",ue="\\["+Ut+"*("+wn+")(?:"+Ut+"*([*^$|!~]?=)"+Ut+`*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(`+wn+"))|)"+Ut+"*\\]",lo=":("+wn+`)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|`+ue+")*)|.*)\\)|)",we=new RegExp(Ut+"+","g"),Be=new RegExp("^"+Ut+"*,"+Ut+"*"),Ho=new RegExp("^"+Ut+"*([>+~]|"+Ut+")"+Ut+"*"),uo=new RegExp(Ut+"|>"),Ln=new RegExp(lo),ai=new RegExp("^"+wn+"$"),Ge={ID:new RegExp("^#("+wn+")"),CLASS:new RegExp("^\\.("+wn+")"),TAG:new RegExp("^("+wn+"|[*])"),ATTR:new RegExp("^"+ue),PSEUDO:new RegExp("^"+lo),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+Ut+"*(even|odd|(([+-]|)(\\d*)n|)"+Ut+"*(?:([+-]|)"+Ut+"*(\\d+)|))"+Ut+"*\\)|)","i"),bool:new RegExp("^(?:"+dn+")$","i"),needsContext:new RegExp("^"+Ut+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+Ut+"*((?:-\\d)?\\d*)"+Ut+"*\\)|)(?=[^-]|$)","i")},qn=/^(?:input|select|textarea|button)$/i,un=/^h\d$/i,Pn=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,$i=/[+~]/,Xe=new RegExp("\\\\[\\da-fA-F]{1,6}"+Ut+"?|\\\\([^\\r\\n\\f])","g"),ci=function(K,ot){var ht="0x"+K.slice(1)-65536;return ot||(ht<0?String.fromCharCode(ht+65536):String.fromCharCode(ht>>10|55296,ht&1023|56320))},da=function(){qi()},hr=Wo(function(K){return K.disabled===!0&&Bt(K,"fieldset")},{dir:"parentNode",next:"legend"});function Bs(){try{return z.activeElement}catch{}}try{M.apply(R=f.call(ve.childNodes),ve.childNodes),R[ve.childNodes.length].nodeType}catch{M={apply:function(ot,ht){fe.apply(ot,f.call(ht))},call:function(ot){fe.apply(ot,f.call(arguments,1))}}}function ye(K,ot,ht,gt){var At,Ct,jt,$t,Rt,de,Jt,Gt=ot&&ot.ownerDocument,qt=ot?ot.nodeType:9;if(ht=ht||[],typeof K!="string"||!K||qt!==1&&qt!==9&&qt!==11)return ht;if(!gt&&(qi(ot),ot=ot||z,Z)){if(qt!==11&&(Rt=Pn.exec(K)))if(At=Rt[1]){if(qt===9)if(jt=ot.getElementById(At)){if(jt.id===At)return M.call(ht,jt),ht}else return ht;else if(Gt&&(jt=Gt.getElementById(At))&&ye.contains(ot,jt)&&jt.id===At)return M.call(ht,jt),ht}else{if(Rt[2])return M.apply(ht,ot.getElementsByTagName(K)),ht;if((At=Rt[3])&&ot.getElementsByClassName)return M.apply(ht,ot.getElementsByClassName(At)),ht}if(!$e[K+" "]&&(!st||!st.test(K))){if(Jt=K,Gt=ot,qt===1&&(uo.test(K)||Ho.test(K))){for(Gt=$i.test(K)&&Br(ot.parentNode)||ot,(Gt!=ot||!Y.scope)&&(($t=ot.getAttribute("id"))?$t=m.escapeSelector($t):ot.setAttribute("id",$t=wt)),de=_i(K),Ct=de.length;Ct--;)de[Ct]=($t?"#"+$t:":scope")+" "+$o(de[Ct]);Jt=de.join(",")}try{return M.apply(ht,Gt.querySelectorAll(Jt)),ht}catch{$e(K,!0)}finally{$t===wt&&ot.removeAttribute("id")}}}return Ls(K.replace(Se,"$1"),ot,ht,gt)}function Gn(){var K=[];function ot(ht,gt){return K.push(ht+" ")>g.cacheLength&&delete ot[K.shift()],ot[ht+" "]=gt}return ot}function on(K){return K[wt]=!0,K}function Uo(K){var ot=z.createElement("fieldset");try{return!!K(ot)}catch{return!1}finally{ot.parentNode&&ot.parentNode.removeChild(ot),ot=null}}function ua(K){return function(ot){return Bt(ot,"input")&&ot.type===K}}function Oi(K){return function(ot){return(Bt(ot,"input")||Bt(ot,"button"))&&ot.type===K}}function An(K){return function(ot){return"form"in ot?ot.parentNode&&ot.disabled===!1?"label"in ot?"label"in ot.parentNode?ot.parentNode.disabled===K:ot.disabled===K:ot.isDisabled===K||ot.isDisabled!==!K&&hr(ot)===K:ot.disabled===K:"label"in ot?ot.disabled===K:!1}}function Wi(K){return on(function(ot){return ot=+ot,on(function(ht,gt){for(var At,Ct=K([],ht.length,ot),jt=Ct.length;jt--;)ht[At=Ct[jt]]&&(ht[At]=!(gt[At]=ht[At]))})})}function Br(K){return K&&typeof K.getElementsByTagName<"u"&&K}function qi(K){var ot,ht=K?K.ownerDocument||K:ve;return ht==z||ht.nodeType!==9||!ht.documentElement||(z=ht,X=z.documentElement,Z=!m.isXMLDoc(z),bt=X.matches||X.webkitMatchesSelector||X.msMatchesSelector,X.msMatchesSelector&&ve!=z&&(ot=z.defaultView)&&ot.top!==ot&&ot.addEventListener("unload",da),Y.getById=Uo(function(gt){return X.appendChild(gt).id=m.expando,!z.getElementsByName||!z.getElementsByName(m.expando).length}),Y.disconnectedMatch=Uo(function(gt){return bt.call(gt,"*")}),Y.scope=Uo(function(){return z.querySelectorAll(":scope")}),Y.cssHas=Uo(function(){try{return z.querySelector(":has(*,:jqfake)"),!1}catch{return!0}}),Y.getById?(g.filter.ID=function(gt){var At=gt.replace(Xe,ci);return function(Ct){return Ct.getAttribute("id")===At}},g.find.ID=function(gt,At){if(typeof At.getElementById<"u"&&Z){var Ct=At.getElementById(gt);return Ct?[Ct]:[]}}):(g.filter.ID=function(gt){var At=gt.replace(Xe,ci);return function(Ct){var jt=typeof Ct.getAttributeNode<"u"&&Ct.getAttributeNode("id");return jt&&jt.value===At}},g.find.ID=function(gt,At){if(typeof At.getElementById<"u"&&Z){var Ct,jt,$t,Rt=At.getElementById(gt);if(Rt){if(Ct=Rt.getAttributeNode("id"),Ct&&Ct.value===gt)return[Rt];for($t=At.getElementsByName(gt),jt=0;Rt=$t[jt++];)if(Ct=Rt.getAttributeNode("id"),Ct&&Ct.value===gt)return[Rt]}return[]}}),g.find.TAG=function(gt,At){return typeof At.getElementsByTagName<"u"?At.getElementsByTagName(gt):At.querySelectorAll(gt)},g.find.CLASS=function(gt,At){if(typeof At.getElementsByClassName<"u"&&Z)return At.getElementsByClassName(gt)},st=[],Uo(function(gt){var At;X.appendChild(gt).innerHTML="<a id='"+wt+"' href='' disabled='disabled'></a><select id='"+wt+"-\r\\' disabled='disabled'><option selected=''></option></select>",gt.querySelectorAll("[selected]").length||st.push("\\["+Ut+"*(?:value|"+dn+")"),gt.querySelectorAll("[id~="+wt+"-]").length||st.push("~="),gt.querySelectorAll("a#"+wt+"+*").length||st.push(".#.+[+~]"),gt.querySelectorAll(":checked").length||st.push(":checked"),At=z.createElement("input"),At.setAttribute("type","hidden"),gt.appendChild(At).setAttribute("name","D"),X.appendChild(gt).disabled=!0,gt.querySelectorAll(":disabled").length!==2&&st.push(":enabled",":disabled"),At=z.createElement("input"),At.setAttribute("name",""),gt.appendChild(At),gt.querySelectorAll("[name='']").length||st.push("\\["+Ut+"*name"+Ut+"*="+Ut+`*(?:''|"")`)}),Y.cssHas||st.push(":has"),st=st.length&&new RegExp(st.join("|")),je=function(gt,At){if(gt===At)return S=!0,0;var Ct=!gt.compareDocumentPosition-!At.compareDocumentPosition;return Ct||(Ct=(gt.ownerDocument||gt)==(At.ownerDocument||At)?gt.compareDocumentPosition(At):1,Ct&1||!Y.sortDetached&&At.compareDocumentPosition(gt)===Ct?gt===z||gt.ownerDocument==ve&&ye.contains(ve,gt)?-1:At===z||At.ownerDocument==ve&&ye.contains(ve,At)?1:C?_.call(C,gt)-_.call(C,At):0:Ct&4?-1:1)}),z}ye.matches=function(K,ot){return ye(K,null,null,ot)},ye.matchesSelector=function(K,ot){if(qi(K),Z&&!$e[ot+" "]&&(!st||!st.test(ot)))try{var ht=bt.call(K,ot);if(ht||Y.disconnectedMatch||K.document&&K.document.nodeType!==11)return ht}catch{$e(ot,!0)}return ye(ot,z,null,[K]).length>0},ye.contains=function(K,ot){return(K.ownerDocument||K)!=z&&qi(K),m.contains(K,ot)},ye.attr=function(K,ot){(K.ownerDocument||K)!=z&&qi(K);var ht=g.attrHandle[ot.toLowerCase()],gt=ht&&H.call(g.attrHandle,ot.toLowerCase())?ht(K,ot,!Z):void 0;return gt!==void 0?gt:K.getAttribute(ot)},ye.error=function(K){throw new Error("Syntax error, unrecognized expression: "+K)},m.uniqueSort=function(K){var ot,ht=[],gt=0,At=0;if(S=!Y.sortStable,C=!Y.sortStable&&f.call(K,0),ae.call(K,je),S){for(;ot=K[At++];)ot===K[At]&&(gt=ht.push(At));for(;gt--;)me.call(K,ht[gt],1)}return C=null,K},m.fn.uniqueSort=function(){return this.pushStack(m.uniqueSort(f.apply(this)))},g=m.expr={cacheLength:50,createPseudo:on,match:Ge,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(K){return K[1]=K[1].replace(Xe,ci),K[3]=(K[3]||K[4]||K[5]||"").replace(Xe,ci),K[2]==="~="&&(K[3]=" "+K[3]+" "),K.slice(0,4)},CHILD:function(K){return K[1]=K[1].toLowerCase(),K[1].slice(0,3)==="nth"?(K[3]||ye.error(K[0]),K[4]=+(K[4]?K[5]+(K[6]||1):2*(K[3]==="even"||K[3]==="odd")),K[5]=+(K[7]+K[8]||K[3]==="odd")):K[3]&&ye.error(K[0]),K},PSEUDO:function(K){var ot,ht=!K[6]&&K[2];return Ge.CHILD.test(K[0])?null:(K[3]?K[2]=K[4]||K[5]||"":ht&&Ln.test(ht)&&(ot=_i(ht,!0))&&(ot=ht.indexOf(")",ht.length-ot)-ht.length)&&(K[0]=K[0].slice(0,ot),K[2]=ht.slice(0,ot)),K.slice(0,3))}},filter:{TAG:function(K){var ot=K.replace(Xe,ci).toLowerCase();return K==="*"?function(){return!0}:function(ht){return Bt(ht,ot)}},CLASS:function(K){var ot=ee[K+" "];return ot||(ot=new RegExp("(^|"+Ut+")"+K+"("+Ut+"|$)"))&&ee(K,function(ht){return ot.test(typeof ht.className=="string"&&ht.className||typeof ht.getAttribute<"u"&&ht.getAttribute("class")||"")})},ATTR:function(K,ot,ht){return function(gt){var At=ye.attr(gt,K);return At==null?ot==="!=":ot?(At+="",ot==="="?At===ht:ot==="!="?At!==ht:ot==="^="?ht&&At.indexOf(ht)===0:ot==="*="?ht&&At.indexOf(ht)>-1:ot==="$="?ht&&At.slice(-ht.length)===ht:ot==="~="?(" "+At.replace(we," ")+" ").indexOf(ht)>-1:ot==="|="?At===ht||At.slice(0,ht.length+1)===ht+"-":!1):!0}},CHILD:function(K,ot,ht,gt,At){var Ct=K.slice(0,3)!=="nth",jt=K.slice(-4)!=="last",$t=ot==="of-type";return gt===1&&At===0?function(Rt){return!!Rt.parentNode}:function(Rt,de,Jt){var Gt,qt,ct,pt,dt,W=Ct!==jt?"nextSibling":"previousSibling",tt=Rt.parentNode,kt=$t&&Rt.nodeName.toLowerCase(),_t=!Jt&&!$t,Ot=!1;if(tt){if(Ct){for(;W;){for(ct=Rt;ct=ct[W];)if($t?Bt(ct,kt):ct.nodeType===1)return!1;dt=W=K==="only"&&!dt&&"nextSibling"}return!0}if(dt=[jt?tt.firstChild:tt.lastChild],jt&&_t){for(qt=tt[wt]||(tt[wt]={}),Gt=qt[K]||[],pt=Gt[0]===ft&&Gt[1],Ot=pt&&Gt[2],ct=pt&&tt.childNodes[pt];ct=++pt&&ct&&ct[W]||(Ot=pt=0)||dt.pop();)if(ct.nodeType===1&&++Ot&&ct===Rt){qt[K]=[ft,pt,Ot];break}}else if(_t&&(qt=Rt[wt]||(Rt[wt]={}),Gt=qt[K]||[],pt=Gt[0]===ft&&Gt[1],Ot=pt),Ot===!1)for(;(ct=++pt&&ct&&ct[W]||(Ot=pt=0)||dt.pop())&&!(($t?Bt(ct,kt):ct.nodeType===1)&&++Ot&&(_t&&(qt=ct[wt]||(ct[wt]={}),qt[K]=[ft,Ot]),ct===Rt)););return Ot-=At,Ot===gt||Ot%gt===0&&Ot/gt>=0}}},PSEUDO:function(K,ot){var ht,gt=g.pseudos[K]||g.setFilters[K.toLowerCase()]||ye.error("unsupported pseudo: "+K);return gt[wt]?gt(ot):gt.length>1?(ht=[K,K,"",ot],g.setFilters.hasOwnProperty(K.toLowerCase())?on(function(At,Ct){for(var jt,$t=gt(At,ot),Rt=$t.length;Rt--;)jt=_.call(At,$t[Rt]),At[jt]=!(Ct[jt]=$t[Rt])}):function(At){return gt(At,0,ht)}):gt}},pseudos:{not:on(function(K){var ot=[],ht=[],gt=Ki(K.replace(Se,"$1"));return gt[wt]?on(function(At,Ct,jt,$t){for(var Rt,de=gt(At,null,$t,[]),Jt=At.length;Jt--;)(Rt=de[Jt])&&(At[Jt]=!(Ct[Jt]=Rt))}):function(At,Ct,jt){return ot[0]=At,gt(ot,null,jt,ht),ot[0]=null,!ht.pop()}}),has:on(function(K){return function(ot){return ye(K,ot).length>0}}),contains:on(function(K){return K=K.replace(Xe,ci),function(ot){return(ot.textContent||m.text(ot)).indexOf(K)>-1}}),lang:on(function(K){return ai.test(K||"")||ye.error("unsupported lang: "+K),K=K.replace(Xe,ci).toLowerCase(),function(ot){var ht;do if(ht=Z?ot.lang:ot.getAttribute("xml:lang")||ot.getAttribute("lang"))return ht=ht.toLowerCase(),ht===K||ht.indexOf(K+"-")===0;while((ot=ot.parentNode)&&ot.nodeType===1);return!1}}),target:function(K){var ot=h.location&&h.location.hash;return ot&&ot.slice(1)===K.id},root:function(K){return K===X},focus:function(K){return K===Bs()&&z.hasFocus()&&!!(K.type||K.href||~K.tabIndex)},enabled:An(!1),disabled:An(!0),checked:function(K){return Bt(K,"input")&&!!K.checked||Bt(K,"option")&&!!K.selected},selected:function(K){return K.parentNode&&K.parentNode.selectedIndex,K.selected===!0},empty:function(K){for(K=K.firstChild;K;K=K.nextSibling)if(K.nodeType<6)return!1;return!0},parent:function(K){return!g.pseudos.empty(K)},header:function(K){return un.test(K.nodeName)},input:function(K){return qn.test(K.nodeName)},button:function(K){return Bt(K,"input")&&K.type==="button"||Bt(K,"button")},text:function(K){var ot;return Bt(K,"input")&&K.type==="text"&&((ot=K.getAttribute("type"))==null||ot.toLowerCase()==="text")},first:Wi(function(){return[0]}),last:Wi(function(K,ot){return[ot-1]}),eq:Wi(function(K,ot,ht){return[ht<0?ht+ot:ht]}),even:Wi(function(K,ot){for(var ht=0;ht<ot;ht+=2)K.push(ht);return K}),odd:Wi(function(K,ot){for(var ht=1;ht<ot;ht+=2)K.push(ht);return K}),lt:Wi(function(K,ot,ht){var gt;for(ht<0?gt=ht+ot:ht>ot?gt=ot:gt=ht;--gt>=0;)K.push(gt);return K}),gt:Wi(function(K,ot,ht){for(var gt=ht<0?ht+ot:ht;++gt<ot;)K.push(gt);return K})}},g.pseudos.nth=g.pseudos.eq;for(d in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})g.pseudos[d]=ua(d);for(d in{submit:!0,reset:!0})g.pseudos[d]=Oi(d);function ho(){}ho.prototype=g.filters=g.pseudos,g.setFilters=new ho;function _i(K,ot){var ht,gt,At,Ct,jt,$t,Rt,de=le[K+" "];if(de)return ot?0:de.slice(0);for(jt=K,$t=[],Rt=g.preFilter;jt;){(!ht||(gt=Be.exec(jt)))&&(gt&&(jt=jt.slice(gt[0].length)||jt),$t.push(At=[])),ht=!1,(gt=Ho.exec(jt))&&(ht=gt.shift(),At.push({value:ht,type:gt[0].replace(Se," ")}),jt=jt.slice(ht.length));for(Ct in g.filter)(gt=Ge[Ct].exec(jt))&&(!Rt[Ct]||(gt=Rt[Ct](gt)))&&(ht=gt.shift(),At.push({value:ht,type:Ct,matches:gt}),jt=jt.slice(ht.length));if(!ht)break}return ot?jt.length:jt?ye.error(K):le(K,$t).slice(0)}function $o(K){for(var ot=0,ht=K.length,gt="";ot<ht;ot++)gt+=K[ot].value;return gt}function Wo(K,ot,ht){var gt=ot.dir,At=ot.next,Ct=At||gt,jt=ht&&Ct==="parentNode",$t=St++;return ot.first?function(Rt,de,Jt){for(;Rt=Rt[gt];)if(Rt.nodeType===1||jt)return K(Rt,de,Jt);return!1}:function(Rt,de,Jt){var Gt,qt,ct=[ft,$t];if(Jt){for(;Rt=Rt[gt];)if((Rt.nodeType===1||jt)&&K(Rt,de,Jt))return!0}else for(;Rt=Rt[gt];)if(Rt.nodeType===1||jt)if(qt=Rt[wt]||(Rt[wt]={}),At&&Bt(Rt,At))Rt=Rt[gt]||Rt;else{if((Gt=qt[Ct])&&Gt[0]===ft&&Gt[1]===$t)return ct[2]=Gt[2];if(qt[Ct]=ct,ct[2]=K(Rt,de,Jt))return!0}return!1}}function es(K){return K.length>1?function(ot,ht,gt){for(var At=K.length;At--;)if(!K[At](ot,ht,gt))return!1;return!0}:K[0]}function ns(K,ot,ht){for(var gt=0,At=ot.length;gt<At;gt++)ye(K,ot[gt],ht);return ht}function Lr(K,ot,ht,gt,At){for(var Ct,jt=[],$t=0,Rt=K.length,de=ot!=null;$t<Rt;$t++)(Ct=K[$t])&&(!ht||ht(Ct,gt,At))&&(jt.push(Ct),de&&ot.push($t));return jt}function wi(K,ot,ht,gt,At,Ct){return gt&&!gt[wt]&&(gt=wi(gt)),At&&!At[wt]&&(At=wi(At,Ct)),on(function(jt,$t,Rt,de){var Jt,Gt,qt,ct,pt=[],dt=[],W=$t.length,tt=jt||ns(ot||"*",Rt.nodeType?[Rt]:Rt,[]),kt=K&&(jt||!ot)?Lr(tt,pt,K,Rt,de):tt;if(ht?(ct=At||(jt?K:W||gt)?[]:$t,ht(kt,ct,Rt,de)):ct=kt,gt)for(Jt=Lr(ct,dt),gt(Jt,[],Rt,de),Gt=Jt.length;Gt--;)(qt=Jt[Gt])&&(ct[dt[Gt]]=!(kt[dt[Gt]]=qt));if(jt){if(At||K){if(At){for(Jt=[],Gt=ct.length;Gt--;)(qt=ct[Gt])&&Jt.push(kt[Gt]=qt);At(null,ct=[],Jt,de)}for(Gt=ct.length;Gt--;)(qt=ct[Gt])&&(Jt=At?_.call(jt,qt):pt[Gt])>-1&&(jt[Jt]=!($t[Jt]=qt))}}else ct=Lr(ct===$t?ct.splice(W,ct.length):ct),At?At(null,$t,ct,de):M.apply($t,ct)})}function Gi(K){for(var ot,ht,gt,At=K.length,Ct=g.relative[K[0].type],jt=Ct||g.relative[" "],$t=Ct?1:0,Rt=Wo(function(Gt){return Gt===ot},jt,!0),de=Wo(function(Gt){return _.call(ot,Gt)>-1},jt,!0),Jt=[function(Gt,qt,ct){var pt=!Ct&&(ct||qt!=w)||((ot=qt).nodeType?Rt(Gt,qt,ct):de(Gt,qt,ct));return ot=null,pt}];$t<At;$t++)if(ht=g.relative[K[$t].type])Jt=[Wo(es(Jt),ht)];else{if(ht=g.filter[K[$t].type].apply(null,K[$t].matches),ht[wt]){for(gt=++$t;gt<At&&!g.relative[K[gt].type];gt++);return wi($t>1&&es(Jt),$t>1&&$o(K.slice(0,$t-1).concat({value:K[$t-2].type===" "?"*":""})).replace(Se,"$1"),ht,$t<gt&&Gi(K.slice($t,gt)),gt<At&&Gi(K=K.slice(gt)),gt<At&&$o(K))}Jt.push(ht)}return es(Jt)}function Pr(K,ot){var ht=ot.length>0,gt=K.length>0,At=function(Ct,jt,$t,Rt,de){var Jt,Gt,qt,ct=0,pt="0",dt=Ct&&[],W=[],tt=w,kt=Ct||gt&&g.find.TAG("*",de),_t=ft+=tt==null?1:Math.random()||.1,Ot=kt.length;for(de&&(w=jt==z||jt||de);pt!==Ot&&(Jt=kt[pt])!=null;pt++){if(gt&&Jt){for(Gt=0,!jt&&Jt.ownerDocument!=z&&(qi(Jt),$t=!Z);qt=K[Gt++];)if(qt(Jt,jt||z,$t)){M.call(Rt,Jt);break}de&&(ft=_t)}ht&&((Jt=!qt&&Jt)&&ct--,Ct&&dt.push(Jt))}if(ct+=pt,ht&&pt!==ct){for(Gt=0;qt=ot[Gt++];)qt(dt,W,jt,$t);if(Ct){if(ct>0)for(;pt--;)dt[pt]||W[pt]||(W[pt]=te.call(Rt));W=Lr(W)}M.apply(Rt,W),de&&!Ct&&W.length>0&&ct+ot.length>1&&m.uniqueSort(Rt)}return de&&(ft=_t,w=tt),dt};return ht?on(At):At}function Ki(K,ot){var ht,gt=[],At=[],Ct=ne[K+" "];if(!Ct){for(ot||(ot=_i(K)),ht=ot.length;ht--;)Ct=Gi(ot[ht]),Ct[wt]?gt.push(Ct):At.push(Ct);Ct=ne(K,Pr(At,gt)),Ct.selector=K}return Ct}function Ls(K,ot,ht,gt){var At,Ct,jt,$t,Rt,de=typeof K=="function"&&K,Jt=!gt&&_i(K=de.selector||K);if(ht=ht||[],Jt.length===1){if(Ct=Jt[0]=Jt[0].slice(0),Ct.length>2&&(jt=Ct[0]).type==="ID"&&ot.nodeType===9&&Z&&g.relative[Ct[1].type]){if(ot=(g.find.ID(jt.matches[0].replace(Xe,ci),ot)||[])[0],ot)de&&(ot=ot.parentNode);else return ht;K=K.slice(Ct.shift().value.length)}for(At=Ge.needsContext.test(K)?0:Ct.length;At--&&(jt=Ct[At],!g.relative[$t=jt.type]);)if((Rt=g.find[$t])&&(gt=Rt(jt.matches[0].replace(Xe,ci),$i.test(Ct[0].type)&&Br(ot.parentNode)||ot))){if(Ct.splice(At,1),K=gt.length&&$o(Ct),!K)return M.apply(ht,gt),ht;break}}return(de||Ki(K,Jt))(gt,ot,!Z,ht,!ot||$i.test(K)&&Br(ot.parentNode)||ot),ht}Y.sortStable=wt.split("").sort(je).join("")===wt,qi(),Y.sortDetached=Uo(function(K){return K.compareDocumentPosition(z.createElement("fieldset"))&1}),m.find=ye,m.expr[":"]=m.expr.pseudos,m.unique=m.uniqueSort,ye.compile=Ki,ye.select=Ls,ye.setDocument=qi,ye.tokenize=_i,ye.escape=m.escapeSelector,ye.getText=m.text,ye.isXML=m.isXMLDoc,ye.selectors=m.expr,ye.support=m.support,ye.uniqueSort=m.uniqueSort})();var qe=function(d,g,w){for(var C=[],S=w!==void 0;(d=d[g])&&d.nodeType!==9;)if(d.nodeType===1){if(S&&m(d).is(w))break;C.push(d)}return C},Fn=function(d,g){for(var w=[];d;d=d.nextSibling)d.nodeType===1&&d!==g&&w.push(d);return w},Qn=m.expr.match.needsContext,Zn=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function Ke(d,g,w){return Q(g)?m.grep(d,function(C,S){return!!g.call(C,S,C)!==w}):g.nodeType?m.grep(d,function(C){return C===g!==w}):typeof g!="string"?m.grep(d,function(C){return _.call(g,C)>-1!==w}):m.filter(g,d,w)}m.filter=function(d,g,w){var C=g[0];return w&&(d=":not("+d+")"),g.length===1&&C.nodeType===1?m.find.matchesSelector(C,d)?[C]:[]:m.find.matches(d,m.grep(g,function(S){return S.nodeType===1}))},m.fn.extend({find:function(d){var g,w,C=this.length,S=this;if(typeof d!="string")return this.pushStack(m(d).filter(function(){for(g=0;g<C;g++)if(m.contains(S[g],this))return!0}));for(w=this.pushStack([]),g=0;g<C;g++)m.find(d,S[g],w);return C>1?m.uniqueSort(w):w},filter:function(d){return this.pushStack(Ke(this,d||[],!1))},not:function(d){return this.pushStack(Ke(this,d||[],!0))},is:function(d){return!!Ke(this,typeof d=="string"&&Qn.test(d)?m(d):d||[],!1).length}});var Jn,Ye=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,be=m.fn.init=function(d,g,w){var C,S;if(!d)return this;if(w=w||Jn,typeof d=="string")if(d[0]==="<"&&d[d.length-1]===">"&&d.length>=3?C=[null,d,null]:C=Ye.exec(d),C&&(C[1]||!g))if(C[1]){if(g=g instanceof m?g[0]:g,m.merge(this,m.parseHTML(C[1],g&&g.nodeType?g.ownerDocument||g:at,!0)),Zn.test(C[1])&&m.isPlainObject(g))for(C in g)Q(this[C])?this[C](g[C]):this.attr(C,g[C]);return this}else return S=at.getElementById(C[2]),S&&(this[0]=S,this.length=1),this;else return!g||g.jquery?(g||w).find(d):this.constructor(g).find(d);else{if(d.nodeType)return this[0]=d,this.length=1,this;if(Q(d))return w.ready!==void 0?w.ready(d):d(m)}return m.makeArray(d,this)};be.prototype=m.fn,Jn=m(at);var Xn=/^(?:parents|prev(?:Until|All))/,Sn={children:!0,contents:!0,next:!0,prev:!0};m.fn.extend({has:function(d){var g=m(d,this),w=g.length;return this.filter(function(){for(var C=0;C<w;C++)if(m.contains(this,g[C]))return!0})},closest:function(d,g){var w,C=0,S=this.length,M=[],z=typeof d!="string"&&m(d);if(!Qn.test(d)){for(;C<S;C++)for(w=this[C];w&&w!==g;w=w.parentNode)if(w.nodeType<11&&(z?z.index(w)>-1:w.nodeType===1&&m.find.matchesSelector(w,d))){M.push(w);break}}return this.pushStack(M.length>1?m.uniqueSort(M):M)},index:function(d){return d?typeof d=="string"?_.call(m(d),this[0]):_.call(this,d.jquery?d[0]:d):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(d,g){return this.pushStack(m.uniqueSort(m.merge(this.get(),m(d,g))))},addBack:function(d){return this.add(d==null?this.prevObject:this.prevObject.filter(d))}});function fi(d,g){for(;(d=d[g])&&d.nodeType!==1;);return d}m.each({parent:function(d){var g=d.parentNode;return g&&g.nodeType!==11?g:null},parents:function(d){return qe(d,"parentNode")},parentsUntil:function(d,g,w){return qe(d,"parentNode",w)},next:function(d){return fi(d,"nextSibling")},prev:function(d){return fi(d,"previousSibling")},nextAll:function(d){return qe(d,"nextSibling")},prevAll:function(d){return qe(d,"previousSibling")},nextUntil:function(d,g,w){return qe(d,"nextSibling",w)},prevUntil:function(d,g,w){return qe(d,"previousSibling",w)},siblings:function(d){return Fn((d.parentNode||{}).firstChild,d)},children:function(d){return Fn(d.firstChild)},contents:function(d){return d.contentDocument!=null&&V(d.contentDocument)?d.contentDocument:(Bt(d,"template")&&(d=d.content||d),m.merge([],d.childNodes))}},function(d,g){m.fn[d]=function(w,C){var S=m.map(this,g,w);return d.slice(-5)!=="Until"&&(C=w),C&&typeof C=="string"&&(S=m.filter(C,S)),this.length>1&&(Sn[d]||m.uniqueSort(S),Xn.test(d)&&S.reverse()),this.pushStack(S)}});var en=/[^\x20\t\r\n\f]+/g;function yo(d){var g={};return m.each(d.match(en)||[],function(w,C){g[C]=!0}),g}m.Callbacks=function(d){d=typeof d=="string"?yo(d):m.extend({},d);var g,w,C,S,M=[],z=[],X=-1,Z=function(){for(S=S||d.once,C=g=!0;z.length;X=-1)for(w=z.shift();++X<M.length;)M[X].apply(w[0],w[1])===!1&&d.stopOnFalse&&(X=M.length,w=!1);d.memory||(w=!1),g=!1,S&&(w?M=[]:M="")},st={add:function(){return M&&(w&&!g&&(X=M.length-1,z.push(w)),function bt(wt){m.each(wt,function(ft,St){Q(St)?(!d.unique||!st.has(St))&&M.push(St):St&&St.length&&xt(St)!=="string"&&bt(St)})}(arguments),w&&!g&&Z()),this},remove:function(){return m.each(arguments,function(bt,wt){for(var ft;(ft=m.inArray(wt,M,ft))>-1;)M.splice(ft,1),ft<=X&&X--}),this},has:function(bt){return bt?m.inArray(bt,M)>-1:M.length>0},empty:function(){return M&&(M=[]),this},disable:function(){return S=z=[],M=w="",this},disabled:function(){return!M},lock:function(){return S=z=[],!w&&!g&&(M=w=""),this},locked:function(){return!!S},fireWith:function(bt,wt){return S||(wt=wt||[],wt=[bt,wt.slice?wt.slice():wt],z.push(wt),g||Z()),this},fire:function(){return st.fireWith(this,arguments),this},fired:function(){return!!C}};return st};function ti(d){return d}function pe(d){throw d}function no(d,g,w,C){var S;try{d&&Q(S=d.promise)?S.call(d).done(g).fail(w):d&&Q(S=d.then)?S.call(d,g,w):g.apply(void 0,[d].slice(C))}catch(M){w.apply(void 0,[M])}}m.extend({Deferred:function(d){var g=[["notify","progress",m.Callbacks("memory"),m.Callbacks("memory"),2],["resolve","done",m.Callbacks("once memory"),m.Callbacks("once memory"),0,"resolved"],["reject","fail",m.Callbacks("once memory"),m.Callbacks("once memory"),1,"rejected"]],w="pending",C={state:function(){return w},always:function(){return S.done(arguments).fail(arguments),this},catch:function(M){return C.then(null,M)},pipe:function(){var M=arguments;return m.Deferred(function(z){m.each(g,function(X,Z){var st=Q(M[Z[4]])&&M[Z[4]];S[Z[1]](function(){var bt=st&&st.apply(this,arguments);bt&&Q(bt.promise)?bt.promise().progress(z.notify).done(z.resolve).fail(z.reject):z[Z[0]+"With"](this,st?[bt]:arguments)})}),M=null}).promise()},then:function(M,z,X){var Z=0;function st(bt,wt,ft,St){return function(){var ee=this,le=arguments,ne=function(){var je,dn;if(!(bt<Z)){if(je=ft.apply(ee,le),je===wt.promise())throw new TypeError("Thenable self-resolution");dn=je&&(typeof je=="object"||typeof je=="function")&&je.then,Q(dn)?St?dn.call(je,st(Z,wt,ti,St),st(Z,wt,pe,St)):(Z++,dn.call(je,st(Z,wt,ti,St),st(Z,wt,pe,St),st(Z,wt,ti,wt.notifyWith))):(ft!==ti&&(ee=void 0,le=[je]),(St||wt.resolveWith)(ee,le))}},$e=St?ne:function(){try{ne()}catch(je){m.Deferred.exceptionHook&&m.Deferred.exceptionHook(je,$e.error),bt+1>=Z&&(ft!==pe&&(ee=void 0,le=[je]),wt.rejectWith(ee,le))}};bt?$e():(m.Deferred.getErrorHook?$e.error=m.Deferred.getErrorHook():m.Deferred.getStackHook&&($e.error=m.Deferred.getStackHook()),h.setTimeout($e))}}return m.Deferred(function(bt){g[0][3].add(st(0,bt,Q(X)?X:ti,bt.notifyWith)),g[1][3].add(st(0,bt,Q(M)?M:ti)),g[2][3].add(st(0,bt,Q(z)?z:pe))}).promise()},promise:function(M){return M!=null?m.extend(M,C):C}},S={};return m.each(g,function(M,z){var X=z[2],Z=z[5];C[z[1]]=X.add,Z&&X.add(function(){w=Z},g[3-M][2].disable,g[3-M][3].disable,g[0][2].lock,g[0][3].lock),X.add(z[3].fire),S[z[0]]=function(){return S[z[0]+"With"](this===S?void 0:this,arguments),this},S[z[0]+"With"]=X.fireWith}),C.promise(S),d&&d.call(S,S),S},when:function(d){var g=arguments.length,w=g,C=Array(w),S=f.call(arguments),M=m.Deferred(),z=function(X){return function(Z){C[X]=this,S[X]=arguments.length>1?f.call(arguments):Z,--g||M.resolveWith(C,S)}};if(g<=1&&(no(d,M.done(z(w)).resolve,M.reject,!g),M.state()==="pending"||Q(S[w]&&S[w].then)))return M.then();for(;w--;)no(S[w],z(w),M.reject);return M.promise()}});var Eo=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;m.Deferred.exceptionHook=function(d,g){h.console&&h.console.warn&&d&&Eo.test(d.name)&&h.console.warn("jQuery.Deferred exception: "+d.message,d.stack,g)},m.readyException=function(d){h.setTimeout(function(){throw d})};var In=m.Deferred();m.fn.ready=function(d){return In.then(d).catch(function(g){m.readyException(g)}),this},m.extend({isReady:!1,readyWait:1,ready:function(d){(d===!0?--m.readyWait:m.isReady)||(m.isReady=!0,!(d!==!0&&--m.readyWait>0)&&In.resolveWith(at,[m]))}}),m.ready.then=In.then;function rn(){at.removeEventListener("DOMContentLoaded",rn),h.removeEventListener("load",rn),m.ready()}at.readyState==="complete"||at.readyState!=="loading"&&!at.documentElement.doScroll?h.setTimeout(m.ready):(at.addEventListener("DOMContentLoaded",rn),h.addEventListener("load",rn));var sn=function(d,g,w,C,S,M,z){var X=0,Z=d.length,st=w==null;if(xt(w)==="object"){S=!0;for(X in w)sn(d,g,X,w[X],!0,M,z)}else if(C!==void 0&&(S=!0,Q(C)||(z=!0),st&&(z?(g.call(d,C),g=null):(st=g,g=function(bt,wt,ft){return st.call(m(bt),ft)})),g))for(;X<Z;X++)g(d[X],w,z?C:C.call(d[X],X,g(d[X],w)));return S?d:st?g.call(d):Z?g(d[0],w):M},ei=/^-ms-/,Me=/-([a-z])/g;function Ue(d,g){return g.toUpperCase()}function Ne(d){return d.replace(ei,"ms-").replace(Me,Ue)}var yi=function(d){return d.nodeType===1||d.nodeType===9||!+d.nodeType};function Ei(){this.expando=m.expando+Ei.uid++}Ei.uid=1,Ei.prototype={cache:function(d){var g=d[this.expando];return g||(g={},yi(d)&&(d.nodeType?d[this.expando]=g:Object.defineProperty(d,this.expando,{value:g,configurable:!0}))),g},set:function(d,g,w){var C,S=this.cache(d);if(typeof g=="string")S[Ne(g)]=w;else for(C in g)S[Ne(C)]=g[C];return S},get:function(d,g){return g===void 0?this.cache(d):d[this.expando]&&d[this.expando][Ne(g)]},access:function(d,g,w){return g===void 0||g&&typeof g=="string"&&w===void 0?this.get(d,g):(this.set(d,g,w),w!==void 0?w:g)},remove:function(d,g){var w,C=d[this.expando];if(C!==void 0){if(g!==void 0)for(Array.isArray(g)?g=g.map(Ne):(g=Ne(g),g=g in C?[g]:g.match(en)||[]),w=g.length;w--;)delete C[g[w]];(g===void 0||m.isEmptyObject(C))&&(d.nodeType?d[this.expando]=void 0:delete d[this.expando])}},hasData:function(d){var g=d[this.expando];return g!==void 0&&!m.isEmptyObject(g)}};var Vt=new Ei,Ie=new Ei,rr=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,pi=/[A-Z]/g;function sa(d){return d==="true"?!0:d==="false"?!1:d==="null"?null:d===+d+""?+d:rr.test(d)?JSON.parse(d):d}function xo(d,g,w){var C;if(w===void 0&&d.nodeType===1)if(C="data-"+g.replace(pi,"-$&").toLowerCase(),w=d.getAttribute(C),typeof w=="string"){try{w=sa(w)}catch{}Ie.set(d,g,w)}else w=void 0;return w}m.extend({hasData:function(d){return Ie.hasData(d)||Vt.hasData(d)},data:function(d,g,w){return Ie.access(d,g,w)},removeData:function(d,g){Ie.remove(d,g)},_data:function(d,g,w){return Vt.access(d,g,w)},_removeData:function(d,g){Vt.remove(d,g)}}),m.fn.extend({data:function(d,g){var w,C,S,M=this[0],z=M&&M.attributes;if(d===void 0){if(this.length&&(S=Ie.get(M),M.nodeType===1&&!Vt.get(M,"hasDataAttrs"))){for(w=z.length;w--;)z[w]&&(C=z[w].name,C.indexOf("data-")===0&&(C=Ne(C.slice(5)),xo(M,C,S[C])));Vt.set(M,"hasDataAttrs",!0)}return S}return typeof d=="object"?this.each(function(){Ie.set(this,d)}):sn(this,function(X){var Z;if(M&&X===void 0)return Z=Ie.get(M,d),Z!==void 0||(Z=xo(M,d),Z!==void 0)?Z:void 0;this.each(function(){Ie.set(this,d,X)})},null,g,arguments.length>1,null,!0)},removeData:function(d){return this.each(function(){Ie.remove(this,d)})}}),m.extend({queue:function(d,g,w){var C;if(d)return g=(g||"fx")+"queue",C=Vt.get(d,g),w&&(!C||Array.isArray(w)?C=Vt.access(d,g,m.makeArray(w)):C.push(w)),C||[]},dequeue:function(d,g){g=g||"fx";var w=m.queue(d,g),C=w.length,S=w.shift(),M=m._queueHooks(d,g),z=function(){m.dequeue(d,g)};S==="inprogress"&&(S=w.shift(),C--),S&&(g==="fx"&&w.unshift("inprogress"),delete M.stop,S.call(d,z,M)),!C&&M&&M.empty.fire()},_queueHooks:function(d,g){var w=g+"queueHooks";return Vt.get(d,w)||Vt.access(d,w,{empty:m.Callbacks("once memory").add(function(){Vt.remove(d,[g+"queue",w])})})}}),m.fn.extend({queue:function(d,g){var w=2;return typeof d!="string"&&(g=d,d="fx",w--),arguments.length<w?m.queue(this[0],d):g===void 0?this:this.each(function(){var C=m.queue(this,d,g);m._queueHooks(this,d),d==="fx"&&C[0]!=="inprogress"&&m.dequeue(this,d)})},dequeue:function(d){return this.each(function(){m.dequeue(this,d)})},clearQueue:function(d){return this.queue(d||"fx",[])},promise:function(d,g){var w,C=1,S=m.Deferred(),M=this,z=this.length,X=function(){--C||S.resolveWith(M,[M])};for(typeof d!="string"&&(g=d,d=void 0),d=d||"fx";z--;)w=Vt.get(M[z],d+"queueHooks"),w&&w.empty&&(C++,w.empty.add(X));return X(),S.promise(g)}});var xs=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,gi=new RegExp("^(?:([+-])=|)("+xs+")([a-z%]*)$","i"),Mn=["Top","Right","Bottom","Left"],mi=at.documentElement,an=function(d){return m.contains(d.ownerDocument,d)},cn={composed:!0};mi.getRootNode&&(an=function(d){return m.contains(d.ownerDocument,d)||d.getRootNode(cn)===d.ownerDocument});var pn=function(d,g){return d=g||d,d.style.display==="none"||d.style.display===""&&an(d)&&m.css(d,"display")==="none"};function Kr(d,g,w,C){var S,M,z=20,X=C?function(){return C.cur()}:function(){return m.css(d,g,"")},Z=X(),st=w&&w[3]||(m.cssNumber[g]?"":"px"),bt=d.nodeType&&(m.cssNumber[g]||st!=="px"&&+Z)&&gi.exec(m.css(d,g));if(bt&&bt[3]!==st){for(Z=Z/2,st=st||bt[3],bt=+Z||1;z--;)m.style(d,g,bt+st),(1-M)*(1-(M=X()/Z||.5))<=0&&(z=0),bt=bt/M;bt=bt*2,m.style(d,g,bt+st),w=w||[]}return w&&(bt=+bt||+Z||0,S=w[1]?bt+(w[1]+1)*w[2]:+w[2],C&&(C.unit=st,C.start=bt,C.end=S)),S}var Nn={};function Yr(d){var g,w=d.ownerDocument,C=d.nodeName,S=Nn[C];return S||(g=w.body.appendChild(w.createElement(C)),S=m.css(g,"display"),g.parentNode.removeChild(g),S==="none"&&(S="block"),Nn[C]=S,S)}function Vn(d,g){for(var w,C,S=[],M=0,z=d.length;M<z;M++)C=d[M],C.style&&(w=C.style.display,g?(w==="none"&&(S[M]=Vt.get(C,"display")||null,S[M]||(C.style.display="")),C.style.display===""&&pn(C)&&(S[M]=Yr(C))):w!=="none"&&(S[M]="none",Vt.set(C,"display",w)));for(M=0;M<z;M++)S[M]!=null&&(d[M].style.display=S[M]);return d}m.fn.extend({show:function(){return Vn(this,!0)},hide:function(){return Vn(this)},toggle:function(d){return typeof d=="boolean"?d?this.show():this.hide():this.each(function(){pn(this)?m(this).show():m(this).hide()})}});var xi=/^(?:checkbox|radio)$/i,Qr=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,Zr=/^$|^module$|\/(?:java|ecma)script/i;(function(){var d=at.createDocumentFragment(),g=d.appendChild(at.createElement("div")),w=at.createElement("input");w.setAttribute("type","radio"),w.setAttribute("checked","checked"),w.setAttribute("name","t"),g.appendChild(w),Y.checkClone=g.cloneNode(!0).cloneNode(!0).lastChild.checked,g.innerHTML="<textarea>x</textarea>",Y.noCloneChecked=!!g.cloneNode(!0).lastChild.defaultValue,g.innerHTML="<option></option>",Y.option=!!g.lastChild})();var Hn={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};Hn.tbody=Hn.tfoot=Hn.colgroup=Hn.caption=Hn.thead,Hn.th=Hn.td,Y.option||(Hn.optgroup=Hn.option=[1,"<select multiple='multiple'>","</select>"]);function gn(d,g){var w;return typeof d.getElementsByTagName<"u"?w=d.getElementsByTagName(g||"*"):typeof d.querySelectorAll<"u"?w=d.querySelectorAll(g||"*"):w=[],g===void 0||g&&Bt(d,g)?m.merge([d],w):w}function mn(d,g){for(var w=0,C=d.length;w<C;w++)Vt.set(d[w],"globalEval",!g||Vt.get(g[w],"globalEval"))}var Ts=/<|&#?\w+;/;function To(d,g,w,C,S){for(var M,z,X,Z,st,bt,wt=g.createDocumentFragment(),ft=[],St=0,ee=d.length;St<ee;St++)if(M=d[St],M||M===0)if(xt(M)==="object")m.merge(ft,M.nodeType?[M]:M);else if(!Ts.test(M))ft.push(g.createTextNode(M));else{for(z=z||wt.appendChild(g.createElement("div")),X=(Qr.exec(M)||["",""])[1].toLowerCase(),Z=Hn[X]||Hn._default,z.innerHTML=Z[1]+m.htmlPrefilter(M)+Z[2],bt=Z[0];bt--;)z=z.lastChild;m.merge(ft,z.childNodes),z=wt.firstChild,z.textContent=""}for(wt.textContent="",St=0;M=ft[St++];){if(C&&m.inArray(M,C)>-1){S&&S.push(M);continue}if(st=an(M),z=gn(wt.appendChild(M),"script"),st&&mn(z),w)for(bt=0;M=z[bt++];)Zr.test(M.type||"")&&w.push(M)}return wt}var sr=/^([^.]*)(?:\.(.+)|)/;function Do(){return!0}function ni(){return!1}function ki(d,g,w,C,S,M){var z,X;if(typeof g=="object"){typeof w!="string"&&(C=C||w,w=void 0);for(X in g)ki(d,X,w,C,g[X],M);return d}if(C==null&&S==null?(S=w,C=w=void 0):S==null&&(typeof w=="string"?(S=C,C=void 0):(S=C,C=w,w=void 0)),S===!1)S=ni;else if(!S)return d;return M===1&&(z=S,S=function(Z){return m().off(Z),z.apply(this,arguments)},S.guid=z.guid||(z.guid=m.guid++)),d.each(function(){m.event.add(this,g,S,C,w)})}m.event={global:{},add:function(d,g,w,C,S){var M,z,X,Z,st,bt,wt,ft,St,ee,le,ne=Vt.get(d);if(yi(d))for(w.handler&&(M=w,w=M.handler,S=M.selector),S&&m.find.matchesSelector(mi,S),w.guid||(w.guid=m.guid++),(Z=ne.events)||(Z=ne.events=Object.create(null)),(z=ne.handle)||(z=ne.handle=function($e){return typeof m<"u"&&m.event.triggered!==$e.type?m.event.dispatch.apply(d,arguments):void 0}),g=(g||"").match(en)||[""],st=g.length;st--;)X=sr.exec(g[st])||[],St=le=X[1],ee=(X[2]||"").split(".").sort(),St&&(wt=m.event.special[St]||{},St=(S?wt.delegateType:wt.bindType)||St,wt=m.event.special[St]||{},bt=m.extend({type:St,origType:le,data:C,handler:w,guid:w.guid,selector:S,needsContext:S&&m.expr.match.needsContext.test(S),namespace:ee.join(".")},M),(ft=Z[St])||(ft=Z[St]=[],ft.delegateCount=0,(!wt.setup||wt.setup.call(d,C,ee,z)===!1)&&d.addEventListener&&d.addEventListener(St,z)),wt.add&&(wt.add.call(d,bt),bt.handler.guid||(bt.handler.guid=w.guid)),S?ft.splice(ft.delegateCount++,0,bt):ft.push(bt),m.event.global[St]=!0)},remove:function(d,g,w,C,S){var M,z,X,Z,st,bt,wt,ft,St,ee,le,ne=Vt.hasData(d)&&Vt.get(d);if(!(!ne||!(Z=ne.events))){for(g=(g||"").match(en)||[""],st=g.length;st--;){if(X=sr.exec(g[st])||[],St=le=X[1],ee=(X[2]||"").split(".").sort(),!St){for(St in Z)m.event.remove(d,St+g[st],w,C,!0);continue}for(wt=m.event.special[St]||{},St=(C?wt.delegateType:wt.bindType)||St,ft=Z[St]||[],X=X[2]&&new RegExp("(^|\\.)"+ee.join("\\.(?:.*\\.|)")+"(\\.|$)"),z=M=ft.length;M--;)bt=ft[M],(S||le===bt.origType)&&(!w||w.guid===bt.guid)&&(!X||X.test(bt.namespace))&&(!C||C===bt.selector||C==="**"&&bt.selector)&&(ft.splice(M,1),bt.selector&&ft.delegateCount--,wt.remove&&wt.remove.call(d,bt));z&&!ft.length&&((!wt.teardown||wt.teardown.call(d,ee,ne.handle)===!1)&&m.removeEvent(d,St,ne.handle),delete Z[St])}m.isEmptyObject(Z)&&Vt.remove(d,"handle events")}},dispatch:function(d){var g,w,C,S,M,z,X=new Array(arguments.length),Z=m.event.fix(d),st=(Vt.get(this,"events")||Object.create(null))[Z.type]||[],bt=m.event.special[Z.type]||{};for(X[0]=Z,g=1;g<arguments.length;g++)X[g]=arguments[g];if(Z.delegateTarget=this,!(bt.preDispatch&&bt.preDispatch.call(this,Z)===!1)){for(z=m.event.handlers.call(this,Z,st),g=0;(S=z[g++])&&!Z.isPropagationStopped();)for(Z.currentTarget=S.elem,w=0;(M=S.handlers[w++])&&!Z.isImmediatePropagationStopped();)(!Z.rnamespace||M.namespace===!1||Z.rnamespace.test(M.namespace))&&(Z.handleObj=M,Z.data=M.data,C=((m.event.special[M.origType]||{}).handle||M.handler).apply(S.elem,X),C!==void 0&&(Z.result=C)===!1&&(Z.preventDefault(),Z.stopPropagation()));return bt.postDispatch&&bt.postDispatch.call(this,Z),Z.result}},handlers:function(d,g){var w,C,S,M,z,X=[],Z=g.delegateCount,st=d.target;if(Z&&st.nodeType&&!(d.type==="click"&&d.button>=1)){for(;st!==this;st=st.parentNode||this)if(st.nodeType===1&&!(d.type==="click"&&st.disabled===!0)){for(M=[],z={},w=0;w<Z;w++)C=g[w],S=C.selector+" ",z[S]===void 0&&(z[S]=C.needsContext?m(S,this).index(st)>-1:m.find(S,this,null,[st]).length),z[S]&&M.push(C);M.length&&X.push({elem:st,handlers:M})}}return st=this,Z<g.length&&X.push({elem:st,handlers:g.slice(Z)}),X},addProp:function(d,g){Object.defineProperty(m.Event.prototype,d,{enumerable:!0,configurable:!0,get:Q(g)?function(){if(this.originalEvent)return g(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[d]},set:function(w){Object.defineProperty(this,d,{enumerable:!0,configurable:!0,writable:!0,value:w})}})},fix:function(d){return d[m.expando]?d:new m.Event(d)},special:{load:{noBubble:!0},click:{setup:function(d){var g=this||d;return xi.test(g.type)&&g.click&&Bt(g,"input")&&So(g,"click",!0),!1},trigger:function(d){var g=this||d;return xi.test(g.type)&&g.click&&Bt(g,"input")&&So(g,"click"),!0},_default:function(d){var g=d.target;return xi.test(g.type)&&g.click&&Bt(g,"input")&&Vt.get(g,"click")||Bt(g,"a")}},beforeunload:{postDispatch:function(d){d.result!==void 0&&d.originalEvent&&(d.originalEvent.returnValue=d.result)}}}};function So(d,g,w){if(!w){Vt.get(d,g)===void 0&&m.event.add(d,g,Do);return}Vt.set(d,g,!1),m.event.add(d,g,{namespace:!1,handler:function(C){var S,M=Vt.get(this,g);if(C.isTrigger&1&&this[g]){if(M)(m.event.special[g]||{}).delegateType&&C.stopPropagation();else if(M=f.call(arguments),Vt.set(this,g,M),this[g](),S=Vt.get(this,g),Vt.set(this,g,!1),M!==S)return C.stopImmediatePropagation(),C.preventDefault(),S}else M&&(Vt.set(this,g,m.event.trigger(M[0],M.slice(1),this)),C.stopPropagation(),C.isImmediatePropagationStopped=Do)}})}m.removeEvent=function(d,g,w){d.removeEventListener&&d.removeEventListener(g,w)},m.Event=function(d,g){if(!(this instanceof m.Event))return new m.Event(d,g);d&&d.type?(this.originalEvent=d,this.type=d.type,this.isDefaultPrevented=d.defaultPrevented||d.defaultPrevented===void 0&&d.returnValue===!1?Do:ni,this.target=d.target&&d.target.nodeType===3?d.target.parentNode:d.target,this.currentTarget=d.currentTarget,this.relatedTarget=d.relatedTarget):this.type=d,g&&m.extend(this,g),this.timeStamp=d&&d.timeStamp||Date.now(),this[m.expando]=!0},m.Event.prototype={constructor:m.Event,isDefaultPrevented:ni,isPropagationStopped:ni,isImmediatePropagationStopped:ni,isSimulated:!1,preventDefault:function(){var d=this.originalEvent;this.isDefaultPrevented=Do,d&&!this.isSimulated&&d.preventDefault()},stopPropagation:function(){var d=this.originalEvent;this.isPropagationStopped=Do,d&&!this.isSimulated&&d.stopPropagation()},stopImmediatePropagation:function(){var d=this.originalEvent;this.isImmediatePropagationStopped=Do,d&&!this.isSimulated&&d.stopImmediatePropagation(),this.stopPropagation()}},m.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},m.event.addProp),m.each({focus:"focusin",blur:"focusout"},function(d,g){function w(C){if(at.documentMode){var S=Vt.get(this,"handle"),M=m.event.fix(C);M.type=C.type==="focusin"?"focus":"blur",M.isSimulated=!0,S(C),M.target===M.currentTarget&&S(M)}else m.event.simulate(g,C.target,m.event.fix(C))}m.event.special[d]={setup:function(){var C;if(So(this,d,!0),at.documentMode)C=Vt.get(this,g),C||this.addEventListener(g,w),Vt.set(this,g,(C||0)+1);else return!1},trigger:function(){return So(this,d),!0},teardown:function(){var C;if(at.documentMode)C=Vt.get(this,g)-1,C?Vt.set(this,g,C):(this.removeEventListener(g,w),Vt.remove(this,g));else return!1},_default:function(C){return Vt.get(C.target,d)},delegateType:g},m.event.special[g]={setup:function(){var C=this.ownerDocument||this.document||this,S=at.documentMode?this:C,M=Vt.get(S,g);M||(at.documentMode?this.addEventListener(g,w):C.addEventListener(d,w,!0)),Vt.set(S,g,(M||0)+1)},teardown:function(){var C=this.ownerDocument||this.document||this,S=at.documentMode?this:C,M=Vt.get(S,g)-1;M?Vt.set(S,g,M):(at.documentMode?this.removeEventListener(g,w):C.removeEventListener(d,w,!0),Vt.remove(S,g))}}}),m.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(d,g){m.event.special[d]={delegateType:g,bindType:g,handle:function(w){var C,S=this,M=w.relatedTarget,z=w.handleObj;return(!M||M!==S&&!m.contains(S,M))&&(w.type=z.origType,C=z.handler.apply(this,arguments),w.type=g),C}}}),m.fn.extend({on:function(d,g,w,C){return ki(this,d,g,w,C)},one:function(d,g,w,C){return ki(this,d,g,w,C,1)},off:function(d,g,w){var C,S;if(d&&d.preventDefault&&d.handleObj)return C=d.handleObj,m(d.delegateTarget).off(C.namespace?C.origType+"."+C.namespace:C.origType,C.selector,C.handler),this;if(typeof d=="object"){for(S in d)this.off(S,g,d[S]);return this}return(g===!1||typeof g=="function")&&(w=g,g=void 0),w===!1&&(w=ni),this.each(function(){m.event.remove(this,d,w,g)})}});var Ds=/<script|<style|<link/i,Io=/checked\s*(?:[^=]|=\s*.checked.)/i,vr=/^\s*<!\[CDATA\[|\]\]>\s*$/g;function Ss(d,g){return Bt(d,"table")&&Bt(g.nodeType!==11?g:g.firstChild,"tr")&&m(d).children("tbody")[0]||d}function aa(d){return d.type=(d.getAttribute("type")!==null)+"/"+d.type,d}function Mo(d){return(d.type||"").slice(0,5)==="true/"?d.type=d.type.slice(5):d.removeAttribute("type"),d}function Jr(d,g){var w,C,S,M,z,X,Z;if(g.nodeType===1){if(Vt.hasData(d)&&(M=Vt.get(d),Z=M.events,Z)){Vt.remove(g,"handle events");for(S in Z)for(w=0,C=Z[S].length;w<C;w++)m.event.add(g,S,Z[S][w])}Ie.hasData(d)&&(z=Ie.access(d),X=m.extend({},z),Ie.set(g,X))}}function ii(d,g){var w=g.nodeName.toLowerCase();w==="input"&&xi.test(d.type)?g.checked=d.checked:(w==="input"||w==="textarea")&&(g.defaultValue=d.defaultValue)}function Qe(d,g,w,C){g=L(g);var S,M,z,X,Z,st,bt=0,wt=d.length,ft=wt-1,St=g[0],ee=Q(St);if(ee||wt>1&&typeof St=="string"&&!Y.checkClone&&Io.test(St))return d.each(function(le){var ne=d.eq(le);ee&&(g[0]=St.call(this,le,ne.html())),Qe(ne,g,w,C)});if(wt&&(S=To(g,d[0].ownerDocument,!1,d,C),M=S.firstChild,S.childNodes.length===1&&(S=M),M||C)){for(z=m.map(gn(S,"script"),aa),X=z.length;bt<wt;bt++)Z=S,bt!==ft&&(Z=m.clone(Z,!0,!0),X&&m.merge(z,gn(Z,"script"))),w.call(d[bt],Z,bt);if(X)for(st=z[z.length-1].ownerDocument,m.map(z,Mo),bt=0;bt<X;bt++)Z=z[bt],Zr.test(Z.type||"")&&!Vt.access(Z,"globalEval")&&m.contains(st,Z)&&(Z.src&&(Z.type||"").toLowerCase()!=="module"?m._evalUrl&&!Z.noModule&&m._evalUrl(Z.src,{nonce:Z.nonce||Z.getAttribute("nonce")},st):yt(Z.textContent.replace(vr,""),Z,st))}return d}function Un(d,g,w){for(var C,S=g?m.filter(g,d):d,M=0;(C=S[M])!=null;M++)!w&&C.nodeType===1&&m.cleanData(gn(C)),C.parentNode&&(w&&an(C)&&mn(gn(C,"script")),C.parentNode.removeChild(C));return d}m.extend({htmlPrefilter:function(d){return d},clone:function(d,g,w){var C,S,M,z,X=d.cloneNode(!0),Z=an(d);if(!Y.noCloneChecked&&(d.nodeType===1||d.nodeType===11)&&!m.isXMLDoc(d))for(z=gn(X),M=gn(d),C=0,S=M.length;C<S;C++)ii(M[C],z[C]);if(g)if(w)for(M=M||gn(d),z=z||gn(X),C=0,S=M.length;C<S;C++)Jr(M[C],z[C]);else Jr(d,X);return z=gn(X,"script"),z.length>0&&mn(z,!Z&&gn(d,"script")),X},cleanData:function(d){for(var g,w,C,S=m.event.special,M=0;(w=d[M])!==void 0;M++)if(yi(w)){if(g=w[Vt.expando]){if(g.events)for(C in g.events)S[C]?m.event.remove(w,C):m.removeEvent(w,C,g.handle);w[Vt.expando]=void 0}w[Ie.expando]&&(w[Ie.expando]=void 0)}}}),m.fn.extend({detach:function(d){return Un(this,d,!0)},remove:function(d){return Un(this,d)},text:function(d){return sn(this,function(g){return g===void 0?m.text(this):this.empty().each(function(){(this.nodeType===1||this.nodeType===11||this.nodeType===9)&&(this.textContent=g)})},null,d,arguments.length)},append:function(){return Qe(this,arguments,function(d){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var g=Ss(this,d);g.appendChild(d)}})},prepend:function(){return Qe(this,arguments,function(d){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var g=Ss(this,d);g.insertBefore(d,g.firstChild)}})},before:function(){return Qe(this,arguments,function(d){this.parentNode&&this.parentNode.insertBefore(d,this)})},after:function(){return Qe(this,arguments,function(d){this.parentNode&&this.parentNode.insertBefore(d,this.nextSibling)})},empty:function(){for(var d,g=0;(d=this[g])!=null;g++)d.nodeType===1&&(m.cleanData(gn(d,!1)),d.textContent="");return this},clone:function(d,g){return d=d??!1,g=g??d,this.map(function(){return m.clone(this,d,g)})},html:function(d){return sn(this,function(g){var w=this[0]||{},C=0,S=this.length;if(g===void 0&&w.nodeType===1)return w.innerHTML;if(typeof g=="string"&&!Ds.test(g)&&!Hn[(Qr.exec(g)||["",""])[1].toLowerCase()]){g=m.htmlPrefilter(g);try{for(;C<S;C++)w=this[C]||{},w.nodeType===1&&(m.cleanData(gn(w,!1)),w.innerHTML=g);w=0}catch{}}w&&this.empty().append(g)},null,d,arguments.length)},replaceWith:function(){var d=[];return Qe(this,arguments,function(g){var w=this.parentNode;m.inArray(this,d)<0&&(m.cleanData(gn(this)),w&&w.replaceChild(g,this))},d)}}),m.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(d,g){m.fn[d]=function(w){for(var C,S=[],M=m(w),z=M.length-1,X=0;X<=z;X++)C=X===z?this:this.clone(!0),m(M[X])[g](C),B.apply(S,C.get());return this.pushStack(S)}});var Cr=new RegExp("^("+xs+")(?!px)[a-z%]+$","i"),Ti=/^--/,kn=function(d){var g=d.ownerDocument.defaultView;return(!g||!g.opener)&&(g=h),g.getComputedStyle(d)},Xr=function(d,g,w){var C,S,M={};for(S in g)M[S]=d.style[S],d.style[S]=g[S];C=w.call(d);for(S in g)d.style[S]=M[S];return C},Is=new RegExp(Mn.join("|"),"i");(function(){function d(){if(st){Z.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",st.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",mi.appendChild(Z).appendChild(st);var bt=h.getComputedStyle(st);w=bt.top!=="1%",X=g(bt.marginLeft)===12,st.style.right="60%",M=g(bt.right)===36,C=g(bt.width)===36,st.style.position="absolute",S=g(st.offsetWidth/3)===12,mi.removeChild(Z),st=null}}function g(bt){return Math.round(parseFloat(bt))}var w,C,S,M,z,X,Z=at.createElement("div"),st=at.createElement("div");st.style&&(st.style.backgroundClip="content-box",st.cloneNode(!0).style.backgroundClip="",Y.clearCloneStyle=st.style.backgroundClip==="content-box",m.extend(Y,{boxSizingReliable:function(){return d(),C},pixelBoxStyles:function(){return d(),M},pixelPosition:function(){return d(),w},reliableMarginLeft:function(){return d(),X},scrollboxSize:function(){return d(),S},reliableTrDimensions:function(){var bt,wt,ft,St;return z==null&&(bt=at.createElement("table"),wt=at.createElement("tr"),ft=at.createElement("div"),bt.style.cssText="position:absolute;left:-11111px;border-collapse:separate",wt.style.cssText="box-sizing:content-box;border:1px solid",wt.style.height="1px",ft.style.height="9px",ft.style.display="block",mi.appendChild(bt).appendChild(wt).appendChild(ft),St=h.getComputedStyle(wt),z=parseInt(St.height,10)+parseInt(St.borderTopWidth,10)+parseInt(St.borderBottomWidth,10)===wt.offsetHeight,mi.removeChild(bt)),z}}))})();function bn(d,g,w){var C,S,M,z,X=Ti.test(g),Z=d.style;return w=w||kn(d),w&&(z=w.getPropertyValue(g)||w[g],X&&z&&(z=z.replace(Se,"$1")||void 0),z===""&&!an(d)&&(z=m.style(d,g)),!Y.pixelBoxStyles()&&Cr.test(z)&&Is.test(g)&&(C=Z.width,S=Z.minWidth,M=Z.maxWidth,Z.minWidth=Z.maxWidth=Z.width=z,z=w.width,Z.width=C,Z.minWidth=S,Z.maxWidth=M)),z!==void 0?z+"":z}function bi(d,g){return{get:function(){if(d()){delete this.get;return}return(this.get=g).apply(this,arguments)}}}var No=["Webkit","Moz","ms"],yr=at.createElement("div").style,Oo={};function ca(d){for(var g=d[0].toUpperCase()+d.slice(1),w=No.length;w--;)if(d=No[w]+g,d in yr)return d}function Di(d){var g=m.cssProps[d]||Oo[d];return g||(d in yr?d:Oo[d]=ca(d)||d)}var ar=/^(none|table(?!-c[ea]).+)/,io={position:"absolute",visibility:"hidden",display:"block"},Bo={letterSpacing:"0",fontWeight:"400"};function Er(d,g,w){var C=gi.exec(g);return C?Math.max(0,C[2]-(w||0))+(C[3]||"px"):g}function xr(d,g,w,C,S,M){var z=g==="width"?1:0,X=0,Z=0,st=0;if(w===(C?"border":"content"))return 0;for(;z<4;z+=2)w==="margin"&&(st+=m.css(d,w+Mn[z],!0,S)),C?(w==="content"&&(Z-=m.css(d,"padding"+Mn[z],!0,S)),w!=="margin"&&(Z-=m.css(d,"border"+Mn[z]+"Width",!0,S))):(Z+=m.css(d,"padding"+Mn[z],!0,S),w!=="padding"?Z+=m.css(d,"border"+Mn[z]+"Width",!0,S):X+=m.css(d,"border"+Mn[z]+"Width",!0,S));return!C&&M>=0&&(Z+=Math.max(0,Math.ceil(d["offset"+g[0].toUpperCase()+g.slice(1)]-M-Z-X-.5))||0),Z+st}function Pi(d,g,w){var C=kn(d),S=!Y.boxSizingReliable()||w,M=S&&m.css(d,"boxSizing",!1,C)==="border-box",z=M,X=bn(d,g,C),Z="offset"+g[0].toUpperCase()+g.slice(1);if(Cr.test(X)){if(!w)return X;X="auto"}return(!Y.boxSizingReliable()&&M||!Y.reliableTrDimensions()&&Bt(d,"tr")||X==="auto"||!parseFloat(X)&&m.css(d,"display",!1,C)==="inline")&&d.getClientRects().length&&(M=m.css(d,"boxSizing",!1,C)==="border-box",z=Z in d,z&&(X=d[Z])),X=parseFloat(X)||0,X+xr(d,g,w||(M?"border":"content"),z,C,X)+"px"}m.extend({cssHooks:{opacity:{get:function(d,g){if(g){var w=bn(d,"opacity");return w===""?"1":w}}}},cssNumber:{animationIterationCount:!0,aspectRatio:!0,borderImageSlice:!0,columnCount:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,scale:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeMiterlimit:!0,strokeOpacity:!0},cssProps:{},style:function(d,g,w,C){if(!(!d||d.nodeType===3||d.nodeType===8||!d.style)){var S,M,z,X=Ne(g),Z=Ti.test(g),st=d.style;if(Z||(g=Di(X)),z=m.cssHooks[g]||m.cssHooks[X],w!==void 0){if(M=typeof w,M==="string"&&(S=gi.exec(w))&&S[1]&&(w=Kr(d,g,S),M="number"),w==null||w!==w)return;M==="number"&&!Z&&(w+=S&&S[3]||(m.cssNumber[X]?"":"px")),!Y.clearCloneStyle&&w===""&&g.indexOf("background")===0&&(st[g]="inherit"),(!z||!("set"in z)||(w=z.set(d,w,C))!==void 0)&&(Z?st.setProperty(g,w):st[g]=w)}else return z&&"get"in z&&(S=z.get(d,!1,C))!==void 0?S:st[g]}},css:function(d,g,w,C){var S,M,z,X=Ne(g),Z=Ti.test(g);return Z||(g=Di(X)),z=m.cssHooks[g]||m.cssHooks[X],z&&"get"in z&&(S=z.get(d,!0,w)),S===void 0&&(S=bn(d,g,C)),S==="normal"&&g in Bo&&(S=Bo[g]),w===""||w?(M=parseFloat(S),w===!0||isFinite(M)?M||0:S):S}}),m.each(["height","width"],function(d,g){m.cssHooks[g]={get:function(w,C,S){if(C)return ar.test(m.css(w,"display"))&&(!w.getClientRects().length||!w.getBoundingClientRect().width)?Xr(w,io,function(){return Pi(w,g,S)}):Pi(w,g,S)},set:function(w,C,S){var M,z=kn(w),X=!Y.scrollboxSize()&&z.position==="absolute",Z=X||S,st=Z&&m.css(w,"boxSizing",!1,z)==="border-box",bt=S?xr(w,g,S,st,z):0;return st&&X&&(bt-=Math.ceil(w["offset"+g[0].toUpperCase()+g.slice(1)]-parseFloat(z[g])-xr(w,g,"border",!1,z)-.5)),bt&&(M=gi.exec(C))&&(M[3]||"px")!=="px"&&(w.style[g]=C,C=m.css(w,g)),Er(w,C,bt)}}}),m.cssHooks.marginLeft=bi(Y.reliableMarginLeft,function(d,g){if(g)return(parseFloat(bn(d,"marginLeft"))||d.getBoundingClientRect().left-Xr(d,{marginLeft:0},function(){return d.getBoundingClientRect().left}))+"px"}),m.each({margin:"",padding:"",border:"Width"},function(d,g){m.cssHooks[d+g]={expand:function(w){for(var C=0,S={},M=typeof w=="string"?w.split(" "):[w];C<4;C++)S[d+Mn[C]+g]=M[C]||M[C-2]||M[0];return S}},d!=="margin"&&(m.cssHooks[d+g].set=Er)}),m.fn.extend({css:function(d,g){return sn(this,function(w,C,S){var M,z,X={},Z=0;if(Array.isArray(C)){for(M=kn(w),z=C.length;Z<z;Z++)X[C[Z]]=m.css(w,C[Z],!1,M);return X}return S!==void 0?m.style(w,C,S):m.css(w,C)},d,g,arguments.length>1)}});function Ze(d,g,w,C,S){return new Ze.prototype.init(d,g,w,C,S)}m.Tween=Ze,Ze.prototype={constructor:Ze,init:function(d,g,w,C,S,M){this.elem=d,this.prop=w,this.easing=S||m.easing._default,this.options=g,this.start=this.now=this.cur(),this.end=C,this.unit=M||(m.cssNumber[w]?"":"px")},cur:function(){var d=Ze.propHooks[this.prop];return d&&d.get?d.get(this):Ze.propHooks._default.get(this)},run:function(d){var g,w=Ze.propHooks[this.prop];return this.options.duration?this.pos=g=m.easing[this.easing](d,this.options.duration*d,0,1,this.options.duration):this.pos=g=d,this.now=(this.end-this.start)*g+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),w&&w.set?w.set(this):Ze.propHooks._default.set(this),this}},Ze.prototype.init.prototype=Ze.prototype,Ze.propHooks={_default:{get:function(d){var g;return d.elem.nodeType!==1||d.elem[d.prop]!=null&&d.elem.style[d.prop]==null?d.elem[d.prop]:(g=m.css(d.elem,d.prop,""),!g||g==="auto"?0:g)},set:function(d){m.fx.step[d.prop]?m.fx.step[d.prop](d):d.elem.nodeType===1&&(m.cssHooks[d.prop]||d.elem.style[Di(d.prop)]!=null)?m.style(d.elem,d.prop,d.now+d.unit):d.elem[d.prop]=d.now}}},Ze.propHooks.scrollTop=Ze.propHooks.scrollLeft={set:function(d){d.elem.nodeType&&d.elem.parentNode&&(d.elem[d.prop]=d.now)}},m.easing={linear:function(d){return d},swing:function(d){return .5-Math.cos(d*Math.PI)/2},_default:"swing"},m.fx=Ze.prototype.init,m.fx.step={};var oo,yn,Je=/^(?:toggle|show|hide)$/,ro=/queueHooks$/;function Lo(){yn&&(at.hidden===!1&&h.requestAnimationFrame?h.requestAnimationFrame(Lo):h.setTimeout(Lo,m.fx.interval),m.fx.tick())}function Tr(){return h.setTimeout(function(){oo=void 0}),oo=Date.now()}function so(d,g){var w,C=0,S={height:d};for(g=g?1:0;C<4;C+=2-g)w=Mn[C],S["margin"+w]=S["padding"+w]=d;return g&&(S.opacity=S.width=d),S}function Dr(d,g,w){for(var C,S=(ln.tweeners[g]||[]).concat(ln.tweeners["*"]),M=0,z=S.length;M<z;M++)if(C=S[M].call(w,g,d))return C}function Sr(d,g,w){var C,S,M,z,X,Z,st,bt,wt="width"in g||"height"in g,ft=this,St={},ee=d.style,le=d.nodeType&&pn(d),ne=Vt.get(d,"fxshow");w.queue||(z=m._queueHooks(d,"fx"),z.unqueued==null&&(z.unqueued=0,X=z.empty.fire,z.empty.fire=function(){z.unqueued||X()}),z.unqueued++,ft.always(function(){ft.always(function(){z.unqueued--,m.queue(d,"fx").length||z.empty.fire()})}));for(C in g)if(S=g[C],Je.test(S)){if(delete g[C],M=M||S==="toggle",S===(le?"hide":"show"))if(S==="show"&&ne&&ne[C]!==void 0)le=!0;else continue;St[C]=ne&&ne[C]||m.style(d,C)}if(Z=!m.isEmptyObject(g),!(!Z&&m.isEmptyObject(St))){wt&&d.nodeType===1&&(w.overflow=[ee.overflow,ee.overflowX,ee.overflowY],st=ne&&ne.display,st==null&&(st=Vt.get(d,"display")),bt=m.css(d,"display"),bt==="none"&&(st?bt=st:(Vn([d],!0),st=d.style.display||st,bt=m.css(d,"display"),Vn([d]))),(bt==="inline"||bt==="inline-block"&&st!=null)&&m.css(d,"float")==="none"&&(Z||(ft.done(function(){ee.display=st}),st==null&&(bt=ee.display,st=bt==="none"?"":bt)),ee.display="inline-block")),w.overflow&&(ee.overflow="hidden",ft.always(function(){ee.overflow=w.overflow[0],ee.overflowX=w.overflow[1],ee.overflowY=w.overflow[2]})),Z=!1;for(C in St)Z||(ne?"hidden"in ne&&(le=ne.hidden):ne=Vt.access(d,"fxshow",{display:st}),M&&(ne.hidden=!le),le&&Vn([d],!0),ft.done(function(){le||Vn([d]),Vt.remove(d,"fxshow");for(C in St)m.style(d,C,St[C])})),Z=Dr(le?ne[C]:0,C,ft),C in ne||(ne[C]=Z.start,le&&(Z.end=Z.start,Z.start=0))}}function Ri(d,g){var w,C,S,M,z;for(w in d)if(C=Ne(w),S=g[C],M=d[w],Array.isArray(M)&&(S=M[1],M=d[w]=M[0]),w!==C&&(d[C]=M,delete d[w]),z=m.cssHooks[C],z&&"expand"in z){M=z.expand(M),delete d[C];for(w in M)w in d||(d[w]=M[w],g[w]=S)}else g[C]=S}function ln(d,g,w){var C,S,M=0,z=ln.prefilters.length,X=m.Deferred().always(function(){delete Z.elem}),Z=function(){if(S)return!1;for(var wt=oo||Tr(),ft=Math.max(0,st.startTime+st.duration-wt),St=ft/st.duration||0,ee=1-St,le=0,ne=st.tweens.length;le<ne;le++)st.tweens[le].run(ee);return X.notifyWith(d,[st,ee,ft]),ee<1&&ne?ft:(ne||X.notifyWith(d,[st,1,0]),X.resolveWith(d,[st]),!1)},st=X.promise({elem:d,props:m.extend({},g),opts:m.extend(!0,{specialEasing:{},easing:m.easing._default},w),originalProperties:g,originalOptions:w,startTime:oo||Tr(),duration:w.duration,tweens:[],createTween:function(wt,ft){var St=m.Tween(d,st.opts,wt,ft,st.opts.specialEasing[wt]||st.opts.easing);return st.tweens.push(St),St},stop:function(wt){var ft=0,St=wt?st.tweens.length:0;if(S)return this;for(S=!0;ft<St;ft++)st.tweens[ft].run(1);return wt?(X.notifyWith(d,[st,1,0]),X.resolveWith(d,[st,wt])):X.rejectWith(d,[st,wt]),this}}),bt=st.props;for(Ri(bt,st.opts.specialEasing);M<z;M++)if(C=ln.prefilters[M].call(st,d,bt,st.opts),C)return Q(C.stop)&&(m._queueHooks(st.elem,st.opts.queue).stop=C.stop.bind(C)),C;return m.map(bt,Dr,st),Q(st.opts.start)&&st.opts.start.call(d,st),st.progress(st.opts.progress).done(st.opts.done,st.opts.complete).fail(st.opts.fail).always(st.opts.always),m.fx.timer(m.extend(Z,{elem:d,anim:st,queue:st.opts.queue})),st}m.Animation=m.extend(ln,{tweeners:{"*":[function(d,g){var w=this.createTween(d,g);return Kr(w.elem,d,gi.exec(g),w),w}]},tweener:function(d,g){Q(d)?(g=d,d=["*"]):d=d.match(en);for(var w,C=0,S=d.length;C<S;C++)w=d[C],ln.tweeners[w]=ln.tweeners[w]||[],ln.tweeners[w].unshift(g)},prefilters:[Sr],prefilter:function(d,g){g?ln.prefilters.unshift(d):ln.prefilters.push(d)}}),m.speed=function(d,g,w){var C=d&&typeof d=="object"?m.extend({},d):{complete:w||!w&&g||Q(d)&&d,duration:d,easing:w&&g||g&&!Q(g)&&g};return m.fx.off?C.duration=0:typeof C.duration!="number"&&(C.duration in m.fx.speeds?C.duration=m.fx.speeds[C.duration]:C.duration=m.fx.speeds._default),(C.queue==null||C.queue===!0)&&(C.queue="fx"),C.old=C.complete,C.complete=function(){Q(C.old)&&C.old.call(this),C.queue&&m.dequeue(this,C.queue)},C},m.fn.extend({fadeTo:function(d,g,w,C){return this.filter(pn).css("opacity",0).show().end().animate({opacity:g},d,w,C)},animate:function(d,g,w,C){var S=m.isEmptyObject(d),M=m.speed(g,w,C),z=function(){var X=ln(this,m.extend({},d),M);(S||Vt.get(this,"finish"))&&X.stop(!0)};return z.finish=z,S||M.queue===!1?this.each(z):this.queue(M.queue,z)},stop:function(d,g,w){var C=function(S){var M=S.stop;delete S.stop,M(w)};return typeof d!="string"&&(w=g,g=d,d=void 0),g&&this.queue(d||"fx",[]),this.each(function(){var S=!0,M=d!=null&&d+"queueHooks",z=m.timers,X=Vt.get(this);if(M)X[M]&&X[M].stop&&C(X[M]);else for(M in X)X[M]&&X[M].stop&&ro.test(M)&&C(X[M]);for(M=z.length;M--;)z[M].elem===this&&(d==null||z[M].queue===d)&&(z[M].anim.stop(w),S=!1,z.splice(M,1));(S||!w)&&m.dequeue(this,d)})},finish:function(d){return d!==!1&&(d=d||"fx"),this.each(function(){var g,w=Vt.get(this),C=w[d+"queue"],S=w[d+"queueHooks"],M=m.timers,z=C?C.length:0;for(w.finish=!0,m.queue(this,d,[]),S&&S.stop&&S.stop.call(this,!0),g=M.length;g--;)M[g].elem===this&&M[g].queue===d&&(M[g].anim.stop(!0),M.splice(g,1));for(g=0;g<z;g++)C[g]&&C[g].finish&&C[g].finish.call(this);delete w.finish})}}),m.each(["toggle","show","hide"],function(d,g){var w=m.fn[g];m.fn[g]=function(C,S,M){return C==null||typeof C=="boolean"?w.apply(this,arguments):this.animate(so(g,!0),C,S,M)}}),m.each({slideDown:so("show"),slideUp:so("hide"),slideToggle:so("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(d,g){m.fn[d]=function(w,C,S){return this.animate(g,w,C,S)}}),m.timers=[],m.fx.tick=function(){var d,g=0,w=m.timers;for(oo=Date.now();g<w.length;g++)d=w[g],!d()&&w[g]===d&&w.splice(g--,1);w.length||m.fx.stop(),oo=void 0},m.fx.timer=function(d){m.timers.push(d),m.fx.start()},m.fx.interval=13,m.fx.start=function(){yn||(yn=!0,Lo())},m.fx.stop=function(){yn=null},m.fx.speeds={slow:600,fast:200,_default:400},m.fn.delay=function(d,g){return d=m.fx&&m.fx.speeds[d]||d,g=g||"fx",this.queue(g,function(w,C){var S=h.setTimeout(w,d);C.stop=function(){h.clearTimeout(S)}})},function(){var d=at.createElement("input"),g=at.createElement("select"),w=g.appendChild(at.createElement("option"));d.type="checkbox",Y.checkOn=d.value!=="",Y.optSelected=w.selected,d=at.createElement("input"),d.value="t",d.type="radio",Y.radioValue=d.value==="t"}();var oi,On=m.expr.attrHandle;m.fn.extend({attr:function(d,g){return sn(this,m.attr,d,g,arguments.length>1)},removeAttr:function(d){return this.each(function(){m.removeAttr(this,d)})}}),m.extend({attr:function(d,g,w){var C,S,M=d.nodeType;if(!(M===3||M===8||M===2)){if(typeof d.getAttribute>"u")return m.prop(d,g,w);if((M!==1||!m.isXMLDoc(d))&&(S=m.attrHooks[g.toLowerCase()]||(m.expr.match.bool.test(g)?oi:void 0)),w!==void 0){if(w===null){m.removeAttr(d,g);return}return S&&"set"in S&&(C=S.set(d,w,g))!==void 0?C:(d.setAttribute(g,w+""),w)}return S&&"get"in S&&(C=S.get(d,g))!==null?C:(C=m.find.attr(d,g),C??void 0)}},attrHooks:{type:{set:function(d,g){if(!Y.radioValue&&g==="radio"&&Bt(d,"input")){var w=d.value;return d.setAttribute("type",g),w&&(d.value=w),g}}}},removeAttr:function(d,g){var w,C=0,S=g&&g.match(en);if(S&&d.nodeType===1)for(;w=S[C++];)d.removeAttribute(w)}}),oi={set:function(d,g,w){return g===!1?m.removeAttr(d,w):d.setAttribute(w,w),w}},m.each(m.expr.match.bool.source.match(/\w+/g),function(d,g){var w=On[g]||m.find.attr;On[g]=function(C,S,M){var z,X,Z=S.toLowerCase();return M||(X=On[Z],On[Z]=z,z=w(C,S,M)!=null?Z:null,On[Z]=X),z}});var Po=/^(?:input|select|textarea|button)$/i,zi=/^(?:a|area)$/i;m.fn.extend({prop:function(d,g){return sn(this,m.prop,d,g,arguments.length>1)},removeProp:function(d){return this.each(function(){delete this[m.propFix[d]||d]})}}),m.extend({prop:function(d,g,w){var C,S,M=d.nodeType;if(!(M===3||M===8||M===2))return(M!==1||!m.isXMLDoc(d))&&(g=m.propFix[g]||g,S=m.propHooks[g]),w!==void 0?S&&"set"in S&&(C=S.set(d,w,g))!==void 0?C:d[g]=w:S&&"get"in S&&(C=S.get(d,g))!==null?C:d[g]},propHooks:{tabIndex:{get:function(d){var g=m.find.attr(d,"tabindex");return g?parseInt(g,10):Po.test(d.nodeName)||zi.test(d.nodeName)&&d.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),Y.optSelected||(m.propHooks.selected={get:function(d){var g=d.parentNode;return g&&g.parentNode&&g.parentNode.selectedIndex,null},set:function(d){var g=d.parentNode;g&&(g.selectedIndex,g.parentNode&&g.parentNode.selectedIndex)}}),m.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){m.propFix[this.toLowerCase()]=this});function nn(d){var g=d.match(en)||[];return g.join(" ")}function Bn(d){return d.getAttribute&&d.getAttribute("class")||""}function ji(d){return Array.isArray(d)?d:typeof d=="string"?d.match(en)||[]:[]}m.fn.extend({addClass:function(d){var g,w,C,S,M,z;return Q(d)?this.each(function(X){m(this).addClass(d.call(this,X,Bn(this)))}):(g=ji(d),g.length?this.each(function(){if(C=Bn(this),w=this.nodeType===1&&" "+nn(C)+" ",w){for(M=0;M<g.length;M++)S=g[M],w.indexOf(" "+S+" ")<0&&(w+=S+" ");z=nn(w),C!==z&&this.setAttribute("class",z)}}):this)},removeClass:function(d){var g,w,C,S,M,z;return Q(d)?this.each(function(X){m(this).removeClass(d.call(this,X,Bn(this)))}):arguments.length?(g=ji(d),g.length?this.each(function(){if(C=Bn(this),w=this.nodeType===1&&" "+nn(C)+" ",w){for(M=0;M<g.length;M++)for(S=g[M];w.indexOf(" "+S+" ")>-1;)w=w.replace(" "+S+" "," ");z=nn(w),C!==z&&this.setAttribute("class",z)}}):this):this.attr("class","")},toggleClass:function(d,g){var w,C,S,M,z=typeof d,X=z==="string"||Array.isArray(d);return Q(d)?this.each(function(Z){m(this).toggleClass(d.call(this,Z,Bn(this),g),g)}):typeof g=="boolean"&&X?g?this.addClass(d):this.removeClass(d):(w=ji(d),this.each(function(){if(X)for(M=m(this),S=0;S<w.length;S++)C=w[S],M.hasClass(C)?M.removeClass(C):M.addClass(C);else(d===void 0||z==="boolean")&&(C=Bn(this),C&&Vt.set(this,"__className__",C),this.setAttribute&&this.setAttribute("class",C||d===!1?"":Vt.get(this,"__className__")||""))}))},hasClass:function(d){var g,w,C=0;for(g=" "+d+" ";w=this[C++];)if(w.nodeType===1&&(" "+nn(Bn(w))+" ").indexOf(g)>-1)return!0;return!1}});var ri=/\r/g;m.fn.extend({val:function(d){var g,w,C,S=this[0];return arguments.length?(C=Q(d),this.each(function(M){var z;this.nodeType===1&&(C?z=d.call(this,M,m(this).val()):z=d,z==null?z="":typeof z=="number"?z+="":Array.isArray(z)&&(z=m.map(z,function(X){return X==null?"":X+""})),g=m.valHooks[this.type]||m.valHooks[this.nodeName.toLowerCase()],(!g||!("set"in g)||g.set(this,z,"value")===void 0)&&(this.value=z))})):S?(g=m.valHooks[S.type]||m.valHooks[S.nodeName.toLowerCase()],g&&"get"in g&&(w=g.get(S,"value"))!==void 0?w:(w=S.value,typeof w=="string"?w.replace(ri,""):w??"")):void 0}}),m.extend({valHooks:{option:{get:function(d){var g=m.find.attr(d,"value");return g??nn(m.text(d))}},select:{get:function(d){var g,w,C,S=d.options,M=d.selectedIndex,z=d.type==="select-one",X=z?null:[],Z=z?M+1:S.length;for(M<0?C=Z:C=z?M:0;C<Z;C++)if(w=S[C],(w.selected||C===M)&&!w.disabled&&(!w.parentNode.disabled||!Bt(w.parentNode,"optgroup"))){if(g=m(w).val(),z)return g;X.push(g)}return X},set:function(d,g){for(var w,C,S=d.options,M=m.makeArray(g),z=S.length;z--;)C=S[z],(C.selected=m.inArray(m.valHooks.option.get(C),M)>-1)&&(w=!0);return w||(d.selectedIndex=-1),M}}}}),m.each(["radio","checkbox"],function(){m.valHooks[this]={set:function(d,g){if(Array.isArray(g))return d.checked=m.inArray(m(d).val(),g)>-1}},Y.checkOn||(m.valHooks[this].get=function(d){return d.getAttribute("value")===null?"on":d.value})});var Fi=h.location,Si={guid:Date.now()},Vi=/\?/;m.parseXML=function(d){var g,w;if(!d||typeof d!="string")return null;try{g=new h.DOMParser().parseFromString(d,"text/xml")}catch{}return w=g&&g.getElementsByTagName("parsererror")[0],(!g||w)&&m.error("Invalid XML: "+(w?m.map(w.childNodes,function(C){return C.textContent}).join(`
`):d)),g};var cr=/^(?:focusinfocus|focusoutblur)$/,Ir=function(d){d.stopPropagation()};m.extend(m.event,{trigger:function(d,g,w,C){var S,M,z,X,Z,st,bt,wt,ft=[w||at],St=H.call(d,"type")?d.type:d,ee=H.call(d,"namespace")?d.namespace.split("."):[];if(M=wt=z=w=w||at,!(w.nodeType===3||w.nodeType===8)&&!cr.test(St+m.event.triggered)&&(St.indexOf(".")>-1&&(ee=St.split("."),St=ee.shift(),ee.sort()),Z=St.indexOf(":")<0&&"on"+St,d=d[m.expando]?d:new m.Event(St,typeof d=="object"&&d),d.isTrigger=C?2:3,d.namespace=ee.join("."),d.rnamespace=d.namespace?new RegExp("(^|\\.)"+ee.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,d.result=void 0,d.target||(d.target=w),g=g==null?[d]:m.makeArray(g,[d]),bt=m.event.special[St]||{},!(!C&&bt.trigger&&bt.trigger.apply(w,g)===!1))){if(!C&&!bt.noBubble&&!it(w)){for(X=bt.delegateType||St,cr.test(X+St)||(M=M.parentNode);M;M=M.parentNode)ft.push(M),z=M;z===(w.ownerDocument||at)&&ft.push(z.defaultView||z.parentWindow||h)}for(S=0;(M=ft[S++])&&!d.isPropagationStopped();)wt=M,d.type=S>1?X:bt.bindType||St,st=(Vt.get(M,"events")||Object.create(null))[d.type]&&Vt.get(M,"handle"),st&&st.apply(M,g),st=Z&&M[Z],st&&st.apply&&yi(M)&&(d.result=st.apply(M,g),d.result===!1&&d.preventDefault());return d.type=St,!C&&!d.isDefaultPrevented()&&(!bt._default||bt._default.apply(ft.pop(),g)===!1)&&yi(w)&&Z&&Q(w[St])&&!it(w)&&(z=w[Z],z&&(w[Z]=null),m.event.triggered=St,d.isPropagationStopped()&&wt.addEventListener(St,Ir),w[St](),d.isPropagationStopped()&&wt.removeEventListener(St,Ir),m.event.triggered=void 0,z&&(w[Z]=z)),d.result}},simulate:function(d,g,w){var C=m.extend(new m.Event,w,{type:d,isSimulated:!0});m.event.trigger(C,null,g)}}),m.fn.extend({trigger:function(d,g){return this.each(function(){m.event.trigger(d,g,this)})},triggerHandler:function(d,g){var w=this[0];if(w)return m.event.trigger(d,g,w,!0)}});var ts=/\[\]$/,Ms=/\r?\n/g,la=/^(?:submit|button|image|reset|file)$/i,Ii=/^(?:input|select|textarea|keygen)/i;function _n(d,g,w,C){var S;if(Array.isArray(g))m.each(g,function(M,z){w||ts.test(d)?C(d,z):_n(d+"["+(typeof z=="object"&&z!=null?M:"")+"]",z,w,C)});else if(!w&&xt(g)==="object")for(S in g)_n(d+"["+S+"]",g[S],w,C);else C(d,g)}m.param=function(d,g){var w,C=[],S=function(M,z){var X=Q(z)?z():z;C[C.length]=encodeURIComponent(M)+"="+encodeURIComponent(X??"")};if(d==null)return"";if(Array.isArray(d)||d.jquery&&!m.isPlainObject(d))m.each(d,function(){S(this.name,this.value)});else for(w in d)_n(w,d[w],g,S);return C.join("&")},m.fn.extend({serialize:function(){return m.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var d=m.prop(this,"elements");return d?m.makeArray(d):this}).filter(function(){var d=this.type;return this.name&&!m(this).is(":disabled")&&Ii.test(this.nodeName)&&!la.test(d)&&(this.checked||!xi.test(d))}).map(function(d,g){var w=m(this).val();return w==null?null:Array.isArray(w)?m.map(w,function(C){return{name:g.name,value:C.replace(Ms,`\r
`)}}):{name:g.name,value:w.replace(Ms,`\r
`)}}).get()}});var Mi=/%20/g,Mr=/#.*$/,Nr=/([?&])_=[^&]*/,lr=/^(.*?):[ \t]*([^\r\n]*)$/mg,Ro=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Ni=/^(?:GET|HEAD)$/,ao=/^\/\//,Ce={},Or={},dr="*/".concat("*"),ur=at.createElement("a");ur.href=Fi.href;function si(d){return function(g,w){typeof g!="string"&&(w=g,g="*");var C,S=0,M=g.toLowerCase().match(en)||[];if(Q(w))for(;C=M[S++];)C[0]==="+"?(C=C.slice(1)||"*",(d[C]=d[C]||[]).unshift(w)):(d[C]=d[C]||[]).push(w)}}function Hi(d,g,w,C){var S={},M=d===Or;function z(X){var Z;return S[X]=!0,m.each(d[X]||[],function(st,bt){var wt=bt(g,w,C);if(typeof wt=="string"&&!M&&!S[wt])return g.dataTypes.unshift(wt),z(wt),!1;if(M)return!(Z=wt)}),Z}return z(g.dataTypes[0])||!S["*"]&&z("*")}function $n(d,g){var w,C,S=m.ajaxSettings.flatOptions||{};for(w in g)g[w]!==void 0&&((S[w]?d:C||(C={}))[w]=g[w]);return C&&m.extend(!0,d,C),d}function Ns(d,g,w){for(var C,S,M,z,X=d.contents,Z=d.dataTypes;Z[0]==="*";)Z.shift(),C===void 0&&(C=d.mimeType||g.getResponseHeader("Content-Type"));if(C){for(S in X)if(X[S]&&X[S].test(C)){Z.unshift(S);break}}if(Z[0]in w)M=Z[0];else{for(S in w){if(!Z[0]||d.converters[S+" "+Z[0]]){M=S;break}z||(z=S)}M=M||z}if(M)return M!==Z[0]&&Z.unshift(M),w[M]}function Wn(d,g,w,C){var S,M,z,X,Z,st={},bt=d.dataTypes.slice();if(bt[1])for(z in d.converters)st[z.toLowerCase()]=d.converters[z];for(M=bt.shift();M;)if(d.responseFields[M]&&(w[d.responseFields[M]]=g),!Z&&C&&d.dataFilter&&(g=d.dataFilter(g,d.dataType)),Z=M,M=bt.shift(),M){if(M==="*")M=Z;else if(Z!=="*"&&Z!==M){if(z=st[Z+" "+M]||st["* "+M],!z){for(S in st)if(X=S.split(" "),X[1]===M&&(z=st[Z+" "+X[0]]||st["* "+X[0]],z)){z===!0?z=st[S]:st[S]!==!0&&(M=X[0],bt.unshift(X[1]));break}}if(z!==!0)if(z&&d.throws)g=z(g);else try{g=z(g)}catch(wt){return{state:"parsererror",error:z?wt:"No conversion from "+Z+" to "+M}}}}return{state:"success",data:g}}m.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Fi.href,type:"GET",isLocal:Ro.test(Fi.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":dr,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":m.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(d,g){return g?$n($n(d,m.ajaxSettings),g):$n(m.ajaxSettings,d)},ajaxPrefilter:si(Ce),ajaxTransport:si(Or),ajax:function(d,g){typeof d=="object"&&(g=d,d=void 0),g=g||{};var w,C,S,M,z,X,Z,st,bt,wt,ft=m.ajaxSetup({},g),St=ft.context||ft,ee=ft.context&&(St.nodeType||St.jquery)?m(St):m.event,le=m.Deferred(),ne=m.Callbacks("once memory"),$e=ft.statusCode||{},je={},dn={},wn="canceled",ue={readyState:0,getResponseHeader:function(we){var Be;if(Z){if(!M)for(M={};Be=lr.exec(S);)M[Be[1].toLowerCase()+" "]=(M[Be[1].toLowerCase()+" "]||[]).concat(Be[2]);Be=M[we.toLowerCase()+" "]}return Be==null?null:Be.join(", ")},getAllResponseHeaders:function(){return Z?S:null},setRequestHeader:function(we,Be){return Z==null&&(we=dn[we.toLowerCase()]=dn[we.toLowerCase()]||we,je[we]=Be),this},overrideMimeType:function(we){return Z==null&&(ft.mimeType=we),this},statusCode:function(we){var Be;if(we)if(Z)ue.always(we[ue.status]);else for(Be in we)$e[Be]=[$e[Be],we[Be]];return this},abort:function(we){var Be=we||wn;return w&&w.abort(Be),lo(0,Be),this}};if(le.promise(ue),ft.url=((d||ft.url||Fi.href)+"").replace(ao,Fi.protocol+"//"),ft.type=g.method||g.type||ft.method||ft.type,ft.dataTypes=(ft.dataType||"*").toLowerCase().match(en)||[""],ft.crossDomain==null){X=at.createElement("a");try{X.href=ft.url,X.href=X.href,ft.crossDomain=ur.protocol+"//"+ur.host!=X.protocol+"//"+X.host}catch{ft.crossDomain=!0}}if(ft.data&&ft.processData&&typeof ft.data!="string"&&(ft.data=m.param(ft.data,ft.traditional)),Hi(Ce,ft,g,ue),Z)return ue;st=m.event&&ft.global,st&&m.active++===0&&m.event.trigger("ajaxStart"),ft.type=ft.type.toUpperCase(),ft.hasContent=!Ni.test(ft.type),C=ft.url.replace(Mr,""),ft.hasContent?ft.data&&ft.processData&&(ft.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&(ft.data=ft.data.replace(Mi,"+")):(wt=ft.url.slice(C.length),ft.data&&(ft.processData||typeof ft.data=="string")&&(C+=(Vi.test(C)?"&":"?")+ft.data,delete ft.data),ft.cache===!1&&(C=C.replace(Nr,"$1"),wt=(Vi.test(C)?"&":"?")+"_="+Si.guid+++wt),ft.url=C+wt),ft.ifModified&&(m.lastModified[C]&&ue.setRequestHeader("If-Modified-Since",m.lastModified[C]),m.etag[C]&&ue.setRequestHeader("If-None-Match",m.etag[C])),(ft.data&&ft.hasContent&&ft.contentType!==!1||g.contentType)&&ue.setRequestHeader("Content-Type",ft.contentType),ue.setRequestHeader("Accept",ft.dataTypes[0]&&ft.accepts[ft.dataTypes[0]]?ft.accepts[ft.dataTypes[0]]+(ft.dataTypes[0]!=="*"?", "+dr+"; q=0.01":""):ft.accepts["*"]);for(bt in ft.headers)ue.setRequestHeader(bt,ft.headers[bt]);if(ft.beforeSend&&(ft.beforeSend.call(St,ue,ft)===!1||Z))return ue.abort();if(wn="abort",ne.add(ft.complete),ue.done(ft.success),ue.fail(ft.error),w=Hi(Or,ft,g,ue),!w)lo(-1,"No Transport");else{if(ue.readyState=1,st&&ee.trigger("ajaxSend",[ue,ft]),Z)return ue;ft.async&&ft.timeout>0&&(z=h.setTimeout(function(){ue.abort("timeout")},ft.timeout));try{Z=!1,w.send(je,lo)}catch(we){if(Z)throw we;lo(-1,we)}}function lo(we,Be,Ho,uo){var Ln,ai,Ge,qn,un,Pn=Be;Z||(Z=!0,z&&h.clearTimeout(z),w=void 0,S=uo||"",ue.readyState=we>0?4:0,Ln=we>=200&&we<300||we===304,Ho&&(qn=Ns(ft,ue,Ho)),!Ln&&m.inArray("script",ft.dataTypes)>-1&&m.inArray("json",ft.dataTypes)<0&&(ft.converters["text script"]=function(){}),qn=Wn(ft,qn,ue,Ln),Ln?(ft.ifModified&&(un=ue.getResponseHeader("Last-Modified"),un&&(m.lastModified[C]=un),un=ue.getResponseHeader("etag"),un&&(m.etag[C]=un)),we===204||ft.type==="HEAD"?Pn="nocontent":we===304?Pn="notmodified":(Pn=qn.state,ai=qn.data,Ge=qn.error,Ln=!Ge)):(Ge=Pn,(we||!Pn)&&(Pn="error",we<0&&(we=0))),ue.status=we,ue.statusText=(Be||Pn)+"",Ln?le.resolveWith(St,[ai,Pn,ue]):le.rejectWith(St,[ue,Pn,Ge]),ue.statusCode($e),$e=void 0,st&&ee.trigger(Ln?"ajaxSuccess":"ajaxError",[ue,ft,Ln?ai:Ge]),ne.fireWith(St,[ue,Pn]),st&&(ee.trigger("ajaxComplete",[ue,ft]),--m.active||m.event.trigger("ajaxStop")))}return ue},getJSON:function(d,g,w){return m.get(d,g,w,"json")},getScript:function(d,g){return m.get(d,void 0,g,"script")}}),m.each(["get","post"],function(d,g){m[g]=function(w,C,S,M){return Q(C)&&(M=M||S,S=C,C=void 0),m.ajax(m.extend({url:w,type:g,dataType:M,data:C,success:S},m.isPlainObject(w)&&w))}}),m.ajaxPrefilter(function(d){var g;for(g in d.headers)g.toLowerCase()==="content-type"&&(d.contentType=d.headers[g]||"")}),m._evalUrl=function(d,g,w){return m.ajax({url:d,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(C){m.globalEval(C,g,w)}})},m.fn.extend({wrapAll:function(d){var g;return this[0]&&(Q(d)&&(d=d.call(this[0])),g=m(d,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&g.insertBefore(this[0]),g.map(function(){for(var w=this;w.firstElementChild;)w=w.firstElementChild;return w}).append(this)),this},wrapInner:function(d){return Q(d)?this.each(function(g){m(this).wrapInner(d.call(this,g))}):this.each(function(){var g=m(this),w=g.contents();w.length?w.wrapAll(d):g.append(d)})},wrap:function(d){var g=Q(d);return this.each(function(w){m(this).wrapAll(g?d.call(this,w):d)})},unwrap:function(d){return this.parent(d).not("body").each(function(){m(this).replaceWith(this.childNodes)}),this}}),m.expr.pseudos.hidden=function(d){return!m.expr.pseudos.visible(d)},m.expr.pseudos.visible=function(d){return!!(d.offsetWidth||d.offsetHeight||d.getClientRects().length)},m.ajaxSettings.xhr=function(){try{return new h.XMLHttpRequest}catch{}};var zo={0:200,1223:204},Ui=m.ajaxSettings.xhr();Y.cors=!!Ui&&"withCredentials"in Ui,Y.ajax=Ui=!!Ui,m.ajaxTransport(function(d){var g,w;if(Y.cors||Ui&&!d.crossDomain)return{send:function(C,S){var M,z=d.xhr();if(z.open(d.type,d.url,d.async,d.username,d.password),d.xhrFields)for(M in d.xhrFields)z[M]=d.xhrFields[M];d.mimeType&&z.overrideMimeType&&z.overrideMimeType(d.mimeType),!d.crossDomain&&!C["X-Requested-With"]&&(C["X-Requested-With"]="XMLHttpRequest");for(M in C)z.setRequestHeader(M,C[M]);g=function(X){return function(){g&&(g=w=z.onload=z.onerror=z.onabort=z.ontimeout=z.onreadystatechange=null,X==="abort"?z.abort():X==="error"?typeof z.status!="number"?S(0,"error"):S(z.status,z.statusText):S(zo[z.status]||z.status,z.statusText,(z.responseType||"text")!=="text"||typeof z.responseText!="string"?{binary:z.response}:{text:z.responseText},z.getAllResponseHeaders()))}},z.onload=g(),w=z.onerror=z.ontimeout=g("error"),z.onabort!==void 0?z.onabort=w:z.onreadystatechange=function(){z.readyState===4&&h.setTimeout(function(){g&&w()})},g=g("abort");try{z.send(d.hasContent&&d.data||null)}catch(X){if(g)throw X}},abort:function(){g&&g()}}}),m.ajaxPrefilter(function(d){d.crossDomain&&(d.contents.script=!1)}),m.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(d){return m.globalEval(d),d}}}),m.ajaxPrefilter("script",function(d){d.cache===void 0&&(d.cache=!1),d.crossDomain&&(d.type="GET")}),m.ajaxTransport("script",function(d){if(d.crossDomain||d.scriptAttrs){var g,w;return{send:function(C,S){g=m("<script>").attr(d.scriptAttrs||{}).prop({charset:d.scriptCharset,src:d.url}).on("load error",w=function(M){g.remove(),w=null,M&&S(M.type==="error"?404:200,M.type)}),at.head.appendChild(g[0])},abort:function(){w&&w()}}}});var jo=[],Fo=/(=)\?(?=&|$)|\?\?/;m.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var d=jo.pop()||m.expando+"_"+Si.guid++;return this[d]=!0,d}}),m.ajaxPrefilter("json jsonp",function(d,g,w){var C,S,M,z=d.jsonp!==!1&&(Fo.test(d.url)?"url":typeof d.data=="string"&&(d.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&Fo.test(d.data)&&"data");if(z||d.dataTypes[0]==="jsonp")return C=d.jsonpCallback=Q(d.jsonpCallback)?d.jsonpCallback():d.jsonpCallback,z?d[z]=d[z].replace(Fo,"$1"+C):d.jsonp!==!1&&(d.url+=(Vi.test(d.url)?"&":"?")+d.jsonp+"="+C),d.converters["script json"]=function(){return M||m.error(C+" was not called"),M[0]},d.dataTypes[0]="json",S=h[C],h[C]=function(){M=arguments},w.always(function(){S===void 0?m(h).removeProp(C):h[C]=S,d[C]&&(d.jsonpCallback=g.jsonpCallback,jo.push(C)),M&&Q(S)&&S(M[0]),M=S=void 0}),"script"}),Y.createHTMLDocument=function(){var d=at.implementation.createHTMLDocument("").body;return d.innerHTML="<form></form><form></form>",d.childNodes.length===2}(),m.parseHTML=function(d,g,w){if(typeof d!="string")return[];typeof g=="boolean"&&(w=g,g=!1);var C,S,M;return g||(Y.createHTMLDocument?(g=at.implementation.createHTMLDocument(""),C=g.createElement("base"),C.href=at.location.href,g.head.appendChild(C)):g=at),S=Zn.exec(d),M=!w&&[],S?[g.createElement(S[1])]:(S=To([d],g,M),M&&M.length&&m(M).remove(),m.merge([],S.childNodes))},m.fn.load=function(d,g,w){var C,S,M,z=this,X=d.indexOf(" ");return X>-1&&(C=nn(d.slice(X)),d=d.slice(0,X)),Q(g)?(w=g,g=void 0):g&&typeof g=="object"&&(S="POST"),z.length>0&&m.ajax({url:d,type:S||"GET",dataType:"html",data:g}).done(function(Z){M=arguments,z.html(C?m("<div>").append(m.parseHTML(Z)).find(C):Z)}).always(w&&function(Z,st){z.each(function(){w.apply(this,M||[Z.responseText,st,Z])})}),this},m.expr.pseudos.animated=function(d){return m.grep(m.timers,function(g){return d===g.elem}).length},m.offset={setOffset:function(d,g,w){var C,S,M,z,X,Z,st,bt=m.css(d,"position"),wt=m(d),ft={};bt==="static"&&(d.style.position="relative"),X=wt.offset(),M=m.css(d,"top"),Z=m.css(d,"left"),st=(bt==="absolute"||bt==="fixed")&&(M+Z).indexOf("auto")>-1,st?(C=wt.position(),z=C.top,S=C.left):(z=parseFloat(M)||0,S=parseFloat(Z)||0),Q(g)&&(g=g.call(d,w,m.extend({},X))),g.top!=null&&(ft.top=g.top-X.top+z),g.left!=null&&(ft.left=g.left-X.left+S),"using"in g?g.using.call(d,ft):wt.css(ft)}},m.fn.extend({offset:function(d){if(arguments.length)return d===void 0?this:this.each(function(S){m.offset.setOffset(this,d,S)});var g,w,C=this[0];if(C)return C.getClientRects().length?(g=C.getBoundingClientRect(),w=C.ownerDocument.defaultView,{top:g.top+w.pageYOffset,left:g.left+w.pageXOffset}):{top:0,left:0}},position:function(){if(this[0]){var d,g,w,C=this[0],S={top:0,left:0};if(m.css(C,"position")==="fixed")g=C.getBoundingClientRect();else{for(g=this.offset(),w=C.ownerDocument,d=C.offsetParent||w.documentElement;d&&(d===w.body||d===w.documentElement)&&m.css(d,"position")==="static";)d=d.parentNode;d&&d!==C&&d.nodeType===1&&(S=m(d).offset(),S.top+=m.css(d,"borderTopWidth",!0),S.left+=m.css(d,"borderLeftWidth",!0))}return{top:g.top-S.top-m.css(C,"marginTop",!0),left:g.left-S.left-m.css(C,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var d=this.offsetParent;d&&m.css(d,"position")==="static";)d=d.offsetParent;return d||mi})}}),m.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(d,g){var w=g==="pageYOffset";m.fn[d]=function(C){return sn(this,function(S,M,z){var X;if(it(S)?X=S:S.nodeType===9&&(X=S.defaultView),z===void 0)return X?X[g]:S[M];X?X.scrollTo(w?X.pageXOffset:z,w?z:X.pageYOffset):S[M]=z},d,C,arguments.length)}}),m.each(["top","left"],function(d,g){m.cssHooks[g]=bi(Y.pixelPosition,function(w,C){if(C)return C=bn(w,g),Cr.test(C)?m(w).position()[g]+"px":C})}),m.each({Height:"height",Width:"width"},function(d,g){m.each({padding:"inner"+d,content:g,"":"outer"+d},function(w,C){m.fn[C]=function(S,M){var z=arguments.length&&(w||typeof S!="boolean"),X=w||(S===!0||M===!0?"margin":"border");return sn(this,function(Z,st,bt){var wt;return it(Z)?C.indexOf("outer")===0?Z["inner"+d]:Z.document.documentElement["client"+d]:Z.nodeType===9?(wt=Z.documentElement,Math.max(Z.body["scroll"+d],wt["scroll"+d],Z.body["offset"+d],wt["offset"+d],wt["client"+d])):bt===void 0?m.css(Z,st,X):m.style(Z,st,bt,X)},g,z?S:void 0,z)}})}),m.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(d,g){m.fn[g]=function(w){return this.on(g,w)}}),m.fn.extend({bind:function(d,g,w){return this.on(d,null,g,w)},unbind:function(d,g){return this.off(d,null,g)},delegate:function(d,g,w,C){return this.on(g,d,w,C)},undelegate:function(d,g,w){return arguments.length===1?this.off(d,"**"):this.off(g,d||"**",w)},hover:function(d,g){return this.on("mouseenter",d).on("mouseleave",g||d)}}),m.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(d,g){m.fn[g]=function(w,C){return arguments.length>0?this.on(g,null,w,C):this.trigger(g)}});var co=/^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;m.proxy=function(d,g){var w,C,S;if(typeof g=="string"&&(w=d[g],g=d,d=w),!!Q(d))return C=f.call(arguments,2),S=function(){return d.apply(g||this,C.concat(f.call(arguments)))},S.guid=d.guid=d.guid||m.guid++,S},m.holdReady=function(d){d?m.readyWait++:m.ready(!0)},m.isArray=Array.isArray,m.parseJSON=JSON.parse,m.nodeName=Bt,m.isFunction=Q,m.isWindow=it,m.camelCase=Ne,m.type=xt,m.now=Date.now,m.isNumeric=function(d){var g=m.type(d);return(g==="number"||g==="string")&&!isNaN(d-parseFloat(d))},m.trim=function(d){return d==null?"":(d+"").replace(co,"$1")};var Vo=h.jQuery,Os=h.$;return m.noConflict=function(d){return h.$===m&&(h.$=Os),d&&h.jQuery===m&&(h.jQuery=Vo),m},typeof A>"u"&&(h.jQuery=h.$=m),m})})(m0);var k0=m0.exports,pC={exports:{}};/*!
 * AdminLTE v3.1.0 (https://adminlte.io)
 * Copyright 2014-2021 Colorlib <https://colorlib.com>
 * Licensed under MIT (https://github.com/ColorlibHQ/AdminLTE/blob/master/LICENSE)
 */(function(E,h){(function(A,R){R(h,k0)})(Xs,function(A,R){function V(ct){return ct&&typeof ct=="object"&&"default"in ct?ct:{default:ct}}var f=V(R),L="CardRefresh",B="lte.cardrefresh",_="."+B,q=f.default.fn[L],U="loaded"+_,H="overlay.added"+_,x="overlay.removed"+_,P="card",Y="."+P,Q='[data-card-widget="card-refresh"]',it={source:"",sourceSelector:"",params:{},trigger:Q,content:".card-body",loadInContent:!0,loadOnInit:!0,responseType:"",overlayTemplate:'<div class="overlay"><i class="fas fa-2x fa-sync-alt fa-spin"></i></div>',onLoadStart:function(){},onLoadDone:function(pt){return pt}},at=function(){function ct(dt,W){if(this._element=dt,this._parent=dt.parents(Y).first(),this._settings=f.default.extend({},it,W),this._overlay=f.default(this._settings.overlayTemplate),dt.hasClass(P)&&(this._parent=dt),this._settings.source==="")throw new Error("Source url was not defined. Please specify a url in your CardRefresh source option.")}var pt=ct.prototype;return pt.load=function(){var W=this;this._addOverlay(),this._settings.onLoadStart.call(f.default(this)),f.default.get(this._settings.source,this._settings.params,function(tt){W._settings.loadInContent&&(W._settings.sourceSelector!==""&&(tt=f.default(tt).find(W._settings.sourceSelector).html()),W._parent.find(W._settings.content).html(tt)),W._settings.onLoadDone.call(f.default(W),tt),W._removeOverlay()},this._settings.responseType!==""&&this._settings.responseType),f.default(this._element).trigger(f.default.Event(U))},pt._addOverlay=function(){this._parent.append(this._overlay),f.default(this._element).trigger(f.default.Event(H))},pt._removeOverlay=function(){this._parent.find(this._overlay).remove(),f.default(this._element).trigger(f.default.Event(x))},pt._init=function(){var W=this;f.default(this).find(this._settings.trigger).on("click",function(){W.load()}),this._settings.loadOnInit&&this.load()},ct._jQueryInterface=function(W){var tt=f.default(this).data(B),kt=f.default.extend({},it,f.default(this).data());tt||(tt=new ct(f.default(this),kt),f.default(this).data(B,typeof W=="string"?tt:W)),typeof W=="string"&&/load/.test(W)?tt[W]():tt._init(f.default(this))},ct}();f.default(document).on("click",Q,function(ct){ct&&ct.preventDefault(),at._jQueryInterface.call(f.default(this),"load")}),f.default(function(){f.default(Q).each(function(){at._jQueryInterface.call(f.default(this))})}),f.default.fn[L]=at._jQueryInterface,f.default.fn[L].Constructor=at,f.default.fn[L].noConflict=function(){return f.default.fn[L]=q,at._jQueryInterface};var rt="CardWidget",yt="lte.cardwidget",xt="."+yt,Ht=f.default.fn[rt],Kt="expanded"+xt,m="collapsed"+xt,It="maximized"+xt,Bt="minimized"+xt,te="removed"+xt,ae="card",me="collapsed-card",Ut="collapsing-card",Se="expanding-card",He="was-collapsed",ke="maximized-card",ve='[data-card-widget="remove"]',fe='[data-card-widget="collapse"]',qe='[data-card-widget="maximize"]',Fn="."+ae,Qn=".card-header",Zn=".card-body",Ke=".card-footer",Jn={animationSpeed:"normal",collapseTrigger:fe,removeTrigger:ve,maximizeTrigger:qe,collapseIcon:"fa-minus",expandIcon:"fa-plus",maximizeIcon:"fa-expand",minimizeIcon:"fa-compress"},Ye=function(){function ct(dt,W){this._element=dt,this._parent=dt.parents(Fn).first(),dt.hasClass(ae)&&(this._parent=dt),this._settings=f.default.extend({},Jn,W)}var pt=ct.prototype;return pt.collapse=function(){var W=this;this._parent.addClass(Ut).children(Zn+", "+Ke).slideUp(this._settings.animationSpeed,function(){W._parent.addClass(me).removeClass(Ut)}),this._parent.find("> "+Qn+" "+this._settings.collapseTrigger+" ."+this._settings.collapseIcon).addClass(this._settings.expandIcon).removeClass(this._settings.collapseIcon),this._element.trigger(f.default.Event(m),this._parent)},pt.expand=function(){var W=this;this._parent.addClass(Se).children(Zn+", "+Ke).slideDown(this._settings.animationSpeed,function(){W._parent.removeClass(me).removeClass(Se)}),this._parent.find("> "+Qn+" "+this._settings.collapseTrigger+" ."+this._settings.expandIcon).addClass(this._settings.collapseIcon).removeClass(this._settings.expandIcon),this._element.trigger(f.default.Event(Kt),this._parent)},pt.remove=function(){this._parent.slideUp(),this._element.trigger(f.default.Event(te),this._parent)},pt.toggle=function(){if(this._parent.hasClass(me)){this.expand();return}this.collapse()},pt.maximize=function(){this._parent.find(this._settings.maximizeTrigger+" ."+this._settings.maximizeIcon).addClass(this._settings.minimizeIcon).removeClass(this._settings.maximizeIcon),this._parent.css({height:this._parent.height(),width:this._parent.width(),transition:"all .15s"}).delay(150).queue(function(){var W=f.default(this);W.addClass(ke),f.default("html").addClass(ke),W.hasClass(me)&&W.addClass(He),W.dequeue()}),this._element.trigger(f.default.Event(It),this._parent)},pt.minimize=function(){this._parent.find(this._settings.maximizeTrigger+" ."+this._settings.minimizeIcon).addClass(this._settings.maximizeIcon).removeClass(this._settings.minimizeIcon),this._parent.css("cssText","height: "+this._parent[0].style.height+" !important; width: "+this._parent[0].style.width+" !important; transition: all .15s;").delay(10).queue(function(){var W=f.default(this);W.removeClass(ke),f.default("html").removeClass(ke),W.css({height:"inherit",width:"inherit"}),W.hasClass(He)&&W.removeClass(He),W.dequeue()}),this._element.trigger(f.default.Event(Bt),this._parent)},pt.toggleMaximize=function(){if(this._parent.hasClass(ke)){this.minimize();return}this.maximize()},pt._init=function(W){var tt=this;this._parent=W,f.default(this).find(this._settings.collapseTrigger).click(function(){tt.toggle()}),f.default(this).find(this._settings.maximizeTrigger).click(function(){tt.toggleMaximize()}),f.default(this).find(this._settings.removeTrigger).click(function(){tt.remove()})},ct._jQueryInterface=function(W){var tt=f.default(this).data(yt),kt=f.default.extend({},Jn,f.default(this).data());tt||(tt=new ct(f.default(this),kt),f.default(this).data(yt,typeof W=="string"?tt:W)),typeof W=="string"&&/collapse|expand|remove|toggle|maximize|minimize|toggleMaximize/.test(W)?tt[W]():typeof W=="object"&&tt._init(f.default(this))},ct}();f.default(document).on("click",fe,function(ct){ct&&ct.preventDefault(),Ye._jQueryInterface.call(f.default(this),"toggle")}),f.default(document).on("click",ve,function(ct){ct&&ct.preventDefault(),Ye._jQueryInterface.call(f.default(this),"remove")}),f.default(document).on("click",qe,function(ct){ct&&ct.preventDefault(),Ye._jQueryInterface.call(f.default(this),"toggleMaximize")}),f.default.fn[rt]=Ye._jQueryInterface,f.default.fn[rt].Constructor=Ye,f.default.fn[rt].noConflict=function(){return f.default.fn[rt]=Ht,Ye._jQueryInterface};var be="ControlSidebar",Xn="lte.controlsidebar",Sn="."+Xn,fi=f.default.fn[be],en="collapsed"+Sn,yo="expanded"+Sn,ti=".control-sidebar",pe=".control-sidebar-content",no='[data-widget="control-sidebar"]',Eo=".main-header",In=".main-footer",rn="control-sidebar-animate",sn="control-sidebar-open",ei="control-sidebar-slide-open",Me="layout-fixed",Ue="layout-navbar-fixed",Ne="layout-sm-navbar-fixed",yi="layout-md-navbar-fixed",Ei="layout-lg-navbar-fixed",Vt="layout-xl-navbar-fixed",Ie="layout-footer-fixed",rr="layout-sm-footer-fixed",pi="layout-md-footer-fixed",sa="layout-lg-footer-fixed",xo="layout-xl-footer-fixed",xs={controlsidebarSlide:!0,scrollbarTheme:"os-theme-light",scrollbarAutoHide:"l",target:ti},gi=function(){function ct(dt,W){this._element=dt,this._config=W}var pt=ct.prototype;return pt.collapse=function(){var W=f.default("body"),tt=f.default("html"),kt=this._config.target;this._config.controlsidebarSlide?(tt.addClass(rn),W.removeClass(ei).delay(300).queue(function(){f.default(kt).hide(),tt.removeClass(rn),f.default(this).dequeue()})):W.removeClass(sn),f.default(this._element).trigger(f.default.Event(en))},pt.show=function(){var W=f.default("body"),tt=f.default("html");this._config.controlsidebarSlide?(tt.addClass(rn),f.default(this._config.target).show().delay(10).queue(function(){W.addClass(ei).delay(300).queue(function(){tt.removeClass(rn),f.default(this).dequeue()}),f.default(this).dequeue()})):W.addClass(sn),this._fixHeight(),this._fixScrollHeight(),f.default(this._element).trigger(f.default.Event(yo))},pt.toggle=function(){var W=f.default("body"),tt=W.hasClass(sn)||W.hasClass(ei);tt?this.collapse():this.show()},pt._init=function(){var W=this,tt=f.default("body"),kt=tt.hasClass(sn)||tt.hasClass(ei);kt?(f.default(ti).not(this._config.target).hide(),f.default(this._config.target).css("display","block")):f.default(ti).hide(),this._fixHeight(),this._fixScrollHeight(),f.default(window).resize(function(){W._fixHeight(),W._fixScrollHeight()}),f.default(window).scroll(function(){var _t=f.default("body"),Ot=_t.hasClass(sn)||_t.hasClass(ei);Ot&&W._fixScrollHeight()})},pt._isNavbarFixed=function(){var W=f.default("body");return W.hasClass(Ue)||W.hasClass(Ne)||W.hasClass(yi)||W.hasClass(Ei)||W.hasClass(Vt)},pt._isFooterFixed=function(){var W=f.default("body");return W.hasClass(Ie)||W.hasClass(rr)||W.hasClass(pi)||W.hasClass(sa)||W.hasClass(xo)},pt._fixScrollHeight=function(){var W=f.default("body"),tt=f.default(this._config.target);if(W.hasClass(Me)){var kt={scroll:f.default(document).height(),window:f.default(window).height(),header:f.default(Eo).outerHeight(),footer:f.default(In).outerHeight()},_t={bottom:Math.abs(kt.window+f.default(window).scrollTop()-kt.scroll),top:f.default(window).scrollTop()},Ot=this._isNavbarFixed()&&f.default(Eo).css("position")==="fixed",re=this._isFooterFixed()&&f.default(In).css("position")==="fixed",ge=f.default(this._config.target+", "+this._config.target+" "+pe);if(_t.top===0&&_t.bottom===0)tt.css({bottom:kt.footer,top:kt.header}),ge.css("height",kt.window-(kt.header+kt.footer));else if(_t.bottom<=kt.footer)if(re===!1){var Xt=kt.header-_t.top;tt.css("bottom",kt.footer-_t.bottom).css("top",Xt>=0?Xt:0),ge.css("height",kt.window-(kt.footer-_t.bottom))}else tt.css("bottom",kt.footer);else _t.top<=kt.header?Ot===!1?(tt.css("top",kt.header-_t.top),ge.css("height",kt.window-(kt.header-_t.top))):tt.css("top",kt.header):Ot===!1?(tt.css("top",0),ge.css("height",kt.window)):tt.css("top",kt.header);re&&Ot?(ge.css("height","100%"),tt.css("height","")):(re||Ot)&&(ge.css("height","100%"),ge.css("height",""))}},pt._fixHeight=function(){var W=f.default("body"),tt=f.default(this._config.target+" "+pe);if(!W.hasClass(Me)){tt.attr("style","");return}var kt={window:f.default(window).height(),header:f.default(Eo).outerHeight(),footer:f.default(In).outerHeight()},_t=kt.window-kt.header;this._isFooterFixed()&&f.default(In).css("position")==="fixed"&&(_t=kt.window-kt.header-kt.footer),tt.css("height",_t),typeof f.default.fn.overlayScrollbars<"u"&&tt.overlayScrollbars({className:this._config.scrollbarTheme,sizeAutoCapable:!0,scrollbars:{autoHide:this._config.scrollbarAutoHide,clickScrolling:!0}})},ct._jQueryInterface=function(W){return this.each(function(){var tt=f.default(this).data(Xn),kt=f.default.extend({},xs,f.default(this).data());if(tt||(tt=new ct(this,kt),f.default(this).data(Xn,tt)),tt[W]==="undefined")throw new Error(W+" is not a function");tt[W]()})},ct}();f.default(document).on("click",no,function(ct){ct.preventDefault(),gi._jQueryInterface.call(f.default(this),"toggle")}),f.default(document).ready(function(){gi._jQueryInterface.call(f.default(no),"_init")}),f.default.fn[be]=gi._jQueryInterface,f.default.fn[be].Constructor=gi,f.default.fn[be].noConflict=function(){return f.default.fn[be]=fi,gi._jQueryInterface};var Mn="DirectChat",mi="lte.directchat",an="."+mi,cn=f.default.fn[Mn],pn="toggled"+an,Kr='[data-widget="chat-pane-toggle"]',Nn=".direct-chat",Yr="direct-chat-contacts-open",Vn=function(){function ct(dt){this._element=dt}var pt=ct.prototype;return pt.toggle=function(){f.default(this._element).parents(Nn).first().toggleClass(Yr),f.default(this._element).trigger(f.default.Event(pn))},ct._jQueryInterface=function(W){return this.each(function(){var tt=f.default(this).data(mi);tt||(tt=new ct(f.default(this)),f.default(this).data(mi,tt)),tt[W]()})},ct}();f.default(document).on("click",Kr,function(ct){ct&&ct.preventDefault(),Vn._jQueryInterface.call(f.default(this),"toggle")}),f.default.fn[Mn]=Vn._jQueryInterface,f.default.fn[Mn].Constructor=Vn,f.default.fn[Mn].noConflict=function(){return f.default.fn[Mn]=cn,Vn._jQueryInterface};var xi="Dropdown",Qr="lte.dropdown",Zr=f.default.fn[xi],Hn=".navbar",gn=".dropdown-menu",mn=".dropdown-menu.show",Ts='[data-toggle="dropdown"]',To="dropdown-menu-right",sr="dropdown-submenu",Do={},ni=function(){function ct(dt,W){this._config=W,this._element=dt}var pt=ct.prototype;return pt.toggleSubmenu=function(){this._element.siblings().show().toggleClass("show"),this._element.next().hasClass("show")||this._element.parents(gn).first().find(".show").removeClass("show").hide(),this._element.parents("li.nav-item.dropdown.show").on("hidden.bs.dropdown",function(){f.default(".dropdown-submenu .show").removeClass("show").hide()})},pt.fixPosition=function(){var W=f.default(mn);if(W.length!==0){W.hasClass(To)?W.css({left:"inherit",right:0}):W.css({left:0,right:"inherit"});var tt=W.offset(),kt=W.width(),_t=f.default(window).width()-tt.left;tt.left<0?W.css({left:"inherit",right:tt.left-5}):_t<kt&&W.css({left:"inherit",right:0})}},ct._jQueryInterface=function(W){return this.each(function(){var tt=f.default(this).data(Qr),kt=f.default.extend({},Do,f.default(this).data());tt||(tt=new ct(f.default(this),kt),f.default(this).data(Qr,tt)),(W==="toggleSubmenu"||W==="fixPosition")&&tt[W]()})},ct}();f.default(gn+" "+Ts).on("click",function(ct){ct.preventDefault(),ct.stopPropagation(),ni._jQueryInterface.call(f.default(this),"toggleSubmenu")}),f.default(Hn+" "+Ts).on("click",function(ct){ct.preventDefault(),!f.default(ct.target).parent().hasClass(sr)&&setTimeout(function(){ni._jQueryInterface.call(f.default(this),"fixPosition")},1)}),f.default.fn[xi]=ni._jQueryInterface,f.default.fn[xi].Constructor=ni,f.default.fn[xi].noConflict=function(){return f.default.fn[xi]=Zr,ni._jQueryInterface};var ki="ExpandableTable",So="lte.expandableTable",Ds="."+So,Io=f.default.fn[ki],vr="expanded"+Ds,Ss="collapsed"+Ds,aa=".expandable-table",Mo=".expandable-body",Jr='[data-widget="expandable-table"]',ii="aria-expanded",Qe=function(){function ct(dt,W){this._options=W,this._element=dt}var pt=ct.prototype;return pt.init=function(){f.default(Jr).each(function(W,tt){var kt=f.default(tt).attr(ii),_t=f.default(tt).next(Mo).children().first().children();kt==="true"?_t.show():kt==="false"&&(_t.hide(),_t.parent().parent().addClass("d-none"))})},pt.toggleRow=function(){var W=this._element,tt=500,kt=W.attr(ii),_t=W.next(Mo).children().first().children();_t.stop(),kt==="true"?(_t.slideUp(tt,function(){W.next(Mo).addClass("d-none")}),W.attr(ii,"false"),W.trigger(f.default.Event(Ss))):kt==="false"&&(W.next(Mo).removeClass("d-none"),_t.slideDown(tt),W.attr(ii,"true"),W.trigger(f.default.Event(vr)))},ct._jQueryInterface=function(W){return this.each(function(){var tt=f.default(this).data(So);tt||(tt=new ct(f.default(this)),f.default(this).data(So,tt)),typeof W=="string"&&/init|toggleRow/.test(W)&&tt[W]()})},ct}();f.default(aa).ready(function(){Qe._jQueryInterface.call(f.default(this),"init")}),f.default(document).on("click",Jr,function(){Qe._jQueryInterface.call(f.default(this),"toggleRow")}),f.default.fn[ki]=Qe._jQueryInterface,f.default.fn[ki].Constructor=Qe,f.default.fn[ki].noConflict=function(){return f.default.fn[ki]=Io,Qe._jQueryInterface};var Un="Fullscreen",Cr="lte.fullscreen",Ti=f.default.fn[Un],kn='[data-widget="fullscreen"]',Xr=kn+" i",Is={minimizeIcon:"fa-compress-arrows-alt",maximizeIcon:"fa-expand-arrows-alt"},bn=function(){function ct(dt,W){this.element=dt,this.options=f.default.extend({},Is,W)}var pt=ct.prototype;return pt.toggle=function(){document.fullscreenElement||document.mozFullScreenElement||document.webkitFullscreenElement||document.msFullscreenElement?this.windowed():this.fullscreen()},pt.fullscreen=function(){document.documentElement.requestFullscreen?document.documentElement.requestFullscreen():document.documentElement.webkitRequestFullscreen?document.documentElement.webkitRequestFullscreen():document.documentElement.msRequestFullscreen&&document.documentElement.msRequestFullscreen(),f.default(Xr).removeClass(this.options.maximizeIcon).addClass(this.options.minimizeIcon)},pt.windowed=function(){document.exitFullscreen?document.exitFullscreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.msExitFullscreen&&document.msExitFullscreen(),f.default(Xr).removeClass(this.options.minimizeIcon).addClass(this.options.maximizeIcon)},ct._jQueryInterface=function(W){var tt=f.default(this).data(Cr);tt||(tt=f.default(this).data());var kt=f.default.extend({},Is,typeof W=="object"?W:tt),_t=new ct(f.default(this),kt);f.default(this).data(Cr,typeof W=="object"?W:tt),typeof W=="string"&&/toggle|fullscreen|windowed/.test(W)?_t[W]():_t.init()},ct}();f.default(document).on("click",kn,function(){bn._jQueryInterface.call(f.default(this),"toggle")}),f.default.fn[Un]=bn._jQueryInterface,f.default.fn[Un].Constructor=bn,f.default.fn[Un].noConflict=function(){return f.default.fn[Un]=Ti,bn._jQueryInterface};var bi="IFrame",No="lte.iframe",yr=f.default.fn[bi],Oo='[data-widget="iframe"]',ca='[data-widget="iframe-close"]',Di='[data-widget="iframe-scrollleft"]',ar='[data-widget="iframe-scrollright"]',io='[data-widget="iframe-fullscreen"]',Bo=".content-wrapper",Er=Bo+" iframe",xr=Oo+".iframe-mode .nav",Pi=Oo+".iframe-mode .navbar-nav",Ze=Pi+" .nav-item",oo=Pi+" .nav-link",yn=Oo+".iframe-mode .tab-content",Je=yn+" .tab-empty",ro=yn+" .tab-loading",Lo=yn+" .tab-pane",Tr=".main-sidebar .nav-item > a.nav-link",so=".sidebar-search-results .list-group-item",Dr=".main-header .nav-item a.nav-link",Sr=".main-header a.dropdown-item",Ri="iframe-mode",ln="iframe-mode-fullscreen",oi={onTabClick:function(pt){return pt},onTabChanged:function(pt){return pt},onTabCreated:function(pt){return pt},autoIframeMode:!0,autoItemActive:!0,autoShowNewTab:!0,allowDuplicates:!1,loadingScreen:!0,useNavbarItems:!0,scrollOffset:40,scrollBehaviorSwap:!1,iconMaximize:"fa-expand",iconMinimize:"fa-compress"},On=function(){function ct(dt,W){this._config=W,this._element=dt,this._init()}var pt=ct.prototype;return pt.onTabClick=function(W){this._config.onTabClick(W)},pt.onTabChanged=function(W){this._config.onTabChanged(W)},pt.onTabCreated=function(W){this._config.onTabCreated(W)},pt.createTab=function(W,tt,kt,_t){var Ot=this,re="panel-"+kt,ge="tab-"+kt;this._config.allowDuplicates&&(re+="-"+Math.floor(Math.random()*1e3),ge+="-"+Math.floor(Math.random()*1e3));var Xt='<li class="nav-item" role="presentation"><a href="#" class="btn-iframe-close" data-widget="iframe-close" data-type="only-this"><i class="fas fa-times"></i></a><a class="nav-link" data-toggle="row" id="'+ge+'" href="#'+re+'" role="tab" aria-controls="'+re+'" aria-selected="false">'+W+"</a></li>";f.default(Pi).append(unescape(escape(Xt)));var Rn='<div class="tab-pane fade" id="'+re+'" role="tabpanel" aria-labelledby="'+ge+'"><iframe src="'+tt+'"></iframe></div>';if(f.default(yn).append(unescape(escape(Rn))),_t)if(this._config.loadingScreen){var Ai=f.default(ro);Ai.fadeIn(),f.default(re+" iframe").ready(function(){typeof Ot._config.loadingScreen=="number"?(Ot.switchTab("#"+ge),setTimeout(function(){Ai.fadeOut()},Ot._config.loadingScreen)):(Ot.switchTab("#"+ge),Ai.fadeOut())})}else this.switchTab("#"+ge);this.onTabCreated(f.default("#"+ge))},pt.openTabSidebar=function(W,tt){tt===void 0&&(tt=this._config.autoShowNewTab);var kt=f.default(W).clone();kt.attr("href")===void 0&&(kt=f.default(W).parent("a").clone()),kt.find(".right, .search-path").remove();var _t=kt.find("p").text();_t===""&&(_t=kt.text());var Ot=kt.attr("href");if(!(Ot==="#"||Ot===""||Ot===void 0)){var re=Ot.replace("./","").replace(/["&'./:=?[\]]/gi,"-").replace(/(--)/gi,""),ge="tab-"+re;if(!this._config.allowDuplicates&&f.default("#"+ge).length>0)return this.switchTab("#"+ge);(!this._config.allowDuplicates&&f.default("#"+ge).length===0||this._config.allowDuplicates)&&this.createTab(_t,Ot,re,tt)}},pt.switchTab=function(W){var tt=f.default(W),kt=tt.attr("href");f.default(Je).hide(),f.default(Pi+" .active").tab("dispose").removeClass("active"),this._fixHeight(),tt.tab("show"),tt.parents("li").addClass("active"),this.onTabChanged(tt),this._config.autoItemActive&&this._setItemActive(f.default(kt+" iframe").attr("src"))},pt.removeActiveTab=function(W,tt){if(W=="all")f.default(Ze).remove(),f.default(Lo).remove(),f.default(Je).show();else if(W=="all-other")f.default(Ze+":not(.active)").remove(),f.default(Lo+":not(.active)").remove();else if(W=="only-this"){var kt=f.default(tt),_t=kt.parent(".nav-item"),Ot=_t.parent(),re=_t.index(),ge=kt.siblings(".nav-link").attr("aria-controls");if(_t.remove(),f.default("#"+ge).remove(),f.default(yn).children().length==f.default(Je+", "+ro).length)f.default(Je).show();else{var Xt=re-1;this.switchTab(Ot.children().eq(Xt).find("a.nav-link"))}}else{var Rn=f.default(Ze+".active"),Ai=Rn.parent(),is=Rn.index();if(Rn.remove(),f.default(Lo+".active").remove(),f.default(yn).children().length==f.default(Je+", "+ro).length)f.default(Je).show();else{var Ua=is-1;this.switchTab(Ai.children().eq(Ua).find("a.nav-link"))}}},pt.toggleFullscreen=function(){f.default("body").hasClass(ln)?(f.default(io+" i").removeClass(this._config.iconMinimize).addClass(this._config.iconMaximize),f.default("body").removeClass(ln),f.default(Je+", "+ro).height("auto"),f.default(Bo).height("auto"),f.default(Er).height("auto")):(f.default(io+" i").removeClass(this._config.iconMaximize).addClass(this._config.iconMinimize),f.default("body").addClass(ln)),f.default(window).trigger("resize"),this._fixHeight(!0)},pt._init=function(){if(window.frameElement&&this._config.autoIframeMode)f.default("body").addClass(Ri);else if(f.default(Bo).hasClass(Ri)){if(f.default(yn).children().length>2){var W=f.default(Lo+":first-child");W.show(),this._setItemActive(W.find("iframe").attr("src"))}this._setupListeners(),this._fixHeight(!0)}},pt._navScroll=function(W){var tt=f.default(Pi).scrollLeft();f.default(Pi).animate({scrollLeft:tt+W},250,"linear")},pt._setupListeners=function(){var W=this;f.default(window).on("resize",function(){setTimeout(function(){W._fixHeight()},1)}),f.default(document).on("click",Tr+", "+so,function(_t){_t.preventDefault(),W.openTabSidebar(_t.target)}),this._config.useNavbarItems&&f.default(document).on("click",Dr+", "+Sr,function(_t){_t.preventDefault(),W.openTabSidebar(_t.target)}),f.default(document).on("click",oo,function(_t){_t.preventDefault(),W.onTabClick(_t.target),W.switchTab(_t.target)}),f.default(document).on("click",oo,function(_t){_t.preventDefault(),W.onTabClick(_t.target),W.switchTab(_t.target)}),f.default(document).on("click",ca,function(_t){_t.preventDefault();var Ot=_t.target;Ot.nodeName=="I"&&(Ot=_t.target.offsetParent),W.removeActiveTab(Ot.attributes["data-type"]?Ot.attributes["data-type"].nodeValue:null,Ot)}),f.default(document).on("click",io,function(_t){_t.preventDefault(),W.toggleFullscreen()});var tt=!1,kt=null;f.default(document).on("mousedown",Di,function(_t){_t.preventDefault(),clearInterval(kt);var Ot=W._config.scrollOffset;W._config.scrollBehaviorSwap||(Ot=-Ot),tt=!0,W._navScroll(Ot),kt=setInterval(function(){W._navScroll(Ot)},250)}),f.default(document).on("mousedown",ar,function(_t){_t.preventDefault(),clearInterval(kt);var Ot=W._config.scrollOffset;W._config.scrollBehaviorSwap&&(Ot=-Ot),tt=!0,W._navScroll(Ot),kt=setInterval(function(){W._navScroll(Ot)},250)}),f.default(document).on("mouseup",function(){tt&&(tt=!1,clearInterval(kt),kt=null)})},pt._setItemActive=function(W){f.default(Tr+", "+Sr).removeClass("active"),f.default(Dr).parent().removeClass("active");var tt=f.default(Dr+'[href$="'+W+'"]'),kt=f.default(Sr+'[href$="'+W+'"]'),_t=f.default(Tr+'[href$="'+W+'"]');tt.each(function(Ot,re){f.default(re).parent().addClass("active")}),kt.each(function(Ot,re){f.default(re).addClass("active")}),_t.each(function(Ot,re){f.default(re).addClass("active"),f.default(re).parents(".nav-treeview").prevAll(".nav-link").addClass("active")})},pt._fixHeight=function(W){if(W===void 0&&(W=!1),f.default("body").hasClass(ln)){var tt=f.default(window).height(),kt=f.default(xr).outerHeight();f.default(Je+", "+ro+", "+Er).height(tt-kt),f.default(Bo).height(tt)}else{var _t=parseFloat(f.default(Bo).css("height")),Ot=f.default(xr).outerHeight();W==!0?setTimeout(function(){f.default(Je+", "+ro).height(_t-Ot)},50):f.default(Er).height(_t-Ot)}},ct._jQueryInterface=function(W){var tt=f.default(this).data(No),kt=f.default.extend({},oi,f.default(this).data());if(tt||(tt=new ct(this,kt),f.default(this).data(No,tt)),typeof W=="string"&&/createTab|openTabSidebar|switchTab|removeActiveTab/.test(W)){for(var _t,Ot=arguments.length,re=new Array(Ot>1?Ot-1:0),ge=1;ge<Ot;ge++)re[ge-1]=arguments[ge];(_t=tt)[W].apply(_t,re)}},ct}();f.default(window).on("load",function(){On._jQueryInterface.call(f.default(Oo))}),f.default.fn[bi]=On._jQueryInterface,f.default.fn[bi].Constructor=On,f.default.fn[bi].noConflict=function(){return f.default.fn[bi]=yr,On._jQueryInterface};var Po="Layout",zi="lte.layout",nn=f.default.fn[Po],Bn=".main-header",ji=".main-sidebar",ri=".main-sidebar .sidebar",Fi=".content-wrapper",Si=".control-sidebar-content",Vi='[data-widget="control-sidebar"]',cr=".main-footer",Ir='[data-widget="pushmenu"]',ts=".login-box",Ms=".register-box",la=".preloader",Ii="sidebar-collapse",_n="sidebar-focused",Mi="layout-fixed",Mr="control-sidebar-slide-open",Nr="control-sidebar-open",lr={scrollbarTheme:"os-theme-light",scrollbarAutoHide:"l",panelAutoHeight:!0,panelAutoHeightMode:"min-height",preloadDuration:200,loginRegisterAutoHeight:!0},Ro=function(){function ct(dt,W){this._config=W,this._element=dt}var pt=ct.prototype;return pt.fixLayoutHeight=function(W){W===void 0&&(W=null);var tt=f.default("body"),kt=0;(tt.hasClass(Mr)||tt.hasClass(Nr)||W==="control_sidebar")&&(kt=f.default(Si).outerHeight());var _t={window:f.default(window).height(),header:f.default(Bn).length>0?f.default(Bn).outerHeight():0,footer:f.default(cr).length>0?f.default(cr).outerHeight():0,sidebar:f.default(ri).length>0?f.default(ri).height():0,controlSidebar:kt},Ot=this._max(_t),re=this._config.panelAutoHeight;re===!0&&(re=0);var ge=f.default(Fi);re!==!1&&(Ot===_t.controlSidebar?ge.css(this._config.panelAutoHeightMode,Ot+re):Ot===_t.window?ge.css(this._config.panelAutoHeightMode,Ot+re-_t.header-_t.footer):ge.css(this._config.panelAutoHeightMode,Ot+re-_t.header),this._isFooterFixed()&&ge.css(this._config.panelAutoHeightMode,parseFloat(ge.css(this._config.panelAutoHeightMode))+_t.footer)),tt.hasClass(Mi)&&(typeof f.default.fn.overlayScrollbars<"u"?f.default(ri).overlayScrollbars({className:this._config.scrollbarTheme,sizeAutoCapable:!0,scrollbars:{autoHide:this._config.scrollbarAutoHide,clickScrolling:!0}}):f.default(ri).css("overflow-y","auto"))},pt.fixLoginRegisterHeight=function(){var W=f.default("body"),tt=f.default(ts+", "+Ms);if(tt.length===0)W.css("height","auto"),f.default("html").css("height","auto");else{var kt=tt.height();W.css(this._config.panelAutoHeightMode)!==kt&&W.css(this._config.panelAutoHeightMode,kt)}},pt._init=function(){var W=this;this.fixLayoutHeight(),this._config.loginRegisterAutoHeight===!0?this.fixLoginRegisterHeight():this._config.loginRegisterAutoHeight===parseInt(this._config.loginRegisterAutoHeight,10)&&setInterval(this.fixLoginRegisterHeight,this._config.loginRegisterAutoHeight),f.default(ri).on("collapsed.lte.treeview expanded.lte.treeview",function(){W.fixLayoutHeight()}),f.default(ji).on("mouseenter mouseleave",function(){f.default("body").hasClass(Ii)&&W.fixLayoutHeight()}),f.default(Ir).on("collapsed.lte.pushmenu shown.lte.pushmenu",function(){setTimeout(function(){W.fixLayoutHeight()},300)}),f.default(Vi).on("collapsed.lte.controlsidebar",function(){W.fixLayoutHeight()}).on("expanded.lte.controlsidebar",function(){W.fixLayoutHeight("control_sidebar")}),f.default(window).resize(function(){W.fixLayoutHeight()}),setTimeout(function(){f.default("body.hold-transition").removeClass("hold-transition")},50),setTimeout(function(){var tt=f.default(la);tt&&(tt.css("height",0),setTimeout(function(){tt.children().hide()},200))},this._config.preloadDuration)},pt._max=function(W){var tt=0;return Object.keys(W).forEach(function(kt){W[kt]>tt&&(tt=W[kt])}),tt},pt._isFooterFixed=function(){return f.default(cr).css("position")==="fixed"},ct._jQueryInterface=function(W){return W===void 0&&(W=""),this.each(function(){var tt=f.default(this).data(zi),kt=f.default.extend({},lr,f.default(this).data());tt||(tt=new ct(f.default(this),kt),f.default(this).data(zi,tt)),W==="init"||W===""?tt._init():(W==="fixLayoutHeight"||W==="fixLoginRegisterHeight")&&tt[W]()})},ct}();f.default(window).on("load",function(){Ro._jQueryInterface.call(f.default("body"))}),f.default(ri+" a").on("focusin",function(){f.default(ji).addClass(_n)}).on("focusout",function(){f.default(ji).removeClass(_n)}),f.default.fn[Po]=Ro._jQueryInterface,f.default.fn[Po].Constructor=Ro,f.default.fn[Po].noConflict=function(){return f.default.fn[Po]=nn,Ro._jQueryInterface};var Ni="PushMenu",ao="lte.pushmenu",Ce="."+ao,Or=f.default.fn[Ni],dr="collapsed"+Ce,ur="shown"+Ce,si='[data-widget="pushmenu"]',Hi="body",$n="#sidebar-overlay",Ns=".wrapper",Wn="sidebar-collapse",zo="sidebar-open",Ui="sidebar-is-opening",jo="sidebar-closed",Fo={autoCollapseSize:992,enableRemember:!1,noTransitionAfterReload:!0},co=function(){function ct(dt,W){this._element=dt,this._options=f.default.extend({},Fo,W),f.default($n).length===0&&this._addOverlay(),this._init()}var pt=ct.prototype;return pt.expand=function(){var W=f.default(Hi);this._options.autoCollapseSize&&f.default(window).width()<=this._options.autoCollapseSize&&W.addClass(zo),W.addClass(Ui).removeClass(Wn+" "+jo).delay(50).queue(function(){W.removeClass(Ui),f.default(this).dequeue()}),this._options.enableRemember&&localStorage.setItem("remember"+Ce,zo),f.default(this._element).trigger(f.default.Event(ur))},pt.collapse=function(){var W=f.default(Hi);this._options.autoCollapseSize&&f.default(window).width()<=this._options.autoCollapseSize&&W.removeClass(zo).addClass(jo),W.addClass(Wn),this._options.enableRemember&&localStorage.setItem("remember"+Ce,Wn),f.default(this._element).trigger(f.default.Event(dr))},pt.toggle=function(){f.default(Hi).hasClass(Wn)?this.expand():this.collapse()},pt.autoCollapse=function(W){if(W===void 0&&(W=!1),!!this._options.autoCollapseSize){var tt=f.default(Hi);f.default(window).width()<=this._options.autoCollapseSize?tt.hasClass(zo)||this.collapse():W===!0&&(tt.hasClass(zo)?tt.removeClass(zo):tt.hasClass(jo)&&this.expand())}},pt.remember=function(){if(this._options.enableRemember){var W=f.default("body"),tt=localStorage.getItem("remember"+Ce);tt===Wn?this._options.noTransitionAfterReload?W.addClass("hold-transition").addClass(Wn).delay(50).queue(function(){f.default(this).removeClass("hold-transition"),f.default(this).dequeue()}):W.addClass(Wn):this._options.noTransitionAfterReload?W.addClass("hold-transition").removeClass(Wn).delay(50).queue(function(){f.default(this).removeClass("hold-transition"),f.default(this).dequeue()}):W.removeClass(Wn)}},pt._init=function(){var W=this;this.remember(),this.autoCollapse(),f.default(window).resize(function(){W.autoCollapse(!0)})},pt._addOverlay=function(){var W=this,tt=f.default("<div />",{id:"sidebar-overlay"});tt.on("click",function(){W.collapse()}),f.default(Ns).append(tt)},ct._jQueryInterface=function(W){return this.each(function(){var tt=f.default(this).data(ao),kt=f.default.extend({},Fo,f.default(this).data());tt||(tt=new ct(this,kt),f.default(this).data(ao,tt)),typeof W=="string"&&/collapse|expand|toggle/.test(W)&&tt[W]()})},ct}();f.default(document).on("click",si,function(ct){ct.preventDefault();var pt=ct.currentTarget;f.default(pt).data("widget")!=="pushmenu"&&(pt=f.default(pt).closest(si)),co._jQueryInterface.call(f.default(pt),"toggle")}),f.default(window).on("load",function(){co._jQueryInterface.call(f.default(si))}),f.default.fn[Ni]=co._jQueryInterface,f.default.fn[Ni].Constructor=co,f.default.fn[Ni].noConflict=function(){return f.default.fn[Ni]=Or,co._jQueryInterface};var Vo="SidebarSearch",Os="lte.sidebar-search",d=f.default.fn[Vo],g="sidebar-search-open",w="fa-search",C="fa-times",S="nav-header",M="sidebar-search-results",z="list-group",X='[data-widget="sidebar-search"]',Z=".main-sidebar .nav-sidebar",st=".nav-link",bt=".nav-treeview",wt=X+" .form-control",ft=X+" .btn",St=ft+" i",ee="."+z,le="."+M,ne=le+" ."+z,$e={arrowSign:"->",minLength:3,maxResults:7,highlightName:!0,highlightPath:!1,highlightClass:"text-light",notFoundText:"No element found!"},je=[],dn=function(){function ct(dt,W){this.element=dt,this.options=f.default.extend({},$e,W),this.items=[]}var pt=ct.prototype;return pt.init=function(){var W=this;f.default(X).length!==0&&(f.default(X).next(le).length===0&&f.default(X).after(f.default("<div />",{class:M})),f.default(le).children(ee).length===0&&f.default(le).append(f.default("<div />",{class:z})),this._addNotFound(),f.default(Z).children().each(function(tt,kt){W._parseItem(kt)}))},pt.search=function(){var W=this,tt=f.default(wt).val().toLowerCase();if(tt.length<this.options.minLength){f.default(ne).empty(),this._addNotFound(),this.close();return}var kt=je.filter(function(Ot){return Ot.name.toLowerCase().includes(tt)}),_t=f.default(kt.slice(0,this.options.maxResults));f.default(ne).empty(),_t.length===0?this._addNotFound():_t.each(function(Ot,re){f.default(ne).append(W._renderItem(escape(re.name),escape(re.link),re.path))}),this.open()},pt.open=function(){f.default(X).parent().addClass(g),f.default(St).removeClass(w).addClass(C)},pt.close=function(){f.default(X).parent().removeClass(g),f.default(St).removeClass(C).addClass(w)},pt.toggle=function(){f.default(X).parent().hasClass(g)?this.close():this.open()},pt._parseItem=function(W,tt){var kt=this;if(tt===void 0&&(tt=[]),!f.default(W).hasClass(S)){var _t={},Ot=f.default(W).clone().find("> "+st),re=f.default(W).clone().find("> "+bt),ge=Ot.attr("href"),Xt=Ot.find("p").children().remove().end().text();if(_t.name=this._trimText(Xt),_t.link=ge,_t.path=tt,re.length===0)je.push(_t);else{var Rn=_t.path.concat([_t.name]);re.children().each(function(Ai,is){kt._parseItem(is,Rn)})}}},pt._trimText=function(W){return R.trim(W.replace(/(\r\n|\n|\r)/gm," "))},pt._renderItem=function(W,tt,kt){var _t=this;if(kt=kt.join(" "+this.options.arrowSign+" "),W=unescape(W),this.options.highlightName||this.options.highlightPath){var Ot=f.default(wt).val().toLowerCase(),re=new RegExp(Ot,"gi");this.options.highlightName&&(W=W.replace(re,function(Ai){return'<strong class="'+_t.options.highlightClass+'">'+Ai+"</strong>"})),this.options.highlightPath&&(kt=kt.replace(re,function(Ai){return'<strong class="'+_t.options.highlightClass+'">'+Ai+"</strong>"}))}var ge=f.default("<a/>",{href:tt,class:"list-group-item"}),Xt=f.default("<div/>",{class:"search-title"}).html(W),Rn=f.default("<div/>",{class:"search-path"}).html(kt);return ge.append(Xt).append(Rn),ge},pt._addNotFound=function(){f.default(ne).append(this._renderItem(this.options.notFoundText,"#",[]))},ct._jQueryInterface=function(W){var tt=f.default(this).data(Os);tt||(tt=f.default(this).data());var kt=f.default.extend({},$e,typeof W=="object"?W:tt),_t=new ct(f.default(this),kt);f.default(this).data(Os,typeof W=="object"?W:tt),typeof W=="string"&&/init|toggle|close|open|search/.test(W)?_t[W]():_t.init()},ct}();f.default(document).on("click",ft,function(ct){ct.preventDefault(),dn._jQueryInterface.call(f.default(X),"toggle")}),f.default(document).on("keyup",wt,function(ct){if(ct.keyCode==38){ct.preventDefault(),f.default(ne).children().last().focus();return}if(ct.keyCode==40){ct.preventDefault(),f.default(ne).children().first().focus();return}setTimeout(function(){dn._jQueryInterface.call(f.default(X),"search")},100)}),f.default(document).on("keydown",ne,function(ct){var pt=f.default(":focus");ct.keyCode==38&&(ct.preventDefault(),pt.is(":first-child")?pt.siblings().last().focus():pt.prev().focus()),ct.keyCode==40&&(ct.preventDefault(),pt.is(":last-child")?pt.siblings().first().focus():pt.next().focus())}),f.default(window).on("load",function(){dn._jQueryInterface.call(f.default(X),"init")}),f.default.fn[Vo]=dn._jQueryInterface,f.default.fn[Vo].Constructor=dn,f.default.fn[Vo].noConflict=function(){return f.default.fn[Vo]=d,dn._jQueryInterface};var wn="NavbarSearch",ue="lte.navbar-search",lo=f.default.fn[wn],we='[data-widget="navbar-search"]',Be=".navbar-search-block",Ho=".form-control",uo="navbar-search-open",Ln={resetOnClose:!0,target:Be},ai=function(){function ct(dt,W){this._element=dt,this._config=f.default.extend({},Ln,W)}var pt=ct.prototype;return pt.open=function(){f.default(this._config.target).css("display","flex").hide().fadeIn().addClass(uo),f.default(this._config.target+" "+Ho).focus()},pt.close=function(){f.default(this._config.target).fadeOut().removeClass(uo),this._config.resetOnClose&&f.default(this._config.target+" "+Ho).val("")},pt.toggle=function(){f.default(this._config.target).hasClass(uo)?this.close():this.open()},ct._jQueryInterface=function(W){return this.each(function(){var tt=f.default(this).data(ue),kt=f.default.extend({},Ln,f.default(this).data());if(tt||(tt=new ct(this,kt),f.default(this).data(ue,tt)),!/toggle|close|open/.test(W))throw new Error("Undefined method "+W);tt[W]()})},ct}();f.default(document).on("click",we,function(ct){ct.preventDefault();var pt=f.default(ct.currentTarget);pt.data("widget")!=="navbar-search"&&(pt=pt.closest(we)),ai._jQueryInterface.call(pt,"toggle")}),f.default.fn[wn]=ai._jQueryInterface,f.default.fn[wn].Constructor=ai,f.default.fn[wn].noConflict=function(){return f.default.fn[wn]=lo,ai._jQueryInterface};var Ge="Toasts",qn="lte.toasts",un="."+qn,Pn=f.default.fn[Ge],$i="init"+un,Xe="created"+un,ci="removed"+un,da="#toastsContainerTopRight",hr="#toastsContainerTopLeft",Bs="#toastsContainerBottomRight",ye="#toastsContainerBottomLeft",Gn="toasts-top-right",on="toasts-top-left",Uo="toasts-bottom-right",ua="toasts-bottom-left",Oi="topRight",An="topLeft",Wi="bottomRight",Br="bottomLeft",qi={position:Oi,fixed:!0,autohide:!1,autoremove:!0,delay:1e3,fade:!0,icon:null,image:null,imageAlt:null,imageHeight:"25px",title:null,subtitle:null,close:!0,body:null,class:null},ho=function(){function ct(dt,W){this._config=W,this._prepareContainer(),f.default("body").trigger(f.default.Event($i))}var pt=ct.prototype;return pt.create=function(){var W=f.default('<div class="toast" role="alert" aria-live="assertive" aria-atomic="true"/>');W.data("autohide",this._config.autohide),W.data("animation",this._config.fade),this._config.class&&W.addClass(this._config.class),this._config.delay&&this._config.delay!=500&&W.data("delay",this._config.delay);var tt=f.default('<div class="toast-header">');if(this._config.image!=null){var kt=f.default("<img />").addClass("rounded mr-2").attr("src",this._config.image).attr("alt",this._config.imageAlt);this._config.imageHeight!=null&&kt.height(this._config.imageHeight).width("auto"),tt.append(kt)}if(this._config.icon!=null&&tt.append(f.default("<i />").addClass("mr-2").addClass(this._config.icon)),this._config.title!=null&&tt.append(f.default("<strong />").addClass("mr-auto").html(this._config.title)),this._config.subtitle!=null&&tt.append(f.default("<small />").html(this._config.subtitle)),this._config.close==!0){var _t=f.default('<button data-dismiss="toast" />').attr("type","button").addClass("ml-2 mb-1 close").attr("aria-label","Close").append('<span aria-hidden="true">&times;</span>');this._config.title==null&&_t.toggleClass("ml-2 ml-auto"),tt.append(_t)}W.append(tt),this._config.body!=null&&W.append(f.default('<div class="toast-body" />').html(this._config.body)),f.default(this._getContainerId()).prepend(W);var Ot=f.default("body");Ot.trigger(f.default.Event(Xe)),W.toast("show"),this._config.autoremove&&W.on("hidden.bs.toast",function(){f.default(this).delay(200).remove(),Ot.trigger(f.default.Event(ci))})},pt._getContainerId=function(){if(this._config.position==Oi)return da;if(this._config.position==An)return hr;if(this._config.position==Wi)return Bs;if(this._config.position==Br)return ye},pt._prepareContainer=function(){if(f.default(this._getContainerId()).length===0){var W=f.default("<div />").attr("id",this._getContainerId().replace("#",""));this._config.position==Oi?W.addClass(Gn):this._config.position==An?W.addClass(on):this._config.position==Wi?W.addClass(Uo):this._config.position==Br&&W.addClass(ua),f.default("body").append(W)}this._config.fixed?f.default(this._getContainerId()).addClass("fixed"):f.default(this._getContainerId()).removeClass("fixed")},ct._jQueryInterface=function(W,tt){return this.each(function(){var kt=f.default.extend({},qi,tt),_t=new ct(f.default(this),kt);W==="create"&&_t[W]()})},ct}();f.default.fn[Ge]=ho._jQueryInterface,f.default.fn[Ge].Constructor=ho,f.default.fn[Ge].noConflict=function(){return f.default.fn[Ge]=Pn,ho._jQueryInterface};var _i="TodoList",$o="lte.todolist",Wo=f.default.fn[_i],es='[data-widget="todo-list"]',ns="done",Lr={onCheck:function(pt){return pt},onUnCheck:function(pt){return pt}},wi=function(){function ct(dt,W){this._config=W,this._element=dt,this._init()}var pt=ct.prototype;return pt.toggle=function(W){if(W.parents("li").toggleClass(ns),!f.default(W).prop("checked")){this.unCheck(f.default(W));return}this.check(W)},pt.check=function(W){this._config.onCheck.call(W)},pt.unCheck=function(W){this._config.onUnCheck.call(W)},pt._init=function(){var W=this,tt=this._element;tt.find("input:checkbox:checked").parents("li").toggleClass(ns),tt.on("change","input:checkbox",function(kt){W.toggle(f.default(kt.target))})},ct._jQueryInterface=function(W){return this.each(function(){var tt=f.default(this).data($o);tt||(tt=f.default(this).data());var kt=f.default.extend({},Lr,typeof W=="object"?W:tt),_t=new ct(f.default(this),kt);f.default(this).data($o,typeof W=="object"?W:tt),W==="init"&&_t[W]()})},ct}();f.default(window).on("load",function(){wi._jQueryInterface.call(f.default(es))}),f.default.fn[_i]=wi._jQueryInterface,f.default.fn[_i].Constructor=wi,f.default.fn[_i].noConflict=function(){return f.default.fn[_i]=Wo,wi._jQueryInterface};var Gi="Treeview",Pr="lte.treeview",Ki="."+Pr,Ls=f.default.fn[Gi],K="expanded"+Ki,ot="collapsed"+Ki,ht="load"+Ki,gt=".nav-item",At=".nav-link",Ct=".nav-treeview",jt=".menu-open",$t='[data-widget="treeview"]',Rt="menu-open",de="menu-is-opening",Jt="sidebar-collapse",Gt={trigger:$t+" "+At,animationSpeed:300,accordion:!0,expandSidebar:!1,sidebarButtonSelector:'[data-widget="pushmenu"]'},qt=function(){function ct(dt,W){this._config=W,this._element=dt}var pt=ct.prototype;return pt.init=function(){f.default(""+gt+jt+" "+Ct+jt).css("display","block"),this._setupListeners()},pt.expand=function(W,tt){var kt=this,_t=f.default.Event(K);if(this._config.accordion){var Ot=tt.siblings(jt).first(),re=Ot.find(Ct).first();this.collapse(re,Ot)}tt.addClass(de),W.stop().slideDown(this._config.animationSpeed,function(){tt.addClass(Rt),f.default(kt._element).trigger(_t)}),this._config.expandSidebar&&this._expandSidebar()},pt.collapse=function(W,tt){var kt=this,_t=f.default.Event(ot);tt.removeClass(de+" "+Rt),W.stop().slideUp(this._config.animationSpeed,function(){f.default(kt._element).trigger(_t),W.find(jt+" > "+Ct).slideUp(),W.find(jt).removeClass(Rt)})},pt.toggle=function(W){var tt=f.default(W.currentTarget),kt=tt.parent(),_t=kt.find("> "+Ct);if(!(!_t.is(Ct)&&(kt.is(gt)||(_t=kt.parent().find("> "+Ct)),!_t.is(Ct)))){W.preventDefault();var Ot=tt.parents(gt).first(),re=Ot.hasClass(Rt);re?this.collapse(f.default(_t),Ot):this.expand(f.default(_t),Ot)}},pt._setupListeners=function(){var W=this,tt=this._element.attr("id")!==void 0?"#"+this._element.attr("id"):"";f.default(document).on("click",""+tt+this._config.trigger,function(kt){W.toggle(kt)})},pt._expandSidebar=function(){f.default("body").hasClass(Jt)&&f.default(this._config.sidebarButtonSelector).PushMenu("expand")},ct._jQueryInterface=function(W){return this.each(function(){var tt=f.default(this).data(Pr),kt=f.default.extend({},Gt,f.default(this).data());tt||(tt=new ct(f.default(this),kt),f.default(this).data(Pr,tt)),W==="init"&&tt[W]()})},ct}();f.default(window).on(ht,function(){f.default($t).each(function(){qt._jQueryInterface.call(f.default(this),"init")})}),f.default.fn[Gi]=qt._jQueryInterface,f.default.fn[Gi].Constructor=qt,f.default.fn[Gi].noConflict=function(){return f.default.fn[Gi]=Ls,qt._jQueryInterface},A.CardRefresh=at,A.CardWidget=Ye,A.ControlSidebar=gi,A.DirectChat=Vn,A.Dropdown=ni,A.ExpandableTable=Qe,A.Fullscreen=bn,A.IFrame=On,A.Layout=Ro,A.NavbarSearch=ai,A.PushMenu=co,A.SidebarSearch=dn,A.Toasts=ho,A.TodoList=wi,A.Treeview=qt,Object.defineProperty(A,"__esModule",{value:!0})})})(pC,pC.exports);var gC={exports:{}};/*!
  * Bootstrap v4.6.2 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */(function(E,h){(function(A,R){R(h,k0)})(Xs,function(A,R){function V(T){return T&&typeof T=="object"&&"default"in T?T:{default:T}}var f=V(R);function L(T,N){for(var O=0;O<N.length;O++){var b=N[O];b.enumerable=b.enumerable||!1,b.configurable=!0,"value"in b&&(b.writable=!0),Object.defineProperty(T,b.key,b)}}function B(T,N,O){return N&&L(T.prototype,N),O&&L(T,O),Object.defineProperty(T,"prototype",{writable:!1}),T}function _(){return _=Object.assign?Object.assign.bind():function(T){for(var N=1;N<arguments.length;N++){var O=arguments[N];for(var b in O)Object.prototype.hasOwnProperty.call(O,b)&&(T[b]=O[b])}return T},_.apply(this,arguments)}function q(T,N){T.prototype=Object.create(N.prototype),T.prototype.constructor=T,U(T,N)}function U(T,N){return U=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(b,D){return b.__proto__=D,b},U(T,N)}var H="transitionend",x=1e6,P=1e3;function Y(T){return T===null||typeof T>"u"?""+T:{}.toString.call(T).match(/\s([a-z]+)/i)[1].toLowerCase()}function Q(){return{bindType:H,delegateType:H,handle:function(N){if(f.default(N.target).is(this))return N.handleObj.handler.apply(this,arguments)}}}function it(T){var N=this,O=!1;return f.default(this).one(rt.TRANSITION_END,function(){O=!0}),setTimeout(function(){O||rt.triggerTransitionEnd(N)},T),this}function at(){f.default.fn.emulateTransitionEnd=it,f.default.event.special[rt.TRANSITION_END]=Q()}var rt={TRANSITION_END:"bsTransitionEnd",getUID:function(N){do N+=~~(Math.random()*x);while(document.getElementById(N));return N},getSelectorFromElement:function(N){var O=N.getAttribute("data-target");if(!O||O==="#"){var b=N.getAttribute("href");O=b&&b!=="#"?b.trim():""}try{return document.querySelector(O)?O:null}catch{return null}},getTransitionDurationFromElement:function(N){if(!N)return 0;var O=f.default(N).css("transition-duration"),b=f.default(N).css("transition-delay"),D=parseFloat(O),j=parseFloat(b);return!D&&!j?0:(O=O.split(",")[0],b=b.split(",")[0],(parseFloat(O)+parseFloat(b))*P)},reflow:function(N){return N.offsetHeight},triggerTransitionEnd:function(N){f.default(N).trigger(H)},supportsTransitionEnd:function(){return!!H},isElement:function(N){return(N[0]||N).nodeType},typeCheckConfig:function(N,O,b){for(var D in b)if(Object.prototype.hasOwnProperty.call(b,D)){var j=b[D],J=O[D],nt=J&&rt.isElement(J)?"element":Y(J);if(!new RegExp(j).test(nt))throw new Error(N.toUpperCase()+": "+('Option "'+D+'" provided type "'+nt+'" ')+('but expected type "'+j+'".'))}},findShadowRoot:function(N){if(!document.documentElement.attachShadow)return null;if(typeof N.getRootNode=="function"){var O=N.getRootNode();return O instanceof ShadowRoot?O:null}return N instanceof ShadowRoot?N:N.parentNode?rt.findShadowRoot(N.parentNode):null},jQueryDetection:function(){if(typeof f.default>"u")throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");var N=f.default.fn.jquery.split(" ")[0].split("."),O=1,b=2,D=9,j=1,J=4;if(N[0]<b&&N[1]<D||N[0]===O&&N[1]===D&&N[2]<j||N[0]>=J)throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")}};rt.jQueryDetection(),at();var yt="alert",xt="4.6.2",Ht="bs.alert",Kt="."+Ht,m=".data-api",It=f.default.fn[yt],Bt="alert",te="fade",ae="show",me="close"+Kt,Ut="closed"+Kt,Se="click"+Kt+m,He='[data-dismiss="alert"]',ke=function(){function T(O){this._element=O}var N=T.prototype;return N.close=function(b){var D=this._element;b&&(D=this._getRootElement(b));var j=this._triggerCloseEvent(D);j.isDefaultPrevented()||this._removeElement(D)},N.dispose=function(){f.default.removeData(this._element,Ht),this._element=null},N._getRootElement=function(b){var D=rt.getSelectorFromElement(b),j=!1;return D&&(j=document.querySelector(D)),j||(j=f.default(b).closest("."+Bt)[0]),j},N._triggerCloseEvent=function(b){var D=f.default.Event(me);return f.default(b).trigger(D),D},N._removeElement=function(b){var D=this;if(f.default(b).removeClass(ae),!f.default(b).hasClass(te)){this._destroyElement(b);return}var j=rt.getTransitionDurationFromElement(b);f.default(b).one(rt.TRANSITION_END,function(J){return D._destroyElement(b,J)}).emulateTransitionEnd(j)},N._destroyElement=function(b){f.default(b).detach().trigger(Ut).remove()},T._jQueryInterface=function(b){return this.each(function(){var D=f.default(this),j=D.data(Ht);j||(j=new T(this),D.data(Ht,j)),b==="close"&&j[b](this)})},T._handleDismiss=function(b){return function(D){D&&D.preventDefault(),b.close(this)}},B(T,null,[{key:"VERSION",get:function(){return xt}}]),T}();f.default(document).on(Se,He,ke._handleDismiss(new ke)),f.default.fn[yt]=ke._jQueryInterface,f.default.fn[yt].Constructor=ke,f.default.fn[yt].noConflict=function(){return f.default.fn[yt]=It,ke._jQueryInterface};var ve="button",fe="4.6.2",qe="bs.button",Fn="."+qe,Qn=".data-api",Zn=f.default.fn[ve],Ke="active",Jn="btn",Ye="focus",be="click"+Fn+Qn,Xn="focus"+Fn+Qn+" "+("blur"+Fn+Qn),Sn="load"+Fn+Qn,fi='[data-toggle^="button"]',en='[data-toggle="buttons"]',yo='[data-toggle="button"]',ti='[data-toggle="buttons"] .btn',pe='input:not([type="hidden"])',no=".active",Eo=".btn",In=function(){function T(O){this._element=O,this.shouldAvoidTriggerChange=!1}var N=T.prototype;return N.toggle=function(){var b=!0,D=!0,j=f.default(this._element).closest(en)[0];if(j){var J=this._element.querySelector(pe);if(J){if(J.type==="radio")if(J.checked&&this._element.classList.contains(Ke))b=!1;else{var nt=j.querySelector(no);nt&&f.default(nt).removeClass(Ke)}b&&((J.type==="checkbox"||J.type==="radio")&&(J.checked=!this._element.classList.contains(Ke)),this.shouldAvoidTriggerChange||f.default(J).trigger("change")),J.focus(),D=!1}}this._element.hasAttribute("disabled")||this._element.classList.contains("disabled")||(D&&this._element.setAttribute("aria-pressed",!this._element.classList.contains(Ke)),b&&f.default(this._element).toggleClass(Ke))},N.dispose=function(){f.default.removeData(this._element,qe),this._element=null},T._jQueryInterface=function(b,D){return this.each(function(){var j=f.default(this),J=j.data(qe);J||(J=new T(this),j.data(qe,J)),J.shouldAvoidTriggerChange=D,b==="toggle"&&J[b]()})},B(T,null,[{key:"VERSION",get:function(){return fe}}]),T}();f.default(document).on(be,fi,function(T){var N=T.target,O=N;if(f.default(N).hasClass(Jn)||(N=f.default(N).closest(Eo)[0]),!N||N.hasAttribute("disabled")||N.classList.contains("disabled"))T.preventDefault();else{var b=N.querySelector(pe);if(b&&(b.hasAttribute("disabled")||b.classList.contains("disabled"))){T.preventDefault();return}(O.tagName==="INPUT"||N.tagName!=="LABEL")&&In._jQueryInterface.call(f.default(N),"toggle",O.tagName==="INPUT")}}).on(Xn,fi,function(T){var N=f.default(T.target).closest(Eo)[0];f.default(N).toggleClass(Ye,/^focus(in)?$/.test(T.type))}),f.default(window).on(Sn,function(){for(var T=[].slice.call(document.querySelectorAll(ti)),N=0,O=T.length;N<O;N++){var b=T[N],D=b.querySelector(pe);D.checked||D.hasAttribute("checked")?b.classList.add(Ke):b.classList.remove(Ke)}T=[].slice.call(document.querySelectorAll(yo));for(var j=0,J=T.length;j<J;j++){var nt=T[j];nt.getAttribute("aria-pressed")==="true"?nt.classList.add(Ke):nt.classList.remove(Ke)}}),f.default.fn[ve]=In._jQueryInterface,f.default.fn[ve].Constructor=In,f.default.fn[ve].noConflict=function(){return f.default.fn[ve]=Zn,In._jQueryInterface};var rn="carousel",sn="4.6.2",ei="bs.carousel",Me="."+ei,Ue=".data-api",Ne=f.default.fn[rn],yi=37,Ei=39,Vt=500,Ie=40,rr="carousel",pi="active",sa="slide",xo="carousel-item-right",xs="carousel-item-left",gi="carousel-item-next",Mn="carousel-item-prev",mi="pointer-event",an="next",cn="prev",pn="left",Kr="right",Nn="slide"+Me,Yr="slid"+Me,Vn="keydown"+Me,xi="mouseenter"+Me,Qr="mouseleave"+Me,Zr="touchstart"+Me,Hn="touchmove"+Me,gn="touchend"+Me,mn="pointerdown"+Me,Ts="pointerup"+Me,To="dragstart"+Me,sr="load"+Me+Ue,Do="click"+Me+Ue,ni=".active",ki=".active.carousel-item",So=".carousel-item",Ds=".carousel-item img",Io=".carousel-item-next, .carousel-item-prev",vr=".carousel-indicators",Ss="[data-slide], [data-slide-to]",aa='[data-ride="carousel"]',Mo={interval:5e3,keyboard:!0,slide:!1,pause:"hover",wrap:!0,touch:!0},Jr={interval:"(number|boolean)",keyboard:"boolean",slide:"(boolean|string)",pause:"(string|boolean)",wrap:"boolean",touch:"boolean"},ii={TOUCH:"touch",PEN:"pen"},Qe=function(){function T(O,b){this._items=null,this._interval=null,this._activeElement=null,this._isPaused=!1,this._isSliding=!1,this.touchTimeout=null,this.touchStartX=0,this.touchDeltaX=0,this._config=this._getConfig(b),this._element=O,this._indicatorsElement=this._element.querySelector(vr),this._touchSupported="ontouchstart"in document.documentElement||navigator.maxTouchPoints>0,this._pointerEvent=!!(window.PointerEvent||window.MSPointerEvent),this._addEventListeners()}var N=T.prototype;return N.next=function(){this._isSliding||this._slide(an)},N.nextWhenVisible=function(){var b=f.default(this._element);!document.hidden&&b.is(":visible")&&b.css("visibility")!=="hidden"&&this.next()},N.prev=function(){this._isSliding||this._slide(cn)},N.pause=function(b){b||(this._isPaused=!0),this._element.querySelector(Io)&&(rt.triggerTransitionEnd(this._element),this.cycle(!0)),clearInterval(this._interval),this._interval=null},N.cycle=function(b){b||(this._isPaused=!1),this._interval&&(clearInterval(this._interval),this._interval=null),this._config.interval&&!this._isPaused&&(this._updateInterval(),this._interval=setInterval((document.visibilityState?this.nextWhenVisible:this.next).bind(this),this._config.interval))},N.to=function(b){var D=this;this._activeElement=this._element.querySelector(ki);var j=this._getItemIndex(this._activeElement);if(!(b>this._items.length-1||b<0)){if(this._isSliding){f.default(this._element).one(Yr,function(){return D.to(b)});return}if(j===b){this.pause(),this.cycle();return}var J=b>j?an:cn;this._slide(J,this._items[b])}},N.dispose=function(){f.default(this._element).off(Me),f.default.removeData(this._element,ei),this._items=null,this._config=null,this._element=null,this._interval=null,this._isPaused=null,this._isSliding=null,this._activeElement=null,this._indicatorsElement=null},N._getConfig=function(b){return b=_({},Mo,b),rt.typeCheckConfig(rn,b,Jr),b},N._handleSwipe=function(){var b=Math.abs(this.touchDeltaX);if(!(b<=Ie)){var D=b/this.touchDeltaX;this.touchDeltaX=0,D>0&&this.prev(),D<0&&this.next()}},N._addEventListeners=function(){var b=this;this._config.keyboard&&f.default(this._element).on(Vn,function(D){return b._keydown(D)}),this._config.pause==="hover"&&f.default(this._element).on(xi,function(D){return b.pause(D)}).on(Qr,function(D){return b.cycle(D)}),this._config.touch&&this._addTouchEventListeners()},N._addTouchEventListeners=function(){var b=this;if(this._touchSupported){var D=function(lt){b._pointerEvent&&ii[lt.originalEvent.pointerType.toUpperCase()]?b.touchStartX=lt.originalEvent.clientX:b._pointerEvent||(b.touchStartX=lt.originalEvent.touches[0].clientX)},j=function(lt){b.touchDeltaX=lt.originalEvent.touches&&lt.originalEvent.touches.length>1?0:lt.originalEvent.touches[0].clientX-b.touchStartX},J=function(lt){b._pointerEvent&&ii[lt.originalEvent.pointerType.toUpperCase()]&&(b.touchDeltaX=lt.originalEvent.clientX-b.touchStartX),b._handleSwipe(),b._config.pause==="hover"&&(b.pause(),b.touchTimeout&&clearTimeout(b.touchTimeout),b.touchTimeout=setTimeout(function(Dt){return b.cycle(Dt)},Vt+b._config.interval))};f.default(this._element.querySelectorAll(Ds)).on(To,function(nt){return nt.preventDefault()}),this._pointerEvent?(f.default(this._element).on(mn,function(nt){return D(nt)}),f.default(this._element).on(Ts,function(nt){return J(nt)}),this._element.classList.add(mi)):(f.default(this._element).on(Zr,function(nt){return D(nt)}),f.default(this._element).on(Hn,function(nt){return j(nt)}),f.default(this._element).on(gn,function(nt){return J(nt)}))}},N._keydown=function(b){if(!/input|textarea/i.test(b.target.tagName))switch(b.which){case yi:b.preventDefault(),this.prev();break;case Ei:b.preventDefault(),this.next();break}},N._getItemIndex=function(b){return this._items=b&&b.parentNode?[].slice.call(b.parentNode.querySelectorAll(So)):[],this._items.indexOf(b)},N._getItemByDirection=function(b,D){var j=b===an,J=b===cn,nt=this._getItemIndex(D),lt=this._items.length-1,Dt=J&&nt===0||j&&nt===lt;if(Dt&&!this._config.wrap)return D;var Pt=b===cn?-1:1,Nt=(nt+Pt)%this._items.length;return Nt===-1?this._items[this._items.length-1]:this._items[Nt]},N._triggerSlideEvent=function(b,D){var j=this._getItemIndex(b),J=this._getItemIndex(this._element.querySelector(ki)),nt=f.default.Event(Nn,{relatedTarget:b,direction:D,from:J,to:j});return f.default(this._element).trigger(nt),nt},N._setActiveIndicatorElement=function(b){if(this._indicatorsElement){var D=[].slice.call(this._indicatorsElement.querySelectorAll(ni));f.default(D).removeClass(pi);var j=this._indicatorsElement.children[this._getItemIndex(b)];j&&f.default(j).addClass(pi)}},N._updateInterval=function(){var b=this._activeElement||this._element.querySelector(ki);if(b){var D=parseInt(b.getAttribute("data-interval"),10);D?(this._config.defaultInterval=this._config.defaultInterval||this._config.interval,this._config.interval=D):this._config.interval=this._config.defaultInterval||this._config.interval}},N._slide=function(b,D){var j=this,J=this._element.querySelector(ki),nt=this._getItemIndex(J),lt=D||J&&this._getItemByDirection(b,J),Dt=this._getItemIndex(lt),Pt=!!this._interval,Nt,Wt,Qt;if(b===an?(Nt=xs,Wt=gi,Qt=pn):(Nt=xo,Wt=Mn,Qt=Kr),lt&&f.default(lt).hasClass(pi)){this._isSliding=!1;return}var Zt=this._triggerSlideEvent(lt,Qt);if(!Zt.isDefaultPrevented()&&!(!J||!lt)){this._isSliding=!0,Pt&&this.pause(),this._setActiveIndicatorElement(lt),this._activeElement=lt;var Oe=f.default.Event(Yr,{relatedTarget:lt,direction:Qt,from:nt,to:Dt});if(f.default(this._element).hasClass(sa)){f.default(lt).addClass(Wt),rt.reflow(lt),f.default(J).addClass(Nt),f.default(lt).addClass(Nt);var Tn=rt.getTransitionDurationFromElement(J);f.default(J).one(rt.TRANSITION_END,function(){f.default(lt).removeClass(Nt+" "+Wt).addClass(pi),f.default(J).removeClass(pi+" "+Wt+" "+Nt),j._isSliding=!1,setTimeout(function(){return f.default(j._element).trigger(Oe)},0)}).emulateTransitionEnd(Tn)}else f.default(J).removeClass(pi),f.default(lt).addClass(pi),this._isSliding=!1,f.default(this._element).trigger(Oe);Pt&&this.cycle()}},T._jQueryInterface=function(b){return this.each(function(){var D=f.default(this).data(ei),j=_({},Mo,f.default(this).data());typeof b=="object"&&(j=_({},j,b));var J=typeof b=="string"?b:j.slide;if(D||(D=new T(this,j),f.default(this).data(ei,D)),typeof b=="number")D.to(b);else if(typeof J=="string"){if(typeof D[J]>"u")throw new TypeError('No method named "'+J+'"');D[J]()}else j.interval&&j.ride&&(D.pause(),D.cycle())})},T._dataApiClickHandler=function(b){var D=rt.getSelectorFromElement(this);if(D){var j=f.default(D)[0];if(!(!j||!f.default(j).hasClass(rr))){var J=_({},f.default(j).data(),f.default(this).data()),nt=this.getAttribute("data-slide-to");nt&&(J.interval=!1),T._jQueryInterface.call(f.default(j),J),nt&&f.default(j).data(ei).to(nt),b.preventDefault()}}},B(T,null,[{key:"VERSION",get:function(){return sn}},{key:"Default",get:function(){return Mo}}]),T}();f.default(document).on(Do,Ss,Qe._dataApiClickHandler),f.default(window).on(sr,function(){for(var T=[].slice.call(document.querySelectorAll(aa)),N=0,O=T.length;N<O;N++){var b=f.default(T[N]);Qe._jQueryInterface.call(b,b.data())}}),f.default.fn[rn]=Qe._jQueryInterface,f.default.fn[rn].Constructor=Qe,f.default.fn[rn].noConflict=function(){return f.default.fn[rn]=Ne,Qe._jQueryInterface};var Un="collapse",Cr="4.6.2",Ti="bs.collapse",kn="."+Ti,Xr=".data-api",Is=f.default.fn[Un],bn="show",bi="collapse",No="collapsing",yr="collapsed",Oo="width",ca="height",Di="show"+kn,ar="shown"+kn,io="hide"+kn,Bo="hidden"+kn,Er="click"+kn+Xr,xr=".show, .collapsing",Pi='[data-toggle="collapse"]',Ze={toggle:!0,parent:""},oo={toggle:"boolean",parent:"(string|element)"},yn=function(){function T(O,b){this._isTransitioning=!1,this._element=O,this._config=this._getConfig(b),this._triggerArray=[].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#'+O.id+'"],'+('[data-toggle="collapse"][data-target="#'+O.id+'"]')));for(var D=[].slice.call(document.querySelectorAll(Pi)),j=0,J=D.length;j<J;j++){var nt=D[j],lt=rt.getSelectorFromElement(nt),Dt=[].slice.call(document.querySelectorAll(lt)).filter(function(Pt){return Pt===O});lt!==null&&Dt.length>0&&(this._selector=lt,this._triggerArray.push(nt))}this._parent=this._config.parent?this._getParent():null,this._config.parent||this._addAriaAndCollapsedClass(this._element,this._triggerArray),this._config.toggle&&this.toggle()}var N=T.prototype;return N.toggle=function(){f.default(this._element).hasClass(bn)?this.hide():this.show()},N.show=function(){var b=this;if(!(this._isTransitioning||f.default(this._element).hasClass(bn))){var D,j;if(this._parent&&(D=[].slice.call(this._parent.querySelectorAll(xr)).filter(function(Wt){return typeof b._config.parent=="string"?Wt.getAttribute("data-parent")===b._config.parent:Wt.classList.contains(bi)}),D.length===0&&(D=null)),!(D&&(j=f.default(D).not(this._selector).data(Ti),j&&j._isTransitioning))){var J=f.default.Event(Di);if(f.default(this._element).trigger(J),!J.isDefaultPrevented()){D&&(T._jQueryInterface.call(f.default(D).not(this._selector),"hide"),j||f.default(D).data(Ti,null));var nt=this._getDimension();f.default(this._element).removeClass(bi).addClass(No),this._element.style[nt]=0,this._triggerArray.length&&f.default(this._triggerArray).removeClass(yr).attr("aria-expanded",!0),this.setTransitioning(!0);var lt=function(){f.default(b._element).removeClass(No).addClass(bi+" "+bn),b._element.style[nt]="",b.setTransitioning(!1),f.default(b._element).trigger(ar)},Dt=nt[0].toUpperCase()+nt.slice(1),Pt="scroll"+Dt,Nt=rt.getTransitionDurationFromElement(this._element);f.default(this._element).one(rt.TRANSITION_END,lt).emulateTransitionEnd(Nt),this._element.style[nt]=this._element[Pt]+"px"}}}},N.hide=function(){var b=this;if(!(this._isTransitioning||!f.default(this._element).hasClass(bn))){var D=f.default.Event(io);if(f.default(this._element).trigger(D),!D.isDefaultPrevented()){var j=this._getDimension();this._element.style[j]=this._element.getBoundingClientRect()[j]+"px",rt.reflow(this._element),f.default(this._element).addClass(No).removeClass(bi+" "+bn);var J=this._triggerArray.length;if(J>0)for(var nt=0;nt<J;nt++){var lt=this._triggerArray[nt],Dt=rt.getSelectorFromElement(lt);if(Dt!==null){var Pt=f.default([].slice.call(document.querySelectorAll(Dt)));Pt.hasClass(bn)||f.default(lt).addClass(yr).attr("aria-expanded",!1)}}this.setTransitioning(!0);var Nt=function(){b.setTransitioning(!1),f.default(b._element).removeClass(No).addClass(bi).trigger(Bo)};this._element.style[j]="";var Wt=rt.getTransitionDurationFromElement(this._element);f.default(this._element).one(rt.TRANSITION_END,Nt).emulateTransitionEnd(Wt)}}},N.setTransitioning=function(b){this._isTransitioning=b},N.dispose=function(){f.default.removeData(this._element,Ti),this._config=null,this._parent=null,this._element=null,this._triggerArray=null,this._isTransitioning=null},N._getConfig=function(b){return b=_({},Ze,b),b.toggle=!!b.toggle,rt.typeCheckConfig(Un,b,oo),b},N._getDimension=function(){var b=f.default(this._element).hasClass(Oo);return b?Oo:ca},N._getParent=function(){var b=this,D;rt.isElement(this._config.parent)?(D=this._config.parent,typeof this._config.parent.jquery<"u"&&(D=this._config.parent[0])):D=document.querySelector(this._config.parent);var j='[data-toggle="collapse"][data-parent="'+this._config.parent+'"]',J=[].slice.call(D.querySelectorAll(j));return f.default(J).each(function(nt,lt){b._addAriaAndCollapsedClass(T._getTargetFromElement(lt),[lt])}),D},N._addAriaAndCollapsedClass=function(b,D){var j=f.default(b).hasClass(bn);D.length&&f.default(D).toggleClass(yr,!j).attr("aria-expanded",j)},T._getTargetFromElement=function(b){var D=rt.getSelectorFromElement(b);return D?document.querySelector(D):null},T._jQueryInterface=function(b){return this.each(function(){var D=f.default(this),j=D.data(Ti),J=_({},Ze,D.data(),typeof b=="object"&&b?b:{});if(!j&&J.toggle&&typeof b=="string"&&/show|hide/.test(b)&&(J.toggle=!1),j||(j=new T(this,J),D.data(Ti,j)),typeof b=="string"){if(typeof j[b]>"u")throw new TypeError('No method named "'+b+'"');j[b]()}})},B(T,null,[{key:"VERSION",get:function(){return Cr}},{key:"Default",get:function(){return Ze}}]),T}();f.default(document).on(Er,Pi,function(T){T.currentTarget.tagName==="A"&&T.preventDefault();var N=f.default(this),O=rt.getSelectorFromElement(this),b=[].slice.call(document.querySelectorAll(O));f.default(b).each(function(){var D=f.default(this),j=D.data(Ti),J=j?"toggle":N.data();yn._jQueryInterface.call(D,J)})}),f.default.fn[Un]=yn._jQueryInterface,f.default.fn[Un].Constructor=yn,f.default.fn[Un].noConflict=function(){return f.default.fn[Un]=Is,yn._jQueryInterface};/**!
 * @fileOverview Kickass library to create and place poppers near their reference elements.
 * @version 1.16.1
 * @license
 * Copyright (c) 2016 Federico Zivolo and contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */var Je=typeof window<"u"&&typeof document<"u"&&typeof navigator<"u",ro=function(){for(var T=["Edge","Trident","Firefox"],N=0;N<T.length;N+=1)if(Je&&navigator.userAgent.indexOf(T[N])>=0)return 1;return 0}();function Lo(T){var N=!1;return function(){N||(N=!0,window.Promise.resolve().then(function(){N=!1,T()}))}}function Tr(T){var N=!1;return function(){N||(N=!0,setTimeout(function(){N=!1,T()},ro))}}var so=Je&&window.Promise,Dr=so?Lo:Tr;function Sr(T){var N={};return T&&N.toString.call(T)==="[object Function]"}function Ri(T,N){if(T.nodeType!==1)return[];var O=T.ownerDocument.defaultView,b=O.getComputedStyle(T,null);return N?b[N]:b}function ln(T){return T.nodeName==="HTML"?T:T.parentNode||T.host}function oi(T){if(!T)return document.body;switch(T.nodeName){case"HTML":case"BODY":return T.ownerDocument.body;case"#document":return T.body}var N=Ri(T),O=N.overflow,b=N.overflowX,D=N.overflowY;return/(auto|scroll|overlay)/.test(O+D+b)?T:oi(ln(T))}function On(T){return T&&T.referenceNode?T.referenceNode:T}var Po=Je&&!!(window.MSInputMethodContext&&document.documentMode),zi=Je&&/MSIE 10/.test(navigator.userAgent);function nn(T){return T===11?Po:T===10?zi:Po||zi}function Bn(T){if(!T)return document.documentElement;for(var N=nn(10)?document.body:null,O=T.offsetParent||null;O===N&&T.nextElementSibling;)O=(T=T.nextElementSibling).offsetParent;var b=O&&O.nodeName;return!b||b==="BODY"||b==="HTML"?T?T.ownerDocument.documentElement:document.documentElement:["TH","TD","TABLE"].indexOf(O.nodeName)!==-1&&Ri(O,"position")==="static"?Bn(O):O}function ji(T){var N=T.nodeName;return N==="BODY"?!1:N==="HTML"||Bn(T.firstElementChild)===T}function ri(T){return T.parentNode!==null?ri(T.parentNode):T}function Fi(T,N){if(!T||!T.nodeType||!N||!N.nodeType)return document.documentElement;var O=T.compareDocumentPosition(N)&Node.DOCUMENT_POSITION_FOLLOWING,b=O?T:N,D=O?N:T,j=document.createRange();j.setStart(b,0),j.setEnd(D,0);var J=j.commonAncestorContainer;if(T!==J&&N!==J||b.contains(D))return ji(J)?J:Bn(J);var nt=ri(T);return nt.host?Fi(nt.host,N):Fi(T,ri(N).host)}function Si(T){var N=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"top",O=N==="top"?"scrollTop":"scrollLeft",b=T.nodeName;if(b==="BODY"||b==="HTML"){var D=T.ownerDocument.documentElement,j=T.ownerDocument.scrollingElement||D;return j[O]}return T[O]}function Vi(T,N){var O=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,b=Si(N,"top"),D=Si(N,"left"),j=O?-1:1;return T.top+=b*j,T.bottom+=b*j,T.left+=D*j,T.right+=D*j,T}function cr(T,N){var O=N==="x"?"Left":"Top",b=O==="Left"?"Right":"Bottom";return parseFloat(T["border"+O+"Width"])+parseFloat(T["border"+b+"Width"])}function Ir(T,N,O,b){return Math.max(N["offset"+T],N["scroll"+T],O["client"+T],O["offset"+T],O["scroll"+T],nn(10)?parseInt(O["offset"+T])+parseInt(b["margin"+(T==="Height"?"Top":"Left")])+parseInt(b["margin"+(T==="Height"?"Bottom":"Right")]):0)}function ts(T){var N=T.body,O=T.documentElement,b=nn(10)&&getComputedStyle(O);return{height:Ir("Height",N,O,b),width:Ir("Width",N,O,b)}}var Ms=function(T,N){if(!(T instanceof N))throw new TypeError("Cannot call a class as a function")},la=function(){function T(N,O){for(var b=0;b<O.length;b++){var D=O[b];D.enumerable=D.enumerable||!1,D.configurable=!0,"value"in D&&(D.writable=!0),Object.defineProperty(N,D.key,D)}}return function(N,O,b){return O&&T(N.prototype,O),b&&T(N,b),N}}(),Ii=function(T,N,O){return N in T?Object.defineProperty(T,N,{value:O,enumerable:!0,configurable:!0,writable:!0}):T[N]=O,T},_n=Object.assign||function(T){for(var N=1;N<arguments.length;N++){var O=arguments[N];for(var b in O)Object.prototype.hasOwnProperty.call(O,b)&&(T[b]=O[b])}return T};function Mi(T){return _n({},T,{right:T.left+T.width,bottom:T.top+T.height})}function Mr(T){var N={};try{if(nn(10)){N=T.getBoundingClientRect();var O=Si(T,"top"),b=Si(T,"left");N.top+=O,N.left+=b,N.bottom+=O,N.right+=b}else N=T.getBoundingClientRect()}catch{}var D={left:N.left,top:N.top,width:N.right-N.left,height:N.bottom-N.top},j=T.nodeName==="HTML"?ts(T.ownerDocument):{},J=j.width||T.clientWidth||D.width,nt=j.height||T.clientHeight||D.height,lt=T.offsetWidth-J,Dt=T.offsetHeight-nt;if(lt||Dt){var Pt=Ri(T);lt-=cr(Pt,"x"),Dt-=cr(Pt,"y"),D.width-=lt,D.height-=Dt}return Mi(D)}function Nr(T,N){var O=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,b=nn(10),D=N.nodeName==="HTML",j=Mr(T),J=Mr(N),nt=oi(T),lt=Ri(N),Dt=parseFloat(lt.borderTopWidth),Pt=parseFloat(lt.borderLeftWidth);O&&D&&(J.top=Math.max(J.top,0),J.left=Math.max(J.left,0));var Nt=Mi({top:j.top-J.top-Dt,left:j.left-J.left-Pt,width:j.width,height:j.height});if(Nt.marginTop=0,Nt.marginLeft=0,!b&&D){var Wt=parseFloat(lt.marginTop),Qt=parseFloat(lt.marginLeft);Nt.top-=Dt-Wt,Nt.bottom-=Dt-Wt,Nt.left-=Pt-Qt,Nt.right-=Pt-Qt,Nt.marginTop=Wt,Nt.marginLeft=Qt}return(b&&!O?N.contains(nt):N===nt&&nt.nodeName!=="BODY")&&(Nt=Vi(Nt,N)),Nt}function lr(T){var N=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,O=T.ownerDocument.documentElement,b=Nr(T,O),D=Math.max(O.clientWidth,window.innerWidth||0),j=Math.max(O.clientHeight,window.innerHeight||0),J=N?0:Si(O),nt=N?0:Si(O,"left"),lt={top:J-b.top+b.marginTop,left:nt-b.left+b.marginLeft,width:D,height:j};return Mi(lt)}function Ro(T){var N=T.nodeName;if(N==="BODY"||N==="HTML")return!1;if(Ri(T,"position")==="fixed")return!0;var O=ln(T);return O?Ro(O):!1}function Ni(T){if(!T||!T.parentElement||nn())return document.documentElement;for(var N=T.parentElement;N&&Ri(N,"transform")==="none";)N=N.parentElement;return N||document.documentElement}function ao(T,N,O,b){var D=arguments.length>4&&arguments[4]!==void 0?arguments[4]:!1,j={top:0,left:0},J=D?Ni(T):Fi(T,On(N));if(b==="viewport")j=lr(J,D);else{var nt=void 0;b==="scrollParent"?(nt=oi(ln(N)),nt.nodeName==="BODY"&&(nt=T.ownerDocument.documentElement)):b==="window"?nt=T.ownerDocument.documentElement:nt=b;var lt=Nr(nt,J,D);if(nt.nodeName==="HTML"&&!Ro(J)){var Dt=ts(T.ownerDocument),Pt=Dt.height,Nt=Dt.width;j.top+=lt.top-lt.marginTop,j.bottom=Pt+lt.top,j.left+=lt.left-lt.marginLeft,j.right=Nt+lt.left}else j=lt}O=O||0;var Wt=typeof O=="number";return j.left+=Wt?O:O.left||0,j.top+=Wt?O:O.top||0,j.right-=Wt?O:O.right||0,j.bottom-=Wt?O:O.bottom||0,j}function Ce(T){var N=T.width,O=T.height;return N*O}function Or(T,N,O,b,D){var j=arguments.length>5&&arguments[5]!==void 0?arguments[5]:0;if(T.indexOf("auto")===-1)return T;var J=ao(O,b,j,D),nt={top:{width:J.width,height:N.top-J.top},right:{width:J.right-N.right,height:J.height},bottom:{width:J.width,height:J.bottom-N.bottom},left:{width:N.left-J.left,height:J.height}},lt=Object.keys(nt).map(function(Wt){return _n({key:Wt},nt[Wt],{area:Ce(nt[Wt])})}).sort(function(Wt,Qt){return Qt.area-Wt.area}),Dt=lt.filter(function(Wt){var Qt=Wt.width,Zt=Wt.height;return Qt>=O.clientWidth&&Zt>=O.clientHeight}),Pt=Dt.length>0?Dt[0].key:lt[0].key,Nt=T.split("-")[1];return Pt+(Nt?"-"+Nt:"")}function dr(T,N,O){var b=arguments.length>3&&arguments[3]!==void 0?arguments[3]:null,D=b?Ni(N):Fi(N,On(O));return Nr(O,D,b)}function ur(T){var N=T.ownerDocument.defaultView,O=N.getComputedStyle(T),b=parseFloat(O.marginTop||0)+parseFloat(O.marginBottom||0),D=parseFloat(O.marginLeft||0)+parseFloat(O.marginRight||0),j={width:T.offsetWidth+D,height:T.offsetHeight+b};return j}function si(T){var N={left:"right",right:"left",bottom:"top",top:"bottom"};return T.replace(/left|right|bottom|top/g,function(O){return N[O]})}function Hi(T,N,O){O=O.split("-")[0];var b=ur(T),D={width:b.width,height:b.height},j=["right","left"].indexOf(O)!==-1,J=j?"top":"left",nt=j?"left":"top",lt=j?"height":"width",Dt=j?"width":"height";return D[J]=N[J]+N[lt]/2-b[lt]/2,O===nt?D[nt]=N[nt]-b[Dt]:D[nt]=N[si(nt)],D}function $n(T,N){return Array.prototype.find?T.find(N):T.filter(N)[0]}function Ns(T,N,O){if(Array.prototype.findIndex)return T.findIndex(function(D){return D[N]===O});var b=$n(T,function(D){return D[N]===O});return T.indexOf(b)}function Wn(T,N,O){var b=O===void 0?T:T.slice(0,Ns(T,"name",O));return b.forEach(function(D){D.function&&console.warn("`modifier.function` is deprecated, use `modifier.fn`!");var j=D.function||D.fn;D.enabled&&Sr(j)&&(N.offsets.popper=Mi(N.offsets.popper),N.offsets.reference=Mi(N.offsets.reference),N=j(N,D))}),N}function zo(){if(!this.state.isDestroyed){var T={instance:this,styles:{},arrowStyles:{},attributes:{},flipped:!1,offsets:{}};T.offsets.reference=dr(this.state,this.popper,this.reference,this.options.positionFixed),T.placement=Or(this.options.placement,T.offsets.reference,this.popper,this.reference,this.options.modifiers.flip.boundariesElement,this.options.modifiers.flip.padding),T.originalPlacement=T.placement,T.positionFixed=this.options.positionFixed,T.offsets.popper=Hi(this.popper,T.offsets.reference,T.placement),T.offsets.popper.position=this.options.positionFixed?"fixed":"absolute",T=Wn(this.modifiers,T),this.state.isCreated?this.options.onUpdate(T):(this.state.isCreated=!0,this.options.onCreate(T))}}function Ui(T,N){return T.some(function(O){var b=O.name,D=O.enabled;return D&&b===N})}function jo(T){for(var N=[!1,"ms","Webkit","Moz","O"],O=T.charAt(0).toUpperCase()+T.slice(1),b=0;b<N.length;b++){var D=N[b],j=D?""+D+O:T;if(typeof document.body.style[j]<"u")return j}return null}function Fo(){return this.state.isDestroyed=!0,Ui(this.modifiers,"applyStyle")&&(this.popper.removeAttribute("x-placement"),this.popper.style.position="",this.popper.style.top="",this.popper.style.left="",this.popper.style.right="",this.popper.style.bottom="",this.popper.style.willChange="",this.popper.style[jo("transform")]=""),this.disableEventListeners(),this.options.removeOnDestroy&&this.popper.parentNode.removeChild(this.popper),this}function co(T){var N=T.ownerDocument;return N?N.defaultView:window}function Vo(T,N,O,b){var D=T.nodeName==="BODY",j=D?T.ownerDocument.defaultView:T;j.addEventListener(N,O,{passive:!0}),D||Vo(oi(j.parentNode),N,O,b),b.push(j)}function Os(T,N,O,b){O.updateBound=b,co(T).addEventListener("resize",O.updateBound,{passive:!0});var D=oi(T);return Vo(D,"scroll",O.updateBound,O.scrollParents),O.scrollElement=D,O.eventsEnabled=!0,O}function d(){this.state.eventsEnabled||(this.state=Os(this.reference,this.options,this.state,this.scheduleUpdate))}function g(T,N){return co(T).removeEventListener("resize",N.updateBound),N.scrollParents.forEach(function(O){O.removeEventListener("scroll",N.updateBound)}),N.updateBound=null,N.scrollParents=[],N.scrollElement=null,N.eventsEnabled=!1,N}function w(){this.state.eventsEnabled&&(cancelAnimationFrame(this.scheduleUpdate),this.state=g(this.reference,this.state))}function C(T){return T!==""&&!isNaN(parseFloat(T))&&isFinite(T)}function S(T,N){Object.keys(N).forEach(function(O){var b="";["width","height","top","right","bottom","left"].indexOf(O)!==-1&&C(N[O])&&(b="px"),T.style[O]=N[O]+b})}function M(T,N){Object.keys(N).forEach(function(O){var b=N[O];b!==!1?T.setAttribute(O,N[O]):T.removeAttribute(O)})}function z(T){return S(T.instance.popper,T.styles),M(T.instance.popper,T.attributes),T.arrowElement&&Object.keys(T.arrowStyles).length&&S(T.arrowElement,T.arrowStyles),T}function X(T,N,O,b,D){var j=dr(D,N,T,O.positionFixed),J=Or(O.placement,j,N,T,O.modifiers.flip.boundariesElement,O.modifiers.flip.padding);return N.setAttribute("x-placement",J),S(N,{position:O.positionFixed?"fixed":"absolute"}),O}function Z(T,N){var O=T.offsets,b=O.popper,D=O.reference,j=Math.round,J=Math.floor,nt=function(Yi){return Yi},lt=j(D.width),Dt=j(b.width),Pt=["left","right"].indexOf(T.placement)!==-1,Nt=T.placement.indexOf("-")!==-1,Wt=lt%2===Dt%2,Qt=lt%2===1&&Dt%2===1,Zt=N?Pt||Nt||Wt?j:J:nt,Oe=N?j:nt;return{left:Zt(Qt&&!Nt&&N?b.left-1:b.left),top:Oe(b.top),bottom:Oe(b.bottom),right:Zt(b.right)}}var st=Je&&/Firefox/i.test(navigator.userAgent);function bt(T,N){var O=N.x,b=N.y,D=T.offsets.popper,j=$n(T.instance.modifiers,function(us){return us.name==="applyStyle"}).gpuAcceleration;j!==void 0&&console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");var J=j!==void 0?j:N.gpuAcceleration,nt=Bn(T.instance.popper),lt=Mr(nt),Dt={position:D.position},Pt=Z(T,window.devicePixelRatio<2||!st),Nt=O==="bottom"?"top":"bottom",Wt=b==="right"?"left":"right",Qt=jo("transform"),Zt=void 0,Oe=void 0;if(Nt==="bottom"?nt.nodeName==="HTML"?Oe=-nt.clientHeight+Pt.bottom:Oe=-lt.height+Pt.bottom:Oe=Pt.top,Wt==="right"?nt.nodeName==="HTML"?Zt=-nt.clientWidth+Pt.right:Zt=-lt.width+Pt.right:Zt=Pt.left,J&&Qt)Dt[Qt]="translate3d("+Zt+"px, "+Oe+"px, 0)",Dt[Nt]=0,Dt[Wt]=0,Dt.willChange="transform";else{var Tn=Nt==="bottom"?-1:1,Yi=Wt==="right"?-1:1;Dt[Nt]=Oe*Tn,Dt[Wt]=Zt*Yi,Dt.willChange=Nt+", "+Wt}var Kn={"x-placement":T.placement};return T.attributes=_n({},Kn,T.attributes),T.styles=_n({},Dt,T.styles),T.arrowStyles=_n({},T.offsets.arrow,T.arrowStyles),T}function wt(T,N,O){var b=$n(T,function(nt){var lt=nt.name;return lt===N}),D=!!b&&T.some(function(nt){return nt.name===O&&nt.enabled&&nt.order<b.order});if(!D){var j="`"+N+"`",J="`"+O+"`";console.warn(J+" modifier is required by "+j+" modifier in order to work, be sure to include it before "+j+"!")}return D}function ft(T,N){var O;if(!wt(T.instance.modifiers,"arrow","keepTogether"))return T;var b=N.element;if(typeof b=="string"){if(b=T.instance.popper.querySelector(b),!b)return T}else if(!T.instance.popper.contains(b))return console.warn("WARNING: `arrow.element` must be child of its popper element!"),T;var D=T.placement.split("-")[0],j=T.offsets,J=j.popper,nt=j.reference,lt=["left","right"].indexOf(D)!==-1,Dt=lt?"height":"width",Pt=lt?"Top":"Left",Nt=Pt.toLowerCase(),Wt=lt?"left":"top",Qt=lt?"bottom":"right",Zt=ur(b)[Dt];nt[Qt]-Zt<J[Nt]&&(T.offsets.popper[Nt]-=J[Nt]-(nt[Qt]-Zt)),nt[Nt]+Zt>J[Qt]&&(T.offsets.popper[Nt]+=nt[Nt]+Zt-J[Qt]),T.offsets.popper=Mi(T.offsets.popper);var Oe=nt[Nt]+nt[Dt]/2-Zt/2,Tn=Ri(T.instance.popper),Yi=parseFloat(Tn["margin"+Pt]),Kn=parseFloat(Tn["border"+Pt+"Width"]),us=Oe-T.offsets.popper[Nt]-Yi-Kn;return us=Math.max(Math.min(J[Dt]-Zt,us),0),T.arrowElement=b,T.offsets.arrow=(O={},Ii(O,Nt,Math.round(us)),Ii(O,Wt,""),O),T}function St(T){return T==="end"?"start":T==="start"?"end":T}var ee=["auto-start","auto","auto-end","top-start","top","top-end","right-start","right","right-end","bottom-end","bottom","bottom-start","left-end","left","left-start"],le=ee.slice(3);function ne(T){var N=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,O=le.indexOf(T),b=le.slice(O+1).concat(le.slice(0,O));return N?b.reverse():b}var $e={FLIP:"flip",CLOCKWISE:"clockwise",COUNTERCLOCKWISE:"counterclockwise"};function je(T,N){if(Ui(T.instance.modifiers,"inner")||T.flipped&&T.placement===T.originalPlacement)return T;var O=ao(T.instance.popper,T.instance.reference,N.padding,N.boundariesElement,T.positionFixed),b=T.placement.split("-")[0],D=si(b),j=T.placement.split("-")[1]||"",J=[];switch(N.behavior){case $e.FLIP:J=[b,D];break;case $e.CLOCKWISE:J=ne(b);break;case $e.COUNTERCLOCKWISE:J=ne(b,!0);break;default:J=N.behavior}return J.forEach(function(nt,lt){if(b!==nt||J.length===lt+1)return T;b=T.placement.split("-")[0],D=si(b);var Dt=T.offsets.popper,Pt=T.offsets.reference,Nt=Math.floor,Wt=b==="left"&&Nt(Dt.right)>Nt(Pt.left)||b==="right"&&Nt(Dt.left)<Nt(Pt.right)||b==="top"&&Nt(Dt.bottom)>Nt(Pt.top)||b==="bottom"&&Nt(Dt.top)<Nt(Pt.bottom),Qt=Nt(Dt.left)<Nt(O.left),Zt=Nt(Dt.right)>Nt(O.right),Oe=Nt(Dt.top)<Nt(O.top),Tn=Nt(Dt.bottom)>Nt(O.bottom),Yi=b==="left"&&Qt||b==="right"&&Zt||b==="top"&&Oe||b==="bottom"&&Tn,Kn=["top","bottom"].indexOf(b)!==-1,us=!!N.flipVariations&&(Kn&&j==="start"&&Qt||Kn&&j==="end"&&Zt||!Kn&&j==="start"&&Oe||!Kn&&j==="end"&&Tn),ih=!!N.flipVariationsByContent&&(Kn&&j==="start"&&Zt||Kn&&j==="end"&&Qt||!Kn&&j==="start"&&Tn||!Kn&&j==="end"&&Oe),fd=us||ih;(Wt||Yi||fd)&&(T.flipped=!0,(Wt||Yi)&&(b=J[lt+1]),fd&&(j=St(j)),T.placement=b+(j?"-"+j:""),T.offsets.popper=_n({},T.offsets.popper,Hi(T.instance.popper,T.offsets.reference,T.placement)),T=Wn(T.instance.modifiers,T,"flip"))}),T}function dn(T){var N=T.offsets,O=N.popper,b=N.reference,D=T.placement.split("-")[0],j=Math.floor,J=["top","bottom"].indexOf(D)!==-1,nt=J?"right":"bottom",lt=J?"left":"top",Dt=J?"width":"height";return O[nt]<j(b[lt])&&(T.offsets.popper[lt]=j(b[lt])-O[Dt]),O[lt]>j(b[nt])&&(T.offsets.popper[lt]=j(b[nt])),T}function wn(T,N,O,b){var D=T.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),j=+D[1],J=D[2];if(!j)return T;if(J.indexOf("%")===0){var nt=void 0;switch(J){case"%p":nt=O;break;case"%":case"%r":default:nt=b}var lt=Mi(nt);return lt[N]/100*j}else if(J==="vh"||J==="vw"){var Dt=void 0;return J==="vh"?Dt=Math.max(document.documentElement.clientHeight,window.innerHeight||0):Dt=Math.max(document.documentElement.clientWidth,window.innerWidth||0),Dt/100*j}else return j}function ue(T,N,O,b){var D=[0,0],j=["right","left"].indexOf(b)!==-1,J=T.split(/(\+|\-)/).map(function(Pt){return Pt.trim()}),nt=J.indexOf($n(J,function(Pt){return Pt.search(/,|\s/)!==-1}));J[nt]&&J[nt].indexOf(",")===-1&&console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");var lt=/\s*,\s*|\s+/,Dt=nt!==-1?[J.slice(0,nt).concat([J[nt].split(lt)[0]]),[J[nt].split(lt)[1]].concat(J.slice(nt+1))]:[J];return Dt=Dt.map(function(Pt,Nt){var Wt=(Nt===1?!j:j)?"height":"width",Qt=!1;return Pt.reduce(function(Zt,Oe){return Zt[Zt.length-1]===""&&["+","-"].indexOf(Oe)!==-1?(Zt[Zt.length-1]=Oe,Qt=!0,Zt):Qt?(Zt[Zt.length-1]+=Oe,Qt=!1,Zt):Zt.concat(Oe)},[]).map(function(Zt){return wn(Zt,Wt,N,O)})}),Dt.forEach(function(Pt,Nt){Pt.forEach(function(Wt,Qt){C(Wt)&&(D[Nt]+=Wt*(Pt[Qt-1]==="-"?-1:1))})}),D}function lo(T,N){var O=N.offset,b=T.placement,D=T.offsets,j=D.popper,J=D.reference,nt=b.split("-")[0],lt=void 0;return C(+O)?lt=[+O,0]:lt=ue(O,j,J,nt),nt==="left"?(j.top+=lt[0],j.left-=lt[1]):nt==="right"?(j.top+=lt[0],j.left+=lt[1]):nt==="top"?(j.left+=lt[0],j.top-=lt[1]):nt==="bottom"&&(j.left+=lt[0],j.top+=lt[1]),T.popper=j,T}function we(T,N){var O=N.boundariesElement||Bn(T.instance.popper);T.instance.reference===O&&(O=Bn(O));var b=jo("transform"),D=T.instance.popper.style,j=D.top,J=D.left,nt=D[b];D.top="",D.left="",D[b]="";var lt=ao(T.instance.popper,T.instance.reference,N.padding,O,T.positionFixed);D.top=j,D.left=J,D[b]=nt,N.boundaries=lt;var Dt=N.priority,Pt=T.offsets.popper,Nt={primary:function(Qt){var Zt=Pt[Qt];return Pt[Qt]<lt[Qt]&&!N.escapeWithReference&&(Zt=Math.max(Pt[Qt],lt[Qt])),Ii({},Qt,Zt)},secondary:function(Qt){var Zt=Qt==="right"?"left":"top",Oe=Pt[Zt];return Pt[Qt]>lt[Qt]&&!N.escapeWithReference&&(Oe=Math.min(Pt[Zt],lt[Qt]-(Qt==="right"?Pt.width:Pt.height))),Ii({},Zt,Oe)}};return Dt.forEach(function(Wt){var Qt=["left","top"].indexOf(Wt)!==-1?"primary":"secondary";Pt=_n({},Pt,Nt[Qt](Wt))}),T.offsets.popper=Pt,T}function Be(T){var N=T.placement,O=N.split("-")[0],b=N.split("-")[1];if(b){var D=T.offsets,j=D.reference,J=D.popper,nt=["bottom","top"].indexOf(O)!==-1,lt=nt?"left":"top",Dt=nt?"width":"height",Pt={start:Ii({},lt,j[lt]),end:Ii({},lt,j[lt]+j[Dt]-J[Dt])};T.offsets.popper=_n({},J,Pt[b])}return T}function Ho(T){if(!wt(T.instance.modifiers,"hide","preventOverflow"))return T;var N=T.offsets.reference,O=$n(T.instance.modifiers,function(b){return b.name==="preventOverflow"}).boundaries;if(N.bottom<O.top||N.left>O.right||N.top>O.bottom||N.right<O.left){if(T.hide===!0)return T;T.hide=!0,T.attributes["x-out-of-boundaries"]=""}else{if(T.hide===!1)return T;T.hide=!1,T.attributes["x-out-of-boundaries"]=!1}return T}function uo(T){var N=T.placement,O=N.split("-")[0],b=T.offsets,D=b.popper,j=b.reference,J=["left","right"].indexOf(O)!==-1,nt=["top","left"].indexOf(O)===-1;return D[J?"left":"top"]=j[O]-(nt?D[J?"width":"height"]:0),T.placement=si(N),T.offsets.popper=Mi(D),T}var Ln={shift:{order:100,enabled:!0,fn:Be},offset:{order:200,enabled:!0,fn:lo,offset:0},preventOverflow:{order:300,enabled:!0,fn:we,priority:["left","right","top","bottom"],padding:5,boundariesElement:"scrollParent"},keepTogether:{order:400,enabled:!0,fn:dn},arrow:{order:500,enabled:!0,fn:ft,element:"[x-arrow]"},flip:{order:600,enabled:!0,fn:je,behavior:"flip",padding:5,boundariesElement:"viewport",flipVariations:!1,flipVariationsByContent:!1},inner:{order:700,enabled:!1,fn:uo},hide:{order:800,enabled:!0,fn:Ho},computeStyle:{order:850,enabled:!0,fn:bt,gpuAcceleration:!0,x:"bottom",y:"right"},applyStyle:{order:900,enabled:!0,fn:z,onLoad:X,gpuAcceleration:void 0}},ai={placement:"bottom",positionFixed:!1,eventsEnabled:!0,removeOnDestroy:!1,onCreate:function(){},onUpdate:function(){},modifiers:Ln},Ge=function(){function T(N,O){var b=this,D=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};Ms(this,T),this.scheduleUpdate=function(){return requestAnimationFrame(b.update)},this.update=Dr(this.update.bind(this)),this.options=_n({},T.Defaults,D),this.state={isDestroyed:!1,isCreated:!1,scrollParents:[]},this.reference=N&&N.jquery?N[0]:N,this.popper=O&&O.jquery?O[0]:O,this.options.modifiers={},Object.keys(_n({},T.Defaults.modifiers,D.modifiers)).forEach(function(J){b.options.modifiers[J]=_n({},T.Defaults.modifiers[J]||{},D.modifiers?D.modifiers[J]:{})}),this.modifiers=Object.keys(this.options.modifiers).map(function(J){return _n({name:J},b.options.modifiers[J])}).sort(function(J,nt){return J.order-nt.order}),this.modifiers.forEach(function(J){J.enabled&&Sr(J.onLoad)&&J.onLoad(b.reference,b.popper,b.options,J,b.state)}),this.update();var j=this.options.eventsEnabled;j&&this.enableEventListeners(),this.state.eventsEnabled=j}return la(T,[{key:"update",value:function(){return zo.call(this)}},{key:"destroy",value:function(){return Fo.call(this)}},{key:"enableEventListeners",value:function(){return d.call(this)}},{key:"disableEventListeners",value:function(){return w.call(this)}}]),T}();Ge.Utils=(typeof window<"u"?window:Xs).PopperUtils,Ge.placements=ee,Ge.Defaults=ai;var qn=Ge,un="dropdown",Pn="4.6.2",$i="bs.dropdown",Xe="."+$i,ci=".data-api",da=f.default.fn[un],hr=27,Bs=32,ye=9,Gn=38,on=40,Uo=3,ua=new RegExp(Gn+"|"+on+"|"+hr),Oi="disabled",An="show",Wi="dropup",Br="dropright",qi="dropleft",ho="dropdown-menu-right",_i="position-static",$o="hide"+Xe,Wo="hidden"+Xe,es="show"+Xe,ns="shown"+Xe,Lr="click"+Xe,wi="click"+Xe+ci,Gi="keydown"+Xe+ci,Pr="keyup"+Xe+ci,Ki='[data-toggle="dropdown"]',Ls=".dropdown form",K=".dropdown-menu",ot=".navbar-nav",ht=".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",gt="top-start",At="top-end",Ct="bottom-start",jt="bottom-end",$t="right-start",Rt="left-start",de={offset:0,flip:!0,boundary:"scrollParent",reference:"toggle",display:"dynamic",popperConfig:null},Jt={offset:"(number|string|function)",flip:"boolean",boundary:"(string|element)",reference:"(string|element)",display:"string",popperConfig:"(null|object)"},Gt=function(){function T(O,b){this._element=O,this._popper=null,this._config=this._getConfig(b),this._menu=this._getMenuElement(),this._inNavbar=this._detectNavbar(),this._addEventListeners()}var N=T.prototype;return N.toggle=function(){if(!(this._element.disabled||f.default(this._element).hasClass(Oi))){var b=f.default(this._menu).hasClass(An);T._clearMenus(),!b&&this.show(!0)}},N.show=function(b){if(b===void 0&&(b=!1),!(this._element.disabled||f.default(this._element).hasClass(Oi)||f.default(this._menu).hasClass(An))){var D={relatedTarget:this._element},j=f.default.Event(es,D),J=T._getParentFromElement(this._element);if(f.default(J).trigger(j),!j.isDefaultPrevented()){if(!this._inNavbar&&b){if(typeof qn>"u")throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");var nt=this._element;this._config.reference==="parent"?nt=J:rt.isElement(this._config.reference)&&(nt=this._config.reference,typeof this._config.reference.jquery<"u"&&(nt=this._config.reference[0])),this._config.boundary!=="scrollParent"&&f.default(J).addClass(_i),this._popper=new qn(nt,this._menu,this._getPopperConfig())}"ontouchstart"in document.documentElement&&f.default(J).closest(ot).length===0&&f.default(document.body).children().on("mouseover",null,f.default.noop),this._element.focus(),this._element.setAttribute("aria-expanded",!0),f.default(this._menu).toggleClass(An),f.default(J).toggleClass(An).trigger(f.default.Event(ns,D))}}},N.hide=function(){if(!(this._element.disabled||f.default(this._element).hasClass(Oi)||!f.default(this._menu).hasClass(An))){var b={relatedTarget:this._element},D=f.default.Event($o,b),j=T._getParentFromElement(this._element);f.default(j).trigger(D),!D.isDefaultPrevented()&&(this._popper&&this._popper.destroy(),f.default(this._menu).toggleClass(An),f.default(j).toggleClass(An).trigger(f.default.Event(Wo,b)))}},N.dispose=function(){f.default.removeData(this._element,$i),f.default(this._element).off(Xe),this._element=null,this._menu=null,this._popper!==null&&(this._popper.destroy(),this._popper=null)},N.update=function(){this._inNavbar=this._detectNavbar(),this._popper!==null&&this._popper.scheduleUpdate()},N._addEventListeners=function(){var b=this;f.default(this._element).on(Lr,function(D){D.preventDefault(),D.stopPropagation(),b.toggle()})},N._getConfig=function(b){return b=_({},this.constructor.Default,f.default(this._element).data(),b),rt.typeCheckConfig(un,b,this.constructor.DefaultType),b},N._getMenuElement=function(){if(!this._menu){var b=T._getParentFromElement(this._element);b&&(this._menu=b.querySelector(K))}return this._menu},N._getPlacement=function(){var b=f.default(this._element.parentNode),D=Ct;return b.hasClass(Wi)?D=f.default(this._menu).hasClass(ho)?At:gt:b.hasClass(Br)?D=$t:b.hasClass(qi)?D=Rt:f.default(this._menu).hasClass(ho)&&(D=jt),D},N._detectNavbar=function(){return f.default(this._element).closest(".navbar").length>0},N._getOffset=function(){var b=this,D={};return typeof this._config.offset=="function"?D.fn=function(j){return j.offsets=_({},j.offsets,b._config.offset(j.offsets,b._element)),j}:D.offset=this._config.offset,D},N._getPopperConfig=function(){var b={placement:this._getPlacement(),modifiers:{offset:this._getOffset(),flip:{enabled:this._config.flip},preventOverflow:{boundariesElement:this._config.boundary}}};return this._config.display==="static"&&(b.modifiers.applyStyle={enabled:!1}),_({},b,this._config.popperConfig)},T._jQueryInterface=function(b){return this.each(function(){var D=f.default(this).data($i),j=typeof b=="object"?b:null;if(D||(D=new T(this,j),f.default(this).data($i,D)),typeof b=="string"){if(typeof D[b]>"u")throw new TypeError('No method named "'+b+'"');D[b]()}})},T._clearMenus=function(b){if(!(b&&(b.which===Uo||b.type==="keyup"&&b.which!==ye)))for(var D=[].slice.call(document.querySelectorAll(Ki)),j=0,J=D.length;j<J;j++){var nt=T._getParentFromElement(D[j]),lt=f.default(D[j]).data($i),Dt={relatedTarget:D[j]};if(b&&b.type==="click"&&(Dt.clickEvent=b),!!lt){var Pt=lt._menu;if(f.default(nt).hasClass(An)&&!(b&&(b.type==="click"&&/input|textarea/i.test(b.target.tagName)||b.type==="keyup"&&b.which===ye)&&f.default.contains(nt,b.target))){var Nt=f.default.Event($o,Dt);f.default(nt).trigger(Nt),!Nt.isDefaultPrevented()&&("ontouchstart"in document.documentElement&&f.default(document.body).children().off("mouseover",null,f.default.noop),D[j].setAttribute("aria-expanded","false"),lt._popper&&lt._popper.destroy(),f.default(Pt).removeClass(An),f.default(nt).removeClass(An).trigger(f.default.Event(Wo,Dt)))}}}},T._getParentFromElement=function(b){var D,j=rt.getSelectorFromElement(b);return j&&(D=document.querySelector(j)),D||b.parentNode},T._dataApiKeydownHandler=function(b){if(!(/input|textarea/i.test(b.target.tagName)?b.which===Bs||b.which!==hr&&(b.which!==on&&b.which!==Gn||f.default(b.target).closest(K).length):!ua.test(b.which))&&!(this.disabled||f.default(this).hasClass(Oi))){var D=T._getParentFromElement(this),j=f.default(D).hasClass(An);if(!(!j&&b.which===hr)){if(b.preventDefault(),b.stopPropagation(),!j||b.which===hr||b.which===Bs){b.which===hr&&f.default(D.querySelector(Ki)).trigger("focus"),f.default(this).trigger("click");return}var J=[].slice.call(D.querySelectorAll(ht)).filter(function(lt){return f.default(lt).is(":visible")});if(J.length!==0){var nt=J.indexOf(b.target);b.which===Gn&&nt>0&&nt--,b.which===on&&nt<J.length-1&&nt++,nt<0&&(nt=0),J[nt].focus()}}}},B(T,null,[{key:"VERSION",get:function(){return Pn}},{key:"Default",get:function(){return de}},{key:"DefaultType",get:function(){return Jt}}]),T}();f.default(document).on(Gi,Ki,Gt._dataApiKeydownHandler).on(Gi,K,Gt._dataApiKeydownHandler).on(wi+" "+Pr,Gt._clearMenus).on(wi,Ki,function(T){T.preventDefault(),T.stopPropagation(),Gt._jQueryInterface.call(f.default(this),"toggle")}).on(wi,Ls,function(T){T.stopPropagation()}),f.default.fn[un]=Gt._jQueryInterface,f.default.fn[un].Constructor=Gt,f.default.fn[un].noConflict=function(){return f.default.fn[un]=da,Gt._jQueryInterface};var qt="modal",ct="4.6.2",pt="bs.modal",dt="."+pt,W=".data-api",tt=f.default.fn[qt],kt=27,_t="modal-dialog-scrollable",Ot="modal-scrollbar-measure",re="modal-backdrop",ge="modal-open",Xt="fade",Rn="show",Ai="modal-static",is="hide"+dt,Ua="hidePrevented"+dt,tn="hidden"+dt,Ps="show"+dt,$l="shown"+dt,fr="focusin"+dt,Rs="resize"+dt,$a="click.dismiss"+dt,zs="keydown.dismiss"+dt,os="mouseup.dismiss"+dt,jc="mousedown.dismiss"+dt,Wa="click"+dt+W,Wl=".modal-dialog",ql=".modal-body",Gl='[data-toggle="modal"]',Lu='[data-dismiss="modal"]',Kl=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",Fc=".sticky-top",qa={backdrop:!0,keyboard:!0,focus:!0,show:!0},Yl={backdrop:"(boolean|string)",keyboard:"boolean",focus:"boolean",show:"boolean"},js=function(){function T(O,b){this._config=this._getConfig(b),this._element=O,this._dialog=O.querySelector(Wl),this._backdrop=null,this._isShown=!1,this._isBodyOverflowing=!1,this._ignoreBackdropClick=!1,this._isTransitioning=!1,this._scrollbarWidth=0}var N=T.prototype;return N.toggle=function(b){return this._isShown?this.hide():this.show(b)},N.show=function(b){var D=this;if(!(this._isShown||this._isTransitioning)){var j=f.default.Event(Ps,{relatedTarget:b});f.default(this._element).trigger(j),!j.isDefaultPrevented()&&(this._isShown=!0,f.default(this._element).hasClass(Xt)&&(this._isTransitioning=!0),this._checkScrollbar(),this._setScrollbar(),this._adjustDialog(),this._setEscapeEvent(),this._setResizeEvent(),f.default(this._element).on($a,Lu,function(J){return D.hide(J)}),f.default(this._dialog).on(jc,function(){f.default(D._element).one(os,function(J){f.default(J.target).is(D._element)&&(D._ignoreBackdropClick=!0)})}),this._showBackdrop(function(){return D._showElement(b)}))}},N.hide=function(b){var D=this;if(b&&b.preventDefault(),!(!this._isShown||this._isTransitioning)){var j=f.default.Event(is);if(f.default(this._element).trigger(j),!(!this._isShown||j.isDefaultPrevented())){this._isShown=!1;var J=f.default(this._element).hasClass(Xt);if(J&&(this._isTransitioning=!0),this._setEscapeEvent(),this._setResizeEvent(),f.default(document).off(fr),f.default(this._element).removeClass(Rn),f.default(this._element).off($a),f.default(this._dialog).off(jc),J){var nt=rt.getTransitionDurationFromElement(this._element);f.default(this._element).one(rt.TRANSITION_END,function(lt){return D._hideModal(lt)}).emulateTransitionEnd(nt)}else this._hideModal()}}},N.dispose=function(){[window,this._element,this._dialog].forEach(function(b){return f.default(b).off(dt)}),f.default(document).off(fr),f.default.removeData(this._element,pt),this._config=null,this._element=null,this._dialog=null,this._backdrop=null,this._isShown=null,this._isBodyOverflowing=null,this._ignoreBackdropClick=null,this._isTransitioning=null,this._scrollbarWidth=null},N.handleUpdate=function(){this._adjustDialog()},N._getConfig=function(b){return b=_({},qa,b),rt.typeCheckConfig(qt,b,Yl),b},N._triggerBackdropTransition=function(){var b=this,D=f.default.Event(Ua);if(f.default(this._element).trigger(D),!D.isDefaultPrevented()){var j=this._element.scrollHeight>document.documentElement.clientHeight;j||(this._element.style.overflowY="hidden"),this._element.classList.add(Ai);var J=rt.getTransitionDurationFromElement(this._dialog);f.default(this._element).off(rt.TRANSITION_END),f.default(this._element).one(rt.TRANSITION_END,function(){b._element.classList.remove(Ai),j||f.default(b._element).one(rt.TRANSITION_END,function(){b._element.style.overflowY=""}).emulateTransitionEnd(b._element,J)}).emulateTransitionEnd(J),this._element.focus()}},N._showElement=function(b){var D=this,j=f.default(this._element).hasClass(Xt),J=this._dialog?this._dialog.querySelector(ql):null;(!this._element.parentNode||this._element.parentNode.nodeType!==Node.ELEMENT_NODE)&&document.body.appendChild(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),f.default(this._dialog).hasClass(_t)&&J?J.scrollTop=0:this._element.scrollTop=0,j&&rt.reflow(this._element),f.default(this._element).addClass(Rn),this._config.focus&&this._enforceFocus();var nt=f.default.Event($l,{relatedTarget:b}),lt=function(){D._config.focus&&D._element.focus(),D._isTransitioning=!1,f.default(D._element).trigger(nt)};if(j){var Dt=rt.getTransitionDurationFromElement(this._dialog);f.default(this._dialog).one(rt.TRANSITION_END,lt).emulateTransitionEnd(Dt)}else lt()},N._enforceFocus=function(){var b=this;f.default(document).off(fr).on(fr,function(D){document!==D.target&&b._element!==D.target&&f.default(b._element).has(D.target).length===0&&b._element.focus()})},N._setEscapeEvent=function(){var b=this;this._isShown?f.default(this._element).on(zs,function(D){b._config.keyboard&&D.which===kt?(D.preventDefault(),b.hide()):!b._config.keyboard&&D.which===kt&&b._triggerBackdropTransition()}):this._isShown||f.default(this._element).off(zs)},N._setResizeEvent=function(){var b=this;this._isShown?f.default(window).on(Rs,function(D){return b.handleUpdate(D)}):f.default(window).off(Rs)},N._hideModal=function(){var b=this;this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._showBackdrop(function(){f.default(document.body).removeClass(ge),b._resetAdjustments(),b._resetScrollbar(),f.default(b._element).trigger(tn)})},N._removeBackdrop=function(){this._backdrop&&(f.default(this._backdrop).remove(),this._backdrop=null)},N._showBackdrop=function(b){var D=this,j=f.default(this._element).hasClass(Xt)?Xt:"";if(this._isShown&&this._config.backdrop){if(this._backdrop=document.createElement("div"),this._backdrop.className=re,j&&this._backdrop.classList.add(j),f.default(this._backdrop).appendTo(document.body),f.default(this._element).on($a,function(Dt){if(D._ignoreBackdropClick){D._ignoreBackdropClick=!1;return}Dt.target===Dt.currentTarget&&(D._config.backdrop==="static"?D._triggerBackdropTransition():D.hide())}),j&&rt.reflow(this._backdrop),f.default(this._backdrop).addClass(Rn),!b)return;if(!j){b();return}var J=rt.getTransitionDurationFromElement(this._backdrop);f.default(this._backdrop).one(rt.TRANSITION_END,b).emulateTransitionEnd(J)}else if(!this._isShown&&this._backdrop){f.default(this._backdrop).removeClass(Rn);var nt=function(){D._removeBackdrop(),b&&b()};if(f.default(this._element).hasClass(Xt)){var lt=rt.getTransitionDurationFromElement(this._backdrop);f.default(this._backdrop).one(rt.TRANSITION_END,nt).emulateTransitionEnd(lt)}else nt()}else b&&b()},N._adjustDialog=function(){var b=this._element.scrollHeight>document.documentElement.clientHeight;!this._isBodyOverflowing&&b&&(this._element.style.paddingLeft=this._scrollbarWidth+"px"),this._isBodyOverflowing&&!b&&(this._element.style.paddingRight=this._scrollbarWidth+"px")},N._resetAdjustments=function(){this._element.style.paddingLeft="",this._element.style.paddingRight=""},N._checkScrollbar=function(){var b=document.body.getBoundingClientRect();this._isBodyOverflowing=Math.round(b.left+b.right)<window.innerWidth,this._scrollbarWidth=this._getScrollbarWidth()},N._setScrollbar=function(){var b=this;if(this._isBodyOverflowing){var D=[].slice.call(document.querySelectorAll(Kl)),j=[].slice.call(document.querySelectorAll(Fc));f.default(D).each(function(lt,Dt){var Pt=Dt.style.paddingRight,Nt=f.default(Dt).css("padding-right");f.default(Dt).data("padding-right",Pt).css("padding-right",parseFloat(Nt)+b._scrollbarWidth+"px")}),f.default(j).each(function(lt,Dt){var Pt=Dt.style.marginRight,Nt=f.default(Dt).css("margin-right");f.default(Dt).data("margin-right",Pt).css("margin-right",parseFloat(Nt)-b._scrollbarWidth+"px")});var J=document.body.style.paddingRight,nt=f.default(document.body).css("padding-right");f.default(document.body).data("padding-right",J).css("padding-right",parseFloat(nt)+this._scrollbarWidth+"px")}f.default(document.body).addClass(ge)},N._resetScrollbar=function(){var b=[].slice.call(document.querySelectorAll(Kl));f.default(b).each(function(J,nt){var lt=f.default(nt).data("padding-right");f.default(nt).removeData("padding-right"),nt.style.paddingRight=lt||""});var D=[].slice.call(document.querySelectorAll(""+Fc));f.default(D).each(function(J,nt){var lt=f.default(nt).data("margin-right");typeof lt<"u"&&f.default(nt).css("margin-right",lt).removeData("margin-right")});var j=f.default(document.body).data("padding-right");f.default(document.body).removeData("padding-right"),document.body.style.paddingRight=j||""},N._getScrollbarWidth=function(){var b=document.createElement("div");b.className=Ot,document.body.appendChild(b);var D=b.getBoundingClientRect().width-b.clientWidth;return document.body.removeChild(b),D},T._jQueryInterface=function(b,D){return this.each(function(){var j=f.default(this).data(pt),J=_({},qa,f.default(this).data(),typeof b=="object"&&b?b:{});if(j||(j=new T(this,J),f.default(this).data(pt,j)),typeof b=="string"){if(typeof j[b]>"u")throw new TypeError('No method named "'+b+'"');j[b](D)}else J.show&&j.show(D)})},B(T,null,[{key:"VERSION",get:function(){return ct}},{key:"Default",get:function(){return qa}}]),T}();f.default(document).on(Wa,Gl,function(T){var N=this,O,b=rt.getSelectorFromElement(this);b&&(O=document.querySelector(b));var D=f.default(O).data(pt)?"toggle":_({},f.default(O).data(),f.default(this).data());(this.tagName==="A"||this.tagName==="AREA")&&T.preventDefault();var j=f.default(O).one(Ps,function(J){J.isDefaultPrevented()||j.one(tn,function(){f.default(N).is(":visible")&&N.focus()})});js._jQueryInterface.call(f.default(O),D,this)}),f.default.fn[qt]=js._jQueryInterface,f.default.fn[qt].Constructor=js,f.default.fn[qt].noConflict=function(){return f.default.fn[qt]=tt,js._jQueryInterface};var Vc=["background","cite","href","itemtype","longdesc","poster","src","xlink:href"],Pu=/^aria-[\w-]*$/i,Ql={"*":["class","dir","id","lang","role",Pu],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},Ru=/^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i,zu=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;function Zl(T,N){var O=T.nodeName.toLowerCase();if(N.indexOf(O)!==-1)return Vc.indexOf(O)!==-1?!!(Ru.test(T.nodeValue)||zu.test(T.nodeValue)):!0;for(var b=N.filter(function(J){return J instanceof RegExp}),D=0,j=b.length;D<j;D++)if(b[D].test(O))return!0;return!1}function Ae(T,N,O){if(T.length===0)return T;if(O&&typeof O=="function")return O(T);for(var b=new window.DOMParser,D=b.parseFromString(T,"text/html"),j=Object.keys(N),J=[].slice.call(D.body.querySelectorAll("*")),nt=function(Wt,Qt){var Zt=J[Wt],Oe=Zt.nodeName.toLowerCase();if(j.indexOf(Zt.nodeName.toLowerCase())===-1)return Zt.parentNode.removeChild(Zt),"continue";var Tn=[].slice.call(Zt.attributes),Yi=[].concat(N["*"]||[],N[Oe]||[]);Tn.forEach(function(Kn){Zl(Kn,Yi)||Zt.removeAttribute(Kn.nodeName)})},lt=0,Dt=J.length;lt<Dt;lt++)var Pt=nt(lt);return D.body.innerHTML}var rs="tooltip",Fs="4.6.2",Rr="bs.tooltip",vi="."+Rr,Hc=f.default.fn[rs],Le="bs-tooltip",Uc=new RegExp("(^|\\s)"+Le+"\\S+","g"),Jl=["sanitize","whiteList","sanitizeFn"],ha="fade",ss="show",fa="show",$c="out",ju=".tooltip-inner",zr=".arrow",pa="hover",Ga="focus",Fu="click",Vu="manual",Hu={AUTO:"auto",TOP:"top",RIGHT:"right",BOTTOM:"bottom",LEFT:"left"},Uu={animation:!0,template:'<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,selector:!1,placement:"top",offset:0,container:!1,fallbackPlacement:"flip",boundary:"scrollParent",customClass:"",sanitize:!0,sanitizeFn:null,whiteList:Ql,popperConfig:null},Cp={animation:"boolean",template:"string",title:"(string|element|function)",trigger:"string",delay:"(number|object)",html:"boolean",selector:"(string|boolean)",placement:"(string|function)",offset:"(number|string|function)",container:"(string|element|boolean)",fallbackPlacement:"(string|array)",boundary:"(string|element)",customClass:"(string|function)",sanitize:"boolean",sanitizeFn:"(null|function)",whiteList:"object",popperConfig:"(null|object)"},$u={HIDE:"hide"+vi,HIDDEN:"hidden"+vi,SHOW:"show"+vi,SHOWN:"shown"+vi,INSERTED:"inserted"+vi,CLICK:"click"+vi,FOCUSIN:"focusin"+vi,FOCUSOUT:"focusout"+vi,MOUSEENTER:"mouseenter"+vi,MOUSELEAVE:"mouseleave"+vi},as=function(){function T(O,b){if(typeof qn>"u")throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");this._isEnabled=!0,this._timeout=0,this._hoverState="",this._activeTrigger={},this._popper=null,this.element=O,this.config=this._getConfig(b),this.tip=null,this._setListeners()}var N=T.prototype;return N.enable=function(){this._isEnabled=!0},N.disable=function(){this._isEnabled=!1},N.toggleEnabled=function(){this._isEnabled=!this._isEnabled},N.toggle=function(b){if(this._isEnabled)if(b){var D=this.constructor.DATA_KEY,j=f.default(b.currentTarget).data(D);j||(j=new this.constructor(b.currentTarget,this._getDelegateConfig()),f.default(b.currentTarget).data(D,j)),j._activeTrigger.click=!j._activeTrigger.click,j._isWithActiveTrigger()?j._enter(null,j):j._leave(null,j)}else{if(f.default(this.getTipElement()).hasClass(ss)){this._leave(null,this);return}this._enter(null,this)}},N.dispose=function(){clearTimeout(this._timeout),f.default.removeData(this.element,this.constructor.DATA_KEY),f.default(this.element).off(this.constructor.EVENT_KEY),f.default(this.element).closest(".modal").off("hide.bs.modal",this._hideModalHandler),this.tip&&f.default(this.tip).remove(),this._isEnabled=null,this._timeout=null,this._hoverState=null,this._activeTrigger=null,this._popper&&this._popper.destroy(),this._popper=null,this.element=null,this.config=null,this.tip=null},N.show=function(){var b=this;if(f.default(this.element).css("display")==="none")throw new Error("Please use show on visible elements");var D=f.default.Event(this.constructor.Event.SHOW);if(this.isWithContent()&&this._isEnabled){f.default(this.element).trigger(D);var j=rt.findShadowRoot(this.element),J=f.default.contains(j!==null?j:this.element.ownerDocument.documentElement,this.element);if(D.isDefaultPrevented()||!J)return;var nt=this.getTipElement(),lt=rt.getUID(this.constructor.NAME);nt.setAttribute("id",lt),this.element.setAttribute("aria-describedby",lt),this.setContent(),this.config.animation&&f.default(nt).addClass(ha);var Dt=typeof this.config.placement=="function"?this.config.placement.call(this,nt,this.element):this.config.placement,Pt=this._getAttachment(Dt);this.addAttachmentClass(Pt);var Nt=this._getContainer();f.default(nt).data(this.constructor.DATA_KEY,this),f.default.contains(this.element.ownerDocument.documentElement,this.tip)||f.default(nt).appendTo(Nt),f.default(this.element).trigger(this.constructor.Event.INSERTED),this._popper=new qn(this.element,nt,this._getPopperConfig(Pt)),f.default(nt).addClass(ss),f.default(nt).addClass(this.config.customClass),"ontouchstart"in document.documentElement&&f.default(document.body).children().on("mouseover",null,f.default.noop);var Wt=function(){b.config.animation&&b._fixTransition();var Oe=b._hoverState;b._hoverState=null,f.default(b.element).trigger(b.constructor.Event.SHOWN),Oe===$c&&b._leave(null,b)};if(f.default(this.tip).hasClass(ha)){var Qt=rt.getTransitionDurationFromElement(this.tip);f.default(this.tip).one(rt.TRANSITION_END,Wt).emulateTransitionEnd(Qt)}else Wt()}},N.hide=function(b){var D=this,j=this.getTipElement(),J=f.default.Event(this.constructor.Event.HIDE),nt=function(){D._hoverState!==fa&&j.parentNode&&j.parentNode.removeChild(j),D._cleanTipClass(),D.element.removeAttribute("aria-describedby"),f.default(D.element).trigger(D.constructor.Event.HIDDEN),D._popper!==null&&D._popper.destroy(),b&&b()};if(f.default(this.element).trigger(J),!J.isDefaultPrevented()){if(f.default(j).removeClass(ss),"ontouchstart"in document.documentElement&&f.default(document.body).children().off("mouseover",null,f.default.noop),this._activeTrigger[Fu]=!1,this._activeTrigger[Ga]=!1,this._activeTrigger[pa]=!1,f.default(this.tip).hasClass(ha)){var lt=rt.getTransitionDurationFromElement(j);f.default(j).one(rt.TRANSITION_END,nt).emulateTransitionEnd(lt)}else nt();this._hoverState=""}},N.update=function(){this._popper!==null&&this._popper.scheduleUpdate()},N.isWithContent=function(){return!!this.getTitle()},N.addAttachmentClass=function(b){f.default(this.getTipElement()).addClass(Le+"-"+b)},N.getTipElement=function(){return this.tip=this.tip||f.default(this.config.template)[0],this.tip},N.setContent=function(){var b=this.getTipElement();this.setElementContent(f.default(b.querySelectorAll(ju)),this.getTitle()),f.default(b).removeClass(ha+" "+ss)},N.setElementContent=function(b,D){if(typeof D=="object"&&(D.nodeType||D.jquery)){this.config.html?f.default(D).parent().is(b)||b.empty().append(D):b.text(f.default(D).text());return}this.config.html?(this.config.sanitize&&(D=Ae(D,this.config.whiteList,this.config.sanitizeFn)),b.html(D)):b.text(D)},N.getTitle=function(){var b=this.element.getAttribute("data-original-title");return b||(b=typeof this.config.title=="function"?this.config.title.call(this.element):this.config.title),b},N._getPopperConfig=function(b){var D=this,j={placement:b,modifiers:{offset:this._getOffset(),flip:{behavior:this.config.fallbackPlacement},arrow:{element:zr},preventOverflow:{boundariesElement:this.config.boundary}},onCreate:function(nt){nt.originalPlacement!==nt.placement&&D._handlePopperPlacementChange(nt)},onUpdate:function(nt){return D._handlePopperPlacementChange(nt)}};return _({},j,this.config.popperConfig)},N._getOffset=function(){var b=this,D={};return typeof this.config.offset=="function"?D.fn=function(j){return j.offsets=_({},j.offsets,b.config.offset(j.offsets,b.element)),j}:D.offset=this.config.offset,D},N._getContainer=function(){return this.config.container===!1?document.body:rt.isElement(this.config.container)?f.default(this.config.container):f.default(document).find(this.config.container)},N._getAttachment=function(b){return Hu[b.toUpperCase()]},N._setListeners=function(){var b=this,D=this.config.trigger.split(" ");D.forEach(function(j){if(j==="click")f.default(b.element).on(b.constructor.Event.CLICK,b.config.selector,function(lt){return b.toggle(lt)});else if(j!==Vu){var J=j===pa?b.constructor.Event.MOUSEENTER:b.constructor.Event.FOCUSIN,nt=j===pa?b.constructor.Event.MOUSELEAVE:b.constructor.Event.FOCUSOUT;f.default(b.element).on(J,b.config.selector,function(lt){return b._enter(lt)}).on(nt,b.config.selector,function(lt){return b._leave(lt)})}}),this._hideModalHandler=function(){b.element&&b.hide()},f.default(this.element).closest(".modal").on("hide.bs.modal",this._hideModalHandler),this.config.selector?this.config=_({},this.config,{trigger:"manual",selector:""}):this._fixTitle()},N._fixTitle=function(){var b=typeof this.element.getAttribute("data-original-title");(this.element.getAttribute("title")||b!=="string")&&(this.element.setAttribute("data-original-title",this.element.getAttribute("title")||""),this.element.setAttribute("title",""))},N._enter=function(b,D){var j=this.constructor.DATA_KEY;if(D=D||f.default(b.currentTarget).data(j),D||(D=new this.constructor(b.currentTarget,this._getDelegateConfig()),f.default(b.currentTarget).data(j,D)),b&&(D._activeTrigger[b.type==="focusin"?Ga:pa]=!0),f.default(D.getTipElement()).hasClass(ss)||D._hoverState===fa){D._hoverState=fa;return}if(clearTimeout(D._timeout),D._hoverState=fa,!D.config.delay||!D.config.delay.show){D.show();return}D._timeout=setTimeout(function(){D._hoverState===fa&&D.show()},D.config.delay.show)},N._leave=function(b,D){var j=this.constructor.DATA_KEY;if(D=D||f.default(b.currentTarget).data(j),D||(D=new this.constructor(b.currentTarget,this._getDelegateConfig()),f.default(b.currentTarget).data(j,D)),b&&(D._activeTrigger[b.type==="focusout"?Ga:pa]=!1),!D._isWithActiveTrigger()){if(clearTimeout(D._timeout),D._hoverState=$c,!D.config.delay||!D.config.delay.hide){D.hide();return}D._timeout=setTimeout(function(){D._hoverState===$c&&D.hide()},D.config.delay.hide)}},N._isWithActiveTrigger=function(){for(var b in this._activeTrigger)if(this._activeTrigger[b])return!0;return!1},N._getConfig=function(b){var D=f.default(this.element).data();return Object.keys(D).forEach(function(j){Jl.indexOf(j)!==-1&&delete D[j]}),b=_({},this.constructor.Default,D,typeof b=="object"&&b?b:{}),typeof b.delay=="number"&&(b.delay={show:b.delay,hide:b.delay}),typeof b.title=="number"&&(b.title=b.title.toString()),typeof b.content=="number"&&(b.content=b.content.toString()),rt.typeCheckConfig(rs,b,this.constructor.DefaultType),b.sanitize&&(b.template=Ae(b.template,b.whiteList,b.sanitizeFn)),b},N._getDelegateConfig=function(){var b={};if(this.config)for(var D in this.config)this.constructor.Default[D]!==this.config[D]&&(b[D]=this.config[D]);return b},N._cleanTipClass=function(){var b=f.default(this.getTipElement()),D=b.attr("class").match(Uc);D!==null&&D.length&&b.removeClass(D.join(""))},N._handlePopperPlacementChange=function(b){this.tip=b.instance.popper,this._cleanTipClass(),this.addAttachmentClass(this._getAttachment(b.placement))},N._fixTransition=function(){var b=this.getTipElement(),D=this.config.animation;b.getAttribute("x-placement")===null&&(f.default(b).removeClass(ha),this.config.animation=!1,this.hide(),this.show(),this.config.animation=D)},T._jQueryInterface=function(b){return this.each(function(){var D=f.default(this),j=D.data(Rr),J=typeof b=="object"&&b;if(!(!j&&/dispose|hide/.test(b))&&(j||(j=new T(this,J),D.data(Rr,j)),typeof b=="string")){if(typeof j[b]>"u")throw new TypeError('No method named "'+b+'"');j[b]()}})},B(T,null,[{key:"VERSION",get:function(){return Fs}},{key:"Default",get:function(){return Uu}},{key:"NAME",get:function(){return rs}},{key:"DATA_KEY",get:function(){return Rr}},{key:"Event",get:function(){return $u}},{key:"EVENT_KEY",get:function(){return vi}},{key:"DefaultType",get:function(){return Cp}}]),T}();f.default.fn[rs]=as._jQueryInterface,f.default.fn[rs].Constructor=as,f.default.fn[rs].noConflict=function(){return f.default.fn[rs]=Hc,as._jQueryInterface};var Vs="popover",Xl="4.6.2",Hs="bs.popover",fo="."+Hs,Wu=f.default.fn[Vs],Wc="bs-popover",qu=new RegExp("(^|\\s)"+Wc+"\\S+","g"),po="fade",En="show",xn=".popover-header",li=".popover-body",qo=_({},as.Default,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'}),qc=_({},as.DefaultType,{content:"(string|element|function)"}),Gc={HIDE:"hide"+fo,HIDDEN:"hidden"+fo,SHOW:"show"+fo,SHOWN:"shown"+fo,INSERTED:"inserted"+fo,CLICK:"click"+fo,FOCUSIN:"focusin"+fo,FOCUSOUT:"focusout"+fo,MOUSEENTER:"mouseenter"+fo,MOUSELEAVE:"mouseleave"+fo},Us=function(T){q(N,T);function N(){return T.apply(this,arguments)||this}var O=N.prototype;return O.isWithContent=function(){return this.getTitle()||this._getContent()},O.addAttachmentClass=function(D){f.default(this.getTipElement()).addClass(Wc+"-"+D)},O.getTipElement=function(){return this.tip=this.tip||f.default(this.config.template)[0],this.tip},O.setContent=function(){var D=f.default(this.getTipElement());this.setElementContent(D.find(xn),this.getTitle());var j=this._getContent();typeof j=="function"&&(j=j.call(this.element)),this.setElementContent(D.find(li),j),D.removeClass(po+" "+En)},O._getContent=function(){return this.element.getAttribute("data-content")||this.config.content},O._cleanTipClass=function(){var D=f.default(this.getTipElement()),j=D.attr("class").match(qu);j!==null&&j.length>0&&D.removeClass(j.join(""))},N._jQueryInterface=function(D){return this.each(function(){var j=f.default(this).data(Hs),J=typeof D=="object"?D:null;if(!(!j&&/dispose|hide/.test(D))&&(j||(j=new N(this,J),f.default(this).data(Hs,j)),typeof D=="string")){if(typeof j[D]>"u")throw new TypeError('No method named "'+D+'"');j[D]()}})},B(N,null,[{key:"VERSION",get:function(){return Xl}},{key:"Default",get:function(){return qo}},{key:"NAME",get:function(){return Vs}},{key:"DATA_KEY",get:function(){return Hs}},{key:"Event",get:function(){return Gc}},{key:"EVENT_KEY",get:function(){return fo}},{key:"DefaultType",get:function(){return qc}}]),N}(as);f.default.fn[Vs]=Us._jQueryInterface,f.default.fn[Vs].Constructor=Us,f.default.fn[Vs].noConflict=function(){return f.default.fn[Vs]=Wu,Us._jQueryInterface};var cs="scrollspy",td="4.6.2",di="bs.scrollspy",Ci="."+di,ga=".data-api",Gu=f.default.fn[cs],ed="dropdown-item",Go="active",nd="activate"+Ci,Ku="scroll"+Ci,Yu="load"+Ci+ga,Qu="offset",Kc="position",id='[data-spy="scroll"]',Yc=".nav, .list-group",Ka=".nav-link",od=".nav-item",Qc=".list-group-item",$s=".dropdown",Ya=".dropdown-item",Zc=".dropdown-toggle",Qa={offset:10,method:"auto",target:""},rd={offset:"number",method:"string",target:"(string|element)"},Ws=function(){function T(O,b){var D=this;this._element=O,this._scrollElement=O.tagName==="BODY"?window:O,this._config=this._getConfig(b),this._selector=this._config.target+" "+Ka+","+(this._config.target+" "+Qc+",")+(this._config.target+" "+Ya),this._offsets=[],this._targets=[],this._activeTarget=null,this._scrollHeight=0,f.default(this._scrollElement).on(Ku,function(j){return D._process(j)}),this.refresh(),this._process()}var N=T.prototype;return N.refresh=function(){var b=this,D=this._scrollElement===this._scrollElement.window?Qu:Kc,j=this._config.method==="auto"?D:this._config.method,J=j===Kc?this._getScrollTop():0;this._offsets=[],this._targets=[],this._scrollHeight=this._getScrollHeight();var nt=[].slice.call(document.querySelectorAll(this._selector));nt.map(function(lt){var Dt,Pt=rt.getSelectorFromElement(lt);if(Pt&&(Dt=document.querySelector(Pt)),Dt){var Nt=Dt.getBoundingClientRect();if(Nt.width||Nt.height)return[f.default(Dt)[j]().top+J,Pt]}return null}).filter(Boolean).sort(function(lt,Dt){return lt[0]-Dt[0]}).forEach(function(lt){b._offsets.push(lt[0]),b._targets.push(lt[1])})},N.dispose=function(){f.default.removeData(this._element,di),f.default(this._scrollElement).off(Ci),this._element=null,this._scrollElement=null,this._config=null,this._selector=null,this._offsets=null,this._targets=null,this._activeTarget=null,this._scrollHeight=null},N._getConfig=function(b){if(b=_({},Qa,typeof b=="object"&&b?b:{}),typeof b.target!="string"&&rt.isElement(b.target)){var D=f.default(b.target).attr("id");D||(D=rt.getUID(cs),f.default(b.target).attr("id",D)),b.target="#"+D}return rt.typeCheckConfig(cs,b,rd),b},N._getScrollTop=function(){return this._scrollElement===window?this._scrollElement.pageYOffset:this._scrollElement.scrollTop},N._getScrollHeight=function(){return this._scrollElement.scrollHeight||Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)},N._getOffsetHeight=function(){return this._scrollElement===window?window.innerHeight:this._scrollElement.getBoundingClientRect().height},N._process=function(){var b=this._getScrollTop()+this._config.offset,D=this._getScrollHeight(),j=this._config.offset+D-this._getOffsetHeight();if(this._scrollHeight!==D&&this.refresh(),b>=j){var J=this._targets[this._targets.length-1];this._activeTarget!==J&&this._activate(J);return}if(this._activeTarget&&b<this._offsets[0]&&this._offsets[0]>0){this._activeTarget=null,this._clear();return}for(var nt=this._offsets.length;nt--;){var lt=this._activeTarget!==this._targets[nt]&&b>=this._offsets[nt]&&(typeof this._offsets[nt+1]>"u"||b<this._offsets[nt+1]);lt&&this._activate(this._targets[nt])}},N._activate=function(b){this._activeTarget=b,this._clear();var D=this._selector.split(",").map(function(J){return J+'[data-target="'+b+'"],'+J+'[href="'+b+'"]'}),j=f.default([].slice.call(document.querySelectorAll(D.join(","))));j.hasClass(ed)?(j.closest($s).find(Zc).addClass(Go),j.addClass(Go)):(j.addClass(Go),j.parents(Yc).prev(Ka+", "+Qc).addClass(Go),j.parents(Yc).prev(od).children(Ka).addClass(Go)),f.default(this._scrollElement).trigger(nd,{relatedTarget:b})},N._clear=function(){[].slice.call(document.querySelectorAll(this._selector)).filter(function(b){return b.classList.contains(Go)}).forEach(function(b){return b.classList.remove(Go)})},T._jQueryInterface=function(b){return this.each(function(){var D=f.default(this).data(di),j=typeof b=="object"&&b;if(D||(D=new T(this,j),f.default(this).data(di,D)),typeof b=="string"){if(typeof D[b]>"u")throw new TypeError('No method named "'+b+'"');D[b]()}})},B(T,null,[{key:"VERSION",get:function(){return td}},{key:"Default",get:function(){return Qa}}]),T}();f.default(window).on(Yu,function(){for(var T=[].slice.call(document.querySelectorAll(id)),N=T.length,O=N;O--;){var b=f.default(T[O]);Ws._jQueryInterface.call(b,b.data())}}),f.default.fn[cs]=Ws._jQueryInterface,f.default.fn[cs].Constructor=Ws,f.default.fn[cs].noConflict=function(){return f.default.fn[cs]=Gu,Ws._jQueryInterface};var ma="tab",Lt="4.6.2",ka="bs.tab",ba="."+ka,Yt=".data-api",Za=f.default.fn[ma],Jc="dropdown-menu",jr="active",Zu="disabled",Tt="fade",Xc="show",_e="hide"+ba,sd="hidden"+ba,ad="show"+ba,cd="shown"+ba,ld="click"+ba+Yt,Ju=".dropdown",Xu=".nav, .list-group",tl=".active",_a="> li > .active",th='[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',dd=".dropdown-toggle",eh="> .dropdown-menu .active",Fr=function(){function T(O){this._element=O}var N=T.prototype;return N.show=function(){var b=this;if(!(this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE&&f.default(this._element).hasClass(jr)||f.default(this._element).hasClass(Zu)||this._element.hasAttribute("disabled"))){var D,j,J=f.default(this._element).closest(Xu)[0],nt=rt.getSelectorFromElement(this._element);if(J){var lt=J.nodeName==="UL"||J.nodeName==="OL"?_a:tl;j=f.default.makeArray(f.default(J).find(lt)),j=j[j.length-1]}var Dt=f.default.Event(_e,{relatedTarget:this._element}),Pt=f.default.Event(ad,{relatedTarget:j});if(j&&f.default(j).trigger(Dt),f.default(this._element).trigger(Pt),!(Pt.isDefaultPrevented()||Dt.isDefaultPrevented())){nt&&(D=document.querySelector(nt)),this._activate(this._element,J);var Nt=function(){var Qt=f.default.Event(sd,{relatedTarget:b._element}),Zt=f.default.Event(cd,{relatedTarget:j});f.default(j).trigger(Qt),f.default(b._element).trigger(Zt)};D?this._activate(D,D.parentNode,Nt):Nt()}}},N.dispose=function(){f.default.removeData(this._element,ka),this._element=null},N._activate=function(b,D,j){var J=this,nt=D&&(D.nodeName==="UL"||D.nodeName==="OL")?f.default(D).find(_a):f.default(D).children(tl),lt=nt[0],Dt=j&&lt&&f.default(lt).hasClass(Tt),Pt=function(){return J._transitionComplete(b,lt,j)};if(lt&&Dt){var Nt=rt.getTransitionDurationFromElement(lt);f.default(lt).removeClass(Xc).one(rt.TRANSITION_END,Pt).emulateTransitionEnd(Nt)}else Pt()},N._transitionComplete=function(b,D,j){if(D){f.default(D).removeClass(jr);var J=f.default(D.parentNode).find(eh)[0];J&&f.default(J).removeClass(jr),D.getAttribute("role")==="tab"&&D.setAttribute("aria-selected",!1)}f.default(b).addClass(jr),b.getAttribute("role")==="tab"&&b.setAttribute("aria-selected",!0),rt.reflow(b),b.classList.contains(Tt)&&b.classList.add(Xc);var nt=b.parentNode;if(nt&&nt.nodeName==="LI"&&(nt=nt.parentNode),nt&&f.default(nt).hasClass(Jc)){var lt=f.default(b).closest(Ju)[0];if(lt){var Dt=[].slice.call(lt.querySelectorAll(dd));f.default(Dt).addClass(jr)}b.setAttribute("aria-expanded",!0)}j&&j()},T._jQueryInterface=function(b){return this.each(function(){var D=f.default(this),j=D.data(ka);if(j||(j=new T(this),D.data(ka,j)),typeof b=="string"){if(typeof j[b]>"u")throw new TypeError('No method named "'+b+'"');j[b]()}})},B(T,null,[{key:"VERSION",get:function(){return Lt}}]),T}();f.default(document).on(ld,th,function(T){T.preventDefault(),Fr._jQueryInterface.call(f.default(this),"show")}),f.default.fn[ma]=Fr._jQueryInterface,f.default.fn[ma].Constructor=Fr,f.default.fn[ma].noConflict=function(){return f.default.fn[ma]=Za,Fr._jQueryInterface};var ls="toast",ud="4.6.2",Ja="bs.toast",wa="."+Ja,nh=f.default.fn[ls],el="fade",nl="hide",Aa="show",Vr="showing",il="click.dismiss"+wa,ds="hide"+wa,Pe="hidden"+wa,Ko="show"+wa,Yo="shown"+wa,hd='[data-dismiss="toast"]',Xa={animation:!0,autohide:!0,delay:500},tc={animation:"boolean",autohide:"boolean",delay:"number"},ec=function(){function T(O,b){this._element=O,this._config=this._getConfig(b),this._timeout=null,this._setListeners()}var N=T.prototype;return N.show=function(){var b=this,D=f.default.Event(Ko);if(f.default(this._element).trigger(D),!D.isDefaultPrevented()){this._clearTimeout(),this._config.animation&&this._element.classList.add(el);var j=function(){b._element.classList.remove(Vr),b._element.classList.add(Aa),f.default(b._element).trigger(Yo),b._config.autohide&&(b._timeout=setTimeout(function(){b.hide()},b._config.delay))};if(this._element.classList.remove(nl),rt.reflow(this._element),this._element.classList.add(Vr),this._config.animation){var J=rt.getTransitionDurationFromElement(this._element);f.default(this._element).one(rt.TRANSITION_END,j).emulateTransitionEnd(J)}else j()}},N.hide=function(){if(this._element.classList.contains(Aa)){var b=f.default.Event(ds);f.default(this._element).trigger(b),!b.isDefaultPrevented()&&this._close()}},N.dispose=function(){this._clearTimeout(),this._element.classList.contains(Aa)&&this._element.classList.remove(Aa),f.default(this._element).off(il),f.default.removeData(this._element,Ja),this._element=null,this._config=null},N._getConfig=function(b){return b=_({},Xa,f.default(this._element).data(),typeof b=="object"&&b?b:{}),rt.typeCheckConfig(ls,b,this.constructor.DefaultType),b},N._setListeners=function(){var b=this;f.default(this._element).on(il,hd,function(){return b.hide()})},N._close=function(){var b=this,D=function(){b._element.classList.add(nl),f.default(b._element).trigger(Pe)};if(this._element.classList.remove(Aa),this._config.animation){var j=rt.getTransitionDurationFromElement(this._element);f.default(this._element).one(rt.TRANSITION_END,D).emulateTransitionEnd(j)}else D()},N._clearTimeout=function(){clearTimeout(this._timeout),this._timeout=null},T._jQueryInterface=function(b){return this.each(function(){var D=f.default(this),j=D.data(Ja),J=typeof b=="object"&&b;if(j||(j=new T(this,J),D.data(Ja,j)),typeof b=="string"){if(typeof j[b]>"u")throw new TypeError('No method named "'+b+'"');j[b](this)}})},B(T,null,[{key:"VERSION",get:function(){return ud}},{key:"DefaultType",get:function(){return tc}},{key:"Default",get:function(){return Xa}}]),T}();f.default.fn[ls]=ec._jQueryInterface,f.default.fn[ls].Constructor=ec,f.default.fn[ls].noConflict=function(){return f.default.fn[ls]=nh,ec._jQueryInterface},A.Alert=ke,A.Button=In,A.Carousel=Qe,A.Collapse=yn,A.Dropdown=Gt,A.Modal=js,A.Popover=Us,A.Scrollspy=Ws,A.Tab=Fr,A.Toast=ec,A.Tooltip=as,A.Util=rt,Object.defineProperty(A,"__esModule",{value:!0})})})(gC,gC.exports);$(document).ready(function(){function E(L,B){var _=window.location.href,q=location.hash;if(_=_.replace(q,""),_.indexOf(L+"=")>=0){var U=_.substring(0,_.indexOf(L+"=")),H=_.substring(_.indexOf(L+"="));H=H.substring(H.indexOf("=")+1),H=H.indexOf("&")>=0?H.substring(H.indexOf("&")):"",_=U+L+"="+B+H}else _.indexOf("?")<0?_+="?"+L+"="+B:_+="&"+L+"="+B;window.history.replaceState({path:_},"",_+q)}function h(L,B){var _=window.location.pathname;console.log(_),showLoading()?setTimeout(q,300):q();function q(){$.ajax({url:_+"/?page="+L+"&searchValue="+B,success:function(U){var H=$(U);$("tbody").html(H.find("tbody").html()),$("#card-footer").html(H.find("#card-footer").html());var x=H.find(".pagination").html();x?$(".pagination").html(x):$(".pagination").html(""),hideLoading()}}),L!==null&&B!==null?(E("page",L),E("searchValue",B)):window.history.replaceState({},document.title,window.location.pathname)}origin/develop-pkg_rh}function A(L){return new URLSearchParams(window.location.search).get(L)||""}var R=A("searchValue"),V=A("competenceId"),f=A("page")||1;R&&$("#table_search").val(R),V&&$("#competenceFilter").val(V),h(f,R),$(document).on("change","#competenceFilter",function(){var L=1;$(this).val();var B=$("#table_search").val();h(L,B)}),$("body").on("click",".pagination button",function(L){L.preventDefault();var B=$(this).attr("page-number"),_=$("#table_search").val();$("#competenceFilter").val(),h(B,_)}),$("body").on("keyup","#table_search",function(){var L=$(this).val();$("#competenceFilter").val(),L===""&&updateURLParameters({page:void 0,searchValue:void 0}),h(1,L)}),$(document).on("change","#upload",function(){$("#importForm").submit()}),$(".dropdown-toggle").dropdown()});$(document).ready(function(){function E(L){var B=new URL(window.location.href);Object.keys(L).forEach(_=>{L[_]&&L[_]!==""?B.searchParams.set(_,L[_]):B.searchParams.delete(_)}),window.history.replaceState(null,"",B)}function h(L,B,_=null){var q=window.location.pathname;B.trim()!==""&&$("tbody").html('<tr><td colspan="100%"><div class="loading-spinner"></div></td></tr>'),$.ajax({url:q,data:{page:L,searchValue:B,competenceId:_},success:function(U){setTimeout(function(){var H=$(U);$("tbody").html(H.find("tbody").html()),$("#card-footer").html(H.find("#card-footer").html()),$(".pagination").html(H.find(".pagination").html()||""),E({page:L,searchValue:B,competenceId:_})},3e3)}})}function A(L){return new URLSearchParams(window.location.search).get(L)||""}var R=A("searchValue"),V=A("competenceId"),f=A("page")||1;R&&$("#table_search").val(R),V&&$("#competenceFilter").val(V),h(f,R,V),$(document).on("change","#competenceFilter",function(){var L=1,B=$(this).val(),_=$("#table_search").val();h(L,_,B)}),$("body").on("click",".pagination button",function(L){L.preventDefault();var B=$(this).attr("page-number"),_=$("#table_search").val(),q=$("#competenceFilter").val();h(B,_,q)}),$("body").on("keyup","#table_search",function(){var L=$(this).val(),B=$("#competenceFilter").val();L===""&&E({page:void 0,searchValue:void 0}),h(1,L,B)}),$(document).on("change","#upload",function(){$("#importForm").submit()}),$(".dropdown-toggle").dropdown()});var xu={exports:{}};xu.exports;(function(E,h){(function(A){const R=A.en=A.en||{};R.dictionary=Object.assign(R.dictionary||{},{"(may require <kbd>Fn</kbd>)":"(may require <kbd>Fn</kbd>)","%0 of %1":"%0 of %1",Accept:"Accept",Accessibility:"Accessibility","Accessibility help":"Accessibility help","Align cell text to the bottom":"Align cell text to the bottom","Align cell text to the center":"Align cell text to the center","Align cell text to the left":"Align cell text to the left","Align cell text to the middle":"Align cell text to the middle","Align cell text to the right":"Align cell text to the right","Align cell text to the top":"Align cell text to the top","Align table to the left":"Align table to the left","Align table to the right":"Align table to the right",Alignment:"Alignment",Aquamarine:"Aquamarine",Background:"Background","Below, you can find a list of keyboard shortcuts that can be used in the editor.":"Below, you can find a list of keyboard shortcuts that can be used in the editor.",Black:"Black","Block quote":"Block quote",Blue:"Blue",Bold:"Bold","Bold text":"Bold text",Border:"Border","Break text":"Break text","Bulleted List":"Bulleted List","Bulleted list styles toolbar":"Bulleted list styles toolbar",Cancel:"Cancel","Cannot access default workspace.":"Cannot access default workspace.","Cannot determine a category for the uploaded file.":"Cannot determine a category for the uploaded file.","Cannot upload file:":"Cannot upload file:","Caption for image: %0":"Caption for image: %0","Caption for the image":"Caption for the image","Cell properties":"Cell properties","Center table":"Center table","Centered image":"Centered image","Change image text alternative":"Change image text alternative","Choose heading":"Choose heading",Circle:"Circle",Clear:"Clear","Click to edit block":"Click to edit block",Close:"Close","Close contextual balloons, dropdowns, and dialogs":"Close contextual balloons, dropdowns, and dialogs",Code:"Code",Color:"Color","Color picker":"Color picker",Column:"Column","Content editing keystrokes":"Content editing keystrokes","Copy selected content":"Copy selected content","Could not insert image at the current position.":"Could not insert image at the current position.","Could not obtain resized image URL.":"Could not obtain resized image URL.","Create link":"Create link",Custom:"Custom","Custom image size":"Custom image size",Dashed:"Dashed",Decimal:"Decimal","Decimal with leading zero":"Decimal with leading zero","Decrease indent":"Decrease indent","Decrease list item indent":"Decrease list item indent","Delete column":"Delete column","Delete row":"Delete row","Dim grey":"Dim grey",Dimensions:"Dimensions",Disc:"Disc",Dotted:"Dotted",Double:"Double",Downloadable:"Downloadable","Drag to move":"Drag to move","Dropdown toolbar":"Dropdown toolbar","Edit block":"Edit block","Edit image":"Edit image","Edit link":"Edit link","Editor block content toolbar":"Editor block content toolbar","Editor contextual toolbar":"Editor contextual toolbar","Editor dialog":"Editor dialog","Editor editing area: %0":"Editor editing area: %0","Editor menu bar":"Editor menu bar","Editor toolbar":"Editor toolbar","Enter image caption":"Enter image caption","Enter table caption":"Enter table caption","Entering a to-do list":"Entering a to-do list","Error during image upload":"Error during image upload","Execute the currently focused button. Executing buttons that interact with the editor content moves the focus back to the content.":"Execute the currently focused button. Executing buttons that interact with the editor content moves the focus back to the content.","Failed to determine category of edited image.":"Failed to determine category of edited image.","Full size image":"Full size image",Green:"Green",Grey:"Grey",Groove:"Groove","Header column":"Header column","Header row":"Header row",Heading:"Heading","Heading 1":"Heading 1","Heading 2":"Heading 2","Heading 3":"Heading 3","Heading 4":"Heading 4","Heading 5":"Heading 5","Heading 6":"Heading 6",Height:"Height","Help Contents. To close this dialog press ESC.":"Help Contents. To close this dialog press ESC.",HEX:"HEX","Horizontal text alignment toolbar":"Horizontal text alignment toolbar","Image from computer":"Image from computer","Image resize list":"Image resize list","Image toolbar":"Image toolbar","Image upload complete":"Image upload complete","image widget":"image widget","In line":"In line","Increase indent":"Increase indent","Increase list item indent":"Increase list item indent",Insert:"Insert","Insert a hard break (a new paragraph)":"Insert a hard break (a new paragraph)","Insert a new paragraph directly after a widget":"Insert a new paragraph directly after a widget","Insert a new paragraph directly before a widget":"Insert a new paragraph directly before a widget","Insert a new table row (when in the last cell of a table)":"Insert a new table row (when in the last cell of a table)","Insert a soft break (a <code>&lt;br&gt;</code> element)":"Insert a soft break (a <code>&lt;br&gt;</code> element)","Insert column left":"Insert column left","Insert column right":"Insert column right","Insert image":"Insert image","Insert image via URL":"Insert image via URL","Insert image with file manager":"Insert image with file manager","Insert media":"Insert media","Insert paragraph after block":"Insert paragraph after block","Insert paragraph before block":"Insert paragraph before block","Insert row above":"Insert row above","Insert row below":"Insert row below","Insert table":"Insert table","Insert with file manager":"Insert with file manager","Inserting image failed":"Inserting image failed",Inset:"Inset","Invalid start index value.":"Invalid start index value.",Italic:"Italic","Italic text":"Italic text","Justify cell text":"Justify cell text","Keystrokes that can be used in a list":"Keystrokes that can be used in a list","Keystrokes that can be used in a table cell":"Keystrokes that can be used in a table cell","Keystrokes that can be used when a widget is selected (for example: image, table, etc.)":"Keystrokes that can be used when a widget is selected (for example: image, table, etc.)","Leaving a to-do list":"Leaving a to-do list","Left aligned image":"Left aligned image","Light blue":"Light blue","Light green":"Light green","Light grey":"Light grey",Link:"Link","Link image":"Link image","Link URL":"Link URL","Link URL must not be empty.":"Link URL must not be empty.","List properties":"List properties","Lower-latin":"Lower-latin","Lower–roman":"Lower–roman","Media toolbar":"Media toolbar","Media URL":"Media URL","media widget":"media widget",MENU_BAR_MENU_EDIT:"Edit",MENU_BAR_MENU_FILE:"File",MENU_BAR_MENU_FONT:"Font",MENU_BAR_MENU_FORMAT:"Format",MENU_BAR_MENU_HELP:"Help",MENU_BAR_MENU_INSERT:"Insert",MENU_BAR_MENU_TEXT:"Text",MENU_BAR_MENU_TOOLS:"Tools",MENU_BAR_MENU_VIEW:"View","Merge cell down":"Merge cell down","Merge cell left":"Merge cell left","Merge cell right":"Merge cell right","Merge cell up":"Merge cell up","Merge cells":"Merge cells","Move focus between form fields (inputs, buttons, etc.)":"Move focus between form fields (inputs, buttons, etc.)","Move focus in and out of an active dialog window":"Move focus in and out of an active dialog window","Move focus to the menu bar, navigate between menu bars":"Move focus to the menu bar, navigate between menu bars","Move focus to the toolbar, navigate between toolbars":"Move focus to the toolbar, navigate between toolbars","Move out of a link":"Move out of a link","Move out of an inline code style":"Move out of an inline code style","Move the caret to allow typing directly after a widget":"Move the caret to allow typing directly after a widget","Move the caret to allow typing directly before a widget":"Move the caret to allow typing directly before a widget","Move the selection to the next cell":"Move the selection to the next cell","Move the selection to the previous cell":"Move the selection to the previous cell","Navigate through the table":"Navigate through the table","Navigate through the toolbar or menu bar":"Navigate through the toolbar or menu bar",Next:"Next","No results found":"No results found","No searchable items":"No searchable items",None:"None","Numbered List":"Numbered List","Numbered list styles toolbar":"Numbered list styles toolbar","Open file manager":"Open file manager","Open in a new tab":"Open in a new tab","Open link in new tab":"Open link in new tab","Open media in new tab":"Open media in new tab","Open the accessibility help dialog":"Open the accessibility help dialog",Orange:"Orange",Original:"Original",Outset:"Outset",Padding:"Padding",Paragraph:"Paragraph","Paste content":"Paste content","Paste content as plain text":"Paste content as plain text","Paste the media URL in the input.":"Paste the media URL in the input.",'Please enter a valid color (e.g. "ff0000").':'Please enter a valid color (e.g. "ff0000").',"Press %0 for help.":"Press %0 for help.","Press Enter to type after or press Shift + Enter to type before the widget":"Press Enter to type after or press Shift + Enter to type before the widget",Previous:"Previous","Processing the edited image.":"Processing the edited image.",Purple:"Purple",Red:"Red",Redo:"Redo","Remove color":"Remove color","Replace from computer":"Replace from computer","Replace image":"Replace image","Replace image from computer":"Replace image from computer","Replace image with file manager":"Replace image with file manager","Replace with file manager":"Replace with file manager","Resize image":"Resize image","Resize image (in %0)":"Resize image (in %0)","Resize image to %0":"Resize image to %0","Resize image to the original size":"Resize image to the original size","Restore default":"Restore default","Reversed order":"Reversed order","Revert autoformatting action":"Revert autoformatting action","Rich Text Editor":"Rich Text Editor",Ridge:"Ridge","Right aligned image":"Right aligned image",Row:"Row",Save:"Save","Select all":"Select all","Select column":"Select column","Select row":"Select row","Selecting resized image failed":"Selecting resized image failed","Server failed to process the image.":"Server failed to process the image.","Show more items":"Show more items","Side image":"Side image",Solid:"Solid","Split cell horizontally":"Split cell horizontally","Split cell vertically":"Split cell vertically",Square:"Square","Start at":"Start at","Start index must be greater than 0.":"Start index must be greater than 0.",Strikethrough:"Strikethrough","Strikethrough text":"Strikethrough text",Style:"Style",Subscript:"Subscript",Superscript:"Superscript",Table:"Table","Table alignment toolbar":"Table alignment toolbar","Table cell text alignment":"Table cell text alignment","Table properties":"Table properties","Table toolbar":"Table toolbar","Text alternative":"Text alternative",'The color is invalid. Try "#FF0000" or "rgb(255,0,0)" or "red".':'The color is invalid. Try "#FF0000" or "rgb(255,0,0)" or "red".',"The URL must not be empty.":"The URL must not be empty.",'The value is invalid. Try "10px" or "2em" or simply "2".':'The value is invalid. Try "10px" or "2em" or simply "2".',"The value must not be empty.":"The value must not be empty.","The value should be a plain number.":"The value should be a plain number.","These keyboard shortcuts allow for quick access to content editing features.":"These keyboard shortcuts allow for quick access to content editing features.","This link has no URL":"This link has no URL","This media URL is not supported.":"This media URL is not supported.","Tip: Paste the URL into the content to embed faster.":"Tip: Paste the URL into the content to embed faster.","To-do List":"To-do List","Toggle caption off":"Toggle caption off","Toggle caption on":"Toggle caption on","Toggle the circle list style":"Toggle the circle list style","Toggle the decimal list style":"Toggle the decimal list style","Toggle the decimal with leading zero list style":"Toggle the decimal with leading zero list style","Toggle the disc list style":"Toggle the disc list style","Toggle the lower–latin list style":"Toggle the lower–latin list style","Toggle the lower–roman list style":"Toggle the lower–roman list style","Toggle the square list style":"Toggle the square list style","Toggle the upper–latin list style":"Toggle the upper–latin list style","Toggle the upper–roman list style":"Toggle the upper–roman list style",Turquoise:"Turquoise","Type or paste your content here.":"Type or paste your content here.","Type your title":"Type your title",Underline:"Underline","Underline text":"Underline text",Undo:"Undo",Unlink:"Unlink",Update:"Update","Update image URL":"Update image URL","Upload failed":"Upload failed","Upload from computer":"Upload from computer","Upload image from computer":"Upload image from computer","Upload in progress":"Upload in progress","Uploading image":"Uploading image","Upper-latin":"Upper-latin","Upper-roman":"Upper-roman","Use the following keystrokes for more efficient navigation in the CKEditor 5 user interface.":"Use the following keystrokes for more efficient navigation in the CKEditor 5 user interface.","User interface and content navigation keystrokes":"User interface and content navigation keystrokes","Vertical text alignment toolbar":"Vertical text alignment toolbar",White:"White","Widget toolbar":"Widget toolbar",Width:"Width","Wrap text":"Wrap text",Yellow:"Yellow"})})(window.CKEDITOR_TRANSLATIONS||(window.CKEDITOR_TRANSLATIONS={})),function(A,R){E.exports=R()}(self,()=>(()=>{var A={9246:(L,B,_)=>{const q=_(6931),U={};for(const x of Object.keys(q))U[q[x]]=x;const H={rgb:{channels:3,labels:"rgb"},hsl:{channels:3,labels:"hsl"},hsv:{channels:3,labels:"hsv"},hwb:{channels:3,labels:"hwb"},cmyk:{channels:4,labels:"cmyk"},xyz:{channels:3,labels:"xyz"},lab:{channels:3,labels:"lab"},lch:{channels:3,labels:"lch"},hex:{channels:1,labels:["hex"]},keyword:{channels:1,labels:["keyword"]},ansi16:{channels:1,labels:["ansi16"]},ansi256:{channels:1,labels:["ansi256"]},hcg:{channels:3,labels:["h","c","g"]},apple:{channels:3,labels:["r16","g16","b16"]},gray:{channels:1,labels:["gray"]}};L.exports=H;for(const x of Object.keys(H)){if(!("channels"in H[x]))throw new Error("missing channels property: "+x);if(!("labels"in H[x]))throw new Error("missing channel labels property: "+x);if(H[x].labels.length!==H[x].channels)throw new Error("channel and label counts mismatch: "+x);const{channels:P,labels:Y}=H[x];delete H[x].channels,delete H[x].labels,Object.defineProperty(H[x],"channels",{value:P}),Object.defineProperty(H[x],"labels",{value:Y})}H.rgb.hsl=function(x){const P=x[0]/255,Y=x[1]/255,Q=x[2]/255,it=Math.min(P,Y,Q),at=Math.max(P,Y,Q),rt=at-it;let yt,xt;at===it?yt=0:P===at?yt=(Y-Q)/rt:Y===at?yt=2+(Q-P)/rt:Q===at&&(yt=4+(P-Y)/rt),yt=Math.min(60*yt,360),yt<0&&(yt+=360);const Ht=(it+at)/2;return xt=at===it?0:Ht<=.5?rt/(at+it):rt/(2-at-it),[yt,100*xt,100*Ht]},H.rgb.hsv=function(x){let P,Y,Q,it,at;const rt=x[0]/255,yt=x[1]/255,xt=x[2]/255,Ht=Math.max(rt,yt,xt),Kt=Ht-Math.min(rt,yt,xt),m=function(It){return(Ht-It)/6/Kt+.5};return Kt===0?(it=0,at=0):(at=Kt/Ht,P=m(rt),Y=m(yt),Q=m(xt),rt===Ht?it=Q-Y:yt===Ht?it=.3333333333333333+P-Q:xt===Ht&&(it=.6666666666666666+Y-P),it<0?it+=1:it>1&&(it-=1)),[360*it,100*at,100*Ht]},H.rgb.hwb=function(x){const P=x[0],Y=x[1];let Q=x[2];const it=H.rgb.hsl(x)[0],at=1/255*Math.min(P,Math.min(Y,Q));return Q=1-.00392156862745098*Math.max(P,Math.max(Y,Q)),[it,100*at,100*Q]},H.rgb.cmyk=function(x){const P=x[0]/255,Y=x[1]/255,Q=x[2]/255,it=Math.min(1-P,1-Y,1-Q);return[100*((1-P-it)/(1-it)||0),100*((1-Y-it)/(1-it)||0),100*((1-Q-it)/(1-it)||0),100*it]},H.rgb.keyword=function(x){const P=U[x];if(P)return P;let Y,Q=1/0;for(const rt of Object.keys(q)){const yt=q[rt],xt=(at=yt,((it=x)[0]-at[0])**2+(it[1]-at[1])**2+(it[2]-at[2])**2);xt<Q&&(Q=xt,Y=rt)}var it,at;return Y},H.keyword.rgb=function(x){return q[x]},H.rgb.xyz=function(x){let P=x[0]/255,Y=x[1]/255,Q=x[2]/255;return P=P>.04045?((P+.055)/1.055)**2.4:P/12.92,Y=Y>.04045?((Y+.055)/1.055)**2.4:Y/12.92,Q=Q>.04045?((Q+.055)/1.055)**2.4:Q/12.92,[100*(.4124*P+.3576*Y+.1805*Q),100*(.2126*P+.7152*Y+.0722*Q),100*(.0193*P+.1192*Y+.9505*Q)]},H.rgb.lab=function(x){const P=H.rgb.xyz(x);let Y=P[0],Q=P[1],it=P[2];return Y/=95.047,Q/=100,it/=108.883,Y=Y>.008856?Y**.3333333333333333:7.787*Y+.13793103448275862,Q=Q>.008856?Q**.3333333333333333:7.787*Q+.13793103448275862,it=it>.008856?it**.3333333333333333:7.787*it+.13793103448275862,[116*Q-16,500*(Y-Q),200*(Q-it)]},H.hsl.rgb=function(x){const P=x[0]/360,Y=x[1]/100,Q=x[2]/100;let it,at,rt;if(Y===0)return rt=255*Q,[rt,rt,rt];it=Q<.5?Q*(1+Y):Q+Y-Q*Y;const yt=2*Q-it,xt=[0,0,0];for(let Ht=0;Ht<3;Ht++)at=P+.3333333333333333*-(Ht-1),at<0&&at++,at>1&&at--,rt=6*at<1?yt+6*(it-yt)*at:2*at<1?it:3*at<2?yt+(it-yt)*(.6666666666666666-at)*6:yt,xt[Ht]=255*rt;return xt},H.hsl.hsv=function(x){const P=x[0];let Y=x[1]/100,Q=x[2]/100,it=Y;const at=Math.max(Q,.01);return Q*=2,Y*=Q<=1?Q:2-Q,it*=at<=1?at:2-at,[P,100*(Q===0?2*it/(at+it):2*Y/(Q+Y)),100*((Q+Y)/2)]},H.hsv.rgb=function(x){const P=x[0]/60,Y=x[1]/100;let Q=x[2]/100;const it=Math.floor(P)%6,at=P-Math.floor(P),rt=255*Q*(1-Y),yt=255*Q*(1-Y*at),xt=255*Q*(1-Y*(1-at));switch(Q*=255,it){case 0:return[Q,xt,rt];case 1:return[yt,Q,rt];case 2:return[rt,Q,xt];case 3:return[rt,yt,Q];case 4:return[xt,rt,Q];case 5:return[Q,rt,yt]}},H.hsv.hsl=function(x){const P=x[0],Y=x[1]/100,Q=x[2]/100,it=Math.max(Q,.01);let at,rt;rt=(2-Y)*Q;const yt=(2-Y)*it;return at=Y*it,at/=yt<=1?yt:2-yt,at=at||0,rt/=2,[P,100*at,100*rt]},H.hwb.rgb=function(x){const P=x[0]/360;let Y=x[1]/100,Q=x[2]/100;const it=Y+Q;let at;it>1&&(Y/=it,Q/=it);const rt=Math.floor(6*P),yt=1-Q;at=6*P-rt,1&rt&&(at=1-at);const xt=Y+at*(yt-Y);let Ht,Kt,m;switch(rt){default:case 6:case 0:Ht=yt,Kt=xt,m=Y;break;case 1:Ht=xt,Kt=yt,m=Y;break;case 2:Ht=Y,Kt=yt,m=xt;break;case 3:Ht=Y,Kt=xt,m=yt;break;case 4:Ht=xt,Kt=Y,m=yt;break;case 5:Ht=yt,Kt=Y,m=xt}return[255*Ht,255*Kt,255*m]},H.cmyk.rgb=function(x){const P=x[0]/100,Y=x[1]/100,Q=x[2]/100,it=x[3]/100;return[255*(1-Math.min(1,P*(1-it)+it)),255*(1-Math.min(1,Y*(1-it)+it)),255*(1-Math.min(1,Q*(1-it)+it))]},H.xyz.rgb=function(x){const P=x[0]/100,Y=x[1]/100,Q=x[2]/100;let it,at,rt;return it=3.2406*P+-1.5372*Y+-.4986*Q,at=-.9689*P+1.8758*Y+.0415*Q,rt=.0557*P+-.204*Y+1.057*Q,it=it>.0031308?1.055*it**.4166666666666667-.055:12.92*it,at=at>.0031308?1.055*at**.4166666666666667-.055:12.92*at,rt=rt>.0031308?1.055*rt**.4166666666666667-.055:12.92*rt,it=Math.min(Math.max(0,it),1),at=Math.min(Math.max(0,at),1),rt=Math.min(Math.max(0,rt),1),[255*it,255*at,255*rt]},H.xyz.lab=function(x){let P=x[0],Y=x[1],Q=x[2];return P/=95.047,Y/=100,Q/=108.883,P=P>.008856?P**.3333333333333333:7.787*P+.13793103448275862,Y=Y>.008856?Y**.3333333333333333:7.787*Y+.13793103448275862,Q=Q>.008856?Q**.3333333333333333:7.787*Q+.13793103448275862,[116*Y-16,500*(P-Y),200*(Y-Q)]},H.lab.xyz=function(x){let P,Y,Q;Y=(x[0]+16)/116,P=x[1]/500+Y,Q=Y-x[2]/200;const it=Y**3,at=P**3,rt=Q**3;return Y=it>.008856?it:(Y-.13793103448275862)/7.787,P=at>.008856?at:(P-.13793103448275862)/7.787,Q=rt>.008856?rt:(Q-.13793103448275862)/7.787,P*=95.047,Y*=100,Q*=108.883,[P,Y,Q]},H.lab.lch=function(x){const P=x[0],Y=x[1],Q=x[2];let it;return it=360*Math.atan2(Q,Y)/2/Math.PI,it<0&&(it+=360),[P,Math.sqrt(Y*Y+Q*Q),it]},H.lch.lab=function(x){const P=x[0],Y=x[1],Q=x[2]/360*2*Math.PI;return[P,Y*Math.cos(Q),Y*Math.sin(Q)]},H.rgb.ansi16=function(x,P=null){const[Y,Q,it]=x;let at=P===null?H.rgb.hsv(x)[2]:P;if(at=Math.round(at/50),at===0)return 30;let rt=30+(Math.round(it/255)<<2|Math.round(Q/255)<<1|Math.round(Y/255));return at===2&&(rt+=60),rt},H.hsv.ansi16=function(x){return H.rgb.ansi16(H.hsv.rgb(x),x[2])},H.rgb.ansi256=function(x){const P=x[0],Y=x[1],Q=x[2];return P===Y&&Y===Q?P<8?16:P>248?231:Math.round((P-8)/247*24)+232:16+36*Math.round(P/255*5)+6*Math.round(Y/255*5)+Math.round(Q/255*5)},H.ansi16.rgb=function(x){let P=x%10;if(P===0||P===7)return x>50&&(P+=3.5),P=P/10.5*255,[P,P,P];const Y=.5*(1+~~(x>50));return[(1&P)*Y*255,(P>>1&1)*Y*255,(P>>2&1)*Y*255]},H.ansi256.rgb=function(x){if(x>=232){const Y=10*(x-232)+8;return[Y,Y,Y]}let P;return x-=16,[Math.floor(x/36)/5*255,Math.floor((P=x%36)/6)/5*255,P%6/5*255]},H.rgb.hex=function(x){const P=(((255&Math.round(x[0]))<<16)+((255&Math.round(x[1]))<<8)+(255&Math.round(x[2]))).toString(16).toUpperCase();return"000000".substring(P.length)+P},H.hex.rgb=function(x){const P=x.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);if(!P)return[0,0,0];let Y=P[0];P[0].length===3&&(Y=Y.split("").map(it=>it+it).join(""));const Q=parseInt(Y,16);return[Q>>16&255,Q>>8&255,255&Q]},H.rgb.hcg=function(x){const P=x[0]/255,Y=x[1]/255,Q=x[2]/255,it=Math.max(Math.max(P,Y),Q),at=Math.min(Math.min(P,Y),Q),rt=it-at;let yt,xt;return yt=rt<1?at/(1-rt):0,xt=rt<=0?0:it===P?(Y-Q)/rt%6:it===Y?2+(Q-P)/rt:4+(P-Y)/rt,xt/=6,xt%=1,[360*xt,100*rt,100*yt]},H.hsl.hcg=function(x){const P=x[1]/100,Y=x[2]/100,Q=Y<.5?2*P*Y:2*P*(1-Y);let it=0;return Q<1&&(it=(Y-.5*Q)/(1-Q)),[x[0],100*Q,100*it]},H.hsv.hcg=function(x){const P=x[1]/100,Y=x[2]/100,Q=P*Y;let it=0;return Q<1&&(it=(Y-Q)/(1-Q)),[x[0],100*Q,100*it]},H.hcg.rgb=function(x){const P=x[0]/360,Y=x[1]/100,Q=x[2]/100;if(Y===0)return[255*Q,255*Q,255*Q];const it=[0,0,0],at=P%1*6,rt=at%1,yt=1-rt;let xt=0;switch(Math.floor(at)){case 0:it[0]=1,it[1]=rt,it[2]=0;break;case 1:it[0]=yt,it[1]=1,it[2]=0;break;case 2:it[0]=0,it[1]=1,it[2]=rt;break;case 3:it[0]=0,it[1]=yt,it[2]=1;break;case 4:it[0]=rt,it[1]=0,it[2]=1;break;default:it[0]=1,it[1]=0,it[2]=yt}return xt=(1-Y)*Q,[255*(Y*it[0]+xt),255*(Y*it[1]+xt),255*(Y*it[2]+xt)]},H.hcg.hsv=function(x){const P=x[1]/100,Y=P+x[2]/100*(1-P);let Q=0;return Y>0&&(Q=P/Y),[x[0],100*Q,100*Y]},H.hcg.hsl=function(x){const P=x[1]/100,Y=x[2]/100*(1-P)+.5*P;let Q=0;return Y>0&&Y<.5?Q=P/(2*Y):Y>=.5&&Y<1&&(Q=P/(2*(1-Y))),[x[0],100*Q,100*Y]},H.hcg.hwb=function(x){const P=x[1]/100,Y=P+x[2]/100*(1-P);return[x[0],100*(Y-P),100*(1-Y)]},H.hwb.hcg=function(x){const P=x[1]/100,Y=1-x[2]/100,Q=Y-P;let it=0;return Q<1&&(it=(Y-Q)/(1-Q)),[x[0],100*Q,100*it]},H.apple.rgb=function(x){return[x[0]/65535*255,x[1]/65535*255,x[2]/65535*255]},H.rgb.apple=function(x){return[x[0]/255*65535,x[1]/255*65535,x[2]/255*65535]},H.gray.rgb=function(x){return[x[0]/100*255,x[0]/100*255,x[0]/100*255]},H.gray.hsl=function(x){return[0,0,x[0]]},H.gray.hsv=H.gray.hsl,H.gray.hwb=function(x){return[0,100,x[0]]},H.gray.cmyk=function(x){return[0,0,0,x[0]]},H.gray.lab=function(x){return[x[0],0,0]},H.gray.hex=function(x){const P=255&Math.round(x[0]/100*255),Y=((P<<16)+(P<<8)+P).toString(16).toUpperCase();return"000000".substring(Y.length)+Y},H.rgb.gray=function(x){return[(x[0]+x[1]+x[2])/3/255*100]}},9047:(L,B,_)=>{const q=_(9246),U=_(802),H={};Object.keys(q).forEach(x=>{H[x]={},Object.defineProperty(H[x],"channels",{value:q[x].channels}),Object.defineProperty(H[x],"labels",{value:q[x].labels});const P=U(x);Object.keys(P).forEach(Y=>{const Q=P[Y];H[x][Y]=function(it){const at=function(...rt){const yt=rt[0];if(yt==null)return yt;yt.length>1&&(rt=yt);const xt=it(rt);if(typeof xt=="object")for(let Ht=xt.length,Kt=0;Kt<Ht;Kt++)xt[Kt]=Math.round(xt[Kt]);return xt};return"conversion"in it&&(at.conversion=it.conversion),at}(Q),H[x][Y].raw=function(it){const at=function(...rt){const yt=rt[0];return yt==null?yt:(yt.length>1&&(rt=yt),it(rt))};return"conversion"in it&&(at.conversion=it.conversion),at}(Q)})}),L.exports=H},802:(L,B,_)=>{const q=_(9246);function U(P){const Y=function(){const it={},at=Object.keys(q);for(let rt=at.length,yt=0;yt<rt;yt++)it[at[yt]]={distance:-1,parent:null};return it}(),Q=[P];for(Y[P].distance=0;Q.length;){const it=Q.pop(),at=Object.keys(q[it]);for(let rt=at.length,yt=0;yt<rt;yt++){const xt=at[yt],Ht=Y[xt];Ht.distance===-1&&(Ht.distance=Y[it].distance+1,Ht.parent=it,Q.unshift(xt))}}return Y}function H(P,Y){return function(Q){return Y(P(Q))}}function x(P,Y){const Q=[Y[P].parent,P];let it=q[Y[P].parent][P],at=Y[P].parent;for(;Y[at].parent;)Q.unshift(Y[at].parent),it=H(q[Y[at].parent][at],it),at=Y[at].parent;return it.conversion=Q,it}L.exports=function(P){const Y=U(P),Q={},it=Object.keys(Y);for(let at=it.length,rt=0;rt<at;rt++){const yt=it[rt];Y[yt].parent!==null&&(Q[yt]=x(yt,Y))}return Q}},6931:L=>{L.exports={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]}},4199:(L,B,_)=>{_.d(B,{A:()=>P});var q=_(9372),U=_.n(q),H=_(935),x=_.n(H)()(U());x.push([L.id,".ck-content code{background-color:hsla(0,0%,78%,.3);border-radius:2px;padding:.15em}.ck.ck-editor__editable .ck-code_selected{background-color:hsla(0,0%,78%,.5)}","",{version:3,sources:["webpack://./../ckeditor5-basic-styles/theme/code.css"],names:[],mappings:"AAKA,iBACC,kCAAuC,CAEvC,iBAAkB,CADlB,aAED,CAEA,0CACC,kCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content code {
	background-color: hsla(0, 0%, 78%, 0.3);
	padding: .15em;
	border-radius: 2px;
}

.ck.ck-editor__editable .ck-code_selected  {
	background-color: hsla(0, 0%, 78%, 0.5);
}
`],sourceRoot:""}]);const P=x},8708:(L,B,_)=>{_.d(B,{A:()=>P});var q=_(9372),U=_.n(q),H=_(935),x=_.n(H)()(U());x.push([L.id,".ck-content blockquote{border-left:5px solid #ccc;font-style:italic;margin-left:0;margin-right:0;overflow:hidden;padding-left:1.5em;padding-right:1.5em}.ck-content[dir=rtl] blockquote{border-left:0;border-right:5px solid #ccc}","",{version:3,sources:["webpack://./../ckeditor5-block-quote/theme/blockquote.css"],names:[],mappings:"AAKA,uBAWC,0BAAsC,CADtC,iBAAkB,CAFlB,aAAc,CACd,cAAe,CAPf,eAAgB,CAIhB,kBAAmB,CADnB,mBAOD,CAEA,gCACC,aAAc,CACd,2BACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content blockquote {
	/* See #12 */
	overflow: hidden;

	/* https://github.com/ckeditor/ckeditor5-block-quote/issues/15 */
	padding-right: 1.5em;
	padding-left: 1.5em;

	margin-left: 0;
	margin-right: 0;
	font-style: italic;
	border-left: solid 5px hsl(0, 0%, 80%);
}

.ck-content[dir="rtl"] blockquote {
	border-left: 0;
	border-right: solid 5px hsl(0, 0%, 80%);
}
`],sourceRoot:""}]);const P=x},1866:(L,B,_)=>{_.d(B,{A:()=>P});var q=_(9372),U=_.n(q),H=_(935),x=_.n(H)()(U());x.push([L.id,':root{--ck-image-processing-highlight-color:#f9fafa;--ck-image-processing-background-color:#e3e5e8}.ck.ck-editor__editable .image.image-processing{position:relative}.ck.ck-editor__editable .image.image-processing:before{animation:ck-image-processing-animation 2s linear infinite;background:linear-gradient(90deg,var(--ck-image-processing-background-color),var(--ck-image-processing-highlight-color),var(--ck-image-processing-background-color));background-size:200% 100%;content:"";height:100%;left:0;position:absolute;top:0;width:100%;z-index:1}.ck.ck-editor__editable .image.image-processing img{height:100%}@keyframes ck-image-processing-animation{0%{background-position:200% 0}to{background-position:-200% 0}}',"",{version:3,sources:["webpack://./../ckeditor5-ckbox/theme/ckboximageedit.css"],names:[],mappings:"AAKA,MAEC,6CAAyD,CACzD,8CACD,CAIE,gDACC,iBA2BD,CAzBC,uDAmBC,0DAA2D,CAR3D,oKAKC,CACD,yBAA0B,CAhB1B,UAAW,CAOX,WAAY,CAHZ,MAAO,CAFP,iBAAkB,CAClB,KAAM,CAKN,UAAW,CAHX,SAcD,CAEA,oDACC,WACD,CAKH,yCACC,GACC,0BACD,CACA,GACC,2BACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/* Based on default CKBox theme colors */
	--ck-image-processing-highlight-color: hsl(220, 10%, 98%);
	--ck-image-processing-background-color: hsl(220, 10%, 90%);
}

.ck.ck-editor__editable {
	& .image {
		&.image-processing {
			position: relative;

			&:before {
				content: '';

				position: absolute;
				top: 0;
				left: 0;
				z-index: 1;

				height: 100%;
				width: 100%;

				background: linear-gradient(
					90deg,
					var(--ck-image-processing-background-color),
					var(--ck-image-processing-highlight-color),
					var(--ck-image-processing-background-color)
				);
				background-size: 200% 100%;

				animation: ck-image-processing-animation 2s linear infinite;
			}

			& img {
				height: 100%;
			}
		}
	}
}

@keyframes ck-image-processing-animation {
	0% {
		background-position: 200% 0;
	}
	100% {
		background-position: -200% 0;
	}
}
`],sourceRoot:""}]);const P=x},7793:(L,B,_)=>{_.d(B,{A:()=>P});var q=_(9372),U=_.n(q),H=_(935),x=_.n(H)()(U());x.push([L.id,'.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position{display:inline;pointer-events:none;position:relative}.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position span{position:absolute;width:0}.ck.ck-editor__editable .ck-widget:-webkit-drag>.ck-widget__selection-handle,.ck.ck-editor__editable .ck-widget:-webkit-drag>.ck-widget__type-around{display:none}.ck.ck-clipboard-drop-target-line{pointer-events:none;position:absolute}:root{--ck-clipboard-drop-target-dot-width:12px;--ck-clipboard-drop-target-dot-height:8px;--ck-clipboard-drop-target-color:var(--ck-color-focus-border)}.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position span{background:var(--ck-clipboard-drop-target-color);border:1px solid var(--ck-clipboard-drop-target-color);bottom:calc(var(--ck-clipboard-drop-target-dot-height)*-.5);margin-left:-1px;top:calc(var(--ck-clipboard-drop-target-dot-height)*-.5)}.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position span:after{border-color:var(--ck-clipboard-drop-target-color) transparent transparent transparent;border-style:solid;border-width:calc(var(--ck-clipboard-drop-target-dot-height)) calc(var(--ck-clipboard-drop-target-dot-width)*.5) 0 calc(var(--ck-clipboard-drop-target-dot-width)*.5);content:"";display:block;height:0;left:50%;position:absolute;top:calc(var(--ck-clipboard-drop-target-dot-height)*-.5);transform:translateX(-50%);width:0}.ck.ck-editor__editable .ck-widget.ck-clipboard-drop-target-range{outline:var(--ck-widget-outline-thickness) solid var(--ck-clipboard-drop-target-color)!important}.ck.ck-editor__editable .ck-widget:-webkit-drag{zoom:.6;outline:none!important}.ck.ck-clipboard-drop-target-line{background:var(--ck-clipboard-drop-target-color);border:1px solid var(--ck-clipboard-drop-target-color);height:0;margin-top:-1px}.ck.ck-clipboard-drop-target-line:before{border-style:solid;content:"";height:0;position:absolute;top:calc(var(--ck-clipboard-drop-target-dot-width)*-.5);width:0}[dir=ltr] .ck.ck-clipboard-drop-target-line:before{border-color:transparent transparent transparent var(--ck-clipboard-drop-target-color);border-width:calc(var(--ck-clipboard-drop-target-dot-width)*.5) 0 calc(var(--ck-clipboard-drop-target-dot-width)*.5) var(--ck-clipboard-drop-target-dot-height);left:-1px}[dir=rtl] .ck.ck-clipboard-drop-target-line:before{border-color:transparent var(--ck-clipboard-drop-target-color) transparent transparent;border-width:calc(var(--ck-clipboard-drop-target-dot-width)*.5) var(--ck-clipboard-drop-target-dot-height) calc(var(--ck-clipboard-drop-target-dot-width)*.5) 0;right:-1px}',"",{version:3,sources:["webpack://./../ckeditor5-clipboard/theme/clipboard.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-clipboard/clipboard.css"],names:[],mappings:"AASC,8DACC,cAAe,CAEf,mBAAoB,CADpB,iBAOD,CAJC,mEACC,iBAAkB,CAClB,OACD,CAWA,qJACC,YACD,CAIF,kCAEC,mBAAoB,CADpB,iBAED,CC9BA,MACC,yCAA0C,CAC1C,yCAA0C,CAC1C,6DACD,CAOE,mEAIC,gDAAiD,CADjD,sDAAuD,CAFvD,2DAA8D,CAI9D,gBAAiB,CAHjB,wDAqBD,CAfC,yEAWC,sFAAuF,CAEvF,kBAAmB,CADnB,qKAA0K,CAX1K,UAAW,CAIX,aAAc,CAFd,QAAS,CAIT,QAAS,CADT,iBAAkB,CAElB,wDAA2D,CAE3D,0BAA2B,CAR3B,OAYD,CAOF,kEACC,gGACD,CAKA,gDACC,OAAS,CACT,sBACD,CAGD,kCAGC,gDAAiD,CADjD,sDAAuD,CADvD,QAAS,CAGT,eAwBD,CAtBC,yCAMC,kBAAmB,CALnB,UAAW,CAIX,QAAS,CAHT,iBAAkB,CAClB,uDAA0D,CAC1D,OAiBD,CArBA,mDAYE,sFAAuF,CADvF,+JAAoK,CAFpK,SAYF,CArBA,mDAmBE,sFAAuF,CADvF,+JAAmK,CAFnK,UAKF",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor__editable {
	/*
	 * Vertical drop target (in text).
	 */
	& .ck.ck-clipboard-drop-target-position {
		display: inline;
		position: relative;
		pointer-events: none;

		& span {
			position: absolute;
			width: 0;
		}
	}

	/*
	 * Styles of the widget being dragged (its preview).
	 */
	& .ck-widget:-webkit-drag {
		& > .ck-widget__selection-handle {
			display: none;
		}

		& > .ck-widget__type-around {
			display: none;
		}
	}
}

.ck.ck-clipboard-drop-target-line {
	position: absolute;
	pointer-events: none;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

:root {
	--ck-clipboard-drop-target-dot-width: 12px;
	--ck-clipboard-drop-target-dot-height: 8px;
	--ck-clipboard-drop-target-color: var(--ck-color-focus-border);
}

.ck.ck-editor__editable {
	/*
	 * Vertical drop target (in text).
	 */
	& .ck.ck-clipboard-drop-target-position {
		& span {
			bottom: calc(-.5 * var(--ck-clipboard-drop-target-dot-height));
			top: calc(-.5 * var(--ck-clipboard-drop-target-dot-height));
			border: 1px solid var(--ck-clipboard-drop-target-color);
			background: var(--ck-clipboard-drop-target-color);
			margin-left: -1px;

			/* The triangle above the marker */
			&::after {
				content: '';
				width: 0;
				height: 0;

				display: block;
				position: absolute;
				left: 50%;
				top: calc(-.5 * var(--ck-clipboard-drop-target-dot-height));

				transform: translateX(-50%);
				border-color: var(--ck-clipboard-drop-target-color) transparent transparent transparent;
				border-width: calc(var(--ck-clipboard-drop-target-dot-height)) calc(.5 * var(--ck-clipboard-drop-target-dot-width)) 0 calc(.5 * var(--ck-clipboard-drop-target-dot-width));
				border-style: solid;
			}
		}
	}

	/*
	 * Styles of the widget that it a drop target.
	 */
	& .ck-widget.ck-clipboard-drop-target-range {
		outline: var(--ck-widget-outline-thickness) solid var(--ck-clipboard-drop-target-color) !important;
	}

	/*
	 * Styles of the widget being dragged (its preview).
	 */
	& .ck-widget:-webkit-drag {
		zoom: 0.6;
		outline: none !important;
	}
}

.ck.ck-clipboard-drop-target-line {
	height: 0;
	border: 1px solid var(--ck-clipboard-drop-target-color);
	background: var(--ck-clipboard-drop-target-color);
	margin-top: -1px;

	&::before {
		content: '';
		position: absolute;
		top: calc(-.5 * var(--ck-clipboard-drop-target-dot-width));
		width: 0;
		height: 0;
		border-style: solid;

		@mixin ck-dir ltr {
			left: -1px;

			border-width: calc(.5 * var(--ck-clipboard-drop-target-dot-width)) 0 calc(.5 * var(--ck-clipboard-drop-target-dot-width)) var(--ck-clipboard-drop-target-dot-height);
			border-color: transparent transparent transparent var(--ck-clipboard-drop-target-color);
		}

		@mixin ck-dir rtl {
			right: -1px;

			border-width:calc(.5 * var(--ck-clipboard-drop-target-dot-width)) var(--ck-clipboard-drop-target-dot-height) calc(.5 * var(--ck-clipboard-drop-target-dot-width)) 0;
			border-color: transparent var(--ck-clipboard-drop-target-color) transparent transparent;
		}
	}
}
`],sourceRoot:""}]);const P=x},7388:(L,B,_)=>{_.d(B,{A:()=>P});var q=_(9372),U=_.n(q),H=_(935),x=_.n(H)()(U());x.push([L.id,".ck.ck-editor{position:relative}.ck.ck-editor .ck-editor__top .ck-sticky-panel .ck-toolbar{z-index:var(--ck-z-panel)}.ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content{border-radius:0}.ck-rounded-corners .ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content,.ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content.ck-rounded-corners{border-radius:var(--ck-border-radius);border-bottom-left-radius:0;border-bottom-right-radius:0}.ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content{border:solid var(--ck-color-base-border);border-width:1px 1px 0}.ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content.ck-sticky-panel__content_sticky{border-bottom-width:1px}.ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content .ck-menu-bar,.ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content .ck-toolbar{border:0}.ck.ck-editor__main>.ck-editor__editable{background:var(--ck-color-base-background);border-radius:0}.ck-rounded-corners .ck.ck-editor__main>.ck-editor__editable,.ck.ck-editor__main>.ck-editor__editable.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0;border-top-right-radius:0}.ck.ck-editor__main>.ck-editor__editable:not(.ck-focused){border-color:var(--ck-color-base-border)}","",{version:3,sources:["webpack://./../ckeditor5-editor-classic/theme/classiceditor.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-editor-classic/classiceditor.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAKA,cAIC,iBAMD,CAJC,2DAEC,yBACD,CCLC,8DCED,eDeC,CAjBA,mKCMA,qCAAsC,CDJpC,2BAA4B,CAC5B,4BAcF,CAjBA,8DAOC,wCAAsB,CAAtB,sBAUD,CARC,8FACC,uBACD,CAEA,qJAEC,QACD,CAMH,yCAEC,0CAA2C,CCtB3C,eDgCD,CAZA,yHChBE,qCAAsC,CDqBtC,wBAAyB,CACzB,yBAMF,CAHC,0DACC,wCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor {
	/* All the elements within \`.ck-editor\` are positioned relatively to it.
	 If any element needs to be positioned with respect to the <body>, etc.,
	 it must land outside of the \`.ck-editor\` in DOM. */
	position: relative;

	& .ck-editor__top .ck-sticky-panel .ck-toolbar {
		/* https://github.com/ckeditor/ckeditor5-editor-classic/issues/62 */
		z-index: var(--ck-z-panel);
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../mixins/_rounded.css";

.ck.ck-editor__top {
	& .ck-sticky-panel {
		& .ck-sticky-panel__content {
			@mixin ck-rounded-corners {
				border-bottom-left-radius: 0;
				border-bottom-right-radius: 0;
			}

			border: 1px solid var(--ck-color-base-border);
			border-bottom-width: 0;

			&.ck-sticky-panel__content_sticky {
				border-bottom-width: 1px;
			}

			& .ck-menu-bar,
			& .ck-toolbar {
				border: 0;
			}
		}
	}
}

/* Note: Use ck-editor__main to make sure these styles don't apply to other editor types */
.ck.ck-editor__main > .ck-editor__editable {
	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/113 */
	background: var(--ck-color-base-background);

	@mixin ck-rounded-corners {
		border-top-left-radius: 0;
		border-top-right-radius: 0;
	}

	&:not(.ck-focused) {
		border-color: var(--ck-color-base-border);
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const P=x},4098:(L,B,_)=>{_.d(B,{A:()=>P});var q=_(9372),U=_.n(q),H=_(935),x=_.n(H)()(U());x.push([L.id,".ck .ck-placeholder,.ck.ck-placeholder{position:relative}.ck .ck-placeholder:before,.ck.ck-placeholder:before{content:attr(data-placeholder);left:0;pointer-events:none;position:absolute;right:0}.ck.ck-read-only .ck-placeholder:before{display:none}.ck.ck-reset_all .ck-placeholder{position:relative}@media (forced-colors:active){.ck .ck-placeholder,.ck.ck-placeholder{forced-color-adjust:preserve-parent-color}}.ck .ck-placeholder:before,.ck.ck-placeholder:before{cursor:text}@media (forced-colors:none){.ck .ck-placeholder:before,.ck.ck-placeholder:before{color:var(--ck-color-engine-placeholder-text)}}@media (forced-colors:active){.ck .ck-placeholder:before,.ck.ck-placeholder:before{font-style:italic;margin-left:1px}}","",{version:3,sources:["webpack://./../ckeditor5-engine/theme/placeholder.css","webpack://./../ckeditor5-ui/theme/mixins/_mediacolors.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-engine/placeholder.css"],names:[],mappings:"AAMA,uCAEC,iBAWD,CATC,qDAIC,8BAA+B,CAF/B,MAAO,CAKP,mBAAoB,CANpB,iBAAkB,CAElB,OAKD,CAKA,wCACC,YACD,CAQD,iCACC,iBACD,CC7BC,8BACC,uCCOA,yCDLA,CACD,CCOA,qDACC,WAmBD,CDvBA,4BACC,qDCMC,6CDJD,CACD,CAZA,8BACC,qDCsBC,iBAAkB,CAMlB,eD1BD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* See ckeditor/ckeditor5#936. */
.ck.ck-placeholder,
.ck .ck-placeholder {
	position: relative;

	&::before {
		position: absolute;
		left: 0;
		right: 0;
		content: attr(data-placeholder);

		/* See ckeditor/ckeditor5#469. */
		pointer-events: none;
	}
}

/* See ckeditor/ckeditor5#1987. */
.ck.ck-read-only .ck-placeholder {
	&::before {
		display: none;
	}
}

/*
 * Rules for the \`ck-placeholder\` are loaded before the rules for \`ck-reset_all\` in the base CKEditor 5 DLL build.
 * This fix overwrites the incorrectly set \`position: static\` from \`ck-reset_all\`.
 * See https://github.com/ckeditor/ckeditor5/issues/11418.
 */
.ck.ck-reset_all .ck-placeholder {
	position: relative;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-forced-colors {
	@media (forced-colors: active) {
		& {
			@mixin-content;
		}
	}
}

@define-mixin ck-media-default-colors {
	@media (forced-colors: none) {
		& {
			@mixin-content;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_mediacolors.css";

/* See ckeditor/ckeditor5#936. */
.ck.ck-placeholder, .ck .ck-placeholder {
	@mixin ck-media-forced-colors {
		/*
		 * This is needed for Edge on Windows to use the right color for the placeholder content (::before).
		 * See https://github.com/ckeditor/ckeditor5/issues/14907.
		 */
		forced-color-adjust: preserve-parent-color;
	}

	&::before {
		cursor: text;

		@mixin ck-media-default-colors {
			color: var(--ck-color-engine-placeholder-text);
		}

		@mixin ck-media-forced-colors {
			/*
			 * In the high contrast mode there is no telling between regular and placeholder text. Using
			 * italic text to address that issue. See https://github.com/ckeditor/ckeditor5/issues/14907.
			 */
			font-style: italic;

			/*
			 * Without this margin, the caret will not show up and blink when the user puts the selection
			 * in the placeholder (Edge on Windows). See https://github.com/ckeditor/ckeditor5/issues/14907.
			 */
			margin-left: 1px;
		}
	}
}
`],sourceRoot:""}]);const P=x},8264:(L,B,_)=>{_.d(B,{A:()=>P});var q=_(9372),U=_.n(q),H=_(935),x=_.n(H)()(U());x.push([L.id,".ck.ck-editor__editable span[data-ck-unsafe-element]{display:none}","",{version:3,sources:["webpack://./../ckeditor5-engine/theme/renderer.css"],names:[],mappings:"AAMA,qDACC,YACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* Elements marked by the Renderer as hidden should be invisible in the editor. */
.ck.ck-editor__editable span[data-ck-unsafe-element] {
	display: none;
}
`],sourceRoot:""}]);const P=x},6269:(L,B,_)=>{_.d(B,{A:()=>P});var q=_(9372),U=_.n(q),H=_(935),x=_.n(H)()(U());x.push([L.id,".ck.ck-heading_heading1{font-size:20px}.ck.ck-heading_heading2{font-size:17px}.ck.ck-heading_heading3{font-size:14px}.ck[class*=ck-heading_heading]{font-weight:700}.ck.ck-dropdown.ck-heading-dropdown .ck-dropdown__button .ck-button__label{width:8em}.ck.ck-dropdown.ck-heading-dropdown .ck-dropdown__panel .ck-list__item{min-width:18em}","",{version:3,sources:["webpack://./../ckeditor5-heading/theme/heading.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-heading/heading.css"],names:[],mappings:"AAKA,wBACC,cACD,CAEA,wBACC,cACD,CAEA,wBACC,cACD,CAEA,+BACC,eACD,CCZC,2EACC,SACD,CAEA,uEACC,cACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-heading_heading1 {
	font-size: 20px;
}

.ck.ck-heading_heading2 {
	font-size: 17px;
}

.ck.ck-heading_heading3 {
	font-size: 14px;
}

.ck[class*="ck-heading_heading"] {
	font-weight: bold;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* Resize dropdown's button label. */
.ck.ck-dropdown.ck-heading-dropdown {
	& .ck-dropdown__button .ck-button__label {
		width: 8em;
	}

	& .ck-dropdown__panel .ck-list__item {
		min-width: 18em;
	}
}
`],sourceRoot:""}]);const P=x},265:(L,B,_)=>{_.d(B,{A:()=>P});var q=_(9372),U=_.n(q),H=_(935),x=_.n(H)()(U());x.push([L.id,".ck-content .image{clear:both;display:table;margin:.9em auto;min-width:50px;text-align:center}.ck-content .image img{display:block;height:auto;margin:0 auto;max-width:100%;min-width:100%}.ck-content .image-inline{align-items:flex-start;display:inline-flex;max-width:100%}.ck-content .image-inline picture{display:flex}.ck-content .image-inline img,.ck-content .image-inline picture{flex-grow:1;flex-shrink:1;max-width:100%}.ck.ck-editor__editable .image>figcaption.ck-placeholder:before{overflow:hidden;padding-left:inherit;padding-right:inherit;text-overflow:ellipsis;white-space:nowrap}.ck.ck-editor__editable .image{z-index:1}.ck.ck-editor__editable .image.ck-widget_selected{z-index:2}.ck.ck-editor__editable .image-inline{z-index:1}.ck.ck-editor__editable .image-inline.ck-widget_selected{z-index:2}.ck.ck-editor__editable .image-inline.ck-widget_selected ::selection{display:none}.ck.ck-editor__editable .image-inline img{height:auto}.ck.ck-editor__editable td .image-inline img,.ck.ck-editor__editable th .image-inline img{max-width:none}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/image.css"],names:[],mappings:"AAMC,mBAEC,UAAW,CADX,aAAc,CAOd,gBAAkB,CAGlB,cAAe,CARf,iBA2BD,CAjBC,uBAEC,aAAc,CAad,WAAY,CAVZ,aAAc,CAGd,cAAe,CAGf,cAKD,CAGD,0BAYC,sBAAuB,CANvB,mBAAoB,CAGpB,cAoBD,CAdC,kCACC,YACD,CAGA,gEAGC,WAAY,CACZ,aAAc,CAGd,cACD,CAUD,gEASC,eAAgB,CARhB,oBAAqB,CACrB,qBAAsB,CAQtB,sBAAuB,CAFvB,kBAGD,CAKA,+BACC,SASD,CAHC,kDACC,SACD,CAMD,sCACC,SAkBD,CAZC,yDACC,SAUD,CAHC,qEACC,YACD,CAMF,0CACC,WACD,CAMC,0FACC,cACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content {
	& .image {
		display: table;
		clear: both;
		text-align: center;

		/* Make sure there is some space between the content and the image. Center image by default. */
		/* The first value should be equal to --ck-spacing-large variable if used in the editor context
	 	to avoid the content jumping (See https://github.com/ckeditor/ckeditor5/issues/9825). */
		margin: 0.9em auto;

		/* Make sure the caption will be displayed properly (See: https://github.com/ckeditor/ckeditor5/issues/1870). */
		min-width: 50px;

		& img {
			/* Prevent unnecessary margins caused by line-height (see #44). */
			display: block;

			/* Center the image if its width is smaller than the content's width. */
			margin: 0 auto;

			/* Make sure the image never exceeds the size of the parent container (ckeditor/ckeditor5-ui#67). */
			max-width: 100%;

			/* Make sure the image is never smaller than the parent container (See: https://github.com/ckeditor/ckeditor5/issues/9300). */
			min-width: 100%;

			/* Keep proportions of the block image if the height is set and the image is wider than the editor width.
			See https://github.com/ckeditor/ckeditor5/issues/14542. */
			height: auto;
		}
	}

	& .image-inline {
		/*
		 * Normally, the .image-inline would have "display: inline-block" and "img { width: 100% }" (to follow the wrapper while resizing).
		 * Unfortunately, together with "srcset", it gets automatically stretched up to the width of the editing root.
		 * This strange behavior does not happen with inline-flex.
		 */
		display: inline-flex;

		/* While being resized, don't allow the image to exceed the width of the editing root. */
		max-width: 100%;

		/* This is required by Safari to resize images in a sensible way. Without this, the browser breaks the ratio. */
		align-items: flex-start;

		/* When the picture is present it must act as a flex container to let the img resize properly */
		& picture {
			display: flex;
		}

		/* When the picture is present, it must act like a resizable img. */
		& picture,
		& img {
			/* This is necessary for the img to span the entire .image-inline wrapper and to resize properly. */
			flex-grow: 1;
			flex-shrink: 1;

			/* Prevents overflowing the editing root boundaries when an inline image is very wide. */
			max-width: 100%;
		}
	}
}

.ck.ck-editor__editable {
	/*
	 * Inhertit the content styles padding of the <figcaption> in case the integration overrides \`text-align: center\`
	 * of \`.image\` (e.g. to the left/right). This ensures the placeholder stays at the padding just like the native
	 * caret does, and not at the edge of <figcaption>.
	 */
	& .image > figcaption.ck-placeholder::before {
		padding-left: inherit;
		padding-right: inherit;

		/*
		 * Make sure the image caption placeholder doesn't overflow the placeholder area.
		 * See https://github.com/ckeditor/ckeditor5/issues/9162.
		 */
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	/*
	 * See https://github.com/ckeditor/ckeditor5/issues/15115.
	 */
	& .image {
		z-index: 1;

		/*
		 * Make sure the selected image always stays on top of its siblings.
		 * See https://github.com/ckeditor/ckeditor5/issues/9108.
		 */
		&.ck-widget_selected {
			z-index: 2;
		}
	}

	/*
	 * See https://github.com/ckeditor/ckeditor5/issues/15115.
	 */
	& .image-inline {
		z-index: 1;

		/*
		 * Make sure the selected inline image always stays on top of its siblings.
		 * See https://github.com/ckeditor/ckeditor5/issues/9108.
		 */
		&.ck-widget_selected {
			z-index: 2;

			/*
			 * Make sure the native browser selection style is not displayed.
			 * Inline image widgets have their own styles for the selected state and
			 * leaving this up to the browser is asking for a visual collision.
			 */
			& ::selection {
				display: none;
			}
		}
	}

	/* Keep proportions of the inline image if the height is set and the image is wider than the editor width.
	See https://github.com/ckeditor/ckeditor5/issues/14542. */
	& .image-inline img {
		height: auto;
	}

	/* The inline image nested in the table should have its original size if not resized.
	See https://github.com/ckeditor/ckeditor5/issues/9117. */
	& td,
	& th {
		& .image-inline img {
			max-width: none;
		}
	}
}
`],sourceRoot:""}]);const P=x},5247:(L,B,_)=>{_.d(B,{A:()=>P});var q=_(9372),U=_.n(q),H=_(935),x=_.n(H)()(U());x.push([L.id,":root{--ck-color-image-caption-background:#f7f7f7;--ck-color-image-caption-text:#333;--ck-color-image-caption-highlighted-background:#fd0}.ck-content .image>figcaption{background-color:var(--ck-color-image-caption-background);caption-side:bottom;color:var(--ck-color-image-caption-text);display:table-caption;font-size:.75em;outline-offset:-1px;padding:.6em;word-break:break-word}@media (forced-colors:active){.ck-content .image>figcaption{background-color:unset;color:unset}}@media (forced-colors:none){.ck.ck-editor__editable .image>figcaption.image__caption_highlighted{animation:ck-image-caption-highlight .6s ease-out}}@media (prefers-reduced-motion:reduce){.ck.ck-editor__editable .image>figcaption.image__caption_highlighted{animation:none}}@keyframes ck-image-caption-highlight{0%{background-color:var(--ck-color-image-caption-highlighted-background)}to{background-color:var(--ck-color-image-caption-background)}}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imagecaption.css","webpack://./../ckeditor5-ui/theme/mixins/_mediacolors.css"],names:[],mappings:"AAOA,MACC,2CAAoD,CACpD,kCAA8C,CAC9C,oDACD,CAGA,8BAKC,yDAA0D,CAH1D,mBAAoB,CAEpB,wCAAyC,CAHzC,qBAAsB,CAMtB,eAAgB,CAChB,mBAAoB,CAFpB,YAAa,CAHb,qBAYD,CAJC,8BAXD,8BAYE,sBAAuB,CACvB,WAEF,CADC,CCdA,4BACC,qEDmBA,iDCjBA,CACD,CDmBA,uCALD,qEAME,cAEF,CADC,CAGD,sCACC,GACC,qEACD,CAEA,GACC,yDACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_mediacolors.css";

:root {
	--ck-color-image-caption-background: hsl(0, 0%, 97%);
	--ck-color-image-caption-text: hsl(0, 0%, 20%);
	--ck-color-image-caption-highlighted-background: hsl(52deg 100% 50%);
}

/* Content styles */
.ck-content .image > figcaption {
	display: table-caption;
	caption-side: bottom;
	word-break: break-word;
	color: var(--ck-color-image-caption-text);
	background-color: var(--ck-color-image-caption-background);
	padding: .6em;
	font-size: .75em;
	outline-offset: -1px;

	/* Improve placeholder rendering in high-constrast mode (https://github.com/ckeditor/ckeditor5/issues/14907). */
	@media (forced-colors: active) {
		background-color: unset;
		color: unset;
	}
}

/* Editing styles */
.ck.ck-editor__editable .image > figcaption.image__caption_highlighted {
	@mixin ck-media-default-colors {
		animation: ck-image-caption-highlight .6s ease-out;
	}

	@media (prefers-reduced-motion: reduce) {
		animation: none;
	}
}

@keyframes ck-image-caption-highlight {
	0% {
		background-color: var(--ck-color-image-caption-highlighted-background);
	}

	100% {
		background-color: var(--ck-color-image-caption-background);
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-forced-colors {
	@media (forced-colors: active) {
		& {
			@mixin-content;
		}
	}
}

@define-mixin ck-media-default-colors {
	@media (forced-colors: none) {
		& {
			@mixin-content;
		}
	}
}
`],sourceRoot:""}]);const P=x},4642:(L,B,_)=>{_.d(B,{A:()=>P});var q=_(9372),U=_.n(q),H=_(935),x=_.n(H)()(U());x.push([L.id,".ck.ck-image-custom-resize-form{align-items:flex-start;display:flex;flex-direction:row;flex-wrap:nowrap}.ck.ck-image-custom-resize-form .ck-labeled-field-view{display:inline-block}.ck.ck-image-custom-resize-form .ck-label{display:none}@media screen and (max-width:600px){.ck.ck-image-custom-resize-form{flex-wrap:wrap}.ck.ck-image-custom-resize-form .ck-labeled-field-view{flex-basis:100%}.ck.ck-image-custom-resize-form .ck-button{flex-basis:50%}}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imagecustomresizeform.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css"],names:[],mappings:"AAOA,gCAIC,sBAAuB,CAHvB,YAAa,CACb,kBAAmB,CACnB,gBAsBD,CAnBC,uDACC,oBACD,CAEA,0CACC,YACD,CCbA,oCDCD,gCAeE,cAUF,CARE,uDACC,eACD,CAEA,2CACC,cACD,CCtBD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-image-custom-resize-form {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	align-items: flex-start;

	& .ck-labeled-field-view {
		display: inline-block;
	}

	& .ck-label {
		display: none;
	}

	@mixin ck-media-phone {
		flex-wrap: wrap;

		& .ck-labeled-field-view {
			flex-basis: 100%;
		}

		& .ck-button {
			flex-basis: 50%;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`],sourceRoot:""}]);const P=x},3350:(L,B,_)=>{_.d(B,{A:()=>P});var q=_(9372),U=_.n(q),H=_(935),x=_.n(H)()(U());x.push([L.id,".ck.ck-image-insert-url .ck-image-insert-url__action-row{display:grid;grid-template-columns:repeat(2,1fr)}:root{--ck-image-insert-insert-by-url-width:250px}.ck.ck-image-insert-url{--ck-input-width:100%}.ck.ck-image-insert-url .ck-image-insert-url__action-row{grid-column-gap:var(--ck-spacing-large);margin-top:var(--ck-spacing-large)}.ck.ck-image-insert-url .ck-image-insert-url__action-row .ck-button-cancel,.ck.ck-image-insert-url .ck-image-insert-url__action-row .ck-button-save{justify-content:center;min-width:auto}.ck.ck-image-insert-url .ck-image-insert-url__action-row .ck-button .ck-button__label{color:var(--ck-color-text)}.ck.ck-image-insert-form>.ck.ck-button{display:block;padding:var(--ck-list-button-padding);width:100%}[dir=ltr] .ck.ck-image-insert-form>.ck.ck-button{text-align:left}[dir=rtl] .ck.ck-image-insert-form>.ck.ck-button{text-align:right}.ck.ck-image-insert-form>.ck.ck-collapsible:not(:first-child){border-top:1px solid var(--ck-color-base-border)}.ck.ck-image-insert-form>.ck.ck-collapsible:not(:last-child){border-bottom:1px solid var(--ck-color-base-border)}.ck.ck-image-insert-form>.ck.ck-collapsible,.ck.ck-image-insert-form>.ck.ck-image-insert-url{min-width:var(--ck-image-insert-insert-by-url-width)}.ck.ck-image-insert-form>.ck.ck-image-insert-url{padding:var(--ck-spacing-large)}.ck.ck-image-insert-form:focus{outline:none}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageinsert.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-image/imageinsert.css"],names:[],mappings:"AAMC,yDACC,YAAa,CACb,mCACD,CCFD,MACC,2CACD,CAEA,wBACC,qBAgBD,CAdC,yDACC,uCAAwC,CACxC,kCAWD,CATC,oJAEC,sBAAuB,CACvB,cACD,CAEA,sFACC,0BACD,CAKD,uCACC,aAAc,CAEd,qCAAsC,CADtC,UAUD,CAZA,iDAME,eAMF,CAZA,iDAUE,gBAEF,CAGC,8DACC,gDACD,CAEA,6DACC,mDACD,CAMD,6FAJC,oDAOD,CAHA,iDAEC,+BACD,CAEA,+BACC,YACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-image-insert-url {
	& .ck-image-insert-url__action-row {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

:root {
	--ck-image-insert-insert-by-url-width: 250px;
}

.ck.ck-image-insert-url {
	--ck-input-width: 100%;

	& .ck-image-insert-url__action-row {
		grid-column-gap: var(--ck-spacing-large);
		margin-top: var(--ck-spacing-large);

		& .ck-button-save,
		& .ck-button-cancel {
			justify-content: center;
			min-width: auto;
		}

		& .ck-button .ck-button__label {
			color: var(--ck-color-text);
		}
	}
}

.ck.ck-image-insert-form {
	& > .ck.ck-button {
		display: block;
		width: 100%;
		padding: var(--ck-list-button-padding);

		@mixin ck-dir ltr {
			text-align: left;
		}

		@mixin ck-dir rtl {
			text-align: right;
		}
	}

	& > .ck.ck-collapsible {
		&:not(:first-child) {
			border-top: 1px solid var(--ck-color-base-border);
		}

		&:not(:last-child) {
			border-bottom: 1px solid var(--ck-color-base-border);
		}

		min-width: var(--ck-image-insert-insert-by-url-width);
	}

	/* This is the case when there are no other integrations configured than insert by URL */
	& > .ck.ck-image-insert-url {
		min-width: var(--ck-image-insert-insert-by-url-width);
		padding: var(--ck-spacing-large);
	}

	&:focus {
		outline: none;
	}
}
`],sourceRoot:""}]);const P=x},7378:(L,B,_)=>{_.d(B,{A:()=>P});var q=_(9372),U=_.n(q),H=_(935),x=_.n(H)()(U());x.push([L.id,".ck.ck-editor__editable img.image_placeholder{background-size:100% 100%}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageplaceholder.css"],names:[],mappings:"AAMC,8CACC,yBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor__editable {
	& img.image_placeholder {
		background-size: 100% 100%;
	}
}
`],sourceRoot:""}]);const P=x},3469:(L,B,_)=>{_.d(B,{A:()=>P});var q=_(9372),U=_.n(q),H=_(935),x=_.n(H)()(U());x.push([L.id,".ck-content img.image_resized{height:auto}.ck-content .image.image_resized{box-sizing:border-box;display:block;max-width:100%}.ck-content .image.image_resized img{width:100%}.ck-content .image.image_resized>figcaption{display:block}.ck.ck-editor__editable td .image-inline.image_resized img,.ck.ck-editor__editable th .image-inline.image_resized img{max-width:100%}[dir=ltr] .ck.ck-button.ck-button_with-text.ck-resize-image-button .ck-button__icon{margin-right:var(--ck-spacing-standard)}[dir=rtl] .ck.ck-button.ck-button_with-text.ck-resize-image-button .ck-button__icon{margin-left:var(--ck-spacing-standard)}.ck.ck-dropdown .ck-button.ck-resize-image-button .ck-button__label{width:4em}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageresize.css"],names:[],mappings:"AAMA,8BACC,WACD,CAEA,iCAQC,qBAAsB,CADtB,aAAc,CANd,cAkBD,CATC,qCAEC,UACD,CAEA,4CAEC,aACD,CAQC,sHACC,cACD,CAIF,oFACC,uCACD,CAEA,oFACC,sCACD,CAEA,oEACC,SACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* Preserve aspect ratio of the resized image after introducing image height attribute. */
.ck-content img.image_resized {
	height: auto;
}

.ck-content .image.image_resized {
	max-width: 100%;
	/*
	The \`<figure>\` element for resized images must not use \`display:table\` as browsers do not support \`max-width\` for it well.
	See https://stackoverflow.com/questions/4019604/chrome-safari-ignoring-max-width-in-table/14420691#14420691 for more.
	Fortunately, since we control the width, there is no risk that the image will look bad.
	*/
	display: block;
	box-sizing: border-box;

	& img {
		/* For resized images it is the \`<figure>\` element that determines the image width. */
		width: 100%;
	}

	& > figcaption {
		/* The \`<figure>\` element uses \`display:block\`, so \`<figcaption>\` also has to. */
		display: block;
	}
}

.ck.ck-editor__editable {
	/* The resized inline image nested in the table should respect its parent size.
	See https://github.com/ckeditor/ckeditor5/issues/9117. */
	& td,
	& th {
		& .image-inline.image_resized img {
			max-width: 100%;
		}
	}
}

[dir="ltr"] .ck.ck-button.ck-button_with-text.ck-resize-image-button .ck-button__icon {
	margin-right: var(--ck-spacing-standard);
}

[dir="rtl"] .ck.ck-button.ck-button_with-text.ck-resize-image-button .ck-button__icon {
	margin-left: var(--ck-spacing-standard);
}

.ck.ck-dropdown .ck-button.ck-resize-image-button .ck-button__label {
	width: 4em;
}
`],sourceRoot:""}]);const P=x},6386:(L,B,_)=>{_.d(B,{A:()=>P});var q=_(9372),U=_.n(q),H=_(935),x=_.n(H)()(U());x.push([L.id,":root{--ck-image-style-spacing:1.5em;--ck-inline-image-style-spacing:calc(var(--ck-image-style-spacing)/2)}.ck-content .image-style-block-align-left,.ck-content .image-style-block-align-right{max-width:calc(100% - var(--ck-image-style-spacing))}.ck-content .image-style-align-left,.ck-content .image-style-align-right{clear:none}.ck-content .image-style-side{float:right;margin-left:var(--ck-image-style-spacing);max-width:50%}.ck-content .image-style-align-left{float:left;margin-right:var(--ck-image-style-spacing)}.ck-content .image-style-align-center{margin-left:auto;margin-right:auto}.ck-content .image-style-align-right{float:right;margin-left:var(--ck-image-style-spacing)}.ck-content .image-style-block-align-right{margin-left:auto;margin-right:0}.ck-content .image-style-block-align-left{margin-left:0;margin-right:auto}.ck-content p+.image-style-align-left,.ck-content p+.image-style-align-right,.ck-content p+.image-style-side{margin-top:0}.ck-content .image-inline.image-style-align-left,.ck-content .image-inline.image-style-align-right{margin-bottom:var(--ck-inline-image-style-spacing);margin-top:var(--ck-inline-image-style-spacing)}.ck-content .image-inline.image-style-align-left{margin-right:var(--ck-inline-image-style-spacing)}.ck-content .image-inline.image-style-align-right{margin-left:var(--ck-inline-image-style-spacing)}.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__action:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover),.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__action:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover){background-color:var(--ck-color-button-on-background)}.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__action:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover):after,.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__action:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover):after{display:none}.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open:hover>.ck-splitbutton__action:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open:hover>.ck-splitbutton__arrow:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open:hover>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover){background-color:var(--ck-color-button-on-hover-background)}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imagestyle.css"],names:[],mappings:"AAKA,MACC,8BAA+B,CAC/B,qEACD,CAMC,qFAEC,oDACD,CAIA,yEAEC,UACD,CAEA,8BACC,WAAY,CACZ,yCAA0C,CAC1C,aACD,CAEA,oCACC,UAAW,CACX,0CACD,CAEA,sCACC,gBAAiB,CACjB,iBACD,CAEA,qCACC,WAAY,CACZ,yCACD,CAEA,2CAEC,gBAAiB,CADjB,cAED,CAEA,0CACC,aAAc,CACd,iBACD,CAGA,6GAGC,YACD,CAGC,mGAGC,kDAAmD,CADnD,+CAED,CAEA,iDACC,iDACD,CAEA,kDACC,gDACD,CAUC,0lBAGC,qDAKD,CAHC,8nBACC,YACD,CAKD,oVAGC,2DACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-image-style-spacing: 1.5em;
	--ck-inline-image-style-spacing: calc(var(--ck-image-style-spacing) / 2);
}

.ck-content {
	/* Provides a minimal side margin for the left and right aligned images, so that the user has a visual feedback
	confirming successful application of the style if image width exceeds the editor's size.
	See https://github.com/ckeditor/ckeditor5/issues/9342 */
	& .image-style-block-align-left,
	& .image-style-block-align-right {
		max-width: calc(100% - var(--ck-image-style-spacing));
	}

	/* Allows displaying multiple floating images in the same line.
	See https://github.com/ckeditor/ckeditor5/issues/9183#issuecomment-804988132 */
	& .image-style-align-left,
	& .image-style-align-right {
		clear: none;
	}

	& .image-style-side {
		float: right;
		margin-left: var(--ck-image-style-spacing);
		max-width: 50%;
	}

	& .image-style-align-left {
		float: left;
		margin-right: var(--ck-image-style-spacing);
	}

	& .image-style-align-center {
		margin-left: auto;
		margin-right: auto;
	}

	& .image-style-align-right {
		float: right;
		margin-left: var(--ck-image-style-spacing);
	}

	& .image-style-block-align-right {
		margin-right: 0;
		margin-left: auto;
	}

	& .image-style-block-align-left {
		margin-left: 0;
		margin-right: auto;
	}

	/* Simulates margin collapsing with the preceding paragraph, which does not work for the floating elements. */
	& p + .image-style-align-left,
	& p + .image-style-align-right,
	& p + .image-style-side {
		margin-top: 0;
	}

	& .image-inline {
		&.image-style-align-left,
		&.image-style-align-right {
			margin-top: var(--ck-inline-image-style-spacing);
			margin-bottom: var(--ck-inline-image-style-spacing);
		}

		&.image-style-align-left {
			margin-right: var(--ck-inline-image-style-spacing);
		}

		&.image-style-align-right {
			margin-left: var(--ck-inline-image-style-spacing);
		}
	}
}

.ck.ck-splitbutton {
	/* The button should display as a regular drop-down if the action button
	is forced to fire the same action as the arrow button. */
	&.ck-splitbutton_flatten {
		&:hover,
		&.ck-splitbutton_open {
			& > .ck-splitbutton__action:not(.ck-disabled),
			& > .ck-splitbutton__arrow:not(.ck-disabled),
			& > .ck-splitbutton__arrow:not(.ck-disabled):not(:hover) {
				background-color: var(--ck-color-button-on-background);

				&::after {
					display: none;
				}
			}
		}

		&.ck-splitbutton_open:hover {
			& > .ck-splitbutton__action:not(.ck-disabled),
			& > .ck-splitbutton__arrow:not(.ck-disabled),
			& > .ck-splitbutton__arrow:not(.ck-disabled):not(:hover) {
				background-color: var(--ck-color-button-on-hover-background);
			}
		}
	}
}
`],sourceRoot:""}]);const P=x},7693:(L,B,_)=>{_.d(B,{A:()=>P});var q=_(9372),U=_.n(q),H=_(935),x=_.n(H)()(U());x.push([L.id,'.ck-image-upload-complete-icon{border-radius:50%;display:block;position:absolute;right:min(var(--ck-spacing-medium),6%);top:min(var(--ck-spacing-medium),6%);z-index:1}.ck-image-upload-complete-icon:after{content:"";position:absolute}:root{--ck-color-image-upload-icon:#fff;--ck-color-image-upload-icon-background:#008a00;--ck-image-upload-icon-size:20;--ck-image-upload-icon-width:2px;--ck-image-upload-icon-is-visible:clamp(0px,100% - 50px,1px)}.ck-image-upload-complete-icon{animation-delay:0ms,3s;animation-duration:.5s,.5s;animation-fill-mode:forwards,forwards;animation-name:ck-upload-complete-icon-show,ck-upload-complete-icon-hide;background:var(--ck-color-image-upload-icon-background);font-size:calc(1px*var(--ck-image-upload-icon-size));height:calc(var(--ck-image-upload-icon-is-visible)*var(--ck-image-upload-icon-size));opacity:0;overflow:hidden;width:calc(var(--ck-image-upload-icon-is-visible)*var(--ck-image-upload-icon-size))}.ck-image-upload-complete-icon:after{animation-delay:.5s;animation-duration:.5s;animation-fill-mode:forwards;animation-name:ck-upload-complete-icon-check;border-right:var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);border-top:var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);box-sizing:border-box;height:0;left:25%;opacity:0;top:50%;transform:scaleX(-1) rotate(135deg);transform-origin:left top;width:0}@media (prefers-reduced-motion:reduce){.ck-image-upload-complete-icon{animation-duration:0ms}.ck-image-upload-complete-icon:after{animation:none;height:.45em;opacity:1;width:.3em}}@keyframes ck-upload-complete-icon-show{0%{opacity:0}to{opacity:1}}@keyframes ck-upload-complete-icon-hide{0%{opacity:1}to{opacity:0}}@keyframes ck-upload-complete-icon-check{0%{height:0;opacity:1;width:0}33%{height:0;width:.3em}to{height:.45em;opacity:1;width:.3em}}',"",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageuploadicon.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-image/imageuploadicon.css"],names:[],mappings:"AAKA,+BAUC,iBAAkB,CATlB,aAAc,CACd,iBAAkB,CAOlB,sCAAwC,CADxC,oCAAsC,CAGtC,SAMD,CAJC,qCACC,UAAW,CACX,iBACD,CChBD,MACC,iCAA8C,CAC9C,+CAA4D,CAG5D,8BAA+B,CAC/B,gCAAiC,CACjC,4DACD,CAEA,+BAWC,sBAA4B,CAN5B,0BAAgC,CADhC,qCAAuC,CADvC,wEAA0E,CAD1E,uDAAwD,CAMxD,oDAAuD,CAWvD,oFAAuF,CAlBvF,SAAU,CAgBV,eAAgB,CAChB,mFAqCD,CAjCC,qCAgBC,mBAAsB,CADtB,sBAAyB,CAEzB,4BAA6B,CAH7B,4CAA6C,CAF7C,sFAAuF,CADvF,oFAAqF,CASrF,qBAAsB,CAdtB,QAAS,CAJT,QAAS,CAGT,SAAU,CADV,OAAQ,CAKR,mCAAoC,CACpC,yBAA0B,CAH1B,OAcD,CAEA,uCA7CD,+BA8CE,sBASF,CAPE,qCACC,cAAe,CAGf,YAAc,CAFd,SAAU,CACV,UAED,CACD,CAGD,wCACC,GACC,SACD,CAEA,GACC,SACD,CACD,CAEA,wCACC,GACC,SACD,CAEA,GACC,SACD,CACD,CAEA,yCACC,GAGC,QAAS,CAFT,SAAU,CACV,OAED,CACA,IAEC,QAAS,CADT,UAED,CACA,GAGC,YAAc,CAFd,SAAU,CACV,UAED,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-image-upload-complete-icon {
	display: block;
	position: absolute;

	/*
	 * Smaller images should have the icon closer to the border.
	 * Match the icon position with the linked image indicator brought by the link image feature.
	 */
	top: min(var(--ck-spacing-medium), 6%);
	right: min(var(--ck-spacing-medium), 6%);
	border-radius: 50%;
	z-index: 1;

	&::after {
		content: "";
		position: absolute;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-image-upload-icon: hsl(0, 0%, 100%);
	--ck-color-image-upload-icon-background: hsl(120, 100%, 27%);

	/* Match the icon size with the linked image indicator brought by the link image feature. */
	--ck-image-upload-icon-size: 20;
	--ck-image-upload-icon-width: 2px;
	--ck-image-upload-icon-is-visible: clamp(0px, 100% - 50px, 1px);
}

.ck-image-upload-complete-icon {
	opacity: 0;
	background: var(--ck-color-image-upload-icon-background);
	animation-name: ck-upload-complete-icon-show, ck-upload-complete-icon-hide;
	animation-fill-mode: forwards, forwards;
	animation-duration: 500ms, 500ms;

	/* To make animation scalable. */
	font-size: calc(1px * var(--ck-image-upload-icon-size));

	/* Hide completed upload icon after 3 seconds. */
	animation-delay: 0ms, 3000ms;

	/*
	 * Use CSS math to simulate container queries.
	 * https://css-tricks.com/the-raven-technique-one-step-closer-to-container-queries/#what-about-showing-and-hiding-things
	 */
	overflow: hidden;
	width: calc(var(--ck-image-upload-icon-is-visible) * var(--ck-image-upload-icon-size));
	height: calc(var(--ck-image-upload-icon-is-visible) * var(--ck-image-upload-icon-size));

	/* This is check icon element made from border-width mixed with animations. */
	&::after {
		/* Because of border transformation we need to "hard code" left position. */
		left: 25%;

		top: 50%;
		opacity: 0;
		height: 0;
		width: 0;

		transform: scaleX(-1) rotate(135deg);
		transform-origin: left top;
		border-top: var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);
		border-right: var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);

		animation-name: ck-upload-complete-icon-check;
		animation-duration: 500ms;
		animation-delay: 500ms;
		animation-fill-mode: forwards;

		/* #1095. While reset is not providing proper box-sizing for pseudoelements, we need to handle it. */
		box-sizing: border-box;
	}

	@media (prefers-reduced-motion: reduce) {
		animation-duration: 0ms;

		&::after {
			animation: none;
			opacity: 1;
			width: 0.3em;
			height: 0.45em;
		}
	}
}

@keyframes ck-upload-complete-icon-show {
	from {
		opacity: 0;
	}

	to {
		opacity: 1;
	}
}

@keyframes ck-upload-complete-icon-hide {
	from {
		opacity: 1;
	}

	to {
		opacity: 0;
	}
}

@keyframes ck-upload-complete-icon-check {
	0% {
		opacity: 1;
		width: 0;
		height: 0;
	}
	33% {
		width: 0.3em;
		height: 0;
	}
	100% {
		opacity: 1;
		width: 0.3em;
		height: 0.45em;
	}
}
`],sourceRoot:""}]);const P=x},1559:(L,B,_)=>{_.d(B,{A:()=>P});var q=_(9372),U=_.n(q),H=_(935),x=_.n(H)()(U());x.push([L.id,'.ck .ck-upload-placeholder-loader{align-items:center;display:flex;justify-content:center;left:0;position:absolute;top:0}.ck .ck-upload-placeholder-loader:before{content:"";position:relative}:root{--ck-color-upload-placeholder-loader:#b3b3b3;--ck-upload-placeholder-loader-size:32px;--ck-upload-placeholder-image-aspect-ratio:2.8}.ck .ck-image-upload-placeholder{margin:0;width:100%}.ck .ck-image-upload-placeholder.image-inline{width:calc(var(--ck-upload-placeholder-loader-size)*2*var(--ck-upload-placeholder-image-aspect-ratio))}.ck .ck-image-upload-placeholder img{aspect-ratio:var(--ck-upload-placeholder-image-aspect-ratio)}.ck .ck-upload-placeholder-loader{height:100%;width:100%}.ck .ck-upload-placeholder-loader:before{animation:ck-upload-placeholder-loader 1s linear infinite;border-radius:50%;border-right:2px solid transparent;border-top:3px solid var(--ck-color-upload-placeholder-loader);height:var(--ck-upload-placeholder-loader-size);width:var(--ck-upload-placeholder-loader-size)}@keyframes ck-upload-placeholder-loader{to{transform:rotate(1turn)}}',"",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageuploadloader.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-image/imageuploadloader.css"],names:[],mappings:"AAKA,kCAGC,kBAAmB,CADnB,YAAa,CAEb,sBAAuB,CAEvB,MAAO,CALP,iBAAkB,CAIlB,KAOD,CAJC,yCACC,UAAW,CACX,iBACD,CCXD,MACC,4CAAqD,CACrD,wCAAyC,CACzC,8CACD,CAEA,iCAGC,QAAS,CADT,UAgBD,CAbC,8CACC,sGACD,CAEA,qCAOC,4DACD,CAGD,kCAEC,WAAY,CADZ,UAWD,CARC,yCAMC,yDAA0D,CAH1D,iBAAkB,CAElB,kCAAmC,CADnC,8DAA+D,CAF/D,+CAAgD,CADhD,8CAMD,CAGD,wCACC,GACC,uBACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-upload-placeholder-loader {
	position: absolute;
	display: flex;
	align-items: center;
	justify-content: center;
	top: 0;
	left: 0;

	&::before {
		content: '';
		position: relative;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-upload-placeholder-loader: hsl(0, 0%, 70%);
	--ck-upload-placeholder-loader-size: 32px;
	--ck-upload-placeholder-image-aspect-ratio: 2.8;
}

.ck .ck-image-upload-placeholder {
	/* We need to control the full width of the SVG gray background. */
	width: 100%;
	margin: 0;

	&.image-inline {
		width: calc( 2 * var(--ck-upload-placeholder-loader-size) * var(--ck-upload-placeholder-image-aspect-ratio) );
	}

	& img {
		/*
		 * This is an arbitrary aspect for a 1x1 px GIF to display to the user. Not too tall, not too short.
		 * There's nothing special about this number except that it should make the image placeholder look like
		 * a real image during this short period after the upload started and before the image was read from the
		 * file system (and a rich preview was loaded).
		 */
		aspect-ratio: var(--ck-upload-placeholder-image-aspect-ratio);
	}
}

.ck .ck-upload-placeholder-loader {
	width: 100%;
	height: 100%;

	&::before {
		width: var(--ck-upload-placeholder-loader-size);
		height: var(--ck-upload-placeholder-loader-size);
		border-radius: 50%;
		border-top: 3px solid var(--ck-color-upload-placeholder-loader);
		border-right: 2px solid transparent;
		animation: ck-upload-placeholder-loader 1s linear infinite;
	}
}

@keyframes ck-upload-placeholder-loader {
	to {
		transform: rotate( 360deg );
	}
}
`],sourceRoot:""}]);const P=x},2267:(L,B,_)=>{_.d(B,{A:()=>P});var q=_(9372),U=_.n(q),H=_(935),x=_.n(H)()(U());x.push([L.id,".ck.ck-editor__editable .image,.ck.ck-editor__editable .image-inline{position:relative}.ck.ck-editor__editable .image .ck-progress-bar,.ck.ck-editor__editable .image-inline .ck-progress-bar{left:0;position:absolute;top:0}.ck.ck-editor__editable .image-inline.ck-appear,.ck.ck-editor__editable .image.ck-appear{animation:fadeIn .7s}@media (prefers-reduced-motion:reduce){.ck.ck-editor__editable .image-inline.ck-appear,.ck.ck-editor__editable .image.ck-appear{animation:none;opacity:1}}.ck.ck-editor__editable .image .ck-progress-bar,.ck.ck-editor__editable .image-inline .ck-progress-bar{background:var(--ck-color-upload-bar-background);height:2px;transition:width .1s;width:0}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageuploadprogress.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-image/imageuploadprogress.css"],names:[],mappings:"AAMC,qEAEC,iBACD,CAGA,uGAIC,MAAO,CAFP,iBAAkB,CAClB,KAED,CCRC,yFACC,oBAMD,CAJC,uCAHD,yFAKE,cAAe,CADf,SAGF,CADC,CAKF,uGAIC,gDAAiD,CAFjD,UAAW,CAGX,oBAAuB,CAFvB,OAGD,CAGD,kBACC,GAAO,SAAY,CACnB,GAAO,SAAY,CACpB",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor__editable {
	& .image,
	& .image-inline {
		position: relative;
	}

	/* Upload progress bar. */
	& .image .ck-progress-bar,
	& .image-inline .ck-progress-bar {
		position: absolute;
		top: 0;
		left: 0;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor__editable {
	& .image,
	& .image-inline {
		/* Showing animation. */
		&.ck-appear {
			animation: fadeIn 700ms;

			@media (prefers-reduced-motion: reduce) {
				opacity: 1;
				animation: none;
			}
		}
	}

	/* Upload progress bar. */
	& .image .ck-progress-bar,
	& .image-inline .ck-progress-bar {
		height: 2px;
		width: 0;
		background: var(--ck-color-upload-bar-background);
		transition: width 100ms;
	}
}

@keyframes fadeIn {
	from { opacity: 0; }
	to   { opacity: 1; }
}
`],sourceRoot:""}]);const P=x},4062:(L,B,_)=>{_.d(B,{A:()=>P});var q=_(9372),U=_.n(q),H=_(935),x=_.n(H)()(U());x.push([L.id,".ck.ck-text-alternative-form{display:flex;flex-direction:row;flex-wrap:nowrap}.ck.ck-text-alternative-form .ck-labeled-field-view{display:inline-block}.ck.ck-text-alternative-form .ck-label{display:none}@media screen and (max-width:600px){.ck.ck-text-alternative-form{flex-wrap:wrap}.ck.ck-text-alternative-form .ck-labeled-field-view{flex-basis:100%}.ck.ck-text-alternative-form .ck-button{flex-basis:50%}}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/textalternativeform.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css"],names:[],mappings:"AAOA,6BACC,YAAa,CACb,kBAAmB,CACnB,gBAqBD,CAnBC,oDACC,oBACD,CAEA,uCACC,YACD,CCZA,oCDCD,6BAcE,cAUF,CARE,oDACC,eACD,CAEA,wCACC,cACD,CCrBD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-text-alternative-form {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;

	& .ck-labeled-field-view {
		display: inline-block;
	}

	& .ck-label {
		display: none;
	}

	@mixin ck-media-phone {
		flex-wrap: wrap;

		& .ck-labeled-field-view {
			flex-basis: 100%;
		}

		& .ck-button {
			flex-basis: 50%;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`],sourceRoot:""}]);const P=x},7719:(L,B,_)=>{_.d(B,{A:()=>P});var q=_(9372),U=_.n(q),H=_(935),x=_.n(H)()(U());x.push([L.id,".ck .ck-link_selected{background:var(--ck-color-link-selected-background)}.ck .ck-link_selected span.image-inline{outline:var(--ck-widget-outline-thickness) solid var(--ck-color-link-selected-background)}.ck .ck-fake-link-selection{background:var(--ck-color-link-fake-selection)}.ck .ck-fake-link-selection_collapsed{border-right:1px solid var(--ck-color-base-text);height:100%;margin-right:-1px;outline:1px solid hsla(0,0%,100%,.5)}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-link/link.css"],names:[],mappings:"AAMA,sBACC,mDAMD,CAHC,wCACC,yFACD,CAOD,4BACC,8CACD,CAGA,sCAEC,gDAAiD,CADjD,WAAY,CAEZ,iBAAkB,CAClB,oCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* Class added to span element surrounding currently selected link. */
.ck .ck-link_selected {
	background: var(--ck-color-link-selected-background);

	/* Give linked inline images some outline to let the user know they are also part of the link. */
	& span.image-inline {
		outline: var(--ck-widget-outline-thickness) solid var(--ck-color-link-selected-background);
	}
}

/*
 * Classes used by the "fake visual selection" displayed in the content when an input
 * in the link UI has focus (the browser does not render the native selection in this state).
 */
.ck .ck-fake-link-selection {
	background: var(--ck-color-link-fake-selection);
}

/* A collapsed fake visual selection. */
.ck .ck-fake-link-selection_collapsed {
	height: 100%;
	border-right: 1px solid var(--ck-color-base-text);
	margin-right: -1px;
	outline: solid 1px hsla(0, 0%, 100%, .5);
}
`],sourceRoot:""}]);const P=x},8762:(L,B,_)=>{_.d(B,{A:()=>P});var q=_(9372),U=_.n(q),H=_(935),x=_.n(H)()(U());x.push([L.id,".ck.ck-link-actions{display:flex;flex-direction:row;flex-wrap:nowrap}.ck.ck-link-actions .ck-link-actions__preview{display:inline-block}.ck.ck-link-actions .ck-link-actions__preview .ck-button__label{overflow:hidden}@media screen and (max-width:600px){.ck.ck-link-actions{flex-wrap:wrap}.ck.ck-link-actions .ck-link-actions__preview{flex-basis:100%}.ck.ck-link-actions .ck-button:not(.ck-link-actions__preview){flex-basis:50%}}.ck.ck-link-actions .ck-button.ck-link-actions__preview{padding-left:0;padding-right:0}.ck.ck-link-actions .ck-button.ck-link-actions__preview .ck-button__label{color:var(--ck-color-link-default);cursor:pointer;max-width:var(--ck-input-width);min-width:3em;padding:0 var(--ck-spacing-medium);text-align:center;text-overflow:ellipsis}.ck.ck-link-actions .ck-button.ck-link-actions__preview .ck-button__label:hover{text-decoration:underline}.ck.ck-link-actions .ck-button.ck-link-actions__preview,.ck.ck-link-actions .ck-button.ck-link-actions__preview:active,.ck.ck-link-actions .ck-button.ck-link-actions__preview:focus,.ck.ck-link-actions .ck-button.ck-link-actions__preview:hover{background:none}.ck.ck-link-actions .ck-button.ck-link-actions__preview:active{box-shadow:none}.ck.ck-link-actions .ck-button.ck-link-actions__preview:focus .ck-button__label{text-decoration:underline}[dir=ltr] .ck.ck-link-actions .ck-button:not(:first-child),[dir=rtl] .ck.ck-link-actions .ck-button:not(:last-child){margin-left:var(--ck-spacing-standard)}@media screen and (max-width:600px){.ck.ck-link-actions .ck-button.ck-link-actions__preview{margin:var(--ck-spacing-standard) var(--ck-spacing-standard) 0}.ck.ck-link-actions .ck-button.ck-link-actions__preview .ck-button__label{max-width:100%;min-width:0}[dir=ltr] .ck.ck-link-actions .ck-button:not(.ck-link-actions__preview),[dir=rtl] .ck.ck-link-actions .ck-button:not(.ck-link-actions__preview){margin-left:0}}","",{version:3,sources:["webpack://./../ckeditor5-link/theme/linkactions.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-link/linkactions.css"],names:[],mappings:"AAOA,oBACC,YAAa,CACb,kBAAmB,CACnB,gBAqBD,CAnBC,8CACC,oBAKD,CAHC,gEACC,eACD,CCXD,oCDCD,oBAcE,cAUF,CARE,8CACC,eACD,CAEA,8DACC,cACD,CCrBD,CCIA,wDACC,cAAe,CACf,eAmCD,CAjCC,0EAEC,kCAAmC,CAEnC,cAAe,CAIf,+BAAgC,CAChC,aAAc,CARd,kCAAmC,CASnC,iBAAkB,CAPlB,sBAYD,CAHC,gFACC,yBACD,CAGD,mPAIC,eACD,CAEA,+DACC,eACD,CAGC,gFACC,yBACD,CAWD,qHACC,sCACD,CDtDD,oCC0DC,wDACC,8DAMD,CAJC,0EAEC,cAAe,CADf,WAED,CAGD,gJAME,aAEF,CDzED",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-link-actions {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;

	& .ck-link-actions__preview {
		display: inline-block;

		& .ck-button__label {
			overflow: hidden;
		}
	}

	@mixin ck-media-phone {
		flex-wrap: wrap;

		& .ck-link-actions__preview {
			flex-basis: 100%;
		}

		& .ck-button:not(.ck-link-actions__preview) {
			flex-basis: 50%;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_unselectable.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";
@import "../mixins/_focus.css";
@import "../mixins/_shadow.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-link-actions {
	& .ck-button.ck-link-actions__preview {
		padding-left: 0;
		padding-right: 0;

		& .ck-button__label {
			padding: 0 var(--ck-spacing-medium);
			color: var(--ck-color-link-default);
			text-overflow: ellipsis;
			cursor: pointer;

			/* Match the box model of the link editor form's input so the balloon
			does not change width when moving between actions and the form. */
			max-width: var(--ck-input-width);
			min-width: 3em;
			text-align: center;

			&:hover {
				text-decoration: underline;
			}
		}

		&,
		&:hover,
		&:focus,
		&:active {
			background: none;
		}

		&:active {
			box-shadow: none;
		}

		&:focus {
			& .ck-button__label {
				text-decoration: underline;
			}
		}
	}

	@mixin ck-dir ltr {
		& .ck-button:not(:first-child) {
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-dir rtl {
		& .ck-button:not(:last-child) {
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-media-phone {
		& .ck-button.ck-link-actions__preview {
			margin: var(--ck-spacing-standard) var(--ck-spacing-standard) 0;

			& .ck-button__label {
				min-width: 0;
				max-width: 100%;
			}
		}

		& .ck-button:not(.ck-link-actions__preview) {
			@mixin ck-dir ltr {
				margin-left: 0;
			}

			@mixin ck-dir rtl {
				margin-left: 0;
			}
		}
	}
}
`],sourceRoot:""}]);const P=x},3817:(L,B,_)=>{_.d(B,{A:()=>P});var q=_(9372),U=_.n(q),H=_(935),x=_.n(H)()(U());x.push([L.id,".ck.ck-link-form{align-items:flex-start;display:flex}.ck.ck-link-form .ck-label{display:none}@media screen and (max-width:600px){.ck.ck-link-form{flex-wrap:wrap}.ck.ck-link-form .ck-labeled-field-view{flex-basis:100%}.ck.ck-link-form .ck-button{flex-basis:50%}}.ck.ck-link-form_layout-vertical{display:block}.ck.ck-link-form_layout-vertical .ck-button.ck-button-cancel,.ck.ck-link-form_layout-vertical .ck-button.ck-button-save{margin-top:var(--ck-spacing-medium)}.ck.ck-link-form_layout-vertical{min-width:var(--ck-input-width);padding:0}.ck.ck-link-form_layout-vertical .ck-labeled-field-view{margin:var(--ck-spacing-large) var(--ck-spacing-large) var(--ck-spacing-small)}.ck.ck-link-form_layout-vertical .ck-labeled-field-view .ck-input-text{min-width:0;width:100%}.ck.ck-link-form_layout-vertical>.ck-button{border-radius:0;margin:0;padding:var(--ck-spacing-standard);width:50%}.ck.ck-link-form_layout-vertical>.ck-button:not(:focus){border-top:1px solid var(--ck-color-base-border)}[dir=ltr] .ck.ck-link-form_layout-vertical>.ck-button,[dir=rtl] .ck.ck-link-form_layout-vertical>.ck-button{margin-left:0}[dir=rtl] .ck.ck-link-form_layout-vertical>.ck-button:last-of-type{border-right:1px solid var(--ck-color-base-border)}.ck.ck-link-form_layout-vertical .ck.ck-list{margin:var(--ck-spacing-standard) var(--ck-spacing-large)}.ck.ck-link-form_layout-vertical .ck.ck-list .ck-button.ck-switchbutton{padding:0;width:100%}.ck.ck-link-form_layout-vertical .ck.ck-list .ck-button.ck-switchbutton:hover{background:none}","",{version:3,sources:["webpack://./../ckeditor5-link/theme/linkform.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-link/linkform.css"],names:[],mappings:"AAOA,iBAEC,sBAAuB,CADvB,YAkBD,CAfC,2BACC,YACD,CCPA,oCDCD,iBASE,cAUF,CARE,wCACC,eACD,CAEA,4BACC,cACD,CChBD,CDwBD,iCACC,aAYD,CALE,wHAEC,mCACD,CEhCF,iCAEC,+BAAgC,CADhC,SAgDD,CA7CC,wDACC,8EAMD,CAJC,uEACC,WAAY,CACZ,UACD,CAGD,4CAIC,eAAgB,CAFhB,QAAS,CADT,kCAAmC,CAEnC,SAkBD,CAfC,wDACC,gDACD,CARD,4GAeE,aAMF,CAJE,mEACC,kDACD,CAKF,6CACC,yDAUD,CARC,wEACC,SAAU,CACV,UAKD,CAHC,8EACC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-link-form {
	display: flex;
	align-items: flex-start;

	& .ck-label {
		display: none;
	}

	@mixin ck-media-phone {
		flex-wrap: wrap;

		& .ck-labeled-field-view {
			flex-basis: 100%;
		}

		& .ck-button {
			flex-basis: 50%;
		}
	}
}

/*
 * Style link form differently when manual decorators are available.
 * See: https://github.com/ckeditor/ckeditor5-link/issues/186.
 */
.ck.ck-link-form_layout-vertical {
	display: block;

	/*
	 * Whether the form is in the responsive mode or not, if there are decorator buttons
	 * keep the top margin of action buttons medium.
	 */
	& .ck-button {
		&.ck-button-save,
		&.ck-button-cancel {
			margin-top: var(--ck-spacing-medium);
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

/*
 * Style link form differently when manual decorators are available.
 * See: https://github.com/ckeditor/ckeditor5-link/issues/186.
 */
.ck.ck-link-form_layout-vertical {
	padding: 0;
	min-width: var(--ck-input-width);

	& .ck-labeled-field-view {
		margin: var(--ck-spacing-large) var(--ck-spacing-large) var(--ck-spacing-small);

		& .ck-input-text {
			min-width: 0;
			width: 100%;
		}
	}

	& > .ck-button {
		padding: var(--ck-spacing-standard);
		margin: 0;
		width: 50%;
		border-radius: 0;

		&:not(:focus) {
			border-top: 1px solid var(--ck-color-base-border);
		}

		@mixin ck-dir ltr {
			margin-left: 0;
		}

		@mixin ck-dir rtl {
			margin-left: 0;

			&:last-of-type {
				border-right: 1px solid var(--ck-color-base-border);
			}
		}
	}

	/* Using additional \`.ck\` class for stronger CSS specificity than \`.ck.ck-link-form > :not(:first-child)\`. */
	& .ck.ck-list {
		margin: var(--ck-spacing-standard) var(--ck-spacing-large);

		& .ck-button.ck-switchbutton {
			padding: 0;
			width: 100%;

			&:hover {
				background: none;
			}
		}
	}
}
`],sourceRoot:""}]);const P=x},4808:(L,B,_)=>{_.d(B,{A:()=>P});var q=_(9372),U=_.n(q),H=_(935),x=_.n(H)()(U());x.push([L.id,'.ck.ck-editor__editable a span.image-inline:after,.ck.ck-editor__editable figure.image>a:after{display:block;position:absolute}:root{--ck-link-image-indicator-icon-size:20;--ck-link-image-indicator-icon-is-visible:clamp(0px,100% - 50px,1px)}.ck.ck-editor__editable a span.image-inline:after,.ck.ck-editor__editable figure.image>a:after{background-color:rgba(0,0,0,.4);background-image:url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMCAyMCI+PHBhdGggZmlsbD0iI2ZmZiIgZD0ibTExLjA3NyAxNSAuOTkxLTEuNDE2YS43NS43NSAwIDEgMSAxLjIyOS44NmwtMS4xNDggMS42NGEuNzUuNzUgMCAwIDEtLjIxNy4yMDYgNS4yNTEgNS4yNTEgMCAwIDEtOC41MDMtNS45NTUuNy43IDAgMCAxIC4xMi0uMjc0bDEuMTQ3LTEuNjM5YS43NS43NSAwIDEgMSAxLjIyOC44Nkw0LjkzMyAxMC43bC4wMDYuMDAzYTMuNzUgMy43NSAwIDAgMCA2LjEzMiA0LjI5NHptNS40OTQtNS4zMzVhLjc1Ljc1IDAgMCAxLS4xMi4yNzRsLTEuMTQ3IDEuNjM5YS43NS43NSAwIDEgMS0xLjIyOC0uODZsLjg2LTEuMjNhMy43NSAzLjc1IDAgMCAwLTYuMTQ0LTQuMzAxbC0uODYgMS4yMjlhLjc1Ljc1IDAgMCAxLTEuMjI5LS44NmwxLjE0OC0xLjY0YS43NS43NSAwIDAgMSAuMjE3LS4yMDYgNS4yNTEgNS4yNTEgMCAwIDEgOC41MDMgNS45NTVtLTQuNTYzLTIuNTMyYS43NS43NSAwIDAgMSAuMTg0IDEuMDQ1bC0zLjE1NSA0LjUwNWEuNzUuNzUgMCAxIDEtMS4yMjktLjg2bDMuMTU1LTQuNTA2YS43NS43NSAwIDAgMSAxLjA0NS0uMTg0Ii8+PC9zdmc+");background-position:50%;background-repeat:no-repeat;background-size:14px;border-radius:100%;content:"";height:calc(var(--ck-link-image-indicator-icon-is-visible)*var(--ck-link-image-indicator-icon-size));overflow:hidden;right:min(var(--ck-spacing-medium),6%);top:min(var(--ck-spacing-medium),6%);width:calc(var(--ck-link-image-indicator-icon-is-visible)*var(--ck-link-image-indicator-icon-size))}',"",{version:3,sources:["webpack://./../ckeditor5-link/theme/linkimage.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-link/linkimage.css"],names:[],mappings:"AASE,+FACC,aAAc,CACd,iBACD,CCPF,MAEC,sCAAuC,CACvC,oEACD,CAME,+FAUC,+BAAqC,CACrC,k2BAA+3B,CAG/3B,uBAA2B,CAD3B,2BAA4B,CAD5B,oBAAqB,CAGrB,kBAAmB,CAdnB,UAAW,CAsBX,oGAAuG,CAFvG,eAAgB,CAbhB,sCAAwC,CADxC,oCAAsC,CAetC,mGAED",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor__editable {
	/* Linked image indicator */
	& figure.image > a,
	& a span.image-inline {
		&::after {
			display: block;
			position: absolute;
		}
	}
}

`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/* Match the icon size with the upload indicator brought by the image upload feature. */
	--ck-link-image-indicator-icon-size: 20;
	--ck-link-image-indicator-icon-is-visible: clamp(0px, 100% - 50px, 1px);
}

.ck.ck-editor__editable {
	/* Linked image indicator */
	& figure.image > a,
	& a span.image-inline {
		&::after {
			content: "";

			/*
			 * Smaller images should have the icon closer to the border.
			 * Match the icon position with the upload indicator brought by the image upload feature.
			 */
			top: min(var(--ck-spacing-medium), 6%);
			right: min(var(--ck-spacing-medium), 6%);

			background-color: hsla(0, 0%, 0%, .4);
			background-image: url("data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjAgMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbD0iI2ZmZiIgZD0ibTExLjA3NyAxNSAuOTkxLTEuNDE2YS43NS43NSAwIDEgMSAxLjIyOS44NmwtMS4xNDggMS42NGEuNzQ4Ljc0OCAwIDAgMS0uMjE3LjIwNiA1LjI1MSA1LjI1MSAwIDAgMS04LjUwMy01Ljk1NS43NDEuNzQxIDAgMCAxIC4xMi0uMjc0bDEuMTQ3LTEuNjM5YS43NS43NSAwIDEgMSAxLjIyOC44Nkw0LjkzMyAxMC43bC4wMDYuMDAzYTMuNzUgMy43NSAwIDAgMCA2LjEzMiA0LjI5NGwuMDA2LjAwNHptNS40OTQtNS4zMzVhLjc0OC43NDggMCAwIDEtLjEyLjI3NGwtMS4xNDcgMS42MzlhLjc1Ljc1IDAgMSAxLTEuMjI4LS44NmwuODYtMS4yM2EzLjc1IDMuNzUgMCAwIDAtNi4xNDQtNC4zMDFsLS44NiAxLjIyOWEuNzUuNzUgMCAwIDEtMS4yMjktLjg2bDEuMTQ4LTEuNjRhLjc0OC43NDggMCAwIDEgLjIxNy0uMjA2IDUuMjUxIDUuMjUxIDAgMCAxIDguNTAzIDUuOTU1em0tNC41NjMtMi41MzJhLjc1Ljc1IDAgMCAxIC4xODQgMS4wNDVsLTMuMTU1IDQuNTA1YS43NS43NSAwIDEgMS0xLjIyOS0uODZsMy4xNTUtNC41MDZhLjc1Ljc1IDAgMCAxIDEuMDQ1LS4xODR6Ii8+PC9zdmc+");
			background-size: 14px;
			background-repeat: no-repeat;
			background-position: center;
			border-radius: 100%;

			/*
			* Use CSS math to simulate container queries.
			* https://css-tricks.com/the-raven-technique-one-step-closer-to-container-queries/#what-about-showing-and-hiding-things
			*/
			overflow: hidden;
			width: calc(var(--ck-link-image-indicator-icon-is-visible) * var(--ck-link-image-indicator-icon-size));
			height: calc(var(--ck-link-image-indicator-icon-is-visible) * var(--ck-link-image-indicator-icon-size));
		}
	}
}

`],sourceRoot:""}]);const P=x},1232:(L,B,_)=>{_.d(B,{A:()=>P});var q=_(9372),U=_.n(q),H=_(935),x=_.n(H)()(U());x.push([L.id,".ck-editor__editable .ck-list-bogus-paragraph{display:block}","",{version:3,sources:["webpack://./../ckeditor5-list/theme/documentlist.css"],names:[],mappings:"AAKA,8CACC,aACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-editor__editable .ck-list-bogus-paragraph {
	display: block;
}
`],sourceRoot:""}]);const P=x},6903:(L,B,_)=>{_.d(B,{A:()=>P});var q=_(9372),U=_.n(q),H=_(935),x=_.n(H)()(U());x.push([L.id,".ck-content ol{list-style-type:decimal}.ck-content ol ol{list-style-type:lower-latin}.ck-content ol ol ol{list-style-type:lower-roman}.ck-content ol ol ol ol{list-style-type:upper-latin}.ck-content ol ol ol ol ol{list-style-type:upper-roman}.ck-content ul{list-style-type:disc}.ck-content ul ul{list-style-type:circle}.ck-content ul ul ul,.ck-content ul ul ul ul{list-style-type:square}","",{version:3,sources:["webpack://./../ckeditor5-list/theme/list.css"],names:[],mappings:"AAKA,eACC,uBAiBD,CAfC,kBACC,2BAaD,CAXC,qBACC,2BASD,CAPC,wBACC,2BAKD,CAHC,2BACC,2BACD,CAMJ,eACC,oBAaD,CAXC,kBACC,sBASD,CAJE,6CACC,sBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content ol {
	list-style-type: decimal;

	& ol {
		list-style-type: lower-latin;

		& ol {
			list-style-type: lower-roman;

			& ol {
				list-style-type: upper-latin;

				& ol {
					list-style-type: upper-roman;
				}
			}
		}
	}
}

.ck-content ul {
	list-style-type: disc;

	& ul {
		list-style-type: circle;

		& ul {
			list-style-type: square;

			& ul {
				list-style-type: square;
			}
		}
	}
}
`],sourceRoot:""}]);const P=x},9968:(L,B,_)=>{_.d(B,{A:()=>P});var q=_(9372),U=_.n(q),H=_(935),x=_.n(H)()(U());x.push([L.id,".ck.ck-list-properties.ck-list-properties_without-styles{padding:var(--ck-spacing-large)}.ck.ck-list-properties.ck-list-properties_without-styles>*{min-width:14em}.ck.ck-list-properties.ck-list-properties_without-styles>*+*{margin-top:var(--ck-spacing-standard)}.ck.ck-list-properties.ck-list-properties_with-numbered-properties>.ck-list-styles-list{grid-template-columns:repeat(4,auto)}.ck.ck-list-properties.ck-list-properties_with-numbered-properties>.ck-collapsible{border-top:1px solid var(--ck-color-base-border)}.ck.ck-list-properties.ck-list-properties_with-numbered-properties>.ck-collapsible>.ck-collapsible__children>*{width:100%}.ck.ck-list-properties.ck-list-properties_with-numbered-properties>.ck-collapsible>.ck-collapsible__children>*+*{margin-top:var(--ck-spacing-standard)}.ck.ck-list-properties .ck.ck-numbered-list-properties__start-index .ck-input{min-width:auto;width:100%}.ck.ck-list-properties .ck.ck-numbered-list-properties__reversed-order{background:transparent;margin-bottom:calc(var(--ck-spacing-tiny)*-1);padding-left:0;padding-right:0}.ck.ck-list-properties .ck.ck-numbered-list-properties__reversed-order:active,.ck.ck-list-properties .ck.ck-numbered-list-properties__reversed-order:hover{background:none;border-color:transparent;box-shadow:none}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-list/listproperties.css"],names:[],mappings:"AAOC,yDACC,+BASD,CAPC,2DACC,cAKD,CAHC,6DACC,qCACD,CASD,wFACC,oCACD,CAGA,mFACC,gDAWD,CARE,+GACC,UAKD,CAHC,iHACC,qCACD,CAMJ,8EACC,cAAe,CACf,UACD,CAEA,uEACC,sBAAuB,CAGvB,6CAAgD,CAFhD,cAAe,CACf,eAQD,CALC,2JAGC,eAAgB,CADhB,wBAAyB,CADzB,eAGD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-list-properties {
	/* When there are no list styles and there is no collapsible. */
	&.ck-list-properties_without-styles {
		padding: var(--ck-spacing-large);

		& > * {
			min-width: 14em;

			& + * {
				margin-top: var(--ck-spacing-standard);
			}
		}
	}

	/*
	 * When the numbered list property fields (start at, reversed) should be displayed,
	 * more horizontal space is needed. Reconfigure the style grid to create that space.
	 */
	&.ck-list-properties_with-numbered-properties {
		& > .ck-list-styles-list {
			grid-template-columns: repeat( 4, auto );
		}

		/* When list styles are rendered and property fields are in a collapsible. */
		& > .ck-collapsible {
			border-top: 1px solid var(--ck-color-base-border);

			& > .ck-collapsible__children {
				& > * {
					width: 100%;

					& + * {
						margin-top: var(--ck-spacing-standard);
					}
				}
			}
		}
	}

	& .ck.ck-numbered-list-properties__start-index .ck-input {
		min-width: auto;
		width: 100%;
	}

	& .ck.ck-numbered-list-properties__reversed-order {
		background: transparent;
		padding-left: 0;
		padding-right: 0;
		margin-bottom: calc(-1 * var(--ck-spacing-tiny));

		&:active, &:hover {
			box-shadow: none;
			border-color: transparent;
			background: none;
		}
	}
}
`],sourceRoot:""}]);const P=x},7141:(L,B,_)=>{_.d(B,{A:()=>P});var q=_(9372),U=_.n(q),H=_(935),x=_.n(H)()(U());x.push([L.id,".ck.ck-list-styles-list{display:grid}:root{--ck-list-style-button-size:44px}.ck.ck-list-styles-list{column-gap:var(--ck-spacing-medium);grid-template-columns:repeat(3,auto);padding:var(--ck-spacing-large);row-gap:var(--ck-spacing-medium)}.ck.ck-list-styles-list .ck-button{box-sizing:content-box;margin:0;padding:0}.ck.ck-list-styles-list .ck-button,.ck.ck-list-styles-list .ck-button .ck-icon{height:var(--ck-list-style-button-size);width:var(--ck-list-style-button-size)}","",{version:3,sources:["webpack://./../ckeditor5-list/theme/liststyles.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-list/liststyles.css"],names:[],mappings:"AAKA,wBACC,YACD,CCFA,MACC,gCACD,CAEA,wBAGC,mCAAoC,CAFpC,oCAAwC,CAGxC,+BAAgC,CAFhC,gCA4BD,CAxBC,mCAiBC,sBAAuB,CAPvB,QAAS,CANT,SAmBD,CAJC,+EAhBA,uCAAwC,CADxC,sCAoBA",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-list-styles-list {
	display: grid;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-list-style-button-size: 44px;
}

.ck.ck-list-styles-list {
	grid-template-columns: repeat( 3, auto );
	row-gap: var(--ck-spacing-medium);
	column-gap: var(--ck-spacing-medium);
	padding: var(--ck-spacing-large);

	& .ck-button {
		/* Make the button look like a thumbnail (the icon "takes it all"). */
		width: var(--ck-list-style-button-size);
		height: var(--ck-list-style-button-size);
		padding: 0;

		/*
		 * Buttons are aligned by the grid so disable default button margins to not collide with the
		 * gaps in the grid.
		 */
		margin: 0;

		/*
		 * Make sure the button border (which is displayed on focus, BTW) does not steal pixels
		 * from the button dimensions and, as a result, decrease the size of the icon
		 * (which becomes blurry as it scales down).
		 */
		box-sizing: content-box;

		& .ck-icon {
			width: var(--ck-list-style-button-size);
			height: var(--ck-list-style-button-size);
		}
	}
}
`],sourceRoot:""}]);const P=x},8991:(L,B,_)=>{_.d(B,{A:()=>P});var q=_(9372),U=_.n(q),H=_(935),x=_.n(H)()(U());x.push([L.id,':root{--ck-todo-list-checkmark-size:16px}.ck-content .todo-list{list-style:none}.ck-content .todo-list li{margin-bottom:5px;position:relative}.ck-content .todo-list li .todo-list{margin-top:5px}.ck-content .todo-list .todo-list__label>input{-webkit-appearance:none;border:0;display:inline-block;height:var(--ck-todo-list-checkmark-size);left:-25px;margin-left:0;margin-right:-15px;position:relative;right:0;vertical-align:middle;width:var(--ck-todo-list-checkmark-size)}.ck-content[dir=rtl] .todo-list .todo-list__label>input{left:0;margin-left:-15px;margin-right:0;right:-25px}.ck-content .todo-list .todo-list__label>input:before{border:1px solid #333;border-radius:2px;box-sizing:border-box;content:"";display:block;height:100%;position:absolute;transition:box-shadow .25s ease-in-out;width:100%}@media (prefers-reduced-motion:reduce){.ck-content .todo-list .todo-list__label>input:before{transition:none}}.ck-content .todo-list .todo-list__label>input:after{border-color:transparent;border-style:solid;border-width:0 calc(var(--ck-todo-list-checkmark-size)/8) calc(var(--ck-todo-list-checkmark-size)/8) 0;box-sizing:content-box;content:"";display:block;height:calc(var(--ck-todo-list-checkmark-size)/2.6);left:calc(var(--ck-todo-list-checkmark-size)/3);pointer-events:none;position:absolute;top:calc(var(--ck-todo-list-checkmark-size)/5.3);transform:rotate(45deg);width:calc(var(--ck-todo-list-checkmark-size)/5.3)}.ck-content .todo-list .todo-list__label>input[checked]:before{background:#26ab33;border-color:#26ab33}.ck-content .todo-list .todo-list__label>input[checked]:after{border-color:#fff}.ck-content .todo-list .todo-list__label .todo-list__label__description{vertical-align:middle}.ck-content .todo-list .todo-list__label.todo-list__label_without-description input[type=checkbox]{position:absolute}.ck-editor__editable.ck-content .todo-list .todo-list__label>input,.ck-editor__editable.ck-content .todo-list .todo-list__label>span[contenteditable=false]>input{cursor:pointer}.ck-editor__editable.ck-content .todo-list .todo-list__label>input:hover:before,.ck-editor__editable.ck-content .todo-list .todo-list__label>span[contenteditable=false]>input:hover:before{box-shadow:0 0 0 5px rgba(0,0,0,.1)}.ck-editor__editable.ck-content .todo-list .todo-list__label>span[contenteditable=false]>input{-webkit-appearance:none;border:0;display:inline-block;height:var(--ck-todo-list-checkmark-size);left:-25px;margin-left:0;margin-right:-15px;position:relative;right:0;vertical-align:middle;width:var(--ck-todo-list-checkmark-size)}.ck-editor__editable.ck-content[dir=rtl] .todo-list .todo-list__label>span[contenteditable=false]>input{left:0;margin-left:-15px;margin-right:0;right:-25px}.ck-editor__editable.ck-content .todo-list .todo-list__label>span[contenteditable=false]>input:before{border:1px solid #333;border-radius:2px;box-sizing:border-box;content:"";display:block;height:100%;position:absolute;transition:box-shadow .25s ease-in-out;width:100%}@media (prefers-reduced-motion:reduce){.ck-editor__editable.ck-content .todo-list .todo-list__label>span[contenteditable=false]>input:before{transition:none}}.ck-editor__editable.ck-content .todo-list .todo-list__label>span[contenteditable=false]>input:after{border-color:transparent;border-style:solid;border-width:0 calc(var(--ck-todo-list-checkmark-size)/8) calc(var(--ck-todo-list-checkmark-size)/8) 0;box-sizing:content-box;content:"";display:block;height:calc(var(--ck-todo-list-checkmark-size)/2.6);left:calc(var(--ck-todo-list-checkmark-size)/3);pointer-events:none;position:absolute;top:calc(var(--ck-todo-list-checkmark-size)/5.3);transform:rotate(45deg);width:calc(var(--ck-todo-list-checkmark-size)/5.3)}.ck-editor__editable.ck-content .todo-list .todo-list__label>span[contenteditable=false]>input[checked]:before{background:#26ab33;border-color:#26ab33}.ck-editor__editable.ck-content .todo-list .todo-list__label>span[contenteditable=false]>input[checked]:after{border-color:#fff}.ck-editor__editable.ck-content .todo-list .todo-list__label.todo-list__label_without-description input[type=checkbox]{position:absolute}',"",{version:3,sources:["webpack://./../ckeditor5-list/theme/todolist.css"],names:[],mappings:"AAKA,MACC,kCACD,CA4EA,uBACC,eAwBD,CAtBC,0BAEC,iBAAkB,CADlB,iBAMD,CAHC,qCACC,cACD,CAIA,+CAtFD,uBAAwB,CAQxB,QAAS,CAPT,oBAAqB,CAGrB,yCAA0C,CAO1C,UAAW,CAGX,aAAc,CAFd,kBAAmB,CAVnB,iBAAkB,CAWlB,OAAQ,CARR,qBAAsB,CAFtB,wCAqFC,CAFA,wDApEA,MAAO,CAGP,iBAAkB,CAFlB,cAAe,CACf,WAoEA,CAhED,sDAOC,qBAAiC,CACjC,iBAAkB,CALlB,qBAAsB,CACtB,UAAW,CAHX,aAAc,CAKd,WAAY,CAJZ,iBAAkB,CAOlB,sCAAwC,CAJxC,UASD,CAHC,uCAXD,sDAYE,eAEF,CADC,CAGD,qDAaC,wBAAyB,CADzB,kBAAmB,CAEnB,sGAA+G,CAX/G,sBAAuB,CAEvB,UAAW,CAJX,aAAc,CAUd,mDAAwD,CAHxD,+CAAoD,CAJpD,mBAAoB,CAFpB,iBAAkB,CAOlB,gDAAqD,CAMrD,uBAAwB,CALxB,kDAMD,CAGC,+DACC,kBAA8B,CAC9B,oBACD,CAEA,8DACC,iBACD,CAwBA,wEACC,qBACD,CAEA,mGACC,iBACD,CAYD,kKAEC,cAKD,CAHC,4LACC,mCACD,CAMD,+FAxHA,uBAAwB,CAQxB,QAAS,CAPT,oBAAqB,CAGrB,yCAA0C,CAO1C,UAAW,CAGX,aAAc,CAFd,kBAAmB,CAVnB,iBAAkB,CAWlB,OAAQ,CARR,qBAAsB,CAFtB,wCAuHA,CAFA,wGAtGC,MAAO,CAGP,iBAAkB,CAFlB,cAAe,CACf,WAsGD,CAlGA,sGAOC,qBAAiC,CACjC,iBAAkB,CALlB,qBAAsB,CACtB,UAAW,CAHX,aAAc,CAKd,WAAY,CAJZ,iBAAkB,CAOlB,sCAAwC,CAJxC,UASD,CAHC,uCAXD,sGAYE,eAEF,CADC,CAGD,qGAaC,wBAAyB,CADzB,kBAAmB,CAEnB,sGAA+G,CAX/G,sBAAuB,CAEvB,UAAW,CAJX,aAAc,CAUd,mDAAwD,CAHxD,+CAAoD,CAJpD,mBAAoB,CAFpB,iBAAkB,CAOlB,gDAAqD,CAMrD,uBAAwB,CALxB,kDAMD,CAGC,+GACC,kBAA8B,CAC9B,oBACD,CAEA,8GACC,iBACD,CA2DA,uHACC,iBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-todo-list-checkmark-size: 16px;
}

@define-mixin todo-list-checkbox {
	-webkit-appearance: none;
	display: inline-block;
	position: relative;
	width: var(--ck-todo-list-checkmark-size);
	height: var(--ck-todo-list-checkmark-size);
	vertical-align: middle;

	/* Needed on iOS */
	border: 0;

	/* LTR styles */
	left: -25px;
	margin-right: -15px;
	right: 0;
	margin-left: 0;

	/* RTL styles */
	@nest [dir=rtl]& {
		left: 0;
		margin-right: 0;
		right: -25px;
		margin-left: -15px;
	}

	&::before {
		display: block;
		position: absolute;
		box-sizing: border-box;
		content: '';
		width: 100%;
		height: 100%;
		border: 1px solid hsl(0, 0%, 20%);
		border-radius: 2px;
		transition: 250ms ease-in-out box-shadow;

		@media (prefers-reduced-motion: reduce) {
			transition: none;
		}
	}

	&::after {
		display: block;
		position: absolute;
		box-sizing: content-box;
		pointer-events: none;
		content: '';

		/* Calculate tick position, size and border-width proportional to the checkmark size. */
		left: calc( var(--ck-todo-list-checkmark-size) / 3 );
		top: calc( var(--ck-todo-list-checkmark-size) / 5.3 );
		width: calc( var(--ck-todo-list-checkmark-size) / 5.3 );
		height: calc( var(--ck-todo-list-checkmark-size) / 2.6 );
		border-style: solid;
		border-color: transparent;
		border-width: 0 calc( var(--ck-todo-list-checkmark-size) / 8 ) calc( var(--ck-todo-list-checkmark-size) / 8 ) 0;
		transform: rotate(45deg);
	}

	&[checked] {
		&::before {
			background: hsl(126, 64%, 41%);
			border-color: hsl(126, 64%, 41%);
		}

		&::after {
			border-color: hsl(0, 0%, 100%);
		}
	}
}

/*
 * To-do list content styles.
 */
.ck-content .todo-list {
	list-style: none;

	& li {
		position: relative;
		margin-bottom: 5px;

		& .todo-list {
			margin-top: 5px;
		}
	}

	& .todo-list__label {
		& > input {
			@mixin todo-list-checkbox;
		}

		& .todo-list__label__description {
			vertical-align: middle;
		}

		&.todo-list__label_without-description input[type=checkbox] {
			position: absolute;
		}
	}
}

/*
 * To-do list editing view styles.
 */
.ck-editor__editable.ck-content .todo-list .todo-list__label {
	/*
	 * To-do list should be interactive only during the editing
	 * (https://github.com/ckeditor/ckeditor5/issues/2090).
	 */
	& > input,
	& > span[contenteditable=false] > input {
		cursor: pointer;

		&:hover::before {
			box-shadow: 0 0 0 5px hsla(0, 0%, 0%, 0.1);
		}
	}

	/*
	 * Document Lists - editing view has an additional span around checkbox.
	 */
	& > span[contenteditable=false] > input {
		@mixin todo-list-checkbox;
	}

	&.todo-list__label_without-description {
		& input[type=checkbox] {
			position: absolute;
		}
	}
}
`],sourceRoot:""}]);const P=x},70:(L,B,_)=>{_.d(B,{A:()=>P});var q=_(9372),U=_.n(q),H=_(935),x=_.n(H)()(U());x.push([L.id,".ck-content .media{clear:both;display:block;margin:.9em 0;min-width:15em}","",{version:3,sources:["webpack://./../ckeditor5-media-embed/theme/mediaembed.css"],names:[],mappings:"AAKA,mBAGC,UAAW,CASX,aAAc,CAJd,aAAe,CAQf,cACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content .media {
	/* Don't allow floated content overlap the media.
	https://github.com/ckeditor/ckeditor5-media-embed/issues/53 */
	clear: both;

	/* Make sure there is some space between the content and the media. */
	/* The first value should be equal to --ck-spacing-large variable if used in the editor context
	to avoid the content jumping (See https://github.com/ckeditor/ckeditor5/issues/9825). */
	margin: 0.9em 0;

	/* Make sure media is not overriden with Bootstrap default \`flex\` value.
	See: https://github.com/ckeditor/ckeditor5/issues/1373. */
	display: block;

	/* Give the media some minimal width in the content to prevent them
	from being "squashed" in tight spaces, e.g. in table cells (#44) */
	min-width: 15em;
}
`],sourceRoot:""}]);const P=x},7048:(L,B,_)=>{_.d(B,{A:()=>P});var q=_(9372),U=_.n(q),H=_(935),x=_.n(H)()(U());x.push([L.id,'.ck-media__wrapper .ck-media__placeholder{align-items:center;display:flex;flex-direction:column}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url{max-width:100%;position:relative}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url .ck-media__placeholder__url__text{display:block;overflow:hidden}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="goo.gl/maps"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="google.com/maps"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="maps.app.goo.gl"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="maps.google.com"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck-media__placeholder__icon *{display:none}.ck-editor__editable:not(.ck-read-only) .ck-media__wrapper>:not(.ck-media__placeholder),.ck-editor__editable:not(.ck-read-only) .ck-widget:not(.ck-widget_selected) .ck-media__placeholder{pointer-events:none}:root{--ck-media-embed-placeholder-icon-size:3em;--ck-color-media-embed-placeholder-url-text:#757575;--ck-color-media-embed-placeholder-url-text-hover:var(--ck-color-base-text)}.ck-media__wrapper{margin:0 auto}.ck-media__wrapper .ck-media__placeholder{background:var(--ck-color-base-foreground);padding:calc(var(--ck-spacing-standard)*3)}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__icon{background-position:50%;background-size:cover;height:var(--ck-media-embed-placeholder-icon-size);margin-bottom:var(--ck-spacing-large);min-width:var(--ck-media-embed-placeholder-icon-size)}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__icon .ck-icon{height:100%;width:100%}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url__text{color:var(--ck-color-media-embed-placeholder-url-text);font-style:italic;text-align:center;text-overflow:ellipsis;white-space:nowrap}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url__text:hover{color:var(--ck-color-media-embed-placeholder-url-text-hover);cursor:pointer;text-decoration:underline}.ck-media__wrapper[data-oembed-url*="open.spotify.com"]{max-height:380px;max-width:300px}.ck-media__wrapper[data-oembed-url*="goo.gl/maps"] .ck-media__placeholder__icon,.ck-media__wrapper[data-oembed-url*="google.com/maps"] .ck-media__placeholder__icon,.ck-media__wrapper[data-oembed-url*="maps.app.goo.gl"] .ck-media__placeholder__icon,.ck-media__wrapper[data-oembed-url*="maps.google.com"] .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNTAuMzc4IiBoZWlnaHQ9IjI1NC4xNjciIHZpZXdCb3g9IjAgMCA2Ni4yNDYgNjcuMjQ4Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTcyLjUzMSAtMjE4LjQ1NSlzY2FsZSguOTgwMTIpIj48cmVjdCB3aWR0aD0iNjAuMDk5IiBoZWlnaHQ9IjYwLjA5OSIgeD0iMTc2LjAzMSIgeT0iMjMxLjM5OSIgZmlsbD0iIzM0YTY2OCIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiIHJ4PSI1LjIzOCIgcnk9IjUuMjM4Ii8+PHBhdGggZmlsbD0iIzVjODhjNSIgZD0ibTIwNi40NzcgMjYwLjktMjguOTg3IDI4Ljk4N2E1LjIyIDUuMjIgMCAwIDAgMy43OCAxLjYxaDQ5LjYyMWMxLjY5NCAwIDMuMTktLjc5OCA0LjE0Ni0yLjAzN3oiLz48cGF0aCBmaWxsPSIjZGQ0YjNlIiBkPSJNMjI2Ljc0MiAyMjIuOTg4Yy05LjI2NiAwLTE2Ljc3NyA3LjE3LTE2Ljc3NyAxNi4wMTQuMDA3IDIuNzYyLjY2MyA1LjQ3NCAyLjA5MyA3Ljg3NS40My43MDMuODMgMS40MDggMS4xOSAyLjEwN3EuNS43NTMuOTUgMS41MDguNTE1LjcxNS45ODggMS40NGMxLjMxIDEuNzY5IDIuNSAzLjUwMiAzLjYzNyA1LjE2OC43OTMgMS4yNzUgMS42ODMgMi42NCAyLjQ2NiAzLjk5IDIuMzYzIDQuMDk0IDQuMDA3IDguMDkyIDQuNiAxMy45MTR2LjAxMmMuMTgyLjQxMi41MTYuNjY2Ljg3OS42NjcuNDAzLS4wMDEuNzY4LS4zMTQuOTMtLjc5OS42MDMtNS43NTYgMi4yMzgtOS43MjkgNC41ODUtMTMuNzk0Ljc4Mi0xLjM1IDEuNjczLTIuNzE1IDIuNDY1LTMuOTkgMS4xMzctMS42NjYgMi4zMjgtMy40IDMuNjM4LTUuMTY5cS40NzMtLjcyMy45ODgtMS40MzkuNDUtLjc1NS45NS0xLjUwOGMuMzU5LS43Ljc2LTEuNDA0IDEuMTktMi4xMDcgMS40MjYtMi40MDIgMi01LjExNCAyLjAwNC03Ljg3NSAwLTguODQ0LTcuNTExLTE2LjAxNC0xNi43NzYtMTYuMDE0IiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjxlbGxpcHNlIGN4PSIyMjYuNzQyIiBjeT0iMjM5LjAwMiIgZmlsbD0iIzgwMmQyNyIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiIHJ4PSI1LjgyOCIgcnk9IjUuNTY0Ii8+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTE5MC4zMDEgMjM3LjI4M2MtNC42NyAwLTguNDU3IDMuODUzLTguNDU3IDguNjA2czMuNzg2IDguNjA3IDguNDU3IDguNjA3YzMuMDQzIDAgNC44MDYtLjk1OCA2LjMzNy0yLjUxNiAxLjUzLTEuNTU3IDIuMDg3LTMuOTEzIDIuMDg3LTYuMjlxLS4wMDEtLjU0My0uMDY0LTEuMDc5aC04LjI1N3YzLjA0M2g0Ljg1Yy0uMTk3Ljc1OS0uNTMxIDEuNDUtMS4wNTggMS45ODYtLjk0Mi45NTgtMi4wMjggMS41NDgtMy45MDEgMS41NDgtMi44NzYgMC01LjIwOC0yLjM3Mi01LjIwOC01LjI5OSAwLTIuOTI2IDIuMzMyLTUuMjk5IDUuMjA4LTUuMjk5IDEuMzk5IDAgMi42MTguNDA3IDMuNTg0IDEuMjkzbDIuMzgxLTIuMzhxLS4wMDEtLjAwMy0uMDA0LS4wMDVjLTEuNTg4LTEuNTI0LTMuNjItMi4yMTUtNS45NTUtMi4yMTVtNC40MyA1LjY2LjAwMy4wMDZ2LS4wMDN6IiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjxwYXRoIGZpbGw9IiNjM2MzYzMiIGQ9Im0yMTUuMTg0IDI1MS45MjktNy45OCA3Ljk3OSAyOC40NzcgMjguNDc1YTUuMiA1LjIgMCAwIDAgLjQ0OS0yLjEyM3YtMzEuMTY1Yy0uNDY5LjY3NS0uOTM0IDEuMzQ5LTEuMzgyIDIuMDA1LS43OTIgMS4yNzUtMS42ODIgMi42NC0yLjQ2NSAzLjk5LTIuMzQ3IDQuMDY1LTMuOTgyIDguMDM4LTQuNTg1IDEzLjc5NC0uMTYyLjQ4NS0uNTI3Ljc5OC0uOTMuNzk5LS4zNjMtLjAwMS0uNjk3LS4yNTUtLjg3OS0uNjY3di0uMDEyYy0uNTkzLTUuODIyLTIuMjM3LTkuODItNC42LTEzLjkxNC0uNzgzLTEuMzUtMS42NzMtMi43MTUtMi40NjYtMy45OS0xLjEzNy0xLjY2Ni0yLjMyNy0zLjQtMy42MzctNS4xNjl6Ii8+PHBhdGggZmlsbD0iI2ZkZGM0ZiIgZD0ibTIxMi45ODMgMjQ4LjQ5NS0zNi45NTIgMzYuOTUzdi44MTJhNS4yMjcgNS4yMjcgMCAwIDAgNS4yMzggNS4yMzhoMS4wMTVsMzUuNjY2LTM1LjY2NmExMzYgMTM2IDAgMCAwLTIuNzY0LTMuOSAzOCAzOCAwIDAgMC0uOTg5LTEuNDQgMzUgMzUgMCAwIDAtLjk1LTEuNTA4Yy0uMDgzLS4xNjItLjE3Ni0uMzI2LS4yNjQtLjQ4OSIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48cGF0aCBmaWxsPSIjZmZmIiBkPSJtMjExLjk5OCAyNjEuMDgzLTYuMTUyIDYuMTUxIDI0LjI2NCAyNC4yNjRoLjc4MWE1LjIyNyA1LjIyNyAwIDAgMCA1LjIzOS01LjIzOHYtMS4wNDV6IiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjwvZz48L3N2Zz4=)}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder{background:#4268b3}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDI0IiBoZWlnaHQ9IjEwMjQiPjxwYXRoIGZpbGw9IiNGRkZGRkUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTk2Ny40ODQgMEg1Ni41MTdDMjUuMzA0IDAgMCAyNS4zMDQgMCA1Ni41MTd2OTEwLjk2NkMwIDk5OC42OTQgMjUuMjk3IDEwMjQgNTYuNTIyIDEwMjRINTQ3VjYyOEg0MTRWNDczaDEzM1YzNTkuMDI5YzAtMTMyLjI2MiA4MC43NzMtMjA0LjI4MiAxOTguNzU2LTIwNC4yODIgNTYuNTEzIDAgMTA1LjA4NiA0LjIwOCAxMTkuMjQ0IDYuMDg5VjI5OWwtODEuNjE2LjAzN2MtNjMuOTkzIDAtNzYuMzg0IDMwLjQ5Mi03Ni4zODQgNzUuMjM2VjQ3M2gxNTMuNDg3bC0xOS45ODYgMTU1SDcwN3YzOTZoMjYwLjQ4NGMzMS4yMTMgMCA1Ni41MTYtMjUuMzAzIDU2LjUxNi01Ni41MTZWNTYuNTE1QzEwMjQgMjUuMzAzIDk5OC42OTcgMCA5NjcuNDg0IDAiLz48L3N2Zz4=)}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder .ck-media__placeholder__url__text{color:#cdf}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder .ck-media__placeholder__url__text:hover{color:#fff}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder{background:linear-gradient(-135deg,#1400c7,#b800b1,#f50000)}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNTA0IiBoZWlnaHQ9IjUwNCI+PGRlZnM+PHBhdGggaWQ9ImEiIGQ9Ik0wIC4xNTloNTAzLjg0MVY1MDMuOTRIMHoiLz48L2RlZnM+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48bWFzayBpZD0iYiIgZmlsbD0iI2ZmZiI+PHVzZSB4bGluazpocmVmPSIjYSIvPjwvbWFzaz48cGF0aCBmaWxsPSIjRkZGIiBkPSJNMjUxLjkyMS4xNTljLTY4LjQxOCAwLTc2Ljk5Ny4yOS0xMDMuODY3IDEuNTE2LTI2LjgxNCAxLjIyMy00NS4xMjcgNS40ODItNjEuMTUxIDExLjcxLTE2LjU2NiA2LjQzNy0zMC42MTUgMTUuMDUxLTQ0LjYyMSAyOS4wNTYtMTQuMDA1IDE0LjAwNi0yMi42MTkgMjguMDU1LTI5LjA1NiA0NC42MjEtNi4yMjggMTYuMDI0LTEwLjQ4NyAzNC4zMzctMTEuNzEgNjEuMTUxQy4yOSAxNzUuMDgzIDAgMTgzLjY2MiAwIDI1Mi4wOGMwIDY4LjQxNy4yOSA3Ni45OTYgMS41MTYgMTAzLjg2NiAxLjIyMyAyNi44MTQgNS40ODIgNDUuMTI3IDExLjcxIDYxLjE1MSA2LjQzNyAxNi41NjYgMTUuMDUxIDMwLjYxNSAyOS4wNTYgNDQuNjIxIDE0LjAwNiAxNC4wMDUgMjguMDU1IDIyLjYxOSA0NC42MjEgMjkuMDU3IDE2LjAyNCA2LjIyNyAzNC4zMzcgMTAuNDg2IDYxLjE1MSAxMS43MDkgMjYuODcgMS4yMjYgMzUuNDQ5IDEuNTE2IDEwMy44NjcgMS41MTYgNjguNDE3IDAgNzYuOTk2LS4yOSAxMDMuODY2LTEuNTE2IDI2LjgxNC0xLjIyMyA0NS4xMjctNS40ODIgNjEuMTUxLTExLjcwOSAxNi41NjYtNi40MzggMzAuNjE1LTE1LjA1MiA0NC42MjEtMjkuMDU3IDE0LjAwNS0xNC4wMDYgMjIuNjE5LTI4LjA1NSAyOS4wNTctNDQuNjIxIDYuMjI3LTE2LjAyNCAxMC40ODYtMzQuMzM3IDExLjcwOS02MS4xNTEgMS4yMjYtMjYuODcgMS41MTYtMzUuNDQ5IDEuNTE2LTEwMy44NjYgMC02OC40MTgtLjI5LTc2Ljk5Ny0xLjUxNi0xMDMuODY3LTEuMjIzLTI2LjgxNC01LjQ4Mi00NS4xMjctMTEuNzA5LTYxLjE1MS02LjQzOC0xNi41NjYtMTUuMDUyLTMwLjYxNS0yOS4wNTctNDQuNjIxLTE0LjAwNi0xNC4wMDUtMjguMDU1LTIyLjYxOS00NC42MjEtMjkuMDU2LTE2LjAyNC02LjIyOC0zNC4zMzctMTAuNDg3LTYxLjE1MS0xMS43MUMzMjguOTE3LjQ0OSAzMjAuMzM4LjE1OSAyNTEuOTIxLjE1OW0wIDQ1LjM5MWM2Ny4yNjUgMCA3NS4yMzMuMjU3IDEwMS43OTcgMS40NjkgMjQuNTYyIDEuMTIgMzcuOTAxIDUuMjI0IDQ2Ljc3OCA4LjY3NCAxMS43NTkgNC41NyAyMC4xNTEgMTAuMDI5IDI4Ljk2NiAxOC44NDVzMTQuMjc1IDE3LjIwNyAxOC44NDUgMjguOTY2YzMuNDUgOC44NzcgNy41NTQgMjIuMjE2IDguNjc0IDQ2Ljc3OCAxLjIxMiAyNi41NjQgMS40NjkgMzQuNTMyIDEuNDY5IDEwMS43OTggMCA2Ny4yNjUtLjI1NyA3NS4yMzMtMS40NjkgMTAxLjc5Ny0xLjEyIDI0LjU2Mi01LjIyNCAzNy45MDEtOC42NzQgNDYuNzc4LTQuNTcgMTEuNzU5LTEwLjAyOSAyMC4xNTEtMTguODQ1IDI4Ljk2NnMtMTcuMjA3IDE0LjI3NS0yOC45NjYgMTguODQ1Yy04Ljg3NyAzLjQ1LTIyLjIxNiA3LjU1NC00Ni43NzggOC42NzQtMjYuNTYgMS4yMTItMzQuNTI3IDEuNDY5LTEwMS43OTcgMS40NjktNjcuMjcxIDAtNzUuMjM3LS4yNTctMTAxLjc5OC0xLjQ2OS0yNC41NjItMS4xMi0zNy45MDEtNS4yMjQtNDYuNzc4LTguNjc0LTExLjc1OS00LjU3LTIwLjE1MS0xMC4wMjktMjguOTY2LTE4Ljg0NXMtMTQuMjc1LTE3LjIwNy0xOC44NDUtMjguOTY2Yy0zLjQ1LTguODc3LTcuNTU0LTIyLjIxNi04LjY3NC00Ni43NzgtMS4yMTItMjYuNTY0LTEuNDY5LTM0LjUzMi0xLjQ2OS0xMDEuNzk3IDAtNjcuMjY2LjI1Ny03NS4yMzQgMS40NjktMTAxLjc5OCAxLjEyLTI0LjU2MiA1LjIyNC0zNy45MDEgOC42NzQtNDYuNzc4IDQuNTctMTEuNzU5IDEwLjAyOS0yMC4xNTEgMTguODQ1LTI4Ljk2NnMxNy4yMDctMTQuMjc1IDI4Ljk2Ni0xOC44NDVjOC44NzctMy40NSAyMi4yMTYtNy41NTQgNDYuNzc4LTguNjc0IDI2LjU2NC0xLjIxMiAzNC41MzItMS40NjkgMTAxLjc5OC0xLjQ2OSIgbWFzaz0idXJsKCNiKSIvPjxwYXRoIGZpbGw9IiNGRkYiIGQ9Ik0yNTEuOTIxIDMzNi4wNTNjLTQ2LjM3OCAwLTgzLjk3NC0zNy41OTYtODMuOTc0LTgzLjk3M3MzNy41OTYtODMuOTc0IDgzLjk3NC04My45NzRjNDYuMzc3IDAgODMuOTczIDM3LjU5NiA4My45NzMgODMuOTc0IDAgNDYuMzc3LTM3LjU5NiA4My45NzMtODMuOTczIDgzLjk3M20wLTIxMy4zMzhjLTcxLjQ0NyAwLTEyOS4zNjUgNTcuOTE4LTEyOS4zNjUgMTI5LjM2NSAwIDcxLjQ0NiA1Ny45MTggMTI5LjM2NCAxMjkuMzY1IDEyOS4zNjQgNzEuNDQ2IDAgMTI5LjM2NC01Ny45MTggMTI5LjM2NC0xMjkuMzY0IDAtNzEuNDQ3LTU3LjkxOC0xMjkuMzY1LTEyOS4zNjQtMTI5LjM2NU00MTYuNjI3IDExNy42MDRjMCAxNi42OTYtMTMuNTM1IDMwLjIzLTMwLjIzMSAzMC4yMy0xNi42OTUgMC0zMC4yMy0xMy41MzQtMzAuMjMtMzAuMjNzMTMuNTM1LTMwLjIzMSAzMC4yMy0zMC4yMzFjMTYuNjk2IDAgMzAuMjMxIDEzLjUzNSAzMC4yMzEgMzAuMjMxIi8+PC9nPjwvc3ZnPg==)}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder .ck-media__placeholder__url__text{color:#ffe0fe}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder .ck-media__placeholder__url__text:hover{color:#fff}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder{background:linear-gradient(90deg,#71c6f4,#0d70a5)}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbDpzcGFjZT0icHJlc2VydmUiIHZpZXdCb3g9IjAgMCA0MDAgNDAwIj48cGF0aCBkPSJNNDAwIDIwMGMwIDExMC41LTg5LjUgMjAwLTIwMCAyMDBTMCAzMTAuNSAwIDIwMCA4OS41IDAgMjAwIDBzMjAwIDg5LjUgMjAwIDIwME0xNjMuNCAzMDUuNWM4OC43IDAgMTM3LjItNzMuNSAxMzcuMi0xMzcuMiAwLTIuMSAwLTQuMi0uMS02LjIgOS40LTYuOCAxNy42LTE1LjMgMjQuMS0yNS04LjYgMy44LTE3LjkgNi40LTI3LjcgNy42IDEwLTYgMTcuNi0xNS40IDIxLjItMjYuNy05LjMgNS41LTE5LjYgOS41LTMwLjYgMTEuNy04LjgtOS40LTIxLjMtMTUuMi0zNS4yLTE1LjItMjYuNiAwLTQ4LjIgMjEuNi00OC4yIDQ4LjIgMCAzLjguNCA3LjUgMS4zIDExLTQwLjEtMi03NS42LTIxLjItOTkuNC01MC40LTQuMSA3LjEtNi41IDE1LjQtNi41IDI0LjIgMCAxNi43IDguNSAzMS41IDIxLjUgNDAuMS03LjktLjItMTUuMy0yLjQtMjEuOC02di42YzAgMjMuNCAxNi42IDQyLjggMzguNyA0Ny4zLTQgMS4xLTguMyAxLjctMTIuNyAxLjctMy4xIDAtNi4xLS4zLTkuMS0uOSA2LjEgMTkuMiAyMy45IDMzLjEgNDUgMzMuNS0xNi41IDEyLjktMzcuMyAyMC42LTU5LjkgMjAuNi0zLjkgMC03LjctLjItMTEuNS0uNyAyMS4xIDEzLjggNDYuNSAyMS44IDczLjcgMjEuOCIgc3R5bGU9ImZpbGw6I2ZmZiIvPjwvc3ZnPg==)}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder .ck-media__placeholder__url__text{color:#b8e6ff}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder .ck-media__placeholder__url__text:hover{color:#fff}',"",{version:3,sources:["webpack://./../ckeditor5-media-embed/theme/mediaembedediting.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-media-embed/mediaembedediting.css"],names:[],mappings:"AAMC,0CAGC,kBAAmB,CAFnB,YAAa,CACb,qBAcD,CAXC,sEAEC,cAAe,CAEf,iBAMD,CAJC,wGAEC,aAAc,CADd,eAED,CAWD,6kBACC,YACD,CAYF,2LACC,mBACD,CC1CA,MACC,0CAA2C,CAE3C,mDAA4D,CAC5D,2EACD,CAEA,mBACC,aA+FD,CA7FC,0CAEC,0CAA2C,CAD3C,0CA6BD,CA1BC,uEAIC,uBAA2B,CAC3B,qBAAsB,CAHtB,kDAAmD,CACnD,qCAAsC,CAFtC,qDAUD,CAJC,gFAEC,WAAY,CADZ,UAED,CAGD,4EACC,sDAAuD,CAGvD,iBAAkB,CADlB,iBAAkB,CAElB,sBAAuB,CAHvB,kBAUD,CALC,kFACC,4DAA6D,CAC7D,cAAe,CACf,yBACD,CAIF,wDAEC,gBAAiB,CADjB,eAED,CAEA,4UAIC,goGACD,CAEA,2EACC,kBAaD,CAXC,wGACC,orBACD,CAEA,6GACC,UAKD,CAHC,mHACC,UACD,CAIF,4EACC,2DAcD,CAZC,yGACC,o+GACD,CAGA,8GACC,aAKD,CAHC,oHACC,UACD,CAIF,6EAEC,iDAaD,CAXC,0GACC,g/BACD,CAEA,+GACC,aAKD,CAHC,qHACC,UACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-media__wrapper {
	& .ck-media__placeholder {
		display: flex;
		flex-direction: column;
		align-items: center;

		& .ck-media__placeholder__url {
			/* Otherwise the URL will overflow when the content is very narrow. */
			max-width: 100%;

			position: relative;

			& .ck-media__placeholder__url__text {
				overflow: hidden;
				display: block;
			}
		}
	}

	&[data-oembed-url*="twitter.com"],
	&[data-oembed-url*="google.com/maps"],
	&[data-oembed-url*="goo.gl/maps"],
	&[data-oembed-url*="maps.google.com"],
	&[data-oembed-url*="maps.app.goo.gl"],
	&[data-oembed-url*="facebook.com"],
	&[data-oembed-url*="instagram.com"] {
		& .ck-media__placeholder__icon * {
			display: none;
		}
	}
}

/* Disable all mouse interaction as long as the editor is not read–only.
   https://github.com/ckeditor/ckeditor5-media-embed/issues/58 */
.ck-editor__editable:not(.ck-read-only) .ck-media__wrapper > *:not(.ck-media__placeholder) {
	pointer-events: none;
}

/* Disable all mouse interaction when the widget is not selected (e.g. to avoid opening links by accident).
   https://github.com/ckeditor/ckeditor5-media-embed/issues/18 */
.ck-editor__editable:not(.ck-read-only) .ck-widget:not(.ck-widget_selected) .ck-media__placeholder {
	pointer-events: none;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-media-embed-placeholder-icon-size: 3em;

	--ck-color-media-embed-placeholder-url-text: hsl(0, 0%, 46%);
	--ck-color-media-embed-placeholder-url-text-hover: var(--ck-color-base-text);
}

.ck-media__wrapper {
	margin: 0 auto;

	& .ck-media__placeholder {
		padding: calc( 3 * var(--ck-spacing-standard) );
		background: var(--ck-color-base-foreground);

		& .ck-media__placeholder__icon {
			min-width: var(--ck-media-embed-placeholder-icon-size);
			height: var(--ck-media-embed-placeholder-icon-size);
			margin-bottom: var(--ck-spacing-large);
			background-position: center;
			background-size: cover;

			& .ck-icon {
				width: 100%;
				height: 100%;
			}
		}

		& .ck-media__placeholder__url__text {
			color: var(--ck-color-media-embed-placeholder-url-text);
			white-space: nowrap;
			text-align: center;
			font-style: italic;
			text-overflow: ellipsis;

			&:hover {
				color: var(--ck-color-media-embed-placeholder-url-text-hover);
				cursor: pointer;
				text-decoration: underline;
			}
		}
	}

	&[data-oembed-url*="open.spotify.com"] {
		max-width: 300px;
		max-height: 380px;
	}

	&[data-oembed-url*="google.com/maps"] .ck-media__placeholder__icon,
	&[data-oembed-url*="goo.gl/maps"] .ck-media__placeholder__icon,
	&[data-oembed-url*="maps.google.com"] .ck-media__placeholder__icon,
	&[data-oembed-url*="maps.app.goo.gl"] .ck-media__placeholder__icon {
		background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNTAuMzc4IiBoZWlnaHQ9IjI1NC4xNjciIHZpZXdCb3g9IjAgMCA2Ni4yNDYgNjcuMjQ4Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTcyLjUzMSAtMjE4LjQ1NSkgc2NhbGUoLjk4MDEyKSI+PHJlY3Qgcnk9IjUuMjM4IiByeD0iNS4yMzgiIHk9IjIzMS4zOTkiIHg9IjE3Ni4wMzEiIGhlaWdodD0iNjAuMDk5IiB3aWR0aD0iNjAuMDk5IiBmaWxsPSIjMzRhNjY4IiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjxwYXRoIGQ9Ik0yMDYuNDc3IDI2MC45bC0yOC45ODcgMjguOTg3YTUuMjE4IDUuMjE4IDAgMCAwIDMuNzggMS42MWg0OS42MjFjMS42OTQgMCAzLjE5LS43OTggNC4xNDYtMi4wMzd6IiBmaWxsPSIjNWM4OGM1Ii8+PHBhdGggZD0iTTIyNi43NDIgMjIyLjk4OGMtOS4yNjYgMC0xNi43NzcgNy4xNy0xNi43NzcgMTYuMDE0LjAwNyAyLjc2Mi42NjMgNS40NzQgMi4wOTMgNy44NzUuNDMuNzAzLjgzIDEuNDA4IDEuMTkgMi4xMDcuMzMzLjUwMi42NSAxLjAwNS45NSAxLjUwOC4zNDMuNDc3LjY3My45NTcuOTg4IDEuNDQgMS4zMSAxLjc2OSAyLjUgMy41MDIgMy42MzcgNS4xNjguNzkzIDEuMjc1IDEuNjgzIDIuNjQgMi40NjYgMy45OSAyLjM2MyA0LjA5NCA0LjAwNyA4LjA5MiA0LjYgMTMuOTE0di4wMTJjLjE4Mi40MTIuNTE2LjY2Ni44NzkuNjY3LjQwMy0uMDAxLjc2OC0uMzE0LjkzLS43OTkuNjAzLTUuNzU2IDIuMjM4LTkuNzI5IDQuNTg1LTEzLjc5NC43ODItMS4zNSAxLjY3My0yLjcxNSAyLjQ2NS0zLjk5IDEuMTM3LTEuNjY2IDIuMzI4LTMuNCAzLjYzOC01LjE2OS4zMTUtLjQ4Mi42NDUtLjk2Mi45ODgtMS40MzkuMy0uNTAzLjYxNy0xLjAwNi45NS0xLjUwOC4zNTktLjcuNzYtMS40MDQgMS4xOS0yLjEwNyAxLjQyNi0yLjQwMiAyLTUuMTE0IDIuMDA0LTcuODc1IDAtOC44NDQtNy41MTEtMTYuMDE0LTE2Ljc3Ni0xNi4wMTR6IiBmaWxsPSIjZGQ0YjNlIiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjxlbGxpcHNlIHJ5PSI1LjU2NCIgcng9IjUuODI4IiBjeT0iMjM5LjAwMiIgY3g9IjIyNi43NDIiIGZpbGw9IiM4MDJkMjciIHBhaW50LW9yZGVyPSJtYXJrZXJzIHN0cm9rZSBmaWxsIi8+PHBhdGggZD0iTTE5MC4zMDEgMjM3LjI4M2MtNC42NyAwLTguNDU3IDMuODUzLTguNDU3IDguNjA2czMuNzg2IDguNjA3IDguNDU3IDguNjA3YzMuMDQzIDAgNC44MDYtLjk1OCA2LjMzNy0yLjUxNiAxLjUzLTEuNTU3IDIuMDg3LTMuOTEzIDIuMDg3LTYuMjkgMC0uMzYyLS4wMjMtLjcyMi0uMDY0LTEuMDc5aC04LjI1N3YzLjA0M2g0Ljg1Yy0uMTk3Ljc1OS0uNTMxIDEuNDUtMS4wNTggMS45ODYtLjk0Mi45NTgtMi4wMjggMS41NDgtMy45MDEgMS41NDgtMi44NzYgMC01LjIwOC0yLjM3Mi01LjIwOC01LjI5OSAwLTIuOTI2IDIuMzMyLTUuMjk5IDUuMjA4LTUuMjk5IDEuMzk5IDAgMi42MTguNDA3IDMuNTg0IDEuMjkzbDIuMzgxLTIuMzhjMC0uMDAyLS4wMDMtLjAwNC0uMDA0LS4wMDUtMS41ODgtMS41MjQtMy42Mi0yLjIxNS01Ljk1NS0yLjIxNXptNC40MyA1LjY2bC4wMDMuMDA2di0uMDAzeiIgZmlsbD0iI2ZmZiIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48cGF0aCBkPSJNMjE1LjE4NCAyNTEuOTI5bC03Ljk4IDcuOTc5IDI4LjQ3NyAyOC40NzVjLjI4Ny0uNjQ5LjQ0OS0xLjM2Ni40NDktMi4xMjN2LTMxLjE2NWMtLjQ2OS42NzUtLjkzNCAxLjM0OS0xLjM4MiAyLjAwNS0uNzkyIDEuMjc1LTEuNjgyIDIuNjQtMi40NjUgMy45OS0yLjM0NyA0LjA2NS0zLjk4MiA4LjAzOC00LjU4NSAxMy43OTQtLjE2Mi40ODUtLjUyNy43OTgtLjkzLjc5OS0uMzYzLS4wMDEtLjY5Ny0uMjU1LS44NzktLjY2N3YtLjAxMmMtLjU5My01LjgyMi0yLjIzNy05LjgyLTQuNi0xMy45MTQtLjc4My0xLjM1LTEuNjczLTIuNzE1LTIuNDY2LTMuOTktMS4xMzctMS42NjYtMi4zMjctMy40LTMuNjM3LTUuMTY5bC0uMDAyLS4wMDN6IiBmaWxsPSIjYzNjM2MzIi8+PHBhdGggZD0iTTIxMi45ODMgMjQ4LjQ5NWwtMzYuOTUyIDM2Ljk1M3YuODEyYTUuMjI3IDUuMjI3IDAgMCAwIDUuMjM4IDUuMjM4aDEuMDE1bDM1LjY2Ni0zNS42NjZhMTM2LjI3NSAxMzYuMjc1IDAgMCAwLTIuNzY0LTMuOSAzNy41NzUgMzcuNTc1IDAgMCAwLS45ODktMS40NGMtLjI5OS0uNTAzLS42MTYtMS4wMDYtLjk1LTEuNTA4LS4wODMtLjE2Mi0uMTc2LS4zMjYtLjI2NC0uNDg5eiIgZmlsbD0iI2ZkZGM0ZiIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48cGF0aCBkPSJNMjExLjk5OCAyNjEuMDgzbC02LjE1MiA2LjE1MSAyNC4yNjQgMjQuMjY0aC43ODFhNS4yMjcgNS4yMjcgMCAwIDAgNS4yMzktNS4yMzh2LTEuMDQ1eiIgZmlsbD0iI2ZmZiIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48L2c+PC9zdmc+);
	}

	&[data-oembed-url*="facebook.com"] .ck-media__placeholder {
		background: hsl(220, 46%, 48%);

		& .ck-media__placeholder__icon {
			background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSIxMDI0cHgiIGhlaWdodD0iMTAyNHB4IiB2aWV3Qm94PSIwIDAgMTAyNCAxMDI0IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPiAgICAgICAgPHRpdGxlPkZpbGwgMTwvdGl0bGU+ICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPiAgICA8ZGVmcz48L2RlZnM+ICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPiAgICAgICAgPGcgaWQ9ImZMb2dvX1doaXRlIiBmaWxsPSIjRkZGRkZFIj4gICAgICAgICAgICA8cGF0aCBkPSJNOTY3LjQ4NCwwIEw1Ni41MTcsMCBDMjUuMzA0LDAgMCwyNS4zMDQgMCw1Ni41MTcgTDAsOTY3LjQ4MyBDMCw5OTguNjk0IDI1LjI5NywxMDI0IDU2LjUyMiwxMDI0IEw1NDcsMTAyNCBMNTQ3LDYyOCBMNDE0LDYyOCBMNDE0LDQ3MyBMNTQ3LDQ3MyBMNTQ3LDM1OS4wMjkgQzU0NywyMjYuNzY3IDYyNy43NzMsMTU0Ljc0NyA3NDUuNzU2LDE1NC43NDcgQzgwMi4yNjksMTU0Ljc0NyA4NTAuODQyLDE1OC45NTUgODY1LDE2MC44MzYgTDg2NSwyOTkgTDc4My4zODQsMjk5LjAzNyBDNzE5LjM5MSwyOTkuMDM3IDcwNywzMjkuNTI5IDcwNywzNzQuMjczIEw3MDcsNDczIEw4NjAuNDg3LDQ3MyBMODQwLjUwMSw2MjggTDcwNyw2MjggTDcwNywxMDI0IEw5NjcuNDg0LDEwMjQgQzk5OC42OTcsMTAyNCAxMDI0LDk5OC42OTcgMTAyNCw5NjcuNDg0IEwxMDI0LDU2LjUxNSBDMTAyNCwyNS4zMDMgOTk4LjY5NywwIDk2Ny40ODQsMCIgaWQ9IkZpbGwtMSI+PC9wYXRoPiAgICAgICAgPC9nPiAgICA8L2c+PC9zdmc+);
		}

		& .ck-media__placeholder__url__text {
			color: hsl(220, 100%, 90%);

			&:hover {
				color: hsl(0, 0%, 100%);
			}
		}
	}

	&[data-oembed-url*="instagram.com"] .ck-media__placeholder {
		background: linear-gradient(-135deg,hsl(246, 100%, 39%),hsl(302, 100%, 36%),hsl(0, 100%, 48%));

		& .ck-media__placeholder__icon {
			background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSI1MDRweCIgaGVpZ2h0PSI1MDRweCIgdmlld0JveD0iMCAwIDUwNCA1MDQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+ICAgICAgICA8dGl0bGU+Z2x5cGgtbG9nb19NYXkyMDE2PC90aXRsZT4gICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+ICAgIDxkZWZzPiAgICAgICAgPHBvbHlnb24gaWQ9InBhdGgtMSIgcG9pbnRzPSIwIDAuMTU5IDUwMy44NDEgMC4xNTkgNTAzLjg0MSA1MDMuOTQgMCA1MDMuOTQiPjwvcG9seWdvbj4gICAgPC9kZWZzPiAgICA8ZyBpZD0iZ2x5cGgtbG9nb19NYXkyMDE2IiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4gICAgICAgIDxnIGlkPSJHcm91cC0zIj4gICAgICAgICAgICA8bWFzayBpZD0ibWFzay0yIiBmaWxsPSJ3aGl0ZSI+ICAgICAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj0iI3BhdGgtMSI+PC91c2U+ICAgICAgICAgICAgPC9tYXNrPiAgICAgICAgICAgIDxnIGlkPSJDbGlwLTIiPjwvZz4gICAgICAgICAgICA8cGF0aCBkPSJNMjUxLjkyMSwwLjE1OSBDMTgzLjUwMywwLjE1OSAxNzQuOTI0LDAuNDQ5IDE0OC4wNTQsMS42NzUgQzEyMS4yNCwyLjg5OCAxMDIuOTI3LDcuMTU3IDg2LjkwMywxMy4zODUgQzcwLjMzNywxOS44MjIgNTYuMjg4LDI4LjQzNiA0Mi4yODIsNDIuNDQxIEMyOC4yNzcsNTYuNDQ3IDE5LjY2Myw3MC40OTYgMTMuMjI2LDg3LjA2MiBDNi45OTgsMTAzLjA4NiAyLjczOSwxMjEuMzk5IDEuNTE2LDE0OC4yMTMgQzAuMjksMTc1LjA4MyAwLDE4My42NjIgMCwyNTIuMDggQzAsMzIwLjQ5NyAwLjI5LDMyOS4wNzYgMS41MTYsMzU1Ljk0NiBDMi43MzksMzgyLjc2IDYuOTk4LDQwMS4wNzMgMTMuMjI2LDQxNy4wOTcgQzE5LjY2Myw0MzMuNjYzIDI4LjI3Nyw0NDcuNzEyIDQyLjI4Miw0NjEuNzE4IEM1Ni4yODgsNDc1LjcyMyA3MC4zMzcsNDg0LjMzNyA4Ni45MDMsNDkwLjc3NSBDMTAyLjkyNyw0OTcuMDAyIDEyMS4yNCw1MDEuMjYxIDE0OC4wNTQsNTAyLjQ4NCBDMTc0LjkyNCw1MDMuNzEgMTgzLjUwMyw1MDQgMjUxLjkyMSw1MDQgQzMyMC4zMzgsNTA0IDMyOC45MTcsNTAzLjcxIDM1NS43ODcsNTAyLjQ4NCBDMzgyLjYwMSw1MDEuMjYxIDQwMC45MTQsNDk3LjAwMiA0MTYuOTM4LDQ5MC43NzUgQzQzMy41MDQsNDg0LjMzNyA0NDcuNTUzLDQ3NS43MjMgNDYxLjU1OSw0NjEuNzE4IEM0NzUuNTY0LDQ0Ny43MTIgNDg0LjE3OCw0MzMuNjYzIDQ5MC42MTYsNDE3LjA5NyBDNDk2Ljg0Myw0MDEuMDczIDUwMS4xMDIsMzgyLjc2IDUwMi4zMjUsMzU1Ljk0NiBDNTAzLjU1MSwzMjkuMDc2IDUwMy44NDEsMzIwLjQ5NyA1MDMuODQxLDI1Mi4wOCBDNTAzLjg0MSwxODMuNjYyIDUwMy41NTEsMTc1LjA4MyA1MDIuMzI1LDE0OC4yMTMgQzUwMS4xMDIsMTIxLjM5OSA0OTYuODQzLDEwMy4wODYgNDkwLjYxNiw4Ny4wNjIgQzQ4NC4xNzgsNzAuNDk2IDQ3NS41NjQsNTYuNDQ3IDQ2MS41NTksNDIuNDQxIEM0NDcuNTUzLDI4LjQzNiA0MzMuNTA0LDE5LjgyMiA0MTYuOTM4LDEzLjM4NSBDNDAwLjkxNCw3LjE1NyAzODIuNjAxLDIuODk4IDM1NS43ODcsMS42NzUgQzMyOC45MTcsMC40NDkgMzIwLjMzOCwwLjE1OSAyNTEuOTIxLDAuMTU5IFogTTI1MS45MjEsNDUuNTUgQzMxOS4xODYsNDUuNTUgMzI3LjE1NCw0NS44MDcgMzUzLjcxOCw0Ny4wMTkgQzM3OC4yOCw0OC4xMzkgMzkxLjYxOSw1Mi4yNDMgNDAwLjQ5Niw1NS42OTMgQzQxMi4yNTUsNjAuMjYzIDQyMC42NDcsNjUuNzIyIDQyOS40NjIsNzQuNTM4IEM0MzguMjc4LDgzLjM1MyA0NDMuNzM3LDkxLjc0NSA0NDguMzA3LDEwMy41MDQgQzQ1MS43NTcsMTEyLjM4MSA0NTUuODYxLDEyNS43MiA0NTYuOTgxLDE1MC4yODIgQzQ1OC4xOTMsMTc2Ljg0NiA0NTguNDUsMTg0LjgxNCA0NTguNDUsMjUyLjA4IEM0NTguNDUsMzE5LjM0NSA0NTguMTkzLDMyNy4zMTMgNDU2Ljk4MSwzNTMuODc3IEM0NTUuODYxLDM3OC40MzkgNDUxLjc1NywzOTEuNzc4IDQ0OC4zMDcsNDAwLjY1NSBDNDQzLjczNyw0MTIuNDE0IDQzOC4yNzgsNDIwLjgwNiA0MjkuNDYyLDQyOS42MjEgQzQyMC42NDcsNDM4LjQzNyA0MTIuMjU1LDQ0My44OTYgNDAwLjQ5Niw0NDguNDY2IEMzOTEuNjE5LDQ1MS45MTYgMzc4LjI4LDQ1Ni4wMiAzNTMuNzE4LDQ1Ny4xNCBDMzI3LjE1OCw0NTguMzUyIDMxOS4xOTEsNDU4LjYwOSAyNTEuOTIxLDQ1OC42MDkgQzE4NC42NSw0NTguNjA5IDE3Ni42ODQsNDU4LjM1MiAxNTAuMTIzLDQ1Ny4xNCBDMTI1LjU2MSw0NTYuMDIgMTEyLjIyMiw0NTEuOTE2IDEwMy4zNDUsNDQ4LjQ2NiBDOTEuNTg2LDQ0My44OTYgODMuMTk0LDQzOC40MzcgNzQuMzc5LDQyOS42MjEgQzY1LjU2NCw0MjAuODA2IDYwLjEwNCw0MTIuNDE0IDU1LjUzNCw0MDAuNjU1IEM1Mi4wODQsMzkxLjc3OCA0Ny45OCwzNzguNDM5IDQ2Ljg2LDM1My44NzcgQzQ1LjY0OCwzMjcuMzEzIDQ1LjM5MSwzMTkuMzQ1IDQ1LjM5MSwyNTIuMDggQzQ1LjM5MSwxODQuODE0IDQ1LjY0OCwxNzYuODQ2IDQ2Ljg2LDE1MC4yODIgQzQ3Ljk4LDEyNS43MiA1Mi4wODQsMTEyLjM4MSA1NS41MzQsMTAzLjUwNCBDNjAuMTA0LDkxLjc0NSA2NS41NjMsODMuMzUzIDc0LjM3OSw3NC41MzggQzgzLjE5NCw2NS43MjIgOTEuNTg2LDYwLjI2MyAxMDMuMzQ1LDU1LjY5MyBDMTEyLjIyMiw1Mi4yNDMgMTI1LjU2MSw0OC4xMzkgMTUwLjEyMyw0Ny4wMTkgQzE3Ni42ODcsNDUuODA3IDE4NC42NTUsNDUuNTUgMjUxLjkyMSw0NS41NSBaIiBpZD0iRmlsbC0xIiBmaWxsPSIjRkZGRkZGIiBtYXNrPSJ1cmwoI21hc2stMikiPjwvcGF0aD4gICAgICAgIDwvZz4gICAgICAgIDxwYXRoIGQ9Ik0yNTEuOTIxLDMzNi4wNTMgQzIwNS41NDMsMzM2LjA1MyAxNjcuOTQ3LDI5OC40NTcgMTY3Ljk0NywyNTIuMDggQzE2Ny45NDcsMjA1LjcwMiAyMDUuNTQzLDE2OC4xMDYgMjUxLjkyMSwxNjguMTA2IEMyOTguMjk4LDE2OC4xMDYgMzM1Ljg5NCwyMDUuNzAyIDMzNS44OTQsMjUyLjA4IEMzMzUuODk0LDI5OC40NTcgMjk4LjI5OCwzMzYuMDUzIDI1MS45MjEsMzM2LjA1MyBaIE0yNTEuOTIxLDEyMi43MTUgQzE4MC40NzQsMTIyLjcxNSAxMjIuNTU2LDE4MC42MzMgMTIyLjU1NiwyNTIuMDggQzEyMi41NTYsMzIzLjUyNiAxODAuNDc0LDM4MS40NDQgMjUxLjkyMSwzODEuNDQ0IEMzMjMuMzY3LDM4MS40NDQgMzgxLjI4NSwzMjMuNTI2IDM4MS4yODUsMjUyLjA4IEMzODEuMjg1LDE4MC42MzMgMzIzLjM2NywxMjIuNzE1IDI1MS45MjEsMTIyLjcxNSBaIiBpZD0iRmlsbC00IiBmaWxsPSIjRkZGRkZGIj48L3BhdGg+ICAgICAgICA8cGF0aCBkPSJNNDE2LjYyNywxMTcuNjA0IEM0MTYuNjI3LDEzNC4zIDQwMy4wOTIsMTQ3LjgzNCAzODYuMzk2LDE0Ny44MzQgQzM2OS43MDEsMTQ3LjgzNCAzNTYuMTY2LDEzNC4zIDM1Ni4xNjYsMTE3LjYwNCBDMzU2LjE2NiwxMDAuOTA4IDM2OS43MDEsODcuMzczIDM4Ni4zOTYsODcuMzczIEM0MDMuMDkyLDg3LjM3MyA0MTYuNjI3LDEwMC45MDggNDE2LjYyNywxMTcuNjA0IiBpZD0iRmlsbC01IiBmaWxsPSIjRkZGRkZGIj48L3BhdGg+ICAgIDwvZz48L3N2Zz4=);
		}

		/* stylelint-disable-next-line no-descending-specificity */
		& .ck-media__placeholder__url__text {
			color: hsl(302, 100%, 94%);

			&:hover {
				color: hsl(0, 0%, 100%);
			}
		}
	}

	&[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder {
		/* Use gradient to contrast with focused widget (ckeditor/ckeditor5-media-embed#22). */
		background: linear-gradient( to right, hsl(201, 85%, 70%), hsl(201, 85%, 35%) );

		& .ck-media__placeholder__icon {
			background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48c3ZnIHZlcnNpb249IjEuMSIgaWQ9IldoaXRlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQwMCA0MDAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQwMCA0MDA7IiB4bWw6c3BhY2U9InByZXNlcnZlIj48c3R5bGUgdHlwZT0idGV4dC9jc3MiPi5zdDB7ZmlsbDojRkZGRkZGO308L3N0eWxlPjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MDAsMjAwYzAsMTEwLjUtODkuNSwyMDAtMjAwLDIwMFMwLDMxMC41LDAsMjAwUzg5LjUsMCwyMDAsMFM0MDAsODkuNSw0MDAsMjAweiBNMTYzLjQsMzA1LjVjODguNywwLDEzNy4yLTczLjUsMTM3LjItMTM3LjJjMC0yLjEsMC00LjItMC4xLTYuMmM5LjQtNi44LDE3LjYtMTUuMywyNC4xLTI1Yy04LjYsMy44LTE3LjksNi40LTI3LjcsNy42YzEwLTYsMTcuNi0xNS40LDIxLjItMjYuN2MtOS4zLDUuNS0xOS42LDkuNS0zMC42LDExLjdjLTguOC05LjQtMjEuMy0xNS4yLTM1LjItMTUuMmMtMjYuNiwwLTQ4LjIsMjEuNi00OC4yLDQ4LjJjMCwzLjgsMC40LDcuNSwxLjMsMTFjLTQwLjEtMi03NS42LTIxLjItOTkuNC01MC40Yy00LjEsNy4xLTYuNSwxNS40LTYuNSwyNC4yYzAsMTYuNyw4LjUsMzEuNSwyMS41LDQwLjFjLTcuOS0wLjItMTUuMy0yLjQtMjEuOC02YzAsMC4yLDAsMC40LDAsMC42YzAsMjMuNCwxNi42LDQyLjgsMzguNyw0Ny4zYy00LDEuMS04LjMsMS43LTEyLjcsMS43Yy0zLjEsMC02LjEtMC4zLTkuMS0wLjljNi4xLDE5LjIsMjMuOSwzMy4xLDQ1LDMzLjVjLTE2LjUsMTIuOS0zNy4zLDIwLjYtNTkuOSwyMC42Yy0zLjksMC03LjctMC4yLTExLjUtMC43QzExMC44LDI5Ny41LDEzNi4yLDMwNS41LDE2My40LDMwNS41Ii8+PC9zdmc+);
		}

		& .ck-media__placeholder__url__text {
			color: hsl(201, 100%, 86%);

			&:hover {
				color: hsl(0, 0%, 100%);
			}
		}
	}
}
`],sourceRoot:""}]);const P=x},5651:(L,B,_)=>{_.d(B,{A:()=>P});var q=_(9372),U=_.n(q),H=_(935),x=_.n(H)()(U());x.push([L.id,".ck.ck-media-form{align-items:flex-start;display:flex;flex-direction:row;flex-wrap:nowrap}.ck.ck-media-form .ck-labeled-field-view{display:inline-block}.ck.ck-media-form .ck-label{display:none}@media screen and (max-width:600px){.ck.ck-media-form{flex-wrap:wrap}.ck.ck-media-form .ck-labeled-field-view{flex-basis:100%}.ck.ck-media-form .ck-button{flex-basis:50%}}","",{version:3,sources:["webpack://./../ckeditor5-media-embed/theme/mediaform.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css"],names:[],mappings:"AAOA,kBAEC,sBAAuB,CADvB,YAAa,CAEb,kBAAmB,CACnB,gBAqBD,CAnBC,yCACC,oBACD,CAEA,4BACC,YACD,CCbA,oCDCD,kBAeE,cAUF,CARE,yCACC,eACD,CAEA,6BACC,cACD,CCtBD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-media-form {
	display: flex;
	align-items: flex-start;
	flex-direction: row;
	flex-wrap: nowrap;

	& .ck-labeled-field-view {
		display: inline-block;
	}

	& .ck-label {
		display: none;
	}

	@mixin ck-media-phone {
		flex-wrap: wrap;

		& .ck-labeled-field-view {
			flex-basis: 100%;
		}

		& .ck-button {
			flex-basis: 50%;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`],sourceRoot:""}]);const P=x},5506:(L,B,_)=>{_.d(B,{A:()=>P});var q=_(9372),U=_.n(q),H=_(935),x=_.n(H)()(U());x.push([L.id,".ck.ck-input-color{display:flex;flex-direction:row-reverse;width:100%}.ck.ck-input-color>input.ck.ck-input-text{flex-grow:1;min-width:auto}.ck.ck-input-color>div.ck.ck-dropdown{min-width:auto}.ck.ck-input-color>div.ck.ck-dropdown>.ck-input-color__button .ck-dropdown__arrow{display:none}.ck.ck-input-color .ck.ck-input-color__button{display:flex}.ck.ck-input-color .ck.ck-input-color__button .ck.ck-input-color__button__preview{overflow:hidden;position:relative}.ck.ck-input-color .ck.ck-input-color__button .ck.ck-input-color__button__preview>.ck.ck-input-color__button__preview__no-color-indicator{display:block;position:absolute}[dir=ltr] .ck.ck-input-color>.ck.ck-input-text{border-bottom-right-radius:0;border-top-right-radius:0}[dir=rtl] .ck.ck-input-color>.ck.ck-input-text{border-bottom-left-radius:0;border-top-left-radius:0}.ck.ck-input-color>.ck.ck-input-text:focus{z-index:0}.ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button{padding:0}[dir=ltr] .ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button{border-bottom-left-radius:0;border-top-left-radius:0}[dir=ltr] .ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button:not(:focus){border-left:1px solid transparent}[dir=rtl] .ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button{border-bottom-right-radius:0;border-top-right-radius:0}[dir=rtl] .ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button:not(:focus){border-right:1px solid transparent}.ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button.ck-disabled{background:var(--ck-color-input-disabled-background)}.ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button>.ck.ck-input-color__button__preview{border-radius:0}.ck-rounded-corners .ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button>.ck.ck-input-color__button__preview,.ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button>.ck.ck-input-color__button__preview.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button>.ck.ck-input-color__button__preview{border:1px solid var(--ck-color-input-border);height:20px;width:20px}.ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button>.ck.ck-input-color__button__preview>.ck.ck-input-color__button__preview__no-color-indicator{background:red;border-radius:2px;height:150%;left:50%;top:-30%;transform:rotate(45deg);transform-origin:50%;width:8%}.ck.ck-input-color .ck.ck-input-color__remove-color{border-bottom-left-radius:0;border-bottom-right-radius:0;padding:calc(var(--ck-spacing-standard)/2) var(--ck-spacing-standard);width:100%}.ck.ck-input-color .ck.ck-input-color__remove-color:not(:focus){border-bottom:1px solid var(--ck-color-input-border)}[dir=ltr] .ck.ck-input-color .ck.ck-input-color__remove-color{border-top-right-radius:0}[dir=rtl] .ck.ck-input-color .ck.ck-input-color__remove-color{border-top-left-radius:0}.ck.ck-input-color .ck.ck-input-color__remove-color .ck.ck-icon{margin-right:var(--ck-spacing-standard)}[dir=rtl] .ck.ck-input-color .ck.ck-input-color__remove-color .ck.ck-icon{margin-left:var(--ck-spacing-standard);margin-right:0}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/colorinput.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/colorinput.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAKA,mBAEC,YAAa,CACb,0BAA2B,CAF3B,UAgCD,CA5BC,0CAEC,WAAY,CADZ,cAED,CAEA,sCACC,cAMD,CAHC,kFACC,YACD,CAGD,8CAEC,YAWD,CATC,kFAEC,eAAgB,CADhB,iBAOD,CAJC,0IAEC,aAAc,CADd,iBAED,CC1BF,+CAGE,4BAA6B,CAD7B,yBAcF,CAhBA,+CAQE,2BAA4B,CAD5B,wBASF,CAHC,2CACC,SACD,CAIA,wEACC,SA0CD,CA3CA,kFAKE,2BAA4B,CAD5B,wBAuCF,CApCE,8FACC,iCACD,CATF,kFAcE,4BAA6B,CAD7B,yBA8BF,CA3BE,8FACC,kCACD,CAGD,oFACC,oDACD,CAEA,4GC1CF,eD2DE,CAjBA,+PCtCD,qCDuDC,CAjBA,4GAKC,6CAA8C,CAD9C,WAAY,CADZ,UAcD,CAVC,oKAKC,cAA6B,CAC7B,iBAAkB,CAHlB,WAAY,CADZ,QAAS,CADT,QAAS,CAMT,uBAAwB,CACxB,oBAAqB,CAJrB,QAKD,CAKH,oDAIC,2BAA4B,CAC5B,4BAA6B,CAH7B,qEAAwE,CADxE,UA0BD,CApBC,gEACC,oDACD,CATD,8DAYE,yBAeF,CA3BA,8DAgBE,wBAWF,CARC,gEACC,uCAMD,CAPA,0EAKE,sCAAuC,CADvC,cAGF",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-input-color {
	width: 100%;
	display: flex;
	flex-direction: row-reverse;

	& > input.ck.ck-input-text {
		min-width: auto;
		flex-grow: 1;
	}

	& > div.ck.ck-dropdown {
		min-width: auto;

		/* This dropdown has no arrow but a color preview instead. */
		& > .ck-input-color__button .ck-dropdown__arrow {
			display: none;
		}
	}

	& .ck.ck-input-color__button {
		/* Resolving issue with misaligned buttons on Safari (see #10589) */
		display: flex;

		& .ck.ck-input-color__button__preview {
			position: relative;
			overflow: hidden;

			& > .ck.ck-input-color__button__preview__no-color-indicator {
				position: absolute;
				display: block;
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";
@import "../mixins/_rounded.css";

.ck.ck-input-color {
	& > .ck.ck-input-text {
		@mixin ck-dir ltr {
			border-top-right-radius: 0;
			border-bottom-right-radius: 0;
		}

		@mixin ck-dir rtl {
			border-top-left-radius: 0;
			border-bottom-left-radius: 0;
		}

		/* Make sure the focused input is always on top of the dropdown button so its
		   outline and border are never cropped (also when the input is read-only). */
		&:focus {
			z-index: 0;
		}
	}

	& > .ck.ck-dropdown {
		& > .ck.ck-button.ck-input-color__button {
			padding: 0;

			@mixin ck-dir ltr {
				border-top-left-radius: 0;
				border-bottom-left-radius: 0;

				&:not(:focus) {
					border-left: 1px solid transparent;
				}
			}

			@mixin ck-dir rtl {
				border-top-right-radius: 0;
				border-bottom-right-radius: 0;

				&:not(:focus) {
					border-right: 1px solid transparent;
				}
			}

			&.ck-disabled {
				background: var(--ck-color-input-disabled-background);
			}

			& > .ck.ck-input-color__button__preview {
				@mixin ck-rounded-corners;

				width: 20px;
				height: 20px;
				border: 1px solid var(--ck-color-input-border);

				& > .ck.ck-input-color__button__preview__no-color-indicator {
					top: -30%;
					left: 50%;
					height: 150%;
					width: 8%;
					background: hsl(0, 100%, 50%);
					border-radius: 2px;
					transform: rotate(45deg);
					transform-origin: 50%;
				}
			}
		}
	}

	& .ck.ck-input-color__remove-color {
		width: 100%;
		padding: calc(var(--ck-spacing-standard) / 2) var(--ck-spacing-standard);

		border-bottom-left-radius: 0;
		border-bottom-right-radius: 0;

		&:not(:focus) {
			border-bottom: 1px solid var(--ck-color-input-border);
		}

		@mixin ck-dir ltr {
			border-top-right-radius: 0;
		}

		@mixin ck-dir rtl {
			border-top-left-radius: 0;
		}

		& .ck.ck-icon {
			margin-right: var(--ck-spacing-standard);

			@mixin ck-dir rtl {
				margin-right: 0;
				margin-left: var(--ck-spacing-standard);
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const P=x},4043:(L,B,_)=>{_.d(B,{A:()=>P});var q=_(9372),U=_.n(q),H=_(935),x=_.n(H)()(U());x.push([L.id,".ck.ck-form{padding:0 0 var(--ck-spacing-large)}.ck.ck-form:focus{outline:none}.ck.ck-form .ck.ck-input-text{min-width:100%;width:0}.ck.ck-form .ck.ck-dropdown{min-width:100%}.ck.ck-form .ck.ck-dropdown .ck-dropdown__button:not(:focus){border:1px solid var(--ck-color-base-border)}.ck.ck-form .ck.ck-dropdown .ck-dropdown__button .ck-button__label{width:100%}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/form.css"],names:[],mappings:"AAKA,YACC,mCAyBD,CAvBC,kBAEC,YACD,CAEA,8BACC,cAAe,CACf,OACD,CAEA,4BACC,cAWD,CARE,6DACC,4CACD,CAEA,mEACC,UACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-form {
	padding: 0 0 var(--ck-spacing-large);

	&:focus {
		/* See: https://github.com/ckeditor/ckeditor5/issues/4773 */
		outline: none;
	}

	& .ck.ck-input-text {
		min-width: 100%;
		width: 0;
	}

	& .ck.ck-dropdown {
		min-width: 100%;

		& .ck-dropdown__button {
			&:not(:focus) {
				border: 1px solid var(--ck-color-base-border);
			}

			& .ck-button__label {
				width: 100%;
			}
		}
	}
}
`],sourceRoot:""}]);const P=x},2655:(L,B,_)=>{_.d(B,{A:()=>P});var q=_(9372),U=_.n(q),H=_(935),x=_.n(H)()(U());x.push([L.id,".ck.ck-form__row{display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-between}.ck.ck-form__row>:not(.ck-label){flex-grow:1}.ck.ck-form__row.ck-table-form__action-row .ck-button-cancel,.ck.ck-form__row.ck-table-form__action-row .ck-button-save{justify-content:center}.ck.ck-form__row{padding:var(--ck-spacing-standard) var(--ck-spacing-large) 0}[dir=ltr] .ck.ck-form__row>:not(.ck-label)+*{margin-left:var(--ck-spacing-large)}[dir=rtl] .ck.ck-form__row>:not(.ck-label)+*{margin-right:var(--ck-spacing-large)}.ck.ck-form__row>.ck-label{min-width:100%;width:100%}.ck.ck-form__row.ck-table-form__action-row{margin-top:var(--ck-spacing-large)}.ck.ck-form__row.ck-table-form__action-row .ck-button .ck-button__label{color:var(--ck-color-text)}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/formrow.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/formrow.css"],names:[],mappings:"AAKA,iBACC,YAAa,CACb,kBAAmB,CACnB,gBAAiB,CACjB,6BAaD,CAVC,iCACC,WACD,CAGC,wHAEC,sBACD,CCbF,iBACC,4DA2BD,CAvBE,6CAEE,mCAMF,CARA,6CAME,oCAEF,CAGD,2BAEC,cAAe,CADf,UAED,CAEA,2CACC,kCAKD,CAHC,wEACC,0BACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-form__row {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content: space-between;

	/* Ignore labels that work as fieldset legends */
	& > *:not(.ck-label) {
		flex-grow: 1;
	}

	&.ck-table-form__action-row {
		& .ck-button-save,
		& .ck-button-cancel {
			justify-content: center;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck.ck-form__row {
	padding: var(--ck-spacing-standard) var(--ck-spacing-large) 0;

	/* Ignore labels that work as fieldset legends */
	& > *:not(.ck-label) {
		& + * {
			@mixin ck-dir ltr {
				margin-left: var(--ck-spacing-large);
			}

			@mixin ck-dir rtl {
				margin-right: var(--ck-spacing-large);
			}
		}
	}

	& > .ck-label {
		width: 100%;
		min-width: 100%;
	}

	&.ck-table-form__action-row {
		margin-top: var(--ck-spacing-large);

		& .ck-button .ck-button__label {
			color: var(--ck-color-text);
		}
	}
}
`],sourceRoot:""}]);const P=x},5032:(L,B,_)=>{_.d(B,{A:()=>P});var q=_(9372),U=_.n(q),H=_(935),x=_.n(H)()(U());x.push([L.id,".ck .ck-insert-table-dropdown__grid{display:flex;flex-direction:row;flex-wrap:wrap}:root{--ck-insert-table-dropdown-padding:10px;--ck-insert-table-dropdown-box-height:11px;--ck-insert-table-dropdown-box-width:12px;--ck-insert-table-dropdown-box-margin:1px}.ck .ck-insert-table-dropdown__grid{padding:var(--ck-insert-table-dropdown-padding) var(--ck-insert-table-dropdown-padding) 0;width:calc(var(--ck-insert-table-dropdown-box-width)*10 + var(--ck-insert-table-dropdown-box-margin)*20 + var(--ck-insert-table-dropdown-padding)*2)}.ck .ck-insert-table-dropdown__label,.ck[dir=rtl] .ck-insert-table-dropdown__label{text-align:center}.ck .ck-insert-table-dropdown-grid-box{border:1px solid var(--ck-color-base-border);border-radius:1px;margin:var(--ck-insert-table-dropdown-box-margin);min-height:var(--ck-insert-table-dropdown-box-height);min-width:var(--ck-insert-table-dropdown-box-width);outline:none;transition:none}@media (prefers-reduced-motion:reduce){.ck .ck-insert-table-dropdown-grid-box{transition:none}}.ck .ck-insert-table-dropdown-grid-box:focus{box-shadow:none}.ck .ck-insert-table-dropdown-grid-box.ck-on{background:var(--ck-color-focus-outer-shadow);border-color:var(--ck-color-focus-border)}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/inserttable.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/inserttable.css"],names:[],mappings:"AAKA,oCACC,YAAa,CACb,kBAAmB,CACnB,cACD,CCJA,MACC,uCAAwC,CACxC,0CAA2C,CAC3C,yCAA0C,CAC1C,yCACD,CAEA,oCAGC,yFAA0F,CAD1F,oJAED,CAEA,mFAEC,iBACD,CAEA,uCAIC,4CAA6C,CAC7C,iBAAkB,CAFlB,iDAAkD,CADlD,qDAAsD,CADtD,mDAAoD,CAKpD,YAAa,CACb,eAcD,CAZC,uCATD,uCAUE,eAWF,CAVC,CAEA,6CACC,eACD,CAEA,6CAEC,6CAA8C,CAD9C,yCAED",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-insert-table-dropdown__grid {
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-insert-table-dropdown-padding: 10px;
	--ck-insert-table-dropdown-box-height: 11px;
	--ck-insert-table-dropdown-box-width: 12px;
	--ck-insert-table-dropdown-box-margin: 1px;
}

.ck .ck-insert-table-dropdown__grid {
	/* The width of a container should match 10 items in a row so there will be a 10x10 grid. */
	width: calc(var(--ck-insert-table-dropdown-box-width) * 10 + var(--ck-insert-table-dropdown-box-margin) * 20 + var(--ck-insert-table-dropdown-padding) * 2);
	padding: var(--ck-insert-table-dropdown-padding) var(--ck-insert-table-dropdown-padding) 0;
}

.ck .ck-insert-table-dropdown__label,
.ck[dir=rtl] .ck-insert-table-dropdown__label {
	text-align: center;
}

.ck .ck-insert-table-dropdown-grid-box {
	min-width: var(--ck-insert-table-dropdown-box-width);
	min-height: var(--ck-insert-table-dropdown-box-height);
	margin: var(--ck-insert-table-dropdown-box-margin);
	border: 1px solid var(--ck-color-base-border);
	border-radius: 1px;
	outline: none;
	transition: none;

	@media (prefers-reduced-motion: reduce) {
		transition: none;
	}

	&:focus {
		box-shadow: none;
	}

	&.ck-on {
		border-color: var(--ck-color-focus-border);
		background: var(--ck-color-focus-outer-shadow);
	}
}

`],sourceRoot:""}]);const P=x},2329:(L,B,_)=>{_.d(B,{A:()=>P});var q=_(9372),U=_.n(q),H=_(935),x=_.n(H)()(U());x.push([L.id,".ck-content .table{display:table;margin:.9em auto}.ck-content .table table{border:1px double #b3b3b3;border-collapse:collapse;border-spacing:0;height:100%;width:100%}.ck-content .table table td,.ck-content .table table th{border:1px solid #bfbfbf;min-width:2em;padding:.4em}.ck-content .table table th{background:rgba(0,0,0,.05);font-weight:700}.ck-content[dir=rtl] .table th{text-align:right}.ck-content[dir=ltr] .table th{text-align:left}.ck-editor__editable .ck-table-bogus-paragraph{display:inline-block;width:100%}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/table.css"],names:[],mappings:"AAKA,mBAKC,aAAc,CADd,gBAiCD,CA9BC,yBAYC,yBAAkC,CAVlC,wBAAyB,CACzB,gBAAiB,CAKjB,WAAY,CADZ,UAsBD,CAfC,wDAQC,wBAAiC,CANjC,aAAc,CACd,YAMD,CAEA,4BAEC,0BAA+B,CAD/B,eAED,CAMF,+BACC,gBACD,CAEA,+BACC,eACD,CAEA,+CAKC,oBAAqB,CAMrB,UACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content .table {
	/* Give the table widget some air and center it horizontally */
	/* The first value should be equal to --ck-spacing-large variable if used in the editor context
	to avoid the content jumping (See https://github.com/ckeditor/ckeditor5/issues/9825). */
	margin: 0.9em auto;
	display: table;

	& table {
		/* The table cells should have slight borders */
		border-collapse: collapse;
		border-spacing: 0;

		/* Table width and height are set on the parent <figure>. Make sure the table inside stretches
		to the full dimensions of the container (https://github.com/ckeditor/ckeditor5/issues/6186). */
		width: 100%;
		height: 100%;

		/* The outer border of the table should be slightly darker than the inner lines.
		Also see https://github.com/ckeditor/ckeditor5-table/issues/50. */
		border: 1px double hsl(0, 0%, 70%);

		& td,
		& th {
			min-width: 2em;
			padding: .4em;

			/* The border is inherited from .ck-editor__nested-editable styles, so theoretically it's not necessary here.
			However, the border is a content style, so it should use .ck-content (so it works outside the editor).
			Hence, the duplication. See https://github.com/ckeditor/ckeditor5/issues/6314 */
			border: 1px solid hsl(0, 0%, 75%);
		}

		& th {
			font-weight: bold;
			background: hsla(0, 0%, 0%, 5%);
		}
	}
}

/* Text alignment of the table header should match the editor settings and override the native browser styling,
when content is available outside the editor. See https://github.com/ckeditor/ckeditor5/issues/6638 */
.ck-content[dir="rtl"] .table th {
	text-align: right;
}

.ck-content[dir="ltr"] .table th {
	text-align: left;
}

.ck-editor__editable .ck-table-bogus-paragraph {
	/*
	 * Use display:inline-block to force Chrome/Safari to limit text mutations to this element.
	 * See https://github.com/ckeditor/ckeditor5/issues/6062.
	 */
	display: inline-block;

	/*
	 * Inline HTML elements nested in the span should always be dimensioned in relation to the whole cell width.
	 * See https://github.com/ckeditor/ckeditor5/issues/9117.
	 */
	width: 100%;
}
`],sourceRoot:""}]);const P=x},4143:(L,B,_)=>{_.d(B,{A:()=>P});var q=_(9372),U=_.n(q),H=_(935),x=_.n(H)()(U());x.push([L.id,":root{--ck-color-selector-caption-background:#f7f7f7;--ck-color-selector-caption-text:#333;--ck-color-selector-caption-highlighted-background:#fd0}.ck-content .table>figcaption{background-color:var(--ck-color-selector-caption-background);caption-side:top;color:var(--ck-color-selector-caption-text);display:table-caption;font-size:.75em;outline-offset:-1px;padding:.6em;text-align:center;word-break:break-word}@media (forced-colors:active){.ck-content .table>figcaption{background-color:unset;color:unset}}@media (forced-colors:none){.ck.ck-editor__editable .table>figcaption.table__caption_highlighted{animation:ck-table-caption-highlight .6s ease-out}}.ck.ck-editor__editable .table>figcaption.ck-placeholder:before{overflow:hidden;padding-left:inherit;padding-right:inherit;text-overflow:ellipsis;white-space:nowrap}@keyframes ck-table-caption-highlight{0%{background-color:var(--ck-color-selector-caption-highlighted-background)}to{background-color:var(--ck-color-selector-caption-background)}}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/tablecaption.css","webpack://./../ckeditor5-ui/theme/mixins/_mediacolors.css"],names:[],mappings:"AAOA,MACC,8CAAuD,CACvD,qCAAiD,CACjD,uDACD,CAGA,8BAMC,4DAA6D,CAJ7D,gBAAiB,CAGjB,2CAA4C,CAJ5C,qBAAsB,CAOtB,eAAgB,CAChB,mBAAoB,CAFpB,YAAa,CAHb,iBAAkB,CADlB,qBAaD,CCxBC,8BACC,8BDoBA,sBAAuB,CACvB,WCnBA,CACD,CAIA,4BDqBC,qEACC,iDACD,CCnBD,CDsBA,gEASC,eAAgB,CARhB,oBAAqB,CACrB,qBAAsB,CAQtB,sBAAuB,CAFvB,kBAGD,CAGD,sCACC,GACC,wEACD,CAEA,GACC,4DACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_mediacolors.css";

:root {
	--ck-color-selector-caption-background: hsl(0, 0%, 97%);
	--ck-color-selector-caption-text: hsl(0, 0%, 20%);
	--ck-color-selector-caption-highlighted-background: hsl(52deg 100% 50%);
}

/* Content styles */
.ck-content .table > figcaption {
	display: table-caption;
	caption-side: top;
	word-break: break-word;
	text-align: center;
	color: var(--ck-color-selector-caption-text);
	background-color: var(--ck-color-selector-caption-background);
	padding: .6em;
	font-size: .75em;
	outline-offset: -1px;

	/* Improve placeholder rendering in high-constrast mode (https://github.com/ckeditor/ckeditor5/issues/14907). */
	@mixin ck-media-forced-colors {
		background-color: unset;
		color: unset;
	}
}

/* Editing styles */
.ck.ck-editor__editable .table > figcaption {
	@mixin ck-media-default-colors {
		&.table__caption_highlighted {
			animation: ck-table-caption-highlight .6s ease-out;
		}
	}

	&.ck-placeholder::before {
		padding-left: inherit;
		padding-right: inherit;

		/*
		 * Make sure the table caption placeholder doesn't overflow the placeholder area.
		 * See https://github.com/ckeditor/ckeditor5/issues/9162.
		 */
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
}

@keyframes ck-table-caption-highlight {
	0% {
		background-color: var(--ck-color-selector-caption-highlighted-background);
	}

	100% {
		background-color: var(--ck-color-selector-caption-background);
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-forced-colors {
	@media (forced-colors: active) {
		& {
			@mixin-content;
		}
	}
}

@define-mixin ck-media-default-colors {
	@media (forced-colors: none) {
		& {
			@mixin-content;
		}
	}
}
`],sourceRoot:""}]);const P=x},8986:(L,B,_)=>{_.d(B,{A:()=>P});var q=_(9372),U=_.n(q),H=_(935),x=_.n(H)()(U());x.push([L.id,".ck.ck-table-cell-properties-form .ck-form__row.ck-table-cell-properties-form__alignment-row{flex-wrap:wrap}.ck.ck-table-cell-properties-form .ck-form__row.ck-table-cell-properties-form__alignment-row .ck.ck-toolbar:first-of-type{flex-grow:0.57}.ck.ck-table-cell-properties-form .ck-form__row.ck-table-cell-properties-form__alignment-row .ck.ck-toolbar:last-of-type{flex-grow:0.43}.ck.ck-table-cell-properties-form .ck-form__row.ck-table-cell-properties-form__alignment-row .ck.ck-toolbar .ck-button{flex-grow:1}.ck.ck-table-cell-properties-form{width:320px}.ck.ck-table-cell-properties-form .ck-form__row.ck-table-cell-properties-form__padding-row{align-self:flex-end;padding:0;width:25%}.ck.ck-table-cell-properties-form .ck-form__row.ck-table-cell-properties-form__alignment-row .ck.ck-toolbar{background:none;margin-top:var(--ck-spacing-standard)}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/tablecellproperties.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/tablecellproperties.css"],names:[],mappings:"AAOE,6FACC,cAiBD,CAdE,0HAEC,cACD,CAEA,yHAEC,cACD,CAEA,uHACC,WACD,CClBJ,kCACC,WAkBD,CAfE,2FACC,mBAAoB,CACpB,SAAU,CACV,SACD,CAGC,4GACC,eAAgB,CAGhB,qCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-table-cell-properties-form {
	& .ck-form__row {
		&.ck-table-cell-properties-form__alignment-row {
			flex-wrap: wrap;

			& .ck.ck-toolbar {
				&:first-of-type {
					/* 4 buttons out of 7 (h-alignment + v-alignment) = 0.57 */
					flex-grow: 0.57;
				}

				&:last-of-type {
					/* 3 buttons out of 7 (h-alignment + v-alignment) = 0.43 */
					flex-grow: 0.43;
				}

				& .ck-button {
					flex-grow: 1;
				}
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-table-cell-properties-form {
	width: 320px;

	& .ck-form__row {
		&.ck-table-cell-properties-form__padding-row {
			align-self: flex-end;
			padding: 0;
			width: 25%;
		}

		&.ck-table-cell-properties-form__alignment-row {
			& .ck.ck-toolbar {
				background: none;

				/* Compensate for missing input label that would push the margin (toolbar has no inputs). */
				margin-top: var(--ck-spacing-standard);
			}
		}
	}
}
`],sourceRoot:""}]);const P=x},8795:(L,B,_)=>{_.d(B,{A:()=>P});var q=_(9372),U=_.n(q),H=_(935),x=_.n(H)()(U());x.push([L.id,":root{--ck-color-selector-column-resizer-hover:var(--ck-color-base-active);--ck-table-column-resizer-width:7px;--ck-table-column-resizer-position-offset:calc(var(--ck-table-column-resizer-width)*-0.5 - 0.5px)}.ck-content .table .ck-table-resized{table-layout:fixed}.ck-content .table table{overflow:hidden}.ck-content .table td,.ck-content .table th{overflow-wrap:break-word;position:relative}.ck.ck-editor__editable .table .ck-table-column-resizer{bottom:0;cursor:col-resize;position:absolute;right:var(--ck-table-column-resizer-position-offset);top:0;user-select:none;width:var(--ck-table-column-resizer-width);z-index:var(--ck-z-default)}.ck.ck-editor__editable .table[draggable] .ck-table-column-resizer,.ck.ck-editor__editable.ck-column-resize_disabled .table .ck-table-column-resizer{display:none}.ck.ck-editor__editable .table .ck-table-column-resizer:hover,.ck.ck-editor__editable .table .ck-table-column-resizer__active{background-color:var(--ck-color-selector-column-resizer-hover);bottom:-999999px;opacity:.25;top:-999999px}.ck.ck-editor__editable[dir=rtl] .table .ck-table-column-resizer{left:var(--ck-table-column-resizer-position-offset);right:unset}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/tablecolumnresize.css"],names:[],mappings:"AAKA,MACC,oEAAqE,CACrE,mCAAoC,CAIpC,iGACD,CAEA,qCACC,kBACD,CAEA,yBACC,eACD,CAEA,4CAIC,wBAAyB,CACzB,iBACD,CAEA,wDAGC,QAAS,CAGT,iBAAkB,CALlB,iBAAkB,CAGlB,oDAAqD,CAFrD,KAAM,CAKN,gBAAiB,CAFjB,0CAA2C,CAG3C,2BACD,CAQA,qJACC,YACD,CAEA,8HAEC,8DAA+D,CAO/D,gBAAiB,CANjB,WAAa,CAKb,aAED,CAEA,iEACC,mDAAoD,CACpD,WACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-selector-column-resizer-hover: var(--ck-color-base-active);
	--ck-table-column-resizer-width: 7px;

	/* The offset used for absolute positioning of the resizer element, so that it is placed exactly above the cell border.
	   The value is: minus half the width of the resizer decreased additionaly by the half the width of the border (0.5px). */
	--ck-table-column-resizer-position-offset: calc(var(--ck-table-column-resizer-width) * -0.5 - 0.5px);
}

.ck-content .table .ck-table-resized {
	table-layout: fixed;
}

.ck-content .table table {
	overflow: hidden;
}

.ck-content .table td,
.ck-content .table th {
	/* To prevent text overflowing beyond its cell when columns are resized by resize handler
	(https://github.com/ckeditor/ckeditor5/pull/14379#issuecomment-1589460978). */
	overflow-wrap: break-word;
	position: relative;
}

.ck.ck-editor__editable .table .ck-table-column-resizer {
	position: absolute;
	top: 0;
	bottom: 0;
	right: var(--ck-table-column-resizer-position-offset);
	width: var(--ck-table-column-resizer-width);
	cursor: col-resize;
	user-select: none;
	z-index: var(--ck-z-default);
}

.ck.ck-editor__editable.ck-column-resize_disabled .table .ck-table-column-resizer {
	display: none;
}

/* The resizer elements, which are extended to an extremely high height, break the drag & drop feature in Chrome. To make it work again,
   all resizers must be hidden while the table is dragged. */
.ck.ck-editor__editable .table[draggable] .ck-table-column-resizer {
	display: none;
}

.ck.ck-editor__editable .table .ck-table-column-resizer:hover,
.ck.ck-editor__editable .table .ck-table-column-resizer__active {
	background-color: var(--ck-color-selector-column-resizer-hover);
	opacity: 0.25;
	/* The resizer element resides in each cell so to occupy the entire height of the table, which is unknown from a CSS point of view,
	   it is extended to an extremely high height. Even for screens with a very high pixel density, the resizer will fulfill its role as
	   it should, i.e. for a screen of 476 ppi the total height of the resizer will take over 350 sheets of A4 format, which is totally
	   unrealistic height for a single table. */
	top: -999999px;
	bottom: -999999px;
}

.ck.ck-editor__editable[dir=rtl] .table .ck-table-column-resizer {
	left: var(--ck-table-column-resizer-position-offset);
	right: unset;
}
`],sourceRoot:""}]);const P=x},8137:(L,B,_)=>{_.d(B,{A:()=>P});var q=_(9372),U=_.n(q),H=_(935),x=_.n(H)()(U());x.push([L.id,":root{--ck-color-selector-focused-cell-background:rgba(158,201,250,.3)}.ck-widget.table td.ck-editor__nested-editable.ck-editor__nested-editable_focused,.ck-widget.table td.ck-editor__nested-editable:focus,.ck-widget.table th.ck-editor__nested-editable.ck-editor__nested-editable_focused,.ck-widget.table th.ck-editor__nested-editable:focus{background:var(--ck-color-selector-focused-cell-background);border-style:none;outline:1px solid var(--ck-color-focus-border);outline-offset:-1px}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/tableediting.css"],names:[],mappings:"AAKA,MACC,gEACD,CAKE,8QAGC,2DAA4D,CAK5D,iBAAkB,CAClB,8CAA+C,CAC/C,mBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-selector-focused-cell-background: hsla(212, 90%, 80%, .3);
}

.ck-widget.table {
	& td,
	& th {
		&.ck-editor__nested-editable.ck-editor__nested-editable_focused,
		&.ck-editor__nested-editable:focus {
			/* A very slight background to highlight the focused cell */
			background: var(--ck-color-selector-focused-cell-background);

			/* Fixes the problem where surrounding cells cover the focused cell's border.
			It does not fix the problem in all places but the UX is improved.
			See https://github.com/ckeditor/ckeditor5-table/issues/29. */
			border-style: none;
			outline: 1px solid var(--ck-color-focus-border);
			outline-offset: -1px; /* progressive enhancement - no IE support */
		}
	}
}
`],sourceRoot:""}]);const P=x},1623:(L,B,_)=>{_.d(B,{A:()=>P});var q=_(9372),U=_.n(q),H=_(935),x=_.n(H)()(U());x.push([L.id,'.ck.ck-table-form .ck-form__row.ck-table-form__background-row,.ck.ck-table-form .ck-form__row.ck-table-form__border-row{flex-wrap:wrap}.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row{align-items:center;flex-wrap:wrap}.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row .ck-labeled-field-view{align-items:center;display:flex;flex-direction:column-reverse}.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row .ck-labeled-field-view .ck.ck-dropdown,.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row .ck-table-form__dimension-operator{flex-grow:0}.ck.ck-table-form .ck.ck-labeled-field-view{position:relative}.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status{bottom:calc(var(--ck-table-properties-error-arrow-size)*-1);left:50%;position:absolute;transform:translate(-50%,100%);z-index:1}.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status:after{content:"";left:50%;position:absolute;top:calc(var(--ck-table-properties-error-arrow-size)*-1);transform:translateX(-50%)}:root{--ck-table-properties-error-arrow-size:6px;--ck-table-properties-min-error-width:150px}.ck.ck-table-form .ck-form__row.ck-table-form__border-row .ck-labeled-field-view>.ck-label{font-size:var(--ck-font-size-tiny);text-align:center}.ck.ck-table-form .ck-form__row.ck-table-form__border-row .ck-table-form__border-style,.ck.ck-table-form .ck-form__row.ck-table-form__border-row .ck-table-form__border-width{max-width:80px;min-width:80px;width:80px}.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row{padding:0}.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row .ck-table-form__dimensions-row__height,.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row .ck-table-form__dimensions-row__width{margin:0}.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row .ck-table-form__dimension-operator{align-self:flex-end;display:inline-block;height:var(--ck-ui-component-min-height);line-height:var(--ck-ui-component-min-height);margin:0 var(--ck-spacing-small)}.ck.ck-table-form .ck.ck-labeled-field-view{padding-top:var(--ck-spacing-standard)}.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status{border-radius:0}.ck-rounded-corners .ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status,.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status{background:var(--ck-color-base-error);color:var(--ck-color-base-background);min-width:var(--ck-table-properties-min-error-width);padding:var(--ck-spacing-small) var(--ck-spacing-medium);text-align:center}.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status:after{border-color:transparent transparent var(--ck-color-base-error) transparent;border-style:solid;border-width:0 var(--ck-table-properties-error-arrow-size) var(--ck-table-properties-error-arrow-size) var(--ck-table-properties-error-arrow-size)}.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status{animation:ck-table-form-labeled-view-status-appear .15s ease both}@media (prefers-reduced-motion:reduce){.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status{animation:none}}.ck.ck-table-form .ck.ck-labeled-field-view .ck-input.ck-error:not(:focus)+.ck.ck-labeled-field-view__status{display:none}@keyframes ck-table-form-labeled-view-status-appear{0%{opacity:0}to{opacity:1}}',"",{version:3,sources:["webpack://./../ckeditor5-table/theme/tableform.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/tableform.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAWE,wHACC,cACD,CAEA,8DAEC,kBAAmB,CADnB,cAgBD,CAbC,qFAGC,kBAAmB,CAFnB,YAAa,CACb,6BAMD,CAEA,sMACC,WACD,CAIF,4CAEC,iBAoBD,CAlBC,8EAGC,2DAAgE,CADhE,QAAS,CADT,iBAAkB,CAGlB,8BAA+B,CAG/B,SAUD,CAPC,oFACC,UAAW,CAGX,QAAS,CAFT,iBAAkB,CAClB,wDAA6D,CAE7D,0BACD,CChDH,MACC,0CAA2C,CAC3C,2CACD,CAMI,2FACC,kCAAmC,CACnC,iBACD,CAGD,8KAIC,cAAe,CADf,cAAe,CADf,UAGD,CAGD,8DACC,SAcD,CAZC,yMAEC,QACD,CAEA,iGACC,mBAAoB,CACpB,oBAAqB,CACrB,wCAAyC,CACzC,6CAA8C,CAC9C,gCACD,CAIF,4CACC,sCA6BD,CA3BC,8ECxCD,eD6DC,CArBA,mMCpCA,qCDyDA,CArBA,8EAGC,qCAAsC,CACtC,qCAAsC,CAEtC,oDAAqD,CADrD,wDAAyD,CAEzD,iBAcD,CAXC,oFACC,2EAA4E,CAE5E,kBAAmB,CADnB,kJAED,CAdD,8EAgBC,iEAKD,CAHC,uCAlBD,8EAmBE,cAEF,CADC,CAID,6GACC,YACD,CAIF,oDACC,GACC,SACD,CAEA,GACC,SACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-table-form {
	& .ck-form__row {
		&.ck-table-form__border-row {
			flex-wrap: wrap;
		}

		&.ck-table-form__background-row {
			flex-wrap: wrap;
		}

		&.ck-table-form__dimensions-row {
			flex-wrap: wrap;
			align-items: center;

			& .ck-labeled-field-view {
				display: flex;
				flex-direction: column-reverse;
				align-items: center;

				& .ck.ck-dropdown {
					flex-grow: 0;
				}
			}

			& .ck-table-form__dimension-operator {
				flex-grow: 0;
			}
		}
	}

	& .ck.ck-labeled-field-view {
		/* Allow absolute positioning of the status (error) balloons. */
		position: relative;

		& .ck.ck-labeled-field-view__status {
			position: absolute;
			left: 50%;
			bottom: calc( -1 * var(--ck-table-properties-error-arrow-size) );
			transform: translate(-50%,100%);

			/* Make sure the balloon status stays on top of other form elements. */
			z-index: 1;

			/* The arrow pointing towards the field. */
			&::after {
				content: "";
				position: absolute;
				top: calc( -1 * var(--ck-table-properties-error-arrow-size) );
				left: 50%;
				transform: translateX( -50% );
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../mixins/_rounded.css";

:root {
	--ck-table-properties-error-arrow-size: 6px;
	--ck-table-properties-min-error-width: 150px;
}

.ck.ck-table-form {
	& .ck-form__row {
		&.ck-table-form__border-row {
			& .ck-labeled-field-view {
				& > .ck-label {
					font-size: var(--ck-font-size-tiny);
					text-align: center;
				}
			}

			& .ck-table-form__border-style,
			& .ck-table-form__border-width {
				width: 80px;
				min-width: 80px;
				max-width: 80px;
			}
		}

		&.ck-table-form__dimensions-row {
			padding: 0;

			& .ck-table-form__dimensions-row__width,
			& .ck-table-form__dimensions-row__height {
				margin: 0
			}

			& .ck-table-form__dimension-operator {
				align-self: flex-end;
				display: inline-block;
				height: var(--ck-ui-component-min-height);
				line-height: var(--ck-ui-component-min-height);
				margin: 0 var(--ck-spacing-small);
			}
		}
	}

	& .ck.ck-labeled-field-view {
		padding-top: var(--ck-spacing-standard);

		& .ck.ck-labeled-field-view__status {
			@mixin ck-rounded-corners;

			background: var(--ck-color-base-error);
			color: var(--ck-color-base-background);
			padding: var(--ck-spacing-small) var(--ck-spacing-medium);
			min-width: var(--ck-table-properties-min-error-width);
			text-align: center;

			/* The arrow pointing towards the field. */
			&::after {
				border-color: transparent transparent var(--ck-color-base-error) transparent;
				border-width: 0 var(--ck-table-properties-error-arrow-size) var(--ck-table-properties-error-arrow-size) var(--ck-table-properties-error-arrow-size);
				border-style: solid;
			}

			animation: ck-table-form-labeled-view-status-appear .15s ease both;

			@media (prefers-reduced-motion: reduce) {
				animation: none;
			}
		}

		/* Hide the error balloon when the field is blurred. Makes the experience much more clear. */
		& .ck-input.ck-error:not(:focus) + .ck.ck-labeled-field-view__status {
			display: none;
		}
	}
}

@keyframes ck-table-form-labeled-view-status-appear {
	0% {
		opacity: 0;
	}

	100% {
		opacity: 1;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const P=x},5562:(L,B,_)=>{_.d(B,{A:()=>P});var q=_(9372),U=_.n(q),H=_(935),x=_.n(H)()(U());x.push([L.id,".ck.ck-table-properties-form .ck-form__row.ck-table-properties-form__alignment-row{align-content:baseline;flex-basis:0;flex-wrap:wrap}.ck.ck-table-properties-form .ck-form__row.ck-table-properties-form__alignment-row .ck.ck-toolbar .ck-toolbar__items{flex-wrap:nowrap}.ck.ck-table-properties-form{width:320px}.ck.ck-table-properties-form .ck-form__row.ck-table-properties-form__alignment-row{align-self:flex-end;padding:0}.ck.ck-table-properties-form .ck-form__row.ck-table-properties-form__alignment-row .ck.ck-toolbar{background:none;margin-top:var(--ck-spacing-standard)}.ck.ck-table-properties-form .ck-form__row.ck-table-properties-form__alignment-row .ck.ck-toolbar .ck-toolbar__items>*{width:40px}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/tableproperties.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/tableproperties.css"],names:[],mappings:"AAOE,mFAGC,sBAAuB,CADvB,YAAa,CADb,cAOD,CAHC,qHACC,gBACD,CCTH,6BACC,WAmBD,CAhBE,mFACC,mBAAoB,CACpB,SAYD,CAVC,kGACC,eAAgB,CAGhB,qCAKD,CAHC,uHACC,UACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-table-properties-form {
	& .ck-form__row {
		&.ck-table-properties-form__alignment-row {
			flex-wrap: wrap;
			flex-basis: 0;
			align-content: baseline;

			& .ck.ck-toolbar .ck-toolbar__items {
				flex-wrap: nowrap;
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-table-properties-form {
	width: 320px;

	& .ck-form__row {
		&.ck-table-properties-form__alignment-row {
			align-self: flex-end;
			padding: 0;

			& .ck.ck-toolbar {
				background: none;

				/* Compensate for missing input label that would push the margin (toolbar has no inputs). */
				margin-top: var(--ck-spacing-standard);

				& .ck-toolbar__items > * {
					width: 40px;
				}
			}
		}
	}
}
`],sourceRoot:""}]);const P=x},8423:(L,B,_)=>{_.d(B,{A:()=>P});var q=_(9372),U=_.n(q),H=_(935),x=_.n(H)()(U());x.push([L.id,':root{--ck-table-selected-cell-background:rgba(158,207,250,.3)}.ck.ck-editor__editable .table table td.ck-editor__editable_selected,.ck.ck-editor__editable .table table th.ck-editor__editable_selected{box-shadow:unset;caret-color:transparent;outline:unset;position:relative}.ck.ck-editor__editable .table table td.ck-editor__editable_selected:after,.ck.ck-editor__editable .table table th.ck-editor__editable_selected:after{background-color:var(--ck-table-selected-cell-background);bottom:0;content:"";left:0;pointer-events:none;position:absolute;right:0;top:0}.ck.ck-editor__editable .table table td.ck-editor__editable_selected ::selection,.ck.ck-editor__editable .table table td.ck-editor__editable_selected:focus,.ck.ck-editor__editable .table table th.ck-editor__editable_selected ::selection,.ck.ck-editor__editable .table table th.ck-editor__editable_selected:focus{background-color:transparent}.ck.ck-editor__editable .table table td.ck-editor__editable_selected .ck-widget,.ck.ck-editor__editable .table table th.ck-editor__editable_selected .ck-widget{outline:unset}.ck.ck-editor__editable .table table td.ck-editor__editable_selected .ck-widget>.ck-widget__selection-handle,.ck.ck-editor__editable .table table th.ck-editor__editable_selected .ck-widget>.ck-widget__selection-handle{display:none}',"",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/tableselection.css"],names:[],mappings:"AAKA,MACC,wDACD,CAGC,0IAKC,gBAAiB,CAFjB,uBAAwB,CACxB,aAAc,CAFd,iBAiCD,CA3BC,sJAGC,yDAA0D,CAK1D,QAAS,CAPT,UAAW,CAKX,MAAO,CAJP,mBAAoB,CAEpB,iBAAkB,CAGlB,OAAQ,CAFR,KAID,CAEA,wTAEC,4BACD,CAMA,gKACC,aAKD,CAHC,0NACC,YACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-table-selected-cell-background: hsla(208, 90%, 80%, .3);
}

.ck.ck-editor__editable .table table {
	& td.ck-editor__editable_selected,
	& th.ck-editor__editable_selected {
		position: relative;
		caret-color: transparent;
		outline: unset;
		box-shadow: unset;

		/* https://github.com/ckeditor/ckeditor5/issues/6446 */
		&:after {
			content: '';
			pointer-events: none;
			background-color: var(--ck-table-selected-cell-background);
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
		}

		& ::selection,
		&:focus {
			background-color: transparent;
		}

		/*
		 * To reduce the amount of noise, all widgets in the table selection have no outline and no selection handle.
		 * See https://github.com/ckeditor/ckeditor5/issues/9491.
		 */
		& .ck-widget {
			outline: unset;

			& > .ck-widget__selection-handle {
				display: none;
			}
		}
	}
}
`],sourceRoot:""}]);const P=x},1801:(L,B,_)=>{_.d(B,{A:()=>P});var q=_(9372),U=_.n(q),H=_(935),x=_.n(H)()(U());x.push([L.id,".ck.ck-aria-live-announcer{left:-10000px;position:absolute;top:-10000px}.ck.ck-aria-live-region-list{list-style-type:none}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/arialiveannouncer/arialiveannouncer.css"],names:[],mappings:"AAKA,2BAEC,aAAc,CADd,iBAAkB,CAElB,YACD,CAEA,6BACC,oBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-aria-live-announcer {
	position: absolute;
	left: -10000px;
	top: -10000px;
}

.ck.ck-aria-live-region-list {
	list-style-type: none;
}
`],sourceRoot:""}]);const P=x},5727:(L,B,_)=>{_.d(B,{A:()=>P});var q=_(9372),U=_.n(q),H=_(935),x=_.n(H)()(U());x.push([L.id,".ck.ck-autocomplete{position:relative}.ck.ck-autocomplete>.ck-search__results{position:absolute;z-index:var(--ck-z-panel)}.ck.ck-autocomplete>.ck-search__results.ck-search__results_n{bottom:100%}.ck.ck-autocomplete>.ck-search__results.ck-search__results_s{bottom:auto;top:100%}.ck.ck-autocomplete>.ck-search__results{border-radius:0}.ck-rounded-corners .ck.ck-autocomplete>.ck-search__results,.ck.ck-autocomplete>.ck-search__results.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-autocomplete>.ck-search__results{background:var(--ck-color-base-background);border:1px solid var(--ck-color-dropdown-panel-border);box-shadow:var(--ck-drop-shadow),0 0;max-height:200px;min-width:auto;overflow-y:auto}.ck.ck-autocomplete>.ck-search__results.ck-search__results_n{border-bottom-left-radius:0;border-bottom-right-radius:0;margin-bottom:-1px}.ck.ck-autocomplete>.ck-search__results.ck-search__results_s{border-top-left-radius:0;border-top-right-radius:0;margin-top:-1px}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/autocomplete/autocomplete.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/autocomplete/autocomplete.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAKA,oBACC,iBAeD,CAbC,wCACC,iBAAkB,CAClB,yBAUD,CARC,6DACC,WACD,CAEA,6DAEC,WAAY,CADZ,QAED,CCVD,wCCEA,eDuBA,CAzBA,uHCMC,qCDmBD,CAzBA,wCAMC,0CAA2C,CAC3C,sDAAuD,CEPxD,oCAA8B,CFI7B,gBAAiB,CAIjB,cAAe,CAHf,eAoBD,CAfC,6DACC,2BAA4B,CAC5B,4BAA6B,CAG7B,kBACD,CAEA,6DACC,wBAAyB,CACzB,yBAA0B,CAG1B,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-autocomplete {
	position: relative;

	& > .ck-search__results {
		position: absolute;
		z-index: var(--ck-z-panel);

		&.ck-search__results_n {
			bottom: 100%;
		}

		&.ck-search__results_s {
			top: 100%;
			bottom: auto;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-theme-lark/theme/mixins/_rounded.css";
@import "@ckeditor/ckeditor5-theme-lark/theme/mixins/_shadow.css";

.ck.ck-autocomplete {
	& > .ck-search__results {
		@mixin ck-rounded-corners;
		@mixin ck-drop-shadow;

		max-height: 200px;
		overflow-y: auto;
		background: var(--ck-color-base-background);
		border: 1px solid var(--ck-color-dropdown-panel-border);
		min-width: auto;

		&.ck-search__results_n {
			border-bottom-left-radius: 0;
			border-bottom-right-radius: 0;

			/* Prevent duplicated borders between the input and the results pane. */
			margin-bottom: -1px;
		}

		&.ck-search__results_s {
			border-top-left-radius: 0;
			border-top-right-radius: 0;

			/* Prevent duplicated borders between the input and the results pane. */
			margin-top: -1px;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const P=x},9715:(L,B,_)=>{_.d(B,{A:()=>P});var q=_(9372),U=_.n(q),H=_(935),x=_.n(H)()(U());x.push([L.id,".ck.ck-button,a.ck.ck-button{align-items:center;display:inline-flex;position:relative;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}[dir=ltr] .ck.ck-button,[dir=ltr] a.ck.ck-button{justify-content:left}[dir=rtl] .ck.ck-button,[dir=rtl] a.ck.ck-button{justify-content:right}.ck.ck-button .ck-button__label,a.ck.ck-button .ck-button__label{display:none}.ck.ck-button.ck-button_with-text .ck-button__label,a.ck.ck-button.ck-button_with-text .ck-button__label{display:inline-block}.ck.ck-button:not(.ck-button_with-text),a.ck.ck-button:not(.ck-button_with-text){justify-content:center}.ck.ck-button,a.ck.ck-button{background:var(--ck-color-button-default-background)}.ck.ck-button:not(.ck-disabled):hover,a.ck.ck-button:not(.ck-disabled):hover{background:var(--ck-color-button-default-hover-background)}.ck.ck-button:not(.ck-disabled):active,a.ck.ck-button:not(.ck-disabled):active{background:var(--ck-color-button-default-active-background)}.ck.ck-button.ck-disabled,a.ck.ck-button.ck-disabled{background:var(--ck-color-button-default-disabled-background)}.ck.ck-button,a.ck.ck-button{border-radius:0}.ck-rounded-corners .ck.ck-button,.ck-rounded-corners a.ck.ck-button,.ck.ck-button.ck-rounded-corners,a.ck.ck-button.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-button,a.ck.ck-button{-webkit-appearance:none;border:1px solid transparent;cursor:default;font-size:inherit;line-height:1;min-height:var(--ck-ui-component-min-height);min-width:var(--ck-ui-component-min-height);padding:var(--ck-spacing-tiny);text-align:center;transition:box-shadow .2s ease-in-out,border .2s ease-in-out;vertical-align:middle;white-space:nowrap}@media (prefers-reduced-motion:reduce){.ck.ck-button,a.ck.ck-button{transition:none}}.ck.ck-button:active,.ck.ck-button:focus,a.ck.ck-button:active,a.ck.ck-button:focus{border:var(--ck-focus-ring);box-shadow:var(--ck-focus-outer-shadow),0 0;outline:none}.ck.ck-button .ck-button__icon use,.ck.ck-button .ck-button__icon use *,a.ck.ck-button .ck-button__icon use,a.ck.ck-button .ck-button__icon use *{color:inherit}.ck.ck-button .ck-button__label,a.ck.ck-button .ck-button__label{color:inherit;cursor:inherit;font-size:inherit;font-weight:inherit;vertical-align:middle}[dir=ltr] .ck.ck-button .ck-button__label,[dir=ltr] a.ck.ck-button .ck-button__label{text-align:left}[dir=rtl] .ck.ck-button .ck-button__label,[dir=rtl] a.ck.ck-button .ck-button__label{text-align:right}.ck.ck-button .ck-button__keystroke,a.ck.ck-button .ck-button__keystroke{color:inherit}[dir=ltr] .ck.ck-button .ck-button__keystroke,[dir=ltr] a.ck.ck-button .ck-button__keystroke{margin-left:var(--ck-spacing-large)}[dir=rtl] .ck.ck-button .ck-button__keystroke,[dir=rtl] a.ck.ck-button .ck-button__keystroke{margin-right:var(--ck-spacing-large)}.ck.ck-button .ck-button__keystroke,a.ck.ck-button .ck-button__keystroke{opacity:.5}.ck.ck-button.ck-disabled:active,.ck.ck-button.ck-disabled:focus,a.ck.ck-button.ck-disabled:active,a.ck.ck-button.ck-disabled:focus{box-shadow:var(--ck-focus-disabled-outer-shadow),0 0}.ck.ck-button.ck-disabled .ck-button__icon,.ck.ck-button.ck-disabled .ck-button__label,a.ck.ck-button.ck-disabled .ck-button__icon,a.ck.ck-button.ck-disabled .ck-button__label{opacity:var(--ck-disabled-opacity)}.ck.ck-button.ck-disabled .ck-button__keystroke,a.ck.ck-button.ck-disabled .ck-button__keystroke{opacity:.3}.ck.ck-button.ck-button_with-text,a.ck.ck-button.ck-button_with-text{padding:var(--ck-spacing-tiny) var(--ck-spacing-standard)}[dir=ltr] .ck.ck-button.ck-button_with-text .ck-button__icon,[dir=ltr] a.ck.ck-button.ck-button_with-text .ck-button__icon{margin-left:calc(var(--ck-spacing-small)*-1);margin-right:var(--ck-spacing-small)}[dir=rtl] .ck.ck-button.ck-button_with-text .ck-button__icon,[dir=rtl] a.ck.ck-button.ck-button_with-text .ck-button__icon{margin-left:var(--ck-spacing-small);margin-right:calc(var(--ck-spacing-small)*-1)}.ck.ck-button.ck-button_with-keystroke .ck-button__label,a.ck.ck-button.ck-button_with-keystroke .ck-button__label{flex-grow:1}.ck.ck-button.ck-on,a.ck.ck-button.ck-on{background:var(--ck-color-button-on-background)}.ck.ck-button.ck-on:not(.ck-disabled):hover,a.ck.ck-button.ck-on:not(.ck-disabled):hover{background:var(--ck-color-button-on-hover-background)}.ck.ck-button.ck-on:not(.ck-disabled):active,a.ck.ck-button.ck-on:not(.ck-disabled):active{background:var(--ck-color-button-on-active-background)}.ck.ck-button.ck-on.ck-disabled,a.ck.ck-button.ck-on.ck-disabled{background:var(--ck-color-button-on-disabled-background)}.ck.ck-button.ck-on,a.ck.ck-button.ck-on{color:var(--ck-color-button-on-color)}.ck.ck-button.ck-button-save,a.ck.ck-button.ck-button-save{color:var(--ck-color-button-save)}.ck.ck-button.ck-button-cancel,a.ck.ck-button.ck-button-cancel{color:var(--ck-color-button-cancel)}.ck.ck-button-action,a.ck.ck-button-action{background:var(--ck-color-button-action-background)}.ck.ck-button-action:not(.ck-disabled):hover,a.ck.ck-button-action:not(.ck-disabled):hover{background:var(--ck-color-button-action-hover-background)}.ck.ck-button-action:not(.ck-disabled):active,a.ck.ck-button-action:not(.ck-disabled):active{background:var(--ck-color-button-action-active-background)}.ck.ck-button-action.ck-disabled,a.ck.ck-button-action.ck-disabled{background:var(--ck-color-button-action-disabled-background)}.ck.ck-button-action,a.ck.ck-button-action{color:var(--ck-color-button-action-text)}.ck.ck-button-bold,a.ck.ck-button-bold{font-weight:700}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/button/button.css","webpack://./../ckeditor5-ui/theme/mixins/_unselectable.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/button/button.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/mixins/_button.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_disabled.css"],names:[],mappings:"AAQA,6BAMC,kBAAmB,CADnB,mBAAoB,CADpB,iBAAkB,CCHlB,qBAAsB,CACtB,wBAAyB,CACzB,oBAAqB,CACrB,gBD0BD,CA9BA,iDASE,oBAqBF,CA9BA,iDAaE,qBAiBF,CAdC,iEACC,YACD,CAGC,yGACC,oBACD,CAID,iFACC,sBACD,CEzBD,6BCAC,oDD+ID,CC5IE,6EACC,0DACD,CAEA,+EACC,2DACD,CAID,qDACC,6DACD,CDfD,6BEDC,eFgJD,CA/IA,wIEGE,qCF4IF,CA/IA,6BA6BC,uBAAwB,CANxB,4BAA6B,CAjB7B,cAAe,CAcf,iBAAkB,CAHlB,aAAc,CAJd,4CAA6C,CAD7C,2CAA4C,CAJ5C,8BAA+B,CAC/B,iBAAkB,CAiBlB,4DAA8D,CAnB9D,qBAAsB,CAFtB,kBA0ID,CAhHC,uCA/BD,6BAgCE,eA+GF,CA9GC,CAEA,oFGpCA,2BAA2B,CCF3B,2CAA8B,CDC9B,YHyCA,CAIC,kJAEC,aACD,CAGD,iEAIC,aAAc,CACd,cAAe,CAHf,iBAAkB,CAClB,mBAAoB,CAMpB,qBASD,CAlBA,qFAYE,eAMF,CAlBA,qFAgBE,gBAEF,CAEA,yEACC,aAWD,CAZA,6FAIE,mCAQF,CAZA,6FAQE,oCAIF,CAZA,yEAWC,UACD,CAIC,oIIxFD,oDJ4FC,CAOA,gLKnGD,kCLqGC,CAEA,iGACC,UACD,CAGD,qEACC,yDAcD,CAXC,2HAEE,4CAA+C,CAC/C,oCAOF,CAVA,2HAQE,mCAAoC,CADpC,6CAGF,CAKA,mHACC,WACD,CAID,yCClIA,+CDsIA,CCnIC,yFACC,qDACD,CAEA,2FACC,sDACD,CAID,iEACC,wDACD,CDmHA,yCAGC,qCACD,CAEA,2DACC,iCACD,CAEA,+DACC,mCACD,CAID,2CClJC,mDDuJD,CCpJE,2FACC,yDACD,CAEA,6FACC,0DACD,CAID,mEACC,4DACD,CDmID,2CAIC,wCACD,CAEA,uCAEC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../mixins/_unselectable.css";
@import "../../mixins/_dir.css";

.ck.ck-button,
a.ck.ck-button {
	@mixin ck-unselectable;

	position: relative;
	display: inline-flex;
	align-items: center;

	@mixin ck-dir ltr {
		justify-content: left;
	}

	@mixin ck-dir rtl {
		justify-content: right;
	}

	& .ck-button__label {
		display: none;
	}

	&.ck-button_with-text {
		& .ck-button__label {
			display: inline-block;
		}
	}

	/* Center the icon horizontally in a button without text. */
	&:not(.ck-button_with-text)  {
		justify-content: center;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Makes element unselectable.
 */
@define-mixin ck-unselectable {
	-moz-user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;
	user-select: none
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_focus.css";
@import "../../../mixins/_shadow.css";
@import "../../../mixins/_disabled.css";
@import "../../../mixins/_rounded.css";
@import "../../mixins/_button.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck.ck-button,
a.ck.ck-button {
	@mixin ck-button-colors --ck-color-button-default;
	@mixin ck-rounded-corners;

	white-space: nowrap;
	cursor: default;
	vertical-align: middle;
	padding: var(--ck-spacing-tiny);
	text-align: center;

	/* A very important piece of styling. Go to variable declaration to learn more. */
	min-width: var(--ck-ui-component-min-height);
	min-height: var(--ck-ui-component-min-height);

	/* Normalize the height of the line. Removing this will break consistent height
	among text and text-less buttons (with icons). */
	line-height: 1;

	/* Enable font size inheritance, which allows fluid UI scaling. */
	font-size: inherit;

	/* Avoid flickering when the foucs border shows up. */
	border: 1px solid transparent;

	/* Apply some smooth transition to the box-shadow and border. */
	transition: box-shadow .2s ease-in-out, border .2s ease-in-out;

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/189 */
	-webkit-appearance: none;

	@media (prefers-reduced-motion: reduce) {
		transition: none;
	}

	&:active,
	&:focus {
		@mixin ck-focus-ring;
		@mixin ck-box-shadow var(--ck-focus-outer-shadow);
	}

	/* Allow icon coloring using the text "color" property. */
	& .ck-button__icon {
		& use,
		& use * {
			color: inherit;
		}
	}

	& .ck-button__label {
		/* Enable font size inheritance, which allows fluid UI scaling. */
		font-size: inherit;
		font-weight: inherit;
		color: inherit;
		cursor: inherit;

		/* Must be consistent with .ck-icon's vertical align. Otherwise, buttons with and
		without labels (but with icons) have different sizes in Chrome */
		vertical-align: middle;

		@mixin ck-dir ltr {
			text-align: left;
		}

		@mixin ck-dir rtl {
			text-align: right;
		}
	}

	& .ck-button__keystroke {
		color: inherit;

		@mixin ck-dir ltr {
			margin-left: var(--ck-spacing-large);
		}

		@mixin ck-dir rtl {
			margin-right: var(--ck-spacing-large);
		}

		opacity: .5;
	}

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/70 */
	&.ck-disabled {
		&:active,
		&:focus {
			/* The disabled button should have a slightly less visible shadow when focused. */
			@mixin ck-box-shadow var(--ck-focus-disabled-outer-shadow);
		}

		& .ck-button__icon {
			@mixin ck-disabled;
		}

		/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/98 */
		& .ck-button__label {
			@mixin ck-disabled;
		}

		& .ck-button__keystroke {
			opacity: .3;
		}
	}

	&.ck-button_with-text {
		padding: var(--ck-spacing-tiny) var(--ck-spacing-standard);

		/* stylelint-disable-next-line no-descending-specificity */
		& .ck-button__icon {
			@mixin ck-dir ltr {
				margin-left: calc(-1 * var(--ck-spacing-small));
				margin-right: var(--ck-spacing-small);
			}

			@mixin ck-dir rtl {
				margin-right: calc(-1 * var(--ck-spacing-small));
				margin-left: var(--ck-spacing-small);
			}
		}
	}

	&.ck-button_with-keystroke {
		/* stylelint-disable-next-line no-descending-specificity */
		& .ck-button__label {
			flex-grow: 1;
		}
	}

	/* A style of the button which is currently on, e.g. its feature is active. */
	&.ck-on {
		@mixin ck-button-colors --ck-color-button-on;

		color: var(--ck-color-button-on-color);
	}

	&.ck-button-save {
		color: var(--ck-color-button-save);
	}

	&.ck-button-cancel {
		color: var(--ck-color-button-cancel);
	}
}

/* A style of the button which handles the primary action. */
.ck.ck-button-action,
a.ck.ck-button-action {
	@mixin ck-button-colors --ck-color-button-action;

	color: var(--ck-color-button-action-text);
}

.ck.ck-button-bold,
a.ck.ck-button-bold {
	font-weight: bold;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements a button of given background color.
 *
 * @param {String} $background - Background color of the button.
 * @param {String} $border - Border color of the button.
 */
@define-mixin ck-button-colors $prefix {
	background: var($(prefix)-background);

	&:not(.ck-disabled) {
		&:hover {
			background: var($(prefix)-hover-background);
		}

		&:active {
			background: var($(prefix)-active-background);
		}
	}

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/98 */
	&.ck-disabled {
		background: var($(prefix)-disabled-background);
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A visual style of focused element's border.
 */
@define-mixin ck-focus-ring {
	/* Disable native outline. */
	outline: none;
	border: var(--ck-focus-ring)
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class which indicates that an element holding it is disabled.
 */
@define-mixin ck-disabled {
	opacity: var(--ck-disabled-opacity);
}
`],sourceRoot:""}]);const P=x},4391:(L,B,_)=>{_.d(B,{A:()=>P});var q=_(9372),U=_.n(q),H=_(935),x=_.n(H)()(U());x.push([L.id,".ck.ck-button.ck-switchbutton .ck-button__toggle,.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner{display:block}:root{--ck-switch-button-toggle-width:2.6153846154em;--ck-switch-button-toggle-inner-size:calc(1.07692em + 1px);--ck-switch-button-translation:calc(var(--ck-switch-button-toggle-width) - var(--ck-switch-button-toggle-inner-size) - 2px);--ck-switch-button-inner-hover-shadow:0 0 0 5px var(--ck-color-switch-button-inner-shadow)}.ck.ck-button.ck-switchbutton,.ck.ck-button.ck-switchbutton.ck-on:active,.ck.ck-button.ck-switchbutton.ck-on:focus,.ck.ck-button.ck-switchbutton.ck-on:hover,.ck.ck-button.ck-switchbutton:active,.ck.ck-button.ck-switchbutton:focus,.ck.ck-button.ck-switchbutton:hover{background:transparent;color:inherit}[dir=ltr] .ck.ck-button.ck-switchbutton .ck-button__label{margin-right:calc(var(--ck-spacing-large)*2)}[dir=rtl] .ck.ck-button.ck-switchbutton .ck-button__label{margin-left:calc(var(--ck-spacing-large)*2)}.ck.ck-button.ck-switchbutton .ck-button__toggle{border-radius:0}.ck-rounded-corners .ck.ck-button.ck-switchbutton .ck-button__toggle,.ck.ck-button.ck-switchbutton .ck-button__toggle.ck-rounded-corners{border-radius:var(--ck-border-radius)}[dir=ltr] .ck.ck-button.ck-switchbutton .ck-button__toggle{margin-left:auto}[dir=rtl] .ck.ck-button.ck-switchbutton .ck-button__toggle{margin-right:auto}.ck.ck-button.ck-switchbutton .ck-button__toggle{background:var(--ck-color-switch-button-off-background);border:1px solid transparent;transition:background .4s ease,box-shadow .2s ease-in-out,outline .2s ease-in-out;width:var(--ck-switch-button-toggle-width)}.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner{border-radius:0}.ck-rounded-corners .ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner,.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner.ck-rounded-corners{border-radius:var(--ck-border-radius);border-radius:calc(var(--ck-border-radius)*.5)}.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner{background:var(--ck-color-switch-button-inner-background);height:var(--ck-switch-button-toggle-inner-size);transition:all .3s ease;width:var(--ck-switch-button-toggle-inner-size)}@media (prefers-reduced-motion:reduce){.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner{transition:none}}.ck.ck-button.ck-switchbutton .ck-button__toggle:hover{background:var(--ck-color-switch-button-off-hover-background)}.ck.ck-button.ck-switchbutton .ck-button__toggle:hover .ck-button__toggle__inner{box-shadow:var(--ck-switch-button-inner-hover-shadow)}.ck.ck-button.ck-switchbutton.ck-disabled .ck-button__toggle{opacity:var(--ck-disabled-opacity)}.ck.ck-button.ck-switchbutton:focus{border-color:transparent;box-shadow:none;outline:none}.ck.ck-button.ck-switchbutton:focus .ck-button__toggle{box-shadow:0 0 0 1px var(--ck-color-base-background),0 0 0 5px var(--ck-color-focus-outer-shadow);outline:var(--ck-focus-ring);outline-offset:1px}.ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle{background:var(--ck-color-switch-button-on-background)}.ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle:hover{background:var(--ck-color-switch-button-on-hover-background)}[dir=ltr] .ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle .ck-button__toggle__inner{transform:translateX(var( --ck-switch-button-translation ))}[dir=rtl] .ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle .ck-button__toggle__inner{transform:translateX(calc(var( --ck-switch-button-translation )*-1))}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/button/switchbutton.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/button/switchbutton.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_disabled.css"],names:[],mappings:"AASE,4HACC,aACD,CCCF,MAEC,8CAA+C,CAE/C,0DAAgE,CAChE,2HAIC,CACD,0FACD,CAOC,0QAEC,sBAAuB,CADvB,aAED,CAEA,0DAGE,4CAOF,CAVA,0DAQE,2CAEF,CAEA,iDCpCA,eDgFA,CA5CA,yIChCC,qCD4ED,CA5CA,2DAKE,gBAuCF,CA5CA,2DAUE,iBAkCF,CA5CA,iDAkBC,uDAAwD,CAFxD,4BAA6B,CAD7B,iFAAsF,CAEtF,0CA2BD,CAxBC,2ECxDD,eDuEC,CAfA,6LCpDA,qCAAsC,CDsDpC,8CAaF,CAfA,2EAOC,yDAA0D,CAD1D,gDAAiD,CAIjD,uBAA0B,CAL1B,+CAUD,CAHC,uCAZD,2EAaE,eAEF,CADC,CAGD,uDACC,6DAKD,CAHC,iFACC,qDACD,CAIF,6DEpFA,kCFsFA,CAGA,oCACC,wBAAyB,CAEzB,eAAgB,CADhB,YAQD,CALC,uDACC,iGAAmG,CAEnG,4BAA6B,CAD7B,kBAED,CAKA,uDACC,sDAkBD,CAhBC,6DACC,4DACD,CAEA,2FAKE,2DAMF,CAXA,2FASE,oEAEF",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-button.ck-switchbutton {
	& .ck-button__toggle {
		display: block;

		& .ck-button__toggle__inner {
			display: block;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_disabled.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

/* Note: To avoid rendering issues (aliasing) but to preserve the responsive nature
of the component, floating–point numbers have been used which, for the default font size
(see: --ck-font-size-base), will generate simple integers. */
:root {
	/* 34px at 13px font-size */
	--ck-switch-button-toggle-width: 2.6153846154em;
	/* 14px at 13px font-size */
	--ck-switch-button-toggle-inner-size: calc(1.0769230769em + 1px);
	--ck-switch-button-translation: calc(
		var(--ck-switch-button-toggle-width) -
		var(--ck-switch-button-toggle-inner-size) -
		2px /* Border */
	);
	--ck-switch-button-inner-hover-shadow: 0 0 0 5px var(--ck-color-switch-button-inner-shadow);
}

.ck.ck-button.ck-switchbutton {
	/* Unlike a regular button, the switch button text color and background should never change.
	 * Changing toggle switch (background, outline) is enough to carry the information about the
	 * state of the entire component (https://github.com/ckeditor/ckeditor5/issues/12519)
	 */
	&, &:hover, &:focus, &:active, &.ck-on:hover, &.ck-on:focus, &.ck-on:active {
		color: inherit;
		background: transparent;
	}

	& .ck-button__label {
		@mixin ck-dir ltr {
			/* Separate the label from the switch */
			margin-right: calc(2 * var(--ck-spacing-large));
		}

		@mixin ck-dir rtl {
			/* Separate the label from the switch */
			margin-left: calc(2 * var(--ck-spacing-large));
		}
	}

	& .ck-button__toggle {
		@mixin ck-rounded-corners;

		@mixin ck-dir ltr {
			/* Make sure the toggle is always to the right as far as possible. */
			margin-left: auto;
		}

		@mixin ck-dir rtl {
			/* Make sure the toggle is always to the left as far as possible. */
			margin-right: auto;
		}

		/* Apply some smooth transition to the box-shadow and border. */
		/* Gently animate the background color of the toggle switch */
		transition: background 400ms ease, box-shadow .2s ease-in-out, outline .2s ease-in-out;
		border: 1px solid transparent;
		width: var(--ck-switch-button-toggle-width);
		background: var(--ck-color-switch-button-off-background);

		& .ck-button__toggle__inner {
			@mixin ck-rounded-corners {
				border-radius: calc(.5 * var(--ck-border-radius));
			}

			width: var(--ck-switch-button-toggle-inner-size);
			height: var(--ck-switch-button-toggle-inner-size);
			background: var(--ck-color-switch-button-inner-background);

			/* Gently animate the inner part of the toggle switch */
			transition: all 300ms ease;

			@media (prefers-reduced-motion: reduce) {
				transition: none;
			}
		}

		&:hover {
			background: var(--ck-color-switch-button-off-hover-background);

			& .ck-button__toggle__inner {
				box-shadow: var(--ck-switch-button-inner-hover-shadow);
			}
		}
	}

	&.ck-disabled .ck-button__toggle {
		@mixin ck-disabled;
	}

	/* Overriding default .ck-button:focus styles + an outline around the toogle */
	&:focus {
		border-color: transparent;
		outline: none;
		box-shadow: none;

		& .ck-button__toggle {
			box-shadow: 0 0 0 1px var(--ck-color-base-background), 0 0 0 5px var(--ck-color-focus-outer-shadow);
			outline-offset: 1px;
			outline: var(--ck-focus-ring);
		}
	}

	/* stylelint-disable-next-line no-descending-specificity */
	&.ck-on {
		& .ck-button__toggle {
			background: var(--ck-color-switch-button-on-background);

			&:hover {
				background: var(--ck-color-switch-button-on-hover-background);
			}

			& .ck-button__toggle__inner {
				/*
				* Move the toggle switch to the right. It will be animated.
				*/
				@mixin ck-dir ltr {
					transform: translateX( var( --ck-switch-button-translation ) );
				}

				@mixin ck-dir rtl {
					transform: translateX( calc( -1 * var( --ck-switch-button-translation ) ) );
				}
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class which indicates that an element holding it is disabled.
 */
@define-mixin ck-disabled {
	opacity: var(--ck-disabled-opacity);
}
`],sourceRoot:""}]);const P=x},25:(L,B,_)=>{_.d(B,{A:()=>P});var q=_(9372),U=_.n(q),H=_(935),x=_.n(H)()(U());x.push([L.id,".ck.ck-collapsible.ck-collapsible_collapsed>.ck-collapsible__children{display:none}:root{--ck-collapsible-arrow-size:calc(var(--ck-icon-size)*0.5)}.ck.ck-collapsible>.ck.ck-button{border-radius:0;color:inherit;font-weight:700;padding:var(--ck-list-button-padding);width:100%}.ck.ck-collapsible>.ck.ck-button:focus{background:transparent}.ck.ck-collapsible>.ck.ck-button:active,.ck.ck-collapsible>.ck.ck-button:hover:not(:focus),.ck.ck-collapsible>.ck.ck-button:not(:focus){background:transparent;border-color:transparent;box-shadow:none}.ck.ck-collapsible>.ck.ck-button>.ck-icon{margin-right:var(--ck-spacing-medium);width:var(--ck-collapsible-arrow-size)}.ck.ck-collapsible>.ck-collapsible__children{padding:var(--ck-spacing-medium) var(--ck-spacing-large) var(--ck-spacing-large)}.ck.ck-collapsible.ck-collapsible_collapsed>.ck.ck-button .ck-icon{transform:rotate(-90deg)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/collapsible/collapsible.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/collapsible/collapsible.css"],names:[],mappings:"AAMC,sEACC,YACD,CCHD,MACC,yDACD,CAGC,iCAIC,eAAgB,CAChB,aAAc,CAHd,eAAiB,CACjB,qCAAsC,CAFtC,UAoBD,CAdC,uCACC,sBACD,CAEA,wIACC,sBAAuB,CACvB,wBAAyB,CACzB,eACD,CAEA,0CACC,qCAAsC,CACtC,sCACD,CAGD,6CACC,gFACD,CAGC,mEACC,wBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-collapsible.ck-collapsible_collapsed {
	& > .ck-collapsible__children {
		display: none;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-collapsible-arrow-size: calc(0.5 * var(--ck-icon-size));
}

.ck.ck-collapsible {
	& > .ck.ck-button {
		width: 100%;
		font-weight: bold;
		padding: var(--ck-list-button-padding);
		border-radius: 0;
		color: inherit;

		&:focus {
			background: transparent;
		}

		&:active, &:not(:focus), &:hover:not(:focus) {
			background: transparent;
			border-color: transparent;
			box-shadow: none;
		}

		& > .ck-icon {
			margin-right: var(--ck-spacing-medium);
			width: var(--ck-collapsible-arrow-size);
		}
	}

	& > .ck-collapsible__children {
		padding: var(--ck-spacing-medium) var(--ck-spacing-large) var(--ck-spacing-large);
	}

	&.ck-collapsible_collapsed {
		& > .ck.ck-button .ck-icon {
			transform: rotate(-90deg);
		}
	}
}
`],sourceRoot:""}]);const P=x},7317:(L,B,_)=>{_.d(B,{A:()=>P});var q=_(9372),U=_.n(q),H=_(935),x=_.n(H)()(U());x.push([L.id,".ck.ck-color-grid{display:grid}:root{--ck-color-grid-tile-size:24px;--ck-color-color-grid-check-icon:#166fd4}.ck.ck-color-grid{grid-gap:5px;padding:8px}.ck.ck-color-grid__tile{transition:box-shadow .2s ease}@media (forced-colors:none){.ck.ck-color-grid__tile{border:0;height:var(--ck-color-grid-tile-size);min-height:var(--ck-color-grid-tile-size);min-width:var(--ck-color-grid-tile-size);padding:0;width:var(--ck-color-grid-tile-size)}.ck.ck-color-grid__tile.ck-on,.ck.ck-color-grid__tile:focus:not(.ck-disabled),.ck.ck-color-grid__tile:hover:not(.ck-disabled){border:0}.ck.ck-color-grid__tile.ck-color-selector__color-tile_bordered{box-shadow:0 0 0 1px var(--ck-color-base-border)}.ck.ck-color-grid__tile.ck-on{box-shadow:inset 0 0 0 1px var(--ck-color-base-background),0 0 0 2px var(--ck-color-base-text)}.ck.ck-color-grid__tile:focus:not(.ck-disabled),.ck.ck-color-grid__tile:hover:not(.ck-disabled){box-shadow:inset 0 0 0 1px var(--ck-color-base-background),0 0 0 2px var(--ck-color-focus-border)}}@media (forced-colors:active){.ck.ck-color-grid__tile{height:unset;min-height:unset;min-width:unset;padding:0 var(--ck-spacing-small);width:unset}.ck.ck-color-grid__tile .ck-button__label{display:inline-block}}@media (prefers-reduced-motion:reduce){.ck.ck-color-grid__tile{transition:none}}.ck.ck-color-grid__tile.ck-disabled{cursor:unset;transition:unset}.ck.ck-color-grid__tile .ck.ck-icon{color:var(--ck-color-color-grid-check-icon);display:none}.ck.ck-color-grid__tile.ck-on .ck.ck-icon{display:block}.ck.ck-color-grid__label{padding:0 var(--ck-spacing-standard)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/colorgrid/colorgrid.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/colorgrid/colorgrid.css","webpack://./../ckeditor5-ui/theme/mixins/_mediacolors.css"],names:[],mappings:"AAKA,kBACC,YACD,CCCA,MACC,8BAA+B,CAK/B,wCACD,CAEA,kBACC,YAAa,CACb,WACD,CAEA,wBACC,8BAkED,CC3EC,4BACC,wBDgBA,QAAS,CAJT,qCAAsC,CAEtC,yCAA0C,CAD1C,wCAAyC,CAEzC,SAAU,CAJV,oCCTA,CDgBA,8HAIC,QACD,CAEA,+DACC,gDACD,CAEA,8BACC,8FACD,CAEA,gGAEC,iGACD,CCjCD,CAZA,8BACC,wBDqDA,YAAa,CAEb,gBAAiB,CADjB,eAAgB,CAEhB,iCAAkC,CAJlC,WClDA,CDwDA,0CACC,oBACD,CCzDD,CD4DA,uCAhDD,wBAiDE,eAkBF,CAjBC,CAEA,oCACC,YAAa,CACb,gBACD,CAEA,oCAEC,2CAA4C,CAD5C,YAED,CAGC,0CACC,aACD,CAIF,yBACC,oCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-color-grid {
	display: grid;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_mediacolors.css";

:root {
	--ck-color-grid-tile-size: 24px;

	/* Not using global colors here because these may change but some colors in a pallette
	 * require special treatment. For instance, this ensures no matter what the UI text color is,
	 * the check icon will look good on the black color tile. */
	--ck-color-color-grid-check-icon: hsl(212, 81%, 46%);
}

.ck.ck-color-grid {
	grid-gap: 5px;
	padding: 8px;
}

.ck.ck-color-grid__tile {
	transition: .2s ease box-shadow;

	@mixin ck-media-default-colors {
		width: var(--ck-color-grid-tile-size);
		height: var(--ck-color-grid-tile-size);
		min-width: var(--ck-color-grid-tile-size);
		min-height: var(--ck-color-grid-tile-size);
		padding: 0;
		border: 0;

		&.ck-on,
		&:focus:not( .ck-disabled ),
		&:hover:not( .ck-disabled ) {
			/* Disable the default .ck-button's border ring. */
			border: 0;
		}

		&.ck-color-selector__color-tile_bordered {
			box-shadow: 0 0 0 1px var(--ck-color-base-border);
		}

		&.ck-on {
			box-shadow: inset 0 0 0 1px var(--ck-color-base-background), 0 0 0 2px var(--ck-color-base-text);
		}

		&:focus:not( .ck-disabled ),
		&:hover:not( .ck-disabled ) {
			box-shadow: inset 0 0 0 1px var(--ck-color-base-background), 0 0 0 2px var(--ck-color-focus-border);
		}
	}

	/*
	 * In high contrast mode, the colors are replaced with text labels.
	 * See https://github.com/ckeditor/ckeditor5/issues/14907.
	 */
	@mixin ck-media-forced-colors {
		width: unset;
		height: unset;
		min-width: unset;
		min-height: unset;
		padding: 0 var(--ck-spacing-small);

		& .ck-button__label {
			display: inline-block;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		transition: none;
	}

	&.ck-disabled {
		cursor: unset;
		transition: unset;
	}

	& .ck.ck-icon {
		display: none;
		color: var(--ck-color-color-grid-check-icon);
	}

	&.ck-on {
		& .ck.ck-icon {
			display: block;
		}
	}
}

.ck.ck-color-grid__label {
	padding: 0 var(--ck-spacing-standard);
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-forced-colors {
	@media (forced-colors: active) {
		& {
			@mixin-content;
		}
	}
}

@define-mixin ck-media-default-colors {
	@media (forced-colors: none) {
		& {
			@mixin-content;
		}
	}
}
`],sourceRoot:""}]);const P=x},1905:(L,B,_)=>{_.d(B,{A:()=>P});var q=_(9372),U=_.n(q),H=_(935),x=_.n(H)()(U());x.push([L.id,".color-picker-hex-input{width:max-content}.color-picker-hex-input .ck.ck-input{min-width:unset}.ck.ck-color-picker__row{display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-between;margin:var(--ck-spacing-large) 0 0;width:unset}.ck.ck-color-picker__row .ck.ck-labeled-field-view{padding-top:unset}.ck.ck-color-picker__row .ck.ck-input-text{width:unset}.ck.ck-color-picker__row .ck-color-picker__hash-view{padding-right:var(--ck-spacing-medium);padding-top:var(--ck-spacing-tiny)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/colorpicker/colorpicker.css"],names:[],mappings:"AAKA,wBACC,iBAKD,CAHC,qCACC,eACD,CAGD,yBACC,YAAa,CACb,kBAAmB,CACnB,gBAAiB,CACjB,6BAA8B,CAC9B,kCAAmC,CACnC,WAcD,CAZC,mDACC,iBACD,CAEA,2CACC,WACD,CAEA,qDAEC,sCAAuC,CADvC,kCAED",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.color-picker-hex-input {
	width: max-content;

	& .ck.ck-input {
		min-width: unset;
	}
}

.ck.ck-color-picker__row {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content: space-between;
	margin: var(--ck-spacing-large) 0 0;
	width: unset;

	& .ck.ck-labeled-field-view {
		padding-top: unset;
	}

	& .ck.ck-input-text {
		width: unset;
	}

	& .ck-color-picker__hash-view {
		padding-top: var(--ck-spacing-tiny);
		padding-right: var(--ck-spacing-medium);
	}
}
`],sourceRoot:""}]);const P=x},6309:(L,B,_)=>{_.d(B,{A:()=>P});var q=_(9372),U=_.n(q),H=_(935),x=_.n(H)()(U());x.push([L.id,".ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__color-picker,.ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__remove-color{align-items:center;display:flex}[dir=rtl] .ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__color-picker,[dir=rtl] .ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__remove-color{justify-content:flex-start}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-selector_action-bar{display:flex;flex-direction:row;justify-content:space-around}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-selector_action-bar .ck-button-cancel,.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-selector_action-bar .ck-button-save{flex:1}.ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__color-picker,.ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__remove-color{width:100%}.ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__color-picker{border-bottom-left-radius:0;border-bottom-right-radius:0;padding:calc(var(--ck-spacing-standard)/2) var(--ck-spacing-standard)}.ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__color-picker:not(:focus){border-top:1px solid var(--ck-color-base-border)}[dir=ltr] .ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__color-picker .ck.ck-icon{margin-right:var(--ck-spacing-standard)}[dir=rtl] .ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__color-picker .ck.ck-icon{margin-left:var(--ck-spacing-standard)}.ck.ck-color-selector .ck-color-grids-fragment label.ck.ck-color-grid__label{font-weight:unset}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-picker{padding:8px}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-picker .hex-color-picker{height:100px;min-width:180px}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-picker .hex-color-picker::part(saturation){border-radius:var(--ck-border-radius) var(--ck-border-radius) 0 0}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-picker .hex-color-picker::part(hue){border-radius:0 0 var(--ck-border-radius) var(--ck-border-radius)}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-picker .hex-color-picker::part(hue-pointer),.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-picker .hex-color-picker::part(saturation-pointer){height:15px;width:15px}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-selector_action-bar{padding:0 8px 8px}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/colorselector/colorselector.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/colorselector/colorselector.css"],names:[],mappings:"AAUE,oLAGC,kBAAmB,CADnB,YAMD,CARA,wMAME,0BAEF,CAKA,iFACC,YAAa,CACb,kBAAmB,CACnB,4BAMD,CAJC,oMAEC,MACD,CCrBD,oLAEC,UACD,CAEA,0FAEC,2BAA4B,CAC5B,4BAA6B,CAF7B,qEAiBD,CAbC,sGACC,gDACD,CAEA,gHAEE,uCAMF,CARA,gHAME,sCAEF,CAGD,6EACC,iBACD,CAKA,oEACC,WAoBD,CAlBC,sFACC,YAAa,CACb,eAeD,CAbC,wGACC,iEACD,CAEA,iGACC,iEACD,CAEA,yNAGC,WAAY,CADZ,UAED,CAIF,iFACC,iBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck.ck-color-selector {
	/* View fragment with color grids. */
	& .ck-color-grids-fragment {
		& .ck-button.ck-color-selector__remove-color,
		& .ck-button.ck-color-selector__color-picker {
			display: flex;
			align-items: center;

			@mixin ck-dir rtl {
				justify-content: flex-start;
			}
		}
	}

	/* View fragment with a color picker. */
	& .ck-color-picker-fragment {
		& .ck.ck-color-selector_action-bar {
			display: flex;
			flex-direction: row;
			justify-content: space-around;

			& .ck-button-save,
			& .ck-button-cancel {
				flex: 1
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck.ck-color-selector {
	/* View fragment with color grids. */
	& .ck-color-grids-fragment {
		& .ck-button.ck-color-selector__remove-color,
		& .ck-button.ck-color-selector__color-picker {
			width: 100%;
		}

		& .ck-button.ck-color-selector__color-picker {
			padding: calc(var(--ck-spacing-standard) / 2) var(--ck-spacing-standard);
			border-bottom-left-radius: 0;
			border-bottom-right-radius: 0;

			&:not(:focus) {
				border-top: 1px solid var(--ck-color-base-border);
			}

			& .ck.ck-icon {
				@mixin ck-dir ltr {
					margin-right: var(--ck-spacing-standard);
				}

				@mixin ck-dir rtl {
					margin-left: var(--ck-spacing-standard);
				}
			}
		}

		& label.ck.ck-color-grid__label {
			font-weight: unset;
		}
	}

	/* View fragment with a color picker. */
	& .ck-color-picker-fragment {
		& .ck.ck-color-picker {
			padding: 8px;

			& .hex-color-picker {
				height: 100px;
				min-width: 180px;

				&::part(saturation) {
					border-radius: var(--ck-border-radius) var(--ck-border-radius) 0 0;
				}

				&::part(hue) {
					border-radius: 0 0 var(--ck-border-radius) var(--ck-border-radius);
				}

				&::part(saturation-pointer),
				&::part(hue-pointer) {
					width: 15px;
					height: 15px;
				}
			}
		}

		& .ck.ck-color-selector_action-bar {
			padding: 0 8px 8px;
		}
	}
}
`],sourceRoot:""}]);const P=x},9819:(L,B,_)=>{_.d(B,{A:()=>P});var q=_(9372),U=_.n(q),H=_(935),x=_.n(H)()(U());x.push([L.id,".ck.ck-dialog-overlay{bottom:0;left:0;overscroll-behavior:none;position:fixed;right:0;top:0;user-select:none}.ck.ck-dialog-overlay.ck-dialog-overlay__transparent{animation:none;background:none;pointer-events:none}.ck.ck-dialog{overscroll-behavior:none;position:absolute;width:fit-content}.ck.ck-dialog .ck.ck-form__header{flex-shrink:0}.ck.ck-dialog .ck.ck-form__header .ck-form__header__label{cursor:grab}.ck.ck-dialog-overlay.ck-dialog-overlay__transparent .ck.ck-dialog{pointer-events:all}:root{--ck-dialog-overlay-background-color:rgba(0,0,0,.5);--ck-dialog-drop-shadow:0px 0px 6px 2px rgba(0,0,0,.15);--ck-dialog-max-width:100vw;--ck-dialog-max-height:90vh;--ck-color-dialog-background:var(--ck-color-base-background);--ck-color-dialog-form-header-border:var(--ck-color-base-border)}.ck.ck-dialog-overlay{animation:ck-dialog-fade-in .3s;background:var(--ck-dialog-overlay-background-color);z-index:var(--ck-z-dialog)}.ck.ck-dialog{border-radius:0}.ck-rounded-corners .ck.ck-dialog,.ck.ck-dialog.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-dialog{box-shadow:var(--ck-drop-shadow),0 0;--ck-drop-shadow:var(--ck-dialog-drop-shadow);background:var(--ck-color-dialog-background);border:1px solid var(--ck-color-base-border);max-height:var(--ck-dialog-max-height);max-width:var(--ck-dialog-max-width)}.ck.ck-dialog .ck.ck-form__header{border-bottom:1px solid var(--ck-color-dialog-form-header-border)}@keyframes ck-dialog-fade-in{0%{background:transparent}to{background:var(--ck-dialog-overlay-background-color)}}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/dialog/dialog.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dialog/dialog.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAKA,sBAKC,QAAS,CACT,MAAO,CAJP,wBAAyB,CAEzB,cAAe,CAGf,OAAQ,CACR,KAAM,CAPN,gBAcD,CALC,qDAEC,cAAe,CACf,eAAgB,CAFhB,mBAGD,CAGD,cACC,wBAAyB,CAEzB,iBAAkB,CADlB,iBAcD,CAXC,kCACC,aAKD,CAHC,0DACC,WACD,CAVF,mEAcE,kBAEF,CC7BA,MACC,mDAA2D,CAC3D,uDAA8D,CAC9D,2BAA4B,CAC5B,2BAA4B,CAC5B,4DAA6D,CAC7D,gEACD,CAEA,sBACC,+BAAgC,CAChC,oDAAqD,CACrD,0BACD,CAEA,cCbC,eD2BD,CAdA,mECTE,qCDuBF,CAdA,cEfC,oCAA8B,CFmB9B,6CAA8C,CAE9C,4CAA6C,CAG7C,4CAA6C,CAF7C,sCAAuC,CACvC,oCAMD,CAHC,kCACC,iEACD,CAGD,6BACC,GACC,sBACD,CAEA,GACC,oDACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-dialog-overlay {
	user-select: none;
	overscroll-behavior: none;

	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;
	top: 0;

	&.ck-dialog-overlay__transparent {
		pointer-events: none;
		animation: none;
		background: none;
	}
}

.ck.ck-dialog {
	overscroll-behavior: none;
	width: fit-content;
	position: absolute;

	& .ck.ck-form__header  {
		flex-shrink: 0;

		& .ck-form__header__label {
			cursor: grab;
		}
	}

	@nest .ck.ck-dialog-overlay.ck-dialog-overlay__transparent & {
		pointer-events: all;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_shadow.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

:root {
	--ck-dialog-overlay-background-color: hsla( 0, 0%, 0%, .5 );
	--ck-dialog-drop-shadow: 0px 0px 6px 2px hsl(0deg 0% 0% / 15%);
	--ck-dialog-max-width: 100vw;
	--ck-dialog-max-height: 90vh;
	--ck-color-dialog-background: var(--ck-color-base-background);
	--ck-color-dialog-form-header-border: var(--ck-color-base-border);
}

.ck.ck-dialog-overlay {
	animation: ck-dialog-fade-in .3s;
	background: var(--ck-dialog-overlay-background-color);
	z-index: var(--ck-z-dialog);
}

.ck.ck-dialog {
	@mixin ck-rounded-corners;
	@mixin ck-drop-shadow;

	--ck-drop-shadow: var(--ck-dialog-drop-shadow);

	background: var(--ck-color-dialog-background);
	max-height: var(--ck-dialog-max-height);
	max-width: var(--ck-dialog-max-width);
	border: 1px solid var(--ck-color-base-border);

	& .ck.ck-form__header {
		border-bottom: 1px solid var(--ck-color-dialog-form-header-border);
	}
}

@keyframes ck-dialog-fade-in {
	0% {
		background: hsla( 0, 0%, 0%, 0 );
	}

	100% {
		background: var(--ck-dialog-overlay-background-color);
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const P=x},9822:(L,B,_)=>{_.d(B,{A:()=>P});var q=_(9372),U=_.n(q),H=_(935),x=_.n(H)()(U());x.push([L.id,".ck.ck-dialog .ck.ck-dialog__actions{display:flex;justify-content:flex-end;padding:var(--ck-spacing-large)}.ck.ck-dialog .ck.ck-dialog__actions>*+*{margin-left:var(--ck-spacing-large)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/dialog/dialogactions.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dialog/dialogactions.css"],names:[],mappings:"AAMC,qCACC,YAAa,CACb,wBAAyB,CCDzB,+BDED,CCAC,yCACC,mCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-dialog {
	& .ck.ck-dialog__actions {
		display: flex;
		justify-content: flex-end;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-dialog {
	& .ck.ck-dialog__actions {
		padding: var(--ck-spacing-large);

		& > * + * {
			margin-left: var(--ck-spacing-large);
		}
	}
}
`],sourceRoot:""}]);const P=x},8149:(L,B,_)=>{_.d(B,{A:()=>P});var q=_(9372),U=_.n(q),H=_(935),x=_.n(H)()(U());x.push([L.id,":root{--ck-dropdown-max-width:75vw}.ck.ck-dropdown{display:inline-block;position:relative}.ck.ck-dropdown .ck-dropdown__arrow{pointer-events:none;z-index:var(--ck-z-default)}.ck.ck-dropdown .ck-button.ck-dropdown__button{width:100%}.ck.ck-dropdown .ck-dropdown__panel{display:none;max-width:var(--ck-dropdown-max-width);position:absolute;z-index:var(--ck-z-panel)}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel-visible{display:inline-block}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_n,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_ne,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nme,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nmw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nw{bottom:100%}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_s,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_se,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sme,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_smw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sw{bottom:auto;top:100%}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_ne,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_se{left:0}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sw{right:0}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_n,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_s{left:50%;transform:translateX(-50%)}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nmw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_smw{left:75%;transform:translateX(-75%)}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nme,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sme{left:25%;transform:translateX(-25%)}.ck.ck-toolbar .ck-dropdown__panel{z-index:calc(var(--ck-z-panel) + 1)}:root{--ck-dropdown-arrow-size:calc(var(--ck-icon-size)*0.5)}.ck.ck-dropdown{font-size:inherit}.ck.ck-dropdown .ck-dropdown__arrow{width:var(--ck-dropdown-arrow-size)}[dir=ltr] .ck.ck-dropdown .ck-dropdown__arrow{margin-left:var(--ck-spacing-standard);right:var(--ck-spacing-standard)}[dir=rtl] .ck.ck-dropdown .ck-dropdown__arrow{left:var(--ck-spacing-standard);margin-right:var(--ck-spacing-small)}.ck.ck-dropdown.ck-disabled .ck-dropdown__arrow{opacity:var(--ck-disabled-opacity)}[dir=ltr] .ck.ck-dropdown .ck-button.ck-dropdown__button:not(.ck-button_with-text){padding-left:var(--ck-spacing-small)}[dir=rtl] .ck.ck-dropdown .ck-button.ck-dropdown__button:not(.ck-button_with-text){padding-right:var(--ck-spacing-small)}.ck.ck-dropdown .ck-button.ck-dropdown__button .ck-button__label{overflow:hidden;text-overflow:ellipsis;width:7em}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-disabled .ck-button__label{opacity:var(--ck-disabled-opacity)}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-on{border-bottom-left-radius:0;border-bottom-right-radius:0}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-dropdown__button_label-width_auto .ck-button__label{width:auto}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-off:active,.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-on:active{box-shadow:none}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-off:active:focus,.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-on:active:focus{box-shadow:var(--ck-focus-outer-shadow),0 0}.ck.ck-dropdown__panel{border-radius:0}.ck-rounded-corners .ck.ck-dropdown__panel,.ck.ck-dropdown__panel.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-dropdown__panel{background:var(--ck-color-dropdown-panel-background);border:1px solid var(--ck-color-dropdown-panel-border);bottom:0;box-shadow:var(--ck-drop-shadow),0 0;min-width:100%}.ck.ck-dropdown__panel.ck-dropdown__panel_se{border-top-left-radius:0}.ck.ck-dropdown__panel.ck-dropdown__panel_sw{border-top-right-radius:0}.ck.ck-dropdown__panel.ck-dropdown__panel_ne{border-bottom-left-radius:0}.ck.ck-dropdown__panel.ck-dropdown__panel_nw{border-bottom-right-radius:0}.ck.ck-dropdown__panel:focus{outline:none}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/dropdown/dropdown.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/dropdown.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_disabled.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAKA,MACC,4BACD,CAEA,gBACC,oBAAqB,CACrB,iBA2ED,CAzEC,oCACC,mBAAoB,CACpB,2BACD,CAGA,+CACC,UACD,CAEA,oCACC,YAAa,CAEb,sCAAuC,CAEvC,iBAAkB,CAHlB,yBA4DD,CAvDC,+DACC,oBACD,CAEA,mSAKC,WACD,CAEA,mSAUC,WAAY,CADZ,QAED,CAEA,oHAEC,MACD,CAEA,oHAEC,OACD,CAEA,kHAGC,QAAS,CACT,0BACD,CAEA,sHAGC,QAAS,CACT,0BACD,CAEA,sHAGC,QAAS,CACT,0BACD,CAQF,mCACC,mCACD,CCpFA,MACC,sDACD,CAEA,gBAEC,iBA2ED,CAzEC,oCACC,mCACD,CAGC,8CAIC,sCAAuC,CAHvC,gCAID,CAIA,8CACC,+BAAgC,CAGhC,oCACD,CAGD,gDC/BA,kCDiCA,CAIE,mFAEC,oCACD,CAIA,mFAEC,qCACD,CAID,iEAEC,eAAgB,CAChB,sBAAuB,CAFvB,SAGD,CAGA,6EC1DD,kCD4DC,CAGA,qDACC,2BAA4B,CAC5B,4BACD,CAEA,sGACC,UACD,CAGA,yHAEC,eAKD,CAHC,qIE7EF,2CF+EE,CAKH,uBGlFC,eHkHD,CAhCA,qFG9EE,qCH8GF,CAhCA,uBAIC,oDAAqD,CACrD,sDAAuD,CACvD,QAAS,CE1FT,oCAA8B,CF6F9B,cAuBD,CAnBC,6CACC,wBACD,CAEA,6CACC,yBACD,CAEA,6CACC,2BACD,CAEA,6CACC,4BACD,CAEA,6BACC,YACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-dropdown-max-width: 75vw;
}

.ck.ck-dropdown {
	display: inline-block;
	position: relative;

	& .ck-dropdown__arrow {
		pointer-events: none;
		z-index: var(--ck-z-default);
	}

	/* Dropdown button should span horizontally, e.g. in vertical toolbars */
	& .ck-button.ck-dropdown__button {
		width: 100%;
	}

	& .ck-dropdown__panel {
		display: none;
		z-index: var(--ck-z-panel);
		max-width: var(--ck-dropdown-max-width);

		position: absolute;

		&.ck-dropdown__panel-visible {
			display: inline-block;
		}

		&.ck-dropdown__panel_ne,
		&.ck-dropdown__panel_nw,
		&.ck-dropdown__panel_n,
		&.ck-dropdown__panel_nmw,
		&.ck-dropdown__panel_nme {
			bottom: 100%;
		}

		&.ck-dropdown__panel_se,
		&.ck-dropdown__panel_sw,
		&.ck-dropdown__panel_smw,
		&.ck-dropdown__panel_sme,
		&.ck-dropdown__panel_s {
			/*
			 * Using transform: translate3d( 0, 100%, 0 ) causes blurry dropdown on Chrome 67-78+ on non-retina displays.
			 * See https://github.com/ckeditor/ckeditor5/issues/1053.
			 */
			top: 100%;
			bottom: auto;
		}

		&.ck-dropdown__panel_ne,
		&.ck-dropdown__panel_se {
			left: 0px;
		}

		&.ck-dropdown__panel_nw,
		&.ck-dropdown__panel_sw {
			right: 0px;
		}

		&.ck-dropdown__panel_s,
		&.ck-dropdown__panel_n {
			/* Positioning panels relative to the center of the button */
			left: 50%;
			transform: translateX(-50%);
		}

		&.ck-dropdown__panel_nmw,
		&.ck-dropdown__panel_smw {
			/* Positioning panels relative to the middle-west of the button */
			left: 75%;
			transform: translateX(-75%);
		}

		&.ck-dropdown__panel_nme,
		&.ck-dropdown__panel_sme {
			/* Positioning panels relative to the middle-east of the button */
			left: 25%;
			transform: translateX(-25%);
		}
	}
}

/*
 * Toolbar dropdown panels should be always above the UI (eg. other dropdown panels) from the editor's content.
 * See https://github.com/ckeditor/ckeditor5/issues/7874
 */
.ck.ck-toolbar .ck-dropdown__panel {
	z-index: calc( var(--ck-z-panel) + 1 );
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_disabled.css";
@import "../../../mixins/_shadow.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

:root {
	--ck-dropdown-arrow-size: calc(0.5 * var(--ck-icon-size));
}

.ck.ck-dropdown {
	/* Enable font size inheritance, which allows fluid UI scaling. */
	font-size: inherit;

	& .ck-dropdown__arrow {
		width: var(--ck-dropdown-arrow-size);
	}

	@mixin ck-dir ltr {
		& .ck-dropdown__arrow {
			right: var(--ck-spacing-standard);

			/* A space to accommodate the triangle. */
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-dir rtl {
		& .ck-dropdown__arrow {
			left: var(--ck-spacing-standard);

			/* A space to accommodate the triangle. */
			margin-right: var(--ck-spacing-small);
		}
	}

	&.ck-disabled .ck-dropdown__arrow {
		@mixin ck-disabled;
	}

	& .ck-button.ck-dropdown__button {
		@mixin ck-dir ltr {
			&:not(.ck-button_with-text) {
				/* Make sure dropdowns with just an icon have the right inner spacing */
				padding-left: var(--ck-spacing-small);
			}
		}

		@mixin ck-dir rtl {
			&:not(.ck-button_with-text) {
				/* Make sure dropdowns with just an icon have the right inner spacing */
				padding-right: var(--ck-spacing-small);
			}
		}

		/* #23 */
		& .ck-button__label {
			width: 7em;
			overflow: hidden;
			text-overflow: ellipsis;
		}

		/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/70 */
		&.ck-disabled .ck-button__label {
			@mixin ck-disabled;
		}

		/* https://github.com/ckeditor/ckeditor5/issues/816 */
		&.ck-on {
			border-bottom-left-radius: 0;
			border-bottom-right-radius: 0;
		}

		&.ck-dropdown__button_label-width_auto .ck-button__label {
			width: auto;
		}

		/* https://github.com/ckeditor/ckeditor5/issues/8699 */
		&.ck-off:active,
		&.ck-on:active {
			box-shadow: none;

			&:focus {
				@mixin ck-box-shadow var(--ck-focus-outer-shadow);
			}
		}
	}
}

.ck.ck-dropdown__panel {
	@mixin ck-rounded-corners;
	@mixin ck-drop-shadow;

	background: var(--ck-color-dropdown-panel-background);
	border: 1px solid var(--ck-color-dropdown-panel-border);
	bottom: 0;

	/* Make sure the panel is at least as wide as the drop-down's button. */
	min-width: 100%;

	/* Disabled corner border radius to be consistent with the .dropdown__button
	https://github.com/ckeditor/ckeditor5/issues/816 */
	&.ck-dropdown__panel_se {
		border-top-left-radius: 0;
	}

	&.ck-dropdown__panel_sw {
		border-top-right-radius: 0;
	}

	&.ck-dropdown__panel_ne {
		border-bottom-left-radius: 0;
	}

	&.ck-dropdown__panel_nw {
		border-bottom-right-radius: 0;
	}

	&:focus {
		outline: none;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class which indicates that an element holding it is disabled.
 */
@define-mixin ck-disabled {
	opacity: var(--ck-disabled-opacity);
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const P=x},3629:(L,B,_)=>{_.d(B,{A:()=>P});var q=_(9372),U=_.n(q),H=_(935),x=_.n(H)()(U());x.push([L.id,".ck.ck-dropdown>.ck-dropdown__panel>.ck-list{border-radius:0}.ck-rounded-corners .ck.ck-dropdown>.ck-dropdown__panel>.ck-list,.ck.ck-dropdown>.ck-dropdown__panel>.ck-list.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0}.ck.ck-dropdown>.ck-dropdown__panel>.ck-list .ck-list__item:first-child>.ck-button{border-radius:0}.ck-rounded-corners .ck.ck-dropdown>.ck-dropdown__panel>.ck-list .ck-list__item:first-child>.ck-button,.ck.ck-dropdown>.ck-dropdown__panel>.ck-list .ck-list__item:first-child>.ck-button.ck-rounded-corners{border-radius:var(--ck-border-radius);border-bottom-left-radius:0;border-bottom-right-radius:0;border-top-left-radius:0}.ck.ck-dropdown>.ck-dropdown__panel>.ck-list .ck-list__item:last-child>.ck-button{border-radius:0}.ck-rounded-corners .ck.ck-dropdown>.ck-dropdown__panel>.ck-list .ck-list__item:last-child>.ck-button,.ck.ck-dropdown>.ck-dropdown__panel>.ck-list .ck-list__item:last-child>.ck-button.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0;border-top-right-radius:0}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/listdropdown.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAOA,6CCIC,eDqBD,CAzBA,iICQE,qCAAsC,CDJtC,wBAqBF,CAfE,mFCND,eDYC,CANA,6MCFA,qCAAsC,CDKpC,2BAA4B,CAC5B,4BAA6B,CAF7B,wBAIF,CAEA,kFCdD,eDmBC,CALA,2MCVA,qCAAsC,CDYpC,wBAAyB,CACzB,yBAEF",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";

.ck.ck-dropdown > .ck-dropdown__panel > .ck-list {
	/* Disabled radius of top-left border to be consistent with .dropdown__button
	https://github.com/ckeditor/ckeditor5/issues/816 */
	@mixin ck-rounded-corners {
		border-top-left-radius: 0;
	}

	/* Make sure the button belonging to the first/last child of the list goes well with the
	border radius of the entire panel. */
	& .ck-list__item {
		&:first-child > .ck-button {
			@mixin ck-rounded-corners {
				border-top-left-radius: 0;
				border-bottom-left-radius: 0;
				border-bottom-right-radius: 0;
			}
		}

		&:last-child > .ck-button {
			@mixin ck-rounded-corners {
				border-top-left-radius: 0;
				border-top-right-radius: 0;
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const P=x},1792:(L,B,_)=>{_.d(B,{A:()=>P});var q=_(9372),U=_.n(q),H=_(935),x=_.n(H)()(U());x.push([L.id,'.ck.ck-splitbutton{font-size:inherit}.ck.ck-splitbutton .ck-splitbutton__action:focus{z-index:calc(var(--ck-z-default) + 1)}:root{--ck-color-split-button-hover-background:#ebebeb;--ck-color-split-button-hover-border:#b3b3b3}[dir=ltr] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__action,[dir=ltr] .ck.ck-splitbutton:hover>.ck-splitbutton__action{border-bottom-right-radius:unset;border-top-right-radius:unset}[dir=rtl] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__action,[dir=rtl] .ck.ck-splitbutton:hover>.ck-splitbutton__action{border-bottom-left-radius:unset;border-top-left-radius:unset}.ck.ck-splitbutton>.ck-splitbutton__arrow{min-width:unset}[dir=ltr] .ck.ck-splitbutton>.ck-splitbutton__arrow{border-bottom-left-radius:unset;border-top-left-radius:unset}[dir=rtl] .ck.ck-splitbutton>.ck-splitbutton__arrow{border-bottom-right-radius:unset;border-top-right-radius:unset}.ck.ck-splitbutton>.ck-splitbutton__arrow svg{width:var(--ck-dropdown-arrow-size)}.ck.ck-splitbutton>.ck-splitbutton__arrow:not(:focus){border-bottom-width:0;border-top-width:0}.ck.ck-splitbutton.ck-splitbutton_open>.ck-button:not(.ck-on):not(.ck-disabled):not(:hover),.ck.ck-splitbutton:hover>.ck-button:not(.ck-on):not(.ck-disabled):not(:hover){background:var(--ck-color-split-button-hover-background)}.ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,.ck.ck-splitbutton:hover>.ck-splitbutton__arrow:not(.ck-disabled):after{background-color:var(--ck-color-split-button-hover-border);content:"";height:100%;position:absolute;width:1px}.ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:focus:after,.ck.ck-splitbutton:hover>.ck-splitbutton__arrow:focus:after{--ck-color-split-button-hover-border:var(--ck-color-focus-border)}[dir=ltr] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,[dir=ltr] .ck.ck-splitbutton:hover>.ck-splitbutton__arrow:not(.ck-disabled):after{left:-1px}[dir=rtl] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,[dir=rtl] .ck.ck-splitbutton:hover>.ck-splitbutton__arrow:not(.ck-disabled):after{right:-1px}.ck.ck-splitbutton.ck-splitbutton_open{border-radius:0}.ck-rounded-corners .ck.ck-splitbutton.ck-splitbutton_open,.ck.ck-splitbutton.ck-splitbutton_open.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck-rounded-corners .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__action,.ck.ck-splitbutton.ck-splitbutton_open.ck-rounded-corners>.ck-splitbutton__action{border-bottom-left-radius:0}.ck-rounded-corners .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow,.ck.ck-splitbutton.ck-splitbutton_open.ck-rounded-corners>.ck-splitbutton__arrow{border-bottom-right-radius:0}',"",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/dropdown/splitbutton.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/splitbutton.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAKA,mBAEC,iBAKD,CAHC,iDACC,qCACD,CCJD,MACC,gDAAyD,CACzD,4CACD,CAMC,oIAKE,gCAAiC,CADjC,6BASF,CAbA,oIAWE,+BAAgC,CADhC,4BAGF,CAEA,0CAGC,eAiBD,CApBA,oDAQE,+BAAgC,CADhC,4BAaF,CApBA,oDAcE,gCAAiC,CADjC,6BAOF,CAHC,8CACC,mCACD,CAKD,sDAEC,qBAAwB,CADxB,kBAED,CAQC,0KACC,wDACD,CAIA,8JAKC,0DAA2D,CAJ3D,UAAW,CAGX,WAAY,CAFZ,iBAAkB,CAClB,SAGD,CAGA,sIACC,iEACD,CAGC,kLACC,SACD,CAIA,kLACC,UACD,CAMF,uCCzFA,eDmGA,CAVA,qHCrFC,qCD+FD,CARE,qKACC,2BACD,CAEA,mKACC,4BACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-splitbutton {
	/* Enable font size inheritance, which allows fluid UI scaling. */
	font-size: inherit;

	& .ck-splitbutton__action:focus {
		z-index: calc(var(--ck-z-default) + 1);
	}
}

`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";

:root {
	--ck-color-split-button-hover-background: hsl(0, 0%, 92%);
	--ck-color-split-button-hover-border: hsl(0, 0%, 70%);
}

.ck.ck-splitbutton {
	/*
	 * Note: ck-rounded and ck-dir mixins don't go together (because they both use @nest).
	 */
	&:hover > .ck-splitbutton__action,
	&.ck-splitbutton_open > .ck-splitbutton__action {
		@nest [dir="ltr"] & {
			/* Don't round the action button on the right side */
			border-top-right-radius: unset;
			border-bottom-right-radius: unset;
		}

		@nest [dir="rtl"] & {
			/* Don't round the action button on the left side */
			border-top-left-radius: unset;
			border-bottom-left-radius: unset;
		}
	}

	& > .ck-splitbutton__arrow {
		/* It's a text-less button and since the icon is positioned absolutely in such situation,
		it must get some arbitrary min-width. */
		min-width: unset;

		@nest [dir="ltr"] & {
			/* Don't round the arrow button on the left side */
			border-top-left-radius: unset;
			border-bottom-left-radius: unset;
		}

		@nest [dir="rtl"] & {
			/* Don't round the arrow button on the right side */
			border-top-right-radius: unset;
			border-bottom-right-radius: unset;
		}

		& svg {
			width: var(--ck-dropdown-arrow-size);
		}
	}

	/* Make sure the divider stretches 100% height of the button
	https://github.com/ckeditor/ckeditor5/issues/10936 */
	& > .ck-splitbutton__arrow:not(:focus) {
		border-top-width: 0px;
		border-bottom-width: 0px;
	}

	/* When the split button is "open" (the arrow is on) or being hovered, it should get some styling
	as a whole. The background of both buttons should stand out and there should be a visual
	separation between both buttons. */
	&.ck-splitbutton_open,
	&:hover {
		/* When the split button hovered as a whole, not as individual buttons. */
		& > .ck-button:not(.ck-on):not(.ck-disabled):not(:hover) {
			background: var(--ck-color-split-button-hover-background);
		}

		/* Splitbutton separator needs to be set with the ::after pseudoselector
		to display properly the borders on focus */
		& > .ck-splitbutton__arrow:not(.ck-disabled)::after {
			content: '';
			position: absolute;
			width: 1px;
			height: 100%;
			background-color: var(--ck-color-split-button-hover-border);
		}

		/* Make sure the divider between the buttons looks fine when the button is focused */
		& > .ck-splitbutton__arrow:focus::after {
			--ck-color-split-button-hover-border: var(--ck-color-focus-border);
		}

		@nest [dir="ltr"] & {
			& > .ck-splitbutton__arrow:not(.ck-disabled)::after {
				left: -1px;
			}
		}

		@nest [dir="rtl"] & {
			& > .ck-splitbutton__arrow:not(.ck-disabled)::after {
				right: -1px;
			}
		}
	}

	/* Don't round the bottom left and right corners of the buttons when "open"
	https://github.com/ckeditor/ckeditor5/issues/816 */
	&.ck-splitbutton_open {
		@mixin ck-rounded-corners {
			& > .ck-splitbutton__action {
				border-bottom-left-radius: 0;
			}

			& > .ck-splitbutton__arrow {
				border-bottom-right-radius: 0;
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const P=x},1666:(L,B,_)=>{_.d(B,{A:()=>P});var q=_(9372),U=_.n(q),H=_(935),x=_.n(H)()(U());x.push([L.id,":root{--ck-toolbar-dropdown-max-width:60vw}.ck.ck-toolbar-dropdown>.ck-dropdown__panel{max-width:var(--ck-toolbar-dropdown-max-width);width:max-content}.ck.ck-toolbar-dropdown>.ck-dropdown__panel .ck-button:focus{z-index:calc(var(--ck-z-default) + 1)}.ck.ck-toolbar-dropdown .ck-toolbar{border:0}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/dropdown/toolbardropdown.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/toolbardropdown.css"],names:[],mappings:"AAKA,MACC,oCACD,CAEA,4CAGC,8CAA+C,CAD/C,iBAQD,CAJE,6DACC,qCACD,CCZF,oCACC,QACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-toolbar-dropdown-max-width: 60vw;
}

.ck.ck-toolbar-dropdown > .ck-dropdown__panel {
	/* https://github.com/ckeditor/ckeditor5/issues/5586 */
	width: max-content;
	max-width: var(--ck-toolbar-dropdown-max-width);

	& .ck-button {
		&:focus {
			z-index: calc(var(--ck-z-default) + 1);
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-toolbar-dropdown .ck-toolbar {
	border: 0;
}
`],sourceRoot:""}]);const P=x},8527:(L,B,_)=>{_.d(B,{A:()=>P});var q=_(9372),U=_.n(q),H=_(935),x=_.n(H)()(U());x.push([L.id,":root{--ck-accessibility-help-dialog-max-width:600px;--ck-accessibility-help-dialog-max-height:400px;--ck-accessibility-help-dialog-border-color:#ccced1;--ck-accessibility-help-dialog-code-background-color:#ededed;--ck-accessibility-help-dialog-kbd-shadow-color:#9c9c9c}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content{border:1px solid transparent;max-height:var(--ck-accessibility-help-dialog-max-height);max-width:var(--ck-accessibility-help-dialog-max-width);overflow:auto;padding:var(--ck-spacing-large);user-select:text}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content:focus{border:var(--ck-focus-ring);box-shadow:var(--ck-focus-outer-shadow),0 0;outline:none}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content{*{white-space:normal}}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content .ck-label{display:none}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content h3{font-size:1.2em;font-weight:700}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content h4{font-size:1em;font-weight:700}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content h3,.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content h4,.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content p,.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content table{margin:1em 0}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content dl{border-bottom:none;border-top:1px solid var(--ck-accessibility-help-dialog-border-color);display:grid;grid-template-columns:2fr 1fr}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content dl dd,.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content dl dt{border-bottom:1px solid var(--ck-accessibility-help-dialog-border-color);padding:.4em 0}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content dl dt{grid-column-start:1}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content dl dd{grid-column-start:2;text-align:right}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content code,.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content kbd{background:var(--ck-accessibility-help-dialog-code-background-color);border-radius:2px;display:inline-block;font-size:.9em;line-height:1;padding:.4em;text-align:center;vertical-align:middle}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content code{font-family:monospace}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content kbd{box-shadow:0 1px 1px var(--ck-accessibility-help-dialog-kbd-shadow-color);margin:0 1px;min-width:1.8em}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content kbd+kbd{margin-left:2px}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/editorui/accessibilityhelp.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAQA,MACC,8CAA+C,CAC/C,+CAAgD,CAChD,mDAA8D,CAC9D,4DAAyE,CACzE,uDACD,CAEA,wEAOC,4BAA6B,CAJ7B,yDAA0D,CAD1D,uDAAwD,CAExD,aAAc,CAHd,+BAAgC,CAIhC,gBAgFD,CA5EC,8ECdA,2BAA2B,CCF3B,2CAA8B,CDC9B,YDkBA,CAZD,wEAcC,EACC,kBACD,CAqED,CAlEC,kFACC,YACD,CAEA,2EAEC,eAAgB,CADhB,eAED,CAEA,2EAEC,aAAc,CADd,eAED,CAEA,8SAIC,YACD,CAEA,2EAIC,kBAAmB,CADnB,qEAAsE,CAFtE,YAAa,CACb,6BAiBD,CAbC,4JACC,wEAAyE,CACzE,cACD,CAEA,8EACC,mBACD,CAEA,8EACC,mBAAoB,CACpB,gBACD,CAGD,yJAEC,oEAAqE,CAIrE,iBAAkB,CALlB,oBAAqB,CAOrB,cAAe,CAHf,aAAc,CAFd,YAAa,CAIb,iBAAkB,CAHlB,qBAKD,CAEA,6EACC,qBACD,CAEA,4EAEC,yEAA4E,CAC5E,YAAa,CAFb,eAOD,CAHC,gFACC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_focus.css";
@import "../../../mixins/_shadow.css";

:root {
	--ck-accessibility-help-dialog-max-width: 600px;
	--ck-accessibility-help-dialog-max-height: 400px;
	--ck-accessibility-help-dialog-border-color: hsl(220, 6%, 81%);
	--ck-accessibility-help-dialog-code-background-color: hsl(0deg 0% 92.94%);
	--ck-accessibility-help-dialog-kbd-shadow-color: hsl(0deg 0% 61%);
}

.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content {
	padding: var(--ck-spacing-large);
	max-width: var(--ck-accessibility-help-dialog-max-width);
	max-height: var(--ck-accessibility-help-dialog-max-height);
	overflow: auto;
	user-select: text;

	border: 1px solid transparent;

	&:focus {
		@mixin ck-focus-ring;
		@mixin ck-box-shadow var(--ck-focus-outer-shadow);
	}

	* {
		white-space: normal;
	}

	/* Hide the main label of the content container. */
	& .ck-label {
		display: none;
	}

	& h3 {
		font-weight: bold;
		font-size: 1.2em;
	}

	& h4 {
		font-weight: bold;
		font-size: 1em;
	}

	& p,
	& h3,
	& h4,
	& table {
		margin: 1em 0;
	}

	& dl {
		display: grid;
		grid-template-columns: 2fr 1fr;
		border-top: 1px solid var(--ck-accessibility-help-dialog-border-color);
		border-bottom: none;

		& dt, & dd {
			border-bottom: 1px solid var(--ck-accessibility-help-dialog-border-color);
			padding: .4em 0;
		}

		& dt {
			grid-column-start: 1;
		}

		& dd {
			grid-column-start: 2;
			text-align: right;
		}
	}

	& kbd, & code {
		display: inline-block;
		background: var(--ck-accessibility-help-dialog-code-background-color);
		padding: .4em;
		vertical-align: middle;
		line-height: 1;
		border-radius: 2px;
		text-align: center;
		font-size: .9em;
	}

	& code {
		font-family: monospace;
	}

	& kbd {
		min-width: 1.8em;
		box-shadow: 0px 1px 1px var(--ck-accessibility-help-dialog-kbd-shadow-color);
		margin: 0 1px;

		& + kbd {
			margin-left: 2px;
		}
	}
}

`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A visual style of focused element's border.
 */
@define-mixin ck-focus-ring {
	/* Disable native outline. */
	outline: none;
	border: var(--ck-focus-ring)
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const P=x},1185:(L,B,_)=>{_.d(B,{A:()=>P});var q=_(9372),U=_.n(q),H=_(935),x=_.n(H)()(U());x.push([L.id,":root{--ck-color-editable-blur-selection:#d9d9d9}.ck.ck-editor__editable:not(.ck-editor__nested-editable){border-radius:0}.ck-rounded-corners .ck.ck-editor__editable:not(.ck-editor__nested-editable),.ck.ck-editor__editable.ck-rounded-corners:not(.ck-editor__nested-editable){border-radius:var(--ck-border-radius)}.ck.ck-editor__editable.ck-focused:not(.ck-editor__nested-editable){border:var(--ck-focus-ring);box-shadow:var(--ck-inner-shadow),0 0;outline:none}.ck.ck-editor__editable_inline{border:1px solid transparent;overflow:auto;padding:0 var(--ck-spacing-standard)}.ck.ck-editor__editable_inline[dir=ltr]{text-align:left}.ck.ck-editor__editable_inline[dir=rtl]{text-align:right}.ck.ck-editor__editable_inline>:first-child{margin-top:var(--ck-spacing-large)}.ck.ck-editor__editable_inline>:last-child{margin-bottom:var(--ck-spacing-large)}.ck.ck-editor__editable_inline.ck-blurred ::selection{background:var(--ck-color-editable-blur-selection)}.ck.ck-balloon-panel.ck-toolbar-container[class*=arrow_n]:after{border-bottom-color:var(--ck-color-panel-background)}.ck.ck-balloon-panel.ck-toolbar-container[class*=arrow_s]:after{border-top-color:var(--ck-color-panel-background)}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/editorui/editorui.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAWA,MACC,0CACD,CAEA,yDCJC,eDWD,CAPA,yJCAE,qCDOF,CAJC,oEEPA,2BAA2B,CCF3B,qCAA8B,CDC9B,YFWA,CAGD,+BAGC,4BAA6B,CAF7B,aAAc,CACd,oCA6BD,CA1BC,wCACC,eACD,CAEA,wCACC,gBACD,CAGA,4CACC,kCACD,CAGA,2CAKC,qCACD,CAGA,sDACC,kDACD,CAKA,gEACC,oDACD,CAIA,gEACC,iDACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_disabled.css";
@import "../../../mixins/_shadow.css";
@import "../../../mixins/_focus.css";
@import "../../mixins/_button.css";

:root {
	--ck-color-editable-blur-selection: hsl(0, 0%, 85%);
}

.ck.ck-editor__editable:not(.ck-editor__nested-editable) {
	@mixin ck-rounded-corners;

	&.ck-focused {
		@mixin ck-focus-ring;
		@mixin ck-box-shadow var(--ck-inner-shadow);
	}
}

.ck.ck-editor__editable_inline {
	overflow: auto;
	padding: 0 var(--ck-spacing-standard);
	border: 1px solid transparent;

	&[dir="ltr"] {
		text-align: left;
	}

	&[dir="rtl"] {
		text-align: right;
	}

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/116 */
	& > *:first-child {
		margin-top: var(--ck-spacing-large);
	}

	/* https://github.com/ckeditor/ckeditor5/issues/847 */
	& > *:last-child {
		/*
		 * This value should match with the default margins of the block elements (like .media or .image)
		 * to avoid a content jumping when the fake selection container shows up (See https://github.com/ckeditor/ckeditor5/issues/9825).
		 */
		margin-bottom: var(--ck-spacing-large);
	}

	/* https://github.com/ckeditor/ckeditor5/issues/6517 */
	&.ck-blurred ::selection {
		background: var(--ck-color-editable-blur-selection);
	}
}

/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/111 */
.ck.ck-balloon-panel.ck-toolbar-container[class*="arrow_n"] {
	&::after {
		border-bottom-color: var(--ck-color-panel-background);
	}
}

.ck.ck-balloon-panel.ck-toolbar-container[class*="arrow_s"] {
	&::after {
		border-top-color: var(--ck-color-panel-background);
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A visual style of focused element's border.
 */
@define-mixin ck-focus-ring {
	/* Disable native outline. */
	outline: none;
	border: var(--ck-focus-ring)
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const P=x},7913:(L,B,_)=>{_.d(B,{A:()=>P});var q=_(9372),U=_.n(q),H=_(935),x=_.n(H)()(U());x.push([L.id,".ck.ck-form__header{align-items:center;display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-between}.ck.ck-form__header h2.ck-form__header__label{flex-grow:1}:root{--ck-form-header-height:44px}.ck.ck-form__header{border-bottom:1px solid var(--ck-color-base-border);height:var(--ck-form-header-height);line-height:var(--ck-form-header-height);padding:var(--ck-spacing-small) var(--ck-spacing-large)}[dir=ltr] .ck.ck-form__header>.ck-icon{margin-right:var(--ck-spacing-medium)}[dir=rtl] .ck.ck-form__header>.ck-icon{margin-left:var(--ck-spacing-medium)}.ck.ck-form__header .ck-form__header__label{--ck-font-size-base:15px;font-weight:700}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/formheader/formheader.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/formheader/formheader.css"],names:[],mappings:"AAKA,oBAIC,kBAAmB,CAHnB,YAAa,CACb,kBAAmB,CACnB,gBAAiB,CAEjB,6BAKD,CAHC,8CACC,WACD,CCPD,MACC,4BACD,CAEA,oBAIC,mDAAoD,CAFpD,mCAAoC,CACpC,wCAAyC,CAFzC,uDAmBD,CAdC,uCAEE,qCAMF,CARA,uCAME,oCAEF,CAEA,4CACC,wBAAyB,CACzB,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-form__header {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	align-items: center;
	justify-content: space-between;

	& h2.ck-form__header__label {
		flex-grow: 1;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

:root {
	--ck-form-header-height: 44px;
}

.ck.ck-form__header {
	padding: var(--ck-spacing-small) var(--ck-spacing-large);
	height: var(--ck-form-header-height);
	line-height: var(--ck-form-header-height);
	border-bottom: 1px solid var(--ck-color-base-border);

	& > .ck-icon {
		@mixin ck-dir ltr {
			margin-right: var(--ck-spacing-medium);
		}

		@mixin ck-dir rtl {
			margin-left: var(--ck-spacing-medium);
		}
	}

	& .ck-form__header__label {
		--ck-font-size-base: 15px;
		font-weight: bold;
	}
}
`],sourceRoot:""}]);const P=x},9529:(L,B,_)=>{_.d(B,{A:()=>P});var q=_(9372),U=_.n(q),H=_(935),x=_.n(H)()(U());x.push([L.id,".ck.ck-highlighted-text mark{background:var(--ck-color-highlight-background);font-size:inherit;font-weight:inherit;line-height:inherit;vertical-align:initial}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/highlightedtext/highlightedtext.css"],names:[],mappings:"AAKA,6BACC,+CAAgD,CAIhD,iBAAkB,CAFlB,mBAAoB,CACpB,mBAAoB,CAFpB,sBAID",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-highlighted-text mark {
	background: var(--ck-color-highlight-background);
	vertical-align: initial;
	font-weight: inherit;
	line-height: inherit;
	font-size: inherit;
}
`],sourceRoot:""}]);const P=x},7621:(L,B,_)=>{_.d(B,{A:()=>P});var q=_(9372),U=_.n(q),H=_(935),x=_.n(H)()(U());x.push([L.id,".ck.ck-icon{vertical-align:middle}:root{--ck-icon-size:calc(var(--ck-line-height-base)*var(--ck-font-size-normal))}.ck.ck-icon{font-size:.8333350694em;height:var(--ck-icon-size);width:var(--ck-icon-size);will-change:transform}.ck.ck-icon,.ck.ck-icon *{cursor:inherit}.ck.ck-icon.ck-icon_inherit-color,.ck.ck-icon.ck-icon_inherit-color *{color:inherit}.ck.ck-icon.ck-icon_inherit-color :not([fill]){fill:currentColor}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/icon/icon.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/icon/icon.css"],names:[],mappings:"AAKA,YACC,qBACD,CCFA,MACC,0EACD,CAEA,YAKC,uBAAwB,CAHxB,0BAA2B,CAD3B,yBAA0B,CAU1B,qBAoBD,CAlBC,0BALA,cAQA,CAMC,sEACC,aAMD,CAJC,+CAEC,iBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-icon {
	vertical-align: middle;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-icon-size: calc(var(--ck-line-height-base) * var(--ck-font-size-normal));
}

.ck.ck-icon {
	width: var(--ck-icon-size);
	height: var(--ck-icon-size);

	/* Multiplied by the height of the line in "px" should give SVG "viewport" dimensions */
	font-size: .8333350694em;

	/* Inherit cursor style (#5). */
	cursor: inherit;

	/* This will prevent blurry icons on Firefox. See #340. */
	will-change: transform;

	& * {
		/* Inherit cursor style (#5). */
		cursor: inherit;
	}

	/* Allows dynamic coloring of an icon by inheriting its color from the parent. */
	&.ck-icon_inherit-color {
		color: inherit;

		& * {
			color: inherit;

			&:not([fill]) {
				/* Needed by FF. */
				fill: currentColor;
			}
		}
	}
}
`],sourceRoot:""}]);const P=x},253:(L,B,_)=>{_.d(B,{A:()=>P});var q=_(9372),U=_.n(q),H=_(935),x=_.n(H)()(U());x.push([L.id,":root{--ck-input-width:18em;--ck-input-text-width:var(--ck-input-width)}.ck.ck-input{border-radius:0}.ck-rounded-corners .ck.ck-input,.ck.ck-input.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-input{background:var(--ck-color-input-background);border:1px solid var(--ck-color-input-border);min-height:var(--ck-ui-component-min-height);min-width:var(--ck-input-width);padding:var(--ck-spacing-extra-tiny) var(--ck-spacing-medium);transition:box-shadow .1s ease-in-out,border .1s ease-in-out}@media (prefers-reduced-motion:reduce){.ck.ck-input{transition:none}}.ck.ck-input:focus{border:var(--ck-focus-ring);box-shadow:var(--ck-focus-outer-shadow),0 0;outline:none}.ck.ck-input[readonly]{background:var(--ck-color-input-disabled-background);border:1px solid var(--ck-color-input-disabled-border);color:var(--ck-color-input-disabled-text)}.ck.ck-input[readonly]:focus{box-shadow:var(--ck-focus-disabled-outer-shadow),0 0}.ck.ck-input.ck-error{animation:ck-input-shake .3s ease both;border-color:var(--ck-color-input-error-border)}@media (prefers-reduced-motion:reduce){.ck.ck-input.ck-error{animation:none}}.ck.ck-input.ck-error:focus{box-shadow:var(--ck-focus-error-outer-shadow),0 0}@keyframes ck-input-shake{20%{transform:translateX(-2px)}40%{transform:translateX(2px)}60%{transform:translateX(-1px)}80%{transform:translateX(1px)}}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/input/input.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AASA,MACC,qBAAsB,CAGtB,2CACD,CAEA,aCLC,eDmDD,CA9CA,iECDE,qCD+CF,CA9CA,aAGC,2CAA4C,CAC5C,6CAA8C,CAK9C,4CAA6C,CAH7C,+BAAgC,CADhC,6DAA8D,CAO9D,4DAkCD,CAhCC,uCAdD,aAeE,eA+BF,CA9BC,CAEA,mBEvBA,2BAA2B,CCF3B,2CAA8B,CDC9B,YF2BA,CAEA,uBAEC,oDAAqD,CADrD,sDAAuD,CAEvD,yCAMD,CAJC,6BGnCD,oDHsCC,CAGD,sBAEC,sCAAuC,CADvC,+CAUD,CAPC,uCAJD,sBAKE,cAMF,CALC,CAEA,4BGjDD,iDHmDC,CAIF,0BACC,IACC,0BACD,CAEA,IACC,yBACD,CAEA,IACC,0BACD,CAEA,IACC,yBACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_focus.css";
@import "../../../mixins/_shadow.css";

:root {
	--ck-input-width: 18em;

	/* Backward compatibility. */
	--ck-input-text-width: var(--ck-input-width);
}

.ck.ck-input {
	@mixin ck-rounded-corners;

	background: var(--ck-color-input-background);
	border: 1px solid var(--ck-color-input-border);
	padding: var(--ck-spacing-extra-tiny) var(--ck-spacing-medium);
	min-width: var(--ck-input-width);

	/* This is important to stay of the same height as surrounding buttons */
	min-height: var(--ck-ui-component-min-height);

	/* Apply some smooth transition to the box-shadow and border. */
	transition: box-shadow .1s ease-in-out, border .1s ease-in-out;

	@media (prefers-reduced-motion: reduce) {
		transition: none;
	}

	&:focus {
		@mixin ck-focus-ring;
		@mixin ck-box-shadow var(--ck-focus-outer-shadow);
	}

	&[readonly] {
		border: 1px solid var(--ck-color-input-disabled-border);
		background: var(--ck-color-input-disabled-background);
		color: var(--ck-color-input-disabled-text);

		&:focus {
			/* The read-only input should have a slightly less visible shadow when focused. */
			@mixin ck-box-shadow var(--ck-focus-disabled-outer-shadow);
		}
	}

	&.ck-error {
		border-color: var(--ck-color-input-error-border);
		animation: ck-input-shake .3s ease both;

		@media (prefers-reduced-motion: reduce) {
			animation: none;
		}

		&:focus {
			@mixin ck-box-shadow var(--ck-focus-error-outer-shadow);
		}
	}
}

@keyframes ck-input-shake {
	20% {
		transform: translateX(-2px);
	}

	40% {
		transform: translateX(2px);
	}

	60% {
		transform: translateX(-1px);
	}

	80% {
		transform: translateX(1px);
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A visual style of focused element's border.
 */
@define-mixin ck-focus-ring {
	/* Disable native outline. */
	outline: none;
	border: var(--ck-focus-ring)
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const P=x},7801:(L,B,_)=>{_.d(B,{A:()=>P});var q=_(9372),U=_.n(q),H=_(935),x=_.n(H)()(U());x.push([L.id,".ck.ck-label{display:block}.ck.ck-voice-label{display:none}.ck.ck-label{font-weight:700}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/label/label.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/label/label.css"],names:[],mappings:"AAKA,aACC,aACD,CAEA,mBACC,YACD,CCNA,aACC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-label {
	display: block;
}

.ck.ck-voice-label {
	display: none;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-label {
	font-weight: bold;
}
`],sourceRoot:""}]);const P=x},4962:(L,B,_)=>{_.d(B,{A:()=>P});var q=_(9372),U=_.n(q),H=_(935),x=_.n(H)()(U());x.push([L.id,".ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper{display:flex;position:relative}.ck.ck-labeled-field-view .ck.ck-label{display:block;position:absolute}:root{--ck-labeled-field-view-transition:.1s cubic-bezier(0,0,0.24,0.95);--ck-labeled-field-empty-unfocused-max-width:100% - 2 * var(--ck-spacing-medium);--ck-labeled-field-label-default-position-x:var(--ck-spacing-medium);--ck-labeled-field-label-default-position-y:calc(var(--ck-font-size-base)*0.6);--ck-color-labeled-field-label-background:var(--ck-color-base-background)}.ck.ck-labeled-field-view{border-radius:0}.ck-rounded-corners .ck.ck-labeled-field-view,.ck.ck-labeled-field-view.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper{width:100%}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{top:0}[dir=ltr] .ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{left:0;transform:translate(var(--ck-spacing-medium),-6px) scale(.75);transform-origin:0 0}[dir=rtl] .ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{right:0;transform:translate(calc(var(--ck-spacing-medium)*-1),-6px) scale(.75);transform-origin:100% 0}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{background:var(--ck-color-labeled-field-label-background);font-weight:400;line-height:normal;max-width:100%;overflow:hidden;padding:0 calc(var(--ck-font-size-tiny)*.5);pointer-events:none;text-overflow:ellipsis;transition:transform var(--ck-labeled-field-view-transition),padding var(--ck-labeled-field-view-transition),background var(--ck-labeled-field-view-transition)}@media (prefers-reduced-motion:reduce){.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{transition:none}}.ck.ck-labeled-field-view.ck-error .ck-input:not([readonly])+.ck.ck-label,.ck.ck-labeled-field-view.ck-error>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{color:var(--ck-color-base-error)}.ck.ck-labeled-field-view .ck-labeled-field-view__status{font-size:var(--ck-font-size-small);margin-top:var(--ck-spacing-small);white-space:normal}.ck.ck-labeled-field-view .ck-labeled-field-view__status.ck-labeled-field-view__status_error{color:var(--ck-color-base-error)}.ck.ck-labeled-field-view.ck-disabled>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,.ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{color:var(--ck-color-input-disabled-text)}[dir=ltr] .ck.ck-labeled-field-view.ck-disabled.ck-labeled-field-view_empty:not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,[dir=ltr] .ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder):not(.ck-error)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{transform:translate(var(--ck-labeled-field-label-default-position-x),var(--ck-labeled-field-label-default-position-y)) scale(1)}[dir=rtl] .ck.ck-labeled-field-view.ck-disabled.ck-labeled-field-view_empty:not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,[dir=rtl] .ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder):not(.ck-error)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{transform:translate(calc(var(--ck-labeled-field-label-default-position-x)*-1),var(--ck-labeled-field-label-default-position-y)) scale(1)}.ck.ck-labeled-field-view.ck-disabled.ck-labeled-field-view_empty:not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,.ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder):not(.ck-error)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{background:transparent;max-width:calc(var(--ck-labeled-field-empty-unfocused-max-width));padding:0}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck-dropdown>.ck.ck-button{background:transparent}.ck.ck-labeled-field-view.ck-labeled-field-view_empty>.ck.ck-labeled-field-view__input-wrapper>.ck-dropdown>.ck-button>.ck-button__label{opacity:0}.ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck-dropdown+.ck-label{max-width:calc(var(--ck-labeled-field-empty-unfocused-max-width) - var(--ck-dropdown-arrow-size) - var(--ck-spacing-standard))}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/labeledfield/labeledfieldview.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/labeledfield/labeledfieldview.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAMC,mEACC,YAAa,CACb,iBACD,CAEA,uCACC,aAAc,CACd,iBACD,CCND,MACC,kEAAsE,CACtE,gFAAiF,CACjF,oEAAqE,CACrE,8EAAiF,CACjF,yEACD,CAEA,0BCLC,eDmHD,CA9GA,2FCDE,qCD+GF,CA3GC,mEACC,UAwCD,CAtCC,gFACC,KAoCD,CArCA,0FAIE,MAAS,CAGT,6DAA+D,CAF/D,oBAgCF,CArCA,0FAWE,OAAU,CAEV,sEAA0E,CAD1E,uBAyBF,CArCA,gFAkBC,yDAA0D,CAG1D,eAAmB,CADnB,kBAAoB,CAOpB,cAAe,CAFf,eAAgB,CANhB,2CAA8C,CAH9C,mBAAoB,CAQpB,sBAAuB,CAKvB,+JAQD,CAHC,uCAlCD,gFAmCE,eAEF,CADC,CASD,mKACC,gCACD,CAGD,yDACC,mCAAoC,CACpC,kCAAmC,CAInC,kBAKD,CAHC,6FACC,gCACD,CAID,4OAEC,yCACD,CAIA,2XAGE,+HAYF,CAfA,2XAOE,wIAQF,CAfA,uWAaC,sBAAuB,CAFvB,iEAAkE,CAGlE,SACD,CAKA,8FACC,sBACD,CAGA,yIACC,SACD,CAGA,kMACC,8HACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-labeled-field-view {
	& > .ck.ck-labeled-field-view__input-wrapper {
		display: flex;
		position: relative;
	}

	& .ck.ck-label {
		display: block;
		position: absolute;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";
@import "../../../mixins/_rounded.css";

:root {
	--ck-labeled-field-view-transition: .1s cubic-bezier(0, 0, 0.24, 0.95);
	--ck-labeled-field-empty-unfocused-max-width: 100% - 2 * var(--ck-spacing-medium);
	--ck-labeled-field-label-default-position-x: var(--ck-spacing-medium);
	--ck-labeled-field-label-default-position-y: calc(0.6 * var(--ck-font-size-base));
	--ck-color-labeled-field-label-background: var(--ck-color-base-background);
}

.ck.ck-labeled-field-view {
	@mixin ck-rounded-corners;

	& > .ck.ck-labeled-field-view__input-wrapper {
		width: 100%;

		& > .ck.ck-label {
			top: 0px;

			@mixin ck-dir ltr {
				left: 0px;
				transform-origin: 0 0;
				/* By default, display the label scaled down above the field. */
				transform: translate(var(--ck-spacing-medium), -6px) scale(.75);
			}

			@mixin ck-dir rtl {
				right: 0px;
				transform-origin: 100% 0;
				transform: translate(calc(-1 * var(--ck-spacing-medium)), -6px) scale(.75);
			}

			pointer-events: none;

			background: var(--ck-color-labeled-field-label-background);
			padding: 0 calc(.5 * var(--ck-font-size-tiny));
			line-height: initial;
			font-weight: normal;

			/* Prevent overflow when the label is longer than the input */
			text-overflow: ellipsis;
			overflow: hidden;

			max-width: 100%;

			transition:
				transform var(--ck-labeled-field-view-transition),
				padding var(--ck-labeled-field-view-transition),
				background var(--ck-labeled-field-view-transition);

			@media (prefers-reduced-motion: reduce) {
				transition: none;
			}
		}
	}

	&.ck-error {
		& > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label {
			color: var(--ck-color-base-error);
		}

		& .ck-input:not([readonly]) + .ck.ck-label {
			color: var(--ck-color-base-error);
		}
	}

	& .ck-labeled-field-view__status {
		font-size: var(--ck-font-size-small);
		margin-top: var(--ck-spacing-small);

		/* Let the info wrap to the next line to avoid stretching the layout horizontally.
		The status could be very long. */
		white-space: normal;

		&.ck-labeled-field-view__status_error {
			color: var(--ck-color-base-error);
		}
	}

	/* Disabled fields and fields that have no focus should fade out. */
	&.ck-disabled > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label,
	&.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused) > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label {
		color: var(--ck-color-input-disabled-text);
	}

	/* Fields that are disabled or not focused and without a placeholder should have full-sized labels. */
	/* stylelint-disable-next-line no-descending-specificity */
	&.ck-disabled.ck-labeled-field-view_empty:not(.ck-labeled-field-view_placeholder) > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label,
	&.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder):not(.ck-error) > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label {
		@mixin ck-dir ltr {
			transform: translate(var(--ck-labeled-field-label-default-position-x), var(--ck-labeled-field-label-default-position-y)) scale(1);
		}

		@mixin ck-dir rtl {
			transform: translate(calc(-1 * var(--ck-labeled-field-label-default-position-x)), var(--ck-labeled-field-label-default-position-y)) scale(1);
		}

		/* Compensate for the default translate position. */
		max-width: calc(var(--ck-labeled-field-empty-unfocused-max-width));

		background: transparent;
		padding: 0;
	}

	/*------ DropdownView integration ----------------------------------------------------------------------------------- */

	/* Make sure dropdown' background color in any of dropdown's state does not collide with labeled field. */
	& > .ck.ck-labeled-field-view__input-wrapper > .ck-dropdown > .ck.ck-button {
		background: transparent;
	}

	/* When the dropdown is "empty", the labeled field label replaces its label. */
	&.ck-labeled-field-view_empty > .ck.ck-labeled-field-view__input-wrapper > .ck-dropdown > .ck-button > .ck-button__label {
		opacity: 0;
	}

	/* Make sure the label of the empty, unfocused input does not cover the dropdown arrow. */
	&.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder) > .ck.ck-labeled-field-view__input-wrapper > .ck-dropdown + .ck-label {
		max-width: calc(var(--ck-labeled-field-empty-unfocused-max-width) - var(--ck-dropdown-arrow-size) - var(--ck-spacing-standard));
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const P=x},5199:(L,B,_)=>{_.d(B,{A:()=>P});var q=_(9372),U=_.n(q),H=_(935),x=_.n(H)()(U());x.push([L.id,".ck.ck-list{display:flex;flex-direction:column;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}.ck.ck-list .ck-list__item,.ck.ck-list .ck-list__separator{display:block}.ck.ck-list .ck-list__item>:focus{position:relative;z-index:var(--ck-z-default)}:root{--ck-list-button-padding:calc(var(--ck-line-height-base)*0.11*var(--ck-font-size-base)) calc(var(--ck-line-height-base)*0.4*var(--ck-font-size-base))}.ck.ck-list{border-radius:0}.ck-rounded-corners .ck.ck-list,.ck.ck-list.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-list{background:var(--ck-color-list-background);list-style-type:none}.ck.ck-list__item{cursor:default;min-width:12em}.ck.ck-list__item>.ck-button{border-radius:0;min-height:unset;width:100%}[dir=ltr] .ck.ck-list__item>.ck-button{text-align:left}[dir=rtl] .ck.ck-list__item>.ck-button{text-align:right}.ck.ck-list__item>.ck-button{padding:var(--ck-list-button-padding)}.ck.ck-list__item>.ck-button:active{box-shadow:none}.ck.ck-list__item>.ck-button.ck-on{background:var(--ck-color-list-button-on-background);color:var(--ck-color-list-button-on-text)}.ck.ck-list__item>.ck-button.ck-on:active{box-shadow:none}.ck.ck-list__item>.ck-button.ck-on:hover:not(.ck-disabled){background:var(--ck-color-list-button-on-background-focus)}.ck.ck-list__item>.ck-button.ck-on:focus:not(.ck-switchbutton):not(.ck-disabled){border-color:var(--ck-color-base-background)}.ck.ck-list__item>.ck-button:hover:not(.ck-disabled){background:var(--ck-color-list-button-hover-background)}.ck.ck-list__item>.ck-switchbutton.ck-on{background:var(--ck-color-list-background);color:inherit}.ck.ck-list__item>.ck-switchbutton.ck-on:hover:not(.ck-disabled){background:var(--ck-color-list-button-hover-background);color:inherit}.ck-list .ck-list__group{padding-top:var(--ck-spacing-medium);:not(.ck-hidden)~&{border-top:1px solid var(--ck-color-base-border)}}.ck-list .ck-list__group>.ck-label{font-size:11px;font-weight:700;padding:var(--ck-spacing-medium) var(--ck-spacing-medium) 0 var(--ck-spacing-medium)}.ck.ck-list__separator{background:var(--ck-color-base-border);height:1px;width:100%}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/list/list.css","webpack://./../ckeditor5-ui/theme/mixins/_unselectable.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/list/list.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAOA,YAGC,YAAa,CACb,qBAAsB,CCFtB,qBAAsB,CACtB,wBAAyB,CACzB,oBAAqB,CACrB,gBDaD,CAZC,2DAEC,aACD,CAKA,kCACC,iBAAkB,CAClB,2BACD,CEdD,MACC,qJAGD,CAEA,YCLC,eDUD,CALA,+DCDE,qCDMF,CALA,YAIC,0CAA2C,CAD3C,oBAED,CAEA,kBACC,cAAe,CACf,cA2DD,CAzDC,6BAGC,eAAgB,CAFhB,gBAAiB,CACjB,UAwCD,CA1CA,uCAME,eAoCF,CA1CA,uCAUE,gBAgCF,CA1CA,6BAgBC,qCA0BD,CAxBC,oCACC,eACD,CAEA,mCACC,oDAAqD,CACrD,yCAaD,CAXC,0CACC,eACD,CAEA,2DACC,0DACD,CAEA,iFACC,4CACD,CAGD,qDACC,uDACD,CAMA,yCACC,0CAA2C,CAC3C,aAMD,CAJC,iEACC,uDAAwD,CACxD,aACD,CAKH,yBACC,oCAAqC,CAGrC,mBACC,gDACD,CAOD,CALC,mCACC,cAAe,CACf,eAAiB,CACjB,oFACD,CAGD,uBAGC,sCAAuC,CAFvC,UAAW,CACX,UAED",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../mixins/_unselectable.css";

.ck.ck-list {
	@mixin ck-unselectable;

	display: flex;
	flex-direction: column;

	& .ck-list__item,
	& .ck-list__separator {
		display: block;
	}

	/* Make sure that whatever child of the list item gets focus, it remains on the
	top. Thanks to that, styles like box-shadow, outline, etc. are not masked by
	adjacent list items. */
	& .ck-list__item > *:focus {
		position: relative;
		z-index: var(--ck-z-default);
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Makes element unselectable.
 */
@define-mixin ck-unselectable {
	-moz-user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;
	user-select: none
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_disabled.css";
@import "../../../mixins/_rounded.css";
@import "../../../mixins/_shadow.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

:root {
	--ck-list-button-padding:
		calc(.11 * var(--ck-line-height-base) * var(--ck-font-size-base))
		calc(.4 * var(--ck-line-height-base) * var(--ck-font-size-base));
}

.ck.ck-list {
	@mixin ck-rounded-corners;

	list-style-type: none;
	background: var(--ck-color-list-background);
}

.ck.ck-list__item {
	cursor: default;
	min-width: 12em;

	& > .ck-button {
		min-height: unset;
		width: 100%;
		border-radius: 0;

		@mixin ck-dir ltr {
			text-align: left;
		}

		@mixin ck-dir rtl {
			text-align: right;
		}

		/* List items should have the same height. Use absolute units to make sure it is so
		   because e.g. different heading styles may have different height
		   https://github.com/ckeditor/ckeditor5-heading/issues/63 */
		padding: var(--ck-list-button-padding);

		&:active {
			box-shadow: none;
		}

		&.ck-on {
			background: var(--ck-color-list-button-on-background);
			color: var(--ck-color-list-button-on-text);

			&:active {
				box-shadow: none;
			}

			&:hover:not(.ck-disabled) {
				background: var(--ck-color-list-button-on-background-focus);
			}

			&:focus:not(.ck-switchbutton):not(.ck-disabled) {
				border-color: var(--ck-color-base-background);
			}
		}

		&:hover:not(.ck-disabled) {
			background: var(--ck-color-list-button-hover-background);
		}
	}

	/* It's unnecessary to change the background/text of a switch toggle; it has different ways
	of conveying its state (like the switcher) */
	& > .ck-switchbutton {
		&.ck-on {
			background: var(--ck-color-list-background);
			color: inherit;

			&:hover:not(.ck-disabled) {
				background: var(--ck-color-list-button-hover-background);
				color: inherit;
			}
		}
	}
}

.ck-list .ck-list__group {
	padding-top: var(--ck-spacing-medium);

	/* The group should have a border when it's not the first item. */
	*:not(.ck-hidden) ~ & {
		border-top: 1px solid var(--ck-color-base-border);
	}

	& > .ck-label {
		font-size: 11px;
		font-weight: bold;
		padding: var(--ck-spacing-medium) var(--ck-spacing-medium) 0 var(--ck-spacing-medium);
	}
}

.ck.ck-list__separator {
	height: 1px;
	width: 100%;
	background: var(--ck-color-base-border);
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const P=x},497:(L,B,_)=>{_.d(B,{A:()=>P});var q=_(9372),U=_.n(q),H=_(935),x=_.n(H)()(U());x.push([L.id,".ck.ck-menu-bar{background:var(--ck-color-base-background);border:1px solid var(--ck-color-toolbar-border);display:flex;flex-wrap:wrap;gap:var(--ck-spacing-small);justify-content:flex-start;padding:var(--ck-spacing-small);width:100%}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/menubar/menubar.css"],names:[],mappings:"AAKA,gBAIC,0CAA2C,CAG3C,+CAAgD,CANhD,YAAa,CACb,cAAe,CAIf,2BAA4B,CAH5B,0BAA2B,CAE3B,+BAAgC,CAGhC,UACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-menu-bar {
	display: flex;
	flex-wrap: wrap;
	justify-content: flex-start;
	background: var(--ck-color-base-background);
	padding: var(--ck-spacing-small);
	gap: var(--ck-spacing-small);
	border: 1px solid var(--ck-color-toolbar-border);
	width: 100%;
}
`],sourceRoot:""}]);const P=x},4:(L,B,_)=>{_.d(B,{A:()=>P});var q=_(9372),U=_.n(q),H=_(935),x=_.n(H)()(U());x.push([L.id,".ck.ck-menu-bar__menu{display:block;font-size:inherit;position:relative}.ck.ck-menu-bar__menu.ck-menu-bar__menu_top-level{max-width:100%}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/menubar/menubarmenu.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/menubar/menubarmenu.css"],names:[],mappings:"AAKA,sBACC,aAAc,CCCd,iBAAkB,CDAlB,iBACD,CCCC,kDACC,cACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-menu-bar__menu {
	display: block;
	position: relative;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-menu-bar__menu {
	/* Enable font size inheritance, which allows fluid UI scaling. */
	font-size: inherit;

	&.ck-menu-bar__menu_top-level {
		max-width: 100%;
	}
}
`],sourceRoot:""}]);const P=x},3344:(L,B,_)=>{_.d(B,{A:()=>P});var q=_(9372),U=_.n(q),H=_(935),x=_.n(H)()(U());x.push([L.id,".ck.ck-menu-bar__menu>.ck-menu-bar__menu__button>.ck-menu-bar__menu__button__arrow{pointer-events:none;z-index:var(--ck-z-default)}.ck.ck-menu-bar__menu>.ck-menu-bar__menu__button{padding:var(--ck-list-button-padding);width:100%}.ck.ck-menu-bar__menu>.ck-menu-bar__menu__button>.ck-button__label{flex-grow:1;overflow:hidden;text-overflow:ellipsis}.ck.ck-menu-bar__menu>.ck-menu-bar__menu__button.ck-disabled>.ck-button__label{opacity:var(--ck-disabled-opacity)}[dir=ltr] .ck.ck-menu-bar__menu>.ck-menu-bar__menu__button:not(.ck-button_with-text){padding-left:var(--ck-spacing-small)}[dir=rtl] .ck.ck-menu-bar__menu>.ck-menu-bar__menu__button:not(.ck-button_with-text){padding-right:var(--ck-spacing-small)}.ck.ck-menu-bar__menu.ck-menu-bar__menu_top-level>.ck-menu-bar__menu__button{min-height:unset;padding:var(--ck-spacing-small) var(--ck-spacing-medium)}.ck.ck-menu-bar__menu.ck-menu-bar__menu_top-level>.ck-menu-bar__menu__button .ck-button__label{line-height:unset;width:unset}.ck.ck-menu-bar__menu.ck-menu-bar__menu_top-level>.ck-menu-bar__menu__button.ck-on{border-bottom-left-radius:0;border-bottom-right-radius:0}.ck.ck-menu-bar__menu.ck-menu-bar__menu_top-level>.ck-menu-bar__menu__button .ck-icon{display:none}.ck.ck-menu-bar__menu:not(.ck-menu-bar__menu_top-level) .ck-menu-bar__menu__button{border-radius:0}.ck.ck-menu-bar__menu:not(.ck-menu-bar__menu_top-level) .ck-menu-bar__menu__button:focus{border-color:transparent;box-shadow:none}.ck.ck-menu-bar__menu:not(.ck-menu-bar__menu_top-level) .ck-menu-bar__menu__button:focus:not(.ck-on){background:var(--ck-color-button-default-hover-background)}.ck.ck-menu-bar__menu:not(.ck-menu-bar__menu_top-level) .ck-menu-bar__menu__button:not(:has(.ck-button__icon))>.ck-button__label{margin-left:calc(var(--ck-icon-size) - var(--ck-spacing-small))}.ck.ck-menu-bar__menu:not(.ck-menu-bar__menu_top-level) .ck-menu-bar__menu__button>.ck-menu-bar__menu__button__arrow{width:var(--ck-dropdown-arrow-size)}[dir=ltr] .ck.ck-menu-bar__menu:not(.ck-menu-bar__menu_top-level) .ck-menu-bar__menu__button>.ck-menu-bar__menu__button__arrow{transform:rotate(-90deg)}[dir=rtl] .ck.ck-menu-bar__menu:not(.ck-menu-bar__menu_top-level) .ck-menu-bar__menu__button>.ck-menu-bar__menu__button__arrow{transform:rotate(90deg)}.ck.ck-menu-bar__menu:not(.ck-menu-bar__menu_top-level) .ck-menu-bar__menu__button.ck-disabled>.ck-menu-bar__menu__button__arrow{opacity:var(--ck-disabled-opacity)}[dir=ltr] .ck.ck-menu-bar__menu:not(.ck-menu-bar__menu_top-level) .ck-menu-bar__menu__button>.ck-menu-bar__menu__button__arrow{margin-left:var(--ck-spacing-standard);right:var(--ck-spacing-standard)}[dir=rtl] .ck.ck-menu-bar__menu:not(.ck-menu-bar__menu_top-level) .ck-menu-bar__menu__button>.ck-menu-bar__menu__button__arrow{left:var(--ck-spacing-standard);margin-right:var(--ck-spacing-small)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/menubar/menubarmenubutton.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/menubar/menubarmenubutton.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_disabled.css"],names:[],mappings:"AAMC,mFACC,mBAAoB,CACpB,2BACD,CCIA,iDACC,qCAAsC,CACtC,UAuBD,CArBC,mEACC,WAAY,CACZ,eAAgB,CAChB,sBACD,CAEA,+ECdD,kCDgBC,CAGC,qFACC,oCACD,CAIA,qFACC,qCACD,CAOF,6EAEC,gBAAiB,CADjB,wDAgBD,CAbC,+FAEC,iBAAkB,CADlB,WAED,CAEA,mFACC,2BAA4B,CAC5B,4BACD,CAEA,sFACC,YACD,CAMD,mFACC,eAiDD,CA/CC,yFACC,wBAAyB,CACzB,eAKD,CAHC,qGACC,0DACD,CAID,iIACC,+DACD,CAEA,qHACC,mCASD,CAVA,+HAIE,wBAMF,CAVA,+HAQE,uBAEF,CAEA,iICrFD,kCDuFC,CAGC,+HAIC,sCAAuC,CAHvC,gCAID,CAIA,+HACC,+BAAgC,CAGhC,oCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-menu-bar__menu  {
	& > .ck-menu-bar__menu__button > .ck-menu-bar__menu__button__arrow {
		pointer-events: none;
		z-index: var(--ck-z-default);
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_disabled.css";
@import "../../mixins/_button.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck.ck-menu-bar__menu {
	/*
	 * All menu buttons.
	 */
	& > .ck-menu-bar__menu__button {
		padding: var(--ck-list-button-padding);
		width: 100%;

		& > .ck-button__label {
			flex-grow: 1;
			overflow: hidden;
			text-overflow: ellipsis;
		}

		&.ck-disabled > .ck-button__label {
			@mixin ck-disabled;
		}

		@mixin ck-dir ltr {
			&:not(.ck-button_with-text) {
				padding-left: var(--ck-spacing-small);
			}
		}

		@mixin ck-dir rtl {
			&:not(.ck-button_with-text) {
				padding-right: var(--ck-spacing-small);
			}
		}
	}

	/*
	 * Top-level menu buttons only.
	 */
	&.ck-menu-bar__menu_top-level > .ck-menu-bar__menu__button {
		padding: var(--ck-spacing-small) var(--ck-spacing-medium);
		min-height: unset;

		& .ck-button__label {
			width: unset;
			line-height: unset;
		}

		&.ck-on {
			border-bottom-left-radius: 0;
			border-bottom-right-radius: 0;
		}

		& .ck-icon {
			display: none;
		}
	}

	/*
	 * Sub-menu buttons.
	 */
	&:not(.ck-menu-bar__menu_top-level) .ck-menu-bar__menu__button {
		border-radius: 0;

		&:focus {
			border-color: transparent;
			box-shadow: none;

			&:not(.ck-on) {
				background: var(--ck-color-button-default-hover-background);
			}
		}

		/* Spacing in buttons that miss the icon. */
		&:not(:has(.ck-button__icon)) > .ck-button__label {
			margin-left: calc(var(--ck-icon-size) - var(--ck-spacing-small));
		}

		& > .ck-menu-bar__menu__button__arrow {
			width: var(--ck-dropdown-arrow-size);

			@mixin ck-dir ltr {
				transform: rotate(-90deg);
			}

			@mixin ck-dir rtl {
				transform: rotate(90deg);
			}
		}

		&.ck-disabled > .ck-menu-bar__menu__button__arrow {
			@mixin ck-disabled;
		}

		@mixin ck-dir ltr {
			& > .ck-menu-bar__menu__button__arrow {
				right: var(--ck-spacing-standard);

				/* A space to accommodate the triangle. */
				margin-left: var(--ck-spacing-standard);
			}
		}

		@mixin ck-dir rtl {
			& > .ck-menu-bar__menu__button__arrow {
				left: var(--ck-spacing-standard);

				/* A space to accommodate the triangle. */
				margin-right: var(--ck-spacing-small);
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class which indicates that an element holding it is disabled.
 */
@define-mixin ck-disabled {
	opacity: var(--ck-disabled-opacity);
}
`],sourceRoot:""}]);const P=x},9481:(L,B,_)=>{_.d(B,{A:()=>P});var q=_(9372),U=_.n(q),H=_(935),x=_.n(H)()(U());x.push([L.id,":root{--ck-menu-bar-menu-item-min-width:18em}.ck.ck-menu-bar__menu .ck.ck-menu-bar__menu__item{min-width:var(--ck-menu-bar-menu-item-min-width)}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/menubar/menubarmenulistitem.css"],names:[],mappings:"AAKA,MACC,sCACD,CAEA,kDACC,gDACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-menu-bar-menu-item-min-width: 18em;
}

.ck.ck-menu-bar__menu .ck.ck-menu-bar__menu__item {
	min-width: var(--ck-menu-bar-menu-item-min-width);
}
`],sourceRoot:""}]);const P=x},977:(L,B,_)=>{_.d(B,{A:()=>P});var q=_(9372),U=_.n(q),H=_(935),x=_.n(H)()(U());x.push([L.id,".ck.ck-menu-bar__menu .ck-button.ck-menu-bar__menu__item__button{border-radius:0}.ck.ck-menu-bar__menu .ck-button.ck-menu-bar__menu__item__button>.ck-spinner-container,.ck.ck-menu-bar__menu .ck-button.ck-menu-bar__menu__item__button>.ck-spinner-container .ck-spinner{--ck-toolbar-spinner-size:20px}.ck.ck-menu-bar__menu .ck-button.ck-menu-bar__menu__item__button>.ck-spinner-container{margin-left:calc(var(--ck-spacing-small)*-1);margin-right:var(--ck-spacing-small)}.ck.ck-menu-bar__menu .ck-button.ck-menu-bar__menu__item__button:focus{border-color:transparent;box-shadow:none}.ck.ck-menu-bar__menu .ck-button.ck-menu-bar__menu__item__button:focus:not(.ck-on){background:var(--ck-color-button-default-hover-background)}.ck.ck-menu-bar__menu.ck-menu-bar__menu_top-level>.ck-menu-bar__menu__panel>ul>.ck-menu-bar__menu__item>.ck-menu-bar__menu__item__button:not(:has(.ck-button__icon))>.ck-button__label{margin-left:calc(var(--ck-icon-size) - var(--ck-spacing-small))}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/menubar/menubarmenulistitembutton.css"],names:[],mappings:"AASC,iEACC,eA0BD,CAxBC,0LAGC,8BACD,CAEA,uFAEC,4CAA+C,CAC/C,oCACD,CAMA,uEACC,wBAAyB,CACzB,eAKD,CAHC,mFACC,0DACD,CASD,uLACC,+DACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-menu-bar__menu {
	/*
	 * List item buttons.
	 */
	& .ck-button.ck-menu-bar__menu__item__button {
		border-radius: 0;

		& > .ck-spinner-container,
		& > .ck-spinner-container .ck-spinner {
			/* These styles correspond to .ck-icon so that the spinner seamlessly replaces the icon. */
			--ck-toolbar-spinner-size: 20px;
		}

		& > .ck-spinner-container {
			/* These margins are the same as for .ck-icon. */
			margin-left: calc(-1 * var(--ck-spacing-small));
			margin-right: var(--ck-spacing-small);
		}

		/*
		 * Hovered items automatically get focused. Default focus styles look odd
		 * while moving across a huge list of items so let's get rid of them
		 */
		&:focus {
			border-color: transparent;
			box-shadow: none;

			&:not(.ck-on) {
				background: var(--ck-color-button-default-hover-background);
			}
		}
	}

	/*
	 * First-level sub-menu item buttons.
	 */
	&.ck-menu-bar__menu_top-level > .ck-menu-bar__menu__panel > ul > .ck-menu-bar__menu__item > .ck-menu-bar__menu__item__button {
		/* Spacing in buttons that miss the icon. */
		&:not(:has(.ck-button__icon)) > .ck-button__label {
			margin-left: calc(var(--ck-icon-size) - var(--ck-spacing-small));
		}
	}
}


`],sourceRoot:""}]);const P=x},9108:(L,B,_)=>{_.d(B,{A:()=>P});var q=_(9372),U=_.n(q),H=_(935),x=_.n(H)()(U());x.push([L.id,":root{--ck-menu-bar-menu-max-width:75vw;--ck-menu-bar-nested-menu-horizontal-offset:5px}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel{max-width:var(--ck-menu-bar-menu-max-width);position:absolute;z-index:var(--ck-z-panel)}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_ne,.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_nw{bottom:100%}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_se,.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_sw{bottom:auto;top:100%}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_ne,.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_se{left:0}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_nw,.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_sw{right:0}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_en,.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_es{left:calc(100% - var(--ck-menu-bar-nested-menu-horizontal-offset))}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_es{top:0}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_en{bottom:0}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_wn,.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_ws{right:calc(100% - var(--ck-menu-bar-nested-menu-horizontal-offset))}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_ws{top:0}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_wn{bottom:0}:root{--ck-menu-bar-menu-panel-max-width:75vw}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel{border-radius:0}.ck-rounded-corners .ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel,.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel{background:var(--ck-color-dropdown-panel-background);border:1px solid var(--ck-color-dropdown-panel-border);bottom:0;box-shadow:var(--ck-drop-shadow),0 0;height:fit-content;max-width:var(--ck-menu-bar-menu-panel-max-width)}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_es,.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_se{border-top-left-radius:0}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_sw,.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_ws{border-top-right-radius:0}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_en,.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_ne{border-bottom-left-radius:0}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_nw,.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_wn{border-bottom-right-radius:0}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel:focus{outline:none}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/menubar/menubarmenupanel.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/menubar/menubarmenupanel.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAKA,MACC,iCAAkC,CAClC,+CACD,CAEA,mDAEC,2CAA4C,CAC5C,iBAAkB,CAFlB,yBAkDD,CA9CC,gLAEC,WACD,CAEA,gLAGC,WAAY,CADZ,QAED,CAEA,gLAEC,MACD,CAEA,gLAEC,OACD,CAEA,gLAEC,kEACD,CAEA,wFACC,KACD,CAEA,wFACC,QACD,CAEA,gLAEC,mEACD,CAEA,wFACC,KACD,CAEA,wFACC,QACD,CCpDD,MACC,uCACD,CAEA,mDCDC,eDmCD,CAlCA,6ICGE,qCD+BF,CAlCA,mDAIC,oDAAqD,CACrD,sDAAuD,CACvD,QAAS,CETT,oCAA8B,CFU9B,kBAAmB,CACnB,iDA0BD,CAvBC,gLAEC,wBACD,CAEA,gLAEC,yBACD,CAEA,gLAEC,2BACD,CAEA,gLAEC,4BACD,CAEA,yDACC,YACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-menu-bar-menu-max-width: 75vw;
	--ck-menu-bar-nested-menu-horizontal-offset: 5px;
}

.ck.ck-menu-bar__menu > .ck.ck-menu-bar__menu__panel {
	z-index: var(--ck-z-panel);
	max-width: var(--ck-menu-bar-menu-max-width);
	position: absolute;

	&.ck-menu-bar__menu__panel_position_ne,
	&.ck-menu-bar__menu__panel_position_nw {
		bottom: 100%;
	}

	&.ck-menu-bar__menu__panel_position_se,
	&.ck-menu-bar__menu__panel_position_sw {
		top: 100%;
		bottom: auto;
	}

	&.ck-menu-bar__menu__panel_position_ne,
	&.ck-menu-bar__menu__panel_position_se {
		left: 0px;
	}

	&.ck-menu-bar__menu__panel_position_nw,
	&.ck-menu-bar__menu__panel_position_sw {
		right: 0px;
	}

	&.ck-menu-bar__menu__panel_position_es,
	&.ck-menu-bar__menu__panel_position_en {
		left: calc( 100% - var(--ck-menu-bar-nested-menu-horizontal-offset) );
	}

	&.ck-menu-bar__menu__panel_position_es {
		top: 0px;
	}

	&.ck-menu-bar__menu__panel_position_en {
		bottom: 0px;
	}

	&.ck-menu-bar__menu__panel_position_ws,
	&.ck-menu-bar__menu__panel_position_wn {
		right: calc( 100% - var(--ck-menu-bar-nested-menu-horizontal-offset) );
	}

	&.ck-menu-bar__menu__panel_position_ws {
		top: 0px;
	}

	&.ck-menu-bar__menu__panel_position_wn {
		bottom: 0px;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_shadow.css";

:root {
	--ck-menu-bar-menu-panel-max-width: 75vw;
}

.ck.ck-menu-bar__menu > .ck.ck-menu-bar__menu__panel {
	@mixin ck-rounded-corners;
	@mixin ck-drop-shadow;

	background: var(--ck-color-dropdown-panel-background);
	border: 1px solid var(--ck-color-dropdown-panel-border);
	bottom: 0;
	height: fit-content;
	max-width: var(--ck-menu-bar-menu-panel-max-width);

	/* Corner border radius consistent with the button. */
	&.ck-menu-bar__menu__panel_position_es,
	&.ck-menu-bar__menu__panel_position_se {
		border-top-left-radius: 0;
	}

	&.ck-menu-bar__menu__panel_position_ws,
	&.ck-menu-bar__menu__panel_position_sw {
		border-top-right-radius: 0;
	}

	&.ck-menu-bar__menu__panel_position_en,
	&.ck-menu-bar__menu__panel_position_ne {
		border-bottom-left-radius: 0;
	}

	&.ck-menu-bar__menu__panel_position_wn,
	&.ck-menu-bar__menu__panel_position_nw {
		border-bottom-right-radius: 0;
	}

	&:focus {
		outline: none;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const P=x},3710:(L,B,_)=>{_.d(B,{A:()=>P});var q=_(9372),U=_.n(q),H=_(935),x=_.n(H)()(U());x.push([L.id,':root{--ck-balloon-panel-arrow-z-index:calc(var(--ck-z-default) - 3)}.ck.ck-balloon-panel{display:none;position:absolute;z-index:var(--ck-z-panel)}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:after,.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:before{content:"";position:absolute}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:before{z-index:var(--ck-balloon-panel-arrow-z-index)}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:after{z-index:calc(var(--ck-balloon-panel-arrow-z-index) + 1)}.ck.ck-balloon-panel[class*=arrow_n]:before{z-index:var(--ck-balloon-panel-arrow-z-index)}.ck.ck-balloon-panel[class*=arrow_n]:after{z-index:calc(var(--ck-balloon-panel-arrow-z-index) + 1)}.ck.ck-balloon-panel[class*=arrow_s]:before{z-index:var(--ck-balloon-panel-arrow-z-index)}.ck.ck-balloon-panel[class*=arrow_s]:after{z-index:calc(var(--ck-balloon-panel-arrow-z-index) + 1)}.ck.ck-balloon-panel.ck-balloon-panel_visible{display:block}:root{--ck-balloon-border-width:1px;--ck-balloon-arrow-offset:2px;--ck-balloon-arrow-height:10px;--ck-balloon-arrow-half-width:8px;--ck-balloon-arrow-drop-shadow:0 2px 2px var(--ck-color-shadow-drop)}.ck.ck-balloon-panel{border-radius:0}.ck-rounded-corners .ck.ck-balloon-panel,.ck.ck-balloon-panel.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-balloon-panel{background:var(--ck-color-panel-background);border:var(--ck-balloon-border-width) solid var(--ck-color-panel-border);box-shadow:var(--ck-drop-shadow),0 0;min-height:15px}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:after,.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:before{border-style:solid;height:0;width:0}.ck.ck-balloon-panel[class*=arrow_n]:after,.ck.ck-balloon-panel[class*=arrow_n]:before{border-width:0 var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width)}.ck.ck-balloon-panel[class*=arrow_n]:before{border-color:transparent transparent var(--ck-color-panel-border) transparent;margin-top:calc(var(--ck-balloon-border-width)*-1)}.ck.ck-balloon-panel[class*=arrow_n]:after{border-color:transparent transparent var(--ck-color-panel-background) transparent;margin-top:calc(var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width))}.ck.ck-balloon-panel[class*=arrow_s]:after,.ck.ck-balloon-panel[class*=arrow_s]:before{border-width:var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width) 0 var(--ck-balloon-arrow-half-width)}.ck.ck-balloon-panel[class*=arrow_s]:before{border-color:var(--ck-color-panel-border) transparent transparent;filter:drop-shadow(var(--ck-balloon-arrow-drop-shadow));margin-bottom:calc(var(--ck-balloon-border-width)*-1)}.ck.ck-balloon-panel[class*=arrow_s]:after{border-color:var(--ck-color-panel-background) transparent transparent transparent;margin-bottom:calc(var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width))}.ck.ck-balloon-panel[class*=arrow_e]:after,.ck.ck-balloon-panel[class*=arrow_e]:before{border-width:var(--ck-balloon-arrow-half-width) 0 var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height)}.ck.ck-balloon-panel[class*=arrow_e]:before{border-color:transparent transparent transparent var(--ck-color-panel-border);margin-right:calc(var(--ck-balloon-border-width)*-1)}.ck.ck-balloon-panel[class*=arrow_e]:after{border-color:transparent transparent transparent var(--ck-color-panel-background);margin-right:calc(var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width))}.ck.ck-balloon-panel[class*=arrow_w]:after,.ck.ck-balloon-panel[class*=arrow_w]:before{border-width:var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width) 0}.ck.ck-balloon-panel[class*=arrow_w]:before{border-color:transparent var(--ck-color-panel-border) transparent transparent;margin-left:calc(var(--ck-balloon-border-width)*-1)}.ck.ck-balloon-panel[class*=arrow_w]:after{border-color:transparent var(--ck-color-panel-background) transparent transparent;margin-left:calc(var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width))}.ck.ck-balloon-panel.ck-balloon-panel_arrow_n:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_n:before{left:50%;margin-left:calc(var(--ck-balloon-arrow-half-width)*-1);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_nw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_nw:before{left:calc(var(--ck-balloon-arrow-half-width)*2);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_ne:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_ne:before{right:calc(var(--ck-balloon-arrow-half-width)*2);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_s:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_s:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);left:50%;margin-left:calc(var(--ck-balloon-arrow-half-width)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_sw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_sw:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);left:calc(var(--ck-balloon-arrow-half-width)*2)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_se:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_se:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);right:calc(var(--ck-balloon-arrow-half-width)*2)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_sme:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_sme:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);margin-right:calc(var(--ck-balloon-arrow-half-width)*2);right:25%}.ck.ck-balloon-panel.ck-balloon-panel_arrow_smw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_smw:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);left:25%;margin-left:calc(var(--ck-balloon-arrow-half-width)*2)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_nme:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_nme:before{margin-right:calc(var(--ck-balloon-arrow-half-width)*2);right:25%;top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_nmw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_nmw:before{left:25%;margin-left:calc(var(--ck-balloon-arrow-half-width)*2);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_e:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_e:before{margin-top:calc(var(--ck-balloon-arrow-half-width)*-1);right:calc(var(--ck-balloon-arrow-height)*-1);top:50%}.ck.ck-balloon-panel.ck-balloon-panel_arrow_w:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_w:before{left:calc(var(--ck-balloon-arrow-height)*-1);margin-top:calc(var(--ck-balloon-arrow-half-width)*-1);top:50%}',"",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/panel/balloonpanel.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/balloonpanel.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAKA,MAEC,8DACD,CAEA,qBACC,YAAa,CACb,iBAAkB,CAElB,yBAyCD,CAtCE,+GAEC,UAAW,CACX,iBACD,CAEA,wDACC,6CACD,CAEA,uDACC,uDACD,CAIA,4CACC,6CACD,CAEA,2CACC,uDACD,CAIA,4CACC,6CACD,CAEA,2CACC,uDACD,CAGD,8CACC,aACD,CC9CD,MACC,6BAA8B,CAC9B,6BAA8B,CAC9B,8BAA+B,CAC/B,iCAAkC,CAClC,oEACD,CAEA,qBCLC,eDmMD,CA9LA,iFCDE,qCD+LF,CA9LA,qBAMC,2CAA4C,CAC5C,wEAAyE,CEdzE,oCAA8B,CFW9B,eA0LD,CApLE,+GAIC,kBAAmB,CADnB,QAAS,CADT,OAGD,CAIA,uFAEC,mHACD,CAEA,4CACC,6EAA8E,CAC9E,kDACD,CAEA,2CACC,iFAAkF,CAClF,gFACD,CAIA,uFAEC,mHACD,CAEA,4CACC,iEAAkE,CAClE,uDAAwD,CACxD,qDACD,CAEA,2CACC,iFAAkF,CAClF,mFACD,CAIA,uFAEC,mHACD,CAEA,4CACC,6EAA8E,CAC9E,oDACD,CAEA,2CACC,iFAAkF,CAClF,kFACD,CAIA,uFAEC,mHACD,CAEA,4CACC,6EAA8E,CAC9E,mDACD,CAEA,2CACC,iFAAkF,CAClF,iFACD,CAIA,yGAEC,QAAS,CACT,uDAA0D,CAC1D,2CACD,CAIA,2GAEC,+CAAkD,CAClD,2CACD,CAIA,2GAEC,gDAAmD,CACnD,2CACD,CAIA,yGAIC,8CAAiD,CAFjD,QAAS,CACT,uDAED,CAIA,2GAGC,8CAAiD,CADjD,+CAED,CAIA,2GAGC,8CAAiD,CADjD,gDAED,CAIA,6GAIC,8CAAiD,CADjD,uDAA0D,CAD1D,SAGD,CAIA,6GAIC,8CAAiD,CAFjD,QAAS,CACT,sDAED,CAIA,6GAGC,uDAA0D,CAD1D,SAAU,CAEV,2CACD,CAIA,6GAEC,QAAS,CACT,sDAAyD,CACzD,2CACD,CAIA,yGAGC,sDAAyD,CADzD,6CAAgD,CAEhD,OACD,CAIA,yGAEC,4CAA+C,CAC/C,sDAAyD,CACzD,OACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/* Make sure the balloon arrow does not float over its children. */
	--ck-balloon-panel-arrow-z-index: calc(var(--ck-z-default) - 3);
}

.ck.ck-balloon-panel {
	display: none;
	position: absolute;

	z-index: var(--ck-z-panel);

	&.ck-balloon-panel_with-arrow {
		&::before,
		&::after {
			content: "";
			position: absolute;
		}

		&::before {
			z-index: var(--ck-balloon-panel-arrow-z-index);
		}

		&::after {
			z-index: calc(var(--ck-balloon-panel-arrow-z-index) + 1);
		}
	}

	&[class*="arrow_n"] {
		&::before {
			z-index: var(--ck-balloon-panel-arrow-z-index);
		}

		&::after {
			z-index: calc(var(--ck-balloon-panel-arrow-z-index) + 1);
		}
	}

	&[class*="arrow_s"] {
		&::before {
			z-index: var(--ck-balloon-panel-arrow-z-index);
		}

		&::after {
			z-index: calc(var(--ck-balloon-panel-arrow-z-index) + 1);
		}
	}

	&.ck-balloon-panel_visible {
		display: block;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_shadow.css";

:root {
	--ck-balloon-border-width: 1px;
	--ck-balloon-arrow-offset: 2px;
	--ck-balloon-arrow-height: 10px;
	--ck-balloon-arrow-half-width: 8px;
	--ck-balloon-arrow-drop-shadow: 0 2px 2px var(--ck-color-shadow-drop);
}

.ck.ck-balloon-panel {
	@mixin ck-rounded-corners;
	@mixin ck-drop-shadow;

	min-height: 15px;

	background: var(--ck-color-panel-background);
	border: var(--ck-balloon-border-width) solid var(--ck-color-panel-border);

	&.ck-balloon-panel_with-arrow {
		&::before,
		&::after {
			width: 0;
			height: 0;
			border-style: solid;
		}
	}

	&[class*="arrow_n"] {
		&::before,
		&::after {
			border-width: 0 var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width);
		}

		&::before {
			border-color: transparent transparent var(--ck-color-panel-border) transparent;
			margin-top: calc( -1 * var(--ck-balloon-border-width) );
		}

		&::after {
			border-color: transparent transparent var(--ck-color-panel-background) transparent;
			margin-top: calc( var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width) );
		}
	}

	&[class*="arrow_s"] {
		&::before,
		&::after {
			border-width: var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width) 0 var(--ck-balloon-arrow-half-width);
		}

		&::before {
			border-color: var(--ck-color-panel-border) transparent transparent;
			filter: drop-shadow(var(--ck-balloon-arrow-drop-shadow));
			margin-bottom: calc( -1 * var(--ck-balloon-border-width) );
		}

		&::after {
			border-color: var(--ck-color-panel-background) transparent transparent transparent;
			margin-bottom: calc( var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width) );
		}
	}

	&[class*="arrow_e"] {
		&::before,
		&::after {
			border-width: var(--ck-balloon-arrow-half-width) 0 var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height);
		}

		&::before {
			border-color: transparent transparent transparent var(--ck-color-panel-border);
			margin-right: calc( -1 * var(--ck-balloon-border-width) );
		}

		&::after {
			border-color: transparent transparent transparent var(--ck-color-panel-background);
			margin-right: calc( var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width) );
		}
	}

	&[class*="arrow_w"] {
		&::before,
		&::after {
			border-width: var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width) 0;
		}

		&::before {
			border-color: transparent var(--ck-color-panel-border) transparent transparent;
			margin-left: calc( -1 * var(--ck-balloon-border-width) );
		}

		&::after {
			border-color: transparent var(--ck-color-panel-background) transparent transparent;
			margin-left: calc( var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width) );
		}
	}

	&.ck-balloon-panel_arrow_n {
		&::before,
		&::after {
			left: 50%;
			margin-left: calc(-1 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_nw {
		&::before,
		&::after {
			left: calc(2 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_ne {
		&::before,
		&::after {
			right: calc(2 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_s {
		&::before,
		&::after {
			left: 50%;
			margin-left: calc(-1 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_sw {
		&::before,
		&::after {
			left: calc(2 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_se {
		&::before,
		&::after {
			right: calc(2 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_sme {
		&::before,
		&::after {
			right: 25%;
			margin-right: calc(2 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_smw {
		&::before,
		&::after {
			left: 25%;
			margin-left: calc(2 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_nme {
		&::before,
		&::after {
			right: 25%;
			margin-right: calc(2 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_nmw {
		&::before,
		&::after {
			left: 25%;
			margin-left: calc(2 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_e {
		&::before,
		&::after {
			right: calc(-1 * var(--ck-balloon-arrow-height));
			margin-top: calc(-1 * var(--ck-balloon-arrow-half-width));
			top: 50%;
		}
	}

	&.ck-balloon-panel_arrow_w {
		&::before,
		&::after {
			left: calc(-1 * var(--ck-balloon-arrow-height));
			margin-top: calc(-1 * var(--ck-balloon-arrow-half-width));
			top: 50%;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const P=x},991:(L,B,_)=>{_.d(B,{A:()=>P});var q=_(9372),U=_.n(q),H=_(935),x=_.n(H)()(U());x.push([L.id,".ck .ck-balloon-rotator__navigation{align-items:center;display:flex;justify-content:center}.ck .ck-balloon-rotator__content .ck-toolbar{justify-content:center}.ck .ck-balloon-rotator__navigation{background:var(--ck-color-toolbar-background);border-bottom:1px solid var(--ck-color-toolbar-border);padding:0 var(--ck-spacing-small)}.ck .ck-balloon-rotator__navigation>*{margin-bottom:var(--ck-spacing-small);margin-right:var(--ck-spacing-small);margin-top:var(--ck-spacing-small)}.ck .ck-balloon-rotator__navigation .ck-balloon-rotator__counter{margin-left:var(--ck-spacing-small);margin-right:var(--ck-spacing-standard)}.ck .ck-balloon-rotator__content .ck.ck-annotation-wrapper{box-shadow:none}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/panel/balloonrotator.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/balloonrotator.css"],names:[],mappings:"AAKA,oCAEC,kBAAmB,CADnB,YAAa,CAEb,sBACD,CAKA,6CACC,sBACD,CCXA,oCACC,6CAA8C,CAC9C,sDAAuD,CACvD,iCAgBD,CAbC,sCAGC,qCAAsC,CAFtC,oCAAqC,CACrC,kCAED,CAGA,iEAIC,mCAAoC,CAHpC,uCAID,CAMA,2DACC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-balloon-rotator__navigation {
	display: flex;
	align-items: center;
	justify-content: center;
}

/* Buttons inside a toolbar should be centered when rotator bar is wider.
 * See: https://github.com/ckeditor/ckeditor5-ui/issues/495
 */
.ck .ck-balloon-rotator__content .ck-toolbar {
	justify-content: center;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-balloon-rotator__navigation {
	background: var(--ck-color-toolbar-background);
	border-bottom: 1px solid var(--ck-color-toolbar-border);
	padding: 0 var(--ck-spacing-small);

	/* Let's keep similar appearance to \`ck-toolbar\`. */
	& > * {
		margin-right: var(--ck-spacing-small);
		margin-top: var(--ck-spacing-small);
		margin-bottom: var(--ck-spacing-small);
	}

	/* Gives counter more breath than buttons. */
	& .ck-balloon-rotator__counter {
		margin-right: var(--ck-spacing-standard);

		/* We need to use smaller margin because of previous button's right margin. */
		margin-left: var(--ck-spacing-small);
	}
}

.ck .ck-balloon-rotator__content {

	/* Disable default annotation shadow inside rotator with fake panels. */
	& .ck.ck-annotation-wrapper {
		box-shadow: none;
	}
}
`],sourceRoot:""}]);const P=x},5380:(L,B,_)=>{_.d(B,{A:()=>P});var q=_(9372),U=_.n(q),H=_(935),x=_.n(H)()(U());x.push([L.id,".ck .ck-fake-panel{position:absolute;z-index:calc(var(--ck-z-panel) - 1)}.ck .ck-fake-panel div{position:absolute}.ck .ck-fake-panel div:first-child{z-index:2}.ck .ck-fake-panel div:nth-child(2){z-index:1}:root{--ck-balloon-fake-panel-offset-horizontal:6px;--ck-balloon-fake-panel-offset-vertical:6px}.ck .ck-fake-panel div{background:var(--ck-color-panel-background);border:1px solid var(--ck-color-panel-border);border-radius:var(--ck-border-radius);box-shadow:var(--ck-drop-shadow),0 0;height:100%;min-height:15px;width:100%}.ck .ck-fake-panel div:first-child{margin-left:var(--ck-balloon-fake-panel-offset-horizontal);margin-top:var(--ck-balloon-fake-panel-offset-vertical)}.ck .ck-fake-panel div:nth-child(2){margin-left:calc(var(--ck-balloon-fake-panel-offset-horizontal)*2);margin-top:calc(var(--ck-balloon-fake-panel-offset-vertical)*2)}.ck .ck-fake-panel div:nth-child(3){margin-left:calc(var(--ck-balloon-fake-panel-offset-horizontal)*3);margin-top:calc(var(--ck-balloon-fake-panel-offset-vertical)*3)}.ck .ck-balloon-panel_arrow_s+.ck-fake-panel,.ck .ck-balloon-panel_arrow_se+.ck-fake-panel,.ck .ck-balloon-panel_arrow_sw+.ck-fake-panel{--ck-balloon-fake-panel-offset-vertical:-6px}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/panel/fakepanel.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/fakepanel.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAKA,mBACC,iBAAkB,CAGlB,mCACD,CAEA,uBACC,iBACD,CAEA,mCACC,SACD,CAEA,oCACC,SACD,CCfA,MACC,6CAA8C,CAC9C,2CACD,CAGA,uBAKC,2CAA4C,CAC5C,6CAA8C,CAC9C,qCAAsC,CCXtC,oCAA8B,CDc9B,WAAY,CAPZ,eAAgB,CAMhB,UAED,CAEA,mCACC,0DAA2D,CAC3D,uDACD,CAEA,oCACC,kEAAqE,CACrE,+DACD,CACA,oCACC,kEAAqE,CACrE,+DACD,CAGA,yIAGC,4CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-fake-panel {
	position: absolute;

	/* Fake panels should be placed under main balloon content. */
	z-index: calc(var(--ck-z-panel) - 1);
}

.ck .ck-fake-panel div {
	position: absolute;
}

.ck .ck-fake-panel div:nth-child( 1 ) {
	z-index: 2;
}

.ck .ck-fake-panel div:nth-child( 2 ) {
	z-index: 1;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_shadow.css";

:root {
	--ck-balloon-fake-panel-offset-horizontal: 6px;
	--ck-balloon-fake-panel-offset-vertical: 6px;
}

/* Let's use \`.ck-balloon-panel\` appearance. See: balloonpanel.css. */
.ck .ck-fake-panel div {
	@mixin ck-drop-shadow;

	min-height: 15px;

	background: var(--ck-color-panel-background);
	border: 1px solid var(--ck-color-panel-border);
	border-radius: var(--ck-border-radius);

	width: 100%;
	height: 100%;
}

.ck .ck-fake-panel div:nth-child( 1 ) {
	margin-left: var(--ck-balloon-fake-panel-offset-horizontal);
	margin-top: var(--ck-balloon-fake-panel-offset-vertical);
}

.ck .ck-fake-panel div:nth-child( 2 ) {
	margin-left: calc(var(--ck-balloon-fake-panel-offset-horizontal) * 2);
	margin-top: calc(var(--ck-balloon-fake-panel-offset-vertical) * 2);
}
.ck .ck-fake-panel div:nth-child( 3 ) {
	margin-left: calc(var(--ck-balloon-fake-panel-offset-horizontal) * 3);
	margin-top: calc(var(--ck-balloon-fake-panel-offset-vertical) * 3);
}

/* If balloon is positioned above element, we need to move fake panel to the top. */
.ck .ck-balloon-panel_arrow_s + .ck-fake-panel,
.ck .ck-balloon-panel_arrow_se + .ck-fake-panel,
.ck .ck-balloon-panel_arrow_sw + .ck-fake-panel {
	--ck-balloon-fake-panel-offset-vertical: -6px;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const P=x},8298:(L,B,_)=>{_.d(B,{A:()=>P});var q=_(9372),U=_.n(q),H=_(935),x=_.n(H)()(U());x.push([L.id,".ck.ck-sticky-panel .ck-sticky-panel__content_sticky{position:fixed;top:0;z-index:var(--ck-z-panel)}.ck.ck-sticky-panel .ck-sticky-panel__content_sticky_bottom-limit{position:absolute;top:auto}.ck.ck-sticky-panel .ck-sticky-panel__content_sticky{border-top-left-radius:0;border-top-right-radius:0;border-width:0 1px 1px;box-shadow:var(--ck-drop-shadow),0 0}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/panel/stickypanel.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/stickypanel.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAMC,qDAEC,cAAe,CACf,KAAM,CAFN,yBAGD,CAEA,kEAEC,iBAAkB,CADlB,QAED,CCPA,qDAIC,wBAAyB,CACzB,yBAA0B,CAF1B,sBAAuB,CCFxB,oCDKA",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-sticky-panel {
	& .ck-sticky-panel__content_sticky {
		z-index: var(--ck-z-panel); /* #315 */
		position: fixed;
		top: 0;
	}

	& .ck-sticky-panel__content_sticky_bottom-limit {
		top: auto;
		position: absolute;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_shadow.css";

.ck.ck-sticky-panel {
	& .ck-sticky-panel__content_sticky {
		@mixin ck-drop-shadow;

		border-width: 0 1px 1px;
		border-top-left-radius: 0;
		border-top-right-radius: 0;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const P=x},2722:(L,B,_)=>{_.d(B,{A:()=>P});var q=_(9372),U=_.n(q),H=_(935),x=_.n(H)()(U());x.push([L.id,'.ck-vertical-form .ck-button:after{bottom:-1px;content:"";position:absolute;right:-1px;top:-1px;width:0;z-index:1}.ck-vertical-form .ck-button:focus:after{display:none}@media screen and (max-width:600px){.ck.ck-responsive-form .ck-button:after{bottom:-1px;content:"";position:absolute;right:-1px;top:-1px;width:0;z-index:1}.ck.ck-responsive-form .ck-button:focus:after{display:none}}.ck-vertical-form>.ck-button:nth-last-child(2):after{border-right:1px solid var(--ck-color-base-border)}.ck.ck-responsive-form{padding:var(--ck-spacing-large)}.ck.ck-responsive-form:focus{outline:none}[dir=ltr] .ck.ck-responsive-form>:not(:first-child),[dir=rtl] .ck.ck-responsive-form>:not(:last-child){margin-left:var(--ck-spacing-standard)}@media screen and (max-width:600px){.ck.ck-responsive-form{padding:0;width:calc(var(--ck-input-width)*.8)}.ck.ck-responsive-form .ck-labeled-field-view{margin:var(--ck-spacing-large) var(--ck-spacing-large) 0}.ck.ck-responsive-form .ck-labeled-field-view .ck-input-number,.ck.ck-responsive-form .ck-labeled-field-view .ck-input-text{min-width:0;width:100%}.ck.ck-responsive-form .ck-labeled-field-view .ck-labeled-field-view__error{white-space:normal}.ck.ck-responsive-form>.ck-button:nth-last-child(2):after{border-right:1px solid var(--ck-color-base-border)}.ck.ck-responsive-form>.ck-button:last-child,.ck.ck-responsive-form>.ck-button:nth-last-child(2){border-radius:0;margin-top:var(--ck-spacing-large);padding:var(--ck-spacing-standard)}.ck.ck-responsive-form>.ck-button:last-child:not(:focus),.ck.ck-responsive-form>.ck-button:nth-last-child(2):not(:focus){border-top:1px solid var(--ck-color-base-border)}[dir=ltr] .ck.ck-responsive-form>.ck-button:last-child,[dir=ltr] .ck.ck-responsive-form>.ck-button:nth-last-child(2),[dir=rtl] .ck.ck-responsive-form>.ck-button:last-child,[dir=rtl] .ck.ck-responsive-form>.ck-button:nth-last-child(2){margin-left:0}[dir=rtl] .ck.ck-responsive-form>.ck-button:last-child:last-of-type,[dir=rtl] .ck.ck-responsive-form>.ck-button:nth-last-child(2):last-of-type{border-right:1px solid var(--ck-color-base-border)}}',"",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/responsive-form/responsiveform.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/responsive-form/responsiveform.css"],names:[],mappings:"AAQC,mCAMC,WAAY,CALZ,UAAW,CAEX,iBAAkB,CAClB,UAAW,CACX,QAAS,CAHT,OAAQ,CAKR,SACD,CAEA,yCACC,YACD,CCdA,oCDoBE,wCAMC,WAAY,CALZ,UAAW,CAEX,iBAAkB,CAClB,UAAW,CACX,QAAS,CAHT,OAAQ,CAKR,SACD,CAEA,8CACC,YACD,CC9BF,CCAD,qDACC,kDACD,CAEA,uBACC,+BAoED,CAlEC,6BAEC,YACD,CASC,uGACC,sCACD,CDvBD,oCCMD,uBAqBE,SAAU,CACV,oCA+CF,CA7CE,8CACC,wDAYD,CAVC,4HAEC,WAAY,CACZ,UACD,CAGA,4EACC,kBACD,CAKA,0DACC,kDACD,CAGD,iGAIC,eAAgB,CADhB,kCAAmC,CADnC,kCAmBD,CAfC,yHACC,gDACD,CARD,0OAeE,aAMF,CAJE,+IACC,kDACD,CDrEH",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck-vertical-form .ck-button {
	&::after {
		content: "";
		width: 0;
		position: absolute;
		right: -1px;
		top: -1px;
		bottom: -1px;
		z-index: 1;
	}

	&:focus::after {
		display: none;
	}
}

.ck.ck-responsive-form {
	@mixin ck-media-phone {
		& .ck-button {
			&::after {
				content: "";
				width: 0;
				position: absolute;
				right: -1px;
				top: -1px;
				bottom: -1px;
				z-index: 1;
			}

			&:focus::after {
				display: none;
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck-vertical-form > .ck-button:nth-last-child(2)::after {
	border-right: 1px solid var(--ck-color-base-border);
}

.ck.ck-responsive-form {
	padding: var(--ck-spacing-large);

	&:focus {
		/* See: https://github.com/ckeditor/ckeditor5/issues/4773 */
		outline: none;
	}

	@mixin ck-dir ltr {
		& > :not(:first-child) {
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-dir rtl {
		& > :not(:last-child) {
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-media-phone {
		padding: 0;
		width: calc(.8 * var(--ck-input-width));

		& .ck-labeled-field-view {
			margin: var(--ck-spacing-large) var(--ck-spacing-large) 0;

			& .ck-input-text,
			& .ck-input-number {
				min-width: 0;
				width: 100%;
			}

			/* Let the long error messages wrap in the narrow form. */
			& .ck-labeled-field-view__error {
				white-space: normal;
			}
		}

		/* Styles for two last buttons in the form (save&cancel, edit&unlink, etc.). */
		& > .ck-button:nth-last-child(2) {
			&::after {
				border-right: 1px solid var(--ck-color-base-border);
			}
		}

		& > .ck-button:nth-last-child(1),
		& > .ck-button:nth-last-child(2) {
			padding: var(--ck-spacing-standard);
			margin-top: var(--ck-spacing-large);
			border-radius: 0;

			&:not(:focus) {
				border-top: 1px solid var(--ck-color-base-border);
			}

			@mixin ck-dir ltr {
				margin-left: 0;
			}

			@mixin ck-dir rtl {
				margin-left: 0;

				&:last-of-type {
					border-right: 1px solid var(--ck-color-base-border);
				}
			}
		}
	}
}
`],sourceRoot:""}]);const P=x},8107:(L,B,_)=>{_.d(B,{A:()=>P});var q=_(9372),U=_.n(q),H=_(935),x=_.n(H)()(U());x.push([L.id,".ck.ck-search>.ck-labeled-field-view>.ck-labeled-field-view__input-wrapper>.ck-icon{position:absolute;top:50%;transform:translateY(-50%)}[dir=ltr] .ck.ck-search>.ck-labeled-field-view>.ck-labeled-field-view__input-wrapper>.ck-icon{left:var(--ck-spacing-medium)}[dir=rtl] .ck.ck-search>.ck-labeled-field-view>.ck-labeled-field-view__input-wrapper>.ck-icon{right:var(--ck-spacing-medium)}.ck.ck-search>.ck-labeled-field-view .ck-search__reset{position:absolute;top:50%;transform:translateY(-50%)}.ck.ck-search>.ck-search__results>.ck-search__info>span:first-child{display:block}.ck.ck-search>.ck-search__results>.ck-search__info:not(.ck-hidden)~*{display:none}:root{--ck-search-field-view-horizontal-spacing:calc(var(--ck-icon-size) + var(--ck-spacing-medium))}.ck.ck-search>.ck-labeled-field-view .ck-input{width:100%}.ck.ck-search>.ck-labeled-field-view.ck-search__query_with-icon{--ck-labeled-field-label-default-position-x:var(--ck-search-field-view-horizontal-spacing)}.ck.ck-search>.ck-labeled-field-view.ck-search__query_with-icon>.ck-labeled-field-view__input-wrapper>.ck-icon{opacity:.5;pointer-events:none}.ck.ck-search>.ck-labeled-field-view.ck-search__query_with-icon .ck-input{width:100%}[dir=ltr] .ck.ck-search>.ck-labeled-field-view.ck-search__query_with-icon .ck-input,[dir=rtl] .ck.ck-search>.ck-labeled-field-view.ck-search__query_with-icon .ck-input:not(.ck-input-text_empty){padding-left:var(--ck-search-field-view-horizontal-spacing)}.ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset{--ck-labeled-field-empty-unfocused-max-width:100% - 2 * var(--ck-search-field-view-horizontal-spacing)}.ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset.ck-labeled-field-view_empty{--ck-labeled-field-empty-unfocused-max-width:100% - var(--ck-search-field-view-horizontal-spacing) - var(--ck-spacing-medium)}.ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset .ck-search__reset{background:none;min-height:auto;min-width:auto;opacity:.5;padding:0}[dir=ltr] .ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset .ck-search__reset{right:var(--ck-spacing-medium)}[dir=rtl] .ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset .ck-search__reset{left:var(--ck-spacing-medium)}.ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset .ck-search__reset:hover{opacity:1}.ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset .ck-input{width:100%}[dir=ltr] .ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset .ck-input:not(.ck-input-text_empty),[dir=rtl] .ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset .ck-input{padding-right:var(--ck-search-field-view-horizontal-spacing)}.ck.ck-search>.ck-search__results{min-width:100%}.ck.ck-search>.ck-search__results>.ck-search__info{padding:var(--ck-spacing-medium) var(--ck-spacing-large);width:100%}.ck.ck-search>.ck-search__results>.ck-search__info *{white-space:normal}.ck.ck-search>.ck-search__results>.ck-search__info>span:first-child{font-weight:700}.ck.ck-search>.ck-search__results>.ck-search__info>span:last-child{margin-top:var(--ck-spacing-medium)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/search/search.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/search/search.css"],names:[],mappings:"AASE,oFACC,iBAAkB,CAClB,OAAQ,CACR,0BASD,CAZA,8FAME,6BAMF,CAZA,8FAUE,8BAEF,CAEA,uDACC,iBAAkB,CAClB,OAAQ,CACR,0BACD,CAKC,oEACC,aACD,CAGA,qEACC,YACD,CChCH,MACC,8FACD,CAIE,+CACC,UACD,CAEA,gEACC,0FAoBD,CAlBC,+GACC,UAAW,CACX,mBACD,CAEA,0EACC,UAWD,CAJE,kMACC,2DACD,CAKH,iEACC,sGAwCD,CAtCC,6FACC,6HACD,CAEA,mFAIC,eAAgB,CAFhB,eAAgB,CADhB,cAAe,CAIf,UAAW,CACX,SAaD,CAnBA,6FASE,8BAUF,CAnBA,6FAaE,6BAMF,CAHC,yFACC,SACD,CAGD,2EACC,UAWD,CAZA,oMAUE,4DAEF,CAIF,kCACC,cAkBD,CAhBC,mDAEC,wDAAyD,CADzD,UAcD,CAXC,qDACC,kBACD,CAEA,oEACC,eACD,CAEA,mEACC,mCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck.ck-search {
	& > .ck-labeled-field-view {
		& > .ck-labeled-field-view__input-wrapper > .ck-icon {
			position: absolute;
			top: 50%;
			transform: translateY(-50%);

			@mixin ck-dir ltr {
				left: var(--ck-spacing-medium);
			}

			@mixin ck-dir rtl {
				right: var(--ck-spacing-medium);
			}
		}

		& .ck-search__reset {
			position: absolute;
			top: 50%;
			transform: translateY(-50%);
		}
	}

	& > .ck-search__results {
		& > .ck-search__info {
			& > span:first-child {
				display: block;
			}

			/* Hide the filtered view when nothing was found */
			&:not(.ck-hidden) ~ * {
				display: none;
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

:root {
	--ck-search-field-view-horizontal-spacing: calc(var(--ck-icon-size) + var(--ck-spacing-medium));
}

.ck.ck-search {
	& > .ck-labeled-field-view {
		& .ck-input {
			width: 100%;
		}

		&.ck-search__query_with-icon {
			--ck-labeled-field-label-default-position-x: var(--ck-search-field-view-horizontal-spacing);

			& > .ck-labeled-field-view__input-wrapper > .ck-icon {
				opacity: .5;
				pointer-events: none;
			}

			& .ck-input {
				width: 100%;

				@mixin ck-dir ltr {
					padding-left: var(--ck-search-field-view-horizontal-spacing);
				}

				@mixin ck-dir rtl {
					&:not(.ck-input-text_empty) {
						padding-left: var(--ck-search-field-view-horizontal-spacing);
					}
				}
			}
		}

		&.ck-search__query_with-reset {
			--ck-labeled-field-empty-unfocused-max-width: 100% - 2 * var(--ck-search-field-view-horizontal-spacing);

			&.ck-labeled-field-view_empty {
				--ck-labeled-field-empty-unfocused-max-width: 100% - var(--ck-search-field-view-horizontal-spacing) - var(--ck-spacing-medium);
			}

			& .ck-search__reset {
				min-width: auto;
				min-height: auto;

				background: none;
				opacity: .5;
				padding: 0;

				@mixin ck-dir ltr {
					right: var(--ck-spacing-medium);
				}

				@mixin ck-dir rtl {
					left: var(--ck-spacing-medium);
				}

				&:hover {
					opacity: 1;
				}
			}

			& .ck-input {
				width: 100%;

				@mixin ck-dir ltr {
					&:not(.ck-input-text_empty) {
						padding-right: var(--ck-search-field-view-horizontal-spacing);
					}
				}

				@mixin ck-dir rtl {
					padding-right: var(--ck-search-field-view-horizontal-spacing);
				}
			}
		}
	}

	& > .ck-search__results {
		min-width: 100%;

		& > .ck-search__info {
			width: 100%;
			padding: var(--ck-spacing-medium) var(--ck-spacing-large);

			& * {
				white-space: normal;
			}

			& > span:first-child {
				font-weight: bold;
			}

			& > span:last-child {
				margin-top: var(--ck-spacing-medium);
			}
		}
	}
}

`],sourceRoot:""}]);const P=x},109:(L,B,_)=>{_.d(B,{A:()=>P});var q=_(9372),U=_.n(q),H=_(935),x=_.n(H)()(U());x.push([L.id,".ck.ck-spinner-container{display:block;position:relative}.ck.ck-spinner{left:0;margin:0 auto;position:absolute;right:0;top:50%;transform:translateY(-50%);z-index:1}:root{--ck-toolbar-spinner-size:18px}.ck.ck-spinner-container{animation:rotate 1.5s linear infinite;height:var(--ck-toolbar-spinner-size);width:var(--ck-toolbar-spinner-size)}@media (prefers-reduced-motion:reduce){.ck.ck-spinner-container{animation-duration:3s}}.ck.ck-spinner{border:2px solid var(--ck-color-text);border-radius:50%;border-top:2px solid transparent;height:var(--ck-toolbar-spinner-size);width:var(--ck-toolbar-spinner-size)}@keyframes rotate{to{transform:rotate(1turn)}}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/spinner/spinner.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/spinner/spinner.css"],names:[],mappings:"AASA,yBACC,aAAc,CACd,iBACD,CAEA,eAGC,MAAO,CAEP,aAAc,CAJd,iBAAkB,CAGlB,OAAQ,CAFR,OAAQ,CAIR,0BAA2B,CAC3B,SACD,CCjBA,MACC,8BACD,CAEA,yBAGC,qCAAsC,CADtC,qCAAsC,CADtC,oCAOD,CAHC,uCALD,yBAME,qBAEF,CADC,CAGD,eAKC,qCAA6B,CAF7B,iBAAkB,CAElB,gCAA6B,CAH7B,qCAAsC,CADtC,oCAKD,CAEA,kBACC,GACC,uBACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-toolbar-spinner-size: 18px;
}

.ck.ck-spinner-container {
	display: block;
	position: relative;
}

.ck.ck-spinner {
	position: absolute;
	top: 50%;
	left: 0;
	right: 0;
	margin: 0 auto;
	transform: translateY(-50%);
	z-index: 1;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-toolbar-spinner-size: 18px;
}

.ck.ck-spinner-container {
	width: var(--ck-toolbar-spinner-size);
	height: var(--ck-toolbar-spinner-size);
	animation: 1.5s infinite rotate linear;

	@media (prefers-reduced-motion: reduce) {
		animation-duration: 3s;
	}
}

.ck.ck-spinner {
	width: var(--ck-toolbar-spinner-size);
	height: var(--ck-toolbar-spinner-size);
	border-radius: 50%;
	border: 2px solid var(--ck-color-text);
	border-top-color: transparent;
}

@keyframes rotate {
	to {
		transform: rotate(360deg)
	}
}
`],sourceRoot:""}]);const P=x},1671:(L,B,_)=>{_.d(B,{A:()=>P});var q=_(9372),U=_.n(q),H=_(935),x=_.n(H)()(U());x.push([L.id,".ck-textarea{overflow-x:hidden}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/textarea/textarea.css"],names:[],mappings:"AASA,aACC,iBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/*
 * This fixes a problem in Firefox when the initial height of the complement does not match the number of rows.
 * This bug is especially visible when rows=1.
 */
.ck-textarea {
	overflow-x: hidden
}
`],sourceRoot:""}]);const P=x},2710:(L,B,_)=>{_.d(B,{A:()=>P});var q=_(9372),U=_.n(q),H=_(935),x=_.n(H)()(U());x.push([L.id,".ck.ck-block-toolbar-button{position:absolute;z-index:var(--ck-z-default)}:root{--ck-color-block-toolbar-button:var(--ck-color-text);--ck-block-toolbar-button-size:var(--ck-font-size-normal)}.ck.ck-block-toolbar-button{color:var(--ck-color-block-toolbar-button);font-size:var(--ck-block-toolbar-size)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/toolbar/blocktoolbar.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/toolbar/blocktoolbar.css"],names:[],mappings:"AAKA,4BACC,iBAAkB,CAClB,2BACD,CCHA,MACC,oDAAqD,CACrD,yDACD,CAEA,4BACC,0CAA2C,CAC3C,sCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-block-toolbar-button {
	position: absolute;
	z-index: var(--ck-z-default);
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-block-toolbar-button: var(--ck-color-text);
	--ck-block-toolbar-button-size: var(--ck-font-size-normal);
}

.ck.ck-block-toolbar-button {
	color: var(--ck-color-block-toolbar-button);
	font-size: var(--ck-block-toolbar-size);
}
`],sourceRoot:""}]);const P=x},9677:(L,B,_)=>{_.d(B,{A:()=>P});var q=_(9372),U=_.n(q),H=_(935),x=_.n(H)()(U());x.push([L.id,".ck.ck-toolbar{align-items:center;display:flex;flex-flow:row nowrap;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}.ck.ck-toolbar>.ck-toolbar__items{align-items:center;display:flex;flex-flow:row wrap;flex-grow:1}.ck.ck-toolbar .ck.ck-toolbar__separator{display:inline-block}.ck.ck-toolbar .ck.ck-toolbar__separator:first-child,.ck.ck-toolbar .ck.ck-toolbar__separator:last-child{display:none}.ck.ck-toolbar .ck-toolbar__line-break{flex-basis:100%}.ck.ck-toolbar.ck-toolbar_grouping>.ck-toolbar__items{flex-wrap:nowrap}.ck.ck-toolbar.ck-toolbar_vertical>.ck-toolbar__items{flex-direction:column}.ck.ck-toolbar.ck-toolbar_floating>.ck-toolbar__items{flex-wrap:nowrap}.ck.ck-toolbar>.ck.ck-toolbar__grouped-dropdown>.ck-dropdown__button .ck-dropdown__arrow{display:none}.ck.ck-toolbar{border-radius:0}.ck-rounded-corners .ck.ck-toolbar,.ck.ck-toolbar.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-toolbar{background:var(--ck-color-toolbar-background);border:1px solid var(--ck-color-toolbar-border);padding:0 var(--ck-spacing-small)}.ck.ck-toolbar .ck.ck-toolbar__separator{align-self:stretch;background:var(--ck-color-toolbar-border);margin-bottom:var(--ck-spacing-small);margin-top:var(--ck-spacing-small);min-width:1px;width:1px}.ck.ck-toolbar .ck-toolbar__line-break{height:0}.ck.ck-toolbar>.ck-toolbar__items>:not(.ck-toolbar__line-break){margin-right:var(--ck-spacing-small)}.ck.ck-toolbar>.ck-toolbar__items:empty+.ck.ck-toolbar__separator{display:none}.ck.ck-toolbar>.ck-toolbar__items>:not(.ck-toolbar__line-break),.ck.ck-toolbar>.ck.ck-toolbar__grouped-dropdown{margin-bottom:var(--ck-spacing-small);margin-top:var(--ck-spacing-small)}.ck.ck-toolbar.ck-toolbar_vertical{padding:0}.ck.ck-toolbar.ck-toolbar_vertical>.ck-toolbar__items>.ck{border-radius:0;margin:0;width:100%}.ck.ck-toolbar.ck-toolbar_compact{padding:0}.ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>*{margin:0}.ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>:not(:first-child):not(:last-child){border-radius:0}.ck.ck-toolbar>.ck.ck-toolbar__grouped-dropdown>.ck.ck-button.ck-dropdown__button{padding-left:var(--ck-spacing-tiny)}.ck.ck-toolbar .ck-toolbar__nested-toolbar-dropdown>.ck-dropdown__panel{min-width:auto}.ck.ck-toolbar .ck-toolbar__nested-toolbar-dropdown>.ck-button>.ck-button__label{max-width:7em;width:auto}.ck.ck-toolbar:focus{outline:none}.ck-toolbar-container .ck.ck-toolbar{border:0}.ck.ck-toolbar[dir=rtl]>.ck-toolbar__items>.ck,[dir=rtl] .ck.ck-toolbar>.ck-toolbar__items>.ck{margin-right:0}.ck.ck-toolbar[dir=rtl]:not(.ck-toolbar_compact)>.ck-toolbar__items>.ck,[dir=rtl] .ck.ck-toolbar:not(.ck-toolbar_compact)>.ck-toolbar__items>.ck{margin-left:var(--ck-spacing-small)}.ck.ck-toolbar[dir=rtl]>.ck-toolbar__items>.ck:last-child,[dir=rtl] .ck.ck-toolbar>.ck-toolbar__items>.ck:last-child{margin-left:0}.ck.ck-toolbar.ck-toolbar_compact[dir=rtl]>.ck-toolbar__items>.ck:first-child,[dir=rtl] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:first-child{border-bottom-left-radius:0;border-top-left-radius:0}.ck.ck-toolbar.ck-toolbar_compact[dir=rtl]>.ck-toolbar__items>.ck:last-child,[dir=rtl] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:last-child{border-bottom-right-radius:0;border-top-right-radius:0}.ck.ck-toolbar.ck-toolbar_grouping[dir=rtl]>.ck-toolbar__items:not(:empty):not(:only-child),.ck.ck-toolbar[dir=rtl]>.ck.ck-toolbar__separator,[dir=rtl] .ck.ck-toolbar.ck-toolbar_grouping>.ck-toolbar__items:not(:empty):not(:only-child),[dir=rtl] .ck.ck-toolbar>.ck.ck-toolbar__separator{margin-left:var(--ck-spacing-small)}.ck.ck-toolbar[dir=ltr]>.ck-toolbar__items>.ck:last-child,[dir=ltr] .ck.ck-toolbar>.ck-toolbar__items>.ck:last-child{margin-right:0}.ck.ck-toolbar.ck-toolbar_compact[dir=ltr]>.ck-toolbar__items>.ck:first-child,[dir=ltr] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:first-child{border-bottom-right-radius:0;border-top-right-radius:0}.ck.ck-toolbar.ck-toolbar_compact[dir=ltr]>.ck-toolbar__items>.ck:last-child,[dir=ltr] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:last-child{border-bottom-left-radius:0;border-top-left-radius:0}.ck.ck-toolbar.ck-toolbar_grouping[dir=ltr]>.ck-toolbar__items:not(:empty):not(:only-child),.ck.ck-toolbar[dir=ltr]>.ck.ck-toolbar__separator,[dir=ltr] .ck.ck-toolbar.ck-toolbar_grouping>.ck-toolbar__items:not(:empty):not(:only-child),[dir=ltr] .ck.ck-toolbar>.ck.ck-toolbar__separator{margin-right:var(--ck-spacing-small)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/toolbar/toolbar.css","webpack://./../ckeditor5-ui/theme/mixins/_unselectable.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/toolbar/toolbar.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAOA,eAKC,kBAAmB,CAFnB,YAAa,CACb,oBAAqB,CCFrB,qBAAsB,CACtB,wBAAyB,CACzB,oBAAqB,CACrB,gBD6CD,CA3CC,kCAGC,kBAAmB,CAFnB,YAAa,CACb,kBAAmB,CAEnB,WAED,CAEA,yCACC,oBAWD,CAJC,yGAEC,YACD,CAGD,uCACC,eACD,CAEA,sDACC,gBACD,CAEA,sDACC,qBACD,CAEA,sDACC,gBACD,CAGC,yFACC,YACD,CE/CF,eCGC,eDwGD,CA3GA,qECOE,qCDoGF,CA3GA,eAGC,6CAA8C,CAE9C,+CAAgD,CADhD,iCAuGD,CApGC,yCACC,kBAAmB,CAGnB,yCAA0C,CAO1C,qCAAsC,CADtC,kCAAmC,CAPnC,aAAc,CADd,SAUD,CAEA,uCACC,QACD,CAGC,gEAEC,oCACD,CAIA,kEACC,YACD,CAGD,gHAIC,qCAAsC,CADtC,kCAED,CAEA,mCAEC,SAaD,CAVC,0DAQC,eAAgB,CAHhB,QAAS,CAHT,UAOD,CAGD,kCAEC,SAWD,CATC,uDAEC,QAMD,CAHC,yFACC,eACD,CASD,kFACC,mCACD,CAMA,wEACC,cACD,CAEA,iFACC,aAAc,CACd,UACD,CAGD,qBACC,YACD,CAtGD,qCAyGE,QAEF,CAYC,+FACC,cACD,CAEA,iJAEC,mCACD,CAEA,qHACC,aACD,CAIC,6JAEC,2BAA4B,CAD5B,wBAED,CAGA,2JAEC,4BAA6B,CAD7B,yBAED,CASD,8RACC,mCACD,CAWA,qHACC,cACD,CAIC,6JAEC,4BAA6B,CAD7B,yBAED,CAGA,2JAEC,2BAA4B,CAD5B,wBAED,CASD,8RACC,oCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../mixins/_unselectable.css";

.ck.ck-toolbar {
	@mixin ck-unselectable;

	display: flex;
	flex-flow: row nowrap;
	align-items: center;

	& > .ck-toolbar__items {
		display: flex;
		flex-flow: row wrap;
		align-items: center;
		flex-grow: 1;

	}

	& .ck.ck-toolbar__separator {
		display: inline-block;

		/*
		 * A leading or trailing separator makes no sense (separates from nothing on one side).
		 * For instance, it can happen when toolbar items (also separators) are getting grouped one by one and
		 * moved to another toolbar in the dropdown.
		 */
		&:first-child,
		&:last-child {
			display: none;
		}
	}

	& .ck-toolbar__line-break {
		flex-basis: 100%;
	}

	&.ck-toolbar_grouping > .ck-toolbar__items {
		flex-wrap: nowrap;
	}

	&.ck-toolbar_vertical > .ck-toolbar__items {
		flex-direction: column;
	}

	&.ck-toolbar_floating > .ck-toolbar__items {
		flex-wrap: nowrap;
	}

	& > .ck.ck-toolbar__grouped-dropdown {
		& > .ck-dropdown__button .ck-dropdown__arrow {
			display: none;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Makes element unselectable.
 */
@define-mixin ck-unselectable {
	-moz-user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;
	user-select: none
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck.ck-toolbar {
	@mixin ck-rounded-corners;

	background: var(--ck-color-toolbar-background);
	padding: 0 var(--ck-spacing-small);
	border: 1px solid var(--ck-color-toolbar-border);

	& .ck.ck-toolbar__separator {
		align-self: stretch;
		width: 1px;
		min-width: 1px;
		background: var(--ck-color-toolbar-border);

		/*
		 * These margins make the separators look better in balloon toolbars (when aligned with the "tip").
		 * See https://github.com/ckeditor/ckeditor5/issues/7493.
		 */
		margin-top: var(--ck-spacing-small);
		margin-bottom: var(--ck-spacing-small);
	}

	& .ck-toolbar__line-break {
		height: 0;
	}

	& > .ck-toolbar__items {
		& > *:not(.ck-toolbar__line-break) {
			/* (#11) Separate toolbar items. */
			margin-right: var(--ck-spacing-small);
		}

		/* Don't display a separator after an empty items container, for instance,
		when all items were grouped */
		&:empty + .ck.ck-toolbar__separator {
			display: none;
		}
	}

	& > .ck-toolbar__items > *:not(.ck-toolbar__line-break),
	& > .ck.ck-toolbar__grouped-dropdown {
		/* Make sure items wrapped to the next line have v-spacing */
		margin-top: var(--ck-spacing-small);
		margin-bottom: var(--ck-spacing-small);
	}

	&.ck-toolbar_vertical {
		/* Items in a vertical toolbar span the entire width. */
		padding: 0;

		/* Specificity matters here. See https://github.com/ckeditor/ckeditor5-theme-lark/issues/168. */
		& > .ck-toolbar__items > .ck {
			/* Items in a vertical toolbar should span the horizontal space. */
			width: 100%;

			/* Items in a vertical toolbar should have no margin. */
			margin: 0;

			/* Items in a vertical toolbar span the entire width so rounded corners are pointless. */
			border-radius: 0;
		}
	}

	&.ck-toolbar_compact {
		/* No spacing around items. */
		padding: 0;

		& > .ck-toolbar__items > * {
			/* Compact toolbar items have no spacing between them. */
			margin: 0;

			/* "Middle" children should have no rounded corners. */
			&:not(:first-child):not(:last-child) {
				border-radius: 0;
			}
		}
	}

	& > .ck.ck-toolbar__grouped-dropdown {
		/*
		 * Dropdown button has asymmetric padding to fit the arrow.
		 * This button has no arrow so let's revert that padding back to normal.
		 */
		& > .ck.ck-button.ck-dropdown__button {
			padding-left: var(--ck-spacing-tiny);
		}
	}

	/* A drop-down containing the nested toolbar with configured items. */
	& .ck-toolbar__nested-toolbar-dropdown {
		/* Prevent empty space in the panel when the dropdown label is visible and long but the toolbar has few items. */
		& > .ck-dropdown__panel {
			min-width: auto;
		}

		& > .ck-button > .ck-button__label {
			max-width: 7em;
			width: auto;
		}
	}

	&:focus {
		outline: none;
	}

	@nest .ck-toolbar-container & {
		border: 0;
	}
}

/* stylelint-disable */

/*
 * Styles for RTL toolbars.
 *
 * Note: In some cases (e.g. a decoupled editor), the toolbar has its own "dir"
 * because its parent is not controlled by the editor framework.
 */
[dir="rtl"] .ck.ck-toolbar,
.ck.ck-toolbar[dir="rtl"] {
	& > .ck-toolbar__items > .ck {
		margin-right: 0;
	}

	&:not(.ck-toolbar_compact) > .ck-toolbar__items > .ck {
		/* (#11) Separate toolbar items. */
		margin-left: var(--ck-spacing-small);
	}

	& > .ck-toolbar__items > .ck:last-child {
		margin-left: 0;
	}

	&.ck-toolbar_compact > .ck-toolbar__items > .ck {
		/* No rounded corners on the right side of the first child. */
		&:first-child {
			border-top-left-radius: 0;
			border-bottom-left-radius: 0;
		}

		/* No rounded corners on the left side of the last child. */
		&:last-child {
			border-top-right-radius: 0;
			border-bottom-right-radius: 0;
		}
	}

	/* Separate the the separator form the grouping dropdown when some items are grouped. */
	& > .ck.ck-toolbar__separator {
		margin-left: var(--ck-spacing-small);
	}

	/* Some spacing between the items and the separator before the grouped items dropdown. */
	&.ck-toolbar_grouping > .ck-toolbar__items:not(:empty):not(:only-child) {
		margin-left: var(--ck-spacing-small);
	}
}

/*
 * Styles for LTR toolbars.
 *
 * Note: In some cases (e.g. a decoupled editor), the toolbar has its own "dir"
 * because its parent is not controlled by the editor framework.
 */
[dir="ltr"] .ck.ck-toolbar,
.ck.ck-toolbar[dir="ltr"] {
	& > .ck-toolbar__items > .ck:last-child {
		margin-right: 0;
	}

	&.ck-toolbar_compact > .ck-toolbar__items > .ck {
		/* No rounded corners on the right side of the first child. */
		&:first-child {
			border-top-right-radius: 0;
			border-bottom-right-radius: 0;
		}

		/* No rounded corners on the left side of the last child. */
		&:last-child {
			border-top-left-radius: 0;
			border-bottom-left-radius: 0;
		}
	}

	/* Separate the the separator form the grouping dropdown when some items are grouped. */
	& > .ck.ck-toolbar__separator {
		margin-right: var(--ck-spacing-small);
	}

	/* Some spacing between the items and the separator before the grouped items dropdown. */
	&.ck-toolbar_grouping > .ck-toolbar__items:not(:empty):not(:only-child) {
		margin-right: var(--ck-spacing-small);
	}
}

/* stylelint-enable */
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const P=x},9205:(L,B,_)=>{_.d(B,{A:()=>P});var q=_(9372),U=_.n(q),H=_(935),x=_.n(H)()(U());x.push([L.id,".ck.ck-balloon-panel.ck-tooltip{-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none;z-index:calc(var(--ck-z-dialog) + 100);--ck-balloon-border-width:0px;--ck-balloon-arrow-offset:0px;--ck-balloon-arrow-half-width:4px;--ck-balloon-arrow-height:4px;--ck-tooltip-text-padding:4px;--ck-color-panel-background:var(--ck-color-tooltip-background);padding:0 var(--ck-spacing-medium)}.ck.ck-balloon-panel.ck-tooltip .ck-tooltip__text{color:var(--ck-color-tooltip-text);font-size:.9em;line-height:1.5}.ck.ck-balloon-panel.ck-tooltip.ck-tooltip_multi-line .ck-tooltip__text{display:inline-block;max-width:200px;padding:var(--ck-tooltip-text-padding) 0;white-space:break-spaces}.ck.ck-balloon-panel.ck-tooltip{box-shadow:none}.ck.ck-balloon-panel.ck-tooltip:before{display:none}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/tooltip/tooltip.css","webpack://./../ckeditor5-ui/theme/mixins/_unselectable.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/tooltip/tooltip.css"],names:[],mappings:"AAOA,gCCEC,qBAAsB,CACtB,wBAAyB,CACzB,oBAAqB,CACrB,gBAAgB,CDFhB,sCAAyC,CEFzC,6BAA8B,CAC9B,6BAA8B,CAC9B,iCAAkC,CAClC,6BAA8B,CAC9B,6BAA8B,CAC9B,8DAA+D,CAE/D,kCFJD,CEMC,kDAGC,kCAAmC,CAFnC,cAAe,CACf,eAED,CAEA,wEAEC,oBAAqB,CAErB,eAAgB,CADhB,wCAAyC,CAFzC,wBAID,CArBD,gCAwBC,eAMD,CAHC,uCACC,YACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../mixins/_unselectable.css";

.ck.ck-balloon-panel.ck-tooltip {
	@mixin ck-unselectable;

	z-index: calc( var(--ck-z-dialog) + 100 );
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Makes element unselectable.
 */
@define-mixin ck-unselectable {
	-moz-user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;
	user-select: none
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";

.ck.ck-balloon-panel.ck-tooltip {
	--ck-balloon-border-width: 0px;
	--ck-balloon-arrow-offset: 0px;
	--ck-balloon-arrow-half-width: 4px;
	--ck-balloon-arrow-height: 4px;
	--ck-tooltip-text-padding: 4px;
	--ck-color-panel-background: var(--ck-color-tooltip-background);

	padding: 0 var(--ck-spacing-medium);

	& .ck-tooltip__text {
		font-size: .9em;
		line-height: 1.5;
		color: var(--ck-color-tooltip-text);
	}

	&.ck-tooltip_multi-line .ck-tooltip__text {
		white-space: break-spaces;
		display: inline-block;
		padding: var(--ck-tooltip-text-padding) 0;
		max-width: 200px;
	}

	/* Reset balloon panel styles */
	box-shadow: none;

	/* Hide the default shadow of the .ck-balloon-panel tip */
	&::before {
		display: none;
	}
}
`],sourceRoot:""}]);const P=x},7676:(L,B,_)=>{_.d(B,{A:()=>P});var q=_(9372),U=_.n(q),H=_(935),x=_.n(H)()(U());x.push([L.id,".ck-hidden{display:none!important}:root{--ck-z-default:1;--ck-z-panel:calc(var(--ck-z-default) + 999);--ck-z-dialog:9999}.ck-transitions-disabled,.ck-transitions-disabled *{transition:none!important}:root{--ck-powered-by-line-height:10px;--ck-powered-by-padding-vertical:2px;--ck-powered-by-padding-horizontal:4px;--ck-powered-by-text-color:#4f4f4f;--ck-powered-by-border-radius:var(--ck-border-radius);--ck-powered-by-background:#fff;--ck-powered-by-border-color:var(--ck-color-focus-border)}.ck.ck-balloon-panel.ck-powered-by-balloon{--ck-border-radius:var(--ck-powered-by-border-radius);background:var(--ck-powered-by-background);box-shadow:none;min-height:unset;z-index:calc(var(--ck-z-panel) - 1)}.ck.ck-balloon-panel.ck-powered-by-balloon .ck.ck-powered-by{line-height:var(--ck-powered-by-line-height)}.ck.ck-balloon-panel.ck-powered-by-balloon .ck.ck-powered-by a{align-items:center;cursor:pointer;display:flex;filter:grayscale(80%);line-height:var(--ck-powered-by-line-height);opacity:.66;padding:var(--ck-powered-by-padding-vertical) var(--ck-powered-by-padding-horizontal)}.ck.ck-balloon-panel.ck-powered-by-balloon .ck.ck-powered-by .ck-powered-by__label{color:var(--ck-powered-by-text-color);cursor:pointer;font-size:7.5px;font-weight:700;letter-spacing:-.2px;line-height:normal;margin-right:4px;padding-left:2px;text-transform:uppercase}.ck.ck-balloon-panel.ck-powered-by-balloon .ck.ck-powered-by .ck-icon{cursor:pointer;display:block}.ck.ck-balloon-panel.ck-powered-by-balloon .ck.ck-powered-by:hover a{filter:grayscale(0);opacity:1}.ck.ck-balloon-panel.ck-powered-by-balloon[class*=position_inside]{border-color:transparent}.ck.ck-balloon-panel.ck-powered-by-balloon[class*=position_border]{border:var(--ck-focus-ring);border-color:var(--ck-powered-by-border-color)}:root{--ck-color-base-foreground:#fafafa;--ck-color-base-background:#fff;--ck-color-base-border:#ccced1;--ck-color-base-action:#53a336;--ck-color-base-focus:#6cb5f9;--ck-color-base-text:#333;--ck-color-base-active:#2977ff;--ck-color-base-active-focus:#0d65ff;--ck-color-base-error:#db3700;--ck-color-focus-border-coordinates:218,81.8%,56.9%;--ck-color-focus-border:hsl(var(--ck-color-focus-border-coordinates));--ck-color-focus-outer-shadow:#cae1fc;--ck-color-focus-disabled-shadow:rgba(119,186,248,.3);--ck-color-focus-error-shadow:rgba(255,64,31,.3);--ck-color-text:var(--ck-color-base-text);--ck-color-shadow-drop:rgba(0,0,0,.15);--ck-color-shadow-drop-active:rgba(0,0,0,.2);--ck-color-shadow-inner:rgba(0,0,0,.1);--ck-color-button-default-background:transparent;--ck-color-button-default-hover-background:#f0f0f0;--ck-color-button-default-active-background:#f0f0f0;--ck-color-button-default-disabled-background:transparent;--ck-color-button-on-background:#f0f7ff;--ck-color-button-on-hover-background:#dbecff;--ck-color-button-on-active-background:#dbecff;--ck-color-button-on-disabled-background:#f0f2f4;--ck-color-button-on-color:#2977ff;--ck-color-button-action-background:var(--ck-color-base-action);--ck-color-button-action-hover-background:#4d9d30;--ck-color-button-action-active-background:#4d9d30;--ck-color-button-action-disabled-background:#7ec365;--ck-color-button-action-text:var(--ck-color-base-background);--ck-color-button-save:#008a00;--ck-color-button-cancel:#db3700;--ck-color-switch-button-off-background:#939393;--ck-color-switch-button-off-hover-background:#7d7d7d;--ck-color-switch-button-on-background:var(--ck-color-button-action-background);--ck-color-switch-button-on-hover-background:#4d9d30;--ck-color-switch-button-inner-background:var(--ck-color-base-background);--ck-color-switch-button-inner-shadow:rgba(0,0,0,.1);--ck-color-dropdown-panel-background:var(--ck-color-base-background);--ck-color-dropdown-panel-border:var(--ck-color-base-border);--ck-color-dialog-background:var(--ck-custom-background);--ck-color-dialog-form-header-border:var(--ck-custom-border);--ck-color-input-background:var(--ck-color-base-background);--ck-color-input-border:var(--ck-color-base-border);--ck-color-input-error-border:var(--ck-color-base-error);--ck-color-input-text:var(--ck-color-base-text);--ck-color-input-disabled-background:#f2f2f2;--ck-color-input-disabled-border:var(--ck-color-base-border);--ck-color-input-disabled-text:#757575;--ck-color-list-background:var(--ck-color-base-background);--ck-color-list-button-hover-background:var(--ck-color-button-default-hover-background);--ck-color-list-button-on-background:var(--ck-color-button-on-color);--ck-color-list-button-on-background-focus:var(--ck-color-button-on-color);--ck-color-list-button-on-text:var(--ck-color-base-background);--ck-color-panel-background:var(--ck-color-base-background);--ck-color-panel-border:var(--ck-color-base-border);--ck-color-toolbar-background:var(--ck-color-base-background);--ck-color-toolbar-border:var(--ck-color-base-border);--ck-color-tooltip-background:var(--ck-color-base-text);--ck-color-tooltip-text:var(--ck-color-base-background);--ck-color-engine-placeholder-text:#707070;--ck-color-upload-bar-background:#6cb5f9;--ck-color-link-default:#0000f0;--ck-color-link-selected-background:rgba(31,176,255,.1);--ck-color-link-fake-selection:rgba(31,176,255,.3);--ck-color-highlight-background:#ff0;--ck-color-light-red:#fcc;--ck-disabled-opacity:.5;--ck-focus-outer-shadow-geometry:0 0 0 3px;--ck-focus-outer-shadow:var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-outer-shadow);--ck-focus-disabled-outer-shadow:var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-disabled-shadow);--ck-focus-error-outer-shadow:var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-error-shadow);--ck-focus-ring:1px solid var(--ck-color-focus-border);--ck-font-size-base:13px;--ck-line-height-base:1.84615;--ck-font-face:Helvetica,Arial,Tahoma,Verdana,Sans-Serif;--ck-font-size-tiny:0.7em;--ck-font-size-small:0.75em;--ck-font-size-normal:1em;--ck-font-size-big:1.4em;--ck-font-size-large:1.8em;--ck-ui-component-min-height:2.3em}.ck-reset_all :not(.ck-reset_all-excluded *),.ck.ck-reset,.ck.ck-reset_all{background:transparent;border:0;box-sizing:border-box;height:auto;margin:0;padding:0;position:static;text-decoration:none;transition:none;vertical-align:middle;width:auto;word-wrap:break-word}.ck-reset_all :not(.ck-reset_all-excluded *),.ck.ck-reset_all{border-collapse:collapse;color:var(--ck-color-text);cursor:auto;float:none;font:normal normal normal var(--ck-font-size-base)/var(--ck-line-height-base) var(--ck-font-face);text-align:left;white-space:nowrap}.ck-reset_all .ck-rtl :not(.ck-reset_all-excluded *){text-align:right}.ck-reset_all iframe:not(.ck-reset_all-excluded *){vertical-align:inherit}.ck-reset_all textarea:not(.ck-reset_all-excluded *){white-space:pre-wrap}.ck-reset_all input[type=password]:not(.ck-reset_all-excluded *),.ck-reset_all input[type=text]:not(.ck-reset_all-excluded *),.ck-reset_all textarea:not(.ck-reset_all-excluded *){cursor:text}.ck-reset_all input[type=password][disabled]:not(.ck-reset_all-excluded *),.ck-reset_all input[type=text][disabled]:not(.ck-reset_all-excluded *),.ck-reset_all textarea[disabled]:not(.ck-reset_all-excluded *){cursor:default}.ck-reset_all fieldset:not(.ck-reset_all-excluded *){border:2px groove #dfdee3;padding:10px}.ck-reset_all button:not(.ck-reset_all-excluded *)::-moz-focus-inner{border:0;padding:0}.ck[dir=rtl],.ck[dir=rtl] .ck{text-align:right}:root{--ck-border-radius:2px;--ck-inner-shadow:2px 2px 3px var(--ck-color-shadow-inner) inset;--ck-drop-shadow:0 1px 2px 1px var(--ck-color-shadow-drop);--ck-drop-shadow-active:0 3px 6px 1px var(--ck-color-shadow-drop-active);--ck-spacing-unit:0.6em;--ck-spacing-large:calc(var(--ck-spacing-unit)*1.5);--ck-spacing-standard:var(--ck-spacing-unit);--ck-spacing-medium:calc(var(--ck-spacing-unit)*0.8);--ck-spacing-small:calc(var(--ck-spacing-unit)*0.5);--ck-spacing-tiny:calc(var(--ck-spacing-unit)*0.3);--ck-spacing-extra-tiny:calc(var(--ck-spacing-unit)*0.16)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/globals/_hidden.css","webpack://./../ckeditor5-ui/theme/globals/_zindex.css","webpack://./../ckeditor5-ui/theme/globals/_transition.css","webpack://./../ckeditor5-ui/theme/globals/_poweredby.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_colors.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_disabled.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_focus.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_fonts.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_reset.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_shadow.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_spacing.css"],names:[],mappings:"AAQA,WAGC,sBACD,CCPA,MACC,gBAAiB,CACjB,4CAA+C,CAC/C,kBACD,CCDA,oDAEC,yBACD,CCNA,MACC,gCAAiC,CACjC,oCAAqC,CACrC,sCAAuC,CACvC,kCAA2C,CAC3C,qDAAsD,CACtD,+BAA4C,CAC5C,yDACD,CAEA,2CACC,qDAAsD,CAGtD,0CAA2C,CAD3C,eAAgB,CAEhB,gBAAiB,CACjB,mCAiDD,CA/CC,6DACC,4CAoCD,CAlCC,+DAGC,kBAAmB,CAFnB,cAAe,CACf,YAAa,CAGb,qBAAsB,CACtB,4CAA6C,CAF7C,WAAY,CAGZ,qFACD,CAEA,mFASC,qCAAsC,CAFtC,cAAe,CANf,eAAgB,CAIhB,eAAiB,CAHjB,oBAAqB,CAMrB,kBAAmB,CAFnB,gBAAiB,CAHjB,gBAAiB,CACjB,wBAOD,CAEA,sEAEC,cAAe,CADf,aAED,CAGC,qEACC,mBAAqB,CACrB,SACD,CAIF,mEACC,wBACD,CAEA,mEACC,2BAA4B,CAC5B,8CACD,CChED,MACC,kCAAmD,CACnD,+BAAoD,CACpD,8BAAkD,CAClD,8BAAuD,CACvD,6BAAmD,CACnD,yBAA+C,CAC/C,8BAAsD,CACtD,oCAA4D,CAC5D,6BAAkD,CAIlD,mDAA4D,CAC5D,qEAA+E,CAC/E,qCAA4D,CAC5D,qDAA8D,CAC9D,gDAAyD,CACzD,yCAAqD,CACrD,sCAAsD,CACtD,4CAA0D,CAC1D,sCAAsD,CAItD,gDAAuD,CACvD,kDAAiE,CACjE,mDAAkE,CAClE,yDAA8D,CAE9D,uCAA6D,CAC7D,6CAAoE,CACpE,8CAAoE,CACpE,gDAAiE,CACjE,kCAAyD,CAGzD,+DAAsE,CACtE,iDAAsE,CACtE,kDAAsE,CACtE,oDAAoE,CACpE,6DAAsE,CAEtE,8BAAoD,CACpD,gCAAqD,CAErD,+CAA8D,CAC9D,qDAAiE,CACjE,+EAAqF,CACrF,oDAAuE,CACvE,yEAA8E,CAC9E,oDAAgE,CAIhE,oEAA2E,CAC3E,4DAAoE,CAIpE,wDAAiE,CACjE,4DAAmE,CAInE,2DAAoE,CACpE,mDAA6D,CAC7D,wDAAgE,CAChE,+CAA0D,CAC1D,4CAA2D,CAC3D,4DAAoE,CACpE,sCAAsD,CAItD,0DAAmE,CACnE,uFAA6F,CAC7F,oEAA2E,CAC3E,0EAA+E,CAC/E,8DAAsE,CAItE,2DAAoE,CACpE,mDAA6D,CAI7D,6DAAsE,CACtE,qDAA+D,CAI/D,uDAAgE,CAChE,uDAAiE,CAIjE,0CAAyD,CAIzD,wCAA2D,CAI3D,+BAAoD,CACpD,uDAAmE,CACnE,kDAAgE,CAIhE,oCAAyD,CAIzD,yBAAgD,CChHhD,wBAAyB,CCAzB,0CAA2C,CAK3C,gGAAiG,CAKjG,4GAA6G,CAK7G,sGAAuG,CAKvG,sDAAuD,CCvBvD,wBAAyB,CACzB,6BAA8B,CAC9B,wDAA6D,CAE7D,yBAA0B,CAC1B,2BAA4B,CAC5B,yBAA0B,CAC1B,wBAAyB,CACzB,0BAA2B,CCJ3B,kCJgHD,CI1GA,2EAYC,sBAAuB,CADvB,QAAS,CART,qBAAsB,CAEtB,WAAY,CAIZ,QAAS,CACT,SAAU,CAJV,eAAgB,CAOhB,oBAAqB,CAErB,eAAgB,CADhB,qBAAsB,CAVtB,UAAW,CAcX,oBACD,CAKA,8DAGC,wBAAyB,CAEzB,0BAA2B,CAG3B,WAAY,CACZ,UAAW,CALX,iGAAkG,CAElG,eAAgB,CAChB,kBAGD,CAGC,qDACC,gBACD,CAEA,mDAEC,sBACD,CAEA,qDACC,oBACD,CAEA,mLAGC,WACD,CAEA,iNAGC,cACD,CAEA,qDAEC,yBAAoC,CADpC,YAED,CAEA,qEAGC,QAAQ,CADR,SAED,CAMD,8BAEC,gBACD,CCxFA,MACC,sBAAuB,CCAvB,gEAAiE,CAKjE,0DAA2D,CAK3D,wEAAyE,CCbzE,uBAA8B,CAC9B,mDAA2D,CAC3D,4CAAkD,CAClD,oDAA4D,CAC5D,mDAA2D,CAC3D,kDAA2D,CAC3D,yDFFD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class which hides an element in DOM.
 */
.ck-hidden {
	/* Override selector specificity. Otherwise, all elements with some display
	style defined will override this one, which is not a desired result. */
	display: none !important;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-z-default: 1;
	--ck-z-panel: calc( var(--ck-z-default) + 999 );
	--ck-z-dialog: 9999;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class that disables all transitions of the element and its children.
 */
.ck-transitions-disabled,
.ck-transitions-disabled * {
	transition: none !important;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-powered-by-line-height: 10px;
	--ck-powered-by-padding-vertical: 2px;
	--ck-powered-by-padding-horizontal: 4px;
	--ck-powered-by-text-color: hsl(0, 0%, 31%);
	--ck-powered-by-border-radius: var(--ck-border-radius);
	--ck-powered-by-background: hsl(0, 0%, 100%);
	--ck-powered-by-border-color: var(--ck-color-focus-border);
}

.ck.ck-balloon-panel.ck-powered-by-balloon {
	--ck-border-radius: var(--ck-powered-by-border-radius);

	box-shadow: none;
	background: var(--ck-powered-by-background);
	min-height: unset;
	z-index: calc( var(--ck-z-panel) - 1 );

	& .ck.ck-powered-by {
		line-height: var(--ck-powered-by-line-height);

		& a {
			cursor: pointer;
			display: flex;
			align-items: center;
			opacity: .66;
			filter: grayscale(80%);
			line-height: var(--ck-powered-by-line-height);
			padding: var(--ck-powered-by-padding-vertical) var(--ck-powered-by-padding-horizontal);
		}

		& .ck-powered-by__label {
			font-size: 7.5px;
			letter-spacing: -.2px;
			padding-left: 2px;
			text-transform: uppercase;
			font-weight: bold;
			margin-right: 4px;
			cursor: pointer;
			line-height: normal;
			color: var(--ck-powered-by-text-color);

		}

		& .ck-icon {
			display: block;
			cursor: pointer;
		}

		&:hover {
			& a {
				filter: grayscale(0%);
				opacity: 1;
			}
		}
	}

	&[class*="position_inside"] {
		border-color: transparent;
	}

	&[class*="position_border"] {
		border: var(--ck-focus-ring);
		border-color: var(--ck-powered-by-border-color);
	}
}

`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-base-foreground: 								hsl(0, 0%, 98%);
	--ck-color-base-background: 								hsl(0, 0%, 100%);
	--ck-color-base-border: 									hsl(220, 6%, 81%);
	--ck-color-base-action: 									hsl(104, 50.2%, 42.5%);
	--ck-color-base-focus: 										hsl(209, 92%, 70%);
	--ck-color-base-text: 										hsl(0, 0%, 20%);
	--ck-color-base-active: 									hsl(218.1, 100%, 58%);
	--ck-color-base-active-focus:								hsl(218.2, 100%, 52.5%);
	--ck-color-base-error:										hsl(15, 100%, 43%);

	/* -- Generic colors ------------------------------------------------------------------------ */

	--ck-color-focus-border-coordinates: 						218, 81.8%, 56.9%;
	--ck-color-focus-border: 									hsl(var(--ck-color-focus-border-coordinates));
	--ck-color-focus-outer-shadow:								hsl(212.4, 89.3%, 89%);
	--ck-color-focus-disabled-shadow:							hsla(209, 90%, 72%,.3);
	--ck-color-focus-error-shadow:								hsla(9,100%,56%,.3);
	--ck-color-text: 											var(--ck-color-base-text);
	--ck-color-shadow-drop: 									hsla(0, 0%, 0%, 0.15);
	--ck-color-shadow-drop-active:								hsla(0, 0%, 0%, 0.2);
	--ck-color-shadow-inner: 									hsla(0, 0%, 0%, 0.1);

	/* -- Buttons ------------------------------------------------------------------------------- */

	--ck-color-button-default-background: 						transparent;
	--ck-color-button-default-hover-background: 				hsl(0, 0%, 94.1%);
	--ck-color-button-default-active-background: 				hsl(0, 0%, 94.1%);
	--ck-color-button-default-disabled-background: 				transparent;

	--ck-color-button-on-background: 							hsl(212, 100%, 97.1%);
	--ck-color-button-on-hover-background: 						hsl(211.7, 100%, 92.9%);
	--ck-color-button-on-active-background: 					hsl(211.7, 100%, 92.9%);
	--ck-color-button-on-disabled-background: 					hsl(211, 15%, 95%);
	--ck-color-button-on-color:									hsl(218.1, 100%, 58%);


	--ck-color-button-action-background: 						var(--ck-color-base-action);
	--ck-color-button-action-hover-background: 					hsl(104, 53.2%, 40.2%);
	--ck-color-button-action-active-background: 				hsl(104, 53.2%, 40.2%);
	--ck-color-button-action-disabled-background: 				hsl(104, 44%, 58%);
	--ck-color-button-action-text: 								var(--ck-color-base-background);

	--ck-color-button-save: 									hsl(120, 100%, 27%);
	--ck-color-button-cancel: 									hsl(15, 100%, 43%);

	--ck-color-switch-button-off-background:					hsl(0, 0%, 57.6%);
	--ck-color-switch-button-off-hover-background:				hsl(0, 0%, 49%);
	--ck-color-switch-button-on-background:						var(--ck-color-button-action-background);
	--ck-color-switch-button-on-hover-background:				hsl(104, 53.2%, 40.2%);
	--ck-color-switch-button-inner-background:					var(--ck-color-base-background);
	--ck-color-switch-button-inner-shadow:						hsla(0, 0%, 0%, 0.1);

	/* -- Dropdown ------------------------------------------------------------------------------ */

	--ck-color-dropdown-panel-background: 						var(--ck-color-base-background);
	--ck-color-dropdown-panel-border: 							var(--ck-color-base-border);

	/* -- Dialog -------------------------------------------------------------------------------- */

	--ck-color-dialog-background: 								var(--ck-custom-background);
	--ck-color-dialog-form-header-border: 						var(--ck-custom-border);

	/* -- Input --------------------------------------------------------------------------------- */

	--ck-color-input-background: 								var(--ck-color-base-background);
	--ck-color-input-border: 									var(--ck-color-base-border);
	--ck-color-input-error-border:								var(--ck-color-base-error);
	--ck-color-input-text: 										var(--ck-color-base-text);
	--ck-color-input-disabled-background: 						hsl(0, 0%, 95%);
	--ck-color-input-disabled-border: 							var(--ck-color-base-border);
	--ck-color-input-disabled-text: 							hsl(0, 0%, 46%);

	/* -- List ---------------------------------------------------------------------------------- */

	--ck-color-list-background: 								var(--ck-color-base-background);
	--ck-color-list-button-hover-background: 					var(--ck-color-button-default-hover-background);
	--ck-color-list-button-on-background: 						var(--ck-color-button-on-color);
	--ck-color-list-button-on-background-focus: 				var(--ck-color-button-on-color);
	--ck-color-list-button-on-text:								var(--ck-color-base-background);

	/* -- Panel --------------------------------------------------------------------------------- */

	--ck-color-panel-background: 								var(--ck-color-base-background);
	--ck-color-panel-border: 									var(--ck-color-base-border);

	/* -- Toolbar ------------------------------------------------------------------------------- */

	--ck-color-toolbar-background: 								var(--ck-color-base-background);
	--ck-color-toolbar-border: 									var(--ck-color-base-border);

	/* -- Tooltip ------------------------------------------------------------------------------- */

	--ck-color-tooltip-background: 								var(--ck-color-base-text);
	--ck-color-tooltip-text: 									var(--ck-color-base-background);

	/* -- Engine -------------------------------------------------------------------------------- */

	--ck-color-engine-placeholder-text: 						hsl(0, 0%, 44%);

	/* -- Upload -------------------------------------------------------------------------------- */

	--ck-color-upload-bar-background:		 					hsl(209, 92%, 70%);

	/* -- Link -------------------------------------------------------------------------------- */

	--ck-color-link-default:									hsl(240, 100%, 47%);
	--ck-color-link-selected-background:						hsla(201, 100%, 56%, 0.1);
	--ck-color-link-fake-selection:								hsla(201, 100%, 56%, 0.3);

	/* -- Search result highlight ---------------------------------------------------------------- */

	--ck-color-highlight-background:							hsl(60, 100%, 50%);

	/* -- Generic colors ------------------------------------------------------------------------- */

	--ck-color-light-red:										hsl(0, 100%, 90%);
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/**
	 * An opacity value of disabled UI item.
	 */
	--ck-disabled-opacity: .5;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/**
	 * The geometry of the of focused element's outer shadow.
	 */
	--ck-focus-outer-shadow-geometry: 0 0 0 3px;

	/**
	 * A visual style of focused element's outer shadow.
	 */
	--ck-focus-outer-shadow: var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-outer-shadow);

	/**
	 * A visual style of focused element's outer shadow (when disabled).
	 */
	--ck-focus-disabled-outer-shadow: var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-disabled-shadow);

	/**
	 * A visual style of focused element's outer shadow (when has errors).
	 */
	--ck-focus-error-outer-shadow: var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-error-shadow);

	/**
	 * A visual style of focused element's border or outline.
	 */
	--ck-focus-ring: 1px solid var(--ck-color-focus-border);
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-font-size-base: 13px;
	--ck-line-height-base: 1.84615;
	--ck-font-face: Helvetica, Arial, Tahoma, Verdana, Sans-Serif;

	--ck-font-size-tiny: 0.7em;
	--ck-font-size-small: 0.75em;
	--ck-font-size-normal: 1em;
	--ck-font-size-big: 1.4em;
	--ck-font-size-large: 1.8em;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/* This is super-important. This is **manually** adjusted so a button without an icon
	is never smaller than a button with icon, additionally making sure that text-less buttons
	are perfect squares. The value is also shared by other components which should stay "in-line"
	with buttons. */
	--ck-ui-component-min-height: 2.3em;
}

/**
 * Resets an element, ignoring its children.
 */
.ck.ck-reset,
.ck.ck-reset_all,
.ck-reset_all *:not(.ck-reset_all-excluded *) {
	box-sizing: border-box;
	width: auto;
	height: auto;
	position: static;

	/* Do not include inheritable rules here. */
	margin: 0;
	padding: 0;
	border: 0;
	background: transparent;
	text-decoration: none;
	vertical-align: middle;
	transition: none;

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/105 */
	word-wrap: break-word;
}

/**
 * Resets an element AND its children.
 */
.ck.ck-reset_all,
.ck-reset_all *:not(.ck-reset_all-excluded *) {
	/* These are rule inherited by all children elements. */
	border-collapse: collapse;
	font: normal normal normal var(--ck-font-size-base)/var(--ck-line-height-base) var(--ck-font-face);
	color: var(--ck-color-text);
	text-align: left;
	white-space: nowrap;
	cursor: auto;
	float: none;
}

.ck-reset_all {
	& .ck-rtl *:not(.ck-reset_all-excluded *) {
		text-align: right;
	}

	& iframe:not(.ck-reset_all-excluded *) {
		/* For IE */
		vertical-align: inherit;
	}

	& textarea:not(.ck-reset_all-excluded *) {
		white-space: pre-wrap;
	}

	& textarea:not(.ck-reset_all-excluded *),
	& input[type="text"]:not(.ck-reset_all-excluded *),
	& input[type="password"]:not(.ck-reset_all-excluded *) {
		cursor: text;
	}

	& textarea[disabled]:not(.ck-reset_all-excluded *),
	& input[type="text"][disabled]:not(.ck-reset_all-excluded *),
	& input[type="password"][disabled]:not(.ck-reset_all-excluded *) {
		cursor: default;
	}

	& fieldset:not(.ck-reset_all-excluded *) {
		padding: 10px;
		border: 2px groove hsl(255, 7%, 88%);
	}

	& button:not(.ck-reset_all-excluded *)::-moz-focus-inner {
		/* See http://stackoverflow.com/questions/5517744/remove-extra-button-spacing-padding-in-firefox */
		padding: 0;
		border: 0
	}
}

/**
 * Default UI rules for RTL languages.
 */
.ck[dir="rtl"],
.ck[dir="rtl"] .ck {
	text-align: right;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Default border-radius value.
 */
:root{
	--ck-border-radius: 2px;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/**
	 * A visual style of element's inner shadow (i.e. input).
	 */
	--ck-inner-shadow: 2px 2px 3px var(--ck-color-shadow-inner) inset;

	/**
	 * A visual style of element's drop shadow (i.e. panel).
	 */
	--ck-drop-shadow: 0 1px 2px 1px var(--ck-color-shadow-drop);

	/**
	 * A visual style of element's active shadow (i.e. comment or suggestion).
	 */
	--ck-drop-shadow-active: 0 3px 6px 1px var(--ck-color-shadow-drop-active);
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-spacing-unit: 						0.6em;
	--ck-spacing-large: 					calc(var(--ck-spacing-unit) * 1.5);
	--ck-spacing-standard: 					var(--ck-spacing-unit);
	--ck-spacing-medium: 					calc(var(--ck-spacing-unit) * 0.8);
	--ck-spacing-small: 					calc(var(--ck-spacing-unit) * 0.5);
	--ck-spacing-tiny: 						calc(var(--ck-spacing-unit) * 0.3);
	--ck-spacing-extra-tiny: 				calc(var(--ck-spacing-unit) * 0.16);
}
`],sourceRoot:""}]);const P=x},695:(L,B,_)=>{_.d(B,{A:()=>P});var q=_(9372),U=_.n(q),H=_(935),x=_.n(H)()(U());x.push([L.id,":root{--ck-color-resizer:var(--ck-color-focus-border);--ck-color-resizer-tooltip-background:#262626;--ck-color-resizer-tooltip-text:#f2f2f2;--ck-resizer-border-radius:var(--ck-border-radius);--ck-resizer-tooltip-offset:10px;--ck-resizer-tooltip-height:calc(var(--ck-spacing-small)*2 + 10px)}.ck .ck-widget,.ck .ck-widget.ck-widget_with-selection-handle{position:relative}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle{position:absolute}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle .ck-icon{display:block}.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle{visibility:visible}.ck .ck-size-view{background:var(--ck-color-resizer-tooltip-background);border:1px solid var(--ck-color-resizer-tooltip-text);border-radius:var(--ck-resizer-border-radius);color:var(--ck-color-resizer-tooltip-text);display:block;font-size:var(--ck-font-size-tiny);height:var(--ck-resizer-tooltip-height);line-height:var(--ck-resizer-tooltip-height);padding:0 var(--ck-spacing-small)}.ck .ck-size-view.ck-orientation-above-center,.ck .ck-size-view.ck-orientation-bottom-left,.ck .ck-size-view.ck-orientation-bottom-right,.ck .ck-size-view.ck-orientation-top-left,.ck .ck-size-view.ck-orientation-top-right{position:absolute}.ck .ck-size-view.ck-orientation-top-left{left:var(--ck-resizer-tooltip-offset);top:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-top-right{right:var(--ck-resizer-tooltip-offset);top:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-bottom-right{bottom:var(--ck-resizer-tooltip-offset);right:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-bottom-left{bottom:var(--ck-resizer-tooltip-offset);left:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-above-center{left:50%;top:calc(var(--ck-resizer-tooltip-height)*-1);transform:translate(-50%)}:root{--ck-widget-outline-thickness:3px;--ck-widget-handler-icon-size:16px;--ck-widget-handler-animation-duration:200ms;--ck-widget-handler-animation-curve:ease;--ck-color-widget-blurred-border:#dedede;--ck-color-widget-hover-border:#ffc83d;--ck-color-widget-editable-focus-background:var(--ck-color-base-background);--ck-color-widget-drag-handler-icon-color:var(--ck-color-base-background)}.ck .ck-widget{outline-color:transparent;outline-style:solid;outline-width:var(--ck-widget-outline-thickness);transition:outline-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve)}@media (prefers-reduced-motion:reduce){.ck .ck-widget{transition:none}}.ck .ck-widget.ck-widget_selected,.ck .ck-widget.ck-widget_selected:hover{outline:var(--ck-widget-outline-thickness) solid var(--ck-color-focus-border)}.ck .ck-widget:hover{outline-color:var(--ck-color-widget-hover-border)}.ck .ck-editor__nested-editable{border:1px solid transparent}.ck .ck-editor__nested-editable.ck-editor__nested-editable_focused,.ck .ck-editor__nested-editable:focus{border:var(--ck-focus-ring);box-shadow:var(--ck-inner-shadow),0 0;outline:none}@media (forced-colors:none){.ck .ck-editor__nested-editable.ck-editor__nested-editable_focused,.ck .ck-editor__nested-editable:focus{background-color:var(--ck-color-widget-editable-focus-background)}}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle{background-color:transparent;border-radius:var(--ck-border-radius) var(--ck-border-radius) 0 0;box-sizing:border-box;left:calc(0px - var(--ck-widget-outline-thickness));opacity:0;padding:4px;top:0;transform:translateY(-100%);transition:background-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),visibility var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve)}@media (prefers-reduced-motion:reduce){.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle{transition:none}}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle .ck-icon{color:var(--ck-color-widget-drag-handler-icon-color);height:var(--ck-widget-handler-icon-size);width:var(--ck-widget-handler-icon-size)}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle .ck-icon .ck-icon__selected-indicator{opacity:0;transition:opacity .3s var(--ck-widget-handler-animation-curve)}@media (prefers-reduced-motion:reduce){.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle .ck-icon .ck-icon__selected-indicator{transition:none}}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle:hover .ck-icon .ck-icon__selected-indicator{opacity:1}.ck .ck-widget.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle{background-color:var(--ck-color-widget-hover-border);opacity:1}.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle{background-color:var(--ck-color-focus-border);opacity:1}.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle .ck-icon .ck-icon__selected-indicator,.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle .ck-icon .ck-icon__selected-indicator{opacity:1}.ck[dir=rtl] .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle{left:auto;right:calc(0px - var(--ck-widget-outline-thickness))}.ck.ck-editor__editable.ck-read-only .ck-widget{transition:none}.ck.ck-editor__editable.ck-read-only .ck-widget:not(.ck-widget_selected){--ck-widget-outline-thickness:0px}.ck.ck-editor__editable.ck-read-only .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle,.ck.ck-editor__editable.ck-read-only .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle:hover{background:var(--ck-color-widget-blurred-border)}.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected:hover{outline-color:var(--ck-color-widget-blurred-border)}.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle:hover,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle>.ck-widget__selection-handle,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle>.ck-widget__selection-handle:hover{background:var(--ck-color-widget-blurred-border)}.ck.ck-editor__editable blockquote>.ck-widget.ck-widget_with-selection-handle:first-child,.ck.ck-editor__editable>.ck-widget.ck-widget_with-selection-handle:first-child{margin-top:calc(1em + var(--ck-widget-handler-icon-size))}","",{version:3,sources:["webpack://./../ckeditor5-widget/theme/widget.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-widget/widget.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css","webpack://./../ckeditor5-ui/theme/mixins/_mediacolors.css"],names:[],mappings:"AAKA,MACC,+CAAgD,CAChD,6CAAsD,CACtD,uCAAgD,CAEhD,kDAAmD,CACnD,gCAAiC,CACjC,kEACD,CAOA,8DAEC,iBAqBD,CAnBC,4EACC,iBAOD,CALC,qFAGC,aACD,CASD,iLACC,kBACD,CAGD,kBACC,qDAAsD,CAEtD,qDAAsD,CACtD,6CAA8C,CAF9C,0CAA2C,CAI3C,aAAc,CADd,kCAAmC,CAGnC,uCAAwC,CACxC,4CAA6C,CAF7C,iCAsCD,CAlCC,8NAKC,iBACD,CAEA,0CAEC,qCAAsC,CADtC,oCAED,CAEA,2CAEC,sCAAuC,CADvC,oCAED,CAEA,8CACC,uCAAwC,CACxC,sCACD,CAEA,6CACC,uCAAwC,CACxC,qCACD,CAGA,8CAEC,QAAS,CADT,6CAAgD,CAEhD,yBACD,CChFD,MACC,iCAAkC,CAClC,kCAAmC,CACnC,4CAA6C,CAC7C,wCAAyC,CAEzC,wCAAiD,CACjD,sCAAkD,CAClD,2EAA4E,CAC5E,yEACD,CAEA,eAGC,yBAA0B,CAD1B,mBAAoB,CADpB,gDAAiD,CAGjD,6GAcD,CAZC,uCAND,eAOE,eAWF,CAVC,CAEA,0EAEC,6EACD,CAEA,qBACC,iDACD,CAGD,gCACC,4BAYD,CARC,yGCnCA,2BAA2B,CCF3B,qCAA8B,CDC9B,YD2CA,CGvCA,4BACC,yGHoCC,iEGlCD,CACD,CHuCA,4EAKC,4BAA6B,CAa7B,iEAAkE,CAhBlE,qBAAsB,CAoBtB,mDAAoD,CAhBpD,SAAU,CALV,WAAY,CAsBZ,KAAM,CAFN,2BAA4B,CAT5B,6SAwCD,CA3BC,uCAzBD,4EA0BE,eA0BF,CAzBC,CAEA,qFAIC,oDAAqD,CADrD,yCAA0C,CAD1C,wCAeD,CAVC,kHACC,SAAU,CAGV,+DAKD,CAHC,uCAND,kHAOE,eAEF,CADC,CAKF,wHACC,SACD,CAID,kFAEC,oDAAqD,CADrD,SAED,CAKC,oMAEC,6CAA8C,CAD9C,SAOD,CAHC,gRACC,SACD,CAOH,qFACC,SAAU,CACV,oDACD,CAGA,gDAEC,eAkBD,CAhBC,yEAOC,iCACD,CAGC,gOAEC,gDACD,CAOD,wIAEC,mDAQD,CALE,ghBAEC,gDACD,CAKH,yKAOC,yDACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-resizer: var(--ck-color-focus-border);
	--ck-color-resizer-tooltip-background: hsl(0, 0%, 15%);
	--ck-color-resizer-tooltip-text: hsl(0, 0%, 95%);

	--ck-resizer-border-radius: var(--ck-border-radius);
	--ck-resizer-tooltip-offset: 10px;
	--ck-resizer-tooltip-height: calc(var(--ck-spacing-small) * 2 + 10px);
}

.ck .ck-widget {
	/* This is neccessary for type around UI to be positioned properly. */
	position: relative;
}

.ck .ck-widget.ck-widget_with-selection-handle {
	/* Make the widget wrapper a relative positioning container for the drag handle. */
	position: relative;

	& .ck-widget__selection-handle {
		position: absolute;

		& .ck-icon {
			/* Make sure the icon in not a subject to font-size or line-height to avoid
			unnecessary spacing around it. */
			display: block;
		}
	}

	/* Show the selection handle on mouse hover over the widget, but not for nested widgets. */
	&:hover > .ck-widget__selection-handle {
		visibility: visible;
	}

	/* Show the selection handle when the widget is selected, but not for nested widgets. */
	&.ck-widget_selected > .ck-widget__selection-handle {
		visibility: visible;
	}
}

.ck .ck-size-view {
	background: var(--ck-color-resizer-tooltip-background);
	color: var(--ck-color-resizer-tooltip-text);
	border: 1px solid var(--ck-color-resizer-tooltip-text);
	border-radius: var(--ck-resizer-border-radius);
	font-size: var(--ck-font-size-tiny);
	display: block;
	padding: 0 var(--ck-spacing-small);
	height: var(--ck-resizer-tooltip-height);
	line-height: var(--ck-resizer-tooltip-height);

	&.ck-orientation-top-left,
	&.ck-orientation-top-right,
	&.ck-orientation-bottom-right,
	&.ck-orientation-bottom-left,
	&.ck-orientation-above-center {
		position: absolute;
	}

	&.ck-orientation-top-left {
		top: var(--ck-resizer-tooltip-offset);
		left: var(--ck-resizer-tooltip-offset);
	}

	&.ck-orientation-top-right {
		top: var(--ck-resizer-tooltip-offset);
		right: var(--ck-resizer-tooltip-offset);
	}

	&.ck-orientation-bottom-right {
		bottom: var(--ck-resizer-tooltip-offset);
		right: var(--ck-resizer-tooltip-offset);
	}

	&.ck-orientation-bottom-left {
		bottom: var(--ck-resizer-tooltip-offset);
		left: var(--ck-resizer-tooltip-offset);
	}

	/* Class applied if the widget is too small to contain the size label */
	&.ck-orientation-above-center {
		top: calc(var(--ck-resizer-tooltip-height) * -1);
		left: 50%;
		transform: translate(-50%);
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../mixins/_focus.css";
@import "../mixins/_shadow.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_mediacolors.css";

:root {
	--ck-widget-outline-thickness: 3px;
	--ck-widget-handler-icon-size: 16px;
	--ck-widget-handler-animation-duration: 200ms;
	--ck-widget-handler-animation-curve: ease;

	--ck-color-widget-blurred-border: hsl(0, 0%, 87%);
	--ck-color-widget-hover-border: hsl(43, 100%, 62%);
	--ck-color-widget-editable-focus-background: var(--ck-color-base-background);
	--ck-color-widget-drag-handler-icon-color: var(--ck-color-base-background);
}

.ck .ck-widget {
	outline-width: var(--ck-widget-outline-thickness);
	outline-style: solid;
	outline-color: transparent;
	transition: outline-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);

	@media (prefers-reduced-motion: reduce) {
		transition: none;
	}

	&.ck-widget_selected,
	&.ck-widget_selected:hover {
		outline: var(--ck-widget-outline-thickness) solid var(--ck-color-focus-border);
	}

	&:hover {
		outline-color: var(--ck-color-widget-hover-border);
	}
}

.ck .ck-editor__nested-editable {
	border: 1px solid transparent;

	/* The :focus style is applied before .ck-editor__nested-editable_focused class is rendered in the view.
	These styles show a different border for a blink of an eye, so \`:focus\` need to have same styles applied. */
	&.ck-editor__nested-editable_focused,
	&:focus {
		@mixin ck-focus-ring;
		@mixin ck-box-shadow var(--ck-inner-shadow);
		@mixin ck-media-default-colors {
			background-color: var(--ck-color-widget-editable-focus-background);
		}
	}
}

.ck .ck-widget.ck-widget_with-selection-handle {
	& .ck-widget__selection-handle {
		padding: 4px;
		box-sizing: border-box;

		/* Background and opacity will be animated as the handler shows up or the widget gets selected. */
		background-color: transparent;
		opacity: 0;

		/* Transition:
		   * background-color for the .ck-widget_selected state change,
		   * visibility for hiding the handler,
		   * opacity for the proper look of the icon when the handler disappears. */
		transition:
			background-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),
			visibility var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),
			opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);

		/* Make only top corners round. */
		border-radius: var(--ck-border-radius) var(--ck-border-radius) 0 0;

		/* Place the drag handler outside the widget wrapper. */
		transform: translateY(-100%);
		left: calc(0px - var(--ck-widget-outline-thickness));
		top: 0;

		@media (prefers-reduced-motion: reduce) {
			transition: none;
		}

		& .ck-icon {
			/* Make sure the dimensions of the icon are independent of the fon-size of the content. */
			width: var(--ck-widget-handler-icon-size);
			height: var(--ck-widget-handler-icon-size);
			color: var(--ck-color-widget-drag-handler-icon-color);

			/* The "selected" part of the icon is invisible by default */
			& .ck-icon__selected-indicator {
				opacity: 0;

				/* Note: The animation is longer on purpose. Simply feels better. */
				transition: opacity 300ms var(--ck-widget-handler-animation-curve);

				@media (prefers-reduced-motion: reduce) {
					transition: none;
				}
			}
		}

		/* Advertise using the look of the icon that once clicked the handler, the widget will be selected. */
		&:hover .ck-icon .ck-icon__selected-indicator {
			opacity: 1;
		}
	}

	/* Show the selection handler on mouse hover over the widget, but not for nested widgets. */
	&:hover > .ck-widget__selection-handle {
		opacity: 1;
		background-color: var(--ck-color-widget-hover-border);
	}

	/* Show the selection handler when the widget is selected, but not for nested widgets. */
	&.ck-widget_selected,
	&.ck-widget_selected:hover {
		& > .ck-widget__selection-handle {
			opacity: 1;
			background-color: var(--ck-color-focus-border);

			/* When the widget is selected, notify the user using the proper look of the icon. */
			& .ck-icon .ck-icon__selected-indicator {
				opacity: 1;
			}
		}
	}
}

/* In a RTL environment, align the selection handler to the right side of the widget */
/* stylelint-disable-next-line no-descending-specificity */
.ck[dir="rtl"] .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle {
	left: auto;
	right: calc(0px - var(--ck-widget-outline-thickness));
}

/* https://github.com/ckeditor/ckeditor5/issues/6415 */
.ck.ck-editor__editable.ck-read-only .ck-widget {
	/* Prevent the :hover outline from showing up because of the used outline-color transition. */
	transition: none;

	&:not(.ck-widget_selected) {
		/* Disable visual effects of hover/active widget when CKEditor is in readOnly mode.
		 * See: https://github.com/ckeditor/ckeditor5/issues/1261
		 *
		 * Leave the unit because this custom property is used in calc() by other features.
		 * See: https://github.com/ckeditor/ckeditor5/issues/6775
		 */
		--ck-widget-outline-thickness: 0px;
	}

	&.ck-widget_with-selection-handle {
		& .ck-widget__selection-handle,
		& .ck-widget__selection-handle:hover {
			background: var(--ck-color-widget-blurred-border);
		}
	}
}

/* Style the widget when it's selected but the editable it belongs to lost focus. */
/* stylelint-disable-next-line no-descending-specificity */
.ck.ck-editor__editable.ck-blurred .ck-widget {
	&.ck-widget_selected,
	&.ck-widget_selected:hover {
		outline-color: var(--ck-color-widget-blurred-border);

		&.ck-widget_with-selection-handle {
			& > .ck-widget__selection-handle,
			& > .ck-widget__selection-handle:hover {
				background: var(--ck-color-widget-blurred-border);
			}
		}
	}
}

.ck.ck-editor__editable > .ck-widget.ck-widget_with-selection-handle:first-child,
.ck.ck-editor__editable blockquote > .ck-widget.ck-widget_with-selection-handle:first-child {
	/* Do not crop selection handler if a widget is a first-child in the blockquote or in the root editable.
	In fact, anything with overflow: hidden.
	https://github.com/ckeditor/ckeditor5-block-quote/issues/28
	https://github.com/ckeditor/ckeditor5-widget/issues/44
	https://github.com/ckeditor/ckeditor5-widget/issues/66 */
	margin-top: calc(1em + var(--ck-widget-handler-icon-size));
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A visual style of focused element's border.
 */
@define-mixin ck-focus-ring {
	/* Disable native outline. */
	outline: none;
	border: var(--ck-focus-ring)
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-forced-colors {
	@media (forced-colors: active) {
		& {
			@mixin-content;
		}
	}
}

@define-mixin ck-media-default-colors {
	@media (forced-colors: none) {
		& {
			@mixin-content;
		}
	}
}
`],sourceRoot:""}]);const P=x},4095:(L,B,_)=>{_.d(B,{A:()=>P});var q=_(9372),U=_.n(q),H=_(935),x=_.n(H)()(U());x.push([L.id,".ck .ck-widget_with-resizer{position:relative}.ck .ck-widget__resizer{display:none;left:0;pointer-events:none;position:absolute;top:0}.ck-focused .ck-widget_with-resizer.ck-widget_selected>.ck-widget__resizer{display:block}.ck .ck-widget__resizer__handle{pointer-events:all;position:absolute}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-right,.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-left{cursor:nwse-resize}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-left,.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-right{cursor:nesw-resize}:root{--ck-resizer-size:10px;--ck-resizer-offset:calc(var(--ck-resizer-size)/-2 - 2px);--ck-resizer-border-width:1px}.ck .ck-widget__resizer{outline:1px solid var(--ck-color-resizer)}.ck .ck-widget__resizer__handle{background:var(--ck-color-focus-border);border:var(--ck-resizer-border-width) solid #fff;border-radius:var(--ck-resizer-border-radius);height:var(--ck-resizer-size);width:var(--ck-resizer-size)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-left{left:var(--ck-resizer-offset);top:var(--ck-resizer-offset)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-right{right:var(--ck-resizer-offset);top:var(--ck-resizer-offset)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-right{bottom:var(--ck-resizer-offset);right:var(--ck-resizer-offset)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-left{bottom:var(--ck-resizer-offset);left:var(--ck-resizer-offset)}","",{version:3,sources:["webpack://./../ckeditor5-widget/theme/widgetresize.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-widget/widgetresize.css"],names:[],mappings:"AAKA,4BAEC,iBACD,CAEA,wBACC,YAAa,CAMb,MAAO,CAFP,mBAAoB,CAHpB,iBAAkB,CAMlB,KACD,CAGC,2EACC,aACD,CAGD,gCAIC,kBAAmB,CAHnB,iBAcD,CATC,4IAEC,kBACD,CAEA,4IAEC,kBACD,CCpCD,MACC,sBAAuB,CAGvB,yDAAiE,CACjE,6BACD,CAEA,wBACC,yCACD,CAEA,gCAGC,uCAAwC,CACxC,gDAA6D,CAC7D,6CAA8C,CAH9C,6BAA8B,CAD9B,4BAyBD,CAnBC,oEAEC,6BAA8B,CAD9B,4BAED,CAEA,qEAEC,8BAA+B,CAD/B,4BAED,CAEA,wEACC,+BAAgC,CAChC,8BACD,CAEA,uEACC,+BAAgC,CAChC,6BACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-widget_with-resizer {
	/* Make the widget wrapper a relative positioning container for the drag handle. */
	position: relative;
}

.ck .ck-widget__resizer {
	display: none;
	position: absolute;

	/* The wrapper itself should not interfere with the pointer device, only the handles should. */
	pointer-events: none;

	left: 0;
	top: 0;
}

.ck-focused .ck-widget_with-resizer.ck-widget_selected {
	& > .ck-widget__resizer {
		display: block;
	}
}

.ck .ck-widget__resizer__handle {
	position: absolute;

	/* Resizers are the only UI elements that should interfere with a pointer device. */
	pointer-events: all;

	&.ck-widget__resizer__handle-top-left,
	&.ck-widget__resizer__handle-bottom-right {
		cursor: nwse-resize;
	}

	&.ck-widget__resizer__handle-top-right,
	&.ck-widget__resizer__handle-bottom-left {
		cursor: nesw-resize;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-resizer-size: 10px;

	/* Set the resizer with a 50% offset. */
	--ck-resizer-offset: calc( ( var(--ck-resizer-size) / -2 ) - 2px);
	--ck-resizer-border-width: 1px;
}

.ck .ck-widget__resizer {
	outline: 1px solid var(--ck-color-resizer);
}

.ck .ck-widget__resizer__handle {
	width: var(--ck-resizer-size);
	height: var(--ck-resizer-size);
	background: var(--ck-color-focus-border);
	border: var(--ck-resizer-border-width) solid hsl(0, 0%, 100%);
	border-radius: var(--ck-resizer-border-radius);

	&.ck-widget__resizer__handle-top-left {
		top: var(--ck-resizer-offset);
		left: var(--ck-resizer-offset);
	}

	&.ck-widget__resizer__handle-top-right {
		top: var(--ck-resizer-offset);
		right: var(--ck-resizer-offset);
	}

	&.ck-widget__resizer__handle-bottom-right {
		bottom: var(--ck-resizer-offset);
		right: var(--ck-resizer-offset);
	}

	&.ck-widget__resizer__handle-bottom-left {
		bottom: var(--ck-resizer-offset);
		left: var(--ck-resizer-offset);
	}
}
`],sourceRoot:""}]);const P=x},8508:(L,B,_)=>{_.d(B,{A:()=>P});var q=_(9372),U=_.n(q),H=_(935),x=_.n(H)()(U());x.push([L.id,'.ck .ck-widget .ck-widget__type-around__button{display:block;overflow:hidden;position:absolute;z-index:var(--ck-z-default)}.ck .ck-widget .ck-widget__type-around__button svg{left:50%;position:absolute;top:50%;z-index:calc(var(--ck-z-default) + 2)}.ck .ck-widget .ck-widget__type-around__button.ck-widget__type-around__button_before{left:min(10%,30px);top:calc(var(--ck-widget-outline-thickness)*-.5);transform:translateY(-50%)}.ck .ck-widget .ck-widget__type-around__button.ck-widget__type-around__button_after{bottom:calc(var(--ck-widget-outline-thickness)*-.5);right:min(10%,30px);transform:translateY(50%)}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:after,.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__button:hover:after{content:"";display:block;left:1px;position:absolute;top:1px;z-index:calc(var(--ck-z-default) + 1)}.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__fake-caret{display:none;left:0;position:absolute;right:0}.ck .ck-widget:hover>.ck-widget__type-around>.ck-widget__type-around__fake-caret{left:calc(var(--ck-widget-outline-thickness)*-1);right:calc(var(--ck-widget-outline-thickness)*-1)}.ck .ck-widget.ck-widget_type-around_show-fake-caret_before>.ck-widget__type-around>.ck-widget__type-around__fake-caret{display:block;top:calc(var(--ck-widget-outline-thickness)*-1 - 1px)}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after>.ck-widget__type-around>.ck-widget__type-around__fake-caret{bottom:calc(var(--ck-widget-outline-thickness)*-1 - 1px);display:block}.ck.ck-editor__editable.ck-read-only .ck-widget__type-around,.ck.ck-editor__editable.ck-restricted-editing_mode_restricted .ck-widget__type-around,.ck.ck-editor__editable.ck-widget__type-around_disabled .ck-widget__type-around{display:none}:root{--ck-widget-type-around-button-size:20px;--ck-color-widget-type-around-button-active:var(--ck-color-focus-border);--ck-color-widget-type-around-button-hover:var(--ck-color-widget-hover-border);--ck-color-widget-type-around-button-blurred-editable:var(--ck-color-widget-blurred-border);--ck-color-widget-type-around-button-radar-start-alpha:0;--ck-color-widget-type-around-button-radar-end-alpha:.3;--ck-color-widget-type-around-button-icon:var(--ck-color-base-background)}.ck .ck-widget .ck-widget__type-around__button{background:var(--ck-color-widget-type-around-button);border-radius:100px;height:var(--ck-widget-type-around-button-size);opacity:0;pointer-events:none;transition:opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),background var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);width:var(--ck-widget-type-around-button-size)}@media (prefers-reduced-motion:reduce){.ck .ck-widget .ck-widget__type-around__button{transition:none}}.ck .ck-widget .ck-widget__type-around__button svg{height:8px;margin-top:1px;transform:translate(-50%,-50%);transition:transform .5s ease;width:10px}@media (prefers-reduced-motion:reduce){.ck .ck-widget .ck-widget__type-around__button svg{transition:none}}.ck .ck-widget .ck-widget__type-around__button svg *{stroke-dasharray:10;stroke-dashoffset:0;fill:none;stroke:var(--ck-color-widget-type-around-button-icon);stroke-width:1.5px;stroke-linecap:round;stroke-linejoin:round}.ck .ck-widget .ck-widget__type-around__button svg line{stroke-dasharray:7}.ck .ck-widget .ck-widget__type-around__button:hover{animation:ck-widget-type-around-button-sonar 1s ease infinite}.ck .ck-widget .ck-widget__type-around__button:hover svg polyline{animation:ck-widget-type-around-arrow-dash 2s linear}.ck .ck-widget .ck-widget__type-around__button:hover svg line{animation:ck-widget-type-around-arrow-tip-dash 2s linear}@media (prefers-reduced-motion:reduce){.ck .ck-widget .ck-widget__type-around__button:hover,.ck .ck-widget .ck-widget__type-around__button:hover svg line,.ck .ck-widget .ck-widget__type-around__button:hover svg polyline{animation:none}}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button,.ck .ck-widget:hover>.ck-widget__type-around>.ck-widget__type-around__button{opacity:1;pointer-events:auto}.ck .ck-widget:not(.ck-widget_selected)>.ck-widget__type-around>.ck-widget__type-around__button{background:var(--ck-color-widget-type-around-button-hover)}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button,.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__button:hover{background:var(--ck-color-widget-type-around-button-active)}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:after,.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__button:hover:after{background:linear-gradient(135deg,hsla(0,0%,100%,0),hsla(0,0%,100%,.3));border-radius:100px;height:calc(var(--ck-widget-type-around-button-size) - 2px);width:calc(var(--ck-widget-type-around-button-size) - 2px)}.ck .ck-widget.ck-widget_with-selection-handle>.ck-widget__type-around>.ck-widget__type-around__button_before{margin-left:20px}.ck .ck-widget .ck-widget__type-around__fake-caret{animation:ck-widget-type-around-fake-caret-pulse 1s linear infinite normal forwards;background:var(--ck-color-base-text);height:1px;outline:1px solid hsla(0,0%,100%,.5);pointer-events:none}.ck .ck-widget.ck-widget_selected.ck-widget_type-around_show-fake-caret_after,.ck .ck-widget.ck-widget_selected.ck-widget_type-around_show-fake-caret_before{outline-color:transparent}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_selected:hover,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_selected:hover{outline-color:var(--ck-color-widget-hover-border)}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after>.ck-widget__type-around>.ck-widget__type-around__button,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before>.ck-widget__type-around>.ck-widget__type-around__button{opacity:0;pointer-events:none}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_selected.ck-widget_with-resizer>.ck-widget__resizer,.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_selected.ck-widget_with-resizer>.ck-widget__resizer,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle{opacity:0}.ck[dir=rtl] .ck-widget.ck-widget_with-selection-handle .ck-widget__type-around>.ck-widget__type-around__button_before{margin-left:0;margin-right:20px}.ck-editor__nested-editable.ck-editor__editable_selected .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button,.ck-editor__nested-editable.ck-editor__editable_selected .ck-widget:hover>.ck-widget__type-around>.ck-widget__type-around__button{opacity:0;pointer-events:none}.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:not(:hover){background:var(--ck-color-widget-type-around-button-blurred-editable)}.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:not(:hover) svg *{stroke:#999}@keyframes ck-widget-type-around-arrow-dash{0%{stroke-dashoffset:10}20%,to{stroke-dashoffset:0}}@keyframes ck-widget-type-around-arrow-tip-dash{0%,20%{stroke-dashoffset:7}40%,to{stroke-dashoffset:0}}@keyframes ck-widget-type-around-button-sonar{0%{box-shadow:0 0 0 0 hsla(var(--ck-color-focus-border-coordinates),var(--ck-color-widget-type-around-button-radar-start-alpha))}50%{box-shadow:0 0 0 5px hsla(var(--ck-color-focus-border-coordinates),var(--ck-color-widget-type-around-button-radar-end-alpha))}to{box-shadow:0 0 0 5px hsla(var(--ck-color-focus-border-coordinates),var(--ck-color-widget-type-around-button-radar-start-alpha))}}@keyframes ck-widget-type-around-fake-caret-pulse{0%{opacity:1}49%{opacity:1}50%{opacity:0}99%{opacity:0}to{opacity:1}}',"",{version:3,sources:["webpack://./../ckeditor5-widget/theme/widgettypearound.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-widget/widgettypearound.css"],names:[],mappings:"AASC,+CACC,aAAc,CAEd,eAAgB,CADhB,iBAAkB,CAElB,2BAwBD,CAtBC,mDAGC,QAAS,CAFT,iBAAkB,CAClB,OAAQ,CAER,qCACD,CAEA,qFAGC,kBAAoB,CADpB,gDAAoD,CAGpD,0BACD,CAEA,oFAEC,mDAAuD,CACvD,mBAAqB,CAErB,yBACD,CAUA,mLACC,UAAW,CACX,aAAc,CAGd,QAAS,CAFT,iBAAkB,CAClB,OAAQ,CAER,qCACD,CAMD,2EACC,YAAa,CAEb,MAAO,CADP,iBAAkB,CAElB,OACD,CAOA,iFACC,gDAAqD,CACrD,iDACD,CAKA,wHAEC,aAAc,CADd,qDAED,CAKA,uHACC,wDAA6D,CAC7D,aACD,CAoBD,mOACC,YACD,CC3GA,MACC,wCAAyC,CACzC,wEAAyE,CACzE,8EAA+E,CAC/E,2FAA4F,CAC5F,wDAAyD,CACzD,uDAAwD,CACxD,yEACD,CAgBC,+CAGC,oDAAqD,CACrD,mBAAoB,CAFpB,+CAAgD,CAVjD,SAAU,CACV,mBAAoB,CAYnB,uMAAyM,CAJzM,8CAwED,CAhEC,uCATD,+CAUE,eA+DF,CA9DC,CAEA,mDAEC,UAAW,CAGX,cAAe,CAFf,8BAA+B,CAC/B,6BAA8B,CAH9B,UAwBD,CAlBC,uCAPD,mDAQE,eAiBF,CAhBC,CAEA,qDACC,mBAAoB,CACpB,mBAAoB,CAEpB,SAAU,CACV,qDAAsD,CACtD,kBAAmB,CACnB,oBAAqB,CACrB,qBACD,CAEA,wDACC,kBACD,CAGD,qDAIC,6DA4BD,CAtBE,kEACC,oDACD,CAEA,8DACC,wDACD,CAGD,uCAQE,qLACC,cACD,CAEF,CASD,uKA7FD,SAAU,CACV,mBA8FC,CAOD,gGACC,0DACD,CAOA,uKAEC,2DAQD,CANC,mLAIC,uEAAkF,CADlF,mBAAoB,CADpB,2DAA4D,CAD5D,0DAID,CAOD,8GACC,gBACD,CAKA,mDAGC,mFAAoF,CAOpF,oCAAqC,CARrC,UAAW,CAOX,oCAAwC,CARxC,mBAUD,CAOC,6JAEC,yBACD,CAUA,yKACC,iDACD,CAMA,uOAxKD,SAAU,CACV,mBAyKC,CAoBA,6yBACC,SACD,CASF,uHACC,aAAc,CACd,iBACD,CAYG,iRAxNF,SAAU,CACV,mBAyNE,CAQH,kIACC,qEAKD,CAHC,wIACC,WACD,CAGD,4CACC,GACC,oBACD,CACA,OACC,mBACD,CACD,CAEA,gDACC,OACC,mBACD,CACA,OACC,mBACD,CACD,CAEA,8CACC,GACC,6HACD,CACA,IACC,6HACD,CACA,GACC,+HACD,CACD,CAEA,kDACC,GACC,SACD,CACA,IACC,SACD,CACA,IACC,SACD,CACA,IACC,SACD,CACA,GACC,SACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-widget {
	/*
	 * Styles of the type around buttons
	 */
	& .ck-widget__type-around__button {
		display: block;
		position: absolute;
		overflow: hidden;
		z-index: var(--ck-z-default);

		& svg {
			position: absolute;
			top: 50%;
			left: 50%;
			z-index: calc(var(--ck-z-default) + 2);
		}

		&.ck-widget__type-around__button_before {
			/* Place it in the middle of the outline */
			top: calc(-0.5 * var(--ck-widget-outline-thickness));
			left: min(10%, 30px);

			transform: translateY(-50%);
		}

		&.ck-widget__type-around__button_after {
			/* Place it in the middle of the outline */
			bottom: calc(-0.5 * var(--ck-widget-outline-thickness));
			right: min(10%, 30px);

			transform: translateY(50%);
		}
	}

	/*
	 * Styles for the buttons when:
	 * - the widget is selected,
	 * - or the button is being hovered (regardless of the widget state).
	 */
	&.ck-widget_selected > .ck-widget__type-around > .ck-widget__type-around__button,
	& > .ck-widget__type-around > .ck-widget__type-around__button:hover {
		&::after {
			content: "";
			display: block;
			position: absolute;
			top: 1px;
			left: 1px;
			z-index: calc(var(--ck-z-default) + 1);
		}
	}

	/*
	 * Styles for the horizontal "fake caret" which is displayed when the user navigates using the keyboard.
	 */
	& > .ck-widget__type-around > .ck-widget__type-around__fake-caret {
		display: none;
		position: absolute;
		left: 0;
		right: 0;
	}

	/*
	 * When the widget is hovered the "fake caret" would normally be narrower than the
	 * extra outline displayed around the widget. Let's extend the "fake caret" to match
	 * the full width of the widget.
	 */
	&:hover > .ck-widget__type-around > .ck-widget__type-around__fake-caret {
		left: calc( -1 * var(--ck-widget-outline-thickness) );
		right: calc( -1 * var(--ck-widget-outline-thickness) );
	}

	/*
	 * Styles for the horizontal "fake caret" when it should be displayed before the widget (backward keyboard navigation).
	 */
	&.ck-widget_type-around_show-fake-caret_before > .ck-widget__type-around > .ck-widget__type-around__fake-caret {
		top: calc( -1 * var(--ck-widget-outline-thickness) - 1px );
		display: block;
	}

	/*
	 * Styles for the horizontal "fake caret" when it should be displayed after the widget (forward keyboard navigation).
	 */
	&.ck-widget_type-around_show-fake-caret_after > .ck-widget__type-around > .ck-widget__type-around__fake-caret {
		bottom: calc( -1 * var(--ck-widget-outline-thickness) - 1px );
		display: block;
	}
}

/*
 * Integration with the read-only mode of the editor.
 */
.ck.ck-editor__editable.ck-read-only .ck-widget__type-around {
	display: none;
}

/*
 * Integration with the restricted editing mode (feature) of the editor.
 */
.ck.ck-editor__editable.ck-restricted-editing_mode_restricted .ck-widget__type-around {
	display: none;
}

/*
 * Integration with the #isEnabled property of the WidgetTypeAround plugin.
 */
.ck.ck-editor__editable.ck-widget__type-around_disabled .ck-widget__type-around {
	display: none;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-widget-type-around-button-size: 20px;
	--ck-color-widget-type-around-button-active: var(--ck-color-focus-border);
	--ck-color-widget-type-around-button-hover: var(--ck-color-widget-hover-border);
	--ck-color-widget-type-around-button-blurred-editable: var(--ck-color-widget-blurred-border);
	--ck-color-widget-type-around-button-radar-start-alpha: 0;
	--ck-color-widget-type-around-button-radar-end-alpha: .3;
	--ck-color-widget-type-around-button-icon: var(--ck-color-base-background);
}

@define-mixin ck-widget-type-around-button-visible {
	opacity: 1;
	pointer-events: auto;
}

@define-mixin ck-widget-type-around-button-hidden {
	opacity: 0;
	pointer-events: none;
}

.ck .ck-widget {
	/*
	 * Styles of the type around buttons
	 */
	& .ck-widget__type-around__button {
		width: var(--ck-widget-type-around-button-size);
		height: var(--ck-widget-type-around-button-size);
		background: var(--ck-color-widget-type-around-button);
		border-radius: 100px;
		transition: opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve), background var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);

		@mixin ck-widget-type-around-button-hidden;

		@media (prefers-reduced-motion: reduce) {
			transition: none;
		}

		& svg {
			width: 10px;
			height: 8px;
			transform: translate(-50%,-50%);
			transition: transform .5s ease;
			margin-top: 1px;

			@media (prefers-reduced-motion: reduce) {
				transition: none;
			}

			& * {
				stroke-dasharray: 10;
				stroke-dashoffset: 0;

				fill: none;
				stroke: var(--ck-color-widget-type-around-button-icon);
				stroke-width: 1.5px;
				stroke-linecap: round;
				stroke-linejoin: round;
			}

			& line {
				stroke-dasharray: 7;
			}
		}

		&:hover {
			/*
			 * Display the "sonar" around the button when hovered.
			 */
			animation: ck-widget-type-around-button-sonar 1s ease infinite;

			/*
			 * Animate active button's icon.
			 */
			& svg {
				& polyline {
					animation: ck-widget-type-around-arrow-dash 2s linear;
				}

				& line {
					animation: ck-widget-type-around-arrow-tip-dash 2s linear;
				}
			}

			@media (prefers-reduced-motion: reduce) {
				animation: none;

				& svg {
					& polyline {
						animation: none;
					}

					& line {
						animation: none;
					}
				}
			}
		}
	}

	/*
	 * Show type around buttons when the widget gets selected or being hovered.
	 */
	&.ck-widget_selected,
	&:hover {
		& > .ck-widget__type-around > .ck-widget__type-around__button {
			@mixin ck-widget-type-around-button-visible;
		}
	}

	/*
	 * Styles for the buttons when the widget is NOT selected (but the buttons are visible
	 * and still can be hovered).
	 */
	&:not(.ck-widget_selected) > .ck-widget__type-around > .ck-widget__type-around__button {
		background: var(--ck-color-widget-type-around-button-hover);
	}

	/*
	 * Styles for the buttons when:
	 * - the widget is selected,
	 * - or the button is being hovered (regardless of the widget state).
	 */
	&.ck-widget_selected > .ck-widget__type-around > .ck-widget__type-around__button,
	& > .ck-widget__type-around > .ck-widget__type-around__button:hover {
		background: var(--ck-color-widget-type-around-button-active);

		&::after {
			width: calc(var(--ck-widget-type-around-button-size) - 2px);
			height: calc(var(--ck-widget-type-around-button-size) - 2px);
			border-radius: 100px;
			background: linear-gradient(135deg, hsla(0,0%,100%,0) 0%, hsla(0,0%,100%,.3) 100%);
		}
	}

	/*
	 * Styles for the "before" button when the widget has a selection handle. Because some space
	 * is consumed by the handle, the button must be moved slightly to the right to let it breathe.
	 */
	&.ck-widget_with-selection-handle > .ck-widget__type-around > .ck-widget__type-around__button_before {
		margin-left: 20px;
	}

	/*
	 * Styles for the horizontal "fake caret" which is displayed when the user navigates using the keyboard.
	 */
	& .ck-widget__type-around__fake-caret {
		pointer-events: none;
		height: 1px;
		animation: ck-widget-type-around-fake-caret-pulse linear 1s infinite normal forwards;

		/*
		 * The semi-transparent-outline+background combo improves the contrast
		 * when the background underneath the fake caret is dark.
		 */
		outline: solid 1px hsla(0, 0%, 100%, .5);
		background: var(--ck-color-base-text);
	}

	/*
	 * Styles of the widget when the "fake caret" is blinking (e.g. upon keyboard navigation).
	 * Despite the widget being physically selected in the model, its outline should disappear.
	 */
	&.ck-widget_selected {
		&.ck-widget_type-around_show-fake-caret_before,
		&.ck-widget_type-around_show-fake-caret_after {
			outline-color: transparent;
		}
	}

	&.ck-widget_type-around_show-fake-caret_before,
	&.ck-widget_type-around_show-fake-caret_after {
		/*
		 * When the "fake caret" is visible we simulate that the widget is not selected
		 * (despite being physically selected), so the outline color should be for the
		 * unselected widget.
		 */
		&.ck-widget_selected:hover {
			outline-color: var(--ck-color-widget-hover-border);
		}

		/*
		 * Styles of the type around buttons when the "fake caret" is blinking (e.g. upon keyboard navigation).
		 * In this state, the type around buttons would collide with the fake carets so they should disappear.
		 */
		& > .ck-widget__type-around > .ck-widget__type-around__button {
			@mixin ck-widget-type-around-button-hidden;
		}

		/*
		 * Fake horizontal caret integration with the selection handle. When the caret is visible, simply
		 * hide the handle because it intersects with the caret (and does not make much sense anyway).
		 */
		&.ck-widget_with-selection-handle {
			&.ck-widget_selected,
			&.ck-widget_selected:hover {
				& > .ck-widget__selection-handle {
					opacity: 0
				}
			}
		}

		/*
		 * Fake horizontal caret integration with the resize UI. When the caret is visible, simply
		 * hide the resize UI because it creates too much noise. It can be visible when the user
		 * hovers the widget, though.
		 */
		&.ck-widget_selected.ck-widget_with-resizer > .ck-widget__resizer {
			opacity: 0
		}
	}
}

/*
 * Styles for the "before" button when the widget has a selection handle in an RTL environment.
 * The selection handler is aligned to the right side of the widget so there is no need to create
 * additional space for it next to the "before" button.
 */
.ck[dir="rtl"] .ck-widget.ck-widget_with-selection-handle .ck-widget__type-around > .ck-widget__type-around__button_before {
	margin-left: 0;
	margin-right: 20px;
}

/*
 * Hide type around buttons when the widget is selected as a child of a selected
 * nested editable (e.g. mulit-cell table selection).
 *
 * See https://github.com/ckeditor/ckeditor5/issues/7263.
 */
.ck-editor__nested-editable.ck-editor__editable_selected {
	& .ck-widget {
		&.ck-widget_selected,
		&:hover {
			& > .ck-widget__type-around > .ck-widget__type-around__button {
				@mixin ck-widget-type-around-button-hidden;
			}
		}
	}
}

/*
 * Styles for the buttons when the widget is selected but the user clicked outside of the editor (blurred the editor).
 */
.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected > .ck-widget__type-around > .ck-widget__type-around__button:not(:hover) {
	background: var(--ck-color-widget-type-around-button-blurred-editable);

	& svg * {
		stroke: hsl(0,0%,60%);
	}
}

@keyframes ck-widget-type-around-arrow-dash {
	0% {
		stroke-dashoffset: 10;
	}
	20%, 100% {
		stroke-dashoffset: 0;
	}
}

@keyframes ck-widget-type-around-arrow-tip-dash {
	0%, 20% {
		stroke-dashoffset: 7;
	}
	40%, 100% {
		stroke-dashoffset: 0;
	}
}

@keyframes ck-widget-type-around-button-sonar {
	0% {
		box-shadow: 0 0 0 0 hsla(var(--ck-color-focus-border-coordinates), var(--ck-color-widget-type-around-button-radar-start-alpha));
	}
	50% {
		box-shadow: 0 0 0 5px hsla(var(--ck-color-focus-border-coordinates), var(--ck-color-widget-type-around-button-radar-end-alpha));
	}
	100% {
		box-shadow: 0 0 0 5px hsla(var(--ck-color-focus-border-coordinates), var(--ck-color-widget-type-around-button-radar-start-alpha));
	}
}

@keyframes ck-widget-type-around-fake-caret-pulse {
	0% {
		opacity: 1;
	}
	49% {
		opacity: 1;
	}
	50% {
		opacity: 0;
	}
	99% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
}
`],sourceRoot:""}]);const P=x},935:L=>{L.exports=function(B){var _=[];return _.toString=function(){return this.map(function(q){var U=B(q);return q[2]?"@media ".concat(q[2]," {").concat(U,"}"):U}).join("")},_.i=function(q,U,H){typeof q=="string"&&(q=[[null,q,""]]);var x={};if(H)for(var P=0;P<this.length;P++){var Y=this[P][0];Y!=null&&(x[Y]=!0)}for(var Q=0;Q<q.length;Q++){var it=[].concat(q[Q]);H&&x[it[0]]||(U&&(it[2]?it[2]="".concat(U," and ").concat(it[2]):it[2]=U),_.push(it))}},_}},9372:L=>{function B(q,U){return function(H){if(Array.isArray(H))return H}(q)||function(H,x){var P=H&&(typeof Symbol<"u"&&H[Symbol.iterator]||H["@@iterator"]);if(P!=null){var Y,Q,it=[],at=!0,rt=!1;try{for(P=P.call(H);!(at=(Y=P.next()).done)&&(it.push(Y.value),!x||it.length!==x);at=!0);}catch(yt){rt=!0,Q=yt}finally{try{at||P.return==null||P.return()}finally{if(rt)throw Q}}return it}}(q,U)||function(H,x){if(H){if(typeof H=="string")return _(H,x);var P=Object.prototype.toString.call(H).slice(8,-1);if(P==="Object"&&H.constructor&&(P=H.constructor.name),P==="Map"||P==="Set")return Array.from(H);if(P==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(P))return _(H,x)}}(q,U)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function _(q,U){(U==null||U>q.length)&&(U=q.length);for(var H=0,x=new Array(U);H<U;H++)x[H]=q[H];return x}L.exports=function(q){var U=B(q,4),H=U[1],x=U[3];if(!x)return H;if(typeof btoa=="function"){var P=btoa(unescape(encodeURIComponent(JSON.stringify(x)))),Y="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(P),Q="/*# ".concat(Y," */"),it=x.sources.map(function(at){return"/*# sourceURL=".concat(x.sourceRoot||"").concat(at," */")});return[H].concat(it).concat([Q]).join(`
`)}return[H].join(`
`)}},2591:(L,B,_)=>{var q,U=function(){return q===void 0&&(q=!!(window&&document&&document.all&&!window.atob)),q},H=function(){var m={};return function(It){if(m[It]===void 0){var Bt=document.querySelector(It);if(window.HTMLIFrameElement&&Bt instanceof window.HTMLIFrameElement)try{Bt=Bt.contentDocument.head}catch{Bt=null}m[It]=Bt}return m[It]}}(),x=[];function P(m){for(var It=-1,Bt=0;Bt<x.length;Bt++)if(x[Bt].identifier===m){It=Bt;break}return It}function Y(m,It){for(var Bt={},te=[],ae=0;ae<m.length;ae++){var me=m[ae],Ut=It.base?me[0]+It.base:me[0],Se=Bt[Ut]||0,He="".concat(Ut," ").concat(Se);Bt[Ut]=Se+1;var ke=P(He),ve={css:me[1],media:me[2],sourceMap:me[3]};ke!==-1?(x[ke].references++,x[ke].updater(ve)):x.push({identifier:He,updater:Kt(ve,It),references:1}),te.push(He)}return te}function Q(m){var It=document.createElement("style"),Bt=m.attributes||{};if(Bt.nonce===void 0){var te=_.nc;te&&(Bt.nonce=te)}if(Object.keys(Bt).forEach(function(me){It.setAttribute(me,Bt[me])}),typeof m.insert=="function")m.insert(It);else{var ae=H(m.insert||"head");if(!ae)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");ae.appendChild(It)}return It}var it,at=(it=[],function(m,It){return it[m]=It,it.filter(Boolean).join(`
`)});function rt(m,It,Bt,te){var ae=Bt?"":te.media?"@media ".concat(te.media," {").concat(te.css,"}"):te.css;if(m.styleSheet)m.styleSheet.cssText=at(It,ae);else{var me=document.createTextNode(ae),Ut=m.childNodes;Ut[It]&&m.removeChild(Ut[It]),Ut.length?m.insertBefore(me,Ut[It]):m.appendChild(me)}}function yt(m,It,Bt){var te=Bt.css,ae=Bt.media,me=Bt.sourceMap;if(ae?m.setAttribute("media",ae):m.removeAttribute("media"),me&&typeof btoa<"u"&&(te+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(me))))," */")),m.styleSheet)m.styleSheet.cssText=te;else{for(;m.firstChild;)m.removeChild(m.firstChild);m.appendChild(document.createTextNode(te))}}var xt=null,Ht=0;function Kt(m,It){var Bt,te,ae;if(It.singleton){var me=Ht++;Bt=xt||(xt=Q(It)),te=rt.bind(null,Bt,me,!1),ae=rt.bind(null,Bt,me,!0)}else Bt=Q(It),te=yt.bind(null,Bt,It),ae=function(){(function(Ut){if(Ut.parentNode===null)return!1;Ut.parentNode.removeChild(Ut)})(Bt)};return te(m),function(Ut){if(Ut){if(Ut.css===m.css&&Ut.media===m.media&&Ut.sourceMap===m.sourceMap)return;te(m=Ut)}else ae()}}L.exports=function(m,It){(It=It||{}).singleton||typeof It.singleton=="boolean"||(It.singleton=U());var Bt=Y(m=m||[],It);return function(te){if(te=te||[],Object.prototype.toString.call(te)==="[object Array]"){for(var ae=0;ae<Bt.length;ae++){var me=P(Bt[ae]);x[me].references--}for(var Ut=Y(te,It),Se=0;Se<Bt.length;Se++){var He=P(Bt[Se]);x[He].references===0&&(x[He].updater(),x.splice(He,1))}Bt=Ut}}}}},R={};function V(L){var B=R[L];if(B!==void 0)return B.exports;var _=R[L]={id:L,exports:{}};return A[L](_,_.exports,V),_.exports}V.n=L=>{var B=L&&L.__esModule?()=>L.default:()=>L;return V.d(B,{a:B}),B},V.d=(L,B)=>{for(var _ in B)V.o(B,_)&&!V.o(L,_)&&Object.defineProperty(L,_,{enumerable:!0,get:B[_]})},V.o=(L,B)=>Object.prototype.hasOwnProperty.call(L,B),V.nc=void 0;var f={};return(()=>{let L;V.d(f,{default:()=>Pf});try{L={window,document}}catch{L={window:{},document:{}}}const B=L,_=function(){try{return navigator.userAgent.toLowerCase()}catch{return""}}();var q;const U={isMac:H(_),isWindows:(q=_,q.indexOf("windows")>-1),isGecko:function(i){return!!i.match(/gecko\/\d+/)}(_),isSafari:function(i){return i.indexOf(" applewebkit/")>-1&&i.indexOf("chrome")===-1}(_),isiOS:function(i){return!!i.match(/iphone|ipad/i)||H(i)&&navigator.maxTouchPoints>0}(_),isAndroid:function(i){return i.indexOf("android")>-1}(_),isBlink:function(i){return i.indexOf("chrome/")>-1&&i.indexOf("edge/")<0}(_),get isMediaForcedColors(){return!!B.window.matchMedia&&B.window.matchMedia("(forced-colors: active)").matches},get isMotionReduced(){return!!B.window.matchMedia&&B.window.matchMedia("(prefers-reduced-motion)").matches},features:{isRegExpUnicodePropertySupported:function(){let i=!1;try{i="ć".search(new RegExp("[\\p{L}]","u"))===0}catch{}return i}()}};function H(i){return i.indexOf("macintosh")>-1}function x(i,t,e,n){e=e||function(c,l){return c===l};const o=Array.isArray(i)?i:Array.prototype.slice.call(i),r=Array.isArray(t)?t:Array.prototype.slice.call(t),s=function(c,l,u){const p=P(c,l,u);if(p===-1)return{firstIndex:-1,lastIndexOld:-1,lastIndexNew:-1};const k=Y(c,p),v=Y(l,p),y=P(k,v,u),I=c.length-y,F=l.length-y;return{firstIndex:p,lastIndexOld:I,lastIndexNew:F}}(o,r,e);return n?function(c,l){const{firstIndex:u,lastIndexOld:p,lastIndexNew:k}=c;if(u===-1)return Array(l).fill("equal");let v=[];return u>0&&(v=v.concat(Array(u).fill("equal"))),k-u>0&&(v=v.concat(Array(k-u).fill("insert"))),p-u>0&&(v=v.concat(Array(p-u).fill("delete"))),k<l&&(v=v.concat(Array(l-k).fill("equal"))),v}(s,r.length):function(c,l){const u=[],{firstIndex:p,lastIndexOld:k,lastIndexNew:v}=l;return v-p>0&&u.push({index:p,type:"insert",values:c.slice(p,v)}),k-p>0&&u.push({index:p+(v-p),type:"delete",howMany:k-p}),u}(r,s)}function P(i,t,e){for(let n=0;n<Math.max(i.length,t.length);n++)if(i[n]===void 0||t[n]===void 0||!e(i[n],t[n]))return n;return-1}function Y(i,t){return i.slice(t).reverse()}function Q(i,t,e){e=e||function(I,F){return I===F};const n=i.length,o=t.length;if(n>200||o>200||n+o>300)return Q.fastDiff(i,t,e,!0);let r,s;if(o<n){const I=i;i=t,t=I,r="delete",s="insert"}else r="insert",s="delete";const a=i.length,c=t.length,l=c-a,u={},p={};function k(I){const F=(p[I-1]!==void 0?p[I-1]:-1)+1,G=p[I+1]!==void 0?p[I+1]:-1,et=F>G?-1:1;u[I+et]&&(u[I]=u[I+et].slice(0)),u[I]||(u[I]=[]),u[I].push(F>G?r:s);let ut=Math.max(F,G),vt=ut-I;for(;vt<a&&ut<c&&e(i[vt],t[ut]);)vt++,ut++,u[I].push("equal");return ut}let v,y=0;do{for(v=-y;v<l;v++)p[v]=k(v);for(v=l+y;v>l;v--)p[v]=k(v);p[l]=k(l),y++}while(p[l]!==c);return u[l].slice(1)}Q.fastDiff=x;const it=function(){return function i(){i.called=!0}};class at{constructor(t,e){this.source=t,this.name=e,this.path=[],this.stop=it(),this.off=it()}}const rt=new Array(256).fill("").map((i,t)=>("0"+t.toString(16)).slice(-2));function yt(){const i=4294967296*Math.random()>>>0,t=4294967296*Math.random()>>>0,e=4294967296*Math.random()>>>0,n=4294967296*Math.random()>>>0;return"e"+rt[255&i]+rt[i>>8&255]+rt[i>>16&255]+rt[i>>24&255]+rt[255&t]+rt[t>>8&255]+rt[t>>16&255]+rt[t>>24&255]+rt[255&e]+rt[e>>8&255]+rt[e>>16&255]+rt[e>>24&255]+rt[255&n]+rt[n>>8&255]+rt[n>>16&255]+rt[n>>24&255]}const xt={get(i="normal"){return typeof i!="number"?this[i]||this.normal:i},highest:1e5,high:1e3,normal:0,low:-1e3,lowest:-1e5};function Ht(i,t){const e=xt.get(t.priority);for(let n=0;n<i.length;n++)if(xt.get(i[n].priority)<e)return void i.splice(n,0,t);i.push(t)}const Kt="https://ckeditor.com/docs/ckeditor5/latest/support/error-codes.html";class m extends Error{constructor(t,e,n){super(function(o,r){const s=new WeakSet,a=(u,p)=>{if(typeof p=="object"&&p!==null){if(s.has(p))return`[object ${p.constructor.name}]`;s.add(p)}return p},c=r?` ${JSON.stringify(r,a)}`:"",l=te(o);return o+c+l}(t,n)),this.name="CKEditorError",this.context=e,this.data=n}is(t){return t==="CKEditorError"}static rethrowUnexpectedError(t,e){if(t.is&&t.is("CKEditorError"))throw t;const n=new m(t.message,e);throw n.stack=t.stack,n}}function It(i,t){console.warn(...ae(i,t))}function Bt(i,t){console.error(...ae(i,t))}function te(i){return`
Read more: ${Kt}#error-${i}`}function ae(i,t){const e=te(i);return t?[i,t,e]:[i,e]}const me="41.4.2",Ut=new Date(2024,4,17);if(globalThis.CKEDITOR_VERSION)throw new m("ckeditor-duplicated-modules",null);globalThis.CKEDITOR_VERSION=me;const Se=Symbol("listeningTo"),He=Symbol("emitterId"),ke=Symbol("delegations"),ve=fe(Object);function fe(i){return i?class extends i{on(t,e,n){this.listenTo(this,t,e,n)}once(t,e,n){let o=!1;this.listenTo(this,t,(r,...s)=>{o||(o=!0,r.off(),e.call(this,r,...s))},n)}off(t,e){this.stopListening(this,t,e)}listenTo(t,e,n,o={}){let r,s;this[Se]||(this[Se]={});const a=this[Se];Fn(t)||qe(t);const c=Fn(t);(r=a[c])||(r=a[c]={emitter:t,callbacks:{}}),(s=r.callbacks[e])||(s=r.callbacks[e]=[]),s.push(n),function(l,u,p,k,v){u._addEventListener?u._addEventListener(p,k,v):l._addEventListener.call(u,p,k,v)}(this,t,e,n,o)}stopListening(t,e,n){const o=this[Se];let r=t&&Fn(t);const s=o&&r?o[r]:void 0,a=s&&e?s.callbacks[e]:void 0;if(!(!o||t&&!s||e&&!a))if(n)Ye(this,t,e,n),a.indexOf(n)!==-1&&(a.length===1?delete s.callbacks[e]:Ye(this,t,e,n));else if(a){for(;n=a.pop();)Ye(this,t,e,n);delete s.callbacks[e]}else if(s){for(e in s.callbacks)this.stopListening(t,e);delete o[r]}else{for(r in o)this.stopListening(o[r].emitter);delete this[Se]}}fire(t,...e){try{const n=t instanceof at?t:new at(this,t),o=n.name;let r=Ke(this,o);if(n.path.push(this),r){const a=[n,...e];r=Array.from(r);for(let c=0;c<r.length&&(r[c].callback.apply(this,a),n.off.called&&(delete n.off.called,this._removeEventListener(o,r[c].callback)),!n.stop.called);c++);}const s=this[ke];if(s){const a=s.get(o),c=s.get("*");a&&Jn(a,n,e),c&&Jn(c,n,e)}return n.return}catch(n){m.rethrowUnexpectedError(n,this)}}delegate(...t){return{to:(e,n)=>{this[ke]||(this[ke]=new Map),t.forEach(o=>{const r=this[ke].get(o);r?r.set(e,n):this[ke].set(o,new Map([[e,n]]))})}}}stopDelegating(t,e){if(this[ke])if(t)if(e){const n=this[ke].get(t);n&&n.delete(e)}else this[ke].delete(t);else this[ke].clear()}_addEventListener(t,e,n){(function(s,a){const c=Qn(s);if(c[a])return;let l=a,u=null;const p=[];for(;l!==""&&!c[l];)c[l]={callbacks:[],childEvents:[]},p.push(c[l]),u&&c[l].childEvents.push(u),u=l,l=l.substr(0,l.lastIndexOf(":"));if(l!==""){for(const k of p)k.callbacks=c[l].callbacks.slice();c[l].childEvents.push(u)}})(this,t);const o=Zn(this,t),r={callback:e,priority:xt.get(n.priority)};for(const s of o)Ht(s,r)}_removeEventListener(t,e){const n=Zn(this,t);for(const o of n)for(let r=0;r<o.length;r++)o[r].callback==e&&(o.splice(r,1),r--)}}:ve}function qe(i,t){i[He]||(i[He]=t||yt())}function Fn(i){return i[He]}function Qn(i){return i._events||Object.defineProperty(i,"_events",{value:{}}),i._events}function Zn(i,t){const e=Qn(i)[t];if(!e)return[];let n=[e.callbacks];for(let o=0;o<e.childEvents.length;o++){const r=Zn(i,e.childEvents[o]);n=n.concat(r)}return n}function Ke(i,t){let e;return i._events&&(e=i._events[t])&&e.callbacks.length?e.callbacks:t.indexOf(":")>-1?Ke(i,t.substr(0,t.lastIndexOf(":"))):null}function Jn(i,t,e){for(let[n,o]of i){o?typeof o=="function"&&(o=o(t.name)):o=t.name;const r=new at(t.source,o);r.path=[...t.path],n.fire(r,...e)}}function Ye(i,t,e,n){t._removeEventListener?t._removeEventListener(e,n):i._removeEventListener.call(t,e,n)}["on","once","off","listenTo","stopListening","fire","delegate","stopDelegating","_addEventListener","_removeEventListener"].forEach(i=>{fe[i]=ve.prototype[i]});const be=function(i){var t=typeof i;return i!=null&&(t=="object"||t=="function")},Xn=Symbol("observableProperties"),Sn=Symbol("boundObservables"),fi=Symbol("boundProperties"),en=Symbol("decoratedMethods"),yo=Symbol("decoratedOriginal"),ti=pe(fe());function pe(i){return i?class extends i{set(t,e){if(be(t))return void Object.keys(t).forEach(o=>{this.set(o,t[o])},this);no(this);const n=this[Xn];if(t in this&&!n.has(t))throw new m("observable-set-cannot-override",this);Object.defineProperty(this,t,{enumerable:!0,configurable:!0,get:()=>n.get(t),set(o){const r=n.get(t);let s=this.fire(`set:${t}`,t,o,r);s===void 0&&(s=o),r===s&&n.has(t)||(n.set(t,s),this.fire(`change:${t}`,t,s,r))}}),this[t]=e}bind(...t){if(!t.length||!rn(t))throw new m("observable-bind-wrong-properties",this);if(new Set(t).size!==t.length)throw new m("observable-bind-duplicate-properties",this);no(this);const e=this[fi];t.forEach(o=>{if(e.has(o))throw new m("observable-bind-rebind",this)});const n=new Map;return t.forEach(o=>{const r={property:o,to:[]};e.set(o,r),n.set(o,r)}),{to:Eo,toMany:In,_observable:this,_bindProperties:t,_to:[],_bindings:n}}unbind(...t){if(!this[Xn])return;const e=this[fi],n=this[Sn];if(t.length){if(!rn(t))throw new m("observable-unbind-wrong-properties",this);t.forEach(o=>{const r=e.get(o);r&&(r.to.forEach(([s,a])=>{const c=n.get(s),l=c[a];l.delete(r),l.size||delete c[a],Object.keys(c).length||(n.delete(s),this.stopListening(s,"change"))}),e.delete(o))})}else n.forEach((o,r)=>{this.stopListening(r,"change")}),n.clear(),e.clear()}decorate(t){no(this);const e=this[t];if(!e)throw new m("observablemixin-cannot-decorate-undefined",this,{object:this,methodName:t});this.on(t,(n,o)=>{n.return=e.apply(this,o)}),this[t]=function(...n){return this.fire(t,n)},this[t][yo]=e,this[en]||(this[en]=[]),this[en].push(t)}stopListening(t,e,n){if(!t&&this[en]){for(const o of this[en])this[o]=this[o][yo];delete this[en]}super.stopListening(t,e,n)}}:ti}function no(i){i[Xn]||(Object.defineProperty(i,Xn,{value:new Map}),Object.defineProperty(i,Sn,{value:new Map}),Object.defineProperty(i,fi,{value:new Map}))}function Eo(...i){const t=function(...r){if(!r.length)throw new m("observable-bind-to-parse-error",null);const s={to:[]};let a;return typeof r[r.length-1]=="function"&&(s.callback=r.pop()),r.forEach(c=>{if(typeof c=="string")a.properties.push(c);else{if(typeof c!="object")throw new m("observable-bind-to-parse-error",null);a={observable:c,properties:[]},s.to.push(a)}}),s}(...i),e=Array.from(this._bindings.keys()),n=e.length;if(!t.callback&&t.to.length>1)throw new m("observable-bind-to-no-callback",this);if(n>1&&t.callback)throw new m("observable-bind-to-extra-callback",this);var o;t.to.forEach(r=>{if(r.properties.length&&r.properties.length!==n)throw new m("observable-bind-to-properties-length",this);r.properties.length||(r.properties=this._bindProperties)}),this._to=t.to,t.callback&&(this._bindings.get(e[0]).callback=t.callback),o=this._observable,this._to.forEach(r=>{const s=o[Sn];let a;s.get(r.observable)||o.listenTo(r.observable,"change",(c,l)=>{a=s.get(r.observable)[l],a&&a.forEach(u=>{sn(o,u.property)})})}),function(r){let s;r._bindings.forEach((a,c)=>{r._to.forEach(l=>{s=l.properties[a.callback?0:r._bindProperties.indexOf(c)],a.to.push([l.observable,s]),function(u,p,k,v){const y=u[Sn],I=y.get(k),F=I||{};F[v]||(F[v]=new Set),F[v].add(p),I||y.set(k,F)}(r._observable,a,l.observable,s)})})}(this),this._bindProperties.forEach(r=>{sn(this._observable,r)})}function In(i,t,e){if(this._bindings.size>1)throw new m("observable-bind-to-many-not-one-binding",this);this.to(...function(n,o){const r=n.map(s=>[s,o]);return Array.prototype.concat.apply([],r)}(i,t),e)}function rn(i){return i.every(t=>typeof t=="string")}function sn(i,t){const e=i[fi].get(t);let n;e.callback?n=e.callback.apply(i,e.to.map(o=>o[0][o[1]])):(n=e.to[0],n=n[0][n[1]]),Object.prototype.hasOwnProperty.call(i,t)?i[t]=n:i.set(t,n)}["set","bind","unbind","decorate","on","once","off","listenTo","stopListening","fire","delegate","stopDelegating","_addEventListener","_removeEventListener"].forEach(i=>{pe[i]=ti.prototype[i]});class ei{constructor(){this._replacedElements=[]}replace(t,e){this._replacedElements.push({element:t,newElement:e}),t.style.display="none",e&&t.parentNode.insertBefore(e,t.nextSibling)}restore(){this._replacedElements.forEach(({element:t,newElement:e})=>{t.style.display="",e&&e.remove()}),this._replacedElements=[]}}function Me(i){let t=0;for(const e of i)t++;return t}function Ue(i,t){const e=Math.min(i.length,t.length);for(let n=0;n<e;n++)if(i[n]!=t[n])return n;return i.length==t.length?"same":i.length<t.length?"prefix":"extension"}function Ne(i){return!(!i||!i[Symbol.iterator])}const yi=typeof Xs=="object"&&Xs&&Xs.Object===Object&&Xs;var Ei=typeof self=="object"&&self&&self.Object===Object&&self;const Vt=yi||Ei||Function("return this")(),Ie=Vt.Symbol;var rr=Object.prototype,pi=rr.hasOwnProperty,sa=rr.toString,xo=Ie?Ie.toStringTag:void 0;const xs=function(i){var t=pi.call(i,xo),e=i[xo];try{i[xo]=void 0;var n=!0}catch{}var o=sa.call(i);return n&&(t?i[xo]=e:delete i[xo]),o};var gi=Object.prototype.toString;const Mn=function(i){return gi.call(i)};var mi=Ie?Ie.toStringTag:void 0;const an=function(i){return i==null?i===void 0?"[object Undefined]":"[object Null]":mi&&mi in Object(i)?xs(i):Mn(i)},cn=Array.isArray,pn=function(i){return i!=null&&typeof i=="object"},Kr=function(i){return typeof i=="string"||!cn(i)&&pn(i)&&an(i)=="[object String]"};function Nn(i,t,e={},n=[]){const o=e&&e.xmlns,r=o?i.createElementNS(o,t):i.createElement(t);for(const s in e)r.setAttribute(s,e[s]);!Kr(n)&&Ne(n)||(n=[n]);for(let s of n)Kr(s)&&(s=i.createTextNode(s)),r.appendChild(s);return r}const Yr=function(i,t){return function(e){return i(t(e))}},Vn=Yr(Object.getPrototypeOf,Object);var xi=Function.prototype,Qr=Object.prototype,Zr=xi.toString,Hn=Qr.hasOwnProperty,gn=Zr.call(Object);const mn=function(i){if(!pn(i)||an(i)!="[object Object]")return!1;var t=Vn(i);if(t===null)return!0;var e=Hn.call(t,"constructor")&&t.constructor;return typeof e=="function"&&e instanceof e&&Zr.call(e)==gn},Ts=function(){this.__data__=[],this.size=0},To=function(i,t){return i===t||i!=i&&t!=t},sr=function(i,t){for(var e=i.length;e--;)if(To(i[e][0],t))return e;return-1};var Do=Array.prototype.splice;const ni=function(i){var t=this.__data__,e=sr(t,i);return!(e<0)&&(e==t.length-1?t.pop():Do.call(t,e,1),--this.size,!0)},ki=function(i){var t=this.__data__,e=sr(t,i);return e<0?void 0:t[e][1]},So=function(i){return sr(this.__data__,i)>-1},Ds=function(i,t){var e=this.__data__,n=sr(e,i);return n<0?(++this.size,e.push([i,t])):e[n][1]=t,this};function Io(i){var t=-1,e=i==null?0:i.length;for(this.clear();++t<e;){var n=i[t];this.set(n[0],n[1])}}Io.prototype.clear=Ts,Io.prototype.delete=ni,Io.prototype.get=ki,Io.prototype.has=So,Io.prototype.set=Ds;const vr=Io,Ss=function(){this.__data__=new vr,this.size=0},aa=function(i){var t=this.__data__,e=t.delete(i);return this.size=t.size,e},Mo=function(i){return this.__data__.get(i)},Jr=function(i){return this.__data__.has(i)},ii=function(i){if(!be(i))return!1;var t=an(i);return t=="[object Function]"||t=="[object GeneratorFunction]"||t=="[object AsyncFunction]"||t=="[object Proxy]"},Qe=Vt["__core-js_shared__"];var Un=function(){var i=/[^.]+$/.exec(Qe&&Qe.keys&&Qe.keys.IE_PROTO||"");return i?"Symbol(src)_1."+i:""}();const Cr=function(i){return!!Un&&Un in i};var Ti=Function.prototype.toString;const kn=function(i){if(i!=null){try{return Ti.call(i)}catch{}try{return i+""}catch{}}return""};var Xr=/^\[object .+?Constructor\]$/,Is=Function.prototype,bn=Object.prototype,bi=Is.toString,No=bn.hasOwnProperty,yr=RegExp("^"+bi.call(No).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");const Oo=function(i){return!(!be(i)||Cr(i))&&(ii(i)?yr:Xr).test(kn(i))},ca=function(i,t){return i==null?void 0:i[t]},Di=function(i,t){var e=ca(i,t);return Oo(e)?e:void 0},ar=Di(Vt,"Map"),io=Di(Object,"create"),Bo=function(){this.__data__=io?io(null):{},this.size=0},Er=function(i){var t=this.has(i)&&delete this.__data__[i];return this.size-=t?1:0,t};var xr=Object.prototype.hasOwnProperty;const Pi=function(i){var t=this.__data__;if(io){var e=t[i];return e==="__lodash_hash_undefined__"?void 0:e}return xr.call(t,i)?t[i]:void 0};var Ze=Object.prototype.hasOwnProperty;const oo=function(i){var t=this.__data__;return io?t[i]!==void 0:Ze.call(t,i)},yn=function(i,t){var e=this.__data__;return this.size+=this.has(i)?0:1,e[i]=io&&t===void 0?"__lodash_hash_undefined__":t,this};function Je(i){var t=-1,e=i==null?0:i.length;for(this.clear();++t<e;){var n=i[t];this.set(n[0],n[1])}}Je.prototype.clear=Bo,Je.prototype.delete=Er,Je.prototype.get=Pi,Je.prototype.has=oo,Je.prototype.set=yn;const ro=Je,Lo=function(){this.size=0,this.__data__={hash:new ro,map:new(ar||vr),string:new ro}},Tr=function(i){var t=typeof i;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?i!=="__proto__":i===null},so=function(i,t){var e=i.__data__;return Tr(t)?e[typeof t=="string"?"string":"hash"]:e.map},Dr=function(i){var t=so(this,i).delete(i);return this.size-=t?1:0,t},Sr=function(i){return so(this,i).get(i)},Ri=function(i){return so(this,i).has(i)},ln=function(i,t){var e=so(this,i),n=e.size;return e.set(i,t),this.size+=e.size==n?0:1,this};function oi(i){var t=-1,e=i==null?0:i.length;for(this.clear();++t<e;){var n=i[t];this.set(n[0],n[1])}}oi.prototype.clear=Lo,oi.prototype.delete=Dr,oi.prototype.get=Sr,oi.prototype.has=Ri,oi.prototype.set=ln;const On=oi,Po=function(i,t){var e=this.__data__;if(e instanceof vr){var n=e.__data__;if(!ar||n.length<199)return n.push([i,t]),this.size=++e.size,this;e=this.__data__=new On(n)}return e.set(i,t),this.size=e.size,this};function zi(i){var t=this.__data__=new vr(i);this.size=t.size}zi.prototype.clear=Ss,zi.prototype.delete=aa,zi.prototype.get=Mo,zi.prototype.has=Jr,zi.prototype.set=Po;const nn=zi,Bn=function(i,t){for(var e=-1,n=i==null?0:i.length;++e<n&&t(i[e],e,i)!==!1;);return i},ji=function(){try{var i=Di(Object,"defineProperty");return i({},"",{}),i}catch{}}(),ri=function(i,t,e){t=="__proto__"&&ji?ji(i,t,{configurable:!0,enumerable:!0,value:e,writable:!0}):i[t]=e};var Fi=Object.prototype.hasOwnProperty;const Si=function(i,t,e){var n=i[t];Fi.call(i,t)&&To(n,e)&&(e!==void 0||t in i)||ri(i,t,e)},Vi=function(i,t,e,n){var o=!e;e||(e={});for(var r=-1,s=t.length;++r<s;){var a=t[r],c=n?n(e[a],i[a],a,e,i):void 0;c===void 0&&(c=i[a]),o?ri(e,a,c):Si(e,a,c)}return e},cr=function(i,t){for(var e=-1,n=Array(i);++e<i;)n[e]=t(e);return n},Ir=function(i){return pn(i)&&an(i)=="[object Arguments]"};var ts=Object.prototype,Ms=ts.hasOwnProperty,la=ts.propertyIsEnumerable;const Ii=Ir(function(){return arguments}())?Ir:function(i){return pn(i)&&Ms.call(i,"callee")&&!la.call(i,"callee")},_n=function(){return!1};var Mi=h&&!h.nodeType&&h,Mr=Mi&&!0&&E&&!E.nodeType&&E,Nr=Mr&&Mr.exports===Mi?Vt.Buffer:void 0;const lr=(Nr?Nr.isBuffer:void 0)||_n;var Ro=/^(?:0|[1-9]\d*)$/;const Ni=function(i,t){var e=typeof i;return!!(t=t??9007199254740991)&&(e=="number"||e!="symbol"&&Ro.test(i))&&i>-1&&i%1==0&&i<t},ao=function(i){return typeof i=="number"&&i>-1&&i%1==0&&i<=9007199254740991};var Ce={};Ce["[object Float32Array]"]=Ce["[object Float64Array]"]=Ce["[object Int8Array]"]=Ce["[object Int16Array]"]=Ce["[object Int32Array]"]=Ce["[object Uint8Array]"]=Ce["[object Uint8ClampedArray]"]=Ce["[object Uint16Array]"]=Ce["[object Uint32Array]"]=!0,Ce["[object Arguments]"]=Ce["[object Array]"]=Ce["[object ArrayBuffer]"]=Ce["[object Boolean]"]=Ce["[object DataView]"]=Ce["[object Date]"]=Ce["[object Error]"]=Ce["[object Function]"]=Ce["[object Map]"]=Ce["[object Number]"]=Ce["[object Object]"]=Ce["[object RegExp]"]=Ce["[object Set]"]=Ce["[object String]"]=Ce["[object WeakMap]"]=!1;const Or=function(i){return pn(i)&&ao(i.length)&&!!Ce[an(i)]},dr=function(i){return function(t){return i(t)}};var ur=h&&!h.nodeType&&h,si=ur&&!0&&E&&!E.nodeType&&E,Hi=si&&si.exports===ur&&yi.process;const $n=function(){try{var i=si&&si.require&&si.require("util").types;return i||Hi&&Hi.binding&&Hi.binding("util")}catch{}}();var Ns=$n&&$n.isTypedArray;const Wn=Ns?dr(Ns):Or;var zo=Object.prototype.hasOwnProperty;const Ui=function(i,t){var e=cn(i),n=!e&&Ii(i),o=!e&&!n&&lr(i),r=!e&&!n&&!o&&Wn(i),s=e||n||o||r,a=s?cr(i.length,String):[],c=a.length;for(var l in i)!t&&!zo.call(i,l)||s&&(l=="length"||o&&(l=="offset"||l=="parent")||r&&(l=="buffer"||l=="byteLength"||l=="byteOffset")||Ni(l,c))||a.push(l);return a};var jo=Object.prototype;const Fo=function(i){var t=i&&i.constructor;return i===(typeof t=="function"&&t.prototype||jo)},co=Yr(Object.keys,Object);var Vo=Object.prototype.hasOwnProperty;const Os=function(i){if(!Fo(i))return co(i);var t=[];for(var e in Object(i))Vo.call(i,e)&&e!="constructor"&&t.push(e);return t},d=function(i){return i!=null&&ao(i.length)&&!ii(i)},g=function(i){return d(i)?Ui(i):Os(i)},w=function(i,t){return i&&Vi(t,g(t),i)},C=function(i){var t=[];if(i!=null)for(var e in Object(i))t.push(e);return t};var S=Object.prototype.hasOwnProperty;const M=function(i){if(!be(i))return C(i);var t=Fo(i),e=[];for(var n in i)(n!="constructor"||!t&&S.call(i,n))&&e.push(n);return e},z=function(i){return d(i)?Ui(i,!0):M(i)},X=function(i,t){return i&&Vi(t,z(t),i)};var Z=h&&!h.nodeType&&h,st=Z&&!0&&E&&!E.nodeType&&E,bt=st&&st.exports===Z?Vt.Buffer:void 0,wt=bt?bt.allocUnsafe:void 0;const ft=function(i,t){if(t)return i.slice();var e=i.length,n=wt?wt(e):new i.constructor(e);return i.copy(n),n},St=function(i,t){var e=-1,n=i.length;for(t||(t=Array(n));++e<n;)t[e]=i[e];return t},ee=function(i,t){for(var e=-1,n=i==null?0:i.length,o=0,r=[];++e<n;){var s=i[e];t(s,e,i)&&(r[o++]=s)}return r},le=function(){return[]};var ne=Object.prototype.propertyIsEnumerable,$e=Object.getOwnPropertySymbols;const je=$e?function(i){return i==null?[]:(i=Object(i),ee($e(i),function(t){return ne.call(i,t)}))}:le,dn=function(i,t){return Vi(i,je(i),t)},wn=function(i,t){for(var e=-1,n=t.length,o=i.length;++e<n;)i[o+e]=t[e];return i},ue=Object.getOwnPropertySymbols?function(i){for(var t=[];i;)wn(t,je(i)),i=Vn(i);return t}:le,lo=function(i,t){return Vi(i,ue(i),t)},we=function(i,t,e){var n=t(i);return cn(i)?n:wn(n,e(i))},Be=function(i){return we(i,g,je)},Ho=function(i){return we(i,z,ue)},uo=Di(Vt,"DataView"),Ln=Di(Vt,"Promise"),ai=Di(Vt,"Set"),Ge=Di(Vt,"WeakMap");var qn="[object Map]",un="[object Promise]",Pn="[object Set]",$i="[object WeakMap]",Xe="[object DataView]",ci=kn(uo),da=kn(ar),hr=kn(Ln),Bs=kn(ai),ye=kn(Ge),Gn=an;(uo&&Gn(new uo(new ArrayBuffer(1)))!=Xe||ar&&Gn(new ar)!=qn||Ln&&Gn(Ln.resolve())!=un||ai&&Gn(new ai)!=Pn||Ge&&Gn(new Ge)!=$i)&&(Gn=function(i){var t=an(i),e=t=="[object Object]"?i.constructor:void 0,n=e?kn(e):"";if(n)switch(n){case ci:return Xe;case da:return qn;case hr:return un;case Bs:return Pn;case ye:return $i}return t});const on=Gn;var Uo=Object.prototype.hasOwnProperty;const ua=function(i){var t=i.length,e=new i.constructor(t);return t&&typeof i[0]=="string"&&Uo.call(i,"index")&&(e.index=i.index,e.input=i.input),e},Oi=Vt.Uint8Array,An=function(i){var t=new i.constructor(i.byteLength);return new Oi(t).set(new Oi(i)),t},Wi=function(i,t){var e=t?An(i.buffer):i.buffer;return new i.constructor(e,i.byteOffset,i.byteLength)};var Br=/\w*$/;const qi=function(i){var t=new i.constructor(i.source,Br.exec(i));return t.lastIndex=i.lastIndex,t};var ho=Ie?Ie.prototype:void 0,_i=ho?ho.valueOf:void 0;const $o=function(i){return _i?Object(_i.call(i)):{}},Wo=function(i,t){var e=t?An(i.buffer):i.buffer;return new i.constructor(e,i.byteOffset,i.length)},es=function(i,t,e){var n=i.constructor;switch(t){case"[object ArrayBuffer]":return An(i);case"[object Boolean]":case"[object Date]":return new n(+i);case"[object DataView]":return Wi(i,e);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return Wo(i,e);case"[object Map]":case"[object Set]":return new n;case"[object Number]":case"[object String]":return new n(i);case"[object RegExp]":return qi(i);case"[object Symbol]":return $o(i)}};var ns=Object.create;const Lr=function(){function i(){}return function(t){if(!be(t))return{};if(ns)return ns(t);i.prototype=t;var e=new i;return i.prototype=void 0,e}}(),wi=function(i){return typeof i.constructor!="function"||Fo(i)?{}:Lr(Vn(i))},Gi=function(i){return pn(i)&&on(i)=="[object Map]"};var Pr=$n&&$n.isMap;const Ki=Pr?dr(Pr):Gi,Ls=function(i){return pn(i)&&on(i)=="[object Set]"};var K=$n&&$n.isSet;const ot=K?dr(K):Ls;var ht="[object Arguments]",gt="[object Function]",At="[object Object]",Ct={};Ct[ht]=Ct["[object Array]"]=Ct["[object ArrayBuffer]"]=Ct["[object DataView]"]=Ct["[object Boolean]"]=Ct["[object Date]"]=Ct["[object Float32Array]"]=Ct["[object Float64Array]"]=Ct["[object Int8Array]"]=Ct["[object Int16Array]"]=Ct["[object Int32Array]"]=Ct["[object Map]"]=Ct["[object Number]"]=Ct[At]=Ct["[object RegExp]"]=Ct["[object Set]"]=Ct["[object String]"]=Ct["[object Symbol]"]=Ct["[object Uint8Array]"]=Ct["[object Uint8ClampedArray]"]=Ct["[object Uint16Array]"]=Ct["[object Uint32Array]"]=!0,Ct["[object Error]"]=Ct[gt]=Ct["[object WeakMap]"]=!1;const jt=function i(t,e,n,o,r,s){var a,c=1&e,l=2&e,u=4&e;if(n&&(a=r?n(t,o,r,s):n(t)),a!==void 0)return a;if(!be(t))return t;var p=cn(t);if(p){if(a=ua(t),!c)return St(t,a)}else{var k=on(t),v=k==gt||k=="[object GeneratorFunction]";if(lr(t))return ft(t,c);if(k==At||k==ht||v&&!r){if(a=l||v?{}:wi(t),!c)return l?lo(t,X(a,t)):dn(t,w(a,t))}else{if(!Ct[k])return r?t:{};a=es(t,k,c)}}s||(s=new nn);var y=s.get(t);if(y)return y;s.set(t,a),ot(t)?t.forEach(function(F){a.add(i(F,e,n,F,t,s))}):Ki(t)&&t.forEach(function(F,G){a.set(G,i(F,e,n,G,t,s))});var I=p?void 0:(u?l?Ho:Be:l?z:g)(t);return Bn(I||t,function(F,G){I&&(F=t[G=F]),Si(a,G,i(F,e,n,G,t,s))}),a},$t=function(i,t){return jt(i,5,t=typeof t=="function"?t:void 0)},Rt=function(i){return pn(i)&&i.nodeType===1&&!mn(i)};class de{constructor(t,e){this._config={},e&&this.define(Jt(e)),t&&this._setObjectToTarget(this._config,t)}set(t,e){this._setToTarget(this._config,t,e)}define(t,e){this._setToTarget(this._config,t,e,!0)}get(t){return this._getFromSource(this._config,t)}*names(){for(const t of Object.keys(this._config))yield t}_setToTarget(t,e,n,o=!1){if(mn(e))return void this._setObjectToTarget(t,e,o);const r=e.split(".");e=r.pop();for(const s of r)mn(t[s])||(t[s]={}),t=t[s];if(mn(n))return mn(t[e])||(t[e]={}),t=t[e],void this._setObjectToTarget(t,n,o);o&&t[e]!==void 0||(t[e]=n)}_getFromSource(t,e){const n=e.split(".");e=n.pop();for(const o of n){if(!mn(t[o])){t=null;break}t=t[o]}return t?Jt(t[e]):void 0}_setObjectToTarget(t,e,n){Object.keys(e).forEach(o=>{this._setToTarget(t,o,e[o],n)})}}function Jt(i){return $t(i,Gt)}function Gt(i){return Rt(i)||typeof i=="function"?i:void 0}function qt(i){if(i){if(i.defaultView)return i instanceof i.defaultView.Document;if(i.ownerDocument&&i.ownerDocument.defaultView)return i instanceof i.ownerDocument.defaultView.Node}return!1}function ct(i){const t=Object.prototype.toString.apply(i);return t=="[object Window]"||t=="[object global]"}const pt=dt(fe());function dt(i){return i?class extends i{listenTo(t,e,n,o={}){if(qt(t)||ct(t)){const r={capture:!!o.useCapture,passive:!!o.usePassive},s=this._getProxyEmitter(t,r)||new W(t,r);this.listenTo(s,e,n,o)}else super.listenTo(t,e,n,o)}stopListening(t,e,n){if(qt(t)||ct(t)){const o=this._getAllProxyEmitters(t);for(const r of o)this.stopListening(r,e,n)}else super.stopListening(t,e,n)}_getProxyEmitter(t,e){return function(n,o){const r=n[Se];return r&&r[o]?r[o].emitter:null}(this,tt(t,e))}_getAllProxyEmitters(t){return[{capture:!1,passive:!1},{capture:!1,passive:!0},{capture:!0,passive:!1},{capture:!0,passive:!0}].map(e=>this._getProxyEmitter(t,e)).filter(e=>!!e)}}:pt}["_getProxyEmitter","_getAllProxyEmitters","on","once","off","listenTo","stopListening","fire","delegate","stopDelegating","_addEventListener","_removeEventListener"].forEach(i=>{dt[i]=pt.prototype[i]});class W extends fe(){constructor(t,e){super(),qe(this,tt(t,e)),this._domNode=t,this._options=e}attach(t){if(this._domListeners&&this._domListeners[t])return;const e=this._createDomListener(t);this._domNode.addEventListener(t,e,this._options),this._domListeners||(this._domListeners={}),this._domListeners[t]=e}detach(t){let e;!this._domListeners[t]||(e=this._events[t])&&e.callbacks.length||this._domListeners[t].removeListener()}_addEventListener(t,e,n){this.attach(t),fe().prototype._addEventListener.call(this,t,e,n)}_removeEventListener(t,e){fe().prototype._removeEventListener.call(this,t,e),this.detach(t)}_createDomListener(t){const e=n=>{this.fire(t,n)};return e.removeListener=()=>{this._domNode.removeEventListener(t,e,this._options),delete this._domListeners[t]},e}}function tt(i,t){let e=function(n){return n["data-ck-expando"]||(n["data-ck-expando"]=yt())}(i);for(const n of Object.keys(t).sort())t[n]&&(e+="-"+n);return e}function kt(i){const t=i.ownerDocument.defaultView.getComputedStyle(i);return{top:parseInt(t.borderTopWidth,10),right:parseInt(t.borderRightWidth,10),bottom:parseInt(t.borderBottomWidth,10),left:parseInt(t.borderLeftWidth,10)}}function _t(i){return Object.prototype.toString.call(i)=="[object Text]"}function Ot(i){return Object.prototype.toString.apply(i)=="[object Range]"}function re(i){return i&&i.parentNode?i.offsetParent===B.document.body?null:i.offsetParent:null}const ge=["top","right","bottom","left","width","height"];class Xt{constructor(t){const e=Ot(t);if(Object.defineProperty(this,"_source",{value:t._source||t,writable:!0,enumerable:!1}),is(t)||e)if(e){const n=Xt.getDomRangeRects(t);Rn(this,Xt.getBoundingRect(n))}else Rn(this,t.getBoundingClientRect());else if(ct(t)){const{innerWidth:n,innerHeight:o}=t;Rn(this,{top:0,right:n,bottom:o,left:0,width:n,height:o})}else Rn(this,t)}clone(){return new Xt(this)}moveTo(t,e){return this.top=e,this.right=t+this.width,this.bottom=e+this.height,this.left=t,this}moveBy(t,e){return this.top+=e,this.right+=t,this.left+=t,this.bottom+=e,this}getIntersection(t){const e={top:Math.max(this.top,t.top),right:Math.min(this.right,t.right),bottom:Math.min(this.bottom,t.bottom),left:Math.max(this.left,t.left),width:0,height:0};if(e.width=e.right-e.left,e.height=e.bottom-e.top,e.width<0||e.height<0)return null;{const n=new Xt(e);return n._source=this._source,n}}getIntersectionArea(t){const e=this.getIntersection(t);return e?e.getArea():0}getArea(){return this.width*this.height}getVisible(){const t=this._source;let e=this.clone();if(Ai(t))return e;let n,o=t,r=t.parentNode||t.commonAncestorContainer;for(;r&&!Ai(r);){const a=((s=r)instanceof HTMLElement?s.ownerDocument.defaultView.getComputedStyle(s).overflow:"visible")==="visible";o instanceof HTMLElement&&Ua(o)==="absolute"&&(n=o);const c=Ua(r);if(a||n&&(c==="relative"&&a||c!=="relative")){o=r,r=r.parentNode;continue}const l=new Xt(r),u=e.getIntersection(l);if(!u)return null;u.getArea()<e.getArea()&&(e=u),o=r,r=r.parentNode}var s;return e}isEqual(t){for(const e of ge)if(this[e]!==t[e])return!1;return!0}contains(t){const e=this.getIntersection(t);return!(!e||!e.isEqual(t))}toAbsoluteRect(){const{scrollX:t,scrollY:e}=B.window,n=this.clone().moveBy(t,e);if(is(n._source)){const o=re(n._source);o&&function(r,s){const a=new Xt(s),c=kt(s);let l=0,u=0;l-=a.left,u-=a.top,l+=s.scrollLeft,u+=s.scrollTop,l-=c.left,u-=c.top,r.moveBy(l,u)}(n,o)}return n}excludeScrollbarsAndBorders(){const t=this._source;let e,n,o;if(ct(t))e=t.innerWidth-t.document.documentElement.clientWidth,n=t.innerHeight-t.document.documentElement.clientHeight,o=t.getComputedStyle(t.document.documentElement).direction;else{const r=kt(t);e=t.offsetWidth-t.clientWidth-r.left-r.right,n=t.offsetHeight-t.clientHeight-r.top-r.bottom,o=t.ownerDocument.defaultView.getComputedStyle(t).direction,this.left+=r.left,this.top+=r.top,this.right-=r.right,this.bottom-=r.bottom,this.width=this.right-this.left,this.height=this.bottom-this.top}return this.width-=e,o==="ltr"?this.right-=e:this.left+=e,this.height-=n,this.bottom-=n,this}static getDomRangeRects(t){const e=[],n=Array.from(t.getClientRects());if(n.length)for(const o of n)e.push(new Xt(o));else{let o=t.startContainer;_t(o)&&(o=o.parentNode);const r=new Xt(o.getBoundingClientRect());r.right=r.left,r.width=0,e.push(r)}return e}static getBoundingRect(t){const e={left:Number.POSITIVE_INFINITY,top:Number.POSITIVE_INFINITY,right:Number.NEGATIVE_INFINITY,bottom:Number.NEGATIVE_INFINITY,width:0,height:0};let n=0;for(const o of t)n++,e.left=Math.min(e.left,o.left),e.top=Math.min(e.top,o.top),e.right=Math.max(e.right,o.right),e.bottom=Math.max(e.bottom,o.bottom);return n==0?null:(e.width=e.right-e.left,e.height=e.bottom-e.top,new Xt(e))}}function Rn(i,t){for(const e of ge)i[e]=t[e]}function Ai(i){return!!is(i)&&i===i.ownerDocument.body}function is(i){return i!==null&&typeof i=="object"&&i.nodeType===1&&typeof i.getBoundingClientRect=="function"}function Ua(i){return i instanceof HTMLElement?i.ownerDocument.defaultView.getComputedStyle(i).position:"static"}const tn=class{constructor(i,t){tn._observerInstance||tn._createObserver(),this._element=i,this._callback=t,tn._addElementCallback(i,t),tn._observerInstance.observe(i)}get element(){return this._element}destroy(){tn._deleteElementCallback(this._element,this._callback)}static _addElementCallback(i,t){tn._elementCallbacks||(tn._elementCallbacks=new Map);let e=tn._elementCallbacks.get(i);e||(e=new Set,tn._elementCallbacks.set(i,e)),e.add(t)}static _deleteElementCallback(i,t){const e=tn._getElementCallbacks(i);e&&(e.delete(t),e.size||(tn._elementCallbacks.delete(i),tn._observerInstance.unobserve(i))),tn._elementCallbacks&&!tn._elementCallbacks.size&&(tn._observerInstance=null,tn._elementCallbacks=null)}static _getElementCallbacks(i){return tn._elementCallbacks?tn._elementCallbacks.get(i):null}static _createObserver(){tn._observerInstance=new B.window.ResizeObserver(i=>{for(const t of i){const e=tn._getElementCallbacks(t.target);if(e)for(const n of e)n(t)}})}};let Ps=tn;function $l(i,t){i instanceof HTMLTextAreaElement&&(i.value=t),i.innerHTML=t}function fr(i){return t=>t+i}function Rs(i){let t=0;for(;i.previousSibling;)i=i.previousSibling,t++;return t}function $a(i,t,e){i.insertBefore(e,i.childNodes[t]||null)}function zs(i){return i&&i.nodeType===Node.COMMENT_NODE}function os(i){return!!(i&&i.getClientRects&&i.getClientRects().length)}Ps._observerInstance=null,Ps._elementCallbacks=null;var jc=Math.pow;function Wa({element:i,target:t,positions:e,limiter:n,fitInViewport:o,viewportOffsetConfig:r}){ii(t)&&(t=t()),ii(n)&&(n=n());const s=re(i),a=function(k){k=Object.assign({top:0,bottom:0,left:0,right:0},k);const v=new Xt(B.window);return v.top+=k.top,v.height-=k.top,v.bottom-=k.bottom,v.height-=k.bottom,v}(r),c=new Xt(i),l=Wl(t,a);let u;if(!l||!a.getIntersection(l))return null;const p={targetRect:l,elementRect:c,positionedElementAncestor:s,viewportRect:a};if(n||o){if(n){const k=Wl(n,a);k&&(p.limiterRect=k)}u=function(k,v){const{elementRect:y}=v,I=y.getArea(),F=k.map(ut=>new ql(ut,v)).filter(ut=>!!ut.name);let G=0,et=null;for(const ut of F){const{limiterIntersectionArea:vt,viewportIntersectionArea:Ft}=ut;if(vt===I)return ut;const oe=jc(Ft,2)+jc(vt,2);oe>G&&(G=oe,et=ut)}return et}(e,p)}else u=new ql(e[0],p);return u}function Wl(i,t){const e=new Xt(i).getVisible();return e?e.getIntersection(t):null}class ql{constructor(t,e){const n=t(e.targetRect,e.elementRect,e.viewportRect,e.limiterRect);if(!n)return;const{left:o,top:r,name:s,config:a}=n;this.name=s,this.config=a,this._positioningFunctionCoordinates={left:o,top:r},this._options=e}get left(){return this._absoluteRect.left}get top(){return this._absoluteRect.top}get limiterIntersectionArea(){const t=this._options.limiterRect;return t?t.getIntersectionArea(this._rect):0}get viewportIntersectionArea(){return this._options.viewportRect.getIntersectionArea(this._rect)}get _rect(){return this._cachedRect||(this._cachedRect=this._options.elementRect.clone().moveTo(this._positioningFunctionCoordinates.left,this._positioningFunctionCoordinates.top)),this._cachedRect}get _absoluteRect(){return this._cachedAbsoluteRect||(this._cachedAbsoluteRect=this._rect.toAbsoluteRect()),this._cachedAbsoluteRect}}function Gl(i){const t=i.parentNode;t&&t.removeChild(i)}function Lu({window:i,rect:t,alignToTop:e,forceScroll:n,viewportOffset:o}){const r=t.clone().moveBy(0,o.bottom),s=t.clone().moveBy(0,-o.top),a=new Xt(i).excludeScrollbarsAndBorders(),c=e&&n,l=[s,r].every(y=>a.contains(y));let{scrollX:u,scrollY:p}=i;const k=u,v=p;c?p-=a.top-t.top+o.top:l||(qa(s,a)?p-=a.top-t.top+o.top:Fc(r,a)&&(p+=e?t.top-a.top-o.top:t.bottom-a.bottom+o.bottom)),l||(Yl(t,a)?u-=a.left-t.left+o.left:js(t,a)&&(u+=t.right-a.right+o.right)),u==k&&p===v||i.scrollTo(u,p)}function Kl({parent:i,getRect:t,alignToTop:e,forceScroll:n,ancestorOffset:o=0,limiterElement:r}){const s=Vc(i),a=e&&n;let c,l,u;const p=r||s.document.body;for(;i!=p;)l=t(),c=new Xt(i).excludeScrollbarsAndBorders(),u=c.contains(l),a?i.scrollTop-=c.top-l.top+o:u||(qa(l,c)?i.scrollTop-=c.top-l.top+o:Fc(l,c)&&(i.scrollTop+=e?l.top-c.top-o:l.bottom-c.bottom+o)),u||(Yl(l,c)?i.scrollLeft-=c.left-l.left+o:js(l,c)&&(i.scrollLeft+=l.right-c.right+o)),i=i.parentNode}function Fc(i,t){return i.bottom>t.bottom}function qa(i,t){return i.top<t.top}function Yl(i,t){return i.left<t.left}function js(i,t){return i.right>t.right}function Vc(i){return Ot(i)?i.startContainer.ownerDocument.defaultView:i.ownerDocument.defaultView}function Pu(i){if(Ot(i)){let t=i.commonAncestorContainer;return _t(t)&&(t=t.parentNode),t}return i.parentNode}function Ql(i,t){const e=Vc(i),n=new Xt(i);if(e===t)return n;{let o=e;for(;o!=t;){const r=o.frameElement,s=new Xt(r).excludeScrollbarsAndBorders();n.moveBy(s.left,s.top),o=o.parent}}return n}const Ru={ctrl:"⌃",cmd:"⌘",alt:"⌥",shift:"⇧"},zu={ctrl:"Ctrl+",alt:"Alt+",shift:"Shift+"},Zl={37:"←",38:"↑",39:"→",40:"↓",9:"⇥",33:"Page Up",34:"Page Down"},Ae=function(){const i={pageup:33,pagedown:34,arrowleft:37,arrowup:38,arrowright:39,arrowdown:40,backspace:8,delete:46,enter:13,space:32,esc:27,tab:9,ctrl:1114112,shift:2228224,alt:4456448,cmd:8912896};for(let t=65;t<=90;t++)i[String.fromCharCode(t).toLowerCase()]=t;for(let t=48;t<=57;t++)i[t-48]=t;for(let t=112;t<=123;t++)i["f"+(t-111)]=t;return Object.assign(i,{"'":222,",":108,"-":109,".":110,"/":111,";":186,"=":187,"[":219,"\\":220,"]":221,"`":223}),i}(),rs=Object.fromEntries(Object.entries(Ae).map(([i,t])=>{let e;return e=t in Zl?Zl[t]:i.charAt(0).toUpperCase()+i.slice(1),[t,e]}));function Fs(i){let t;if(typeof i=="string"){if(t=Ae[i.toLowerCase()],!t)throw new m("keyboard-unknown-key",null,{key:i})}else t=i.keyCode+(i.altKey?Ae.alt:0)+(i.ctrlKey?Ae.ctrl:0)+(i.shiftKey?Ae.shift:0)+(i.metaKey?Ae.cmd:0);return t}function Rr(i){return typeof i=="string"&&(i=function(t){return t.split("+").map(e=>e.trim())}(i)),i.map(t=>typeof t=="string"?function(e){if(e.endsWith("!"))return Fs(e.slice(0,-1));const n=Fs(e);return(U.isMac||U.isiOS)&&n==Ae.ctrl?Ae.cmd:n}(t):t).reduce((t,e)=>e+t,0)}function vi(i){let t=Rr(i);return Object.entries(U.isMac||U.isiOS?Ru:zu).reduce((e,[n,o])=>(t&Ae[n]&&(t&=~Ae[n],e+=o),e),"")+(t?rs[t]:"")}function Hc(i,t){const e=t==="ltr";switch(i){case Ae.arrowleft:return e?"left":"right";case Ae.arrowright:return e?"right":"left";case Ae.arrowup:return"up";case Ae.arrowdown:return"down"}}function Le(i){return Array.isArray(i)?i:[i]}const Uc=function(i,t,e){(e!==void 0&&!To(i[t],e)||e===void 0&&!(t in i))&&ri(i,t,e)},Jl=function(i){return function(t,e,n){for(var o=-1,r=Object(t),s=n(t),a=s.length;a--;){var c=s[i?a:++o];if(e(r[c],c,r)===!1)break}return t}}(),ha=function(i){return pn(i)&&d(i)},ss=function(i,t){if((t!=="constructor"||typeof i[t]!="function")&&t!="__proto__")return i[t]},fa=function(i){return Vi(i,z(i))},$c=function(i,t,e,n,o,r,s){var a=ss(i,e),c=ss(t,e),l=s.get(c);if(l)Uc(i,e,l);else{var u=r?r(a,c,e+"",i,t,s):void 0,p=u===void 0;if(p){var k=cn(c),v=!k&&lr(c),y=!k&&!v&&Wn(c);u=c,k||v||y?cn(a)?u=a:ha(a)?u=St(a):v?(p=!1,u=ft(c,!0)):y?(p=!1,u=Wo(c,!0)):u=[]:mn(c)||Ii(c)?(u=a,Ii(a)?u=fa(a):be(a)&&!ii(a)||(u=wi(c))):p=!1}p&&(s.set(c,u),o(u,c,n,r,s),s.delete(c)),Uc(i,e,u)}},ju=function i(t,e,n,o,r){t!==e&&Jl(e,function(s,a){if(r||(r=new nn),be(s))$c(t,e,a,n,i,o,r);else{var c=o?o(ss(t,a),s,a+"",t,e,r):void 0;c===void 0&&(c=s),Uc(t,a,c)}},z)},zr=function(i){return i},pa=function(i,t,e){switch(e.length){case 0:return i.call(t);case 1:return i.call(t,e[0]);case 2:return i.call(t,e[0],e[1]);case 3:return i.call(t,e[0],e[1],e[2])}return i.apply(t,e)};var Ga=Math.max;const Fu=function(i,t,e){return t=Ga(t===void 0?i.length-1:t,0),function(){for(var n=arguments,o=-1,r=Ga(n.length-t,0),s=Array(r);++o<r;)s[o]=n[t+o];o=-1;for(var a=Array(t+1);++o<t;)a[o]=n[o];return a[t]=e(s),pa(i,this,a)}},Vu=function(i){return function(){return i}},Hu=ji?function(i,t){return ji(i,"toString",{configurable:!0,enumerable:!1,value:Vu(t),writable:!0})}:zr;var Uu=Date.now;const $u=function(i){var t=0,e=0;return function(){var n=Uu(),o=16-(n-e);if(e=n,o>0){if(++t>=800)return arguments[0]}else t=0;return i.apply(void 0,arguments)}}(Hu),as=function(i,t){return $u(Fu(i,t,zr),i+"")},Vs=function(i,t,e){if(!be(e))return!1;var n=typeof t;return!!(n=="number"?d(e)&&Ni(t,e.length):n=="string"&&t in e)&&To(e[t],i)},Xl=function(i){return as(function(t,e){var n=-1,o=e.length,r=o>1?e[o-1]:void 0,s=o>2?e[2]:void 0;for(r=i.length>3&&typeof r=="function"?(o--,r):void 0,s&&Vs(e[0],e[1],s)&&(r=o<3?void 0:r,o=1),t=Object(t);++n<o;){var a=e[n];a&&i(t,a,n,r)}return t})},Hs=Xl(function(i,t,e){ju(i,t,e)});function fo(i,t,e=1,n){if(typeof e!="number")throw new m("translation-service-quantity-not-a-number",null,{quantity:e});const o=n||B.window.CKEDITOR_TRANSLATIONS,r=function(u){return Object.keys(u).length}(o);r===1&&(i=Object.keys(o)[0]);const s=t.id||t.string;if(r===0||!function(u,p,k){return!!k[u]&&!!k[u].dictionary[p]}(i,s,o))return e!==1?t.plural:t.string;const a=o[i].dictionary,c=o[i].getPluralForm||(u=>u===1?0:1),l=a[s];return typeof l=="string"?l:l[Number(c(e))]}B.window.CKEDITOR_TRANSLATIONS||(B.window.CKEDITOR_TRANSLATIONS={});const Wu=["ar","ara","dv","div","fa","per","fas","he","heb","ku","kur","ug","uig"];function Wc(i){return Wu.includes(i)?"rtl":"ltr"}class qu{constructor({uiLanguage:t="en",contentLanguage:e,translations:n}={}){this.uiLanguage=t,this.contentLanguage=e||this.uiLanguage,this.uiLanguageDirection=Wc(this.uiLanguage),this.contentLanguageDirection=Wc(this.contentLanguage),this.translations=function(o){return Array.isArray(o)?o.reduce((r,s)=>Hs(r,s)):o}(n),this.t=(o,r)=>this._t(o,r)}get language(){return console.warn("locale-deprecated-language-property: The Locale#language property has been deprecated and will be removed in the near future. Please use #uiLanguage and #contentLanguage properties instead."),this.uiLanguage}_t(t,e=[]){e=Le(e),typeof t=="string"&&(t={string:t});const n=t.plural?e[0]:1;return function(o,r){return o.replace(/%(\d+)/g,(s,a)=>a<r.length?r[a]:s)}(fo(this.uiLanguage,t,n,this.translations),e)}}class po extends fe(){constructor(t={},e={}){super();const n=Ne(t);if(n||(e=t),this._items=[],this._itemMap=new Map,this._idProperty=e.idProperty||"id",this._bindToExternalToInternalMap=new WeakMap,this._bindToInternalToExternalMap=new WeakMap,this._skippedIndexesFromExternal=[],n)for(const o of t)this._items.push(o),this._itemMap.set(this._getItemIdBeforeAdding(o),o)}get length(){return this._items.length}get first(){return this._items[0]||null}get last(){return this._items[this.length-1]||null}add(t,e){return this.addMany([t],e)}addMany(t,e){if(e===void 0)e=this._items.length;else if(e>this._items.length||e<0)throw new m("collection-add-item-invalid-index",this);let n=0;for(const o of t){const r=this._getItemIdBeforeAdding(o),s=e+n;this._items.splice(s,0,o),this._itemMap.set(r,o),this.fire("add",o,s),n++}return this.fire("change",{added:t,removed:[],index:e}),this}get(t){let e;if(typeof t=="string")e=this._itemMap.get(t);else{if(typeof t!="number")throw new m("collection-get-invalid-arg",this);e=this._items[t]}return e||null}has(t){if(typeof t=="string")return this._itemMap.has(t);{const e=t[this._idProperty];return e&&this._itemMap.has(e)}}getIndex(t){let e;return e=typeof t=="string"?this._itemMap.get(t):t,e?this._items.indexOf(e):-1}remove(t){const[e,n]=this._remove(t);return this.fire("change",{added:[],removed:[e],index:n}),e}map(t,e){return this._items.map(t,e)}forEach(t,e){this._items.forEach(t,e)}find(t,e){return this._items.find(t,e)}filter(t,e){return this._items.filter(t,e)}clear(){this._bindToCollection&&(this.stopListening(this._bindToCollection),this._bindToCollection=null);const t=Array.from(this._items);for(;this.length;)this._remove(0);this.fire("change",{added:[],removed:t,index:0})}bindTo(t){if(this._bindToCollection)throw new m("collection-bind-to-rebind",this);return this._bindToCollection=t,{as:e=>{this._setUpBindToBinding(n=>new e(n))},using:e=>{typeof e=="function"?this._setUpBindToBinding(e):this._setUpBindToBinding(n=>n[e])}}}_setUpBindToBinding(t){const e=this._bindToCollection,n=(o,r,s)=>{const a=e._bindToCollection==this,c=e._bindToInternalToExternalMap.get(r);if(a&&c)this._bindToExternalToInternalMap.set(r,c),this._bindToInternalToExternalMap.set(c,r);else{const l=t(r);if(!l)return void this._skippedIndexesFromExternal.push(s);let u=s;for(const p of this._skippedIndexesFromExternal)s>p&&u--;for(const p of e._skippedIndexesFromExternal)u>=p&&u++;this._bindToExternalToInternalMap.set(r,l),this._bindToInternalToExternalMap.set(l,r),this.add(l,u);for(let p=0;p<e._skippedIndexesFromExternal.length;p++)u<=e._skippedIndexesFromExternal[p]&&e._skippedIndexesFromExternal[p]++}};for(const o of e)n(0,o,e.getIndex(o));this.listenTo(e,"add",n),this.listenTo(e,"remove",(o,r,s)=>{const a=this._bindToExternalToInternalMap.get(r);a&&this.remove(a),this._skippedIndexesFromExternal=this._skippedIndexesFromExternal.reduce((c,l)=>(s<l&&c.push(l-1),s>l&&c.push(l),c),[])})}_getItemIdBeforeAdding(t){const e=this._idProperty;let n;if(e in t){if(n=t[e],typeof n!="string")throw new m("collection-add-invalid-id",this);if(this.get(n))throw new m("collection-add-item-already-exists",this)}else t[e]=n=yt();return n}_remove(t){let e,n,o,r=!1;const s=this._idProperty;if(typeof t=="string"?(n=t,o=this._itemMap.get(n),r=!o,o&&(e=this._items.indexOf(o))):typeof t=="number"?(e=t,o=this._items[e],r=!o,o&&(n=o[s])):(o=t,n=o[s],e=this._items.indexOf(o),r=e==-1||!this._itemMap.get(n)),r)throw new m("collection-remove-404",this);this._items.splice(e,1),this._itemMap.delete(n);const a=this._bindToInternalToExternalMap.get(o);return this._bindToInternalToExternalMap.delete(o),this._bindToExternalToInternalMap.delete(a),this.fire("remove",o,e),[o,e]}[Symbol.iterator](){return this._items[Symbol.iterator]()}}function En(i){const t=i.next();return t.done?null:t.value}class xn extends dt(pe()){constructor(){super(),this._elements=new Set,this._nextEventLoopTimeout=null,this.set("isFocused",!1),this.set("focusedElement",null)}add(t){if(this._elements.has(t))throw new m("focustracker-add-element-already-exist",this);this.listenTo(t,"focus",()=>this._focus(t),{useCapture:!0}),this.listenTo(t,"blur",()=>this._blur(),{useCapture:!0}),this._elements.add(t)}remove(t){t===this.focusedElement&&this._blur(),this._elements.has(t)&&(this.stopListening(t),this._elements.delete(t))}destroy(){this.stopListening()}_focus(t){clearTimeout(this._nextEventLoopTimeout),this.focusedElement=t,this.isFocused=!0}_blur(){clearTimeout(this._nextEventLoopTimeout),this._nextEventLoopTimeout=setTimeout(()=>{this.focusedElement=null,this.isFocused=!1},0)}}class li{constructor(){this._listener=new(dt())}listenTo(t){this._listener.listenTo(t,"keydown",(e,n)=>{this._listener.fire("_keydown:"+Fs(n),n)})}set(t,e,n={}){const o=Rr(t),r=n.priority;this._listener.listenTo(this._listener,"_keydown:"+o,(s,a)=>{e(a,()=>{a.preventDefault(),a.stopPropagation(),s.stop()}),s.return=!0},{priority:r})}press(t){return!!this._listener.fire("_keydown:"+Fs(t),t)}stopListening(t){this._listener.stopListening(t)}destroy(){this.stopListening()}}function qo(i){return Ne(i)?new Map(i):function(t){const e=new Map;for(const n in t)e.set(n,t[n]);return e}(i)}function qc(i,t){let e;function n(...o){n.cancel(),e=setTimeout(()=>i(...o),t)}return n.cancel=()=>{clearTimeout(e)},n}function Gc(i,t){return!!(e=i.charAt(t-1))&&e.length==1&&/[\ud800-\udbff]/.test(e)&&function(n){return!!n&&n.length==1&&/[\udc00-\udfff]/.test(n)}(i.charAt(t));var e}function Us(i,t){return!!(e=i.charAt(t))&&e.length==1&&/[\u0300-\u036f\u1ab0-\u1aff\u1dc0-\u1dff\u20d0-\u20ff\ufe20-\ufe2f]/.test(e);var e}const cs=function(){const i=[new RegExp("\\p{Emoji}[\\u{E0020}-\\u{E007E}]+\\u{E007F}","u"),new RegExp("\\p{Emoji}\\u{FE0F}?\\u{20E3}","u"),new RegExp("\\p{Emoji}\\u{FE0F}","u"),new RegExp("(?=\\p{General_Category=Other_Symbol})\\p{Emoji}\\p{Emoji_Modifier}*","u")],t=new RegExp("\\p{Regional_Indicator}{2}","u").source,e="(?:"+i.map(n=>n.source).join("|")+")";return new RegExp(`${t}|${e}(?:‍${e})*`,"ug")}();function td(i,t){const e=String(i).matchAll(cs);return Array.from(e).some(n=>n.index<t&&t<n.index+n[0].length)}class di extends po{constructor(t=[]){super(t,{idProperty:"viewUid"}),this.on("add",(e,n,o)=>{this._renderViewIntoCollectionParent(n,o)}),this.on("remove",(e,n)=>{n.element&&this._parentElement&&n.element.remove()}),this._parentElement=null}destroy(){this.map(t=>t.destroy())}setParent(t){this._parentElement=t;for(const e of this)this._renderViewIntoCollectionParent(e)}delegate(...t){if(!t.length||!t.every(e=>typeof e=="string"))throw new m("ui-viewcollection-delegate-wrong-events",this);return{to:e=>{for(const n of this)for(const o of t)n.delegate(o).to(e);this.on("add",(n,o)=>{for(const r of t)o.delegate(r).to(e)}),this.on("remove",(n,o)=>{for(const r of t)o.stopDelegating(r,e)})}}}_renderViewIntoCollectionParent(t,e){t.isRendered||t.render(),t.element&&this._parentElement&&this._parentElement.insertBefore(t.element,this._parentElement.children[e])}remove(t){return super.remove(t)}}class Ci extends fe(){constructor(t){super(),Object.assign(this,id(Kc(t))),this._isRendered=!1,this._revertData=null}render(){const t=this._renderNode({intoFragment:!0});return this._isRendered=!0,t}apply(t){return this._revertData={children:[],bindings:[],attributes:{}},this._renderNode({node:t,intoFragment:!1,isApplying:!0,revertData:this._revertData}),t}revert(t){if(!this._revertData)throw new m("ui-template-revert-not-applied",[this,t]);this._revertTemplateFromNode(t,this._revertData)}*getViews(){yield*function*t(e){if(e.children)for(const n of e.children)Ya(n)?yield n:Zc(n)&&(yield*t(n))}(this)}static bind(t,e){return{to:(n,o)=>new Gu({eventNameOrFunction:n,attribute:n,observable:t,emitter:e,callback:o}),if:(n,o,r)=>new ed({observable:t,emitter:e,attribute:n,valueIfTrue:o,callback:r})}}static extend(t,e){if(t._isRendered)throw new m("template-extend-render",[this,t]);Qc(t,id(Kc(e)))}_renderNode(t){let e;if(e=t.node?this.tag&&this.text:this.tag?this.text:!this.text,e)throw new m("ui-template-wrong-syntax",this);return this.text?this._renderText(t):this._renderElement(t)}_renderElement(t){let e=t.node;return e||(e=t.node=document.createElementNS(this.ns||"http://www.w3.org/1999/xhtml",this.tag)),this._renderAttributes(t),this._renderElementChildren(t),this._setUpListeners(t),e}_renderText(t){let e=t.node;return e?t.revertData.text=e.textContent:e=t.node=document.createTextNode(""),Go(this.text)?this._bindToObservable({schema:this.text,updater:Ku(e),data:t}):e.textContent=this.text.join(""),e}_renderAttributes(t){if(!this.attributes)return;const e=t.node,n=t.revertData;for(const o in this.attributes){const r=e.getAttribute(o),s=this.attributes[o];n&&(n.attributes[o]=r);const a=rd(s)?s[0].ns:null;if(Go(s)){const c=rd(s)?s[0].value:s;n&&Ws(o)&&c.unshift(r),this._bindToObservable({schema:c,updater:Yu(e,o,a),data:t})}else if(o=="style"&&typeof s[0]!="string")this._renderStyleAttribute(s[0],t);else{n&&r&&Ws(o)&&s.unshift(r);const c=s.map(l=>l&&l.value||l).reduce((l,u)=>l.concat(u),[]).reduce(Ka,"");$s(c)||e.setAttributeNS(a,o,c)}}}_renderStyleAttribute(t,e){const n=e.node;for(const o in t){const r=t[o];Go(r)?this._bindToObservable({schema:[r],updater:Qu(n,o),data:e}):n.style[o]=r}}_renderElementChildren(t){const e=t.node,n=t.intoFragment?document.createDocumentFragment():e,o=t.isApplying;let r=0;for(const s of this.children)if(Qa(s)){if(!o){s.setParent(e);for(const a of s)n.appendChild(a.element)}}else if(Ya(s))o||(s.isRendered||s.render(),n.appendChild(s.element));else if(qt(s))n.appendChild(s);else if(o){const a={children:[],bindings:[],attributes:{}};t.revertData.children.push(a),s._renderNode({intoFragment:!1,node:n.childNodes[r++],isApplying:!0,revertData:a})}else n.appendChild(s.render());t.intoFragment&&e.appendChild(n)}_setUpListeners(t){if(this.eventListeners)for(const e in this.eventListeners){const n=this.eventListeners[e].map(o=>{const[r,s]=e.split("@");return o.activateDomEventListener(r,s,t)});t.revertData&&t.revertData.bindings.push(n)}}_bindToObservable({schema:t,updater:e,data:n}){const o=n.revertData;nd(t,e,n);const r=t.filter(s=>!$s(s)).filter(s=>s.observable).map(s=>s.activateAttributeListener(t,e,n));o&&o.bindings.push(r)}_revertTemplateFromNode(t,e){for(const o of e.bindings)for(const r of o)r();if(e.text)return void(t.textContent=e.text);const n=t;for(const o in e.attributes){const r=e.attributes[o];r===null?n.removeAttribute(o):n.setAttribute(o,r)}for(let o=0;o<e.children.length;++o)this._revertTemplateFromNode(n.childNodes[o],e.children[o])}}class ga{constructor(t){this.attribute=t.attribute,this.observable=t.observable,this.emitter=t.emitter,this.callback=t.callback}getValue(t){const e=this.observable[this.attribute];return this.callback?this.callback(e,t):e}activateAttributeListener(t,e,n){const o=()=>nd(t,e,n);return this.emitter.listenTo(this.observable,`change:${this.attribute}`,o),()=>{this.emitter.stopListening(this.observable,`change:${this.attribute}`,o)}}}class Gu extends ga{constructor(t){super(t),this.eventNameOrFunction=t.eventNameOrFunction}activateDomEventListener(t,e,n){const o=(r,s)=>{e&&!s.target.matches(e)||(typeof this.eventNameOrFunction=="function"?this.eventNameOrFunction(s):this.observable.fire(this.eventNameOrFunction,s))};return this.emitter.listenTo(n.node,t,o),()=>{this.emitter.stopListening(n.node,t,o)}}}class ed extends ga{constructor(t){super(t),this.valueIfTrue=t.valueIfTrue}getValue(t){return!$s(super.getValue(t))&&(this.valueIfTrue||!0)}}function Go(i){return!!i&&(i.value&&(i=i.value),Array.isArray(i)?i.some(Go):i instanceof ga)}function nd(i,t,{node:e}){const n=function(r,s){return r.map(a=>a instanceof ga?a.getValue(s):a)}(i,e);let o;o=i.length==1&&i[0]instanceof ed?n[0]:n.reduce(Ka,""),$s(o)?t.remove():t.set(o)}function Ku(i){return{set(t){i.textContent=t},remove(){i.textContent=""}}}function Yu(i,t,e){return{set(n){i.setAttributeNS(e,t,n)},remove(){i.removeAttributeNS(e,t)}}}function Qu(i,t){return{set(e){i.style[t]=e},remove(){i.style[t]=null}}}function Kc(i){return $t(i,t=>{if(t&&(t instanceof ga||Zc(t)||Ya(t)||Qa(t)))return t})}function id(i){if(typeof i=="string"?i=function(t){return{text:[t]}}(i):i.text&&function(t){t.text=Le(t.text)}(i),i.on&&(i.eventListeners=function(t){for(const e in t)Yc(t,e);return t}(i.on),delete i.on),!i.text){i.attributes&&function(e){for(const n in e)e[n].value&&(e[n].value=Le(e[n].value)),Yc(e,n)}(i.attributes);const t=[];if(i.children)if(Qa(i.children))t.push(i.children);else for(const e of i.children)Zc(e)||Ya(e)||qt(e)?t.push(e):t.push(new Ci(e));i.children=t}return i}function Yc(i,t){i[t]=Le(i[t])}function Ka(i,t){return $s(t)?i:$s(i)?t:`${i} ${t}`}function od(i,t){for(const e in t)i[e]?i[e].push(...t[e]):i[e]=t[e]}function Qc(i,t){if(t.attributes&&(i.attributes||(i.attributes={}),od(i.attributes,t.attributes)),t.eventListeners&&(i.eventListeners||(i.eventListeners={}),od(i.eventListeners,t.eventListeners)),t.text&&i.text.push(...t.text),t.children&&t.children.length){if(i.children.length!=t.children.length)throw new m("ui-template-extend-children-mismatch",i);let e=0;for(const n of t.children)Qc(i.children[e++],n)}}function $s(i){return!i&&i!==0}function Ya(i){return i instanceof Yt}function Zc(i){return i instanceof Ci}function Qa(i){return i instanceof di}function rd(i){return be(i[0])&&i[0].ns}function Ws(i){return i=="class"||i=="style"}var ma=V(2591),Lt=V.n(ma),ka=V(7676),ba={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Lt()(ka.A,ba),ka.A.locals;class Yt extends dt(pe()){constructor(t){super(),this.element=null,this.isRendered=!1,this.locale=t,this.t=t&&t.t,this._viewCollections=new po,this._unboundChildren=this.createCollection(),this._viewCollections.on("add",(e,n)=>{n.locale=t,n.t=t&&t.t}),this.decorate("render")}get bindTemplate(){return this._bindTemplate?this._bindTemplate:this._bindTemplate=Ci.bind(this,this)}createCollection(t){const e=new di(t);return this._viewCollections.add(e),e}registerChild(t){Ne(t)||(t=[t]);for(const e of t)this._unboundChildren.add(e)}deregisterChild(t){Ne(t)||(t=[t]);for(const e of t)this._unboundChildren.remove(e)}setTemplate(t){this.template=new Ci(t)}extendTemplate(t){Ci.extend(this.template,t)}render(){if(this.isRendered)throw new m("ui-view-render-already-rendered",this);this.template&&(this.element=this.template.render(),this.registerChild(this.template.getViews())),this.isRendered=!0}destroy(){this.stopListening(),this._viewCollections.map(t=>t.destroy()),this.template&&this.template._revertData&&this.template.revert(this.element)}}function Za({emitter:i,activator:t,callback:e,contextElements:n}){i.listenTo(document,"mousedown",(o,r)=>{if(!t())return;const s=typeof r.composedPath=="function"?r.composedPath():[],a=typeof n=="function"?n():n;for(const c of a)if(c.contains(r.target)||s.includes(c))return;e()})}function Jc(i){return class extends i{disableCssTransitions(){this._isCssTransitionsDisabled=!0}enableCssTransitions(){this._isCssTransitionsDisabled=!1}constructor(...t){super(...t),this.set("_isCssTransitionsDisabled",!1),this.initializeCssTransitionDisablerMixin()}initializeCssTransitionDisablerMixin(){this.extendTemplate({attributes:{class:[this.bindTemplate.if("_isCssTransitionsDisabled","ck-transitions-disabled")]}})}}}function jr({view:i}){i.listenTo(i.element,"submit",(t,e)=>{e.preventDefault(),i.fire("submit")},{useCapture:!0})}function Zu({keystrokeHandler:i,focusTracker:t,gridItems:e,numberOfColumns:n,uiLanguageDirection:o}){const r=typeof n=="number"?()=>n:n;function s(l){return u=>{const p=e.find(y=>y.element===t.focusedElement),k=e.getIndex(p),v=l(k,e);e.get(v).focus(),u.stopPropagation(),u.preventDefault()}}function a(l,u){return l===u-1?0:l+1}function c(l,u){return l===0?u-1:l-1}i.set("arrowright",s((l,u)=>o==="rtl"?c(l,u.length):a(l,u.length))),i.set("arrowleft",s((l,u)=>o==="rtl"?a(l,u.length):c(l,u.length))),i.set("arrowup",s((l,u)=>{let p=l-r();return p<0&&(p=l+r()*Math.floor(u.length/r()),p>u.length-1&&(p-=r())),p})),i.set("arrowdown",s((l,u)=>{let p=l+r();return p>u.length-1&&(p=l%r()),p}))}class Tt extends pe(){constructor(t){super(),this._disableStack=new Set,this.editor=t,this.set("isEnabled",!0)}forceDisabled(t){this._disableStack.add(t),this._disableStack.size==1&&(this.on("set:isEnabled",Xc,{priority:"highest"}),this.isEnabled=!1)}clearForceDisabled(t){this._disableStack.delete(t),this._disableStack.size==0&&(this.off("set:isEnabled",Xc),this.isEnabled=!0)}destroy(){this.stopListening()}static get isContextPlugin(){return!1}}function Xc(i){i.return=!1,i.stop()}class _e extends pe(){constructor(t){super(),this.editor=t,this.set("value",void 0),this.set("isEnabled",!1),this._affectsData=!0,this._isEnabledBasedOnSelection=!0,this._disableStack=new Set,this.decorate("execute"),this.listenTo(this.editor.model.document,"change",()=>{this.refresh()}),this.listenTo(t,"change:isReadOnly",()=>{this.refresh()}),this.on("set:isEnabled",e=>{if(!this.affectsData)return;const n=t.model.document.selection,o=n.getFirstPosition().root.rootName!="$graveyard"&&t.model.canEditAt(n);(t.isReadOnly||this._isEnabledBasedOnSelection&&!o)&&(e.return=!1,e.stop())},{priority:"highest"}),this.on("execute",e=>{this.isEnabled||e.stop()},{priority:"high"})}get affectsData(){return this._affectsData}set affectsData(t){this._affectsData=t}refresh(){this.isEnabled=!0}forceDisabled(t){this._disableStack.add(t),this._disableStack.size==1&&(this.on("set:isEnabled",sd,{priority:"highest"}),this.isEnabled=!1)}clearForceDisabled(t){this._disableStack.delete(t),this._disableStack.size==0&&(this.off("set:isEnabled",sd),this.refresh())}execute(...t){}destroy(){this.stopListening()}}function sd(i){i.return=!1,i.stop()}class ad extends _e{constructor(){super(...arguments),this._childCommandsDefinitions=[]}refresh(){}execute(...t){const e=this._getFirstEnabledCommand();return!!e&&e.execute(t)}registerChildCommand(t,e={}){Ht(this._childCommandsDefinitions,{command:t,priority:e.priority||"normal"}),t.on("change:isEnabled",()=>this._checkEnabled()),this._checkEnabled()}_checkEnabled(){this.isEnabled=!!this._getFirstEnabledCommand()}_getFirstEnabledCommand(){const t=this._childCommandsDefinitions.find(({command:e})=>e.isEnabled);return t&&t.command}}class cd extends fe(){constructor(t,e=[],n=[]){super(),this._plugins=new Map,this._context=t,this._availablePlugins=new Map;for(const o of e)o.pluginName&&this._availablePlugins.set(o.pluginName,o);this._contextPlugins=new Map;for(const[o,r]of n)this._contextPlugins.set(o,r),this._contextPlugins.set(r,o),o.pluginName&&this._availablePlugins.set(o.pluginName,o)}*[Symbol.iterator](){for(const t of this._plugins)typeof t[0]=="function"&&(yield t)}get(t){const e=this._plugins.get(t);if(!e){let n=t;throw typeof t=="function"&&(n=t.pluginName||t.name),new m("plugincollection-plugin-not-loaded",this._context,{plugin:n})}return e}has(t){return this._plugins.has(t)}init(t,e=[],n=[]){const o=this,r=this._context;(function y(I,F=new Set){I.forEach(G=>{c(G)&&(F.has(G)||(F.add(G),G.pluginName&&!o._availablePlugins.has(G.pluginName)&&o._availablePlugins.set(G.pluginName,G),G.requires&&y(G.requires,F)))})})(t),k(t);const s=[...function y(I,F=new Set){return I.map(G=>c(G)?G:o._availablePlugins.get(G)).reduce((G,et)=>F.has(et)?G:(F.add(et),et.requires&&(k(et.requires,et),y(et.requires,F).forEach(ut=>G.add(ut))),G.add(et)),new Set)}(t.filter(y=>!u(y,e)))];(function(y,I){for(const F of I){if(typeof F!="function")throw new m("plugincollection-replace-plugin-invalid-type",null,{pluginItem:F});const G=F.pluginName;if(!G)throw new m("plugincollection-replace-plugin-missing-name",null,{pluginItem:F});if(F.requires&&F.requires.length)throw new m("plugincollection-plugin-for-replacing-cannot-have-dependencies",null,{pluginName:G});const et=o._availablePlugins.get(G);if(!et)throw new m("plugincollection-plugin-for-replacing-not-exist",null,{pluginName:G});const ut=y.indexOf(et);if(ut===-1){if(o._contextPlugins.has(et))return;throw new m("plugincollection-plugin-for-replacing-not-loaded",null,{pluginName:G})}if(et.requires&&et.requires.length)throw new m("plugincollection-replaced-plugin-cannot-have-dependencies",null,{pluginName:G});y.splice(ut,1,F),o._availablePlugins.set(G,F)}})(s,n);const a=s.map(y=>{let I=o._contextPlugins.get(y);return I=I||new y(r),o._add(y,I),I});return v(a,"init").then(()=>v(a,"afterInit")).then(()=>a);function c(y){return typeof y=="function"}function l(y){return c(y)&&!!y.isContextPlugin}function u(y,I){return I.some(F=>F===y||p(y)===F||p(F)===y)}function p(y){return c(y)?y.pluginName||y.name:y}function k(y,I=null){y.map(F=>c(F)?F:o._availablePlugins.get(F)||F).forEach(F=>{(function(G,et){if(!c(G))throw et?new m("plugincollection-soft-required",r,{missingPlugin:G,requiredBy:p(et)}):new m("plugincollection-plugin-not-found",r,{plugin:G})})(F,I),function(G,et){if(l(et)&&!l(G))throw new m("plugincollection-context-required",r,{plugin:p(G),requiredBy:p(et)})}(F,I),function(G,et){if(et&&u(G,e))throw new m("plugincollection-required",r,{plugin:p(G),requiredBy:p(et)})}(F,I)})}function v(y,I){return y.reduce((F,G)=>G[I]?o._contextPlugins.has(G)?F:F.then(G[I].bind(G)):F,Promise.resolve())}}destroy(){const t=[];for(const[,e]of this)typeof e.destroy!="function"||this._contextPlugins.has(e)||t.push(e.destroy());return Promise.all(t)}_add(t,e){this._plugins.set(t,e);const n=t.pluginName;if(n){if(this._plugins.has(n))throw new m("plugincollection-plugin-name-conflict",null,{pluginName:n,plugin1:this._plugins.get(n).constructor,plugin2:t});this._plugins.set(n,e)}}}var ld=Object.getOwnPropertySymbols,Ju=Object.prototype.hasOwnProperty,Xu=Object.prototype.propertyIsEnumerable;class tl{constructor(t){this._contextOwner=null;const e=t||{},{translations:n}=e,o=((a,c)=>{var l={};for(var u in a)Ju.call(a,u)&&c.indexOf(u)<0&&(l[u]=a[u]);if(a!=null&&ld)for(var u of ld(a))c.indexOf(u)<0&&Xu.call(a,u)&&(l[u]=a[u]);return l})(e,["translations"]);this.config=new de(o,this.constructor.defaultConfig);const r=this.constructor.builtinPlugins;this.config.define("plugins",r),this.plugins=new cd(this,r);const s=this.config.get("language")||{};this.locale=new qu({uiLanguage:typeof s=="string"?s:s.ui,contentLanguage:this.config.get("language.content"),translations:n}),this.t=this.locale.t,this.editors=new po}initPlugins(){const t=this.config.get("plugins")||[],e=this.config.get("substitutePlugins")||[];for(const n of t.concat(e)){if(typeof n!="function")throw new m("context-initplugins-constructor-only",null,{Plugin:n});if(n.isContextPlugin!==!0)throw new m("context-initplugins-invalid-plugin",null,{Plugin:n})}return this.plugins.init(t,[],e)}destroy(){return Promise.all(Array.from(this.editors,t=>t.destroy())).then(()=>this.plugins.destroy())}_addEditor(t,e){if(this._contextOwner)throw new m("context-addeditor-private-context");this.editors.add(t),e&&(this._contextOwner=t)}_removeEditor(t){return this.editors.has(t)&&this.editors.remove(t),this._contextOwner===t?this.destroy():Promise.resolve()}_getEditorConfig(){const t={};for(const e of this.config.names())["plugins","removePlugins","extraPlugins"].includes(e)||(t[e]=this.config.get(e));return t}static create(t){return new Promise(e=>{const n=new this(t);e(n.initPlugins().then(()=>n))})}}class _a extends pe(){constructor(t){super(),this.context=t}destroy(){this.stopListening()}static get isContextPlugin(){return!0}}class th extends li{constructor(t){super(),this.editor=t}set(t,e,n={}){if(typeof e=="string"){const o=e;e=(r,s)=>{this.editor.execute(o),s()}}super.set(t,e,n)}}var dd=V(4098),eh={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Lt()(dd.A,eh),dd.A.locals;const Fr=new WeakMap;let ls=!1;function ud({view:i,element:t,text:e,isDirectHost:n=!0,keepOnFocus:o=!1}){const r=i.document;function s(a){Fr.get(r).set(t,{text:a,isDirectHost:n,keepOnFocus:o,hostElement:n?t:null}),i.change(c=>el(r,c))}Fr.has(r)||(Fr.set(r,new Map),r.registerPostFixer(a=>el(r,a)),r.on("change:isComposing",()=>{i.change(a=>el(r,a))},{priority:"high"})),t.is("editableElement")&&t.on("change:placeholder",(a,c,l)=>{s(l)}),t.placeholder?s(t.placeholder):e&&s(e),e&&function(){ls||It("enableplaceholder-deprecated-text-option"),ls=!0}()}function Ja(i,t){return!t.hasClass("ck-placeholder")&&(i.addClass("ck-placeholder",t),!0)}function wa(i,t){return!!t.hasClass("ck-placeholder")&&(i.removeClass("ck-placeholder",t),!0)}function nh(i,t){if(!i.isAttached()||Array.from(i.getChildren()).some(o=>!o.is("uiElement")))return!1;const e=i.document,n=e.selection.anchor;return(!e.isComposing||!n||n.parent!==i)&&(!!t||!e.isFocused||!!n&&n.parent!==i)}function el(i,t){const e=Fr.get(i),n=[];let o=!1;for(const[r,s]of e)s.isDirectHost&&(n.push(r),nl(t,r,s)&&(o=!0));for(const[r,s]of e){if(s.isDirectHost)continue;const a=Aa(r);a&&(n.includes(a)||(s.hostElement=a,nl(t,r,s)&&(o=!0)))}return o}function nl(i,t,e){const{text:n,isDirectHost:o,hostElement:r}=e;let s=!1;return r.getAttribute("data-placeholder")!==n&&(i.setAttribute("data-placeholder",n,r),s=!0),(o||t.childCount==1)&&nh(r,e.keepOnFocus)?Ja(i,r)&&(s=!0):wa(i,r)&&(s=!0),s}function Aa(i){if(i.childCount){const t=i.getChild(0);if(t.is("element")&&!t.is("uiElement")&&!t.is("attributeElement"))return t}return null}class Vr{is(){throw new Error("is() method is abstract")}}const il=function(i){return jt(i,4)};class ds extends fe(Vr){constructor(t){super(),this.document=t,this.parent=null}get index(){let t;if(!this.parent)return null;if((t=this.parent.getChildIndex(this))==-1)throw new m("view-node-not-found-in-parent",this);return t}get nextSibling(){const t=this.index;return t!==null&&this.parent.getChild(t+1)||null}get previousSibling(){const t=this.index;return t!==null&&this.parent.getChild(t-1)||null}get root(){let t=this;for(;t.parent;)t=t.parent;return t}isAttached(){return this.root.is("rootElement")}getPath(){const t=[];let e=this;for(;e.parent;)t.unshift(e.index),e=e.parent;return t}getAncestors(t={}){const e=[];let n=t.includeSelf?this:this.parent;for(;n;)e[t.parentFirst?"push":"unshift"](n),n=n.parent;return e}getCommonAncestor(t,e={}){const n=this.getAncestors(e),o=t.getAncestors(e);let r=0;for(;n[r]==o[r]&&n[r];)r++;return r===0?null:n[r-1]}isBefore(t){if(this==t||this.root!==t.root)return!1;const e=this.getPath(),n=t.getPath(),o=Ue(e,n);switch(o){case"prefix":return!0;case"extension":return!1;default:return e[o]<n[o]}}isAfter(t){return this!=t&&this.root===t.root&&!this.isBefore(t)}_remove(){this.parent._removeChildren(this.index)}_fireChange(t,e){this.fire(`change:${t}`,e),this.parent&&this.parent._fireChange(t,e)}toJSON(){const t=il(this);return delete t.parent,t}}ds.prototype.is=function(i){return i==="node"||i==="view:node"};class Pe extends ds{constructor(t,e){super(t),this._textData=e}get data(){return this._textData}get _data(){return this.data}set _data(t){this._fireChange("text",this),this._textData=t}isSimilar(t){return t instanceof Pe&&(this===t||this.data===t.data)}_clone(){return new Pe(this.document,this.data)}}Pe.prototype.is=function(i){return i==="$text"||i==="view:$text"||i==="text"||i==="view:text"||i==="node"||i==="view:node"};class Ko extends Vr{constructor(t,e,n){if(super(),this.textNode=t,e<0||e>t.data.length)throw new m("view-textproxy-wrong-offsetintext",this);if(n<0||e+n>t.data.length)throw new m("view-textproxy-wrong-length",this);this.data=t.data.substring(e,e+n),this.offsetInText=e}get offsetSize(){return this.data.length}get isPartial(){return this.data.length!==this.textNode.data.length}get parent(){return this.textNode.parent}get root(){return this.textNode.root}get document(){return this.textNode.document}getAncestors(t={}){const e=[];let n=t.includeSelf?this.textNode:this.parent;for(;n!==null;)e[t.parentFirst?"push":"unshift"](n),n=n.parent;return e}}Ko.prototype.is=function(i){return i==="$textProxy"||i==="view:$textProxy"||i==="textProxy"||i==="view:textProxy"};class Yo{constructor(...t){this._patterns=[],this.add(...t)}add(...t){for(let e of t)(typeof e=="string"||e instanceof RegExp)&&(e={name:e}),this._patterns.push(e)}match(...t){for(const e of t)for(const n of this._patterns){const o=hd(e,n);if(o)return{element:e,pattern:n,match:o}}return null}matchAll(...t){const e=[];for(const n of t)for(const o of this._patterns){const r=hd(n,o);r&&e.push({element:n,pattern:o,match:r})}return e.length>0?e:null}getElementName(){if(this._patterns.length!==1)return null;const t=this._patterns[0],e=t.name;return typeof t=="function"||!e||e instanceof RegExp?null:e}}function hd(i,t){if(typeof t=="function")return t(i);const e={};return t.name&&(e.name=function(n,o){return n instanceof RegExp?!!o.match(n):n===o}(t.name,i.name),!e.name)||t.attributes&&(e.attributes=function(n,o){const r=new Set(o.getAttributeKeys());return mn(n)?(n.style!==void 0&&It("matcher-pattern-deprecated-attributes-style-key",n),n.class!==void 0&&It("matcher-pattern-deprecated-attributes-class-key",n)):(r.delete("style"),r.delete("class")),Xa(n,r,s=>o.getAttribute(s))}(t.attributes,i),!e.attributes)||t.classes&&(e.classes=function(n,o){return Xa(n,o.getClassNames(),()=>{})}(t.classes,i),!e.classes)||t.styles&&(e.styles=function(n,o){return Xa(n,o.getStyleNames(!0),r=>o.getStyle(r))}(t.styles,i),!e.styles)?null:e}function Xa(i,t,e){const n=function(s){return Array.isArray(s)?s.map(a=>mn(a)?(a.key!==void 0&&a.value!==void 0||It("matcher-pattern-missing-key-or-value",a),[a.key,a.value]):[a,!0]):mn(s)?Object.entries(s):[[s,!0]]}(i),o=Array.from(t),r=[];if(n.forEach(([s,a])=>{o.forEach(c=>{(function(l,u){return l===!0||l===u||l instanceof RegExp&&u.match(l)})(s,c)&&function(l,u,p){if(l===!0)return!0;const k=p(u);return l===k||l instanceof RegExp&&!!String(k).match(l)}(a,c,e)&&r.push(c)})}),n.length&&!(r.length<n.length))return r}const tc=function(i){return typeof i=="symbol"||pn(i)&&an(i)=="[object Symbol]"};var ec=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,T=/^\w*$/;const N=function(i,t){if(cn(i))return!1;var e=typeof i;return!(e!="number"&&e!="symbol"&&e!="boolean"&&i!=null&&!tc(i))||T.test(i)||!ec.test(i)||t!=null&&i in Object(t)};function O(i,t){if(typeof i!="function"||t!=null&&typeof t!="function")throw new TypeError("Expected a function");var e=function(){var n=arguments,o=t?t.apply(this,n):n[0],r=e.cache;if(r.has(o))return r.get(o);var s=i.apply(this,n);return e.cache=r.set(o,s)||r,s};return e.cache=new(O.Cache||On),e}O.Cache=On;const b=O,D=function(i){var t=b(i,function(n){return e.size===500&&e.clear(),n}),e=t.cache;return t};var j=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,J=/\\(\\)?/g,nt=D(function(i){var t=[];return i.charCodeAt(0)===46&&t.push(""),i.replace(j,function(e,n,o,r){t.push(o?r.replace(J,"$1"):n||e)}),t});const lt=nt,Dt=function(i,t){for(var e=-1,n=i==null?0:i.length,o=Array(n);++e<n;)o[e]=t(i[e],e,i);return o};var Pt=Ie?Ie.prototype:void 0,Nt=Pt?Pt.toString:void 0;const Wt=function i(t){if(typeof t=="string")return t;if(cn(t))return Dt(t,i)+"";if(tc(t))return Nt?Nt.call(t):"";var e=t+"";return e=="0"&&1/t==-1/0?"-0":e},Qt=function(i){return i==null?"":Wt(i)},Zt=function(i,t){return cn(i)?i:N(i,t)?[i]:lt(Qt(i))},Oe=function(i){var t=i==null?0:i.length;return t?i[t-1]:void 0},Tn=function(i){if(typeof i=="string"||tc(i))return i;var t=i+"";return t=="0"&&1/i==-1/0?"-0":t},Yi=function(i,t){for(var e=0,n=(t=Zt(t,i)).length;i!=null&&e<n;)i=i[Tn(t[e++])];return e&&e==n?i:void 0},Kn=function(i,t,e){var n=-1,o=i.length;t<0&&(t=-t>o?0:o+t),(e=e>o?o:e)<0&&(e+=o),o=t>e?0:e-t>>>0,t>>>=0;for(var r=Array(o);++n<o;)r[n]=i[n+t];return r},us=function(i,t){return t.length<2?i:Yi(i,Kn(t,0,-1))},ih=function(i,t){return t=Zt(t,i),(i=us(i,t))==null||delete i[Tn(Oe(t))]},fd=function(i,t){return i==null||ih(i,t)},ol=function(i,t,e){var n=i==null?void 0:Yi(i,t);return n===void 0?e:n},b0=function(i,t,e,n){if(!be(i))return i;for(var o=-1,r=(t=Zt(t,i)).length,s=r-1,a=i;a!=null&&++o<r;){var c=Tn(t[o]),l=e;if(c==="__proto__"||c==="constructor"||c==="prototype")return i;if(o!=s){var u=a[c];(l=n?n(u,c,a):void 0)===void 0&&(l=be(u)?u:Ni(t[o+1])?[]:{})}Si(a,c,l),a=a[c]}return i},_0=function(i,t,e){return i==null?i:b0(i,t,e)};class oh{constructor(t){this._styles={},this._styleProcessor=t}get isEmpty(){return!Object.entries(this._styles).length}get size(){return this.isEmpty?0:this.getStyleNames().length}setTo(t){this.clear();const e=function(n){let o=null,r=0,s=0,a=null;const c=new Map;if(n==="")return c;n.charAt(n.length-1)!=";"&&(n+=";");for(let l=0;l<n.length;l++){const u=n.charAt(l);if(o===null)switch(u){case":":a||(a=n.substr(r,l-r),s=l+1);break;case'"':case"'":o=u;break;case";":{const p=n.substr(s,l-s);a&&c.set(a.trim(),p.trim()),a=null,r=l+1;break}}else u===o&&(o=null)}return c}(t);for(const[n,o]of e)this._styleProcessor.toNormalizedForm(n,o,this._styles)}has(t){if(this.isEmpty)return!1;const e=this._styleProcessor.getReducedForm(t,this._styles).find(([n])=>n===t);return Array.isArray(e)}set(t,e){if(be(t))for(const[n,o]of Object.entries(t))this._styleProcessor.toNormalizedForm(n,o,this._styles);else this._styleProcessor.toNormalizedForm(t,e,this._styles)}remove(t){const e=rh(t);fd(this._styles,e),delete this._styles[t],this._cleanEmptyObjectsOnPath(e)}getNormalized(t){return this._styleProcessor.getNormalized(t,this._styles)}toString(){return this.isEmpty?"":this.getStylesEntries().map(t=>t.join(":")).sort().join(";")+";"}getAsString(t){if(this.isEmpty)return;if(this._styles[t]&&!be(this._styles[t]))return this._styles[t];const e=this._styleProcessor.getReducedForm(t,this._styles).find(([n])=>n===t);return Array.isArray(e)?e[1]:void 0}getStyleNames(t=!1){return this.isEmpty?[]:t?this._styleProcessor.getStyleNames(this._styles):this.getStylesEntries().map(([e])=>e)}clear(){this._styles={}}getStylesEntries(){const t=[],e=Object.keys(this._styles);for(const n of e)t.push(...this._styleProcessor.getReducedForm(n,this._styles));return t}_cleanEmptyObjectsOnPath(t){const e=t.split(".");if(!(e.length>1))return;const n=e.splice(0,e.length-1).join("."),o=ol(this._styles,n);o&&!Object.keys(o).length&&this.remove(n)}}class w0{constructor(){this._normalizers=new Map,this._extractors=new Map,this._reducers=new Map,this._consumables=new Map}toNormalizedForm(t,e,n){if(be(e))sh(n,rh(t),e);else if(this._normalizers.has(t)){const o=this._normalizers.get(t),{path:r,value:s}=o(e);sh(n,r,s)}else sh(n,t,e)}getNormalized(t,e){if(!t)return Hs({},e);if(e[t]!==void 0)return e[t];if(this._extractors.has(t)){const n=this._extractors.get(t);if(typeof n=="string")return ol(e,n);const o=n(t,e);if(o)return o}return ol(e,rh(t))}getReducedForm(t,e){const n=this.getNormalized(t,e);return n===void 0?[]:this._reducers.has(t)?this._reducers.get(t)(n):[[t,n]]}getStyleNames(t){const e=Array.from(this._consumables.keys()).filter(o=>{const r=this.getNormalized(o,t);return r&&typeof r=="object"?Object.keys(r).length:r}),n=new Set([...e,...Object.keys(t)]);return Array.from(n)}getRelatedStyles(t){return this._consumables.get(t)||[]}setNormalizer(t,e){this._normalizers.set(t,e)}setExtractor(t,e){this._extractors.set(t,e)}setReducer(t,e){this._reducers.set(t,e)}setStyleRelation(t,e){this._mapStyleNames(t,e);for(const n of e)this._mapStyleNames(n,[t])}_mapStyleNames(t,e){this._consumables.has(t)||this._consumables.set(t,[]),this._consumables.get(t).push(...e)}}function rh(i){return i.replace("-",".")}function sh(i,t,e){let n=e;be(e)&&(n=Hs({},ol(i,t),e)),_0(i,t,n)}class go extends ds{constructor(t,e,n,o){if(super(t),this._unsafeAttributesToRender=[],this._customProperties=new Map,this.name=e,this._attrs=function(r){const s=qo(r);for(const[a,c]of s)c===null?s.delete(a):typeof c!="string"&&s.set(a,String(c));return s}(n),this._children=[],o&&this._insertChild(0,o),this._classes=new Set,this._attrs.has("class")){const r=this._attrs.get("class");yp(this._classes,r),this._attrs.delete("class")}this._styles=new oh(this.document.stylesProcessor),this._attrs.has("style")&&(this._styles.setTo(this._attrs.get("style")),this._attrs.delete("style"))}get childCount(){return this._children.length}get isEmpty(){return this._children.length===0}getChild(t){return this._children[t]}getChildIndex(t){return this._children.indexOf(t)}getChildren(){return this._children[Symbol.iterator]()}*getAttributeKeys(){this._classes.size>0&&(yield"class"),this._styles.isEmpty||(yield"style"),yield*this._attrs.keys()}*getAttributes(){yield*this._attrs.entries(),this._classes.size>0&&(yield["class",this.getAttribute("class")]),this._styles.isEmpty||(yield["style",this.getAttribute("style")])}getAttribute(t){if(t=="class")return this._classes.size>0?[...this._classes].join(" "):void 0;if(t=="style"){const e=this._styles.toString();return e==""?void 0:e}return this._attrs.get(t)}hasAttribute(t){return t=="class"?this._classes.size>0:t=="style"?!this._styles.isEmpty:this._attrs.has(t)}isSimilar(t){if(!(t instanceof go))return!1;if(this===t)return!0;if(this.name!=t.name||this._attrs.size!==t._attrs.size||this._classes.size!==t._classes.size||this._styles.size!==t._styles.size)return!1;for(const[e,n]of this._attrs)if(!t._attrs.has(e)||t._attrs.get(e)!==n)return!1;for(const e of this._classes)if(!t._classes.has(e))return!1;for(const e of this._styles.getStyleNames())if(!t._styles.has(e)||t._styles.getAsString(e)!==this._styles.getAsString(e))return!1;return!0}hasClass(...t){for(const e of t)if(!this._classes.has(e))return!1;return!0}getClassNames(){return this._classes.keys()}getStyle(t){return this._styles.getAsString(t)}getNormalizedStyle(t){return this._styles.getNormalized(t)}getStyleNames(t){return this._styles.getStyleNames(t)}hasStyle(...t){for(const e of t)if(!this._styles.has(e))return!1;return!0}findAncestor(...t){const e=new Yo(...t);let n=this.parent;for(;n&&!n.is("documentFragment");){if(e.match(n))return n;n=n.parent}return null}getCustomProperty(t){return this._customProperties.get(t)}*getCustomProperties(){yield*this._customProperties.entries()}getIdentity(){const t=Array.from(this._classes).sort().join(","),e=this._styles.toString(),n=Array.from(this._attrs).map(o=>`${o[0]}="${o[1]}"`).sort().join(" ");return this.name+(t==""?"":` class="${t}"`)+(e?` style="${e}"`:"")+(n==""?"":` ${n}`)}shouldRenderUnsafeAttribute(t){return this._unsafeAttributesToRender.includes(t)}_clone(t=!1){const e=[];if(t)for(const o of this.getChildren())e.push(o._clone(t));const n=new this.constructor(this.document,this.name,this._attrs,e);return n._classes=new Set(this._classes),n._styles.set(this._styles.getNormalized()),n._customProperties=new Map(this._customProperties),n.getFillerOffset=this.getFillerOffset,n._unsafeAttributesToRender=this._unsafeAttributesToRender,n}_appendChild(t){return this._insertChild(this.childCount,t)}_insertChild(t,e){this._fireChange("children",this);let n=0;const o=function(r,s){return typeof s=="string"?[new Pe(r,s)]:(Ne(s)||(s=[s]),Array.from(s).map(a=>typeof a=="string"?new Pe(r,a):a instanceof Ko?new Pe(r,a.data):a))}(this.document,e);for(const r of o)r.parent!==null&&r._remove(),r.parent=this,r.document=this.document,this._children.splice(t,0,r),t++,n++;return n}_removeChildren(t,e=1){this._fireChange("children",this);for(let n=t;n<t+e;n++)this._children[n].parent=null;return this._children.splice(t,e)}_setAttribute(t,e){const n=String(e);this._fireChange("attributes",this),t=="class"?yp(this._classes,n):t=="style"?this._styles.setTo(n):this._attrs.set(t,n)}_removeAttribute(t){return this._fireChange("attributes",this),t=="class"?this._classes.size>0&&(this._classes.clear(),!0):t=="style"?!this._styles.isEmpty&&(this._styles.clear(),!0):this._attrs.delete(t)}_addClass(t){this._fireChange("attributes",this);for(const e of Le(t))this._classes.add(e)}_removeClass(t){this._fireChange("attributes",this);for(const e of Le(t))this._classes.delete(e)}_setStyle(t,e){this._fireChange("attributes",this),typeof t!="string"?this._styles.set(t):this._styles.set(t,e)}_removeStyle(t){this._fireChange("attributes",this);for(const e of Le(t))this._styles.remove(e)}_setCustomProperty(t,e){this._customProperties.set(t,e)}_removeCustomProperty(t){return this._customProperties.delete(t)}}function yp(i,t){const e=t.split(/\s+/);i.clear(),e.forEach(n=>i.add(n))}go.prototype.is=function(i,t){return t?t===this.name&&(i==="element"||i==="view:element"):i==="element"||i==="view:element"||i==="node"||i==="view:node"};class rl extends go{constructor(t,e,n,o){super(t,e,n,o),this.getFillerOffset=A0}}function A0(){const i=[...this.getChildren()],t=i[this.childCount-1];if(t&&t.is("element","br"))return this.childCount;for(const e of i)if(!e.is("uiElement"))return null;return this.childCount}rl.prototype.is=function(i,t){return t?t===this.name&&(i==="containerElement"||i==="view:containerElement"||i==="element"||i==="view:element"):i==="containerElement"||i==="view:containerElement"||i==="element"||i==="view:element"||i==="node"||i==="view:node"};class pd extends pe(rl){constructor(t,e,n,o){super(t,e,n,o),this.set("isReadOnly",!1),this.set("isFocused",!1),this.set("placeholder",void 0),this.bind("isReadOnly").to(t),this.bind("isFocused").to(t,"isFocused",r=>r&&t.selection.editableElement==this),this.listenTo(t.selection,"change",()=>{this.isFocused=t.isFocused&&t.selection.editableElement==this})}destroy(){this.stopListening()}}pd.prototype.is=function(i,t){return t?t===this.name&&(i==="editableElement"||i==="view:editableElement"||i==="containerElement"||i==="view:containerElement"||i==="element"||i==="view:element"):i==="editableElement"||i==="view:editableElement"||i==="containerElement"||i==="view:containerElement"||i==="element"||i==="view:element"||i==="node"||i==="view:node"};const Ep=Symbol("rootName");class xp extends pd{constructor(t,e){super(t,e),this.rootName="main"}get rootName(){return this.getCustomProperty(Ep)}set rootName(t){this._setCustomProperty(Ep,t)}set _name(t){this.name=t}}xp.prototype.is=function(i,t){return t?t===this.name&&(i==="rootElement"||i==="view:rootElement"||i==="editableElement"||i==="view:editableElement"||i==="containerElement"||i==="view:containerElement"||i==="element"||i==="view:element"):i==="rootElement"||i==="view:rootElement"||i==="editableElement"||i==="view:editableElement"||i==="containerElement"||i==="view:containerElement"||i==="element"||i==="view:element"||i==="node"||i==="view:node"};class va{constructor(t={}){if(!t.boundaries&&!t.startPosition)throw new m("view-tree-walker-no-start-position",null);if(t.direction&&t.direction!="forward"&&t.direction!="backward")throw new m("view-tree-walker-unknown-direction",t.startPosition,{direction:t.direction});this.boundaries=t.boundaries||null,t.startPosition?this._position=zt._createAt(t.startPosition):this._position=zt._createAt(t.boundaries[t.direction=="backward"?"end":"start"]),this.direction=t.direction||"forward",this.singleCharacters=!!t.singleCharacters,this.shallow=!!t.shallow,this.ignoreElementEnd=!!t.ignoreElementEnd,this._boundaryStartParent=this.boundaries?this.boundaries.start.parent:null,this._boundaryEndParent=this.boundaries?this.boundaries.end.parent:null}[Symbol.iterator](){return this}get position(){return this._position}skip(t){let e,n;do n=this.position,e=this.next();while(!e.done&&t(e.value));e.done||(this._position=n)}next(){return this.direction=="forward"?this._next():this._previous()}_next(){let t=this.position.clone();const e=this.position,n=t.parent;if(n.parent===null&&t.offset===n.childCount)return{done:!0,value:void 0};if(n===this._boundaryEndParent&&t.offset==this.boundaries.end.offset)return{done:!0,value:void 0};let o;if(n instanceof Pe){if(t.isAtEnd)return this._position=zt._createAfter(n),this._next();o=n.data[t.offset]}else o=n.getChild(t.offset);if(o instanceof go){if(this.shallow){if(this.boundaries&&this.boundaries.end.isBefore(t))return{done:!0,value:void 0};t.offset++}else t=new zt(o,0);return this._position=t,this._formatReturnValue("elementStart",o,e,t,1)}if(o instanceof Pe){if(this.singleCharacters)return t=new zt(o,0),this._position=t,this._next();let r,s=o.data.length;return o==this._boundaryEndParent?(s=this.boundaries.end.offset,r=new Ko(o,0,s),t=zt._createAfter(r)):(r=new Ko(o,0,o.data.length),t.offset++),this._position=t,this._formatReturnValue("text",r,e,t,s)}if(typeof o=="string"){let r;this.singleCharacters?r=1:r=(n===this._boundaryEndParent?this.boundaries.end.offset:n.data.length)-t.offset;const s=new Ko(n,t.offset,r);return t.offset+=r,this._position=t,this._formatReturnValue("text",s,e,t,r)}return t=zt._createAfter(n),this._position=t,this.ignoreElementEnd?this._next():this._formatReturnValue("elementEnd",n,e,t)}_previous(){let t=this.position.clone();const e=this.position,n=t.parent;if(n.parent===null&&t.offset===0)return{done:!0,value:void 0};if(n==this._boundaryStartParent&&t.offset==this.boundaries.start.offset)return{done:!0,value:void 0};let o;if(n instanceof Pe){if(t.isAtStart)return this._position=zt._createBefore(n),this._previous();o=n.data[t.offset-1]}else o=n.getChild(t.offset-1);if(o instanceof go)return this.shallow?(t.offset--,this._position=t,this._formatReturnValue("elementStart",o,e,t,1)):(t=new zt(o,o.childCount),this._position=t,this.ignoreElementEnd?this._previous():this._formatReturnValue("elementEnd",o,e,t));if(o instanceof Pe){if(this.singleCharacters)return t=new zt(o,o.data.length),this._position=t,this._previous();let r,s=o.data.length;if(o==this._boundaryStartParent){const a=this.boundaries.start.offset;r=new Ko(o,a,o.data.length-a),s=r.data.length,t=zt._createBefore(r)}else r=new Ko(o,0,o.data.length),t.offset--;return this._position=t,this._formatReturnValue("text",r,e,t,s)}if(typeof o=="string"){let r;if(this.singleCharacters)r=1;else{const a=n===this._boundaryStartParent?this.boundaries.start.offset:0;r=t.offset-a}t.offset-=r;const s=new Ko(n,t.offset,r);return this._position=t,this._formatReturnValue("text",s,e,t,r)}return t=zt._createBefore(n),this._position=t,this._formatReturnValue("elementStart",n,e,t,1)}_formatReturnValue(t,e,n,o,r){return e instanceof Ko&&(e.offsetInText+e.data.length==e.textNode.data.length&&(this.direction!="forward"||this.boundaries&&this.boundaries.end.isEqual(this.position)?n=zt._createAfter(e.textNode):(o=zt._createAfter(e.textNode),this._position=o)),e.offsetInText===0&&(this.direction!="backward"||this.boundaries&&this.boundaries.start.isEqual(this.position)?n=zt._createBefore(e.textNode):(o=zt._createBefore(e.textNode),this._position=o))),{done:!1,value:{type:t,item:e,previousPosition:n,nextPosition:o,length:r}}}}class zt extends Vr{constructor(t,e){super(),this.parent=t,this.offset=e}get nodeAfter(){return this.parent.is("$text")?null:this.parent.getChild(this.offset)||null}get nodeBefore(){return this.parent.is("$text")?null:this.parent.getChild(this.offset-1)||null}get isAtStart(){return this.offset===0}get isAtEnd(){const t=this.parent.is("$text")?this.parent.data.length:this.parent.childCount;return this.offset===t}get root(){return this.parent.root}get editableElement(){let t=this.parent;for(;!(t instanceof pd);){if(!t.parent)return null;t=t.parent}return t}getShiftedBy(t){const e=zt._createAt(this),n=e.offset+t;return e.offset=n<0?0:n,e}getLastMatchingPosition(t,e={}){e.startPosition=this;const n=new va(e);return n.skip(t),n.position}getAncestors(){return this.parent.is("documentFragment")?[this.parent]:this.parent.getAncestors({includeSelf:!0})}getCommonAncestor(t){const e=this.getAncestors(),n=t.getAncestors();let o=0;for(;e[o]==n[o]&&e[o];)o++;return o===0?null:e[o-1]}isEqual(t){return this.parent==t.parent&&this.offset==t.offset}isBefore(t){return this.compareWith(t)=="before"}isAfter(t){return this.compareWith(t)=="after"}compareWith(t){if(this.root!==t.root)return"different";if(this.isEqual(t))return"same";const e=this.parent.is("node")?this.parent.getPath():[],n=t.parent.is("node")?t.parent.getPath():[];e.push(this.offset),n.push(t.offset);const o=Ue(e,n);switch(o){case"prefix":return"before";case"extension":return"after";default:return e[o]<n[o]?"before":"after"}}getWalker(t={}){return t.startPosition=this,new va(t)}clone(){return new zt(this.parent,this.offset)}static _createAt(t,e){if(t instanceof zt)return new this(t.parent,t.offset);{const n=t;if(e=="end")e=n.is("$text")?n.data.length:n.childCount;else{if(e=="before")return this._createBefore(n);if(e=="after")return this._createAfter(n);if(e!==0&&!e)throw new m("view-createpositionat-offset-required",n)}return new zt(n,e)}}static _createAfter(t){if(t.is("$textProxy"))return new zt(t.textNode,t.offsetInText+t.data.length);if(!t.parent)throw new m("view-position-after-root",t,{root:t});return new zt(t.parent,t.index+1)}static _createBefore(t){if(t.is("$textProxy"))return new zt(t.textNode,t.offsetInText);if(!t.parent)throw new m("view-position-before-root",t,{root:t});return new zt(t.parent,t.index)}}zt.prototype.is=function(i){return i==="position"||i==="view:position"};class se extends Vr{constructor(t,e=null){super(),this.start=t.clone(),this.end=e?e.clone():t.clone()}*[Symbol.iterator](){yield*new va({boundaries:this,ignoreElementEnd:!0})}get isCollapsed(){return this.start.isEqual(this.end)}get isFlat(){return this.start.parent===this.end.parent}get root(){return this.start.root}getEnlarged(){let t=this.start.getLastMatchingPosition(gd,{direction:"backward"}),e=this.end.getLastMatchingPosition(gd);return t.parent.is("$text")&&t.isAtStart&&(t=zt._createBefore(t.parent)),e.parent.is("$text")&&e.isAtEnd&&(e=zt._createAfter(e.parent)),new se(t,e)}getTrimmed(){let t=this.start.getLastMatchingPosition(gd);if(t.isAfter(this.end)||t.isEqual(this.end))return new se(t,t);let e=this.end.getLastMatchingPosition(gd,{direction:"backward"});const n=t.nodeAfter,o=e.nodeBefore;return n&&n.is("$text")&&(t=new zt(n,0)),o&&o.is("$text")&&(e=new zt(o,o.data.length)),new se(t,e)}isEqual(t){return this==t||this.start.isEqual(t.start)&&this.end.isEqual(t.end)}containsPosition(t){return t.isAfter(this.start)&&t.isBefore(this.end)}containsRange(t,e=!1){t.isCollapsed&&(e=!1);const n=this.containsPosition(t.start)||e&&this.start.isEqual(t.start),o=this.containsPosition(t.end)||e&&this.end.isEqual(t.end);return n&&o}getDifference(t){const e=[];return this.isIntersecting(t)?(this.containsPosition(t.start)&&e.push(new se(this.start,t.start)),this.containsPosition(t.end)&&e.push(new se(t.end,this.end))):e.push(this.clone()),e}getIntersection(t){if(this.isIntersecting(t)){let e=this.start,n=this.end;return this.containsPosition(t.start)&&(e=t.start),this.containsPosition(t.end)&&(n=t.end),new se(e,n)}return null}getWalker(t={}){return t.boundaries=this,new va(t)}getCommonAncestor(){return this.start.getCommonAncestor(this.end)}getContainedElement(){if(this.isCollapsed)return null;let t=this.start.nodeAfter,e=this.end.nodeBefore;return this.start.parent.is("$text")&&this.start.isAtEnd&&this.start.parent.nextSibling&&(t=this.start.parent.nextSibling),this.end.parent.is("$text")&&this.end.isAtStart&&this.end.parent.previousSibling&&(e=this.end.parent.previousSibling),t&&t.is("element")&&t===e?t:null}clone(){return new se(this.start,this.end)}*getItems(t={}){t.boundaries=this,t.ignoreElementEnd=!0;const e=new va(t);for(const n of e)yield n.item}*getPositions(t={}){t.boundaries=this;const e=new va(t);yield e.position;for(const n of e)yield n.nextPosition}isIntersecting(t){return this.start.isBefore(t.end)&&this.end.isAfter(t.start)}static _createFromParentsAndOffsets(t,e,n,o){return new this(new zt(t,e),new zt(n,o))}static _createFromPositionAndShift(t,e){const n=t,o=t.getShiftedBy(e);return e>0?new this(n,o):new this(o,n)}static _createIn(t){return this._createFromParentsAndOffsets(t,0,t,t.childCount)}static _createOn(t){const e=t.is("$textProxy")?t.offsetSize:1;return this._createFromPositionAndShift(zt._createBefore(t),e)}}function gd(i){return!(!i.item.is("attributeElement")&&!i.item.is("uiElement"))}se.prototype.is=function(i){return i==="range"||i==="view:range"};class pr extends fe(Vr){constructor(...t){super(),this._ranges=[],this._lastRangeBackward=!1,this._isFake=!1,this._fakeSelectionLabel="",t.length&&this.setTo(...t)}get isFake(){return this._isFake}get fakeSelectionLabel(){return this._fakeSelectionLabel}get anchor(){if(!this._ranges.length)return null;const t=this._ranges[this._ranges.length-1];return(this._lastRangeBackward?t.end:t.start).clone()}get focus(){if(!this._ranges.length)return null;const t=this._ranges[this._ranges.length-1];return(this._lastRangeBackward?t.start:t.end).clone()}get isCollapsed(){return this.rangeCount===1&&this._ranges[0].isCollapsed}get rangeCount(){return this._ranges.length}get isBackward(){return!this.isCollapsed&&this._lastRangeBackward}get editableElement(){return this.anchor?this.anchor.editableElement:null}*getRanges(){for(const t of this._ranges)yield t.clone()}getFirstRange(){let t=null;for(const e of this._ranges)t&&!e.start.isBefore(t.start)||(t=e);return t?t.clone():null}getLastRange(){let t=null;for(const e of this._ranges)t&&!e.end.isAfter(t.end)||(t=e);return t?t.clone():null}getFirstPosition(){const t=this.getFirstRange();return t?t.start.clone():null}getLastPosition(){const t=this.getLastRange();return t?t.end.clone():null}isEqual(t){if(this.isFake!=t.isFake||this.isFake&&this.fakeSelectionLabel!=t.fakeSelectionLabel||this.rangeCount!=t.rangeCount)return!1;if(this.rangeCount===0)return!0;if(!this.anchor.isEqual(t.anchor)||!this.focus.isEqual(t.focus))return!1;for(const e of this._ranges){let n=!1;for(const o of t._ranges)if(e.isEqual(o)){n=!0;break}if(!n)return!1}return!0}isSimilar(t){if(this.isBackward!=t.isBackward)return!1;const e=Me(this.getRanges());if(e!=Me(t.getRanges()))return!1;if(e==0)return!0;for(let n of this.getRanges()){n=n.getTrimmed();let o=!1;for(let r of t.getRanges())if(r=r.getTrimmed(),n.start.isEqual(r.start)&&n.end.isEqual(r.end)){o=!0;break}if(!o)return!1}return!0}getSelectedElement(){return this.rangeCount!==1?null:this.getFirstRange().getContainedElement()}setTo(...t){let[e,n,o]=t;if(typeof n=="object"&&(o=n,n=void 0),e===null)this._setRanges([]),this._setFakeOptions(o);else if(e instanceof pr||e instanceof ah)this._setRanges(e.getRanges(),e.isBackward),this._setFakeOptions({fake:e.isFake,label:e.fakeSelectionLabel});else if(e instanceof se)this._setRanges([e],o&&o.backward),this._setFakeOptions(o);else if(e instanceof zt)this._setRanges([new se(e)]),this._setFakeOptions(o);else if(e instanceof ds){const r=!!o&&!!o.backward;let s;if(n===void 0)throw new m("view-selection-setto-required-second-parameter",this);s=n=="in"?se._createIn(e):n=="on"?se._createOn(e):new se(zt._createAt(e,n)),this._setRanges([s],r),this._setFakeOptions(o)}else{if(!Ne(e))throw new m("view-selection-setto-not-selectable",this);this._setRanges(e,o&&o.backward),this._setFakeOptions(o)}this.fire("change")}setFocus(t,e){if(this.anchor===null)throw new m("view-selection-setfocus-no-ranges",this);const n=zt._createAt(t,e);if(n.compareWith(this.focus)=="same")return;const o=this.anchor;this._ranges.pop(),n.compareWith(o)=="before"?this._addRange(new se(n,o),!0):this._addRange(new se(o,n)),this.fire("change")}_setRanges(t,e=!1){t=Array.from(t),this._ranges=[];for(const n of t)this._addRange(n);this._lastRangeBackward=!!e}_setFakeOptions(t={}){this._isFake=!!t.fake,this._fakeSelectionLabel=t.fake&&t.label||""}_addRange(t,e=!1){if(!(t instanceof se))throw new m("view-selection-add-range-not-range",this);this._pushRange(t),this._lastRangeBackward=!!e}_pushRange(t){for(const e of this._ranges)if(t.isIntersecting(e))throw new m("view-selection-range-intersects",this,{addedRange:t,intersectingRange:e});this._ranges.push(new se(t.start,t.end))}}pr.prototype.is=function(i){return i==="selection"||i==="view:selection"};class ah extends fe(Vr){constructor(...t){super(),this._selection=new pr,this._selection.delegate("change").to(this),t.length&&this._selection.setTo(...t)}get isFake(){return this._selection.isFake}get fakeSelectionLabel(){return this._selection.fakeSelectionLabel}get anchor(){return this._selection.anchor}get focus(){return this._selection.focus}get isCollapsed(){return this._selection.isCollapsed}get rangeCount(){return this._selection.rangeCount}get isBackward(){return this._selection.isBackward}get editableElement(){return this._selection.editableElement}get _ranges(){return this._selection._ranges}*getRanges(){yield*this._selection.getRanges()}getFirstRange(){return this._selection.getFirstRange()}getLastRange(){return this._selection.getLastRange()}getFirstPosition(){return this._selection.getFirstPosition()}getLastPosition(){return this._selection.getLastPosition()}getSelectedElement(){return this._selection.getSelectedElement()}isEqual(t){return this._selection.isEqual(t)}isSimilar(t){return this._selection.isSimilar(t)}_setTo(...t){this._selection.setTo(...t)}_setFocus(t,e){this._selection.setFocus(t,e)}}ah.prototype.is=function(i){return i==="selection"||i=="documentSelection"||i=="view:selection"||i=="view:documentSelection"};class nc extends at{constructor(t,e,n){super(t,e),this.startRange=n,this._eventPhase="none",this._currentTarget=null}get eventPhase(){return this._eventPhase}get currentTarget(){return this._currentTarget}}const ch=Symbol("bubbling contexts");function lh(i){return class extends i{fire(t,...e){try{const n=t instanceof at?t:new at(this,t),o=dh(this);if(!o.size)return;if(sl(n,"capturing",this),ic(o,"$capture",n,...e))return n.return;const r=n.startRange||this.selection.getFirstRange(),s=r?r.getContainedElement():null,a=!!s&&!!Tp(o,s);let c=s||function(l){if(!l)return null;const u=l.start.parent,p=l.end.parent,k=u.getPath(),v=p.getPath();return k.length>v.length?u:p}(r);if(sl(n,"atTarget",c),!a){if(ic(o,"$text",n,...e))return n.return;sl(n,"bubbling",c)}for(;c;){if(c.is("rootElement")){if(ic(o,"$root",n,...e))return n.return}else if(c.is("element")&&ic(o,c.name,n,...e))return n.return;if(ic(o,c,n,...e))return n.return;c=c.parent,sl(n,"bubbling",c)}return sl(n,"bubbling",this),ic(o,"$document",n,...e),n.return}catch(n){m.rethrowUnexpectedError(n,this)}}_addEventListener(t,e,n){const o=Le(n.context||"$document"),r=dh(this);for(const s of o){let a=r.get(s);a||(a=new(fe()),r.set(s,a)),this.listenTo(a,t,e,n)}}_removeEventListener(t,e){const n=dh(this);for(const o of n.values())this.stopListening(o,t,e)}}}{const i=lh(Object);["fire","_addEventListener","_removeEventListener"].forEach(t=>{lh[t]=i.prototype[t]})}function sl(i,t,e){i instanceof nc&&(i._eventPhase=t,i._currentTarget=e)}function ic(i,t,e,...n){const o=typeof t=="string"?i.get(t):Tp(i,t);return!!o&&(o.fire(e,...n),e.stop.called)}function Tp(i,t){for(const[e,n]of i)if(typeof e=="function"&&e(t))return n;return null}function dh(i){return i[ch]||(i[ch]=new Map),i[ch]}class md extends lh(pe()){constructor(t){super(),this._postFixers=new Set,this.selection=new ah,this.roots=new po({idProperty:"rootName"}),this.stylesProcessor=t,this.set("isReadOnly",!1),this.set("isFocused",!1),this.set("isSelecting",!1),this.set("isComposing",!1)}getRoot(t="main"){return this.roots.get(t)}registerPostFixer(t){this._postFixers.add(t)}destroy(){this.roots.forEach(t=>t.destroy()),this.stopListening()}_callPostFixers(t){let e=!1;do for(const n of this._postFixers)if(e=n(t),e)break;while(e)}}class Ca extends go{constructor(t,e,n,o){super(t,e,n,o),this._priority=10,this._id=null,this._clonesGroup=null,this.getFillerOffset=v0}get priority(){return this._priority}get id(){return this._id}getElementsWithSameId(){if(this.id===null)throw new m("attribute-element-get-elements-with-same-id-no-id",this);return new Set(this._clonesGroup)}isSimilar(t){return this.id!==null||t.id!==null?this.id===t.id:super.isSimilar(t)&&this.priority==t.priority}_clone(t=!1){const e=super._clone(t);return e._priority=this._priority,e._id=this._id,e}}function v0(){if(uh(this))return null;let i=this.parent;for(;i&&i.is("attributeElement");){if(uh(i)>1)return null;i=i.parent}return!i||uh(i)>1?null:this.childCount}function uh(i){return Array.from(i.getChildren()).filter(t=>!t.is("uiElement")).length}Ca.DEFAULT_PRIORITY=10,Ca.prototype.is=function(i,t){return t?t===this.name&&(i==="attributeElement"||i==="view:attributeElement"||i==="element"||i==="view:element"):i==="attributeElement"||i==="view:attributeElement"||i==="element"||i==="view:element"||i==="node"||i==="view:node"};class hh extends go{constructor(t,e,n,o){super(t,e,n,o),this.getFillerOffset=C0}_insertChild(t,e){if(e&&(e instanceof ds||Array.from(e).length>0))throw new m("view-emptyelement-cannot-add",[this,e]);return 0}}function C0(){return null}hh.prototype.is=function(i,t){return t?t===this.name&&(i==="emptyElement"||i==="view:emptyElement"||i==="element"||i==="view:element"):i==="emptyElement"||i==="view:emptyElement"||i==="element"||i==="view:element"||i==="node"||i==="view:node"};class kd extends go{constructor(t,e,n,o){super(t,e,n,o),this.getFillerOffset=E0}_insertChild(t,e){if(e&&(e instanceof ds||Array.from(e).length>0))throw new m("view-uielement-cannot-add",[this,e]);return 0}render(t,e){return this.toDomElement(t)}toDomElement(t){const e=t.createElement(this.name);for(const n of this.getAttributeKeys())e.setAttribute(n,this.getAttribute(n));return e}}function y0(i){i.document.on("arrowKey",(t,e)=>function(n,o,r){if(o.keyCode==Ae.arrowright){const s=o.domTarget.ownerDocument.defaultView.getSelection(),a=s.rangeCount==1&&s.getRangeAt(0).collapsed;if(a||o.shiftKey){const c=s.focusNode,l=s.focusOffset,u=r.domPositionToView(c,l);if(u===null)return;let p=!1;const k=u.getLastMatchingPosition(v=>(v.item.is("uiElement")&&(p=!0),!(!v.item.is("uiElement")&&!v.item.is("attributeElement"))));if(p){const v=r.viewPositionToDom(k);a?s.collapse(v.parent,v.offset):s.extend(v.parent,v.offset)}}}}(0,e,i.domConverter),{priority:"low"})}function E0(){return null}kd.prototype.is=function(i,t){return t?t===this.name&&(i==="uiElement"||i==="view:uiElement"||i==="element"||i==="view:element"):i==="uiElement"||i==="view:uiElement"||i==="element"||i==="view:element"||i==="node"||i==="view:node"};class fh extends go{constructor(t,e,n,o){super(t,e,n,o),this.getFillerOffset=x0}_insertChild(t,e){if(e&&(e instanceof ds||Array.from(e).length>0))throw new m("view-rawelement-cannot-add",[this,e]);return 0}render(t,e){}}function x0(){return null}fh.prototype.is=function(i,t){return t?t===this.name&&(i==="rawElement"||i==="view:rawElement"||i==="element"||i==="view:element"):i==="rawElement"||i==="view:rawElement"||i===this.name||i==="view:"+this.name||i==="element"||i==="view:element"||i==="node"||i==="view:node"};class ya extends fe(Vr){constructor(t,e){super(),this._children=[],this._customProperties=new Map,this.document=t,e&&this._insertChild(0,e)}[Symbol.iterator](){return this._children[Symbol.iterator]()}get childCount(){return this._children.length}get isEmpty(){return this.childCount===0}get root(){return this}get parent(){return null}get name(){}get getFillerOffset(){}getCustomProperty(t){return this._customProperties.get(t)}*getCustomProperties(){yield*this._customProperties.entries()}_appendChild(t){return this._insertChild(this.childCount,t)}getChild(t){return this._children[t]}getChildIndex(t){return this._children.indexOf(t)}getChildren(){return this._children[Symbol.iterator]()}_insertChild(t,e){this._fireChange("children",this);let n=0;const o=function(r,s){return typeof s=="string"?[new Pe(r,s)]:(Ne(s)||(s=[s]),Array.from(s).map(a=>typeof a=="string"?new Pe(r,a):a instanceof Ko?new Pe(r,a.data):a))}(this.document,e);for(const r of o)r.parent!==null&&r._remove(),r.parent=this,this._children.splice(t,0,r),t++,n++;return n}_removeChildren(t,e=1){this._fireChange("children",this);for(let n=t;n<t+e;n++)this._children[n].parent=null;return this._children.splice(t,e)}_fireChange(t,e){this.fire("change:"+t,e)}_setCustomProperty(t,e){this._customProperties.set(t,e)}_removeCustomProperty(t){return this._customProperties.delete(t)}}ya.prototype.is=function(i){return i==="documentFragment"||i==="view:documentFragment"};class Dp{constructor(t){this._cloneGroups=new Map,this._slotFactory=null,this.document=t}setSelection(...t){this.document.selection._setTo(...t)}setSelectionFocus(t,e){this.document.selection._setFocus(t,e)}createDocumentFragment(t){return new ya(this.document,t)}createText(t){return new Pe(this.document,t)}createAttributeElement(t,e,n={}){const o=new Ca(this.document,t,e);return typeof n.priority=="number"&&(o._priority=n.priority),n.id&&(o._id=n.id),n.renderUnsafeAttributes&&o._unsafeAttributesToRender.push(...n.renderUnsafeAttributes),o}createContainerElement(t,e,n={},o={}){let r=null;mn(n)?o=n:r=n;const s=new rl(this.document,t,e,r);return o.renderUnsafeAttributes&&s._unsafeAttributesToRender.push(...o.renderUnsafeAttributes),s}createEditableElement(t,e,n={}){const o=new pd(this.document,t,e);return n.renderUnsafeAttributes&&o._unsafeAttributesToRender.push(...n.renderUnsafeAttributes),o}createEmptyElement(t,e,n={}){const o=new hh(this.document,t,e);return n.renderUnsafeAttributes&&o._unsafeAttributesToRender.push(...n.renderUnsafeAttributes),o}createUIElement(t,e,n){const o=new kd(this.document,t,e);return n&&(o.render=n),o}createRawElement(t,e,n,o={}){const r=new fh(this.document,t,e);return n&&(r.render=n),o.renderUnsafeAttributes&&r._unsafeAttributesToRender.push(...o.renderUnsafeAttributes),r}setAttribute(t,e,n){n._setAttribute(t,e)}removeAttribute(t,e){e._removeAttribute(t)}addClass(t,e){e._addClass(t)}removeClass(t,e){e._removeClass(t)}setStyle(t,e,n){mn(t)&&n===void 0?e._setStyle(t):n._setStyle(t,e)}removeStyle(t,e){e._removeStyle(t)}setCustomProperty(t,e,n){n._setCustomProperty(t,e)}removeCustomProperty(t,e){return e._removeCustomProperty(t)}breakAttributes(t){return t instanceof zt?this._breakAttributes(t):this._breakAttributesRange(t)}breakContainer(t){const e=t.parent;if(!e.is("containerElement"))throw new m("view-writer-break-non-container-element",this.document);if(!e.parent)throw new m("view-writer-break-root",this.document);if(t.isAtStart)return zt._createBefore(e);if(!t.isAtEnd){const n=e._clone(!1);this.insert(zt._createAfter(e),n);const o=new se(t,zt._createAt(e,"end")),r=new zt(n,0);this.move(o,r)}return zt._createAfter(e)}mergeAttributes(t){const e=t.offset,n=t.parent;if(n.is("$text"))return t;if(n.is("attributeElement")&&n.childCount===0){const s=n.parent,a=n.index;return n._remove(),this._removeFromClonedElementsGroup(n),this.mergeAttributes(new zt(s,a))}const o=n.getChild(e-1),r=n.getChild(e);if(!o||!r)return t;if(o.is("$text")&&r.is("$text"))return Ip(o,r);if(o.is("attributeElement")&&r.is("attributeElement")&&o.isSimilar(r)){const s=o.childCount;return o._appendChild(r.getChildren()),r._remove(),this._removeFromClonedElementsGroup(r),this.mergeAttributes(new zt(o,s))}return t}mergeContainers(t){const e=t.nodeBefore,n=t.nodeAfter;if(!(e&&n&&e.is("containerElement")&&n.is("containerElement")))throw new m("view-writer-merge-containers-invalid-position",this.document);const o=e.getChild(e.childCount-1),r=o instanceof Pe?zt._createAt(o,"end"):zt._createAt(e,"end");return this.move(se._createIn(n),zt._createAt(e,"end")),this.remove(se._createOn(n)),r}insert(t,e){Mp(e=Ne(e)?[...e]:[e],this.document);const n=e.reduce((s,a)=>{const c=s[s.length-1],l=!a.is("uiElement");return c&&c.breakAttributes==l?c.nodes.push(a):s.push({breakAttributes:l,nodes:[a]}),s},[]);let o=null,r=t;for(const{nodes:s,breakAttributes:a}of n){const c=this._insertNodes(r,s,a);o||(o=c.start),r=c.end}return o?new se(o,r):new se(t)}remove(t){const e=t instanceof se?t:se._createOn(t);if(al(e,this.document),e.isCollapsed)return new ya(this.document);const{start:n,end:o}=this._breakAttributesRange(e,!0),r=n.parent,s=o.offset-n.offset,a=r._removeChildren(n.offset,s);for(const l of a)this._removeFromClonedElementsGroup(l);const c=this.mergeAttributes(n);return e.start=c,e.end=c.clone(),new ya(this.document,a)}clear(t,e){al(t,this.document);const n=t.getWalker({direction:"backward",ignoreElementEnd:!0});for(const o of n){const r=o.item;let s;if(r.is("element")&&e.isSimilar(r))s=se._createOn(r);else if(!o.nextPosition.isAfter(t.start)&&r.is("$textProxy")){const a=r.getAncestors().find(c=>c.is("element")&&e.isSimilar(c));a&&(s=se._createIn(a))}s&&(s.end.isAfter(t.end)&&(s.end=t.end),s.start.isBefore(t.start)&&(s.start=t.start),this.remove(s))}}move(t,e){let n;if(e.isAfter(t.end)){const o=(e=this._breakAttributes(e,!0)).parent,r=o.childCount;t=this._breakAttributesRange(t,!0),n=this.remove(t),e.offset+=o.childCount-r}else n=this.remove(t);return this.insert(e,n)}wrap(t,e){if(!(e instanceof Ca))throw new m("view-writer-wrap-invalid-attribute",this.document);if(al(t,this.document),t.isCollapsed){let o=t.start;o.parent.is("element")&&(n=o.parent,!Array.from(n.getChildren()).some(s=>!s.is("uiElement")))&&(o=o.getLastMatchingPosition(s=>s.item.is("uiElement"))),o=this._wrapPosition(o,e);const r=this.document.selection;return r.isCollapsed&&r.getFirstPosition().isEqual(t.start)&&this.setSelection(o),new se(o)}return this._wrapRange(t,e);var n}unwrap(t,e){if(!(e instanceof Ca))throw new m("view-writer-unwrap-invalid-attribute",this.document);if(al(t,this.document),t.isCollapsed)return t;const{start:n,end:o}=this._breakAttributesRange(t,!0),r=n.parent,s=this._unwrapChildren(r,n.offset,o.offset,e),a=this.mergeAttributes(s.start);a.isEqual(s.start)||s.end.offset--;const c=this.mergeAttributes(s.end);return new se(a,c)}rename(t,e){const n=new rl(this.document,t,e.getAttributes());return this.insert(zt._createAfter(e),n),this.move(se._createIn(e),zt._createAt(n,0)),this.remove(se._createOn(e)),n}clearClonedElementsGroup(t){this._cloneGroups.delete(t)}createPositionAt(t,e){return zt._createAt(t,e)}createPositionAfter(t){return zt._createAfter(t)}createPositionBefore(t){return zt._createBefore(t)}createRange(t,e){return new se(t,e)}createRangeOn(t){return se._createOn(t)}createRangeIn(t){return se._createIn(t)}createSelection(...t){return new pr(...t)}createSlot(t="children"){if(!this._slotFactory)throw new m("view-writer-invalid-create-slot-context",this.document);return this._slotFactory(this,t)}_registerSlotFactory(t){this._slotFactory=t}_clearSlotFactory(){this._slotFactory=null}_insertNodes(t,e,n){let o,r;if(o=n?ph(t):t.parent.is("$text")?t.parent.parent:t.parent,!o)throw new m("view-writer-invalid-position-container",this.document);r=n?this._breakAttributes(t,!0):t.parent.is("$text")?gh(t):t;const s=o._insertChild(r.offset,e);for(const u of e)this._addToClonedElementsGroup(u);const a=r.getShiftedBy(s),c=this.mergeAttributes(r);c.isEqual(r)||a.offset--;const l=this.mergeAttributes(a);return new se(c,l)}_wrapChildren(t,e,n,o){let r=e;const s=[];for(;r<n;){const c=t.getChild(r),l=c.is("$text"),u=c.is("attributeElement");if(u&&this._wrapAttributeElement(o,c))s.push(new zt(t,r));else if(l||!u||T0(o,c)){const p=o._clone();c._remove(),p._appendChild(c),t._insertChild(r,p),this._addToClonedElementsGroup(p),s.push(new zt(t,r))}else this._wrapChildren(c,0,c.childCount,o);r++}let a=0;for(const c of s)c.offset-=a,c.offset!=e&&(this.mergeAttributes(c).isEqual(c)||(a++,n--));return se._createFromParentsAndOffsets(t,e,t,n)}_unwrapChildren(t,e,n,o){let r=e;const s=[];for(;r<n;){const c=t.getChild(r);if(c.is("attributeElement"))if(c.isSimilar(o)){const l=c.getChildren(),u=c.childCount;c._remove(),t._insertChild(r,l),this._removeFromClonedElementsGroup(c),s.push(new zt(t,r),new zt(t,r+u)),r+=u,n+=u-1}else this._unwrapAttributeElement(o,c)?(s.push(new zt(t,r),new zt(t,r+1)),r++):(this._unwrapChildren(c,0,c.childCount,o),r++);else r++}let a=0;for(const c of s)c.offset-=a,!(c.offset==e||c.offset==n)&&(this.mergeAttributes(c).isEqual(c)||(a++,n--));return se._createFromParentsAndOffsets(t,e,t,n)}_wrapRange(t,e){const{start:n,end:o}=this._breakAttributesRange(t,!0),r=n.parent,s=this._wrapChildren(r,n.offset,o.offset,e),a=this.mergeAttributes(s.start);a.isEqual(s.start)||s.end.offset--;const c=this.mergeAttributes(s.end);return new se(a,c)}_wrapPosition(t,e){if(e.isSimilar(t.parent))return Sp(t.clone());t.parent.is("$text")&&(t=gh(t));const n=this.createAttributeElement("_wrapPosition-fake-element");n._priority=Number.POSITIVE_INFINITY,n.isSimilar=()=>!1,t.parent._insertChild(t.offset,n);const o=new se(t,t.getShiftedBy(1));this.wrap(o,e);const r=new zt(n.parent,n.index);n._remove();const s=r.nodeBefore,a=r.nodeAfter;return s instanceof Pe&&a instanceof Pe?Ip(s,a):Sp(r)}_wrapAttributeElement(t,e){if(!Np(t,e)||t.name!==e.name||t.priority!==e.priority)return!1;for(const n of t.getAttributeKeys())if(n!=="class"&&n!=="style"&&e.hasAttribute(n)&&e.getAttribute(n)!==t.getAttribute(n))return!1;for(const n of t.getStyleNames())if(e.hasStyle(n)&&e.getStyle(n)!==t.getStyle(n))return!1;for(const n of t.getAttributeKeys())n!=="class"&&n!=="style"&&(e.hasAttribute(n)||this.setAttribute(n,t.getAttribute(n),e));for(const n of t.getStyleNames())e.hasStyle(n)||this.setStyle(n,t.getStyle(n),e);for(const n of t.getClassNames())e.hasClass(n)||this.addClass(n,e);return!0}_unwrapAttributeElement(t,e){if(!Np(t,e)||t.name!==e.name||t.priority!==e.priority)return!1;for(const n of t.getAttributeKeys())if(n!=="class"&&n!=="style"&&(!e.hasAttribute(n)||e.getAttribute(n)!==t.getAttribute(n)))return!1;if(!e.hasClass(...t.getClassNames()))return!1;for(const n of t.getStyleNames())if(!e.hasStyle(n)||e.getStyle(n)!==t.getStyle(n))return!1;for(const n of t.getAttributeKeys())n!=="class"&&n!=="style"&&this.removeAttribute(n,e);return this.removeClass(Array.from(t.getClassNames()),e),this.removeStyle(Array.from(t.getStyleNames()),e),!0}_breakAttributesRange(t,e=!1){const n=t.start,o=t.end;if(al(t,this.document),t.isCollapsed){const c=this._breakAttributes(t.start,e);return new se(c,c)}const r=this._breakAttributes(o,e),s=r.parent.childCount,a=this._breakAttributes(n,e);return r.offset+=r.parent.childCount-s,new se(a,r)}_breakAttributes(t,e=!1){const n=t.offset,o=t.parent;if(t.parent.is("emptyElement"))throw new m("view-writer-cannot-break-empty-element",this.document);if(t.parent.is("uiElement"))throw new m("view-writer-cannot-break-ui-element",this.document);if(t.parent.is("rawElement"))throw new m("view-writer-cannot-break-raw-element",this.document);if(!e&&o.is("$text")&&mh(o.parent)||mh(o))return t.clone();if(o.is("$text"))return this._breakAttributes(gh(t),e);if(n==o.childCount){const r=new zt(o.parent,o.index+1);return this._breakAttributes(r,e)}if(n===0){const r=new zt(o.parent,o.index);return this._breakAttributes(r,e)}{const r=o.index+1,s=o._clone();o.parent._insertChild(r,s),this._addToClonedElementsGroup(s);const a=o.childCount-n,c=o._removeChildren(n,a);s._appendChild(c);const l=new zt(o.parent,r);return this._breakAttributes(l,e)}}_addToClonedElementsGroup(t){if(!t.root.is("rootElement"))return;if(t.is("element"))for(const o of t.getChildren())this._addToClonedElementsGroup(o);const e=t.id;if(!e)return;let n=this._cloneGroups.get(e);n||(n=new Set,this._cloneGroups.set(e,n)),n.add(t),t._clonesGroup=n}_removeFromClonedElementsGroup(t){if(t.is("element"))for(const o of t.getChildren())this._removeFromClonedElementsGroup(o);const e=t.id;if(!e)return;const n=this._cloneGroups.get(e);n&&n.delete(t)}}function ph(i){let t=i.parent;for(;!mh(t);){if(!t)return;t=t.parent}return t}function T0(i,t){return i.priority<t.priority||!(i.priority>t.priority)&&i.getIdentity()<t.getIdentity()}function Sp(i){const t=i.nodeBefore;if(t&&t.is("$text"))return new zt(t,t.data.length);const e=i.nodeAfter;return e&&e.is("$text")?new zt(e,0):i}function gh(i){if(i.offset==i.parent.data.length)return new zt(i.parent.parent,i.parent.index+1);if(i.offset===0)return new zt(i.parent.parent,i.parent.index);const t=i.parent.data.slice(i.offset);return i.parent._data=i.parent.data.slice(0,i.offset),i.parent.parent._insertChild(i.parent.index+1,new Pe(i.root.document,t)),new zt(i.parent.parent,i.parent.index+1)}function Ip(i,t){const e=i.data.length;return i._data+=t.data,t._remove(),new zt(i,e)}const D0=[Pe,Ca,rl,hh,fh,kd];function Mp(i,t){for(const e of i){if(!D0.some(n=>e instanceof n))throw new m("view-writer-insert-invalid-node-type",t);e.is("$text")||Mp(e.getChildren(),t)}}function mh(i){return i&&(i.is("containerElement")||i.is("documentFragment"))}function al(i,t){const e=ph(i.start),n=ph(i.end);if(!e||!n||e!==n)throw new m("view-writer-invalid-range-container",t)}function Np(i,t){return i.id===null&&t.id===null}const Op=i=>i.createTextNode(" "),Bp=i=>{const t=i.createElement("span");return t.dataset.ckeFiller="true",t.innerText=" ",t},Lp=i=>{const t=i.createElement("br");return t.dataset.ckeFiller="true",t},gr=7,cl="⁠".repeat(gr);function mo(i){return typeof i=="string"?i.substr(0,gr)===cl:_t(i)&&i.data.substr(0,gr)===cl}function oc(i){return i.data.length==gr&&mo(i)}function Pp(i){const t=typeof i=="string"?i:i.data;return mo(i)?t.slice(gr):t}function S0(i,t){if(t.keyCode==Ae.arrowleft){const e=t.domTarget.ownerDocument.defaultView.getSelection();if(e.rangeCount==1&&e.getRangeAt(0).collapsed){const n=e.getRangeAt(0).startContainer,o=e.getRangeAt(0).startOffset;mo(n)&&o<=gr&&e.collapse(n,0)}}}var Rp=V(8264),I0={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Lt()(Rp.A,I0),Rp.A.locals;class M0 extends pe(){constructor(t,e){super(),this.domDocuments=new Set,this.markedAttributes=new Set,this.markedChildren=new Set,this.markedTexts=new Set,this._inlineFiller=null,this._fakeSelectionContainer=null,this.domConverter=t,this.selection=e,this.set("isFocused",!1),this.set("isSelecting",!1),U.isBlink&&!U.isAndroid&&this.on("change:isSelecting",()=>{this.isSelecting||this.render()}),this.set("isComposing",!1),this.on("change:isComposing",()=>{this.isComposing||this.render()})}markToSync(t,e){if(t==="text")this.domConverter.mapViewToDom(e.parent)&&this.markedTexts.add(e);else{if(!this.domConverter.mapViewToDom(e))return;if(t==="attributes")this.markedAttributes.add(e);else{if(t!=="children")throw new m("view-renderer-unknown-type",this);this.markedChildren.add(e)}}}render(){if(this.isComposing&&!U.isAndroid)return;let t=null;const e=!(U.isBlink&&!U.isAndroid)||!this.isSelecting;for(const n of this.markedChildren)this._updateChildrenMappings(n);e?(this._inlineFiller&&!this._isSelectionInInlineFiller()&&this._removeInlineFiller(),this._inlineFiller?t=this._getInlineFillerPosition():this._needsInlineFillerAtSelection()&&(t=this.selection.getFirstPosition(),this.markedChildren.add(t.parent))):this._inlineFiller&&this._inlineFiller.parentNode&&(t=this.domConverter.domPositionToView(this._inlineFiller),t&&t.parent.is("$text")&&(t=zt._createBefore(t.parent)));for(const n of this.markedAttributes)this._updateAttrs(n);for(const n of this.markedChildren)this._updateChildren(n,{inlineFillerPosition:t});for(const n of this.markedTexts)!this.markedChildren.has(n.parent)&&this.domConverter.mapViewToDom(n.parent)&&this._updateText(n,{inlineFillerPosition:t});if(e)if(t){const n=this.domConverter.viewPositionToDom(t),o=n.parent.ownerDocument;mo(n.parent)?this._inlineFiller=n.parent:this._inlineFiller=zp(o,n.parent,n.offset)}else this._inlineFiller=null;this._updateFocus(),this._updateSelection(),this.domConverter._clearTemporaryCustomProperties(),this.markedTexts.clear(),this.markedAttributes.clear(),this.markedChildren.clear()}_updateChildrenMappings(t){const e=this.domConverter.mapViewToDom(t);if(!e)return;const n=Array.from(e.childNodes),o=Array.from(this.domConverter.viewChildrenToDom(t,{withChildren:!1})),r=this._diffNodeLists(n,o),s=this._findUpdateActions(r,n,o,N0);if(s.indexOf("update")!==-1){const a={equal:0,insert:0,delete:0};for(const c of s)if(c==="update"){const l=a.equal+a.insert,u=a.equal+a.delete,p=t.getChild(l);!p||p.is("uiElement")||p.is("rawElement")||this._updateElementMappings(p,n[u]),Gl(o[l]),a.equal++}else a[c]++}}_updateElementMappings(t,e){this.domConverter.unbindDomElement(e),this.domConverter.bindElements(e,t),this.markedChildren.add(t),this.markedAttributes.add(t)}_getInlineFillerPosition(){const t=this.selection.getFirstPosition();return t.parent.is("$text")?zt._createBefore(t.parent):t}_isSelectionInInlineFiller(){if(this.selection.rangeCount!=1||!this.selection.isCollapsed)return!1;const t=this.selection.getFirstPosition(),e=this.domConverter.viewPositionToDom(t);return!!(e&&_t(e.parent)&&mo(e.parent))}_removeInlineFiller(){const t=this._inlineFiller;if(!mo(t))throw new m("view-renderer-filler-was-lost",this);oc(t)?t.remove():t.data=t.data.substr(gr),this._inlineFiller=null}_needsInlineFillerAtSelection(){if(this.selection.rangeCount!=1||!this.selection.isCollapsed)return!1;const t=this.selection.getFirstPosition(),e=t.parent,n=t.offset;if(!this.domConverter.mapViewToDom(e.root)||!e.is("element")||!function(s){if(s.getAttribute("contenteditable")=="false")return!1;const a=s.findAncestor(c=>c.hasAttribute("contenteditable"));return!a||a.getAttribute("contenteditable")=="true"}(e))return!1;const o=t.nodeBefore,r=t.nodeAfter;return!(o instanceof Pe||r instanceof Pe)&&!!(n!==e.getFillerOffset()||o&&o.is("element","br"))&&(!U.isAndroid||!o&&!r)}_updateText(t,e){const n=this.domConverter.findCorrespondingDomText(t);let o=this.domConverter.viewToDom(t).data;const r=e.inlineFillerPosition;r&&r.parent==t.parent&&r.offset==t.index&&(o=cl+o),jp(n,o)}_updateAttrs(t){const e=this.domConverter.mapViewToDom(t);if(!e)return;const n=Array.from(e.attributes).map(r=>r.name),o=t.getAttributeKeys();for(const r of o)this.domConverter.setDomElementAttribute(e,r,t.getAttribute(r),t);for(const r of n)t.hasAttribute(r)||this.domConverter.removeDomElementAttribute(e,r)}_updateChildren(t,e){const n=this.domConverter.mapViewToDom(t);if(!n)return;if(U.isAndroid){let p=null;for(const k of Array.from(n.childNodes)){if(p&&_t(p)&&_t(k)){n.normalize();break}p=k}}const o=e.inlineFillerPosition,r=n.childNodes,s=Array.from(this.domConverter.viewChildrenToDom(t,{bind:!0}));o&&o.parent===t&&zp(n.ownerDocument,s,o.offset);const a=this._diffNodeLists(r,s),c=this._findUpdateActions(a,r,s,O0);let l=0;const u=new Set;for(const p of c)p==="delete"?(u.add(r[l]),Gl(r[l])):p!=="equal"&&p!=="update"||l++;l=0;for(const p of c)p==="insert"?($a(n,l,s[l]),l++):p==="update"?(jp(r[l],s[l].data),l++):p==="equal"&&(this._markDescendantTextToSync(this.domConverter.domToView(s[l])),l++);for(const p of u)p.parentNode||this.domConverter.unbindDomElement(p)}_diffNodeLists(t,e){return t=function(n,o){const r=Array.from(n);return r.length==0||!o||r[r.length-1]==o&&r.pop(),r}(t,this._fakeSelectionContainer),Q(t,e,B0.bind(null,this.domConverter))}_findUpdateActions(t,e,n,o){if(t.indexOf("insert")===-1||t.indexOf("delete")===-1)return t;let r=[],s=[],a=[];const c={equal:0,insert:0,delete:0};for(const l of t)l==="insert"?a.push(n[c.equal+c.insert]):l==="delete"?s.push(e[c.equal+c.delete]):(r=r.concat(Q(s,a,o).map(u=>u==="equal"?"update":u)),r.push("equal"),s=[],a=[]),c[l]++;return r.concat(Q(s,a,o).map(l=>l==="equal"?"update":l))}_markDescendantTextToSync(t){if(t){if(t.is("$text"))this.markedTexts.add(t);else if(t.is("element"))for(const e of t.getChildren())this._markDescendantTextToSync(e)}}_updateSelection(){if(U.isBlink&&!U.isAndroid&&this.isSelecting&&!this.markedChildren.size)return;if(this.selection.rangeCount===0)return this._removeDomSelection(),void this._removeFakeSelection();const t=this.domConverter.mapViewToDom(this.selection.editableElement);this.isFocused&&t&&(this.selection.isFake?this._updateFakeSelection(t):this._fakeSelectionContainer&&this._fakeSelectionContainer.isConnected?(this._removeFakeSelection(),this._updateDomSelection(t)):this.isComposing&&U.isAndroid||this._updateDomSelection(t))}_updateFakeSelection(t){const e=t.ownerDocument;this._fakeSelectionContainer||(this._fakeSelectionContainer=function(s){const a=s.createElement("div");return a.className="ck-fake-selection-container",Object.assign(a.style,{position:"fixed",top:0,left:"-9999px",width:"42px"}),a.textContent=" ",a}(e));const n=this._fakeSelectionContainer;if(this.domConverter.bindFakeSelection(n,this.selection),!this._fakeSelectionNeedsUpdate(t))return;n.parentElement&&n.parentElement==t||t.appendChild(n),n.textContent=this.selection.fakeSelectionLabel||" ";const o=e.getSelection(),r=e.createRange();o.removeAllRanges(),r.selectNodeContents(n),o.addRange(r)}_updateDomSelection(t){const e=t.ownerDocument.defaultView.getSelection();if(!this._domSelectionNeedsUpdate(e))return;const n=this.domConverter.viewPositionToDom(this.selection.anchor),o=this.domConverter.viewPositionToDom(this.selection.focus);e.setBaseAndExtent(n.parent,n.offset,o.parent,o.offset),U.isGecko&&function(r,s){let a=r.parent,c=r.offset;if(_t(a)&&oc(a)&&(c=Rs(a)+1,a=a.parentNode),a.nodeType!=Node.ELEMENT_NODE||c!=a.childNodes.length-1)return;const l=a.childNodes[c];l&&l.tagName=="BR"&&s.addRange(s.getRangeAt(0))}(o,e)}_domSelectionNeedsUpdate(t){if(!this.domConverter.isDomSelectionCorrect(t))return!0;const e=t&&this.domConverter.domSelectionToView(t);return(!e||!this.selection.isEqual(e))&&!(!this.selection.isCollapsed&&this.selection.isSimilar(e))}_fakeSelectionNeedsUpdate(t){const e=this._fakeSelectionContainer,n=t.ownerDocument.getSelection();return!e||e.parentElement!==t||n.anchorNode!==e&&!e.contains(n.anchorNode)||e.textContent!==this.selection.fakeSelectionLabel}_removeDomSelection(){for(const t of this.domDocuments){const e=t.getSelection();if(e.rangeCount){const n=t.activeElement,o=this.domConverter.mapDomToView(n);n&&o&&e.removeAllRanges()}}}_removeFakeSelection(){const t=this._fakeSelectionContainer;t&&t.remove()}_updateFocus(){if(this.isFocused){const t=this.selection.editableElement;t&&this.domConverter.focus(t)}}}function zp(i,t,e){const n=t instanceof Array?t:t.childNodes,o=n[e];if(_t(o))return o.data=cl+o.data,o;{const r=i.createTextNode(cl);return Array.isArray(t)?n.splice(e,0,r):$a(t,e,r),r}}function N0(i,t){return qt(i)&&qt(t)&&!_t(i)&&!_t(t)&&!zs(i)&&!zs(t)&&i.tagName.toLowerCase()===t.tagName.toLowerCase()}function O0(i,t){return qt(i)&&qt(t)&&_t(i)&&_t(t)}function B0(i,t,e){return t===e||(_t(t)&&_t(e)?t.data===e.data:!(!i.isBlockFiller(t)||!i.isBlockFiller(e)))}function jp(i,t){const e=i.data;if(e==t)return;const n=x(e,t);for(const o of n)o.type==="insert"?i.insertData(o.index,o.values.join("")):i.deleteData(o.index,o.howMany)}const L0=Lp(B.document),P0=Op(B.document),R0=Bp(B.document),bd="data-ck-unsafe-attribute-",Fp="data-ck-unsafe-element";class _d{constructor(t,{blockFillerMode:e,renderingMode:n="editing"}={}){this._domToViewMapping=new WeakMap,this._viewToDomMapping=new WeakMap,this._fakeSelectionMapping=new WeakMap,this._rawContentElementMatcher=new Yo,this._inlineObjectElementMatcher=new Yo,this._elementsWithTemporaryCustomProperties=new Set,this.document=t,this.renderingMode=n,this.blockFillerMode=e||(n==="editing"?"br":"nbsp"),this.preElements=["pre"],this.blockElements=["address","article","aside","blockquote","caption","center","dd","details","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","legend","li","main","menu","nav","ol","p","pre","section","summary","table","tbody","td","tfoot","th","thead","tr","ul"],this.inlineObjectElements=["object","iframe","input","button","textarea","select","option","video","embed","audio","img","canvas"],this.unsafeElements=["script","style"],this._domDocument=this.renderingMode==="editing"?B.document:B.document.implementation.createHTMLDocument("")}bindFakeSelection(t,e){this._fakeSelectionMapping.set(t,new pr(e))}fakeSelectionToView(t){return this._fakeSelectionMapping.get(t)}bindElements(t,e){this._domToViewMapping.set(t,e),this._viewToDomMapping.set(e,t)}unbindDomElement(t){const e=this._domToViewMapping.get(t);if(e){this._domToViewMapping.delete(t),this._viewToDomMapping.delete(e);for(const n of Array.from(t.children))this.unbindDomElement(n)}}bindDocumentFragments(t,e){this._domToViewMapping.set(t,e),this._viewToDomMapping.set(e,t)}shouldRenderAttribute(t,e,n){return this.renderingMode==="data"||!(t=t.toLowerCase()).startsWith("on")&&(t!=="srcdoc"||!e.match(/\bon\S+\s*=|javascript:|<\s*\/*script/i))&&(n==="img"&&(t==="src"||t==="srcset")||n==="source"&&t==="srcset"||!e.match(/^\s*(javascript:|data:(image\/svg|text\/x?html))/i))}setContentOf(t,e){if(this.renderingMode==="data")return void(t.innerHTML=e);const n=new DOMParser().parseFromString(e,"text/html"),o=n.createDocumentFragment(),r=n.body.childNodes;for(;r.length>0;)o.appendChild(r[0]);const s=n.createTreeWalker(o,NodeFilter.SHOW_ELEMENT),a=[];let c;for(;c=s.nextNode();)a.push(c);for(const l of a){for(const p of l.getAttributeNames())this.setDomElementAttribute(l,p,l.getAttribute(p));const u=l.tagName.toLowerCase();this._shouldRenameElement(u)&&(Up(u),l.replaceWith(this._createReplacementDomElement(u,l)))}for(;t.firstChild;)t.firstChild.remove();t.append(o)}viewToDom(t,e={}){if(t.is("$text")){const n=this._processDataFromViewText(t);return this._domDocument.createTextNode(n)}{const n=t;if(this.mapViewToDom(n)){if(!n.getCustomProperty("editingPipeline:doNotReuseOnce"))return this.mapViewToDom(n);this._elementsWithTemporaryCustomProperties.add(n)}let o;if(n.is("documentFragment"))o=this._domDocument.createDocumentFragment(),e.bind&&this.bindDocumentFragments(o,n);else{if(n.is("uiElement"))return o=n.name==="$comment"?this._domDocument.createComment(n.getCustomProperty("$rawContent")):n.render(this._domDocument,this),e.bind&&this.bindElements(o,n),o;this._shouldRenameElement(n.name)?(Up(n.name),o=this._createReplacementDomElement(n.name)):o=n.hasAttribute("xmlns")?this._domDocument.createElementNS(n.getAttribute("xmlns"),n.name):this._domDocument.createElement(n.name),n.is("rawElement")&&n.render(o,this),e.bind&&this.bindElements(o,n);for(const r of n.getAttributeKeys())this.setDomElementAttribute(o,r,n.getAttribute(r),n)}if(e.withChildren!==!1)for(const r of this.viewChildrenToDom(n,e))o instanceof HTMLTemplateElement?o.content.appendChild(r):o.appendChild(r);return o}}setDomElementAttribute(t,e,n,o){const r=this.shouldRenderAttribute(e,n,t.tagName.toLowerCase())||o&&o.shouldRenderUnsafeAttribute(e);r||It("domconverter-unsafe-attribute-detected",{domElement:t,key:e,value:n}),function(s){try{B.document.createAttribute(s)}catch{return!1}return!0}(e)?(t.hasAttribute(e)&&!r?t.removeAttribute(e):t.hasAttribute(bd+e)&&r&&t.removeAttribute(bd+e),t.setAttribute(r?e:bd+e,n)):It("domconverter-invalid-attribute-detected",{domElement:t,key:e,value:n})}removeDomElementAttribute(t,e){e!=Fp&&(t.removeAttribute(e),t.removeAttribute(bd+e))}*viewChildrenToDom(t,e={}){const n=t.getFillerOffset&&t.getFillerOffset();let o=0;for(const r of t.getChildren()){n===o&&(yield this._getBlockFiller());const s=r.is("element")&&!!r.getCustomProperty("dataPipeline:transparentRendering")&&!En(r.getAttributes());s&&this.renderingMode=="data"?yield*this.viewChildrenToDom(r,e):(s&&It("domconverter-transparent-rendering-unsupported-in-editing-pipeline",{viewElement:r}),yield this.viewToDom(r,e)),o++}n===o&&(yield this._getBlockFiller())}viewRangeToDom(t){const e=this.viewPositionToDom(t.start),n=this.viewPositionToDom(t.end),o=this._domDocument.createRange();return o.setStart(e.parent,e.offset),o.setEnd(n.parent,n.offset),o}viewPositionToDom(t){const e=t.parent;if(e.is("$text")){const n=this.findCorrespondingDomText(e);if(!n)return null;let o=t.offset;return mo(n)&&(o+=gr),{parent:n,offset:o}}{let n,o,r;if(t.offset===0){if(n=this.mapViewToDom(e),!n)return null;r=n.childNodes[0]}else{const s=t.nodeBefore;if(o=s.is("$text")?this.findCorrespondingDomText(s):this.mapViewToDom(s),!o)return null;n=o.parentNode,r=o.nextSibling}return _t(r)&&mo(r)?{parent:r,offset:gr}:{parent:n,offset:o?Rs(o)+1:0}}}domToView(t,e={}){const n=[],o=this._domToView(t,e,n),r=o.next().value;return r?(o.next(),this._processDomInlineNodes(null,n,e),r.is("$text")&&r.data.length==0?null:r):null}*domChildrenToView(t,e={},n=[]){let o=[];o=t instanceof HTMLTemplateElement?[...t.content.childNodes]:[...t.childNodes];for(let r=0;r<o.length;r++){const s=o[r],a=this._domToView(s,e,n),c=a.next().value;c!==null&&(this._isBlockViewElement(c)&&this._processDomInlineNodes(t,n,e),yield c,a.next())}this._processDomInlineNodes(t,n,e)}domSelectionToView(t){if(function(o){if(!U.isGecko||!o.rangeCount)return!1;const r=o.getRangeAt(0).startContainer;try{Object.prototype.toString.call(r)}catch{return!0}return!1}(t))return new pr([]);if(t.rangeCount===1){let o=t.getRangeAt(0).startContainer;_t(o)&&(o=o.parentNode);const r=this.fakeSelectionToView(o);if(r)return r}const e=this.isDomSelectionBackward(t),n=[];for(let o=0;o<t.rangeCount;o++){const r=t.getRangeAt(o),s=this.domRangeToView(r);s&&n.push(s)}return new pr(n,{backward:e})}domRangeToView(t){const e=this.domPositionToView(t.startContainer,t.startOffset),n=this.domPositionToView(t.endContainer,t.endOffset);return e&&n?new se(e,n):null}domPositionToView(t,e=0){if(this.isBlockFiller(t))return this.domPositionToView(t.parentNode,Rs(t));const n=this.mapDomToView(t);if(n&&(n.is("uiElement")||n.is("rawElement")))return zt._createBefore(n);if(_t(t)){if(oc(t))return this.domPositionToView(t.parentNode,Rs(t));const o=this.findCorrespondingViewText(t);let r=e;return o?(mo(t)&&(r-=gr,r=r<0?0:r),new zt(o,r)):null}if(e===0){const o=this.mapDomToView(t);if(o)return new zt(o,0)}else{const o=t.childNodes[e-1];if(_t(o)&&oc(o)||o&&this.isBlockFiller(o))return this.domPositionToView(o.parentNode,Rs(o));const r=_t(o)?this.findCorrespondingViewText(o):this.mapDomToView(o);if(r&&r.parent)return new zt(r.parent,r.index+1)}return null}mapDomToView(t){return this.getHostViewElement(t)||this._domToViewMapping.get(t)}findCorrespondingViewText(t){if(oc(t))return null;const e=this.getHostViewElement(t);if(e)return e;const n=t.previousSibling;if(n){if(!this.isElement(n))return null;const o=this.mapDomToView(n);if(o){const r=o.nextSibling;return r instanceof Pe?r:null}}else{const o=this.mapDomToView(t.parentNode);if(o){const r=o.getChild(0);return r instanceof Pe?r:null}}return null}mapViewToDom(t){return this._viewToDomMapping.get(t)}findCorrespondingDomText(t){const e=t.previousSibling;return e&&this.mapViewToDom(e)?this.mapViewToDom(e).nextSibling:!e&&t.parent&&this.mapViewToDom(t.parent)?this.mapViewToDom(t.parent).childNodes[0]:null}focus(t){const e=this.mapViewToDom(t);if(e&&e.ownerDocument.activeElement!==e){const{scrollX:n,scrollY:o}=B.window,r=[];Vp(e,s=>{const{scrollLeft:a,scrollTop:c}=s;r.push([a,c])}),e.focus(),Vp(e,s=>{const[a,c]=r.shift();s.scrollLeft=a,s.scrollTop=c}),B.window.scrollTo(n,o)}}_clearDomSelection(){const t=this.mapViewToDom(this.document.selection.editableElement);if(!t)return;const e=t.ownerDocument.defaultView.getSelection(),n=this.domSelectionToView(e);n&&n.rangeCount>0&&e.removeAllRanges()}isElement(t){return t&&t.nodeType==Node.ELEMENT_NODE}isDocumentFragment(t){return t&&t.nodeType==Node.DOCUMENT_FRAGMENT_NODE}isBlockFiller(t){return this.blockFillerMode=="br"?t.isEqualNode(L0):!(t.tagName!=="BR"||!Hp(t,this.blockElements)||t.parentNode.childNodes.length!==1)||t.isEqualNode(R0)||function(e,n){return e.isEqualNode(P0)&&Hp(e,n)&&e.parentNode.childNodes.length===1}(t,this.blockElements)}isDomSelectionBackward(t){if(t.isCollapsed)return!1;const e=this._domDocument.createRange();try{e.setStart(t.anchorNode,t.anchorOffset),e.setEnd(t.focusNode,t.focusOffset)}catch{return!1}const n=e.collapsed;return e.detach(),n}getHostViewElement(t){const e=function(n){const o=[];let r=n;for(;r&&r.nodeType!=Node.DOCUMENT_NODE;)o.unshift(r),r=r.parentNode;return o}(t);for(e.pop();e.length;){const n=e.pop(),o=this._domToViewMapping.get(n);if(o&&(o.is("uiElement")||o.is("rawElement")))return o}return null}isDomSelectionCorrect(t){return this._isDomSelectionPositionCorrect(t.anchorNode,t.anchorOffset)&&this._isDomSelectionPositionCorrect(t.focusNode,t.focusOffset)}registerRawContentMatcher(t){this._rawContentElementMatcher.add(t)}registerInlineObjectMatcher(t){this._inlineObjectElementMatcher.add(t)}_clearTemporaryCustomProperties(){for(const t of this._elementsWithTemporaryCustomProperties)t._removeCustomProperty("editingPipeline:doNotReuseOnce");this._elementsWithTemporaryCustomProperties.clear()}_getBlockFiller(){switch(this.blockFillerMode){case"nbsp":return Op(this._domDocument);case"markedNbsp":return Bp(this._domDocument);case"br":return Lp(this._domDocument)}}_isDomSelectionPositionCorrect(t,e){if(_t(t)&&mo(t)&&e<gr||this.isElement(t)&&mo(t.childNodes[e]))return!1;const n=this.mapDomToView(t);return!n||!n.is("uiElement")&&!n.is("rawElement")}*_domToView(t,e,n){if(this.isBlockFiller(t))return null;const o=this.getHostViewElement(t);if(o)return o;if(zs(t)&&e.skipComments)return null;if(_t(t)){if(oc(t))return null;{const r=t.data;if(r==="")return null;const s=new Pe(this.document,r);return n.push(s),s}}{let r=this.mapDomToView(t);if(r)return this._isInlineObjectElement(r)&&n.push(r),r;if(this.isDocumentFragment(t))r=new ya(this.document),e.bind&&this.bindDocumentFragments(t,r);else{r=this._createViewElement(t,e),e.bind&&this.bindElements(t,r);const a=t.attributes;if(a)for(let c=a.length,l=0;l<c;l++)r._setAttribute(a[l].name,a[l].value);if(this._isViewElementWithRawContent(r,e))return r._setCustomProperty("$rawContent",t.innerHTML),this._isBlockViewElement(r)||n.push(r),r;if(zs(t))return r._setCustomProperty("$rawContent",t.data),r}yield r;const s=[];if(e.withChildren!==!1)for(const a of this.domChildrenToView(t,e,s))r._appendChild(a);if(this._isInlineObjectElement(r))n.push(r);else for(const a of s)n.push(a)}}_processDomInlineNodes(t,e,n){if(!e.length||t&&!this.isDocumentFragment(t)&&!this._isBlockDomElement(t))return;let o=!1;for(let r=0;r<e.length;r++){const s=e[r];if(!s.is("$text")){o=!1;continue}let a,c=!1;if(z0(s,this.preElements))a=Pp(s.data);else{a=s.data.replace(/[ \n\t\r]{1,}/g," "),c=/[^\S\u00A0]/.test(a.charAt(a.length-1));const l=r>0?e[r-1]:null,u=r+1<e.length?e[r+1]:null,p=!l||l.is("element")&&l.name=="br"||o,k=!u&&!mo(s.data);n.withChildren!==!1&&(p&&(a=a.replace(/^ /,"")),k&&(a=a.replace(/ $/,""))),a=Pp(a),a=a.replace(/ \u00A0/g,"  ");const v=u&&u.is("element")&&u.name!="br",y=u&&u.is("$text")&&u.data.charAt(0)==" ";(/[ \u00A0]\u00A0$/.test(a)||!u||v||y)&&(a=a.replace(/\u00A0$/," ")),(p||l&&l.is("element")&&l.name!="br")&&(a=a.replace(/^\u00A0/," "))}a.length==0&&s.parent?(s._remove(),e.splice(r,1),r--):(s._data=a,o=c)}e.length=0}_processDataFromViewText(t){let e=t.data;if(t.getAncestors().some(n=>this.preElements.includes(n.name)))return e;if(e.charAt(0)==" "){const n=this._getTouchingInlineViewNode(t,!1);!(n&&n.is("$textProxy")&&this._nodeEndsWithSpace(n))&&n||(e=" "+e.substr(1))}if(e.charAt(e.length-1)==" "){const n=this._getTouchingInlineViewNode(t,!0),o=n&&n.is("$textProxy")&&n.data.charAt(0)==" ";e.charAt(e.length-2)!=" "&&n&&!o||(e=e.substr(0,e.length-1)+" ")}return e.replace(/ {2}/g,"  ")}_nodeEndsWithSpace(t){if(t.getAncestors().some(n=>this.preElements.includes(n.name)))return!1;const e=this._processDataFromViewText(t);return e.charAt(e.length-1)==" "}_getTouchingInlineViewNode(t,e){const n=new va({startPosition:e?zt._createAfter(t):zt._createBefore(t),direction:e?"forward":"backward"});for(const o of n){if(o.item.is("element","br"))return null;if(this._isInlineObjectElement(o.item))return o.item;if(o.item.is("containerElement"))return null;if(o.item.is("$textProxy"))return o.item}return null}_isBlockDomElement(t){return this.isElement(t)&&this.blockElements.includes(t.tagName.toLowerCase())}_isBlockViewElement(t){return t.is("element")&&this.blockElements.includes(t.name)}_isInlineObjectElement(t){return!!t.is("element")&&(t.name=="br"||this.inlineObjectElements.includes(t.name)||!!this._inlineObjectElementMatcher.match(t))}_createViewElement(t,e){if(zs(t))return new kd(this.document,"$comment");const n=e.keepOriginalCase?t.tagName:t.tagName.toLowerCase();return new go(this.document,n)}_isViewElementWithRawContent(t,e){return e.withChildren!==!1&&t.is("element")&&!!this._rawContentElementMatcher.match(t)}_shouldRenameElement(t){const e=t.toLowerCase();return this.renderingMode==="editing"&&this.unsafeElements.includes(e)}_createReplacementDomElement(t,e){const n=this._domDocument.createElement("span");if(n.setAttribute(Fp,t),e){for(;e.firstChild;)n.appendChild(e.firstChild);for(const o of e.getAttributeNames())n.setAttribute(o,e.getAttribute(o))}return n}}function z0(i,t){return i.getAncestors().some(e=>e.is("element")&&t.includes(e.name))}function Vp(i,t){let e=i;for(;e;)t(e),e=e.parentElement}function Hp(i,t){const e=i.parentNode;return!!e&&!!e.tagName&&t.includes(e.tagName.toLowerCase())}function Up(i){i==="script"&&It("domconverter-unsafe-script-element-detected"),i==="style"&&It("domconverter-unsafe-style-element-detected")}class Hr extends dt(){constructor(t){super(),this._isEnabled=!1,this.view=t,this.document=t.document}get isEnabled(){return this._isEnabled}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}destroy(){this.disable(),this.stopListening()}checkShouldIgnoreEventFromTarget(t){return t&&t.nodeType===3&&(t=t.parentNode),!(!t||t.nodeType!==1)&&t.matches("[data-cke-ignore-events], [data-cke-ignore-events] *")}}const $p=Xl(function(i,t){Vi(t,z(t),i)});class rc{constructor(t,e,n){this.view=t,this.document=t.document,this.domEvent=e,this.domTarget=e.target,$p(this,n)}get target(){return this.view.domConverter.mapDomToView(this.domTarget)}preventDefault(){this.domEvent.preventDefault()}stopPropagation(){this.domEvent.stopPropagation()}}class qs extends Hr{constructor(){super(...arguments),this.useCapture=!1}observe(t){(typeof this.domEventType=="string"?[this.domEventType]:this.domEventType).forEach(e=>{this.listenTo(t,e,(n,o)=>{this.isEnabled&&!this.checkShouldIgnoreEventFromTarget(o.target)&&this.onDomEvent(o)},{useCapture:this.useCapture})})}stopObserving(t){this.stopListening(t)}fire(t,e,n){this.isEnabled&&this.document.fire(t,new rc(this.view,e,n))}}class j0 extends qs{constructor(){super(...arguments),this.domEventType=["keydown","keyup"]}onDomEvent(t){const e={keyCode:t.keyCode,altKey:t.altKey,ctrlKey:t.ctrlKey,shiftKey:t.shiftKey,metaKey:t.metaKey,get keystroke(){return Fs(this)}};this.fire(t.type,t,e)}}const kh=function(){return Vt.Date.now()};var F0=/\s/;const V0=function(i){for(var t=i.length;t--&&F0.test(i.charAt(t)););return t};var H0=/^\s+/;const U0=function(i){return i&&i.slice(0,V0(i)+1).replace(H0,"")};var $0=/^[-+]0x[0-9a-f]+$/i,W0=/^0b[01]+$/i,q0=/^0o[0-7]+$/i,G0=parseInt;const Wp=function(i){if(typeof i=="number")return i;if(tc(i))return NaN;if(be(i)){var t=typeof i.valueOf=="function"?i.valueOf():i;i=be(t)?t+"":t}if(typeof i!="string")return i===0?i:+i;i=U0(i);var e=W0.test(i);return e||q0.test(i)?G0(i.slice(2),e?2:8):$0.test(i)?NaN:+i};var K0=Math.max,Y0=Math.min;const sc=function(i,t,e){var n,o,r,s,a,c,l=0,u=!1,p=!1,k=!0;if(typeof i!="function")throw new TypeError("Expected a function");function v(et){var ut=n,vt=o;return n=o=void 0,l=et,s=i.apply(vt,ut)}function y(et){var ut=et-c;return c===void 0||ut>=t||ut<0||p&&et-l>=r}function I(){var et=kh();if(y(et))return F(et);a=setTimeout(I,function(ut){var vt=t-(ut-c);return p?Y0(vt,r-(ut-l)):vt}(et))}function F(et){return a=void 0,k&&n?v(et):(n=o=void 0,s)}function G(){var et=kh(),ut=y(et);if(n=arguments,o=this,c=et,ut){if(a===void 0)return function(vt){return l=vt,a=setTimeout(I,t),u?v(vt):s}(c);if(p)return clearTimeout(a),a=setTimeout(I,t),v(c)}return a===void 0&&(a=setTimeout(I,t)),s}return t=Wp(t)||0,be(e)&&(u=!!e.leading,r=(p="maxWait"in e)?K0(Wp(e.maxWait)||0,t):r,k="trailing"in e?!!e.trailing:k),G.cancel=function(){a!==void 0&&clearTimeout(a),l=0,n=c=o=a=void 0},G.flush=function(){return a===void 0?s:F(kh())},G};class Q0 extends Hr{constructor(t){super(t),this._fireSelectionChangeDoneDebounced=sc(e=>{this.document.fire("selectionChangeDone",e)},200)}observe(){const t=this.document;t.on("arrowKey",(e,n)=>{t.selection.isFake&&this.isEnabled&&n.preventDefault()},{context:"$capture"}),t.on("arrowKey",(e,n)=>{t.selection.isFake&&this.isEnabled&&this._handleSelectionMove(n.keyCode)},{priority:"lowest"})}stopObserving(){}destroy(){super.destroy(),this._fireSelectionChangeDoneDebounced.cancel()}_handleSelectionMove(t){const e=this.document.selection,n=new pr(e.getRanges(),{backward:e.isBackward,fake:!1});t!=Ae.arrowleft&&t!=Ae.arrowup||n.setTo(n.getFirstPosition()),t!=Ae.arrowright&&t!=Ae.arrowdown||n.setTo(n.getLastPosition());const o={oldSelection:e,newSelection:n,domSelection:null};this.document.fire("selectionChange",o),this._fireSelectionChangeDoneDebounced(o)}}const Z0=function(i){return this.__data__.set(i,"__lodash_hash_undefined__"),this},J0=function(i){return this.__data__.has(i)};function wd(i){var t=-1,e=i==null?0:i.length;for(this.__data__=new On;++t<e;)this.add(i[t])}wd.prototype.add=wd.prototype.push=Z0,wd.prototype.has=J0;const X0=wd,ty=function(i,t){for(var e=-1,n=i==null?0:i.length;++e<n;)if(t(i[e],e,i))return!0;return!1},ey=function(i,t){return i.has(t)},qp=function(i,t,e,n,o,r){var s=1&e,a=i.length,c=t.length;if(a!=c&&!(s&&c>a))return!1;var l=r.get(i),u=r.get(t);if(l&&u)return l==t&&u==i;var p=-1,k=!0,v=2&e?new X0:void 0;for(r.set(i,t),r.set(t,i);++p<a;){var y=i[p],I=t[p];if(n)var F=s?n(I,y,p,t,i,r):n(y,I,p,i,t,r);if(F!==void 0){if(F)continue;k=!1;break}if(v){if(!ty(t,function(G,et){if(!ey(v,et)&&(y===G||o(y,G,e,n,r)))return v.push(et)})){k=!1;break}}else if(y!==I&&!o(y,I,e,n,r)){k=!1;break}}return r.delete(i),r.delete(t),k},ny=function(i){var t=-1,e=Array(i.size);return i.forEach(function(n,o){e[++t]=[o,n]}),e},iy=function(i){var t=-1,e=Array(i.size);return i.forEach(function(n){e[++t]=n}),e};var Gp=Ie?Ie.prototype:void 0,bh=Gp?Gp.valueOf:void 0;const oy=function(i,t,e,n,o,r,s){switch(e){case"[object DataView]":if(i.byteLength!=t.byteLength||i.byteOffset!=t.byteOffset)return!1;i=i.buffer,t=t.buffer;case"[object ArrayBuffer]":return!(i.byteLength!=t.byteLength||!r(new Oi(i),new Oi(t)));case"[object Boolean]":case"[object Date]":case"[object Number]":return To(+i,+t);case"[object Error]":return i.name==t.name&&i.message==t.message;case"[object RegExp]":case"[object String]":return i==t+"";case"[object Map]":var a=ny;case"[object Set]":var c=1&n;if(a||(a=iy),i.size!=t.size&&!c)return!1;var l=s.get(i);if(l)return l==t;n|=2,s.set(i,t);var u=qp(a(i),a(t),n,o,r,s);return s.delete(i),u;case"[object Symbol]":if(bh)return bh.call(i)==bh.call(t)}return!1};var ry=Object.prototype.hasOwnProperty;const sy=function(i,t,e,n,o,r){var s=1&e,a=Be(i),c=a.length;if(c!=Be(t).length&&!s)return!1;for(var l=c;l--;){var u=a[l];if(!(s?u in t:ry.call(t,u)))return!1}var p=r.get(i),k=r.get(t);if(p&&k)return p==t&&k==i;var v=!0;r.set(i,t),r.set(t,i);for(var y=s;++l<c;){var I=i[u=a[l]],F=t[u];if(n)var G=s?n(F,I,u,t,i,r):n(I,F,u,i,t,r);if(!(G===void 0?I===F||o(I,F,e,n,r):G)){v=!1;break}y||(y=u=="constructor")}if(v&&!y){var et=i.constructor,ut=t.constructor;et==ut||!("constructor"in i)||!("constructor"in t)||typeof et=="function"&&et instanceof et&&typeof ut=="function"&&ut instanceof ut||(v=!1)}return r.delete(i),r.delete(t),v};var Kp="[object Arguments]",Yp="[object Array]",Ad="[object Object]",Qp=Object.prototype.hasOwnProperty;const ay=function(i,t,e,n,o,r){var s=cn(i),a=cn(t),c=s?Yp:on(i),l=a?Yp:on(t),u=(c=c==Kp?Ad:c)==Ad,p=(l=l==Kp?Ad:l)==Ad,k=c==l;if(k&&lr(i)){if(!lr(t))return!1;s=!0,u=!1}if(k&&!u)return r||(r=new nn),s||Wn(i)?qp(i,t,e,n,o,r):oy(i,t,c,e,n,o,r);if(!(1&e)){var v=u&&Qp.call(i,"__wrapped__"),y=p&&Qp.call(t,"__wrapped__");if(v||y){var I=v?i.value():i,F=y?t.value():t;return r||(r=new nn),o(I,F,e,n,r)}}return!!k&&(r||(r=new nn),sy(i,t,e,n,o,r))},vd=function i(t,e,n,o,r){return t===e||(t==null||e==null||!pn(t)&&!pn(e)?t!=t&&e!=e:ay(t,e,n,o,i,r))},cy=function(i,t,e){var n=(e=typeof e=="function"?e:void 0)?e(i,t):void 0;return n===void 0?vd(i,t,void 0,e):!!n};class Zp extends Hr{constructor(t){super(t),this._config={childList:!0,characterData:!0,subtree:!0},this.domConverter=t.domConverter,this.renderer=t._renderer,this._domElements=new Set,this._mutationObserver=new window.MutationObserver(this._onMutations.bind(this))}flush(){this._onMutations(this._mutationObserver.takeRecords())}observe(t){this._domElements.add(t),this.isEnabled&&this._mutationObserver.observe(t,this._config)}stopObserving(t){if(this._domElements.delete(t),this.isEnabled){this._mutationObserver.disconnect();for(const e of this._domElements)this._mutationObserver.observe(e,this._config)}}enable(){super.enable();for(const t of this._domElements)this._mutationObserver.observe(t,this._config)}disable(){super.disable(),this._mutationObserver.disconnect()}destroy(){super.destroy(),this._mutationObserver.disconnect()}_onMutations(t){if(t.length===0)return;const e=this.domConverter,n=new Set,o=new Set;for(const s of t){const a=e.mapDomToView(s.target);a&&(a.is("uiElement")||a.is("rawElement")||s.type!=="childList"||this._isBogusBrMutation(s)||o.add(a))}for(const s of t){const a=e.mapDomToView(s.target);if((!a||!a.is("uiElement")&&!a.is("rawElement"))&&s.type==="characterData"){const c=e.findCorrespondingViewText(s.target);c&&!o.has(c.parent)?n.add(c):!c&&mo(s.target)&&o.add(e.mapDomToView(s.target.parentNode))}}let r=!1;for(const s of n)r=!0,this.renderer.markToSync("text",s);for(const s of o){const a=e.mapViewToDom(s),c=Array.from(s.getChildren()),l=Array.from(e.domChildrenToView(a,{withChildren:!1}));cy(c,l,ly)||(r=!0,this.renderer.markToSync("children",s))}r&&this.view.forceRender()}_isBogusBrMutation(t){let e=null;return t.nextSibling===null&&t.removedNodes.length===0&&t.addedNodes.length==1&&(e=this.domConverter.domToView(t.addedNodes[0],{withChildren:!1})),e&&e.is("element","br")}}function ly(i,t){if(!Array.isArray(i))return i===t||!(!i.is("$text")||!t.is("$text"))&&i.data===t.data}class Cd extends qs{constructor(t){super(t),this._isFocusChanging=!1,this.domEventType=["focus","blur"],this.useCapture=!0;const e=this.document;e.on("focus",()=>{this._isFocusChanging=!0,this._renderTimeoutId=setTimeout(()=>{this.flush(),t.change(()=>{})},50)}),e.on("blur",(n,o)=>{const r=e.selection.editableElement;r!==null&&r!==o.target||(e.isFocused=!1,this._isFocusChanging=!1,t.change(()=>{}))})}flush(){this._isFocusChanging&&(this._isFocusChanging=!1,this.document.isFocused=!0)}onDomEvent(t){this.fire(t.type,t)}destroy(){this._renderTimeoutId&&clearTimeout(this._renderTimeoutId),super.destroy()}}class dy extends Hr{constructor(t){super(t),this.mutationObserver=t.getObserver(Zp),this.focusObserver=t.getObserver(Cd),this.selection=this.document.selection,this.domConverter=t.domConverter,this._documents=new WeakSet,this._fireSelectionChangeDoneDebounced=sc(e=>{this.document.fire("selectionChangeDone",e)},200),this._clearInfiniteLoopInterval=setInterval(()=>this._clearInfiniteLoop(),1e3),this._documentIsSelectingInactivityTimeoutDebounced=sc(()=>this.document.isSelecting=!1,5e3),this._loopbackCounter=0}observe(t){const e=t.ownerDocument,n=()=>{this.document.isSelecting&&(this._handleSelectionChange(null,e),this.document.isSelecting=!1,this._documentIsSelectingInactivityTimeoutDebounced.cancel())};this.listenTo(t,"selectstart",()=>{this.document.isSelecting=!0,this._documentIsSelectingInactivityTimeoutDebounced()},{priority:"highest"}),this.listenTo(t,"keydown",n,{priority:"highest",useCapture:!0}),this.listenTo(t,"keyup",n,{priority:"highest",useCapture:!0}),this._documents.has(e)||(this.listenTo(e,"mouseup",n,{priority:"highest",useCapture:!0}),this.listenTo(e,"selectionchange",(o,r)=>{this.document.isComposing&&!U.isAndroid||(this._handleSelectionChange(r,e),this._documentIsSelectingInactivityTimeoutDebounced())}),this._documents.add(e))}stopObserving(t){this.stopListening(t)}destroy(){super.destroy(),clearInterval(this._clearInfiniteLoopInterval),this._fireSelectionChangeDoneDebounced.cancel(),this._documentIsSelectingInactivityTimeoutDebounced.cancel()}_reportInfiniteLoop(){}_handleSelectionChange(t,e){if(!this.isEnabled)return;const n=e.defaultView.getSelection();if(this.checkShouldIgnoreEventFromTarget(n.anchorNode))return;this.mutationObserver.flush();const o=this.domConverter.domSelectionToView(n);if(o.rangeCount!=0){if(this.view.hasDomSelection=!0,this.focusObserver.flush(),!this.selection.isEqual(o)||!this.domConverter.isDomSelectionCorrect(n))if(++this._loopbackCounter>60)this._reportInfiniteLoop();else if(this.selection.isSimilar(o))this.view.forceRender();else{const r={oldSelection:this.selection,newSelection:o,domSelection:n};this.document.fire("selectionChange",r),this._fireSelectionChangeDoneDebounced(r)}}else this.view.hasDomSelection=!1}_clearInfiniteLoop(){this._loopbackCounter=0}}class uy extends qs{constructor(t){super(t),this.domEventType=["compositionstart","compositionupdate","compositionend"];const e=this.document;e.on("compositionstart",()=>{e.isComposing=!0},{priority:"low"}),e.on("compositionend",()=>{e.isComposing=!1},{priority:"low"})}onDomEvent(t){this.fire(t.type,t,{data:t.data})}}class Jp{constructor(t,e={}){this._files=e.cacheFiles?Xp(t):null,this._native=t}get files(){return this._files||(this._files=Xp(this._native)),this._files}get types(){return this._native.types}getData(t){return this._native.getData(t)}setData(t,e){this._native.setData(t,e)}set effectAllowed(t){this._native.effectAllowed=t}get effectAllowed(){return this._native.effectAllowed}set dropEffect(t){this._native.dropEffect=t}get dropEffect(){return this._native.dropEffect}setDragImage(t,e,n){this._native.setDragImage(t,e,n)}get isCanceled(){return this._native.dropEffect=="none"||!!this._native.mozUserCancelled}}function Xp(i){const t=Array.from(i.files||[]),e=Array.from(i.items||[]);return t.length?t:e.filter(n=>n.kind==="file").map(n=>n.getAsFile())}class hy extends qs{constructor(){super(...arguments),this.domEventType="beforeinput"}onDomEvent(t){const e=t.getTargetRanges(),n=this.view,o=n.document;let r=null,s=null,a=[];if(t.dataTransfer&&(r=new Jp(t.dataTransfer)),t.data!==null?s=t.data:r&&(s=r.getData("text/plain")),o.selection.isFake)a=Array.from(o.selection.getRanges());else if(e.length)a=e.map(c=>{const l=n.domConverter.domPositionToView(c.startContainer,c.startOffset),u=n.domConverter.domPositionToView(c.endContainer,c.endOffset);return l?n.createRange(l,u):u?n.createRange(u):void 0}).filter(c=>!!c);else if(U.isAndroid){const c=t.target.ownerDocument.defaultView.getSelection();a=Array.from(n.domConverter.domSelectionToView(c).getRanges())}if(U.isAndroid&&t.inputType=="insertCompositionText"&&s&&s.endsWith(`
`))this.fire(t.type,t,{inputType:"insertParagraph",targetRanges:[n.createRange(a[0].end)]});else if(t.inputType=="insertText"&&s&&s.includes(`
`,isColorInherited:!1}),n.extendTemplate({attributes:{style:{width:"53px",height:"10px"}}}),this.setTemplate({tag:"div",attributes:{class:["ck","ck-powered-by"],"aria-hidden":!0},children:[{tag:"a",attributes:{href:"https://ckeditor.com/?utm_source=ckeditor&utm_medium=referral&utm_campaign=701Dn000000hVgmIAE_powered_by_ckeditor_logo",target:"_blank",tabindex:"-1"},children:[...e?[{tag:"span",attributes:{class:["ck","ck-powered-by__label"]},children:[e]}]:[],n],on:{dragstart:o.to(r=>r.preventDefault())}}]})}}function uk(i,t,e){return(n,o)=>{const r=new Xt(i);if(r.width<fx||r.height<hx)return null;let s;s=t.position==="inside"?r.bottom-o.height:r.bottom-o.height/2,s-=t.verticalOffset;const a=e(r,o),c=n.clone().moveTo(a,s).getIntersection(o.clone().moveTo(a,s)).getVisible();return!c||c.getArea()<o.getArea()?null:{top:s,left:a,name:`position_${t.position}-side_${t.side}`,config:{withArrow:!1}}}}function hk(i){const t=i.config.get("ui.poweredBy"),e=t&&t.position||"border";return ux({position:e,label:px,verticalOffset:e==="inside"?5:0,horizontalOffset:5,side:i.locale.contentLanguageDirection==="ltr"?"right":"left"},t)}var fk=V(1801),kx={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Lt()(fk.A,kx),fk.A.locals;const pk={POLITE:"polite",ASSERTIVE:"assertive"};class bx{constructor(t){this.editor=t,t.once("ready",()=>{for(const e of Object.values(pk))this.announce("",e)})}announce(t,e=pk.POLITE){const n=this.editor;if(!n.ui.view)return;this.view||(this.view=new _x(n.locale),n.ui.view.body.add(this.view));const{politeness:o,isUnsafeHTML:r}=typeof e=="string"?{politeness:e}:e;let s=this.view.regionViews.find(a=>a.politeness===o);s||(s=new wx(n,o),this.view.regionViews.add(s)),s.announce({announcement:t,isUnsafeHTML:r})}}class _x extends Yt{constructor(t){super(t),this.regionViews=this.createCollection(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-aria-live-announcer"]},children:this.regionViews})}}class wx extends Yt{constructor(t,e){super(t.locale),this.setTemplate({tag:"div",attributes:{role:"region","aria-live":e,"aria-relevant":"additions"},children:[{tag:"ul",attributes:{class:["ck","ck-aria-live-region-list"]}}]}),t.on("destroy",()=>{this._pruneAnnouncementsInterval!==null&&(clearInterval(this._pruneAnnouncementsInterval),this._pruneAnnouncementsInterval=null)}),this.politeness=e,this._domConverter=t.data.htmlProcessor.domConverter,this._pruneAnnouncementsInterval=setInterval(()=>{this.element&&this._listElement.firstChild&&this._listElement.firstChild.remove()},5e3)}announce({announcement:t,isUnsafeHTML:e}){if(!t.trim().length)return;const n=document.createElement("li");e?this._domConverter.setContentOf(n,t):n.innerText=t,this._listElement.appendChild(n)}get _listElement(){return this.element.querySelector("ul")}}var Ax=Object.defineProperty,gk=Object.getOwnPropertySymbols,vx=Object.prototype.hasOwnProperty,Cx=Object.prototype.propertyIsEnumerable,mk=(i,t,e)=>t in i?Ax(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;class yx extends pe(){constructor(t){super(),this.isReady=!1,this._editableElementsMap=new Map,this._focusableToolbarDefinitions=[];const e=t.editing.view;this.editor=t,this.componentFactory=new $E(t),this.focusTracker=new xn,this.tooltipManager=new Rd(t),this.poweredBy=new gx(t),this.ariaLiveAnnouncer=new bx(t),this.set("viewportOffset",this._readViewportOffsetFromConfig()),this.once("ready",()=>{this.isReady=!0}),this.listenTo(e.document,"layoutChanged",this.update.bind(this)),this.listenTo(e,"scrollToTheSelection",this._handleScrollToTheSelection.bind(this)),this._initFocusTracking()}get element(){return null}update(){this.fire("update")}destroy(){this.stopListening(),this.focusTracker.destroy(),this.tooltipManager.destroy(this.editor),this.poweredBy.destroy();for(const t of this._editableElementsMap.values())t.ckeditorInstance=null,this.editor.keystrokes.stopListening(t);this._editableElementsMap=new Map,this._focusableToolbarDefinitions=[]}setEditableElement(t,e){this._editableElementsMap.set(t,e),e.ckeditorInstance||(e.ckeditorInstance=this.editor),this.focusTracker.add(e);const n=()=>{this.editor.editing.view.getDomRoot(t)||this.editor.keystrokes.listenTo(e)};this.isReady?n():this.once("ready",n)}removeEditableElement(t){const e=this._editableElementsMap.get(t);e&&(this._editableElementsMap.delete(t),this.editor.keystrokes.stopListening(e),this.focusTracker.remove(e),e.ckeditorInstance=null)}getEditableElement(t="main"){return this._editableElementsMap.get(t)}getEditableElementsNames(){return this._editableElementsMap.keys()}addToolbar(t,e={}){t.isRendered?(this.focusTracker.add(t.element),this.editor.keystrokes.listenTo(t.element)):t.once("render",()=>{this.focusTracker.add(t.element),this.editor.keystrokes.listenTo(t.element)}),this._focusableToolbarDefinitions.push({toolbarView:t,options:e})}get _editableElements(){return console.warn("editor-ui-deprecated-editable-elements: The EditorUI#_editableElements property has been deprecated and will be removed in the near future.",{editorUI:this}),this._editableElementsMap}_readViewportOffsetFromConfig(){const t=this.editor,e=t.config.get("ui.viewportOffset");if(e)return e;const n=t.config.get("toolbar.viewportTopOffset");return n?(console.warn("editor-ui-deprecated-viewport-offset-config: The `toolbar.vieportTopOffset` configuration option is deprecated. It will be removed from future CKEditor versions. Use `ui.viewportOffset.top` instead."),{top:n}):{top:0}}_initFocusTracking(){const t=this.editor,e=t.editing.view;let n,o;t.keystrokes.set("Alt+F10",(r,s)=>{const a=this.focusTracker.focusedElement;Array.from(this._editableElementsMap.values()).includes(a)&&!Array.from(e.domRoots.values()).includes(a)&&(n=a);const c=this._getCurrentFocusedToolbarDefinition();c&&o||(o=this._getFocusableCandidateToolbarDefinitions());for(let l=0;l<o.length;l++){const u=o.shift();if(o.push(u),u!==c&&this._focusFocusableCandidateToolbar(u)){c&&c.options.afterBlur&&c.options.afterBlur();break}}s()}),t.keystrokes.set("Esc",(r,s)=>{const a=this._getCurrentFocusedToolbarDefinition();a&&(n?(n.focus(),n=null):t.editing.view.focus(),a.options.afterBlur&&a.options.afterBlur(),s())})}_getFocusableCandidateToolbarDefinitions(){const t=[];for(const e of this._focusableToolbarDefinitions){const{toolbarView:n,options:o}=e;(os(n.element)||o.beforeFocus)&&t.push(e)}return t.sort((e,n)=>kk(e)-kk(n)),t}_getCurrentFocusedToolbarDefinition(){for(const t of this._focusableToolbarDefinitions)if(t.toolbarView.element&&t.toolbarView.element.contains(this.focusTracker.focusedElement))return t;return null}_focusFocusableCandidateToolbar(t){const{toolbarView:e,options:{beforeFocus:n}}=t;return n&&n(),!!os(e.element)&&(e.focus(),!0)}_handleScrollToTheSelection(t,e){const n=((o,r)=>{for(var s in r||(r={}))vx.call(r,s)&&mk(o,s,r[s]);if(gk)for(var s of gk(r))Cx.call(r,s)&&mk(o,s,r[s]);return o})({top:0,bottom:0,left:0,right:0},this.viewportOffset);e.viewportOffset.top+=n.top,e.viewportOffset.bottom+=n.bottom,e.viewportOffset.left+=n.left,e.viewportOffset.right+=n.right}}function kk(i){const{toolbarView:t,options:e}=i;let n=10;return os(t.element)&&n--,e.isContextual&&n--,n}var bk=V(1185),Ex={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Lt()(bk.A,Ex),bk.A.locals;class xx extends Yt{constructor(t){super(t),this.body=new uE(t)}render(){super.render(),this.body.attachToDom()}destroy(){return this.body.detachFromDom(),super.destroy()}}class Tx extends xx{constructor(t){super(t),this.top=this.createCollection(),this.main=this.createCollection(),this._voiceLabelView=this._createVoiceLabel(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-reset","ck-editor","ck-rounded-corners"],role:"application",dir:t.uiLanguageDirection,lang:t.uiLanguage,"aria-labelledby":this._voiceLabelView.id},children:[this._voiceLabelView,{tag:"div",attributes:{class:["ck","ck-editor__top","ck-reset_all"],role:"presentation"},children:this.top},{tag:"div",attributes:{class:["ck","ck-editor__main"],role:"presentation"},children:this.main}]})}_createVoiceLabel(){const t=this.t,e=new Dd;return e.text=t("Rich Text Editor"),e.extendTemplate({attributes:{class:"ck-voice-label"}}),e}}class Dx extends Yt{constructor(t,e,n){super(t),this.name=null,this.setTemplate({tag:"div",attributes:{class:["ck","ck-content","ck-editor__editable","ck-rounded-corners"],lang:t.contentLanguage,dir:t.contentLanguageDirection}}),this.set("isFocused",!1),this._editableElement=n,this._hasExternalElement=!!this._editableElement,this._editingView=e}render(){super.render(),this._hasExternalElement?this.template.apply(this.element=this._editableElement):this._editableElement=this.element,this.on("change:isFocused",()=>this._updateIsFocusedClasses()),this._updateIsFocusedClasses()}destroy(){this._hasExternalElement&&this.template.revert(this._editableElement),super.destroy()}get hasExternalElement(){return this._hasExternalElement}_updateIsFocusedClasses(){const t=this._editingView;function e(n){t.change(o=>{const r=t.document.getRoot(n.name);o.addClass(n.isFocused?"ck-focused":"ck-blurred",r),o.removeClass(n.isFocused?"ck-blurred":"ck-focused",r)})}t.isRenderingInProgress?function n(o){t.once("change:isRenderingInProgress",(r,s,a)=>{a?n(o):e(o)})}(this):e(this)}}class Sx extends Dx{constructor(t,e,n,o={}){super(t,e,n);const r=t.t;this.extendTemplate({attributes:{role:"textbox",class:"ck-editor__editable_inline"}}),this._generateLabel=o.label||(()=>r("Editor editing area: %0",this.name))}render(){super.render();const t=this._editingView;t.change(e=>{const n=t.document.getRoot(this.name);e.setAttribute("aria-label",this._generateLabel(this),n)})}}class $h extends _a{static get pluginName(){return"Notification"}init(){this.on("show:warning",(t,e)=>{window.alert(e.message)},{priority:"lowest"})}showSuccess(t,e={}){this._showNotification({message:t,type:"success",namespace:e.namespace,title:e.title})}showInfo(t,e={}){this._showNotification({message:t,type:"info",namespace:e.namespace,title:e.title})}showWarning(t,e={}){this._showNotification({message:t,type:"warning",namespace:e.namespace,title:e.title})}_showNotification(t){const e=t.namespace?`show:${t.type}:${t.namespace}`:`show:${t.type}`;this.fire(e,{message:t.message,type:t.type,title:t.title||""})}}class _k extends pe(){constructor(t,e){super(),e&&$p(this,e),t&&this.set(t)}}var wk=V(991),Ix={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Lt()(wk.A,Ix),wk.A.locals;var Ak=V(5380),Mx={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Lt()(Ak.A,Mx),Ak.A.locals;const jd=fr("px");class Fd extends Tt{constructor(t){super(t),this._viewToStack=new Map,this._idToStack=new Map,this._view=null,this._rotatorView=null,this._fakePanelsView=null,this.positionLimiter=()=>{const e=this.editor.editing.view,n=e.document.selection.editableElement;return n?e.domConverter.mapViewToDom(n.root):null},this.set("visibleView",null),this.set("_numberOfStacks",0),this.set("_singleViewMode",!1)}static get pluginName(){return"ContextualBalloon"}destroy(){super.destroy(),this._view&&this._view.destroy(),this._rotatorView&&this._rotatorView.destroy(),this._fakePanelsView&&this._fakePanelsView.destroy()}get view(){return this._view||this._createPanelView(),this._view}hasView(t){return Array.from(this._viewToStack.keys()).includes(t)}add(t){if(this._view||this._createPanelView(),this.hasView(t.view))throw new m("contextualballoon-add-view-exist",[this,t]);const e=t.stackId||"main";if(!this._idToStack.has(e))return this._idToStack.set(e,new Map([[t.view,t]])),this._viewToStack.set(t.view,this._idToStack.get(e)),this._numberOfStacks=this._idToStack.size,void(this._visibleStack&&!t.singleViewMode||this.showStack(e));const n=this._idToStack.get(e);t.singleViewMode&&this.showStack(e),n.set(t.view,t),this._viewToStack.set(t.view,n),n===this._visibleStack&&this._showView(t)}remove(t){if(!this.hasView(t))throw new m("contextualballoon-remove-view-not-exist",[this,t]);const e=this._viewToStack.get(t);this._singleViewMode&&this.visibleView===t&&(this._singleViewMode=!1),this.visibleView===t&&(e.size===1?this._idToStack.size>1?this._showNextStack():(this.view.hide(),this.visibleView=null,this._rotatorView.hideView()):this._showView(Array.from(e.values())[e.size-2])),e.size===1?(this._idToStack.delete(this._getStackId(e)),this._numberOfStacks=this._idToStack.size):e.delete(t),this._viewToStack.delete(t)}updatePosition(t){t&&(this._visibleStack.get(this.visibleView).position=t),this.view.pin(this._getBalloonPosition()),this._fakePanelsView.updatePosition()}showStack(t){this.visibleStack=t;const e=this._idToStack.get(t);if(!e)throw new m("contextualballoon-showstack-stack-not-exist",this);this._visibleStack!==e&&this._showView(Array.from(e.values()).pop())}_createPanelView(){this._view=new Ji(this.editor.locale),this.editor.ui.view.body.add(this._view),this.editor.ui.focusTracker.add(this._view.element),this._rotatorView=this._createRotatorView(),this._fakePanelsView=this._createFakePanelsView()}get _visibleStack(){return this._viewToStack.get(this.visibleView)}_getStackId(t){return Array.from(this._idToStack.entries()).find(e=>e[1]===t)[0]}_showNextStack(){const t=Array.from(this._idToStack.values());let e=t.indexOf(this._visibleStack)+1;t[e]||(e=0),this.showStack(this._getStackId(t[e]))}_showPrevStack(){const t=Array.from(this._idToStack.values());let e=t.indexOf(this._visibleStack)-1;t[e]||(e=t.length-1),this.showStack(this._getStackId(t[e]))}_createRotatorView(){const t=new Nx(this.editor.locale),e=this.editor.locale.t;return this.view.content.add(t),t.bind("isNavigationVisible").to(this,"_numberOfStacks",this,"_singleViewMode",(n,o)=>!o&&n>1),t.on("change:isNavigationVisible",()=>this.updatePosition(),{priority:"low"}),t.bind("counter").to(this,"visibleView",this,"_numberOfStacks",(n,o)=>{if(o<2)return"";const r=Array.from(this._idToStack.values()).indexOf(this._visibleStack)+1;return e("%0 of %1",[r,o])}),t.buttonNextView.on("execute",()=>{t.focusTracker.isFocused&&this.editor.editing.view.focus(),this._showNextStack()}),t.buttonPrevView.on("execute",()=>{t.focusTracker.isFocused&&this.editor.editing.view.focus(),this._showPrevStack()}),t}_createFakePanelsView(){const t=new Ox(this.editor.locale,this.view);return t.bind("numberOfPanels").to(this,"_numberOfStacks",this,"_singleViewMode",(e,n)=>!n&&e>=2?Math.min(e-1,2):0),t.listenTo(this.view,"change:top",()=>t.updatePosition()),t.listenTo(this.view,"change:left",()=>t.updatePosition()),this.editor.ui.view.body.add(t),t}_showView({view:t,balloonClassName:e="",withArrow:n=!0,singleViewMode:o=!1}){this.view.class=e,this.view.withArrow=n,this._rotatorView.showView(t),this.visibleView=t,this.view.pin(this._getBalloonPosition()),this._fakePanelsView.updatePosition(),o&&(this._singleViewMode=!0)}_getBalloonPosition(){let t=Array.from(this._visibleStack.values()).pop().position;return t&&(t.limiter||(t=Object.assign({},t,{limiter:this.positionLimiter})),t=Object.assign({},t,{viewportOffsetConfig:this.editor.ui.viewportOffset})),t}}class Nx extends Yt{constructor(t){super(t);const e=t.t,n=this.bindTemplate;this.set("isNavigationVisible",!0),this.focusTracker=new xn,this.buttonPrevView=this._createButtonView(e("Previous"),ce.previousArrow),this.buttonNextView=this._createButtonView(e("Next"),ce.nextArrow),this.content=this.createCollection(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-balloon-rotator"],"z-index":"-1"},children:[{tag:"div",attributes:{class:["ck-balloon-rotator__navigation",n.to("isNavigationVisible",o=>o?"":"ck-hidden")]},children:[this.buttonPrevView,{tag:"span",attributes:{class:["ck-balloon-rotator__counter"]},children:[{text:n.to("counter")}]},this.buttonNextView]},{tag:"div",attributes:{class:"ck-balloon-rotator__content"},children:this.content}]})}render(){super.render(),this.focusTracker.add(this.element)}destroy(){super.destroy(),this.focusTracker.destroy()}showView(t){this.hideView(),this.content.add(t)}hideView(){this.content.clear()}_createButtonView(t,e){const n=new Te(this.locale);return n.set({label:t,icon:e,tooltip:!0}),n}}class Ox extends Yt{constructor(t,e){super(t);const n=this.bindTemplate;this.set("top",0),this.set("left",0),this.set("height",0),this.set("width",0),this.set("numberOfPanels",0),this.content=this.createCollection(),this._balloonPanelView=e,this.setTemplate({tag:"div",attributes:{class:["ck-fake-panel",n.to("numberOfPanels",o=>o?"":"ck-hidden")],style:{top:n.to("top",jd),left:n.to("left",jd),width:n.to("width",jd),height:n.to("height",jd)}},children:this.content}),this.on("change:numberOfPanels",(o,r,s,a)=>{s>a?this._addPanels(s-a):this._removePanels(a-s),this.updatePosition()})}_addPanels(t){for(;t--;){const e=new Yt;e.setTemplate({tag:"div"}),this.content.add(e),this.registerChild(e)}}_removePanels(t){for(;t--;){const e=this.content.last;this.content.remove(e),this.deregisterChild(e),e.destroy()}}updatePosition(){if(this.numberOfPanels){const{top:t,left:e}=this._balloonPanelView,{width:n,height:o}=new Xt(this._balloonPanelView.element);Object.assign(this,{top:t,left:e,width:n,height:o})}}}var vk=V(8298),Bx={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Lt()(vk.A,Bx),vk.A.locals;const uc=fr("px");class Lx extends Yt{constructor(t){super(t);const e=this.bindTemplate;this.set("isActive",!1),this.set("isSticky",!1),this.set("limiterElement",null),this.set("limiterBottomOffset",50),this.set("viewportTopOffset",0),this.set("_marginLeft",null),this.set("_isStickyToTheBottomOfLimiter",!1),this.set("_stickyTopOffset",null),this.set("_stickyBottomOffset",null),this.content=this.createCollection(),this._contentPanelPlaceholder=new Ci({tag:"div",attributes:{class:["ck","ck-sticky-panel__placeholder"],style:{display:e.to("isSticky",n=>n?"block":"none"),height:e.to("isSticky",n=>n?uc(this._contentPanelRect.height):null)}}}).render(),this.contentPanelElement=new Ci({tag:"div",attributes:{class:["ck","ck-sticky-panel__content",e.if("isSticky","ck-sticky-panel__content_sticky"),e.if("_isStickyToTheBottomOfLimiter","ck-sticky-panel__content_sticky_bottom-limit")],style:{width:e.to("isSticky",n=>n?uc(this._contentPanelPlaceholder.getBoundingClientRect().width):null),top:e.to("_stickyTopOffset",n=>n&&uc(n)),bottom:e.to("_stickyBottomOffset",n=>n&&uc(n)),marginLeft:e.to("_marginLeft")}},children:this.content}).render(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-sticky-panel"]},children:[this._contentPanelPlaceholder,this.contentPanelElement]})}render(){super.render(),this.checkIfShouldBeSticky(),this.listenTo(B.document,"scroll",()=>{this.checkIfShouldBeSticky()},{useCapture:!0}),this.listenTo(this,"change:isActive",()=>{this.checkIfShouldBeSticky()})}checkIfShouldBeSticky(){if(!this.limiterElement||!this.isActive)return void this._unstick();const t=new Xt(this.limiterElement);let e=t.getVisible();if(e){const n=new Xt(B.window);n.top+=this.viewportTopOffset,n.height-=this.viewportTopOffset,e=e.getIntersection(n)}if(e&&t.top<e.top){const n=e.top;if(n+this._contentPanelRect.height+this.limiterBottomOffset>e.bottom){const o=Math.max(t.bottom-e.bottom,0)+this.limiterBottomOffset;t.bottom-o>t.top+this._contentPanelRect.height?this._stickToBottomOfLimiter(o):this._unstick()}else this._contentPanelRect.height+this.limiterBottomOffset<t.height?this._stickToTopOfAncestors(n):this._unstick()}else this._unstick()}_stickToTopOfAncestors(t){this.isSticky=!0,this._isStickyToTheBottomOfLimiter=!1,this._stickyTopOffset=t,this._stickyBottomOffset=null,this._marginLeft=uc(-B.window.scrollX)}_stickToBottomOfLimiter(t){this.isSticky=!0,this._isStickyToTheBottomOfLimiter=!0,this._stickyTopOffset=null,this._stickyBottomOffset=t,this._marginLeft=uc(-B.window.scrollX)}_unstick(){this.isSticky=!1,this._isStickyToTheBottomOfLimiter=!1,this._stickyTopOffset=null,this._stickyBottomOffset=null,this._marginLeft=null}get _contentPanelRect(){return new Xt(this.contentPanelElement)}}class Px extends Md{constructor(t,e){const n=t.t,o=Object.assign({},{showResetButton:!0,showIcon:!0,creator:Bd},e);super(t,o.creator),this.label=e.label,this._viewConfig=o,this._viewConfig.showIcon&&(this.iconView=new ms,this.iconView.content=ce.loupe,this.fieldWrapperChildren.add(this.iconView,0),this.extendTemplate({attributes:{class:"ck-search__query_with-icon"}})),this._viewConfig.showResetButton&&(this.resetButtonView=new Te(t),this.resetButtonView.set({label:n("Clear"),icon:ce.cancel,class:"ck-search__reset",isVisible:!1,tooltip:!0}),this.resetButtonView.on("execute",()=>{this.reset(),this.focus(),this.fire("reset")}),this.resetButtonView.bind("isVisible").to(this.fieldView,"isEmpty",r=>!r),this.fieldWrapperChildren.add(this.resetButtonView),this.extendTemplate({attributes:{class:"ck-search__query_with-reset"}}))}reset(){this.fieldView.reset(),this._viewConfig.showResetButton&&(this.resetButtonView.isVisible=!1)}}class Rx extends Yt{constructor(){super();const t=this.bindTemplate;this.set({isVisible:!1,primaryText:"",secondaryText:""}),this.setTemplate({tag:"div",attributes:{class:["ck","ck-search__info",t.if("isVisible","ck-hidden",e=>!e)],tabindex:-1},children:[{tag:"span",children:[{text:[t.to("primaryText")]}]},{tag:"span",children:[{text:[t.to("secondaryText")]}]}]})}focus(){this.element.focus()}}class zx extends Yt{constructor(t){super(t),this.children=this.createCollection(),this.focusTracker=new xn,this.setTemplate({tag:"div",attributes:{class:["ck","ck-search__results"],tabindex:-1},children:this.children}),this._focusCycler=new Zo({focusables:this.children,focusTracker:this.focusTracker})}render(){super.render();for(const t of this.children)this.focusTracker.add(t.element)}focus(){this._focusCycler.focusFirst()}focusFirst(){this._focusCycler.focusFirst()}focusLast(){this._focusCycler.focusLast()}}var Ck=/[\\^$.*+?()[\]{}|]/g,jx=RegExp(Ck.source);const yk=function(i){return(i=Qt(i))&&jx.test(i)?i.replace(Ck,"\\$&"):i};var Ek=V(8107),Fx={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Lt()(Ek.A,Fx),Ek.A.locals;var Vx=Object.defineProperty,xk=Object.getOwnPropertySymbols,Hx=Object.prototype.hasOwnProperty,Ux=Object.prototype.propertyIsEnumerable,Tk=(i,t,e)=>t in i?Vx(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;class $x extends Yt{constructor(t,e){super(t),this._config=e,this.filteredView=e.filteredView,this.queryView=this._createSearchTextQueryView(),this.focusTracker=new xn,this.keystrokes=new li,this.resultsView=new zx(t),this.children=this.createCollection(),this.focusableChildren=this.createCollection([this.queryView,this.resultsView]),this.set("isEnabled",!0),this.set("resultsCount",0),this.set("totalItemsCount",0),e.infoView&&e.infoView.instance?this.infoView=e.infoView.instance:(this.infoView=new Rx,this._enableDefaultInfoViewBehavior(),this.on("render",()=>{this.search("")})),this.resultsView.children.addMany([this.infoView,this.filteredView]),this.focusCycler=new Zo({focusables:this.focusableChildren,focusTracker:this.focusTracker,keystrokeHandler:this.keystrokes,actions:{focusPrevious:"shift + tab",focusNext:"tab"}}),this.on("search",(n,{resultsCount:o,totalItemsCount:r})=>{this.resultsCount=o,this.totalItemsCount=r}),this.setTemplate({tag:"div",attributes:{class:["ck","ck-search",e.class||null],tabindex:"-1"},children:this.children})}render(){super.render(),this.children.addMany([this.queryView,this.resultsView]);const t=e=>e.stopPropagation();for(const e of this.focusableChildren)this.focusTracker.add(e.element);this.keystrokes.listenTo(this.element),this.keystrokes.set("arrowright",t),this.keystrokes.set("arrowleft",t),this.keystrokes.set("arrowup",t),this.keystrokes.set("arrowdown",t)}focus(){this.queryView.focus()}reset(){this.queryView.reset(),this.search("")}search(t){const e=t?new RegExp(yk(t),"ig"):null,n=this.filteredView.filter(e);this.fire("search",((o,r)=>{for(var s in r||(r={}))Hx.call(r,s)&&Tk(o,s,r[s]);if(xk)for(var s of xk(r))Ux.call(r,s)&&Tk(o,s,r[s]);return o})({query:t},n))}_createSearchTextQueryView(){const t=new Px(this.locale,this._config.queryView);return this.listenTo(t.fieldView,"input",()=>{this.search(t.fieldView.element.value)}),t.on("reset",()=>this.reset()),t.bind("isEnabled").to(this),t}_enableDefaultInfoViewBehavior(){const t=this.locale.t,e=this.infoView;function n(o,{query:r,resultsCount:s,totalItemsCount:a}){return typeof o=="function"?o(r,s,a):o}this.on("search",(o,r)=>{if(r.resultsCount)e.set({isVisible:!1});else{const s=this._config.infoView&&this._config.infoView.text;let a,c;r.totalItemsCount?s&&s.notFound?(a=s.notFound.primary,c=s.notFound.secondary):(a=t("No results found"),c=""):s&&s.noSearchableItems?(a=s.noSearchableItems.primary,c=s.noSearchableItems.secondary):(a=t("No searchable items"),c=""),e.set({primaryText:n(a,r),secondaryText:n(c,r),isVisible:!0})}})}}var Dk=V(5727),Wx={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Lt()(Dk.A,Wx),Dk.A.locals;const Wh=class extends $x{constructor(i,t){super(i,t),this._config=t;const e=fr("px");this.extendTemplate({attributes:{class:["ck-autocomplete"]}});const n=this.resultsView.bindTemplate;this.resultsView.set("isVisible",!1),this.resultsView.set("_position","s"),this.resultsView.set("_width",0),this.resultsView.extendTemplate({attributes:{class:[n.if("isVisible","ck-hidden",o=>!o),n.to("_position",o=>`ck-search__results_${o}`)],style:{width:n.to("_width",e)}}}),this.focusTracker.on("change:isFocused",(o,r,s)=>{this._updateResultsVisibility(),s?this.resultsView.element.scrollTop=0:t.resetOnBlur&&this.queryView.reset()}),this.on("search",()=>{this._updateResultsVisibility(),this._updateResultsViewWidthAndPosition()}),this.keystrokes.set("esc",(o,r)=>{this.resultsView.isVisible&&(this.queryView.focus(),this.resultsView.isVisible=!1,r())}),this.listenTo(B.document,"scroll",()=>{this._updateResultsViewWidthAndPosition()}),this.on("change:isEnabled",()=>{this._updateResultsVisibility()}),this.filteredView.on("execute",(o,{value:r})=>{this.focus(),this.reset(),this.queryView.fieldView.value=this.queryView.fieldView.element.value=r,this.resultsView.isVisible=!1}),this.resultsView.on("change:isVisible",()=>{this._updateResultsViewWidthAndPosition()})}_updateResultsViewWidthAndPosition(){if(!this.resultsView.isVisible)return;this.resultsView._width=new Xt(this.queryView.fieldView.element).width;const i=Wh._getOptimalPosition({element:this.resultsView.element,target:this.queryView.element,fitInViewport:!0,positions:Wh.defaultResultsPositions});this.resultsView._position=i?i.name:"s"}_updateResultsVisibility(){const i=this._config.queryMinChars===void 0?0:this._config.queryMinChars,t=this.queryView.fieldView.element.value.length;this.resultsView.isVisible=this.focusTracker.isFocused&&this.isEnabled&&t>=i}};let Sk=Wh;Sk.defaultResultsPositions=[i=>({top:i.bottom,left:i.left,name:"s"}),(i,t)=>({top:i.top-t.height,left:i.left,name:"n"})],Sk._getOptimalPosition=Wa;var Ik=V(9529),qx={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Lt()(Ik.A,qx),Ik.A.locals;var Mk=V(109),Gx={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Lt()(Mk.A,Gx),Mk.A.locals;var Nk=V(2710),Kx={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Lt()(Nk.A,Kx),Nk.A.locals;var Ok=V(3344),Yx={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Lt()(Ok.A,Yx),Ok.A.locals;class Qx extends Te{constructor(t){super(t);const e=this.bindTemplate;this.set({withText:!0,role:"menuitem"}),this.arrowView=this._createArrowView(),this.extendTemplate({attributes:{class:["ck-menu-bar__menu__button"],"aria-haspopup":!0,"aria-expanded":this.bindTemplate.to("isOn",n=>String(n)),"data-cke-tooltip-disabled":e.to("isOn")},on:{mouseenter:e.to("mouseenter")}})}render(){super.render(),this.children.add(this.arrowView)}_createArrowView(){const t=new ms;return t.content=Id,t.extendTemplate({attributes:{class:"ck-menu-bar__menu__button__arrow"}}),t}}var Bk=V(9481),Zx={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Lt()(Bk.A,Zx),Bk.A.locals;class qh extends dc{constructor(t,e){super(t);const n=this.bindTemplate;this.extendTemplate({attributes:{class:["ck-menu-bar__menu__item"]},on:{mouseenter:n.to("mouseenter")}}),this.delegate("mouseenter").to(e)}}var Jx=Object.defineProperty,Lk=Object.getOwnPropertySymbols,Xx=Object.prototype.hasOwnProperty,tT=Object.prototype.propertyIsEnumerable,Pk=(i,t,e)=>t in i?Jx(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e,Rk=(i,t)=>{for(var e in t||(t={}))Xx.call(t,e)&&Pk(i,e,t[e]);if(Lk)for(var e of Lk(t))tT.call(t,e)&&Pk(i,e,t[e]);return i};const _l={toggleMenusAndFocusItemsOnHover(i){i.on("menu:mouseenter",t=>{if(i.isOpen){for(const e of i.menus){const n=t.path[0],o=n instanceof qh&&n.children.first===e;e.isOpen=(t.path.includes(e)||o)&&e.isEnabled}t.source.focus()}})},focusCycleMenusOnArrows(i){const t=i.locale.uiLanguageDirection==="rtl";function e(n,o){const r=i.children.getIndex(n),s=n.isOpen,a=i.children.length,c=i.children.get((r+a+o)%a);n.isOpen=!1,s&&(c.isOpen=!0),c.buttonView.focus()}i.on("menu:arrowright",n=>{e(n.source,t?-1:1)}),i.on("menu:arrowleft",n=>{e(n.source,t?1:-1)})},closeMenusWhenTheBarCloses(i){i.on("change:isOpen",()=>{i.isOpen||i.menus.forEach(t=>{t.isOpen=!1})})},closeMenuWhenAnotherOnTheSameLevelOpens(i){i.on("menu:change:isOpen",(t,e,n)=>{n&&i.menus.filter(o=>t.source.parentMenuView===o.parentMenuView&&t.source!==o&&o.isOpen).forEach(o=>{o.isOpen=!1})})},closeOnClickOutside(i){Za({emitter:i,activator:()=>i.isOpen,callback:()=>i.close(),contextElements:()=>i.children.map(t=>t.element)})}},Sa={openAndFocusPanelOnArrowDownKey(i){i.keystrokes.set("arrowdown",(t,e)=>{i.focusTracker.focusedElement===i.buttonView.element&&(i.isOpen||(i.isOpen=!0),i.panelView.focus(),e())})},openOnArrowRightKey(i){const t=i.locale.uiLanguageDirection==="rtl"?"arrowleft":"arrowright";i.keystrokes.set(t,(e,n)=>{i.focusTracker.focusedElement===i.buttonView.element&&i.isEnabled&&(i.isOpen||(i.isOpen=!0),i.panelView.focus(),n())})},openOnButtonClick(i){i.buttonView.on("execute",()=>{i.isOpen=!0,i.panelView.focus()})},toggleOnButtonClick(i){i.buttonView.on("execute",()=>{i.isOpen=!i.isOpen,i.isOpen&&i.panelView.focus()})},closeOnArrowLeftKey(i){const t=i.locale.uiLanguageDirection==="rtl"?"arrowright":"arrowleft";i.keystrokes.set(t,(e,n)=>{i.isOpen&&(i.isOpen=!1,i.focus(),n())})},closeOnEscKey(i){i.keystrokes.set("esc",(t,e)=>{i.isOpen&&(i.isOpen=!1,i.focus(),e())})},closeOnParentClose(i){i.parentMenuView.on("change:isOpen",(t,e,n)=>{n||t.source!==i.parentMenuView||(i.isOpen=!1)})}},eT={southEast:i=>({top:i.bottom,left:i.left,name:"se"}),southWest:(i,t)=>({top:i.bottom,left:i.left-t.width+i.width,name:"sw"}),northEast:(i,t)=>({top:i.top-t.height,left:i.left,name:"ne"}),northWest:(i,t)=>({top:i.top-t.height,left:i.left-t.width+i.width,name:"nw"}),eastSouth:i=>({top:i.top,left:i.right-5,name:"es"}),eastNorth:(i,t)=>({top:i.top-t.height,left:i.right-5,name:"en"}),westSouth:(i,t)=>({top:i.top,left:i.left-t.width+5,name:"ws"}),westNorth:(i,t)=>({top:i.top-t.height,left:i.left-t.width+5,name:"wn"})},nT=[{menuId:"file",label:"File",groups:[{groupId:"export",items:["menuBar:exportPdf","menuBar:exportWord"]},{groupId:"import",items:["menuBar:importWord"]},{groupId:"revisionHistory",items:["menuBar:revisionHistory"]}]},{menuId:"edit",label:"Edit",groups:[{groupId:"undo",items:["menuBar:undo","menuBar:redo"]},{groupId:"selectAll",items:["menuBar:selectAll"]},{groupId:"findAndReplace",items:["menuBar:findAndReplace"]}]},{menuId:"view",label:"View",groups:[{groupId:"sourceEditing",items:["menuBar:sourceEditing"]},{groupId:"showBlocks",items:["menuBar:showBlocks"]},{groupId:"restrictedEditingException",items:["menuBar:restrictedEditingException"]}]},{menuId:"insert",label:"Insert",groups:[{groupId:"insertMainWidgets",items:["menuBar:uploadImage","menuBar:ckbox","menuBar:ckfinder","menuBar:insertTable"]},{groupId:"insertInline",items:["menuBar:link","menuBar:comment"]},{groupId:"insertMinorWidgets",items:["menuBar:insertTemplate","menuBar:blockQuote","menuBar:codeBlock","menuBar:htmlEmbed"]},{groupId:"insertStructureWidgets",items:["menuBar:horizontalLine","menuBar:pageBreak","menuBar:tableOfContents"]},{groupId:"restrictedEditing",items:["menuBar:restrictedEditing"]}]},{menuId:"format",label:"Format",groups:[{groupId:"textAndFont",items:[{menuId:"text",label:"Text",groups:[{groupId:"basicStyles",items:["menuBar:bold","menuBar:italic","menuBar:underline","menuBar:strikethrough","menuBar:superscript","menuBar:subscript","menuBar:code"]},{groupId:"textPartLanguage",items:["menuBar:textPartLanguage"]}]},{menuId:"font",label:"Font",groups:[{groupId:"fontProperties",items:["menuBar:fontSize","menuBar:fontFamily"]},{groupId:"fontColors",items:["menuBar:fontColor","menuBar:fontBackgroundColor"]},{groupId:"highlight",items:["menuBar:highlight"]}]},"menuBar:heading"]},{groupId:"list",items:["menuBar:bulletedList","menuBar:numberedList","menuBar:todoList"]},{groupId:"indent",items:["menuBar:alignment","menuBar:indent","menuBar:outdent"]},{groupId:"caseChange",items:["menuBar:caseChange"]},{groupId:"removeFormat",items:["menuBar:removeFormat"]}]},{menuId:"tools",label:"Tools",groups:[{groupId:"aiTools",items:["menuBar:aiAssistant","menuBar:aiCommands"]},{groupId:"tools",items:["menuBar:trackChanges","menuBar:commentsArchive"]}]},{menuId:"help",label:"Help",groups:[{groupId:"help",items:["menuBar:accessibilityHelp"]}]}];function iT({normalizedConfig:i,locale:t,componentFactory:e}){const n=mr(i);return function(o,r){const s=r.removeItems,a=[];r.items=r.items.filter(({menuId:c})=>!s.includes(c)||(a.push(c),!1)),hc(r.items,c=>{c.groups=c.groups.filter(({groupId:l})=>!s.includes(l)||(a.push(l),!1));for(const l of c.groups)l.items=l.items.filter(u=>{const p=Fk(u);return!s.includes(p)||(a.push(p),!1)})});for(const c of s)a.includes(c)||It("menu-bar-item-could-not-be-removed",{menuBarConfig:o,itemName:c})}(i,n),function(o,r){const s=r.addItems,a=[];for(const c of s){const l=sT(c.position),u=aT(c.position);if(oT(c))if(u){const p=r.items.findIndex(k=>k.menuId===u);p!=-1?l==="before"?(r.items.splice(p,0,c.menu),a.push(c)):l==="after"&&(r.items.splice(p+1,0,c.menu),a.push(c)):zk(r,c.menu,u,l)&&a.push(c)}else l==="start"?(r.items.unshift(c.menu),a.push(c)):l==="end"&&(r.items.push(c.menu),a.push(c));else rT(c)?hc(r.items,p=>{if(p.menuId===u)l==="start"?(p.groups.unshift(c.group),a.push(c)):l==="end"&&(p.groups.push(c.group),a.push(c));else{const k=p.groups.findIndex(v=>v.groupId===u);k!==-1&&(l==="before"?(p.groups.splice(k,0,c.group),a.push(c)):l==="after"&&(p.groups.splice(k+1,0,c.group),a.push(c)))}}):zk(r,c.item,u,l)&&a.push(c)}for(const c of s)a.includes(c)||It("menu-bar-item-could-not-be-added",{menuBarConfig:o,addedItemConfig:c})}(i,n),function(o,r,s){hc(r.items,a=>{for(const c of a.groups)c.items=c.items.filter(l=>{const u=typeof l=="string"&&!s.has(l);return u&&!r.isUsingDefaultConfig&&It("menu-bar-item-unavailable",{menuBarConfig:o,parentMenuConfig:mr(a),componentName:l}),!u})})}(i,n,e),jk(i,n),function(o,r){const s=r.t,a={File:s({string:"File",id:"MENU_BAR_MENU_FILE"}),Edit:s({string:"Edit",id:"MENU_BAR_MENU_EDIT"}),View:s({string:"View",id:"MENU_BAR_MENU_VIEW"}),Insert:s({string:"Insert",id:"MENU_BAR_MENU_INSERT"}),Format:s({string:"Format",id:"MENU_BAR_MENU_FORMAT"}),Tools:s({string:"Tools",id:"MENU_BAR_MENU_TOOLS"}),Help:s({string:"Help",id:"MENU_BAR_MENU_HELP"}),Text:s({string:"Text",id:"MENU_BAR_MENU_TEXT"}),Font:s({string:"Font",id:"MENU_BAR_MENU_FONT"})};hc(o.items,c=>{c.label in a&&(c.label=a[c.label])})}(n,t),n}function zk(i,t,e,n){let o=!1;return hc(i.items,r=>{for(const{groupId:s,items:a}of r.groups){if(o)return;if(s===e)n==="start"?(a.unshift(t),o=!0):n==="end"&&(a.push(t),o=!0);else{const c=a.findIndex(l=>Fk(l)===e);c!==-1&&(n==="before"?(a.splice(c,0,t),o=!0):n==="after"&&(a.splice(c+1,0,t),o=!0))}}}),o}function jk(i,t){const e=t.isUsingDefaultConfig;let n=!1;t.items=t.items.filter(o=>!!o.groups.length||(Gh(i,o,e),!1)),t.items.length?(hc(t.items,o=>{o.groups=o.groups.filter(r=>!!r.items.length||(n=!0,!1));for(const r of o.groups)r.items=r.items.filter(s=>!(Vk(s)&&!s.groups.length)||(Gh(i,s,e),n=!0,!1))}),n&&jk(i,t)):Gh(i,i,e)}function Gh(i,t,e){e||It("menu-bar-menu-empty",{menuBarConfig:i,emptyMenuConfig:t})}function hc(i,t){if(Array.isArray(i))for(const n of i)e(n);function e(n){t(n);for(const o of n.groups)for(const r of o.items)Vk(r)&&e(r)}}function oT(i){return typeof i=="object"&&"menu"in i}function rT(i){return typeof i=="object"&&"group"in i}function sT(i){return i.startsWith("start")?"start":i.startsWith("end")?"end":i.startsWith("after")?"after":"before"}function aT(i){const t=i.match(/^[^:]+:(.+)/);return t?t[1]:null}function Fk(i){return typeof i=="string"?i:i.menuId}function Vk(i){return typeof i=="object"&&"menuId"in i}function cT(i,t){const e=t.element;i.ui.focusTracker.add(e),i.keystrokes.listenTo(e);const n=function(o){let r;return r="items"in o&&o.items?Rk({items:o.items,removeItems:[],addItems:[],isVisible:!0,isUsingDefaultConfig:!1},o):Rk({items:mr(nT),addItems:[],removeItems:[],isVisible:!0,isUsingDefaultConfig:!0},o),r}(i.config.get("menuBar")||{});t.fillFromConfig(n,i.ui.componentFactory),i.keystrokes.set("Esc",(o,r)=>{e.contains(i.ui.focusTracker.focusedElement)&&(i.editing.view.focus(),r())}),i.keystrokes.set("Alt+F9",(o,r)=>{e.contains(i.ui.focusTracker.focusedElement)||(t.focus(),r())})}var Hk=V(9108),lT={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Lt()(Hk.A,lT),Hk.A.locals;class dT extends Yt{constructor(t){super(t);const e=this.bindTemplate;this.set("isVisible",!1),this.set("position","se"),this.children=this.createCollection(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-reset","ck-menu-bar__menu__panel",e.to("position",n=>`ck-menu-bar__menu__panel_position_${n}`),e.if("isVisible","ck-hidden",n=>!n)],tabindex:"-1"},children:this.children,on:{selectstart:e.to(n=>{n.target.tagName.toLocaleLowerCase()!=="input"&&n.preventDefault()})}})}focus(t=1){this.children.length&&(t===1?this.children.first.focus():this.children.last.focus())}}var Uk=V(4),uT={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Lt()(Uk.A,uT),Uk.A.locals;const $k=class extends Yt{constructor(i){super(i);const t=this.bindTemplate;this.buttonView=new Qx(i),this.buttonView.delegate("mouseenter").to(this),this.buttonView.bind("isOn","isEnabled").to(this,"isOpen","isEnabled"),this.panelView=new dT(i),this.panelView.bind("isVisible").to(this,"isOpen"),this.keystrokes=new li,this.focusTracker=new xn,this.set("isOpen",!1),this.set("isEnabled",!0),this.set("panelPosition","w"),this.set("class",void 0),this.set("parentMenuView",null),this.setTemplate({tag:"div",attributes:{class:["ck","ck-menu-bar__menu",t.to("class"),t.if("isEnabled","ck-disabled",e=>!e),t.if("parentMenuView","ck-menu-bar__menu_top-level",e=>!e)]},children:[this.buttonView,this.panelView]})}render(){super.render(),this.focusTracker.add(this.buttonView.element),this.focusTracker.add(this.panelView.element),this.keystrokes.listenTo(this.element),Sa.closeOnEscKey(this),this._repositionPanelOnOpen()}_attachBehaviors(){this.parentMenuView?(Sa.openOnButtonClick(this),Sa.openOnArrowRightKey(this),Sa.closeOnArrowLeftKey(this),Sa.closeOnParentClose(this)):(this._propagateArrowKeystrokeEvents(),Sa.openAndFocusPanelOnArrowDownKey(this),Sa.toggleOnButtonClick(this))}_propagateArrowKeystrokeEvents(){this.keystrokes.set("arrowright",(i,t)=>{this.fire("arrowright"),t()}),this.keystrokes.set("arrowleft",(i,t)=>{this.fire("arrowleft"),t()})}_repositionPanelOnOpen(){this.on("change:isOpen",(i,t,e)=>{if(!e)return;const n=$k._getOptimalPosition({element:this.panelView.element,target:this.buttonView.element,fitInViewport:!0,positions:this._panelPositions});this.panelView.position=n?n.name:this._panelPositions[0].name})}focus(){this.buttonView.focus()}get _panelPositions(){const{southEast:i,southWest:t,northEast:e,northWest:n,westSouth:o,eastSouth:r,westNorth:s,eastNorth:a}=eT;return this.locale.uiLanguageDirection==="ltr"?this.parentMenuView?[r,a,o,s]:[i,t,e,n]:this.parentMenuView?[o,s,r,a]:[t,i,n,e]}};let fc=$k;fc._getOptimalPosition=Wa;class Kh extends zh{constructor(t){super(t),this.role="menu"}}var Wk=V(977),hT={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Lt()(Wk.A,hT),Wk.A.locals;class wo extends Te{constructor(t){super(t),this.set({withText:!0,withKeystroke:!0,tooltip:!1,role:"menuitem"}),this.extendTemplate({attributes:{class:["ck-menu-bar__menu__item__button"]}})}}class qk extends ym{constructor(t){super(t),this.set({withText:!0,withKeystroke:!0,tooltip:!1,role:"menuitem"}),this.extendTemplate({attributes:{class:["ck-menu-bar__menu__item__button"]}})}}var Gk=V(497),fT={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Lt()(Gk.A,fT),Gk.A.locals;const Kk=["mouseenter","arrowleft","arrowright","change:isOpen"];class pT extends Yt{constructor(t){super(t),this.menus=[];const e=t.t;this.set("isOpen",!1),this._setupIsOpenUpdater(),this.children=this.createCollection(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-menu-bar"],"aria-label":e("Editor menu bar"),role:"menubar"},children:this.children})}fillFromConfig(t,e){const n=iT({normalizedConfig:t,locale:this.locale,componentFactory:e}).items.map(o=>this._createMenu({componentFactory:e,menuDefinition:o}));this.children.addMany(n)}render(){super.render(),_l.toggleMenusAndFocusItemsOnHover(this),_l.closeMenusWhenTheBarCloses(this),_l.closeMenuWhenAnotherOnTheSameLevelOpens(this),_l.focusCycleMenusOnArrows(this),_l.closeOnClickOutside(this)}focus(){this.children.first&&this.children.first.focus()}close(){for(const t of this.children)t.isOpen=!1}registerMenu(t,e=null){e?(t.delegate(...Kk).to(e),t.parentMenuView=e):t.delegate(...Kk).to(this,n=>"menu:"+n),t._attachBehaviors(),this.menus.push(t)}_createMenu({componentFactory:t,menuDefinition:e,parentMenuView:n}){const o=this.locale,r=new fc(o);return this.registerMenu(r,n),r.buttonView.set({label:e.label}),r.once("change:isOpen",()=>{const s=new Kh(o);s.ariaLabel=e.label,r.panelView.children.add(s),s.items.addMany(this._createMenuItems({menuDefinition:e,parentMenuView:r,componentFactory:t}))}),r}_createMenuItems({menuDefinition:t,parentMenuView:e,componentFactory:n}){const o=this.locale,r=[];for(const s of t.groups){for(const a of s.items){const c=new qh(o,e);if(be(a))c.children.add(this._createMenu({componentFactory:n,menuDefinition:a,parentMenuView:e}));else{const l=this._createMenuItemContentFromFactory({componentName:a,componentFactory:n,parentMenuView:e});if(!l)continue;c.children.add(l)}r.push(c)}s!==t.groups[t.groups.length-1]&&r.push(new Rh(o))}return r}_createMenuItemContentFromFactory({componentName:t,parentMenuView:e,componentFactory:n}){const o=n.create(t);return o instanceof fc||o instanceof wo||o instanceof qk?(this._registerMenuTree(o,e),o.on("execute",()=>{this.close()}),o):(It("menu-bar-component-unsupported",{componentName:t,componentView:o}),null)}_registerMenuTree(t,e){if(!(t instanceof fc))return void t.delegate("mouseenter").to(e);this.registerMenu(t,e);const n=t.panelView.children.filter(r=>r instanceof Kh)[0];if(!n)return void t.delegate("mouseenter").to(e);const o=n.items.filter(r=>r instanceof dc);for(const r of o)this._registerMenuTree(r.children.get(0),t)}_setupIsOpenUpdater(){let t;this.on("menu:change:isOpen",(e,n,o)=>{clearTimeout(t),o?this.isOpen=!0:t=setTimeout(()=>{this.isOpen=Array.from(this.children).some(r=>r.isOpen)},0)})}}class gT extends yx{constructor(t,e){super(t),this.view=e,this._toolbarConfig=Lm(t.config.get("toolbar")),this._elementReplacer=new ei,this.listenTo(t.editing.view,"scrollToTheSelection",this._handleScrollToTheSelectionWithStickyPanel.bind(this))}get element(){return this.view.element}init(t){const e=this.editor,n=this.view,o=e.editing.view,r=n.editable,s=o.document.getRoot();r.name=s.rootName,n.render();const a=r.element;this.setEditableElement(r.name,a),n.editable.bind("isFocused").to(this.focusTracker),o.attachDomRoot(a),t&&this._elementReplacer.replace(t,this.element),this._initPlaceholder(),this._initToolbar(),n.menuBarView&&cT(e,n.menuBarView),this._initDialogPluginIntegration(),this.fire("ready")}destroy(){super.destroy();const t=this.view,e=this.editor.editing.view;this._elementReplacer.restore(),e.detachDomRoot(t.editable.name),t.destroy()}_initToolbar(){const t=this.view;t.stickyPanel.bind("isActive").to(this.focusTracker,"isFocused"),t.stickyPanel.limiterElement=t.element,t.stickyPanel.bind("viewportTopOffset").to(this,"viewportOffset",({top:e})=>e||0),t.toolbar.fillFromConfig(this._toolbarConfig,this.componentFactory),this.addToolbar(t.toolbar)}_initPlaceholder(){const t=this.editor,e=t.editing.view,n=e.document.getRoot(),o=t.sourceElement;let r;const s=t.config.get("placeholder");s&&(r=typeof s=="string"?s:s[this.view.editable.name]),!r&&o&&o.tagName.toLowerCase()==="textarea"&&(r=o.getAttribute("placeholder")),r&&(n.placeholder=r),ud({view:e,element:n,isDirectHost:!1,keepOnFocus:!0})}_handleScrollToTheSelectionWithStickyPanel(t,e,n){const o=this.view.stickyPanel;if(o.isSticky){const r=new Xt(o.element).height;e.viewportOffset.top+=r}else{const r=()=>{this.editor.editing.view.scrollToTheSelection(n)};this.listenTo(o,"change:isSticky",r),setTimeout(()=>{this.stopListening(o,"change:isSticky",r)},20)}}_initDialogPluginIntegration(){if(!this.editor.plugins.has("Dialog"))return;const t=this.view.stickyPanel,e=this.editor.plugins.get("Dialog");e.on("show",()=>{const n=e.view;n.on("moveTo",(o,r)=>{if(!t.isSticky||n.wasMoved)return;const s=new Xt(t.contentPanelElement);r[1]<s.bottom+Pd.defaultOffset&&(r[1]=s.bottom+Pd.defaultOffset)},{priority:"high"})},{priority:"low"})}}var Yk=V(7388),mT={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Lt()(Yk.A,mT),Yk.A.locals;class kT extends Tx{constructor(t,e,n={}){super(t),this.stickyPanel=new Lx(t),this.toolbar=new Ph(t,{shouldGroupWhenFull:n.shouldToolbarGroupWhenFull}),n.useMenuBar&&(this.menuBarView=new pT(t)),this.editable=new Sx(t,e)}render(){super.render(),this.menuBarView?this.stickyPanel.content.addMany([this.menuBarView,this.toolbar]):this.stickyPanel.content.add(this.toolbar),this.top.add(this.stickyPanel),this.main.add(this.editable)}}class Qk{constructor(t){if(this.crashes=[],this.state="initializing",this._now=Date.now,this.crashes=[],this._crashNumberLimit=typeof t.crashNumberLimit=="number"?t.crashNumberLimit:3,this._minimumNonErrorTimePeriod=typeof t.minimumNonErrorTimePeriod=="number"?t.minimumNonErrorTimePeriod:5e3,this._boundErrorHandler=e=>{const n="error"in e?e.error:e.reason;n instanceof Error&&this._handleError(n,e)},this._listeners={},!this._restart)throw new Error("The Watchdog class was split into the abstract `Watchdog` class and the `EditorWatchdog` class. Please, use `EditorWatchdog` if you have used the `Watchdog` class previously.")}destroy(){this._stopErrorHandling(),this._listeners={}}on(t,e){this._listeners[t]||(this._listeners[t]=[]),this._listeners[t].push(e)}off(t,e){this._listeners[t]=this._listeners[t].filter(n=>n!==e)}_fire(t,...e){const n=this._listeners[t]||[];for(const o of n)o.apply(this,[null,...e])}_startErrorHandling(){window.addEventListener("error",this._boundErrorHandler),window.addEventListener("unhandledrejection",this._boundErrorHandler)}_stopErrorHandling(){window.removeEventListener("error",this._boundErrorHandler),window.removeEventListener("unhandledrejection",this._boundErrorHandler)}_handleError(t,e){if(this._shouldReactToError(t)){this.crashes.push({message:t.message,stack:t.stack,filename:e instanceof ErrorEvent?e.filename:void 0,lineno:e instanceof ErrorEvent?e.lineno:void 0,colno:e instanceof ErrorEvent?e.colno:void 0,date:this._now()});const n=this._shouldRestart();this.state="crashed",this._fire("stateChange"),this._fire("error",{error:t,causesRestart:n}),n?this._restart():(this.state="crashedPermanently",this._fire("stateChange"))}}_shouldReactToError(t){return t.is&&t.is("CKEditorError")&&t.context!==void 0&&t.context!==null&&this.state==="ready"&&this._isErrorComingFromThisItem(t)}_shouldRestart(){return this.crashes.length<=this._crashNumberLimit?!0:(this.crashes[this.crashes.length-1].date-this.crashes[this.crashes.length-1-this._crashNumberLimit].date)/this._crashNumberLimit>this._minimumNonErrorTimePeriod}}function Yh(i,t=new Set){const e=[i],n=new Set;let o=0;for(;e.length>o;){const r=e[o++];if(!n.has(r)&&bT(r)&&!t.has(r))if(n.add(r),Symbol.iterator in r)try{for(const s of r)e.push(s)}catch{}else for(const s in r)s!=="defaultValue"&&e.push(r[s])}return n}function bT(i){const t=Object.prototype.toString.call(i),e=typeof i;return!(e==="number"||e==="boolean"||e==="string"||e==="symbol"||e==="function"||t==="[object Date]"||t==="[object RegExp]"||t==="[object Module]"||i==null||i._watchdogExcluded||i instanceof EventTarget||i instanceof Event)}function Zk(i,t,e=new Set){if(i===t&&typeof(n=i)=="object"&&n!==null)return!0;var n;const o=Yh(i,e),r=Yh(t,e);for(const s of o)if(r.has(s))return!0;return!1}var _T=Object.defineProperty,wT=Object.defineProperties,AT=Object.getOwnPropertyDescriptors,Vd=Object.getOwnPropertySymbols,Jk=Object.prototype.hasOwnProperty,Xk=Object.prototype.propertyIsEnumerable,tb=(i,t,e)=>t in i?_T(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e,Qh=(i,t)=>{for(var e in t||(t={}))Jk.call(t,e)&&tb(i,e,t[e]);if(Vd)for(var e of Vd(t))Xk.call(t,e)&&tb(i,e,t[e]);return i};class eb extends Qk{constructor(t,e={}){super(e),this._editor=null,this._lifecyclePromise=null,this._initUsingData=!0,this._editables={},this._throttledSave=zd(this._save.bind(this),typeof e.saveInterval=="number"?e.saveInterval:5e3),t&&(this._creator=(n,o)=>t.create(n,o)),this._destructor=n=>n.destroy()}get editor(){return this._editor}get _item(){return this._editor}setCreator(t){this._creator=t}setDestructor(t){this._destructor=t}_restart(){return Promise.resolve().then(()=>(this.state="initializing",this._fire("stateChange"),this._destroy())).catch(t=>{console.error("An error happened during the editor destroying.",t)}).then(()=>{const t={},e=[],n=this._config.rootsAttributes||{},o={};for(const[c,l]of Object.entries(this._data.roots))l.isLoaded?(t[c]="",o[c]=n[c]||{}):e.push(c);const r=(s=Qh({},this._config),a={extraPlugins:this._config.extraPlugins||[],lazyRoots:e,rootsAttributes:o,_watchdogInitialData:this._data},wT(s,AT(a)));var s,a;return delete r.initialData,r.extraPlugins.push(vT),this._initUsingData?this.create(t,r,r.context):Rt(this._elementOrData)?this.create(this._elementOrData,r,r.context):this.create(this._editables,r,r.context)}).then(()=>{this._fire("restart")})}create(t=this._elementOrData,e=this._config,n){return this._lifecyclePromise=Promise.resolve(this._lifecyclePromise).then(()=>(super._startErrorHandling(),this._elementOrData=t,this._initUsingData=typeof t=="string"||Object.keys(t).length>0&&typeof Object.values(t)[0]=="string",this._config=this._cloneEditorConfiguration(e)||{},this._config.context=n,this._creator(t,this._config))).then(o=>{this._editor=o,o.model.document.on("change:data",this._throttledSave),this._lastDocumentVersion=o.model.document.version,this._data=this._getData(),this._initUsingData||(this._editables=this._getEditables()),this.state="ready",this._fire("stateChange")}).finally(()=>{this._lifecyclePromise=null}),this._lifecyclePromise}destroy(){return this._lifecyclePromise=Promise.resolve(this._lifecyclePromise).then(()=>(this.state="destroyed",this._fire("stateChange"),super.destroy(),this._destroy())).finally(()=>{this._lifecyclePromise=null}),this._lifecyclePromise}_destroy(){return Promise.resolve().then(()=>{this._stopErrorHandling(),this._throttledSave.cancel();const t=this._editor;return this._editor=null,t.model.document.off("change:data",this._throttledSave),this._destructor(t)})}_save(){const t=this._editor.model.document.version;try{this._data=this._getData(),this._initUsingData||(this._editables=this._getEditables()),this._lastDocumentVersion=t}catch(e){console.error(e,"An error happened during restoring editor data. Editor will be restored from the previously saved data.")}}_setExcludedProperties(t){this._excludedProps=t}_getData(){const t=this._editor,e=t.model.document.roots.filter(a=>a.isAttached()&&a.rootName!="$graveyard"),{plugins:n}=t,o=n.has("CommentsRepository")&&n.get("CommentsRepository"),r=n.has("TrackChanges")&&n.get("TrackChanges"),s={roots:{},markers:{},commentThreads:JSON.stringify([]),suggestions:JSON.stringify([])};e.forEach(a=>{s.roots[a.rootName]={content:JSON.stringify(Array.from(a.getChildren())),attributes:JSON.stringify(Array.from(a.getAttributes())),isLoaded:a._isLoaded}});for(const a of t.model.markers)a._affectsData&&(s.markers[a.name]={rangeJSON:a.getRange().toJSON(),usingOperation:a._managedUsingOperations,affectsData:a._affectsData});return o&&(s.commentThreads=JSON.stringify(o.getCommentThreads({toJSON:!0,skipNotAttached:!0}))),r&&(s.suggestions=JSON.stringify(r.getSuggestions({toJSON:!0,skipNotAttached:!0}))),s}_getEditables(){const t={};for(const e of this.editor.model.document.getRootNames()){const n=this.editor.ui.getEditableElement(e);n&&(t[e]=n)}return t}_isErrorComingFromThisItem(t){return Zk(this._editor,t.context,this._excludedProps)}_cloneEditorConfiguration(t){return $t(t,(e,n)=>Rt(e)||n==="context"?e:void 0)}}class vT{constructor(t){this.editor=t,this._data=t.config.get("_watchdogInitialData")}init(){this.editor.data.on("init",t=>{t.stop(),this.editor.model.enqueueChange({isUndoable:!1},e=>{this._restoreCollaborationData(),this._restoreEditorData(e)}),this.editor.data.fire("ready")},{priority:999})}_createNode(t,e){if("name"in e){const n=t.createElement(e.name,e.attributes);if(e.children)for(const o of e.children)n._appendChild(this._createNode(t,o));return n}return t.createText(e.data,e.attributes)}_restoreEditorData(t){const e=this.editor;Object.entries(this._data.roots).forEach(([n,{content:o,attributes:r}])=>{const s=JSON.parse(o),a=JSON.parse(r),c=e.model.document.getRoot(n);for(const[l,u]of a)t.setAttribute(l,u,c);for(const l of s){const u=this._createNode(t,l);t.insert(u,c,"end")}}),Object.entries(this._data.markers).forEach(([n,o])=>{const{document:r}=e.model,s=o,{rangeJSON:{start:a,end:c}}=s,l=((y,I)=>{var F={};for(var G in y)Jk.call(y,G)&&I.indexOf(G)<0&&(F[G]=y[G]);if(y!=null&&Vd)for(var G of Vd(y))I.indexOf(G)<0&&Xk.call(y,G)&&(F[G]=y[G]);return F})(s,["rangeJSON"]),u=r.getRoot(a.root),p=t.createPositionFromPath(u,a.path,a.stickiness),k=t.createPositionFromPath(u,c.path,c.stickiness),v=t.createRange(p,k);t.addMarker(n,Qh({range:v},l))})}_restoreCollaborationData(){const t=JSON.parse(this._data.commentThreads),e=JSON.parse(this._data.suggestions);t.forEach(n=>{const o=this.editor.config.get("collaboration.channelId"),r=this.editor.plugins.get("CommentsRepository");r.hasCommentThread(n.threadId)&&r.getCommentThread(n.threadId).remove(),r.addCommentThread(Qh({channelId:o},n))}),e.forEach(n=>{const o=this.editor.plugins.get("TrackChangesEditing");o.hasSuggestion(n.id)?o.getSuggestion(n.id).attributes=n.attributes:o.addSuggestionData(n)})}}const wl=Symbol("MainQueueId");class CT{constructor(){this._onEmptyCallbacks=[],this._queues=new Map,this._activeActions=0}onEmpty(t){this._onEmptyCallbacks.push(t)}enqueue(t,e){const n=t===wl;this._activeActions++,this._queues.get(t)||this._queues.set(t,Promise.resolve());const o=(n?Promise.all(this._queues.values()):Promise.all([this._queues.get(wl),this._queues.get(t)])).then(e),r=o.catch(()=>{});return this._queues.set(t,r),o.finally(()=>{this._activeActions--,this._queues.get(t)===r&&this._activeActions===0&&this._onEmptyCallbacks.forEach(s=>s())})}}function nb(i){return Array.isArray(i)?i:[i]}class Hd extends Nh(rE){constructor(t,e={}){if(!Ud(t)&&e.initialData!==void 0)throw new m("editor-create-initial-data",null);super(e),this.config.define("menuBar.isVisible",!1),this.config.get("initialData")===void 0&&this.config.set("initialData",function(s){return Ud(s)?(a=s,a instanceof HTMLTextAreaElement?a.value:a.innerHTML):s;var a}(t)),Ud(t)&&(this.sourceElement=t),this.model.document.createRoot();const n=!this.config.get("toolbar.shouldNotGroupWhenFull"),o=this.config.get("menuBar"),r=new kT(this.locale,this.editing.view,{shouldToolbarGroupWhenFull:n,useMenuBar:o.isVisible});this.ui=new gT(this,r),function(s){if(!ii(s.updateSourceElement))throw new m("attachtoform-missing-elementapi-interface",s);const a=s.sourceElement;if(function(c){return!!c&&c.tagName.toLowerCase()==="textarea"}(a)&&a.form){let c;const l=a.form,u=()=>s.updateSourceElement();ii(l.submit)&&(c=l.submit,l.submit=()=>{u(),c.apply(l)}),l.addEventListener("submit",u),s.on("destroy",()=>{l.removeEventListener("submit",u),c&&(l.submit=c)})}}(this)}destroy(){return this.sourceElement&&this.updateSourceElement(),this.ui.destroy(),super.destroy()}static create(t,e={}){return new Promise(n=>{const o=new this(t,e);n(o.initPlugins().then(()=>o.ui.init(Ud(t)?t:null)).then(()=>o.data.init(o.config.get("initialData"))).then(()=>o.fire("ready")).then(()=>o))})}}function Ud(i){return Rt(i)}Hd.Context=tl,Hd.EditorWatchdog=eb,Hd.ContextWatchdog=class extends Qk{constructor(i,t={}){super(t),this._watchdogs=new Map,this._context=null,this._contextProps=new Set,this._actionQueues=new CT,this._watchdogConfig=t,this._creator=e=>i.create(e),this._destructor=e=>e.destroy(),this._actionQueues.onEmpty(()=>{this.state==="initializing"&&(this.state="ready",this._fire("stateChange"))})}setCreator(i){this._creator=i}setDestructor(i){this._destructor=i}get context(){return this._context}create(i={}){return this._actionQueues.enqueue(wl,()=>(this._contextConfig=i,this._create()))}getItem(i){return this._getWatchdog(i)._item}getItemState(i){return this._getWatchdog(i).state}add(i){const t=nb(i);return Promise.all(t.map(e=>this._actionQueues.enqueue(e.id,()=>{if(this.state==="destroyed")throw new Error("Cannot add items to destroyed watchdog.");if(!this._context)throw new Error("Context was not created yet. You should call the `ContextWatchdog#create()` method first.");let n;if(this._watchdogs.has(e.id))throw new Error(`Item with the given id is already added: '${e.id}'.`);if(e.type==="editor")return n=new eb(null,this._watchdogConfig),n.setCreator(e.creator),n._setExcludedProperties(this._contextProps),e.destructor&&n.setDestructor(e.destructor),this._watchdogs.set(e.id,n),n.on("error",(o,{error:r,causesRestart:s})=>{this._fire("itemError",{itemId:e.id,error:r}),s&&this._actionQueues.enqueue(e.id,()=>new Promise(a=>{const c=()=>{n.off("restart",c),this._fire("itemRestart",{itemId:e.id}),a()};n.on("restart",c)}))}),n.create(e.sourceElementOrData,e.config,this._context);throw new Error(`Not supported item type: '${e.type}'.`)})))}remove(i){const t=nb(i);return Promise.all(t.map(e=>this._actionQueues.enqueue(e,()=>{const n=this._getWatchdog(e);return this._watchdogs.delete(e),n.destroy()})))}destroy(){return this._actionQueues.enqueue(wl,()=>(this.state="destroyed",this._fire("stateChange"),super.destroy(),this._destroy()))}_restart(){return this._actionQueues.enqueue(wl,()=>(this.state="initializing",this._fire("stateChange"),this._destroy().catch(i=>{console.error("An error happened during destroying the context or items.",i)}).then(()=>this._create()).then(()=>this._fire("restart"))))}_create(){return Promise.resolve().then(()=>(this._startErrorHandling(),this._creator(this._contextConfig))).then(i=>(this._context=i,this._contextProps=Yh(this._context),Promise.all(Array.from(this._watchdogs.values()).map(t=>(t._setExcludedProperties(this._contextProps),t.create(void 0,void 0,this._context))))))}_destroy(){return Promise.resolve().then(()=>{this._stopErrorHandling();const i=this._context;return this._context=null,this._contextProps=new Set,Promise.all(Array.from(this._watchdogs.values()).map(t=>t.destroy())).then(()=>this._destructor(i))})}_getWatchdog(i){const t=this._watchdogs.get(i);if(!t)throw new Error(`Item with the given id was not registered: ${i}.`);return t}_isErrorComingFromThisItem(i){for(const t of this._watchdogs.values())if(t._isErrorComingFromThisItem(i))return!1;return Zk(this._context,i.context)}};class Al extends qs{constructor(t){super(t),this.domEventType=["paste","copy","cut","drop","dragover","dragstart","dragend","dragenter","dragleave"];const e=this.document;function n(o){return(r,s)=>{s.preventDefault();const a=s.dropRange?[s.dropRange]:null,c=new at(e,o);e.fire(c,{dataTransfer:s.dataTransfer,method:r.name,targetRanges:a,target:s.target,domEvent:s.domEvent}),c.stop.called&&s.stopPropagation()}}this.listenTo(e,"paste",n("clipboardInput"),{priority:"low"}),this.listenTo(e,"drop",n("clipboardInput"),{priority:"low"}),this.listenTo(e,"dragover",n("dragging"),{priority:"low"})}onDomEvent(t){const e="clipboardData"in t?t.clipboardData:t.dataTransfer,n=t.type=="drop"||t.type=="paste",o={dataTransfer:new Jp(e,{cacheFiles:n})};t.type!="drop"&&t.type!="dragover"||(o.dropRange=function(r,s){const a=s.target.ownerDocument,c=s.clientX,l=s.clientY;let u;return a.caretRangeFromPoint&&a.caretRangeFromPoint(c,l)?u=a.caretRangeFromPoint(c,l):s.rangeParent&&(u=a.createRange(),u.setStart(s.rangeParent,s.rangeOffset),u.collapse(!0)),u?r.domConverter.domRangeToView(u):null}(this.view,t)),this.fire(t.type,t,o)}}const ib=["figcaption","li"],ob=["ol","ul"];function rb(i){if(i.is("$text")||i.is("$textProxy"))return i.data;if(i.is("element","img")&&i.hasAttribute("alt"))return i.getAttribute("alt");if(i.is("element","br"))return`
`;let t="",e=null;for(const n of i.getChildren())t+=yT(n,e)+rb(n),e=n;return t}function yT(i,t){return t?i.is("element","li")&&!i.isEmpty&&i.getChild(0).is("containerElement")||ob.includes(i.name)&&ob.includes(t.name)?`

`:i.is("containerElement")||t.is("containerElement")?ib.includes(i.name)||ib.includes(t.name)?`
`:`
