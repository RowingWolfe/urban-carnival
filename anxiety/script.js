/**
 * Created by agraj on 9/27/2016.
 */
streamers = ["furyaki", "twitch", "freecodecamp", "northernlion", "gamegrumps","DansGaming", "comster404", "overwatchopen"];
var count = 0;
var count2 = 0;

function place(data) {
    $('.streamers-list').append(
        '<div class="streamer text-center stream'+count+'"> ' +
        '<img class="img-responsive channel-logo stream'+count+'" src=' + data.logo + '/> ' +
        '<h3 class="text-uppercase channel-name stream'+count+'">' + data.display_name + '</h3>' +
        '<p>Followers: ' + data.followers + '</p>' +
        '<div class="container-fluid  online-status'+count+'"></div>' +
        '</div>'
    );
    count++;
}

function live(data) {
    if (data.stream === null) {
        $(".online-status"+count2).html("Offline");
    } else if (data.error == "undefined") {
        console.log("Doesn't exist");
    } else {
        $(".online-status"+count2).html(data.stream.game + " " +
        '<a href="'+data.stream.channel.url+'" class="btn btn-info">Watch</a>'
        );
    }
    count2++;
}
function deadchannel(data){
    $('.streamers-list').append('<div class="streamer text-center stream'+count+'">'+'<h3>Channel missing: '+ streamers[count1]+ '</h3>');
}

$(document).ready(function() {
    for (var i in streamers) {
        var url = "https://api.twitch.tv/kraken/channels/" + streamers[i] + "?client_id=tthj817bsntx65xo68e50s78aneocix";
        var url2 = "https://api.twitch.tv/kraken/streams/" + streamers[i] + "?client_id=tthj817bsntx65xo68e50s78aneocix";
        $.ajax({
            url: url,
            type: 'GET',
            dataType: 'json',
            success: place
        });
        $.ajax({
            url: url2,
            type: 'GET',
            dataType: 'json',
            success: live,
            error: deadchannel
        });

    }
});

/*
for(streamer in streamers){
    streamerid = streamers[streamer];
    $.ajax({
        type: 'GET',
        url: 'https://api.twitch.tv/kraken/channels/'+streamerid,
        headers: {
            'Client-ID': 'tthj817bsntx65xo68e50s78aneocix'
        },
        success: function(data) {
            console.log(data);
            streamerid = data;
            streamerData.push(data);
            streamerName = streamerid.display_name;
            streamerClass = "." + streamerName;
            $('.streamers-list').append(
                '<div class="streamer text-center"> ' +
                '<img class="img-responsive channel-logo" src=' + streamerid.logo + '/> ' +
                '<h3 class="text-uppercase channel-name">' + streamerid.display_name + '</h3>' +
                '<p>Followers: ' + streamerid.followers + '</p>' +
                '<div class="container-fluid ' + streamerName + ' online-status"></div>' +
                '</div>'
            );
        },
        error: function (data) {
            $('.streamers-list').append(
            '<div class="streamer text-center">'+
                '<h3>Channel: ' + streamerid.display_name + ' not found.</h3>' +
            '</div>'
            )
        }
    });
    $.ajax({
        type: 'GET',
        url: 'https://api.twitch.tv/kraken/streams/' + streamerid,
        headers: {
            'Client-ID': 'tthj817bsntx65xo68e50s78aneocix'
        },
        success: function (data) {
            console.log(data);
            streamid = data;
            if(streamid.stream != null ){
                streamerOnline.push(streamid);
                if(streamid.stream.channel.display_name == streamerid.display_name){
                    $(streamerClass).html(
                        '<h4>'+ streamerid.game+'</h4>'+
                        '<h5 class="status">'+ streamerid.status +'</h5>'+
                        '<a href="'+streamerid.url+'" class="btn btn-info">Watch</a>'
                    );
                }
            }
        }
    });
}
/*
for(s in streamers){
    streamerid = streamers[s];
    $.ajax({
        type: 'GET',
        url: 'https://api.twitch.tv/kraken/streams/' + streamerid,
        headers: {
            'Client-ID': 'tthj817bsntx65xo68e50s78aneocix'
        },
        success: function (data) {
            console.log(data);
            streamid = data;
            if(streamid.stream != null ){
                streamerOnline.push(streamid);
                if(streamid.stream.channel.display_name == streamerData[s].display_name){
                    $(streamerClass).html(
                        '<h4>'+ streamerid.game+'</h4>'+
                        '<h5 class="status">'+ streamerid.status +'</h5>'+
                        '<a href="'+streamerid.url+'" class="btn btn-info">Watch</a>'
                    );
                }
                $(streamerClass).html(
                    '<h4>'+ streamerid.game+'</h4>'+
                    '<h5 class="status">'+ streamerid.status +'</h5>'+
                        '<a href="'+streamerid.url+'" class="btn btn-info">Watch</a>'
                );
            }
        }
    });
}
*/
//in future store all data as objects in an array... This is sloppy but I had to write it this way to test some things.