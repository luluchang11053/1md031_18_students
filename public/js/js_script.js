window.onload = function () {
	
	// class MenuItem {
	//   constructor(name, kCal, if_gluten, if_lactose) {
	// 	this.Name = name;
	// 	this.KCal =kCal;
	// 	this.If_gluten =if_gluten;
	// 	this.If_lactose =if_lactose;
	//   }

	//   get name() {
	// 	return this.Name;
	//   }
	//   get kCal() {
	// 	return this.KCal;
	//   }
	//   get if_gluten(){
	// 	return this.If_gluten;
	//   }
	//   get if_lactose(){
	// 	return this.If_lactose;
	//   }  
	// }

	// function create_burger(){
	// 	var beef = new MenuItem("beef burger",123,true,false);
	// 	var cheese = new MenuItem("cheese burger",123,true,true);
	// 	var chicken = new MenuItem("chicken burger",123,true,false);
	// 	var veggie = new MenuItem("veggie burger",123,false,false);
	// 	var bacon = new MenuItem("bacon burger",123,false,true);
	// 	var burgers = [beef,cheese,chicken,veggie,bacon];
	// 	return burgers;
	// }


	// var food = create_burger();
	// var burgers_src = ['che.jpg','pork.jpg','chi.jpg','veg.jpg','mb.jpg']; 


	var burgers_props = [];
	var burger_names = [];
	var burger_srcs = [];
	for(var i=0; i<food.length; i++){
		burger_names.push({name:food[i].name});
		burger_srcs.push({src:food[i].img});
		burgers_props.push({kCal:food[i].kCal, if_gluten:food[i].gluten, if_lactose:food[i].lactose})
	}

	var burger_name_view = new Vue({
		el: '#burger_name',
		data:{
			items: burger_names
		}
	});


	var burger_img_view = new Vue({
		el: '#select_image',
		data:{
			items: burger_srcs
		}
	});
		
	var burger_prop_view = new Vue({
		el: '#select_intro',
		data:{
			items: burgers_props
		}
	});	


	var burger_submit = new Vue({
		el: '#orders',
		methods: {
			markDone: function() {

				document.getElementById('customer_details').innerHTML="";
				document.getElementById('order_summary').innerHTML="";
				
				// Read gender radio
				var gender;
				Total_Obj = document.getElementsByName('gender');
				for (var i = 0; i < Total_Obj.length; i++) {
					if (Total_Obj[i].type == "radio") {
						if (Total_Obj[i].checked) {
							gender = Total_Obj[i].value;
						}
					}
				}
				
				// Read burger select
				var burgers="";
				Total_Obj = document.getElementsByName('burgers');
				for (var i = 0; i < Total_Obj.length; i++) {
					if (Total_Obj[i].type == "checkbox") {
						if (Total_Obj[i].checked) {
							burgers += Total_Obj[i].value+"  ";
						}
					}
				}
				
				var submit_form = {
					"fullname":document.getElementById('fullname').value,
					"email":document.getElementById('email').value,
					// "street":document.getElementById('street').value,
					// "house":document.getElementById('house').value,
					"payment":document.getElementById('payment').value,
					"gender":gender,
					// "burgers":burgers
				};

				if(submit_form.fullname==''||submit_form.email==''||submit_form.payment==''||submit_form.gender==''||burgers.length==0){
					document.getElementById('success').innerHTML="Form not completed!!";
					return;
				}
				else{
					document.getElementById('success').innerHTML="Success!!";
				}
				
				for(var i in submit_form){
					var node = document.createElement("div");
					var textnode = document.createTextNode(i+": "+submit_form[i]);
					node.appendChild(textnode);
					document.getElementById('be_submitted').appendChild(node);
				}

				for(var i=0; i<burgers.length; i++){
					var node = document.createElement("li");
					var textnode = document.createTextNode(burgers[i]);
					node.appendChild(textnode);
					document.getElementById('order_summary').appendChild(node);
				}

				var map = document.getElementById('map');
				var style = window.getComputedStyle(map);
				var left_x = style.getPropertyValue('left');
				var top_y = style.getPropertyValue('top');
				socket.emit("addOrder", {
										
										details: { x: parseFloat(left_x),
												   y: parseFloat(top_y) },
										orderItems: burgers,
										fullname: submit_form.fullname,
										gender: submit_form.gender,
										email: submit_form.email,
										payment: submit_form.payment
										
									  });		
			}
		}
	});




}