$(function () {

  var ajax = $.get("https://api.myjson.com/bins/1680y")
  .done (function(data, textStatus, jqXHR) {
    console.log(ajax.responseJSON.passphrase);
  });


  $.ajax({
      url:"https://api.myjson.com/bins",
      type:"POST",
      data:'{"passphrase":"lemonchiffon"}',
      contentType:"application/json; charset=utf-8",
      dataType:"json",
      success: function(data, textStatus, jqXHR){
        console.log(data);
        console.log('successful post');
      }
  });




});
