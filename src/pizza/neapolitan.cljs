(ns pizza.neapolitan
  (:require [pizza.helper :refer [total-weight
                                  yeast-grams
                                  salt-grams
                                  net-weight-water-flour]]))

(def defaults
  {:type "neapolitan"
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
        net-weight-water-flour (net-weight-water-flour new-pizza)
        flour-grams (js/Math.round (/ net-weight-water-flour (/ (+ 100 (:water-share new-pizza)) 100)))
        water-grams (js/Math.round (* flour-grams (/ (:water-share new-pizza) 100)))]
    (merge new-pizza
           {:flour flour-grams
            :water water-grams
            :salt salt-grams
            :yeast yeast-grams
            :total-weight total-weight})))