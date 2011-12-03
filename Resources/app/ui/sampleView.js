tt.ui.sample = {};
(function(){



	/**
	 * タブをつくる
	 * 
	 * @params object config コンフィグオブジェクト
	 * @return	object tab	タブオブジェクト
	 */
	tt.ui.sample.createTab = function(config){
		var tab = Ti.UI.createTab({
			title: 'tab sample',
			barColor: '#666',
			window: tt.ui.sample.createWindow()
		});

		return tab;
	}



	tt.ui.sample.createWindow = function(config){
		var win = Ti.UI.createWindow({
			title: 'window 1',
			backgroundColor: '#FFF',
			layout: 'vertical'
		});

		var view = Ti.UI.createView({
			backgroundColor: '#F00',
			borderColor: '#000',
			borderRadius: 3,
			width: 200,
			height: 200,
			//layout: 'horizontal'
			//top: 0,
			//left: 0
			//bottom: 0,
			//right: 0
		});

		var view1 = Ti.UI.createView({
			backgroundColor: '#900',
			borderColor: '#FFF',
			borderRadius: 3,
			width: 150,
			height: 150,
		});
		view.add(view1);

		var lb = Ti.UI.createLabel({
			text: 'sample',
			borderColor: '#000',
			borderRadius: 5,
			color: '#000'
		});
		view1.add(lb);
		
		var im = Ti.UI.createImageView({
			image: '/images/pcon.png',
			width: 200,
			height: 200,
			hires: true
		});
		view1.add(im);

		im.addEventListener('click', function(e){
			//alert('click');
			im.animate({
				//width: 300,
				//height: 500,
				duration: 1000,
				transform: Ti.UI.create2DMatrix().rotate(30),
				opacity: 0
			}, function(e){
				alert('complete');
			});
		});
		
		/*
		im.animate({
			width: 300
		});
		*/

		win.add(view);

		viewNext = Ti.UI.createView({
			top: 5,
			width: 200,
			height: 100,
			backgroundColor: '#036'
		});

		win.add(viewNext);

		/*
		var lb = Ti.UI.createLabel({
			text: 'sample text',
			font: {
				fontSize: 16,
				fontWight: 'bold'
			},
			color: '#F00',
			width: 'auto'
		});

		win.add(lb);
		*/

		return win;
	}



})();
