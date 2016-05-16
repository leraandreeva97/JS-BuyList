$(function(){

	function addItem(title)	{
		var LIST = $('.list');
		var ITEM_TEMPLATE	=	$('.item').html();

		var LIST2 = $('.list-available');
		var AVAILABLE_TEMPLATE	=	$('.item-available').html();

		var LIST3 = $('.list-bought');

		var node = $(ITEM_TEMPLATE);	//Create	new	HTML	node
		node.find(".title").text(title);	//Set	product	title
		node.find(".new-name").val(title);
		LIST.append(node);

		var node2 = $(AVAILABLE_TEMPLATE);	//Create	new	HTML	node
		node2.find(".title").text(title);	//Set	product	title
		LIST2.append(node2);

		//Delete	Action
		node.find(".but-x").click(function(){
			node.remove();
			node2.remove();
		});

		node.find(".button-minus").click(function(){
			var val = parseInt( node.find('.grey1').html() );
			if (val != 1) {
				val = val-1;
				node.find('.grey1').html(val);
				node2.find('.remainder').html(val);
			}
			if (val == 1) {
				node.find('.button-minus').removeClass("active");
			}
		});

		node.find(".button-plus").click(function(){
			var val = parseInt( node.find('.grey1').html() );
			val = val+1;
			node.find('.grey1').html(val);
			node.find('.button-minus').addClass("active");
			node2.find('.remainder').html(val);
		});

		node.find(".but-buy").click(function(){
			node.find('.but-buy').addClass("hide");
			node.find('.unbuy').removeClass("hide");
			node.find('.button-minus').addClass("hide");
			node.find('.button-plus').addClass("hide");
			node.find(".but-x").addClass("hide");
			node.find('.title').addClass("line");
			node2.remove;
			node2.find('.title').addClass("line");
			node2.find('.remainder').addClass("line");
			LIST3.append(node2);
		});

		node.find(".unbuy").click(function(){
			node.find('.but-buy').removeClass("hide");
			node.find('.unbuy').addClass("hide");
			node.find('.button-minus').removeClass("hide");
			node.find('.button-plus').removeClass("hide");
			node.find(".but-x").removeClass("hide");
			node.find('.title').removeClass("line");
			node2.remove;
			node2.find('.title').removeClass("line");
			node2.find('.remainder').removeClass("line");
			LIST2.append(node2);
		});

		node.find(".title").click(function(){
			node.find('.new-name').removeClass("hide");
			node.find('.title').addClass("hide");
			node.find('.new-name').focus();
		});

		node.find('.new-name').blur(function(){
			node.find('.title').html(node.find('.new-name').val());
			node2.find('.title').html(node.find('.new-name').val());
			node.find('.new-name').addClass("hide");
			node.find('.title').removeClass("hide");
		});

	}

	function buyItem(title)	{
		var LIST	=	$('.list-of-items');
		var ITEM_TEMPLATE	=	$('.one-item').html();

		var node = $(ITEM_TEMPLATE);	//Create	new	HTML	node
		node.find(".title").text(title);	//Set	product	title
		//Delete	Action
		node.find(".but-x").click(function(){
			node.remove();
		});
		LIST.append(node);
	}

	$('.but-add').click(function(){
		var title = $(".input").val();
		addItem(title);
		$(".input").val("");
	});

	addItem("Помідори");
	addItem("Сир");
	addItem("Печиво");

});