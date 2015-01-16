/*
 * Module :: config.js
 * Info : Module for the configuration constants.
 */

  var config = (function(){ 
    return {
      CURRENCY : {
      	DOLLAR : 'USD',
      	EURO : 'EUR',
      	YEN : 'JPY'
      },
      API : {
        CONVERSION : {
          DOLLAR_TO_EURO : 'USD_EUR',
          DOLLAR_TO_YEN : 'USD_JPY',
          EURO_TO_DOLLAR : 'EUR_USD',
          EURO_TO_YEN : 'EUR_JPY',
          YEN_TO_DOLLAR : 'JPY_USD',
          YEN_TO_EURO : 'JPY_EUR'
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
