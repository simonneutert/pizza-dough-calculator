(ns pizza.new-york
  (:require [pizza.helper :refer [round-first-decimal]]))

(defn yeast-by-type [yeast-type]
  (case yeast-type
    :fresh 0.0045
    :dry 0.0015))


(defn new-york
  [number grams-per-pizza yeast]
  (let [water-share 63
        total-weight (* number grams-per-pizza)
        salt-percentage 0.0118478
        salt-grams (round-first-decimal (js/parseFloat (.toFixed (* total-weight salt-percentage) 2)))
        yeast-grams (round-first-decimal (js/parseFloat (.toFixed (* total-weight (yeast-by-type yeast)) 2)))
        oil-grams (round-first-decimal (js/parseFloat (.toFixed (* total-weight 0.0177173913) 2)))
        sugar-grams (round-first-decimal (js/parseFloat (.toFixed (* total-weight 0.00239130) 2)))
        net-weight-water-flour (- total-weight salt-grams yeast-grams sugar-grams oil-grams)
        flour-grams (js/Math.round (/ net-weight-water-flour (/ (+ 100 water-share) 100)))
        water-grams (js/Math.round (* flour-grams (/ water-share 100)))]

    {:total-weight total-weight
     :water water-grams
     :flour flour-grams
     :yeast {yeast yeast-grams}
     :salt salt-grams
     :oil oil-grams
     :sugar sugar-grams}))