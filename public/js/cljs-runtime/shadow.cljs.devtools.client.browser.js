goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___24826 = arguments.length;
var i__5770__auto___24827 = (0);
while(true){
if((i__5770__auto___24827 < len__5769__auto___24826)){
args__5775__auto__.push((arguments[i__5770__auto___24827]));

var G__24828 = (i__5770__auto___24827 + (1));
i__5770__auto___24827 = G__24828;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq24230){
var G__24231 = cljs.core.first(seq24230);
var seq24230__$1 = cljs.core.next(seq24230);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24231,seq24230__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__24232 = cljs.core.seq(sources);
var chunk__24233 = null;
var count__24234 = (0);
var i__24235 = (0);
while(true){
if((i__24235 < count__24234)){
var map__24242 = chunk__24233.cljs$core$IIndexed$_nth$arity$2(null,i__24235);
var map__24242__$1 = cljs.core.__destructure_map(map__24242);
var src = map__24242__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24242__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24242__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24242__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24242__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e24245){var e_24829 = e24245;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_24829);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_24829.message)].join('')));
}

var G__24830 = seq__24232;
var G__24831 = chunk__24233;
var G__24832 = count__24234;
var G__24833 = (i__24235 + (1));
seq__24232 = G__24830;
chunk__24233 = G__24831;
count__24234 = G__24832;
i__24235 = G__24833;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__24232);
if(temp__5804__auto__){
var seq__24232__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24232__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__24232__$1);
var G__24834 = cljs.core.chunk_rest(seq__24232__$1);
var G__24835 = c__5568__auto__;
var G__24836 = cljs.core.count(c__5568__auto__);
var G__24837 = (0);
seq__24232 = G__24834;
chunk__24233 = G__24835;
count__24234 = G__24836;
i__24235 = G__24837;
continue;
} else {
var map__24250 = cljs.core.first(seq__24232__$1);
var map__24250__$1 = cljs.core.__destructure_map(map__24250);
var src = map__24250__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24250__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24250__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24250__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24250__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e24251){var e_24838 = e24251;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_24838);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_24838.message)].join('')));
}

var G__24839 = cljs.core.next(seq__24232__$1);
var G__24840 = null;
var G__24841 = (0);
var G__24842 = (0);
seq__24232 = G__24839;
chunk__24233 = G__24840;
count__24234 = G__24841;
i__24235 = G__24842;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__24259 = cljs.core.seq(js_requires);
var chunk__24260 = null;
var count__24261 = (0);
var i__24262 = (0);
while(true){
if((i__24262 < count__24261)){
var js_ns = chunk__24260.cljs$core$IIndexed$_nth$arity$2(null,i__24262);
var require_str_24843 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_24843);


var G__24844 = seq__24259;
var G__24845 = chunk__24260;
var G__24846 = count__24261;
var G__24847 = (i__24262 + (1));
seq__24259 = G__24844;
chunk__24260 = G__24845;
count__24261 = G__24846;
i__24262 = G__24847;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__24259);
if(temp__5804__auto__){
var seq__24259__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24259__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__24259__$1);
var G__24848 = cljs.core.chunk_rest(seq__24259__$1);
var G__24849 = c__5568__auto__;
var G__24850 = cljs.core.count(c__5568__auto__);
var G__24851 = (0);
seq__24259 = G__24848;
chunk__24260 = G__24849;
count__24261 = G__24850;
i__24262 = G__24851;
continue;
} else {
var js_ns = cljs.core.first(seq__24259__$1);
var require_str_24852 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_24852);


