describe('CalvinHobbes', function () {
  'use strict';

  var module;
  beforeEach(function () {
    module = window.module('calvin-hobbes-comic');
  });

  it("should be registered", function() {
    expect(module).not.to.equal(null);
  });

  describe('behavior', function () {
    var factory, scope, $httpBackend;
    var url = "//ajax.googleapis.com/ajax/services/feed/load?v=1.0&q=http://calvinhobbesdaily.tumblr.com/rss&callback=JSON_CALLBACK";

    beforeEach(inject(function($injector) {
      factory = $injector.get('CalvinHobbes');
      scope   = $injector.get('$rootScope').$new();
      $httpBackend = $injector.get('$httpBackend');

      var mockData  = {"responseData": {"feed":{"entries":[{"title":"Photo","link":"http://calvinhobbesdaily.tumblr.com/post/104692680484","author":"","publishedDate":"Mon, 08 Dec 2014 11:50:51 -0800","contentSnippet":"","content":"\u003cimg src\u003d\"http://33.media.tumblr.com/15102986759ff394f04c0d4cd98b3222/tumblr_nga4grYoXX1qdp8pko1_500.gif\"\u003e\u003cbr\u003e\u003cbr\u003e","categories":["Calvin and Hobbes"]},{"title":"Photo","link":"http://calvinhobbesdaily.tumblr.com/post/104582174174","author":"","publishedDate":"Sun, 07 Dec 2014 07:12:44 -0800","contentSnippet":"","content":"\u003cimg src\u003d\"http://38.media.tumblr.com/acdb54373d4e3f6fae324d26d8d2b6fb/tumblr_ng7wx8dnvr1qdp8pko1_500.gif\"\u003e\u003cbr\u003e\u003cbr\u003e","categories":["Calvin and Hobbes"]},{"title":"Photo","link":"http://calvinhobbesdaily.tumblr.com/post/104523910079","author":"","publishedDate":"Sat, 06 Dec 2014 14:21:44 -0800","contentSnippet":"","content":"\u003cimg src\u003d\"http://31.media.tumblr.com/a2cf2166b22b9550d2a6d4da40dc9738/tumblr_ng6m48j9al1qdp8pko1_500.gif\"\u003e\u003cbr\u003e\u003cbr\u003e","categories":["Calvin and Hobbes"]},{"title":"Photo","link":"http://calvinhobbesdaily.tumblr.com/post/104463353129","author":"","publishedDate":"Fri, 05 Dec 2014 20:19:52 -0800","contentSnippet":"","content":"\u003cimg src\u003d\"http://38.media.tumblr.com/a6cedc6d9341324ecd6a085b1b4968c0/tumblr_ng5814hRyN1qdp8pko1_500.gif\"\u003e\u003cbr\u003e\u003cbr\u003e","categories":["Calvin and Hobbes"]}]}}, "responseDetails": null, "responseStatus": 200};

      $httpBackend.whenJSONP(url).respond(mockData);
    }));

    it('should do a request to CalvinHobbes comic feed', function () {
      $httpBackend.expectJSONP(url);
      $httpBackend.flush();
    });

    it('should populate rootScope.CalvinHobbes.length with the length response', function () {
      $httpBackend.flush();
      assert.equal(4, scope.CalvinHobbes.length);
    });

    it('should populate rootScope.CalvinHobbes.images with a full entries list', function () {
      $httpBackend.flush();
      assert.equal(4, scope.CalvinHobbes.images.length);
    });

    it('should populate rootScope.CalvinHobbes.images first element', function () {
      $httpBackend.flush();
      var expected = "http://33.media.tumblr.com/15102986759ff394f04c0d4cd98b3222/tumblr_nga4grYoXX1qdp8pko1_500.gif";
      assert.equal(expected, scope.CalvinHobbes.images[0].image);
    });

    it('should populate rootScope.CalvinHobbes.images first element date', function () {
      $httpBackend.flush();
      var expected = new Date("Mon, 08 Dec 2014 11:50:51 -0800").getTime();
      assert.equal(expected, scope.CalvinHobbes.images[0].publishedDate.getTime());
    });

  });

});
