  
if($("#contacts-map").length > 0 )
{
    // G-maps ?
            var docWidth = $(document).width();

            var map = new GMaps({
                div: '#contacts-map',
                lat:  42.4249223,
                lng: 25.6162558,
                zoom: 17,
                navigationControl: true,
                mapTypeControl: false,
                scaleControl: true,
                draggable: true,
                zoomControl : true,
                panControl : false,
                streetViewControl : false,
                scrollwheel: true
            });


            if(docWidth < 500) { map.setZoom(10); }

            var point = map.addMarker({
                    lat:  42.4249223,
                    lng: 25.6162558,
                      // icon: 'assets/img/icons/map-marker.svg',
                    // infoWindow: {
                    //     content: ''
                    // }
                }).addListener('click', function() {
                    map.setZoom(19);
                    map.setCenter(42.4249223,25.6162558);
                  });
                

            
}


// -----------------------------------
// # set equal height for all elements
// -----------------------------------
// # use like :
// # <div data-eaqual-height=".view-layout .products .item .title"> -> All product titles -> same height !
// -----------------------------------
$("[data-eaqual-height]").each(function () {
    var sibilings =  $(this).data('eaqual-height');
    $(document).on('change blur domready load', sibilings, function () {
      equalHeight(sibilings);
    });
    equalHeight(sibilings);
});

function equalHeight(selector) 
{
  var tallest = 0;
  $(selector).each(function() 
  {
      var thisHeight = $(this).height();
      if (thisHeight > tallest) 
      {
          tallest = thisHeight;
      }
  });
  $(selector).css('height', tallest);
}
// -----------------------------------

//  ---------------------------------
//  Create owl carousel from html
//  ---------------------------------
//   needs owl carousel !
//   owl-responsive => single quote !
//  ---------------------------------

  
  $('[data-owl-init]').each(function()
  {
     // > .item !!! childs !!
    var slider = $(this);
    var sliderLoop = slider.data('owl-loop')  ? !!slider.data('owl-loop') : false;
    var sliderAutoPlay = slider.data('owl-autoplay')  ? !!slider.data('owl-autoplay') : true;
    var sliderSpeed = slider.data('owl-speed') ? parseInt(slider.data('owl-speed')) : 5000;
    var sliderMargin = slider.data('owl-margin')  ? parseInt(slider.data('owl-margin')) : 10;
    var sliderVisibleItems = slider.data('owl-items') ? parseInt(slider.data('owl-items')) : 1;
    var sliderUseNav = slider.data('owl-nav') ? !!slider.data('owl-nav') : false;
    var sliderUseNavText = slider.data('owl-nav-text') ? slider.data('owl-nav-text') : ['',''];
    var sliderResponsive =  slider.data('owl-responsive')  ? slider.data('owl-responsive') : {};
    var navPrevBtnSelector =  slider.data('owl-prev-controller')  ? slider.data('owl-prev-controller') : false;
    var navNextBtnSelector =  slider.data('owl-next-controller')  ? slider.data('owl-next-controller') : false;
    var sliderStagePadding =  slider.data('owl-stage-padding')  ? slider.data('owl-stage-padding') : false;
    var sliderCenterElements =  slider.data('owl-center')  ? slider.data('owl-center') : false;
    var progressBarId =  slider.data('owl-progressbar') && slider.data('owl-progressbar').length  ? slider.data('owl-progressbar') : false;
     var defaults = {
        loop: sliderLoop ,
        autoplay: sliderAutoPlay ,
         autoplayTimeout: sliderSpeed ,
        margin: sliderMargin ,
        items: sliderVisibleItems ,
        nav: sliderUseNav ,
        navText:  sliderUseNavText ,
        stagePadding:  sliderStagePadding ,
        center:  sliderCenterElements ,
        responsive: sliderResponsive
      }
      slider.owlCarousel( $.extend( defaults) );
         
      if(progressBarId)
      {
      
         slider.on('initialize.owl.carousel', function()
         { 
             $(progressBarId).css({
               width: "100%",
               transition: "width "+sliderSpeed+"ms"
             });
         });

         slider.on('translate.owl.carousel',  function () 
         {
           $(progressBarId).css({
             width: 0,
             transition: "width 0s"
           });
         });

         slider.on('translated.owl.carousel',  function() 
         { 
             $(progressBarId).css({
               width: "100%",
               transition: "width "+sliderSpeed+"ms"
             });
         });

      } 
      // console.log(sliderResponsive);
      // console.log(sliderResponsive);
      if(navPrevBtnSelector != false)
      {
        $(navPrevBtnSelector).on('click tap',function () {
            slider.trigger('prev.owl.carousel');
        });
      }
      if(navNextBtnSelector != false)
      {
        $(navNextBtnSelector).on('click tap',function () {
            slider.trigger('next.owl.carousel');
        });
      }
  });
  // END automate owl carousel
 

