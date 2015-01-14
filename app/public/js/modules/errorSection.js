/*
 * Module :: errorSection.js
 * Info : Module for presenting the form errors.
 */

(function(Core) {
	
  Core.register('errorSection', function (sandbox) {

    return {

    	init : function () {
    		this.$errorSection = sandbox.x('$')('#errorSection');
        this.listen();
    	},

    	listen : function () {
    		sandbox.listen('newDollarInputValue', this.newDollarInputValue, this);
    		sandbox.listen('newEuroInputValue', this.newEuroInputValue, this);
    		sandbox.listen('newYenInputValue', this.newYenInputValue, this);
    	},

    	newDollarInputValue : function (data) {
    		if (isNaN(data.value)) {
    			this.$errorSection.html(sandbox.x('config').ERROR.notNumeric);
    		} else {
    			this.$errorSection.html('');
    		}
    	},

    	newEuroInputValue : function (data) {
    		if (isNaN(data.value)) {
    			this.$errorSection.html(sandbox.x('config').ERROR.notNumeric);
    		} else {
    			this.$errorSection.html('');
    		}
    	},

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