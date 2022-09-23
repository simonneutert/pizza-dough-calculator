(ns pizza.recipes.pan
  (:require [pizza.helper :refer [validate!
                                  oil-grams
                                  salt-grams
                                  yeast-grams
                                  sugar-grams
                                  water-grams
                                  total-weight
                                  flour-grams-all-flours]]))

(def defaults
  {:type "pan"
   :name "Pan"
   :number 3
   :grams-per-pizza 230
   :yeast-type "fresh"
   :water-share 65
   :salt-percentage 0.011682893
   :sugar-percentage 0.011682893
   :oil-percentage 0.0139082058
   :yeast {:fresh 0.002364394993045897
           :dry 0.00097357441}})

(defn pan
  [pizza]
  (validate! pizza)
  (let [new-pizza (merge defaults pizza)
        total-weight (total-weight new-pizza)
        salt-grams (salt-grams new-pizza)
        yeast-grams (yeast-grams new-pizza)
        oil-grams (oil-grams new-pizza)
        sugar-grams (sugar-grams new-pizza)
        flour-grams (flour-grams-all-flours new-pizza)
        water-grams (water-grams new-pizza flour-grams)]
    (merge new-pizza
           {:oil oil-grams
            :salt salt-grams
            :flour flour-grams
            :water water-grams
            :sugar sugar-grams
            :yeast yeast-grams
            :total-weight total-weight})))
