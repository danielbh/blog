webpackJsonp([170,165],{0:function(t,e,n){t.exports=n(82)},82:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function l(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0}),e.routeQuery=void 0;var i=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),u=n(3),f=r(u),c=n(27),s=r(c),d=n(14),p=n(24),h=r(p),m=n(21),y=r(m),b=n(31),g=r(b),w=g["default"].rhythm,E=n(78),v=function(t){function e(){return o(this,e),a(this,Object.getPrototypeOf(e).apply(this,arguments))}return l(e,t),i(e,[{key:"render",value:function(){var t=this.props.data.allMarkdown.edges,e=(0,y["default"])(this.props,"data.config.siteMetadata.title"),n=t.map(function(t){if(t.node.frontmatter.draft!==!0)return f["default"].createElement("li",{key:t.node.path},f["default"].createElement(d.Link,{style:{textDecoration:"none"},to:t.node.path},t.node.frontmatter.title))});return f["default"].createElement(s["default"],{title:e},f["default"].createElement(h["default"],this.props,f["default"].createElement("div",null,f["default"].createElement("p",{style:{marginBottom:w(2.5)}},f["default"].createElement("img",{src:E,style:{"float":"left",marginRight:w(.25),marginBottom:0,width:w(2),height:w(2)}}),"Written by ",f["default"].createElement("strong",null,this.props.data.config.siteMetadata.author)," who lives and works in San Francisco building useful things. You should ",f["default"].createElement("a",{href:"https://twitter.com/kylemathews"},"follow him on Twitter")),f["default"].createElement("ul",null,n))))}}]),e}(f["default"].Component);e["default"]=v;e.routeQuery="\n  {\n    config {\n      siteMetadata {\n        title\n        author\n      }\n    }\n    allMarkdown(first: 2000) {\n      totalCount\n      edges {\n        node {\n          path\n          frontmatter {\n            title\n            draft\n          }\n        }\n      }\n    }\n  }\n"}});
//# sourceMappingURL=index-cc29660b.js.map