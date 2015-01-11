//amountOfDollar module

(function(Core) {
	
  Core.register('amountOfDollar', funciton (sandbox) {

    return {

      init : function () {
        console.log('amountOfDollar initialized.');
        this.$amountOfDollar = sandbox.x('$')('amountOfDollar');
        this.addListeners();
      },

      addListeners : function () {
        this.$amountOfDollar.on('change', this.onChange.bind(this));
      },

      onChange : function () {
        var newValue = this.$amountOfDollar[0].value;
        this.notify(newValue);
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

