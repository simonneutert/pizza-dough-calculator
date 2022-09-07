(ns pizza.helper)

(defn round-first-decimal
  [n]
  (/ (Math.round (* 10 n)) 10))
