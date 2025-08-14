import{a as re,b as ae}from"./chunk-TA6LLGSN.js";import{a as oe}from"./chunk-U4HGQDOS.js";import{$a as e,Bb as J,C as N,Cb as K,Db as G,E as F,Ea as h,Fa as U,Ga as $,Ha as B,Ia as r,Ib as W,Ja as o,Ka as c,M as D,N as g,Q as R,Qa as P,Qc as M,Ra as f,Rc as S,Ua as Q,Xa as q,Ya as H,Za as Y,_ as j,ab as x,bb as z,ga as V,ia as p,jb as w,kb as _,ma as O,mc as X,nc as Z,oa as l,oc as ee,p as v,pa as C,pc as te,q as A,qc as ie,rc as ne,sc as y,ta as u,v as k,z as L,za as s}from"./chunk-7YISJ2RF.js";function de(t,m){if(t&1&&(e(0,`
          `),r(1,"div",6),e(2,`
            `),c(3,"youtube-player",7),e(4,`
            `),r(5,"div",8),e(6,`
              `),r(7,"p",9),e(8),o(),e(9,`
            `),o(),e(10,`
            `),r(11,"ul",10),e(12,`
              `),r(13,"li",11),e(14,`
                `),r(15,"i"),e(16,"Video by"),o(),e(17," "),r(18,"a",12),e(19),o(),e(20,`
              `),o(),e(21,`
              `),r(22,"li",11)(23,"i"),e(24,"Published on"),o(),e(25),w(26,"date"),o(),e(27,`
            `),o(),e(28,`
          `),o(),e(29,`
        `)),t&2){let i=f().$implicit;p(3),s("videoId",i.videoId),p(5),x(i.description),p(10),Q("href",i.channelUrl,V),p(),x(i.channelTitle),p(6),z(" ",_(26,5,i.publishedAt),"")}}function me(t,m){if(t&1&&(e(0,`
  `),r(1,"div",1),e(2,`
    `),r(3,"h2",2),e(4,`
      `),r(5,"button",3),e(6),o(),e(7,`
    `),o(),e(8,`
    `),r(9,"div",4),e(10,`
      `),r(11,"div",5),e(12,`
        `),u(13,de,30,7,"ng-template"),e(14,`
      `),o(),e(15,`
    `),o(),e(16,`
  `),o(),e(17,`
  `)),t&2){let i=m.$implicit;p(),s("collapsed",i.title!=="First"),p(5),x(i.title)}}function ue(t,m){if(t&1&&(e(0,`
`),r(1,"p"),e(2),w(3,"json"),o(),e(4,`
`)),t&2){let i=f();p(2),x(_(3,1,i.videos))}}var he=new oe("search-list"),b=(()=>{class t{constructor(){this.items=["First","Second","Third"],this.debug=!1,this.apiLoaded=!1}ngOnInit(){if(!this.apiLoaded){let i=document.createElement("script");i.src="https://www.youtube.com/iframe_api",document.body.appendChild(i),this.apiLoaded=!0}he.debug(this.videos)}static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275cmp=l({type:t,selectors:[["app-search-list"]],inputs:{videos:"videos"},decls:7,vars:2,consts:[["ngbAccordion","",3,"closeOthers"],["ngbAccordionItem","",3,"collapsed"],["ngbAccordionHeader",""],["ngbAccordionButton",""],["ngbAccordionCollapse",""],["ngbAccordionBody",""],[1,"card","border-0"],["width","100%",3,"videoId"],[1,"card-body"],[1,"card-text"],[1,"list-group","list-group-flush"],[1,"list-group-item"],[1,"card-link",3,"href"]],template:function(n,a){n&1&&(e(0,`
`),r(1,"div",0),e(2,`
  `),$(3,me,18,2,null,null,U),o(),e(5,`

`),u(6,ue,5,3)),n&2&&(p(),s("closeOthers",!0),p(2),B(a.videos),p(3),h(a.debug?6:-1))},dependencies:[re,y,ee,ne,ie,te,X,Z,K,J],styles:[".card-data[_ngcontent-%COMP%]{width:100%;display:flex;flex-direction:row;flex-wrap:wrap}"]})}}return t})();var fe=["input"],pe=(()=>{class t{constructor(){this.search=new j}OnInit(){}ngAfterViewInit(){A(this.inputElement.nativeElement,"keyup").pipe(L(500),F("target","value"),N(),k(i=>i.length>2),v(i=>i)).subscribe(i=>{this.search.emit("pickleball technique "+i)})}static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275cmp=l({type:t,selectors:[["app-search-input"]],viewQuery:function(n,a){if(n&1&&q(fe,5),n&2){let T;H(T=Y())&&(a.inputElement=T.first)}},outputs:{search:"search"},decls:15,vars:0,consts:[["input",""],[1,"mb-3"],[1,"fab","fa-youtube"],["for","skill",1,"form-label"],["type","text","id","skill","placeholder","enter skill here",1,"form-control"]],template:function(n,a){n&1&&(r(0,"div",1),e(1,`
  `),e(2,`
  `),c(3,"i",2),e(4,`
  `),r(5,"label",3),e(6,"YouTube"),o(),e(7,`
  `),c(8,"input",4,0),e(10,`
  `),r(11,"small"),e(12,"example serve, return, dink, 3rd shot, speedup"),o(),e(13,`
`),o(),e(14,`
`))},encapsulation:2})}}return t})();var ce=(()=>{class t{constructor(i){this.http=i,this.apiURL=S.youtube.apiUrl,this.apiToken=S.youtube.apiKey,this.maxResults=S.youtube.maxResults}getVideos(i){let n=`${this.apiURL}?q=${i}&key=${this.apiToken}&part=snippet&type=video&maxResults=${this.maxResults}`;return this.http.get(n).pipe(v(a=>a.items))}static{this.\u0275fac=function(n){return new(n||t)(R(W))}}static{this.\u0275prov=D({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})();function ve(t,m){t&1&&(e(0,`
  `),r(1,"div"),e(2,`
    `),r(3,"div",1),e(4,"No Video Found"),o(),e(5,`
  `),o(),e(6,`
  `))}function ge(t,m){if(t&1&&(e(0,`
  `),c(1,"app-search-list",2),e(2,`
  `)),t&2){let i=f();p(),s("videos",i.videos)}}var I=(()=>{class t{constructor(i){this.searchService=i,this.inputTouched=!1,this.loading=!1,this.videos=[]}OnInit(){}handleSearch(i){this.loading=!0,this.searchService.getVideos(i).subscribe(n=>{this.videos=n.map(a=>({title:a.snippet.title,videoId:a.id.videoId,videoUrl:`https://www.youtube.com/watch?v=${a.id.videoId}`,channelId:a.snippet.channelId,channelUrl:`https://www.youtube.com/channel/${a.snippet.channelId}`,channelTitle:a.snippet.channelTitle,description:a.snippet.description,publishedAt:new Date(a.snippet.publishedAt),thumbnail:a.snippet.thumbnails.high.url})),this.inputTouched=!0,this.loading=!1})}static{this.\u0275fac=function(n){return new(n||t)(O(ce))}}static{this.\u0275cmp=l({type:t,selectors:[["app-search-container"]],decls:7,vars:2,consts:[[3,"search"],["role","alert",1,"alert","alert-info"],[3,"videos"]],template:function(n,a){n&1&&(r(0,"div"),e(1,`
  `),r(2,"app-search-input",0),P("search",function(se){return a.handleSearch(se)}),o(),e(3,`
  `),u(4,ve,7,0)(5,ge,3,1),o(),e(6,`
`)),n&2&&(p(4),h(a.inputTouched&&!a.videos.length?4:-1),p(),h(a.loading?-1:5))},dependencies:[pe,b],encapsulation:2})}}return t})();var E=(()=>{class t{constructor(){}ngOnInit(){console.log("Search load")}static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275cmp=l({type:t,selectors:[["video-search"]],decls:11,vars:0,consts:[[1,"container-fluid"],[1,"row"]],template:function(n,a){n&1&&(r(0,"div",0),e(1,`
  `),r(2,"h4"),e(3,"Training Videos"),o(),e(4,`
  `),r(5,"div",1),e(6,`
    `),c(7,"app-search-container"),e(8,`
  `),o(),e(9,`
`),o(),e(10,`
`))},dependencies:[I],encapsulation:2})}}return t})();var Ce=[{path:"",component:E,data:{title:"Video Search"}}],le=(()=>{class t{static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275mod=C({type:t})}static{this.\u0275inj=g({imports:[M.forChild(Ce),M]})}}return t})();var Ze=(()=>{class t{static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275mod=C({type:t})}static{this.\u0275inj=g({imports:[G,ae,le,y,E,b,I]})}}return t})();export{Ze as TraininghModule};
