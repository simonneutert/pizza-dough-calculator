goog.provide('pizza.core');
pizza.core.bake = (function pizza$core$bake(pizza_type,number,grams_per_pizza,yeast_type){
var G__17728 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(pizza_type);
var G__17728__$1 = (((G__17728 instanceof cljs.core.Keyword))?G__17728.fqn:null);
switch (G__17728__$1) {
case "neapolitan":
return pizza.recipes.neapolitan.neapolitan(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"grams-per-pizza","grams-per-pizza",241346563),grams_per_pizza,new cljs.core.Keyword(null,"yeast-type","yeast-type",1125045551),yeast_type,new cljs.core.Keyword(null,"number","number",1570378438),number], null));

break;
case "new-york":
return pizza.recipes.new_york.new_york(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"grams-per-pizza","grams-per-pizza",241346563),grams_per_pizza,new cljs.core.Keyword(null,"yeast-type","yeast-type",1125045551),yeast_type,new cljs.core.Keyword(null,"number","number",1570378438),number], null));

break;
case "sicilian":
return pizza.recipes.sicilian.sicilian(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"grams-per-pizza","grams-per-pizza",241346563),grams_per_pizza,new cljs.core.Keyword(null,"yeast-type","yeast-type",1125045551),yeast_type,new cljs.core.Keyword(null,"number","number",1570378438),number], null));

break;
case "pan":
return pizza.recipes.pan.pan(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"grams-per-pizza","grams-per-pizza",241346563),grams_per_pizza,new cljs.core.Keyword(null,"yeast-type","yeast-type",1125045551),yeast_type,new cljs.core.Keyword(null,"number","number",1570378438),number], null));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__17728__$1)].join('')));

}
});
pizza.core.click_handle = (function pizza$core$click_handle(){
var map__17730 = cljs.core.deref(browser.store.db);
var map__17730__$1 = cljs.core.__destructure_map(map__17730);
var number = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17730__$1,new cljs.core.Keyword(null,"number","number",1570378438));
var grams_per_pizza = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17730__$1,new cljs.core.Keyword(null,"grams-per-pizza","grams-per-pizza",241346563));
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17730__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var yeast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17730__$1,new cljs.core.Keyword(null,"yeast","yeast",-295610221));
return browser.dom.innerhtml(browser.dom.elem_by_id("pizza-recipe"),templates.pizza.recipe.recipe_template(pizza.core.bake(style,number,grams_per_pizza,yeast)));
});
pizza.core.update_db_BANG_ = (function pizza$core$update_db_BANG_(k,v){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(browser.store.db,cljs.core.assoc,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k),v);
});
pizza.core.ready = (function pizza$core$ready(fn){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(document.readyState,"loading")){
return (fn.cljs$core$IFn$_invoke$arity$0 ? fn.cljs$core$IFn$_invoke$arity$0() : fn.call(null));
} else {
return document.addEventListener("DOMContentLoaded",fn);
}
});
pizza.core.main = (function pizza$core$main(){
(browser.dom.elem_by_id("style").value = new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(browser.store.db)));

(browser.dom.elem_by_id("yeast").value = new cljs.core.Keyword(null,"yeast","yeast",-295610221).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(browser.store.db)));

(browser.dom.elem_by_id("number").value = new cljs.core.Keyword(null,"number","number",1570378438).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(browser.store.db)));

(browser.dom.elem_by_id("grams").value = new cljs.core.Keyword(null,"grams-per-pizza","grams-per-pizza",241346563).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(browser.store.db)));

browser.dom.elem_by_id("style").addEventListener("change",(function (){
return pizza.core.update_db_BANG_(new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.first(browser.dom.elem_by_id("style").selectedOptions).value);
}));

browser.dom.elem_by_id("number").addEventListener("keyup",(function (){
return pizza.core.update_db_BANG_(new cljs.core.Keyword(null,"number","number",1570378438),(browser.dom.elem_by_id("number").value | (0)));
}));

browser.dom.elem_by_id("grams").addEventListener("keyup",(function (){
return pizza.core.update_db_BANG_(new cljs.core.Keyword(null,"grams-per-pizza","grams-per-pizza",241346563),(browser.dom.elem_by_id("grams").value | (0)));
}));

browser.dom.elem_by_id("number").addEventListener("blur",(function (){
return pizza.core.update_db_BANG_(new cljs.core.Keyword(null,"number","number",1570378438),(browser.dom.elem_by_id("number").value | (0)));
}));

browser.dom.elem_by_id("grams").addEventListener("blur",(function (){
return pizza.core.update_db_BANG_(new cljs.core.Keyword(null,"grams-per-pizza","grams-per-pizza",241346563),(browser.dom.elem_by_id("grams").value | (0)));
}));

browser.dom.elem_by_id("yeast").addEventListener("change",(function (){
return pizza.core.update_db_BANG_(new cljs.core.Keyword(null,"yeast","yeast",-295610221),cljs.core.first(browser.dom.elem_by_id("yeast").selectedOptions).value);
}));

return pizza.core.click_handle();
});
pizza.core.init = (function pizza$core$init(){
cljs.core.add_watch(browser.store.db,new cljs.core.Keyword(null,"trigger","trigger",103466139),pizza.core.click_handle);

return pizza.core.ready(pizza.core.main);
});

//# sourceMappingURL=pizza.core.js.map
