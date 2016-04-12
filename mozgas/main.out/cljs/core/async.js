// Compiled by ClojureScript 1.8.40 {:static-fns true, :optimize-constants true}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args14368 = [];
var len__7609__auto___14374 = arguments.length;
var i__7610__auto___14375 = (0);
while(true){
if((i__7610__auto___14375 < len__7609__auto___14374)){
args14368.push((arguments[i__7610__auto___14375]));

var G__14376 = (i__7610__auto___14375 + (1));
i__7610__auto___14375 = G__14376;
continue;
} else {
}
break;
}

var G__14370 = args14368.length;
switch (G__14370) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14368.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async14371 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14371 = (function (f,blockable,meta14372){
this.f = f;
this.blockable = blockable;
this.meta14372 = meta14372;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async14371.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14373,meta14372__$1){
var self__ = this;
var _14373__$1 = this;
return (new cljs.core.async.t_cljs$core$async14371(self__.f,self__.blockable,meta14372__$1));
});

cljs.core.async.t_cljs$core$async14371.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14373){
var self__ = this;
var _14373__$1 = this;
return self__.meta14372;
});

cljs.core.async.t_cljs$core$async14371.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async14371.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async14371.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async14371.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async14371.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$blockable,cljs.core.cst$sym$meta14372], null);
});

cljs.core.async.t_cljs$core$async14371.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14371.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14371";

cljs.core.async.t_cljs$core$async14371.cljs$lang$ctorPrWriter = (function (this__7146__auto__,writer__7147__auto__,opt__7148__auto__){
return cljs.core._write(writer__7147__auto__,"cljs.core.async/t_cljs$core$async14371");
});

cljs.core.async.__GT_t_cljs$core$async14371 = (function cljs$core$async$__GT_t_cljs$core$async14371(f__$1,blockable__$1,meta14372){
return (new cljs.core.async.t_cljs$core$async14371(f__$1,blockable__$1,meta14372));
});

}

return (new cljs.core.async.t_cljs$core$async14371(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args14380 = [];
var len__7609__auto___14383 = arguments.length;
var i__7610__auto___14384 = (0);
while(true){
if((i__7610__auto___14384 < len__7609__auto___14383)){
args14380.push((arguments[i__7610__auto___14384]));

var G__14385 = (i__7610__auto___14384 + (1));
i__7610__auto___14384 = G__14385;
continue;
} else {
}
break;
}

var G__14382 = args14380.length;
switch (G__14382) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14380.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args14387 = [];
var len__7609__auto___14390 = arguments.length;
var i__7610__auto___14391 = (0);
while(true){
if((i__7610__auto___14391 < len__7609__auto___14390)){
args14387.push((arguments[i__7610__auto___14391]));

var G__14392 = (i__7610__auto___14391 + (1));
i__7610__auto___14391 = G__14392;
continue;
} else {
}
break;
}

var G__14389 = args14387.length;
switch (G__14389) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14387.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args14394 = [];
var len__7609__auto___14397 = arguments.length;
var i__7610__auto___14398 = (0);
while(true){
if((i__7610__auto___14398 < len__7609__auto___14397)){
args14394.push((arguments[i__7610__auto___14398]));

var G__14399 = (i__7610__auto___14398 + (1));
i__7610__auto___14398 = G__14399;
continue;
} else {
}
break;
}

var G__14396 = args14394.length;
switch (G__14396) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14394.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_14401 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_14401) : fn1.call(null,val_14401));
} else {
cljs.core.async.impl.dispatch.run(((function (val_14401,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_14401) : fn1.call(null,val_14401));
});})(val_14401,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args14402 = [];
var len__7609__auto___14405 = arguments.length;
var i__7610__auto___14406 = (0);
while(true){
if((i__7610__auto___14406 < len__7609__auto___14405)){
args14402.push((arguments[i__7610__auto___14406]));

var G__14407 = (i__7610__auto___14406 + (1));
i__7610__auto___14406 = G__14407;
continue;
} else {
}
break;
}

var G__14404 = args14402.length;
switch (G__14404) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14402.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(retb) : cljs.core.deref.call(null,retb));
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__4655__auto__){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__7454__auto___14409 = n;
var x_14410 = (0);
while(true){
if((x_14410 < n__7454__auto___14409)){
(a[x_14410] = (0));

var G__14411 = (x_14410 + (1));
x_14410 = G__14411;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,n)){
return a;
} else {
var j = cljs.core.rand_int(i);
(a[i] = (a[j]));

(a[j] = i);

var G__14412 = (i + (1));
i = G__14412;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true) : cljs.core.atom.call(null,true));
if(typeof cljs.core.async.t_cljs$core$async14416 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14416 = (function (alt_flag,flag,meta14417){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta14417 = meta14417;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async14416.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_14418,meta14417__$1){
var self__ = this;
var _14418__$1 = this;
return (new cljs.core.async.t_cljs$core$async14416(self__.alt_flag,self__.flag,meta14417__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async14416.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_14418){
var self__ = this;
var _14418__$1 = this;
return self__.meta14417;
});})(flag))
;

cljs.core.async.t_cljs$core$async14416.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async14416.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.flag) : cljs.core.deref.call(null,self__.flag));
});})(flag))
;

cljs.core.async.t_cljs$core$async14416.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async14416.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(self__.flag,null) : cljs.core.reset_BANG_.call(null,self__.flag,null));

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async14416.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$alt_DASH_flag,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$private,true,cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),cljs.core.cst$sym$flag,cljs.core.cst$sym$meta14417], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async14416.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14416.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14416";

cljs.core.async.t_cljs$core$async14416.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__7146__auto__,writer__7147__auto__,opt__7148__auto__){
return cljs.core._write(writer__7147__auto__,"cljs.core.async/t_cljs$core$async14416");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async14416 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async14416(alt_flag__$1,flag__$1,meta14417){
return (new cljs.core.async.t_cljs$core$async14416(alt_flag__$1,flag__$1,meta14417));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async14416(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async14422 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14422 = (function (alt_handler,flag,cb,meta14423){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta14423 = meta14423;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async14422.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14424,meta14423__$1){
var self__ = this;
var _14424__$1 = this;
return (new cljs.core.async.t_cljs$core$async14422(self__.alt_handler,self__.flag,self__.cb,meta14423__$1));
});

cljs.core.async.t_cljs$core$async14422.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14424){
var self__ = this;
var _14424__$1 = this;
return self__.meta14423;
});

cljs.core.async.t_cljs$core$async14422.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async14422.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async14422.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async14422.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async14422.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$alt_DASH_handler,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$private,true,cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$cb], null)))], null)),cljs.core.cst$sym$flag,cljs.core.cst$sym$cb,cljs.core.cst$sym$meta14423], null);
});

cljs.core.async.t_cljs$core$async14422.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14422.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14422";

cljs.core.async.t_cljs$core$async14422.cljs$lang$ctorPrWriter = (function (this__7146__auto__,writer__7147__auto__,opt__7148__auto__){
return cljs.core._write(writer__7147__auto__,"cljs.core.async/t_cljs$core$async14422");
});

cljs.core.async.__GT_t_cljs$core$async14422 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async14422(alt_handler__$1,flag__$1,cb__$1,meta14423){
return (new cljs.core.async.t_cljs$core$async14422(alt_handler__$1,flag__$1,cb__$1,meta14423));
});

}

