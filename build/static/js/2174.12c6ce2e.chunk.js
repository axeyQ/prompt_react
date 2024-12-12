"use strict";(self.webpackChunkprompt_react=self.webpackChunkprompt_react||[]).push([[2174],{1533:function(n,t,e){e.d(t,{Z:function(){return x},W:function(){return v}});var r=e(885),i=e(2791),o=e(165),a=e(4944);var u=function(n){var t=n.children,e=n.in,r=n.mountOnEnter,o=n.unmountOnExit,a=(0,i.useRef)(e);return(0,i.useEffect)((function(){e&&(a.current=!0)}),[e]),e?t:o||!a.current&&r?null:t},l=e(184),s=["active","eventKey","mountOnEnter","transition","unmountOnExit","role","onEnter","onEntering","onEntered","onExit","onExiting","onExited"],c=["activeKey","getControlledId","getControllerId"],d=["as"];function E(n,t){if(null==n)return{};var e,r,i={},o=Object.keys(n);for(r=0;r<o.length;r++)e=o[r],t.indexOf(e)>=0||(i[e]=n[e]);return i}function v(n){var t=n.active,e=n.eventKey,r=n.mountOnEnter,u=n.transition,l=n.unmountOnExit,d=n.role,v=void 0===d?"tabpanel":d,f=n.onEnter,x=n.onEntering,m=n.onEntered,Z=n.onExit,b=n.onExiting,p=n.onExited,h=E(n,s),O=(0,i.useContext)(o.Z);if(!O)return[Object.assign({},h,{role:v}),{eventKey:e,isActive:t,mountOnEnter:r,transition:u,unmountOnExit:l,onEnter:f,onEntering:x,onEntered:m,onExit:Z,onExiting:b,onExited:p}];var g=O.activeKey,y=O.getControlledId,C=O.getControllerId,j=E(O,c),K=(0,a.h)(e);return[Object.assign({},h,{role:v,id:y(e),"aria-labelledby":C(e)}),{eventKey:e,isActive:null==t&&null!=K?(0,a.h)(g)===K:t,transition:u||j.transition,mountOnEnter:null!=r?r:j.mountOnEnter,unmountOnExit:null!=l?l:j.unmountOnExit,onEnter:f,onEntering:x,onEntered:m,onExit:Z,onExiting:b,onExited:p}]}var f=i.forwardRef((function(n,t){var e=n.as,i=void 0===e?"div":e,s=v(E(n,d)),c=(0,r.Z)(s,2),f=c[0],x=c[1],m=x.isActive,Z=x.onEnter,b=x.onEntering,p=x.onEntered,h=x.onExit,O=x.onExiting,g=x.onExited,y=x.mountOnEnter,C=x.unmountOnExit,j=x.transition,K=void 0===j?u:j;return(0,l.jsx)(o.Z.Provider,{value:null,children:(0,l.jsx)(a.Z.Provider,{value:null,children:(0,l.jsx)(K,{in:m,onEnter:Z,onEntering:b,onEntered:p,onExit:h,onExiting:O,onExited:g,mountOnEnter:y,unmountOnExit:C,children:(0,l.jsx)(i,Object.assign({},f,{ref:t,hidden:!m,"aria-hidden":!m}))})})})}));f.displayName="TabPanel";var x=f},3074:function(n,t,e){e.d(t,{Z:function(){return f}});var r=e(885),i=e(2791),o=e(239),a={prefix:String(Math.round(1e10*Math.random())),current:0},u=i.createContext(a);var l=Boolean("undefined"!==typeof window&&window.document&&window.document.createElement);var s=e(165),c=e(4944),d=e(1533),E=e(184),v=function(n){var t=n.id,e=n.generateChildId,d=n.onSelect,v=n.activeKey,f=n.defaultActiveKey,x=n.transition,m=n.mountOnEnter,Z=n.unmountOnExit,b=n.children,p=(0,o.$c)(v,f,d),h=(0,r.Z)(p,2),O=h[0],g=h[1],y=function(n){var t=(0,i.useContext)(u);return t!==a||l||console.warn("When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server."),(0,i.useMemo)((function(){return n||"react-aria"+t.prefix+"-"+ ++t.current}),[n])}(t),C=(0,i.useMemo)((function(){return e||function(n,t){return y?"".concat(y,"-").concat(t,"-").concat(n):null}}),[y,e]),j=(0,i.useMemo)((function(){return{onSelect:g,activeKey:O,transition:x,mountOnEnter:m||!1,unmountOnExit:Z||!1,getControlledId:function(n){return C(n,"tabpane")},getControllerId:function(n){return C(n,"tab")}}}),[g,O,x,m,Z,C]);return(0,E.jsx)(s.Z.Provider,{value:j,children:(0,E.jsx)(c.Z.Provider,{value:g||null,children:b})})};v.Panel=d.Z;var f=v},1734:function(n,t,e){e.d(t,{Z:function(){return Z}});var r=e(2007),i=e.n(r),o=(e(2791),e(1413)),a=e(5987),u=e(3074),l=e(3507),s=e(184),c=["transition"],d=function(n){var t=n.transition,e=(0,a.Z)(n,c);return(0,s.jsx)(u.Z,(0,o.Z)((0,o.Z)({},e),{},{transition:(0,l.Z)(t)}))};d.displayName="TabContainer";var E=d,v=e(4886),f=e(4504),x={eventKey:i().oneOfType([i().string,i().number]),title:i().node.isRequired,disabled:i().bool,tabClassName:i().string,tabAttrs:i().object},m=function(){throw new Error("ReactBootstrap: The `Tab` component is not meant to be rendered! It's an abstract component that is only valid as a direct Child of the `Tabs` Component. For custom tabs components use TabPane and TabsContainer directly")};m.propTypes=x;var Z=Object.assign(m,{Container:E,Content:v.Z,Pane:f.Z})},4886:function(n,t,e){var r=e(6543);t.Z=(0,r.Z)("tab-content")},4504:function(n,t,e){var r=e(1413),i=e(885),o=e(5987),a=e(1694),u=e.n(a),l=e(2791),s=e(4944),c=e(165),d=e(1533),E=e(162),v=e(2709),f=e(3507),x=e(184),m=["bsPrefix","transition"],Z=["className","as"],b=l.forwardRef((function(n,t){var e=n.bsPrefix,a=n.transition,l=(0,o.Z)(n,m),b=(0,d.W)((0,r.Z)((0,r.Z)({},l),{},{transition:(0,f.Z)(a)})),p=(0,i.Z)(b,2),h=p[0],O=h.className,g=h.as,y=void 0===g?"div":g,C=(0,o.Z)(h,Z),j=p[1],K=j.isActive,w=j.onEnter,P=j.onEntering,N=j.onEntered,T=j.onExit,S=j.onExiting,A=j.onExited,I=j.mountOnEnter,R=j.unmountOnExit,k=j.transition,M=void 0===k?v.Z:k,W=(0,E.vE)(e,"tab-pane");return(0,x.jsx)(c.Z.Provider,{value:null,children:(0,x.jsx)(s.Z.Provider,{value:null,children:(0,x.jsx)(M,{in:K,onEnter:w,onEntering:P,onEntered:N,onExit:T,onExiting:S,onExited:A,mountOnEnter:I,unmountOnExit:R,children:(0,x.jsx)(y,(0,r.Z)((0,r.Z)({},C),{},{ref:t,className:u()(O,W,K&&"active")}))})})})}));b.displayName="TabPane",t.Z=b},9151:function(n,t,e){e.d(t,{Z:function(){return h}});var r=e(5987),i=e(1413),o=e(2791),a=e(239),u=e(3074),l=e(1057),s=e(3818),c=e(881),d=e(4886),E=e(4504);function v(n,t){var e=0;return o.Children.map(n,(function(n){return o.isValidElement(n)?t(n,e++):n}))}var f=e(3507),x=e(184),m=["id","onSelect","transition","mountOnEnter","unmountOnExit","children","activeKey"];function Z(n){var t;return function(n,t){var e=0;o.Children.forEach(n,(function(n){o.isValidElement(n)&&t(n,e++)}))}(n,(function(n){null==t&&(t=n.props.eventKey)})),t}function b(n){var t=n.props,e=t.title,r=t.eventKey,o=t.disabled,a=t.tabClassName,u=t.tabAttrs,l=t.id;return null==e?null:(0,x.jsx)(c.Z,{as:"li",role:"presentation",children:(0,x.jsx)(s.Z,(0,i.Z)((0,i.Z)({as:"button",type:"button",eventKey:r,disabled:o,id:l,className:a},u),{},{children:e}))})}var p=function(n){var t=(0,a.Ch)(n,{activeKey:"onSelect"}),e=t.id,o=t.onSelect,s=t.transition,c=t.mountOnEnter,p=t.unmountOnExit,h=t.children,O=t.activeKey,g=void 0===O?Z(h):O,y=(0,r.Z)(t,m);return(0,x.jsxs)(u.Z,{id:e,activeKey:g,onSelect:o,transition:(0,f.Z)(s),mountOnEnter:c,unmountOnExit:p,children:[(0,x.jsx)(l.Z,(0,i.Z)((0,i.Z)({},y),{},{role:"tablist",as:"ul",children:v(h,b)})),(0,x.jsx)(d.Z,{children:v(h,(function(n){var t=(0,i.Z)({},n.props);return delete t.title,delete t.disabled,delete t.tabClassName,delete t.tabAttrs,(0,x.jsx)(E.Z,(0,i.Z)({},t))}))})]})};p.defaultProps={variant:"tabs",mountOnEnter:!1,unmountOnExit:!1},p.displayName="Tabs";var h=p},3507:function(n,t,e){e.d(t,{Z:function(){return i}});var r=e(2709);function i(n){return"boolean"===typeof n?n?r.Z:void 0:n}}}]);
//# sourceMappingURL=2174.12c6ce2e.chunk.js.map