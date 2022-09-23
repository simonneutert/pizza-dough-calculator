# Hello, (hungry) Pizza-Dough-Developer!

this is a very basic [shadow-cljs](https://github.com/thheller/shadow-cljs) project. The linked Readme/Documentation is plentyful to help you get going.

## VS Code + Calva

This is how I do it with Node 16.17.0 and Clojure installed in VS Code:

1. from the command palette (Shift+CMD+P) `Start a REPL and Connect (aka Jack-In)`
2. check ":frontend" + ":test" when prompted
3. ☕️
4. visit [localhost:8080](localhost:8080)
5. develop with the REPL

## Autoformat Code

#### check first

```bash
$ clojure -Sdeps '{:deps {cljfmt {:mvn/version "0.9.0"}}}' \
  -M -m cljfmt.main check
```

#### fix code

```bash
$ clojure -Sdeps '{:deps {cljfmt {:mvn/version "0.9.0"}}}' \
  -M -m cljfmt.main fix
```

there is a script in `bin/` 🙃

## Contributions

PRs are welcome!

Please note, I am still very new in the Clojure-verse, so there might be something very very weird to look at.

At the time being there is no automation, so please, chip in your knowledge here!

**And/Or** make sure you format your code properly and all the tests pass 🚦