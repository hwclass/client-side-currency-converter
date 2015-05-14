/*
 * Module :: sterlinInput.js
 * Info : Module for the input element of dollar currency.
 */

(function(Core) {
	
  Core.register('sterlinInput', function (sandbox) {

    return {

      /**
       * init is a method that is used to make the listeners add and start
       */
      init : function () {
        this.$sterlinInput = sandbox.use('$')('#sterlinInput');
        this.addListeners();
        this.listen();
      },

      /**
       * addListeners is a method that is used to bind events
       */
      addListeners : function () {
        this.$sterlinInput.on('keypress', this.onKeypress.bind(this));
      },

      /**
       * listen is a method that is used to listen custom events throughtout the application for this module
       */
      listen :  function () {
        sandbox.listen('newDollarInputValue', this.newDollarInputValue, this);
        sandbox.listen('newEuroInputValue', this.newEuroInputValue, this);
        sandbox.listen('newYenInputValue', this.newYenInputValue, this);
        sandbox.listen('newLiraInputValue', this.newYenInputValue, this);
      },

      /**
       * onKeypress is a method that is used to initialize functionalities after current event fires
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
       */
      newDollarInputValue : function (data) {
        var self = this;
        var notifiedData = data.value;
        sandbox.use('$').ajax({
          type: 'GET',
          url : sandbox.use('config').API.URL.CONVERT + sandbox.use('config').CURRENCY.DOLLAR + '_' + sandbox.use('config').CURRENCY.STERLIN,
          crossDomain: true,
          dataType: 'jsonp',
          success: function(data) {
            if (!isNaN(notifiedData)) {
              self.$sterlinInput[0].value = sandbox.use('numeral')(parseInt(notifiedData) * data.results['USD_GBP'].val).format('0,0.00[0]');
            }
          }
        });
      },

      /**
       * newEuroInputValue is a method to listen to the entering keys in the Euro currency input.
       */
      newEuroInputValue : function (data) {
        var self = this;
        var notifiedData = data.value;
        sandbox.use('$').ajax({
          type: 'GET',
          url : sandbox.use('config').API.URL.CONVERT + sandbox.use('config').CURRENCY.EURO + '_' + sandbox.use('config').CURRENCY.STERLIN,
          crossDomain: true,
          dataType: 'jsonp',
          success: function(data) {
            if (!isNaN(notifiedData)) {
              self.$sterlinInput[0].value = sandbox.use('numeral')(parseInt(notifiedData) * data.results['EUR_GBP'].val).format('0,0.00[0]');
            }
          }
        });
      },

      /**
       * newYenInputValue is a method to listen to the entering keys in the Yen currency input.
       */
      newYenInputValue : function (data) {
        var self = this;
        var notifiedData = data.value;
        sandbox.use('$').ajax({
          type: 'GET',
          url : sandbox.use('config').API.URL.CONVERT + sandbox.use('config').CURRENCY.YEN + '_' + sandbox.use('config').CURRENCY.STERLIN,
          crossDomain: true,
          dataType: 'jsonp',
          success: function(data) {
            if (!isNaN(notifiedData)) {
              self.$sterlinInput[0].value = sandbox.use('numeral')(parseInt(notifiedData) * data.results['JPY_GBP'].val).format("0,0.00[0]");
            }
          }
        });
      },

      /**
       * notify is a method that is used to inform the whole application that the current event fires
       */
      notify : function (newValue) {
        sandbox.notify({
          type : 'newSterlinInputValue',
          data : {
            value : newValue
          }
        });
      }

    }

  });

}) (Core);

