/**
 * Created by agraj on 9/26/2016.
 */

/*function unitSelector() {
    var tempUnit = "F";
    if (tempUnit = "F") {
        tempUnit = "C";
        $("#temp").html("" + Math.floor(data.main.temp * 9 / 5 - 459.67) + "&deg;<a onclick=unitSelector()>C</a>")
    } else if (tempUnit = "C") {
        tempUnit = "F";
        $("#temp").html("" + Math.floor(data.main.temp * 9 / 5 - 459.67) + "&deg;<a onclick='unitSelector()'>F</a>");
    }
}*/
//Well, this was an exercise in futility.

( function($) {
    // For some reason I had to create a jquery bodyguard.
    $(document).ready( function() {
        var lat=""; //Leaving these in for prosperity
        var long="";

        if (navigator.geolocation){
            navigator.geolocation.getCurrentPosition(function(position){
                $(".data").html("latitude: " + position.coords.latitude + "<br>longitude: " + position.coords.longitude);
                //I had no end of trouble getting this working. Kept having issues with some Listener not functioning.
                lat = position.coords.latitude;
                long = position.coords.longitude;
                var weatherURL = "http://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+long+"&APPID=e23589c9b7dbc85c84ab817a1bf51783";
                //This son of a bitch kept me busy for 4 hours thanks to the API not finding my city half the time...
                $.getJSON(weatherURL).done(function(data){
                    $("#temp").html(Math.floor(data.main.temp * 9 / 5 - 459.67)+"&deg;F"); //Easier than concat with api url queries for me.
                    $(".sky").html(data.weather[0].main);
                    //Background Change
                    if(data.weather[0].main == "Thunderstorm"){
                        $("#weather-disp").css('background-color', 'rgba(128,62,214,.8)');
                        $('html').css('background-image','url(http://farmersalmanac.com/wp-content/uploads/2015/06/Thunderstorm-5best.jpg)');
                    }else if(data.weather[0].main == "Drizzle"){
                        $("#weather-disp").css('background-color', 'rgba(155,187,189,.8)');
                        $('html').css('background-image','url(https://c2.staticflickr.com/8/7393/11375147803_0f453d8676_b.jpg)');
                    }else if(data.weather[0].main == "Rain"){
                        $("#weather-disp").css('background-color', 'rgba(0,56,209,.8)');
                        $('html').css('background-image','url(http://wallpapercave.com/wp/PbcCeJ4.jpg)');
                    }else if(data.weather[0].main == "Snow"){
                        $("#weather-disp").css('background-color', 'rgba(225,231,247,.8)');
                        $('html').css('background-image','url(https://i.ytimg.com/vi/Smzi-qL09VE/maxresdefault.jpg)');
                    }else if(data.weather[0].main == "Clear"){
                        $("#weather-disp").css('background-color', 'rgba(176,228,245,.8)');
                        $('html').css('background-image','url(https://snapshotsofwanaka.files.wordpress.com/2013/06/20130606-161727.jpg)');
                    }else if(data.weather[0].main == "Clouds"){
                        $("#weather-disp").css('background-color', 'rgba(193,201,224,.8)');
                        $('html').css('background-image','url(http://hayatimagazine.com/wp-content/uploads/2015/04/tree-under-cloudy-sky-nature-hd-wallpaper-1920x1200-3821.jpg)');
                    }
                    //Temp Color Change
                    if(Math.round(data.main.temp * 9 / 5 - 459.67) > 80){
                        $("#temp").css('color','rgb(255,132,0)');
                    }else if(Math.round(data.main.temp * 9 / 5 - 459.67) < 80 && Math.round(data.main.temp * 9 / 5 - 459.67) > 60){
                        $("#temp").css('color','white');
                    }else if(Math.round(data.main.temp * 9 / 5 - 459.67) < 60 && Math.round(data.main.temp * 9 / 5 - 459.67) > 32){
                        $("#temp").css('color','rgb(191,255,241)');
                    }else{
                        $("#temp").css('color','rgb(54,166,214)')
                    }
                    $("#unitSelect").prop(checked = false); //Bastard decided it would be checked automatically. I showed him.
                    $("#unitSelect").click(function () {
                        if($("#unitSelect").is(':checked')){
                            $("#temp").html(Math.round(data.main.temp - 273.15)+ "&deg;C");
                        }else if ($("#unitSelect").is(':checked')) {
                        } else {
                            $("#temp").html(Math.round(data.main.temp * 9 / 5 - 459.67) + "&deg;F");
                        }
                    })
                });
            });
        }
        //End Animation Setup.
        // ==================================================================
        //                Non-API Code or Basically nothing
        // ==================================================================


    } );
} ) ( jQuery );