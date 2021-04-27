API_KEY = "899e0cdbf0b3ab3bf2f6809f00098e23"

$(function(){
  $('#btn').on('click',function(){
    $ajax({
      url: "http://api.openweathermap.org/data/2.5/weather?q=" + $('#cityname').val() + "&units=metric&appid=" + API_KEY,
      dataType:'jsonp',
    }).done(function (data){
    }).fail(function (data){
      
    })
  });
});