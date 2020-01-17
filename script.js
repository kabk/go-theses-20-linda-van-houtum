// $( "button" ).click(function() {
//   $( ".potato" ).toggle( "slow" );
// });



$(document).ready(function(){
  $("#zero-dropdown").click(function(){
    $("#zero-content").slideToggle("slow");
  });
});


$(document).ready(function(){
  $("#one-dropdown").click(function(){
    $("#one-content").slideToggle("slow");
  });
});

$(document).ready(function(){
  $("#two-dropdown").click(function(){
    $("#two-content").slideToggle("slow");
  });
});


$(document).ready(function(){
  $("#three-dropdown").click(function(){
    $("#three-content").slideToggle("slow");
  });
});

$(document).ready(function(){
  $("#four-dropdown").click(function(){
    $("#four-content").slideToggle("slow");
  });
});


$(document).ready(function(){
  $("#five-dropdown").click(function(){
    $("#five-content").slideToggle("slow");
  });
});


$(document).ready(function(){
  $("#six-dropdown").click(function(){
    $("#six-content").slideToggle("slow");
  });
});


$(document).ready(function(){
  $("#seven-dropdown").click(function(){
    $("#seven-content").slideToggle("slow");
  });
});



  $('#close1').click(function(){
  $('#img1').animate({
    right: $(window).width()*-1
  }, 1000)
})

$('#open1').click(function(){
  $('#img1').animate({
    right: 0
  }, 1000)
})






  $('#close2').click(function(){
  $('#img2').animate({
    right: $(window).width()*-1
  }, 1000)
})

$('#open2').click(function(){
  $('#img2').animate({
    right: 0
  }, 1000)
})
