angular-calvin-hobbes
=====================

Calvin and Hobbes comic stripe fetcher.

![Calvin & Hobbes](http://cdn.denofgeek.us/sites/denofgeekus/files/calvin-and-hobbes.jpg 'Calvin & Hobbes')

How to use?
==========

Include `calvin-hobbes-comic` module in your app and include `CalvinHobbes` in your initializer.

Next you'll have an object onto `$rootScope` called `CalvinHobbes`.

`CalvinHobbes` contains:

+ `length [integer]`: it's the number of comic strip fetched by request. `max: 4`
+ `images [array]`: it has the comic stripes as an array of objects. The objects contains two properties: `image` and `publishedDate`

In the view you may use the images like:

```html
<img alt="obj.publishedDate"
  ng-src="obj.image"
  ng-repeat="obj in $root.CalvinHobbes.images">
```

How to test?
============

Run in your CLI `gulp test`

The test are in `test` folder. They use `.mocha.js` suffix.

Compile
=======

Run in your CLI `gulp compile`, it automaticaly compile the library for it distribution.

Contribute
==========

If you'd like to see a new functionality, please feel free to add new one.
