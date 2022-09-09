(ns browser.store)

(defonce db (atom {:number 2
                   :grams-per-pizza 230
                   :yeast "fresh"
                   :style "sicilian"
                   :style-selection ["sicilian" "new-york" "pan" "neapolitan"]
                   :yeast-selection ["fresh" "dry"]}))
