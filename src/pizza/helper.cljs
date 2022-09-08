(ns pizza.helper)

(defn- round-first-decimal
  [n]
  (/ (Math.round (* 10 n)) 10))

(defn- fixed-float [n]
  (js/parseFloat (.toFixed n 2)))

(defn total-weight
  [pizza]
  (* (:number pizza) (:grams-per-pizza pizza)))

(defn oil-grams
  [total-weight pizza]
  (round-first-decimal (fixed-float (* total-weight (:oil-percentage pizza)))))

(defn salt-grams
  [total-weight pizza]
  (->> pizza
       :salt-percentage
       (* total-weight)
       fixed-float
       round-first-decimal))

(defn yeast-grams
  [pizza]
  (->> (get-in pizza [:yeast :yeast-type])
       (* (total-weight pizza))
       fixed-float
       round-first-decimal))

(defn sugar-grams
  [total-weight pizza]
  (round-first-decimal (fixed-float (* total-weight (:sugar-percentage pizza)))))

(defn net-weight-water-flour
  [pizza]
  (let [salt-grams (salt-grams total-weight pizza)
        yeast-grams (yeast-grams pizza)
        oil-grams (oil-grams total-weight pizza)
        sugar-grams (sugar-grams total-weight pizza)]
    (- (total-weight pizza) salt-grams yeast-grams oil-grams sugar-grams)))

(defn flour-grams-with-semolina
  [pizza net-weight-water-flour]
  (->> (/ (+ 100 (:water-share pizza)) 100)
       (/ net-weight-water-flour)
       js/Math.round))

(defn semolina-grams
  [pizza flour-grams-with-semolina]
  (js/Math.round (* (:semolina-percentage pizza) flour-grams-with-semolina)))

(defn yeast-by-type [pizza yeast-type]
  (let [yeast-type-k (keyword yeast-type)]
    (get-in pizza [:yeast yeast-type-k]
            (throw "Type of yeast not known!"))))
