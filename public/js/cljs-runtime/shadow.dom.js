goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_22519 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_22519(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_22526 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_22526(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__21256 = coll;
var G__21257 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__21256,G__21257) : shadow.dom.lazy_native_coll_seq.call(null,G__21256,G__21257));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5045__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__21281 = arguments.length;
switch (G__21281) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__21290 = arguments.length;
switch (G__21290) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__21298 = arguments.length;
switch (G__21298) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__21314 = arguments.length;
switch (G__21314) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__21325 = arguments.length;
switch (G__21325) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__21338 = arguments.length;
switch (G__21338) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e21342){if((e21342 instanceof Object)){
var e = e21342;
return console.log("didnt support attachEvent",el,e);
} else {
throw e21342;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__21355 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__21356 = null;
var count__21357 = (0);
var i__21358 = (0);
while(true){
if((i__21358 < count__21357)){
var el = chunk__21356.cljs$core$IIndexed$_nth$arity$2(null,i__21358);
var handler_22568__$1 = ((function (seq__21355,chunk__21356,count__21357,i__21358,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__21355,chunk__21356,count__21357,i__21358,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_22568__$1);


var G__22569 = seq__21355;
var G__22570 = chunk__21356;
var G__22571 = count__21357;
var G__22572 = (i__21358 + (1));
seq__21355 = G__22569;
chunk__21356 = G__22570;
count__21357 = G__22571;
i__21358 = G__22572;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__21355);
if(temp__5804__auto__){
var seq__21355__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21355__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__21355__$1);
var G__22575 = cljs.core.chunk_rest(seq__21355__$1);
var G__22576 = c__5568__auto__;
var G__22577 = cljs.core.count(c__5568__auto__);
var G__22578 = (0);
seq__21355 = G__22575;
chunk__21356 = G__22576;
count__21357 = G__22577;
i__21358 = G__22578;
continue;
} else {
var el = cljs.core.first(seq__21355__$1);
var handler_22580__$1 = ((function (seq__21355,chunk__21356,count__21357,i__21358,el,seq__21355__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__21355,chunk__21356,count__21357,i__21358,el,seq__21355__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_22580__$1);


var G__22581 = cljs.core.next(seq__21355__$1);
var G__22582 = null;
var G__22583 = (0);
var G__22584 = (0);
seq__21355 = G__22581;
chunk__21356 = G__22582;
count__21357 = G__22583;
i__21358 = G__22584;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__21407 = arguments.length;
switch (G__21407) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__21428 = cljs.core.seq(events);
var chunk__21429 = null;
var count__21430 = (0);
var i__21431 = (0);
while(true){
if((i__21431 < count__21430)){
var vec__21445 = chunk__21429.cljs$core$IIndexed$_nth$arity$2(null,i__21431);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21445,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21445,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__22592 = seq__21428;
var G__22593 = chunk__21429;
var G__22594 = count__21430;
var G__22595 = (i__21431 + (1));
seq__21428 = G__22592;
chunk__21429 = G__22593;
count__21430 = G__22594;
i__21431 = G__22595;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__21428);
if(temp__5804__auto__){
var seq__21428__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21428__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__21428__$1);
var G__22599 = cljs.core.chunk_rest(seq__21428__$1);
var G__22600 = c__5568__auto__;
var G__22601 = cljs.core.count(c__5568__auto__);
var G__22602 = (0);
seq__21428 = G__22599;
chunk__21429 = G__22600;
count__21430 = G__22601;
i__21431 = G__22602;
continue;
} else {
var vec__21455 = cljs.core.first(seq__21428__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21455,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21455,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__22606 = cljs.core.next(seq__21428__$1);
var G__22607 = null;
var G__22608 = (0);
var G__22609 = (0);
seq__21428 = G__22606;
chunk__21429 = G__22607;
count__21430 = G__22608;
i__21431 = G__22609;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__21461 = cljs.core.seq(styles);
var chunk__21462 = null;
var count__21463 = (0);
var i__21464 = (0);
while(true){
if((i__21464 < count__21463)){
var vec__21477 = chunk__21462.cljs$core$IIndexed$_nth$arity$2(null,i__21464);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21477,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21477,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__22611 = seq__21461;
var G__22612 = chunk__21462;
var G__22613 = count__21463;
var G__22614 = (i__21464 + (1));
seq__21461 = G__22611;
chunk__21462 = G__22612;
count__21463 = G__22613;
i__21464 = G__22614;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__21461);
if(temp__5804__auto__){
var seq__21461__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21461__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__21461__$1);
var G__22616 = cljs.core.chunk_rest(seq__21461__$1);
var G__22617 = c__5568__auto__;
var G__22618 = cljs.core.count(c__5568__auto__);
var G__22619 = (0);
seq__21461 = G__22616;
chunk__21462 = G__22617;
count__21463 = G__22618;
i__21464 = G__22619;
continue;
} else {
var vec__21484 = cljs.core.first(seq__21461__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21484,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21484,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__22621 = cljs.core.next(seq__21461__$1);
var G__22622 = null;
var G__22623 = (0);
var G__22624 = (0);
seq__21461 = G__22621;
chunk__21462 = G__22622;
count__21463 = G__22623;
i__21464 = G__22624;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__21508_22625 = key;
var G__21508_22626__$1 = (((G__21508_22625 instanceof cljs.core.Keyword))?G__21508_22625.fqn:null);
switch (G__21508_22626__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_22635 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5045__auto__ = goog.string.startsWith(ks_22635,"data-");
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return goog.string.startsWith(ks_22635,"aria-");
}
})())){
el.setAttribute(ks_22635,value);
} else {
(el[ks_22635] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__21573){
var map__21574 = p__21573;
var map__21574__$1 = cljs.core.__destructure_map(map__21574);
var props = map__21574__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21574__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__21575 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21575,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21575,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21575,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__21579 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__21579,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__21579;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__21581 = arguments.length;
switch (G__21581) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__21590){
var vec__21592 = p__21590;
var seq__21593 = cljs.core.seq(vec__21592);
var first__21594 = cljs.core.first(seq__21593);
var seq__21593__$1 = cljs.core.next(seq__21593);
var nn = first__21594;
var first__21594__$1 = cljs.core.first(seq__21593__$1);
var seq__21593__$2 = cljs.core.next(seq__21593__$1);
var np = first__21594__$1;
var nc = seq__21593__$2;
var node = vec__21592;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__21598 = nn;
var G__21599 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__21598,G__21599) : create_fn.call(null,G__21598,G__21599));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__21600 = nn;
var G__21601 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__21600,G__21601) : create_fn.call(null,G__21600,G__21601));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__21614 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21614,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21614,(1),null);
var seq__21617_22668 = cljs.core.seq(node_children);
var chunk__21618_22669 = null;
var count__21619_22670 = (0);
var i__21620_22671 = (0);
while(true){
if((i__21620_22671 < count__21619_22670)){
var child_struct_22674 = chunk__21618_22669.cljs$core$IIndexed$_nth$arity$2(null,i__21620_22671);
var children_22675 = shadow.dom.dom_node(child_struct_22674);
if(cljs.core.seq_QMARK_(children_22675)){
var seq__21689_22677 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_22675));
var chunk__21692_22678 = null;
var count__21693_22679 = (0);
var i__21694_22680 = (0);
while(true){
if((i__21694_22680 < count__21693_22679)){
var child_22681 = chunk__21692_22678.cljs$core$IIndexed$_nth$arity$2(null,i__21694_22680);
if(cljs.core.truth_(child_22681)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_22681);


var G__22683 = seq__21689_22677;
var G__22684 = chunk__21692_22678;
var G__22685 = count__21693_22679;
var G__22686 = (i__21694_22680 + (1));
seq__21689_22677 = G__22683;
chunk__21692_22678 = G__22684;
count__21693_22679 = G__22685;
i__21694_22680 = G__22686;
continue;
} else {
var G__22687 = seq__21689_22677;
var G__22688 = chunk__21692_22678;
var G__22689 = count__21693_22679;
var G__22690 = (i__21694_22680 + (1));
seq__21689_22677 = G__22687;
chunk__21692_22678 = G__22688;
count__21693_22679 = G__22689;
i__21694_22680 = G__22690;
continue;
}
} else {
var temp__5804__auto___22691 = cljs.core.seq(seq__21689_22677);
if(temp__5804__auto___22691){
var seq__21689_22693__$1 = temp__5804__auto___22691;
if(cljs.core.chunked_seq_QMARK_(seq__21689_22693__$1)){
var c__5568__auto___22699 = cljs.core.chunk_first(seq__21689_22693__$1);
var G__22700 = cljs.core.chunk_rest(seq__21689_22693__$1);
var G__22701 = c__5568__auto___22699;
var G__22702 = cljs.core.count(c__5568__auto___22699);
var G__22703 = (0);
seq__21689_22677 = G__22700;
chunk__21692_22678 = G__22701;
count__21693_22679 = G__22702;
i__21694_22680 = G__22703;
continue;
} else {
var child_22704 = cljs.core.first(seq__21689_22693__$1);
if(cljs.core.truth_(child_22704)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_22704);


var G__22705 = cljs.core.next(seq__21689_22693__$1);
var G__22706 = null;
var G__22707 = (0);
var G__22708 = (0);
seq__21689_22677 = G__22705;
chunk__21692_22678 = G__22706;
count__21693_22679 = G__22707;
i__21694_22680 = G__22708;
continue;
} else {
var G__22709 = cljs.core.next(seq__21689_22693__$1);
var G__22710 = null;
var G__22711 = (0);
var G__22712 = (0);
seq__21689_22677 = G__22709;
chunk__21692_22678 = G__22710;
count__21693_22679 = G__22711;
i__21694_22680 = G__22712;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_22675);
}


var G__22713 = seq__21617_22668;
var G__22714 = chunk__21618_22669;
var G__22715 = count__21619_22670;
var G__22716 = (i__21620_22671 + (1));
seq__21617_22668 = G__22713;
chunk__21618_22669 = G__22714;
count__21619_22670 = G__22715;
i__21620_22671 = G__22716;
continue;
} else {
var temp__5804__auto___22717 = cljs.core.seq(seq__21617_22668);
if(temp__5804__auto___22717){
var seq__21617_22718__$1 = temp__5804__auto___22717;
if(cljs.core.chunked_seq_QMARK_(seq__21617_22718__$1)){
var c__5568__auto___22719 = cljs.core.chunk_first(seq__21617_22718__$1);
var G__22720 = cljs.core.chunk_rest(seq__21617_22718__$1);
var G__22721 = c__5568__auto___22719;
var G__22722 = cljs.core.count(c__5568__auto___22719);
var G__22723 = (0);
seq__21617_22668 = G__22720;
chunk__21618_22669 = G__22721;
count__21619_22670 = G__22722;
i__21620_22671 = G__22723;
continue;
} else {
var child_struct_22724 = cljs.core.first(seq__21617_22718__$1);
var children_22725 = shadow.dom.dom_node(child_struct_22724);
if(cljs.core.seq_QMARK_(children_22725)){
var seq__21726_22727 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_22725));
var chunk__21728_22728 = null;
var count__21729_22729 = (0);
var i__21730_22730 = (0);
while(true){
if((i__21730_22730 < count__21729_22729)){
var child_22732 = chunk__21728_22728.cljs$core$IIndexed$_nth$arity$2(null,i__21730_22730);
if(cljs.core.truth_(child_22732)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_22732);


var G__22734 = seq__21726_22727;
var G__22735 = chunk__21728_22728;
var G__22736 = count__21729_22729;
var G__22737 = (i__21730_22730 + (1));
seq__21726_22727 = G__22734;
chunk__21728_22728 = G__22735;
count__21729_22729 = G__22736;
i__21730_22730 = G__22737;
continue;
} else {
var G__22738 = seq__21726_22727;
var G__22739 = chunk__21728_22728;
var G__22740 = count__21729_22729;
var G__22741 = (i__21730_22730 + (1));
seq__21726_22727 = G__22738;
chunk__21728_22728 = G__22739;
count__21729_22729 = G__22740;
i__21730_22730 = G__22741;
continue;
}
} else {
var temp__5804__auto___22742__$1 = cljs.core.seq(seq__21726_22727);
if(temp__5804__auto___22742__$1){
var seq__21726_22743__$1 = temp__5804__auto___22742__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21726_22743__$1)){
var c__5568__auto___22744 = cljs.core.chunk_first(seq__21726_22743__$1);
var G__22760 = cljs.core.chunk_rest(seq__21726_22743__$1);
var G__22761 = c__5568__auto___22744;
var G__22762 = cljs.core.count(c__5568__auto___22744);
var G__22763 = (0);
seq__21726_22727 = G__22760;
chunk__21728_22728 = G__22761;
count__21729_22729 = G__22762;
i__21730_22730 = G__22763;
continue;
} else {
var child_22764 = cljs.core.first(seq__21726_22743__$1);
if(cljs.core.truth_(child_22764)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_22764);


var G__22765 = cljs.core.next(seq__21726_22743__$1);
var G__22766 = null;
var G__22767 = (0);
var G__22768 = (0);
seq__21726_22727 = G__22765;
chunk__21728_22728 = G__22766;
count__21729_22729 = G__22767;
i__21730_22730 = G__22768;
continue;
} else {
var G__22770 = cljs.core.next(seq__21726_22743__$1);
var G__22771 = null;
var G__22772 = (0);
var G__22773 = (0);
seq__21726_22727 = G__22770;
chunk__21728_22728 = G__22771;
count__21729_22729 = G__22772;
i__21730_22730 = G__22773;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_22725);
}


var G__22774 = cljs.core.next(seq__21617_22718__$1);
var G__22775 = null;
var G__22776 = (0);
var G__22777 = (0);
seq__21617_22668 = G__22774;
chunk__21618_22669 = G__22775;
count__21619_22670 = G__22776;
i__21620_22671 = G__22777;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__21773 = cljs.core.seq(node);
var chunk__21774 = null;
var count__21775 = (0);
var i__21776 = (0);
while(true){
if((i__21776 < count__21775)){
var n = chunk__21774.cljs$core$IIndexed$_nth$arity$2(null,i__21776);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__22785 = seq__21773;
var G__22786 = chunk__21774;
var G__22787 = count__21775;
var G__22788 = (i__21776 + (1));
seq__21773 = G__22785;
chunk__21774 = G__22786;
count__21775 = G__22787;
i__21776 = G__22788;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__21773);
if(temp__5804__auto__){
var seq__21773__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21773__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__21773__$1);
var G__22790 = cljs.core.chunk_rest(seq__21773__$1);
var G__22791 = c__5568__auto__;
var G__22792 = cljs.core.count(c__5568__auto__);
var G__22793 = (0);
seq__21773 = G__22790;
chunk__21774 = G__22791;
count__21775 = G__22792;
i__21776 = G__22793;
continue;
} else {
var n = cljs.core.first(seq__21773__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__22795 = cljs.core.next(seq__21773__$1);
var G__22796 = null;
var G__22797 = (0);
var G__22798 = (0);
seq__21773 = G__22795;
chunk__21774 = G__22796;
count__21775 = G__22797;
i__21776 = G__22798;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__21797 = arguments.length;
switch (G__21797) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__21814 = arguments.length;
switch (G__21814) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__21858 = arguments.length;
switch (G__21858) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5045__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5775__auto__ = [];
var len__5769__auto___22828 = arguments.length;
var i__5770__auto___22829 = (0);
while(true){
if((i__5770__auto___22829 < len__5769__auto___22828)){
args__5775__auto__.push((arguments[i__5770__auto___22829]));

var G__22831 = (i__5770__auto___22829 + (1));
i__5770__auto___22829 = G__22831;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__21898_22837 = cljs.core.seq(nodes);
var chunk__21899_22838 = null;
var count__21900_22839 = (0);
var i__21901_22840 = (0);
while(true){
if((i__21901_22840 < count__21900_22839)){
var node_22841 = chunk__21899_22838.cljs$core$IIndexed$_nth$arity$2(null,i__21901_22840);
fragment.appendChild(shadow.dom._to_dom(node_22841));


var G__22846 = seq__21898_22837;
var G__22847 = chunk__21899_22838;
var G__22848 = count__21900_22839;
var G__22849 = (i__21901_22840 + (1));
seq__21898_22837 = G__22846;
chunk__21899_22838 = G__22847;
count__21900_22839 = G__22848;
i__21901_22840 = G__22849;
continue;
} else {
var temp__5804__auto___22850 = cljs.core.seq(seq__21898_22837);
if(temp__5804__auto___22850){
var seq__21898_22851__$1 = temp__5804__auto___22850;
if(cljs.core.chunked_seq_QMARK_(seq__21898_22851__$1)){
var c__5568__auto___22853 = cljs.core.chunk_first(seq__21898_22851__$1);
var G__22854 = cljs.core.chunk_rest(seq__21898_22851__$1);
var G__22855 = c__5568__auto___22853;
var G__22856 = cljs.core.count(c__5568__auto___22853);
var G__22857 = (0);
seq__21898_22837 = G__22854;
chunk__21899_22838 = G__22855;
count__21900_22839 = G__22856;
i__21901_22840 = G__22857;
continue;
} else {
var node_22858 = cljs.core.first(seq__21898_22851__$1);
fragment.appendChild(shadow.dom._to_dom(node_22858));


var G__22865 = cljs.core.next(seq__21898_22851__$1);
var G__22866 = null;
var G__22867 = (0);
var G__22868 = (0);
seq__21898_22837 = G__22865;
chunk__21899_22838 = G__22866;
count__21900_22839 = G__22867;
i__21901_22840 = G__22868;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq21889){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21889));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__21915_22871 = cljs.core.seq(scripts);
var chunk__21916_22872 = null;
var count__21917_22873 = (0);
var i__21918_22874 = (0);
while(true){
if((i__21918_22874 < count__21917_22873)){
var vec__21939_22875 = chunk__21916_22872.cljs$core$IIndexed$_nth$arity$2(null,i__21918_22874);
var script_tag_22876 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21939_22875,(0),null);
var script_body_22877 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21939_22875,(1),null);
eval(script_body_22877);


var G__22880 = seq__21915_22871;
var G__22881 = chunk__21916_22872;
var G__22882 = count__21917_22873;
var G__22883 = (i__21918_22874 + (1));
seq__21915_22871 = G__22880;
chunk__21916_22872 = G__22881;
count__21917_22873 = G__22882;
i__21918_22874 = G__22883;
continue;
} else {
var temp__5804__auto___22884 = cljs.core.seq(seq__21915_22871);
if(temp__5804__auto___22884){
var seq__21915_22886__$1 = temp__5804__auto___22884;
if(cljs.core.chunked_seq_QMARK_(seq__21915_22886__$1)){
var c__5568__auto___22888 = cljs.core.chunk_first(seq__21915_22886__$1);
var G__22889 = cljs.core.chunk_rest(seq__21915_22886__$1);
var G__22890 = c__5568__auto___22888;
var G__22891 = cljs.core.count(c__5568__auto___22888);
var G__22892 = (0);
seq__21915_22871 = G__22889;
chunk__21916_22872 = G__22890;
count__21917_22873 = G__22891;
i__21918_22874 = G__22892;
continue;
} else {
var vec__21945_22893 = cljs.core.first(seq__21915_22886__$1);
var script_tag_22894 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21945_22893,(0),null);
var script_body_22895 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21945_22893,(1),null);
eval(script_body_22895);


var G__22896 = cljs.core.next(seq__21915_22886__$1);
var G__22897 = null;
var G__22898 = (0);
var G__22899 = (0);
seq__21915_22871 = G__22896;
chunk__21916_22872 = G__22897;
count__21917_22873 = G__22898;
i__21918_22874 = G__22899;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__21955){
var vec__21957 = p__21955;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21957,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21957,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__21992 = arguments.length;
switch (G__21992) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__22025 = cljs.core.seq(style_keys);
var chunk__22026 = null;
var count__22027 = (0);
var i__22028 = (0);
while(true){
if((i__22028 < count__22027)){
var it = chunk__22026.cljs$core$IIndexed$_nth$arity$2(null,i__22028);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__22914 = seq__22025;
var G__22915 = chunk__22026;
var G__22916 = count__22027;
var G__22917 = (i__22028 + (1));
seq__22025 = G__22914;
chunk__22026 = G__22915;
count__22027 = G__22916;
i__22028 = G__22917;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__22025);
if(temp__5804__auto__){
var seq__22025__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22025__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__22025__$1);
var G__22918 = cljs.core.chunk_rest(seq__22025__$1);
var G__22919 = c__5568__auto__;
var G__22920 = cljs.core.count(c__5568__auto__);
var G__22921 = (0);
seq__22025 = G__22918;
chunk__22026 = G__22919;
count__22027 = G__22920;
i__22028 = G__22921;
continue;
} else {
var it = cljs.core.first(seq__22025__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__22926 = cljs.core.next(seq__22025__$1);
var G__22927 = null;
var G__22928 = (0);
var G__22929 = (0);
seq__22025 = G__22926;
chunk__22026 = G__22927;
count__22027 = G__22928;
i__22028 = G__22929;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k22051,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__22074 = k22051;
var G__22074__$1 = (((G__22074 instanceof cljs.core.Keyword))?G__22074.fqn:null);
switch (G__22074__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k22051,else__5346__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__22081){
var vec__22082 = p__22081;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22082,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22082,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__22050){
var self__ = this;
var G__22050__$1 = this;
return (new cljs.core.RecordIter((0),G__22050__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this22052,other22053){
var self__ = this;
var this22052__$1 = this;
return (((!((other22053 == null)))) && ((((this22052__$1.constructor === other22053.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22052__$1.x,other22053.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22052__$1.y,other22053.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22052__$1.__extmap,other22053.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k22051){
var self__ = this;
var this__5350__auto____$1 = this;
var G__22096 = k22051;
var G__22096__$1 = (((G__22096 instanceof cljs.core.Keyword))?G__22096.fqn:null);
switch (G__22096__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k22051);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__22050){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__22101 = cljs.core.keyword_identical_QMARK_;
var expr__22102 = k__5352__auto__;
if(cljs.core.truth_((pred__22101.cljs$core$IFn$_invoke$arity$2 ? pred__22101.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__22102) : pred__22101.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__22102)))){
return (new shadow.dom.Coordinate(G__22050,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__22101.cljs$core$IFn$_invoke$arity$2 ? pred__22101.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__22102) : pred__22101.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__22102)))){
return (new shadow.dom.Coordinate(self__.x,G__22050,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__22050),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__22050){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__22050,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__22054){
var extmap__5385__auto__ = (function (){var G__22115 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__22054,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__22054)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__22115);
} else {
return G__22115;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__22054),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__22054),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k22143,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__22156 = k22143;
var G__22156__$1 = (((G__22156 instanceof cljs.core.Keyword))?G__22156.fqn:null);
switch (G__22156__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k22143,else__5346__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__22157){
var vec__22158 = p__22157;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22158,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22158,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Size{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__22142){
var self__ = this;
var G__22142__$1 = this;
return (new cljs.core.RecordIter((0),G__22142__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this22144,other22145){
var self__ = this;
var this22144__$1 = this;
return (((!((other22145 == null)))) && ((((this22144__$1.constructor === other22145.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22144__$1.w,other22145.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22144__$1.h,other22145.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22144__$1.__extmap,other22145.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k22143){
var self__ = this;
var this__5350__auto____$1 = this;
var G__22191 = k22143;
var G__22191__$1 = (((G__22191 instanceof cljs.core.Keyword))?G__22191.fqn:null);
switch (G__22191__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k22143);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__22142){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__22202 = cljs.core.keyword_identical_QMARK_;
var expr__22203 = k__5352__auto__;
if(cljs.core.truth_((pred__22202.cljs$core$IFn$_invoke$arity$2 ? pred__22202.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__22203) : pred__22202.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__22203)))){
return (new shadow.dom.Size(G__22142,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__22202.cljs$core$IFn$_invoke$arity$2 ? pred__22202.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__22203) : pred__22202.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__22203)))){
return (new shadow.dom.Size(self__.w,G__22142,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__22142),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__22142){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__22142,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__22146){
var extmap__5385__auto__ = (function (){var G__22230 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__22146,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__22146)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__22230);
} else {
return G__22230;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__22146),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__22146),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5633__auto__ = opts;
var l__5634__auto__ = a__5633__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5634__auto__)){
var G__23030 = (i + (1));
var G__23031 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__23030;
ret = G__23031;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__22260){
var vec__22261 = p__22260;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22261,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22261,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__22266 = arguments.length;
switch (G__22266) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5802__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5802__auto__)){
var child = temp__5802__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__23088 = ps;
var G__23089 = (i + (1));
el__$1 = G__23088;
i = G__23089;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__22306 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22306,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22306,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22306,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__22310_23123 = cljs.core.seq(props);
var chunk__22311_23124 = null;
var count__22312_23125 = (0);
var i__22313_23126 = (0);
while(true){
if((i__22313_23126 < count__22312_23125)){
var vec__22343_23131 = chunk__22311_23124.cljs$core$IIndexed$_nth$arity$2(null,i__22313_23126);
var k_23132 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22343_23131,(0),null);
var v_23133 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22343_23131,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_23132);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_23132),v_23133);


var G__23147 = seq__22310_23123;
var G__23148 = chunk__22311_23124;
var G__23149 = count__22312_23125;
var G__23150 = (i__22313_23126 + (1));
seq__22310_23123 = G__23147;
chunk__22311_23124 = G__23148;
count__22312_23125 = G__23149;
i__22313_23126 = G__23150;
continue;
} else {
var temp__5804__auto___23155 = cljs.core.seq(seq__22310_23123);
if(temp__5804__auto___23155){
var seq__22310_23159__$1 = temp__5804__auto___23155;
if(cljs.core.chunked_seq_QMARK_(seq__22310_23159__$1)){
var c__5568__auto___23160 = cljs.core.chunk_first(seq__22310_23159__$1);
var G__23161 = cljs.core.chunk_rest(seq__22310_23159__$1);
var G__23162 = c__5568__auto___23160;
var G__23163 = cljs.core.count(c__5568__auto___23160);
var G__23164 = (0);
seq__22310_23123 = G__23161;
chunk__22311_23124 = G__23162;
count__22312_23125 = G__23163;
i__22313_23126 = G__23164;
continue;
} else {
var vec__22357_23165 = cljs.core.first(seq__22310_23159__$1);
var k_23166 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22357_23165,(0),null);
var v_23167 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22357_23165,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_23166);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_23166),v_23167);


var G__23174 = cljs.core.next(seq__22310_23159__$1);
var G__23175 = null;
var G__23176 = (0);
var G__23177 = (0);
seq__22310_23123 = G__23174;
chunk__22311_23124 = G__23175;
count__22312_23125 = G__23176;
i__22313_23126 = G__23177;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__22372 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22372,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22372,(1),null);
var seq__22377_23198 = cljs.core.seq(node_children);
var chunk__22379_23199 = null;
var count__22380_23200 = (0);
var i__22381_23201 = (0);
while(true){
if((i__22381_23201 < count__22380_23200)){
var child_struct_23202 = chunk__22379_23199.cljs$core$IIndexed$_nth$arity$2(null,i__22381_23201);
if((!((child_struct_23202 == null)))){
if(typeof child_struct_23202 === 'string'){
var text_23203 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_23203),child_struct_23202].join(''));
} else {
var children_23204 = shadow.dom.svg_node(child_struct_23202);
if(cljs.core.seq_QMARK_(children_23204)){
var seq__22423_23205 = cljs.core.seq(children_23204);
var chunk__22425_23206 = null;
var count__22426_23207 = (0);
var i__22427_23208 = (0);
while(true){
if((i__22427_23208 < count__22426_23207)){
var child_23209 = chunk__22425_23206.cljs$core$IIndexed$_nth$arity$2(null,i__22427_23208);
if(cljs.core.truth_(child_23209)){
node.appendChild(child_23209);


var G__23210 = seq__22423_23205;
var G__23211 = chunk__22425_23206;
var G__23212 = count__22426_23207;
var G__23213 = (i__22427_23208 + (1));
seq__22423_23205 = G__23210;
chunk__22425_23206 = G__23211;
count__22426_23207 = G__23212;
i__22427_23208 = G__23213;
continue;
} else {
var G__23214 = seq__22423_23205;
var G__23215 = chunk__22425_23206;
var G__23216 = count__22426_23207;
var G__23217 = (i__22427_23208 + (1));
seq__22423_23205 = G__23214;
chunk__22425_23206 = G__23215;
count__22426_23207 = G__23216;
i__22427_23208 = G__23217;
continue;
}
} else {
var temp__5804__auto___23218 = cljs.core.seq(seq__22423_23205);
if(temp__5804__auto___23218){
var seq__22423_23219__$1 = temp__5804__auto___23218;
if(cljs.core.chunked_seq_QMARK_(seq__22423_23219__$1)){
var c__5568__auto___23224 = cljs.core.chunk_first(seq__22423_23219__$1);
var G__23225 = cljs.core.chunk_rest(seq__22423_23219__$1);
var G__23226 = c__5568__auto___23224;
var G__23227 = cljs.core.count(c__5568__auto___23224);
var G__23228 = (0);
seq__22423_23205 = G__23225;
chunk__22425_23206 = G__23226;
count__22426_23207 = G__23227;
i__22427_23208 = G__23228;
continue;
} else {
var child_23232 = cljs.core.first(seq__22423_23219__$1);
if(cljs.core.truth_(child_23232)){
node.appendChild(child_23232);


var G__23233 = cljs.core.next(seq__22423_23219__$1);
var G__23234 = null;
var G__23235 = (0);
var G__23236 = (0);
seq__22423_23205 = G__23233;
chunk__22425_23206 = G__23234;
count__22426_23207 = G__23235;
i__22427_23208 = G__23236;
continue;
} else {
var G__23238 = cljs.core.next(seq__22423_23219__$1);
var G__23239 = null;
var G__23240 = (0);
var G__23241 = (0);
seq__22423_23205 = G__23238;
chunk__22425_23206 = G__23239;
count__22426_23207 = G__23240;
i__22427_23208 = G__23241;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_23204);
}
}


var G__23242 = seq__22377_23198;
var G__23243 = chunk__22379_23199;
var G__23244 = count__22380_23200;
var G__23245 = (i__22381_23201 + (1));
seq__22377_23198 = G__23242;
chunk__22379_23199 = G__23243;
count__22380_23200 = G__23244;
i__22381_23201 = G__23245;
continue;
} else {
var G__23247 = seq__22377_23198;
var G__23248 = chunk__22379_23199;
var G__23249 = count__22380_23200;
var G__23250 = (i__22381_23201 + (1));
seq__22377_23198 = G__23247;
chunk__22379_23199 = G__23248;
count__22380_23200 = G__23249;
i__22381_23201 = G__23250;
continue;
}
} else {
var temp__5804__auto___23251 = cljs.core.seq(seq__22377_23198);
if(temp__5804__auto___23251){
var seq__22377_23252__$1 = temp__5804__auto___23251;
if(cljs.core.chunked_seq_QMARK_(seq__22377_23252__$1)){
var c__5568__auto___23257 = cljs.core.chunk_first(seq__22377_23252__$1);
var G__23258 = cljs.core.chunk_rest(seq__22377_23252__$1);
var G__23259 = c__5568__auto___23257;
var G__23260 = cljs.core.count(c__5568__auto___23257);
var G__23261 = (0);
seq__22377_23198 = G__23258;
chunk__22379_23199 = G__23259;
count__22380_23200 = G__23260;
i__22381_23201 = G__23261;
continue;
} else {
var child_struct_23268 = cljs.core.first(seq__22377_23252__$1);
if((!((child_struct_23268 == null)))){
if(typeof child_struct_23268 === 'string'){
var text_23274 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_23274),child_struct_23268].join(''));
} else {
var children_23278 = shadow.dom.svg_node(child_struct_23268);
if(cljs.core.seq_QMARK_(children_23278)){
var seq__22439_23279 = cljs.core.seq(children_23278);
var chunk__22441_23280 = null;
var count__22442_23281 = (0);
var i__22443_23282 = (0);
while(true){
if((i__22443_23282 < count__22442_23281)){
var child_23286 = chunk__22441_23280.cljs$core$IIndexed$_nth$arity$2(null,i__22443_23282);
if(cljs.core.truth_(child_23286)){
node.appendChild(child_23286);


var G__23287 = seq__22439_23279;
var G__23288 = chunk__22441_23280;
var G__23289 = count__22442_23281;
var G__23290 = (i__22443_23282 + (1));
seq__22439_23279 = G__23287;
chunk__22441_23280 = G__23288;
count__22442_23281 = G__23289;
i__22443_23282 = G__23290;
continue;
} else {
var G__23291 = seq__22439_23279;
var G__23292 = chunk__22441_23280;
var G__23293 = count__22442_23281;
var G__23294 = (i__22443_23282 + (1));
seq__22439_23279 = G__23291;
chunk__22441_23280 = G__23292;
count__22442_23281 = G__23293;
i__22443_23282 = G__23294;
continue;
}
} else {
var temp__5804__auto___23299__$1 = cljs.core.seq(seq__22439_23279);
if(temp__5804__auto___23299__$1){
var seq__22439_23304__$1 = temp__5804__auto___23299__$1;
if(cljs.core.chunked_seq_QMARK_(seq__22439_23304__$1)){
var c__5568__auto___23305 = cljs.core.chunk_first(seq__22439_23304__$1);
var G__23306 = cljs.core.chunk_rest(seq__22439_23304__$1);
var G__23307 = c__5568__auto___23305;
var G__23308 = cljs.core.count(c__5568__auto___23305);
var G__23309 = (0);
seq__22439_23279 = G__23306;
chunk__22441_23280 = G__23307;
count__22442_23281 = G__23308;
i__22443_23282 = G__23309;
continue;
} else {
var child_23310 = cljs.core.first(seq__22439_23304__$1);
if(cljs.core.truth_(child_23310)){
node.appendChild(child_23310);


var G__23311 = cljs.core.next(seq__22439_23304__$1);
var G__23312 = null;
var G__23313 = (0);
var G__23314 = (0);
seq__22439_23279 = G__23311;
chunk__22441_23280 = G__23312;
count__22442_23281 = G__23313;
i__22443_23282 = G__23314;
continue;
} else {
var G__23315 = cljs.core.next(seq__22439_23304__$1);
var G__23316 = null;
var G__23317 = (0);
var G__23318 = (0);
seq__22439_23279 = G__23315;
chunk__22441_23280 = G__23316;
count__22442_23281 = G__23317;
i__22443_23282 = G__23318;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_23278);
}
}


var G__23323 = cljs.core.next(seq__22377_23252__$1);
var G__23324 = null;
var G__23325 = (0);
var G__23326 = (0);
seq__22377_23198 = G__23323;
chunk__22379_23199 = G__23324;
count__22380_23200 = G__23325;
i__22381_23201 = G__23326;
continue;
} else {
var G__23327 = cljs.core.next(seq__22377_23252__$1);
var G__23328 = null;
var G__23329 = (0);
var G__23330 = (0);
seq__22377_23198 = G__23327;
chunk__22379_23199 = G__23328;
count__22380_23200 = G__23329;
i__22381_23201 = G__23330;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___23332 = arguments.length;
var i__5770__auto___23333 = (0);
while(true){
if((i__5770__auto___23333 < len__5769__auto___23332)){
args__5775__auto__.push((arguments[i__5770__auto___23333]));

var G__23335 = (i__5770__auto___23333 + (1));
i__5770__auto___23333 = G__23335;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq22457){
var G__22458 = cljs.core.first(seq22457);
var seq22457__$1 = cljs.core.next(seq22457);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22458,seq22457__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__22469 = arguments.length;
switch (G__22469) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__5043__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__5043__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__5043__auto__;
}
})())){
var c__17865__auto___23340 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17866__auto__ = (function (){var switch__17474__auto__ = (function (state_22487){
var state_val_22488 = (state_22487[(1)]);
if((state_val_22488 === (1))){
var state_22487__$1 = state_22487;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22487__$1,(2),once_or_cleanup);
} else {
if((state_val_22488 === (2))){
var inst_22484 = (state_22487[(2)]);
var inst_22485 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_22487__$1 = (function (){var statearr_22493 = state_22487;
(statearr_22493[(7)] = inst_22484);

return statearr_22493;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_22487__$1,inst_22485);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__17475__auto__ = null;
var shadow$dom$state_machine__17475__auto____0 = (function (){
var statearr_22494 = [null,null,null,null,null,null,null,null];
(statearr_22494[(0)] = shadow$dom$state_machine__17475__auto__);

(statearr_22494[(1)] = (1));

return statearr_22494;
});
var shadow$dom$state_machine__17475__auto____1 = (function (state_22487){
while(true){
var ret_value__17476__auto__ = (function (){try{while(true){
var result__17477__auto__ = switch__17474__auto__(state_22487);
if(cljs.core.keyword_identical_QMARK_(result__17477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17477__auto__;
}
break;
}
}catch (e22495){var ex__17478__auto__ = e22495;
var statearr_22496_23343 = state_22487;
(statearr_22496_23343[(2)] = ex__17478__auto__);


if(cljs.core.seq((state_22487[(4)]))){
var statearr_22497_23348 = state_22487;
(statearr_22497_23348[(1)] = cljs.core.first((state_22487[(4)])));

} else {
throw ex__17478__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23349 = state_22487;
state_22487 = G__23349;
continue;
} else {
return ret_value__17476__auto__;
}
break;
}
});
shadow$dom$state_machine__17475__auto__ = function(state_22487){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__17475__auto____0.call(this);
case 1:
return shadow$dom$state_machine__17475__auto____1.call(this,state_22487);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__17475__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__17475__auto____0;
shadow$dom$state_machine__17475__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__17475__auto____1;
return shadow$dom$state_machine__17475__auto__;
})()
})();
var state__17867__auto__ = (function (){var statearr_22498 = f__17866__auto__();
(statearr_22498[(6)] = c__17865__auto___23340);

return statearr_22498;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17867__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
