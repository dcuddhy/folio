import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return [
  {  thumb: '<img src= "http://www.mikeledda.com/img/thumb-andela-website.jpg" >',
      name: 'The Beard Club',
      desc: 'Ruby on Rails, Twitter Bootstrap, Custom CSS, Permissions <br>' +
            'APIs - Facebook, Tumblr, Flickr, Instagram, 500px, 4,100 followers <br>'},

   { thumb: '<img src= "assets/screenshots/dcp-sm-bx.jpg" >',
      name: 'Drew Cuddhy Photography',
      desc: 'Custom CSS, JavaScript, Wordpress, Storefront <br>' +
            'Eye-Fi Inegration through Flickr for live blogging events.<br>'},

   { thumb: '<img src= "http://amcuae.com/wp-content/uploads/2014/01/734465_602209193174852_791866153_n.jpg" >',
      name: 'This Website',
      desc: 'JavaScript, Ember, Handlebars, Custom CSS <br>' +
            'Web development portfolio aka, space for me to <em>strut.</em>'},

   { thumb: '<img src= "http://www.mikeledda.com/img/thumb-andela-website.jpg" >',
      name: 'Rantly',
      desc: 'Ruby on Rails, Javascript, Mustache, Custom CSS <br>' +
            'Like Twitter, but better.'},

   { thumb:'<img src= "assets/screenshots/gcamp-sm-bx.jpg" >',
      name: 'gCamp',
      desc: 'Ruby on Rails, Twitter Bootsrap, Extensive Associations & Permissions <br>' +
            'A Rails app inspired by as Basecamp.'},

   { thumb: '<img src= "http://www.mikeledda.com/img/pic-edison-displays-home.jpg" >',
      name: 'Snipits Template',
      desc: 'CSS, SASS, Mustache, Awesome Bootsrap <br>' +
            'A Jekyll template.'},

   { thumb: '<img src= "assets/screenshots/mde-sm-bx.jpg" >',
      name: 'Markdown Editor',
      desc: 'Mustache, AJAX, HTML5 Audio & CSS. <br>' +
            'A simple music player. A simple music player.'},

   { thumb: '<img src= "assets/screenshots/listen-sm-bx.jpg" >',
      name: 'Music Player',
      desc: 'Mustache, AJAX, HTML5 Audio & CSS. <br>' +
            'A simple music player.'},

   { thumb: '<img src= "http://www.mikeledda.com/img/pic-edison-displays-home.jpg" >',
      name: 'Local Notes',
      desc: 'CSS, SASS, Mustache, Awesome Bootsrap <br>' +
            'Users host their own local data in browser for unmatched security.'}
    ];
}

});
