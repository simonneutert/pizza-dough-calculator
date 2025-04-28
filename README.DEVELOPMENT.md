# Hello, (hungry) Pizza-Dough-Developer!

this is a very basic [shadow-cljs](https://github.com/thheller/shadow-cljs) project. The linked Readme/Documentation is plentyful to help you get going.

## VS Code + Calva

Please see `.tool-versions` for languages you will need to setup.

This is how I do it with *Node 22.13.0* and Clojure installed in VS Code:

1. from the command palette (Shift+CMD+P) `Start a REPL and Connect (aka Jack-In)`
2. choose `shadow-cljs`
3. check ":frontend" + ":test" when prompted
4. ☕️ wait for the REPL to start
5. Select which build to connect to, choose `:frontend`
6. visit [localhost:8080](localhost:8080)
7. develop with the REPL

After this, open the test file, hit `CMD+S` or `CTRL+S` to save the file and the tests will run automatically. The result will be printed to your REPL.

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
