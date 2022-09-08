(ns pizza.sicilian
  (:require [pizza.helper :refer [oil-grams
                                  salt-grams
                                  yeast-grams
                                  sugar-grams
                                  total-weight
                                  semolina-grams
                                  net-weight-water-flour
                                  flour-grams-with-semolina]]))

(def defaults
  {:number 2
   :grams-per-pizza 271
   :yeast-type :fresh
   :oil-percentage 0.02583
   :sugar-percentage 0.01107
   :semolina-percentage 0.22
   :salt-percentage 0.01107
   :water-share 66
   :yeast {:fresh 0.008118081
           :dry 0.00332103321}})

(defn sicilian
  [pizza]
  (let [new-pizza (merge defaults pizza)
        total-weight (total-weight new-pizza)
        salt-grams (salt-grams total-weight new-pizza)
        yeast-grams (yeast-grams new-pizza)
        oil-grams (oil-grams total-weight new-pizza)
        sugar-grams (sugar-grams total-weight new-pizza)
        net-weight-water-flour (net-weight-water-flour new-pizza)
        flour-grams-with-semolina (flour-grams-with-semolina new-pizza net-weight-water-flour)
        semolina-grams (semolina-grams new-pizza flour-grams-with-semolina)
        flour-grams (- flour-grams-with-semolina semolina-grams)
        water-grams (js/Math.round (* flour-grams-with-semolina (/ (:water-share new-pizza) 100)))]
    {:flour flour-grams
     :water water-grams
     :salt salt-grams
     :sugar sugar-grams
     :yeast {(keyword (:yeast-type new-pizza)) yeast-grams}
     :oil oil-grams
     :semolina semolina-grams
     :total-weight total-weight}))