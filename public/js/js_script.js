window.onload = function () {
	
	class MenuItem {
	  constructor(name, kCal, if_gluten, if_lactose) {
		this.Name = name;
		this.KCal =kCal;
		this.If_gluten =if_gluten;
		this.If_lactose =if_lactose;
	  }

	  get name() {
		return this.Name;
	  }
	  get kCal() {
		return this.KCal;
	  }
	  get if_gluten(){
		return this.If_gluten;
	  }
	  get if_lactose(){
		return this.If_lactose;
	  }  
	}

	function create_burger(){
		var che = new MenuItem("cheese burger",123,true,false);
		var pork = new MenuItem("pork burger",123,true,true);
		var chi = new MenuItem("chicken burger",123,true,false);
		var veg = new MenuItem("vegan burger",123,false,false);
		var mb = new MenuItem("meatball burger",123,false,true);
		var burgers = [che,pork,chi,veg,mb];
		return burgers;
	}


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
					"street":document.getElementById('street').value,
					"house":document.getElementById('house').value,
					"payment":document.getElementById('payment').value,
					"gender":gender,
					"burgers":burgers
				};
				
				for(var i in submit_form){
					var node = document.createElement("div");
					var textnode = document.createTextNode(i+": "+submit_form[i]);
					node.appendChild(textnode);
					document.getElementById('be_submitted').appendChild(node);
				}

			}
		}
	});




}