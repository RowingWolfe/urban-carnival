/**
 * Created by agraj on 9/27/2016.
 */

function search() {
    var searchInput = $("input").val();
    $.ajax({
        type: "GET",
        url: "https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=" + searchInput + "&utf8=&format=json&callback=?",
        contentType: "application/json; charset=utf-8",
        async: false,
        dataType: "json",
        success: function (data, textStatus, jqXHR) {
            var htmltext = "";
            for (var i = 0; i<data.query.search.length; i++) {
                var wikiurl = data.query.search[i].title.split(" ");
                wikiurl = wikiurl.join("_");
                htmltext += '<a target="_blank" href="https://en.wikipedia.org/wiki/'+wikiurl+'" class="list-group-item list-group-item-action"><h5 class="list-group-item-heading" style="color: darkseagreen">'+data.query.search[i].title+'</h5><p class="list-group-item-text">'+data.query.search[i].snippet+'...</p></a>';
            }
            $('#list').html(htmltext)
        },
        error: function (errorMessage) {
        }
    });
}