
$(document).ready(function () {
  //event clicker to add save button
  $( ".saveBtn" ).on( "click", function() {
        // seting var
        var timeBlockId = $(this).closest(".time-block").attr("id");
        var userDescription = $(this).siblings(".description").val();
        
        // save to local storage using timeBlockId as a key
        localStorage.setItem(timeBlockId, userDescription);
    

        //alert to tell user when saved to local storage
        alert("added to local storage")
  });

   // adding past, present, or future class to time blocks
   var currentHour = dayjs().hour();
   $(".time-block").each(function () {
     var blockHour = parseInt($(this).attr("id").split("-")[1]);
     if (blockHour < currentHour) {
       $(this).removeClass("present future").addClass("past");
     } else if (blockHour === currentHour) {
       $(this).removeClass("past future").addClass("present");
     } else {
       $(this).removeClass("past present").addClass("future");
     }
   });
 
   // saves user input to local storage and set values for textarea elements
   $(".time-block").each(function () {
     var timeBlockId = $(this).attr("id");
     var storedDescription = localStorage.getItem(timeBlockId);
     $(this).find(".description").val(storedDescription);
   });
 
   
 });



  



