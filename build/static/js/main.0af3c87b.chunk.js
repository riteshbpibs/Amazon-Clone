(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{62:function(e,t,c){},63:function(e,t,c){},64:function(e,t,c){},65:function(e,t,c){},70:function(e,t,c){},73:function(e,t,c){},84:function(e,t,c){},85:function(e,t,c){},86:function(e,t,c){},87:function(e,t,c){},88:function(e,t,c){},89:function(e,t,c){},90:function(e,t,c){},92:function(e,t,c){"use strict";c.r(t);var s=c(4),n=c.n(s),i=c(31),a=c.n(i),r=(c(62),c(10)),o=c(9),d=(c(63),c(64),c(34)),l=(c(65),c(3)),j=Object(s.createContext)(),u=function(e){var t=e.initialState,c=e.reducer,n=e.children;return Object(l.jsx)(j.Provider,{value:Object(s.useReducer)(c,t),children:n})},b=function(){return Object(s.useContext)(j)},h=function(e){var t=e.id,c=e.title,s=e.price,n=e.image,i=e.description,a=b(),o=Object(r.a)(a,2);Object(d.a)(o[0]);var j=o[1];return Object(l.jsxs)("div",{className:"checkoutProduct",children:[Object(l.jsx)("img",{src:n,alt:""}),Object(l.jsxs)("div",{className:"checkoutProduct__info",children:[Object(l.jsx)("p",{className:"checkoutProduct__title",children:c}),Object(l.jsx)("p",{className:"checkoutProduct__description",children:i}),Object(l.jsxs)("p",{className:"checkoutProduct__price",children:[Object(l.jsx)("small",{children:"$"}),Object(l.jsx)("strong",{children:s})]}),Object(l.jsx)("button",{onClick:function(){j({type:"REMOVE_FROM_BASKET",id:t})},children:"Remove from basket"})]})]})},p=c(49),O=c.n(p),m=c(19),x=c(26),_=function(e){return null===e||void 0===e?void 0:e.reduce((function(e,t){return t.price+e}),0)},g=(c(70),function(){var e=Object(o.f)(),t=b(),c=Object(r.a)(t,2),s=c[0],n=s.basket,i=s.user;c[1];return Object(l.jsxs)("div",{className:"subtotal",children:[Object(l.jsx)(O.a,{renderText:function(e){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("p",{children:["Subtotal (",n.length," items): ",Object(l.jsx)("strong",{children:e})]}),Object(l.jsxs)("small",{className:"subtotal__gift",children:[Object(l.jsx)("input",{type:"checkbox"}),"This orders contains gift"]})]})},decimalScale:2,value:_(n),displayType:"text",thousandSeparator:!0,prefix:"$"}),i?0===n.length?Object(l.jsx)("button",{disabled:"true",style:{cursor:"not-allowed"},children:"Add items to basket"}):Object(l.jsx)("button",{onClick:function(t){return e.push("/payment")},children:"Proceed to Checkout"}):Object(l.jsx)("button",{disabled:"true",children:"Login to Checkout"})]})}),f=function(){var e=b(),t=Object(r.a)(e,2),c=t[0].basket;t[1];return Object(l.jsxs)("div",{className:"checkout",children:[Object(l.jsxs)("div",{className:"checkout__left",children:[Object(l.jsx)("img",{className:"checkout__ad",src:"images/4.jpg",alt:""}),Object(l.jsxs)("div",{children:[0==c.length?Object(l.jsx)("h2",{className:"checkout__title",children:"Your Shopping Basket is empty"}):Object(l.jsx)("h2",{className:"checkout__title",children:"Your Shopping Basket"}),null===c||void 0===c?void 0:c.map((function(e){var t=e.id,c=e.title,s=e.price,n=e.image,i=e.rating,a=e.description;return Object(l.jsx)(h,{id:t,title:c,price:s,image:n,rating:i,description:a})}))]})]}),Object(l.jsx)("div",{className:"checkout__right",children:Object(l.jsx)(g,{})})]})},v=c(54),N=c.n(v),k=c(53),y=c.n(k),w=c(55),S=c.n(w),C=(c(73),c(22)),E=c(51),A=c(52),T=Object(E.a)({apiKey:"AIzaSyCpon6ZLiE1JszO9bHbPtjirf5HFaI823Q",authDomain:"clone-6324a.firebaseapp.com",projectId:"clone-6324a",storageBucket:"clone-6324a.appspot.com",messagingSenderId:"372153872027",appId:"1:372153872027:web:6c0ce0e1c0f7f19c2d203e",measurementId:"G-7JZJZ9P6TX"}),P=Object(A.a)(T),L=function(){var e=b(),t=Object(r.a)(e,2),c=t[0],s=c.basket,n=c.user;t[1];return Object(l.jsxs)("header",{children:[Object(l.jsxs)("div",{className:"header",children:[Object(l.jsx)(C.b,{to:"/",children:Object(l.jsx)("img",{src:"http://pngimg.com/uploads/amazon/amazon_PNG11.png",className:"header__logo",alt:""})}),Object(l.jsxs)("div",{className:"header__search",children:[Object(l.jsx)("input",{type:"text"}),Object(l.jsx)(y.a,{className:"header__searchIcon"})]}),Object(l.jsxs)("div",{className:"header__nav",children:[Object(l.jsx)("div",{className:"header__option header_navCountry",children:Object(l.jsx)("img",{src:"https://www.wallpapertip.com/wmimgs/233-2330428_tiranga-wallpaper-galleries.jpg",alt:""})}),Object(l.jsx)(C.b,{to:!n&&"/login",children:Object(l.jsxs)("div",{className:"header__option",onClick:function(){n&&P.signOut()},children:[Object(l.jsxs)("span",{className:"header__optionLineOne",children:["Hello ",null===n||void 0===n?void 0:n.email]}),Object(l.jsx)("span",{className:"header__optionLineTwo",children:n?"Sign Out":"Sign In"})]})}),Object(l.jsxs)("div",{className:"header__option",children:[Object(l.jsx)("span",{className:"header__optionLineOne",children:"Return"}),Object(l.jsx)("span",{className:"header__optionLineTwo",children:"& Orders"})]}),Object(l.jsx)(C.b,{to:"/checkout",children:Object(l.jsxs)("div",{className:"header__optionBasket",children:[Object(l.jsx)(N.a,{}),Object(l.jsx)("span",{className:"header__optionLineTwo header__basketCount",children:null===s||void 0===s?void 0:s.length})]})})]})]}),Object(l.jsxs)("div",{className:"header__bottom",children:[Object(l.jsx)(S.a,{className:"header__bottomIcon"}),Object(l.jsx)("p",{className:"header__bottomLink",children:"Prime Video"}),Object(l.jsx)("p",{className:"header__bottomLink",children:"Amazon Buisness"}),Object(l.jsx)("p",{className:"header__bottomLink",children:"Today's Deals"}),Object(l.jsx)("p",{className:"header__bottomLink hidden",children:"Electronics"}),Object(l.jsx)("p",{className:"header__bottomLink hidden",children:"Food & Grocery"}),Object(l.jsx)("p",{className:"header__bottomLink hidden",children:"Buy Again"}),Object(l.jsx)("p",{className:"header__bottomLink hidden",children:"Shopper Toolkit"}),Object(l.jsx)("p",{className:"header__bottomLink hidden",children:"Health & Personal Care"})]})]})},B=c(0),R=c.n(B),F=c(2),I=(c(76),c(83),c(84),function(){return Object(l.jsx)("div",{className:"banner",children:Object(l.jsx)("img",{style:{width:"100%"},src:"images/1.jpg",alt:"caro1"})})}),D=(c(85),c(86),function(e){var t=e.id,c=e.title,s=e.description,n=e.category,i=e.image,a=e.price,o=b(),j=Object(r.a)(o,2);Object(d.a)(j[0]);var u=j[1];return Object(l.jsxs)("div",{className:"product",children:[Object(l.jsx)("p",{className:"product__category",children:n}),Object(l.jsx)("img",{className:"product__image",height:200,width:200,src:i,alt:""}),Object(l.jsx)("h4",{className:"product__title",children:c}),Object(l.jsx)("p",{className:"product__description",children:s}),Object(l.jsxs)("div",{className:"product__price",children:["$",a]}),Object(l.jsx)("button",{className:"product__button",onClick:function(){u({type:"ADD_TO_BASKET",item:{id:t,title:c,image:i,price:a,description:s}})},children:"Add to Basket"})]})}),z=(c(87),function(e){var t=e.products;return Object(l.jsxs)("div",{className:"productsFeed",children:[Object(l.jsx)("div",{className:"productsFeed__first",children:t.slice(0,4).map((function(e){var t=e.id,c=e.title,s=e.description,n=e.category,i=e.image,a=e.price;return Object(l.jsx)(D,{id:t,title:c,description:s,category:n,image:i,price:a},t)}))}),Object(l.jsx)("img",{className:"productFeed__image",src:"images/4.jpg",alt:""}),Object(l.jsx)("div",{className:"productsFeed__first",children:t.slice(4,7).map((function(e){var t=e.id,c=e.title,s=e.description,n=e.category,i=e.image,a=e.price;return Object(l.jsx)(D,{id:t,title:c,description:s,category:n,image:i,price:a},t)}))}),Object(l.jsx)("div",{className:"productsFeed__first",children:t.slice(7,11).map((function(e){var t=e.id,c=e.title,s=e.description,n=e.category,i=e.image,a=e.price;return Object(l.jsx)(D,{id:t,title:c,description:s,category:n,image:i,price:a},t)}))}),Object(l.jsx)("div",{className:"productsFeed__first",children:t.slice(11,13).map((function(e){var t=e.id,c=e.title,s=e.description,n=e.category,i=e.image,a=e.price;return Object(l.jsx)(D,{id:t,title:c,description:s,category:n,image:i,price:a},t)}))}),Object(l.jsx)("div",{className:"productsFeed__first",children:t.slice(13,17).map((function(e){var t=e.id,c=e.title,s=e.description,n=e.category,i=e.image,a=e.price;return Object(l.jsx)(D,{id:t,title:c,description:s,category:n,image:i,price:a},t)}))}),Object(l.jsx)("div",{className:"productsFeed__first",children:t.slice(17,20).map((function(e){var t=e.id,c=e.title,s=e.description,n=e.category,i=e.image,a=e.price;return Object(l.jsx)(D,{id:t,title:c,description:s,category:n,image:i,price:a},t)}))})]})}),J=function(){var e=Object(s.useState)([]),t=Object(r.a)(e,2),c=t[0],n=t[1];return Object(s.useEffect)((function(){(function(){var e=Object(F.a)(R.a.mark((function e(){return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://fakestoreapi.com/products").then((function(e){return e.json()})).then((function(e){return n(e)})).catch((function(e){return console.log(e)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(l.jsx)("div",{className:"home",children:Object(l.jsxs)("div",{className:"home__container",children:[Object(l.jsx)(I,{}),Object(l.jsx)(z,{products:c})]})})},H=(c(88),function(){var e=Object(o.f)(),t=b(),c=Object(r.a)(t,2),s=c[0].basket,n=c[1];return Object(l.jsx)("div",{className:"payment",children:Object(l.jsxs)("div",{className:"payment__container",children:[Object(l.jsxs)("h2",{children:["Checkout (",Object(l.jsxs)(C.b,{to:"/checkout",children:[null===s||void 0===s?void 0:s.length," items"]}),")"]}),Object(l.jsxs)("div",{className:"payment__section",children:[Object(l.jsx)("div",{className:"payment__title",children:Object(l.jsx)("h3",{children:"Delivery Address"})}),Object(l.jsx)("div",{className:"payment__address",children:Object(l.jsx)("p",{children:"123@example.com, React Lane, JavaScript Colony"})})]}),Object(l.jsx)("div",{className:"payment__section",children:Object(l.jsxs)("div",{className:"payment__items",children:[Object(l.jsx)("h3",{children:"Review items and delivery"}),s.map((function(e){return Object(l.jsx)(h,{id:e.id,title:e.title,image:e.image,price:e.price,description:e.description})}))]})}),Object(l.jsx)("div",{className:"payment__section",children:0==s.length?Object(l.jsx)("button",{disabled:"true",style:{cursor:"not-allowed"},children:"Place Order"}):Object(l.jsx)("button",{onClick:function(){n({type:"PLACE_ORDER",payload:""}),e.push("/success")},children:"Place Order"})})]})})}),K=(c(89),function(){var e=Object(o.f)();return Object(l.jsxs)("div",{className:"success",children:[Object(l.jsx)("h1",{children:"Order placed successfully"}),Object(l.jsx)("h4",{children:"Thank you for shopping at Amazon \ud83d\ude04"}),Object(l.jsx)("button",{onClick:function(t){return e.push("/")},children:"Go to Homepage"})]})});function M(){var e=Object(o.g)().pathname;return Object(s.useEffect)((function(){window.scrollTo(0,0)}),[e]),null}var G=c(32),U=(c(90),function(){var e=Object(o.f)(),t=Object(s.useState)(""),c=Object(r.a)(t,2),n=c[0],i=c[1],a=Object(s.useState)(""),d=Object(r.a)(a,2),j=d[0],u=d[1],b=function(){var t=Object(F.a)(R.a.mark((function t(c){return R.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c.preventDefault(),t.prev=1,t.next=4,Object(G.c)(P,n,j);case 4:e.push("/"),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(1),alert(t.t0.message);case 10:case"end":return t.stop()}}),t,null,[[1,7]])})));return function(e){return t.apply(this,arguments)}}(),h=function(){var t=Object(F.a)(R.a.mark((function t(c){return R.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c.preventDefault(),t.prev=1,t.next=4,Object(G.a)(P,n,j);case 4:e.push("/"),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(1),alert(t.t0.message);case 10:case"end":return t.stop()}}),t,null,[[1,7]])})));return function(e){return t.apply(this,arguments)}}();return Object(l.jsxs)("div",{className:"login",children:[Object(l.jsx)(C.b,{to:"/",children:Object(l.jsx)("img",{className:"login__logo",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"})}),Object(l.jsxs)("div",{className:"login__container",children:[Object(l.jsx)("h1",{children:"Sign in"}),Object(l.jsxs)("form",{children:[Object(l.jsx)("h5",{children:"E-mail"}),Object(l.jsx)("input",{value:n,onChange:function(e){return i(e.target.value)},type:"email"}),Object(l.jsx)("h5",{children:"Password"}),Object(l.jsx)("input",{value:j,onChange:function(e){return u(e.target.value)},type:"password"}),Object(l.jsx)("button",{onClick:b,type:"submit",className:"login__signInButton",children:"Sign in"})]}),Object(l.jsx)("p",{children:"By signing-in you agree to Amazon's Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice"}),Object(l.jsx)("button",{onClick:h,className:"login__registerButton",children:"Create your Amazon Account"})]})]})});var V=function(){var e=b(),t=Object(r.a)(e,2),c=(t[0].user,t[1]);return Object(s.useEffect)((function(){var e=P.onAuthStateChanged((function(e){c(e?{type:"SET_USER",user:e}:{type:"SET_USER",user:null})}));return function(){e()}}),[]),Object(l.jsxs)("div",{className:"app",children:[Object(l.jsx)(M,{}),Object(l.jsxs)(o.c,{children:[Object(l.jsxs)(o.a,{exact:!0,path:"/",children:[Object(l.jsx)(L,{}),Object(l.jsx)(J,{})]}),Object(l.jsx)(o.a,{path:"/login",children:Object(l.jsx)(U,{})}),Object(l.jsxs)(o.a,{exact:!0,path:"/checkout",children:[Object(l.jsx)(L,{}),Object(l.jsx)(f,{})]}),Object(l.jsxs)(o.a,{exact:!0,path:"/payment",children:[Object(l.jsx)(L,{}),Object(l.jsx)(H,{})]}),Object(l.jsxs)(o.a,{exact:!0,path:"/success",children:[Object(l.jsx)(L,{}),Object(l.jsx)(K,{})]})]})]})};a.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(C.a,{children:Object(l.jsx)(u,{initialState:{basket:[],user:null},reducer:function(e,t){switch(console.log(t),t.type){case"SET_USER":return Object(x.a)(Object(x.a)({},e),{},{user:t.user});case"ADD_TO_BASKET":return Object(x.a)(Object(x.a)({},e),{},{basket:[].concat(Object(m.a)(e.basket),[t.item])});case"REMOVE_FROM_BASKET":var c=Object(m.a)(e.basket),s=e.basket.findIndex((function(e){return e.id===t.id}));return s>=0?c.splice(s,1):window.alert("Cant remove product"),Object(x.a)(Object(x.a)({},e),{},{basket:c});case"PLACE_ORDER":return Object(x.a)(Object(x.a)({},e),{},{basket:[]})}},children:Object(l.jsx)(V,{})})})}),document.getElementById("root"))}},[[92,1,2]]]);
//# sourceMappingURL=main.0af3c87b.chunk.js.map