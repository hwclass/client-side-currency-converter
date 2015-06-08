/*
 * Module :: euroInput.js
 * Info : Module for the input element of dollar currency.
 */

(function(Core) {
	
  Core.register('euroInput', function (sandbox) {

    return {

      /**
       * init is a method that is used to make the listeners add and start
       */
      init : function () {
        this.$euroInput = sandbox.use('$')('#euroInput');
        this.addListeners();
        this.listen();
      },

      /**
       * addListeners is a method that is used to bind events
       */
      addListeners : function () {
        this.$euroInput.on('keypress', this.onKeypress.bind(this));
      },

      /**
       * listen is a method that is used to listen custom events throughtout the application for this module
       */
      listen :  function () {
        sandbox.listen('newDollarInputValue', this.newDollarInputValue, this);
        sandbox.listen('newYenInputValue', this.newYenInputValue, this);
        sandbox.listen('newLiraInputValue', this.newLiraInputValue, this);
        sandbox.listen('newSterlinInputValue', this.newSterlinInputValue, this);
      },

      /**
       * onKeypress is a method that is used to initialize functionalities after current event fires
       */
      onKeypress : function () {
        var self = this;
        setTimeout(function () {
          var newValue = self.$euroInput[0].value;
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
          url : sandbox.use('config').API.URL.CONVERT + '?access_key=' + sandbox.use('config').API.ACCESS_KEY + '&from=' + sandbox.use('config').CURRENCY.DOLLAR + '&to=' + sandbox.use('config').CURRENCY.EURO + '&amount=' + notifiedData,
          crossDomain: true,
          dataType: 'jsonp',
          success: function(data) {
            if (!isNaN(notifiedData)) {
              self.$euroInput[0].value = sandbox.use('numeral')(parseInt(notifiedData) * data.results['USD_EUR'].val).format("0,0.00[0]");
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
          url : sandbox.use('config').API.URL.CONVERT + '?access_key=' + sandbox.use('config').API.ACCESS_KEY + '&from=' + sandbox.use('config').CURRENCY.YEN + '&to=' + sandbox.use('config').CURRENCY.EURO + '&amount=' + notifiedData,
          crossDomain: true,
          dataType: 'jsonp',
          success: function(data) {
            if (!isNaN(notifiedData)) {
              self.$euroInput[0].value = sandbox.use('numeral')(parseInt(notifiedData) * data.results['JPY_EUR'].val).format("0,0.00[0]");
            }
          }
        });
      },

      /**
       * newLiraInputValue is a method to listen to the entering keys in the Lira currency input.
       */
      newLiraInputValue : function (data) {
        var self = this;
        var notifiedData = data.value;
        sandbox.use('$').ajax({
          type: 'GET',
          url : sandbox.use('config').API.URL.CONVERT + '?access_key=' + sandbox.use('config').API.ACCESS_KEY + '&from=' + sandbox.use('config').CURRENCY.LIRA + '&to=' + sandbox.use('config').CURRENCY.EURO + '&amount=' + notifiedData,
          crossDomain: true,
          dataType: 'jsonp',
          success: function(data) {
            if (!isNaN(notifiedData)) {
              self.$euroInput[0].value = sandbox.use('numeral')(parseInt(notifiedData) * data.results['TRY_EUR'].val).format("0,0.00[0]");
            }
          }
        });
      },

      /**
       * newSterlinInputValue is a method to listen to the entering keys in the Lira currency input.
       */
      newSterlinInputValue : function (data) {
        var self = this;
        var notifiedData = data.value;
        sandbox.use('$').ajax({
          type: 'GET',
          url : sandbox.use('config').API.URL.CONVERT + '?access_key=' + sandbox.use('config').API.ACCESS_KEY + '&from=' + sandbox.use('config').CURRENCY.STERLIN + '&to=' + sandbox.use('config').CURRENCY.EURO + '&amount=' + notifiedData,
          crossDomain: true,
          dataType: 'jsonp',
          success: function(data) {
            if (!isNaN(notifiedData)) {
              self.$euroInput[0].value = sandbox.use('numeral')(parseInt(notifiedData) * data.results['GBP_EUR'].val).format("0,0.00[0]");
            }
          }
        });
      },

      /**
       * notify is a method that is used to inform the whole application that the current event fires
       */
      notify : function (newValue) {
        sandbox.notify({
          type : 'newEuroInputValue',
          data : {
            value : newValue
          }
        });
      }

    }

  });

}) (Core);

