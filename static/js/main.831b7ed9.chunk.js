(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{33:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n.n(a),i=n(25),c=n.n(i),o=n(8),r=(n(33),n(27)),l=n(3),u=n(2),p=n(0);var d=function(e){return Object(p.jsxs)("header",{className:"header",children:[Object(p.jsx)("div",{className:"header__logo"}),Object(p.jsxs)(u.d,{children:[Object(p.jsx)(u.b,{exact:!0,path:"/mesto-react",children:Object(p.jsxs)("nav",{className:"menu",children:[Object(p.jsx)("p",{className:"menu__item",children:e.Email}),Object(p.jsx)("button",{className:"menu__logout",onClick:e.Relogin,children:"\u0412\u044b\u0439\u0442\u0438"})]})}),Object(p.jsx)(u.b,{path:"/sign-up",children:Object(p.jsx)(o.b,{className:"menu__auth-link",to:"sign-in",children:"\u0412\u043e\u0439\u0442\u0438"})}),Object(p.jsx)(u.b,{path:"/sign-in",children:Object(p.jsx)(o.b,{className:"menu__auth-link",to:"sign-up",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"})})]})]})},h=n(16),j=n.p+"static/media/edit-botton.f0dd9c51.svg",m=n.p+"static/media/add-botton.bed8c136.svg",b=n.p+"static/media/line.90aa511c.gif",f=s.a.createContext(),O={name:"",about:"",avatar:b};var _=function(e){var t=e.onCardClick,n=e.link,a=e.name,i=e.likes,c=e.onCardLike,o=e._id,r=e.onCardDelete,l=e.owner,u=s.a.useContext(f),d=l._id===u._id,h="".concat(d?"element__btn_delete-active opacity-link":"element__btn opacity-link"),j=i.some((function(e){return e._id===u._id})),m="".concat(j?"element__likes_active element__likes_like-btn":"element__likes element__likes_like-btn");return Object(p.jsx)("div",{className:"elements__box",children:Object(p.jsxs)("div",{className:"element",children:[Object(p.jsx)("img",{className:"element__image",src:n,onClick:function(){t({img:n,title:a})},alt:a}),Object(p.jsx)("div",{className:"element__btn_delete",children:Object(p.jsx)("button",{className:h,type:"button",onClick:function(){r(o)},children:Object(p.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAUCAYAAACAl21KAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAC4SURBVHgBrZQNEcIwDEa/cAhAwiQgAQlIwAGWkDAHVMIkxMGGgpJw7dH1st013btbL2uTt6z7ATaIMd7lmOOa21b+ORUNxpoWXaq5p+RynUhETLLwTkU9BBXNxpVb+XU0SPBAHyPpKLIr/F0tskcTkugV/YzqOGUr/HApYvhZStFhHR0mmuBndWs9sA6Uz/Q5woG8Q1R3xGiHc1CKPBvOlojRQSn6oB22RAHthBxQObv3KzX4f/XCF51ui58EdOBbAAAAAElFTkSuQmCC",width:"18",height:"17",alt:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"})})}),Object(p.jsxs)("div",{className:"element__info",children:[Object(p.jsx)("h3",{className:"element__title",children:a}),Object(p.jsxs)("div",{className:"element__likes",children:[Object(p.jsx)("button",{type:"button",className:m,onClick:function(){c(i,o)}}),Object(p.jsx)("p",{className:"element__likes element__likes_like-count",children:i.length})]})]})]})})};var g=function(e){var t=e.onEditAvatar,n=e.onAddPlace,a=e.onEditProfile,i=e.onCardClick,c=e.cards,o=e.onCardLike,r=e.onCardDelete,l=s.a.useContext(f);return Object(p.jsxs)("main",{className:"content",children:[Object(p.jsxs)("section",{className:"profile",children:[Object(p.jsx)("button",{className:"profile__botton",type:"button",onClick:t,children:Object(p.jsx)("img",{className:"profile__avatar opacity-link opacity-link_avatar",src:l.avatar,alt:"\u0430\u0432\u0430\u0442\u0430\u0440\u043a\u0430"})}),Object(p.jsxs)("div",{className:"profile__profile-info",children:[Object(p.jsxs)("div",{className:"profile__edit-name",children:[Object(p.jsx)("h1",{className:"profile__name",children:l.name}),Object(p.jsx)("button",{type:"button",className:"profile__edit-botton opacity-link",onClick:a,children:Object(p.jsx)("img",{src:j,alt:"\u043a\u043d\u043e\u043f\u043a\u0430 \u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f"})})]}),Object(p.jsx)("h2",{className:"profile__profession",children:l.about})]}),Object(p.jsx)("button",{type:"button",className:"profile__add-botton opacity-link",onClick:n,children:Object(p.jsx)("img",{src:m,alt:"\u043a\u043d\u043e\u043f\u043a\u0430 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u044f"})})]}),Object(p.jsx)("section",{className:"elements",children:c.map((function(e){return Object(p.jsx)(_,Object(h.a)(Object(h.a)({onCardClick:i},e),{},{onCardLike:o,onCardDelete:r}),e._id)}))})]})},x=(document.querySelector("#popupTitle"),(new Date).getFullYear());document.querySelector("#firstName"),document.querySelector("#lastName");var v=function(){return Object(p.jsx)("footer",{className:"footer",children:Object(p.jsxs)("p",{className:"footer__copyright",children:["\xa9 ",x," Mesto Russia"]})})},k=n(13),C=n(9),N=n(10),A=n(11),y=n(19),S=n(18),w=function(e){Object(y.a)(n,e);var t=Object(S.a)(n);function n(e){var a;return Object(C.a)(this,n),(a=t.call(this,e)).state={email:"",password:""},a.onLogin=e.onLogin,a.handleChange=a.handleChange.bind(Object(A.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(A.a)(a)),a}return Object(N.a)(n,[{key:"handleChange",value:function(e){var t=e.target,n=t.name,a=t.value;this.setState(Object(k.a)({},n,a))}},{key:"handleSubmit",value:function(e){e.preventDefault();var t=this.state,n=t.password,a=t.email;this.onLogin({password:n,email:a})}},{key:"render",value:function(){return Object(p.jsxs)("div",{className:"login",children:[Object(p.jsx)("h2",{className:"login__title",children:"\u0412\u0445\u043e\u0434"}),Object(p.jsxs)("form",{onSubmit:this.handleSubmit,className:"login__form",children:[Object(p.jsx)("input",{name:"email",type:"email",value:this.state.email,onChange:this.handleChange,className:"login__input",placeholder:"Email"}),Object(p.jsx)("input",{name:"password",type:"password",value:this.state.password,onChange:this.handleChange,className:"login__input",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c"}),Object(p.jsx)("button",{type:"submit",className:"login__submit",children:"\u0412\u0445\u043e\u0434"})]})]})}}]),n}(s.a.Component),T=n.p+"static/media/Close-Icon.628241e5.svg",R=function(e){var t=e.name,n=e.title,a=e.children,s=e.isOpen,i=e.onClose,c=e.onSubmit,o=e.buttonText;return Object(p.jsx)("div",{className:"popup".concat(s?" popup_is-opened":""),name:t,children:Object(p.jsxs)("div",{className:"popup__container",children:[Object(p.jsx)("button",{type:"button",className:"popup__close opacity-link",children:Object(p.jsx)("img",{src:T,onClick:i,alt:"\u043a\u043d\u043e\u043f\u043a\u0430 \u0437\u0430\u043a\u0440\u044b\u0442\u0438\u044f"})}),Object(p.jsxs)("form",{className:"popup__title popup__title_not_margin",noValidate:!0,children:[Object(p.jsx)("h2",{className:"popup__title",children:n}),a,Object(p.jsx)("button",{onClick:c,type:"submit",className:"popup__submit",children:o})]})]})})};var D=function(e){return Object(p.jsx)("div",{className:"popup".concat(e.isOpen?" popup_is-opened":""),id:e.name,children:Object(p.jsxs)("div",{className:"popup__image-container",children:[Object(p.jsx)("button",{type:"button",className:"popup__close opacity-link",children:Object(p.jsx)("img",{src:T,onClick:e.onClose,alt:"\u043a\u043d\u043e\u043f\u043a\u0430 \u0437\u0430\u043a\u0440\u044b\u0442\u0438\u044f"})}),Object(p.jsx)("img",{className:"popup__image",src:e.card.img,alt:e.card.title}),Object(p.jsx)("h2",{className:"popup__title",id:"popupTitle",children:e.card.title})]})})},L=new(function(){function e(t){var n=t.url,a=t.token;Object(C.a)(this,e),this.url=n,this.token=a}return Object(N.a)(e,[{key:"getAllPromise",value:function(){return Promise.all([this.getUserInfo(),this.getCards()])}},{key:"getUserInfo",value:function(){var e=this;return fetch("".concat(this.url,"users/me"),{headers:this.token}).then((function(t){return e._getResponseData(t)}))}},{key:"getCards",value:function(){var e=this;return fetch("".concat(this.url,"cards"),{headers:this.token}).then((function(t){return e._getResponseData(t)}))}},{key:"changeLikeCardStatus",value:function(e,t){var n=this;return!0===t?fetch("".concat(this.url,"cards/likes/").concat(e),{method:"PUT",headers:this.token}).then((function(e){return n._getResponseData(e)})):fetch("".concat(this.url,"cards/likes/").concat(e),{method:"DELETE",headers:this.token}).then((function(e){return n._getResponseData(e)}))}},{key:"setUserInfo",value:function(e){var t=this;return fetch("".concat(this.url,"users/me"),{method:"PATCH",headers:this.token,body:JSON.stringify(e)}).then((function(e){return t._getResponseData(e)}))}},{key:"setUserAvatar",value:function(e){var t=this;return fetch("".concat(this.url,"users/me/avatar"),{method:"PATCH",headers:this.token,body:JSON.stringify(e)}).then((function(e){return t._getResponseData(e)}))}},{key:"delmyCard",value:function(e){var t=this;return fetch("".concat(this.url,"cards/").concat(e),{method:"DELETE",headers:this.token}).then((function(e){return t._getResponseData(e)}))}},{key:"setAddPlase",value:function(e){var t=this;return fetch("".concat(this.url,"cards/"),{method:"POST",headers:this.token,body:JSON.stringify(e)}).then((function(e){return t._getResponseData(e)}))}},{key:"_getResponseData",value:function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}}]),e}())({url:"https://mesto.nomoreparties.co/v1/cohort-24/",token:{authorization:"b94e78d1-b2d6-4481-aa74-fc7e4dc8c239","Content-Type":"application/json"}});var E=function(e){var t=e.isOpen,n=e.onClose,a=e.onUpdateUser,i=s.a.useContext(f),c=s.a.useState(i.name),o=Object(l.a)(c,2),r=o[0],u=o[1],d=s.a.useState(i.about),h=Object(l.a)(d,2),j=h[0],m=h[1];return s.a.useEffect((function(){u(i.name),m(i.about)}),[i]),Object(p.jsxs)(R,{buttonText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",onClose:n,isOpen:t,setName:u,title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",name:"popupAutor",onSubmit:function(e){e.preventDefault(),a({name:r,about:j})},children:[Object(p.jsx)("input",{value:r,onChange:function(e){e.preventDefault(),u(e.target.value)},name:"firstName",id:"firstName",type:"text",className:"popup__input",minLength:"2",maxLength:"40",required:!0,placeholder:"\u0418\u043c\u044f"}),Object(p.jsx)("span",{id:"firstName-error",className:"popup__error"}),Object(p.jsx)("input",{value:j,onChange:function(e){e.preventDefault(),m(e.target.value)},name:"lastName",id:"lastName",type:"text",className:"popup__input",minLength:"2",maxLength:"200",required:!0,placeholder:"\u041f\u0440\u043e\u0444\u0435\u0441\u0441\u0438\u044f"}),Object(p.jsx)("span",{id:"lastName-error",className:"popup__error"})]})};var U=function(e){var t=e.isOpen,n=e.onClose,a=e.onUpdateAvatar,i=s.a.useRef();return s.a.useEffect((function(){!0===t&&(i.current.value="")}),[t]),Object(p.jsxs)(R,{buttonText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",onClose:n,isOpen:t,onSubmit:function(e){e.preventDefault(),a({avatar:i.current.value})},title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",name:"popupAvatar",children:[Object(p.jsx)("input",{ref:i,name:"link",id:"AvatarLink",type:"url",className:"popup__input",required:!0,placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443"}),Object(p.jsx)("span",{id:"AvatarLink-error",className:"popup__error"})]})};var I=function(e){var t=e.isOpen,n=e.onClose,a=e.onUpdateCard,i=s.a.useState(""),c=Object(l.a)(i,2),o=c[0],r=c[1],u=s.a.useState(""),d=Object(l.a)(u,2),h=d[0],j=d[1];return s.a.useEffect((function(){!0===t&&(r(""),j(""))}),[t]),Object(p.jsxs)(R,{buttonText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",name:"popupCard",onClose:n,isOpen:t,onSubmit:function(e){e.preventDefault(),a({name:h,link:o})},children:[Object(p.jsx)("input",{value:h,onChange:function(e){j(e.target.value)},type:"text",className:"popup__input",minLength:"2",maxLength:"30",required:!0,placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",id:"inputTitle"}),Object(p.jsx)("span",{id:"inputTitle-error",className:"popup__error"}),Object(p.jsx)("input",{value:o,onChange:function(e){r(e.target.value)},id:"inputLink",type:"url",className:"popup__input",required:!0,placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443"}),Object(p.jsx)("span",{id:"inputLink-error",className:"popup__error"})]})},P=function(e){Object(y.a)(n,e);var t=Object(S.a)(n);function n(e){var a;return Object(C.a)(this,n),(a=t.call(this,e)).state={email:"",password:""},a.onRegister=e.onRegister,a.handleChange=a.handleChange.bind(Object(A.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(A.a)(a)),a}return Object(N.a)(n,[{key:"handleChange",value:function(e){var t=e.target,n=t.name,a=t.value;this.setState(Object(k.a)({},n,a))}},{key:"handleSubmit",value:function(e){e.preventDefault();var t=this.state,n=t.password,a=t.email;this.onRegister({password:n,email:a})}},{key:"render",value:function(){return Object(p.jsxs)("div",{className:"login",children:[Object(p.jsx)("h2",{className:"login__title",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}),Object(p.jsxs)("form",{onSubmit:this.handleSubmit,className:"login__form",children:[Object(p.jsx)("input",{id:"email",name:"email",type:"email",value:this.state.email,onChange:this.handleChange,className:"login__input",placeholder:"Email"}),Object(p.jsx)("input",{id:"password",name:"password",type:"password",value:this.state.password,onChange:this.handleChange,className:"login__input",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c"}),Object(p.jsx)("button",{type:"submit",className:"login__submit",children:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"})]}),Object(p.jsxs)("p",{className:"login__register",children:["\u0423\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b?"," ",Object(p.jsx)(o.b,{className:"login__register",to:"sign-in",children:"\u0412\u043e\u0439\u0442\u0438"})]})]})}}]),n}(s.a.Component),B=n(28),Q=["component"],q=function(e){var t=e.component,n=Object(B.a)(e,Q);return Object(p.jsx)(u.b,{children:function(){return n.loggedIn?Object(p.jsx)(t,Object(h.a)({},n)):Object(p.jsx)(u.a,{to:"./sign-up"})}})};var z=function(e){return Object(p.jsx)("div",{className:"popup".concat(e.isOpen?" popup_is-opened":""),id:e.name,children:Object(p.jsxs)("div",{className:"popup__register",children:[Object(p.jsx)("button",{type:"button",className:"popup__close opacity-link",children:Object(p.jsx)("img",{src:T,onClick:e.onClose,alt:"\u043a\u043d\u043e\u043f\u043a\u0430 \u0437\u0430\u043a\u0440\u044b\u0442\u0438\u044f"})}),Object(p.jsx)("img",{className:"popup__image popup__image_register",alt:e.isInfo.text,src:e.isInfo.img}),Object(p.jsx)("h2",{className:"popup__title popup__title_register",children:e.isInfo.text})]})})},H=new(function(){function e(t){var n=t.url;Object(C.a)(this,e),this.url=n}return Object(N.a)(e,[{key:"register",value:function(e){var t=this;return fetch("".concat(this.url,"/signup"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:e.password,email:e.email})}).then((function(e){return t._getResponseData(e)}))}},{key:"_getResponseData",value:function(e){return e.ok?e.json({data:{_id:"",email:""}}):Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}},{key:"authorize",value:function(e){var t=this;return fetch("".concat(this.url,"/signin"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({password:e.password,email:e.email})}).then((function(e){return t._getResponseData(e)})).then((function(e){if(e.token)return localStorage.setItem("token",e.token),e}))}},{key:"authorizeToken",value:function(e){var t=this;return fetch("".concat(this.url,"/users/me"),{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(e)}}).then((function(e){return t._getResponseData(e)}))}}]),e}())({url:"https://auth.nomoreparties.co"}),F=n.p+"static/media/ok.1b6082f8.svg",G=n.p+"static/media/error.df8eddf6.svg";var J=function(){var e=s.a.useState(!1),t=Object(l.a)(e,2),n=t[0],a=t[1],i=s.a.useState(!1),c=Object(l.a)(i,2),o=c[0],h=c[1],j=s.a.useState(!1),m=Object(l.a)(j,2),b=m[0],_=m[1],x=s.a.useState(!1),k=Object(l.a)(x,2),C=k[0],N=k[1],A=s.a.useState(!1),y=Object(l.a)(A,2),S=y[0],T=y[1],B=s.a.useState(!1),Q=Object(l.a)(B,2),J=Q[0],X=(Q[1],s.a.useState({img:null,title:null})),M=Object(l.a)(X,2),V=M[0],Y=M[1],K=s.a.useState({text:null,img:null}),W=Object(l.a)(K,2),Z=W[0],$=W[1],ee=s.a.useState(O),te=Object(l.a)(ee,2),ne=te[0],ae=te[1],se=s.a.useState(),ie=Object(l.a)(se,2),ce=ie[0],oe=ie[1],re=s.a.useState([]),le=Object(l.a)(re,2),ue=le[0],pe=le[1],de=s.a.useState(!1),he=Object(l.a)(de,2),je=he[0],me=he[1],be=Object(u.g)();s.a.useEffect((function(){var e=localStorage.getItem("token");H.authorizeToken(e).then((function(e){e&&(oe(e.data.email),me(!0),be.push("/mesto-react"))})).catch((function(){return be.push("/sign-in")})),!0===je&&L.getAllPromise().then((function(e){var t=Object(l.a)(e,2),n=t[0],a=t[1];ae(n),pe(a)})).catch((function(e){return alert(e)}))}),[je]);var fe=function(){_(!1),a(!1),h(!1),N(!1),T(!1),!0===J&&be.push("/sign-in"),Y({img:null,title:null}),$({text:null,img:null})};return Object(p.jsx)("div",{className:"page",children:Object(p.jsxs)(f.Provider,{value:ne,children:[Object(p.jsx)(d,{Relogin:function(){localStorage.removeItem("token"),be.push("/sing-in"),me(!1)},Email:ce}),je,Object(p.jsxs)(u.d,{children:[Object(p.jsx)(q,{path:"/mesto-react",loggedIn:je,component:g,onEditProfile:function(){a(!0)},onAddPlace:function(){h(!0)},onEditAvatar:function(){_(!0)},onCardClick:function(e){Y({img:e.img,title:e.title}),N(!0)},cards:ue,onCardLike:function(e,t){var n=e.some((function(e){return e._id===ne._id}));L.changeLikeCardStatus(t,!n).then((function(e){pe((function(n){return n.map((function(n){return n._id===t?e:n}))}))})).catch((function(e){return alert(e)}))},onCardDelete:function(e){L.delmyCard(e).then((function(){pe((function(t){return t.map((function(e){return e})).filter((function(t){return t._id!==e}))}))})).catch((function(e){return alert(e)}))}}),Object(p.jsxs)(u.b,{path:"/sign-in",children:[Object(p.jsx)(w,{onLogin:function(e){e&&H.authorize(e).then((function(e){e.token&&(me(!0),be.push("/mesto-react"))})).catch((function(){me(!1),T(!0),$({text:"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a! \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0451 \u0440\u0430\u0437.",img:G})}))}}),Object(p.jsx)(z,{isOpen:S,isInfo:Z,onClose:fe})]}),Object(p.jsxs)(u.b,{path:"/sign-up",children:[Object(p.jsx)(P,{onRegister:function(e){H.register(e).then((function(){$({text:"\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043b\u0438\u0441\u044c!",img:F}),T(!0),be.push("/sign-in")})).catch((function(){$({text:"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a! \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0451 \u0440\u0430\u0437.",img:G}),T(!0)}))}}),Object(p.jsx)(z,{isOpen:S,isInfo:Z,onClose:fe})]}),Object(p.jsx)(u.b,{exact:!0,path:"/",children:je?Object(p.jsx)(u.a,{to:"/"}):Object(p.jsx)(u.a,{to:"/sign-up"})})]}),Object(p.jsxs)(u.b,{path:"/mesto-react",children:[Object(p.jsx)(v,{}),Object(p.jsx)(E,{isOpen:n,onClose:fe,onUpdateUser:function(e){L.setUserInfo(e).then((function(e){ae(e),a(!1)})).catch((function(e){return alert(e)}))}}),Object(p.jsx)(I,{isOpen:o,onClose:fe,onUpdateCard:function(e){L.setAddPlase(e).then((function(e){pe([e].concat(Object(r.a)(ue))),h(!1)})).catch((function(e){return alert(e)}))}}),Object(p.jsx)(U,{isOpen:b,onClose:fe,onUpdateAvatar:function(e){L.setUserAvatar(e).then((function(e){ae(e),_(!1)})).catch((function(e){return alert(e)}))}}),Object(p.jsx)(R,{title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",name:"popup__form-avatar",buttonText:"\u0414\u0430"}),Object(p.jsx)(D,{name:"popupImage",onClose:fe,card:V,isOpen:C})]})]})})},X=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,41)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,i=t.getLCP,c=t.getTTFB;n(e),a(e),s(e),i(e),c(e)}))};c.a.render(Object(p.jsx)(s.a.StrictMode,{children:Object(p.jsx)(o.a,{children:Object(p.jsx)(J,{})})}),document.getElementById("root")),X()}},[[40,1,2]]]);
//# sourceMappingURL=main.831b7ed9.chunk.js.map