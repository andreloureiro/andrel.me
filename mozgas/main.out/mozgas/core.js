// Compiled by ClojureScript 1.8.40 {:static-fns true, :optimize-constants true}
goog.provide('mozgas.core');
goog.require('cljs.core');
goog.require('mozgas.util');
goog.require('reagent.core');
mozgas.core.VelocityReact = VelocityReact;
mozgas.core.VelocityComponent = (mozgas.core.VelocityReact["VelocityComponent"]);
mozgas.core.VelocityTransitionGroup = (mozgas.core.VelocityReact["VelocityTransitionGroup"]);
mozgas.core.velocityHelpers = (mozgas.core.VelocityReact["velocityHelpers"]);
mozgas.core.register_effect = (function mozgas$core$register_effect(config){
var js_config = cljs.core.clj__GT_js(config);
return mozgas.core.velocityHelpers.registerEffect(js_config);
});
mozgas.core.motion_component_impl = (function mozgas$core$motion_component_impl(config,children){
var child = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$children,reagent.core.as_element(children)], null);
var props = cljs.core.clj__GT_js(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([mozgas.util.camelcase_map(config),child], 0)));
if((children == null)){
return mozgas.util.throw_err.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(mozgas.util.error_messages.cljs$core$IFn$_invoke$arity$1 ? mozgas.util.error_messages.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$nil_DASH_children_DASH_to_DASH_collection) : mozgas.util.error_messages.call(null,cljs.core.cst$kw$nil_DASH_children_DASH_to_DASH_collection))], 0));
} else {
if(cljs.core.seq_QMARK_(children)){
return mozgas.util.throw_err.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(mozgas.util.error_messages.cljs$core$IFn$_invoke$arity$1 ? mozgas.util.error_messages.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$collection_DASH_to_DASH_component) : mozgas.util.error_messages.call(null,cljs.core.cst$kw$collection_DASH_to_DASH_component)),children], 0));
} else {
return reagent.core.create_element.cljs$core$IFn$_invoke$arity$2(mozgas.core.VelocityComponent,props);

}
}
});
mozgas.core.motion_component = cljs.core.with_meta(mozgas.core.motion_component_impl,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$display_DASH_name,"MotionComponent"], null));
mozgas.core.motion_group_impl = (function mozgas$core$motion_group_impl(config,children){
var child = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$children,reagent.core.as_element(children)], null);
var props = cljs.core.clj__GT_js(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([mozgas.util.camelcase_map(config),child], 0)));
if((cljs.core.seq_QMARK_(config)) && ((children == null))){
return mozgas.util.throw_err.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(mozgas.util.error_messages.cljs$core$IFn$_invoke$arity$1 ? mozgas.util.error_messages.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$config_DASH_nil_DASH_to_DASH_group) : mozgas.util.error_messages.call(null,cljs.core.cst$kw$config_DASH_nil_DASH_to_DASH_group))], 0));
} else {
if((children == null)){
return mozgas.util.throw_err.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(mozgas.util.error_messages.cljs$core$IFn$_invoke$arity$1 ? mozgas.util.error_messages.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$nil_DASH_children_DASH_to_DASH_group) : mozgas.util.error_messages.call(null,cljs.core.cst$kw$nil_DASH_children_DASH_to_DASH_group))], 0));
} else {
if(!(cljs.core.seq_QMARK_(children))){
return mozgas.util.throw_err.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(mozgas.util.error_messages.cljs$core$IFn$_invoke$arity$1 ? mozgas.util.error_messages.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$children_DASH_not_DASH_collection) : mozgas.util.error_messages.call(null,cljs.core.cst$kw$children_DASH_not_DASH_collection)),children], 0));
} else {
return reagent.core.create_element.cljs$core$IFn$_invoke$arity$2(mozgas.core.VelocityTransitionGroup,props);

}
}
}
});
mozgas.core.motion_group = cljs.core.with_meta(mozgas.core.motion_group_impl,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$display_DASH_name,"MotionGroup"], null));
