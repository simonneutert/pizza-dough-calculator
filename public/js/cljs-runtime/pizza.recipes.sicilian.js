goog.provide('pizza.recipes.sicilian');
pizza.recipes.sicilian.defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"grams-per-pizza","grams-per-pizza",241346563),new cljs.core.Keyword(null,"number","number",1570378438),new cljs.core.Keyword(null,"oil-percentage","oil-percentage",-1349559060),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"yeast-type","yeast-type",1125045551),new cljs.core.Keyword(null,"salt-percentage","salt-percentage",-358216752),new cljs.core.Keyword(null,"yeast","yeast",-295610221),new cljs.core.Keyword(null,"sugar-percentage","sugar-percentage",1142208665),new cljs.core.Keyword(null,"water-share","water-share",-925750087),new cljs.core.Keyword(null,"semolina-percentage","semolina-percentage",861043132)],[(271),(1),0.02583,"sicilian","fresh",0.01107,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fresh","fresh",-1182453442),0.008118081,new cljs.core.Keyword(null,"dry","dry",-951485738),0.00332103321], null),0.01107,(66),0.22]);
pizza.recipes.sicilian.sicilian = (function pizza$recipes$sicilian$sicilian(pizza__$1){
pizza.helper.validate_BANG_(pizza__$1);

var new_pizza = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pizza.recipes.sicilian.defaults,pizza__$1], 0));
var total_weight = pizza.helper.total_weight(new_pizza);
var salt_grams = pizza.helper.salt_grams(new_pizza);
var yeast_grams = pizza.helper.yeast_grams(new_pizza);
var oil_grams = pizza.helper.oil_grams(new_pizza);
var sugar_grams = pizza.helper.sugar_grams(new_pizza);
var flour_grams_with_semolina = pizza.helper.flour_grams_all_flours(new_pizza);
var semolina_grams = pizza.helper.semolina_grams(new_pizza,flour_grams_with_semolina);
var flour_grams = (flour_grams_with_semolina - semolina_grams);
var water_grams = pizza.helper.water_grams(new_pizza,flour_grams_with_semolina);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new_pizza,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"oil","oil",1779144714),oil_grams,new cljs.core.Keyword(null,"salt","salt",-587171712),salt_grams,new cljs.core.Keyword(null,"flour","flour",-1568696620),flour_grams,new cljs.core.Keyword(null,"water","water",-824098213),water_grams,new cljs.core.Keyword(null,"sugar","sugar",-73788488),sugar_grams,new cljs.core.Keyword(null,"yeast","yeast",-295610221),yeast_grams,new cljs.core.Keyword(null,"semolina","semolina",1923679214),semolina_grams,new cljs.core.Keyword(null,"total-weight","total-weight",-1997465421),total_weight], null)], 0));
});

//# sourceMappingURL=pizza.recipes.sicilian.js.map
