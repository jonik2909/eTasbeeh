console.log("RUNNING!!");
const Swal = require('sweetalert2');


$( function () {

  var count = 0;
  var click = new Audio("/music/click.mp3")
  var audio = new Audio("music/notf.wav");
  var brr = new Audio("music/BRR.mp3")
  var zikr_1_audio = new Audio("music/zikr_1.mp3");
  var zikr_2_audio = new Audio("music/zikr_2.mp3");
  var zikr_3_audio = new Audio("music/zikr_3.mp3");
  var zikr_4_audio = new Audio("music/zikr_4.mp3");
  var zikr_5_audio = new Audio("music/zikr_5.mp3");
  var zikr_6_audio = new Audio("music/zikr_6.mp3");
  var zikr_7_audio = new Audio("music/zikr_7.mp3");
  var zikr_8_audio = new Audio("music/zikr_8.mp3");

  $(".counter_btn").on('click', () => {
    count++;
    click.play();
    document.getElementById('counter').innerHTML = count;
    for (var i = 0; i <= 1000000; i = i + 100) {
      if (count === i) {
        audio.play();
      }
    }


  });


  function yes_or_no() {
    if (confirm("Are You Sure?") == true) {
      count = 0;
      document.getElementById('counter').innerHTML = count;
    } else {
      document.getElementById('counter').innerHTML = count;
    }
  }

  $(".reset_btn").on('click', () => {
    yes_or_no();
  })







  $("#word").change(function() {

    // ALERT FOR ZIKR
    function zikr_3s_alert () {
      const Toast = Swal.mixin({
         toast: true,
         position: 'center',
         showConfirmButton: false,
         timer: 3000,
         timerProgressBar: true,
         didOpen: (toast) => {
           toast.addEventListener('mouseenter', Swal.stopTimer)
           toast.addEventListener('mouseleave', Swal.resumeTimer)
         }
       })

       Toast.fire({
         icon: 'success',
         title: selected
       })
    }

    function zikr_9s_alert () {
      const Toast = Swal.mixin({
         toast: true,
         position: 'center',
         showConfirmButton: false,
         timer: 9000,
         timerProgressBar: true,
         didOpen: (toast) => {
           toast.addEventListener('mouseenter', Swal.stopTimer)
           toast.addEventListener('mouseleave', Swal.resumeTimer)
         }
       })

       Toast.fire({
         icon: 'success',
         title: selected
       })
    }

    function zikr_5s_alert () {
      const Toast = Swal.mixin({
         toast: true,
         position: 'center',
         showConfirmButton: false,
         timer: 5000,
         timerProgressBar: true,
         didOpen: (toast) => {
           toast.addEventListener('mouseenter', Swal.stopTimer)
           toast.addEventListener('mouseleave', Swal.resumeTimer)
         }
       })

       Toast.fire({
         icon: 'success',
         title: selected
       })
    }

    function zikr_4s_alert () {
      const Toast = Swal.mixin({
         toast: true,
         position: 'center',
         showConfirmButton: false,
         timer: 4000,
         timerProgressBar: true,
         didOpen: (toast) => {
           toast.addEventListener('mouseenter', Swal.stopTimer)
           toast.addEventListener('mouseleave', Swal.resumeTimer)
         }
       })

       Toast.fire({
         icon: 'success',
         title: selected
       })
    }

    function zikr_brr_alert () {
      const Toast = Swal.mixin({
         toast: true,
         position: 'center',
         showConfirmButton: false,
         timer: 6000,
         timerProgressBar: true,
         didOpen: (toast) => {
           toast.addEventListener('mouseenter', Swal.stopTimer)
           toast.addEventListener('mouseleave', Swal.resumeTimer)
         }
       })

       Toast.fire({
         icon: 'success',
         title: "BISMILLAHIR ROHMANI ROHIM"
       })
    }

    // END ALERT ZIKR


    var select_val = $(this).val();
    var selected = $(this).children("option:selected").text();
    if (select_val === "select") {
      zikr_brr_alert();
      brr.play();
      count = 0;
      document.getElementById('counter').innerHTML = count;
    } else if (select_val === "zikr_1") {
      zikr_3s_alert();
      zikr_1_audio.play();
      count = 0;
      document.getElementById('counter').innerHTML = count;
    } else if (select_val === "zikr_2") {
      zikr_3s_alert();
      zikr_2_audio.play();
      count = 0;
      document.getElementById('counter').innerHTML = count;
    } else if (select_val === "zikr_3") {
      zikr_3s_alert();
      zikr_3_audio.play();
      count = 0;
      document.getElementById('counter').innerHTML = count;
    } else if (select_val === "zikr_4") {
      zikr_9s_alert();
      zikr_4_audio.play();
      count = 0;
      document.getElementById('counter').innerHTML = count;
    } else if (select_val === "zikr_5") {
      zikr_3s_alert();
      zikr_5_audio.play();
      count = 0;
      document.getElementById('counter').innerHTML = count;
    } else if (select_val === "zikr_6") {
      zikr_5s_alert();
      zikr_6_audio.play();
      count = 0;
      document.getElementById('counter').innerHTML = count;
    } else if (select_val === "zikr_7") {
      zikr_9s_alert();
      zikr_7_audio.play();
      count = 0;
      document.getElementById('counter').innerHTML = count;
    } else if (select_val === "zikr_8") {
      zikr_4s_alert();
      zikr_8_audio.play();
      count = 0;
      document.getElementById('counter').innerHTML = count;
    }
  })


  // time
  $(setInterval(
  function updateClock(){
   	var currentTime = new Date ( );
    	var currentHours = currentTime.getHours ( );
    	var currentMinutes = currentTime.getMinutes ( );
    	var currentSeconds = currentTime.getSeconds ( );

    	// Pad the minutes and seconds with leading zeros, if required
    	currentMinutes = ( currentMinutes < 10 ? "0" : "" ) + currentMinutes;
    	currentSeconds = ( currentSeconds < 10 ? "0" : "" ) + currentSeconds;

    	// Choose either "AM" or "PM" as appropriate
    	var timeOfDay = ( currentHours < 12 ) ? "AM" : "PM";

    	// Convert the hours component to 12-hour format if needed
    	currentHours = ( currentHours > 12 ) ? currentHours - 12 : currentHours;

    	// Convert an hours component of "0" to "12"
    	currentHours = ( currentHours == 0 ) ? 12 : currentHours;

    	// Compose the string for display
    	var currentTimeString = currentHours + ":" + currentMinutes + ":" + currentSeconds + " " + timeOfDay;


     	$("#clock").html(currentTimeString);
   }, 1000));

});
