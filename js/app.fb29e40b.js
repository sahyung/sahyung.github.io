(function(e){function t(t){for(var i,s,r=t[0],l=t[1],c=t[2],u=0,d=[];u<r.length;u++)s=r[u],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&d.push(a[s][0]),a[s]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(e[i]=l[i]);p&&p(t);while(d.length)d.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],i=!0,r=1;r<n.length;r++){var l=n[r];0!==a[l]&&(i=!1)}i&&(o.splice(t--,1),e=s(s.s=n[0]))}return e}var i={},a={app:0},o=[];function s(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=i,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)s.d(n,i,function(t){return e[t]}.bind(null,i));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=t,r=r.slice();for(var c=0;c<r.length;c++)t(r[c]);var p=l;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"169f":function(e,t,n){"use strict";var i=n("c762"),a=n.n(i);a.a},"2b18":function(e,t,n){},"383a":function(e,t,n){"use strict";var i=n("38a0"),a=n.n(i);a.a},"38a0":function(e,t,n){},"46a5":function(e,t,n){},"4f06":function(e,t,n){},"4f1e":function(e,t,n){"use strict";var i=n("4f06"),a=n.n(i);a.a},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var i=n("2b0e"),a=(n("a481"),{install:function(e){e.mixin({methods:{publicPath:function(e){return"/"+e.replace(/^\/+/g,"")}}})}}),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("v-content",[n("dark-template-container")],1)],1)},s=[],r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",{attrs:{id:"dark-template"}},[n("v-fade-transition",{attrs:{mode:"out-in",type:"animation"}},[n("v-content",[n("v-container",{attrs:{fluid:"","fill-height":""}},[n("github-ribbon"),n("v-layout",{attrs:{"align-center":"","justify-center":""}},[n("v-flex",{attrs:{md10:"",sm12:""}},[n("v-layout",{attrs:{wrap:""}},[n("v-flex",{attrs:{md4:""}},[n("sidebar-container",{staticClass:"fill-height"})],1),n("v-flex",{attrs:{md8:""}},[n("content-container",{staticClass:"fill-height"})],1)],1),n("v-layout",[n("v-flex",{attrs:{md12:""}},[n("timeline-primary"),n("timeline-endless")],1)],1)],1)],1)],1)],1)],1)],1)},l=[],c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",{attrs:{color:"grey darken-3",dark:""}},[n("v-card-text",[n("avatar"),n("div",{staticClass:"text-sm-center mb-4 mt-3"},[n("h1",[e._v("\n        Andhi "),n("span",{staticClass:"light-blue--text text--lighten-3"},[e._v("Arifin")])]),n("span",[e._v("\n        A challenge-loving backend developer\n      ")])]),n("sidebar-section",{attrs:{options:e.sections.info}}),n("sidebar-section",{attrs:{options:e.sections.socials}}),n("sidebar-section",{attrs:{options:e.sections.hobbies},scopedSlots:e._u([{key:"item",fn:function(t){var i=t.item;return[n("v-chip",[n("v-avatar",[n("v-icon",[e._v("\n              "+e._s(i.icon)+"\n            ")])],1),e._v("\n          "+e._s(i.text)+"\n        ")],1)]}}])}),n("sidebar-section",{attrs:{options:e.sections.languages},scopedSlots:e._u([{key:"items",fn:function(t){var i=t.items;return[n("v-container",{attrs:{"pa-0":""}},[n("v-layout",{staticClass:"text-xs-center",attrs:{wrap:""}},[e._l(i,(function(t,i){return[n("v-flex",{key:i,attrs:{md3:"",sm4:"",xs6:""}},[n("v-progress-circular",{staticClass:"ma-2",attrs:{rotate:"360",size:"65",width:"2",value:t.value,color:"white"}},[e._v("\n                  "+e._s(t.text)+"\n                ")])],1)]}))],2)],1)]}}])})],1)],1)},p=[],u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"text-md-center"},[n("v-avatar",{attrs:{color:"grey lighten-4",size:"120"}},[n("img",{attrs:{src:e.publicPath("/img/avatar.jpg"),alt:"Andhi Arifin"}})])],1)},d=[],m={name:"Avatar"},h=m,g=n("2877"),f=n("6544"),v=n.n(f),b=n("8212"),y=Object(g["a"])(h,u,d,!1,null,"096cce0e",null),w=y.exports;v()(y,{VAvatar:b["a"]});var x=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"mb-4"},[n("div",{staticClass:"title mb-3"},[e._v("\n    "+e._s(e.options.title)+"\n  ")]),e.$slots.default?e._t("default"):e.$scopedSlots.items?[e._t("items",null,{items:e.options.items})]:e.$scopedSlots.item?[e._l(e.options.items,(function(t){return e._t("item",null,{item:t})}))]:e._l(e.options.items,(function(e,t){return n("sidebar-section-item",{key:t,attrs:{item:e}})}))],2)},C=[],k=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-layout",[e.hasIcon?n("v-flex",{attrs:{xs2:""}},[n("v-icon",[e._v("\n      "+e._s(e.item.icon)+"\n    ")])],1):e._e(),n("v-flex",{attrs:{xs10:e.hasIcon,xs12:!e.hasIcon}},[n("div",[e._v("\n      "+e._s(e.item.name)+"\n    ")]),n("p",[e.item.link?n("a",{staticClass:"grey--text",attrs:{href:e.item.link,target:"_blank"}},[e._v("\n        "+e._s(e.item.text)+"\n      ")]):n("span",{staticClass:"grey--text"},[e._v("\n        "+e._s(e.item.text)+"\n      ")])])])],1)},_=[],S={name:"SidebarSectionItem",props:{item:{type:Object,default:function(){}}},computed:{hasIcon:function(){return!!this.item.icon}}},I=S,D=n("0e8f"),T=n("132d"),P=n("a722"),j=Object(g["a"])(I,k,_,!1,null,"a33bb200",null),V=j.exports;v()(j,{VFlex:D["a"],VIcon:T["a"],VLayout:P["a"]});var A={name:"SidebarSection",components:{SidebarSectionItem:V},props:{options:{type:Object,default:function(){}}}},M=A,O=(n("e822"),Object(g["a"])(M,x,C,!1,null,"51d3378f",null)),R=O.exports,E={name:"Sidebar",components:{SidebarSection:R,Avatar:w},data:function(){return{sections:{info:{title:"INFO",items:[{name:"Email",icon:"mdi-email",text:"ende.astro@gmail.com"},{name:"Birth Date",icon:"mdi-cake-variant",text:"August 17, 1990"},{name:"Habitation",icon:"mdi-map-marker",text:"Yogyakarta, Indonesia"}]},socials:{title:"SOCIALS",items:[{icon:"mdi-github",text:"github.com/sahyung",link:"https://github.com/sahyung"},{icon:"mdi-linkedin",text:"linkedin.com/in/sahyung",link:"https://linkedin.com/in/sahyung"},{icon:"mdi-instagram",text:"instagram.com/sa_hyung",link:"https://instagram.com/sa_hyung"}]},hobbies:{title:"HOBBIES",items:[{icon:"mdi-bullseye",text:"Getting out of Safe Zone"},{icon:"mdi-biohazard",text:"Challenges"},{icon:"mdi-bike",text:"Cycling"},{icon:"mdi-image-filter-hdr",text:"Nature"},{icon:"mdi-auto-fix",text:"Hacking Stuffs"},{icon:"mdi-draw",text:"Drawing"},{icon:"mdi-karate",text:"Sports"},{icon:"mdi-music",text:"Music"},{icon:"mdi-book-open-page-variant",text:"Books"},{icon:"mdi-android-debug-bridge",text:"Tickling Bugs!"}]},languages:{title:"LANGUAGES",items:[{text:"English",value:70},{text:"Indonesia",value:100}]}}}}},L=E,H=(n("cade"),n("b0af")),B=n("99d9"),F=n("cc20"),W=n("a523"),N=n("490a"),$=Object(g["a"])(L,c,p,!1,null,"95012318",null),G=$.exports;v()($,{VAvatar:b["a"],VCard:H["a"],VCardText:B["a"],VChip:F["a"],VContainer:W["a"],VFlex:D["a"],VIcon:T["a"],VLayout:P["a"],VProgressCircular:N["a"]});var z=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",{attrs:{color:"grey lighten-4",light:""}},[n("v-card-text",[n("content-section",{attrs:{title:"Who am I?"}},[e._v("\n      I'm a backend developer born in Kediri, East Java who have been working as PHP Programmer since 2013."),n("br"),e._v("\n      I'm interested and skilled in different topics of Information Technology including programming, web development, and computer and network security.\n    ")]),e.prouds?n("content-section",{attrs:{title:"What am I proud of?"}},e._l(e.prouds,(function(t,i){return n("v-layout",{key:i},[n("v-flex",{attrs:{md1:"",xs3:""}},[n("v-icon",{attrs:{right:""}},[e._v("\n            "+e._s(t.icon)+"\n          ")])],1),n("v-flex",{attrs:{md11:"",xs9:""}},[n("p",[n("strong",[e._v(e._s(t.text))]),n("br"),n("small",[e._v(e._s(t.source))])])])],1)})),1):e._e(),e.educations?n("content-section",{attrs:{title:"Education"}},e._l(e.educations,(function(t,i){return n("v-layout",{key:i},[n("v-flex",{attrs:{md4:""}},[e._v("\n          "+e._s(t.from)+" - "+e._s(t.to)+"\n        ")]),n("v-flex",{attrs:{md8:""}},[t.title?n("strong",[e._v(e._s(t.title))]):e._e(),t.location?n("div",[n("i",[e._v(e._s(t.location))])]):e._e(),t.description?n("div",[e._v("\n            "+e._s(t.description)+"\n          ")]):e._e()])],1)})),1):e._e(),e.skills?n("content-section",{attrs:{id:"to-timeline",title:"Skills"}},[n("template",{slot:"actions"},[e._v("\n        (% are relative not absolute)\n      ")]),n("v-layout",{attrs:{wrap:""}},[e._l(e.skills,(function(t,i){return[t.divider?n("v-flex",{key:i,attrs:{md12:"",xs12:"","mb-4":""}}):n("v-flex",{key:i,attrs:{md6:"",xs12:""}},[n("div",{staticClass:"mr-2 ml-2"},[n("div",{staticClass:"align-center"},[n("v-icon",{attrs:{small:""}},[e._v("\n                  "+e._s(t.icon)+"\n                ")]),e._v("\n                "+e._s(t.title)+"\n              ")],1),n("v-progress-linear",{staticClass:"progress",attrs:{color:"secondary",height:"3",value:t.value}})],1)])]}))],2)],2):e._e()],1)],1)},U=[],J=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",{attrs:{flat:""}},[n("v-card-title",[n("h3",{staticClass:"title font-weight-light mb-1"},[e._v("\n      "+e._s(e.title)+"\n    ")]),n("v-spacer"),e._t("actions")],2),n("v-card-text",[e._t("default")],2)],1)},K=[],q={name:"ContentSection",components:{},props:{title:{type:String,default:""}}},Y=q,Z=(n("d1ae"),n("12b2")),Q=n("9910"),X=Object(g["a"])(Y,J,K,!1,null,"331eb13e",null),ee=X.exports;v()(X,{VCard:H["a"],VCardText:B["a"],VCardTitle:Z["a"],VSpacer:Q["a"]});var te={name:"MainContent",components:{ContentSection:ee},data:function(){return{prouds:[{icon:"mdi-brain",text:"Analytical",source:"(Analytical skills)"},{icon:"mdi-heart",text:"Enjoy",source:"(I enjoy software development)"},{icon:"mdi-speedometer",text:"Engagement",source:"(I work in full engagement)"},{icon:"mdi-account-multiple",text:"Player",source:"(I could work either solo or being team player)"},{icon:"mdi-account-heart",text:"Reliable and trusted by clients.",source:"(Whilst some freelancers go AWOL when things gets tough, I always work it through to the end)"},{icon:"mdi-star",text:"5-star Support",source:"(Sometimes delivering the job is half the work, I'm always around to provide ongoing support)"}],educations:[{from:"2009",to:"2015 (not finished yet)",title:"Bachelor's degree, System Information",location:"University of Gajayana Malang",description:"Became a member of University Academic Association of Computer Science"}],skills:[{title:"PHP",icon:"mdi-language-php",value:95},{title:"JavaScript",icon:"mdi-language-javascript",value:80},{title:"Laravel Framework",icon:"mdi-laravel",value:90},{title:"NodeJS",icon:"mdi-nodejs",value:75},{title:"MySQL",icon:"mdi-database",value:80},{title:"MongoDB",icon:"mdi-database",value:70},{divider:!0},{title:"Ubuntu Server",icon:"mdi-ubuntu",value:70},{title:"CentOS Server",icon:"mdi-linux",value:47},{title:"Web Application Security",icon:"mdi-shield-lock",value:50},{title:"Test Driven Development",icon:"mdi-test-tube",value:46},{title:"Continuous Integration/Continuous Delivery",icon:"mdi-truck-fast",value:35},{title:"Git",icon:"mdi-git",value:87},{divider:!0},{title:"Hardware Development",icon:"mdi-chip",value:29},{title:"C/C++",icon:"mdi-language-cpp",value:48},{divider:!0}]}}},ne=te,ie=(n("4f1e"),n("8e36")),ae=Object(g["a"])(ne,z,U,!1,null,"c788b3a4",null),oe=ae.exports;v()(ae,{VCard:H["a"],VCardText:B["a"],VFlex:D["a"],VIcon:T["a"],VLayout:P["a"],VProgressLinear:ie["a"]});var se=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",{attrs:{color:"grey lighten-4",light:""}},[n("v-card-text",[n("content-section",{attrs:{id:"timeline",title:e.detailed?"My Life in a Nutshell":"My Experiences"}},[n("template",{slot:"actions"},[n("div",[n("v-switch",{attrs:{label:e.detailed?"Detailed":"Summary"},model:{value:e.detailed,callback:function(t){e.detailed=t},expression:"detailed"}})],1)]),n("v-timeline",{attrs:{dense:""}},e._l(e.orderedItems,(function(t,i){return n("v-timeline-item",{key:i,class:{transparent:t.transparent},attrs:{icon:t.icon||"",large:""},scopedSlots:e._u([t.iconImage?{key:"icon",fn:function(){return[n("v-avatar",[n("img",{attrs:{src:e.publicPath(t.iconImage)}})])]},proxy:!0}:null,{key:"opposite",fn:function(){},proxy:!0}],null,!0)},[n("v-layout",[e.$vuetify.breakpoint.smAndUp?n("v-flex",{attrs:{md1:"",sm2:"","align-self-center":""}},[n("span",[e._v(e._s(t.year))])]):e._e(),n("v-flex",{attrs:{md11:"",sm10:"",xs12:""}},[n("v-card",{staticClass:"elevation-1"},[n("v-card-title",{staticClass:"pb-0"},[n("div",[e.$vuetify.breakpoint.xsOnly?n("p",[e._v("\n                      "+e._s(t.year)+"\n                    ")]):e._e(),n("h3",[e._v(e._s(t.title))])])]),n("v-card-text",[n("v-layout",{attrs:{wrap:""}},[n("v-flex",{attrs:{md7:!!t.image,md12:!t.image,xs12:""}},[n("div",{staticClass:"mr-1"},[t.text?n("span",{staticClass:"pre"},[e._v(e._s(t.text))]):t.html?n("div",{domProps:{innerHTML:e._s(t.html)}}):e._e()])]),t.image?n("v-flex",{attrs:{md5:"",xs12:""}},[n("div",{staticClass:"mt-2"},[Array.isArray(t.image)?n("v-carousel",{attrs:{"show-arrows":!1,height:325}},e._l(t.image,(function(t,i){return n("v-carousel-item",{key:i,attrs:{src:e.publicPath(t)}})})),1):n("v-img",{attrs:{"max-height":t.imageHeight?t.imageHeight:"",src:e.publicPath(t.image)}})],1)]):e._e()],1)],1)],1)],1)],1)],1)})),1)],2)],1)],1)},re=[],le=n("75fc"),ce={name:"Timeline",components:{ContentSection:ee},data:function(){return{detailed:!0,items:[{detailed:!0,transparent:!0,year:"1990",title:"Born on August 17, 1990",html:"With a chance of %0.00000000000512.<br>I'm completely aware of value of the life!",icon:"mdi-cake-variant"},{detailed:!0,transparent:!0,year:"2004",title:"Touched a Mouse",html:'ME: "Woooow!"<br><i>... Of course got slapped later!</i>',icon:"mdi-mouse-variant"},{detailed:!0,year:"2010",transparent:!0,title:"Started as a freelancer on my second year in college",icon:"mdi-web",html:"\n                <p>\n                    It was November 19, 2010 that one of my profesor asked me to assist his nephew doing his thesis.\n                </p>\n                <p>\n                    Since then, I'm doing freelance work to support my college tuition.\n                </p>\n        "},{detailed:!0,year:"2013",transparent:!0,title:"New Revass Tool",html:'\n            <p>\n                Role: Developer.<br />\n                Client: <a href="https://www.telkomsel.com">PT. Telekomunikasi Seluler .Tbk</a>.<br />\n            </p>\n            <p>\n                Project Description:<br />\n                The project\'s goal is to supports Telkomsel’s Revenue Assurance division.<br />\n            </p>\n            <p>\n                Responsibilities/Contribution & Accomplishment:\n                <ul>\n                  <li>Create Hgrid Workflow.</li>\n                  <li>Developing application based on business analyst.</li>\n                  <li>Create Running Script.</li>\n                  <li>Developing with Shellscript.</li>\n                  <li>Monitors application execution and resolves issues on application development.</li>\n                </ul>\n            </p>\n        ',iconImage:"./img/timeline/tsel-icon.png"},{detailed:!0,year:"2014",transparent:!0,title:"REDBRICK",html:'\n            <p>\n                Role: Developer.<br />\n                Client: <a href="https://www.telkomsel.com">PT. Telekomunikasi Seluler .Tbk</a>.<br />\n            </p>\n            <p>\n                Project Description:<br />\n                Red Brick is an early implementation of Revenue Assurance at Telkomsel. Its goals are to ensure billing data (prepaid & post paid) processing accuracy, and to avoid or minimize revenue leakage.<br />\n            </p>\n            <p>\n                Responsibilities/Contribution & Accomplishment:\n                <ul>\n                  <li>Create Hgrid Workflow.</li>\n                  <li>Developing application based on business analyst.</li>\n                </ul>\n            </p>\n        ',iconImage:"./img/timeline/tsel-icon.png"},{detailed:!0,year:"2015",transparent:!0,title:"DIAMOND Stock Health Check Index (SHCI)",html:'\n            <p>\n                Role: Developer.<br />\n                Client: <a href="https://www.telkomsel.com">PT. Telekomunikasi Seluler .Tbk</a>.<br />\n            </p>\n            <p>\n                Project Description:<br />\n                In 2015, Telkomsel has limited distribution in term of SIM card and Sales Area. It is expected to be more effective to deliver SIM card to end user. Furthermore, the parameter of effective sales is if there are usage and or recharge from new sales activation. Additionally, we need to define parameter of sales effectiveness to ensure quality of SHCI subscriber. Moreover, SHCI is a mechanism to grouping category of sales base on usage and recharge to determine quality of sales.<br />\n            </p>\n            <p>\n                Responsibilities/Contribution & Accomplishment:\n                <ul>\n                  <li>Create Hgrid Workflow.</li>\n                  <li>Developing application based on business analyst.</li>\n                </ul>\n            </p>\n        ',iconImage:"./img/timeline/tsel-icon.png"},{detailed:!0,year:"2015 - 17",transparent:!0,title:"DIAMOND OMS - DSI POI",html:'\n            <p>\n                Role: Developer Analyst.<br />\n                Client: <a href="https://www.telkomsel.com">PT. Telekomunikasi Seluler .Tbk</a>.<br />\n            </p>\n            <p>\n                Project Description:<br />\n                Increasing revenue & CB is not only about prepaid but also post paid. Compared to others competitor, Telkomsel post paid performance is outstanding. Growth and market share is dominant. Our challenge is internal target itself, we have to reach double digit growth. Using BAU channel & selling method is not enough. Remove barrier that post paid is identic with difficulties of apply and Grapari channel. Post paid have to easy to get & easy to use, that’s why kartu Halo have to go retail with great supporting tools & system.<br />\n            </p>\n            <p>\n                Responsibilities/Contribution & Accomplishment:\n                <ul>\n                  <li>Create Hgrid Workflow.</li>\n                  <li>Developing application based on business analyst.</li>\n                  <li>Create Running Script.</li>\n                  <li>Developing with Shellscript.</li>\n                  <li>Monitors application execution and resolves issues on application development.</li>\n                </ul>\n            </p>\n        ',iconImage:"./img/timeline/tsel-icon.png"},{detailed:!0,year:"2016 - 17",transparent:!0,title:"HDPISAT – Subscriber (Source Check & Validation Subs, CVM)",html:'\n            <p>\n                Role: Developer.<br />\n                Client: <a href="https://indosatooredoo.com">PT. Indosat .Tbk</a>.<br />\n            </p>\n            <p>\n                Project Description:<br />\n                Hadoop Data Processing is a platform which dealing with big size data in batch or even real time process. The Hadoop data processing will enhance and raise the capability of data analysis which needed by Indosat business users, for handling future challenge which will be more complex in terms of data analysis, data volume and data speed.<br />\n            </p>\n            <p>\n                Responsibilities/Contribution & Accomplishment:\n                <ul>\n                  <li>Create Hgrid Workflow.</li>\n                  <li>Developing application based on business analyst.</li>\n                  <li>Create Running Script.</li>\n                  <li>Developing with Shellscript.</li>\n                  <li>Monitors application execution and resolves issues on application development.</li>\n                </ul>\n            </p>\n        ',iconImage:"./img/timeline/indosat-icon.ico"},{detailed:!0,year:"2016 - 17",transparent:!0,title:"Vgrid – Voracity Hgrid Gateway",html:'\n            <p>\n                Role: Developer.<br />\n                Client: <a href="https://www.iriworldwide.com/en-us">IRI Company</a>.<br />\n            </p>\n            <p>\n                Project Description:<br />\n                Build server-side application that act as a gateway for Hadoop orchestration tools.<br />\n            </p>\n            <p>\n                Responsibilities/Contribution & Accomplishment:\n                <ul>\n                  <li>Create Rest API.</li>\n                  <li>Developing application based on business analyst.</li>\n                  <li>Create Running Script.</li>\n                  <li>Developing with <a href="https://nodejs.org/">Nodejs</a> + <a href="https://www.mongodb.com//">MongoDB</a>.</li>\n                </ul>\n            </p>\n        ',iconImage:"./img/timeline/iri-icon.ico"},{year:"2013 - 17",title:"PT. Dua Empat Tujuh",html:'\n                <p>\n                    <a href="https://www.solusi247.com/">Solusi247</a> is an integrated solution for Information Communication Technology (ICT). This service was established on August 2000 from group of people with more than 13 year experience in ICT industry.\n                </p>\n                <p>\n                    The company services focus on consultation, especially for Database and Data Warehouse solution (the core competence of Solusi247), although not to close the hardware and network solution, as part of integration of those core solutions.\n                </p>\n                <p>\n                    Main responsibilities:\n                    <ul>\n                      <li>Create Hgrid Workflow</li>\n                      <li>Create running script.</li>\n                      <li>Develop and Maintenance application based on business analyst.</li>\n                      <li>Monitors application execution and resolves issues on application development.</li>\n                    </ul>\n                </p>\n        ',image:"./img/timeline/247.jpg",iconImage:"./img/timeline/247-icon.png"},{year:"2017 - 19",transparent:!0,title:"Heolys",html:'\n            <p>\n                Role: Backend Developer.<br />\n                Client: <a href="http://heolys.fr">HEOLYS</a>\n            </p>\n            <p>\n                HEOLYS is a start-up specializing in the field of mobile application development created by the founders of e-Conception. Since its launch, it has been joined by private and institutional investors (BPI in particular) in order to consolidate its growth. It is made up of a complete team (network administrators, consultants / advisers, backend and mobile developers, graphic designers, ergonomists).\n            </p>\n            <p>\n                Heolys’s breakthrough in the field of mobile applications is based on a unique know-how in geolocation without network coverage, the deployment of private social networks and dynamic information feedback. The engine of our smartphone applications is continuously optimized by our team of 10 developers and graphic designers working in our development studio. This allows for up-to-date developments using the latest technologies available.<br />\n            </p>\n            <p>\n                Main Responsibilities:\n                <ul>\n                  <li>Develop and Maintenance Rest APIs.</li>\n                  <li>Develop and Maintenance applications based on business analyst.</li>\n                  <li>Create Running Scripts.</li>\n                  <li>Developing with <a href="https://symfony.com/">Symfony</a> Framework.</li>\n                </ul>\n            </p>\n            <p>\n                Delivered Projects:\n                <ul>\n                  <li><a href="https://play.google.com/store/apps/details?id=fr.econception.heolys">Heolys</a></li>\n                  <li><a href="https://play.google.com/store/apps/details?id=fr.appsolute.naturapass">NaturaPass</a></li>\n                  <li><a href="https://play.google.com/store/apps/details?id=fr.econception.vigifaune">Vigifaune</a></li>\n                  <li><a href="https://play.google.com/store/apps/details?id=com.econception.football.fbbp">FBBP01</a></li>\n                  <li><a href="https://play.google.com/store/apps/details?id=fr.econception.soup">Pépinières SOUPE</a></li>\n                  <li><a href="https://play.google.com/store/apps/details?id=fr.econception.siti">Siti</a></li>\n                  <li><a href="https://play.google.com/store/apps/details?id=fr.econception.semprita">Semprita</a></li>\n                  <li><a href="https://play.google.com/store/apps/details?id=fr.econception.jumping">Jumping Place</a></li>\n                </ul>\n            </p>\n        ',iconImage:"./img/timeline/heolys-icon.png"},{year:"2018 - 19",transparent:!1,title:"Fondaco",html:'\n            <p>\n                Role: Backend Developer. (Freelance)<br />\n                Client: <a href="http://www.fondacodental.com/">Fondaco</a>\n            </p>\n            <p>\n                Founded in 1984 by Mr Fonda, Fondaco Dental Group has grown steadily and enhanced its services to the dental professions through inspired innovations and technology. We are constantly striving towards customer driven services, focusing on enhancing one stop solution of TOP manufacturers of dental equipment, supplies and consumable. With highly skilled dedicated to twenty four hours services back up, Fondaco Dental Group has earned a strong trust of its now extensive client base, spread throughout this huge archipelago.\n            </p>\n            <p>\n                A commitment to education and training for both clients and staff has underpinned the success of Fondaco Dental. Regular professional seminars utilizing international experts locally and internationally, have become a must attend events within our education community.\n            </p>\n            <p>\n                Main Responsibilities:\n                <ul>\n                  <li>Develop and Maintenance Rest API.</li>\n                  <li>Develop admin page based on business analyst.</li>\n                  <li>Developing with <a href="https://laravel.com/">Laravel  </a> Framework.</li>\n                </ul>\n            </p>\n            <p>\n                Delivered Projects:\n                <ul>\n                  <li><a href="https://play.google.com/store/apps/details?id=com.fondacoshop">Fondaco</a></li>\n                </ul>\n            </p>\n        ',iconImage:"./img/timeline/fondaco-icon.png",image:["./img/timeline/fondaco-0.jpg","./img/timeline/fondaco-1.jpg","./img/timeline/fondaco-2.jpg"]},{detailed:!0,year:"2019 - 20",transparent:!0,title:"Solene-R Platforme",html:'\n            <p>\n                Role: Backend Developer.<br />\n                Client: <a href="https://www.solene-r.com/">SOLENE-R</a>\n            </p>\n            <p>\n                Project Description:<br />\n                <a href="https://plateforme.solene-r.com//">SOLENE-R Platforme</a> is a Document Management System which transform the conventional management system into digital.\n            </p>\n            <p>\n                Responsibilities/Contribution & Accomplishment:\n                <ul>\n                  <li>Develop and Maintenance Rest API.</li>\n                  <li>Develop and Maintenance application based on business analyst.</li>\n                  <li>Developing with <a href="https://laravel.com/">Laravel</a> Framework.</li>\n                </ul>\n            </p>\n        ',iconImage:"./img/timeline/solene-icon.png"},{year:"2019",transparent:!1,title:"Kreditpro",html:'\n            <p>\n                Role: Backend Developer. (Freelance)<br />\n                Client: <a href="https://kreditpro.id/">Kreditpro</a>\n            </p>\n            <p>\n                KreditPro is Financial Technology company based in Indonesia, with main purpose to provide loan using peer-to-peer lending mechanism. It aims to bridge lender and borrower through innovative and safe platform without the intermediaries of banks and other financial institutions.\n            </p>\n            <p>\n                Main Responsibilities:\n                <ul>\n                  <li>Develop Rest APIs</li>\n                  <li>Develop admin page based on business analyst.</li>\n                  <li>Developing with <a href="https://lumen.laravel.com/">Lumen</a> + <a href="https://laravel.com/">Laravel</a> Framework.</li>\n                </ul>\n            </p>\n        ',iconImage:"./img/timeline/kreditpro-icon.png",image:"./img/timeline/kreditpro.jpg"},{detailed:!0,year:"2019 - 20",transparent:!0,title:"BTWN",html:'\n            <p>\n                Role: Backend Developer.<br />\n                Client: <a href="https://btwnapp.us/">b.plat llc. US</a><br />\n            </p>\n            <p>\n                Project Description:<br />\n                <a href="https://play.google.com/store/apps/details?id=us.b2ween.app">BTWN</a> is a marketing platform created by b.plat LLC in 2017 with the purpose to revolutionize referral marketing by using a patented technology that automates the word-of-mouth referral process.So businesses can reward happy customers, without having to track referral codes of links.\n            </p>\n            <p>\n                Responsibilities/Contribution & Accomplishment:\n                <ul>\n                  <li>Develop and Maintenance Rest API.</li>\n                  <li>Develop and Maintenance application based on business analyst.</li>\n                  <li>Create Running Script.</li>\n                  <li>Developing with <a href="https://nodejs.org/">Nodejs</a> + <a href="https://www.mongodb.com//">MongoDB</a>.</li>\n                </ul>\n            </p>\n        ',image:"./img/timeline/btwn.png",iconImage:"./img/timeline/btwn-icon.jpg"},{year:"2017 - 20",title:"PT. Mindo Small Business Solutions",html:'\n                <p>\n                    <a href="https://mindosolutions.com/">MINDO</a> is a full service outsourcing partner dedicated to helping small and medium sized businesses achieve their goals.\n                </p>\n                <p>\n                    The company services focus on consultation, especially for Database and Data Warehouse solution (the core competence of Solusi247), although not to close the hardware and network solution, as part of integration of those core solutions.\n                </p>\n                <p>\n                    Main responsibilities:\n                    <ul>\n                      <li>Develop and Maintenance Rest APIs</li>\n                      <li>Create running script.</li>\n                      <li>Develop and Maintenance application based on business analyst.</li>\n                    </ul>\n                </p>\n        ',image:"./img/timeline/mindo.jpg",iconImage:"./img/timeline/mindo-icon.png"}]}},computed:{orderedItems:function(){var e=Object(le["a"])(this.items).reverse();return this.detailed?e:e.filter((function(e){return!e.detailed}))}}},pe=ce,ue=(n("5fe8"),n("5e66")),de=n("3e35"),me=n("adda"),he=n("b73d"),ge=n("8414"),fe=n("1e06"),ve=Object(g["a"])(pe,se,re,!1,null,"b64e2a5e",null),be=ve.exports;v()(ve,{VAvatar:b["a"],VCard:H["a"],VCardText:B["a"],VCardTitle:Z["a"],VCarousel:ue["a"],VCarouselItem:de["a"],VFlex:D["a"],VImg:me["a"],VLayout:P["a"],VSwitch:he["a"],VTimeline:ge["a"],VTimelineItem:fe["a"]});var ye=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",{attrs:{color:"grey lighten-4",light:""}},[n("v-card-text",{staticClass:"text-xs-center"},[n("h4",[e._v("OK ... OK ... My CV has just been finished here but not my journey!")]),n("div",[e._v("Don't believe me? keep scrolling!")]),n("content-section",[n("v-timeline",e._l(2*e.futurePage,(function(t){return n("v-timeline-item",{key:t,attrs:{icon:"",large:""},scopedSlots:e._u([{key:"icon",fn:function(){return[n("div",{staticClass:"fill-width"},[n("vue-content-loading",{attrs:{width:80,height:95}},[n("circle",{attrs:{cx:"40",cy:"52",r:"42"}})])],1)]},proxy:!0}],null,!0)},[n("vcl-code")],1)})),1)],1),e.toggleMessage?n("div",{staticClass:"ma-4"},[n("span",{staticClass:"pre"},[e._v(e._s(e.message.text))]),e.loading?e._e():n("div",{directives:[{name:"scroll",rawName:"v-scroll",value:e.scrolled,expression:"scrolled"}]})]):e._e(),e.loading?n("v-progress-circular",{attrs:{indeterminate:"",color:"primary"}}):e._e()],1)],1)},we=[],xe=(n("7514"),n("68ee")),Ce=n.n(xe),ke=n("2ef0"),_e={name:"EndlessTimeline",components:{ContentSection:ee,VueContentLoading:Ce.a,VclCode:xe["VclCode"]},data:function(){return{futurePage:0,message:"",toggleMessage:!0,loading:!1,messages:[{text:"Ok, here is my future!",from:1,to:1},{text:"And even more ... :)",from:2,to:2},{text:"Still curious?",from:3,to:3},{text:"We all should be curious about it, shouldn't we?",from:4,to:4},{text:"With a plan and persistence ...",from:5,to:5},{text:"We can do anything!",from:6,to:6},{text:"There is a good news:",from:7,to:7},{text:"Even you can do it!",from:8,to:8},{text:"Of course with a lot of hardship ... a LOT OF them! ...",from:9,to:9},{text:"But we're still alive, aren't we?",from:10,to:10},{text:"So we WILL do it. There is no option! These are things should be done, without any excuses!\nAnd HEY! There is no RESET button for your life.\nStop scrolling now and go do whatever you must 👌",from:11,to:null}]}},methods:{scrolled:function(e){var t=e.target;t.scrollTop||(t=t.documentElement),t.scrollHeight-t.scrollTop<=t.clientHeight+50&&this.loadFuture()},loadFuture:Object(ke["debounce"])((function(){var e=this;this.loading||null===this.message.to||(this.loading=!0,setTimeout((function(){e.loading=!1,e.futurePage++,e.message?null!==e.message.to&&e.message.to<e.futurePage&&(e.message=e.messages.find((function(t){return t.from===e.futurePage}))):e.message=e.messages[0],e.toggleMessage=!1,e.toggleMessage=!0}),3e3))}),500)}},Se=_e,Ie=(n("383a"),n("269a")),De=n.n(Ie),Te=n("acdd"),Pe=Object(g["a"])(Se,ye,we,!1,null,"32fe724c",null),je=Pe.exports;v()(Pe,{VCard:H["a"],VCardText:B["a"],VProgressCircular:N["a"],VTimeline:ge["a"],VTimelineItem:fe["a"]}),De()(Pe,{Scroll:Te["a"]});var Ve=n("e2dd"),Ae=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("a",{staticClass:"github-corner",attrs:{href:e.url,target:"_blank","aria-label":"View source on GitHub"}},[n("svg",{staticStyle:{fill:"#70B7FD",color:"#fff",position:"absolute",top:"0",border:"0",right:"0","z-index":"100"},attrs:{width:"80",height:"80",viewBox:"0 0 250 250","aria-hidden":"true"}},[n("path",{attrs:{d:"M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"}}),n("path",{staticClass:"octo-arm",staticStyle:{"transform-origin":"130px 106px"},attrs:{d:"M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2",fill:"currentColor"}}),n("path",{staticClass:"octo-body",attrs:{d:"M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z",fill:"currentColor"}})])])},Me=[],Oe={name:"GithubRibbon",data:function(){return{url:"https://github.com/sahyung/vue-modern-resume"}}},Re=Oe,Ee=(n("de47"),Object(g["a"])(Re,Ae,Me,!1,null,"49e0478d",null)),Le=Ee.exports,He={name:"DarkTemplateContainer",components:{GithubRibbon:Le,TimelineEndless:je,TimelinePrimary:be,ContentContainer:oe,SidebarContainer:G},mounted:function(){new Ve["a"](document.getElementById("to-timeline"),document.getElementById("timeline"),{size:2,color:this.$vuetify.theme.primary,startLabel:Ve["a"].captionLabel("To the Journey ...")})}},Be=He,Fe=(n("169f"),n("7496")),We=n("549c"),Ne=n("0789"),$e=Object(g["a"])(Be,r,l,!1,null,"51686768",null),Ge=$e.exports;v()($e,{VApp:Fe["a"],VContainer:W["a"],VContent:We["a"],VFadeTransition:Ne["b"],VFlex:D["a"],VLayout:P["a"]});var ze={name:"App",components:{DarkTemplateContainer:Ge},data:function(){return{}}},Ue=ze,Je=Object(g["a"])(Ue,o,s,!1,null,null,null),Ke=Je.exports;v()(Je,{VApp:Fe["a"],VContent:We["a"]});var qe=n("bb71");n("da64");i["a"].use(qe["a"],{iconfont:"mdi"});n("ac6a");var Ye=n("8103"),Ze=n.n(Ye),Qe=n("bba4"),Xe=n.n(Qe),et=n("ffe0");et.keys().forEach((function(e){var t=et(e),n=Ze()(Xe()(e.replace(/^\.\//,"").replace(/\.\w+$/,"")));n="".concat(n),i["a"].component(n,t.default||t)})),i["a"].config.productionTip=!1,i["a"].use(a),new i["a"]({render:function(e){return e(Ke)}}).$mount("#app")},"5fe8":function(e,t,n){"use strict";var i=n("2b18"),a=n.n(i);a.a},9111:function(e,t,n){},a08b:function(e,t,n){},a629:function(e,t,n){},c762:function(e,t,n){},cade:function(e,t,n){"use strict";var i=n("9111"),a=n.n(i);a.a},d1ae:function(e,t,n){"use strict";var i=n("a08b"),a=n.n(i);a.a},de47:function(e,t,n){"use strict";var i=n("46a5"),a=n.n(i);a.a},e822:function(e,t,n){"use strict";var i=n("a629"),a=n.n(i);a.a},ffe0:function(e,t){function n(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id="ffe0"}});
//# sourceMappingURL=app.fb29e40b.js.map