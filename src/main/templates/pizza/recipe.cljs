(ns templates.pizza.recipe
  (:require [clojure.string :as s]
            [hiccups.runtime :as hiccupsrt])
  (:require-macros [hiccups.core :as hiccups :refer [html defhtml]]))

(defn pizza-details [pizza]
  (str (case (:number pizza)
         1 (str "Weight of dough ")
         (str "Doughs weigh "
              (:grams-per-pizza pizza) "g each and "))
       (:total-weight pizza) "g total"))

(defhtml recipe-ingredients-template [pizza]
  (let [{:keys [flour water salt yeast semolina sugar yeast-type oil]} pizza]
    [:div
     [:p "Flour: " flour "g"]
     (if semolina [:p "Semolina: " semolina "g"] nil)
     [:p "Water: " water "g"]
     [:p "Salt: " salt "g"]
     [:p "Yeast (" yeast-type "): " yeast "g"]
     (if sugar [:p "Sugar: " sugar "g"] nil)
     (if oil [:p "Oil: " oil "g"] nil)]))

(defhtml recipe-template [pizza]
  [:div
   [:h2 (str (:number pizza) " " (str (:name pizza)) " Style Pizza")]
   [:h4 (pizza-details pizza)]
   (recipe-ingredients-template pizza)])
