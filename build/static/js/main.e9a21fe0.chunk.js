(this["webpackJsonpcrime-maps"]=this["webpackJsonpcrime-maps"]||[]).push([[0],{100:function(e,t,a){e.exports=a.p+"static/media/animal.78439bea.svg"},101:function(e,t,a){e.exports=a.p+"static/media/violence.b089ef0f.svg"},102:function(e,t,a){e.exports=a.p+"static/media/bad_services.0beafc4d.svg"},103:function(e,t,a){e.exports=a.p+"static/media/death.0e042142.svg"},104:function(e,t,a){e.exports=a.p+"static/media/dtp.8aaadaad.svg"},105:function(e,t,a){e.exports=a.p+"static/media/lost_man.44949d7e.svg"},106:function(e,t,a){e.exports=a.p+"static/media/protest.9ffcd5b2.svg"},107:function(e,t,a){e.exports=a.p+"static/media/theft.0e89d87b.svg"},108:function(e,t,a){e.exports=a.p+"static/media/disaster.e2168d84.svg"},124:function(e,t,a){e.exports=a(153)},152:function(e,t,a){},153:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(11),c=a.n(i),o=a(34),s=a(20),l=a(115),u=a(208),m=a(33),p=a(207),d=a(39),g=Object(n.createContext)(),f=function(e){return{type:"SET_LOCATION",data:e}},b=function(e){return{type:"SET_LOCATION_ERROR",error:e}},E=function(e,t){return{type:"CHANGE_COORDINATES",lat:e,lng:t}},h=function(e){return{type:"SET_ZOOM",zoom:e}},v=function(){return{type:"INCREMENT_ZOOM"}},y=function(){return{type:"DECREMENT_ZOOM"}},O=function(e){return{type:"CHANGE_NEWS_TYPES",typeNews:e}},x=function(e,t){return{type:"CHANGE_SYSTEM_FIELD",name:e,value:t}},N=function(e,t){return{type:"CHANGE_FIELD",name:e,value:t}},j=function(){return{type:"SIGN_IN_VALIDATE"}},C=function(e,t){return{type:"SIGN_IN_REQUEST",email:e,password:t}},I=function(e){return{type:"SIGN_IN_FAIL",message:e}},k=function(e){return{type:"SET_USER_DATA",data:e}},w=a(202),S=a(204),T=a(154),_=a(203),A=a(205),L=a(206),R=a(211),D=a(198),z=a(200),Z=a(201),F=a(19),G=a(13),B=a(184),M=a(89),P=a.n(M),H=a(90),U=a.n(H),W={novosibirsk:{backgroundImage:"url(".concat(P.a,")"),backgroundSize:"cover",backgroundRepeat:"no-repeat"},krasnoyarsk:{backgroundImage:"url(".concat(U.a,")"),backgroundSize:"cover",backgroundRepeat:"no-repeat"}},J=Object(B.a)((function(e){return Object(F.a)({root:{display:"none"}},e.breakpoints.up("md"),Object(G.a)({},W,{root:{display:"block",width:330,flexShrink:0},rootPaper:{width:330},subscriptionsContainer:{marginTop:e.spacing(1)},subscriptionsLink:{display:"flex",alignItems:"center",marginLeft:e.spacing(2),paddingTop:e.spacing(1),paddingBottom:e.spacing(1),fontSize:e.typography.h6.fontSize,textDecoration:"none",color:e.palette.text.primary},subscriptionsIcon:{marginRight:e.spacing(1),fontSize:e.typography.h4.fontSize,color:"#f64b11"},authLink:{marginTop:"auto",textDecoration:"none",borderTop:"1px solid ".concat("#f64b11")},authButton:{color:"#f64b11"}}))})),Y=a(213),q=a(48),Q=a.n(q),V=a(187),X=a(214),$=a(191),K=a(192),ee=Object(B.a)((function(e){return Object(F.a)({root:{display:"flex",alignItems:"center",overflowX:"hidden",margin:e.spacing(1)},cityName:{marginLeft:e.spacing(1),color:e.palette.text},emblemContainer:{display:"none"},grow:{flexGrow:1},changeCityButton:{color:e.palette.text}},e.breakpoints.up("md"),{root:{margin:e.spacing(3)},cityName:{color:"#fff"},emblemContainer:{display:"flex",justifyContent:"center",alignItems:"center",width:40,height:40,background:"#fff",borderRadius:"50%"},emblem:{height:30},changeCityButton:{color:"#fff"}})})),te=a(94),ae=a.n(te),ne=a(95),re=a.n(ne),ie={novosibirsk:ae.a,krasnoyarsk:re.a};var ce=Object(s.c)((function(e){return{loading:e.cities.loading}}))((function(e){var t=e.titleCity,a=e.city,n=ee();return r.a.createElement("div",{className:n.root},r.a.createElement("div",{className:n.emblemContainer},r.a.createElement("img",{className:n.emblem,src:ie[t],alt:""})),r.a.createElement(V.a,{variant:"h6",className:n.cityName},a),r.a.createElement("div",{className:n.grow}),r.a.createElement(X.a,{title:"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u0433\u043e\u0440\u043e\u0434"},r.a.createElement($.a,null,r.a.createElement(K.a,{className:n.changeCityButton}))))})),oe=Object(B.a)((function(e){return Object(G.a)({},W,{header:{position:"relative",height:200},blackout:{paddingTop:1,height:"100%",backgroundColor:"rgba(0, 0, 0, .5)"},searchContainer:{display:"flex",justifyContent:"space-between",margin:e.spacing(3),padding:"5px 10px",backgroundColor:"#fff",borderRadius:2*e.shape.borderRadius,border:"1px solid #ccc"},search:{width:"86%"}})})),se=a(63),le=a.n(se);var ue=Object(s.c)((function(e){var t=e.cities;return{selectedCityId:t.selectedCityId,citiesList:t.data}}))((function(e){var t=e.selectedCityId,a=e.citiesList,n=oe(),i=a.find((function(e){return e.id===t}));return r.a.createElement("div",{className:Q()(n.root,n[i.title])},r.a.createElement("div",{className:n.blackout},r.a.createElement("div",{className:n.searchContainer},r.a.createElement("img",{src:le.a,alt:"",height:"35px"}),r.a.createElement(Y.a,{className:n.search,placeholder:"\u041f\u043e\u0438\u0441\u043a \u043f\u043e Crime Maps..."})),r.a.createElement(ce,{titleCity:i.title,city:i.name})))})),me=a(97),pe=a.n(me),de=a(98),ge=a.n(de),fe=a(99),be=a.n(fe),Ee=a(100),he=a.n(Ee),ve=a(101),ye=a.n(ve),Oe=a(102),xe=a.n(Oe),Ne=a(103),je=a.n(Ne),Ce=a(104),Ie=a.n(Ce),ke=a(105),we=a.n(ke),Se=a(106),Te=a.n(Se),_e=a(107),Ae=a.n(_e),Le=a(108),Re=a.n(Le),De=[{type:9,name:"\u0410\u043a\u0446\u0438\u044f \u043f\u0440\u043e\u0442\u0435\u0441\u0442\u0430"},{type:7,name:"\u0414\u0422\u041f"},{type:3,name:"\u0416\u0438\u0432\u043e\u0442\u043d\u044b\u0435"},{type:10,name:"\u041a\u0440\u0430\u0436\u0430"},{type:4,name:"\u041d\u0430\u0441\u0438\u043b\u0438\u0435"},{type:2,name:"\u041d\u0435\u0441\u0447\u0430\u0441\u0442\u043d\u044b\u0439 \u0441\u043b\u0443\u0447\u0430\u0439"},{type:0,name:"\u0423\u0433\u043e\u043d"},{type:1,name:"\u041f\u043e\u0436\u0430\u0440"},{type:5,name:"\u041f\u043b\u043e\u0445\u0438\u0435 \u0443\u0441\u043b\u0443\u0433\u0438"},{type:8,name:"\u041f\u0440\u043e\u043f\u0430\u043b \u0447\u0435\u043b\u043e\u0432\u0435\u043a"},{type:6,name:"\u0421\u043c\u0435\u0440\u0442\u044c"},{type:11,name:"\u0421\u0442\u0438\u0445\u0438\u0439\u043d\u043e\u0435 \u0431\u0435\u0434\u0441\u0442\u0432\u0438\u0435"}];var ze=function(e){switch(e){case 0:return pe.a;case 1:return ge.a;case 2:return be.a;case 3:return he.a;case 4:return ye.a;case 5:return xe.a;case 6:return je.a;case 7:return Ie.a;case 8:return we.a;case 9:return Te.a;case 10:return Ae.a;case 11:return Re.a;default:return!1}},Ze=Object(B.a)((function(e){return{root:{display:"flex",flexWrap:"wrap",margin:e.spacing(1)},button:{display:"flex",flexDirection:"column",alignItems:"center",width:"24%",border:"none",background:"none",outline:"none",cursor:"pointer",transition:".3s","&:hover":{opacity:.7}},imageContainer:{padding:1.5*e.spacing(1),width:"100%",background:"#000",borderRadius:"50%"},label:{marginTop:e.spacing(1),fontSize:12},active:{background:"#f64b11"}}}));var Fe=Object(s.c)((function(e){return{types:e.map.showTypes}}))((function(e){var t=e.types,a=Ze(),i=Object(n.useContext)(g).changeNewsTypes;return r.a.createElement("div",{className:a.root},De.map((function(e){var n,c=e.type,o=e.name;return r.a.createElement("button",{className:a.button,key:o,onClick:function(){return i(c)}},r.a.createElement("div",{className:Q()(a.imageContainer,Object(F.a)({},a.active,(n=c,!!t.find((function(e){return e.type===n})))))},r.a.createElement("img",{alt:o,src:ze(c),width:"100%"})),r.a.createElement("span",{className:a.label},o))})))})),Ge=a(193),Be=a(194),Me=a(195),Pe=a(196),He=a(197),Ue=Object(B.a)((function(e){return{root:{width:"100%",position:"absolute",bottom:0},buttonsContainer:{display:"flex",justifyContent:"space-between"},button:{minWidth:0},active:{color:"#f64b11"}}})),We=[{path:"/cabinet",icon:r.a.createElement(Ge.a,null)},{path:"/map/tape",icon:r.a.createElement(Be.a,null)},{path:"/map",icon:r.a.createElement(Me.a,null)},{path:"/map/recommendations",icon:r.a.createElement(Pe.a,null)},{path:"/cabinet/gossip",icon:r.a.createElement(He.a,null)}];var Je=function(e){var t=e.location,a=Ue();return r.a.createElement("div",{className:a.root},r.a.createElement(D.a,null),r.a.createElement("div",{className:a.buttonsContainer},We.map((function(e,n){return r.a.createElement(o.b,{key:n,to:e.path},r.a.createElement($.a,{className:Q()(Object(F.a)({},a.active,t===e.path))},e.icon))}))))};var Ye=Object(s.c)((function(e){return{isAuth:e.user.isAuth}}))((function(e){var t=e.location,a=e.isAuth,n=J();return r.a.createElement(R.a,{variant:"permanent",className:n.root,classes:{paper:n.rootPaper}},r.a.createElement(ue,null),r.a.createElement(Fe,null),a&&r.a.createElement("div",{className:n.subscriptionsContainer},r.a.createElement(D.a,null),r.a.createElement(o.b,{to:"/subscriptions",className:n.subscriptionsLink},r.a.createElement(z.a,{className:n.subscriptionsIcon})," \u041f\u043e\u0434\u043f\u0438\u0441\u043a\u0438"),r.a.createElement(D.a,null)),a&&r.a.createElement(Je,{location:t.pathname}),!a&&r.a.createElement(o.b,{to:"/sign-in",className:n.authLink},r.a.createElement(T.a,{className:n.authButton,fullWidth:!0},r.a.createElement(Z.a,null),"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f")))})),qe=Object(B.a)((function(e){return Object(F.a)({root:{display:"flex",height:"100%"},buttonUserPosition:{position:"absolute",bottom:e.spacing(1),right:e.spacing(1),zIndex:1e3},zoomButtonsContainer:{display:"flex",flexDirection:"column",position:"absolute",top:e.spacing(1),right:e.spacing(1),zIndex:1e3},buttonZoomOut:{marginTop:e.spacing(1)}},e.breakpoints.up("md"),{buttonUserPosition:{bottom:e.spacing(3),right:e.spacing(3)},zoomButtonsContainer:{top:e.spacing(3),right:e.spacing(3)},buttonZoomOut:{marginTop:e.spacing(1)}})}));var Qe=Object(s.c)((function(e){var t=e.map;return{geodata:t.geodata,zoom:t.zoom}}))((function(e){var t=e.geodata,a=e.zoom,i=e.location,c=qe(),o=Object(n.useContext)(g),l=o.changeCoordinates,u=o.changeZoom,m=o.incrementZoom,p=o.decrementZoom;return r.a.createElement("div",{className:c.root},r.a.createElement(Ye,{location:i}),r.a.createElement(w.a,{color:"primary",size:"large",className:c.buttonUserPosition,disabled:null===t,onClick:function(){return Object(s.b)((function(){l(t.coords.latitude,t.coords.longitude),u(16)}))}},r.a.createElement(_.a,null)),r.a.createElement("div",{className:c.zoomButtonsContainer},r.a.createElement(S.a,{orientation:"vertical"},r.a.createElement(T.a,{variant:"contained",onClick:function(){17!==a&&m()}},r.a.createElement(A.a,null)),r.a.createElement(T.a,{variant:"contained",onClick:function(){5!==a&&p()}},r.a.createElement(L.a,null)))))})),Ve=a(199),Xe=a(209),$e=a(212),Ke=Object(B.a)((function(e){return Object(F.a)({root:{display:"flex",flexDirection:"column",minHeight:"100%",background:"linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)"},logoContainer:{display:"flex",justifyContent:"center",alignItems:"center",paddingTop:e.spacing(3),color:"#fff",textTransform:"uppercase"},logo:{marginLeft:e.spacing(1),height:30},paper:{marginTop:e.spacing(3),marginLeft:e.spacing(1),marginRight:e.spacing(1),paddingTop:e.spacing(1),paddingBottom:e.spacing(3)},title:{textAlign:"center",textTransform:"uppercase"},form:{paddingLeft:e.spacing(1),paddingRight:e.spacing(1)},textField:{marginTop:e.spacing(1),width:"100%"},button:{marginTop:e.spacing(3)},grayText:{marginTop:e.spacing(1),textAlign:"center",color:"#999"},link:{textDecoration:"none"},linkButton:{marginTop:e.spacing(1)},underContainer:{display:"flex",justifyContent:"center",marginTop:e.spacing(1)},backButton:{color:"#fff"}},e.breakpoints.up("sm"),{root:{alignItems:"center"},paper:{marginTop:e.spacing(10),width:e.breakpoints.width("sm")},form:{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)},underContainer:{justifyContent:"flex-end",width:e.breakpoints.width("sm")}})}));function et(e){var t=e.isAuth,a=e.snackbar,i=e.email,c=e.emailError,l=e.password,u=e.passwordError,m=e.isDisabled,p=Object(n.useContext)(g),f=p.changeField,b=p.validateSignIn,E=Ke(),h=function(e){var t=e.target;return Object(s.b)((function(){f(t.name,t.value),f(t.name+"Error","")}))};return r.a.createElement(n.Fragment,null,t&&r.a.createElement(d.a,{to:"/map"}),r.a.createElement("div",{className:E.root},r.a.createElement("div",{className:E.logoContainer},r.a.createElement(V.a,{variant:"h5"},"Crime Maps"),r.a.createElement("img",{src:le.a,alt:"",className:E.logo})),r.a.createElement(Ve.a,{className:E.paper},r.a.createElement(V.a,{variant:"h6",className:E.title},"\u0412\u0445\u043e\u0434"),r.a.createElement("div",{className:E.form},r.a.createElement(Xe.a,{name:"signInEmail",value:i,error:!!c,helperText:c,onChange:h,className:E.textField,label:"E-Mail"}),r.a.createElement(Xe.a,{name:"signInPassword",value:l,error:!!u,helperText:u,type:"password",onChange:h,className:E.textField,label:"\u041f\u0430\u0440\u043e\u043b\u044c"}),r.a.createElement(T.a,{color:"primary",variant:"contained",size:"large",className:E.button,fullWidth:!0,onClick:b,disabled:m},"\u0412\u043e\u0439\u0442\u0438"),r.a.createElement(V.a,{variant:"body2",className:E.grayText},"\u0438\u043b\u0438"),r.a.createElement(o.b,{to:"/sign-up",className:E.link},r.a.createElement(T.a,{color:"secondary",variant:"contained",className:E.linkButton,fullWidth:!0},"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f")))),r.a.createElement("div",{className:E.underContainer},r.a.createElement(o.b,{to:"/map",className:E.link},r.a.createElement(T.a,{className:E.backButton},"\u041d\u0430\u0437\u0430\u0434 \u043d\u0430 \u0441\u0430\u0439\u0442"))),r.a.createElement($e.a,{open:!!a,message:a,anchorOrigin:{vertical:"bottom",horizontal:"left"}})))}et.defaultProps={snackbar:"",email:"",emailError:"",password:"",passwordError:"",isDisabled:!1};var tt=Object(s.c)((function(e){var t=e.user,a=e.forms,n=e.system;return{isAuth:t.isAuth,email:a.signInEmail,emailError:a.signInEmailError,password:a.signInPassword,passwordError:a.signInPasswordError,isDisabled:a.signInButtonDisabled,snackbar:n.signInSnackbar}}))(et);var at,nt,rt=Object(s.c)(null,(function(e){return Object(m.b)({setLocation:f,setLocationError:b,changeCoordinates:E,changeZoom:h,incrementZoom:v,decrementZoom:y,changeNewsTypes:O,changeSystemField:x,changeField:N,validateSignIn:j},e)}))((function(e){var t=e.setLocation,a=e.setLocationError,n={changeCoordinates:e.changeCoordinates,changeZoom:e.changeZoom,incrementZoom:e.incrementZoom,decrementZoom:e.decrementZoom,changeNewsTypes:e.changeNewsTypes,changeSystemField:e.changeSystemField,changeField:e.changeField,validateSignIn:e.validateSignIn};return navigator.geolocation.getCurrentPosition(t,a),r.a.createElement(g.Provider,{value:n},r.a.createElement(p.a,null),r.a.createElement(d.d,null,r.a.createElement(d.b,{path:"/map",component:Qe}),r.a.createElement(d.b,{path:"/sign-in",component:tt})))})),it=a(116),ct=a(71),ot=+JSON.parse(localStorage.getItem("selectedCity")),st=JSON.parse(localStorage.getItem("citiesList"));if(ot&&st){var lt=st.find((function(e){return e.id===ot}));at=lt.lat,nt=lt.lng}else at=55.0415,nt=82.9346;var ut={geodata:null,geodataError:!1,lat:at,lng:nt,zoom:13,showTypes:Object(ct.a)(De)},mt={data:JSON.parse(localStorage.getItem("citiesList"))||[{_id:"5e8f0f4f8883b725cc275bad",id:1,title:"novosibirsk",name:"\u041d\u043e\u0432\u043e\u0441\u0438\u0431\u0438\u0440\u0441\u043a",lat:55.0415,lng:82.9346}],isSelectorOpen:!1,error:!1,loading:!0,selectedCityId:+localStorage.getItem("selectedCity")||1};var pt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:mt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD":return Object(G.a)({},e,{data:t.cities});case"MODAL":return Object(G.a)({},e,{isSelectorOpen:t.isOpen});case"ERROR":return Object(G.a)({},e,{error:t.error});case"LOADING":return Object(G.a)({},e,{loading:t.loading});case"CHANGE_SELECTED_CITY":return Object(G.a)({},e,{selectedCityId:t.id});default:return e}},dt=a(110),gt={isAuth:!!a.n(dt).a.get("token")},ft={},bt={},Et=Object(m.c)({map:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ut,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_LOCATION":return Object(G.a)({},e,{geodata:t.data});case"SET_LOCATION_ERROR":return Object(G.a)({},e,{error:!0});case"CHANGE_COORDINATES":return Object(G.a)({},e,{lat:t.lat,lng:t.lng});case"SET_ZOOM":return Object(G.a)({},e,{zoom:t.zoom});case"INCREMENT_ZOOM":return Object(G.a)({},e,{zoom:e.zoom+1});case"DECREMENT_ZOOM":return Object(G.a)({},e,{zoom:e.zoom-1});case"CHANGE_NEWS_TYPES":var a=e.showTypes.find((function(e){return e.type===t.typeNews}));if(a)return Object(G.a)({},e,{showTypes:e.showTypes.filter((function(e){return e.type!==t.typeNews}))});var n=De.find((function(e){return e.type===t.typeNews}));return Object(G.a)({},e,{showTypes:[].concat(Object(ct.a)(e.showTypes),[n])});default:return e}},cities:pt,user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:gt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_USER_DATA":return Object(G.a)({},e,{},t.data,{isAuth:!0});default:return e}},system:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ft,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE_SYSTEM_FIELD":return Object(G.a)({},e,Object(F.a)({},t.name,t.value));default:return e}},forms:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:bt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE_FIELD":return Object(G.a)({},e,Object(F.a)({},t.name,t.value));default:return e}}}),ht=a(22),vt=a.n(ht),yt=a(12),Ot=a(111),xt=a.n(Ot),Nt=/^\s*([0-9a-zA-Z]*)\s*$/,jt=vt.a.mark(Ct);function Ct(){var e,t,a,n,r,i;return vt.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,Object(yt.f)((function(e){var t=e.forms;return{email:t.signInEmail,emailError:t.signInEmailError,password:t.signInPassword,passwordError:t.signInPasswordError}}));case 2:if(e=c.sent,t=e.email,a=e.emailError,n=e.password,r=e.passwordError,i=!1,!a&&!r){c.next=11;break}return c.next=11,Object(yt.c)();case 11:if(xt.a.validate(t)){c.next=15;break}return c.next=14,Object(yt.e)(N("signInEmailError","\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0439 E-Mail."));case 14:i=!0;case 15:if(!(!n||!n.match(Nt)||n.length<6||n.length>16)){c.next=19;break}return c.next=18,Object(yt.e)(N("signInPasswordError","\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0439 \u043f\u0430\u0440\u043e\u043b\u044c."));case 18:i=!0;case 19:if(!i){c.next=24;break}return c.next=22,Object(yt.e)(I("\u0412\u0432\u0435\u0434\u0435\u043d\u044b \u043d\u0435\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435"));case 22:c.next=26;break;case 24:return c.next=26,Object(yt.e)(C(t,n));case 26:case"end":return c.stop()}}),jt)}var It=Ct,kt=a(112),wt=a(113),St=a(114),Tt=a.n(St),_t=function(){function e(){Object(kt.a)(this,e)}return Object(wt.a)(e,null,[{key:"signInRequest",value:function(e){return Tt.a.post("/api/auth/sign-in",e).then((function(e){return e})).catch((function(e){var t=e.response;return Object(G.a)({},t)}))}}]),e}(),At=vt.a.mark(Lt);function Lt(e){var t,a,n,r;return vt.a.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return t=e.email,a=e.password,n={email:t,password:a},i.prev=2,i.next=5,Object(yt.b)(_t.signInRequest,n);case 5:if(200!==(r=i.sent).status){i.next=11;break}return i.next=9,Object(yt.e)({type:"SIGN_IN_SUCCESS",data:r.data});case 9:i.next=13;break;case 11:return i.next=13,Object(yt.e)(I(r.data));case 13:i.next=18;break;case 15:i.prev=15,i.t0=i.catch(2),console.error(i.t0);case 18:case"end":return i.stop()}}),At,null,[[2,15]])}var Rt=Lt,Dt=vt.a.mark(zt);function zt(e){var t;return vt.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t=e.data,a.next=3,Object(yt.e)(N("signInButtonDisabled",!1));case 3:return a.next=5,Object(yt.e)(x("signInSnackbar",""));case 5:return a.next=7,Object(yt.e)(N("signInEmail",""));case 7:return a.next=9,Object(yt.e)(N("signInPassword",""));case 9:return a.next=11,Object(yt.e)(k(t));case 11:case"end":return a.stop()}}),Dt)}var Zt=zt,Ft=vt.a.mark(Gt);function Gt(e){var t;return vt.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t=e.message,a.next=3,Object(yt.e)(x("signInSnackbar",t));case 3:return a.next=5,Object(yt.d)(4e3);case 5:return a.next=7,Object(yt.e)(x("signInSnackbar",""));case 7:case"end":return a.stop()}}),Ft)}var Bt=Gt,Mt=vt.a.mark(Pt);function Pt(){return vt.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(yt.g)("SIGN_IN_VALIDATE",It);case 2:return e.next=4,Object(yt.g)("SIGN_IN_REQUEST",Rt);case 4:return e.next=6,Object(yt.g)("SIGN_IN_SUCCESS",Zt);case 6:return e.next=8,Object(yt.g)("SIGN_IN_FAIL",Bt);case 8:case"end":return e.stop()}}),Mt)}var Ht=vt.a.mark(Ut);function Ut(){return vt.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(yt.a)([Pt()]);case 2:case"end":return e.stop()}}),Ht)}var Wt=Ut,Jt=Object(it.a)(),Yt=Object(m.e)(Et,Object(m.a)(Jt));window.getState=Yt.getState,Jt.run(Wt);var qt=Yt,Qt=(a(152),Object(l.a)({palette:{primary:{main:"#f64b11"},secondary:{main:"#2196F3"}}}));c.a.render(r.a.createElement(o.a,null,r.a.createElement(s.a,{store:qt},r.a.createElement(u.a,{theme:Qt},r.a.createElement(rt,null)))),document.getElementById("root"))},63:function(e,t,a){e.exports=a.p+"static/media/logo_dark.6ea33164.svg"},89:function(e,t,a){e.exports=a.p+"static/media/novosibirsk.3223fede.jpg"},90:function(e,t,a){e.exports=a.p+"static/media/krasnoyarsk.aaf9cd5c.jpg"},94:function(e,t,a){e.exports=a.p+"static/media/novosibirsk.f2328259.svg"},95:function(e,t,a){e.exports=a.p+"static/media/krasnoyarsk.0bba5569.svg"},97:function(e,t,a){e.exports=a.p+"static/media/car_theft.06303f44.svg"},98:function(e,t,a){e.exports=a.p+"static/media/fire.547e02c8.svg"},99:function(e,t,a){e.exports=a.p+"static/media/accident.af983432.svg"}},[[124,1,2]]]);
//# sourceMappingURL=main.e9a21fe0.chunk.js.map