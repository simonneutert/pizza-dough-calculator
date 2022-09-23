(ns pizza.test-runner
  (:require
   [cljs.test :refer-macros [run-tests]]
   [pizza.pizza-test]))

(run-tests
 'pizza.pizza-test)
