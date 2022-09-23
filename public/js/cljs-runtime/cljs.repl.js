goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__22731){
var map__22733 = p__22731;
var map__22733__$1 = cljs.core.__destructure_map(map__22733);
var m = map__22733__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22733__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22733__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5045__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return [(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__22752_23013 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__22754_23014 = null;
var count__22755_23015 = (0);
var i__22756_23016 = (0);
while(true){
if((i__22756_23016 < count__22755_23015)){
var f_23018 = chunk__22754_23014.cljs$core$IIndexed$_nth$arity$2(null,i__22756_23016);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_23018], 0));


var G__23019 = seq__22752_23013;
var G__23020 = chunk__22754_23014;
var G__23021 = count__22755_23015;
var G__23022 = (i__22756_23016 + (1));
seq__22752_23013 = G__23019;
chunk__22754_23014 = G__23020;
count__22755_23015 = G__23021;
i__22756_23016 = G__23022;
continue;
} else {
var temp__5804__auto___23023 = cljs.core.seq(seq__22752_23013);
if(temp__5804__auto___23023){
var seq__22752_23024__$1 = temp__5804__auto___23023;
if(cljs.core.chunked_seq_QMARK_(seq__22752_23024__$1)){
var c__5568__auto___23025 = cljs.core.chunk_first(seq__22752_23024__$1);
var G__23026 = cljs.core.chunk_rest(seq__22752_23024__$1);
var G__23027 = c__5568__auto___23025;
var G__23028 = cljs.core.count(c__5568__auto___23025);
var G__23029 = (0);
seq__22752_23013 = G__23026;
chunk__22754_23014 = G__23027;
count__22755_23015 = G__23028;
i__22756_23016 = G__23029;
continue;
} else {
var f_23032 = cljs.core.first(seq__22752_23024__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_23032], 0));


var G__23033 = cljs.core.next(seq__22752_23024__$1);
var G__23034 = null;
var G__23035 = (0);
var G__23036 = (0);
seq__22752_23013 = G__23033;
chunk__22754_23014 = G__23034;
count__22755_23015 = G__23035;
i__22756_23016 = G__23036;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_23038 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_23038], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_23038)))?cljs.core.second(arglists_23038):arglists_23038)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__22805_23048 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__22806_23049 = null;
var count__22807_23050 = (0);
var i__22808_23051 = (0);
while(true){
if((i__22808_23051 < count__22807_23050)){
var vec__22822_23058 = chunk__22806_23049.cljs$core$IIndexed$_nth$arity$2(null,i__22808_23051);
var name_23059 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22822_23058,(0),null);
var map__22825_23060 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22822_23058,(1),null);
var map__22825_23061__$1 = cljs.core.__destructure_map(map__22825_23060);
var doc_23062 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22825_23061__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_23063 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22825_23061__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_23059], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_23063], 0));

if(cljs.core.truth_(doc_23062)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_23062], 0));
} else {
}


var G__23077 = seq__22805_23048;
var G__23078 = chunk__22806_23049;
var G__23079 = count__22807_23050;
var G__23080 = (i__22808_23051 + (1));
seq__22805_23048 = G__23077;
chunk__22806_23049 = G__23078;
count__22807_23050 = G__23079;
i__22808_23051 = G__23080;
continue;
} else {
var temp__5804__auto___23081 = cljs.core.seq(seq__22805_23048);
if(temp__5804__auto___23081){
var seq__22805_23082__$1 = temp__5804__auto___23081;
if(cljs.core.chunked_seq_QMARK_(seq__22805_23082__$1)){
var c__5568__auto___23083 = cljs.core.chunk_first(seq__22805_23082__$1);
var G__23084 = cljs.core.chunk_rest(seq__22805_23082__$1);
var G__23085 = c__5568__auto___23083;
var G__23086 = cljs.core.count(c__5568__auto___23083);
var G__23087 = (0);
seq__22805_23048 = G__23084;
chunk__22806_23049 = G__23085;
count__22807_23050 = G__23086;
i__22808_23051 = G__23087;
continue;
} else {
var vec__22832_23090 = cljs.core.first(seq__22805_23082__$1);
var name_23091 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22832_23090,(0),null);
var map__22835_23092 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22832_23090,(1),null);
var map__22835_23093__$1 = cljs.core.__destructure_map(map__22835_23092);
var doc_23094 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22835_23093__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_23095 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22835_23093__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_23091], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_23095], 0));

