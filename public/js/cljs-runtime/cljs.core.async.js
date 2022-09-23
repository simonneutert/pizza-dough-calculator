goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__17956 = arguments.length;
switch (G__17956) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17962 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17962 = (function (f,blockable,meta17963){
this.f = f;
this.blockable = blockable;
this.meta17963 = meta17963;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17962.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17964,meta17963__$1){
var self__ = this;
var _17964__$1 = this;
return (new cljs.core.async.t_cljs$core$async17962(self__.f,self__.blockable,meta17963__$1));
}));

(cljs.core.async.t_cljs$core$async17962.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17964){
var self__ = this;
var _17964__$1 = this;
return self__.meta17963;
}));

(cljs.core.async.t_cljs$core$async17962.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17962.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async17962.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async17962.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async17962.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta17963","meta17963",1991536021,null)], null);
}));

(cljs.core.async.t_cljs$core$async17962.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17962.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17962");

(cljs.core.async.t_cljs$core$async17962.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async17962");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17962.
 */
cljs.core.async.__GT_t_cljs$core$async17962 = (function cljs$core$async$__GT_t_cljs$core$async17962(f__$1,blockable__$1,meta17963){
return (new cljs.core.async.t_cljs$core$async17962(f__$1,blockable__$1,meta17963));
});

}

return (new cljs.core.async.t_cljs$core$async17962(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

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
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
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
var G__17987 = arguments.length;
switch (G__17987) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__17997 = arguments.length;
switch (G__17997) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

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
var G__18007 = arguments.length;
switch (G__18007) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_21258 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_21258) : fn1.call(null,val_21258));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_21258) : fn1.call(null,val_21258));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

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
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__18014 = arguments.length;
switch (G__18014) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5636__auto___21263 = n;
var x_21264 = (0);
while(true){
if((x_21264 < n__5636__auto___21263)){
(a[x_21264] = x_21264);

var G__21265 = (x_21264 + (1));
x_21264 = G__21265;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18031 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18031 = (function (flag,meta18032){
this.flag = flag;
this.meta18032 = meta18032;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18031.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18033,meta18032__$1){
var self__ = this;
var _18033__$1 = this;
return (new cljs.core.async.t_cljs$core$async18031(self__.flag,meta18032__$1));
}));

(cljs.core.async.t_cljs$core$async18031.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18033){
var self__ = this;
var _18033__$1 = this;
return self__.meta18032;
}));

(cljs.core.async.t_cljs$core$async18031.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18031.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async18031.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async18031.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async18031.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta18032","meta18032",1446708335,null)], null);
}));

(cljs.core.async.t_cljs$core$async18031.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18031.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18031");

(cljs.core.async.t_cljs$core$async18031.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async18031");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18031.
 */
cljs.core.async.__GT_t_cljs$core$async18031 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async18031(flag__$1,meta18032){
return (new cljs.core.async.t_cljs$core$async18031(flag__$1,meta18032));
});

}

return (new cljs.core.async.t_cljs$core$async18031(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18066 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18066 = (function (flag,cb,meta18067){
this.flag = flag;
this.cb = cb;
this.meta18067 = meta18067;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18066.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18068,meta18067__$1){
var self__ = this;
var _18068__$1 = this;
return (new cljs.core.async.t_cljs$core$async18066(self__.flag,self__.cb,meta18067__$1));
}));

(cljs.core.async.t_cljs$core$async18066.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18068){
var self__ = this;
var _18068__$1 = this;
return self__.meta18067;
}));

(cljs.core.async.t_cljs$core$async18066.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18066.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async18066.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async18066.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async18066.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta18067","meta18067",85612589,null)], null);
}));

(cljs.core.async.t_cljs$core$async18066.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18066.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18066");

(cljs.core.async.t_cljs$core$async18066.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async18066");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18066.
 */
cljs.core.async.__GT_t_cljs$core$async18066 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async18066(flag__$1,cb__$1,meta18067){
return (new cljs.core.async.t_cljs$core$async18066(flag__$1,cb__$1,meta18067));
});

}

