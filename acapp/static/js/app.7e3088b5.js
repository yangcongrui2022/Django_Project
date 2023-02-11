(function(){"use strict";var e={2575:function(e,s,t){var a=t(9242),o=t(3396);function n(e,s,t,a,n,r){const l=(0,o.up)("NavBar"),c=(0,o.up)("router-view");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(l),((0,o.wg)(),(0,o.j4)(c,{key:e.$route.fullPath}))],64)}t(8052);var r=t(7139);const l={class:"navbar navbar-expand-lg navbar-light bg-light"},c={class:"container"},u=(0,o.Uk)("Myspace"),i=(0,o._)("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarText","aria-controls":"navbarText","aria-expanded":"false","aria-label":"Toggle navigation"},[(0,o._)("span",{class:"navbar-toggler-icon"})],-1),p={class:"collapse navbar-collapse",id:"navbarText"},d={class:"navbar-nav me-auto mb-2 mb-lg-0"},m={class:"nav-item"},f=(0,o.Uk)("首页"),_={class:"nav-item"},v=(0,o.Uk)("好友列表"),w={key:0,class:"navbar-nav"},g={class:"nav-item"},b=(0,o.Uk)("登录"),y={class:"nav-item"},h=(0,o.Uk)("注册"),k={key:1,class:"navbar-nav"},C={class:"nav-item"},j={class:"nav-item"};function U(e,s,t,a,n,U){const P=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("nav",l,[(0,o._)("div",c,[(0,o.Wm)(P,{class:"navbar-brand",to:{name:"home"}},{default:(0,o.w5)((()=>[u])),_:1}),i,(0,o._)("div",p,[(0,o._)("ul",d,[(0,o._)("li",m,[(0,o.Wm)(P,{class:"nav-link",to:{name:"home"}},{default:(0,o.w5)((()=>[f])),_:1})]),(0,o._)("li",_,[(0,o.Wm)(P,{class:"nav-link",to:{name:"userlist"}},{default:(0,o.w5)((()=>[v])),_:1})])]),e.$store.state.user.is_login?((0,o.wg)(),(0,o.iD)("ul",k,[(0,o._)("li",C,[(0,o.Wm)(P,{class:"nav-link",to:{name:"userprofile",params:{userId:e.$store.state.user.id}}},{default:(0,o.w5)((()=>[(0,o.Uk)((0,r.zw)(e.$store.state.user.username),1)])),_:1},8,["to"])]),(0,o._)("li",j,[(0,o._)("a",{class:"nav-link",style:{cursor:"pointer"},onClick:s[0]||(s[0]=(...e)=>a.logout&&a.logout(...e))},"退出")])])):((0,o.wg)(),(0,o.iD)("ul",w,[(0,o._)("li",g,[(0,o.Wm)(P,{class:"nav-link",to:{name:"login"}},{default:(0,o.w5)((()=>[b])),_:1})]),(0,o._)("li",y,[(0,o.Wm)(P,{class:"nav-link",to:{name:"register"}},{default:(0,o.w5)((()=>[h])),_:1})])]))])])])}var P=t(65),x={name:"NavBar",setup(){const e=(0,P.oR)(),s=()=>{e.commit("logout")};return{logout:s}}},B=t(89);const O=(0,B.Z)(x,[["render",U]]);var D=O,T={name:"App",components:{NavBar:D}};const I=(0,B.Z)(T,[["render",n]]);var z=I,H=t(678);const S=(0,o.Uk)(" 首页 ");function W(e,s,t,a,n,r){const l=(0,o.up)("ContentBase");return(0,o.wg)(),(0,o.j4)(l,null,{default:(0,o.w5)((()=>[S])),_:1})}const Z={class:"home"},A={class:"container"},q={class:"card"},R={class:"card-body"};function V(e,s,t,a,n,r){return(0,o.wg)(),(0,o.iD)("div",Z,[(0,o._)("div",A,[(0,o._)("div",q,[(0,o._)("div",R,[(0,o.WI)(e.$slots,"default",{},void 0,!0)])])])])}var E={name:"ContentBase"};const M=(0,B.Z)(E,[["render",V],["__scopeId","data-v-5d4bf6fa"]]);var F=M,$={name:"HomeView",components:{ContentBase:F}};const L=(0,B.Z)($,[["render",W]]);var N=L;const G=["onClick"],Y={class:"card-body"},K={class:"row"},J={class:"col-1 img-field"},Q=["src"],X={class:"col-11"},ee={class:"username"},se={class:"follower-count"};function te(e,s,t,a,n,l){const c=(0,o.up)("ContentBase");return(0,o.wg)(),(0,o.j4)(c,null,{default:(0,o.w5)((()=>[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(a.users,(e=>((0,o.wg)(),(0,o.iD)("div",{class:"card",key:e.id,onClick:s=>a.open_user_profile(e.id)},[(0,o._)("div",Y,[(0,o._)("div",K,[(0,o._)("div",J,[(0,o._)("img",{class:"img-fluid",src:e.photo,alt:""},null,8,Q)]),(0,o._)("div",X,[(0,o._)("div",ee,(0,r.zw)(e.username),1),(0,o._)("div",se,(0,r.zw)(e.followerCount),1)])])])],8,G)))),128))])),_:1})}var ae=t(7387),oe=t.n(ae),ne=t(4870),re={name:"UserList",components:{ContentBase:F},setup(){const e=(0,P.oR)();let s=(0,ne.iH)([]);oe().ajax({url:"https://app165.acapp.acwing.com.cn/myspace/userlist/",type:"get",success(e){s.value=e}});const t=s=>{e.state.user.is_login?Ps.push({name:"userprofile",params:{userId:s}}):Ps.push({name:"login"})};return{users:s,open_user_profile:t}}};const le=(0,B.Z)(re,[["render",te],["__scopeId","data-v-39dbdb0f"]]);var ce=le;const ue={class:"row"},ie={class:"col-3"},pe={class:"col-9"};function de(e,s,t,a,n,r){const l=(0,o.up)("UserProfileInfo"),c=(0,o.up)("UserProfileWrite"),u=(0,o.up)("UserProfilePosts"),i=(0,o.up)("ContentBase");return(0,o.wg)(),(0,o.j4)(i,null,{default:(0,o.w5)((()=>[(0,o._)("div",ue,[(0,o._)("div",ie,[(0,o.Wm)(l,{onFollow:a.follow,onUnfollow:a.unfollow,user:a.user},null,8,["onFollow","onUnfollow","user"]),a.is_me?((0,o.wg)(),(0,o.j4)(c,{key:0,onPost_a_post:a.post_a_post},null,8,["onPost_a_post"])):(0,o.kq)("",!0)]),(0,o._)("div",pe,[(0,o.Wm)(u,{user:a.user,posts:a.posts,onDelete_a_post:a.delete_a_post},null,8,["user","posts","onDelete_a_post"])])])])),_:1})}const me={class:"card"},fe={class:"card-body"},_e={class:"row"},ve={class:"col-3 img-field"},we=["src"],ge={class:"col-9"},be={class:"username"},ye={class:"fans"};function he(e,s,t,a,n,l){return(0,o.wg)(),(0,o.iD)("div",me,[(0,o._)("div",fe,[(0,o._)("div",_e,[(0,o._)("div",ve,[(0,o._)("img",{class:"img-fluid",src:t.user.photo,alt:""},null,8,we)]),(0,o._)("div",ge,[(0,o._)("div",be,(0,r.zw)(t.user.username),1),(0,o._)("div",ye,"粉丝："+(0,r.zw)(t.user.followerCount),1),t.user.is_followed?(0,o.kq)("",!0):((0,o.wg)(),(0,o.iD)("button",{key:0,onClick:s[0]||(s[0]=(...e)=>a.follow&&a.follow(...e)),type:"button",class:"btn btn-secondary btn-sm"},"+关注")),t.user.is_followed?((0,o.wg)(),(0,o.iD)("button",{key:1,onClick:s[1]||(s[1]=(...e)=>a.unfollow&&a.unfollow(...e)),type:"button",class:"btn btn-secondary btn-sm"},"取消关注")):(0,o.kq)("",!0)])])])])}var ke={name:"UserProfileInfo",props:{user:{type:Object,required:!0}},setup(e,s){const t=(0,P.oR)(),a=()=>{oe().ajax({url:"https://app165.acapp.acwing.com.cn/myspace/follow/",type:"POST",data:{target_id:e.user.id},headers:{Authorization:"Bearer "+t.state.user.access},success(e){"success"===e.result&&s.emit("follow")}})},o=()=>{oe().ajax({url:"https://app165.acapp.acwing.com.cn/myspace/follow/",type:"POST",data:{target_id:e.user.id},headers:{Authorization:"Bearer "+t.state.user.access},success(e){"success"===e.result&&s.emit("unfollow")}})};return{follow:a,unfollow:o}}};const Ce=(0,B.Z)(ke,[["render",he],["__scopeId","data-v-fed3a2b6"]]);var je=Ce;const Ue={class:"card"},Pe={class:"card-body"},xe={class:"card single-post"},Be={class:"card-body"},Oe=["onClick"];function De(e,s,t,a,n,l){return(0,o.wg)(),(0,o.iD)("div",Ue,[(0,o._)("div",Pe,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(t.posts.posts,(e=>((0,o.wg)(),(0,o.iD)("div",{key:e.id},[(0,o._)("div",xe,[(0,o._)("div",Be,[(0,o.Uk)((0,r.zw)(e.content)+" ",1),a.is_me?((0,o.wg)(),(0,o.iD)("button",{key:0,onClick:s=>a.delete_a_post(e.id),type:"button",class:"btn btn-danger btn-sm"},"删除",8,Oe)):(0,o.kq)("",!0)])])])))),128))])])}var Te={name:"UserProfilePosts",props:{posts:{type:Object,required:!0},user:{type:Object,required:!0}},setup(e,s){const t=(0,P.oR)();let a=(0,o.Fl)((()=>t.state.user.id===e.user.id));const n=e=>{oe().ajax({url:"https://app165.acapp.acwing.com.cn/myspace/post/",type:"DELETE",data:{post_id:e},headers:{Authorization:"Bearer "+t.state.user.access},success(t){"success"===t.result&&s.emit("delete_a_post",e)}})};return{is_me:a,delete_a_post:n}}};const Ie=(0,B.Z)(Te,[["render",De],["__scopeId","data-v-d2d93142"]]);var ze=Ie;const He=e=>((0,o.dD)("data-v-7a1a8950"),e=e(),(0,o.Cn)(),e),Se={class:"card edit-field"},We={class:"card-body"},Ze=He((()=>(0,o._)("label",{for:"edit-post",class:"form-label"},"编辑帖子",-1)));function Ae(e,s,t,n,r,l){return(0,o.wg)(),(0,o.iD)("div",Se,[(0,o._)("div",We,[Ze,(0,o.wy)((0,o._)("textarea",{"onUpdate:modelValue":s[0]||(s[0]=e=>n.content=e),class:"form-control",id:"edit-post",rows:"3"},null,512),[[a.nr,n.content]]),(0,o._)("button",{onClick:s[1]||(s[1]=(...e)=>n.post_a_post&&n.post_a_post(...e)),type:"button",class:"btn btn-primary btn-sm"},"发帖")])])}var qe={name:"UserProfileWrite",setup(e,s){const t=(0,P.oR)();let a=(0,ne.iH)("");const o=()=>{oe().ajax({url:"https://app165.acapp.acwing.com.cn/myspace/post/",type:"POST",data:{content:a.value},headers:{Authorization:"Bearer "+t.state.user.access},success(e){"success"===e.result&&(s.emit("post_a_post",a.value),a.value="")}})};return{content:a,post_a_post:o}}};const Re=(0,B.Z)(qe,[["render",Ae],["__scopeId","data-v-7a1a8950"]]);var Ve=Re,Ee={name:"UserList",components:{ContentBase:F,UserProfileInfo:je,UserProfilePosts:ze,UserProfileWrite:Ve},setup(){const e=(0,P.oR)(),s=(0,H.yj)(),t=parseInt(s.params.userId),a=(0,ne.qj)({}),n=(0,ne.qj)({});oe().ajax({url:"https://app165.acapp.acwing.com.cn/myspace/getinfo/",type:"GET",data:{user_id:t},headers:{Authorization:"Bearer "+e.state.user.access},success(e){a.id=e.id,a.username=e.username,a.photo=e.photo,a.followerCount=e.followerCount,a.is_followed=e.is_followed}}),oe().ajax({url:"https://app165.acapp.acwing.com.cn/myspace/post/",type:"GET",data:{user_id:t},headers:{Authorization:"Bearer "+e.state.user.access},success(e){n.count=e.length,n.posts=e}});const r=()=>{a.is_followed||(a.is_followed=!0,a.followerCount++)},l=()=>{a.is_followed&&(a.is_followed=!1,a.followerCount--)},c=e=>{n.count++,n.posts.unshift({id:n.count,userId:1,content:e})},u=e=>{n.posts=n.posts.filter((s=>s.id!==e)),n.count=n.posts.length},i=(0,o.Fl)((()=>t===e.state.user.id));return{user:a,follow:r,unfollow:l,posts:n,post_a_post:c,delete_a_post:u,is_me:i}}};const Me=(0,B.Z)(Ee,[["render",de]]);var Fe=Me;const $e=e=>((0,o.dD)("data-v-bd149d5e"),e=e(),(0,o.Cn)(),e),Le={class:"row justify-content-md-center"},Ne={class:"col-3"},Ge={class:"mb-3"},Ye=$e((()=>(0,o._)("label",{for:"username",class:"form-label"},"用户名",-1))),Ke={class:"mb-3"},Je=$e((()=>(0,o._)("label",{for:"password",class:"form-label"},"密码",-1))),Qe={class:"error-message"},Xe=$e((()=>(0,o._)("button",{type:"submit",class:"btn btn-primary"},"登录",-1)));function es(e,s,t,n,l,c){const u=(0,o.up)("ContentBase");return(0,o.wg)(),(0,o.j4)(u,null,{default:(0,o.w5)((()=>[(0,o._)("div",Le,[(0,o._)("div",Ne,[(0,o._)("form",{onSubmit:s[2]||(s[2]=(0,a.iM)(((...e)=>n.login&&n.login(...e)),["prevent"]))},[(0,o._)("div",Ge,[Ye,(0,o.wy)((0,o._)("input",{"onUpdate:modelValue":s[0]||(s[0]=e=>n.username=e),type:"text",class:"form-control",id:"username"},null,512),[[a.nr,n.username]])]),(0,o._)("div",Ke,[Je,(0,o.wy)((0,o._)("input",{"onUpdate:modelValue":s[1]||(s[1]=e=>n.password=e),type:"password",class:"form-control",id:"password"},null,512),[[a.nr,n.password]])]),(0,o._)("div",Qe,(0,r.zw)(n.error_message),1),Xe],32)])])])),_:1})}var ss={name:"LoginView",components:{ContentBase:F},setup(){const e=(0,P.oR)();let s=(0,ne.iH)(""),t=(0,ne.iH)(""),a=(0,ne.iH)("");const o=()=>{a.value="",e.dispatch("login",{username:s.value,password:t.value,success(){Ps.push({name:"userlist"})},error(){a.value="用户名或密码错误"}})};return{username:s,password:t,error_message:a,login:o}}};const ts=(0,B.Z)(ss,[["render",es],["__scopeId","data-v-bd149d5e"]]);var as=ts;const os=e=>((0,o.dD)("data-v-4c3bd5aa"),e=e(),(0,o.Cn)(),e),ns={class:"row justify-content-md-center"},rs={class:"col-3"},ls={class:"mb-3"},cs=os((()=>(0,o._)("label",{for:"username",class:"form-label"},"用户名",-1))),us={class:"mb-3"},is=os((()=>(0,o._)("label",{for:"password",class:"form-label"},"密码",-1))),ps={class:"mb-3"},ds=os((()=>(0,o._)("label",{for:"password_confirm",class:"form-label"},"确认密码",-1))),ms={class:"error-message"},fs=os((()=>(0,o._)("button",{type:"submit",class:"btn btn-primary"},"登录",-1)));function _s(e,s,t,n,l,c){const u=(0,o.up)("ContentBase");return(0,o.wg)(),(0,o.j4)(u,null,{default:(0,o.w5)((()=>[(0,o._)("div",ns,[(0,o._)("div",rs,[(0,o._)("form",{onSubmit:s[3]||(s[3]=(0,a.iM)(((...e)=>n.register&&n.register(...e)),["prevent"]))},[(0,o._)("div",ls,[cs,(0,o.wy)((0,o._)("input",{"onUpdate:modelValue":s[0]||(s[0]=e=>n.username=e),type:"text",class:"form-control",id:"username"},null,512),[[a.nr,n.username]])]),(0,o._)("div",us,[is,(0,o.wy)((0,o._)("input",{"onUpdate:modelValue":s[1]||(s[1]=e=>n.password=e),type:"password",class:"form-control",id:"password"},null,512),[[a.nr,n.password]])]),(0,o._)("div",ps,[ds,(0,o.wy)((0,o._)("input",{"onUpdate:modelValue":s[2]||(s[2]=e=>n.password_confirm=e),type:"password",class:"form-control",id:"password_confirm"},null,512),[[a.nr,n.password_confirm]])]),(0,o._)("div",ms,(0,r.zw)(n.error_message),1),fs],32)])])])),_:1})}var vs={name:"RegisterView",components:{ContentBase:F},setup(){const e=(0,P.oR)();let s=(0,ne.iH)(""),t=(0,ne.iH)(""),a=(0,ne.iH)(""),o=(0,ne.iH)("");const n=()=>{o.value="",oe().ajax({url:"https://app165.acapp.acwing.com.cn/myspace/user/",type:"POST",data:{username:s.value,password:t.value,password_confirm:a.value},success(a){"success"===a.result?e.dispatch("login",{username:s.value,password:t.value,success(){Ps.push({name:"userlist"})},error(){o.value="系统异常，请稍后重试"}}):o.value=a.result}})};return{username:s,password:t,password_confirm:a,error_message:o,register:n}}};const ws=(0,B.Z)(vs,[["render",_s],["__scopeId","data-v-4c3bd5aa"]]);var gs=ws;const bs=(0,o.Uk)(" 404 ");function ys(e,s,t,a,n,r){const l=(0,o.up)("ContentBase");return(0,o.wg)(),(0,o.j4)(l,null,{default:(0,o.w5)((()=>[bs])),_:1})}var hs={name:"NotFound",components:{ContentBase:F}};const ks=(0,B.Z)(hs,[["render",ys]]);var Cs=ks;const js=[{path:"/myspace/",name:"home",component:N},{path:"/myspace/userlist/",name:"userlist",component:ce},{path:"/myspace/userprofile/:userId/",name:"userprofile",component:Fe},{path:"/myspace/login/",name:"login",component:as},{path:"/myspace/register/",name:"register",component:gs},{path:"/myspace/404/",name:"404",component:Cs},{path:"/myspace/:catchAll(.*)",redirect:"/myspace/404/"}],Us=(0,H.p7)({history:(0,H.PO)(),routes:js});var Ps=Us,xs=t(1598);const Bs={state:{id:"",username:"",photo:"",followerCount:0,access:"",refresh:"",is_login:!1},getters:{},mutations:{updateUser(e,s){e.id=s.id,e.username=s.username,e.photo=s.photo,e.followerCount=s.followerCount,e.access=s.access,e.refresh=s.refresh,e.is_login=s.is_login},updateAccess(e,s){e.access=s},logout(e){e.id="",e.username="",e.photo="",e.followerCount=0,e.access="",e.refresh="",e.is_login=!1}},actions:{login(e,s){oe().ajax({url:"https://app165.acapp.acwing.com.cn/api/token/",type:"POST",data:{username:s.username,password:s.password},success(t){const{access:a,refresh:o}=t,n=(0,xs.Z)(a);setInterval((()=>{oe().ajax({url:"https://app165.acapp.acwing.com.cn/api/token/refresh/",type:"POST",data:{refresh:o},success(s){e.commit("updateAccess",s.access)}})}),27e4),oe().ajax({url:"https://app165.acapp.acwing.com.cn/myspace/getinfo/",type:"GET",data:{user_id:n.user_id},headers:{Authorization:"Bearer "+a},success(t){e.commit("updateUser",{...t,access:a,refresh:o,is_login:!0}),s.success()}})},error(){s.error()}})}},modules:{}};var Os=Bs,Ds=(0,P.MT)({state:{},getters:{},mutations:{},actions:{},modules:{user:Os}});(0,a.ri)(z).use(Ds).use(Ps).mount("#app")}},s={};function t(a){var o=s[a];if(void 0!==o)return o.exports;var n=s[a]={exports:{}};return e[a].call(n.exports,n,n.exports,t),n.exports}t.m=e,function(){var e=[];t.O=function(s,a,o,n){if(!a){var r=1/0;for(i=0;i<e.length;i++){a=e[i][0],o=e[i][1],n=e[i][2];for(var l=!0,c=0;c<a.length;c++)(!1&n||r>=n)&&Object.keys(t.O).every((function(e){return t.O[e](a[c])}))?a.splice(c--,1):(l=!1,n<r&&(r=n));if(l){e.splice(i--,1);var u=o();void 0!==u&&(s=u)}}return s}n=n||0;for(var i=e.length;i>0&&e[i-1][2]>n;i--)e[i]=e[i-1];e[i]=[a,o,n]}}(),function(){t.n=function(e){var s=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(s,{a:s}),s}}(),function(){t.d=function(e,s){for(var a in s)t.o(s,a)&&!t.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:s[a]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,s){return Object.prototype.hasOwnProperty.call(e,s)}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={143:0};t.O.j=function(s){return 0===e[s]};var s=function(s,a){var o,n,r=a[0],l=a[1],c=a[2],u=0;if(r.some((function(s){return 0!==e[s]}))){for(o in l)t.o(l,o)&&(t.m[o]=l[o]);if(c)var i=c(t)}for(s&&s(a);u<r.length;u++)n=r[u],t.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return t.O(i)},a=self["webpackChunkmyspace"]=self["webpackChunkmyspace"]||[];a.forEach(s.bind(null,0)),a.push=s.bind(null,a.push.bind(a))}();var a=t.O(void 0,[998],(function(){return t(2575)}));a=t.O(a)})();
//# sourceMappingURL=app.7e3088b5.js.map