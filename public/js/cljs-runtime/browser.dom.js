goog.provide('browser.dom');
browser.dom.elem_by_id = (function browser$dom$elem_by_id(id){
return document.getElementById(id);
});
browser.dom.innerhtml = (function browser$dom$innerhtml(elem,content){
return (elem.innerHTML = content);
});

//# sourceMappingURL=browser.dom.js.map
