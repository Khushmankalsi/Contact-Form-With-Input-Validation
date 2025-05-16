function include(url){ 
  document.write('<script src="js/'+ url + '"></script>'); 
  return false ;
}

include('jquery.cookie.js');

 
$(window).scroll(
    function(){
        if (
            $(this).scrollTop() > 0) {
                $("#advanced").css({position:'fixed'});
            }else{
                $("#advanced").css({position:'relative'});
            }
        }
);  



include('device.min.js');
/* Stick up menu
========================================================*/
include('tmstickup.js');
$(window).load(function() { 
  if ($('html').hasClass('desktop')) {
      $('#stuck_container').TMStickUp({
      })
  }  
});

/* DEVICE.JS AND SMOOTH SCROLLIG
========================================================*/
