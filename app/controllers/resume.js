import Ember from 'ember';

export default Ember.ArrayController.extend({

  trainings: [
    { name: "gSchool",
      desc: "Full-Stack Immersive <br> Ruby on Rails, Ember",
      date: "April 2015"},
    { name: "Galvanize",
      desc: "Work Study <br> Ran an Ember CLI front end ",
      date: "February 2015"}
  ]

});
