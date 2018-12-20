(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{141:function(e,t,a){"use strict";a.r(t);a(160);var n=a(7),r=a.n(n),i=a(0),o=a.n(i),c=a(161),l=a(4),s=a.n(l);a(187);function u(e){return o.a.createElement(i.Fragment,null,o.a.createElement("a",{href:e.link,className:"PortfolioItem__link",title:e.title},o.a.createElement("div",{className:"PortfolioItem"},o.a.createElement("div",{className:"PortfolioItem__img-wrapper"},o.a.createElement("img",{className:"PortfolioItem__img",src:e.image,alt:e.title})),o.a.createElement("div",{className:"PortfolioItem__content"},o.a.createElement("h2",{className:"PortfolioItem__title"},e.title),o.a.createElement("p",{className:"PortfolioItem__description"},e.description)))),!e.lastItem&&o.a.createElement("hr",{className:"page__line page__line--portfolio"}))}var m=u;u.propTypes={title:s.a.string.isRequired,description:s.a.string.isRequired,lastItem:s.a.bool.isRequired,link:s.a.string.isRequired,image:s.a.string.isRequired},u.defaultProps={};var p=[{title:"Gritty's Blog",description:"Made with Gatsby, this blog featuring the Philadelphia Flyers' mascot Gritty was used for demonstration purposes during my 2018 LibertyJS talk with Ivana Veliskova.",link:"https://github.com/ryancharris/blog-setup"},{title:"Portfolio v1.0",description:"Inspired by Google's Material Design and built using the Bootstrap framework, this is the first iteration of the site you're currently on.",link:"https://github.com/ryancharris/ryancharris.github.io"},{title:"Tic Tac Toe",description:"This iteration of the classic game Tic-Tac-Toe was built using vanilla JavaScript to practice some fundamentals.",link:"https://github.com/ryancharris/tic-tac-toe"},{title:"Who",description:'While working at RevZilla in 2017, I rebuilt my React application "Who Speaks for Us?" in Elixir/Phoenix as a learning exercise in order to get familiar with RZ\'s backend stack.',link:"https://github.com/ryancharris/who"},{title:"Who Speaks for Us?",description:"As my first foray into React, I built this application using the Sunlight Foundation's now-deprecated API to let users look up information about their congressional respresetnatives.",link:"https://github.com/ryancharris/who-speaks-for-us"}],f=a(188),d=a.n(f),h=a(189),g=a.n(h),v=a(190),y=a.n(v),_=a(191),E=a.n(_),b=a(192),k=a.n(b);function N(e){switch(e){case"Gritty's Blog":return d.a;case"Portfolio v1.0":return g.a;case"Tic Tac Toe":return y.a;case"Who":return k.a;case"Who Speaks for Us?":return E.a;default:return null}}var w=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).createPortfolioItems=function(){return p.map(function(e){var t=Boolean(p.indexOf(e)===p.length-1);return o.a.createElement(m,{key:""+e.title,title:e.title,description:e.description,lastItem:t,link:e.link,image:N(e.title)})})},t}return r()(t,e),t.prototype.render=function(){var e=this.createPortfolioItems();return o.a.createElement(c.a,{location:this.props.location},o.a.createElement("section",{className:"page__section"},e))},t}(i.Component);t.default=w},144:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return d}),a.d(t,"StaticQueryContext",function(){return p}),a.d(t,"StaticQuery",function(){return f});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=a(143),l=a.n(c);a.d(t,"Link",function(){return l.a}),a.d(t,"withPrefix",function(){return c.withPrefix}),a.d(t,"navigate",function(){return c.navigate}),a.d(t,"push",function(){return c.push}),a.d(t,"replace",function(){return c.replace}),a.d(t,"navigateTo",function(){return c.navigateTo});var s=a(145),u=a.n(s);a.d(t,"PageRenderer",function(){return u.a});var m=a(32);a.d(t,"parsePath",function(){return m.a});var p=r.a.createContext({}),f=function(e){return r.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function d(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},145:function(e,t,a){var n;e.exports=(n=a(149))&&n.default||n},146:function(e,t,a){var n=a(0);function r(e){return n.createElement("svg",e,n.createElement("path",{d:"M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"}))}r.defaultProps={"aria-hidden":"true","data-prefix":"fab","data-icon":"twitter",className:"svg-inline--fa fa-twitter fa-w-16",role:"img",viewBox:"0 0 512 512"},e.exports=r,r.default=r},147:function(e,t,a){e.exports=a.p+"static/avatar-c6dce45cc9a1f8926ea784ab9805447a.png"},148:function(e){e.exports={data:{site:{siteMetadata:{title:"Ryan C. Harris",description:"Frontend software engineer and developer in Philadelphia, PA"}}}}},149:function(e,t,a){"use strict";a.r(t);a(33);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=a(50),l=a(2),s=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json))};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=s},150:function(e,t,a){},151:function(e,t,a){var n=a(0);function r(e){return n.createElement("svg",e,n.createElement("path",{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"}))}r.defaultProps={"aria-hidden":"true","data-prefix":"fab","data-icon":"github",className:"svg-inline--fa fa-github fa-w-16",role:"img",viewBox:"0 0 496 512"},e.exports=r,r.default=r},152:function(e,t,a){var n=a(0);function r(e){return n.createElement("svg",e,n.createElement("path",{d:"M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"}))}r.defaultProps={"aria-hidden":"true","data-prefix":"fab","data-icon":"linkedin",className:"svg-inline--fa fa-linkedin fa-w-14",role:"img",viewBox:"0 0 448 512"},e.exports=r,r.default=r},153:function(e,t,a){var n=a(0);function r(e){return n.createElement("svg",e,n.createElement("path",{d:"M71.5 142.3c.6-5.9-1.7-11.8-6.1-15.8L20.3 72.1V64h140.2l108.4 237.7L364.2 64h133.7v8.1l-38.6 37c-3.3 2.5-5 6.7-4.3 10.8v272c-.7 4.1 1 8.3 4.3 10.8l37.7 37v8.1H307.3v-8.1l39.1-37.9c3.8-3.8 3.8-5 3.8-10.8V171.2L241.5 447.1h-14.7L100.4 171.2v184.9c-1.1 7.8 1.5 15.6 7 21.2l50.8 61.6v8.1h-144v-8L65 377.3c5.4-5.6 7.9-13.5 6.5-21.2V142.3z"}))}r.defaultProps={"aria-hidden":"true","data-prefix":"fab","data-icon":"medium-m",className:"svg-inline--fa fa-medium-m fa-w-16",role:"img",viewBox:"0 0 512 512"},e.exports=r,r.default=r},154:function(e,t,a){},155:function(e,t,a){},156:function(e,t,a){},157:function(e,t,a){},158:function(e,t,a){},159:function(e,t,a){},160:function(e,t,a){"use strict";a(162)("link",function(e){return function(t){return e(this,"a","href",t)}})},161:function(e,t,a){"use strict";var n=a(7),r=a.n(n),i=a(148),o=a(0),c=a.n(o),l=a(4),s=a.n(l),u=a(163),m=a.n(u),p=a(144),f=(a(150),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return c.a.createElement("div",{className:"ContentCard"},this.props.children)},t}(o.Component)),d=a(151),h=a.n(d),g=a(152),v=a.n(g),y=a(146),_=a.n(y),E=a(153),b=a.n(E);a(154);function k(e){var t;switch(e.location.pathname){case"/":t="SocialIcons__link--index";break;case"/blog/":t="SocialIcons__link--blog";break;case"/portfolio/":t="SocialIcons__link--portfolio";break;default:t="SocialIcons__link--blog"}return c.a.createElement("ul",{className:"SocialIcons__list"},c.a.createElement("li",{className:"SocialIcons__list-item"},c.a.createElement("a",{className:"SocialIcons__link "+t,href:"https://github.com/ryancharris",title:"GitHub"},c.a.createElement(h.a,{className:"SocialIcons__icon"}))),c.a.createElement("li",{className:"SocialIcons__list-item"},c.a.createElement("a",{className:"SocialIcons__link "+t,href:"http://www.twitter.com/ryan_c_harris",title:"Twitter"},c.a.createElement(_.a,{className:"SocialIcons__icon"}))),c.a.createElement("li",{className:"SocialIcons__list-item"},c.a.createElement("a",{className:"SocialIcons__link "+t,href:"http://www.linkedin.com/in/ryancharris",title:"LinkedIn"},c.a.createElement(v.a,{className:"SocialIcons__icon"}))),c.a.createElement("li",{className:"SocialIcons__list-item"},c.a.createElement("a",{className:"SocialIcons__link "+t,href:"https://medium.com/@ryancharris",title:"Medium"},c.a.createElement(b.a,{className:"SocialIcons__icon"}))))}var N=k;k.propTypes={location:s.a.object},k.defaultProps={location:{}};a(155);var w=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return c.a.createElement("footer",{className:"Footer"},c.a.createElement(N,null),c.a.createElement("h6",{className:"Footer__copyright"},"Ryan C. Harris © 2018"),c.a.createElement("h6",{className:"Footer__copyright"},"Philadelphia, PA"))},t}(o.Component),I=(a(156),a(147)),x=a.n(I);function P(e){var t,a=e.location,n=e.subtitle,r=e.title;switch(a.pathname){case"/":t="HeroBlock__avatar--index";break;case"/blog/":t="HeroBlock__avatar--blog";break;case"/portfolio/":t="HeroBlock__avatar--portfolio";break;default:t="HeroBlock__avatar--blog"}return c.a.createElement("div",{className:"HeroBlock"},c.a.createElement("h1",{className:"HeroBlock__title"},r),c.a.createElement(o.Fragment,null,c.a.createElement("img",{className:"HeroBlock__avatar "+t,src:x.a,alt:"Ryan C. Harris"}),c.a.createElement("h3",{className:"HeroBlock__subtitle"},n),c.a.createElement(N,{location:a})))}var S=P;P.propTypes={location:s.a.object.isRequired,subtitle:s.a.string.isRequired,title:s.a.string.isRequired};a(157);var L=[{to:"/",text:"Home",type:"INTERNAL"},{to:"/blog/",text:"Blog",type:"INTERNAL"},{to:"/portfolio/",text:"Portfolio",type:"INTERNAL"},{to:"https://drive.google.com/file/d/1h46Y5IIIllrLDuRrcy7G0UkEiZ8VfoGL/view?usp=sharing",text:"C.V.",type:"EXTERNAL"}];function R(e){var t=e.path,a=L.map(function(e){if("INTERNAL"===e.type){var a=(n=e.to,Boolean(n===t)?"Nav__link Nav__link--active":"Nav__link");return c.a.createElement(p.Link,{key:""+e.text.toLowerCase(),className:a,to:e.to},e.text)}return c.a.createElement("a",{key:"cv",className:"Nav__link",href:e.to},e.text);var n});return c.a.createElement("nav",{className:"Nav"},a)}var T=R;R.propTypes={path:s.a.string.isRequired},R.defaultProps={};a(158),a(159);var q=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).createLayoutClassName=function(e){switch(e){case"/":return"Layout--index";case"/blog/":return"Layout--blog";case"/portfolio/":return"Layout--portfolio";default:return"Layout--blog"}},t}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.children,a=e.location,n="Layout "+this.createLayoutClassName(a.pathname);return c.a.createElement(o.Fragment,null,c.a.createElement(p.StaticQuery,{query:"888301697",render:function(e){return c.a.createElement(m.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:e.site.siteMetadata.description}]})},data:i}),c.a.createElement("main",{className:n},c.a.createElement("div",{className:"Layout__content"},c.a.createElement("header",{className:"Layout__nav"},c.a.createElement(T,{path:a.pathname})),c.a.createElement("section",{className:"Layout__body"},c.a.createElement(f,null,c.a.createElement("section",{className:"Layout__hero"},c.a.createElement(S,{location:a,subtitle:"software engineer",title:"Ryan C. Harris"})),t)),c.a.createElement(w,null))))},t}(o.Component);q.propTypes={children:s.a.node.isRequired};t.a=q},162:function(e,t,a){var n=a(15),r=a(23),i=a(24),o=/"/g,c=function(e,t,a,n){var r=String(i(e)),c="<"+t;return""!==a&&(c+=" "+a+'="'+String(n).replace(o,"&quot;")+'"'),c+">"+r+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(c),n(n.P+n.F*r(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",a)}},187:function(e,t,a){},188:function(e,t,a){e.exports=a.p+"static/grittys-blog-5ac7ab5feac912497e657e8e72cc6f01.png"},189:function(e,t,a){e.exports=a.p+"static/portfolio-v1-a6a0a283c0fb5da9791d6821d6caeab1.png"},190:function(e,t,a){e.exports=a.p+"static/tic-tac-toe-7e11ff15a211c58e9d7f3798bde24e6d.png"},191:function(e,t,a){e.exports=a.p+"static/who-speaks-for-us-86714278e2c8fd768cc38104ffc8fad6.png"},192:function(e,t,a){e.exports=a.p+"static/who-fa0c5344215d76f1319ca3bbd8e654fd.png"}}]);
//# sourceMappingURL=component---src-pages-portfolio-js-55c08527d83935692d0c.js.map