(this["webpackJsonpspy-game-web"]=this["webpackJsonpspy-game-web"]||[]).push([[0],{246:function(e,t,n){},247:function(e,t,n){},270:function(e,t){},432:function(e,t,n){},433:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),s=n(28),i=n.n(s),r=(n(246),n(247),n(37)),j=n(30),l=n(3),o=function(e){return Object(l.jsxs)("div",{className:"df fdc",children:[Object(l.jsx)("h1",{children:"\u0428\u043f\u0438\u043e\u043d"}),Object(l.jsx)("ul",{mode:"inline",className:"main-view",children:e.menuItems.map((function(e){return Object(l.jsx)("li",{children:Object(l.jsx)(r.b,{to:e.path,children:e.name})},e.id)}))})]})},d=n(123),b=n(46),O=n(58),h=n(111),u=n(240),m=n(442),x=n(447),p=n(452),f=n(219),g=n.n(f),v=n(65),N=n.n(v),y=n(81),C=n(89),w=n(171),_=n.n(w),k=n(76),S=n.n(k),I=function(){return _.a.get("https://api.jsonbin.io/v3/b/631f1e945c146d63ca98ad76/latest").then((function(e){return e.data.record}))},M=function(){var e=Object(C.a)(N.a.mark((function e(t){var n,c;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I();case 2:n=e.sent,c=n.categories;try{_.a.put("https://api.jsonbin.io/v3/b/631f1e945c146d63ca98ad76",{categories:[].concat(Object(y.a)(c),[Object(b.a)({id:S()()},t)])})}catch(a){console.error(a)}case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),F=n(241),T={main:"/",newGame:"/new-game",rules:"/rules",roleManaging:"/role-managing",game:"/game",addCategory:"/add-category",categories:"/categories",winner:"/winner"},E=n(453),R=h.a.Option,G={id:1,playersCont:4,spyesCount:1,isTimerNeeded:!0,timer:5,isFirstMemberChoiseNeeded:!1,isRolesNeeded:!1,categories:[],isHelpQuestionsNeeded:!1},z=function(e){var t,n,a=g()(I,[]),s=Object(O.a)(a,1)[0],i=Object(c.useState)(G),o=Object(O.a)(i,2),f=o[0],v=o[1],N=Object(j.f)(),y=function(e){return function(t){v((function(){return Object(b.a)(Object(b.a)({},f),{},Object(d.a)({},e,t))}))}},C=Object(c.useMemo)((function(){return!f.categories.length}),[f.categories]);return Object(l.jsxs)("div",{className:"df fdc",children:[Object(l.jsx)(u.a,{type:"link",className:"btn-shadowed",children:Object(l.jsx)(r.b,{to:T.main,children:Object(l.jsx)(E.a,{})})}),Object(l.jsx)("h1",{children:"\u041d\u043e\u0432\u0430\u044f \u0438\u0433\u0440\u0430"}),Object(l.jsxs)(m.a,{layout:"horizontal",onFinish:(n=f,function(){e.gameStore.setGameOptions(n),N.push(T.roleManaging)}),children:[Object(l.jsx)(m.a.Item,{label:"\u0418\u0433\u0440\u043e\u043a\u043e\u0432",children:Object(l.jsx)(x.a,{min:3,defaultValue:f.playersCont,onChange:y("playersCont")})}),Object(l.jsx)(m.a.Item,{label:"\u0428\u043f\u0438\u043e\u043d\u043e\u0432",children:Object(l.jsx)(x.a,{min:1,defaultValue:f.spyesCount,onChange:y("spyesCount")})}),Object(l.jsx)(m.a.Item,{label:"\u041f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c \u0438\u0433\u0440\u044b",children:Object(l.jsx)(x.a,{min:1,defaultValue:f.timer,onChange:y("timer")})}),Object(l.jsx)(m.a.Item,{label:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0442\u0430\u0439\u043c\u0435\u0440",children:Object(l.jsx)(p.a,{disabled:!0,checked:f.isTimerNeeded,onChange:y("isTimerNeeded")})}),Object(l.jsx)(m.a.Item,{label:"\u0412\u044b\u0431\u043e\u0440 \u043f\u0435\u0440\u0432\u043e\u0433\u043e \u0438\u0433\u0440\u043e\u043a\u0430",children:Object(l.jsx)(p.a,{disabled:!0,checked:f.isFirstMemberChoiseNeeded,onChange:y("isFirstMemberChoiseNeeded")})}),Object(l.jsx)(m.a.Item,{label:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0440\u043e\u043b\u0438",children:Object(l.jsx)(p.a,{disabled:!0,checked:f.isRolesNeeded,onChange:y("isRolesNeeded")})}),Object(l.jsx)(m.a.Item,{label:"\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0438",required:!0,children:Object(l.jsx)(h.a,{mode:"multiple",onChange:(t=Object(F.a)([],["categories"],s),function(e){return v((function(){return Object(b.a)(Object(b.a)({},f),{},{categories:t.filter((function(t){return e.includes(String(t.id))}))})}))}),className:"new-game__selector",children:Object(F.a)([],["categories"],s).map((function(e){return Object(l.jsx)(R,{children:e.name},e.id)}))})}),Object(l.jsx)(m.a.Item,{label:"\u041f\u043e\u0434\u0441\u043a\u0430\u0437\u044b\u0432\u0430\u0442\u044c \u0432\u043e\u043f\u0440\u043e\u0441\u044b",children:Object(l.jsx)(p.a,{disabled:!0,checked:f.isHelpQuestionsNeeded,onChange:y("isHelpQuestionsNeeded")})}),Object(l.jsx)(m.a.Item,{children:Object(l.jsx)(u.a,{htmlType:"submit",className:"new-game__submit",disabled:C,children:"\u041d\u0430\u0447\u0430\u0442\u044c \u0438\u0433\u0440\u0443"})})]})]})},H=n(441),L=n(435),Q=n(446),W=n(449),B=n(436),D=n(445),V=n(437),A=n(450),J=n(438),P=n(451),q=n(439),U=n(121),K=n(14),X=n(230),Y=n.n(X),Z=n(231),$=n.n(Z),ee=H.a.Meta,te=Object(L.a)((function(e,t,n,c){return Object(Q.a)(Object(W.a)(Object(B.a)(Object(D.a)("id",n),Object(V.a)(e,t))))(c)})),ne=Object(U.a)((function(e){var t=Object(K.p)(e.gameStore.options);console.log(t);var n=t.categories.map((function(e){return e.locations})).flat(),a=Object(c.useState)(Math.round(Math.random()*n.at(-1))),s=Object(O.a)(a,1)[0],i=Object(c.useMemo)((function(){return n[s]}),[n,s]);Object(c.useEffect)((function(){return console.log(s),i&&e.gameStore.setLocation(i.name)}),[i]);var r=Object(c.useState)(Y()([].concat(Object(y.a)(Object(A.a)(null,t.playersCont-t.spyesCount).map((function(){return{id:S()(),value:Object(J.a)("-","name",i),type:"location",description:Object(F.a)("Default description",["description","location"],t),isOpened:!1}}))),Object(y.a)(Object(A.a)(null,t.spyesCount).map((function(){return{id:S()(),type:"spy",description:Object(F.a)("Default description",["description","spy"],t),isOpened:!1}})))))),o=Object(O.a)(r,2),d=o[0],b=o[1],h=Object(j.f)(),u=function(e){return Object(Q.a)(Object(P.a)(Object(D.a)("id",e)),Object(q.a)("isOpened"))(d)?b((function(){return function(e){return d.filter((function(t){return t.id!==e}))}(e)})):b((function(){return te("isOpened",!d.find((function(t){return t.id===e})).isOpened,e,d)}))};Object(c.useEffect)((function(){d.length||h.push(T.game)}),[d]);var m=Object(c.useCallback)((function(e){return $()("role-managing__card",e?"role-managing__card--opened":"","card")}),[]);return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("div",{className:"role-managing__card-wrapper",children:d.map((function(e,t){return Object(l.jsx)(H.a,{onClick:function(){return t=e.id,void u(t);var t},className:m(e.isOpened),style:{left:3*t,top:3*t},children:e.isOpened?Object(l.jsx)(ee,{title:"location"===e.type?e.value:"\u0412\u044b \u0448\u043f\u0438\u043e\u043d",description:e.description,className:"role-managing__meta"}):"\u041f\u043e\u0441\u043c\u043e\u0442\u0440\u0438, \u0447\u0442\u043e \u0432\u043d\u0443\u0442\u0440\u0438"},e.id)}))})})})),ce=n(232),ae=n(454),se=n(455),ie=n(456),re=function(e){var t=e.gameStore.options,n=Object(ce.a)({timer:6e4*Object(K.p)(t.timer)}),a=n.countdown,s=n.start,i=n.pause,o=n.isRunning,d=(n.onExpire,Object(j.f)()),b=Object(c.useCallback)((function(){e.gameStore.setWinner("spy"),d.push(T.winner)}),[]),O=Object(c.useCallback)((function(){e.gameStore.setWinner("people"),d.push(T.winner)}),[]);Object(c.useEffect)((function(){0===a&&b()}),[a]);var h=t.spyesCount>1?"\u0412\u044b\u0438\u0433\u0440\u0430\u043b\u0438 \u0448\u043f\u0438\u043e\u043d\u044b":"\u0412\u044b\u0438\u0433\u0440\u0430\u043b \u0448\u043f\u0438\u043e\u043d";return Object(l.jsxs)("div",{className:"df fdc",children:[Object(l.jsxs)("span",{className:"game__counter",children:[Math.floor(a%36e5/6e4).toString().padStart(2,"0")," ",":"," ",Math.floor(a%6e4/1e3).toString().padStart(2,"0")]}),Object(l.jsxs)("div",{className:"game__controls",children:[Object(l.jsx)("div",{children:o?Object(l.jsx)(u.a,{onClick:i,className:"btn-shadowed btn-small",children:Object(l.jsx)(ae.a,{})}):Object(l.jsx)(u.a,{onClick:s,className:"btn-shadowed btn-small",children:Object(l.jsx)(se.a,{})})}),Object(l.jsx)("div",{children:Object(l.jsx)(u.a,{className:"btn-shadowed btn-small",children:Object(l.jsx)(r.b,{to:T.main,children:Object(l.jsx)(ie.a,{})})})})]}),Object(l.jsxs)("div",{className:"game__result",children:[Object(l.jsx)(u.a,{className:"btn-error btn-small",onClick:b,children:h}),Object(l.jsx)(u.a,{className:"btn-small",onClick:O,children:"\u0412\u044b\u0438\u0433\u0440\u0430\u043b\u0438 \u043c\u0438\u0440\u043d\u044b\u0435"})]})]})},je=n(233),le=n(234),oe=function(){function e(){Object(je.a)(this,e),this.options={id:1,playersCont:4,spyesCount:1,isTimerNeeded:!0,timer:5,isFirstMemberChoiseNeeded:!1,isRolesNeeded:!1,categories:[],isHelpQuestionsNeeded:!1,winner:""},this.location="",Object(K.l)(this)}return Object(le.a)(e,[{key:"setLocation",value:function(e){console.log(e),this.location=e}},{key:"setWinner",value:function(e){console.log(e),this.options=Object(b.a)(Object(b.a)({},this.options),{},{winner:e})}},{key:"setGameOptions",value:function(e){this.options=Object(b.a)(Object(b.a)({},e),{},{description:{location:"\u0412\u044b \u043c\u0438\u0440\u043d\u044b\u0439 \u0436\u0438\u0442\u0435\u043b\u044c. \u0412\u0430\u0448\u0430 \u0446\u0435\u043b\u044c - \u0432\u044b\u0447\u0438\u0441\u043b\u0438\u0442\u044c \u0448\u043f\u0438\u043e\u043d\u0430 \u0438 \u0443\u0431\u0440\u0430\u0442\u044c \u0435\u0433\u043e \u043f\u0443\u0442\u0435\u043c \u0433\u043e\u043b\u043e\u0441\u043e\u0432\u0430\u043d\u0438\u044f",spy:"\u0412\u0430\u0448\u0430 \u0446\u0435\u043b\u044c - \u0443\u0433\u0430\u0434\u0430\u0442\u044c \u043b\u043e\u043a\u0430\u0446\u0438\u044e \u0438\u043b\u0438 \u043d\u0435 \u0434\u0430\u0442\u044c \u043f\u043e\u043d\u044f\u0442\u044c \u0434\u0440\u0443\u0433\u0438\u043c \u0443\u0447\u0430\u0441\u0442\u043d\u0438\u043a\u0430\u043c, \u0447\u0442\u043e \u0432\u044b \u0435\u0435 \u043d\u0435 \u0437\u043d\u0430\u0435\u0442\u0435"}})}}]),e}(),de=n(448),be=n(444),Oe=n(457),he=n(458),ue=Object(L.a)((function(e,t,n,c){return Object(Q.a)(Object(W.a)(Object(B.a)(Object(D.a)("id",n),Object(V.a)(e,t))))(c)})),me=function(){var e=Object(c.useState)([{id:S()(),name:""}]),t=Object(O.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)({name:""}),i=Object(O.a)(s,2),j=i[0],o=i[1],d=function(e){return function(t){a(ue("name",t.target.value,e,n))}},b=function(e){return function(){return a(n.filter((function(t){return t.id!==e})))}},h=function(){var e=Object(C.a)(N.a.mark((function e(){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,M({name:j.name,locations:n});case 3:de.b.success("\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0430"),e.next=10;break;case 6:e.prev=6,e.t0=e.catch(0),console.error("Error is",e.t0),de.b.error("\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f \u043d\u0435 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0430");case 10:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}(),x=Object(c.useMemo)((function(){return!j.name||!n.find((function(e){return e.name}))}),[name,n]);return Object(l.jsxs)(m.a,{layout:"vertical",onFinish:h,children:[Object(l.jsx)(u.a,{type:"link",className:"btn-shadowed",children:Object(l.jsx)(r.b,{to:T.main,children:Object(l.jsx)(E.a,{})})}),Object(l.jsx)(m.a.Item,{children:Object(l.jsx)(be.a,{onChange:function(e){return o({name:e.target.value})},placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",size:"large"})}),Object(l.jsxs)(m.a.Item,{label:"\u041b\u043e\u043a\u0430\u0446\u0438\u0438",className:"df fdc",children:[n.map((function(e){var t=e.id,c=e.name;return Object(l.jsxs)("div",{className:"df",style:{paddingBottom:3},children:[Object(l.jsx)(be.a,{onChange:d(t),value:c}),n.length>1&&Object(l.jsx)(u.a,{size:"small",onClick:b(t),className:"btn-xsmall",children:Object(l.jsx)(Oe.a,{})})]},t)})),Object(l.jsx)(u.a,{type:"link",onClick:function(){return a([].concat(Object(y.a)(n),[{id:S()(),name:""}]))},className:"btn-xsmall",style:{margin:"0 auto"},children:Object(l.jsx)(he.a,{})})]}),Object(l.jsx)(m.a.Item,{children:Object(l.jsx)(u.a,{htmlType:"submit",className:"btn-small",disabled:x,children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044e"})})]})},xe=n(459),pe=n(443),fe=n(440),ge=n(237),ve=n.n(ge),Ne=function(e){var t=e.locations,n=e.name;return Object(l.jsx)("div",{className:"category",children:Object(l.jsx)(pe.b,{header:Object(l.jsx)(fe.a,{children:n}),children:t.map((function(e){return Object(l.jsx)(pe.b.Item,{children:Object(l.jsx)(ve.a,{editable:{onChange:console.log},children:e.name})},e.id)}))})})},ye=(n(432),function(){var e=c.useState([]),t=Object(O.a)(e,2),n=t[0],a=t[1];return c.useEffect(Object(C.a)(N.a.mark((function e(){var t,n;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I();case 2:t=e.sent,n=t.categories,a(n);case 5:case"end":return e.stop()}}),e)}))),[]),Object(l.jsxs)("div",{className:"df fdc",children:[Object(l.jsxs)("div",{className:"df aic jcsb",children:[Object(l.jsx)(u.a,{type:"link",className:"btn-shadowed",children:Object(l.jsx)(r.b,{to:T.main,children:Object(l.jsx)(E.a,{})})}),Object(l.jsx)("h1",{className:"categories__heading",children:"\u0421\u043f\u0438\u0441\u043e\u043a \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0439"})]}),Object(l.jsx)(pe.b,{className:"categories__list",children:n.length?n.map((function(e){return Object(l.jsx)(pe.b.Item,{children:Object(l.jsx)(Ne,Object(b.a)({},e))},e.id)})):Object(l.jsx)(xe.a,{style:{fontSize:24},spin:!0})})]})}),Ce=function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)(u.a,{type:"link",className:"btn-shadowed",children:Object(l.jsx)(r.b,{to:T.main,children:Object(l.jsx)(E.a,{})})}),Object(l.jsxs)("div",{className:"df fdc aifs",children:[Object(l.jsx)("h1",{children:"\u041f\u0440\u0430\u0432\u0438\u043b\u0430"}),Object(l.jsx)("h2",{children:"\u0428\u043f\u0438\u043e\u043d"}),Object(l.jsx)("p",{children:"\u041f\u0440\u0438\u0432\u0435\u0442! \u0428\u043f\u0438\u043e\u043d - \u044d\u0442\u043e \u043d\u0430\u0441\u0442\u043e\u043b\u044c\u043d\u0430\u044f \u043f\u0430\u0442\u0438-\u0433\u0435\u0439\u043c \u0438\u0433\u0440\u0430. \u0415\u0441\u0442\u044c \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u043f\u043e\u0440\u0442\u043e\u0432 \u043d\u0430 \u043c\u043e\u0431\u0438\u043b\u044c\u043d\u044b\u0435 \u043f\u043b\u0430\u0442\u0444\u043e\u0440\u043c\u044b, \u043c\u043d\u0435 \u0445\u043e\u0447\u0435\u0442\u0441\u044f \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u0441\u0432\u043e\u0439 \u0441 \u043d\u0435\u043a\u043e\u0442\u043e\u0440\u044b\u043c\u0438 \u043e\u0442\u043b\u0438\u0447\u0438\u044f\u043c\u0438."}),Object(l.jsx)("h2",{children:"\u0421\u0443\u0442\u044c \u0438\u0433\u0440\u044b"}),Object(l.jsxs)("p",{children:["\u0417\u0430\u0433\u0430\u0434\u044b\u0432\u0430\u0435\u0442\u0441\u044f \u043b\u043e\u043a\u0430\u0446\u0438\u044f: \u0432\u0441\u0435 \u0443\u0447\u0430\u0441\u0442\u043d\u0438\u043a\u0438 \u043a\u0440\u043e\u043c\u0435 \u0448\u043f\u0438\u043e\u043d\u0430 \u0437\u043d\u0430\u044e\u0442 \u043e \u043d\u0435\u0439. \u0417\u0430\u0434\u0430\u0447\u0430 \u0448\u043f\u0438\u043e\u043d\u0430: \u0443\u0433\u0430\u0434\u0430\u0442\u044c \u043b\u043e\u043a\u0430\u0446\u0438\u044e \u0438 \u043d\u0430\u0437\u0432\u0430\u0442\u044c \u0435\u0435, \u043b\u0438\u0431\u043e \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u0432\u0441\u0435 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0435, \u0447\u0442\u043e\u0431\u044b \u0435\u0433\u043e \u043d\u0435 \u043e\u0431\u043d\u0430\u0440\u0443\u0436\u0438\u043b\u0438. \u0412\u0441\u0435 \u043e\u0441\u0442\u0430\u043b\u044c\u043d\u044b\u0435 \u0438\u0433\u0440\u043e\u043a\u0438 \u0434\u043e\u043b\u0436\u043d\u044b \u043f\u0440\u0438\u043b\u043e\u0436\u0438\u0442\u044c \u043c\u0430\u043a\u0441\u0438\u043c\u0443\u043c \u0443\u0441\u0438\u043b\u0438\u0439, \u0447\u0442\u043e\u0431\u044b \u0432\u044b\u0447\u0438\u0441\u043b\u0438\u0442\u044c \u0448\u043f\u0438\u043e\u043d\u0430. \u0412\u043e\u0442 \u0432\u044b \u0438\u0433\u0440\u0430\u043b\u0438 \u0432 Among Us? \u0422\u0443\u0442 \u0432\u0441\u0435 \u0442\u043e \u0436\u0435 \u0441\u0430\u043c\u043e\u0435, \u043d\u043e \u0442\u043e\u043b\u044c\u043a\u043e \u0443\u0431\u0438\u0432\u0430\u0442\u044c \u043d\u0438\u043a\u043e\u0433\u043e \u043d\u0435 \u043d\u0443\u0436\u043d\u043e, \u0442\u043e\u043b\u044c\u043a\u043e \u043d\u0430\u0439\u0442\u0438 \u043f\u0440\u0435\u0434\u0430\u0442\u0435\u043b\u044f. \u0411\u043e\u043b\u0435\u0435 \u043f\u043e\u0434\u0440\u043e\u0431\u043d\u044b\u0435 \u043f\u0440\u0430\u0432\u0438\u043b\u0430 \u0441 \u043f\u0440\u0438\u043c\u0435\u0440\u043e\u043c \u0441\u044b\u0433\u0440\u0430\u043d\u043d\u043e\u0439 \u0438\u0433\u0440\u044b \u043c\u043e\u0436\u043d\u043e \u043f\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u0437\u0434\u0435\u0441\u044c:"," ",Object(l.jsx)("a",{href:"https://www.1c-interes.ru/download_files/Rules_of_the_game/SW_spyfall_rules.pdf",children:"\u043f\u0440\u0430\u0432\u0438\u043b\u0430.pdf"})]}),Object(l.jsx)("p",{children:"\u041a\u0441\u0442\u0430\u0442\u0438, \u043b\u043e\u043a\u0430\u0446\u0438\u0438 \u0438\u0437 \u044d\u0442\u0438\u0445 \u043f\u0440\u0430\u0432\u0438\u043b \u044f \u0442\u043e\u0436\u0435 \u0434\u043e\u0431\u0430\u0432\u043b\u044e, \u0435\u0441\u043b\u0438 \u0443\u0436\u0435 \u044d\u0442\u043e\u0433\u043e \u043d\u0435 \u0441\u0434\u0435\u043b\u0430\u043b"}),Object(l.jsx)("h2",{children:"\u0412\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u0438"}),Object(l.jsx)("h2",{children:"\u0413\u043b\u0430\u0432\u043d\u044b\u0439 \u044d\u043a\u0440\u0430\u043d"}),Object(l.jsx)("p",{children:"\u041d\u0430 \u0433\u043b\u0430\u0432\u043d\u043e\u043c \u044d\u043a\u0440\u0430\u043d\u0435 \u043d\u0430\u0445\u043e\u0434\u044f\u0442\u0441\u044f \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0435 \u043e\u043f\u0446\u0438\u0438:"}),Object(l.jsx)("h2",{children:"\u041d\u043e\u0432\u0430\u044f \u0438\u0433\u0440\u0430"}),Object(l.jsx)("p",{children:"\u042d\u043a\u0440\u0430\u043d \u043d\u043e\u0432\u043e\u0439 \u0438\u0433\u0440\u044b \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u0442 \u0444\u043e\u0440\u043c\u0443 \u0441 \u0432\u044b\u0431\u043e\u0440\u043e\u043c \u043d\u0430\u0441\u0442\u0440\u043e\u0435\u043a \u0440\u0430\u0443\u043d\u0434\u0430. \u0412 \u043d\u0438\u0445 \u0432\u0445\u043e\u0434\u0438\u0442 (\u0435\u0449\u0435 \u043d\u0435 \u0440\u0435\u0430\u043b\u0438\u0437\u043e\u0432\u0430\u043d\u043d\u044b\u0435 \u0444\u0438\u0447\u0438 \u0431\u0443\u0434\u0443\u0442 \u0437\u0430\u0447\u0435\u0440\u043a\u043d\u0443\u0442\u044b):"}),Object(l.jsxs)("ul",{children:[Object(l.jsx)("li",{children:"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0438\u0433\u0440\u043e\u043a\u043e\u0432"}),Object(l.jsx)("li",{children:"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0448\u043f\u0438\u043e\u043d\u043e\u0432"}),Object(l.jsx)("li",{children:Object(l.jsx)("s",{children:"\u041d\u0443\u0436\u0435\u043d \u043b\u0438 \u0442\u0430\u0439\u043c\u0435\u0440"})}),Object(l.jsx)("li",{children:"\u0422\u0430\u0439\u043c\u0435\u0440(\u043c\u0438\u043d\u0443\u0442\u044b)"}),Object(l.jsx)("li",{children:Object(l.jsx)("s",{children:"\u041f\u043e\u0437\u0432\u043e\u043b\u0438\u0442\u044c \u0438\u0433\u0440\u0435 \u0432\u044b\u0431\u0440\u0430\u0442\u044c \u043f\u0435\u0440\u0432\u043e\u0433\u043e \u0447\u0435\u043b\u043e\u0432\u0435\u043a\u0430, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0437\u0430\u0434\u0430\u0435\u0442 \u0432\u043e\u043f\u0440\u043e\u0441"})}),Object(l.jsx)("li",{children:Object(l.jsx)("s",{children:"\u041d\u0443\u0436\u043d\u044b \u043b\u0438 \u0440\u043e\u043b\u0438 (\u043b\u043e\u043a\u0430\u0446\u0438\u044f \u043c\u043e\u0436\u0435\u0442 \u043d\u0435 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u0440\u043e\u043b\u0435\u0439)"})}),Object(l.jsx)("li",{children:"\u0412\u044b\u0431\u043e\u0440 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0439"}),Object(l.jsx)("li",{children:Object(l.jsx)("s",{children:"\u041f\u043e\u0434\u0441\u043a\u0430\u0437\u044b\u0432\u0430\u0442\u044c \u0432\u043e\u043f\u0440\u043e\u0441\u044b"})}),Object(l.jsx)("li",{children:Object(l.jsx)("s",{children:"\u0428\u043f\u0438\u043e\u043d\u044b \u0437\u043d\u0430\u044e\u0442 \u0434\u0440\u0443\u0433 \u0434\u0440\u0443\u0433\u0430"})})]}),Object(l.jsx)("h2",{children:"\u0421\u043f\u0438\u0441\u043e\u043a \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0439"}),Object(l.jsx)("p",{children:"\u0417\u0434\u0435\u0441\u044c \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0430\u044e\u0442\u0441\u044f \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0438 \u0434\u043b\u044f \u0438\u0433\u0440\u044b. \u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u0442 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0438 \u0438 \u043b\u043e\u043a\u0430\u0446\u0438\u0438, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0432 \u044d\u0442\u043e\u0439 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0438 \u043d\u0430\u0445\u043e\u0434\u044f\u0442\u0441\u044f. \u0421\u043f\u0438\u0441\u043e\u043a \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0439 \u0434\u0435\u043b\u0438\u0442\u0441\u044f \u043d\u0430 \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u044b\u0435 \u0438 \u0438\u0437 \u0438\u043d\u0442\u0435\u0440\u043d\u0435\u0442\u0430. \u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0438 \u0438\u0437 \u0438\u043d\u0442\u0435\u0440\u043d\u0435\u0442\u0430 \u043c\u043e\u0436\u043d\u043e \u0441\u043a\u0430\u0447\u0430\u0442\u044c \u0441\u0435\u0431\u0435. \u0412 \u0441\u043f\u0438\u0441\u043a\u0435 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0439 \u0442\u0430\u043a\u0436\u0435 \u043f\u043e\u044f\u0432\u0438\u0442\u0441\u044f \u043a\u043d\u043e\u043f\u043a\u0430 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0438 \u0432 \u0432\u0438\u0434\u0435 \u043f\u043b\u044e\u0441\u0430"}),Object(l.jsx)("h2",{children:"\u041d\u043e\u0432\u0430\u044f \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f \u0441 \u043b\u043e\u043a\u0430\u0446\u0438\u044f\u043c\u0438"}),Object(l.jsx)("p",{children:"\u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0441\u043e\u0437\u0434\u0430\u0432\u0430\u0442\u044c \u043d\u043e\u0432\u044b\u0435 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0438, \u043d\u043e \u043d\u0430 \u0434\u0430\u043d\u043d\u043e\u043c \u044d\u0442\u0430\u043f\u0435 \u043e\u043d\u0438 \u0441\u043e\u0437\u0434\u0430\u044e\u0442\u0441\u044f \u0442\u043e\u043b\u044c\u043a\u043e \u043d\u0430 \u0432\u0430\u0448\u0435\u043c \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0435. \u0427\u0443\u0442\u044c \u043f\u043e\u0437\u0436\u0435 \u044f \u0434\u043e\u0431\u0430\u0432\u043b\u044e \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044c \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u0442\u044c \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0438 \u0434\u043b\u044f \u0432\u0441\u0435\u0445 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f \u0438 \u0432\u044b\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u0442\u044c \u0442\u043e\u043f\u044b."}),Object(l.jsx)("h2",{children:"\u041f\u0440\u0430\u0432\u0438\u043b\u0430"}),Object(l.jsxs)("p",{children:["\u0412\u044b \u0441\u0435\u0439\u0447\u0430\u0441 \u0437\u0434\u0435\u0441\u044c \u0438 \u0434\u043e\u0433\u0430\u0434\u044b\u0432\u0430\u0435\u0442\u0435\u0441\u044c, \u0447\u0442\u043e \u0442\u0443\u0442 \u043d\u0430\u0445\u043e\u0434\u0438\u0442\u0441\u044f. \u041a\u0441\u0442\u0430\u0442\u0438, \u043d\u0430\u0436\u043c\u0438"," ",Object(l.jsx)(u.a,{type:"link",onClick:{name:"\u0412\u043d\u0438\u043c\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c",description:"\u041c\u043e\u043b\u043e\u0434\u0435\u0446! \u0422\u044b \u043e\u0437\u043d\u0430\u043a\u0430\u043c\u043b\u0438\u0432\u0430\u0435\u0448\u044c\u0441\u044f \u0441 \u043f\u0440\u0430\u0432\u0438\u043b\u0430\u043c\u0438, \u0430 \u043d\u0435 \u0440\u043f\u043e\u0441\u0442\u043e \u0442\u044b\u043a\u0430\u0435\u0448\u044c \u043d\u0430 \u043a\u043d\u043e\u043f\u043a\u0438"},children:"\u0441\u044e\u0434\u0430"})]}),Object(l.jsx)("h2",{children:"\u041f\u043e\u043a\u0430\u0437 \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0438 \u043b\u043e\u043a\u0430\u0446\u0438\u0438"}),Object(l.jsx)("p",{children:"\u041f\u043e\u0441\u043b\u0435 \u0432\u044b\u0431\u043e\u0440\u0430 \u0443\u0434\u043e\u0431\u043d\u044b\u0445 \u0434\u043b\u044f \u0432\u0430\u0441 \u043d\u0430\u0441\u0442\u0440\u043e\u0435\u043a \u043f\u043e\u044f\u0432\u0438\u0442\u0441\u044f \u043e\u043a\u043d\u043e \u0441 \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0430\u043c\u0438. \u0417\u0434\u0435\u0441\u044c \u043a\u0430\u0436\u0434\u043e\u043c\u0443 \u0438\u0433\u0440\u043e\u043a\u0443 \u043f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u0442\u0441\u044f \u043b\u0438\u0431\u043e \u043b\u043e\u043a\u0430\u0446\u0438\u044f, \u043b\u0438\u0431\u043e \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u043e \u0442\u043e\u043c, \u0447\u0442\u043e \u0438\u0433\u0440\u043e\u043a \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0448\u043f\u0438\u043e\u043d\u043e\u043c. \u041f\u0440\u0438 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u044b\u0445 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430\u0445 \u0438\u0433\u0440\u044b \u0448\u043f\u0438\u043e\u043d\u0443 \u0431\u0443\u0434\u0435\u0442 \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0430 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u043e \u0434\u0440\u0443\u0433\u0438\u0445 \u0448\u043f\u0438\u043e\u043d\u0430\u0445. \u0415\u0441\u043b\u0438 \u0435\u0441\u0442\u044c \u0435\u0449\u0435 \u0440\u043e\u043b\u044c, \u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0443\u0435\u0442\u0441\u044f (\u043d\u043e \u043d\u0435 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e) \u043f\u0440\u0438\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0442\u044c\u0441\u044f \u044d\u0442\u043e\u0439 \u0440\u043e\u043b\u0438."}),Object(l.jsx)("h2",{children:"\u0418\u0433\u0440\u043e\u0432\u043e\u0439 \u043f\u0440\u043e\u0446\u0435\u0441\u0441"}),Object(l.jsx)("p",{children:"\u0412 \u0446\u0435\u043d\u0442\u0440\u0435 \u044d\u043a\u0440\u0430\u043d\u0430 \u0440\u0430\u0441\u043f\u043e\u043b\u043e\u0436\u0435\u043d \u0442\u0430\u0439\u043c\u0435\u0440 \u0438 \u043a\u043d\u043e\u043f\u043a\u0430 \u043f\u0430\u0443\u0437\u044b/\u0432\u043e\u0437\u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u044f \u043e\u0431\u0440\u0430\u0442\u043d\u043e\u0433\u043e \u043e\u0442\u0441\u0447\u0435\u0442\u0430. \u0422\u0430\u043a\u0436\u0435 \u0435\u0441\u0442\u044c \u043a\u043d\u043e\u043f\u043a\u0430 \u043e\u043a\u043e\u043d\u0447\u0430\u043d\u0438\u044f \u0438\u0433\u0440\u044b, \u043a\u043e\u0442\u043e\u0440\u0430\u044f \u0432\u0435\u0440\u043d\u0435\u0442 \u0432\u0430\u0441 \u043d\u0430 \u0413\u043b\u0430\u0432\u043d\u044b\u0439 \u044d\u043a\u0440\u0430\u043d \u041d\u0438\u0436\u0435 \u0440\u0430\u0441\u043f\u043e\u043b\u043e\u0436\u0435\u043d\u044b \u043a\u043d\u043e\u043f\u043a\u0438 \u0432\u044b\u0431\u043e\u0440\u0430, \u0447\u044c\u044f \u0436\u0435 \u0441\u0442\u043e\u0440\u043e\u043d\u0430 \u043f\u043e\u0431\u0435\u0434\u0438\u043b\u0430. \u041f\u043e \u043a\u043b\u0438\u043a\u0443 \u043d\u0430 \u043d\u0438\u0445 \u043f\u043e\u044f\u0432\u0438\u0442\u0441\u044f \u0441\u0447\u0435\u0442 \u0438 \u0431\u0443\u0434\u0435\u0442 \u0432\u0438\u0434\u043d\u043e, \u043a\u0442\u043e \u0432\u0435\u0434\u0435\u0442, \u0430 \u043a\u043e\u043c\u0443 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u043f\u043e\u0434\u043d\u0430\u043f\u0440\u044f\u0447\u044c\u0441\u044f. \u0412 \u043a\u0430\u0436\u0434\u043e\u0439 \u0438\u0433\u0440\u0435 \u0448\u043f\u0438\u043e\u043d\u043e\u043c \u043c\u043e\u0436\u0435\u0442 \u0441\u0442\u0430\u0442\u044c \u043a\u0430\u0436\u0434\u044b\u0439, \u043d\u043e \u043d\u0435 \u043f\u044b\u0442\u0430\u0439\u0442\u0435\u0441\u044c \u043f\u0440\u0438\u0432\u044f\u0437\u044b\u0432\u0430\u0442\u044c\u0441\u044f \u043a \u0442\u043e\u0439 \u0438\u043b\u0438 \u0438\u043d\u043e\u0439 \u0441\u0442\u043e\u0440\u043e\u043d\u0435. \u0415\u0441\u043b\u0438 \u0432\u044b \u0448\u043f\u0438\u043e\u043d \u0432 \u044d\u0442\u043e\u0439 \u043f\u0430\u0440\u0442\u0438\u0438, \u043f\u0440\u0438\u043c\u0438\u0442\u0435 \u0432\u0441\u0435 \u0441\u0432\u043e\u0438 \u043d\u0430\u0432\u044b\u043a\u0438 \u0443\u0431\u0435\u0436\u0434\u0435\u043d\u0438\u044f \u0438 \u043a\u0440\u0430\u0441\u043d\u043e\u0440\u0435\u0447\u0438\u044f, \u0447\u0442\u043e\u0431\u044b \u043f\u043e\u0431\u0435\u0434\u0438\u043b\u0438 \u0448\u043f\u0438\u043e\u043d\u044b. \u0415\u0441\u043b\u0438 \u0432\u044b \u0438\u043c \u043d\u0435 \u044f\u0432\u043b\u044f\u0435\u0442\u0435\u0441\u044c, \u043d\u0430\u0439\u0434\u0438\u0442\u0435 \u0448\u043f\u0438\u043e\u043d\u0430 \u043b\u044e\u0431\u043e\u0439 \u0446\u0435\u043d\u043e\u0439."}),Object(l.jsx)("h2",{children:"\u0423\u0434\u0430\u0447\u0438!"})]})]})},we=function(e){var t=Object(j.f)(),n=function(){t.push(T.main)},c=function(e){return Object(l.jsx)("div",{className:"role-managing__card-wrapper winner__spy",children:Object(l.jsxs)(H.a,{onClick:n,className:"role-managing__card",children:[Object(l.jsx)("h1",{children:"\u0412\u044b\u0438\u0433\u0440\u0430\u043b\u0438 \u0448\u043f\u0438\u043e\u043d\u044b"}),Object(l.jsxs)("p",{children:["\u0417\u0430\u0433\u0430\u0434\u0430\u043d\u043d\u0430\u044f \u043b\u043e\u043a\u0430\u0446\u0438\u044f: ",Object(l.jsx)("span",{children:e.location})]})]})})},a=function(e){return Object(l.jsx)("div",{className:"role-managing__card-wrapper winner__people",children:Object(l.jsxs)(H.a,{onClick:n,className:"role-managing__card",children:[Object(l.jsx)("h1",{children:"\u0412\u044b\u0438\u0433\u0440\u0430\u043b\u0438 \u043c\u0438\u0440\u043d\u044b\u0435 \u043b\u044e\u0434\u0438"}),Object(l.jsx)("p",{children:"\u041f\u043e\u0437\u0434\u0440\u0430\u0432\u043b\u044f\u044e"}),Object(l.jsxs)("p",{children:["\u0417\u0430\u0433\u0430\u0434\u0430\u043d\u043d\u0430\u044f \u043b\u043e\u043a\u0430\u0446\u0438\u044f: ",Object(l.jsx)("span",{children:e.location})]})]})})},s=e.gameStore,i=s.options,r=s.location;return console.log(i.side,r),"spy"===i.winner?Object(l.jsx)(c,{location:r}):Object(l.jsx)(a,{location:r})},_e=new oe;var ke=function(){return Object(l.jsx)(r.a,{children:Object(l.jsx)("div",{className:"App",children:Object(l.jsxs)(j.c,{children:[Object(l.jsx)(j.a,{exact:!0,path:T.main,children:Object(l.jsx)(o,{menuItems:[{id:1,name:"\u041d\u043e\u0432\u0430\u044f \u0438\u0433\u0440\u0430",path:T.newGame},{id:2,name:"\u041f\u0440\u0430\u0432\u0438\u043b\u0430",path:T.rules},{id:3,name:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043d\u043e\u0432\u0443\u044e \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044e",path:T.addCategory},{id:4,name:"\u0421\u043f\u0438\u0441\u043e\u043a \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0439",path:T.categories}]})}),Object(l.jsx)(j.a,{exact:!0,path:T.newGame,children:Object(l.jsx)(z,{gameStore:_e})}),Object(l.jsx)(j.a,{exact:!0,path:T.roleManaging,children:Object(l.jsx)(ne,{gameStore:_e})}),Object(l.jsx)(j.a,{exact:!0,path:T.game,children:Object(l.jsx)(re,{gameStore:_e})}),Object(l.jsx)(j.a,{exact:!0,path:T.addCategory,children:Object(l.jsx)(me,{})}),Object(l.jsx)(j.a,{exact:!0,path:T.rules,children:Object(l.jsx)(Ce,{})}),Object(l.jsx)(j.a,{exact:!0,path:T.categories,children:Object(l.jsx)(ye,{})}),Object(l.jsx)(j.a,{exact:!0,path:T.winner,children:Object(l.jsx)(we,{gameStore:_e})})]})})})},Se=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,460)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),s(e),i(e)}))};i.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(ke,{})}),document.getElementById("root")),Se()}},[[433,1,2]]]);
//# sourceMappingURL=main.29512e40.chunk.js.map