/*
 * Module :: dollarInput.js
 * Info : Module for the input element of dollar currency.
 */

(function(Core) {
	
  Core.register('dollarInput', function (sandbox) {

    return {

      /**
       * init is a method that is used to make the listeners add and start
       */
      init : function () {
        this.$dollarInput = sandbox.use('$')('#dollarInput');
        this.addListeners();
        this.listen();
      },

      /**
       * addListeners is a method that is used to bind events
       */
      addListeners : function () {
        this.$dollarInput.on('keypress', this.onKeypress.bind(this));
      },

      /**
       * listen is a method that is used to listen custom events throughtout the application for this module
       */
      listen :  function () {
        sandbox.listen('newEuroInputValue', this.newEuroInputValue, this);
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
          var newValue = self.$dollarInput[0].value;
          self.notify(newValue);
        }, 0);
      },

      /**
       * newEuroInputValue is a method to listen to the entering keys in the Euro currency input.
       */
      newEuroInputValue : function (data) {
        var self = this;
        var notifiedData = data.value;
        sandbox.use('$').ajax({
          type: 'GET',
          url : sandbox.use('config').API.URL.CONVERT + sandbox.use('config').CURRENCY.EURO + '_' + sandbox.use('config').CURRENCY.DOLLAR,
          crossDomain: true,
          dataType: 'jsonp',
          success: function(data) {
            if (!isNaN(notifiedData)) {
              self.$dollarInput[0].value = sandbox.use('numeral')(parseInt(notifiedData) * data.results['EUR_USD'].val).format('0,0.00[0]');
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
          url : sandbox.use('config').API.URL.CONVERT + sandbox.use('config').CURRENCY.YEN + '_' + sandbox.use('config').CURRENCY.DOLLAR,
          crossDomain: true,
          dataType: 'jsonp',
          success: function(data) {
            if (!isNaN(notifiedData)) {
              self.$dollarInput[0].value = sandbox.use('numeral')(parseInt(notifiedData) * data.results['JPY_USD'].val).format("0,0.00[0]");
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
          url : sandbox.use('config').API.URL.CONVERT + sandbox.use('config').CURRENCY.LIRA + '_' + sandbox.use('config').CURRENCY.DOLLAR,
          crossDomain: true,
          dataType: 'jsonp',
          success: function(data) {
            if (!isNaN(notifiedData)) {
              self.$dollarInput[0].value = sandbox.use('numeral')(parseInt(notifiedData) * data.results['TRY_USD'].val).format('0,0.00[0]');
            }
          }
        });
      },

      /**
       * newSterlinInputValue is a method to listen to the entering keys in the Sterlin currency input.
       */
      newSterlinInputValue : function (data) {
        var self = this;
        var notifiedData = data.value;
        sandbox.use('$').ajax({
          type: 'GET',
          url : sandbox.use('config').API.URL.CONVERT + sandbox.use('config').CURRENCY.STERLIN + '_' + sandbox.use('config').CURRENCY.DOLLAR,
          crossDomain: true,
          dataType: 'jsonp',
          success: function(data) {
            if (!isNaN(notifiedData)) {
              self.$dollarInput[0].value = sandbox.use('numeral')(parseInt(notifiedData) * data.results['GBP_USD'].val).format('0,0.00[0]');
            }
          }
        });
      },

      /**
       * notify is a method that is used to inform the whole application that the current event fires
       */
      notify : function (newValue) {
        sandbox.notify({
          type : 'newDollarInputValue',
          data : {
            value : newValue
          }
        });
      }

    }

  });

}) (Core);

