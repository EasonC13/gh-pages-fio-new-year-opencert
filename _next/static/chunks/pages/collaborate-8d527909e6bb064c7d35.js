_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[12],{"2Uo8":function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var n=r("nKUr"),s=r("YFqc"),a=r.n(s),c=(r("q1tI"),function(){return Object(n.jsxs)("footer",{className:"flex-shrink-0 bg-navy text-white py-2",children:[Object(n.jsx)("div",{className:"container pt-8 pb-12",children:Object(n.jsxs)("div",{className:"flex flex-wrap",children:[Object(n.jsxs)("div",{className:"w-40 lg:mr-40 mb-8 lg:mb-0",children:[Object(n.jsx)("h6",{className:"font-montserrat font-bold mb-2",children:"Powered by"}),Object(n.jsx)("a",{className:"inline-block transition-opacity hover:opacity-75",href:"https://hive.tech.gov.sg/",target:"_blank",rel:"noopener noreferrer",children:Object(n.jsx)("img",{src:"/static/images/common/gds-logo.svg",alt:"Government Digital Services logo"})})]}),Object(n.jsxs)("div",{className:"w-full lg:w-40 mb-8 lg:mb-0",children:[Object(n.jsx)("h6",{className:"font-montserrat font-bold mb-2",children:"Partners"}),Object(n.jsxs)("ul",{className:"text-sm",children:[Object(n.jsx)("li",{children:Object(n.jsx)(a.a,{href:"/registry",children:Object(n.jsx)("a",{children:"Registry"})})}),Object(n.jsx)("li",{children:Object(n.jsx)(a.a,{href:"/collaborate",children:Object(n.jsx)("a",{children:"Collaborate"})})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"https://go.gov.sg/opencerts-feedback",target:"_blank",rel:"noopener noreferrer",children:"Feedback"})})]})]}),Object(n.jsxs)("div",{className:"w-full lg:w-40 mb-8 lg:mb-0",children:[Object(n.jsx)("h6",{className:"font-montserrat font-bold mb-2",children:"Support"}),Object(n.jsxs)("ul",{className:"text-sm",children:[Object(n.jsx)("li",{children:Object(n.jsx)(a.a,{href:"/faq",children:Object(n.jsx)("a",{children:"FAQ"})})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"https://github.com/OpenCerts",target:"_blank",rel:"noopener noreferrer",children:"GitHub"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"https://docs.opencerts.io/docs/",target:"_blank",rel:"noopener noreferrer",children:"Documentation"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"https://docs.opencerts.io/blog/",target:"_blank",rel:"noopener noreferrer",children:"Blog"})})]})]}),Object(n.jsxs)("div",{className:"w-full lg:w-40",children:[Object(n.jsx)("h6",{className:"font-montserrat font-bold mb-2",children:"Legal"}),Object(n.jsxs)("ul",{className:"text-sm",children:[Object(n.jsx)("li",{children:Object(n.jsx)(a.a,{href:"/privacy",children:Object(n.jsx)("a",{children:"Privacy Policy"})})}),Object(n.jsx)("li",{children:Object(n.jsx)(a.a,{href:"/terms",children:Object(n.jsx)("a",{children:"Terms of Use"})})})]})]})]})}),Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)("div",{className:"border-t border-gray-600"}),Object(n.jsx)("p",{className:"text-center text-xs py-4",children:"Copyright \xa9 2020 OpenCerts"})]})]})})},ChZ1:function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));var n=r("nKUr"),s=r("YFqc"),a=r.n(s),c=r("nOHt"),o=(r("q1tI"),[{id:"registry",label:"Registry",path:"/registry"},{id:"collaborate",label:"Collaborate",path:"/collaborate"},{id:"faq",label:"FAQ",path:"/faq"}]),i=function(){var e=Object(c.useRouter)();return Object(n.jsx)("nav",{className:"flex-shrink-0 bg-navy py-6",children:Object(n.jsx)("div",{className:"container",children:Object(n.jsxs)("div",{className:"flex flex-wrap items-center",children:[Object(n.jsx)("div",{className:"w-2/5 sm:w-1/3 md:w-1/4 lg:w-1/6 mr-auto mb-6 md:mb-0",children:Object(n.jsx)(a.a,{href:"/",children:Object(n.jsx)("a",{className:"font-montserrat",children:Object(n.jsx)("img",{src:"/static/images/opencertslogo.svg",alt:"OpenCerts"})})})}),o.map((function(t,r){return Object(n.jsx)("div",{className:"w-full md:w-auto md:pl-8 mb-2 md:mb-0",children:Object(n.jsx)(a.a,{href:t.path,children:Object(n.jsx)("a",{className:"font-montserrat ".concat(e.pathname===t.path?"text-white":""),children:t.label})})},r)}))]})})})}},NySA:function(e,t,r){"use strict";r.r(t);var n=r("cpVT"),s=r("nKUr"),a=r("9ixD"),c=(r("q1tI"),r("/MKj")),o=function(e){return Object(s.jsx)("div",{id:e.info[0].id,className:"flex w-full md:w-1/2 lg:w-1/3 px-4 mb-8 break-words cursor-pointer",children:Object(s.jsxs)("div",{className:"flex-1 p-6 bg-gray-200 rounded-lg",onClick:function(){return window.open(e.info[0].website)},children:[Object(s.jsx)("h3",{className:"font-montserrat font-bold",children:e.info[0].name}),Object(s.jsx)("img",{className:"h-12 max-w-10 mx-auto m-6",src:e.info[0].logo}),e.info.map((function(e,t){return Object(s.jsxs)("div",{className:"links-blue",children:[e.address&&Object(s.jsxs)("p",{children:[t>0&&"".concat(e.name," "),"Certificate Store:"," ",Object(s.jsx)("a",{href:"https://etherscan.io/address/".concat(e.address),onClick:function(e){return e.stopPropagation()},children:e.address})]}),e.address&&e.website&&Object(s.jsxs)("p",{children:["Website:"," ",Object(s.jsx)("a",{href:e.website,target:"_blank",rel:"noopener noreferrer",children:e.website})]}),e.email&&Object(s.jsxs)("p",{children:["Email: ",Object(s.jsx)("a",{href:"mailto:".concat(e.email),children:e.email})]}),e.phone&&Object(s.jsxs)("p",{children:["Phone: ",Object(s.jsx)("a",{href:"tel:".concat(e.phone),children:e.phone})]}),e.description&&Object(s.jsx)("p",{children:e.description})]},e.id)}))]},e.info[0].id)})},i=r("WGvK"),l=r("RFHY"),d=function(){return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsxs)(i.a,{heading:"Collaborate",children:[Object(s.jsx)("p",{children:"If you are from an institution and need help issuing certificates on OpenCerts, here are some companies you may want to contact."}),Object(s.jsx)("p",{children:"Do note that being on this list implies that these companies have demonstrated knowledge of implementing OpenCerts, but does not imply endorsement by GovTech."}),Object(s.jsxs)("p",{children:["If you are from a company that can help to issue certificates and would like to be added to this list, please\xa0",Object(s.jsx)("a",{className:"underline",href:"https://form.gov.sg/5d01b2542ce4bb0011a86934",target:"_blank",rel:"noopener noreferrer",children:"fill in this form."})]})]}),Object(s.jsx)("section",{className:"py-8",children:Object(s.jsx)("div",{className:"container",children:Object(s.jsx)("div",{className:"flex flex-wrap -mx-4",children:l.map((function(e,t){return Object(s.jsx)(o,{info:[e]},t)}))})})})]})},f=r("mNev"),b=r("2Uo8"),h=r("ChZ1"),u=r("LeJ0");function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function j(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){Object(n.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var m={title:"Collaborate",description:"If you are from an institution and would like to get started on OpenCerts, here are some companies that can help to issue your certificates.",openGraph:{title:"OpenCerts - Collaborate",description:"If you are from an institution and would like to get started on OpenCerts, here are some companies that can help to issue your certificates.",url:"".concat(u.j,"/collaborate")}};t.default=Object(c.b)()((function(){return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(a.b,j({},m)),Object(s.jsxs)(f.b,{children:[Object(s.jsx)(h.a,{}),Object(s.jsx)(f.a,{children:Object(s.jsx)(d,{})}),Object(s.jsx)(b.a,{})]})]})}))},"Q/Pn":function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/collaborate",function(){return r("NySA")}])},RFHY:function(e){e.exports=JSON.parse('[{"id":"convergence","name":"Convergence.tech","description":"Provides a Self-Sovereign Identity (SSI) powered digital credential solution supporting the OpenCerts schema as well as W3C DID and Verifiable Credential standards and the developing DIDComms protocols.","website":"https://convergence.tech","key":"convergence","logo":"/static/images/collaborate/CONVERGENCE_logo.png"},{"id":"riverr","name":"Riverr","description":"Provides a trusted universal industry standard for identification and health credentials. Riverr\u2019s platform conforms to different workflows that require tamper-proof, verifiable documentation.","website":"https://riverr.ai","key":"riverr","logo":"/static/images/collaborate/RIVERR_logo.png"},{"id":"nextid","name":"NextID Pte Ltd","description":"We are leading in implementation of HealthCerts for Covid-19 testing. Our hosted NextCert service produces digitally-signed, tamper-proof certificates which support either OpenCerts or HealthCerts schemas.","website":"https://nextid.com","key":"nextid","logo":"/static/images/collaborate/NEXTID_logo.png"},{"id":"edufied","name":"Edufied","description":"Edufied provides a  secured and decentralized system for Certificate Issuers, Individuals and Employers to store & verify certifications and credentials using Blockchain Technology.","website":"https://edufied.network","key":"edufied","logo":"/static/images/collaborate/EDUFIED_logo.png"},{"id":"accredify","name":"Accredify","description":"Enables institutions to issue tamper-proof digital certificates using the OpenCerts Schema.","website":"https://www.accredify.io","key":"accredify","logo":"/static/images/collaborate/ACCREDIFY_logo.png"},{"id":"catalyst","name":"Knowledge Catalyst Pte. Ltd.","description":"Knowledge Catalyst offers a Software-as-a-Service to enable Institutions to issue tampered-proof credentials based on Opencerts schema and manage the entire Credential Life-Cycle Management.","website":"https://knowledgecatalyst.io","key":"knowledge catalyst","logo":"/static/images/collaborate/KC_logo.png"},{"id":"3dcerts","name":"R3D Singapore Pte Ltd","description":"3DCerts protocol is designed to create an added level of protection for certificate issuers (institutions or corporations), owners (students or users) and employers.","website":"https://www.3dcerts.com","key":"3d certs","logo":"/static/images/collaborate/3dcerts_logo.svg"},{"id":"aokpass","name":"AOKpass","description":"ICC AOKpass provides you with a digitally authenticated, secure and portable copy of your medical records, approved by a medical professional and accessible only by you.","website":"https://www.aokpass.com","key":"aokpass","logo":"/static/images/collaborate/aokpass_logo.svg"}]')},WGvK:function(e,t,r){"use strict";r.d(t,"a",(function(){return s}));var n=r("nKUr"),s=(r("q1tI"),function(e){var t=e.heading,r=e.subHeading,s=e.children;return Object(n.jsx)("section",{className:"bg-navy text-white pt-6 pb-12",children:Object(n.jsx)("div",{className:"container",children:Object(n.jsxs)("div",{className:"flex flex-wrap",children:[Object(n.jsx)("div",{className:"w-full lg:w-auto lg:mr-20",children:Object(n.jsx)("h1",{className:"font-montserrat",children:t})}),Object(n.jsxs)("div",{className:"w-full",style:{maxWidth:"410px"},children:[r&&Object(n.jsx)("h3",{className:"font-montserrat mb-6",children:r}),Object(n.jsx)("div",{className:"text-sm",children:s})]})]})})})})},YFqc:function(e,t,r){e.exports=r("cTJO")},cTJO:function(e,t,r){"use strict";var n=r("zoAU"),s=r("7KCV");t.__esModule=!0,t.default=void 0;var a=s(r("q1tI")),c=r("elyg"),o=r("nOHt"),i=r("vNVm"),l={};function d(e,t,r,n){if((0,c.isLocalURL)(t)){e.prefetch(t,r,n).catch((function(e){0}));var s=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;l[t+"%"+r+(s?"%"+s:"")]=!0}}var f=function(e){var t=!1!==e.prefetch,r=(0,o.useRouter)(),s=r&&r.pathname||"/",f=a.default.useMemo((function(){var t=(0,c.resolveHref)(s,e.href,!0),r=n(t,2),a=r[0],o=r[1];return{href:a,as:e.as?(0,c.resolveHref)(s,e.as):o||a}}),[s,e.href,e.as]),b=f.href,h=f.as,u=e.children,p=e.replace,j=e.shallow,m=e.scroll,g=e.locale;"string"===typeof u&&(u=a.default.createElement("a",null,u));var O=a.Children.only(u),x=O&&"object"===typeof O&&O.ref,v=(0,i.useIntersection)({rootMargin:"200px"}),y=n(v,2),w=y[0],N=y[1],C=a.default.useCallback((function(e){w(e),x&&("function"===typeof x?x(e):"object"===typeof x&&(x.current=e))}),[x,w]);(0,a.useEffect)((function(){var e=N&&t&&(0,c.isLocalURL)(b),n="undefined"!==typeof g?g:r&&r.locale,s=l[b+"%"+h+(n?"%"+n:"")];e&&!s&&d(r,b,h,{locale:n})}),[h,b,N,g,t,r]);var k={ref:C,onClick:function(e){O.props&&"function"===typeof O.props.onClick&&O.props.onClick(e),e.defaultPrevented||function(e,t,r,n,s,a,o,i){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,c.isLocalURL)(r))&&(e.preventDefault(),null==o&&(o=n.indexOf("#")<0),t[s?"replace":"push"](r,n,{shallow:a,locale:i}).then((function(e){e&&o&&(window.scrollTo(0,0),document.body.focus())})))}(e,r,b,h,p,j,m,g)},onMouseEnter:function(e){(0,c.isLocalURL)(b)&&(O.props&&"function"===typeof O.props.onMouseEnter&&O.props.onMouseEnter(e),d(r,b,h,{priority:!0}))}};return(e.passHref||"a"===O.type&&!("href"in O.props))&&(k.href=(0,c.addBasePath)((0,c.addLocale)(h,"undefined"!==typeof g?g:r&&r.locale,r&&r.defaultLocale))),a.default.cloneElement(O,k)};t.default=f},mNev:function(e,t,r){"use strict";r.d(t,"b",(function(){return s})),r.d(t,"a",(function(){return a}));var n=r("nKUr"),s=(r("q1tI"),function(e){var t=e.children;return Object(n.jsx)("div",{className:"flex flex-col h-screen wrapper",children:t})}),a=function(e){var t=e.children;return Object(n.jsx)("main",{className:"main",style:{flex:"1 0 auto"},children:t})}},vNVm:function(e,t,r){"use strict";var n=r("zoAU"),s=r("AroE");t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,r=e.disabled||!o,s=(0,a.useRef)(),l=(0,a.useState)(!1),d=n(l,2),f=d[0],b=d[1],h=(0,a.useCallback)((function(e){s.current&&(s.current(),s.current=void 0),r||f||e&&e.tagName&&(s.current=function(e,t,r){var n=function(e){var t=e.rootMargin||"",r=i.get(t);if(r)return r;var n=new Map,s=new IntersectionObserver((function(e){e.forEach((function(e){var t=n.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return i.set(t,r={id:t,observer:s,elements:n}),r}(r),s=n.id,a=n.observer,c=n.elements;return c.set(e,t),a.observe(e),function(){a.unobserve(e),0===c.size&&(a.disconnect(),i.delete(s))}}(e,(function(e){return e&&b(e)}),{rootMargin:t}))}),[r,t,f]);return(0,a.useEffect)((function(){o||f||(0,c.default)((function(){return b(!0)}))}),[f]),[h,f]};var a=r("q1tI"),c=s(r("0G5g")),o="undefined"!==typeof IntersectionObserver;var i=new Map}},[["Q/Pn",1,2,0,3,4,5]]]);