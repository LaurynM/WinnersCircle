// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".switch").on("click", function(event) {
      var id = $(this).data("id");
      var currentRacing = $(this).data("racing");
      var newRacing = 0;
      (currentRacing == 0) ? newRacing = 1 : newRacing = 0;
  
      // Send the PUT request.
      $.ajax("/api/horses/" + id, {
        type: "PUT",
        data: {racing: newRacing, id: id}
      }).then(
        function() {
          // Reload the page
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      event.preventDefault();
  
      var newHorse = {
        horseName: $("#horse").val().trim(),
        racing: false
      };
  
      // Send the POST request.
      $.ajax("/api/horses", {
        type: "POST",
        data: newHorse
      }).then(
        function() {
          console.log("named new horse");
          location.reload();
        }
      );
    });
  });
  