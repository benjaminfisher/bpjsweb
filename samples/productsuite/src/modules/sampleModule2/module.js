define(["Boiler","./settings","./employeeList/component","./employeeDetails/component","./salesDashboard/component","./backboneTodo/component"],function(e,t,n,r,i,s){var o=function(o){var u=new e.Context(o);u.addSettings(t);var a=new e.UrlController($(".appcontent"));a.addRoutes({"employee/all":new n(u),"employee/{id}":new r(u),sales:new i(u),"todo/:action:":new s(u)}),a.start()};return o})