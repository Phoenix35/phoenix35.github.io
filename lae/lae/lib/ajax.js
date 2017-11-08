(function (window, document) {
  'use strict';
  let lae = window.lae || {};

  // Comply with RFC 3986 for URI encoding
  // -> method is GET
  let encodeRFC3986Component = str =>
      encodeURIComponent(str).
      replace(/[!'()*]/gu, c =>
        '%' + c.charCodeAt(0).toString(16)
      );
  // // Comply with RFC 5987 for Content-Disposition
  // // This is used for FormData file upload
  // encodeRFC5987Component = str =>
  //   encodeURIComponent(str).
  //   replace(/['()*]/gu, c =>
  //     "%" + c.charCodeAt(0).toString(16)
  //   ).
  //   replace(/%(7C|60|5E)/gu, (str, hex) =>    // |`^ are not required
  //     String.fromCharCode(parseInt(hex, 16))
  //   );

  // Small utility function to use for several values
  // associated to one name (PHP convention).
  let namingConvention = name =>
    name + (name.lastIndexOf(`[]`) === (name.length-2)) ? '' :'[]';

  // DIY->
  // While submitting a form, you MUST be aware of overrides
  // by buttons or inputs like formaction, formenctype, formmethod.
  // This will not do it for you.
  // End DIY

  /**
   * Call: lae.ajax([String url, [String method]])[.get || .post](
   *   {HTMLFormElement} ||
   *   {FormData}        ||
   *   {Any,
   *   [
   *     form {HTMLFormElement} ||
   *          {FormData}        ||
   *          {Object}
   *     The content to send
   *   ],
   *   [_credentials: {
   *     user:     String your user     credentials,
   *     password: String your password credentials,
   *     withCredentials: Boolean Set to true for CORS. Default: false
   *   }]
   *   }
   * )
   * If url is not defined, or an empty String,
   * the form's action attribute will take precedence.
   * If method is defined, lae.ajax() will directly return a function,
   * use .get or .post if method IS NOT defined.
   * If form is not defined, Any's enumerable properties will be sent.
   * The key 'form' will contain the form to send via XHR.
   * Cross-origin requests can be made with _credentials.withCredentials = true
   * @example
   * // url in first call => data sent to this URL
   * // method in first call => This method will be used to send the data
   * // flat object as argument => url += '?topic=js&q=promise'
   * lae.ajax('https://developer.mozilla.org/en-US/search.json', 'GET')({topic: 'js', q: 'promise'})
   * @example
   * // url in form.action and not in first call => data sent to this URL
   * // object containing form in GET argument => url += '?topic=js&q=promise'
   * lae.ajax()
   *   .get({form: {
   *     action: 'https://developer.mozilla.org/en-US/search.json',
   *     topic: 'js',
   *     q: 'promise'
   *   }})
   * @return {Promise} The promise resulting from the AJAX call to the server.
   * =>
   */
  lae.ajax = function (url = '', method = '') {

    if (
      method !== ''     ||
      method !== 'GET'  ||
      method !== 'POST'
    ) {
      new Error(`Method ${method} not supported.`);
    }

    let send = function(method, url, args = {}) {
      // XHR is asynchronous now, deal with it
      let promise = new Promise( function (resolve, reject) {

        // Instantiates the XMLHttpRequest
        let client = new XMLHttpRequest();

        client.onload = function () {
          (this.status === 200) ?
            resolve(this.response) :
            reject(this.statusText);
        };
        client.onerror = function () {
          reject(this.statusText);
        };

        // This is for later use.
        if (
          args instanceof HTMLFormElement ||
          args instanceof FormData
        ) {
          args.form = args;
        }
        // Put a copy of enumerable properties in the .form object.
        else if (args.form === undefined) {

          args.form = {};
          for (let name in args) {
            if (args.hasOwnProperty(name)) {
              // Warn for possible private values (_key)
              if (name[0] === '_')
                console.warn(
                  `The element ${name} was added.`,
                  `If this was not intended, make it non-enumerable.`
                );

              args.form[name] = args[name];
            }
          }

        }

        let uri;

        // url has priority over the form's action attribute
        if (typeof url !== 'string' && url !== '') {
          uri = url;
        }
        // If no url was provided and form contains action,
        // it is meant to be the URI to open and MUST NOT be sent as data
        else {
          uri = args.form.action || '';
          delete args.form.action;
        }

        let myForm = null;

        // A-> Handle methods

        // POST allows FormData to be sent. Makes my job easier.
        if (method === "POST") {

          // An HTML Form is given
          if (args.form instanceof HTMLFormElement)
            myForm = new FormData(args.form);
          // A complete FormData is given
          else if (args.form instanceof FormData)
            myForm = args.form;
          // An object-like is given => Transform to FormData
          else if (args.form instanceof Object)
            myForm = loopObjectAndAppend(
              args.form,
              (new FormData()).append,
              new FormData(),
            );
          else
            reject(new Error('AJAX argument is mal-formed. Cannot continue.'));

        }
        else {

          if (args.form instanceof HTMLFormElement) {
            myForm = '';
            for (let field of args.form.elements) {
              if (!field.hasAttribute('name'))
                continue;

              let fieldType = (field.nodeName.toUpperCase() === "INPUT") ?
                field.getAttribute("type").toUpperCase() :
                "TEXT";

              if (fieldType === 'FILE') {
                for (let file of field)
                  // Use URL.createObjectURL() if you want to pass the contents
                  // of Blobs, Files or MediaSources
                  myForm += '&' +encodeRFC3986Component(field.name)+ '=' +
                    encodeRFC3986Component(file.name)
              }
              else if (
                (fieldType !== "RADIO" && fieldType !== "CHECKBOX") ||
                field.checked
              )
                myForm += '&' + encodeRFC3986Component(field.name)+ '=' +
                encodeRFC3986Component(field.value);
            }
          }
          //
          // FormData will not work with GET, it will send an empty string
          //
          else if (args.form instanceof Object) {
            myForm = loopObjectAndAppend(
              args.form,
              function (name, value) {
                this.push(encodeRFC3986Component(name)+ '=' +
                  // value will be the return value of the .toString() method
                  // e.g. : new Blob() => "[object Blob]"
                  // See URL.createObjectURL() above
                  encodeRFC3986Component((value instanceof File) ?
                    value.name :
                    value
                  )
                )
              },
            ).join('&');
          }
          else
            reject(new Error('AJAX argument is mal-formed. Cannot continue.'));

        }
        // End A

        let user    = null,
          password  = null,
          withCredentials = false;
        if (args._credentials) {
          user     = args._credentials.user     || null;
          password = args._credentials.password || null;
          withCredentials = args._credentials.withCredentials || true;
        }

        client.open(
          method,
          (method === "POST") ?
            uri :
            // Concatenate the elements to send via GET
            uri.concat(
              // Don't add '&' or '?' at the end of the URI
              // if myForm is empty
              (myForm !== '') ?
                (~uri.lastIndexOf('?')) ? '&' : '?' :
                '',
              myForm
            ),
          true,
          user,
          password,
        );
        client.withCredentials = withCredentials;
        client.send(myForm || null);

      });

      // Return the promise
      return promise;
    }

    let loopObjectAndAppend = (obj, appendFn, init = []) => {

      // This is really tiresome but we MUST go
      // through each key / pair
      // Object being non-iterable, for-of does not work
      for (let name in obj) {
        if (obj.hasOwnProperty(name)) {
          // action is a reserved keyword for the form submit
          if (name !== 'action') {
            // All well-formed iterables (that are not a string) SHOULD be
            // appended under the same name
            // e.g Files, Arrays, user-defined Iterators, ...
            if (
              // Not a string?
              typeof obj[name] !== 'string' &&
              // Iterable?
              obj[name][Symbol.iterator] &&
              // Well-formed?
              typeof obj[name][Symbol.iterator]().next === 'function' &&
              // No need to go through finished iterators
              obj[name][Symbol.iterator]().next().done === false
            ) {
              // DIY->
              // It is up to you NOT to send an INFINITE iterator
              // End DIY
              for(let value of obj[name]) {
                appendFn.call(init, name, value);
              }
            }
            // String or not iterable? Append the value
            else
              appendFn.call(init, name, obj[name])
          }
        }
      }
      return init;

    };

    return (method === '') ?
      {
        'get'  : args => send('GET',  url, args),
        'post' : args => send('POST', url, args),
      } :
      args => send(method, url, args);
  }

  window.lae = lae;

}(window, document));
