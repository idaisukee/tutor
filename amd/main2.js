/*global require*/
'use strict';

// Require.js allows us to configure shortcut alias
require.config({
	// The shim config allows us to configure dependencies for
	// scripts that do not call define() to register a module
	shim: {

		nonAmdIeremii: {
			exports: 'nai1'
		}
	},
	paths: {
		nonAmdIeremii: '6-0.js'
	}
});

require([
	'6-0'
], function () {
	/*jshint nonew:false*/
	// Initialize routing and start Backbone.history()

	// Initialize the application view
	nai.bow();
});
