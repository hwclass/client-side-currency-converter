//amountOfDollar module

(function(Core) {
	
  Core.register('amountOfDollar', function (sandbox) {

    return {

      init : function () {
        console.log('amountOfDollar initialized.');
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
        console.log('amountOfDollar input changed.');
        var newValue = this.$amountOfDollar[0].value;
        this.notify(newValue);
      },

      newEuroInputValue : function (data) {
        console.log('newEuroInputValue:', data.value);
      },

      newYenInputValue : function (data) {
        console.log('newYenInputValue', data.value);
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