if(cljs.core.truth_(doc_23094)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_23094], 0));
} else {
}


var G__23098 = cljs.core.next(seq__22805_23082__$1);
var G__23099 = null;
var G__23100 = (0);
var G__23101 = (0);
seq__22805_23048 = G__23098;
chunk__22806_23049 = G__23099;
count__22807_23050 = G__23100;
i__22808_23051 = G__23101;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5804__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5804__auto__)){
var fnspec = temp__5804__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__22859 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__22860 = null;
var count__22861 = (0);
var i__22862 = (0);
while(true){
if((i__22862 < count__22861)){
var role = chunk__22860.cljs$core$IIndexed$_nth$arity$2(null,i__22862);
var temp__5804__auto___23114__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___23114__$1)){
var spec_23118 = temp__5804__auto___23114__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_23118)], 0));
} else {
}


var G__23119 = seq__22859;
var G__23120 = chunk__22860;
var G__23121 = count__22861;
var G__23122 = (i__22862 + (1));
seq__22859 = G__23119;
chunk__22860 = G__23120;
count__22861 = G__23121;
i__22862 = G__23122;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__22859);
if(temp__5804__auto____$1){
var seq__22859__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__22859__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__22859__$1);
var G__23127 = cljs.core.chunk_rest(seq__22859__$1);
var G__23128 = c__5568__auto__;
var G__23129 = cljs.core.count(c__5568__auto__);
var G__23130 = (0);
seq__22859 = G__23127;
chunk__22860 = G__23128;
count__22861 = G__23129;
i__22862 = G__23130;
continue;
} else {
var role = cljs.core.first(seq__22859__$1);
var temp__5804__auto___23134__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___23134__$2)){
var spec_23139 = temp__5804__auto___23134__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_23139)], 0));
} else {
}


