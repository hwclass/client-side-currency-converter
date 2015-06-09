'use strict';

/**
* utils is the module for the utility methods.
* @param N/A
*/
(function(Core){ 
  
  Core.register('utils', function (sandbox) {

    return {
      init : function () {
        this.listen();
      },
      listen : function () {
        sandbox.listen('getNewDollarToEuroConversion', this.ajax, this);
      },
      ajax : function (options) {
        sandbox.use('$').ajax({
          url : options.url,
          dataType: options.dataType,
          success: function(data) {
            options.success(data);
          },
          error : function (e) {
            options.error(e);
          }
        });
      }
    }

  });

})(Core);