return (new cljs.core.async.t_cljs$core$async14422(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = cljs.core.cst$kw$priority.cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__14425_SHARP_){
var G__14429 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14425_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__14429) : fret.call(null,G__14429));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__14426_SHARP_){
var G__14430 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14426_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__14430) : fret.call(null,G__14430));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(vbox) : cljs.core.deref.call(null,vbox)),(function (){var or__6540__auto__ = wport;
if(cljs.core.truth_(or__6540__auto__)){
return or__6540__auto__;
} else {
return port;
}
})()], null));
} else {
var G__14431 = (i + (1));
i = G__14431;
continue;
}
} else {
return null;
}
break;
}
})();
var or__6540__auto__ = ret;
if(cljs.core.truth_(or__6540__auto__)){
return or__6540__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,cljs.core.cst$kw$default)){
var temp__4657__auto__ = (function (){var and__6528__auto__ = cljs.core.async.impl.protocols.active_QMARK_(flag);
if(cljs.core.truth_(and__6528__auto__)){
return cljs.core.async.impl.protocols.commit(flag);
} else {
return and__6528__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$default.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.cst$kw$default], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__7616__auto__ = [];
var len__7609__auto___14437 = arguments.length;
var i__7610__auto___14438 = (0);
while(true){
if((i__7610__auto___14438 < len__7609__auto___14437)){
args__7616__auto__.push((arguments[i__7610__auto___14438]));

var G__14439 = (i__7610__auto___14438 + (1));
i__7610__auto___14438 = G__14439;
continue;
} else {
}
break;
}

var argseq__7617__auto__ = ((((1) < args__7616__auto__.length))?(new cljs.core.IndexedSeq(args__7616__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7617__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__14434){
var map__14435 = p__14434;
var map__14435__$1 = ((((!((map__14435 == null)))?((((map__14435.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14435.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14435):map__14435);
var opts = map__14435__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq14432){
var G__14433 = cljs.core.first(seq14432);
var seq14432__$1 = cljs.core.next(seq14432);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__14433,seq14432__$1);
});
/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args14440 = [];
var len__7609__auto___14490 = arguments.length;
var i__7610__auto___14491 = (0);
while(true){
if((i__7610__auto___14491 < len__7609__auto___14490)){
args14440.push((arguments[i__7610__auto___14491]));

var G__14492 = (i__7610__auto___14491 + (1));
i__7610__auto___14491 = G__14492;
continue;
} else {
}
break;
}

var G__14442 = args14440.length;
switch (G__14442) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14440.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__14323__auto___14494 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14323__auto___14494){
return (function (){
var f__14324__auto__ = (function (){var switch__14209__auto__ = ((function (c__14323__auto___14494){
return (function (state_14466){
var state_val_14467 = (state_14466[(1)]);
if((state_val_14467 === (7))){
var inst_14462 = (state_14466[(2)]);
var state_14466__$1 = state_14466;
var statearr_14468_14495 = state_14466__$1;
(statearr_14468_14495[(2)] = inst_14462);

(statearr_14468_14495[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14467 === (1))){
var state_14466__$1 = state_14466;
var statearr_14469_14496 = state_14466__$1;
(statearr_14469_14496[(2)] = null);

(statearr_14469_14496[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14467 === (4))){
var inst_14445 = (state_14466[(7)]);
var inst_14445__$1 = (state_14466[(2)]);
var inst_14446 = (inst_14445__$1 == null);
var state_14466__$1 = (function (){var statearr_14470 = state_14466;
(statearr_14470[(7)] = inst_14445__$1);

return statearr_14470;
})();
if(cljs.core.truth_(inst_14446)){
var statearr_14471_14497 = state_14466__$1;
(statearr_14471_14497[(1)] = (5));

} else {
var statearr_14472_14498 = state_14466__$1;
(statearr_14472_14498[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14467 === (13))){
var state_14466__$1 = state_14466;
var statearr_14473_14499 = state_14466__$1;
(statearr_14473_14499[(2)] = null);

(statearr_14473_14499[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14467 === (6))){
var inst_14445 = (state_14466[(7)]);
var state_14466__$1 = state_14466;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14466__$1,(11),to,inst_14445);
} else {
if((state_val_14467 === (3))){
var inst_14464 = (state_14466[(2)]);
var state_14466__$1 = state_14466;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14466__$1,inst_14464);
} else {
if((state_val_14467 === (12))){
var state_14466__$1 = state_14466;
var statearr_14474_14500 = state_14466__$1;
(statearr_14474_14500[(2)] = null);

(statearr_14474_14500[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14467 === (2))){
var state_14466__$1 = state_14466;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14466__$1,(4),from);
} else {
if((state_val_14467 === (11))){
var inst_14455 = (state_14466[(2)]);
var state_14466__$1 = state_14466;
if(cljs.core.truth_(inst_14455)){
var statearr_14475_14501 = state_14466__$1;
(statearr_14475_14501[(1)] = (12));

} else {
var statearr_14476_14502 = state_14466__$1;
(statearr_14476_14502[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14467 === (9))){
var state_14466__$1 = state_14466;
var statearr_14477_14503 = state_14466__$1;
(statearr_14477_14503[(2)] = null);

(statearr_14477_14503[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14467 === (5))){
var state_14466__$1 = state_14466;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14478_14504 = state_14466__$1;
(statearr_14478_14504[(1)] = (8));

} else {
var statearr_14479_14505 = state_14466__$1;
(statearr_14479_14505[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14467 === (14))){
var inst_14460 = (state_14466[(2)]);
var state_14466__$1 = state_14466;
var statearr_14480_14506 = state_14466__$1;
(statearr_14480_14506[(2)] = inst_14460);

(statearr_14480_14506[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14467 === (10))){
var inst_14452 = (state_14466[(2)]);
var state_14466__$1 = state_14466;
var statearr_14481_14507 = state_14466__$1;
(statearr_14481_14507[(2)] = inst_14452);

(statearr_14481_14507[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14467 === (8))){
var inst_14449 = cljs.core.async.close_BANG_(to);
var state_14466__$1 = state_14466;
var statearr_14482_14508 = state_14466__$1;
(statearr_14482_14508[(2)] = inst_14449);

(statearr_14482_14508[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__14323__auto___14494))
;
return ((function (switch__14209__auto__,c__14323__auto___14494){
return (function() {
var cljs$core$async$state_machine__14210__auto__ = null;
var cljs$core$async$state_machine__14210__auto____0 = (function (){
var statearr_14486 = [null,null,null,null,null,null,null,null];
(statearr_14486[(0)] = cljs$core$async$state_machine__14210__auto__);

(statearr_14486[(1)] = (1));

return statearr_14486;
});
var cljs$core$async$state_machine__14210__auto____1 = (function (state_14466){
while(true){
var ret_value__14211__auto__ = (function (){try{while(true){
var result__14212__auto__ = switch__14209__auto__(state_14466);
if(cljs.core.keyword_identical_QMARK_(result__14212__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14212__auto__;
}
break;
}
}catch (e14487){if((e14487 instanceof Object)){
var ex__14213__auto__ = e14487;
var statearr_14488_14509 = state_14466;
(statearr_14488_14509[(5)] = ex__14213__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_14466);

return cljs.core.cst$kw$recur;
} else {
throw e14487;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14211__auto__,cljs.core.cst$kw$recur)){
var G__14510 = state_14466;
state_14466 = G__14510;
continue;
} else {
return ret_value__14211__auto__;
}
break;
}
});
cljs$core$async$state_machine__14210__auto__ = function(state_14466){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14210__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14210__auto____1.call(this,state_14466);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14210__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14210__auto____0;
cljs$core$async$state_machine__14210__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14210__auto____1;
return cljs$core$async$state_machine__14210__auto__;
})()
;})(switch__14209__auto__,c__14323__auto___14494))
})();
var state__14325__auto__ = (function (){var statearr_14489 = (f__14324__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14324__auto__.cljs$core$IFn$_invoke$arity$0() : f__14324__auto__.call(null));
(statearr_14489[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14323__auto___14494);

return statearr_14489;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14325__auto__);
});})(c__14323__auto___14494))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = ((function (jobs,results){
return (function (p__14694){
var vec__14695 = p__14694;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14695,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14695,(1),null);
var job = vec__14695;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__14323__auto___14877 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14323__auto___14877,res,vec__14695,v,p,job,jobs,results){
return (function (){
var f__14324__auto__ = (function (){var switch__14209__auto__ = ((function (c__14323__auto___14877,res,vec__14695,v,p,job,jobs,results){
return (function (state_14700){
var state_val_14701 = (state_14700[(1)]);
if((state_val_14701 === (1))){
var state_14700__$1 = state_14700;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14700__$1,(2),res,v);
} else {
if((state_val_14701 === (2))){
var inst_14697 = (state_14700[(2)]);
var inst_14698 = cljs.core.async.close_BANG_(res);
var state_14700__$1 = (function (){var statearr_14702 = state_14700;
(statearr_14702[(7)] = inst_14697);

return statearr_14702;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_14700__$1,inst_14698);
} else {
return null;
}
}
});})(c__14323__auto___14877,res,vec__14695,v,p,job,jobs,results))
;
return ((function (switch__14209__auto__,c__14323__auto___14877,res,vec__14695,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14210__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14210__auto____0 = (function (){
var statearr_14706 = [null,null,null,null,null,null,null,null];
(statearr_14706[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14210__auto__);

(statearr_14706[(1)] = (1));

return statearr_14706;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14210__auto____1 = (function (state_14700){
while(true){
var ret_value__14211__auto__ = (function (){try{while(true){
var result__14212__auto__ = switch__14209__auto__(state_14700);
if(cljs.core.keyword_identical_QMARK_(result__14212__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14212__auto__;
}
break;
}
}catch (e14707){if((e14707 instanceof Object)){
var ex__14213__auto__ = e14707;
var statearr_14708_14878 = state_14700;
(statearr_14708_14878[(5)] = ex__14213__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_14700);

return cljs.core.cst$kw$recur;
} else {
throw e14707;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14211__auto__,cljs.core.cst$kw$recur)){
var G__14879 = state_14700;
state_14700 = G__14879;
continue;
} else {
return ret_value__14211__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14210__auto__ = function(state_14700){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14210__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14210__auto____1.call(this,state_14700);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14210__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14210__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14210__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14210__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14210__auto__;
})()
;})(switch__14209__auto__,c__14323__auto___14877,res,vec__14695,v,p,job,jobs,results))
})();
var state__14325__auto__ = (function (){var statearr_14709 = (f__14324__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14324__auto__.cljs$core$IFn$_invoke$arity$0() : f__14324__auto__.call(null));
(statearr_14709[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14323__auto___14877);

return statearr_14709;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14325__auto__);
});})(c__14323__auto___14877,res,vec__14695,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__14710){
var vec__14711 = p__14710;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14711,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14711,(1),null);
var job = vec__14711;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results,process))
;
var n__7454__auto___14880 = n;
var __14881 = (0);
while(true){
if((__14881 < n__7454__auto___14880)){
var G__14712_14882 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__14712_14882) {
case "compute":
var c__14323__auto___14884 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__14881,c__14323__auto___14884,G__14712_14882,n__7454__auto___14880,jobs,results,process,async){
return (function (){
var f__14324__auto__ = (function (){var switch__14209__auto__ = ((function (__14881,c__14323__auto___14884,G__14712_14882,n__7454__auto___14880,jobs,results,process,async){
return (function (state_14725){
var state_val_14726 = (state_14725[(1)]);
if((state_val_14726 === (1))){
var state_14725__$1 = state_14725;
var statearr_14727_14885 = state_14725__$1;
(statearr_14727_14885[(2)] = null);

(statearr_14727_14885[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14726 === (2))){
var state_14725__$1 = state_14725;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14725__$1,(4),jobs);
} else {
if((state_val_14726 === (3))){
var inst_14723 = (state_14725[(2)]);
var state_14725__$1 = state_14725;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14725__$1,inst_14723);
} else {
if((state_val_14726 === (4))){
var inst_14715 = (state_14725[(2)]);
var inst_14716 = process(inst_14715);
var state_14725__$1 = state_14725;
if(cljs.core.truth_(inst_14716)){
var statearr_14728_14886 = state_14725__$1;
(statearr_14728_14886[(1)] = (5));

} else {
var statearr_14729_14887 = state_14725__$1;
(statearr_14729_14887[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14726 === (5))){
var state_14725__$1 = state_14725;
var statearr_14730_14888 = state_14725__$1;
(statearr_14730_14888[(2)] = null);

(statearr_14730_14888[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14726 === (6))){
var state_14725__$1 = state_14725;
var statearr_14731_14889 = state_14725__$1;
(statearr_14731_14889[(2)] = null);

(statearr_14731_14889[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14726 === (7))){
var inst_14721 = (state_14725[(2)]);
var state_14725__$1 = state_14725;
var statearr_14732_14890 = state_14725__$1;
(statearr_14732_14890[(2)] = inst_14721);

(statearr_14732_14890[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
});})(__14881,c__14323__auto___14884,G__14712_14882,n__7454__auto___14880,jobs,results,process,async))
;
return ((function (__14881,switch__14209__auto__,c__14323__auto___14884,G__14712_14882,n__7454__auto___14880,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14210__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14210__auto____0 = (function (){
var statearr_14736 = [null,null,null,null,null,null,null];
(statearr_14736[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14210__auto__);

(statearr_14736[(1)] = (1));

return statearr_14736;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14210__auto____1 = (function (state_14725){
while(true){
var ret_value__14211__auto__ = (function (){try{while(true){
var result__14212__auto__ = switch__14209__auto__(state_14725);
if(cljs.core.keyword_identical_QMARK_(result__14212__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14212__auto__;
}
break;
}
}catch (e14737){if((e14737 instanceof Object)){
var ex__14213__auto__ = e14737;
var statearr_14738_14891 = state_14725;
(statearr_14738_14891[(5)] = ex__14213__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_14725);

return cljs.core.cst$kw$recur;
} else {
throw e14737;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14211__auto__,cljs.core.cst$kw$recur)){
var G__14892 = state_14725;
state_14725 = G__14892;
continue;
} else {
return ret_value__14211__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14210__auto__ = function(state_14725){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14210__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14210__auto____1.call(this,state_14725);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14210__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14210__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14210__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14210__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14210__auto__;
})()
;})(__14881,switch__14209__auto__,c__14323__auto___14884,G__14712_14882,n__7454__auto___14880,jobs,results,process,async))
})();
var state__14325__auto__ = (function (){var statearr_14739 = (f__14324__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14324__auto__.cljs$core$IFn$_invoke$arity$0() : f__14324__auto__.call(null));
(statearr_14739[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14323__auto___14884);

return statearr_14739;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14325__auto__);
});})(__14881,c__14323__auto___14884,G__14712_14882,n__7454__auto___14880,jobs,results,process,async))
);


break;
case "async":
var c__14323__auto___14893 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__14881,c__14323__auto___14893,G__14712_14882,n__7454__auto___14880,jobs,results,process,async){
return (function (){
var f__14324__auto__ = (function (){var switch__14209__auto__ = ((function (__14881,c__14323__auto___14893,G__14712_14882,n__7454__auto___14880,jobs,results,process,async){
return (function (state_14752){
var state_val_14753 = (state_14752[(1)]);
if((state_val_14753 === (1))){
var state_14752__$1 = state_14752;
var statearr_14754_14894 = state_14752__$1;
(statearr_14754_14894[(2)] = null);

(statearr_14754_14894[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14753 === (2))){
var state_14752__$1 = state_14752;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14752__$1,(4),jobs);
} else {
if((state_val_14753 === (3))){
var inst_14750 = (state_14752[(2)]);
var state_14752__$1 = state_14752;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14752__$1,inst_14750);
} else {
if((state_val_14753 === (4))){
var inst_14742 = (state_14752[(2)]);
var inst_14743 = async(inst_14742);
var state_14752__$1 = state_14752;
if(cljs.core.truth_(inst_14743)){
var statearr_14755_14895 = state_14752__$1;
(statearr_14755_14895[(1)] = (5));

} else {
var statearr_14756_14896 = state_14752__$1;
(statearr_14756_14896[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14753 === (5))){
var state_14752__$1 = state_14752;
var statearr_14757_14897 = state_14752__$1;
(statearr_14757_14897[(2)] = null);

(statearr_14757_14897[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14753 === (6))){
var state_14752__$1 = state_14752;
var statearr_14758_14898 = state_14752__$1;
(statearr_14758_14898[(2)] = null);

(statearr_14758_14898[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14753 === (7))){
var inst_14748 = (state_14752[(2)]);
var state_14752__$1 = state_14752;
var statearr_14759_14899 = state_14752__$1;
(statearr_14759_14899[(2)] = inst_14748);

(statearr_14759_14899[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
});})(__14881,c__14323__auto___14893,G__14712_14882,n__7454__auto___14880,jobs,results,process,async))
;
return ((function (__14881,switch__14209__auto__,c__14323__auto___14893,G__14712_14882,n__7454__auto___14880,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14210__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14210__auto____0 = (function (){
var statearr_14763 = [null,null,null,null,null,null,null];
(statearr_14763[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14210__auto__);

(statearr_14763[(1)] = (1));

return statearr_14763;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14210__auto____1 = (function (state_14752){
while(true){
var ret_value__14211__auto__ = (function (){try{while(true){
var result__14212__auto__ = switch__14209__auto__(state_14752);
if(cljs.core.keyword_identical_QMARK_(result__14212__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14212__auto__;
}
break;
}
}catch (e14764){if((e14764 instanceof Object)){
var ex__14213__auto__ = e14764;
var statearr_14765_14900 = state_14752;
(statearr_14765_14900[(5)] = ex__14213__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_14752);

return cljs.core.cst$kw$recur;
} else {
throw e14764;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14211__auto__,cljs.core.cst$kw$recur)){
var G__14901 = state_14752;
state_14752 = G__14901;
continue;
} else {
return ret_value__14211__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14210__auto__ = function(state_14752){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14210__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14210__auto____1.call(this,state_14752);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14210__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14210__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14210__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14210__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14210__auto__;
})()
;})(__14881,switch__14209__auto__,c__14323__auto___14893,G__14712_14882,n__7454__auto___14880,jobs,results,process,async))
})();
var state__14325__auto__ = (function (){var statearr_14766 = (f__14324__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14324__auto__.cljs$core$IFn$_invoke$arity$0() : f__14324__auto__.call(null));
(statearr_14766[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14323__auto___14893);

return statearr_14766;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14325__auto__);
});})(__14881,c__14323__auto___14893,G__14712_14882,n__7454__auto___14880,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__14902 = (__14881 + (1));
__14881 = G__14902;
continue;
} else {
}
break;
}

var c__14323__auto___14903 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14323__auto___14903,jobs,results,process,async){
return (function (){
var f__14324__auto__ = (function (){var switch__14209__auto__ = ((function (c__14323__auto___14903,jobs,results,process,async){
return (function (state_14788){
var state_val_14789 = (state_14788[(1)]);
if((state_val_14789 === (1))){
var state_14788__$1 = state_14788;
var statearr_14790_14904 = state_14788__$1;
(statearr_14790_14904[(2)] = null);

(statearr_14790_14904[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14789 === (2))){
var state_14788__$1 = state_14788;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14788__$1,(4),from);
} else {
if((state_val_14789 === (3))){
var inst_14786 = (state_14788[(2)]);
var state_14788__$1 = state_14788;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14788__$1,inst_14786);
} else {
if((state_val_14789 === (4))){
var inst_14769 = (state_14788[(7)]);
var inst_14769__$1 = (state_14788[(2)]);
var inst_14770 = (inst_14769__$1 == null);
var state_14788__$1 = (function (){var statearr_14791 = state_14788;
(statearr_14791[(7)] = inst_14769__$1);

return statearr_14791;
})();
if(cljs.core.truth_(inst_14770)){
var statearr_14792_14905 = state_14788__$1;
(statearr_14792_14905[(1)] = (5));

} else {
var statearr_14793_14906 = state_14788__$1;
(statearr_14793_14906[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14789 === (5))){
var inst_14772 = cljs.core.async.close_BANG_(jobs);
var state_14788__$1 = state_14788;
var statearr_14794_14907 = state_14788__$1;
(statearr_14794_14907[(2)] = inst_14772);

(statearr_14794_14907[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14789 === (6))){
var inst_14769 = (state_14788[(7)]);
var inst_14774 = (state_14788[(8)]);
var inst_14774__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_14775 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_14776 = [inst_14769,inst_14774__$1];
var inst_14777 = (new cljs.core.PersistentVector(null,2,(5),inst_14775,inst_14776,null));
var state_14788__$1 = (function (){var statearr_14795 = state_14788;
(statearr_14795[(8)] = inst_14774__$1);

return statearr_14795;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14788__$1,(8),jobs,inst_14777);
} else {
if((state_val_14789 === (7))){
var inst_14784 = (state_14788[(2)]);
var state_14788__$1 = state_14788;
var statearr_14796_14908 = state_14788__$1;
(statearr_14796_14908[(2)] = inst_14784);

(statearr_14796_14908[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14789 === (8))){
var inst_14774 = (state_14788[(8)]);
var inst_14779 = (state_14788[(2)]);
var state_14788__$1 = (function (){var statearr_14797 = state_14788;
(statearr_14797[(9)] = inst_14779);

return statearr_14797;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14788__$1,(9),results,inst_14774);
} else {
if((state_val_14789 === (9))){
var inst_14781 = (state_14788[(2)]);
var state_14788__$1 = (function (){var statearr_14798 = state_14788;
(statearr_14798[(10)] = inst_14781);

return statearr_14798;
})();
var statearr_14799_14909 = state_14788__$1;
(statearr_14799_14909[(2)] = null);

(statearr_14799_14909[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__14323__auto___14903,jobs,results,process,async))
;
return ((function (switch__14209__auto__,c__14323__auto___14903,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14210__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14210__auto____0 = (function (){
var statearr_14803 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_14803[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14210__auto__);

(statearr_14803[(1)] = (1));

return statearr_14803;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14210__auto____1 = (function (state_14788){
while(true){
var ret_value__14211__auto__ = (function (){try{while(true){
var result__14212__auto__ = switch__14209__auto__(state_14788);
if(cljs.core.keyword_identical_QMARK_(result__14212__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14212__auto__;
}
break;
}
}catch (e14804){if((e14804 instanceof Object)){
var ex__14213__auto__ = e14804;
var statearr_14805_14910 = state_14788;
(statearr_14805_14910[(5)] = ex__14213__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_14788);

return cljs.core.cst$kw$recur;
} else {
throw e14804;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14211__auto__,cljs.core.cst$kw$recur)){
var G__14911 = state_14788;
state_14788 = G__14911;
continue;
} else {
return ret_value__14211__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14210__auto__ = function(state_14788){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14210__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14210__auto____1.call(this,state_14788);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14210__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14210__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14210__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14210__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14210__auto__;
})()
;})(switch__14209__auto__,c__14323__auto___14903,jobs,results,process,async))
})();
var state__14325__auto__ = (function (){var statearr_14806 = (f__14324__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14324__auto__.cljs$core$IFn$_invoke$arity$0() : f__14324__auto__.call(null));
(statearr_14806[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14323__auto___14903);

return statearr_14806;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14325__auto__);
});})(c__14323__auto___14903,jobs,results,process,async))
);


var c__14323__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14323__auto__,jobs,results,process,async){
return (function (){
var f__14324__auto__ = (function (){var switch__14209__auto__ = ((function (c__14323__auto__,jobs,results,process,async){
return (function (state_14844){
var state_val_14845 = (state_14844[(1)]);
if((state_val_14845 === (7))){
var inst_14840 = (state_14844[(2)]);
var state_14844__$1 = state_14844;
var statearr_14846_14912 = state_14844__$1;
(statearr_14846_14912[(2)] = inst_14840);

(statearr_14846_14912[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14845 === (20))){
var state_14844__$1 = state_14844;
var statearr_14847_14913 = state_14844__$1;
(statearr_14847_14913[(2)] = null);

(statearr_14847_14913[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14845 === (1))){
var state_14844__$1 = state_14844;
var statearr_14848_14914 = state_14844__$1;
(statearr_14848_14914[(2)] = null);

(statearr_14848_14914[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14845 === (4))){
var inst_14809 = (state_14844[(7)]);
var inst_14809__$1 = (state_14844[(2)]);
var inst_14810 = (inst_14809__$1 == null);
var state_14844__$1 = (function (){var statearr_14849 = state_14844;
(statearr_14849[(7)] = inst_14809__$1);

return statearr_14849;
})();
if(cljs.core.truth_(inst_14810)){
var statearr_14850_14915 = state_14844__$1;
(statearr_14850_14915[(1)] = (5));

} else {
var statearr_14851_14916 = state_14844__$1;
(statearr_14851_14916[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14845 === (15))){
var inst_14822 = (state_14844[(8)]);
var state_14844__$1 = state_14844;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14844__$1,(18),to,inst_14822);
} else {
if((state_val_14845 === (21))){
var inst_14835 = (state_14844[(2)]);
var state_14844__$1 = state_14844;
var statearr_14852_14917 = state_14844__$1;
(statearr_14852_14917[(2)] = inst_14835);

(statearr_14852_14917[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14845 === (13))){
var inst_14837 = (state_14844[(2)]);
var state_14844__$1 = (function (){var statearr_14853 = state_14844;
(statearr_14853[(9)] = inst_14837);

return statearr_14853;
})();
var statearr_14854_14918 = state_14844__$1;
(statearr_14854_14918[(2)] = null);

(statearr_14854_14918[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14845 === (6))){
var inst_14809 = (state_14844[(7)]);
var state_14844__$1 = state_14844;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14844__$1,(11),inst_14809);
} else {
if((state_val_14845 === (17))){
var inst_14830 = (state_14844[(2)]);
var state_14844__$1 = state_14844;
if(cljs.core.truth_(inst_14830)){
var statearr_14855_14919 = state_14844__$1;
(statearr_14855_14919[(1)] = (19));

} else {
var statearr_14856_14920 = state_14844__$1;
(statearr_14856_14920[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14845 === (3))){
var inst_14842 = (state_14844[(2)]);
var state_14844__$1 = state_14844;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14844__$1,inst_14842);
} else {
if((state_val_14845 === (12))){
var inst_14819 = (state_14844[(10)]);
var state_14844__$1 = state_14844;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14844__$1,(14),inst_14819);
} else {
if((state_val_14845 === (2))){
var state_14844__$1 = state_14844;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14844__$1,(4),results);
} else {
if((state_val_14845 === (19))){
var state_14844__$1 = state_14844;
var statearr_14857_14921 = state_14844__$1;
(statearr_14857_14921[(2)] = null);

(statearr_14857_14921[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14845 === (11))){
var inst_14819 = (state_14844[(2)]);
var state_14844__$1 = (function (){var statearr_14858 = state_14844;
(statearr_14858[(10)] = inst_14819);

return statearr_14858;
})();
var statearr_14859_14922 = state_14844__$1;
(statearr_14859_14922[(2)] = null);

(statearr_14859_14922[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14845 === (9))){
var state_14844__$1 = state_14844;
var statearr_14860_14923 = state_14844__$1;
(statearr_14860_14923[(2)] = null);

(statearr_14860_14923[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14845 === (5))){
var state_14844__$1 = state_14844;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14861_14924 = state_14844__$1;
(statearr_14861_14924[(1)] = (8));

} else {
var statearr_14862_14925 = state_14844__$1;
(statearr_14862_14925[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14845 === (14))){
var inst_14824 = (state_14844[(11)]);
var inst_14822 = (state_14844[(8)]);
var inst_14822__$1 = (state_14844[(2)]);
var inst_14823 = (inst_14822__$1 == null);
var inst_14824__$1 = cljs.core.not(inst_14823);
var state_14844__$1 = (function (){var statearr_14863 = state_14844;
(statearr_14863[(11)] = inst_14824__$1);

(statearr_14863[(8)] = inst_14822__$1);

return statearr_14863;
})();
if(inst_14824__$1){
var statearr_14864_14926 = state_14844__$1;
(statearr_14864_14926[(1)] = (15));

} else {
var statearr_14865_14927 = state_14844__$1;
(statearr_14865_14927[(1)] = (16));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14845 === (16))){
var inst_14824 = (state_14844[(11)]);
var state_14844__$1 = state_14844;
var statearr_14866_14928 = state_14844__$1;
(statearr_14866_14928[(2)] = inst_14824);

(statearr_14866_14928[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14845 === (10))){
var inst_14816 = (state_14844[(2)]);
var state_14844__$1 = state_14844;
var statearr_14867_14929 = state_14844__$1;
(statearr_14867_14929[(2)] = inst_14816);

(statearr_14867_14929[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14845 === (18))){
var inst_14827 = (state_14844[(2)]);
var state_14844__$1 = state_14844;
var statearr_14868_14930 = state_14844__$1;
(statearr_14868_14930[(2)] = inst_14827);

(statearr_14868_14930[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14845 === (8))){
var inst_14813 = cljs.core.async.close_BANG_(to);
var state_14844__$1 = state_14844;
var statearr_14869_14931 = state_14844__$1;
(statearr_14869_14931[(2)] = inst_14813);

(statearr_14869_14931[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__14323__auto__,jobs,results,process,async))
;
return ((function (switch__14209__auto__,c__14323__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14210__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14210__auto____0 = (function (){
var statearr_14873 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14873[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14210__auto__);

(statearr_14873[(1)] = (1));

return statearr_14873;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14210__auto____1 = (function (state_14844){
while(true){
var ret_value__14211__auto__ = (function (){try{while(true){
var result__14212__auto__ = switch__14209__auto__(state_14844);
if(cljs.core.keyword_identical_QMARK_(result__14212__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14212__auto__;
}
break;
}
}catch (e14874){if((e14874 instanceof Object)){
var ex__14213__auto__ = e14874;
var statearr_14875_14932 = state_14844;
(statearr_14875_14932[(5)] = ex__14213__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_14844);

return cljs.core.cst$kw$recur;
} else {
throw e14874;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14211__auto__,cljs.core.cst$kw$recur)){
var G__14933 = state_14844;
state_14844 = G__14933;
continue;
} else {
return ret_value__14211__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14210__auto__ = function(state_14844){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14210__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14210__auto____1.call(this,state_14844);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14210__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14210__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14210__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14210__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14210__auto__;
})()
;})(switch__14209__auto__,c__14323__auto__,jobs,results,process,async))
})();
var state__14325__auto__ = (function (){var statearr_14876 = (f__14324__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14324__auto__.cljs$core$IFn$_invoke$arity$0() : f__14324__auto__.call(null));
(statearr_14876[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14323__auto__);

return statearr_14876;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14325__auto__);
});})(c__14323__auto__,jobs,results,process,async))
);

return c__14323__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args14934 = [];
var len__7609__auto___14937 = arguments.length;
var i__7610__auto___14938 = (0);
while(true){
if((i__7610__auto___14938 < len__7609__auto___14937)){
args14934.push((arguments[i__7610__auto___14938]));

var G__14939 = (i__7610__auto___14938 + (1));
i__7610__auto___14938 = G__14939;
continue;
} else {
}
break;
}

var G__14936 = args14934.length;
switch (G__14936) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14934.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,cljs.core.cst$kw$async);
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args14941 = [];
var len__7609__auto___14944 = arguments.length;
var i__7610__auto___14945 = (0);
while(true){
if((i__7610__auto___14945 < len__7609__auto___14944)){
args14941.push((arguments[i__7610__auto___14945]));

var G__14946 = (i__7610__auto___14945 + (1));
i__7610__auto___14945 = G__14946;
continue;
} else {
}
break;
}

var G__14943 = args14941.length;
switch (G__14943) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14941.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,cljs.core.cst$kw$compute);
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args14948 = [];
var len__7609__auto___15001 = arguments.length;
var i__7610__auto___15002 = (0);
while(true){
if((i__7610__auto___15002 < len__7609__auto___15001)){
args14948.push((arguments[i__7610__auto___15002]));

var G__15003 = (i__7610__auto___15002 + (1));
i__7610__auto___15002 = G__15003;
continue;
} else {
}
break;
}

var G__14950 = args14948.length;
switch (G__14950) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14948.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__14323__auto___15005 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14323__auto___15005,tc,fc){
return (function (){
var f__14324__auto__ = (function (){var switch__14209__auto__ = ((function (c__14323__auto___15005,tc,fc){
return (function (state_14976){
var state_val_14977 = (state_14976[(1)]);
if((state_val_14977 === (7))){
var inst_14972 = (state_14976[(2)]);
var state_14976__$1 = state_14976;
var statearr_14978_15006 = state_14976__$1;
(statearr_14978_15006[(2)] = inst_14972);

(statearr_14978_15006[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14977 === (1))){
var state_14976__$1 = state_14976;
var statearr_14979_15007 = state_14976__$1;
(statearr_14979_15007[(2)] = null);

(statearr_14979_15007[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14977 === (4))){
var inst_14953 = (state_14976[(7)]);
var inst_14953__$1 = (state_14976[(2)]);
var inst_14954 = (inst_14953__$1 == null);
var state_14976__$1 = (function (){var statearr_14980 = state_14976;
(statearr_14980[(7)] = inst_14953__$1);

return statearr_14980;
})();
if(cljs.core.truth_(inst_14954)){
var statearr_14981_15008 = state_14976__$1;
(statearr_14981_15008[(1)] = (5));

} else {
var statearr_14982_15009 = state_14976__$1;
(statearr_14982_15009[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14977 === (13))){
var state_14976__$1 = state_14976;
var statearr_14983_15010 = state_14976__$1;
(statearr_14983_15010[(2)] = null);

(statearr_14983_15010[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14977 === (6))){
var inst_14953 = (state_14976[(7)]);
var inst_14959 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_14953) : p.call(null,inst_14953));
var state_14976__$1 = state_14976;
if(cljs.core.truth_(inst_14959)){
var statearr_14984_15011 = state_14976__$1;
(statearr_14984_15011[(1)] = (9));

} else {
var statearr_14985_15012 = state_14976__$1;
(statearr_14985_15012[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14977 === (3))){
var inst_14974 = (state_14976[(2)]);
var state_14976__$1 = state_14976;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14976__$1,inst_14974);
} else {
if((state_val_14977 === (12))){
var state_14976__$1 = state_14976;
var statearr_14986_15013 = state_14976__$1;
(statearr_14986_15013[(2)] = null);

(statearr_14986_15013[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14977 === (2))){
var state_14976__$1 = state_14976;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14976__$1,(4),ch);
} else {
if((state_val_14977 === (11))){
var inst_14953 = (state_14976[(7)]);
var inst_14963 = (state_14976[(2)]);
var state_14976__$1 = state_14976;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14976__$1,(8),inst_14963,inst_14953);
} else {
if((state_val_14977 === (9))){
var state_14976__$1 = state_14976;
var statearr_14987_15014 = state_14976__$1;
(statearr_14987_15014[(2)] = tc);

(statearr_14987_15014[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14977 === (5))){
var inst_14956 = cljs.core.async.close_BANG_(tc);
var inst_14957 = cljs.core.async.close_BANG_(fc);
var state_14976__$1 = (function (){var statearr_14988 = state_14976;
(statearr_14988[(8)] = inst_14956);

return statearr_14988;
})();
var statearr_14989_15015 = state_14976__$1;
(statearr_14989_15015[(2)] = inst_14957);

(statearr_14989_15015[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14977 === (14))){
var inst_14970 = (state_14976[(2)]);
var state_14976__$1 = state_14976;
var statearr_14990_15016 = state_14976__$1;
(statearr_14990_15016[(2)] = inst_14970);

(statearr_14990_15016[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14977 === (10))){
var state_14976__$1 = state_14976;
var statearr_14991_15017 = state_14976__$1;
(statearr_14991_15017[(2)] = fc);

(statearr_14991_15017[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14977 === (8))){
var inst_14965 = (state_14976[(2)]);
var state_14976__$1 = state_14976;
if(cljs.core.truth_(inst_14965)){
var statearr_14992_15018 = state_14976__$1;
(statearr_14992_15018[(1)] = (12));

} else {
var statearr_14993_15019 = state_14976__$1;
(statearr_14993_15019[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__14323__auto___15005,tc,fc))
;
return ((function (switch__14209__auto__,c__14323__auto___15005,tc,fc){
return (function() {
var cljs$core$async$state_machine__14210__auto__ = null;
var cljs$core$async$state_machine__14210__auto____0 = (function (){
var statearr_14997 = [null,null,null,null,null,null,null,null,null];
(statearr_14997[(0)] = cljs$core$async$state_machine__14210__auto__);

(statearr_14997[(1)] = (1));

return statearr_14997;
});
var cljs$core$async$state_machine__14210__auto____1 = (function (state_14976){
while(true){
var ret_value__14211__auto__ = (function (){try{while(true){
var result__14212__auto__ = switch__14209__auto__(state_14976);
if(cljs.core.keyword_identical_QMARK_(result__14212__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14212__auto__;
}
break;
}
}catch (e14998){if((e14998 instanceof Object)){
var ex__14213__auto__ = e14998;
var statearr_14999_15020 = state_14976;
(statearr_14999_15020[(5)] = ex__14213__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_14976);

return cljs.core.cst$kw$recur;
} else {
throw e14998;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14211__auto__,cljs.core.cst$kw$recur)){
var G__15021 = state_14976;
state_14976 = G__15021;
continue;
} else {
return ret_value__14211__auto__;
}
break;
}
});
cljs$core$async$state_machine__14210__auto__ = function(state_14976){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14210__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14210__auto____1.call(this,state_14976);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14210__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14210__auto____0;
cljs$core$async$state_machine__14210__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14210__auto____1;
return cljs$core$async$state_machine__14210__auto__;
})()
;})(switch__14209__auto__,c__14323__auto___15005,tc,fc))
})();
var state__14325__auto__ = (function (){var statearr_15000 = (f__14324__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14324__auto__.cljs$core$IFn$_invoke$arity$0() : f__14324__auto__.call(null));
(statearr_15000[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14323__auto___15005);

return statearr_15000;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14325__auto__);
});})(c__14323__auto___15005,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__14323__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14323__auto__){
return (function (){
var f__14324__auto__ = (function (){var switch__14209__auto__ = ((function (c__14323__auto__){
return (function (state_15085){
var state_val_15086 = (state_15085[(1)]);
if((state_val_15086 === (7))){
var inst_15081 = (state_15085[(2)]);
var state_15085__$1 = state_15085;
var statearr_15087_15108 = state_15085__$1;
(statearr_15087_15108[(2)] = inst_15081);

(statearr_15087_15108[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15086 === (1))){
var inst_15065 = init;
var state_15085__$1 = (function (){var statearr_15088 = state_15085;
(statearr_15088[(7)] = inst_15065);

return statearr_15088;
})();
var statearr_15089_15109 = state_15085__$1;
(statearr_15089_15109[(2)] = null);

(statearr_15089_15109[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15086 === (4))){
var inst_15068 = (state_15085[(8)]);
var inst_15068__$1 = (state_15085[(2)]);
var inst_15069 = (inst_15068__$1 == null);
var state_15085__$1 = (function (){var statearr_15090 = state_15085;
(statearr_15090[(8)] = inst_15068__$1);

return statearr_15090;
})();
if(cljs.core.truth_(inst_15069)){
var statearr_15091_15110 = state_15085__$1;
(statearr_15091_15110[(1)] = (5));

} else {
var statearr_15092_15111 = state_15085__$1;
(statearr_15092_15111[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15086 === (6))){
var inst_15072 = (state_15085[(9)]);
var inst_15068 = (state_15085[(8)]);
var inst_15065 = (state_15085[(7)]);
var inst_15072__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_15065,inst_15068) : f.call(null,inst_15065,inst_15068));
var inst_15073 = cljs.core.reduced_QMARK_(inst_15072__$1);
var state_15085__$1 = (function (){var statearr_15093 = state_15085;
(statearr_15093[(9)] = inst_15072__$1);

return statearr_15093;
})();
if(inst_15073){
var statearr_15094_15112 = state_15085__$1;
(statearr_15094_15112[(1)] = (8));

} else {
var statearr_15095_15113 = state_15085__$1;
(statearr_15095_15113[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15086 === (3))){
var inst_15083 = (state_15085[(2)]);
var state_15085__$1 = state_15085;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15085__$1,inst_15083);
} else {
if((state_val_15086 === (2))){
var state_15085__$1 = state_15085;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15085__$1,(4),ch);
} else {
if((state_val_15086 === (9))){
var inst_15072 = (state_15085[(9)]);
var inst_15065 = inst_15072;
var state_15085__$1 = (function (){var statearr_15096 = state_15085;
(statearr_15096[(7)] = inst_15065);

return statearr_15096;
})();
var statearr_15097_15114 = state_15085__$1;
(statearr_15097_15114[(2)] = null);

(statearr_15097_15114[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15086 === (5))){
var inst_15065 = (state_15085[(7)]);
var state_15085__$1 = state_15085;
var statearr_15098_15115 = state_15085__$1;
(statearr_15098_15115[(2)] = inst_15065);

(statearr_15098_15115[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15086 === (10))){
var inst_15079 = (state_15085[(2)]);
var state_15085__$1 = state_15085;
var statearr_15099_15116 = state_15085__$1;
(statearr_15099_15116[(2)] = inst_15079);

(statearr_15099_15116[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15086 === (8))){
var inst_15072 = (state_15085[(9)]);
var inst_15075 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(inst_15072) : cljs.core.deref.call(null,inst_15072));
var state_15085__$1 = state_15085;
var statearr_15100_15117 = state_15085__$1;
(statearr_15100_15117[(2)] = inst_15075);

(statearr_15100_15117[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__14323__auto__))
;
return ((function (switch__14209__auto__,c__14323__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__14210__auto__ = null;
var cljs$core$async$reduce_$_state_machine__14210__auto____0 = (function (){
var statearr_15104 = [null,null,null,null,null,null,null,null,null,null];
(statearr_15104[(0)] = cljs$core$async$reduce_$_state_machine__14210__auto__);

(statearr_15104[(1)] = (1));

return statearr_15104;
});
var cljs$core$async$reduce_$_state_machine__14210__auto____1 = (function (state_15085){
while(true){
var ret_value__14211__auto__ = (function (){try{while(true){
var result__14212__auto__ = switch__14209__auto__(state_15085);
if(cljs.core.keyword_identical_QMARK_(result__14212__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14212__auto__;
}
break;
}
}catch (e15105){if((e15105 instanceof Object)){
var ex__14213__auto__ = e15105;
var statearr_15106_15118 = state_15085;
(statearr_15106_15118[(5)] = ex__14213__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15085);

return cljs.core.cst$kw$recur;
} else {
throw e15105;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14211__auto__,cljs.core.cst$kw$recur)){
var G__15119 = state_15085;
state_15085 = G__15119;
continue;
} else {
return ret_value__14211__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__14210__auto__ = function(state_15085){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__14210__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__14210__auto____1.call(this,state_15085);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__14210__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__14210__auto____0;
cljs$core$async$reduce_$_state_machine__14210__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__14210__auto____1;
return cljs$core$async$reduce_$_state_machine__14210__auto__;
})()
;})(switch__14209__auto__,c__14323__auto__))
})();
var state__14325__auto__ = (function (){var statearr_15107 = (f__14324__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14324__auto__.cljs$core$IFn$_invoke$arity$0() : f__14324__auto__.call(null));
(statearr_15107[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14323__auto__);

return statearr_15107;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14325__auto__);
});})(c__14323__auto__))
);

return c__14323__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args15120 = [];
var len__7609__auto___15172 = arguments.length;
var i__7610__auto___15173 = (0);
while(true){
if((i__7610__auto___15173 < len__7609__auto___15172)){
args15120.push((arguments[i__7610__auto___15173]));

var G__15174 = (i__7610__auto___15173 + (1));
i__7610__auto___15173 = G__15174;
continue;
} else {
}
break;
}

var G__15122 = args15120.length;
switch (G__15122) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15120.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__14323__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14323__auto__){
return (function (){
var f__14324__auto__ = (function (){var switch__14209__auto__ = ((function (c__14323__auto__){
return (function (state_15147){
var state_val_15148 = (state_15147[(1)]);
if((state_val_15148 === (7))){
var inst_15129 = (state_15147[(2)]);
var state_15147__$1 = state_15147;
var statearr_15149_15176 = state_15147__$1;
(statearr_15149_15176[(2)] = inst_15129);

(statearr_15149_15176[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15148 === (1))){
var inst_15123 = cljs.core.seq(coll);
var inst_15124 = inst_15123;
var state_15147__$1 = (function (){var statearr_15150 = state_15147;
(statearr_15150[(7)] = inst_15124);

return statearr_15150;
})();
var statearr_15151_15177 = state_15147__$1;
(statearr_15151_15177[(2)] = null);

(statearr_15151_15177[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15148 === (4))){
var inst_15124 = (state_15147[(7)]);
var inst_15127 = cljs.core.first(inst_15124);
var state_15147__$1 = state_15147;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15147__$1,(7),ch,inst_15127);
} else {
if((state_val_15148 === (13))){
var inst_15141 = (state_15147[(2)]);
var state_15147__$1 = state_15147;
var statearr_15152_15178 = state_15147__$1;
(statearr_15152_15178[(2)] = inst_15141);

(statearr_15152_15178[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15148 === (6))){
var inst_15132 = (state_15147[(2)]);
var state_15147__$1 = state_15147;
if(cljs.core.truth_(inst_15132)){
var statearr_15153_15179 = state_15147__$1;
(statearr_15153_15179[(1)] = (8));

} else {
var statearr_15154_15180 = state_15147__$1;
(statearr_15154_15180[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15148 === (3))){
var inst_15145 = (state_15147[(2)]);
var state_15147__$1 = state_15147;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15147__$1,inst_15145);
} else {
if((state_val_15148 === (12))){
var state_15147__$1 = state_15147;
var statearr_15155_15181 = state_15147__$1;
(statearr_15155_15181[(2)] = null);

(statearr_15155_15181[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15148 === (2))){
var inst_15124 = (state_15147[(7)]);
var state_15147__$1 = state_15147;
if(cljs.core.truth_(inst_15124)){
var statearr_15156_15182 = state_15147__$1;
(statearr_15156_15182[(1)] = (4));

} else {
var statearr_15157_15183 = state_15147__$1;
(statearr_15157_15183[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15148 === (11))){
var inst_15138 = cljs.core.async.close_BANG_(ch);
var state_15147__$1 = state_15147;
var statearr_15158_15184 = state_15147__$1;
(statearr_15158_15184[(2)] = inst_15138);

(statearr_15158_15184[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15148 === (9))){
var state_15147__$1 = state_15147;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15159_15185 = state_15147__$1;
(statearr_15159_15185[(1)] = (11));

} else {
var statearr_15160_15186 = state_15147__$1;
(statearr_15160_15186[(1)] = (12));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15148 === (5))){
var inst_15124 = (state_15147[(7)]);
var state_15147__$1 = state_15147;
var statearr_15161_15187 = state_15147__$1;
(statearr_15161_15187[(2)] = inst_15124);

(statearr_15161_15187[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15148 === (10))){
var inst_15143 = (state_15147[(2)]);
var state_15147__$1 = state_15147;
var statearr_15162_15188 = state_15147__$1;
(statearr_15162_15188[(2)] = inst_15143);

(statearr_15162_15188[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15148 === (8))){
var inst_15124 = (state_15147[(7)]);
var inst_15134 = cljs.core.next(inst_15124);
var inst_15124__$1 = inst_15134;
var state_15147__$1 = (function (){var statearr_15163 = state_15147;
(statearr_15163[(7)] = inst_15124__$1);

return statearr_15163;
})();
var statearr_15164_15189 = state_15147__$1;
(statearr_15164_15189[(2)] = null);

(statearr_15164_15189[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__14323__auto__))
;
return ((function (switch__14209__auto__,c__14323__auto__){
return (function() {
var cljs$core$async$state_machine__14210__auto__ = null;
var cljs$core$async$state_machine__14210__auto____0 = (function (){
var statearr_15168 = [null,null,null,null,null,null,null,null];
(statearr_15168[(0)] = cljs$core$async$state_machine__14210__auto__);

(statearr_15168[(1)] = (1));

return statearr_15168;
});
var cljs$core$async$state_machine__14210__auto____1 = (function (state_15147){
while(true){
var ret_value__14211__auto__ = (function (){try{while(true){
var result__14212__auto__ = switch__14209__auto__(state_15147);
if(cljs.core.keyword_identical_QMARK_(result__14212__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14212__auto__;
}
break;
}
}catch (e15169){if((e15169 instanceof Object)){
var ex__14213__auto__ = e15169;
var statearr_15170_15190 = state_15147;
(statearr_15170_15190[(5)] = ex__14213__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15147);

return cljs.core.cst$kw$recur;
} else {
throw e15169;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14211__auto__,cljs.core.cst$kw$recur)){
var G__15191 = state_15147;
state_15147 = G__15191;
continue;
} else {
return ret_value__14211__auto__;
}
break;
}
});
cljs$core$async$state_machine__14210__auto__ = function(state_15147){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14210__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14210__auto____1.call(this,state_15147);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14210__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14210__auto____0;
cljs$core$async$state_machine__14210__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14210__auto____1;
return cljs$core$async$state_machine__14210__auto__;
})()
;})(switch__14209__auto__,c__14323__auto__))
})();
var state__14325__auto__ = (function (){var statearr_15171 = (f__14324__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14324__auto__.cljs$core$IFn$_invoke$arity$0() : f__14324__auto__.call(null));
(statearr_15171[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14323__auto__);

return statearr_15171;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14325__auto__);
});})(c__14323__auto__))
);

return c__14323__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__7203__auto__ = (((_ == null))?null:_);
var m__7204__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__7203__auto__)]);
if(!((m__7204__auto__ == null))){
return (m__7204__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7204__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__7204__auto__.call(null,_));
} else {
var m__7204__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__7204__auto____$1 == null))){
return (m__7204__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7204__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__7204__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__7203__auto__ = (((m == null))?null:m);
var m__7204__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__7203__auto__)]);
if(!((m__7204__auto__ == null))){
return (m__7204__auto__.cljs$core$IFn$_invoke$arity$3 ? m__7204__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__7204__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__7204__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__7204__auto____$1 == null))){
return (m__7204__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__7204__auto____$1.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__7204__auto____$1.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__7203__auto__ = (((m == null))?null:m);
var m__7204__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__7203__auto__)]);
if(!((m__7204__auto__ == null))){
return (m__7204__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7204__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__7204__auto__.call(null,m,ch));
} else {
var m__7204__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__7204__auto____$1 == null))){
return (m__7204__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7204__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__7204__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__7203__auto__ = (((m == null))?null:m);
var m__7204__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__7203__auto__)]);
if(!((m__7204__auto__ == null))){
return (m__7204__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7204__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__7204__auto__.call(null,m));
} else {
var m__7204__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__7204__auto____$1 == null))){
return (m__7204__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7204__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__7204__auto____$1.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = (function (){var G__15416 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__15416) : cljs.core.atom.call(null,G__15416));
})();
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async15417 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15417 = (function (mult,ch,cs,meta15418){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta15418 = meta15418;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async15417.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_15419,meta15418__$1){
var self__ = this;
var _15419__$1 = this;
return (new cljs.core.async.t_cljs$core$async15417(self__.mult,self__.ch,self__.cs,meta15418__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async15417.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_15419){
var self__ = this;
var _15419__$1 = this;
return self__.meta15418;
});})(cs))
;

cljs.core.async.t_cljs$core$async15417.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async15417.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async15417.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async15417.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async15417.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async15417.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__15420_15640 = self__.cs;
var G__15421_15641 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__15420_15640,G__15421_15641) : cljs.core.reset_BANG_.call(null,G__15420_15640,G__15421_15641));

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async15417.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$mult,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),cljs.core.cst$sym$ch,cljs.core.cst$sym$cs,cljs.core.cst$sym$meta15418], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async15417.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15417.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15417";

cljs.core.async.t_cljs$core$async15417.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__7146__auto__,writer__7147__auto__,opt__7148__auto__){
return cljs.core._write(writer__7147__auto__,"cljs.core.async/t_cljs$core$async15417");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async15417 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async15417(mult__$1,ch__$1,cs__$1,meta15418){
return (new cljs.core.async.t_cljs$core$async15417(mult__$1,ch__$1,cs__$1,meta15418));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async15417(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__14323__auto___15642 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14323__auto___15642,cs,m,dchan,dctr,done){
return (function (){
var f__14324__auto__ = (function (){var switch__14209__auto__ = ((function (c__14323__auto___15642,cs,m,dchan,dctr,done){
return (function (state_15552){
var state_val_15553 = (state_15552[(1)]);
if((state_val_15553 === (7))){
var inst_15548 = (state_15552[(2)]);
var state_15552__$1 = state_15552;
var statearr_15554_15643 = state_15552__$1;
(statearr_15554_15643[(2)] = inst_15548);

(statearr_15554_15643[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15553 === (20))){
var inst_15453 = (state_15552[(7)]);
var inst_15463 = cljs.core.first(inst_15453);
var inst_15464 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15463,(0),null);
var inst_15465 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15463,(1),null);
var state_15552__$1 = (function (){var statearr_15555 = state_15552;
(statearr_15555[(8)] = inst_15464);

return statearr_15555;
})();
if(cljs.core.truth_(inst_15465)){
var statearr_15556_15644 = state_15552__$1;
(statearr_15556_15644[(1)] = (22));

} else {
var statearr_15557_15645 = state_15552__$1;
(statearr_15557_15645[(1)] = (23));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15553 === (27))){
var inst_15500 = (state_15552[(9)]);
var inst_15495 = (state_15552[(10)]);
var inst_15493 = (state_15552[(11)]);
var inst_15424 = (state_15552[(12)]);
var inst_15500__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_15493,inst_15495);
var inst_15501 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_15500__$1,inst_15424,done);
var state_15552__$1 = (function (){var statearr_15558 = state_15552;
(statearr_15558[(9)] = inst_15500__$1);

return statearr_15558;
})();
if(cljs.core.truth_(inst_15501)){
var statearr_15559_15646 = state_15552__$1;
(statearr_15559_15646[(1)] = (30));

} else {
var statearr_15560_15647 = state_15552__$1;
(statearr_15560_15647[(1)] = (31));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15553 === (1))){
var state_15552__$1 = state_15552;
var statearr_15561_15648 = state_15552__$1;
(statearr_15561_15648[(2)] = null);

(statearr_15561_15648[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15553 === (24))){
var inst_15453 = (state_15552[(7)]);
var inst_15470 = (state_15552[(2)]);
var inst_15471 = cljs.core.next(inst_15453);
var inst_15433 = inst_15471;
var inst_15434 = null;
var inst_15435 = (0);
var inst_15436 = (0);
var state_15552__$1 = (function (){var statearr_15562 = state_15552;
(statearr_15562[(13)] = inst_15470);

(statearr_15562[(14)] = inst_15436);

(statearr_15562[(15)] = inst_15435);

(statearr_15562[(16)] = inst_15433);

(statearr_15562[(17)] = inst_15434);

return statearr_15562;
})();
var statearr_15563_15649 = state_15552__$1;
(statearr_15563_15649[(2)] = null);

(statearr_15563_15649[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15553 === (39))){
var state_15552__$1 = state_15552;
var statearr_15567_15650 = state_15552__$1;
(statearr_15567_15650[(2)] = null);

(statearr_15567_15650[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15553 === (4))){
var inst_15424 = (state_15552[(12)]);
var inst_15424__$1 = (state_15552[(2)]);
var inst_15425 = (inst_15424__$1 == null);
var state_15552__$1 = (function (){var statearr_15568 = state_15552;
(statearr_15568[(12)] = inst_15424__$1);

return statearr_15568;
})();
if(cljs.core.truth_(inst_15425)){
var statearr_15569_15651 = state_15552__$1;
(statearr_15569_15651[(1)] = (5));

} else {
var statearr_15570_15652 = state_15552__$1;
(statearr_15570_15652[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15553 === (15))){
var inst_15436 = (state_15552[(14)]);
var inst_15435 = (state_15552[(15)]);
var inst_15433 = (state_15552[(16)]);
var inst_15434 = (state_15552[(17)]);
var inst_15449 = (state_15552[(2)]);
var inst_15450 = (inst_15436 + (1));
var tmp15564 = inst_15435;
var tmp15565 = inst_15433;
var tmp15566 = inst_15434;
var inst_15433__$1 = tmp15565;
var inst_15434__$1 = tmp15566;
var inst_15435__$1 = tmp15564;
var inst_15436__$1 = inst_15450;
var state_15552__$1 = (function (){var statearr_15571 = state_15552;
(statearr_15571[(18)] = inst_15449);

(statearr_15571[(14)] = inst_15436__$1);

(statearr_15571[(15)] = inst_15435__$1);

(statearr_15571[(16)] = inst_15433__$1);

(statearr_15571[(17)] = inst_15434__$1);

return statearr_15571;
})();
var statearr_15572_15653 = state_15552__$1;
(statearr_15572_15653[(2)] = null);

(statearr_15572_15653[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15553 === (21))){
var inst_15474 = (state_15552[(2)]);
var state_15552__$1 = state_15552;
var statearr_15576_15654 = state_15552__$1;
(statearr_15576_15654[(2)] = inst_15474);

(statearr_15576_15654[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15553 === (31))){
var inst_15500 = (state_15552[(9)]);
var inst_15504 = done(null);
var inst_15505 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_15500);
var state_15552__$1 = (function (){var statearr_15577 = state_15552;
(statearr_15577[(19)] = inst_15504);

return statearr_15577;
})();
var statearr_15578_15655 = state_15552__$1;
(statearr_15578_15655[(2)] = inst_15505);

(statearr_15578_15655[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15553 === (32))){
var inst_15495 = (state_15552[(10)]);
var inst_15493 = (state_15552[(11)]);
var inst_15494 = (state_15552[(20)]);
var inst_15492 = (state_15552[(21)]);
var inst_15507 = (state_15552[(2)]);
var inst_15508 = (inst_15495 + (1));
var tmp15573 = inst_15493;
var tmp15574 = inst_15494;
var tmp15575 = inst_15492;
var inst_15492__$1 = tmp15575;
var inst_15493__$1 = tmp15573;
var inst_15494__$1 = tmp15574;
var inst_15495__$1 = inst_15508;
var state_15552__$1 = (function (){var statearr_15579 = state_15552;
(statearr_15579[(10)] = inst_15495__$1);

(statearr_15579[(11)] = inst_15493__$1);

(statearr_15579[(20)] = inst_15494__$1);

(statearr_15579[(21)] = inst_15492__$1);

(statearr_15579[(22)] = inst_15507);

return statearr_15579;
})();
var statearr_15580_15656 = state_15552__$1;
(statearr_15580_15656[(2)] = null);

(statearr_15580_15656[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15553 === (40))){
var inst_15520 = (state_15552[(23)]);
var inst_15524 = done(null);
var inst_15525 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_15520);
var state_15552__$1 = (function (){var statearr_15581 = state_15552;
(statearr_15581[(24)] = inst_15524);

return statearr_15581;
})();
var statearr_15582_15657 = state_15552__$1;
(statearr_15582_15657[(2)] = inst_15525);

(statearr_15582_15657[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15553 === (33))){
var inst_15511 = (state_15552[(25)]);
var inst_15513 = cljs.core.chunked_seq_QMARK_(inst_15511);
var state_15552__$1 = state_15552;
if(inst_15513){
var statearr_15583_15658 = state_15552__$1;
(statearr_15583_15658[(1)] = (36));

} else {
var statearr_15584_15659 = state_15552__$1;
(statearr_15584_15659[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15553 === (13))){
var inst_15443 = (state_15552[(26)]);
var inst_15446 = cljs.core.async.close_BANG_(inst_15443);
var state_15552__$1 = state_15552;
var statearr_15585_15660 = state_15552__$1;
(statearr_15585_15660[(2)] = inst_15446);

(statearr_15585_15660[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15553 === (22))){
var inst_15464 = (state_15552[(8)]);
var inst_15467 = cljs.core.async.close_BANG_(inst_15464);
var state_15552__$1 = state_15552;
var statearr_15586_15661 = state_15552__$1;
(statearr_15586_15661[(2)] = inst_15467);

(statearr_15586_15661[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15553 === (36))){
var inst_15511 = (state_15552[(25)]);
var inst_15515 = cljs.core.chunk_first(inst_15511);
var inst_15516 = cljs.core.chunk_rest(inst_15511);
var inst_15517 = cljs.core.count(inst_15515);
var inst_15492 = inst_15516;
var inst_15493 = inst_15515;
var inst_15494 = inst_15517;
var inst_15495 = (0);
var state_15552__$1 = (function (){var statearr_15587 = state_15552;
(statearr_15587[(10)] = inst_15495);

(statearr_15587[(11)] = inst_15493);

(statearr_15587[(20)] = inst_15494);

(statearr_15587[(21)] = inst_15492);

return statearr_15587;
})();
var statearr_15588_15662 = state_15552__$1;
(statearr_15588_15662[(2)] = null);

(statearr_15588_15662[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15553 === (41))){
var inst_15511 = (state_15552[(25)]);
var inst_15527 = (state_15552[(2)]);
var inst_15528 = cljs.core.next(inst_15511);
var inst_15492 = inst_15528;
var inst_15493 = null;
var inst_15494 = (0);
var inst_15495 = (0);
var state_15552__$1 = (function (){var statearr_15589 = state_15552;
(statearr_15589[(27)] = inst_15527);

(statearr_15589[(10)] = inst_15495);

(statearr_15589[(11)] = inst_15493);

(statearr_15589[(20)] = inst_15494);

(statearr_15589[(21)] = inst_15492);

return statearr_15589;
})();
var statearr_15590_15663 = state_15552__$1;
(statearr_15590_15663[(2)] = null);

(statearr_15590_15663[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15553 === (43))){
var state_15552__$1 = state_15552;
var statearr_15591_15664 = state_15552__$1;
(statearr_15591_15664[(2)] = null);

(statearr_15591_15664[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15553 === (29))){
var inst_15536 = (state_15552[(2)]);
var state_15552__$1 = state_15552;
var statearr_15592_15665 = state_15552__$1;
(statearr_15592_15665[(2)] = inst_15536);

(statearr_15592_15665[(1)] = (26));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15553 === (44))){
var inst_15545 = (state_15552[(2)]);
var state_15552__$1 = (function (){var statearr_15593 = state_15552;
(statearr_15593[(28)] = inst_15545);

return statearr_15593;
})();
var statearr_15594_15666 = state_15552__$1;
(statearr_15594_15666[(2)] = null);

(statearr_15594_15666[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15553 === (6))){
var inst_15484 = (state_15552[(29)]);
var inst_15483 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));
var inst_15484__$1 = cljs.core.keys(inst_15483);
var inst_15485 = cljs.core.count(inst_15484__$1);
var inst_15486 = (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,inst_15485) : cljs.core.reset_BANG_.call(null,dctr,inst_15485));
var inst_15491 = cljs.core.seq(inst_15484__$1);
var inst_15492 = inst_15491;
var inst_15493 = null;
var inst_15494 = (0);
var inst_15495 = (0);
var state_15552__$1 = (function (){var statearr_15595 = state_15552;
(statearr_15595[(30)] = inst_15486);

(statearr_15595[(29)] = inst_15484__$1);

(statearr_15595[(10)] = inst_15495);

(statearr_15595[(11)] = inst_15493);

(statearr_15595[(20)] = inst_15494);

(statearr_15595[(21)] = inst_15492);

return statearr_15595;
})();
var statearr_15596_15667 = state_15552__$1;
(statearr_15596_15667[(2)] = null);

(statearr_15596_15667[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15553 === (28))){
var inst_15511 = (state_15552[(25)]);
var inst_15492 = (state_15552[(21)]);
var inst_15511__$1 = cljs.core.seq(inst_15492);
var state_15552__$1 = (function (){var statearr_15597 = state_15552;
(statearr_15597[(25)] = inst_15511__$1);

return statearr_15597;
})();
if(inst_15511__$1){
var statearr_15598_15668 = state_15552__$1;
(statearr_15598_15668[(1)] = (33));

} else {
var statearr_15599_15669 = state_15552__$1;
(statearr_15599_15669[(1)] = (34));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15553 === (25))){
var inst_15495 = (state_15552[(10)]);
var inst_15494 = (state_15552[(20)]);
var inst_15497 = (inst_15495 < inst_15494);
var inst_15498 = inst_15497;
var state_15552__$1 = state_15552;
if(cljs.core.truth_(inst_15498)){
var statearr_15600_15670 = state_15552__$1;
(statearr_15600_15670[(1)] = (27));

} else {
var statearr_15601_15671 = state_15552__$1;
(statearr_15601_15671[(1)] = (28));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15553 === (34))){
var state_15552__$1 = state_15552;
var statearr_15602_15672 = state_15552__$1;
(statearr_15602_15672[(2)] = null);

(statearr_15602_15672[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15553 === (17))){
var state_15552__$1 = state_15552;
var statearr_15603_15673 = state_15552__$1;
(statearr_15603_15673[(2)] = null);

(statearr_15603_15673[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15553 === (3))){
var inst_15550 = (state_15552[(2)]);
var state_15552__$1 = state_15552;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15552__$1,inst_15550);
} else {
if((state_val_15553 === (12))){
var inst_15479 = (state_15552[(2)]);
var state_15552__$1 = state_15552;
var statearr_15604_15674 = state_15552__$1;
(statearr_15604_15674[(2)] = inst_15479);

(statearr_15604_15674[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15553 === (2))){
var state_15552__$1 = state_15552;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15552__$1,(4),ch);
} else {
if((state_val_15553 === (23))){
var state_15552__$1 = state_15552;
var statearr_15605_15675 = state_15552__$1;
(statearr_15605_15675[(2)] = null);

(statearr_15605_15675[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15553 === (35))){
var inst_15534 = (state_15552[(2)]);
var state_15552__$1 = state_15552;
var statearr_15606_15676 = state_15552__$1;
(statearr_15606_15676[(2)] = inst_15534);

(statearr_15606_15676[(1)] = (29));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15553 === (19))){
var inst_15453 = (state_15552[(7)]);
var inst_15457 = cljs.core.chunk_first(inst_15453);
var inst_15458 = cljs.core.chunk_rest(inst_15453);
var inst_15459 = cljs.core.count(inst_15457);
var inst_15433 = inst_15458;
var inst_15434 = inst_15457;
var inst_15435 = inst_15459;
var inst_15436 = (0);
var state_15552__$1 = (function (){var statearr_15607 = state_15552;
(statearr_15607[(14)] = inst_15436);

(statearr_15607[(15)] = inst_15435);

(statearr_15607[(16)] = inst_15433);

(statearr_15607[(17)] = inst_15434);

return statearr_15607;
})();
var statearr_15608_15677 = state_15552__$1;
(statearr_15608_15677[(2)] = null);

(statearr_15608_15677[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15553 === (11))){
var inst_15453 = (state_15552[(7)]);
var inst_15433 = (state_15552[(16)]);
var inst_15453__$1 = cljs.core.seq(inst_15433);
var state_15552__$1 = (function (){var statearr_15609 = state_15552;
(statearr_15609[(7)] = inst_15453__$1);

return statearr_15609;
})();
if(inst_15453__$1){
var statearr_15610_15678 = state_15552__$1;
(statearr_15610_15678[(1)] = (16));

} else {
var statearr_15611_15679 = state_15552__$1;
(statearr_15611_15679[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15553 === (9))){
var inst_15481 = (state_15552[(2)]);
var state_15552__$1 = state_15552;
var statearr_15612_15680 = state_15552__$1;
(statearr_15612_15680[(2)] = inst_15481);

(statearr_15612_15680[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15553 === (5))){
var inst_15431 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));
var inst_15432 = cljs.core.seq(inst_15431);
var inst_15433 = inst_15432;
var inst_15434 = null;
var inst_15435 = (0);
var inst_15436 = (0);
var state_15552__$1 = (function (){var statearr_15613 = state_15552;
(statearr_15613[(14)] = inst_15436);

(statearr_15613[(15)] = inst_15435);

(statearr_15613[(16)] = inst_15433);

(statearr_15613[(17)] = inst_15434);

return statearr_15613;
})();
var statearr_15614_15681 = state_15552__$1;
(statearr_15614_15681[(2)] = null);

(statearr_15614_15681[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15553 === (14))){
var state_15552__$1 = state_15552;
var statearr_15615_15682 = state_15552__$1;
(statearr_15615_15682[(2)] = null);

(statearr_15615_15682[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15553 === (45))){
var inst_15542 = (state_15552[(2)]);
var state_15552__$1 = state_15552;
var statearr_15616_15683 = state_15552__$1;
(statearr_15616_15683[(2)] = inst_15542);

(statearr_15616_15683[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15553 === (26))){
var inst_15484 = (state_15552[(29)]);
var inst_15538 = (state_15552[(2)]);
var inst_15539 = cljs.core.seq(inst_15484);
var state_15552__$1 = (function (){var statearr_15617 = state_15552;
(statearr_15617[(31)] = inst_15538);

return statearr_15617;
})();
if(inst_15539){
var statearr_15618_15684 = state_15552__$1;
(statearr_15618_15684[(1)] = (42));

} else {
var statearr_15619_15685 = state_15552__$1;
(statearr_15619_15685[(1)] = (43));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15553 === (16))){
var inst_15453 = (state_15552[(7)]);
var inst_15455 = cljs.core.chunked_seq_QMARK_(inst_15453);
var state_15552__$1 = state_15552;
if(inst_15455){
var statearr_15620_15686 = state_15552__$1;
(statearr_15620_15686[(1)] = (19));

} else {
var statearr_15621_15687 = state_15552__$1;
(statearr_15621_15687[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15553 === (38))){
var inst_15531 = (state_15552[(2)]);
var state_15552__$1 = state_15552;
var statearr_15622_15688 = state_15552__$1;
(statearr_15622_15688[(2)] = inst_15531);

(statearr_15622_15688[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15553 === (30))){
var state_15552__$1 = state_15552;
var statearr_15623_15689 = state_15552__$1;
(statearr_15623_15689[(2)] = null);

(statearr_15623_15689[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15553 === (10))){
var inst_15436 = (state_15552[(14)]);
var inst_15434 = (state_15552[(17)]);
var inst_15442 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_15434,inst_15436);
var inst_15443 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15442,(0),null);
var inst_15444 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15442,(1),null);
var state_15552__$1 = (function (){var statearr_15624 = state_15552;
(statearr_15624[(26)] = inst_15443);

return statearr_15624;
})();
if(cljs.core.truth_(inst_15444)){
var statearr_15625_15690 = state_15552__$1;
(statearr_15625_15690[(1)] = (13));

} else {
var statearr_15626_15691 = state_15552__$1;
(statearr_15626_15691[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15553 === (18))){
var inst_15477 = (state_15552[(2)]);
var state_15552__$1 = state_15552;
var statearr_15627_15692 = state_15552__$1;
(statearr_15627_15692[(2)] = inst_15477);

(statearr_15627_15692[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15553 === (42))){
var state_15552__$1 = state_15552;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15552__$1,(45),dchan);
} else {
if((state_val_15553 === (37))){
var inst_15511 = (state_15552[(25)]);
var inst_15520 = (state_15552[(23)]);
var inst_15424 = (state_15552[(12)]);
var inst_15520__$1 = cljs.core.first(inst_15511);
var inst_15521 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_15520__$1,inst_15424,done);
var state_15552__$1 = (function (){var statearr_15628 = state_15552;
(statearr_15628[(23)] = inst_15520__$1);

return statearr_15628;
})();
if(cljs.core.truth_(inst_15521)){
var statearr_15629_15693 = state_15552__$1;
(statearr_15629_15693[(1)] = (39));

} else {
var statearr_15630_15694 = state_15552__$1;
(statearr_15630_15694[(1)] = (40));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15553 === (8))){
var inst_15436 = (state_15552[(14)]);
var inst_15435 = (state_15552[(15)]);
var inst_15438 = (inst_15436 < inst_15435);
var inst_15439 = inst_15438;
var state_15552__$1 = state_15552;
if(cljs.core.truth_(inst_15439)){
var statearr_15631_15695 = state_15552__$1;
(statearr_15631_15695[(1)] = (10));

} else {
var statearr_15632_15696 = state_15552__$1;
(statearr_15632_15696[(1)] = (11));

}

return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__14323__auto___15642,cs,m,dchan,dctr,done))
;
return ((function (switch__14209__auto__,c__14323__auto___15642,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__14210__auto__ = null;
var cljs$core$async$mult_$_state_machine__14210__auto____0 = (function (){
var statearr_15636 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15636[(0)] = cljs$core$async$mult_$_state_machine__14210__auto__);

(statearr_15636[(1)] = (1));

return statearr_15636;
});
var cljs$core$async$mult_$_state_machine__14210__auto____1 = (function (state_15552){
while(true){
var ret_value__14211__auto__ = (function (){try{while(true){
var result__14212__auto__ = switch__14209__auto__(state_15552);
if(cljs.core.keyword_identical_QMARK_(result__14212__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14212__auto__;
}
break;
}
}catch (e15637){if((e15637 instanceof Object)){
var ex__14213__auto__ = e15637;
var statearr_15638_15697 = state_15552;
(statearr_15638_15697[(5)] = ex__14213__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15552);

return cljs.core.cst$kw$recur;
} else {
throw e15637;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14211__auto__,cljs.core.cst$kw$recur)){
var G__15698 = state_15552;
state_15552 = G__15698;
continue;
} else {
return ret_value__14211__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__14210__auto__ = function(state_15552){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__14210__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__14210__auto____1.call(this,state_15552);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__14210__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__14210__auto____0;
cljs$core$async$mult_$_state_machine__14210__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__14210__auto____1;
return cljs$core$async$mult_$_state_machine__14210__auto__;
})()
;})(switch__14209__auto__,c__14323__auto___15642,cs,m,dchan,dctr,done))
})();
var state__14325__auto__ = (function (){var statearr_15639 = (f__14324__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14324__auto__.cljs$core$IFn$_invoke$arity$0() : f__14324__auto__.call(null));
(statearr_15639[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14323__auto___15642);

return statearr_15639;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14325__auto__);
});})(c__14323__auto___15642,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args15699 = [];
var len__7609__auto___15702 = arguments.length;
var i__7610__auto___15703 = (0);
while(true){
if((i__7610__auto___15703 < len__7609__auto___15702)){
args15699.push((arguments[i__7610__auto___15703]));

var G__15704 = (i__7610__auto___15703 + (1));
i__7610__auto___15703 = G__15704;
continue;
} else {
}
break;
}

var G__15701 = args15699.length;
switch (G__15701) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15699.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__7203__auto__ = (((m == null))?null:m);
var m__7204__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__7203__auto__)]);
if(!((m__7204__auto__ == null))){
return (m__7204__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7204__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__7204__auto__.call(null,m,ch));
} else {
var m__7204__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__7204__auto____$1 == null))){
return (m__7204__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7204__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__7204__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__7203__auto__ = (((m == null))?null:m);
var m__7204__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__7203__auto__)]);
if(!((m__7204__auto__ == null))){
return (m__7204__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7204__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__7204__auto__.call(null,m,ch));
} else {
var m__7204__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__7204__auto____$1 == null))){
return (m__7204__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7204__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__7204__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__7203__auto__ = (((m == null))?null:m);
var m__7204__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__7203__auto__)]);
if(!((m__7204__auto__ == null))){
return (m__7204__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7204__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__7204__auto__.call(null,m));
} else {
var m__7204__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__7204__auto____$1 == null))){
return (m__7204__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7204__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__7204__auto____$1.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__7203__auto__ = (((m == null))?null:m);
var m__7204__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__7203__auto__)]);
if(!((m__7204__auto__ == null))){
return (m__7204__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7204__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__7204__auto__.call(null,m,state_map));
} else {
var m__7204__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__7204__auto____$1 == null))){
return (m__7204__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7204__auto____$1.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__7204__auto____$1.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__7203__auto__ = (((m == null))?null:m);
var m__7204__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__7203__auto__)]);
if(!((m__7204__auto__ == null))){
return (m__7204__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7204__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__7204__auto__.call(null,m,mode));
} else {
var m__7204__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__7204__auto____$1 == null))){
return (m__7204__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7204__auto____$1.cljs$core$IFn$_invoke$arity$2(m,mode) : m__7204__auto____$1.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__7616__auto__ = [];
var len__7609__auto___15716 = arguments.length;
var i__7610__auto___15717 = (0);
while(true){
if((i__7610__auto___15717 < len__7609__auto___15716)){
args__7616__auto__.push((arguments[i__7610__auto___15717]));

var G__15718 = (i__7610__auto___15717 + (1));
i__7610__auto___15717 = G__15718;
continue;
} else {
}
break;
}

var argseq__7617__auto__ = ((((3) < args__7616__auto__.length))?(new cljs.core.IndexedSeq(args__7616__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7617__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__15710){
var map__15711 = p__15710;
var map__15711__$1 = ((((!((map__15711 == null)))?((((map__15711.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15711.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15711):map__15711);
var opts = map__15711__$1;
var statearr_15713_15719 = state;
(statearr_15713_15719[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts(((function (map__15711,map__15711__$1,opts){
return (function (val){
var statearr_15714_15720 = state;
(statearr_15714_15720[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__15711,map__15711__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_15715_15721 = state;
(statearr_15715_15721[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cb) : cljs.core.deref.call(null,cb)));


return cljs.core.cst$kw$recur;
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq15706){
var G__15707 = cljs.core.first(seq15706);
var seq15706__$1 = cljs.core.next(seq15706);
var G__15708 = cljs.core.first(seq15706__$1);
var seq15706__$2 = cljs.core.next(seq15706__$1);
var G__15709 = cljs.core.first(seq15706__$2);
var seq15706__$3 = cljs.core.next(seq15706__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__15707,G__15708,G__15709,seq15706__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = (function (){var G__15888 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__15888) : cljs.core.atom.call(null,G__15888));
})();
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$pause,null,cljs.core.cst$kw$mute,null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.cst$kw$solo);
var solo_mode = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$mute) : cljs.core.atom.call(null,cljs.core.cst$kw$mute));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));
var mode = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(solo_mode) : cljs.core.deref.call(null,solo_mode));
var solos = pick(cljs.core.cst$kw$solo,chs);
var pauses = pick(cljs.core.cst$kw$pause,chs);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$solos,solos,cljs.core.cst$kw$mutes,pick(cljs.core.cst$kw$mute,chs),cljs.core.cst$kw$reads,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.cst$kw$pause)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async15889 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15889 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta15890){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta15890 = meta15890;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async15889.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_15891,meta15890__$1){
var self__ = this;
var _15891__$1 = this;
return (new cljs.core.async.t_cljs$core$async15889(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta15890__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15889.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_15891){
var self__ = this;
var _15891__$1 = this;
return self__.meta15890;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15889.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async15889.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15889.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async15889.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15889.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15889.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__15892_16054 = self__.cs;
var G__15893_16055 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__15892_16054,G__15893_16055) : cljs.core.reset_BANG_.call(null,G__15892_16054,G__15893_16055));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15889.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15889.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str("(solo-modes mode)")].join('')));
}

(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(self__.solo_mode,mode) : cljs.core.reset_BANG_.call(null,self__.solo_mode,mode));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15889.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$change,cljs.core.with_meta(cljs.core.cst$sym$mix,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$out], null))),cljs.core.cst$kw$doc,"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),cljs.core.cst$sym$solo_DASH_mode,cljs.core.cst$sym$pick,cljs.core.cst$sym$cs,cljs.core.cst$sym$calc_DASH_state,cljs.core.cst$sym$out,cljs.core.cst$sym$changed,cljs.core.cst$sym$solo_DASH_modes,cljs.core.cst$sym$attrs,cljs.core.cst$sym$meta15890], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15889.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15889.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15889";

cljs.core.async.t_cljs$core$async15889.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__7146__auto__,writer__7147__auto__,opt__7148__auto__){
return cljs.core._write(writer__7147__auto__,"cljs.core.async/t_cljs$core$async15889");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async15889 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async15889(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta15890){
return (new cljs.core.async.t_cljs$core$async15889(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta15890));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async15889(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__14323__auto___16056 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14323__auto___16056,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__14324__auto__ = (function (){var switch__14209__auto__ = ((function (c__14323__auto___16056,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_15991){
var state_val_15992 = (state_15991[(1)]);
if((state_val_15992 === (7))){
var inst_15909 = (state_15991[(2)]);
var state_15991__$1 = state_15991;
var statearr_15993_16057 = state_15991__$1;
(statearr_15993_16057[(2)] = inst_15909);

(statearr_15993_16057[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15992 === (20))){
var inst_15921 = (state_15991[(7)]);
var state_15991__$1 = state_15991;
var statearr_15994_16058 = state_15991__$1;
(statearr_15994_16058[(2)] = inst_15921);

(statearr_15994_16058[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15992 === (27))){
var state_15991__$1 = state_15991;
var statearr_15995_16059 = state_15991__$1;
(statearr_15995_16059[(2)] = null);

(statearr_15995_16059[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15992 === (1))){
var inst_15897 = (state_15991[(8)]);
var inst_15897__$1 = calc_state();
var inst_15899 = (inst_15897__$1 == null);
var inst_15900 = cljs.core.not(inst_15899);
var state_15991__$1 = (function (){var statearr_15996 = state_15991;
(statearr_15996[(8)] = inst_15897__$1);

return statearr_15996;
})();
if(inst_15900){
var statearr_15997_16060 = state_15991__$1;
(statearr_15997_16060[(1)] = (2));

} else {
var statearr_15998_16061 = state_15991__$1;
(statearr_15998_16061[(1)] = (3));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15992 === (24))){
var inst_15951 = (state_15991[(9)]);
var inst_15944 = (state_15991[(10)]);
var inst_15965 = (state_15991[(11)]);
var inst_15965__$1 = (inst_15944.cljs$core$IFn$_invoke$arity$1 ? inst_15944.cljs$core$IFn$_invoke$arity$1(inst_15951) : inst_15944.call(null,inst_15951));
var state_15991__$1 = (function (){var statearr_15999 = state_15991;
(statearr_15999[(11)] = inst_15965__$1);

return statearr_15999;
})();
if(cljs.core.truth_(inst_15965__$1)){
var statearr_16000_16062 = state_15991__$1;
(statearr_16000_16062[(1)] = (29));

} else {
var statearr_16001_16063 = state_15991__$1;
(statearr_16001_16063[(1)] = (30));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15992 === (4))){
var inst_15912 = (state_15991[(2)]);
var state_15991__$1 = state_15991;
if(cljs.core.truth_(inst_15912)){
var statearr_16002_16064 = state_15991__$1;
(statearr_16002_16064[(1)] = (8));

} else {
var statearr_16003_16065 = state_15991__$1;
(statearr_16003_16065[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15992 === (15))){
var inst_15938 = (state_15991[(2)]);
var state_15991__$1 = state_15991;
if(cljs.core.truth_(inst_15938)){
var statearr_16004_16066 = state_15991__$1;
(statearr_16004_16066[(1)] = (19));

} else {
var statearr_16005_16067 = state_15991__$1;
(statearr_16005_16067[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15992 === (21))){
var inst_15943 = (state_15991[(12)]);
var inst_15943__$1 = (state_15991[(2)]);
var inst_15944 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15943__$1,cljs.core.cst$kw$solos);
var inst_15945 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15943__$1,cljs.core.cst$kw$mutes);
var inst_15946 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15943__$1,cljs.core.cst$kw$reads);
var state_15991__$1 = (function (){var statearr_16006 = state_15991;
(statearr_16006[(13)] = inst_15945);

(statearr_16006[(10)] = inst_15944);

(statearr_16006[(12)] = inst_15943__$1);

return statearr_16006;
})();
return cljs.core.async.ioc_alts_BANG_(state_15991__$1,(22),inst_15946);
} else {
if((state_val_15992 === (31))){
var inst_15973 = (state_15991[(2)]);
var state_15991__$1 = state_15991;
if(cljs.core.truth_(inst_15973)){
var statearr_16007_16068 = state_15991__$1;
(statearr_16007_16068[(1)] = (32));

} else {
var statearr_16008_16069 = state_15991__$1;
(statearr_16008_16069[(1)] = (33));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15992 === (32))){
var inst_15950 = (state_15991[(14)]);
var state_15991__$1 = state_15991;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15991__$1,(35),out,inst_15950);
} else {
if((state_val_15992 === (33))){
var inst_15943 = (state_15991[(12)]);
var inst_15921 = inst_15943;
var state_15991__$1 = (function (){var statearr_16009 = state_15991;
(statearr_16009[(7)] = inst_15921);

return statearr_16009;
})();
var statearr_16010_16070 = state_15991__$1;
(statearr_16010_16070[(2)] = null);

(statearr_16010_16070[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15992 === (13))){
var inst_15921 = (state_15991[(7)]);
var inst_15928 = inst_15921.cljs$lang$protocol_mask$partition0$;
var inst_15929 = (inst_15928 & (64));
var inst_15930 = inst_15921.cljs$core$ISeq$;
var inst_15931 = (inst_15929) || (inst_15930);
var state_15991__$1 = state_15991;
if(cljs.core.truth_(inst_15931)){
var statearr_16011_16071 = state_15991__$1;
(statearr_16011_16071[(1)] = (16));

} else {
var statearr_16012_16072 = state_15991__$1;
(statearr_16012_16072[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15992 === (22))){
var inst_15951 = (state_15991[(9)]);
var inst_15950 = (state_15991[(14)]);
var inst_15949 = (state_15991[(2)]);
var inst_15950__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15949,(0),null);
var inst_15951__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15949,(1),null);
var inst_15952 = (inst_15950__$1 == null);
var inst_15953 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_15951__$1,change);
var inst_15954 = (inst_15952) || (inst_15953);
var state_15991__$1 = (function (){var statearr_16013 = state_15991;
(statearr_16013[(9)] = inst_15951__$1);

(statearr_16013[(14)] = inst_15950__$1);

return statearr_16013;
})();
if(cljs.core.truth_(inst_15954)){
var statearr_16014_16073 = state_15991__$1;
(statearr_16014_16073[(1)] = (23));

} else {
var statearr_16015_16074 = state_15991__$1;
(statearr_16015_16074[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15992 === (36))){
var inst_15943 = (state_15991[(12)]);
var inst_15921 = inst_15943;
var state_15991__$1 = (function (){var statearr_16016 = state_15991;
(statearr_16016[(7)] = inst_15921);

return statearr_16016;
})();
var statearr_16017_16075 = state_15991__$1;
(statearr_16017_16075[(2)] = null);

(statearr_16017_16075[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15992 === (29))){
var inst_15965 = (state_15991[(11)]);
var state_15991__$1 = state_15991;
var statearr_16018_16076 = state_15991__$1;
(statearr_16018_16076[(2)] = inst_15965);

(statearr_16018_16076[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15992 === (6))){
var state_15991__$1 = state_15991;
var statearr_16019_16077 = state_15991__$1;
(statearr_16019_16077[(2)] = false);

(statearr_16019_16077[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15992 === (28))){
var inst_15961 = (state_15991[(2)]);
var inst_15962 = calc_state();
var inst_15921 = inst_15962;
var state_15991__$1 = (function (){var statearr_16020 = state_15991;
(statearr_16020[(7)] = inst_15921);

(statearr_16020[(15)] = inst_15961);

return statearr_16020;
})();
var statearr_16021_16078 = state_15991__$1;
(statearr_16021_16078[(2)] = null);

(statearr_16021_16078[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15992 === (25))){
var inst_15987 = (state_15991[(2)]);
var state_15991__$1 = state_15991;
var statearr_16022_16079 = state_15991__$1;
(statearr_16022_16079[(2)] = inst_15987);

(statearr_16022_16079[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15992 === (34))){
var inst_15985 = (state_15991[(2)]);
var state_15991__$1 = state_15991;
var statearr_16023_16080 = state_15991__$1;
(statearr_16023_16080[(2)] = inst_15985);

(statearr_16023_16080[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15992 === (17))){
var state_15991__$1 = state_15991;
var statearr_16024_16081 = state_15991__$1;
(statearr_16024_16081[(2)] = false);

(statearr_16024_16081[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15992 === (3))){
var state_15991__$1 = state_15991;
var statearr_16025_16082 = state_15991__$1;
(statearr_16025_16082[(2)] = false);

(statearr_16025_16082[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15992 === (12))){
var inst_15989 = (state_15991[(2)]);
var state_15991__$1 = state_15991;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15991__$1,inst_15989);
} else {
if((state_val_15992 === (2))){
var inst_15897 = (state_15991[(8)]);
var inst_15902 = inst_15897.cljs$lang$protocol_mask$partition0$;
var inst_15903 = (inst_15902 & (64));
var inst_15904 = inst_15897.cljs$core$ISeq$;
var inst_15905 = (inst_15903) || (inst_15904);
var state_15991__$1 = state_15991;
if(cljs.core.truth_(inst_15905)){
var statearr_16026_16083 = state_15991__$1;
(statearr_16026_16083[(1)] = (5));

} else {
var statearr_16027_16084 = state_15991__$1;
(statearr_16027_16084[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15992 === (23))){
var inst_15950 = (state_15991[(14)]);
var inst_15956 = (inst_15950 == null);
var state_15991__$1 = state_15991;
if(cljs.core.truth_(inst_15956)){
var statearr_16028_16085 = state_15991__$1;
(statearr_16028_16085[(1)] = (26));

} else {
var statearr_16029_16086 = state_15991__$1;
(statearr_16029_16086[(1)] = (27));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15992 === (35))){
var inst_15976 = (state_15991[(2)]);
var state_15991__$1 = state_15991;
if(cljs.core.truth_(inst_15976)){
var statearr_16030_16087 = state_15991__$1;
(statearr_16030_16087[(1)] = (36));

} else {
var statearr_16031_16088 = state_15991__$1;
(statearr_16031_16088[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15992 === (19))){
var inst_15921 = (state_15991[(7)]);
var inst_15940 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_15921);
var state_15991__$1 = state_15991;
var statearr_16032_16089 = state_15991__$1;
(statearr_16032_16089[(2)] = inst_15940);

(statearr_16032_16089[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15992 === (11))){
var inst_15921 = (state_15991[(7)]);
var inst_15925 = (inst_15921 == null);
var inst_15926 = cljs.core.not(inst_15925);
var state_15991__$1 = state_15991;
if(inst_15926){
var statearr_16033_16090 = state_15991__$1;
(statearr_16033_16090[(1)] = (13));

} else {
var statearr_16034_16091 = state_15991__$1;
(statearr_16034_16091[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15992 === (9))){
var inst_15897 = (state_15991[(8)]);
var state_15991__$1 = state_15991;
var statearr_16035_16092 = state_15991__$1;
(statearr_16035_16092[(2)] = inst_15897);

(statearr_16035_16092[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15992 === (5))){
var state_15991__$1 = state_15991;
var statearr_16036_16093 = state_15991__$1;
(statearr_16036_16093[(2)] = true);

(statearr_16036_16093[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15992 === (14))){
var state_15991__$1 = state_15991;
var statearr_16037_16094 = state_15991__$1;
(statearr_16037_16094[(2)] = false);

(statearr_16037_16094[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15992 === (26))){
var inst_15951 = (state_15991[(9)]);
var inst_15958 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_15951);
var state_15991__$1 = state_15991;
var statearr_16038_16095 = state_15991__$1;
(statearr_16038_16095[(2)] = inst_15958);

(statearr_16038_16095[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15992 === (16))){
var state_15991__$1 = state_15991;
var statearr_16039_16096 = state_15991__$1;
(statearr_16039_16096[(2)] = true);

(statearr_16039_16096[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15992 === (38))){
var inst_15981 = (state_15991[(2)]);
var state_15991__$1 = state_15991;
var statearr_16040_16097 = state_15991__$1;
(statearr_16040_16097[(2)] = inst_15981);

(statearr_16040_16097[(1)] = (34));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15992 === (30))){
var inst_15951 = (state_15991[(9)]);
var inst_15945 = (state_15991[(13)]);
var inst_15944 = (state_15991[(10)]);
var inst_15968 = cljs.core.empty_QMARK_(inst_15944);
var inst_15969 = (inst_15945.cljs$core$IFn$_invoke$arity$1 ? inst_15945.cljs$core$IFn$_invoke$arity$1(inst_15951) : inst_15945.call(null,inst_15951));
var inst_15970 = cljs.core.not(inst_15969);
var inst_15971 = (inst_15968) && (inst_15970);
var state_15991__$1 = state_15991;
var statearr_16041_16098 = state_15991__$1;
(statearr_16041_16098[(2)] = inst_15971);

(statearr_16041_16098[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15992 === (10))){
var inst_15897 = (state_15991[(8)]);
var inst_15917 = (state_15991[(2)]);
var inst_15918 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15917,cljs.core.cst$kw$solos);
var inst_15919 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15917,cljs.core.cst$kw$mutes);
var inst_15920 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15917,cljs.core.cst$kw$reads);
var inst_15921 = inst_15897;
var state_15991__$1 = (function (){var statearr_16042 = state_15991;
(statearr_16042[(16)] = inst_15920);

(statearr_16042[(17)] = inst_15919);

(statearr_16042[(18)] = inst_15918);

(statearr_16042[(7)] = inst_15921);

return statearr_16042;
})();
var statearr_16043_16099 = state_15991__$1;
(statearr_16043_16099[(2)] = null);

(statearr_16043_16099[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15992 === (18))){
var inst_15935 = (state_15991[(2)]);
var state_15991__$1 = state_15991;
var statearr_16044_16100 = state_15991__$1;
(statearr_16044_16100[(2)] = inst_15935);

(statearr_16044_16100[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15992 === (37))){
var state_15991__$1 = state_15991;
var statearr_16045_16101 = state_15991__$1;
(statearr_16045_16101[(2)] = null);

(statearr_16045_16101[(1)] = (38));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15992 === (8))){
var inst_15897 = (state_15991[(8)]);
var inst_15914 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_15897);
var state_15991__$1 = state_15991;
var statearr_16046_16102 = state_15991__$1;
(statearr_16046_16102[(2)] = inst_15914);

(statearr_16046_16102[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__14323__auto___16056,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__14209__auto__,c__14323__auto___16056,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__14210__auto__ = null;
var cljs$core$async$mix_$_state_machine__14210__auto____0 = (function (){
var statearr_16050 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16050[(0)] = cljs$core$async$mix_$_state_machine__14210__auto__);

(statearr_16050[(1)] = (1));

return statearr_16050;
});
var cljs$core$async$mix_$_state_machine__14210__auto____1 = (function (state_15991){
while(true){
var ret_value__14211__auto__ = (function (){try{while(true){
var result__14212__auto__ = switch__14209__auto__(state_15991);
if(cljs.core.keyword_identical_QMARK_(result__14212__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14212__auto__;
}
break;
}
}catch (e16051){if((e16051 instanceof Object)){
var ex__14213__auto__ = e16051;
var statearr_16052_16103 = state_15991;
(statearr_16052_16103[(5)] = ex__14213__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15991);

return cljs.core.cst$kw$recur;
} else {
throw e16051;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14211__auto__,cljs.core.cst$kw$recur)){
var G__16104 = state_15991;
state_15991 = G__16104;
continue;
} else {
return ret_value__14211__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__14210__auto__ = function(state_15991){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__14210__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__14210__auto____1.call(this,state_15991);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__14210__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__14210__auto____0;
cljs$core$async$mix_$_state_machine__14210__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__14210__auto____1;
return cljs$core$async$mix_$_state_machine__14210__auto__;
})()
;})(switch__14209__auto__,c__14323__auto___16056,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__14325__auto__ = (function (){var statearr_16053 = (f__14324__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14324__auto__.cljs$core$IFn$_invoke$arity$0() : f__14324__auto__.call(null));
(statearr_16053[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14323__auto___16056);

return statearr_16053;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14325__auto__);
});})(c__14323__auto___16056,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__7203__auto__ = (((p == null))?null:p);
var m__7204__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__7203__auto__)]);
if(!((m__7204__auto__ == null))){
return (m__7204__auto__.cljs$core$IFn$_invoke$arity$4 ? m__7204__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__7204__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__7204__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__7204__auto____$1 == null))){
return (m__7204__auto____$1.cljs$core$IFn$_invoke$arity$4 ? m__7204__auto____$1.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__7204__auto____$1.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__7203__auto__ = (((p == null))?null:p);
var m__7204__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__7203__auto__)]);
if(!((m__7204__auto__ == null))){
return (m__7204__auto__.cljs$core$IFn$_invoke$arity$3 ? m__7204__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__7204__auto__.call(null,p,v,ch));
} else {
var m__7204__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__7204__auto____$1 == null))){
return (m__7204__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__7204__auto____$1.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__7204__auto____$1.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args16105 = [];
var len__7609__auto___16108 = arguments.length;
var i__7610__auto___16109 = (0);
while(true){
if((i__7610__auto___16109 < len__7609__auto___16108)){
args16105.push((arguments[i__7610__auto___16109]));

var G__16110 = (i__7610__auto___16109 + (1));
i__7610__auto___16109 = G__16110;
continue;
} else {
}
break;
}

var G__16107 = args16105.length;
switch (G__16107) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16105.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__7203__auto__ = (((p == null))?null:p);
var m__7204__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__7203__auto__)]);
if(!((m__7204__auto__ == null))){
return (m__7204__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7204__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__7204__auto__.call(null,p));
} else {
var m__7204__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__7204__auto____$1 == null))){
return (m__7204__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7204__auto____$1.cljs$core$IFn$_invoke$arity$1(p) : m__7204__auto____$1.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__7203__auto__ = (((p == null))?null:p);
var m__7204__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__7203__auto__)]);
if(!((m__7204__auto__ == null))){
return (m__7204__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7204__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__7204__auto__.call(null,p,v));
} else {
var m__7204__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__7204__auto____$1 == null))){
return (m__7204__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7204__auto____$1.cljs$core$IFn$_invoke$arity$2(p,v) : m__7204__auto____$1.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args16113 = [];
var len__7609__auto___16241 = arguments.length;
var i__7610__auto___16242 = (0);
while(true){
if((i__7610__auto___16242 < len__7609__auto___16241)){
args16113.push((arguments[i__7610__auto___16242]));

var G__16243 = (i__7610__auto___16242 + (1));
i__7610__auto___16242 = G__16243;
continue;
} else {
}
break;
}

var G__16115 = args16113.length;
switch (G__16115) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16113.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = (function (){var G__16116 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__16116) : cljs.core.atom.call(null,G__16116));
})();
var ensure_mult = ((function (mults){
return (function (topic){
var or__6540__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults)),topic);
if(cljs.core.truth_(or__6540__auto__)){
return or__6540__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__6540__auto__,mults){
return (function (p1__16112_SHARP_){
if(cljs.core.truth_((p1__16112_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__16112_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__16112_SHARP_.call(null,topic)))){
return p1__16112_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__16112_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__6540__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async16117 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16117 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta16118){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta16118 = meta16118;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async16117.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_16119,meta16118__$1){
var self__ = this;
var _16119__$1 = this;
return (new cljs.core.async.t_cljs$core$async16117(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta16118__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16117.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_16119){
var self__ = this;
var _16119__$1 = this;
return self__.meta16118;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16117.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async16117.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16117.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async16117.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16117.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.mults) : cljs.core.deref.call(null,self__.mults)),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16117.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__16120 = self__.mults;
var G__16121 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__16120,G__16121) : cljs.core.reset_BANG_.call(null,G__16120,G__16121));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16117.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16117.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$topic_DASH_fn,cljs.core.cst$sym$buf_DASH_fn,cljs.core.cst$sym$mults,cljs.core.cst$sym$ensure_DASH_mult,cljs.core.cst$sym$meta16118], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16117.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16117.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16117";

cljs.core.async.t_cljs$core$async16117.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__7146__auto__,writer__7147__auto__,opt__7148__auto__){
return cljs.core._write(writer__7147__auto__,"cljs.core.async/t_cljs$core$async16117");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async16117 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async16117(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta16118){
return (new cljs.core.async.t_cljs$core$async16117(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta16118));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async16117(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__14323__auto___16245 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14323__auto___16245,mults,ensure_mult,p){
return (function (){
var f__14324__auto__ = (function (){var switch__14209__auto__ = ((function (c__14323__auto___16245,mults,ensure_mult,p){
return (function (state_16193){
var state_val_16194 = (state_16193[(1)]);
if((state_val_16194 === (7))){
var inst_16189 = (state_16193[(2)]);
var state_16193__$1 = state_16193;
var statearr_16195_16246 = state_16193__$1;
(statearr_16195_16246[(2)] = inst_16189);

(statearr_16195_16246[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16194 === (20))){
var state_16193__$1 = state_16193;
var statearr_16196_16247 = state_16193__$1;
(statearr_16196_16247[(2)] = null);

(statearr_16196_16247[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16194 === (1))){
var state_16193__$1 = state_16193;
var statearr_16197_16248 = state_16193__$1;
(statearr_16197_16248[(2)] = null);

(statearr_16197_16248[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16194 === (24))){
var inst_16172 = (state_16193[(7)]);
var inst_16181 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_16172);
var state_16193__$1 = state_16193;
var statearr_16198_16249 = state_16193__$1;
(statearr_16198_16249[(2)] = inst_16181);

(statearr_16198_16249[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16194 === (4))){
var inst_16124 = (state_16193[(8)]);
var inst_16124__$1 = (state_16193[(2)]);
var inst_16125 = (inst_16124__$1 == null);
var state_16193__$1 = (function (){var statearr_16199 = state_16193;
(statearr_16199[(8)] = inst_16124__$1);

return statearr_16199;
})();
if(cljs.core.truth_(inst_16125)){
var statearr_16200_16250 = state_16193__$1;
(statearr_16200_16250[(1)] = (5));

} else {
var statearr_16201_16251 = state_16193__$1;
(statearr_16201_16251[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16194 === (15))){
var inst_16166 = (state_16193[(2)]);
var state_16193__$1 = state_16193;
var statearr_16202_16252 = state_16193__$1;
(statearr_16202_16252[(2)] = inst_16166);

(statearr_16202_16252[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16194 === (21))){
var inst_16186 = (state_16193[(2)]);
var state_16193__$1 = (function (){var statearr_16203 = state_16193;
(statearr_16203[(9)] = inst_16186);

return statearr_16203;
})();
var statearr_16204_16253 = state_16193__$1;
(statearr_16204_16253[(2)] = null);

(statearr_16204_16253[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16194 === (13))){
var inst_16148 = (state_16193[(10)]);
var inst_16150 = cljs.core.chunked_seq_QMARK_(inst_16148);
var state_16193__$1 = state_16193;
if(inst_16150){
var statearr_16205_16254 = state_16193__$1;
(statearr_16205_16254[(1)] = (16));

} else {
var statearr_16206_16255 = state_16193__$1;
(statearr_16206_16255[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16194 === (22))){
var inst_16178 = (state_16193[(2)]);
var state_16193__$1 = state_16193;
if(cljs.core.truth_(inst_16178)){
var statearr_16207_16256 = state_16193__$1;
(statearr_16207_16256[(1)] = (23));

} else {
var statearr_16208_16257 = state_16193__$1;
(statearr_16208_16257[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16194 === (6))){
var inst_16124 = (state_16193[(8)]);
var inst_16172 = (state_16193[(7)]);
var inst_16174 = (state_16193[(11)]);
var inst_16172__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_16124) : topic_fn.call(null,inst_16124));
var inst_16173 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults));
var inst_16174__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16173,inst_16172__$1);
var state_16193__$1 = (function (){var statearr_16209 = state_16193;
(statearr_16209[(7)] = inst_16172__$1);

(statearr_16209[(11)] = inst_16174__$1);

return statearr_16209;
})();
if(cljs.core.truth_(inst_16174__$1)){
var statearr_16210_16258 = state_16193__$1;
(statearr_16210_16258[(1)] = (19));

} else {
var statearr_16211_16259 = state_16193__$1;
(statearr_16211_16259[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16194 === (25))){
var inst_16183 = (state_16193[(2)]);
var state_16193__$1 = state_16193;
var statearr_16212_16260 = state_16193__$1;
(statearr_16212_16260[(2)] = inst_16183);

(statearr_16212_16260[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16194 === (17))){
var inst_16148 = (state_16193[(10)]);
var inst_16157 = cljs.core.first(inst_16148);
var inst_16158 = cljs.core.async.muxch_STAR_(inst_16157);
var inst_16159 = cljs.core.async.close_BANG_(inst_16158);
var inst_16160 = cljs.core.next(inst_16148);
var inst_16134 = inst_16160;
var inst_16135 = null;
var inst_16136 = (0);
var inst_16137 = (0);
var state_16193__$1 = (function (){var statearr_16213 = state_16193;
(statearr_16213[(12)] = inst_16134);

(statearr_16213[(13)] = inst_16137);

(statearr_16213[(14)] = inst_16136);

(statearr_16213[(15)] = inst_16159);

(statearr_16213[(16)] = inst_16135);

return statearr_16213;
})();
var statearr_16214_16261 = state_16193__$1;
(statearr_16214_16261[(2)] = null);

(statearr_16214_16261[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16194 === (3))){
var inst_16191 = (state_16193[(2)]);
var state_16193__$1 = state_16193;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16193__$1,inst_16191);
} else {
if((state_val_16194 === (12))){
var inst_16168 = (state_16193[(2)]);
var state_16193__$1 = state_16193;
var statearr_16215_16262 = state_16193__$1;
(statearr_16215_16262[(2)] = inst_16168);

(statearr_16215_16262[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16194 === (2))){
var state_16193__$1 = state_16193;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16193__$1,(4),ch);
} else {
if((state_val_16194 === (23))){
var state_16193__$1 = state_16193;
var statearr_16216_16263 = state_16193__$1;
(statearr_16216_16263[(2)] = null);

(statearr_16216_16263[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16194 === (19))){
var inst_16124 = (state_16193[(8)]);
var inst_16174 = (state_16193[(11)]);
var inst_16176 = cljs.core.async.muxch_STAR_(inst_16174);
var state_16193__$1 = state_16193;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16193__$1,(22),inst_16176,inst_16124);
} else {
if((state_val_16194 === (11))){
var inst_16134 = (state_16193[(12)]);
var inst_16148 = (state_16193[(10)]);
var inst_16148__$1 = cljs.core.seq(inst_16134);
var state_16193__$1 = (function (){var statearr_16217 = state_16193;
(statearr_16217[(10)] = inst_16148__$1);

return statearr_16217;
})();
if(inst_16148__$1){
var statearr_16218_16264 = state_16193__$1;
(statearr_16218_16264[(1)] = (13));

} else {
var statearr_16219_16265 = state_16193__$1;
(statearr_16219_16265[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16194 === (9))){
var inst_16170 = (state_16193[(2)]);
var state_16193__$1 = state_16193;
var statearr_16220_16266 = state_16193__$1;
(statearr_16220_16266[(2)] = inst_16170);

(statearr_16220_16266[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16194 === (5))){
var inst_16131 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults));
var inst_16132 = cljs.core.vals(inst_16131);
var inst_16133 = cljs.core.seq(inst_16132);
var inst_16134 = inst_16133;
var inst_16135 = null;
var inst_16136 = (0);
var inst_16137 = (0);
var state_16193__$1 = (function (){var statearr_16221 = state_16193;
(statearr_16221[(12)] = inst_16134);

(statearr_16221[(13)] = inst_16137);

(statearr_16221[(14)] = inst_16136);

(statearr_16221[(16)] = inst_16135);

return statearr_16221;
})();
var statearr_16222_16267 = state_16193__$1;
(statearr_16222_16267[(2)] = null);

(statearr_16222_16267[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16194 === (14))){
var state_16193__$1 = state_16193;
var statearr_16226_16268 = state_16193__$1;
(statearr_16226_16268[(2)] = null);

(statearr_16226_16268[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16194 === (16))){
var inst_16148 = (state_16193[(10)]);
var inst_16152 = cljs.core.chunk_first(inst_16148);
var inst_16153 = cljs.core.chunk_rest(inst_16148);
var inst_16154 = cljs.core.count(inst_16152);
var inst_16134 = inst_16153;
var inst_16135 = inst_16152;
var inst_16136 = inst_16154;
var inst_16137 = (0);
var state_16193__$1 = (function (){var statearr_16227 = state_16193;
(statearr_16227[(12)] = inst_16134);

(statearr_16227[(13)] = inst_16137);

(statearr_16227[(14)] = inst_16136);

(statearr_16227[(16)] = inst_16135);

return statearr_16227;
})();
var statearr_16228_16269 = state_16193__$1;
(statearr_16228_16269[(2)] = null);

(statearr_16228_16269[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16194 === (10))){
var inst_16134 = (state_16193[(12)]);
var inst_16137 = (state_16193[(13)]);
var inst_16136 = (state_16193[(14)]);
var inst_16135 = (state_16193[(16)]);
var inst_16142 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_16135,inst_16137);
var inst_16143 = cljs.core.async.muxch_STAR_(inst_16142);
var inst_16144 = cljs.core.async.close_BANG_(inst_16143);
var inst_16145 = (inst_16137 + (1));
var tmp16223 = inst_16134;
var tmp16224 = inst_16136;
var tmp16225 = inst_16135;
var inst_16134__$1 = tmp16223;
var inst_16135__$1 = tmp16225;
var inst_16136__$1 = tmp16224;
var inst_16137__$1 = inst_16145;
var state_16193__$1 = (function (){var statearr_16229 = state_16193;
(statearr_16229[(12)] = inst_16134__$1);

(statearr_16229[(13)] = inst_16137__$1);

(statearr_16229[(14)] = inst_16136__$1);

(statearr_16229[(17)] = inst_16144);

(statearr_16229[(16)] = inst_16135__$1);

return statearr_16229;
})();
var statearr_16230_16270 = state_16193__$1;
(statearr_16230_16270[(2)] = null);

(statearr_16230_16270[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16194 === (18))){
var inst_16163 = (state_16193[(2)]);
var state_16193__$1 = state_16193;
var statearr_16231_16271 = state_16193__$1;
(statearr_16231_16271[(2)] = inst_16163);

(statearr_16231_16271[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16194 === (8))){
var inst_16137 = (state_16193[(13)]);
var inst_16136 = (state_16193[(14)]);
var inst_16139 = (inst_16137 < inst_16136);
var inst_16140 = inst_16139;
var state_16193__$1 = state_16193;
if(cljs.core.truth_(inst_16140)){
var statearr_16232_16272 = state_16193__$1;
(statearr_16232_16272[(1)] = (10));

} else {
var statearr_16233_16273 = state_16193__$1;
(statearr_16233_16273[(1)] = (11));

}

return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__14323__auto___16245,mults,ensure_mult,p))
;
return ((function (switch__14209__auto__,c__14323__auto___16245,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__14210__auto__ = null;
var cljs$core$async$state_machine__14210__auto____0 = (function (){
var statearr_16237 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16237[(0)] = cljs$core$async$state_machine__14210__auto__);

(statearr_16237[(1)] = (1));

return statearr_16237;
});
var cljs$core$async$state_machine__14210__auto____1 = (function (state_16193){
while(true){
var ret_value__14211__auto__ = (function (){try{while(true){
var result__14212__auto__ = switch__14209__auto__(state_16193);
if(cljs.core.keyword_identical_QMARK_(result__14212__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14212__auto__;
}
break;
}
}catch (e16238){if((e16238 instanceof Object)){
var ex__14213__auto__ = e16238;
var statearr_16239_16274 = state_16193;
(statearr_16239_16274[(5)] = ex__14213__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16193);

return cljs.core.cst$kw$recur;
} else {
throw e16238;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14211__auto__,cljs.core.cst$kw$recur)){
var G__16275 = state_16193;
state_16193 = G__16275;
continue;
} else {
return ret_value__14211__auto__;
}
break;
}
});
cljs$core$async$state_machine__14210__auto__ = function(state_16193){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14210__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14210__auto____1.call(this,state_16193);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14210__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14210__auto____0;
cljs$core$async$state_machine__14210__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14210__auto____1;
return cljs$core$async$state_machine__14210__auto__;
})()
;})(switch__14209__auto__,c__14323__auto___16245,mults,ensure_mult,p))
})();
var state__14325__auto__ = (function (){var statearr_16240 = (f__14324__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14324__auto__.cljs$core$IFn$_invoke$arity$0() : f__14324__auto__.call(null));
(statearr_16240[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14323__auto___16245);

return statearr_16240;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14325__auto__);
});})(c__14323__auto___16245,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args16276 = [];
var len__7609__auto___16279 = arguments.length;
var i__7610__auto___16280 = (0);
while(true){
if((i__7610__auto___16280 < len__7609__auto___16279)){
args16276.push((arguments[i__7610__auto___16280]));

var G__16281 = (i__7610__auto___16280 + (1));
i__7610__auto___16280 = G__16281;
continue;
} else {
}
break;
}

var G__16278 = args16276.length;
switch (G__16278) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16276.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args16283 = [];
var len__7609__auto___16286 = arguments.length;
var i__7610__auto___16287 = (0);
while(true){
if((i__7610__auto___16287 < len__7609__auto___16286)){
args16283.push((arguments[i__7610__auto___16287]));

var G__16288 = (i__7610__auto___16287 + (1));
i__7610__auto___16287 = G__16288;
continue;
} else {
}
break;
}

var G__16285 = args16283.length;
switch (G__16285) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16283.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args16290 = [];
var len__7609__auto___16361 = arguments.length;
var i__7610__auto___16362 = (0);
while(true){
if((i__7610__auto___16362 < len__7609__auto___16361)){
args16290.push((arguments[i__7610__auto___16362]));

var G__16363 = (i__7610__auto___16362 + (1));
i__7610__auto___16362 = G__16363;
continue;
} else {
}
break;
}

var G__16292 = args16290.length;
switch (G__16292) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16290.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__14323__auto___16365 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14323__auto___16365,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__14324__auto__ = (function (){var switch__14209__auto__ = ((function (c__14323__auto___16365,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_16331){
var state_val_16332 = (state_16331[(1)]);
if((state_val_16332 === (7))){
var state_16331__$1 = state_16331;
var statearr_16333_16366 = state_16331__$1;
(statearr_16333_16366[(2)] = null);

(statearr_16333_16366[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16332 === (1))){
var state_16331__$1 = state_16331;
var statearr_16334_16367 = state_16331__$1;
(statearr_16334_16367[(2)] = null);

(statearr_16334_16367[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16332 === (4))){
var inst_16295 = (state_16331[(7)]);
var inst_16297 = (inst_16295 < cnt);
var state_16331__$1 = state_16331;
if(cljs.core.truth_(inst_16297)){
var statearr_16335_16368 = state_16331__$1;
(statearr_16335_16368[(1)] = (6));

} else {
var statearr_16336_16369 = state_16331__$1;
(statearr_16336_16369[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16332 === (15))){
var inst_16327 = (state_16331[(2)]);
var state_16331__$1 = state_16331;
var statearr_16337_16370 = state_16331__$1;
(statearr_16337_16370[(2)] = inst_16327);

(statearr_16337_16370[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16332 === (13))){
var inst_16320 = cljs.core.async.close_BANG_(out);
var state_16331__$1 = state_16331;
var statearr_16338_16371 = state_16331__$1;
(statearr_16338_16371[(2)] = inst_16320);

(statearr_16338_16371[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16332 === (6))){
var state_16331__$1 = state_16331;
var statearr_16339_16372 = state_16331__$1;
(statearr_16339_16372[(2)] = null);

(statearr_16339_16372[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16332 === (3))){
var inst_16329 = (state_16331[(2)]);
var state_16331__$1 = state_16331;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16331__$1,inst_16329);
} else {
if((state_val_16332 === (12))){
var inst_16317 = (state_16331[(8)]);
var inst_16317__$1 = (state_16331[(2)]);
var inst_16318 = cljs.core.some(cljs.core.nil_QMARK_,inst_16317__$1);
var state_16331__$1 = (function (){var statearr_16340 = state_16331;
(statearr_16340[(8)] = inst_16317__$1);

return statearr_16340;
})();
if(cljs.core.truth_(inst_16318)){
var statearr_16341_16373 = state_16331__$1;
(statearr_16341_16373[(1)] = (13));

} else {
var statearr_16342_16374 = state_16331__$1;
(statearr_16342_16374[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16332 === (2))){
var inst_16294 = (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cnt) : cljs.core.reset_BANG_.call(null,dctr,cnt));
var inst_16295 = (0);
var state_16331__$1 = (function (){var statearr_16343 = state_16331;
(statearr_16343[(9)] = inst_16294);

(statearr_16343[(7)] = inst_16295);

return statearr_16343;
})();
var statearr_16344_16375 = state_16331__$1;
(statearr_16344_16375[(2)] = null);

(statearr_16344_16375[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16332 === (11))){
var inst_16295 = (state_16331[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_16331,(10),Object,null,(9));
var inst_16304 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_16295) : chs__$1.call(null,inst_16295));
var inst_16305 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_16295) : done.call(null,inst_16295));
var inst_16306 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_16304,inst_16305);
var state_16331__$1 = state_16331;
var statearr_16345_16376 = state_16331__$1;
(statearr_16345_16376[(2)] = inst_16306);


cljs.core.async.impl.ioc_helpers.process_exception(state_16331__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_16332 === (9))){
var inst_16295 = (state_16331[(7)]);
var inst_16308 = (state_16331[(2)]);
var inst_16309 = (inst_16295 + (1));
var inst_16295__$1 = inst_16309;
var state_16331__$1 = (function (){var statearr_16346 = state_16331;
(statearr_16346[(10)] = inst_16308);

(statearr_16346[(7)] = inst_16295__$1);

return statearr_16346;
})();
var statearr_16347_16377 = state_16331__$1;
(statearr_16347_16377[(2)] = null);

(statearr_16347_16377[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16332 === (5))){
var inst_16315 = (state_16331[(2)]);
var state_16331__$1 = (function (){var statearr_16348 = state_16331;
(statearr_16348[(11)] = inst_16315);

return statearr_16348;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16331__$1,(12),dchan);
} else {
if((state_val_16332 === (14))){
var inst_16317 = (state_16331[(8)]);
var inst_16322 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_16317);
var state_16331__$1 = state_16331;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16331__$1,(16),out,inst_16322);
} else {
if((state_val_16332 === (16))){
var inst_16324 = (state_16331[(2)]);
var state_16331__$1 = (function (){var statearr_16349 = state_16331;
(statearr_16349[(12)] = inst_16324);

return statearr_16349;
})();
var statearr_16350_16378 = state_16331__$1;
(statearr_16350_16378[(2)] = null);

(statearr_16350_16378[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16332 === (10))){
var inst_16299 = (state_16331[(2)]);
var inst_16300 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_16331__$1 = (function (){var statearr_16351 = state_16331;
(statearr_16351[(13)] = inst_16299);

return statearr_16351;
})();
var statearr_16352_16379 = state_16331__$1;
(statearr_16352_16379[(2)] = inst_16300);


cljs.core.async.impl.ioc_helpers.process_exception(state_16331__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_16332 === (8))){
var inst_16313 = (state_16331[(2)]);
var state_16331__$1 = state_16331;
var statearr_16353_16380 = state_16331__$1;
(statearr_16353_16380[(2)] = inst_16313);

(statearr_16353_16380[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__14323__auto___16365,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__14209__auto__,c__14323__auto___16365,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__14210__auto__ = null;
var cljs$core$async$state_machine__14210__auto____0 = (function (){
var statearr_16357 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16357[(0)] = cljs$core$async$state_machine__14210__auto__);

(statearr_16357[(1)] = (1));

return statearr_16357;
});
var cljs$core$async$state_machine__14210__auto____1 = (function (state_16331){
while(true){
var ret_value__14211__auto__ = (function (){try{while(true){
var result__14212__auto__ = switch__14209__auto__(state_16331);
if(cljs.core.keyword_identical_QMARK_(result__14212__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14212__auto__;
}
break;
}
}catch (e16358){if((e16358 instanceof Object)){
var ex__14213__auto__ = e16358;
var statearr_16359_16381 = state_16331;
(statearr_16359_16381[(5)] = ex__14213__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16331);

return cljs.core.cst$kw$recur;
} else {
throw e16358;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14211__auto__,cljs.core.cst$kw$recur)){
var G__16382 = state_16331;
state_16331 = G__16382;
continue;
} else {
return ret_value__14211__auto__;
}
break;
}
});
cljs$core$async$state_machine__14210__auto__ = function(state_16331){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14210__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14210__auto____1.call(this,state_16331);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14210__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14210__auto____0;
cljs$core$async$state_machine__14210__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14210__auto____1;
return cljs$core$async$state_machine__14210__auto__;
})()
;})(switch__14209__auto__,c__14323__auto___16365,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__14325__auto__ = (function (){var statearr_16360 = (f__14324__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14324__auto__.cljs$core$IFn$_invoke$arity$0() : f__14324__auto__.call(null));
(statearr_16360[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14323__auto___16365);

return statearr_16360;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14325__auto__);
});})(c__14323__auto___16365,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args16384 = [];
var len__7609__auto___16440 = arguments.length;
var i__7610__auto___16441 = (0);
while(true){
if((i__7610__auto___16441 < len__7609__auto___16440)){
args16384.push((arguments[i__7610__auto___16441]));

var G__16442 = (i__7610__auto___16441 + (1));
i__7610__auto___16441 = G__16442;
continue;
} else {
}
break;
}

var G__16386 = args16384.length;
switch (G__16386) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16384.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14323__auto___16444 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14323__auto___16444,out){
return (function (){
var f__14324__auto__ = (function (){var switch__14209__auto__ = ((function (c__14323__auto___16444,out){
return (function (state_16416){
var state_val_16417 = (state_16416[(1)]);
if((state_val_16417 === (7))){
var inst_16396 = (state_16416[(7)]);
var inst_16395 = (state_16416[(8)]);
var inst_16395__$1 = (state_16416[(2)]);
var inst_16396__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16395__$1,(0),null);
var inst_16397 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16395__$1,(1),null);
var inst_16398 = (inst_16396__$1 == null);
var state_16416__$1 = (function (){var statearr_16418 = state_16416;
(statearr_16418[(7)] = inst_16396__$1);

(statearr_16418[(8)] = inst_16395__$1);

(statearr_16418[(9)] = inst_16397);

return statearr_16418;
})();
if(cljs.core.truth_(inst_16398)){
var statearr_16419_16445 = state_16416__$1;
(statearr_16419_16445[(1)] = (8));

} else {
var statearr_16420_16446 = state_16416__$1;
(statearr_16420_16446[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16417 === (1))){
var inst_16387 = cljs.core.vec(chs);
var inst_16388 = inst_16387;
var state_16416__$1 = (function (){var statearr_16421 = state_16416;
(statearr_16421[(10)] = inst_16388);

return statearr_16421;
})();
var statearr_16422_16447 = state_16416__$1;
(statearr_16422_16447[(2)] = null);

(statearr_16422_16447[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16417 === (4))){
var inst_16388 = (state_16416[(10)]);
var state_16416__$1 = state_16416;
return cljs.core.async.ioc_alts_BANG_(state_16416__$1,(7),inst_16388);
} else {
if((state_val_16417 === (6))){
var inst_16412 = (state_16416[(2)]);
var state_16416__$1 = state_16416;
var statearr_16423_16448 = state_16416__$1;
(statearr_16423_16448[(2)] = inst_16412);

(statearr_16423_16448[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16417 === (3))){
var inst_16414 = (state_16416[(2)]);
var state_16416__$1 = state_16416;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16416__$1,inst_16414);
} else {
if((state_val_16417 === (2))){
var inst_16388 = (state_16416[(10)]);
var inst_16390 = cljs.core.count(inst_16388);
var inst_16391 = (inst_16390 > (0));
var state_16416__$1 = state_16416;
if(cljs.core.truth_(inst_16391)){
var statearr_16425_16449 = state_16416__$1;
(statearr_16425_16449[(1)] = (4));

} else {
var statearr_16426_16450 = state_16416__$1;
(statearr_16426_16450[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16417 === (11))){
var inst_16388 = (state_16416[(10)]);
var inst_16405 = (state_16416[(2)]);
var tmp16424 = inst_16388;
var inst_16388__$1 = tmp16424;
var state_16416__$1 = (function (){var statearr_16427 = state_16416;
(statearr_16427[(11)] = inst_16405);

(statearr_16427[(10)] = inst_16388__$1);

return statearr_16427;
})();
var statearr_16428_16451 = state_16416__$1;
(statearr_16428_16451[(2)] = null);

(statearr_16428_16451[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16417 === (9))){
var inst_16396 = (state_16416[(7)]);
var state_16416__$1 = state_16416;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16416__$1,(11),out,inst_16396);
} else {
if((state_val_16417 === (5))){
var inst_16410 = cljs.core.async.close_BANG_(out);
var state_16416__$1 = state_16416;
var statearr_16429_16452 = state_16416__$1;
(statearr_16429_16452[(2)] = inst_16410);

(statearr_16429_16452[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16417 === (10))){
var inst_16408 = (state_16416[(2)]);
var state_16416__$1 = state_16416;
var statearr_16430_16453 = state_16416__$1;
(statearr_16430_16453[(2)] = inst_16408);

(statearr_16430_16453[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16417 === (8))){
var inst_16396 = (state_16416[(7)]);
var inst_16395 = (state_16416[(8)]);
var inst_16397 = (state_16416[(9)]);
var inst_16388 = (state_16416[(10)]);
var inst_16400 = (function (){var cs = inst_16388;
var vec__16393 = inst_16395;
var v = inst_16396;
var c = inst_16397;
return ((function (cs,vec__16393,v,c,inst_16396,inst_16395,inst_16397,inst_16388,state_val_16417,c__14323__auto___16444,out){
return (function (p1__16383_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__16383_SHARP_);
});
;})(cs,vec__16393,v,c,inst_16396,inst_16395,inst_16397,inst_16388,state_val_16417,c__14323__auto___16444,out))
})();
var inst_16401 = cljs.core.filterv(inst_16400,inst_16388);
var inst_16388__$1 = inst_16401;
var state_16416__$1 = (function (){var statearr_16431 = state_16416;
(statearr_16431[(10)] = inst_16388__$1);

return statearr_16431;
})();
var statearr_16432_16454 = state_16416__$1;
(statearr_16432_16454[(2)] = null);

(statearr_16432_16454[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__14323__auto___16444,out))
;
return ((function (switch__14209__auto__,c__14323__auto___16444,out){
return (function() {
var cljs$core$async$state_machine__14210__auto__ = null;
var cljs$core$async$state_machine__14210__auto____0 = (function (){
var statearr_16436 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16436[(0)] = cljs$core$async$state_machine__14210__auto__);

(statearr_16436[(1)] = (1));

return statearr_16436;
});
var cljs$core$async$state_machine__14210__auto____1 = (function (state_16416){
while(true){
var ret_value__14211__auto__ = (function (){try{while(true){
var result__14212__auto__ = switch__14209__auto__(state_16416);
if(cljs.core.keyword_identical_QMARK_(result__14212__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14212__auto__;
}
break;
}
}catch (e16437){if((e16437 instanceof Object)){
var ex__14213__auto__ = e16437;
var statearr_16438_16455 = state_16416;
(statearr_16438_16455[(5)] = ex__14213__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16416);

return cljs.core.cst$kw$recur;
} else {
throw e16437;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14211__auto__,cljs.core.cst$kw$recur)){
var G__16456 = state_16416;
state_16416 = G__16456;
continue;
} else {
return ret_value__14211__auto__;
}
break;
}
});
cljs$core$async$state_machine__14210__auto__ = function(state_16416){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14210__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14210__auto____1.call(this,state_16416);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14210__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14210__auto____0;
cljs$core$async$state_machine__14210__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14210__auto____1;
return cljs$core$async$state_machine__14210__auto__;
})()
;})(switch__14209__auto__,c__14323__auto___16444,out))
})();
var state__14325__auto__ = (function (){var statearr_16439 = (f__14324__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14324__auto__.cljs$core$IFn$_invoke$arity$0() : f__14324__auto__.call(null));
(statearr_16439[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14323__auto___16444);

return statearr_16439;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14325__auto__);
});})(c__14323__auto___16444,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args16457 = [];
var len__7609__auto___16506 = arguments.length;
var i__7610__auto___16507 = (0);
while(true){
if((i__7610__auto___16507 < len__7609__auto___16506)){
args16457.push((arguments[i__7610__auto___16507]));

var G__16508 = (i__7610__auto___16507 + (1));
i__7610__auto___16507 = G__16508;
continue;
} else {
}
break;
}

var G__16459 = args16457.length;
switch (G__16459) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16457.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14323__auto___16510 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14323__auto___16510,out){
return (function (){
var f__14324__auto__ = (function (){var switch__14209__auto__ = ((function (c__14323__auto___16510,out){
return (function (state_16483){
var state_val_16484 = (state_16483[(1)]);
if((state_val_16484 === (7))){
var inst_16465 = (state_16483[(7)]);
var inst_16465__$1 = (state_16483[(2)]);
var inst_16466 = (inst_16465__$1 == null);
var inst_16467 = cljs.core.not(inst_16466);
var state_16483__$1 = (function (){var statearr_16485 = state_16483;
(statearr_16485[(7)] = inst_16465__$1);

return statearr_16485;
})();
if(inst_16467){
var statearr_16486_16511 = state_16483__$1;
(statearr_16486_16511[(1)] = (8));

} else {
var statearr_16487_16512 = state_16483__$1;
(statearr_16487_16512[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16484 === (1))){
var inst_16460 = (0);
var state_16483__$1 = (function (){var statearr_16488 = state_16483;
(statearr_16488[(8)] = inst_16460);

return statearr_16488;
})();
var statearr_16489_16513 = state_16483__$1;
(statearr_16489_16513[(2)] = null);

(statearr_16489_16513[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16484 === (4))){
var state_16483__$1 = state_16483;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16483__$1,(7),ch);
} else {
if((state_val_16484 === (6))){
var inst_16478 = (state_16483[(2)]);
var state_16483__$1 = state_16483;
var statearr_16490_16514 = state_16483__$1;
(statearr_16490_16514[(2)] = inst_16478);

(statearr_16490_16514[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16484 === (3))){
var inst_16480 = (state_16483[(2)]);
var inst_16481 = cljs.core.async.close_BANG_(out);
var state_16483__$1 = (function (){var statearr_16491 = state_16483;
(statearr_16491[(9)] = inst_16480);

return statearr_16491;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_16483__$1,inst_16481);
} else {
if((state_val_16484 === (2))){
var inst_16460 = (state_16483[(8)]);
var inst_16462 = (inst_16460 < n);
var state_16483__$1 = state_16483;
if(cljs.core.truth_(inst_16462)){
var statearr_16492_16515 = state_16483__$1;
(statearr_16492_16515[(1)] = (4));

} else {
var statearr_16493_16516 = state_16483__$1;
(statearr_16493_16516[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16484 === (11))){
var inst_16460 = (state_16483[(8)]);
var inst_16470 = (state_16483[(2)]);
var inst_16471 = (inst_16460 + (1));
var inst_16460__$1 = inst_16471;
var state_16483__$1 = (function (){var statearr_16494 = state_16483;
(statearr_16494[(10)] = inst_16470);

(statearr_16494[(8)] = inst_16460__$1);

return statearr_16494;
})();
var statearr_16495_16517 = state_16483__$1;
(statearr_16495_16517[(2)] = null);

(statearr_16495_16517[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16484 === (9))){
var state_16483__$1 = state_16483;
var statearr_16496_16518 = state_16483__$1;
(statearr_16496_16518[(2)] = null);

(statearr_16496_16518[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16484 === (5))){
var state_16483__$1 = state_16483;
var statearr_16497_16519 = state_16483__$1;
(statearr_16497_16519[(2)] = null);

(statearr_16497_16519[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16484 === (10))){
var inst_16475 = (state_16483[(2)]);
var state_16483__$1 = state_16483;
var statearr_16498_16520 = state_16483__$1;
(statearr_16498_16520[(2)] = inst_16475);

(statearr_16498_16520[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16484 === (8))){
var inst_16465 = (state_16483[(7)]);
var state_16483__$1 = state_16483;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16483__$1,(11),out,inst_16465);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__14323__auto___16510,out))
;
return ((function (switch__14209__auto__,c__14323__auto___16510,out){
return (function() {
var cljs$core$async$state_machine__14210__auto__ = null;
var cljs$core$async$state_machine__14210__auto____0 = (function (){
var statearr_16502 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_16502[(0)] = cljs$core$async$state_machine__14210__auto__);

(statearr_16502[(1)] = (1));

return statearr_16502;
});
var cljs$core$async$state_machine__14210__auto____1 = (function (state_16483){
while(true){
var ret_value__14211__auto__ = (function (){try{while(true){
var result__14212__auto__ = switch__14209__auto__(state_16483);
if(cljs.core.keyword_identical_QMARK_(result__14212__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14212__auto__;
}
break;
}
}catch (e16503){if((e16503 instanceof Object)){
var ex__14213__auto__ = e16503;
var statearr_16504_16521 = state_16483;
(statearr_16504_16521[(5)] = ex__14213__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16483);

return cljs.core.cst$kw$recur;
} else {
throw e16503;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14211__auto__,cljs.core.cst$kw$recur)){
var G__16522 = state_16483;
state_16483 = G__16522;
continue;
} else {
return ret_value__14211__auto__;
}
break;
}
});
cljs$core$async$state_machine__14210__auto__ = function(state_16483){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14210__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14210__auto____1.call(this,state_16483);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14210__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14210__auto____0;
cljs$core$async$state_machine__14210__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14210__auto____1;
return cljs$core$async$state_machine__14210__auto__;
})()
;})(switch__14209__auto__,c__14323__auto___16510,out))
})();
var state__14325__auto__ = (function (){var statearr_16505 = (f__14324__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14324__auto__.cljs$core$IFn$_invoke$arity$0() : f__14324__auto__.call(null));
(statearr_16505[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14323__auto___16510);

return statearr_16505;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14325__auto__);
});})(c__14323__auto___16510,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async16532 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16532 = (function (map_LT_,f,ch,meta16533){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta16533 = meta16533;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async16532.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16534,meta16533__$1){
var self__ = this;
var _16534__$1 = this;
return (new cljs.core.async.t_cljs$core$async16532(self__.map_LT_,self__.f,self__.ch,meta16533__$1));
});

cljs.core.async.t_cljs$core$async16532.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16534){
var self__ = this;
var _16534__$1 = this;
return self__.meta16533;
});

cljs.core.async.t_cljs$core$async16532.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async16532.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async16532.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async16532.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async16532.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async16535 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16535 = (function (map_LT_,f,ch,meta16533,_,fn1,meta16536){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta16533 = meta16533;
this._ = _;
this.fn1 = fn1;
this.meta16536 = meta16536;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async16535.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_16537,meta16536__$1){
var self__ = this;
var _16537__$1 = this;
return (new cljs.core.async.t_cljs$core$async16535(self__.map_LT_,self__.f,self__.ch,self__.meta16533,self__._,self__.fn1,meta16536__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async16535.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_16537){
var self__ = this;
var _16537__$1 = this;
return self__.meta16536;
});})(___$1))
;

cljs.core.async.t_cljs$core$async16535.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async16535.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async16535.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async16535.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__16523_SHARP_){
var G__16538 = (((p1__16523_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__16523_SHARP_) : self__.f.call(null,p1__16523_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__16538) : f1.call(null,G__16538));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async16535.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$map_LT_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Deprecated - this function will be removed. Use transducer instead"], null)),cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta16533,cljs.core.with_meta(cljs.core.cst$sym$_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core$async_SLASH_t_cljs$core$async16532], null)),cljs.core.cst$sym$fn1,cljs.core.cst$sym$meta16536], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async16535.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16535.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16535";

cljs.core.async.t_cljs$core$async16535.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__7146__auto__,writer__7147__auto__,opt__7148__auto__){
return cljs.core._write(writer__7147__auto__,"cljs.core.async/t_cljs$core$async16535");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async16535 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async16535(map_LT___$1,f__$1,ch__$1,meta16533__$1,___$2,fn1__$1,meta16536){
return (new cljs.core.async.t_cljs$core$async16535(map_LT___$1,f__$1,ch__$1,meta16533__$1,___$2,fn1__$1,meta16536));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async16535(self__.map_LT_,self__.f,self__.ch,self__.meta16533,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__6528__auto__ = ret;
if(cljs.core.truth_(and__6528__auto__)){
return !(((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret)) == null));
} else {
return and__6528__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__16539 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__16539) : self__.f.call(null,G__16539));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async16532.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async16532.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async16532.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$map_LT_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Deprecated - this function will be removed. Use transducer instead"], null)),cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta16533], null);
});

cljs.core.async.t_cljs$core$async16532.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16532.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16532";

cljs.core.async.t_cljs$core$async16532.cljs$lang$ctorPrWriter = (function (this__7146__auto__,writer__7147__auto__,opt__7148__auto__){
return cljs.core._write(writer__7147__auto__,"cljs.core.async/t_cljs$core$async16532");
});

cljs.core.async.__GT_t_cljs$core$async16532 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async16532(map_LT___$1,f__$1,ch__$1,meta16533){
return (new cljs.core.async.t_cljs$core$async16532(map_LT___$1,f__$1,ch__$1,meta16533));
});

}

return (new cljs.core.async.t_cljs$core$async16532(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async16543 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16543 = (function (map_GT_,f,ch,meta16544){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta16544 = meta16544;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async16543.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16545,meta16544__$1){
var self__ = this;
var _16545__$1 = this;
return (new cljs.core.async.t_cljs$core$async16543(self__.map_GT_,self__.f,self__.ch,meta16544__$1));
});

cljs.core.async.t_cljs$core$async16543.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16545){
var self__ = this;
var _16545__$1 = this;
return self__.meta16544;
});

cljs.core.async.t_cljs$core$async16543.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async16543.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async16543.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async16543.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async16543.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async16543.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async16543.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$map_GT_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Deprecated - this function will be removed. Use transducer instead"], null)),cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta16544], null);
});

cljs.core.async.t_cljs$core$async16543.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16543.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16543";

cljs.core.async.t_cljs$core$async16543.cljs$lang$ctorPrWriter = (function (this__7146__auto__,writer__7147__auto__,opt__7148__auto__){
return cljs.core._write(writer__7147__auto__,"cljs.core.async/t_cljs$core$async16543");
});

cljs.core.async.__GT_t_cljs$core$async16543 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async16543(map_GT___$1,f__$1,ch__$1,meta16544){
return (new cljs.core.async.t_cljs$core$async16543(map_GT___$1,f__$1,ch__$1,meta16544));
});

}

return (new cljs.core.async.t_cljs$core$async16543(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async16549 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16549 = (function (filter_GT_,p,ch,meta16550){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta16550 = meta16550;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async16549.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16551,meta16550__$1){
var self__ = this;
var _16551__$1 = this;
return (new cljs.core.async.t_cljs$core$async16549(self__.filter_GT_,self__.p,self__.ch,meta16550__$1));
});

cljs.core.async.t_cljs$core$async16549.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16551){
var self__ = this;
var _16551__$1 = this;
return self__.meta16550;
});

cljs.core.async.t_cljs$core$async16549.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async16549.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async16549.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async16549.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async16549.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async16549.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async16549.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async16549.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$filter_GT_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p,cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Deprecated - this function will be removed. Use transducer instead"], null)),cljs.core.cst$sym$p,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta16550], null);
});

cljs.core.async.t_cljs$core$async16549.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16549.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16549";

cljs.core.async.t_cljs$core$async16549.cljs$lang$ctorPrWriter = (function (this__7146__auto__,writer__7147__auto__,opt__7148__auto__){
return cljs.core._write(writer__7147__auto__,"cljs.core.async/t_cljs$core$async16549");
});

cljs.core.async.__GT_t_cljs$core$async16549 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async16549(filter_GT___$1,p__$1,ch__$1,meta16550){
return (new cljs.core.async.t_cljs$core$async16549(filter_GT___$1,p__$1,ch__$1,meta16550));
});

}

return (new cljs.core.async.t_cljs$core$async16549(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args16552 = [];
var len__7609__auto___16596 = arguments.length;
var i__7610__auto___16597 = (0);
while(true){
if((i__7610__auto___16597 < len__7609__auto___16596)){
args16552.push((arguments[i__7610__auto___16597]));

var G__16598 = (i__7610__auto___16597 + (1));
i__7610__auto___16597 = G__16598;
continue;
} else {
}
break;
}

var G__16554 = args16552.length;
switch (G__16554) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16552.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14323__auto___16600 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14323__auto___16600,out){
return (function (){
var f__14324__auto__ = (function (){var switch__14209__auto__ = ((function (c__14323__auto___16600,out){
return (function (state_16575){
var state_val_16576 = (state_16575[(1)]);
if((state_val_16576 === (7))){
var inst_16571 = (state_16575[(2)]);
var state_16575__$1 = state_16575;
var statearr_16577_16601 = state_16575__$1;
(statearr_16577_16601[(2)] = inst_16571);

(statearr_16577_16601[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16576 === (1))){
var state_16575__$1 = state_16575;
var statearr_16578_16602 = state_16575__$1;
(statearr_16578_16602[(2)] = null);

(statearr_16578_16602[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16576 === (4))){
var inst_16557 = (state_16575[(7)]);
var inst_16557__$1 = (state_16575[(2)]);
var inst_16558 = (inst_16557__$1 == null);
var state_16575__$1 = (function (){var statearr_16579 = state_16575;
(statearr_16579[(7)] = inst_16557__$1);

return statearr_16579;
})();
if(cljs.core.truth_(inst_16558)){
var statearr_16580_16603 = state_16575__$1;
(statearr_16580_16603[(1)] = (5));

} else {
var statearr_16581_16604 = state_16575__$1;
(statearr_16581_16604[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16576 === (6))){
var inst_16557 = (state_16575[(7)]);
var inst_16562 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_16557) : p.call(null,inst_16557));
var state_16575__$1 = state_16575;
if(cljs.core.truth_(inst_16562)){
var statearr_16582_16605 = state_16575__$1;
(statearr_16582_16605[(1)] = (8));

} else {
var statearr_16583_16606 = state_16575__$1;
(statearr_16583_16606[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16576 === (3))){
var inst_16573 = (state_16575[(2)]);
var state_16575__$1 = state_16575;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16575__$1,inst_16573);
} else {
if((state_val_16576 === (2))){
var state_16575__$1 = state_16575;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16575__$1,(4),ch);
} else {
if((state_val_16576 === (11))){
var inst_16565 = (state_16575[(2)]);
var state_16575__$1 = state_16575;
var statearr_16584_16607 = state_16575__$1;
(statearr_16584_16607[(2)] = inst_16565);

(statearr_16584_16607[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16576 === (9))){
var state_16575__$1 = state_16575;
var statearr_16585_16608 = state_16575__$1;
(statearr_16585_16608[(2)] = null);

(statearr_16585_16608[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16576 === (5))){
var inst_16560 = cljs.core.async.close_BANG_(out);
var state_16575__$1 = state_16575;
var statearr_16586_16609 = state_16575__$1;
(statearr_16586_16609[(2)] = inst_16560);

(statearr_16586_16609[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16576 === (10))){
var inst_16568 = (state_16575[(2)]);
var state_16575__$1 = (function (){var statearr_16587 = state_16575;
(statearr_16587[(8)] = inst_16568);

return statearr_16587;
})();
var statearr_16588_16610 = state_16575__$1;
(statearr_16588_16610[(2)] = null);

(statearr_16588_16610[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16576 === (8))){
var inst_16557 = (state_16575[(7)]);
var state_16575__$1 = state_16575;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16575__$1,(11),out,inst_16557);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__14323__auto___16600,out))
;
return ((function (switch__14209__auto__,c__14323__auto___16600,out){
return (function() {
var cljs$core$async$state_machine__14210__auto__ = null;
var cljs$core$async$state_machine__14210__auto____0 = (function (){
var statearr_16592 = [null,null,null,null,null,null,null,null,null];
(statearr_16592[(0)] = cljs$core$async$state_machine__14210__auto__);

(statearr_16592[(1)] = (1));

return statearr_16592;
});
var cljs$core$async$state_machine__14210__auto____1 = (function (state_16575){
while(true){
var ret_value__14211__auto__ = (function (){try{while(true){
var result__14212__auto__ = switch__14209__auto__(state_16575);
if(cljs.core.keyword_identical_QMARK_(result__14212__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14212__auto__;
}
break;
}
}catch (e16593){if((e16593 instanceof Object)){
var ex__14213__auto__ = e16593;
var statearr_16594_16611 = state_16575;
(statearr_16594_16611[(5)] = ex__14213__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16575);

return cljs.core.cst$kw$recur;
} else {
throw e16593;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14211__auto__,cljs.core.cst$kw$recur)){
var G__16612 = state_16575;
state_16575 = G__16612;
continue;
} else {
return ret_value__14211__auto__;
}
break;
}
});
cljs$core$async$state_machine__14210__auto__ = function(state_16575){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14210__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14210__auto____1.call(this,state_16575);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14210__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14210__auto____0;
cljs$core$async$state_machine__14210__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14210__auto____1;
return cljs$core$async$state_machine__14210__auto__;
})()
;})(switch__14209__auto__,c__14323__auto___16600,out))
})();
var state__14325__auto__ = (function (){var statearr_16595 = (f__14324__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14324__auto__.cljs$core$IFn$_invoke$arity$0() : f__14324__auto__.call(null));
(statearr_16595[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14323__auto___16600);

return statearr_16595;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14325__auto__);
});})(c__14323__auto___16600,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args16613 = [];
var len__7609__auto___16616 = arguments.length;
var i__7610__auto___16617 = (0);
while(true){
if((i__7610__auto___16617 < len__7609__auto___16616)){
args16613.push((arguments[i__7610__auto___16617]));

var G__16618 = (i__7610__auto___16617 + (1));
i__7610__auto___16617 = G__16618;
continue;
} else {
}
break;
}

var G__16615 = args16613.length;
switch (G__16615) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16613.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__14323__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14323__auto__){
return (function (){
var f__14324__auto__ = (function (){var switch__14209__auto__ = ((function (c__14323__auto__){
return (function (state_16785){
var state_val_16786 = (state_16785[(1)]);
if((state_val_16786 === (7))){
var inst_16781 = (state_16785[(2)]);
var state_16785__$1 = state_16785;
var statearr_16787_16828 = state_16785__$1;
(statearr_16787_16828[(2)] = inst_16781);

(statearr_16787_16828[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16786 === (20))){
var inst_16751 = (state_16785[(7)]);
var inst_16762 = (state_16785[(2)]);
var inst_16763 = cljs.core.next(inst_16751);
var inst_16737 = inst_16763;
var inst_16738 = null;
var inst_16739 = (0);
var inst_16740 = (0);
var state_16785__$1 = (function (){var statearr_16788 = state_16785;
(statearr_16788[(8)] = inst_16737);

(statearr_16788[(9)] = inst_16740);

(statearr_16788[(10)] = inst_16762);

(statearr_16788[(11)] = inst_16739);

(statearr_16788[(12)] = inst_16738);

return statearr_16788;
})();
var statearr_16789_16829 = state_16785__$1;
(statearr_16789_16829[(2)] = null);

(statearr_16789_16829[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16786 === (1))){
var state_16785__$1 = state_16785;
var statearr_16790_16830 = state_16785__$1;
(statearr_16790_16830[(2)] = null);

(statearr_16790_16830[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16786 === (4))){
var inst_16726 = (state_16785[(13)]);
var inst_16726__$1 = (state_16785[(2)]);
var inst_16727 = (inst_16726__$1 == null);
var state_16785__$1 = (function (){var statearr_16791 = state_16785;
(statearr_16791[(13)] = inst_16726__$1);

return statearr_16791;
})();
if(cljs.core.truth_(inst_16727)){
var statearr_16792_16831 = state_16785__$1;
(statearr_16792_16831[(1)] = (5));

} else {
var statearr_16793_16832 = state_16785__$1;
(statearr_16793_16832[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16786 === (15))){
var state_16785__$1 = state_16785;
var statearr_16797_16833 = state_16785__$1;
(statearr_16797_16833[(2)] = null);

(statearr_16797_16833[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16786 === (21))){
var state_16785__$1 = state_16785;
var statearr_16798_16834 = state_16785__$1;
(statearr_16798_16834[(2)] = null);

(statearr_16798_16834[(1)] = (23));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16786 === (13))){
var inst_16737 = (state_16785[(8)]);
var inst_16740 = (state_16785[(9)]);
var inst_16739 = (state_16785[(11)]);
var inst_16738 = (state_16785[(12)]);
var inst_16747 = (state_16785[(2)]);
var inst_16748 = (inst_16740 + (1));
var tmp16794 = inst_16737;
var tmp16795 = inst_16739;
var tmp16796 = inst_16738;
var inst_16737__$1 = tmp16794;
var inst_16738__$1 = tmp16796;
var inst_16739__$1 = tmp16795;
var inst_16740__$1 = inst_16748;
var state_16785__$1 = (function (){var statearr_16799 = state_16785;
(statearr_16799[(8)] = inst_16737__$1);

(statearr_16799[(9)] = inst_16740__$1);

(statearr_16799[(11)] = inst_16739__$1);

(statearr_16799[(14)] = inst_16747);

(statearr_16799[(12)] = inst_16738__$1);

return statearr_16799;
})();
var statearr_16800_16835 = state_16785__$1;
(statearr_16800_16835[(2)] = null);

(statearr_16800_16835[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16786 === (22))){
var state_16785__$1 = state_16785;
var statearr_16801_16836 = state_16785__$1;
(statearr_16801_16836[(2)] = null);

(statearr_16801_16836[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16786 === (6))){
var inst_16726 = (state_16785[(13)]);
var inst_16735 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_16726) : f.call(null,inst_16726));
var inst_16736 = cljs.core.seq(inst_16735);
var inst_16737 = inst_16736;
var inst_16738 = null;
var inst_16739 = (0);
var inst_16740 = (0);
var state_16785__$1 = (function (){var statearr_16802 = state_16785;
(statearr_16802[(8)] = inst_16737);

(statearr_16802[(9)] = inst_16740);

(statearr_16802[(11)] = inst_16739);

(statearr_16802[(12)] = inst_16738);

return statearr_16802;
})();
var statearr_16803_16837 = state_16785__$1;
(statearr_16803_16837[(2)] = null);

(statearr_16803_16837[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16786 === (17))){
var inst_16751 = (state_16785[(7)]);
var inst_16755 = cljs.core.chunk_first(inst_16751);
var inst_16756 = cljs.core.chunk_rest(inst_16751);
var inst_16757 = cljs.core.count(inst_16755);
var inst_16737 = inst_16756;
var inst_16738 = inst_16755;
var inst_16739 = inst_16757;
var inst_16740 = (0);
var state_16785__$1 = (function (){var statearr_16804 = state_16785;
(statearr_16804[(8)] = inst_16737);

(statearr_16804[(9)] = inst_16740);

(statearr_16804[(11)] = inst_16739);

(statearr_16804[(12)] = inst_16738);

return statearr_16804;
})();
var statearr_16805_16838 = state_16785__$1;
(statearr_16805_16838[(2)] = null);

(statearr_16805_16838[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16786 === (3))){
var inst_16783 = (state_16785[(2)]);
var state_16785__$1 = state_16785;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16785__$1,inst_16783);
} else {
if((state_val_16786 === (12))){
var inst_16771 = (state_16785[(2)]);
var state_16785__$1 = state_16785;
var statearr_16806_16839 = state_16785__$1;
(statearr_16806_16839[(2)] = inst_16771);

(statearr_16806_16839[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16786 === (2))){
var state_16785__$1 = state_16785;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16785__$1,(4),in$);
} else {
if((state_val_16786 === (23))){
var inst_16779 = (state_16785[(2)]);
var state_16785__$1 = state_16785;
var statearr_16807_16840 = state_16785__$1;
(statearr_16807_16840[(2)] = inst_16779);

(statearr_16807_16840[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16786 === (19))){
var inst_16766 = (state_16785[(2)]);
var state_16785__$1 = state_16785;
var statearr_16808_16841 = state_16785__$1;
(statearr_16808_16841[(2)] = inst_16766);

(statearr_16808_16841[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16786 === (11))){
var inst_16737 = (state_16785[(8)]);
var inst_16751 = (state_16785[(7)]);
var inst_16751__$1 = cljs.core.seq(inst_16737);
var state_16785__$1 = (function (){var statearr_16809 = state_16785;
(statearr_16809[(7)] = inst_16751__$1);

return statearr_16809;
})();
if(inst_16751__$1){
var statearr_16810_16842 = state_16785__$1;
(statearr_16810_16842[(1)] = (14));

} else {
var statearr_16811_16843 = state_16785__$1;
(statearr_16811_16843[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16786 === (9))){
var inst_16773 = (state_16785[(2)]);
var inst_16774 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_16785__$1 = (function (){var statearr_16812 = state_16785;
(statearr_16812[(15)] = inst_16773);

return statearr_16812;
})();
if(cljs.core.truth_(inst_16774)){
var statearr_16813_16844 = state_16785__$1;
(statearr_16813_16844[(1)] = (21));

} else {
var statearr_16814_16845 = state_16785__$1;
(statearr_16814_16845[(1)] = (22));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16786 === (5))){
var inst_16729 = cljs.core.async.close_BANG_(out);
var state_16785__$1 = state_16785;
var statearr_16815_16846 = state_16785__$1;
(statearr_16815_16846[(2)] = inst_16729);

(statearr_16815_16846[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16786 === (14))){
var inst_16751 = (state_16785[(7)]);
var inst_16753 = cljs.core.chunked_seq_QMARK_(inst_16751);
var state_16785__$1 = state_16785;
if(inst_16753){
var statearr_16816_16847 = state_16785__$1;
(statearr_16816_16847[(1)] = (17));

} else {
var statearr_16817_16848 = state_16785__$1;
(statearr_16817_16848[(1)] = (18));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16786 === (16))){
var inst_16769 = (state_16785[(2)]);
var state_16785__$1 = state_16785;
var statearr_16818_16849 = state_16785__$1;
(statearr_16818_16849[(2)] = inst_16769);

(statearr_16818_16849[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16786 === (10))){
var inst_16740 = (state_16785[(9)]);
var inst_16738 = (state_16785[(12)]);
var inst_16745 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_16738,inst_16740);
var state_16785__$1 = state_16785;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16785__$1,(13),out,inst_16745);
} else {
if((state_val_16786 === (18))){
var inst_16751 = (state_16785[(7)]);
var inst_16760 = cljs.core.first(inst_16751);
var state_16785__$1 = state_16785;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16785__$1,(20),out,inst_16760);
} else {
if((state_val_16786 === (8))){
var inst_16740 = (state_16785[(9)]);
var inst_16739 = (state_16785[(11)]);
var inst_16742 = (inst_16740 < inst_16739);
var inst_16743 = inst_16742;
var state_16785__$1 = state_16785;
if(cljs.core.truth_(inst_16743)){
var statearr_16819_16850 = state_16785__$1;
(statearr_16819_16850[(1)] = (10));

} else {
var statearr_16820_16851 = state_16785__$1;
(statearr_16820_16851[(1)] = (11));

}

return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__14323__auto__))
;
return ((function (switch__14209__auto__,c__14323__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__14210__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__14210__auto____0 = (function (){
var statearr_16824 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16824[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__14210__auto__);

(statearr_16824[(1)] = (1));

return statearr_16824;
});
var cljs$core$async$mapcat_STAR__$_state_machine__14210__auto____1 = (function (state_16785){
while(true){
var ret_value__14211__auto__ = (function (){try{while(true){
var result__14212__auto__ = switch__14209__auto__(state_16785);
if(cljs.core.keyword_identical_QMARK_(result__14212__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14212__auto__;
}
break;
}
}catch (e16825){if((e16825 instanceof Object)){
var ex__14213__auto__ = e16825;
var statearr_16826_16852 = state_16785;
(statearr_16826_16852[(5)] = ex__14213__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16785);

return cljs.core.cst$kw$recur;
} else {
throw e16825;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14211__auto__,cljs.core.cst$kw$recur)){
var G__16853 = state_16785;
state_16785 = G__16853;
continue;
} else {
return ret_value__14211__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__14210__auto__ = function(state_16785){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__14210__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__14210__auto____1.call(this,state_16785);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__14210__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__14210__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__14210__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__14210__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__14210__auto__;
})()
;})(switch__14209__auto__,c__14323__auto__))
})();
var state__14325__auto__ = (function (){var statearr_16827 = (f__14324__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14324__auto__.cljs$core$IFn$_invoke$arity$0() : f__14324__auto__.call(null));
(statearr_16827[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14323__auto__);

return statearr_16827;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14325__auto__);
});})(c__14323__auto__))
);

return c__14323__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args16854 = [];
var len__7609__auto___16857 = arguments.length;
var i__7610__auto___16858 = (0);
while(true){
if((i__7610__auto___16858 < len__7609__auto___16857)){
args16854.push((arguments[i__7610__auto___16858]));

var G__16859 = (i__7610__auto___16858 + (1));
i__7610__auto___16858 = G__16859;
continue;
} else {
}
break;
}

var G__16856 = args16854.length;
switch (G__16856) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16854.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args16861 = [];
var len__7609__auto___16864 = arguments.length;
var i__7610__auto___16865 = (0);
while(true){
if((i__7610__auto___16865 < len__7609__auto___16864)){
args16861.push((arguments[i__7610__auto___16865]));

var G__16866 = (i__7610__auto___16865 + (1));
i__7610__auto___16865 = G__16866;
continue;
} else {
}
break;
}

var G__16863 = args16861.length;
switch (G__16863) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16861.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args16868 = [];
var len__7609__auto___16919 = arguments.length;
var i__7610__auto___16920 = (0);
while(true){
if((i__7610__auto___16920 < len__7609__auto___16919)){
args16868.push((arguments[i__7610__auto___16920]));

var G__16921 = (i__7610__auto___16920 + (1));
i__7610__auto___16920 = G__16921;
continue;
} else {
}
break;
}

var G__16870 = args16868.length;
switch (G__16870) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16868.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14323__auto___16923 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14323__auto___16923,out){
return (function (){
var f__14324__auto__ = (function (){var switch__14209__auto__ = ((function (c__14323__auto___16923,out){
return (function (state_16894){
var state_val_16895 = (state_16894[(1)]);
if((state_val_16895 === (7))){
var inst_16889 = (state_16894[(2)]);
var state_16894__$1 = state_16894;
var statearr_16896_16924 = state_16894__$1;
(statearr_16896_16924[(2)] = inst_16889);

(statearr_16896_16924[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16895 === (1))){
var inst_16871 = null;
var state_16894__$1 = (function (){var statearr_16897 = state_16894;
(statearr_16897[(7)] = inst_16871);

return statearr_16897;
})();
var statearr_16898_16925 = state_16894__$1;
(statearr_16898_16925[(2)] = null);

(statearr_16898_16925[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16895 === (4))){
var inst_16874 = (state_16894[(8)]);
var inst_16874__$1 = (state_16894[(2)]);
var inst_16875 = (inst_16874__$1 == null);
var inst_16876 = cljs.core.not(inst_16875);
var state_16894__$1 = (function (){var statearr_16899 = state_16894;
(statearr_16899[(8)] = inst_16874__$1);

return statearr_16899;
})();
if(inst_16876){
var statearr_16900_16926 = state_16894__$1;
(statearr_16900_16926[(1)] = (5));

} else {
var statearr_16901_16927 = state_16894__$1;
(statearr_16901_16927[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16895 === (6))){
var state_16894__$1 = state_16894;
var statearr_16902_16928 = state_16894__$1;
(statearr_16902_16928[(2)] = null);

(statearr_16902_16928[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16895 === (3))){
var inst_16891 = (state_16894[(2)]);
var inst_16892 = cljs.core.async.close_BANG_(out);
var state_16894__$1 = (function (){var statearr_16903 = state_16894;
(statearr_16903[(9)] = inst_16891);

return statearr_16903;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_16894__$1,inst_16892);
} else {
if((state_val_16895 === (2))){
var state_16894__$1 = state_16894;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16894__$1,(4),ch);
} else {
if((state_val_16895 === (11))){
var inst_16874 = (state_16894[(8)]);
var inst_16883 = (state_16894[(2)]);
var inst_16871 = inst_16874;
var state_16894__$1 = (function (){var statearr_16904 = state_16894;
(statearr_16904[(7)] = inst_16871);

(statearr_16904[(10)] = inst_16883);

return statearr_16904;
})();
var statearr_16905_16929 = state_16894__$1;
(statearr_16905_16929[(2)] = null);

(statearr_16905_16929[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16895 === (9))){
var inst_16874 = (state_16894[(8)]);
var state_16894__$1 = state_16894;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16894__$1,(11),out,inst_16874);
} else {
if((state_val_16895 === (5))){
var inst_16871 = (state_16894[(7)]);
var inst_16874 = (state_16894[(8)]);
var inst_16878 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_16874,inst_16871);
var state_16894__$1 = state_16894;
if(inst_16878){
var statearr_16907_16930 = state_16894__$1;
(statearr_16907_16930[(1)] = (8));

} else {
var statearr_16908_16931 = state_16894__$1;
(statearr_16908_16931[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16895 === (10))){
var inst_16886 = (state_16894[(2)]);
var state_16894__$1 = state_16894;
var statearr_16909_16932 = state_16894__$1;
(statearr_16909_16932[(2)] = inst_16886);

(statearr_16909_16932[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16895 === (8))){
var inst_16871 = (state_16894[(7)]);
var tmp16906 = inst_16871;
var inst_16871__$1 = tmp16906;
var state_16894__$1 = (function (){var statearr_16910 = state_16894;
(statearr_16910[(7)] = inst_16871__$1);

return statearr_16910;
})();
var statearr_16911_16933 = state_16894__$1;
(statearr_16911_16933[(2)] = null);

(statearr_16911_16933[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__14323__auto___16923,out))
;
return ((function (switch__14209__auto__,c__14323__auto___16923,out){
return (function() {
var cljs$core$async$state_machine__14210__auto__ = null;
var cljs$core$async$state_machine__14210__auto____0 = (function (){
var statearr_16915 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_16915[(0)] = cljs$core$async$state_machine__14210__auto__);

(statearr_16915[(1)] = (1));

return statearr_16915;
});
var cljs$core$async$state_machine__14210__auto____1 = (function (state_16894){
while(true){
var ret_value__14211__auto__ = (function (){try{while(true){
var result__14212__auto__ = switch__14209__auto__(state_16894);
if(cljs.core.keyword_identical_QMARK_(result__14212__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14212__auto__;
}
break;
}
}catch (e16916){if((e16916 instanceof Object)){
var ex__14213__auto__ = e16916;
var statearr_16917_16934 = state_16894;
(statearr_16917_16934[(5)] = ex__14213__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16894);

return cljs.core.cst$kw$recur;
} else {
throw e16916;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14211__auto__,cljs.core.cst$kw$recur)){
var G__16935 = state_16894;
state_16894 = G__16935;
continue;
} else {
return ret_value__14211__auto__;
}
break;
}
});
cljs$core$async$state_machine__14210__auto__ = function(state_16894){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14210__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14210__auto____1.call(this,state_16894);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14210__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14210__auto____0;
cljs$core$async$state_machine__14210__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14210__auto____1;
return cljs$core$async$state_machine__14210__auto__;
})()
;})(switch__14209__auto__,c__14323__auto___16923,out))
})();
var state__14325__auto__ = (function (){var statearr_16918 = (f__14324__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14324__auto__.cljs$core$IFn$_invoke$arity$0() : f__14324__auto__.call(null));
(statearr_16918[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14323__auto___16923);

return statearr_16918;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14325__auto__);
});})(c__14323__auto___16923,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args16936 = [];
var len__7609__auto___17006 = arguments.length;
var i__7610__auto___17007 = (0);
while(true){
if((i__7610__auto___17007 < len__7609__auto___17006)){
args16936.push((arguments[i__7610__auto___17007]));

var G__17008 = (i__7610__auto___17007 + (1));
i__7610__auto___17007 = G__17008;
continue;
} else {
}
break;
}

var G__16938 = args16936.length;
switch (G__16938) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16936.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14323__auto___17010 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14323__auto___17010,out){
return (function (){
var f__14324__auto__ = (function (){var switch__14209__auto__ = ((function (c__14323__auto___17010,out){
return (function (state_16976){
var state_val_16977 = (state_16976[(1)]);
if((state_val_16977 === (7))){
var inst_16972 = (state_16976[(2)]);
var state_16976__$1 = state_16976;
var statearr_16978_17011 = state_16976__$1;
(statearr_16978_17011[(2)] = inst_16972);

(statearr_16978_17011[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16977 === (1))){
var inst_16939 = (new Array(n));
var inst_16940 = inst_16939;
var inst_16941 = (0);
var state_16976__$1 = (function (){var statearr_16979 = state_16976;
(statearr_16979[(7)] = inst_16941);

(statearr_16979[(8)] = inst_16940);

return statearr_16979;
})();
var statearr_16980_17012 = state_16976__$1;
(statearr_16980_17012[(2)] = null);

(statearr_16980_17012[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16977 === (4))){
var inst_16944 = (state_16976[(9)]);
var inst_16944__$1 = (state_16976[(2)]);
var inst_16945 = (inst_16944__$1 == null);
var inst_16946 = cljs.core.not(inst_16945);
var state_16976__$1 = (function (){var statearr_16981 = state_16976;
(statearr_16981[(9)] = inst_16944__$1);

return statearr_16981;
})();
if(inst_16946){
var statearr_16982_17013 = state_16976__$1;
(statearr_16982_17013[(1)] = (5));

} else {
var statearr_16983_17014 = state_16976__$1;
(statearr_16983_17014[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16977 === (15))){
var inst_16966 = (state_16976[(2)]);
var state_16976__$1 = state_16976;
var statearr_16984_17015 = state_16976__$1;
(statearr_16984_17015[(2)] = inst_16966);

(statearr_16984_17015[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16977 === (13))){
var state_16976__$1 = state_16976;
var statearr_16985_17016 = state_16976__$1;
(statearr_16985_17016[(2)] = null);

(statearr_16985_17016[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16977 === (6))){
var inst_16941 = (state_16976[(7)]);
var inst_16962 = (inst_16941 > (0));
var state_16976__$1 = state_16976;
if(cljs.core.truth_(inst_16962)){
var statearr_16986_17017 = state_16976__$1;
(statearr_16986_17017[(1)] = (12));

} else {
var statearr_16987_17018 = state_16976__$1;
(statearr_16987_17018[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16977 === (3))){
var inst_16974 = (state_16976[(2)]);
var state_16976__$1 = state_16976;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16976__$1,inst_16974);
} else {
if((state_val_16977 === (12))){
var inst_16940 = (state_16976[(8)]);
var inst_16964 = cljs.core.vec(inst_16940);
var state_16976__$1 = state_16976;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16976__$1,(15),out,inst_16964);
} else {
if((state_val_16977 === (2))){
var state_16976__$1 = state_16976;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16976__$1,(4),ch);
} else {
if((state_val_16977 === (11))){
var inst_16956 = (state_16976[(2)]);
var inst_16957 = (new Array(n));
var inst_16940 = inst_16957;
var inst_16941 = (0);
var state_16976__$1 = (function (){var statearr_16988 = state_16976;
(statearr_16988[(7)] = inst_16941);

(statearr_16988[(8)] = inst_16940);

(statearr_16988[(10)] = inst_16956);

return statearr_16988;
})();
var statearr_16989_17019 = state_16976__$1;
(statearr_16989_17019[(2)] = null);

(statearr_16989_17019[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16977 === (9))){
var inst_16940 = (state_16976[(8)]);
var inst_16954 = cljs.core.vec(inst_16940);
var state_16976__$1 = state_16976;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16976__$1,(11),out,inst_16954);
} else {
if((state_val_16977 === (5))){
var inst_16944 = (state_16976[(9)]);
var inst_16941 = (state_16976[(7)]);
var inst_16940 = (state_16976[(8)]);
var inst_16949 = (state_16976[(11)]);
var inst_16948 = (inst_16940[inst_16941] = inst_16944);
var inst_16949__$1 = (inst_16941 + (1));
var inst_16950 = (inst_16949__$1 < n);
var state_16976__$1 = (function (){var statearr_16990 = state_16976;
(statearr_16990[(12)] = inst_16948);

(statearr_16990[(11)] = inst_16949__$1);

return statearr_16990;
})();
if(cljs.core.truth_(inst_16950)){
var statearr_16991_17020 = state_16976__$1;
(statearr_16991_17020[(1)] = (8));

} else {
var statearr_16992_17021 = state_16976__$1;
(statearr_16992_17021[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16977 === (14))){
var inst_16969 = (state_16976[(2)]);
var inst_16970 = cljs.core.async.close_BANG_(out);
var state_16976__$1 = (function (){var statearr_16994 = state_16976;
(statearr_16994[(13)] = inst_16969);

return statearr_16994;
})();
var statearr_16995_17022 = state_16976__$1;
(statearr_16995_17022[(2)] = inst_16970);

(statearr_16995_17022[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16977 === (10))){
var inst_16960 = (state_16976[(2)]);
var state_16976__$1 = state_16976;
var statearr_16996_17023 = state_16976__$1;
(statearr_16996_17023[(2)] = inst_16960);

(statearr_16996_17023[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16977 === (8))){
var inst_16940 = (state_16976[(8)]);
var inst_16949 = (state_16976[(11)]);
var tmp16993 = inst_16940;
var inst_16940__$1 = tmp16993;
var inst_16941 = inst_16949;
var state_16976__$1 = (function (){var statearr_16997 = state_16976;
(statearr_16997[(7)] = inst_16941);

(statearr_16997[(8)] = inst_16940__$1);

return statearr_16997;
})();
var statearr_16998_17024 = state_16976__$1;
(statearr_16998_17024[(2)] = null);

(statearr_16998_17024[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__14323__auto___17010,out))
;
return ((function (switch__14209__auto__,c__14323__auto___17010,out){
return (function() {
var cljs$core$async$state_machine__14210__auto__ = null;
var cljs$core$async$state_machine__14210__auto____0 = (function (){
var statearr_17002 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17002[(0)] = cljs$core$async$state_machine__14210__auto__);

(statearr_17002[(1)] = (1));

return statearr_17002;
});
var cljs$core$async$state_machine__14210__auto____1 = (function (state_16976){
while(true){
var ret_value__14211__auto__ = (function (){try{while(true){
var result__14212__auto__ = switch__14209__auto__(state_16976);
if(cljs.core.keyword_identical_QMARK_(result__14212__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14212__auto__;
}
break;
}
}catch (e17003){if((e17003 instanceof Object)){
var ex__14213__auto__ = e17003;
var statearr_17004_17025 = state_16976;
(statearr_17004_17025[(5)] = ex__14213__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16976);

return cljs.core.cst$kw$recur;
} else {
throw e17003;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14211__auto__,cljs.core.cst$kw$recur)){
var G__17026 = state_16976;
state_16976 = G__17026;
continue;
} else {
return ret_value__14211__auto__;
}
break;
}
});
cljs$core$async$state_machine__14210__auto__ = function(state_16976){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14210__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14210__auto____1.call(this,state_16976);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14210__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14210__auto____0;
cljs$core$async$state_machine__14210__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14210__auto____1;
return cljs$core$async$state_machine__14210__auto__;
})()
;})(switch__14209__auto__,c__14323__auto___17010,out))
})();
var state__14325__auto__ = (function (){var statearr_17005 = (f__14324__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14324__auto__.cljs$core$IFn$_invoke$arity$0() : f__14324__auto__.call(null));
(statearr_17005[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14323__auto___17010);

return statearr_17005;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14325__auto__);
});})(c__14323__auto___17010,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args17027 = [];
var len__7609__auto___17101 = arguments.length;
var i__7610__auto___17102 = (0);
while(true){
if((i__7610__auto___17102 < len__7609__auto___17101)){
args17027.push((arguments[i__7610__auto___17102]));

var G__17103 = (i__7610__auto___17102 + (1));
i__7610__auto___17102 = G__17103;
continue;
} else {
}
break;
}

var G__17029 = args17027.length;
switch (G__17029) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17027.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14323__auto___17105 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14323__auto___17105,out){
return (function (){
var f__14324__auto__ = (function (){var switch__14209__auto__ = ((function (c__14323__auto___17105,out){
return (function (state_17071){
var state_val_17072 = (state_17071[(1)]);
if((state_val_17072 === (7))){
var inst_17067 = (state_17071[(2)]);
var state_17071__$1 = state_17071;
var statearr_17073_17106 = state_17071__$1;
(statearr_17073_17106[(2)] = inst_17067);

(statearr_17073_17106[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17072 === (1))){
var inst_17030 = [];
var inst_17031 = inst_17030;
var inst_17032 = cljs.core.cst$kw$cljs$core$async_SLASH_nothing;
var state_17071__$1 = (function (){var statearr_17074 = state_17071;
(statearr_17074[(7)] = inst_17032);

(statearr_17074[(8)] = inst_17031);

return statearr_17074;
})();
var statearr_17075_17107 = state_17071__$1;
(statearr_17075_17107[(2)] = null);

(statearr_17075_17107[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17072 === (4))){
var inst_17035 = (state_17071[(9)]);
var inst_17035__$1 = (state_17071[(2)]);
var inst_17036 = (inst_17035__$1 == null);
var inst_17037 = cljs.core.not(inst_17036);
var state_17071__$1 = (function (){var statearr_17076 = state_17071;
(statearr_17076[(9)] = inst_17035__$1);

return statearr_17076;
})();
if(inst_17037){
var statearr_17077_17108 = state_17071__$1;
(statearr_17077_17108[(1)] = (5));

} else {
var statearr_17078_17109 = state_17071__$1;
(statearr_17078_17109[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17072 === (15))){
var inst_17061 = (state_17071[(2)]);
var state_17071__$1 = state_17071;
var statearr_17079_17110 = state_17071__$1;
(statearr_17079_17110[(2)] = inst_17061);

(statearr_17079_17110[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17072 === (13))){
var state_17071__$1 = state_17071;
var statearr_17080_17111 = state_17071__$1;
(statearr_17080_17111[(2)] = null);

(statearr_17080_17111[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17072 === (6))){
var inst_17031 = (state_17071[(8)]);
var inst_17056 = inst_17031.length;
var inst_17057 = (inst_17056 > (0));
var state_17071__$1 = state_17071;
if(cljs.core.truth_(inst_17057)){
var statearr_17081_17112 = state_17071__$1;
(statearr_17081_17112[(1)] = (12));

} else {
var statearr_17082_17113 = state_17071__$1;
(statearr_17082_17113[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17072 === (3))){
var inst_17069 = (state_17071[(2)]);
var state_17071__$1 = state_17071;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17071__$1,inst_17069);
} else {
if((state_val_17072 === (12))){
var inst_17031 = (state_17071[(8)]);
var inst_17059 = cljs.core.vec(inst_17031);
var state_17071__$1 = state_17071;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17071__$1,(15),out,inst_17059);
} else {
if((state_val_17072 === (2))){
var state_17071__$1 = state_17071;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17071__$1,(4),ch);
} else {
if((state_val_17072 === (11))){
var inst_17039 = (state_17071[(10)]);
var inst_17035 = (state_17071[(9)]);
var inst_17049 = (state_17071[(2)]);
var inst_17050 = [];
var inst_17051 = inst_17050.push(inst_17035);
var inst_17031 = inst_17050;
var inst_17032 = inst_17039;
var state_17071__$1 = (function (){var statearr_17083 = state_17071;
(statearr_17083[(7)] = inst_17032);

(statearr_17083[(8)] = inst_17031);

(statearr_17083[(11)] = inst_17049);

(statearr_17083[(12)] = inst_17051);

return statearr_17083;
})();
var statearr_17084_17114 = state_17071__$1;
(statearr_17084_17114[(2)] = null);

(statearr_17084_17114[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17072 === (9))){
var inst_17031 = (state_17071[(8)]);
var inst_17047 = cljs.core.vec(inst_17031);
var state_17071__$1 = state_17071;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17071__$1,(11),out,inst_17047);
} else {
if((state_val_17072 === (5))){
var inst_17032 = (state_17071[(7)]);
var inst_17039 = (state_17071[(10)]);
var inst_17035 = (state_17071[(9)]);
var inst_17039__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_17035) : f.call(null,inst_17035));
var inst_17040 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17039__$1,inst_17032);
var inst_17041 = cljs.core.keyword_identical_QMARK_(inst_17032,cljs.core.cst$kw$cljs$core$async_SLASH_nothing);
var inst_17042 = (inst_17040) || (inst_17041);
var state_17071__$1 = (function (){var statearr_17085 = state_17071;
(statearr_17085[(10)] = inst_17039__$1);

return statearr_17085;
})();
if(cljs.core.truth_(inst_17042)){
var statearr_17086_17115 = state_17071__$1;
(statearr_17086_17115[(1)] = (8));

} else {
var statearr_17087_17116 = state_17071__$1;
(statearr_17087_17116[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17072 === (14))){
var inst_17064 = (state_17071[(2)]);
var inst_17065 = cljs.core.async.close_BANG_(out);
var state_17071__$1 = (function (){var statearr_17089 = state_17071;
(statearr_17089[(13)] = inst_17064);

return statearr_17089;
})();
var statearr_17090_17117 = state_17071__$1;
(statearr_17090_17117[(2)] = inst_17065);

(statearr_17090_17117[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17072 === (10))){
var inst_17054 = (state_17071[(2)]);
var state_17071__$1 = state_17071;
var statearr_17091_17118 = state_17071__$1;
(statearr_17091_17118[(2)] = inst_17054);

(statearr_17091_17118[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17072 === (8))){
var inst_17031 = (state_17071[(8)]);
var inst_17039 = (state_17071[(10)]);
var inst_17035 = (state_17071[(9)]);
var inst_17044 = inst_17031.push(inst_17035);
var tmp17088 = inst_17031;
var inst_17031__$1 = tmp17088;
var inst_17032 = inst_17039;
var state_17071__$1 = (function (){var statearr_17092 = state_17071;
(statearr_17092[(7)] = inst_17032);

(statearr_17092[(8)] = inst_17031__$1);

(statearr_17092[(14)] = inst_17044);

return statearr_17092;
})();
var statearr_17093_17119 = state_17071__$1;
(statearr_17093_17119[(2)] = null);

(statearr_17093_17119[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__14323__auto___17105,out))
;
return ((function (switch__14209__auto__,c__14323__auto___17105,out){
return (function() {
var cljs$core$async$state_machine__14210__auto__ = null;
var cljs$core$async$state_machine__14210__auto____0 = (function (){
var statearr_17097 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17097[(0)] = cljs$core$async$state_machine__14210__auto__);

(statearr_17097[(1)] = (1));

return statearr_17097;
});
var cljs$core$async$state_machine__14210__auto____1 = (function (state_17071){
while(true){
var ret_value__14211__auto__ = (function (){try{while(true){
var result__14212__auto__ = switch__14209__auto__(state_17071);
if(cljs.core.keyword_identical_QMARK_(result__14212__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14212__auto__;
}
break;
}
}catch (e17098){if((e17098 instanceof Object)){
var ex__14213__auto__ = e17098;
var statearr_17099_17120 = state_17071;
(statearr_17099_17120[(5)] = ex__14213__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17071);

return cljs.core.cst$kw$recur;
} else {
throw e17098;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14211__auto__,cljs.core.cst$kw$recur)){
var G__17121 = state_17071;
state_17071 = G__17121;
continue;
} else {
return ret_value__14211__auto__;
}
break;
}
});
cljs$core$async$state_machine__14210__auto__ = function(state_17071){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14210__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14210__auto____1.call(this,state_17071);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14210__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14210__auto____0;
cljs$core$async$state_machine__14210__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14210__auto____1;
return cljs$core$async$state_machine__14210__auto__;
})()
;})(switch__14209__auto__,c__14323__auto___17105,out))
})();
var state__14325__auto__ = (function (){var statearr_17100 = (f__14324__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14324__auto__.cljs$core$IFn$_invoke$arity$0() : f__14324__auto__.call(null));
(statearr_17100[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14323__auto___17105);

return statearr_17100;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14325__auto__);
});})(c__14323__auto___17105,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;
