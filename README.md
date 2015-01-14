client-side-currency-converter
==============================

A sample app to be a challange for a company.

It is developed basicly on Node.js platform with Express in the server-side, Core.js in the client-side.

### Module Usage
<pre lang="javascript">
<code>
(function(Core) {
	
  Core.register('amountOfDollar', function (sandbox) {

    return {

      init : function () {
        console.log('This is the initialization method for the module.');
        this.$amountOfDollar = sandbox.x('$')('#amountOfDollar');
        this.addListeners();
        this.listen();
      },

      addListeners : function () {
        console.log('This is the method for binding current events with elements.');
      },

      listen : function () {
        console.log('This method is to listen custom events.');
      },

      onChange : function () {
        console.log('This is our change method for input text element with id amountofDollar.');
      },

      newEuroInputValue : function (data) {
        console.log('This method is fetch when notified if custom event with called newEuroInputValue is triggered.');
        console.dir(data.value);
      },

      notify : function (newValue) {
        console.log('This method is used to notify other modules listeners regards to its data within value property.');
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

</code>
</pre>

### Extending Libraries, etc. (extensions.js)
<pre lang="javascript">
<code>
  Core.extend('$', jQuery);
  Core.extend('numeral', numeral);
  Core.extend('config', config);
</code>
</pre>

### Getting modules worked, etc. (boot.js)
<pre lang="javascript">
<code>
  /*Start all modules*/
  Core.startAll();

  /*Start specifically*/
  Core.start('moduleName');

  /*Stop all modules*/
  Core.stopAll();

  /*Stop specifically*/
  Core.stop('moduleName');
</code>
</pre>