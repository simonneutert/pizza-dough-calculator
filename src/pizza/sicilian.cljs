(ns pizza.sicilian
  (:require [pizza.helper :refer [round-first-decimal fixed-float]]))

(defn yeast-by-type [yeast-type]
  (case yeast-type
    :fresh 0.008118081
    :dry 0.00332103321))

(defn sicilian
  [number grams-per-pizza yeast]
  (let [total-weight (* number grams-per-pizza)
        water-share 66
        salt-percentage 0.01107
        semolina-percentage 0.22
        oil-percentage 0.02583
        sugar-percentage 0.01107
        salt-grams (round-first-decimal (fixed-float (* total-weight salt-percentage)))
        yeast-grams (round-first-decimal (fixed-float (* total-weight (yeast-by-type yeast))))
        oil-grams (round-first-decimal (fixed-float (* total-weight oil-percentage)))
        sugar-grams (round-first-decimal (fixed-float (* total-weight sugar-percentage)))
        net-weight-water-flour (- total-weight salt-grams yeast-grams oil-grams sugar-grams)
        flour-grams-with-semolina (js/Math.round (/ net-weight-water-flour (/ (+ 100 water-share) 100)))
        semolina-grams (js/Math.round (* semolina-percentage flour-grams-with-semolina))
        flour-grams (- flour-grams-with-semolina semolina-grams)
        water-grams (js/Math.round (* flour-grams-with-semolina (/ water-share 100)))]
    {:flour flour-grams
     :water water-grams
     :salt salt-grams
     :sugar sugar-grams
     :yeast {yeast yeast-grams}
     :oil oil-grams
     :semolina semolina-grams
     :total-weight total-weight}))