var cantitdad= 0;
var costo_cargado = 0;
var cantitdad_iphone = 0;
var cantitdad_note_9 = 0;
var close = false;
var vtn ="";
var cantidad1 = 0;
var cantidad2 = 0;
var productos =[];
var adaptador= "";

function closed_cart(){


			$('#card_view').hide('slow',function(){


					
					$('#card_view').html("");

												



			});
		
			close = false;


}


function read_products(){

var count= 0 ;

		productos.forEach((key)=>{

						
			if(count==0){
			adaptador+=`
					<td><img src='${key.imagen_producto}' width='70'></td>
					<td>${key.nombre}</td>
					<td>Finally unveiled the Galaxy Note 9.</td>
					<td>${key.cantidad}</td>
                  `;
             }else{
             		adaptador+=`
             	<tr>
					<td><img src='${key.imagen_producto}' width='70'></td>
					<td>${key.nombre}</td>
					<td>Finally unveiled the Galaxy Note 9.</td>
					<td>${key.cantidad}</td>
                 </tr>
                  `;


             }

                  count++;

		});
	
		$('#rows_add').html(adaptador);
	
		adaptador = "";

}
function add_product(divice){


	if(divice=="iPhone-9"){


		cantidad1= $('#cantidad1').val();

		productos.push({nombre:"iPhone-9",imagen_producto:"https://t.ipadizate.es/2018/07/iPhone-9-1-640x336.jpg",cantidad:cantidad1});

		read_products();


	


	}else{

		cantitdad2= $('#cantitdad2').val();

			productos.push({nombre:"Note-9",imagen_producto:"https://i.blogs.es/1ccc43/samsung-galaxy-note-9-frontal/450_1000.jpg",cantidad:cantidad2});

			read_products();
	}



}


function agregar_producto(precio,nombre_producto){

		costo_cargado+= precio;
		cantitdad+= 1;

		$('#costo_print').html(`${cantitdad} items $${costo_cargado}.00`);

		 //alertify.success(`${nombre_producto} added to the cart successfully add success`);

		 if(nombre_producto=="iPhone-9"){

		 		cantitdad_note_9+=1;
		
		}else{

				cantitdad_iphone+=1;

		}


	}

