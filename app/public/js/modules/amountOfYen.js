/*
 * Module :: amountOfYen.js
 * Info : Module for the input element of yen currency.
 */

(function(Core) {
	
  Core.register('amountOfYen', function (sandbox) {

    return {

      init : function () {
        this.$amountOfYen = sandbox.x('$')('#amountOfYen');
        this.addListeners();
        this.listen();
      },

      addListeners : function () {
        this.$amountOfYen.on('keypress', this.onKeypress.bind(this));
      },

      listen :  function () {
        sandbox.listen('newDollarInputValue', this.newDollarInputValue, this);
        sandbox.listen('newEuroInputValue', this.newEuroInputValue, this);
      },

      onKeypress : function () {
        var self = this;
        setTimeout(function () {
          var newValue = self.$amountOfYen[0].value;
          self.notify(newValue);
        }, 0);
      },

      newDollarInputValue : function (data) {
        var self = this;
        var notifiedData = data.value;
        sandbox.x('$').ajax({
          type: 'GET',
          url : 'http://www.freecurrencyconverterapi.com/api/v2/convert?q='+sandbox.x('config').CURRENCY.DOLLAR+'_'+sandbox.x('config').CURRENCY.YEN,
          crossDomain: true,
          dataType: 'jsonp',
          success: function(data) {
            if (!isNaN(notifiedData)) {
              self.$amountOfYen[0].value = sandbox.x('numeral')(parseInt(notifiedData) * data.results['USD_JPY'].val).format("0,0.00[0]");
            }
          }
        });
      },

      newEuroInputValue : function (data) {
        var self = this;
        var notifiedData = data.value;
        sandbox.x('$').ajax({
          type: 'GET',
          url : 'http://www.freecurrencyconverterapi.com/api/v2/convert?q='+sandbox.x('config').CURRENCY.EURO+'_'+sandbox.x('config').CURRENCY.YEN,
          crossDomain: true,
          dataType: 'jsonp',
          success: function(data) {
            if (!isNaN(notifiedData)) {
              self.$amountOfYen[0].value = sandbox.x('numeral')(parseInt(notifiedData) * data.results['EUR_JPY'].val).format("0,0.00[0]");
            }
          }
        });
      },

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

