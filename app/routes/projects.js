import Ember from 'ember';

export default Ember.Route.extend({

  model: function() {
    return [
      { thumb: '<img src= "http://www.mikeledda.com/img/thumb-andela-website.jpg" >',
        name: 'The Beard Club',
        desc: 'Ruby on Rails, Twitter Bootstrap, Custom CSS, Permissions <br>' +
                'APIs - Facebook, Tumblr, Flickr, Instagram, 500px, 4,100 followers <br>'},

      { name: 'Drew Cuddhy Photography',
        desc: 'Custom CSS, JavaScript, Wordpress, Storefront <br>' +
              'Eye-Fi Inegration through Flickr for live blogging events.<br>'},

      { name: 'This Website',
        desc: 'JavaScript, Ember, Handlebars, Custom CSS <br>' +
              'Web development portfolio aka, space for me to <em>strut.</em>'},

      { name: 'Rantly',
        desc: 'Ruby on Rails, Javascript, Mustache, Custom CSS <br>' +
              'Like Twitter, but better.'},

      { name: 'gCamp',
        desc: 'Ruby on Rails, Twitter Bootsrap, Extensive Associations & Permissions <br>' +
              'A Rails app that has some of the same functionality as Basecamp.'},

      { name: 'Snipits Template',
        desc: 'CSS, SASS, Mustache, Awesome Bootsrap <br>' +
              'A Jekyll template.'},

      { name: 'Music Player',
        desc: 'Mustache, AJAX, HTML5 Audio & CSS. <br>' +
              'A simple music player.'}
    ];
  }
});
