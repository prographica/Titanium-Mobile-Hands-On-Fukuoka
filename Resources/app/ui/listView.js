tt.ui.list = {};
(function(){

	var tab = null;

	/**
	 * タブをつくる
	 * 
	 * @params object config コンフィグオブジェクト
	 * @return	object tab	タブオブジェクト
	 */
	tt.ui.list.createTab = function(config){
		tab = Ti.UI.createTab({
			title: 'list sample',
			barColor: '#666',
			window: tt.ui.list.createWindow()
		});

		return tab;
	}



	tt.ui.list.createWindow = function()
	{
		var win = Ti.UI.createWindow();
		win.add(tt.ui.list.createView());
		return win;
	}



	tt.ui.list.createView = function(config)
	{

		var url = "https://api.twitter.com/1/statuses/public_timeline.json?count=3&include_entities=true";
		var xhr = Ti.Network.createHTTPClient();
		xhr.open('GET', url);

		xhr.onload = function()
		{
			var res = JSON.parse(xhr.responseText);

			var arr = [];
			res.forEach(function(r){
			//for(var i = 0; i < 10; i++){
				var row = Ti.UI.createTableViewRow({
					height: 40,
					backgroundColor: '#333'
				});
	
				row.add(Ti.UI.createImageView({
					left: 3,
					top: 3,
					width: 30,
					height: 30,
					image: '/images/pcon.png'
				}));
	
				row.add(Ti.UI.createLabel({
					text: r.text,
					left: 36,
					top: 3,
					color: '#FFF',
					height: 20
				}));
				
				row.add(Ti.UI.createLabel({
					text: r.created_at,
					left: 36,
					top: 25,
					font: {
						fontSize: 10
					},
					color: '#FFF'
				}));
	
				arr.push(row);
			});
			view.setData(arr);
			return;
		}
		xhr.send();
		
		/*
		var data = [
			{
				title: 'AAA',
				datetime: '2001/01/01'
			},
			{
				title: 'BBB',
				datetime: '2002/01/02'
			}
		];
		*/

		var view = Ti.UI.createTableView({
			//data: arr
		});
		view.addEventListener('click', function(e){
			//Ti.API.debug(e);
			var nwin = Ti.UI.createWindow({
				backgroundColor: '#F00',
				title: 'Next Window'
			});

			var lb = Ti.UI.createLabel({
				text: 'sample',
				color: '#FFF'
			});
			nwin.add(lb);

			tab.open(nwin);
			return;
		});

		return view;
	}



})();
