sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("com.ibmNavigation.controller.View1", {
		goview2: function () {
//This code was generated by the layout editor.

this.getOwnerComponent().getRouter().navTo("route2View2");

		}

	});
});