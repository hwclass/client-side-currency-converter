/*
 * Module :: yenInput.js
 * Info : Module for the input element of yen currency.
 */

(function(Core) {
	
  Core.register('yenInput', function (sandbox) {

    return {


      /**
      * init is a method that is used to make the listeners add and start
      * @param N/A
      */
      init : function () {
        this.$yenInput = sandbox.use('$')('#yenInput');
        this.addListeners();
        this.listen();
      },

      /**
      * addListeners is a method that is used to bind events
      * @param N/A
      */
      addListeners : function () {
        this.$yenInput.on('keypress', this.onKeypress.bind(this));
      },

      /**
      * listen is a method that is used to listen custom events throughtout the application for this module
      * @param N/A
      */
      listen :  function () {
        sandbox.listen('newDollarInputValue', this.newDollarInputValue, this);
        sandbox.listen('newEuroInputValue', this.newEuroInputValue, this);
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
          var newValue = self.$yenInput[0].value;
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
        sandbox.use('$').ajax({
          url : sandbox.use('config').API.URL.CONVERT + sandbox.use('config').API.ENDPOINT + '?access_key=' + sandbox.use('config').API.ACCESS_KEY + '&from=' + sandbox.use('config').CURRENCY.DOLLAR + '&to=' + sandbox.use('config').CURRENCY.YEN + '&amount=' + notifiedData,
          dataType: 'jsonp',
          success: function(data) {
            if (!isNaN(notifiedData) && !!data.success) {
              self.$yenInput[0].value = sandbox.use('numeral')(parseInt(notifiedData) * data['quotes']['USDJPY']).format("0,0.00[0]");
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
          url : sandbox.use('config').API.URL.CONVERT + sandbox.use('config').API.ENDPOINT + '?access_key=' + sandbox.use('config').API.ACCESS_KEY + '&from=' + sandbox.use('config').CURRENCY.EURO + '&to=' + sandbox.use('config').CURRENCY.YEN + '&amount=' + notifiedData,
          dataType: 'jsonp',
          success: function(data) {
            if (!isNaN(notifiedData) && !!data.success) {
              self.$yenInput[0].value = sandbox.use('numeral')(parseInt(notifiedData) * data['quotes']['EURJPY']).format("0,0.00[0]");
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
          url : sandbox.use('config').API.URL.CONVERT + sandbox.use('config').API.ENDPOINT + '?access_key=' + sandbox.use('config').API.ACCESS_KEY + '&from=' + sandbox.use('config').CURRENCY.LIRA + '&to=' + sandbox.use('config').CURRENCY.YEN + '&amount=' + notifiedData,
          dataType: 'jsonp',
          success: function(data) {
            if (!isNaN(notifiedData) && !!data.success) {
              self.$yenInput[0].value = sandbox.use('numeral')(parseInt(notifiedData) * data['quotes']['TRYJPY']).format("0,0.00[0]");
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
          url : sandbox.use('config').API.URL.CONVERT + sandbox.use('config').API.ENDPOINT + '?access_key=' + sandbox.use('config').API.ACCESS_KEY + '&from=' + sandbox.use('config').CURRENCY.STERLIN + '&to=' + sandbox.use('config').CURRENCY.YEN + '&amount=' + notifiedData,
          dataType: 'jsonp',
          success: function(data) {
            if (!isNaN(notifiedData) && !!data.success) {
              self.$yenInput[0].value = sandbox.use('numeral')(parseInt(notifiedData) * data['quotes']['GBPJPY']).format("0,0.00[0]");
            }
          }, 
          error : function (e) {
            console.log(e);
          } && !!data.success
        });
      },

      /**
      * notify is a method that is used to inform the whole application that the current event fires
      * @param <number> newValue
      */
      notify : function (newValue) {
        sandbox.notify({
          type : 'newYenInputValue',
          data : {
            value : newValue
          }
        });
      }

    }

  });

}) (Core);

