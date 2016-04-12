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
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mozgas.core.motion_component,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$duration,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(duration) : cljs.core.deref.call(null,duration)),cljs.core.cst$kw$animation,(cljs.core.truth_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(visible_QMARK_) : cljs.core.deref.call(null,visible_QMARK_)))?[cljs.core.str("transition."),cljs.core.str((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(transition) : cljs.core.deref.call(null,transition))),cljs.core.str("In")].join(''):[cljs.core.str("transition."),cljs.core.str((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(transition) : cljs.core.deref.call(null,transition))),cljs.core.str("Out")].join(''))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$width,(100),cljs.core.cst$kw$height,(100),cljs.core.cst$kw$background_DASH_color,"indigo"], null)], null)], null)], null)], null)], null);
});
;})(visible_QMARK_,transition,duration))
});
mozgas.example.square = (function mozgas$example$square(item){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,item,cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$width,(100),cljs.core.cst$kw$height,(100),cljs.core.cst$kw$margin,"0.2rem",cljs.core.cst$kw$background_DASH_color,"orange"], null)], null)], null);
});
mozgas.example.squares = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
mozgas.example.render_square_list = (function mozgas$example$render_square_list(){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mozgas.core.motion_group,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$enter,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$animation,"transition.shrinkIn"], null),cljs.core.cst$kw$leave,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$animation,"transition.expandOut"], null),cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$display,"flex",cljs.core.cst$kw$flex_DASH_wrap,"wrap"], null)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(mozgas.example.square,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mozgas.example.squares) : cljs.core.deref.call(null,mozgas.example.squares)))], null)], null);
});
});
mozgas.example.on_mount_square_list = (function mozgas$example$on_mount_square_list(){
var c__14323__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14323__auto__){
return (function (){
var f__14324__auto__ = (function (){var switch__14209__auto__ = ((function (c__14323__auto__){
return (function (state_17187){
var state_val_17188 = (state_17187[(1)]);
if((state_val_17188 === (1))){
var state_17187__$1 = state_17187;
var statearr_17189_17199 = state_17187__$1;
(statearr_17189_17199[(2)] = null);

(statearr_17189_17199[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17188 === (2))){
var inst_17176 = cljs.core.rand_int((3));
var inst_17177 = ((1000) * inst_17176);
var inst_17178 = cljs.core.async.timeout(inst_17177);
var state_17187__$1 = state_17187;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17187__$1,(4),inst_17178);
} else {
if((state_val_17188 === (3))){
var inst_17185 = (state_17187[(2)]);
var state_17187__$1 = state_17187;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17187__$1,inst_17185);
} else {
if((state_val_17188 === (4))){
var inst_17180 = (state_17187[(2)]);
var inst_17181 = cljs.core.rand_int((999));
var inst_17182 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mozgas.example.squares,cljs.core.conj,inst_17181);
var state_17187__$1 = (function (){var statearr_17190 = state_17187;
(statearr_17190[(7)] = inst_17180);

(statearr_17190[(8)] = inst_17182);

return statearr_17190;
})();
var statearr_17191_17200 = state_17187__$1;
(statearr_17191_17200[(2)] = null);

(statearr_17191_17200[(1)] = (2));


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
var statearr_17195 = [null,null,null,null,null,null,null,null,null];
(statearr_17195[(0)] = mozgas$example$on_mount_square_list_$_state_machine__14210__auto__);

(statearr_17195[(1)] = (1));

return statearr_17195;
});
var mozgas$example$on_mount_square_list_$_state_machine__14210__auto____1 = (function (state_17187){
while(true){
var ret_value__14211__auto__ = (function (){try{while(true){
var result__14212__auto__ = switch__14209__auto__(state_17187);
if(cljs.core.keyword_identical_QMARK_(result__14212__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14212__auto__;
}
break;
}
}catch (e17196){if((e17196 instanceof Object)){
var ex__14213__auto__ = e17196;
var statearr_17197_17201 = state_17187;
(statearr_17197_17201[(5)] = ex__14213__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17187);

return cljs.core.cst$kw$recur;
} else {
throw e17196;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14211__auto__,cljs.core.cst$kw$recur)){
var G__17202 = state_17187;
state_17187 = G__17202;
continue;
} else {
return ret_value__14211__auto__;
}
break;
}
});
mozgas$example$on_mount_square_list_$_state_machine__14210__auto__ = function(state_17187){
switch(arguments.length){
case 0:
return mozgas$example$on_mount_square_list_$_state_machine__14210__auto____0.call(this);
case 1:
return mozgas$example$on_mount_square_list_$_state_machine__14210__auto____1.call(this,state_17187);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mozgas$example$on_mount_square_list_$_state_machine__14210__auto__.cljs$core$IFn$_invoke$arity$0 = mozgas$example$on_mount_square_list_$_state_machine__14210__auto____0;
mozgas$example$on_mount_square_list_$_state_machine__14210__auto__.cljs$core$IFn$_invoke$arity$1 = mozgas$example$on_mount_square_list_$_state_machine__14210__auto____1;
return mozgas$example$on_mount_square_list_$_state_machine__14210__auto__;
})()
;})(switch__14209__auto__,c__14323__auto__))
})();
var state__14325__auto__ = (function (){var statearr_17198 = (f__14324__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14324__auto__.cljs$core$IFn$_invoke$arity$0() : f__14324__auto__.call(null));
(statearr_17198[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14323__auto__);

return statearr_17198;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14325__auto__);
});})(c__14323__auto__))
);

return c__14323__auto__;
});
mozgas.example.square_list = (function mozgas$example$square_list(){
return reagent.core.create_class(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$component_DASH_did_DASH_mount,mozgas.example.on_mount_square_list,cljs.core.cst$kw$reagent_DASH_render,mozgas.example.render_square_list], null));
});
mozgas.example.heart_animation = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$heart,mozgas.core.register_effect(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$defaultDuration,(750),cljs.core.cst$kw$calls,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$scale,(0)], null),0.05], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$scale,(0)], null),0.2], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$scale,1.2], null),0.3,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$easing,"ease-out"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$scale,(1)], null),0.4], null)], null)], null)),cljs.core.cst$kw$explosion,mozgas.core.register_effect(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$defaultDuration,(750),cljs.core.cst$kw$calls,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$scale,(0),cljs.core.cst$kw$opacity,(1)], null),0.1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$scale,(1)], null),0.2], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$opacity,(0)], null),0.4], null)], null)], null))], null);
mozgas.example.custom_animation = (function mozgas$example$custom_animation(){
var fav_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
return ((function (fav_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$custom_DASH_animation,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mozgas.core.motion_component,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$animation,(cljs.core.truth_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(fav_QMARK_) : cljs.core.deref.call(null,fav_QMARK_)))?cljs.core.get.cljs$core$IFn$_invoke$arity$2(mozgas.example.heart_animation,cljs.core.cst$kw$explosion):null),cljs.core.cst$kw$run_DASH_on_DASH_mount,true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$custom_DASH_animation__circle,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,"absolute"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mozgas.core.motion_component,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$animation,(cljs.core.truth_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(fav_QMARK_) : cljs.core.deref.call(null,fav_QMARK_)))?cljs.core.get.cljs$core$IFn$_invoke$arity$2(mozgas.example.heart_animation,cljs.core.cst$kw$heart):null),cljs.core.cst$kw$run_DASH_on_DASH_mount,true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$custom_DASH_animation__heart,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$class_DASH_name,(cljs.core.truth_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(fav_QMARK_) : cljs.core.deref.call(null,fav_QMARK_)))?"custom-animation__heart\n                         custom-animation__heart--active":"custom-animation__heart"),cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,"absolute"], null),cljs.core.cst$kw$on_DASH_click,((function (fav_QMARK_){
return (function (){
var G__17205 = fav_QMARK_;
var G__17206 = cljs.core.not((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(fav_QMARK_) : cljs.core.deref.call(null,fav_QMARK_)));
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__17205,G__17206) : cljs.core.reset_BANG_.call(null,G__17205,G__17206));
});})(fav_QMARK_))
], null)], null)], null)], null);
});
;})(fav_QMARK_))
});
mozgas.example.soccer_teams = new cljs.core.PersistentVector(null, 22, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Sao Paulo","Santos","Corinthians","Palmeiras","Internacional","Gremio","Avai","Figueirense","Atletico PR","Coritiba","Parana Clube","Botafogo","Flamengo","Fluminense","Vasco","Atletico MG","Cruzeiro","Bahia","Vitoria","Ceara","Santa Cruz","Remo"], null);
mozgas.example.team_animation = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$in,mozgas.core.register_effect(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$calls,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$transformPerspective,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(800),(800)], null),cljs.core.cst$kw$transformOriginX,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["50%","50%"], null),cljs.core.cst$kw$transformOriginY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["100%","100%"], null),cljs.core.cst$kw$marginBottom,(0),cljs.core.cst$kw$opacity,(1),cljs.core.cst$kw$rotateX,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(130)], null)], null),(1),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$easing,"ease-out",cljs.core.cst$kw$display,"block"], null)], null)], null)], null)),cljs.core.cst$kw$out,mozgas.core.register_effect(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$calls,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$transformPerspective,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(800),(800)], null),cljs.core.cst$kw$transformOriginX,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["50%","50%"], null),cljs.core.cst$kw$transformOriginY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["0%","0%"], null),cljs.core.cst$kw$marginBottom,(-30),cljs.core.cst$kw$opacity,(0),cljs.core.cst$kw$rotateX,(-70)], null),(1),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$easing,"ease-out",cljs.core.cst$kw$display,"block"], null)], null)], null)], null))], null);
mozgas.example.team = (function mozgas$example$team(team__$1){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li$list__item,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(team__$1)], null),cljs.core.cst$kw$team.cljs$core$IFn$_invoke$arity$1(team__$1)], null);
});
mozgas.example.add_item = (function mozgas$example$add_item(teams,item_count){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(item_count,cljs.core.inc);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(teams,(function (p1__17207_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.cons(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(item_count) : cljs.core.deref.call(null,item_count)),cljs.core.cst$kw$team,cljs.core.rand_nth(mozgas.example.soccer_teams)], null),p1__17207_SHARP_));
}));
});
mozgas.example.custom_transition = (function mozgas$example$custom_transition(){
var teams = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
var item_count = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
var duration = (500);
return ((function (teams,item_count,duration){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$custom_DASH_transition,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,((function (teams,item_count,duration){
return (function (){
return mozgas.example.add_item(teams,item_count);
});})(teams,item_count,duration))
], null),"add"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,((function (teams,item_count,duration){
return (function (){
var n__7454__auto__ = (3);
var n = (0);
while(true){
if((n < n__7454__auto__)){
mozgas.example.add_item(teams,item_count);

var G__17208 = (n + (1));
n = G__17208;
continue;
} else {
return null;
}
break;
}
});})(teams,item_count,duration))
], null),"add 3"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mozgas.core.motion_group,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$key,"motion-gropu",cljs.core.cst$kw$component,"ul",cljs.core.cst$kw$class_DASH_name,"custom-transition__list",cljs.core.cst$kw$enter,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$animation,cljs.core.cst$kw$in.cljs$core$IFn$_invoke$arity$1(mozgas.example.team_animation),cljs.core.cst$kw$stagger,duration,cljs.core.cst$kw$duration,duration,cljs.core.cst$kw$backwards,true,cljs.core.cst$kw$display,"block",cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$display,"none"], null)], null),cljs.core.cst$kw$leave,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$animation,cljs.core.cst$kw$out.cljs$core$IFn$_invoke$arity$1(mozgas.example.team_animation),cljs.core.cst$kw$stagger,duration,cljs.core.cst$kw$duration,duration,cljs.core.cst$kw$backwards,true], null)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(mozgas.example.team,cljs.core.take.cljs$core$IFn$_invoke$arity$2((5),(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(teams) : cljs.core.deref.call(null,teams))))], null)], null);
});
;})(teams,item_count,duration))
});
mozgas.example.examples = (function mozgas$example$examples(){
var state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((3));
return ((function (state){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$main,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h1$title,"Mozg\u00E1s Examples"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul$nav,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li$nav__item,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,((function (state){
return (function (){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(state,(0)) : cljs.core.reset_BANG_.call(null,state,(0)));
});})(state))
], null),"Toggle box"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li$nav__item,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,((function (state){
return (function (){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(state,(1)) : cljs.core.reset_BANG_.call(null,state,(1)));
});})(state))
], null),"Square list"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li$nav__item,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,((function (state){
return (function (){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(state,(2)) : cljs.core.reset_BANG_.call(null,state,(2)));
});})(state))
], null),"Custom animation"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li$nav__item,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,((function (state){
return (function (){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(state,(3)) : cljs.core.reset_BANG_.call(null,state,(3)));
});})(state))
], null),"Custom transition"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$content,(function (){var pred__17212 = cljs.core._EQ_;
var expr__17213 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state));
if(cljs.core.truth_((pred__17212.cljs$core$IFn$_invoke$arity$2 ? pred__17212.cljs$core$IFn$_invoke$arity$2((0),expr__17213) : pred__17212.call(null,(0),expr__17213)))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mozgas.example.toggle_box], null);
} else {
if(cljs.core.truth_((pred__17212.cljs$core$IFn$_invoke$arity$2 ? pred__17212.cljs$core$IFn$_invoke$arity$2((1),expr__17213) : pred__17212.call(null,(1),expr__17213)))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mozgas.example.square_list], null);
} else {
if(cljs.core.truth_((pred__17212.cljs$core$IFn$_invoke$arity$2 ? pred__17212.cljs$core$IFn$_invoke$arity$2((2),expr__17213) : pred__17212.call(null,(2),expr__17213)))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mozgas.example.custom_animation], null);
} else {
if(cljs.core.truth_((pred__17212.cljs$core$IFn$_invoke$arity$2 ? pred__17212.cljs$core$IFn$_invoke$arity$2((3),expr__17213) : pred__17212.call(null,(3),expr__17213)))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mozgas.example.custom_transition], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"Choose an example"], null);
}
}
}
}
})()], null)], null);
});
;})(state))
});
mozgas.example.mount_BANG_ = (function mozgas$example$mount_BANG_(){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["-> Mozgas loaded"], 0));

return reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mozgas.example.examples], null),goog.dom.getElement("app"));
});
mozgas.example.mount_BANG_();
