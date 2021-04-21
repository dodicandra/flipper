(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{108:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return b}));var r=t(3),o=t(7),i=(t(0),t(158)),a={id:"loading-custom-plugins",title:"Dynamically Loading Plugins"},l={unversionedId:"extending/loading-custom-plugins",id:"extending/loading-custom-plugins",isDocsHomePage:!1,title:"Dynamically Loading Plugins",description:"Inside Facebook, plugins sources are stored and loaded from ~/fbsource/xplat/sonar/desktop/plugins,",source:"@site/../docs/extending/loading-custom-plugins.mdx",slug:"/extending/loading-custom-plugins",permalink:"/docs/extending/loading-custom-plugins",editUrl:"https://github.com/facebook/flipper/blob/master/website/../docs/extending/loading-custom-plugins.mdx",version:"current",sidebar:"extending",previous:{title:"Development Setup",permalink:"/docs/extending/dev-setup"},next:{title:"Plugin structure",permalink:"/docs/extending/desktop-plugin-structure"}},c=[],p=function(e){return function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(i.b)("div",n)}},s=p("FbInternalOnly"),u=p("OssOnly"),d={toc:c};function b(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},d,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)(s,{mdxType:"FbInternalOnly"},Object(i.b)("div",{class:"warning"},Object(i.b)("p",null,"Inside Facebook, plugins sources are stored and loaded from ",Object(i.b)("inlineCode",{parentName:"p"},"~/fbsource/xplat/sonar/desktop/plugins"),",\nin which case no further configuration is needed."),Object(i.b)("p",null,"If your team uses Flipper plugins that are stored outside ",Object(i.b)("inlineCode",{parentName:"p"},"fbsource"),", please follow your team specific instructions."))),Object(i.b)("p",null,"Flipper loads and runs plugins it finds in a configurable location. The paths searched are specified in ",Object(i.b)("inlineCode",{parentName:"p"},"~/.flipper/config.json"),". These paths, ",Object(i.b)("inlineCode",{parentName:"p"},"pluginPaths"),", should contain one folder for each of the plugins it stores. An example config setting and plugin file structure is shown below:"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"~/.flipper/config.json"),":"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},'{\n  ...,\n  "pluginPaths": ["~/flipper-plugins"]\n}\n')),Object(i.b)("p",null,"Plugin File example structure:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"~ flipper-plugins/\n    my-plugin/\n      package.json\n      src/index.tsx\n      dist/bundle.js\n")),Object(i.b)(u,{mdxType:"OssOnly"},Object(i.b)("p",null,"Note: when using ",Object(i.b)("inlineCode",{parentName:"p"},"npx flipper-pkg init")," for scaffolding, as explained in the ",Object(i.b)("a",{parentName:"p",href:"../tutorial/intro"},"tutorial")," or on the next page, the path should be configured automatically for you in most cases.")),Object(i.b)("p",null,"Typically, the above setup is only needed if you are developing plugins.\nTo consume plugins, it is recommended to use one of the existing ",Object(i.b)("a",{parentName:"p",href:"plugin-distribution"},"distribution mechanisms")," instead."))}b.isMDXComponent=!0},158:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return f}));var r=t(0),o=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=o.a.createContext({}),s=function(e){var n=o.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=s(e.components);return o.a.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},b=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(t),b=r,f=u["".concat(a,".").concat(b)]||u[b]||d[b]||i;return t?o.a.createElement(f,l(l({ref:n},p),{},{components:t})):o.a.createElement(f,l({ref:n},p))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=b;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var p=2;p<i;p++)a[p]=t[p];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);