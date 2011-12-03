tt.ui = {};
(function(){


	tt.ui.createApplicationWindow = function(config){

		//Ti.API.debug(config);
		
		var tab = Ti.UI.createTabGroup();
		tab.addTab(tt.ui.sample.createTab());
		tab.addTab(tt.ui.list.createTab());

		return tab;
	}



})();

Ti.include(
	'/app/ui/sampleView.js',
	'/app/ui/listView.js'
);
