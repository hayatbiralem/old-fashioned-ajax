/**
 * Ajax
 *
 * @source http://youmightnotneedjquery.com/#request
 * @source http://youmightnotneedjquery.com/#post
 * @source https://attacomsian.com/blog/http-requests-xhr
 *
 * @param url
 * @param options
 * @returns {Function}
 */

export default function ajax(url, options) {
  let promise_ish = function (options) {

    options = options || {};

    let noop = function(){};
    let data = options.data || {};
    let onSuccess = options.success || noop;
    let onError = options.error || noop;
    let onAlways = options.always || noop;
    let type = options.type || 'get';

    let request = new XMLHttpRequest();
    let isPost = type === 'post';
    if (isPost) {
      request.open('POST', url, true);
      request.setRequestHeader('Content-Type', 'application/json');
    } else {
      request.open('GET', url, true);
    }

    request.onload = function () {
      if (this.status >= 200 && this.status < 400) {
        // Success!
        let response = JSON.parse(this.response);
        onSuccess(response);
        onAlways(response);
      } else {
        // We reached our target server, but it returned an error
        onError(this);
        onAlways(this);
      }
    };

    request.onerror = function () {
      // There was a connection error of some sort
      onError(this);
      onAlways(this);
    };

    if (isPost) {
      request.send(JSON.stringify(data));
    } else {
      request.send();
    }

  };

  if(options) {
    promise_ish(options);
  } else {
    return promise_ish;
  }

}
