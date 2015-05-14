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
      LIRA : 'TRY',
      STERLIN : 'GBP'
    },
    API : {
      CONVERSION : {
        DOLLAR_TO_EURO : 'USD_EUR',
        DOLLAR_TO_YEN : 'USD_JPY',
        DOLLAR_TO_TRY : 'USD_TRY',
        DOLLAR_TO_GBP : 'USD_GBP',
        EURO_TO_DOLLAR : 'EUR_USD',
        EURO_TO_YEN : 'EUR_JPY',
        EURO_TO_TRY : 'EUR_TRY',
        EURO_TO_GBP : 'EUR_GBP',
        YEN_TO_DOLLAR : 'JPY_USD',
        YEN_TO_EURO : 'JPY_EUR',
        YEN_TO_TRY : 'JPY_TRY',
        YEN_TO_GBP : 'JPY_GBP',
        TRY_TO_USD : 'TRY_USD',
        TRY_TO_EURO : 'TRY_EURO',
        TRY_TO_YEN : 'TRY_JPY',
        TRY_TO_STERLIN : 'TRY_GBP',
        GBP_TO_USD : 'GBP_USD',
        GBP_TO_EURO : 'GBP_EURO',
        GBP_TO_YEN : 'GBP_JPY',
        GBP_TO_TRY : 'GBP_TRY'
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
