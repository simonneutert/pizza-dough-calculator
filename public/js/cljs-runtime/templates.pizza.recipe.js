goog.provide('templates.pizza.recipe');
templates.pizza.recipe.pizza_details = (function templates$pizza$recipe$pizza_details(pizza__$1){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__24717 = new cljs.core.Keyword(null,"number","number",1570378438).cljs$core$IFn$_invoke$arity$1(pizza__$1);
switch (G__24717) {
case (1):
return "Weight of dough ";

break;
default:
return ["Doughs weigh ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"grams-per-pizza","grams-per-pizza",241346563).cljs$core$IFn$_invoke$arity$1(pizza__$1)),"g each and "].join('');

}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"total-weight","total-weight",-1997465421).cljs$core$IFn$_invoke$arity$1(pizza__$1)),"g total"].join('');
});
templates.pizza.recipe.recipe_ingredients_template = (function templates$pizza$recipe$recipe_ingredients_template(pizza__$1){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html((function (){var map__24740 = pizza__$1;
var map__24740__$1 = cljs.core.__destructure_map(map__24740);
var flour = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24740__$1,new cljs.core.Keyword(null,"flour","flour",-1568696620));
var water = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24740__$1,new cljs.core.Keyword(null,"water","water",-824098213));
var salt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24740__$1,new cljs.core.Keyword(null,"salt","salt",-587171712));
var yeast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24740__$1,new cljs.core.Keyword(null,"yeast","yeast",-295610221));
var semolina = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24740__$1,new cljs.core.Keyword(null,"semolina","semolina",1923679214));
var sugar = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24740__$1,new cljs.core.Keyword(null,"sugar","sugar",-73788488));
var yeast_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24740__$1,new cljs.core.Keyword(null,"yeast-type","yeast-type",1125045551));
var oil = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24740__$1,new cljs.core.Keyword(null,"oil","oil",1779144714));
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Flour: ",flour,"g"], null),(cljs.core.truth_(semolina)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Semolina: ",semolina,"g"], null):null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Water: ",water,"g"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Salt: ",salt,"g"], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Yeast (",yeast_type,"): ",yeast,"g"], null),(cljs.core.truth_(sugar)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Sugar: ",sugar,"g"], null):null),(cljs.core.truth_(oil)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Oil: ",oil,"g"], null):null)], null);
})()));
});
templates.pizza.recipe.recipe_template = (function templates$pizza$recipe$recipe_template(pizza__$1){
return ["<div","",">",(function (){var attrs24747 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"number","number",1570378438).cljs$core$IFn$_invoke$arity$1(pizza__$1))," ",clojure.string.capitalize(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(pizza__$1)))," Style Pizza"].join('');
if(cljs.core.map_QMARK_(attrs24747)){
return ["<h2",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),null], null),attrs24747], 0)))),">","</h2>"].join('');
} else {
return ["<h2>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html(attrs24747)),"</h2>"].join('');
}
})(),(function (){var attrs24754 = templates.pizza.recipe.pizza_details(pizza__$1);
if(cljs.core.map_QMARK_(attrs24754)){
return ["<h4",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),null], null),attrs24754], 0)))),">","</h4>"].join('');
} else {
return ["<h4>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html(attrs24754)),"</h4>"].join('');
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html(templates.pizza.recipe.recipe_ingredients_template(pizza__$1))),"</div>"].join('');
});

//# sourceMappingURL=templates.pizza.recipe.js.map
