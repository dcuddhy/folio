import Ember from 'ember';

export default Ember.Route.extend({

  model: function() {
    return [
  {  thumb: '<a href= "https://tbcdc.herokuapp.com" target="_blank"> <img src= "assets/screenshots/tbcdc-sm-lil.jpg" > </a>',
      name: 'The Beard Club',
    github: '<a href= "https://github.com/dcuddhy/tbcdc" target="_blank"> GitHub </a> •',
      live: '<a href= "https://tbcdc.herokuapp.com" target="_blank"> Live Site </a>',
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

   { thumb:'<a href= "https://mysterious-citadel-5725.herokuapp.com/" target="_blank"> <img src= "assets/screenshots/gcamp-sm-lil.jpg" > </a>',
      name: 'gCamp',
    github: '<a href= "https://github.com/dcuddhy/gCamp" target="_blank"> GitHub </a> •',
      live: '<a href= "https://mysterious-citadel-5725.herokuapp.com/" target="_blank"> Live Site </a>',
      desc: 'A Ruby on Rails app that has been the foundation of my understanding' +
            'of the framework. It features users of various classes who can add ' +
            'or be added to projects. It stands to be an excellent group ' +
            'organizational tool with tasks, due dates, comments, and more. <br><br>' +
            'Log in for the full experience! <br>' +
            ' -User: user@example.com <br>' +
            ' -Pass: password',
      tech: 'Ruby on Rails <br>' +
            'RSpec Tests <br>' +
            'Authentications <br>' +
            'Authorizations <br>' +
            'Associations <br>' +
            'Twitter Bootstrap <br>' +
            'Multiple Application Layouts'},

   { thumb: '<a href= "http://www.drewcuddhy.com" target="_blank"> <img src= "assets/screenshots/dcf-sm-lil.jpg" > </a>',
      name: 'Personal Portfolio',
    github: '<a href= "https://github.com/dcuddhy/folio" target="_blank"> GitHub </a> •',
      live: '<a href= "https://www.dcuddhy.com/" target="_blank"> Live Site </a>',
      desc: 'A collection of my most recent and favorite works, ' +
            'served from a Linux server.',
      tech: 'Ember <br>' +
            'Web Fonts <br>' +
            'CSS Animations <br>' +
            'Responsive Design <br>' +
            'Sass <br>' +
            'SVG <br>'},

  //  { thumb: '<img src= "http://www.mikeledda.com/img/thumb-andela-website.jpg" >',
  //     name: 'Rantly',
  //     desc: 'Ruby on Rails, Javascript, Mustache, Custom CSS <br>' +
  //           'Like Twitter, but better.'},

   { thumb: '<a href= "http://www.drewcuddhy.com" target="_blank"> <img src= "assets/screenshots/dcp-sm-lil.jpg" > </a>',
      name: 'Drew Cuddhy Photography',
    github: '',
      live: '<a href= "http://www.drewcuddhy.com" target="_blank"> Live Site </a>',
      desc: 'A pre-gSchool project! Originally set up as a photography ' +
            'portfolio, it acts as a place for potential clients to see my ' +
            'work and current clients to place orders and get sneak peaks at ' +
            'their own collections.',
      tech: 'Customized Javascript Photo Gallery <br>' +
            'Wordpress Blog with Flickr & EyeFi API integration for live photo blogging. <br>' +
            'Implementation of third-party PHP store front <br>' +
            'Webfonts via Cufon'},

  //  { thumb: '<img src= "http://www.mikeledda.com/img/pic-edison-displays-home.jpg" >',
  //     name: 'Snipits Template',
  //     desc: 'CSS, SASS, Mustache, Awesome Bootsrap <br>' +
  //           'A Jekyll template.'},

   { thumb: '<a href= "https://warm-island-1114.herokuapp.com" target="_blank"> <img src= "assets/screenshots/notes-sm-bxr.jpg" > </a>',
      name: 'Notes',
    github: '<a href= "https://github.com/dcuddhy/localnotes" target="_blank"> GitHub </a> •',
      live: '<a href= "https://warm-island-1114.herokuapp.com" target="_blank"> Live Site </a>',
      desc: 'Notes joins the frontend and backend in a super snappy fast note ' +
            'taking app. Inspired by Stickies.',
      tech: 'Ruby on Rails Backend <br>' +
            'Ember Frontend <br>' +
            'JavaScript <br>' +
            'Flash Notifications'},

   { thumb: '<a href= "http://development.listendrewcuddhy.divshot.io/" target="_blank"> <img src= "assets/screenshots/listen-sm-lil.jpg" > </a>',
      name: 'Listen',
    github: '<a href= "https://github.com/dcuddhy/listen" target="_blank"> GitHub </a> •',
      live: '<a href= "http://development.listendrewcuddhy.divshot.io/" target="_blank"> Live Site </a>',
      desc: 'A one page music player. Simple. Elegant.',
      tech: 'Jquery <br>' +
            'AJAX <br>' +
            'Mustache <br>'},

   { thumb: '<a href= "https://hidden-cliffs-5294.herokuapp.com/" target="_blank"> <img src= "assets/screenshots/mde-sm-bxr-lil.jpg" > </a>',
      name: 'Markdown Editor',
    github: '<a href= "https://github.com/dcuddhy/markdowneditor" target="_blank"> GitHub </a> •',
      live: '<a href= "https://hidden-cliffs-5294.herokuapp.com/" target="_blank"> Live Site </a>',
      desc: 'A simple, but well-designed markdown editor.',
      tech: 'Google Fonts <br>'}
    ];
  }
});
