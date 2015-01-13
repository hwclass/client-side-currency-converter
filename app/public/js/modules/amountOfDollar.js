//amountOfDollar module

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
          url : 'http://www.freecurrencyconverterapi.com/api/v2/convert?q=USD_EUR',
          crossDomain: true,
          dataType: 'jsonp',
          success: function(data) {
            self.$amountOfDollar[0].value = notifiedData * data.results['USD_EUR'].val;
          }
        });
      },

      newYenInputValue : function (data) {
        var self = this;
        var notifiedData = data.value;
        sandbox.x('$').ajax({
          type: 'GET',
          url : 'http://www.freecurrencyconverterapi.com/api/v2/convert?q=USD_JPY',
          crossDomain: true,
          dataType: 'jsonp',
          success: function(data) {
            self.$amountOfDollar[0].value = notifiedData * data.results['USD_JPY'].val;
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

