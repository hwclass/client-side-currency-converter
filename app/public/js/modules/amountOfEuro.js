/*
 * Module :: amountOfEuro.js
 * Info : Module for the input element of dollar currency.
 */

(function(Core) {
	
  Core.register('amountOfEuro', function (sandbox) {

    return {

      init : function () {
        this.$amountOfEuro = sandbox.x('$')('#amountOfEuro');
        this.addListeners();
        this.listen();
      },

      addListeners : function () {
        this.$amountOfEuro.on('change', this.onChange.bind(this));
      },

      listen :  function () {
        sandbox.listen('newDollarInputValue', this.newDollarInputValue, this);
        sandbox.listen('newYenInputValue', this.newYenInputValue, this);
      },

      onChange : function () {
        var newValue = this.$amountOfEuro[0].value;
        this.notify(newValue);
      },

      newDollarInputValue : function (data) {
        var self = this;
        var notifiedData = data.value;
        sandbox.x('$').ajax({
          type: 'GET',
          url : 'http://www.freecurrencyconverterapi.com/api/v2/convert?q=USD_EUR',
          crossDomain: true,
          dataType: 'jsonp',
          success: function(data) {
            self.$amountOfEuro[0].value = sandbox.x('numeral')(notifiedData * data.results['USD_EUR'].val).format("0,0.00[0]");
          }
        });
      },

      newYenInputValue : function (data) {
        var self = this;
        var notifiedData = data.value;
        sandbox.x('$').ajax({
          type: 'GET',
          url : 'http://www.freecurrencyconverterapi.com/api/v2/convert?q=JPY_EUR',
          crossDomain: true,
          dataType: 'jsonp',
          success: function(data) {
            self.$amountOfEuro[0].value = sandbox.x('numeral')(notifiedData * data.results['JPY_EUR'].val).format("0,0.00[0]");
          }
        });
      },

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

