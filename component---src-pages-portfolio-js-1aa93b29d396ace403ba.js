(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{141:function(e,t,a){"use strict";a.r(t);a(161);var n=a(7),r=a.n(n),i=a(0),o=a.n(i),c=a(159),l=a(4),s=a.n(l);a(185);function u(e){return o.a.createElement(i.Fragment,null,o.a.createElement("a",{href:e.link,className:"PortfolioItem__link",title:e.title},o.a.createElement("div",{className:"PortfolioItem"},o.a.createElement("div",{className:"PortfolioItem__img-wrapper"},o.a.createElement("img",{className:"PortfolioItem__img",src:e.image,alt:e.title})),o.a.createElement("div",{className:"PortfolioItem__content"},o.a.createElement("h2",{className:"PortfolioItem__title"},e.title),o.a.createElement("p",{className:"PortfolioItem__description"},e.description)))),!e.lastItem&&o.a.createElement("hr",{className:"page__line page__line--portfolio"}))}var p=u;u.propTypes={title:s.a.string.isRequired,description:s.a.string.isRequired,lastItem:s.a.bool.isRequired,link:s.a.string.isRequired,image:s.a.string.isRequired},u.defaultProps={};var m=[{title:"Gritty's Blog",description:"Made with Gatsby, this blog featuring the Philadelphia Flyers' mascot Gritty was used for demonstration purposes during my 2018 LibertyJS talk with Ivana Veliskova.",link:"https://github.com/ryancharris/blog-setup"},{title:"Portfolio v1.0",description:"Inspired by Google's Material Design and built using the Bootstrap framework, this is the first iteration of the site you're currently on.",link:"https://github.com/ryancharris/ryancharris.github.io"},{title:"Tic Tac Toe",description:"This iteration of the classic game Tic-Tac-Toe was built using vanilla JavaScript to practice some fundamentals.",link:"https://github.com/ryancharris/tic-tac-toe"},{title:"Who",description:'While working at RevZilla in 2017, I rebuilt my React application "Who Speaks for Us?" in Elixir/Phoenix as a learning exercise in order to get familiar with RZ\'s backend stack.',link:"https://github.com/ryancharris/who"},{title:"Who Speaks for Us?",description:"As my first foray into React, I built this application using the Sunlight Foundation's now-deprecated API to let users look up information about their congressional respresetnatives.",link:"https://github.com/ryancharris/who-speaks-for-us"}],f=a(186),d=a.n(f),h=a(187),g=a.n(h),y=a(188),v=a.n(y),_=a(189),E=a.n(_),k=a(190),b=a.n(k);function w(e){switch(e){case"Gritty's Blog":return d.a;case"Portfolio v1.0":return g.a;case"Tic Tac Toe":return v.a;case"Who":return b.a;case"Who Speaks for Us?":return E.a;default:return null}}var N=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).createPortfolioItems=function(){return m.map(function(e){var t=Boolean(m.indexOf(e)===m.length-1);return o.a.createElement(p,{key:""+e.title,title:e.title,description:e.description,lastItem:t,link:e.link,image:w(e.title)})})},t}return r()(t,e),t.prototype.render=function(){var e=this.createPortfolioItems();return o.a.createElement(c.a,{location:this.props.location},o.a.createElement("section",{className:"page__section"},e))},t}(i.Component);t.default=N},144:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return d}),a.d(t,"StaticQueryContext",function(){return m}),a.d(t,"StaticQuery",function(){return f});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=a(143),l=a.n(c);a.d(t,"Link",function(){return l.a}),a.d(t,"withPrefix",function(){return c.withPrefix}),a.d(t,"navigate",function(){return c.navigate}),a.d(t,"push",function(){return c.push}),a.d(t,"replace",function(){return c.replace}),a.d(t,"navigateTo",function(){return c.navigateTo});var s=a(145),u=a.n(s);a.d(t,"PageRenderer",function(){return u.a});var p=a(32);a.d(t,"parsePath",function(){return p.a});var m=r.a.createContext({}),f=function(e){return r.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function d(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},145:function(e,t,a){var n;e.exports=(n=a(149))&&n.default||n},146:function(e,t,a){var n=a(0);function r(e){return n.createElement("svg",e,[n.createElement("title",{key:0},"Twitter"),n.createElement("path",{d:"M32 7.075c-1.175 0.525-2.444 0.875-3.769 1.031 1.356-0.813 2.394-2.1 2.887-3.631-1.269 0.75-2.675 1.3-4.169 1.594-1.2-1.275-2.906-2.069-4.794-2.069-3.625 0-6.563 2.938-6.563 6.563 0 0.512 0.056 1.012 0.169 1.494-5.456-0.275-10.294-2.888-13.531-6.862-0.563 0.969-0.887 2.1-0.887 3.3 0 2.275 1.156 4.287 2.919 5.463-1.075-0.031-2.087-0.331-2.975-0.819 0 0.025 0 0.056 0 0.081 0 3.181 2.263 5.838 5.269 6.437-0.55 0.15-1.131 0.231-1.731 0.231-0.425 0-0.831-0.044-1.237-0.119 0.838 2.606 3.263 4.506 6.131 4.563-2.25 1.762-5.075 2.813-8.156 2.813-0.531 0-1.050-0.031-1.569-0.094 2.913 1.869 6.362 2.95 10.069 2.95 12.075 0 18.681-10.006 18.681-18.681 0-0.287-0.006-0.569-0.019-0.85 1.281-0.919 2.394-2.075 3.275-3.394z",key:1})])}r.defaultProps={version:"1.1",width:"32",height:"32",viewBox:"0 0 32 32"},e.exports=r,r.default=r},147:function(e,t,a){e.exports=a.p+"static/avatar-c6dce45cc9a1f8926ea784ab9805447a.png"},148:function(e){e.exports={data:{site:{siteMetadata:{title:"Ryan C. Harris",description:"Frontend software engineer and developer in Philadelphia, PA"}}}}},149:function(e,t,a){"use strict";a.r(t);a(33);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=a(50),l=a(2),s=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json))};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=s},150:function(e,t,a){},151:function(e,t,a){var n=a(0);function r(e){return n.createElement("svg",e,[n.createElement("title",{key:0},"GitHub"),n.createElement("path",{d:"M16 0.395c-8.836 0-16 7.163-16 16 0 7.069 4.585 13.067 10.942 15.182 0.8 0.148 1.094-0.347 1.094-0.77 0-0.381-0.015-1.642-0.022-2.979-4.452 0.968-5.391-1.888-5.391-1.888-0.728-1.849-1.776-2.341-1.776-2.341-1.452-0.993 0.11-0.973 0.11-0.973 1.606 0.113 2.452 1.649 2.452 1.649 1.427 2.446 3.743 1.739 4.656 1.33 0.143-1.034 0.558-1.74 1.016-2.14-3.554-0.404-7.29-1.777-7.29-7.907 0-1.747 0.625-3.174 1.649-4.295-0.166-0.403-0.714-2.030 0.155-4.234 0 0 1.344-0.43 4.401 1.64 1.276-0.355 2.645-0.532 4.005-0.539 1.359 0.006 2.729 0.184 4.008 0.539 3.054-2.070 4.395-1.64 4.395-1.64 0.871 2.204 0.323 3.831 0.157 4.234 1.026 1.12 1.647 2.548 1.647 4.295 0 6.145-3.743 7.498-7.306 7.895 0.574 0.497 1.085 1.47 1.085 2.963 0 2.141-0.019 3.864-0.019 4.391 0 0.426 0.288 0.925 1.099 0.768 6.354-2.118 10.933-8.113 10.933-15.18 0-8.837-7.164-16-16-16z",key:1})])}r.defaultProps={version:"1.1",width:"32",height:"32",viewBox:"0 0 32 32"},e.exports=r,r.default=r},152:function(e,t,a){var n=a(0);function r(e){return n.createElement("svg",e,[n.createElement("title",{key:0},"LinkedIn"),n.createElement("path",{d:"M12 12h5.535v2.837h0.079c0.77-1.381 2.655-2.837 5.464-2.837 5.842 0 6.922 3.637 6.922 8.367v9.633h-5.769v-8.54c0-2.037-0.042-4.657-3.001-4.657-3.005 0-3.463 2.218-3.463 4.509v8.688h-5.767v-18z",key:1}),n.createElement("path",{d:"M2 12h6v18h-6v-18z",key:2}),n.createElement("path",{d:"M8 7c0 1.657-1.343 3-3 3s-3-1.343-3-3c0-1.657 1.343-3 3-3s3 1.343 3 3z",key:3})])}r.defaultProps={version:"1.1",width:"32",height:"32",viewBox:"0 0 32 32"},e.exports=r,r.default=r},153:function(e,t,a){},154:function(e,t,a){},155:function(e,t,a){},156:function(e,t,a){},157:function(e,t,a){},158:function(e,t,a){},159:function(e,t,a){"use strict";var n=a(7),r=a.n(n),i=a(148),o=a(0),c=a.n(o),l=a(4),s=a.n(l),u=a(160),p=a.n(u),m=a(144),f=(a(150),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return c.a.createElement("div",{className:"ContentCard"},this.props.children)},t}(o.Component)),d=a(151),h=a.n(d),g=a(152),y=a.n(g),v=a(146),_=a.n(v);a(153);function E(e){var t;switch(e.location.pathname){case"/":t="SocialIcons__link--index";break;case"/blog/":t="SocialIcons__link--blog";break;case"/portfolio/":t="SocialIcons__link--portfolio";break;default:t="SocialIcons__link--blog"}return c.a.createElement("ul",{className:"SocialIcons__list"},c.a.createElement("li",{className:"SocialIcons__list-item"},c.a.createElement("a",{className:"SocialIcons__link "+t,href:"https://github.com/ryancharris",title:"GitHub"},c.a.createElement(h.a,{className:"SocialIcons__icon"}))),c.a.createElement("li",{className:"SocialIcons__list-item"},c.a.createElement("a",{className:"SocialIcons__link "+t,href:"http://www.linkedin.com/in/ryancharris",title:"LinkedIn"},c.a.createElement(y.a,{className:"SocialIcons__icon"}))),c.a.createElement("li",{className:"SocialIcons__list-item"},c.a.createElement("a",{className:"SocialIcons__link "+t,href:"http://www.twitter.com/ryan_c_harris",title:"Twitter"},c.a.createElement(_.a,{className:"SocialIcons__icon"}))))}var k=E;E.propTypes={location:s.a.object},E.defaultProps={location:{}};a(154);var b=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return c.a.createElement("footer",{className:"Footer"},c.a.createElement(k,null),c.a.createElement("h6",{className:"Footer__copyright"},"Ryan C. Harris © 2018"),c.a.createElement("h6",{className:"Footer__copyright"},"Philadelphia, PA"))},t}(o.Component),w=(a(155),a(147)),N=a.n(w);function I(e){var t,a=e.location,n=e.subtitle,r=e.title;switch(a.pathname){case"/":t="HeroBlock__avatar--index";break;case"/blog/":t="HeroBlock__avatar--blog";break;case"/portfolio/":t="HeroBlock__avatar--portfolio";break;default:t="HeroBlock__avatar--blog"}return c.a.createElement("div",{className:"HeroBlock"},c.a.createElement("h1",{className:"HeroBlock__title"},r),c.a.createElement(o.Fragment,null,c.a.createElement("img",{className:"HeroBlock__avatar "+t,src:N.a,alt:"Ryan C. Harris"}),c.a.createElement("h3",{className:"HeroBlock__subtitle"},n),c.a.createElement(k,{location:a})))}var x=I;I.propTypes={location:s.a.object.isRequired,subtitle:s.a.string.isRequired,title:s.a.string.isRequired};a(156);var P=[{to:"/",text:"Home",type:"INTERNAL"},{to:"/blog/",text:"Blog",type:"INTERNAL"},{to:"/portfolio/",text:"Portfolio",type:"INTERNAL"},{to:"https://drive.google.com/file/d/1h46Y5IIIllrLDuRrcy7G0UkEiZ8VfoGL/view?usp=sharing",text:"C.V.",type:"EXTERNAL"}];function R(e){var t=e.path,a=P.map(function(e){if("INTERNAL"===e.type){var a=(n=e.to,Boolean(n===t)?"Nav__link Nav__link--active":"Nav__link");return c.a.createElement(m.Link,{key:""+e.text.toLowerCase(),className:a,to:e.to},e.text)}return c.a.createElement("a",{key:"cv",className:"Nav__link",href:e.to},e.text);var n});return c.a.createElement("nav",{className:"Nav"},a)}var S=R;R.propTypes={path:s.a.string.isRequired},R.defaultProps={};a(157),a(158);var L=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).createLayoutClassName=function(e){switch(e){case"/":return"Layout--index";case"/blog/":return"Layout--blog";case"/portfolio/":return"Layout--portfolio";default:return"Layout--blog"}},t}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.children,a=e.location,n="Layout "+this.createLayoutClassName(a.pathname);return c.a.createElement(o.Fragment,null,c.a.createElement(m.StaticQuery,{query:"888301697",render:function(e){return c.a.createElement(p.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:e.site.siteMetadata.description}]})},data:i}),c.a.createElement("main",{className:n},c.a.createElement("div",{className:"Layout__content"},c.a.createElement("header",{className:"Layout__nav"},c.a.createElement(S,{path:a.pathname})),c.a.createElement("section",{className:"Layout__body"},c.a.createElement(f,null,c.a.createElement("section",{className:"Layout__hero"},c.a.createElement(x,{location:a,subtitle:"software engineer",title:"Ryan C. Harris"})),t)),c.a.createElement(b,null))))},t}(o.Component);L.propTypes={children:s.a.node.isRequired};t.a=L},161:function(e,t,a){"use strict";a(164)("link",function(e){return function(t){return e(this,"a","href",t)}})},164:function(e,t,a){var n=a(15),r=a(23),i=a(24),o=/"/g,c=function(e,t,a,n){var r=String(i(e)),c="<"+t;return""!==a&&(c+=" "+a+'="'+String(n).replace(o,"&quot;")+'"'),c+">"+r+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(c),n(n.P+n.F*r(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",a)}},185:function(e,t,a){},186:function(e,t,a){e.exports=a.p+"static/grittys-blog-5ac7ab5feac912497e657e8e72cc6f01.png"},187:function(e,t,a){e.exports=a.p+"static/portfolio-v1-a6a0a283c0fb5da9791d6821d6caeab1.png"},188:function(e,t,a){e.exports=a.p+"static/tic-tac-toe-7e11ff15a211c58e9d7f3798bde24e6d.png"},189:function(e,t,a){e.exports=a.p+"static/who-speaks-for-us-86714278e2c8fd768cc38104ffc8fad6.png"},190:function(e,t,a){e.exports=a.p+"static/who-fa0c5344215d76f1319ca3bbd8e654fd.png"}}]);
//# sourceMappingURL=component---src-pages-portfolio-js-1aa93b29d396ace403ba.js.map