(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{140:function(e,t,a){"use strict";a.r(t);a(161);var n=a(7),r=a.n(n),i=a(0),o=a.n(i),c=a(4),s=a.n(c),l=(a(176),{LIBERTY_JS:"LIBERTY_JS"}),u=[{type:l.LIBERTY_JS,date:"Nov. 2018",description:'"Building a Blog with Gatsby" (Co-Speaker)',title:"Liberty JS",link:"https://libertyjs.com/",location:"Philadelphia, PA"}],p={CODED_BY_KIDS:"CODED_BY_KIDS",GIRL_DEVELOP_IT:"GIRL_DEVELOP_IT",RAILS_BRIDGE:"RAILS_BRIDGE",TECH_GIRLZ:"TECH_GIRLZ"},d=[{type:p.GIRL_DEVELOP_IT,date:"Oct. 2018",description:"Teaching Assistant",title:"Girl Develop It",link:"https://www.girldevelopit.com/",location:"Philadelphia, PA"},{type:p.GIRL_DEVELOP_IT,date:"Jun. 2018",description:"Teaching Assistant",title:"Girl Develop It",link:"https://www.girldevelopit.com/",location:"Philadelphia, PA"},{type:p.TECH_GIRLZ,date:"Jun. 2017",description:"Teaching Assistant",title:"TechGirlz",link:"https://www.techgirlz.org/",location:"Philadelphia, PA"},{type:p.CODED_BY_KIDS,date:"May 2017",description:"Teaching Assistant",title:"Coded By Kids",link:"https://www.codedbykids.com/",location:"Philadelphia, PA"},{type:p.RAILS_BRIDGE,date:"Dec. 2016",description:"Teaching Assistant",title:"RailsBridge",link:"http://www.railsbridge.org/",location:"Philadelphia, PA"},{type:p.RAILS_BRIDGE,date:"Sept. 2016",description:"Teaching Assistant",title:"RailsBridge",link:"http://www.railsbridge.org/",location:"Portland, ME"}],m=a(177),h=a.n(m),f=a(178),g=a.n(f),_=a(179),E=a.n(_),y=a(180),v=a.n(y),I=a(181),N=a.n(I),w=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).getLogo=function(){switch(t.props.type){case l.LIBERTY_JS:return E.a;case p.CODED_BY_KIDS:return h.a;case p.GIRL_DEVELOP_IT:return g.a;case p.RAILS_BRIDGE:return v.a;case p.TECH_GIRLZ:return N.a;default:return}},t}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.date,a=e.description,n=e.link,r=e.location,i=e.title,c=this.getLogo();return o.a.createElement("div",{className:"AboutItem"},o.a.createElement("div",{className:"AboutItem__logo-wrapper"},o.a.createElement("a",{href:n,title:i},o.a.createElement("img",{className:"AboutItem__logo",src:c,alt:i}))),o.a.createElement("div",{className:"AboutItem__info"},o.a.createElement("div",{className:"AboutItem__info-header"},o.a.createElement("h4",{className:"AboutItem__title"},i),o.a.createElement("span",{className:"AboutItem__date"},t)),o.a.createElement("p",{className:"AboutItem__description"},a),o.a.createElement("p",{className:"AboutItem__location"},r)))},t}(i.Component),b=w;w.propTypes={date:s.a.string.isRequired,description:s.a.string.isRequired,link:s.a.string.isRequired,location:s.a.string.isRequired,title:s.a.string.isRequired,type:s.a.string.isRequired},w.defaultProps={};var R=a(159),k=(a(182),function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).createVolunteerItems=function(){return d.map(function(e){return o.a.createElement(b,{key:e.type+"-"+e.date,date:e.date,description:e.description,link:e.link,location:e.location,title:e.title,type:e.type})})},t.createSpeakingItems=function(){return u.map(function(e){return o.a.createElement(b,{key:e.type+"-"+e.date,date:e.date,description:e.description,link:e.link,location:e.location,title:e.title,type:e.type})})},t}return r()(t,e),t.prototype.render=function(){var e=this.createVolunteerItems(),t=this.createSpeakingItems();return o.a.createElement(R.a,{location:this.props.location},o.a.createElement("section",{className:"page__section"},o.a.createElement("h3",{className:"page__section-header"},"About"),o.a.createElement("p",{className:"page__paragraph"},"Sed ipsum dui, ornare et elementum in, lacinia eget turpis. Aliquam blandit vitae tellus a dapibus. Nullam sollicitudin lacus non est ultrices, sed aliquet sem blandit. Nulla porta sapien eget rhoncus porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit."),o.a.createElement("p",{className:"page__paragraph"},"Donec ultricies ipsum eget ornare consectetur. Aliquam a sagittis magna. Fusce blandit eleifend condimentum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."),o.a.createElement("hr",{className:"page__line page__line--index"})),o.a.createElement("section",{className:"page__section"},o.a.createElement("h3",{className:"page__section-header"},"Volunteering"),e,o.a.createElement("hr",{className:"page__line page__line--index"})),o.a.createElement("section",{className:"page__section"},o.a.createElement("h3",{className:"page__section-header"},"Speaking"),t))},t}(i.Component));t.default=k},144:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return h}),a.d(t,"StaticQueryContext",function(){return d}),a.d(t,"StaticQuery",function(){return m});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=a(143),s=a.n(c);a.d(t,"Link",function(){return s.a}),a.d(t,"withPrefix",function(){return c.withPrefix}),a.d(t,"navigate",function(){return c.navigate}),a.d(t,"push",function(){return c.push}),a.d(t,"replace",function(){return c.replace}),a.d(t,"navigateTo",function(){return c.navigateTo});var l=a(145),u=a.n(l);a.d(t,"PageRenderer",function(){return u.a});var p=a(32);a.d(t,"parsePath",function(){return p.a});var d=r.a.createContext({}),m=function(e){return r.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},145:function(e,t,a){var n;e.exports=(n=a(148))&&n.default||n},146:function(e,t,a){e.exports=a.p+"static/avatar-c6dce45cc9a1f8926ea784ab9805447a.png"},147:function(e){e.exports={data:{site:{siteMetadata:{title:"Ryan C. Harris",description:"Frontend software engineer and developer in Philadelphia, PA"}}}}},148:function(e,t,a){"use strict";a.r(t);a(33);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=a(50),s=a(2),l=function(e){var t=e.location,a=s.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json))};l.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=l},149:function(e,t,a){},150:function(e,t,a){var n=a(0);function r(e){return n.createElement("svg",e,[n.createElement("title",{key:0},"GitHub"),n.createElement("path",{d:"M16 0.395c-8.836 0-16 7.163-16 16 0 7.069 4.585 13.067 10.942 15.182 0.8 0.148 1.094-0.347 1.094-0.77 0-0.381-0.015-1.642-0.022-2.979-4.452 0.968-5.391-1.888-5.391-1.888-0.728-1.849-1.776-2.341-1.776-2.341-1.452-0.993 0.11-0.973 0.11-0.973 1.606 0.113 2.452 1.649 2.452 1.649 1.427 2.446 3.743 1.739 4.656 1.33 0.143-1.034 0.558-1.74 1.016-2.14-3.554-0.404-7.29-1.777-7.29-7.907 0-1.747 0.625-3.174 1.649-4.295-0.166-0.403-0.714-2.030 0.155-4.234 0 0 1.344-0.43 4.401 1.64 1.276-0.355 2.645-0.532 4.005-0.539 1.359 0.006 2.729 0.184 4.008 0.539 3.054-2.070 4.395-1.64 4.395-1.64 0.871 2.204 0.323 3.831 0.157 4.234 1.026 1.12 1.647 2.548 1.647 4.295 0 6.145-3.743 7.498-7.306 7.895 0.574 0.497 1.085 1.47 1.085 2.963 0 2.141-0.019 3.864-0.019 4.391 0 0.426 0.288 0.925 1.099 0.768 6.354-2.118 10.933-8.113 10.933-15.18 0-8.837-7.164-16-16-16z",key:1})])}r.defaultProps={version:"1.1",width:"32",height:"32",viewBox:"0 0 32 32"},e.exports=r,r.default=r},151:function(e,t,a){var n=a(0);function r(e){return n.createElement("svg",e,[n.createElement("title",{key:0},"LinkedIn"),n.createElement("path",{d:"M12 12h5.535v2.837h0.079c0.77-1.381 2.655-2.837 5.464-2.837 5.842 0 6.922 3.637 6.922 8.367v9.633h-5.769v-8.54c0-2.037-0.042-4.657-3.001-4.657-3.005 0-3.463 2.218-3.463 4.509v8.688h-5.767v-18z",key:1}),n.createElement("path",{d:"M2 12h6v18h-6v-18z",key:2}),n.createElement("path",{d:"M8 7c0 1.657-1.343 3-3 3s-3-1.343-3-3c0-1.657 1.343-3 3-3s3 1.343 3 3z",key:3})])}r.defaultProps={version:"1.1",width:"32",height:"32",viewBox:"0 0 32 32"},e.exports=r,r.default=r},152:function(e,t,a){var n=a(0);function r(e){return n.createElement("svg",e,[n.createElement("title",{key:0},"Twitter"),n.createElement("path",{d:"M32 7.075c-1.175 0.525-2.444 0.875-3.769 1.031 1.356-0.813 2.394-2.1 2.887-3.631-1.269 0.75-2.675 1.3-4.169 1.594-1.2-1.275-2.906-2.069-4.794-2.069-3.625 0-6.563 2.938-6.563 6.563 0 0.512 0.056 1.012 0.169 1.494-5.456-0.275-10.294-2.888-13.531-6.862-0.563 0.969-0.887 2.1-0.887 3.3 0 2.275 1.156 4.287 2.919 5.463-1.075-0.031-2.087-0.331-2.975-0.819 0 0.025 0 0.056 0 0.081 0 3.181 2.263 5.838 5.269 6.437-0.55 0.15-1.131 0.231-1.731 0.231-0.425 0-0.831-0.044-1.237-0.119 0.838 2.606 3.263 4.506 6.131 4.563-2.25 1.762-5.075 2.813-8.156 2.813-0.531 0-1.050-0.031-1.569-0.094 2.913 1.869 6.362 2.95 10.069 2.95 12.075 0 18.681-10.006 18.681-18.681 0-0.287-0.006-0.569-0.019-0.85 1.281-0.919 2.394-2.075 3.275-3.394z",key:1})])}r.defaultProps={version:"1.1",width:"32",height:"32",viewBox:"0 0 32 32"},e.exports=r,r.default=r},153:function(e,t,a){},154:function(e,t,a){},155:function(e,t,a){},156:function(e,t,a){},157:function(e,t,a){},158:function(e,t,a){},159:function(e,t,a){"use strict";var n=a(7),r=a.n(n),i=a(147),o=a(0),c=a.n(o),s=a(4),l=a.n(s),u=a(160),p=a.n(u),d=a(144),m=(a(149),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return c.a.createElement("div",{className:"ContentCard"},this.props.children)},t}(o.Component)),h=a(150),f=a.n(h),g=a(151),_=a.n(g),E=a(152),y=a.n(E),v=(a(153),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return c.a.createElement("ul",{className:"SocialIcons__list"},c.a.createElement("li",{className:"SocialIcons__list-item"},c.a.createElement("a",{className:"SocialIcons__link",href:"https://github.com/ryancharris"},c.a.createElement(f.a,{className:"SocialIcons__icon"}))),c.a.createElement("li",{className:"SocialIcons__list-item"},c.a.createElement("a",{className:"SocialIcons__link",href:"http://www.linkedin.com/in/ryancharris"},c.a.createElement(_.a,{className:"SocialIcons__icon"}))),c.a.createElement("li",{className:"SocialIcons__list-item"},c.a.createElement("a",{className:"SocialIcons__link",href:"http://www.twitter.com/ryan_c_harris"},c.a.createElement(y.a,{className:"SocialIcons__icon"}))))},t}(o.Component)),I=(a(154),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return c.a.createElement("footer",{className:"Footer"},c.a.createElement(v,null),c.a.createElement("h6",{className:"Footer__copyright"},"Ryan C. Harris © 2018"),c.a.createElement("h6",{className:"Footer__copyright"},"Philadelphia, PA"))},t}(o.Component)),N=(a(155),a(146)),w=a.n(N),b=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.title;return c.a.createElement("div",{className:"HeroBlock"},c.a.createElement("h1",{className:"HeroBlock__title"},e),c.a.createElement(o.Fragment,null,c.a.createElement("img",{className:"HeroBlock__avatar",src:w.a,alt:"Ryan C. Harris"}),c.a.createElement(v,null)))},t}(o.Component),R=b;b.propTypes={location:l.a.string.isRequired,title:l.a.string.isRequired,subtitle:l.a.string.isRequired},b.defaultProps={};a(156);var k=[{to:"/",text:"Home",type:"INTERNAL"},{to:"/blog/",text:"Blog",type:"INTERNAL"},{to:"/portfolio/",text:"Portfolio",type:"INTERNAL"},{to:"https://drive.google.com/file/d/1h46Y5IIIllrLDuRrcy7G0UkEiZ8VfoGL/view?usp=sharing",text:"C.V.",type:"EXTERNAL"}];function L(e){var t=e.path,a=k.map(function(e){if("INTERNAL"===e.type){var a=(n=e.to,Boolean(n===t)?"Nav__link Nav__link--active":"Nav__link");return c.a.createElement(d.Link,{className:a,to:e.to},e.text)}return c.a.createElement("a",{className:"Nav__link",href:e.to},e.text);var n});return c.a.createElement("nav",{className:"Nav"},a)}var S=L;L.propTypes={path:l.a.string.isRequired},L.defaultProps={};a(157),a(158);var A=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).createHeroSubtitle=function(e){switch(e){case"/":return"hi.";case"/blog/":return"blog.";case"/portfolio/":return"work.";default:return null}},t.createLayoutClassName=function(e){switch(e){case"/":return"Layout--index";case"/blog/":return"Layout--blog";case"/portfolio/":return"Layout--portfolio";default:return"Layout--blog"}},t}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.children,a=e.location,n=this.createHeroSubtitle(a.pathname),r="Layout "+this.createLayoutClassName(a.pathname);return c.a.createElement(o.Fragment,null,c.a.createElement(d.StaticQuery,{query:"888301697",render:function(e){return c.a.createElement(p.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:e.site.siteMetadata.description}]})},data:i}),c.a.createElement("main",{className:r},c.a.createElement("div",{className:"Layout__content"},c.a.createElement("header",{className:"Layout__nav"},c.a.createElement(S,{path:a.pathname})),c.a.createElement("section",{className:"Layout__body"},c.a.createElement(m,null,c.a.createElement("section",{className:"Layout__hero"},c.a.createElement(R,{location:a,title:"Ryan C. Harris",subtitle:n})),t)),c.a.createElement(I,null))))},t}(o.Component);A.propTypes={children:l.a.node.isRequired};t.a=A},161:function(e,t,a){"use strict";a(162)("link",function(e){return function(t){return e(this,"a","href",t)}})},162:function(e,t,a){var n=a(15),r=a(23),i=a(24),o=/"/g,c=function(e,t,a,n){var r=String(i(e)),c="<"+t;return""!==a&&(c+=" "+a+'="'+String(n).replace(o,"&quot;")+'"'),c+">"+r+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(c),n(n.P+n.F*r(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",a)}},176:function(e,t,a){},177:function(e,t,a){e.exports=a.p+"static/coded-by-kids-19f534f4fd241f6e73fd0d39d54c1311.png"},178:function(e,t,a){e.exports=a.p+"static/gdi-9202a5775a39030a0f357d932e60099f.png"},179:function(e,t,a){e.exports=a.p+"static/liberty-js-3fa4896ea78e59ca2275161182c32f6d.png"},180:function(e,t,a){e.exports=a.p+"static/rails-bridge-b0251a4c533ac7b16cc02696f3c76513.png"},181:function(e,t,a){e.exports=a.p+"static/tech-girlz-4a244217248a7ae1be547cae9a252c28.png"},182:function(e,t,a){}}]);
//# sourceMappingURL=component---src-pages-index-js-8966a5483041af676cad.js.map