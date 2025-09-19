import{a as se,b as de}from"./chunk-53QZN36B.js";import{a as pe}from"./chunk-JPSMQKDX.js";import{$a as G,C as O,Ca as h,Da as f,E as U,Ea as q,Fa as H,Ga as Y,Gb as Z,Ha as d,Hb as ee,Ia as a,Ib as te,Ja as r,Ka as m,La as C,Ma as S,N as V,Na as k,Nb as ie,O as y,R as $,Ta as z,Va as x,Vc as F,Wc as I,Za as J,_a as K,eb as e,fa as B,fb as v,gb as W,ha as l,kb as X,la as R,na as s,oa as b,p as g,q as D,qb as _,rb as N,rc as ne,sa as P,sc as oe,tc as re,ua as Q,uc as ae,v as L,vc as ce,wc as le,xc as E,z as j}from"./chunk-LXNGDRU4.js";function xe(i,t){if(i&1&&(e(0,`
          `),a(1,"div",6),e(2,`
            `),m(3,"youtube-player",7),e(4,`
            `),a(5,"div",8),e(6,`
              `),a(7,"p",9),e(8),r(),e(9,`
            `),r(),e(10,`
            `),a(11,"ul",10),e(12,`
              `),a(13,"li",11),e(14,`
                `),a(15,"i"),e(16,"Video by"),r(),e(17," "),a(18,"a",12),e(19),r(),e(20,`
              `),r(),e(21,`
              `),a(22,"li",11)(23,"i"),e(24,"Published on"),r(),e(25),_(26,"date"),r(),e(27,`
            `),r(),e(28,`
          `),r(),e(29,`
        `)),i&2){let p=x().$implicit;l(3),d("videoId",p.videoId),l(5),v(p.description),l(10),d("href",X(p.channelUrl),B),l(),v(p.channelTitle),l(6),W(" ",N(26,6,p.publishedAt))}}function ve(i,t){if(i&1&&(e(0,`
  `),a(1,"div",1),e(2,`
    `),a(3,"h2",2),e(4,`
      `),a(5,"button",3),e(6),r(),e(7,`
    `),r(),e(8,`
    `),a(9,"div",4),e(10,`
      `),a(11,"div",5),e(12,`
        `),P(13,xe,30,8,"ng-template"),e(14,`
      `),r(),e(15,`
    `),r(),e(16,`
  `),r(),e(17,`
  `)),i&2){let p=t.$implicit;l(),d("collapsed",p.title!=="First"),l(5),v(p.title)}}function ge(i,t){if(i&1&&(e(0,`
`),a(1,"p"),e(2),_(3,"json"),r(),e(4,`
`)),i&2){let p=x();l(2),v(N(3,1,p.videos))}}var ye=new pe("search-list"),w=(()=>{let t=class t{constructor(){this.items=["First","Second","Third"],this.debug=!1,this.apiLoaded=!1}ngOnInit(){if(!this.apiLoaded){let o=document.createElement("script");o.src="https://www.youtube.com/iframe_api",document.body.appendChild(o),this.apiLoaded=!0}ye.debug(this.videos)}};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=s({type:t,selectors:[["app-search-list"]],inputs:{videos:"videos"},decls:7,vars:2,consts:[["ngbAccordion","",3,"closeOthers"],["ngbAccordionItem","",3,"collapsed"],["ngbAccordionHeader",""],["ngbAccordionButton",""],["ngbAccordionCollapse",""],["ngbAccordionBody",""],[1,"card","border-0"],["width","100%",3,"videoId"],[1,"card-body"],[1,"card-text"],[1,"list-group","list-group-flush"],[1,"list-group-item"],[1,"card-link",3,"href"]],template:function(n,c){n&1&&(e(0,`
`),a(1,"div",0),e(2,`
  `),H(3,ve,18,2,null,null,q),r(),e(5,`

`),h(6,ge,5,3)),n&2&&(l(),d("closeOthers",!0),l(2),Y(c.videos),l(3),f(c.debug?6:-1))},dependencies:[se,E,re,le,ce,ae,ne,oe,ee,Z],styles:[".card-data[_ngcontent-%COMP%]{width:100%;display:flex;flex-direction:row;flex-wrap:wrap}"]});let i=t;return i})();var be=["input"],me=(()=>{let t=class t{constructor(){this.search=new Q}OnInit(){}ngAfterViewInit(){D(this.inputElement.nativeElement,"keyup").pipe(j(500),U("target","value"),O(),L(o=>o.length>2),g(o=>o)).subscribe(o=>{this.search.emit("pickleball technique "+o)})}};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=s({type:t,selectors:[["app-search-input"]],viewQuery:function(n,c){if(n&1&&J(be,5),n&2){let M;K(M=G())&&(c.inputElement=M.first)}},outputs:{search:"search"},decls:15,vars:0,consts:[["input",""],[1,"mb-3"],[1,"fab","fa-youtube"],["for","skill",1,"form-label"],["type","text","id","skill","placeholder","enter skill here",1,"form-control"]],template:function(n,c){n&1&&(C(0,"div",1),e(1,`
  `),e(2,`
  `),k(3,"i",2),e(4,`
  `),C(5,"label",3),e(6,"YouTube"),S(),e(7,`
  `),k(8,"input",4,0),e(10,`
  `),C(11,"small"),e(12,"example serve, return, dink, 3rd shot, speedup"),S(),e(13,`
`),S(),e(14,`
`))},encapsulation:2});let i=t;return i})();var ue=(()=>{let t=class t{constructor(o){this.http=o,this.apiURL=I.youtube.apiUrl,this.apiToken=I.youtube.apiKey,this.maxResults=I.youtube.maxResults}getVideos(o){let n=`${this.apiURL}?q=${o}&key=${this.apiToken}&part=snippet&type=video&maxResults=${this.maxResults}`;return this.http.get(n).pipe(g(c=>c.items))}};t.\u0275fac=function(n){return new(n||t)($(ie))},t.\u0275prov=V({token:t,factory:t.\u0275fac,providedIn:"root"});let i=t;return i})();function Se(i,t){i&1&&(e(0,`
  `),a(1,"div"),e(2,`
    `),a(3,"div",1),e(4,"No Video Found"),r(),e(5,`
  `),r(),e(6,`
  `))}function Ee(i,t){if(i&1&&(e(0,`
  `),m(1,"app-search-list",2),e(2,`
  `)),i&2){let p=x();l(),d("videos",p.videos)}}var T=(()=>{let t=class t{constructor(o){this.searchService=o,this.inputTouched=!1,this.loading=!1,this.videos=[]}OnInit(){}handleSearch(o){this.loading=!0,this.searchService.getVideos(o).subscribe(n=>{this.videos=n.map(c=>({title:c.snippet.title,videoId:c.id.videoId,videoUrl:`https://www.youtube.com/watch?v=${c.id.videoId}`,channelId:c.snippet.channelId,channelUrl:`https://www.youtube.com/channel/${c.snippet.channelId}`,channelTitle:c.snippet.channelTitle,description:c.snippet.description,publishedAt:new Date(c.snippet.publishedAt),thumbnail:c.snippet.thumbnails.high.url})),this.inputTouched=!0,this.loading=!1})}};t.\u0275fac=function(n){return new(n||t)(R(ue))},t.\u0275cmp=s({type:t,selectors:[["app-search-container"]],decls:7,vars:2,consts:[[3,"search"],["role","alert",1,"alert","alert-info"],[3,"videos"]],template:function(n,c){n&1&&(a(0,"div"),e(1,`
  `),a(2,"app-search-input",0),z("search",function(fe){return c.handleSearch(fe)}),r(),e(3,`
  `),h(4,Se,7,0),h(5,Ee,3,1),r(),e(6,`
`)),n&2&&(l(4),f(c.inputTouched&&!c.videos.length?4:-1),l(),f(c.loading?-1:5))},dependencies:[me,w],encapsulation:2});let i=t;return i})();var A=(()=>{let t=class t{constructor(){}ngOnInit(){console.log("Search load")}};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=s({type:t,selectors:[["video-search"]],decls:11,vars:0,consts:[[1,"container-fluid"],[1,"row"]],template:function(n,c){n&1&&(a(0,"div",0),e(1,`
  `),a(2,"h4"),e(3,"Training Videos"),r(),e(4,`
  `),a(5,"div",1),e(6,`
    `),m(7,"app-search-container"),e(8,`
  `),r(),e(9,`
`),r(),e(10,`
`))},dependencies:[T],encapsulation:2});let i=t;return i})();var Ie=[{path:"",component:A,data:{title:"Video Search"}}],he=(()=>{let t=class t{};t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=b({type:t}),t.\u0275inj=y({imports:[F.forChild(Ie),F]});let i=t;return i})();var ot=(()=>{let t=class t{};t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=b({type:t}),t.\u0275inj=y({imports:[te,de,he,E,A,w,T]});let i=t;return i})();export{ot as TraininghModule};
