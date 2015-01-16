/*
 * Module :: amountOfDollar.js
 * Info : Module for the input element of dollar currency.
 */

(function(Core) {
	
  Core.register('amountOfDollar', function (sandbox) {

    return {

      init : function () {
        this.$amountOfDollar = sandbox.x('$')('#amountOfDollar');
        this.addListeners();
        this.listen();
      },

      addListeners : function () {
        this.$amountOfDollar.on('keypress', this.onKeypress.bind(this));
      },

      listen :  function () {
        sandbox.listen('newEuroInputValue', this.newEuroInputValue, this);
        sandbox.listen('newYenInputValue', this.newYenInputValue, this);
      },

      onKeypress : function () {
        var self = this;
        setTimeout(function () {
          var newValue = self.$amountOfDollar[0].value;
          self.notify(newValue);
        }, 0);
      },

      newEuroInputValue : function (data) {
        var self = this;
        var notifiedData = data.value;
        sandbox.x('$').ajax({
          type: 'GET',
          url : 'http://www.freecurrencyconverterapi.com/api/v2/convert?q='+sandbox.x('config').CURRENCY.EURO+'_'+sandbox.x('config').CURRENCY.DOLLAR,
          crossDomain: true,
          dataType: 'jsonp',
          success: function(data) {
            if (!isNaN(notifiedData)) {
              self.$amountOfDollar[0].value = sandbox.x('numeral')(parseInt(notifiedData) * data.results['EUR_USD'].val).format('0,0.00[0]');
            }
          }
        });
      },

      newYenInputValue : function (data) {
        var self = this;
        var notifiedData = data.value;
        sandbox.x('$').ajax({
          type: 'GET',
          url : 'http://www.freecurrencyconverterapi.com/api/v2/convert?q='+sandbox.x('config').CURRENCY.YEN+'_'+sandbox.x('config').CURRENCY.DOLLAR,
          crossDomain: true,
          dataType: 'jsonp',
          success: function(data) {
            if (!isNaN(notifiedData)) {
              self.$amountOfDollar[0].value = sandbox.x('numeral')(parseInt(notifiedData) * data.results['JPY_USD'].val).format("0,0.00[0]");
            }
          }
        });
      },

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

