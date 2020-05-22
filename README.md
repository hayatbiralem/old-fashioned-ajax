# Old Fashioned Ajax
Lightweight ajax get/post requests for old browsers.

## Installation

With npm

```bash
npm i old-fashioned-ajax -S
```

You can download the latest version or checkout all the releases [here](https://github.com/hayatbiralem/old-fashioned-ajax/releases).

## Usage

### Browser

You can import this plugin into your project as follows:

```html
<script src="path/to/old-fashioned-ajax.js"></script>
```

.. and you're ready to go.

### Webpack

If you want to import the plugin with your webpack build you can do it by:

```js
import "old-fashioned-ajax";
```

You should look at `sass-loader` implementation on [webpack documentation](https://webpack.js.org/loaders/sass-loader/) for demo.

## Examples

### GET

```js
var promise_ish = oldFashionedAjax('https://jsonplaceholder.typicode.com/todos/1');
  
// ...
  
promise_ish({
  success: function (res) {
    console.log(res);
  },
  error: function (res) {
    console.error(res);
  },
  always: function () {
    console.info('Always!');
  }
});
```

See the example on [CodePen](https://soon.io)

### Promise-ish?

oldFashionedAjax returns promise like function so you can collect it and you can use it when you need it.

This is because sometimes our logic requires that to collect a promise-ish and use it later.

But if you need immediate action you can do something like this:

```js
oldFashionedAjax(url)(options);

// or

oldFashionedAjax(url, options);
```

These will act immediately.

### POST

```js
var promise_ish = oldFashionedAjax('https://jsonplaceholder.typicode.com/todos/1');
  
// ...
  
promise_ish({
  type: "post",
  data: { foo: bar },
  success: function (res) {
    console.log(res);
  },
  error: function (res) {
    console.error(res);
  },
  always: function () {
    console.info('Always!');
  }
});
```

See the example on [CodePen](https://soon.io)

### Do you wanna change that long name?

oldFashionedAjax is a bit long and ugly but you can change in you project like this:

```js
var ajax = oldFashionedAjax;
ajax(url)(options);
```

## Development

Clone this repo, go to the project directory and install dependencies with

```bash
npm install
```

and rebuild dist folder with

```bash
npm run dev
npm run prod
npm run build # alias of prod
```

## TODO

- [x] Add to the npm directory.

## Contributors

- [Ömür Yanıkoğlu @hayatbiralem](https://twitter.com/hayatbiralem)

## Contributing

In lieu of a formal style guide, take care to maintain the existing coding style.
