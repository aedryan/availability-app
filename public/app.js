!function(){"use strict";var e="undefined"==typeof global?self:global;if("function"!=typeof e.require){var t={},r={},n={},a={}.hasOwnProperty,o=/^\.\.?(\/|$)/,u=function(e,t){for(var r,n=[],a=(o.test(t)?e+"/"+t:t).split("/"),u=0,l=a.length;u<l;u++)r=a[u],".."===r?n.pop():"."!==r&&""!==r&&n.push(r);return n.join("/")},l=function(e){return e.split("/").slice(0,-1).join("/")},i=function(t){return function(r){var n=u(l(t),r);return e.require(n,t)}},c=function(e,t){var n=y&&y.createHot(e),a={id:e,exports:{},hot:n};return r[e]=a,t(a.exports,i(e),a),a.exports},s=function(e){return n[e]?s(n[e]):e},f=function(e,t){return s(u(l(e),t))},d=function(e,n){null==n&&(n="/");var o=s(e);if(a.call(r,o))return r[o].exports;if(a.call(t,o))return c(o,t[o]);throw new Error("Cannot find module '"+e+"' from '"+n+"'")};d.alias=function(e,t){n[t]=e};var p=/\.[^.\/]+$/,m=/\/index(\.[^\/]+)?$/,h=function(e){if(p.test(e)){var t=e.replace(p,"");a.call(n,t)&&n[t].replace(p,"")!==t+"/index"||(n[t]=e)}if(m.test(e)){var r=e.replace(m,"");a.call(n,r)||(n[r]=e)}};d.register=d.define=function(e,n){if(e&&"object"==typeof e)for(var o in e)a.call(e,o)&&d.register(o,e[o]);else t[e]=n,delete r[e],h(e)},d.list=function(){var e=[];for(var r in t)a.call(t,r)&&e.push(r);return e};var y=e._hmr&&new e._hmr(f,d,t,r);d._cache=r,d.hmr=y&&y.wrap,d.brunch=!0,e.require=d}}(),function(){var e;"undefined"==typeof window?this:window;require.register("components/404/index.js",function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(e,"__esModule",{value:!0});var l=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),i=t("react"),c=n(i),s=function(e){function t(){return a(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return u(t,e),l(t,[{key:"render",value:function(){return c["default"].createElement("div",null,"404 Not Found")}}]),t}(c["default"].Component);e["default"]=s}),require.register("components/header-nav/index.js",function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(e,"__esModule",{value:!0});var l=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),i=t("react"),c=n(i),s=t("util"),f=n(s),d=function(e){function t(e){a(this,t);var r=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r.state={username:e.username},r}return u(t,e),l(t,[{key:"getLoginElem",value:function(){if(this.props.loggedIn){var e=f["default"].weekOfYear(),t=(new Date).getFullYear(),r=t+"-"+e,n=t+"-"+Number(e+1);return c["default"].createElement("div",{className:"dropdown"},c["default"].createElement("a",{className:"dropdown-toggle",type:"button",id:"dropdownMenu1","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"true"},c["default"].createElement("span",null,this.state.username),c["default"].createElement("span",{className:"caret"})),c["default"].createElement("ul",{className:"dropdown-menu","aria-labelledby":"dropdownMenu1"},c["default"].createElement("li",null,c["default"].createElement("a",{href:"/home"},"Home")),c["default"].createElement("li",{role:"separator",className:"divider"}),c["default"].createElement("li",null,c["default"].createElement("a",{href:"/week/"+r},"This Week")),c["default"].createElement("li",null,c["default"].createElement("a",{href:"/week/"+n},"Next Week")),c["default"].createElement("li",{role:"separator",className:"divider"}),c["default"].createElement("li",null,c["default"].createElement("a",{href:"/auth/logout"},"Log Out"))))}return c["default"].createElement("a",{href:"/auth/google"},"Log in with Google")}},{key:"render",value:function(){return c["default"].createElement("div",{id:"header-nav"},c["default"].createElement("a",{href:"/home"},"When Can You Game?"),this.getLoginElem())}}]),t}(c["default"].Component);e["default"]=d}),require.register("components/home/calendar.js",function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(e,"__esModule",{value:!0});var l=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),i=t("react"),c=n(i),s=t("util"),f=n(s),d=new Date(2017,0,1),p=function(e){function t(e){return a(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return u(t,e),l(t,[{key:"weeks",value:function r(e){for(var r=[],t=f["default"].weekOfYear(),n="fresh",a="",o="",u=1;u<=52;u++)a="",u===t?(o="This Week",a+="this-week"):o=u+1===t?"Last Week":u-1===t?"Next Week":"Week "+u,u>=t&&e===(new Date).getFullYear()&&(a+=a.length>0?" "+n:n),r.push(c["default"].createElement("a",{href:"/week/"+e+"-"+u,key:"Week-"+u,className:a},o));return c["default"].createElement("div",{className:"weeks container-fluid"},r)}},{key:"year",value:function n(){for(var e=[],t=(new Date).getFullYear(),r=d.getFullYear(),a=t-r,n=void 0,o=a;o>=0;o--)n=r+o,e.push(c["default"].createElement("div",{key:n},c["default"].createElement("h2",null,n),this.weeks(n)));return c["default"].createElement("div",{className:"year"},e)}},{key:"weekButtons",value:function(){var e=f["default"].weekOfYear(),t=(new Date).getFullYear(),r=t+"-"+e,n=t+"-"+Number(e+1);return c["default"].createElement("div",{className:"header-weeks"},c["default"].createElement("a",{className:"btn btn-primary",href:"/week/"+r},"This Week"),c["default"].createElement("a",{className:"btn btn-primary",href:"/week/"+n},"Next Week"))}},{key:"render",value:function(){return c["default"].createElement("div",{className:"calendar"},c["default"].createElement("div",{className:"well well-lg"},c["default"].createElement("h2",null,this.props.loggedIn?"When Can You Game?":"Logging in with Google is easy!"),c["default"].createElement("p",null,this.props.loggedIn?"Select a week to let us know when you're available":"Log In to edit you're availability"),this.props.loggedIn?this.weekButtons():c["default"].createElement("a",{className:"btn btn-primary",href:"/auth/google"},"Log In")),this.year())}}]),t}(c["default"].Component);e["default"]=p}),require.register("components/home/index.js",function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(e,"__esModule",{value:!0});var l=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),i=t("react"),c=n(i),s=t("./calendar"),f=n(s),d=function(e){function t(e){return a(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return u(t,e),l(t,[{key:"render",value:function(){return c["default"].createElement("div",{id:"home"},c["default"].createElement(f["default"],{loggedIn:this.props.loggedIn}))}}]),t}(c["default"].Component);e["default"]=d}),require.register("components/week/index.js",function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(e,"__esModule",{value:!0});var l=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),i=t("react"),c=n(i),s=t("util"),f=n(s),d=t("socket.io-client"),p=n(d),m=(0,p["default"])(),h=function(e){function t(e){a(this,t);var r=window.location.href.slice(window.location.href.lastIndexOf("/")+1).split("-"),n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={year:Number(r[0]),week:Number(r[1]),weekData:null,danger:!1},n.getWeekData(),n.changeURL=n.changeURL.bind(n),n.submitForm=n.submitForm.bind(n),m.on("receive player",function(e){n.setState(function(){return{weekData:e}})}),m.on("receive doc",function(e){n.setState(function(){return{weekData:e}})}),n}return u(t,e),l(t,[{key:"getWeekData",value:function(){var e=this;$.get("/db/week/"+this.state.week,function(t){e.setState(function(){return{weekData:t}})})}},{key:"clickDay",value:function(e,t){var r=this;this.props.loggedIn?(t=t.toLowerCase(),$.post("/db/update/"+this.state.week+"/player",{day:t},function(e){m.emit("player event",e),r.setState(function(){return{weekData:e}})})):this.setState(function(){return{danger:!0}})}},{key:"submitForm",value:function(e){var t=this,r=this.state.weekData.doc;e.preventDefault(),$.post("/db/update/"+this.state.week+"/doc",{doc:r},function(e){m.emit("doc event",e),t.setState(function(){return{weekData:e}})})}},{key:"changeURL",value:function(e){var t=e.target.value;this.setState(function(e){var r=e.weekData;return r.doc=t,{weekData:r}})}},{key:"days",value:function r(){var e=this,t=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],r=t.map(function(t){var r=[],n="day clearfix";return e.state.weekData&&(r=e.state.weekData[t.toLowerCase()].map(function(e){return c["default"].createElement(y,{player:e,key:e.id})})),n+=e.props.loggedIn?" clickable":"",c["default"].createElement("div",{className:n,key:t,onClick:function(r){return e.clickDay(r,t)}},c["default"].createElement("div",{className:"day-title"},t),c["default"].createElement("div",{className:"players"},r))});return c["default"].createElement("div",{className:"days"},r)}},{key:"getWeekName",value:function(){var e="Week "+this.state.week+" of "+this.state.year;if((new Date).getFullYear()===this.state.year){var t=this.state.week,r=f["default"].weekOfYear();return t===r?"This Week":t+1===r?"Last Week":t-1===r?"Next Week":e}return e}},{key:"getForm",value:function(){var e=this.state.weekData&&this.state.weekData.doc?this.state.weekData.doc:"",t=void 0;return t=this.props.loggedIn?c["default"].createElement("input",{onChange:this.changeURL,type:"text",className:"form-control",value:e,placeholder:"Enter URL",id:"google-doc"}):c["default"].createElement("div",null,c["default"].createElement("a",{target:"_blank",href:e},e)),c["default"].createElement("form",{onSubmit:this.submitForm},c["default"].createElement("div",{className:"form-group"},c["default"].createElement("label",{htmlFor:"google-doc"},c["default"].createElement("span",null,"Google Doc URL"),this.props.loggedIn?c["default"].createElement("button",{className:"btn btn-primary",type:"submit"},"Save"):""),t,this.props.loggedIn?c["default"].createElement("a",{className:"btn"+(e?"":" disabled"),href:e,target:"_blank"},"Open"):""))}},{key:"render",value:function(){var e=this.getWeekName(),t=this.state.danger?"alert-danger":"alert-warning";return c["default"].createElement("div",{id:"week"},c["default"].createElement("h2",null,e),c["default"].createElement("h3",{className:this.props.loggedIn?"":"alert "+t},this.props.loggedIn?'Select the days that work for you! Select again to toggle "maybe" or remove yourself.':"Log in to mark your availability"),this.days(),c["default"].createElement("h6",null,"Hover over an image to see their name."),this.props.loggedIn||this.state.weekData&&this.state.weekData.doc?this.getForm():"")}}]),t}(c["default"].Component);e["default"]=h;var y=function(e){function t(e){return a(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return u(t,e),l(t,[{key:"render",value:function(){var e=this.props.player.maybe?" maybe":"";return c["default"].createElement("div",{className:"player-container"+e,key:this.props.player.id},c["default"].createElement("img",{title:this.props.player.name,src:this.props.player.photo}))}}]),t}(c["default"].Component)}),require.register("index.js",function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}var a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=t("react-dom"),u=n(o),l=t("react"),i=n(l),c=t("history/createBrowserHistory"),s=n(c),f=t("routes"),d=n(f),p=t("components/header-nav"),m=n(p),h=(0,s["default"])();document.addEventListener("DOMContentLoaded",function(){$.get("/db/user",function(e){var t="object"===("undefined"==typeof e?"undefined":a(e)),r=e?e.google.displayName:"",n=e?e.google.id:"";u["default"].render(i["default"].createElement("div",{id:"app"},i["default"].createElement(m["default"],{loggedIn:t,username:r}),i["default"].createElement(d["default"],{history:h,loggedIn:t,userID:n})),document.querySelector("#root"))})})}),require.register("routes.js",function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(e,"__esModule",{value:!0});var a=t("react"),o=n(a),u=t("react-router-dom"),l=t("components/home"),i=n(l),c=t("components/week"),s=n(c),f=t("components/404"),d=n(f),p=function(e){return o["default"].createElement(u.BrowserRouter,e,o["default"].createElement("div",{className:"main-content"},o["default"].createElement(u.Switch,null,o["default"].createElement(u.Route,{exact:!0,path:"/",render:function(){return o["default"].createElement(u.Redirect,{to:"/home"})}}),o["default"].createElement(u.Route,{exact:!0,path:"/home",render:function(){return o["default"].createElement(i["default"],{loggedIn:e.loggedIn})}}),o["default"].createElement(u.Route,{path:"/week",render:function(){return o["default"].createElement(s["default"],{loggedIn:e.loggedIn,userID:e.userID})}}),o["default"].createElement(u.Route,{path:"*",component:d["default"]}))))};e["default"]=p}),require.register("util.js",function(e,t,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={weekOfYear:function(){var e=new Date,t=e.getFullYear(),r=new Date(t,0,0),n=e-r,a=864e5,o=Math.floor(n/a),u=Math.ceil(o/7);return u}};e["default"]=n}),require.alias("process/browser.js","process"),e=require("process"),require.register("___globals___",function(e,t,r){window.jQuery=t("jquery"),window.$=t("jquery"),window.bootstrap=t("bootstrap")})}(),require("___globals___");