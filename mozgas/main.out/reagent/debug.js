// Compiled by ClojureScript 1.8.40 {:static-fns true, :optimize-constants true}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = {};
o.warn = ((function (o){
return (function() { 
var G__12300__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$warn], null),cljs.core.conj,cljs.core.array_seq([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__12300 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12301__i = 0, G__12301__a = new Array(arguments.length -  0);
while (G__12301__i < G__12301__a.length) {G__12301__a[G__12301__i] = arguments[G__12301__i + 0]; ++G__12301__i;}
  args = new cljs.core.IndexedSeq(G__12301__a,0);
} 
return G__12300__delegate.call(this,args);};
G__12300.cljs$lang$maxFixedArity = 0;
G__12300.cljs$lang$applyTo = (function (arglist__12302){
var args = cljs.core.seq(arglist__12302);
return G__12300__delegate(args);
});
G__12300.cljs$core$IFn$_invoke$arity$variadic = G__12300__delegate;
return G__12300;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__12303__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$error], null),cljs.core.conj,cljs.core.array_seq([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__12303 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12304__i = 0, G__12304__a = new Array(arguments.length -  0);
while (G__12304__i < G__12304__a.length) {G__12304__a[G__12304__i] = arguments[G__12304__i + 0]; ++G__12304__i;}
  args = new cljs.core.IndexedSeq(G__12304__a,0);
} 
return G__12303__delegate.call(this,args);};
G__12303.cljs$lang$maxFixedArity = 0;
G__12303.cljs$lang$applyTo = (function (arglist__12305){
var args = cljs.core.seq(arglist__12305);
return G__12303__delegate(args);
});
G__12303.cljs$core$IFn$_invoke$arity$variadic = G__12303__delegate;
return G__12303;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(reagent.debug.warnings,null) : cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null));

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(reagent.debug.warnings) : cljs.core.deref.call(null,reagent.debug.warnings));
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(reagent.debug.warnings,null) : cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null));

reagent.debug.tracking = false;

return warns;
});
