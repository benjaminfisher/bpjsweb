define(["require","Boiler","text!./view.html"],function(e,t,n){var r=function(e){var r=null;return{activate:function(i){r||(r=new t.ViewTemplate(i,n),$("#lang-selector li").bind("click",function(){this.id&&e.setLanguage(this.id)})),r.show()},deactivate:function(){r&&r.hide()}}};return r})