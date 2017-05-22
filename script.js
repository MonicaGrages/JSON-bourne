$(function () {

  var ajax = $.get("https://api.myjson.com/bins/1680y")
  .done (function(data, textStatus, jqXHR) {
    console.log(ajax.responseJSON.passphrase);
  });







});
