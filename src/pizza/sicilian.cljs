(ns pizza.sicilian
  (:require [pizza.helper :refer [round-first-decimal]]
            [cljs.pprint :refer [pprint]]))

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
        salt-grams (round-first-decimal (js/parseFloat (.toFixed (* total-weight salt-percentage) 2)))
        yeast-grams (round-first-decimal (js/parseFloat (.toFixed (* total-weight (yeast-by-type yeast)) 2)))
        oil-grams (round-first-decimal (js/parseFloat (.toFixed (* total-weight 0.02583) 2)))
        sugar-grams (round-first-decimal (js/parseFloat (.toFixed (* total-weight 0.01107) 2)))
        net-weight-water-flour (- total-weight salt-grams yeast-grams oil-grams sugar-grams)
        flour-grams-with-semolina (js/Math.round (/ net-weight-water-flour (/ (+ 100 water-share) 100)))
        semolina-grams (Math.round (* semolina-percentage flour-grams-with-semolina))
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