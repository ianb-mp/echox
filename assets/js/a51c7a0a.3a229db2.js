"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5548],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var a=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(r),h=o,m=u["".concat(l,".").concat(h)]||u[h]||d[h]||n;return r?a.createElement(m,s(s({ref:t},c),{},{components:r})):a.createElement(m,s({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,s=new Array(n);s[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:o,s[1]=i;for(var p=2;p<n;p++)s[p]=r[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},9697:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>n,metadata:()=>i,toc:()=>p});var a=r(7462),o=(r(7294),r(3905));const n={description:"IP address",slug:"/ip-address",sidebar_position:8},s="IP Address",i={unversionedId:"guide/ip-address",id:"guide/ip-address",title:"IP Address",description:"IP address",source:"@site/docs/guide/ip-address.md",sourceDirName:"guide",slug:"/ip-address",permalink:"/docs/ip-address",draft:!1,editUrl:"https://github.com/labstack/echox/blob/master/website/docs/guide/ip-address.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{description:"IP address",slug:"/ip-address",sidebar_position:8},sidebar:"docsSidebar",previous:{title:"Start Server",permalink:"/docs/start-server"},next:{title:"Request",permalink:"/docs/request"}},l={},p=[{value:"Case 1. With no proxy",id:"case-1-with-no-proxy",level:2},{value:"Case 2. With proxies using X-Forwarded-For header",id:"case-2-with-proxies-using-x-forwarded-for-header",level:2},{value:"Case 3. With proxies using X-Real-IP header",id:"case-3-with-proxies-using-x-real-ip-header",level:2},{value:"About default behavior",id:"about-default-behavior",level:2}],c={toc:p},u="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"ip-address"},"IP Address"),(0,o.kt)("p",null,"IP address plays fundamental role in HTTP; it's used for access control, auditing, geo-based access analysis and more.\nEcho provides handy method ",(0,o.kt)("a",{parentName:"p",href:"https://godoc.org/github.com/labstack/echo#Context"},(0,o.kt)("inlineCode",{parentName:"a"},"Context#RealIP()"))," for that."),(0,o.kt)("p",null,"However, it is not trivial to retrieve the ",(0,o.kt)("em",{parentName:"p"},"real")," IP address from requests especially when you put L7 proxies before the application.\nIn such situation, ",(0,o.kt)("em",{parentName:"p"},"real")," IP needs to be relayed on HTTP layer from proxies to your app, but you must not trust HTTP headers unconditionally.\nOtherwise you might give someone a chance of deceiving you. ",(0,o.kt)("strong",{parentName:"p"},"A security risk!")),(0,o.kt)("p",null,"To retrieve IP address reliably/securely, you must let your application be aware of the entire architecture of your infrastructrure.\nIn Echo, this can be done by configuring ",(0,o.kt)("inlineCode",{parentName:"p"},"Echo#IPExtractor")," appropriately.\nThis guides show you why and how."),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Note: if you don't set ",(0,o.kt)("inlineCode",{parentName:"p"},"Echo#IPExtractor")," explicitly, Echo fallback to legacy behavior, which is not a good choice.")),(0,o.kt)("p",null,"Let's start from two questions to know the right direction:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Do you put any HTTP (L7) proxy in front of the application?",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"It includes both cloud solutions (such as AWS ALB or GCP HTTP LB) and OSS ones (such as Nginx, Envoy or Istio ingress gateway)."))),(0,o.kt)("li",{parentName:"ol"},"If yes, what HTTP header do your proxies use to pass client IP to the application?")),(0,o.kt)("h2",{id:"case-1-with-no-proxy"},"Case 1. With no proxy"),(0,o.kt)("p",null,"If you put no proxy (e.g.: directory facing to the internet), all you need to (and have to) see is IP address from network layer.\nAny HTTP header is untrustable because the clients have full control what headers to be set."),(0,o.kt)("p",null,"In this case, use ",(0,o.kt)("inlineCode",{parentName:"p"},"echo.ExtractIPDirect()"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"e.IPExtractor = echo.ExtractIPDirect()\n")),(0,o.kt)("h2",{id:"case-2-with-proxies-using-x-forwarded-for-header"},"Case 2. With proxies using X-Forwarded-For header"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Forwarded-For"},(0,o.kt)("inlineCode",{parentName:"a"},"X-Forwared-For")," (XFF)")," is the popular header to relay clients' IP addresses.\nAt each hop on the proxies, they append the request IP address at the end of the header."),(0,o.kt)("p",null,"Following example diagram illustrates this behavior."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},'            \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510            \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510            \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500>\u2502 Proxy 1  \u2502\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500>\u2502 Proxy 2  \u2502\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500>\u2502 Your app \u2502\n            \u2502 (IP: b)  \u2502            \u2502 (IP: c)  \u2502            \u2502          \u2502\n            \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518            \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518            \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\nCase 1.\nXFF:  ""                    "a"                     "a, b"\n                                                    ~~~~~~\nCase 2.\nXFF:  "x"                   "x, a"                  "x, a, b"\n                                                    ~~~~~~~~~\n                                                    \u2191 What your app will see\n')),(0,o.kt)("p",null,"In this case, use ",(0,o.kt)("strong",{parentName:"p"},"first ",(0,o.kt)("em",{parentName:"strong"},"untrustable")," IP reading from right"),'. Never use first one reading from left, as it is configurable by client. Here "trustable" means "you are sure the IP address belongs to your infrastructure". In above example, if ',(0,o.kt)("inlineCode",{parentName:"p"},"b")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"c")," are trustable, the IP address of the client is ",(0,o.kt)("inlineCode",{parentName:"p"},"a")," for both cases, never be ",(0,o.kt)("inlineCode",{parentName:"p"},"x"),"."),(0,o.kt)("p",null,"In Echo, use ",(0,o.kt)("inlineCode",{parentName:"p"},"ExtractIPFromXFFHeader(...TrustOption)"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"e.IPExtractor = echo.ExtractIPFromXFFHeader()\n")),(0,o.kt)("p",null,"By default, it trusts internal IP addresses (loopback, link-local unicast, private-use and unique local address from ",(0,o.kt)("a",{parentName:"p",href:"https://tools.ietf.org/html/rfc6890"},"RFC6890"),", ",(0,o.kt)("a",{parentName:"p",href:"https://tools.ietf.org/html/rfc4291"},"RFC4291")," and ",(0,o.kt)("a",{parentName:"p",href:"https://tools.ietf.org/html/rfc4193"},"RFC4193"),"). To control this behavior, use ",(0,o.kt)("a",{parentName:"p",href:"https://godoc.org/github.com/labstack/echo#TrustOption"},(0,o.kt)("inlineCode",{parentName:"a"},"TrustOption")),"s."),(0,o.kt)("p",null,"E.g.:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"e.IPExtractor = echo.ExtractIPFromXFFHeader(\n    TrustLinkLocal(false),\n    TrustIPRanges(lbIPRange),\n)\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Ref: ",(0,o.kt)("a",{parentName:"li",href:"https://godoc.org/github.com/labstack/echo#TrustOption"},"https://godoc.org/github.com/labstack/echo#TrustOption"))),(0,o.kt)("h2",{id:"case-3-with-proxies-using-x-real-ip-header"},"Case 3. With proxies using X-Real-IP header"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"X-Real-IP")," is another HTTP header to relay clients' IP addresses, but it carries only one address unlike XFF."),(0,o.kt)("p",null,"If your proxies set this header, use ",(0,o.kt)("inlineCode",{parentName:"p"},"ExtractIPFromRealIPHeader(...TrustOption)"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"e.IPExtractor = echo.ExtractIPFromRealIPHeader()\n")),(0,o.kt)("p",null,"Again, it trusts internal IP addresses by default (loopback, link-local unicast, private-use and unique local address from ",(0,o.kt)("a",{parentName:"p",href:"https://tools.ietf.org/html/rfc6890"},"RFC6890"),", ",(0,o.kt)("a",{parentName:"p",href:"https://tools.ietf.org/html/rfc4291"},"RFC4291")," and ",(0,o.kt)("a",{parentName:"p",href:"https://tools.ietf.org/html/rfc4193"},"RFC4193"),"). To control this behavior, use ",(0,o.kt)("a",{parentName:"p",href:"https://godoc.org/github.com/labstack/echo#TrustOption"},(0,o.kt)("inlineCode",{parentName:"a"},"TrustOption")),"s."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Ref: ",(0,o.kt)("a",{parentName:"li",href:"https://godoc.org/github.com/labstack/echo#TrustOption"},"https://godoc.org/github.com/labstack/echo#TrustOption"))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Never forget")," to configure the outermost proxy (i.e.; at the edge of your infrastructure) ",(0,o.kt)("strong",{parentName:"p"},"not to pass through incoming headers"),".\nOtherwise there is a chance of fraud, as it is what clients can control.")),(0,o.kt)("h2",{id:"about-default-behavior"},"About default behavior"),(0,o.kt)("p",null,"In default behavior, Echo sees all of first XFF header, X-Real-IP header and IP from network layer."),(0,o.kt)("p",null,"As you might already notice, after reading this article, this is not good.\nSole reason this is default is just backward compatibility."))}d.isMDXComponent=!0}}]);