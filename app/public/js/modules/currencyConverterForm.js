/*
 * Module :: currentConverterForm.js
 * Info : Module for form wrapping the inputs.
 */

(function(Core) {
  
  Core.register('currencyConverterForm', function(sandbox) {
  
    return {
      
      /**
       * init is a method that is used to make the listeners add and start
       */
      init: function() {
        this.$currencyConverterForm = sandbox.use('$')('#currencyConverterForm');
        this.listen();
      },

      /**
       * listen is a method that is used to listen custom events throughtout the application for this module
       */
      listen: function() {
        sandbox.listen('newDollarInputValue', this.newDollarInputValue, this);
        sandbox.listen('newEuroInputValue', this.newEuroInputValue, this);
        sandbox.listen('newYenInputValue', this.newYenInputValue, this);
        sandbox.listen('newLiraInputValue', this.newLiraInputValue, this);
        sandbox.listen('newSterlinInputValue', this.newSterlinInputValue, this);
      },

      /**
       * newDollarInputValue is a method to listen to the entering keys in the Dollar currency input.
       */
      newDollarInputValue : function (data) {
        console.log('newDollarInputValue:', data.value);
      },

      /**
       * newEuroInputValue is a method to listen to the entering keys in the Euro currency input.
       */
      newEuroInputValue : function (data) {
        console.log('newEuroInputValue:', data.value);
      },

      /**
       * newYenInputValue is a method to listen to the entering keys in the Yen currency input.
       */
      newYenInputValue : function (data) {
        console.log('newYenInputValue', data.value);
      },

      /**
       * newYenInputValue is a method to listen to the entering keys in the Lira currency input.
       */
      newLiraInputValue : function (data) {
        console.log('newLiraInputValue', data.value);
      },

      /**
       * newYenInputValue is a method to listen to the entering keys in the Sterlin currency input.
       */
      newSterlinInputValue : function (data) {
        console.log('newSterlinInputValue', data.value);
      }

    }

  });

} (Core));