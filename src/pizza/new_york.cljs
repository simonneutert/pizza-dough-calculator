(ns pizza.new-york
  (:require [pizza.helper :refer [validate!
                                  oil-grams
                                  salt-grams
                                  yeast-grams
                                  sugar-grams
                                  total-weight
                                  net-weight-water-flour]]))

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
        net-weight-water-flour (net-weight-water-flour new-pizza)
        flour-grams (js/Math.round (/ net-weight-water-flour (/ (+ 100 (:water-share new-pizza)) 100)))
        water-grams (js/Math.round (* flour-grams (/ (:water-share new-pizza) 100)))]
    (merge new-pizza
           {:flour flour-grams
            :water water-grams
            :salt salt-grams
            :sugar sugar-grams
            :yeast yeast-grams
            :oil oil-grams
            :total-weight total-weight})))