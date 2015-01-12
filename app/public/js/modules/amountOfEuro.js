//amountOfEuro module

(function(Core) {
	
  Core.register('amountOfEuro', function (sandbox) {

    return {

      init : function () {
        console.log('amountOfEuro initialized.');
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
        console.log('amountOfEuro input changed.');
        var newValue = this.$amountOfEuro[0].value;
        this.notify(newValue);
      },

      newDollarInputValue : function (data) {
        console.log('newDollarInputValue:', data.value);
        sandbox.x('$').ajax({
          type: 'GET',
          url : 'http://www.freecurrencyconverterapi.com/api/v2/convert?q=USD_TRY,TRY_USD',
          crossDomain: true,
          dataType: 'jsonp',
          success: function(data) {
            console.dir(data);
          }
        });
      },

      newYenInputValue : function (data) {
        console.log('newYenInputValue', data.value);
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

