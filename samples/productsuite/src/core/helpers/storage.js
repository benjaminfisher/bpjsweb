define([],function(){var e=function(){};return e.persist=function(e,t){amplify.store(e,t)},e.retreive=function(e){return amplify.store(e)},e.remove=function(e){return amplify.store(e,null)},e})