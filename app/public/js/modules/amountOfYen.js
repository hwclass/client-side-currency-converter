//amountOfYen module

(function(Core) {
	
  Core.register('amountOfYen', function (sandbox) {

    return {

      init : function () {
        console.log('amountOfYen initialized.');
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
        console.log('amountOfYen input changed.');
        var newValue = this.$amountOfYen[0].value;
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

      newEuroInputValue : function (data) {
        console.log('newEuroInputValue', data.value);
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

