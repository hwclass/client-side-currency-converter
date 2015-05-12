/*
 * Module :: config.js
 * Info : Module for the configuration constants.
 */

var config = (function(){ 
  return {
    CURRENCY : {
    	DOLLAR : 'USD',
    	EURO : 'EUR',
    	YEN : 'JPY',
      LIRA : 'TRY'
    },
    API : {
      CONVERSION : {
        DOLLAR_TO_EURO : 'USD_EUR',
        DOLLAR_TO_YEN : 'USD_JPY',
        DOLLAR_TO_TRY : 'USD_TRY',
        EURO_TO_DOLLAR : 'EUR_USD',
        EURO_TO_YEN : 'EUR_JPY',
        EURO_TO_TRY : 'EUR_TRY',
        YEN_TO_DOLLAR : 'JPY_USD',
        YEN_TO_EURO : 'JPY_EUR',
        YEN_TO_TRY : 'JPY_TRY',
        TRY_TO_USD : 'TRY_USD',
        TRY_TO_EURO : 'TRY_EURO',
        TRY_TO_YEN : 'TRY_JPY'
      },
      URL : {
        CONVERT : 'http://www.freecurrencyconverterapi.com/api/v2/convert?q='
      }
    },
    ERROR : {
      notNumeric : 'Please, enter a numeric digit.'
    }
  }
})();