$('document').ready(function(){
	var contact_name ;
	var contact_email;

		$('#invitar').click(()=>{

			 contact_name = $('#contact_name').val();
			 contact_email = $('#contact_email').val();

			

			if(contact_name=="" || contact_email==""){

					alertify.error("Fill both fields please");


			}else if(contact_name!="" && contact_email!=""){

			

					$('#sobre').addClass('active');
					$('#message').html("<h2 style='color:darkblue; margin-top:12%; text-algain:center; margin-left:10%;'>The supplier is accepting your request for private business channel connectivity with you as a customer</h2>");
					$('#sobre').append(`
						    <div style="height:100px; width: 500px;position: absolute; 
						    z-index:10; background:#f5ffcc; opacity:0.9; left:-400px; display:none;" id="ventana"><img src="assets/client.png" style="height:80px; width:80px; margin-left:2%; margin-top:2%; broder-radius:10px;" class='img-circle'>
						    <i style='color:blue;'>Electric Power</i>
						    <button class='btn-primary' style='margin-right:2%;' id='acept'>Accept</button><button class='btn-danger' id='cancer'>Cancer</button>

						    </div>`);
					$('#usuario_text').html(`<p style="margin-top: 15%;" id="usuario_text">${contact_name}</p>`);

					$('#ventana').show('slow');

						$('#acept').click(function(){

								$('#sobre').removeClass('active');

								$('#ventana').hide('slow');
								$('#ventana').remove();

								$('#data_read').html(`
									<div class='col-md-12'>
								
									<h1>Suppliers</h1>
									<ul class="nav nav-tabs tabbs">
										<td  data-original-title="Quotes" data-toggle="tooltip" ><button class='btn-primary'>Suppliers</button></td>
										<td  data-original-title="Quotes" data-toggle="tooltip" ><button class='btn-primary' id="Quotes">Qoutes</button></td>
										<td  data-original-title="Quotes" data-toggle="tooltip" ><button class='btn-primary'>Invoice</button></td>
									</ul>
									<table class='table' border='1'>
										<tr>
											<th>Action</th>
											<th>Company</th>
											<th>NetWork</th>
											<th>Assing</th>
										</tr>

										<tr>
											<td><button class='btn btn-success'><i class="glyphicon glyphicon-pencil "></i></button></td>
											<td>Electric Power</td>
											<td><button class='btn btn-primary' id='inv'>Inventory</button></td>
											<td>To ${contact_name}</td>
										</tr>
									</table>
									<div>
								`);

								$('#Quotes').click(()=>{

										$('#data_read').html(`	<div class='col-md-12'>
									<h1>Suppliers</h1>
									<ul class="nav nav-tabs tabbs">
										<li><button class='btn-primary' id='make_qoute'>New Qoute</button></li>
										<li><button class='btn-warning' style='margin-left:1.5%;'>Remove</button></li>
									</ul>
									<table class='table' border='1'>
									<h2>Quote Requestor to Suppliers</h2>
								
										<tr>
											<th>Action</th>
											<th>Order Number</th>
											<th>Desciption</th>
											<th>Email</th>
											<th>Order date created</th>
											<th>Total amount</th>
											<th>Status</th>
										</tr>

										<tr>
											<td><button class='btn btn-success'><i class="glyphicon glyphicon-pencil "></i></button></td>
											<td>Electric Power</td>
											<td>Electrical equipment supplier</button></td>
											<td>supplierelectric@gmail.com</td>
											<td>2018-09-28 12:13:06</td>
											<td>350.00</td>
											<td><div style='background:#00d800; width:100%; height:40px;'><strong style='margin-left:25%; margin-top:12%;'>Sent</strong></div></td>
										</tr>
									</table
									<div>`);

									$('#make_qoute').click(()=>{


												$('#data_read').html(`
												
														<div  class="col-md-12">
															<h1>Quote Requestor to Suppliers</h1><strong>quoterequestor</strong>
															<hr>
														</div>
												
													<div class="col-md-3" id="suppliers_wirite">
														<div>


															<img src="https://t.ipadizate.es/2018/07/iPhone-9-1-640x336.jpg" style='height:80px; width:80px;'>
															<input type='text' id='cantitdad1' style='width:80px;'>
															<strong>iPhone-9</strong>
															<button class='btn-primary' onclick="add_product('iPhone-9',)">Add</button>
														</div><br>
														<div>
															<img src="https://i.blogs.es/1ccc43/samsung-galaxy-note-9-frontal/450_1000.jpg" style='height:80px; width:80px;'>
															<input type='text' id='cantitdad2' style='width:80px;'>
															<strong>Note-9</strong>
															<button class='btn-primary' onclick="add_product('Note-9')">Add</button>
														</div>
													</div>
													<div class="col-md-3">
														
													</div>

													<div class="col-md-5">
													<strong style='font-size:28px;'>Product List</strong>
														<table class='table'>
															<tr>
																<td></td>	
																<td>NAME</td>
																<td>DESCRIPTION</td>
																<td>QUANTITY</td>
																<td>ACTION</td>
															</tr>
															<tr id="rows_add">

															</tr>

														</table>
														<button class='btn-primary' id="next">Next</button>
													</div>
												

												`);


											$('#next').click(()=>{


												$('#data_read').html(`
												
														<div  class="col-md-12">
															<h1>Quote Requestor to Suppliers</h1><strong>quoterequestor</strong>
															<hr>
														</div>
												
													<div class="col-md-3" id="suppliers_wirite">
														<div>


															<img src="https://t.ipadizate.es/2018/07/iPhone-9-1-640x336.jpg" style='height:80px; width:80px;'>
															<input type='text' id='cantitdad1' style='width:80px;'>
															<strong>iPhone-9</strong>
															<button class='btn-primary' onclick="add_product('iPhone-9',)">Add</button>
														</div><br>
														<div>
															<img src="https://i.blogs.es/1ccc43/samsung-galaxy-note-9-frontal/450_1000.jpg" style='height:80px; width:80px;'>
															<input type='text' id='cantitdad2' style='width:80px;'>
															<strong>Note-9</strong>
															<button class='btn-primary' onclick="add_product('Note-9')">Add</button>
														</div>
													</div>
													<div class="col-md-3" id="supplier_add">
														
													</div>

													<div class="col-md-5">
															<div id="suppliers_list"></div>
													<strong style='font-size:28px;'>Suppliers List</strong>
														<table class='table'>
															<tr>
																<td></td>	
																<td>NAME</td>
																<td>EMAIL</td>
																<td>Action</td>
															</tr>
															<tr id="rows_add">

															</tr>

														</table>
														<button class='btn-warning'>Back</button>
														<button class='btn-primary' style='float:right' id="next_end">Next</button>
													</div>
												

												`);		

												$('#suppliers_wirite').html(`
													<div>
														<img src="assets/client.png" style="height:80px; width:80px;"><br>
															<strong>Electric Power</strong>
															<button class="btn-primary" id="Electric_power">Add</button>
													</div>
												`);

												$('#Electric_power').click(()=>{

														$("#rows_add").html(`
																<td><img src='assets/client.png' class='img-responsive' style='height:50px; width:50px;'></td>
																<td>Electric Power</td>
																<td>electric_power@gmail.com</td>
																<td><button class='btn-primary' id="clear">X</button></td>
														`);


														$('#clear').click(()=>{

																$("#clear").html("");

														})

												});

											

												$('#next_end').click(()=>{


														$("#suppliers_wirite").html(`
															<div style="z-index:4; position:absolute;left:300px;" id="ventana_order">
																<div class="panel panel-default">	
																	<div class="panel-heading">
																		<strong>Confirm Order</strong>
																	</div>
																	<div class="body">
																		<table class="table">
																		<tr>
																			<td><strong>Shipping</strong></td>
																			<td><strong>Description</strong></td>
																		<tr>
																			<tr>
																				<td>
																					<select>
																						<option>4500 salisbury Road Jacksonville</option>
																					<select>
																				</td>
																				<td>
																					<input type='text' id='description'>
																				</td>

																			</tr>


																		<table>
																	</div>
																	<div class="footer">
																			<button class="btn-primary" id="send_order">Send</button>

																			<button class="btn-warning" style="float:right">Cancer</button>
																	</div>
																</div>
															</div>
														`);

														$('#send_order').click(()=>{

															var description = $('#description').val();
															var f = new Date();
															var fecha = `${f.getDate() + "/" + (f.getMonth() +1) + "/" + f.getFullYear()}`;
																$('#ventana_order').hide('slow',()=>{

																		$('#ventana_order').html("");
																		$('#data_read').html(`<h2 style="margin-left:30%">The quote has been sent correctly</h2>
																				<h1>Suppliers</h1>
																						<ul class="nav nav-tabs tabbs">
																							<li><button class='btn-primary' id='make_qoute'>New Qoute</button></li>
																							<li><button class='btn-warning' style='margin-left:1.5%;'>Remove</button></li>
																						</ul>
																						<table class='table' border='1'>
																						<h2>Quote Requestor to Suppliers</h2>
																					
																							<tr>
																								<th>Action</th>
																								<th>Order Number</th>
																								<th>Desciption</th>
																								<th>Email</th>
																								<th>Order date created</th>
																								<th>Total amount</th>
																								<th>Status</th>
																							</tr>

																							<tr>
																								<td><button class='btn btn-success'><i class="glyphicon glyphicon-pencil "></i></button></td>
																								<td>Electric Power</td>
																								<td>Electrical equipment supplier</button></td>
																								<td>supplierelectric@gmail.com</td>
																								<td>2018-09-28 12:13:06</td>
																								<td>350.00</td>
																								<td><div style='background:#00d800; width:100%; height:40px;'><strong style='margin-left:25%; margin-top:12%;'>Sent</strong></div></td>
																							</tr>


																							<tr>
																								<td><button class='btn btn-success'><i class="glyphicon glyphicon-pencil "></i></button></td>
																								<td>Electric Power</td>
																								<td>${description}</button></td>
																								<td>supplierelectric@gmail.com</td>
																								<td>${fecha}</td>
																								<td>350.00</td>
																								<td><div style='background:#dc0000; width:100%; height:40px;'><strong style='margin-left:25%; margin-top:12%;'>Peding</strong></div></td>
																							</tr>

																						</table
																						<div>


																		`);	

																});
														});

												});



											});


									});



								});

							$('#inv').click(function(){

								 vtn =`
									<h1>Inventory by Electric Power</h1>
									<div style='position:absolute;left:1000px;top:90px;'>
									<button style='color:white; width:200px;' class='btn-primary'><div id='costo_print'>Items</div></button><button class='btn-warning'  id='cart'>Checkout</button>
									<button class='btn-danger' id='close'>X</button>
									</div>
									<div id="card_view">
									</div>
								<table class='table' border='1'>
										<tr>
											<th>Action</th>
											<th>Image</th>
											<th>Product</th>
											<th>Model</th>
											<th>Price</th>
										</tr>

										<tr>
											<td><button class='btn btn-success' onclick='agregar_producto(1500,"iPhone-9")'><i class="glyphicon glyphicon-plus"></i></button></td>
											<td><img src='https://t.ipadizate.es/2018/07/iPhone-9-1-640x336.jpg' width='100'></td>
											<td>iPhone-9 </td>
											<td>A</td>
											<td>1500.00</td>
										</tr>
											<tr>
											<td><button class='btn btn-success'><i class="glyphicon glyphicon-plus" onclick='agregar_producto(1000,"Note 9")'></button></i></td>
											<td><img src='https://i.blogs.es/1ccc43/samsung-galaxy-note-9-frontal/450_1000.jpg' width='100'></td>
											<td>Note 9</td>
											<td>A</td>
											<td>1000.00</td>
										</tr>
									</table>`;

									$('#data_read').html(vtn);

									$('#cart').click(function(){
											close = true;


										var monto_total = 0;

											var interfaz_card = ` 
											<table class='table' border='1' style='position:absolute; z-index:5; background:black; opacity:0.9; color:white; class='col-md-12'>
													<tr>
														<th>Image</th>
														<th>Product Name</th>
														<th>Quantity</th>
														<th>Price</th>
														<th>SubTotal</th>
														<th>Taxes</th>
														<th>Total</th>
													</tr>
													<tr>
														<td><img src='https://i.blogs.es/1ccc43/samsung-galaxy-note-9-frontal/450_1000.jpg' width='100'></td>
														<td>Note 9</td>
														<td>${cantitdad_note_9}</td>
														<td>1000.00</td>
														<td>${monto_total+=(cantitdad_note_9 * 1000)}.00</td>
														<td>3%</td>
														<td>${(cantitdad_note_9 * 1000)+30}</td>
													</tr>
													<tr>

														<td><img src='https://t.ipadizate.es/2018/07/iPhone-9-1-640x336.jpg' width='100'></td>
														<td>iPhone-9</td>
														<td>${cantitdad_iphone}</td>
														<td>1500.00</td>`;

													monto_total+=(cantitdad_iphone * 1500);
														
													interfaz_card+=`
														<td>${cantitdad_iphone * 1500}.00</td>
														<td>3%</td>
														<td>${(cantitdad_iphone * 1500)+45}</td>
													</tr>
													<tr>
														<td></td>
														<td></td>
														<td></td>
														<td></td>
														<td></td>
														<td>Total amount</td>
														<td>${monto_total+75}</td>
													</tr>
											<div style='left:-500px;'>
											<button class='btn-primary' id="pagar1">Pay PayPal</button>
											<button class='btn-primary' id="pagar2">Pay Credit Card</button>
											</div>
											</table>
										
										`;

										$('#card_view').html(interfaz_card);
											$('#card_view').show('slow');

										$('#close').click(()=>{

											closed_cart();


										});


										$('#pagar1').click(()=>{
											$('#image_avatar').html(`<a href="#"><img src="assets/client.png" style="height: 20px; width: 20px; margin-left: 10%;" class="img-circle img-responsive"></a>`);

												$('#usuario_text').html(`<p style="margin-top: 15%;" >Electric Power</p>`);
												closed_cart();
												$('#data_read').html(`<br><br><table class='table' border='1'>
															<tr>
																<th>Image</th>
																<th>Product</th>
																<th>Model</th>
																<th>Price</th>
																<td>Quantity</td>
															</tr>

															<tr>
																<td><img src='https://t.ipadizate.es/2018/07/iPhone-9-1-640x336.jpg' width='100'></td>
																<td>iPhone-9 </td>
																<td>A</td>
																<td>1500.00</td>
																<td>200</td>

															</tr>
																<tr>
																<td><img src='https://i.blogs.es/1ccc43/samsung-galaxy-note-9-frontal/450_1000.jpg' width='100'></td>
																<td>Note 9</td>
																<td>A</td>
																<td>1000.00</td>
																<td>300</td>
															</tr>
														</table>`);
												
														$('#sobre').addClass('active');
															//$('#message').html("<h2 style='color:darkblue; margin-top:12%; text-algain:center; margin-left:10%;'>Now you will be the client and we accept the request that the supplier sent you</h2>");
															$('#sobre').append(`
																    <div style="width: 500px;position: absolute; 
																    z-index:10; background:#f5ffcc; opacity:0.9; left:-400px; display:none" id="ventana"><img src="assets/user.png" style="height:80px; width:80px; margin-left:2%; margin-top:2%; broder-radius:10px;" class='img-circle'>
																    <strong style='color:blue;'>Here you have an order from the customer <a style='color:darkblue'>${contact_name}</a></strong>
																    <ul>
															    		<li>iPhone-9 x${cantitdad_iphone}</li>
															    		<li>Note-9 x${cantitdad_note_9}</li>
																    </ul>
																    <button class='btn-primary' style='margin-right:2%;' id='acept'>Accept</button><button class='btn-danger' id='cancer'>Cancer</button>
															</div>`);
															$('#ventana').show('slow');


															$('#acept').click(function(){

																$('#ventana').hide('slow',function(){

																	$('#ventana').remove();
																});

																$('#data_read').html(`

																	<strong>Send Invoice</strong>
																  <table class='table'>
																  	<tr>
																  		<th>Products<th>
																  		</th>Quantity</th>
																  	</tr>
																  	<tr>	
																  		<td>iPhone-9</td>
																  		<td>${cantitdad_iphone}</td>
																  	</tr>
																  	<tr>	
																  		<td>Note-9</td>
																  		<td>${cantitdad_note_9}</td>
																  	</tr>
																  	<tr>
																  		<td>Amount</td>
																  		<td>${monto_total}</td>
																  	</tr>
																  </table>
																	<button class='btn-primary' style='text-algain:center;' id="send_invoice">Send Invoice</button>

																`);

																$('#send_invoice').click(()=>{

																	$('#data_read').html(`<br><br><h1 style="color:#55e31c;margin-left:15%">Invoice sent successfully to customer ${contact_name} successfully</h1>`);

																});

															});

															$('#cancer').click(()=>{

																$('#ventana').hide('slow',function(){

																	$('#ventana').remove();
																});


															});


										});



									});

		


							});




						});

						$('#cancer').click(function(){


								$('#ventana').hide('slow');

						});



			}





		});




});