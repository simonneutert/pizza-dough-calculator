(ns pizza.helper)

(defn round-first-decimal
  [n]
  (/ (Math.round (* 10 n)) 10))

(defn fixed-float [n]
  (js/parseFloat (.toFixed n 2)))