var G__24853 = cljs.core.next(seq__24259__$1);
var G__24854 = null;
var G__24855 = (0);
var G__24856 = (0);
seq__24259 = G__24853;
chunk__24260 = G__24854;
count__24261 = G__24855;
i__24262 = G__24856;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__24264){
var map__24265 = p__24264;
var map__24265__$1 = cljs.core.__destructure_map(map__24265);
var msg = map__24265__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24265__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24265__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5523__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__24266(s__24267){
return (new cljs.core.LazySeq(null,(function (){
var s__24267__$1 = s__24267;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__24267__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__24272 = cljs.core.first(xs__6360__auto__);
var map__24272__$1 = cljs.core.__destructure_map(map__24272);
var src = map__24272__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24272__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24272__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5519__auto__ = ((function (s__24267__$1,map__24272,map__24272__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__24265,map__24265__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__24266_$_iter__24268(s__24269){
return (new cljs.core.LazySeq(null,((function (s__24267__$1,map__24272,map__24272__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__24265,map__24265__$1,msg,info,reload_info){
return (function (){
var s__24269__$1 = s__24269;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__24269__$1);
if(temp__5804__auto____$1){
var s__24269__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__24269__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__24269__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__24271 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__24270 = (0);
while(true){
if((i__24270 < size__5522__auto__)){
var warning = cljs.core._nth(c__5521__auto__,i__24270);
cljs.core.chunk_append(b__24271,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__24858 = (i__24270 + (1));
i__24270 = G__24858;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__24271),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__24266_$_iter__24268(cljs.core.chunk_rest(s__24269__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__24271),null);
}
} else {
var warning = cljs.core.first(s__24269__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__24266_$_iter__24268(cljs.core.rest(s__24269__$2)));
}
} else {
return null;
}
break;
}
});})(s__24267__$1,map__24272,map__24272__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__24265,map__24265__$1,msg,info,reload_info))
,null,null));
});})(s__24267__$1,map__24272,map__24272__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__24265,map__24265__$1,msg,info,reload_info))
;
var fs__5520__auto__ = cljs.core.seq(iterys__5519__auto__(warnings));
if(fs__5520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__24266(cljs.core.rest(s__24267__$1)));
} else {
var G__24860 = cljs.core.rest(s__24267__$1);
s__24267__$1 = G__24860;
continue;
}
} else {
var G__24861 = cljs.core.rest(s__24267__$1);
s__24267__$1 = G__24861;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__24276_24862 = cljs.core.seq(warnings);
var chunk__24277_24863 = null;
var count__24278_24864 = (0);
var i__24279_24865 = (0);
while(true){
if((i__24279_24865 < count__24278_24864)){
var map__24282_24866 = chunk__24277_24863.cljs$core$IIndexed$_nth$arity$2(null,i__24279_24865);
var map__24282_24867__$1 = cljs.core.__destructure_map(map__24282_24866);
var w_24868 = map__24282_24867__$1;
var msg_24869__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24282_24867__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_24870 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24282_24867__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_24871 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24282_24867__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_24872 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24282_24867__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_24872)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_24870),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_24871),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_24869__$1)].join(''));


var G__24873 = seq__24276_24862;
var G__24874 = chunk__24277_24863;
var G__24875 = count__24278_24864;
var G__24876 = (i__24279_24865 + (1));
seq__24276_24862 = G__24873;
chunk__24277_24863 = G__24874;
count__24278_24864 = G__24875;
i__24279_24865 = G__24876;
continue;
} else {
var temp__5804__auto___24877 = cljs.core.seq(seq__24276_24862);
if(temp__5804__auto___24877){
var seq__24276_24878__$1 = temp__5804__auto___24877;
if(cljs.core.chunked_seq_QMARK_(seq__24276_24878__$1)){
var c__5568__auto___24879 = cljs.core.chunk_first(seq__24276_24878__$1);
var G__24880 = cljs.core.chunk_rest(seq__24276_24878__$1);
var G__24881 = c__5568__auto___24879;
var G__24882 = cljs.core.count(c__5568__auto___24879);
var G__24883 = (0);
seq__24276_24862 = G__24880;
chunk__24277_24863 = G__24881;
count__24278_24864 = G__24882;
i__24279_24865 = G__24883;
continue;
} else {
var map__24283_24884 = cljs.core.first(seq__24276_24878__$1);
var map__24283_24885__$1 = cljs.core.__destructure_map(map__24283_24884);
var w_24886 = map__24283_24885__$1;
var msg_24887__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24283_24885__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_24888 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24283_24885__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_24889 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24283_24885__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_24890 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24283_24885__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_24890)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_24888),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_24889),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_24887__$1)].join(''));


