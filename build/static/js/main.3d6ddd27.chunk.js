(this["webpackJsonpcrime-maps"]=this["webpackJsonpcrime-maps"]||[]).push([[0],{101:function(e,t,a){e.exports=a.p+"static/media/novosibirsk.f2328259.svg"},102:function(e,t,a){e.exports=a.p+"static/media/krasnoyarsk.0bba5569.svg"},104:function(e,t,a){e.exports=a.p+"static/media/user.ed058a81.svg"},105:function(e,t,a){e.exports=a.p+"static/media/car_theft.f15135e1.svg"},106:function(e,t,a){e.exports=a.p+"static/media/fire.4faaaf86.svg"},107:function(e,t,a){e.exports=a.p+"static/media/accident.75476a82.svg"},108:function(e,t,a){e.exports=a.p+"static/media/animal.80e28ec9.svg"},109:function(e,t,a){e.exports=a.p+"static/media/violence.4e158945.svg"},110:function(e,t,a){e.exports=a.p+"static/media/bad_services.78eacfc8.svg"},111:function(e,t,a){e.exports=a.p+"static/media/death.25eac115.svg"},112:function(e,t,a){e.exports=a.p+"static/media/dtp.741b1766.svg"},113:function(e,t,a){e.exports=a.p+"static/media/lost_man.9db9caf4.svg"},114:function(e,t,a){e.exports=a.p+"static/media/protest.a4a6d874.svg"},115:function(e,t,a){e.exports=a.p+"static/media/theft.2d127463.svg"},127:function(e,t,a){e.exports=a(156)},155:function(e,t,a){},156:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(13),o=a.n(c),i=a(42),s=a(30),l=a(21),u=a(217),d=a(46),m=a(197),p=a(214),g=a(215),f=a(216),b=a(219),E=a(35),v=a(223),C=a(95),h=a.n(C),O=a(16),N=a(188),x=a(96),y=a.n(x),k=a(97),j=a.n(k),I={novosibirsk:{backgroundImage:"url(".concat(y.a,")"),backgroundSize:"cover",backgroundRepeat:"no-repeat"},krasnoyarsk:{backgroundImage:"url(".concat(j.a,")"),backgroundSize:"cover",backgroundRepeat:"no-repeat"}},T=Object(N.a)((function(e){return Object(O.a)({},I,{root:{width:360,flexShrink:0},rootPaper:{width:360},header:{position:"relative",height:200},searchContainer:{display:"flex",justifyContent:"space-between",margin:e.spacing(3),padding:"5px 10px",backgroundColor:"#fff",borderRadius:2*e.shape.borderRadius,border:"1px solid #ccc"},search:{width:"86%"},darkBG:{paddingTop:1,height:"100%",backgroundColor:"rgba(0, 0, 0, .5)"}})})),w=a(54),S=a.n(w),_=a(59),L=a(191),D=a(193),R=a(38),z=Object(N.a)((function(e){return Object(R.a)({root:{display:"flex",alignItems:"center",overflowX:"hidden",margin:e.spacing(1)},cityName:{marginLeft:e.spacing(1),color:e.palette.text},emblemContainer:{display:"none"},grow:{flexGrow:1},changeCityButton:{color:e.palette.text}},e.breakpoints.up("md"),{root:{margin:e.spacing(3)},cityName:{color:"#fff"},emblemContainer:{display:"flex",justifyContent:"center",alignItems:"center",width:40,height:40,background:"#fff",borderRadius:"50%"},emblem:{height:30},changeCityButton:{color:"#fff"}})})),M=a(101),B=a.n(M),A=a(102),Z=a.n(A),G={novosibirsk:B.a,krasnoyarsk:Z.a};var F=function(e){var t=e.fetchCities,a=e.setModal,c=e.loading,o=e.city,i=e.titleCity,s=z();return Object(n.useEffect)((function(){c&&t()}),[c,t]),r.a.createElement("div",{className:s.root},r.a.createElement("div",{className:s.emblemContainer},r.a.createElement("img",{className:s.emblem,src:G[i],alt:""})),r.a.createElement(_.a,{variant:"h6",className:s.cityName},o),r.a.createElement("div",{className:s.grow}),r.a.createElement(L.a,{onClick:function(){return a(!0)}},r.a.createElement(D.a,{className:s.changeCityButton})))},H=a(194),P=a(195),W=Object(N.a)((function(e){return{root:{marginTop:"auto"},link:{textDecoration:"none"},button:{borderRadius:0}}}));var J=function(e){var t=W();return r.a.createElement("div",{className:t.root},r.a.createElement(i.b,{to:"/sign-in",className:t.link},r.a.createElement(H.a,{color:"primary",variant:"contained",size:"large",fullWidth:!0,className:t.button,startIcon:r.a.createElement(P.a,null)},"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f")))};var Y=function(e){var t=e.selectedCity,a=e.loading,n=e.fetchCities,c=e.setModal,o=T();return r.a.createElement(b.a,{smDown:!0,implementation:"css"},r.a.createElement(E.a,{variant:"permanent",className:o.root,classes:{paper:o.rootPaper}},r.a.createElement("div",{className:h()(o.header,o[t.title])},r.a.createElement("div",{className:o.darkBG},r.a.createElement("div",{className:o.searchContainer},r.a.createElement("img",{src:S.a,alt:"",height:"35px"}),r.a.createElement(v.a,{className:o.search,placeholder:"\u041f\u043e\u0438\u0441\u043a \u043f\u043e Crime Maps..."})),r.a.createElement(F,{loading:a,fetchCities:n,setModal:c,titleCity:t.title,city:t.name}))),r.a.createElement(J,null)))},U=a(57),X=a(221),$=a(198),q=a(199),K="linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",Q=Object(N.a)((function(e){return{openButton:{position:"absolute",top:e.spacing(1),left:e.spacing(1),zIndex:1e3},root:{width:"80%",zIndex:1001},header:{display:"flex",alignItems:"center",padding:e.spacing(2),paddingRight:e.spacing(0),background:K},title:{marginLeft:e.spacing(1),color:"#fff"},logo:{height:30},grow:{flexGrow:1},closeMenuButton:{color:"#fff"}}}));var V=function(e){var t=e.loading,a=e.fetchCities,c=e.setModal,o=e.selectedCity,i=Q(),s=Object(n.useState)(!1),l=Object(U.a)(s,2),u=l[0],d=l[1],p=function(e){return d(e)};return r.a.createElement(b.a,{mdUp:!0,implementation:"css"},r.a.createElement(m.a,{className:i.openButton,onClick:function(){return p(!0)}},r.a.createElement($.a,null)),r.a.createElement(X.a,{open:u,onOpen:function(){return p(!0)},onClose:function(){return p(!1)},className:i.root,classes:{paper:i.root}},r.a.createElement("div",{className:i.header},r.a.createElement("img",{src:S.a,alt:"",className:i.logo}),r.a.createElement(_.a,{variant:"h6",className:i.title},"Crime Maps"),r.a.createElement("div",{className:i.grow}),r.a.createElement(L.a,{className:i.closeMenuButton,onClick:function(){return p(!1)}},r.a.createElement(q.a,null))),r.a.createElement(F,{loading:t,fetchCities:a,setModal:c,titleCity:o.title,city:o.name}),r.a.createElement(J,null)))},ee=function(){return{type:"FETCH_CITIES"}},te=function(e){return{type:"MODAL",isOpen:e}},ae=function(e){return{type:"ERROR",error:e}},ne=function(e){return{type:"CHANGE_CITY",id:e}},re=function(e){return{type:"CHANGE_SELECTED_CITY",id:e}};var ce=Object(s.c)((function(e){var t=e.cities;return{selectedCityId:t.selectedCity,citiesList:t.data,loading:t.loading}}),(function(e){return Object(l.b)({fetchCities:ee,setModal:te},e)}))((function(e){var t=e.fetchCities,a=e.setModal,n=e.selectedCityId,c=e.citiesList,o=e.loading,i=c.find((function(e){return e.id===n}));return r.a.createElement("nav",null,r.a.createElement(Y,{selectedCity:i,loading:o,fetchCities:t,setModal:a}),r.a.createElement(V,{selectedCity:i,loading:o,fetchCities:t,setModal:a}))})),oe=a(220),ie=a(222),se=a(200),le=function(e,t){return{type:"CHANGE_COORDINATES",lat:e,lng:t}},ue=function(e){return{type:"SET_ZOOM",zoom:e}},de=function(){return{type:"INCREMENT_ZOOM"}},me=function(){return{type:"DECREMENT_ZOOM"}},pe=function(e){return{type:"OPEN_INCIDENT",incident:e}},ge=function(){return{type:"CLOSE_INCIDENT"}},fe=a(24),be=a.n(fe),Ee=a(104),ve=a.n(Ee),Ce=a(105),he=a.n(Ce),Oe=a(106),Ne=a.n(Oe),xe=a(107),ye=a.n(xe),ke=a(108),je=a.n(ke),Ie=a(109),Te=a.n(Ie),we=a(110),Se=a.n(we),_e=a(111),Le=a.n(_e),De=a(112),Re=a.n(De),ze=a(113),Me=a.n(ze),Be=a(114),Ae=a.n(Be),Ze=a(115),Ge=a.n(Ze);function Fe(e){var t;switch(e){case 0:t=he.a;break;case 1:t=Ne.a;break;case 2:t=ye.a;break;case 3:t=je.a;break;case 4:t=Te.a;break;case 5:t=Se.a;break;case 6:t=Le.a;break;case 7:t=Re.a;break;case 8:t=Me.a;break;case 9:t=Ae.a;break;case 10:t=Ge.a;break;default:t=ve.a}return new be.a.Icon({iconUrl:t,iconSize:new be.a.Point(40,60),iconAnchor:[20,60]})}var He=Object(s.c)((function(e){var t=e.map,a=e.geodata,n=e.incidents;return{lat:t.lat,lng:t.lng,zoom:t.zoom,geodata:a.geodata,incidents:n.data}}),(function(e){return Object(l.b)({changeCoordinates:le,changeZoom:ue,openIncident:pe},e)}))((function(e){var t=e.lat,a=e.lng,n=e.zoom,c=e.geodata,o=e.changeCoordinates,i=e.changeZoom,s=e.incidents,l=e.openIncident;return r.a.createElement(oe.a,{center:[t,a],zoom:n,maxZoom:17,minZoom:5,attributionControl:!0,zoomControl:!1,doubleClickZoom:!0,scrollWheelZoom:!0,dragging:!0,animate:!0,easeLinearity:.35,onDragEnd:function(e){var t=e.target.getCenter(),a=t.lat,n=t.lng;o(a,n)},onZoomEnd:function(e){return i(e.target.getZoom())}},r.a.createElement(ie.a,{url:"http://{s}.tile.osm.org/{z}/{x}/{y}.png"}),c?r.a.createElement(se.a,{position:[c.coords.latitude,c.coords.longitude],icon:Fe()}):null,s.map((function(e){return r.a.createElement(se.a,{key:e.id,position:e.coords,icon:Fe(e.type),onClick:function(){return l(e)}})})))})),Pe=a(201),We=a(202),Je=a(204),Ye=a(206),Ue=a(207),Xe=a(208),$e=a(209),qe=a(211),Ke=a(203),Qe=a(205),Ve=a(210),et=Object(N.a)((function(e){return{title:{position:"relative",backgroundColor:"#eee",borderBottom:"1px solid #cecece"},closeButton:{position:"absolute",right:e.spacing(1),top:e.spacing(1)},loadingText:{display:"flex",justifyContent:"center",alignItems:"center"},rotate:{animation:"$rotate 1s infinite"},"@keyframes rotate":{"0%":{transform:"rotate(0deg)"},"100%":{transform:"rotate(-360deg)"}},actions:{backgroundColor:"#eee",borderTop:"1px solid #cecece"}}}));var tt=Object(s.c)((function(e){var t=e.cities;return{isOpen:t.isSelectorOpen,cities:t.data,loading:t.loading,error:t.error}}),(function(e){return Object(l.b)({setModal:te,changeCity:ne,changeCoordinates:le},e)}))((function(e){var t=Object(n.useState)(null),a=Object(U.a)(t,2),c=a[0],o=a[1],i=et(),l=e.isOpen,u=e.loading,d=e.setModal,m=e.cities,p=e.changeCity,g=e.changeCoordinates;return r.a.createElement(Pe.a,{open:l,onClose:function(){return d(!1)},maxWidth:"sm",fullWidth:!0},r.a.createElement(We.a,{className:i.title},"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0433\u043e\u0440\u043e\u0434",r.a.createElement(L.a,{onClick:function(){return d(!1)},className:i.closeButton},r.a.createElement(Ke.a,null))),r.a.createElement(Je.a,null,u&&r.a.createElement(_.a,{variant:"h6",color:"textSecondary",className:i.loadingText},"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u0441\u043f\u0438\u0441\u043a\u0430 \u0433\u043e\u0440\u043e\u0434\u043e\u0432",r.a.createElement(Qe.a,{className:i.rotate})),!u&&r.a.createElement(Ye.a,{component:"nav"},m.map((function(e){return r.a.createElement(Ue.a,{button:!0,key:e.id,selected:e.id===c,onClick:function(){return o(e.id)}},r.a.createElement(Xe.a,null,e.name),e.id===c&&r.a.createElement($e.a,null,r.a.createElement(L.a,null,r.a.createElement(Ve.a,null))))})))),r.a.createElement(qe.a,{className:i.actions},r.a.createElement(H.a,{onClick:function(){return function(e){var t=m.find((function(t){return t.id===e}));localStorage.setItem("selectedCity",e),Object(s.b)((function(){p(e),d(!1),g(t.lat,t.lng)}))}(c)},disabled:null===c},"\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044c")))})),at=a(19),nt=a(196),rt=a(213),ct=a(212),ot=Object(N.a)((function(e){return{titleContainer:{position:"relative",backgroundColor:"#eee",borderBottom:"1px solid #cecece"},closeButton:{position:"absolute",right:e.spacing(1),top:e.spacing(1)},infoContainer:{display:"flex",justifyContent:"space-between",marginBottom:e.spacing(1)},date:{color:"#aaa",cursor:"pointer","&:hover":{textDecoration:"underline"}},views:{display:"flex",alignItems:"center",color:"#aaa"},viewsIcon:{marginLeft:e.spacing(1)},sourcesContainer:{display:"flex",flexDirection:"column",marginTop:e.spacing(2)},sourceBorder:{marginBottom:e.spacing(1),borderBottom:"1px solid #cecece"}}}));var it=function(e){var t=e.close,a=e.incident,n=a.title,c=a.text,o=a.date,i=a.views,s=a.sources,l=ot(),u=function(e){var t=new Date(e),a=t.getDate(),n=t.getMonth()+1,r=t.getFullYear(),c=t.getHours(),o=t.getMinutes();return a<10&&(a="0"+a),n<10&&(n="0"+n),c<10&&(c="0"+c),o<10&&(o="0"+o),"".concat(c,":").concat(o," ").concat(a,".").concat(n,".").concat(r)}(o),d=Object(at.a)(),m=Object(nt.a)(d.breakpoints.down("sm"));return r.a.createElement(Pe.a,{open:!0,onClose:t,maxWidth:"md",fullWidth:!0,fullScreen:m},r.a.createElement(We.a,{className:l.titleContainer},n,r.a.createElement(L.a,{onClick:t,className:l.closeButton},r.a.createElement(Ke.a,null))),r.a.createElement(Je.a,null,r.a.createElement("div",{className:l.infoContainer},r.a.createElement(_.a,{variant:"body1",className:l.date},u),r.a.createElement(_.a,{variant:"body1",className:l.views},i," ",r.a.createElement(ct.a,{className:l.viewsIcon}))),r.a.createElement(_.a,{variant:"body1"},c),r.a.createElement("div",{className:l.sourcesContainer},r.a.createElement(_.a,{variant:"h6"},"\u0418\u0441\u0442\u043e\u0447\u043d\u0438\u043a\u0438:"),r.a.createElement("div",{className:l.sourceBorder}),s.map((function(e,t){return r.a.createElement(rt.a,{key:t,href:e.link},e.name)})))))},st=Object(N.a)((function(e){return Object(R.a)({root:{display:"flex",height:"100%"},buttonUserPosition:{position:"absolute",bottom:e.spacing(3),right:e.spacing(3),zIndex:1e3},zoomButtonsContainer:{display:"flex",flexDirection:"column",position:"absolute",top:e.spacing(1),right:e.spacing(1),zIndex:1e3},buttonZoomOut:{marginTop:e.spacing(1)}},e.breakpoints.up("md"),{zoomButtonsContainer:{top:e.spacing(3),right:e.spacing(3)},buttonZoomOut:{marginTop:e.spacing(1)}})})),lt=function(e){return{type:"FETCH_ALL_INCIDENTS",id:e}},ut=function(e){return{type:"SET_ERROR",error:e}};var dt=Object(s.c)((function(e){var t=e.geodata,a=e.map,n=e.incidents,r=e.cities,c=e.incident;return{geodata:t.geodata,zoom:a.zoom,loading:n.isLoading,selectedCityid:r.selectedCity,incident:c}}),(function(e){return Object(l.b)({changeCoordinates:le,incrementZoom:de,decrementZoom:me,fetchAllIncidents:lt,closeIncident:ge},e)}))((function(e){var t=e.changeCoordinates,a=e.geodata,c=e.incrementZoom,o=e.decrementZoom,i=e.zoom,s=e.fetchAllIncidents,l=e.loading,u=e.selectedCityid,d=e.incident,b=e.closeIncident,E=st();return Object(n.useEffect)((function(){l&&s(u)}),[l,s,u]),r.a.createElement("div",{className:E.root},r.a.createElement(ce,null),r.a.createElement(He,null),r.a.createElement(tt,null),r.a.createElement(m.a,{color:"primary",size:"large",className:E.buttonUserPosition,onClick:function(){return t(a.coords.latitude,a.coords.longitude)},disabled:null===a},r.a.createElement(p.a,null)),r.a.createElement("div",{className:E.zoomButtonsContainer},r.a.createElement(m.a,{size:"large",onClick:function(){17!==i&&c()}},r.a.createElement(g.a,null)),r.a.createElement(m.a,{size:"large",className:E.buttonZoomOut,onClick:function(){5!==i&&o()}},r.a.createElement(f.a,null))),d&&r.a.createElement(it,{incident:d,close:b}))})),mt=a(158),pt=a(218),gt=Object(N.a)((function(e){return Object(R.a)({root:{display:"flex",flexDirection:"column",height:"100%",background:K},logoContainer:{display:"flex",justifyContent:"center",alignItems:"center",paddingTop:e.spacing(3),color:"#fff",textTransform:"uppercase"},logo:{marginLeft:e.spacing(1),height:30},paper:{marginTop:e.spacing(10),marginLeft:e.spacing(1),marginRight:e.spacing(1),paddingTop:e.spacing(1),paddingBottom:e.spacing(3)},title:{textAlign:"center",textTransform:"uppercase"},form:{paddingLeft:e.spacing(1),paddingRight:e.spacing(1)},textField:{marginTop:e.spacing(1),width:"100%"},button:{marginTop:e.spacing(3)},grayText:{marginTop:e.spacing(1),textAlign:"center",color:"#999"},link:{textDecoration:"none"},linkButton:{marginTop:e.spacing(1)},underContainer:{display:"flex",justifyContent:"center",marginTop:e.spacing(1)},backButton:{color:"#fff"}},e.breakpoints.up("sm"),{root:{alignItems:"center"},paper:{width:e.breakpoints.width("sm")},underContainer:{justifyContent:"flex-end",width:e.breakpoints.width("sm")}})}));var ft=function(e){var t=gt(),a=Object(n.useState)({email:"",password:""}),c=Object(U.a)(a,2),o=c[0],s=c[1],l=function(e){var t=e.target;return s(Object(O.a)({},o,Object(R.a)({},t.name,t.value)))};return r.a.createElement("div",{className:t.root},r.a.createElement("div",{className:t.logoContainer},r.a.createElement(_.a,{variant:"h5"},"Crime Maps"),r.a.createElement("img",{src:S.a,alt:"",className:t.logo})),r.a.createElement(mt.a,{className:t.paper},r.a.createElement(_.a,{variant:"h6",className:t.title},"\u0412\u0445\u043e\u0434"),r.a.createElement("div",{className:t.form},r.a.createElement(pt.a,{name:"email",value:o.email,onChange:l,className:t.textField,label:"E-Mail"}),r.a.createElement(pt.a,{name:"password",value:o.password,type:"password",onChange:l,className:t.textField,label:"\u041f\u0430\u0440\u043e\u043b\u044c"}),r.a.createElement(H.a,{color:"primary",variant:"contained",size:"large",className:t.button,fullWidth:!0},"\u0412\u043e\u0439\u0442\u0438"),r.a.createElement(_.a,{variant:"body2",className:t.grayText},"\u0438\u043b\u0438"),r.a.createElement(i.b,{to:"/sign-up",className:t.link},r.a.createElement(H.a,{color:"secondary",variant:"contained",className:t.linkButton,fullWidth:!0},"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f")))),r.a.createElement("div",{className:t.underContainer},r.a.createElement(i.b,{to:"/",className:t.link},r.a.createElement(H.a,{className:t.backButton},"\u041d\u0430\u0437\u0430\u0434 \u043d\u0430 \u0441\u0430\u0439\u0442"))))},bt=function(e){return{type:"SET_LOCATION",data:e}},Et=function(e){return{type:"SET_LOCATION_ERROR",error:e}};var vt=Object(s.c)(null,(function(e){return Object(l.b)({setLocation:bt,setLocationError:Et},e)}))((function(e){var t=e.setLocation,a=e.setLocationError;return navigator.geolocation.getCurrentPosition(t,a),r.a.createElement(n.Fragment,null,r.a.createElement(u.a,null),r.a.createElement(d.c,null,r.a.createElement(d.a,{exact:!0,path:"/",component:dt}),r.a.createElement(d.a,{path:"/sign-in",component:ft})))})),Ct=a(116),ht={data:JSON.parse(localStorage.getItem("citiesList"))||[{_id:"5e8f0f4f8883b725cc275bad",id:1,title:"novosibirsk",name:"\u041d\u043e\u0432\u043e\u0441\u0438\u0431\u0438\u0440\u0441\u043a",lat:55.0415,lng:82.9346}],isSelectorOpen:!1,error:!1,loading:!0,selectedCity:+localStorage.getItem("selectedCity")||1};var Ot,Nt,xt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ht,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD":return Object(O.a)({},e,{data:t.cities});case"MODAL":return Object(O.a)({},e,{isSelectorOpen:t.isOpen});case"ERROR":return Object(O.a)({},e,{error:t.error});case"LOADING":return Object(O.a)({},e,{loading:t.loading});case"CHANGE_SELECTED_CITY":return Object(O.a)({},e,{selectedCity:t.id});default:return e}},yt=+JSON.parse(localStorage.getItem("selectedCity")),kt=JSON.parse(localStorage.getItem("citiesList"));if(yt&&kt){var jt=kt.find((function(e){return e.id===yt}));Ot=jt.lat,Nt=jt.lng}else Ot=55.0415,Nt=82.9346;var It={lat:Ot,lng:Nt,zoom:13},Tt={geodata:null,error:!1},wt={isLoading:!0,data:[],error:!1},St=Object(l.c)({cities:xt,map:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:It,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE_COORDINATES":return Object(O.a)({},e,{lat:t.lat,lng:t.lng});case"SET_ZOOM":return Object(O.a)({},e,{zoom:t.zoom});case"INCREMENT_ZOOM":return Object(O.a)({},e,{zoom:++e.zoom});case"DECREMENT_ZOOM":return Object(O.a)({},e,{zoom:--e.zoom});default:return e}},geodata:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Tt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_LOCATION":return Object(O.a)({},e,{geodata:t.data});case"SET_LOCATION_ERROR":return Object(O.a)({},e,{error:!0});default:return e}},incidents:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:wt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_INCIDENTS":return Object(O.a)({},e,{data:t.incidents});case"SET_LOADING":return Object(O.a)({},e,{isLoading:!1});case"SET_ERROR":return Object(O.a)({},e,{error:t.error});default:return e}},incident:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"OPEN_INCIDENT":return Object(O.a)({},t.incident);case"CLOSE_INCIDENT":return null;default:return e}}}),_t=a(26),Lt=a.n(_t),Dt=a(20),Rt=a(70),zt=a.n(Rt),Mt=Lt.a.mark(Zt),Bt=Lt.a.mark(Gt),At=Lt.a.mark(Ft);function Zt(){var e,t;return Lt.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,Object(Dt.b)(zt.a.get,"/api/cities/");case 3:return e=a.sent,t=e.data,localStorage.setItem("citiesList",JSON.stringify(t)),a.next=8,Object(Dt.c)({type:"ADD",cities:t});case 8:return a.next=10,Object(Dt.c)(ae(!1));case 10:return a.next=12,Object(Dt.c)({type:"LOADING",loading:!1});case 12:a.next=19;break;case 14:return a.prev=14,a.t0=a.catch(0),console.error(a.t0.message),a.next=19,Object(Dt.c)(ae(!0));case 19:case"end":return a.stop()}}),Mt,null,[[0,14]])}function Gt(e){var t;return Lt.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,t=e.id,a.next=4,Object(Dt.c)(lt(t));case 4:return a.next=6,Object(Dt.c)(re(t));case 6:a.next=11;break;case 8:a.prev=8,a.t0=a.catch(0),console.error(a.t0.message);case 11:case"end":return a.stop()}}),Bt,null,[[0,8]])}function Ft(){return Lt.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Dt.e)("FETCH_CITIES",Zt);case 2:return e.next=4,Object(Dt.e)("CHANGE_CITY",Gt);case 4:case"end":return e.stop()}}),At)}var Ht=Lt.a.mark(Wt),Pt=Lt.a.mark(Jt);function Wt(e){var t,a,n,r,c,o,i;return Lt.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return t=e.id,s.prev=1,s.next=4,Object(Dt.d)((function(e){return{cities:e.cities.data}}));case 4:return a=s.sent,n=a.cities,r=n.find((function(e){return e.id===t})),c=r.title,s.next=9,Object(Dt.b)(zt.a.get,"/api/incidents/".concat(c));case 9:return o=s.sent,i=o.data,s.next=13,Object(Dt.c)(ut(!1));case 13:return s.next=15,Object(Dt.c)({type:"SET_LOADING",value:!1});case 15:return s.next=17,Object(Dt.c)({type:"SET_INCIDENTS",incidents:i});case 17:s.next=24;break;case 19:return s.prev=19,s.t0=s.catch(1),console.error(s.t0.message),s.next=24,Object(Dt.c)(ut(!0));case 24:case"end":return s.stop()}}),Ht,null,[[1,19]])}function Jt(){return Lt.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Dt.e)("FETCH_ALL_INCIDENTS",Wt);case 2:case"end":return e.stop()}}),Pt)}var Yt=Lt.a.mark(Ut);function Ut(){return Lt.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Dt.a)([Ft(),Jt()]);case 2:case"end":return e.stop()}}),Yt)}var Xt=Ut,$t=Object(Ct.a)(),qt=Object(l.e)(St,Object(l.a)($t));window.getState=qt.getState,$t.run(Xt);var Kt=qt;a(155);o.a.render(r.a.createElement(i.a,null,r.a.createElement(s.a,{store:Kt},r.a.createElement(vt,null))),document.getElementById("root"))},54:function(e,t,a){e.exports=a.p+"static/media/logo_dark.6ea33164.svg"},96:function(e,t,a){e.exports=a.p+"static/media/novosibirsk.3223fede.jpg"},97:function(e,t,a){e.exports=a.p+"static/media/krasnoyarsk.aaf9cd5c.jpg"}},[[127,1,2]]]);
//# sourceMappingURL=main.3d6ddd27.chunk.js.map