(ns pizza.recipes.new-york
  (:require [pizza.helper :refer [validate!
                                  oil-grams
                                  salt-grams
                                  yeast-grams
                                  water-grams
                                  sugar-grams
                                  total-weight
                                  flour-grams-all-flours]]))

(def defaults
  {:type "new-york"
   :number 4
   :grams-per-pizza 230
   :water-share 63
   :salt-percentage 0.0118478
   :sugar-percentage 0.00239130
   :oil-percentage 0.0177173913
   :yeast {:fresh 0.0045
           :dry 0.0015}})


(defn new-york
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