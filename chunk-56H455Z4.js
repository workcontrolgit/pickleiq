import{b as p}from"./chunk-53QZN36B.js";import{Ia as i,Ib as S,Ja as n,Ka as x,Mc as v,O as l,Vc as f,Wc as y,Zc as b,eb as e,gb as k,ha as d,la as u,na as h,oa as s,oc as g,pc as m}from"./chunk-LXNGDRU4.js";var c=(()=>{let t=class t{constructor(a){this.authService=a,this.version=y.version}ngOnInit(){this.accessToken=this.authService.accessToken,this.idToken=this.authService.idToken,this.profile=this.authService.identityClaims,this.profile!=null&&this.profile!=null&&(this.identityClaims=JSON.stringify(this.profile),this.role=JSON.stringify(this.profile.role))}};t.\u0275fac=function(r){return new(r||t)(u(b))},t.\u0275cmp=h({type:t,selectors:[["app-about"]],decls:49,vars:1,consts:[[1,"container-fluid"],[1,"jumbotron","text-center"],["translate",""],[1,"far","fa-bookmark"],["href","https://usapickleball.org/tournaments/tournament-player-ratings/player-skill-rating-definitions/","target","_blank"],["href","https://www.facebook.com/profile.php?id=100086898597774"],["href","https://medium.com/pickleball/pickleball-skill-assessment-app-PickleIQ-get-started-6b0524562f1c?sk=000e8aafef7ccffafaac909afe5df78f"]],template:function(r,M){r&1&&(i(0,"div",0),e(1,`
  `),i(2,"div",1),e(3,`
    `),i(4,"h1"),e(5,`
      `),i(6,"span",2),e(7,"APP_NAME"),n(),e(8,`
    `),n(),e(9,`
    `),i(10,"p"),x(11,"i",3),e(12," "),i(13,"span",2),e(14,"Version"),n(),e(15),n(),e(16,`
  `),n(),e(17,`
  `),i(18,"p"),e(19,`
    `),i(20,"strong"),e(21,"I want to improve my Pickcleball game. What should I work on?"),n(),e(22," Try "),i(23,"span",2),e(24,"APP_NAME"),n(),e(25,`,
    a free, simple, easy-to-use Pickleball Skill Assessment app. It helps to identify skill gaps so players can focus on
    training development. For definition of Player Skill Ratings, please visit
    `),i(26,"a",4),e(27,"USA Pickleball"),n(),e(28,`
  `),n(),e(29,`

  `),e(30,`

  `),i(31,"h3"),e(32,"Contact"),n(),e(33,`
  Do you have any tips or suggestions to improve Pickleball app? Feel free to Post or Message.
  `),i(34,"uL"),e(35,`
    `),i(36,"li")(37,"a",5),e(38,"Pickleball Page on Facebook"),n()(),e(39,`
    `),i(40,"li"),e(41,`
      `),i(42,"a",6),e(43,"Pickleball Blog on Medium"),n(),e(44,`
    `),n(),e(45,`
  `),n(),e(46,`
  `),e(47,`
`),n(),e(48,`
`)),r&2&&(d(15),k(" ",M.version))},dependencies:[m,g,p],encapsulation:2});let o=t;return o})();var T=[{path:"",component:c,data:{title:"About"}}],P=(()=>{let t=class t{};t.\u0275fac=function(r){return new(r||t)},t.\u0275mod=s({type:t}),t.\u0275inj=l({imports:[f.forChild(T),f]});let o=t;return o})();var U=(()=>{let t=class t{};t.\u0275fac=function(r){return new(r||t)},t.\u0275mod=s({type:t}),t.\u0275inj=l({imports:[S,m,P,v,p,c]});let o=t;return o})();export{U as AboutModule};
