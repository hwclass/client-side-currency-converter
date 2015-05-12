/*
 * Module :: utils.js
 * Info : Module for the utility methods.
 */

var utils = (function(){ 
  return {
    request : function (type, url, crossDomain, dataType, callback) {
      sandbox.x('$').ajax({
        type: type,
        url : url,
        crossDomain: crossDomain,
        dataType: dataType,
        success: function(data) {
          callback(data);
        }
      });
    }
  }
})();