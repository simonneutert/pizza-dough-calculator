(ns browser.store)

(defonce db (atom {:number 2
                   :grams-per-pizza 230
                   :yeast "fresh"
                   :style "neapolitan"
                   :style-selection ["sicilian" "new-york" "pan" "neapolitan"]
                   :yeast-selection ["fresh" "dry"]}))
