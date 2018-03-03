sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
	], function(Controller, JSONModel) {
	"use strict";
	return Controller.extend("ViaCEP.controller.View1", {

		// dados: {
		// 	"cep": "89012-400",
		// 	"logradouro": "Rua Sete de Setembro",
		// 	"complemento": "de 1822 a 3100 - lado par",
		// 	"bairro": "Centro",
		// 	"localidade": "Blumenau",
		// 	"uf": "SC",
		// 	"unidade": "",
		// 	"ibge": "4202404",
		// 	"gia": ""
		// },
		
		onInit: function(){
			var oModel = new JSONModel(this.dados);
			
			// @type sap.m.Input
			// var oInputLogradouro = this.byId("logradouro");
			// oInputLogradouro.setModel(oModel);
			
			this.getView().setModel(oModel);
			
			var oViewModel = new JSONModel({
				state: {
					busy: true
				}	
			});
			this.getView().setModel(oViewModel, "modeloLocal");
			
		},

		/**
		 *@memberOf ViaCEP.controller.View1
		 */
		onSearchCEP: function(oEvent) {
			
			var oSearchField = oEvent.getSource();
			var sCEP = oSearchField.getValue();
			// var sUrl = "https://viacep.com.br/ws/" + sCEP + "/json/";
			var sUrl = "https://viacep.com.br/ws/${sCEP}/json/"; 
			this.getView().getModel().loadData(sUrl);
			
			var oViewModel = this.getView().getModel("modeloLocal");
			oViewModel.setProperty("/state/busy", false); 
			
		}
	});
});