/*
 * Module :: sterlinInput.js
 * Info : Module for the input element of dollar currency.
 */

(function(Core) {
	
  Core.register('sterlinInput', function (sandbox) {

    return {

      /**
      * init is a method that is used to make the listeners add and start
      * @param N/A
      */
      init : function () {
        this.$sterlinInput = sandbox.use('$')('#sterlinInput');
        this.addListeners();
        this.listen();
      },

      /**
      * addListeners is a method that is used to bind events
      * @param N/A
      */
      addListeners : function () {
        this.$sterlinInput.on('keypress', this.onKeypress.bind(this));
      },

      /**
      * listen is a method that is used to listen custom events throughtout the application for this module
      * @param N/A
      */
      listen :  function () {
        sandbox.listen('newDollarInputValue', this.newDollarInputValue, this);
        sandbox.listen('newEuroInputValue', this.newEuroInputValue, this);
        sandbox.listen('newYenInputValue', this.newYenInputValue, this);
        sandbox.listen('newLiraInputValue', this.newLiraInputValue, this);
      },

      /**
      * onKeypress is a method that is used to initialize functionalities after current event fires
      * @param N/A
      */
      onKeypress : function () {
        var self = this;
        setTimeout(function () {
          var newValue = self.$sterlinInput[0].value;
          self.notify(newValue);
        }, 0);
      },

      /**
      * newDollarInputValue is a method to listen to the entering keys in the Dollar currency input.
      * @param <Object> data
      */
      newDollarInputValue : function (data) {
        var self = this;
        var notifiedData = data.value;
        this.notifyAjax('getNewDollarToSterlinConversion', {
          url : sandbox.use('config').API.URL.CONVERT + sandbox.use('config').API.ENDPOINT + '?access_key=' + sandbox.use('config').API.ACCESS_KEY + '&from=' + sandbox.use('config').CURRENCY.DOLLAR + '&to=' + sandbox.use('config').CURRENCY.STERLIN + '&amount=' + notifiedData,
          type : 'jsonp',
          success : function (data) {
            if (!isNaN(notifiedData) && !!data.success) {
              self.$sterlinInput[0].value = sandbox.use('numeral')(parseInt(notifiedData) * data['quotes']['USDGBP']).format('0,0.00[0]');
            }
          },
          error : function (e) {
            console.log(e);
          }
        });
      },

      /**
      * newEuroInputValue is a method to listen to the entering keys in the Euro currency input.
      * @param <Object> data
      */
      newEuroInputValue : function (data) {
        var self = this;
        var notifiedData = data.value;
        sandbox.use('$').ajax({
          url : sandbox.use('config').API.URL.CONVERT + sandbox.use('config').API.ENDPOINT + '?access_key=' + sandbox.use('config').API.ACCESS_KEY + '&from=' + sandbox.use('config').CURRENCY.EURO + '&to=' + sandbox.use('config').CURRENCY.STERLIN + '&amount=' + notifiedData,
          dataType: 'jsonp',
          success: function(data) {
            if (!isNaN(notifiedData) && !!data.success) {
              self.$sterlinInput[0].value = sandbox.use('numeral')(parseInt(notifiedData) * data['quotes']['EURGBP']).format('0,0.00[0]');
            }
          }, 
          error : function (e) {
            console.log(e);
          }
        });
      },

      /**
      * newYenInputValue is a method to listen to the entering keys in the Yen currency input.
      * @param <Object> data
      */
      newYenInputValue : function (data) {
        var self = this;
        var notifiedData = data.value;
        sandbox.use('$').ajax({
          url : sandbox.use('config').API.URL.CONVERT + sandbox.use('config').API.ENDPOINT + '?access_key=' + sandbox.use('config').API.ACCESS_KEY + '&from=' + sandbox.use('config').CURRENCY.YEN + '&to=' + sandbox.use('config').CURRENCY.STERLIN + '&amount=' + notifiedData,
          dataType: 'jsonp',
          success: function(data) {
            if (!isNaN(notifiedData) && !!data.success) {
              self.$sterlinInput[0].value = sandbox.use('numeral')(parseInt(notifiedData) * data['quotes']['JPYGBP']).format("0,0.00[0]");
            }
          }, 
          error : function (e) {
            console.log(e);
          }
        });
      },

      /**
      * newLiraInputValue is a method to listen to the entering keys in the Lira currency input.
      * @param <Object> data
      */
      newLiraInputValue : function (data) {
        var self = this;
        var notifiedData = data.value;
        sandbox.use('$').ajax({
          url : sandbox.use('config').API.URL.CONVERT + sandbox.use('config').API.ENDPOINT + '?access_key=' + sandbox.use('config').API.ACCESS_KEY + '&from=' + sandbox.use('config').CURRENCY.LIRA + '&to=' + sandbox.use('config').CURRENCY.STERLIN + '&amount=' + notifiedData,
          dataType: 'jsonp',
          success: function(data) {
            if (!isNaN(notifiedData) && !!data.success) {
              self.$sterlinInput[0].value = sandbox.use('numeral')(parseInt(notifiedData) * data['quotes']['TRYGBP']).format("0,0.00[0]");
            }
          }, 
          error : function (e) {
            console.log(e);
          }
        });
      },

      /**
      * newDanishKronInputValue is a method to listen to the entering keys in the Danish Kron currency input.
      * @param <Object> data
      */
      newDanishKronInputValue : function (data) {
        var self = this;
        var notifiedData = data.value;
        this.notifyAjax('getNewDanishKronToSterlinConversion', {
          url : sandbox.use('config').API.URL.CONVERT + sandbox.use('config').API.ENDPOINT + '?access_key=' + sandbox.use('config').API.ACCESS_KEY + '&from=' + sandbox.use('config').CURRENCY.KRON + '&to=' + sandbox.use('config').CURRENCY.STERLIN + '&amount=' + notifiedData,
          type : 'jsonp',
          success : function (data) {
            if (!isNaN(notifiedData) && !!data.success) {
              self.$sterlinInput[0].value = sandbox.use('numeral')(parseInt(notifiedData) * data['quotes']['DKGBP']).format('0,0.00[0]');
            }
          },
          error : function (e) {
            console.log(e);
          }
        });
      },

      /**
      * notify is a method that is used to inform the whole application that the current event fires
      * @param <number> newValue
      */
      notify : function (newValue) {
        sandbox.notify({
          type : 'newSterlinInputValue',
          data : {
            value : newValue
          }
        });
      },

      /**
      * notifyAjax is a method that is used to inform the whole application that an ajax call invoked
      * @param <Object> options
      */
      notifyAjax : function (type, options) {
        sandbox.notify({
          type : type,
          data : {
            url : options.url,
            type : options.type,
            success : options.success,
            error : options.error
          }
        });
      }

    }

  });

}) (Core);

