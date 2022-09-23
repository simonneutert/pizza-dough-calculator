goog.provide('pizza.recipes.pan');
pizza.recipes.pan.defaults = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"type","type",1174270348),"pan",new cljs.core.Keyword(null,"number","number",1570378438),(3),new cljs.core.Keyword(null,"grams-per-pizza","grams-per-pizza",241346563),(230),new cljs.core.Keyword(null,"water-share","water-share",-925750087),(65),new cljs.core.Keyword(null,"salt-percentage","salt-percentage",-358216752),0.011682893,new cljs.core.Keyword(null,"sugar-percentage","sugar-percentage",1142208665),0.011682893,new cljs.core.Keyword(null,"oil-percentage","oil-percentage",-1349559060),0.0139082058,new cljs.core.Keyword(null,"yeast","yeast",-295610221),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fresh","fresh",-1182453442),0.002364394993045897,new cljs.core.Keyword(null,"dry","dry",-951485738),9.7357441E-4], null)], null);
pizza.recipes.pan.pan = (function pizza$recipes$pan$pan(pizza__$1){
pizza.helper.validate_BANG_(pizza__$1);

var new_pizza = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pizza.recipes.pan.defaults,pizza__$1], 0));
var total_weight = pizza.helper.total_weight(new_pizza);
var salt_grams = pizza.helper.salt_grams(new_pizza);
var yeast_grams = pizza.helper.yeast_grams(new_pizza);
var oil_grams = pizza.helper.oil_grams(new_pizza);
var sugar_grams = pizza.helper.sugar_grams(new_pizza);
var flour_grams = pizza.helper.flour_grams_all_flours(new_pizza);
var water_grams = pizza.helper.water_grams(new_pizza,flour_grams);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new_pizza,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"oil","oil",1779144714),oil_grams,new cljs.core.Keyword(null,"salt","salt",-587171712),salt_grams,new cljs.core.Keyword(null,"flour","flour",-1568696620),flour_grams,new cljs.core.Keyword(null,"water","water",-824098213),water_grams,new cljs.core.Keyword(null,"sugar","sugar",-73788488),sugar_grams,new cljs.core.Keyword(null,"yeast","yeast",-295610221),yeast_grams,new cljs.core.Keyword(null,"total-weight","total-weight",-1997465421),total_weight], null)], 0));
});

//# sourceMappingURL=pizza.recipes.pan.js.map
