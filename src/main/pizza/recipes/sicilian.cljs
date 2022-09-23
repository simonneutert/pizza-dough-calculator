(ns pizza.recipes.sicilian
  (:require [pizza.helper :refer [validate!
                                  oil-grams
                                  salt-grams
                                  yeast-grams
                                  sugar-grams
                                  water-grams
                                  total-weight
                                  semolina-grams
                                  flour-grams-all-flours]]))

(def defaults
  {:type "sicilian"
   :name "Sicilian"
   :number 1
   :grams-per-pizza 271
   :yeast-type "fresh"
   :oil-percentage 0.02583
   :sugar-percentage 0.01107
   :semolina-percentage 0.22
   :salt-percentage 0.01107
   :water-share 66
   :yeast {:fresh 0.008118081
           :dry 0.00332103321}})

(defn sicilian
  [pizza]
  (validate! pizza)
  (let [new-pizza (merge defaults pizza)
        total-weight (total-weight new-pizza)
        salt-grams (salt-grams new-pizza)
        yeast-grams (yeast-grams new-pizza)
        oil-grams (oil-grams new-pizza)
        sugar-grams (sugar-grams new-pizza)
        flour-grams-with-semolina (flour-grams-all-flours new-pizza)
        semolina-grams (semolina-grams new-pizza flour-grams-with-semolina)
        flour-grams (- flour-grams-with-semolina semolina-grams)
        water-grams (water-grams new-pizza flour-grams-with-semolina)]
    (merge new-pizza
           {:oil oil-grams
            :salt salt-grams
            :flour flour-grams
            :water water-grams
            :sugar sugar-grams
            :yeast yeast-grams
            :semolina semolina-grams
            :total-weight total-weight})))
