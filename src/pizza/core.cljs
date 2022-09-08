(ns pizza.core
  (:require [pizza.neapolitan :refer [neapolitan]]
            [pizza.new-york :refer [new-york]]
            [pizza.sicilian :refer [sicilian]]))

(defn bake
  [pizza-type number grams-per-pizza yeast-type]
  (case (keyword pizza-type)
    :neapolitan (neapolitan number grams-per-pizza yeast-type)
    :new-york (new-york number grams-per-pizza yeast-type)
    :sicilian (sicilian {:number 4
                         :grams-per-pizza grams-per-pizza
                         :yeast-type yeast-type})))