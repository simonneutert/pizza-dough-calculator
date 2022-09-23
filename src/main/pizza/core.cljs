(ns pizza.core
  (:require [browser.dom :as dom]
            [browser.store :refer [db]]
            [pizza.recipes.pan :refer [pan]]
            [pizza.recipes.new-york :refer [new-york]]
            [pizza.recipes.sicilian :refer [sicilian]]
            [pizza.recipes.neapolitan :refer [neapolitan]]
            [templates.pizza.recipe :refer [recipe-template]]))

(defn bake
  [pizza-type number grams-per-pizza yeast-type]
  (case (keyword pizza-type)
    :neapolitan (neapolitan {:grams-per-pizza grams-per-pizza
                             :yeast-type yeast-type
                             :number number})
    :new-york (new-york {:grams-per-pizza grams-per-pizza
                         :yeast-type yeast-type
                         :number number})
    :sicilian (sicilian {:grams-per-pizza grams-per-pizza
                         :yeast-type yeast-type
                         :number number})
    :pan (pan {:grams-per-pizza grams-per-pizza
               :yeast-type yeast-type
               :number number})))

(defn click-handle []
  (let [{:keys [number grams-per-pizza style yeast]} @db]
    (->> (bake style number grams-per-pizza yeast)
         (recipe-template)
         (dom/innerhtml (dom/elem-by-id "pizza-recipe")))))

(defn ready
  [fn]
  (if (not= (.-readyState js/document) "loading")
    (fn)
    (.addEventListener js/document "DOMContentLoaded" fn)))

(defn- set-initial-state! []
  (set! (.-value (dom/elem-by-id "style")) (:style @db))
  (set! (.-value (dom/elem-by-id "yeast")) (:yeast @db))
  (set! (.-value (dom/elem-by-id "number")) (:number @db))
  (set! (.-value (dom/elem-by-id "grams")) (:grams-per-pizza @db)))

(defn- add-watchers! []
  (dom/watch-select-elem-by-id-update-db! "change" "style" :style dom/dom-element-value-from-select-by-id)
  (dom/watch-select-elem-by-id-update-db! "change" "yeast" :yeast dom/dom-element-value-from-select-by-id)

  (dom/watch-elem-by-id-update-db! "change" "number" :number dom/dom-element-int-value-by-id)
  (dom/watch-elem-by-id-update-db! "blur" "number" :number dom/dom-element-int-value-by-id)
  (dom/watch-elem-by-id-update-db! "keyup" "number" :number dom/dom-element-int-value-by-id)

  (dom/watch-elem-by-id-update-db! "change" "grams" :grams-per-pizza dom/dom-element-int-value-by-id)
  (dom/watch-elem-by-id-update-db! "blur" "grams" :grams-per-pizza dom/dom-element-int-value-by-id)
  (dom/watch-elem-by-id-update-db! "keyup" "grams" :grams-per-pizza dom/dom-element-int-value-by-id))

(defn- main []
  (set-initial-state!)
  (add-watchers!)
  (click-handle))

(defn init []
  (add-watch db :trigger click-handle)
  (ready main))
