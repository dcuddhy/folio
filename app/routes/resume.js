import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return [
  {  thumb: '<img src= "assets/screenshots/tbcdc-sm-lil.jpg" >',
      name: 'The Beard Club',
      desc: 'A curated collection of beard-centric content.<br>' +
            'Ruby on Rails, Sass, SVGs, multiple API calls,<br>' +
            'data parsing, responsive design, 4,100+ Followers.'},

   { thumb:'<img src= "assets/screenshots/gcamp-sm-bxr.jpg" >',
      name: 'gCamp',
      desc: 'Ruby on Rails, Twitter Bootstrap, administrators,<br>' +
            'multiple user projects, tasks with comments and due<br>' +
            'dates, dual application layouts.<br>'},

   { thumb: '<img src= "assets/screenshots/dcp-sm-bxr.jpg" >',
      name: 'Drew Cuddhy Photography',
      desc: 'A pre-gSchool photo portfolio & client hub. <br>' +
            'JavaScript image gallery, Wordpress, custom CSS <br>' +
            'shopping cart, live photo blogging integration. <br>'},

   { thumb: '<img src= "assets/screenshots/notes-sm-bxr.jpg" >',
      name: 'Notes',
      desc: 'A Stickies inspired note taking app. <br>' +
            'Ruby on Rails back end, Ember CLI front end, Font <br>' +
            'Awesome icons, flash messages.'}
    ];
}

});
