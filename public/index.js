console.log("RUNNING!!")
const Swal = require('sweetalert2')

$(function () {
  var count = 0; // SUBHANALLOH
  var count1 = 0; // ALHAMDULILLAH
  var count2 = 0; // ALLOHU AKBAR
  var count3 = 0; // SUBHANALLOHi VA BIHAMDIHI SUBHANALLOHIL A'ZIYM
  var count4 = 0; // ALHAMDULILLAHI VALLOHU AKBAR
  var count5 = 0; // LAA ILAHA ILLALLOH
  var count6 = 0; // ALOHUMMA SOLLI A'LA SAYYIDINA MUHAMMAD
  var count7 = 0; // ASTAG'FIRULLOHA VA ATUBU ILAYH
  var audio = new Audio("notf.wav");

  $(".counter_btn").on('click', () => {
    count++;
    document.getElementById('counter').innerHTML = count;
    alert_btf();
    for (var i = 0; i <= 1000000; i = i + 100) {
      if (count === i) {
        audio.play();
      }
    }


  });




  $(".reset_btn").on('click', () => {
    count = 0;
    document.getElementById('counter').innerHTML = count;

  })







  $("#word").change(function() {
    var select_val = $(this).val();
    // var select_name = $(this).name();
    // alert($(this).children("option:selected").text());
    var selected = $(this).children("option:selected").text();
    if (select_val === "zikr_1") {
      alert(`Siz ${selected} zikrini tanladingiz!`)
      count = 0;
      document.getElementById('counter').innerHTML = count;
    } else if (select_val === "zikr_2") {
      alert(`Siz ${selected} zikrini tanladingiz!`)
      count = 0;
      document.getElementById('counter').innerHTML = count;
    } else if (select_val === "zikr_3") {
      alert(`Siz ${selected} zikrini tanladingiz!`)
      count = 0;
      document.getElementById('counter').innerHTML = count;
    } else if (select_val === "zikr_4") {
      alert(`Siz ${selected} zikrini tanladingiz!`)
      count = 0;
      document.getElementById('counter').innerHTML = count;
    } else if (select_val === "zikr_5") {
      alert(`Siz ${selected} zikrini tanladingiz!`)
      count = 0;
      document.getElementById('counter').innerHTML = count;
    } else if (select_val === "zikr_6") {
      alert(`Siz ${selected} zikrini tanladingiz!`)
      count = 0;
      document.getElementById('counter').innerHTML = count;
    } else if (select_val === "zikr_7") {
      alert(`Siz ${selected} zikrini tanladingiz!`)
      count = 0;
      document.getElementById('counter').innerHTML = count;
    } else if (select_val === "zikr_8") {
      alert(`Siz ${selected} zikrini tanladingiz!`)
      count = 0;
      document.getElementById('counter').innerHTML = count;
    }
  })


  // time
  setInterval('updateClock()', 1000);







});

function updateClock (){
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
 }


 function alert_btf () {
   Swal.fire({
      title: 'Error!',
      text: 'Do you want to continue',
      icon: 'error',
      confirmButtonText: 'Cool'
    })
 }
