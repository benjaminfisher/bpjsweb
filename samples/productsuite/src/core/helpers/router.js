define([],function(){var e=function(){var e=crossroads.create();return e.normalizeFn=crossroads.NORM_AS_OBJECT,{addRoute:function(t,n){e.addRoute(t,n)},init:function(){function t(t,n){e.parse(t)}hasher.initialized.add(t),hasher.changed.add(t),hasher.isActive()||hasher.init()}}};return e.routeTo=function(e){hasher.setHash(e)},e})