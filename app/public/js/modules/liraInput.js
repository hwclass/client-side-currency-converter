/*
 * Module :: liraInput.js
 * Info : Module for the input element of lira currency.
 */

(function(Core) {
	
  Core.register('liraInput', function (sandbox) {

    return {

    	/**
       * init is a method that is used to make the listeners add and start
       */
      init : function () {
        this.$liraInput = sandbox.x('$')('#liraInput');
        this.addListeners();
        this.listen();
      },

      /**
       * addListeners is a method that is used to bind events
       */
      addListeners : function () {
        this.$liraInput.on('keypress', this.onKeypress.bind(this));
      },

      /**
       * listen is a method that is used to listen custom events throughtout the application for this module
       */
      listen :  function () {
      	sandbox.listen('newDollarInputValue', this.newDollarInputValue, this);
        sandbox.listen('newEuroInputValue', this.newEuroInputValue, this);
        sandbox.listen('newYenInputValue', this.newYenInputValue, this);
      },

      /**
       * onKeypress is a method that is used to initialize functionalities after current event fires
       */
      onKeypress : function () {
        var self = this;
        setTimeout(function () {
          var newValue = self.$liraInput[0].value;
          self.notify(newValue);
        }, 0);
      },

      /**
       * newDollarInputValue is a method to listen to the entering keys in the Euro currency input.
       */
      newDollarInputValue : function (data) {
        var self = this;
        var notifiedData = data.value;
        sandbox.x('$').ajax({
          type: 'GET',
          url : sandbox.x('config').API.URL.CONVERT + sandbox.x('config').CURRENCY.TRY + '_' + sandbox.x('config').CURRENCY.DOLLAR,
          crossDomain: true,
          dataType: 'jsonp',
          success: function(data) {
            if (!isNaN(notifiedData)) {
              self.$liraInput[0].value = sandbox.x('numeral')(parseInt(notifiedData) * data.results['TRY_USD'].val).format('0,0.00[0]');
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
        sandbox.x('$').ajax({
          type: 'GET',
          url : sandbox.x('config').API.URL.CONVERT + sandbox.x('config').CURRENCY.TRY + '_' + sandbox.x('config').CURRENCY.EURO,
          crossDomain: true,
          dataType: 'jsonp',
          success: function(data) {
            if (!isNaN(notifiedData)) {
              self.$liraInput[0].value = sandbox.x('numeral')(parseInt(notifiedData) * data.results['TRY_EUR'].val).format('0,0.00[0]');
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
        sandbox.x('$').ajax({
          type: 'GET',
          url : sandbox.x('config').API.URL.CONVERT + sandbox.x('config').CURRENCY.TRY + '_' + sandbox.x('config').CURRENCY.YEN,
          crossDomain: true,
          dataType: 'jsonp',
          success: function(data) {
            if (!isNaN(notifiedData)) {
              self.$liraInput[0].value = sandbox.x('numeral')(parseInt(notifiedData) * data.results['TRY_JPY'].val).format("0,0.00[0]");
            }
          }
        });
      },

      /**
       * notify is a method that is used to inform the whole application that the current event fires
       */
      notify : function (newValue) {
        sandbox.notify({
          type : 'newLiraInputValue',
          data : {
            value : newValue
          }
        });
      }

    }

 	});

});