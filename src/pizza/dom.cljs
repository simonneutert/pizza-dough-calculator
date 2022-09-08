(ns pizza.dom)

(defn elem-by-id [id]
  (.getElementById js/document id))

(defn innerhtml [elem content]
  (-> elem
      (.-innerHTML)
      (set! content)))
