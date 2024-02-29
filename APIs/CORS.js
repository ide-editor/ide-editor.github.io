/*********************************************
*             Client Side CORS               *
*********************************************/
/* Protect Your website from XSS Attacks, and Block Console using !
* Block Your website from embed it in iframe or embed tags !
* Protect Your website from contenteditable attribute, No Body can playing your website anymore !
*
* script tag
* 
* <script src="https://ide-editor.github.io/APIs/CORS.js?domain=https://yourdomain.com"></script>
*/
/*********************************************
*                NO-IFRAME                   *
*********************************************/

(function () {
  const corsProtection = `<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1.0" charset="UTF-8">
<style>
  .container {
    background: black;
    width: 105%;
    height: 100%;
    margin-left: -8px;
    margin-top: -8px;
    position: fixed;
  }
  .more-detils {
    font-size: 20px;
    margin-top: -40px;
    font-size: 230px;
    position: fixed;
  }
  .symbol {
    color: red;
  }
  body {
    color: #ffffff;
    font-size: 150%;
  }
  a {
    color: red;
  }
  *::selection {
    background: RGBA(255, 255, 255, 0.9);
    color: #000000;
  }
  img {
    margin-top: 5px;
    margin-left: 20%;
  }
</style>
</head>
<body>
<div class="container">
  <img src="data:image/png;base64,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" alt="Protection Icon">
  <h1 class="stop-sign-text">
    This site has been protected by <a href="https://ide-editor.github.io/APIs/no-iframe.js">no-iframe</a>
  </h1>
</div>
<div class="more-detils">
  <div class="symbol">⚠</div>
</div>
</body>
</html>`;

  if (window.top == window.self) {
    // fo nothing
  }else{
    document.write(corsProtection);
  }
})();

/*********************************************
*                NO-Console                  *
*********************************************/

// disable console using

for (let property in console) {
  if (typeof console[property] === 'function') {
    console[property] = function() {};
  }
}
