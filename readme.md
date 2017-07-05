# Getting Started
## Installation
```sh
npm install
```

## Development
```sh
npm run dev
```

## Production Mode
```sh
webpack --config ./webpack/prod.js && npm start
```

# Developing
## Project Layout
```
- server.js
- /webpack
    - base.js
    - dev.js
    - prod.js
- /src
    - app.js | project entrypoint
    - router.js
    - /styles
        - styles.scss | root for all sass @imports
    - /utils
    - /views
        - <page-name>.dust | page entry points
        - /partials
            - index.js | import manifest to register partials with webpack
            - <partial-name>.dust
```

## Developer Notes
- to add a page
  1. Add a new root template in ./src/views
  2. Register the route in ./src/router.js
- to add a new partial
  1. Add a new partial in ./src/views/partials
  2. Import the partial file into ./src/views/partials/index.js
  3. Require it in any dust template by the file name
- to add styles
  1. Add a file in the appropriate place under ./styles
  2. Make sure the file is required somewhere in the dependency chain from ./src/styles.scss
- add static assets to ./static and reference them by path
