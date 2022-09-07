(ns pizza.neapolitan)

(defn yeast-by-type [yeast-type]
  (case yeast-type
    :fresh 0.00119565217391304
    :dry 0.00043478260869565))

(defn neapolitan
  "Napolitanean style pizza"
  [number grams-per-pizza yeast]
  (let [water-share 65
        total-weight (* number grams-per-pizza)
        salt-percentage 0.0178261
        salt-grams (js/parseFloat (.toFixed (* total-weight salt-percentage) 2))
        yeast-grams (js/parseFloat (.toFixed (* total-weight (yeast-by-type yeast)) 2))
        net-weight-water-flour (- total-weight salt-grams yeast-grams)
        flour-grams (js/Math.round (/ net-weight-water-flour (/ (+ 100 water-share) 100)))
        water-grams (js/Math.round (* flour-grams (/ water-share 100)))]

    {:total-weight total-weight
     :water water-grams
     :flour flour-grams
     :yeast {yeast yeast-grams}
     :salt salt-grams}))