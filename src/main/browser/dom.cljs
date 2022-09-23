(ns browser.dom
  (:require [browser.store :refer [db]]))

(defn update-db! [k v]
  (swap! db assoc (keyword k) v))
(defn elem-by-id [id]
  (.getElementById js/document id))

(defn innerhtml [elem content]
  (-> elem
      (.-innerHTML)
      (set! content)))

(defn dom-element-int-value-by-id
  [dom-id]
  (int (.-value (elem-by-id dom-id))))

(defn dom-element-value-from-select-by-id
  [dom-id]
  (.-value (first (.-selectedOptions (elem-by-id dom-id)))))

(defn watch-elem-by-id-update-db!
  [event dom-id db-key callback]
  (.addEventListener (elem-by-id dom-id)
                     event #(update-db! db-key (callback dom-id))))

(defn watch-select-elem-by-id-update-db!
  [event dom-id  db-key callback]
  (.addEventListener (elem-by-id dom-id)
                     event #(update-db! db-key (callback dom-id))))
