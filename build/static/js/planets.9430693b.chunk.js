webpackJsonp([2],{29:function(e,t,n){"use strict";function r(e){return{type:l.RECIEVE_PLANET_LIST,data:e}}function o(e){return{type:l.FILTERED_PLANET_LIST,data:e}}function a(e){return{type:l.MAX_LIMIT_REACHED,data:e}}function i(e){return function(t){return new Promise(function(t,n){var r=new XMLHttpRequest;r.open(e.method||"GET",e.url),r.onload=function(){200===r.status?t(r.response):n(Error(r.statusText))},r.onerror=function(){n(Error("Network Error"))},r.send()}).then(function(e){var n=JSON.parse(e).results;t(r(u(n,0,n.length-1)))})}}function u(e,t,n){for(var r,o=t,a=n,i=(t+n)/2,p=parseInt("unknown"!==e[i.toFixed()].population?e[i.toFixed()].population:l.MIN_BASE_VALUE);o<=a;){for(;parseInt("unknown"!==e[o].population?e[o].population:l.MIN_BASE_VALUE)<p;)o++;for(;parseInt("unknown"!==e[a].population?e[a].population:l.MIN_BASE_VALUE)>p;)a--;o<=a&&(r={name:e[o].name,population:e[o].population},e[o]={name:e[a].name,population:e[a].population},e[a]=r,o++,a--)}return t<a&&u(e,t,a),o<n&&u(e,o,n),e}Object.defineProperty(t,"__esModule",{value:!0}),t.recievePlanetList=r,t.filteredPlanetList=o,t.maxLimitReached=a,t.getPlanetList=i;var l=n(12)},131:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(4),p=r(l),s=n(132),c=r(s),f=n(133),d=r(f),h=n(12),y=function(e){function t(){return o(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),u(t,[{key:"render",value:function(){var e=this.props.planetList,t=this.props.maxLimitReached;if(e.length)var n="unknown"!==e[e.length-1].population?e[e.length-1].population:h.MIN_BASE_VALUE,r=38/(n-h.MIN_BASE_VALUE);return p.default.createElement("div",null,p.default.createElement(d.default,{placeholder:"Search Planets",searchHandler:this.props.searchHandler}),t?p.default.createElement("div",null,"Only 15 times allowed in a minute. Please try after few seconds"):p.default.createElement(c.default,null,this.props.planetList.map(function(e,t){var n=12+r*(parseInt("unknown"!==e.population?e.population:h.MIN_BASE_VALUE)-h.MIN_BASE_VALUE);return p.default.createElement("div",{key:t+Math.random(),style:{fontSize:n+"px"}},e.name)})))}}]),t}(p.default.Component);y.propTypes={planetList:p.default.PropTypes.array,searchHandler:p.default.PropTypes.func,maxLimitReached:p.default.PropTypes.bool},t.default=y},132:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(4),p=r(l),s=function(e){function t(){return o(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),u(t,[{key:"render",value:function(){return p.default.createElement("div",null,this.props.children)}}]),t}(p.default.Component);t.default=s},133:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(4),p=r(l),s=function(e){function t(e){o(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={inputValue:"",currTime:null,searchCount:0},n}return i(t,e),u(t,[{key:"_handleChange",value:function(e){var t=e.target.value.trim(),n=this.state.currTime||(new Date).getTime(),r=this.state.searchCount;this.setState({inputValue:t,currTime:n,searchCount:++r}),this.props.searchHandler(t,n,r)}},{key:"render",value:function(){return p.default.createElement("div",{className:"searchInput"},p.default.createElement("input",{type:"text",onChange:this._handleChange.bind(this),placeholder:"Search Planets",value:this.state.inputValue}))}}]),t}(p.default.Component);s.propTypes={searchHandler:p.default.PropTypes.func},t.default=s},134:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function u(e){return{planetList:e.planetReducer.planetList||{},filteredPlanetList:e.planetReducer.filteredPlanetList,filterApplied:e.planetReducer.filterApplied,userInformation:e.userListReducer.userInformation,maxLimitReachedFlag:e.planetReducer.maxLimitReached}}function l(e){return{getFilteredPlanetList:function(t){e((0,y.filteredPlanetList)(t))},recievePlanetList:function(t){e((0,y.recievePlanetList)(t))},maxLimitReached:function(t){e((0,y.maxLimitReached)(t))}}}Object.defineProperty(t,"__esModule",{value:!0});var p=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(4),c=r(s),f=n(35),d=n(131),h=r(d),y=n(29),_=n(12),m=function(e){function t(){return o(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),p(t,[{key:"_filterData",value:function(e,t){return t.filter(function(t){return t.name.toLowerCase().indexOf(e.toLowerCase())>-1})}},{key:"_searchHandler",value:function(e,t,n){var r,o=_.ELAPSED_TIME,a=!((new Date).getTime()-t<o),i=this.props.userInformation.isSuperUser;!i&&!a&&n>_.MAX_SEARCH_COUNT?this.props.maxLimitReached(!0):(e?(r=this._filterData(e,this.props.planetList),this.props.getFilteredPlanetList(r)):(r=this.props.planetList,this.props.recievePlanetList(r)),this.props.maxLimitReached(!1))}},{key:"render",value:function(){var e=this.props.filterApplied?this.props.filteredPlanetList:this.props.planetList,t=this.props.maxLimitReachedFlag;return c.default.createElement("div",null,c.default.createElement("div",{className:"planets-wrapper"},c.default.createElement(h.default,{planetList:e,maxLimitReached:t,searchHandler:this._searchHandler.bind(this)})))}}]),t}(c.default.Component);t.default=(0,f.connect)(u,l)(m)}});
//# sourceMappingURL=planets.9430693b.chunk.js.map