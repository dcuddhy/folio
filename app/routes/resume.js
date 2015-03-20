import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return [
  {  thumb: '<a href= "https://tbcdc.herokuapp.com" target="_blank"> <img src= "assets/screenshots/tbcdc-sm-lil.jpg" > </a>',
      name: 'The Beard Club',
      desc: 'A curated collection of beard-centric content.<br>' +
            'Ruby on Rails, Sass, SVGs, multiple API calls,<br>' +
            'data parsing, responsive design, 4,100+ Followers.'},

   { thumb:'<a href= "https://mysterious-citadel-5725.herokuapp.com/" target="_blank"> <img src= "assets/screenshots/gcamp-sm-lil.jpg" > </a>',
      name: 'gCamp',
      desc: 'Ruby on Rails, Twitter Bootstrap, administrators,<br>' +
            'multiple user projects, tasks with comments and due<br>' +
            'dates, dual application layouts.<br>'},

   { thumb: '<a href= "http://www.drewcuddhy.com" target="_blank"> <img src= "assets/screenshots/dcp-sm-lil.jpg" > </a>',
      name: 'Drew Cuddhy Photography',
      desc: 'A pre-gSchool photo portfolio & client hub. <br>' +
            'JavaScript image gallery, Wordpress, custom CSS <br>' +
            'shopping cart, live photo blogging integration. <br>'},

   { thumb: '<a href= "https://warm-island-1114.herokuapp.com/notes" target="_blank"> <img src= "assets/screenshots/notes-sm-bxr.jpg" > </a>',
      name: 'Notes',
      desc: 'A Stickies inspired note taking app. <br>' +
            'Ruby on Rails backend, Ember CLI frontend, Font <br>' +
            'Awesome icons, flash messages.'}
    ];
}

});
