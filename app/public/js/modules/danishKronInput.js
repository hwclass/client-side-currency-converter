/*
 * Module : dollarInput.js
 * Info : Module for the input element of dollar currency.
 */

(function(Core) {
  
  Core.register('danishKronInput', function (sandbox) {

    return {

      /**
      * init is a method that is used to make the listeners add and start
      * @param <String> email
      * @param <String> password
      */
      init : function () {
        this.$danishKronInput = sandbox.use('$')('#danishKronInput');
        this.addListeners();
        this.listen();
      },

      /**
      * addListeners is a method that is used to bind events
      * @param N/A
      */
      addListeners : function () {
        this.$danishKronInput.on('keypress', this.onKeypress.bind(this));
      },

      /**
      * listen is a method that is used to listen custom events throughtout the application for this module
      * @param N/A
      */
      listen :  function () {
        sandbox.listen('newDollarInputValue', this.newDollorInputValue, this);
        sandbox.listen('newEuroInputValue', this.newEuroInputValue, this);
        sandbox.listen('newYenInputValue', this.newYenInputValue, this);
        sandbox.listen('newLiraInputValue', this.newLiraInputValue, this);
        sandbox.listen('newSterlinInputValue', this.newSterlinInputValue, this);
      },

      /**
      * onKeypress is a method that is used to initialize functionalities after current event fires
      * @param N/A
      */
      onKeypress : function () {
        var self = this;
        setTimeout(function () {
          var newValue = self.$danishKronInput[0].value;
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
        this.notifyAjax('getNewDollarToKronConversion', {
          url : sandbox.use('config').API.URL.CONVERT + sandbox.use('config').API.ENDPOINT + '?access_key=' + sandbox.use('config').API.ACCESS_KEY + '&from=' + sandbox.use('config').CURRENCY.DOLLAR + '&to=' + sandbox.use('config').CURRENCY.KRON + '&amount=' + notifiedData,
          type : 'jsonp',
          success : function (data) {
            if (!isNaN(notifiedData) && !!data.success) {
              self.$danishKronInput[0].value = sandbox.use('numeral')(parseInt(notifiedData) * data['quotes']['USDDKK']).format('0,0.00[0]');
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
        this.notifyAjax('getNewEuroToDollarConversion', {
          url : sandbox.use('config').API.URL.CONVERT + sandbox.use('config').API.ENDPOINT + '?access_key=' + sandbox.use('config').API.ACCESS_KEY + '&from=' + sandbox.use('config').CURRENCY.EURO + '&to=' + sandbox.use('config').CURRENCY.KRON + '&amount=' + notifiedData,
          type : 'jsonp',
          success : function (data) {
            if (!isNaN(notifiedData) && !!data.success) {
              self.$danishKronInput[0].value = sandbox.use('numeral')(parseInt(notifiedData) * data['quotes']['EURDKK']).format('0,0.00[0]');
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
          url : sandbox.use('config').API.URL.CONVERT + sandbox.use('config').API.ENDPOINT + '?access_key=' + sandbox.use('config').API.ACCESS_KEY + '&from=' + sandbox.use('config').CURRENCY.YEN + '&to=' + sandbox.use('config').CURRENCY.KRON + '&amount=' + notifiedData,
          dataType: 'jsonp',
          success: function(data) {
            if (!isNaN(notifiedData) && !!data.success) {
              self.$danishKronInput[0].value = sandbox.use('numeral')(parseInt(notifiedData) * data['quotes']['JPYDKK']).format("0,0.00[0]");
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
          url : sandbox.use('config').API.URL.CONVERT + sandbox.use('config').API.ENDPOINT + '?access_key=' + sandbox.use('config').API.ACCESS_KEY + '&from=' + sandbox.use('config').CURRENCY.LIRA + '&to=' + sandbox.use('config').CURRENCY.KRON + '&amount=' + notifiedData,
          dataType: 'jsonp',
          success: function(data) {
            if (!isNaN(notifiedData) && !!data.success) {
              self.$danishKronInput[0].value = sandbox.use('numeral')(parseInt(notifiedData) * data['quotes']['TRYDKK']).format('0,0.00[0]');
            }
          }, 
          error : function (e) {
            console.log(e);
          }
        });
      },

      /**
      * newSterlinInputValue is a method to listen to the entering keys in the Sterlin currency input.
      * @param <Object> data
      */
      newSterlinInputValue : function (data) {
        var self = this;
        var notifiedData = data.value;
        sandbox.use('$').ajax({
          url : sandbox.use('config').API.URL.CONVERT + sandbox.use('config').API.ENDPOINT + '?access_key=' + sandbox.use('config').API.ACCESS_KEY + '&from=' + sandbox.use('config').CURRENCY.STERLIN + '&to=' + sandbox.use('config').CURRENCY.KRON + '&amount=' + notifiedData,
          dataType: 'jsonp',
          success: function(data) {
            if (!isNaN(notifiedData) && !!data.success) {
              self.$danishKronInput[0].value = sandbox.use('numeral')(parseInt(notifiedData) * data['quotes']['GBPDKK']).format('0,0.00[0]');
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
          type : 'newDanishKronInputValue',
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

