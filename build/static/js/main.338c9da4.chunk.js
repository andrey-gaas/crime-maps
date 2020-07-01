(this["webpackJsonpcrime-maps"]=this["webpackJsonpcrime-maps"]||[]).push([[0],{100:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(10),c=a.n(o),i=a(30),s=a(15),l=a(86),m=a(144),u=a(27),p=a(143),d=a(29),g=Object(n.createContext)(),f=function(e){return{type:"SET_LOCATION",data:e}},b=function(e){return{type:"SET_LOCATION_ERROR",error:e}},E=function(e,t){return{type:"CHANGE_COORDINATES",lat:e,lng:t}},y=function(e){return{type:"SET_ZOOM",zoom:e}},h=function(){return{type:"INCREMENT_ZOOM"}},v=function(){return{type:"DECREMENT_ZOOM"}},O=function(e){return{type:"CHANGE_NEWS_TYPES",typeNews:e}},C=a(138),N=a(140),j=a(101),x=a(139),k=a(141),w=a(142),T=a(145),S=a(136),I=a(137),_=a(17),z=a(12),R=a(124),Z=a(64),L=a.n(Z),A=a(65),D=a.n(A),M={novosibirsk:{backgroundImage:"url(".concat(L.a,")"),backgroundSize:"cover",backgroundRepeat:"no-repeat"},krasnoyarsk:{backgroundImage:"url(".concat(D.a,")"),backgroundSize:"cover",backgroundRepeat:"no-repeat"}},P=Object(R.a)((function(e){return Object(_.a)({root:{display:"none"}},e.breakpoints.up("md"),Object(z.a)({},M,{root:{display:"block",width:330,flexShrink:0},rootPaper:{width:330},subscriptionsContainer:{marginTop:e.spacing(1)},subscriptionsLink:{display:"flex",alignItems:"center",marginLeft:e.spacing(2),paddingTop:e.spacing(1),paddingBottom:e.spacing(1),fontSize:e.typography.h6.fontSize,textDecoration:"none",color:e.palette.text.primary},subscriptionsIcon:{marginRight:e.spacing(1),fontSize:e.typography.h4.fontSize,color:"#f64b11"}}))})),B=a(146),G=a(35),H=a.n(G),J=a(126),W=a(147),U=a(129),Y=a(130),F=Object(R.a)((function(e){return Object(_.a)({root:{display:"flex",alignItems:"center",overflowX:"hidden",margin:e.spacing(1)},cityName:{marginLeft:e.spacing(1),color:e.palette.text},emblemContainer:{display:"none"},grow:{flexGrow:1},changeCityButton:{color:e.palette.text}},e.breakpoints.up("md"),{root:{margin:e.spacing(3)},cityName:{color:"#fff"},emblemContainer:{display:"flex",justifyContent:"center",alignItems:"center",width:40,height:40,background:"#fff",borderRadius:"50%"},emblem:{height:30},changeCityButton:{color:"#fff"}})})),X=a(69),q=a.n(X),K=a(70),Q=a.n(K),V={novosibirsk:q.a,krasnoyarsk:Q.a};var $=Object(s.c)((function(e){return{loading:e.cities.loading}}))((function(e){var t=e.titleCity,a=e.city,n=F();return r.a.createElement("div",{className:n.root},r.a.createElement("div",{className:n.emblemContainer},r.a.createElement("img",{className:n.emblem,src:V[t],alt:""})),r.a.createElement(J.a,{variant:"h6",className:n.cityName},a),r.a.createElement("div",{className:n.grow}),r.a.createElement(W.a,{title:"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u0433\u043e\u0440\u043e\u0434"},r.a.createElement(U.a,null,r.a.createElement(Y.a,{className:n.changeCityButton}))))})),ee=Object(R.a)((function(e){return Object(z.a)({},M,{header:{position:"relative",height:200},blackout:{paddingTop:1,height:"100%",backgroundColor:"rgba(0, 0, 0, .5)"},searchContainer:{display:"flex",justifyContent:"space-between",margin:e.spacing(3),padding:"5px 10px",backgroundColor:"#fff",borderRadius:2*e.shape.borderRadius,border:"1px solid #ccc"},search:{width:"86%"}})})),te=a(72),ae=a.n(te);var ne=Object(s.c)((function(e){var t=e.cities;return{selectedCityId:t.selectedCityId,citiesList:t.data}}))((function(e){var t=e.selectedCityId,a=e.citiesList,n=ee(),o=a.find((function(e){return e.id===t}));return r.a.createElement("div",{className:H()(n.root,n[o.title])},r.a.createElement("div",{className:n.blackout},r.a.createElement("div",{className:n.searchContainer},r.a.createElement("img",{src:ae.a,alt:"",height:"35px"}),r.a.createElement(B.a,{className:n.search,placeholder:"\u041f\u043e\u0438\u0441\u043a \u043f\u043e Crime Maps..."})),r.a.createElement($,{titleCity:o.title,city:o.name})))})),re=a(73),oe=a.n(re),ce=a(74),ie=a.n(ce),se=a(75),le=a.n(se),me=a(76),ue=a.n(me),pe=a(77),de=a.n(pe),ge=a(78),fe=a.n(ge),be=a(79),Ee=a.n(be),ye=a(80),he=a.n(ye),ve=a(81),Oe=a.n(ve),Ce=a(82),Ne=a.n(Ce),je=a(83),xe=a.n(je),ke=a(84),we=a.n(ke),Te=[{type:9,name:"\u0410\u043a\u0446\u0438\u044f \u043f\u0440\u043e\u0442\u0435\u0441\u0442\u0430"},{type:7,name:"\u0414\u0422\u041f"},{type:3,name:"\u0416\u0438\u0432\u043e\u0442\u043d\u044b\u0435"},{type:10,name:"\u041a\u0440\u0430\u0436\u0430"},{type:4,name:"\u041d\u0430\u0441\u0438\u043b\u0438\u0435"},{type:2,name:"\u041d\u0435\u0441\u0447\u0430\u0441\u0442\u043d\u044b\u0439 \u0441\u043b\u0443\u0447\u0430\u0439"},{type:0,name:"\u0423\u0433\u043e\u043d"},{type:1,name:"\u041f\u043e\u0436\u0430\u0440"},{type:5,name:"\u041f\u043b\u043e\u0445\u0438\u0435 \u0443\u0441\u043b\u0443\u0433\u0438"},{type:8,name:"\u041f\u0440\u043e\u043f\u0430\u043b \u0447\u0435\u043b\u043e\u0432\u0435\u043a"},{type:6,name:"\u0421\u043c\u0435\u0440\u0442\u044c"},{type:11,name:"\u0421\u0442\u0438\u0445\u0438\u0439\u043d\u043e\u0435 \u0431\u0435\u0434\u0441\u0442\u0432\u0438\u0435"}];var Se=function(e){switch(e){case 0:return oe.a;case 1:return ie.a;case 2:return le.a;case 3:return ue.a;case 4:return de.a;case 5:return fe.a;case 6:return Ee.a;case 7:return he.a;case 8:return Oe.a;case 9:return Ne.a;case 10:return xe.a;case 11:return we.a;default:return!1}},Ie=Object(R.a)((function(e){return{root:{display:"flex",flexWrap:"wrap",margin:e.spacing(1)},button:{display:"flex",flexDirection:"column",alignItems:"center",width:"24%",border:"none",background:"none",outline:"none",cursor:"pointer",transition:".3s","&:hover":{opacity:.7}},imageContainer:{padding:1.5*e.spacing(1),width:"100%",background:"#000",borderRadius:"50%"},label:{marginTop:e.spacing(1),fontSize:12},active:{background:"#f64b11"}}}));var _e=Object(s.c)((function(e){return{types:e.map.showTypes}}))((function(e){var t=e.types,a=Ie(),o=Object(n.useContext)(g).changeNewsTypes;return r.a.createElement("div",{className:a.root},Te.map((function(e){var n,c=e.type,i=e.name;return r.a.createElement("button",{className:a.button,key:i,onClick:function(){return o(c)}},r.a.createElement("div",{className:H()(a.imageContainer,Object(_.a)({},a.active,(n=c,!!t.find((function(e){return e.type===n})))))},r.a.createElement("img",{alt:i,src:Se(c),width:"100%"})),r.a.createElement("span",{className:a.label},i))})))})),ze=a(131),Re=a(132),Ze=a(133),Le=a(134),Ae=a(135),De=Object(R.a)((function(e){return{root:{width:"100%",position:"absolute",bottom:0},buttonsContainer:{display:"flex",justifyContent:"space-between"},button:{minWidth:0},active:{color:"#f64b11"}}})),Me=[{path:"/cabinet",icon:r.a.createElement(ze.a,null)},{path:"/map/tape",icon:r.a.createElement(Re.a,null)},{path:"/map",icon:r.a.createElement(Ze.a,null)},{path:"/map/recommendations",icon:r.a.createElement(Le.a,null)},{path:"/cabinet/gossip",icon:r.a.createElement(Ae.a,null)}];var Pe=function(e){var t=e.location,a=De();return r.a.createElement("div",{className:a.root},r.a.createElement(S.a,null),r.a.createElement("div",{className:a.buttonsContainer},Me.map((function(e,n){return r.a.createElement(i.b,{key:n,to:e.path},r.a.createElement(U.a,{className:H()(Object(_.a)({},a.active,t===e.path))},e.icon))}))))};var Be=function(e){var t=e.location,a=P();return r.a.createElement(T.a,{variant:"permanent",className:a.root,classes:{paper:a.rootPaper}},r.a.createElement(ne,null),r.a.createElement(_e,null),r.a.createElement("div",{className:a.subscriptionsContainer},r.a.createElement(S.a,null),r.a.createElement(i.b,{to:"/subscriptions",className:a.subscriptionsLink},r.a.createElement(I.a,{className:a.subscriptionsIcon})," \u041f\u043e\u0434\u043f\u0438\u0441\u043a\u0438"),r.a.createElement(S.a,null)),r.a.createElement(Pe,{location:t.pathname}))},Ge=Object(R.a)((function(e){return Object(_.a)({root:{display:"flex",height:"100%"},buttonUserPosition:{position:"absolute",bottom:e.spacing(1),right:e.spacing(1),zIndex:1e3},zoomButtonsContainer:{display:"flex",flexDirection:"column",position:"absolute",top:e.spacing(1),right:e.spacing(1),zIndex:1e3},buttonZoomOut:{marginTop:e.spacing(1)}},e.breakpoints.up("md"),{buttonUserPosition:{bottom:e.spacing(3),right:e.spacing(3)},zoomButtonsContainer:{top:e.spacing(3),right:e.spacing(3)},buttonZoomOut:{marginTop:e.spacing(1)}})}));var He=Object(s.c)((function(e){var t=e.map;return{geodata:t.geodata,zoom:t.zoom}}))((function(e){var t=e.geodata,a=e.zoom,o=e.location,c=Ge(),i=Object(n.useContext)(g),l=i.changeCoordinates,m=i.changeZoom,u=i.incrementZoom,p=i.decrementZoom;return r.a.createElement("div",{className:c.root},r.a.createElement(Be,{location:o}),r.a.createElement(C.a,{color:"primary",size:"large",className:c.buttonUserPosition,disabled:null===t,onClick:function(){return Object(s.b)((function(){l(t.coords.latitude,t.coords.longitude),m(16)}))}},r.a.createElement(x.a,null)),r.a.createElement("div",{className:c.zoomButtonsContainer},r.a.createElement(N.a,{orientation:"vertical"},r.a.createElement(j.a,{variant:"contained",onClick:function(){17!==a&&u()}},r.a.createElement(k.a,null)),r.a.createElement(j.a,{variant:"contained",onClick:function(){5!==a&&p()}},r.a.createElement(w.a,null)))))}));var Je,We,Ue=Object(s.c)(null,(function(e){return Object(u.a)({setLocation:f,setLocationError:b,changeCoordinates:E,changeZoom:y,incrementZoom:h,decrementZoom:v,changeNewsTypes:O},e)}))((function(e){var t=e.setLocation,a=e.setLocationError,n={changeCoordinates:e.changeCoordinates,changeZoom:e.changeZoom,incrementZoom:e.incrementZoom,decrementZoom:e.decrementZoom,changeNewsTypes:e.changeNewsTypes};return navigator.geolocation.getCurrentPosition(t,a),r.a.createElement(g.Provider,{value:n},r.a.createElement(p.a,null),r.a.createElement(d.c,null,r.a.createElement(d.a,{path:"/map",component:He})))})),Ye=a(58),Fe=+JSON.parse(localStorage.getItem("selectedCity")),Xe=JSON.parse(localStorage.getItem("citiesList"));if(Fe&&Xe){var qe=Xe.find((function(e){return e.id===Fe}));Je=qe.lat,We=qe.lng}else Je=55.0415,We=82.9346;var Ke={geodata:null,geodataError:!1,lat:Je,lng:We,zoom:13,showTypes:Object(Ye.a)(Te)},Qe={data:JSON.parse(localStorage.getItem("citiesList"))||[{_id:"5e8f0f4f8883b725cc275bad",id:1,title:"novosibirsk",name:"\u041d\u043e\u0432\u043e\u0441\u0438\u0431\u0438\u0440\u0441\u043a",lat:55.0415,lng:82.9346}],isSelectorOpen:!1,error:!1,loading:!0,selectedCityId:+localStorage.getItem("selectedCity")||1};var Ve=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Qe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD":return Object(z.a)({},e,{data:t.cities});case"MODAL":return Object(z.a)({},e,{isSelectorOpen:t.isOpen});case"ERROR":return Object(z.a)({},e,{error:t.error});case"LOADING":return Object(z.a)({},e,{loading:t.loading});case"CHANGE_SELECTED_CITY":return Object(z.a)({},e,{selectedCityId:t.id});default:return e}},$e=Object(u.b)({map:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ke,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_LOCATION":return Object(z.a)({},e,{geodata:t.data});case"SET_LOCATION_ERROR":return Object(z.a)({},e,{error:!0});case"CHANGE_COORDINATES":return Object(z.a)({},e,{lat:t.lat,lng:t.lng});case"SET_ZOOM":return Object(z.a)({},e,{zoom:t.zoom});case"INCREMENT_ZOOM":return Object(z.a)({},e,{zoom:e.zoom+1});case"DECREMENT_ZOOM":return Object(z.a)({},e,{zoom:e.zoom-1});case"CHANGE_NEWS_TYPES":var a=e.showTypes.find((function(e){return e.type===t.typeNews}));if(a)return Object(z.a)({},e,{showTypes:e.showTypes.filter((function(e){return e.type!==t.typeNews}))});var n=Te.find((function(e){return e.type===t.typeNews}));return Object(z.a)({},e,{showTypes:[].concat(Object(Ye.a)(e.showTypes),[n])});default:return e}},cities:Ve}),et=Object(u.c)($e);window.getState=et.getState;var tt=et,at=(a(99),Object(l.a)({palette:{primary:{main:"#f64b11"},secondary:{main:"#2196F3"}}}));c.a.render(r.a.createElement(i.a,null,r.a.createElement(s.a,{store:tt},r.a.createElement(m.a,{theme:at},r.a.createElement(Ue,null)))),document.getElementById("root"))},64:function(e,t,a){e.exports=a.p+"static/media/novosibirsk.3223fede.jpg"},65:function(e,t,a){e.exports=a.p+"static/media/krasnoyarsk.aaf9cd5c.jpg"},69:function(e,t,a){e.exports=a.p+"static/media/novosibirsk.f2328259.svg"},70:function(e,t,a){e.exports=a.p+"static/media/krasnoyarsk.0bba5569.svg"},72:function(e,t,a){e.exports=a.p+"static/media/logo_dark.6ea33164.svg"},73:function(e,t,a){e.exports=a.p+"static/media/car_theft.06303f44.svg"},74:function(e,t,a){e.exports=a.p+"static/media/fire.547e02c8.svg"},75:function(e,t,a){e.exports=a.p+"static/media/accident.af983432.svg"},76:function(e,t,a){e.exports=a.p+"static/media/animal.78439bea.svg"},77:function(e,t,a){e.exports=a.p+"static/media/violence.b089ef0f.svg"},78:function(e,t,a){e.exports=a.p+"static/media/bad_services.0beafc4d.svg"},79:function(e,t,a){e.exports=a.p+"static/media/death.0e042142.svg"},80:function(e,t,a){e.exports=a.p+"static/media/dtp.8aaadaad.svg"},81:function(e,t,a){e.exports=a.p+"static/media/lost_man.44949d7e.svg"},82:function(e,t,a){e.exports=a.p+"static/media/protest.9ffcd5b2.svg"},83:function(e,t,a){e.exports=a.p+"static/media/theft.0e89d87b.svg"},84:function(e,t,a){e.exports=a.p+"static/media/disaster.e2168d84.svg"},89:function(e,t,a){e.exports=a(100)},99:function(e,t,a){}},[[89,1,2]]]);
//# sourceMappingURL=main.338c9da4.chunk.js.map