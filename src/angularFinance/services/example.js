/**
 * A example module
 * @module example
 * @namespace ng.example
 */

/**
 * A example service
 * @class exampleService
 * @since 0.0.1
 */
var exampleService = function(){
	var serviceName = '';
	/**
	 * Get the service name.
	 * @method getName
	 * @return The service name.
	 */
	this.getName = function(){
		return serviceName;
	};
	
	/**
	 * Set the service name.
	 * @method setName
	 * @param {String} name The service name.
	 */
	this.setName = function(name){
		serviceName = name;
	};
};

angular.module("finance.example",[])
.service("exampleService",exampleService);