var G__24891 = cljs.core.next(seq__24276_24878__$1);
var G__24892 = null;
var G__24893 = (0);
var G__24894 = (0);
seq__24276_24862 = G__24891;
chunk__24277_24863 = G__24892;
count__24278_24864 = G__24893;
i__24279_24865 = G__24894;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__24263_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__24263_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5043__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5043__auto__){
var and__5043__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5043__auto____$1){
return new$;
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__24284){
var map__24285 = p__24284;
var map__24285__$1 = cljs.core.__destructure_map(map__24285);
var msg = map__24285__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24285__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24285__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__24286 = cljs.core.seq(updates);
var chunk__24288 = null;
var count__24289 = (0);
var i__24290 = (0);
while(true){
if((i__24290 < count__24289)){
var path = chunk__24288.cljs$core$IIndexed$_nth$arity$2(null,i__24290);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__24476_24895 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__24480_24896 = null;
var count__24481_24897 = (0);
var i__24482_24898 = (0);
while(true){
if((i__24482_24898 < count__24481_24897)){
var node_24899 = chunk__24480_24896.cljs$core$IIndexed$_nth$arity$2(null,i__24482_24898);
if(cljs.core.not(node_24899.shadow$old)){
var path_match_24900 = shadow.cljs.devtools.client.browser.match_paths(node_24899.getAttribute("href"),path);
if(cljs.core.truth_(path_match_24900)){
var new_link_24901 = (function (){var G__24582 = node_24899.cloneNode(true);
G__24582.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_24900),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__24582;
})();
(node_24899.shadow$old = true);

(new_link_24901.onload = ((function (seq__24476_24895,chunk__24480_24896,count__24481_24897,i__24482_24898,seq__24286,chunk__24288,count__24289,i__24290,new_link_24901,path_match_24900,node_24899,path,map__24285,map__24285__$1,msg,updates,reload_info){
return (function (e){
var seq__24592_24902 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__24594_24903 = null;
var count__24595_24904 = (0);
var i__24596_24905 = (0);
while(true){
if((i__24596_24905 < count__24595_24904)){
var map__24617_24906 = chunk__24594_24903.cljs$core$IIndexed$_nth$arity$2(null,i__24596_24905);
var map__24617_24907__$1 = cljs.core.__destructure_map(map__24617_24906);
var task_24908 = map__24617_24907__$1;
var fn_str_24909 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24617_24907__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_24910 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24617_24907__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_24911 = goog.getObjectByName(fn_str_24909,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_24910)].join(''));

(fn_obj_24911.cljs$core$IFn$_invoke$arity$2 ? fn_obj_24911.cljs$core$IFn$_invoke$arity$2(path,new_link_24901) : fn_obj_24911.call(null,path,new_link_24901));


var G__24912 = seq__24592_24902;
var G__24913 = chunk__24594_24903;
var G__24914 = count__24595_24904;
var G__24915 = (i__24596_24905 + (1));
seq__24592_24902 = G__24912;
chunk__24594_24903 = G__24913;
count__24595_24904 = G__24914;
i__24596_24905 = G__24915;
continue;
} else {
var temp__5804__auto___24916 = cljs.core.seq(seq__24592_24902);
if(temp__5804__auto___24916){
var seq__24592_24917__$1 = temp__5804__auto___24916;
if(cljs.core.chunked_seq_QMARK_(seq__24592_24917__$1)){
var c__5568__auto___24918 = cljs.core.chunk_first(seq__24592_24917__$1);
var G__24919 = cljs.core.chunk_rest(seq__24592_24917__$1);
var G__24920 = c__5568__auto___24918;
var G__24921 = cljs.core.count(c__5568__auto___24918);
var G__24922 = (0);
seq__24592_24902 = G__24919;
chunk__24594_24903 = G__24920;
count__24595_24904 = G__24921;
i__24596_24905 = G__24922;
continue;
} else {
var map__24627_24923 = cljs.core.first(seq__24592_24917__$1);
var map__24627_24924__$1 = cljs.core.__destructure_map(map__24627_24923);
var task_24925 = map__24627_24924__$1;
var fn_str_24926 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24627_24924__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_24927 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24627_24924__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_24928 = goog.getObjectByName(fn_str_24926,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_24927)].join(''));

(fn_obj_24928.cljs$core$IFn$_invoke$arity$2 ? fn_obj_24928.cljs$core$IFn$_invoke$arity$2(path,new_link_24901) : fn_obj_24928.call(null,path,new_link_24901));


var G__24929 = cljs.core.next(seq__24592_24917__$1);
var G__24930 = null;
var G__24931 = (0);
var G__24932 = (0);
seq__24592_24902 = G__24929;
chunk__24594_24903 = G__24930;
count__24595_24904 = G__24931;
i__24596_24905 = G__24932;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_24899);
});})(seq__24476_24895,chunk__24480_24896,count__24481_24897,i__24482_24898,seq__24286,chunk__24288,count__24289,i__24290,new_link_24901,path_match_24900,node_24899,path,map__24285,map__24285__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_24900], 0));

goog.dom.insertSiblingAfter(new_link_24901,node_24899);


var G__24933 = seq__24476_24895;
var G__24934 = chunk__24480_24896;
var G__24935 = count__24481_24897;
var G__24936 = (i__24482_24898 + (1));
seq__24476_24895 = G__24933;
chunk__24480_24896 = G__24934;
count__24481_24897 = G__24935;
i__24482_24898 = G__24936;
continue;
} else {
var G__24937 = seq__24476_24895;
var G__24938 = chunk__24480_24896;
var G__24939 = count__24481_24897;
var G__24940 = (i__24482_24898 + (1));
seq__24476_24895 = G__24937;
chunk__24480_24896 = G__24938;
count__24481_24897 = G__24939;
i__24482_24898 = G__24940;
continue;
}
} else {
var G__24941 = seq__24476_24895;
var G__24942 = chunk__24480_24896;
var G__24943 = count__24481_24897;
var G__24944 = (i__24482_24898 + (1));
seq__24476_24895 = G__24941;
chunk__24480_24896 = G__24942;
count__24481_24897 = G__24943;
i__24482_24898 = G__24944;
continue;
}
} else {
var temp__5804__auto___24945 = cljs.core.seq(seq__24476_24895);
if(temp__5804__auto___24945){
var seq__24476_24946__$1 = temp__5804__auto___24945;
if(cljs.core.chunked_seq_QMARK_(seq__24476_24946__$1)){
var c__5568__auto___24947 = cljs.core.chunk_first(seq__24476_24946__$1);
var G__24948 = cljs.core.chunk_rest(seq__24476_24946__$1);
var G__24949 = c__5568__auto___24947;
var G__24950 = cljs.core.count(c__5568__auto___24947);
var G__24951 = (0);
seq__24476_24895 = G__24948;
chunk__24480_24896 = G__24949;
count__24481_24897 = G__24950;
i__24482_24898 = G__24951;
continue;
} else {
var node_24952 = cljs.core.first(seq__24476_24946__$1);
if(cljs.core.not(node_24952.shadow$old)){
var path_match_24953 = shadow.cljs.devtools.client.browser.match_paths(node_24952.getAttribute("href"),path);
if(cljs.core.truth_(path_match_24953)){
var new_link_24954 = (function (){var G__24642 = node_24952.cloneNode(true);
G__24642.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_24953),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__24642;
})();
(node_24952.shadow$old = true);

(new_link_24954.onload = ((function (seq__24476_24895,chunk__24480_24896,count__24481_24897,i__24482_24898,seq__24286,chunk__24288,count__24289,i__24290,new_link_24954,path_match_24953,node_24952,seq__24476_24946__$1,temp__5804__auto___24945,path,map__24285,map__24285__$1,msg,updates,reload_info){
return (function (e){
var seq__24651_24955 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__24653_24956 = null;
var count__24654_24957 = (0);
var i__24655_24958 = (0);
while(true){
if((i__24655_24958 < count__24654_24957)){
var map__24674_24959 = chunk__24653_24956.cljs$core$IIndexed$_nth$arity$2(null,i__24655_24958);
var map__24674_24960__$1 = cljs.core.__destructure_map(map__24674_24959);
var task_24961 = map__24674_24960__$1;
var fn_str_24962 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24674_24960__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_24963 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24674_24960__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_24964 = goog.getObjectByName(fn_str_24962,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_24963)].join(''));

(fn_obj_24964.cljs$core$IFn$_invoke$arity$2 ? fn_obj_24964.cljs$core$IFn$_invoke$arity$2(path,new_link_24954) : fn_obj_24964.call(null,path,new_link_24954));


var G__24965 = seq__24651_24955;
var G__24966 = chunk__24653_24956;
var G__24967 = count__24654_24957;
var G__24968 = (i__24655_24958 + (1));
seq__24651_24955 = G__24965;
chunk__24653_24956 = G__24966;
count__24654_24957 = G__24967;
i__24655_24958 = G__24968;
continue;
} else {
var temp__5804__auto___24969__$1 = cljs.core.seq(seq__24651_24955);
if(temp__5804__auto___24969__$1){
var seq__24651_24970__$1 = temp__5804__auto___24969__$1;
if(cljs.core.chunked_seq_QMARK_(seq__24651_24970__$1)){
var c__5568__auto___24971 = cljs.core.chunk_first(seq__24651_24970__$1);
var G__24972 = cljs.core.chunk_rest(seq__24651_24970__$1);
var G__24973 = c__5568__auto___24971;
var G__24974 = cljs.core.count(c__5568__auto___24971);
var G__24975 = (0);
seq__24651_24955 = G__24972;
chunk__24653_24956 = G__24973;
count__24654_24957 = G__24974;
i__24655_24958 = G__24975;
continue;
} else {
var map__24688_24976 = cljs.core.first(seq__24651_24970__$1);
var map__24688_24977__$1 = cljs.core.__destructure_map(map__24688_24976);
var task_24978 = map__24688_24977__$1;
var fn_str_24979 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24688_24977__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_24980 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24688_24977__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_24981 = goog.getObjectByName(fn_str_24979,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_24980)].join(''));

(fn_obj_24981.cljs$core$IFn$_invoke$arity$2 ? fn_obj_24981.cljs$core$IFn$_invoke$arity$2(path,new_link_24954) : fn_obj_24981.call(null,path,new_link_24954));


var G__24982 = cljs.core.next(seq__24651_24970__$1);
var G__24983 = null;
var G__24984 = (0);
var G__24985 = (0);
seq__24651_24955 = G__24982;
chunk__24653_24956 = G__24983;
count__24654_24957 = G__24984;
i__24655_24958 = G__24985;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_24952);
});})(seq__24476_24895,chunk__24480_24896,count__24481_24897,i__24482_24898,seq__24286,chunk__24288,count__24289,i__24290,new_link_24954,path_match_24953,node_24952,seq__24476_24946__$1,temp__5804__auto___24945,path,map__24285,map__24285__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_24953], 0));

goog.dom.insertSiblingAfter(new_link_24954,node_24952);


var G__24986 = cljs.core.next(seq__24476_24946__$1);
var G__24987 = null;
var G__24988 = (0);
var G__24989 = (0);
seq__24476_24895 = G__24986;
chunk__24480_24896 = G__24987;
count__24481_24897 = G__24988;
i__24482_24898 = G__24989;
continue;
} else {
var G__24990 = cljs.core.next(seq__24476_24946__$1);
var G__24991 = null;
var G__24992 = (0);
var G__24993 = (0);
seq__24476_24895 = G__24990;
chunk__24480_24896 = G__24991;
count__24481_24897 = G__24992;
i__24482_24898 = G__24993;
continue;
}
} else {
var G__24994 = cljs.core.next(seq__24476_24946__$1);
var G__24995 = null;
var G__24996 = (0);
var G__24997 = (0);
seq__24476_24895 = G__24994;
chunk__24480_24896 = G__24995;
count__24481_24897 = G__24996;
i__24482_24898 = G__24997;
continue;
}
}
} else {
}
}
break;
}


