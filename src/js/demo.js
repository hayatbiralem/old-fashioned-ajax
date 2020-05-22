import '../scss/demo.scss'
import ready from './utils/ready';
ready(function () {

  let result = document.getElementById('result');
  let pending = function () {
    result.innerHTML = 'Pending...';
  };

// GET
document.getElementById('get').addEventListener('click', function () {
  pending();

  let promise_ish = oldFashionedAjax('https://jsonplaceholder.typicode.com/todos/1');

  promise_ish({
    success: function (res) {
      console.log(res);
      result.innerHTML = '<pre>' + JSON.stringify(res, null, 2) + '</pre>';
    },
    error: function (res) {
      console.error(res);
      result.innerHTML = '<pre>Error! Look the console for details.</pre>';
    },
    always: function () {
      console.info('Always!');
      let pre = document.createElement('pre');
      pre.innerHTML = 'Always!';
      result.append(pre);
    }
  });
});

  // POST
  document.getElementById('post').addEventListener('click', function () {
    pending();

    let data = {
      "userId": 1,
      "id": 1,
      "title": prompt("Set your custom title", "Default title"),
      "body": "Lorem ipsum dolor sit amet."
    };

    let promise_ish = oldFashionedAjax('https://jsonplaceholder.typicode.com/todos');

    promise_ish({
      type: "post",
      data: data,
      success: function (res) {
        console.log(res);
        result.innerHTML = '<pre>' + JSON.stringify(res, null, 2) + '</pre>';
      },
      error: function (res) {
        result.innerHTML = '<pre>Error! Look the console for details.</pre>';
        console.error(res);
      },
      always: function () {
        console.info('Always!');
        let pre = document.createElement('pre');
        pre.innerHTML = 'Always!';
        result.append(pre);
      }
    });
  });

});
