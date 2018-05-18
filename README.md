# React Boilerplate

Opinionated Minimal React Boilerplate that I use in my personal projects

## Features

* React v16 w HMR support
* Redux v4 w Redux thunk
* React Router v4
* SCSS Preprocessor
* Native fetch api polyfilled with the tiny unfetch polyfill (_**Notice:** this pollyfil doesn't cover all use cases check their [repo](https://github.com/developit/unfetch) if you have complex use case_)
* Jest & Enzmy for testing
* Precommit Hook that format the code on commit
* [Ant Design](https://ant.design) UI Library, you can replace it with your library of choice
* Theme Reset & Base theme based on 8 points grid system

### Run the dev server

1.  `npm install` or `yarn`
2.  `npm run dev` or `yarn dev`

Once the server starts, Browse to `localhost:3000` and start developing!

The app uses Hot module replecment so it updates without having to reload the browser.

### Build the app

1.  `npm run build` or `yarn build`

This will create a "public" directory in the root of the project.
It will contains the index.html along with the minified and gzipped assets, ready for production.
