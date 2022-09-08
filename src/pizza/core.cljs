(ns pizza.core
  (:require [pizza.neapolitan :refer [neapolitan]]
            [pizza.new-york :refer [new-york]]
            [pizza.sicilian :refer [sicilian]]
            [clojure.string :as string]))

(defn bake
  [pizza-type number grams-per-pizza yeast-type]
  (case (keyword pizza-type)
    :neapolitan (neapolitan {:number number
                             :grams-per-pizza grams-per-pizza
                             :yeast-type yeast-type})
    :new-york (new-york {:number number
                         :grams-per-pizza grams-per-pizza
                         :yeast-type yeast-type})
    :sicilian (sicilian {:number number
                         :grams-per-pizza grams-per-pizza
                         :yeast-type yeast-type})))
(defn print-instructions
  [pizza]
  (print (clojure.string/capitalize (str (:type pizza))) "Pizza(s)" (:number pizza))
  (print "Total weight" (:total-weight pizza) "(grams)")
  (print "Flour" (:flour pizza) "(grams)")
  (print "Water" (:water pizza) "(grams)")
  (print "Salt" (:salt pizza) "(grams)")
  (print "Yeast (" (:yeast-type pizza) ")" (:yeast pizza) "(grams)")
  (if (:sugar pizza) (print "Sugar" (:sugar pizza) "(grams)"))
  (if (:oil pizza) (print "Oil" (:oil pizza) "(grams)"))
  (if (:semolina pizza) (print "Semolina" (:semolina pizza) "(grams)"))
  pizza)

(defn stringify [pizza]
  (str ""
       (:number pizza) " "
       (clojure.string/capitalize (str (:type pizza)))
       " Pizza(s) with " (:grams-per-pizza pizza) "g each and "
       (:total-weight pizza) "g total."
       "\n"
       "Ingredients:\n"
       "Flour " (:flour pizza) "g\n"
       (if (:semolina pizza) (str "Semolina" (:semolina pizza) "g\n"))
       "Water " (:water pizza) "g\n"
       "Salt " (:salt pizza) "g\n"
       (if (:sugar pizza) (str "Sugar" (:sugar pizza) "g\n"))
       "Yeast (" (:yeast-type pizza) ")" " " (:yeast pizza) "g\n"
       (if (:oil pizza) (str "Oil" (:oil pizza) "g\n"))
       ;;
       ))


(comment
  (stringify (bake "sicilian" 1 271 "fresh")))