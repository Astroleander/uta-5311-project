# how to run
1. install node v10+ (v8 maybe ok but i didn't try)
2. clone project
3. execute `yarn install` at `/`
4. execute `yarn run start`, the project run at `localhost:9090`

# structure
```
src
 | - code      => algos
 | - container => react app
 | - util
 |    | - route => path parser
 |    | - utils
 |
 | - index.html => webpack html template
 | - index.tsx  => react dom loader
```

# notice
+ Javascript/TypeScript doesn't has multiple threads, overwhelming input scale will lead a crash.
+ Recommend input scale `n` is about `n < 50000` in asc mode, for des and random mode `n < 250000` is ok.
+ If you only plan to compare O(n) algos like qsort, the scale can be more bigger.