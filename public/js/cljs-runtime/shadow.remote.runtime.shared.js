goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
return shadow.remote.runtime.api.relay_msg(runtime,msg);
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__19389,res){
var map__19390 = p__19389;
var map__19390__$1 = cljs.core.__destructure_map(map__19390);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19390__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19390__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__19391 = res;
var G__19391__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19391,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__19391);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19391__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__19391__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__19398 = arguments.length;
switch (G__19398) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__19401,msg,handlers,timeout_after_ms){
var map__19403 = p__19401;
var map__19403__$1 = cljs.core.__destructure_map(map__19403);
var runtime = map__19403__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19403__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___19681 = arguments.length;
var i__5770__auto___19682 = (0);
while(true){
if((i__5770__auto___19682 < len__5769__auto___19681)){
args__5775__auto__.push((arguments[i__5770__auto___19682]));

var G__19683 = (i__5770__auto___19682 + (1));
i__5770__auto___19682 = G__19683;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__19472,ev,args){
var map__19477 = p__19472;
var map__19477__$1 = cljs.core.__destructure_map(map__19477);
var runtime = map__19477__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19477__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__19491 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__19495 = null;
var count__19496 = (0);
var i__19497 = (0);
while(true){
if((i__19497 < count__19496)){
var ext = chunk__19495.cljs$core$IIndexed$_nth$arity$2(null,i__19497);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__19688 = seq__19491;
var G__19689 = chunk__19495;
var G__19690 = count__19496;
var G__19691 = (i__19497 + (1));
seq__19491 = G__19688;
chunk__19495 = G__19689;
count__19496 = G__19690;
i__19497 = G__19691;
continue;
} else {
var G__19692 = seq__19491;
var G__19693 = chunk__19495;
var G__19694 = count__19496;
var G__19695 = (i__19497 + (1));
seq__19491 = G__19692;
chunk__19495 = G__19693;
count__19496 = G__19694;
i__19497 = G__19695;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__19491);
if(temp__5804__auto__){
var seq__19491__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19491__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__19491__$1);
var G__19696 = cljs.core.chunk_rest(seq__19491__$1);
var G__19697 = c__5568__auto__;
var G__19698 = cljs.core.count(c__5568__auto__);
var G__19699 = (0);
seq__19491 = G__19696;
chunk__19495 = G__19697;
count__19496 = G__19698;
i__19497 = G__19699;
continue;
} else {
var ext = cljs.core.first(seq__19491__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__19700 = cljs.core.next(seq__19491__$1);
var G__19701 = null;
var G__19702 = (0);
var G__19703 = (0);
seq__19491 = G__19700;
chunk__19495 = G__19701;
count__19496 = G__19702;
i__19497 = G__19703;
continue;
} else {
var G__19704 = cljs.core.next(seq__19491__$1);
var G__19705 = null;
var G__19706 = (0);
var G__19707 = (0);
seq__19491 = G__19704;
chunk__19495 = G__19705;
count__19496 = G__19706;
i__19497 = G__19707;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq19441){
var G__19442 = cljs.core.first(seq19441);
var seq19441__$1 = cljs.core.next(seq19441);
var G__19443 = cljs.core.first(seq19441__$1);
var seq19441__$2 = cljs.core.next(seq19441__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19442,G__19443,seq19441__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__19520,p__19521){
var map__19522 = p__19520;
var map__19522__$1 = cljs.core.__destructure_map(map__19522);
var runtime = map__19522__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19522__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__19523 = p__19521;
var map__19523__$1 = cljs.core.__destructure_map(map__19523);
var msg = map__19523__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19523__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__19534 = cljs.core.deref(state_ref);
var map__19534__$1 = cljs.core.__destructure_map(map__19534);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19534__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19534__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__19551){
var map__19553 = p__19551;
var map__19553__$1 = cljs.core.__destructure_map(map__19553);
var runtime = map__19553__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19553__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5045__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__19559,msg){
var map__19560 = p__19559;
var map__19560__$1 = cljs.core.__destructure_map(map__19560);
var runtime = map__19560__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19560__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__19578,key,p__19579){
var map__19580 = p__19578;
var map__19580__$1 = cljs.core.__destructure_map(map__19580);
var state = map__19580__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19580__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__19581 = p__19579;
var map__19581__$1 = cljs.core.__destructure_map(map__19581);
var spec = map__19581__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19581__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__19590,key,spec){
var map__19592 = p__19590;
var map__19592__$1 = cljs.core.__destructure_map(map__19592);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19592__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__19597_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__19597_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__19598_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__19598_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__19599_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__19599_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__19600_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__19600_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__19601_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__19601_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__19607,key){
var map__19608 = p__19607;
var map__19608__$1 = cljs.core.__destructure_map(map__19608);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19608__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__19613,msg){
var map__19615 = p__19613;
var map__19615__$1 = cljs.core.__destructure_map(map__19615);
var runtime = map__19615__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19615__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__19620,p__19621){
var map__19622 = p__19620;
var map__19622__$1 = cljs.core.__destructure_map(map__19622);
var runtime = map__19622__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19622__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__19623 = p__19621;
var map__19623__$1 = cljs.core.__destructure_map(map__19623);
var msg = map__19623__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19623__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19623__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__19639 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__19641 = null;
var count__19642 = (0);
var i__19643 = (0);
while(true){
if((i__19643 < count__19642)){
var map__19665 = chunk__19641.cljs$core$IIndexed$_nth$arity$2(null,i__19643);
var map__19665__$1 = cljs.core.__destructure_map(map__19665);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19665__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__19839 = seq__19639;
var G__19840 = chunk__19641;
var G__19841 = count__19642;
var G__19842 = (i__19643 + (1));
seq__19639 = G__19839;
chunk__19641 = G__19840;
count__19642 = G__19841;
i__19643 = G__19842;
continue;
} else {
var G__19844 = seq__19639;
var G__19845 = chunk__19641;
var G__19846 = count__19642;
var G__19847 = (i__19643 + (1));
seq__19639 = G__19844;
chunk__19641 = G__19845;
count__19642 = G__19846;
i__19643 = G__19847;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__19639);
if(temp__5804__auto__){
var seq__19639__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19639__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__19639__$1);
var G__19851 = cljs.core.chunk_rest(seq__19639__$1);
var G__19852 = c__5568__auto__;
var G__19853 = cljs.core.count(c__5568__auto__);
var G__19854 = (0);
seq__19639 = G__19851;
chunk__19641 = G__19852;
count__19642 = G__19853;
i__19643 = G__19854;
continue;
} else {
var map__19668 = cljs.core.first(seq__19639__$1);
var map__19668__$1 = cljs.core.__destructure_map(map__19668);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19668__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__19857 = cljs.core.next(seq__19639__$1);
var G__19858 = null;
var G__19859 = (0);
var G__19860 = (0);
seq__19639 = G__19857;
chunk__19641 = G__19858;
count__19642 = G__19859;
i__19643 = G__19860;
continue;
} else {
var G__19861 = cljs.core.next(seq__19639__$1);
var G__19862 = null;
var G__19863 = (0);
var G__19864 = (0);
seq__19639 = G__19861;
chunk__19641 = G__19862;
count__19642 = G__19863;
i__19643 = G__19864;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
