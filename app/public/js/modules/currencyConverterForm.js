//Currency Converter Form

(function(Core) {
  
  Core.register('currencyConverterForm', function(sandbox) {
  
    return {
      
      init: function() {
        this.$currencyConverterForm = sandbox.x('$')('#currencyConverterForm');
        this.listen();
      },

      listen: function() {
        sandbox.listen('newDollarInputValue', this.newDollarInputValue, this);
        sandbox.listen('newEuroInputValue', this.newEuroInputValue, this);
        sandbox.listen('newYenInputValue', this.newYenInputValue, this);
      },

      newDollarInputValue : function (data) {
        console.log('newDollarInputValue:', data.value);
      },

      newEuroInputValue : function (data) {
        console.log('newEuroInputValue:', data.value);
      },

      newYenInputValue : function (data) {
        console.log('newYenInputValue', data.value);
      }

    }

  });

} (Core));