var G__24998 = seq__24286;
var G__24999 = chunk__24288;
var G__25000 = count__24289;
var G__25001 = (i__24290 + (1));
seq__24286 = G__24998;
chunk__24288 = G__24999;
count__24289 = G__25000;
i__24290 = G__25001;
continue;
} else {
var G__25002 = seq__24286;
var G__25003 = chunk__24288;
var G__25004 = count__24289;
var G__25005 = (i__24290 + (1));
seq__24286 = G__25002;
chunk__24288 = G__25003;
count__24289 = G__25004;
i__24290 = G__25005;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__24286);
if(temp__5804__auto__){
var seq__24286__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24286__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__24286__$1);
var G__25006 = cljs.core.chunk_rest(seq__24286__$1);
var G__25007 = c__5568__auto__;
var G__25008 = cljs.core.count(c__5568__auto__);
var G__25009 = (0);
seq__24286 = G__25006;
chunk__24288 = G__25007;
count__24289 = G__25008;
i__24290 = G__25009;
continue;
} else {
var path = cljs.core.first(seq__24286__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__24703_25010 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__24707_25011 = null;
var count__24708_25012 = (0);
var i__24709_25013 = (0);
while(true){
if((i__24709_25013 < count__24708_25012)){
var node_25014 = chunk__24707_25011.cljs$core$IIndexed$_nth$arity$2(null,i__24709_25013);
if(cljs.core.not(node_25014.shadow$old)){
var path_match_25015 = shadow.cljs.devtools.client.browser.match_paths(node_25014.getAttribute("href"),path);
if(cljs.core.truth_(path_match_25015)){
var new_link_25016 = (function (){var G__24768 = node_25014.cloneNode(true);
G__24768.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_25015),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__24768;
})();
(node_25014.shadow$old = true);

(new_link_25016.onload = ((function (seq__24703_25010,chunk__24707_25011,count__24708_25012,i__24709_25013,seq__24286,chunk__24288,count__24289,i__24290,new_link_25016,path_match_25015,node_25014,path,seq__24286__$1,temp__5804__auto__,map__24285,map__24285__$1,msg,updates,reload_info){
return (function (e){
var seq__24770_25017 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__24772_25018 = null;
var count__24773_25019 = (0);
var i__24774_25020 = (0);
while(true){
if((i__24774_25020 < count__24773_25019)){
var map__24782_25021 = chunk__24772_25018.cljs$core$IIndexed$_nth$arity$2(null,i__24774_25020);
var map__24782_25022__$1 = cljs.core.__destructure_map(map__24782_25021);
var task_25023 = map__24782_25022__$1;
var fn_str_25024 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24782_25022__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_25025 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24782_25022__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_25026 = goog.getObjectByName(fn_str_25024,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_25025)].join(''));

(fn_obj_25026.cljs$core$IFn$_invoke$arity$2 ? fn_obj_25026.cljs$core$IFn$_invoke$arity$2(path,new_link_25016) : fn_obj_25026.call(null,path,new_link_25016));


var G__25027 = seq__24770_25017;
var G__25028 = chunk__24772_25018;
var G__25029 = count__24773_25019;
var G__25030 = (i__24774_25020 + (1));
seq__24770_25017 = G__25027;
chunk__24772_25018 = G__25028;
count__24773_25019 = G__25029;
i__24774_25020 = G__25030;
continue;
} else {
var temp__5804__auto___25031__$1 = cljs.core.seq(seq__24770_25017);
if(temp__5804__auto___25031__$1){
var seq__24770_25032__$1 = temp__5804__auto___25031__$1;
if(cljs.core.chunked_seq_QMARK_(seq__24770_25032__$1)){
var c__5568__auto___25033 = cljs.core.chunk_first(seq__24770_25032__$1);
var G__25034 = cljs.core.chunk_rest(seq__24770_25032__$1);
var G__25035 = c__5568__auto___25033;
var G__25036 = cljs.core.count(c__5568__auto___25033);
var G__25037 = (0);
seq__24770_25017 = G__25034;
chunk__24772_25018 = G__25035;
count__24773_25019 = G__25036;
i__24774_25020 = G__25037;
continue;
} else {
var map__24783_25038 = cljs.core.first(seq__24770_25032__$1);
var map__24783_25039__$1 = cljs.core.__destructure_map(map__24783_25038);
var task_25040 = map__24783_25039__$1;
var fn_str_25041 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24783_25039__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_25042 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24783_25039__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_25043 = goog.getObjectByName(fn_str_25041,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_25042)].join(''));

(fn_obj_25043.cljs$core$IFn$_invoke$arity$2 ? fn_obj_25043.cljs$core$IFn$_invoke$arity$2(path,new_link_25016) : fn_obj_25043.call(null,path,new_link_25016));


var G__25044 = cljs.core.next(seq__24770_25032__$1);
var G__25045 = null;
var G__25046 = (0);
var G__25047 = (0);
seq__24770_25017 = G__25044;
chunk__24772_25018 = G__25045;
count__24773_25019 = G__25046;
i__24774_25020 = G__25047;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_25014);
});})(seq__24703_25010,chunk__24707_25011,count__24708_25012,i__24709_25013,seq__24286,chunk__24288,count__24289,i__24290,new_link_25016,path_match_25015,node_25014,path,seq__24286__$1,temp__5804__auto__,map__24285,map__24285__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_25015], 0));

goog.dom.insertSiblingAfter(new_link_25016,node_25014);


var G__25048 = seq__24703_25010;
var G__25049 = chunk__24707_25011;
var G__25050 = count__24708_25012;
var G__25051 = (i__24709_25013 + (1));
seq__24703_25010 = G__25048;
chunk__24707_25011 = G__25049;
count__24708_25012 = G__25050;
i__24709_25013 = G__25051;
continue;
} else {
var G__25052 = seq__24703_25010;
var G__25053 = chunk__24707_25011;
var G__25054 = count__24708_25012;
var G__25055 = (i__24709_25013 + (1));
seq__24703_25010 = G__25052;
chunk__24707_25011 = G__25053;
count__24708_25012 = G__25054;
i__24709_25013 = G__25055;
continue;
}
} else {
var G__25056 = seq__24703_25010;
var G__25057 = chunk__24707_25011;
var G__25058 = count__24708_25012;
var G__25059 = (i__24709_25013 + (1));
seq__24703_25010 = G__25056;
chunk__24707_25011 = G__25057;
count__24708_25012 = G__25058;
i__24709_25013 = G__25059;
continue;
}
} else {
var temp__5804__auto___25060__$1 = cljs.core.seq(seq__24703_25010);
if(temp__5804__auto___25060__$1){
var seq__24703_25061__$1 = temp__5804__auto___25060__$1;
if(cljs.core.chunked_seq_QMARK_(seq__24703_25061__$1)){
var c__5568__auto___25062 = cljs.core.chunk_first(seq__24703_25061__$1);
var G__25063 = cljs.core.chunk_rest(seq__24703_25061__$1);
var G__25064 = c__5568__auto___25062;
var G__25065 = cljs.core.count(c__5568__auto___25062);
var G__25066 = (0);
seq__24703_25010 = G__25063;
chunk__24707_25011 = G__25064;
count__24708_25012 = G__25065;
i__24709_25013 = G__25066;
continue;
} else {
var node_25067 = cljs.core.first(seq__24703_25061__$1);
if(cljs.core.not(node_25067.shadow$old)){
var path_match_25068 = shadow.cljs.devtools.client.browser.match_paths(node_25067.getAttribute("href"),path);
if(cljs.core.truth_(path_match_25068)){
var new_link_25069 = (function (){var G__24786 = node_25067.cloneNode(true);
G__24786.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_25068),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__24786;
})();
(node_25067.shadow$old = true);

(new_link_25069.onload = ((function (seq__24703_25010,chunk__24707_25011,count__24708_25012,i__24709_25013,seq__24286,chunk__24288,count__24289,i__24290,new_link_25069,path_match_25068,node_25067,seq__24703_25061__$1,temp__5804__auto___25060__$1,path,seq__24286__$1,temp__5804__auto__,map__24285,map__24285__$1,msg,updates,reload_info){
return (function (e){
var seq__24790_25070 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__24792_25071 = null;
var count__24793_25072 = (0);
var i__24794_25073 = (0);
while(true){
if((i__24794_25073 < count__24793_25072)){
var map__24801_25074 = chunk__24792_25071.cljs$core$IIndexed$_nth$arity$2(null,i__24794_25073);
var map__24801_25075__$1 = cljs.core.__destructure_map(map__24801_25074);
var task_25076 = map__24801_25075__$1;
var fn_str_25077 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24801_25075__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_25078 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24801_25075__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_25079 = goog.getObjectByName(fn_str_25077,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_25078)].join(''));

(fn_obj_25079.cljs$core$IFn$_invoke$arity$2 ? fn_obj_25079.cljs$core$IFn$_invoke$arity$2(path,new_link_25069) : fn_obj_25079.call(null,path,new_link_25069));


var G__25080 = seq__24790_25070;
var G__25081 = chunk__24792_25071;
var G__25082 = count__24793_25072;
var G__25083 = (i__24794_25073 + (1));
seq__24790_25070 = G__25080;
chunk__24792_25071 = G__25081;
count__24793_25072 = G__25082;
i__24794_25073 = G__25083;
continue;
} else {
var temp__5804__auto___25084__$2 = cljs.core.seq(seq__24790_25070);
if(temp__5804__auto___25084__$2){
var seq__24790_25085__$1 = temp__5804__auto___25084__$2;
if(cljs.core.chunked_seq_QMARK_(seq__24790_25085__$1)){
var c__5568__auto___25086 = cljs.core.chunk_first(seq__24790_25085__$1);
var G__25087 = cljs.core.chunk_rest(seq__24790_25085__$1);
var G__25088 = c__5568__auto___25086;
var G__25089 = cljs.core.count(c__5568__auto___25086);
var G__25090 = (0);
seq__24790_25070 = G__25087;
chunk__24792_25071 = G__25088;
count__24793_25072 = G__25089;
i__24794_25073 = G__25090;
continue;
} else {
var map__24802_25091 = cljs.core.first(seq__24790_25085__$1);
var map__24802_25092__$1 = cljs.core.__destructure_map(map__24802_25091);
var task_25093 = map__24802_25092__$1;
var fn_str_25094 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24802_25092__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_25095 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24802_25092__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_25096 = goog.getObjectByName(fn_str_25094,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_25095)].join(''));

(fn_obj_25096.cljs$core$IFn$_invoke$arity$2 ? fn_obj_25096.cljs$core$IFn$_invoke$arity$2(path,new_link_25069) : fn_obj_25096.call(null,path,new_link_25069));


var G__25097 = cljs.core.next(seq__24790_25085__$1);
var G__25098 = null;
var G__25099 = (0);
var G__25100 = (0);
seq__24790_25070 = G__25097;
chunk__24792_25071 = G__25098;
count__24793_25072 = G__25099;
i__24794_25073 = G__25100;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_25067);
});})(seq__24703_25010,chunk__24707_25011,count__24708_25012,i__24709_25013,seq__24286,chunk__24288,count__24289,i__24290,new_link_25069,path_match_25068,node_25067,seq__24703_25061__$1,temp__5804__auto___25060__$1,path,seq__24286__$1,temp__5804__auto__,map__24285,map__24285__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_25068], 0));

goog.dom.insertSiblingAfter(new_link_25069,node_25067);


var G__25101 = cljs.core.next(seq__24703_25061__$1);
var G__25102 = null;
var G__25103 = (0);
var G__25104 = (0);
seq__24703_25010 = G__25101;
chunk__24707_25011 = G__25102;
count__24708_25012 = G__25103;
i__24709_25013 = G__25104;
continue;
} else {
var G__25105 = cljs.core.next(seq__24703_25061__$1);
var G__25106 = null;
var G__25107 = (0);
var G__25108 = (0);
seq__24703_25010 = G__25105;
chunk__24707_25011 = G__25106;
count__24708_25012 = G__25107;
i__24709_25013 = G__25108;
continue;
}
} else {
var G__25109 = cljs.core.next(seq__24703_25061__$1);
var G__25110 = null;
var G__25111 = (0);
var G__25112 = (0);
seq__24703_25010 = G__25109;
chunk__24707_25011 = G__25110;
count__24708_25012 = G__25111;
i__24709_25013 = G__25112;
continue;
}
}
} else {
}
}
break;
}


