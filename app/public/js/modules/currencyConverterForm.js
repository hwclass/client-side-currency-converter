//Currency Converter Form

(function(Core) {
  
  Core.register('currencyConverterForm', function(sandbox) {
  
    return {
      
      init: function() {
        this.$currencyConverterForm = sandbox.x('$')('#currencyConverterForm');
        this.$amountInput = this.$currencyConverterForm.find('#amount');
        this.addListeners();
      },

      addListeners: function() {
        this.$currencyConverterForm.on('submit', this.onSubmit.bind(this));
      },

      onSubmit: function(e) {
        e.preventDefault();
        var newAmount = this.$amountInput[0].value;
        this.$amountInput[0].value = '';
        this.notify(newAmount);
      },

      notify: function(newAmount) {
        sandbox.notify({
          type: 'newAmount',
          data: {
            amount : newAmount
          }
        });
      }

    }

  });

} (Core));