var G__23141 = cljs.core.next(seq__22859__$1);
var G__23142 = null;
var G__23143 = (0);
var G__23144 = (0);
seq__22859 = G__23141;
chunk__22860 = G__23142;
count__22861 = G__23143;
i__22862 = G__23144;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5804__auto__)){
var msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5804__auto__)){
var ed = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__23168 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__23169 = cljs.core.ex_cause(t);
via = G__23168;
t = G__23169;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5804__auto__)){
var root_msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5804__auto__)){
var data = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5804__auto__)){
var phase = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__22938 = datafied_throwable;
var map__22938__$1 = cljs.core.__destructure_map(map__22938);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22938__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22938__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__22938__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__22942 = cljs.core.last(via);
var map__22942__$1 = cljs.core.__destructure_map(map__22942);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22942__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22942__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22942__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__22943 = data;
var map__22943__$1 = cljs.core.__destructure_map(map__22943);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22943__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22943__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22943__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__22944 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__22944__$1 = cljs.core.__destructure_map(map__22944);
var top_data = map__22944__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22944__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__22945 = phase;
var G__22945__$1 = (((G__22945 instanceof cljs.core.Keyword))?G__22945.fqn:null);
switch (G__22945__$1) {
case "read-source":
var map__22947 = data;
var map__22947__$1 = cljs.core.__destructure_map(map__22947);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22947__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22947__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__22948 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__22948__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22948,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__22948);
var G__22948__$2 = (cljs.core.truth_((function (){var fexpr__22951 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__22951.cljs$core$IFn$_invoke$arity$1 ? fexpr__22951.cljs$core$IFn$_invoke$arity$1(source) : fexpr__22951.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__22948__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__22948__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22948__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__22948__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__22952 = top_data;
var G__22952__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22952,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__22952);
var G__22952__$2 = (cljs.core.truth_((function (){var fexpr__22953 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__22953.cljs$core$IFn$_invoke$arity$1 ? fexpr__22953.cljs$core$IFn$_invoke$arity$1(source) : fexpr__22953.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__22952__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__22952__$1);
var G__22952__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22952__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__22952__$2);
var G__22952__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22952__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__22952__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22952__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__22952__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__22954 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22954,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22954,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22954,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22954,(3),null);
var G__22957 = top_data;
var G__22957__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22957,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__22957);
var G__22957__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22957__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__22957__$1);
var G__22957__$3 = (cljs.core.truth_((function (){var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22957__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__22957__$2);
var G__22957__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22957__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__22957__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22957__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__22957__$4;
}

break;
case "execution":
var vec__22961 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22961,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22961,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22961,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22961,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__22936_SHARP_){
var or__5045__auto__ = (p1__22936_SHARP_ == null);
if(or__5045__auto__){
return or__5045__auto__;
} else {
var fexpr__22964 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__22964.cljs$core$IFn$_invoke$arity$1 ? fexpr__22964.cljs$core$IFn$_invoke$arity$1(p1__22936_SHARP_) : fexpr__22964.call(null,p1__22936_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return line;
}
})();
var G__22965 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__22965__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22965,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__22965);
var G__22965__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22965__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__22965__$1);
var G__22965__$3 = (cljs.core.truth_((function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22965__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__22965__$2);
var G__22965__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22965__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__22965__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22965__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__22965__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__22945__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__22968){
var map__22969 = p__22968;
var map__22969__$1 = cljs.core.__destructure_map(map__22969);
var triage_data = map__22969__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22969__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22969__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22969__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22969__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22969__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22969__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22969__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22969__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = source;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = line;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__5045__auto__ = class$;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__22970 = phase;
var G__22970__$1 = (((G__22970 instanceof cljs.core.Keyword))?G__22970.fqn:null);
switch (G__22970__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__22972 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__22973 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__22974 = loc;
var G__22975 = (cljs.core.truth_(spec)?(function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__22976_23344 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__22977_23345 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__22978_23346 = true;
var _STAR_print_fn_STAR__temp_val__22979_23347 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__22978_23346);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__22979_23347);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__22966_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__22966_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__22977_23345);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__22976_23344);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__22972,G__22973,G__22974,G__22975) : format.call(null,G__22972,G__22973,G__22974,G__22975));

break;
case "macroexpansion":
var G__22980 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__22981 = cause_type;
var G__22982 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__22983 = loc;
var G__22984 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__22980,G__22981,G__22982,G__22983,G__22984) : format.call(null,G__22980,G__22981,G__22982,G__22983,G__22984));

break;
case "compile-syntax-check":
var G__22985 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__22986 = cause_type;
var G__22987 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__22988 = loc;
var G__22989 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__22985,G__22986,G__22987,G__22988,G__22989) : format.call(null,G__22985,G__22986,G__22987,G__22988,G__22989));

break;
case "compilation":
var G__22990 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__22991 = cause_type;
var G__22992 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__22993 = loc;
var G__22994 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__22990,G__22991,G__22992,G__22993,G__22994) : format.call(null,G__22990,G__22991,G__22992,G__22993,G__22994));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__22995 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__22996 = symbol;
var G__22997 = loc;
var G__22998 = (function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__22999_23357 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__23000_23358 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__23001_23359 = true;
var _STAR_print_fn_STAR__temp_val__23002_23360 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__23001_23359);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__23002_23360);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__22967_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__22967_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__23000_23358);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__22999_23357);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__22995,G__22996,G__22997,G__22998) : format.call(null,G__22995,G__22996,G__22997,G__22998));
} else {
var G__23005 = "Execution error%s at %s(%s).\n%s\n";
var G__23006 = cause_type;
var G__23007 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__23008 = loc;
var G__23009 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__23005,G__23006,G__23007,G__23008,G__23009) : format.call(null,G__23005,G__23006,G__23007,G__23008,G__23009));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__22970__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