var G__25113 = cljs.core.next(seq__24286__$1);
var G__25114 = null;
var G__25115 = (0);
var G__25116 = (0);
seq__24286 = G__25113;
chunk__24288 = G__25114;
count__24289 = G__25115;
i__24290 = G__25116;
continue;
} else {
var G__25117 = cljs.core.next(seq__24286__$1);
var G__25118 = null;
var G__25119 = (0);
var G__25120 = (0);
seq__24286 = G__25117;
chunk__24288 = G__25118;
count__24289 = G__25119;
i__24290 = G__25120;
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
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__24805){
var map__24806 = p__24805;
var map__24806__$1 = cljs.core.__destructure_map(map__24806);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24806__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__24808){
var map__24809 = p__24808;
var map__24809__$1 = cljs.core.__destructure_map(map__24809);
var _ = map__24809__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24809__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__24810,done,error){
var map__24811 = p__24810;
var map__24811__$1 = cljs.core.__destructure_map(map__24811);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24811__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__24812,done,error){
var map__24813 = p__24812;
var map__24813__$1 = cljs.core.__destructure_map(map__24813);
var msg = map__24813__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24813__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24813__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24813__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__24814){
var map__24815 = p__24814;
var map__24815__$1 = cljs.core.__destructure_map(map__24815);
var src = map__24815__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24815__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5043__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5043__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__24816 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__24816) : done.call(null,G__24816));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__24817){
var map__24818 = p__24817;
var map__24818__$1 = cljs.core.__destructure_map(map__24818);
var msg__$1 = map__24818__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24818__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e24819){var ex = e24819;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__24820){
var map__24821 = p__24820;
var map__24821__$1 = cljs.core.__destructure_map(map__24821);
var env = map__24821__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24821__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__24822){
var map__24823 = p__24822;
var map__24823__$1 = cljs.core.__destructure_map(map__24823);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24823__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24823__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__24824){
var map__24825 = p__24824;
var map__24825__$1 = cljs.core.__destructure_map(map__24825);
var svc = map__24825__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24825__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
