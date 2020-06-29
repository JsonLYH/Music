$(document).ready(function(){
				$('[data-toggle="tooltip"]').tooltip();
			})
			$(document).ready(function(){
				$(".navbar a,footer a[href='#myPage']").on('click',function(event){
					event.preventDefault();var hash = this.hash;
					用animate()方法增加滚动效果
					$('html,body').animate({
						scrollTop:$(hash).offset().top
					},900, function(){
						window.location.hash = hash;
					})
				})
			})
			
var map = new BMap.Map("baiduMap");  //创建Map实挒
		map.centerAndZoom(new BMap.Point(114.309531, 30.59619),50);  
		//map.centerAndZoom(new BMap.point(116.404,39.915),11);  //初始化地图，设置中心点坐标和地图级别
		map.addControl(new BMap.MapTypeControl());  //添加地图类型控件
		map.setCurrentCity("武汉");  //设置地图显示的城市此项是必须设置的
		map.enableScrOllWheelZoom(true);  //开启鼠标滚轮缩放
		

   $(window).scroll(function(){
		        //下面这句主要是获取网页的总高度，主要是考虑兼容性所以把Ie支持的documentElement也写了，这个方法至少支持IE8
		        var htmlHeight=document.body.scrollHeight||document.documentElement.scrollHeight;
		        //clientHeight是网页在浏览器中的可视高度，
		        var clientHeight=document.body.clientHeight||document.documentElement.clientHeight;
		        //scrollTop是浏览器滚动条的top位置，
		        var scrollTop=document.body.scrollTop||document.documentElement.scrollTop;
		        //通过判断滚动条的top位置与可视网页之和与整个网页的高度是否相等来决定是否加载内容；
		        if(scrollTop+clientHeight==htmlHeight){
		             addLi();
		        }
		    })
			