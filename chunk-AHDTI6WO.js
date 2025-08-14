import{b as m}from"./chunk-TA6LLGSN.js";import{$a as e,Db as b,Hc as k,Ia as t,Ja as i,Ka as h,N as l,Qc as c,Rc as S,Uc as v,bb as x,ia as f,jc as g,kc as s,ma as d,oa as u,pa as a}from"./chunk-7YISJ2RF.js";var p=(()=>{class n{constructor(r){this.authService=r,this.version=S.version}ngOnInit(){this.accessToken=this.authService.accessToken,this.idToken=this.authService.idToken,this.profile=this.authService.identityClaims,this.profile!=null&&this.profile!=null&&(this.identityClaims=JSON.stringify(this.profile),this.role=JSON.stringify(this.profile.role))}static{this.\u0275fac=function(o){return new(o||n)(d(v))}}static{this.\u0275cmp=u({type:n,selectors:[["app-about"]],decls:49,vars:1,consts:[[1,"container-fluid"],[1,"jumbotron","text-center"],["translate",""],[1,"far","fa-bookmark"],["href","https://usapickleball.org/tournaments/tournament-player-ratings/player-skill-rating-definitions/","target","_blank"],["href","https://www.facebook.com/profile.php?id=100086898597774"],["href","https://medium.com/pickleball/pickleball-skill-assessment-app-PickleIQ-get-started-6b0524562f1c?sk=000e8aafef7ccffafaac909afe5df78f"]],template:function(o,E){o&1&&(t(0,"div",0),e(1,`
  `),t(2,"div",1),e(3,`
    `),t(4,"h1"),e(5,`
      `),t(6,"span",2),e(7,"APP_NAME"),i(),e(8,`
    `),i(),e(9,`
    `),t(10,"p"),h(11,"i",3),e(12," "),t(13,"span",2),e(14,"Version"),i(),e(15),i(),e(16,`
  `),i(),e(17,`
  `),t(18,"p"),e(19,`
    `),t(20,"strong"),e(21,"I want to improve my Pickcleball game. What should I work on?"),i(),e(22," Try "),t(23,"span",2),e(24,"APP_NAME"),i(),e(25,`,
    a free, simple, easy-to-use Pickleball Skill Assessment app. It helps to identify skill gaps so players can focus on
    training development. For definition of Player Skill Ratings, please visit
    `),t(26,"a",4),e(27,"USA Pickleball"),i(),e(28,`
  `),i(),e(29,`

  `),e(30,`

  `),t(31,"h3"),e(32,"Contact"),i(),e(33,`
  Do you have any tips or suggestions to improve Pickleball app? Feel free to Post or Message.
  `),t(34,"uL"),e(35,`
    `),t(36,"li")(37,"a",5),e(38,"Pickleball Page on Facebook"),i()(),e(39,`
    `),t(40,"li"),e(41,`
      `),t(42,"a",6),e(43,"Pickleball Blog on Medium"),i(),e(44,`
    `),i(),e(45,`
  `),i(),e(46,`
  `),e(47,`
`),i(),e(48,`
`)),o&2&&(f(15),x(" ",E.version,""))},dependencies:[s,g,m],encapsulation:2})}}return n})();var P=[{path:"",component:p,data:{title:"About"}}],M=(()=>{class n{static{this.\u0275fac=function(o){return new(o||n)}}static{this.\u0275mod=a({type:n})}static{this.\u0275inj=l({imports:[c.forChild(P),c]})}}return n})();var Q=(()=>{class n{static{this.\u0275fac=function(o){return new(o||n)}}static{this.\u0275mod=a({type:n})}static{this.\u0275inj=l({imports:[b,s,M,k,m,p]})}}return n})();export{Q as AboutModule};
