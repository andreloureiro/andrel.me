// Compiled by ClojureScript 1.8.40 {:static-fns true, :optimize-constants true}
goog.provide('mozgas.example');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('goog.dom');
goog.require('mozgas.core');
goog.require('cljs.core.async');
cljs.core.enable_console_print_BANG_();
mozgas.example.transition_list = new cljs.core.PersistentVector(null, 26, 5, cljs.core.PersistentVector.EMPTY_NODE, ["fade","flipX","flipY","flipBounceX","flipBounceY","swoop","whirl","shrink","expand","bounce","bounceUp","bounceDown","bounceLeft","bounceRight","slideUp","slideDown","slideLeft","slideRight","slideUpBig","slideDownBig","slideLeftBig","slideRightBig","perspectiveUp","perspectiveDown","perspectiveLeft","perspectiveRight"], null);
mozgas.example.toggle_box = (function mozgas$example$toggle_box(){
var visible_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(true);
var transition = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("fade");
var duration = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((1000));
return ((function (visible_QMARK_,transition,duration){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$toggle_DASH_box_DASH_container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,"Transition"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$select$toggle_DASH_transition,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_change,((function (visible_QMARK_,transition,duration){
return (function (p1__17124_SHARP_){
var G__17138 = transition;
var G__17139 = p1__17124_SHARP_.target.value;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__17138,G__17139) : cljs.core.reset_BANG_.call(null,G__17138,G__17139));
});})(visible_QMARK_,transition,duration))
], null),(function (){var iter__7320__auto__ = ((function (visible_QMARK_,transition,duration){
return (function mozgas$example$toggle_box_$_iter__17140(s__17141){
return (new cljs.core.LazySeq(null,((function (visible_QMARK_,transition,duration){
return (function (){
var s__17141__$1 = s__17141;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__17141__$1);
if(temp__4657__auto__){
var s__17141__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__17141__$2)){
var c__7318__auto__ = cljs.core.chunk_first(s__17141__$2);
var size__7319__auto__ = cljs.core.count(c__7318__auto__);
var b__17143 = cljs.core.chunk_buffer(size__7319__auto__);
if((function (){var i__17142 = (0);
while(true){
if((i__17142 < size__7319__auto__)){
var t = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7318__auto__,i__17142);
cljs.core.chunk_append(b__17143,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,t], null),t], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,t], null)));

var G__17150 = (i__17142 + (1));
i__17142 = G__17150;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__17143),mozgas$example$toggle_box_$_iter__17140(cljs.core.chunk_rest(s__17141__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__17143),null);
}
} else {
var t = cljs.core.first(s__17141__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,t], null),t], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,t], null)),mozgas$example$toggle_box_$_iter__17140(cljs.core.rest(s__17141__$2)));
}
} else {
return null;
}
break;
}
});})(visible_QMARK_,transition,duration))
,null,null));
});})(visible_QMARK_,transition,duration))
;
return iter__7320__auto__(mozgas.example.transition_list);
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,"Duration"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input$toggle_DASH_duration,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"text",cljs.core.cst$kw$value,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(duration) : cljs.core.deref.call(null,duration)),cljs.core.cst$kw$on_DASH_change,((function (visible_QMARK_,transition,duration){
return (function (p1__17125_SHARP_){
var G__17146 = duration;
var G__17147 = p1__17125_SHARP_.target.value;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__17146,G__17147) : cljs.core.reset_BANG_.call(null,G__17146,G__17147));
});})(visible_QMARK_,transition,duration))
], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$toggle_DASH_box,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,((function (visible_QMARK_,transition,duration){
return (function (){
var G__17148 = visible_QMARK_;
var G__17149 = cljs.core.not((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(visible_QMARK_) : cljs.core.deref.call(null,visible_QMARK_)));
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__17148,G__17149) : cljs.core.reset_BANG_.call(null,G__17148,G__17149));
});})(visible_QMARK_,transition,duration))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mozgas.core.motion_component,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$key,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(transition) : cljs.core.deref.call(null,transition)),cljs.core.cst$kw$duration,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(duration) : cljs.core.deref.call(null,duration)),cljs.core.cst$kw$stagger,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(duration) : cljs.core.deref.call(null,duration)),cljs.core.cst$kw$animation,(cljs.core.truth_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(visible_QMARK_) : cljs.core.deref.call(null,visible_QMARK_)))?[cljs.core.str("transition."),cljs.core.str((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(transition) : cljs.core.deref.call(null,transition))),cljs.core.str("In")].join(''):[cljs.core.str("transition."),cljs.core.str((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(transition) : cljs.core.deref.call(null,transition))),cljs.core.str("Out")].join(''))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$width,"100%",cljs.core.cst$kw$height,"100%",cljs.core.cst$kw$background_DASH_color,"indigo"], null)], null)], null)], null)], null)], null);
});
;})(visible_QMARK_,transition,duration))
});
mozgas.example.square = (function mozgas$example$square(item){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$square_DASH_list__item,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,item], null)], null);
});
mozgas.example.squares = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
mozgas.example.render_square_list = (function mozgas$example$render_square_list(transition){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$text_DASH_align,"center"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,"Transition"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$select$toggle_DASH_transition,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_change,(function (p1__17151_SHARP_){
var G__17160 = transition;
var G__17161 = p1__17151_SHARP_.target.value;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__17160,G__17161) : cljs.core.reset_BANG_.call(null,G__17160,G__17161));
})], null),(function (){var iter__7320__auto__ = (function mozgas$example$render_square_list_$_iter__17162(s__17163){
return (new cljs.core.LazySeq(null,(function (){
var s__17163__$1 = s__17163;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__17163__$1);
if(temp__4657__auto__){
var s__17163__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__17163__$2)){
var c__7318__auto__ = cljs.core.chunk_first(s__17163__$2);
var size__7319__auto__ = cljs.core.count(c__7318__auto__);
var b__17165 = cljs.core.chunk_buffer(size__7319__auto__);
if((function (){var i__17164 = (0);
while(true){
if((i__17164 < size__7319__auto__)){
var t = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7318__auto__,i__17164);
cljs.core.chunk_append(b__17165,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,t], null),t], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,t], null)));

var G__17168 = (i__17164 + (1));
i__17164 = G__17168;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__17165),mozgas$example$render_square_list_$_iter__17162(cljs.core.chunk_rest(s__17163__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__17165),null);
}
} else {
var t = cljs.core.first(s__17163__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,t], null),t], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,t], null)),mozgas$example$render_square_list_$_iter__17162(cljs.core.rest(s__17163__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7320__auto__(mozgas.example.transition_list);
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mozgas.core.motion_group,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$class_DASH_name,"square-list",cljs.core.cst$kw$enter,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$animation,[cljs.core.str("transition."),cljs.core.str((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(transition) : cljs.core.deref.call(null,transition))),cljs.core.str("In")].join('')], null),cljs.core.cst$kw$leave,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$animation,[cljs.core.str("transition."),cljs.core.str((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(transition) : cljs.core.deref.call(null,transition))),cljs.core.str("Out")].join('')], null)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(mozgas.example.square,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mozgas.example.squares) : cljs.core.deref.call(null,mozgas.example.squares)))], null)], null);
});
});
mozgas.example.on_mount_square_list = (function mozgas$example$on_mount_square_list(){
var c__14323__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14323__auto__){
return (function (){
var f__14324__auto__ = (function (){var switch__14209__auto__ = ((function (c__14323__auto__){
return (function (state_17205){
var state_val_17206 = (state_17205[(1)]);
if((state_val_17206 === (1))){
var state_17205__$1 = state_17205;
var statearr_17207_17217 = state_17205__$1;
(statearr_17207_17217[(2)] = null);

(statearr_17207_17217[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17206 === (2))){
var inst_17194 = cljs.core.rand_int((3));
var inst_17195 = ((1000) * inst_17194);
var inst_17196 = cljs.core.async.timeout(inst_17195);
var state_17205__$1 = state_17205;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17205__$1,(4),inst_17196);
} else {
if((state_val_17206 === (3))){
var inst_17203 = (state_17205[(2)]);
var state_17205__$1 = state_17205;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17205__$1,inst_17203);
} else {
if((state_val_17206 === (4))){
var inst_17198 = (state_17205[(2)]);
var inst_17199 = cljs.core.rand_int((999));
var inst_17200 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mozgas.example.squares,cljs.core.conj,inst_17199);
var state_17205__$1 = (function (){var statearr_17208 = state_17205;
(statearr_17208[(7)] = inst_17198);

(statearr_17208[(8)] = inst_17200);

return statearr_17208;
})();
var statearr_17209_17218 = state_17205__$1;
(statearr_17209_17218[(2)] = null);

(statearr_17209_17218[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
});})(c__14323__auto__))
;
return ((function (switch__14209__auto__,c__14323__auto__){
return (function() {
var mozgas$example$on_mount_square_list_$_state_machine__14210__auto__ = null;
var mozgas$example$on_mount_square_list_$_state_machine__14210__auto____0 = (function (){
var statearr_17213 = [null,null,null,null,null,null,null,null,null];
(statearr_17213[(0)] = mozgas$example$on_mount_square_list_$_state_machine__14210__auto__);

(statearr_17213[(1)] = (1));

return statearr_17213;
});
var mozgas$example$on_mount_square_list_$_state_machine__14210__auto____1 = (function (state_17205){
while(true){
var ret_value__14211__auto__ = (function (){try{while(true){
var result__14212__auto__ = switch__14209__auto__(state_17205);
if(cljs.core.keyword_identical_QMARK_(result__14212__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14212__auto__;
}
break;
}
}catch (e17214){if((e17214 instanceof Object)){
var ex__14213__auto__ = e17214;
var statearr_17215_17219 = state_17205;
(statearr_17215_17219[(5)] = ex__14213__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17205);

return cljs.core.cst$kw$recur;
} else {
throw e17214;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14211__auto__,cljs.core.cst$kw$recur)){
var G__17220 = state_17205;
state_17205 = G__17220;
continue;
} else {
return ret_value__14211__auto__;
}
break;
}
});
mozgas$example$on_mount_square_list_$_state_machine__14210__auto__ = function(state_17205){
switch(arguments.length){
case 0:
return mozgas$example$on_mount_square_list_$_state_machine__14210__auto____0.call(this);
case 1:
return mozgas$example$on_mount_square_list_$_state_machine__14210__auto____1.call(this,state_17205);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mozgas$example$on_mount_square_list_$_state_machine__14210__auto__.cljs$core$IFn$_invoke$arity$0 = mozgas$example$on_mount_square_list_$_state_machine__14210__auto____0;
mozgas$example$on_mount_square_list_$_state_machine__14210__auto__.cljs$core$IFn$_invoke$arity$1 = mozgas$example$on_mount_square_list_$_state_machine__14210__auto____1;
return mozgas$example$on_mount_square_list_$_state_machine__14210__auto__;
})()
;})(switch__14209__auto__,c__14323__auto__))
})();
var state__14325__auto__ = (function (){var statearr_17216 = (f__14324__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14324__auto__.cljs$core$IFn$_invoke$arity$0() : f__14324__auto__.call(null));
(statearr_17216[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14323__auto__);

return statearr_17216;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14325__auto__);
});})(c__14323__auto__))
);

return c__14323__auto__;
});
mozgas.example.square_list = (function mozgas$example$square_list(){
var transition = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("bounceUp");
return reagent.core.create_class(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$component_DASH_did_DASH_mount,mozgas.example.on_mount_square_list,cljs.core.cst$kw$reagent_DASH_render,mozgas.example.render_square_list(transition)], null));
});
mozgas.example.heart_animation = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$heart,mozgas.core.register_effect(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$defaultDuration,(750),cljs.core.cst$kw$calls,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$scale,(0)], null),0.05], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$scale,(0)], null),0.2], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$scale,1.2], null),0.3,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$easing,"ease-out"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$scale,(1)], null),0.4], null)], null)], null)),cljs.core.cst$kw$explosion,mozgas.core.register_effect(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$defaultDuration,(750),cljs.core.cst$kw$calls,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$scale,(0),cljs.core.cst$kw$opacity,(1)], null),0.1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$scale,(1)], null),0.2], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$opacity,(0)], null),0.4], null)], null)], null))], null);
mozgas.example.custom_animation = (function mozgas$example$custom_animation(){
var fav_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
return ((function (fav_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$custom_DASH_animation,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mozgas.core.motion_component,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$animation,(cljs.core.truth_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(fav_QMARK_) : cljs.core.deref.call(null,fav_QMARK_)))?cljs.core.get.cljs$core$IFn$_invoke$arity$2(mozgas.example.heart_animation,cljs.core.cst$kw$explosion):null),cljs.core.cst$kw$run_DASH_on_DASH_mount,true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$custom_DASH_animation__circle,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,"absolute"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mozgas.core.motion_component,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$animation,(cljs.core.truth_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(fav_QMARK_) : cljs.core.deref.call(null,fav_QMARK_)))?cljs.core.get.cljs$core$IFn$_invoke$arity$2(mozgas.example.heart_animation,cljs.core.cst$kw$heart):null),cljs.core.cst$kw$run_DASH_on_DASH_mount,true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$custom_DASH_animation__heart,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$class_DASH_name,(cljs.core.truth_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(fav_QMARK_) : cljs.core.deref.call(null,fav_QMARK_)))?"custom-animation__heart\n                         custom-animation__heart--active":"custom-animation__heart"),cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,"absolute"], null),cljs.core.cst$kw$on_DASH_click,((function (fav_QMARK_){
return (function (){
var G__17223 = fav_QMARK_;
var G__17224 = cljs.core.not((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(fav_QMARK_) : cljs.core.deref.call(null,fav_QMARK_)));
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__17223,G__17224) : cljs.core.reset_BANG_.call(null,G__17223,G__17224));
});})(fav_QMARK_))
], null)], null)], null)], null);
});
;})(fav_QMARK_))
});
mozgas.example.soccer_teams = new cljs.core.PersistentVector(null, 22, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,"Sao Paulo",cljs.core.cst$kw$fg,"white",cljs.core.cst$kw$bg,"red"], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,"Santos",cljs.core.cst$kw$fg,"black",cljs.core.cst$kw$bg,"white"], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,"Corinthians",cljs.core.cst$kw$fg,"white",cljs.core.cst$kw$bg,"black"], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,"Palmeiras",cljs.core.cst$kw$fg,"white",cljs.core.cst$kw$bg,"forestgreen"], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,"Internacional",cljs.core.cst$kw$fg,"white",cljs.core.cst$kw$bg,"red"], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,"Gremio",cljs.core.cst$kw$fg,"white",cljs.core.cst$kw$bg,"dodgerblue"], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,"Avai",cljs.core.cst$kw$fg,"royalblue",cljs.core.cst$kw$bg,"white"], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,"Figueirense",cljs.core.cst$kw$fg,"white",cljs.core.cst$kw$bg,"black"], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,"Atletico PR",cljs.core.cst$kw$fg,"red",cljs.core.cst$kw$bg,"black"], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,"Coritiba",cljs.core.cst$kw$fg,"green",cljs.core.cst$kw$bg,"white"], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,"Parana Clube",cljs.core.cst$kw$fg,"red",cljs.core.cst$kw$bg,"blue"], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,"Botafogo",cljs.core.cst$kw$fg,"gray",cljs.core.cst$kw$bg,"black"], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,"Flamengo",cljs.core.cst$kw$fg,"black",cljs.core.cst$kw$bg,"red"], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,"Fluminense",cljs.core.cst$kw$fg,"green",cljs.core.cst$kw$bg,"red"], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,"Vasco",cljs.core.cst$kw$fg,"black",cljs.core.cst$kw$bg,"white"], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,"Atletico MG",cljs.core.cst$kw$fg,"white",cljs.core.cst$kw$bg,"black"], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,"Cruzeiro",cljs.core.cst$kw$fg,"white",cljs.core.cst$kw$bg,"blue"], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,"Bahia",cljs.core.cst$kw$fg,"blue",cljs.core.cst$kw$bg,"red"], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,"Vitoria",cljs.core.cst$kw$fg,"red",cljs.core.cst$kw$bg,"black"], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,"Ceara",cljs.core.cst$kw$fg,"white",cljs.core.cst$kw$bg,"black"], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,"Santa Cruz",cljs.core.cst$kw$fg,"black",cljs.core.cst$kw$bg,"red"], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,"Remo",cljs.core.cst$kw$fg,"white",cljs.core.cst$kw$bg,"midnightblue"], null)], null);
mozgas.example.team_animation = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$in,mozgas.core.register_effect(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$calls,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$transform_DASH_perspective,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(800),(800)], null),cljs.core.cst$kw$transform_DASH_origin_DASH_x,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["50%","50%"], null),cljs.core.cst$kw$transform_DASH_origin_DASH_y,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["100%","100%"], null),cljs.core.cst$kw$margin_DASH_bottom,(0),cljs.core.cst$kw$opacity,(1),cljs.core.cst$kw$rotate_DASH_x,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(130)], null)], null),(1),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$easing,"ease-out",cljs.core.cst$kw$display,"block"], null)], null)], null)], null)),cljs.core.cst$kw$out,mozgas.core.register_effect(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$calls,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$transform_DASH_perspective,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(800),(800)], null),cljs.core.cst$kw$transform_DASH_origin_DASH_x,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["50%","50%"], null),cljs.core.cst$kw$transform_DASH_origin_DASH_y,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["0%","0%"], null),cljs.core.cst$kw$margin_DASH_bottom,(-30),cljs.core.cst$kw$opacity,(0),cljs.core.cst$kw$rotate_DASH_x,(-70)], null),(1),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$easing,"ease-out",cljs.core.cst$kw$display,"block"], null)], null)], null)], null))], null);
mozgas.example.team = (function mozgas$example$team(team__$1){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li$list__item,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(team__$1),cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$background_DASH_color,cljs.core.cst$kw$bg.cljs$core$IFn$_invoke$arity$1(team__$1),cljs.core.cst$kw$color,cljs.core.cst$kw$fg.cljs$core$IFn$_invoke$arity$1(team__$1)], null)], null),cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(team__$1)], null);
});
mozgas.example.add_item = (function mozgas$example$add_item(teams,item_count){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(item_count,cljs.core.inc);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(teams,(function (p1__17225_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.rand_nth(mozgas.example.soccer_teams),cljs.core.cst$kw$id,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(item_count) : cljs.core.deref.call(null,item_count))),p1__17225_SHARP_));
}));
});
mozgas.example.enter_animation = (function mozgas$example$enter_animation(duration){
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$animation,cljs.core.cst$kw$in.cljs$core$IFn$_invoke$arity$1(mozgas.example.team_animation),cljs.core.cst$kw$stagger,duration,cljs.core.cst$kw$duration,duration,cljs.core.cst$kw$backwards,true,cljs.core.cst$kw$display,"block",cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$display,"none"], null)], null);
});
mozgas.example.leave_animation = (function mozgas$example$leave_animation(duration){
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$animation,cljs.core.cst$kw$out.cljs$core$IFn$_invoke$arity$1(mozgas.example.team_animation),cljs.core.cst$kw$stagger,duration,cljs.core.cst$kw$duration,duration,cljs.core.cst$kw$backwards,true], null);
});
mozgas.example.custom_transition = (function mozgas$example$custom_transition(){
var teams = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
var item_count = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
var duration = (500);
return ((function (teams,item_count,duration){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$custom_DASH_transition,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$btn,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,((function (teams,item_count,duration){
return (function (){
return mozgas.example.add_item(teams,item_count);
});})(teams,item_count,duration))
], null),"add"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$btn,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,((function (teams,item_count,duration){
return (function (){
var n__7454__auto__ = (3);
var n = (0);
while(true){
if((n < n__7454__auto__)){
mozgas.example.add_item(teams,item_count);

var G__17226 = (n + (1));
n = G__17226;
continue;
} else {
return null;
}
break;
}
});})(teams,item_count,duration))
], null),"add 3"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mozgas.core.motion_group,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$key,"motion-gropu",cljs.core.cst$kw$component,"ul",cljs.core.cst$kw$class_DASH_name,"custom-transition__list",cljs.core.cst$kw$enter,mozgas.example.enter_animation(duration),cljs.core.cst$kw$leave,mozgas.example.leave_animation(duration)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(mozgas.example.team,cljs.core.take.cljs$core$IFn$_invoke$arity$2((5),(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(teams) : cljs.core.deref.call(null,teams))))], null)], null);
});
;})(teams,item_count,duration))
});
mozgas.example.nav_items = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,(0),cljs.core.cst$kw$title,"Toggle box"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,(1),cljs.core.cst$kw$title,"Square list"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,(2),cljs.core.cst$kw$title,"Custom animation"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,(3),cljs.core.cst$kw$title,"Custom transition"], null)], null);
mozgas.example.make_nav_item = (function mozgas$example$make_nav_item(state){
return (function (item){
return null;
});
});
mozgas.example.views = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,(0),cljs.core.cst$kw$view,mozgas.example.toggle_box], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,(1),cljs.core.cst$kw$view,mozgas.example.square_list], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,(2),cljs.core.cst$kw$view,mozgas.example.custom_animation], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,(3),cljs.core.cst$kw$view,mozgas.example.custom_transition], null)], null);
mozgas.example.make_view = (function mozgas$example$make_view(state){
return (function (view){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state)),cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(view))){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$view.cljs$core$IFn$_invoke$arity$1(view)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(view)], null));
} else {
return null;
}
});
});
mozgas.example.examples = (function mozgas$example$examples(){
var state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
return ((function (state){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$main,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h1$title,"Mozg\u00E1s Examples"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul$nav,cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__7320__auto__ = ((function (state){
return (function mozgas$example$examples_$_iter__17247(s__17248){
return (new cljs.core.LazySeq(null,((function (state){
return (function (){
var s__17248__$1 = s__17248;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__17248__$1);
if(temp__4657__auto__){
var s__17248__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__17248__$2)){
var c__7318__auto__ = cljs.core.chunk_first(s__17248__$2);
var size__7319__auto__ = cljs.core.count(c__7318__auto__);
var b__17250 = cljs.core.chunk_buffer(size__7319__auto__);
if((function (){var i__17249 = (0);
while(true){
if((i__17249 < size__7319__auto__)){
var item = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7318__auto__,i__17249);
cljs.core.chunk_append(b__17250,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$key,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(item),cljs.core.cst$kw$on_DASH_click,((function (i__17249,item,c__7318__auto__,size__7319__auto__,b__17250,s__17248__$2,temp__4657__auto__,state){
return (function (){
var G__17257 = state;
var G__17258 = cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(item);
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__17257,G__17258) : cljs.core.reset_BANG_.call(null,G__17257,G__17258));
});})(i__17249,item,c__7318__auto__,size__7319__auto__,b__17250,s__17248__$2,temp__4657__auto__,state))
,cljs.core.cst$kw$class_DASH_name,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state)),cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(item)))?"nav__item nav__item--active":"nav__item")], null),cljs.core.cst$kw$title.cljs$core$IFn$_invoke$arity$1(item)], null));

var G__17267 = (i__17249 + (1));
i__17249 = G__17267;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__17250),mozgas$example$examples_$_iter__17247(cljs.core.chunk_rest(s__17248__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__17250),null);
}
} else {
var item = cljs.core.first(s__17248__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$key,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(item),cljs.core.cst$kw$on_DASH_click,((function (item,s__17248__$2,temp__4657__auto__,state){
return (function (){
var G__17259 = state;
var G__17260 = cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(item);
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__17259,G__17260) : cljs.core.reset_BANG_.call(null,G__17259,G__17260));
});})(item,s__17248__$2,temp__4657__auto__,state))
,cljs.core.cst$kw$class_DASH_name,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state)),cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(item)))?"nav__item nav__item--active":"nav__item")], null),cljs.core.cst$kw$title.cljs$core$IFn$_invoke$arity$1(item)], null),mozgas$example$examples_$_iter__17247(cljs.core.rest(s__17248__$2)));
}
} else {
return null;
}
break;
}
});})(state))
,null,null));
});})(state))
;
return iter__7320__auto__(mozgas.example.nav_items);
})())], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mozgas.core.motion_group,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$component,"div",cljs.core.cst$kw$class_DASH_name,"content",cljs.core.cst$kw$enter,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$animation,"transition.slideUpIn",cljs.core.cst$kw$delay,(400),cljs.core.cst$kw$duration,(300)], null),cljs.core.cst$kw$leave,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$animation,"transition.slideUpOut",cljs.core.cst$kw$duration,(300)], null)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__7320__auto__ = ((function (state){
return (function mozgas$example$examples_$_iter__17261(s__17262){
return (new cljs.core.LazySeq(null,((function (state){
return (function (){
var s__17262__$1 = s__17262;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__17262__$1);
if(temp__4657__auto__){
var s__17262__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__17262__$2)){
var c__7318__auto__ = cljs.core.chunk_first(s__17262__$2);
var size__7319__auto__ = cljs.core.count(c__7318__auto__);
var b__17264 = cljs.core.chunk_buffer(size__7319__auto__);
if((function (){var i__17263 = (0);
while(true){
if((i__17263 < size__7319__auto__)){
var view = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7318__auto__,i__17263);
cljs.core.chunk_append(b__17264,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state)),cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(view)))?cljs.core.with_meta(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$view.cljs$core$IFn$_invoke$arity$1(view)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(view)], null)):null));

var G__17268 = (i__17263 + (1));
i__17263 = G__17268;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__17264),mozgas$example$examples_$_iter__17261(cljs.core.chunk_rest(s__17262__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__17264),null);
}
} else {
var view = cljs.core.first(s__17262__$2);
return cljs.core.cons(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state)),cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(view)))?cljs.core.with_meta(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$view.cljs$core$IFn$_invoke$arity$1(view)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(view)], null)):null),mozgas$example$examples_$_iter__17261(cljs.core.rest(s__17262__$2)));
}
} else {
return null;
}
break;
}
});})(state))
,null,null));
});})(state))
;
return iter__7320__auto__(mozgas.example.views);
})())], null)], null);
});
;})(state))
});
mozgas.example.mount_BANG_ = (function mozgas$example$mount_BANG_(){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["-> Mozgas loaded"], 0));

return reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mozgas.example.examples], null),goog.dom.getElement("app"));
});
mozgas.example.mount_BANG_();
