goog.provide('pizza.helper');
pizza.helper.validate_BANG_ = (function pizza$helper$validate_BANG_(pizza__$1){
var or__5045__auto__ = ((cljs.core.contains_QMARK_(pizza__$1,new cljs.core.Keyword(null,"number","number",1570378438))) && (((cljs.core.contains_QMARK_(pizza__$1,new cljs.core.Keyword(null,"grams-per-pizza","grams-per-pizza",241346563))) && (((cljs.core.contains_QMARK_(pizza__$1,new cljs.core.Keyword(null,"yeast-type","yeast-type",1125045551))) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"yeast-type","yeast-type",1125045551).cljs$core$IFn$_invoke$arity$1(pizza__$1)),new cljs.core.Keyword(null,"fresh","fresh",-1182453442))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"yeast-type","yeast-type",1125045551).cljs$core$IFn$_invoke$arity$1(pizza__$1)),new cljs.core.Keyword(null,"dry","dry",-951485738))))))))));
if(or__5045__auto__){
return or__5045__auto__;
} else {
throw (new Error("Argument Error: needs number, grams-per-pizza and yeast-type (:fresh or :dry)"));
}
});
pizza.helper.round_first_decimal = (function pizza$helper$round_first_decimal(n){
return (Math.round(((10) * n)) / (10));
});
pizza.helper.fixed_float = (function pizza$helper$fixed_float(n){
return parseFloat(n.toFixed((2)));
});
pizza.helper.total_weight = (function pizza$helper$total_weight(pizza__$1){
return (new cljs.core.Keyword(null,"number","number",1570378438).cljs$core$IFn$_invoke$arity$1(pizza__$1) * new cljs.core.Keyword(null,"grams-per-pizza","grams-per-pizza",241346563).cljs$core$IFn$_invoke$arity$1(pizza__$1));
});
pizza.helper.oil_grams = (function pizza$helper$oil_grams(pizza__$1){
return pizza.helper.round_first_decimal(pizza.helper.fixed_float((pizza.helper.total_weight(pizza__$1) * new cljs.core.Keyword(null,"oil-percentage","oil-percentage",-1349559060).cljs$core$IFn$_invoke$arity$1(pizza__$1))));
});
pizza.helper.salt_grams = (function pizza$helper$salt_grams(pizza__$1){
return pizza.helper.round_first_decimal(pizza.helper.fixed_float((pizza.helper.total_weight(pizza__$1) * new cljs.core.Keyword(null,"salt-percentage","salt-percentage",-358216752).cljs$core$IFn$_invoke$arity$1(pizza__$1))));
});
pizza.helper.yeast_grams = (function pizza$helper$yeast_grams(pizza__$1){
var yeast_type_k = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"yeast-type","yeast-type",1125045551).cljs$core$IFn$_invoke$arity$1(pizza__$1));
return pizza.helper.round_first_decimal(pizza.helper.fixed_float((pizza.helper.total_weight(pizza__$1) * cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(pizza__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"yeast","yeast",-295610221),yeast_type_k], null)))));
});
pizza.helper.sugar_grams = (function pizza$helper$sugar_grams(pizza__$1){
return pizza.helper.round_first_decimal(pizza.helper.fixed_float((pizza.helper.total_weight(pizza__$1) * new cljs.core.Keyword(null,"sugar-percentage","sugar-percentage",1142208665).cljs$core$IFn$_invoke$arity$1(pizza__$1))));
});
pizza.helper.net_weight_water_flour = (function pizza$helper$net_weight_water_flour(pizza__$1){
var salt_grams = pizza.helper.salt_grams(pizza__$1);
var yeast_grams = pizza.helper.yeast_grams(pizza__$1);
var oil_grams = pizza.helper.oil_grams(pizza__$1);
var sugar_grams = pizza.helper.sugar_grams(pizza__$1);
return ((((pizza.helper.total_weight(pizza__$1) - salt_grams) - yeast_grams) - oil_grams) - sugar_grams);
});
pizza.helper.water_grams = (function pizza$helper$water_grams(pizza__$1,weight_reference){
return Math.round((weight_reference * (new cljs.core.Keyword(null,"water-share","water-share",-925750087).cljs$core$IFn$_invoke$arity$1(pizza__$1) / (100))));
});
pizza.helper.flour_grams_all_flours = (function pizza$helper$flour_grams_all_flours(pizza__$1){
return Math.round((pizza.helper.net_weight_water_flour(pizza__$1) / (((100) + new cljs.core.Keyword(null,"water-share","water-share",-925750087).cljs$core$IFn$_invoke$arity$1(pizza__$1)) / (100))));
});
pizza.helper.semolina_grams = (function pizza$helper$semolina_grams(pizza__$1,flour_grams_with_semolina){
return Math.round((new cljs.core.Keyword(null,"semolina-percentage","semolina-percentage",861043132).cljs$core$IFn$_invoke$arity$1(pizza__$1) * flour_grams_with_semolina));
});
pizza.helper.yeast_by_type = (function pizza$helper$yeast_by_type(pizza__$1,yeast_type){
var yeast_type_k = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(yeast_type);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(pizza__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"yeast","yeast",-295610221),yeast_type_k], null),(function(){throw "Type of yeast not known!"})());
});

//# sourceMappingURL=pizza.helper.js.map
