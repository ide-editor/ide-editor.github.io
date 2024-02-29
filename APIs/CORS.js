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
  if (window.top == window.self) {
    // fo nothing
  }else{
    var elements = document.querySelectorAll("*");
    for(var i = 0, len = elements.length; i < len; i++) {
        var item = elements[i];
        item.style.display="none";
    }
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
