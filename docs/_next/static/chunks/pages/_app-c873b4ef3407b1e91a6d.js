_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[6],{0:function(e,t,n){n("74v/"),e.exports=n("nOHt")},"6w4r":function(e,t,n){},"74v/":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n("hUgY")}])},AAbX:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return i}));var r=n("q1tI"),o=n.n(r).a.createElement,a=function(e){return o("div",{className:"content-wrapper"},e.children)},i=function(e){return o("div",{className:"undo-wrap-for-scroll"},e.children)}},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("J4zp"),o=n("284h");t.__esModule=!0,t.default=void 0;var a=o(n("q1tI")),i=n("elyg"),c=n("nOHt"),s=n("vNVm"),l={};function u(e,t,n,r){if(e&&(0,i.isLocalURL)(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;l[t+"%"+n+(o?"%"+o:"")]=!0}}var f=function(e){var t=!1!==e.prefetch,n=(0,c.useRouter)(),o=n&&n.pathname||"/",f=a.default.useMemo((function(){var t=(0,i.resolveHref)(o,e.href,!0),n=r(t,2),a=n[0],c=n[1];return{href:a,as:e.as?(0,i.resolveHref)(o,e.as):c||a}}),[o,e.href,e.as]),p=f.href,d=f.as,h=e.children,v=e.replace,m=e.shallow,g=e.scroll,_=e.locale;"string"===typeof h&&(h=a.default.createElement("a",null,h));var y=a.Children.only(h),b=y&&"object"===typeof y&&y.ref,w=(0,s.useIntersection)({rootMargin:"200px"}),N=r(w,2),k=N[0],E=N[1],I=a.default.useCallback((function(e){k(e),b&&("function"===typeof b?b(e):"object"===typeof b&&(b.current=e))}),[b,k]);(0,a.useEffect)((function(){var e=E&&t&&(0,i.isLocalURL)(p),r="undefined"!==typeof _?_:n&&n.locale,o=l[p+"%"+d+(r?"%"+r:"")];e&&!o&&u(n,p,d,{locale:r})}),[d,p,E,_,t,n]);var L={ref:I,onClick:function(e){y.props&&"function"===typeof y.props.onClick&&y.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,a,c,s){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,i.isLocalURL)(n))&&(e.preventDefault(),null==c&&(c=r.indexOf("#")<0),t[o?"replace":"push"](n,r,{shallow:a,locale:s,scroll:c}).then((function(e){e&&c&&document.body.focus()})))}(e,n,p,d,v,m,g,_)},onMouseEnter:function(e){(0,i.isLocalURL)(p)&&(y.props&&"function"===typeof y.props.onMouseEnter&&y.props.onMouseEnter(e),u(n,p,d,{priority:!0}))}};if(e.passHref||"a"===y.type&&!("href"in y.props)){var M="undefined"!==typeof _?_:n&&n.locale,C=n&&n.isLocaleDomain&&(0,i.getDomainLocale)(d,M,n&&n.locales,n&&n.domainLocales);L.href=C||(0,i.addBasePath)((0,i.addLocale)(d,M,n&&n.defaultLocale))}return a.default.cloneElement(y,L)};t.default=f},fneu:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r={siteMeta:{title:"Super Tech Blog",teamName:"SUPER STUDIO, INC.",description:"\u682a\u5f0f\u4f1a\u793eSUPER STUDIO\u306e\u30c6\u30c3\u30af\u30d6\u30ed\u30b0\u3067\u3059\uff0e\u300c\u30b3\u30c8\u3001\u30e2\u30ce\u306b\u304b\u304b\u308f\u308b\u5168\u3066\u306e\u4eba\u3005\u306e\u9867\u5ba2\u4f53\u9a13\u3092\u6700\u5927\u5316\u3059\u308b\u300d\u305d\u306e\u88cf\u5074\u3092\u652f\u3048\u308b\u6280\u8853\u3084\uff0c\u4f1a\u793e\u306b\u30b3\u30df\u30c3\u30c8\u3057\u3066\u3044\u308b\u30a8\u30f3\u30b8\u30cb\u30a2\u306e\u77e5\u898b\u30fb\u65e5\u5e38\u306a\u3069\u3092\u5171\u6709\u3057\u307e\u3059\uff0e"},siteRoot:"https://akira-matsumoto-ss.github.io",headerLinks:[{title:"About",href:"/about"},{title:"Company",href:"https://super-studio.jp"},{title:"note",href:"https://note.com/super_studio/m/m557a7e30ad51"},{title:"ecforce",href:"https://ec-force.com/"},{title:"Apollo D2C",href:"https://apollo-d2c.com/"}]}},g4pe:function(e,t,n){e.exports=n("8Kt/")},hUgY:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return m}));var r=n("q1tI"),o=n.n(r),a=n("g4pe"),i=n.n(a),c=n("fneu"),s=n("YFqc"),l=n.n(s),u=n("AAbX"),f=o.a.createElement,p=function(){return f("header",{className:"site-header"},f(u.a,null,f("div",{className:"site-header__inner"},f(l.a,{href:"/",passHref:!0},f("a",{className:"site-header__logo-link"},f("img",{src:"/logo.svg",alt:c.a.siteMeta.title,className:"site-header__logo-img"}))),f("div",{className:"site-header__links"},c.a.headerLinks.map((function(e,t){var n="header-link-".concat(t);return e.href.startsWith("/")?f(l.a,{key:n,href:e.href,passHref:!0},f("a",{className:"site-header__link"},e.title)):f("a",{key:n,href:e.href,className:"site-header__link"},e.title)}))))))},d=o.a.createElement,h=function(){return d("footer",{className:"site-footer"},d(u.a,null,d("p",null,"\xa9 ",c.a.siteMeta.teamName)))},v=(n("6w4r"),o.a.createElement);function m(e){var t=e.Component,n=e.pageProps;return v(o.a.Fragment,null,v(i.a,null,v("link",{rel:"icon shortcut",type:"image/png",href:"".concat(c.a.siteRoot,"/logo.png")}),v("link",{rel:"stylesheet",href:"https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap"})),v(p,null),v(t,n),v(h,null))}},vNVm:function(e,t,n){"use strict";var r=n("J4zp");t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!i,s=(0,o.useRef)(),l=(0,o.useState)(!1),u=r(l,2),f=u[0],p=u[1],d=(0,o.useCallback)((function(e){s.current&&(s.current(),s.current=void 0),n||f||e&&e.tagName&&(s.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=c.get(t);if(n)return n;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return c.set(t,n={id:t,observer:o,elements:r}),n}(n),o=r.id,a=r.observer,i=r.elements;return i.set(e,t),a.observe(e),function(){i.delete(e),a.unobserve(e),0===i.size&&(a.disconnect(),c.delete(o))}}(e,(function(e){return e&&p(e)}),{rootMargin:t}))}),[n,t,f]);return(0,o.useEffect)((function(){if(!i&&!f){var e=(0,a.requestIdleCallback)((function(){return p(!0)}));return function(){return(0,a.cancelIdleCallback)(e)}}}),[f]),[d,f]};var o=n("q1tI"),a=n("0G5g"),i="undefined"!==typeof IntersectionObserver;var c=new Map}},[[0,0,2,1]]]);