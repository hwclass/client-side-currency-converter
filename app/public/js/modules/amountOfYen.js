//amountOfYen module

(function(Core) {
	
  Core.register('amountOfYen', function (sandbox) {

    return {

      init : function () {
        this.$amountOfYen = sandbox.x('$')('#amountOfYen');
        this.addListeners();
        this.listen();
      },

      addListeners : function () {
        this.$amountOfYen.on('change', this.onChange.bind(this));
      },

      listen :  function () {
        sandbox.listen('newDollarInputValue', this.newDollarInputValue, this);
        sandbox.listen('newEuroInputValue', this.newEuroInputValue, this);
      },

      onChange : function () {
        var newValue = this.$amountOfYen[0].value;
        this.notify(newValue);
      },

      newDollarInputValue : function (data) {
        var self = this;
        var notifiedData = data.value;
        sandbox.x('$').ajax({
          type: 'GET',
          url : 'http://www.freecurrencyconverterapi.com/api/v2/convert?q=JPY_USD',
          crossDomain: true,
          dataType: 'jsonp',
          success: function(data) {
            self.$amountOfYen[0].value = notifiedData * data.results['JPY_USD'].val;
          }
        });
      },

      newEuroInputValue : function (data) {
        var self = this;
        var notifiedData = data.value;
        sandbox.x('$').ajax({
          type: 'GET',
          url : 'http://www.freecurrencyconverterapi.com/api/v2/convert?q=JPY_EUR',
          crossDomain: true,
          dataType: 'jsonp',
          success: function(data) {
            self.$amountOfYen[0].value = notifiedData * data.results['JPY_EUR'].val;
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

