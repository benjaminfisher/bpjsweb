define(["./helpers/_helpers_"],function(e){var t=function(e,t,n,r){this.createView(e,t,n,r)};return t.setStyleText=function(t,n){e.Styler.attachCssText(t,n)},t.setStyleLink=function(t,n){e.Styler.attachCssLink(t,n)},t.prototype.getElementId=function(){return this.viewId},t.prototype.getJQueryElement=function(){return this.jQueryElement},t.prototype.getDomElement=function(){return this.jQueryElement.get(0)},t.prototype.appendTo=function(e){this.jQueryElement.appendTo(e)},t.prototype.remove=function(){this.jQueryElement.remove()},t.prototype.hide=function(){this.jQueryElement.hide()},t.prototype.show=function(){this.jQueryElement.show()},t.prototype.createView=function(t,n,r,i){n=e.Localizer.localize(n,r),this.viewId=_.uniqueId(["bpjscontainer_"]),this.jQueryElement=$("<span id='"+this.viewId+"'>"+n+"</span>"),e.Styler.attachScopedCss(this.jQueryElement,i),t&&t.append(this.jQueryElement)},t})