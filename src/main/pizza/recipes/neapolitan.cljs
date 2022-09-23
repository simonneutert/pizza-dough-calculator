(ns pizza.recipes.neapolitan
  (:require [pizza.helper :refer [salt-grams
                                  yeast-grams
                                  water-grams
                                  total-weight
                                  flour-grams-all-flours]]))

(def defaults
  {:type "neapolitan"
   :name "Neapolitan"
   :number 4
   :grams-per-pizza 230
   :yeast-type "fresh"
   :salt-percentage 0.0178261
   :water-share 65
   :yeast {:fresh 0.00119565217391304
           :dry 0.00043478260869565}})

(defn neapolitan
  "Napolitanean style pizza"
  [pizza]
  (let [new-pizza (merge defaults pizza)
        total-weight (total-weight new-pizza)
        salt-grams (salt-grams new-pizza)
        yeast-grams (yeast-grams new-pizza)
        flour-grams (flour-grams-all-flours new-pizza)
        water-grams (water-grams new-pizza flour-grams)]
    (merge new-pizza
           {:salt salt-grams
            :flour flour-grams
            :water water-grams
            :yeast yeast-grams
            :total-weight total-weight})))
