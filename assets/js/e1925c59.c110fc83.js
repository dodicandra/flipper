(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{143:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return f}));var i=n(3),o=n(7),r=(n(0),n(158)),a=n(159),c=n(161),l={id:"establishing-a-connection",title:"Secure Communication"},s={unversionedId:"extending/establishing-a-connection",id:"extending/establishing-a-connection",isDocsHomePage:!1,title:"Secure Communication",description:"Below is an outline of how a connection is established between an app with our SDK integrated, and the desktop app. This all goes on behind the scenes inside the mobile SDK, so users shouldn't need to worry about it.",source:"@site/../docs/extending/establishing-a-connection.mdx",slug:"/extending/establishing-a-connection",permalink:"/docs/extending/establishing-a-connection",editUrl:"https://github.com/facebook/flipper/blob/master/website/../docs/extending/establishing-a-connection.mdx",version:"current",sidebar:"setup",previous:{title:"Implementing a Flipper Client",permalink:"/docs/extending/new-clients"},next:{title:"Implementing Layout Inspection",permalink:"/docs/extending/supporting-layout"}},p=[{value:"Transport Protocol",id:"transport-protocol",children:[]},{value:"Client-Server relationship",id:"client-server-relationship",children:[]},{value:"Certificate Exchange",id:"certificate-exchange",children:[]}],u=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(r.b)("div",t)}},d=u("OssOnly"),b=u("FbInternalOnly"),h={toc:p};function f(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(i.a)({},h,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Below is an outline of how a connection is established between an app with our SDK integrated, and the desktop app. This all goes on behind the scenes inside the mobile SDK, so users shouldn't need to worry about it."),Object(r.b)("p",null,"The connection process is a little more involved than you might expect, to stop Flipper clients on mobile apps from connecting to any server that happens to be running on localhost and potentially leaking information from your app."),Object(r.b)("h2",{id:"transport-protocol"},"Transport Protocol"),Object(r.b)("p",null,"Flipper uses ",Object(r.b)("a",{parentName:"p",href:"http://rsocket.io/"},"RSocket")," to communicate between the desktop and mobile apps. RSocket allows for bi-directional communication."),Object(r.b)("h2",{id:"client-server-relationship"},"Client-Server relationship"),Object(r.b)("p",null,"When the desktop app starts up, it opens a secure socket on port 8088.\nThe Flipper client will continually attempt to connect to this port on localhost to establish a connection with the desktop app."),Object(r.b)("h2",{id:"certificate-exchange"},"Certificate Exchange"),Object(r.b)("p",null,"To avoid mobile apps from connecting to untrusted ports on localhost, a Flipper client should only connect to servers that have a valid, trusted TLS certificate.\nIn order for the mobile app to know which certificates it can trust, it conducts a certificate exchange with the desktop app before it can make its first secure connection."),Object(r.b)("p",null,"This is achieved through the following steps:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Desktop app starts an insecure server on port 8089."),Object(r.b)("li",{parentName:"ul"},"Mobile app connects to localhost:8089 and sends a Certificate Signing Request to the desktop app."),Object(r.b)("li",{parentName:"ul"},"Desktop app uses it's private key (this is generated once and stored in ~/.flipper) to sign a client certificate for the mobile app."),Object(r.b)("li",{parentName:"ul"},"Along with the Certificate Signing Request, mobile app also lets the desktop app know which certificate exchange medium to use."),Object(r.b)("li",{parentName:"ul"},"If the chosen Certificate Exchange Medium is FS_ACCESS, the desktop uses ADB (for Android), or the mounted file system (for iOS simulators) to write the following files to the mobile app's private data partition",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Server certificate that the mobile app can now trust."),Object(r.b)("li",{parentName:"ul"},"Client certificate for the mobile app to use going forward."))),Object(r.b)("li",{parentName:"ul"},"If the chosen Certificate Exchange Medium is WWW, the desktop app will use your implementation of Certificate Uploader to upload the certificates.",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Once uploaded the desktop app will reply back with the device id, which can be used by Certificate Provider on the client side to fetch those certificates."),Object(r.b)("li",{parentName:"ul"},Object(r.b)(d,{mdxType:"OssOnly"}," Right now we do not support WWW mode. We are working on it to bring the support for open source.")," ",Object(r.b)(b,{mdxType:"FbInternalOnly"},"To know more about the WWW mode and how to use it, follow the guide ",Object(r.b)(c.a,{to:Object(a.a)("/docs/fb/www-certificate-exchange"),mdxType:"Link"},"here"),".")))),Object(r.b)("li",{parentName:"ul"},"Now the mobile app knows which server certificate it can trust, and can connect to the secure server.")),Object(r.b)("p",null,"This allows the mobile app to trust a certificate if and only if, it is stored inside its internal data partition. Typically it's only possible to write there with physical access to the device (i.e. through ADB or a mounted simulator)."),Object(r.b)("p",null,"To get the desktop app to generate a client certificate for your client, and then deploy it, go through the following steps:"),Object(r.b)("p",null,"Use an RSocket client to connect (insecurely) to the following URL:"),Object(r.b)("p",null,"(Parameters are defined in ",Object(r.b)("a",{parentName:"p",href:"new-clients"},"Implementing a Flipper Client"),")"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"localhost:8089/sonar?os={OS}\n                     &device={DEVICE}\n                     &app={APP}\n                     &sdk_version={SDK_VERSION}\n                     &medium={CERTIFICATE_EXCHANGE_MEDIUM}\n")),Object(r.b)("p",null,"On that connection, send the following payload:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},'Request = {\n  "method": "signCertificate",\n  "csr": string,\n  "destination": string,\n  "medium": int\n}\n')),Object(r.b)("p",null,"Where ",Object(r.b)("inlineCode",{parentName:"p"},"csr")," is a Certificate Signing Request the client has generated, and ",Object(r.b)("inlineCode",{parentName:"p"},"destination")," identifies a location accessible to both the client and Flipper desktop, where the certificate should be placed."),Object(r.b)("p",null,"The Subject Common Name (CN=...) must be included in the CSR, and your ",Object(r.b)("inlineCode",{parentName:"p"},"CertificateProvider")," implementation in Flipper may use this in combination with the ",Object(r.b)("inlineCode",{parentName:"p"},"destination")," to determine where to put the certificate."),Object(r.b)("p",null,"This will ask Flipper desktop to generate a client certificate, using the CSR provided, and put it into the specified ",Object(r.b)("inlineCode",{parentName:"p"},"destination"),"."),Object(r.b)("p",null,"Depending on the client, ",Object(r.b)("inlineCode",{parentName:"p"},"destination")," can have a different meaning. A basic example would be a file path, that both the desktop and the client have access to. With this Flipper desktop could write the certificate to that path. A more involved example is that of the Android Client, where destination specifies a relative path inside an app container. And the Subject Common Name determines which app container. Together these two pieces of information form an absolute file path inside an android device."),Object(r.b)("p",null,"For Flipper desktop to work with a given Client type, it needs to be modified to know how to correctly interpret the ",Object(r.b)("inlineCode",{parentName:"p"},"destination")," argument, and deploy certificates to it."),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"destination")," field may not be relevant if your ",Object(r.b)("inlineCode",{parentName:"p"},"medium")," value is more than 1. ",Object(r.b)("inlineCode",{parentName:"p"},"medium=1"),"(default) means Flipper should do certificate exchange by directly putting certificates at ",Object(r.b)("inlineCode",{parentName:"p"},"destination")," in the sandbox of the app. ",Object(r.b)("inlineCode",{parentName:"p"},"medium=2")," means Flipper will use Certificate Uploader and Provider to upload certificates and download it on the client side respectively."),Object(r.b)("p",null,"You can see the current implementations in ",Object(r.b)("a",{parentName:"p",href:"https://github.com/facebook/flipper/blob/master/desktop/app/src/utils/CertificateProvider.tsx"},"CertificateProvider.tsx"),"."))}f.isMDXComponent=!0},158:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return h}));var i=n(0),o=n.n(i);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),p=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,a=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),b=i,h=u["".concat(a,".").concat(b)]||u[b]||d[b]||r;return n?o.a.createElement(h,c(c({ref:t},s),{},{components:n})):o.a.createElement(h,c({ref:t},s))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var s=2;s<r;s++)a[s]=n[s];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},159:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}));var i=n(10),o=n(160);function r(){var e=Object(i.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,r=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,i){var r=void 0===i?{}:i,a=r.forcePrependBaseUrl,c=void 0!==a&&a,l=r.absolute,s=void 0!==l&&l;if(!n)return n;if(n.startsWith("#"))return n;if(Object(o.b)(n))return n;if(c)return t+n;var p=n.startsWith(t)?n:t+n.replace(/^\//,"");return s?e+p:p}(r,n,e,t)}}}function a(e,t){return void 0===t&&(t={}),(0,r().withBaseUrl)(e,t)}},160:function(e,t,n){"use strict";function i(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!i(e)}n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return o}))},161:function(e,t,n){"use strict";var i=n(0),o=n.n(i),r=n(11),a=n(160),c=n(8),l=Object(i.createContext)({collectLink:function(){}}),s=n(159),p=function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(i=Object.getOwnPropertySymbols(e);o<i.length;o++)t.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(n[i[o]]=e[i[o]])}return n};t.a=function(e){var t,n,u,d=e.isNavLink,b=e.to,h=e.href,f=e.activeClassName,m=e.isActive,O=e["data-noBrokenLinkCheck"],g=e.autoAddBaseUrl,v=void 0===g||g,w=p(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),j=Object(s.b)().withBaseUrl,y=Object(i.useContext)(l),C=b||h,k=Object(a.a)(C),N=null==C?void 0:C.replace("pathname://",""),x=void 0!==N?(n=N,v&&function(e){return e.startsWith("/")}(n)?j(n):n):void 0,S=Object(i.useRef)(!1),E=d?r.e:r.c,P=c.default.canUseIntersectionObserver;Object(i.useEffect)((function(){return!P&&k&&window.docusaurus.prefetch(x),function(){P&&u&&u.disconnect()}}),[x,P,k]);var T=null!==(t=null==x?void 0:x.startsWith("#"))&&void 0!==t&&t,D=!x||!k||T;return x&&k&&!T&&!O&&y.collectLink(x),D?o.a.createElement("a",Object.assign({href:x},C&&!k&&{target:"_blank",rel:"noopener noreferrer"},w)):o.a.createElement(E,Object.assign({},w,{onMouseEnter:function(){S.current||(window.docusaurus.preload(x),S.current=!0)},innerRef:function(e){var t,n;P&&e&&k&&(t=e,n=function(){window.docusaurus.prefetch(x)},(u=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(u.unobserve(t),u.disconnect(),n())}))}))).observe(t))},to:x||""},d&&{isActive:m,activeClassName:f}))}}}]);