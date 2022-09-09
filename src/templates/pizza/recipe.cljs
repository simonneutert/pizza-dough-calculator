(ns templates.pizza.recipe
  (:require [hiccups.runtime :as hiccupsrt])
  (:require-macros [hiccups.core :as hiccups :refer [html]]))

(defn pizza-details [pizza]
  (str (case (:number pizza)
         1 (str "Weight of dough ")
         (str "Doughs weigh "
              (:grams-per-pizza pizza) "g each and "))
       (:total-weight pizza) "g total"))


(hiccups/defhtml recipe-ingredients-template [pizza]
  (let [{:keys [flour water salt yeast semolina sugar yeast-type oil]} pizza]
    [:div
     [:p "Flour: " flour "g"]
     (if semolina [:p "Semolina: " semolina "g"] nil)
     [:p "Water: " water "g"]
     [:p "Salt: " salt "g"]
     (if sugar [:p "Sugar: " sugar "g"] nil)
     [:p "Sugar: " sugar "g"]
     [:p "Yeast (" yeast-type "): " yeast "g"]
     (if oil [:p "Oil: " oil "g"] nil)]))

(hiccups/defhtml recipe-template [pizza]
  [:div
   [:h2 (str (:number pizza) " " (clojure.string/capitalize (str (:type pizza))) " Style Pizza")]
   [:h4 (pizza-details pizza)]
   (recipe-ingredients-template pizza)])