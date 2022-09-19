(ns pizza.helper)

(defn validate! [pizza]
  (or (and (contains? pizza :number)
           (contains? pizza :grams-per-pizza)
           (contains? pizza :yeast-type)
           (or (= (keyword (:yeast-type pizza)) :fresh)
               (= (keyword (:yeast-type pizza)) :dry)))
      (throw (js/Error. "Argument Error: needs number, grams-per-pizza and yeast-type (:fresh or :dry)"))))

(defn- round-first-decimal
  [n]
  (/ (js/Math.round (* 10 n)) 10))

(defn- fixed-float [n]
  (js/parseFloat (.toFixed n 2)))

(defn total-weight
  [pizza]
  (* (:number pizza) (:grams-per-pizza pizza)))

(defn oil-grams
  [pizza]
  (round-first-decimal (fixed-float (* (total-weight pizza) (:oil-percentage pizza)))))

(defn salt-grams
  [pizza]
  (->> pizza
       :salt-percentage
       (* (total-weight pizza))
       fixed-float
       round-first-decimal))

(defn yeast-grams
  [pizza]
  (let [yeast-type-k (keyword (:yeast-type pizza))]
    (->> (get-in pizza [:yeast yeast-type-k])
         (* (total-weight pizza))
         fixed-float
         round-first-decimal)))

(defn sugar-grams
  [pizza]
  (round-first-decimal (fixed-float (* (total-weight pizza) (:sugar-percentage pizza)))))

(defn- net-weight-water-flour
  [pizza]
  (let [salt-grams (salt-grams pizza)
        yeast-grams (yeast-grams pizza)
        oil-grams (oil-grams pizza)
        sugar-grams (sugar-grams pizza)]
    (- (total-weight pizza) salt-grams yeast-grams oil-grams sugar-grams)))

(defn water-grams [pizza weight-reference]
  (->> (/ (:water-share pizza) 100)
       (* weight-reference)
       js/Math.round))

(defn flour-grams-all-flours
  [pizza]
  (->> (/ (+ 100 (:water-share pizza)) 100)
       (/ (net-weight-water-flour pizza))
       js/Math.round))

(defn semolina-grams
  [pizza flour-grams-with-semolina]
  (js/Math.round (* (:semolina-percentage pizza) flour-grams-with-semolina)))

(defn yeast-by-type [pizza yeast-type]
  (let [yeast-type-k (keyword yeast-type)]
    (get-in pizza [:yeast yeast-type-k]
            (throw "Type of yeast not known!"))))
