(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{302:function(t,a,e){var n=e(307);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,e(6).default)("617409e7",n,!0,{})},306:function(t,a,e){"use strict";var n=e(302);e.n(n).a},307:function(t,a,e){(t.exports=e(5)(!1)).push([t.i,".switch-crm .v-input__slot{margin-bottom:0!important}.switch-crm .v-messages{height:0;min-height:0}.switch-crm .v-input--switch__thumb{box-shadow:none;color:#b3b3b3}",""])},308:function(t,a,e){var n=e(322);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,e(6).default)("6363d1bf",n,!0,{})},309:function(t,a,e){var n=e(329);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,e(6).default)("2f6e4e14",n,!0,{})},316:function(t,a,e){"use strict";var n={props:{value:{required:!0}}},i=(e(306),e(18)),o=e(27),r=e.n(o),s=e(356),c=Object(i.a)(n,function(){var t=this,a=t.$createElement;return(t._self._c||a)("v-switch",{staticClass:"switch-crm",attrs:{color:"#ffdd2d","input-value":t.value},on:{input:function(a){t.$emit("input",a.target.value)}}},[t._v("\n>")])},[],!1,null,null,null);a.a=c.exports;r()(c,{VSwitch:s.a})},321:function(t,a,e){"use strict";var n=e(308);e.n(n).a},322:function(t,a,e){(t.exports=e(5)(!1)).push([t.i,".td[data-v-60f55b4e]{height:100px!important}.td-index[data-v-60f55b4e]{padding-left:63px!important}.td-last[data-v-60f55b4e]{padding-right:54px!important}.td-lg[data-v-60f55b4e]{width:100%}.tr[data-v-60f55b4e]{border-bottom:none!important}.tr[data-v-60f55b4e]:hover{background-color:inherit!important}.layout-input[data-v-60f55b4e]{display:inline-flex!important}.input-value[data-v-60f55b4e]{position:relative;top:15px;width:323px}.input-icon[data-v-60f55b4e]{background-color:#e9ecef;width:30px;height:30px;border-radius:30px;margin-left:10px;font-size:20px;color:#000;transition:background-color .3s;cursor:pointer}.input-icon[data-v-60f55b4e]:hover{background-color:#ffdd2d}.bgGray[data-v-60f55b4e]{background-color:#f9f9f9}.bgGray[data-v-60f55b4e]:hover{background-color:#f9f9f9!important}.icon-wrap[data-v-60f55b4e]{display:flex;align-items:center;justify-content:center;width:45px;height:45px;border-radius:50%;background-color:#ffdd2d;cursor:pointer}",""])},328:function(t,a,e){"use strict";var n=e(309);e.n(n).a},329:function(t,a,e){(t.exports=e(5)(!1)).push([t.i,".catalog-content-top[data-v-3453e854]{background-color:#fff}.catalog-tabs[data-v-3453e854]{width:100%;padding:45px 0 0}.card-text[data-v-3453e854]{padding:60px 0 0;background-color:#f9f9f9}.card-text-top[data-v-3453e854]{margin-bottom:30px;padding-left:63px;padding-right:54px}.input-value[data-v-3453e854]{width:444px}.btn-add[data-v-3453e854]{margin-left:12px}",""])},359:function(t,a,e){"use strict";e.r(a);e(10);var n={components:{SwitchInput:e(316).a},props:{item:{default:{},type:Object,required:!0},rowIndex:{type:Number}},computed:{switchValue:function(){return!!((this.rowIndex+1)%2)},isOdd:function(){return!((this.rowIndex+1)%2)}}},i=(e(321),e(18)),o=e(27),r=e.n(o),s=e(129),c=e(323),l=e(300),d=Object(i.a)(n,function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("tr",{staticClass:"tr",class:{bgGray:t.isOdd}},[e("td",{staticClass:"td td-index"},[t._v(t._s(t.rowIndex+1+"."))]),t._v(" "),e("td",{staticClass:"td td-lg"},[e("v-layout",{staticClass:"layout-input",attrs:{"align-center":""}},[e("v-text-field",{staticClass:"input-value",attrs:{value:t.item.name,"background-color":"#edf0f2",height:"40px",solo:"",flat:""}}),t._v(" "),e("v-icon",{staticClass:"input-icon"},[t._v("done")]),t._v(" "),e("v-icon",{staticClass:"input-icon"},[t._v("clear")])],1)],1),t._v(" "),e("td",{staticClass:"td text-xs-center"},[e("SwitchInput",{attrs:{value:t.switchValue},on:{input:function(a){t.switchValue=a.target.value}}})],1),t._v(" "),e("td",{staticClass:"td td-last"},[e("div",{staticClass:"icon-wrap"},[e("v-icon",{attrs:{color:"#000"}},[t._v("edit")])],1)])])},[],!1,null,"60f55b4e",null),u=d.exports;r()(d,{VIcon:s.a,VLayout:c.a,VTextField:l.a});var p={components:{CatalogRow:u},data:function(){return{fakeData:[{name:"Отдел 1"},{name:"Отдел 2"},{name:"Отдел 3"},{name:"Коммисия банкиру"}]}}},f=e(362),v=Object(i.a)(p,function(){var t=this.$createElement,a=this._self._c||t;return a("v-data-table",{staticClass:"table-catalog",attrs:{items:this.fakeData,"hide-headers":!0,"hide-actions":""},scopedSlots:this._u([{key:"items",fn:function(t){return[a("CatalogRow",{attrs:{item:t.item,rowIndex:t.index}})]}}])})},[],!1,null,null,null),b=v.exports;r()(v,{VDataTable:f.a});var h={components:{CatalogsTable:b},data:function(){return{tabsTitle:["Категории затрат","Справочник отделов","Телефонный справочник"],active:null}}},x=(e(328),e(318)),g=e(361),m=e(357),w=e(365),_=e(360),C=Object(i.a)(h,function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("v-layout",{staticClass:"catalog-content-top"},[e("v-tabs",{staticClass:"catalog-tabs",attrs:{color:"#fff","slider-color":"#ffdd2d"},model:{value:t.active,callback:function(a){t.active=a},expression:"active"}},[t._l(3,function(a){return e("v-tab",{key:a,attrs:{ripple:""}},[t._v("\n      "+t._s(t.tabsTitle[a-1])+"\n    ")])}),t._v(" "),t._l(3,function(a){return e("v-tab-item",{key:a},[e("v-card",{attrs:{flat:""}},[e("v-card-text",{staticClass:"card-text"},[e("v-layout",{staticClass:"card-text-top",attrs:{"justify-space-between":""}},[e("h1",[t._v("Справочник отделов")]),t._v(" "),e("div",[e("v-layout",[e("v-text-field",{staticClass:"input-value",attrs:{label:"Введите новую категорию затрат","background-color":"#edf0f2",height:"60px",solo:"",flat:""}}),t._v(" "),e("Btn",{staticClass:"btn-add",attrs:{color:"#e9ecef",text:"+"}})],1)],1)]),t._v(" "),e("div",[e("CatalogsTable")],1)],1)],1)],1)})],2)],1)],1)},[],!1,null,"3453e854",null);a.default=C.exports;r()(C,{VCard:x.a,VCardText:g.a,VLayout:c.a,VTab:m.a,VTabItem:w.a,VTabs:_.a,VTextField:l.a})}}]);