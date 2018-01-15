new_element=document.createElement('script');
new_element.setAttribute('type','text/javascript');
new_element.setAttribute('src','../public/methodEncapsulation.js');
document.body.appendChild(new_element);

window.onload=function(){


	// 一级分类菜单的点击事件
	var listHead=document.getElementById('listHead');
	eventUtil.addHandler(listHead,'click',function(){
		var shopShow=document.getElementById('shopShow');
		if(eventUtil.hasClass(shopShow,'hide')){
			eventUtil.removeClass(shopShow,'hide');
		}else{
			eventUtil.addClass(shopShow,'hide');
		}
		
	});

	// 二级分类菜单的滑过事件
	var listShow_items=eventUtil.getClassByName(shopShow,'shopShow_item');
	for(var i=0;i<listShow_items.length;i++){
		eventUtil.addHandler(listShow_items[i],'mouseover',function(){
			eventUtil.addClass(this,'shopShow_active');
		});
		eventUtil.addHandler(listShow_items[i],'mouseout',function(){
			eventUtil.removeClass(this,'shopShow_active');
		});

		// 阻止冒泡
		eventUtil.addHandler(listShow_items[i],'click',function(){
			var event=eventUtil.getEvent(event);
			eventUtil.stopBubble(event);
		});
	}


	var lists=document.getElementById('list').getElementsByTagName('li');
	console.log(lists);
	for(var i=0;i<lists.length;i++){
		lists[i].id=i+1;
		eventUtil.addHandler(lists[i],'click',function(){
			console.log('click');
			window.location.href='file:///C:/Users/Administrator/Desktop/web/webFrontEnd/webCode/EcommerceWebsite/productClassification'+'_'+this.id+'.html';
		});
	}

}