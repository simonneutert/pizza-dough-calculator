(ns pizza.pizza-test
  (:require [cljs.test :refer-macros [deftest is testing run-tests]]
            [pizza.core :refer [bake]]))

(deftest neapolitan-dry-test
  (testing "napolitan with fresh yeast"
    (is (= (bake :neapolitan 4 230 :dry)
           {:total-weight 920
            :flour 547
            :water 356
            :salt 16.4
            :yeast {:dry 0.4}})))
  (testing "napolitan with fresh yeast"
    (is (= (bake :neapolitan 4 230 :fresh)
           {:total-weight 920
            :flour 547
            :water 356
            :salt 16.4
            :yeast {:fresh 1.1}}))))

(deftest new-york-test
  (testing "new york style with fresh yeast"
    (is (= (bake :new-york 4 230 :fresh)
           {:total-weight 920
            :flour 544
            :water 343
            :salt 10.9
            :oil 16.3
            :sugar 2.2
            :yeast {:fresh 4.1}})))
  (testing "new york style with dry yeast"
    (is (= (bake :new-york 4 230 :dry)
           {:total-weight 920
            :flour 546
            :water 344
            :salt 10.9
            :oil 16.3
            :sugar 2.2
            :yeast {:dry 1.4}}))))

(deftest sicilian-test
  (testing "sicilian dry test"
    (is (= (bake :sicilian 1 271 :dry)
           {:flour 121
            :water 102
            :salt 3
            :sugar 3
            :yeast {:dry 0.9}
            :oil 7
            :semolina 34
            :total-weight 271})))
  (testing "sicilian fresh test"
    (is (= (bake :sicilian 1 271 :fresh)
           {:flour 120
            :water 102
            :salt 3
            :sugar 3
            :yeast {:fresh 2.2}
            :oil 7
            :semolina 34
            :total-weight 271}))))