// var countDownDate = new Date("2008-06-2715:37:25").getTime();
function countdown(selector, dateTimeFormat, showLabels) // new Date("2008-06-2715:37:25").getTime();
{
   if(!showLabels) showLabels = false;
   if(!selector || !dateTimeFormat) return console.error('countdown functions expects 2 parameters, less given !!!');
   // var countDownDate = new Date(dateTimeFormat).getTime();
   var countDownDate = parseInt(moment(dateTimeFormat).format('x'));

    $(selector).each(function(){
      var element = $(this);
      // Update the count down every 1 second
      var x = setInterval(function() 
      {
 
          // Get todays date and time
          var now = new Date().getTime();

          // Find the distance between now an the count down date
          var distance = countDownDate - now;

          // Time calculations for days, hours, minutes and seconds
          var days = Math.floor(distance / (1000 * 60 * 60 * 24));
          var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
          var seconds = Math.floor((distance % (1000 * 60)) / 1000);
           if(parseInt(days) < 10) days = "0" + days; 
           if(parseInt(hours) < 10) hours = "0" + hours; 
           if(parseInt(minutes) < 10) minutes = "0" + minutes; 
           if(parseInt(seconds) < 10) seconds = "0" + seconds; 

          // Display the result in the element 
          var html =  "<span class='timer-box days'>"+
              "<span>" + String(days).split("").join('</span><span>') + "</span>"+
               "<span class='box-label'>Дни</span>" + 
          "</span>"+
          // var html = 
          "<span class='timer-box hours'>"+
              "<span>" + String(hours).split("").join('</span><span>')  + "</span>" +
              "<span class='box-label'>Часа</span>"+
          "</span>"+
          "<span class='timer-box minutes'>"+
             "<span>" + String(minutes).split("").join('</span><span>')  + "</span>" +
             "<span class='box-label'>Минути</span>"+
          "</span>"+
          "<span class='timer-box seconds no-dots'>"+
            "<span>" + String(seconds).split("").join('</span><span>')  + "</span>"+
              "<span class='box-label'>Секунди</span>"+
          "</span>";
          element.html( html );

          // If the count down is finished, write some text 
          if (distance < 0) { 
            clearInterval(x);
             element.html( "<span class='timer-box days'>" + (days * 0) + "</span><span class='timer-box hours'>" + (hours * 0) + "</span><span class='timer-box minutes'>"
               + (minutes * 0) + "</span><span class='timer-box seconds'>" + (seconds * 0) + "</span>");
          }
       }, 1000);

    });
}

function subscribe(courseId)
{

    $('#subscribe-modal option[data-id='+courseId+']').prop('selected',  true);
    $('#subscribe-modal').modal('show');
    return false;
}

function submitForm(){
    var data = $('form').serializeArray();
    var hasErrors = [];
    // console.log(data);
    for (var i = 0; i < data.length; i++) {
        var obj  = data[i];
        var type = $("[name="+obj.name+"]").attr('type'); 
        if( (type == 'text' || type == 'tel' || type == 'email')  && obj.value.length < 5) {
           $("[name="+obj.name+"]").parent().addClass('has-error'); 
           $("."+obj.name+"-message").addClass('active'); 
           hasErrors.push(obj.name);
        }
       else if(  type == 'number'  && obj.value.length <= 1) {
           $("[name="+obj.name+"]").parent().addClass('has-error'); 
           $("."+obj.name+"-message").addClass('active'); 
           hasErrors.push(obj.name);
        }
        else{
          $("[name="+obj.name+"]").parent().removeClass('has-error'); 
          $("."+obj.name+"-message").removeClass('active');   
           delete hasErrors[obj.name];
        }
    }
    // console.log(hasErrors);
    if(hasErrors.length==0)
    { 
      $.post('https://zaralab.azurewebsites.net/academy', data, function(response){
             console.log(response); 
             $('#subscribe-modal').modal('hide');
             swal("Готово!", "Вашата заявка беше записана, ще се свържем с вас скоро!", "success");  // success/error 
      }).fail(function() {
        swal("Възникна грешка :(", "Опитайте отново или се свържете с нас на email: academy@zaralab.org", "error");
      })
    }
    return false;
}