(ns pizza.new-york)

(defn yeasty [yeast-type]
  (case yeast-type
    :fresh 0.0045
    :dry 0.0015))

(defn round-first-decimal
  [n]
  (/ (Math.round (* 10 n)) 10))

(defn new-york
  [number grams-per-pizza yeast water-share]

  (let [total-weight (* number grams-per-pizza)
        salt-percentage 0.0118478
        salt-grams (round-first-decimal (js/parseFloat (.toFixed (* total-weight salt-percentage) 2)))
        yeast-grams (round-first-decimal (js/parseFloat (.toFixed (* total-weight (yeasty yeast)) 2)))
        oil-grams (round-first-decimal (js/parseFloat (.toFixed (* total-weight 0.01783) 2)))
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



(comment 
  (new-york 4 230 :dry 63)
  (= (new-york 4 230 :dry 63)
     {:total-weight 920
      :flour 545
      :water 343
      :salt 10.9
      :oil 16.4
      :sugar 2.2
      :yeast {:dry 1.4}})
  
  
  ;;
  )