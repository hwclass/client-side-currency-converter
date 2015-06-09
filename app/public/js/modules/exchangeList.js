//exchangeList

(function(Core) {

  Core.register('exchangeList', function(sandbox) {
  
    return {
  
      init: function() {
        this.$exchangeList = sandbox.use('$')('#exchangeList');
        this.listen();
      },

      listen: function() {
        sandbox.listen('newDollarInputValue', this.newAmount, this);
      },

      newAmount: function(data) {
        var newAmountHtml = this.getHtml(data);
        this.$exchangeList.append(newAmountHtml);
      },

      getHtml: function(data) {
        var li = sandbox.use('$')('<li class="currencyExchangeItem">');
        li.append(data.value + '<br/>');
        return li;
      }

    };

  });

} (Core));