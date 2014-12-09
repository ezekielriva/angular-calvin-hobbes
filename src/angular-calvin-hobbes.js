angular.module('calvin-hobbes-comic', []).factory('CalvinHobbes',
  ['$http', '$rootScope', '$window', function($http, $rootScope){

  'use strict';

  var url     = "//ajax.googleapis.com/ajax/services/feed/load",
      params  = "?v=1.0&q=http://calvinhobbesdaily.tumblr.com/rss&callback=JSON_CALLBACK"
  ;

  $rootScope.CalvinHobbes = {
    length: 0,
    images: []
  };

  return $http.jsonp(url + params).success(function (data) {
    var feed = data.responseData.feed;
    $rootScope.CalvinHobbes.length = feed.entries.length;

    for (var i = 0; i < feed.entries.length; i++) {
      var entry   = feed.entries[i],
          matched = entry.content.match(/src.*"(.*.gif)/);

      $rootScope.CalvinHobbes.images.push({
        image:         matched[1],
        publishedDate: new Date(entry.publishedDate)
      });
    }

  });
}]);
