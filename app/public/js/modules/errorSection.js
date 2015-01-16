/*
 * Module :: errorSection.js
 * Info : Module for presenting the form errors.
 */

(function(Core) {
	
  Core.register('errorSection', function (sandbox) {

    return {

      /**
       * init is a method that is used to make the listeners add and start
       */
    	init : function () {
    		this.$errorSection = sandbox.x('$')('#errorSection');
        this.listen();
    	},

      /**
       * listen is a method that is used to listen custom events throughtout the application for this module
       */
    	listen : function () {
    		sandbox.listen('newDollarInputValue', this.newDollarInputValue, this);
    		sandbox.listen('newEuroInputValue', this.newEuroInputValue, this);
    		sandbox.listen('newYenInputValue', this.newYenInputValue, this);
    	},

      /**
       * newDollarInputValue is a method to listen to the entering keys in the Dollar currency input and present error.
       */
    	newDollarInputValue : function (data) {
    		if (isNaN(data.value)) {
    			this.$errorSection.html(sandbox.x('config').ERROR.notNumeric);
    		} else {
    			this.$errorSection.html('');
    		}
    	},

      /**
       * newEuroInputValue is a method to listen to the entering keys in the Euro currency input and present error.
       */
    	newEuroInputValue : function (data) {
    		if (isNaN(data.value)) {
    			this.$errorSection.html(sandbox.x('config').ERROR.notNumeric);
    		} else {
    			this.$errorSection.html('');
    		}
    	},

      /**
       * newYenInputValue is a method to listen to the entering keys in the Yen currency input and present error.
       */
    	newYenInputValue : function (data) {
    		if (isNaN(data.value)) {
    			this.$errorSection.html(sandbox.x('config').ERROR.notNumeric);
    		} else {
    			this.$errorSection.html('');
    		}
    	}

    }

   });

})(Core);