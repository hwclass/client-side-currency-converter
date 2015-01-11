//amountOfYen module

(function(Core) {
	
  Core.register('amountOfYen', function (sandbox) {

    return {

      init : function () {
        console.log('amountOfYen initialized.');
        this.$amountOfYen = sandbox.x('$')('#amountOfYen');
        this.addListeners();
      },

      addListeners : function () {
        this.$amountOfYen.on('change', this.onChange.bind(this));
      },

      onChange : function () {
        console.log('amountOfYen input changed.');
        var newValue = this.$amountOfYen[0].value;
        this.notify(newValue);
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

