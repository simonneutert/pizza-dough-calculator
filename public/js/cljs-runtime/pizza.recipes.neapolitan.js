goog.provide('pizza.recipes.neapolitan');
pizza.recipes.neapolitan.defaults = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"type","type",1174270348),"neapolitan",new cljs.core.Keyword(null,"number","number",1570378438),(4),new cljs.core.Keyword(null,"grams-per-pizza","grams-per-pizza",241346563),(230),new cljs.core.Keyword(null,"yeast-type","yeast-type",1125045551),"fresh",new cljs.core.Keyword(null,"salt-percentage","salt-percentage",-358216752),0.0178261,new cljs.core.Keyword(null,"water-share","water-share",-925750087),(65),new cljs.core.Keyword(null,"yeast","yeast",-295610221),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fresh","fresh",-1182453442),0.00119565217391304,new cljs.core.Keyword(null,"dry","dry",-951485738),4.3478260869565E-4], null)], null);
/**
 * Napolitanean style pizza
 */
pizza.recipes.neapolitan.neapolitan = (function pizza$recipes$neapolitan$neapolitan(pizza__$1){
var new_pizza = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pizza.recipes.neapolitan.defaults,pizza__$1], 0));
var total_weight = pizza.helper.total_weight(new_pizza);
var salt_grams = pizza.helper.salt_grams(new_pizza);
var yeast_grams = pizza.helper.yeast_grams(new_pizza);
var flour_grams = pizza.helper.flour_grams_all_flours(new_pizza);
var water_grams = pizza.helper.water_grams(new_pizza,flour_grams);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new_pizza,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"salt","salt",-587171712),salt_grams,new cljs.core.Keyword(null,"flour","flour",-1568696620),flour_grams,new cljs.core.Keyword(null,"water","water",-824098213),water_grams,new cljs.core.Keyword(null,"yeast","yeast",-295610221),yeast_grams,new cljs.core.Keyword(null,"total-weight","total-weight",-1997465421),total_weight], null)], 0));
});

//# sourceMappingURL=pizza.recipes.neapolitan.js.map
