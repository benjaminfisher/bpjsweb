define(["./chartBinding","path!./treeViewPanel/jstreestyle/"],function(e,t){var n=function(e){var n=this;this.salesInfo=ko.observableArray(),this.selectedDept=ko.observable(""),this.selectedData=ko.observableArray(),this.chartData=ko.computed(function(){var e=_.map(n.selectedData().values,function(e,t){return[t,e.month]}),t=_.map(n.selectedData().values,function(e,t){return[t,e.sales]}),r=n.selectedDept()+" - "+n.selectedData().year;return{tickLabels:e,dataItems:t,label:r}}),this.drawTree=function(){$.jstree._themes=t,$("#treeView").jstree({themes:{theme:"apple"},plugins:["themes","html_data"],core:{initially_open:["salesDept"]}})},this.yearClicked=function(e,t){n.selectedDept(e),n.selectedData(t)},$.getJSON(e.getSettings().urls.yearlysales,function(e){n.salesInfo(e),n.selectedDept(e[0].name),n.selectedData(e[0].years[0])})};return n})