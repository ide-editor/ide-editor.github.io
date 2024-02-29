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
  <img src="data:image/png;base64,iVBORw0KGg..." alt="Protection Icon">
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
