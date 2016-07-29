function shortUrl() {
  return function (text, length, end) {
    var getLocation = function(href) {
    var l = document.createElement("a");
    l.href = href;
	    return l;
			};

  	var url = getLocation(text);
    return url.hostname.replace(/^www\./, "");
    };
}

angular.module('app').filter('shortUrl', shortUrl);
