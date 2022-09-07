(ns test.pizza.pizza-test
  (:require [cljs.test :refer-macros [deftest is testing run-tests]]
            [pizza.core :as pizza]))

(deftest test-numbers
  (is (= 1 2)))

(deftest test-neapolitan
  (is (= (pizza.neapolitan/neapolitan 4 230 :dry)
         {:total-weight 920
          :flour 546
          :water 344
          :salt 10.9
          :oil 16.3
          :sugar 2.2
          :yeast {:dry 1.4}})))

#_(comment
    (new-york 4 230 :dry)


    (new-york 4 230 :fresh)
    (= (new-york 4 230 :fresh)
       {:total-weight 920
        :flour 544
        :water 343
        :salt 10.9
        :oil 16.3
        :sugar 2.2
        :yeast {:fresh 4.1}})


    (neapolitan 4 230 :dry)
    (= (neapolitan 4 230 :dry)
       {:total-weight 920
        :flour 547
        :water 356
        :salt 16.4
        :yeast {:dry 0.4}})

    (neapolitan 4 230 :fresh)
    (= (neapolitan 4 230 :fresh)
       {:total-weight 920
        :flour 547
        :water 356
        :salt 16.4
        :yeast {:fresh 1.1}})

    (sicilian 1 271 :fresh)
    (= (sicilian 1 271 :fresh)
       {:flour 120
        :water 102
        :salt 3
        :sugar 3
        :yeast {:fresh 2.2}
        :oil 7
        :semolina 34
        :total-weight 271})

    (sicilian 1 271 :dry)
    (= (sicilian 1 271 :dry)
       {:flour 121
        :water 102
        :salt 3
        :sugar 3
        :yeast {:dry 0.9}
        :oil 7
        :semolina 34
        :total-weight 271})
  ;;
    )