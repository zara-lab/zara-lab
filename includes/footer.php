
	<footer id="main-footer">
		  <p class="text-center">
		  	 <a href="//webstar.bg/?ref=zaralab.org" target="_blank" class="webstar-logo vtkpw">
		  	 	 <img src="assets/img/webstar-logo.svg" class="img-responsive" alt="">
		  	 </a>
		  </p>
	</footer>
 
  <div class="modal fade" id="subscribe-modal">
  	<div class="modal-dialog">
  		<div class="modal-content">
  			<div class="modal-header">
  				<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
  				<h4 class="modal-title">Записване за курс</h4>
  					
  					
  			</div>
  			<div class="modal-body">
  				 	<form action="post" onsubmit="return submitForm()">	
			 		   <div class="form-group">
							<label >Избран курс</label> 
								<select name="kurs"  class="form-control" required="required"> 
									 <?php foreach ($items as $course): ?>
									 		<option data-id="<?=($course['id'])?>"><?=$course['name']?></option>
									 <?php endforeach ?>
								</select>
						</div>
						<div class="form-group">
							 <label >Вашите имена</label>
							 <input type="text" name="names" class="form-control" required="" minlength="4" placeholder="">
               <div class="text-danger message names-message">Трябва да попълните Вашите имена!</div>
						</div>
						<div class="form-group">
							<label >Вашият телефон</label>
							 <input type="tel" name="phone" class="form-control" required="" minlength="5" placeholder="">
               <div class="text-danger message phone-message">Трябва да попълните Вашият телефон!</div>
						</div>
						<div class="form-group">
							  <label >Вашият имейл</label>
						  	<input type="email" name="email" class="form-control" required="" minlength="5" placeholder="">
               <div class="text-danger message email-message">Трябва да попълните Вашият имейл!</div>
						</div>
  				 		<div class="form-group">
  							<label >Местоживеене</label>
  							<input type="text" name="location" class="form-control" required="" minlength="3" placeholder="Пример: Гр. Стара Загора">
                <div class="text-danger message location-message">Трябва да попълните вашето Местоживеене!</div>
  						</div>
  						<div class="form-group">
  							<label >Възраст</label>
  							<div class="input-group">
  								<input type="number" name="years" class="form-control" required="" maxlength="4"  placeholder="">
  								<div class="input-group-addon">години</div>
  							</div>
                 <div class="text-danger clearfix message years-message">Трябва да попълните вашата възраст!</div>
  						</div>
  						<div class="form-group">
  							<label >Заетост</label> 
  								<select name="zaetost"  class="form-control" required="required">
  									<option value="учащ">учащ</option>
  									<option value="работещ">работещ</option>
  									<option value="безработен">безработен</option>
  								</select>
  						</div>
  						<div class="form-group">
  							<label >Имате ли опит/познания с конкретната технология?</label> 
  							<div class="radio-inline">
  								<label>
  									<input type="radio" name="experience"  value="Да" >
  									Да
  								</label>
  							</div>
  							<div class="radio-inline">
  								<label>
  									<input type="radio" name="experience"  value="Не" checked="checked">
  									Не
  								</label>
  							</div>
  						</div>
  					  
  						<!-- <button type="button" class="btn btn-default" data-dismiss="modal">Отказ</button> -->
  					<button type="submit" onclick="return submitForm()" class="btn btn-large btn-gradient">Запиши се сега!</button>
  				</form>
  			</div> 
  		</div>
  	</div>
  </div>
 

    <script src="assets/js/jquery.min.js"></script>
    <script src="assets/js/bootstrap.min.js"></script>
    <script type="text/javascript" src="//maps.google.com/maps/api/js?sensor=false&amp;key=AIzaSyAdhYt7OwzWx-kEFs57b5ABeTtU0DgfIPQ"></script>
    <script src="assets/js/gmaps.js"></script> 
    <script src="assets/js/moment.min.js"></script> 
    <script src="assets/plugins/sweetalert/lib/sweet-alert.min.js"></script> 
    <?php 
    	 $filteded_courses = array_map(function($item){
    	 	  unset($item['icon']);
    	 	  unset($item['description']);
    	 	  return $item;
    	 }, $items); 

    ?>
    <script>
    	 var courses = <?=json_encode($filteded_courses)?>;
    </script>
    <script src="assets/js/front.js"></script>
     <?php if (time() < 1539586800000): ?> 
	    <script type="text/javascript">
	 
				// countdown('.the-timer', "2018-10-15 10:00:00"); 
	    </script> 
     <?php endif ?>
    <script>(function(d, s, id) {
	  var js, fjs = d.getElementsByTagName(s)[0];
	  if (d.getElementById(id)) return;
	  js = d.createElement(s); js.id = id;
	  js.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.1&appId=443574086087103';
	  fjs.parentNode.insertBefore(js, fjs);
	}(document, 'script', 'facebook-jssdk'));</script>
  </body>
</html>
