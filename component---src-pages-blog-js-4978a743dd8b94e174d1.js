(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{138:function(e,t,a){"use strict";a.r(t),a.d(t,"query",function(){return m});var n=a(7),r=a.n(n),o=a(0),i=a.n(o),c=a(144),l=a(162),s=a(159),u=(a(177),function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).createPostItems=function(){return t.props.data.allMarkdownRemark.edges.map(function(e){var t="url("+e.node.frontmatter.attachments[0].publicURL+")";return i.a.createElement("section",{key:e.node.id,className:"BlogIndex__post"},i.a.createElement(c.Link,{className:"BlogIndex__link",to:e.node.fields.slug},i.a.createElement(l.a,{date:e.node.frontmatter.date,image:t,minutes:e.node.timeToRead,title:e.node.frontmatter.title})),i.a.createElement("div",{className:"BlogIndex__body"},i.a.createElement("p",null,e.node.excerpt)),i.a.createElement("div",{className:"BlogIndex__read-more-wrapper"},i.a.createElement(c.Link,{className:"BlogIndex__read-more",to:e.node.fields.slug},"Read More...")))})},t}return r()(t,e),t.prototype.render=function(){return i.a.createElement(s.a,{location:this.props.location},this.createPostItems())},t}(o.Component));t.default=u;var m="241843614"},144:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return f}),a.d(t,"StaticQueryContext",function(){return d}),a.d(t,"StaticQuery",function(){return p});var n=a(0),r=a.n(n),o=a(4),i=a.n(o),c=a(143),l=a.n(c);a.d(t,"Link",function(){return l.a}),a.d(t,"withPrefix",function(){return c.withPrefix}),a.d(t,"navigate",function(){return c.navigate}),a.d(t,"push",function(){return c.push}),a.d(t,"replace",function(){return c.replace}),a.d(t,"navigateTo",function(){return c.navigateTo});var s=a(145),u=a.n(s);a.d(t,"PageRenderer",function(){return u.a});var m=a(32);a.d(t,"parsePath",function(){return m.a});var d=r.a.createContext({}),p=function(e){return r.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},145:function(e,t,a){var n;e.exports=(n=a(149))&&n.default||n},146:function(e,t,a){var n=a(0);function r(e){return n.createElement("svg",e,[n.createElement("title",{key:0},"Twitter"),n.createElement("path",{d:"M32 7.075c-1.175 0.525-2.444 0.875-3.769 1.031 1.356-0.813 2.394-2.1 2.887-3.631-1.269 0.75-2.675 1.3-4.169 1.594-1.2-1.275-2.906-2.069-4.794-2.069-3.625 0-6.563 2.938-6.563 6.563 0 0.512 0.056 1.012 0.169 1.494-5.456-0.275-10.294-2.888-13.531-6.862-0.563 0.969-0.887 2.1-0.887 3.3 0 2.275 1.156 4.287 2.919 5.463-1.075-0.031-2.087-0.331-2.975-0.819 0 0.025 0 0.056 0 0.081 0 3.181 2.263 5.838 5.269 6.437-0.55 0.15-1.131 0.231-1.731 0.231-0.425 0-0.831-0.044-1.237-0.119 0.838 2.606 3.263 4.506 6.131 4.563-2.25 1.762-5.075 2.813-8.156 2.813-0.531 0-1.050-0.031-1.569-0.094 2.913 1.869 6.362 2.95 10.069 2.95 12.075 0 18.681-10.006 18.681-18.681 0-0.287-0.006-0.569-0.019-0.85 1.281-0.919 2.394-2.075 3.275-3.394z",key:1})])}r.defaultProps={version:"1.1",width:"32",height:"32",viewBox:"0 0 32 32"},e.exports=r,r.default=r},147:function(e,t,a){e.exports=a.p+"static/avatar-c6dce45cc9a1f8926ea784ab9805447a.png"},148:function(e){e.exports={data:{site:{siteMetadata:{title:"Ryan C. Harris",description:"Frontend software engineer and developer in Philadelphia, PA"}}}}},149:function(e,t,a){"use strict";a.r(t);a(33);var n=a(0),r=a.n(n),o=a(4),i=a.n(o),c=a(50),l=a(2),s=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json))};s.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=s},150:function(e,t,a){},151:function(e,t,a){var n=a(0);function r(e){return n.createElement("svg",e,[n.createElement("title",{key:0},"GitHub"),n.createElement("path",{d:"M16 0.395c-8.836 0-16 7.163-16 16 0 7.069 4.585 13.067 10.942 15.182 0.8 0.148 1.094-0.347 1.094-0.77 0-0.381-0.015-1.642-0.022-2.979-4.452 0.968-5.391-1.888-5.391-1.888-0.728-1.849-1.776-2.341-1.776-2.341-1.452-0.993 0.11-0.973 0.11-0.973 1.606 0.113 2.452 1.649 2.452 1.649 1.427 2.446 3.743 1.739 4.656 1.33 0.143-1.034 0.558-1.74 1.016-2.14-3.554-0.404-7.29-1.777-7.29-7.907 0-1.747 0.625-3.174 1.649-4.295-0.166-0.403-0.714-2.030 0.155-4.234 0 0 1.344-0.43 4.401 1.64 1.276-0.355 2.645-0.532 4.005-0.539 1.359 0.006 2.729 0.184 4.008 0.539 3.054-2.070 4.395-1.64 4.395-1.64 0.871 2.204 0.323 3.831 0.157 4.234 1.026 1.12 1.647 2.548 1.647 4.295 0 6.145-3.743 7.498-7.306 7.895 0.574 0.497 1.085 1.47 1.085 2.963 0 2.141-0.019 3.864-0.019 4.391 0 0.426 0.288 0.925 1.099 0.768 6.354-2.118 10.933-8.113 10.933-15.18 0-8.837-7.164-16-16-16z",key:1})])}r.defaultProps={version:"1.1",width:"32",height:"32",viewBox:"0 0 32 32"},e.exports=r,r.default=r},152:function(e,t,a){var n=a(0);function r(e){return n.createElement("svg",e,[n.createElement("title",{key:0},"LinkedIn"),n.createElement("path",{d:"M12 12h5.535v2.837h0.079c0.77-1.381 2.655-2.837 5.464-2.837 5.842 0 6.922 3.637 6.922 8.367v9.633h-5.769v-8.54c0-2.037-0.042-4.657-3.001-4.657-3.005 0-3.463 2.218-3.463 4.509v8.688h-5.767v-18z",key:1}),n.createElement("path",{d:"M2 12h6v18h-6v-18z",key:2}),n.createElement("path",{d:"M8 7c0 1.657-1.343 3-3 3s-3-1.343-3-3c0-1.657 1.343-3 3-3s3 1.343 3 3z",key:3})])}r.defaultProps={version:"1.1",width:"32",height:"32",viewBox:"0 0 32 32"},e.exports=r,r.default=r},153:function(e,t,a){},154:function(e,t,a){},155:function(e,t,a){},156:function(e,t,a){},157:function(e,t,a){},158:function(e,t,a){},159:function(e,t,a){"use strict";var n=a(7),r=a.n(n),o=a(148),i=a(0),c=a.n(i),l=a(4),s=a.n(l),u=a(160),m=a.n(u),d=a(144),p=(a(150),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return c.a.createElement("div",{className:"ContentCard"},this.props.children)},t}(i.Component)),f=a(151),h=a.n(f),_=a(152),g=a.n(_),y=a(146),v=a.n(y);a(153);function E(e){var t;switch(e.location.pathname){case"/":t="SocialIcons__link--index";break;case"/blog/":t="SocialIcons__link--blog";break;case"/portfolio/":t="SocialIcons__link--portfolio";break;default:t="SocialIcons__link--blog"}return c.a.createElement("ul",{className:"SocialIcons__list"},c.a.createElement("li",{className:"SocialIcons__list-item"},c.a.createElement("a",{className:"SocialIcons__link "+t,href:"https://github.com/ryancharris",title:"GitHub"},c.a.createElement(h.a,{className:"SocialIcons__icon"}))),c.a.createElement("li",{className:"SocialIcons__list-item"},c.a.createElement("a",{className:"SocialIcons__link "+t,href:"http://www.linkedin.com/in/ryancharris",title:"LinkedIn"},c.a.createElement(g.a,{className:"SocialIcons__icon"}))),c.a.createElement("li",{className:"SocialIcons__list-item"},c.a.createElement("a",{className:"SocialIcons__link "+t,href:"http://www.twitter.com/ryan_c_harris",title:"Twitter"},c.a.createElement(v.a,{className:"SocialIcons__icon"}))))}var k=E;E.propTypes={location:s.a.object},E.defaultProps={location:{}};a(154);var N=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return c.a.createElement("footer",{className:"Footer"},c.a.createElement(k,null),c.a.createElement("h6",{className:"Footer__copyright"},"Ryan C. Harris © 2018"),c.a.createElement("h6",{className:"Footer__copyright"},"Philadelphia, PA"))},t}(i.Component),b=(a(155),a(147)),w=a.n(b);function I(e){var t,a=e.location,n=e.subtitle,r=e.title;switch(a.pathname){case"/":t="HeroBlock__avatar--index";break;case"/blog/":t="HeroBlock__avatar--blog";break;case"/portfolio/":t="HeroBlock__avatar--portfolio";break;default:t="HeroBlock__avatar--blog"}return c.a.createElement("div",{className:"HeroBlock"},c.a.createElement("h1",{className:"HeroBlock__title"},r),c.a.createElement(i.Fragment,null,c.a.createElement("img",{className:"HeroBlock__avatar "+t,src:w.a,alt:"Ryan C. Harris"}),c.a.createElement("h3",{className:"HeroBlock__subtitle"},n),c.a.createElement(k,{location:a})))}var x=I;I.propTypes={location:s.a.object.isRequired,subtitle:s.a.string.isRequired,title:s.a.string.isRequired};a(156);var R=[{to:"/",text:"Home",type:"INTERNAL"},{to:"/blog/",text:"Blog",type:"INTERNAL"},{to:"/portfolio/",text:"Portfolio",type:"INTERNAL"},{to:"https://drive.google.com/file/d/1h46Y5IIIllrLDuRrcy7G0UkEiZ8VfoGL/view?usp=sharing",text:"C.V.",type:"EXTERNAL"}];function L(e){var t=e.path,a=R.map(function(e){if("INTERNAL"===e.type){var a=(n=e.to,Boolean(n===t)?"Nav__link Nav__link--active":"Nav__link");return c.a.createElement(d.Link,{key:""+e.text.toLowerCase(),className:a,to:e.to},e.text)}return c.a.createElement("a",{key:"cv",className:"Nav__link",href:e.to},e.text);var n});return c.a.createElement("nav",{className:"Nav"},a)}var B=L;L.propTypes={path:s.a.string.isRequired},L.defaultProps={};a(157),a(158);var P=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).createLayoutClassName=function(e){switch(e){case"/":return"Layout--index";case"/blog/":return"Layout--blog";case"/portfolio/":return"Layout--portfolio";default:return"Layout--blog"}},t}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.children,a=e.location,n="Layout "+this.createLayoutClassName(a.pathname);return c.a.createElement(i.Fragment,null,c.a.createElement(d.StaticQuery,{query:"888301697",render:function(e){return c.a.createElement(m.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:e.site.siteMetadata.description}]})},data:o}),c.a.createElement("main",{className:n},c.a.createElement("div",{className:"Layout__content"},c.a.createElement("header",{className:"Layout__nav"},c.a.createElement(B,{path:a.pathname})),c.a.createElement("section",{className:"Layout__body"},c.a.createElement(p,null,c.a.createElement("section",{className:"Layout__hero"},c.a.createElement(x,{location:a,subtitle:"software engineer",title:"Ryan C. Harris"})),t)),c.a.createElement(N,null))))},t}(i.Component);P.propTypes={children:s.a.node.isRequired};t.a=P},162:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(4),i=a.n(o);a(163);function c(e){var t=e.date,a=e.image,o=e.minutes,i=e.title;return r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"BlogPostHero",style:{background:"linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.25)), "+a,backgroundSize:"cover",backgroundPosition:"center center",backgroundRepeat:"no-repeat"}},r.a.createElement("h1",{className:"BlogPostHero__title"},i),r.a.createElement("h4",{className:"BlogPostHero__time"},o," min. read"),r.a.createElement("h4",{className:"BlogPostHero__date"},t)),r.a.createElement("hr",{className:"page__line page__line--blog"}))}t.a=c,c.propTypes={date:i.a.string.isRequired,image:i.a.string.isRequired,minutes:i.a.number.isRequired,title:i.a.string.isRequired}},163:function(e,t,a){},177:function(e,t,a){}}]);
//# sourceMappingURL=component---src-pages-blog-js-4978a743dd8b94e174d1.js.map