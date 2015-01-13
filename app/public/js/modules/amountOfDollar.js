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
        this.$amountOfDollar.on('change', this.onChange.bind(this));
      },

      listen :  function () {
        sandbox.listen('newEuroInputValue', this.newEuroInputValue, this);
        sandbox.listen('newYenInputValue', this.newYenInputValue, this);
      },

      onChange : function () {
        var newValue = this.$amountOfDollar[0].value;
        this.notify(newValue);
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
            self.$amountOfDollar[0].value = sandbox.x('numeral')(notifiedData * data.results['EUR_USD'].val).format('0,0.00[0]');
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
            self.$amountOfDollar[0].value = sandbox.x('numeral')(notifiedData * data.results['JPY_USD'].val).format("0,0.00[0]");
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

