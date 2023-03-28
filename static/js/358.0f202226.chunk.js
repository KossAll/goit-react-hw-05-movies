"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[358,961],{1510:function(e,t,n){n.d(t,{Z:function(){return f}});var r=n(2791),a=n(1087),s=n(7689),i="MovieList_item__tDivI",u="MovieList_link__+cn-g",c="MovieList_list__yjDCC",o=n(184),l=function(e){var t=e.items,n=(0,s.TH)(),r=t.map((function(e){var t=e.id,r=e.title;return(0,o.jsx)("li",{className:i,children:(0,o.jsx)(a.rU,{className:u,to:"/movies/".concat(t),state:{from:n},children:r})},t)}));return(0,o.jsx)("ul",{className:c,children:r})},f=(0,r.memo)(l);l.defaultProps={items:[]}},1358:function(e,t,n){n.r(t),n.d(t,{default:function(){return k}});var r=n(5861),a=n(9439),s=n(7757),i=n.n(s),u=n(1087),c=n(2791),o=n(7596),l=(n(5462),n(6734)),f=n(7771),h=n(71),p=n(9983),d="SearchBar_input__03utj",v="SearchBar_btn__NF-XN",m="SearchBar_form__8vdns",_=n(184),x=function(e){var t=e.onSubmit,n=(0,c.useState)(""),r=(0,a.Z)(n,2),s=r[0],i=r[1];return(0,_.jsxs)("form",{onSubmit:function(e){e.preventDefault(),""!==s?(t({search:s}),i("")):o.Am.info("Enter a search term.")},className:m,children:[(0,_.jsx)("input",{className:d,value:s,onChange:function(e){var t=e.target.value;i(t.trim())},name:"search",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search movies"}),(0,_.jsx)("button",{type:"submit",className:v,children:(0,_.jsx)(p.Pd.Provider,{value:{style:{width:"20px",height:"20px",fill:"#3498db"}},children:(0,_.jsx)(h.eaK,{})})})]})},g=(0,c.memo)(x),b=n(961),j=n(1510),y=n(9353),N="Movies_title__MDLXB",k=function(){var e=(0,c.useState)([]),t=(0,a.Z)(e,2),n=t[0],s=t[1],h=(0,c.useState)(!1),p=(0,a.Z)(h,2),d=p[0],v=p[1],m=(0,u.lr)(),x=(0,a.Z)(m,2),k=x[0],w=x[1],Z=k.get("search"),C=k.get("page");(0,c.useEffect)((function(){if(""!==Z&&null!==Z){var e=function(){var e=(0,r.Z)(i().mark((function e(){var t,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,v(!0),e.next=4,(0,l.NV)(C,Z);case 4:t=e.sent,s(t.results),t.results.length||o.Am.info("Sorry, no results were found for your search("),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),n=e.t0.response,o.Am.error(n.data.message);case 13:return e.prev=13,v(!1),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[0,9,13,16]])})));return function(){return e.apply(this,arguments)}}();e()}}),[C,Z]);var S=(0,c.useCallback)((function(e){var t=e.search;w({search:t,page:1}),s([])}),[w]),P=(0,c.useCallback)((function(){C>0&&w({search:Z,page:Number(C)+1})}),[Z,C,w]),L=(0,c.useCallback)((function(){w({search:Z,page:Number(C)-1})}),[Z,C,w]);return(0,_.jsxs)(f.Z,{children:[(0,_.jsx)(g,{onSubmit:S}),(0,_.jsx)("h1",{className:N,children:n.length>0?"Search results: ".concat(Z):"Please start searching"}),d&&(0,_.jsx)(b.default,{}),n.length>0&&!d&&(0,_.jsx)(j.Z,{items:n}),n.length>0&&!d&&(0,_.jsx)(y.Z,{page:C,nextPage:P,previousPage:L})]})}},9353:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(8820),a=n(9983),s="button_button__KtMeR",i="button_btnBox__KIQ+i",u="button_text__gFpCL",c=n(184),o=function(e){var t=e.page,n=e.previousPage,o=e.nextPage;return(0,c.jsxs)("div",{className:i,children:[t>1&&(0,c.jsx)("button",{className:s,type:"button",onClick:n,children:(0,c.jsx)(a.Pd.Provider,{value:{style:{width:"20px",height:"20px",fill:"#3498db"}},children:(0,c.jsx)(r.kyg,{})})}),(0,c.jsx)("p",{className:u,children:t}),(0,c.jsx)("button",{className:s,type:"button",onClick:o,children:(0,c.jsx)(a.Pd.Provider,{value:{style:{width:"20px",height:"20px",fill:"#3498db"}},children:(0,c.jsx)(r.mGl,{})})})]})}},961:function(e,t,n){n.r(t),n.d(t,{default:function(){return i}});var r=n(4691),a="loader_box__6R4dw",s=n(184),i=function(){return(0,s.jsx)("div",{className:a,children:(0,s.jsx)(r.s5,{strokeColor:"#3498db",strokeWidth:"5",animationDuration:"0.75",width:"96",visible:!0})})}},7771:function(e,t,n){n.d(t,{Z:function(){return s}});var r="section_section__QWjNu",a=n(184);var s=function(e){var t=e.children;return(0,a.jsx)("section",{className:r,children:t})}},6734:function(e,t,n){n.d(t,{NV:function(){return f},Y5:function(){return l},_p:function(){return u},ap:function(){return o}});var r=n(5861),a=n(7757),s=n.n(a),i=n(1912),u="https://image.tmdb.org/t/p/w500",c=i.Z.create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"ca0d78fc8a47137eba1f3be4e5ed856b",language:"en-US"}}),o=function(){var e=(0,r.Z)(s().mark((function e(){var t,n,r,a=arguments;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:1,e.next=3,c.get("trending/movie/day",{params:{page:t}});case 3:return n=e.sent,r=n.data,e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(s().mark((function e(t,n){var r,a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("movie/".concat(t).concat(n));case 2:return r=e.sent,a=r.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(s().mark((function e(){var t,n,r,a,i=arguments;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=i.length>0&&void 0!==i[0]?i[0]:1,n=i.length>1?i[1]:void 0,e.next=4,c.get("search/movie",{params:{page:t,query:n,sort_by:"popularity.desc"}});case 4:return r=e.sent,a=r.data,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=358.0f202226.chunk.js.map