'use strict';

/**
* config is the module for the configuration constants
* @param N/A
*/
var config = (function(){ 
  return {
    CURRENCY : {
    	DOLLAR : 'USD',
    	EURO : 'EUR',
    	YEN : 'JPY',
      LIRA : 'TRY',
      STERLIN : 'GBP'
    },
    API : {
      ACCESS_KEY : 'acc5802f1ca9d421f6371dc247e17d90',
      ENDPOINT : 'live',
      URL : {
        CONVERT : 'http://apilayer.net/api/'
      }
    },
    ERROR : {
      notNumeric : 'Please, enter a numeric digit.'
    }
  }
})();
