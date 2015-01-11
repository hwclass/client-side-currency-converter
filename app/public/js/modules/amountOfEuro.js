//amountOfEuro module

(function(Core) {
	
  Core.register('amountOfEuro', funciton (sandbox) {

    return {

      init : function () {
        console.log('amountOfEuro initialized.');
        this.$amountOfEuro = sandbox.x('$')('amountOfEuro');
        this.addListeners();
      },

      addListeners : function () {
        this.$amountOfEuro.on('change', this.onChange.bind(this));
      },

      onChange : function () {
        var newValue = this.$amountOfEuro[0].value;
        this.notify(newValue);
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

