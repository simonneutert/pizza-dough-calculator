
shadow.cljs.devtools.client.env.module_loaded('main');

try { pizza.core.init(); } catch (e) { console.error("An error occurred when calling (pizza.core/init)"); throw(e); }