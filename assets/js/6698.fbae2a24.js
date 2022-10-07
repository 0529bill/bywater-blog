"use strict";(self.webpackChunkbywater_blog=self.webpackChunkbywater_blog||[]).push([[6698],{1875:(e,t,n)=>{n.d(t,{Z:()=>a});const a=()=>null},8617:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(7294);const l="iconExternalLink_wgqa",r=e=>{let{width:t=13.5,height:n=13.5}=e;return a.createElement("svg",{width:t,height:n,"aria-hidden":"true",viewBox:"0 0 24 24",className:l},a.createElement("path",{fill:"currentColor",d:"M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"}))}},6698:(e,t,n)=>{n.d(t,{Z:()=>Ze});var a=n(7294),l=n(6010),r=n(5977),o=n(4973),c=n(941);const s="skipToContent_OuoZ";function i(e){e.setAttribute("tabindex","-1"),e.focus(),e.removeAttribute("tabindex")}const m=function(){const e=(0,a.useRef)(null),{action:t}=(0,r.k6)();return(0,c.SL)((n=>{let{location:a}=n;e.current&&!a.hash&&"PUSH"===t&&i(e.current)})),a.createElement("div",{ref:e},a.createElement("a",{href:"#",className:s,onClick:e=>{e.preventDefault();const t=document.querySelector("main:first-of-type")||document.querySelector(".main-wrapper");t&&i(t)}},a.createElement(o.Z,{id:"theme.common.skipToMainContent",description:"The skip to content label used for accessibility, allowing to rapidly navigate to main content with keyboard tab/enter navigation"},"Skip to main content")))};var u=n(7462);function d(e){let{width:t=20,height:n=20,className:l,...r}=e;return a.createElement("svg",(0,u.Z)({className:l,viewBox:"0 0 24 24",width:t,height:n,fill:"currentColor"},r),a.createElement("path",{d:"M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"}))}const h="announcementBar_axC9",v="announcementBarPlaceholder_xYHE",b="announcementBarClose_A3A1",f="announcementBarContent_6uhP";const g=function(){const{isClosed:e,close:t}=(0,c.nT)(),{announcementBar:n}=(0,c.LU)();if(!n)return null;const{content:r,backgroundColor:s,textColor:i,isCloseable:m}=n;return!r||m&&e?null:a.createElement("div",{className:h,style:{backgroundColor:s,color:i},role:"banner"},m&&a.createElement("div",{className:v}),a.createElement("div",{className:f,dangerouslySetInnerHTML:{__html:r}}),m?a.createElement("button",{type:"button",className:(0,l.Z)("clean-btn close",b),onClick:t,"aria-label":(0,o.I)({id:"theme.AnnouncementBar.closeButtonAriaLabel",message:"Close",description:"The ARIA label for close button of announcement bar"})},a.createElement(d,{width:14,height:14})):null)};var E=n(1875),p=n(2389);const k={toggle:"toggle_iYfV"},_=e=>{let{icon:t,style:n}=e;return a.createElement("span",{className:(0,l.Z)(k.toggle,k.dark),style:n},t)},Z=e=>{let{icon:t,style:n}=e;return a.createElement("span",{className:(0,l.Z)(k.toggle,k.light),style:n},t)},w=(0,a.memo)((e=>{let{className:t,icons:n,checked:r,disabled:o,onChange:c}=e;const[s,i]=(0,a.useState)(r),[m,u]=(0,a.useState)(!1),d=(0,a.useRef)(null);return a.createElement("div",{className:(0,l.Z)("react-toggle",t,{"react-toggle--checked":s,"react-toggle--focus":m,"react-toggle--disabled":o})},a.createElement("div",{className:"react-toggle-track",role:"button",tabIndex:-1,onClick:()=>{var e;return null==(e=d.current)?void 0:e.click()}},a.createElement("div",{className:"react-toggle-track-check"},n.checked),a.createElement("div",{className:"react-toggle-track-x"},n.unchecked),a.createElement("div",{className:"react-toggle-thumb"})),a.createElement("input",{ref:d,checked:s,type:"checkbox",className:"react-toggle-screenreader-only","aria-label":"Switch between dark and light mode",onChange:c,onClick:()=>i(!s),onFocus:()=>u(!0),onBlur:()=>u(!1),onKeyDown:e=>{var t;"Enter"===e.key&&(null==(t=d.current)||t.click())}}))}));function N(e){const{colorMode:{switchConfig:{darkIcon:t,darkIconStyle:n,lightIcon:l,lightIconStyle:r}}}=(0,c.LU)(),o=(0,p.Z)();return a.createElement(w,(0,u.Z)({disabled:!o,icons:{checked:a.createElement(_,{icon:t,style:n}),unchecked:a.createElement(Z,{icon:l,style:r})}},e))}var y=n(5350),C=n(7898);const L=e=>{const t=(0,r.TH)(),[n,l]=(0,a.useState)(e),o=(0,a.useRef)(!1),[s,i]=(0,a.useState)(0),m=(0,a.useCallback)((e=>{null!==e&&i(e.getBoundingClientRect().height)}),[]);return(0,C.Z)(((t,n)=>{const a=t.scrollY,r=null==n?void 0:n.scrollY;if(!e)return;if(a<s)return void l(!0);if(o.current)return o.current=!1,void l(!1);r&&0===a&&l(!0);const c=document.documentElement.scrollHeight-s,i=window.innerHeight;r&&a>=r?l(!1):a+i<c&&l(!0)}),[s,o]),(0,c.SL)((t=>{e&&!t.location.hash&&l(!0)})),(0,a.useEffect)((()=>{e&&t.hash&&(o.current=!0)}),[t.hash]),{navbarRef:m,isNavbarVisible:n}};const S=function(e){void 0===e&&(e=!0),(0,a.useEffect)((()=>(document.body.style.overflow=e?"hidden":"visible",()=>{document.body.style.overflow="visible"})),[e])};var I=n(3783),D=n(907),T=n(7819),B=n(5537);const x=e=>{let{width:t=30,height:n=30,className:l,...r}=e;return a.createElement("svg",(0,u.Z)({className:l,width:t,height:n,viewBox:"0 0 30 30","aria-hidden":"true"},r),a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))};function A(e){let{width:t=20,height:n=20,className:l,...r}=e;return a.createElement("svg",(0,u.Z)({className:l,viewBox:"0 0 413.348 413.348",width:t,height:n,fill:"currentColor"},r),a.createElement("path",{d:"m413.348 24.354-24.354-24.354-182.32 182.32-182.32-182.32-24.354 24.354 182.32 182.32-182.32 182.32 24.354 24.354 182.32-182.32 182.32 182.32 24.354-24.354-182.32-182.32z"}))}const M="toggle_2i4l",R="navbarHideable_RReh",U="navbarHidden_FBwS",V="navbarSidebarToggle_AVbO",H="navbarSidebarCloseSvg_+9jJ",P="right";function z(){return(0,c.LU)().navbar.items}function O(){const{colorMode:{disableSwitch:e}}=(0,c.LU)(),{isDarkTheme:t,setLightTheme:n,setDarkTheme:l}=(0,y.Z)();return{isDarkTheme:t,toggle:(0,a.useCallback)((e=>e.target.checked?l():n()),[n,l]),disabled:e}}function W(e){let{sidebarShown:t,toggleSidebar:n}=e;S(t);const r=z(),s=O(),i=function(e){var t;let{sidebarShown:n,toggleSidebar:l}=e;const r=null==(t=(0,c.g8)())?void 0:t({toggleSidebar:l}),o=(0,c.D9)(r),[s,i]=(0,a.useState)((()=>!1));(0,a.useEffect)((()=>{r&&!o&&i(!0)}),[r,o]);const m=!!r;return(0,a.useEffect)((()=>{m?n||i(!0):i(!1)}),[n,m]),{shown:s,hide:(0,a.useCallback)((()=>{i(!1)}),[]),content:r}}({sidebarShown:t,toggleSidebar:n});return a.createElement("div",{className:"navbar-sidebar"},a.createElement("div",{className:"navbar-sidebar__brand"},a.createElement(B.Z,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:"navbar__title"}),!s.disabled&&a.createElement(N,{className:V,checked:s.isDarkTheme,onChange:s.toggle}),a.createElement("button",{type:"button",className:"clean-btn navbar-sidebar__close",onClick:n},a.createElement(A,{width:20,height:20,className:H}))),a.createElement("div",{className:(0,l.Z)("navbar-sidebar__items",{"navbar-sidebar__items--show-secondary":i.shown})},a.createElement("div",{className:"navbar-sidebar__item menu"},a.createElement("ul",{className:"menu__list"},r.map(((e,t)=>a.createElement(T.Z,(0,u.Z)({mobile:!0},e,{onClick:n,key:t})))))),a.createElement("div",{className:"navbar-sidebar__item menu"},r.length>0&&a.createElement("button",{type:"button",className:"clean-btn navbar-sidebar__back",onClick:i.hide},a.createElement(o.Z,{id:"theme.navbar.mobileSidebarSecondaryMenu.backButtonLabel",description:"The label of the back button to return to main menu, inside the mobile navbar sidebar secondary menu (notably used to display the docs sidebar)"},"\u2190 Back to main menu")),i.content)))}const F=function(){const{navbar:{hideOnScroll:e,style:t}}=(0,c.LU)(),n=function(){const e=(0,I.Z)(),t="mobile"===e,[n,l]=(0,a.useState)(!1);(0,c.Rb)((()=>{n&&l(!1)}));const r=(0,a.useCallback)((()=>{l((e=>!e))}),[]);return(0,a.useEffect)((()=>{"desktop"===e&&l(!1)}),[e]),{shouldRender:t,toggle:r,shown:n}}(),r=O(),o=(0,D.gA)(),{navbarRef:s,isNavbarVisible:i}=L(e),m=z(),d=m.some((e=>"search"===e.type)),{leftItems:h,rightItems:v}=function(e){return{leftItems:e.filter((e=>{var t;return"left"===(null!=(t=e.position)?t:P)})),rightItems:e.filter((e=>{var t;return"right"===(null!=(t=e.position)?t:P)}))}}(m);return a.createElement("nav",{ref:s,className:(0,l.Z)("navbar","navbar--fixed-top",{"navbar--dark":"dark"===t,"navbar--primary":"primary"===t,"navbar-sidebar--show":n.shown,[R]:e,[U]:e&&!i})},a.createElement("div",{className:"navbar__inner"},a.createElement("div",{className:"navbar__items"},((null==m?void 0:m.length)>0||o)&&a.createElement("button",{"aria-label":"Navigation bar toggle",className:"navbar__toggle clean-btn",type:"button",tabIndex:0,onClick:n.toggle,onKeyDown:n.toggle},a.createElement(x,null)),a.createElement(B.Z,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:"navbar__title"}),h.map(((e,t)=>a.createElement(T.Z,(0,u.Z)({},e,{key:t}))))),a.createElement("div",{className:"navbar__items navbar__items--right"},v.map(((e,t)=>a.createElement(T.Z,(0,u.Z)({},e,{key:t})))),!r.disabled&&a.createElement(N,{className:M,checked:r.isDarkTheme,onChange:r.toggle}),!d&&a.createElement(E.Z,null))),a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:n.toggle}),n.shouldRender&&a.createElement(W,{sidebarShown:n.shown,toggleSidebar:n.toggle}))};var G=n(6742),Y=n(4996),q=n(3919);const J="footerLogoLink_SRtH";var K=n(8465),j=n(8617);function Q(e){let{to:t,href:n,label:l,prependBaseUrlToHref:r,...o}=e;const c=(0,Y.Z)(t),s=(0,Y.Z)(n,{forcePrependBaseUrl:!0});return a.createElement(G.Z,(0,u.Z)({className:"footer__link-item"},n?{href:r?s:n}:{to:c},o),n&&!(0,q.Z)(n)?a.createElement("span",null,l,a.createElement(j.Z,null)):l)}const X=e=>{let{sources:t,alt:n}=e;return a.createElement(K.Z,{className:"footer__logo",alt:n,sources:t})};const $=function(){const{footer:e}=(0,c.LU)(),{copyright:t,links:n=[],logo:r={}}=e||{},o={light:(0,Y.Z)(r.src),dark:(0,Y.Z)(r.srcDark||r.src)};return e?a.createElement("footer",{className:(0,l.Z)("footer",{"footer--dark":"dark"===e.style})},a.createElement("div",{className:"container"},n&&n.length>0&&a.createElement("div",{className:"row footer__links"},n.map(((e,t)=>a.createElement("div",{key:t,className:"col footer__col"},null!=e.title?a.createElement("div",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?a.createElement("ul",{className:"footer__items"},e.items.map(((e,t)=>e.html?a.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):a.createElement("li",{key:e.href||e.to,className:"footer__item"},a.createElement(Q,e))))):null)))),(r||t)&&a.createElement("div",{className:"footer__bottom text--center"},r&&(r.src||r.srcDark)&&a.createElement("div",{className:"margin-bottom--sm"},r.href?a.createElement(G.Z,{href:r.href,className:J},a.createElement(X,{alt:r.alt,sources:o})):a.createElement(X,{alt:r.alt,sources:o})),t?a.createElement("div",{className:"footer__copyright",dangerouslySetInnerHTML:{__html:t}}):null))):null};var ee=n(412);const te=(0,c.WA)("theme"),ne="light",ae="dark",le=e=>e===ae?ae:ne,re=e=>{(0,c.WA)("theme").set(le(e))},oe=()=>{const{colorMode:{defaultMode:e,disableSwitch:t,respectPrefersColorScheme:n}}=(0,c.LU)(),[l,r]=(0,a.useState)((e=>ee.Z.canUseDOM?le(document.documentElement.getAttribute("data-theme")):le(e))(e)),o=(0,a.useCallback)((()=>{r(ne),re(ne)}),[]),s=(0,a.useCallback)((()=>{r(ae),re(ae)}),[]);return(0,a.useEffect)((()=>{document.documentElement.setAttribute("data-theme",le(l))}),[l]),(0,a.useEffect)((()=>{if(!t)try{const e=te.get();null!==e&&r(le(e))}catch(e){console.error(e)}}),[r]),(0,a.useEffect)((()=>{t&&!n||window.matchMedia("(prefers-color-scheme: dark)").addListener((e=>{let{matches:t}=e;r(t?ae:ne)}))}),[]),{isDarkTheme:l===ae,setLightTheme:o,setDarkTheme:s}};var ce=n(2924);const se=function(e){const{isDarkTheme:t,setLightTheme:n,setDarkTheme:l}=oe();return a.createElement(ce.Z.Provider,{value:{isDarkTheme:t,setLightTheme:n,setDarkTheme:l}},e.children)},ie="docusaurus.tab.",me=()=>{const[e,t]=(0,a.useState)({}),n=(0,a.useCallback)(((e,t)=>{(0,c.WA)("docusaurus.tab."+e).set(t)}),[]);return(0,a.useEffect)((()=>{try{const e={};(0,c._f)().forEach((t=>{if(t.startsWith(ie)){const n=t.substring(ie.length);e[n]=(0,c.WA)(t).get()}})),t(e)}catch(e){console.error(e)}}),[]),{tabGroupChoices:e,setTabGroupChoices:(e,a)=>{t((t=>({...t,[e]:a}))),n(e,a)}}},ue=(0,a.createContext)(void 0);const de=function(e){const{tabGroupChoices:t,setTabGroupChoices:n}=me();return a.createElement(ue.Provider,{value:{tabGroupChoices:t,setTabGroupChoices:n}},e.children)};function he(e){let{children:t}=e;return a.createElement(se,null,a.createElement(c.pl,null,a.createElement(de,null,a.createElement(c.L5,null,a.createElement(c.Cn,null,t)))))}var ve=n(9105),be=n(2263);function fe(e){let{locale:t,version:n,tag:l}=e;return a.createElement(ve.Z,null,t&&a.createElement("meta",{name:"docusaurus_locale",content:t}),n&&a.createElement("meta",{name:"docusaurus_version",content:n}),l&&a.createElement("meta",{name:"docusaurus_tag",content:l}))}var ge=n(1217);function Ee(){const{i18n:{defaultLocale:e,locales:t}}=(0,be.Z)(),n=(0,c.l5)();return a.createElement(ve.Z,null,t.map((e=>a.createElement("link",{key:e,rel:"alternate",href:n.createUrl({locale:e,fullyQualified:!0}),hrefLang:e}))),a.createElement("link",{rel:"alternate",href:n.createUrl({locale:e,fullyQualified:!0}),hrefLang:"x-default"}))}function pe(e){let{permalink:t}=e;const{siteConfig:{url:n}}=(0,be.Z)(),l=function(){const{siteConfig:{url:e}}=(0,be.Z)(),{pathname:t}=(0,r.TH)();return e+(0,Y.Z)(t)}(),o=t?""+n+t:l;return a.createElement(ve.Z,null,a.createElement("meta",{property:"og:url",content:o}),a.createElement("link",{rel:"canonical",href:o}))}function ke(e){const{siteConfig:{favicon:t},i18n:{currentLocale:n,localeConfigs:l}}=(0,be.Z)(),{metadatas:r,image:o}=(0,c.LU)(),{title:s,description:i,image:m,keywords:d,searchMetadatas:h}=e,v=(0,Y.Z)(t),b=(0,c.pe)(s),f=n,g=l[n].direction;return a.createElement(a.Fragment,null,a.createElement(ve.Z,null,a.createElement("html",{lang:f,dir:g}),t&&a.createElement("link",{rel:"shortcut icon",href:v}),a.createElement("title",null,b),a.createElement("meta",{property:"og:title",content:b}),a.createElement("meta",{name:"twitter:card",content:"summary_large_image"})),o&&a.createElement(ge.Z,{image:o}),m&&a.createElement(ge.Z,{image:m}),a.createElement(ge.Z,{description:i,keywords:d}),a.createElement(pe,null),a.createElement(Ee,null),a.createElement(fe,(0,u.Z)({tag:c.HX,locale:n},h)),a.createElement(ve.Z,null,r.map(((e,t)=>a.createElement("meta",(0,u.Z)({key:"metadata_"+t},e))))))}const _e=function(){(0,a.useEffect)((()=>{const e="navigation-with-keyboard";function t(t){"keydown"===t.type&&"Tab"===t.key&&document.body.classList.add(e),"mousedown"===t.type&&document.body.classList.remove(e)}return document.addEventListener("keydown",t),document.addEventListener("mousedown",t),()=>{document.body.classList.remove(e),document.removeEventListener("keydown",t),document.removeEventListener("mousedown",t)}}),[])};const Ze=function(e){const{children:t,noFooter:n,wrapperClassName:r,pageClassName:o}=e;return _e(),a.createElement(he,null,a.createElement(ke,e),a.createElement(m,null),a.createElement(g,null),a.createElement(F,null),a.createElement("div",{className:(0,l.Z)(c.kM.wrapper.main,r,o)},t),!n&&a.createElement($,null))}},5537:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(7462),l=n(7294),r=n(6742),o=n(8465),c=n(4996),s=n(2263),i=n(941);const m=e=>{const{siteConfig:{title:t}}=(0,s.Z)(),{navbar:{title:n,logo:m={src:""}}}=(0,i.LU)(),{imageClassName:u,titleClassName:d,...h}=e,v=(0,c.Z)(m.href||"/"),b={light:(0,c.Z)(m.src),dark:(0,c.Z)(m.srcDark||m.src)};return l.createElement(r.Z,(0,a.Z)({to:v},h,m.target&&{target:m.target}),m.src&&l.createElement(o.Z,{className:u,sources:b,alt:m.alt||n||t}),null!=n&&l.createElement("b",{className:d},n))}},5525:(e,t,n)=>{n.d(t,{O:()=>u,Z:()=>v});var a=n(7462),l=n(7294),r=n(6010),o=n(6742),c=n(4996),s=n(8617),i=n(3919),m=n(7819);function u(e){var t;let{activeBasePath:n,activeBaseRegex:r,to:m,href:u,label:d,activeClassName:h="",prependBaseUrlToHref:v,...b}=e;const f=(0,c.Z)(m),g=(0,c.Z)(n),E=(0,c.Z)(u,{forcePrependBaseUrl:!0}),p=d&&u&&!(0,i.Z)(u),k="dropdown__link--active"===h;return l.createElement(o.Z,(0,a.Z)({},u?{href:v?E:u}:{isNavLink:!0,activeClassName:null!=(t=b.className)&&t.includes(h)?"":h,to:f,...n||r?{isActive:(e,t)=>r?new RegExp(r).test(t.pathname):t.pathname.startsWith(g)}:null},b),p?l.createElement("span",null,d,l.createElement(s.Z,k&&{width:12,height:12})):d)}function d(e){let{className:t,isDropdownItem:n=!1,...o}=e;const c=l.createElement(u,(0,a.Z)({className:(0,r.Z)(n?"dropdown__link":"navbar__item navbar__link",t)},o));return n?l.createElement("li",null,c):c}function h(e){let{className:t,isDropdownItem:n,...o}=e;return l.createElement("li",{className:"menu__list-item"},l.createElement(u,(0,a.Z)({className:(0,r.Z)("menu__link",t)},o)))}const v=function(e){var t;let{mobile:n=!1,position:r,...o}=e;const c=n?h:d;return l.createElement(c,(0,a.Z)({},o,{activeClassName:null!=(t=o.activeClassName)?t:(0,m.E)(n)}))}},6400:(e,t,n)=>{n.d(t,{Z:()=>u});var a=n(7462),l=n(7294),r=n(5525),o=n(907),c=n(6010),s=n(7819),i=n(941),m=n(8780);function u(e){let{docId:t,label:n,docsPluginId:u,...d}=e;const{activeVersion:h,activeDoc:v}=(0,o.Iw)(u),{preferredVersion:b}=(0,i.J)(u),f=(0,o.yW)(u),g=function(e,t){const n=e.flatMap((e=>e.docs)),a=n.find((e=>e.id===t));if(!a){const a=n.map((e=>e.id)).join("\n- ");throw new Error("DocNavbarItem: couldn't find any doc with id \""+t+'" in version'+(e.length?"s":"")+" "+e.map((e=>e.name)).join(", ")+'".\nAvailable doc ids are:\n- '+a)}return a}((0,m.uniq)([h,b,f].filter(Boolean)),t),E=(0,s.E)(d.mobile);return l.createElement(r.Z,(0,a.Z)({exact:!0},d,{className:(0,c.Z)(d.className,{[E]:(null==v?void 0:v.sidebar)&&v.sidebar===g.sidebar}),activeClassName:E,label:null!=n?n:g.id,to:g.path}))}},9308:(e,t,n)=>{n.d(t,{Z:()=>u});var a=n(7462),l=n(7294),r=n(5525),o=n(3154),c=n(907),s=n(941),i=n(4973);const m=e=>e.docs.find((t=>t.id===e.mainDocId));function u(e){var t,n;let{mobile:u,docsPluginId:d,dropdownActiveClassDisabled:h,dropdownItemsBefore:v,dropdownItemsAfter:b,...f}=e;const g=(0,c.Iw)(d),E=(0,c.gB)(d),p=(0,c.yW)(d),{preferredVersion:k,savePreferredVersionName:_}=(0,s.J)(d);const Z=function(){const e=E.map((e=>{const t=(null==g?void 0:g.alternateDocVersions[e.name])||m(e);return{isNavLink:!0,label:e.label,to:t.path,isActive:()=>e===(null==g?void 0:g.activeVersion),onClick:()=>{_(e.name)}}}));return[...v,...e,...b]}(),w=null!=(t=null!=(n=g.activeVersion)?n:k)?t:p,N=u&&Z?(0,i.I)({id:"theme.navbar.mobileVersionsDropdown.label",message:"Versions",description:"The label for the navbar versions dropdown on mobile view"}):w.label,y=u&&Z?void 0:m(w).path;return Z.length<=1?l.createElement(r.Z,(0,a.Z)({},f,{mobile:u,label:N,to:y,isActive:h?()=>!1:void 0})):l.createElement(o.Z,(0,a.Z)({},f,{mobile:u,label:N,to:y,items:Z,isActive:h?()=>!1:void 0}))}},7250:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(7462),l=n(7294),r=n(5525),o=n(907),c=n(941);function s(e){var t;let{label:n,to:s,docsPluginId:i,...m}=e;const u=(0,o.zu)(i),{preferredVersion:d}=(0,c.J)(i),h=(0,o.yW)(i),v=null!=(t=null!=u?u:d)?t:h,b=null!=n?n:v.label,f=null!=s?s:(e=>e.docs.find((t=>t.id===e.mainDocId)))(v).path;return l.createElement(r.Z,(0,a.Z)({},m,{label:b,to:f}))}},3154:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(7462),l=n(7294),r=n(6010),o=n(941),c=n(5525),s=n(7819);function i(e,t){return e.some((e=>function(e,t){return!!(0,o.Mg)(e.to,t)||!(!e.activeBaseRegex||!new RegExp(e.activeBaseRegex).test(t))||!(!e.activeBasePath||!t.startsWith(e.activeBasePath))}(e,t)))}function m(e){var t;let{items:n,position:o,className:i,...m}=e;const u=(0,l.useRef)(null),d=(0,l.useRef)(null),[h,v]=(0,l.useState)(!1);return(0,l.useEffect)((()=>{const e=e=>{u.current&&!u.current.contains(e.target)&&v(!1)};return document.addEventListener("mousedown",e),document.addEventListener("touchstart",e),()=>{document.removeEventListener("mousedown",e),document.removeEventListener("touchstart",e)}}),[u]),l.createElement("div",{ref:u,className:(0,r.Z)("navbar__item","dropdown","dropdown--hoverable",{"dropdown--right":"right"===o,"dropdown--show":h})},l.createElement(c.O,(0,a.Z)({className:(0,r.Z)("navbar__link",i)},m,{onClick:m.to?void 0:e=>e.preventDefault(),onKeyDown:e=>{"Enter"===e.key&&(e.preventDefault(),v(!h))}}),null!=(t=m.children)?t:m.label),l.createElement("ul",{ref:d,className:"dropdown__menu"},n.map(((e,t)=>l.createElement(s.Z,(0,a.Z)({isDropdownItem:!0,onKeyDown:e=>{if(t===n.length-1&&"Tab"===e.key){e.preventDefault(),v(!1);const t=u.current.nextElementSibling;t&&t.focus()}},activeClassName:"dropdown__link--active"},e,{key:t}))))))}function u(e){var t;let{items:n,className:m,position:u,...d}=e;const h=(0,o.be)(),v=i(n,h),{collapsed:b,toggleCollapsed:f,setCollapsed:g}=(0,o.uR)({initialState:()=>!v});return(0,l.useEffect)((()=>{v&&g(!v)}),[h,v]),l.createElement("li",{className:(0,r.Z)("menu__list-item",{"menu__list-item--collapsed":b})},l.createElement(c.O,(0,a.Z)({role:"button",className:(0,r.Z)("menu__link menu__link--sublist",m)},d,{onClick:e=>{e.preventDefault(),f()}}),null!=(t=d.children)?t:d.label),l.createElement(o.zF,{lazy:!0,as:"ul",className:"menu__list",collapsed:b},n.map(((e,t)=>l.createElement(s.Z,(0,a.Z)({mobile:!0,isDropdownItem:!0,onClick:d.onClick,activeClassName:"menu__link--active"},e,{key:t}))))))}const d=function(e){let{mobile:t=!1,...n}=e;const a=t?u:m;return l.createElement(a,n)}},7819:(e,t,n)=>{n.d(t,{Z:()=>f,E:()=>b});var a=n(7294),l=n(5525),r=n(3154),o=n(7462);const c=e=>{let{width:t=20,height:n=20,...l}=e;return a.createElement("svg",(0,o.Z)({viewBox:"0 0 20 20",width:t,height:n,"aria-hidden":"true"},l),a.createElement("path",{fill:"currentColor",d:"M19.753 10.909c-.624-1.707-2.366-2.726-4.661-2.726-.09 0-.176.002-.262.006l-.016-2.063 3.525-.607c.115-.019.133-.119.109-.231-.023-.111-.167-.883-.188-.976-.027-.131-.102-.127-.207-.109-.104.018-3.25.461-3.25.461l-.013-2.078c-.001-.125-.069-.158-.194-.156l-1.025.016c-.105.002-.164.049-.162.148l.033 2.307s-3.061.527-3.144.543c-.084.014-.17.053-.151.143.019.09.19 1.094.208 1.172.018.08.072.129.188.107l2.924-.504.035 2.018c-1.077.281-1.801.824-2.256 1.303-.768.807-1.207 1.887-1.207 2.963 0 1.586.971 2.529 2.328 2.695 3.162.387 5.119-3.06 5.769-4.715 1.097 1.506.256 4.354-2.094 5.98-.043.029-.098.129-.033.207l.619.756c.08.096.206.059.256.023 2.51-1.73 3.661-4.515 2.869-6.683zm-7.386 3.188c-.966-.121-.944-.914-.944-1.453 0-.773.327-1.58.876-2.156a3.21 3.21 0 011.229-.799l.082 4.277a2.773 2.773 0 01-1.243.131zm2.427-.553l.046-4.109c.084-.004.166-.01.252-.01.773 0 1.494.145 1.885.361.391.217-1.023 2.713-2.183 3.758zm-8.95-7.668a.196.196 0 00-.196-.145h-1.95a.194.194 0 00-.194.144L.008 16.916c-.017.051-.011.076.062.076h1.733c.075 0 .099-.023.114-.072l1.008-3.318h3.496l1.008 3.318c.016.049.039.072.113.072h1.734c.072 0 .078-.025.062-.076-.014-.05-3.083-9.741-3.494-11.04zm-2.618 6.318l1.447-5.25 1.447 5.25H3.226z"}))};var s=n(2263),i=n(941);const m="iconLanguage_EbrZ";function u(e){let{mobile:t,dropdownItemsBefore:n,dropdownItemsAfter:l,...u}=e;const{i18n:{currentLocale:d,locales:h,localeConfigs:v}}=(0,s.Z)(),b=(0,i.l5)();function f(e){return v[e].label}const g=[...n,...h.map((e=>{const t="pathname://"+b.createUrl({locale:e,fullyQualified:!1});return{isNavLink:!0,label:f(e),to:t,target:"_self",autoAddBaseUrl:!1,className:e===d?"dropdown__link--active":"",style:{textTransform:"capitalize"}}})),...l],E=t?"Languages":f(d);return a.createElement(r.Z,(0,o.Z)({},u,{href:"#",mobile:t,label:a.createElement("span",null,a.createElement(c,{className:m}),a.createElement("span",null,E)),items:g}))}var d=n(1875);function h(e){let{mobile:t}=e;return t?null:a.createElement(d.Z,null)}const v={default:()=>l.Z,localeDropdown:()=>u,search:()=>h,dropdown:()=>r.Z,docsVersion:()=>n(7250).Z,docsVersionDropdown:()=>n(9308).Z,doc:()=>n(6400).Z};const b=e=>e?"menu__link--active":"navbar__link--active";function f(e){let{type:t,...n}=e;const l=function(e,t){return e&&"default"!==e?e:t?"dropdown":"default"}(t,void 0!==n.items),r=(e=>{const t=v[e];if(!t)throw new Error('No NavbarItem component found for type "'+e+'".');return t()})(l);return a.createElement(r,n)}},2924:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n(7294).createContext(void 0)},8465:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7462),l=n(7294),r=n(6010),o=n(2389),c=n(5350);const s={themedImage:"themedImage_TMUO","themedImage--light":"themedImage--light_4Vu1","themedImage--dark":"themedImage--dark_uzRr"},i=e=>{const t=(0,o.Z)(),{isDarkTheme:n}=(0,c.Z)(),{sources:i,className:m,alt:u="",...d}=e,h=t?n?["dark"]:["light"]:["light","dark"];return l.createElement(l.Fragment,null,h.map((e=>l.createElement("img",(0,a.Z)({key:e,src:i[e],alt:u,className:(0,r.Z)(s.themedImage,s["themedImage--"+e],m)},d)))))}},7898:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(7294),l=n(412);const r=()=>l.Z.canUseDOM?{scrollX:window.pageXOffset,scrollY:window.pageYOffset}:null,o=function(e,t){void 0===t&&(t=[]);const n=(0,a.useRef)(r()),l=()=>{const t=r();e&&e(t,n.current),n.current=t};(0,a.useEffect)((()=>{const e={passive:!0};return l(),window.addEventListener("scroll",l,e),()=>window.removeEventListener("scroll",l,e)}),t)}},5350:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(7294),l=n(2924);const r=function(){const e=(0,a.useContext)(l.Z);if(null==e)throw new Error('"useThemeContext" is used outside of "Layout" component. Please see https://docusaurus.io/docs/api/themes/configuration#usethemecontext.');return e}}}]);