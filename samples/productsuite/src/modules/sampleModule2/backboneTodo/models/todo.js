define([],function(){var e=Backbone.Model.extend({defaults:{title:"",completed:!1},toggle:function(){this.save({completed:!this.get("completed")})}});return e})