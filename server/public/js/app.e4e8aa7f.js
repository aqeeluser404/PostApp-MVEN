(function(){"use strict";var t={345:function(t,e,n){var o=n(751),r=n(641);function a(t,e,n,o,a,s){const i=(0,r.g2)("PostComponent");return(0,r.uX)(),(0,r.Wv)(i)}var s=n(33);const i=t=>((0,r.Qi)("data-v-28af4892"),t=t(),(0,r.jt)(),t),c={class:"container"},u=i((()=>(0,r.Lk)("h1",null,"Latest Posts",-1))),l={class:"create-post"},p=i((()=>(0,r.Lk)("label",{for:"create-post"},"Say Something...",-1))),f=i((()=>(0,r.Lk)("hr",null,null,-1))),d={key:0,class:"error"},v={class:"posts-container"},h=["item","index","onDblclick"],b={class:"text"};function g(t,e,n,a,i,g){return(0,r.uX)(),(0,r.CE)("div",c,[u,(0,r.Lk)("div",l,[p,(0,r.bo)((0,r.Lk)("input",{type:"text",id:"create-post","onUpdate:modelValue":e[0]||(e[0]=t=>i.text=t),placeholder:"Create a post"},null,512),[[o.Jo,i.text]]),(0,r.Lk)("button",{onClick:e[1]||(e[1]=(...t)=>g.createPost&&g.createPost(...t))},"Post!")]),f,i.error?((0,r.uX)(),(0,r.CE)("p",d,(0,s.v_)(i.error),1)):(0,r.Q3)("",!0),(0,r.Lk)("div",v,[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(i.posts,((t,e)=>((0,r.uX)(),(0,r.CE)("div",{class:"post",item:t,index:e,key:t._id,onDblclick:e=>g.deletePost(t._id)},[(0,r.eW)((0,s.v_)(`${t.createdAt.getDate()}/${t.createdAt.getMonth()}/${t.createdAt.getFullYear()}`)+" ",1),(0,r.Lk)("p",b,(0,s.v_)(t.text),1)],40,h)))),128))])])}var y=n(250);const P="api/posts/";class m{static getPost(){return y.A.get(P).then((t=>{const e=t.data;return e.map((t=>({...t,createdAt:new Date(t.createdAt)})))})).catch((t=>{throw t}))}static insertPost(t){return y.A.post(P,{text:t})}static deletePost(t){return y.A.delete(`${P}${t}`)}}var k=m,w={name:"PostComponent",data(){return{posts:[],error:"",text:""}},async created(){try{this.posts=await k.getPost()}catch(t){this.error=t.message}},methods:{async createPost(){await k.insertPost(this.text),this.posts=await k.getPost()},async deletePost(t){await k.deletePost(t),this.posts=await k.getPost()}}},x=n(262);const O=(0,x.A)(w,[["render",g],["__scopeId","data-v-28af4892"]]);var A=O,C={name:"App",components:{PostComponent:A}};const j=(0,x.A)(C,[["render",a]]);var L=j;(0,o.Ef)(L).mount("#app")}},e={};function n(o){var r=e[o];if(void 0!==r)return r.exports;var a=e[o]={exports:{}};return t[o](a,a.exports,n),a.exports}n.m=t,function(){var t=[];n.O=function(e,o,r,a){if(!o){var s=1/0;for(l=0;l<t.length;l++){o=t[l][0],r=t[l][1],a=t[l][2];for(var i=!0,c=0;c<o.length;c++)(!1&a||s>=a)&&Object.keys(n.O).every((function(t){return n.O[t](o[c])}))?o.splice(c--,1):(i=!1,a<s&&(s=a));if(i){t.splice(l--,1);var u=r();void 0!==u&&(e=u)}}return e}a=a||0;for(var l=t.length;l>0&&t[l-1][2]>a;l--)t[l]=t[l-1];t[l]=[o,r,a]}}(),function(){n.d=function(t,e){for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={524:0};n.O.j=function(e){return 0===t[e]};var e=function(e,o){var r,a,s=o[0],i=o[1],c=o[2],u=0;if(s.some((function(e){return 0!==t[e]}))){for(r in i)n.o(i,r)&&(n.m[r]=i[r]);if(c)var l=c(n)}for(e&&e(o);u<s.length;u++)a=s[u],n.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return n.O(l)},o=self["webpackChunkclient"]=self["webpackChunkclient"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=n.O(void 0,[504],(function(){return n(345)}));o=n.O(o)})();
//# sourceMappingURL=app.e4e8aa7f.js.map