return (new cljs.core.async.t_cljs$core$async18066(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__18090_SHARP_){
var G__18141 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__18090_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__18141) : fret.call(null,G__18141));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__18091_SHARP_){
var G__18142 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__18091_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__18142) : fret.call(null,G__18142));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5045__auto__ = wport;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return port;
}
})()], null));
} else {
var G__21282 = (i + (1));
i = G__21282;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5045__auto__ = ret;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__5043__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5043__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
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
var args__5775__auto__ = [];
var len__5769__auto___21286 = arguments.length;
var i__5770__auto___21287 = (0);
while(true){
if((i__5770__auto___21287 < len__5769__auto___21286)){
args__5775__auto__.push((arguments[i__5770__auto___21287]));

var G__21288 = (i__5770__auto___21287 + (1));
i__5770__auto___21287 = G__21288;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__18165){
var map__18166 = p__18165;
var map__18166__$1 = cljs.core.__destructure_map(map__18166);
var opts = map__18166__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq18146){
var G__18147 = cljs.core.first(seq18146);
var seq18146__$1 = cljs.core.next(seq18146);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18147,seq18146__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
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
return cljs.core.deref(ret);
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
var G__18183 = arguments.length;
switch (G__18183) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__17865__auto___21296 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17866__auto__ = (function (){var switch__17474__auto__ = (function (state_18220){
var state_val_18221 = (state_18220[(1)]);
if((state_val_18221 === (7))){
var inst_18216 = (state_18220[(2)]);
var state_18220__$1 = state_18220;
var statearr_18236_21302 = state_18220__$1;
(statearr_18236_21302[(2)] = inst_18216);

(statearr_18236_21302[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18221 === (1))){
var state_18220__$1 = state_18220;
var statearr_18238_21308 = state_18220__$1;
(statearr_18238_21308[(2)] = null);

(statearr_18238_21308[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18221 === (4))){
var inst_18190 = (state_18220[(7)]);
var inst_18190__$1 = (state_18220[(2)]);
var inst_18195 = (inst_18190__$1 == null);
var state_18220__$1 = (function (){var statearr_18239 = state_18220;
(statearr_18239[(7)] = inst_18190__$1);

return statearr_18239;
})();
if(cljs.core.truth_(inst_18195)){
var statearr_18240_21316 = state_18220__$1;
(statearr_18240_21316[(1)] = (5));

} else {
var statearr_18241_21318 = state_18220__$1;
(statearr_18241_21318[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18221 === (13))){
var state_18220__$1 = state_18220;
var statearr_18242_21319 = state_18220__$1;
(statearr_18242_21319[(2)] = null);

(statearr_18242_21319[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18221 === (6))){
var inst_18190 = (state_18220[(7)]);
var state_18220__$1 = state_18220;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18220__$1,(11),to,inst_18190);
} else {
if((state_val_18221 === (3))){
var inst_18218 = (state_18220[(2)]);
var state_18220__$1 = state_18220;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18220__$1,inst_18218);
} else {
if((state_val_18221 === (12))){
var state_18220__$1 = state_18220;
var statearr_18245_21320 = state_18220__$1;
(statearr_18245_21320[(2)] = null);

(statearr_18245_21320[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18221 === (2))){
var state_18220__$1 = state_18220;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18220__$1,(4),from);
} else {
if((state_val_18221 === (11))){
var inst_18204 = (state_18220[(2)]);
var state_18220__$1 = state_18220;
if(cljs.core.truth_(inst_18204)){
var statearr_18249_21321 = state_18220__$1;
(statearr_18249_21321[(1)] = (12));

} else {
var statearr_18250_21322 = state_18220__$1;
(statearr_18250_21322[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18221 === (9))){
var state_18220__$1 = state_18220;
var statearr_18251_21324 = state_18220__$1;
(statearr_18251_21324[(2)] = null);

(statearr_18251_21324[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18221 === (5))){
var state_18220__$1 = state_18220;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18252_21326 = state_18220__$1;
(statearr_18252_21326[(1)] = (8));

} else {
var statearr_18254_21327 = state_18220__$1;
(statearr_18254_21327[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18221 === (14))){
var inst_18214 = (state_18220[(2)]);
var state_18220__$1 = state_18220;
var statearr_18256_21330 = state_18220__$1;
(statearr_18256_21330[(2)] = inst_18214);

(statearr_18256_21330[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18221 === (10))){
var inst_18201 = (state_18220[(2)]);
var state_18220__$1 = state_18220;
var statearr_18257_21331 = state_18220__$1;
(statearr_18257_21331[(2)] = inst_18201);

(statearr_18257_21331[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18221 === (8))){
var inst_18198 = cljs.core.async.close_BANG_(to);
var state_18220__$1 = state_18220;
var statearr_18258_21332 = state_18220__$1;
(statearr_18258_21332[(2)] = inst_18198);

(statearr_18258_21332[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});
return (function() {
var cljs$core$async$state_machine__17475__auto__ = null;
var cljs$core$async$state_machine__17475__auto____0 = (function (){
var statearr_18260 = [null,null,null,null,null,null,null,null];
(statearr_18260[(0)] = cljs$core$async$state_machine__17475__auto__);

(statearr_18260[(1)] = (1));

return statearr_18260;
});
var cljs$core$async$state_machine__17475__auto____1 = (function (state_18220){
while(true){
var ret_value__17476__auto__ = (function (){try{while(true){
var result__17477__auto__ = switch__17474__auto__(state_18220);
if(cljs.core.keyword_identical_QMARK_(result__17477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17477__auto__;
}
break;
}
}catch (e18261){var ex__17478__auto__ = e18261;
var statearr_18262_21333 = state_18220;
(statearr_18262_21333[(2)] = ex__17478__auto__);


if(cljs.core.seq((state_18220[(4)]))){
var statearr_18263_21334 = state_18220;
(statearr_18263_21334[(1)] = cljs.core.first((state_18220[(4)])));

} else {
throw ex__17478__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21336 = state_18220;
state_18220 = G__21336;
continue;
} else {
return ret_value__17476__auto__;
}
break;
}
});
cljs$core$async$state_machine__17475__auto__ = function(state_18220){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17475__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17475__auto____1.call(this,state_18220);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17475__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17475__auto____0;
cljs$core$async$state_machine__17475__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17475__auto____1;
return cljs$core$async$state_machine__17475__auto__;
})()
})();
var state__17867__auto__ = (function (){var statearr_18264 = f__17866__auto__();
(statearr_18264[(6)] = c__17865__auto___21296);

return statearr_18264;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17867__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__18272){
var vec__18273 = p__18272;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18273,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18273,(1),null);
var job = vec__18273;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__17865__auto___21340 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17866__auto__ = (function (){var switch__17474__auto__ = (function (state_18286){
var state_val_18287 = (state_18286[(1)]);
if((state_val_18287 === (1))){
var state_18286__$1 = state_18286;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18286__$1,(2),res,v);
} else {
if((state_val_18287 === (2))){
var inst_18279 = (state_18286[(2)]);
var inst_18280 = cljs.core.async.close_BANG_(res);
var state_18286__$1 = (function (){var statearr_18289 = state_18286;
(statearr_18289[(7)] = inst_18279);

return statearr_18289;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_18286__$1,inst_18280);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17475__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17475__auto____0 = (function (){
var statearr_18290 = [null,null,null,null,null,null,null,null];
(statearr_18290[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17475__auto__);

(statearr_18290[(1)] = (1));

return statearr_18290;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17475__auto____1 = (function (state_18286){
while(true){
var ret_value__17476__auto__ = (function (){try{while(true){
var result__17477__auto__ = switch__17474__auto__(state_18286);
if(cljs.core.keyword_identical_QMARK_(result__17477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17477__auto__;
}
break;
}
}catch (e18294){var ex__17478__auto__ = e18294;
var statearr_18295_21343 = state_18286;
(statearr_18295_21343[(2)] = ex__17478__auto__);


if(cljs.core.seq((state_18286[(4)]))){
var statearr_18296_21344 = state_18286;
(statearr_18296_21344[(1)] = cljs.core.first((state_18286[(4)])));

} else {
throw ex__17478__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21347 = state_18286;
state_18286 = G__21347;
continue;
} else {
return ret_value__17476__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17475__auto__ = function(state_18286){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17475__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17475__auto____1.call(this,state_18286);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17475__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17475__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17475__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17475__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17475__auto__;
})()
})();
var state__17867__auto__ = (function (){var statearr_18297 = f__17866__auto__();
(statearr_18297[(6)] = c__17865__auto___21340);

return statearr_18297;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17867__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__18302){
var vec__18303 = p__18302;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18303,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18303,(1),null);
var job = vec__18303;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5636__auto___21349 = n;
var __21350 = (0);
while(true){
if((__21350 < n__5636__auto___21349)){
var G__18306_21351 = type;
var G__18306_21352__$1 = (((G__18306_21351 instanceof cljs.core.Keyword))?G__18306_21351.fqn:null);
switch (G__18306_21352__$1) {
case "compute":
var c__17865__auto___21354 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__21350,c__17865__auto___21354,G__18306_21351,G__18306_21352__$1,n__5636__auto___21349,jobs,results,process__$1,async){
return (function (){
var f__17866__auto__ = (function (){var switch__17474__auto__ = ((function (__21350,c__17865__auto___21354,G__18306_21351,G__18306_21352__$1,n__5636__auto___21349,jobs,results,process__$1,async){
return (function (state_18319){
var state_val_18320 = (state_18319[(1)]);
if((state_val_18320 === (1))){
var state_18319__$1 = state_18319;
var statearr_18322_21359 = state_18319__$1;
(statearr_18322_21359[(2)] = null);

(statearr_18322_21359[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18320 === (2))){
var state_18319__$1 = state_18319;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18319__$1,(4),jobs);
} else {
if((state_val_18320 === (3))){
var inst_18317 = (state_18319[(2)]);
var state_18319__$1 = state_18319;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18319__$1,inst_18317);
} else {
if((state_val_18320 === (4))){
var inst_18309 = (state_18319[(2)]);
var inst_18310 = process__$1(inst_18309);
var state_18319__$1 = state_18319;
if(cljs.core.truth_(inst_18310)){
var statearr_18326_21360 = state_18319__$1;
(statearr_18326_21360[(1)] = (5));

} else {
var statearr_18327_21365 = state_18319__$1;
(statearr_18327_21365[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18320 === (5))){
var state_18319__$1 = state_18319;
var statearr_18328_21369 = state_18319__$1;
(statearr_18328_21369[(2)] = null);

(statearr_18328_21369[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18320 === (6))){
var state_18319__$1 = state_18319;
var statearr_18329_21370 = state_18319__$1;
(statearr_18329_21370[(2)] = null);

(statearr_18329_21370[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18320 === (7))){
var inst_18315 = (state_18319[(2)]);
var state_18319__$1 = state_18319;
var statearr_18330_21376 = state_18319__$1;
(statearr_18330_21376[(2)] = inst_18315);

(statearr_18330_21376[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__21350,c__17865__auto___21354,G__18306_21351,G__18306_21352__$1,n__5636__auto___21349,jobs,results,process__$1,async))
;
return ((function (__21350,switch__17474__auto__,c__17865__auto___21354,G__18306_21351,G__18306_21352__$1,n__5636__auto___21349,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17475__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17475__auto____0 = (function (){
var statearr_18331 = [null,null,null,null,null,null,null];
(statearr_18331[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17475__auto__);

(statearr_18331[(1)] = (1));

return statearr_18331;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17475__auto____1 = (function (state_18319){
while(true){
var ret_value__17476__auto__ = (function (){try{while(true){
var result__17477__auto__ = switch__17474__auto__(state_18319);
if(cljs.core.keyword_identical_QMARK_(result__17477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17477__auto__;
}
break;
}
}catch (e18332){var ex__17478__auto__ = e18332;
var statearr_18333_21390 = state_18319;
(statearr_18333_21390[(2)] = ex__17478__auto__);


if(cljs.core.seq((state_18319[(4)]))){
var statearr_18334_21395 = state_18319;
(statearr_18334_21395[(1)] = cljs.core.first((state_18319[(4)])));

} else {
throw ex__17478__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21397 = state_18319;
state_18319 = G__21397;
continue;
} else {
return ret_value__17476__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17475__auto__ = function(state_18319){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17475__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17475__auto____1.call(this,state_18319);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17475__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17475__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17475__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17475__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17475__auto__;
})()
;})(__21350,switch__17474__auto__,c__17865__auto___21354,G__18306_21351,G__18306_21352__$1,n__5636__auto___21349,jobs,results,process__$1,async))
})();
var state__17867__auto__ = (function (){var statearr_18335 = f__17866__auto__();
(statearr_18335[(6)] = c__17865__auto___21354);

return statearr_18335;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17867__auto__);
});})(__21350,c__17865__auto___21354,G__18306_21351,G__18306_21352__$1,n__5636__auto___21349,jobs,results,process__$1,async))
);


break;
case "async":
var c__17865__auto___21406 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__21350,c__17865__auto___21406,G__18306_21351,G__18306_21352__$1,n__5636__auto___21349,jobs,results,process__$1,async){
return (function (){
var f__17866__auto__ = (function (){var switch__17474__auto__ = ((function (__21350,c__17865__auto___21406,G__18306_21351,G__18306_21352__$1,n__5636__auto___21349,jobs,results,process__$1,async){
return (function (state_18367){
var state_val_18372 = (state_18367[(1)]);
if((state_val_18372 === (1))){
var state_18367__$1 = state_18367;
var statearr_18379_21418 = state_18367__$1;
(statearr_18379_21418[(2)] = null);

(statearr_18379_21418[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18372 === (2))){
var state_18367__$1 = state_18367;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18367__$1,(4),jobs);
} else {
if((state_val_18372 === (3))){
var inst_18364 = (state_18367[(2)]);
var state_18367__$1 = state_18367;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18367__$1,inst_18364);
} else {
if((state_val_18372 === (4))){
var inst_18351 = (state_18367[(2)]);
var inst_18352 = async(inst_18351);
var state_18367__$1 = state_18367;
if(cljs.core.truth_(inst_18352)){
var statearr_18386_21420 = state_18367__$1;
(statearr_18386_21420[(1)] = (5));

} else {
var statearr_18388_21421 = state_18367__$1;
(statearr_18388_21421[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18372 === (5))){
var state_18367__$1 = state_18367;
var statearr_18389_21422 = state_18367__$1;
(statearr_18389_21422[(2)] = null);

(statearr_18389_21422[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18372 === (6))){
var state_18367__$1 = state_18367;
var statearr_18391_21423 = state_18367__$1;
(statearr_18391_21423[(2)] = null);

(statearr_18391_21423[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18372 === (7))){
var inst_18361 = (state_18367[(2)]);
var state_18367__$1 = state_18367;
var statearr_18396_21427 = state_18367__$1;
(statearr_18396_21427[(2)] = inst_18361);

(statearr_18396_21427[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__21350,c__17865__auto___21406,G__18306_21351,G__18306_21352__$1,n__5636__auto___21349,jobs,results,process__$1,async))
;
return ((function (__21350,switch__17474__auto__,c__17865__auto___21406,G__18306_21351,G__18306_21352__$1,n__5636__auto___21349,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17475__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17475__auto____0 = (function (){
var statearr_18397 = [null,null,null,null,null,null,null];
(statearr_18397[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17475__auto__);

(statearr_18397[(1)] = (1));

return statearr_18397;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17475__auto____1 = (function (state_18367){
while(true){
var ret_value__17476__auto__ = (function (){try{while(true){
var result__17477__auto__ = switch__17474__auto__(state_18367);
if(cljs.core.keyword_identical_QMARK_(result__17477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17477__auto__;
}
break;
}
}catch (e18406){var ex__17478__auto__ = e18406;
var statearr_18407_21439 = state_18367;
(statearr_18407_21439[(2)] = ex__17478__auto__);


if(cljs.core.seq((state_18367[(4)]))){
var statearr_18408_21440 = state_18367;
(statearr_18408_21440[(1)] = cljs.core.first((state_18367[(4)])));

} else {
throw ex__17478__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21444 = state_18367;
state_18367 = G__21444;
continue;
} else {
return ret_value__17476__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17475__auto__ = function(state_18367){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17475__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17475__auto____1.call(this,state_18367);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17475__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17475__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17475__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17475__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17475__auto__;
})()
;})(__21350,switch__17474__auto__,c__17865__auto___21406,G__18306_21351,G__18306_21352__$1,n__5636__auto___21349,jobs,results,process__$1,async))
})();
var state__17867__auto__ = (function (){var statearr_18415 = f__17866__auto__();
(statearr_18415[(6)] = c__17865__auto___21406);

return statearr_18415;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17867__auto__);
});})(__21350,c__17865__auto___21406,G__18306_21351,G__18306_21352__$1,n__5636__auto___21349,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__18306_21352__$1)].join('')));

}

var G__21448 = (__21350 + (1));
__21350 = G__21448;
continue;
} else {
}
break;
}

var c__17865__auto___21450 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17866__auto__ = (function (){var switch__17474__auto__ = (function (state_18439){
var state_val_18444 = (state_18439[(1)]);
if((state_val_18444 === (7))){
var inst_18435 = (state_18439[(2)]);
var state_18439__$1 = state_18439;
var statearr_18475_21454 = state_18439__$1;
(statearr_18475_21454[(2)] = inst_18435);

(statearr_18475_21454[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18444 === (1))){
var state_18439__$1 = state_18439;
var statearr_18476_21458 = state_18439__$1;
(statearr_18476_21458[(2)] = null);

(statearr_18476_21458[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18444 === (4))){
var inst_18418 = (state_18439[(7)]);
var inst_18418__$1 = (state_18439[(2)]);
var inst_18419 = (inst_18418__$1 == null);
var state_18439__$1 = (function (){var statearr_18477 = state_18439;
(statearr_18477[(7)] = inst_18418__$1);

return statearr_18477;
})();
if(cljs.core.truth_(inst_18419)){
var statearr_18482_21459 = state_18439__$1;
(statearr_18482_21459[(1)] = (5));

} else {
var statearr_18484_21460 = state_18439__$1;
(statearr_18484_21460[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18444 === (6))){
var inst_18418 = (state_18439[(7)]);
var inst_18423 = (state_18439[(8)]);
var inst_18423__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_18426 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_18427 = [inst_18418,inst_18423__$1];
var inst_18428 = (new cljs.core.PersistentVector(null,2,(5),inst_18426,inst_18427,null));
var state_18439__$1 = (function (){var statearr_18501 = state_18439;
(statearr_18501[(8)] = inst_18423__$1);

return statearr_18501;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18439__$1,(8),jobs,inst_18428);
} else {
if((state_val_18444 === (3))){
var inst_18437 = (state_18439[(2)]);
var state_18439__$1 = state_18439;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18439__$1,inst_18437);
} else {
if((state_val_18444 === (2))){
var state_18439__$1 = state_18439;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18439__$1,(4),from);
} else {
if((state_val_18444 === (9))){
var inst_18432 = (state_18439[(2)]);
var state_18439__$1 = (function (){var statearr_18506 = state_18439;
(statearr_18506[(9)] = inst_18432);

return statearr_18506;
})();
var statearr_18512_21473 = state_18439__$1;
(statearr_18512_21473[(2)] = null);

(statearr_18512_21473[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18444 === (5))){
var inst_18421 = cljs.core.async.close_BANG_(jobs);
var state_18439__$1 = state_18439;
var statearr_18521_21476 = state_18439__$1;
(statearr_18521_21476[(2)] = inst_18421);

(statearr_18521_21476[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18444 === (8))){
var inst_18423 = (state_18439[(8)]);
var inst_18430 = (state_18439[(2)]);
var state_18439__$1 = (function (){var statearr_18526 = state_18439;
(statearr_18526[(10)] = inst_18430);

return statearr_18526;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18439__$1,(9),results,inst_18423);
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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17475__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17475__auto____0 = (function (){
var statearr_18530 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_18530[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17475__auto__);

(statearr_18530[(1)] = (1));

return statearr_18530;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17475__auto____1 = (function (state_18439){
while(true){
var ret_value__17476__auto__ = (function (){try{while(true){
var result__17477__auto__ = switch__17474__auto__(state_18439);
if(cljs.core.keyword_identical_QMARK_(result__17477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17477__auto__;
}
break;
}
}catch (e18532){var ex__17478__auto__ = e18532;
var statearr_18533_21487 = state_18439;
(statearr_18533_21487[(2)] = ex__17478__auto__);


if(cljs.core.seq((state_18439[(4)]))){
var statearr_18534_21488 = state_18439;
(statearr_18534_21488[(1)] = cljs.core.first((state_18439[(4)])));

} else {
throw ex__17478__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21489 = state_18439;
state_18439 = G__21489;
continue;
} else {
return ret_value__17476__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17475__auto__ = function(state_18439){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17475__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17475__auto____1.call(this,state_18439);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17475__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17475__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17475__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17475__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17475__auto__;
})()
})();
var state__17867__auto__ = (function (){var statearr_18536 = f__17866__auto__();
(statearr_18536[(6)] = c__17865__auto___21450);

return statearr_18536;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17867__auto__);
}));


var c__17865__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17866__auto__ = (function (){var switch__17474__auto__ = (function (state_18575){
var state_val_18577 = (state_18575[(1)]);
if((state_val_18577 === (7))){
var inst_18571 = (state_18575[(2)]);
var state_18575__$1 = state_18575;
var statearr_18592_21491 = state_18575__$1;
(statearr_18592_21491[(2)] = inst_18571);

(statearr_18592_21491[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18577 === (20))){
var state_18575__$1 = state_18575;
var statearr_18597_21500 = state_18575__$1;
(statearr_18597_21500[(2)] = null);

(statearr_18597_21500[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18577 === (1))){
var state_18575__$1 = state_18575;
var statearr_18602_21507 = state_18575__$1;
(statearr_18602_21507[(2)] = null);

(statearr_18602_21507[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18577 === (4))){
var inst_18539 = (state_18575[(7)]);
var inst_18539__$1 = (state_18575[(2)]);
var inst_18540 = (inst_18539__$1 == null);
var state_18575__$1 = (function (){var statearr_18604 = state_18575;
(statearr_18604[(7)] = inst_18539__$1);

return statearr_18604;
})();
if(cljs.core.truth_(inst_18540)){
var statearr_18605_21519 = state_18575__$1;
(statearr_18605_21519[(1)] = (5));

} else {
var statearr_18606_21520 = state_18575__$1;
(statearr_18606_21520[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18577 === (15))){
var inst_18552 = (state_18575[(8)]);
var state_18575__$1 = state_18575;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18575__$1,(18),to,inst_18552);
} else {
if((state_val_18577 === (21))){
var inst_18565 = (state_18575[(2)]);
var state_18575__$1 = state_18575;
var statearr_18607_21521 = state_18575__$1;
(statearr_18607_21521[(2)] = inst_18565);

(statearr_18607_21521[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18577 === (13))){
var inst_18568 = (state_18575[(2)]);
var state_18575__$1 = (function (){var statearr_18609 = state_18575;
(statearr_18609[(9)] = inst_18568);

return statearr_18609;
})();
var statearr_18611_21531 = state_18575__$1;
(statearr_18611_21531[(2)] = null);

(statearr_18611_21531[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18577 === (6))){
var inst_18539 = (state_18575[(7)]);
var state_18575__$1 = state_18575;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18575__$1,(11),inst_18539);
} else {
if((state_val_18577 === (17))){
var inst_18560 = (state_18575[(2)]);
var state_18575__$1 = state_18575;
if(cljs.core.truth_(inst_18560)){
var statearr_18612_21538 = state_18575__$1;
(statearr_18612_21538[(1)] = (19));

} else {
var statearr_18613_21539 = state_18575__$1;
(statearr_18613_21539[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18577 === (3))){
var inst_18573 = (state_18575[(2)]);
var state_18575__$1 = state_18575;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18575__$1,inst_18573);
} else {
if((state_val_18577 === (12))){
var inst_18549 = (state_18575[(10)]);
var state_18575__$1 = state_18575;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18575__$1,(14),inst_18549);
} else {
if((state_val_18577 === (2))){
var state_18575__$1 = state_18575;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18575__$1,(4),results);
} else {
if((state_val_18577 === (19))){
var state_18575__$1 = state_18575;
var statearr_18616_21548 = state_18575__$1;
(statearr_18616_21548[(2)] = null);

(statearr_18616_21548[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18577 === (11))){
var inst_18549 = (state_18575[(2)]);
var state_18575__$1 = (function (){var statearr_18621 = state_18575;
(statearr_18621[(10)] = inst_18549);

return statearr_18621;
})();
var statearr_18622_21549 = state_18575__$1;
(statearr_18622_21549[(2)] = null);

(statearr_18622_21549[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18577 === (9))){
var state_18575__$1 = state_18575;
var statearr_18623_21551 = state_18575__$1;
(statearr_18623_21551[(2)] = null);

(statearr_18623_21551[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18577 === (5))){
var state_18575__$1 = state_18575;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18624_21552 = state_18575__$1;
(statearr_18624_21552[(1)] = (8));

} else {
var statearr_18625_21553 = state_18575__$1;
(statearr_18625_21553[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18577 === (14))){
var inst_18554 = (state_18575[(11)]);
var inst_18552 = (state_18575[(8)]);
var inst_18552__$1 = (state_18575[(2)]);
var inst_18553 = (inst_18552__$1 == null);
var inst_18554__$1 = cljs.core.not(inst_18553);
var state_18575__$1 = (function (){var statearr_18627 = state_18575;
(statearr_18627[(11)] = inst_18554__$1);

(statearr_18627[(8)] = inst_18552__$1);

return statearr_18627;
})();
if(inst_18554__$1){
var statearr_18628_21557 = state_18575__$1;
(statearr_18628_21557[(1)] = (15));

} else {
var statearr_18629_21558 = state_18575__$1;
(statearr_18629_21558[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18577 === (16))){
var inst_18554 = (state_18575[(11)]);
var state_18575__$1 = state_18575;
var statearr_18630_21559 = state_18575__$1;
(statearr_18630_21559[(2)] = inst_18554);

(statearr_18630_21559[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18577 === (10))){
var inst_18546 = (state_18575[(2)]);
var state_18575__$1 = state_18575;
var statearr_18631_21560 = state_18575__$1;
(statearr_18631_21560[(2)] = inst_18546);

(statearr_18631_21560[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18577 === (18))){
var inst_18557 = (state_18575[(2)]);
var state_18575__$1 = state_18575;
var statearr_18632_21563 = state_18575__$1;
(statearr_18632_21563[(2)] = inst_18557);

(statearr_18632_21563[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18577 === (8))){
var inst_18543 = cljs.core.async.close_BANG_(to);
var state_18575__$1 = state_18575;
var statearr_18633_21564 = state_18575__$1;
(statearr_18633_21564[(2)] = inst_18543);

(statearr_18633_21564[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17475__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17475__auto____0 = (function (){
var statearr_18635 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18635[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17475__auto__);

(statearr_18635[(1)] = (1));

return statearr_18635;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17475__auto____1 = (function (state_18575){
while(true){
var ret_value__17476__auto__ = (function (){try{while(true){
var result__17477__auto__ = switch__17474__auto__(state_18575);
if(cljs.core.keyword_identical_QMARK_(result__17477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17477__auto__;
}
break;
}
}catch (e18637){var ex__17478__auto__ = e18637;
var statearr_18638_21566 = state_18575;
(statearr_18638_21566[(2)] = ex__17478__auto__);


if(cljs.core.seq((state_18575[(4)]))){
var statearr_18639_21567 = state_18575;
(statearr_18639_21567[(1)] = cljs.core.first((state_18575[(4)])));

} else {
throw ex__17478__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21568 = state_18575;
state_18575 = G__21568;
continue;
} else {
return ret_value__17476__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17475__auto__ = function(state_18575){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17475__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17475__auto____1.call(this,state_18575);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17475__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17475__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17475__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17475__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17475__auto__;
})()
})();
var state__17867__auto__ = (function (){var statearr_18641 = f__17866__auto__();
(statearr_18641[(6)] = c__17865__auto__);

return statearr_18641;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17867__auto__);
}));

return c__17865__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__18648 = arguments.length;
switch (G__18648) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

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
var G__18658 = arguments.length;
switch (G__18658) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

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
var G__18663 = arguments.length;
switch (G__18663) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__17865__auto___21584 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17866__auto__ = (function (){var switch__17474__auto__ = (function (state_18694){
var state_val_18695 = (state_18694[(1)]);
if((state_val_18695 === (7))){
var inst_18690 = (state_18694[(2)]);
var state_18694__$1 = state_18694;
var statearr_18696_21585 = state_18694__$1;
(statearr_18696_21585[(2)] = inst_18690);

(statearr_18696_21585[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18695 === (1))){
var state_18694__$1 = state_18694;
var statearr_18698_21586 = state_18694__$1;
(statearr_18698_21586[(2)] = null);

(statearr_18698_21586[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18695 === (4))){
var inst_18671 = (state_18694[(7)]);
var inst_18671__$1 = (state_18694[(2)]);
var inst_18672 = (inst_18671__$1 == null);
var state_18694__$1 = (function (){var statearr_18699 = state_18694;
(statearr_18699[(7)] = inst_18671__$1);

return statearr_18699;
})();
if(cljs.core.truth_(inst_18672)){
var statearr_18700_21587 = state_18694__$1;
(statearr_18700_21587[(1)] = (5));

} else {
var statearr_18701_21588 = state_18694__$1;
(statearr_18701_21588[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18695 === (13))){
var state_18694__$1 = state_18694;
var statearr_18704_21589 = state_18694__$1;
(statearr_18704_21589[(2)] = null);

(statearr_18704_21589[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18695 === (6))){
var inst_18671 = (state_18694[(7)]);
var inst_18677 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_18671) : p.call(null,inst_18671));
var state_18694__$1 = state_18694;
if(cljs.core.truth_(inst_18677)){
var statearr_18707_21591 = state_18694__$1;
(statearr_18707_21591[(1)] = (9));

} else {
var statearr_18709_21595 = state_18694__$1;
(statearr_18709_21595[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18695 === (3))){
var inst_18692 = (state_18694[(2)]);
var state_18694__$1 = state_18694;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18694__$1,inst_18692);
} else {
if((state_val_18695 === (12))){
var state_18694__$1 = state_18694;
var statearr_18710_21596 = state_18694__$1;
(statearr_18710_21596[(2)] = null);

(statearr_18710_21596[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18695 === (2))){
var state_18694__$1 = state_18694;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18694__$1,(4),ch);
} else {
if((state_val_18695 === (11))){
var inst_18671 = (state_18694[(7)]);
var inst_18681 = (state_18694[(2)]);
var state_18694__$1 = state_18694;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18694__$1,(8),inst_18681,inst_18671);
} else {
if((state_val_18695 === (9))){
var state_18694__$1 = state_18694;
var statearr_18711_21602 = state_18694__$1;
(statearr_18711_21602[(2)] = tc);

(statearr_18711_21602[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18695 === (5))){
var inst_18674 = cljs.core.async.close_BANG_(tc);
var inst_18675 = cljs.core.async.close_BANG_(fc);
var state_18694__$1 = (function (){var statearr_18712 = state_18694;
(statearr_18712[(8)] = inst_18674);

return statearr_18712;
})();
var statearr_18713_21604 = state_18694__$1;
(statearr_18713_21604[(2)] = inst_18675);

(statearr_18713_21604[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18695 === (14))){
var inst_18688 = (state_18694[(2)]);
var state_18694__$1 = state_18694;
var statearr_18714_21605 = state_18694__$1;
(statearr_18714_21605[(2)] = inst_18688);

(statearr_18714_21605[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18695 === (10))){
var state_18694__$1 = state_18694;
var statearr_18715_21607 = state_18694__$1;
(statearr_18715_21607[(2)] = fc);

(statearr_18715_21607[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18695 === (8))){
var inst_18683 = (state_18694[(2)]);
var state_18694__$1 = state_18694;
if(cljs.core.truth_(inst_18683)){
var statearr_18717_21609 = state_18694__$1;
(statearr_18717_21609[(1)] = (12));

} else {
var statearr_18719_21610 = state_18694__$1;
(statearr_18719_21610[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});
return (function() {
var cljs$core$async$state_machine__17475__auto__ = null;
var cljs$core$async$state_machine__17475__auto____0 = (function (){
var statearr_18725 = [null,null,null,null,null,null,null,null,null];
(statearr_18725[(0)] = cljs$core$async$state_machine__17475__auto__);

(statearr_18725[(1)] = (1));

return statearr_18725;
});
var cljs$core$async$state_machine__17475__auto____1 = (function (state_18694){
while(true){
var ret_value__17476__auto__ = (function (){try{while(true){
var result__17477__auto__ = switch__17474__auto__(state_18694);
if(cljs.core.keyword_identical_QMARK_(result__17477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17477__auto__;
}
break;
}
}catch (e18728){var ex__17478__auto__ = e18728;
var statearr_18729_21611 = state_18694;
(statearr_18729_21611[(2)] = ex__17478__auto__);


if(cljs.core.seq((state_18694[(4)]))){
var statearr_18730_21612 = state_18694;
(statearr_18730_21612[(1)] = cljs.core.first((state_18694[(4)])));

} else {
throw ex__17478__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21613 = state_18694;
state_18694 = G__21613;
continue;
} else {
return ret_value__17476__auto__;
}
break;
}
});
cljs$core$async$state_machine__17475__auto__ = function(state_18694){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17475__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17475__auto____1.call(this,state_18694);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17475__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17475__auto____0;
cljs$core$async$state_machine__17475__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17475__auto____1;
return cljs$core$async$state_machine__17475__auto__;
})()
})();
var state__17867__auto__ = (function (){var statearr_18733 = f__17866__auto__();
(statearr_18733[(6)] = c__17865__auto___21584);

return statearr_18733;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17867__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__17865__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17866__auto__ = (function (){var switch__17474__auto__ = (function (state_18765){
var state_val_18766 = (state_18765[(1)]);
if((state_val_18766 === (7))){
var inst_18756 = (state_18765[(2)]);
var state_18765__$1 = state_18765;
var statearr_18774_21628 = state_18765__$1;
(statearr_18774_21628[(2)] = inst_18756);

(statearr_18774_21628[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18766 === (1))){
var inst_18738 = init;
var inst_18740 = inst_18738;
var state_18765__$1 = (function (){var statearr_18776 = state_18765;
(statearr_18776[(7)] = inst_18740);

return statearr_18776;
})();
var statearr_18777_21629 = state_18765__$1;
(statearr_18777_21629[(2)] = null);

(statearr_18777_21629[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18766 === (4))){
var inst_18743 = (state_18765[(8)]);
var inst_18743__$1 = (state_18765[(2)]);
var inst_18744 = (inst_18743__$1 == null);
var state_18765__$1 = (function (){var statearr_18787 = state_18765;
(statearr_18787[(8)] = inst_18743__$1);

return statearr_18787;
})();
if(cljs.core.truth_(inst_18744)){
var statearr_18788_21630 = state_18765__$1;
(statearr_18788_21630[(1)] = (5));

} else {
var statearr_18789_21631 = state_18765__$1;
(statearr_18789_21631[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18766 === (6))){
var inst_18747 = (state_18765[(9)]);
var inst_18740 = (state_18765[(7)]);
var inst_18743 = (state_18765[(8)]);
var inst_18747__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_18740,inst_18743) : f.call(null,inst_18740,inst_18743));
var inst_18748 = cljs.core.reduced_QMARK_(inst_18747__$1);
var state_18765__$1 = (function (){var statearr_18790 = state_18765;
(statearr_18790[(9)] = inst_18747__$1);

return statearr_18790;
})();
if(inst_18748){
var statearr_18791_21633 = state_18765__$1;
(statearr_18791_21633[(1)] = (8));

} else {
var statearr_18792_21636 = state_18765__$1;
(statearr_18792_21636[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18766 === (3))){
var inst_18758 = (state_18765[(2)]);
var state_18765__$1 = state_18765;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18765__$1,inst_18758);
} else {
if((state_val_18766 === (2))){
var state_18765__$1 = state_18765;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18765__$1,(4),ch);
} else {
if((state_val_18766 === (9))){
var inst_18747 = (state_18765[(9)]);
var inst_18740 = inst_18747;
var state_18765__$1 = (function (){var statearr_18793 = state_18765;
(statearr_18793[(7)] = inst_18740);

return statearr_18793;
})();
var statearr_18794_21644 = state_18765__$1;
(statearr_18794_21644[(2)] = null);

(statearr_18794_21644[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18766 === (5))){
var inst_18740 = (state_18765[(7)]);
var state_18765__$1 = state_18765;
var statearr_18795_21652 = state_18765__$1;
(statearr_18795_21652[(2)] = inst_18740);

(statearr_18795_21652[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18766 === (10))){
var inst_18754 = (state_18765[(2)]);
var state_18765__$1 = state_18765;
var statearr_18796_21655 = state_18765__$1;
(statearr_18796_21655[(2)] = inst_18754);

(statearr_18796_21655[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18766 === (8))){
var inst_18747 = (state_18765[(9)]);
var inst_18750 = cljs.core.deref(inst_18747);
var state_18765__$1 = state_18765;
var statearr_18797_21658 = state_18765__$1;
(statearr_18797_21658[(2)] = inst_18750);

(statearr_18797_21658[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});
return (function() {
var cljs$core$async$reduce_$_state_machine__17475__auto__ = null;
var cljs$core$async$reduce_$_state_machine__17475__auto____0 = (function (){
var statearr_18799 = [null,null,null,null,null,null,null,null,null,null];
(statearr_18799[(0)] = cljs$core$async$reduce_$_state_machine__17475__auto__);

(statearr_18799[(1)] = (1));

return statearr_18799;
});
var cljs$core$async$reduce_$_state_machine__17475__auto____1 = (function (state_18765){
while(true){
var ret_value__17476__auto__ = (function (){try{while(true){
var result__17477__auto__ = switch__17474__auto__(state_18765);
if(cljs.core.keyword_identical_QMARK_(result__17477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17477__auto__;
}
break;
}
}catch (e18800){var ex__17478__auto__ = e18800;
var statearr_18801_21670 = state_18765;
(statearr_18801_21670[(2)] = ex__17478__auto__);


if(cljs.core.seq((state_18765[(4)]))){
var statearr_18802_21671 = state_18765;
(statearr_18802_21671[(1)] = cljs.core.first((state_18765[(4)])));

} else {
throw ex__17478__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21674 = state_18765;
state_18765 = G__21674;
continue;
} else {
return ret_value__17476__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__17475__auto__ = function(state_18765){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__17475__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__17475__auto____1.call(this,state_18765);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__17475__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__17475__auto____0;
cljs$core$async$reduce_$_state_machine__17475__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__17475__auto____1;
return cljs$core$async$reduce_$_state_machine__17475__auto__;
})()
})();
var state__17867__auto__ = (function (){var statearr_18803 = f__17866__auto__();
(statearr_18803[(6)] = c__17865__auto__);

return statearr_18803;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17867__auto__);
}));

return c__17865__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__17865__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17866__auto__ = (function (){var switch__17474__auto__ = (function (state_18811){
var state_val_18812 = (state_18811[(1)]);
if((state_val_18812 === (1))){
var inst_18806 = cljs.core.async.reduce(f__$1,init,ch);
var state_18811__$1 = state_18811;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18811__$1,(2),inst_18806);
} else {
if((state_val_18812 === (2))){
var inst_18808 = (state_18811[(2)]);
var inst_18809 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_18808) : f__$1.call(null,inst_18808));
var state_18811__$1 = state_18811;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18811__$1,inst_18809);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__17475__auto__ = null;
var cljs$core$async$transduce_$_state_machine__17475__auto____0 = (function (){
var statearr_18818 = [null,null,null,null,null,null,null];
(statearr_18818[(0)] = cljs$core$async$transduce_$_state_machine__17475__auto__);

(statearr_18818[(1)] = (1));

return statearr_18818;
});
var cljs$core$async$transduce_$_state_machine__17475__auto____1 = (function (state_18811){
while(true){
var ret_value__17476__auto__ = (function (){try{while(true){
var result__17477__auto__ = switch__17474__auto__(state_18811);
if(cljs.core.keyword_identical_QMARK_(result__17477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17477__auto__;
}
break;
}
}catch (e18819){var ex__17478__auto__ = e18819;
var statearr_18820_21682 = state_18811;
(statearr_18820_21682[(2)] = ex__17478__auto__);


if(cljs.core.seq((state_18811[(4)]))){
var statearr_18821_21683 = state_18811;
(statearr_18821_21683[(1)] = cljs.core.first((state_18811[(4)])));

} else {
throw ex__17478__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21684 = state_18811;
state_18811 = G__21684;
continue;
} else {
return ret_value__17476__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__17475__auto__ = function(state_18811){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__17475__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__17475__auto____1.call(this,state_18811);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__17475__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__17475__auto____0;
cljs$core$async$transduce_$_state_machine__17475__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__17475__auto____1;
return cljs$core$async$transduce_$_state_machine__17475__auto__;
})()
})();
var state__17867__auto__ = (function (){var statearr_18822 = f__17866__auto__();
(statearr_18822[(6)] = c__17865__auto__);

return statearr_18822;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17867__auto__);
}));

return c__17865__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__18824 = arguments.length;
switch (G__18824) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__17865__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17866__auto__ = (function (){var switch__17474__auto__ = (function (state_18854){
var state_val_18855 = (state_18854[(1)]);
if((state_val_18855 === (7))){
var inst_18832 = (state_18854[(2)]);
var state_18854__$1 = state_18854;
var statearr_18865_21703 = state_18854__$1;
(statearr_18865_21703[(2)] = inst_18832);

(statearr_18865_21703[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18855 === (1))){
var inst_18826 = cljs.core.seq(coll);
var inst_18827 = inst_18826;
var state_18854__$1 = (function (){var statearr_18866 = state_18854;
(statearr_18866[(7)] = inst_18827);

return statearr_18866;
})();
var statearr_18867_21707 = state_18854__$1;
(statearr_18867_21707[(2)] = null);

(statearr_18867_21707[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18855 === (4))){
var inst_18827 = (state_18854[(7)]);
var inst_18830 = cljs.core.first(inst_18827);
var state_18854__$1 = state_18854;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18854__$1,(7),ch,inst_18830);
} else {
if((state_val_18855 === (13))){
var inst_18844 = (state_18854[(2)]);
var state_18854__$1 = state_18854;
var statearr_18868_21710 = state_18854__$1;
(statearr_18868_21710[(2)] = inst_18844);

(statearr_18868_21710[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18855 === (6))){
var inst_18835 = (state_18854[(2)]);
var state_18854__$1 = state_18854;
if(cljs.core.truth_(inst_18835)){
var statearr_18871_21714 = state_18854__$1;
(statearr_18871_21714[(1)] = (8));

} else {
var statearr_18872_21715 = state_18854__$1;
(statearr_18872_21715[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18855 === (3))){
var inst_18848 = (state_18854[(2)]);
var state_18854__$1 = state_18854;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18854__$1,inst_18848);
} else {
if((state_val_18855 === (12))){
var state_18854__$1 = state_18854;
var statearr_18873_21716 = state_18854__$1;
(statearr_18873_21716[(2)] = null);

(statearr_18873_21716[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18855 === (2))){
var inst_18827 = (state_18854[(7)]);
var state_18854__$1 = state_18854;
if(cljs.core.truth_(inst_18827)){
var statearr_18874_21718 = state_18854__$1;
(statearr_18874_21718[(1)] = (4));

} else {
var statearr_18875_21719 = state_18854__$1;
(statearr_18875_21719[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18855 === (11))){
var inst_18841 = cljs.core.async.close_BANG_(ch);
var state_18854__$1 = state_18854;
var statearr_18877_21720 = state_18854__$1;
(statearr_18877_21720[(2)] = inst_18841);

(statearr_18877_21720[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18855 === (9))){
var state_18854__$1 = state_18854;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18878_21732 = state_18854__$1;
(statearr_18878_21732[(1)] = (11));

} else {
var statearr_18879_21733 = state_18854__$1;
(statearr_18879_21733[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18855 === (5))){
var inst_18827 = (state_18854[(7)]);
var state_18854__$1 = state_18854;
var statearr_18880_21736 = state_18854__$1;
(statearr_18880_21736[(2)] = inst_18827);

(statearr_18880_21736[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18855 === (10))){
var inst_18846 = (state_18854[(2)]);
var state_18854__$1 = state_18854;
var statearr_18887_21737 = state_18854__$1;
(statearr_18887_21737[(2)] = inst_18846);

(statearr_18887_21737[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18855 === (8))){
var inst_18827 = (state_18854[(7)]);
var inst_18837 = cljs.core.next(inst_18827);
var inst_18827__$1 = inst_18837;
var state_18854__$1 = (function (){var statearr_18892 = state_18854;
(statearr_18892[(7)] = inst_18827__$1);

return statearr_18892;
})();
var statearr_18897_21743 = state_18854__$1;
(statearr_18897_21743[(2)] = null);

(statearr_18897_21743[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});
return (function() {
var cljs$core$async$state_machine__17475__auto__ = null;
var cljs$core$async$state_machine__17475__auto____0 = (function (){
var statearr_18898 = [null,null,null,null,null,null,null,null];
(statearr_18898[(0)] = cljs$core$async$state_machine__17475__auto__);

(statearr_18898[(1)] = (1));

return statearr_18898;
});
var cljs$core$async$state_machine__17475__auto____1 = (function (state_18854){
while(true){
var ret_value__17476__auto__ = (function (){try{while(true){
var result__17477__auto__ = switch__17474__auto__(state_18854);
if(cljs.core.keyword_identical_QMARK_(result__17477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17477__auto__;
}
break;
}
}catch (e18899){var ex__17478__auto__ = e18899;
var statearr_18900_21744 = state_18854;
(statearr_18900_21744[(2)] = ex__17478__auto__);


if(cljs.core.seq((state_18854[(4)]))){
var statearr_18901_21745 = state_18854;
(statearr_18901_21745[(1)] = cljs.core.first((state_18854[(4)])));

} else {
throw ex__17478__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21746 = state_18854;
state_18854 = G__21746;
continue;
} else {
return ret_value__17476__auto__;
}
break;
}
});
cljs$core$async$state_machine__17475__auto__ = function(state_18854){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17475__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17475__auto____1.call(this,state_18854);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17475__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17475__auto____0;
cljs$core$async$state_machine__17475__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17475__auto____1;
return cljs$core$async$state_machine__17475__auto__;
})()
})();
var state__17867__auto__ = (function (){var statearr_18902 = f__17866__auto__();
(statearr_18902[(6)] = c__17865__auto__);

return statearr_18902;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17867__auto__);
}));

return c__17865__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__18917 = arguments.length;
switch (G__18917) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_21750 = (function (_){
var x__5393__auto__ = (((_ == null))?null:_);
var m__5394__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5394__auto__.call(null,_));
} else {
var m__5392__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5392__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_21750(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_21758 = (function (m,ch,close_QMARK_){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5394__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5392__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_21758(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_21768 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_21768(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_21781 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_21781(m);
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
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18965 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18965 = (function (ch,cs,meta18966){
this.ch = ch;
this.cs = cs;
this.meta18966 = meta18966;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18965.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18967,meta18966__$1){
var self__ = this;
var _18967__$1 = this;
return (new cljs.core.async.t_cljs$core$async18965(self__.ch,self__.cs,meta18966__$1));
}));

(cljs.core.async.t_cljs$core$async18965.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18967){
var self__ = this;
var _18967__$1 = this;
return self__.meta18966;
}));

(cljs.core.async.t_cljs$core$async18965.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18965.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async18965.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18965.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async18965.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async18965.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async18965.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta18966","meta18966",-997551859,null)], null);
}));

(cljs.core.async.t_cljs$core$async18965.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18965.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18965");

(cljs.core.async.t_cljs$core$async18965.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async18965");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18965.
 */
cljs.core.async.__GT_t_cljs$core$async18965 = (function cljs$core$async$mult_$___GT_t_cljs$core$async18965(ch__$1,cs__$1,meta18966){
return (new cljs.core.async.t_cljs$core$async18965(ch__$1,cs__$1,meta18966));
});

}

return (new cljs.core.async.t_cljs$core$async18965(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__17865__auto___21813 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17866__auto__ = (function (){var switch__17474__auto__ = (function (state_19132){
var state_val_19133 = (state_19132[(1)]);
if((state_val_19133 === (7))){
var inst_19123 = (state_19132[(2)]);
var state_19132__$1 = state_19132;
var statearr_19135_21817 = state_19132__$1;
(statearr_19135_21817[(2)] = inst_19123);

(statearr_19135_21817[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19133 === (20))){
var inst_19022 = (state_19132[(7)]);
var inst_19035 = cljs.core.first(inst_19022);
var inst_19036 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19035,(0),null);
var inst_19037 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19035,(1),null);
var state_19132__$1 = (function (){var statearr_19136 = state_19132;
(statearr_19136[(8)] = inst_19036);

return statearr_19136;
})();
if(cljs.core.truth_(inst_19037)){
var statearr_19137_21823 = state_19132__$1;
(statearr_19137_21823[(1)] = (22));

} else {
var statearr_19138_21825 = state_19132__$1;
(statearr_19138_21825[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19133 === (27))){
var inst_19073 = (state_19132[(9)]);
var inst_19066 = (state_19132[(10)]);
var inst_18983 = (state_19132[(11)]);
var inst_19068 = (state_19132[(12)]);
var inst_19073__$1 = cljs.core._nth(inst_19066,inst_19068);
var inst_19074 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_19073__$1,inst_18983,done);
var state_19132__$1 = (function (){var statearr_19143 = state_19132;
(statearr_19143[(9)] = inst_19073__$1);

return statearr_19143;
})();
if(cljs.core.truth_(inst_19074)){
var statearr_19144_21832 = state_19132__$1;
(statearr_19144_21832[(1)] = (30));

} else {
var statearr_19145_21833 = state_19132__$1;
(statearr_19145_21833[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19133 === (1))){
var state_19132__$1 = state_19132;
var statearr_19146_21834 = state_19132__$1;
(statearr_19146_21834[(2)] = null);

(statearr_19146_21834[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19133 === (24))){
var inst_19022 = (state_19132[(7)]);
var inst_19042 = (state_19132[(2)]);
var inst_19043 = cljs.core.next(inst_19022);
var inst_18992 = inst_19043;
var inst_18993 = null;
var inst_18994 = (0);
var inst_18995 = (0);
var state_19132__$1 = (function (){var statearr_19152 = state_19132;
(statearr_19152[(13)] = inst_18995);

(statearr_19152[(14)] = inst_19042);

(statearr_19152[(15)] = inst_18993);

(statearr_19152[(16)] = inst_18992);

(statearr_19152[(17)] = inst_18994);

return statearr_19152;
})();
var statearr_19153_21842 = state_19132__$1;
(statearr_19153_21842[(2)] = null);

(statearr_19153_21842[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19133 === (39))){
var state_19132__$1 = state_19132;
var statearr_19159_21847 = state_19132__$1;
(statearr_19159_21847[(2)] = null);

(statearr_19159_21847[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19133 === (4))){
var inst_18983 = (state_19132[(11)]);
var inst_18983__$1 = (state_19132[(2)]);
var inst_18984 = (inst_18983__$1 == null);
var state_19132__$1 = (function (){var statearr_19160 = state_19132;
(statearr_19160[(11)] = inst_18983__$1);

return statearr_19160;
})();
if(cljs.core.truth_(inst_18984)){
var statearr_19161_21859 = state_19132__$1;
(statearr_19161_21859[(1)] = (5));

} else {
var statearr_19162_21860 = state_19132__$1;
(statearr_19162_21860[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19133 === (15))){
var inst_18995 = (state_19132[(13)]);
var inst_18993 = (state_19132[(15)]);
var inst_18992 = (state_19132[(16)]);
var inst_18994 = (state_19132[(17)]);
var inst_19015 = (state_19132[(2)]);
var inst_19016 = (inst_18995 + (1));
var tmp19156 = inst_18993;
var tmp19157 = inst_18992;
var tmp19158 = inst_18994;
var inst_18992__$1 = tmp19157;
var inst_18993__$1 = tmp19156;
var inst_18994__$1 = tmp19158;
var inst_18995__$1 = inst_19016;
var state_19132__$1 = (function (){var statearr_19167 = state_19132;
(statearr_19167[(13)] = inst_18995__$1);

(statearr_19167[(18)] = inst_19015);

(statearr_19167[(15)] = inst_18993__$1);

(statearr_19167[(16)] = inst_18992__$1);

(statearr_19167[(17)] = inst_18994__$1);

return statearr_19167;
})();
var statearr_19169_21868 = state_19132__$1;
(statearr_19169_21868[(2)] = null);

(statearr_19169_21868[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19133 === (21))){
var inst_19046 = (state_19132[(2)]);
var state_19132__$1 = state_19132;
var statearr_19178_21874 = state_19132__$1;
(statearr_19178_21874[(2)] = inst_19046);

(statearr_19178_21874[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19133 === (31))){
var inst_19073 = (state_19132[(9)]);
var inst_19077 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_19073);
var state_19132__$1 = state_19132;
var statearr_19183_21878 = state_19132__$1;
(statearr_19183_21878[(2)] = inst_19077);

(statearr_19183_21878[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19133 === (32))){
var inst_19065 = (state_19132[(19)]);
var inst_19066 = (state_19132[(10)]);
var inst_19067 = (state_19132[(20)]);
var inst_19068 = (state_19132[(12)]);
var inst_19079 = (state_19132[(2)]);
var inst_19080 = (inst_19068 + (1));
var tmp19175 = inst_19065;
var tmp19176 = inst_19066;
var tmp19177 = inst_19067;
var inst_19065__$1 = tmp19175;
var inst_19066__$1 = tmp19176;
var inst_19067__$1 = tmp19177;
var inst_19068__$1 = inst_19080;
var state_19132__$1 = (function (){var statearr_19186 = state_19132;
(statearr_19186[(19)] = inst_19065__$1);

(statearr_19186[(21)] = inst_19079);

(statearr_19186[(10)] = inst_19066__$1);

(statearr_19186[(20)] = inst_19067__$1);

(statearr_19186[(12)] = inst_19068__$1);

return statearr_19186;
})();
var statearr_19187_21884 = state_19132__$1;
(statearr_19187_21884[(2)] = null);

(statearr_19187_21884[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19133 === (40))){
var inst_19092 = (state_19132[(22)]);
var inst_19097 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_19092);
var state_19132__$1 = state_19132;
var statearr_19188_21887 = state_19132__$1;
(statearr_19188_21887[(2)] = inst_19097);

(statearr_19188_21887[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19133 === (33))){
var inst_19083 = (state_19132[(23)]);
var inst_19085 = cljs.core.chunked_seq_QMARK_(inst_19083);
var state_19132__$1 = state_19132;
if(inst_19085){
var statearr_19190_21892 = state_19132__$1;
(statearr_19190_21892[(1)] = (36));

} else {
var statearr_19191_21893 = state_19132__$1;
(statearr_19191_21893[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19133 === (13))){
var inst_19009 = (state_19132[(24)]);
var inst_19012 = cljs.core.async.close_BANG_(inst_19009);
var state_19132__$1 = state_19132;
var statearr_19196_21897 = state_19132__$1;
(statearr_19196_21897[(2)] = inst_19012);

(statearr_19196_21897[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19133 === (22))){
var inst_19036 = (state_19132[(8)]);
var inst_19039 = cljs.core.async.close_BANG_(inst_19036);
var state_19132__$1 = state_19132;
var statearr_19198_21903 = state_19132__$1;
(statearr_19198_21903[(2)] = inst_19039);

(statearr_19198_21903[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19133 === (36))){
var inst_19083 = (state_19132[(23)]);
var inst_19087 = cljs.core.chunk_first(inst_19083);
var inst_19088 = cljs.core.chunk_rest(inst_19083);
var inst_19089 = cljs.core.count(inst_19087);
var inst_19065 = inst_19088;
var inst_19066 = inst_19087;
var inst_19067 = inst_19089;
var inst_19068 = (0);
var state_19132__$1 = (function (){var statearr_19203 = state_19132;
(statearr_19203[(19)] = inst_19065);

(statearr_19203[(10)] = inst_19066);

(statearr_19203[(20)] = inst_19067);

(statearr_19203[(12)] = inst_19068);

return statearr_19203;
})();
var statearr_19204_21906 = state_19132__$1;
(statearr_19204_21906[(2)] = null);

(statearr_19204_21906[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19133 === (41))){
var inst_19083 = (state_19132[(23)]);
var inst_19102 = (state_19132[(2)]);
var inst_19103 = cljs.core.next(inst_19083);
var inst_19065 = inst_19103;
var inst_19066 = null;
var inst_19067 = (0);
var inst_19068 = (0);
var state_19132__$1 = (function (){var statearr_19206 = state_19132;
(statearr_19206[(19)] = inst_19065);

(statearr_19206[(25)] = inst_19102);

(statearr_19206[(10)] = inst_19066);

(statearr_19206[(20)] = inst_19067);

(statearr_19206[(12)] = inst_19068);

return statearr_19206;
})();
var statearr_19207_21907 = state_19132__$1;
(statearr_19207_21907[(2)] = null);

(statearr_19207_21907[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19133 === (43))){
var state_19132__$1 = state_19132;
var statearr_19214_21908 = state_19132__$1;
(statearr_19214_21908[(2)] = null);

(statearr_19214_21908[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19133 === (29))){
var inst_19111 = (state_19132[(2)]);
var state_19132__$1 = state_19132;
var statearr_19217_21913 = state_19132__$1;
(statearr_19217_21913[(2)] = inst_19111);

(statearr_19217_21913[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19133 === (44))){
var inst_19120 = (state_19132[(2)]);
var state_19132__$1 = (function (){var statearr_19218 = state_19132;
(statearr_19218[(26)] = inst_19120);

return statearr_19218;
})();
var statearr_19219_21914 = state_19132__$1;
(statearr_19219_21914[(2)] = null);

(statearr_19219_21914[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19133 === (6))){
var inst_19057 = (state_19132[(27)]);
var inst_19056 = cljs.core.deref(cs);
var inst_19057__$1 = cljs.core.keys(inst_19056);
var inst_19058 = cljs.core.count(inst_19057__$1);
var inst_19059 = cljs.core.reset_BANG_(dctr,inst_19058);
var inst_19064 = cljs.core.seq(inst_19057__$1);
var inst_19065 = inst_19064;
var inst_19066 = null;
var inst_19067 = (0);
var inst_19068 = (0);
var state_19132__$1 = (function (){var statearr_19223 = state_19132;
(statearr_19223[(19)] = inst_19065);

(statearr_19223[(27)] = inst_19057__$1);

(statearr_19223[(10)] = inst_19066);

(statearr_19223[(20)] = inst_19067);

(statearr_19223[(28)] = inst_19059);

(statearr_19223[(12)] = inst_19068);

return statearr_19223;
})();
var statearr_19224_21926 = state_19132__$1;
(statearr_19224_21926[(2)] = null);

(statearr_19224_21926[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19133 === (28))){
var inst_19065 = (state_19132[(19)]);
var inst_19083 = (state_19132[(23)]);
var inst_19083__$1 = cljs.core.seq(inst_19065);
var state_19132__$1 = (function (){var statearr_19225 = state_19132;
(statearr_19225[(23)] = inst_19083__$1);

return statearr_19225;
})();
if(inst_19083__$1){
var statearr_19230_21934 = state_19132__$1;
(statearr_19230_21934[(1)] = (33));

} else {
var statearr_19231_21937 = state_19132__$1;
(statearr_19231_21937[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19133 === (25))){
var inst_19067 = (state_19132[(20)]);
var inst_19068 = (state_19132[(12)]);
var inst_19070 = (inst_19068 < inst_19067);
var inst_19071 = inst_19070;
var state_19132__$1 = state_19132;
if(cljs.core.truth_(inst_19071)){
var statearr_19236_21942 = state_19132__$1;
(statearr_19236_21942[(1)] = (27));

} else {
var statearr_19238_21943 = state_19132__$1;
(statearr_19238_21943[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19133 === (34))){
var state_19132__$1 = state_19132;
var statearr_19239_21944 = state_19132__$1;
(statearr_19239_21944[(2)] = null);

(statearr_19239_21944[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19133 === (17))){
var state_19132__$1 = state_19132;
var statearr_19241_21952 = state_19132__$1;
(statearr_19241_21952[(2)] = null);

(statearr_19241_21952[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19133 === (3))){
var inst_19125 = (state_19132[(2)]);
var state_19132__$1 = state_19132;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19132__$1,inst_19125);
} else {
if((state_val_19133 === (12))){
var inst_19051 = (state_19132[(2)]);
var state_19132__$1 = state_19132;
var statearr_19242_21964 = state_19132__$1;
(statearr_19242_21964[(2)] = inst_19051);

(statearr_19242_21964[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19133 === (2))){
var state_19132__$1 = state_19132;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19132__$1,(4),ch);
} else {
if((state_val_19133 === (23))){
var state_19132__$1 = state_19132;
var statearr_19247_21975 = state_19132__$1;
(statearr_19247_21975[(2)] = null);

(statearr_19247_21975[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19133 === (35))){
var inst_19109 = (state_19132[(2)]);
var state_19132__$1 = state_19132;
var statearr_19248_21976 = state_19132__$1;
(statearr_19248_21976[(2)] = inst_19109);

(statearr_19248_21976[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19133 === (19))){
var inst_19022 = (state_19132[(7)]);
var inst_19027 = cljs.core.chunk_first(inst_19022);
var inst_19028 = cljs.core.chunk_rest(inst_19022);
var inst_19029 = cljs.core.count(inst_19027);
var inst_18992 = inst_19028;
var inst_18993 = inst_19027;
var inst_18994 = inst_19029;
var inst_18995 = (0);
var state_19132__$1 = (function (){var statearr_19249 = state_19132;
(statearr_19249[(13)] = inst_18995);

(statearr_19249[(15)] = inst_18993);

(statearr_19249[(16)] = inst_18992);

(statearr_19249[(17)] = inst_18994);

return statearr_19249;
})();
var statearr_19250_21979 = state_19132__$1;
(statearr_19250_21979[(2)] = null);

(statearr_19250_21979[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19133 === (11))){
var inst_19022 = (state_19132[(7)]);
var inst_18992 = (state_19132[(16)]);
var inst_19022__$1 = cljs.core.seq(inst_18992);
var state_19132__$1 = (function (){var statearr_19252 = state_19132;
(statearr_19252[(7)] = inst_19022__$1);

return statearr_19252;
})();
if(inst_19022__$1){
var statearr_19253_21986 = state_19132__$1;
(statearr_19253_21986[(1)] = (16));

} else {
var statearr_19256_21988 = state_19132__$1;
(statearr_19256_21988[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19133 === (9))){
var inst_19053 = (state_19132[(2)]);
var state_19132__$1 = state_19132;
var statearr_19257_21993 = state_19132__$1;
(statearr_19257_21993[(2)] = inst_19053);

(statearr_19257_21993[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19133 === (5))){
var inst_18990 = cljs.core.deref(cs);
var inst_18991 = cljs.core.seq(inst_18990);
var inst_18992 = inst_18991;
var inst_18993 = null;
var inst_18994 = (0);
var inst_18995 = (0);
var state_19132__$1 = (function (){var statearr_19261 = state_19132;
(statearr_19261[(13)] = inst_18995);

(statearr_19261[(15)] = inst_18993);

(statearr_19261[(16)] = inst_18992);

(statearr_19261[(17)] = inst_18994);

return statearr_19261;
})();
var statearr_19262_21998 = state_19132__$1;
(statearr_19262_21998[(2)] = null);

(statearr_19262_21998[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19133 === (14))){
var state_19132__$1 = state_19132;
var statearr_19263_22005 = state_19132__$1;
(statearr_19263_22005[(2)] = null);

(statearr_19263_22005[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19133 === (45))){
var inst_19117 = (state_19132[(2)]);
var state_19132__$1 = state_19132;
var statearr_19264_22006 = state_19132__$1;
(statearr_19264_22006[(2)] = inst_19117);

(statearr_19264_22006[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19133 === (26))){
var inst_19057 = (state_19132[(27)]);
var inst_19113 = (state_19132[(2)]);
var inst_19114 = cljs.core.seq(inst_19057);
var state_19132__$1 = (function (){var statearr_19265 = state_19132;
(statearr_19265[(29)] = inst_19113);

return statearr_19265;
})();
if(inst_19114){
var statearr_19266_22013 = state_19132__$1;
(statearr_19266_22013[(1)] = (42));

} else {
var statearr_19267_22014 = state_19132__$1;
(statearr_19267_22014[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19133 === (16))){
var inst_19022 = (state_19132[(7)]);
var inst_19024 = cljs.core.chunked_seq_QMARK_(inst_19022);
var state_19132__$1 = state_19132;
if(inst_19024){
var statearr_19268_22015 = state_19132__$1;
(statearr_19268_22015[(1)] = (19));

} else {
var statearr_19269_22016 = state_19132__$1;
(statearr_19269_22016[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19133 === (38))){
var inst_19106 = (state_19132[(2)]);
var state_19132__$1 = state_19132;
var statearr_19270_22019 = state_19132__$1;
(statearr_19270_22019[(2)] = inst_19106);

(statearr_19270_22019[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19133 === (30))){
var state_19132__$1 = state_19132;
var statearr_19271_22020 = state_19132__$1;
(statearr_19271_22020[(2)] = null);

(statearr_19271_22020[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19133 === (10))){
var inst_18995 = (state_19132[(13)]);
var inst_18993 = (state_19132[(15)]);
var inst_19008 = cljs.core._nth(inst_18993,inst_18995);
var inst_19009 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19008,(0),null);
var inst_19010 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19008,(1),null);
var state_19132__$1 = (function (){var statearr_19272 = state_19132;
(statearr_19272[(24)] = inst_19009);

return statearr_19272;
})();
if(cljs.core.truth_(inst_19010)){
var statearr_19273_22030 = state_19132__$1;
(statearr_19273_22030[(1)] = (13));

} else {
var statearr_19274_22034 = state_19132__$1;
(statearr_19274_22034[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19133 === (18))){
var inst_19049 = (state_19132[(2)]);
var state_19132__$1 = state_19132;
var statearr_19275_22038 = state_19132__$1;
(statearr_19275_22038[(2)] = inst_19049);

(statearr_19275_22038[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19133 === (42))){
var state_19132__$1 = state_19132;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19132__$1,(45),dchan);
} else {
if((state_val_19133 === (37))){
var inst_19092 = (state_19132[(22)]);
var inst_18983 = (state_19132[(11)]);
var inst_19083 = (state_19132[(23)]);
var inst_19092__$1 = cljs.core.first(inst_19083);
var inst_19093 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_19092__$1,inst_18983,done);
var state_19132__$1 = (function (){var statearr_19276 = state_19132;
(statearr_19276[(22)] = inst_19092__$1);

return statearr_19276;
})();
if(cljs.core.truth_(inst_19093)){
var statearr_19277_22044 = state_19132__$1;
(statearr_19277_22044[(1)] = (39));

} else {
var statearr_19278_22045 = state_19132__$1;
(statearr_19278_22045[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19133 === (8))){
var inst_18995 = (state_19132[(13)]);
var inst_18994 = (state_19132[(17)]);
var inst_18997 = (inst_18995 < inst_18994);
var inst_18998 = inst_18997;
var state_19132__$1 = state_19132;
if(cljs.core.truth_(inst_18998)){
var statearr_19279_22048 = state_19132__$1;
(statearr_19279_22048[(1)] = (10));

} else {
var statearr_19281_22049 = state_19132__$1;
(statearr_19281_22049[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});
return (function() {
var cljs$core$async$mult_$_state_machine__17475__auto__ = null;
var cljs$core$async$mult_$_state_machine__17475__auto____0 = (function (){
var statearr_19283 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19283[(0)] = cljs$core$async$mult_$_state_machine__17475__auto__);

(statearr_19283[(1)] = (1));

return statearr_19283;
});
var cljs$core$async$mult_$_state_machine__17475__auto____1 = (function (state_19132){
while(true){
var ret_value__17476__auto__ = (function (){try{while(true){
var result__17477__auto__ = switch__17474__auto__(state_19132);
if(cljs.core.keyword_identical_QMARK_(result__17477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17477__auto__;
}
break;
}
}catch (e19284){var ex__17478__auto__ = e19284;
var statearr_19285_22055 = state_19132;
(statearr_19285_22055[(2)] = ex__17478__auto__);


if(cljs.core.seq((state_19132[(4)]))){
var statearr_19287_22056 = state_19132;
(statearr_19287_22056[(1)] = cljs.core.first((state_19132[(4)])));

} else {
throw ex__17478__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22067 = state_19132;
state_19132 = G__22067;
continue;
} else {
return ret_value__17476__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__17475__auto__ = function(state_19132){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__17475__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__17475__auto____1.call(this,state_19132);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__17475__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__17475__auto____0;
cljs$core$async$mult_$_state_machine__17475__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__17475__auto____1;
return cljs$core$async$mult_$_state_machine__17475__auto__;
})()
})();
var state__17867__auto__ = (function (){var statearr_19290 = f__17866__auto__();
(statearr_19290[(6)] = c__17865__auto___21813);

return statearr_19290;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17867__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__19292 = arguments.length;
switch (G__19292) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

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

var cljs$core$async$Mix$admix_STAR_$dyn_22085 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_22085(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_22087 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_22087(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_22088 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_22088(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_22089 = (function (m,state_map){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5394__auto__.call(null,m,state_map));
} else {
var m__5392__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5392__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_22089(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_22090 = (function (m,mode){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5394__auto__.call(null,m,mode));
} else {
var m__5392__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5392__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_22090(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___22093 = arguments.length;
var i__5770__auto___22094 = (0);
while(true){
if((i__5770__auto___22094 < len__5769__auto___22093)){
args__5775__auto__.push((arguments[i__5770__auto___22094]));

var G__22095 = (i__5770__auto___22094 + (1));
i__5770__auto___22094 = G__22095;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__19338){
var map__19339 = p__19338;
var map__19339__$1 = cljs.core.__destructure_map(map__19339);
var opts = map__19339__$1;
var statearr_19340_22097 = state;
(statearr_19340_22097[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_19341_22099 = state;
(statearr_19341_22099[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_19342_22104 = state;
(statearr_19342_22104[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq19329){
var G__19330 = cljs.core.first(seq19329);
var seq19329__$1 = cljs.core.next(seq19329);
var G__19331 = cljs.core.first(seq19329__$1);
var seq19329__$2 = cljs.core.next(seq19329__$1);
var G__19332 = cljs.core.first(seq19329__$2);
var seq19329__$3 = cljs.core.next(seq19329__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19330,G__19331,G__19332,seq19329__$3);
}));

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
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async19357 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19357 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta19358){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta19358 = meta19358;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async19357.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19359,meta19358__$1){
var self__ = this;
var _19359__$1 = this;
return (new cljs.core.async.t_cljs$core$async19357(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta19358__$1));
}));

(cljs.core.async.t_cljs$core$async19357.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19359){
var self__ = this;
var _19359__$1 = this;
return self__.meta19358;
}));

(cljs.core.async.t_cljs$core$async19357.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19357.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async19357.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19357.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async19357.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async19357.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async19357.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async19357.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async19357.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta19358","meta19358",19275415,null)], null);
}));

(cljs.core.async.t_cljs$core$async19357.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async19357.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19357");

(cljs.core.async.t_cljs$core$async19357.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async19357");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19357.
 */
cljs.core.async.__GT_t_cljs$core$async19357 = (function cljs$core$async$mix_$___GT_t_cljs$core$async19357(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta19358){
return (new cljs.core.async.t_cljs$core$async19357(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta19358));
});

}

return (new cljs.core.async.t_cljs$core$async19357(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__17865__auto___22168 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17866__auto__ = (function (){var switch__17474__auto__ = (function (state_19502){
var state_val_19503 = (state_19502[(1)]);
if((state_val_19503 === (7))){
var inst_19449 = (state_19502[(2)]);
var state_19502__$1 = state_19502;
if(cljs.core.truth_(inst_19449)){
var statearr_19504_22171 = state_19502__$1;
(statearr_19504_22171[(1)] = (8));

} else {
var statearr_19505_22172 = state_19502__$1;
(statearr_19505_22172[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19503 === (20))){
var inst_19438 = (state_19502[(7)]);
var state_19502__$1 = state_19502;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19502__$1,(23),out,inst_19438);
} else {
if((state_val_19503 === (1))){
var inst_19420 = calc_state();
var inst_19421 = cljs.core.__destructure_map(inst_19420);
var inst_19422 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19421,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_19423 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19421,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_19424 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19421,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_19425 = inst_19420;
var state_19502__$1 = (function (){var statearr_19506 = state_19502;
(statearr_19506[(8)] = inst_19425);

(statearr_19506[(9)] = inst_19424);

(statearr_19506[(10)] = inst_19422);

(statearr_19506[(11)] = inst_19423);

return statearr_19506;
})();
var statearr_19507_22182 = state_19502__$1;
(statearr_19507_22182[(2)] = null);

(statearr_19507_22182[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19503 === (24))){
var inst_19429 = (state_19502[(12)]);
var inst_19425 = inst_19429;
var state_19502__$1 = (function (){var statearr_19509 = state_19502;
(statearr_19509[(8)] = inst_19425);

return statearr_19509;
})();
var statearr_19510_22183 = state_19502__$1;
(statearr_19510_22183[(2)] = null);

(statearr_19510_22183[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19503 === (4))){
var inst_19444 = (state_19502[(13)]);
var inst_19438 = (state_19502[(7)]);
var inst_19437 = (state_19502[(2)]);
var inst_19438__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19437,(0),null);
var inst_19440 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19437,(1),null);
var inst_19444__$1 = (inst_19438__$1 == null);
var state_19502__$1 = (function (){var statearr_19512 = state_19502;
(statearr_19512[(13)] = inst_19444__$1);

(statearr_19512[(14)] = inst_19440);

(statearr_19512[(7)] = inst_19438__$1);

return statearr_19512;
})();
if(cljs.core.truth_(inst_19444__$1)){
var statearr_19513_22186 = state_19502__$1;
(statearr_19513_22186[(1)] = (5));

} else {
var statearr_19516_22187 = state_19502__$1;
(statearr_19516_22187[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19503 === (15))){
var inst_19430 = (state_19502[(15)]);
var inst_19465 = (state_19502[(16)]);
var inst_19465__$1 = cljs.core.empty_QMARK_(inst_19430);
var state_19502__$1 = (function (){var statearr_19524 = state_19502;
(statearr_19524[(16)] = inst_19465__$1);

return statearr_19524;
})();
if(inst_19465__$1){
var statearr_19525_22188 = state_19502__$1;
(statearr_19525_22188[(1)] = (17));

} else {
var statearr_19526_22189 = state_19502__$1;
(statearr_19526_22189[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19503 === (21))){
var inst_19429 = (state_19502[(12)]);
var inst_19425 = inst_19429;
var state_19502__$1 = (function (){var statearr_19528 = state_19502;
(statearr_19528[(8)] = inst_19425);

return statearr_19528;
})();
var statearr_19529_22192 = state_19502__$1;
(statearr_19529_22192[(2)] = null);

(statearr_19529_22192[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19503 === (13))){
var inst_19456 = (state_19502[(2)]);
var inst_19457 = calc_state();
var inst_19425 = inst_19457;
var state_19502__$1 = (function (){var statearr_19531 = state_19502;
(statearr_19531[(8)] = inst_19425);

(statearr_19531[(17)] = inst_19456);

return statearr_19531;
})();
var statearr_19532_22194 = state_19502__$1;
(statearr_19532_22194[(2)] = null);

(statearr_19532_22194[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19503 === (22))){
var inst_19488 = (state_19502[(2)]);
var state_19502__$1 = state_19502;
var statearr_19533_22209 = state_19502__$1;
(statearr_19533_22209[(2)] = inst_19488);

(statearr_19533_22209[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19503 === (6))){
var inst_19440 = (state_19502[(14)]);
var inst_19447 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_19440,change);
var state_19502__$1 = state_19502;
var statearr_19535_22214 = state_19502__$1;
(statearr_19535_22214[(2)] = inst_19447);

(statearr_19535_22214[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19503 === (25))){
var state_19502__$1 = state_19502;
var statearr_19540_22215 = state_19502__$1;
(statearr_19540_22215[(2)] = null);

(statearr_19540_22215[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19503 === (17))){
var inst_19440 = (state_19502[(14)]);
var inst_19431 = (state_19502[(18)]);
var inst_19468 = (inst_19431.cljs$core$IFn$_invoke$arity$1 ? inst_19431.cljs$core$IFn$_invoke$arity$1(inst_19440) : inst_19431.call(null,inst_19440));
var inst_19469 = cljs.core.not(inst_19468);
var state_19502__$1 = state_19502;
var statearr_19545_22222 = state_19502__$1;
(statearr_19545_22222[(2)] = inst_19469);

(statearr_19545_22222[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19503 === (3))){
var inst_19498 = (state_19502[(2)]);
var state_19502__$1 = state_19502;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19502__$1,inst_19498);
} else {
if((state_val_19503 === (12))){
var state_19502__$1 = state_19502;
var statearr_19548_22223 = state_19502__$1;
(statearr_19548_22223[(2)] = null);

(statearr_19548_22223[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19503 === (2))){
var inst_19425 = (state_19502[(8)]);
var inst_19429 = (state_19502[(12)]);
var inst_19429__$1 = cljs.core.__destructure_map(inst_19425);
var inst_19430 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19429__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_19431 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19429__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_19432 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19429__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_19502__$1 = (function (){var statearr_19552 = state_19502;
(statearr_19552[(15)] = inst_19430);

(statearr_19552[(12)] = inst_19429__$1);

(statearr_19552[(18)] = inst_19431);

return statearr_19552;
})();
return cljs.core.async.ioc_alts_BANG_(state_19502__$1,(4),inst_19432);
} else {
if((state_val_19503 === (23))){
var inst_19479 = (state_19502[(2)]);
var state_19502__$1 = state_19502;
if(cljs.core.truth_(inst_19479)){
var statearr_19557_22226 = state_19502__$1;
(statearr_19557_22226[(1)] = (24));

} else {
var statearr_19558_22227 = state_19502__$1;
(statearr_19558_22227[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19503 === (19))){
var inst_19473 = (state_19502[(2)]);
var state_19502__$1 = state_19502;
var statearr_19561_22231 = state_19502__$1;
(statearr_19561_22231[(2)] = inst_19473);

(statearr_19561_22231[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19503 === (11))){
var inst_19440 = (state_19502[(14)]);
var inst_19453 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_19440);
var state_19502__$1 = state_19502;
var statearr_19562_22232 = state_19502__$1;
(statearr_19562_22232[(2)] = inst_19453);

(statearr_19562_22232[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19503 === (9))){
var inst_19440 = (state_19502[(14)]);
var inst_19430 = (state_19502[(15)]);
var inst_19461 = (state_19502[(19)]);
var inst_19461__$1 = (inst_19430.cljs$core$IFn$_invoke$arity$1 ? inst_19430.cljs$core$IFn$_invoke$arity$1(inst_19440) : inst_19430.call(null,inst_19440));
var state_19502__$1 = (function (){var statearr_19563 = state_19502;
(statearr_19563[(19)] = inst_19461__$1);

return statearr_19563;
})();
if(cljs.core.truth_(inst_19461__$1)){
var statearr_19565_22233 = state_19502__$1;
(statearr_19565_22233[(1)] = (14));

} else {
var statearr_19567_22235 = state_19502__$1;
(statearr_19567_22235[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19503 === (5))){
var inst_19444 = (state_19502[(13)]);
var state_19502__$1 = state_19502;
var statearr_19568_22236 = state_19502__$1;
(statearr_19568_22236[(2)] = inst_19444);

(statearr_19568_22236[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19503 === (14))){
var inst_19461 = (state_19502[(19)]);
var state_19502__$1 = state_19502;
var statearr_19569_22237 = state_19502__$1;
(statearr_19569_22237[(2)] = inst_19461);

(statearr_19569_22237[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19503 === (26))){
var inst_19484 = (state_19502[(2)]);
var state_19502__$1 = state_19502;
var statearr_19570_22239 = state_19502__$1;
(statearr_19570_22239[(2)] = inst_19484);

(statearr_19570_22239[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19503 === (16))){
var inst_19475 = (state_19502[(2)]);
var state_19502__$1 = state_19502;
if(cljs.core.truth_(inst_19475)){
var statearr_19571_22240 = state_19502__$1;
(statearr_19571_22240[(1)] = (20));

} else {
var statearr_19572_22241 = state_19502__$1;
(statearr_19572_22241[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19503 === (10))){
var inst_19490 = (state_19502[(2)]);
var state_19502__$1 = state_19502;
var statearr_19573_22242 = state_19502__$1;
(statearr_19573_22242[(2)] = inst_19490);

(statearr_19573_22242[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19503 === (18))){
var inst_19465 = (state_19502[(16)]);
var state_19502__$1 = state_19502;
var statearr_19574_22243 = state_19502__$1;
(statearr_19574_22243[(2)] = inst_19465);

(statearr_19574_22243[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19503 === (8))){
var inst_19438 = (state_19502[(7)]);
var inst_19451 = (inst_19438 == null);
var state_19502__$1 = state_19502;
if(cljs.core.truth_(inst_19451)){
var statearr_19575_22244 = state_19502__$1;
(statearr_19575_22244[(1)] = (11));

} else {
var statearr_19576_22245 = state_19502__$1;
(statearr_19576_22245[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});
return (function() {
var cljs$core$async$mix_$_state_machine__17475__auto__ = null;
var cljs$core$async$mix_$_state_machine__17475__auto____0 = (function (){
var statearr_19582 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19582[(0)] = cljs$core$async$mix_$_state_machine__17475__auto__);

(statearr_19582[(1)] = (1));

return statearr_19582;
});
var cljs$core$async$mix_$_state_machine__17475__auto____1 = (function (state_19502){
while(true){
var ret_value__17476__auto__ = (function (){try{while(true){
var result__17477__auto__ = switch__17474__auto__(state_19502);
if(cljs.core.keyword_identical_QMARK_(result__17477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17477__auto__;
}
break;
}
}catch (e19583){var ex__17478__auto__ = e19583;
var statearr_19584_22246 = state_19502;
(statearr_19584_22246[(2)] = ex__17478__auto__);


if(cljs.core.seq((state_19502[(4)]))){
var statearr_19586_22247 = state_19502;
(statearr_19586_22247[(1)] = cljs.core.first((state_19502[(4)])));

} else {
throw ex__17478__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22254 = state_19502;
state_19502 = G__22254;
continue;
} else {
return ret_value__17476__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__17475__auto__ = function(state_19502){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__17475__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__17475__auto____1.call(this,state_19502);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__17475__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__17475__auto____0;
cljs$core$async$mix_$_state_machine__17475__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__17475__auto____1;
return cljs$core$async$mix_$_state_machine__17475__auto__;
})()
})();
var state__17867__auto__ = (function (){var statearr_19591 = f__17866__auto__();
(statearr_19591[(6)] = c__17865__auto___22168);

return statearr_19591;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17867__auto__);
}));


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

var cljs$core$async$Pub$sub_STAR_$dyn_22265 = (function (p,v,ch,close_QMARK_){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5394__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5392__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_22265(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_22274 = (function (p,v,ch){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5394__auto__.call(null,p,v,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5392__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_22274(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_22278 = (function() {
var G__22279 = null;
var G__22279__1 = (function (p){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5394__auto__.call(null,p));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5392__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__22279__2 = (function (p,v){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5394__auto__.call(null,p,v));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5392__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__22279 = function(p,v){
switch(arguments.length){
case 1:
return G__22279__1.call(this,p);
case 2:
return G__22279__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__22279.cljs$core$IFn$_invoke$arity$1 = G__22279__1;
G__22279.cljs$core$IFn$_invoke$arity$2 = G__22279__2;
return G__22279;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__19638 = arguments.length;
switch (G__19638) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_22278(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_22278(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


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
var G__19674 = arguments.length;
switch (G__19674) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5045__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__19669_SHARP_){
if(cljs.core.truth_((p1__19669_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__19669_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__19669_SHARP_.call(null,topic)))){
return p1__19669_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__19669_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async19676 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19676 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta19677){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta19677 = meta19677;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async19676.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19678,meta19677__$1){
var self__ = this;
var _19678__$1 = this;
return (new cljs.core.async.t_cljs$core$async19676(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta19677__$1));
}));

(cljs.core.async.t_cljs$core$async19676.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19678){
var self__ = this;
var _19678__$1 = this;
return self__.meta19677;
}));

(cljs.core.async.t_cljs$core$async19676.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19676.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async19676.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19676.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async19676.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async19676.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async19676.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async19676.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta19677","meta19677",529935046,null)], null);
}));

(cljs.core.async.t_cljs$core$async19676.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async19676.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19676");

(cljs.core.async.t_cljs$core$async19676.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async19676");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19676.
 */
cljs.core.async.__GT_t_cljs$core$async19676 = (function cljs$core$async$__GT_t_cljs$core$async19676(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta19677){
return (new cljs.core.async.t_cljs$core$async19676(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta19677));
});

}

return (new cljs.core.async.t_cljs$core$async19676(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__17865__auto___22301 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17866__auto__ = (function (){var switch__17474__auto__ = (function (state_19793){
var state_val_19794 = (state_19793[(1)]);
if((state_val_19794 === (7))){
var inst_19788 = (state_19793[(2)]);
var state_19793__$1 = state_19793;
var statearr_19797_22303 = state_19793__$1;
(statearr_19797_22303[(2)] = inst_19788);

(statearr_19797_22303[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19794 === (20))){
var state_19793__$1 = state_19793;
var statearr_19798_22304 = state_19793__$1;
(statearr_19798_22304[(2)] = null);

(statearr_19798_22304[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19794 === (1))){
var state_19793__$1 = state_19793;
var statearr_19802_22305 = state_19793__$1;
(statearr_19802_22305[(2)] = null);

(statearr_19802_22305[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19794 === (24))){
var inst_19769 = (state_19793[(7)]);
var inst_19780 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_19769);
var state_19793__$1 = state_19793;
var statearr_19804_22309 = state_19793__$1;
(statearr_19804_22309[(2)] = inst_19780);

(statearr_19804_22309[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19794 === (4))){
var inst_19717 = (state_19793[(8)]);
var inst_19717__$1 = (state_19793[(2)]);
var inst_19720 = (inst_19717__$1 == null);
var state_19793__$1 = (function (){var statearr_19806 = state_19793;
(statearr_19806[(8)] = inst_19717__$1);

return statearr_19806;
})();
if(cljs.core.truth_(inst_19720)){
var statearr_19807_22314 = state_19793__$1;
(statearr_19807_22314[(1)] = (5));

} else {
var statearr_19808_22318 = state_19793__$1;
(statearr_19808_22318[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19794 === (15))){
var inst_19763 = (state_19793[(2)]);
var state_19793__$1 = state_19793;
var statearr_19810_22324 = state_19793__$1;
(statearr_19810_22324[(2)] = inst_19763);

(statearr_19810_22324[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19794 === (21))){
var inst_19785 = (state_19793[(2)]);
var state_19793__$1 = (function (){var statearr_19812 = state_19793;
(statearr_19812[(9)] = inst_19785);

return statearr_19812;
})();
var statearr_19813_22330 = state_19793__$1;
(statearr_19813_22330[(2)] = null);

(statearr_19813_22330[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19794 === (13))){
var inst_19743 = (state_19793[(10)]);
var inst_19746 = cljs.core.chunked_seq_QMARK_(inst_19743);
var state_19793__$1 = state_19793;
if(inst_19746){
var statearr_19818_22331 = state_19793__$1;
(statearr_19818_22331[(1)] = (16));

} else {
var statearr_19819_22332 = state_19793__$1;
(statearr_19819_22332[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19794 === (22))){
var inst_19775 = (state_19793[(2)]);
var state_19793__$1 = state_19793;
if(cljs.core.truth_(inst_19775)){
var statearr_19820_22333 = state_19793__$1;
(statearr_19820_22333[(1)] = (23));

} else {
var statearr_19822_22334 = state_19793__$1;
(statearr_19822_22334[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19794 === (6))){
var inst_19771 = (state_19793[(11)]);
var inst_19717 = (state_19793[(8)]);
var inst_19769 = (state_19793[(7)]);
var inst_19769__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_19717) : topic_fn.call(null,inst_19717));
var inst_19770 = cljs.core.deref(mults);
var inst_19771__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19770,inst_19769__$1);
var state_19793__$1 = (function (){var statearr_19826 = state_19793;
(statearr_19826[(11)] = inst_19771__$1);

(statearr_19826[(7)] = inst_19769__$1);

return statearr_19826;
})();
if(cljs.core.truth_(inst_19771__$1)){
var statearr_19828_22338 = state_19793__$1;
(statearr_19828_22338[(1)] = (19));

} else {
var statearr_19829_22339 = state_19793__$1;
(statearr_19829_22339[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19794 === (25))){
var inst_19782 = (state_19793[(2)]);
var state_19793__$1 = state_19793;
var statearr_19832_22340 = state_19793__$1;
(statearr_19832_22340[(2)] = inst_19782);

(statearr_19832_22340[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19794 === (17))){
var inst_19743 = (state_19793[(10)]);
var inst_19753 = cljs.core.first(inst_19743);
var inst_19755 = cljs.core.async.muxch_STAR_(inst_19753);
var inst_19756 = cljs.core.async.close_BANG_(inst_19755);
var inst_19757 = cljs.core.next(inst_19743);
var inst_19729 = inst_19757;
var inst_19730 = null;
var inst_19731 = (0);
var inst_19732 = (0);
var state_19793__$1 = (function (){var statearr_19834 = state_19793;
(statearr_19834[(12)] = inst_19731);

(statearr_19834[(13)] = inst_19730);

(statearr_19834[(14)] = inst_19732);

(statearr_19834[(15)] = inst_19729);

(statearr_19834[(16)] = inst_19756);

return statearr_19834;
})();
var statearr_19837_22342 = state_19793__$1;
(statearr_19837_22342[(2)] = null);

(statearr_19837_22342[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19794 === (3))){
var inst_19790 = (state_19793[(2)]);
var state_19793__$1 = state_19793;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19793__$1,inst_19790);
} else {
if((state_val_19794 === (12))){
var inst_19765 = (state_19793[(2)]);
var state_19793__$1 = state_19793;
var statearr_19848_22347 = state_19793__$1;
(statearr_19848_22347[(2)] = inst_19765);

(statearr_19848_22347[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19794 === (2))){
var state_19793__$1 = state_19793;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19793__$1,(4),ch);
} else {
if((state_val_19794 === (23))){
var state_19793__$1 = state_19793;
var statearr_19855_22348 = state_19793__$1;
(statearr_19855_22348[(2)] = null);

(statearr_19855_22348[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19794 === (19))){
var inst_19771 = (state_19793[(11)]);
var inst_19717 = (state_19793[(8)]);
var inst_19773 = cljs.core.async.muxch_STAR_(inst_19771);
var state_19793__$1 = state_19793;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19793__$1,(22),inst_19773,inst_19717);
} else {
if((state_val_19794 === (11))){
var inst_19743 = (state_19793[(10)]);
var inst_19729 = (state_19793[(15)]);
var inst_19743__$1 = cljs.core.seq(inst_19729);
var state_19793__$1 = (function (){var statearr_19867 = state_19793;
(statearr_19867[(10)] = inst_19743__$1);

return statearr_19867;
})();
if(inst_19743__$1){
var statearr_19869_22354 = state_19793__$1;
(statearr_19869_22354[(1)] = (13));

} else {
var statearr_19870_22355 = state_19793__$1;
(statearr_19870_22355[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19794 === (9))){
var inst_19767 = (state_19793[(2)]);
var state_19793__$1 = state_19793;
var statearr_19871_22356 = state_19793__$1;
(statearr_19871_22356[(2)] = inst_19767);

(statearr_19871_22356[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19794 === (5))){
var inst_19726 = cljs.core.deref(mults);
var inst_19727 = cljs.core.vals(inst_19726);
var inst_19728 = cljs.core.seq(inst_19727);
var inst_19729 = inst_19728;
var inst_19730 = null;
var inst_19731 = (0);
var inst_19732 = (0);
var state_19793__$1 = (function (){var statearr_19876 = state_19793;
(statearr_19876[(12)] = inst_19731);

(statearr_19876[(13)] = inst_19730);

(statearr_19876[(14)] = inst_19732);

(statearr_19876[(15)] = inst_19729);

return statearr_19876;
})();
var statearr_19882_22360 = state_19793__$1;
(statearr_19882_22360[(2)] = null);

(statearr_19882_22360[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19794 === (14))){
var state_19793__$1 = state_19793;
var statearr_19890_22361 = state_19793__$1;
(statearr_19890_22361[(2)] = null);

(statearr_19890_22361[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19794 === (16))){
var inst_19743 = (state_19793[(10)]);
var inst_19748 = cljs.core.chunk_first(inst_19743);
var inst_19749 = cljs.core.chunk_rest(inst_19743);
var inst_19750 = cljs.core.count(inst_19748);
var inst_19729 = inst_19749;
var inst_19730 = inst_19748;
var inst_19731 = inst_19750;
var inst_19732 = (0);
var state_19793__$1 = (function (){var statearr_19891 = state_19793;
(statearr_19891[(12)] = inst_19731);

(statearr_19891[(13)] = inst_19730);

(statearr_19891[(14)] = inst_19732);

(statearr_19891[(15)] = inst_19729);

return statearr_19891;
})();
var statearr_19892_22362 = state_19793__$1;
(statearr_19892_22362[(2)] = null);

(statearr_19892_22362[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19794 === (10))){
var inst_19731 = (state_19793[(12)]);
var inst_19730 = (state_19793[(13)]);
var inst_19732 = (state_19793[(14)]);
var inst_19729 = (state_19793[(15)]);
var inst_19737 = cljs.core._nth(inst_19730,inst_19732);
var inst_19738 = cljs.core.async.muxch_STAR_(inst_19737);
var inst_19739 = cljs.core.async.close_BANG_(inst_19738);
var inst_19740 = (inst_19732 + (1));
var tmp19883 = inst_19731;
var tmp19884 = inst_19730;
var tmp19885 = inst_19729;
var inst_19729__$1 = tmp19885;
var inst_19730__$1 = tmp19884;
var inst_19731__$1 = tmp19883;
var inst_19732__$1 = inst_19740;
var state_19793__$1 = (function (){var statearr_19894 = state_19793;
(statearr_19894[(12)] = inst_19731__$1);

(statearr_19894[(13)] = inst_19730__$1);

(statearr_19894[(17)] = inst_19739);

(statearr_19894[(14)] = inst_19732__$1);

(statearr_19894[(15)] = inst_19729__$1);

return statearr_19894;
})();
var statearr_19895_22364 = state_19793__$1;
(statearr_19895_22364[(2)] = null);

(statearr_19895_22364[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19794 === (18))){
var inst_19760 = (state_19793[(2)]);
var state_19793__$1 = state_19793;
var statearr_19896_22366 = state_19793__$1;
(statearr_19896_22366[(2)] = inst_19760);

(statearr_19896_22366[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19794 === (8))){
var inst_19731 = (state_19793[(12)]);
var inst_19732 = (state_19793[(14)]);
var inst_19734 = (inst_19732 < inst_19731);
var inst_19735 = inst_19734;
var state_19793__$1 = state_19793;
if(cljs.core.truth_(inst_19735)){
var statearr_19897_22370 = state_19793__$1;
(statearr_19897_22370[(1)] = (10));

} else {
var statearr_19898_22371 = state_19793__$1;
(statearr_19898_22371[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});
return (function() {
var cljs$core$async$state_machine__17475__auto__ = null;
var cljs$core$async$state_machine__17475__auto____0 = (function (){
var statearr_19899 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19899[(0)] = cljs$core$async$state_machine__17475__auto__);

(statearr_19899[(1)] = (1));

return statearr_19899;
});
var cljs$core$async$state_machine__17475__auto____1 = (function (state_19793){
while(true){
var ret_value__17476__auto__ = (function (){try{while(true){
var result__17477__auto__ = switch__17474__auto__(state_19793);
if(cljs.core.keyword_identical_QMARK_(result__17477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17477__auto__;
}
break;
}
}catch (e19902){var ex__17478__auto__ = e19902;
var statearr_19903_22375 = state_19793;
(statearr_19903_22375[(2)] = ex__17478__auto__);


if(cljs.core.seq((state_19793[(4)]))){
var statearr_19904_22376 = state_19793;
(statearr_19904_22376[(1)] = cljs.core.first((state_19793[(4)])));

} else {
throw ex__17478__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22383 = state_19793;
state_19793 = G__22383;
continue;
} else {
return ret_value__17476__auto__;
}
break;
}
});
cljs$core$async$state_machine__17475__auto__ = function(state_19793){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17475__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17475__auto____1.call(this,state_19793);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17475__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17475__auto____0;
cljs$core$async$state_machine__17475__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17475__auto____1;
return cljs$core$async$state_machine__17475__auto__;
})()
})();
var state__17867__auto__ = (function (){var statearr_19906 = f__17866__auto__();
(statearr_19906[(6)] = c__17865__auto___22301);

return statearr_19906;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17867__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__19909 = arguments.length;
switch (G__19909) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

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
var G__19919 = arguments.length;
switch (G__19919) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

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
var G__19926 = arguments.length;
switch (G__19926) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__17865__auto___22403 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17866__auto__ = (function (){var switch__17474__auto__ = (function (state_19977){
var state_val_19978 = (state_19977[(1)]);
if((state_val_19978 === (7))){
var state_19977__$1 = state_19977;
var statearr_19981_22404 = state_19977__$1;
(statearr_19981_22404[(2)] = null);

(statearr_19981_22404[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19978 === (1))){
var state_19977__$1 = state_19977;
var statearr_19982_22405 = state_19977__$1;
(statearr_19982_22405[(2)] = null);

(statearr_19982_22405[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19978 === (4))){
var inst_19933 = (state_19977[(7)]);
var inst_19934 = (state_19977[(8)]);
var inst_19937 = (inst_19934 < inst_19933);
var state_19977__$1 = state_19977;
if(cljs.core.truth_(inst_19937)){
var statearr_19991_22406 = state_19977__$1;
(statearr_19991_22406[(1)] = (6));

} else {
var statearr_19992_22407 = state_19977__$1;
(statearr_19992_22407[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19978 === (15))){
var inst_19963 = (state_19977[(9)]);
var inst_19968 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_19963);
var state_19977__$1 = state_19977;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19977__$1,(17),out,inst_19968);
} else {
if((state_val_19978 === (13))){
var inst_19963 = (state_19977[(9)]);
var inst_19963__$1 = (state_19977[(2)]);
var inst_19964 = cljs.core.some(cljs.core.nil_QMARK_,inst_19963__$1);
var state_19977__$1 = (function (){var statearr_19997 = state_19977;
(statearr_19997[(9)] = inst_19963__$1);

return statearr_19997;
})();
if(cljs.core.truth_(inst_19964)){
var statearr_19998_22417 = state_19977__$1;
(statearr_19998_22417[(1)] = (14));

} else {
var statearr_19999_22418 = state_19977__$1;
(statearr_19999_22418[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19978 === (6))){
var state_19977__$1 = state_19977;
var statearr_20000_22419 = state_19977__$1;
(statearr_20000_22419[(2)] = null);

(statearr_20000_22419[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19978 === (17))){
var inst_19970 = (state_19977[(2)]);
var state_19977__$1 = (function (){var statearr_20005 = state_19977;
(statearr_20005[(10)] = inst_19970);

return statearr_20005;
})();
var statearr_20006_22420 = state_19977__$1;
(statearr_20006_22420[(2)] = null);

(statearr_20006_22420[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19978 === (3))){
var inst_19975 = (state_19977[(2)]);
var state_19977__$1 = state_19977;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19977__$1,inst_19975);
} else {
if((state_val_19978 === (12))){
var _ = (function (){var statearr_20008 = state_19977;
(statearr_20008[(4)] = cljs.core.rest((state_19977[(4)])));

return statearr_20008;
})();
var state_19977__$1 = state_19977;
var ex20004 = (state_19977__$1[(2)]);
var statearr_20009_22421 = state_19977__$1;
(statearr_20009_22421[(5)] = ex20004);


if((ex20004 instanceof Object)){
var statearr_20010_22422 = state_19977__$1;
(statearr_20010_22422[(1)] = (11));

(statearr_20010_22422[(5)] = null);

} else {
throw ex20004;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19978 === (2))){
var inst_19932 = cljs.core.reset_BANG_(dctr,cnt);
var inst_19933 = cnt;
var inst_19934 = (0);
var state_19977__$1 = (function (){var statearr_20013 = state_19977;
(statearr_20013[(7)] = inst_19933);

(statearr_20013[(11)] = inst_19932);

(statearr_20013[(8)] = inst_19934);

return statearr_20013;
})();
var statearr_20016_22429 = state_19977__$1;
(statearr_20016_22429[(2)] = null);

(statearr_20016_22429[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19978 === (11))){
var inst_19942 = (state_19977[(2)]);
var inst_19943 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_19977__$1 = (function (){var statearr_20019 = state_19977;
(statearr_20019[(12)] = inst_19942);

return statearr_20019;
})();
var statearr_20021_22430 = state_19977__$1;
(statearr_20021_22430[(2)] = inst_19943);

(statearr_20021_22430[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19978 === (9))){
var inst_19934 = (state_19977[(8)]);
var _ = (function (){var statearr_20028 = state_19977;
(statearr_20028[(4)] = cljs.core.cons((12),(state_19977[(4)])));

return statearr_20028;
})();
var inst_19949 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_19934) : chs__$1.call(null,inst_19934));
var inst_19950 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_19934) : done.call(null,inst_19934));
var inst_19951 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_19949,inst_19950);
var ___$1 = (function (){var statearr_20031 = state_19977;
(statearr_20031[(4)] = cljs.core.rest((state_19977[(4)])));

return statearr_20031;
})();
var state_19977__$1 = state_19977;
var statearr_20033_22431 = state_19977__$1;
(statearr_20033_22431[(2)] = inst_19951);

(statearr_20033_22431[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19978 === (5))){
var inst_19961 = (state_19977[(2)]);
var state_19977__$1 = (function (){var statearr_20036 = state_19977;
(statearr_20036[(13)] = inst_19961);

return statearr_20036;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19977__$1,(13),dchan);
} else {
if((state_val_19978 === (14))){
var inst_19966 = cljs.core.async.close_BANG_(out);
var state_19977__$1 = state_19977;
var statearr_20037_22432 = state_19977__$1;
(statearr_20037_22432[(2)] = inst_19966);

(statearr_20037_22432[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19978 === (16))){
var inst_19973 = (state_19977[(2)]);
var state_19977__$1 = state_19977;
var statearr_20038_22433 = state_19977__$1;
(statearr_20038_22433[(2)] = inst_19973);

(statearr_20038_22433[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19978 === (10))){
var inst_19934 = (state_19977[(8)]);
var inst_19954 = (state_19977[(2)]);
var inst_19955 = (inst_19934 + (1));
var inst_19934__$1 = inst_19955;
var state_19977__$1 = (function (){var statearr_20039 = state_19977;
(statearr_20039[(14)] = inst_19954);

(statearr_20039[(8)] = inst_19934__$1);

return statearr_20039;
})();
var statearr_20040_22434 = state_19977__$1;
(statearr_20040_22434[(2)] = null);

(statearr_20040_22434[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19978 === (8))){
var inst_19959 = (state_19977[(2)]);
var state_19977__$1 = state_19977;
var statearr_20042_22435 = state_19977__$1;
(statearr_20042_22435[(2)] = inst_19959);

(statearr_20042_22435[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});
return (function() {
var cljs$core$async$state_machine__17475__auto__ = null;
var cljs$core$async$state_machine__17475__auto____0 = (function (){
var statearr_20044 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20044[(0)] = cljs$core$async$state_machine__17475__auto__);

(statearr_20044[(1)] = (1));

return statearr_20044;
});
var cljs$core$async$state_machine__17475__auto____1 = (function (state_19977){
while(true){
var ret_value__17476__auto__ = (function (){try{while(true){
var result__17477__auto__ = switch__17474__auto__(state_19977);
if(cljs.core.keyword_identical_QMARK_(result__17477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17477__auto__;
}
break;
}
}catch (e20046){var ex__17478__auto__ = e20046;
var statearr_20047_22436 = state_19977;
(statearr_20047_22436[(2)] = ex__17478__auto__);


if(cljs.core.seq((state_19977[(4)]))){
var statearr_20048_22437 = state_19977;
(statearr_20048_22437[(1)] = cljs.core.first((state_19977[(4)])));

} else {
throw ex__17478__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22438 = state_19977;
state_19977 = G__22438;
continue;
} else {
return ret_value__17476__auto__;
}
break;
}
});
cljs$core$async$state_machine__17475__auto__ = function(state_19977){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17475__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17475__auto____1.call(this,state_19977);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17475__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17475__auto____0;
cljs$core$async$state_machine__17475__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17475__auto____1;
return cljs$core$async$state_machine__17475__auto__;
})()
})();
var state__17867__auto__ = (function (){var statearr_20051 = f__17866__auto__();
(statearr_20051[(6)] = c__17865__auto___22403);

return statearr_20051;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17867__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__20065 = arguments.length;
switch (G__20065) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__17865__auto___22446 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17866__auto__ = (function (){var switch__17474__auto__ = (function (state_20114){
var state_val_20115 = (state_20114[(1)]);
if((state_val_20115 === (7))){
var inst_20093 = (state_20114[(7)]);
var inst_20094 = (state_20114[(8)]);
var inst_20093__$1 = (state_20114[(2)]);
var inst_20094__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_20093__$1,(0),null);
var inst_20095 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_20093__$1,(1),null);
var inst_20096 = (inst_20094__$1 == null);
var state_20114__$1 = (function (){var statearr_20116 = state_20114;
(statearr_20116[(7)] = inst_20093__$1);

(statearr_20116[(8)] = inst_20094__$1);

(statearr_20116[(9)] = inst_20095);

return statearr_20116;
})();
if(cljs.core.truth_(inst_20096)){
var statearr_20117_22447 = state_20114__$1;
(statearr_20117_22447[(1)] = (8));

} else {
var statearr_20118_22448 = state_20114__$1;
(statearr_20118_22448[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20115 === (1))){
var inst_20083 = cljs.core.vec(chs);
var inst_20084 = inst_20083;
var state_20114__$1 = (function (){var statearr_20120 = state_20114;
(statearr_20120[(10)] = inst_20084);

return statearr_20120;
})();
var statearr_20122_22449 = state_20114__$1;
(statearr_20122_22449[(2)] = null);

(statearr_20122_22449[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20115 === (4))){
var inst_20084 = (state_20114[(10)]);
var state_20114__$1 = state_20114;
return cljs.core.async.ioc_alts_BANG_(state_20114__$1,(7),inst_20084);
} else {
if((state_val_20115 === (6))){
var inst_20110 = (state_20114[(2)]);
var state_20114__$1 = state_20114;
var statearr_20125_22450 = state_20114__$1;
(statearr_20125_22450[(2)] = inst_20110);

(statearr_20125_22450[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20115 === (3))){
var inst_20112 = (state_20114[(2)]);
var state_20114__$1 = state_20114;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20114__$1,inst_20112);
} else {
if((state_val_20115 === (2))){
var inst_20084 = (state_20114[(10)]);
var inst_20086 = cljs.core.count(inst_20084);
var inst_20087 = (inst_20086 > (0));
var state_20114__$1 = state_20114;
if(cljs.core.truth_(inst_20087)){
var statearr_20132_22451 = state_20114__$1;
(statearr_20132_22451[(1)] = (4));

} else {
var statearr_20133_22452 = state_20114__$1;
(statearr_20133_22452[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20115 === (11))){
var inst_20084 = (state_20114[(10)]);
var inst_20103 = (state_20114[(2)]);
var tmp20127 = inst_20084;
var inst_20084__$1 = tmp20127;
var state_20114__$1 = (function (){var statearr_20134 = state_20114;
(statearr_20134[(11)] = inst_20103);

(statearr_20134[(10)] = inst_20084__$1);

return statearr_20134;
})();
var statearr_20138_22453 = state_20114__$1;
(statearr_20138_22453[(2)] = null);

(statearr_20138_22453[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20115 === (9))){
var inst_20094 = (state_20114[(8)]);
var state_20114__$1 = state_20114;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20114__$1,(11),out,inst_20094);
} else {
if((state_val_20115 === (5))){
var inst_20108 = cljs.core.async.close_BANG_(out);
var state_20114__$1 = state_20114;
var statearr_20139_22454 = state_20114__$1;
(statearr_20139_22454[(2)] = inst_20108);

(statearr_20139_22454[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20115 === (10))){
var inst_20106 = (state_20114[(2)]);
var state_20114__$1 = state_20114;
var statearr_20140_22455 = state_20114__$1;
(statearr_20140_22455[(2)] = inst_20106);

(statearr_20140_22455[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20115 === (8))){
var inst_20093 = (state_20114[(7)]);
var inst_20084 = (state_20114[(10)]);
var inst_20094 = (state_20114[(8)]);
var inst_20095 = (state_20114[(9)]);
var inst_20098 = (function (){var cs = inst_20084;
var vec__20089 = inst_20093;
var v = inst_20094;
var c = inst_20095;
return (function (p1__20057_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__20057_SHARP_);
});
})();
var inst_20099 = cljs.core.filterv(inst_20098,inst_20084);
var inst_20084__$1 = inst_20099;
var state_20114__$1 = (function (){var statearr_20143 = state_20114;
(statearr_20143[(10)] = inst_20084__$1);

return statearr_20143;
})();
var statearr_20145_22459 = state_20114__$1;
(statearr_20145_22459[(2)] = null);

(statearr_20145_22459[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});
return (function() {
var cljs$core$async$state_machine__17475__auto__ = null;
var cljs$core$async$state_machine__17475__auto____0 = (function (){
var statearr_20149 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20149[(0)] = cljs$core$async$state_machine__17475__auto__);

(statearr_20149[(1)] = (1));

return statearr_20149;
});
var cljs$core$async$state_machine__17475__auto____1 = (function (state_20114){
while(true){
var ret_value__17476__auto__ = (function (){try{while(true){
var result__17477__auto__ = switch__17474__auto__(state_20114);
if(cljs.core.keyword_identical_QMARK_(result__17477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17477__auto__;
}
break;
}
}catch (e20157){var ex__17478__auto__ = e20157;
var statearr_20158_22463 = state_20114;
(statearr_20158_22463[(2)] = ex__17478__auto__);


if(cljs.core.seq((state_20114[(4)]))){
var statearr_20159_22464 = state_20114;
(statearr_20159_22464[(1)] = cljs.core.first((state_20114[(4)])));

} else {
throw ex__17478__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22465 = state_20114;
state_20114 = G__22465;
continue;
} else {
return ret_value__17476__auto__;
}
break;
}
});
cljs$core$async$state_machine__17475__auto__ = function(state_20114){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17475__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17475__auto____1.call(this,state_20114);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17475__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17475__auto____0;
cljs$core$async$state_machine__17475__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17475__auto____1;
return cljs$core$async$state_machine__17475__auto__;
})()
})();
var state__17867__auto__ = (function (){var statearr_20166 = f__17866__auto__();
(statearr_20166[(6)] = c__17865__auto___22446);

return statearr_20166;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17867__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

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
var G__20178 = arguments.length;
switch (G__20178) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__17865__auto___22467 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17866__auto__ = (function (){var switch__17474__auto__ = (function (state_20228){
var state_val_20229 = (state_20228[(1)]);
if((state_val_20229 === (7))){
var inst_20206 = (state_20228[(7)]);
var inst_20206__$1 = (state_20228[(2)]);
var inst_20207 = (inst_20206__$1 == null);
var inst_20208 = cljs.core.not(inst_20207);
var state_20228__$1 = (function (){var statearr_20233 = state_20228;
(statearr_20233[(7)] = inst_20206__$1);

return statearr_20233;
})();
if(inst_20208){
var statearr_20234_22470 = state_20228__$1;
(statearr_20234_22470[(1)] = (8));

} else {
var statearr_20237_22471 = state_20228__$1;
(statearr_20237_22471[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20229 === (1))){
var inst_20200 = (0);
var state_20228__$1 = (function (){var statearr_20241 = state_20228;
(statearr_20241[(8)] = inst_20200);

return statearr_20241;
})();
var statearr_20243_22472 = state_20228__$1;
(statearr_20243_22472[(2)] = null);

(statearr_20243_22472[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20229 === (4))){
var state_20228__$1 = state_20228;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20228__$1,(7),ch);
} else {
if((state_val_20229 === (6))){
var inst_20219 = (state_20228[(2)]);
var state_20228__$1 = state_20228;
var statearr_20250_22476 = state_20228__$1;
(statearr_20250_22476[(2)] = inst_20219);

(statearr_20250_22476[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20229 === (3))){
var inst_20225 = (state_20228[(2)]);
var inst_20226 = cljs.core.async.close_BANG_(out);
var state_20228__$1 = (function (){var statearr_20255 = state_20228;
(statearr_20255[(9)] = inst_20225);

return statearr_20255;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_20228__$1,inst_20226);
} else {
if((state_val_20229 === (2))){
var inst_20200 = (state_20228[(8)]);
var inst_20202 = (inst_20200 < n);
var state_20228__$1 = state_20228;
if(cljs.core.truth_(inst_20202)){
var statearr_20263_22477 = state_20228__$1;
(statearr_20263_22477[(1)] = (4));

} else {
var statearr_20264_22478 = state_20228__$1;
(statearr_20264_22478[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20229 === (11))){
var inst_20200 = (state_20228[(8)]);
var inst_20211 = (state_20228[(2)]);
var inst_20212 = (inst_20200 + (1));
var inst_20200__$1 = inst_20212;
var state_20228__$1 = (function (){var statearr_20270 = state_20228;
(statearr_20270[(10)] = inst_20211);

(statearr_20270[(8)] = inst_20200__$1);

return statearr_20270;
})();
var statearr_20271_22479 = state_20228__$1;
(statearr_20271_22479[(2)] = null);

(statearr_20271_22479[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20229 === (9))){
var state_20228__$1 = state_20228;
var statearr_20274_22480 = state_20228__$1;
(statearr_20274_22480[(2)] = null);

(statearr_20274_22480[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20229 === (5))){
var state_20228__$1 = state_20228;
var statearr_20284_22481 = state_20228__$1;
(statearr_20284_22481[(2)] = null);

(statearr_20284_22481[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20229 === (10))){
var inst_20216 = (state_20228[(2)]);
var state_20228__$1 = state_20228;
var statearr_20286_22482 = state_20228__$1;
(statearr_20286_22482[(2)] = inst_20216);

(statearr_20286_22482[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20229 === (8))){
var inst_20206 = (state_20228[(7)]);
var state_20228__$1 = state_20228;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20228__$1,(11),out,inst_20206);
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
});
return (function() {
var cljs$core$async$state_machine__17475__auto__ = null;
var cljs$core$async$state_machine__17475__auto____0 = (function (){
var statearr_20291 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_20291[(0)] = cljs$core$async$state_machine__17475__auto__);

(statearr_20291[(1)] = (1));

return statearr_20291;
});
var cljs$core$async$state_machine__17475__auto____1 = (function (state_20228){
while(true){
var ret_value__17476__auto__ = (function (){try{while(true){
var result__17477__auto__ = switch__17474__auto__(state_20228);
if(cljs.core.keyword_identical_QMARK_(result__17477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17477__auto__;
}
break;
}
}catch (e20296){var ex__17478__auto__ = e20296;
var statearr_20297_22489 = state_20228;
(statearr_20297_22489[(2)] = ex__17478__auto__);


if(cljs.core.seq((state_20228[(4)]))){
var statearr_20300_22490 = state_20228;
(statearr_20300_22490[(1)] = cljs.core.first((state_20228[(4)])));

} else {
throw ex__17478__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22491 = state_20228;
state_20228 = G__22491;
continue;
} else {
return ret_value__17476__auto__;
}
break;
}
});
cljs$core$async$state_machine__17475__auto__ = function(state_20228){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17475__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17475__auto____1.call(this,state_20228);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17475__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17475__auto____0;
cljs$core$async$state_machine__17475__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17475__auto____1;
return cljs$core$async$state_machine__17475__auto__;
})()
})();
var state__17867__auto__ = (function (){var statearr_20304 = f__17866__auto__();
(statearr_20304[(6)] = c__17865__auto___22467);

return statearr_20304;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17867__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async20311 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20311 = (function (f,ch,meta20312){
this.f = f;
this.ch = ch;
this.meta20312 = meta20312;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async20311.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20313,meta20312__$1){
var self__ = this;
var _20313__$1 = this;
return (new cljs.core.async.t_cljs$core$async20311(self__.f,self__.ch,meta20312__$1));
}));

(cljs.core.async.t_cljs$core$async20311.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20313){
var self__ = this;
var _20313__$1 = this;
return self__.meta20312;
}));

(cljs.core.async.t_cljs$core$async20311.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20311.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async20311.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async20311.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20311.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async20328 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20328 = (function (f,ch,meta20312,_,fn1,meta20329){
this.f = f;
this.ch = ch;
this.meta20312 = meta20312;
this._ = _;
this.fn1 = fn1;
this.meta20329 = meta20329;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async20328.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20330,meta20329__$1){
var self__ = this;
var _20330__$1 = this;
return (new cljs.core.async.t_cljs$core$async20328(self__.f,self__.ch,self__.meta20312,self__._,self__.fn1,meta20329__$1));
}));

(cljs.core.async.t_cljs$core$async20328.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20330){
var self__ = this;
var _20330__$1 = this;
return self__.meta20329;
}));

(cljs.core.async.t_cljs$core$async20328.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20328.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async20328.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async20328.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__20309_SHARP_){
var G__20340 = (((p1__20309_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__20309_SHARP_) : self__.f.call(null,p1__20309_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__20340) : f1.call(null,G__20340));
});
}));

(cljs.core.async.t_cljs$core$async20328.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta20312","meta20312",1271978584,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async20311","cljs.core.async/t_cljs$core$async20311",168713158,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta20329","meta20329",7306210,null)], null);
}));

(cljs.core.async.t_cljs$core$async20328.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async20328.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20328");

(cljs.core.async.t_cljs$core$async20328.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async20328");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async20328.
 */
cljs.core.async.__GT_t_cljs$core$async20328 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async20328(f__$1,ch__$1,meta20312__$1,___$2,fn1__$1,meta20329){
return (new cljs.core.async.t_cljs$core$async20328(f__$1,ch__$1,meta20312__$1,___$2,fn1__$1,meta20329));
});

}

return (new cljs.core.async.t_cljs$core$async20328(self__.f,self__.ch,self__.meta20312,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__5043__auto__ = ret;
if(cljs.core.truth_(and__5043__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5043__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__20349 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__20349) : self__.f.call(null,G__20349));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async20311.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20311.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async20311.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta20312","meta20312",1271978584,null)], null);
}));

(cljs.core.async.t_cljs$core$async20311.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async20311.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20311");

(cljs.core.async.t_cljs$core$async20311.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async20311");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async20311.
 */
cljs.core.async.__GT_t_cljs$core$async20311 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async20311(f__$1,ch__$1,meta20312){
return (new cljs.core.async.t_cljs$core$async20311(f__$1,ch__$1,meta20312));
});

}

return (new cljs.core.async.t_cljs$core$async20311(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async20357 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20357 = (function (f,ch,meta20358){
this.f = f;
this.ch = ch;
this.meta20358 = meta20358;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async20357.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20359,meta20358__$1){
var self__ = this;
var _20359__$1 = this;
return (new cljs.core.async.t_cljs$core$async20357(self__.f,self__.ch,meta20358__$1));
}));

(cljs.core.async.t_cljs$core$async20357.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20359){
var self__ = this;
var _20359__$1 = this;
return self__.meta20358;
}));

(cljs.core.async.t_cljs$core$async20357.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20357.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async20357.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20357.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async20357.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20357.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async20357.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta20358","meta20358",-1547119872,null)], null);
}));

(cljs.core.async.t_cljs$core$async20357.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async20357.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20357");

(cljs.core.async.t_cljs$core$async20357.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async20357");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async20357.
 */
cljs.core.async.__GT_t_cljs$core$async20357 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async20357(f__$1,ch__$1,meta20358){
return (new cljs.core.async.t_cljs$core$async20357(f__$1,ch__$1,meta20358));
});

}

return (new cljs.core.async.t_cljs$core$async20357(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async20377 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20377 = (function (p,ch,meta20378){
this.p = p;
this.ch = ch;
this.meta20378 = meta20378;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async20377.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20379,meta20378__$1){
var self__ = this;
var _20379__$1 = this;
return (new cljs.core.async.t_cljs$core$async20377(self__.p,self__.ch,meta20378__$1));
}));

(cljs.core.async.t_cljs$core$async20377.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20379){
var self__ = this;
var _20379__$1 = this;
return self__.meta20378;
}));

(cljs.core.async.t_cljs$core$async20377.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20377.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async20377.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async20377.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20377.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async20377.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20377.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async20377.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta20378","meta20378",647564650,null)], null);
}));

(cljs.core.async.t_cljs$core$async20377.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async20377.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20377");

(cljs.core.async.t_cljs$core$async20377.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async20377");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async20377.
 */
cljs.core.async.__GT_t_cljs$core$async20377 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async20377(p__$1,ch__$1,meta20378){
return (new cljs.core.async.t_cljs$core$async20377(p__$1,ch__$1,meta20378));
});

}

return (new cljs.core.async.t_cljs$core$async20377(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__20407 = arguments.length;
switch (G__20407) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__17865__auto___22510 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17866__auto__ = (function (){var switch__17474__auto__ = (function (state_20434){
var state_val_20435 = (state_20434[(1)]);
if((state_val_20435 === (7))){
var inst_20430 = (state_20434[(2)]);
var state_20434__$1 = state_20434;
var statearr_20440_22511 = state_20434__$1;
(statearr_20440_22511[(2)] = inst_20430);

(statearr_20440_22511[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20435 === (1))){
var state_20434__$1 = state_20434;
var statearr_20443_22512 = state_20434__$1;
(statearr_20443_22512[(2)] = null);

(statearr_20443_22512[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20435 === (4))){
var inst_20414 = (state_20434[(7)]);
var inst_20414__$1 = (state_20434[(2)]);
var inst_20415 = (inst_20414__$1 == null);
var state_20434__$1 = (function (){var statearr_20445 = state_20434;
(statearr_20445[(7)] = inst_20414__$1);

return statearr_20445;
})();
if(cljs.core.truth_(inst_20415)){
var statearr_20446_22513 = state_20434__$1;
(statearr_20446_22513[(1)] = (5));

} else {
var statearr_20448_22514 = state_20434__$1;
(statearr_20448_22514[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20435 === (6))){
var inst_20414 = (state_20434[(7)]);
var inst_20421 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_20414) : p.call(null,inst_20414));
var state_20434__$1 = state_20434;
if(cljs.core.truth_(inst_20421)){
var statearr_20452_22515 = state_20434__$1;
(statearr_20452_22515[(1)] = (8));

} else {
var statearr_20453_22516 = state_20434__$1;
(statearr_20453_22516[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20435 === (3))){
var inst_20432 = (state_20434[(2)]);
var state_20434__$1 = state_20434;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20434__$1,inst_20432);
} else {
if((state_val_20435 === (2))){
var state_20434__$1 = state_20434;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20434__$1,(4),ch);
} else {
if((state_val_20435 === (11))){
var inst_20424 = (state_20434[(2)]);
var state_20434__$1 = state_20434;
var statearr_20465_22517 = state_20434__$1;
(statearr_20465_22517[(2)] = inst_20424);

(statearr_20465_22517[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20435 === (9))){
var state_20434__$1 = state_20434;
var statearr_20468_22518 = state_20434__$1;
(statearr_20468_22518[(2)] = null);

(statearr_20468_22518[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20435 === (5))){
var inst_20417 = cljs.core.async.close_BANG_(out);
var state_20434__$1 = state_20434;
var statearr_20471_22520 = state_20434__$1;
(statearr_20471_22520[(2)] = inst_20417);

(statearr_20471_22520[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20435 === (10))){
var inst_20427 = (state_20434[(2)]);
var state_20434__$1 = (function (){var statearr_20473 = state_20434;
(statearr_20473[(8)] = inst_20427);

return statearr_20473;
})();
var statearr_20476_22522 = state_20434__$1;
(statearr_20476_22522[(2)] = null);

(statearr_20476_22522[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20435 === (8))){
var inst_20414 = (state_20434[(7)]);
var state_20434__$1 = state_20434;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20434__$1,(11),out,inst_20414);
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
});
return (function() {
var cljs$core$async$state_machine__17475__auto__ = null;
var cljs$core$async$state_machine__17475__auto____0 = (function (){
var statearr_20486 = [null,null,null,null,null,null,null,null,null];
(statearr_20486[(0)] = cljs$core$async$state_machine__17475__auto__);

(statearr_20486[(1)] = (1));

return statearr_20486;
});
var cljs$core$async$state_machine__17475__auto____1 = (function (state_20434){
while(true){
var ret_value__17476__auto__ = (function (){try{while(true){
var result__17477__auto__ = switch__17474__auto__(state_20434);
if(cljs.core.keyword_identical_QMARK_(result__17477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17477__auto__;
}
break;
}
}catch (e20488){var ex__17478__auto__ = e20488;
var statearr_20489_22527 = state_20434;
(statearr_20489_22527[(2)] = ex__17478__auto__);


if(cljs.core.seq((state_20434[(4)]))){
var statearr_20492_22528 = state_20434;
(statearr_20492_22528[(1)] = cljs.core.first((state_20434[(4)])));

} else {
throw ex__17478__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22529 = state_20434;
state_20434 = G__22529;
continue;
} else {
return ret_value__17476__auto__;
}
break;
}
});
cljs$core$async$state_machine__17475__auto__ = function(state_20434){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17475__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17475__auto____1.call(this,state_20434);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17475__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17475__auto____0;
cljs$core$async$state_machine__17475__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17475__auto____1;
return cljs$core$async$state_machine__17475__auto__;
})()
})();
var state__17867__auto__ = (function (){var statearr_20499 = f__17866__auto__();
(statearr_20499[(6)] = c__17865__auto___22510);

return statearr_20499;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17867__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__20506 = arguments.length;
switch (G__20506) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__17865__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17866__auto__ = (function (){var switch__17474__auto__ = (function (state_20588){
var state_val_20589 = (state_20588[(1)]);
if((state_val_20589 === (7))){
var inst_20584 = (state_20588[(2)]);
var state_20588__$1 = state_20588;
var statearr_20603_22534 = state_20588__$1;
(statearr_20603_22534[(2)] = inst_20584);

(statearr_20603_22534[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20589 === (20))){
var inst_20551 = (state_20588[(7)]);
var inst_20563 = (state_20588[(2)]);
var inst_20564 = cljs.core.next(inst_20551);
var inst_20535 = inst_20564;
var inst_20536 = null;
var inst_20537 = (0);
var inst_20538 = (0);
var state_20588__$1 = (function (){var statearr_20610 = state_20588;
(statearr_20610[(8)] = inst_20536);

(statearr_20610[(9)] = inst_20537);

(statearr_20610[(10)] = inst_20538);

(statearr_20610[(11)] = inst_20563);

(statearr_20610[(12)] = inst_20535);

return statearr_20610;
})();
var statearr_20614_22535 = state_20588__$1;
(statearr_20614_22535[(2)] = null);

(statearr_20614_22535[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20589 === (1))){
var state_20588__$1 = state_20588;
var statearr_20619_22536 = state_20588__$1;
(statearr_20619_22536[(2)] = null);

(statearr_20619_22536[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20589 === (4))){
var inst_20522 = (state_20588[(13)]);
var inst_20522__$1 = (state_20588[(2)]);
var inst_20523 = (inst_20522__$1 == null);
var state_20588__$1 = (function (){var statearr_20625 = state_20588;
(statearr_20625[(13)] = inst_20522__$1);

return statearr_20625;
})();
if(cljs.core.truth_(inst_20523)){
var statearr_20628_22538 = state_20588__$1;
(statearr_20628_22538[(1)] = (5));

} else {
var statearr_20629_22539 = state_20588__$1;
(statearr_20629_22539[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20589 === (15))){
var state_20588__$1 = state_20588;
var statearr_20640_22541 = state_20588__$1;
(statearr_20640_22541[(2)] = null);

(statearr_20640_22541[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20589 === (21))){
var state_20588__$1 = state_20588;
var statearr_20641_22543 = state_20588__$1;
(statearr_20641_22543[(2)] = null);

(statearr_20641_22543[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20589 === (13))){
var inst_20536 = (state_20588[(8)]);
var inst_20537 = (state_20588[(9)]);
var inst_20538 = (state_20588[(10)]);
var inst_20535 = (state_20588[(12)]);
var inst_20546 = (state_20588[(2)]);
var inst_20547 = (inst_20538 + (1));
var tmp20635 = inst_20536;
var tmp20636 = inst_20537;
var tmp20637 = inst_20535;
var inst_20535__$1 = tmp20637;
var inst_20536__$1 = tmp20635;
var inst_20537__$1 = tmp20636;
var inst_20538__$1 = inst_20547;
var state_20588__$1 = (function (){var statearr_20644 = state_20588;
(statearr_20644[(8)] = inst_20536__$1);

(statearr_20644[(14)] = inst_20546);

(statearr_20644[(9)] = inst_20537__$1);

(statearr_20644[(10)] = inst_20538__$1);

(statearr_20644[(12)] = inst_20535__$1);

return statearr_20644;
})();
var statearr_20647_22547 = state_20588__$1;
(statearr_20647_22547[(2)] = null);

(statearr_20647_22547[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20589 === (22))){
var state_20588__$1 = state_20588;
var statearr_20650_22549 = state_20588__$1;
(statearr_20650_22549[(2)] = null);

(statearr_20650_22549[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20589 === (6))){
var inst_20522 = (state_20588[(13)]);
var inst_20533 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_20522) : f.call(null,inst_20522));
var inst_20534 = cljs.core.seq(inst_20533);
var inst_20535 = inst_20534;
var inst_20536 = null;
var inst_20537 = (0);
var inst_20538 = (0);
var state_20588__$1 = (function (){var statearr_20656 = state_20588;
(statearr_20656[(8)] = inst_20536);

(statearr_20656[(9)] = inst_20537);

(statearr_20656[(10)] = inst_20538);

(statearr_20656[(12)] = inst_20535);

return statearr_20656;
})();
var statearr_20660_22550 = state_20588__$1;
(statearr_20660_22550[(2)] = null);

(statearr_20660_22550[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20589 === (17))){
var inst_20551 = (state_20588[(7)]);
var inst_20555 = cljs.core.chunk_first(inst_20551);
var inst_20556 = cljs.core.chunk_rest(inst_20551);
var inst_20557 = cljs.core.count(inst_20555);
var inst_20535 = inst_20556;
var inst_20536 = inst_20555;
var inst_20537 = inst_20557;
var inst_20538 = (0);
var state_20588__$1 = (function (){var statearr_20666 = state_20588;
(statearr_20666[(8)] = inst_20536);

(statearr_20666[(9)] = inst_20537);

(statearr_20666[(10)] = inst_20538);

(statearr_20666[(12)] = inst_20535);

return statearr_20666;
})();
var statearr_20667_22555 = state_20588__$1;
(statearr_20667_22555[(2)] = null);

(statearr_20667_22555[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20589 === (3))){
var inst_20586 = (state_20588[(2)]);
var state_20588__$1 = state_20588;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20588__$1,inst_20586);
} else {
if((state_val_20589 === (12))){
var inst_20573 = (state_20588[(2)]);
var state_20588__$1 = state_20588;
var statearr_20673_22557 = state_20588__$1;
(statearr_20673_22557[(2)] = inst_20573);

(statearr_20673_22557[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20589 === (2))){
var state_20588__$1 = state_20588;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20588__$1,(4),in$);
} else {
if((state_val_20589 === (23))){
var inst_20582 = (state_20588[(2)]);
var state_20588__$1 = state_20588;
var statearr_20680_22558 = state_20588__$1;
(statearr_20680_22558[(2)] = inst_20582);

(statearr_20680_22558[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20589 === (19))){
var inst_20568 = (state_20588[(2)]);
var state_20588__$1 = state_20588;
var statearr_20682_22560 = state_20588__$1;
(statearr_20682_22560[(2)] = inst_20568);

(statearr_20682_22560[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20589 === (11))){
var inst_20551 = (state_20588[(7)]);
var inst_20535 = (state_20588[(12)]);
var inst_20551__$1 = cljs.core.seq(inst_20535);
var state_20588__$1 = (function (){var statearr_20684 = state_20588;
(statearr_20684[(7)] = inst_20551__$1);

return statearr_20684;
})();
if(inst_20551__$1){
var statearr_20686_22561 = state_20588__$1;
(statearr_20686_22561[(1)] = (14));

} else {
var statearr_20691_22562 = state_20588__$1;
(statearr_20691_22562[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20589 === (9))){
var inst_20575 = (state_20588[(2)]);
var inst_20576 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_20588__$1 = (function (){var statearr_20693 = state_20588;
(statearr_20693[(15)] = inst_20575);

return statearr_20693;
})();
if(cljs.core.truth_(inst_20576)){
var statearr_20694_22564 = state_20588__$1;
(statearr_20694_22564[(1)] = (21));

} else {
var statearr_20695_22565 = state_20588__$1;
(statearr_20695_22565[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20589 === (5))){
var inst_20525 = cljs.core.async.close_BANG_(out);
var state_20588__$1 = state_20588;
var statearr_20696_22567 = state_20588__$1;
(statearr_20696_22567[(2)] = inst_20525);

(statearr_20696_22567[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20589 === (14))){
var inst_20551 = (state_20588[(7)]);
var inst_20553 = cljs.core.chunked_seq_QMARK_(inst_20551);
var state_20588__$1 = state_20588;
if(inst_20553){
var statearr_20698_22573 = state_20588__$1;
(statearr_20698_22573[(1)] = (17));

} else {
var statearr_20699_22574 = state_20588__$1;
(statearr_20699_22574[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20589 === (16))){
var inst_20571 = (state_20588[(2)]);
var state_20588__$1 = state_20588;
var statearr_20700_22579 = state_20588__$1;
(statearr_20700_22579[(2)] = inst_20571);

(statearr_20700_22579[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20589 === (10))){
var inst_20536 = (state_20588[(8)]);
var inst_20538 = (state_20588[(10)]);
var inst_20544 = cljs.core._nth(inst_20536,inst_20538);
var state_20588__$1 = state_20588;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20588__$1,(13),out,inst_20544);
} else {
if((state_val_20589 === (18))){
var inst_20551 = (state_20588[(7)]);
var inst_20560 = cljs.core.first(inst_20551);
var state_20588__$1 = state_20588;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20588__$1,(20),out,inst_20560);
} else {
if((state_val_20589 === (8))){
var inst_20537 = (state_20588[(9)]);
var inst_20538 = (state_20588[(10)]);
var inst_20540 = (inst_20538 < inst_20537);
var inst_20541 = inst_20540;
var state_20588__$1 = state_20588;
if(cljs.core.truth_(inst_20541)){
var statearr_20716_22586 = state_20588__$1;
(statearr_20716_22586[(1)] = (10));

} else {
var statearr_20718_22587 = state_20588__$1;
(statearr_20718_22587[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__17475__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__17475__auto____0 = (function (){
var statearr_20727 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20727[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__17475__auto__);

(statearr_20727[(1)] = (1));

return statearr_20727;
});
var cljs$core$async$mapcat_STAR__$_state_machine__17475__auto____1 = (function (state_20588){
while(true){
var ret_value__17476__auto__ = (function (){try{while(true){
var result__17477__auto__ = switch__17474__auto__(state_20588);
if(cljs.core.keyword_identical_QMARK_(result__17477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17477__auto__;
}
break;
}
}catch (e20732){var ex__17478__auto__ = e20732;
var statearr_20734_22589 = state_20588;
(statearr_20734_22589[(2)] = ex__17478__auto__);


if(cljs.core.seq((state_20588[(4)]))){
var statearr_20737_22590 = state_20588;
(statearr_20737_22590[(1)] = cljs.core.first((state_20588[(4)])));

} else {
throw ex__17478__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22591 = state_20588;
state_20588 = G__22591;
continue;
} else {
return ret_value__17476__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__17475__auto__ = function(state_20588){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__17475__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__17475__auto____1.call(this,state_20588);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__17475__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__17475__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__17475__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__17475__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__17475__auto__;
})()
})();
var state__17867__auto__ = (function (){var statearr_20744 = f__17866__auto__();
(statearr_20744[(6)] = c__17865__auto__);

return statearr_20744;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17867__auto__);
}));

return c__17865__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__20752 = arguments.length;
switch (G__20752) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__20767 = arguments.length;
switch (G__20767) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__20776 = arguments.length;
switch (G__20776) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__17865__auto___22628 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17866__auto__ = (function (){var switch__17474__auto__ = (function (state_20815){
var state_val_20816 = (state_20815[(1)]);
if((state_val_20816 === (7))){
var inst_20810 = (state_20815[(2)]);
var state_20815__$1 = state_20815;
var statearr_20818_22631 = state_20815__$1;
(statearr_20818_22631[(2)] = inst_20810);

(statearr_20818_22631[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20816 === (1))){
var inst_20785 = null;
var state_20815__$1 = (function (){var statearr_20826 = state_20815;
(statearr_20826[(7)] = inst_20785);

return statearr_20826;
})();
var statearr_20827_22632 = state_20815__$1;
(statearr_20827_22632[(2)] = null);

(statearr_20827_22632[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20816 === (4))){
var inst_20790 = (state_20815[(8)]);
var inst_20790__$1 = (state_20815[(2)]);
var inst_20794 = (inst_20790__$1 == null);
var inst_20795 = cljs.core.not(inst_20794);
var state_20815__$1 = (function (){var statearr_20833 = state_20815;
(statearr_20833[(8)] = inst_20790__$1);

return statearr_20833;
})();
if(inst_20795){
var statearr_20834_22636 = state_20815__$1;
(statearr_20834_22636[(1)] = (5));

} else {
var statearr_20835_22637 = state_20815__$1;
(statearr_20835_22637[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20816 === (6))){
var state_20815__$1 = state_20815;
var statearr_20836_22639 = state_20815__$1;
(statearr_20836_22639[(2)] = null);

(statearr_20836_22639[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20816 === (3))){
var inst_20812 = (state_20815[(2)]);
var inst_20813 = cljs.core.async.close_BANG_(out);
var state_20815__$1 = (function (){var statearr_20837 = state_20815;
(statearr_20837[(9)] = inst_20812);

return statearr_20837;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_20815__$1,inst_20813);
} else {
if((state_val_20816 === (2))){
var state_20815__$1 = state_20815;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20815__$1,(4),ch);
} else {
if((state_val_20816 === (11))){
var inst_20790 = (state_20815[(8)]);
var inst_20804 = (state_20815[(2)]);
var inst_20785 = inst_20790;
var state_20815__$1 = (function (){var statearr_20838 = state_20815;
(statearr_20838[(10)] = inst_20804);

(statearr_20838[(7)] = inst_20785);

return statearr_20838;
})();
var statearr_20839_22640 = state_20815__$1;
(statearr_20839_22640[(2)] = null);

(statearr_20839_22640[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20816 === (9))){
var inst_20790 = (state_20815[(8)]);
var state_20815__$1 = state_20815;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20815__$1,(11),out,inst_20790);
} else {
if((state_val_20816 === (5))){
var inst_20790 = (state_20815[(8)]);
var inst_20785 = (state_20815[(7)]);
var inst_20799 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_20790,inst_20785);
var state_20815__$1 = state_20815;
if(inst_20799){
var statearr_20843_22641 = state_20815__$1;
(statearr_20843_22641[(1)] = (8));

} else {
var statearr_20844_22642 = state_20815__$1;
(statearr_20844_22642[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20816 === (10))){
var inst_20807 = (state_20815[(2)]);
var state_20815__$1 = state_20815;
var statearr_20845_22643 = state_20815__$1;
(statearr_20845_22643[(2)] = inst_20807);

(statearr_20845_22643[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20816 === (8))){
var inst_20785 = (state_20815[(7)]);
var tmp20840 = inst_20785;
var inst_20785__$1 = tmp20840;
var state_20815__$1 = (function (){var statearr_20846 = state_20815;
(statearr_20846[(7)] = inst_20785__$1);

return statearr_20846;
})();
var statearr_20847_22644 = state_20815__$1;
(statearr_20847_22644[(2)] = null);

(statearr_20847_22644[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});
return (function() {
var cljs$core$async$state_machine__17475__auto__ = null;
var cljs$core$async$state_machine__17475__auto____0 = (function (){
var statearr_20848 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_20848[(0)] = cljs$core$async$state_machine__17475__auto__);

(statearr_20848[(1)] = (1));

return statearr_20848;
});
var cljs$core$async$state_machine__17475__auto____1 = (function (state_20815){
while(true){
var ret_value__17476__auto__ = (function (){try{while(true){
var result__17477__auto__ = switch__17474__auto__(state_20815);
if(cljs.core.keyword_identical_QMARK_(result__17477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17477__auto__;
}
break;
}
}catch (e20849){var ex__17478__auto__ = e20849;
var statearr_20850_22653 = state_20815;
(statearr_20850_22653[(2)] = ex__17478__auto__);


if(cljs.core.seq((state_20815[(4)]))){
var statearr_20851_22654 = state_20815;
(statearr_20851_22654[(1)] = cljs.core.first((state_20815[(4)])));

} else {
throw ex__17478__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22659 = state_20815;
state_20815 = G__22659;
continue;
} else {
return ret_value__17476__auto__;
}
break;
}
});
cljs$core$async$state_machine__17475__auto__ = function(state_20815){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17475__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17475__auto____1.call(this,state_20815);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17475__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17475__auto____0;
cljs$core$async$state_machine__17475__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17475__auto____1;
return cljs$core$async$state_machine__17475__auto__;
})()
})();
var state__17867__auto__ = (function (){var statearr_20857 = f__17866__auto__();
(statearr_20857[(6)] = c__17865__auto___22628);

return statearr_20857;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17867__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__20865 = arguments.length;
switch (G__20865) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__17865__auto___22665 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17866__auto__ = (function (){var switch__17474__auto__ = (function (state_20920){
var state_val_20921 = (state_20920[(1)]);
if((state_val_20921 === (7))){
var inst_20916 = (state_20920[(2)]);
var state_20920__$1 = state_20920;
var statearr_20923_22666 = state_20920__$1;
(statearr_20923_22666[(2)] = inst_20916);

(statearr_20923_22666[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20921 === (1))){
var inst_20874 = (new Array(n));
var inst_20875 = inst_20874;
var inst_20876 = (0);
var state_20920__$1 = (function (){var statearr_20925 = state_20920;
(statearr_20925[(7)] = inst_20875);

(statearr_20925[(8)] = inst_20876);

return statearr_20925;
})();
var statearr_20926_22667 = state_20920__$1;
(statearr_20926_22667[(2)] = null);

(statearr_20926_22667[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20921 === (4))){
var inst_20879 = (state_20920[(9)]);
var inst_20879__$1 = (state_20920[(2)]);
var inst_20884 = (inst_20879__$1 == null);
var inst_20885 = cljs.core.not(inst_20884);
var state_20920__$1 = (function (){var statearr_20930 = state_20920;
(statearr_20930[(9)] = inst_20879__$1);

return statearr_20930;
})();
if(inst_20885){
var statearr_20931_22672 = state_20920__$1;
(statearr_20931_22672[(1)] = (5));

} else {
var statearr_20932_22673 = state_20920__$1;
(statearr_20932_22673[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20921 === (15))){
var inst_20910 = (state_20920[(2)]);
var state_20920__$1 = state_20920;
var statearr_20933_22676 = state_20920__$1;
(statearr_20933_22676[(2)] = inst_20910);

(statearr_20933_22676[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20921 === (13))){
var state_20920__$1 = state_20920;
var statearr_20934_22682 = state_20920__$1;
(statearr_20934_22682[(2)] = null);

(statearr_20934_22682[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20921 === (6))){
var inst_20876 = (state_20920[(8)]);
var inst_20905 = (inst_20876 > (0));
var state_20920__$1 = state_20920;
if(cljs.core.truth_(inst_20905)){
var statearr_20936_22692 = state_20920__$1;
(statearr_20936_22692[(1)] = (12));

} else {
var statearr_20938_22698 = state_20920__$1;
(statearr_20938_22698[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20921 === (3))){
var inst_20918 = (state_20920[(2)]);
var state_20920__$1 = state_20920;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20920__$1,inst_20918);
} else {
if((state_val_20921 === (12))){
var inst_20875 = (state_20920[(7)]);
var inst_20908 = cljs.core.vec(inst_20875);
var state_20920__$1 = state_20920;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20920__$1,(15),out,inst_20908);
} else {
if((state_val_20921 === (2))){
var state_20920__$1 = state_20920;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20920__$1,(4),ch);
} else {
if((state_val_20921 === (11))){
var inst_20899 = (state_20920[(2)]);
var inst_20900 = (new Array(n));
var inst_20875 = inst_20900;
var inst_20876 = (0);
var state_20920__$1 = (function (){var statearr_20940 = state_20920;
(statearr_20940[(7)] = inst_20875);

(statearr_20940[(8)] = inst_20876);

(statearr_20940[(10)] = inst_20899);

return statearr_20940;
})();
var statearr_20941_22726 = state_20920__$1;
(statearr_20941_22726[(2)] = null);

(statearr_20941_22726[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20921 === (9))){
var inst_20875 = (state_20920[(7)]);
var inst_20897 = cljs.core.vec(inst_20875);
var state_20920__$1 = state_20920;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20920__$1,(11),out,inst_20897);
} else {
if((state_val_20921 === (5))){
var inst_20875 = (state_20920[(7)]);
var inst_20876 = (state_20920[(8)]);
var inst_20879 = (state_20920[(9)]);
var inst_20888 = (state_20920[(11)]);
var inst_20887 = (inst_20875[inst_20876] = inst_20879);
var inst_20888__$1 = (inst_20876 + (1));
var inst_20889 = (inst_20888__$1 < n);
var state_20920__$1 = (function (){var statearr_20947 = state_20920;
(statearr_20947[(12)] = inst_20887);

(statearr_20947[(11)] = inst_20888__$1);

return statearr_20947;
})();
if(cljs.core.truth_(inst_20889)){
var statearr_20948_22746 = state_20920__$1;
(statearr_20948_22746[(1)] = (8));

} else {
var statearr_20949_22749 = state_20920__$1;
(statearr_20949_22749[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20921 === (14))){
var inst_20913 = (state_20920[(2)]);
var inst_20914 = cljs.core.async.close_BANG_(out);
var state_20920__$1 = (function (){var statearr_20951 = state_20920;
(statearr_20951[(13)] = inst_20913);

return statearr_20951;
})();
var statearr_20952_22750 = state_20920__$1;
(statearr_20952_22750[(2)] = inst_20914);

(statearr_20952_22750[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20921 === (10))){
var inst_20903 = (state_20920[(2)]);
var state_20920__$1 = state_20920;
var statearr_20953_22751 = state_20920__$1;
(statearr_20953_22751[(2)] = inst_20903);

(statearr_20953_22751[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20921 === (8))){
var inst_20875 = (state_20920[(7)]);
var inst_20888 = (state_20920[(11)]);
var tmp20950 = inst_20875;
var inst_20875__$1 = tmp20950;
var inst_20876 = inst_20888;
var state_20920__$1 = (function (){var statearr_20969 = state_20920;
(statearr_20969[(7)] = inst_20875__$1);

(statearr_20969[(8)] = inst_20876);

return statearr_20969;
})();
var statearr_20977_22753 = state_20920__$1;
(statearr_20977_22753[(2)] = null);

(statearr_20977_22753[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});
return (function() {
var cljs$core$async$state_machine__17475__auto__ = null;
var cljs$core$async$state_machine__17475__auto____0 = (function (){
var statearr_20996 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20996[(0)] = cljs$core$async$state_machine__17475__auto__);

(statearr_20996[(1)] = (1));

return statearr_20996;
});
var cljs$core$async$state_machine__17475__auto____1 = (function (state_20920){
while(true){
var ret_value__17476__auto__ = (function (){try{while(true){
var result__17477__auto__ = switch__17474__auto__(state_20920);
if(cljs.core.keyword_identical_QMARK_(result__17477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17477__auto__;
}
break;
}
}catch (e20997){var ex__17478__auto__ = e20997;
var statearr_20998_22757 = state_20920;
(statearr_20998_22757[(2)] = ex__17478__auto__);


if(cljs.core.seq((state_20920[(4)]))){
var statearr_21000_22758 = state_20920;
(statearr_21000_22758[(1)] = cljs.core.first((state_20920[(4)])));

} else {
throw ex__17478__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22759 = state_20920;
state_20920 = G__22759;
continue;
} else {
return ret_value__17476__auto__;
}
break;
}
});
cljs$core$async$state_machine__17475__auto__ = function(state_20920){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17475__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17475__auto____1.call(this,state_20920);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17475__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17475__auto____0;
cljs$core$async$state_machine__17475__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17475__auto____1;
return cljs$core$async$state_machine__17475__auto__;
})()
})();
var state__17867__auto__ = (function (){var statearr_21003 = f__17866__auto__();
(statearr_21003[(6)] = c__17865__auto___22665);

return statearr_21003;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17867__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__21016 = arguments.length;
switch (G__21016) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__17865__auto___22781 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17866__auto__ = (function (){var switch__17474__auto__ = (function (state_21075){
var state_val_21076 = (state_21075[(1)]);
if((state_val_21076 === (7))){
var inst_21070 = (state_21075[(2)]);
var state_21075__$1 = state_21075;
var statearr_21079_22782 = state_21075__$1;
(statearr_21079_22782[(2)] = inst_21070);

(statearr_21079_22782[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21076 === (1))){
var inst_21025 = [];
var inst_21026 = inst_21025;
var inst_21027 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_21075__$1 = (function (){var statearr_21083 = state_21075;
(statearr_21083[(7)] = inst_21026);

(statearr_21083[(8)] = inst_21027);

return statearr_21083;
})();
var statearr_21084_22783 = state_21075__$1;
(statearr_21084_22783[(2)] = null);

(statearr_21084_22783[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21076 === (4))){
var inst_21030 = (state_21075[(9)]);
var inst_21030__$1 = (state_21075[(2)]);
var inst_21031 = (inst_21030__$1 == null);
var inst_21032 = cljs.core.not(inst_21031);
var state_21075__$1 = (function (){var statearr_21087 = state_21075;
(statearr_21087[(9)] = inst_21030__$1);

return statearr_21087;
})();
if(inst_21032){
var statearr_21088_22784 = state_21075__$1;
(statearr_21088_22784[(1)] = (5));

} else {
var statearr_21089_22789 = state_21075__$1;
(statearr_21089_22789[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21076 === (15))){
var inst_21026 = (state_21075[(7)]);
var inst_21061 = cljs.core.vec(inst_21026);
var state_21075__$1 = state_21075;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21075__$1,(18),out,inst_21061);
} else {
if((state_val_21076 === (13))){
var inst_21055 = (state_21075[(2)]);
var state_21075__$1 = state_21075;
var statearr_21093_22794 = state_21075__$1;
(statearr_21093_22794[(2)] = inst_21055);

(statearr_21093_22794[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21076 === (6))){
var inst_21026 = (state_21075[(7)]);
var inst_21057 = inst_21026.length;
var inst_21058 = (inst_21057 > (0));
var state_21075__$1 = state_21075;
if(cljs.core.truth_(inst_21058)){
var statearr_21094_22799 = state_21075__$1;
(statearr_21094_22799[(1)] = (15));

} else {
var statearr_21098_22803 = state_21075__$1;
(statearr_21098_22803[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21076 === (17))){
var inst_21066 = (state_21075[(2)]);
var inst_21068 = cljs.core.async.close_BANG_(out);
var state_21075__$1 = (function (){var statearr_21102 = state_21075;
(statearr_21102[(10)] = inst_21066);

return statearr_21102;
})();
var statearr_21103_22809 = state_21075__$1;
(statearr_21103_22809[(2)] = inst_21068);

(statearr_21103_22809[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21076 === (3))){
var inst_21072 = (state_21075[(2)]);
var state_21075__$1 = state_21075;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21075__$1,inst_21072);
} else {
if((state_val_21076 === (12))){
var inst_21026 = (state_21075[(7)]);
var inst_21045 = cljs.core.vec(inst_21026);
var state_21075__$1 = state_21075;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21075__$1,(14),out,inst_21045);
} else {
if((state_val_21076 === (2))){
var state_21075__$1 = state_21075;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21075__$1,(4),ch);
} else {
if((state_val_21076 === (11))){
var inst_21030 = (state_21075[(9)]);
var inst_21034 = (state_21075[(11)]);
var inst_21026 = (state_21075[(7)]);
var inst_21042 = inst_21026.push(inst_21030);
var tmp21104 = inst_21026;
var inst_21026__$1 = tmp21104;
var inst_21027 = inst_21034;
var state_21075__$1 = (function (){var statearr_21105 = state_21075;
(statearr_21105[(7)] = inst_21026__$1);

(statearr_21105[(8)] = inst_21027);

(statearr_21105[(12)] = inst_21042);

return statearr_21105;
})();
var statearr_21106_22815 = state_21075__$1;
(statearr_21106_22815[(2)] = null);

(statearr_21106_22815[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21076 === (9))){
var inst_21027 = (state_21075[(8)]);
var inst_21038 = cljs.core.keyword_identical_QMARK_(inst_21027,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_21075__$1 = state_21075;
var statearr_21114_22821 = state_21075__$1;
(statearr_21114_22821[(2)] = inst_21038);

(statearr_21114_22821[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21076 === (5))){
var inst_21035 = (state_21075[(13)]);
var inst_21030 = (state_21075[(9)]);
var inst_21034 = (state_21075[(11)]);
var inst_21027 = (state_21075[(8)]);
var inst_21034__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_21030) : f.call(null,inst_21030));
var inst_21035__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_21034__$1,inst_21027);
var state_21075__$1 = (function (){var statearr_21121 = state_21075;
(statearr_21121[(13)] = inst_21035__$1);

(statearr_21121[(11)] = inst_21034__$1);

return statearr_21121;
})();
if(inst_21035__$1){
var statearr_21131_22826 = state_21075__$1;
(statearr_21131_22826[(1)] = (8));

} else {
var statearr_21132_22827 = state_21075__$1;
(statearr_21132_22827[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21076 === (14))){
var inst_21030 = (state_21075[(9)]);
var inst_21034 = (state_21075[(11)]);
var inst_21047 = (state_21075[(2)]);
var inst_21050 = [];
var inst_21051 = inst_21050.push(inst_21030);
var inst_21026 = inst_21050;
var inst_21027 = inst_21034;
var state_21075__$1 = (function (){var statearr_21139 = state_21075;
(statearr_21139[(14)] = inst_21047);

(statearr_21139[(7)] = inst_21026);

(statearr_21139[(8)] = inst_21027);

(statearr_21139[(15)] = inst_21051);

return statearr_21139;
})();
var statearr_21140_22830 = state_21075__$1;
(statearr_21140_22830[(2)] = null);

(statearr_21140_22830[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21076 === (16))){
var state_21075__$1 = state_21075;
var statearr_21141_22836 = state_21075__$1;
(statearr_21141_22836[(2)] = null);

(statearr_21141_22836[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21076 === (10))){
var inst_21040 = (state_21075[(2)]);
var state_21075__$1 = state_21075;
if(cljs.core.truth_(inst_21040)){
var statearr_21145_22842 = state_21075__$1;
(statearr_21145_22842[(1)] = (11));

} else {
var statearr_21146_22843 = state_21075__$1;
(statearr_21146_22843[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21076 === (18))){
var inst_21063 = (state_21075[(2)]);
var state_21075__$1 = state_21075;
var statearr_21154_22852 = state_21075__$1;
(statearr_21154_22852[(2)] = inst_21063);

(statearr_21154_22852[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21076 === (8))){
var inst_21035 = (state_21075[(13)]);
var state_21075__$1 = state_21075;
var statearr_21155_22864 = state_21075__$1;
(statearr_21155_22864[(2)] = inst_21035);

(statearr_21155_22864[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});
return (function() {
var cljs$core$async$state_machine__17475__auto__ = null;
var cljs$core$async$state_machine__17475__auto____0 = (function (){
var statearr_21161 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21161[(0)] = cljs$core$async$state_machine__17475__auto__);

(statearr_21161[(1)] = (1));

return statearr_21161;
});
var cljs$core$async$state_machine__17475__auto____1 = (function (state_21075){
while(true){
var ret_value__17476__auto__ = (function (){try{while(true){
var result__17477__auto__ = switch__17474__auto__(state_21075);
if(cljs.core.keyword_identical_QMARK_(result__17477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17477__auto__;
}
break;
}
}catch (e21163){var ex__17478__auto__ = e21163;
var statearr_21166_22878 = state_21075;
(statearr_21166_22878[(2)] = ex__17478__auto__);


if(cljs.core.seq((state_21075[(4)]))){
var statearr_21167_22879 = state_21075;
(statearr_21167_22879[(1)] = cljs.core.first((state_21075[(4)])));

} else {
throw ex__17478__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22885 = state_21075;
state_21075 = G__22885;
continue;
} else {
return ret_value__17476__auto__;
}
break;
}
});
cljs$core$async$state_machine__17475__auto__ = function(state_21075){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17475__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17475__auto____1.call(this,state_21075);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17475__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17475__auto____0;
cljs$core$async$state_machine__17475__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17475__auto____1;
return cljs$core$async$state_machine__17475__auto__;
})()
})();
var state__17867__auto__ = (function (){var statearr_21168 = f__17866__auto__();
(statearr_21168[(6)] = c__17865__auto___22781);

return statearr_21168;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17867__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
