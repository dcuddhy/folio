import Ember from 'ember';

export default Ember.Route.extend({

  model: function() {
    return [
  {  thumb: '<img src= "assets/screenshots/tbcdc-sm-lil.jpg" >',
      name: 'The Beard Club',
      desc: 'A curated collection of beard-centric content for those ' +
            'who like facial hair - but is not restricted to just those ' +
            'who have it.<br><br>' +
            'The Beard Club was founded in 2008. The first version of the ' +
            'website functioned solely as an order form for hand crafted ' +
            'membership cards. For one year, cards were shipped all over ' +
            'the country and internationally to Ireland, England, and Finland. <br><br>' +
            'After producing membership cards proved to be too laborious, I ' +
            'decided that The Beard Club had to begin drawing in user generated ' +
            'content. This version of the project reflects that as it pulls in ' +
            'data from various local beard clubs all over the country. <br><br>' +
            'As of Spring 2015, The Beard Club has over 4,100 followers on Facebook.',
      tech: 'API Calls from Facebook, Instagram, & Tumblr <br>' +
            'Custom CSS & Sass <br>' +
            'Responsive Design <br>' +
            'SVG graphics'},

   { thumb:'<img src= "assets/screenshots/gcamp-sm-lil.jpg" >',
      name: 'gCamp',
      desc: 'A Ruby on Rails app that has been the foundation of my understanding' +
            'of the framework. It features users of various classes who can add ' +
            'or be added to projects. It stands to be an excellent group ' +
            'organizational tool with tasks, due dates, comments, and more. <br><br>' +
            'Log in for the full experience! <br>' +
            ' -User: user@example.com <br>' +
            ' -Pass: password',
      tech: 'Ruby on Rails <br>' +
            'Authorizations <br>' +
            'Associations <br>' +
            'Permissions <br>' +
            'Twitter Bootstrap <br>' +
            'Multiple Application Layouts'},

  //  { thumb: '<img src= "http://amcuae.com/wp-content/uploads/2014/01/734465_602209193174852_791866153_n.jpg" >',
  //     name: 'This Website',
  //     desc: 'JavaScript, Ember, Handlebars, Custom CSS <br>' +
  //           'Web development portfolio aka, space for me to <em>strut.</em>'},

  //  { thumb: '<img src= "http://www.mikeledda.com/img/thumb-andela-website.jpg" >',
  //     name: 'Rantly',
  //     desc: 'Ruby on Rails, Javascript, Mustache, Custom CSS <br>' +
  //           'Like Twitter, but better.'},

   { thumb: '<img src= "assets/screenshots/dcp-sm-lil.jpg" >',
      name: 'Drew Cuddhy Photography',
      desc: 'A pre-gSchool project! Originally set up as a photography ' +
            'portfolio, it acts as a place for potential clients to see my ' +
            'work and current clients to place orders and get sneak peaks at' +
            'their own collections.',
      tech: 'Customized Javascript Photo Gallery <br>' +
            'Wordpress Blog with Flickr & EyeFi API integration for live photo blogging. <br>' +
            'Implementation of third-party PHP store front <br>' +
            'Webfonts via Cufon'},

  //  { thumb: '<img src= "http://www.mikeledda.com/img/pic-edison-displays-home.jpg" >',
  //     name: 'Snipits Template',
  //     desc: 'CSS, SASS, Mustache, Awesome Bootsrap <br>' +
  //           'A Jekyll template.'},

   { thumb: '<img src= "assets/screenshots/notes-sm-bxr.jpg" >',
      name: 'Notes',
      desc: 'Notes joins the frontend and backend in a super snappy fast note' +
            'taking app. Inspired by Stickies.',
      tech: 'Ruby on Rails Backend <br>' +
            'Ember Frontend <br>' +
            'JavaScript <br>' +
            'Flash Notifications'},

   { thumb: '<img src= "assets/screenshots/listen-sm-lil.jpg" >',
      name: 'Listen',
      desc: 'A one page music player. Simple. Elegant.',
      tech: 'Jquery <br>' +
            'AJAX <br>' +
            'Mustache <br>'},

   { thumb: '<img src= "assets/screenshots/mde-sm-bxr-lil.jpg" >',
      name: 'Markdown Editor',
      desc: 'A simple, but well-designed markdown editor.',
      tech: 'Google Fonts <br>'}
    ];
  }
});
