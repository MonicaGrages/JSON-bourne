$(function () {



  $("#mission_one_btn").on ('click', function () {
    $('#mission_status').html('In Progress');
    var ajax = $.get("https://api.myjson.com/bins/1680y")
    .done (function(data, textStatus, jqXHR) {
      console.log(data.passphrase);
      console.log(textStatus);
        if (textStatus === "success") {
        $('#mission_status').html('Completed');
      } else {
        $('#mission_status').html('Failed');
      }
    });
  });


  $("#mission_two_btn").on ('click', function () {
    $('#mission_status').html('In Progress');
    $.ajax({
          url:"https://api.myjson.com/bins",
          type:"POST",
          data:'{"passphrase":"lemonchiffon"}',
          contentType:"application/json; charset=utf-8",
          dataType:"json",
          success: function(data, textStatus, jqXHR){
            console.log('posted to: '+data.uri);
            console.log(textStatus);
            if (textStatus === "success") {
              $('#mission_status').html('Completed');
            } else {
              $('#mission_status').html('Failed');
            }
          }
      });
  });

  $("#mission_three_btn").on ('click', function () {
    $('#mission_status').html('In Progress');
    ajax = $.get("https://api.myjson.com/bins/3te1c")
    .done (function(data, textStatus, jqXHR) {
      console.log(ajax.responseJSON.passphrase);
      console.log(textStatus);
      if (textStatus === "success") {
        $('#mission_status').html('Completed');
      } else {
        $('#mission_status').html('Failed');
      }
    });
  });




});
