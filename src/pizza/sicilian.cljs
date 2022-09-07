(ns pizza.sicilian)

(defn yeasty [yeast-type]
  (case yeast-type
    :fresh 0.0045
    :dry 0.0015))

(defn sicilian
  [number grams-per-pizza yeast water-share]

  (let [total-weight (* number grams-per-pizza)
        salt-percentage 0.0119
        salt-grams (js/parseFloat (.toFixed (* total-weight salt-percentage) 2))
        yeast-grams (js/parseFloat (.toFixed (* total-weight (yeasty yeast)) 2))
        oil-grams (js/parseFloat (.toFixed (* total-weight 0.0177) 2))
        sugar-grams (js/parseFloat (.toFixed (* total-weight 0.0024) 2))
        net-weight-water-flour (- total-weight salt-grams yeast-grams)
        flour-grams (js/Math.round (/ net-weight-water-flour (/ (+ 100 water-share) 100)))
        water-grams (js/Math.round (* flour-grams (/ water-share 100)))]
    
    {:total-weight total-weight
     :water water-grams
     :flour flour-grams
     :yeast {yeast yeast-grams}
     :salt salt-grams}))



(comment 
  
  (= (sicilian 4 230 :fresh 63)
     {:total-weight 920
      :flour 542
      :water 352
      :salt 16.4
      :yeast {:fresh 1.1}})
  
  
  ;;
  )