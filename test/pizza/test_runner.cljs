(ns pizza.test-runner
  (:require
   [cljs.test :refer-macros [run-tests]]
   [pizza.pizza-test]))

(enable-console-print!)

(run-tests 'test.pizza.pizza-test)