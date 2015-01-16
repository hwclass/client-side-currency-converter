/*
 * Module :: amountOfDollar.js
 * Info : Module for the input element of dollar currency.
 */

(function(Core) {
	
  Core.register('amountOfDollar', function (sandbox) {

    return {

      /**
       * init is a method that is used to make the listeners add and start
       */
      init : function () {
        this.$amountOfDollar = sandbox.x('$')('#amountOfDollar');
        this.addListeners();
        this.listen();
      },

      /**
       * addListeners is a method that is used to bind events
       */
      addListeners : function () {
        this.$amountOfDollar.on('keypress', this.onKeypress.bind(this));
      },

      /**
       * listen is a method that is used to listen custom events throughtout the application for this module
       */
      listen :  function () {
        sandbox.listen('newEuroInputValue', this.newEuroInputValue, this);
        sandbox.listen('newYenInputValue', this.newYenInputValue, this);
      },

      /**
       * onKeypress is a method that is used to initialize functionalities after current event fires
       */
      onKeypress : function () {
        var self = this;
        setTimeout(function () {
          var newValue = self.$amountOfDollar[0].value;
          self.notify(newValue);
        }, 0);
      },

      /**
       * newEuroInputValue is a method to listen to the entering keys in the Euro currency input.
       */
      newEuroInputValue : function (data) {
        var self = this;
        var notifiedData = data.value;
        sandbox.x('$').ajax({
          type: 'GET',
          url : sandbox.x('config').API.URL.CONVERT + sandbox.x('config').CURRENCY.EURO + '_' + sandbox.x('config').CURRENCY.DOLLAR,
          crossDomain: true,
          dataType: 'jsonp',
          success: function(data) {
            if (!isNaN(notifiedData)) {
              self.$amountOfDollar[0].value = sandbox.x('numeral')(parseInt(notifiedData) * data.results['EUR_USD'].val).format('0,0.00[0]');
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
          url : sandbox.x('config').API.URL.CONVERT + sandbox.x('config').CURRENCY.YEN + '_' + sandbox.x('config').CURRENCY.DOLLAR,
          crossDomain: true,
          dataType: 'jsonp',
          success: function(data) {
            if (!isNaN(notifiedData)) {
              self.$amountOfDollar[0].value = sandbox.x('numeral')(parseInt(notifiedData) * data.results['JPY_USD'].val).format("0,0.00[0]");
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

