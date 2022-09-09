(ns pizza.core
  (:require [browser.dom :as dom]
            [browser.store :refer [db]]
            [clojure.string :as string]
            [pizza.recipes.pan :refer [pan]]
            [pizza.recipes.new-york :refer [new-york]]
            [pizza.recipes.sicilian :refer [sicilian]]
            [pizza.recipes.neapolitan :refer [neapolitan]]
            [hiccups.runtime :as hiccupsrt]
            [templates.pizza.recipe :refer [recipe-template]])
  (:require-macros [hiccups.core :as hiccups :refer [html]]))

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

(defn print-instructions
  [pizza]
  (print (clojure.string/capitalize (str (:type pizza))) "Pizza(s)" (:number pizza))
  (print "Total weight" (:total-weight pizza) "(grams)")
  (print "Flour" (:flour pizza) "(grams)")
  (print "Water" (:water pizza) "(grams)")
  (print "Salt" (:salt pizza) "(grams)")
  (print "Yeast (" (:yeast-type pizza) ")" (:yeast pizza) "(grams)")
  (if (:sugar pizza) (print "Sugar" (:sugar pizza) "(grams)") nil)
  (if (:oil pizza) (print "Oil" (:oil pizza) "(grams)") nil)
  (if (:semolina pizza) (print "Semolina" (:semolina pizza) "(grams)") nil)
  pizza)

(set! (.-innerHTML (dom/elem-by-id "pizza-recipe")) (recipe-template (bake "new-york" 2 230 "fresh")))

(defn click-handle []
  (let [{:keys [number grams-per-pizza style yeast]} @db]
    (->> (recipe-template (bake style number grams-per-pizza yeast))
         (dom/innerhtml (dom/elem-by-id "pizza-recipe")))))

(defn update-db! [k v]
  (swap! db assoc (keyword k) v))

(defn ready
  [fn]
  (if (not= (.-readyState js/document) "loading")
    (fn)
    (.addEventListener js/document "DOMContentLoaded" fn)))

(defn- main []
  (.addEventListener (dom/elem-by-id "button")
                     "click" click-handle)
  (set! (.-value (dom/elem-by-id "number")) (:number @db))
  (set! (.-value (dom/elem-by-id "grams")) (:grams-per-pizza @db))
  (.addEventListener (dom/elem-by-id "style")
                     "change" #(update-db! :style (.-value (first (.-selectedOptions (dom/elem-by-id "style"))))))
  (.addEventListener (dom/elem-by-id "number")
                     "change" #(update-db! :number (int (.-value (dom/elem-by-id "number")))))
  (.addEventListener (dom/elem-by-id "grams")
                     "change" #(update-db! :grams-per-pizza (int (.-value (dom/elem-by-id "grams")))))
  (.addEventListener (dom/elem-by-id "yeast")
                     "change" #(update-db! :yeast (.-value (first (.-selectedOptions (dom/elem-by-id "yeast")))))))

(add-watch db :trigger click-handle)
(ready main)