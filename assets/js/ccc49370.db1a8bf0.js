"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6103],{46165:(e,t,a)=>{a.d(t,{Z:()=>E});var n=a(63366),r=a(67294),l=a(86010),i=a(634),o=a(36742);const s="sidebar_2ahu",c="sidebarItemTitle_2hhb",m="sidebarItemList_2xAf",u="sidebarItem_2UVv",d="sidebarItemLink_1RT6",g="sidebarItemLinkActive_12pM";var p=a(24973);function f(e){var t=e.sidebar;return 0===t.items.length?null:r.createElement("nav",{className:(0,l.default)(s,"thin-scrollbar"),"aria-label":(0,p.translate)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},r.createElement("div",{className:(0,l.default)(c,"margin-bottom--md")},t.title),r.createElement("ul",{className:m},t.items.map((function(e){return r.createElement("li",{key:e.permalink,className:u},r.createElement(o.default,{isNavLink:!0,to:e.permalink,className:d,activeClassName:g},e.title))}))))}var v=a(571),h=["sidebar","toc","children"];const E=function(e){var t=e.sidebar,a=e.toc,o=e.children,s=(0,n.Z)(e,h),c=t&&t.items.length>0;return r.createElement(i.Z,s,r.createElement("div",{className:"container margin-vert--lg"},r.createElement("div",{className:"row"},c&&r.createElement("aside",{className:"col col--3"},r.createElement(f,{sidebar:t})),r.createElement("main",{className:(0,l.default)("col",{"col--7":c,"col--9 col--offset-1":!c}),itemScope:!0,itemType:"http://schema.org/Blog"},o),a&&r.createElement("div",{className:"col col--2"},r.createElement(v.default,{toc:a})))))}},85753:(e,t,a)=>{a.d(t,{Z:()=>T});var n=a(67294),r=a(86010),l=a(3905),i=a(24973),o=a(36742),s=a(44996),c=a(941),m=a(75854),u=a.n(m),d=a(86146);const g="blogPostTitle_GeHD",p="blogPostData_291c",f="blogPostDetailsFull_3kfx";var v=a(37211);const h="tags_2ga9",E="tag_11ep";function b(e){var t=e.tags;return n.createElement(n.Fragment,null,n.createElement("b",null,n.createElement(i.default,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),n.createElement("ul",{className:(0,r.default)(h,"padding--none","margin-left--sm")},t.map((function(e){var t=e.label,a=e.permalink;return n.createElement("li",{key:a,className:E},n.createElement(v.Z,{name:t,permalink:a}))}))))}const _="image_1yU8";const N=function(e){var t=e.author,a=t.name,r=t.title,l=t.url,i=t.imageURL;return n.createElement("div",{className:"avatar margin-bottom--sm"},i&&n.createElement(o.default,{className:"avatar__photo-link avatar__photo",href:l},n.createElement("img",{className:_,src:i,alt:a})),a&&n.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},n.createElement("div",{className:"avatar__name"},n.createElement(o.default,{href:l,itemProp:"url"},n.createElement("span",{itemProp:"name"},a))),r&&n.createElement("small",{className:"avatar__subtitle",itemProp:"description"},r)))},k="authorCol_1R69";function P(e){var t=e.authors,a=e.assets;return 0===t.length?n.createElement(n.Fragment,null):n.createElement("div",{className:"row margin-top--md margin-bottom--sm"},t.map((function(e,t){var l;return n.createElement("div",{className:(0,r.default)("col col--6",k),key:t},n.createElement(N,{author:Object.assign({},e,{imageURL:null!=(l=a.authorsImageUrls[t])?l:e.imageURL})}))})))}const T=function(e){var t,a,m,v,h=(m=(0,c.usePluralForm)().selectMessage,function(e){var t=Math.ceil(e);return m(t,(0,i.translate)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:t}))}),E=(0,s.useBaseUrlUtils)().withBaseUrl,_=e.children,N=e.frontMatter,k=e.assets,T=e.metadata,y=e.truncated,C=e.isBlogPostPage,w=void 0!==C&&C,L=T.date,I=T.formattedDate,U=T.permalink,x=T.tags,R=T.readingTime,A=T.title,B=T.editUrl,M=T.authors,O=null!=(t=k.image)?t:N.image;return n.createElement("article",{className:w?void 0:"margin-bottom--xl",itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},(v=w?"h1":"h2",n.createElement("header",null,n.createElement(v,{className:g,itemProp:"headline"},w?A:n.createElement(o.default,{itemProp:"url",to:U},A)),n.createElement("div",{className:(0,r.default)(p,"margin-vert--md")},n.createElement("time",{dateTime:L,itemProp:"datePublished"},I),void 0!==R&&n.createElement(n.Fragment,null," \xb7 ",h(R))),n.createElement(P,{authors:M,assets:k}))),O&&n.createElement("meta",{itemProp:"image",content:E(O,{absolute:!0})}),n.createElement("div",{className:"markdown",itemProp:"articleBody"},n.createElement(l.MDXProvider,{components:u()},_)),(x.length>0||y)&&n.createElement("footer",{className:(0,r.default)("row docusaurus-mt-lg",(a={},a[f]=w,a))},x.length>0&&n.createElement("div",{className:(0,r.default)("col",{"col--9":!w})},n.createElement(b,{tags:x})),w&&B&&n.createElement("div",{className:"col margin-top--sm"},n.createElement(d.default,{editUrl:B})),!w&&y&&n.createElement("div",{className:"col col--3 text--right"},n.createElement(o.default,{to:T.permalink,"aria-label":"Read more about "+A},n.createElement("b",null,n.createElement(i.default,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))))))}},84147:(e,t,a)=>{a.r(t),a.d(t,{default:()=>u});var n=a(67294),r=a(41217),l=a(46165),i=a(85753),o=a(24973),s=a(36742);const c=function(e){var t=e.nextItem,a=e.prevItem;return n.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,o.translate)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"})},n.createElement("div",{className:"pagination-nav__item"},a&&n.createElement(s.default,{className:"pagination-nav__link",to:a.permalink},n.createElement("div",{className:"pagination-nav__sublabel"},n.createElement(o.default,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post"},"Newer Post")),n.createElement("div",{className:"pagination-nav__label"},"\xab ",a.title))),n.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t&&n.createElement(s.default,{className:"pagination-nav__link",to:t.permalink},n.createElement("div",{className:"pagination-nav__sublabel"},n.createElement(o.default,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post"},"Older Post")),n.createElement("div",{className:"pagination-nav__label"},t.title," \xbb"))))};var m=a(941);const u=function(e){var t,a=e.content,o=e.sidebar,s=a.frontMatter,u=a.assets,d=a.metadata,g=d.title,p=d.description,f=d.nextItem,v=d.prevItem,h=d.date,E=d.tags,b=d.authors,_=s.hide_table_of_contents,N=s.keywords,k=null!=(t=u.image)?t:s.image;return n.createElement(l.Z,{wrapperClassName:m.ThemeClassNames.wrapper.blogPages,pageClassName:m.ThemeClassNames.page.blogPostPage,sidebar:o,toc:!_&&a.toc?a.toc:void 0},n.createElement(r.default,{title:g,description:p,keywords:N,image:k},n.createElement("meta",{property:"og:type",content:"article"}),n.createElement("meta",{property:"article:published_time",content:h}),b.some((function(e){return e.url}))&&n.createElement("meta",{property:"article:author",content:b.map((function(e){return e.url})).filter(Boolean).join(",")}),E.length>0&&n.createElement("meta",{property:"article:tag",content:E.map((function(e){return e.label})).join(",")})),n.createElement(i.Z,{frontMatter:s,assets:u,metadata:d,isBlogPostPage:!0},n.createElement(a,null)),(f||v)&&n.createElement(c,{nextItem:f,prevItem:v}))}},86146:(e,t,a)=>{a.r(t),a.d(t,{default:()=>d});var n=a(67294),r=a(24973),l=a(87462),i=a(63366),o=a(86010);const s="iconEdit_2_ui";var c=["className"];const m=function(e){var t=e.className,a=(0,i.Z)(e,c);return n.createElement("svg",(0,l.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,o.default)(s,t),"aria-hidden":"true"},a),n.createElement("g",null,n.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))};var u=a(941);function d(e){var t=e.editUrl;return n.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:u.ThemeClassNames.common.editThisPage},n.createElement(m,null),n.createElement(r.default,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},571:(e,t,a)=>{a.r(t),a.d(t,{TOCHeadings:()=>g,default:()=>p});var n=a(67294),r=a(86010),l=a(941);function i(e){var t=e.getBoundingClientRect();return t.top===t.bottom?i(e.parentNode):t}function o(e){var t,a=e.anchorTopOffset,n=Array.from(document.querySelectorAll(".anchor.anchor__h2, .anchor.anchor__h3")),r=n.find((function(e){return i(e).top>=a}));return r?function(e){return e.top>0&&e.bottom<window.innerHeight/2}(i(r))?r:null!=(t=n[n.indexOf(r)-1])?t:null:n[n.length-1]}function s(){var e=(0,n.useRef)(0),t=(0,l.useThemeConfig)().navbar.hideOnScroll;return(0,n.useEffect)((function(){e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}const c=function(e){var t=(0,n.useRef)(void 0),a=s();(0,n.useEffect)((function(){var n=e.linkClassName,r=e.linkActiveClassName;function l(){var e=function(e){return Array.from(document.getElementsByClassName(e))}(n),l=o({anchorTopOffset:a.current}),i=e.find((function(e){return l&&l.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)}));e.forEach((function(e){!function(e,a){if(a){var n;t.current&&t.current!==e&&(null==(n=t.current)||n.classList.remove(r)),e.classList.add(r),t.current=e}else e.classList.remove(r)}(e,e===i)}))}return document.addEventListener("scroll",l),document.addEventListener("resize",l),l(),function(){document.removeEventListener("scroll",l),document.removeEventListener("resize",l)}}),[e,a])},m="tableOfContents_35-E";var u="table-of-contents__link",d={linkClassName:u,linkActiveClassName:"table-of-contents__link--active"};function g(e){var t=e.toc,a=e.isChild;return t.length?n.createElement("ul",{className:a?"":"table-of-contents table-of-contents__left-border"},t.map((function(e){return n.createElement("li",{key:e.id},n.createElement("a",{href:"#"+e.id,className:u,dangerouslySetInnerHTML:{__html:e.value}}),n.createElement(g,{isChild:!0,toc:e.children}))}))):null}const p=function(e){var t=e.toc;return c(d),n.createElement("div",{className:(0,r.default)(m,"thin-scrollbar")},n.createElement(g,{toc:t}))}},37211:(e,t,a)=>{a.d(t,{Z:()=>c});var n=a(67294),r=a(86010),l=a(36742);const i="tag_1Okp",o="tagRegular_3MiF",s="tagWithCount_1HU1";const c=function(e){var t,a=e.permalink,c=e.name,m=e.count;return n.createElement(l.default,{href:a,className:(0,r.default)(i,(t={},t[o]=!m,t[s]=m,t))},c,m&&n.createElement("span",null,m))}}}]);