var evntHandler = () => {

    var prefixURL = "https://api.flickr.com/services/feeds/photos_public.gne?tags=";
    var suffixURL = "&format=json&jsoncallback=?";
    var flickrTag = $("input").val();
    var requestURL = prefixURL + flickrTag + suffixURL;

    $.getJSON(requestURL, function(flickrResponse) {
        var imageArr = flickrResponse.items;
        $(".carousel-inner").empty();
        var addImagesToCarousel = function(imageArr) {
            imageArr.forEach(function(item) {
                var imgURL = item.media.m;
                var div = $('<div></div>').addClass("item");
                var img = $('<img>').attr("src", imgURL);
                div.append(img);
                $(".carousel-inner").append(div);
            });
        };
        addImagesToCarousel(imageArr);
        $('.item').first().addClass("active");
        $('#myCarousel').carousel(0);
    });
};

$("button").on("click", evntHandler);

$("input").on("keypress", function (event) {
    if (event.keyCode === 13) {
        evntHandler();
    }
});
