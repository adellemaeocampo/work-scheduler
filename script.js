
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

   

