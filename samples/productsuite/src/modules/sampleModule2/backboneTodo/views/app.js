define(["../collections/todos","../views/todos","text!../templates/stats.html","../common"],function(e,t,n,r){var i=Backbone.View.extend({el:"#todoapp",template:_.template(n),events:{"keypress #new-todo":"createOnEnter","click #clear-completed":"clearCompleted","click #toggle-all":"toggleAllComplete"},initialize:function(){this.input=this.$("#new-todo"),this.allCheckbox=this.$("#toggle-all")[0],this.$footer=this.$("#footer"),this.$main=this.$("#main"),e.on("add",this.addAll,this),e.on("reset",this.addAll,this),e.on("change:completed",this.addAll,this),e.on("all",this.render,this),e.fetch()},render:function(){var t=e.completed().length,n=e.remaining().length;e.length?(this.$main.show(),this.$footer.show(),this.$footer.html(this.template({completed:t,remaining:n})),this.$("#filters li a").removeClass("selected").filter('[href="#/'+(r.TodoFilter||"")+'"]').addClass("selected")):(this.$main.hide(),this.$footer.hide()),this.allCheckbox.checked=!n},addOne:function(e){var n=new t({model:e});$("#todo-list").append(n.render().el)},addAll:function(){this.$("#todo-list").html("");switch(r.TodoFilter){case"active":_.each(e.remaining(),this.addOne);break;case"completed":_.each(e.completed(),this.addOne);break;default:e.each(this.addOne,this)}},newAttributes:function(){return{title:this.input.val().trim(),order:e.nextOrder(),completed:!1}},createOnEnter:function(t){if(t.which!==r.ENTER_KEY||!this.input.val().trim())return;e.create(this.newAttributes()),this.input.val("")},clearCompleted:function(){return _.each(e.completed(),function(e){e.destroy()}),!1},toggleAllComplete:function(){var t=this.allCheckbox.checked;e.each(function(e){e.save({completed:t})})}});return i})