(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{221:function(t,e,r){var content=r(230);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(59).default)("69b796ea",content,!0,{sourceMap:!1})},222:function(t,e,r){var content=r(232);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(59).default)("363a114f",content,!0,{sourceMap:!1})},223:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},224:function(t,e,r){"use strict";r.r(e);r(28),r(107),r(39),r(29),r(40),r(78),r(79),r(60),r(226),r(30);var n=r(36);function o(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function c(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var l={name:"Generator",data:function(){return{form:{start_date:null,end_date:null,vacation:!1,projects:[]},result:null,projectsList:d}},mounted:function(){localStorage.getItem("form")&&(this.form=JSON.parse(localStorage.getItem("form")))},watch:{form:{handler:function(t){if(t.end_date||(this.form.end_date=t.start_date),t.end_date){var e=new Date(t.start_date);new Date(t.end_date)<e&&(this.form.end_date=null)}localStorage.setItem("form",JSON.stringify(t))},deep:!0}},methods:{generateResult:function(){if(!this.validateForm())return!1;for(var t=new Date(this.form.start_date),e=new Date(this.form.end_date),r="",n=t;n<=e;n.setDate(n.getDate()+1))r+=this.printDayReport(n,this.generateDayProjects(this.form.projects));this.result=r.trim()},printDayReport:function(t,e){var r="/итог ".concat(t.toLocaleDateString(),"\n");return e.map((function(t){r+="".concat(t.title," | ").concat(t.tasks," | ").concat(t.hours,"\n")})),r+="\n"},generateDayProjects:function(t){var e=this;if(this.form.vacation)return[{title:"Отпуск",tasks:"-",hours:8}];var r=[],n=8,o=2*t.length;return t.map((function(c,l){if((e.getRandomInt(1,o)>o/2.6||l===t.length-1)&&0!==n){var d=e.getRandomInt(1,n);1===t.length||l===t.length-1?d=n:n-=d,r.push({title:c,tasks:e.generateProjectTasks(),hours:d})}})),r},generateProjectTasks:function(){var t="",e=f.verbs[this.getRandomInt(0,f.verbs.length)],r=f.nouns[this.getRandomInt(0,f.nouns.length)],n=f.techs[this.getRandomInt(0,f.techs.length)];return t+="".concat(e," ").concat(n," ").concat(r)},differenceInDays:function(t,e){return Math.ceil(Math.abs(t-e)/864e5)},resetForm:function(){this.form={start_date:null,end_date:null,vacation:!1,projects:[]},this.result=null},validateForm:function(){if(this.form.vacation)return!0;var t={duration:null,progress:"auto",color:"danger",position:"top-right"};return this.form.start_date?!!this.form.projects.length||(this.$vs.notification(c(c({},t),{},{title:"Необходимо указать проекты"})),!1):(this.$vs.notification(c(c({},t),{},{title:"Необходимо указать начало периода"})),!1)},copyResult:function(){var t=document.createRange();t.selectNode(document.getElementById("result-box")),window.getSelection().removeAllRanges(),window.getSelection().addRange(t),document.execCommand("copy"),window.getSelection().removeAllRanges(),this.$vs.notification({position:"top-right",title:"Отчёт скопирован",text:"Отчёт был скопирован в буфер обмена, теперь ты можешь отправить его в чатик для отчётов"})},getRandomInt:function(t,e){return t=Math.ceil(t),e=Math.floor(e),Math.floor(Math.random()*(e-t))+t}}},d=["LeadScoring","SmartPC","Reminder","bng","TheBell","Coffee","tgc","MyLive","itsmarket","TassNewm","1939","Аудит","Больничный","Издательство","Командировка","Конференция","курс LSF","Нашествие","обучение cka","Отпуск","Петпроджект","Подушкин","постнаука","Структрука","Техподдержка","Умный щит","Учеба","asodesk","BBDO","biin","Cтруктурка","Caramba","CMTT","crex","Crypto","Cupis","DeckRobot","DevOps","dop connector","essm","getcider","GoldBar / GB","GPN","GPN ВР","GPN IATA PoC","Grafana","HealthCoin","hezzl","isolate","ITS 24mon","ITS Annotate","ITS CP","ITS CRM","ITS Dashboard","ITS New 24mon","ITS sms invoice","ITS Telegram","its_cinema","its-research","Its-vacation","its-webchat","its-wifi-scaner","itshelp","ITStagram","ITSumma","itsvideo","Kaiten","kube-debugger","Legko","LinguaLeo","Livedune","Management","medical"],f={verbs:["fixing","refactor","research","test","management","refactoring","impr","review","debug","logging","update","deploy","sync","e2e"],nouns:["bugs","features","tasks","tests","smart contracts","service","layout","config","ux/ui"],techs:["angular","vue","laravel","amp","pwa","ssr","nodejs","docker","websocket",""]},m=l,v=(r(229),r(35)),component=Object(v.a)(m,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"card card--thin card--centered"},[r("div",{staticClass:"card__header"},[r("h1",[t._v("Генератор отчётов")]),t._v(" "),r("div",{staticClass:"card__header__action"},[r("vs-button",{attrs:{shadow:"",size:"large"},on:{click:t.resetForm}},[r("i",{staticClass:"bx bx-reset mr-1"}),t._v("Сброс\n            ")]),t._v(" "),r("vs-button",{attrs:{size:"large"},on:{click:t.generateResult}},[r("i",{staticClass:"bx bx-play-circle mr-1"}),t._v("Сгенерировать\n            ")])],1)]),t._v(" "),r("div",{staticClass:"card__body"},[r("div",{staticClass:"form"},[r("div",{staticClass:"form__row"},[r("div",{staticClass:"form__item"},[r("vs-input",{attrs:{type:"date",label:"Начало периода"},model:{value:t.form.start_date,callback:function(e){t.$set(t.form,"start_date",e)},expression:"form.start_date"}})],1),t._v(" "),r("div",{staticClass:"form__item"},[r("vs-input",{attrs:{type:"date",label:"Конец периода",min:t.form.start_date},model:{value:t.form.end_date,callback:function(e){t.$set(t.form,"end_date",e)},expression:"form.end_date"}})],1),t._v(" "),r("div",{staticClass:"form__item form__item--w-auto"},[r("vs-switch",{attrs:{success:""},scopedSlots:t._u([{key:"off",fn:function(){return[r("i",{staticClass:"bx bxs-bot mr-1"}),t._v("У меня не было отпуска\n                        ")]},proxy:!0},{key:"on",fn:function(){return[r("i",{staticClass:"bx bxs-cool mr-1"}),t._v("У меня был отпуск\n                        ")]},proxy:!0}]),model:{value:t.form.vacation,callback:function(e){t.$set(t.form,"vacation",e)},expression:"form.vacation"}})],1)]),t._v(" "),t.form.vacation?t._e():[r("div",{staticClass:"form__row"},[r("div",{staticClass:"form__item"},[r("vs-select",{staticClass:"w-full",attrs:{label:"Я работал в следующих проектах...",filter:"",multiple:"",placeholder:"Выбери проекты"},model:{value:t.form.projects,callback:function(e){t.$set(t.form,"projects",e)},expression:"form.projects"}},t._l(t.projectsList,(function(e){return r("vs-option",{key:e,attrs:{label:e,value:e}},[t._v("\n                                "+t._s(e)+"\n                            ")])})),1)],1)])]],2)]),t._v(" "),r("div",{staticClass:"card__footer"},[r("div",{staticClass:"generator-result"},[r("div",{staticClass:"generator-result__header"},[r("h2",[t._v("Сгенерированный отчёт")]),t._v(" "),r("vs-button",{attrs:{shadow:"",size:"large",disabled:!t.result},on:{click:t.copyResult}},[r("i",{staticClass:"bx bx-copy mr-1"}),t._v("Копировать\n                ")])],1),t._v(" "),r("div",{staticClass:"generator-result__body"},[r("pre",{attrs:{id:"result-box"},domProps:{innerHTML:t._s(t.result)}})])])])])}),[],!1,null,null,null);e.default=component.exports},225:function(t,e,r){t.exports=r.p+"452a21f3309705ad48d5ab1b23bc0074.svg"},226:function(t,e,r){"use strict";var n=r(2),o=r(227).trim;n({target:"String",proto:!0,forced:r(228)("trim")},{trim:function(){return o(this)}})},227:function(t,e,r){var n=r(14),o="["+r(223)+"]",c=RegExp("^"+o+o+"*"),l=RegExp(o+o+"*$"),d=function(t){return function(e){var r=String(n(e));return 1&t&&(r=r.replace(c,"")),2&t&&(r=r.replace(l,"")),r}};t.exports={start:d(1),end:d(2),trim:d(3)}},228:function(t,e,r){var n=r(5),o=r(223);t.exports=function(t){return n((function(){return!!o[t]()||"​᠎"!="​᠎"[t]()||o[t].name!==t}))}},229:function(t,e,r){"use strict";var n=r(221);r.n(n).a},230:function(t,e,r){(e=r(58)(!1)).push([t.i,".generator-result{display:flex;flex-direction:column}.generator-result__header{display:flex;align-items:center;justify-content:space-between;font-size:1.5rem;margin-bottom:.5rem}.generator-result__body{display:flex;flex-direction:column;background:rgba(0,0,0,.03);padding:1rem}.generator-result__body pre{max-height:400px;overflow-y:auto}.vs-select-content{max-width:none!important}",""]),t.exports=e},231:function(t,e,r){"use strict";var n=r(222);r.n(n).a},232:function(t,e,r){(e=r(58)(!1)).push([t.i,".logo[data-v-06216066]{width:250px;margin:2rem auto}",""]),t.exports=e},234:function(t,e,r){"use strict";r.r(e);var n={name:"Index",components:{Generator:r(224).default},head:function(){return{title:"Генератор отчётов",meta:[{hid:"index-description",name:"description",content:"Сервис для генерации больших объемов отчётов"}]}}},o=(r(231),r(35)),component=Object(o.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"page-container"},[e("img",{staticClass:"logo",attrs:{src:r(225),alt:""}}),this._v(" "),e("Generator",{staticClass:"mt-6"})],1)}),[],!1,null,"06216066",null);e.default=component.exports;installComponents(component,{Generator:r(224).default})}}]);