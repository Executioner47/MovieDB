(this.webpackJsonpreminder=this.webpackJsonpreminder||[]).push([[0],{20:function(e,a,t){e.exports=t(27)},25:function(e,a,t){},27:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(19),l=t.n(r),s=(t(25),t(10)),i=t(2),m=t(4),o=t(3),u=t.n(o),d=t(5),E=function(e){var a=Object(n.useState)(!0),t=Object(m.a)(a,2),c=t[0],r=t[1],l=Object(n.useState)([]),s=Object(m.a)(l,2),i=s[0],o=s[1],E=function(){var e=Object(d.a)(u.a.mark((function e(a){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r(!0),e.prev=1,e.next=4,fetch(a);case 4:return t=e.sent,e.next=7,t.json();case 7:"True"===(n=e.sent).Response&&o(n.Search||n),r(!1),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(1),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(a){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){E("".concat("https://www.omdbapi.com/?apikey=b0337b7").concat(e))}),[e]),{isLoading:c,data:i}},v=c.a.createContext(),p=function(e){var a=e.children,t=Object(n.useState)(!1),r=Object(m.a)(t,2),l=r[0],s=r[1],i=Object(n.useState)("batman"),o=Object(m.a)(i,2),u=o[0],d=o[1],p=E("&s="+u).data;return c.a.createElement(v.Provider,{value:{data:p,isLoading:l,searchedWord:u,setIsLoading:s,setSearchedWord:d}},a)},f=function(){return Object(n.useContext)(v)},h=function(){var e=f(),a=e.searchedWord,t=e.setSearchedWord;return c.a.createElement("form",{className:"search-form"},c.a.createElement("h2",null,"search movies"),c.a.createElement("input",{type:"text",className:"form-input",value:a,onChange:function(e){t(e.target.value)}}))},g=function(){var e=f(),a=e.data,t=e.isLoading;return console.log(a),t?c.a.createElement("div",{className:"loading"}):c.a.createElement("section",{className:"movies"},a.map((function(e){return c.a.createElement(s.b,{className:"movie",to:"movies/".concat(e.imdbID),key:e.imdbID},c.a.createElement("article",null,c.a.createElement("img",{src:"N/A"===e.Poster?"https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png":e.Poster,alt:e.Title}),c.a.createElement("div",{className:"movie-info"},c.a.createElement("h4",{className:"title"},e.Title),c.a.createElement("p",null,e.Year))))})))},N=function(){return c.a.createElement("main",null,c.a.createElement(h,null),c.a.createElement(g,null))},b=function(){var e=Object(i.n)().id,a=E("&i="+e),t=a.isLoading,n=a.data,r=n.Title,l=n.Poster,m=n.Plot,o=n.Year,u=n.Awards,d=n.Director,v=n.Genre,p=n.Actors,f=n.Runtime,h=n.imdbRating;return console.log(u),console.log(n),t?c.a.createElement("div",{className:"loading"}):c.a.createElement("section",{className:"single-movie"},c.a.createElement("img",{src:l,alt:""}),c.a.createElement("div",{className:"single-movie-info"},c.a.createElement("div",{className:"header"},c.a.createElement("h2",null,r),c.a.createElement("div",{className:"rating"},c.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",className:"ipc-icon ipc-icon--star sc-7ab21ed2-4 hLFdut",id:"iconContext-star",viewBox:"0 0 24 24",fill:"currentColor",role:"presentation"},c.a.createElement("path",{d:"M12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72 3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z"})),c.a.createElement("span",null,h),"/10")),c.a.createElement("div",{className:"runtime"},f,"  "),c.a.createElement("p",null,m),c.a.createElement("div",{className:"details"},c.a.createElement("div",{className:"year"},c.a.createElement("span",{className:"title"},"Year: "),o),c.a.createElement("div",{className:"genre"},c.a.createElement("span",{className:"title"},"Genre: "),v),c.a.createElement("div",{className:"actors"},c.a.createElement("span",{className:"title"},"Actors: "),p),c.a.createElement("div",{className:"director"},c.a.createElement("span",{className:"title"},"Director: "),d),c.a.createElement("div",{className:"awards"},c.a.createElement("span",{className:"title"},"Awards: "),u)),c.a.createElement(s.b,{className:"btn",to:"/"},"Back To Movies")))};var w=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(s.a,null,c.a.createElement(i.c,null,c.a.createElement(i.a,{exact:!0,path:"/",element:c.a.createElement(N,null)}),c.a.createElement(i.a,{path:"movies/:id",element:c.a.createElement(b,null)}))))};l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(p,null,c.a.createElement(w,null))),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.69d3301b.chunk.js.map